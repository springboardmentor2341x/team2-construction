from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import schemas, crud
from app.database import get_db


router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"]
)


# ==========================
# CREATE NOTIFICATION
# ==========================

@router.post("/", response_model=schemas.Notification)
def create_notification(
    notification: schemas.NotificationCreate,
    db: Session = Depends(get_db)
):
    return crud.create_notification(db, notification)


# ==========================
# GET ALL NOTIFICATIONS
# ==========================

@router.get("/", response_model=list[schemas.Notification])
def get_notifications(
    db: Session = Depends(get_db)
):
    return crud.get_notifications(db)