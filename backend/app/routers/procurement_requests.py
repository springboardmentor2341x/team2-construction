from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/procurement-requests",
    tags=["Procurement Requests"]
)


# ==========================
# CREATE PROCUREMENT REQUEST
# ==========================

@router.post("/", response_model=schemas.ProcurementRequestResponse)
def create_procurement_request(
    request: schemas.ProcurementRequestCreate,
    db: Session = Depends(get_db)
):
    return crud.create_procurement_request(db, request)


# ==========================
# GET ALL PROCUREMENT REQUESTS
# ==========================

@router.get("/", response_model=list[schemas.ProcurementRequestResponse])
def get_procurement_requests(
    db: Session = Depends(get_db)
):
    return crud.get_procurement_requests(db)


# ==========================
# GET PROCUREMENT REQUEST BY ID
# ==========================

@router.get("/{request_id}", response_model=schemas.ProcurementRequestResponse)
def get_procurement_request(
    request_id: int,
    db: Session = Depends(get_db)
):
    request = crud.get_procurement_request_by_id(
        db,
        request_id
    )

    if request is None:
        raise HTTPException(
            status_code=404,
            detail="Procurement request not found"
        )

    return request
@router.put(
    "/{request_id}/status",
    response_model=schemas.ProcurementRequestResponse
)
def update_procurement_request_status(
    request_id: int,
    status: str,
    db: Session = Depends(get_db)
):
    try:
        updated = crud.update_procurement_request_status(
            db,
            request_id,
            status
        )

        if updated is None:
            raise HTTPException(
                status_code=404,
                detail="Procurement request not found"
            )

        return updated

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )