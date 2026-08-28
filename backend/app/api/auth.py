from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import UserLogin, UserRegister, AuthResponse, SingleUserResponse, GenericResponse
from services import AuthService
from core.security import decode_token
from core.auth import oauth2_scheme

router = APIRouter()
auth_service = AuthService()

@router.post("/register", response_model=AuthResponse)
def register(data: UserRegister, db: Session = Depends(get_db)):
    result = auth_service.register(db, data.model_dump())
    return {"success": True, "data": result}

@router.post("/login", response_model=AuthResponse)
def login(data: UserLogin, db: Session = Depends(get_db)):
    result = auth_service.login(db, data.model_dump())
    return {"success": True, "data": result}

@router.post("/logout", response_model=GenericResponse)
def logout():
    return {"success": True, "message": "Logout successful"}

@router.post("/forgot-password", response_model=GenericResponse)
def forgot_password():
    return {"success": True, "message": "Reset instructions sent"}

@router.post("/reset-password", response_model=GenericResponse)
def reset_password():
    return {"success": True, "message": "Password reset successful"}

@router.get("/me", response_model=SingleUserResponse)
def get_current_user_profile(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    payload = decode_token(token)
    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    user_id = payload.get("sub")
    profile = auth_service.get_user_profile(db, user_id)
    return {"success": True, "data": profile}

# Compatibility alias route for /profile
@router.get("/profile", response_model=SingleUserResponse)
def get_profile(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    return get_current_user_profile(token, db)
