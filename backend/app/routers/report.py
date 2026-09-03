from datetime import date
from io import BytesIO
from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session

from app.database import get_db
from app import models, schemas, crud
from app.auth import get_current_user, check_project_access
from app.services import report_service

router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)


# ==============================================================================
# GENERIC REPORT ENDPOINTS
# ==============================================================================

@router.post("/", response_model=schemas.ReportResponse)
def create_report(
    report: schemas.ReportCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    new_report = models.Report(
        report_type=report.report_title,
        description=report.summary
    )
    db.add(new_report)
    db.commit()
    db.refresh(new_report)
    return new_report


@router.get("/", response_model=list[schemas.ReportResponse])
def get_reports(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    return db.query(models.Report).all()


# ==============================================================================
# 1. PROJECT PROGRESS REPORT
# ==============================================================================

@router.get("/project-progress/{project_id}", response_model=schemas.ProjectProgressReportResponse)
def project_progress_report(
    project_id: int,
    start_date: date | None = Query(None, description="Start date filter (YYYY-MM-DD)"),
    end_date: date | None = Query(None, description="End date filter (YYYY-MM-DD)"),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_project_progress_report_data(db, project_id, start_date, end_date)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")
    return data


@router.get("/project-progress/{project_id}/pdf")
def project_progress_report_pdf(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_project_progress_report_data(db, project_id, start_date, end_date)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")

    pdf_buffer = report_service.generate_project_progress_pdf(data)
    return StreamingResponse(
        pdf_buffer,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"attachment; filename=project_progress_report_{project_id}.pdf"
        }
    )


@router.get("/project-progress/{project_id}/excel")
def project_progress_report_excel(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_project_progress_report_data(db, project_id, start_date, end_date)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")

    excel_buffer = report_service.generate_project_progress_excel(data)
    return StreamingResponse(
        excel_buffer,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={
            "Content-Disposition": f"attachment; filename=project_progress_report_{project_id}.xlsx"
        }
    )


# ==============================================================================
# 2. RESOURCE UTILIZATION REPORT
# ==============================================================================

@router.get("/resource-utilization/{project_id}", response_model=schemas.ResourceUtilizationReportResponse)
def resource_utilization_report(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_resource_utilization_report_data(db, project_id, start_date, end_date)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")
    return data


@router.get("/resource-utilization/{project_id}/pdf")
def resource_utilization_report_pdf(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_resource_utilization_report_data(db, project_id, start_date, end_date)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")

    pdf_buffer = report_service.generate_resource_utilization_pdf(data)
    return StreamingResponse(
        pdf_buffer,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"attachment; filename=resource_utilization_report_{project_id}.pdf"
        }
    )


@router.get("/resource-utilization/{project_id}/excel")
def resource_utilization_report_excel(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_resource_utilization_report_data(db, project_id, start_date, end_date)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")

    excel_buffer = report_service.generate_resource_utilization_excel(data)
    return StreamingResponse(
        excel_buffer,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={
            "Content-Disposition": f"attachment; filename=resource_utilization_report_{project_id}.xlsx"
        }
    )


# ==============================================================================
# 3. WORKFORCE REPORT
# ==============================================================================

@router.get("/workforce/{project_id}", response_model=schemas.WorkforceReportResponse)
def workforce_report(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_workforce_report_data(db, project_id, start_date, end_date)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")
    return data


@router.get("/workforce/{project_id}/pdf")
def workforce_report_pdf(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_workforce_report_data(db, project_id, start_date, end_date)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")

    pdf_buffer = report_service.generate_workforce_pdf(data)
    return StreamingResponse(
        pdf_buffer,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"attachment; filename=workforce_report_{project_id}.pdf"
        }
    )


@router.get("/workforce/{project_id}/excel")
def workforce_report_excel(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_workforce_report_data(db, project_id, start_date, end_date)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")

    excel_buffer = report_service.generate_workforce_excel(data)
    return StreamingResponse(
        excel_buffer,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={
            "Content-Disposition": f"attachment; filename=workforce_report_{project_id}.xlsx"
        }
    )


# ==============================================================================
# 4. PROCUREMENT REPORT
# ==============================================================================

@router.get("/procurement/{project_id}", response_model=schemas.ProcurementReportResponse)
def procurement_report(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    status: str | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_procurement_report_data(db, project_id, start_date, end_date, status)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")
    return data


@router.get("/procurement/{project_id}/pdf")
def procurement_report_pdf(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    status: str | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_procurement_report_data(db, project_id, start_date, end_date, status)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")

    pdf_buffer = report_service.generate_procurement_pdf(data)
    return StreamingResponse(
        pdf_buffer,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"attachment; filename=procurement_report_{project_id}.pdf"
        }
    )


@router.get("/procurement/{project_id}/excel")
def procurement_report_excel(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    status: str | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_procurement_report_data(db, project_id, start_date, end_date, status)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")

    excel_buffer = report_service.generate_procurement_excel(data)
    return StreamingResponse(
        excel_buffer,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={
            "Content-Disposition": f"attachment; filename=procurement_report_{project_id}.xlsx"
        }
    )


# ==============================================================================
# 5. BUDGET REPORT
# ==============================================================================

@router.get("/budget/{project_id}", response_model=schemas.BudgetReportResponse)
def budget_report(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    category: str | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_budget_report_data(db, project_id, start_date, end_date, category)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")
    return data


@router.get("/budget/{project_id}/pdf")
def budget_report_pdf(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    category: str | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_budget_report_data(db, project_id, start_date, end_date, category)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")

    pdf_buffer = report_service.generate_budget_pdf(data)
    return StreamingResponse(
        pdf_buffer,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"attachment; filename=budget_report_{project_id}.pdf"
        }
    )


@router.get("/budget/{project_id}/excel")
def budget_report_excel(
    project_id: int,
    start_date: date | None = Query(None),
    end_date: date | None = Query(None),
    category: str | None = Query(None),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    check_project_access(db, project_id, current_user)
    data = crud.get_budget_report_data(db, project_id, start_date, end_date, category)
    if not data:
        raise HTTPException(status_code=404, detail="Project not found")

    excel_buffer = report_service.generate_budget_excel(data)
    return StreamingResponse(
        excel_buffer,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={
            "Content-Disposition": f"attachment; filename=budget_report_{project_id}.xlsx"
        }
    )