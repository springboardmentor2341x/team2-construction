from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud, schemas

router = APIRouter(
    prefix="/site-activity-logs",
    tags=["Site Activity Logs"]
)


# ==========================
# CREATE SITE ACTIVITY LOG
# ==========================

@router.post("/", response_model=schemas.SiteActivityLogResponse)
def create_site_activity_log(
    activity: schemas.SiteActivityLogCreate,
    db: Session = Depends(get_db)
):
    return crud.create_site_activity_log(db, activity)


# ==========================
# GET ALL SITE ACTIVITY LOGS
# ==========================

@router.get("/", response_model=list[schemas.SiteActivityLogResponse])
def get_site_activity_logs(
    project_id: int | None = None,
    db: Session = Depends(get_db)
):
    return crud.get_site_activity_logs(db, project_id)


# ==========================
# GET SITE ACTIVITY LOG BY ID
# ==========================

@router.get(
    "/{activity_id}",
    response_model=schemas.SiteActivityLogResponse
)
def get_site_activity_log(
    activity_id: int,
    db: Session = Depends(get_db)
):
    activity = crud.get_site_activity_log_by_id(
        db,
        activity_id
    )

    if activity is None:
        raise HTTPException(
            status_code=404,
            detail="Site activity log not found"
        )

    return activity


# ==========================
# UPDATE SITE ACTIVITY LOG
# ==========================

@router.put(
    "/{activity_id}",
    response_model=schemas.SiteActivityLogResponse
)
def update_site_activity_log(
    activity_id: int,
    activity: schemas.SiteActivityLogCreate,
    db: Session = Depends(get_db)
):
    updated_activity = crud.update_site_activity_log(
        db,
        activity_id,
        activity
    )

    if updated_activity is None:
        raise HTTPException(
            status_code=404,
            detail="Site activity log not found"
        )

    return updated_activity


# ==========================
# DELETE SITE ACTIVITY LOG
# ==========================

@router.delete("/{activity_id}")
def delete_site_activity_log(
    activity_id: int,
    db: Session = Depends(get_db)
):
    deleted_activity = crud.delete_site_activity_log(
        db,
        activity_id
    )

    if deleted_activity is None:
        raise HTTPException(
            status_code=404,
            detail="Site activity log not found"
        )

    return {
        "message": "Site activity log deleted successfully"
    }