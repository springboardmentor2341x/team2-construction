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
    ResourceCategory, Resource, ResourceAllocation, ResourceUtilization, MaintenanceRecord
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




