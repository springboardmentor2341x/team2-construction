from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/equipment-allocations",
    tags=["Equipment Allocations"]
)


@router.post("/", response_model=schemas.EquipmentAllocation)
def create_equipment_allocation(
    allocation: schemas.EquipmentAllocationCreate,
    db: Session = Depends(get_db)
):
    try:
        new_allocation = crud.create_equipment_allocation(db, allocation)

        notification = schemas.NotificationCreate(
            title="Equipment Allocated",
            message=f"Equipment has been allocated to project {allocation.project_id}"
        )

        crud.create_notification(db, notification)

        return new_allocation

    except ValueError as e:
        raise HTTPException(
            status_code=409,
            detail=str(e)
        )

@router.get("/", response_model=list[schemas.EquipmentAllocation])
def get_equipment_allocations(
    db: Session = Depends(get_db)
):
    return crud.get_equipment_allocations(db)


@router.get(
    "/{allocation_id}",
    response_model=schemas.EquipmentAllocation
)
def get_equipment_allocation(
    allocation_id: int,
    db: Session = Depends(get_db)
):
    allocation = crud.get_equipment_allocation_by_id(
        db,
        allocation_id
    )

    if allocation is None:
        raise HTTPException(
            status_code=404,
            detail="Equipment allocation not found"
        )

    return allocation


@router.put(
    "/{allocation_id}",
    response_model=schemas.EquipmentAllocation
)
def update_equipment_allocation(
    allocation_id: int,
    allocation: schemas.EquipmentAllocationCreate,
    db: Session = Depends(get_db)
):
    updated = crud.update_equipment_allocation(
        db,
        allocation_id,
        allocation
    )

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Equipment allocation not found"
        )

    return updated


@router.delete("/{allocation_id}")
def delete_equipment_allocation(
    allocation_id: int,
    db: Session = Depends(get_db)
):
    deleted = crud.delete_equipment_allocation(
        db,
        allocation_id
    )

    if deleted is None:
        raise HTTPException(
            status_code=404,
            detail="Equipment allocation not found"
        )

    return {
        "message": "Equipment allocation deleted successfully"
    }