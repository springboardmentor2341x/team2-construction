from sqlalchemy import Column, Integer, String, Float, Date, DateTime, ForeignKey, Text, Boolean,Time
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
    workforce_category = Column(String(50))
    contractor_name = Column(String(150))
    assigned_project = Column(String(150))
    status = Column(String(50), default="Active")

# ==========================
# WORKER ASSIGNMENTS - MODULE 6
# ==========================

class WorkerAssignment(Base):
    __tablename__ = "worker_assignments"

    id = Column(Integer, primary_key=True, index=True)

    worker_id = Column(
        Integer,
        ForeignKey("workers.id"),
        nullable=False
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    contractor_name = Column(String(150))
    work_activity = Column(String(150))

    start_date = Column(Date, nullable=False)
    end_date = Column(Date)

    assignment_status = Column(
        String(50),
        default="Active"
    )
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

    status = Column(String(20),nullable =False)

    check_in_time = Column(Time)
    check_out_time = Column(Time)
    working_hours = Column(Float)
    remarks = Column(Text)
# ==========================
# SHIFTS - MODULE 6
# ==========================

class Shift(Base):
    __tablename__ = "shifts"

    id = Column(Integer, primary_key=True, index=True)

    shift_name = Column(
        String(100),
        nullable=False
    )

    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    shift_date = Column(Date, nullable=False)

    status = Column(
        String(50),
        default="Scheduled"
    )
# ==========================
# SHIFT ASSIGNMENTS - MODULE 6
# ==========================

class ShiftAssignment(Base):
    __tablename__ = "shift_assignments"

    id = Column(Integer, primary_key=True, index=True)

    shift_id = Column(
        Integer,
        ForeignKey("shifts.id"),
        nullable=False
    )

    worker_id = Column(
        Integer,
        ForeignKey("workers.id"),
        nullable=False
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    assignment_status = Column(
        String(50),
        default="Assigned"
    )
# ==========================
# PAYROLL - MODULE 6
# ==========================

class Payroll(Base):
    __tablename__ = "payroll"

    id = Column(Integer, primary_key=True, index=True)

    worker_id = Column(
        Integer,
        ForeignKey("workers.id"),
        nullable=False
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    pay_rate = Column(Float, nullable=False)

    working_days = Column(
        Integer,
        default=0
    )

    working_hours = Column(
        Float,
        default=0
    )

    overtime_hours = Column(
        Float,
        default=0
    )

    leave_days = Column(
        Integer,
        default=0
    )

    estimated_pay = Column(
        Float,
        default=0
    )

    payroll_status = Column(
        String(50),
        default="Pending"
    )
# ==========================
# VENDORS - MODULE 7
# ==========================

class Vendor(Base):
    __tablename__ = "vendors"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    vendor_name = Column(
        String(150),
        nullable=False
    )

    contact_person = Column(
        String(100)
    )

    contact_number = Column(
        String(20)
    )

    email = Column(
        String(100)
    )

    address = Column(
        Text
    )

    vendor_category = Column(
        String(100)
    )

    products_services = Column(
        Text
    )

    vendor_status = Column(
        String(50),
        default="Active"
    )
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
    allocated_quantity = Column(Integer, default=0)
    consumed_quantity = Column(Integer, default=0)
# ==========================
# MATERIAL REQUESTS - MODULE 5
# ==========================
class MaterialRequest(Base):
    __tablename__ = "material_requests"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    inventory_id = Column(
        Integer,
        ForeignKey("inventory.id"),
        nullable=False
    )

    requested_quantity = Column(Integer, nullable=False)

    required_date = Column(Date, nullable=False)

    purpose = Column(String(300))

    remarks = Column(Text)

    status = Column(
        String(50),
        default="Pending"
    )

    requested_by = Column(String(150))
# ==========================
# MATERIAL ALLOCATIONS - MODULE 5
# ==========================
class MaterialAllocation(Base):
    __tablename__ = "material_allocations"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    inventory_id = Column(
        Integer,
        ForeignKey("inventory.id"),
        nullable=False
    )

    allocated_quantity = Column(
        Integer,
        nullable=False
    )

    allocation_date = Column(
        Date,
        nullable=False
    )

    work_activity = Column(
        String(200)
    )

    responsible_user = Column(
        String(150)
    )

    status = Column(
        String(50),
        default="Allocated"
    )
# ==========================
# STOCK MOVEMENTS - MODULE 5
# ==========================
class StockMovement(Base):
    __tablename__ = "stock_movements"

    id = Column(Integer, primary_key=True, index=True)

    inventory_id = Column(
        Integer,
        ForeignKey("inventory.id"),
        nullable=False
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    movement_type = Column(String(50), nullable=False)

    quantity = Column(Integer, nullable=False)

    movement_date = Column(Date, nullable=False)

    remarks = Column(Text)

    performed_by = Column(String(150))
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
# PROCUREMENT REQUEST - MODULE 7
# ==========================

class ProcurementRequest(Base):
    __tablename__ = "procurement_requests"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    requested_by = Column(
        String(150),
        nullable=False
    )

    item_name = Column(
        String(150),
        nullable=False
    )

    category = Column(String(100))

    requested_quantity = Column(
        Integer,
        nullable=False
    )

    required_date = Column(Date)

    purpose = Column(Text)

    priority = Column(
        String(50),
        default="Medium"
    )

    request_date = Column(Date)

    request_status = Column(
        String(50),
        default="Pending"
    )

    remarks = Column(Text)
class PurchaseOrder(Base):
    __tablename__ = "purchase_orders"

    id = Column(Integer, primary_key=True, index=True)

    procurement_request_id = Column(
        Integer,
        ForeignKey("procurement_requests.id"),
        nullable=False
    )

    vendor_id = Column(
        Integer,
        ForeignKey("vendors.id"),
        nullable=False
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    order_date = Column(Date)
    expected_delivery_date = Column(Date)

    quantity = Column(Integer, nullable=False)
    unit_price = Column(Float, nullable=False)
    total_amount = Column(Float, nullable=False)

    order_status = Column(
        String(50),
        default="Processing"
    )

    remarks = Column(Text)
# ==========================
# INVOICES - MODULE 7
# ==========================

class Invoice(Base):
    __tablename__ = "invoices"

    id = Column(Integer, primary_key=True, index=True)

    invoice_number = Column(
        String(100),
        nullable=False
    )

    vendor_id = Column(
        Integer,
        ForeignKey("vendors.id"),
        nullable=False
    )

    purchase_order_id = Column(
        Integer,
        ForeignKey("purchase_orders.id"),
        nullable=False
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    invoice_date = Column(Date)
    due_date = Column(Date)

    invoice_amount = Column(
        Float,
        nullable=False
    )

    payment_status = Column(
        String(50),
        default="Pending"
    )

    invoice_status = Column(
        String(50),
        default="Received"
    )

    remarks = Column(Text)
# ==========================
# NOTIFICATIONS
# ==========================
class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    project_id = Column(Integer, ForeignKey("projects.id"), nullable=True, index=True)

    type = Column(String(50), nullable=False, index=True)
    title = Column(String(150), nullable=False)
    message = Column(Text, nullable=False)

    is_read = Column(Boolean, default=False, index=True)
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    read_at = Column(DateTime, nullable=True)

    related_entity_type = Column(String(50), nullable=True, index=True)
    related_entity_id = Column(Integer, nullable=True, index=True)

    priority = Column(String(20), default="Medium")

    user = relationship("User", backref="notifications")
    project = relationship("Project", backref="notifications")


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
# ==========================
# BUDGET - MODULE 11
# ==========================

class Budget(Base):
    __tablename__ = "budgets"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    total_budget = Column(Float, nullable=False)

    labor_budget = Column(Float, default=0)
    material_budget = Column(Float, default=0)
    equipment_budget = Column(Float, default=0)
    transportation_budget = Column(Float, default=0)
    maintenance_budget = Column(Float, default=0)
    administrative_budget = Column(Float, default=0)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )
# ==========================
# COST ESTIMATION - MODULE 11
# ==========================

class CostEstimate(Base):
    __tablename__ = "cost_estimates"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    category = Column(
        String(100),
        nullable=False
    )

    description = Column(Text)

    estimated_amount = Column(
        Float,
        nullable=False
    )

    estimate_date = Column(
        Date,
        default=datetime.utcnow
    )

    status = Column(
        String(50),
        default="Estimated"
    )
# ==========================
# EXPENSE TRACKING - MODULE 11
# ==========================

class Expense(Base):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    category = Column(
        String(100),
        nullable=False
    )

    description = Column(Text)

    amount = Column(
        Float,
        nullable=False
    )

    expense_date = Column(
        Date,
        nullable=False
    )

    recorded_by = Column(String(150))

    status = Column(
        String(50),
        default="Recorded"
    )