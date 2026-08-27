from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/resources",
    tags=["Resources"]
)


# ==========================
# CREATE RESOURCE
# ==========================

@router.post("/", response_model=schemas.Resource)
def create_resource(
    resource: schemas.ResourceCreate,
    db: Session = Depends(get_db)
):
    return crud.create_resource(db, resource)


# ==========================
# GET ALL RESOURCES
# ==========================

@router.get("/", response_model=list[schemas.Resource])
def get_resources(
    db: Session = Depends(get_db)
):
    return crud.get_resources(db)


# ==========================
# GET RESOURCE BY ID
# ==========================

@router.get("/{resource_id}", response_model=schemas.Resource)
def get_resource_by_id(
    resource_id: int,
    db: Session = Depends(get_db)
):
    resource = crud.get_resource_by_id(db, resource_id)

    if resource is None:
        raise HTTPException(
            status_code=404,
            detail="Resource not found"
        )

    return resource


# ==========================
# UPDATE RESOURCE
# ==========================

@router.put("/{resource_id}", response_model=schemas.Resource)
def update_resource(
    resource_id: int,
    resource: schemas.ResourceCreate,
    db: Session = Depends(get_db)
):
    updated_resource = crud.update_resource(
        db,
        resource_id,
        resource
    )

    if updated_resource is None:
        raise HTTPException(
            status_code=404,
            detail="Resource not found"
        )

    return updated_resource


# ==========================
# DELETE RESOURCE
# ==========================

@router.delete("/{resource_id}")
def delete_resource(
    resource_id: int,
    db: Session = Depends(get_db)
):
    deleted_resource = crud.delete_resource(
        db,
        resource_id
    )

    if deleted_resource is None:
        raise HTTPException(
            status_code=404,
            detail="Resource not found"
        )

    return {
        "message": "Resource deleted successfully"
    }