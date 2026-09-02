import pytest
from datetime import date, timedelta
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.main import app
from app.database import Base, get_db
from app import models, auth

SQLALCHEMY_DATABASE_URL = "sqlite:///./test_construction.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False}
)

TestingSessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)


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
    yield
    Base.metadata.drop_all(bind=engine)


def create_test_user(db, email, full_name, role="Project Manager"):
    hashed_pwd = auth.hash_password("password123")
    user = models.User(
        email=email,
        full_name=full_name,
        password=hashed_pwd,
        role=role,
        is_active=True
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def get_auth_headers(email, role="Project Manager"):
    token = auth.create_access_token(data={"sub": email, "role": role})
    return {"Authorization": f"Bearer {token}"}


# ==========================================
# TEST CASES — MODULE 9: DASHBOARD & ANALYTICS
# ==========================================

def test_1_admin_dashboard_access():
    db = TestingSessionLocal()
    admin = create_test_user(db, "admin_dash@example.com", "Admin User", role="Super Admin")

    p = models.Project(
        project_code="P_ADM",
        name="Admin Project",
        category="Commercial",
        client_name="Client Adm",
        location="Site Adm",
        start_date=date.today(),
        expected_completion_date=date.today() + timedelta(days=60),
        budget=500000.0,
        status="Active"
    )
    db.add(p)
    db.commit()
    db.close()

    headers = get_auth_headers("admin_dash@example.com", "Super Admin")
    response = client.get("/dashboard/admin", headers=headers)
    assert response.status_code == 200

    data = response.json()
    assert data["role"] == "Super Admin"
    assert data["users"]["total_users"] >= 1
    assert data["projects"]["total_projects"] >= 1
    assert "system_analytics" in data


def test_2_project_manager_dashboard_access():
    db = TestingSessionLocal()
    pm = create_test_user(db, "pm_dash@example.com", "PM Dashboard User", role="Project Manager")

    p = models.Project(
        project_code="P_PM1",
        name="PM Project 1",
        category="Residential",
        client_name="Client PM",
        location="Location 1",
        start_date=date.today(),
        expected_completion_date=date.today() + timedelta(days=30),
        budget=200000.0,
        project_manager="PM Dashboard User",
        status="Active"
    )
    db.add(p)
    db.commit()

    pid = p.id
    db.close()

    headers = get_auth_headers("pm_dash@example.com", "Project Manager")
    response = client.get("/dashboard/project-manager", headers=headers)
    assert response.status_code == 200

    data = response.json()
    assert data["role"] == "Project Manager"
    assert data["total_assigned_projects"] >= 1
    assert len(data["projects"]) >= 1
    assert data["projects"][0]["project_id"] == pid


def test_3_project_manager_project_isolation():
    db = TestingSessionLocal()
    pm_a = create_test_user(db, "pm_a@example.com", "PM Alpha", role="Project Manager")
    pm_b = create_test_user(db, "pm_b@example.com", "PM Beta", role="Project Manager")

    p_a = models.Project(
        project_code="P_ALPHA",
        name="Project Alpha",
        category="Civil",
        client_name="Client Alpha",
        budget=100000.0,
        project_manager="PM Alpha",
        status="Active"
    )
    p_b = models.Project(
        project_code="P_BETA",
        name="Project Beta",
        category="Civil",
        client_name="Client Beta",
        budget=200000.0,
        project_manager="PM Beta",
        status="Active"
    )
    db.add_all([p_a, p_b])
    db.commit()
    p_a_id, p_b_id = p_a.id, p_b.id
    db.close()

    headers_a = get_auth_headers("pm_a@example.com", "Project Manager")
    res_a = client.get("/dashboard/project-manager", headers=headers_a)
    assert res_a.status_code == 200
    data_a = res_a.json()
    p_ids_a = [p["project_id"] for p in data_a["projects"]]
    assert p_a_id in p_ids_a
    assert p_b_id not in p_ids_a

    headers_b = get_auth_headers("pm_b@example.com", "Project Manager")
    res_b = client.get("/dashboard/project-manager", headers=headers_b)
    assert res_b.status_code == 200
    data_b = res_b.json()
    p_ids_b = [p["project_id"] for p in data_b["projects"]]
    assert p_b_id in p_ids_b
    assert p_a_id not in p_ids_b


def test_4_unauthorized_project_access_rejected():
    db = TestingSessionLocal()
    pm_a = create_test_user(db, "pm_a_sec@example.com", "PM Sec Alpha", role="Project Manager")
    pm_b = create_test_user(db, "pm_b_sec@example.com", "PM Sec Beta", role="Project Manager")

    p_b = models.Project(
        project_code="P_BETA_SEC",
        name="Project Beta Sec",
        category="Civil",
        client_name="Client Sec",
        budget=200000.0,
        project_manager="PM Sec Beta",
        status="Active"
    )
    db.add(p_b)
    db.commit()
    p_b_id = p_b.id
    db.close()

    headers_a = get_auth_headers("pm_a_sec@example.com", "Project Manager")
    response = client.get(f"/dashboard/project-manager/{p_b_id}", headers=headers_a)
    assert response.status_code == 403


def test_5_real_progress_recalculation():
    db = TestingSessionLocal()
    pm = create_test_user(db, "pm_prog@example.com", "PM Progress", role="Project Manager")

    p = models.Project(
        project_code="P_PROG",
        name="Progress Project",
        category="Infrastructure",
        client_name="Govt",
        budget=300000.0,
        project_manager="PM Progress",
        status="Active"
    )
    db.add(p)
    db.commit()

    m1 = models.Milestone(project_id=p.id, title="Foundation", progress_percentage=100.0, status="Completed")
    m2 = models.Milestone(project_id=p.id, title="Superstructure", progress_percentage=50.0, status="Pending")
    db.add_all([m1, m2])
    db.commit()
    pid = p.id
    db.close()

    headers = get_auth_headers("pm_prog@example.com", "Project Manager")
    res = client.get(f"/dashboard/project-manager/{pid}", headers=headers)
    assert res.status_code == 200
    data = res.json()["projects"][0]["progress"]

    assert data["total_milestones"] == 2
    assert data["completed_milestones"] == 1
    assert data["pending_milestones"] == 1
    assert data["completion_percentage"] == 75.0


def test_6_real_budget_recalculation():
    db = TestingSessionLocal()
    pm = create_test_user(db, "pm_budg@example.com", "PM Budget", role="Project Manager")

    p = models.Project(
        project_code="P_BUDG",
        name="Budget Project",
        category="Commercial",
        client_name="Corp",
        budget=100000.0,
        project_manager="PM Budget",
        status="Active"
    )
    db.add(p)
    db.commit()

    e1 = models.Expense(project_id=p.id, category="Materials", amount=25000.0, expense_date=date.today(), status="Recorded")
    e2 = models.Expense(project_id=p.id, category="Labor", amount=15000.0, expense_date=date.today(), status="Recorded")
    db.add_all([e1, e2])
    db.commit()
    pid = p.id
    db.close()

    headers = get_auth_headers("pm_budg@example.com", "Project Manager")
    res = client.get(f"/dashboard/project-manager/{pid}", headers=headers)
    assert res.status_code == 200
    b_data = res.json()["projects"][0]["budget"]

    assert b_data["planned_budget"] == 100000.0
    assert b_data["utilized_amount"] == 40000.0
    assert b_data["remaining_budget"] == 60000.0
    assert b_data["utilization_percentage"] == 40.0


def test_7_real_workforce_status_updates():
    db = TestingSessionLocal()
    pm = create_test_user(db, "pm_wf@example.com", "PM Workforce", role="Project Manager")

    p = models.Project(
        project_code="P_WF",
        name="Workforce Project",
        category="Civil",
        client_name="Client WF",
        budget=150000.0,
        project_manager="PM Workforce",
        status="Active"
    )
    db.add(p)
    db.commit()

    w1 = models.Worker(full_name="Worker A", designation="Mason", status="Active")
    w2 = models.Worker(full_name="Worker B", designation="Helper", status="Active")
    db.add_all([w1, w2])
    db.commit()

    wa1 = models.WorkerAssignment(worker_id=w1.id, project_id=p.id, start_date=date.today(), assignment_status="Active")
    wa2 = models.WorkerAssignment(worker_id=w2.id, project_id=p.id, start_date=date.today(), assignment_status="Active")
    db.add_all([wa1, wa2])
    db.commit()

    att1 = models.Attendance(worker_id=w1.id, project_id=p.id, date=date.today(), status="Present")
    att2 = models.Attendance(worker_id=w2.id, project_id=p.id, date=date.today(), status="Absent")
    db.add_all([att1, att2])
    db.commit()
    pid = p.id
    db.close()

    headers = get_auth_headers("pm_wf@example.com", "Project Manager")
    res = client.get(f"/dashboard/project-manager/{pid}", headers=headers)
    assert res.status_code == 200
    wf_data = res.json()["projects"][0]["workforce"]

    assert wf_data["total_workers"] == 2
    assert wf_data["present"] == 1
    assert wf_data["absent"] == 1


def test_8_real_resource_status_updates():
    db = TestingSessionLocal()
    pm = create_test_user(db, "pm_res@example.com", "PM Resource", role="Project Manager")

    p = models.Project(
        project_code="P_RES",
        name="Resource Project",
        category="Civil",
        client_name="Client Res",
        budget=200000.0,
        project_manager="PM Resource",
        status="Active"
    )
    db.add(p)
    db.commit()

    eq = models.Equipment(equipment_id="EQ_001", name="Excavator", category="Heavy", status="Allocated")
    db.add(eq)
    db.commit()

    ea = models.EquipmentAllocation(equipment_id=eq.id, project_id=p.id, start_date=date.today(), status="Active")
    eu = models.EquipmentUtilization(equipment_id=eq.id, project_id=p.id, usage_date=date.today(), operating_hours=8.0, idle_hours=2.0)
    db.add_all([ea, eu])
    db.commit()
    pid = p.id
    db.close()

    headers = get_auth_headers("pm_res@example.com", "Project Manager")
    res = client.get(f"/dashboard/project-manager/{pid}", headers=headers)
    assert res.status_code == 200
    r_data = res.json()["projects"][0]["resources"]

    assert r_data["allocated"] == 1
    assert r_data["operating_hours"] == 8.0
    assert r_data["idle_hours"] == 2.0
    assert r_data["utilization_percentage"] == 80.0


def test_9_real_procurement_updates():
    db = TestingSessionLocal()
    pm = create_test_user(db, "pm_proc@example.com", "PM Procurement", role="Project Manager")

    p = models.Project(
        project_code="P_PROC",
        name="Procurement Project",
        category="Civil",
        client_name="Client Proc",
        budget=200000.0,
        project_manager="PM Procurement",
        status="Active"
    )
    db.add(p)
    db.commit()

    pr1 = models.ProcurementRequest(project_id=p.id, requested_by="Eng 1", item_name="Cement", requested_quantity=100, request_status="Pending")
    pr2 = models.ProcurementRequest(project_id=p.id, requested_by="Eng 2", item_name="Steel", requested_quantity=50, request_status="Approved")
    db.add_all([pr1, pr2])
    db.commit()
    pid = p.id
    db.close()

    headers = get_auth_headers("pm_proc@example.com", "Project Manager")
    res = client.get(f"/dashboard/project-manager/{pid}", headers=headers)
    assert res.status_code == 200
    pr_data = res.json()["projects"][0]["procurement"]

    assert pr_data["total_requests"] == 2
    assert pr_data["pending_requests"] == 1
    assert pr_data["approved_requests"] == 1


def test_10_notification_integration():
    db = TestingSessionLocal()
    pm = create_test_user(db, "pm_note@example.com", "PM Note", role="Project Manager")

    p = models.Project(
        project_code="P_NOTE",
        name="Notification Project",
        category="Civil",
        client_name="Client Note",
        budget=100000.0,
        project_manager="PM Note",
        status="Active"
    )
    db.add(p)
    db.commit()

    n = models.Notification(
        user_id=pm.id,
        project_id=p.id,
        type="DEADLINE",
        title="Project Deadline Near",
        message="Deadline approaching in 3 days",
        is_read=False,
        priority="High"
    )
    db.add(n)
    db.commit()
    db.close()

    headers = get_auth_headers("pm_note@example.com", "Project Manager")
    res = client.get("/dashboard/project-manager", headers=headers)
    assert res.status_code == 200
    data = res.json()

    assert data["unread_notifications_count"] >= 1
    assert len(data["recent_notifications"]) >= 1
    assert data["recent_notifications"][0]["title"] == "Project Deadline Near"


def test_11_empty_project_handling():
    db = TestingSessionLocal()
    pm = create_test_user(db, "pm_empty@example.com", "PM Empty", role="Project Manager")

    p = models.Project(
        project_code="P_EMPTY",
        name="Empty Project",
        category="Civil",
        client_name="Client Empty",
        budget=0.0,
        project_manager="PM Empty",
        status="Planning"
    )
    db.add(p)
    db.commit()
    pid = p.id
    db.close()

    headers = get_auth_headers("pm_empty@example.com", "Project Manager")
    res = client.get(f"/dashboard/project-manager/{pid}", headers=headers)
    assert res.status_code == 200
    data = res.json()["projects"][0]

    assert data["progress"]["completion_percentage"] == 0.0
    assert data["budget"]["planned_budget"] == 0.0
    assert data["budget"]["utilization_percentage"] == 0.0
    assert data["workforce"]["total_workers"] == 0
    assert data["resources"]["total_resources"] == 0
    assert data["procurement"]["total_requests"] == 0


def test_12_role_security_enforcement():
    db = TestingSessionLocal()
    worker_user = create_test_user(db, "worker_user@example.com", "Worker User", role="Worker")
    engineer_user = create_test_user(db, "eng_user@example.com", "Engineer User", role="Site Engineer")
    db.close()

    # Worker attempts admin dashboard -> 403 Forbidden
    headers_w = get_auth_headers("worker_user@example.com", "Worker")
    res_w = client.get("/dashboard/admin", headers=headers_w)
    assert res_w.status_code == 403

    # Site Engineer attempts admin dashboard -> 403 Forbidden
    headers_e = get_auth_headers("eng_user@example.com", "Site Engineer")
    res_e = client.get("/dashboard/admin", headers=headers_e)
    assert res_e.status_code == 403

    # Role summary endpoint returns generic role response for non-PM/Admin
    res_summary = client.get("/dashboard/summary", headers=headers_e)
    assert res_summary.status_code == 200
    assert res_summary.json()["role"] == "Site Engineer"
