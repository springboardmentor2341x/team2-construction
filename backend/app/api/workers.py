from fastapi import APIRouter, Depends, HTTPException, Query, File, UploadFile, status
from sqlalchemy.orm import Session
from typing import Optional, List
import io
import csv

from database.session import get_db
from schemas import (
    WorkerCreate, WorkerUpdate, WorkerResponse, WorkforceCategoryResponse,
    WorkforceCategoryCreate, GenericResponse
)
from services import WorkforceService
from core.permissions import RoleChecker
from core.security import decode_token
from core.auth import oauth2_scheme

router = APIRouter()
workforce_service = WorkforceService()

def get_current_user_claims(token: str = Depends(oauth2_scheme)):
    return decode_token(token)

@router.get("/categories", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_categories(db: Session = Depends(get_db)):
    cats = workforce_service.get_categories(db)
    res = [{
        "id": c.id,
        "name": c.name,
        "description": c.description,
        "createdAt": c.created_at.isoformat() if c.created_at else None
    } for c in cats]
    return {"success": True, "data": res}

@router.post("/categories", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin"]))])
def create_category(data: WorkforceCategoryCreate, db: Session = Depends(get_db)):
    cat = workforce_service.create_category(db, data.model_dump())
    return {"success": True, "message": "Category created successfully", "data": {"id": cat.id, "name": cat.name}}

@router.get("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_workers(
    categoryId: Optional[str] = None,
    contractorId: Optional[str] = None,
    projectId: Optional[str] = None,
    status: Optional[str] = None,
    search: Optional[str] = None,
    claims: dict = Depends(get_current_user_claims),
    db: Session = Depends(get_db)
):
    filter_data = {}
    if categoryId: filter_data["category_id"] = categoryId
    if contractorId: filter_data["contractor_id"] = contractorId
    if projectId: filter_data["project_id"] = projectId
    if status: filter_data["status"] = status
    if search: filter_data["search"] = search

    role = claims.get("role", "worker")
    user_id = claims.get("sub")

    workers = workforce_service.get_workers(db, filter_data, user_role=role, current_user_id=user_id)
    res = []
    for w in workers:
        res.append({
            "id": w.id,
            "workerId": w.worker_id,
            "name": w.name,
            "contactInfo": w.contact_info,
            "categoryId": w.category_id,
            "categoryName": w.category_name or (w.category.name if w.category else "Skilled Workers"),
            "skillWorkType": w.skill_work_type,
            "contractorId": w.contractor_id,
            "contractorName": w.contractor_name or (w.contractor.user.name if (w.contractor and w.contractor.user) else "Direct"),
            "assignedProjectId": w.assigned_project_id,
            "assignedProjectName": w.assigned_project.name if w.assigned_project else "Unassigned",
            "joiningDate": w.joining_date.isoformat().split("T")[0] if w.joining_date else None,
            "status": w.status,
            "payRate": w.pay_rate or 500.0,
            "createdAt": w.created_at.isoformat() if w.created_at else None
        })
    return {"success": True, "data": res}

@router.get("/{worker_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_worker_detail(worker_id: str, db: Session = Depends(get_db)):
    w = workforce_service.get_worker_by_id(db, worker_id)
    assignments = workforce_service.get_assignments(db, {"worker_id": w.id})

    assign_history = [{
        "id": a.id,
        "projectId": a.project_id,
        "projectName": a.project.name if a.project else None,
        "contractorId": a.contractor_id,
        "workActivity": a.work_activity,
        "startDate": a.start_date.isoformat().split("T")[0] if a.start_date else None,
        "endDate": a.end_date.isoformat().split("T")[0] if a.end_date else None,
        "status": a.status
    } for a in assignments]

    res = {
        "id": w.id,
        "workerId": w.worker_id,
        "name": w.name,
        "contactInfo": w.contact_info,
        "categoryId": w.category_id,
        "categoryName": w.category_name or (w.category.name if w.category else "Skilled Workers"),
        "skillWorkType": w.skill_work_type,
        "contractorId": w.contractor_id,
        "contractorName": w.contractor_name or (w.contractor.user.name if (w.contractor and w.contractor.user) else "Direct"),
        "assignedProjectId": w.assigned_project_id,
        "assignedProjectName": w.assigned_project.name if w.assigned_project else "Unassigned",
        "joiningDate": w.joining_date.isoformat().split("T")[0] if w.joining_date else None,
        "status": w.status,
        "payRate": w.pay_rate or 500.0,
        "assignmentHistory": assign_history
    }
    return {"success": True, "data": res}

@router.post("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def register_worker(data: WorkerCreate, db: Session = Depends(get_db)):
    worker = workforce_service.create_worker(db, data.model_dump())
    return {
        "success": True,
        "message": f"Worker {worker.name} (ID: {worker.worker_id}) registered successfully",
        "data": {"id": worker.id, "workerId": worker.worker_id, "name": worker.name}
    }

@router.post("/bulk-csv", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])

def bulk_upload_workers(file: UploadFile = File(...), db: Session = Depends(get_db)):
    if not file.filename.endswith('.csv'):
        raise HTTPException(status_code=400, detail="Only CSV files are supported for bulk worker upload")

    content = file.file.read().decode('utf-8')
    csv_reader = csv.DictReader(io.StringIO(content))

    workers_data = []
    for row in csv_reader:
        workers_data.append({
            "workerId": row.get("Worker ID") or row.get("workerId") or row.get("worker_id"),
            "name": row.get("Name") or row.get("name"),
            "contactInfo": row.get("Contact") or row.get("contactInfo"),
            "skillWorkType": row.get("Skill") or row.get("skillWorkType") or "General Laborer",
            "categoryName": row.get("Category") or row.get("categoryName"),
            "joiningDate": row.get("Joining Date") or row.get("joiningDate"),
            "status": row.get("Status") or "Active",
            "payRate": float(row.get("Pay Rate") or row.get("payRate") or 500.0)
        })

    res = workforce_service.bulk_create_workers(db, workers_data)
    return {
        "success": True,
        "message": f"Bulk import processed: {res['created_count']} workers registered successfully.",
        "data": res
    }

@router.put("/{worker_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "contractor"]))])
def update_worker(worker_id: str, data: WorkerUpdate, db: Session = Depends(get_db)):
    updated = workforce_service.update_worker(db, worker_id, data.model_dump(exclude_unset=True))
    return {
        "success": True,
        "message": "Worker record updated successfully",
        "data": {"id": updated.id, "workerId": updated.worker_id, "name": updated.name, "status": updated.status}
    }

@router.delete("/{worker_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin"]))])
def delete_worker(worker_id: str, db: Session = Depends(get_db)):
    workforce_service.delete_worker(db, worker_id)
    return {"success": True, "message": "Worker deactivated successfully"}
