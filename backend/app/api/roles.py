from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.session import get_db
from models import Role
from schemas import RoleResponse, GenericResponse
from typing import List

router = APIRouter()

@router.get("/", response_model=GenericResponse)
def get_roles(db: Session = Depends(get_db)):
    roles = db.query(Role).all()
    res = [{"id": r.id, "name": r.name, "description": r.description} for r in roles]
    return {"success": True, "data": res}
