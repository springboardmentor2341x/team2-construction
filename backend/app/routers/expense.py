from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud
from app.auth import role_required


router = APIRouter(
    prefix="/expenses",
    tags=["Expense Tracking"]
)


# ==========================
# CREATE EXPENSE
# ==========================

@router.post("/", response_model=schemas.ExpenseResponse)
def create_expense(
    expense: schemas.ExpenseCreate,
    db: Session = Depends(get_db),
    current_user=Depends(
        role_required(["Administrator", "Project Manager", "Accountant"])
    )
):
    new_expense = crud.create_expense(db, expense)

    notification = schemas.NotificationCreate(
        title="Expense Recorded",
        message=f"Expense of ₹{expense.amount} recorded for project {expense.project_id}"
    )

    crud.create_notification(db, notification)

    return new_expense


# ==========================
# GET ALL EXPENSES
# ==========================

@router.get("/", response_model=list[schemas.ExpenseResponse])
def get_expenses(
    db: Session = Depends(get_db)
):
    return crud.get_expenses(db)


# ==========================
# GET EXPENSES BY PROJECT
# ==========================

@router.get(
    "/project/{project_id}",
    response_model=list[schemas.ExpenseResponse]
)
def get_project_expenses(
    project_id: int,
    db: Session = Depends(get_db)
):
    return crud.get_expenses_by_project(db, project_id)


# ==========================
# GET EXPENSE BY ID
# ==========================

@router.get("/{expense_id}", response_model=schemas.ExpenseResponse)
def get_expense(
    expense_id: int,
    db: Session = Depends(get_db)
):
    expense = crud.get_expense(db, expense_id)

    if not expense:
        raise HTTPException(
            status_code=404,
            detail="Expense not found"
        )

    return expense


# ==========================
# UPDATE EXPENSE
# ==========================

@router.put("/{expense_id}", response_model=schemas.ExpenseResponse)
def update_expense(
    expense_id: int,
    expense: schemas.ExpenseCreate,
    db: Session = Depends(get_db),
    current_user=Depends(
        role_required(["Administrator", "Project Manager", "Accountant"])
    )
):
    updated_expense = crud.update_expense(
        db,
        expense_id,
        expense
    )

    if not updated_expense:
        raise HTTPException(
            status_code=404,
            detail="Expense not found"
        )

    return updated_expense


# ==========================
# DELETE EXPENSE
# ==========================

@router.delete("/{expense_id}")
def delete_expense(
    expense_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(
        role_required(["Administrator", "Project Manager"])
    )
):
    deleted_expense = crud.delete_expense(
        db,
        expense_id
    )

    if not deleted_expense:
        raise HTTPException(
            status_code=404,
            detail="Expense not found"
        )

    return {
        "message": "Expense deleted successfully"
    }