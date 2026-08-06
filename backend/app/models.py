from sqlalchemy import Column, Integer, String, Float, Date, DateTime, ForeignKey, Text, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


# ==========================
# USERS
# ==========================
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    phone = Column(String(15))
    password = Column(String(255), nullable=False)
    role = Column(String(50), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)


# ==========================
# PROJECTS
# ==========================

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)

    project_code = Column(String(20), unique=True, nullable=False)
    name = Column(String(150), nullable=False)
    category = Column(String(100), nullable=False)
    client_name = Column(String(150), nullable=False)

    location = Column(String(200))
    description = Column(Text)

    budget = Column(Float)

    priority = Column(String(20), default="Medium")
    status = Column(String(50), default="Planning")

    start_date = Column(Date)
    expected_completion_date = Column(Date)

    project_manager = Column(String(150), nullable=True)

# ==========================
# PROJECT MILESTONES
# ==========================
class Milestone(Base):
    __tablename__ = "milestones"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)

    title = Column(String(150), nullable=False)
    description = Column(Text)

    planned_date = Column(Date)
    actual_completion_date = Column(Date, nullable=True)

    status = Column(String(50), default="Pending")
# ==========================
# PROJECT SCHEDULE
# ==========================
class ProjectSchedule(Base):
    __tablename__ = "project_schedules"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)

    task_name = Column(String(150), nullable=False)
    description = Column(Text)

    start_date = Column(Date)
    end_date = Column(Date)

    status = Column(String(50), default="Pending")
# ==========================
# SITE ENGINEER ASSIGNMENT
# ==========================

class SiteEngineerAssignment(Base):
    __tablename__ = "site_engineer_assignments"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)

    engineer_name = Column(String(150), nullable=False)

    assigned_date = Column(Date)

    status = Column(String(50), default="Assigned")
# ==========================
# CONTRACTOR ASSIGNMENT
# ==========================
class ContractorAssignment(Base):
    __tablename__ = "contractor_assignments"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)

    contractor_name = Column(String(150), nullable=False)
    specialization = Column(String(100), nullable=False)

    assigned_date = Column(Date)

    status = Column(String(50), default="Assigned")
# ==========================
# WORKERS
# ==========================
class Worker(Base):
    __tablename__ = "workers"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100))
    phone = Column(String(15))
    designation = Column(String(100))
    salary = Column(Float)
    joining_date = Column(Date)


# ==========================
# ATTENDANCE
# ==========================
class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(Integer, primary_key=True, index=True)
    worker_id = Column(Integer, ForeignKey("workers.id"))
    date = Column(Date)
    status = Column(String(20))


# ==========================
# INVENTORY
# ==========================
class Inventory(Base):
    __tablename__ = "inventory"

    id = Column(Integer, primary_key=True, index=True)
    item_name = Column(String(100))
    quantity = Column(Integer)
    unit = Column(String(30))
    supplier = Column(String(100))


# ==========================
# RESOURCES
# ==========================
class Resource(Base):
    __tablename__ = "resources"

    id = Column(Integer, primary_key=True, index=True)
    resource_name = Column(String(100))
    type = Column(String(50))
    quantity = Column(Integer)
    status = Column(String(50))


# ==========================
# PROCUREMENTS
# ==========================
class Procurement(Base):
    __tablename__ = "procurements"

    id = Column(Integer, primary_key=True, index=True)
    item_name = Column(String(100))
    quantity = Column(Integer)
    cost = Column(Float)
    supplier = Column(String(100))
    purchase_date = Column(Date)


# ==========================
# NOTIFICATIONS
# ==========================
class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(150))
    message = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)


# ==========================
# REPORTS
# ==========================
class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True, index=True)
    report_type = Column(String(50))
    description = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)

