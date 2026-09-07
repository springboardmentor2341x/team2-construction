from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "BuildTrack"
    API_STR: str = "/api"
    SECRET_KEY: str = "buildtrack_jwt_secret_key_2026_super_secure"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 10080
    DATABASE_URL: str = "sqlite:///./dev.db"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

settings = Settings()
