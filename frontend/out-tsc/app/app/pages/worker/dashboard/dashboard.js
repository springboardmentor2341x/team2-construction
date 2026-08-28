import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { AuthService } from '../../../services/auth.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.id;
function WorkerDashboard_Conditional_23_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h4", 23);
    i0.ɵɵtext(1, "Shift In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 24);
    i0.ɵɵtext(3, "You clocked in today at ");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, ".");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 25);
    i0.ɵɵlistener("click", function WorkerDashboard_Conditional_23_Conditional_7_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleClock()); });
    i0.ɵɵelement(8, "i", 26);
    i0.ɵɵtext(9, " Clock Out Now ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.clockInTime());
} }
function WorkerDashboard_Conditional_23_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h4", 27);
    i0.ɵɵtext(1, "Ready to Start Shift?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 24);
    i0.ɵɵtext(3, "Please punch in below to record your check-in time and attendance.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 28);
    i0.ɵɵlistener("click", function WorkerDashboard_Conditional_23_Conditional_8_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleClock()); });
    i0.ɵɵelement(5, "i", 29);
    i0.ɵɵtext(6, " Clock In Now ");
    i0.ɵɵelementEnd();
} }
function WorkerDashboard_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "h5", 14);
    i0.ɵɵtext(3, "Shift Attendance Clock");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 15)(5, "div", 16);
    i0.ɵɵelement(6, "i", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, WorkerDashboard_Conditional_23_Conditional_7_Template, 10, 1)(8, WorkerDashboard_Conditional_23_Conditional_8_Template, 7, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 18)(10, "h6", 19);
    i0.ɵɵtext(11, "Attendance History (Current Month)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 20)(13, "div", 21)(14, "span");
    i0.ɵɵtext(15, "July 23, 2026");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 22);
    i0.ɵɵtext(17, "Checked In / Out (8h 15m)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 21)(19, "span");
    i0.ɵɵtext(20, "July 22, 2026");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 22);
    i0.ɵɵtext(22, "Checked In / Out (8h 00m)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 21)(24, "span");
    i0.ɵɵtext(25, "July 21, 2026");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "span", 22);
    i0.ɵɵtext(27, "Checked In / Out (8h 30m)");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r1.isClockedIn() ? 7 : 8);
} }
function WorkerDashboard_Conditional_24_For_6_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function WorkerDashboard_Conditional_24_For_6_Conditional_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const task_r5 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateTaskStatus(task_r5.id, "In Progress")); });
    i0.ɵɵtext(1, "Start Work");
    i0.ɵɵelementEnd();
} }
function WorkerDashboard_Conditional_24_For_6_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵtext(1, "Running...");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 40);
    i0.ɵɵlistener("click", function WorkerDashboard_Conditional_24_For_6_Conditional_10_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r6); const task_r5 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateTaskStatus(task_r5.id, "Completed")); });
    i0.ɵɵtext(3, "Complete");
    i0.ɵɵelementEnd();
} }
function WorkerDashboard_Conditional_24_For_6_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵelement(1, "i", 41);
    i0.ɵɵtext(2, "Finished");
    i0.ɵɵelementEnd();
} }
function WorkerDashboard_Conditional_24_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "div")(2, "h6", 2);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 33);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small", 34);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 35);
    i0.ɵɵconditionalCreate(9, WorkerDashboard_Conditional_24_For_6_Conditional_9_Template, 2, 0, "button", 36)(10, WorkerDashboard_Conditional_24_For_6_Conditional_10_Template, 4, 0)(11, WorkerDashboard_Conditional_24_For_6_Conditional_11_Template, 3, 0, "span", 37);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const task_r5 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(task_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r5.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" Timeline: ", task_r5.startDate, " \u2022 ", task_r5.endDate, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(task_r5.status === "Pending" ? 9 : task_r5.status === "In Progress" ? 10 : 11);
} }
function WorkerDashboard_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 30)(2, "h5", 19);
    i0.ɵɵtext(3, "Assigned Tasks Checklist");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 31);
    i0.ɵɵrepeaterCreate(5, WorkerDashboard_Conditional_24_For_6_Template, 12, 5, "div", 32, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.workerTasks());
} }
function WorkerDashboard_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 30)(2, "h5", 19);
    i0.ɵɵtext(3, "Log Daily Status Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 24);
    i0.ɵɵtext(5, "Submit a brief summary of structural tasks, cable paths, or concrete installations you completed during your shift.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "form", 42);
    i0.ɵɵlistener("ngSubmit", function WorkerDashboard_Conditional_25_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitStatusReport()); });
    i0.ɵɵelementStart(7, "div", 43)(8, "label", 44);
    i0.ɵɵtext(9, "Daily Work Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "textarea", 45);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkerDashboard_Conditional_25_Template_textarea_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.statusComment, $event) || (ctx_r1.statusComment = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 46);
    i0.ɵɵelement(12, "i", 47);
    i0.ɵɵtext(13, " File Daily Update ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.statusComment);
} }
function WorkerDashboard_Conditional_26_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 52);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 53);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td")(16, "span", 54);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const pay_r8 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pay_r8.month);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(5, 10, pay_r8.basicSalary));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(8, 12, pay_r8.overtimePay));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("-$", i0.ɵɵpipeBind1(11, 14, pay_r8.deductions));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(14, 16, pay_r8.netPay));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("bg-success", pay_r8.status === "Paid")("bg-warning", pay_r8.status === "Processing");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", pay_r8.status, " ");
} }
function WorkerDashboard_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 30)(2, "h5", 19);
    i0.ɵɵtext(3, "My Salary Payslips");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 48)(5, "table", 49)(6, "thead", 50)(7, "tr")(8, "th");
    i0.ɵɵtext(9, "Pay Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Basic Salary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Overtime Earnings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Deductions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Net Pay Out");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Payment Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "tbody");
    i0.ɵɵrepeaterCreate(21, WorkerDashboard_Conditional_26_For_22_Template, 18, 18, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(21);
    i0.ɵɵrepeater(ctx_r1.workerPayslips());
} }
function WorkerDashboard_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 30)(2, "h5", 19);
    i0.ɵɵtext(3, "Site Bulletins & Notices");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 20)(5, "div", 55)(6, "div", 56)(7, "span", 57);
    i0.ɵɵtext(8, "Safety Alert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small", 58);
    i0.ɵɵtext(10, "July 22, 2026");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "h6", 51);
    i0.ɵɵtext(12, "Required Hard Hat Area & Secure Tethering");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p", 59);
    i0.ɵɵtext(14, "Level 8 column work actively erecting steel beams. Hard hats and safety harness tethers are strictly mandatory on all upper platforms.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 55)(16, "div", 56)(17, "span", 60);
    i0.ɵɵtext(18, "Weather Notice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small", 58);
    i0.ɵɵtext(20, "July 20, 2026");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "h6", 51);
    i0.ɵɵtext(22, "High Temperature Warning - Hydration Stations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p", 59);
    i0.ɵɵtext(24, "Expected temperatures of 34\u00B0C. Electrolyte hydration packets and chilled water points are stocked on Level 3 and Level 6.");
    i0.ɵɵelementEnd()()()()();
} }
export class WorkerDashboard {
    projectService = inject(ProjectService);
    authService = inject(AuthService);
    route = inject(ActivatedRoute);
    queryParams = toSignal(this.route.queryParams);
    get activeModule() {
        return this.queryParams()?.['module'] || 'attendance';
    }
    // Clock In / Out simulation state
    isClockedIn = signal(false, ...(ngDevMode ? [{ debugName: "isClockedIn" }] : /* istanbul ignore next */ []));
    clockInTime = signal(null, ...(ngDevMode ? [{ debugName: "clockInTime" }] : /* istanbul ignore next */ []));
    // Form Fields - Daily Status Comment
    statusComment = '';
    // Filter tasks assigned to this worker (Jyoti S)
    workerName = 'Jyoti S';
    workerTasks = computed(() => this.projectService.workPackages().filter(wp => wp.assignedTo === this.workerName), ...(ngDevMode ? [{ debugName: "workerTasks" }] : /* istanbul ignore next */ []));
    // Filter payslips for this worker (Jyoti S's id is WF-01)
    workerPayslips = computed(() => this.projectService.payslips().filter(pay => pay.workerId === 'WF-01'), ...(ngDevMode ? [{ debugName: "workerPayslips" }] : /* istanbul ignore next */ []));
    toggleClock() {
        if (!this.isClockedIn()) {
            this.isClockedIn.set(true);
            const now = new Date();
            this.clockInTime.set(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            alert('Clocked In successfully! Your punch time has been logged.');
        }
        else {
            this.isClockedIn.set(false);
            this.clockInTime.set(null);
            alert('Clocked Out successfully! Your total hours have been calculated.');
        }
    }
    submitStatusReport() {
        if (!this.statusComment) {
            alert('Please specify your daily work status summary.');
            return;
        }
        // Simulate appending to the Daily Log
        this.projectService.addDailyLog({
            projectId: 'P-101',
            date: new Date().toISOString().split('T')[0],
            workDone: `Workforce Status Update [${this.workerName}]: ${this.statusComment}`,
            weather: 'Cloudy, 22°C',
            siteEngineer: 'Sathvik S',
            materialsUsed: []
        });
        this.statusComment = '';
        alert('Daily status update filed to Site Engineer!');
    }
    updateTaskStatus(wpId, status) {
        const progress = status === 'Completed' ? 100 : (status === 'In Progress' ? 50 : 0);
        this.projectService.updateWorkPackageStatus(wpId, progress, status);
        alert(`Task status updated to ${status}.`);
    }
    static ɵfac = function WorkerDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || WorkerDashboard)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WorkerDashboard, selectors: [["app-worker-dashboard"]], decls: 28, vars: 14, consts: [[1, "container-fluid", "p-0"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "text-dark", "mb-1"], [1, "text-muted", "mb-0"], [1, "btn", "d-flex", "align-items-center", "gap-2", "px-3", "py-2", "border", "rounded-pill", 3, "click"], [1, "bi", "bi-clock-fill"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-md-3"], ["title", "Clock Status", "icon", "bi-check-circle-fill", 3, "value", "colorType"], ["title", "Assigned Tasks", "icon", "bi-card-checklist", "colorType", "primary", 3, "value"], ["title", "Active Project Site", "value", "Vanguard Tower", "icon", "bi-building-fill", "colorType", "info"], ["title", "Net Pay (Current Period)", "value", "$3,500", "icon", "bi-receipt", "colorType", "warning", "subtitle", "Processing"], [1, "card", "border-0", "shadow-sm", "rounded-3"], [1, "card-body", "p-4", "text-center"], [1, "fw-bold", "text-dark", "text-start", "mb-4"], [1, "p-5", "border", "rounded-3", "bg-light", "d-flex", "flex-column", "align-items-center", "justify-content-center", "mx-auto", 2, "max-width", "500px"], [1, "rounded-circle", "bg-primary-subtle", "text-primary", "d-flex", "align-items-center", "justify-content-center", "mb-4", 2, "width", "80px", "height", "80px"], [1, "bi", "bi-person-check-fill", "fs-2"], [1, "mt-4", "text-start"], [1, "fw-bold", "text-dark", "mb-3"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "px-0", "py-2", "small", "bg-transparent"], [1, "badge", "bg-success-subtle", "text-success", "border", "border-success-subtle", "rounded-pill"], [1, "fw-bold", "text-success", "mb-2"], [1, "text-muted", "small"], [1, "btn", "btn-danger", "btn-lg", "px-4", "mt-3", 3, "click"], [1, "bi", "bi-box-arrow-left", "me-1"], [1, "fw-bold", "text-dark", "mb-2"], [1, "btn", "btn-success", "btn-lg", "px-5", "mt-3", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-1"], [1, "card-body", "p-4"], [1, "d-flex", "flex-column", "gap-3"], [1, "p-3", "border", "rounded-3", "bg-light", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-md-center", "gap-3"], [1, "text-muted", "small", "mb-2"], [1, "text-secondary", "d-block", 2, "font-size", "11px"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", "btn-sm", "px-3"], [1, "badge", "bg-success", "py-2", "px-3"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], ["disabled", "", 1, "btn", "btn-outline-primary", "btn-sm", "px-2"], [1, "btn", "btn-success", "btn-sm", "px-3", 3, "click"], [1, "bi", "bi-check-lg", "me-1"], [3, "ngSubmit"], [1, "form-group", "mb-3"], [1, "form-label", "fw-semibold", "small", "text-muted"], ["name", "comment", "required", "", "rows", "5", "placeholder", "Describe the structural work you did today...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "px-4", "py-2"], [1, "bi", "bi-send-fill", "me-1"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle"], [1, "table-light", "text-muted", "uppercase", "small"], [1, "fw-bold", "text-dark"], [1, "text-danger"], [1, "fw-bold", "text-success"], [1, "badge"], [1, "list-group-item", "px-0", "py-3", "bg-transparent"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "badge", "bg-danger"], [1, "text-muted"], [1, "text-muted", "small", "mb-0"], [1, "badge", "bg-info"]], template: function WorkerDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
            i0.ɵɵtext(4, "Worker Access Terminal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementStart(7, "strong");
            i0.ɵɵtext(8, "Vance Concrete Ltd");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "div")(10, "button", 4);
            i0.ɵɵlistener("click", function WorkerDashboard_Template_button_click_10_listener() { return ctx.toggleClock(); });
            i0.ɵɵelement(11, "i", 5);
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(14, "div", 6)(15, "div", 7);
            i0.ɵɵelement(16, "app-dashboard-card", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 7);
            i0.ɵɵelement(18, "app-dashboard-card", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 7);
            i0.ɵɵelement(20, "app-dashboard-card", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 7);
            i0.ɵɵelement(22, "app-dashboard-card", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(23, WorkerDashboard_Conditional_23_Template, 28, 1, "div", 12);
            i0.ɵɵconditionalCreate(24, WorkerDashboard_Conditional_24_Template, 7, 0, "div", 12);
            i0.ɵɵconditionalCreate(25, WorkerDashboard_Conditional_25_Template, 14, 1, "div", 12);
            i0.ɵɵconditionalCreate(26, WorkerDashboard_Conditional_26_Template, 23, 0, "div", 12);
            i0.ɵɵconditionalCreate(27, WorkerDashboard_Conditional_27_Template, 25, 0, "div", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.workerName, " \u2022 Workforce Contractor: ");
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("btn-success", ctx.isClockedIn())("btn-outline-danger", !ctx.isClockedIn());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.isClockedIn() ? "Clocked In (" + ctx.clockInTime() + ")" : "Clocked Out");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.isClockedIn() ? "Active" : "Offline")("colorType", ctx.isClockedIn() ? "success" : "danger");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.workerTasks().length);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.activeModule === "attendance" ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "tasks" ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "status" ? 25 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "payslips" ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "notifications" ? 27 : -1);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, RouterModule, DashboardCardComponent, i2.DecimalPipe], styles: [".bg-primary-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(13, 110, 253, 0.1) !important;\n}\n\n.bg-success-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(25, 135, 84, 0.1) !important;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.05);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkerDashboard, [{
        type: Component,
        args: [{ selector: 'app-worker-dashboard', standalone: true, imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent], template: "<div class=\"container-fluid p-0\">\n\n  <!-- Header -->\n  <div class=\"d-flex justify-content-between align-items-center mb-4\">\n    <div>\n      <h2 class=\"fw-bold text-dark mb-1\">Worker Access Terminal</h2>\n      <p class=\"text-muted mb-0\">{{ workerName }} &bull; Workforce Contractor: <strong>Vance Concrete Ltd</strong></p>\n    </div>\n    <div>\n      <button class=\"btn d-flex align-items-center gap-2 px-3 py-2 border rounded-pill\" \n              [class.btn-success]=\"isClockedIn()\"\n              [class.btn-outline-danger]=\"!isClockedIn()\"\n              (click)=\"toggleClock()\">\n        <i class=\"bi bi-clock-fill\"></i>\n        <span>{{ isClockedIn() ? 'Clocked In (' + clockInTime() + ')' : 'Clocked Out' }}</span>\n      </button>\n    </div>\n  </div>\n\n  <!-- KPI summary cards -->\n  <div class=\"row g-3 mb-4\">\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Clock Status\" \n                          [value]=\"isClockedIn() ? 'Active' : 'Offline'\" \n                          icon=\"bi-check-circle-fill\" \n                          [colorType]=\"isClockedIn() ? 'success' : 'danger'\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Assigned Tasks\" [value]=\"workerTasks().length\" icon=\"bi-card-checklist\" colorType=\"primary\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Active Project Site\" value=\"Vanguard Tower\" icon=\"bi-building-fill\" colorType=\"info\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Net Pay (Current Period)\" value=\"$3,500\" icon=\"bi-receipt\" colorType=\"warning\" subtitle=\"Processing\"></app-dashboard-card>\n    </div>\n  </div>\n\n  <!-- Modules views -->\n  @if (activeModule === 'attendance') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4 text-center\">\n        <h5 class=\"fw-bold text-dark text-start mb-4\">Shift Attendance Clock</h5>\n\n        <div class=\"p-5 border rounded-3 bg-light d-flex flex-column align-items-center justify-content-center mx-auto\" style=\"max-width: 500px;\">\n          <div class=\"rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center mb-4\" style=\"width: 80px; height: 80px;\">\n            <i class=\"bi bi-person-check-fill fs-2\"></i>\n          </div>\n          \n          @if (isClockedIn()) {\n            <h4 class=\"fw-bold text-success mb-2\">Shift In Progress</h4>\n            <p class=\"text-muted small\">You clocked in today at <strong>{{ clockInTime() }}</strong>.</p>\n            <button class=\"btn btn-danger btn-lg px-4 mt-3\" (click)=\"toggleClock()\">\n              <i class=\"bi bi-box-arrow-left me-1\"></i> Clock Out Now\n            </button>\n          } @else {\n            <h4 class=\"fw-bold text-dark mb-2\">Ready to Start Shift?</h4>\n            <p class=\"text-muted small\">Please punch in below to record your check-in time and attendance.</p>\n            <button class=\"btn btn-success btn-lg px-5 mt-3\" (click)=\"toggleClock()\">\n              <i class=\"bi bi-box-arrow-right me-1\"></i> Clock In Now\n            </button>\n          }\n        </div>\n\n        <div class=\"mt-4 text-start\">\n          <h6 class=\"fw-bold text-dark mb-3\">Attendance History (Current Month)</h6>\n          <div class=\"list-group list-group-flush\">\n            <div class=\"list-group-item d-flex justify-content-between align-items-center px-0 py-2 small bg-transparent\">\n              <span>July 23, 2026</span>\n              <span class=\"badge bg-success-subtle text-success border border-success-subtle rounded-pill\">Checked In / Out (8h 15m)</span>\n            </div>\n            <div class=\"list-group-item d-flex justify-content-between align-items-center px-0 py-2 small bg-transparent\">\n              <span>July 22, 2026</span>\n              <span class=\"badge bg-success-subtle text-success border border-success-subtle rounded-pill\">Checked In / Out (8h 00m)</span>\n            </div>\n            <div class=\"list-group-item d-flex justify-content-between align-items-center px-0 py-2 small bg-transparent\">\n              <span>July 21, 2026</span>\n              <span class=\"badge bg-success-subtle text-success border border-success-subtle rounded-pill\">Checked In / Out (8h 30m)</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'tasks') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Assigned Tasks Checklist</h5>\n        \n        <div class=\"d-flex flex-column gap-3\">\n          @for (task of workerTasks(); track task.id) {\n            <div class=\"p-3 border rounded-3 bg-light d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3\">\n              <div>\n                <h6 class=\"fw-bold text-dark mb-1\">{{ task.title }}</h6>\n                <p class=\"text-muted small mb-2\">{{ task.description }}</p>\n                <small class=\"text-secondary d-block\" style=\"font-size: 11px;\">\n                  Timeline: {{ task.startDate }} &bull; {{ task.endDate }}\n                </small>\n              </div>\n\n              <div class=\"d-flex gap-2\">\n                @if (task.status === 'Pending') {\n                  <button class=\"btn btn-primary btn-sm px-3\" (click)=\"updateTaskStatus(task.id, 'In Progress')\">Start Work</button>\n                } @else if (task.status === 'In Progress') {\n                  <button class=\"btn btn-outline-primary btn-sm px-2\" disabled>Running...</button>\n                  <button class=\"btn btn-success btn-sm px-3\" (click)=\"updateTaskStatus(task.id, 'Completed')\">Complete</button>\n                } @else {\n                  <span class=\"badge bg-success py-2 px-3\"><i class=\"bi bi-check-lg me-1\"></i>Finished</span>\n                }\n              </div>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'status') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Log Daily Status Report</h5>\n        <p class=\"text-muted small\">Submit a brief summary of structural tasks, cable paths, or concrete installations you completed during your shift.</p>\n        \n        <form (ngSubmit)=\"submitStatusReport()\">\n          <div class=\"form-group mb-3\">\n            <label class=\"form-label fw-semibold small text-muted\">Daily Work Summary</label>\n            <textarea name=\"comment\" [(ngModel)]=\"statusComment\" required rows=\"5\" class=\"form-control\" placeholder=\"Describe the structural work you did today...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary px-4 py-2\">\n            <i class=\"bi bi-send-fill me-1\"></i> File Daily Update\n          </button>\n        </form>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'payslips') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">My Salary Payslips</h5>\n        \n        <div class=\"table-responsive\">\n          <table class=\"table table-hover align-middle\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>Pay Month</th>\n                <th>Basic Salary</th>\n                <th>Overtime Earnings</th>\n                <th>Deductions</th>\n                <th>Net Pay Out</th>\n                <th>Payment Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (pay of workerPayslips(); track pay.id) {\n                <tr>\n                  <td class=\"fw-bold text-dark\">{{ pay.month }}</td>\n                  <td>${{ pay.basicSalary | number }}</td>\n                  <td>${{ pay.overtimePay | number }}</td>\n                  <td class=\"text-danger\">-${{ pay.deductions | number }}</td>\n                  <td class=\"fw-bold text-success\">${{ pay.netPay | number }}</td>\n                  <td>\n                    <span class=\"badge\"\n                          [class.bg-success]=\"pay.status === 'Paid'\"\n                          [class.bg-warning]=\"pay.status === 'Processing'\">\n                      {{ pay.status }}\n                    </span>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'notifications') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Site Bulletins & Notices</h5>\n        \n        <div class=\"list-group list-group-flush\">\n          <div class=\"list-group-item px-0 py-3 bg-transparent\">\n            <div class=\"d-flex justify-content-between align-items-center mb-1\">\n              <span class=\"badge bg-danger\">Safety Alert</span>\n              <small class=\"text-muted\">July 22, 2026</small>\n            </div>\n            <h6 class=\"fw-bold text-dark\">Required Hard Hat Area & Secure Tethering</h6>\n            <p class=\"text-muted small mb-0\">Level 8 column work actively erecting steel beams. Hard hats and safety harness tethers are strictly mandatory on all upper platforms.</p>\n          </div>\n\n          <div class=\"list-group-item px-0 py-3 bg-transparent\">\n            <div class=\"d-flex justify-content-between align-items-center mb-1\">\n              <span class=\"badge bg-info\">Weather Notice</span>\n              <small class=\"text-muted\">July 20, 2026</small>\n            </div>\n            <h6 class=\"fw-bold text-dark\">High Temperature Warning - Hydration Stations</h6>\n            <p class=\"text-muted small mb-0\">Expected temperatures of 34\u00B0C. Electrolyte hydration packets and chilled water points are stocked on Level 3 and Level 6.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n</div>\n", styles: [".bg-primary-subtle {\n  background-color: rgba(13, 110, 253, 0.1) !important;\n}\n\n.bg-success-subtle {\n  background-color: rgba(25, 135, 84, 0.1) !important;\n}\n\n.list-group-item {\n  border-color: rgba(0, 0, 0, 0.05);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(WorkerDashboard, { className: "WorkerDashboard", filePath: "src/app/pages/worker/dashboard/dashboard.ts", lineNumber: 17 }); })();
