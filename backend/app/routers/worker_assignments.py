from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/worker-assignments",
    tags=["Worker Assignments"]
)


@router.post(
    "/",
    response_model=schemas.WorkerAssignment
)
def create_worker_assignment(
    assignment: schemas.WorkerAssignmentCreate,
    db: Session = Depends(get_db)
):
    result = crud.create_worker_assignment(
        db,
        assignment
    )

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Worker not found"
        )

    return result


@router.get(
    "/",
    response_model=list[schemas.WorkerAssignment]
)
def get_worker_assignments(
    db: Session = Depends(get_db)
):
    return crud.get_worker_assignments(db)


@router.get(
    "/{assignment_id}",
    response_model=schemas.WorkerAssignment
)
def get_worker_assignment(
    assignment_id: int,
    db: Session = Depends(get_db)
):
    result = crud.get_worker_assignment_by_id(
        db,
        assignment_id
    )

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Worker assignment not found"
        )

    return result