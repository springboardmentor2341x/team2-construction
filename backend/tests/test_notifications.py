import os
import pytest
from datetime import date, timedelta
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.main import app
from app.database import Base, get_db, ensure_notifications_table_schema
from app import models, crud, auth
from app.auth import create_access_token

# Use an in-memory or test sqlite database for testing
TEST_DATABASE_URL = "sqlite:///./test_construction.db"

engine = create_engine(TEST_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_and_teardown_db():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    ensure_notifications_table_schema()
    yield
    Base.metadata.drop_all(bind=engine)


def create_test_user(db, email, full_name, role="Project Manager"):
    hashed_pwd = auth.hash_password("password123")
    user_in = models.User(
        full_name=full_name,
        email=email,
        phone="1234567890",
        password=hashed_pwd,
        role=role,
        is_active=True
    )
    db.add(user_in)
    db.commit()
    db.refresh(user_in)
    return user_in


def get_auth_headers(email, role):
    token = create_access_token(data={"sub": email, "role": role})
    return {"Authorization": f"Bearer {token}"}


def test_1_task_assignment_notification():
    db = TestingSessionLocal()
    user_a = create_test_user(db, "usera@example.com", "User A", role="Site Engineer")
    user_b = create_test_user(db, "userb@example.com", "User B", role="Contractor")

    project = models.Project(
        project_code="P100",
        name="Project Alpha",
        category="Civil",
        client_name="Client A",
        budget=500000.0,
        project_manager="User A"
    )
    db.add(project)
    db.commit()

    # Assign Site Engineer User A
    assign = models.SiteEngineerAssignment(
        project_id=project.id,
        engineer_name="User A",
        assigned_date=date.today(),
        status="Assigned"
    )
    db.add(assign)
    db.commit()

    # Create task schedule
    sched_data = {
        "project_id": project.id,
        "task_name": "Foundation Digging",
        "description": "Dig 10m deep foundation",
        "start_date": str(date.today()),
        "end_date": str(date.today() + timedelta(days=5)),
        "status": "Pending"
    }
    res = client.post("/project-schedules", json=sched_data)
    assert res.status_code == 200

    # User A headers
    headers_a = get_auth_headers("usera@example.com", "Site Engineer")
    res_a = client.get("/notifications", headers=headers_a)
    assert res_a.status_code == 200
    notes_a = res_a.json()
    assert len(notes_a) >= 1
    task_notes = [n for n in notes_a if n["type"] == "TASK_ASSIGNMENT"]
    assert len(task_notes) == 1
    assert "Foundation Digging" in task_notes[0]["message"]

    # User B headers (User B is not assigned to Project Alpha)
    headers_b = get_auth_headers("userb@example.com", "Contractor")
    res_b = client.get("/notifications", headers=headers_b)
    assert res_b.status_code == 200
    notes_b = res_b.json()
    assert len(notes_b) == 0
    db.close()


def test_2_project_isolation():
    db = TestingSessionLocal()
    user_proj1 = create_test_user(db, "pm1@example.com", "Manager 1", role="Project Manager")
    user_proj2 = create_test_user(db, "pm2@example.com", "Manager 2", role="Project Manager")

    p1 = models.Project(
        project_code="P1",
        name="Project 1",
        category="Civil",
        client_name="Client 1",
        location="Site 1",
        start_date=date.today(),
        expected_completion_date=date.today() + timedelta(days=30),
        budget=100000.0,
        project_manager="Manager 1"
    )
    p2 = models.Project(
        project_code="P2",
        name="Project 2",
        category="Commercial",
        client_name="Client 2",
        location="Site 2",
        start_date=date.today(),
        expected_completion_date=date.today() + timedelta(days=30),
        budget=200000.0,
        project_manager="Manager 2"
    )
    db.add_all([p1, p2])
    db.commit()

    # Update Project 1 status
    res = client.put(f"/projects/{p1.id}/status?status=In%20Progress")
    assert res.status_code == 200

    # Check Manager 1 notifications (Project 1)
    h1 = get_auth_headers("pm1@example.com", "Project Manager")
    n1 = client.get("/notifications", headers=h1).json()
    assert any(n["project_id"] == p1.id for n in n1)

    # Check Manager 2 notifications (Project 2 - should be empty)
    h2 = get_auth_headers("pm2@example.com", "Project Manager")
    n2 = client.get("/notifications", headers=h2).json()
    assert not any(n["project_id"] == p1.id for n in n2)
    db.close()


def test_3_notification_privacy():
    db = TestingSessionLocal()
    user_a = create_test_user(db, "usera@example.com", "User A", role="Project Manager")
    user_b = create_test_user(db, "userb@example.com", "User B", role="Contractor")

    # Create notification for User B directly
    n_b = models.Notification(
        user_id=user_b.id,
        type="SYSTEM",
        title="Private Notification for B",
        message="Secret message for B",
        is_read=False
    )
    db.add(n_b)
    db.commit()

    headers_a = get_auth_headers("usera@example.com", "Project Manager")

    # User A tries to get User B's notification
    res_get = client.get(f"/notifications/{n_b.id}", headers=headers_a)
    assert res_get.status_code == 403

    # User A tries to mark User B's notification as read
    res_read = client.patch(f"/notifications/{n_b.id}/read", headers=headers_a)
    assert res_read.status_code == 403
    db.close()


def test_4_unread_count_and_mark_as_read():
    db = TestingSessionLocal()
    user = create_test_user(db, "user@example.com", "User One", role="Project Manager")

    n = models.Notification(
        user_id=user.id,
        type="PROJECT_UPDATE",
        title="Test Update",
        message="Test message",
        is_read=False
    )
    db.add(n)
    db.commit()

    headers = get_auth_headers("user@example.com", "Project Manager")

    # Unread count should be 1
    res_count = client.get("/notifications/unread-count", headers=headers)
    assert res_count.status_code == 200
    assert res_count.json()["unread_count"] == 1

    # Mark read
    res_mark = client.patch(f"/notifications/{n.id}/read", headers=headers)
    assert res_mark.status_code == 200
    assert res_mark.json()["is_read"] is True

    # Unread count should be 0
    res_count_after = client.get("/notifications/unread-count", headers=headers)
    assert res_count_after.json()["unread_count"] == 0
    db.close()


def test_5_mark_all_as_read():
    db = TestingSessionLocal()
    user = create_test_user(db, "userall@example.com", "User All", role="Project Manager")

    for i in range(5):
        n = models.Notification(
            user_id=user.id,
            type="SYSTEM",
            title=f"Notification {i}",
            message=f"Message {i}",
            is_read=False
        )
        db.add(n)
    db.commit()

    headers = get_auth_headers("userall@example.com", "Project Manager")

    res_count = client.get("/notifications/unread-count", headers=headers)
    assert res_count.json()["unread_count"] == 5

    res_all = client.patch("/notifications/read-all", headers=headers)
    assert res_all.status_code == 200

    res_count_after = client.get("/notifications/unread-count", headers=headers)
    assert res_count_after.json()["unread_count"] == 0
    db.close()


def test_6_procurement_notifications():
    db = TestingSessionLocal()
    pm = create_test_user(db, "pm_proc@example.com", "PM Proc", role="Project Manager")

    p = models.Project(
        project_code="P_PROC",
        name="Procurement Project",
        category="Civil",
        client_name="Client Proc",
        budget=300000.0,
        project_manager="PM Proc"
    )
    db.add(p)
    db.commit()

    # Create procurement request
    req_data = {
        "project_id": p.id,
        "requested_by": "PM Proc",
        "item_name": "Cement Bags 50kg",
        "category": "Raw Material",
        "requested_quantity": 500,
        "purpose": "Slab casting",
        "priority": "High"
    }
    res_req = client.post("/procurement-requests/", json=req_data)
    assert res_req.status_code == 200
    req_id = res_req.json()["id"]

    headers_pm = get_auth_headers("pm_proc@example.com", "Project Manager")
    notes = client.get("/notifications", headers=headers_pm).json()
    proc_notes = [n for n in notes if n["type"] == "PROCUREMENT"]
    assert len(proc_notes) >= 1
    assert "Cement Bags" in proc_notes[0]["message"]

    # Update procurement status
    res_upd = client.put(f"/procurement-requests/{req_id}/status?status=Approved")
    assert res_upd.status_code == 200

    notes_after = client.get("/notifications", headers=headers_pm).json()
    approved_notes = [n for n in notes_after if "Approved" in n["title"]]
    assert len(approved_notes) >= 1
    db.close()


def test_7_attendance_alert_notifications():
    db = TestingSessionLocal()
    engineer = create_test_user(db, "eng_att@example.com", "Engineer Att", role="Site Engineer")

    p = models.Project(
        project_code="P_ATT",
        name="Attendance Project",
        category="Civil",
        client_name="Client Att",
        location="Site Att",
        start_date=date.today(),
        expected_completion_date=date.today() + timedelta(days=30),
        budget=100000.0,
        project_manager="Engineer Att"
    )
    db.add(p)
    db.commit()

    assign = models.SiteEngineerAssignment(
        project_id=p.id,
        engineer_name="Engineer Att",
        assigned_date=date.today(),
        status="Assigned"
    )
    db.add(assign)
    db.commit()

    worker = models.Worker(
        full_name="Worker John",
        designation="Mason",
        status="Active"
    )
    db.add(worker)
    db.commit()

    # Post attendance with status Absent
    att_data = {
        "worker_id": worker.id,
        "project_id": p.id,
        "date": str(date.today()),
        "status": "Absent",
        "remarks": "Worker failed to report on site"
    }
    res_att = client.post("/attendance/", json=att_data)
    assert res_att.status_code == 200

    headers_eng = get_auth_headers("eng_att@example.com", "Site Engineer")
    notes = client.get("/notifications", headers=headers_eng).json()
    att_notes = [n for n in notes if n["type"] == "ATTENDANCE"]
    assert len(att_notes) >= 1
    assert "Absent" in att_notes[0]["message"]
    db.close()


def test_8_deadline_notifications_and_duplicate_prevention():
    db = TestingSessionLocal()
    user = create_test_user(db, "pm_dl@example.com", "PM DL", role="Project Manager")

    p = models.Project(
        project_code="P_DL",
        name="Deadline Project",
        category="Civil",
        client_name="Client DL",
        budget=150000.0,
        project_manager="PM DL"
    )
    db.add(p)
    db.commit()

    # Create milestone past due
    m = models.Milestone(
        project_id=p.id,
        title="Roof Casting",
        planned_date=date.today() - timedelta(days=1),
        progress_percentage=50.0,
        status="In Progress"
    )
    db.add(m)
    db.commit()

    headers = get_auth_headers("pm_dl@example.com", "Project Manager")

    # Trigger deadline check
    res_check1 = client.post("/notifications/check-deadlines", headers=headers)
    assert res_check1.status_code == 200

    notes1 = client.get("/notifications", headers=headers).json()
    dl_notes1 = [n for n in notes1 if n["type"] == "DEADLINE"]
    assert len(dl_notes1) >= 1

    count_dl1 = len(dl_notes1)

    # Re-run deadline check - verify duplicate prevention
    res_check2 = client.post("/notifications/check-deadlines", headers=headers)
    assert res_check2.status_code == 200

    notes2 = client.get("/notifications", headers=headers).json()
    dl_notes2 = [n for n in notes2 if n["type"] == "DEADLINE"]
    assert len(dl_notes2) == count_dl1  # No extra duplicate created!
    db.close()


def test_9_role_and_system_notifications():
    db = TestingSessionLocal()
    admin = create_test_user(db, "admin@example.com", "Super Admin User", role="Super Admin")
    worker_user = create_test_user(db, "wuser@example.com", "Worker User", role="Worker")

    headers_admin = get_auth_headers("admin@example.com", "Super Admin")

    # Admin creates system announcement targeted to Worker
    sys_payload = {
        "title": "Site Safety Announcement",
        "message": "Mandatory safety meeting tomorrow morning.",
        "target_role": "Worker",
        "priority": "High"
    }
    res_sys = client.post("/notifications/system", json=sys_payload, headers=headers_admin)
    assert res_sys.status_code == 200

    # Worker user should receive announcement
    headers_w = get_auth_headers("wuser@example.com", "Worker")
    w_notes = client.get("/notifications", headers=headers_w).json()
    assert any("Site Safety Announcement" in n["title"] for n in w_notes)
    db.close()


def test_10_existing_modules_regression_check():
    db = TestingSessionLocal()
    # Test health check
    res_h = client.get("/health")
    assert res_h.status_code == 200

    # Test create project
    p_data = {
        "project_code": "P_REG",
        "name": "Regression Test Project",
        "category": "Civil",
        "client_name": "Test Client",
        "location": "City Center",
        "budget": 500000.0,
        "priority": "High",
        "status": "Planning",
        "start_date": str(date.today()),
        "expected_completion_date": str(date.today() + timedelta(days=30))
    }
    res_p = client.post("/projects", json=p_data)
    assert res_p.status_code == 200

    # Test get projects
    res_projects = client.get("/projects")
    assert res_projects.status_code == 200
    assert len(res_projects.json()) >= 1
    db.close()
