from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/purchase-orders",
    tags=["Purchase Orders"]
)


@router.post(
    "/",
    response_model=schemas.PurchaseOrderResponse
)
def create_purchase_order(
    purchase_order: schemas.PurchaseOrderCreate,
    db: Session = Depends(get_db)
):
    return crud.create_purchase_order(
        db,
        purchase_order
    )


@router.get(
    "/",
    response_model=list[schemas.PurchaseOrderResponse]
)
def get_purchase_orders(
    db: Session = Depends(get_db)
):
    return crud.get_purchase_orders(db)