import datetime
from sqlalchemy import Column, String, Integer, Float, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database.base import Base

class Role(Base):
    __tablename__ = "roles"

    id = Column(String, primary_key=True)
    name = Column(String, unique=True, nullable=False)
    description = Column(String, nullable=True)

    users = relationship("User", back_populates="role")

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    name = Column(String, nullable=False)
    phone = Column(String, nullable=True)
    company = Column(String, nullable=True)
    avatar = Column(String, nullable=True)

    role_id = Column(String, ForeignKey("roles.id"), nullable=False)
    role = relationship("Role", back_populates="users")

    # Profiles
    contractor_profile = relationship("Contractor", back_populates="user", uselist=False, cascade="all, delete-orphan")
    worker_profile = relationship("Worker", back_populates="user", uselist=False, cascade="all, delete-orphan")
    site_engineer_profile = relationship("SiteEngineer", back_populates="user", uselist=False, cascade="all, delete-orphan")

    # Relations
    managed_projects = relationship("Project", back_populates="manager", foreign_keys="Project.manager_id")
    assigned_tasks = relationship("WorkPackage", back_populates="assigned_to")
    material_requests = relationship("MaterialRequest", back_populates="requested_by")
    uploaded_photos = relationship("SitePhoto", back_populates="uploaded_by")
    reported_issues = relationship("IssueReport", back_populates="reported_by")
    notifications = relationship("Notification", back_populates="user", cascade="all, delete-orphan")
    daily_progress_reports = relationship("DailyProgressReport", back_populates="site_engineer", foreign_keys="DailyProgressReport.site_engineer_id")
    recorded_delays = relationship("DelayRecord", back_populates="recorded_by", foreign_keys="DelayRecord.recorded_by_id")
    logged_activities = relationship("SiteActivityLog", back_populates="logged_by", foreign_keys="SiteActivityLog.logged_by_id")
    allocated_resources = relationship("ResourceAllocation", back_populates="allocated_by", foreign_keys="ResourceAllocation.allocated_by_id")
    recorded_utilizations = relationship("ResourceUtilization", back_populates="recorded_by", foreign_keys="ResourceUtilization.recorded_by_id")

class Project(Base):
    __tablename__ = "projects"

    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    client_name = Column(String, nullable=False)
    status = Column(String, nullable=False) # Planning, In Progress, Completed, Delayed
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)
    budget = Column(Float, nullable=False)
    spent = Column(Float, default=0.0)
    progress = Column(Integer, default=0)
    image = Column(String, nullable=True)
    description = Column(String, nullable=True)

    manager_id = Column(String, ForeignKey("users.id"), nullable=True)
    manager = relationship("User", back_populates="managed_projects", foreign_keys=[manager_id])

    work_packages = relationship("WorkPackage", back_populates="project", cascade="all, delete-orphan")
    daily_reports = relationship("DailyReport", back_populates="project", cascade="all, delete-orphan")
    site_photos = relationship("SitePhoto", back_populates="project", cascade="all, delete-orphan")
    issue_reports = relationship("IssueReport", back_populates="project", cascade="all, delete-orphan")
    feedback = relationship("FeedbackMessage", back_populates="project", cascade="all, delete-orphan")
    workers = relationship("Worker", back_populates="assigned_project")
    material_requests = relationship("MaterialRequest", back_populates="project", cascade="all, delete-orphan")
    
    # Module 3 relationships
    daily_progress_reports = relationship("DailyProgressReport", back_populates="project", cascade="all, delete-orphan")
    milestones = relationship("Milestone", back_populates="project", cascade="all, delete-orphan", order_by="Milestone.order_index")
    delays = relationship("DelayRecord", back_populates="project", cascade="all, delete-orphan")
    site_activity_logs = relationship("SiteActivityLog", back_populates="project", cascade="all, delete-orphan")

    # Module 4 relationships
    resource_allocations = relationship("ResourceAllocation", back_populates="project", cascade="all, delete-orphan")
    resource_utilizations = relationship("ResourceUtilization", back_populates="project", cascade="all, delete-orphan")
    current_resources = relationship("Resource", back_populates="current_project")

class WorkPackage(Base):
    __tablename__ = "work_packages"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="work_packages")

    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)
    progress = Column(Integer, default=0)
    status = Column(String, nullable=False) # Pending, In Progress, Completed

    assigned_to_id = Column(String, ForeignKey("users.id"), nullable=True)
    assigned_to = relationship("User", back_populates="assigned_tasks")

class WorkforceCategory(Base):
    __tablename__ = "workforce_categories"

    id = Column(String, primary_key=True)
    name = Column(String, unique=True, nullable=False) # Engineers, Supervisors, Contractors, Skilled Workers, Unskilled Workers, Consultants
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    workers = relationship("Worker", back_populates="category")

class Contractor(Base):
    __tablename__ = "contractors"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    user = relationship("User", back_populates="contractor_profile")

    specialty = Column(String, nullable=False)
    status = Column(String, nullable=False) # Active, Under Review, Suspended

    workers = relationship("Worker", back_populates="contractor")

class Worker(Base):
    __tablename__ = "workers"

    id = Column(String, primary_key=True)
    worker_id = Column(String, unique=True, nullable=False)
    name = Column(String, nullable=False)
    contact_info = Column(String, nullable=True)
    email = Column(String, nullable=True)
    address = Column(String, nullable=True)
    emergency_contact = Column(String, nullable=True)

    category_id = Column(String, ForeignKey("workforce_categories.id"), nullable=True)
    category = relationship("WorkforceCategory", back_populates="workers")
    category_name = Column(String, nullable=True)

    skill_work_type = Column(String, nullable=False)
    role = Column(String, nullable=True) # Kept for backward compatibility

    contractor_id = Column(String, ForeignKey("contractors.id", ondelete="SET NULL"), nullable=True)
    contractor = relationship("Contractor", back_populates="workers")
    contractor_name = Column(String, nullable=True)

    assigned_project_id = Column(String, ForeignKey("projects.id", ondelete="SET NULL"), nullable=True)
    assigned_project = relationship("Project", back_populates="workers")

    user_id = Column(String, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=True)
    user = relationship("User", back_populates="worker_profile")

    joining_date = Column(DateTime, default=datetime.datetime.utcnow)
    status = Column(String, nullable=False, default="Active") # Active, Inactive, On Leave, Transferred
    pay_rate = Column(Float, default=500.0)

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    attendance = relationship("Attendance", back_populates="worker", cascade="all, delete-orphan")
    payslips = relationship("WorkerPayslip", back_populates="worker", cascade="all, delete-orphan")
    assignments = relationship("WorkerAssignment", back_populates="worker", cascade="all, delete-orphan")
    shift_assignments = relationship("ShiftAssignment", back_populates="worker", cascade="all, delete-orphan")
    payroll_records = relationship("PayrollRecord", back_populates="worker", cascade="all, delete-orphan")

class WorkerAssignment(Base):
    __tablename__ = "worker_assignments"

    id = Column(String, primary_key=True)
    worker_id = Column(String, ForeignKey("workers.id", ondelete="CASCADE"), nullable=False)
    worker = relationship("Worker", back_populates="assignments")

    contractor_id = Column(String, ForeignKey("contractors.id", ondelete="SET NULL"), nullable=True)
    contractor = relationship("Contractor")

    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project")

    work_activity = Column(String, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=True)
    status = Column(String, nullable=False, default="Active") # Active, Completed, Transferred, Cancelled

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

class SiteEngineer(Base):
    __tablename__ = "site_engineers"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    user = relationship("User", back_populates="site_engineer_profile")

    status = Column(String, nullable=False) # Active, Inactive

class Shift(Base):
    __tablename__ = "shifts"

    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    start_time = Column(String, nullable=False)
    end_time = Column(String, nullable=False)

    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project")

    shift_date = Column(DateTime, nullable=False)
    status = Column(String, nullable=False, default="Scheduled") # Scheduled, Active, Completed, Cancelled
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    assigned_workers = relationship("ShiftAssignment", back_populates="shift", cascade="all, delete-orphan")
    attendance_records = relationship("Attendance", back_populates="shift")

class ShiftAssignment(Base):
    __tablename__ = "shift_assignments"

    id = Column(String, primary_key=True)
    shift_id = Column(String, ForeignKey("shifts.id", ondelete="CASCADE"), nullable=False)
    shift = relationship("Shift", back_populates="assigned_workers")

    worker_id = Column(String, ForeignKey("workers.id", ondelete="CASCADE"), nullable=False)
    worker = relationship("Worker", back_populates="shift_assignments")

    status = Column(String, nullable=False, default="Assigned") # Assigned, Attended, Absent
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(String, primary_key=True)
    worker_id = Column(String, ForeignKey("workers.id", ondelete="CASCADE"), nullable=False)
    worker = relationship("Worker", back_populates="attendance")

    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=True)
    project = relationship("Project")

    contractor_id = Column(String, ForeignKey("contractors.id", ondelete="SET NULL"), nullable=True)
    contractor = relationship("Contractor")

    shift_id = Column(String, ForeignKey("shifts.id", ondelete="SET NULL"), nullable=True)
    shift = relationship("Shift", back_populates="attendance_records")

    date = Column(DateTime, nullable=False)
    status = Column(String, nullable=False) # Present, Absent, Leave
    check_in = Column(String, nullable=True) # "HH:MM" or "08:00 AM"
    check_out = Column(String, nullable=True) # "HH:MM" or "05:00 PM"
    working_hours = Column(Float, default=0.0)
    overtime_hours = Column(Float, default=0.0)
    remarks = Column(String, nullable=True)

    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class PayrollRecord(Base):
    __tablename__ = "payroll_records"

    id = Column(String, primary_key=True)
    worker_id = Column(String, ForeignKey("workers.id", ondelete="CASCADE"), nullable=False)
    worker = relationship("Worker", back_populates="payroll_records")

    project_id = Column(String, ForeignKey("projects.id", ondelete="SET NULL"), nullable=True)
    project = relationship("Project")

    contractor_id = Column(String, ForeignKey("contractors.id", ondelete="SET NULL"), nullable=True)
    contractor = relationship("Contractor")

    month_year = Column(String, nullable=False) # "2026-08" or "August 2026"
    pay_rate = Column(Float, nullable=False, default=500.0)
    working_days = Column(Integer, default=0)
    working_hours = Column(Float, default=0.0)
    overtime_hours = Column(Float, default=0.0)
    leave_days = Column(Integer, default=0)
    estimated_pay = Column(Float, nullable=False, default=0.0)
    status = Column(String, nullable=False, default="Pending") # Pending, Processing, Approved, Paid

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

class MaterialCategory(Base):
    __tablename__ = "material_categories"

    id = Column(String, primary_key=True)
    name = Column(String, unique=True, nullable=False)
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    materials = relationship("Material", back_populates="category", cascade="all, delete-orphan")

class Material(Base):
    __tablename__ = "materials"

    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    category_id = Column(String, ForeignKey("material_categories.id"), nullable=False)
    unit = Column(String, nullable=False)
    in_stock = Column(Float, nullable=False, default=0.0) # kept for backward compatibility
    reorder_level = Column(Float, nullable=False, default=0.0) # kept for backward compatibility
    minimum_stock_level = Column(Float, nullable=False, default=0.0)
    cost_per_unit = Column(Float, nullable=False, default=0.0)
    description = Column(String, nullable=True)
    status = Column(String, nullable=False, default="Active") # Active, Inactive
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    category = relationship("MaterialCategory", back_populates="materials")
    requests = relationship("MaterialRequest", back_populates="material", cascade="all, delete-orphan")
    used_in_reports = relationship("MaterialUsed", back_populates="material", cascade="all, delete-orphan")
    inventory = relationship("Inventory", back_populates="material", uselist=False, cascade="all, delete-orphan")
    allocations = relationship("MaterialAllocation", back_populates="material", cascade="all, delete-orphan")
    stock_movements = relationship("StockMovement", back_populates="material", cascade="all, delete-orphan")

class Inventory(Base):
    __tablename__ = "inventory"

    id = Column(String, primary_key=True)
    material_id = Column(String, ForeignKey("materials.id", ondelete="CASCADE"), unique=True, nullable=False)
    total_stock = Column(Float, nullable=False, default=0.0)
    available_stock = Column(Float, nullable=False, default=0.0)
    allocated_stock = Column(Float, nullable=False, default=0.0)
    consumed_stock = Column(Float, nullable=False, default=0.0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    material = relationship("Material", back_populates="inventory")

class MaterialRequest(Base):
    __tablename__ = "material_requests"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="material_requests")

    material_id = Column(String, ForeignKey("materials.id", ondelete="CASCADE"), nullable=False)
    material = relationship("Material", back_populates="requests")

    quantity = Column(Float, nullable=False)

    requested_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    requested_by = relationship("User", back_populates="material_requests")

    request_date = Column(DateTime, default=datetime.datetime.utcnow)
    required_date = Column(DateTime, nullable=True)
    work_activity = Column(String, nullable=True) # Work Activity / Purpose
    remarks = Column(String, nullable=True)
    status = Column(String, nullable=False) # Pending, Approved, Rejected, Fulfilled

    allocations = relationship("MaterialAllocation", back_populates="material_request")

class MaterialAllocation(Base):
    __tablename__ = "material_allocations"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    material_id = Column(String, ForeignKey("materials.id", ondelete="CASCADE"), nullable=False)
    quantity = Column(Float, nullable=False)
    allocation_date = Column(DateTime, default=datetime.datetime.utcnow)
    work_activity = Column(String, nullable=False)
    responsible_user_id = Column(String, ForeignKey("users.id"), nullable=False)
    material_request_id = Column(String, ForeignKey("material_requests.id", ondelete="SET NULL"), nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    project = relationship("Project")
    material = relationship("Material", back_populates="allocations")
    responsible_user = relationship("User")
    material_request = relationship("MaterialRequest", back_populates="allocations")

class StockMovement(Base):
    __tablename__ = "stock_movements"

    id = Column(String, primary_key=True)
    material_id = Column(String, ForeignKey("materials.id", ondelete="CASCADE"), nullable=False)
    project_id = Column(String, ForeignKey("projects.id", ondelete="SET NULL"), nullable=True)
    movement_type = Column(String, nullable=False) # Received, Allocated, Consumed, Returned, Adjustment
    quantity = Column(Float, nullable=False)
    date = Column(DateTime, default=datetime.datetime.utcnow)
    previous_quantity = Column(Float, nullable=False)
    new_quantity = Column(Float, nullable=False)
    performed_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    reference_id = Column(String, nullable=True) # Allocation ID, Daily Report ID, Request ID
    remarks = Column(String, nullable=True)

    material = relationship("Material", back_populates="stock_movements")
    project = relationship("Project")
    performed_by = relationship("User")

class DailyReport(Base):
    __tablename__ = "daily_reports"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="daily_reports")

    date = Column(DateTime, nullable=False)
    work_done = Column(String, nullable=False)
    weather = Column(String, nullable=False)

    site_engineer_id = Column(String, ForeignKey("users.id"), nullable=False)

    materials_used = relationship("MaterialUsed", back_populates="daily_report", cascade="all, delete-orphan")

class MaterialUsed(Base):
    __tablename__ = "material_used"

    id = Column(String, primary_key=True)
    daily_report_id = Column(String, ForeignKey("daily_reports.id", ondelete="CASCADE"), nullable=False)
    daily_report = relationship("DailyReport", back_populates="materials_used")

    material_id = Column(String, ForeignKey("materials.id", ondelete="CASCADE"), nullable=False)
    material = relationship("Material", back_populates="used_in_reports")

    quantity = Column(Float, nullable=False)

class SitePhoto(Base):
    __tablename__ = "site_photos"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="site_photos")

    url = Column(String, nullable=False)
    caption = Column(String, nullable=True)
    date = Column(DateTime, default=datetime.datetime.utcnow)

    uploaded_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    uploaded_by = relationship("User", back_populates="uploaded_photos")

class IssueReport(Base):
    __tablename__ = "issue_reports"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="issue_reports")

    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    severity = Column(String, nullable=False) # Low, Medium, High, Critical
    status = Column(String, nullable=False) # Open, In Review, Resolved

    reported_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    reported_by = relationship("User", back_populates="reported_issues")
    reported_date = Column(DateTime, default=datetime.datetime.utcnow)

class WorkerPayslip(Base):
    __tablename__ = "worker_payslips"

    id = Column(String, primary_key=True)
    worker_id = Column(String, ForeignKey("workers.id", ondelete="CASCADE"), nullable=False)
    worker = relationship("Worker", back_populates="payslips")

    month = Column(String, nullable=False) # e.g. "June 2026"
    basic_salary = Column(Float, nullable=False)
    overtime_pay = Column(Float, default=0.0)
    deductions = Column(Float, default=0.0)
    net_pay = Column(Float, nullable=False)
    status = Column(String, nullable=False) # Paid, Processing
    payment_date = Column(DateTime, nullable=True)

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    user = relationship("User", back_populates="notifications")

    message = Column(String, nullable=False)
    read = Column(Boolean, default=False)
    type = Column(String, nullable=False) # info, alert, success, warning
    date = Column(DateTime, default=datetime.datetime.utcnow)

class FeedbackMessage(Base):
    __tablename__ = "feedback_messages"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="feedback")

    client_name = Column(String, nullable=False)
    rating = Column(Integer, nullable=False)
    message = Column(String, nullable=False)
    date = Column(DateTime, default=datetime.datetime.utcnow)

class ProjectDocument(Base):
    __tablename__ = "project_documents"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    name = Column(String, nullable=False)
    size = Column(String, nullable=False)
    type = Column(String, nullable=False) # pdf, dwg, xlsx, docx, image
    upload_date = Column(DateTime, default=datetime.datetime.utcnow)
    uploaded_by = Column(String, nullable=False)

# ==========================================
# MODULE 3: SITE PROGRESS MONITORING MODELS
# ==========================================

class DailyProgressReport(Base):
    __tablename__ = "daily_progress_reports"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="daily_progress_reports")

    report_date = Column(DateTime, nullable=False)
    work_category = Column(String, nullable=False) # e.g. Earthwork, Structural, Concrete, Electrical, Plumbing, Finishing, Inspection
    activity_performed = Column(String, nullable=False)
    percentage_work_completed = Column(Float, default=0.0) # percentage of the specific activity/package completed or shift progress
    
    contractor_id = Column(String, ForeignKey("users.id"), nullable=True)
    contractor_name = Column(String, nullable=True)
    
    workers_present = Column(Integer, default=0)
    workers_absent = Column(Integer, default=0)
    machinery_used = Column(String, nullable=True) # Description/list of machinery & hours
    weather_conditions = Column(String, nullable=False) # e.g. Sunny 28C, Rain
    safety_observations = Column(String, nullable=True) # PPE compliance, hazards noted
    quality_inspection_remarks = Column(String, nullable=True) # Slump test, alignment inspection
    progress_photograph = Column(String, nullable=True) # URL / file reference
    
    delay_encountered = Column(Boolean, default=False)
    delay_reason = Column(String, nullable=True)
    additional_comments = Column(String, nullable=True)

    site_engineer_id = Column(String, ForeignKey("users.id"), nullable=False)
    site_engineer = relationship("User", back_populates="daily_progress_reports", foreign_keys=[site_engineer_id])

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    materials_consumed = relationship("DailyReportMaterial", back_populates="report", cascade="all, delete-orphan")
    resource_utilizations = relationship("ResourceUtilization", back_populates="daily_report", cascade="all, delete-orphan")


class DailyReportMaterial(Base):
    __tablename__ = "daily_report_materials"

    id = Column(String, primary_key=True)
    daily_report_id = Column(String, ForeignKey("daily_progress_reports.id", ondelete="CASCADE"), nullable=False)
    report = relationship("DailyProgressReport", back_populates="materials_consumed")

    material_id = Column(String, ForeignKey("materials.id", ondelete="SET NULL"), nullable=True)
    material_name = Column(String, nullable=False)
    quantity = Column(Float, nullable=False)
    unit = Column(String, nullable=False)


class Milestone(Base):
    __tablename__ = "milestones"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="milestones")

    name = Column(String, nullable=False) # e.g. Foundation Completed, Structural Work Completed, etc.
    planned_start_date = Column(DateTime, nullable=False)
    planned_end_date = Column(DateTime, nullable=False)
    actual_completion_date = Column(DateTime, nullable=True)
    progress_percentage = Column(Integer, default=0) # 0 to 100
    status = Column(String, nullable=False, default="Pending") # Pending, In Progress, Completed, Delayed
    related_activities = Column(String, nullable=True)
    order_index = Column(Integer, default=1)
    
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)


class DelayRecord(Base):
    __tablename__ = "delay_records"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="delays")

    date = Column(DateTime, nullable=False)
    affected_activity = Column(String, nullable=False)
    delay_reason = Column(String, nullable=False) # Heavy rainfall, Labour shortage, Material delivery delay, Machinery breakdown, Design modification, Financial issue, Government approval, Other
    delay_duration = Column(String, nullable=False) # e.g. "2 days", "8 hours"
    impact_on_project = Column(String, nullable=False, default="Medium") # Low, Medium, High, Critical
    additional_remarks = Column(String, nullable=True)

    recorded_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    recorded_by = relationship("User", back_populates="recorded_delays", foreign_keys=[recorded_by_id])

    status = Column(String, nullable=False, default="Active") # Active, Mitigated, Resolved
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)


class SiteActivityLog(Base):
    __tablename__ = "site_activity_logs"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="site_activity_logs")

    date = Column(DateTime, nullable=False)
    time = Column(String, nullable=False) # "HH:MM"
    activity_type = Column(String, nullable=False) # Machinery maintenance, Material arrival, Safety training, Client visit, Government inspection, Quality audit, Accident report, Contractor meeting, Equipment servicing, Other
    description = Column(String, nullable=False)
    responsible_person = Column(String, nullable=False)

    logged_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    logged_by = relationship("User", back_populates="logged_activities", foreign_keys=[logged_by_id])

    created_at = Column(DateTime, default=datetime.datetime.utcnow)


# ==========================================
# MODULE 4: RESOURCE MANAGEMENT MODELS
# ==========================================

class ResourceCategory(Base):
    __tablename__ = "resource_categories"

    id = Column(String, primary_key=True) # e.g. CAT-EXCAVATOR, CAT-CRANE, CAT-MIXER, CAT-TRUCK, CAT-GENERATOR, CAT-SAFETY
    name = Column(String, nullable=False, unique=True) # Excavators, Cranes, Concrete Mixers, Dump Trucks, Generators, Safety Equipment
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    resources = relationship("Resource", back_populates="category", cascade="all, delete-orphan")


class Resource(Base):
    __tablename__ = "resources"

    id = Column(String, primary_key=True) # e.g. EQ-101, EXCAVATOR-01
    name = Column(String, nullable=False) # e.g. CAT 320 Hydraulic Excavator
    category_id = Column(String, ForeignKey("resource_categories.id"), nullable=False)
    category = relationship("ResourceCategory", back_populates="resources")

    quantity = Column(Integer, default=1, nullable=False)
    current_location = Column(String, nullable=False, default="Equipment Yard") # e.g. Site A, Equipment Yard, Workshop
    
    current_project_id = Column(String, ForeignKey("projects.id", ondelete="SET NULL"), nullable=True)
    current_project = relationship("Project", back_populates="current_resources")

    status = Column(String, nullable=False, default="Available") # Available, Allocated, Under Maintenance, Out of Service, Idle, Operating
    responsible_person = Column(String, nullable=False) # Operator / Supervisor name

    model_number = Column(String, nullable=True)
    serial_number = Column(String, nullable=True)
    purchase_date = Column(DateTime, nullable=True)
    hourly_cost = Column(Float, default=0.0)

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    allocations = relationship("ResourceAllocation", back_populates="resource", cascade="all, delete-orphan")
    utilizations = relationship("ResourceUtilization", back_populates="resource", cascade="all, delete-orphan")
    maintenance_records = relationship("MaintenanceRecord", back_populates="resource", cascade="all, delete-orphan")


class ResourceAllocation(Base):
    __tablename__ = "resource_allocations"

    id = Column(String, primary_key=True) # e.g. ALC-1001
    resource_id = Column(String, ForeignKey("resources.id", ondelete="CASCADE"), nullable=False)
    resource = relationship("Resource", back_populates="allocations")

    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="resource_allocations")

    allocation_date = Column(DateTime, nullable=False)
    expected_return_date = Column(DateTime, nullable=False)
    actual_return_date = Column(DateTime, nullable=True)

    quantity = Column(Integer, default=1, nullable=False)
    responsible_person = Column(String, nullable=False) # Assigned operator or site engineer
    
    allocated_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    allocated_by = relationship("User", back_populates="allocated_resources")

    status = Column(String, nullable=False, default="Allocated") # Allocated, Active, Returned, Cancelled
    notes = Column(String, nullable=True)

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)


class ResourceUtilization(Base):
    __tablename__ = "resource_utilization"

    id = Column(String, primary_key=True) # e.g. UTL-1001
    resource_id = Column(String, ForeignKey("resources.id", ondelete="CASCADE"), nullable=False)
    resource = relationship("Resource", back_populates="utilizations")

    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project", back_populates="resource_utilizations")

    usage_date = Column(DateTime, nullable=False)
    operating_hours = Column(Float, default=0.0, nullable=False)
    idle_hours = Column(Float, default=0.0, nullable=False)
    total_available_hours = Column(Float, default=8.0, nullable=False)
    utilization_percentage = Column(Float, default=0.0, nullable=False) # (operating / total) * 100

    daily_report_id = Column(String, ForeignKey("daily_progress_reports.id", ondelete="SET NULL"), nullable=True)
    daily_report = relationship("DailyProgressReport", back_populates="resource_utilizations")

    recorded_by_id = Column(String, ForeignKey("users.id"), nullable=True)
    recorded_by = relationship("User", back_populates="recorded_utilizations")

    remarks = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)


class MaintenanceRecord(Base):
    __tablename__ = "maintenance_records"

    id = Column(String, primary_key=True) # e.g. MNT-1001
    resource_id = Column(String, ForeignKey("resources.id", ondelete="CASCADE"), nullable=False)
    resource = relationship("Resource", back_populates="maintenance_records")

    last_maintenance_date = Column(DateTime, nullable=False)
    next_maintenance_date = Column(DateTime, nullable=False)
    maintenance_type = Column(String, nullable=False) # Preventive, Corrective, Emergency, Inspection
    service_engineer = Column(String, nullable=False)
    maintenance_cost = Column(Float, default=0.0, nullable=False)

    status = Column(String, nullable=False, default="Scheduled") # Scheduled, In Progress, Completed, Overdue
    remarks = Column(String, nullable=True)

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)




# ==========================================
# MODULE 7: PROCUREMENT MANAGEMENT MODELS
# ==========================================

class Vendor(Base):
    """Centralized Vendor / Supplier registry."""
    __tablename__ = "vendors"

    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    contact_person = Column(String, nullable=True)
    contact_number = Column(String, nullable=True)
    email = Column(String, nullable=True)
    address = Column(String, nullable=True)
    category = Column(String, nullable=False)
    products_services = Column(String, nullable=True)
    status = Column(String, nullable=False, default="Active")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    purchase_orders = relationship("PurchaseOrder", back_populates="vendor")
    invoices = relationship("ProcurementInvoice", back_populates="vendor")


class ProcurementCategory(Base):
    __tablename__ = "procurement_categories"

    id = Column(String, primary_key=True)
    name = Column(String, unique=True, nullable=False)
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    procurement_requests = relationship("ProcurementRequest", back_populates="category")


class ProcurementRequest(Base):
    __tablename__ = "procurement_requests"

    id = Column(String, primary_key=True)
    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project")

    requested_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    requested_by = relationship("User", foreign_keys=[requested_by_id])

    approved_by_id = Column(String, ForeignKey("users.id"), nullable=True)
    approved_by = relationship("User", foreign_keys=[approved_by_id])

    category_id = Column(String, ForeignKey("procurement_categories.id"), nullable=True)
    category = relationship("ProcurementCategory", back_populates="procurement_requests")

    item_name = Column(String, nullable=False)
    quantity = Column(Float, nullable=False)
    unit = Column(String, nullable=False)
    required_date = Column(DateTime, nullable=True)
    purpose = Column(String, nullable=True)
    priority = Column(String, nullable=False, default="Medium")
    request_date = Column(DateTime, default=datetime.datetime.utcnow)
    status = Column(String, nullable=False, default="Pending")
    remarks = Column(String, nullable=True)
    rejection_reason = Column(String, nullable=True)

    available_quantity = Column(Float, nullable=True)
    shortage_quantity = Column(Float, nullable=True)

    material_id = Column(String, ForeignKey("materials.id", ondelete="SET NULL"), nullable=True)
    material = relationship("Material")

    resource_id = Column(String, ForeignKey("resources.id", ondelete="SET NULL"), nullable=True)
    resource = relationship("Resource")

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    purchase_orders = relationship("PurchaseOrder", back_populates="procurement_request")


class PurchaseOrder(Base):
    __tablename__ = "purchase_orders"

    id = Column(String, primary_key=True)
    vendor_id = Column(String, ForeignKey("vendors.id", ondelete="SET NULL"), nullable=True)
    vendor = relationship("Vendor", back_populates="purchase_orders")

    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project")

    procurement_request_id = Column(String, ForeignKey("procurement_requests.id", ondelete="SET NULL"), nullable=True)
    procurement_request = relationship("ProcurementRequest", back_populates="purchase_orders")

    created_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    created_by = relationship("User", foreign_keys=[created_by_id])

    order_date = Column(DateTime, default=datetime.datetime.utcnow)
    expected_delivery_date = Column(DateTime, nullable=True)
    actual_delivery_date = Column(DateTime, nullable=True)

    subtotal = Column(Float, default=0.0)
    tax_amount = Column(Float, default=0.0)
    additional_charges = Column(Float, default=0.0)
    total_amount = Column(Float, default=0.0)

    status = Column(String, nullable=False, default="Draft")
    notes = Column(String, nullable=True)

    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    items = relationship("PurchaseOrderItem", back_populates="purchase_order", cascade="all, delete-orphan")
    receipts = relationship("GoodsReceipt", back_populates="purchase_order", cascade="all, delete-orphan")
    invoices = relationship("ProcurementInvoice", back_populates="purchase_order")


class PurchaseOrderItem(Base):
    __tablename__ = "purchase_order_items"

    id = Column(String, primary_key=True)
    purchase_order_id = Column(String, ForeignKey("purchase_orders.id", ondelete="CASCADE"), nullable=False)
    purchase_order = relationship("PurchaseOrder", back_populates="items")

    material_id = Column(String, ForeignKey("materials.id", ondelete="SET NULL"), nullable=True)
    material = relationship("Material")

    resource_id = Column(String, ForeignKey("resources.id", ondelete="SET NULL"), nullable=True)
    resource = relationship("Resource")

    description = Column(String, nullable=False)
    quantity = Column(Float, nullable=False)
    unit = Column(String, nullable=False)
    unit_price = Column(Float, nullable=False, default=0.0)
    tax_percent = Column(Float, default=0.0)
    line_total = Column(Float, nullable=False, default=0.0)

    received_quantity = Column(Float, default=0.0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)


class GoodsReceipt(Base):
    __tablename__ = "goods_receipts"

    id = Column(String, primary_key=True)
    purchase_order_id = Column(String, ForeignKey("purchase_orders.id", ondelete="CASCADE"), nullable=False)
    purchase_order = relationship("PurchaseOrder", back_populates="receipts")

    vendor_id = Column(String, ForeignKey("vendors.id", ondelete="SET NULL"), nullable=True)
    vendor = relationship("Vendor")

    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project")

    received_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    received_by = relationship("User")

    received_date = Column(DateTime, default=datetime.datetime.utcnow)
    remarks = Column(String, nullable=True)
    delivery_note_number = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    receipt_items = relationship("GoodsReceiptItem", back_populates="goods_receipt", cascade="all, delete-orphan")


class GoodsReceiptItem(Base):
    __tablename__ = "goods_receipt_items"

    id = Column(String, primary_key=True)
    goods_receipt_id = Column(String, ForeignKey("goods_receipts.id", ondelete="CASCADE"), nullable=False)
    goods_receipt = relationship("GoodsReceipt", back_populates="receipt_items")

    po_item_id = Column(String, ForeignKey("purchase_order_items.id", ondelete="SET NULL"), nullable=True)
    po_item = relationship("PurchaseOrderItem")

    material_id = Column(String, ForeignKey("materials.id", ondelete="SET NULL"), nullable=True)
    material = relationship("Material")

    description = Column(String, nullable=False)
    ordered_quantity = Column(Float, nullable=False)
    received_quantity = Column(Float, nullable=False)
    unit = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)


class ProcurementInvoice(Base):
    __tablename__ = "procurement_invoices"

    id = Column(String, primary_key=True)
    invoice_number = Column(String, nullable=False)

    vendor_id = Column(String, ForeignKey("vendors.id", ondelete="SET NULL"), nullable=True)
    vendor = relationship("Vendor", back_populates="invoices")

    purchase_order_id = Column(String, ForeignKey("purchase_orders.id", ondelete="SET NULL"), nullable=True)
    purchase_order = relationship("PurchaseOrder", back_populates="invoices")

    project_id = Column(String, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    project = relationship("Project")

    created_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    created_by = relationship("User")

    invoice_date = Column(DateTime, nullable=False)
    due_date = Column(DateTime, nullable=True)
    invoice_amount = Column(Float, nullable=False)
    paid_amount = Column(Float, default=0.0)

    payment_status = Column(String, nullable=False, default="Pending")
    invoice_status = Column(String, nullable=False, default="Received")

    remarks = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    payments = relationship("ProcurementPayment", back_populates="invoice", cascade="all, delete-orphan")


class ProcurementPayment(Base):
    __tablename__ = "procurement_payments"

    id = Column(String, primary_key=True)
    invoice_id = Column(String, ForeignKey("procurement_invoices.id", ondelete="CASCADE"), nullable=False)
    invoice = relationship("ProcurementInvoice", back_populates="payments")

    amount = Column(Float, nullable=False)
    payment_date = Column(DateTime, nullable=False, default=datetime.datetime.utcnow)
    payment_method = Column(String, nullable=False)  # Cash, Bank Transfer, UPI, Cheque, Card, Other
    reference_number = Column(String, nullable=True)
    remarks = Column(String, nullable=True)
    recorded_by_id = Column(String, ForeignKey("users.id"), nullable=False)
    recorded_by = relationship("User")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
