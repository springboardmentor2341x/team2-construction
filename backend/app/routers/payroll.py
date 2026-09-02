from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/payroll",
    tags=["Payroll"]
)


# ==========================
# CREATE PAYROLL
# ==========================

@router.post(
    "/",
    response_model=schemas.PayrollResponse
)
def create_payroll(
    payroll: schemas.PayrollCreate,
    db: Session = Depends(get_db)
):
    try:
        return crud.create_payroll(
            db,
            payroll
        )
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )


# ==========================
# GET ALL PAYROLL
# ==========================

@router.get(
    "/",
    response_model=list[schemas.PayrollResponse]
)
def get_payrolls(
    db: Session = Depends(get_db)
):
    return crud.get_payrolls(db)


# ==========================
# GET PAYROLL BY ID
# ==========================

@router.get(
    "/{payroll_id}",
    response_model=schemas.PayrollResponse
)
def get_payroll(
    payroll_id: int,
    db: Session = Depends(get_db)
):
    payroll = crud.get_payroll_by_id(
        db,
        payroll_id
    )

    if payroll is None:
        raise HTTPException(
            status_code=404,
            detail="Payroll record not found"
        )

    return payroll