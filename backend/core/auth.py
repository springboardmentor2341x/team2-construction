from fastapi.security import OAuth2PasswordBearer
from core.config import settings

# Setup OAuth2PasswordBearer to extract Bearer JWT token from header
oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl=f"{settings.API_STR}/auth/login"
)
