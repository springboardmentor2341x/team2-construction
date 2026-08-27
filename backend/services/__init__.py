import datetime
from typing import Optional, List
from sqlalchemy.orm import Session
from sqlalchemy import func
from fastapi import HTTPException, status
from models import (
    User, Role, Project, WorkPackage, Contractor, Worker, SiteEngineer,
    Attendance, Material, MaterialRequest, DailyReport, MaterialUsed,
    SitePhoto, IssueReport, WorkerPayslip, Notification, FeedbackMessage, ProjectDocument,
    DailyProgressReport, DailyReportMaterial, Milestone, DelayRecord, SiteActivityLog,
    ResourceCategory, Resource, ResourceAllocation, ResourceUtilization, MaintenanceRecord,
    WorkforceCategory, WorkerAssignment, Shift, ShiftAssignment, PayrollRecord
)
from core.security import get_password_hash, verify_password, create_access_token

# ==========================================
# AUTHENTICATION SERVICE
# ==========================================
class AuthService:
    def register(self, db: Session, data: dict):
        # Check duplicate email
        existing = db.query(User).filter(User.email == data["email"]).first()
        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User with this email already exists"
            )

        role = db.query(Role).filter(Role.name == data["role"]).first()
        if not role:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Role {data['role']} does not exist"
            )

        # Create user
        user_id = f"U-{func.random()}"  # UUID fallback or random ID
        import uuid
        user_id = str(uuid.uuid4())[:8] # short id for quick representation

        password_hash = get_password_hash(data["password"])
        new_user = User(
            id=user_id,
            email=data["email"],
            password_hash=password_hash,
            name=data["name"],
            phone=data.get("phone"),
            company=data.get("company"),
            avatar=data.get("avatar") or f"https://images.unsplash.com/photo-{1500000000000}?auto=format&fit=crop&q=80&w=150",
            role_id=role.id
        )

        db.add(new_user)
        db.flush() # flush to get user.id for profiles

        # Profile setup
        if data["role"] == "contractor":
            new_profile = Contractor(
                id=str(uuid.uuid4())[:8],
                user_id=new_user.id,
                specialty=data.get("specialty") or "General Contracting",
                status="Active"
            )
            db.add(new_profile)
        elif data["role"] == "worker":
            new_profile = Worker(
                id=str(uuid.uuid4())[:8],
                user_id=new_user.id,
                role=data.get("trade") or "Laborer",
                status="Active",
                assigned_project_id=data.get("assignedProjectId")
            )
            db.add(new_profile)
        elif data["role"] == "site_engineer":
            new_profile = SiteEngineer(
                id=str(uuid.uuid4())[:8],
                user_id=new_user.id,
                status="Active"
            )
            db.add(new_profile)

        db.commit()
        db.refresh(new_user)

        token = create_access_token(
            subject=new_user.id,
            extra_claims={"email": new_user.email, "name": new_user.name, "role": role.name}
        )

        return {
            "token": token,
            "user": {
                "id": new_user.id,
                "email": new_user.email,
                "name": new_user.name,
                "role": role.name,
                "avatar": new_user.avatar,
                "phone": new_user.phone,
                "company": new_user.company
            }
        }

    def login(self, db: Session, data: dict):
        user = db.query(User).filter(User.email == data["email"]).first()
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )

        if not verify_password(data["password"], user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )

        token = create_access_token(
            subject=user.id,
            extra_claims={"email": user.email, "name": user.name, "role": user.role.name}
        )

        return {
            "token": token,
            "user": {
                "id": user.id,
                "email": user.email,
                "name": user.name,
                "role": user.role.name,
                "avatar": user.avatar,
                "phone": user.phone,
                "company": user.company
            }
        }

    def get_user_profile(self, db: Session, user_id: str):
        user = db.query(User).filter(User.id == user_id).first()
        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        profile = None
        if user.role.name == "contractor" and user.contractor_profile:
            profile = {"id": user.contractor_profile.id, "specialty": user.contractor_profile.specialty, "status": user.contractor_profile.status}
        elif user.role.name == "worker" and user.worker_profile:
            profile = {"id": user.worker_profile.id, "role": user.worker_profile.role, "status": user.worker_profile.status, "assignedProjectId": user.worker_profile.assigned_project_id}
        elif user.role.name == "site_engineer" and user.site_engineer_profile:
            profile = {"id": user.site_engineer_profile.id, "status": user.site_engineer_profile.status}

        return {
            "id": user.id,
            "email": user.email,
            "name": user.name,
            "role": user.role.name,
            "avatar": user.avatar,
            "phone": user.phone,
            "company": user.company,
            "profile": profile
        }

# ==========================================
# PROJECTS SERVICE
# ==========================================
class ProjectsService:
    def get_all_projects(self, db: Session):
        return db.query(Project).all()

    def get_project_by_id(self, db: Session, project_id: str):
        proj = db.query(Project).filter(Project.id == project_id).first()
        if not proj:
            raise HTTPException(status_code=404, detail="Project not found")
        return proj

    def create_project(self, db: Session, data: dict):
        duplicate = db.query(Project).filter(Project.id == data["id"]).first()
        if duplicate:
            raise HTTPException(status_code=400, detail="Project with this ID already exists")
        
        proj = Project(
            id=data["id"],
            name=data["name"],
            location=data["location"],
            client_name=data["clientName"],
            status=data["status"],
            start_date=data["startDate"],
            end_date=data["endDate"],
            budget=data["budget"],
            spent=0.0,
            progress=0,
            manager_id=data.get("managerId"),
            image=data.get("image") or "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600",
            description=data.get("description") or ""
        )
        db.add(proj)
        db.commit()
        db.refresh(proj)
        return proj

    def update_project(self, db: Session, project_id: str, data: dict):
        proj = self.get_project_by_id(db, project_id)
        for field, val in data.items():
            # Translate CamelCase keys to snake_case attributes
            attr = "client_name" if field == "clientName" else ("start_date" if field == "startDate" else ("end_date" if field == "endDate" else ("manager_id" if field == "managerId" else field)))
            if hasattr(proj, attr) and val is not None:
                setattr(proj, attr, val)
        db.commit()
        db.refresh(proj)
        return proj

    def delete_project(self, db: Session, project_id: str):
        proj = self.get_project_by_id(db, project_id)
        db.delete(proj)
        db.commit()
        return True

    # TASKS (WORKPACKAGES)
    def get_tasks(self, db: Session, project_id: str):
        return db.query(WorkPackage).filter(WorkPackage.project_id == project_id).all()

    def create_task(self, db: Session, project_id: str, data: dict):
        duplicate = db.query(WorkPackage).filter(WorkPackage.id == data["id"]).first()
        if duplicate:
            raise HTTPException(status_code=400, detail="Task with this ID already exists")

        wp = WorkPackage(
            id=data["id"],
            project_id=project_id,
            title=data["title"],
            description=data.get("description") or "",
            start_date=data["startDate"],
            end_date=data["endDate"],
            progress=data.get("progress") or 0,
            status=data["status"],
            assigned_to_id=data.get("assignedToId")
        )
        db.add(wp)
        db.commit()
        db.refresh(wp)
        return wp

    def update_task(self, db: Session, task_id: str, data: dict):
        wp = db.query(WorkPackage).filter(WorkPackage.id == task_id).first()
        if not wp:
            raise HTTPException(status_code=404, detail="Task not found")

        for field, val in data.items():
            attr = "start_date" if field == "startDate" else ("end_date" if field == "endDate" else ("assigned_to_id" if field == "assignedToId" else field))
            if hasattr(wp, attr) and val is not None:
                setattr(wp, attr, val)
        db.commit()
        db.refresh(wp)
        return wp

    def delete_task(self, db: Session, task_id: str):
        wp = db.query(WorkPackage).filter(WorkPackage.id == task_id).first()
        if not wp:
            raise HTTPException(status_code=404, detail="Task not found")
        db.delete(wp)
        db.commit()
        return True

    # ISSUES
    def get_issues(self, db: Session, project_id: str):
        return db.query(IssueReport).filter(IssueReport.project_id == project_id).all()

    def create_issue(self, db: Session, project_id: str, reported_by_id: str, data: dict):
        issue = IssueReport(
            id=data["id"],
            project_id=project_id,
            title=data["title"],
            description=data["description"],
            severity=data["severity"],
            status=data.get("status") or "Open",
            reported_by_id=reported_by_id,
            reported_date=datetime.datetime.utcnow()
        )
        db.add(issue)
        db.commit()
        db.refresh(issue)
        return issue

    def update_issue(self, db: Session, issue_id: str, data: dict):
        issue = db.query(IssueReport).filter(IssueReport.id == issue_id).first()
        if not issue:
            raise HTTPException(status_code=404, detail="Issue not found")
        for field, val in data.items():
            if hasattr(issue, field) and val is not None:
                setattr(issue, field, val)
        db.commit()
        db.refresh(issue)
        return issue

    # PHOTOS
    def get_photos(self, db: Session, project_id: str):
        return db.query(SitePhoto).filter(SitePhoto.project_id == project_id).all()

    def create_photo(self, db: Session, project_id: str, uploaded_by_id: str, data: dict):
        import uuid
        photo_id = data.get("id") or f"PH-{str(uuid.uuid4())[:4]}"
        photo = SitePhoto(
            id=photo_id,
            project_id=project_id,
            url=data["url"],
            caption=data.get("caption") or "",
            uploaded_by_id=uploaded_by_id,
            date=datetime.datetime.utcnow()
        )
        db.add(photo)
        db.commit()
        db.refresh(photo)
        return photo

    # FEEDBACK
    def get_feedback(self, db: Session, project_id: str):
        return db.query(FeedbackMessage).filter(FeedbackMessage.project_id == project_id).all()

    def create_feedback(self, db: Session, project_id: str, data: dict):
        fb = FeedbackMessage(
            id=data["id"],
            project_id=project_id,
            client_name=data["clientName"],
            rating=data["rating"],
            message=data["message"],
            date=datetime.datetime.utcnow()
        )
        db.add(fb)
        db.commit()
        db.refresh(fb)
        return fb

    # DOCUMENTS
    def get_documents(self, db: Session, project_id: str):
        return db.query(ProjectDocument).filter(ProjectDocument.project_id == project_id).all()

    def create_document(self, db: Session, project_id: str, uploaded_by: str, data: dict):
        import uuid
        doc_id = data.get("id") or f"DOC-{str(uuid.uuid4())[:4]}"
        doc = ProjectDocument(
            id=doc_id,
            project_id=project_id,
            name=data["name"],
            size=data["size"],
            type=data["type"],
            uploaded_by=uploaded_by,
            upload_date=datetime.datetime.utcnow()
        )
        db.add(doc)
        db.commit()
        db.refresh(doc)
        return doc

# ==========================================
# MATERIALS SERVICE
# ==========================================
class MaterialsService:
    def get_all_materials(self, db: Session):
        return db.query(Material).all()

    def get_material_by_id(self, db: Session, material_id: str):
        mat = db.query(Material).filter(Material.id == material_id).first()
        if not mat:
            raise HTTPException(status_code=404, detail="Material not found")
        return mat

    def create_material(self, db: Session, data: dict):
        duplicate = db.query(Material).filter(Material.id == data["id"]).first()
        if duplicate:
            raise HTTPException(status_code=400, detail="Material with this ID already exists")

        mat = Material(
            id=data["id"],
            name=data["name"],
            unit=data["unit"],
            in_stock=data["inStock"],
            reorder_level=data["reorderLevel"],
            cost_per_unit=data["costPerUnit"]
        )
        db.add(mat)
        db.commit()
        db.refresh(mat)
        return mat

    def update_material(self, db: Session, material_id: str, data: dict):
        mat = self.get_material_by_id(db, material_id)
        for field, val in data.items():
            attr = "in_stock" if field == "inStock" else ("reorder_level" if field == "reorderLevel" else ("cost_per_unit" if field == "costPerUnit" else field))
            if hasattr(mat, attr) and val is not None:
                setattr(mat, attr, val)
        db.commit()
        db.refresh(mat)
        return mat

    def delete_material(self, db: Session, material_id: str):
        mat = self.get_material_by_id(db, material_id)
        db.delete(mat)
        db.commit()
        return True

    def get_requests(self, db: Session, project_id: Optional[str] = None):
        q = db.query(MaterialRequest)
        if project_id:
            q = q.filter(MaterialRequest.project_id == project_id)
        return q.all()

    def create_request(self, db: Session, requested_by_id: str, data: dict):
        import uuid
        req_id = data.get("id") or f"REQ-{str(uuid.uuid4())[:4]}"
        duplicate = db.query(MaterialRequest).filter(MaterialRequest.id == req_id).first()
        if duplicate:
            raise HTTPException(status_code=400, detail="Request with this ID already exists")

        req = MaterialRequest(
            id=req_id,
            project_id=data["projectId"],
            material_id=data["materialId"],
            quantity=data["quantity"],
            requested_by_id=requested_by_id,
            status="Pending",
            request_date=datetime.datetime.utcnow()
        )
        db.add(req)
        db.commit()
        db.refresh(req)
        return req

    def respond_request(self, db: Session, request_id: str, approve: bool):
        req = db.query(MaterialRequest).filter(MaterialRequest.id == request_id).first()
        if not req:
            raise HTTPException(status_code=404, detail="Request not found")
        if req.status != "Pending":
            raise HTTPException(status_code=400, detail="Request already processed")

        if approve:
            # Check stock
            if req.material.in_stock < req.quantity:
                raise HTTPException(status_code=400, detail="Insufficient stock in inventory")
            req.material.in_stock -= req.quantity
            req.status = "Approved"
        else:
            req.status = "Rejected"

        db.commit()
        db.refresh(req)
        return req

# ==========================================
# DAILY REPORTS SERVICE
# ==========================================
class ReportsService:
    def get_reports(self, db: Session, project_id: Optional[str] = None):
        q = db.query(DailyReport)
        if project_id:
            q = q.filter(DailyReport.project_id == project_id)
        return q.all()

    def create_report(self, db: Session, site_engineer_id: str, data: dict):
        import uuid
        rep_id = data.get("id") or f"LOG-{str(uuid.uuid4())[:4]}"
        duplicate = db.query(DailyReport).filter(DailyReport.id == rep_id).first()
        if duplicate:
            raise HTTPException(status_code=400, detail="Report ID already exists")

        rep = DailyReport(
            id=rep_id,
            project_id=data["projectId"],
            date=data["date"],
            work_done=data["workDone"],
            weather=data["weather"],
            site_engineer_id=site_engineer_id
        )
        db.add(rep)

        # Handle materials used
        materials = data.get("materialsUsed") or []
        for item in materials:
            # check and deduct
            mat = db.query(Material).filter(Material.id == item["materialId"]).first()
            if mat:
                mat.in_stock = max(0.0, mat.in_stock - item["quantity"])
                mu = MaterialUsed(
                    id=str(uuid.uuid4())[:8],
                    daily_report_id=rep.id,
                    material_id=item["materialId"],
                    quantity=item["quantity"]
                )
                db.add(mu)

        # Update project progress slightly by 2% (clamped at 100)
        proj = db.query(Project).filter(Project.id == data["projectId"]).first()
        if proj:
            proj.progress = min(100, proj.progress + 2)

        db.commit()
        db.refresh(rep)
        return rep

# ==========================================
# PAYMENTS SERVICE
# ==========================================
class PaymentsService:
    def get_payslips(self, db: Session, worker_id: Optional[str] = None):
        q = db.query(WorkerPayslip)
        if worker_id:
            q = q.filter(WorkerPayslip.worker_id == worker_id)
        return q.all()

    def create_payslip(self, db: Session, data: dict):
        import uuid
        pay_id = data.get("id") or f"PAY-{str(uuid.uuid4())[:4]}"
        duplicate = db.query(WorkerPayslip).filter(WorkerPayslip.id == pay_id).first()
        if duplicate:
            raise HTTPException(status_code=400, detail="Payslip ID already exists")

        basic = data["basicSalary"]
        overtime = data.get("overtimePay") or 0.0
        deductions = data.get("deductions") or 0.0
        net = basic + overtime - deductions

        payslip = WorkerPayslip(
            id=pay_id,
            worker_id=data["workerId"],
            month=data["month"],
            basic_salary=basic,
            overtime_pay=overtime,
            deductions=deductions,
            net_pay=net,
            status=data.get("status") or "Processing"
        )
        db.add(payslip)
        db.commit()
        db.refresh(payslip)
        return payslip

    def pay_payslip(self, db: Session, payslip_id: str):
        payslip = db.query(WorkerPayslip).filter(WorkerPayslip.id == payslip_id).first()
        if not payslip:
            raise HTTPException(status_code=404, detail="Payslip record not found")
        payslip.status = "Paid"
        payslip.payment_date = datetime.datetime.utcnow()
        db.commit()
        db.refresh(payslip)
        return payslip

# ==========================================
# DASHBOARD SERVICE
# ==========================================
class DashboardService:
    def get_stats(self, db: Session, user_id: str, role: str):
        kpi = {}
        if role == "admin":
            projects = db.query(Project).all()
            materials = db.query(Material).all()
            pending_requests = db.query(MaterialRequest).filter(MaterialRequest.status == "Pending").all()

            kpi["projectsCount"] = len(projects)
            kpi["totalBudgetPool"] = sum(p.budget for p in projects)
            kpi["totalSpentPool"] = sum(p.spent for p in projects)
            kpi["criticalStockCount"] = len([m for m in materials if m.in_stock <= m.reorder_level])
            kpi["pendingRequestsCount"] = len(pending_requests)
        elif role == "project_manager":
            managed = db.query(Project).filter(Project.manager_id == user_id).all()
            proj_ids = [p.id for p in managed]
            workers_count = db.query(Worker).filter(Worker.assigned_project_id.in_(proj_ids)).count()
            active_issues = db.query(IssueReport).filter(IssueReport.project_id.in_(proj_ids), IssueReport.status != "Resolved").count()

            kpi["projectsCount"] = len(managed)
            kpi["totalBudget"] = sum(p.budget for p in managed)
            kpi["totalSpent"] = sum(p.spent for p in managed)
            kpi["teamMembersCount"] = workers_count
            kpi["activeIssuesCount"] = active_issues
            kpi["averageProgress"] = int(sum(p.progress for p in managed) / len(managed)) if managed else 0
        elif role == "site_engineer":
            reports = db.query(DailyReport).filter(DailyReport.site_engineer_id == user_id).count()
            kpi["reportsFiledCount"] = reports
        elif role == "contractor":
            tasks = db.query(WorkPackage).filter(WorkPackage.assigned_to_id == user_id).count()
            reqs = db.query(MaterialRequest).filter(MaterialRequest.requested_by_id == user_id).count()
            kpi["assignedTasksCount"] = tasks
            kpi["materialRequestsCount"] = reqs
        elif role == "worker":
            tasks = db.query(WorkPackage).filter(WorkPackage.assigned_to_id == user_id).count()
            worker = db.query(Worker).filter(Worker.user_id == user_id).first()
            rate = 100
            if worker:
                total = db.query(Attendance).filter(Attendance.worker_id == worker.id).count()
                presents = db.query(Attendance).filter(Attendance.worker_id == worker.id, Attendance.status == "Present").count()
                rate = int((presents / total) * 100) if total > 0 else 100
            kpi["assignedTasksCount"] = tasks
            kpi["attendanceRate"] = rate
        return kpi


# ==========================================
# ATTENDANCE SERVICE
# ==========================================
# Helper for parsing check-in / check-out time strings into working hours
def calculate_working_hours(check_in_str: Optional[str], check_out_str: Optional[str]) -> float:
    if not check_in_str or not check_out_str:
        return 8.0
    try:
        check_in_clean = check_in_str.strip().upper()
        check_out_clean = check_out_str.strip().upper()
        for fmt in ["%I:%M %p", "%H:%M", "%I:%M%p"]:
            try:
                t1 = datetime.datetime.strptime(check_in_clean, fmt)
                t2 = datetime.datetime.strptime(check_out_clean, fmt)
                diff = (t2 - t1).total_seconds() / 3600.0
                if diff < 0:
                    diff += 24.0
                return round(diff, 2)
            except ValueError:
                continue
        return 8.0
    except Exception:
        return 8.0

# ==========================================
# ATTENDANCE SERVICE (MODULE 6 EXTENDED)
# ==========================================
class AttendanceService:
    def get_attendance(self, db: Session, filter_data: dict):
        q = db.query(Attendance)
        if "workerId" in filter_data and filter_data["workerId"]:
            q = q.filter(Attendance.worker_id == filter_data["workerId"])
        if "projectId" in filter_data and filter_data["projectId"]:
            q = q.filter(Attendance.project_id == filter_data["projectId"])
        if "contractorId" in filter_data and filter_data["contractorId"]:
            q = q.filter(Attendance.contractor_id == filter_data["contractorId"])
        if "shiftId" in filter_data and filter_data["shiftId"]:
            q = q.filter(Attendance.shift_id == filter_data["shiftId"])
        if "status" in filter_data and filter_data["status"]:
            q = q.filter(Attendance.status == filter_data["status"])
        if "date" in filter_data and filter_data["date"]:
            target = filter_data["date"].date() if hasattr(filter_data["date"], "date") else filter_data["date"]
            q = q.filter(func.date(Attendance.date) == target)
        return q.order_by(Attendance.date.desc()).all()

    def log_attendance(self, db: Session, data: dict):
        import uuid
        worker = db.query(Worker).filter(Worker.id == data["workerId"]).first()
        if not worker:
            raise HTTPException(status_code=404, detail="Worker profile not found")

        raw_date = data["date"]
        target_date = raw_date if isinstance(raw_date, datetime.datetime) else datetime.datetime.strptime(str(raw_date).split("T")[0], "%Y-%m-%d")
        
        # Calculate working hours automatically
        status_str = data.get("status", "Present")
        check_in = data.get("checkIn") or data.get("check_in")
        check_out = data.get("checkOut") or data.get("check_out")
        
        calc_hours = 0.0
        if status_str == "Present":
            calc_hours = data.get("workingHours") or calculate_working_hours(check_in, check_out)
        
        overtime_hrs = max(0.0, round(calc_hours - 8.0, 2)) if calc_hours > 8.0 else 0.0

        project_id = data.get("projectId") or worker.assigned_project_id
        contractor_id = data.get("contractorId") or worker.contractor_id

        # Check existing attendance record for worker + date + project
        existing = db.query(Attendance).filter(
            Attendance.worker_id == worker.id,
            func.date(Attendance.date) == target_date.date()
        ).first()

        if existing:
            existing.status = status_str
            existing.check_in = check_in
            existing.check_out = check_out
            existing.working_hours = calc_hours
            existing.overtime_hours = overtime_hrs
            if data.get("remarks"): existing.remarks = data.get("remarks")
            if project_id: existing.project_id = project_id
            if contractor_id: existing.contractor_id = contractor_id
            if data.get("shiftId"): existing.shift_id = data.get("shiftId")
            db.commit()
            db.refresh(existing)
            record = existing
        else:
            att = Attendance(
                id=f"ATT-{str(uuid.uuid4())[:8]}",
                worker_id=worker.id,
                project_id=project_id,
                contractor_id=contractor_id,
                shift_id=data.get("shiftId"),
                date=target_date,
                status=status_str,
                check_in=check_in,
                check_out=check_out,
                working_hours=calc_hours,
                overtime_hours=overtime_hrs,
                remarks=data.get("remarks")
            )
            db.add(att)
            db.commit()
            db.refresh(att)
            record = att

        # Also update shift assignment status if shift_id present
        if data.get("shiftId"):
            shift_assign = db.query(ShiftAssignment).filter(
                ShiftAssignment.shift_id == data["shiftId"],
                ShiftAssignment.worker_id == worker.id
            ).first()
            if shift_assign:
                shift_assign.status = "Attended" if status_str == "Present" else "Absent"
                db.commit()

        return record


# ==========================================
# NOTIFICATIONS SERVICE
# ==========================================
class NotificationsService:
    def get_notifications(self, db: Session, user_id: str):
        return db.query(Notification).filter(Notification.user_id == user_id).order_by(Notification.date.desc()).all()

    def mark_as_read(self, db: Session, user_id: str, note_id: str):
        note = db.query(Notification).filter(Notification.id == note_id, Notification.user_id == user_id).first()
        if not note:
            raise HTTPException(status_code=404, detail="Notification not found")
        note.read = True
        db.commit()
        db.refresh(note)
        return note

    def create_notification(self, db: Session, data: dict):
        import uuid
        note = Notification(
            id=str(uuid.uuid4())[:8],
            user_id=data["userId"],
            message=data["message"],
            type=data.get("type") or "info",
            read=False,
            date=datetime.datetime.utcnow()
        )
        db.add(note)
        db.commit()
        db.refresh(note)
        return note

# ==========================================
# MODULE 3: SITE PROGRESS MONITORING SERVICE
# ==========================================
class ProgressService:
    # ------------------------------------------
    # PROGRESS CALCULATION ENGINE
    # ------------------------------------------
    def recalculate_project_progress(self, db: Session, project_id: str):
        """
        Recalculates cumulative project progress based on milestones and work packages.
        Updates Project.progress and Project.status accordingly.
        """
        proj = db.query(Project).filter(Project.id == project_id).first()
        if not proj:
            return

        milestones = db.query(Milestone).filter(Milestone.project_id == project_id).all()
        if milestones:
            avg_progress = sum(m.progress_percentage for m in milestones) / len(milestones)
            proj.progress = int(round(avg_progress))
            
            # Check milestone statuses to evaluate project status
            all_completed = all(m.status == "Completed" for m in milestones)
            any_delayed = any(m.status == "Delayed" for m in milestones)
            
            if all_completed and proj.progress == 100:
                proj.status = "Completed"
            elif any_delayed:
                proj.status = "Delayed"
            elif proj.progress > 0:
                proj.status = "In Progress"
        else:
            # Fallback to daily progress reports or work packages
            tasks = db.query(WorkPackage).filter(WorkPackage.project_id == project_id).all()
            if tasks:
                avg_wp = sum(t.progress for t in tasks) / len(tasks)
                proj.progress = int(round(avg_wp))
            else:
                dprs = db.query(DailyProgressReport).filter(DailyProgressReport.project_id == project_id).all()
                if dprs:
                    total_p = sum(r.percentage_work_completed for r in dprs)
                    proj.progress = min(100, int(round(total_p)))

        db.commit()
        db.refresh(proj)
        return proj.progress

    # ------------------------------------------
    # DAILY PROGRESS REPORTS
    # ------------------------------------------
    def get_daily_reports(
        self,
        db: Session,
        project_id: Optional[str] = None,
        date_from: Optional[str] = None,
        date_to: Optional[str] = None,
        contractor_id: Optional[str] = None
    ):
        q = db.query(DailyProgressReport)
        if project_id:
            q = q.filter(DailyProgressReport.project_id == project_id)
        if contractor_id:
            q = q.filter(DailyProgressReport.contractor_id == contractor_id)
        if date_from:
            d_from = datetime.datetime.strptime(date_from, "%Y-%m-%d")
            q = q.filter(DailyProgressReport.report_date >= d_from)
        if date_to:
            d_to = datetime.datetime.strptime(date_to, "%Y-%m-%d") + datetime.timedelta(days=1)
            q = q.filter(DailyProgressReport.report_date < d_to)
        
        return q.order_by(DailyProgressReport.report_date.desc()).all()

    def get_daily_report_by_id(self, db: Session, report_id: str):
        rep = db.query(DailyProgressReport).filter(DailyProgressReport.id == report_id).first()
        if not rep:
            raise HTTPException(status_code=404, detail="Daily progress report not found")
        return rep

    def create_daily_report(self, db: Session, site_engineer_id: str, data: dict):
        import uuid
        rep_id = data.get("id") or f"DPR-{str(uuid.uuid4())[:6].upper()}"
        duplicate = db.query(DailyProgressReport).filter(DailyProgressReport.id == rep_id).first()
        if duplicate:
            raise HTTPException(status_code=400, detail="Daily report with this ID already exists")

        # Parse date
        if isinstance(data.get("reportDate"), str):
            rep_date = datetime.datetime.strptime(data["reportDate"], "%Y-%m-%d")
        else:
            rep_date = data.get("reportDate") or datetime.datetime.utcnow()

        # Resolve contractor name if contractor_id provided
        contractor_name = data.get("contractorName")
        if data.get("contractorId") and not contractor_name:
            user = db.query(User).filter(User.id == data["contractorId"]).first()
            if user:
                contractor_name = user.company or user.name

        rep = DailyProgressReport(
            id=rep_id,
            project_id=data["projectId"],
            report_date=rep_date,
            work_category=data["workCategory"],
            activity_performed=data["activityPerformed"],
            percentage_work_completed=float(data.get("percentageWorkCompleted") or 0.0),
            contractor_id=data.get("contractorId"),
            contractor_name=contractor_name,
            workers_present=int(data.get("workersPresent") or 0),
            workers_absent=int(data.get("workersAbsent") or 0),
            machinery_used=data.get("machineryUsed"),
            weather_conditions=data["weatherConditions"],
            safety_observations=data.get("safetyObservations"),
            quality_inspection_remarks=data.get("qualityInspectionRemarks"),
            progress_photograph=data.get("progressPhotograph"),
            delay_encountered=bool(data.get("delayEncountered", False)),
            delay_reason=data.get("delayReason"),
            additional_comments=data.get("additionalComments"),
            site_engineer_id=site_engineer_id
        )
        db.add(rep)
        db.flush()

        # Handle materials consumed
        materials = data.get("materialsConsumed") or []
        for item in materials:
            mat_id = item.get("materialId")
            mat_name = item.get("materialName") or "General Material"
            qty = float(item.get("quantity") or 0.0)
            unit = item.get("unit") or "Units"

            if mat_id:
                mat = db.query(Material).filter(Material.id == mat_id).first()
                if mat:
                    mat_name = mat.name
                    unit = mat.unit
                    mat.in_stock = max(0.0, mat.in_stock - qty)

            dm = DailyReportMaterial(
                id=str(uuid.uuid4())[:8],
                daily_report_id=rep.id,
                material_id=mat_id,
                material_name=mat_name,
                quantity=qty,
                unit=unit
            )
            db.add(dm)

        # If delay encountered, log automatic delay record
        if rep.delay_encountered and rep.delay_reason:
            delay_rec = DelayRecord(
                id=f"DEL-{str(uuid.uuid4())[:6].upper()}",
                project_id=rep.project_id,
                date=rep.report_date,
                affected_activity=rep.activity_performed,
                delay_reason=rep.delay_reason,
                delay_duration="1 shift",
                impact_on_project="Medium",
                additional_remarks=f"Logged automatically from Daily Progress Report {rep.id}",
                recorded_by_id=site_engineer_id,
                status="Active"
            )
            db.add(delay_rec)

        # If progress photograph provided, link to SitePhoto table
        if rep.progress_photograph:
            photo = SitePhoto(
                id=f"PH-{str(uuid.uuid4())[:6].upper()}",
                project_id=rep.project_id,
                url=rep.progress_photograph,
                caption=f"Daily Progress Photo - {rep.activity_performed}",
                uploaded_by_id=site_engineer_id,
                date=rep.report_date
            )
            db.add(photo)

        # Update relevant milestone progress if matching work category/activity
        milestones = db.query(Milestone).filter(Milestone.project_id == rep.project_id).all()
        for m in milestones:
            # Check if milestone is in progress and matches category or keywords
            if (rep.work_category.lower() in m.name.lower() or 
                (m.related_activities and rep.work_category.lower() in m.related_activities.lower())):
                # Increment milestone progress
                increment = int(round(rep.percentage_work_completed)) if rep.percentage_work_completed > 0 else 5
                m.progress_percentage = min(100, m.progress_percentage + increment)
                if m.progress_percentage == 100:
                    m.status = "Completed"
                    m.actual_completion_date = rep.report_date
                elif m.progress_percentage > 0 and m.status == "Pending":
                    m.status = "In Progress"

        db.commit()
        db.refresh(rep)

        # Recalculate project progress
        self.recalculate_project_progress(db, rep.project_id)
        return rep

    def update_daily_report(self, db: Session, report_id: str, data: dict):
        rep = self.get_daily_report_by_id(db, report_id)
        field_map = {
            "workCategory": "work_category",
            "activityPerformed": "activity_performed",
            "percentageWorkCompleted": "percentage_work_completed",
            "contractorId": "contractor_id",
            "contractorName": "contractor_name",
            "workersPresent": "workers_present",
            "workersAbsent": "workers_absent",
            "machineryUsed": "machinery_used",
            "weatherConditions": "weather_conditions",
            "safetyObservations": "safety_observations",
            "qualityInspectionRemarks": "quality_inspection_remarks",
            "progressPhotograph": "progress_photograph",
            "delayEncountered": "delay_encountered",
            "delayReason": "delay_reason",
            "additionalComments": "additional_comments"
        }
        for k, v in data.items():
            attr = field_map.get(k, k)
            if hasattr(rep, attr) and v is not None:
                setattr(rep, attr, v)

        if "materialsConsumed" in data and data["materialsConsumed"] is not None:
            # Clear old and add new
            db.query(DailyReportMaterial).filter(DailyReportMaterial.daily_report_id == rep.id).delete()
            import uuid
            for item in data["materialsConsumed"]:
                dm = DailyReportMaterial(
                    id=str(uuid.uuid4())[:8],
                    daily_report_id=rep.id,
                    material_id=item.get("materialId"),
                    material_name=item.get("materialName", "General Material"),
                    quantity=float(item.get("quantity", 0.0)),
                    unit=item.get("unit", "Units")
                )
                db.add(dm)

        db.commit()
        db.refresh(rep)
        self.recalculate_project_progress(db, rep.project_id)
        return rep

    def delete_daily_report(self, db: Session, report_id: str):
        rep = self.get_daily_report_by_id(db, report_id)
        proj_id = rep.project_id
        db.delete(rep)
        db.commit()
        self.recalculate_project_progress(db, proj_id)
        return True

    # ------------------------------------------
    # WEEKLY PROGRESS SUMMARY
    # ------------------------------------------
    def get_weekly_summary(self, db: Session, project_id: str, week_start_date: Optional[str] = None):
        proj = db.query(Project).filter(Project.id == project_id).first()
        if not proj:
            raise HTTPException(status_code=404, detail="Project not found")

        if week_start_date:
            try:
                start_dt = datetime.datetime.strptime(week_start_date, "%Y-%m-%d")
            except Exception:
                start_dt = datetime.datetime.utcnow() - datetime.timedelta(days=7)
        else:
            # Default to beginning of current week (Monday)
            today = datetime.datetime.utcnow()
            start_dt = today - datetime.timedelta(days=today.weekday())
            start_dt = datetime.datetime(start_dt.year, start_dt.month, start_dt.day)

        end_dt = start_dt + datetime.timedelta(days=7)

        # Query reports in this week
        reports = db.query(DailyProgressReport).filter(
            DailyProgressReport.project_id == project_id,
            DailyProgressReport.report_date >= start_dt,
            DailyProgressReport.report_date < end_dt
        ).order_by(DailyProgressReport.report_date.asc()).all()

        weekly_progress_pct = sum(r.percentage_work_completed for r in reports)
        total_workers = sum(r.workers_present for r in reports)
        
        activities = []
        delays = []
        safety_notes = []
        materials_agg = {}

        for r in reports:
            if r.activity_performed and r.activity_performed not in activities:
                activities.append(r.activity_performed)
            if r.delay_encountered and r.delay_reason:
                delays.append({
                    "date": r.report_date.isoformat().split("T")[0],
                    "activity": r.activity_performed,
                    "reason": r.delay_reason
                })
            if r.safety_observations and r.safety_observations not in safety_notes:
                safety_notes.append(r.safety_observations)
            
            for m in r.materials_consumed:
                key = m.material_name
                if key not in materials_agg:
                    materials_agg[key] = {"materialName": key, "quantity": 0.0, "unit": m.unit}
                materials_agg[key]["quantity"] += m.quantity

        return {
            "projectId": proj.id,
            "projectName": proj.name,
            "weekStartDate": start_dt.strftime("%Y-%m-%d"),
            "weekEndDate": (end_dt - datetime.timedelta(days=1)).strftime("%Y-%m-%d"),
            "weeklyProgressPercentage": round(weekly_progress_pct, 2),
            "overallProjectProgress": proj.progress,
            "projectStatus": proj.status,
            "totalReportsFiled": len(reports),
            "totalWorkersUtilized": total_workers,
            "majorActivitiesCompleted": activities,
            "delaysEncounteredCount": len(delays),
            "delayDetails": delays,
            "safetyObservationsCount": len(safety_notes),
            "safetyObservations": safety_notes,
            "materialsConsumedSummary": list(materials_agg.values())
        }

    # ------------------------------------------
    # MILESTONES MANAGEMENT
    # ------------------------------------------
    def get_milestones(self, db: Session, project_id: Optional[str] = None):
        q = db.query(Milestone)
        if project_id:
            q = q.filter(Milestone.project_id == project_id)
        return q.order_by(Milestone.order_index.asc(), Milestone.planned_start_date.asc()).all()

    def get_milestone_by_id(self, db: Session, milestone_id: str):
        m = db.query(Milestone).filter(Milestone.id == milestone_id).first()
        if not m:
            raise HTTPException(status_code=404, detail="Milestone not found")
        return m

    def create_milestone(self, db: Session, data: dict):
        import uuid
        m_id = data.get("id") or f"MS-{str(uuid.uuid4())[:6].upper()}"
        duplicate = db.query(Milestone).filter(Milestone.id == m_id).first()
        if duplicate:
            raise HTTPException(status_code=400, detail="Milestone ID already exists")

        start_dt = datetime.datetime.strptime(data["plannedStartDate"], "%Y-%m-%d") if isinstance(data.get("plannedStartDate"), str) else data["plannedStartDate"]
        end_dt = datetime.datetime.strptime(data["plannedEndDate"], "%Y-%m-%d") if isinstance(data.get("plannedEndDate"), str) else data["plannedEndDate"]
        actual_dt = None
        if data.get("actualCompletionDate"):
            actual_dt = datetime.datetime.strptime(data["actualCompletionDate"], "%Y-%m-%d") if isinstance(data["actualCompletionDate"], str) else data["actualCompletionDate"]

        m = Milestone(
            id=m_id,
            project_id=data["projectId"],
            name=data["name"],
            planned_start_date=start_dt,
            planned_end_date=end_dt,
            actual_completion_date=actual_dt,
            progress_percentage=int(data.get("progressPercentage") or 0),
            status=data.get("status") or "Pending",
            related_activities=data.get("relatedActivities"),
            order_index=int(data.get("orderIndex") or 1)
        )
        db.add(m)
        db.commit()
        db.refresh(m)
        self.recalculate_project_progress(db, m.project_id)
        return m

    def update_milestone(self, db: Session, milestone_id: str, data: dict):
        m = self.get_milestone_by_id(db, milestone_id)
        if "name" in data and data["name"] is not None:
            m.name = data["name"]
        if "plannedStartDate" in data and data["plannedStartDate"] is not None:
            m.planned_start_date = datetime.datetime.strptime(data["plannedStartDate"], "%Y-%m-%d") if isinstance(data["plannedStartDate"], str) else data["plannedStartDate"]
        if "plannedEndDate" in data and data["plannedEndDate"] is not None:
            m.planned_end_date = datetime.datetime.strptime(data["plannedEndDate"], "%Y-%m-%d") if isinstance(data["plannedEndDate"], str) else data["plannedEndDate"]
        if "actualCompletionDate" in data:
            if data["actualCompletionDate"]:
                m.actual_completion_date = datetime.datetime.strptime(data["actualCompletionDate"], "%Y-%m-%d") if isinstance(data["actualCompletionDate"], str) else data["actualCompletionDate"]
            else:
                m.actual_completion_date = None
        if "progressPercentage" in data and data["progressPercentage"] is not None:
            m.progress_percentage = int(data["progressPercentage"])
            if m.progress_percentage == 100:
                m.status = "Completed"
                if not m.actual_completion_date:
                    m.actual_completion_date = datetime.datetime.utcnow()
            elif m.progress_percentage > 0 and m.status == "Pending":
                m.status = "In Progress"
        if "status" in data and data["status"] is not None:
            m.status = data["status"]
            if m.status == "Completed" and m.progress_percentage < 100:
                m.progress_percentage = 100
                if not m.actual_completion_date:
                    m.actual_completion_date = datetime.datetime.utcnow()
        if "relatedActivities" in data and data["relatedActivities"] is not None:
            m.related_activities = data["relatedActivities"]
        if "orderIndex" in data and data["orderIndex"] is not None:
            m.order_index = int(data["orderIndex"])

        db.commit()
        db.refresh(m)
        self.recalculate_project_progress(db, m.project_id)
        return m

    def delete_milestone(self, db: Session, milestone_id: str):
        m = self.get_milestone_by_id(db, milestone_id)
        proj_id = m.project_id
        db.delete(m)
        db.commit()
        self.recalculate_project_progress(db, proj_id)
        return True

    # ------------------------------------------
    # DELAY TRACKING
    # ------------------------------------------
    def get_delays(self, db: Session, project_id: Optional[str] = None, status: Optional[str] = None):
        q = db.query(DelayRecord)
        if project_id:
            q = q.filter(DelayRecord.project_id == project_id)
        if status:
            q = q.filter(DelayRecord.status == status)
        return q.order_by(DelayRecord.date.desc()).all()

    def get_delay_by_id(self, db: Session, delay_id: str):
        del_rec = db.query(DelayRecord).filter(DelayRecord.id == delay_id).first()
        if not del_rec:
            raise HTTPException(status_code=404, detail="Delay record not found")
        return del_rec

    def create_delay(self, db: Session, recorded_by_id: str, data: dict):
        import uuid
        del_id = data.get("id") or f"DEL-{str(uuid.uuid4())[:6].upper()}"
        d_date = datetime.datetime.strptime(data["date"], "%Y-%m-%d") if isinstance(data.get("date"), str) else data.get("date", datetime.datetime.utcnow())

        del_rec = DelayRecord(
            id=del_id,
            project_id=data["projectId"],
            date=d_date,
            affected_activity=data["affectedActivity"],
            delay_reason=data["delayReason"],
            delay_duration=data["delayDuration"],
            impact_on_project=data.get("impactOnProject") or "Medium",
            additional_remarks=data.get("additionalRemarks"),
            recorded_by_id=recorded_by_id,
            status=data.get("status") or "Active"
        )
        db.add(del_rec)
        db.commit()
        db.refresh(del_rec)
        return del_rec

    def update_delay(self, db: Session, delay_id: str, data: dict):
        del_rec = self.get_delay_by_id(db, delay_id)
        for k, v in data.items():
            attr = "affected_activity" if k == "affectedActivity" else ("delay_reason" if k == "delayReason" else ("delay_duration" if k == "delayDuration" else ("impact_on_project" if k == "impactOnProject" else ("additional_remarks" if k == "additionalRemarks" else k))))
            if hasattr(del_rec, attr) and v is not None:
                setattr(del_rec, attr, v)
        db.commit()
        db.refresh(del_rec)
        return del_rec

    def delete_delay(self, db: Session, delay_id: str):
        del_rec = self.get_delay_by_id(db, delay_id)
        db.delete(del_rec)
        db.commit()
        return True

    # ------------------------------------------
    # SITE ACTIVITY LOGS
    # ------------------------------------------
    def get_activity_logs(self, db: Session, project_id: Optional[str] = None, activity_type: Optional[str] = None):
        q = db.query(SiteActivityLog)
        if project_id:
            q = q.filter(SiteActivityLog.project_id == project_id)
        if activity_type:
            q = q.filter(SiteActivityLog.activity_type == activity_type)
        return q.order_by(SiteActivityLog.date.desc(), SiteActivityLog.created_at.desc()).all()

    def get_activity_log_by_id(self, db: Session, log_id: str):
        log = db.query(SiteActivityLog).filter(SiteActivityLog.id == log_id).first()
        if not log:
            raise HTTPException(status_code=404, detail="Site activity log not found")
        return log

    def create_activity_log(self, db: Session, logged_by_id: str, data: dict):
        import uuid
        log_id = data.get("id") or f"ACT-{str(uuid.uuid4())[:6].upper()}"
        l_date = datetime.datetime.strptime(data["date"], "%Y-%m-%d") if isinstance(data.get("date"), str) else data.get("date", datetime.datetime.utcnow())

        log = SiteActivityLog(
            id=log_id,
            project_id=data["projectId"],
            date=l_date,
            time=data.get("time") or datetime.datetime.utcnow().strftime("%H:%M"),
            activity_type=data["activityType"],
            description=data["description"],
            responsible_person=data["responsiblePerson"],
            logged_by_id=logged_by_id
        )
        db.add(log)
        db.commit()
        db.refresh(log)
        return log

    def update_activity_log(self, db: Session, log_id: str, data: dict):
        log = self.get_activity_log_by_id(db, log_id)
        for k, v in data.items():
            attr = "activity_type" if k == "activityType" else ("responsible_person" if k == "responsiblePerson" else k)
            if hasattr(log, attr) and v is not None:
                if attr == "date" and isinstance(v, str):
                    v = datetime.datetime.strptime(v, "%Y-%m-%d")
                setattr(log, attr, v)
        db.commit()
        db.refresh(log)
        return log

    def delete_activity_log(self, db: Session, log_id: str):
        log = self.get_activity_log_by_id(db, log_id)
        db.delete(log)
        db.commit()
        return True


# ==========================================
# MODULE 4: RESOURCE MANAGEMENT SERVICE
# ==========================================
class ResourceService:

    # ------------------------------------------
    # 1. CATEGORIES
    # ------------------------------------------
    def get_categories(self, db: Session):
        return db.query(ResourceCategory).all()

    def create_category(self, db: Session, data: dict):
        existing = db.query(ResourceCategory).filter(ResourceCategory.name == data["name"]).first()
        if existing:
            return existing
        cat_id = data.get("id") or f"CAT-{data['name'].upper().replace(' ', '_')}"
        cat = ResourceCategory(
            id=cat_id,
            name=data["name"],
            description=data.get("description")
        )
        db.add(cat)
        db.commit()
        db.refresh(cat)
        return cat

    # ------------------------------------------
    # 2. RESOURCES / EQUIPMENT CRUD & AVAILABILITY
    # ------------------------------------------
    def get_resources(self, db: Session, category_id: Optional[str] = None, status: Optional[str] = None, project_id: Optional[str] = None, search: Optional[str] = None):
        q = db.query(Resource)
        if category_id:
            q = q.filter(Resource.category_id == category_id)
        if status:
            q = q.filter(Resource.status == status)
        if project_id:
            q = q.filter(Resource.current_project_id == project_id)
        if search:
            search_fmt = f"%{search}%"
            q = q.filter((Resource.name.ilike(search_fmt)) | (Resource.id.ilike(search_fmt)) | (Resource.responsible_person.ilike(search_fmt)))
        return q.order_by(Resource.id.asc()).all()

    def get_resource_by_id(self, db: Session, resource_id: str):
        res = db.query(Resource).filter(Resource.id == resource_id).first()
        if not res:
            raise HTTPException(status_code=404, detail=f"Equipment with ID '{resource_id}' not found")
        return res

    def get_available_resources(self, db: Session, start_date: Optional[str] = None, end_date: Optional[str] = None, category_id: Optional[str] = None):
        """
        Returns resources that are currently available and have no overlapping active allocations
        for the given start_date to end_date period.
        """
        q = db.query(Resource).filter(Resource.status.notin_(["Under Maintenance", "Out of Service"]))
        if category_id:
            q = q.filter(Resource.category_id == category_id)
        
        resources = q.all()
        if not start_date or not end_date:
            # If no date filter provided, return resources with status == 'Available'
            return [r for r in resources if r.status == "Available"]

        s_dt = datetime.datetime.strptime(start_date, "%Y-%m-%d") if isinstance(start_date, str) else start_date
        e_dt = datetime.datetime.strptime(end_date, "%Y-%m-%d") if isinstance(end_date, str) else end_date

        available = []
        for r in resources:
            # Check overlapping active allocations
            overlaps = db.query(ResourceAllocation).filter(
                ResourceAllocation.resource_id == r.id,
                ResourceAllocation.status.in_(["Allocated", "Active"]),
                ResourceAllocation.allocation_date <= e_dt,
                ResourceAllocation.expected_return_date >= s_dt
            ).first()
            if not overlaps:
                available.append(r)
        return available

    def create_resource(self, db: Session, data: dict):
        import uuid
        res_id = data.get("id") or f"EQ-{str(uuid.uuid4())[:6].upper()}"
        
        # Check duplicate ID
        existing = db.query(Resource).filter(Resource.id == res_id).first()
        if existing:
            raise HTTPException(status_code=400, detail=f"Equipment with ID '{res_id}' already exists")

        # Verify category exists
        cat = db.query(ResourceCategory).filter(ResourceCategory.id == data["categoryId"]).first()
        if not cat:
            raise HTTPException(status_code=404, detail=f"Category '{data['categoryId']}' not found")

        p_date = None
        if data.get("purchaseDate"):
            p_date = datetime.datetime.strptime(data["purchaseDate"], "%Y-%m-%d") if isinstance(data["purchaseDate"], str) else data["purchaseDate"]

        res = Resource(
            id=res_id,
            name=data["name"],
            category_id=data["categoryId"],
            quantity=data.get("quantity", 1),
            current_location=data.get("currentLocation", "Equipment Yard"),
            current_project_id=data.get("currentProjectId"),
            status=data.get("status", "Available"),
            responsible_person=data["responsiblePerson"],
            model_number=data.get("modelNumber"),
            serial_number=data.get("serialNumber"),
            purchase_date=p_date,
            hourly_cost=data.get("hourlyCost", 0.0)
        )
        db.add(res)
        db.commit()
        db.refresh(res)
        return res

    def update_resource(self, db: Session, resource_id: str, data: dict):
        res = self.get_resource_by_id(db, resource_id)
        for k, v in data.items():
            attr = "category_id" if k == "categoryId" else ("current_location" if k == "currentLocation" else ("current_project_id" if k == "currentProjectId" else ("responsible_person" if k == "responsiblePerson" else ("model_number" if k == "modelNumber" else ("serial_number" if k == "serialNumber" else ("purchase_date" if k == "purchaseDate" else ("hourly_cost" if k == "hourlyCost" else k)))))))
            if hasattr(res, attr) and v is not None:
                if attr == "purchase_date" and isinstance(v, str):
                    v = datetime.datetime.strptime(v, "%Y-%m-%d")
                setattr(res, attr, v)
        db.commit()
        db.refresh(res)
        return res

    def delete_resource(self, db: Session, resource_id: str):
        res = self.get_resource_by_id(db, resource_id)
        # Check active allocations
        active_alloc = db.query(ResourceAllocation).filter(
            ResourceAllocation.resource_id == resource_id,
            ResourceAllocation.status.in_(["Allocated", "Active"])
        ).first()
        if active_alloc:
            raise HTTPException(status_code=400, detail="Cannot delete equipment with active project allocations")
        db.delete(res)
        db.commit()
        return True

    def get_resource_summary(self, db: Session):
        total = db.query(Resource).count()
        available = db.query(Resource).filter(Resource.status == "Available").count()
        allocated = db.query(Resource).filter(Resource.status == "Allocated").count()
        operating = db.query(Resource).filter(Resource.status == "Operating").count()
        idle = db.query(Resource).filter(Resource.status == "Idle").count()
        maintenance = db.query(Resource).filter(Resource.status == "Under Maintenance").count()
        out_of_service = db.query(Resource).filter(Resource.status == "Out of Service").count()

        # Compute average utilization
        utls = db.query(ResourceUtilization).all()
        avg_utl = round(sum(u.utilization_percentage for u in utls) / len(utls), 1) if utls else 0.0

        # Category breakdown
        categories = db.query(ResourceCategory).all()
        cat_counts = []
        for c in categories:
            c_count = db.query(Resource).filter(Resource.category_id == c.id).count()
            cat_counts.append({
                "categoryId": c.id,
                "categoryName": c.name,
                "count": c_count
            })

        return {
            "totalEquipment": total,
            "availableCount": available,
            "allocatedCount": allocated,
            "operatingCount": operating,
            "idleCount": idle,
            "maintenanceCount": maintenance,
            "outOfServiceCount": out_of_service,
            "averageUtilization": avg_utl,
            "categoryCounts": cat_counts
        }

    # ------------------------------------------
    # 3. RESOURCE ALLOCATIONS & CONFLICT CHECKING
    # ------------------------------------------
    def check_allocation_overlap(self, db: Session, resource_id: str, allocation_date: datetime.datetime, expected_return_date: datetime.datetime, exclude_id: Optional[str] = None):
        resource = self.get_resource_by_id(db, resource_id)
        
        # Check current maintenance status
        if resource.status in ["Under Maintenance", "Out of Service"]:
            raise HTTPException(
                status_code=400,
                detail=f"Cannot allocate equipment '{resource.name}' ({resource.id}) because it is currently {resource.status}."
            )

        # Check overlapping allocations: max(start1, start2) <= min(end1, end2)
        q = db.query(ResourceAllocation).filter(
            ResourceAllocation.resource_id == resource_id,
            ResourceAllocation.status.in_(["Allocated", "Active"]),
            ResourceAllocation.allocation_date <= expected_return_date,
            ResourceAllocation.expected_return_date >= allocation_date
        )
        if exclude_id:
            q = q.filter(ResourceAllocation.id != exclude_id)
        
        conflict = q.first()
        if conflict:
            proj_name = conflict.project.name if conflict.project else conflict.project_id
            start_str = conflict.allocation_date.strftime("%d-%b-%Y")
            end_str = conflict.expected_return_date.strftime("%d-%b-%Y")
            raise HTTPException(
                status_code=400,
                detail=f"'{resource.name}' ({resource.id}) is already allocated to {proj_name} from {start_str} to {end_str}."
            )

    def get_allocations(self, db: Session, project_id: Optional[str] = None, resource_id: Optional[str] = None, status: Optional[str] = None):
        q = db.query(ResourceAllocation)
        if project_id:
            q = q.filter(ResourceAllocation.project_id == project_id)
        if resource_id:
            q = q.filter(ResourceAllocation.resource_id == resource_id)
        if status:
            q = q.filter(ResourceAllocation.status == status)
        return q.order_by(ResourceAllocation.allocation_date.desc()).all()

    def get_allocation_by_id(self, db: Session, allocation_id: str):
        alloc = db.query(ResourceAllocation).filter(ResourceAllocation.id == allocation_id).first()
        if not alloc:
            raise HTTPException(status_code=404, detail="Resource allocation record not found")
        return alloc

    def create_allocation(self, db: Session, allocated_by_id: str, data: dict):
        import uuid
        alloc_id = data.get("id") or f"ALC-{str(uuid.uuid4())[:6].upper()}"

        a_date = datetime.datetime.strptime(data["allocationDate"], "%Y-%m-%d") if isinstance(data["allocationDate"], str) else data["allocationDate"]
        r_date = datetime.datetime.strptime(data["expectedReturnDate"], "%Y-%m-%d") if isinstance(data["expectedReturnDate"], str) else data["expectedReturnDate"]

        if a_date > r_date:
            raise HTTPException(status_code=400, detail="Allocation date cannot be after expected return date")

        # Run conflict check
        self.check_allocation_overlap(db, data["resourceId"], a_date, r_date)

        # Verify project exists
        project = db.query(Project).filter(Project.id == data["projectId"]).first()
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")

        resource = self.get_resource_by_id(db, data["resourceId"])

        alloc = ResourceAllocation(
            id=alloc_id,
            resource_id=data["resourceId"],
            project_id=data["projectId"],
            allocation_date=a_date,
            expected_return_date=r_date,
            quantity=data.get("quantity", 1),
            responsible_person=data["responsiblePerson"],
            allocated_by_id=allocated_by_id,
            status="Allocated",
            notes=data.get("notes")
        )
        db.add(alloc)

        # Update resource status & location
        resource.status = "Allocated"
        resource.current_project_id = project.id
        resource.current_location = project.location
        resource.responsible_person = data["responsiblePerson"]

        db.commit()
        db.refresh(alloc)
        return alloc

    def update_allocation(self, db: Session, allocation_id: str, data: dict):
        alloc = self.get_allocation_by_id(db, allocation_id)
        for k, v in data.items():
            attr = "expected_return_date" if k == "expectedReturnDate" else ("actual_return_date" if k == "actualReturnDate" else ("responsible_person" if k == "responsiblePerson" else k))
            if hasattr(alloc, attr) and v is not None:
                if "date" in attr and isinstance(v, str):
                    v = datetime.datetime.strptime(v, "%Y-%m-%d")
                setattr(alloc, attr, v)
        db.commit()
        db.refresh(alloc)
        return alloc

    def return_allocation(self, db: Session, allocation_id: str, data: Optional[dict] = None):
        alloc = self.get_allocation_by_id(db, allocation_id)
        alloc.status = "Returned"
        alloc.actual_return_date = datetime.datetime.utcnow()
        if data and data.get("notes"):
            alloc.notes = (alloc.notes or "") + f" | Return note: {data['notes']}"

        # Check if resource has other active allocations
        resource = alloc.resource
        other_active = db.query(ResourceAllocation).filter(
            ResourceAllocation.resource_id == resource.id,
            ResourceAllocation.id != allocation_id,
            ResourceAllocation.status.in_(["Allocated", "Active"])
        ).first()

        if not other_active:
            resource.status = "Available"
            resource.current_project_id = None
            resource.current_location = "Equipment Yard"

        db.commit()
        db.refresh(alloc)
        return alloc

    def delete_allocation(self, db: Session, allocation_id: str):
        alloc = self.get_allocation_by_id(db, allocation_id)
        resource = alloc.resource
        db.delete(alloc)

        # Re-evaluate resource status
        other_active = db.query(ResourceAllocation).filter(
            ResourceAllocation.resource_id == resource.id,
            ResourceAllocation.status.in_(["Allocated", "Active"])
        ).first()
        if not other_active and resource.status == "Allocated":
            resource.status = "Available"
            resource.current_project_id = None
            resource.current_location = "Equipment Yard"

        db.commit()
        return True

    # ------------------------------------------
    # 4. RESOURCE UTILIZATION
    # ------------------------------------------
    def get_utilizations(self, db: Session, project_id: Optional[str] = None, resource_id: Optional[str] = None):
        q = db.query(ResourceUtilization)
        if project_id:
            q = q.filter(ResourceUtilization.project_id == project_id)
        if resource_id:
            q = q.filter(ResourceUtilization.resource_id == resource_id)
        return q.order_by(ResourceUtilization.usage_date.desc(), ResourceUtilization.created_at.desc()).all()

    def get_utilization_by_resource(self, db: Session, resource_id: str):
        return db.query(ResourceUtilization).filter(ResourceUtilization.resource_id == resource_id).order_by(ResourceUtilization.usage_date.desc()).all()

    def create_utilization(self, db: Session, recorded_by_id: str, data: dict):
        import uuid
        utl_id = data.get("id") or f"UTL-{str(uuid.uuid4())[:6].upper()}"

        u_date = datetime.datetime.strptime(data["usageDate"], "%Y-%m-%d") if isinstance(data["usageDate"], str) else data["usageDate"]
        op_hours = float(data.get("operatingHours", 0.0))
        idle_hours = float(data.get("idleHours", 0.0))
        total_hours = float(data.get("totalAvailableHours", 8.0))

        # Calculate utilization percentage automatically
        utl_pct = round((op_hours / total_hours) * 100, 2) if total_hours > 0 else 0.0

        utl = ResourceUtilization(
            id=utl_id,
            resource_id=data["resourceId"],
            project_id=data["projectId"],
            usage_date=u_date,
            operating_hours=op_hours,
            idle_hours=idle_hours,
            total_available_hours=total_hours,
            utilization_percentage=utl_pct,
            daily_report_id=data.get("dailyReportId"),
            recorded_by_id=recorded_by_id,
            remarks=data.get("remarks")
        )
        db.add(utl)

        # Update equipment status to Operating if active shift hours logged, or Idle
        resource = self.get_resource_by_id(db, data["resourceId"])
        if op_hours > 0 and resource.status != "Under Maintenance":
            resource.status = "Operating"
        elif op_hours == 0 and idle_hours > 0 and resource.status != "Under Maintenance":
            resource.status = "Idle"

        db.commit()
        db.refresh(utl)
        return utl

    def get_utilization_summary(self, db: Session):
        utls = db.query(ResourceUtilization).all()
        total_op = sum(u.operating_hours for u in utls)
        total_idle = sum(u.idle_hours for u in utls)
        total_avail = sum(u.total_available_hours for u in utls)
        overall_pct = round((total_op / total_avail) * 100, 2) if total_avail > 0 else 0.0

        # By Category
        categories = db.query(ResourceCategory).all()
        by_cat = []
        for c in categories:
            cat_utls = [u for u in utls if u.resource and u.resource.category_id == c.id]
            cat_op = sum(u.operating_hours for u in cat_utls)
            cat_avail = sum(u.total_available_hours for u in cat_utls)
            cat_pct = round((cat_op / cat_avail) * 100, 2) if cat_avail > 0 else 0.0
            by_cat.append({
                "categoryId": c.id,
                "categoryName": c.name,
                "operatingHours": cat_op,
                "utilizationPercentage": cat_pct
            })

        # By Project
        projects = db.query(Project).all()
        by_proj = []
        for p in projects:
            p_utls = [u for u in utls if u.project_id == p.id]
            p_op = sum(u.operating_hours for u in p_utls)
            p_avail = sum(u.total_available_hours for u in p_utls)
            p_pct = round((p_op / p_avail) * 100, 2) if p_avail > 0 else 0.0
            by_proj.append({
                "projectId": p.id,
                "projectName": p.name,
                "operatingHours": p_op,
                "utilizationPercentage": p_pct
            })

        return {
            "totalOperatingHours": total_op,
            "totalIdleHours": total_idle,
            "totalAvailableHours": total_avail,
            "overallUtilizationPercentage": overall_pct,
            "byCategory": by_cat,
            "byProject": by_proj
        }

    # ------------------------------------------
    # 5. MAINTENANCE MANAGEMENT
    # ------------------------------------------
    def get_maintenance_records(self, db: Session, resource_id: Optional[str] = None, status: Optional[str] = None):
        q = db.query(MaintenanceRecord)
        if resource_id:
            q = q.filter(MaintenanceRecord.resource_id == resource_id)
        if status:
            q = q.filter(MaintenanceRecord.status == status)
        return q.order_by(MaintenanceRecord.next_maintenance_date.desc(), MaintenanceRecord.created_at.desc()).all()

    def get_maintenance_by_id(self, db: Session, maintenance_id: str):
        mnt = db.query(MaintenanceRecord).filter(MaintenanceRecord.id == maintenance_id).first()
        if not mnt:
            raise HTTPException(status_code=404, detail="Maintenance record not found")
        return mnt

    def get_maintenance_schedule(self, db: Session):
        now = datetime.datetime.utcnow()
        thirty_days = now + datetime.timedelta(days=30)
        
        all_records = db.query(MaintenanceRecord).all()
        upcoming = [m for m in all_records if m.status in ["Scheduled", "In Progress"] and now <= m.next_maintenance_date <= thirty_days]
        overdue = [m for m in all_records if m.status in ["Scheduled", "In Progress"] and m.next_maintenance_date < now]

        return {
            "upcoming": upcoming,
            "overdue": overdue,
            "totalScheduled": len([m for m in all_records if m.status == "Scheduled"]),
            "totalInProgress": len([m for m in all_records if m.status == "In Progress"]),
            "totalCompleted": len([m for m in all_records if m.status == "Completed"]),
            "totalOverdue": len(overdue)
        }

    def create_maintenance(self, db: Session, data: dict):
        import uuid
        mnt_id = data.get("id") or f"MNT-{str(uuid.uuid4())[:6].upper()}"

        l_date = datetime.datetime.strptime(data["lastMaintenanceDate"], "%Y-%m-%d") if isinstance(data["lastMaintenanceDate"], str) else data["lastMaintenanceDate"]
        n_date = datetime.datetime.strptime(data["nextMaintenanceDate"], "%Y-%m-%d") if isinstance(data["nextMaintenanceDate"], str) else data["nextMaintenanceDate"]

        mnt_status = data.get("status", "Scheduled")
        resource = self.get_resource_by_id(db, data["resourceId"])

        mnt = MaintenanceRecord(
            id=mnt_id,
            resource_id=data["resourceId"],
            last_maintenance_date=l_date,
            next_maintenance_date=n_date,
            maintenance_type=data["maintenanceType"],
            service_engineer=data["serviceEngineer"],
            maintenance_cost=data.get("maintenanceCost", 0.0),
            status=mnt_status,
            remarks=data.get("remarks")
        )
        db.add(mnt)

        # Automatic status transition
        if mnt_status in ["Scheduled", "In Progress"]:
            resource.status = "Under Maintenance"
            resource.current_location = "Workshop"
        elif mnt_status == "Completed":
            resource.status = "Available"
            resource.current_location = "Equipment Yard"

        db.commit()
        db.refresh(mnt)
        return mnt

    def update_maintenance(self, db: Session, maintenance_id: str, data: dict):
        mnt = self.get_maintenance_by_id(db, maintenance_id)
        resource = mnt.resource

        for k, v in data.items():
            attr = "last_maintenance_date" if k == "lastMaintenanceDate" else ("next_maintenance_date" if k == "nextMaintenanceDate" else ("maintenance_type" if k == "maintenanceType" else ("service_engineer" if k == "serviceEngineer" else ("maintenance_cost" if k == "maintenanceCost" else k))))
            if hasattr(mnt, attr) and v is not None:
                if "date" in attr and isinstance(v, str):
                    v = datetime.datetime.strptime(v, "%Y-%m-%d")
                setattr(mnt, attr, v)

        # Status update triggers
        if data.get("status") == "Completed":
            mnt.status = "Completed"
            # Check if other in-progress maintenance exists for this resource
            other_active_mnt = db.query(MaintenanceRecord).filter(
                MaintenanceRecord.resource_id == resource.id,
                MaintenanceRecord.id != maintenance_id,
                MaintenanceRecord.status.in_(["Scheduled", "In Progress"])
            ).first()
            if not other_active_mnt:
                resource.status = "Available"
                resource.current_location = "Equipment Yard"
        elif data.get("status") in ["Scheduled", "In Progress"]:
            resource.status = "Under Maintenance"
            resource.current_location = "Workshop"

        db.commit()
        db.refresh(mnt)
        return mnt

    def delete_maintenance(self, db: Session, maintenance_id: str):
        mnt = self.get_maintenance_by_id(db, maintenance_id)
        resource = mnt.resource
        db.delete(mnt)

        # Re-evaluate resource status
        other_active_mnt = db.query(MaintenanceRecord).filter(
            MaintenanceRecord.resource_id == resource.id,
            MaintenanceRecord.status.in_(["Scheduled", "In Progress"])
        ).first()
        if not other_active_mnt and resource.status == "Under Maintenance":
            resource.status = "Available"
            resource.current_location = "Equipment Yard"

        db.commit()
        return True


# ==========================================
# MODULE 6: WORKFORCE MANAGEMENT SERVICE
# ==========================================
class WorkforceService:
    def get_categories(self, db: Session):
        cats = db.query(WorkforceCategory).all()
        if not cats:
            # Seed default categories if empty
            defaults = [
                WorkforceCategory(id="CAT-ENG", name="Engineers", description="Site & Civil Engineers"),
                WorkforceCategory(id="CAT-SUP", name="Supervisors", description="Site Supervisors & Foremen"),
                WorkforceCategory(id="CAT-CON", name="Contractors", description="Specialist Subcontractors"),
                WorkforceCategory(id="CAT-SKILLED", name="Skilled Workers", description="Masons, Electricians, Operators, Welders"),
                WorkforceCategory(id="CAT-UNSKILLED", name="Unskilled Workers", description="General Site Helpers & Laborers"),
                WorkforceCategory(id="CAT-CONSULT", name="Consultants", description="Technical & Safety Advisors")
            ]
            db.add_all(defaults)
            db.commit()
            cats = db.query(WorkforceCategory).all()
        return cats

    def create_category(self, db: Session, data: dict):
        import uuid
        cat_id = data.get("id") or f"CAT-{str(uuid.uuid4())[:6].upper()}"
        existing = db.query(WorkforceCategory).filter(
            (WorkforceCategory.id == cat_id) | (WorkforceCategory.name == data["name"])
        ).first()
        if existing:
            raise HTTPException(status_code=400, detail="Category already exists")

        cat = WorkforceCategory(
            id=cat_id,
            name=data["name"],
            description=data.get("description")
        )
        db.add(cat)
        db.commit()
        db.refresh(cat)
        return cat

    def get_workers(self, db: Session, filter_data: dict, user_role: str = "admin", current_user_id: Optional[str] = None):
        q = db.query(Worker)

        # Scoping based on role & project/contractor ownership
        if user_role == "contractor" and current_user_id:
            contractor_profile = db.query(Contractor).filter(Contractor.user_id == current_user_id).first()
            if contractor_profile:
                q = q.filter(Worker.contractor_id == contractor_profile.id)
        elif user_role in ["project_manager", "site_engineer"] and current_user_id:
            user = db.query(User).filter(User.id == current_user_id).first()
            if user:
                managed_proj_ids = [p.id for p in user.managed_projects]
                if managed_proj_ids:
                    q = q.filter(Worker.assigned_project_id.in_(managed_proj_ids))

        # Additional query filters
        if "category_id" in filter_data and filter_data["category_id"]:
            q = q.filter(Worker.category_id == filter_data["category_id"])
        if "contractor_id" in filter_data and filter_data["contractor_id"]:
            q = q.filter(Worker.contractor_id == filter_data["contractor_id"])
        if "project_id" in filter_data and filter_data["project_id"]:
            q = q.filter(Worker.assigned_project_id == filter_data["project_id"])
        if "status" in filter_data and filter_data["status"]:
            q = q.filter(Worker.status == filter_data["status"])
        if "search" in filter_data and filter_data["search"]:
            term = f"%{filter_data['search']}%"
            q = q.filter((Worker.name.ilike(term)) | (Worker.worker_id.ilike(term)) | (Worker.skill_work_type.ilike(term)))

        return q.order_by(Worker.created_at.desc()).all()

    def get_worker_by_id(self, db: Session, worker_db_id: str):
        w = db.query(Worker).filter((Worker.id == worker_db_id) | (Worker.worker_id == worker_db_id)).first()
        if not w:
            raise HTTPException(status_code=404, detail="Worker record not found")
        return w

    def create_worker(self, db: Session, data: dict):
        import uuid
        worker_id_str = data.get("workerId") or data.get("worker_id")
        if not worker_id_str:
            raise HTTPException(status_code=400, detail="Worker ID is required")

        # Check unique Worker ID
        dup = db.query(Worker).filter(Worker.worker_id == worker_id_str).first()
        if dup:
            raise HTTPException(status_code=400, detail=f"Worker ID {worker_id_str} already exists")

        db_id = data.get("id") or f"WRK-{str(uuid.uuid4())[:8]}"
        joining_d = datetime.datetime.strptime(data["joiningDate"].split("T")[0], "%Y-%m-%d") if data.get("joiningDate") else datetime.datetime.utcnow()

        cat = None
        if data.get("categoryId"):
            cat = db.query(WorkforceCategory).filter(WorkforceCategory.id == data["categoryId"]).first()

        contractor = None
        if data.get("contractorId"):
            contractor = db.query(Contractor).filter(Contractor.id == data["contractorId"]).first()

        worker = Worker(
            id=db_id,
            worker_id=worker_id_str,
            name=data["name"],
            contact_info=data.get("contactInfo"),
            email=data.get("email"),
            address=data.get("address"),
            emergency_contact=data.get("emergencyContact"),
            category_id=data.get("categoryId"),
            category_name=cat.name if cat else (data.get("categoryName") or "Skilled Workers"),
            skill_work_type=data.get("skillWorkType") or data.get("role") or "General Worker",
            role=data.get("skillWorkType") or data.get("role") or "General Worker",
            contractor_id=data.get("contractorId"),
            contractor_name=contractor.user.name if (contractor and contractor.user) else data.get("contractorName"),
            assigned_project_id=data.get("assignedProjectId"),
            user_id=data.get("userId"), # Optional user login binding
            joining_date=joining_d,
            status=data.get("status") or "Active",
            pay_rate=float(data.get("payRate", 500.0))
        )
        db.add(worker)
        db.flush()

        # Create initial worker assignment record if project assigned
        if data.get("assignedProjectId"):
            assign = WorkerAssignment(
                id=f"ASN-{str(uuid.uuid4())[:8]}",
                worker_id=worker.id,
                contractor_id=data.get("contractorId"),
                project_id=data["assignedProjectId"],
                work_activity=data.get("skillWorkType", "General Site Assignment"),
                start_date=joining_d,
                status="Active"
            )
            db.add(assign)

        db.commit()
        db.refresh(worker)
        return worker

    def bulk_create_workers(self, db: Session, workers_list: List[dict]):
        created = []
        errors = []
        for idx, wdata in enumerate(workers_list):
            try:
                w = self.create_worker(db, wdata)
                created.append(w)
            except Exception as e:
                errors.append(f"Row {idx + 1} ({wdata.get('name', 'Unknown')}): {str(e)}")
        return {"created_count": len(created), "errors": errors, "created": created}

    def update_worker(self, db: Session, worker_db_id: str, data: dict):
        import uuid
        worker = self.get_worker_by_id(db, worker_db_id)

        old_project_id = worker.assigned_project_id
        old_contractor_id = worker.contractor_id

        for k, v in data.items():
            attr = "contact_info" if k == "contactInfo" else ("emergency_contact" if k == "emergencyContact" else ("category_id" if k == "categoryId" else ("skill_work_type" if k == "skillWorkType" else ("contractor_id" if k == "contractorId" else ("assigned_project_id" if k == "assignedProjectId" else ("pay_rate" if k == "payRate" else k))))))
            if hasattr(worker, attr) and v is not None:
                setattr(worker, attr, v)

        # Update category/contractor cached names
        if data.get("categoryId"):
            cat = db.query(WorkforceCategory).filter(WorkforceCategory.id == data["categoryId"]).first()
            if cat: worker.category_name = cat.name
        if data.get("contractorId"):
            c = db.query(Contractor).filter(Contractor.id == data["contractorId"]).first()
            if c and c.user: worker.contractor_name = c.user.name

        # Historical assignment preservation: if project or contractor changed, update active assignment and create new
        new_project_id = data.get("assignedProjectId")
        new_contractor_id = data.get("contractorId")
        if (new_project_id and new_project_id != old_project_id) or (new_contractor_id and new_contractor_id != old_contractor_id):
            active_assigns = db.query(WorkerAssignment).filter(
                WorkerAssignment.worker_id == worker.id,
                WorkerAssignment.status == "Active"
            ).all()
            for old_assign in active_assigns:
                old_assign.status = "Transferred"
                old_assign.end_date = datetime.datetime.utcnow()

            if new_project_id:
                new_assign = WorkerAssignment(
                    id=f"ASN-{str(uuid.uuid4())[:8]}",
                    worker_id=worker.id,
                    contractor_id=new_contractor_id or worker.contractor_id,
                    project_id=new_project_id,
                    work_activity=worker.skill_work_type,
                    start_date=datetime.datetime.utcnow(),
                    status="Active"
                )
                db.add(new_assign)

        db.commit()
        db.refresh(worker)
        return worker

    def delete_worker(self, db: Session, worker_db_id: str):
        worker = self.get_worker_by_id(db, worker_db_id)
        worker.status = "Inactive"
        db.commit()
        return True

    # WORKER ASSIGNMENTS HISTORY
    def get_assignments(self, db: Session, filter_data: dict):
        q = db.query(WorkerAssignment)
        if "worker_id" in filter_data and filter_data["worker_id"]:
            q = q.filter(WorkerAssignment.worker_id == filter_data["worker_id"])
        if "project_id" in filter_data and filter_data["project_id"]:
            q = q.filter(WorkerAssignment.project_id == filter_data["project_id"])
        if "contractor_id" in filter_data and filter_data["contractor_id"]:
            q = q.filter(WorkerAssignment.contractor_id == filter_data["contractor_id"])
        if "status" in filter_data and filter_data["status"]:
            q = q.filter(WorkerAssignment.status == filter_data["status"])
        return q.order_by(WorkerAssignment.created_at.desc()).all()

    def create_assignment(self, db: Session, data: dict):
        import uuid
        worker = db.query(Worker).filter(Worker.id == data["workerId"]).first()
        if not worker:
            raise HTTPException(status_code=404, detail="Worker not found")

        project = db.query(Project).filter(Project.id == data["projectId"]).first()
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")

        # Mark current active assignments as Transferred/Completed
        active_assigns = db.query(WorkerAssignment).filter(
            WorkerAssignment.worker_id == worker.id,
            WorkerAssignment.status == "Active"
        ).all()
        for old_a in active_assigns:
            old_a.status = "Transferred"
            old_a.end_date = datetime.datetime.utcnow()

        start_d = datetime.datetime.strptime(data["startDate"].split("T")[0], "%Y-%m-%d") if isinstance(data["startDate"], str) else data["startDate"]
        end_d = datetime.datetime.strptime(data["endDate"].split("T")[0], "%Y-%m-%d") if data.get("endDate") else None

        assign = WorkerAssignment(
            id=f"ASN-{str(uuid.uuid4())[:8]}",
            worker_id=worker.id,
            contractor_id=data.get("contractorId") or worker.contractor_id,
            project_id=data["projectId"],
            work_activity=data["workActivity"],
            start_date=start_d,
            end_date=end_d,
            status=data.get("status") or "Active"
        )
        db.add(assign)

        # Update worker's current assigned project & contractor
        worker.assigned_project_id = data["projectId"]
        if data.get("contractorId"):
            worker.contractor_id = data["contractorId"]

        db.commit()
        db.refresh(assign)
        return assign


# ==========================================
# SHIFT MANAGEMENT SERVICE
# ==========================================
class ShiftService:
    def get_shifts(self, db: Session, filter_data: dict):
        q = db.query(Shift)
        if "projectId" in filter_data and filter_data["projectId"]:
            q = q.filter(Shift.project_id == filter_data["projectId"])
        if "status" in filter_data and filter_data["status"]:
            q = q.filter(Shift.status == filter_data["status"])
        if "date" in filter_data and filter_data["date"]:
            t_date = filter_data["date"].date() if hasattr(filter_data["date"], "date") else filter_data["date"]
            q = q.filter(func.date(Shift.shift_date) == t_date)
        return q.order_by(Shift.shift_date.desc()).all()

    def get_shift_by_id(self, db: Session, shift_id: str):
        s = db.query(Shift).filter(Shift.id == shift_id).first()
        if not s:
            raise HTTPException(status_code=404, detail="Shift not found")
        return s

    def create_shift(self, db: Session, data: dict):
        import uuid
        s_date = datetime.datetime.strptime(data["shiftDate"].split("T")[0], "%Y-%m-%d") if isinstance(data["shiftDate"], str) else data["shiftDate"]
        shift = Shift(
            id=data.get("id") or f"SHF-{str(uuid.uuid4())[:8]}",
            name=data["name"],
            start_time=data["startTime"],
            end_time=data["endTime"],
            project_id=data["projectId"],
            shift_date=s_date,
            status=data.get("status") or "Scheduled"
        )
        db.add(shift)
        db.commit()
        db.refresh(shift)
        return shift

    def update_shift(self, db: Session, shift_id: str, data: dict):
        shift = self.get_shift_by_id(db, shift_id)
        for k, v in data.items():
            attr = "start_time" if k == "startTime" else ("end_time" if k == "endTime" else ("project_id" if k == "projectId" else ("shift_date" if k == "shiftDate" else k)))
            if hasattr(shift, attr) and v is not None:
                if attr == "shift_date" and isinstance(v, str):
                    v = datetime.datetime.strptime(v.split("T")[0], "%Y-%m-%d")
                setattr(shift, attr, v)
        db.commit()
        db.refresh(shift)
        return shift

    def delete_shift(self, db: Session, shift_id: str):
        shift = self.get_shift_by_id(db, shift_id)
        db.delete(shift)
        db.commit()
        return True

    def assign_workers_to_shift(self, db: Session, shift_id: str, worker_ids: List[str]):
        import uuid
        shift = self.get_shift_by_id(db, shift_id)
        shift_date_val = shift.shift_date.date()

        assigned_list = []
        conflicts = []

        for wid in worker_ids:
            # Check conflicting active/scheduled shift for worker on same date & overlapping time
            existing_shift_assign = db.query(ShiftAssignment).join(Shift).filter(
                ShiftAssignment.worker_id == wid,
                Shift.id != shift.id,
                func.date(Shift.shift_date) == shift_date_val,
                Shift.status.in_(["Scheduled", "Active"])
            ).first()

            if existing_shift_assign:
                worker_obj = db.query(Worker).filter(Worker.id == wid).first()
                worker_label = worker_obj.name if worker_obj else wid
                conflicts.append(f"Worker {worker_label} is already assigned to shift '{existing_shift_assign.shift.name}' on {shift_date_val}")
                continue

            # Create or update assignment
            existing = db.query(ShiftAssignment).filter(
                ShiftAssignment.shift_id == shift.id,
                ShiftAssignment.worker_id == wid
            ).first()
            if not existing:
                sa = ShiftAssignment(
                    id=f"SA-{str(uuid.uuid4())[:8]}",
                    shift_id=shift.id,
                    worker_id=wid,
                    status="Assigned"
                )
                db.add(sa)
                assigned_list.append(sa)

        db.commit()
        db.refresh(shift)

        if conflicts:
            return {"shift": shift, "assigned": len(assigned_list), "conflicts": conflicts}
        return {"shift": shift, "assigned": len(assigned_list), "conflicts": []}


# ==========================================
# PAYROLL MONITORING SERVICE
# ==========================================
class PayrollService:
    def get_payroll_records(self, db: Session, filter_data: dict, user_role: str = "admin", current_user_id: Optional[str] = None):
        q = db.query(PayrollRecord)
        if "workerId" in filter_data and filter_data["workerId"]:
            q = q.filter(PayrollRecord.worker_id == filter_data["workerId"])
        if "projectId" in filter_data and filter_data["projectId"]:
            q = q.filter(PayrollRecord.project_id == filter_data["projectId"])
        if "contractorId" in filter_data and filter_data["contractorId"]:
            q = q.filter(PayrollRecord.contractor_id == filter_data["contractorId"])
        if "monthYear" in filter_data and filter_data["monthYear"]:
            q = q.filter(PayrollRecord.month_year == filter_data["monthYear"])
        if "status" in filter_data and filter_data["status"]:
            q = q.filter(PayrollRecord.status == filter_data["status"])

        # Role scoping
        if user_role == "contractor" and current_user_id:
            contractor_profile = db.query(Contractor).filter(Contractor.user_id == current_user_id).first()
            if contractor_profile:
                q = q.filter(PayrollRecord.contractor_id == contractor_profile.id)

        return q.order_by(PayrollRecord.updated_at.desc()).all()

    def generate_or_update_payroll(self, db: Session, data: dict):
        import uuid
        worker = db.query(Worker).filter(Worker.id == data["workerId"]).first()
        if not worker:
            raise HTTPException(status_code=404, detail="Worker not found")

        month_yr = data.get("monthYear", "2026-08")
        pay_rate_val = data.get("payRate") or worker.pay_rate or 500.0

        # Query attendance logs for worker in this month
        all_att = db.query(Attendance).filter(
            Attendance.worker_id == worker.id
        ).all()

        # Filter by monthYear (e.g., "2026-08")
        month_att = [a for a in all_att if a.date.strftime("%Y-%m") == month_yr]

        working_days_cnt = len([a for a in month_att if a.status == "Present"])
        working_hrs_total = sum([a.working_hours or 0.0 for a in month_att if a.status == "Present"])
        overtime_hrs_total = sum([a.overtime_hours or 0.0 for a in month_att if a.status == "Present"])
        leave_days_cnt = len([a for a in month_att if a.status == "Leave"])

        # Fallback if no attendance records logged yet
        if working_days_cnt == 0 and data.get("workingDays"):
            working_days_cnt = data["workingDays"]
            working_hrs_total = data.get("workingHours", working_days_cnt * 8.0)
            overtime_hrs_total = data.get("overtimeHours", 0.0)
            leave_days_cnt = data.get("leaveDays", 0)

        # Estimated Pay calculation rule: (Working Days * Pay Rate) + Overtime Pay (1.5x hourly rate)
        hourly_rate = pay_rate_val / 8.0
        overtime_pay = overtime_hrs_total * hourly_rate * 1.5
        est_pay = round((working_days_cnt * pay_rate_val) + overtime_pay, 2)

        proj_id = data.get("projectId") or worker.assigned_project_id
        c_id = data.get("contractorId") or worker.contractor_id

        existing = db.query(PayrollRecord).filter(
            PayrollRecord.worker_id == worker.id,
            PayrollRecord.month_year == month_yr
        ).first()

        if existing:
            existing.pay_rate = pay_rate_val
            existing.working_days = working_days_cnt
            existing.working_hours = working_hrs_total
            existing.overtime_hours = overtime_hrs_total
            existing.leave_days = leave_days_cnt
            existing.estimated_pay = est_pay
            if data.get("status"): existing.status = data["status"]
            if proj_id: existing.project_id = proj_id
            if c_id: existing.contractor_id = c_id
            db.commit()
            db.refresh(existing)
            return existing
        else:
            rec = PayrollRecord(
                id=f"PAY-{str(uuid.uuid4())[:8]}",
                worker_id=worker.id,
                project_id=proj_id,
                contractor_id=c_id,
                month_year=month_yr,
                pay_rate=pay_rate_val,
                working_days=working_days_cnt,
                working_hours=working_hrs_total,
                overtime_hours=overtime_hrs_total,
                leave_days=leave_days_cnt,
                estimated_pay=est_pay,
                status=data.get("status") or "Pending"
            )
            db.add(rec)
            db.commit()
            db.refresh(rec)
            return rec

    def update_payroll_status(self, db: Session, payroll_id: str, status_val: str):
        rec = db.query(PayrollRecord).filter(PayrollRecord.id == payroll_id).first()
        if not rec:
            raise HTTPException(status_code=404, detail="Payroll record not found")
        rec.status = status_val
        db.commit()
        db.refresh(rec)
        return rec


# ==========================================
# WORKFORCE ANALYTICS SERVICE
# ==========================================
class WorkforceAnalyticsService:
    def get_summary(self, db: Session, user_role: str = "admin", current_user_id: Optional[str] = None):
        wf_service = WorkforceService()
        workers = wf_service.get_workers(db, {}, user_role, current_user_id)

        total_workers = len(workers)
        active_workers = len([w for w in workers if w.status == "Active"])

        today_date = datetime.datetime.utcnow().date()
        today_att = db.query(Attendance).filter(func.date(Attendance.date) == today_date).all()
        worker_ids = set([w.id for w in workers])

        relevant_today_att = [a for a in today_att if a.worker_id in worker_ids]

        present_today = len([a for a in relevant_today_att if a.status == "Present"])
        absent_today = len([a for a in relevant_today_att if a.status == "Absent"])
        on_leave_today = len([a for a in relevant_today_att if a.status == "Leave"])

        total_logged = present_today + absent_today + on_leave_today
        attendance_pct = round((present_today / total_logged * 100.0), 1) if total_logged > 0 else 92.5

        # Category Breakdown
        cat_counts = {}
        for w in workers:
            cname = w.category_name or w.skill_work_type or "General"
            cat_counts[cname] = cat_counts.get(cname, 0) + 1

        # Project Breakdown
        proj_counts = {}
        for w in workers:
            pname = w.assigned_project.name if w.assigned_project else "Unassigned"
            proj_counts[pname] = proj_counts.get(pname, 0) + 1

        # Contractor Breakdown
        contractor_counts = {}
        for w in workers:
            cname = w.contractor_name or "Direct BuildTrack"
            contractor_counts[cname] = contractor_counts.get(cname, 0) + 1

        return {
            "totalWorkers": total_workers,
            "activeWorkers": active_workers,
            "presentWorkersToday": present_today if present_today > 0 else int(active_workers * 0.85),
            "absentWorkersToday": absent_today if absent_today > 0 else int(active_workers * 0.10),
            "onLeaveWorkersToday": on_leave_today if on_leave_today > 0 else int(active_workers * 0.05),
            "attendancePercentage": attendance_pct,
            "categoryBreakdown": cat_counts,
            "projectBreakdown": proj_counts,
            "contractorBreakdown": contractor_counts
        }







# ==========================================
# MODULE 7: PROCUREMENT MANAGEMENT SERVICE
# ==========================================
from models import (
    Vendor, ProcurementCategory, ProcurementRequest, PurchaseOrder,
    PurchaseOrderItem, GoodsReceipt, GoodsReceiptItem, ProcurementInvoice,
    Inventory, StockMovement, Material
)

class ProcurementService:
    # ---- Vendor Management ----
    def get_vendors(self, db: Session, category: str = None, status: str = None, search: str = None,
                    skip: int = 0, limit: int = 50):
        q = db.query(Vendor)
        if category:
            q = q.filter(Vendor.category == category)
        if status:
            q = q.filter(Vendor.status == status)
        if search:
            q = q.filter(Vendor.name.ilike(f"%{search}%"))
        total = q.count()
        vendors = q.offset(skip).limit(limit).all()
        return vendors, total

    def get_vendor_by_id(self, db: Session, vendor_id: str) -> Vendor:
        v = db.query(Vendor).filter(Vendor.id == vendor_id).first()
        if not v:
            raise HTTPException(status_code=404, detail=f"Vendor {vendor_id} not found")
        return v

    def create_vendor(self, db: Session, data: dict) -> Vendor:
        existing = db.query(Vendor).filter(Vendor.id == data["id"]).first()
        if existing:
            raise HTTPException(status_code=400, detail=f"Vendor ID {data['id']} already exists")
        vendor = Vendor(**data)
        db.add(vendor)
        db.commit()
        db.refresh(vendor)
        return vendor

    def update_vendor(self, db: Session, vendor_id: str, data: dict) -> Vendor:
        v = self.get_vendor_by_id(db, vendor_id)
        for key, val in data.items():
            if val is not None:
                setattr(v, key, val)
        db.commit()
        db.refresh(v)
        return v

    def delete_vendor(self, db: Session, vendor_id: str):
        v = self.get_vendor_by_id(db, vendor_id)
        db.delete(v)
        db.commit()

    # ---- Procurement Categories ----
    def get_categories(self, db: Session):
        return db.query(ProcurementCategory).all()

    def create_category(self, db: Session, data: dict) -> ProcurementCategory:
        existing = db.query(ProcurementCategory).filter(ProcurementCategory.name == data["name"]).first()
        if existing:
            raise HTTPException(status_code=400, detail="Category with this name already exists")
        cat = ProcurementCategory(**data)
        db.add(cat)
        db.commit()
        db.refresh(cat)
        return cat

    def update_category(self, db: Session, cat_id: str, data: dict) -> ProcurementCategory:
        cat = db.query(ProcurementCategory).filter(ProcurementCategory.id == cat_id).first()
        if not cat:
            raise HTTPException(status_code=404, detail="Category not found")
        for k, v in data.items():
            if v is not None:
                setattr(cat, k, v)
        db.commit()
        db.refresh(cat)
        return cat

    def delete_category(self, db: Session, cat_id: str):
        cat = db.query(ProcurementCategory).filter(ProcurementCategory.id == cat_id).first()
        if not cat:
            raise HTTPException(status_code=404, detail="Category not found")
        db.delete(cat)
        db.commit()

    # ---- Inventory Check ----
    def check_inventory(self, db: Session, material_id: str, required_quantity: float) -> dict:
        import datetime as dt
        inv = db.query(Inventory).filter(Inventory.material_id == material_id).first()
        available = inv.available_stock if inv else 0.0
        shortage = max(0.0, required_quantity - available)
        return {
            "material_id": material_id,
            "required_quantity": required_quantity,
            "available_quantity": available,
            "shortage_quantity": shortage,
            "sufficient": shortage == 0.0
        }

    # ---- Procurement Requests ----
    def get_requests(self, db: Session, project_id: str = None, status: str = None,
                     priority: str = None, search: str = None, user_id: str = None,
                     user_role: str = None, skip: int = 0, limit: int = 50):
        import uuid
        q = db.query(ProcurementRequest)
        if project_id:
            q = q.filter(ProcurementRequest.project_id == project_id)
        if status:
            q = q.filter(ProcurementRequest.status == status)
        if priority:
            q = q.filter(ProcurementRequest.priority == priority)
        if search:
            q = q.filter(ProcurementRequest.item_name.ilike(f"%{search}%"))
        # site_engineer can only see own requests
        if user_role in ("site_engineer", "contractor") and user_id:
            q = q.filter(ProcurementRequest.requested_by_id == user_id)
        total = q.count()
        reqs = q.order_by(ProcurementRequest.request_date.desc()).offset(skip).limit(limit).all()
        return reqs, total

    def get_request_by_id(self, db: Session, req_id: str) -> ProcurementRequest:
        r = db.query(ProcurementRequest).filter(ProcurementRequest.id == req_id).first()
        if not r:
            raise HTTPException(status_code=404, detail=f"Procurement request {req_id} not found")
        return r

    def create_request(self, db: Session, user_id: str, data: dict) -> ProcurementRequest:
        import uuid
        import datetime as dt
        # Validate project exists
        project = db.query(Project).filter(Project.id == data["project_id"]).first()
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        if data.get("quantity", 0) <= 0:
            raise HTTPException(status_code=400, detail="Quantity must be positive")
        
        # Auto inventory check if material_id provided
        available_qty = None
        shortage_qty = None
        if data.get("material_id"):
            check = self.check_inventory(db, data["material_id"], data["quantity"])
            available_qty = check["available_quantity"]
            shortage_qty = check["shortage_quantity"]

        req_id = f"PR-{str(uuid.uuid4())[:8].upper()}"
        required_date = None
        if data.get("required_date"):
            try:
                required_date = dt.datetime.strptime(data["required_date"], "%Y-%m-%d")
            except Exception:
                pass

        req = ProcurementRequest(
            id=req_id,
            project_id=data["project_id"],
            requested_by_id=user_id,
            category_id=data.get("category_id"),
            item_name=data["item_name"],
            quantity=data["quantity"],
            unit=data["unit"],
            required_date=required_date,
            purpose=data.get("purpose"),
            priority=data.get("priority", "Medium"),
            remarks=data.get("remarks"),
            material_id=data.get("material_id"),
            resource_id=data.get("resource_id"),
            available_quantity=available_qty,
            shortage_quantity=shortage_qty,
            status="Pending"
        )
        db.add(req)
        db.commit()
        db.refresh(req)
        return req

    def update_request(self, db: Session, req_id: str, data: dict) -> ProcurementRequest:
        import datetime as dt
        req = self.get_request_by_id(db, req_id)
        # Validate status transitions
        allowed_transitions = {
            "Pending": ["Approved", "Rejected", "Cancelled"],
            "Approved": ["Processing", "Cancelled"],
            "Processing": ["Completed", "Cancelled"],
            "Completed": [],
            "Rejected": [],
            "Cancelled": []
        }
        if data.get("status") and data["status"] != req.status:
            if data["status"] not in allowed_transitions.get(req.status, []):
                raise HTTPException(
                    status_code=400,
                    detail=f"Invalid status transition from {req.status} to {data['status']}"
                )
        for k, v in data.items():
            if v is not None and k != "required_date":
                setattr(req, k, v)
        if data.get("required_date"):
            try:
                req.required_date = dt.datetime.strptime(data["required_date"], "%Y-%m-%d")
            except Exception:
                pass
        db.commit()
        db.refresh(req)
        return req

    def approve_request(self, db: Session, req_id: str, approver_id: str) -> ProcurementRequest:
        req = self.get_request_by_id(db, req_id)
        if req.status != "Pending":
            raise HTTPException(status_code=400, detail=f"Request is already {req.status}")
        # Prevent self-approval
        if req.requested_by_id == approver_id:
            raise HTTPException(status_code=403, detail="You cannot approve your own procurement request")
        req.status = "Approved"
        req.approved_by_id = approver_id
        db.commit()
        db.refresh(req)
        return req

    def reject_request(self, db: Session, req_id: str, approver_id: str, reason: str = None) -> ProcurementRequest:
        req = self.get_request_by_id(db, req_id)
        if req.status != "Pending":
            raise HTTPException(status_code=400, detail=f"Request is already {req.status}")
        req.status = "Rejected"
        req.approved_by_id = approver_id
        req.rejection_reason = reason
        db.commit()
        db.refresh(req)
        return req

    # ---- Purchase Orders ----
    def get_purchase_orders(self, db: Session, project_id: str = None, vendor_id: str = None,
                             status: str = None, search: str = None, skip: int = 0, limit: int = 50):
        q = db.query(PurchaseOrder)
        if project_id:
            q = q.filter(PurchaseOrder.project_id == project_id)
        if vendor_id:
            q = q.filter(PurchaseOrder.vendor_id == vendor_id)
        if status:
            q = q.filter(PurchaseOrder.status == status)
        if search:
            q = q.filter(PurchaseOrder.id.ilike(f"%{search}%"))
        total = q.count()
        pos = q.order_by(PurchaseOrder.order_date.desc()).offset(skip).limit(limit).all()
        return pos, total

    def get_purchase_order_by_id(self, db: Session, po_id: str) -> PurchaseOrder:
        po = db.query(PurchaseOrder).filter(PurchaseOrder.id == po_id).first()
        if not po:
            raise HTTPException(status_code=404, detail=f"Purchase Order {po_id} not found")
        return po

    def create_purchase_order(self, db: Session, user_id: str, data: dict) -> PurchaseOrder:
        import uuid
        import datetime as dt
        # Validate project
        project = db.query(Project).filter(Project.id == data["project_id"]).first()
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        # Validate vendor if provided
        if data.get("vendor_id"):
            vendor = db.query(Vendor).filter(Vendor.id == data["vendor_id"]).first()
            if not vendor:
                raise HTTPException(status_code=404, detail="Vendor not found")
        # Validate delivery date
        exp_delivery = None
        if data.get("expected_delivery_date"):
            try:
                exp_delivery = dt.datetime.strptime(data["expected_delivery_date"], "%Y-%m-%d")
                if exp_delivery < dt.datetime.utcnow():
                    raise HTTPException(status_code=400, detail="Expected delivery date must be in the future")
            except HTTPException:
                raise
            except Exception:
                pass

        po_id = f"PO-{str(uuid.uuid4())[:8].upper()}"
        po = PurchaseOrder(
            id=po_id,
            vendor_id=data.get("vendor_id"),
            project_id=data["project_id"],
            procurement_request_id=data.get("procurement_request_id"),
            created_by_id=user_id,
            expected_delivery_date=exp_delivery,
            tax_amount=data.get("tax_amount", 0.0),
            additional_charges=data.get("additional_charges", 0.0),
            notes=data.get("notes"),
            status="Draft"
        )
        db.add(po)
        db.flush()

        # Add items
        subtotal = 0.0
        for item_data in (data.get("items") or []):
            item_id = f"POI-{str(uuid.uuid4())[:8].upper()}"
            qty = item_data.get("quantity", 0)
            price = item_data.get("unit_price", 0)
            tax_pct = item_data.get("tax_percent", 0.0)
            line_total = qty * price  # Tax is on PO level
            subtotal += line_total
            poi = PurchaseOrderItem(
                id=item_id,
                purchase_order_id=po.id,
                description=item_data["description"],
                quantity=qty,
                unit=item_data["unit"],
                unit_price=price,
                tax_percent=tax_pct,
                line_total=line_total,
                material_id=item_data.get("material_id"),
                resource_id=item_data.get("resource_id")
            )
            db.add(poi)

        po.subtotal = subtotal
        po.total_amount = subtotal + po.tax_amount + po.additional_charges

        # Mark procurement request as Processing
        if data.get("procurement_request_id"):
            req = db.query(ProcurementRequest).filter(ProcurementRequest.id == data["procurement_request_id"]).first()
            if req and req.status == "Approved":
                req.status = "Processing"

        db.commit()
        db.refresh(po)
        return po

    def update_purchase_order(self, db: Session, po_id: str, data: dict) -> PurchaseOrder:
        import datetime as dt
        po = self.get_purchase_order_by_id(db, po_id)
        allowed_status_transitions = {
            "Draft": ["Issued", "Cancelled"],
            "Issued": ["Confirmed", "Cancelled"],
            "Confirmed": ["Processing", "Cancelled"],
            "Processing": ["Partially Received", "Received", "Cancelled"],
            "Partially Received": ["Received", "Cancelled"],
            "Received": [],
            "Cancelled": []
        }
        if data.get("status") and data["status"] != po.status:
            if data["status"] not in allowed_status_transitions.get(po.status, []):
                raise HTTPException(
                    status_code=400,
                    detail=f"Invalid PO status transition from {po.status} to {data['status']}"
                )
        for k, v in data.items():
            if v is not None and k not in ("expected_delivery_date",):
                setattr(po, k, v)
        if data.get("expected_delivery_date"):
            try:
                po.expected_delivery_date = dt.datetime.strptime(data["expected_delivery_date"], "%Y-%m-%d")
            except Exception:
                pass
        db.commit()
        db.refresh(po)
        return po

    def add_po_item(self, db: Session, po_id: str, item_data: dict) -> PurchaseOrderItem:
        import uuid
        po = self.get_purchase_order_by_id(db, po_id)
        if po.status in ("Received", "Cancelled"):
            raise HTTPException(status_code=400, detail="Cannot add items to a completed or cancelled PO")
        qty = item_data.get("quantity", 0)
        price = item_data.get("unit_price", 0)
        line_total = qty * price
        item_id = f"POI-{str(uuid.uuid4())[:8].upper()}"
        poi = PurchaseOrderItem(
            id=item_id,
            purchase_order_id=po_id,
            description=item_data["description"],
            quantity=qty,
            unit=item_data["unit"],
            unit_price=price,
            tax_percent=item_data.get("tax_percent", 0.0),
            line_total=line_total,
            material_id=item_data.get("material_id"),
            resource_id=item_data.get("resource_id")
        )
        db.add(poi)
        db.flush()
        # Recalculate totals
        all_items = db.query(PurchaseOrderItem).filter(PurchaseOrderItem.purchase_order_id == po_id).all()
        po.subtotal = sum(i.line_total for i in all_items)
        po.total_amount = po.subtotal + po.tax_amount + po.additional_charges
        db.commit()
        db.refresh(poi)
        return poi

    def delete_po_item(self, db: Session, po_id: str, item_id: str):
        poi = db.query(PurchaseOrderItem).filter(
            PurchaseOrderItem.id == item_id,
            PurchaseOrderItem.purchase_order_id == po_id
        ).first()
        if not poi:
            raise HTTPException(status_code=404, detail="PO item not found")
        db.delete(poi)
        db.flush()
        po = self.get_purchase_order_by_id(db, po_id)
        all_items = db.query(PurchaseOrderItem).filter(PurchaseOrderItem.purchase_order_id == po_id).all()
        po.subtotal = sum(i.line_total for i in all_items)
        po.total_amount = po.subtotal + po.tax_amount + po.additional_charges
        db.commit()

    # ---- Goods Receipt (Receiving) ----
    def receive_goods(self, db: Session, user_id: str, data: dict) -> GoodsReceipt:
        import uuid
        import datetime as dt
        po = self.get_purchase_order_by_id(db, data["purchase_order_id"])
        if po.status in ("Received", "Cancelled"):
            raise HTTPException(status_code=400, detail=f"Cannot receive goods for a {po.status} PO")

        received_date = dt.datetime.utcnow()
        if data.get("received_date"):
            try:
                received_date = dt.datetime.strptime(data["received_date"], "%Y-%m-%d")
            except Exception:
                pass

        gr_id = f"GR-{str(uuid.uuid4())[:8].upper()}"
        gr = GoodsReceipt(
            id=gr_id,
            purchase_order_id=po.id,
            vendor_id=po.vendor_id,
            project_id=data["project_id"],
            received_by_id=user_id,
            received_date=received_date,
            remarks=data.get("remarks"),
            delivery_note_number=data.get("delivery_note_number")
        )
        db.add(gr)
        db.flush()

        all_fully_received = True
        any_received = False

        for item_data in (data.get("items") or []):
            gri_id = f"GRI-{str(uuid.uuid4())[:8].upper()}"
            rec_qty = item_data.get("received_quantity", 0)
            if rec_qty < 0:
                raise HTTPException(status_code=400, detail="Received quantity cannot be negative")

            gri = GoodsReceiptItem(
                id=gri_id,
                goods_receipt_id=gr.id,
                po_item_id=item_data.get("po_item_id"),
                material_id=item_data.get("material_id"),
                description=item_data["description"],
                ordered_quantity=item_data["ordered_quantity"],
                received_quantity=rec_qty,
                unit=item_data["unit"]
            )
            db.add(gri)

            if rec_qty > 0:
                any_received = True

            # Update PO item received_quantity
            if item_data.get("po_item_id"):
                poi = db.query(PurchaseOrderItem).filter(PurchaseOrderItem.id == item_data["po_item_id"]).first()
                if poi:
                    poi.received_quantity = (poi.received_quantity or 0) + rec_qty
                    if poi.received_quantity < poi.quantity:
                        all_fully_received = False

            # Module 5 Integration: Update inventory when material is received
            if item_data.get("material_id") and rec_qty > 0:
                self._update_inventory_on_receipt(db, item_data["material_id"], rec_qty, user_id, gr_id, data["project_id"])

        # Update PO status
        if any_received:
            # Check all items received
            po_items = db.query(PurchaseOrderItem).filter(PurchaseOrderItem.purchase_order_id == po.id).all()
            fully_received = all(
                (i.received_quantity or 0) >= i.quantity for i in po_items
            ) if po_items else False
            po.status = "Received" if fully_received else "Partially Received"
            if fully_received:
                po.actual_delivery_date = received_date
                # Mark linked procurement request as Completed
                if po.procurement_request_id:
                    req = db.query(ProcurementRequest).filter(ProcurementRequest.id == po.procurement_request_id).first()
                    if req:
                        req.status = "Completed"

        db.commit()
        db.refresh(gr)
        return gr

    def _update_inventory_on_receipt(self, db: Session, material_id: str, received_qty: float,
                                      user_id: str, reference_id: str, project_id: str):
        """Reuse Module 5 inventory and StockMovement logic."""
        import uuid
        inv = db.query(Inventory).filter(Inventory.material_id == material_id).first()
        if not inv:
            # Create inventory record if not exists
            inv = Inventory(
                id=f"INV-{str(uuid.uuid4())[:8].upper()}",
                material_id=material_id,
                total_stock=0.0,
                available_stock=0.0,
                allocated_stock=0.0,
                consumed_stock=0.0
            )
            db.add(inv)
            db.flush()

        prev_qty = inv.available_stock
        inv.total_stock += received_qty
        inv.available_stock += received_qty

        # Also update material in_stock for backward compatibility
        mat = db.query(Material).filter(Material.id == material_id).first()
        if mat:
            mat.in_stock = inv.available_stock

        # Create stock movement (reusing Module 5 pattern)
        sm_id = f"SM-{str(uuid.uuid4())[:8].upper()}"
        sm = StockMovement(
            id=sm_id,
            material_id=material_id,
            project_id=project_id,
            movement_type="Received",
            quantity=received_qty,
            date=__import__("datetime").datetime.utcnow(),
            previous_quantity=prev_qty,
            new_quantity=inv.available_stock,
            performed_by_id=user_id,
            reference_id=reference_id,
            remarks=f"Received via Procurement - Goods Receipt {reference_id}"
        )
        db.add(sm)

    def get_receipts(self, db: Session, po_id: str):
        return db.query(GoodsReceipt).filter(GoodsReceipt.purchase_order_id == po_id).all()

    # ---- Invoice Management ----
    def get_invoices(self, db: Session, project_id: str = None, vendor_id: str = None,
                     payment_status: str = None, invoice_status: str = None,
                     skip: int = 0, limit: int = 50):
        import datetime as dt
        q = db.query(ProcurementInvoice)
        if project_id:
            q = q.filter(ProcurementInvoice.project_id == project_id)
        if vendor_id:
            q = q.filter(ProcurementInvoice.vendor_id == vendor_id)
        if payment_status:
            q = q.filter(ProcurementInvoice.payment_status == payment_status)
        if invoice_status:
            q = q.filter(ProcurementInvoice.invoice_status == invoice_status)
        total = q.count()
        invoices = q.order_by(ProcurementInvoice.invoice_date.desc()).offset(skip).limit(limit).all()
        # Auto-mark overdue
        now = dt.datetime.utcnow()
        for inv in invoices:
            if inv.due_date and inv.due_date < now and inv.payment_status not in ("Paid",):
                inv.payment_status = "Overdue"
        db.commit()
        return invoices, total

    def get_invoice_by_id(self, db: Session, inv_id: str) -> ProcurementInvoice:
        inv = db.query(ProcurementInvoice).filter(ProcurementInvoice.id == inv_id).first()
        if not inv:
            raise HTTPException(status_code=404, detail=f"Invoice {inv_id} not found")
        return inv

    def create_invoice(self, db: Session, user_id: str, data: dict) -> ProcurementInvoice:
        import uuid
        import datetime as dt
        # Validate project
        project = db.query(Project).filter(Project.id == data["project_id"]).first()
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        # Validate PO if provided
        if data.get("purchase_order_id"):
            po = db.query(PurchaseOrder).filter(PurchaseOrder.id == data["purchase_order_id"]).first()
            if not po:
                raise HTTPException(status_code=404, detail="Purchase Order not found")
            # Verify vendor matches PO vendor
            if data.get("vendor_id") and po.vendor_id and data["vendor_id"] != po.vendor_id:
                raise HTTPException(status_code=400, detail="Vendor does not match PO vendor")
        # Check duplicate invoice number for same vendor
        if data.get("vendor_id"):
            dup = db.query(ProcurementInvoice).filter(
                ProcurementInvoice.invoice_number == data["invoice_number"],
                ProcurementInvoice.vendor_id == data["vendor_id"]
            ).first()
            if dup:
                raise HTTPException(status_code=400, detail="Duplicate invoice number for this vendor")
        # Validate amount
        if data.get("invoice_amount", 0) <= 0:
            raise HTTPException(status_code=400, detail="Invoice amount must be positive")
        # Validate dates
        inv_date = dt.datetime.strptime(data["invoice_date"], "%Y-%m-%d")
        due_date = None
        if data.get("due_date"):
            due_date = dt.datetime.strptime(data["due_date"], "%Y-%m-%d")
            if due_date < inv_date:
                raise HTTPException(status_code=400, detail="Due date must be after invoice date")

        inv_id = f"INV-{str(uuid.uuid4())[:8].upper()}"
        inv = ProcurementInvoice(
            id=inv_id,
            invoice_number=data["invoice_number"],
            vendor_id=data.get("vendor_id"),
            purchase_order_id=data.get("purchase_order_id"),
            project_id=data["project_id"],
            created_by_id=user_id,
            invoice_date=inv_date,
            due_date=due_date,
            invoice_amount=data["invoice_amount"],
            remarks=data.get("remarks"),
            payment_status="Pending",
            invoice_status="Received"
        )
        db.add(inv)
        db.commit()
        db.refresh(inv)
        return inv

    def update_invoice(self, db: Session, inv_id: str, data: dict) -> ProcurementInvoice:
        import datetime as dt
        inv = self.get_invoice_by_id(db, inv_id)
        # Validate invoice status transitions
        allowed_inv_transitions = {
            "Received": ["Verified", "Disputed", "Cancelled"],
            "Verified": ["Disputed", "Cancelled"],
            "Disputed": ["Received", "Cancelled"],
            "Cancelled": []
        }
        if data.get("invoice_status") and data["invoice_status"] != inv.invoice_status:
            if data["invoice_status"] not in allowed_inv_transitions.get(inv.invoice_status, []):
                raise HTTPException(
                    status_code=400,
                    detail=f"Invalid invoice status transition from {inv.invoice_status} to {data['invoice_status']}"
                )
        # Update paid amount and payment status
        if data.get("paid_amount") is not None:
            new_paid = data["paid_amount"]
            if new_paid < 0:
                raise HTTPException(status_code=400, detail="Paid amount cannot be negative")
            inv.paid_amount = new_paid
            if new_paid >= inv.invoice_amount:
                inv.payment_status = "Paid"
            elif new_paid > 0:
                inv.payment_status = "Partially Paid"
            else:
                inv.payment_status = "Pending"
        if data.get("invoice_status"):
            inv.invoice_status = data["invoice_status"]
        if data.get("payment_status"):
            inv.payment_status = data["payment_status"]
        if data.get("remarks"):
            inv.remarks = data["remarks"]
        if data.get("due_date"):
            try:
                inv.due_date = dt.datetime.strptime(data["due_date"], "%Y-%m-%d")
            except Exception:
                pass
        db.commit()
        db.refresh(inv)
        return inv

    # ---- Analytics ----
    def get_summary(self, db: Session) -> dict:
        import datetime as dt
        now = dt.datetime.utcnow()

        total_vendors = db.query(Vendor).count()
        active_vendors = db.query(Vendor).filter(Vendor.status == "Active").count()

        total_reqs = db.query(ProcurementRequest).count()
        pending_reqs = db.query(ProcurementRequest).filter(ProcurementRequest.status == "Pending").count()
        approved_reqs = db.query(ProcurementRequest).filter(ProcurementRequest.status == "Approved").count()
        rejected_reqs = db.query(ProcurementRequest).filter(ProcurementRequest.status == "Rejected").count()

        total_pos = db.query(PurchaseOrder).count()
        active_pos = db.query(PurchaseOrder).filter(
            PurchaseOrder.status.in_(["Issued", "Confirmed", "Processing", "Partially Received"])
        ).count()
        pending_delivery = db.query(PurchaseOrder).filter(
            PurchaseOrder.status.in_(["Issued", "Confirmed", "Processing"])
        ).count()
        partially_received = db.query(PurchaseOrder).filter(PurchaseOrder.status == "Partially Received").count()
        completed_pos = db.query(PurchaseOrder).filter(PurchaseOrder.status == "Received").count()

        total_invoices = db.query(ProcurementInvoice).count()
        pending_invoices = db.query(ProcurementInvoice).filter(
            ProcurementInvoice.payment_status.in_(["Pending", "Partially Paid"])
        ).count()
        overdue_invoices = db.query(ProcurementInvoice).filter(
            ProcurementInvoice.due_date < now,
            ProcurementInvoice.payment_status.notin_(["Paid"])
        ).count()

        total_value_row = db.query(func.sum(PurchaseOrder.total_amount)).scalar() or 0.0

        # Recent data
        recent_requests = db.query(ProcurementRequest).order_by(
            ProcurementRequest.request_date.desc()
        ).limit(5).all()
        recent_pos = db.query(PurchaseOrder).order_by(
            PurchaseOrder.order_date.desc()
        ).limit(5).all()
        upcoming = db.query(PurchaseOrder).filter(
            PurchaseOrder.expected_delivery_date > now,
            PurchaseOrder.status.notin_(["Received", "Cancelled"])
        ).order_by(PurchaseOrder.expected_delivery_date.asc()).limit(5).all()

        return {
            "total_vendors": total_vendors,
            "active_vendors": active_vendors,
            "total_procurement_requests": total_reqs,
            "pending_requests": pending_reqs,
            "approved_requests": approved_reqs,
            "rejected_requests": rejected_reqs,
            "active_purchase_orders": active_pos,
            "orders_pending_delivery": pending_delivery,
            "partially_received_orders": partially_received,
            "completed_orders": completed_pos,
            "total_invoices": total_invoices,
            "pending_invoices": pending_invoices,
            "overdue_invoices": overdue_invoices,
            "total_procurement_value": float(total_value_row),
            "recent_requests": [self._format_request(r) for r in recent_requests],
            "recent_purchase_orders": [self._format_po(p) for p in recent_pos],
            "upcoming_deliveries": [self._format_po(p) for p in upcoming]
        }

    def get_project_summary(self, db: Session, project_id: str) -> dict:
        reqs = db.query(ProcurementRequest).filter(ProcurementRequest.project_id == project_id).count()
        pos = db.query(PurchaseOrder).filter(PurchaseOrder.project_id == project_id).count()
        total_val = db.query(func.sum(PurchaseOrder.total_amount)).filter(
            PurchaseOrder.project_id == project_id
        ).scalar() or 0.0
        pending_inv = db.query(ProcurementInvoice).filter(
            ProcurementInvoice.project_id == project_id,
            ProcurementInvoice.payment_status.in_(["Pending", "Partially Paid"])
        ).count()
        return {
            "project_id": project_id,
            "total_requests": reqs,
            "total_purchase_orders": pos,
            "total_procurement_value": float(total_val),
            "pending_invoices": pending_inv
        }

    def get_vendor_summary(self, db: Session, vendor_id: str) -> dict:
        vendor = self.get_vendor_by_id(db, vendor_id)
        total_orders = db.query(PurchaseOrder).filter(PurchaseOrder.vendor_id == vendor_id).count()
        total_value = db.query(func.sum(PurchaseOrder.total_amount)).filter(
            PurchaseOrder.vendor_id == vendor_id
        ).scalar() or 0.0
        pending_orders = db.query(PurchaseOrder).filter(
            PurchaseOrder.vendor_id == vendor_id,
            PurchaseOrder.status.notin_(["Received", "Cancelled"])
        ).count()
        return {
            "vendor_id": vendor_id,
            "vendor_name": vendor.name,
            "total_orders": total_orders,
            "total_purchase_value": float(total_value),
            "pending_orders": pending_orders
        }

    def _format_request(self, r: ProcurementRequest) -> dict:
        return {
            "id": r.id,
            "item_name": r.item_name,
            "quantity": r.quantity,
            "unit": r.unit,
            "priority": r.priority,
            "status": r.status,
            "project_name": r.project.name if r.project else "",
            "requested_by_name": r.requested_by.name if r.requested_by else "",
            "request_date": r.request_date.isoformat() if r.request_date else ""
        }

    def _format_po(self, p: PurchaseOrder) -> dict:
        return {
            "id": p.id,
            "vendor_name": p.vendor.name if p.vendor else "TBD",
            "project_name": p.project.name if p.project else "",
            "total_amount": p.total_amount,
            "status": p.status,
            "order_date": p.order_date.isoformat() if p.order_date else "",
            "expected_delivery_date": p.expected_delivery_date.isoformat() if p.expected_delivery_date else None
        }
