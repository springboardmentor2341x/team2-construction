import unittest
import datetime
from database.database import SessionLocal, engine
from database.base import Base
from models import (
    User, Role, Project, Contractor, Worker, WorkforceCategory,
    WorkerAssignment, Attendance, Shift, ShiftAssignment, PayrollRecord
)
from services import WorkforceService, AttendanceService, ShiftService, PayrollService, WorkforceAnalyticsService
from main import startup_event

class TestModule6Workforce(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        Base.metadata.create_all(bind=engine)
        startup_event()

    def setUp(self):
        self.db = SessionLocal()
        self.wf_service = WorkforceService()
        self.att_service = AttendanceService()
        self.shift_service = ShiftService()
        self.pay_service = PayrollService()
        self.analytics_service = WorkforceAnalyticsService()

    def tearDown(self):
        self.db.close()

    def test_01_categories_and_worker_registration(self):
        cats = self.wf_service.get_categories(self.db)
        self.assertGreater(len(cats), 0)

        # Test duplicate Worker ID check
        worker_data = {
            "workerId": "W-999_TEST",
            "name": "Test Worker Alpha",
            "contactInfo": "+91-9999999999",
            "categoryId": "CAT-SKILLED",
            "skillWorkType": "Crane Operator",
            "payRate": 750.0
        }
        w = self.wf_service.create_worker(self.db, worker_data)
        self.assertIsNotNone(w.id)
        self.assertEqual(w.worker_id, "W-999_TEST")

        # Duplicate workerId attempt should fail
        with self.assertRaises(Exception):
            self.wf_service.create_worker(self.db, worker_data)

    def test_02_attendance_working_hours_autocalculation(self):
        w = self.db.query(Worker).filter(Worker.worker_id == "W-999_TEST").first()
        self.assertIsNotNone(w)

        # Log attendance with checkIn 08:00 AM and checkOut 05:00 PM (9.0 hours)
        att_data = {
            "workerId": w.id,
            "date": "2026-08-22",
            "status": "Present",
            "checkIn": "08:00 AM",
            "checkOut": "05:00 PM"
        }
        rec = self.att_service.log_attendance(self.db, att_data)
        self.assertEqual(rec.status, "Present")
        self.assertEqual(rec.working_hours, 9.0)
        self.assertEqual(rec.overtime_hours, 1.0)

    def test_03_shift_scheduling_and_conflict_prevention(self):
        w = self.db.query(Worker).filter(Worker.worker_id == "W-999_TEST").first()
        proj = self.db.query(Project).filter(Project.id == "P-101").first()
        self.assertIsNotNone(proj)

        # Create Shift 1
        s1_data = {
            "name": "Morning Shift A",
            "startTime": "08:00 AM",
            "endTime": "04:00 PM",
            "projectId": proj.id,
            "shiftDate": "2026-08-23",
            "status": "Scheduled"
        }
        shift1 = self.shift_service.create_shift(self.db, s1_data)
        res1 = self.shift_service.assign_workers_to_shift(self.db, shift1.id, [w.id])
        self.assertEqual(res1["assigned"], 1)

        # Create Shift 2 on same date
        s2_data = {
            "name": "Morning Shift B",
            "startTime": "09:00 AM",
            "endTime": "05:00 PM",
            "projectId": proj.id,
            "shiftDate": "2026-08-23",
            "status": "Scheduled"
        }
        shift2 = self.shift_service.create_shift(self.db, s2_data)
        res2 = self.shift_service.assign_workers_to_shift(self.db, shift2.id, [w.id])

        # Overlapping shift assignment should record conflict
        self.assertGreater(len(res2["conflicts"]), 0)

    def test_04_payroll_estimation(self):
        w = self.db.query(Worker).filter(Worker.worker_id == "W-999_TEST").first()
        # Generate payroll for August 2026
        pay_data = {
            "workerId": w.id,
            "monthYear": "2026-08",
            "payRate": 750.0
        }
        pay_rec = self.pay_service.generate_or_update_payroll(self.db, pay_data)
        self.assertIsNotNone(pay_rec.estimated_pay)
        self.assertGreater(pay_rec.estimated_pay, 0.0)

    def test_05_workforce_analytics_summary(self):
        summary = self.analytics_service.get_summary(self.db, "admin", None)
        self.assertGreaterEqual(summary["totalWorkers"], 1)
        self.assertIn("categoryBreakdown", summary)

if __name__ == "__main__":
    unittest.main()
