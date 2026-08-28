from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import ExtendedAttendanceCreate, GenericResponse
from services import AttendanceService
from core.permissions import RoleChecker

router = APIRouter()
attendance_service = AttendanceService()

@router.get("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_attendance(
    workerId: str = None,
    projectId: str = None,
    contractorId: str = None,
    shiftId: str = None,
    status: str = None,
    date: str = None,
    db: Session = Depends(get_db)
):
    filter_data = {}
    if workerId: filter_data["workerId"] = workerId
    if projectId: filter_data["projectId"] = projectId
    if contractorId: filter_data["contractorId"] = contractorId
    if shiftId: filter_data["shiftId"] = shiftId
    if status: filter_data["status"] = status
    if date:
        import datetime
        try:
            filter_data["date"] = datetime.datetime.strptime(date, "%Y-%m-%d")
        except ValueError:
            pass

    records = attendance_service.get_attendance(db, filter_data)
    res = [{
        "id": r.id,
        "workerId": r.worker_id,
        "workerName": r.worker.name if r.worker else "Unknown Worker",
        "workerRole": r.worker.skill_work_type if r.worker else "Laborer",
        "categoryName": r.worker.category_name if r.worker else "Skilled",
        "projectId": r.project_id or (r.worker.assigned_project_id if r.worker else None),
        "projectName": r.project.name if r.project else (r.worker.assigned_project.name if (r.worker and r.worker.assigned_project) else "Unassigned"),
        "contractorId": r.contractor_id or (r.worker.contractor_id if r.worker else None),
        "contractorName": r.contractor.user.name if (r.contractor and r.contractor.user) else (r.worker.contractor_name if r.worker else "Direct"),
        "shiftId": r.shift_id,
        "date": r.date.isoformat().split("T")[0],
        "status": r.status,
        "checkIn": r.check_in,
        "checkOut": r.check_out,
        "workingHours": r.working_hours or 0.0,
        "overtimeHours": r.overtime_hours or 0.0,
        "remarks": r.remarks
    } for r in records]
    return {"success": True, "data": res}

@router.get("/{attendance_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_attendance_detail(attendance_id: str, db: Session = Depends(get_db)):
    from models import Attendance
    r = db.query(Attendance).filter(Attendance.id == attendance_id).first()
    if not r:
        raise HTTPException(status_code=404, detail="Attendance record not found")
    res = {
        "id": r.id,
        "workerId": r.worker_id,
        "workerName": r.worker.name if r.worker else None,
        "projectId": r.project_id,
        "contractorId": r.contractor_id,
        "date": r.date.isoformat().split("T")[0],
        "status": r.status,
        "checkIn": r.check_in,
        "checkOut": r.check_out,
        "workingHours": r.working_hours or 0.0,
        "overtimeHours": r.overtime_hours or 0.0,
        "remarks": r.remarks
    }
    return {"success": True, "data": res}

@router.post("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor"]))])
def log_attendance(data: ExtendedAttendanceCreate, db: Session = Depends(get_db)):
    record = attendance_service.log_attendance(db, data.model_dump())
    return {
        "success": True,
        "message": f"Attendance for worker registered successfully ({record.status})",
        "data": {
            "id": record.id,
            "workerId": record.worker_id,
            "status": record.status,
            "workingHours": record.working_hours,
            "overtimeHours": record.overtime_hours
        }
    }

@router.put("/{attendance_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer"]))])
def update_attendance(attendance_id: str, data: dict, db: Session = Depends(get_db)):
    from models import Attendance
    r = db.query(Attendance).filter(Attendance.id == attendance_id).first()
    if not r:
        raise HTTPException(status_code=404, detail="Attendance record not found")
    
    for k, v in data.items():
        attr = "check_in" if k == "checkIn" else ("check_out" if k == "checkOut" else ("working_hours" if k == "workingHours" else ("overtime_hours" if k == "overtimeHours" else k)))
        if hasattr(r, attr) and v is not None:
            setattr(r, attr, v)

    db.commit()
    db.refresh(r)
    return {"success": True, "message": "Attendance record updated successfully", "data": {"id": r.id, "status": r.status}}
