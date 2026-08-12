from typing import Optional, List
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session
from database.session import get_db
from schemas import (
    ResourceCategoryCreate, ResourceCategoryResponse,
    ResourceCreate, ResourceUpdate, ResourceResponse, ResourceSummaryResponse,
    ResourceAllocationCreate, ResourceAllocationUpdate, ResourceAllocationResponse,
    ResourceUtilizationCreate, ResourceUtilizationResponse, UtilizationSummaryResponse,
    MaintenanceRecordCreate, MaintenanceRecordUpdate, MaintenanceRecordResponse,
    GenericResponse
)
from services import ResourceService
from core.permissions import RoleChecker
from core.security import decode_token
from core.auth import oauth2_scheme

router = APIRouter()
resource_service = ResourceService()

# Helper for current user
def get_current_user_id(token: str = Depends(oauth2_scheme)) -> str:
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    return payload.get("sub")

# Serializers
def format_resource(r) -> dict:
    return {
        "id": r.id,
        "name": r.name,
        "categoryId": r.category_id,
        "categoryName": r.category.name if r.category else None,
        "quantity": r.quantity,
        "currentLocation": r.current_location,
        "currentProjectId": r.current_project_id,
        "currentProjectName": r.current_project.name if r.current_project else None,
        "status": r.status,
        "responsiblePerson": r.responsible_person,
        "modelNumber": r.model_number,
        "serialNumber": r.serial_number,
        "purchaseDate": r.purchase_date.strftime("%Y-%m-%d") if r.purchase_date else None,
        "hourlyCost": r.hourly_cost,
        "createdAt": r.created_at.isoformat(),
        "updatedAt": r.updated_at.isoformat()
    }

def format_allocation(a) -> dict:
    return {
        "id": a.id,
        "resourceId": a.resource_id,
        "resourceName": a.resource.name if a.resource else None,
        "resourceCategory": a.resource.category.name if a.resource and a.resource.category else None,
        "projectId": a.project_id,
        "projectName": a.project.name if a.project else None,
        "allocationDate": a.allocation_date.strftime("%Y-%m-%d"),
        "expectedReturnDate": a.expected_return_date.strftime("%Y-%m-%d"),
        "actualReturnDate": a.actual_return_date.strftime("%Y-%m-%d") if a.actual_return_date else None,
        "quantity": a.quantity,
        "responsiblePerson": a.responsible_person,
        "allocatedById": a.allocated_by_id,
        "allocatedByName": a.allocated_by.name if a.allocated_by else None,
        "status": a.status,
        "notes": a.notes,
        "createdAt": a.created_at.isoformat(),
        "updatedAt": a.updated_at.isoformat()
    }

def format_utilization(u) -> dict:
    return {
        "id": u.id,
        "resourceId": u.resource_id,
        "resourceName": u.resource.name if u.resource else None,
        "resourceCategory": u.resource.category.name if u.resource and u.resource.category else None,
        "projectId": u.project_id,
        "projectName": u.project.name if u.project else None,
        "usageDate": u.usage_date.strftime("%Y-%m-%d"),
        "operatingHours": u.operating_hours,
        "idleHours": u.idle_hours,
        "totalAvailableHours": u.total_available_hours,
        "utilizationPercentage": u.utilization_percentage,
        "dailyReportId": u.daily_report_id,
        "recordedById": u.recorded_by_id,
        "recordedByName": u.recorded_by.name if u.recorded_by else None,
        "remarks": u.remarks,
        "createdAt": u.created_at.isoformat()
    }

def format_maintenance(m) -> dict:
    return {
        "id": m.id,
        "resourceId": m.resource_id,
        "resourceName": m.resource.name if m.resource else None,
        "resourceCategory": m.resource.category.name if m.resource and m.resource.category else None,
        "lastMaintenanceDate": m.last_maintenance_date.strftime("%Y-%m-%d"),
        "nextMaintenanceDate": m.next_maintenance_date.strftime("%Y-%m-%d"),
        "maintenanceType": m.maintenance_type,
        "serviceEngineer": m.service_engineer,
        "maintenanceCost": m.maintenance_cost,
        "status": m.status,
        "remarks": m.remarks,
        "createdAt": m.created_at.isoformat(),
        "updatedAt": m.updated_at.isoformat()
    }


# ==================================================
# 1. RESOURCE CATEGORY ENDPOINTS
# ==================================================
@router.get("/resources/categories", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_categories(db: Session = Depends(get_db)):
    cats = resource_service.get_categories(db)
    return {"success": True, "data": [{"id": c.id, "name": c.name, "description": c.description, "createdAt": c.created_at.isoformat()} for c in cats]}

@router.post("/resources/categories", dependencies=[Depends(RoleChecker(["admin"]))])
def create_category(data: ResourceCategoryCreate, db: Session = Depends(get_db)):
    cat = resource_service.create_category(db, data.model_dump())
    return {"success": True, "data": {"id": cat.id, "name": cat.name, "description": cat.description, "createdAt": cat.created_at.isoformat()}}


# ==================================================
# 2. RESOURCE / EQUIPMENT ENDPOINTS
# ==================================================
@router.get("/resources/summary", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_resource_summary(db: Session = Depends(get_db)):
    summary = resource_service.get_resource_summary(db)
    return {"success": True, "data": summary}

@router.get("/resources/available", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_available_resources(
    startDate: Optional[str] = Query(None),
    endDate: Optional[str] = Query(None),
    categoryId: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    available = resource_service.get_available_resources(db, startDate, endDate, categoryId)
    return {"success": True, "data": [format_resource(r) for r in available]}

@router.get("/resources/status/{status}", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_resources_by_status(status: str, db: Session = Depends(get_db)):
    resources = resource_service.get_resources(db, status=status)
    return {"success": True, "data": [format_resource(r) for r in resources]}

@router.get("/resources", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_resources(
    categoryId: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    projectId: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    resources = resource_service.get_resources(db, category_id=categoryId, status=status, project_id=projectId, search=search)
    return {"success": True, "data": [format_resource(r) for r in resources]}

@router.get("/resources/{id}", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_resource_by_id(id: str, db: Session = Depends(get_db)):
    r = resource_service.get_resource_by_id(db, id)
    return {"success": True, "data": format_resource(r)}

@router.post("/resources", dependencies=[Depends(RoleChecker(["admin"]))])
def create_resource(data: ResourceCreate, db: Session = Depends(get_db)):
    res = resource_service.create_resource(db, data.model_dump())
    return {"success": True, "data": format_resource(res)}

@router.put("/resources/{id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def update_resource(id: str, data: ResourceUpdate, db: Session = Depends(get_db)):
    res = resource_service.update_resource(db, id, data.model_dump(exclude_unset=True))
    return {"success": True, "data": format_resource(res)}

@router.delete("/resources/{id}", dependencies=[Depends(RoleChecker(["admin"]))])
def delete_resource(id: str, db: Session = Depends(get_db)):
    resource_service.delete_resource(db, id)
    return {"success": True, "message": f"Resource {id} deleted successfully"}


# ==================================================
# 3. RESOURCE ALLOCATION ENDPOINTS
# ==================================================
@router.get("/resource-allocations", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_allocations(
    projectId: Optional[str] = Query(None),
    resourceId: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    allocs = resource_service.get_allocations(db, project_id=projectId, resource_id=resourceId, status=status)
    return {"success": True, "data": [format_allocation(a) for a in allocs]}

@router.get("/resource-allocations/{id}", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_allocation_by_id(id: str, db: Session = Depends(get_db)):
    alloc = resource_service.get_allocation_by_id(db, id)
    return {"success": True, "data": format_allocation(alloc)}

@router.post("/resource-allocations", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def create_allocation(
    data: ResourceAllocationCreate,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    alloc = resource_service.create_allocation(db, user_id, data.model_dump())
    return {"success": True, "data": format_allocation(alloc)}

@router.put("/resource-allocations/{id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def update_allocation(id: str, data: ResourceAllocationUpdate, db: Session = Depends(get_db)):
    alloc = resource_service.update_allocation(db, id, data.model_dump(exclude_unset=True))
    return {"success": True, "data": format_allocation(alloc)}

@router.put("/resource-allocations/{id}/return", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer"]))])
def return_allocation(id: str, notes: Optional[str] = None, db: Session = Depends(get_db)):
    alloc = resource_service.return_allocation(db, id, {"notes": notes} if notes else None)
    return {"success": True, "data": format_allocation(alloc)}

@router.delete("/resource-allocations/{id}", dependencies=[Depends(RoleChecker(["admin"]))])
def delete_allocation(id: str, db: Session = Depends(get_db)):
    resource_service.delete_allocation(db, id)
    return {"success": True, "message": f"Allocation {id} deleted successfully"}


# ==================================================
# 4. RESOURCE UTILIZATION ENDPOINTS
# ==================================================
@router.get("/resource-utilization/summary", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_utilization_summary(db: Session = Depends(get_db)):
    summary = resource_service.get_utilization_summary(db)
    return {"success": True, "data": summary}

@router.get("/resource-utilization", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_utilizations(
    projectId: Optional[str] = Query(None),
    resourceId: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    utls = resource_service.get_utilizations(db, project_id=projectId, resource_id=resourceId)
    return {"success": True, "data": [format_utilization(u) for u in utls]}

@router.get("/resource-utilization/{resource_id}", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_utilization_by_resource(resource_id: str, db: Session = Depends(get_db)):
    utls = resource_service.get_utilization_by_resource(db, resource_id)
    return {"success": True, "data": [format_utilization(u) for u in utls]}

@router.post("/resource-utilization", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor"]))])
def create_utilization(
    data: ResourceUtilizationCreate,
    user_id: str = Depends(get_current_user_id),
    db: Session = Depends(get_db)
):
    utl = resource_service.create_utilization(db, user_id, data.model_dump())
    return {"success": True, "data": format_utilization(utl)}


# ==================================================
# 5. MAINTENANCE ENDPOINTS
# ==================================================
@router.get("/maintenance/schedule", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_maintenance_schedule(db: Session = Depends(get_db)):
    sched = resource_service.get_maintenance_schedule(db)
    return {
        "success": True,
        "data": {
            "upcoming": [format_maintenance(m) for m in sched["upcoming"]],
            "overdue": [format_maintenance(m) for m in sched["overdue"]],
            "totalScheduled": sched["totalScheduled"],
            "totalInProgress": sched["totalInProgress"],
            "totalCompleted": sched["totalCompleted"],
            "totalOverdue": sched["totalOverdue"]
        }
    }

@router.get("/maintenance", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_maintenance_records(
    resourceId: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    recs = resource_service.get_maintenance_records(db, resource_id=resourceId, status=status)
    return {"success": True, "data": [format_maintenance(m) for m in recs]}

@router.get("/maintenance/{id}", dependencies=[Depends(RoleChecker(["admin", "project_manager", "site_engineer", "contractor", "client"]))])
def get_maintenance_by_id(id: str, db: Session = Depends(get_db)):
    m = resource_service.get_maintenance_by_id(db, id)
    return {"success": True, "data": format_maintenance(m)}

@router.post("/maintenance", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def create_maintenance(data: MaintenanceRecordCreate, db: Session = Depends(get_db)):
    m = resource_service.create_maintenance(db, data.model_dump())
    return {"success": True, "data": format_maintenance(m)}

@router.put("/maintenance/{id}", dependencies=[Depends(RoleChecker(["admin", "project_manager"]))])
def update_maintenance(id: str, data: MaintenanceRecordUpdate, db: Session = Depends(get_db)):
    m = resource_service.update_maintenance(db, id, data.model_dump(exclude_unset=True))
    return {"success": True, "data": format_maintenance(m)}

@router.delete("/maintenance/{id}", dependencies=[Depends(RoleChecker(["admin"]))])
def delete_maintenance(id: str, db: Session = Depends(get_db)):
    resource_service.delete_maintenance(db, id)
    return {"success": True, "message": f"Maintenance record {id} deleted successfully"}
