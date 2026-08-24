from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date


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
    category: str
    quantity: int
    unit: str
    status: str
    project_id: int


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



class InventoryCreate(InventoryBase):
    pass


class Inventory(InventoryBase):
    id: int
    status: str

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
    assigned_project: Optional[str] = None
    status: str = "Active"



class WorkerCreate(WorkerBase):
    pass


class Worker(WorkerBase):
    id: int

    class Config:
        from_attributes = True
# ==========================
# ATTENDANCE SCHEMAS
# ==========================

from datetime import date

class AttendanceBase(BaseModel):
    worker_id: int
    date: date
    status: str


class AttendanceCreate(AttendanceBase):
    pass


class Attendance(AttendanceBase):
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
# NOTIFICATION SCHEMAS
# ==========================

from datetime import datetime

class NotificationBase(BaseModel):
    message: str
    notification_type: str
    is_read: bool = False
    created_at: datetime


class NotificationCreate(NotificationBase):
    pass


class Notification(NotificationBase):
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
# ATTENDANCE - MODULE 3
# ==========================

class AttendanceBase(BaseModel):
    worker_id: int
    project_id: int | None = None
    date: date
    status: str


class AttendanceCreate(AttendanceBase):
    pass


class AttendanceResponse(AttendanceBase):
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