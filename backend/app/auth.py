from datetime import datetime, timedelta

from jose import  JWTError,jwt
from passlib.context import CryptContext

from app.config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

import bcrypt

# Password Hashing using bcrypt directly
def hash_password(password: str) -> str:
    pwd_bytes = password.encode('utf-8')[:72]
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(pwd_bytes, salt).decode('utf-8')


def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        pwd_bytes = plain_password.encode('utf-8')[:72]
        hash_bytes = hashed_password.encode('utf-8')
        return bcrypt.checkpw(pwd_bytes, hash_bytes)
    except Exception:
        return False



from app.database import get_db
from app import crud


# JWT Token Creation
def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return encoded_jwt
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/users/login")


def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        email = payload.get("sub")

        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")

        user = crud.get_user_by_email(db, email)

        if user is None:
            raise HTTPException(status_code=401, detail="User not found")

        return user

    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

def role_required(allowed_roles: list):
    def role_checker(current_user=Depends(get_current_user)):
        if current_user.role not in allowed_roles:
            raise HTTPException(
                status_code=403,
                detail="You don't have permission to access this resource."
            )
        return current_user

    return role_checker


from app import models

def check_project_access(
    db: Session,
    project_id: int,
    current_user: models.User
):
    project = db.query(models.Project).filter(models.Project.id == project_id).first()
    if not project:
        raise HTTPException(
            status_code=404,
            detail=f"Project with ID {project_id} not found"
        )

    admin_roles = ["Admin", "Super Admin", "Admin User", "admin", "superadmin"]
    if current_user.role in admin_roles:
        return project

    if current_user.role in ["Project Manager", "project_manager", "Manager"]:
        if project.project_manager and (
            current_user.full_name.lower() in project.project_manager.lower()
            or current_user.email.lower() in project.project_manager.lower()
        ):
            return project
        if not project.project_manager or project.project_manager.strip() == "":
            return project
        raise HTTPException(
            status_code=403,
            detail="You do not have authorization to access reports for this project"
        )

    eng_assign = db.query(models.SiteEngineerAssignment).filter(
        models.SiteEngineerAssignment.project_id == project_id,
        (models.SiteEngineerAssignment.engineer_name == current_user.full_name)
        | (models.SiteEngineerAssignment.engineer_name == current_user.email)
    ).first()
    if eng_assign:
        return project

    cont_assign = db.query(models.ContractorAssignment).filter(
        models.ContractorAssignment.project_id == project_id,
        (models.ContractorAssignment.contractor_name == current_user.full_name)
        | (models.ContractorAssignment.email == current_user.email)
    ).first()
    if cont_assign:
        return project

    worker = db.query(models.Worker).filter(models.Worker.full_name == current_user.full_name).first()
    if worker:
        worker_assign = db.query(models.WorkerAssignment).filter(
            models.WorkerAssignment.project_id == project_id,
            models.WorkerAssignment.worker_id == worker.id
        ).first()
        if worker_assign:
            return project

    raise HTTPException(
        status_code=403,
        detail="You do not have authorization to access reports for this project"
    )
