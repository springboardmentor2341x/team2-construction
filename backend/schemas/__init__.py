from pydantic import BaseModel, EmailStr, ConfigDict
from typing import List, Optional, Any
from datetime import datetime

# ==========================================
# AUTHENTICATION & USER SCHEMAS
# ==========================================
class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserRegister(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: str
    company: Optional[str] = None
    phone: Optional[str] = None
    specialty: Optional[str] = None
    trade: Optional[str] = None
    assignedProjectId: Optional[str] = None

class RoleResponse(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    
    model_config = ConfigDict(from_attributes=True)

class UserResponse(BaseModel):
    id: str
    email: EmailStr
    name: str
    phone: Optional[str] = None
    company: Optional[str] = None
    avatar: Optional[str] = None
    role: str
    profile: Optional[dict] = None

    model_config = ConfigDict(from_attributes=True)

class AuthResponseData(BaseModel):
    token: str
    user: UserResponse

class AuthResponse(BaseModel):
    success: bool
    data: AuthResponseData

class SingleUserResponse(BaseModel):
    success: bool
    data: UserResponse

class UserListResponse(BaseModel):
    success: bool
    data: List[UserResponse]

class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    company: Optional[str] = None
    avatar: Optional[str] = None
    role: Optional[str] = None
    trade: Optional[str] = None
    specialty: Optional[str] = None
    status: Optional[str] = None

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: str
    company: Optional[str] = None
    phone: Optional[str] = None
    trade: Optional[str] = None
    specialty: Optional[str] = None

# ==========================================
# PROJECT & TASK SCHEMAS
# ==========================================
class WorkPackageResponse(BaseModel):
    id: str
    projectId: str
    projectName: str
    title: str
    description: Optional[str] = None
    startDate: str
    endDate: str
    progress: int
    status: str
    assignedTo: str
    assignedToRole: str

    model_config = ConfigDict(from_attributes=True)

class DailyReportMaterialItem(BaseModel):
    materialName: str
    quantity: float
    unit: str

class DailyReportResponse(BaseModel):
    id: str
    projectId: str
    date: str
    workDone: str
    weather: str
    siteEngineer: str
    materialsUsed: List[DailyReportMaterialItem]

    model_config = ConfigDict(from_attributes=True)

class SitePhotoResponse(BaseModel):
    id: str
    projectId: str
    url: str
    caption: Optional[str] = None
    date: str
    uploadedBy: str

    model_config = ConfigDict(from_attributes=True)

class IssueReportResponse(BaseModel):
    id: str
    projectId: str
    projectName: str
    title: str
    description: str
    severity: str
    status: str
    reportedBy: str
    reportedDate: str

    model_config = ConfigDict(from_attributes=True)

class FeedbackMessageResponse(BaseModel):
    id: str
    clientName: str
    projectName: str
    rating: int
    message: str
    date: str

    model_config = ConfigDict(from_attributes=True)

class ProjectManagerMin(BaseModel):
    id: str
    name: str
    email: EmailStr

class ProjectResponse(BaseModel):
    id: str
    name: str
    location: str
    clientName: str
    status: str
    startDate: str
    endDate: str
    budget: float
    spent: float
    progress: int
    image: Optional[str] = None
    description: Optional[str] = None
    manager: Optional[str] = "Unassigned"

    model_config = ConfigDict(from_attributes=True)

class ProjectCreate(BaseModel):
    id: str
    name: str
    location: str
    clientName: str
    status: str
    startDate: str
    endDate: str
    budget: float
    managerId: Optional[str] = None
    image: Optional[str] = None
    description: Optional[str] = None

class ProjectUpdate(BaseModel):
    name: Optional[str] = None
    location: Optional[str] = None
    clientName: Optional[str] = None
    status: Optional[str] = None
    startDate: Optional[str] = None
    endDate: Optional[str] = None
    budget: Optional[float] = None
    spent: Optional[float] = None
    progress: Optional[int] = None
    managerId: Optional[str] = None
    image: Optional[str] = None
    description: Optional[str] = None

# ==========================================
# WORKPACKAGE / TASKS CRUD SCHEMAS
# ==========================================
class TaskCreate(BaseModel):
    id: str
    title: str
    description: Optional[str] = None
    assignedToId: Optional[str] = None
    startDate: str
    endDate: str
    progress: Optional[int] = 0
    status: str

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    assignedToId: Optional[str] = None
    startDate: Optional[str] = None
    endDate: Optional[str] = None
    progress: Optional[int] = None
    status: Optional[str] = None

# ==========================================
# ISSUES & FEEDBACK & SITE PHOTOS
# ==========================================
class IssueCreate(BaseModel):
    id: str
    title: str
    description: str
    severity: str
    status: Optional[str] = "Open"

class IssueUpdate(BaseModel):
    status: Optional[str] = None
    severity: Optional[str] = None
    description: Optional[str] = None
    title: Optional[str] = None

class FeedbackCreate(BaseModel):
    id: str
    clientName: str
    rating: int
    message: str

class PhotoCreate(BaseModel):
    id: Optional[str] = None
    url: str
    caption: Optional[str] = None

# ==========================================
# ATTENDANCE SCHEMAS
# ==========================================
class AttendanceResponse(BaseModel):
    id: str
    workerId: str
    date: str
    status: str
    checkIn: Optional[str] = None
    checkOut: Optional[str] = None
    workerName: Optional[str] = None
    workerRole: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)

class AttendanceCreate(BaseModel):
    workerId: str
    status: str
    checkIn: Optional[str] = None
    checkOut: Optional[str] = None
    date: str

# ==========================================
# MATERIALS & REQUESTS SCHEMAS
# ==========================================
class MaterialResponse(BaseModel):
    id: str
    name: str
    unit: str
    inStock: float
    reorderLevel: float
    costPerUnit: float

    model_config = ConfigDict(from_attributes=True)

class MaterialCreate(BaseModel):
    id: str
    name: str
    unit: str
    inStock: float
    reorderLevel: float
    costPerUnit: float

class MaterialUpdate(BaseModel):
    name: Optional[str] = None
    unit: Optional[str] = None
    inStock: Optional[float] = None
    reorderLevel: Optional[float] = None
    costPerUnit: Optional[float] = None

class MaterialRequestResponse(BaseModel):
    id: str
    materialId: str
    materialName: str
    quantity: float
    requestedBy: str
    requestDate: str
    status: str
    projectName: str

    model_config = ConfigDict(from_attributes=True)

class MaterialRequestCreate(BaseModel):
    id: Optional[str] = None
    projectId: str
    materialId: str
    quantity: float

class MaterialRequestRespond(BaseModel):
    approve: bool

# ==========================================
# DAILY PROGRESS REPORTS (SITE ENGINEEER)
# ==========================================
class MaterialUsedCreate(BaseModel):
    materialId: str
    quantity: float

class DailyReportCreate(BaseModel):
    id: Optional[str] = None
    projectId: str
    date: str
    workDone: str
    weather: str
    materialsUsed: Optional[List[MaterialUsedCreate]] = []

# ==========================================
# PAYMENTS / WORKER PAYSLIPS
# ==========================================
class WorkerPayslipResponse(BaseModel):
    id: str
    workerId: str
    month: str
    basicSalary: float
    overtimePay: float
    deductions: float
    netPay: float
    status: str
    paymentDate: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)

class WorkerPayslipCreate(BaseModel):
    id: Optional[str] = None
    workerId: str
    month: str
    basicSalary: float
    overtimePay: Optional[float] = 0.0
    deductions: Optional[float] = 0.0
    status: Optional[str] = "Processing"

# ==========================================
# NOTIFICATIONS SCHEMAS
# ==========================================
class NotificationResponse(BaseModel):
    id: str
    userId: str
    message: str
    read: bool
    type: str
    date: str

    model_config = ConfigDict(from_attributes=True)

class NotificationCreate(BaseModel):
    userId: str
    message: str
    type: Optional[str] = "info"

# ==========================================
# PLATFORM GENERAL WRAPPER SCHEMAS
# ==========================================
class GenericResponse(BaseModel):
    success: bool
    message: Optional[str] = None
    data: Optional[Any] = None
