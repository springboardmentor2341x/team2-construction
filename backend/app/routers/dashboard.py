from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session

from app import schemas
from app.database import get_db
from app.auth import get_current_user
from app.services import dashboard_service

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard & Analytics"]
)


@router.get("/project-manager", response_model=schemas.PMDashboardResponse)
def get_project_manager_dashboard(
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Returns dashboard overview across projects assigned to the authenticated Project Manager.
    """
    return dashboard_service.get_project_manager_dashboard(
        db=db,
        current_user=current_user
    )


@router.get("/project-manager/{project_id}", response_model=schemas.PMDashboardResponse)
def get_project_manager_project_dashboard(
    project_id: int,
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Returns project-specific dashboard metrics for a single assigned project.
    Strictly verifies project ownership/access.
    """
    return dashboard_service.get_project_manager_dashboard(
        db=db,
        current_user=current_user,
        project_id=project_id
    )


@router.get("/admin", response_model=schemas.AdminDashboardResponse)
def get_admin_dashboard(
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Returns system-wide dashboard analytics for Admin / Super Admin users.
    """
    return dashboard_service.get_admin_dashboard(
        db=db,
        current_user=current_user
    )


@router.get("/summary")
def get_dashboard_summary(
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Role-aware generic entrypoint that routes callers to their authorized dashboard representation.
    """
    if current_user.role in ["Super Admin", "Admin"]:
        return dashboard_service.get_admin_dashboard(db=db, current_user=current_user)
    elif current_user.role == "Project Manager":
        return dashboard_service.get_project_manager_dashboard(db=db, current_user=current_user)
    else:
        # Return role-scoped summary for other roles
        projects = dashboard_service.get_pm_accessible_projects(db, current_user)
        return {
            "role": current_user.role,
            "user_id": current_user.id,
            "accessible_projects_count": len(projects),
            "project_ids": [p.id for p in projects]
        }