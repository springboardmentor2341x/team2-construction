from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud, schemas


router = APIRouter(
    prefix="/progress-updates",
    tags=["Progress Updates"]
)


# ==========================
# CREATE PROGRESS UPDATE
# ==========================

@router.post("/", response_model=schemas.ProgressUpdateResponse)
def create_progress_update(
    progress_update: schemas.ProgressUpdateCreate,
    db: Session = Depends(get_db)
):
    return crud.create_progress_update(db, progress_update)


# ==========================
# GET ALL PROGRESS UPDATES
# ==========================

@router.get("/", response_model=list[schemas.ProgressUpdateResponse])
def get_progress_updates(
    project_id: int | None = None,
    db: Session = Depends(get_db)
):
    return crud.get_progress_updates(db, project_id)


# ==========================
# GET PROGRESS UPDATE BY ID
# ==========================

@router.get(
    "/{progress_update_id}",
    response_model=schemas.ProgressUpdateResponse
)
def get_progress_update(
    progress_update_id: int,
    db: Session = Depends(get_db)
):
    progress_update = crud.get_progress_update(
        db,
        progress_update_id
    )

    if not progress_update:
        raise HTTPException(
            status_code=404,
            detail="Progress update not found"
        )

    return progress_update


# ==========================
# UPDATE PROGRESS UPDATE
# ==========================

@router.put(
    "/{progress_update_id}",
    response_model=schemas.ProgressUpdateResponse
)
def update_progress_update(
    progress_update_id: int,
    progress_update: schemas.ProgressUpdateCreate,
    db: Session = Depends(get_db)
):
    updated_progress = crud.update_progress_update(
        db,
        progress_update_id,
        progress_update
    )

    if updated_progress is None:
        raise HTTPException(
            status_code=404,
            detail="Progress update not found"
        )

    return updated_progress


# ==========================
# DELETE PROGRESS UPDATE
# ==========================

@router.delete("/{progress_update_id}")
def delete_progress_update(
    progress_update_id: int,
    db: Session = Depends(get_db)
):
    deleted_progress = crud.delete_progress_update(
        db,
        progress_update_id
    )

    if deleted_progress is None:
        raise HTTPException(
            status_code=404,
            detail="Progress update not found"
        )

    return {
        "message": "Progress update deleted successfully"
    }