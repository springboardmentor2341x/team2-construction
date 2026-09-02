from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/vendors",
    tags=["Vendors"]
)


# ==========================
# CREATE VENDOR
# ==========================

@router.post(
    "/",
    response_model=schemas.VendorResponse
)
def create_vendor(
    vendor: schemas.VendorCreate,
    db: Session = Depends(get_db)
):
    return crud.create_vendor(db, vendor)


# ==========================
# GET ALL VENDORS
# ==========================

@router.get(
    "/",
    response_model=list[schemas.VendorResponse]
)
def get_vendors(
    db: Session = Depends(get_db)
):
    return crud.get_vendors(db)


# ==========================
# GET VENDOR BY ID
# ==========================

@router.get(
    "/{vendor_id}",
    response_model=schemas.VendorResponse
)
def get_vendor(
    vendor_id: int,
    db: Session = Depends(get_db)
):
    vendor = crud.get_vendor_by_id(
        db,
        vendor_id
    )

    if vendor is None:
        raise HTTPException(
            status_code=404,
            detail="Vendor not found"
        )

    return vendor