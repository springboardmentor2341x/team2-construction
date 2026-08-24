from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import crud, schemas
from app.database import get_db


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


# ==========================
# PROJECT DASHBOARD
# ==========================

@router.get(
    "/project/{project_id}",
    response_model=schemas.DashboardResponse
)
def get_project_dashboard(
    project_id: int,
    db: Session = Depends(get_db)
):
    return crud.get_project_dashboard(
        db,
        project_id
    )