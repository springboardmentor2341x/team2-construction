from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud, schemas


router = APIRouter(
    prefix="/progress-updates",
    tags=["Progress Updates"]
)


@router.post("/", response_model=schemas.ProgressUpdateResponse)
def create_progress_update(
    progress_update: schemas.ProgressUpdateCreate,
    db: Session = Depends(get_db)
):
    return crud.create_progress_update(db, progress_update)


@router.get("/", response_model=list[schemas.ProgressUpdateResponse])
def get_progress_updates(
    project_id: int | None = None,
    db: Session = Depends(get_db)
):
    return crud.get_progress_updates(db, project_id)


@router.get("/{progress_update_id}", response_model=schemas.ProgressUpdateResponse)
def get_progress_update(
    progress_update_id: int,
    db: Session = Depends(get_db)
):
    progress_update = crud.get_progress_update(db, progress_update_id)

    if not progress_update:
        raise HTTPException(
            status_code=404,
            detail="Progress update not found"
        )

    return progress_update