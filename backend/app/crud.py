from sqlalchemy.orm import Session
from app import models, schemas


# ==========================
# USER CRUD
# ==========================

def create_user(db: Session, user: schemas.UserCreate):

    db_user = models.User(
        full_name=user.full_name,
        email=user.email,
        phone=user.phone,
        password=user.password,
        role=user.role
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


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