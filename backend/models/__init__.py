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

class Contractor(Base):
    __tablename__ = "contractors"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    user = relationship("User", back_populates="contractor_profile")

    specialty = Column(String, nullable=False)
    status = Column(String, nullable=False) # Active, Under Review, Suspended

class Worker(Base):
    __tablename__ = "workers"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    user = relationship("User", back_populates="worker_profile")

    role = Column(String, nullable=False) # e.g. Electrician, Mason
    status = Column(String, nullable=False) # Active, On Leave, Inactive

    assigned_project_id = Column(String, ForeignKey("projects.id"), nullable=True)
    assigned_project = relationship("Project", back_populates="workers")

    attendance = relationship("Attendance", back_populates="worker", cascade="all, delete-orphan")
    payslips = relationship("WorkerPayslip", back_populates="worker", cascade="all, delete-orphan")

class SiteEngineer(Base):
    __tablename__ = "site_engineers"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    user = relationship("User", back_populates="site_engineer_profile")

    status = Column(String, nullable=False) # Active, Inactive

class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(String, primary_key=True)
    worker_id = Column(String, ForeignKey("workers.id", ondelete="CASCADE"), nullable=False)
    worker = relationship("Worker", back_populates="attendance")

    date = Column(DateTime, nullable=False)
    status = Column(String, nullable=False) # Present, Absent, Leave
    check_in = Column(String, nullable=True) # "HH:MM"
    check_out = Column(String, nullable=True) # "HH:MM"

class Material(Base):
    __tablename__ = "materials"

    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    unit = Column(String, nullable=False)
    in_stock = Column(Float, nullable=False)
    reorder_level = Column(Float, nullable=False)
    cost_per_unit = Column(Float, nullable=False)

    requests = relationship("MaterialRequest", back_populates="material", cascade="all, delete-orphan")
    used_in_reports = relationship("MaterialUsed", back_populates="material", cascade="all, delete-orphan")

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
    status = Column(String, nullable=False) # Pending, Approved, Rejected

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
