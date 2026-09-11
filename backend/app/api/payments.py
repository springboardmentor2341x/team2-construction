from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import WorkerPayslipCreate, GenericResponse
from services import PaymentsService
from core.permissions import RoleChecker
from core.auth import oauth2_scheme
from core.security import decode_token
from models import User
from typing import Optional

router = APIRouter()
payments_service = PaymentsService()

@router.get("")
def get_payslips(workerId: Optional[str] = None, token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    
    user_id = payload.get("sub")
    user = db.query(User).filter(User.id == user_id).first()
    
    if user and user.role.name == "worker" and user.worker_profile:
        workerId = user.worker_profile.id

    payslips = payments_service.get_payslips(db, workerId)
    res = [{
        "id": p.id,
        "workerId": p.worker_id,
        "month": p.month,
        "basicSalary": p.basic_salary,
        "overtimePay": p.overtime_pay,
        "deductions": p.deductions,
        "netPay": p.net_pay,
        "status": p.status,
        "paymentDate": p.payment_date.isoformat().split("T")[0] if p.payment_date else None
    } for p in payslips]
    return {"success": True, "data": res}

@router.post("", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def create_payslip(data: WorkerPayslipCreate, db: Session = Depends(get_db)):
    payslip = payments_service.create_payslip(db, data.model_dump())
    return {"success": True, "data": {"id": payslip.id}}

@router.put("/{id}/pay", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def pay_payslip(id: str, db: Session = Depends(get_db)):
    payslip = payments_service.pay_payslip(db, id)
    return {"success": True, "message": "Worker payslip Paid successfully"}
