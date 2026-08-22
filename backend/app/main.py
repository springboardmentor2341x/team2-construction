from fastapi import FastAPI, Depends,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.database import Base, engine, get_db
from app import schemas, crud
from app.routers import user,equipment,equipment_allocation,equipment_maintenance,worker,inventory,material_usage
from app.routers import site_issues,progress_updates,attendence

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