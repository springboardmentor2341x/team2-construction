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


def get_project_schedules(db: Session):
    return db.query(models.ProjectSchedule).all()
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
# EQUIPMENT ALLOCATION CRUD
# ==========================

def create_equipment_allocation(
    db: Session,
    allocation: schemas.EquipmentAllocationCreate
):
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
# PROGRESS UPDATES - MODULE 3
# ==========================

def create_progress_update(db, progress_update):
    db_progress = models.ProgressUpdate(
        project_id=progress_update.project_id,
        activity_name=progress_update.activity_name,
        description=progress_update.description,
        progress_percentage=progress_update.progress_percentage,
        update_date=progress_update.update_date,
        status=progress_update.status,
        updated_by=progress_update.updated_by
    )

    db.add(db_progress)
    db.commit()
    db.refresh(db_progress)

    return db_progress


def get_progress_updates(db, project_id=None):
    query = db.query(models.ProgressUpdate)

    if project_id is not None:
        query = query.filter(
            models.ProgressUpdate.project_id == project_id
        )

    return query.all()


def get_progress_update(db, progress_update_id):
    return db.query(models.ProgressUpdate).filter(
        models.ProgressUpdate.id == progress_update_id
    ).first()
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