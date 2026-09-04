from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import NotificationCreate, NotificationResponse, GenericResponse
from services import NotificationsService
from core.security import decode_token
from core.auth import oauth2_scheme
from typing import List

router = APIRouter()
notifications_service = NotificationsService()

def get_current_user_id(token: str = Depends(oauth2_scheme)) -> str:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    return payload.get("sub")

@router.get("/", response_model=List[NotificationResponse])
def get_notifications(
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db),
    unread_only: bool = Query(False, description="Filter to only unread notifications"),
    limit: int = Query(50, description="Pagination limit")
):
    notes = notifications_service.get_notifications(db, user_id, unread_only, limit)
    return notes

@router.get("/unread-count")
def get_unread_count(user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    count = notifications_service.get_unread_count(db, user_id)
    return {"success": True, "count": count}

@router.patch("/{id}/read")
def mark_read(id: str, user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    note = notifications_service.mark_as_read(db, user_id, id)
    if not note:
        raise HTTPException(status_code=404, detail="Notification not found")
    return {"success": True, "data": {"id": note.id}}

@router.patch("/read-all")
def mark_all_read(user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    notifications_service.mark_all_as_read(db, user_id)
    return {"success": True, "message": "All notifications marked as read"}

@router.post("/")
def trigger_notification(data: NotificationCreate, db: Session = Depends(get_db)):
    # In a real app this should probably be internal-only, but keeping for backward compatibility
    note = notifications_service.create_notification(db, data)
    return {"success": True, "data": {"id": note.id}}
