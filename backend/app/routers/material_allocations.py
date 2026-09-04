from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/material-allocations",
    tags=["Material Allocations"]
)


# ==========================
# CREATE MATERIAL ALLOCATION
# ==========================

@router.post(
    "/",
    response_model=schemas.MaterialAllocation
)
def create_material_allocation(
    allocation: schemas.MaterialAllocationCreate,
    db: Session = Depends(get_db)
):
    try:
        result = crud.create_material_allocation(
            db,
            allocation
        )

        if result is None:
            raise HTTPException(
                status_code=404,
                detail="Inventory item not found"
            )

        notification = schemas.NotificationCreate(
            title="Material Allocated",
            message=f"Material has been allocated to project {allocation.project_id}"
        )

        crud.create_notification(db, notification)

        return result

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
# ==========================
# GET ALL MATERIAL ALLOCATIONS
# ==========================

@router.get(
    "/",
    response_model=list[schemas.MaterialAllocation]
)
def get_material_allocations(
    db: Session = Depends(get_db)
):
    return crud.get_material_allocations(db)


# ==========================
# GET ALLOCATION BY ID
# ==========================

@router.get(
    "/{allocation_id}",
    response_model=schemas.MaterialAllocation
)
def get_material_allocation(
    allocation_id: int,
    db: Session = Depends(get_db)
):
    allocation = crud.get_material_allocation_by_id(
        db,
        allocation_id
    )

    if allocation is None:
        raise HTTPException(
            status_code=404,
            detail="Material allocation not found"
        )

    return allocation


# ==========================
# UPDATE MATERIAL ALLOCATION
# ==========================

@router.put(
    "/{allocation_id}",
    response_model=schemas.MaterialAllocation
)
def update_material_allocation(
    allocation_id: int,
    allocation: schemas.MaterialAllocationCreate,
    db: Session = Depends(get_db)
):
    updated = crud.update_material_allocation(
        db,
        allocation_id,
        allocation
    )

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Material allocation not found"
        )

    return updated


# ==========================
# DELETE MATERIAL ALLOCATION
# ==========================

@router.delete("/{allocation_id}")
def delete_material_allocation(
    allocation_id: int,
    db: Session = Depends(get_db)
):
    deleted = crud.delete_material_allocation(
        db,
        allocation_id
    )

    if deleted is None:
        raise HTTPException(
            status_code=404,
            detail="Material allocation not found"
        )

    return {
        "message": "Material allocation deleted successfully"
    }