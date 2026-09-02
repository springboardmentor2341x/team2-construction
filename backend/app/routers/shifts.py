from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/shifts",
    tags=["Shifts"]
)


# ==========================
# CREATE SHIFT - MODULE 6
# ==========================

@router.post(
    "/",
    response_model=schemas.ShiftResponse
)
def create_shift(
    shift: schemas.ShiftCreate,
    db: Session = Depends(get_db)
):
    return crud.create_shift(db, shift)


# ==========================
# GET ALL SHIFTS
# ==========================

@router.get(
    "/",
    response_model=list[schemas.ShiftResponse]
)
def get_shifts(
    db: Session = Depends(get_db)
):
    return crud.get_shifts(db)


# ==========================
# GET SHIFT BY ID
# ==========================

@router.get(
    "/{shift_id}",
    response_model=schemas.ShiftResponse
)
def get_shift(
    shift_id: int,
    db: Session = Depends(get_db)
):
    shift = crud.get_shift_by_id(db, shift_id)

    if shift is None:
        raise HTTPException(
            status_code=404,
            detail="Shift not found"
        )

    return shift