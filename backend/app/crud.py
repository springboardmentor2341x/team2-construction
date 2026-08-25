from sqlalchemy.orm import Session
from app import models, schemas
from app.auth import hash_password

# ==========================
# PROJECT CRUD
# ==========================

def create_project(db: Session, project: schemas.ProjectCreate):
    db_project = models.Project(**project.model_dump())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project


def get_projects(db: Session):
    return db.query(models.Project).all()


def update_project(db: Session, project_id: int, project: schemas.ProjectCreate):
    db_project = db.query(models.Project).filter(models.Project.id == project_id).first()

    if not db_project:
        return None

    for key, value in project.model_dump().items():
        setattr(db_project, key, value)

    db.commit()
    db.refresh(db_project)
    return db_project


def delete_project(db: Session, project_id: int):
    db_project = db.query(models.Project).filter(models.Project.id == project_id).first()

    if db_project:
        db.delete(db_project)
        db.commit()
# ==========================
# USER CRUD
# ==========================

def create_user(db: Session, user: schemas.UserCreate):
    user_data = user.model_dump()
    user_data["password"] = hash_password(user_data["password"])
    db_user = models.User(**user_data)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session):
    return db.query(models.User).all()
# ==========================
# MILESTONE CRUD
# ==========================

def create_milestone(db: Session, milestone: schemas.MilestoneCreate):
    db_milestone = models.Milestone(**milestone.model_dump())
    db.add(db_milestone)
    db.commit()
    db.refresh(db_milestone)
    return db_milestone


def get_milestones(db: Session):
    return db.query(models.Milestone).all()
# ==========================
# PROJECT SCHEDULE CRUD
# ==========================

def create_project_schedule(
    db: Session,
    schedule: schemas.ProjectScheduleCreate
):
    db_schedule = models.ProjectSchedule(**schedule.model_dump())
    db.add(db_schedule)
    db.commit()
    db.refresh(db_schedule)
    return db_schedule


def get_milestones_by_project(
    db: Session,
    project_id: int
):
    return db.query(models.Milestone).filter(
        models.Milestone.project_id == project_id
    ).all()


def get_milestone_by_id(
    db: Session,
    milestone_id: int
):
    return db.query(models.Milestone).filter(
        models.Milestone.id == milestone_id
    ).first()


def update_milestone_progress(
    db: Session,
    milestone_id: int,
    progress_percentage: float,
    status: str,
    actual_completion_date=None
):
    milestone = get_milestone_by_id(
        db,
        milestone_id
    )

    if milestone is None:
        return None

    milestone.progress_percentage = progress_percentage
    milestone.status = status

    if actual_completion_date is not None:
        milestone.actual_completion_date = actual_completion_date

    db.commit()
    db.refresh(milestone)

    return milestone
# ==========================
# SITE ENGINEER ASSIGNMENT CRUD
# ==========================

def create_site_engineer_assignment(
    db: Session,
    assignment: schemas.SiteEngineerAssignmentCreate
):
    db_assignment = models.SiteEngineerAssignment(**assignment.model_dump())
    db.add(db_assignment)
    db.commit()
    db.refresh(db_assignment)
    return db_assignment


def get_site_engineer_assignments(db: Session):
    return db.query(models.SiteEngineerAssignment).all()
# ==========================
# CONTRACTOR ASSIGNMENT CRUD
# ==========================

def create_contractor_assignment(
    db: Session,
    assignment: schemas.ContractorAssignmentCreate
):
    db_assignment = models.ContractorAssignment(**assignment.model_dump())
    db.add(db_assignment)
    db.commit()
    db.refresh(db_assignment)
    return db_assignment


def get_contractor_assignments(db: Session):
    return db.query(models.ContractorAssignment).all()
# ==========================
# PROJECT STATUS
# ==========================

def update_project_status(
    db: Session,
    project_id: int,
    status: str
):
    project = db.query(models.Project).filter(
        models.Project.id == project_id
    ).first()

    if not project:
        return None

    project.status = status

    db.commit()
    db.refresh(project)

    return project
# ==========================
# RESOURCE CRUD
# ==========================

def create_resource(db: Session, resource: schemas.ResourceCreate):
    db_resource = models.Resource(**resource.model_dump())
    db.add(db_resource)
    db.commit()
    db.refresh(db_resource)
    return db_resource


def get_resources(db: Session):
    return db.query(models.Resource).all()
def get_resource_by_id(db: Session, resource_id: int):
    return db.query(models.Resource).filter(
        models.Resource.id == resource_id
    ).first()


def update_resource(
    db: Session,
    resource_id: int,
    resource: schemas.ResourceCreate
):
    db_resource = get_resource_by_id(db, resource_id)

    if db_resource is None:
        return None

    for key, value in resource.model_dump().items():
        setattr(db_resource, key, value)

    db.commit()
    db.refresh(db_resource)

    return db_resource


def delete_resource(db: Session, resource_id: int):
    db_resource = get_resource_by_id(db, resource_id)

    if db_resource is None:
        return None

    db.delete(db_resource)
    db.commit()

    return db_resource
# ==========================
# INVENTORY CRUD
# ==========================

def create_inventory(db: Session, inventory: schemas.InventoryCreate):
    db_inventory = models.Inventory(**inventory.model_dump())
    db.add(db_inventory)
    db.commit()
    db.refresh(db_inventory)
    return db_inventory


def get_inventory(db: Session):
    return db.query(models.Inventory).all()
# ==========================
# WORKER CRUD
# ==========================

def create_worker(db: Session, worker: schemas.WorkerCreate):
    db_worker = models.Worker(**worker.model_dump())
    db.add(db_worker)
    db.commit()
    db.refresh(db_worker)
    return db_worker


def get_workers(db: Session):
    return db.query(models.Worker).all()
# ==========================
# ATTENDANCE CRUD
# ==========================

def create_attendance(db: Session, attendance: schemas.AttendanceCreate):
    db_attendance = models.Attendance(**attendance.model_dump())
    db.add(db_attendance)
    db.commit()
    db.refresh(db_attendance)
    return db_attendance


def get_attendance(db: Session):
    return db.query(models.Attendance).all()
# ==========================
# PROCUREMENT CRUD
# ==========================

def create_procurement(db: Session, procurement: schemas.ProcurementCreate):
    db_procurement = models.Procurement(**procurement.model_dump())
    db.add(db_procurement)
    db.commit()
    db.refresh(db_procurement)
    return db_procurement


def get_procurements(db: Session):
    return db.query(models.Procurement).all()
# ==========================
# NOTIFICATION CRUD
# ==========================

def create_notification(db: Session, notification: schemas.NotificationCreate):
    db_notification = models.Notification(**notification.model_dump())
    db.add(db_notification)
    db.commit()
    db.refresh(db_notification)
    return db_notification


def get_notifications(db: Session):
    return db.query(models.Notification).all()
# ==========================
# REPORT CRUD
# ==========================

def create_report(db: Session, report: schemas.ReportCreate):
    db_report = models.Report(**report.model_dump())
    db.add(db_report)
    db.commit()
    db.refresh(db_report)
    return db_report


def get_reports(db: Session):
    return db.query(models.Report).all()
# ==========================
# EQUIPMENT CRUD
# ==========================

def create_equipment(db: Session, equipment: schemas.EquipmentCreate):
    db_equipment = models.Equipment(**equipment.model_dump())
    db.add(db_equipment)
    db.commit()
    db.refresh(db_equipment)
    return db_equipment


def get_equipment(db: Session):
    return db.query(models.Equipment).all()


def get_equipment_by_id(db: Session, equipment_id: int):
    return db.query(models.Equipment).filter(
        models.Equipment.id == equipment_id
    ).first()


def update_equipment(
    db: Session,
    equipment_id: int,
    equipment: schemas.EquipmentCreate
):
    db_equipment = get_equipment_by_id(db, equipment_id)

    if db_equipment is None:
        return None

    for key, value in equipment.model_dump().items():
        setattr(db_equipment, key, value)

    db.commit()
    db.refresh(db_equipment)

    return db_equipment


def delete_equipment(db: Session, equipment_id: int):
    db_equipment = get_equipment_by_id(db, equipment_id)

    if db_equipment is None:
        return None

    db.delete(db_equipment)
    db.commit()

    return db_equipment

# ==========================
# EQUIPMENT AVAILABILITY CRUD - MODULE 4
# ==========================

def get_equipment_availability(db: Session):
    equipment_list = db.query(models.Equipment).all()

    availability = []

    for equipment in equipment_list:
        status = equipment.status
        project_id = None
        available_from = None

        # Check active allocation
        allocation = db.query(models.EquipmentAllocation).filter(
            models.EquipmentAllocation.equipment_id == equipment.id,
            models.EquipmentAllocation.status == "Active"
        ).first()

        if allocation:
            status = "Allocated"
            project_id = allocation.project_id
            available_from = allocation.end_date

        # Check active maintenance
        maintenance = db.query(
            models.EquipmentMaintenance
        ).filter(
            models.EquipmentMaintenance.equipment_id == equipment.id,
            models.EquipmentMaintenance.status.in_(
                ["Scheduled", "In Progress"]
            )
        ).order_by(
            models.EquipmentMaintenance.next_service_date.asc()
        ).first()

        if maintenance and maintenance.status == "In Progress":
            status = "Under Maintenance"
            project_id = None
            available_from = maintenance.next_service_date

        availability.append({
            "equipment_id": equipment.id,
            "equipment_name": equipment.name,
            "category": equipment.category,
            "status": status,
            "project_id": project_id,
            "available_from": available_from
        })

    return availability
# ==========================
# EQUIPMENT ALLOCATION CRUD
# ==========================

def create_equipment_allocation(
    db: Session,
    allocation: schemas.EquipmentAllocationCreate
):
      # Check for overlapping active allocation
    overlapping_allocation = db.query(
        models.EquipmentAllocation
    ).filter(
        models.EquipmentAllocation.equipment_id == allocation.equipment_id,
        models.EquipmentAllocation.status == "Active",
        models.EquipmentAllocation.start_date <= (
            allocation.end_date
            if allocation.end_date
            else allocation.start_date
        ),
        (
            models.EquipmentAllocation.end_date.is_(None)
            | (
                models.EquipmentAllocation.end_date
                >= allocation.start_date
            )
        )
    ).first()

    if overlapping_allocation:
        raise ValueError(
            "Equipment is already allocated during the requested period"
        )

    db_allocation = models.EquipmentAllocation(
        **allocation.model_dump()
    )

    db.add(db_allocation)
    db.commit()
    db.refresh(db_allocation)

    return db_allocation


def get_equipment_allocations(db: Session):
    return db.query(models.EquipmentAllocation).all()


def get_equipment_allocation_by_id(
    db: Session,
    allocation_id: int
):
    return db.query(models.EquipmentAllocation).filter(
        models.EquipmentAllocation.id == allocation_id
    ).first()


def update_equipment_allocation(
    db: Session,
    allocation_id: int,
    allocation: schemas.EquipmentAllocationCreate
):
    db_allocation = get_equipment_allocation_by_id(
        db,
        allocation_id
    )

    if db_allocation is None:
        return None

    for key, value in allocation.model_dump().items():
        setattr(db_allocation, key, value)

    db.commit()
    db.refresh(db_allocation)

    return db_allocation


def delete_equipment_allocation(
    db: Session,
    allocation_id: int
):
    db_allocation = get_equipment_allocation_by_id(
        db,
        allocation_id
    )

    if db_allocation is None:
        return None

    db.delete(db_allocation)
    db.commit()

    return db_allocation
# ==========================
# EQUIPMENT MAINTENANCE CRUD
# ==========================

def create_equipment_maintenance(
    db: Session,
    maintenance: schemas.EquipmentMaintenanceCreate
):
    db_maintenance = models.EquipmentMaintenance(
        **maintenance.model_dump()
    )

    db.add(db_maintenance)
    db.commit()
    db.refresh(db_maintenance)

    return db_maintenance


def get_equipment_maintenance(db: Session):
    return db.query(models.EquipmentMaintenance).all()


def get_equipment_maintenance_by_id(
    db: Session,
    maintenance_id: int
):
    return db.query(models.EquipmentMaintenance).filter(
        models.EquipmentMaintenance.id == maintenance_id
    ).first()


def update_equipment_maintenance(
    db: Session,
    maintenance_id: int,
    maintenance: schemas.EquipmentMaintenanceCreate
):
    db_maintenance = get_equipment_maintenance_by_id(
        db,
        maintenance_id
    )

    if db_maintenance is None:
        return None

    for key, value in maintenance.model_dump().items():
        setattr(db_maintenance, key, value)

    db.commit()
    db.refresh(db_maintenance)

    return db_maintenance


def delete_equipment_maintenance(
    db: Session,
    maintenance_id: int
):
    db_maintenance = get_equipment_maintenance_by_id(
        db,
        maintenance_id
    )

    if db_maintenance is None:
        return None

    db.delete(db_maintenance)
    db.commit()

    return db_maintenance
# ==========================
# MAINTENANCE DUE STATUS - MODULE 4
# ==========================

from datetime import date, timedelta


def get_maintenance_due_status(db: Session):
    maintenance_records = db.query(
        models.EquipmentMaintenance
    ).all()

    today = date.today()
    due_soon_date = today + timedelta(days=7)

    results = []

    for maintenance in maintenance_records:

        equipment = db.query(models.Equipment).filter(
            models.Equipment.id == maintenance.equipment_id
        ).first()

        equipment_name = (
            equipment.name
            if equipment
            else "Unknown Equipment"
        )

        if maintenance.next_service_date is None:
            maintenance_status = "No Service Date"

        elif maintenance.next_service_date < today:
            maintenance_status = "Overdue"

        elif maintenance.next_service_date <= due_soon_date:
            maintenance_status = "Due Soon"

        else:
            maintenance_status = "Scheduled"

        results.append({
            "maintenance_id": maintenance.id,
            "equipment_id": maintenance.equipment_id,
            "equipment_name": equipment_name,
            "next_service_date": maintenance.next_service_date,
            "status": maintenance_status,
            "engineer": maintenance.engineer
        })

    return results
# ==========================
# EQUIPMENT UTILIZATION CRUD - MODULE 4
# ==========================

def create_equipment_utilization(
    db: Session,
    utilization: schemas.EquipmentUtilizationCreate
):
    db_utilization = models.EquipmentUtilization(
        **utilization.model_dump()
    )

    db.add(db_utilization)
    db.commit()
    db.refresh(db_utilization)

    return db_utilization


def get_equipment_utilizations(db: Session):
    return db.query(models.EquipmentUtilization).all()


def get_equipment_utilization_by_id(
    db: Session,
    utilization_id: int
):
    return db.query(models.EquipmentUtilization).filter(
        models.EquipmentUtilization.id == utilization_id
    ).first()


def update_equipment_utilization(
    db: Session,
    utilization_id: int,
    utilization: schemas.EquipmentUtilizationCreate
):
    db_utilization = get_equipment_utilization_by_id(
        db,
        utilization_id
    )

    if db_utilization is None:
        return None

    for key, value in utilization.model_dump().items():
        setattr(db_utilization, key, value)

    db.commit()
    db.refresh(db_utilization)

    return db_utilization


def delete_equipment_utilization(
    db: Session,
    utilization_id: int
):
    db_utilization = get_equipment_utilization_by_id(
        db,
        utilization_id
    )

    if db_utilization is None:
        return None

    db.delete(db_utilization)
    db.commit()

    return db_utilization
# ==========================
# ==========================
# PROGRESS UPDATES - MODULE 3
# ==========================

def create_progress_update(
    db: Session,
    progress_update: schemas.ProgressUpdateCreate
):
    db_progress = models.ProgressUpdate(
        **progress_update.model_dump()
    )

    db.add(db_progress)
    db.commit()
    db.refresh(db_progress)

    return db_progress


def get_progress_updates(
    db: Session,
    project_id=None
):
    query = db.query(models.ProgressUpdate)

    if project_id is not None:
        query = query.filter(
            models.ProgressUpdate.project_id == project_id
        )

    return query.all()


def get_progress_update(
    db: Session,
    progress_update_id
):
    return db.query(models.ProgressUpdate).filter(
        models.ProgressUpdate.id == progress_update_id
    ).first()


def update_progress_update(
    db: Session,
    progress_update_id: int,
    progress_update: schemas.ProgressUpdateCreate
):
    db_progress = get_progress_update(
        db,
        progress_update_id
    )

    if db_progress is None:
        return None

    for key, value in progress_update.model_dump().items():
        setattr(db_progress, key, value)

    db.commit()
    db.refresh(db_progress)

    return db_progress


def delete_progress_update(
    db: Session,
    progress_update_id: int
):
    db_progress = get_progress_update(
        db,
        progress_update_id
    )

    if db_progress is None:
        return None

    db.delete(db_progress)
    db.commit()

    return db_progress
# ==========================
# ATTENDANCE - MODULE 3
# ==========================

def create_attendance(
    db: Session,
    attendance: schemas.AttendanceCreate
):
    db_attendance = models.Attendance(
        **attendance.model_dump()
    )

    db.add(db_attendance)
    db.commit()
    db.refresh(db_attendance)

    return db_attendance


def get_attendance(db: Session, project_id=None):
    query = db.query(models.Attendance)

    if project_id is not None:
        query = query.filter(
            models.Attendance.project_id == project_id
        )

    return query.all()


def get_attendance_by_id(
    db: Session,
    attendance_id: int
):
    return db.query(models.Attendance).filter(
        models.Attendance.id == attendance_id
    ).first()


def update_attendance(
    db: Session,
    attendance_id: int,
    attendance: schemas.AttendanceCreate
):
    db_attendance = get_attendance_by_id(
        db,
        attendance_id
    )

    if db_attendance is None:
        return None

    for key, value in attendance.model_dump().items():
        setattr(db_attendance, key, value)

    db.commit()
    db.refresh(db_attendance)

    return db_attendance


def delete_attendance(
    db: Session,
    attendance_id: int
):
    db_attendance = get_attendance_by_id(
        db,
        attendance_id
    )

    if db_attendance is None:
        return None

    db.delete(db_attendance)
    db.commit()

    return db_attendance
# ==========================
# PROGRESS REPORTS - MODULE 3
# ==========================

def create_progress_report(
    db: Session,
    report: schemas.ProgressReportCreate
):
    db_report = models.ProgressReport(
        **report.model_dump()
    )

    db.add(db_report)
    db.commit()
    db.refresh(db_report)

    return db_report


def get_progress_reports(db: Session, project_id=None):
    query = db.query(models.ProgressReport)

    if project_id is not None:
        query = query.filter(
            models.ProgressReport.project_id == project_id
        )

    return query.all()


def get_progress_report_by_id(
    db: Session,
    report_id: int
):
    return db.query(models.ProgressReport).filter(
        models.ProgressReport.id == report_id
    ).first()


def update_progress_report(
    db: Session,
    report_id: int,
    report: schemas.ProgressReportCreate
):
    db_report = get_progress_report_by_id(
        db,
        report_id
    )

    if db_report is None:
        return None

    for key, value in report.model_dump().items():
        setattr(db_report, key, value)

    db.commit()
    db.refresh(db_report)

    return db_report


def delete_progress_report(
    db: Session,
    report_id: int
):
    db_report = get_progress_report_by_id(
        db,
        report_id
    )

    if db_report is None:
        return None

    db.delete(db_report)
    db.commit()

    return db_report
# ==========================
# MODULE 3 DASHBOARD CRUD
# ==========================

def get_project_dashboard(
    db: Session,
    project_id: int
):
    total_progress_updates = db.query(
        models.ProgressUpdate
    ).filter(
        models.ProgressUpdate.project_id == project_id
    ).count()

    progress_updates = db.query(
        models.ProgressUpdate
    ).filter(
        models.ProgressUpdate.project_id == project_id
    ).all()

    if progress_updates:
        average_progress = sum(
            update.progress_percentage
            for update in progress_updates
        ) / len(progress_updates)
    else:
        average_progress = 0

    total_progress_reports = db.query(
        models.ProgressReport
    ).filter(
        models.ProgressReport.project_id == project_id
    ).count()

    total_attendance_records = db.query(
        models.Attendance
    ).filter(
        models.Attendance.project_id == project_id
    ).count()

    open_site_issues = db.query(
        models.SiteIssue
    ).filter(
        models.SiteIssue.project_id == project_id,
        models.SiteIssue.status == "Open"
    ).count()

    return {
        "project_id": project_id,
        "total_progress_updates": total_progress_updates,
        "average_progress": round(average_progress, 2),
        "total_progress_reports": total_progress_reports,
        "total_attendance_records": total_attendance_records,
        "open_site_issues": open_site_issues
    }
# ==========================
# DELAY RECORDS - MODULE 3
# ==========================

def create_delay_record(
    db: Session,
    delay: schemas.DelayRecordCreate
):
    db_delay = models.DelayRecord(
        **delay.model_dump()
    )

    db.add(db_delay)
    db.commit()
    db.refresh(db_delay)

    return db_delay


def get_delay_records(
    db: Session,
    project_id=None
):
    query = db.query(models.DelayRecord)

    if project_id is not None:
        query = query.filter(
            models.DelayRecord.project_id == project_id
        )

    return query.all()


def get_delay_record_by_id(
    db: Session,
    delay_id: int
):
    return db.query(models.DelayRecord).filter(
        models.DelayRecord.id == delay_id
    ).first()


def update_delay_record(
    db: Session,
    delay_id: int,
    delay: schemas.DelayRecordCreate
):
    db_delay = get_delay_record_by_id(
        db,
        delay_id
    )

    if db_delay is None:
        return None

    for key, value in delay.model_dump().items():
        setattr(db_delay, key, value)

    db.commit()
    db.refresh(db_delay)

    return db_delay


def delete_delay_record(
    db: Session,
    delay_id: int
):
    db_delay = get_delay_record_by_id(
        db,
        delay_id
    )

    if db_delay is None:
        return None

    db.delete(db_delay)
    db.commit()

    return db_delay
# ==========================
# SITE ACTIVITY LOGS - MODULE 3
# ==========================

def create_site_activity_log(
    db: Session,
    activity: schemas.SiteActivityLogCreate
):
    db_activity = models.SiteActivityLog(
        **activity.model_dump()
    )

    db.add(db_activity)
    db.commit()
    db.refresh(db_activity)

    return db_activity


def get_site_activity_logs(
    db: Session,
    project_id=None
):
    query = db.query(models.SiteActivityLog)

    if project_id is not None:
        query = query.filter(
            models.SiteActivityLog.project_id == project_id
        )

    return query.all()


def get_site_activity_log_by_id(
    db: Session,
    activity_id: int
):
    return db.query(models.SiteActivityLog).filter(
        models.SiteActivityLog.id == activity_id
    ).first()


def update_site_activity_log(
    db: Session,
    activity_id: int,
    activity: schemas.SiteActivityLogCreate
):
    db_activity = get_site_activity_log_by_id(
        db,
        activity_id
    )

    if db_activity is None:
        return None

    for key, value in activity.model_dump().items():
        setattr(db_activity, key, value)

    db.commit()
    db.refresh(db_activity)

    return db_activity


def delete_site_activity_log(
    db: Session,
    activity_id: int
):
    db_activity = get_site_activity_log_by_id(
        db,
        activity_id
    )

    if db_activity is None:
        return None

    db.delete(db_activity)
    db.commit()

    return db_activity
# ==========================
# PROGRESS PHOTOGRAPHS - MODULE 3
# ==========================

def create_progress_photo(
    db: Session,
    photo: schemas.ProgressPhotoCreate
):
    db_photo = models.ProgressPhoto(
        **photo.model_dump()
    )

    db.add(db_photo)
    db.commit()
    db.refresh(db_photo)

    return db_photo


def get_progress_photos(
    db: Session,
    project_id=None,
    progress_update_id=None
):
    query = db.query(models.ProgressPhoto)

    if project_id is not None:
        query = query.filter(
            models.ProgressPhoto.project_id == project_id
        )

    if progress_update_id is not None:
        query = query.filter(
            models.ProgressPhoto.progress_update_id == progress_update_id
        )

    return query.all()


def get_progress_photo_by_id(
    db: Session,
    photo_id: int
):
    return db.query(models.ProgressPhoto).filter(
        models.ProgressPhoto.id == photo_id
    ).first()


def update_progress_photo(
    db: Session,
    photo_id: int,
    photo: schemas.ProgressPhotoCreate
):
    db_photo = get_progress_photo_by_id(
        db,
        photo_id
    )

    if db_photo is None:
        return None

    for key, value in photo.model_dump().items():
        setattr(db_photo, key, value)

    db.commit()
    db.refresh(db_photo)

    return db_photo


def delete_progress_photo(
    db: Session,
    photo_id: int
):
    db_photo = get_progress_photo_by_id(
        db,
        photo_id
    )

    if db_photo is None:
        return None

    db.delete(db_photo)
    db.commit()

    return db_photo
# ==========================
# WEEKLY PROGRESS REPORTS - MODULE 3
# ==========================

def create_weekly_progress_report(
    db: Session,
    report: schemas.WeeklyProgressReportCreate
):
    db_report = models.WeeklyProgressReport(
        **report.model_dump()
    )

    db.add(db_report)
    db.commit()
    db.refresh(db_report)

    return db_report


def get_weekly_progress_reports(
    db: Session,
    project_id=None
):
    query = db.query(models.WeeklyProgressReport)

    if project_id is not None:
        query = query.filter(
            models.WeeklyProgressReport.project_id == project_id
        )

    return query.all()


def get_weekly_progress_report_by_id(
    db: Session,
    report_id: int
):
    return db.query(models.WeeklyProgressReport).filter(
        models.WeeklyProgressReport.id == report_id
    ).first()


def update_weekly_progress_report(
    db: Session,
    report_id: int,
    report: schemas.WeeklyProgressReportCreate
):
    db_report = get_weekly_progress_report_by_id(
        db,
        report_id
    )

    if db_report is None:
        return None

    for key, value in report.model_dump().items():
        setattr(db_report, key, value)

    db.commit()
    db.refresh(db_report)

    return db_report


def delete_weekly_progress_report(
    db: Session,
    report_id: int
):
    db_report = get_weekly_progress_report_by_id(
        db,
        report_id
    )

    if db_report is None:
        return None

    db.delete(db_report)
    db.commit()

    return db_report
# ==========================
# PROJECT COMPLETION - MODULE 3
# ==========================

def get_project_completion_percentage(
    db: Session,
    project_id: int
):
    progress_updates = db.query(
        models.ProgressUpdate
    ).filter(
        models.ProgressUpdate.project_id == project_id
    ).all()

    if not progress_updates:
        return 0

    total_progress = sum(
        update.progress_percentage
        for update in progress_updates
    )

    average_progress = total_progress / len(progress_updates)

    return round(average_progress, 2)