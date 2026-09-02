from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/stock-movements",
    tags=["Stock Movements"]
)


# ==========================
# CREATE STOCK MOVEMENT
# ==========================

@router.post(
    "/",
    response_model=schemas.StockMovement
)
def create_stock_movement(
    movement: schemas.StockMovementCreate,
    db: Session = Depends(get_db)
):
    try:
        new_movement = crud.create_stock_movement(
            db,
            movement
        )

        notification = schemas.NotificationCreate(
            title="Stock Movement Recorded",
            message=f"Stock movement recorded for inventory item {movement.inventory_id}"
        )

        crud.create_notification(db, notification)

        return new_movement

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
# ==========================
# GET ALL STOCK MOVEMENTS
# ==========================

@router.get(
    "/",
    response_model=list[schemas.StockMovement]
)
def get_stock_movements(
    db: Session = Depends(get_db)
):
    return crud.get_stock_movements(db)


# ==========================
# GET STOCK MOVEMENT BY ID
# ==========================

@router.get(
    "/{movement_id}",
    response_model=schemas.StockMovement
)
def get_stock_movement(
    movement_id: int,
    db: Session = Depends(get_db)
):
    movement = crud.get_stock_movement_by_id(
        db,
        movement_id
    )

    if movement is None:
        raise HTTPException(
            status_code=404,
            detail="Stock movement not found"
        )

    return movement


# ==========================
# UPDATE STOCK MOVEMENT
# ==========================

@router.put(
    "/{movement_id}",
    response_model=schemas.StockMovement
)
def update_stock_movement(
    movement_id: int,
    movement: schemas.StockMovementCreate,
    db: Session = Depends(get_db)
):
    updated = crud.update_stock_movement(
        db,
        movement_id,
        movement
    )

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Stock movement not found"
        )

    return updated


# ==========================
# DELETE STOCK MOVEMENT
# ==========================

@router.delete("/{movement_id}")
def delete_stock_movement(
    movement_id: int,
    db: Session = Depends(get_db)
):
    deleted = crud.delete_stock_movement(
        db,
        movement_id
    )

    if deleted is None:
        raise HTTPException(
            status_code=404,
            detail="Stock movement not found"
        )

    return {
        "message": "Stock movement deleted successfully"
    }
# ==========================
# RECEIVE MATERIAL
# ==========================

@router.post(
    "/receive",
    response_model=schemas.StockMovement
)
def receive_material(
    movement: schemas.StockMovementCreate,
    db: Session = Depends(get_db)
):
    try:
        received_material = crud.receive_material(
            db,
            movement
        )

        notification = schemas.NotificationCreate(
            title="Material Received",
            message=f"Material received for inventory item {movement.inventory_id}"
        )

        crud.create_notification(db, notification)

        return received_material

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )