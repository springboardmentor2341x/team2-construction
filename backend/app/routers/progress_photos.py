from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud, schemas

router = APIRouter(
    prefix="/progress-photos",
    tags=["Progress Photos"]
)


# ==========================
# CREATE PROGRESS PHOTO
# ==========================

@router.post("/", response_model=schemas.ProgressPhotoResponse)
def create_progress_photo(
    photo: schemas.ProgressPhotoCreate,
    db: Session = Depends(get_db)
):
    return crud.create_progress_photo(db, photo)


# ==========================
# GET PROGRESS PHOTOS
# ==========================

@router.get("/", response_model=list[schemas.ProgressPhotoResponse])
def get_progress_photos(
    project_id: int | None = None,
    progress_update_id: int | None = None,
    db: Session = Depends(get_db)
):
    return crud.get_progress_photos(
        db,
        project_id,
        progress_update_id
    )


# ==========================
# GET PHOTO BY ID
# ==========================

@router.get(
    "/{photo_id}",
    response_model=schemas.ProgressPhotoResponse
)
def get_progress_photo(
    photo_id: int,
    db: Session = Depends(get_db)
):
    photo = crud.get_progress_photo_by_id(
        db,
        photo_id
    )

    if photo is None:
        raise HTTPException(
            status_code=404,
            detail="Progress photo not found"
        )

    return photo


# ==========================
# UPDATE PROGRESS PHOTO
# ==========================

@router.put(
    "/{photo_id}",
    response_model=schemas.ProgressPhotoResponse
)
def update_progress_photo(
    photo_id: int,
    photo: schemas.ProgressPhotoCreate,
    db: Session = Depends(get_db)
):
    updated_photo = crud.update_progress_photo(
        db,
        photo_id,
        photo
    )

    if updated_photo is None:
        raise HTTPException(
            status_code=404,
            detail="Progress photo not found"
        )

    return updated_photo


# ==========================
# DELETE PROGRESS PHOTO
# ==========================

@router.delete("/{photo_id}")
def delete_progress_photo(
    photo_id: int,
    db: Session = Depends(get_db)
):
    deleted_photo = crud.delete_progress_photo(
        db,
        photo_id
    )

    if deleted_photo is None:
        raise HTTPException(
            status_code=404,
            detail="Progress photo not found"
        )

    return {
        "message": "Progress photo deleted successfully"
    }