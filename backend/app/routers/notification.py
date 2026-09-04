from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app import schemas
from app.database import get_db
from app.auth import get_current_user
from app.services import notification_service

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"]
)


# ==========================
# GET AUTHENTICATED USER NOTIFICATIONS
# ==========================

@router.get("/", response_model=list[schemas.NotificationResponse])
def get_notifications(
    type: str | None = Query(None, description="Filter by notification type"),
    is_read: bool | None = Query(None, description="Filter by read status"),
    project_id: int | None = Query(None, description="Filter by project ID"),
    limit: int = Query(50, ge=1, le=100),
    offset: int = Query(0, ge=0),
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return notification_service.get_user_notifications(
        db=db,
        user_id=current_user.id,
        notification_type=type,
        is_read=is_read,
        project_id=project_id,
        limit=limit,
        offset=offset
    )


# ==========================
# GET UNREAD COUNT
# ==========================

@router.get("/unread-count", response_model=schemas.NotificationUnreadCountResponse)
def get_unread_count(
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    count = notification_service.get_unread_count(
        db=db,
        user_id=current_user.id
    )
    return {"unread_count": count}


# ==========================
# GET NOTIFICATION BY ID
# ==========================

@router.get("/{notification_id}", response_model=schemas.NotificationResponse)
def get_notification(
    notification_id: int,
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return notification_service.get_notification_by_id(
        db=db,
        notification_id=notification_id,
        user_id=current_user.id
    )


# ==========================
# MARK NOTIFICATION AS READ
# ==========================

@router.patch("/{notification_id}/read", response_model=schemas.NotificationResponse)
@router.put("/{notification_id}/read", response_model=schemas.NotificationResponse)
def mark_notification_as_read(
    notification_id: int,
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return notification_service.mark_as_read(
        db=db,
        notification_id=notification_id,
        user_id=current_user.id
    )


# ==========================
# MARK ALL NOTIFICATIONS AS READ
# ==========================

@router.patch("/read-all")
@router.put("/read-all")
def mark_all_notifications_as_read(
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    updated_count = notification_service.mark_all_as_read(
        db=db,
        user_id=current_user.id
    )
    return {
        "message": "All notifications marked as read",
        "updated_count": updated_count
    }


# ==========================
# CREATE SYSTEM NOTIFICATION (ADMIN/MANAGER)
# ==========================

@router.post("/system", response_model=list[schemas.NotificationResponse])
def create_system_notification(
    system_notification: schemas.SystemNotificationCreate,
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return notification_service.create_system_notification(
        db=db,
        title=system_notification.title,
        message=system_notification.message,
        project_id=system_notification.project_id,
        target_role=system_notification.target_role,
        priority=system_notification.priority
    )


# ==========================
# TRIGGER DEADLINE CHECK
# ==========================

@router.post("/check-deadlines", response_model=list[schemas.NotificationResponse])
def trigger_deadline_check(
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return notification_service.check_and_generate_deadline_notifications(db=db)