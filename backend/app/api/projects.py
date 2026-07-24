from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import (
    ProjectResponse, ProjectCreate, ProjectUpdate, TaskCreate, TaskUpdate, WorkPackageResponse,
    IssueCreate, IssueUpdate, IssueReportResponse, PhotoCreate, SitePhotoResponse,
    FeedbackCreate, FeedbackMessageResponse, GenericResponse
)
from services import ProjectsService
from core.security import decode_token
from core.auth import oauth2_scheme

router = APIRouter()
proj_service = ProjectsService()

def get_current_user_id(token: str = Depends(oauth2_scheme)) -> str:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    return payload.get("sub")

# Helper formatting
def format_proj(p) -> dict:
    return {
        "id": p.id,
        "name": p.name,
        "location": p.location,
        "clientName": p.client_name,
        "status": p.status,
        "startDate": p.start_date.isoformat(),
        "endDate": p.end_date.isoformat(),
        "budget": p.budget,
        "spent": p.spent,
        "progress": p.progress,
        "image": p.image,
        "description": p.description,
        "manager": p.manager.name if p.manager else "Unassigned"
    }

# Core CRUD
@router.get("/")
def get_projects(db: Session = Depends(get_db)):
    projs = proj_service.get_all_projects(db)
    # Include all required relationship fields for Angular frontend loadAllData parsing
    formatted = []
    for p in projs:
        formatted.append({
            "id": p.id,
            "name": p.name,
            "location": p.location,
            "clientName": p.client_name,
            "status": p.status,
            "startDate": p.start_date.isoformat(),
            "endDate": p.end_date.isoformat(),
            "budget": p.budget,
            "spent": p.spent,
            "progress": p.progress,
            "image": p.image,
            "description": p.description,
            "manager": {"id": p.manager.id, "name": p.manager.name, "email": p.manager.email} if p.manager else None,
            "workPackages": [{
                "id": wp.id,
                "projectId": wp.project_id,
                "title": wp.title,
                "description": wp.description,
                "startDate": wp.start_date.isoformat(),
                "endDate": wp.end_date.isoformat(),
                "progress": wp.progress,
                "status": wp.status,
                "assignedToId": wp.assigned_to_id
            } for wp in p.work_packages],
            "sitePhotos": [{
                "id": ph.id,
                "projectId": ph.project_id,
                "url": ph.url,
                "caption": ph.caption,
                "date": ph.date.isoformat(),
                "uploadedById": ph.uploaded_by_id
            } for ph in p.site_photos],
            "issueReports": [{
                "id": iss.id,
                "projectId": iss.project_id,
                "title": iss.title,
                "description": iss.description,
                "severity": iss.severity,
                "status": iss.status,
                "reportedById": iss.reported_by_id,
                "reportedDate": iss.reported_date.isoformat()
            } for iss in p.issue_reports],
            "feedback": [{
                "id": fb.id,
                "clientName": fb.client_name,
                "rating": fb.rating,
                "message": fb.message,
                "date": fb.date.isoformat()
            } for fb in p.feedback]
        })
    return {"success": True, "data": formatted}

@router.get("/{id}")
def get_project(id: str, db: Session = Depends(get_db)):
    p = proj_service.get_project_by_id(db, id)
    return {"success": True, "data": format_proj(p)}

@router.post("/")
def create_project(data: ProjectCreate, db: Session = Depends(get_db)):
    proj = proj_service.create_project(db, data.model_dump())
    return {"success": True, "data": format_proj(proj)}

@router.put("/{id}")
def update_project(id: str, data: ProjectUpdate, db: Session = Depends(get_db)):
    proj = proj_service.update_project(db, id, data.model_dump(exclude_unset=True))
    return {"success": True, "data": format_proj(proj)}

@router.delete("/{id}")
def delete_project(id: str, db: Session = Depends(get_db)):
    proj_service.delete_project(db, id)
    return {"success": True, "message": "Project deleted successfully"}

# Nested Tasks (WorkPackages)
@router.get("/{projectId}/tasks")
def get_tasks(projectId: str, db: Session = Depends(get_db)):
    tasks = proj_service.get_tasks(db, projectId)
    res = [{
        "id": t.id,
        "projectId": t.project_id,
        "projectName": t.project.name,
        "title": t.title,
        "description": t.description,
        "startDate": t.start_date.isoformat(),
        "endDate": t.end_date.isoformat(),
        "progress": t.progress,
        "status": t.status,
        "assignedTo": t.assigned_to.name if t.assigned_to else "Unassigned",
        "assignedToRole": "contractor" # or worker
    } for t in tasks]
    return {"success": True, "data": res}

@router.post("/{projectId}/tasks")
def create_task(projectId: str, data: TaskCreate, db: Session = Depends(get_db)):
    task = proj_service.create_task(db, projectId, data.model_dump())
    return {"success": True, "data": {"id": task.id, "title": task.title}}

@router.put("/{projectId}/tasks/{taskId}")
def update_task(taskId: str, data: TaskUpdate, db: Session = Depends(get_db)):
    task = proj_service.update_task(db, taskId, data.model_dump(exclude_unset=True))
    return {"success": True, "data": {"id": task.id, "title": task.title}}

@router.delete("/{projectId}/tasks/{taskId}")
def delete_task(taskId: str, db: Session = Depends(get_db)):
    proj_service.delete_task(db, taskId)
    return {"success": True, "message": "Task deleted successfully"}

# Nested Issues
@router.get("/{projectId}/issues")
def get_issues(projectId: str, db: Session = Depends(get_db)):
    issues = proj_service.get_issues(db, projectId)
    res = [{
        "id": iss.id,
        "projectId": iss.project_id,
        "projectName": iss.project.name,
        "title": iss.title,
        "description": iss.description,
        "severity": iss.severity,
        "status": iss.status,
        "reportedBy": iss.reported_by.name if iss.reported_by else "Engineer",
        "reportedDate": iss.reported_date.isoformat()
    } for iss in issues]
    return {"success": True, "data": res}

@router.post("/{projectId}/issues")
def create_issue(projectId: str, data: IssueCreate, user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    issue = proj_service.create_issue(db, projectId, user_id, data.model_dump())
    return {"success": True, "data": {"id": issue.id, "title": issue.title}}

@router.put("/{projectId}/issues/{issueId}")
def update_issue(issueId: str, data: IssueUpdate, db: Session = Depends(get_db)):
    issue = proj_service.update_issue(db, issueId, data.model_dump(exclude_unset=True))
    return {"success": True, "data": {"id": issue.id, "status": issue.status}}

# Nested Photos
@router.get("/{projectId}/photos")
def get_photos(projectId: str, db: Session = Depends(get_db)):
    photos = proj_service.get_photos(db, projectId)
    res = [{
        "id": ph.id,
        "projectId": ph.project_id,
        "url": ph.url,
        "caption": ph.caption,
        "date": ph.date.isoformat(),
        "uploadedBy": ph.uploaded_by.name
    } for ph in photos]
    return {"success": True, "data": res}

@router.post("/{projectId}/photos")
def create_photo(projectId: str, data: PhotoCreate, user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    photo = proj_service.create_photo(db, projectId, user_id, data.model_dump())
    return {"success": True, "data": {"id": photo.id, "url": photo.url}}

# Nested Feedback
@router.get("/{projectId}/feedback")
def get_feedback(projectId: str, db: Session = Depends(get_db)):
    feedback = proj_service.get_feedback(db, projectId)
    res = [{
        "id": fb.id,
        "clientName": fb.client_name,
        "projectName": fb.project.name,
        "rating": fb.rating,
        "message": fb.message,
        "date": fb.date.isoformat()
    } for fb in feedback]
    return {"success": True, "data": res}

@router.post("/{projectId}/feedback")
def create_feedback(projectId: str, data: FeedbackCreate, db: Session = Depends(get_db)):
    fb = proj_service.create_feedback(db, projectId, data.model_dump())
    return {"success": True, "data": {"id": fb.id}}

# Nested Documents
@router.get("/{projectId}/documents")
def get_documents(projectId: str, db: Session = Depends(get_db)):
    docs = proj_service.get_documents(db, projectId)
    res = [{
        "id": d.id,
        "projectId": d.project_id,
        "name": d.name,
        "size": d.size,
        "type": d.type,
        "uploadDate": d.upload_date.isoformat(),
        "uploadedBy": d.uploaded_by
    } for d in docs]
    return {"success": True, "data": res}

@router.post("/{projectId}/documents")
def create_document(projectId: str, data: dict, user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    # resolve uploaded_by name from user_id
    from models import User
    user = db.query(User).filter(User.id == user_id).first()
    name = user.name if user else "Unknown"
    doc = proj_service.create_document(db, projectId, name, data)
    return {"success": True, "data": {"id": doc.id, "name": doc.name}}
