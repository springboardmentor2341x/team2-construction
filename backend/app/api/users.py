from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import UserResponse, UserCreate, UserUpdate, UserListResponse, SingleUserResponse, GenericResponse
from models import User, Role, Contractor, Worker, SiteEngineer
from core.security import get_password_hash
from core.permissions import RoleChecker
import uuid

router = APIRouter()

# Helper to format User model output to schema
def format_user(user: User) -> dict:
    profile = None
    if user.role.name == "contractor" and user.contractor_profile:
        profile = {"id": user.contractor_profile.id, "specialty": user.contractor_profile.specialty, "status": user.contractor_profile.status}
    elif user.role.name == "worker" and user.worker_profile:
        profile = {"id": user.worker_profile.id, "role": user.worker_profile.role, "status": user.worker_profile.status, "assignedProjectId": user.worker_profile.assigned_project_id}
    elif user.role.name == "site_engineer" and user.site_engineer_profile:
        profile = {"id": user.site_engineer_profile.id, "status": user.site_engineer_profile.status}

    return {
        "id": user.id,
        "email": user.email,
        "name": user.name,
        "phone": user.phone,
        "company": user.company,
        "avatar": user.avatar,
        "role": user.role.name,
        "profile": profile
    }

@router.get("/", response_model=UserListResponse, dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    formatted = [format_user(u) for u in users]
    return {"success": True, "data": formatted}

@router.get("/{id}", response_model=SingleUserResponse)
def get_user(id: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"success": True, "data": format_user(user)}

@router.post("/", response_model=SingleUserResponse, dependencies=[Depends(RoleChecker(["admin"]))])
def create_user(data: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == data.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already in use")

    role = db.query(Role).filter(Role.name == data.role).first()
    if not role:
        raise HTTPException(status_code=400, detail=f"Role {data.role} does not exist")

    user_id = str(uuid.uuid4())[:8]
    password_hash = get_password_hash(data.password)

    new_user = User(
        id=user_id,
        email=data.email,
        password_hash=password_hash,
        name=data.name,
        phone=data.phone,
        company=data.company,
        avatar=f"https://images.unsplash.com/photo-{1500000000000}?auto=format&fit=crop&q=80&w=150",
        role_id=role.id
    )
    db.add(new_user)
    db.flush()

    if data.role == "contractor":
        prof = Contractor(id=str(uuid.uuid4())[:8], user_id=new_user.id, specialty=data.specialty or "General", status="Active")
        db.add(prof)
    elif data.role == "worker":
        prof = Worker(id=str(uuid.uuid4())[:8], user_id=new_user.id, role=data.trade or "Laborer", status="Active")
        db.add(prof)
    elif data.role == "site_engineer":
        prof = SiteEngineer(id=str(uuid.uuid4())[:8], user_id=new_user.id, status="Active")
        db.add(prof)

    db.commit()
    db.refresh(new_user)
    return {"success": True, "data": format_user(new_user)}

@router.put("/{id}", response_model=SingleUserResponse)
def update_user(id: str, data: UserUpdate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if data.email and data.email != user.email:
        dup = db.query(User).filter(User.email == data.email).first()
        if dup:
            raise HTTPException(status_code=400, detail="Email already in use")
        user.email = data.email

    if data.name: user.name = data.name
    if data.phone: user.phone = data.phone
    if data.company: user.company = data.company
    if data.avatar: user.avatar = data.avatar

    # Update role-specific fields
    if user.role.name == "contractor" and user.contractor_profile:
        if data.specialty: user.contractor_profile.specialty = data.specialty
        if data.status: user.contractor_profile.status = data.status
    elif user.role.name == "worker" and user.worker_profile:
        if data.trade: user.worker_profile.role = data.trade
        if data.status: user.worker_profile.status = data.status
    elif user.role.name == "site_engineer" and user.site_engineer_profile:
        if data.status: user.site_engineer_profile.status = data.status

    db.commit()
    db.refresh(user)
    return {"success": True, "data": format_user(user)}

@router.delete("/{id}", response_model=GenericResponse, dependencies=[Depends(RoleChecker(["admin"]))])
def delete_user(id: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(user)
    db.commit()
    return {"success": True, "message": "User deleted successfully"}
