from typing import List
from fastapi import Depends, HTTPException, status
from core.security import decode_token
from core.auth import oauth2_scheme

# Define role-checking class to be used as FastAPI dependencies
class RoleChecker:
    def __init__(self, allowed_roles: List[str]):
        self.allowed_roles = allowed_roles

    def __call__(self, token: str = Depends(oauth2_scheme)):
        payload = decode_token(token)
        if not payload:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid or expired authorization token"
            )
        user_role = payload.get("role")
        if user_role not in self.allowed_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Forbidden: Restricted to roles: {self.allowed_roles}"
            )
        return payload
