from sqlalchemy import Column, Integer, String, Float, Date, DateTime, ForeignKey, Text, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
#
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

## ==========================
# PROJECT MILESTONES
# ==========================

class Milestone(Base):
    __tablename__ = "milestones"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    title = Column(String(150), nullable=False)
    description = Column(Text)

    planned_date = Column("due_date" ,Date)
    actual_completion_date = Column(Date, nullable=True)

    progress_percentage = Column(Float, default=0)

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
     # Module 3 contractor registry fields
    company_name = Column(String(150))
    representative_name = Column(String(150))
    phone = Column(String(15))
    email = Column(String(100))
    status = Column(String(50), default="Active")

    assigned_date = Column(Date)
    assignment_status = Column(String(50), default="Assigned")
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
    # Module 3 fields
    assigned_project = Column(String(150))
    status = Column(String(50), default="Active")


# ==========================
# ATTENDANCE - MODULE 3
# ==========================
class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(Integer, primary_key=True, index=True)

    worker_id = Column(
        Integer,
        ForeignKey("workers.id")
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=True
    )

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
     # Module 3 fields
    buffer_level = Column(Integer, default=0)
    status = Column(String(50), default="In Stock")


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
# ==========================
# EQUIPMENT
# ==========================
class Equipment(Base):
    __tablename__ = "equipment"

    id = Column(Integer, primary_key=True, index=True)

    equipment_id = Column(String(50), unique=True, nullable=False)
    name = Column(String(100), nullable=False)
    category = Column(String(100), nullable=False)
    model_number = Column(String(100))
    serial_number = Column(String(100))
    location = Column(String(150))
    status = Column(String(50), default="Available")
    hourly_rate = Column(Float)
    responsible_person = Column(String(150))
# ==========================
# EQUIPMENT ALLOCATION
# ==========================
class EquipmentAllocation(Base):
    __tablename__ = "equipment_allocations"

    id = Column(Integer, primary_key=True, index=True)

    equipment_id = Column(
        Integer,
        ForeignKey("equipment.id"),
        nullable=False
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=True)

    responsible_person = Column(String(150))
    status = Column(String(50), default="Active")
# ==========================
# EQUIPMENT MAINTENANCE
# ==========================
class EquipmentMaintenance(Base):
    __tablename__ = "equipment_maintenance"

    id = Column(Integer, primary_key=True, index=True)

    equipment_id = Column(
        Integer,
        ForeignKey("equipment.id"),
        nullable=False
    )

    maintenance_type = Column(String(100), nullable=False)
    last_maintenance_date = Column(Date)

    next_service_date = Column(Date)

    engineer = Column(String(150))

    cost = Column(Float)

    status = Column(String(50), default="Scheduled")

    remarks = Column(Text)
# ==========================
# MATERIAL USAGE
# ==========================
class MaterialUsage(Base):
    __tablename__ = "material_usage"

    id = Column(Integer, primary_key=True, index=True)

    inventory_id = Column(Integer, nullable=False)
    quantity_used = Column(Integer, nullable=False)
    used_for = Column(String(200))
# ==========================
# SITE ISSUES
# ==========================
class SiteIssue(Base):
    __tablename__ = "site_issues"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(Integer, nullable=False)
    issue_type = Column(String(100), nullable=False)
    description = Column(String(500))
    severity = Column(String(50), default="Medium")
    status = Column(String(50), default="Open")
    issue_date = Column(String(30))
## ==========================
# PROGRESS UPDATES - MODULE 3
# ==========================

class ProgressUpdate(Base):
    __tablename__ = "progress_updates"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    activity_name = Column(String(150), nullable=False)
    work_category = Column(String(100))

    description = Column(Text)

    progress_percentage = Column(Float, default=0)

    contractor_id = Column(Integer, nullable=True)

    workers_present = Column(Integer, default=0)
    workers_absent = Column(Integer, default=0)

    machinery_used = Column(String(500))
    materials_consumed = Column(String(1000))

    weather_conditions = Column(String(200))

    safety_observations = Column(Text)
    quality_remarks = Column(Text)

    delay_description = Column(Text)

    additional_comments = Column(Text)

    update_date = Column(Date)

    status = Column(String(50), default="In Progress")

    updated_by = Column(String(150))
# ==========================
# PROGRESS REPORTS - MODULE 3
# ==========================

class ProgressReport(Base):
    __tablename__ = "progress_reports"

    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, nullable=False)
    report_date = Column(Date, nullable=False)
    overall_progress = Column(Float, default=0)
    summary = Column(String(1000), nullable=True)
    status = Column(String(50), default="In Progress")
# ==========================
# DELAY RECORDS - MODULE 3
# ==========================

class DelayRecord(Base):
    __tablename__ = "delay_records"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    delay_date = Column(Date, nullable=False)

    reason = Column(String(500), nullable=False)

    duration_hours = Column(Float, default=0)

    affected_work_category = Column(String(100))

    timeline_impact = Column(String(500))

    status = Column(String(50), default="Open")

    remarks = Column(Text)
# ==========================
# SITE ACTIVITY LOGS - MODULE 3
# ==========================

class SiteActivityLog(Base):
    __tablename__ = "site_activity_logs"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    activity_date = Column(Date, nullable=False)

    activity_time = Column(String(20))

    activity_type = Column(String(100), nullable=False)

    description = Column(Text, nullable=False)

    responsible_person = Column(String(150))

    remarks = Column(Text)
# ==========================
# PROGRESS PHOTOGRAPHS - MODULE 3
# ==========================

class ProgressPhoto(Base):
    __tablename__ = "progress_photos"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    progress_update_id = Column(
        Integer,
        ForeignKey("progress_updates.id"),
        nullable=True
    )

    photo_path = Column(String(500), nullable=False)

    description = Column(String(500))

    uploaded_by = Column(String(150))

    uploaded_date = Column(Date)
# ==========================
# WEEKLY PROGRESS REPORTS - MODULE 3
# ==========================

class WeeklyProgressReport(Base):
    __tablename__ = "weekly_progress_reports"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    week_start_date = Column(Date, nullable=False)
    week_end_date = Column(Date, nullable=False)

    work_completed = Column(Text)

    progress_percentage = Column(Float, default=0)

    worker_hours = Column(Float, default=0)

    major_activities = Column(Text)

    delays = Column(Text)

    safety_incidents = Column(Text)

    overall_status = Column(
        String(50),
        default="In Progress"
    )
    # ==========================
# EQUIPMENT UTILIZATION - MODULE 4
# ==========================

class EquipmentUtilization(Base):
    __tablename__ = "equipment_utilization"

    id = Column(Integer, primary_key=True, index=True)

    equipment_id = Column(
        Integer,
        ForeignKey("equipment.id"),
        nullable=False
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    usage_date = Column(Date, nullable=False)

    operating_hours = Column(Float, default=0)

    idle_hours = Column(Float, default=0)

    remarks = Column(Text)