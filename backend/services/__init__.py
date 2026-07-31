import datetime
from typing import Optional, List
from sqlalchemy.orm import Session
from sqlalchemy import func
from fastapi import HTTPException, status
from models import (
    User, Role, Project, WorkPackage, Contractor, Worker, SiteEngineer,
    Attendance, Material, MaterialRequest, DailyReport, MaterialUsed,
    SitePhoto, IssueReport, WorkerPayslip, Notification, FeedbackMessage, ProjectDocument
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
class AttendanceService:
    def get_attendance(self, db: Session, filter_data: dict):
        q = db.query(Attendance)
        if "workerId" in filter_data:
            q = q.filter(Attendance.worker_id == filter_data["workerId"])
        if "projectId" in filter_data:
            q = q.join(Worker).filter(Worker.assigned_project_id == filter_data["projectId"])
        if "date" in filter_data:
            target = filter_data["date"].date()
            q = q.filter(func.date(Attendance.date) == target)
        return q.all()

    def log_attendance(self, db: Session, data: dict):
        worker = db.query(Worker).filter(Worker.id == data["workerId"]).first()
        if not worker:
            raise HTTPException(status_code=404, detail="Worker profile not found")

        target = data["date"].date()
        existing = db.query(Attendance).filter(
            Attendance.worker_id == data["workerId"],
            func.date(Attendance.date) == target
        ).first()

        if existing:
            existing.status = data["status"]
            if data.get("checkIn"): existing.check_in = data["checkIn"]
            if data.get("checkOut"): existing.check_out = data["checkOut"]
            db.commit()
            db.refresh(existing)
            return existing
        else:
            import uuid
            att = Attendance(
                id=str(uuid.uuid4())[:8],
                worker_id=data["workerId"],
                date=data["date"],
                status=data["status"],
                check_in=data.get("checkIn"),
                check_out=data.get("checkOut")
            )
            db.add(att)
            db.commit()
            db.refresh(att)
            return att


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


