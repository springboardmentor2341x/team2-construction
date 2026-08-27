from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import Optional, List

from database.session import get_db
from schemas import (
    ShiftCreate, ShiftUpdate, ShiftResponse, ShiftAssignmentCreate, GenericResponse
)
from services import ShiftService
from core.permissions import RoleChecker

router = APIRouter()
shift_service = ShiftService()

@router.get("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_shifts(
    projectId: Optional[str] = None,
    status: Optional[str] = None,
    date: Optional[str] = None,
    db: Session = Depends(get_db)
):
    filter_data = {}
    if projectId: filter_data["projectId"] = projectId
    if status: filter_data["status"] = status
    if date:
        import datetime
        try:
            filter_data["date"] = datetime.datetime.strptime(date, "%Y-%m-%d")
        except ValueError:
            pass

    shifts = shift_service.get_shifts(db, filter_data)
    res = []
    for s in shifts:
        workers_list = [{
            "assignmentId": sa.id,
            "workerId": sa.worker_id,
            "workerName": sa.worker.name if sa.worker else None,
            "workerRole": sa.worker.skill_work_type if sa.worker else "Laborer",
            "status": sa.status
        } for sa in s.assigned_workers]

        res.append({
            "id": s.id,
            "name": s.name,
            "startTime": s.start_time,
            "endTime": s.end_time,
            "projectId": s.project_id,
            "projectName": s.project.name if s.project else "Unassigned",
            "shiftDate": s.shift_date.isoformat().split("T")[0] if s.shift_date else None,
            "status": s.status,
            "assignedWorkersCount": len(workers_list),
            "assignedWorkers": workers_list,
            "createdAt": s.created_at.isoformat() if s.created_at else None
        })
    return {"success": True, "data": res}

@router.get("/{shift_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_shift_detail(shift_id: str, db: Session = Depends(get_db)):
    s = shift_service.get_shift_by_id(db, shift_id)
    workers_list = [{
        "assignmentId": sa.id,
        "workerId": sa.worker_id,
        "workerName": sa.worker.name if sa.worker else None,
        "workerRole": sa.worker.skill_work_type if sa.worker else "Laborer",
        "status": sa.status
    } for sa in s.assigned_workers]

    res = {
        "id": s.id,
        "name": s.name,
        "startTime": s.start_time,
        "endTime": s.end_time,
        "projectId": s.project_id,
        "projectName": s.project.name if s.project else "Unassigned",
        "shiftDate": s.shift_date.isoformat().split("T")[0] if s.shift_date else None,
        "status": s.status,
        "assignedWorkersCount": len(workers_list),
        "assignedWorkers": workers_list
    }
    return {"success": True, "data": res}

@router.post("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer"]))])
def create_shift(data: ShiftCreate, db: Session = Depends(get_db)):
    shift = shift_service.create_shift(db, data.model_dump())
    return {
        "success": True,
        "message": f"Shift '{shift.name}' created successfully",
        "data": {"id": shift.id, "name": shift.name, "status": shift.status}
    }

@router.put("/{shift_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer"]))])
def update_shift(shift_id: str, data: ShiftUpdate, db: Session = Depends(get_db)):
    updated = shift_service.update_shift(db, shift_id, data.model_dump(exclude_unset=True))
    return {"success": True, "message": "Shift updated successfully", "data": {"id": updated.id, "name": updated.name, "status": updated.status}}

@router.delete("/{shift_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def delete_shift(shift_id: str, db: Session = Depends(get_db)):
    shift_service.delete_shift(db, shift_id)
    return {"success": True, "message": "Shift deleted successfully"}

# SHIFT ASSIGNMENTS
@router.post("/assign", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor"]))])
def assign_workers_to_shift(data: ShiftAssignmentCreate, db: Session = Depends(get_db)):
    res = shift_service.assign_workers_to_shift(db, data.shiftId, data.workerIds)
    msg = f"Assigned {res['assigned']} worker(s) to shift"
    if res["conflicts"]:
        msg += f". Warning: {len(res['conflicts'])} conflict(s) prevented."
    return {
        "success": True,
        "message": msg,
        "data": {
            "shiftId": res["shift"].id,
            "assignedCount": res["assigned"],
            "conflicts": res["conflicts"]
        }
    }

@router.delete("/assign/{assignment_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer"]))])
def unassign_worker_from_shift(assignment_id: str, db: Session = Depends(get_db)):
    from models import ShiftAssignment
    sa = db.query(ShiftAssignment).filter(ShiftAssignment.id == assignment_id).first()
    if not sa:
        raise HTTPException(status_code=404, detail="Shift assignment record not found")
    db.delete(sa)
    db.commit()
    return {"success": True, "message": "Worker removed from shift"}
