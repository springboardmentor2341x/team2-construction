from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import models, schemas

router = APIRouter(
    prefix="/material-usage",
    tags=["Material Usage"]
)


# ==========================
# RECORD MATERIAL USAGE
# ==========================
@router.post("/", response_model=schemas.MaterialUsage)
def create_material_usage(
    usage: schemas.MaterialUsageCreate,
    db: Session = Depends(get_db)
):
    # Find inventory item
    inventory = db.query(models.Inventory).filter(
        models.Inventory.id == usage.inventory_id
    ).first()

    if not inventory:
        raise HTTPException(
            status_code=404,
            detail="Inventory item not found"
        )

    # Check available quantity
    if usage.quantity_used <= 0:
        raise HTTPException(
            status_code=400,
            detail="Quantity used must be greater than 0"
        )

    if usage.quantity_used > inventory.quantity:
        raise HTTPException(
            status_code=400,
            detail="Insufficient inventory quantity"
        )

    # Reduce inventory quantity
    inventory.quantity -= usage.quantity_used

    # Recalculate stock status
    if inventory.quantity == 0:
        inventory.status = "Out of Stock"
    elif inventory.quantity <= inventory.buffer_level:
        inventory.status = "Low Stock"
    else:
        inventory.status = "In Stock"

    # Create usage record
    db_usage = models.MaterialUsage(
        inventory_id=usage.inventory_id,
        quantity_used=usage.quantity_used,
        used_for=usage.used_for
    )

    db.add(db_usage)
    db.commit()
    db.refresh(db_usage)

    # Create notification
    notification = schemas.NotificationCreate(
        title="Material Usage Recorded",
        message=f"{usage.quantity_used} units of material were used for {usage.used_for}"
    )

    db_notification = models.Notification(**notification.model_dump())
    db.add(db_notification)
    db.commit()

    return db_usage

# ==========================
# GET ALL MATERIAL USAGE
# ==========================
@router.get("/", response_model=list[schemas.MaterialUsage])
def get_material_usage(
    db: Session = Depends(get_db)
):
    return db.query(models.MaterialUsage).all()


# ==========================
# GET MATERIAL USAGE BY ID
# ==========================
@router.get("/{usage_id}", response_model=schemas.MaterialUsage)
def get_material_usage_by_id(
    usage_id: int,
    db: Session = Depends(get_db)
):
    usage = db.query(models.MaterialUsage).filter(
        models.MaterialUsage.id == usage_id
    ).first()

    if not usage:
        raise HTTPException(
            status_code=404,
            detail="Material usage record not found"
        )

    return usage