from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app import schemas, crud, models
from app.auth import role_required


router = APIRouter(
    prefix="/budgets",
    tags=["Budget Management"]
)


# ==========================
# CREATE BUDGET
# ==========================

@router.post("/", response_model=schemas.BudgetResponse)
def create_budget(
    budget: schemas.BudgetCreate,
    db: Session = Depends(get_db),
    current_user=Depends(
        role_required(["Administrator", "Project Manager", "Accountant"])
    )
):
    existing = crud.get_budget_by_project(db, budget.project_id)

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Budget already exists for this project"
        )

    new_budget = crud.create_budget(db, budget)

    notification = schemas.NotificationCreate(
        title="Budget Created",
        message=f"Budget created successfully for project {budget.project_id}"
    )

    crud.create_notification(db, notification)

    return new_budget


# ==========================
# GET ALL BUDGETS
# ==========================

@router.get("/", response_model=list[schemas.BudgetResponse])
def get_budgets(
    db: Session = Depends(get_db)
):
    return crud.get_budgets(db)


# ==========================
# GET BUDGET BY PROJECT
# ==========================

@router.get("/project/{project_id}", response_model=schemas.BudgetResponse)
def get_project_budget(
    project_id: int,
    db: Session = Depends(get_db)
):
    budget = crud.get_budget_by_project(db, project_id)

    if not budget:
        raise HTTPException(
            status_code=404,
            detail="Budget not found for this project"
        )

    return budget


# ==========================
# BUDGET MONITORING
# ==========================

@router.get("/monitor/{project_id}")
def budget_monitoring(
    project_id: int,
    db: Session = Depends(get_db)
):
    budget = db.query(models.Budget).filter(
        models.Budget.project_id == project_id
    ).first()

    if not budget:
        raise HTTPException(
            status_code=404,
            detail="Budget not found for this project"
        )

    estimated_cost = db.query(
        func.coalesce(
            func.sum(models.CostEstimate.estimated_amount),
            0
        )
    ).filter(
        models.CostEstimate.project_id == project_id
    ).scalar()

    actual_expenses = db.query(
        func.coalesce(
            func.sum(models.Expense.amount),
            0
        )
    ).filter(
        models.Expense.project_id == project_id
    ).scalar()

    remaining_budget = budget.total_budget - actual_expenses

    utilization_percentage = (
        (actual_expenses / budget.total_budget) * 100
        if budget.total_budget > 0
        else 0
    )

    return {
        "project_id": project_id,
        "total_budget": budget.total_budget,
        "estimated_cost": estimated_cost,
        "actual_expenses": actual_expenses,
        "remaining_budget": remaining_budget,
        "budget_utilization_percentage": round(
            utilization_percentage, 2
        )
    }


# ==========================
# FINANCIAL SUMMARY
# ==========================

@router.get("/summary/{project_id}")
def financial_summary(
    project_id: int,
    db: Session = Depends(get_db)
):
    budget = db.query(models.Budget).filter(
        models.Budget.project_id == project_id
    ).first()

    if not budget:
        raise HTTPException(
            status_code=404,
            detail="Budget not found for this project"
        )

    categories = [
        "Labor",
        "Material",
        "Equipment",
        "Transportation",
        "Maintenance",
        "Administrative"
    ]

    summary = []

    for category in categories:

        estimated = db.query(
            func.coalesce(
                func.sum(models.CostEstimate.estimated_amount),
                0
            )
        ).filter(
            models.CostEstimate.project_id == project_id,
            models.CostEstimate.category == category
        ).scalar()

        actual = db.query(
            func.coalesce(
                func.sum(models.Expense.amount),
                0
            )
        ).filter(
            models.Expense.project_id == project_id,
            models.Expense.category == category
        ).scalar()

        summary.append({
            "category": category,
            "estimated_cost": estimated,
            "actual_expense": actual,
            "difference": estimated - actual
        })

    return {
        "project_id": project_id,
        "total_budget": budget.total_budget,
        "category_summary": summary
    }


# ==========================
# GET BUDGET BY ID
# ==========================

@router.get("/{budget_id}", response_model=schemas.BudgetResponse)
def get_budget(
    budget_id: int,
    db: Session = Depends(get_db)
):
    budget = crud.get_budget(db, budget_id)

    if not budget:
        raise HTTPException(
            status_code=404,
            detail="Budget not found"
        )

    return budget


# ==========================
# UPDATE BUDGET
# ==========================

@router.put("/{budget_id}", response_model=schemas.BudgetResponse)
def update_budget(
    budget_id: int,
    budget: schemas.BudgetBase,
    db: Session = Depends(get_db),
    current_user=Depends(
        role_required(["Administrator", "Project Manager", "Accountant"])
    )
):
    updated = crud.update_budget(db, budget_id, budget)

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Budget not found"
        )

    return updated


# ==========================
# DELETE BUDGET
# ==========================

@router.delete("/{budget_id}")
def delete_budget(
    budget_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(
        role_required(["Administrator", "Project Manager"])
    )
):
    deleted = crud.delete_budget(db, budget_id)

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Budget not found"
        )

    return {
        "message": "Budget deleted successfully"
    }