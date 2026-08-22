from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/equipment",
    tags=["Equipment"]
)


# ==========================
# CREATE EQUIPMENT
# ==========================

@router.post("/", response_model=schemas.Equipment)
def create_equipment(
    equipment: schemas.EquipmentCreate,
    db: Session = Depends(get_db)
):
    return crud.create_equipment(db, equipment)


# ==========================
# GET ALL EQUIPMENT
# ==========================

@router.get("/", response_model=list[schemas.Equipment])
def get_equipment(
    db: Session = Depends(get_db)
):
    return crud.get_equipment(db)


# ==========================
# GET EQUIPMENT BY ID
# ==========================

@router.get("/{equipment_id}", response_model=schemas.Equipment)
def get_equipment_by_id(
    equipment_id: int,
    db: Session = Depends(get_db)
):
    equipment = crud.get_equipment_by_id(db, equipment_id)

    if equipment is None:
        raise HTTPException(
            status_code=404,
            detail="Equipment not found"
        )

    return equipment


# ==========================
# UPDATE EQUIPMENT
# ==========================

@router.put("/{equipment_id}", response_model=schemas.Equipment)
def update_equipment(
    equipment_id: int,
    equipment: schemas.EquipmentCreate,
    db: Session = Depends(get_db)
):
    updated_equipment = crud.update_equipment(
        db,
        equipment_id,
        equipment
    )

    if updated_equipment is None:
        raise HTTPException(
            status_code=404,
            detail="Equipment not found"
        )

    return updated_equipment


# ==========================
# DELETE EQUIPMENT
# ==========================

@router.delete("/{equipment_id}")
def delete_equipment(
    equipment_id: int,
    db: Session = Depends(get_db)
):
    deleted_equipment = crud.delete_equipment(
        db,
        equipment_id
    )

    if deleted_equipment is None:
        raise HTTPException(
            status_code=404,
            detail="Equipment not found"
        )

    return {
        "message": "Equipment deleted successfully"
    }