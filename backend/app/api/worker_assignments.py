from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import Optional, List

from database.session import get_db
from schemas import (
    WorkerAssignmentCreate, WorkerAssignmentUpdate, WorkerAssignmentResponse, GenericResponse
)
from services import WorkforceService
from core.permissions import RoleChecker

router = APIRouter()
workforce_service = WorkforceService()

@router.get("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_assignments(
    workerId: Optional[str] = None,
    projectId: Optional[str] = None,
    contractorId: Optional[str] = None,
    status: Optional[str] = None,
    db: Session = Depends(get_db)
):
    filter_data = {}
    if workerId: filter_data["worker_id"] = workerId
    if projectId: filter_data["project_id"] = projectId
    if contractorId: filter_data["contractor_id"] = contractorId
    if status: filter_data["status"] = status

    assignments = workforce_service.get_assignments(db, filter_data)
    res = [{
        "id": a.id,
        "workerId": a.worker_id,
        "workerName": a.worker.name if a.worker else None,
        "contractorId": a.contractor_id,
        "contractorName": a.contractor.user.name if (a.contractor and a.contractor.user) else None,
        "projectId": a.project_id,
        "projectName": a.project.name if a.project else None,
        "workActivity": a.work_activity,
        "startDate": a.start_date.isoformat().split("T")[0] if a.start_date else None,
        "endDate": a.end_date.isoformat().split("T")[0] if a.end_date else None,
        "status": a.status,
        "createdAt": a.created_at.isoformat() if a.created_at else None
    } for a in assignments]
    return {"success": True, "data": res}

@router.post("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "contractor"]))])
def allocate_worker(data: WorkerAssignmentCreate, db: Session = Depends(get_db)):
    assign = workforce_service.create_assignment(db, data.model_dump())
    return {
        "success": True,
        "message": f"Worker assigned to project {assign.project.name if assign.project else assign.project_id} successfully",
        "data": {
            "id": assign.id,
            "workerId": assign.worker_id,
            "projectId": assign.project_id,
            "status": assign.status
        }
    }
