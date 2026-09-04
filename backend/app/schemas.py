from pydantic import BaseModel, EmailStr, ConfigDict
from typing import Optional
from datetime import date,datetime,time


# ==========================
# USER SCHEMAS
# ==========================

class UserBase(BaseModel):
    full_name: str
    email: EmailStr
    phone: Optional[str] = None
    role: str


class UserCreate(UserBase):
    email: EmailStr
    password: str


class UserResponse(UserBase):
    id: int
    is_active: bool

    class Config:
        from_attributes = True


# ==========================
# PROJECT SCHEMAS
# ==========================

class ProjectBase(BaseModel):
    project_code: str
    name: str
    category: str
    client_name: str
    location: str
    description: Optional[str] = None
    budget: float
    priority: str
    status: str = "Planning"
    start_date: date
    expected_completion_date: date
    project_manager: Optional[str] = None


class ProjectCreate(ProjectBase):
    pass


class Project(ProjectBase):
    id: int

    class Config:
        from_attributes = True

# ==========================
# MILESTONE SCHEMAS
# ==========================

class MilestoneBase(BaseModel):
    project_id: int
    title: str
    description: Optional[str] = None
    planned_date: date
    actual_completion_date: Optional[date] = None
    progress_percentage: float = 0
    status: str = "Pending"


class MilestoneCreate(MilestoneBase):
    pass


class Milestone(MilestoneBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# PROJECT SCHEDULE SCHEMAS
# ==========================

class ProjectScheduleBase(BaseModel):
    project_id: int
    task_name: str
    description: Optional[str] = None
    start_date: date
    end_date: date
    status: str = "Pending"


class ProjectScheduleCreate(ProjectScheduleBase):
    pass


class ProjectSchedule(ProjectScheduleBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# SITE ENGINEER ASSIGNMENT SCHEMAS
# ==========================

class SiteEngineerAssignmentBase(BaseModel):
    project_id: int
    engineer_name: str
    assigned_date: date
    status: str = "Assigned"


class SiteEngineerAssignmentCreate(SiteEngineerAssignmentBase):
    pass


class SiteEngineerAssignment(SiteEngineerAssignmentBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# CONTRACTOR ASSIGNMENT SCHEMAS
# ==========================

class ContractorAssignmentBase(BaseModel):
    project_id: int
    contractor_name: str
    specialization: str
    assigned_date: date
    status: str = "Assigned"
    # Module 3 contractor registry fields
    company_name: Optional[str] = None
    representative_name: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[EmailStr] = None

    assignment_status: str = "Assigned"


class ContractorAssignmentCreate(ContractorAssignmentBase):
    pass


class ContractorAssignment(ContractorAssignmentBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# RESOURCE SCHEMAS
# ==========================

class ResourceBase(BaseModel):
    resource_name: str
    type: str
    quantity: int
    status: str


class ResourceCreate(ResourceBase):
    pass


class Resource(ResourceBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# INVENTORY SCHEMAS
# ==========================

class InventoryBase(BaseModel):
    item_name: str
    quantity: int
    unit: str
    supplier: str
    buffer_level: int = 0
    allocated_quantity: int =0
    consumed_quantity: int =0



class InventoryCreate(InventoryBase):
    pass


class Inventory(InventoryBase):
    id: int
    status: str

    class Config:
        from_attributes = True
# ==========================
# MATERIAL REQUEST SCHEMAS - MODULE 5
# ==========================

class MaterialRequestBase(BaseModel):
    project_id: int
    inventory_id: int
    requested_quantity: int
    required_date: date
    purpose: Optional[str] = None
    remarks: Optional[str] = None
    status: str = "Pending"
    requested_by: Optional[str] = None


class MaterialRequestCreate(MaterialRequestBase):
    pass


class MaterialRequest(MaterialRequestBase):
    id: int

    class Config:
        from_attributes = True

# ==========================
# MATERIAL ALLOCATION SCHEMAS - MODULE 5
# ==========================

class MaterialAllocationBase(BaseModel):
    project_id: int
    inventory_id: int
    allocated_quantity: int
    allocation_date: date
    work_activity: Optional[str] = None
    responsible_user: Optional[str] = None
    status: str = "Allocated"


class MaterialAllocationCreate(MaterialAllocationBase):
    pass


class MaterialAllocation(MaterialAllocationBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# STOCK MOVEMENT SCHEMAS - MODULE 5
# ==========================

class StockMovementBase(BaseModel):
    inventory_id: int
    project_id: int
    movement_type: str
    quantity: int
    movement_date: date
    remarks: Optional[str] = None
    performed_by: Optional[str] = None


class StockMovementCreate(StockMovementBase):
    pass


class StockMovement(StockMovementBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# WORKER SCHEMAS
# ==========================

from datetime import date

class WorkerBase(BaseModel):
    full_name: str
    phone: str
    designation: str
    salary: float
    joining_date: date
    workforce_category: str = "Skilled Workers"
    assigned_project: Optional[str] = None
    status: str = "Active"



class WorkerCreate(WorkerBase):
    pass


class Worker(WorkerBase):
    id: int

    class Config:
        from_attributes = True

# ==========================
# WORKER ASSIGNMENT SCHEMAS - MODULE 6
# ==========================

class WorkerAssignmentBase(BaseModel):
    worker_id: int
    project_id: int
    contractor_name: Optional[str] = None
    work_activity: Optional[str] = None
    start_date: date
    end_date: Optional[date] = None
    assignment_status: str = "Active"


class WorkerAssignmentCreate(WorkerAssignmentBase):
    pass


class WorkerAssignment(WorkerAssignmentBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# ATTENDANCE SCHEMAS
# ==========================

from datetime import date

class AttendanceBase(BaseModel):
    worker_id: int
    project_id: Optional[int] = None
    date: date
    status: str

    check_in_time: Optional[time] = None
    check_out_time: Optional[time] = None
    working_hours: Optional[float] = None
    remarks: Optional[str] = None
        

class AttendanceCreate(AttendanceBase):
        pass


class AttendanceResponse(AttendanceBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# PROCUREMENT SCHEMAS
# ==========================

from datetime import date

class ProcurementBase(BaseModel):
    project_id: int
    item_name: str
    supplier: str
    quantity: int
    cost: float
    purchase_date: date


class ProcurementCreate(ProcurementBase):
    pass


class Procurement(ProcurementBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# REPORT SCHEMAS
# ==========================

from datetime import date

class ReportBase(BaseModel):
    project_id: int
    report_title: str
    report_date: date
    summary: str


class ReportCreate(ReportBase):
    pass


class Report(ReportBase):
    id: int

    class Config:
        from_attributes = True

# ==========================
# AUTH SCHEMAS
# ==========================

class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class TokenData(BaseModel):
    email: str | None = None
# ==========================
# EQUIPMENT SCHEMAS
# ==========================

class EquipmentBase(BaseModel):
    model_config = ConfigDict(protected_namespaces=())

    equipment_id: str
    name: str
    category: str
    model_number: Optional[str] = None
    serial_number: Optional[str] = None
    location: Optional[str] = None
    status: str = "Available"
    hourly_rate: Optional[float] = None
    responsible_person: Optional[str] = None


class EquipmentCreate(EquipmentBase):
    pass


class Equipment(EquipmentBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# EQUIPMENT AVAILABILITY SCHEMA - MODULE 4
# ==========================

class EquipmentAvailability(BaseModel):
    equipment_id: int
    equipment_name: str
    category: str
    status: str
    project_id: Optional[int] = None
    available_from: Optional[date] = None
# ==========================
# EQUIPMENT ALLOCATION SCHEMAS
# ==========================

class EquipmentAllocationBase(BaseModel):
    equipment_id: int
    project_id: int
    start_date: date
    end_date: Optional[date] = None
    responsible_person: Optional[str] = None
    status: str = "Active"


class EquipmentAllocationCreate(EquipmentAllocationBase):
    pass


class EquipmentAllocation(EquipmentAllocationBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# EQUIPMENT MAINTENANCE SCHEMAS
# ==========================

class EquipmentMaintenanceBase(BaseModel):
    equipment_id: int
    maintenance_type: str
    last_maintenance_date: Optional[date] = None
    next_service_date: Optional[date] = None
    engineer: Optional[str] = None
    cost: Optional[float] = None
    status: str = "Scheduled"
    remarks: Optional[str] = None


class EquipmentMaintenanceCreate(EquipmentMaintenanceBase):
    pass


class EquipmentMaintenance(EquipmentMaintenanceBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# MAINTENANCE STATUS SCHEMA - MODULE 4
# ==========================

class MaintenanceDueStatus(BaseModel):
    maintenance_id: int
    equipment_id: int
    equipment_name: str
    next_service_date: Optional[date] = None
    status: str
    engineer: Optional[str] = None
# ==========================
# EQUIPMENT UTILIZATION SCHEMAS - MODULE 4
# ==========================

class EquipmentUtilizationBase(BaseModel):
    equipment_id: int
    project_id: int
    usage_date: date
    operating_hours: float = 0
    idle_hours: float = 0
    remarks: Optional[str] = None


class EquipmentUtilizationCreate(EquipmentUtilizationBase):
    pass


class EquipmentUtilization(EquipmentUtilizationBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# MATERIAL USAGE SCHEMAS
# ==========================

class MaterialUsageBase(BaseModel):
    inventory_id: int
    quantity_used: int
    used_for: str | None = None


class MaterialUsageCreate(MaterialUsageBase):
    pass


class MaterialUsage(MaterialUsageBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# SITE ISSUE SCHEMAS
# ==========================

class SiteIssueBase(BaseModel):
    project_id: int
    issue_type: str
    description: str | None = None
    severity: str = "Medium"
    status: str = "Open"
    issue_date: str | None = None


class SiteIssueCreate(SiteIssueBase):
    pass


class SiteIssue(SiteIssueBase):
    id: int

    class Config:
        from_attributes = True

# ==========================
# ==========================
# PROGRESS UPDATES - MODULE 3
# ==========================

class ProgressUpdateBase(BaseModel):
    project_id: int
    activity_name: str
    work_category: str | None = None
    description: str | None = None

    progress_percentage: float = 0

    contractor_id: int | None = None

    workers_present: int = 0
    workers_absent: int = 0

    machinery_used: str | None = None
    materials_consumed: str | None = None

    weather_conditions: str | None = None

    safety_observations: str | None = None
    quality_remarks: str | None = None

    delay_description: str | None = None

    additional_comments: str | None = None

    update_date: date | None = None
    status: str = "In Progress"
    updated_by: str | None = None


class ProgressUpdateCreate(ProgressUpdateBase):
    pass


class ProgressUpdateResponse(ProgressUpdateBase):
    id: int

    class Config:
        from_attributes = True

# ==========================
# PROGRESS REPORTS - MODULE 3
# ==========================

class ProgressReportBase(BaseModel):
    project_id: int
    report_date: date
    overall_progress: float = 0
    summary: str | None = None
    status: str = "In Progress"


class ProgressReportCreate(ProgressReportBase):
    pass


class ProgressReportResponse(ProgressReportBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# MODULE 3 DASHBOARD
# ==========================

class DashboardResponse(BaseModel):
    project_id: int
    total_progress_updates: int
    average_progress: float
    total_progress_reports: int
    total_attendance_records: int
    open_site_issues: int
# ==========================
# DELAY RECORDS - MODULE 3
# ==========================

class DelayRecordBase(BaseModel):
    project_id: int
    delay_date: date
    reason: str
    duration_hours: float = 0
    affected_work_category: str | None = None
    timeline_impact: str | None = None
    status: str = "Open"
    remarks: str | None = None


class DelayRecordCreate(DelayRecordBase):
    pass


class DelayRecordResponse(DelayRecordBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# SITE ACTIVITY LOGS - MODULE 3
# ==========================

class SiteActivityLogBase(BaseModel):
    project_id: int
    activity_date: date
    activity_time: str | None = None
    activity_type: str
    description: str
    responsible_person: str | None = None
    remarks: str | None = None


class SiteActivityLogCreate(SiteActivityLogBase):
    pass


class SiteActivityLogResponse(SiteActivityLogBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# PROGRESS PHOTOGRAPHS - MODULE 3
# ==========================

class ProgressPhotoBase(BaseModel):
    project_id: int
    progress_update_id: int | None = None
    photo_path: str
    description: str | None = None
    uploaded_by: str | None = None
    uploaded_date: date | None = None


class ProgressPhotoCreate(ProgressPhotoBase):
    pass


class ProgressPhotoResponse(ProgressPhotoBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# WEEKLY PROGRESS REPORTS - MODULE 3
# ==========================

class WeeklyProgressReportBase(BaseModel):
    project_id: int
    week_start_date: date
    week_end_date: date

    work_completed: str | None = None

    progress_percentage: float = 0

    worker_hours: float = 0

    major_activities: str | None = None

    delays: str | None = None

    safety_incidents: str | None = None

    overall_status: str = "In Progress"


class WeeklyProgressReportCreate(WeeklyProgressReportBase):
    pass


class WeeklyProgressReportResponse(WeeklyProgressReportBase):
    id: int

    class Config:
        from_attributes = True

# ==========================
# SHIFT SCHEMAS - MODULE 6
# ==========================

class ShiftBase(BaseModel):
    shift_name: str
    start_time: time
    end_time: time
    project_id: int
    shift_date: date
    status: str = "Scheduled"


class ShiftCreate(ShiftBase):
    pass


class ShiftResponse(ShiftBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# SHIFT ASSIGNMENT SCHEMAS - MODULE 6
# ==========================

class ShiftAssignmentBase(BaseModel):
    shift_id: int
    worker_id: int
    project_id: int
    assignment_status: str = "Assigned"


class ShiftAssignmentCreate(ShiftAssignmentBase):
    pass


class ShiftAssignmentResponse(ShiftAssignmentBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# PAYROLL SCHEMAS - MODULE 6
# ==========================

class PayrollBase(BaseModel):
    worker_id: int
    project_id: int
    pay_rate: float
    working_days: int = 0
    working_hours: float = 0
    overtime_hours: float = 0
    leave_days: int = 0
    estimated_pay: float = 0
    payroll_status: str = "Pending"


class PayrollCreate(PayrollBase):
    pass


class PayrollResponse(PayrollBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# VENDOR SCHEMAS - MODULE 7
# ==========================

class VendorBase(BaseModel):
    vendor_name: str
    contact_person: str | None = None
    contact_number: str | None = None
    email: str | None = None
    address: str | None = None
    vendor_category: str | None = None
    products_services: str | None = None
    vendor_status: str = "Active"


class VendorCreate(VendorBase):
    pass


class VendorResponse(VendorBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# PROCUREMENT REQUEST - MODULE 7
# ==========================

class ProcurementRequestBase(BaseModel):
    project_id: int
    requested_by: str
    item_name: str
    category: str | None = None
    requested_quantity: int
    required_date: date | None = None
    purpose: str | None = None
    priority: str = "Medium"
    request_date: date | None = None
    request_status: str = "Pending"
    remarks: str | None = None


class ProcurementRequestCreate(ProcurementRequestBase):
    pass


class ProcurementRequestResponse(ProcurementRequestBase):
    id: int

    class Config:
        from_attributes = True
class PurchaseOrderBase(BaseModel):
    procurement_request_id: int
    vendor_id: int
    project_id: int
    order_date: date | None = None
    expected_delivery_date: date | None = None
    quantity: int
    unit_price: float
    total_amount: float
    order_status: str = "Processing"
    remarks: str | None = None


class PurchaseOrderCreate(PurchaseOrderBase):
    pass


class PurchaseOrderResponse(PurchaseOrderBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# INVOICE SCHEMAS - MODULE 7
# ==========================

class InvoiceBase(BaseModel):
    invoice_number: str
    vendor_id: int
    purchase_order_id: int
    project_id: int
    invoice_date: date | None = None
    due_date: date | None = None
    invoice_amount: float
    payment_status: str = "Pending"
    invoice_status: str = "Received"
    remarks: str | None = None


class InvoiceCreate(InvoiceBase):
    pass


class InvoiceResponse(InvoiceBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# BUDGET SCHEMAS - MODULE 11
# ==========================

class BudgetBase(BaseModel):
    project_id: int
    total_budget: float

    labor_budget: float = 0
    material_budget: float = 0
    equipment_budget: float = 0
    transportation_budget: float = 0
    maintenance_budget: float = 0
    administrative_budget: float = 0


class BudgetCreate(BudgetBase):
    pass


class BudgetResponse(BudgetBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
# ==========================
# COST ESTIMATION SCHEMAS - MODULE 11
# ==========================

class CostEstimateBase(BaseModel):
    project_id: int
    category: str
    description: str | None = None
    estimated_amount: float
    estimate_date: date | None = None
    status: str = "Estimated"


class CostEstimateCreate(CostEstimateBase):
    pass


class CostEstimateResponse(CostEstimateBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# EXPENSE SCHEMAS - MODULE 11
# ==========================

class ExpenseBase(BaseModel):
    project_id: int
    category: str
    description: str | None = None
    amount: float
    expense_date: date
    recorded_by: str | None = None
    status: str = "Recorded"


class ExpenseCreate(ExpenseBase):
    pass


class ExpenseResponse(ExpenseBase):
    id: int

    class Config:
        from_attributes = True

# ==========================
# AUTH / LOGIN SCHEMAS
# ==========================

class LoginRequest(BaseModel):
    email: EmailStr
    password: str


# ==========================
# NOTIFICATION SCHEMAS - MODULE 8
# ==========================

class NotificationBase(BaseModel):
    title: str
    message: str
    type: str = "SYSTEM"
    project_id: Optional[int] = None
    related_entity_type: Optional[str] = None
    related_entity_id: Optional[int] = None
    priority: str = "Medium"


class NotificationCreate(NotificationBase):
    user_id: Optional[int] = None


class NotificationResponse(NotificationBase):
    id: int
    user_id: int
    is_read: bool
    created_at: datetime
    read_at: Optional[datetime] = None

    class Config:
        from_attributes = True


# Alias for backward compatibility
Notification = NotificationResponse


class NotificationUnreadCountResponse(BaseModel):
    unread_count: int


# ==========================
# ATTENDANCE SCHEMAS - MODULE 3 / 6
# ==========================

class AttendanceBase(BaseModel):
    worker_id: int
    project_id: Optional[int] = None
    date: date
    status: str
    check_in_time: Optional[time] = None
    check_out_time: Optional[time] = None
    working_hours: Optional[float] = None
    remarks: Optional[str] = None


class AttendanceCreate(AttendanceBase):
    pass


class AttendanceResponse(AttendanceBase):
    id: int

    class Config:
        from_attributes = True


class SystemNotificationCreate(BaseModel):
    title: str
    message: str
    project_id: Optional[int] = None
    target_role: Optional[str] = None
    priority: str = "Medium"


# ==========================
# DASHBOARD & ANALYTICS SCHEMAS - MODULE 9
# ==========================

class ProjectProgressSummary(BaseModel):
    completion_percentage: float = 0.0
    status: str = "Planning"
    total_milestones: int = 0
    completed_milestones: int = 0
    pending_milestones: int = 0
    overdue_milestones: int = 0


class BudgetUtilizationSummary(BaseModel):
    planned_budget: float = 0.0
    utilized_amount: float = 0.0
    remaining_budget: float = 0.0
    utilization_percentage: float = 0.0


class WorkforceSummary(BaseModel):
    total_workers: int = 0
    present: int = 0
    absent: int = 0
    on_leave: int = 0


class ResourceSummary(BaseModel):
    total_resources: int = 0
    allocated: int = 0
    available: int = 0
    operating_hours: float = 0.0
    idle_hours: float = 0.0
    utilization_percentage: float = 0.0


class MaterialSummary(BaseModel):
    total_items: int = 0
    low_stock_items: int = 0
    out_of_stock_items: int = 0


class ProcurementSummary(BaseModel):
    total_requests: int = 0
    pending_requests: int = 0
    approved_requests: int = 0
    rejected_requests: int = 0
    purchase_orders_count: int = 0
    invoices_count: int = 0


class PMProjectDashboard(BaseModel):
    project_id: int
    project_code: str
    name: str
    status: str
    progress: ProjectProgressSummary
    budget: BudgetUtilizationSummary
    workforce: WorkforceSummary
    resources: ResourceSummary
    materials: MaterialSummary
    procurement: ProcurementSummary


class PMDashboardResponse(BaseModel):
    role: str = "project_manager"
    total_assigned_projects: int = 0
    projects: list[PMProjectDashboard] = []
    unread_notifications_count: int = 0
    recent_notifications: list[NotificationResponse] = []


class AdminUserAnalytics(BaseModel):
    total_users: int = 0
    active_users: int = 0
    inactive_users: int = 0
    users_by_role: dict[str, int] = {}


class AdminProjectMonitoring(BaseModel):
    total_projects: int = 0
    active_projects: int = 0
    completed_projects: int = 0
    planned_projects: int = 0
    overdue_projects: int = 0
    overall_completion_percentage: float = 0.0


class AdminSystemAnalytics(BaseModel):
    total_workers: int = 0
    total_resources: int = 0
    total_inventory_items: int = 0
    total_procurement_requests: int = 0
    pending_procurement_actions: int = 0
    total_budget_planned: float = 0.0
    total_budget_spent: float = 0.0
    unread_notifications_count: int = 0


class AdminReportSummaryItem(BaseModel):
    id: int
    report_type: Optional[str] = None
    description: Optional[str] = None
    created_at: Optional[datetime] = None


class AdminActivityItem(BaseModel):
    id: int
    project_id: int
    activity_name: str
    status: Optional[str] = None
    update_date: Optional[date] = None


class AdminDashboardResponse(BaseModel):
    role: str = "admin"
    users: AdminUserAnalytics
    projects: AdminProjectMonitoring
    system_analytics: AdminSystemAnalytics
    reports_total: int = 0
    recent_reports: list[AdminReportSummaryItem] = []
    recent_activities: list[AdminActivityItem] = []
    target_role: Optional[str] = None
    priority: str = "Medium"