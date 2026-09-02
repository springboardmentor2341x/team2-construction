from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/equipment-maintenance",
    tags=["Equipment Maintenance"]
)


@router.post("/", response_model=schemas.EquipmentMaintenance)
def create_equipment_maintenance(
    maintenance: schemas.EquipmentMaintenanceCreate,
    db: Session = Depends(get_db)
):
    new_maintenance = crud.create_equipment_maintenance(db, maintenance)

    notification = schemas.NotificationCreate(
        title="Equipment Maintenance Recorded",
        message=f"Maintenance record created for equipment {maintenance.equipment_id}"
    )

    crud.create_notification(db, notification)

    return new_maintenance


@router.get("/", response_model=list[schemas.EquipmentMaintenance])
def get_equipment_maintenance(
    db: Session = Depends(get_db)
):
    return crud.get_equipment_maintenance(db)

# ==========================
# MAINTENANCE DUE STATUS
# ==========================

@router.get(
    "/due-status",
    response_model=list[schemas.MaintenanceDueStatus]
)
def get_maintenance_due_status(
    db: Session = Depends(get_db)
):
    return crud.get_maintenance_due_status(db)

@router.get(
    "/{maintenance_id}",
    response_model=schemas.EquipmentMaintenance
)
def get_equipment_maintenance_by_id(
    maintenance_id: int,
    db: Session = Depends(get_db)
):
    maintenance = crud.get_equipment_maintenance_by_id(
        db,
        maintenance_id
    )

    if maintenance is None:
        raise HTTPException(
            status_code=404,
            detail="Maintenance record not found"
        )

    return maintenance


@router.put(
    "/{maintenance_id}",
    response_model=schemas.EquipmentMaintenance
)
def update_equipment_maintenance(
    maintenance_id: int,
    maintenance: schemas.EquipmentMaintenanceCreate,
    db: Session = Depends(get_db)
):
    updated = crud.update_equipment_maintenance(
        db,
        maintenance_id,
        maintenance
    )

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Maintenance record not found"
        )

    return updated


@router.delete("/{maintenance_id}")
def delete_equipment_maintenance(
    maintenance_id: int,
    db: Session = Depends(get_db)
):
    deleted = crud.delete_equipment_maintenance(
        db,
        maintenance_id
    )

    if deleted is None:
        raise HTTPException(
            status_code=404,
            detail="Maintenance record not found"
        )

    return {
        "message": "Maintenance record deleted successfully"
    }