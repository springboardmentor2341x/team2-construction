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
    ProjectBudgetSummary, CostEstimateResponse, CostEstimateCreate,
    BudgetAllocationUpdate, ExpenseRecordUpdate, CostEstimateUpdate, PlannedBudgetUpdate
)
from models import BudgetCategory, BudgetAllocation, ExpenseRecord, ProcurementInvoice, PayrollRecord, ResourceUtilization, CostEstimate

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
    if current_user.get("role") != "admin":
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

    if current_user.get("role") not in ["admin", "project_manager"]:
        raise HTTPException(status_code=403, detail="Not authorized to view financial data")
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
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
            eq_costs += (u.operating_hours * u.resource.hourly_cost)
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

    cost_estimates = db.query(CostEstimate).filter(CostEstimate.project_id == project_id).all()
    total_estimated = sum(c.estimated_amount for c in cost_estimates)

    return ProjectBudgetSummary(
        project_id=project.id,
        total_budget=project.budget,
        total_allocated=total_allocated,
        total_spent=total_spent,
        total_estimated=total_estimated,
        remaining_budget=project.budget - total_spent,
        burn_rate=burn_rate,
        allocations=allocations,
        expenses=expenses,
        cost_estimates=cost_estimates,
        labor_costs=labor_costs,
        material_costs=material_costs,
        equipment_costs=equipment_costs,
        other_costs=other_costs
    )

@router.get("/projects/{project_id}/allocations", response_model=List[BudgetAllocationResponse])
def get_budget_allocations(project_id: str, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized for this project")
    return db.query(BudgetAllocation).filter(BudgetAllocation.project_id == project_id).all()

@router.post("/projects/{project_id}/allocations", response_model=BudgetAllocationResponse)
def create_budget_allocation(project_id: str, data: BudgetAllocationCreate, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    if current_user.get("role") not in ["admin", "project_manager"]:
        raise HTTPException(status_code=403, detail="Not authorized")
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized for this project")
    
    alloc = BudgetAllocation(
        id=f"BA-{uuid.uuid4().hex[:6].upper()}",
        project_id=project_id,
        category_id=data.category_id,
        allocated_amount=data.allocated_amount,
        allocation_date=data.allocation_date,
        description=data.description
    )
    db.add(alloc)
    db.commit()
    db.refresh(alloc)
    return alloc

@router.post("/projects/{project_id}/expenses", response_model=ExpenseRecordResponse)
def create_expense(project_id: str, data: ExpenseRecordCreate, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    if current_user.get("role") not in ["admin", "project_manager"]:
        raise HTTPException(status_code=403, detail="Not authorized")
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized for this project")
    
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

@router.get("/projects/{project_id}/cost-estimates", response_model=List[CostEstimateResponse])
def get_cost_estimates(project_id: str, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized for this project")
    return db.query(CostEstimate).filter(CostEstimate.project_id == project_id).all()

@router.post("/projects/{project_id}/cost-estimates", response_model=CostEstimateResponse)
def create_cost_estimate(project_id: str, data: CostEstimateCreate, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    if current_user.get("role") not in ["admin", "project_manager"]:
        raise HTTPException(status_code=403, detail="Not authorized")
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized for this project")
    
    estimate = CostEstimate(
        id=f"EST-{uuid.uuid4().hex[:6].upper()}",
        project_id=project_id,
        category_id=data.category_id,
        activity=data.activity,
        description=data.description,
        estimated_amount=data.estimated_amount,
        created_by_id=current_user.get("sub")
    )
    db.add(estimate)
    db.commit()
    db.refresh(estimate)
    return estimate

@router.put("/projects/{project_id}/planned-budget", response_model=ProjectBudgetSummary)
def update_planned_budget(project_id: str, data: PlannedBudgetUpdate, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    if current_user.get("role") not in ["admin", "project_manager"]:
        raise HTTPException(status_code=403, detail="Not authorized")
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized for this project")
    
    project.budget = data.total_budget
    db.commit()
    return get_project_budget_summary(project_id, db, current_user)

@router.put("/allocations/{allocation_id}", response_model=BudgetAllocationResponse)
def update_budget_allocation(allocation_id: str, data: BudgetAllocationUpdate, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    alloc = db.query(BudgetAllocation).filter(BudgetAllocation.id == allocation_id).first()
    if not alloc:
        raise HTTPException(status_code=404, detail="Allocation not found")
    project = db.query(Project).filter(Project.id == alloc.project_id).first()
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")
    
    if data.category_id is not None: alloc.category_id = data.category_id
    if data.allocated_amount is not None: alloc.allocated_amount = data.allocated_amount
    if data.allocation_date is not None: alloc.allocation_date = data.allocation_date
    if data.description is not None: alloc.description = data.description
    
    db.commit()
    db.refresh(alloc)
    return alloc

@router.delete("/allocations/{allocation_id}")
def delete_budget_allocation(allocation_id: str, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    alloc = db.query(BudgetAllocation).filter(BudgetAllocation.id == allocation_id).first()
    if not alloc:
        raise HTTPException(status_code=404, detail="Allocation not found")
    project = db.query(Project).filter(Project.id == alloc.project_id).first()
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")
    db.delete(alloc)
    db.commit()
    return {"success": True}

@router.put("/expenses/{expense_id}", response_model=ExpenseRecordResponse)
def update_expense(expense_id: str, data: ExpenseRecordUpdate, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    exp = db.query(ExpenseRecord).filter(ExpenseRecord.id == expense_id).first()
    if not exp:
        raise HTTPException(status_code=404, detail="Expense not found")
    project = db.query(Project).filter(Project.id == exp.project_id).first()
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")
    
    if data.category_id is not None: exp.category_id = data.category_id
    if data.description is not None: exp.description = data.description
    if data.amount is not None: exp.amount = data.amount
    if data.expense_date is not None: exp.expense_date = data.expense_date
    if data.status is not None: exp.status = data.status
    
    db.commit()
    db.refresh(exp)
    return exp

@router.delete("/expenses/{expense_id}")
def delete_expense(expense_id: str, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    exp = db.query(ExpenseRecord).filter(ExpenseRecord.id == expense_id).first()
    if not exp:
        raise HTTPException(status_code=404, detail="Expense not found")
    project = db.query(Project).filter(Project.id == exp.project_id).first()
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")
    db.delete(exp)
    db.commit()
    return {"success": True}

@router.put("/cost-estimates/{estimate_id}", response_model=CostEstimateResponse)
def update_cost_estimate(estimate_id: str, data: CostEstimateUpdate, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    est = db.query(CostEstimate).filter(CostEstimate.id == estimate_id).first()
    if not est:
        raise HTTPException(status_code=404, detail="Cost estimate not found")
    project = db.query(Project).filter(Project.id == est.project_id).first()
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")
    
    if data.category_id is not None: est.category_id = data.category_id
    if data.activity is not None: est.activity = data.activity
    if data.description is not None: est.description = data.description
    if data.estimated_amount is not None: est.estimated_amount = data.estimated_amount
    
    db.commit()
    db.refresh(est)
    return est

@router.delete("/cost-estimates/{estimate_id}")
def delete_cost_estimate(estimate_id: str, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    est = db.query(CostEstimate).filter(CostEstimate.id == estimate_id).first()
    if not est:
        raise HTTPException(status_code=404, detail="Cost estimate not found")
    project = db.query(Project).filter(Project.id == est.project_id).first()
    if current_user.get("role") == "project_manager" and project.manager_id != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")
    db.delete(est)
    db.commit()
    return {"success": True}
