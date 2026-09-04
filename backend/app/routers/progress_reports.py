from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, crud
from app.database import get_db


router = APIRouter(
    prefix="/progress-reports",
    tags=["Progress Reports"]
)


# ==========================
# CREATE PROGRESS REPORT
# ==========================

@router.post("/", response_model=schemas.ProgressReportResponse)
def create_progress_report(
    report: schemas.ProgressReportCreate,
    db: Session = Depends(get_db)
):
    return crud.create_progress_report(db, report)


# ==========================
# GET ALL PROGRESS REPORTS
# ==========================

@router.get("/", response_model=list[schemas.ProgressReportResponse])
def get_progress_reports(
    project_id: int | None = None,
    db: Session = Depends(get_db)
):
    return crud.get_progress_reports(db, project_id)


# ==========================
# GET PROGRESS REPORT BY ID
# ==========================

@router.get("/{report_id}", response_model=schemas.ProgressReportResponse)
def get_progress_report_by_id(
    report_id: int,
    db: Session = Depends(get_db)
):
    report = crud.get_progress_report_by_id(
        db,
        report_id
    )

    if report is None:
        raise HTTPException(
            status_code=404,
            detail="Progress report not found"
        )

    return report


# ==========================
# UPDATE PROGRESS REPORT
# ==========================

@router.put("/{report_id}", response_model=schemas.ProgressReportResponse)
def update_progress_report(
    report_id: int,
    report: schemas.ProgressReportCreate,
    db: Session = Depends(get_db)
):
    updated_report = crud.update_progress_report(
        db,
        report_id,
        report
    )

    if updated_report is None:
        raise HTTPException(
            status_code=404,
            detail="Progress report not found"
        )

    return updated_report


# ==========================
# DELETE PROGRESS REPORT
# ==========================

@router.delete("/{report_id}")
def delete_progress_report(
    report_id: int,
    db: Session = Depends(get_db)
):
    deleted_report = crud.delete_progress_report(
        db,
        report_id
    )

    if deleted_report is None:
        raise HTTPException(
            status_code=404,
            detail="Progress report not found"
        )

    return {
        "message": "Progress report deleted successfully"
    }