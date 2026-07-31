from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from database.database import engine, SessionLocal
from database.base import Base
from middleware import global_exception_handler

# Import all API routers
from app.api.auth import router as auth_router
from app.api.users import router as users_router
from app.api.roles import router as roles_router
from app.api.projects import router as projects_router
from app.api.attendance import router as attendance_router
from app.api.workers import router as workers_router
from app.api.contractors import router as contractors_router
from app.api.site_engineers import router as site_engineers_router
from app.api.project_managers import router as project_managers_router
from app.api.clients import router as clients_router
from app.api.materials import router as materials_router
from app.api.reports import router as reports_router
from app.api.notifications import router as notifications_router
from app.api.dashboard import router as dashboard_router
from app.api.payments import router as payments_router

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

# Include API routers under prefix
app.include_router(auth_router, prefix=f"{settings.API_STR}/auth", tags=["Authentication"])
app.include_router(users_router, prefix=f"{settings.API_STR}/users", tags=["Users"])
app.include_router(roles_router, prefix=f"{settings.API_STR}/roles", tags=["Roles"])
app.include_router(projects_router, prefix=f"{settings.API_STR}/projects", tags=["Projects"])
app.include_router(attendance_router, prefix=f"{settings.API_STR}/attendance", tags=["Attendance"])
app.include_router(materials_router, prefix=f"{settings.API_STR}/materials", tags=["Materials"])
app.include_router(reports_router, prefix=f"{settings.API_STR}/reports", tags=["Reports"])
app.include_router(notifications_router, prefix=f"{settings.API_STR}/notifications", tags=["Notifications"])
app.include_router(dashboard_router, prefix=f"{settings.API_STR}/dashboard", tags=["Dashboard"])
app.include_router(payments_router, prefix=f"{settings.API_STR}/payments", tags=["Payments"])

# Empty placeholder routers
app.include_router(workers_router, prefix=f"{settings.API_STR}/workers", tags=["Workers Placeholder"])
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
        from models import Role, User, Project, WorkPackage, Material, MaterialRequest, DailyReport, MaterialUsed, SitePhoto, IssueReport, WorkerPayslip, FeedbackMessage, ProjectDocument, Contractor, Worker, SiteEngineer
        from core.security import get_password_hash
        import datetime
        import uuid
        
        # Check if already seeded
        if db.query(Role).count() > 0:
            print("Database already seeded.")
            return

        print("Seeding database tables with reference project logs...")
        
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
        
        worker = Worker(id="w1", user_id="u5", role="Electrician", status="Active", assigned_project_id="P-101")
        db.add(worker)
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

        # Materials
        mats = [
            Material(id="M-01", name="Portland Cement (50kg)", unit="Bags", in_stock=1250, reorder_level=300, cost_per_unit=14.50),
            Material(id="M-02", name="Deformed Steel Rebar #4 (12m)", unit="Tons", in_stock=45, reorder_level=10, cost_per_unit=780.00),
            Material(id="M-03", name="Ready-Mix Concrete M30", unit="m³", in_stock=350, reorder_level=100, cost_per_unit=95.00),
            Material(id="M-04", name="Electrical PVC Conduit 25mm", unit="Meters", in_stock=4500, reorder_level=1000, cost_per_unit=1.20)
        ]
        db.add_all(mats)
        db.flush()

        # Material Requests
        reqs = [
            MaterialRequest(id="REQ-001", project_id="P-101", material_id="M-01", quantity=200, requested_by_id="u4", status="Approved", request_date=datetime.datetime.utcnow()),
            MaterialRequest(id="REQ-002", project_id="P-101", material_id="M-02", quantity=5, requested_by_id="u4", status="Pending", request_date=datetime.datetime.utcnow())
        ]
        db.add_all(reqs)

        # Daily Reports
        rep = DailyReport(id="LOG-301", project_id="P-101", date=datetime.datetime(2026, 7, 22), work_done="Poured foundation core columns.", weather="Sunny 28C", site_engineer_id="u3")
        db.add(rep)
        db.flush()
        db.add(MaterialUsed(id="mu1", daily_report_id=rep.id, material_id="M-01", quantity=45))

        # Photos & Issues & Payslips & Feedback
        db.add(SitePhoto(id="PH-1", project_id="P-101", url="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=500", caption="Framing status", uploaded_by_id="u3"))
        db.add(IssueReport(id="ISS-01", project_id="P-101", title="Leakage basement Retaining wall", description="Concrete waterproofing injection required.", severity="High", status="Open", reported_by_id="u3"))
        db.add(WorkerPayslip(id="PAY-001", worker_id="w1", month="June 2026", basic_salary=3200, overtime_pay=450, deductions=280, net_pay=3370, status="Paid", payment_date=datetime.datetime.utcnow()))
        db.add(FeedbackMessage(id="FB-01", project_id="P-101", client_name="Abhishek S", rating=4, message="Progress is great!", date=datetime.datetime.utcnow()))
        db.add(ProjectDocument(id="DOC-01", project_id="P-101", name="Framing_Blueprints.pdf", size="14.2 MB", type="pdf", uploaded_by="Shradha S"))
        
        db.commit()
        print("Database seeded successfully with SQLAlchemy models!")
    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
    finally:
        db.close()

 