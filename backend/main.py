from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from database.database import engine, SessionLocal
from database.base import Base
from middleware import global_exception_handler

from fastapi.staticfiles import StaticFiles
import os

# Import all API routers
from app.api.auth import router as auth_router
from app.api.users import router as users_router
from app.api.roles import router as roles_router
from app.api.projects import router as projects_router
from app.api.attendance import router as attendance_router
from app.api.workers import router as workers_router
from app.api.worker_assignments import router as worker_assignments_router
from app.api.shifts import router as shifts_router
from app.api.payroll import router as payroll_router
from app.api.workforce_analytics import router as workforce_analytics_router
from app.api.contractors import router as contractors_router
from app.api.site_engineers import router as site_engineers_router
from app.api.project_managers import router as project_managers_router
from app.api.clients import router as clients_router
from app.api.materials import router as materials_router
from app.api.reports import router as reports_router
from app.api.notifications import router as notifications_router
from app.api.dashboard import router as dashboard_router
from app.api.payments import router as payments_router
from app.api.progress import router as progress_router
from app.api.resources import router as resources_router
from app.api.procurement import router as procurement_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Enterprise Construction Project Management Backend",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Exception handlers
app.add_exception_handler(Exception, global_exception_handler)

# Static file serving for uploads
upload_dir = os.path.join(os.path.dirname(__file__), "uploads")
os.makedirs(upload_dir, exist_ok=True)
app.mount("/uploads", StaticFiles(directory=upload_dir), name="uploads")

# Include API routers under prefix
app.include_router(auth_router, prefix=f"{settings.API_STR}/auth", tags=["Authentication"])
app.include_router(users_router, prefix=f"{settings.API_STR}/users", tags=["Users"])
app.include_router(roles_router, prefix=f"{settings.API_STR}/roles", tags=["Roles"])
app.include_router(projects_router, prefix=f"{settings.API_STR}/projects", tags=["Projects"])
app.include_router(progress_router, prefix=f"{settings.API_STR}/progress", tags=["Progress Monitoring"])
app.include_router(resources_router, prefix=f"{settings.API_STR}", tags=["Resource Management"])
app.include_router(attendance_router, prefix=f"{settings.API_STR}/attendance", tags=["Attendance Management"])
app.include_router(workers_router, prefix=f"{settings.API_STR}/workers", tags=["Workforce Management"])
app.include_router(worker_assignments_router, prefix=f"{settings.API_STR}/worker-assignments", tags=["Workforce Allocations"])
app.include_router(shifts_router, prefix=f"{settings.API_STR}/shifts", tags=["Shift Management"])
app.include_router(payroll_router, prefix=f"{settings.API_STR}/payroll", tags=["Payroll Monitoring"])
app.include_router(workforce_analytics_router, prefix=f"{settings.API_STR}/workforce", tags=["Workforce Analytics"])
app.include_router(materials_router, prefix=f"{settings.API_STR}/materials", tags=["Materials"])
app.include_router(reports_router, prefix=f"{settings.API_STR}/reports", tags=["Reports"])
app.include_router(notifications_router, prefix=f"{settings.API_STR}/notifications", tags=["Notifications"])
app.include_router(dashboard_router, prefix=f"{settings.API_STR}/dashboard", tags=["Dashboard"])
app.include_router(payments_router, prefix=f"{settings.API_STR}/payments", tags=["Payments"])
app.include_router(procurement_router, prefix=f"{settings.API_STR}", tags=["Procurement Management"])

# Empty placeholder routers
app.include_router(contractors_router, prefix=f"{settings.API_STR}/contractors", tags=["Contractors Placeholder"])
app.include_router(site_engineers_router, prefix=f"{settings.API_STR}/site_engineers", tags=["Site Engineers Placeholder"])
app.include_router(project_managers_router, prefix=f"{settings.API_STR}/project_managers", tags=["Project Managers Placeholder"])
app.include_router(clients_router, prefix=f"{settings.API_STR}/clients", tags=["Clients Placeholder"])

@app.get("/health", tags=["System"])
def health_check():
    import datetime
    return {"status": "UP", "timestamp": datetime.datetime.utcnow().isoformat()}

# ==========================================
# DATABASE AUTO-CREATION & SEED LOGIC
# ==========================================
@app.on_event("startup")
def startup_event():
    print("Database initialization starting...")
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    try:
        from models import Role, User, Project, WorkPackage, Material, MaterialRequest, DailyReport, MaterialUsed, SitePhoto, IssueReport, WorkerPayslip, FeedbackMessage, ProjectDocument, Contractor, Worker, SiteEngineer, MaterialCategory, Inventory, MaterialAllocation, StockMovement
        from core.security import get_password_hash
        import datetime
        import uuid
        
        # Check if base tables are seeded
        if db.query(Role).count() == 0:
            print("Seeding base database tables...")
            
            # Roles
            roles = [
                Role(id="r1", name="admin", description="System Administrator"),
                Role(id="r2", name="project_manager", description="Project Manager"),
                Role(id="r3", name="site_engineer", description="Site Engineer"),
                Role(id="r4", name="contractor", description="Subcontractor Firm Lead"),
                Role(id="r5", name="worker", description="Site Laborer"),
                Role(id="r6", name="client", description="Project Sponsor Client")
            ]
            db.add_all(roles)
            db.flush()

            # Users (Password: password123)
            pwd = get_password_hash("password123")
            users = [
                User(id="u1", email="admin@buildtrack.com", password_hash=pwd, name="Usha Admin", role_id="r1", company="BuildTrack Corp", phone="+1 555-010-0000"),
                User(id="u2", email="pm@buildtrack.com", password_hash=pwd, name="Shradha S", role_id="r2", company="Apex Builders", phone="+1 555-010-0001"),
                User(id="u3", email="engineer@buildtrack.com", password_hash=pwd, name="Sathvik S", role_id="r3", company="Apex Builders", phone="+1 555-010-0002"),
                User(id="u4", email="contractor@buildtrack.com", password_hash=pwd, name="Gaurav K", role_id="r4", company="Vance Concrete Ltd", phone="+1 555-010-0003"),
                User(id="u5", email="worker@buildtrack.com", password_hash=pwd, name="Jyoti S", role_id="r5", company="Vance Concrete Ltd", phone="+1 555-010-0004"),
                User(id="u6", email="client@buildtrack.com", password_hash=pwd, name="Abhishek S", role_id="r6", company="Vanguard Realty", phone="+1 555-010-0005")
            ]
            db.add_all(users)
            db.flush()

            # Profiles
            db.add(Contractor(id="c1", user_id="u4", specialty="Foundation & Concrete Rigs", status="Active"))
            db.add(SiteEngineer(id="se1", user_id="u3", status="Active"))
            
            # Workforce Categories Seed
            from models import WorkforceCategory, WorkerAssignment, Shift, ShiftAssignment, PayrollRecord
            cats = [
                WorkforceCategory(id="CAT-ENG", name="Engineers", description="Site & Civil Engineers"),
                WorkforceCategory(id="CAT-SUP", name="Supervisors", description="Site Supervisors & Foremen"),
                WorkforceCategory(id="CAT-CON", name="Contractors", description="Specialist Subcontractors"),
                WorkforceCategory(id="CAT-SKILLED", name="Skilled Workers", description="Masons, Electricians, Operators, Welders"),
                WorkforceCategory(id="CAT-UNSKILLED", name="Unskilled Workers", description="General Site Helpers & Laborers"),
                WorkforceCategory(id="CAT-CONSULT", name="Consultants", description="Technical & Safety Advisors")
            ]
            db.add_all(cats)
            db.flush()

            # Seed Workers (With & Without User Logins)
            w1 = Worker(
                id="w1", worker_id="W-101", name="Jyoti S", contact_info="+1 555-010-0004",
                category_id="CAT-SKILLED", category_name="Skilled Workers", skill_work_type="Electrician",
                role="Electrician", contractor_id="c1", contractor_name="Gaurav K", assigned_project_id="P-101",
                user_id="u5", status="Active", pay_rate=650.0
            )
            w2 = Worker(
                id="w2", worker_id="W-102", name="Ramesh Kumar", contact_info="+91-9812345678",
                category_id="CAT-SKILLED", category_name="Skilled Workers", skill_work_type="Mason",
                role="Mason", contractor_id="c1", contractor_name="Gaurav K", assigned_project_id="P-101",
                status="Active", pay_rate=550.0
            )
            w3 = Worker(
                id="w3", worker_id="W-103", name="Priya Nair", contact_info="+91-9823456789",
                category_id="CAT-SKILLED", category_name="Skilled Workers", skill_work_type="Electrician",
                role="Electrician", contractor_id="c1", contractor_name="Gaurav K", assigned_project_id="P-102",
                status="Active", pay_rate=600.0
            )
            w4 = Worker(
                id="w4", worker_id="W-104", name="Suresh Patil", contact_info="+91-9834567890",
                category_id="CAT-SKILLED", category_name="Skilled Workers", skill_work_type="Plumber",
                role="Plumber", contractor_id="c1", contractor_name="Gaurav K", assigned_project_id="P-103",
                status="On Leave", pay_rate=500.0
            )
            w5 = Worker(
                id="w5", worker_id="W-105", name="Kavita Sharma", contact_info="+91-9845678901",
                category_id="CAT-SUP", category_name="Supervisors", skill_work_type="Site Supervisor",
                role="Site Supervisor", contractor_id="c1", contractor_name="Gaurav K", assigned_project_id="P-101",
                status="Active", pay_rate=800.0
            )
            db.add_all([w1, w2, w3, w4, w5])
            db.flush()

            # Projects
            projs = [
                Project(
                    id="P-101", name="Vanguard Heights Commercial Tower", location="450 Skyline Blvd, Metro City", client_name="Vanguard Realty",
                    status="In Progress", start_date=datetime.datetime(2026, 1, 10), end_date=datetime.datetime(2027, 12, 20),
                    budget=12500000.0, spent=4200000.0, progress=35, manager_id="u2",
                    image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600",
                    description="A 24-story mixed-use commercial space with underground parking, smart facility systems, and premium retail spaces."
                ),
                Project(
                    id="P-102", name="Riverfront Apartments Phase II", location="12 Marina Drive, South Quay", client_name="Vanguard Realty",
                    status="In Progress", start_date=datetime.datetime(2025, 6, 15), end_date=datetime.datetime(2026, 11, 30),
                    budget=8200000.0, spent=6900000.0, progress=82, manager_id="u2",
                    image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
                    description="Residential complex overlooking the Riverfront with 120 luxury apartments, green terraces, and a clubhouse facility."
                ),
                Project(
                    id="P-103", name="Metro Transit Station Expansion", location="Union Square Hub, City Center", client_name="City Transit Authority",
                    status="Delayed", start_date=datetime.datetime(2026, 3, 1), end_date=datetime.datetime(2027, 6, 15),
                    budget=15000000.0, spent=3100000.0, progress=18, manager_id="u2",
                    image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
                    description="Subway platform extension and security gate upgrades to support increased high-speed rail commuter capacities."
                ),
                Project(
                    id="P-104", name="Greenfield Eco-Resort Community", location="Highland Meadows Valley", client_name="Greenfield Hospitality",
                    status="Planning", start_date=datetime.datetime(2026, 9, 1), end_date=datetime.datetime(2028, 5, 15),
                    budget=5400000.0, spent=250000.0, progress=5, manager_id="u2",
                    image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600",
                    description="Sustainable tourism resort featuring 30 solar-powered luxury lodges, natural greywater gardens, and walking trails."
                )
            ]
            db.add_all(projs)
            db.flush()

            # Work Packages (Tasks)
            tasks = [
                WorkPackage(id="W-01", project_id="P-101", title="Foundation Excavation & Shoring", description="excavation bedrock", start_date=datetime.datetime(2026, 1, 15), end_date=datetime.datetime(2026, 3, 30), progress=100, status="Completed", assigned_to_id="u4"),
                WorkPackage(id="W-02", project_id="P-101", title="Structural Steel Framing (L1-L10)", description="structural frame erection", start_date=datetime.datetime(2026, 4, 1), end_date=datetime.datetime(2026, 10, 15), progress=55, status="In Progress", assigned_to_id="u4"),
                WorkPackage(id="W-03", project_id="P-101", title="Electrical Conduit Layout (L1-L5)", description="conduit layouts", start_date=datetime.datetime(2026, 7, 10), end_date=datetime.datetime(2026, 8, 25), progress=30, status="In Progress", assigned_to_id="u5")
            ]
            db.add_all(tasks)

            # Material Categories
            categories = [
                MaterialCategory(id="CAT-CEMENT", name="Cement", description="Cement and binders"),
                MaterialCategory(id="CAT-STEEL", name="Steel", description="Steel rebars, mesh, and structural shapes"),
                MaterialCategory(id="CAT-CONCRETE", name="Concrete", description="Ready-mix and precast concrete"),
                MaterialCategory(id="CAT-BRICKS", name="Bricks", description="Clay and concrete bricks/blocks"),
                MaterialCategory(id="CAT-SAND", name="Sand", description="Fine and coarse sand aggregate"),
                MaterialCategory(id="CAT-ELECTRICAL", name="Electrical Materials", description="Conduits, wires, boxes, and fittings"),
                MaterialCategory(id="CAT-PLUMBING", name="Plumbing Materials", description="Pipes, valves, and fixtures")
            ]
            db.add_all(categories)
            db.flush()

            # Materials
            # We set starting available/total stocks and keep in_stock/reorder_level for compatibility
            mats = [
                Material(
                    id="M-01", name="Portland Cement (50kg)", category_id="CAT-CEMENT", unit="Bags",
                    in_stock=1050.0, reorder_level=300.0, minimum_stock_level=300.0, cost_per_unit=14.50,
                    description="Standard general-purpose cement for concrete construction.", status="Active"
                ),
                Material(
                    id="M-02", name="Deformed Steel Rebar #4 (12m)", category_id="CAT-STEEL", unit="Tons",
                    in_stock=40.0, reorder_level=10.0, minimum_stock_level=10.0, cost_per_unit=780.00,
                    description="Grade 60 structural reinforcement steel rebars.", status="Active"
                ),
                Material(
                    id="M-03", name="Ready-Mix Concrete M30", category_id="CAT-CONCRETE", unit="m³",
                    in_stock=350.0, reorder_level=100.0, minimum_stock_level=100.0, cost_per_unit=95.00,
                    description="High-strength concrete mix for foundations and beams.", status="Active"
                ),
                Material(
                    id="M-04", name="Electrical PVC Conduit 25mm", category_id="CAT-ELECTRICAL", unit="Meters",
                    in_stock=4500.0, reorder_level=1000.0, minimum_stock_level=1000.0, cost_per_unit=1.20,
                    description="Heavy duty impact resistant PVC conduits for electrical cabling.", status="Active"
                )
            ]
            db.add_all(mats)
            db.flush()

            # Inventories matching materials starting quantities (accounting for seeded allocations and consumptions)
            inventories = [
                # M-01 Cement: 1250 received. 200 allocated. 40 consumed.
                # Total stock: 1250 - 40 = 1210.
                # Available stock: 1250 - 200 = 1050.
                # Allocated stock: 200 - 40 = 160.
                # Consumed stock: 40.
                Inventory(id="INV-01", material_id="M-01", total_stock=1210.0, available_stock=1050.0, allocated_stock=160.0, consumed_stock=40.0),
                
                # M-02 Steel: 45 received. 5 allocated. 3.5 consumed.
                # Total stock: 45 - 3.5 = 41.5.
                # Available stock: 45 - 5 = 40.0.
                # Allocated stock: 5 - 3.5 = 1.5.
                # Consumed stock: 3.5.
                Inventory(id="INV-02", material_id="M-02", total_stock=41.5, available_stock=40.0, allocated_stock=1.5, consumed_stock=3.5),
                
                # M-03 Concrete: 350 received. 0 allocated. 0 consumed.
                Inventory(id="INV-03", material_id="M-03", total_stock=350.0, available_stock=350.0, allocated_stock=0.0, consumed_stock=0.0),
                
                # M-04 Conduit: 4500 received. 0 allocated. 0 consumed.
                Inventory(id="INV-04", material_id="M-04", total_stock=4500.0, available_stock=4500.0, allocated_stock=0.0, consumed_stock=0.0)
            ]
            db.add_all(inventories)
            db.flush()

            # Seed Stock Movements
            movements = [
                # Initial receives
                StockMovement(id="SM-01", material_id="M-01", movement_type="Received", quantity=1250.0, previous_quantity=0.0, new_quantity=1250.0, performed_by_id="u1", remarks="Initial stock import"),
                StockMovement(id="SM-02", material_id="M-02", movement_type="Received", quantity=45.0, previous_quantity=0.0, new_quantity=45.0, performed_by_id="u1", remarks="Initial stock import"),
                StockMovement(id="SM-03", material_id="M-03", movement_type="Received", quantity=350.0, previous_quantity=0.0, new_quantity=350.0, performed_by_id="u1", remarks="Initial stock import"),
                StockMovement(id="SM-04", material_id="M-04", movement_type="Received", quantity=4500.0, previous_quantity=0.0, new_quantity=4500.0, performed_by_id="u1", remarks="Initial stock import"),

                # Allocations
                StockMovement(id="SM-05", material_id="M-01", project_id="P-101", movement_type="Allocated", quantity=200.0, previous_quantity=1250.0, new_quantity=1050.0, performed_by_id="u2", reference_id="ALC-001", remarks="Allocation for foundation casting request REQ-001"),
                StockMovement(id="SM-06", material_id="M-02", project_id="P-101", movement_type="Allocated", quantity=5.0, previous_quantity=45.0, new_quantity=40.0, performed_by_id="u2", reference_id="ALC-002", remarks="Allocation for columns request"),

                # Consumptions (seeding the historical consumption for Module 3 daily report)
                StockMovement(id="SM-07", material_id="M-01", project_id="P-101", movement_type="Consumed", quantity=40.0, previous_quantity=200.0, new_quantity=160.0, performed_by_id="u3", reference_id="DPR-1001", remarks="Consumed in daily progress report DPR-1001"),
                StockMovement(id="SM-08", material_id="M-02", project_id="P-101", movement_type="Consumed", quantity=3.5, previous_quantity=5.0, new_quantity=1.5, performed_by_id="u3", reference_id="DPR-1001", remarks="Consumed in daily progress report DPR-1001")
            ]
            db.add_all(movements)
            db.flush()

            # Material Requests
            reqs = [
                MaterialRequest(
                    id="REQ-001", project_id="P-101", material_id="M-01", quantity=200.0,
                    requested_by_id="u4", status="Approved", request_date=datetime.datetime.utcnow() - datetime.timedelta(days=3),
                    required_date=datetime.datetime.utcnow() - datetime.timedelta(days=1), work_activity="Foundation columns",
                    remarks="High strength portland cement for Level 1 concrete pour."
                ),
                MaterialRequest(
                    id="REQ-002", project_id="P-101", material_id="M-02", quantity=5.0,
                    requested_by_id="u4", status="Pending", request_date=datetime.datetime.utcnow() - datetime.timedelta(days=1),
                    required_date=datetime.datetime.utcnow() + datetime.timedelta(days=3), work_activity="Structural Framing reinforcement",
                    remarks="Steel reinforcement rebar deformed #4 size."
                )
            ]
            db.add_all(reqs)
            db.flush()

            # Allocations
            allocs = [
                MaterialAllocation(
                    id="ALC-001", project_id="P-101", material_id="M-01", quantity=200.0,
                    allocation_date=datetime.datetime.utcnow() - datetime.timedelta(days=2), work_activity="Foundation columns",
                    responsible_user_id="u3", material_request_id="REQ-001"
                ),
                MaterialAllocation(
                    id="ALC-002", project_id="P-101", material_id="M-02", quantity=5.0,
                    allocation_date=datetime.datetime.utcnow() - datetime.timedelta(days=1), work_activity="Structural Framing reinforcement",
                    responsible_user_id="u3", material_request_id=None
                )
            ]
            db.add_all(allocs)
            db.flush()

            # Photos & Issues & Payslips & Feedback
            db.add(SitePhoto(id="PH-1", project_id="P-101", url="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=500", caption="Framing status", uploaded_by_id="u3"))
            db.add(IssueReport(id="ISS-01", project_id="P-101", title="Leakage basement Retaining wall", description="Concrete waterproofing injection required.", severity="High", status="Open", reported_by_id="u3"))
            db.add(WorkerPayslip(id="PAY-001", worker_id="w1", month="June 2026", basic_salary=3200, overtime_pay=450, deductions=280, net_pay=3370, status="Paid", payment_date=datetime.datetime.utcnow()))
            db.add(FeedbackMessage(id="FB-01", project_id="P-101", client_name="Abhishek S", rating=4, message="Progress is great!", date=datetime.datetime.utcnow()))
            db.add(ProjectDocument(id="DOC-01", project_id="P-101", name="Framing_Blueprints.pdf", size="14.2 MB", type="pdf", uploaded_by="Shradha S"))
            db.commit()

        # Check and seed Module 3 tables
        from models import DailyProgressReport, DailyReportMaterial, Milestone, DelayRecord, SiteActivityLog
        if db.query(Milestone).count() == 0:
            print("Seeding Module 3 Milestones, Daily Reports, Delays, and Site Activities...")
            
            # 1. Planned Milestones for P-101 (Vanguard Heights)
            milestones = [
                Milestone(
                    id="MS-101", project_id="P-101", name="Foundation Completed",
                    planned_start_date=datetime.datetime(2026, 1, 15), planned_end_date=datetime.datetime(2026, 3, 30),
                    actual_completion_date=datetime.datetime(2026, 3, 28), progress_percentage=100, status="Completed",
                    related_activities="Excavation, piling, retaining walls, bedrock anchor drilling", order_index=1
                ),
                Milestone(
                    id="MS-102", project_id="P-101", name="Structural Work Completed",
                    planned_start_date=datetime.datetime(2026, 4, 1), planned_end_date=datetime.datetime(2026, 10, 15),
                    actual_completion_date=None, progress_percentage=55, status="In Progress",
                    related_activities="Steel columns L1-L10, reinforced concrete decks, shear walls", order_index=2
                ),
                Milestone(
                    id="MS-103", project_id="P-101", name="Electrical Work Completed",
                    planned_start_date=datetime.datetime(2026, 7, 1), planned_end_date=datetime.datetime(2026, 12, 15),
                    actual_completion_date=None, progress_percentage=30, status="In Progress",
                    related_activities="Conduit routing, primary feeder risers, transformer bays", order_index=3
                ),
                Milestone(
                    id="MS-104", project_id="P-101", name="Plumbing Completed",
                    planned_start_date=datetime.datetime(2026, 8, 1), planned_end_date=datetime.datetime(2027, 2, 28),
                    actual_completion_date=None, progress_percentage=10, status="Pending",
                    related_activities="Drainage stacks, water mains, pressure relief manifolds", order_index=4
                ),
                Milestone(
                    id="MS-105", project_id="P-101", name="Finishing Work Completed",
                    planned_start_date=datetime.datetime(2027, 3, 1), planned_end_date=datetime.datetime(2027, 9, 30),
                    actual_completion_date=None, progress_percentage=0, status="Pending",
                    related_activities="Drywall framing, acoustical ceilings, glass curtain walls, flooring", order_index=5
                ),
                Milestone(
                    id="MS-106", project_id="P-101", name="Inspection Completed",
                    planned_start_date=datetime.datetime(2027, 10, 1), planned_end_date=datetime.datetime(2027, 11, 15),
                    actual_completion_date=None, progress_percentage=0, status="Pending",
                    related_activities="City building inspector walkthrough, fire safety clearance, HVAC audit", order_index=6
                ),
                Milestone(
                    id="MS-107", project_id="P-101", name="Project Handover",
                    planned_start_date=datetime.datetime(2027, 11, 16), planned_end_date=datetime.datetime(2027, 12, 20),
                    actual_completion_date=None, progress_percentage=0, status="Pending",
                    related_activities="Client commissioning, punch list rectifications, key handover", order_index=7
                ),
                # Milestones for P-102
                Milestone(
                    id="MS-201", project_id="P-102", name="Foundation Completed",
                    planned_start_date=datetime.datetime(2025, 6, 15), planned_end_date=datetime.datetime(2025, 9, 30),
                    actual_completion_date=datetime.datetime(2025, 9, 25), progress_percentage=100, status="Completed",
                    related_activities="Raft foundation, water barriers", order_index=1
                ),
                Milestone(
                    id="MS-202", project_id="P-102", name="Structural Work Completed",
                    planned_start_date=datetime.datetime(2025, 10, 1), planned_end_date=datetime.datetime(2026, 4, 30),
                    actual_completion_date=datetime.datetime(2026, 4, 20), progress_percentage=100, status="Completed",
                    related_activities="Precast concrete slabs, column casting", order_index=2
                ),
                Milestone(
                    id="MS-203", project_id="P-102", name="Finishing Work Completed",
                    planned_start_date=datetime.datetime(2026, 5, 1), planned_end_date=datetime.datetime(2026, 10, 15),
                    actual_completion_date=None, progress_percentage=75, status="In Progress",
                    related_activities="Interior plastering, tiling, balustrades", order_index=3
                ),
                Milestone(
                    id="MS-204", project_id="P-102", name="Inspection & Handover",
                    planned_start_date=datetime.datetime(2026, 10, 16), planned_end_date=datetime.datetime(2026, 11, 30),
                    actual_completion_date=None, progress_percentage=20, status="Pending",
                    related_activities="Municipal compliance certificate", order_index=4
                )
            ]
            db.add_all(milestones)
            db.flush()

            # 2. Daily Progress Reports
            now = datetime.datetime.utcnow()
            dpr1 = DailyProgressReport(
                id="DPR-1001", project_id="P-101", report_date=now - datetime.timedelta(days=2),
                work_category="Structural", activity_performed="Erected Level 8 steel columns and welded lateral gusset plates.",
                percentage_work_completed=4.5, contractor_id="u4", contractor_name="Vance Concrete Ltd",
                workers_present=18, workers_absent=2, machinery_used="Tower Crane #1 (7.5 hrs), Mobile Crane (4 hrs)",
                weather_conditions="Sunny, 27°C", safety_observations="Full fall protection harness compliance observed on Level 8 deck.",
                quality_inspection_remarks="Ultrasonic weld testing passed for all 12 structural column joins.",
                progress_photograph="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=500",
                delay_encountered=False, site_engineer_id="u3",
                additional_comments="Structural steel erection on schedule for L8-L10 milestone."
            )
            db.add(dpr1)
            db.flush()
            db.add(DailyReportMaterial(id="drm1", daily_report_id=dpr1.id, material_id="M-02", material_name="Deformed Steel Rebar #4 (12m)", quantity=3.5, unit="Tons"))
            db.add(DailyReportMaterial(id="drm2", daily_report_id=dpr1.id, material_id="M-01", material_name="Portland Cement (50kg)", quantity=40.0, unit="Bags"))

            dpr2 = DailyProgressReport(
                id="DPR-1002", project_id="P-101", report_date=now - datetime.timedelta(days=1),
                work_category="Electrical", activity_performed="Installed L3 and L4 main junction boxes and pulled fire-rated conduit lines.",
                percentage_work_completed=3.0, contractor_id="u4", contractor_name="Vance Concrete Ltd",
                workers_present=14, workers_absent=1, machinery_used="Scissor Lift #2 (6 hrs)",
                weather_conditions="Partly Cloudy, 24°C", safety_observations="Lockout/tagout safety protocols verified on sub-station panel.",
                quality_inspection_remarks="Insulation resistance megger test showed >100 megaohms across all phases.",
                progress_photograph="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=500",
                delay_encountered=False, site_engineer_id="u3",
                additional_comments="Conduit layout completed smoothly."
            )
            db.add(dpr2)
            db.flush()
            db.add(DailyReportMaterial(id="drm3", daily_report_id=dpr2.id, material_id="M-04", material_name="Electrical PVC Conduit 25mm", quantity=350.0, unit="Meters"))

            dpr3 = DailyProgressReport(
                id="DPR-1003", project_id="P-101", report_date=now,
                work_category="Concrete", activity_performed="Poured concrete slab section B on Level 7 with continuous vibration.",
                percentage_work_completed=5.0, contractor_id="u4", contractor_name="Vance Concrete Ltd",
                workers_present=20, workers_absent=0, machinery_used="Concrete Pump Truck (5 hrs), Ready-Mix Agitators (6 loads)",
                weather_conditions="Sunny, 29°C", safety_observations="Adequate hydration breaks and hearing protection provided near concrete pump.",
                quality_inspection_remarks="Slump test measured 110mm, well within specified tolerance.",
                progress_photograph="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=500",
                delay_encountered=True, delay_reason="Material delivery delay",
                additional_comments="Ready-mix transit was delayed by 45 minutes due to highway traffic.",
                site_engineer_id="u3"
            )
            db.add(dpr3)
            db.flush()
            db.add(DailyReportMaterial(id="drm4", daily_report_id=dpr3.id, material_id="M-03", material_name="Ready-Mix Concrete M30", quantity=48.0, unit="m³"))

            # 3. Delays
            delays = [
                DelayRecord(
                    id="DEL-101", project_id="P-101", date=now - datetime.timedelta(days=5),
                    affected_activity="Basement Retaining Wall Waterproofing",
                    delay_reason="Heavy rainfall", delay_duration="2 days", impact_on_project="Medium",
                    additional_remarks="Unseasonal downpour flooded excavation pit sump. Water pumping completed.",
                    recorded_by_id="u3", status="Resolved"
                ),
                DelayRecord(
                    id="DEL-102", project_id="P-101", date=now,
                    affected_activity="Level 7 Concrete Pouring",
                    delay_reason="Material delivery delay", delay_duration="45 mins", impact_on_project="Low",
                    additional_remarks="Ready-mix transit truck arrived late due to highway congestion.",
                    recorded_by_id="u3", status="Active"
                ),
                DelayRecord(
                    id="DEL-103", project_id="P-103", date=now - datetime.timedelta(days=10),
                    affected_activity="Platform Track Demolition",
                    delay_reason="Government approval", delay_duration="2 weeks", impact_on_project="High",
                    additional_remarks="Awaiting municipal heritage transit clearance certificate.",
                    recorded_by_id="u3", status="Active"
                )
            ]
            db.add_all(delays)

            # 4. Site Activity Logs
            activity_logs = [
                SiteActivityLog(
                    id="ACT-101", project_id="P-101", date=now - datetime.timedelta(days=2),
                    time="08:30", activity_type="Safety training",
                    description="Conducted mandatory Tool Box Talk on working at heights and harness inspection.",
                    responsible_person="Sathvik S (Site Engineer)", logged_by_id="u3"
                ),
                SiteActivityLog(
                    id="ACT-102", project_id="P-101", date=now - datetime.timedelta(days=1),
                    time="11:15", activity_type="Material arrival",
                    description="Received shipment of 20 metric tons deformed steel rebar. Mill test certificates verified.",
                    responsible_person="Gaurav K (Contractor Lead)", logged_by_id="u3"
                ),
                SiteActivityLog(
                    id="ACT-103", project_id="P-101", date=now - datetime.timedelta(days=1),
                    time="14:00", activity_type="Machinery maintenance",
                    description="Tower Crane #1 scheduled 100-hour hydraulic oil check and hoist rope lubrication.",
                    responsible_person="Equipment Service Tech", logged_by_id="u3"
                ),
                SiteActivityLog(
                    id="ACT-104", project_id="P-101", date=now,
                    time="10:00", activity_type="Client visit",
                    description="Vanguard Realty representative inspected Level 5 & 6 structural framing with PM.",
                    responsible_person="Shradha S (Project Manager)", logged_by_id="u3"
                ),
                SiteActivityLog(
                    id="ACT-105", project_id="P-101", date=now,
                    time="15:30", activity_type="Quality audit",
                    description="Third-party laboratory took concrete test cubes for 7-day and 28-day compressive strength testing.",
                    responsible_person="GeoTech Labs Inspector", logged_by_id="u3"
                )
            ]
            db.add_all(activity_logs)
            db.commit()

            # Recalculate progress for all projects
            from services import ProgressService
            ps = ProgressService()
            for p_id in ["P-101", "P-102", "P-103", "P-104"]:
                ps.recalculate_project_progress(db, p_id)

            print("Module 3 database tables initialized and seeded successfully!")

        # Seed Module 4 Resource Management System
        from models import ResourceCategory, Resource, ResourceAllocation, ResourceUtilization, MaintenanceRecord
        if db.query(ResourceCategory).count() == 0:
            print("Seeding Module 4 Categories, Equipment, Allocations, Utilizations, and Maintenance...")
            categories = [
                ResourceCategory(id="CAT-EXCAVATOR", name="Excavators", description="Hydraulic earthmoving and trenching equipment"),
                ResourceCategory(id="CAT-CRANE", name="Cranes", description="Tower cranes, crawler cranes, and rough terrain lifters"),
                ResourceCategory(id="CAT-MIXER", name="Concrete Mixers", description="Transit mixers, batching rigs, and mobile pumps"),
                ResourceCategory(id="CAT-TRUCK", name="Dump Trucks", description="Heavy haulers and tippers for earth and aggregate transport"),
                ResourceCategory(id="CAT-GENERATOR", name="Generators", description="Diesel generators and heavy auxiliary power plants"),
                ResourceCategory(id="CAT-SAFETY", name="Safety Equipment", description="Scaffolding harnesses, fall arresters, and testing gauges")
            ]
            db.add_all(categories)
            db.commit()

            resources = [
                Resource(
                    id="EQ-101", name="CAT 320 Hydraulic Excavator", category_id="CAT-EXCAVATOR",
                    quantity=1, current_location="Site A (Earthwork Zone)", current_project_id="P-101",
                    status="Allocated", responsible_person="Gaurav K (Lead Operator)",
                    model_number="CAT-320D3", serial_number="SN-CAT-9921",
                    purchase_date=datetime.datetime(2024, 3, 15), hourly_cost=85.0
                ),
                Resource(
                    id="EQ-102", name="Komatsu PC210 Crawler Excavator", category_id="CAT-EXCAVATOR",
                    quantity=1, current_location="Equipment Yard", current_project_id=None,
                    status="Available", responsible_person="Sathvik S (Site Engineer)",
                    model_number="PC210LC-11", serial_number="SN-KOM-4412",
                    purchase_date=datetime.datetime(2024, 6, 20), hourly_cost=75.0
                ),
                Resource(
                    id="EQ-103", name="Liebherr 280 EC-H Tower Crane", category_id="CAT-CRANE",
                    quantity=1, current_location="Vanguard Heights Commercial Tower", current_project_id="P-101",
                    status="Operating", responsible_person="Mahesh R (Crane Tech)",
                    model_number="280 EC-H 12", serial_number="SN-LBH-8831",
                    purchase_date=datetime.datetime(2023, 11, 10), hourly_cost=150.0
                ),
                Resource(
                    id="EQ-104", name="Terex RT 780 Rough Terrain Crane", category_id="CAT-CRANE",
                    quantity=1, current_location="Workshop", current_project_id=None,
                    status="Under Maintenance", responsible_person="Liebherr Technical Services",
                    model_number="RT 780-80T", serial_number="SN-TRX-1029",
                    purchase_date=datetime.datetime(2023, 8, 5), hourly_cost=120.0
                ),
                Resource(
                    id="EQ-105", name="Schwing Stetter M25 Transit Mixer", category_id="CAT-MIXER",
                    quantity=1, current_location="Site B (Batching Area)", current_project_id="P-101",
                    status="Allocated", responsible_person="Ramesh N (Mixer Operator)",
                    model_number="M25-7m3", serial_number="SN-SS-5519",
                    purchase_date=datetime.datetime(2024, 1, 18), hourly_cost=65.0
                ),
                Resource(
                    id="EQ-106", name="Volvo FMX 460 Dump Truck 20m³", category_id="CAT-TRUCK",
                    quantity=1, current_location="Muck Haul Route", current_project_id="P-101",
                    status="Operating", responsible_person="Dinesh P (Haulage Driver)",
                    model_number="FMX-460-8x4", serial_number="SN-VLV-3391",
                    purchase_date=datetime.datetime(2024, 4, 12), hourly_cost=60.0
                ),
                Resource(
                    id="EQ-107", name="Cummins 250kVA Silent Diesel Generator", category_id="CAT-GENERATOR",
                    quantity=1, current_location="Substation Deck", current_project_id="P-101",
                    status="Operating", responsible_person="Praveen T (Electrical Foreman)",
                    model_number="C250D5e", serial_number="SN-CUM-7721",
                    purchase_date=datetime.datetime(2023, 5, 22), hourly_cost=40.0
                ),
                Resource(
                    id="EQ-108", name="Kroll Giant Luffing Jib Crane", category_id="CAT-CRANE",
                    quantity=1, current_location="Riverfront Residential Enclave", current_project_id="P-102",
                    status="Allocated", responsible_person="Shradha S (Project Manager)",
                    model_number="K-10000", serial_number="SN-KRL-1102",
                    purchase_date=datetime.datetime(2023, 9, 30), hourly_cost=180.0
                ),
                Resource(
                    id="EQ-109", name="Atlas Copco QAS 150 Generator", category_id="CAT-GENERATOR",
                    quantity=1, current_location="Equipment Yard", current_project_id=None,
                    status="Available", responsible_person="Sathvik S (Site Engineer)",
                    model_number="QAS-150", serial_number="SN-ATC-9011",
                    purchase_date=datetime.datetime(2024, 2, 14), hourly_cost=35.0
                ),
                Resource(
                    id="EQ-110", name="Miller Fall Protection Lifeline Rigs", category_id="CAT-SAFETY",
                    quantity=12, current_location="Safety Storage Locker", current_project_id="P-101",
                    status="Available", responsible_person="Sathvik S (Site Engineer)",
                    model_number="FP-RIG-50m", serial_number="SN-MLR-0045",
                    purchase_date=datetime.datetime(2025, 1, 10), hourly_cost=10.0
                )
            ]
            db.add_all(resources)
            db.commit()

            # Seed Allocations
            allocations = [
                ResourceAllocation(
                    id="ALC-101", resource_id="EQ-101", project_id="P-101",
                    allocation_date=datetime.datetime(2026, 8, 10), expected_return_date=datetime.datetime(2026, 8, 28),
                    quantity=1, responsible_person="Gaurav K (Lead Operator)", allocated_by_id="u2",
                    status="Allocated", notes="Foundation trenching and basement perimeter clearing."
                ),
                ResourceAllocation(
                    id="ALC-102", resource_id="EQ-103", project_id="P-101",
                    allocation_date=datetime.datetime(2026, 8, 1), expected_return_date=datetime.datetime(2026, 11, 30),
                    quantity=1, responsible_person="Mahesh R (Crane Tech)", allocated_by_id="u2",
                    status="Allocated", notes="Main tower heavy structural steel member hoisting."
                ),
                ResourceAllocation(
                    id="ALC-103", resource_id="EQ-105", project_id="P-101",
                    allocation_date=datetime.datetime(2026, 8, 5), expected_return_date=datetime.datetime(2026, 8, 25),
                    quantity=1, responsible_person="Ramesh N (Mixer Operator)", allocated_by_id="u2",
                    status="Allocated", notes="Level 7 and 8 structural slab casting shifts."
                ),
                ResourceAllocation(
                    id="ALC-104", resource_id="EQ-106", project_id="P-101",
                    allocation_date=datetime.datetime(2026, 8, 8), expected_return_date=datetime.datetime(2026, 8, 20),
                    quantity=1, responsible_person="Dinesh P (Haulage Driver)", allocated_by_id="u2",
                    status="Allocated", notes="Debris and muck disposal haulage."
                ),
                ResourceAllocation(
                    id="ALC-105", resource_id="EQ-108", project_id="P-102",
                    allocation_date=datetime.datetime(2026, 8, 1), expected_return_date=datetime.datetime(2026, 12, 31),
                    quantity=1, responsible_person="Shradha S (Project Manager)", allocated_by_id="u2",
                    status="Allocated", notes="Tower A precast concrete panel placements."
                )
            ]
            db.add_all(allocations)
            db.commit()

            # Seed Utilizations
            utilizations = [
                ResourceUtilization(
                    id="UTL-101", resource_id="EQ-101", project_id="P-101",
                    usage_date=datetime.datetime(2026, 8, 10), operating_hours=6.5, idle_hours=1.5,
                    total_available_hours=8.0, utilization_percentage=81.25, daily_report_id="DPR-1001",
                    recorded_by_id="u3", remarks="Excavated footing pits with 1.5h pause for surveyor verification."
                ),
                ResourceUtilization(
                    id="UTL-102", resource_id="EQ-103", project_id="P-101",
                    usage_date=datetime.datetime(2026, 8, 10), operating_hours=7.0, idle_hours=1.0,
                    total_available_hours=8.0, utilization_percentage=87.5, daily_report_id="DPR-1001",
                    recorded_by_id="u3", remarks="Hoisted 12 lateral steel girders to Level 8 grid."
                ),
                ResourceUtilization(
                    id="UTL-103", resource_id="EQ-106", project_id="P-101",
                    usage_date=datetime.datetime(2026, 8, 11), operating_hours=5.5, idle_hours=2.5,
                    total_available_hours=8.0, utilization_percentage=68.75, daily_report_id="DPR-1003",
                    recorded_by_id="u3", remarks="Completed 8 haul trips to dumping yard."
                ),
                ResourceUtilization(
                    id="UTL-104", resource_id="EQ-107", project_id="P-101",
                    usage_date=datetime.datetime(2026, 8, 11), operating_hours=8.0, idle_hours=0.0,
                    total_available_hours=8.0, utilization_percentage=100.0, daily_report_id="DPR-1002",
                    recorded_by_id="u3", remarks="Full shift continuous power supply for electrical installation."
                )
            ]
            db.add_all(utilizations)
            db.commit()

            # Seed Maintenance Records
            maintenances = [
                MaintenanceRecord(
                    id="MNT-101", resource_id="EQ-104",
                    last_maintenance_date=datetime.datetime(2026, 7, 15), next_maintenance_date=datetime.datetime(2026, 8, 15),
                    maintenance_type="Preventive", service_engineer="Liebherr Technical Services",
                    maintenance_cost=1200.0, status="In Progress",
                    remarks="Hydraulic pump seal replacement & high-pressure valve calibration."
                ),
                MaintenanceRecord(
                    id="MNT-102", resource_id="EQ-101",
                    last_maintenance_date=datetime.datetime(2026, 6, 10), next_maintenance_date=datetime.datetime(2026, 9, 10),
                    maintenance_type="Preventive", service_engineer="CAT Field Service Tech",
                    maintenance_cost=450.0, status="Scheduled",
                    remarks="500-hour engine lube oil, primary filter, and air cleaner replacement."
                ),
                MaintenanceRecord(
                    id="MNT-103", resource_id="EQ-103",
                    last_maintenance_date=datetime.datetime(2026, 7, 1), next_maintenance_date=datetime.datetime(2026, 8, 1),
                    maintenance_type="Inspection", service_engineer="Apex Safety Inspector",
                    maintenance_cost=600.0, status="Overdue",
                    remarks="Annual magnetic non-destructive wire rope and slewing gear bearing test."
                )
            ]
            db.add_all(maintenances)
            db.commit()

            print("Module 4 Resource Management initialized and seeded successfully!")

    except Exception as e:
        db.rollback()
        print(f"Error initializing/seeding database: {e}")
    finally:
        db.close()



 