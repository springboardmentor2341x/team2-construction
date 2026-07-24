from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import WorkerPayslipCreate, GenericResponse
from services import PaymentsService
from core.permissions import RoleChecker
from typing import Optional

router = APIRouter()
payments_service = PaymentsService()

@router.get("/")
def get_payslips(workerId: Optional[str] = None, db: Session = Depends(get_db)):
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

@router.post("/", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def create_payslip(data: WorkerPayslipCreate, db: Session = Depends(get_db)):
    payslip = payments_service.create_payslip(db, data.model_dump())
    return {"success": True, "data": {"id": payslip.id}}

@router.put("/{id}/pay", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def pay_payslip(id: str, db: Session = Depends(get_db)):
    payslip = payments_service.pay_payslip(db, id)
    return {"success": True, "message": "Worker payslip Paid successfully"}
