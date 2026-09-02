from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud, schemas

router = APIRouter(
    prefix="/weekly-progress-reports",
    tags=["Weekly Progress Reports"]
)


# ==========================
# CREATE WEEKLY REPORT
# ==========================

@router.post(
    "/",
    response_model=schemas.WeeklyProgressReportResponse
)
def create_weekly_progress_report(
    report: schemas.WeeklyProgressReportCreate,
    db: Session = Depends(get_db)
):
    return crud.create_weekly_progress_report(db, report)


# ==========================
# GET WEEKLY REPORTS
# ==========================

@router.get(
    "/",
    response_model=list[schemas.WeeklyProgressReportResponse]
)
def get_weekly_progress_reports(
    project_id: int | None = None,
    db: Session = Depends(get_db)
):
    return crud.get_weekly_progress_reports(
        db,
        project_id
    )


# ==========================
# GET WEEKLY REPORT BY ID
# ==========================

@router.get(
    "/{report_id}",
    response_model=schemas.WeeklyProgressReportResponse
)
def get_weekly_progress_report(
    report_id: int,
    db: Session = Depends(get_db)
):
    report = crud.get_weekly_progress_report_by_id(
        db,
        report_id
    )

    if report is None:
        raise HTTPException(
            status_code=404,
            detail="Weekly progress report not found"
        )

    return report


# ==========================
# UPDATE WEEKLY REPORT
# ==========================

@router.put(
    "/{report_id}",
    response_model=schemas.WeeklyProgressReportResponse
)
def update_weekly_progress_report(
    report_id: int,
    report: schemas.WeeklyProgressReportCreate,
    db: Session = Depends(get_db)
):
    updated_report = crud.update_weekly_progress_report(
        db,
        report_id,
        report
    )

    if updated_report is None:
        raise HTTPException(
            status_code=404,
            detail="Weekly progress report not found"
        )

    return updated_report


# ==========================
# DELETE WEEKLY REPORT
# ==========================

@router.delete("/{report_id}")
def delete_weekly_progress_report(
    report_id: int,
    db: Session = Depends(get_db)
):
    deleted_report = crud.delete_weekly_progress_report(
        db,
        report_id
    )

    if deleted_report is None:
        raise HTTPException(
            status_code=404,
            detail="Weekly progress report not found"
        )

    return {
        "message": "Weekly progress report deleted successfully"
    }