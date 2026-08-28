import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';
import { ChartsComponent } from '../../../components/charts/charts';
import { WorkforceManagementComponent } from '../../../components/workforce-management/workforce-management';
import { ProcurementManagementComponent } from '../../../components/procurement-management/procurement-management';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
const _c0 = () => [];
const _c1 = () => ({ module: "allocations" });
const _c2 = () => ({ module: "daily_feed" });
const _c3 = () => ["Vanguard Tower", "Riverfront II", "Metro Transit", "Eco-Resort"];
const _c4 = () => [12.5, 8.2, 15, 5.4];
const _c5 = () => ["#0d6efd", "#198754", "#ffc107", "#dc3545"];
const _c6 = () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const _c7 = () => [1.2, 2.5, 3.8, 5, 7.2, 9.5, 11.3];
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.categoryId;
function ProjectManagerDashboard_Conditional_20_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 34)(2, "div", 35)(3, "small", 36);
    i0.ɵɵtext(4, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h4", 37);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 34)(8, "div", 38)(9, "small", 36);
    i0.ɵɵtext(10, "Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "h4", 39);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 34)(14, "div", 40)(15, "small", 36);
    i0.ɵɵtext(16, "Allocated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "h4", 41);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 34)(20, "div", 42)(21, "small", 36);
    i0.ɵɵtext(22, "Operating");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "h4", 43);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 34)(26, "div", 44)(27, "small", 36);
    i0.ɵɵtext(28, "Maintenance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "h4", 45);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 34)(32, "div", 46)(33, "small", 36);
    i0.ɵɵtext(34, "Idle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "h4", 47);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const rs_r2 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(rs_r2.totalEquipment);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(rs_r2.availableCount);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(rs_r2.allocatedCount);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(rs_r2.operatingCount);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(rs_r2.maintenanceCount);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(rs_r2.idleCount);
} }
function ProjectManagerDashboard_Conditional_20_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", cat_r4.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cat_r4.name);
} }
function ProjectManagerDashboard_Conditional_20_For_56_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 58);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_20_For_56_Conditional_28_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const res_r6 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.allocResourceId = res_r6.id); });
    i0.ɵɵtext(1, " Allocate ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(2, _c0))("queryParams", i0.ɵɵpureFunction0(3, _c1));
} }
function ProjectManagerDashboard_Conditional_20_For_56_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 48);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div", 49);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small", 50);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "span", 51);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵelement(15, "i", 52);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "span", 53);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td", 54);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td")(25, "div", 55)(26, "button", 56);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_20_For_56_Template_button_click_26_listener() { const res_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openResourceDetail(res_r6)); });
    i0.ɵɵtext(27, " Details ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(28, ProjectManagerDashboard_Conditional_20_For_56_Conditional_28_Template, 2, 4, "a", 57);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const res_r6 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(res_r6.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(res_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Model: ", res_r6.modelNumber || "N/A");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(res_r6.categoryName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(res_r6.currentProjectName || "None (Equipment Yard)");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(res_r6.currentLocation);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", res_r6.status === "Available")("bg-primary", res_r6.status === "Allocated")("bg-info", res_r6.status === "Operating")("bg-secondary", res_r6.status === "Idle")("bg-warning", res_r6.status === "Under Maintenance")("bg-danger", res_r6.status === "Out of Service");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", res_r6.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(res_r6.responsiblePerson);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", res_r6.hourlyCost, "/hr");
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(res_r6.status === "Available" ? 28 : -1);
} }
function ProjectManagerDashboard_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 17);
    i0.ɵɵconditionalCreate(2, ProjectManagerDashboard_Conditional_20_Conditional_2_Template, 37, 6, "div", 7);
    i0.ɵɵelementStart(3, "div", 1)(4, "div")(5, "h5", 2);
    i0.ɵɵelement(6, "i", 18);
    i0.ɵɵtext(7, "Construction Machinery & Equipment Registry");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 19);
    i0.ɵɵtext(9, "Catalog of construction resources, equipment specifications, and live allocation statuses.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 20)(11, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_20_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.resourceSearchQuery, $event) || (ctx_r2.resourceSearchQuery = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_20_Template_select_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.resourceFilterCategory, $event) || (ctx_r2.resourceFilterCategory = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(13, "option", 23);
    i0.ɵɵtext(14, "All Categories");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(15, ProjectManagerDashboard_Conditional_20_For_16_Template, 2, 2, "option", 24, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "select", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_20_Template_select_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.resourceFilterStatus, $event) || (ctx_r2.resourceFilterStatus = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(18, "option", 23);
    i0.ɵɵtext(19, "All Statuses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option", 25);
    i0.ɵɵtext(21, "Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 26);
    i0.ɵɵtext(23, "Allocated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "option", 27);
    i0.ɵɵtext(25, "Operating");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 28);
    i0.ɵɵtext(27, "Idle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 29);
    i0.ɵɵtext(29, "Under Maintenance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 30);
    i0.ɵɵtext(31, "Out of Service");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(32, "div", 31)(33, "table", 32)(34, "thead", 33)(35, "tr")(36, "th");
    i0.ɵɵtext(37, "Equipment ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "th");
    i0.ɵɵtext(39, "Machinery Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "th");
    i0.ɵɵtext(41, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "th");
    i0.ɵɵtext(43, "Current Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "th");
    i0.ɵɵtext(45, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "th");
    i0.ɵɵtext(47, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "th");
    i0.ɵɵtext(49, "Responsible Person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "th");
    i0.ɵɵtext(51, "Hourly Rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "th");
    i0.ɵɵtext(53, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "tbody");
    i0.ɵɵrepeaterCreate(55, ProjectManagerDashboard_Conditional_20_For_56_Template, 29, 22, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_1_0 = ctx_r2.projectService.resourceSummary()) ? 2 : -1, tmp_1_0);
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.resourceSearchQuery);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.resourceFilterCategory);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.projectService.resourceCategories());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.resourceFilterStatus);
    i0.ɵɵadvance(38);
    i0.ɵɵrepeater(ctx_r2.filteredResources());
} }
function ProjectManagerDashboard_Conditional_21_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const proj_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", proj_r9.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", proj_r9.name, " (", proj_r9.id, ")");
} }
function ProjectManagerDashboard_Conditional_21_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", res_r10.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", res_r10.id, " - ", res_r10.name, " [", res_r10.status, "] ");
} }
function ProjectManagerDashboard_Conditional_21_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵelement(1, "i", 81);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.allocConflictWarning, " ");
} }
function ProjectManagerDashboard_Conditional_21_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80)(1, "p", 82);
    i0.ɵɵtext(2, "No active equipment allocations found.");
    i0.ɵɵelementEnd()();
} }
function ProjectManagerDashboard_Conditional_21_Conditional_52_For_20_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Returned on ", a_r11.actualReturnDate);
} }
function ProjectManagerDashboard_Conditional_21_Conditional_52_For_20_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 86);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_21_Conditional_52_For_20_Conditional_22_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const a_r11 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.returnEquipment(a_r11.id)); });
    i0.ɵɵelement(1, "i", 87);
    i0.ɵɵtext(2, " Return ");
    i0.ɵɵelementEnd();
} }
function ProjectManagerDashboard_Conditional_21_Conditional_52_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 48);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div", 49);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small", 50);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td")(13, "small", 83);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(15, ProjectManagerDashboard_Conditional_21_Conditional_52_For_20_Conditional_15_Template, 2, 1, "small", 84);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td")(19, "span", 53);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td");
    i0.ɵɵconditionalCreate(22, ProjectManagerDashboard_Conditional_21_Conditional_52_For_20_Conditional_22_Template, 3, 0, "button", 85);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r11 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r11.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r11.resourceName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("ID: ", a_r11.resourceId, " \u2022 ", a_r11.resourceCategory);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r11.projectName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", a_r11.allocationDate, " \u2192 ", a_r11.expectedReturnDate);
    i0.ɵɵadvance();
    i0.ɵɵconditional(a_r11.actualReturnDate ? 15 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r11.responsiblePerson);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-primary", a_r11.status === "Allocated" || a_r11.status === "Active")("bg-success", a_r11.status === "Returned");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", a_r11.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(a_r11.status === "Allocated" || a_r11.status === "Active" ? 22 : -1);
} }
function ProjectManagerDashboard_Conditional_21_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "table", 32)(2, "thead", 33)(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Allocation ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Equipment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Allocation Period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Responsible Person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵrepeaterCreate(19, ProjectManagerDashboard_Conditional_21_Conditional_52_For_20_Template, 23, 15, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(19);
    i0.ɵɵrepeater(ctx_r2.projectService.resourceAllocations());
} }
function ProjectManagerDashboard_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 59)(2, "div", 15)(3, "div", 17)(4, "h5", 60);
    i0.ɵɵelement(5, "i", 61);
    i0.ɵɵtext(6, "Allocate Equipment to Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 62);
    i0.ɵɵtext(8, "Assign available construction machinery with automated date conflict prevention.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "form", 63);
    i0.ɵɵlistener("ngSubmit", function ProjectManagerDashboard_Conditional_21_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitAllocation()); });
    i0.ɵɵelementStart(10, "div", 64)(11, "label", 65);
    i0.ɵɵtext(12, "Target Project *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "select", 66);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_21_Template_select_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.allocProjectId, $event) || (ctx_r2.allocProjectId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(14, ProjectManagerDashboard_Conditional_21_For_15_Template, 2, 3, "option", 24, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 64)(17, "label", 65);
    i0.ɵɵtext(18, "Equipment / Machinery *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 67);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_21_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.allocResourceId, $event) || (ctx_r2.allocResourceId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ProjectManagerDashboard_Conditional_21_Template_select_change_19_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.checkAvailabilityRealtime()); });
    i0.ɵɵrepeaterCreate(20, ProjectManagerDashboard_Conditional_21_For_21_Template, 2, 4, "option", 24, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 68)(23, "div", 69)(24, "label", 65);
    i0.ɵɵtext(25, "Allocation Date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 70);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_21_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.allocStartDate, $event) || (ctx_r2.allocStartDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ProjectManagerDashboard_Conditional_21_Template_input_change_26_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.checkAvailabilityRealtime()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 69)(28, "label", 65);
    i0.ɵɵtext(29, "Expected Return *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "input", 71);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_21_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.allocEndDate, $event) || (ctx_r2.allocEndDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ProjectManagerDashboard_Conditional_21_Template_input_change_30_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.checkAvailabilityRealtime()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(31, ProjectManagerDashboard_Conditional_21_Conditional_31_Template, 3, 1, "div", 72);
    i0.ɵɵelementStart(32, "div", 64)(33, "label", 65);
    i0.ɵɵtext(34, "Responsible Person / Operator *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "input", 73);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_21_Template_input_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.allocResponsiblePerson, $event) || (ctx_r2.allocResponsiblePerson = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 64)(37, "label", 65);
    i0.ɵɵtext(38, "Deployment Notes / Scope");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "textarea", 74);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_21_Template_textarea_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.allocNotes, $event) || (ctx_r2.allocNotes = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "button", 75);
    i0.ɵɵelement(41, "i", 76);
    i0.ɵɵtext(42, " Confirm & Dispatch Equipment ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(43, "div", 77)(44, "div", 15)(45, "div", 17)(46, "div", 78)(47, "h5", 37);
    i0.ɵɵtext(48, "Active & Historical Equipment Allocations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "span", 79);
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(51, ProjectManagerDashboard_Conditional_21_Conditional_51_Template, 3, 0, "div", 80)(52, ProjectManagerDashboard_Conditional_21_Conditional_52_Template, 21, 0, "div", 31);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.allocProjectId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectService.projects());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.allocResourceId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectService.resources());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.allocStartDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.allocEndDate);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.allocConflictWarning ? 31 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.allocResponsiblePerson);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.allocNotes);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("", ctx_r2.projectService.resourceAllocations().length, " Total Records");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.projectService.resourceAllocations().length === 0 ? 51 : 52);
} }
function ProjectManagerDashboard_Conditional_22_For_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "span", 53);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 48);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "h6", 2);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small", 95);
    i0.ɵɵtext(10, "Category: ");
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 96)(15, "div", 97);
    i0.ɵɵelement(16, "i", 98);
    i0.ɵɵtext(17, "Project: ");
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 97);
    i0.ɵɵelement(21, "i", 99);
    i0.ɵɵtext(22, "Location: ");
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div");
    i0.ɵɵelement(26, "i", 100);
    i0.ɵɵtext(27, "Operator: ");
    i0.ɵɵelementStart(28, "strong");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 101)(31, "span");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "button", 102);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_22_For_14_Template_button_click_33_listener() { const res_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openResourceDetail(res_r15)); });
    i0.ɵɵtext(34, " View Specs ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const res_r15 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("border-success", res_r15.status === "Available")("border-primary", res_r15.status === "Allocated" || res_r15.status === "Operating")("border-warning", res_r15.status === "Under Maintenance")("border-danger", res_r15.status === "Out of Service");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", res_r15.status === "Available")("bg-primary", res_r15.status === "Allocated")("bg-info", res_r15.status === "Operating")("bg-secondary", res_r15.status === "Idle")("bg-warning", res_r15.status === "Under Maintenance")("bg-danger", res_r15.status === "Out of Service");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", res_r15.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(res_r15.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(res_r15.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(res_r15.categoryName);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2022 Rate: $", res_r15.hourlyCost, "/hr");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(res_r15.currentProjectName || "Unassigned (Yard)");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(res_r15.currentLocation);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(res_r15.responsiblePerson);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("SN: ", res_r15.serialNumber || "N/A");
} }
function ProjectManagerDashboard_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 17)(2, "div", 88)(3, "div")(4, "h5", 2);
    i0.ɵɵelement(5, "i", 89);
    i0.ɵɵtext(6, "Live Machinery & Fleet Tracking");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 19);
    i0.ɵɵtext(8, "Real-time spatial deployment, current jobsite allocations, and equipment readiness statuses.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 90);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_22_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.projectService.loadModule4Data()); });
    i0.ɵɵelement(10, "i", 91);
    i0.ɵɵtext(11, "Refresh Fleet");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 14);
    i0.ɵɵrepeaterCreate(13, ProjectManagerDashboard_Conditional_22_For_14_Template, 35, 29, "div", 92, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵrepeater(ctx_r2.projectService.resources());
} }
function ProjectManagerDashboard_Conditional_23_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "div", 122)(3, "small", 36);
    i0.ɵɵtext(4, "Overall Utilization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3", 41);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small", 123);
    i0.ɵɵtext(8, "Auto-calculated from shift logs");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 8)(10, "div", 124)(11, "small", 36);
    i0.ɵɵtext(12, "Total Operating Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h3", 39);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "small", 123);
    i0.ɵɵtext(16, "Active machine run-time");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 8)(18, "div", 125)(19, "small", 36);
    i0.ɵɵtext(20, "Total Idle Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "h3", 47);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "small", 123);
    i0.ɵɵtext(24, "Standby / inspection pauses");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 8)(26, "div", 126)(27, "small", 36);
    i0.ɵɵtext(28, "Available Shift Pool");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "h3", 43);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "small", 123);
    i0.ɵɵtext(32, "Total scheduled machine capacity");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const us_r17 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", us_r17.overallUtilizationPercentage, "%");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", us_r17.totalOperatingHours, " hrs");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", us_r17.totalIdleHours, " hrs");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", us_r17.totalAvailableHours, " hrs");
} }
function ProjectManagerDashboard_Conditional_23_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", res_r18.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", res_r18.id, " - ", res_r18.name);
} }
function ProjectManagerDashboard_Conditional_23_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const proj_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", proj_r19.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(proj_r19.name);
} }
function ProjectManagerDashboard_Conditional_23_For_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 127)(2, "span", 49);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 123);
    i0.ɵɵtext(5);
    i0.ɵɵelementStart(6, "strong", 128);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 129);
    i0.ɵɵelement(9, "div", 130);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const cat_r20 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(cat_r20.categoryName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", cat_r20.operatingHours, " Operating hrs \u2022 ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", cat_r20.utilizationPercentage, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", cat_r20.utilizationPercentage, "%");
} }
function ProjectManagerDashboard_Conditional_23_For_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 54);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "div", 49);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small", 50);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td")(11, "span", 131);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td")(14, "span", 51);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td")(19, "strong", 128);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td", 132);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const u_r21 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r21.usageDate);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(u_r21.resourceName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("ID: ", u_r21.resourceId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r21.projectName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", u_r21.operatingHours, " hrs");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", u_r21.idleHours, " hrs");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", u_r21.totalAvailableHours, " hrs");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", u_r21.utilizationPercentage, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r21.remarks || "-");
} }
function ProjectManagerDashboard_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 17);
    i0.ɵɵconditionalCreate(2, ProjectManagerDashboard_Conditional_23_Conditional_2_Template, 33, 4, "div", 7);
    i0.ɵɵelementStart(3, "div", 103)(4, "div", 104)(5, "div", 105)(6, "h6", 60);
    i0.ɵɵelement(7, "i", 106);
    i0.ɵɵtext(8, "Log Equipment Shift Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 62);
    i0.ɵɵtext(10, "Record operating vs idle hours for automated utilization calculation.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "form", 63);
    i0.ɵɵlistener("ngSubmit", function ProjectManagerDashboard_Conditional_23_Template_form_ngSubmit_11_listener() { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitUtilization()); });
    i0.ɵɵelementStart(12, "div", 107)(13, "label", 65);
    i0.ɵɵtext(14, "Equipment *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 108);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_23_Template_select_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.utlResourceId, $event) || (ctx_r2.utlResourceId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(16, ProjectManagerDashboard_Conditional_23_For_17_Template, 2, 3, "option", 24, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 107)(19, "label", 65);
    i0.ɵɵtext(20, "Project *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "select", 109);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_23_Template_select_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.utlProjectId, $event) || (ctx_r2.utlProjectId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(22, ProjectManagerDashboard_Conditional_23_For_23_Template, 2, 2, "option", 24, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 110)(25, "div", 69)(26, "label", 65);
    i0.ɵɵtext(27, "Usage Date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "input", 111);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_23_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.utlDate, $event) || (ctx_r2.utlDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 69)(30, "label", 65);
    i0.ɵɵtext(31, "Total Shift Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "input", 112);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_23_Template_input_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.utlTotalHours, $event) || (ctx_r2.utlTotalHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "div", 110)(34, "div", 69)(35, "label", 65);
    i0.ɵɵtext(36, "Operating Hours *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "input", 113);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_23_Template_input_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.utlOpHours, $event) || (ctx_r2.utlOpHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 69)(39, "label", 65);
    i0.ɵɵtext(40, "Idle Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "input", 114);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_23_Template_input_ngModelChange_41_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.utlIdleHours, $event) || (ctx_r2.utlIdleHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "div", 64)(43, "label", 65);
    i0.ɵɵtext(44, "Activity / Remarks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "input", 115);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_23_Template_input_ngModelChange_45_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.utlRemarks, $event) || (ctx_r2.utlRemarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "button", 116);
    i0.ɵɵelement(47, "i", 117);
    i0.ɵɵtext(48, " Log Usage Entry ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(49, "div", 118)(50, "div", 105)(51, "h6", 119);
    i0.ɵɵelement(52, "i", 120);
    i0.ɵɵtext(53, "Utilization Performance by Equipment Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "div", 121);
    i0.ɵɵrepeaterCreate(55, ProjectManagerDashboard_Conditional_23_For_56_Template, 10, 5, "div", null, _forTrack1);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(57, "h6", 119);
    i0.ɵɵtext(58, "Recent Shift Usage Logs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "div", 31)(60, "table", 32)(61, "thead", 33)(62, "tr")(63, "th");
    i0.ɵɵtext(64, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "th");
    i0.ɵɵtext(66, "Equipment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "th");
    i0.ɵɵtext(68, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "th");
    i0.ɵɵtext(70, "Operating Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "th");
    i0.ɵɵtext(72, "Idle Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "th");
    i0.ɵɵtext(74, "Total Capacity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "th");
    i0.ɵɵtext(76, "Utilization %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "th");
    i0.ɵɵtext(78, "Remarks");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(79, "tbody");
    i0.ɵɵrepeaterCreate(80, ProjectManagerDashboard_Conditional_23_For_81_Template, 23, 9, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_11_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_1_0 = ctx_r2.projectService.utilizationSummary()) ? 2 : -1, tmp_1_0);
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.utlResourceId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectService.resources());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.utlProjectId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectService.projects());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.utlDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.utlTotalHours);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.utlOpHours);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.utlIdleHours);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.utlRemarks);
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(((tmp_11_0 = ctx_r2.projectService.utilizationSummary()) == null ? null : tmp_11_0.byCategory) || i0.ɵɵpureFunction0(8, _c0));
    i0.ɵɵadvance(25);
    i0.ɵɵrepeater(ctx_r2.projectService.resourceUtilizations());
} }
function ProjectManagerDashboard_Conditional_24_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r23 = ctx.$implicit;
    i0.ɵɵproperty("value", res_r23.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", res_r23.id, " - ", res_r23.name, " [", res_r23.status, "]");
} }
function ProjectManagerDashboard_Conditional_24_For_98_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 86);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_24_For_98_Conditional_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const m_r25 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.completeMaintenance(m_r25.id)); });
    i0.ɵɵelement(1, "i", 158);
    i0.ɵɵtext(2, " Mark Done ");
    i0.ɵɵelementEnd();
} }
function ProjectManagerDashboard_Conditional_24_For_98_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 48);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div", 49);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small", 50);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "span", 51);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td")(13, "strong", 156);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "small", 157);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td", 54);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td")(23, "span", 53);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵconditionalCreate(26, ProjectManagerDashboard_Conditional_24_For_98_Conditional_26_Template, 3, 0, "button", 85);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r25 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r25.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r25.resourceName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("ID: ", m_r25.resourceId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r25.maintenanceType);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r25.nextMaintenanceDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Last: ", m_r25.lastMaintenanceDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r25.serviceEngineer);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(21, 16, m_r25.maintenanceCost, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("bg-warning", m_r25.status === "Scheduled" || m_r25.status === "In Progress")("bg-success", m_r25.status === "Completed")("bg-danger", m_r25.status === "Overdue");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", m_r25.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(m_r25.status !== "Completed" ? 26 : -1);
} }
function ProjectManagerDashboard_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 17)(2, "div", 88)(3, "div")(4, "h5", 2);
    i0.ɵɵelement(5, "i", 133);
    i0.ɵɵtext(6, "Equipment Maintenance & Servicing Hub");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 19);
    i0.ɵɵtext(8, "Schedule preventive/corrective overhauls, preserve complete maintenance history, and track overdue equipment.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 103)(10, "div", 104)(11, "div", 105)(12, "h6", 60);
    i0.ɵɵelement(13, "i", 134);
    i0.ɵɵtext(14, "Schedule Maintenance Service");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "form", 63);
    i0.ɵɵlistener("ngSubmit", function ProjectManagerDashboard_Conditional_24_Template_form_ngSubmit_15_listener() { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitMaintenance()); });
    i0.ɵɵelementStart(16, "div", 107)(17, "label", 65);
    i0.ɵɵtext(18, "Equipment *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 135);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_24_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.mntResourceId, $event) || (ctx_r2.mntResourceId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(20, ProjectManagerDashboard_Conditional_24_For_21_Template, 2, 4, "option", 24, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 107)(23, "label", 65);
    i0.ɵɵtext(24, "Maintenance Type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 136);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_24_Template_select_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.mntType, $event) || (ctx_r2.mntType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(26, "option", 137);
    i0.ɵɵtext(27, "Preventive (Routine Check)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 138);
    i0.ɵɵtext(29, "Corrective (Part Repair)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 139);
    i0.ɵɵtext(31, "Emergency (Breakdown)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 140);
    i0.ɵɵtext(33, "Inspection (Safety/Audit)");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "div", 110)(35, "div", 69)(36, "label", 65);
    i0.ɵɵtext(37, "Last Service *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "input", 141);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_24_Template_input_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.mntLastDate, $event) || (ctx_r2.mntLastDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 69)(40, "label", 65);
    i0.ɵɵtext(41, "Next Service *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "input", 142);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_24_Template_input_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.mntNextDate, $event) || (ctx_r2.mntNextDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "div", 110)(44, "div", 143)(45, "label", 65);
    i0.ɵɵtext(46, "Service Engineer *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "input", 144);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_24_Template_input_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.mntEngineer, $event) || (ctx_r2.mntEngineer = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div", 145)(49, "label", 65);
    i0.ɵɵtext(50, "Cost ($)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "input", 146);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_24_Template_input_ngModelChange_51_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.mntCost, $event) || (ctx_r2.mntCost = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(52, "div", 107)(53, "label", 65);
    i0.ɵɵtext(54, "Maintenance Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "select", 147);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_24_Template_select_ngModelChange_55_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.mntStatus, $event) || (ctx_r2.mntStatus = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(56, "option", 148);
    i0.ɵɵtext(57, "Scheduled");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "option", 149);
    i0.ɵɵtext(59, "In Progress (Under Maintenance)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "option", 150);
    i0.ɵɵtext(61, "Completed");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(62, "div", 64)(63, "label", 65);
    i0.ɵɵtext(64, "Remarks / Checklist");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "textarea", 151);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_24_Template_textarea_ngModelChange_65_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.mntRemarks, $event) || (ctx_r2.mntRemarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "button", 152);
    i0.ɵɵelement(67, "i", 153);
    i0.ɵɵtext(68, " Register Maintenance Order ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(69, "div", 118)(70, "div", 105)(71, "h6", 119);
    i0.ɵɵelement(72, "i", 154);
    i0.ɵɵtext(73, "Complete Maintenance History & Records");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "p", 155);
    i0.ɵɵtext(75, "Historical multi-service lifecycle records are preserved for every machine and never overwritten.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "div", 31)(77, "table", 32)(78, "thead", 33)(79, "tr")(80, "th");
    i0.ɵɵtext(81, "Record ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "th");
    i0.ɵɵtext(83, "Equipment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "th");
    i0.ɵɵtext(85, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(86, "th");
    i0.ɵɵtext(87, "Next Due Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(88, "th");
    i0.ɵɵtext(89, "Service Engineer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "th");
    i0.ɵɵtext(91, "Cost");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "th");
    i0.ɵɵtext(93, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(94, "th");
    i0.ɵɵtext(95, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(96, "tbody");
    i0.ɵɵrepeaterCreate(97, ProjectManagerDashboard_Conditional_24_For_98_Template, 27, 19, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.mntResourceId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectService.resources());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.mntType);
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.mntLastDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.mntNextDate);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.mntEngineer);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.mntCost);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.mntStatus);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.mntRemarks);
    i0.ɵɵadvance(32);
    i0.ɵɵrepeater(ctx_r2.projectService.maintenanceRecords());
} }
function ProjectManagerDashboard_Conditional_25_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 160)(1, "div", 171);
    i0.ɵɵelement(2, "img", 172);
    i0.ɵɵelementStart(3, "div")(4, "h6", 2);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 19);
    i0.ɵɵelement(7, "i", 173);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 174)(10, "small", 53);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small", 50);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(14, "div", 175)(15, "div", 176)(16, "span");
    i0.ɵɵtext(17, "Cumulative Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 177);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 178);
    i0.ɵɵelement(21, "div", 130);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 179)(23, "div", 180);
    i0.ɵɵtext(24);
    i0.ɵɵpipe(25, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "small", 181);
    i0.ɵɵtext(27);
    i0.ɵɵpipe(28, "number");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const proj_r26 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", proj_r26.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(proj_r26.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(proj_r26.location);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", proj_r26.status === "Completed")("bg-primary", proj_r26.status === "In Progress")("bg-warning", proj_r26.status === "Planning")("bg-danger", proj_r26.status === "Delayed");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", proj_r26.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("ID: ", proj_r26.id);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", proj_r26.progress, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", proj_r26.progress, "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Budget: $", i0.ɵɵpipeBind2(25, 18, proj_r26.budget, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Spent: $", i0.ɵɵpipeBind2(28, 21, proj_r26.spent, "1.0-0"));
} }
function ProjectManagerDashboard_Conditional_25_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 155);
    i0.ɵɵtext(1, "No daily reports recorded yet.");
    i0.ɵɵelementEnd();
} }
function ProjectManagerDashboard_Conditional_25_Conditional_18_For_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 167);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rep_r28 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Delay: ", rep_r28.delayReason);
} }
function ProjectManagerDashboard_Conditional_25_Conditional_18_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 182)(1, "div")(2, "div", 183)(3, "span", 184);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 51);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 131);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, ProjectManagerDashboard_Conditional_25_Conditional_18_For_2_Conditional_9_Template, 2, 1, "span", 167);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "h6", 185);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small", 50);
    i0.ɵɵtext(13, "Project: ");
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "button", 186);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_25_Conditional_18_For_2_Template_button_click_17_listener() { const rep_r28 = i0.ɵɵrestoreView(_r27).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openReportDetail(rep_r28)); });
    i0.ɵɵtext(18, " Details ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const rep_r28 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rep_r28.reportDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rep_r28.workCategory);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", rep_r28.percentageWorkCompleted, "% Work");
    i0.ɵɵadvance();
    i0.ɵɵconditional(rep_r28.delayEncountered ? 9 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rep_r28.activityPerformed);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rep_r28.projectName);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2022 Filed by ", rep_r28.siteEngineerName);
} }
function ProjectManagerDashboard_Conditional_25_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 164);
    i0.ɵɵrepeaterCreate(1, ProjectManagerDashboard_Conditional_25_Conditional_18_For_2_Template, 19, 7, "div", 182, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.managedDailyReports().slice(0, 3));
} }
function ProjectManagerDashboard_Conditional_25_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 168);
    i0.ɵɵtext(1, "No active delays reported on your sites.");
    i0.ɵɵelementEnd();
} }
function ProjectManagerDashboard_Conditional_25_Conditional_29_For_2_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 192)(1, "button", 193);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_25_Conditional_29_For_2_Conditional_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r29); const d_r30 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.resolveDelay(d_r30.id)); });
    i0.ɵɵtext(2, " Mark Resolved ");
    i0.ɵɵelementEnd()();
} }
function ProjectManagerDashboard_Conditional_25_Conditional_29_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 187)(1, "div", 188)(2, "span", 189);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small", 50);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h6", 190);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small", 191);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, ProjectManagerDashboard_Conditional_25_Conditional_29_For_2_Conditional_10_Template, 3, 0, "div", 192);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r30 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", d_r30.impactOnProject, " Impact");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r30.date);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r30.affectedActivity);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Reason: ", d_r30.delayReason, " (", d_r30.delayDuration, ")");
    i0.ɵɵadvance();
    i0.ɵɵconditional(d_r30.status === "Active" ? 10 : -1);
} }
function ProjectManagerDashboard_Conditional_25_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 169);
    i0.ɵɵrepeaterCreate(1, ProjectManagerDashboard_Conditional_25_Conditional_29_For_2_Template, 11, 6, "div", 187, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.managedDelays().slice(0, 4));
} }
function ProjectManagerDashboard_Conditional_25_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 168);
    i0.ɵɵtext(1, "No active issues on your projects.");
    i0.ɵɵelementEnd();
} }
function ProjectManagerDashboard_Conditional_25_Conditional_35_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 194)(1, "div", 188)(2, "span", 195);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small", 50);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h6", 190);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 196);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const issue_r31 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-danger", issue_r31.severity === "Critical" || issue_r31.severity === "High")("bg-warning", issue_r31.severity === "Medium")("bg-info", issue_r31.severity === "Low");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", issue_r31.severity, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(issue_r31.reportedDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(issue_r31.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(issue_r31.description);
} }
function ProjectManagerDashboard_Conditional_25_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 170);
    i0.ɵɵrepeaterCreate(1, ProjectManagerDashboard_Conditional_25_Conditional_35_For_2_Template, 10, 10, "div", 194, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectIssues().slice(0, 3));
} }
function ProjectManagerDashboard_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 118)(2, "div", 15)(3, "div", 17)(4, "h5", 119);
    i0.ɵɵtext(5, "Live Projects Progress Oversight");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 159);
    i0.ɵɵrepeaterCreate(7, ProjectManagerDashboard_Conditional_25_For_8_Template, 29, 24, "div", 160, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 161)(10, "div", 17)(11, "div", 78)(12, "h5", 37);
    i0.ɵɵelement(13, "i", 162);
    i0.ɵɵtext(14, "Latest Daily Progress Filed by Site Engineers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 163);
    i0.ɵɵtext(16, "View All Feed \u2192");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(17, ProjectManagerDashboard_Conditional_25_Conditional_17_Template, 2, 0, "p", 155)(18, ProjectManagerDashboard_Conditional_25_Conditional_18_Template, 3, 0, "div", 164);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 104)(20, "div", 13)(21, "div", 17)(22, "div", 78)(23, "h5", 165);
    i0.ɵɵelement(24, "i", 166);
    i0.ɵɵtext(25, "Active Site Delays");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "span", 167);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(28, ProjectManagerDashboard_Conditional_25_Conditional_28_Template, 2, 0, "p", 168)(29, ProjectManagerDashboard_Conditional_25_Conditional_29_Template, 3, 0, "div", 169);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 15)(31, "div", 17)(32, "h5", 119);
    i0.ɵɵtext(33, "Safety & Quality Issues");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(34, ProjectManagerDashboard_Conditional_25_Conditional_34_Template, 2, 0, "p", 168)(35, ProjectManagerDashboard_Conditional_25_Conditional_35_Template, 3, 0, "div", 170);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r2.managedProjects());
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(6, _c0))("queryParams", i0.ɵɵpureFunction0(7, _c2));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.managedDailyReports().length === 0 ? 17 : 18);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r2.managedDelays().length);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.managedDelays().length === 0 ? 28 : 29);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r2.projectIssues().length === 0 ? 34 : 35);
} }
function ProjectManagerDashboard_Conditional_26_For_7_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "span", 53);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 177);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "h6", 2);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small", 199);
    i0.ɵɵtext(10, "Project: ");
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 200);
    i0.ɵɵelement(14, "div", 130);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 201)(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 202);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_26_For_7_Template_button_click_18_listener() { const m_r33 = i0.ɵɵrestoreView(_r32).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openEditMilestone(m_r33)); });
    i0.ɵɵtext(19, "Edit");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const m_r33 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("bg-success", m_r33.status === "Completed")("bg-primary", m_r33.status === "In Progress")("bg-warning", m_r33.status === "Pending")("bg-danger", m_r33.status === "Delayed");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(m_r33.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", m_r33.progressPercentage, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r33.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(m_r33.projectName);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", m_r33.progressPercentage, "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", m_r33.plannedStartDate, " \u2192 ", m_r33.plannedEndDate);
} }
function ProjectManagerDashboard_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 17)(2, "h5", 197);
    i0.ɵɵelement(3, "i", 198);
    i0.ɵɵtext(4, "Milestones & Cumulative Progress Management");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 14);
    i0.ɵɵrepeaterCreate(6, ProjectManagerDashboard_Conditional_26_For_7_Template, 20, 16, "div", 92, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r2.managedMilestones());
} }
function ProjectManagerDashboard_Conditional_27_For_7_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204)(1, "div", 205)(2, "div", 206)(3, "span", 207);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 51);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 131);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 208);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 209);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_27_For_7_Template_button_click_11_listener() { const rep_r35 = i0.ɵɵrestoreView(_r34).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openReportDetail(rep_r35)); });
    i0.ɵɵtext(12, "View Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "h6", 2);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "small", 50);
    i0.ɵɵtext(16, "Contractor: ");
    i0.ɵɵelementStart(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const rep_r35 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rep_r35.reportDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rep_r35.workCategory);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", rep_r35.percentageWorkCompleted, "% Progress");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rep_r35.projectName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rep_r35.activityPerformed);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rep_r35.contractorName || "Vance Concrete Ltd");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2022 Workers: ", rep_r35.workersPresent, " Present");
} }
function ProjectManagerDashboard_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 17)(2, "h5", 119);
    i0.ɵɵelement(3, "i", 203);
    i0.ɵɵtext(4, "Daily Progress Reports Feed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 121);
    i0.ɵɵrepeaterCreate(6, ProjectManagerDashboard_Conditional_27_For_7_Template, 20, 7, "div", 204, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r2.managedDailyReports());
} }
function ProjectManagerDashboard_Conditional_28_For_25_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 213);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_28_For_25_Conditional_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); const d_r37 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.resolveDelay(d_r37.id)); });
    i0.ɵɵtext(1, "Resolve");
    i0.ɵɵelementEnd();
} }
function ProjectManagerDashboard_Conditional_28_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 54);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "span", 208);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "span", 53);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵconditionalCreate(16, ProjectManagerDashboard_Conditional_28_For_25_Conditional_16_Template, 2, 0, "button", 212);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const d_r37 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r37.date);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r37.projectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r37.affectedActivity);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(d_r37.delayReason);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r37.delayDuration);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", d_r37.status === "Resolved")("bg-danger", d_r37.status === "Active");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(d_r37.status);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(d_r37.status === "Active" ? 16 : -1);
} }
function ProjectManagerDashboard_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 17)(2, "h5", 210);
    i0.ɵɵelement(3, "i", 211);
    i0.ɵɵtext(4, "Active Site Delays & Bottlenecks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 31)(6, "table", 32)(7, "thead", 33)(8, "tr")(9, "th");
    i0.ɵɵtext(10, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Affected Activity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Delay Reason");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Duration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "tbody");
    i0.ɵɵrepeaterCreate(24, ProjectManagerDashboard_Conditional_28_For_25_Template, 17, 11, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(24);
    i0.ɵɵrepeater(ctx_r2.managedDelays());
} }
function ProjectManagerDashboard_Conditional_29_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 204)(1, "div", 188)(2, "span", 215);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small", 123);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h6", 2);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small", 50);
    i0.ɵɵtext(9, "Responsible: ");
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r38 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r38.activityType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", a_r38.date, " at ", a_r38.time);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r38.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r38.responsiblePerson);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2022 Logged by ", a_r38.loggedByName);
} }
function ProjectManagerDashboard_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 17)(2, "h5", 119);
    i0.ɵɵelement(3, "i", 214);
    i0.ɵɵtext(4, "Site Activities Log");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 121);
    i0.ɵɵrepeaterCreate(6, ProjectManagerDashboard_Conditional_29_For_7_Template, 13, 6, "div", 204, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r2.managedActivityLogs());
} }
function ProjectManagerDashboard_Conditional_30_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "div", 122)(3, "small", 36);
    i0.ɵɵtext(4, "Weekly Delta");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3", 41);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small", 123);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 8)(10, "div", 124)(11, "small", 36);
    i0.ɵɵtext(12, "Reports Filed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h3", 39);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "small", 123);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 8)(18, "div", 126)(19, "small", 36);
    i0.ɵɵtext(20, "Worker Shifts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "h3", 43);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "small", 123);
    i0.ɵɵtext(24, "Workers checked in");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 8)(26, "div", 217)(27, "small", 36);
    i0.ɵɵtext(28, "Delays");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "h3", 165);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "small", 123);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ws_r39 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("+", ws_r39.weeklyProgressPercentage, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Total: ", ws_r39.overallProjectProgress, "%");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ws_r39.totalReportsFiled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ws_r39.weekStartDate, " to ", ws_r39.weekEndDate);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ws_r39.totalWorkersUtilized);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ws_r39.delaysEncounteredCount);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ws_r39.safetyObservationsCount, " Safety entries");
} }
function ProjectManagerDashboard_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 17)(2, "h5", 119);
    i0.ɵɵelement(3, "i", 216);
    i0.ɵɵtext(4, "Weekly Progress Analytics");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, ProjectManagerDashboard_Conditional_30_Conditional_5_Template, 33, 8, "div", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵconditional((tmp_1_0 = ctx_r2.projectService.weeklySummary()) ? 5 : -1, tmp_1_0);
} }
function ProjectManagerDashboard_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-workforce-management");
} }
function ProjectManagerDashboard_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 218);
    i0.ɵɵelement(2, "app-chart", 219);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 218);
    i0.ɵɵelement(4, "app-chart", 220);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", i0.ɵɵpureFunction0(5, _c3))("data", i0.ɵɵpureFunction0(6, _c4))("customColors", i0.ɵɵpureFunction0(7, _c5));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", i0.ɵɵpureFunction0(8, _c6))("data", i0.ɵɵpureFunction0(9, _c7));
} }
function ProjectManagerDashboard_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 17)(2, "h5", 119);
    i0.ɵɵtext(3, "Project Management Reports");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 170)(5, "div", 221)(6, "div")(7, "h6", 2);
    i0.ɵɵtext(8, "Equipment & Resource Allocation Statement (Module 4)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 19);
    i0.ɵɵtext(10, "Overview of machine allocations, fleet utilization %, and scheduled maintenance records.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 4)(12, "button", 90);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_33_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r40); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.downloadReport("pdf", "Resource_Allocation_Statement")); });
    i0.ɵɵtext(13, "PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 222);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_33_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r40); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.downloadReport("xlsx", "Resource_Allocation_Statement")); });
    i0.ɵɵtext(15, "Excel");
    i0.ɵɵelementEnd()()()()()();
} }
function ProjectManagerDashboard_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 223)(2, "div", 224)(3, "div", 225)(4, "h5", 226);
    i0.ɵɵelement(5, "i", 227);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 228);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_34_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r41); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeResourceDetail()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 229)(9, "div", 78)(10, "span", 230);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 53);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 231)(15, "div", 69)(16, "strong");
    i0.ɵɵtext(17, "Current Location:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 69)(20, "strong");
    i0.ɵɵtext(21, "Current Project:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 69)(24, "strong");
    i0.ɵɵtext(25, "Responsible Person:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 69)(28, "strong");
    i0.ɵɵtext(29, "Hourly Cost:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 69)(32, "strong");
    i0.ɵɵtext(33, "Model Number:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 69)(36, "strong");
    i0.ɵɵtext(37, "Serial Number:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div", 232)(40, "strong");
    i0.ɵɵtext(41, "Purchase Date:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "div", 233)(44, "button", 234);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_34_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r41); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeResourceDetail()); });
    i0.ɵɵtext(45, "Close");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const res_r42 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", res_r42.name, " \u2022 ", res_r42.id);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(res_r42.categoryName);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bg-success", res_r42.status === "Available")("bg-primary", res_r42.status === "Allocated")("bg-warning", res_r42.status === "Under Maintenance");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(res_r42.status);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", res_r42.currentLocation);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", res_r42.currentProjectName || "Yard");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", res_r42.responsiblePerson);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" $", res_r42.hourlyCost, "/hr");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", res_r42.modelNumber || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", res_r42.serialNumber || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", res_r42.purchaseDate || "N/A");
} }
function ProjectManagerDashboard_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 235)(2, "div", 224)(3, "div", 225)(4, "h5", 226);
    i0.ɵɵelement(5, "i", 236);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 228);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_35_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r43); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeReportDetail()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 229)(9, "h5", 60);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 237)(12, "div", 238)(13, "strong");
    i0.ɵɵtext(14, "Project:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 238)(17, "strong");
    i0.ɵɵtext(18, "Contractor:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 238)(21, "strong");
    i0.ɵɵtext(22, "Weather:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 238)(25, "strong");
    i0.ɵɵtext(26, "Machinery:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 233)(29, "button", 234);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_35_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r43); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeReportDetail()); });
    i0.ɵɵtext(30, "Close");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const rep_r44 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Daily Progress Report \u2022 ", rep_r44.id);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rep_r44.activityPerformed);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", rep_r44.projectName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", rep_r44.contractorName || "Vance Concrete Ltd");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", rep_r44.weatherConditions);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", rep_r44.machineryUsed || "None");
} }
function ProjectManagerDashboard_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 223)(2, "div", 224)(3, "div", 225)(4, "h5", 226);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 228);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_36_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r45); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeEditMilestone()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 229)(8, "div", 64)(9, "label", 65);
    i0.ɵɵtext(10, "Progress (0-100%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 239)(12, "input", 240);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_36_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.editMilestoneProgress, $event) || (ctx_r2.editMilestoneProgress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 241);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 64)(16, "label", 65);
    i0.ɵɵtext(17, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 242);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectManagerDashboard_Conditional_36_Template_select_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.editMilestoneStatus, $event) || (ctx_r2.editMilestoneStatus = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(19, "option", 243);
    i0.ɵɵtext(20, "Pending");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 149);
    i0.ɵɵtext(22, "In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 150);
    i0.ɵɵtext(24, "Completed (100%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 244);
    i0.ɵɵtext(26, "Delayed");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(27, "div", 233)(28, "button", 234);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_36_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r45); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeEditMilestone()); });
    i0.ɵɵtext(29, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 245);
    i0.ɵɵlistener("click", function ProjectManagerDashboard_Conditional_36_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r45); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.saveMilestoneProgress()); });
    i0.ɵɵtext(31, "Save Progress");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Update Milestone \u2022 ", ctx.name);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.editMilestoneProgress);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r2.editMilestoneProgress, "%");
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.editMilestoneStatus);
} }
function ProjectManagerDashboard_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-procurement-management");
} }
export class ProjectManagerDashboard {
    projectService = inject(ProjectService);
    route = inject(ActivatedRoute);
    queryParams = toSignal(this.route.queryParams);
    get activeModule() {
        return this.queryParams()?.['module'] || 'projects';
    }
    // Active Project Selection for detail views
    selectedProjectId = 'P-101';
    // Filter projects managed by this user (Shradha S) or available
    managedProjects = computed(() => {
        const list = this.projectService.projects().filter(p => p.manager === 'Shradha S');
        return list.length > 0 ? list : this.projectService.projects();
    }, ...(ngDevMode ? [{ debugName: "managedProjects" }] : /* istanbul ignore next */ []));
    totalBudget = computed(() => this.managedProjects().reduce((sum, p) => sum + p.budget, 0), ...(ngDevMode ? [{ debugName: "totalBudget" }] : /* istanbul ignore next */ []));
    totalSpent = computed(() => this.managedProjects().reduce((sum, p) => sum + p.spent, 0), ...(ngDevMode ? [{ debugName: "totalSpent" }] : /* istanbul ignore next */ []));
    averageProgress = computed(() => {
        const projs = this.managedProjects();
        if (projs.length === 0)
            return 0;
        return Math.round(projs.reduce((sum, p) => sum + p.progress, 0) / projs.length);
    }, ...(ngDevMode ? [{ debugName: "averageProgress" }] : /* istanbul ignore next */ []));
    // Budget chart computed signals
    budgetChartLabels = computed(() => this.managedProjects().length > 0
        ? this.managedProjects().map(p => p.name.split(' ').slice(0, 2).join(' '))
        : ['Vanguard Tower', 'Riverfront II', 'Metro Transit', 'Eco-Resort'], ...(ngDevMode ? [{ debugName: "budgetChartLabels" }] : /* istanbul ignore next */ []));
    budgetChartCommitted = computed(() => this.managedProjects().length > 0
        ? this.managedProjects().map(p => parseFloat((p.budget / 1_000_000).toFixed(2)))
        : [12.5, 8.2, 15.0, 5.4], ...(ngDevMode ? [{ debugName: "budgetChartCommitted" }] : /* istanbul ignore next */ []));
    budgetChartSpent = computed(() => this.managedProjects().length > 0
        ? this.managedProjects().map(p => parseFloat((p.spent / 1_000_000).toFixed(2)))
        : [9.1, 6.7, 8.3, 3.2], ...(ngDevMode ? [{ debugName: "budgetChartSpent" }] : /* istanbul ignore next */ []));
    // Module 3 Computations
    managedMilestones = computed(() => this.projectService.milestones().filter(m => this.managedProjects().some(p => p.id === m.projectId)), ...(ngDevMode ? [{ debugName: "managedMilestones" }] : /* istanbul ignore next */ []));
    managedDailyReports = computed(() => this.projectService.dailyProgressReports().filter(r => this.managedProjects().some(p => p.id === r.projectId)), ...(ngDevMode ? [{ debugName: "managedDailyReports" }] : /* istanbul ignore next */ []));
    managedDelays = computed(() => this.projectService.delays().filter(d => this.managedProjects().some(p => p.id === d.projectId)), ...(ngDevMode ? [{ debugName: "managedDelays" }] : /* istanbul ignore next */ []));
    managedActivityLogs = computed(() => this.projectService.activityLogs().filter(a => this.managedProjects().some(p => p.id === a.projectId)), ...(ngDevMode ? [{ debugName: "managedActivityLogs" }] : /* istanbul ignore next */ []));
    // Static team member fallback
    staticTeamMembers = [
        { id: 'tm1', name: 'Ramesh Kumar', role: 'Mason', assignedProject: 'Vanguard Heights Tower', phone: '+91-9812345678', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Ramesh+Kumar&background=0d6efd&color=fff' },
        { id: 'tm2', name: 'Priya Nair', role: 'Electrician', assignedProject: 'Vanguard Heights Tower', phone: '+91-9823456789', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Priya+Nair&background=198754&color=fff' },
        { id: 'tm3', name: 'Suresh Patil', role: 'Plumber', assignedProject: 'Riverfront Residency II', phone: '+91-9834567890', status: 'On Leave', avatar: 'https://ui-avatars.com/api/?name=Suresh+Patil&background=ffc107&color=000' },
        { id: 'tm4', name: 'Kavita Sharma', role: 'Site Supervisor', assignedProject: 'Vanguard Heights Tower', phone: '+91-9845678901', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Kavita+Sharma&background=0dcaf0&color=fff' },
        { id: 'tm5', name: 'Mohan Das', role: 'Welder', assignedProject: 'Metro Transit Hub', phone: '+91-9856789012', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Mohan+Das&background=6f42c1&color=fff' },
        { id: 'tm6', name: 'Arjun Singh', role: 'Safety Officer', assignedProject: 'Riverfront Residency II', phone: '+91-9878901234', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Arjun+Singh&background=fd7e14&color=fff' },
    ];
    teamMembers = computed(() => {
        const live = this.projectService.workforce().filter(member => this.managedProjects().some(p => p.name === member.assignedProject));
        return live.length > 0 ? live : this.staticTeamMembers;
    }, ...(ngDevMode ? [{ debugName: "teamMembers" }] : /* istanbul ignore next */ []));
    projectIssues = computed(() => this.projectService.issues().filter(issue => this.managedProjects().some(p => p.name === issue.projectName)), ...(ngDevMode ? [{ debugName: "projectIssues" }] : /* istanbul ignore next */ []));
    // ==========================================
    // MODULE 4: RESOURCE MANAGEMENT STATE
    // ==========================================
    resourceFilterCategory = 'ALL';
    resourceFilterStatus = 'ALL';
    resourceSearchQuery = '';
    filteredResources = computed(() => {
        let list = this.projectService.resources();
        if (this.resourceFilterCategory !== 'ALL') {
            list = list.filter(r => r.categoryId === this.resourceFilterCategory);
        }
        if (this.resourceFilterStatus !== 'ALL') {
            list = list.filter(r => r.status === this.resourceFilterStatus);
        }
        if (this.resourceSearchQuery.trim()) {
            const q = this.resourceSearchQuery.toLowerCase();
            list = list.filter(r => r.name.toLowerCase().includes(q) ||
                r.id.toLowerCase().includes(q) ||
                r.responsiblePerson.toLowerCase().includes(q) ||
                r.currentLocation.toLowerCase().includes(q));
        }
        return list;
    }, ...(ngDevMode ? [{ debugName: "filteredResources" }] : /* istanbul ignore next */ []));
    // Allocation Form State
    allocResourceId = 'EQ-102';
    allocProjectId = 'P-101';
    allocStartDate = new Date().toISOString().split('T')[0];
    allocEndDate = '';
    allocQuantity = 1;
    allocResponsiblePerson = 'Gaurav K (Lead Operator)';
    allocNotes = '';
    allocConflictWarning = '';
    // Utilization Form State
    utlResourceId = 'EQ-101';
    utlProjectId = 'P-101';
    utlDate = new Date().toISOString().split('T')[0];
    utlOpHours = 7.0;
    utlIdleHours = 1.0;
    utlTotalHours = 8.0;
    utlRemarks = 'Level 8 structural slab work';
    // Maintenance Form State
    mntResourceId = 'EQ-102';
    mntType = 'Preventive';
    mntLastDate = new Date().toISOString().split('T')[0];
    mntNextDate = '';
    mntEngineer = 'Komatsu Certified Field Tech';
    mntCost = 500;
    mntStatus = 'Scheduled';
    mntRemarks = 'Standard 250-hour hydraulic filter and engine oil change.';
    // Selected Detail Modals
    selectedResourceDetail = null;
    selectedReportDetail = null;
    selectedMilestoneToEdit = null;
    editMilestoneProgress = 0;
    editMilestoneStatus = 'In Progress';
    // ==========================================
    // REPORT PREVIEW MODAL STATE
    // ==========================================
    showReportModal = false;
    editingReport = false;
    selectedReport = null;
    pmReports = [
        {
            title: 'Equipment & Resource Allocation Statement (Module 4)',
            description: 'Overview of machine allocations, fleet utilization %, and scheduled maintenance records.',
            format: 'pdf',
            contents: [
                'Full Equipment Registry with Status & Location',
                'Active Resource Allocations by Project',
                'Fleet Utilization % per Category',
                'Scheduled & Overdue Maintenance Records',
                'Resource Return History',
                'Equipment Cost per Hour Summary'
            ]
        },
        {
            title: 'Project Progress & Milestone Report',
            description: 'Weekly progress delta, milestone completion, and delay analysis across all managed projects.',
            format: 'excel',
            contents: [
                'Milestone Completion Status per Project',
                'Weekly Progress Delta (% Change)',
                'Daily Reports Filed by Site Engineers',
                'Active & Resolved Delays',
                'Worker Shift Attendance Summary',
                'Budget vs Spent Analysis'
            ]
        }
    ];
    // Weekly analytics chart data (uses weeklySummary or static fallbacks)
    weeklyDeltaLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
    weeklyDeltaData = computed(() => {
        const ws = this.projectService.weeklySummary();
        if (ws)
            return [ws.weeklyProgressPercentage, 4.2, 6.1, 3.8, 5.5, 7.0];
        return [3.5, 4.2, 6.1, 3.8, 5.5, 7.0];
    }, ...(ngDevMode ? [{ debugName: "weeklyDeltaData" }] : /* istanbul ignore next */ []));
    reportsFiledData = computed(() => {
        const ws = this.projectService.weeklySummary();
        return [ws?.totalReportsFiled || 5, 7, 4, 8, 6, 9];
    }, ...(ngDevMode ? [{ debugName: "reportsFiledData" }] : /* istanbul ignore next */ []));
    workerShiftsData = computed(() => {
        const ws = this.projectService.weeklySummary();
        return [ws?.totalWorkersUtilized || 42, 38, 45, 50, 47, 55];
    }, ...(ngDevMode ? [{ debugName: "workerShiftsData" }] : /* istanbul ignore next */ []));
    delaysData = computed(() => {
        const ws = this.projectService.weeklySummary();
        return [ws?.delaysEncounteredCount || 2, 1, 3, 0, 2, 1];
    }, ...(ngDevMode ? [{ debugName: "delaysData" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        // Default expected return date to +14 days
        const returnDate = new Date();
        returnDate.setDate(returnDate.getDate() + 14);
        this.allocEndDate = returnDate.toISOString().split('T')[0];
        const nextMnt = new Date();
        nextMnt.setDate(nextMnt.getDate() + 30);
        this.mntNextDate = nextMnt.toISOString().split('T')[0];
        this.projectService.loadModule3Data();
        this.projectService.loadModule4Data();
        this.projectService.loadWeeklySummary(this.selectedProjectId);
    }
    onProjectSelectChange() {
        this.projectService.loadWeeklySummary(this.selectedProjectId);
    }
    // ==========================================
    // RESOURCE ALLOCATION ACTIONS
    // ==========================================
    checkAvailabilityRealtime() {
        if (!this.allocResourceId || !this.allocStartDate || !this.allocEndDate)
            return;
        this.projectService.checkResourceAvailability(this.allocStartDate, this.allocEndDate).subscribe({
            next: (res) => {
                const isAvail = res.data.some(r => r.id === this.allocResourceId);
                if (!isAvail) {
                    const selectedRes = this.projectService.resources().find(r => r.id === this.allocResourceId);
                    this.allocConflictWarning = `Warning: ${selectedRes?.name || 'Selected equipment'} (${this.allocResourceId}) is not available or has conflicting allocations during the chosen dates.`;
                }
                else {
                    this.allocConflictWarning = '';
                }
            },
            error: () => { }
        });
    }
    submitAllocation() {
        if (!this.allocResourceId || !this.allocProjectId || !this.allocStartDate || !this.allocEndDate) {
            alert('Please fill all required allocation fields.');
            return;
        }
        const payload = {
            resourceId: this.allocResourceId,
            projectId: this.allocProjectId,
            allocationDate: this.allocStartDate,
            expectedReturnDate: this.allocEndDate,
            quantity: this.allocQuantity,
            responsiblePerson: this.allocResponsiblePerson,
            notes: this.allocNotes
        };
        this.projectService.allocateResource(payload).subscribe({
            next: () => {
                alert('Equipment successfully allocated to project! Status updated to Allocated.');
                this.allocNotes = '';
                this.allocConflictWarning = '';
                this.projectService.loadModule4Data();
            },
            error: (err) => {
                alert('Allocation Failed: ' + (err.error?.detail || err.message));
            }
        });
    }
    returnEquipment(allocationId) {
        if (confirm('Confirm return of this equipment to the Equipment Yard?')) {
            this.projectService.returnResourceAllocation(allocationId).subscribe({
                next: () => {
                    alert('Equipment marked as Returned and restored to Available status in Equipment Yard.');
                    this.projectService.loadModule4Data();
                },
                error: (err) => alert('Error returning equipment: ' + err.message)
            });
        }
    }
    // ==========================================
    // RESOURCE UTILIZATION ACTIONS
    // ==========================================
    submitUtilization() {
        if (!this.utlResourceId || !this.utlProjectId || !this.utlDate) {
            alert('Please fill all utilization fields.');
            return;
        }
        const payload = {
            resourceId: this.utlResourceId,
            projectId: this.utlProjectId,
            usageDate: this.utlDate,
            operatingHours: this.utlOpHours,
            idleHours: this.utlIdleHours,
            totalAvailableHours: this.utlTotalHours,
            remarks: this.utlRemarks
        };
        this.projectService.logResourceUtilization(payload).subscribe({
            next: () => {
                alert('Shift utilization record logged! Utilization % calculated automatically.');
                this.utlRemarks = '';
                this.projectService.loadModule4Data();
            },
            error: (err) => alert('Error logging utilization: ' + (err.error?.detail || err.message))
        });
    }
    // ==========================================
    // MAINTENANCE MANAGEMENT ACTIONS
    // ==========================================
    submitMaintenance() {
        if (!this.mntResourceId || !this.mntLastDate || !this.mntNextDate) {
            alert('Please fill all required maintenance schedule fields.');
            return;
        }
        const payload = {
            resourceId: this.mntResourceId,
            maintenanceType: this.mntType,
            lastMaintenanceDate: this.mntLastDate,
            nextMaintenanceDate: this.mntNextDate,
            serviceEngineer: this.mntEngineer,
            maintenanceCost: this.mntCost,
            status: this.mntStatus,
            remarks: this.mntRemarks
        };
        this.projectService.scheduleMaintenance(payload).subscribe({
            next: () => {
                alert('Maintenance scheduled! Equipment status updated appropriately.');
                this.projectService.loadModule4Data();
            },
            error: (err) => alert('Error scheduling maintenance: ' + (err.error?.detail || err.message))
        });
    }
    completeMaintenance(mntId) {
        if (confirm('Mark this maintenance service as Completed? Equipment status will revert to Available.')) {
            this.projectService.updateMaintenanceRecord(mntId, { status: 'Completed' }).subscribe({
                next: () => {
                    alert('Maintenance marked as Completed. Equipment restored to Available status.');
                    this.projectService.loadModule4Data();
                },
                error: (err) => alert('Error: ' + err.message)
            });
        }
    }
    // Modal handlers
    openResourceDetail(r) {
        this.selectedResourceDetail = r;
    }
    closeResourceDetail() {
        this.selectedResourceDetail = null;
    }
    openReportDetail(rep) {
        this.selectedReportDetail = rep;
    }
    closeReportDetail() {
        this.selectedReportDetail = null;
    }
    openEditMilestone(m) {
        this.selectedMilestoneToEdit = m;
        this.editMilestoneProgress = m.progressPercentage;
        this.editMilestoneStatus = m.status;
    }
    closeEditMilestone() {
        this.selectedMilestoneToEdit = null;
    }
    saveMilestoneProgress() {
        if (!this.selectedMilestoneToEdit)
            return;
        this.projectService.updateMilestone(this.selectedMilestoneToEdit.id, {
            progressPercentage: this.editMilestoneProgress,
            status: this.editMilestoneStatus
        }).subscribe({
            next: () => {
                alert('Milestone progress updated! Project progress recalculated.');
                this.selectedMilestoneToEdit = null;
                this.projectService.loadAllData();
            },
            error: (err) => alert('Error: ' + err.message)
        });
    }
    resolveDelay(id) {
        this.projectService.updateDelay(id, { status: 'Resolved' }).subscribe({
            next: () => {
                alert('Delay marked as Resolved.');
                this.projectService.loadAllData();
            }
        });
    }
    // ==========================================
    // REPORT PREVIEW MODAL
    // ==========================================
    openReportPreview(report) {
        this.selectedReport = report;
        this.editingReport = false;
        this.showReportModal = true;
    }
    closeReportModal() {
        this.showReportModal = false;
        this.selectedReport = null;
        this.editingReport = false;
    }
    toggleEditReport() {
        this.editingReport = !this.editingReport;
    }
    // ==========================================
    // EXPORT / DOWNLOAD METHODS
    // ==========================================
    /** Generic CSV/Excel download utility */
    downloadCSV(filename, rows) {
        const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename + '.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
    /** Generic HTML-as-PDF download utility */
    downloadHTML(filename, title, subtitle, tableHeaders, tableRows) {
        const rows = tableRows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
        const html = `<html><head><title>${title}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 32px; color: #222; font-size: 13px; }
        h1 { font-size: 18px; color: #0d6efd; border-bottom: 2px solid #0d6efd; padding-bottom: 6px; }
        p { color: #666; margin-bottom: 16px; }
        table { width: 100%; border-collapse: collapse; margin-top: 12px; }
        th { background: #0d6efd; color: #fff; padding: 8px; text-align: left; font-size: 11px; }
        td { padding: 7px 8px; border-bottom: 1px solid #eee; font-size: 12px; }
        tr:nth-child(even) td { background: #f9f9f9; }
        footer { margin-top: 32px; font-size: 10px; color: #aaa; }
      </style></head>
      <body>
        <h1>${title}</h1>
        <p>${subtitle} | Generated: ${new Date().toLocaleString()}</p>
        <table><thead><tr>${tableHeaders.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${rows}</tbody></table>
        <footer>BuildTrack – Project Manager Workspace – Confidential</footer>
      </body></html>`;
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename + '.html';
        a.click();
        URL.revokeObjectURL(url);
    }
    /** Export Resource Ledger (used from header and budget/reports pages) */
    exportResourceLedger() {
        const resources = this.projectService.resources();
        if (resources.length > 0) {
            this.downloadCSV('Resource_Ledger', [
                ['BuildTrack – Equipment & Resource Ledger'],
                ['Generated: ' + new Date().toLocaleDateString()],
                [''],
                ['Equipment ID', 'Name', 'Category', 'Status', 'Location', 'Project', 'Operator', 'Hourly Rate ($)'],
                ...resources.map(r => [r.id, r.name, r.categoryName || r.categoryId, r.status, r.currentLocation, r.currentProjectName || 'Yard', r.responsiblePerson, String(r.hourlyCost)])
            ]);
        }
        else {
            // Static fallback
            this.downloadCSV('Resource_Ledger', [
                ['BuildTrack – Equipment & Resource Ledger'],
                ['Generated: ' + new Date().toLocaleDateString()],
                [''],
                ['Equipment ID', 'Name', 'Category', 'Status', 'Location', 'Project', 'Operator', 'Hourly Rate ($)'],
                ['EQ-101', 'Caterpillar 336 Excavator', 'Excavator', 'Allocated', 'Block A – Level 3', 'Vanguard Heights Tower', 'Gaurav K', '120'],
                ['EQ-102', 'Komatsu PC 210 Excavator', 'Excavator', 'Available', 'Equipment Yard', 'Yard', 'Sanjay P', '95'],
                ['EQ-201', 'Schwing Stetter Batching Plant', 'Concrete Equipment', 'Operating', 'Block B – Ground', 'Riverfront Residency II', 'Ramesh T', '85'],
            ]);
        }
    }
    /** Export Equipment Catalog */
    exportEquipmentCatalog() {
        const resources = this.projectService.resources();
        const rows = resources.length > 0
            ? resources.map(r => [r.id, r.name, r.categoryName || r.categoryId, r.modelNumber || 'N/A', r.serialNumber || 'N/A', r.status, r.currentLocation, r.responsiblePerson, String(r.hourlyCost)])
            : [['EQ-101', 'Caterpillar 336 Excavator', 'Excavator', '336-07A', 'SN-CAT-5092', 'Allocated', 'Block A – Level 3', 'Gaurav K', '120']];
        this.downloadCSV('Equipment_Catalog', [
            ['BuildTrack – Equipment Catalog Report'],
            ['Generated: ' + new Date().toLocaleDateString()],
            [''],
            ['ID', 'Name', 'Category', 'Model', 'Serial No.', 'Status', 'Location', 'Operator', 'Rate/hr ($)'],
            ...rows
        ]);
    }
    /** Export Allocations */
    exportAllocations() {
        const allocs = this.projectService.resourceAllocations();
        const rows = allocs.length > 0
            ? allocs.map(a => [a.id, a.resourceName || a.resourceId, a.projectName || a.projectId, a.allocationDate, a.expectedReturnDate, a.responsiblePerson, a.status])
            : [['ALLOC-001', 'Caterpillar 336 Excavator', 'Vanguard Heights Tower', '2026-07-01', '2026-08-01', 'Gaurav K', 'Allocated']];
        this.downloadCSV('Equipment_Allocations', [
            ['BuildTrack – Equipment Allocation Statement'],
            ['Generated: ' + new Date().toLocaleDateString()],
            [''],
            ['Allocation ID', 'Equipment', 'Project', 'Start Date', 'Return Date', 'Responsible Person', 'Status'],
            ...rows
        ]);
    }
    /** Export Machinery Tracking */
    exportMachineryTracking() {
        const resources = this.projectService.resources();
        const rows = resources.length > 0
            ? resources.map(r => [r.id, r.name, r.categoryName || '', r.status, r.currentLocation, r.currentProjectName || 'Yard', r.responsiblePerson])
            : [['EQ-101', 'Caterpillar 336 Excavator', 'Excavator', 'Allocated', 'Block A – Level 3', 'Vanguard Heights Tower', 'Gaurav K']];
        this.downloadCSV('Machinery_Tracking', [
            ['BuildTrack – Live Machinery Tracking Report'],
            ['Generated: ' + new Date().toLocaleDateString()],
            [''],
            ['Equipment ID', 'Name', 'Category', 'Status', 'Location', 'Project', 'Operator'],
            ...rows
        ]);
    }
    /** Export Resource Utilization */
    exportUtilization() {
        const utils = this.projectService.resourceUtilizations();
        const rows = utils.length > 0
            ? utils.map(u => [u.usageDate, u.resourceName || u.resourceId, u.projectName || u.projectId, String(u.operatingHours), String(u.idleHours), String(u.totalAvailableHours), u.utilizationPercentage + '%', u.remarks || ''])
            : [['2026-08-10', 'Caterpillar 336 Excavator', 'Vanguard Heights Tower', '7.0', '1.0', '8.0', '87.5%', 'Foundation excavation']];
        this.downloadCSV('Resource_Utilization', [
            ['BuildTrack – Resource Utilization Log'],
            ['Generated: ' + new Date().toLocaleDateString()],
            [''],
            ['Date', 'Equipment', 'Project', 'Operating Hrs', 'Idle Hrs', 'Total Hrs', 'Utilization %', 'Remarks'],
            ...rows
        ]);
    }
    /** Export Maintenance Hub */
    exportMaintenance() {
        const records = this.projectService.maintenanceRecords();
        const rows = records.length > 0
            ? records.map(m => [m.id, m.resourceName || m.resourceId, m.maintenanceType, m.lastMaintenanceDate, m.nextMaintenanceDate, m.serviceEngineer, '$' + m.maintenanceCost, m.status, m.remarks || ''])
            : [['MNT-001', 'Caterpillar 336 Excavator', 'Preventive', '2026-06-01', '2026-09-01', 'CAT Field Tech', '$500', 'Scheduled', 'Oil change & filter']];
        this.downloadCSV('Maintenance_Hub', [
            ['BuildTrack – Maintenance Schedule & Records'],
            ['Generated: ' + new Date().toLocaleDateString()],
            [''],
            ['Record ID', 'Equipment', 'Type', 'Last Service', 'Next Service', 'Engineer', 'Cost', 'Status', 'Remarks'],
            ...rows
        ]);
    }
    /** Export Daily Reports Feed */
    exportDailyFeed() {
        const reports = this.managedDailyReports();
        const rows = reports.length > 0
            ? reports.map(r => [r.reportDate, r.projectName || '', r.workCategory, r.activityPerformed, r.percentageWorkCompleted + '%', String(r.workersPresent), r.weatherConditions, r.delayEncountered ? 'Yes – ' + r.delayReason : 'No'])
            : [['2026-08-10', 'Vanguard Heights Tower', 'Structural', 'Slab casting at Level 8', '5%', '24', 'Clear', 'No']];
        this.downloadCSV('Daily_Progress_Feed', [
            ['BuildTrack – Daily Progress Reports'],
            ['Generated: ' + new Date().toLocaleDateString()],
            [''],
            ['Date', 'Project', 'Category', 'Activity', 'Progress', 'Workers', 'Weather', 'Delay'],
            ...rows
        ]);
    }
    /** Export Active Delays */
    exportDelays() {
        const delays = this.managedDelays();
        const rows = delays.length > 0
            ? delays.map(d => [d.date, d.projectName || '', d.affectedActivity, d.delayReason, d.delayDuration, d.impactOnProject, d.status])
            : [['2026-08-05', 'Vanguard Heights Tower', 'Concrete Pouring', 'Heavy Rain', '2 days', 'High', 'Active']];
        this.downloadCSV('Active_Delays', [
            ['BuildTrack – Active Site Delays'],
            ['Generated: ' + new Date().toLocaleDateString()],
            [''],
            ['Date', 'Project', 'Affected Activity', 'Reason', 'Duration', 'Impact', 'Status'],
            ...rows
        ]);
    }
    /** Export Site Activities */
    exportActivities() {
        const logs = this.managedActivityLogs();
        const rows = logs.length > 0
            ? logs.map(a => [a.date, a.time, a.projectName || '', a.activityType, a.description, a.responsiblePerson, a.loggedByName || ''])
            : [['2026-08-10', '08:30', 'Vanguard Heights Tower', 'Inspection', 'Structural slab inspection at Level 7', 'Sathvik S', 'Sathvik S']];
        this.downloadCSV('Site_Activities', [
            ['BuildTrack – Site Activity Log'],
            ['Generated: ' + new Date().toLocaleDateString()],
            [''],
            ['Date', 'Time', 'Project', 'Activity Type', 'Description', 'Responsible Person', 'Logged By'],
            ...rows
        ]);
    }
    /** Export Weekly Analytics */
    exportWeeklyAnalytics() {
        const ws = this.projectService.weeklySummary();
        this.downloadCSV('Weekly_Analytics', [
            ['BuildTrack – Weekly Progress Analytics'],
            ['Generated: ' + new Date().toLocaleDateString()],
            [''],
            ['Metric', 'Value'],
            ['Weekly Progress Delta', (ws?.weeklyProgressPercentage || 3.5) + '%'],
            ['Overall Project Progress', (ws?.overallProjectProgress || 62) + '%'],
            ['Reports Filed This Week', String(ws?.totalReportsFiled || 5)],
            ['Workers Utilized', String(ws?.totalWorkersUtilized || 42)],
            ['Delays Encountered', String(ws?.delaysEncounteredCount || 2)],
            ['Safety Observations', String(ws?.safetyObservationsCount || 3)],
            ['Week Start', ws?.weekStartDate || ''],
            ['Week End', ws?.weekEndDate || ''],
        ]);
    }
    /** Export from Report Preview Modal */
    exportReportModal(format) {
        const rpt = this.selectedReport;
        if (!rpt)
            return;
        if (format === 'excel') {
            this.downloadCSV(rpt.title.replace(/[^a-zA-Z0-9]/g, '_'), [
                ['BuildTrack – ' + rpt.title],
                ['Generated: ' + new Date().toLocaleDateString()],
                [''],
                ['#', 'Section'],
                ...rpt.contents.map((c, i) => [String(i + 1), c])
            ]);
        }
        else {
            const html = `<html><head><title>${rpt.title}</title>
        <style>body{font-family:Arial,sans-serif;padding:40px;color:#222;}h1{font-size:20px;color:#0d6efd;border-bottom:2px solid #0d6efd;padding-bottom:8px;}p{color:#666;font-size:13px;}ul{margin-top:16px;}li{margin-bottom:8px;font-size:14px;}footer{margin-top:40px;font-size:11px;color:#aaa;}</style>
        </head><body>
        <h1>${rpt.title}</h1><p>${rpt.description}</p><p>Generated: ${new Date().toLocaleString()}</p>
        <ul>${rpt.contents.map(c => `<li>${c}</li>`).join('')}</ul>
        <footer>BuildTrack – Project Manager Workspace – Confidential</footer>
        </body></html>`;
            const blob = new Blob([html], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = rpt.title.replace(/[^a-zA-Z0-9]/g, '_') + '.html';
            a.click();
            URL.revokeObjectURL(url);
        }
        this.closeReportModal();
    }
    /** Budget export */
    exportBudget() {
        const projs = this.managedProjects();
        const rows = projs.length > 0
            ? projs.map(p => [p.name, '$' + p.budget.toLocaleString(), '$' + p.spent.toLocaleString(), '$' + (p.budget - p.spent).toLocaleString(), p.progress + '%', p.status])
            : [['Vanguard Heights Tower', '$12,500,000', '$9,100,000', '$3,400,000', '65%', 'In Progress']];
        this.downloadCSV('Budget_Analysis', [
            ['BuildTrack – Budget Utilization Report'],
            ['Generated: ' + new Date().toLocaleDateString()],
            [''],
            ['Project', 'Committed Budget', 'Spent To Date', 'Remaining', 'Progress', 'Status'],
            ...rows
        ]);
    }
    downloadReport(format, reportName) {
        if (reportName === 'Resource_Allocations') {
            this.exportAllocations();
        }
        else {
            console.log(`Downloading ${reportName} in ${format} format...`);
        }
    }
    static ɵfac = function ProjectManagerDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProjectManagerDashboard)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProjectManagerDashboard, selectors: [["app-pm-dashboard"]], decls: 38, vars: 24, consts: [[1, "container-fluid", "p-0"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-md-center", "gap-3", "mb-4"], [1, "fw-bold", "text-dark", "mb-1"], [1, "text-muted", "mb-0"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-primary", "d-flex", "align-items-center", "gap-2", "shadow-sm", 3, "click"], [1, "bi", "bi-file-earmark-pdf-fill"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-lg-3"], ["title", "Managed Projects", "icon", "bi-briefcase-fill", "colorType", "primary", 3, "value"], ["title", "Total Equipment Pool", "icon", "bi-truck", "colorType", "success", 3, "value", "subtitle"], ["title", "Active Site Delays", "icon", "bi-hourglass-split", "colorType", "danger", 3, "value", "subtitle"], ["title", "Avg Resource Utilization", "icon", "bi-speedometer2", "colorType", "warning", "trendValue", "Live Calculated", "trendDirection", "up", 3, "value"], [1, "card", "border-0", "shadow-sm", "rounded-3", "mb-4"], [1, "row", "g-4"], [1, "card", "border-0", "shadow-sm", "rounded-3"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,0.5)"], [1, "card-body", "p-4"], [1, "bi", "bi-truck", "text-primary", "me-2"], [1, "text-muted", "mb-0", "small"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center"], ["type", "text", "placeholder", "Search equipment, ID, operator...", 1, "form-control", "form-control-sm", "w-auto", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", "w-auto", 3, "ngModelChange", "ngModel"], ["value", "ALL"], [3, "value"], ["value", "Available"], ["value", "Allocated"], ["value", "Operating"], ["value", "Idle"], ["value", "Under Maintenance"], ["value", "Out of Service"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle"], [1, "table-light", "text-muted", "uppercase", "small"], [1, "col-6", "col-md-4", "col-lg-2"], [1, "p-3", "bg-light", "rounded-3", "text-center", "border"], [1, "text-muted", "fw-semibold", "d-block", "mb-1"], [1, "fw-bold", "text-dark", "mb-0"], [1, "p-3", "bg-success-subtle", "rounded-3", "text-center", "border", "border-success-subtle"], [1, "fw-bold", "text-success", "mb-0"], [1, "p-3", "bg-primary-subtle", "rounded-3", "text-center", "border", "border-primary-subtle"], [1, "fw-bold", "text-primary", "mb-0"], [1, "p-3", "bg-info-subtle", "rounded-3", "text-center", "border", "border-info-subtle"], [1, "fw-bold", "text-info", "mb-0"], [1, "p-3", "bg-warning-subtle", "rounded-3", "text-center", "border", "border-warning-subtle"], [1, "fw-bold", "text-warning", "mb-0"], [1, "p-3", "bg-secondary-subtle", "rounded-3", "text-center", "border", "border-secondary-subtle"], [1, "fw-bold", "text-secondary", "mb-0"], [1, "badge", "bg-light", "text-dark", "border", "fw-bold"], [1, "fw-bold", "text-dark"], [1, "text-muted", 2, "font-size", "11px"], [1, "badge", "bg-secondary-subtle", "text-secondary", "border"], [1, "bi", "bi-geo-alt", "text-danger", "me-1"], [1, "badge"], [1, "fw-bold"], [1, "d-flex", "gap-1"], [1, "btn", "btn-outline-primary", "btn-sm", "py-0.5", "px-2", "text-xs", "rounded-pill", 3, "click"], [1, "btn", "btn-primary", "btn-sm", "py-0.5", "px-2", "text-xs", "rounded-pill", 3, "routerLink", "queryParams"], [1, "btn", "btn-primary", "btn-sm", "py-0.5", "px-2", "text-xs", "rounded-pill", 3, "click", "routerLink", "queryParams"], [1, "col-xl-4"], [1, "fw-bold", "text-dark", "mb-2"], [1, "bi", "bi-calendar2-plus", "text-primary", "me-2"], [1, "text-muted", "small", "mb-3"], [3, "ngSubmit"], [1, "form-group", "mb-3"], [1, "form-label", "fw-semibold", "small", "text-muted"], ["name", "allocProj", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["name", "allocRes", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "change", "ngModel"], [1, "row", "g-2", "mb-3"], [1, "col-6"], ["type", "date", "name", "allocStart", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "change", "ngModel"], ["type", "date", "name", "allocEnd", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "change", "ngModel"], [1, "alert", "alert-danger", "p-2.5", "small", "mb-3", "border-danger-subtle"], ["type", "text", "name", "allocResp", "required", "", "placeholder", "e.g. Gaurav K (Lead Operator)", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["name", "allocNotes", "rows", "2", "placeholder", "e.g. Foundation excavation and basement tie beam placement", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2", "fw-bold", "shadow-sm"], [1, "bi", "bi-check2-circle", "me-1"], [1, "col-xl-8"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "badge", "bg-primary", "px-3", "py-1.5", "rounded-pill"], [1, "p-5", "text-center", "bg-light", "rounded", "text-muted"], [1, "bi", "bi-exclamation-triangle-fill", "me-1"], [1, "mb-0"], [1, "d-block", "text-dark", "fw-medium"], [1, "text-success", 2, "font-size", "10px"], [1, "btn", "btn-outline-success", "btn-xs", "py-1", "px-2.5", "rounded-pill", "fw-bold", "text-xs"], [1, "btn", "btn-outline-success", "btn-xs", "py-1", "px-2.5", "rounded-pill", "fw-bold", "text-xs", 3, "click"], [1, "bi", "bi-arrow-return-left", "me-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "bi", "bi-geo-alt-fill", "text-danger", "me-2"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-clockwise", "me-1"], [1, "col-md-6", "col-xl-4"], [1, "card", "border", "rounded-3", "p-3", "h-100", "shadow-sm"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "text-muted", "d-block", "mb-3"], [1, "p-2.5", "bg-light", "rounded-3", "small", "mb-3"], [1, "mb-1"], [1, "bi", "bi-building", "me-1.5", "text-primary"], [1, "bi", "bi-geo-alt", "me-1.5", "text-danger"], [1, "bi", "bi-person-badge", "me-1.5", "text-secondary"], [1, "d-flex", "justify-content-between", "align-items-center", "border-top", "pt-2", "mt-auto", "text-muted", "small", 2, "font-size", "11px"], [1, "btn", "btn-outline-primary", "btn-sm", "py-0.5", "px-2", "rounded-pill", "text-xs", "fw-bold", 3, "click"], [1, "row", "g-4", "mb-4"], [1, "col-lg-4"], [1, "card", "border", "rounded-3", "p-3", "bg-light-subtle", "h-100"], [1, "bi", "bi-clock-history", "text-primary", "me-2"], [1, "form-group", "mb-2.5"], ["name", "utlRes", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["name", "utlProj", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [1, "row", "g-2", "mb-2.5"], ["type", "date", "name", "utlDate", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "totalHrs", "min", "1", "max", "24", "step", "0.5", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "opHrs", "min", "0", "max", "24", "step", "0.5", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "idleHrs", "min", "0", "max", "24", "step", "0.5", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "utlRem", "placeholder", "e.g. Earthwork excavation on grid C", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "w-100", "py-2", "fw-bold"], [1, "bi", "bi-plus-circle", "me-1"], [1, "col-lg-8"], [1, "fw-bold", "text-dark", "mb-3"], [1, "bi", "bi-bar-chart-fill", "text-success", "me-2"], [1, "d-flex", "flex-column", "gap-3"], [1, "p-3", "bg-primary-subtle", "rounded-3", "border", "border-primary-subtle"], [1, "text-muted"], [1, "p-3", "bg-success-subtle", "rounded-3", "border", "border-success-subtle"], [1, "p-3", "bg-secondary-subtle", "rounded-3", "border", "border-secondary-subtle"], [1, "p-3", "bg-info-subtle", "rounded-3", "border", "border-info-subtle"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1", "small"], [1, "text-primary"], [1, "progress", 2, "height", "10px"], [1, "progress-bar", "bg-primary"], [1, "badge", "bg-success-subtle", "text-success", "border"], [1, "small", "text-muted"], [1, "bi", "bi-tools", "text-warning", "me-2"], [1, "bi", "bi-wrench-adjustable", "text-warning", "me-2"], ["name", "mntRes", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["name", "mntType", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "Preventive"], ["value", "Corrective"], ["value", "Emergency"], ["value", "Inspection"], ["type", "date", "name", "mntLast", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "mntNext", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-7"], ["type", "text", "name", "mntEng", "required", "", "placeholder", "e.g. CAT Tech Team", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-5"], ["type", "number", "name", "mntCost", "min", "0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["name", "mntStatus", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "Scheduled"], ["value", "In Progress"], ["value", "Completed"], ["name", "mntRemarks", "rows", "2", "placeholder", "e.g. Engine oil, fuel filters, track tensioning", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-warning", "text-dark", "btn-sm", "w-100", "py-2", "fw-bold"], [1, "bi", "bi-calendar-check", "me-1"], [1, "bi", "bi-clock-history", "text-secondary", "me-2"], [1, "text-muted", "small"], [1, "text-dark"], [1, "d-block", "text-muted", 2, "font-size", "10px"], [1, "bi", "bi-check-lg", "me-1"], [1, "d-flex", "flex-column", "gap-4"], [1, "p-3", "border", "rounded-3", "bg-light-subtle", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-md-center", "gap-3", "shadow-sm"], [1, "card", "border-0", "shadow-sm", "rounded-3", "mt-4"], [1, "bi", "bi-journal-text", "text-primary", "me-2"], [1, "btn", "btn-link", "btn-sm", "text-decoration-none", 3, "routerLink", "queryParams"], [1, "d-flex", "flex-column", "gap-2.5"], [1, "fw-bold", "text-danger", "mb-0"], [1, "bi", "bi-exclamation-octagon", "me-2"], [1, "badge", "bg-danger"], [1, "text-muted", "small", "mb-0"], [1, "d-flex", "flex-column", "gap-2"], [1, "list-group", "list-group-flush"], [1, "d-flex", "gap-3", "align-items-center"], ["alt", "Project image", 1, "rounded-3", "object-fit-cover", 2, "width", "70px", "height", "70px", 3, "src"], [1, "bi", "bi-geo-alt", "me-1"], [1, "d-flex", "gap-2", "align-items-center", "mt-1"], [1, "flex-grow-1", "mx-md-4", 2, "max-width", "250px"], [1, "d-flex", "justify-content-between", "mb-1", "small", "text-muted"], [1, "fw-bold", "text-primary"], [1, "progress", 2, "height", "8px"], [1, "text-start", "text-md-end"], [1, "fw-bold", "text-dark", "small"], [1, "text-muted", "d-block", "small"], [1, "p-3", "border", "rounded-3", "bg-light", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "badge", "bg-primary"], [1, "fw-bold", "text-dark", "mb-0", "small"], [1, "btn", "btn-outline-primary", "btn-sm", "rounded-pill", "text-xs", "fw-bold", "px-3", 3, "click"], [1, "p-2.5", "border", "rounded-3", "bg-danger-subtle", "border-danger-subtle"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "badge", "bg-danger", "text-uppercase", 2, "font-size", "10px"], [1, "fw-bold", "text-dark", "mb-1", "small"], [1, "text-danger", "fw-semibold", "d-block", 2, "font-size", "11px"], [1, "text-end", "mt-1"], [1, "btn", "btn-outline-success", "btn-xs", "py-0.5", "px-2", "rounded-pill", "fw-bold", "text-xs", 3, "click"], [1, "list-group-item", "px-0", "py-2.5"], [1, "badge", "text-uppercase"], [1, "text-muted", "small", "mb-0", 2, "font-size", "11px"], [1, "fw-bold", "text-dark", "mb-4"], [1, "bi", "bi-flag-fill", "text-success", "me-2"], [1, "text-muted", "d-block", "mb-2"], [1, "progress", "mb-3", 2, "height", "8px"], [1, "d-flex", "justify-content-between", "align-items-center", "text-muted", "small", "border-top", "pt-2", "mt-auto", 2, "font-size", "11px"], [1, "btn", "btn-outline-primary", "btn-sm", "py-0.5", "px-2.5", "rounded-pill", "text-xs", "fw-bold", 3, "click"], [1, "bi", "bi-journal-check", "text-primary", "me-2"], [1, "p-3", "border", "rounded-3", "bg-light-subtle", "shadow-sm"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "gap-2", "align-items-center"], [1, "badge", "bg-primary", "fw-bold"], [1, "badge", "bg-light", "text-dark", "border"], [1, "btn", "btn-outline-primary", "btn-sm", "py-0.5", "px-3", "rounded-pill", "text-xs", "fw-bold", 3, "click"], [1, "fw-bold", "text-danger", "mb-3"], [1, "bi", "bi-hourglass-split", "me-2"], [1, "btn", "btn-outline-success", "btn-sm", "py-0.5", "px-2", "rounded-pill", "text-xs", "fw-bold"], [1, "btn", "btn-outline-success", "btn-sm", "py-0.5", "px-2", "rounded-pill", "text-xs", "fw-bold", 3, "click"], [1, "bi", "bi-clipboard2-data-fill", "text-info", "me-2"], [1, "badge", "bg-info-subtle", "text-info", "border", "border-info-subtle", "fw-bold"], [1, "bi", "bi-graph-up-arrow", "text-primary", "me-2"], [1, "p-3", "bg-danger-subtle", "rounded-3", "border", "border-danger-subtle"], [1, "col-lg-6"], ["type", "bar", "title", "Budget Utilization ($ Millions)", 3, "labels", "data", "customColors"], ["type", "line", "title", "Expenditure Accumulation ($ Millions)", 3, "labels", "data"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "px-0", "py-3"], [1, "btn", "btn-outline-success", "btn-sm", 3, "click"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "shadow", "rounded-3"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title", "fw-bold"], [1, "bi", "bi-truck", "me-2"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body", "p-4"], [1, "badge", "bg-secondary", "fs-6"], [1, "row", "g-2", "p-3", "bg-light", "rounded-3", "small", "mb-3"], [1, "col-12"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "bi", "bi-file-earmark-text", "me-2"], [1, "row", "g-3", "my-2", "p-3", "bg-light", "rounded-3", "small"], [1, "col-sm-6"], [1, "d-flex", "align-items-center", "gap-3"], ["type", "range", "min", "0", "max", "100", 1, "form-range", "flex-grow-1", 3, "ngModelChange", "ngModel"], [1, "fw-bold", "fs-5", "text-primary"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "Pending"], ["value", "Delayed"], ["type", "button", 1, "btn", "btn-primary", "fw-bold", 3, "click"]], template: function ProjectManagerDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
            i0.ɵɵtext(4, "Project Manager Workspace");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Shradha S \u2022 Construction Lifecycle, Resource Allocation, Machinery Tracking & Maintenance");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 4)(8, "button", 5);
            i0.ɵɵlistener("click", function ProjectManagerDashboard_Template_button_click_8_listener() { return ctx.downloadReport("pdf", "Module4_Equipment_Resource_Report"); });
            i0.ɵɵelement(9, "i", 6);
            i0.ɵɵtext(10, " Export Resource Ledger ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "div", 7)(12, "div", 8);
            i0.ɵɵelement(13, "app-dashboard-card", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 8);
            i0.ɵɵelement(15, "app-dashboard-card", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 8);
            i0.ɵɵelement(17, "app-dashboard-card", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 8);
            i0.ɵɵelement(19, "app-dashboard-card", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(20, ProjectManagerDashboard_Conditional_20_Template, 57, 4, "div", 13);
            i0.ɵɵconditionalCreate(21, ProjectManagerDashboard_Conditional_21_Template, 53, 9, "div", 14);
            i0.ɵɵconditionalCreate(22, ProjectManagerDashboard_Conditional_22_Template, 15, 0, "div", 13);
            i0.ɵɵconditionalCreate(23, ProjectManagerDashboard_Conditional_23_Template, 82, 9, "div", 13);
            i0.ɵɵconditionalCreate(24, ProjectManagerDashboard_Conditional_24_Template, 99, 8, "div", 13);
            i0.ɵɵconditionalCreate(25, ProjectManagerDashboard_Conditional_25_Template, 36, 8, "div", 14);
            i0.ɵɵconditionalCreate(26, ProjectManagerDashboard_Conditional_26_Template, 8, 0, "div", 13);
            i0.ɵɵconditionalCreate(27, ProjectManagerDashboard_Conditional_27_Template, 8, 0, "div", 13);
            i0.ɵɵconditionalCreate(28, ProjectManagerDashboard_Conditional_28_Template, 26, 0, "div", 13);
            i0.ɵɵconditionalCreate(29, ProjectManagerDashboard_Conditional_29_Template, 8, 0, "div", 13);
            i0.ɵɵconditionalCreate(30, ProjectManagerDashboard_Conditional_30_Template, 6, 1, "div", 13);
            i0.ɵɵconditionalCreate(31, ProjectManagerDashboard_Conditional_31_Template, 1, 0, "app-workforce-management");
            i0.ɵɵconditionalCreate(32, ProjectManagerDashboard_Conditional_32_Template, 5, 10, "div", 14);
            i0.ɵɵconditionalCreate(33, ProjectManagerDashboard_Conditional_33_Template, 16, 0, "div", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(34, ProjectManagerDashboard_Conditional_34_Template, 46, 17, "div", 16);
            i0.ɵɵconditionalCreate(35, ProjectManagerDashboard_Conditional_35_Template, 31, 6, "div", 16);
            i0.ɵɵconditionalCreate(36, ProjectManagerDashboard_Conditional_36_Template, 32, 4, "div", 16);
            i0.ɵɵconditionalCreate(37, ProjectManagerDashboard_Conditional_37_Template, 1, 0, "app-procurement-management");
        } if (rf & 2) {
            let tmp_2_0;
            let tmp_5_0;
            let tmp_20_0;
            let tmp_21_0;
            let tmp_22_0;
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("value", ctx.managedProjects().length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.projectService.resources().length)("subtitle", (((tmp_2_0 = ctx.projectService.resourceSummary()) == null ? null : tmp_2_0.availableCount) || 0) + " Available for Allocation");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.managedDelays().length)("subtitle", ctx.managedDelays().length + " Bottlenecks Active");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", (((tmp_5_0 = ctx.projectService.resourceSummary()) == null ? null : tmp_5_0.averageUtilization) || 0) + "%");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "resources" ? 20 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "allocations" ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "tracking" ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "utilization" ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "maintenance" ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "projects" ? 25 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "milestones" ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "daily_feed" ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "delays" ? 28 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "activities" ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "weekly" ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "workforce" || ctx.activeModule === "team" ? 31 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "budget" ? 32 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "reports" ? 33 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_20_0 = ctx.selectedResourceDetail) ? 34 : -1, tmp_20_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_21_0 = ctx.selectedReportDetail) ? 35 : -1, tmp_21_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_22_0 = ctx.selectedMilestoneToEdit) ? 36 : -1, tmp_22_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "procurement" ? 37 : -1);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.RangeValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, i1.NgForm, RouterModule, i2.RouterLink, DashboardCardComponent, ChartsComponent, WorkforceManagementComponent, ProcurementManagementComponent, i3.DecimalPipe], styles: [".bg-light-subtle[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n}\n\n.timeline-step[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n\n.step-marker[_ngcontent-%COMP%] {\n  z-index: 2;\n  box-shadow: 0 0 0 4px #e0e7ff;\n}\n\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.tracking-wider[_ngcontent-%COMP%] {\n  letter-spacing: 0.05em;\n}\n\n.object-fit-cover[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n\n.min-h-200[_ngcontent-%COMP%] {\n  min-height: 200px;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProjectManagerDashboard, [{
        type: Component,
        args: [{ selector: 'app-pm-dashboard', standalone: true, imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent, ChartsComponent, WorkforceManagementComponent, ProcurementManagementComponent], template: "<div class=\"container-fluid p-0\">\n  \n  <!-- Header -->\n  <div class=\"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4\">\n    <div>\n      <h2 class=\"fw-bold text-dark mb-1\">Project Manager Workspace</h2>\n      <p class=\"text-muted mb-0\">Shradha S &bull; Construction Lifecycle, Resource Allocation, Machinery Tracking &amp; Maintenance</p>\n    </div>\n    <div class=\"d-flex gap-2\">\n      <button class=\"btn btn-outline-primary d-flex align-items-center gap-2 shadow-sm\" (click)=\"downloadReport('pdf', 'Module4_Equipment_Resource_Report')\">\n        <i class=\"bi bi-file-earmark-pdf-fill\"></i> Export Resource Ledger\n      </button>\n    </div>\n  </div>\n\n  <!-- KPI Grid -->\n  <div class=\"row g-3 mb-4\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Managed Projects\" [value]=\"managedProjects().length\" icon=\"bi-briefcase-fill\" colorType=\"primary\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Total Equipment Pool\" [value]=\"projectService.resources().length\" icon=\"bi-truck\" colorType=\"success\" [subtitle]=\"(projectService.resourceSummary()?.availableCount || 0) + ' Available for Allocation'\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Active Site Delays\" [value]=\"managedDelays().length\" icon=\"bi-hourglass-split\" colorType=\"danger\" [subtitle]=\"managedDelays().length + ' Bottlenecks Active'\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Avg Resource Utilization\" [value]=\"(projectService.resourceSummary()?.averageUtilization || 0) + '%'\" icon=\"bi-speedometer2\" colorType=\"warning\" trendValue=\"Live Calculated\" trendDirection=\"up\"></app-dashboard-card>\n    </div>\n  </div>\n\n  <!-- ================================================== -->\n  <!-- MODULE 4: 1. RESOURCE / EQUIPMENT CATALOG VIEW -->\n  <!-- ================================================== -->\n  @if (activeModule === 'resources') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        \n        <!-- Summary KPI Row -->\n        @if (projectService.resourceSummary(); as rs) {\n          <div class=\"row g-3 mb-4\">\n            <div class=\"col-6 col-md-4 col-lg-2\">\n              <div class=\"p-3 bg-light rounded-3 text-center border\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Total</small>\n                <h4 class=\"fw-bold text-dark mb-0\">{{ rs.totalEquipment }}</h4>\n              </div>\n            </div>\n            <div class=\"col-6 col-md-4 col-lg-2\">\n              <div class=\"p-3 bg-success-subtle rounded-3 text-center border border-success-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Available</small>\n                <h4 class=\"fw-bold text-success mb-0\">{{ rs.availableCount }}</h4>\n              </div>\n            </div>\n            <div class=\"col-6 col-md-4 col-lg-2\">\n              <div class=\"p-3 bg-primary-subtle rounded-3 text-center border border-primary-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Allocated</small>\n                <h4 class=\"fw-bold text-primary mb-0\">{{ rs.allocatedCount }}</h4>\n              </div>\n            </div>\n            <div class=\"col-6 col-md-4 col-lg-2\">\n              <div class=\"p-3 bg-info-subtle rounded-3 text-center border border-info-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Operating</small>\n                <h4 class=\"fw-bold text-info mb-0\">{{ rs.operatingCount }}</h4>\n              </div>\n            </div>\n            <div class=\"col-6 col-md-4 col-lg-2\">\n              <div class=\"p-3 bg-warning-subtle rounded-3 text-center border border-warning-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Maintenance</small>\n                <h4 class=\"fw-bold text-warning mb-0\">{{ rs.maintenanceCount }}</h4>\n              </div>\n            </div>\n            <div class=\"col-6 col-md-4 col-lg-2\">\n              <div class=\"p-3 bg-secondary-subtle rounded-3 text-center border border-secondary-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Idle</small>\n                <h4 class=\"fw-bold text-secondary mb-0\">{{ rs.idleCount }}</h4>\n              </div>\n            </div>\n          </div>\n        }\n\n        <!-- Filter & Search Toolbar -->\n        <div class=\"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4\">\n          <div>\n            <h5 class=\"fw-bold text-dark mb-1\"><i class=\"bi bi-truck text-primary me-2\"></i>Construction Machinery &amp; Equipment Registry</h5>\n            <p class=\"text-muted mb-0 small\">Catalog of construction resources, equipment specifications, and live allocation statuses.</p>\n          </div>\n          <div class=\"d-flex flex-wrap gap-2 align-items-center\">\n            <input type=\"text\" class=\"form-control form-control-sm w-auto\" placeholder=\"Search equipment, ID, operator...\" [(ngModel)]=\"resourceSearchQuery\">\n            <select class=\"form-select form-select-sm w-auto\" [(ngModel)]=\"resourceFilterCategory\">\n              <option value=\"ALL\">All Categories</option>\n              @for (cat of projectService.resourceCategories(); track cat.id) {\n                <option [value]=\"cat.id\">{{ cat.name }}</option>\n              }\n            </select>\n            <select class=\"form-select form-select-sm w-auto\" [(ngModel)]=\"resourceFilterStatus\">\n              <option value=\"ALL\">All Statuses</option>\n              <option value=\"Available\">Available</option>\n              <option value=\"Allocated\">Allocated</option>\n              <option value=\"Operating\">Operating</option>\n              <option value=\"Idle\">Idle</option>\n              <option value=\"Under Maintenance\">Under Maintenance</option>\n              <option value=\"Out of Service\">Out of Service</option>\n            </select>\n          </div>\n        </div>\n\n        <!-- Equipment Table -->\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover align-middle\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>Equipment ID</th>\n                <th>Machinery Name</th>\n                <th>Category</th>\n                <th>Current Project</th>\n                <th>Location</th>\n                <th>Status</th>\n                <th>Responsible Person</th>\n                <th>Hourly Rate</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (res of filteredResources(); track res.id) {\n                <tr>\n                  <td><span class=\"badge bg-light text-dark border fw-bold\">{{ res.id }}</span></td>\n                  <td>\n                    <div class=\"fw-bold text-dark\">{{ res.name }}</div>\n                    <small class=\"text-muted\" style=\"font-size: 11px;\">Model: {{ res.modelNumber || 'N/A' }}</small>\n                  </td>\n                  <td><span class=\"badge bg-secondary-subtle text-secondary border\">{{ res.categoryName }}</span></td>\n                  <td>{{ res.currentProjectName || 'None (Equipment Yard)' }}</td>\n                  <td><i class=\"bi bi-geo-alt text-danger me-1\"></i>{{ res.currentLocation }}</td>\n                  <td>\n                    <span class=\"badge\"\n                          [class.bg-success]=\"res.status === 'Available'\"\n                          [class.bg-primary]=\"res.status === 'Allocated'\"\n                          [class.bg-info]=\"res.status === 'Operating'\"\n                          [class.bg-secondary]=\"res.status === 'Idle'\"\n                          [class.bg-warning]=\"res.status === 'Under Maintenance'\"\n                          [class.bg-danger]=\"res.status === 'Out of Service'\">\n                      {{ res.status }}\n                    </span>\n                  </td>\n                  <td>{{ res.responsiblePerson }}</td>\n                  <td class=\"fw-bold\">${{ res.hourlyCost }}/hr</td>\n                  <td>\n                    <div class=\"d-flex gap-1\">\n                      <button class=\"btn btn-outline-primary btn-sm py-0.5 px-2 text-xs rounded-pill\" (click)=\"openResourceDetail(res)\">\n                        Details\n                      </button>\n                      @if (res.status === 'Available') {\n                        <a [routerLink]=\"[]\" [queryParams]=\"{module: 'allocations'}\" class=\"btn btn-primary btn-sm py-0.5 px-2 text-xs rounded-pill\" (click)=\"allocResourceId = res.id\">\n                          Allocate\n                        </a>\n                      }\n                    </div>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  }\n\n  <!-- ================================================== -->\n  <!-- MODULE 4: 2. EQUIPMENT ALLOCATION VIEW -->\n  <!-- ================================================== -->\n  @if (activeModule === 'allocations') {\n    <div class=\"row g-4\">\n      <div class=\"col-xl-4\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-2\"><i class=\"bi bi-calendar2-plus text-primary me-2\"></i>Allocate Equipment to Project</h5>\n            <p class=\"text-muted small mb-3\">Assign available construction machinery with automated date conflict prevention.</p>\n            \n            <form (ngSubmit)=\"submitAllocation()\">\n              \n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Target Project *</label>\n                <select class=\"form-select form-select-sm\" name=\"allocProj\" [(ngModel)]=\"allocProjectId\" required>\n                  @for (proj of projectService.projects(); track proj.id) {\n                    <option [value]=\"proj.id\">{{ proj.name }} ({{ proj.id }})</option>\n                  }\n                </select>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Equipment / Machinery *</label>\n                <select class=\"form-select form-select-sm\" name=\"allocRes\" [(ngModel)]=\"allocResourceId\" (change)=\"checkAvailabilityRealtime()\" required>\n                  @for (res of projectService.resources(); track res.id) {\n                    <option [value]=\"res.id\">\n                      {{ res.id }} - {{ res.name }} [{{ res.status }}]\n                    </option>\n                  }\n                </select>\n              </div>\n\n              <div class=\"row g-2 mb-3\">\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Allocation Date *</label>\n                  <input type=\"date\" name=\"allocStart\" [(ngModel)]=\"allocStartDate\" (change)=\"checkAvailabilityRealtime()\" required class=\"form-control form-control-sm\">\n                </div>\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Expected Return *</label>\n                  <input type=\"date\" name=\"allocEnd\" [(ngModel)]=\"allocEndDate\" (change)=\"checkAvailabilityRealtime()\" required class=\"form-control form-control-sm\">\n                </div>\n              </div>\n\n              @if (allocConflictWarning) {\n                <div class=\"alert alert-danger p-2.5 small mb-3 border-danger-subtle\">\n                  <i class=\"bi bi-exclamation-triangle-fill me-1\"></i> {{ allocConflictWarning }}\n                </div>\n              }\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Responsible Person / Operator *</label>\n                <input type=\"text\" name=\"allocResp\" [(ngModel)]=\"allocResponsiblePerson\" required class=\"form-control form-control-sm\" placeholder=\"e.g. Gaurav K (Lead Operator)\">\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Deployment Notes / Scope</label>\n                <textarea name=\"allocNotes\" [(ngModel)]=\"allocNotes\" rows=\"2\" class=\"form-control form-control-sm\" placeholder=\"e.g. Foundation excavation and basement tie beam placement\"></textarea>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary w-100 py-2 fw-bold shadow-sm\">\n                <i class=\"bi bi-check2-circle me-1\"></i> Confirm &amp; Dispatch Equipment\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xl-8\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <div class=\"d-flex justify-content-between align-items-center mb-3\">\n              <h5 class=\"fw-bold text-dark mb-0\">Active &amp; Historical Equipment Allocations</h5>\n              <span class=\"badge bg-primary px-3 py-1.5 rounded-pill\">{{ projectService.resourceAllocations().length }} Total Records</span>\n            </div>\n\n            @if (projectService.resourceAllocations().length === 0) {\n              <div class=\"p-5 text-center bg-light rounded text-muted\">\n                <p class=\"mb-0\">No active equipment allocations found.</p>\n              </div>\n            } @else {\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover align-middle\">\n                  <thead class=\"table-light text-muted uppercase small\">\n                    <tr>\n                      <th>Allocation ID</th>\n                      <th>Equipment</th>\n                      <th>Project</th>\n                      <th>Allocation Period</th>\n                      <th>Responsible Person</th>\n                      <th>Status</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    @for (a of projectService.resourceAllocations(); track a.id) {\n                      <tr>\n                        <td><span class=\"badge bg-light text-dark border fw-bold\">{{ a.id }}</span></td>\n                        <td>\n                          <div class=\"fw-bold text-dark\">{{ a.resourceName }}</div>\n                          <small class=\"text-muted\" style=\"font-size: 11px;\">ID: {{ a.resourceId }} &bull; {{ a.resourceCategory }}</small>\n                        </td>\n                        <td><strong>{{ a.projectName }}</strong></td>\n                        <td>\n                          <small class=\"d-block text-dark fw-medium\">{{ a.allocationDate }} &rarr; {{ a.expectedReturnDate }}</small>\n                          @if (a.actualReturnDate) {\n                            <small class=\"text-success\" style=\"font-size: 10px;\">Returned on {{ a.actualReturnDate }}</small>\n                          }\n                        </td>\n                        <td>{{ a.responsiblePerson }}</td>\n                        <td>\n                          <span class=\"badge\" [class.bg-primary]=\"a.status === 'Allocated' || a.status === 'Active'\" [class.bg-success]=\"a.status === 'Returned'\">\n                            {{ a.status }}\n                          </span>\n                        </td>\n                        <td>\n                          @if (a.status === 'Allocated' || a.status === 'Active') {\n                            <button class=\"btn btn-outline-success btn-xs py-1 px-2.5 rounded-pill fw-bold text-xs\" (click)=\"returnEquipment(a.id)\">\n                              <i class=\"bi bi-arrow-return-left me-1\"></i> Return\n                            </button>\n                          }\n                        </td>\n                      </tr>\n                    }\n                  </tbody>\n                </table>\n              </div>\n            }\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- ================================================== -->\n  <!-- MODULE 4: 3. MACHINERY TRACKING VIEW -->\n  <!-- ================================================== -->\n  @if (activeModule === 'tracking') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        <div class=\"d-flex justify-content-between align-items-center mb-4\">\n          <div>\n            <h5 class=\"fw-bold text-dark mb-1\"><i class=\"bi bi-geo-alt-fill text-danger me-2\"></i>Live Machinery &amp; Fleet Tracking</h5>\n            <p class=\"text-muted mb-0 small\">Real-time spatial deployment, current jobsite allocations, and equipment readiness statuses.</p>\n          </div>\n          <button class=\"btn btn-outline-primary btn-sm\" (click)=\"projectService.loadModule4Data()\"><i class=\"bi bi-arrow-clockwise me-1\"></i>Refresh Fleet</button>\n        </div>\n\n        <div class=\"row g-4\">\n          @for (res of projectService.resources(); track res.id) {\n            <div class=\"col-md-6 col-xl-4\">\n              <div class=\"card border rounded-3 p-3 h-100 shadow-sm\"\n                   [class.border-success]=\"res.status === 'Available'\"\n                   [class.border-primary]=\"res.status === 'Allocated' || res.status === 'Operating'\"\n                   [class.border-warning]=\"res.status === 'Under Maintenance'\"\n                   [class.border-danger]=\"res.status === 'Out of Service'\">\n                \n                <div class=\"d-flex justify-content-between align-items-start mb-2\">\n                  <span class=\"badge\"\n                        [class.bg-success]=\"res.status === 'Available'\"\n                        [class.bg-primary]=\"res.status === 'Allocated'\"\n                        [class.bg-info]=\"res.status === 'Operating'\"\n                        [class.bg-secondary]=\"res.status === 'Idle'\"\n                        [class.bg-warning]=\"res.status === 'Under Maintenance'\"\n                        [class.bg-danger]=\"res.status === 'Out of Service'\">\n                    {{ res.status }}\n                  </span>\n                  <span class=\"badge bg-light text-dark border fw-bold\">{{ res.id }}</span>\n                </div>\n\n                <h6 class=\"fw-bold text-dark mb-1\">{{ res.name }}</h6>\n                <small class=\"text-muted d-block mb-3\">Category: <strong>{{ res.categoryName }}</strong> &bull; Rate: ${{ res.hourlyCost }}/hr</small>\n\n                <div class=\"p-2.5 bg-light rounded-3 small mb-3\">\n                  <div class=\"mb-1\"><i class=\"bi bi-building me-1.5 text-primary\"></i>Project: <strong>{{ res.currentProjectName || 'Unassigned (Yard)' }}</strong></div>\n                  <div class=\"mb-1\"><i class=\"bi bi-geo-alt me-1.5 text-danger\"></i>Location: <strong>{{ res.currentLocation }}</strong></div>\n                  <div><i class=\"bi bi-person-badge me-1.5 text-secondary\"></i>Operator: <strong>{{ res.responsiblePerson }}</strong></div>\n                </div>\n\n                <div class=\"d-flex justify-content-between align-items-center border-top pt-2 mt-auto text-muted small\" style=\"font-size: 11px;\">\n                  <span>SN: {{ res.serialNumber || 'N/A' }}</span>\n                  <button class=\"btn btn-outline-primary btn-sm py-0.5 px-2 rounded-pill text-xs fw-bold\" (click)=\"openResourceDetail(res)\">\n                    View Specs\n                  </button>\n                </div>\n\n              </div>\n            </div>\n          }\n        </div>\n\n      </div>\n    </div>\n  }\n\n  <!-- ================================================== -->\n  <!-- MODULE 4: 4. RESOURCE UTILIZATION VIEW -->\n  <!-- ================================================== -->\n  @if (activeModule === 'utilization') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        \n        <!-- Summary KPI Row -->\n        @if (projectService.utilizationSummary(); as us) {\n          <div class=\"row g-3 mb-4\">\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 bg-primary-subtle rounded-3 border border-primary-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Overall Utilization</small>\n                <h3 class=\"fw-bold text-primary mb-0\">{{ us.overallUtilizationPercentage }}%</h3>\n                <small class=\"text-muted\">Auto-calculated from shift logs</small>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 bg-success-subtle rounded-3 border border-success-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Total Operating Hours</small>\n                <h3 class=\"fw-bold text-success mb-0\">{{ us.totalOperatingHours }} hrs</h3>\n                <small class=\"text-muted\">Active machine run-time</small>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 bg-secondary-subtle rounded-3 border border-secondary-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Total Idle Hours</small>\n                <h3 class=\"fw-bold text-secondary mb-0\">{{ us.totalIdleHours }} hrs</h3>\n                <small class=\"text-muted\">Standby / inspection pauses</small>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 bg-info-subtle rounded-3 border border-info-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Available Shift Pool</small>\n                <h3 class=\"fw-bold text-info mb-0\">{{ us.totalAvailableHours }} hrs</h3>\n                <small class=\"text-muted\">Total scheduled machine capacity</small>\n              </div>\n            </div>\n          </div>\n        }\n\n        <div class=\"row g-4 mb-4\">\n          <!-- Log Shift Hours Form -->\n          <div class=\"col-lg-4\">\n            <div class=\"card border rounded-3 p-3 bg-light-subtle h-100\">\n              <h6 class=\"fw-bold text-dark mb-2\"><i class=\"bi bi-clock-history text-primary me-2\"></i>Log Equipment Shift Hours</h6>\n              <p class=\"text-muted small mb-3\">Record operating vs idle hours for automated utilization calculation.</p>\n              \n              <form (ngSubmit)=\"submitUtilization()\">\n                <div class=\"form-group mb-2.5\">\n                  <label class=\"form-label fw-semibold small text-muted\">Equipment *</label>\n                  <select class=\"form-select form-select-sm\" name=\"utlRes\" [(ngModel)]=\"utlResourceId\" required>\n                    @for (res of projectService.resources(); track res.id) {\n                      <option [value]=\"res.id\">{{ res.id }} - {{ res.name }}</option>\n                    }\n                  </select>\n                </div>\n\n                <div class=\"form-group mb-2.5\">\n                  <label class=\"form-label fw-semibold small text-muted\">Project *</label>\n                  <select class=\"form-select form-select-sm\" name=\"utlProj\" [(ngModel)]=\"utlProjectId\" required>\n                    @for (proj of projectService.projects(); track proj.id) {\n                      <option [value]=\"proj.id\">{{ proj.name }}</option>\n                    }\n                  </select>\n                </div>\n\n                <div class=\"row g-2 mb-2.5\">\n                  <div class=\"col-6\">\n                    <label class=\"form-label fw-semibold small text-muted\">Usage Date *</label>\n                    <input type=\"date\" name=\"utlDate\" [(ngModel)]=\"utlDate\" required class=\"form-control form-control-sm\">\n                  </div>\n                  <div class=\"col-6\">\n                    <label class=\"form-label fw-semibold small text-muted\">Total Shift Hours</label>\n                    <input type=\"number\" name=\"totalHrs\" [(ngModel)]=\"utlTotalHours\" min=\"1\" max=\"24\" step=\"0.5\" class=\"form-control form-control-sm\">\n                  </div>\n                </div>\n\n                <div class=\"row g-2 mb-2.5\">\n                  <div class=\"col-6\">\n                    <label class=\"form-label fw-semibold small text-muted\">Operating Hours *</label>\n                    <input type=\"number\" name=\"opHrs\" [(ngModel)]=\"utlOpHours\" min=\"0\" max=\"24\" step=\"0.5\" required class=\"form-control form-control-sm\">\n                  </div>\n                  <div class=\"col-6\">\n                    <label class=\"form-label fw-semibold small text-muted\">Idle Hours</label>\n                    <input type=\"number\" name=\"idleHrs\" [(ngModel)]=\"utlIdleHours\" min=\"0\" max=\"24\" step=\"0.5\" class=\"form-control form-control-sm\">\n                  </div>\n                </div>\n\n                <div class=\"form-group mb-3\">\n                  <label class=\"form-label fw-semibold small text-muted\">Activity / Remarks</label>\n                  <input type=\"text\" name=\"utlRem\" [(ngModel)]=\"utlRemarks\" class=\"form-control form-control-sm\" placeholder=\"e.g. Earthwork excavation on grid C\">\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-primary btn-sm w-100 py-2 fw-bold\">\n                  <i class=\"bi bi-plus-circle me-1\"></i> Log Usage Entry\n                </button>\n              </form>\n            </div>\n          </div>\n\n          <!-- Category Utilization Breakdown -->\n          <div class=\"col-lg-8\">\n            <div class=\"card border rounded-3 p-3 bg-light-subtle h-100\">\n              <h6 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-bar-chart-fill text-success me-2\"></i>Utilization Performance by Equipment Category</h6>\n              \n              <div class=\"d-flex flex-column gap-3\">\n                @for (cat of projectService.utilizationSummary()?.byCategory || []; track cat.categoryId) {\n                  <div>\n                    <div class=\"d-flex justify-content-between align-items-center mb-1 small\">\n                      <span class=\"fw-bold text-dark\">{{ cat.categoryName }}</span>\n                      <span class=\"text-muted\">{{ cat.operatingHours }} Operating hrs &bull; <strong class=\"text-primary\">{{ cat.utilizationPercentage }}%</strong></span>\n                    </div>\n                    <div class=\"progress\" style=\"height: 10px;\">\n                      <div class=\"progress-bar bg-primary\" [style.width.%]=\"cat.utilizationPercentage\"></div>\n                    </div>\n                  </div>\n                }\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Shift Utilization Logs Table -->\n        <h6 class=\"fw-bold text-dark mb-3\">Recent Shift Usage Logs</h6>\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover align-middle\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>Date</th>\n                <th>Equipment</th>\n                <th>Project</th>\n                <th>Operating Hours</th>\n                <th>Idle Hours</th>\n                <th>Total Capacity</th>\n                <th>Utilization %</th>\n                <th>Remarks</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (u of projectService.resourceUtilizations(); track u.id) {\n                <tr>\n                  <td class=\"fw-bold\">{{ u.usageDate }}</td>\n                  <td>\n                    <div class=\"fw-bold text-dark\">{{ u.resourceName }}</div>\n                    <small class=\"text-muted\" style=\"font-size: 11px;\">ID: {{ u.resourceId }}</small>\n                  </td>\n                  <td>{{ u.projectName }}</td>\n                  <td><span class=\"badge bg-success-subtle text-success border\">{{ u.operatingHours }} hrs</span></td>\n                  <td><span class=\"badge bg-secondary-subtle text-secondary border\">{{ u.idleHours }} hrs</span></td>\n                  <td>{{ u.totalAvailableHours }} hrs</td>\n                  <td>\n                    <strong class=\"text-primary\">{{ u.utilizationPercentage }}%</strong>\n                  </td>\n                  <td class=\"small text-muted\">{{ u.remarks || '-' }}</td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  }\n\n  <!-- ================================================== -->\n  <!-- MODULE 4: 5. MAINTENANCE MANAGEMENT VIEW -->\n  <!-- ================================================== -->\n  @if (activeModule === 'maintenance') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        \n        <div class=\"d-flex justify-content-between align-items-center mb-4\">\n          <div>\n            <h5 class=\"fw-bold text-dark mb-1\"><i class=\"bi bi-tools text-warning me-2\"></i>Equipment Maintenance &amp; Servicing Hub</h5>\n            <p class=\"text-muted mb-0 small\">Schedule preventive/corrective overhauls, preserve complete maintenance history, and track overdue equipment.</p>\n          </div>\n        </div>\n\n        <div class=\"row g-4 mb-4\">\n          <!-- Schedule Maintenance Form -->\n          <div class=\"col-lg-4\">\n            <div class=\"card border rounded-3 p-3 bg-light-subtle h-100\">\n              <h6 class=\"fw-bold text-dark mb-2\"><i class=\"bi bi-wrench-adjustable text-warning me-2\"></i>Schedule Maintenance Service</h6>\n              \n              <form (ngSubmit)=\"submitMaintenance()\">\n                <div class=\"form-group mb-2.5\">\n                  <label class=\"form-label fw-semibold small text-muted\">Equipment *</label>\n                  <select class=\"form-select form-select-sm\" name=\"mntRes\" [(ngModel)]=\"mntResourceId\" required>\n                    @for (res of projectService.resources(); track res.id) {\n                      <option [value]=\"res.id\">{{ res.id }} - {{ res.name }} [{{ res.status }}]</option>\n                    }\n                  </select>\n                </div>\n\n                <div class=\"form-group mb-2.5\">\n                  <label class=\"form-label fw-semibold small text-muted\">Maintenance Type *</label>\n                  <select class=\"form-select form-select-sm\" name=\"mntType\" [(ngModel)]=\"mntType\" required>\n                    <option value=\"Preventive\">Preventive (Routine Check)</option>\n                    <option value=\"Corrective\">Corrective (Part Repair)</option>\n                    <option value=\"Emergency\">Emergency (Breakdown)</option>\n                    <option value=\"Inspection\">Inspection (Safety/Audit)</option>\n                  </select>\n                </div>\n\n                <div class=\"row g-2 mb-2.5\">\n                  <div class=\"col-6\">\n                    <label class=\"form-label fw-semibold small text-muted\">Last Service *</label>\n                    <input type=\"date\" name=\"mntLast\" [(ngModel)]=\"mntLastDate\" required class=\"form-control form-control-sm\">\n                  </div>\n                  <div class=\"col-6\">\n                    <label class=\"form-label fw-semibold small text-muted\">Next Service *</label>\n                    <input type=\"date\" name=\"mntNext\" [(ngModel)]=\"mntNextDate\" required class=\"form-control form-control-sm\">\n                  </div>\n                </div>\n\n                <div class=\"row g-2 mb-2.5\">\n                  <div class=\"col-7\">\n                    <label class=\"form-label fw-semibold small text-muted\">Service Engineer *</label>\n                    <input type=\"text\" name=\"mntEng\" [(ngModel)]=\"mntEngineer\" required class=\"form-control form-control-sm\" placeholder=\"e.g. CAT Tech Team\">\n                  </div>\n                  <div class=\"col-5\">\n                    <label class=\"form-label fw-semibold small text-muted\">Cost ($)</label>\n                    <input type=\"number\" name=\"mntCost\" [(ngModel)]=\"mntCost\" min=\"0\" class=\"form-control form-control-sm\">\n                  </div>\n                </div>\n\n                <div class=\"form-group mb-2.5\">\n                  <label class=\"form-label fw-semibold small text-muted\">Maintenance Status</label>\n                  <select class=\"form-select form-select-sm\" name=\"mntStatus\" [(ngModel)]=\"mntStatus\">\n                    <option value=\"Scheduled\">Scheduled</option>\n                    <option value=\"In Progress\">In Progress (Under Maintenance)</option>\n                    <option value=\"Completed\">Completed</option>\n                  </select>\n                </div>\n\n                <div class=\"form-group mb-3\">\n                  <label class=\"form-label fw-semibold small text-muted\">Remarks / Checklist</label>\n                  <textarea name=\"mntRemarks\" [(ngModel)]=\"mntRemarks\" rows=\"2\" class=\"form-control form-control-sm\" placeholder=\"e.g. Engine oil, fuel filters, track tensioning\"></textarea>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-warning text-dark btn-sm w-100 py-2 fw-bold\">\n                  <i class=\"bi bi-calendar-check me-1\"></i> Register Maintenance Order\n                </button>\n              </form>\n            </div>\n          </div>\n\n          <!-- Multi-Record Maintenance History -->\n          <div class=\"col-lg-8\">\n            <div class=\"card border rounded-3 p-3 bg-light-subtle h-100\">\n              <h6 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-clock-history text-secondary me-2\"></i>Complete Maintenance History &amp; Records</h6>\n              <p class=\"text-muted small\">Historical multi-service lifecycle records are preserved for every machine and never overwritten.</p>\n\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover align-middle\">\n                  <thead class=\"table-light text-muted uppercase small\">\n                    <tr>\n                      <th>Record ID</th>\n                      <th>Equipment</th>\n                      <th>Type</th>\n                      <th>Next Due Date</th>\n                      <th>Service Engineer</th>\n                      <th>Cost</th>\n                      <th>Status</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    @for (m of projectService.maintenanceRecords(); track m.id) {\n                      <tr>\n                        <td><span class=\"badge bg-light text-dark border fw-bold\">{{ m.id }}</span></td>\n                        <td>\n                          <div class=\"fw-bold text-dark\">{{ m.resourceName }}</div>\n                          <small class=\"text-muted\" style=\"font-size: 11px;\">ID: {{ m.resourceId }}</small>\n                        </td>\n                        <td><span class=\"badge bg-secondary-subtle text-secondary border\">{{ m.maintenanceType }}</span></td>\n                        <td>\n                          <strong class=\"text-dark\">{{ m.nextMaintenanceDate }}</strong>\n                          <small class=\"d-block text-muted\" style=\"font-size: 10px;\">Last: {{ m.lastMaintenanceDate }}</small>\n                        </td>\n                        <td>{{ m.serviceEngineer }}</td>\n                        <td class=\"fw-bold\">${{ m.maintenanceCost | number:'1.0-0' }}</td>\n                        <td>\n                          <span class=\"badge\"\n                                [class.bg-warning]=\"m.status === 'Scheduled' || m.status === 'In Progress'\"\n                                [class.bg-success]=\"m.status === 'Completed'\"\n                                [class.bg-danger]=\"m.status === 'Overdue'\">\n                            {{ m.status }}\n                          </span>\n                        </td>\n                        <td>\n                          @if (m.status !== 'Completed') {\n                            <button class=\"btn btn-outline-success btn-xs py-1 px-2.5 rounded-pill fw-bold text-xs\" (click)=\"completeMaintenance(m.id)\">\n                              <i class=\"bi bi-check-lg me-1\"></i> Mark Done\n                            </button>\n                          }\n                        </td>\n                      </tr>\n                    }\n                  </tbody>\n                </table>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- EXISTING MODULE 1, 2, 3 VIEWS -->\n  <!-- ========================================== -->\n  @if (activeModule === 'projects') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-8\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Live Projects Progress Oversight</h5>\n            \n            <div class=\"d-flex flex-column gap-4\">\n              @for (proj of managedProjects(); track proj.id) {\n                <div class=\"p-3 border rounded-3 bg-light-subtle d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 shadow-sm\">\n                  <div class=\"d-flex gap-3 align-items-center\">\n                    <img [src]=\"proj.image\" alt=\"Project image\" class=\"rounded-3 object-fit-cover\" style=\"width: 70px; height: 70px;\">\n                    <div>\n                      <h6 class=\"fw-bold text-dark mb-1\">{{ proj.name }}</h6>\n                      <p class=\"text-muted mb-0 small\"><i class=\"bi bi-geo-alt me-1\"></i>{{ proj.location }}</p>\n                      <div class=\"d-flex gap-2 align-items-center mt-1\">\n                        <small class=\"badge\" \n                               [class.bg-success]=\"proj.status === 'Completed'\"\n                               [class.bg-primary]=\"proj.status === 'In Progress'\"\n                               [class.bg-warning]=\"proj.status === 'Planning'\"\n                               [class.bg-danger]=\"proj.status === 'Delayed'\">\n                          {{ proj.status }}\n                        </small>\n                        <small class=\"text-muted\" style=\"font-size: 11px;\">ID: {{ proj.id }}</small>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"flex-grow-1 mx-md-4\" style=\"max-width: 250px;\">\n                    <div class=\"d-flex justify-content-between mb-1 small text-muted\">\n                      <span>Cumulative Progress</span>\n                      <span class=\"fw-bold text-primary\">{{ proj.progress }}%</span>\n                    </div>\n                    <div class=\"progress\" style=\"height: 8px;\">\n                      <div class=\"progress-bar bg-primary\" [style.width.%]=\"proj.progress\"></div>\n                    </div>\n                  </div>\n\n                  <div class=\"text-start text-md-end\">\n                    <div class=\"fw-bold text-dark small\">Budget: ${{ proj.budget | number:'1.0-0' }}</div>\n                    <small class=\"text-muted d-block small\">Spent: ${{ proj.spent | number:'1.0-0' }}</small>\n                  </div>\n                </div>\n              }\n            </div>\n          </div>\n        </div>\n\n        <!-- Recent Daily Reports Stream for PM -->\n        <div class=\"card border-0 shadow-sm rounded-3 mt-4\">\n          <div class=\"card-body p-4\">\n            <div class=\"d-flex justify-content-between align-items-center mb-3\">\n              <h5 class=\"fw-bold text-dark mb-0\"><i class=\"bi bi-journal-text text-primary me-2\"></i>Latest Daily Progress Filed by Site Engineers</h5>\n              <a [routerLink]=\"[]\" [queryParams]=\"{module: 'daily_feed'}\" class=\"btn btn-link btn-sm text-decoration-none\">View All Feed &rarr;</a>\n            </div>\n\n            @if (managedDailyReports().length === 0) {\n              <p class=\"text-muted small\">No daily reports recorded yet.</p>\n            } @else {\n              <div class=\"d-flex flex-column gap-2.5\">\n                @for (rep of managedDailyReports().slice(0, 3); track rep.id) {\n                  <div class=\"p-3 border rounded-3 bg-light d-flex justify-content-between align-items-center\">\n                    <div>\n                      <div class=\"d-flex align-items-center gap-2 mb-1\">\n                        <span class=\"badge bg-primary\">{{ rep.reportDate }}</span>\n                        <span class=\"badge bg-secondary-subtle text-secondary border\">{{ rep.workCategory }}</span>\n                        <span class=\"badge bg-success-subtle text-success border\">+{{ rep.percentageWorkCompleted }}% Work</span>\n                        @if (rep.delayEncountered) {\n                          <span class=\"badge bg-danger\">Delay: {{ rep.delayReason }}</span>\n                        }\n                      </div>\n                      <h6 class=\"fw-bold text-dark mb-0 small\">{{ rep.activityPerformed }}</h6>\n                      <small class=\"text-muted\" style=\"font-size: 11px;\">Project: <strong>{{ rep.projectName }}</strong> &bull; Filed by {{ rep.siteEngineerName }}</small>\n                    </div>\n                    <button class=\"btn btn-outline-primary btn-sm rounded-pill text-xs fw-bold px-3\" (click)=\"openReportDetail(rep)\">\n                      Details\n                    </button>\n                  </div>\n                }\n              </div>\n            }\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4\">\n        <!-- Active Site Delays panel -->\n        <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n          <div class=\"card-body p-4\">\n            <div class=\"d-flex justify-content-between align-items-center mb-3\">\n              <h5 class=\"fw-bold text-danger mb-0\"><i class=\"bi bi-exclamation-octagon me-2\"></i>Active Site Delays</h5>\n              <span class=\"badge bg-danger\">{{ managedDelays().length }}</span>\n            </div>\n            \n            @if (managedDelays().length === 0) {\n              <p class=\"text-muted small mb-0\">No active delays reported on your sites.</p>\n            } @else {\n              <div class=\"d-flex flex-column gap-2\">\n                @for (d of managedDelays().slice(0, 4); track d.id) {\n                  <div class=\"p-2.5 border rounded-3 bg-danger-subtle border-danger-subtle\">\n                    <div class=\"d-flex justify-content-between align-items-center mb-1\">\n                      <span class=\"badge bg-danger text-uppercase\" style=\"font-size: 10px;\">{{ d.impactOnProject }} Impact</span>\n                      <small class=\"text-muted\" style=\"font-size: 11px;\">{{ d.date }}</small>\n                    </div>\n                    <h6 class=\"fw-bold text-dark mb-1 small\">{{ d.affectedActivity }}</h6>\n                    <small class=\"text-danger fw-semibold d-block\" style=\"font-size: 11px;\">Reason: {{ d.delayReason }} ({{ d.delayDuration }})</small>\n                    @if (d.status === 'Active') {\n                      <div class=\"text-end mt-1\">\n                        <button class=\"btn btn-outline-success btn-xs py-0.5 px-2 rounded-pill fw-bold text-xs\" (click)=\"resolveDelay(d.id)\">\n                          Mark Resolved\n                        </button>\n                      </div>\n                    }\n                  </div>\n                }\n              </div>\n            }\n          </div>\n        </div>\n\n        <!-- Project Issues panel -->\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Safety &amp; Quality Issues</h5>\n            @if (projectIssues().length === 0) {\n              <p class=\"text-muted small mb-0\">No active issues on your projects.</p>\n            } @else {\n              <div class=\"list-group list-group-flush\">\n                @for (issue of projectIssues().slice(0, 3); track issue.id) {\n                  <div class=\"list-group-item px-0 py-2.5\">\n                    <div class=\"d-flex justify-content-between align-items-center mb-1\">\n                      <span class=\"badge text-uppercase\" \n                            [class.bg-danger]=\"issue.severity === 'Critical' || issue.severity === 'High'\"\n                            [class.bg-warning]=\"issue.severity === 'Medium'\"\n                            [class.bg-info]=\"issue.severity === 'Low'\">\n                        {{ issue.severity }}\n                      </span>\n                      <small class=\"text-muted\" style=\"font-size: 11px;\">{{ issue.reportedDate }}</small>\n                    </div>\n                    <h6 class=\"fw-bold text-dark mb-1 small\">{{ issue.title }}</h6>\n                    <p class=\"text-muted small mb-0\" style=\"font-size: 11px;\">{{ issue.description }}</p>\n                  </div>\n                }\n              </div>\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'milestones') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-4\"><i class=\"bi bi-flag-fill text-success me-2\"></i>Milestones &amp; Cumulative Progress Management</h5>\n        <div class=\"row g-4\">\n          @for (m of managedMilestones(); track m.id) {\n            <div class=\"col-md-6 col-xl-4\">\n              <div class=\"card border rounded-3 p-3 h-100 shadow-sm\">\n                <div class=\"d-flex justify-content-between align-items-start mb-2\">\n                  <span class=\"badge\" [class.bg-success]=\"m.status === 'Completed'\" [class.bg-primary]=\"m.status === 'In Progress'\" [class.bg-warning]=\"m.status === 'Pending'\" [class.bg-danger]=\"m.status === 'Delayed'\">{{ m.status }}</span>\n                  <span class=\"fw-bold text-primary\">{{ m.progressPercentage }}%</span>\n                </div>\n                <h6 class=\"fw-bold text-dark mb-1\">{{ m.name }}</h6>\n                <small class=\"text-muted d-block mb-2\">Project: <strong>{{ m.projectName }}</strong></small>\n                <div class=\"progress mb-3\" style=\"height: 8px;\">\n                  <div class=\"progress-bar bg-primary\" [style.width.%]=\"m.progressPercentage\"></div>\n                </div>\n                <div class=\"d-flex justify-content-between align-items-center text-muted small border-top pt-2 mt-auto\" style=\"font-size: 11px;\">\n                  <span>{{ m.plannedStartDate }} &rarr; {{ m.plannedEndDate }}</span>\n                  <button class=\"btn btn-outline-primary btn-sm py-0.5 px-2.5 rounded-pill text-xs fw-bold\" (click)=\"openEditMilestone(m)\">Edit</button>\n                </div>\n              </div>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'daily_feed') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-journal-check text-primary me-2\"></i>Daily Progress Reports Feed</h5>\n        <div class=\"d-flex flex-column gap-3\">\n          @for (rep of managedDailyReports(); track rep.id) {\n            <div class=\"p-3 border rounded-3 bg-light-subtle shadow-sm\">\n              <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                <div class=\"d-flex gap-2 align-items-center\">\n                  <span class=\"badge bg-primary fw-bold\">{{ rep.reportDate }}</span>\n                  <span class=\"badge bg-secondary-subtle text-secondary border\">{{ rep.workCategory }}</span>\n                  <span class=\"badge bg-success-subtle text-success border\">+{{ rep.percentageWorkCompleted }}% Progress</span>\n                  <span class=\"badge bg-light text-dark border\">{{ rep.projectName }}</span>\n                </div>\n                <button class=\"btn btn-outline-primary btn-sm py-0.5 px-3 rounded-pill text-xs fw-bold\" (click)=\"openReportDetail(rep)\">View Details</button>\n              </div>\n              <h6 class=\"fw-bold text-dark mb-1\">{{ rep.activityPerformed }}</h6>\n              <small class=\"text-muted\" style=\"font-size: 11px;\">Contractor: <strong>{{ rep.contractorName || 'Vance Concrete Ltd' }}</strong> &bull; Workers: {{ rep.workersPresent }} Present</small>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'delays') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-danger mb-3\"><i class=\"bi bi-hourglass-split me-2\"></i>Active Site Delays &amp; Bottlenecks</h5>\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover align-middle\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>Date</th>\n                <th>Project</th>\n                <th>Affected Activity</th>\n                <th>Delay Reason</th>\n                <th>Duration</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (d of managedDelays(); track d.id) {\n                <tr>\n                  <td class=\"fw-bold\">{{ d.date }}</td>\n                  <td>{{ d.projectName }}</td>\n                  <td>{{ d.affectedActivity }}</td>\n                  <td><span class=\"badge bg-light text-dark border\">{{ d.delayReason }}</span></td>\n                  <td>{{ d.delayDuration }}</td>\n                  <td><span class=\"badge\" [class.bg-success]=\"d.status === 'Resolved'\" [class.bg-danger]=\"d.status === 'Active'\">{{ d.status }}</span></td>\n                  <td>\n                    @if (d.status === 'Active') {\n                      <button class=\"btn btn-outline-success btn-sm py-0.5 px-2 rounded-pill text-xs fw-bold\" (click)=\"resolveDelay(d.id)\">Resolve</button>\n                    }\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'activities') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-clipboard2-data-fill text-info me-2\"></i>Site Activities Log</h5>\n        <div class=\"d-flex flex-column gap-3\">\n          @for (a of managedActivityLogs(); track a.id) {\n            <div class=\"p-3 border rounded-3 bg-light-subtle shadow-sm\">\n              <div class=\"d-flex justify-content-between align-items-center mb-1\">\n                <span class=\"badge bg-info-subtle text-info border border-info-subtle fw-bold\">{{ a.activityType }}</span>\n                <small class=\"text-muted\">{{ a.date }} at {{ a.time }}</small>\n              </div>\n              <h6 class=\"fw-bold text-dark mb-1\">{{ a.description }}</h6>\n              <small class=\"text-muted\" style=\"font-size: 11px;\">Responsible: <strong>{{ a.responsiblePerson }}</strong> &bull; Logged by {{ a.loggedByName }}</small>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'weekly') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-graph-up-arrow text-primary me-2\"></i>Weekly Progress Analytics</h5>\n        @if (projectService.weeklySummary(); as ws) {\n          <div class=\"row g-3 mb-4\">\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 bg-primary-subtle rounded-3 border border-primary-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Weekly Delta</small>\n                <h3 class=\"fw-bold text-primary mb-0\">+{{ ws.weeklyProgressPercentage }}%</h3>\n                <small class=\"text-muted\">Total: {{ ws.overallProjectProgress }}%</small>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 bg-success-subtle rounded-3 border border-success-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Reports Filed</small>\n                <h3 class=\"fw-bold text-success mb-0\">{{ ws.totalReportsFiled }}</h3>\n                <small class=\"text-muted\">{{ ws.weekStartDate }} to {{ ws.weekEndDate }}</small>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 bg-info-subtle rounded-3 border border-info-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Worker Shifts</small>\n                <h3 class=\"fw-bold text-info mb-0\">{{ ws.totalWorkersUtilized }}</h3>\n                <small class=\"text-muted\">Workers checked in</small>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 bg-danger-subtle rounded-3 border border-danger-subtle\">\n                <small class=\"text-muted fw-semibold d-block mb-1\">Delays</small>\n                <h3 class=\"fw-bold text-danger mb-0\">{{ ws.delaysEncounteredCount }}</h3>\n                <small class=\"text-muted\">{{ ws.safetyObservationsCount }} Safety entries</small>\n              </div>\n            </div>\n          </div>\n        }\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'workforce' || activeModule === 'team') {\n    <app-workforce-management></app-workforce-management>\n  }\n\n  @if (activeModule === 'budget') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-6\">\n        <app-chart type=\"bar\" title=\"Budget Utilization ($ Millions)\" [labels]=\"['Vanguard Tower', 'Riverfront II', 'Metro Transit', 'Eco-Resort']\" [data]=\"[12.5, 8.2, 15.0, 5.4]\" [customColors]=\"['#0d6efd', '#198754', '#ffc107', '#dc3545']\"></app-chart>\n      </div>\n      <div class=\"col-lg-6\">\n        <app-chart type=\"line\" title=\"Expenditure Accumulation ($ Millions)\" [labels]=\"['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']\" [data]=\"[1.2, 2.5, 3.8, 5.0, 7.2, 9.5, 11.3]\"></app-chart>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'reports') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Project Management Reports</h5>\n        <div class=\"list-group list-group-flush\">\n          <div class=\"list-group-item d-flex justify-content-between align-items-center px-0 py-3\">\n            <div>\n              <h6 class=\"fw-bold text-dark mb-1\">Equipment &amp; Resource Allocation Statement (Module 4)</h6>\n              <p class=\"text-muted mb-0 small\">Overview of machine allocations, fleet utilization %, and scheduled maintenance records.</p>\n            </div>\n            <div class=\"d-flex gap-2\">\n              <button class=\"btn btn-outline-primary btn-sm\" (click)=\"downloadReport('pdf', 'Resource_Allocation_Statement')\">PDF</button>\n              <button class=\"btn btn-outline-success btn-sm\" (click)=\"downloadReport('xlsx', 'Resource_Allocation_Statement')\">Excel</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n</div>\n\n<!-- Resource Details Modal -->\n@if (selectedResourceDetail; as res) {\n  <div class=\"modal fade show d-block\" style=\"background: rgba(0,0,0,0.5);\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content border-0 shadow rounded-3\">\n        <div class=\"modal-header bg-primary text-white\">\n          <h5 class=\"modal-title fw-bold\"><i class=\"bi bi-truck me-2\"></i>{{ res.name }} &bull; {{ res.id }}</h5>\n          <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"closeResourceDetail()\"></button>\n        </div>\n        <div class=\"modal-body p-4\">\n          <div class=\"d-flex justify-content-between align-items-center mb-3\">\n            <span class=\"badge bg-secondary fs-6\">{{ res.categoryName }}</span>\n            <span class=\"badge\" [class.bg-success]=\"res.status === 'Available'\" [class.bg-primary]=\"res.status === 'Allocated'\" [class.bg-warning]=\"res.status === 'Under Maintenance'\">{{ res.status }}</span>\n          </div>\n\n          <div class=\"row g-2 p-3 bg-light rounded-3 small mb-3\">\n            <div class=\"col-6\"><strong>Current Location:</strong> {{ res.currentLocation }}</div>\n            <div class=\"col-6\"><strong>Current Project:</strong> {{ res.currentProjectName || 'Yard' }}</div>\n            <div class=\"col-6\"><strong>Responsible Person:</strong> {{ res.responsiblePerson }}</div>\n            <div class=\"col-6\"><strong>Hourly Cost:</strong> ${{ res.hourlyCost }}/hr</div>\n            <div class=\"col-6\"><strong>Model Number:</strong> {{ res.modelNumber || 'N/A' }}</div>\n            <div class=\"col-6\"><strong>Serial Number:</strong> {{ res.serialNumber || 'N/A' }}</div>\n            <div class=\"col-12\"><strong>Purchase Date:</strong> {{ res.purchaseDate || 'N/A' }}</div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeResourceDetail()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n}\n\n<!-- Daily Report Details Modal -->\n@if (selectedReportDetail; as rep) {\n  <div class=\"modal fade show d-block\" style=\"background: rgba(0,0,0,0.5);\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable\">\n      <div class=\"modal-content border-0 shadow rounded-3\">\n        <div class=\"modal-header bg-primary text-white\">\n          <h5 class=\"modal-title fw-bold\"><i class=\"bi bi-file-earmark-text me-2\"></i>Daily Progress Report &bull; {{ rep.id }}</h5>\n          <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"closeReportDetail()\"></button>\n        </div>\n        <div class=\"modal-body p-4\">\n          <h5 class=\"fw-bold text-dark mb-2\">{{ rep.activityPerformed }}</h5>\n          <div class=\"row g-3 my-2 p-3 bg-light rounded-3 small\">\n            <div class=\"col-sm-6\"><strong>Project:</strong> {{ rep.projectName }}</div>\n            <div class=\"col-sm-6\"><strong>Contractor:</strong> {{ rep.contractorName || 'Vance Concrete Ltd' }}</div>\n            <div class=\"col-sm-6\"><strong>Weather:</strong> {{ rep.weatherConditions }}</div>\n            <div class=\"col-sm-6\"><strong>Machinery:</strong> {{ rep.machineryUsed || 'None' }}</div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeReportDetail()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n}\n\n<!-- Milestone Edit Modal -->\n@if (selectedMilestoneToEdit; as m) {\n  <div class=\"modal fade show d-block\" style=\"background: rgba(0,0,0,0.5);\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content border-0 shadow rounded-3\">\n        <div class=\"modal-header bg-primary text-white\">\n          <h5 class=\"modal-title fw-bold\">Update Milestone &bull; {{ m.name }}</h5>\n          <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"closeEditMilestone()\"></button>\n        </div>\n        <div class=\"modal-body p-4\">\n          <div class=\"form-group mb-3\">\n            <label class=\"form-label fw-semibold small text-muted\">Progress (0-100%)</label>\n            <div class=\"d-flex align-items-center gap-3\">\n              <input type=\"range\" class=\"form-range flex-grow-1\" min=\"0\" max=\"100\" [(ngModel)]=\"editMilestoneProgress\">\n              <span class=\"fw-bold fs-5 text-primary\">{{ editMilestoneProgress }}%</span>\n            </div>\n          </div>\n          <div class=\"form-group mb-3\">\n            <label class=\"form-label fw-semibold small text-muted\">Status</label>\n            <select class=\"form-select\" [(ngModel)]=\"editMilestoneStatus\">\n              <option value=\"Pending\">Pending</option>\n              <option value=\"In Progress\">In Progress</option>\n              <option value=\"Completed\">Completed (100%)</option>\n              <option value=\"Delayed\">Delayed</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeEditMilestone()\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary fw-bold\" (click)=\"saveMilestoneProgress()\">Save Progress</button>\n        </div>\n      </div>\n    </div>\n  </div>\n}\n\n@if (activeModule === 'procurement') {\n  <app-procurement-management></app-procurement-management>\n}\n", styles: [".bg-light-subtle {\n  background-color: #f8fafc;\n}\n\n.timeline-step {\n  padding-bottom: 24px;\n}\n\n.step-marker {\n  z-index: 2;\n  box-shadow: 0 0 0 4px #e0e7ff;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n\n.object-fit-cover {\n  object-fit: cover;\n}\n\n.min-h-200 {\n  min-height: 200px;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProjectManagerDashboard, { className: "ProjectManagerDashboard", filePath: "src/app/pages/project-manager/dashboard/dashboard.ts", lineNumber: 24 }); })();
