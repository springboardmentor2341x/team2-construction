from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import Optional, List

from database.session import get_db
from schemas import (
    PayrollRecordCreate, PayrollRecordUpdate, PayrollRecordResponse, GenericResponse
)
from services import PayrollService
from core.permissions import RoleChecker
from core.security import decode_token
from core.auth import oauth2_scheme

router = APIRouter()
payroll_service = PayrollService()

def get_current_user_claims(token: str = Depends(oauth2_scheme)):
    return decode_token(token)

@router.get("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "contractor", "client"]))])
def get_payroll_records(
    workerId: Optional[str] = None,
    projectId: Optional[str] = None,
    contractorId: Optional[str] = None,
    monthYear: Optional[str] = None,
    status: Optional[str] = None,
    claims: dict = Depends(get_current_user_claims),
    db: Session = Depends(get_db)
):
    filter_data = {}
    if workerId: filter_data["workerId"] = workerId
    if projectId: filter_data["projectId"] = projectId
    if contractorId: filter_data["contractorId"] = contractorId
    if monthYear: filter_data["monthYear"] = monthYear
    if status: filter_data["status"] = status

    role = claims.get("role", "worker")
    user_id = claims.get("sub")

    records = payroll_service.get_payroll_records(db, filter_data, user_role=role, current_user_id=user_id)
    res = [{
        "id": r.id,
        "workerId": r.worker_id,
        "workerName": r.worker.name if r.worker else "Unknown Worker",
        "workerCategory": r.worker.category_name if r.worker else "Skilled Workers",
        "projectId": r.project_id,
        "projectName": r.project.name if r.project else (r.worker.assigned_project.name if (r.worker and r.worker.assigned_project) else "Unassigned"),
        "contractorId": r.contractor_id,
        "contractorName": r.contractor.user.name if (r.contractor and r.contractor.user) else (r.worker.contractor_name if r.worker else "Direct"),
        "monthYear": r.month_year,
        "payRate": r.pay_rate or 500.0,
        "workingDays": r.working_days or 0,
        "workingHours": r.working_hours or 0.0,
        "overtimeHours": r.overtime_hours or 0.0,
        "leaveDays": r.leave_days or 0,
        "estimatedPay": r.estimated_pay or 0.0,
        "status": r.status,
        "updatedAt": r.updated_at.isoformat() if r.updated_at else None
    } for r in records]
    return {"success": True, "data": res}

@router.get("/{payroll_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "contractor"]))])
def get_payroll_detail(payroll_id: str, db: Session = Depends(get_db)):
    from models import PayrollRecord
    r = db.query(PayrollRecord).filter(PayrollRecord.id == payroll_id).first()
    if not r:
        raise HTTPException(status_code=404, detail="Payroll record not found")
    res = {
        "id": r.id,
        "workerId": r.worker_id,
        "workerName": r.worker.name if r.worker else None,
        "projectId": r.project_id,
        "contractorId": r.contractor_id,
        "monthYear": r.month_year,
        "payRate": r.pay_rate,
        "workingDays": r.working_days,
        "workingHours": r.working_hours,
        "overtimeHours": r.overtime_hours,
        "leaveDays": r.leave_days,
        "estimatedPay": r.estimated_pay,
        "status": r.status
    }
    return {"success": True, "data": res}

@router.post("/", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager", "contractor"]))])
def generate_payroll(data: PayrollRecordCreate, db: Session = Depends(get_db)):
    record = payroll_service.generate_or_update_payroll(db, data.model_dump())
    return {
        "success": True,
        "message": f"Payroll generated for worker {record.worker.name if record.worker else record.worker_id} ({record.month_year}). Estimated pay: ₹{record.estimated_pay:,.2f}",
        "data": {
            "id": record.id,
            "workerId": record.worker_id,
            "estimatedPay": record.estimated_pay,
            "status": record.status
        }
    }

@router.put("/{payroll_id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def update_payroll_status(payroll_id: str, data: PayrollRecordUpdate, db: Session = Depends(get_db)):
    status_val = data.status or "Processing"
    rec = payroll_service.update_payroll_status(db, payroll_id, status_val)
    return {
        "success": True,
        "message": f"Payroll status updated to {rec.status}",
        "data": {"id": rec.id, "status": rec.status, "estimatedPay": rec.estimated_pay}
    }

