import datetime
import io
import pandas as pd
from fpdf import FPDF
from sqlalchemy.orm import Session
from fastapi import HTTPException
from models import (
    Project, PayrollRecord, ProcurementInvoice, ResourceUtilization, ExpenseRecord,
    DailyProgressReport, Milestone, DelayRecord, SiteActivityLog,
    WorkerAssignment, Worker, Attendance, ResourceAllocation, Resource,
    MaterialRequest, Material
)

class PDFReport(FPDF):
    def __init__(self, title, project_name, period):
        super().__init__()
        self.report_title = title
        self.project_name = project_name
        self.period = period
        self.set_auto_page_break(auto=True, margin=15)
        
    def header(self):
        self.set_font("helvetica", "B", 15)
        self.cell(0, 10, "BuildTrack - Reports & Documentation", ln=True, align="C")
        self.set_font("helvetica", "B", 12)
        self.cell(0, 10, self.report_title, ln=True, align="C")
        self.set_font("helvetica", "", 10)
        self.cell(0, 8, f"Project: {self.project_name}", ln=True, align="C")
        self.cell(0, 8, f"Period: {self.period}", ln=True, align="C")
        self.ln(10)

    def footer(self):
        self.set_y(-15)
        self.set_font("helvetica", "I", 8)
        self.cell(0, 10, f"Generated on {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')} - Page {self.page_no()}", align="C")

class ReportService:
    def verify_project_access(self, db: Session, user: dict, project_id: str):
        project = db.query(Project).filter(Project.id == project_id).first()
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        
        role = user.get("role")
        if role == "Project Manager" and project.manager_id != user.get("sub"):
            raise HTTPException(status_code=403, detail="Not authorized to access this project's reports")
        return project

    def get_budget_report(self, db: Session, project: Project, start_date: str, end_date: str):
        from models import CostEstimate
        labor_costs = sum(r.estimated_pay for r in db.query(PayrollRecord).filter(PayrollRecord.project_id == project.id, PayrollRecord.status == "Approved").all() if r.estimated_pay)
        material_costs = sum(i.invoice_amount for i in db.query(ProcurementInvoice).filter(ProcurementInvoice.project_id == project.id, ProcurementInvoice.invoice_status == "Approved").all() if i.invoice_amount)
        eq_costs = 0
        for u in db.query(ResourceUtilization).filter(ResourceUtilization.project_id == project.id).all():
            if u.resource and hasattr(u.resource, 'hourly_cost') and u.resource.hourly_cost:
                eq_costs += (u.hours_used * u.resource.hourly_cost)
        other_costs = sum(e.amount for e in db.query(ExpenseRecord).filter(ExpenseRecord.project_id == project.id, ExpenseRecord.status == "Approved").all() if e.amount)
        
        total_estimated = sum(c.estimated_amount for c in db.query(CostEstimate).filter(CostEstimate.project_id == project.id).all() if c.estimated_amount)
        
        total_spent = labor_costs + material_costs + eq_costs + other_costs
        planned_budget = project.budget

        return {
            "summary": {
                "total_budget": planned_budget,
                "total_spent": total_spent,
                "total_estimated": total_estimated,
                "remaining_budget": planned_budget - total_spent,
                "utilization": int((total_spent / planned_budget) * 100) if planned_budget > 0 else 0
            },
            "data": [
                {"category": "Labor (Payroll)", "actual": labor_costs},
                {"category": "Materials (Procurement)", "actual": material_costs},
                {"category": "Equipment (Resources)", "actual": eq_costs},
                {"category": "Other Expenses", "actual": other_costs},
                {"category": "Estimated Cost", "actual": total_estimated}
            ]
        }

    def get_progress_report(self, db: Session, project: Project, start_date: str, end_date: str):
        milestones = db.query(Milestone).filter(Milestone.project_id == project.id).all()
        delays = db.query(DelayRecord).filter(DelayRecord.project_id == project.id).all()
        
        milestone_data = [
            {"title": m.title, "status": m.status, "completion_percentage": m.completion_percentage, "start": str(m.start_date), "end": str(m.end_date)}
            for m in milestones
        ]
        
        delay_data = [
            {"reason": d.reason, "category": d.category, "severity": d.severity, "status": d.status}
            for d in delays
        ]

        return {
            "summary": {
                "overall_progress": project.progress,
                "total_milestones": len(milestones),
                "completed_milestones": sum(1 for m in milestones if m.status == "Completed"),
                "active_delays": sum(1 for d in delays if d.status == "Open")
            },
            "data": {
                "milestones": milestone_data,
                "delays": delay_data
            }
        }
        
    def get_report_data(self, db: Session, user: dict, report_type: str, project_id: str, start_date: str, end_date: str):
        project = self.verify_project_access(db, user, project_id)
        period_str = f"{start_date or 'Beginning'} to {end_date or 'Present'}"

        if report_type == "budget":
            report_data = self.get_budget_report(db, project, start_date, end_date)
            report_title = "Budget & Cost Report"
        elif report_type == "progress":
            report_data = self.get_progress_report(db, project, start_date, end_date)
            report_title = "Project Progress Report"
        else:
            raise HTTPException(status_code=400, detail="Unsupported report type")

        return {
            "report_type": report_type,
            "project": {"id": project.id, "name": project.name},
            "generated_at": datetime.datetime.utcnow().isoformat(),
            "period": period_str,
            "title": report_title,
            "summary": report_data.get("summary", {}),
            "data": report_data.get("data", [])
        }

    def generate_pdf(self, report_payload: dict) -> bytes:
        pdf = PDFReport(report_payload["title"], report_payload["project"]["name"], report_payload["period"])
        pdf.add_page()
        
        pdf.set_font("helvetica", "B", 12)
        pdf.cell(0, 10, "Executive Summary", ln=True)
        pdf.set_font("helvetica", "", 10)
        
        summary = report_payload.get("summary", {})
        for key, value in summary.items():
            formatted_key = key.replace("_", " ").title()
            if isinstance(value, float) or (isinstance(value, int) and value > 1000):
                formatted_val = f"${value:,.2f}" if "budget" in key or "spent" in key else str(value)
            else:
                formatted_val = str(value)
            pdf.cell(0, 8, f"{formatted_key}: {formatted_val}", ln=True)
            
        pdf.ln(5)
        
        pdf.set_font("helvetica", "B", 12)
        pdf.cell(0, 10, "Detailed Data", ln=True)
        pdf.set_font("helvetica", "", 10)
        
        data = report_payload.get("data")
        if isinstance(data, list) and len(data) > 0 and isinstance(data[0], dict):
            headers = list(data[0].keys())
            col_width = pdf.epw / len(headers)
            pdf.set_font("helvetica", "B", 10)
            for header in headers:
                pdf.cell(col_width, 10, header.replace("_", " ").title(), border=1, align="C")
            pdf.ln(10)
            
            pdf.set_font("helvetica", "", 10)
            for row in data:
                for key in headers:
                    val = str(row.get(key, ""))
                    pdf.cell(col_width, 10, val[:25], border=1, align="C")
                pdf.ln(10)
                
        elif isinstance(data, dict):
            for section, items in data.items():
                pdf.set_font("helvetica", "B", 11)
                pdf.cell(0, 10, section.title(), ln=True)
                pdf.set_font("helvetica", "", 10)
                if items and isinstance(items, list) and isinstance(items[0], dict):
                    headers = list(items[0].keys())
                    col_width = pdf.epw / len(headers) if headers else 0
                    if col_width > 0:
                        pdf.set_font("helvetica", "B", 9)
                        for header in headers:
                            pdf.cell(col_width, 8, header.title(), border=1)
                        pdf.ln(8)
                        pdf.set_font("helvetica", "", 9)
                        for row in items:
                            for key in headers:
                                pdf.cell(col_width, 8, str(row.get(key, ""))[:20], border=1)
                            pdf.ln(8)
                pdf.ln(5)
                
        # fpdf2 bytearray output
        return bytearray(pdf.output())

    def generate_excel(self, report_payload: dict) -> bytes:
        output = io.BytesIO()
        with pd.ExcelWriter(output, engine='openpyxl') as writer:
            summary = report_payload.get("summary", {})
            df_summary = pd.DataFrame(list(summary.items()), columns=["Metric", "Value"])
            df_summary["Metric"] = df_summary["Metric"].str.replace("_", " ").str.title()
            df_summary.to_excel(writer, sheet_name="Summary", index=False)
            
            data = report_payload.get("data")
            if isinstance(data, list) and len(data) > 0 and isinstance(data[0], dict):
                df_data = pd.DataFrame(data)
                df_data.to_excel(writer, sheet_name="Detailed Data", index=False)
            elif isinstance(data, dict):
                for section, items in data.items():
                    if items and isinstance(items, list) and isinstance(items[0], dict):
                        df_section = pd.DataFrame(items)
                        df_section.to_excel(writer, sheet_name=section.title()[:31], index=False)
                        
        output.seek(0)
        return output.getvalue()
