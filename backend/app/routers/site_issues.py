from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import models, schemas

router = APIRouter(
    prefix="/site-issues",
    tags=["Site Issues"]
)


# ==========================
# CREATE SITE ISSUE
# ==========================
@router.post("/", response_model=schemas.SiteIssue)
def create_site_issue(
    issue: schemas.SiteIssueCreate,
    db: Session = Depends(get_db)
):
    # Check that the project exists
    project = db.query(models.Project).filter(
        models.Project.id == issue.project_id
    ).first()

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    db_issue = models.SiteIssue(
        project_id=issue.project_id,
        issue_type=issue.issue_type,
        description=issue.description,
        severity=issue.severity,
        status=issue.status,
        issue_date=issue.issue_date
    )

    db.add(db_issue)
    db.commit()
    db.refresh(db_issue)

    # Create notification
    notification = models.Notification(
        title="Site Issue Reported",
        message=f"{issue.severity} site issue reported for project {issue.project_id}: {issue.description}"
    )

    db.add(notification)
    db.commit()

    return db_issue
# ==========================
# GET ALL SITE ISSUES
# ==========================
@router.get("/", response_model=list[schemas.SiteIssue])
def get_site_issues(
    db: Session = Depends(get_db)
):
    return db.query(models.SiteIssue).all()


# ==========================
# GET SITE ISSUES BY PROJECT
# ==========================
@router.get("/project/{project_id}", response_model=list[schemas.SiteIssue])
def get_project_site_issues(
    project_id: int,
    db: Session = Depends(get_db)
):
    project = db.query(models.Project).filter(
        models.Project.id == project_id
    ).first()

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    return db.query(models.SiteIssue).filter(
        models.SiteIssue.project_id == project_id
    ).all()


# ==========================
# GET SITE ISSUE BY ID
# ==========================
@router.get("/{issue_id}", response_model=schemas.SiteIssue)
def get_site_issue(
    issue_id: int,
    db: Session = Depends(get_db)
):
    issue = db.query(models.SiteIssue).filter(
        models.SiteIssue.id == issue_id
    ).first()

    if not issue:
        raise HTTPException(
            status_code=404,
            detail="Site issue not found"
        )

    return issue