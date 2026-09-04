from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas, crud

router = APIRouter(
    prefix="/invoices",
    tags=["Invoices"]
)


# ==========================
# CREATE INVOICE
# ==========================

@router.post(
    "/",
    response_model=schemas.InvoiceResponse
)
def create_invoice(
    invoice: schemas.InvoiceCreate,
    db: Session = Depends(get_db)
):
    return crud.create_invoice(db, invoice)


# ==========================
# GET ALL INVOICES
# ==========================

@router.get(
    "/",
    response_model=list[schemas.InvoiceResponse]
)
def get_invoices(
    db: Session = Depends(get_db)
):
    return crud.get_invoices(db)


# ==========================
# GET INVOICE BY ID
# ==========================

@router.get(
    "/{invoice_id}",
    response_model=schemas.InvoiceResponse
)
def get_invoice(
    invoice_id: int,
    db: Session = Depends(get_db)
):
    invoice = crud.get_invoice_by_id(
        db,
        invoice_id
    )

    if invoice is None:
        raise HTTPException(
            status_code=404,
            detail="Invoice not found"
        )

    return invoice


# ==========================
# UPDATE INVOICE
# ==========================

@router.put(
    "/{invoice_id}",
    response_model=schemas.InvoiceResponse
)
def update_invoice(
    invoice_id: int,
    invoice: schemas.InvoiceCreate,
    db: Session = Depends(get_db)
):
    updated = crud.update_invoice(
        db,
        invoice_id,
        invoice
    )

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Invoice not found"
        )

    return updated


# ==========================
# DELETE INVOICE
# ==========================

@router.delete("/{invoice_id}")
def delete_invoice(
    invoice_id: int,
    db: Session = Depends(get_db)
):
    deleted = crud.delete_invoice(
        db,
        invoice_id
    )

    if deleted is None:
        raise HTTPException(
            status_code=404,
            detail="Invoice not found"
        )

    return {
        "message": "Invoice deleted successfully"
    }