from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import Response, StreamingResponse
from sqlalchemy.orm import Session
from database.session import get_db
from core.auth import oauth2_scheme
from core.security import decode_token
from services.report_service import ReportService
import io

router = APIRouter()
report_service = ReportService()

def get_current_user(token: str = Depends(oauth2_scheme)) -> dict:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    return payload

@router.get("/types")
def get_report_types(user: dict = Depends(get_current_user)):
    # Could filter by role, but for now return all
    return {
        "success": True,
        "data": [
            {"id": "progress", "name": "Project Progress Report"},
            {"id": "resource", "name": "Resource Utilization Report"},
            {"id": "workforce", "name": "Workforce Report"},
            {"id": "procurement", "name": "Procurement Report"},
            {"id": "budget", "name": "Budget & Cost Report"},
            {"id": "material", "name": "Material & Inventory Report"},
            {"id": "delay", "name": "Delay Report"},
            {"id": "milestone", "name": "Milestone Report"},
            {"id": "activity", "name": "Site Activity Report"},
            {"id": "comprehensive", "name": "Comprehensive Report"}
        ]
    }

@router.get("/preview/{report_type}")
def preview_report(
    report_type: str, 
    project_id: str, 
    start_date: str = "", 
    end_date: str = "", 
    db: Session = Depends(get_db), 
    user: dict = Depends(get_current_user)
):
    data = report_service.get_report_data(db, user, report_type, project_id, start_date, end_date)
    return {"success": True, "data": data}

@router.get("/export/{report_type}/pdf")
def export_report_pdf(
    report_type: str, 
    project_id: str, 
    start_date: str = "", 
    end_date: str = "", 
    db: Session = Depends(get_db), 
    user: dict = Depends(get_current_user)
):
    data = report_service.get_report_data(db, user, report_type, project_id, start_date, end_date)
    pdf_bytes = report_service.generate_pdf(data)
    
    return Response(
        content=pdf_bytes, 
        media_type="application/pdf", 
        headers={"Content-Disposition": f"attachment; filename={report_type}_report.pdf"}
    )

@router.get("/export/{report_type}/excel")
def export_report_excel(
    report_type: str, 
    project_id: str, 
    start_date: str = "", 
    end_date: str = "", 
    db: Session = Depends(get_db), 
    user: dict = Depends(get_current_user)
):
    data = report_service.get_report_data(db, user, report_type, project_id, start_date, end_date)
    excel_bytes = report_service.generate_excel(data)
    
    return Response(
        content=excel_bytes,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": f"attachment; filename={report_type}_report.xlsx"}
    )
