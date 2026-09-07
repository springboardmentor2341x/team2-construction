from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import GenericResponse
from services import DashboardService
from core.security import decode_token
from core.auth import oauth2_scheme

router = APIRouter()
dashboard_service = DashboardService()

@router.get("/stats")
def get_stats(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    user_id = payload.get("sub")
    role = payload.get("role")
    
    stats = dashboard_service.get_stats(db, user_id, role)
    return {"success": True, "data": stats}

@router.get("/admin")
def get_admin_dashboard(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    if payload.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Not authorized")
    
    stats = dashboard_service.get_admin_dashboard(db)
    return {"success": True, "data": stats}

@router.get("/project-manager")
def get_pm_dashboard(project_id: str = None, token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    if payload.get("role") != "project_manager":
        raise HTTPException(status_code=403, detail="Not authorized")
    user_id = payload.get("sub")
    
    stats = dashboard_service.get_pm_dashboard(db, user_id, project_id)
    if stats is None:
        return {"success": True, "data": {}}
    return {"success": True, "data": stats}
