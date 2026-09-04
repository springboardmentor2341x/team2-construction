from sqlalchemy.orm import Session
from sqlalchemy import func
from datetime import date, datetime
from fastapi import HTTPException, status

from app import models, schemas
from app.services import notification_service


def get_pm_accessible_projects(db: Session, user: models.User) -> list[models.Project]:
    """
    Resolves projects accessible by the authenticated user.
    Admins get all projects.
    Project Managers get projects assigned to them by name/email or engineer/contractor assignment.
    """
    if user.role in ["Super Admin", "Admin"]:
        return db.query(models.Project).all()

    user_name = user.full_name or ""
    user_email = user.email or ""

    # 1. Projects where project_manager field matches user
    pm_projects = db.query(models.Project).filter(
        (models.Project.project_manager == user_name) |
        (models.Project.project_manager == user_email)
    ).all()

    project_ids = {p.id for p in pm_projects}

    # 2. Projects assigned via SiteEngineerAssignment
    eng_assigns = db.query(models.SiteEngineerAssignment.project_id).filter(
        (models.SiteEngineerAssignment.engineer_name == user_name) |
        (models.SiteEngineerAssignment.engineer_name == user_email)
    ).all()
    project_ids.update(a[0] for a in eng_assigns)

    # 3. Projects assigned via ContractorAssignment
    contractor_assigns = db.query(models.ContractorAssignment.project_id).filter(
        (models.ContractorAssignment.contractor_name == user_name) |
        (models.ContractorAssignment.contractor_name == user_email) |
        (models.ContractorAssignment.email == user_email)
    ).all()
    project_ids.update(a[0] for a in contractor_assigns)

    if not project_ids:
        return []

    return db.query(models.Project).filter(models.Project.id.in_(project_ids)).all()


def build_single_project_dashboard(db: Session, project: models.Project) -> schemas.PMProjectDashboard:
    """
    Aggregates dashboard metrics for a single project dynamically from existing module tables.
    """
    pid = project.id

    # 1. Progress & Milestones (Module 2 & 3)
    milestones = db.query(models.Milestone).filter(models.Milestone.project_id == pid).all()
    total_ms = len(milestones)
    completed_ms = sum(1 for m in milestones if m.status and m.status.lower() in ["completed", "done"])
    pending_ms = sum(1 for m in milestones if m.status and m.status.lower() in ["pending", "in progress"])
    today = date.today()
    overdue_ms = sum(
        1 for m in milestones 
        if m.planned_date and m.planned_date < today and (not m.status or m.status.lower() != "completed")
    )

    if total_ms > 0:
        completion_pct = round(sum(m.progress_percentage or 0.0 for m in milestones) / total_ms, 2)
    else:
        latest_pu = db.query(models.ProgressUpdate).filter(
            models.ProgressUpdate.project_id == pid
        ).order_by(models.ProgressUpdate.id.desc()).first()
        completion_pct = round(latest_pu.progress_percentage, 2) if latest_pu and latest_pu.progress_percentage else 0.0

    progress_summary = schemas.ProjectProgressSummary(
        completion_percentage=completion_pct,
        status=project.status or "Planning",
        total_milestones=total_ms,
        completed_milestones=completed_ms,
        pending_milestones=pending_ms,
        overdue_milestones=overdue_ms
    )

    # 2. Budget Utilization (Module 11)
    planned_budget = project.budget or 0.0
    if planned_budget <= 0.0:
        budget_rec = db.query(models.Budget).filter(models.Budget.project_id == pid).first()
        if budget_rec:
            planned_budget = budget_rec.total_budget or 0.0

    expenses = db.query(models.Expense).filter(
        models.Expense.project_id == pid,
        models.Expense.status != "Cancelled"
    ).all()
    utilized_amount = sum(e.amount or 0.0 for e in expenses)

    paid_invoices = db.query(models.Invoice).filter(
        models.Invoice.project_id == pid,
        models.Invoice.payment_status.in_(["Paid", "Approved"])
    ).all()
    utilized_amount += sum(inv.invoice_amount or 0.0 for inv in paid_invoices)

    remaining_budget = max(0.0, planned_budget - utilized_amount)
    utilization_pct = round((utilized_amount / planned_budget) * 100, 2) if planned_budget > 0 else 0.0

    budget_summary = schemas.BudgetUtilizationSummary(
        planned_budget=round(planned_budget, 2),
        utilized_amount=round(utilized_amount, 2),
        remaining_budget=round(remaining_budget, 2),
        utilization_percentage=utilization_pct
    )

    # 3. Workforce Status (Module 6)
    worker_assigns = db.query(models.WorkerAssignment).filter(models.WorkerAssignment.project_id == pid).all()
    assigned_worker_ids = {wa.worker_id for wa in worker_assigns}
    total_workers = len(assigned_worker_ids)

    attendance_records = db.query(models.Attendance).filter(
        models.Attendance.project_id == pid,
        models.Attendance.date == today
    ).all()

    present_cnt = sum(1 for a in attendance_records if a.status and a.status.lower() in ["present", "check in"])
    absent_cnt = sum(1 for a in attendance_records if a.status and a.status.lower() in ["absent"])
    leave_cnt = sum(1 for a in attendance_records if a.status and a.status.lower() in ["leave", "on leave", "half day"])

    workforce_summary = schemas.WorkforceSummary(
        total_workers=total_workers,
        present=present_cnt,
        absent=absent_cnt,
        on_leave=leave_cnt
    )

    # 4. Resource Utilization (Module 4)
    equip_allocs = db.query(models.EquipmentAllocation).filter(models.EquipmentAllocation.project_id == pid).all()
    allocated_equip_cnt = len(equip_allocs)

    equip_utils = db.query(models.EquipmentUtilization).filter(models.EquipmentUtilization.project_id == pid).all()
    op_hours = sum(u.operating_hours or 0.0 for u in equip_utils)
    idle_hrs = sum(u.idle_hours or 0.0 for u in equip_utils)
    total_hrs = op_hours + idle_hrs
    res_util_pct = round((op_hours / total_hrs) * 100, 2) if total_hrs > 0 else (100.0 if allocated_equip_cnt > 0 else 0.0)

    all_resources = db.query(models.Resource).all()
    total_res_cnt = len(all_resources) if all_resources else allocated_equip_cnt
    avail_res_cnt = sum(1 for r in all_resources if r.status and r.status.lower() in ["available", "in stock"])

    resource_summary = schemas.ResourceSummary(
        total_resources=total_res_cnt,
        allocated=allocated_equip_cnt,
        available=avail_res_cnt,
        operating_hours=round(op_hours, 2),
        idle_hours=round(idle_hrs, 2),
        utilization_percentage=res_util_pct
    )

    # 5. Material & Inventory Summary (Module 5)
    all_inventory = db.query(models.Inventory).all()
    total_mat_items = len(all_inventory)
    low_stock = sum(1 for i in all_inventory if i.quantity is not None and i.buffer_level is not None and i.quantity <= i.buffer_level and i.quantity > 0)
    out_of_stock = sum(1 for i in all_inventory if i.quantity is not None and i.quantity <= 0)

    material_summary = schemas.MaterialSummary(
        total_items=total_mat_items,
        low_stock_items=low_stock,
        out_of_stock_items=out_of_stock
    )

    # 6. Procurement Overview (Module 7)
    proc_requests = db.query(models.ProcurementRequest).filter(models.ProcurementRequest.project_id == pid).all()
    total_proc_reqs = len(proc_requests)
    pending_proc = sum(1 for pr in proc_requests if pr.request_status and pr.request_status.lower() == "pending")
    approved_proc = sum(1 for pr in proc_requests if pr.request_status and pr.request_status.lower() in ["approved", "completed"])
    rejected_proc = sum(1 for pr in proc_requests if pr.request_status and pr.request_status.lower() == "rejected")

    pos = db.query(models.PurchaseOrder).filter(models.PurchaseOrder.project_id == pid).all()
    invoices = db.query(models.Invoice).filter(models.Invoice.project_id == pid).all()

    procurement_summary = schemas.ProcurementSummary(
        total_requests=total_proc_reqs,
        pending_requests=pending_proc,
        approved_requests=approved_proc,
        rejected_requests=rejected_proc,
        purchase_orders_count=len(pos),
        invoices_count=len(invoices)
    )

    return schemas.PMProjectDashboard(
        project_id=project.id,
        project_code=project.project_code,
        name=project.name,
        status=project.status or "Planning",
        progress=progress_summary,
        budget=budget_summary,
        workforce=workforce_summary,
        resources=resource_summary,
        materials=material_summary,
        procurement=procurement_summary
    )


def get_project_manager_dashboard(
    db: Session,
    current_user: models.User,
    project_id: int | None = None
) -> schemas.PMDashboardResponse:
    """
    Retrieves Project Manager dashboard.
    If project_id is provided, verifies PM ownership and returns that specific project.
    Otherwise returns metrics across all PM's assigned projects.
    """
    accessible_projects = get_pm_accessible_projects(db, current_user)
    accessible_ids = {p.id for p in accessible_projects}

    if project_id is not None:
        if project_id not in accessible_ids:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Access denied: Project #{project_id} is not accessible by current user."
            )
        target_projects = [p for p in accessible_projects if p.id == project_id]
    else:
        target_projects = accessible_projects

    project_dashboards = [
        build_single_project_dashboard(db, p) for p in target_projects
    ]

    unread_count = notification_service.get_unread_count(db, current_user.id)
    recent_notes = notification_service.get_user_notifications(
        db=db,
        user_id=current_user.id,
        limit=5
    )

    recent_note_schemas = [
        schemas.NotificationResponse.model_validate(n) for n in recent_notes
    ]

    return schemas.PMDashboardResponse(
        role=current_user.role or "project_manager",
        total_assigned_projects=len(accessible_projects),
        projects=project_dashboards,
        unread_notifications_count=unread_count,
        recent_notifications=recent_note_schemas
    )


def get_admin_dashboard(db: Session, current_user: models.User) -> schemas.AdminDashboardResponse:
    """
    Retrieves system-wide Admin Dashboard analytics.
    Enforces Super Admin / Admin role check.
    """
    if current_user.role not in ["Super Admin", "Admin"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access denied: Admin permissions required."
        )

    # 1. User Management Analytics
    all_users = db.query(models.User).all()
    total_users = len(all_users)
    active_users = sum(1 for u in all_users if u.is_active)
    inactive_users = total_users - active_users

    users_by_role = {}
    for u in all_users:
        r = u.role or "Unknown"
        users_by_role[r] = users_by_role.get(r, 0) + 1

    user_analytics = schemas.AdminUserAnalytics(
        total_users=total_users,
        active_users=active_users,
        inactive_users=inactive_users,
        users_by_role=users_by_role
    )

    # 2. Project Monitoring Analytics
    all_projects = db.query(models.Project).all()
    total_projects = len(all_projects)
    active_projects = sum(1 for p in all_projects if p.status and p.status.lower() in ["active", "in progress"])
    completed_projects = sum(1 for p in all_projects if p.status and p.status.lower() == "completed")
    planned_projects = sum(1 for p in all_projects if p.status and p.status.lower() in ["planning", "planned"])

    today = date.today()
    overdue_projects = sum(
        1 for p in all_projects
        if p.expected_completion_date and p.expected_completion_date < today and (not p.status or p.status.lower() != "completed")
    )

    milestones = db.query(models.Milestone).all()
    if milestones:
        overall_progress = round(sum(m.progress_percentage or 0.0 for m in milestones) / len(milestones), 2)
    else:
        overall_progress = 0.0

    project_monitoring = schemas.AdminProjectMonitoring(
        total_projects=total_projects,
        active_projects=active_projects,
        completed_projects=completed_projects,
        planned_projects=planned_projects,
        overdue_projects=overdue_projects,
        overall_completion_percentage=overall_progress
    )

    # 3. System Analytics
    total_workers = db.query(models.Worker).count()
    total_resources = db.query(models.Resource).count()
    if total_resources == 0:
        total_resources = db.query(models.Equipment).count()

    total_inventory = db.query(models.Inventory).count()
    proc_requests = db.query(models.ProcurementRequest).all()
    total_proc_reqs = len(proc_requests)
    pending_proc = sum(1 for pr in proc_requests if pr.request_status and pr.request_status.lower() == "pending")

    total_budget_planned = sum(p.budget or 0.0 for p in all_projects)
    all_expenses = db.query(models.Expense).filter(models.Expense.status != "Cancelled").all()
    total_budget_spent = sum(e.amount or 0.0 for e in all_expenses)

    unread_notifications_cnt = db.query(models.Notification).filter(
        models.Notification.is_read == False
    ).count()

    system_analytics = schemas.AdminSystemAnalytics(
        total_workers=total_workers,
        total_resources=total_resources,
        total_inventory_items=total_inventory,
        total_procurement_requests=total_proc_reqs,
        pending_procurement_actions=pending_proc,
        total_budget_planned=round(total_budget_planned, 2),
        total_budget_spent=round(total_budget_spent, 2),
        unread_notifications_count=unread_notifications_cnt
    )

    # 4. Reports Summary
    reports = db.query(models.Report).order_by(models.Report.id.desc()).all()
    reports_total = len(reports)
    recent_reports = [
        schemas.AdminReportSummaryItem(
            id=r.id,
            report_type=r.report_type,
            description=r.description,
            created_at=r.created_at
        ) for r in reports[:5]
    ]

    # 5. Activity Monitoring
    progress_updates = db.query(models.ProgressUpdate).order_by(models.ProgressUpdate.id.desc()).limit(5).all()
    recent_activities = [
        schemas.AdminActivityItem(
            id=pu.id,
            project_id=pu.project_id,
            activity_name=pu.activity_name,
            status=pu.status,
            update_date=pu.update_date
        ) for pu in progress_updates
    ]

    return schemas.AdminDashboardResponse(
        role=current_user.role or "admin",
        users=user_analytics,
        projects=project_monitoring,
        system_analytics=system_analytics,
        reports_total=reports_total,
        recent_reports=recent_reports,
        recent_activities=recent_activities
    )
