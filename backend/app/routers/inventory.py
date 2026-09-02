from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import models, schemas

router = APIRouter(
    prefix="/inventory",
    tags=["Inventory"]
)


# ==========================
# CREATE INVENTORY ITEM
# ==========================
@router.post("/", response_model=schemas.Inventory)
def create_inventory(
    inventory: schemas.InventoryCreate,
    db: Session = Depends(get_db)
):
     # Automatically determine stock status
    if inventory.quantity == 0:
        stock_status = "Out of Stock"
    elif inventory.quantity <= inventory.buffer_level:
        stock_status = "Low Stock"
    else:
        stock_status = "In Stock"
    db_inventory = models.Inventory(
        item_name=inventory.item_name,
        quantity=inventory.quantity,
        unit=inventory.unit,
        supplier=inventory.supplier,
        buffer_level=inventory.buffer_level,
        status=stock_status
    )

    db.add(db_inventory)
    db.commit()
    db.refresh(db_inventory)

    return db_inventory
# ==========================
# GET AVAILABLE STOCK
# ==========================

@router.get("/{inventory_id}/available")
def get_available_stock(
    inventory_id: int,
    db: Session = Depends(get_db)
):
    inventory = db.query(models.Inventory).filter(
        models.Inventory.id == inventory_id
    ).first()

    if inventory is None:
        raise HTTPException(
            status_code=404,
            detail="Inventory item not found"
        )

    available_quantity = (
        inventory.quantity - inventory.allocated_quantity
    )
    if available_quantity == 0:
      stock_status = "Out of Stock"
    elif available_quantity <= inventory.buffer_level:
      stock_status = "Low Stock"
    else:
      stock_status = "In Stock"

      inventory.status = stock_status
      db.commit()
   
    return {
        "inventory_id": inventory.id,
        "item_name": inventory.item_name,
        "total_quantity": inventory.quantity,
        "allocated_quantity": inventory.allocated_quantity,
        "available_quantity": available_quantity,
        "unit": inventory.unit,
        "status": inventory.status
    }

# ==========================
# GET ALL INVENTORY
# ==========================
@router.get("/", response_model=list[schemas.Inventory])
def get_inventory(
    db: Session = Depends(get_db)
):
    return db.query(models.Inventory).all()


# ==========================
# GET INVENTORY BY ID
# ==========================
@router.get("/{inventory_id}", response_model=schemas.Inventory)
def get_inventory_by_id(
    inventory_id: int,
    db: Session = Depends(get_db)
):
    inventory = db.query(models.Inventory).filter(
        models.Inventory.id == inventory_id
    ).first()

    if not inventory:
        raise HTTPException(
            status_code=404,
            detail="Inventory item not found"
        )

    return inventory