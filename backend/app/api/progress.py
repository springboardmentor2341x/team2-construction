import os
import shutil
import uuid
from typing import Optional, List
from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import (
    DailyProgressReportCreate, DailyProgressReportUpdate, DailyProgressReportResponse,
    MilestoneCreate, MilestoneUpdate, MilestoneResponse,
    DelayRecordCreate, DelayRecordUpdate, DelayRecordResponse,
    SiteActivityLogCreate, SiteActivityLogUpdate, SiteActivityLogResponse,
    WeeklyProgressSummaryResponse, GenericResponse
)
from services import ProgressService
from core.security import decode_token
from core.auth import oauth2_scheme
from core.permissions import RoleChecker

router = APIRouter()
progress_service = ProgressService()

UPLOAD_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

def get_current_user_id(token: str = Depends(oauth2_scheme)) -> str:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid authorization token")
    return payload.get("sub")

def get_current_user_payload(token: str = Depends(oauth2_scheme)) -> dict:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid authorization token")
    return payload

# Helper formatter for DailyProgressReport
def format_daily_report(rep) -> dict:
    return {
        "id": rep.id,
        "projectId": rep.project_id,
        "projectName": rep.project.name if rep.project else "Unknown Project",
        "reportDate": rep.report_date.strftime("%Y-%m-%d"),
        "workCategory": rep.work_category,
        "activityPerformed": rep.activity_performed,
        "percentageWorkCompleted": rep.percentage_work_completed,
        "contractorId": rep.contractor_id,
        "contractorName": rep.contractor_name,
        "workersPresent": rep.workers_present,
        "workersAbsent": rep.workers_absent,
        "machineryUsed": rep.machinery_used,
        "weatherConditions": rep.weather_conditions,
        "safetyObservations": rep.safety_observations,
        "qualityInspectionRemarks": rep.quality_inspection_remarks,
        "progressPhotograph": rep.progress_photograph,
        "delayEncountered": rep.delay_encountered,
        "delayReason": rep.delay_reason,
        "additionalComments": rep.additional_comments,
        "siteEngineerId": rep.site_engineer_id,
        "siteEngineerName": rep.site_engineer.name if rep.site_engineer else "Engineer",
        "createdAt": rep.created_at.isoformat() if rep.created_at else "",
        "materialsConsumed": [{
            "materialId": m.material_id,
            "materialName": m.material_name,
            "quantity": m.quantity,
            "unit": m.unit
        } for m in rep.materials_consumed]
    }

def format_milestone(m) -> dict:
    return {
        "id": m.id,
        "projectId": m.project_id,
        "projectName": m.project.name if m.project else "Unknown Project",
        "name": m.name,
        "plannedStartDate": m.planned_start_date.strftime("%Y-%m-%d") if m.planned_start_date else "",
        "plannedEndDate": m.planned_end_date.strftime("%Y-%m-%d") if m.planned_end_date else "",
        "actualCompletionDate": m.actual_completion_date.strftime("%Y-%m-%d") if m.actual_completion_date else None,
        "progressPercentage": m.progress_percentage,
        "status": m.status,
        "relatedActivities": m.related_activities,
        "orderIndex": m.order_index
    }

def format_delay(d) -> dict:
    return {
        "id": d.id,
        "projectId": d.project_id,
        "projectName": d.project.name if d.project else "Unknown Project",
        "date": d.date.strftime("%Y-%m-%d") if d.date else "",
        "affectedActivity": d.affected_activity,
        "delayReason": d.delay_reason,
        "delayDuration": d.delay_duration,
        "impactOnProject": d.impact_on_project,
        "additionalRemarks": d.additional_remarks,
        "recordedById": d.recorded_by_id,
        "recordedByName": d.recorded_by.name if d.recorded_by else "User",
        "status": d.status,
        "createdAt": d.created_at.isoformat() if d.created_at else ""
    }

def format_activity_log(a) -> dict:
    return {
        "id": a.id,
        "projectId": a.project_id,
        "projectName": a.project.name if a.project else "Unknown Project",
        "date": a.date.strftime("%Y-%m-%d") if a.date else "",
        "time": a.time,
        "activityType": a.activity_type,
        "description": a.description,
        "responsiblePerson": a.responsible_person,
        "loggedById": a.logged_by_id,
        "loggedByName": a.logged_by.name if a.logged_by else "User",
        "createdAt": a.created_at.isoformat() if a.created_at else ""
    }

# ==========================================
# 1. DAILY PROGRESS REPORT APIS
# ==========================================
@router.get("/daily", summary="Get Daily Progress Reports")
def get_daily_reports(
    projectId: Optional[str] = None,
    dateFrom: Optional[str] = None,
    dateTo: Optional[str] = None,
    contractorId: Optional[str] = None,
    user_payload: dict = Depends(get_current_user_payload),
    db: Session = Depends(get_db)
):
    reports = progress_service.get_daily_reports(db, projectId, dateFrom, dateTo, contractorId)
    return {"success": True, "data": [format_daily_report(r) for r in reports]}

@router.get("/daily/{id}", summary="Get Daily Progress Report by ID")
def get_daily_report_by_id(
    id: str,
    user_payload: dict = Depends(get_current_user_payload),
    db: Session = Depends(get_db)
):
    report = progress_service.get_daily_report_by_id(db, id)
    return {"success": True, "data": format_daily_report(report)}

@router.post("/daily", summary="Create Daily Progress Report", dependencies=[Depends(RoleChecker(["admin", "site_engineer", "project_manager"]))])
def create_daily_report(
    data: DailyProgressReportCreate,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    report = progress_service.create_daily_report(db, user_id, data.model_dump())
    return {"success": True, "message": "Daily progress report created successfully", "data": format_daily_report(report)}

@router.put("/daily/{id}", summary="Update Daily Progress Report", dependencies=[Depends(RoleChecker(["admin", "site_engineer", "project_manager"]))])
def update_daily_report(
    id: str,
    data: DailyProgressReportUpdate,
    db: Session = Depends(get_db)
):
    report = progress_service.update_daily_report(db, id, data.model_dump(exclude_unset=True))
    return {"success": True, "message": "Daily progress report updated successfully", "data": format_daily_report(report)}

@router.delete("/daily/{id}", summary="Delete Daily Progress Report", dependencies=[Depends(RoleChecker(["admin", "site_engineer"]))])
def delete_daily_report(
    id: str,
    db: Session = Depends(get_db)
):
    progress_service.delete_daily_report(db, id)
    return {"success": True, "message": "Daily progress report deleted successfully"}

# ==========================================
# 2. WEEKLY PROGRESS REPORT APIS
# ==========================================
@router.get("/weekly-summary", summary="Get Weekly Progress Summary")
def get_weekly_summary(
    projectId: str,
    weekStartDate: Optional[str] = None,
    user_payload: dict = Depends(get_current_user_payload),
    db: Session = Depends(get_db)
):
    summary = progress_service.get_weekly_summary(db, projectId, weekStartDate)
    return {"success": True, "data": summary}

# ==========================================
# 3. MILESTONES APIS
# ==========================================
@router.get("/milestones", summary="Get Milestones")
def get_milestones(
    projectId: Optional[str] = None,
    user_payload: dict = Depends(get_current_user_payload),
    db: Session = Depends(get_db)
):
    milestones = progress_service.get_milestones(db, projectId)
    return {"success": True, "data": [format_milestone(m) for m in milestones]}

@router.get("/milestones/{id}", summary="Get Milestone by ID")
def get_milestone_by_id(
    id: str,
    user_payload: dict = Depends(get_current_user_payload),
    db: Session = Depends(get_db)
):
    m = progress_service.get_milestone_by_id(db, id)
    return {"success": True, "data": format_milestone(m)}

@router.post("/milestones", summary="Create Milestone", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def create_milestone(
    data: MilestoneCreate,
    db: Session = Depends(get_db)
):
    m = progress_service.create_milestone(db, data.model_dump())
    return {"success": True, "message": "Milestone created successfully", "data": format_milestone(m)}

@router.put("/milestones/{id}", summary="Update Milestone Progress / Status", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer"]))])
def update_milestone(
    id: str,
    data: MilestoneUpdate,
    db: Session = Depends(get_db)
):
    m = progress_service.update_milestone(db, id, data.model_dump(exclude_unset=True))
    return {"success": True, "message": "Milestone updated successfully", "data": format_milestone(m)}

@router.delete("/milestones/{id}", summary="Delete Milestone", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def delete_milestone(
    id: str,
    db: Session = Depends(get_db)
):
    progress_service.delete_milestone(db, id)
    return {"success": True, "message": "Milestone deleted successfully"}

# ==========================================
# 4. DELAY TRACKING APIS
# ==========================================
@router.get("/delays", summary="Get Delay Records")
def get_delays(
    projectId: Optional[str] = None,
    status: Optional[str] = None,
    user_payload: dict = Depends(get_current_user_payload),
    db: Session = Depends(get_db)
):
    delays = progress_service.get_delays(db, projectId, status)
    return {"success": True, "data": [format_delay(d) for d in delays]}

@router.get("/delays/{id}", summary="Get Delay Record by ID")
def get_delay_by_id(
    id: str,
    user_payload: dict = Depends(get_current_user_payload),
    db: Session = Depends(get_db)
):
    d = progress_service.get_delay_by_id(db, id)
    return {"success": True, "data": format_delay(d)}

@router.post("/delays", summary="Create Delay Record", dependencies=[Depends(RoleChecker(["admin", "site_engineer", "project_manager"]))])
def create_delay(
    data: DelayRecordCreate,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    del_rec = progress_service.create_delay(db, user_id, data.model_dump())
    return {"success": True, "message": "Delay record logged successfully", "data": format_delay(del_rec)}

@router.put("/delays/{id}", summary="Update Delay Record", dependencies=[Depends(RoleChecker(["admin", "site_engineer", "project_manager"]))])
def update_delay(
    id: str,
    data: DelayRecordUpdate,
    db: Session = Depends(get_db)
):
    del_rec = progress_service.update_delay(db, id, data.model_dump(exclude_unset=True))
    return {"success": True, "message": "Delay record updated successfully", "data": format_delay(del_rec)}

@router.delete("/delays/{id}", summary="Delete Delay Record", dependencies=[Depends(RoleChecker(["admin", "site_engineer"]))])
def delete_delay(
    id: str,
    db: Session = Depends(get_db)
):
    progress_service.delete_delay(db, id)
    return {"success": True, "message": "Delay record deleted successfully"}

# ==========================================
# 5. SITE ACTIVITY LOGS APIS
# ==========================================
@router.get("/activity-logs", summary="Get Site Activity Logs")
def get_activity_logs(
    projectId: Optional[str] = None,
    activityType: Optional[str] = None,
    user_payload: dict = Depends(get_current_user_payload),
    db: Session = Depends(get_db)
):
    logs = progress_service.get_activity_logs(db, projectId, activityType)
    return {"success": True, "data": [format_activity_log(a) for a in logs]}

@router.get("/activity-logs/{id}", summary="Get Site Activity Log by ID")
def get_activity_log_by_id(
    id: str,
    user_payload: dict = Depends(get_current_user_payload),
    db: Session = Depends(get_db)
):
    log = progress_service.get_activity_log_by_id(db, id)
    return {"success": True, "data": format_activity_log(log)}

@router.post("/activity-logs", summary="Create Site Activity Log", dependencies=[Depends(RoleChecker(["admin", "site_engineer", "project_manager"]))])
def create_activity_log(
    data: SiteActivityLogCreate,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    log = progress_service.create_activity_log(db, user_id, data.model_dump())
    return {"success": True, "message": "Site activity log recorded successfully", "data": format_activity_log(log)}

@router.put("/activity-logs/{id}", summary="Update Site Activity Log", dependencies=[Depends(RoleChecker(["admin", "site_engineer", "project_manager"]))])
def update_activity_log(
    id: str,
    data: SiteActivityLogUpdate,
    db: Session = Depends(get_db)
):
    log = progress_service.update_activity_log(db, id, data.model_dump(exclude_unset=True))
    return {"success": True, "message": "Site activity log updated successfully", "data": format_activity_log(log)}

@router.delete("/activity-logs/{id}", summary="Delete Site Activity Log", dependencies=[Depends(RoleChecker(["admin", "site_engineer"]))])
def delete_activity_log(
    id: str,
    db: Session = Depends(get_db)
):
    progress_service.delete_activity_log(db, id)
    return {"success": True, "message": "Site activity log deleted successfully"}

# ==========================================
# 6. PROGRESS PHOTO UPLOADS
# ==========================================
@router.post("/photos/upload", summary="Upload Progress Photo", dependencies=[Depends(RoleChecker(["admin", "site_engineer", "project_manager"]))])
async def upload_progress_photo(
    file: UploadFile = File(...),
    projectId: Optional[str] = Form(None),
    caption: Optional[str] = Form(None),
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    # Validate extension
    allowed_exts = [".jpg", ".jpeg", ".png", ".webp", ".gif"]
    _, ext = os.path.splitext(file.filename)
    if ext.lower() not in allowed_exts:
        raise HTTPException(status_code=400, detail="Only JPG, PNG, WEBP, and GIF files are permitted")

    unique_filename = f"progress_{uuid.uuid4().hex}{ext.lower()}"
    file_path = os.path.join(UPLOAD_DIR, unique_filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    photo_url = f"/uploads/{unique_filename}"

    return {
        "success": True,
        "message": "Progress photo uploaded successfully",
        "data": {
            "url": photo_url,
            "filename": unique_filename,
            "caption": caption
        }
    }
