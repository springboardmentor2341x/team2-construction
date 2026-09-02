from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/expenses",
    tags=["Expense Tracking"]
)


@router.post("/", response_model=schemas.ExpenseResponse)
def create_expense(
    expense: schemas.ExpenseCreate,
    db: Session = Depends(get_db)
):
    new_expense = crud.create_expense(db, expense)

    notification = schemas.NotificationCreate(
        title="Expense Recorded",
        message=f"Expense of ₹{expense.amount} recorded for project {expense.project_id}"
    )

    crud.create_notification(db, notification)

    return new_expense

@router.get("/", response_model=list[schemas.ExpenseResponse])
def get_expenses(
    db: Session = Depends(get_db)
):
    return crud.get_expenses(db)


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


@router.get(
    "/project/{project_id}",
    response_model=list[schemas.ExpenseResponse]
)
def get_project_expenses(
    project_id: int,
    db: Session = Depends(get_db)
):
    return crud.get_expenses_by_project(db, project_id)