from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/equipment-utilization",
    tags=["Equipment Utilization"]
)


# ==========================
# CREATE UTILIZATION RECORD
# ==========================

@router.post("/", response_model=schemas.EquipmentUtilization)
def create_equipment_utilization(
    utilization: schemas.EquipmentUtilizationCreate,
    db: Session = Depends(get_db)
):
    return crud.create_equipment_utilization(
        db,
        utilization
    )


# ==========================
# GET ALL UTILIZATION
# ==========================

@router.get(
    "/",
    response_model=list[schemas.EquipmentUtilization]
)
def get_equipment_utilizations(
    db: Session = Depends(get_db)
):
    return crud.get_equipment_utilizations(db)


# ==========================
# GET UTILIZATION BY ID
# ==========================

@router.get(
    "/{utilization_id}",
    response_model=schemas.EquipmentUtilization
)
def get_equipment_utilization_by_id(
    utilization_id: int,
    db: Session = Depends(get_db)
):
    utilization = crud.get_equipment_utilization_by_id(
        db,
        utilization_id
    )

    if utilization is None:
        raise HTTPException(
            status_code=404,
            detail="Equipment utilization record not found"
        )

    return utilization


# ==========================
# UPDATE UTILIZATION
# ==========================

@router.put(
    "/{utilization_id}",
    response_model=schemas.EquipmentUtilization
)
def update_equipment_utilization(
    utilization_id: int,
    utilization: schemas.EquipmentUtilizationCreate,
    db: Session = Depends(get_db)
):
    updated = crud.update_equipment_utilization(
        db,
        utilization_id,
        utilization
    )

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Equipment utilization record not found"
        )

    return updated


# ==========================
# DELETE UTILIZATION
# ==========================

@router.delete("/{utilization_id}")
def delete_equipment_utilization(
    utilization_id: int,
    db: Session = Depends(get_db)
):
    deleted = crud.delete_equipment_utilization(
        db,
        utilization_id
    )

    if deleted is None:
        raise HTTPException(
            status_code=404,
            detail="Equipment utilization record not found"
        )

    return {
        "message": "Equipment utilization record deleted successfully"
    }