from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database.session import get_db
from models import User, Project
from core.auth import oauth2_scheme
from core.security import decode_token
import uuid
import datetime

from schemas.budget import (
    BudgetCategoryResponse, BudgetCategoryCreate,
    BudgetAllocationResponse, BudgetAllocationCreate,
    ExpenseRecordResponse, ExpenseRecordCreate,
    ProjectBudgetSummary
)
from models import BudgetCategory, BudgetAllocation, ExpenseRecord, ProcurementInvoice, PayrollRecord, ResourceUtilization

router = APIRouter(prefix="/api/budget", tags=["budget"])

def get_current_user(token: str = Depends(oauth2_scheme)) -> dict:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return payload

@router.get("/categories", response_model=List[BudgetCategoryResponse])
def get_budget_categories(db: Session = Depends(get_db)):
    return db.query(BudgetCategory).all()

@router.post("/categories", response_model=BudgetCategoryResponse)
def create_budget_category(data: BudgetCategoryCreate, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    if current_user.get("role") != "Administrator":
        raise HTTPException(status_code=403, detail="Only Admins can create budget categories")
    cat = BudgetCategory(id=f"CAT-{uuid.uuid4().hex[:6].upper()}", name=data.name, description=data.description)
    db.add(cat)
    db.commit()
    db.refresh(cat)
    return cat

@router.get("/projects/{project_id}/summary", response_model=ProjectBudgetSummary)
def get_project_budget_summary(project_id: str, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    if current_user.get("role") not in ["Administrator", "Project Manager"]:
        raise HTTPException(status_code=403, detail="Not authorized to view financial data")
    if current_user.get("role") == "Project Manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized to view financial data for this project")

    # Fetch dynamic expenses
    labor_costs = sum(r.estimated_pay for r in db.query(PayrollRecord).filter(PayrollRecord.project_id == project_id, PayrollRecord.status == "Approved").all())
    material_costs = sum(i.invoice_amount for i in db.query(ProcurementInvoice).filter(ProcurementInvoice.project_id == project_id, ProcurementInvoice.invoice_status == "Approved").all())
    equipment_costs = sum(u.total_cost for u in db.query(ResourceUtilization).filter(ResourceUtilization.project_id == project_id).all() if hasattr(u, 'total_cost')) # fallback logic depending on model
    
    # Let's refine equipment costs if total_cost doesn't exist
    eq_costs = 0
    utilizations = db.query(ResourceUtilization).filter(ResourceUtilization.project_id == project_id).all()
    for u in utilizations:
        if u.resource and hasattr(u.resource, 'hourly_cost') and u.resource.hourly_cost:
            eq_costs += (u.hours_used * u.resource.hourly_cost)
    equipment_costs = eq_costs
    
    # Ad-hoc expenses
    expenses = db.query(ExpenseRecord).filter(ExpenseRecord.project_id == project_id).all()
    other_costs = sum(e.amount for e in expenses if e.status == "Approved")

    total_spent = labor_costs + material_costs + equipment_costs + other_costs

    allocations = db.query(BudgetAllocation).filter(BudgetAllocation.project_id == project_id).all()
    total_allocated = sum(a.allocated_amount for a in allocations)

    # Calculate Burn Rate (monthly)
    # Simple calculation based on total spent / months elapsed since start
    months_elapsed = max(1, (datetime.datetime.utcnow().date() - project.start_date.date()).days / 30.0)
    burn_rate = total_spent / months_elapsed

    return ProjectBudgetSummary(
        project_id=project.id,
        total_budget=project.budget,
        total_allocated=total_allocated,
        total_spent=total_spent,
        remaining_budget=project.budget - total_spent,
        burn_rate=burn_rate,
        allocations=allocations,
        expenses=expenses,
        labor_costs=labor_costs,
        material_costs=material_costs,
        equipment_costs=equipment_costs,
        other_costs=other_costs
    )

@router.get("/projects/{project_id}/allocations", response_model=List[BudgetAllocationResponse])
def get_budget_allocations(project_id: str, db: Session = Depends(get_db)):
    return db.query(BudgetAllocation).filter(BudgetAllocation.project_id == project_id).all()

@router.post("/projects/{project_id}/allocations", response_model=BudgetAllocationResponse)
def create_budget_allocation(project_id: str, data: BudgetAllocationCreate, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    if current_user.get("role") not in ["Administrator", "Project Manager"]:
        raise HTTPException(status_code=403, detail="Not authorized")
    
    alloc = BudgetAllocation(
        id=f"BA-{uuid.uuid4().hex[:6].upper()}",
        project_id=project_id,
        category_id=data.category_id,
        allocated_amount=data.allocated_amount
    )
    db.add(alloc)
    db.commit()
    db.refresh(alloc)
    return alloc

@router.post("/projects/{project_id}/expenses", response_model=ExpenseRecordResponse)
def create_expense(project_id: str, data: ExpenseRecordCreate, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    if current_user.get("role") not in ["Administrator", "Project Manager"]:
        raise HTTPException(status_code=403, detail="Not authorized")
    
    expense = ExpenseRecord(
        id=f"EXP-{uuid.uuid4().hex[:6].upper()}",
        project_id=project_id,
        category_id=data.category_id,
        description=data.description,
        amount=data.amount,
        expense_date=data.expense_date,
        recorded_by_id=current_user.get("sub")
    )
    db.add(expense)
    db.commit()
    db.refresh(expense)
    return expense
