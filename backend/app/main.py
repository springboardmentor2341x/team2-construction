from fastapi import FastAPI, Depends,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import date
from app import models

from app.database import Base, engine, get_db
from app import schemas, crud
from app.routers import user,equipment,equipment_allocation,equipment_maintenance,worker,inventory,material_usage
from app.routers import site_issues,progress_updates,attendence,progress_reports,dashboard,delay_records
from app.routers import site_activity_logs,progress_photos,weekly_progress_reports
# Create database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI application
app = FastAPI(
    title="Construction Project Management API",
    description="Backend API for Construction Project Management",
    version="1.0.0"
)

# ==========================
# CORS
# ==========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",
        "http://127.0.0.1:4200",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include User Router
app.include_router(user.router)
app.include_router(equipment.router)
app.include_router(equipment_allocation.router)
app.include_router(equipment_maintenance.router)
app.include_router(worker.router)
app.include_router(inventory.router)
app.include_router(material_usage.router)
app.include_router(site_issues.router)
app.include_router(progress_updates.router)
app.include_router(attendence.router)
app.include_router(progress_reports.router)
app.include_router(dashboard.router)
app.include_router(delay_records.router)
app.include_router(site_activity_logs.router)
app.include_router(progress_photos.router)
app.include_router(weekly_progress_reports.router)



# ==========================
# HOME
# ==========================

@app.get("/")
def home():
    return {
        "message": "Welcome to Construction Project Management API"
    }


@app.get("/health")
def health():
    return {
        "status": "Running"
    }

# ==========================
# PROJECTS
# ==========================

@app.post("/projects", response_model=schemas.Project)
def create_project(
    project: schemas.ProjectCreate,
    db: Session = Depends(get_db)
):
    return crud.create_project(db=db, project=project)


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
# USERS
# ==========================

@app.post("/users", response_model=schemas.UserResponse)
def create_user(
    user: schemas.UserCreate,
    db: Session = Depends(get_db)
):
    return crud.create_user(db, user)


@app.get("/users", response_model=list[schemas.UserResponse])
def get_users(db: Session = Depends(get_db)):
    return crud.get_users(db)

# ==========================
# MILESTONES
# ==========================

@app.post("/milestones", response_model=schemas.Milestone)
def create_milestone(
    milestone: schemas.MilestoneCreate,
    db: Session = Depends(get_db)
):
    return crud.create_milestone(db=db, milestone=milestone)
# ==========================
# GET ALL MILESTONES
# ==========================

@app.get("/milestones")
def get_milestones(
    db: Session = Depends(get_db)
):
    return crud.get_milestones(db=db)


# ==========================
# GET MILESTONES BY PROJECT
# ==========================

@app.get("/milestones/project/{project_id}")
def get_project_milestones(
    project_id: int,
    db: Session = Depends(get_db)
):
    return crud.get_milestones_by_project(
        db=db,
        project_id=project_id
    )


# ==========================
# GET MILESTONE BY ID
# ==========================

@app.get("/milestones/{milestone_id}")
def get_milestone(
    milestone_id: int,
    db: Session = Depends(get_db)
):
    milestone = crud.get_milestone_by_id(
        db=db,
        milestone_id=milestone_id
    )

    if milestone is None:
        raise HTTPException(
            status_code=404,
            detail="Milestone not found"
        )

    return milestone


# ==========================
# UPDATE MILESTONE PROGRESS
# ==========================

@app.put("/milestones/{milestone_id}/progress")
def update_milestone_progress(
    milestone_id: int,
    progress_percentage: float,
    status: str,
    actual_completion_date: date | None = None,
    db: Session = Depends(get_db)
):
    milestone = crud.update_milestone_progress(
        db=db,
        milestone_id=milestone_id,
        progress_percentage=progress_percentage,
        status=status,
        actual_completion_date=actual_completion_date
    )

    if milestone is None:
        raise HTTPException(
            status_code=404,
            detail="Milestone not found"
        )

    return milestone
# ==========================
# PROJECT SCHEDULE
# ==========================

@app.post("/project-schedules", response_model=schemas.ProjectSchedule)
def create_project_schedule(
    schedule: schemas.ProjectScheduleCreate,
    db: Session = Depends(get_db)
):
    return crud.create_project_schedule(db, schedule)


@app.get("/project-schedules", response_model=list[schemas.ProjectSchedule])
def get_project_schedules(
    db: Session = Depends(get_db)
):
    return crud.get_project_schedules(db)
# ==========================
# SITE ENGINEER ASSIGNMENT
# ==========================

@app.post(
    "/site-engineers",
    response_model=schemas.SiteEngineerAssignment
)
def create_site_engineer_assignment(
    assignment: schemas.SiteEngineerAssignmentCreate,
    db: Session = Depends(get_db)
):
    return crud.create_site_engineer_assignment(db, assignment)


@app.get(
    "/site-engineers",
    response_model=list[schemas.SiteEngineerAssignment]
)
def get_site_engineer_assignments(
    db: Session = Depends(get_db)
):
    return crud.get_site_engineer_assignments(db)
# ==========================
# CONTRACTOR ASSIGNMENT
# ==========================

@app.post(
    "/contractors",
    response_model=schemas.ContractorAssignment
)
def create_contractor_assignment(
    assignment: schemas.ContractorAssignmentCreate,
    db: Session = Depends(get_db)
):
    return crud.create_contractor_assignment(db, assignment)


@app.get(
    "/contractors",
    response_model=list[schemas.ContractorAssignment]
)
def get_contractor_assignments(
    db: Session = Depends(get_db)
):
    return crud.get_contractor_assignments(db)
# ==========================
# PROJECT STATUS UPDATE
# ==========================

@app.put("/projects/{project_id}/status", response_model=schemas.Project)
def update_project_status(
    project_id: int,
    status: str,
    db: Session = Depends(get_db)
):
    project = crud.update_project_status(db, project_id, status)

    if project is None:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    return project
# ==========================
# ==========================
# PROJECT COMPLETION - MODULE 3
# ==========================

@app.get("/projects/{project_id}/completion")
def get_project_completion(
    project_id: int,
    db: Session = Depends(get_db)
):
    project = db.query(
        models.Project
    ).filter(
        models.Project.id == project_id
    ).first()

    if project is None:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    completion = crud.get_project_completion_percentage(
        db=db,
        project_id=project_id
    )

    return {
        "project_id": project_id,
        "completion_percentage": completion
    }