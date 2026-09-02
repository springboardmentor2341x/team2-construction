from datetime import datetime, timedelta, date
from sqlalchemy.orm import Session
from sqlalchemy import or_, and_
from fastapi import HTTPException

from app import models


def get_project_user_ids(
    db: Session,
    project_id: int,
    target_roles: list[str] | None = None
) -> list[int]:
    """
    Finds all User IDs associated with a project based on Project Manager,
    Site Engineers, Contractors, Workers, and Clients.
    """
    user_ids = set()
    project = db.query(models.Project).filter(models.Project.id == project_id).first()

    if not project:
        return []

    all_users = db.query(models.User).filter(models.User.is_active == True).all()

    # 1. Super Admins always included if allowed by target_roles
    for u in all_users:
        if u.role in ["Super Admin", "Admin", "SuperAdmin"]:
            if not target_roles or any(r in ["Super Admin", "Admin", "SuperAdmin"] for r in target_roles):
                user_ids.add(u.id)

    # 2. Check Project Manager
    if project.project_manager:
        pm_users = [
            u for u in all_users
            if u.full_name == project.project_manager or u.email == project.project_manager
        ]
        for u in pm_users:
            if not target_roles or u.role in target_roles:
                user_ids.add(u.id)

    # 3. Check Site Engineers assigned to project
    engineers = db.query(models.SiteEngineerAssignment).filter(
        models.SiteEngineerAssignment.project_id == project_id
    ).all()
    eng_names = {e.engineer_name for e in engineers}
    if eng_names:
        eng_users = [
            u for u in all_users
            if (u.full_name in eng_names or u.email in eng_names)
        ]
        for u in eng_users:
            if not target_roles or u.role in target_roles:
                user_ids.add(u.id)

    # 4. Check Contractors assigned to project
    contractors = db.query(models.ContractorAssignment).filter(
        models.ContractorAssignment.project_id == project_id
    ).all()
    c_identifiers = set()
    for c in contractors:
        if c.contractor_name:
            c_identifiers.add(c.contractor_name)
        if c.representative_name:
            c_identifiers.add(c.representative_name)
        if c.email:
            c_identifiers.add(c.email)
    if c_identifiers:
        c_users = [
            u for u in all_users
            if (u.full_name in c_identifiers or u.email in c_identifiers)
        ]
        for u in c_users:
            if not target_roles or u.role in target_roles:
                user_ids.add(u.id)

    # 5. Check Workers assigned to project
    worker_assigns = db.query(models.WorkerAssignment).filter(
        models.WorkerAssignment.project_id == project_id
    ).all()
    worker_ids = {wa.worker_id for wa in worker_assigns}
    if worker_ids:
        workers = db.query(models.Worker).filter(models.Worker.id.in_(worker_ids)).all()
        w_names = {w.full_name for w in workers if w.full_name}
        w_users = [
            u for u in all_users
            if u.full_name in w_names
        ]
        for u in w_users:
            if not target_roles or u.role in target_roles:
                user_ids.add(u.id)

    # 6. Check Client
    if project.client_name:
        client_users = [
            u for u in all_users
            if u.full_name == project.client_name or u.email == project.client_name
        ]
        for u in client_users:
            if not target_roles or u.role in target_roles:
                user_ids.add(u.id)

    # Fallback: if no specific project assignment match found, include active users with target_roles
    if not user_ids and target_roles:
        fallback_users = [u.id for u in all_users if u.role in target_roles]
        user_ids.update(fallback_users)

    return list(user_ids)


def find_user_by_name_or_email(db: Session, identifier: str) -> models.User | None:
    """Helper to locate a user by full_name or email."""
    if not identifier:
        return None
    return db.query(models.User).filter(
        or_(models.User.email == identifier, models.User.full_name == identifier)
    ).first()


def create_notification(
    db: Session,
    user_id: int,
    title: str,
    message: str,
    type: str,
    project_id: int | None = None,
    related_entity_type: str | None = None,
    related_entity_id: int | None = None,
    priority: str = "Medium"
) -> models.Notification | None:
    """
    Creates a notification for a specific user with duplicate prevention.
    """
    # Prevent duplicates if an unread notification with identical attributes exists
    existing = db.query(models.Notification).filter(
        models.Notification.user_id == user_id,
        models.Notification.type == type,
        models.Notification.title == title,
        models.Notification.is_read == False,
        models.Notification.project_id == project_id,
        models.Notification.related_entity_type == related_entity_type,
        models.Notification.related_entity_id == related_entity_id
    ).first()

    if existing:
        return existing

    notification = models.Notification(
        user_id=user_id,
        project_id=project_id,
        type=type,
        title=title,
        message=message,
        is_read=False,
        created_at=datetime.utcnow(),
        read_at=None,
        related_entity_type=related_entity_type,
        related_entity_id=related_entity_id,
        priority=priority
    )

    db.add(notification)
    db.commit()
    db.refresh(notification)
    return notification


def create_notifications_for_users(
    db: Session,
    user_ids: list[int],
    title: str,
    message: str,
    type: str,
    project_id: int | None = None,
    related_entity_type: str | None = None,
    related_entity_id: int | None = None,
    priority: str = "Medium"
) -> list[models.Notification]:
    """
    Creates notifications for multiple users.
    """
    notifications = []
    for uid in set(user_ids):
        n = create_notification(
            db=db,
            user_id=uid,
            title=title,
            message=message,
            type=type,
            project_id=project_id,
            related_entity_type=related_entity_type,
            related_entity_id=related_entity_id,
            priority=priority
        )
        if n:
            notifications.append(n)
    return notifications


def notify_project_users(
    db: Session,
    project_id: int,
    title: str,
    message: str,
    type: str,
    related_entity_type: str | None = None,
    related_entity_id: int | None = None,
    priority: str = "Medium",
    target_roles: list[str] | None = None
) -> list[models.Notification]:
    """
    Determines relevant users for a project and dispatches notifications.
    """
    user_ids = get_project_user_ids(db, project_id, target_roles=target_roles)
    if not user_ids:
        # Fallback to all users if no specific assignment match found
        all_active = db.query(models.User.id).filter(models.User.is_active == True).all()
        user_ids = [u[0] for u in all_active]

    return create_notifications_for_users(
        db=db,
        user_ids=user_ids,
        title=title,
        message=message,
        type=type,
        project_id=project_id,
        related_entity_type=related_entity_type,
        related_entity_id=related_entity_id,
        priority=priority
    )


def get_user_notifications(
    db: Session,
    user_id: int,
    notification_type: str | None = None,
    is_read: bool | None = None,
    project_id: int | None = None,
    limit: int = 50,
    offset: int = 0
) -> list[models.Notification]:
    """
    Retrieves notifications belonging strictly to the authenticated user.
    """
    query = db.query(models.Notification).filter(models.Notification.user_id == user_id)

    if notification_type:
        query = query.filter(models.Notification.type == notification_type)

    if is_read is not None:
        query = query.filter(models.Notification.is_read == is_read)

    if project_id is not None:
        query = query.filter(models.Notification.project_id == project_id)

    return query.order_by(models.Notification.created_at.desc()).offset(offset).limit(limit).all()


def get_unread_count(db: Session, user_id: int) -> int:
    """
    Returns total unread count for user.
    """
    return db.query(models.Notification).filter(
        models.Notification.user_id == user_id,
        models.Notification.is_read == False
    ).count()


def get_notification_by_id(db: Session, notification_id: int, user_id: int) -> models.Notification:
    """
    Retrieves a single notification after verifying ownership.
    """
    notification = db.query(models.Notification).filter(models.Notification.id == notification_id).first()

    if not notification:
        raise HTTPException(status_code=404, detail="Notification not found")

    if notification.user_id != user_id:
        raise HTTPException(status_code=403, detail="You do not have permission to access this notification")

    return notification


def mark_as_read(db: Session, notification_id: int, user_id: int) -> models.Notification:
    """
    Marks a specific notification as read.
    """
    notification = get_notification_by_id(db, notification_id, user_id)
    if not notification.is_read:
        notification.is_read = True
        notification.read_at = datetime.utcnow()
        db.commit()
        db.refresh(notification)
    return notification


def mark_all_as_read(db: Session, user_id: int) -> int:
    """
    Marks all notifications for a user as read.
    """
    now = datetime.utcnow()
    updated = db.query(models.Notification).filter(
        models.Notification.user_id == user_id,
        models.Notification.is_read == False
    ).update({
        "is_read": True,
        "read_at": now
    }, synchronize_session=False)

    db.commit()
    return updated


def create_system_notification(
    db: Session,
    title: str,
    message: str,
    project_id: int | None = None,
    target_role: str | None = None,
    priority: str = "Medium"
) -> list[models.Notification]:
    """
    Creates generic system notifications for targeted roles or all active users.
    """
    query = db.query(models.User).filter(models.User.is_active == True)
    if target_role:
        query = query.filter(models.User.role == target_role)

    users = query.all()
    user_ids = [u.id for u in users]

    return create_notifications_for_users(
        db=db,
        user_ids=user_ids,
        title=title,
        message=message,
        type="SYSTEM",
        project_id=project_id,
        related_entity_type="system",
        priority=priority
    )


def check_and_generate_deadline_notifications(db: Session) -> list[models.Notification]:
    """
    Scans database entities for upcoming/missed deadlines and generates DEADLINE notifications.
    """
    created_notifications = []
    today = date.today()
    upcoming_threshold = today + timedelta(days=2)

    # 1. Check Milestones
    milestones = db.query(models.Milestone).filter(
        models.Milestone.status != "Completed"
    ).all()

    for m in milestones:
        due = m.planned_date
        if not due:
            continue

        if due < today:
            title = "Milestone Deadline Missed"
            msg = f"The milestone '{m.title}' for project {m.project_id} missed its planned completion date ({due})."
            priority = "High"
        elif today <= due <= upcoming_threshold:
            title = "Milestone Deadline Approaching"
            msg = f"The milestone '{m.title}' for project {m.project_id} is due on {due}."
            priority = "Medium"
        else:
            continue

        n_list = notify_project_users(
            db=db,
            project_id=m.project_id,
            title=title,
            message=msg,
            type="DEADLINE",
            related_entity_type="milestone",
            related_entity_id=m.id,
            priority=priority
        )
        created_notifications.extend(n_list)

    # 2. Check Project Schedules (Tasks)
    schedules = db.query(models.ProjectSchedule).filter(
        models.ProjectSchedule.status != "Completed"
    ).all()

    for s in schedules:
        due = s.end_date
        if not due:
            continue

        if due < today:
            title = "Task Deadline Missed"
            msg = f"The task '{s.task_name}' for project {s.project_id} missed its deadline ({due})."
            priority = "High"
        elif today <= due <= upcoming_threshold:
            title = "Task Deadline Approaching"
            msg = f"The task '{s.task_name}' for project {s.project_id} is due on {due}."
            priority = "Medium"
        else:
            continue

        n_list = notify_project_users(
            db=db,
            project_id=s.project_id,
            title=title,
            message=msg,
            type="DEADLINE",
            related_entity_type="task",
            related_entity_id=s.id,
            priority=priority
        )
        created_notifications.extend(n_list)

    # 3. Check Procurement Requests
    p_requests = db.query(models.ProcurementRequest).filter(
        models.ProcurementRequest.request_status.in_(["Pending", "Processing"])
    ).all()

    for pr in p_requests:
        due = pr.required_date
        if not due:
            continue

        if due < today:
            title = "Procurement Deadline Missed"
            msg = f"Procurement request '{pr.item_name}' for project {pr.project_id} passed required date ({due})."
            priority = "High"
        elif today <= due <= upcoming_threshold:
            title = "Procurement Deadline Approaching"
            msg = f"Procurement request '{pr.item_name}' for project {pr.project_id} requires fulfillment by {due}."
            priority = "Medium"
        else:
            continue

        n_list = notify_project_users(
            db=db,
            project_id=pr.project_id,
            title=title,
            message=msg,
            type="DEADLINE",
            related_entity_type="procurement_request",
            related_entity_id=pr.id,
            priority=priority
        )
        created_notifications.extend(n_list)

    return created_notifications
