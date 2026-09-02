from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud, schemas

router = APIRouter(
    prefix="/delay-records",
    tags=["Delay Records"]
)


# ==========================
# CREATE DELAY RECORD
# ==========================

@router.post("/", response_model=schemas.DelayRecordResponse)
def create_delay_record(
    delay: schemas.DelayRecordCreate,
    db: Session = Depends(get_db)
):
    new_delay = crud.create_delay_record(db, delay)

    notification = schemas.NotificationCreate(
        title="Project Delay Recorded",
        message=f"A delay has been recorded for project {delay.project_id}"
    )

    crud.create_notification(db, notification)

    return new_delay

# ==========================
# GET ALL DELAY RECORDS
# ==========================

@router.get("/", response_model=list[schemas.DelayRecordResponse])
def get_delay_records(
    project_id: int | None = None,
    db: Session = Depends(get_db)
):
    return crud.get_delay_records(db, project_id)


# ==========================
# GET DELAY RECORD BY ID
# ==========================

@router.get("/{delay_id}", response_model=schemas.DelayRecordResponse)
def get_delay_record(
    delay_id: int,
    db: Session = Depends(get_db)
):
    delay = crud.get_delay_record_by_id(db, delay_id)

    if delay is None:
        raise HTTPException(
            status_code=404,
            detail="Delay record not found"
        )

    return delay


# ==========================
# UPDATE DELAY RECORD
# ==========================

@router.put("/{delay_id}", response_model=schemas.DelayRecordResponse)
def update_delay_record(
    delay_id: int,
    delay: schemas.DelayRecordCreate,
    db: Session = Depends(get_db)
):
    updated_delay = crud.update_delay_record(
        db,
        delay_id,
        delay
    )

    if updated_delay is None:
        raise HTTPException(
            status_code=404,
            detail="Delay record not found"
        )

    return updated_delay


# ==========================
# DELETE DELAY RECORD
# ==========================

@router.delete("/{delay_id}")
def delete_delay_record(
    delay_id: int,
    db: Session = Depends(get_db)
):
    deleted_delay = crud.delete_delay_record(
        db,
        delay_id
    )

    if deleted_delay is None:
        raise HTTPException(
            status_code=404,
            detail="Delay record not found"
        )

    return {
        "message": "Delay record deleted successfully"
    }