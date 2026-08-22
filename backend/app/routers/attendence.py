from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, crud
from app.database import get_db


router = APIRouter(
    prefix="/attendance",
    tags=["Attendance"]
)


# ==========================
# CREATE ATTENDANCE
# ==========================

@router.post("/", response_model=schemas.AttendanceResponse)
def create_attendance(
    attendance: schemas.AttendanceCreate,
    db: Session = Depends(get_db)
):
    return crud.create_attendance(db, attendance)


# ==========================
# GET ALL ATTENDANCE
# ==========================

@router.get("/", response_model=list[schemas.AttendanceResponse])
def get_attendance(
    project_id: int | None = None,
    db: Session = Depends(get_db)
):
    return crud.get_attendance(db, project_id)


# ==========================
# GET ATTENDANCE BY ID
# ==========================

@router.get("/{attendance_id}", response_model=schemas.AttendanceResponse)
def get_attendance_by_id(
    attendance_id: int,
    db: Session = Depends(get_db)
):
    attendance = crud.get_attendance_by_id(
        db,
        attendance_id
    )

    if attendance is None:
        raise HTTPException(
            status_code=404,
            detail="Attendance record not found"
        )

    return attendance


# ==========================
# UPDATE ATTENDANCE
# ==========================

@router.put("/{attendance_id}", response_model=schemas.AttendanceResponse)
def update_attendance(
    attendance_id: int,
    attendance: schemas.AttendanceCreate,
    db: Session = Depends(get_db)
):
    updated_attendance = crud.update_attendance(
        db,
        attendance_id,
        attendance
    )

    if updated_attendance is None:
        raise HTTPException(
            status_code=404,
            detail="Attendance record not found"
        )

    return updated_attendance


# ==========================
# DELETE ATTENDANCE
# ==========================

@router.delete("/{attendance_id}")
def delete_attendance(
    attendance_id: int,
    db: Session = Depends(get_db)
):
    deleted_attendance = crud.delete_attendance(
        db,
        attendance_id
    )

    if deleted_attendance is None:
        raise HTTPException(
            status_code=404,
            detail="Attendance record not found"
        )

    return {
        "message": "Attendance record deleted successfully"
    }