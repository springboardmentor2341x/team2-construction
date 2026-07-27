from pydantic import BaseModel, EmailStr
from typing import Optional


# ==========================
# USER SCHEMAS
# ==========================

class UserBase(BaseModel):
    full_name: str
    email: EmailStr
    phone: Optional[str] = None
    role: str


class UserCreate(UserBase):
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
    name: str
    location: str
    description: Optional[str] = None


class ProjectCreate(ProjectBase):
    pass


class Project(ProjectBase):
    id: int

    class Config:
        from_attributes = True
from datetime import date

# ==========================
# MILESTONE SCHEMAS
# ==========================

class MilestoneBase(BaseModel):
    project_id: int
    title: str
    description: str | None = None
    due_date: date
    status: str = "Pending"


class MilestoneCreate(MilestoneBase):
    pass


class Milestone(MilestoneBase):
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


class InventoryCreate(InventoryBase):
    pass


class Inventory(InventoryBase):
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