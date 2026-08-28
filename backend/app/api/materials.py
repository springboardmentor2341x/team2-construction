from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from models import Inventory
from database.session import get_db
from schemas import (
    MaterialResponse, MaterialCreate, MaterialUpdate,
    MaterialRequestResponse, MaterialRequestCreate, MaterialRequestRespond, GenericResponse
)
from services import MaterialsService
from core.security import decode_token
from core.auth import oauth2_scheme
from core.permissions import RoleChecker
from typing import Optional

router = APIRouter()
materials_service = MaterialsService()

def get_current_user_id(token: str = Depends(oauth2_scheme)) -> str:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    return payload.get("sub")

# Materials
@router.get("/")
def get_materials(db: Session = Depends(get_db)):
    mats = materials_service.get_all_materials(db)
    res = [{
        "id": m.id,
        "name": m.name,
        "unit": m.unit,
        "inStock": m.in_stock,
        "totalStock": m.inventory.total_stock if m.inventory else m.in_stock,
        "availableStock": m.inventory.available_stock if m.inventory else m.in_stock,
        "reorderLevel": m.reorder_level,
        "costPerUnit": m.cost_per_unit
    } for m in mats]
    return {"success": True, "data": res}

@router.get("/{id}")
def get_material(id: str, db: Session = Depends(get_db)):
    m = materials_service.get_material_by_id(db, id)
    return {
        "success": True,
        "data": {
            "id": m.id, "name": m.name, "unit": m.unit,
            "inStock": float(m.inventory.available_stock) if m.inventory else float(m.in_stock or 0),
            "totalStock": float(m.inventory.total_stock) if m.inventory else float(m.in_stock or 0),
            "availableStock": float(m.inventory.available_stock) if m.inventory else float(m.in_stock or 0),
            "reorderLevel": m.reorder_level, "costPerUnit": m.cost_per_unit
        }
    }

@router.post("/", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def create_material(data: MaterialCreate, db: Session = Depends(get_db)):
    m = materials_service.create_material(db, data.model_dump())
    return {"success": True, "data": {"id": m.id}}

@router.put("/{id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def update_material(id: str, data: MaterialUpdate, db: Session = Depends(get_db)):
    m = materials_service.update_material(db, id, data.model_dump(exclude_unset=True))
    return {"success": True, "data": {"id": m.id}}

@router.delete("/{id}", dependencies=[Depends(RoleChecker(["admin"]))])
def delete_material(id: str, db: Session = Depends(get_db)):
    materials_service.delete_material(db, id)
    return {"success": True, "message": "Material deleted successfully"}

# Requests
@router.get("/requests/all")
def get_material_requests(projectId: Optional[str] = None, db: Session = Depends(get_db)):
    reqs = materials_service.get_requests(db, projectId)
    res = [{
        "id": r.id,
        "materialId": r.material_id,
        "materialName": r.material.name,
        "quantity": r.quantity,
        "requestedBy": r.requested_by.name,
        "requestDate": r.request_date.isoformat().split("T")[0],
        "status": r.status,
        "projectName": r.project.name
    } for r in reqs]
    return {"success": True, "data": res}

@router.post("/requests/submit")
def create_material_request(data: MaterialRequestCreate, user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    req = materials_service.create_request(db, user_id, data.model_dump())
    return {"success": True, "data": {"id": req.id}}

@router.put("/requests/{requestId}/respond", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def respond_material_request(requestId: str, data: MaterialRequestRespond, db: Session = Depends(get_db)):
    req = materials_service.respond_request(db, request_id=requestId, approve=data.approve)
    return {"success": True, "message": f"Material request {'approved' if data.approve else 'rejected'}"}
