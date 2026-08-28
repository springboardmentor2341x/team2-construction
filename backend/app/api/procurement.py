from fastapi import APIRouter, Depends, Query, HTTPException
from typing import Optional

from sqlalchemy.orm import Session

from database.session import get_db
from core.security import decode_token
from core.auth import oauth2_scheme
from core.permissions import RoleChecker
from services import ProcurementService

from schemas import (
    VendorCreate,
    VendorUpdate,
    ProcurementCategoryCreate,
    ProcurementRequestCreate,
    ProcurementRequestUpdate,
    ProcurementRequestApprove,
    PurchaseOrderCreate,
    PurchaseOrderUpdate,
    POItemCreate,
    GoodsReceiptCreate,
    ProcurementInvoiceCreate,
    ProcurementInvoiceUpdate,
    ProcurementPaymentCreate,
)

router = APIRouter()
def get_current_user_id(token: str = Depends(oauth2_scheme)) -> str:
    payload = decode_token(token)

    if not payload:
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    return payload.get("sub")
procurement_service = ProcurementService()


# ============================================================
# 1. VENDOR MANAGEMENT
# ============================================================

@router.get("/vendors", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_vendors(
    category: Optional[str] = None,
    status: Optional[str] = None,
    search: Optional[str] = None,
    skip: int = 0,
    limit: int = 50,
    db: Session = Depends(get_db)
):
    vendors, total = procurement_service.get_vendors(
        db=db,
        category=category,
        status=status,
        search=search,
        skip=skip,
        limit=limit
    )

    return {
        "success": True,
        "total": total,
        "data": vendors
    }


@router.get("/vendors/{vendor_id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_vendor(
    vendor_id: str,
    db: Session = Depends(get_db)
):
    vendor = procurement_service.get_vendor_by_id(db, vendor_id)

    return {
        "success": True,
        "data": vendor
    }


@router.post(
    "/vendors",
    dependencies=[Depends(RoleChecker(["admin"]))]
)
def create_vendor(
    data: VendorCreate,
    db: Session = Depends(get_db)
):
    vendor = procurement_service.create_vendor(
        db,
        data.model_dump()
    )

    return {
        "success": True,
        "message": "Vendor created successfully",
        "data": vendor
    }


@router.put(
    "/vendors/{vendor_id}",
    dependencies=[Depends(RoleChecker(["admin"]))]
)
def update_vendor(
    vendor_id: str,
    data: VendorUpdate,
    db: Session = Depends(get_db)
):
    vendor = procurement_service.update_vendor(
        db,
        vendor_id,
        data.model_dump(exclude_unset=True)
    )

    return {
        "success": True,
        "message": "Vendor updated successfully",
        "data": vendor
    }


@router.delete(
    "/vendors/{vendor_id}",
    dependencies=[Depends(RoleChecker(["admin"]))]
)
def delete_vendor(
    vendor_id: str,
    db: Session = Depends(get_db)
):
    procurement_service.delete_vendor(db, vendor_id)

    return {
        "success": True,
        "message": "Vendor deleted successfully"
    }


# ============================================================
# 2. PROCUREMENT CATEGORIES
# ============================================================

@router.get("/categories")
def get_categories(
    db: Session = Depends(get_db)
):
    categories = procurement_service.get_categories(db)

    return {
        "success": True,
        "data": categories
    }


@router.post(
    "/categories",
    dependencies=[Depends(RoleChecker(["admin"]))]
)
def create_category(
    data: ProcurementCategoryCreate,
    db: Session = Depends(get_db)
):
    category = procurement_service.create_category(
        db,
        data.model_dump()
    )

    return {
        "success": True,
        "message": "Procurement category created successfully",
        "data": category
    }


@router.put(
    "/categories/{category_id}",
    dependencies=[Depends(RoleChecker(["admin"]))]
)
def update_category(
    category_id: str,
    data: ProcurementCategoryCreate,
    db: Session = Depends(get_db)
):
    category = procurement_service.update_category(
        db,
        category_id,
        data.model_dump(exclude_unset=True)
    )

    return {
        "success": True,
        "message": "Procurement category updated successfully",
        "data": category
    }


@router.delete(
    "/categories/{category_id}",
    dependencies=[Depends(RoleChecker(["admin"]))]
)
def delete_category(
    category_id: str,
    db: Session = Depends(get_db)
):
    procurement_service.delete_category(db, category_id)

    return {
        "success": True,
        "message": "Procurement category deleted successfully"
    }


# ============================================================
# 3. INVENTORY CHECK
# ============================================================

@router.get("/inventory-check/{material_id}")
def check_inventory(
    material_id: str,
    required_quantity: float = Query(..., gt=0),
    db: Session = Depends(get_db)
):
    result = procurement_service.check_inventory(
        db,
        material_id,
        required_quantity
    )

    return {
        "success": True,
        "data": result
    }


# ============================================================
# 4. PROCUREMENT REQUESTS
# ============================================================

@router.get("/requests")
def get_procurement_requests(
    project_id: Optional[str] = None,
    status: Optional[str] = None,
    priority: Optional[str] = None,
    search: Optional[str] = None,
    skip: int = 0,
    limit: int = 50,
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    user_id = payload.get("sub")
    user_role = payload.get("role")
    requests, total = procurement_service.get_requests(
        db=db,
        project_id=project_id,
        status=status,
        priority=priority,
        search=search,
        user_id=user_id,
        user_role=user_role,
        skip=skip,
        limit=limit
    )

    return {
        "success": True,
        "total": total,
        "data": requests
    }


@router.get("/requests/{request_id}")
def get_procurement_request(
    request_id: str,
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    request = procurement_service.get_request_by_id(db, request_id)
    role = payload.get("role")
    if role not in ("admin", "project_manager") and request.requested_by_id != payload.get("sub"):
        raise HTTPException(status_code=403, detail="You can view only your own procurement request")
    return {"success": True, "data": request}


@router.post(
    "/requests",
    dependencies=[
        Depends(RoleChecker(["site_engineer"]))
    ]
)
def create_procurement_request(
    data: ProcurementRequestCreate,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    request = procurement_service.create_request(
        db,
        user_id,
        data.model_dump()
    )

    return {
        "success": True,
        "message": "Procurement request created successfully",
        "data": request
    }


@router.put(
    "/requests/{request_id}",
    dependencies=[
        Depends(RoleChecker(["site_engineer"]))
    ]
)
def update_procurement_request(
    request_id: str,
    data: ProcurementRequestUpdate,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    request = procurement_service.get_request_by_id(db, request_id)
    if request.requested_by_id != user_id:
        raise HTTPException(status_code=403, detail="You can update only your own procurement requests")
    if request.status != "Pending":
        raise HTTPException(status_code=400, detail="Only pending procurement requests can be edited")
    payload = data.model_dump(exclude_unset=True)
    payload.pop("status", None)
    request = procurement_service.update_request(db, request_id, payload)

    return {
        "success": True,
        "message": "Procurement request updated successfully",
        "data": request
    }


@router.post(
    "/requests/{request_id}/approve",
    dependencies=[
        Depends(RoleChecker(["admin"]))
    ]
)
def approve_procurement_request(
    request_id: str,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    request = procurement_service.approve_request(
        db,
        request_id,
        user_id
    )

    return {
        "success": True,
        "message": "Procurement request approved successfully",
        "data": request
    }


@router.post(
    "/requests/{request_id}/reject",
    dependencies=[
        Depends(RoleChecker(["admin"]))
    ]
)
def reject_procurement_request(
    request_id: str,
    data: ProcurementRequestApprove,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    request = procurement_service.reject_request(
        db,
        request_id,
        user_id,
        data.rejection_reason
    )

    return {
        "success": True,
        "message": "Procurement request rejected",
        "data": request
    }


# ============================================================
# 5. PURCHASE ORDERS
# ============================================================

@router.get("/purchase-orders", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_purchase_orders(
    project_id: Optional[str] = None,
    vendor_id: Optional[str] = None,
    status: Optional[str] = None,
    search: Optional[str] = None,
    skip: int = 0,
    limit: int = 50,
    db: Session = Depends(get_db)
):
    purchase_orders, total = procurement_service.get_purchase_orders(
        db=db,
        project_id=project_id,
        vendor_id=vendor_id,
        status=status,
        search=search,
        skip=skip,
        limit=limit
    )

    return {
        "success": True,
        "total": total,
        "data": purchase_orders
    }


@router.get("/purchase-orders/{po_id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_purchase_order(
    po_id: str,
    db: Session = Depends(get_db)
):
    po = procurement_service.get_purchase_order_by_id(
        db,
        po_id
    )

    return {
        "success": True,
        "data": po
    }


@router.post(
    "/purchase-orders",
    dependencies=[
        Depends(RoleChecker(["admin"]))
    ]
)
def create_purchase_order(
    data: PurchaseOrderCreate,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    po = procurement_service.create_purchase_order(
        db,
        user_id,
        data.model_dump()
    )

    return {
        "success": True,
        "message": "Purchase order created successfully",
        "data": po
    }


@router.put(
    "/purchase-orders/{po_id}",
    dependencies=[
        Depends(RoleChecker(["admin"]))
    ]
)
def update_purchase_order(
    po_id: str,
    data: PurchaseOrderUpdate,
    db: Session = Depends(get_db)
):
    po = procurement_service.update_purchase_order(
        db,
        po_id,
        data.model_dump(exclude_unset=True)
    )

    return {
        "success": True,
        "message": "Purchase order updated successfully",
        "data": po
    }


# ============================================================
# 6. PURCHASE ORDER ITEMS
# ============================================================

@router.post(
    "/purchase-orders/{po_id}/items",
    dependencies=[
        Depends(RoleChecker(["admin"]))
    ]
)
def add_purchase_order_item(
    po_id: str,
    data: POItemCreate,
    db: Session = Depends(get_db)
):
    item = procurement_service.add_po_item(
        db,
        po_id,
        data.model_dump()
    )

    return {
        "success": True,
        "message": "Purchase order item added successfully",
        "data": item
    }


@router.delete(
    "/purchase-orders/{po_id}/items/{item_id}",
    dependencies=[
        Depends(RoleChecker(["admin"]))
    ]
)
def delete_purchase_order_item(
    po_id: str,
    item_id: str,
    db: Session = Depends(get_db)
):
    procurement_service.delete_po_item(
        db,
        po_id,
        item_id
    )

    return {
        "success": True,
        "message": "Purchase order item deleted successfully"
    }


# ============================================================
# 7. GOODS RECEIPTS
# ============================================================

@router.get("/purchase-orders/{po_id}/goods-receipts", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_goods_receipts(
    po_id: str,
    db: Session = Depends(get_db)
):
    receipts = procurement_service.get_receipts(
        db,
        po_id
    )

    return {
        "success": True,
        "data": receipts
    }


@router.post(
    "/goods-receipts",
    dependencies=[
        Depends(RoleChecker(["admin"]))
    ]
)
def receive_goods(
    data: GoodsReceiptCreate,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    receipt = procurement_service.receive_goods(
        db,
        user_id,
        data.model_dump()
    )

    return {
        "success": True,
        "message": "Goods received successfully. Inventory updated.",
        "data": receipt
    }


# ============================================================
# 8. PROCUREMENT PAYMENTS
# ============================================================
@router.get("/invoices/{invoice_id}/payments", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_invoice_payments(invoice_id: str, db: Session = Depends(get_db)):
    return {"success": True, "data": procurement_service.get_invoice_payments(db, invoice_id)}

@router.post("/invoices/{invoice_id}/payments", dependencies=[Depends(RoleChecker(["admin"]))])
def record_invoice_payment(
    invoice_id: str, data: ProcurementPaymentCreate,
    user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)
):
    payment, invoice = procurement_service.record_payment(db, user_id, invoice_id, data.model_dump())
    return {"success": True, "message": "Payment recorded successfully", "data": payment, "invoice": invoice}

# ============================================================
# 8. PROCUREMENT INVOICES
# ============================================================

@router.get("/invoices", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_invoices(
    project_id: Optional[str] = None,
    vendor_id: Optional[str] = None,
    payment_status: Optional[str] = None,
    invoice_status: Optional[str] = None,
    skip: int = 0,
    limit: int = 50,
    db: Session = Depends(get_db)
):
    invoices, total = procurement_service.get_invoices(
        db=db,
        project_id=project_id,
        vendor_id=vendor_id,
        payment_status=payment_status,
        invoice_status=invoice_status,
        skip=skip,
        limit=limit
    )

    return {
        "success": True,
        "total": total,
        "data": invoices
    }


@router.get("/invoices/{invoice_id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_invoice(
    invoice_id: str,
    db: Session = Depends(get_db)
):
    invoice = procurement_service.get_invoice_by_id(
        db,
        invoice_id
    )

    return {
        "success": True,
        "data": invoice
    }


@router.post(
    "/invoices",
    dependencies=[
        Depends(RoleChecker(["admin"]))
    ]
)
def create_invoice(
    data: ProcurementInvoiceCreate,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    invoice = procurement_service.create_invoice(
        db,
        user_id,
        data.model_dump()
    )

    return {
        "success": True,
        "message": "Invoice created successfully",
        "data": invoice
    }


@router.put(
    "/invoices/{invoice_id}",
    dependencies=[
        Depends(RoleChecker(["admin"]))
    ]
)
def update_invoice(
    invoice_id: str,
    data: ProcurementInvoiceUpdate,
    db: Session = Depends(get_db)
):
    invoice = procurement_service.update_invoice(
        db,
        invoice_id,
        data.model_dump(exclude_unset=True)
    )

    return {
        "success": True,
        "message": "Invoice updated successfully",
        "data": invoice
    }


# ============================================================
# 9. PROCUREMENT ANALYTICS / SUMMARY
# ============================================================

@router.get("/summary", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_procurement_summary(
    db: Session = Depends(get_db)
):
    summary = procurement_service.get_summary(db)

    return {
        "success": True,
        "data": summary
    }


@router.get("/summary/project/{project_id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_project_procurement_summary(
    project_id: str,
    db: Session = Depends(get_db)
):
    summary = procurement_service.get_project_summary(
        db,
        project_id
    )

    return {
        "success": True,
        "data": summary
    }


@router.get("/summary/vendor/{vendor_id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def get_vendor_procurement_summary(
    vendor_id: str,
    db: Session = Depends(get_db)
):
    summary = procurement_service.get_vendor_summary(
        db,
        vendor_id
    )

    return {
        "success": True,
        "data": summary
    }