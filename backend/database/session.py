from typing import Generator
from database.database import SessionLocal

# Database session generator dependency
def get_db() -> Generator:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
