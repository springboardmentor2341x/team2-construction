"""
Module 7 – Procurement Management API Router
Endpoints for Vendors, Procurement Categories, Procurement Requests,
Purchase Orders, Goods Receipts, and Invoices.
"""
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session
from database.session import get_db
from core.security import decode_token
from core.auth import oauth2_scheme
from core.permissions import RoleChecker
from services import ProcurementService
from typing import Optional

router = APIRouter()
procurement_service = ProcurementService()

# ---- Auth Helper ----
def get_current_user(token: str = Depends(oauth2_scheme)) -> dict:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return payload

def get_current_user_id(token: str = Depends(oauth2_scheme)) -> str:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return payload.get("sub")

# =======================================================================
# VENDORS
# =======================================================================

@router.get("/vendors")
def list_vendors(
    category: Optional[str] = None,
    status: Optional[str] = None,
    search: Optional[str] = None,
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    vendors, total = procurement_service.get_vendors(db, category=category, status=status, search=search, skip=skip, limit=limit)
    result = []
    for v in vendors:
        total_orders = len(v.purchase_orders) if v.purchase_orders else 0
        total_value = sum(po.total_amount for po in v.purchase_orders) if v.purchase_orders else 0.0
        result.append({
            "id": v.id,
            "name": v.name,
            "contact_person": v.contact_person,
            "contact_number": v.contact_number,
            "email": v.email,
            "address": v.address,
            "category": v.category,
            "products_services": v.products_services,
            "status": v.status,
            "created_at": v.created_at.isoformat() if v.created_at else None,
            "updated_at": v.updated_at.isoformat() if v.updated_at else None,
            "total_orders": total_orders,
            "total_value": total_value
        })
    return {"success": True, "data": result, "total": total}


@router.get("/vendors/{vendor_id}")
def get_vendor(
    vendor_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    v = procurement_service.get_vendor_by_id(db, vendor_id)
    return {"success": True, "data": {
        "id": v.id,
        "name": v.name,
        "contact_person": v.contact_person,
        "contact_number": v.contact_number,
        "email": v.email,
        "address": v.address,
        "category": v.category,
        "products_services": v.products_services,
        "status": v.status,
        "created_at": v.created_at.isoformat() if v.created_at else None,
        "updated_at": v.updated_at.isoformat() if v.updated_at else None
    }}


@router.post("/vendors", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def create_vendor(data: dict, db: Session = Depends(get_db)):
    vendor = procurement_service.create_vendor(db, data)
    return {"success": True, "data": {"id": vendor.id, "name": vendor.name}}


@router.put("/vendors/{vendor_id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def update_vendor(vendor_id: str, data: dict, db: Session = Depends(get_db)):
    vendor = procurement_service.update_vendor(db, vendor_id, data)
    return {"success": True, "data": {"id": vendor.id, "name": vendor.name}}


@router.delete("/vendors/{vendor_id}", dependencies=[Depends(RoleChecker(["admin"]))])
def delete_vendor(vendor_id: str, db: Session = Depends(get_db)):
    procurement_service.delete_vendor(db, vendor_id)
    return {"success": True, "message": "Vendor deleted successfully"}


# =======================================================================
# PROCUREMENT CATEGORIES
# =======================================================================

@router.get("/procurement/categories")
def list_categories(
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    cats = procurement_service.get_categories(db)
    return {"success": True, "data": [
        {"id": c.id, "name": c.name, "description": c.description, "created_at": c.created_at.isoformat() if c.created_at else None}
        for c in cats
    ]}


@router.post("/procurement/categories", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def create_category(data: dict, db: Session = Depends(get_db)):
    cat = procurement_service.create_category(db, data)
    return {"success": True, "data": {"id": cat.id, "name": cat.name}}


@router.put("/procurement/categories/{cat_id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def update_category(cat_id: str, data: dict, db: Session = Depends(get_db)):
    cat = procurement_service.update_category(db, cat_id, data)
    return {"success": True, "data": {"id": cat.id, "name": cat.name}}


@router.delete("/procurement/categories/{cat_id}", dependencies=[Depends(RoleChecker(["admin"]))])
def delete_category(cat_id: str, db: Session = Depends(get_db)):
    procurement_service.delete_category(db, cat_id)
    return {"success": True, "message": "Category deleted"}


# =======================================================================
# PROCUREMENT REQUESTS
# =======================================================================

@router.get("/procurement/requests")
def list_procurement_requests(
    project_id: Optional[str] = None,
    status: Optional[str] = None,
    priority: Optional[str] = None,
    search: Optional[str] = None,
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    user_id = current_user.get("sub")
    user_role = current_user.get("role")
    reqs, total = procurement_service.get_requests(
        db, project_id=project_id, status=status, priority=priority,
        search=search, user_id=user_id, user_role=user_role, skip=skip, limit=limit
    )
    result = []
    for r in reqs:
        result.append({
            "id": r.id,
            "project_id": r.project_id,
            "project_name": r.project.name if r.project else "",
            "requested_by_id": r.requested_by_id,
            "requested_by_name": r.requested_by.name if r.requested_by else "",
            "approved_by_name": r.approved_by.name if r.approved_by else None,
            "category_id": r.category_id,
            "category_name": r.category.name if r.category else None,
            "item_name": r.item_name,
            "quantity": r.quantity,
            "unit": r.unit,
            "required_date": r.required_date.isoformat().split("T")[0] if r.required_date else None,
            "purpose": r.purpose,
            "priority": r.priority,
            "request_date": r.request_date.isoformat() if r.request_date else None,
            "status": r.status,
            "remarks": r.remarks,
            "rejection_reason": r.rejection_reason,
            "available_quantity": r.available_quantity,
            "shortage_quantity": r.shortage_quantity,
            "material_id": r.material_id,
            "resource_id": r.resource_id,
            "created_at": r.created_at.isoformat() if r.created_at else None
        })
    return {"success": True, "data": result, "total": total}


@router.get("/procurement/requests/{req_id}")
def get_procurement_request(
    req_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    r = procurement_service.get_request_by_id(db, req_id)
    return {"success": True, "data": {
        "id": r.id,
        "project_id": r.project_id,
        "project_name": r.project.name if r.project else "",
        "requested_by_id": r.requested_by_id,
        "requested_by_name": r.requested_by.name if r.requested_by else "",
        "approved_by_name": r.approved_by.name if r.approved_by else None,
        "category_id": r.category_id,
        "category_name": r.category.name if r.category else None,
        "item_name": r.item_name,
        "quantity": r.quantity,
        "unit": r.unit,
        "required_date": r.required_date.isoformat().split("T")[0] if r.required_date else None,
        "purpose": r.purpose,
        "priority": r.priority,
        "request_date": r.request_date.isoformat() if r.request_date else None,
        "status": r.status,
        "remarks": r.remarks,
        "rejection_reason": r.rejection_reason,
        "available_quantity": r.available_quantity,
        "shortage_quantity": r.shortage_quantity,
        "material_id": r.material_id,
        "resource_id": r.resource_id,
        "created_at": r.created_at.isoformat() if r.created_at else None
    }}


@router.post("/procurement/requests")
def create_procurement_request(
    data: dict,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    user_id = current_user.get("sub")
    user_role = current_user.get("role")
    # Client cannot create procurement requests
    if user_role == "client":
        raise HTTPException(status_code=403, detail="Clients cannot create procurement requests")
    req = procurement_service.create_request(db, user_id, data)
    return {"success": True, "data": {"id": req.id, "status": req.status}}


@router.put("/procurement/requests/{req_id}")
def update_procurement_request(
    req_id: str,
    data: dict,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    user_role = current_user.get("role")
    if user_role == "client":
        raise HTTPException(status_code=403, detail="Forbidden")
    req = procurement_service.update_request(db, req_id, data)
    return {"success": True, "data": {"id": req.id, "status": req.status}}


@router.post("/procurement/requests/{req_id}/approve",
             dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def approve_procurement_request(
    req_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    approver_id = current_user.get("sub")
    req = procurement_service.approve_request(db, req_id, approver_id)
    return {"success": True, "message": f"Procurement request {req_id} approved", "data": {"id": req.id, "status": req.status}}


@router.post("/procurement/requests/{req_id}/reject",
             dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def reject_procurement_request(
    req_id: str,
    data: dict = None,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    approver_id = current_user.get("sub")
    reason = (data or {}).get("rejection_reason")
    req = procurement_service.reject_request(db, req_id, approver_id, reason)
    return {"success": True, "message": f"Procurement request {req_id} rejected", "data": {"id": req.id, "status": req.status}}


# =======================================================================
# INVENTORY CHECK
# =======================================================================

@router.post("/procurement/inventory-check")
def check_inventory(
    data: dict,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    material_id = data.get("material_id")
    required_qty = data.get("required_quantity", 0)
    if not material_id:
        raise HTTPException(status_code=400, detail="material_id is required")
    result = procurement_service.check_inventory(db, material_id, required_qty)
    return {"success": True, "data": result}


# =======================================================================
# PURCHASE ORDERS
# =======================================================================

@router.get("/purchase-orders")
def list_purchase_orders(
    project_id: Optional[str] = None,
    vendor_id: Optional[str] = None,
    status: Optional[str] = None,
    search: Optional[str] = None,
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    pos, total = procurement_service.get_purchase_orders(
        db, project_id=project_id, vendor_id=vendor_id, status=status, search=search, skip=skip, limit=limit
    )
    result = []
    for p in pos:
        result.append({
            "id": p.id,
            "vendor_id": p.vendor_id,
            "vendor_name": p.vendor.name if p.vendor else "TBD",
            "project_id": p.project_id,
            "project_name": p.project.name if p.project else "",
            "procurement_request_id": p.procurement_request_id,
            "created_by_name": p.created_by.name if p.created_by else "",
            "order_date": p.order_date.isoformat() if p.order_date else None,
            "expected_delivery_date": p.expected_delivery_date.isoformat().split("T")[0] if p.expected_delivery_date else None,
            "actual_delivery_date": p.actual_delivery_date.isoformat().split("T")[0] if p.actual_delivery_date else None,
            "subtotal": p.subtotal,
            "tax_amount": p.tax_amount,
            "additional_charges": p.additional_charges,
            "total_amount": p.total_amount,
            "status": p.status,
            "notes": p.notes,
            "items_count": len(p.items) if p.items else 0,
            "created_at": p.created_at.isoformat() if p.created_at else None
        })
    return {"success": True, "data": result, "total": total}


@router.get("/purchase-orders/{po_id}")
def get_purchase_order(
    po_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    p = procurement_service.get_purchase_order_by_id(db, po_id)
    items = []
    for i in (p.items or []):
        items.append({
            "id": i.id,
            "purchase_order_id": i.purchase_order_id,
            "material_id": i.material_id,
            "material_name": i.material.name if i.material else None,
            "resource_id": i.resource_id,
            "description": i.description,
            "quantity": i.quantity,
            "unit": i.unit,
            "unit_price": i.unit_price,
            "tax_percent": i.tax_percent,
            "line_total": i.line_total,
            "received_quantity": i.received_quantity
        })
    return {"success": True, "data": {
        "id": p.id,
        "vendor_id": p.vendor_id,
        "vendor_name": p.vendor.name if p.vendor else "TBD",
        "project_id": p.project_id,
        "project_name": p.project.name if p.project else "",
        "procurement_request_id": p.procurement_request_id,
        "created_by_name": p.created_by.name if p.created_by else "",
        "order_date": p.order_date.isoformat() if p.order_date else None,
        "expected_delivery_date": p.expected_delivery_date.isoformat().split("T")[0] if p.expected_delivery_date else None,
        "actual_delivery_date": p.actual_delivery_date.isoformat().split("T")[0] if p.actual_delivery_date else None,
        "subtotal": p.subtotal,
        "tax_amount": p.tax_amount,
        "additional_charges": p.additional_charges,
        "total_amount": p.total_amount,
        "status": p.status,
        "notes": p.notes,
        "items": items,
        "created_at": p.created_at.isoformat() if p.created_at else None
    }}


@router.post("/purchase-orders", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def create_purchase_order(
    data: dict,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    user_id = current_user.get("sub")
    po = procurement_service.create_purchase_order(db, user_id, data)
    return {"success": True, "data": {"id": po.id, "status": po.status, "total_amount": po.total_amount}}


@router.put("/purchase-orders/{po_id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def update_purchase_order(
    po_id: str,
    data: dict,
    db: Session = Depends(get_db)
):
    po = procurement_service.update_purchase_order(db, po_id, data)
    return {"success": True, "data": {"id": po.id, "status": po.status}}


@router.delete("/purchase-orders/{po_id}", dependencies=[Depends(RoleChecker(["admin"]))])
def delete_purchase_order(
    po_id: str,
    db: Session = Depends(get_db)
):
    po = procurement_service.get_purchase_order_by_id(db, po_id)
    if po.status not in ("Draft", "Cancelled"):
        raise HTTPException(status_code=400, detail="Only Draft or Cancelled POs can be deleted")
    from database.session import get_db as _get_db
    db.delete(po)
    db.commit()
    return {"success": True, "message": "Purchase Order deleted"}


# ---- PO Items ----

@router.post("/purchase-orders/{po_id}/items",
             dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def add_po_item(po_id: str, data: dict, db: Session = Depends(get_db)):
    item = procurement_service.add_po_item(db, po_id, data)
    return {"success": True, "data": {"id": item.id, "line_total": item.line_total}}


@router.put("/purchase-orders/{po_id}/items/{item_id}",
            dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def update_po_item(po_id: str, item_id: str, data: dict, db: Session = Depends(get_db)):
    from models import PurchaseOrderItem
    poi = db.query(PurchaseOrderItem).filter(
        PurchaseOrderItem.id == item_id,
        PurchaseOrderItem.purchase_order_id == po_id
    ).first()
    if not poi:
        raise HTTPException(status_code=404, detail="PO item not found")
    if data.get("quantity") is not None:
        poi.quantity = data["quantity"]
    if data.get("unit_price") is not None:
        poi.unit_price = data["unit_price"]
    if data.get("description"):
        poi.description = data["description"]
    if data.get("unit"):
        poi.unit = data["unit"]
    if data.get("tax_percent") is not None:
        poi.tax_percent = data["tax_percent"]
    poi.line_total = poi.quantity * poi.unit_price
    db.flush()
    po = procurement_service.get_purchase_order_by_id(db, po_id)
    from models import PurchaseOrderItem as POI
    all_items = db.query(POI).filter(POI.purchase_order_id == po_id).all()
    po.subtotal = sum(i.line_total for i in all_items)
    po.total_amount = po.subtotal + po.tax_amount + po.additional_charges
    db.commit()
    return {"success": True, "data": {"id": poi.id, "line_total": poi.line_total}}


@router.delete("/purchase-orders/{po_id}/items/{item_id}",
               dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def delete_po_item(po_id: str, item_id: str, db: Session = Depends(get_db)):
    procurement_service.delete_po_item(db, po_id, item_id)
    return {"success": True, "message": "PO item deleted"}


# =======================================================================
# GOODS RECEIPTS (RECEIVING)
# =======================================================================

@router.post("/purchase-orders/{po_id}/receive",
             dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer"]))])
def receive_goods(
    po_id: str,
    data: dict,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    user_id = current_user.get("sub")
    data["purchase_order_id"] = po_id
    # Ensure project_id is set from PO if not provided
    if not data.get("project_id"):
        po = procurement_service.get_purchase_order_by_id(db, po_id)
        data["project_id"] = po.project_id
    gr = procurement_service.receive_goods(db, user_id, data)
    return {"success": True, "data": {"id": gr.id, "purchase_order_id": po_id}}


@router.get("/purchase-orders/{po_id}/receipts")
def get_receipts(
    po_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    receipts = procurement_service.get_receipts(db, po_id)
    result = []
    for gr in receipts:
        result.append({
            "id": gr.id,
            "purchase_order_id": gr.purchase_order_id,
            "vendor_name": gr.vendor.name if gr.vendor else None,
            "project_name": gr.project.name if gr.project else "",
            "received_by_name": gr.received_by.name if gr.received_by else "",
            "received_date": gr.received_date.isoformat() if gr.received_date else None,
            "remarks": gr.remarks,
            "delivery_note_number": gr.delivery_note_number,
            "receipt_items": [
                {
                    "id": i.id,
                    "material_id": i.material_id,
                    "material_name": i.material.name if i.material else None,
                    "description": i.description,
                    "ordered_quantity": i.ordered_quantity,
                    "received_quantity": i.received_quantity,
                    "unit": i.unit
                } for i in (gr.receipt_items or [])
            ],
            "created_at": gr.created_at.isoformat() if gr.created_at else None
        })
    return {"success": True, "data": result}


# =======================================================================
# INVOICES
# =======================================================================

@router.get("/invoices")
def list_invoices(
    project_id: Optional[str] = None,
    vendor_id: Optional[str] = None,
    payment_status: Optional[str] = None,
    invoice_status: Optional[str] = None,
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    import datetime as dt
    invoices, total = procurement_service.get_invoices(
        db, project_id=project_id, vendor_id=vendor_id,
        payment_status=payment_status, invoice_status=invoice_status,
        skip=skip, limit=limit
    )
    now = dt.datetime.utcnow()
    result = []
    for inv in invoices:
        is_overdue = bool(inv.due_date and inv.due_date < now and inv.payment_status not in ("Paid",))
        result.append({
            "id": inv.id,
            "invoice_number": inv.invoice_number,
            "vendor_id": inv.vendor_id,
            "vendor_name": inv.vendor.name if inv.vendor else None,
            "purchase_order_id": inv.purchase_order_id,
            "project_id": inv.project_id,
            "project_name": inv.project.name if inv.project else "",
            "created_by_name": inv.created_by.name if inv.created_by else "",
            "invoice_date": inv.invoice_date.isoformat().split("T")[0] if inv.invoice_date else None,
            "due_date": inv.due_date.isoformat().split("T")[0] if inv.due_date else None,
            "invoice_amount": inv.invoice_amount,
            "paid_amount": inv.paid_amount,
            "payment_status": inv.payment_status,
            "invoice_status": inv.invoice_status,
            "remarks": inv.remarks,
            "is_overdue": is_overdue,
            "created_at": inv.created_at.isoformat() if inv.created_at else None
        })
    return {"success": True, "data": result, "total": total}


@router.get("/invoices/{inv_id}")
def get_invoice(
    inv_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    import datetime as dt
    inv = procurement_service.get_invoice_by_id(db, inv_id)
    now = dt.datetime.utcnow()
    is_overdue = bool(inv.due_date and inv.due_date < now and inv.payment_status not in ("Paid",))
    return {"success": True, "data": {
        "id": inv.id,
        "invoice_number": inv.invoice_number,
        "vendor_id": inv.vendor_id,
        "vendor_name": inv.vendor.name if inv.vendor else None,
        "purchase_order_id": inv.purchase_order_id,
        "project_id": inv.project_id,
        "project_name": inv.project.name if inv.project else "",
        "created_by_name": inv.created_by.name if inv.created_by else "",
        "invoice_date": inv.invoice_date.isoformat().split("T")[0] if inv.invoice_date else None,
        "due_date": inv.due_date.isoformat().split("T")[0] if inv.due_date else None,
        "invoice_amount": inv.invoice_amount,
        "paid_amount": inv.paid_amount,
        "payment_status": inv.payment_status,
        "invoice_status": inv.invoice_status,
        "remarks": inv.remarks,
        "is_overdue": is_overdue,
        "created_at": inv.created_at.isoformat() if inv.created_at else None
    }}


@router.post("/invoices", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def create_invoice(
    data: dict,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    user_id = current_user.get("sub")
    inv = procurement_service.create_invoice(db, user_id, data)
    return {"success": True, "data": {"id": inv.id, "invoice_number": inv.invoice_number}}


@router.put("/invoices/{inv_id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def update_invoice(
    inv_id: str,
    data: dict,
    db: Session = Depends(get_db)
):
    inv = procurement_service.update_invoice(db, inv_id, data)
    return {"success": True, "data": {"id": inv.id, "payment_status": inv.payment_status, "invoice_status": inv.invoice_status}}


# =======================================================================
# ANALYTICS
# =======================================================================

@router.get("/procurement/summary")
def get_procurement_summary(
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    summary = procurement_service.get_summary(db)
    return {"success": True, "data": summary}


@router.get("/procurement/project/{project_id}")
def get_project_procurement_summary(
    project_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    summary = procurement_service.get_project_summary(db, project_id)
    return {"success": True, "data": summary}


@router.get("/procurement/vendor/{vendor_id}")
def get_vendor_procurement_summary(
    vendor_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    summary = procurement_service.get_vendor_summary(db, vendor_id)
    return {"success": True, "data": summary}
