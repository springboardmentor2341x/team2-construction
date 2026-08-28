from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import NotificationCreate, GenericResponse
from services import NotificationsService
from core.security import decode_token
from core.auth import oauth2_scheme

router = APIRouter()
notifications_service = NotificationsService()

def get_current_user_id(token: str = Depends(oauth2_scheme)) -> str:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    return payload.get("sub")

@router.get("/")
def get_notifications(user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    notes = notifications_service.get_notifications(db, user_id)
    res = [{
        "id": n.id,
        "userId": n.user_id,
        "message": n.message,
        "read": n.read,
        "type": n.type,
        "date": n.date.isoformat()
    } for n in notes]
    return {"success": True, "data": res}

@router.put("/{id}/read")
def mark_read(id: str, user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    note = notifications_service.mark_as_read(db, user_id, id)
    return {"success": True, "data": {"id": note.id}}

@router.post("/")
def trigger_notification(data: NotificationCreate, db: Session = Depends(get_db)):
    note = notifications_service.create_notification(db, data.model_dump())
    return {"success": True, "data": {"id": note.id}}
