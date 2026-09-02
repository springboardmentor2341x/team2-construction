from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/shift-assignments",
    tags=["Shift Assignments"]
)


# ==========================
# CREATE SHIFT ASSIGNMENT
# ==========================

@router.post(
    "/",
    response_model=schemas.ShiftAssignmentResponse
)
def create_shift_assignment(
    assignment: schemas.ShiftAssignmentCreate,
    db: Session = Depends(get_db)
):
    try:
        return crud.create_shift_assignment(
            db,
            assignment
        )
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )


# ==========================
# GET ALL SHIFT ASSIGNMENTS
# ==========================

@router.get(
    "/",
    response_model=list[schemas.ShiftAssignmentResponse]
)
def get_shift_assignments(
    db: Session = Depends(get_db)
):
    return crud.get_shift_assignments(db)


# ==========================
# GET SHIFT ASSIGNMENT BY ID
# ==========================

@router.get(
    "/{assignment_id}",
    response_model=schemas.ShiftAssignmentResponse
)
def get_shift_assignment(
    assignment_id: int,
    db: Session = Depends(get_db)
):
    assignment = crud.get_shift_assignment_by_id(
        db,
        assignment_id
    )

    if assignment is None:
        raise HTTPException(
            status_code=404,
            detail="Shift assignment not found"
        )

    return assignment