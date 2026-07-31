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
