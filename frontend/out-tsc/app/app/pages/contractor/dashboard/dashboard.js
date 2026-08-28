import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';
import { WorkforceManagementComponent } from '../../../components/workforce-management/workforce-management';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function ContractorDashboard_Conditional_21_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "h6", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 23);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 24);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small", 25);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 26)(12, "div", 27)(13, "span");
    i0.ɵɵtext(14, "Report Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 28);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "input", 29, 0);
    i0.ɵɵlistener("change", function ContractorDashboard_Conditional_21_For_8_Template_input_change_17_listener() { const wp_r2 = i0.ɵɵrestoreView(_r1).$implicit; const progressSlider_r3 = i0.ɵɵreference(18); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.updatePackageProgress(wp_r2.id, +progressSlider_r3.value)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const wp_r2 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(wp_r2.title);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bg-success", wp_r2.status === "Completed")("bg-primary", wp_r2.status === "In Progress")("bg-warning", wp_r2.status === "Pending");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", wp_r2.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(wp_r2.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" Timeline: ", wp_r2.startDate, " \u2022 ", wp_r2.endDate, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", wp_r2.progress, "%");
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", wp_r2.progress);
} }
function ContractorDashboard_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 15)(2, "h5", 16);
    i0.ɵɵtext(3, "Assigned Work Packages");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 17);
    i0.ɵɵtext(5, "Update completion progress slider to report structural updates to the Project Manager.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 18);
    i0.ɵɵrepeaterCreate(7, ContractorDashboard_Conditional_21_For_8_Template, 19, 13, "div", 19, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r3.contractorWorkPackages());
} }
function ContractorDashboard_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-workforce-management");
} }
function ContractorDashboard_Conditional_23_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", m_r6.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", m_r6.name, " (Available: ", m_r6.inStock, " ", m_r6.unit, ")");
} }
function ContractorDashboard_Conditional_23_For_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 43);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "span", 23);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const req_r7 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(req_r7.materialName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(req_r7.quantity);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(req_r7.requestDate);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-warning", req_r7.status === "Pending")("bg-success", req_r7.status === "Approved")("bg-danger", req_r7.status === "Rejected");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", req_r7.status, " ");
} }
function ContractorDashboard_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 30)(2, "div", 13)(3, "div", 15)(4, "h5", 16);
    i0.ɵɵtext(5, "File Material Dispatch Request");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "form", 31);
    i0.ɵɵlistener("ngSubmit", function ContractorDashboard_Conditional_23_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitMaterialRequest()); });
    i0.ɵɵelementStart(7, "div", 32)(8, "label", 33);
    i0.ɵɵtext(9, "Select Inventory Item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "select", 34);
    i0.ɵɵtwoWayListener("ngModelChange", function ContractorDashboard_Conditional_23_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.reqMaterialId, $event) || (ctx_r3.reqMaterialId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(11, ContractorDashboard_Conditional_23_For_12_Template, 2, 4, "option", 35, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 32)(14, "label", 33);
    i0.ɵɵtext(15, "Requested Dispatch Qty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function ContractorDashboard_Conditional_23_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.reqQty, $event) || (ctx_r3.reqQty = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "button", 37);
    i0.ɵɵelement(18, "i", 38);
    i0.ɵɵtext(19, " Submit Request ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(20, "div", 39)(21, "div", 13)(22, "div", 15)(23, "h5", 16);
    i0.ɵɵtext(24, "Material Dispatch Request History");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 40)(26, "table", 41)(27, "thead", 42)(28, "tr")(29, "th");
    i0.ɵɵtext(30, "Item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th");
    i0.ɵɵtext(32, "Qty Requested");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th");
    i0.ɵɵtext(34, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "th");
    i0.ɵɵtext(36, "Approval Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "tbody");
    i0.ɵɵrepeaterCreate(38, ContractorDashboard_Conditional_23_For_39_Template, 10, 10, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.reqMaterialId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r3.projectService.materials());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.reqQty);
    i0.ɵɵadvance(22);
    i0.ɵɵrepeater(ctx_r3.contractorRequests());
} }
function ContractorDashboard_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 44)(2, "h5", 45);
    i0.ɵɵtext(3, "Work Progress Analytics");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 46)(5, "div", 47)(6, "div", 48)(7, "div", 49);
    i0.ɵɵtext(8, "94%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h6", 43);
    i0.ɵɵtext(10, "Concrete Placement Rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 17);
    i0.ɵɵtext(12, "Vance Concrete continues ahead of schedule on Level 8 columns.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 47)(14, "div", 48)(15, "div", 50);
    i0.ɵɵtext(16, "98.2%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "h6", 43);
    i0.ɵɵtext(18, "Safety Compliance Index");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 17);
    i0.ɵɵtext(20, "No structural safety warnings or hazard stops filed for Vance Concrete crew.");
    i0.ɵɵelementEnd()()()()()();
} }
export class ContractorDashboard {
    projectService = inject(ProjectService);
    route = inject(ActivatedRoute);
    queryParams = toSignal(this.route.queryParams);
    get activeModule() {
        return this.queryParams()?.['module'] || 'work';
    }
    // Active Contractor Company context (Vance Concrete Ltd)
    contractorName = 'Vance Concrete Ltd';
    // Form Fields - Material Request
    reqMaterialId = 'M-01';
    reqQty = 50;
    // Form Fields - Add Subcontracted Worker
    newWorkerName = '';
    newWorkerRole = 'Mason';
    newWorkerPhone = '';
    // Selectable list for contractor specialties
    workerRoles = ['Mason', 'Ironworker', 'Concrete Finisher', 'Formwork Carpenter', 'General Laborer'];
    // Subcontractor Work Packages
    contractorWorkPackages = computed(() => this.projectService.workPackages().filter(wp => wp.assignedTo === this.contractorName), ...(ngDevMode ? [{ debugName: "contractorWorkPackages" }] : /* istanbul ignore next */ []));
    // Material requests submitted by this contractor
    contractorRequests = computed(() => this.projectService.materialRequests().filter(req => req.requestedBy === this.contractorName), ...(ngDevMode ? [{ debugName: "contractorRequests" }] : /* istanbul ignore next */ []));
    // Workers belonging to this contractor
    contractorWorkers = computed(() => this.projectService.workforce().filter(w => w.company === this.contractorName || w.assignedProject === 'Vanguard Heights Commercial Tower'), ...(ngDevMode ? [{ debugName: "contractorWorkers" }] : /* istanbul ignore next */ []));
    submitMaterialRequest() {
        const mat = this.projectService.materials().find(m => m.id === this.reqMaterialId);
        if (!mat || this.reqQty <= 0) {
            alert('Please specify a valid material and quantity.');
            return;
        }
        this.projectService.submitMaterialRequest({
            materialId: mat.id,
            materialName: mat.name,
            quantity: this.reqQty,
            requestedBy: this.contractorName,
            projectName: 'Vanguard Heights Commercial Tower'
        });
        this.reqQty = 50; // reset
        alert('Inventory request submitted. Awaiting Administrator approval.');
    }
    addWorkerToRoster() {
        if (!this.newWorkerName || !this.newWorkerPhone) {
            alert('Worker name and phone are required.');
            return;
        }
        this.projectService.addWorkforceMember({
            name: this.newWorkerName,
            role: this.newWorkerRole,
            assignedProject: 'Vanguard Heights Commercial Tower',
            phone: this.newWorkerPhone,
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
            company: this.contractorName
        });
        this.newWorkerName = '';
        this.newWorkerPhone = '';
        alert('Worker added and assigned to Vanguard Heights!');
    }
    updatePackageProgress(wpId, progressVal) {
        const status = progressVal >= 100 ? 'Completed' : 'In Progress';
        this.projectService.updateWorkPackageStatus(wpId, progressVal, status);
    }
    static ɵfac = function ContractorDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContractorDashboard)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContractorDashboard, selectors: [["app-contractor-dashboard"]], decls: 25, vars: 8, consts: [["progressSlider", ""], [1, "container-fluid", "p-0"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "text-dark", "mb-1"], [1, "text-muted", "mb-0"], [1, "badge", "bg-secondary", "p-2", "fs-6", "border", "rounded-3", "text-dark", "bg-light"], [1, "bi", "bi-shield-fill-check", "text-success", "ms-1"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-md-3"], ["title", "Work Packages Assigned", "icon", "bi-layout-text-sidebar", "colorType", "primary", 3, "value"], ["title", "Material Requests", "icon", "bi-truck", "colorType", "warning", "subtitle", "Pending & Approved", 3, "value"], ["title", "Contractor Crew Size", "icon", "bi-people-fill", "colorType", "info", "subtitle", "On-site Workers", 3, "value"], ["title", "Average Packages Done", "value", "62%", "icon", "bi-speedometer2", "colorType", "success", "trendValue", "+8%", "trendDirection", "up"], [1, "card", "border-0", "shadow-sm", "rounded-3"], [1, "row", "g-4"], [1, "card-body", "p-4"], [1, "fw-bold", "text-dark", "mb-3"], [1, "text-muted", "small"], [1, "d-flex", "flex-column", "gap-3"], [1, "p-3", "border", "rounded-3", "bg-light", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-md-center", "gap-3"], [1, "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "fw-bold", "text-dark", "mb-0"], [1, "badge"], [1, "text-muted", "small", "mb-2"], [1, "text-secondary", "d-block", 2, "font-size", "11px"], [1, "d-flex", "flex-column", "align-items-start", "align-items-md-end", "gap-2", 2, "width", "250px"], [1, "d-flex", "justify-content-between", "w-100", "mb-1", "small", "text-muted"], [1, "fw-bold"], ["type", "range", "min", "0", "max", "100", "step", "5", 1, "form-range", 3, "change", "value"], [1, "col-lg-5"], [3, "ngSubmit"], [1, "form-group", "mb-3"], [1, "form-label", "fw-semibold", "small", "text-muted"], ["name", "reqMaterialId", 1, "form-select", "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "number", "name", "reqQty", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2.5"], [1, "bi", "bi-truck", "me-1"], [1, "col-lg-7"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle"], [1, "table-light", "text-muted", "uppercase", "small"], [1, "fw-bold", "text-dark"], [1, "card-body", "p-4", "text-center"], [1, "fw-bold", "text-dark", "text-start", "mb-4"], [1, "row", "g-4", "justify-content-center"], [1, "col-md-5"], [1, "p-4", "border", "rounded-3", "bg-light"], [1, "fs-1", "fw-bold", "text-primary", "mb-2"], [1, "fs-1", "fw-bold", "text-success", "mb-2"]], template: function ContractorDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
            i0.ɵɵtext(4, "Contractor Work Station");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div")(8, "span", 5);
            i0.ɵɵtext(9, " Corporate Status: ");
            i0.ɵɵelement(10, "i", 6);
            i0.ɵɵtext(11, " Active ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 7)(13, "div", 8);
            i0.ɵɵelement(14, "app-dashboard-card", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 8);
            i0.ɵɵelement(16, "app-dashboard-card", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 8);
            i0.ɵɵelement(18, "app-dashboard-card", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 8);
            i0.ɵɵelement(20, "app-dashboard-card", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(21, ContractorDashboard_Conditional_21_Template, 9, 0, "div", 13);
            i0.ɵɵconditionalCreate(22, ContractorDashboard_Conditional_22_Template, 1, 0, "app-workforce-management");
            i0.ɵɵconditionalCreate(23, ContractorDashboard_Conditional_23_Template, 40, 2, "div", 14);
            i0.ɵɵconditionalCreate(24, ContractorDashboard_Conditional_24_Template, 21, 0, "div", 13);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.contractorName, " \u2022 Track structural work scopes, crew rosters, and inventory supplies.");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("value", ctx.contractorWorkPackages().length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.contractorRequests().length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.contractorWorkers().length);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.activeModule === "work" ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "workers" || ctx.activeModule === "workforce" ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "material_requests" ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "progress" ? 24 : -1);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.NgModel, i1.NgForm, RouterModule, DashboardCardComponent, WorkforceManagementComponent], styles: [".btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #cbd5e1;\n}\n\n.form-range[_ngcontent-%COMP%] {\n  height: 1.5rem;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContractorDashboard, [{
        type: Component,
        args: [{ selector: 'app-contractor-dashboard', standalone: true, imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent, WorkforceManagementComponent], template: "<div class=\"container-fluid p-0\">\n\n  <!-- Header -->\n  <div class=\"d-flex justify-content-between align-items-center mb-4\">\n    <div>\n      <h2 class=\"fw-bold text-dark mb-1\">Contractor Work Station</h2>\n      <p class=\"text-muted mb-0\">{{ contractorName }} &bull; Track structural work scopes, crew rosters, and inventory supplies.</p>\n    </div>\n    <div>\n      <span class=\"badge bg-secondary p-2 fs-6 border rounded-3 text-dark bg-light\">\n        Corporate Status: <i class=\"bi bi-shield-fill-check text-success ms-1\"></i> Active\n      </span>\n    </div>\n  </div>\n\n  <!-- KPI summary cards -->\n  <div class=\"row g-3 mb-4\">\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Work Packages Assigned\" [value]=\"contractorWorkPackages().length\" icon=\"bi-layout-text-sidebar\" colorType=\"primary\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Material Requests\" [value]=\"contractorRequests().length\" icon=\"bi-truck\" colorType=\"warning\" subtitle=\"Pending & Approved\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Contractor Crew Size\" [value]=\"contractorWorkers().length\" icon=\"bi-people-fill\" colorType=\"info\" subtitle=\"On-site Workers\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Average Packages Done\" value=\"62%\" icon=\"bi-speedometer2\" colorType=\"success\" trendValue=\"+8%\" trendDirection=\"up\"></app-dashboard-card>\n    </div>\n  </div>\n\n  <!-- Modules views -->\n  @if (activeModule === 'work') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Assigned Work Packages</h5>\n        <p class=\"text-muted small\">Update completion progress slider to report structural updates to the Project Manager.</p>\n\n        <div class=\"d-flex flex-column gap-3\">\n          @for (wp of contractorWorkPackages(); track wp.id) {\n            <div class=\"p-3 border rounded-3 bg-light d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3\">\n              <div class=\"flex-grow-1\">\n                <div class=\"d-flex justify-content-between align-items-center mb-1\">\n                  <h6 class=\"fw-bold text-dark mb-0\">{{ wp.title }}</h6>\n                  <span class=\"badge\" \n                        [class.bg-success]=\"wp.status === 'Completed'\"\n                        [class.bg-primary]=\"wp.status === 'In Progress'\"\n                        [class.bg-warning]=\"wp.status === 'Pending'\">\n                    {{ wp.status }}\n                  </span>\n                </div>\n                <p class=\"text-muted small mb-2\">{{ wp.description }}</p>\n                <small class=\"text-secondary d-block\" style=\"font-size: 11px;\">\n                  Timeline: {{ wp.startDate }} &bull; {{ wp.endDate }}\n                </small>\n              </div>\n\n              <div class=\"d-flex flex-column align-items-start align-items-md-end gap-2\" style=\"width: 250px;\">\n                <div class=\"d-flex justify-content-between w-100 mb-1 small text-muted\">\n                  <span>Report Progress</span>\n                  <span class=\"fw-bold\">{{ wp.progress }}%</span>\n                </div>\n                <!-- Interactive slider range -->\n                <input type=\"range\" \n                       class=\"form-range\" \n                       min=\"0\" \n                       max=\"100\" \n                       step=\"5\"\n                       [value]=\"wp.progress\" \n                       #progressSlider\n                       (change)=\"updatePackageProgress(wp.id, +progressSlider.value)\">\n              </div>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'workers' || activeModule === 'workforce') {\n    <app-workforce-management></app-workforce-management>\n  }\n\n  @if (activeModule === 'material_requests') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-5\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">File Material Dispatch Request</h5>\n            \n            <form (ngSubmit)=\"submitMaterialRequest()\">\n              \n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Select Inventory Item</label>\n                <select class=\"form-select form-control\" name=\"reqMaterialId\" [(ngModel)]=\"reqMaterialId\">\n                  @for (m of projectService.materials(); track m.id) {\n                    <option [value]=\"m.id\">{{ m.name }} (Available: {{ m.inStock }} {{ m.unit }})</option>\n                  }\n                </select>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Requested Dispatch Qty</label>\n                <input type=\"number\" name=\"reqQty\" [(ngModel)]=\"reqQty\" min=\"1\" class=\"form-control\">\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary w-100 py-2.5\">\n                <i class=\"bi bi-truck me-1\"></i> Submit Request\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-7\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Material Dispatch Request History</h5>\n            \n            <div class=\"table-responsive\">\n              <table class=\"table table-hover align-middle\">\n                <thead class=\"table-light text-muted uppercase small\">\n                  <tr>\n                    <th>Item</th>\n                    <th>Qty Requested</th>\n                    <th>Date</th>\n                    <th>Approval Status</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (req of contractorRequests(); track req.id) {\n                    <tr>\n                      <td class=\"fw-bold text-dark\">{{ req.materialName }}</td>\n                      <td>{{ req.quantity }}</td>\n                      <td>{{ req.requestDate }}</td>\n                      <td>\n                        <span class=\"badge\" \n                              [class.bg-warning]=\"req.status === 'Pending'\"\n                              [class.bg-success]=\"req.status === 'Approved'\"\n                              [class.bg-danger]=\"req.status === 'Rejected'\">\n                          {{ req.status }}\n                        </span>\n                      </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'progress') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4 text-center\">\n        <h5 class=\"fw-bold text-dark text-start mb-4\">Work Progress Analytics</h5>\n        \n        <div class=\"row g-4 justify-content-center\">\n          <div class=\"col-md-5\">\n            <div class=\"p-4 border rounded-3 bg-light\">\n              <div class=\"fs-1 fw-bold text-primary mb-2\">94%</div>\n              <h6 class=\"fw-bold text-dark\">Concrete Placement Rate</h6>\n              <p class=\"text-muted small\">Vance Concrete continues ahead of schedule on Level 8 columns.</p>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"p-4 border rounded-3 bg-light\">\n              <div class=\"fs-1 fw-bold text-success mb-2\">98.2%</div>\n              <h6 class=\"fw-bold text-dark\">Safety Compliance Index</h6>\n              <p class=\"text-muted small\">No structural safety warnings or hazard stops filed for Vance Concrete crew.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n</div>\n", styles: [".btn-outline-secondary {\n  border-color: #cbd5e1;\n}\n\n.form-range {\n  height: 1.5rem;\n}\n\n.table-responsive {\n  margin-top: 10px;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContractorDashboard, { className: "ContractorDashboard", filePath: "src/app/pages/contractor/dashboard/dashboard.ts", lineNumber: 18 }); })();
