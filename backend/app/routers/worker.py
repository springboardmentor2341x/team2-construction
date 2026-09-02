from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/workers",
    tags=["Workers"]
)


@router.post("/", response_model=schemas.Worker)
def create_worker(
    worker: schemas.WorkerCreate,
    db: Session = Depends(get_db)
):
    return crud.create_worker(db, worker)


@router.get("/", response_model=list[schemas.Worker])
def get_workers(
    db: Session = Depends(get_db)
):
    return crud.get_workers(db)