from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/cost-estimates",
    tags=["Cost Estimation"]
)


@router.post("/", response_model=schemas.CostEstimateResponse)
def create_cost_estimate(
    estimate: schemas.CostEstimateCreate,
    db: Session = Depends(get_db)
):
    new_estimate = crud.create_cost_estimate(db, estimate)

    notification = schemas.NotificationCreate(
        title="Cost Estimate Created",
        message=f"Cost estimate of ₹{estimate.estimated_amount} created for project {estimate.project_id}"
    )

    crud.create_notification(db, notification)

    return new_estimate


@router.get("/", response_model=list[schemas.CostEstimateResponse])
def get_cost_estimates(
    db: Session = Depends(get_db)
):
    return crud.get_cost_estimates(db)


@router.get("/{estimate_id}", response_model=schemas.CostEstimateResponse)
def get_cost_estimate(
    estimate_id: int,
    db: Session = Depends(get_db)
):
    estimate = crud.get_cost_estimate(db, estimate_id)

    if not estimate:
        raise HTTPException(
            status_code=404,
            detail="Cost estimate not found"
        )

    return estimate


@router.get(
    "/project/{project_id}",
    response_model=list[schemas.CostEstimateResponse]
)
def get_project_cost_estimates(
    project_id: int,
    db: Session = Depends(get_db)
):
    return crud.get_cost_estimates_by_project(db, project_id)