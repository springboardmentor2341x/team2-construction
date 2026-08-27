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
# MATERIALS & INVENTORY SCHEMAS (MODULE 5)
# ==========================================
class MaterialCategoryCreate(BaseModel):
    id: str
    name: str
    description: Optional[str] = None

class MaterialCategoryResponse(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    createdAt: str

    model_config = ConfigDict(from_attributes=True)

class MaterialCreate(BaseModel):
    id: str
    name: str
    categoryId: str
    unit: str
    minimumStockLevel: float
    costPerUnit: float
    description: Optional[str] = None
    status: Optional[str] = "Active"

class MaterialUpdate(BaseModel):
    name: Optional[str] = None
    categoryId: Optional[str] = None
    unit: Optional[str] = None
    minimumStockLevel: Optional[float] = None
    costPerUnit: Optional[float] = None
    description: Optional[str] = None
    status: Optional[str] = None

class MaterialResponse(BaseModel):
    id: str
    name: str
    categoryId: str
    categoryName: str
    unit: str
    inStock: float # available_stock for compatibility
    reorderLevel: float # minimum_stock_level for compatibility
    minimumStockLevel: float
    costPerUnit: float
    description: Optional[str] = None
    status: str
    createdAt: str

    model_config = ConfigDict(from_attributes=True)

class InventoryResponse(BaseModel):
    materialId: str
    materialName: str
    categoryName: str
    unit: str
    totalStock: float
    availableStock: float
    allocatedStock: float
    consumedStock: float
    minimumStockLevel: float
    status: str # Available, Low Stock

    model_config = ConfigDict(from_attributes=True)

class MaterialRequestCreate(BaseModel):
    id: Optional[str] = None
    projectId: str
    materialId: str
    quantity: float
    requiredDate: Optional[str] = None # YYYY-MM-DD
    workActivity: Optional[str] = None
    remarks: Optional[str] = None

class MaterialRequestResponse(BaseModel):
    id: str
    projectId: str
    projectName: str
    materialId: str
    materialName: str
    categoryName: str
    unit: str
    quantity: float
    requiredDate: Optional[str] = None
    workActivity: Optional[str] = None
    remarks: Optional[str] = None
    requestedBy: str
    requestedById: str
    requestDate: str
    status: str

    model_config = ConfigDict(from_attributes=True)

class MaterialRequestRespond(BaseModel):
    approve: bool

class MaterialAllocationCreate(BaseModel):
    projectId: str
    materialId: str
    quantity: float
    workActivity: str
    responsibleUserId: str
    materialRequestId: Optional[str] = None

class MaterialAllocationResponse(BaseModel):
    id: str
    projectId: str
    projectName: str
    materialId: str
    materialName: str
    quantity: float
    allocationDate: str
    workActivity: str
    responsibleUserId: str
    responsibleUserName: str
    materialRequestId: Optional[str] = None
    createdAt: str

    model_config = ConfigDict(from_attributes=True)

class StockMovementResponse(BaseModel):
    id: str
    materialId: str
    materialName: str
    projectId: Optional[str] = None
    projectName: Optional[str] = None
    movementType: str
    quantity: float
    date: str
    previousQuantity: float
    newQuantity: float
    performedBy: str
    referenceId: Optional[str] = None
    remarks: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)

class ShortageResponse(BaseModel):
    projectId: str
    projectName: str
    materialId: str
    materialName: str
    requiredQuantity: float
    availableQuantity: float
    shortageQuantity: float

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
# MODULE 3: SITE PROGRESS MONITORING SCHEMAS
# ==========================================

class DailyReportMaterialInput(BaseModel):
    materialId: Optional[str] = None
    materialName: str
    quantity: float
    unit: str

class DailyProgressReportCreate(BaseModel):
    id: Optional[str] = None
    projectId: str
    reportDate: str # "YYYY-MM-DD"
    workCategory: str # Earthwork, Structural, Concrete, Electrical, Plumbing, Finishing, Inspection, etc.
    activityPerformed: str
    percentageWorkCompleted: Optional[float] = 0.0
    contractorId: Optional[str] = None
    contractorName: Optional[str] = None
    workersPresent: Optional[int] = 0
    workersAbsent: Optional[int] = 0
    machineryUsed: Optional[str] = None
    weatherConditions: str
    safetyObservations: Optional[str] = None
    qualityInspectionRemarks: Optional[str] = None
    progressPhotograph: Optional[str] = None
    delayEncountered: Optional[bool] = False
    delayReason: Optional[str] = None
    additionalComments: Optional[str] = None
    materialsConsumed: Optional[List[DailyReportMaterialInput]] = []

class DailyProgressReportUpdate(BaseModel):
    workCategory: Optional[str] = None
    activityPerformed: Optional[str] = None
    percentageWorkCompleted: Optional[float] = None
    contractorId: Optional[str] = None
    contractorName: Optional[str] = None
    workersPresent: Optional[int] = None
    workersAbsent: Optional[int] = None
    machineryUsed: Optional[str] = None
    weatherConditions: Optional[str] = None
    safetyObservations: Optional[str] = None
    qualityInspectionRemarks: Optional[str] = None
    progressPhotograph: Optional[str] = None
    delayEncountered: Optional[bool] = None
    delayReason: Optional[str] = None
    additionalComments: Optional[str] = None
    materialsConsumed: Optional[List[DailyReportMaterialInput]] = None

class DailyProgressReportResponse(BaseModel):
    id: str
    projectId: str
    projectName: Optional[str] = None
    reportDate: str
    workCategory: str
    activityPerformed: str
    percentageWorkCompleted: float
    contractorId: Optional[str] = None
    contractorName: Optional[str] = None
    workersPresent: int
    workersAbsent: int
    machineryUsed: Optional[str] = None
    weatherConditions: str
    safetyObservations: Optional[str] = None
    qualityInspectionRemarks: Optional[str] = None
    progressPhotograph: Optional[str] = None
    delayEncountered: bool
    delayReason: Optional[str] = None
    additionalComments: Optional[str] = None
    siteEngineerId: str
    siteEngineerName: Optional[str] = None
    createdAt: str
    materialsConsumed: List[DailyReportMaterialInput] = []

    model_config = ConfigDict(from_attributes=True)

# MILESTONES SCHEMAS
class MilestoneCreate(BaseModel):
    id: Optional[str] = None
    projectId: str
    name: str
    plannedStartDate: str
    plannedEndDate: str
    actualCompletionDate: Optional[str] = None
    progressPercentage: Optional[int] = 0
    status: Optional[str] = "Pending"
    relatedActivities: Optional[str] = None
    orderIndex: Optional[int] = 1

class MilestoneUpdate(BaseModel):
    name: Optional[str] = None
    plannedStartDate: Optional[str] = None
    plannedEndDate: Optional[str] = None
    actualCompletionDate: Optional[str] = None
    progressPercentage: Optional[int] = None
    status: Optional[str] = None
    relatedActivities: Optional[str] = None
    orderIndex: Optional[int] = None

class MilestoneResponse(BaseModel):
    id: str
    projectId: str
    projectName: Optional[str] = None
    name: str
    plannedStartDate: str
    plannedEndDate: str
    actualCompletionDate: Optional[str] = None
    progressPercentage: int
    status: str
    relatedActivities: Optional[str] = None
    orderIndex: int

    model_config = ConfigDict(from_attributes=True)

# DELAY RECORD SCHEMAS
class DelayRecordCreate(BaseModel):
    id: Optional[str] = None
    projectId: str
    date: str
    affectedActivity: str
    delayReason: str
    delayDuration: str
    impactOnProject: Optional[str] = "Medium"
    additionalRemarks: Optional[str] = None

class DelayRecordUpdate(BaseModel):
    affectedActivity: Optional[str] = None
    delayReason: Optional[str] = None
    delayDuration: Optional[str] = None
    impactOnProject: Optional[str] = None
    additionalRemarks: Optional[str] = None
    status: Optional[str] = None

class DelayRecordResponse(BaseModel):
    id: str
    projectId: str
    projectName: Optional[str] = None
    date: str
    affectedActivity: str
    delayReason: str
    delayDuration: str
    impactOnProject: str
    additionalRemarks: Optional[str] = None
    recordedById: str
    recordedByName: Optional[str] = None
    status: str
    createdAt: str

    model_config = ConfigDict(from_attributes=True)

# SITE ACTIVITY LOG SCHEMAS
class SiteActivityLogCreate(BaseModel):
    id: Optional[str] = None
    projectId: str
    date: str
    time: str
    activityType: str
    description: str
    responsiblePerson: str

class SiteActivityLogUpdate(BaseModel):
    date: Optional[str] = None
    time: Optional[str] = None
    activityType: Optional[str] = None
    description: Optional[str] = None
    responsiblePerson: Optional[str] = None

class SiteActivityLogResponse(BaseModel):
    id: str
    projectId: str
    projectName: Optional[str] = None
    date: str
    time: str
    activityType: str
    description: str
    responsiblePerson: str
    loggedById: str
    loggedByName: Optional[str] = None
    createdAt: str

    model_config = ConfigDict(from_attributes=True)

# WEEKLY PROGRESS SUMMARY SCHEMA
class WeeklyProgressSummaryResponse(BaseModel):
    projectId: str
    projectName: str
    weekStartDate: str
    weekEndDate: str
    weeklyProgressPercentage: float
    overallProjectProgress: int
    projectStatus: str
    totalReportsFiled: int
    totalWorkersUtilized: int
    majorActivitiesCompleted: List[str]
    delaysEncounteredCount: int
    delayDetails: List[dict]
    safetyObservationsCount: int
    safetyObservations: List[str]
    materialsConsumedSummary: List[dict]

# ==========================================
# MODULE 4: RESOURCE MANAGEMENT SCHEMAS
# ==========================================

# RESOURCE CATEGORY SCHEMAS
class ResourceCategoryCreate(BaseModel):
    id: Optional[str] = None
    name: str
    description: Optional[str] = None

class ResourceCategoryResponse(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    createdAt: str

    model_config = ConfigDict(from_attributes=True)

# RESOURCE / EQUIPMENT SCHEMAS
class ResourceCreate(BaseModel):
    id: Optional[str] = None # e.g. EQ-101, EXCAVATOR-01
    name: str
    categoryId: str
    quantity: Optional[int] = 1
    currentLocation: Optional[str] = "Equipment Yard"
    currentProjectId: Optional[str] = None
    status: Optional[str] = "Available" # Available, Allocated, Under Maintenance, Out of Service, Idle, Operating
    responsiblePerson: str
    modelNumber: Optional[str] = None
    serialNumber: Optional[str] = None
    purchaseDate: Optional[str] = None
    hourlyCost: Optional[float] = 0.0

class ResourceUpdate(BaseModel):
    name: Optional[str] = None
    categoryId: Optional[str] = None
    quantity: Optional[int] = None
    currentLocation: Optional[str] = None
    currentProjectId: Optional[str] = None
    status: Optional[str] = None
    responsiblePerson: Optional[str] = None
    modelNumber: Optional[str] = None
    serialNumber: Optional[str] = None
    purchaseDate: Optional[str] = None
    hourlyCost: Optional[float] = None

class ResourceResponse(BaseModel):
    id: str
    name: str
    categoryId: str
    categoryName: Optional[str] = None
    quantity: int
    currentLocation: str
    currentProjectId: Optional[str] = None
    currentProjectName: Optional[str] = None
    status: str
    responsiblePerson: str
    modelNumber: Optional[str] = None
    serialNumber: Optional[str] = None
    purchaseDate: Optional[str] = None
    hourlyCost: float
    createdAt: str
    updatedAt: str

    model_config = ConfigDict(from_attributes=True)

class ResourceSummaryResponse(BaseModel):
    totalEquipment: int
    availableCount: int
    allocatedCount: int
    operatingCount: int
    idleCount: int
    maintenanceCount: int
    outOfServiceCount: int
    averageUtilization: float
    categoryCounts: List[dict]

# RESOURCE ALLOCATION SCHEMAS
class ResourceAllocationCreate(BaseModel):
    id: Optional[str] = None
    resourceId: str
    projectId: str
    allocationDate: str # YYYY-MM-DD
    expectedReturnDate: str # YYYY-MM-DD
    quantity: Optional[int] = 1
    responsiblePerson: str
    notes: Optional[str] = None

class ResourceAllocationUpdate(BaseModel):
    expectedReturnDate: Optional[str] = None
    actualReturnDate: Optional[str] = None
    responsiblePerson: Optional[str] = None
    status: Optional[str] = None
    notes: Optional[str] = None

class ResourceAllocationResponse(BaseModel):
    id: str
    resourceId: str
    resourceName: Optional[str] = None
    resourceCategory: Optional[str] = None
    projectId: str
    projectName: Optional[str] = None
    allocationDate: str
    expectedReturnDate: str
    actualReturnDate: Optional[str] = None
    quantity: int
    responsiblePerson: str
    allocatedById: str
    allocatedByName: Optional[str] = None
    status: str
    notes: Optional[str] = None
    createdAt: str
    updatedAt: str

    model_config = ConfigDict(from_attributes=True)

# RESOURCE UTILIZATION SCHEMAS
class ResourceUtilizationCreate(BaseModel):
    id: Optional[str] = None
    resourceId: str
    projectId: str
    usageDate: str # YYYY-MM-DD
    operatingHours: float
    idleHours: Optional[float] = 0.0
    totalAvailableHours: Optional[float] = 8.0
    dailyReportId: Optional[str] = None
    remarks: Optional[str] = None

class ResourceUtilizationResponse(BaseModel):
    id: str
    resourceId: str
    resourceName: Optional[str] = None
    resourceCategory: Optional[str] = None
    projectId: str
    projectName: Optional[str] = None
    usageDate: str
    operatingHours: float
    idleHours: float
    totalAvailableHours: float
    utilizationPercentage: float
    dailyReportId: Optional[str] = None
    recordedById: Optional[str] = None
    recordedByName: Optional[str] = None
    remarks: Optional[str] = None
    createdAt: str

    model_config = ConfigDict(from_attributes=True)

class UtilizationSummaryResponse(BaseModel):
    totalOperatingHours: float
    totalIdleHours: float
    totalAvailableHours: float
    overallUtilizationPercentage: float
    byCategory: List[dict]
    byProject: List[dict]

# MAINTENANCE SCHEMAS
class MaintenanceRecordCreate(BaseModel):
    id: Optional[str] = None
    resourceId: str
    lastMaintenanceDate: str # YYYY-MM-DD
    nextMaintenanceDate: str # YYYY-MM-DD
    maintenanceType: str # Preventive, Corrective, Emergency, Inspection
    serviceEngineer: str
    maintenanceCost: Optional[float] = 0.0
    status: Optional[str] = "Scheduled" # Scheduled, In Progress, Completed, Overdue
    remarks: Optional[str] = None

class MaintenanceRecordUpdate(BaseModel):
    lastMaintenanceDate: Optional[str] = None
    nextMaintenanceDate: Optional[str] = None
    maintenanceType: Optional[str] = None
    serviceEngineer: Optional[str] = None
    maintenanceCost: Optional[float] = None
    status: Optional[str] = None
    remarks: Optional[str] = None

class MaintenanceRecordResponse(BaseModel):
    id: str
    resourceId: str
    resourceName: Optional[str] = None
    resourceCategory: Optional[str] = None
    lastMaintenanceDate: str
    nextMaintenanceDate: str
    maintenanceType: str
    serviceEngineer: str
    maintenanceCost: float
    status: str
    remarks: Optional[str] = None
    createdAt: str
    updatedAt: str

    model_config = ConfigDict(from_attributes=True)

# ==========================================
# MODULE 6: WORKFORCE MANAGEMENT SCHEMAS
# ==========================================

class WorkforceCategoryCreate(BaseModel):
    id: Optional[str] = None
    name: str
    description: Optional[str] = None

class WorkforceCategoryResponse(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    createdAt: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)

class WorkerCreate(BaseModel):
    id: Optional[str] = None
    workerId: str # e.g. W-102
    name: str
    contactInfo: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    emergencyContact: Optional[str] = None
    categoryId: Optional[str] = None
    skillWorkType: str
    contractorId: Optional[str] = None
    assignedProjectId: Optional[str] = None
    joiningDate: Optional[str] = None
    status: Optional[str] = "Active"
    payRate: Optional[float] = 500.0

class WorkerUpdate(BaseModel):
    name: Optional[str] = None
    contactInfo: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    emergencyContact: Optional[str] = None
    categoryId: Optional[str] = None
    skillWorkType: Optional[str] = None
    contractorId: Optional[str] = None
    assignedProjectId: Optional[str] = None
    status: Optional[str] = None
    payRate: Optional[float] = None

class WorkerResponse(BaseModel):
    id: str
    workerId: str
    name: str
    contactInfo: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    emergencyContact: Optional[str] = None
    categoryId: Optional[str] = None
    categoryName: Optional[str] = None
    skillWorkType: str
    contractorId: Optional[str] = None
    contractorName: Optional[str] = None
    assignedProjectId: Optional[str] = None
    assignedProjectName: Optional[str] = None
    joiningDate: Optional[str] = None
    status: str
    payRate: float
    createdAt: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)

class WorkerAssignmentCreate(BaseModel):
    workerId: str
    contractorId: Optional[str] = None
    projectId: str
    workActivity: str
    startDate: str
    endDate: Optional[str] = None
    status: Optional[str] = "Active"

class WorkerAssignmentUpdate(BaseModel):
    workActivity: Optional[str] = None
    endDate: Optional[str] = None
    status: Optional[str] = None

class WorkerAssignmentResponse(BaseModel):
    id: str
    workerId: str
    workerName: Optional[str] = None
    contractorId: Optional[str] = None
    contractorName: Optional[str] = None
    projectId: str
    projectName: Optional[str] = None
    workActivity: str
    startDate: str
    endDate: Optional[str] = None
    status: str
    createdAt: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)

class ExtendedAttendanceCreate(BaseModel):
    workerId: str
    projectId: Optional[str] = None
    contractorId: Optional[str] = None
    shiftId: Optional[str] = None
    date: str
    status: str # Present, Absent, Leave
    checkIn: Optional[str] = None
    checkOut: Optional[str] = None
    workingHours: Optional[float] = None
    remarks: Optional[str] = None

class AttendanceCheckIn(BaseModel):
    workerId: str
    projectId: str
    contractorId: Optional[str] = None
    shiftId: Optional[str] = None
    checkInTime: Optional[str] = None

class AttendanceCheckOut(BaseModel):
    workerId: str
    checkOutTime: Optional[str] = None

class ShiftCreate(BaseModel):
    id: Optional[str] = None
    name: str # e.g., Morning Shift
    startTime: str # "08:00 AM"
    endTime: str # "05:00 PM"
    projectId: str
    shiftDate: str
    status: Optional[str] = "Scheduled"

class ShiftUpdate(BaseModel):
    name: Optional[str] = None
    startTime: Optional[str] = None
    endTime: Optional[str] = None
    status: Optional[str] = None

class ShiftResponse(BaseModel):
    id: str
    name: str
    startTime: str
    endTime: str
    projectId: str
    projectName: Optional[str] = None
    shiftDate: str
    status: str
    assignedWorkersCount: Optional[int] = 0
    assignedWorkers: Optional[List[dict]] = None
    createdAt: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)

class ShiftAssignmentCreate(BaseModel):
    shiftId: str
    workerIds: List[str]

class PayrollRecordCreate(BaseModel):
    workerId: str
    projectId: Optional[str] = None
    contractorId: Optional[str] = None
    monthYear: str # e.g. "2026-08"
    payRate: Optional[float] = 500.0
    workingDays: Optional[int] = 0
    workingHours: Optional[float] = 0.0
    overtimeHours: Optional[float] = 0.0
    leaveDays: Optional[int] = 0
    status: Optional[str] = "Pending"

class PayrollRecordUpdate(BaseModel):
    payRate: Optional[float] = None
    workingDays: Optional[int] = None
    workingHours: Optional[float] = None
    overtimeHours: Optional[float] = None
    leaveDays: Optional[int] = None
    estimatedPay: Optional[float] = None
    status: Optional[str] = None

class PayrollRecordResponse(BaseModel):
    id: str
    workerId: str
    workerName: Optional[str] = None
    workerCategory: Optional[str] = None
    projectId: Optional[str] = None
    projectName: Optional[str] = None
    contractorId: Optional[str] = None
    contractorName: Optional[str] = None
    monthYear: str
    payRate: float
    workingDays: int
    workingHours: float
    overtimeHours: float
    leaveDays: int
    estimatedPay: float
    status: str
    updatedAt: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)

class WorkforceSummaryResponse(BaseModel):
    totalWorkers: int
    activeWorkers: int
    presentWorkersToday: int
    absentWorkersToday: int
    onLeaveWorkersToday: int
    attendancePercentage: float
    categoryBreakdown: dict
    projectBreakdown: dict
    contractorBreakdown: dict

# ==========================================
# PLATFORM GENERAL WRAPPER SCHEMAS
# ==========================================
class GenericResponse(BaseModel):
    success: bool
    message: Optional[str] = None
    data: Optional[Any] = None


# ==========================================
# MODULE 7: PROCUREMENT MANAGEMENT SCHEMAS
# ==========================================

# --- Vendor Schemas ---
class VendorCreate(BaseModel):
    id: str
    name: str
    contact_person: Optional[str] = None
    contact_number: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    category: str
    products_services: Optional[str] = None
    status: Optional[str] = "Active"

class VendorUpdate(BaseModel):
    name: Optional[str] = None
    contact_person: Optional[str] = None
    contact_number: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    category: Optional[str] = None
    products_services: Optional[str] = None
    status: Optional[str] = None

class VendorResponse(BaseModel):
    id: str
    name: str
    contact_person: Optional[str] = None
    contact_number: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    category: str
    products_services: Optional[str] = None
    status: str
    created_at: str
    updated_at: str
    total_orders: Optional[int] = 0
    total_value: Optional[float] = 0.0

    model_config = ConfigDict(from_attributes=True)

# --- Procurement Category Schemas ---
class ProcurementCategoryCreate(BaseModel):
    id: str
    name: str
    description: Optional[str] = None

class ProcurementCategoryResponse(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    created_at: str

    model_config = ConfigDict(from_attributes=True)

# --- Procurement Request Schemas ---
class ProcurementRequestCreate(BaseModel):
    project_id: str
    category_id: Optional[str] = None
    item_name: str
    quantity: float
    unit: str
    required_date: Optional[str] = None
    purpose: Optional[str] = None
    priority: Optional[str] = "Medium"
    remarks: Optional[str] = None
    material_id: Optional[str] = None
    resource_id: Optional[str] = None

class ProcurementRequestUpdate(BaseModel):
    category_id: Optional[str] = None
    item_name: Optional[str] = None
    quantity: Optional[float] = None
    unit: Optional[str] = None
    required_date: Optional[str] = None
    purpose: Optional[str] = None
    priority: Optional[str] = None
    remarks: Optional[str] = None
    status: Optional[str] = None

class ProcurementRequestApprove(BaseModel):
    rejection_reason: Optional[str] = None

class ProcurementRequestResponse(BaseModel):
    id: str
    project_id: str
    project_name: str
    requested_by_id: str
    requested_by_name: str
    approved_by_name: Optional[str] = None
    category_id: Optional[str] = None
    category_name: Optional[str] = None
    item_name: str
    quantity: float
    unit: str
    required_date: Optional[str] = None
    purpose: Optional[str] = None
    priority: str
    request_date: str
    status: str
    remarks: Optional[str] = None
    rejection_reason: Optional[str] = None
    available_quantity: Optional[float] = None
    shortage_quantity: Optional[float] = None
    material_id: Optional[str] = None
    resource_id: Optional[str] = None
    created_at: str

    model_config = ConfigDict(from_attributes=True)

# --- Purchase Order Schemas ---
class POItemCreate(BaseModel):
    description: str
    quantity: float
    unit: str
    unit_price: float
    tax_percent: Optional[float] = 0.0
    material_id: Optional[str] = None
    resource_id: Optional[str] = None

class POItemUpdate(BaseModel):
    description: Optional[str] = None
    quantity: Optional[float] = None
    unit: Optional[str] = None
    unit_price: Optional[float] = None
    tax_percent: Optional[float] = None

class POItemResponse(BaseModel):
    id: str
    purchase_order_id: str
    material_id: Optional[str] = None
    material_name: Optional[str] = None
    resource_id: Optional[str] = None
    description: str
    quantity: float
    unit: str
    unit_price: float
    tax_percent: float
    line_total: float
    received_quantity: float

    model_config = ConfigDict(from_attributes=True)

class PurchaseOrderCreate(BaseModel):
    vendor_id: Optional[str] = None
    project_id: str
    procurement_request_id: Optional[str] = None
    expected_delivery_date: Optional[str] = None
    tax_amount: Optional[float] = 0.0
    additional_charges: Optional[float] = 0.0
    notes: Optional[str] = None
    items: Optional[List[POItemCreate]] = []

class PurchaseOrderUpdate(BaseModel):
    vendor_id: Optional[str] = None
    expected_delivery_date: Optional[str] = None
    tax_amount: Optional[float] = None
    additional_charges: Optional[float] = None
    notes: Optional[str] = None
    status: Optional[str] = None

class PurchaseOrderResponse(BaseModel):
    id: str
    vendor_id: Optional[str] = None
    vendor_name: Optional[str] = None
    project_id: str
    project_name: str
    procurement_request_id: Optional[str] = None
    created_by_name: str
    order_date: str
    expected_delivery_date: Optional[str] = None
    actual_delivery_date: Optional[str] = None
    subtotal: float
    tax_amount: float
    additional_charges: float
    total_amount: float
    status: str
    notes: Optional[str] = None
    items: Optional[List[POItemResponse]] = []
    created_at: str

    model_config = ConfigDict(from_attributes=True)

# --- Goods Receipt Schemas ---
class GoodsReceiptItemCreate(BaseModel):
    po_item_id: Optional[str] = None
    material_id: Optional[str] = None
    description: str
    ordered_quantity: float
    received_quantity: float
    unit: str

class GoodsReceiptCreate(BaseModel):
    purchase_order_id: str
    project_id: str
    received_date: Optional[str] = None
    remarks: Optional[str] = None
    delivery_note_number: Optional[str] = None
    items: List[GoodsReceiptItemCreate]

class GoodsReceiptItemResponse(BaseModel):
    id: str
    po_item_id: Optional[str] = None
    material_id: Optional[str] = None
    material_name: Optional[str] = None
    description: str
    ordered_quantity: float
    received_quantity: float
    unit: str

    model_config = ConfigDict(from_attributes=True)

class GoodsReceiptResponse(BaseModel):
    id: str
    purchase_order_id: str
    vendor_name: Optional[str] = None
    project_name: str
    received_by_name: str
    received_date: str
    remarks: Optional[str] = None
    delivery_note_number: Optional[str] = None
    receipt_items: List[GoodsReceiptItemResponse] = []
    created_at: str

    model_config = ConfigDict(from_attributes=True)

# --- Invoice Schemas ---
class ProcurementInvoiceCreate(BaseModel):
    invoice_number: str
    vendor_id: Optional[str] = None
    purchase_order_id: Optional[str] = None
    project_id: str
    invoice_date: str
    due_date: Optional[str] = None
    invoice_amount: float
    remarks: Optional[str] = None

class ProcurementInvoiceUpdate(BaseModel):
    invoice_status: Optional[str] = None
    payment_status: Optional[str] = None
    paid_amount: Optional[float] = None
    due_date: Optional[str] = None
    remarks: Optional[str] = None

class ProcurementInvoiceResponse(BaseModel):
    id: str
    invoice_number: str
    vendor_id: Optional[str] = None
    vendor_name: Optional[str] = None
    purchase_order_id: Optional[str] = None
    project_id: str
    project_name: str
    created_by_name: str
    invoice_date: str
    due_date: Optional[str] = None
    invoice_amount: float
    paid_amount: float
    payment_status: str
    invoice_status: str
    remarks: Optional[str] = None
    is_overdue: Optional[bool] = False
    created_at: str

    model_config = ConfigDict(from_attributes=True)

# --- Analytics Schemas ---
class ProcurementSummaryResponse(BaseModel):
    total_vendors: int
    active_vendors: int
    total_procurement_requests: int
    pending_requests: int
    approved_requests: int
    rejected_requests: int
    active_purchase_orders: int
    orders_pending_delivery: int
    partially_received_orders: int
    completed_orders: int
    total_invoices: int
    pending_invoices: int
    overdue_invoices: int
    total_procurement_value: float
    recent_requests: List[Any] = []
    recent_purchase_orders: List[Any] = []
    upcoming_deliveries: List[Any] = []
