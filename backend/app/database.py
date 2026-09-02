from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

DATABASE_URL = "sqlite:///./construction.db"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()
from sqlalchemy import inspect, text

def ensure_notifications_table_schema():
    with engine.connect() as conn:
        inspector = inspect(engine)
        if "notifications" in inspector.get_table_names():
            columns = [c["name"] for c in inspector.get_columns("notifications")]
            if "user_id" not in columns:
                conn.execute(text("DROP TABLE notifications"))
                conn.commit()

ensure_notifications_table_schema()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()