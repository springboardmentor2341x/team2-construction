from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import DailyReportCreate, GenericResponse
from services import ReportsService
from core.security import decode_token
from core.auth import oauth2_scheme
from core.permissions import RoleChecker
from typing import Optional
import datetime

router = APIRouter()
reports_service = ReportsService()

def get_current_user_id(token: str = Depends(oauth2_scheme)) -> str:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    return payload.get("sub")

@router.get("")
def get_reports(projectId: Optional[str] = None, db: Session = Depends(get_db)):
    reports = reports_service.get_reports(db, projectId)
    res = []
    # format report structure to match frontend service mapping
    for r in reports:
        res.append({
            "id": r.id,
            "projectId": r.project_id,
            "date": r.date.isoformat().split("T")[0],
            "workDone": r.work_done,
            "weather": r.weather,
            "siteEngineer": "Alex Chen", # placeholder or fetch engineer name
            "materialsUsed": [{
                "materialName": mu.material.name,
                "quantity": mu.quantity,
                "unit": mu.material.unit
            } for mu in r.materials_used]
        })
    return {"success": True, "data": res}

@router.post("", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer"]))])
def create_report(data: DailyReportCreate, user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    payload = data.model_dump()
    # parse date string to datetime object
    payload["date"] = datetime.datetime.strptime(data.date, "%Y-%m-%d")
    report = reports_service.create_report(db, user_id, payload)
    return {"success": True, "data": {"id": report.id}}

from services.report_service import ReportService
from fastapi.responses import Response

analytics_report_service = ReportService()

def get_current_user(token: str = Depends(oauth2_scheme)) -> dict:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    return {"sub": payload.get("sub"), "role": payload.get("role")}

@router.get("/analytics")
def get_analytics_report(
    report_type: str,
    project_id: str,
    start_date: Optional[str] = None,
    end_date: Optional[str] = None,
    user: dict = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    try:
        data = analytics_report_service.get_report_data(db, user, report_type, project_id, start_date, end_date)
        return {"success": True, "data": data}
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/analytics/export")
def export_analytics_report(
    report_type: str,
    project_id: str,
    format: str,
    start_date: Optional[str] = None,
    end_date: Optional[str] = None,
    user: dict = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    try:
        report_data = analytics_report_service.get_report_data(db, user, report_type, project_id, start_date, end_date)
        
        if format == "pdf":
            pdf_bytes = analytics_report_service.generate_pdf(report_data)
            return Response(content=pdf_bytes, media_type="application/pdf", headers={"Content-Disposition": f"attachment; filename={report_type}_report.pdf"})
        elif format == "excel":
            excel_bytes = analytics_report_service.generate_excel(report_data)
            return Response(content=excel_bytes, media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", headers={"Content-Disposition": f"attachment; filename={report_type}_report.xlsx"})
        else:
            raise HTTPException(status_code=400, detail="Invalid format. Use 'pdf' or 'excel'")
    except HTTPException as e:
        raise e
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
