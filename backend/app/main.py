from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from app.database import Base, engine, get_db
from app import models, schemas, crud

# Create database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI application
app = FastAPI(
    title="Construction Project Management API",
    description="Backend API for Construction Project Management",
    version="1.0.0"
)

# Home Endpoint
@app.get("/")
def home():
    return {
        "message": "Welcome to Construction Project Management API"
    }

# Health Check Endpoint
@app.get("/health")
def health():
    return {
        "status": "Running"
    }

# Create Project
@app.post("/projects", response_model=schemas.Project)
def create_project(
    project: schemas.ProjectCreate,
    db: Session = Depends(get_db)
):
    return crud.create_project(db=db, project=project)

# Get All Projects
@app.get("/projects", response_model=list[schemas.Project])
def get_projects(db: Session = Depends(get_db)):
    return crud.get_projects(db)
@app.put("/projects/{project_id}", response_model=schemas.Project)
def update_project(
    project_id: int,
    project: schemas.ProjectCreate,
    db: Session = Depends(get_db)
):
    return crud.update_project(db, project_id, project)
@app.delete("/projects/{project_id}")
def delete_project(
    project_id: int,
    db: Session = Depends(get_db)
):
    crud.delete_project(db, project_id)
    return {"message": "Project deleted successfully"}
# ==========================
# USER APIs
# ==========================

@app.post("/users", response_model=schemas.UserResponse)
def create_user(
    user: schemas.UserCreate,
    db: Session = Depends(get_db)
):
    return crud.create_user(db, user)


@app.get("/users", response_model=list[schemas.UserResponse])
def get_users(
    db: Session = Depends(get_db)
):
    return crud.get_users(db)
# ==========================
# MILESTONE ENDPOINTS
# ==========================

@app.post("/milestones", response_model=schemas.Milestone)
def create_milestone(
    milestone: schemas.MilestoneCreate,
    db: Session = Depends(get_db)
):
    return crud.create_milestone(db=db, milestone=milestone)


@app.get("/milestones", response_model=list[schemas.Milestone])
def get_milestones(db: Session = Depends(get_db)):
    return crud.get_milestones(db)
# ==========================
# RESOURCE ENDPOINTS
# ==========================

@app.post("/resources", response_model=schemas.Resource)
def create_resource(
    resource: schemas.ResourceCreate,
    db: Session = Depends(get_db)
):
    return crud.create_resource(db, resource)


@app.get("/resources", response_model=list[schemas.Resource])
def get_resources(
    db: Session = Depends(get_db)
):
    return crud.get_resources(db)
# ==========================
# INVENTORY ENDPOINTS
# ==========================

@app.post("/inventory", response_model=schemas.Inventory)
def create_inventory(
    inventory: schemas.InventoryCreate,
    db: Session = Depends(get_db)
):
    return crud.create_inventory(db, inventory)


@app.get("/inventory", response_model=list[schemas.Inventory])
def get_inventory(
    db: Session = Depends(get_db)
):
    return crud.get_inventory(db)
# ==========================
# WORKER ENDPOINTS
# ==========================

@app.post("/workers", response_model=schemas.Worker)
def create_worker(
    worker: schemas.WorkerCreate,
    db: Session = Depends(get_db)
):
    return crud.create_worker(db, worker)


@app.get("/workers", response_model=list[schemas.Worker])
def get_workers(
    db: Session = Depends(get_db)
):
    return crud.get_workers(db)
# ==========================
# ATTENDANCE ENDPOINTS
# ==========================

@app.post("/attendance", response_model=schemas.Attendance)
def create_attendance(
    attendance: schemas.AttendanceCreate,
    db: Session = Depends(get_db)
):
    return crud.create_attendance(db, attendance)


@app.get("/attendance", response_model=list[schemas.Attendance])
def get_attendance(
    db: Session = Depends(get_db)
):
    return crud.get_attendance(db)
# ==========================
# PROCUREMENT ENDPOINTS
# ==========================

@app.post("/procurements", response_model=schemas.Procurement)
def create_procurement(
    procurement: schemas.ProcurementCreate,
    db: Session = Depends(get_db)
):
    return crud.create_procurement(db, procurement)


@app.get("/procurements", response_model=list[schemas.Procurement])
def get_procurements(
    db: Session = Depends(get_db)
):
    return crud.get_procurements(db)
# ==========================
# NOTIFICATION ENDPOINTS
# ==========================

@app.post("/notifications", response_model=schemas.Notification)
def create_notification(
    notification: schemas.NotificationCreate,
    db: Session = Depends(get_db)
):
    return crud.create_notification(db, notification)


@app.get("/notifications", response_model=list[schemas.Notification])
def get_notifications(
    db: Session = Depends(get_db)
):
    return crud.get_notifications(db)
# ==========================
# REPORT ENDPOINTS
# ==========================

@app.post("/reports", response_model=schemas.Report)
def create_report(
    report: schemas.ReportCreate,
    db: Session = Depends(get_db)
):
    return crud.create_report(db, report)


@app.get("/reports", response_model=list[schemas.Report])
def get_reports(
    db: Session = Depends(get_db)
):
    return crud.get_reports(db)