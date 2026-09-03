from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud
from app.auth import role_required


router = APIRouter(
    prefix="/cost-estimates",
    tags=["Cost Estimation"]
)


# ==========================
# CREATE COST ESTIMATE
# ==========================

@router.post("/", response_model=schemas.CostEstimateResponse)
def create_cost_estimate(
    estimate: schemas.CostEstimateCreate,
    db: Session = Depends(get_db),
    current_user=Depends(
        role_required(["Administrator", "Project Manager", "Accountant"])
    )
):
    new_estimate = crud.create_cost_estimate(db, estimate)

    notification = schemas.NotificationCreate(
        title="Cost Estimate Created",
        message=f"Cost estimate of ₹{estimate.estimated_amount} created for project {estimate.project_id}"
    )

    crud.create_notification(db, notification)

    return new_estimate


# ==========================
# GET ALL COST ESTIMATES
# ==========================

@router.get("/", response_model=list[schemas.CostEstimateResponse])
def get_cost_estimates(
    db: Session = Depends(get_db)
):
    return crud.get_cost_estimates(db)


# ==========================
# GET COST ESTIMATES BY PROJECT
# ==========================

@router.get(
    "/project/{project_id}",
    response_model=list[schemas.CostEstimateResponse]
)
def get_project_cost_estimates(
    project_id: int,
    db: Session = Depends(get_db)
):
    return crud.get_cost_estimates_by_project(db, project_id)


# ==========================
# GET COST ESTIMATE BY ID
# ==========================

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


# ==========================
# UPDATE COST ESTIMATE
# ==========================

@router.put("/{estimate_id}", response_model=schemas.CostEstimateResponse)
def update_cost_estimate(
    estimate_id: int,
    estimate: schemas.CostEstimateCreate,
    db: Session = Depends(get_db),
    current_user=Depends(
        role_required(["Administrator", "Project Manager", "Accountant"])
    )
):
    updated_estimate = crud.update_cost_estimate(
        db,
        estimate_id,
        estimate
    )

    if not updated_estimate:
        raise HTTPException(
            status_code=404,
            detail="Cost estimate not found"
        )

    return updated_estimate


# ==========================
# DELETE COST ESTIMATE
# ==========================

@router.delete("/{estimate_id}")
def delete_cost_estimate(
    estimate_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(
        role_required(["Administrator", "Project Manager"])
    )
):
    deleted_estimate = crud.delete_cost_estimate(
        db,
        estimate_id
    )

    if not deleted_estimate:
        raise HTTPException(
            status_code=404,
            detail="Cost estimate not found"
        )

    return {
        "message": "Cost estimate deleted successfully"
    }