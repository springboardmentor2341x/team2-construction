from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/material-requests",
    tags=["Material Requests"]
)


# ==========================
# CREATE MATERIAL REQUEST
# ==========================

@router.post(
    "/",
    response_model=schemas.MaterialRequest
)
def create_material_request(
    material_request: schemas.MaterialRequestCreate,
    db: Session = Depends(get_db)
):
    return crud.create_material_request(
        db,
        material_request
    )


# ==========================
# GET ALL MATERIAL REQUESTS
# ==========================

@router.get(
    "/",
    response_model=list[schemas.MaterialRequest]
)
def get_material_requests(
    db: Session = Depends(get_db)
):
    return crud.get_material_requests(db)


# ==========================
# GET MATERIAL REQUEST BY ID
# ==========================

@router.get(
    "/{request_id}",
    response_model=schemas.MaterialRequest
)
def get_material_request(
    request_id: int,
    db: Session = Depends(get_db)
):
    material_request = crud.get_material_request_by_id(
        db,
        request_id
    )

    if material_request is None:
        raise HTTPException(
            status_code=404,
            detail="Material request not found"
        )

    return material_request


# ==========================
# UPDATE MATERIAL REQUEST
# ==========================

@router.put(
    "/{request_id}",
    response_model=schemas.MaterialRequest
)
def update_material_request(
    request_id: int,
    material_request: schemas.MaterialRequestCreate,
    db: Session = Depends(get_db)
):
    updated = crud.update_material_request(
        db,
        request_id,
        material_request
    )

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Material request not found"
        )

    return updated


# ==========================
# DELETE MATERIAL REQUEST
# ==========================

@router.delete("/{request_id}")
def delete_material_request(
    request_id: int,
    db: Session = Depends(get_db)
):
    deleted = crud.delete_material_request(
        db,
        request_id
    )

    if deleted is None:
        raise HTTPException(
            status_code=404,
            detail="Material request not found"
        )

    return {
        "message": "Material request deleted successfully"
    }
# ==========================
# APPROVE / REJECT MATERIAL REQUEST
# ==========================

@router.put("/{request_id}/status")
def update_material_request_status(
    request_id: int,
    status: str,
    db: Session = Depends(get_db)
):
    material_request = crud.get_material_request_by_id(
        db,
        request_id
    )

    if material_request is None:
        raise HTTPException(
            status_code=404,
            detail="Material request not found"
        )

    if status not in ["Approved", "Rejected"]:
        raise HTTPException(
            status_code=400,
            detail="Status must be Approved or Rejected"
        )

    material_request.status = status

    db.commit()
    db.refresh(material_request)

    return material_request
# ==========================
# FULFILL MATERIAL REQUEST
# ==========================

@router.put("/{request_id}/fulfill")
def fulfill_material_request(
    request_id: int,
    db: Session = Depends(get_db)
):
    material_request = crud.get_material_request_by_id(
        db,
        request_id
    )

    if material_request is None:
        raise HTTPException(
            status_code=404,
            detail="Material request not found"
        )

    # Request must be approved first
    if material_request.status != "Approved":
        raise HTTPException(
            status_code=400,
            detail="Only approved material requests can be fulfilled"
        )

    allocation = schemas.MaterialAllocationCreate(
        project_id=material_request.project_id,
        inventory_id=material_request.inventory_id,
        allocated_quantity=material_request.requested_quantity,
        allocation_date=material_request.required_date,
        work_activity=material_request.purpose,
        responsible_user=material_request.requested_by,
        status="Allocated"
    )

    try:
        db_allocation = crud.create_material_allocation(
            db,
            allocation
        )
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

    if db_allocation is None:
        raise HTTPException(
            status_code=404,
            detail="Inventory item not found"
        )

    material_request.status = "Fulfilled"

    db.commit()
    db.refresh(material_request)

    return {
        "message": "Material request fulfilled successfully",
        "request_id": material_request.id,
        "status": material_request.status,
        "allocation_id": db_allocation.id,
        "allocated_quantity": db_allocation.allocated_quantity
    }