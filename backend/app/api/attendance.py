from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import AttendanceCreate, AttendanceResponse, GenericResponse
from services import AttendanceService
from core.permissions import RoleChecker

router = APIRouter()
attendance_service = AttendanceService()

@router.get("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor"]))])
def get_attendance(workerId: str = None, projectId: str = None, date: str = None, db: Session = Depends(get_db)):
    filter_data = {}
    if workerId: filter_data["workerId"] = workerId
    if projectId: filter_data["projectId"] = projectId
    if date:
        import datetime
        filter_data["date"] = datetime.datetime.strptime(date, "%Y-%m-%d")

    records = attendance_service.get_attendance(db, filter_data)
    res = [{
        "id": r.id,
        "workerId": r.worker_id,
        "date": r.date.isoformat().split("T")[0],
        "status": r.status,
        "checkIn": r.check_in,
        "checkOut": r.check_out,
        "workerName": r.worker.user.name,
        "workerRole": r.worker.role
    } for r in records]
    return {"success": True, "data": res}

@router.post("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor"]))])
def log_attendance(data: AttendanceCreate, db: Session = Depends(get_db)):
    import datetime
    payload = data.model_dump()
    payload["date"] = datetime.datetime.strptime(data.date, "%Y-%m-%d")
    record = attendance_service.log_attendance(db, payload)
    return {
        "success": True,
        "message": "Attendance record registered successfully",
        "data": {
            "id": record.id,
            "workerId": record.worker_id,
            "status": record.status
        }
    }
