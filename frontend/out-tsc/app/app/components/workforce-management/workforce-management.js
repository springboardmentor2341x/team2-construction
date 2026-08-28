import { Component, inject, signal, computed, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { AuthService } from '../../services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.name;
const _forTrack1 = ($index, $item) => $item.id;
function WorkforceManagementComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 32)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", "toast-" + ctx_r0.toastType());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.toastMessage());
} }
function WorkforceManagementComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showBulkModal.set(true)); });
    i0.ɵɵelement(1, "i", 34);
    i0.ɵɵtext(2, " Bulk CSV ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 35);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_23_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showRegisterModal.set(true)); });
    i0.ɵɵelement(4, "i", 36);
    i0.ɵɵtext(5, " Register Worker ");
    i0.ɵɵelementEnd();
} }
function WorkforceManagementComponent_Conditional_73_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 52)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 53);
    i0.ɵɵelement(7, "div", 54);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(cat_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", cat_r4.count, " Workers (", cat_r4.pct, "%)");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", cat_r4.pct, "%");
} }
function WorkforceManagementComponent_Conditional_73_For_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td")(9, "span", 55);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td")(12, "span", 56);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const shift_r5 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(shift_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", shift_r5.startTime, " - ", shift_r5.endTime);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(shift_r5.projectName || shift_r5.projectId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", shift_r5.assignedWorkersCount || (shift_r5.assignedWorkers == null ? null : shift_r5.assignedWorkers.length) || 0, " workers");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(shift_r5.status);
} }
function WorkforceManagementComponent_Conditional_73_ForEmpty_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 57);
    i0.ɵɵtext(2, "No active shifts scheduled.");
    i0.ɵɵelementEnd()();
} }
function WorkforceManagementComponent_Conditional_73_For_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div")(2, "div", 58);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 59);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span", 56);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const cont_r6 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(cont_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cont_r6.specialty);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cont_r6.status);
} }
function WorkforceManagementComponent_Conditional_73_For_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "div")(2, "div", 60);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 59);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span", 61);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const att_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(att_r7.workerName || att_r7.workerId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", att_r7.date, " (", att_r7.workingHours, " hrs)");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", "badge-" + att_r7.status.toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(att_r7.status);
} }
function WorkforceManagementComponent_Conditional_73_ForEmpty_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵtext(1, "No recent attendance records.");
    i0.ɵɵelementEnd();
} }
function WorkforceManagementComponent_Conditional_73_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "div")(2, "div", 30)(3, "div", 37)(4, "h3", 38);
    i0.ɵɵelement(5, "i", 39);
    i0.ɵɵtext(6, " Workforce Category Distribution");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵrepeaterCreate(8, WorkforceManagementComponent_Conditional_73_For_9_Template, 8, 5, "div", 40, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 30)(11, "div", 37)(12, "h3", 38);
    i0.ɵɵelement(13, "i", 41);
    i0.ɵɵtext(14, " Current Active Shifts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 42);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_73_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.activeSubTab.set("shifts")); });
    i0.ɵɵtext(16, "View All");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 43)(18, "table", 44)(19, "thead")(20, "tr")(21, "th");
    i0.ɵɵtext(22, "Shift Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Timings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "Assigned");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th");
    i0.ɵɵtext(30, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "tbody");
    i0.ɵɵrepeaterCreate(32, WorkforceManagementComponent_Conditional_73_For_33_Template, 14, 6, "tr", null, _forTrack1, false, WorkforceManagementComponent_Conditional_73_ForEmpty_34_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(35, "div")(36, "div", 30)(37, "div", 37)(38, "h3", 38);
    i0.ɵɵelement(39, "i", 45);
    i0.ɵɵtext(40, " Subcontractor Breakdown");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 46);
    i0.ɵɵrepeaterCreate(42, WorkforceManagementComponent_Conditional_73_For_43_Template, 8, 3, "div", 47, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 30)(45, "div", 37)(46, "h3", 38);
    i0.ɵɵelement(47, "i", 48);
    i0.ɵɵtext(48, " Recent Attendance");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div", 49);
    i0.ɵɵrepeaterCreate(50, WorkforceManagementComponent_Conditional_73_For_51_Template, 8, 5, "div", 50, _forTrack1, false, WorkforceManagementComponent_Conditional_73_ForEmpty_52_Template, 2, 0, "div", 51);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r0.categoryStats());
    i0.ɵɵadvance(24);
    i0.ɵɵrepeater(ctx_r0.projectService.shifts());
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r0.projectService.contractors());
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r0.projectService.attendanceRecords().slice(0, 5));
} }
function WorkforceManagementComponent_Conditional_74_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", cat_r9.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cat_r9.name);
} }
function WorkforceManagementComponent_Conditional_74_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r10.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r10.name);
} }
function WorkforceManagementComponent_Conditional_74_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", p_r11.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r11.name);
} }
function WorkforceManagementComponent_Conditional_74_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Actions");
    i0.ɵɵelementEnd();
} }
function WorkforceManagementComponent_Conditional_74_For_50_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "button", 73);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_74_For_50_Conditional_24_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r12); const w_r13 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); ctx_r0.allocWorkerId = w_r13.id; return i0.ɵɵresetView(ctx_r0.showAllocateModal.set(true)); });
    i0.ɵɵelement(2, "i", 74);
    i0.ɵɵtext(3, " Allocate ");
    i0.ɵɵelementEnd()();
} }
function WorkforceManagementComponent_Conditional_74_For_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong", 70);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div", 71);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 59);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "span", 72);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td")(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td")(22, "span", 61);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(24, WorkforceManagementComponent_Conditional_74_For_50_Conditional_24_Template, 4, 0, "td");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const w_r13 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(w_r13.workerId || w_r13.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(w_r13.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(w_r13.contactInfo || w_r13.phone || "No Contact");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(w_r13.categoryName || "Skilled Workers");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(w_r13.skillWorkType || w_r13.role);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(w_r13.contractorName || "Direct BuildTrack");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(w_r13.assignedProjectName || w_r13.assignedProject || "Unassigned");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u20B9", w_r13.payRate || 500, "/day");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", "badge-" + w_r13.status.toLowerCase().replace(" ", ""));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(w_r13.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.canManage ? 24 : -1);
} }
function WorkforceManagementComponent_Conditional_74_ForEmpty_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 75);
    i0.ɵɵtext(2, "No workers match the specified filters.");
    i0.ɵɵelementEnd()();
} }
function WorkforceManagementComponent_Conditional_74_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 62)(2, "input", 63);
    i0.ɵɵlistener("input", function WorkforceManagementComponent_Conditional_74_Template_input_input_2_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.searchTerm.set($event.target.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 64);
    i0.ɵɵlistener("change", function WorkforceManagementComponent_Conditional_74_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedCategory.set($event.target.value)); });
    i0.ɵɵelementStart(4, "option", 65);
    i0.ɵɵtext(5, "All Categories");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, WorkforceManagementComponent_Conditional_74_For_7_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 64);
    i0.ɵɵlistener("change", function WorkforceManagementComponent_Conditional_74_Template_select_change_8_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedContractor.set($event.target.value)); });
    i0.ɵɵelementStart(9, "option", 65);
    i0.ɵɵtext(10, "All Contractors");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, WorkforceManagementComponent_Conditional_74_For_12_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "select", 64);
    i0.ɵɵlistener("change", function WorkforceManagementComponent_Conditional_74_Template_select_change_13_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedProject.set($event.target.value)); });
    i0.ɵɵelementStart(14, "option", 65);
    i0.ɵɵtext(15, "All Projects");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(16, WorkforceManagementComponent_Conditional_74_For_17_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 64);
    i0.ɵɵlistener("change", function WorkforceManagementComponent_Conditional_74_Template_select_change_18_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedStatus.set($event.target.value)); });
    i0.ɵɵelementStart(19, "option", 65);
    i0.ɵɵtext(20, "All Statuses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 67);
    i0.ɵɵtext(22, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 68);
    i0.ɵɵtext(24, "On Leave");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 69);
    i0.ɵɵtext(26, "Inactive");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 43)(28, "table", 44)(29, "thead")(30, "tr")(31, "th");
    i0.ɵɵtext(32, "Worker ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th");
    i0.ɵɵtext(34, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "th");
    i0.ɵɵtext(36, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "th");
    i0.ɵɵtext(38, "Skill / Work Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "th");
    i0.ɵɵtext(40, "Contractor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "th");
    i0.ɵɵtext(42, "Assigned Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "th");
    i0.ɵɵtext(44, "Pay Rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "th");
    i0.ɵɵtext(46, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(47, WorkforceManagementComponent_Conditional_74_Conditional_47_Template, 2, 0, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "tbody");
    i0.ɵɵrepeaterCreate(49, WorkforceManagementComponent_Conditional_74_For_50_Template, 25, 11, "tr", null, _forTrack1, false, WorkforceManagementComponent_Conditional_74_ForEmpty_51_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.searchTerm());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.selectedCategory());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.workforceCategories());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.selectedContractor());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.contractors());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.selectedProject());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.projects());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.selectedStatus());
    i0.ɵɵadvance(29);
    i0.ɵɵconditional(ctx_r0.canManage ? 47 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.filteredWorkers());
} }
function WorkforceManagementComponent_Conditional_75_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_75_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showAllocateModal.set(true)); });
    i0.ɵɵelement(1, "i", 78);
    i0.ɵɵtext(2, " New Allocation");
    i0.ɵɵelementEnd();
} }
function WorkforceManagementComponent_Conditional_75_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "span", 61);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const asn_r15 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(asn_r15.workerName || asn_r15.workerId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(asn_r15.projectName || asn_r15.projectId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(asn_r15.contractorName || "Direct BuildTrack");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(asn_r15.workActivity);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(asn_r15.startDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(asn_r15.endDate || "Present");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", "badge-" + asn_r15.status.toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(asn_r15.status);
} }
function WorkforceManagementComponent_Conditional_75_ForEmpty_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 79);
    i0.ɵɵtext(2, "No worker allocation history recorded yet.");
    i0.ɵɵelementEnd()();
} }
function WorkforceManagementComponent_Conditional_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 37)(2, "h3", 38);
    i0.ɵɵelement(3, "i", 76);
    i0.ɵɵtext(4, " Workforce Allocation & Assignment History");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, WorkforceManagementComponent_Conditional_75_Conditional_5_Template, 3, 0, "button", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 43)(7, "table", 44)(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "Worker");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Assigned Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Contractor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Work / Activity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Start Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Assignment Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "tbody");
    i0.ɵɵrepeaterCreate(25, WorkforceManagementComponent_Conditional_75_For_26_Template, 17, 8, "tr", null, _forTrack1, false, WorkforceManagementComponent_Conditional_75_ForEmpty_27_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r0.canManage ? 5 : -1);
    i0.ɵɵadvance(20);
    i0.ɵɵrepeater(ctx_r0.projectService.workerAssignments());
} }
function WorkforceManagementComponent_Conditional_76_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_76_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showAttendanceModal.set(true)); });
    i0.ɵɵelement(1, "i", 82);
    i0.ɵɵtext(2, " Mark Attendance");
    i0.ɵɵelementEnd();
} }
function WorkforceManagementComponent_Conditional_76_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", p_r18.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r18.name);
} }
function WorkforceManagementComponent_Conditional_76_For_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 60);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 59);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "span", 61);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td")(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td")(23, "span", 83);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const att_r19 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(att_r19.workerName || att_r19.workerId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(att_r19.workerRole);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(att_r19.date);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(att_r19.projectName || "Unassigned");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(att_r19.contractorName || "Direct");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", "badge-" + att_r19.status.toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(att_r19.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(att_r19.checkIn || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(att_r19.checkOut || "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", att_r19.workingHours || 0, " hrs");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("+", att_r19.overtimeHours || 0, " hrs");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(att_r19.remarks || "-");
} }
function WorkforceManagementComponent_Conditional_76_ForEmpty_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 84);
    i0.ɵɵtext(2, "No attendance records found for this date/project.");
    i0.ɵɵelementEnd()();
} }
function WorkforceManagementComponent_Conditional_76_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 37)(2, "h3", 38);
    i0.ɵɵelement(3, "i", 80);
    i0.ɵɵtext(4, " Attendance Tracking & Working Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, WorkforceManagementComponent_Conditional_76_Conditional_5_Template, 3, 0, "button", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 62)(7, "input", 81);
    i0.ɵɵlistener("input", function WorkforceManagementComponent_Conditional_76_Template_input_input_7_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedDate.set($event.target.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 64);
    i0.ɵɵlistener("change", function WorkforceManagementComponent_Conditional_76_Template_select_change_8_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedProject.set($event.target.value)); });
    i0.ɵɵelementStart(9, "option", 65);
    i0.ɵɵtext(10, "All Projects");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, WorkforceManagementComponent_Conditional_76_For_12_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 43)(14, "table", 44)(15, "thead")(16, "tr")(17, "th");
    i0.ɵɵtext(18, "Worker");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Contractor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "Check In");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th");
    i0.ɵɵtext(30, "Check Out");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th");
    i0.ɵɵtext(32, "Working Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th");
    i0.ɵɵtext(34, "Overtime");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "th");
    i0.ɵɵtext(36, "Remarks");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "tbody");
    i0.ɵɵrepeaterCreate(38, WorkforceManagementComponent_Conditional_76_For_39_Template, 27, 12, "tr", null, _forTrack1, false, WorkforceManagementComponent_Conditional_76_ForEmpty_40_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r0.canMarkAttendance ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.selectedDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.selectedProject());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.projects());
    i0.ɵɵadvance(27);
    i0.ɵɵrepeater(ctx_r0.projectService.attendanceRecords());
} }
function WorkforceManagementComponent_Conditional_77_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_77_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showShiftModal.set(true)); });
    i0.ɵɵelement(1, "i", 86);
    i0.ɵɵtext(2, " Create Shift");
    i0.ɵɵelementEnd();
} }
function WorkforceManagementComponent_Conditional_77_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Actions");
    i0.ɵɵelementEnd();
} }
function WorkforceManagementComponent_Conditional_77_For_25_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "button", 42);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_77_For_25_Conditional_17_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r21); const s_r22 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openAssignShiftModal(s_r22)); });
    i0.ɵɵelement(2, "i", 90);
    i0.ɵɵtext(3, " Assign Workers ");
    i0.ɵɵelementEnd()();
} }
function WorkforceManagementComponent_Conditional_77_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong", 87);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵelement(5, "i", 88);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td")(12, "span", 72);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td")(15, "span", 89);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(17, WorkforceManagementComponent_Conditional_77_For_25_Conditional_17_Template, 4, 0, "td");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r22 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(s_r22.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", s_r22.startTime, " - ", s_r22.endTime);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r22.shiftDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r22.projectName || s_r22.projectId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", s_r22.assignedWorkersCount || (s_r22.assignedWorkers == null ? null : s_r22.assignedWorkers.length) || 0, " Workers");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(s_r22.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.canManage ? 17 : -1);
} }
function WorkforceManagementComponent_Conditional_77_ForEmpty_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 79);
    i0.ɵɵtext(2, "No shifts scheduled yet.");
    i0.ɵɵelementEnd()();
} }
function WorkforceManagementComponent_Conditional_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 37)(2, "h3", 38);
    i0.ɵɵelement(3, "i", 85);
    i0.ɵɵtext(4, " Shift Management & Worker Schedules");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, WorkforceManagementComponent_Conditional_77_Conditional_5_Template, 3, 0, "button", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 43)(7, "table", 44)(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "Shift Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Timings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Shift Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Assigned Workers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(22, WorkforceManagementComponent_Conditional_77_Conditional_22_Template, 2, 0, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "tbody");
    i0.ɵɵrepeaterCreate(24, WorkforceManagementComponent_Conditional_77_For_25_Template, 18, 8, "tr", null, _forTrack1, false, WorkforceManagementComponent_Conditional_77_ForEmpty_26_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r0.canManage ? 5 : -1);
    i0.ɵɵadvance(17);
    i0.ɵɵconditional(ctx_r0.canManage ? 22 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.projectService.shifts());
} }
function WorkforceManagementComponent_Conditional_78_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Actions");
    i0.ɵɵelementEnd();
} }
function WorkforceManagementComponent_Conditional_78_For_30_Conditional_24_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 97);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_78_For_30_Conditional_24_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const p_r25 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.updatePayrollStatusAction(p_r25.id, "Approved")); });
    i0.ɵɵtext(1, "Approve");
    i0.ɵɵelementEnd();
} }
function WorkforceManagementComponent_Conditional_78_For_30_Conditional_24_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 98);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_78_For_30_Conditional_24_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const p_r25 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.updatePayrollStatusAction(p_r25.id, "Paid")); });
    i0.ɵɵtext(1, "Mark Paid");
    i0.ɵɵelementEnd();
} }
function WorkforceManagementComponent_Conditional_78_For_30_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵconditionalCreate(1, WorkforceManagementComponent_Conditional_78_For_30_Conditional_24_Conditional_1_Template, 2, 0, "button", 95)(2, WorkforceManagementComponent_Conditional_78_For_30_Conditional_24_Conditional_2_Template, 2, 0, "button", 96);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(p_r25.status === "Pending" ? 1 : p_r25.status === "Approved" ? 2 : -1);
} }
function WorkforceManagementComponent_Conditional_78_For_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 60);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 59);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td")(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "strong", 94);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td")(22, "span", 61);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(24, WorkforceManagementComponent_Conditional_78_For_30_Conditional_24_Template, 3, 1, "td");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r25 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r25.workerName || p_r25.workerId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r25.workerCategory || "Skilled");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r25.monthYear);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", p_r25.payRate, "/day");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", p_r25.workingDays, " days");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", p_r25.workingHours, " hrs");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", p_r25.overtimeHours, " hrs");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u20B9", i0.ɵɵpipeBind2(20, 11, p_r25.estimatedPay, "1.2-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", "badge-" + p_r25.status.toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r25.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.canApprovePayroll ? 24 : -1);
} }
function WorkforceManagementComponent_Conditional_78_ForEmpty_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 75);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("No payroll records generated for ", ctx_r0.payrollMonth, ".");
} }
function WorkforceManagementComponent_Conditional_78_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 37)(2, "h3", 38);
    i0.ɵɵelement(3, "i", 91);
    i0.ɵɵtext(4, " Payroll & Workforce Payment Monitoring");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 92)(6, "input", 93);
    i0.ɵɵlistener("input", function WorkforceManagementComponent_Conditional_78_Template_input_input_6_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.payrollMonth = $event.target.value); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 43)(8, "table", 44)(9, "thead")(10, "tr")(11, "th");
    i0.ɵɵtext(12, "Worker");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Month / Year");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Pay Rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Days Worked");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Working Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Overtime");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Estimated Pay");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Payroll Status");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(27, WorkforceManagementComponent_Conditional_78_Conditional_27_Template, 2, 0, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "tbody");
    i0.ɵɵrepeaterCreate(29, WorkforceManagementComponent_Conditional_78_For_30_Template, 25, 14, "tr", null, _forTrack1, false, WorkforceManagementComponent_Conditional_78_ForEmpty_31_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("value", ctx_r0.payrollMonth);
    i0.ɵɵadvance(21);
    i0.ɵɵconditional(ctx_r0.canApprovePayroll ? 27 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.projectService.payrollRecords());
} }
function WorkforceManagementComponent_Conditional_79_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", cat_r28.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cat_r28.name);
} }
function WorkforceManagementComponent_Conditional_79_For_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r29 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r29.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r29.name);
} }
function WorkforceManagementComponent_Conditional_79_For_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r30 = ctx.$implicit;
    i0.ɵɵproperty("value", p_r30.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r30.name);
} }
function WorkforceManagementComponent_Conditional_79_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 99)(2, "div", 100)(3, "h3", 101);
    i0.ɵɵtext(4, "Register New Worker");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 102);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_79_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showRegisterModal.set(false)); });
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 103)(8, "div", 104)(9, "div", 105)(10, "label", 106);
    i0.ɵɵtext(11, "Worker ID (Unique)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 107);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_79_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newWorkerId, $event) || (ctx_r0.newWorkerId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 105)(14, "label", 106);
    i0.ɵɵtext(15, "Worker Full Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 108);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_79_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newWorkerName, $event) || (ctx_r0.newWorkerName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 104)(18, "div", 105)(19, "label", 106);
    i0.ɵɵtext(20, "Contact Phone / Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 109);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_79_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newWorkerContact, $event) || (ctx_r0.newWorkerContact = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 105)(23, "label", 106);
    i0.ɵɵtext(24, "Workforce Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_79_Template_select_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newWorkerCategory, $event) || (ctx_r0.newWorkerCategory = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(26, WorkforceManagementComponent_Conditional_79_For_27_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 104)(29, "div", 105)(30, "label", 106);
    i0.ɵɵtext(31, "Skill / Work Type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "input", 111);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_79_Template_input_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newWorkerSkill, $event) || (ctx_r0.newWorkerSkill = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 105)(34, "label", 106);
    i0.ɵɵtext(35, "Daily Pay Rate (\u20B9)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "input", 112);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_79_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newWorkerPayRate, $event) || (ctx_r0.newWorkerPayRate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 104)(38, "div", 105)(39, "label", 106);
    i0.ɵɵtext(40, "Subcontractor Firm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_79_Template_select_ngModelChange_41_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newWorkerContractor, $event) || (ctx_r0.newWorkerContractor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(42, WorkforceManagementComponent_Conditional_79_For_43_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 105)(45, "label", 106);
    i0.ɵɵtext(46, "Assigned Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_79_Template_select_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newWorkerProject, $event) || (ctx_r0.newWorkerProject = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(48, WorkforceManagementComponent_Conditional_79_For_49_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(50, "div", 113)(51, "button", 33);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_79_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showRegisterModal.set(false)); });
    i0.ɵɵtext(52, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "button", 35);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_79_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submitRegisterWorker()); });
    i0.ɵɵtext(54, "Register Worker");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newWorkerId);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newWorkerName);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newWorkerContact);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newWorkerCategory);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.projectService.workforceCategories());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newWorkerSkill);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newWorkerPayRate);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newWorkerContractor);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.projectService.contractors());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newWorkerProject);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.projectService.projects());
} }
function WorkforceManagementComponent_Conditional_80_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 99)(2, "div", 100)(3, "h3", 101);
    i0.ɵɵtext(4, "Bulk Import Workers (CSV)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 102);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_80_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showBulkModal.set(false)); });
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 103)(8, "p", 114);
    i0.ɵɵtext(9, " Upload a CSV file containing columns: ");
    i0.ɵɵelementStart(10, "code");
    i0.ɵɵtext(11, "Worker ID, Name, Contact, Skill, Category, Pay Rate");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, ". Each Worker ID will be verified for uniqueness before database entry. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 115);
    i0.ɵɵlistener("change", function WorkforceManagementComponent_Conditional_80_Template_input_change_13_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleFileUpload($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 113)(15, "button", 33);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_80_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showBulkModal.set(false)); });
    i0.ɵɵtext(16, "Close");
    i0.ɵɵelementEnd()()()();
} }
function WorkforceManagementComponent_Conditional_81_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const w_r33 = ctx.$implicit;
    i0.ɵɵproperty("value", w_r33.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", w_r33.name, " (", w_r33.workerId || w_r33.id, ") - ", w_r33.skillWorkType);
} }
function WorkforceManagementComponent_Conditional_81_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r34 = ctx.$implicit;
    i0.ɵɵproperty("value", p_r34.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r34.name);
} }
function WorkforceManagementComponent_Conditional_81_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r35 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r35.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r35.name);
} }
function WorkforceManagementComponent_Conditional_81_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 99)(2, "div", 100)(3, "h3", 101);
    i0.ɵɵtext(4, "Workforce Allocation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 102);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_81_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showAllocateModal.set(false)); });
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 103)(8, "div", 105)(9, "label", 106);
    i0.ɵɵtext(10, "Select Worker *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_81_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.allocWorkerId, $event) || (ctx_r0.allocWorkerId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(12, "option", 116);
    i0.ɵɵtext(13, "-- Choose Worker --");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(14, WorkforceManagementComponent_Conditional_81_For_15_Template, 2, 4, "option", 66, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 104)(17, "div", 105)(18, "label", 106);
    i0.ɵɵtext(19, "Target Project *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_81_Template_select_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.allocProjectId, $event) || (ctx_r0.allocProjectId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(21, WorkforceManagementComponent_Conditional_81_For_22_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 105)(24, "label", 106);
    i0.ɵɵtext(25, "Contractor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_81_Template_select_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.allocContractorId, $event) || (ctx_r0.allocContractorId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(27, WorkforceManagementComponent_Conditional_81_For_28_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 105)(30, "label", 106);
    i0.ɵɵtext(31, "Work / Site Activity Description *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "input", 117);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_81_Template_input_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.allocActivity, $event) || (ctx_r0.allocActivity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 104)(34, "div", 105)(35, "label", 106);
    i0.ɵɵtext(36, "Start Date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "input", 118);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_81_Template_input_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.allocStartDate, $event) || (ctx_r0.allocStartDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 105)(39, "label", 106);
    i0.ɵɵtext(40, "Expected End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "input", 118);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_81_Template_input_ngModelChange_41_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.allocEndDate, $event) || (ctx_r0.allocEndDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(42, "div", 113)(43, "button", 33);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_81_Template_button_click_43_listener() { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showAllocateModal.set(false)); });
    i0.ɵɵtext(44, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "button", 35);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_81_Template_button_click_45_listener() { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submitAllocateWorker()); });
    i0.ɵɵtext(46, "Save Allocation");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.allocWorkerId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.workforce());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.allocProjectId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.projectService.projects());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.allocContractorId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.projectService.contractors());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.allocActivity);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.allocStartDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.allocEndDate);
} }
function WorkforceManagementComponent_Conditional_82_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const w_r37 = ctx.$implicit;
    i0.ɵɵproperty("value", w_r37.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", w_r37.name, " (", w_r37.workerId, ")");
} }
function WorkforceManagementComponent_Conditional_82_For_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r38 = ctx.$implicit;
    i0.ɵɵproperty("value", p_r38.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r38.name);
} }
function WorkforceManagementComponent_Conditional_82_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 104)(1, "div", 105)(2, "label", 106);
    i0.ɵɵtext(3, "Check In Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 123);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_82_Conditional_33_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.attCheckIn, $event) || (ctx_r0.attCheckIn = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 105)(6, "label", 106);
    i0.ɵɵtext(7, "Check Out Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 124);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_82_Conditional_33_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.attCheckOut, $event) || (ctx_r0.attCheckOut = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.attCheckIn);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.attCheckOut);
} }
function WorkforceManagementComponent_Conditional_82_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 99)(2, "div", 100)(3, "h3", 101);
    i0.ɵɵtext(4, "Log Attendance Record");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 102);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_82_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showAttendanceModal.set(false)); });
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 103)(8, "div", 105)(9, "label", 106);
    i0.ɵɵtext(10, "Worker *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_82_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.attWorkerId, $event) || (ctx_r0.attWorkerId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(12, "option", 116);
    i0.ɵɵtext(13, "-- Choose Worker --");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(14, WorkforceManagementComponent_Conditional_82_For_15_Template, 2, 3, "option", 66, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 104)(17, "div", 105)(18, "label", 106);
    i0.ɵɵtext(19, "Attendance Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_82_Template_select_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.attStatus, $event) || (ctx_r0.attStatus = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(21, "option", 119);
    i0.ɵɵtext(22, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 120);
    i0.ɵɵtext(24, "Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 121);
    i0.ɵɵtext(26, "Leave");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 105)(28, "label", 106);
    i0.ɵɵtext(29, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_82_Template_select_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.attProjectId, $event) || (ctx_r0.attProjectId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(31, WorkforceManagementComponent_Conditional_82_For_32_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(33, WorkforceManagementComponent_Conditional_82_Conditional_33_Template, 9, 2, "div", 104);
    i0.ɵɵelementStart(34, "div", 105)(35, "label", 106);
    i0.ɵɵtext(36, "Remarks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "input", 122);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_82_Template_input_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.attRemarks, $event) || (ctx_r0.attRemarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 113)(39, "button", 33);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_82_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showAttendanceModal.set(false)); });
    i0.ɵɵtext(40, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "button", 35);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_82_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submitLogAttendance()); });
    i0.ɵɵtext(42, "Save Attendance");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.attWorkerId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.workforce());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.attStatus);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.attProjectId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.projectService.projects());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.attStatus === "Present" ? 33 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.attRemarks);
} }
function WorkforceManagementComponent_Conditional_83_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r41 = ctx.$implicit;
    i0.ɵɵproperty("value", p_r41.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r41.name);
} }
function WorkforceManagementComponent_Conditional_83_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 99)(2, "div", 100)(3, "h3", 101);
    i0.ɵɵtext(4, "Create New Shift Schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 102);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_83_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r40); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showShiftModal.set(false)); });
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 103)(8, "div", 105)(9, "label", 106);
    i0.ɵɵtext(10, "Shift Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 125);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_83_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newShiftName, $event) || (ctx_r0.newShiftName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 104)(13, "div", 105)(14, "label", 106);
    i0.ɵɵtext(15, "Start Time *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 123);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_83_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newShiftStart, $event) || (ctx_r0.newShiftStart = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 105)(18, "label", 106);
    i0.ɵɵtext(19, "End Time *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 124);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_83_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newShiftEnd, $event) || (ctx_r0.newShiftEnd = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 104)(22, "div", 105)(23, "label", 106);
    i0.ɵɵtext(24, "Project *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_83_Template_select_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newShiftProject, $event) || (ctx_r0.newShiftProject = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(26, WorkforceManagementComponent_Conditional_83_For_27_Template, 2, 2, "option", 66, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 105)(29, "label", 106);
    i0.ɵɵtext(30, "Shift Date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "input", 118);
    i0.ɵɵtwoWayListener("ngModelChange", function WorkforceManagementComponent_Conditional_83_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.newShiftDate, $event) || (ctx_r0.newShiftDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(32, "div", 113)(33, "button", 33);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_83_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r40); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showShiftModal.set(false)); });
    i0.ɵɵtext(34, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "button", 35);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_83_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r40); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submitCreateShift()); });
    i0.ɵɵtext(36, "Create Shift");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newShiftName);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newShiftStart);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newShiftEnd);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newShiftProject);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.projectService.projects());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.newShiftDate);
} }
function WorkforceManagementComponent_Conditional_84_For_15_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 128)(1, "input", 129);
    i0.ɵɵlistener("change", function WorkforceManagementComponent_Conditional_84_For_15_Template_input_change_1_listener() { const w_r44 = i0.ɵɵrestoreView(_r43).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggleWorkerShiftSelection(w_r44.id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div")(3, "strong", 130);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementStart(6, "div", 59);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const w_r44 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r0.selectedWorkerIdsForShift.includes(w_r44.id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(w_r44.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" (", w_r44.workerId || w_r44.id, ") ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", w_r44.skillWorkType, " - ", w_r44.assignedProjectName || "Unassigned");
} }
function WorkforceManagementComponent_Conditional_84_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 99)(2, "div", 100)(3, "h3", 101);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 102);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_84_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r42); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showAssignShiftModal.set(false)); });
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 103)(8, "div", 126);
    i0.ɵɵtext(9, " Select workers to assign to ");
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 127);
    i0.ɵɵrepeaterCreate(14, WorkforceManagementComponent_Conditional_84_For_15_Template, 8, 5, "label", 128, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 113)(17, "button", 33);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_84_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r42); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showAssignShiftModal.set(false)); });
    i0.ɵɵtext(18, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 35);
    i0.ɵɵlistener("click", function WorkforceManagementComponent_Conditional_84_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r42); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submitAssignWorkersToShift()); });
    i0.ɵɵtext(20, "Save Shift Assignments");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Assign Workers to ", (tmp_1_0 = ctx_r0.selectedShiftForAssign()) == null ? null : tmp_1_0.name);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r0.selectedShiftForAssign()) == null ? null : tmp_2_0.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" (", (tmp_3_0 = ctx_r0.selectedShiftForAssign()) == null ? null : tmp_3_0.startTime, " - ", (tmp_3_0 = ctx_r0.selectedShiftForAssign()) == null ? null : tmp_3_0.endTime, "). Conflicting active shifts on the same date will be automatically checked. ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.projectService.workforce());
} }
export class WorkforceManagementComponent {
    projectService = inject(ProjectService);
    authService = inject(AuthService);
    initialTab = 'overview';
    activeSubTab = signal('overview', ...(ngDevMode ? [{ debugName: "activeSubTab" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        if (this.initialTab) {
            this.activeSubTab.set(this.initialTab);
        }
    }
    // Filter States
    searchTerm = signal('', ...(ngDevMode ? [{ debugName: "searchTerm" }] : /* istanbul ignore next */ []));
    selectedCategory = signal('all', ...(ngDevMode ? [{ debugName: "selectedCategory" }] : /* istanbul ignore next */ []));
    selectedContractor = signal('all', ...(ngDevMode ? [{ debugName: "selectedContractor" }] : /* istanbul ignore next */ []));
    selectedProject = signal('all', ...(ngDevMode ? [{ debugName: "selectedProject" }] : /* istanbul ignore next */ []));
    selectedStatus = signal('all', ...(ngDevMode ? [{ debugName: "selectedStatus" }] : /* istanbul ignore next */ []));
    selectedDate = signal(new Date().toISOString().split('T')[0], ...(ngDevMode ? [{ debugName: "selectedDate" }] : /* istanbul ignore next */ []));
    // Modal States
    showRegisterModal = signal(false, ...(ngDevMode ? [{ debugName: "showRegisterModal" }] : /* istanbul ignore next */ []));
    showBulkModal = signal(false, ...(ngDevMode ? [{ debugName: "showBulkModal" }] : /* istanbul ignore next */ []));
    showAllocateModal = signal(false, ...(ngDevMode ? [{ debugName: "showAllocateModal" }] : /* istanbul ignore next */ []));
    showAttendanceModal = signal(false, ...(ngDevMode ? [{ debugName: "showAttendanceModal" }] : /* istanbul ignore next */ []));
    showShiftModal = signal(false, ...(ngDevMode ? [{ debugName: "showShiftModal" }] : /* istanbul ignore next */ []));
    showAssignShiftModal = signal(false, ...(ngDevMode ? [{ debugName: "showAssignShiftModal" }] : /* istanbul ignore next */ []));
    selectedShiftForAssign = signal(null, ...(ngDevMode ? [{ debugName: "selectedShiftForAssign" }] : /* istanbul ignore next */ []));
    // Success / Error Feedback Notifications
    toastMessage = signal(null, ...(ngDevMode ? [{ debugName: "toastMessage" }] : /* istanbul ignore next */ []));
    toastType = signal('success', ...(ngDevMode ? [{ debugName: "toastType" }] : /* istanbul ignore next */ []));
    // Form Fields - Worker Registration
    newWorkerId = 'W-' + Math.floor(100 + Math.random() * 900);
    newWorkerName = '';
    newWorkerContact = '';
    newWorkerCategory = 'CAT-SKILLED';
    newWorkerSkill = 'Electrician';
    newWorkerContractor = 'c1';
    newWorkerProject = 'P-101';
    newWorkerJoiningDate = new Date().toISOString().split('T')[0];
    newWorkerPayRate = 600;
    // Form Fields - Allocation
    allocWorkerId = '';
    allocProjectId = 'P-101';
    allocContractorId = 'c1';
    allocActivity = 'Foundation Reinforcement & Conduit Laying';
    allocStartDate = new Date().toISOString().split('T')[0];
    allocEndDate = '';
    // Form Fields - Attendance
    attWorkerId = '';
    attProjectId = 'P-101';
    attContractorId = 'c1';
    attStatus = 'Present';
    attCheckIn = '08:00 AM';
    attCheckOut = '05:00 PM';
    attRemarks = 'Normal site shift';
    // Form Fields - Shift
    newShiftName = 'Morning Shift';
    newShiftStart = '08:00 AM';
    newShiftEnd = '05:00 PM';
    newShiftProject = 'P-101';
    newShiftDate = new Date().toISOString().split('T')[0];
    selectedWorkerIdsForShift = [];
    // Form Fields - Payroll
    payrollMonth = new Date().toISOString().slice(0, 7); // "YYYY-MM"
    // User Role Scoping helper
    get userRole() {
        return this.authService.currentUser()?.role || 'admin';
    }
    get canManage() {
        return ['admin', 'project_manager'].includes(this.userRole);
    }
    get canMarkAttendance() {
        return ['admin', 'project_manager', 'site_engineer', 'contractor'].includes(this.userRole);
    }
    get canApprovePayroll() {
        return ['admin', 'project_manager'].includes(this.userRole);
    }
    // Filtered Workers computed
    filteredWorkers = computed(() => {
        let list = this.projectService.workforce();
        const search = this.searchTerm().toLowerCase().trim();
        const cat = this.selectedCategory();
        const cont = this.selectedContractor();
        const proj = this.selectedProject();
        const stat = this.selectedStatus();
        if (search) {
            list = list.filter(w => w.name.toLowerCase().includes(search) ||
                (w.workerId && w.workerId.toLowerCase().includes(search)) ||
                (w.skillWorkType && w.skillWorkType.toLowerCase().includes(search)));
        }
        if (cat !== 'all') {
            list = list.filter(w => w.categoryId === cat || w.categoryName === cat);
        }
        if (cont !== 'all') {
            list = list.filter(w => w.contractorId === cont || w.contractorName === cont);
        }
        if (proj !== 'all') {
            list = list.filter(w => w.assignedProjectId === proj || w.assignedProject === proj);
        }
        if (stat !== 'all') {
            list = list.filter(w => w.status === stat);
        }
        return list;
    }, ...(ngDevMode ? [{ debugName: "filteredWorkers" }] : /* istanbul ignore next */ []));
    // Summary Metrics computed
    summaryMetrics = computed(() => {
        const summary = this.projectService.workforceSummary();
        const list = this.projectService.workforce();
        const total = summary?.totalWorkers || list.length || 28;
        const active = summary?.activeWorkers || list.filter(w => w.status === 'Active').length || 24;
        const present = summary?.presentWorkersToday || Math.round(active * 0.88) || 21;
        const absent = summary?.absentWorkersToday || Math.round(active * 0.08) || 2;
        const onLeave = summary?.onLeaveWorkersToday || Math.round(active * 0.04) || 1;
        const attPct = summary?.attendancePercentage || (total > 0 ? Math.round((present / total) * 100) : 92);
        return { total, active, present, absent, onLeave, attPct };
    }, ...(ngDevMode ? [{ debugName: "summaryMetrics" }] : /* istanbul ignore next */ []));
    // Category counts computed
    categoryStats = computed(() => {
        const list = this.projectService.workforce();
        const map = {};
        list.forEach(w => {
            const cname = w.categoryName || w.skillWorkType || 'Skilled Workers';
            map[cname] = (map[cname] || 0) + 1;
        });
        if (Object.keys(map).length === 0) {
            return [
                { name: 'Skilled Workers', count: 12, pct: 45 },
                { name: 'Unskilled Workers', count: 8, pct: 30 },
                { name: 'Supervisors', count: 4, pct: 15 },
                { name: 'Engineers & Consultants', count: 4, pct: 10 }
            ];
        }
        const total = list.length || 1;
        return Object.entries(map).map(([name, count]) => ({
            name,
            count,
            pct: Math.round((count / total) * 100)
        }));
    }, ...(ngDevMode ? [{ debugName: "categoryStats" }] : /* istanbul ignore next */ []));
    // Notification Toast Helper
    showToast(msg, type = 'success') {
        this.toastMessage.set(msg);
        this.toastType.set(type);
        setTimeout(() => {
            this.toastMessage.set(null);
        }, 4000);
    }
    // --- ACTIONS ---
    submitRegisterWorker() {
        if (!this.newWorkerName || !this.newWorkerSkill) {
            this.showToast('Please fill in Worker Name and Skill / Work Type', 'error');
            return;
        }
        const payload = {
            workerId: this.newWorkerId,
            name: this.newWorkerName,
            contactInfo: this.newWorkerContact,
            categoryId: this.newWorkerCategory,
            skillWorkType: this.newWorkerSkill,
            contractorId: this.newWorkerContractor,
            assignedProjectId: this.newWorkerProject,
            joiningDate: this.newWorkerJoiningDate,
            payRate: Number(this.newWorkerPayRate),
            status: 'Active'
        };
        this.projectService.registerWorker(payload).subscribe({
            next: (res) => {
                this.showToast(res.message || 'Worker registered successfully!', 'success');
                this.showRegisterModal.set(false);
                this.resetRegisterForm();
                this.projectService.loadModule6Data();
            },
            error: (err) => {
                this.showToast(err?.error?.detail || 'Failed to register worker. Check unique Worker ID.', 'error');
            }
        });
    }
    resetRegisterForm() {
        this.newWorkerId = 'W-' + Math.floor(100 + Math.random() * 900);
        this.newWorkerName = '';
        this.newWorkerContact = '';
        this.newWorkerPayRate = 600;
    }
    handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            this.projectService.bulkUploadWorkers(file).subscribe({
                next: (res) => {
                    this.showToast(res.message || 'Bulk CSV imported successfully!', 'success');
                    this.showBulkModal.set(false);
                    this.projectService.loadModule6Data();
                },
                error: (err) => {
                    this.showToast(err?.error?.detail || 'Failed to process bulk CSV file.', 'error');
                }
            });
        }
    }
    submitAllocateWorker() {
        if (!this.allocWorkerId || !this.allocProjectId || !this.allocActivity) {
            this.showToast('Please select Worker, Project, and Activity', 'error');
            return;
        }
        const payload = {
            workerId: this.allocWorkerId,
            projectId: this.allocProjectId,
            contractorId: this.allocContractorId,
            workActivity: this.allocActivity,
            startDate: this.allocStartDate,
            endDate: this.allocEndDate || undefined
        };
        this.projectService.allocateWorker(payload).subscribe({
            next: (res) => {
                this.showToast(res.message || 'Worker allocated successfully!', 'success');
                this.showAllocateModal.set(false);
                this.projectService.loadModule6Data();
            },
            error: (err) => {
                this.showToast(err?.error?.detail || 'Allocation failed. Verify project assignment.', 'error');
            }
        });
    }
    submitLogAttendance() {
        if (!this.attWorkerId || !this.selectedDate()) {
            this.showToast('Please select Worker and Date', 'error');
            return;
        }
        const payload = {
            workerId: this.attWorkerId,
            date: this.selectedDate(),
            status: this.attStatus,
            checkIn: this.attStatus === 'Present' ? this.attCheckIn : undefined,
            checkOut: this.attStatus === 'Present' ? this.attCheckOut : undefined,
            remarks: this.attRemarks,
            projectId: this.attProjectId,
            contractorId: this.attContractorId
        };
        this.projectService.logAttendanceRecord(payload).subscribe({
            next: (res) => {
                this.showToast(res.message || 'Attendance logged successfully!', 'success');
                this.showAttendanceModal.set(false);
                this.projectService.loadModule6Data();
            },
            error: (err) => {
                this.showToast(err?.error?.detail || 'Failed to log attendance.', 'error');
            }
        });
    }
    submitCreateShift() {
        if (!this.newShiftName || !this.newShiftProject) {
            this.showToast('Please enter Shift Name and Project', 'error');
            return;
        }
        const payload = {
            name: this.newShiftName,
            startTime: this.newShiftStart,
            endTime: this.newShiftEnd,
            projectId: this.newShiftProject,
            shiftDate: this.newShiftDate
        };
        this.projectService.createShiftSchedule(payload).subscribe({
            next: (res) => {
                this.showToast(res.message || 'Shift created successfully!', 'success');
                this.showShiftModal.set(false);
                this.projectService.loadModule6Data();
            },
            error: (err) => {
                this.showToast(err?.error?.detail || 'Failed to create shift schedule.', 'error');
            }
        });
    }
    openAssignShiftModal(shift) {
        this.selectedShiftForAssign.set(shift);
        this.selectedWorkerIdsForShift = shift.assignedWorkers?.map(w => w.workerId) || [];
        this.showAssignShiftModal.set(true);
    }
    toggleWorkerShiftSelection(workerId) {
        if (this.selectedWorkerIdsForShift.includes(workerId)) {
            this.selectedWorkerIdsForShift = this.selectedWorkerIdsForShift.filter(id => id !== workerId);
        }
        else {
            this.selectedWorkerIdsForShift.push(workerId);
        }
    }
    submitAssignWorkersToShift() {
        const shift = this.selectedShiftForAssign();
        if (!shift)
            return;
        this.projectService.assignWorkersToShift(shift.id, this.selectedWorkerIdsForShift).subscribe({
            next: (res) => {
                this.showToast(res.message || 'Workers assigned to shift successfully!', res.data?.conflicts?.length ? 'warning' : 'success');
                this.showAssignShiftModal.set(false);
                this.projectService.loadModule6Data();
            },
            error: (err) => {
                this.showToast(err?.error?.detail || 'Shift assignment failed.', 'error');
            }
        });
    }
    triggerGeneratePayroll(workerId) {
        this.projectService.generatePayrollRecord({
            workerId,
            monthYear: this.payrollMonth
        }).subscribe({
            next: (res) => {
                this.showToast(res.message || 'Payroll generated successfully!', 'success');
                this.projectService.loadModule6Data();
            },
            error: (err) => {
                this.showToast(err?.error?.detail || 'Payroll calculation failed.', 'error');
            }
        });
    }
    updatePayrollStatusAction(payrollId, status) {
        this.projectService.updatePayrollStatus(payrollId, status).subscribe({
            next: (res) => {
                this.showToast(res.message || `Payroll status updated to ${status}`, 'success');
                this.projectService.loadModule6Data();
            },
            error: (err) => {
                this.showToast(err?.error?.detail || 'Failed to update status.', 'error');
            }
        });
    }
    static ɵfac = function WorkforceManagementComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || WorkforceManagementComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WorkforceManagementComponent, selectors: [["app-workforce-management"]], inputs: { initialTab: "initialTab" }, decls: 85, vars: 32, consts: [[1, "workforce-container"], [1, "toast-container"], [1, "workforce-header"], [1, "sub-tab-nav"], [1, "tab-btn", 3, "click"], [1, "bi", "bi-grid-fill"], [1, "bi", "bi-people-fill"], [1, "bi", "bi-diagram-3-fill"], [1, "bi", "bi-calendar-check-fill"], [1, "bi", "bi-clock-history"], [1, "bi", "bi-cash-stack"], [1, "action-buttons"], [1, "metrics-grid"], [1, "metric-card"], [1, "metric-icon", "icon-blue"], [1, "bi", "bi-people"], [1, "metric-content"], [1, "metric-val"], [1, "metric-label"], [1, "metric-icon", "icon-green"], [1, "bi", "bi-check-circle"], [1, "metric-icon", "icon-emerald"], [1, "bi", "bi-person-check"], [1, "metric-icon", "icon-rose"], [1, "bi", "bi-person-x"], [1, "metric-icon", "icon-amber"], [1, "bi", "bi-calendar-minus"], [1, "metric-icon", "icon-purple"], [1, "bi", "bi-pie-chart"], [1, "content-grid"], [1, "panel-card"], [1, "modal-backdrop"], [1, "toast", 3, "ngClass"], [1, "btn-secondary", 3, "click"], [1, "bi", "bi-file-earmark-spreadsheet"], [1, "btn-primary", 3, "click"], [1, "bi", "bi-person-plus-fill"], [1, "panel-header"], [1, "panel-title"], [1, "bi", "bi-bar-chart-fill", "text-primary"], [2, "margin-bottom", "1rem"], [1, "bi", "bi-clock-fill", "text-primary"], [1, "btn-secondary", 2, "padding", "0.25rem 0.6rem", "font-size", "0.75rem", 3, "click"], [1, "table-responsive"], [1, "custom-table"], [1, "bi", "bi-building"], [2, "display", "flex", "flex-direction", "column", "gap", "0.75rem"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "padding", "0.6rem", "background", "#f8fafc", "border-radius", "8px"], [1, "bi", "bi-calendar-event"], [2, "display", "flex", "flex-direction", "column", "gap", "0.5rem"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "font-size", "0.85rem", "padding-bottom", "0.4rem", "border-bottom", "1px solid #f1f5f9"], [2, "text-align", "center", "color", "#94a3b8", "padding", "1rem"], [2, "display", "flex", "justify-content", "space-between", "font-size", "0.875rem", "font-weight", "600", "color", "#334155"], [1, "progress-bar-bg"], [1, "progress-bar-fill"], [1, "badge", "badge-transferred"], [1, "badge", "badge-active"], ["colspan", "5", 2, "text-align", "center", "color", "#94a3b8", "padding", "1.5rem"], [2, "font-weight", "700", "font-size", "0.875rem", "color", "#0f172a"], [2, "font-size", "0.75rem", "color", "#64748b"], [2, "font-weight", "600"], [1, "badge", 3, "ngClass"], [1, "filter-bar"], ["type", "text", "placeholder", "Search by Worker ID, Name, or Skill...", 1, "search-input", 3, "input", "value"], [1, "filter-select", 3, "change", "value"], ["value", "all"], [3, "value"], ["value", "Active"], ["value", "On Leave"], ["value", "Inactive"], [2, "color", "#2563eb"], [2, "font-weight", "600", "color", "#0f172a"], [1, "badge", "badge-processing"], [1, "btn-secondary", 2, "padding", "0.25rem 0.5rem", "font-size", "0.75rem", 3, "click"], [1, "bi", "bi-arrow-right-circle"], ["colspan", "9", 2, "text-align", "center", "color", "#94a3b8", "padding", "2rem"], [1, "bi", "bi-diagram-3-fill", "text-primary"], [1, "btn-primary"], [1, "bi", "bi-plus-lg"], ["colspan", "7", 2, "text-align", "center", "color", "#94a3b8", "padding", "2rem"], [1, "bi", "bi-calendar-check-fill", "text-primary"], ["type", "date", 1, "search-input", 3, "input", "value"], [1, "bi", "bi-check2-square"], [2, "color", "#b45309", "font-weight", "600"], ["colspan", "10", 2, "text-align", "center", "color", "#94a3b8", "padding", "2rem"], [1, "bi", "bi-clock-history", "text-primary"], [1, "bi", "bi-plus-circle"], [2, "color", "#0f172a"], [1, "bi", "bi-alarm"], [1, "badge", "badge-scheduled"], [1, "bi", "bi-person-plus"], [1, "bi", "bi-cash-stack", "text-primary"], [2, "display", "flex", "gap", "0.5rem", "align-items", "center"], ["type", "month", 1, "search-input", 2, "width", "auto", 3, "input", "value"], [2, "color", "#16a34a", "font-size", "1rem"], [1, "btn-secondary", 2, "padding", "0.2rem 0.5rem", "font-size", "0.75rem"], [1, "btn-primary", 2, "padding", "0.2rem 0.5rem", "font-size", "0.75rem"], [1, "btn-secondary", 2, "padding", "0.2rem 0.5rem", "font-size", "0.75rem", 3, "click"], [1, "btn-primary", 2, "padding", "0.2rem 0.5rem", "font-size", "0.75rem", 3, "click"], [1, "modal-card"], [1, "modal-header"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "e.g. W-102", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Ramesh Kumar", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+91-9876543210", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Electrician, Mason", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [2, "font-size", "0.875rem", "color", "#64748b", "margin-bottom", "1rem"], ["type", "file", "accept", ".csv", 1, "form-control", 3, "change"], ["value", ""], ["type", "text", "placeholder", "e.g. Electrical Conduit Wiring Level 2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "Present"], ["value", "Absent"], ["value", "Leave"], ["type", "text", "placeholder", "Optional comments...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "08:00 AM", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "05:00 PM", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Morning Shift", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "font-size", "0.85rem", "color", "#64748b", "margin-bottom", "1rem"], [2, "max-height", "250px", "overflow-y", "auto", "display", "flex", "flex-direction", "column", "gap", "0.5rem"], [2, "display", "flex", "align-items", "center", "gap", "0.75rem", "padding", "0.5rem", "background", "#f8fafc", "border-radius", "8px", "cursor", "pointer"], ["type", "checkbox", 3, "change", "checked"], [2, "font-size", "0.875rem"]], template: function WorkforceManagementComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, WorkforceManagementComponent_Conditional_1_Template, 4, 2, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "button", 4);
            i0.ɵɵlistener("click", function WorkforceManagementComponent_Template_button_click_4_listener() { return ctx.activeSubTab.set("overview"); });
            i0.ɵɵelement(5, "i", 5);
            i0.ɵɵtext(6, " Dashboard ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵlistener("click", function WorkforceManagementComponent_Template_button_click_7_listener() { return ctx.activeSubTab.set("directory"); });
            i0.ɵɵelement(8, "i", 6);
            i0.ɵɵtext(9, " Worker Directory ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 4);
            i0.ɵɵlistener("click", function WorkforceManagementComponent_Template_button_click_10_listener() { return ctx.activeSubTab.set("allocation"); });
            i0.ɵɵelement(11, "i", 7);
            i0.ɵɵtext(12, " Allocations ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 4);
            i0.ɵɵlistener("click", function WorkforceManagementComponent_Template_button_click_13_listener() { return ctx.activeSubTab.set("attendance"); });
            i0.ɵɵelement(14, "i", 8);
            i0.ɵɵtext(15, " Attendance ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 4);
            i0.ɵɵlistener("click", function WorkforceManagementComponent_Template_button_click_16_listener() { return ctx.activeSubTab.set("shifts"); });
            i0.ɵɵelement(17, "i", 9);
            i0.ɵɵtext(18, " Shifts ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 4);
            i0.ɵɵlistener("click", function WorkforceManagementComponent_Template_button_click_19_listener() { return ctx.activeSubTab.set("payroll"); });
            i0.ɵɵelement(20, "i", 10);
            i0.ɵɵtext(21, " Payroll ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 11);
            i0.ɵɵconditionalCreate(23, WorkforceManagementComponent_Conditional_23_Template, 6, 0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 12)(25, "div", 13)(26, "div", 14);
            i0.ɵɵelement(27, "i", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 16)(29, "span", 17);
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "span", 18);
            i0.ɵɵtext(32, "Total Workers");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(33, "div", 13)(34, "div", 19);
            i0.ɵɵelement(35, "i", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 16)(37, "span", 17);
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "span", 18);
            i0.ɵɵtext(40, "Active Workforce");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "div", 13)(42, "div", 21);
            i0.ɵɵelement(43, "i", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "div", 16)(45, "span", 17);
            i0.ɵɵtext(46);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "span", 18);
            i0.ɵɵtext(48, "Present Today");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(49, "div", 13)(50, "div", 23);
            i0.ɵɵelement(51, "i", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 16)(53, "span", 17);
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "span", 18);
            i0.ɵɵtext(56, "Absent Today");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(57, "div", 13)(58, "div", 25);
            i0.ɵɵelement(59, "i", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div", 16)(61, "span", 17);
            i0.ɵɵtext(62);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "span", 18);
            i0.ɵɵtext(64, "On Leave");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(65, "div", 13)(66, "div", 27);
            i0.ɵɵelement(67, "i", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "div", 16)(69, "span", 17);
            i0.ɵɵtext(70);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "span", 18);
            i0.ɵɵtext(72, "Attendance Rate");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(73, WorkforceManagementComponent_Conditional_73_Template, 53, 2, "div", 29);
            i0.ɵɵconditionalCreate(74, WorkforceManagementComponent_Conditional_74_Template, 52, 7, "div", 30);
            i0.ɵɵconditionalCreate(75, WorkforceManagementComponent_Conditional_75_Template, 28, 2, "div", 30);
            i0.ɵɵconditionalCreate(76, WorkforceManagementComponent_Conditional_76_Template, 41, 4, "div", 30);
            i0.ɵɵconditionalCreate(77, WorkforceManagementComponent_Conditional_77_Template, 27, 3, "div", 30);
            i0.ɵɵconditionalCreate(78, WorkforceManagementComponent_Conditional_78_Template, 32, 3, "div", 30);
            i0.ɵɵconditionalCreate(79, WorkforceManagementComponent_Conditional_79_Template, 55, 8, "div", 31);
            i0.ɵɵconditionalCreate(80, WorkforceManagementComponent_Conditional_80_Template, 17, 0, "div", 31);
            i0.ɵɵconditionalCreate(81, WorkforceManagementComponent_Conditional_81_Template, 47, 6, "div", 31);
            i0.ɵɵconditionalCreate(82, WorkforceManagementComponent_Conditional_82_Template, 43, 5, "div", 31);
            i0.ɵɵconditionalCreate(83, WorkforceManagementComponent_Conditional_83_Template, 37, 5, "div", 31);
            i0.ɵɵconditionalCreate(84, WorkforceManagementComponent_Conditional_84_Template, 21, 4, "div", 31);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.toastMessage() ? 1 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.activeSubTab() === "overview");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.activeSubTab() === "directory");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.activeSubTab() === "allocation");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.activeSubTab() === "attendance");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.activeSubTab() === "shifts");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.activeSubTab() === "payroll");
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.canManage ? 23 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.summaryMetrics().total);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.summaryMetrics().active);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.summaryMetrics().present);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.summaryMetrics().absent);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.summaryMetrics().onLeave);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", ctx.summaryMetrics().attPct, "%");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.activeSubTab() === "overview" ? 73 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeSubTab() === "directory" ? 74 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeSubTab() === "allocation" ? 75 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeSubTab() === "attendance" ? 76 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeSubTab() === "shifts" ? 77 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeSubTab() === "payroll" ? 78 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showRegisterModal() ? 79 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showBulkModal() ? 80 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showAllocateModal() ? 81 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showAttendanceModal() ? 82 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showShiftModal() ? 83 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showAssignShiftModal() ? 84 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i1.DecimalPipe], styles: [".workforce-container[_ngcontent-%COMP%] {\n  font-family: 'Inter', system-ui, -apple-system, sans-serif;\n  color: #1e293b;\n  padding: 0.5rem;\n}\n\n\n.workforce-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  gap: 1rem;\n}\n\n.sub-tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  background: rgba(241, 245, 249, 0.8);\n  padding: 0.35rem;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #2563eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);\n  color: white;\n  border: none;\n  padding: 0.55rem 1.25rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #334155;\n  border: 1px solid #cbd5e1;\n  padding: 0.55rem 1.1rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n\n\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 1.1rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: transform 0.2s ease;\n}\n\n.metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n\n.metric-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n\n.icon-blue[_ngcontent-%COMP%] { background: #dbeafe; color: #1d4ed8; }\n.icon-green[_ngcontent-%COMP%] { background: #dcfce7; color: #15803d; }\n.icon-emerald[_ngcontent-%COMP%] { background: #d1fae5; color: #047857; }\n.icon-rose[_ngcontent-%COMP%] { background: #ffe4e6; color: #be123c; }\n.icon-amber[_ngcontent-%COMP%] { background: #fef3c7; color: #b45309; }\n.icon-purple[_ngcontent-%COMP%] { background: #f3e8ff; color: #7e22ce; }\n\n.metric-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.metric-val[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.2;\n}\n\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 0.2rem;\n}\n\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1.25rem;\n}\n\n@media (max-width: 1024px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.panel-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.25rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  margin-bottom: 1.25rem;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.panel-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  background: #f8fafc;\n  padding: 0.85rem;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  padding: 0.5rem 0.85rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n\n.filter-select[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.85rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.875rem;\n  background: white;\n  color: #334155;\n  outline: none;\n}\n\n\n.table-responsive[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n\n.custom-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.875rem;\n}\n\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #475569;\n  font-weight: 600;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border-bottom: 1px solid #f1f5f9;\n  color: #334155;\n  vertical-align: middle;\n}\n\n.custom-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.65rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.badge-active[_ngcontent-%COMP%], .badge-present[_ngcontent-%COMP%], .badge-paid[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n\n.badge-inactive[_ngcontent-%COMP%], .badge-absent[_ngcontent-%COMP%] {\n  background: #ffe4e6;\n  color: #be123c;\n}\n\n.badge-leave[_ngcontent-%COMP%], .badge-onleave[_ngcontent-%COMP%], .badge-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.badge-transferred[_ngcontent-%COMP%], .badge-processing[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n\n.badge-approved[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #047857;\n}\n\n.badge-scheduled[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7e22ce;\n}\n\n\n.progress-bar-bg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-top: 0.35rem;\n}\n\n.progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #2563eb, #3b82f6);\n  border-radius: 4px;\n}\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n\n.modal-card[_ngcontent-%COMP%] {\n  background: white;\n  width: 100%;\n  max-width: 580px;\n  border-radius: 16px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_modalIn 0.2s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_modalIn {\n  from { opacity: 0; transform: scale(0.95); }\n  to { opacity: 1; transform: scale(1); }\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n\n.modal-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.25rem;\n  cursor: pointer;\n  color: #94a3b8;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-height: 75vh;\n  overflow-y: auto;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.35rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.55rem 0.85rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.875rem;\n  outline: none;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 1100;\n}\n\n.toast[_ngcontent-%COMP%] {\n  padding: 0.85rem 1.25rem;\n  border-radius: 10px;\n  color: white;\n  font-weight: 600;\n  font-size: 0.875rem;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.toast-success[_ngcontent-%COMP%] { background: #10b981; }\n.toast-error[_ngcontent-%COMP%] { background: #ef4444; }\n.toast-warning[_ngcontent-%COMP%] { background: #f59e0b; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkforceManagementComponent, [{
        type: Component,
        args: [{ selector: 'app-workforce-management', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"workforce-container\">\n  <!-- Toast Notification -->\n  @if (toastMessage()) {\n    <div class=\"toast-container\">\n      <div class=\"toast\" [ngClass]=\"'toast-' + toastType()\">\n        <span>{{ toastMessage() }}</span>\n      </div>\n    </div>\n  }\n\n  <!-- Header & Navigation -->\n  <div class=\"workforce-header\">\n    <div class=\"sub-tab-nav\">\n      <button class=\"tab-btn\" [class.active]=\"activeSubTab() === 'overview'\" (click)=\"activeSubTab.set('overview')\">\n        <i class=\"bi bi-grid-fill\"></i> Dashboard\n      </button>\n      <button class=\"tab-btn\" [class.active]=\"activeSubTab() === 'directory'\" (click)=\"activeSubTab.set('directory')\">\n        <i class=\"bi bi-people-fill\"></i> Worker Directory\n      </button>\n      <button class=\"tab-btn\" [class.active]=\"activeSubTab() === 'allocation'\" (click)=\"activeSubTab.set('allocation')\">\n        <i class=\"bi bi-diagram-3-fill\"></i> Allocations\n      </button>\n      <button class=\"tab-btn\" [class.active]=\"activeSubTab() === 'attendance'\" (click)=\"activeSubTab.set('attendance')\">\n        <i class=\"bi bi-calendar-check-fill\"></i> Attendance\n      </button>\n      <button class=\"tab-btn\" [class.active]=\"activeSubTab() === 'shifts'\" (click)=\"activeSubTab.set('shifts')\">\n        <i class=\"bi bi-clock-history\"></i> Shifts\n      </button>\n      <button class=\"tab-btn\" [class.active]=\"activeSubTab() === 'payroll'\" (click)=\"activeSubTab.set('payroll')\">\n        <i class=\"bi bi-cash-stack\"></i> Payroll\n      </button>\n    </div>\n\n    <div class=\"action-buttons\">\n      @if (canManage) {\n        <button class=\"btn-secondary\" (click)=\"showBulkModal.set(true)\">\n          <i class=\"bi bi-file-earmark-spreadsheet\"></i> Bulk CSV\n        </button>\n        <button class=\"btn-primary\" (click)=\"showRegisterModal.set(true)\">\n          <i class=\"bi bi-person-plus-fill\"></i> Register Worker\n        </button>\n      }\n    </div>\n  </div>\n\n  <!-- Executive Summary Cards -->\n  <div class=\"metrics-grid\">\n    <div class=\"metric-card\">\n      <div class=\"metric-icon icon-blue\"><i class=\"bi bi-people\"></i></div>\n      <div class=\"metric-content\">\n        <span class=\"metric-val\">{{ summaryMetrics().total }}</span>\n        <span class=\"metric-label\">Total Workers</span>\n      </div>\n    </div>\n    <div class=\"metric-card\">\n      <div class=\"metric-icon icon-green\"><i class=\"bi bi-check-circle\"></i></div>\n      <div class=\"metric-content\">\n        <span class=\"metric-val\">{{ summaryMetrics().active }}</span>\n        <span class=\"metric-label\">Active Workforce</span>\n      </div>\n    </div>\n    <div class=\"metric-card\">\n      <div class=\"metric-icon icon-emerald\"><i class=\"bi bi-person-check\"></i></div>\n      <div class=\"metric-content\">\n        <span class=\"metric-val\">{{ summaryMetrics().present }}</span>\n        <span class=\"metric-label\">Present Today</span>\n      </div>\n    </div>\n    <div class=\"metric-card\">\n      <div class=\"metric-icon icon-rose\"><i class=\"bi bi-person-x\"></i></div>\n      <div class=\"metric-content\">\n        <span class=\"metric-val\">{{ summaryMetrics().absent }}</span>\n        <span class=\"metric-label\">Absent Today</span>\n      </div>\n    </div>\n    <div class=\"metric-card\">\n      <div class=\"metric-icon icon-amber\"><i class=\"bi bi-calendar-minus\"></i></div>\n      <div class=\"metric-content\">\n        <span class=\"metric-val\">{{ summaryMetrics().onLeave }}</span>\n        <span class=\"metric-label\">On Leave</span>\n      </div>\n    </div>\n    <div class=\"metric-card\">\n      <div class=\"metric-icon icon-purple\"><i class=\"bi bi-pie-chart\"></i></div>\n      <div class=\"metric-content\">\n        <span class=\"metric-val\">{{ summaryMetrics().attPct }}%</span>\n        <span class=\"metric-label\">Attendance Rate</span>\n      </div>\n    </div>\n  </div>\n\n  <!-- TAB 1: WORKFORCE DASHBOARD -->\n  @if (activeSubTab() === 'overview') {\n    <div class=\"content-grid\">\n      <div>\n        <div class=\"panel-card\">\n          <div class=\"panel-header\">\n            <h3 class=\"panel-title\"><i class=\"bi bi-bar-chart-fill text-primary\"></i> Workforce Category Distribution</h3>\n          </div>\n          <div>\n            @for (cat of categoryStats(); track cat.name) {\n              <div style=\"margin-bottom: 1rem;\">\n                <div style=\"display: flex; justify-content: space-between; font-size: 0.875rem; font-weight: 600; color: #334155;\">\n                  <span>{{ cat.name }}</span>\n                  <span>{{ cat.count }} Workers ({{ cat.pct }}%)</span>\n                </div>\n                <div class=\"progress-bar-bg\">\n                  <div class=\"progress-bar-fill\" [style.width.%]=\"cat.pct\"></div>\n                </div>\n              </div>\n            }\n          </div>\n        </div>\n\n        <div class=\"panel-card\">\n          <div class=\"panel-header\">\n            <h3 class=\"panel-title\"><i class=\"bi bi-clock-fill text-primary\"></i> Current Active Shifts</h3>\n            <button class=\"btn-secondary\" style=\"padding: 0.25rem 0.6rem; font-size: 0.75rem;\" (click)=\"activeSubTab.set('shifts')\">View All</button>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"custom-table\">\n              <thead>\n                <tr>\n                  <th>Shift Name</th>\n                  <th>Timings</th>\n                  <th>Project</th>\n                  <th>Assigned</th>\n                  <th>Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (shift of projectService.shifts(); track shift.id) {\n                  <tr>\n                    <td><strong>{{ shift.name }}</strong></td>\n                    <td>{{ shift.startTime }} - {{ shift.endTime }}</td>\n                    <td>{{ shift.projectName || shift.projectId }}</td>\n                    <td><span class=\"badge badge-transferred\">{{ shift.assignedWorkersCount || shift.assignedWorkers?.length || 0 }} workers</span></td>\n                    <td><span class=\"badge badge-active\">{{ shift.status }}</span></td>\n                  </tr>\n                } @empty {\n                  <tr>\n                    <td colspan=\"5\" style=\"text-align: center; color: #94a3b8; padding: 1.5rem;\">No active shifts scheduled.</td>\n                  </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div>\n        <div class=\"panel-card\">\n          <div class=\"panel-header\">\n            <h3 class=\"panel-title\"><i class=\"bi bi-building\"></i> Subcontractor Breakdown</h3>\n          </div>\n          <div style=\"display: flex; flex-direction: column; gap: 0.75rem;\">\n            @for (cont of projectService.contractors(); track cont.id) {\n              <div style=\"display: flex; justify-content: space-between; align-items: center; padding: 0.6rem; background: #f8fafc; border-radius: 8px;\">\n                <div>\n                  <div style=\"font-weight: 700; font-size: 0.875rem; color: #0f172a;\">{{ cont.name }}</div>\n                  <div style=\"font-size: 0.75rem; color: #64748b;\">{{ cont.specialty }}</div>\n                </div>\n                <span class=\"badge badge-active\">{{ cont.status }}</span>\n              </div>\n            }\n          </div>\n        </div>\n\n        <div class=\"panel-card\">\n          <div class=\"panel-header\">\n            <h3 class=\"panel-title\"><i class=\"bi bi-calendar-event\"></i> Recent Attendance</h3>\n          </div>\n          <div style=\"display: flex; flex-direction: column; gap: 0.5rem;\">\n            @for (att of projectService.attendanceRecords().slice(0, 5); track att.id) {\n              <div style=\"display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; padding-bottom: 0.4rem; border-bottom: 1px solid #f1f5f9;\">\n                <div>\n                  <div style=\"font-weight: 600;\">{{ att.workerName || att.workerId }}</div>\n                  <div style=\"font-size: 0.75rem; color: #64748b;\">{{ att.date }} ({{ att.workingHours }} hrs)</div>\n                </div>\n                <span class=\"badge\" [ngClass]=\"'badge-' + att.status.toLowerCase()\">{{ att.status }}</span>\n              </div>\n            } @empty {\n              <div style=\"text-align: center; color: #94a3b8; padding: 1rem;\">No recent attendance records.</div>\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- TAB 2: WORKER DIRECTORY & REGISTRATION -->\n  @if (activeSubTab() === 'directory') {\n    <div class=\"panel-card\">\n      <div class=\"filter-bar\">\n        <input type=\"text\" class=\"search-input\" placeholder=\"Search by Worker ID, Name, or Skill...\" [value]=\"searchTerm()\" (input)=\"searchTerm.set($any($event.target).value)\" />\n        \n        <select class=\"filter-select\" [value]=\"selectedCategory()\" (change)=\"selectedCategory.set($any($event.target).value)\">\n          <option value=\"all\">All Categories</option>\n          @for (cat of projectService.workforceCategories(); track cat.id) {\n            <option [value]=\"cat.id\">{{ cat.name }}</option>\n          }\n        </select>\n\n        <select class=\"filter-select\" [value]=\"selectedContractor()\" (change)=\"selectedContractor.set($any($event.target).value)\">\n          <option value=\"all\">All Contractors</option>\n          @for (c of projectService.contractors(); track c.id) {\n            <option [value]=\"c.id\">{{ c.name }}</option>\n          }\n        </select>\n\n        <select class=\"filter-select\" [value]=\"selectedProject()\" (change)=\"selectedProject.set($any($event.target).value)\">\n          <option value=\"all\">All Projects</option>\n          @for (p of projectService.projects(); track p.id) {\n            <option [value]=\"p.id\">{{ p.name }}</option>\n          }\n        </select>\n\n        <select class=\"filter-select\" [value]=\"selectedStatus()\" (change)=\"selectedStatus.set($any($event.target).value)\">\n          <option value=\"all\">All Statuses</option>\n          <option value=\"Active\">Active</option>\n          <option value=\"On Leave\">On Leave</option>\n          <option value=\"Inactive\">Inactive</option>\n        </select>\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"custom-table\">\n          <thead>\n            <tr>\n              <th>Worker ID</th>\n              <th>Name</th>\n              <th>Category</th>\n              <th>Skill / Work Type</th>\n              <th>Contractor</th>\n              <th>Assigned Project</th>\n              <th>Pay Rate</th>\n              <th>Status</th>\n              @if (canManage) { <th>Actions</th> }\n            </tr>\n          </thead>\n          <tbody>\n            @for (w of filteredWorkers(); track w.id) {\n              <tr>\n                <td><strong style=\"color: #2563eb;\">{{ w.workerId || w.id }}</strong></td>\n                <td>\n                  <div style=\"font-weight: 600; color: #0f172a;\">{{ w.name }}</div>\n                  <div style=\"font-size: 0.75rem; color: #64748b;\">{{ w.contactInfo || w.phone || 'No Contact' }}</div>\n                </td>\n                <td><span class=\"badge badge-processing\">{{ w.categoryName || 'Skilled Workers' }}</span></td>\n                <td>{{ w.skillWorkType || w.role }}</td>\n                <td>{{ w.contractorName || 'Direct BuildTrack' }}</td>\n                <td>{{ w.assignedProjectName || w.assignedProject || 'Unassigned' }}</td>\n                <td><strong>\u20B9{{ w.payRate || 500 }}/day</strong></td>\n                <td><span class=\"badge\" [ngClass]=\"'badge-' + w.status.toLowerCase().replace(' ', '')\">{{ w.status }}</span></td>\n                @if (canManage) {\n                  <td>\n                    <button class=\"btn-secondary\" style=\"padding: 0.25rem 0.5rem; font-size: 0.75rem;\" (click)=\"allocWorkerId = w.id; showAllocateModal.set(true)\">\n                      <i class=\"bi bi-arrow-right-circle\"></i> Allocate\n                    </button>\n                  </td>\n                }\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"9\" style=\"text-align: center; color: #94a3b8; padding: 2rem;\">No workers match the specified filters.</td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </div>\n  }\n\n  <!-- TAB 3: WORKFORCE ALLOCATION -->\n  @if (activeSubTab() === 'allocation') {\n    <div class=\"panel-card\">\n      <div class=\"panel-header\">\n        <h3 class=\"panel-title\"><i class=\"bi bi-diagram-3-fill text-primary\"></i> Workforce Allocation & Assignment History</h3>\n        @if (canManage) {\n          <button class=\"btn-primary\" (click)=\"showAllocateModal.set(true)\"><i class=\"bi bi-plus-lg\"></i> New Allocation</button>\n        }\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"custom-table\">\n          <thead>\n            <tr>\n              <th>Worker</th>\n              <th>Assigned Project</th>\n              <th>Contractor</th>\n              <th>Work / Activity</th>\n              <th>Start Date</th>\n              <th>End Date</th>\n              <th>Assignment Status</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (asn of projectService.workerAssignments(); track asn.id) {\n              <tr>\n                <td><strong>{{ asn.workerName || asn.workerId }}</strong></td>\n                <td>{{ asn.projectName || asn.projectId }}</td>\n                <td>{{ asn.contractorName || 'Direct BuildTrack' }}</td>\n                <td>{{ asn.workActivity }}</td>\n                <td>{{ asn.startDate }}</td>\n                <td>{{ asn.endDate || 'Present' }}</td>\n                <td><span class=\"badge\" [ngClass]=\"'badge-' + asn.status.toLowerCase()\">{{ asn.status }}</span></td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"7\" style=\"text-align: center; color: #94a3b8; padding: 2rem;\">No worker allocation history recorded yet.</td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </div>\n  }\n\n  <!-- TAB 4: ATTENDANCE MANAGEMENT -->\n  @if (activeSubTab() === 'attendance') {\n    <div class=\"panel-card\">\n      <div class=\"panel-header\">\n        <h3 class=\"panel-title\"><i class=\"bi bi-calendar-check-fill text-primary\"></i> Attendance Tracking & Working Hours</h3>\n        @if (canMarkAttendance) {\n          <button class=\"btn-primary\" (click)=\"showAttendanceModal.set(true)\"><i class=\"bi bi-check2-square\"></i> Mark Attendance</button>\n        }\n      </div>\n\n      <div class=\"filter-bar\">\n        <input type=\"date\" class=\"search-input\" [value]=\"selectedDate()\" (input)=\"selectedDate.set($any($event.target).value)\" />\n        <select class=\"filter-select\" [value]=\"selectedProject()\" (change)=\"selectedProject.set($any($event.target).value)\">\n          <option value=\"all\">All Projects</option>\n          @for (p of projectService.projects(); track p.id) {\n            <option [value]=\"p.id\">{{ p.name }}</option>\n          }\n        </select>\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"custom-table\">\n          <thead>\n            <tr>\n              <th>Worker</th>\n              <th>Date</th>\n              <th>Project</th>\n              <th>Contractor</th>\n              <th>Status</th>\n              <th>Check In</th>\n              <th>Check Out</th>\n              <th>Working Hours</th>\n              <th>Overtime</th>\n              <th>Remarks</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (att of projectService.attendanceRecords(); track att.id) {\n              <tr>\n                <td>\n                  <div style=\"font-weight: 600;\">{{ att.workerName || att.workerId }}</div>\n                  <div style=\"font-size: 0.75rem; color: #64748b;\">{{ att.workerRole }}</div>\n                </td>\n                <td>{{ att.date }}</td>\n                <td>{{ att.projectName || 'Unassigned' }}</td>\n                <td>{{ att.contractorName || 'Direct' }}</td>\n                <td><span class=\"badge\" [ngClass]=\"'badge-' + att.status.toLowerCase()\">{{ att.status }}</span></td>\n                <td>{{ att.checkIn || '-' }}</td>\n                <td>{{ att.checkOut || '-' }}</td>\n                <td><strong>{{ att.workingHours || 0 }} hrs</strong></td>\n                <td><span style=\"color: #b45309; font-weight: 600;\">+{{ att.overtimeHours || 0 }} hrs</span></td>\n                <td>{{ att.remarks || '-' }}</td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"10\" style=\"text-align: center; color: #94a3b8; padding: 2rem;\">No attendance records found for this date/project.</td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </div>\n  }\n\n  <!-- TAB 5: SHIFT SCHEDULING -->\n  @if (activeSubTab() === 'shifts') {\n    <div class=\"panel-card\">\n      <div class=\"panel-header\">\n        <h3 class=\"panel-title\"><i class=\"bi bi-clock-history text-primary\"></i> Shift Management & Worker Schedules</h3>\n        @if (canManage) {\n          <button class=\"btn-primary\" (click)=\"showShiftModal.set(true)\"><i class=\"bi bi-plus-circle\"></i> Create Shift</button>\n        }\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"custom-table\">\n          <thead>\n            <tr>\n              <th>Shift Name</th>\n              <th>Timings</th>\n              <th>Shift Date</th>\n              <th>Project</th>\n              <th>Assigned Workers</th>\n              <th>Status</th>\n              @if (canManage) { <th>Actions</th> }\n            </tr>\n          </thead>\n          <tbody>\n            @for (s of projectService.shifts(); track s.id) {\n              <tr>\n                <td><strong style=\"color: #0f172a;\">{{ s.name }}</strong></td>\n                <td><i class=\"bi bi-alarm\"></i> {{ s.startTime }} - {{ s.endTime }}</td>\n                <td>{{ s.shiftDate }}</td>\n                <td>{{ s.projectName || s.projectId }}</td>\n                <td><span class=\"badge badge-processing\">{{ s.assignedWorkersCount || s.assignedWorkers?.length || 0 }} Workers</span></td>\n                <td><span class=\"badge badge-scheduled\">{{ s.status }}</span></td>\n                @if (canManage) {\n                  <td>\n                    <button class=\"btn-secondary\" style=\"padding: 0.25rem 0.6rem; font-size: 0.75rem;\" (click)=\"openAssignShiftModal(s)\">\n                      <i class=\"bi bi-person-plus\"></i> Assign Workers\n                    </button>\n                  </td>\n                }\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"7\" style=\"text-align: center; color: #94a3b8; padding: 2rem;\">No shifts scheduled yet.</td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </div>\n  }\n\n  <!-- TAB 6: PAYROLL MONITORING -->\n  @if (activeSubTab() === 'payroll') {\n    <div class=\"panel-card\">\n      <div class=\"panel-header\">\n        <h3 class=\"panel-title\"><i class=\"bi bi-cash-stack text-primary\"></i> Payroll & Workforce Payment Monitoring</h3>\n        <div style=\"display: flex; gap: 0.5rem; align-items: center;\">\n          <input type=\"month\" class=\"search-input\" style=\"width: auto;\" [value]=\"payrollMonth\" (input)=\"payrollMonth = $any($event.target).value\" />\n        </div>\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"custom-table\">\n          <thead>\n            <tr>\n              <th>Worker</th>\n              <th>Month / Year</th>\n              <th>Pay Rate</th>\n              <th>Days Worked</th>\n              <th>Working Hours</th>\n              <th>Overtime</th>\n              <th>Estimated Pay</th>\n              <th>Payroll Status</th>\n              @if (canApprovePayroll) { <th>Actions</th> }\n            </tr>\n          </thead>\n          <tbody>\n            @for (p of projectService.payrollRecords(); track p.id) {\n              <tr>\n                <td>\n                  <div style=\"font-weight: 600;\">{{ p.workerName || p.workerId }}</div>\n                  <div style=\"font-size: 0.75rem; color: #64748b;\">{{ p.workerCategory || 'Skilled' }}</div>\n                </td>\n                <td>{{ p.monthYear }}</td>\n                <td>\u20B9{{ p.payRate }}/day</td>\n                <td><strong>{{ p.workingDays }} days</strong></td>\n                <td>{{ p.workingHours }} hrs</td>\n                <td>+{{ p.overtimeHours }} hrs</td>\n                <td><strong style=\"color: #16a34a; font-size: 1rem;\">\u20B9{{ p.estimatedPay | number:'1.2-2' }}</strong></td>\n                <td><span class=\"badge\" [ngClass]=\"'badge-' + p.status.toLowerCase()\">{{ p.status }}</span></td>\n                @if (canApprovePayroll) {\n                  <td>\n                    @if (p.status === 'Pending') {\n                      <button class=\"btn-secondary\" style=\"padding: 0.2rem 0.5rem; font-size: 0.75rem;\" (click)=\"updatePayrollStatusAction(p.id, 'Approved')\">Approve</button>\n                    } @else if (p.status === 'Approved') {\n                      <button class=\"btn-primary\" style=\"padding: 0.2rem 0.5rem; font-size: 0.75rem;\" (click)=\"updatePayrollStatusAction(p.id, 'Paid')\">Mark Paid</button>\n                    }\n                  </td>\n                }\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"9\" style=\"text-align: center; color: #94a3b8; padding: 2rem;\">No payroll records generated for {{ payrollMonth }}.</td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </div>\n  }\n\n  <!-- MODALS -->\n\n  <!-- Register Worker Modal -->\n  @if (showRegisterModal()) {\n    <div class=\"modal-backdrop\">\n      <div class=\"modal-card\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\">Register New Worker</h3>\n          <button class=\"modal-close\" (click)=\"showRegisterModal.set(false)\">\u00D7</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-grid\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Worker ID (Unique)</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkerId\" placeholder=\"e.g. W-102\" />\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Worker Full Name *</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkerName\" placeholder=\"e.g. Ramesh Kumar\" />\n            </div>\n          </div>\n          <div class=\"form-grid\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Contact Phone / Email</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkerContact\" placeholder=\"+91-9876543210\" />\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Workforce Category</label>\n              <select class=\"form-control\" [(ngModel)]=\"newWorkerCategory\">\n                @for (cat of projectService.workforceCategories(); track cat.id) {\n                  <option [value]=\"cat.id\">{{ cat.name }}</option>\n                }\n              </select>\n            </div>\n          </div>\n          <div class=\"form-grid\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Skill / Work Type *</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkerSkill\" placeholder=\"e.g. Electrician, Mason\" />\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Daily Pay Rate (\u20B9)</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"newWorkerPayRate\" />\n            </div>\n          </div>\n          <div class=\"form-grid\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Subcontractor Firm</label>\n              <select class=\"form-control\" [(ngModel)]=\"newWorkerContractor\">\n                @for (c of projectService.contractors(); track c.id) {\n                  <option [value]=\"c.id\">{{ c.name }}</option>\n                }\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Assigned Project</label>\n              <select class=\"form-control\" [(ngModel)]=\"newWorkerProject\">\n                @for (p of projectService.projects(); track p.id) {\n                  <option [value]=\"p.id\">{{ p.name }}</option>\n                }\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn-secondary\" (click)=\"showRegisterModal.set(false)\">Cancel</button>\n          <button class=\"btn-primary\" (click)=\"submitRegisterWorker()\">Register Worker</button>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- Bulk CSV Upload Modal -->\n  @if (showBulkModal()) {\n    <div class=\"modal-backdrop\">\n      <div class=\"modal-card\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\">Bulk Import Workers (CSV)</h3>\n          <button class=\"modal-close\" (click)=\"showBulkModal.set(false)\">\u00D7</button>\n        </div>\n        <div class=\"modal-body\">\n          <p style=\"font-size: 0.875rem; color: #64748b; margin-bottom: 1rem;\">\n            Upload a CSV file containing columns: <code>Worker ID, Name, Contact, Skill, Category, Pay Rate</code>. Each Worker ID will be verified for uniqueness before database entry.\n          </p>\n          <input type=\"file\" accept=\".csv\" class=\"form-control\" (change)=\"handleFileUpload($event)\" />\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn-secondary\" (click)=\"showBulkModal.set(false)\">Close</button>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- Allocate Worker Modal -->\n  @if (showAllocateModal()) {\n    <div class=\"modal-backdrop\">\n      <div class=\"modal-card\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\">Workforce Allocation</h3>\n          <button class=\"modal-close\" (click)=\"showAllocateModal.set(false)\">\u00D7</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Select Worker *</label>\n            <select class=\"form-control\" [(ngModel)]=\"allocWorkerId\">\n              <option value=\"\">-- Choose Worker --</option>\n              @for (w of projectService.workforce(); track w.id) {\n                <option [value]=\"w.id\">{{ w.name }} ({{ w.workerId || w.id }}) - {{ w.skillWorkType }}</option>\n              }\n            </select>\n          </div>\n          <div class=\"form-grid\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Target Project *</label>\n              <select class=\"form-control\" [(ngModel)]=\"allocProjectId\">\n                @for (p of projectService.projects(); track p.id) {\n                  <option [value]=\"p.id\">{{ p.name }}</option>\n                }\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Contractor</label>\n              <select class=\"form-control\" [(ngModel)]=\"allocContractorId\">\n                @for (c of projectService.contractors(); track c.id) {\n                  <option [value]=\"c.id\">{{ c.name }}</option>\n                }\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Work / Site Activity Description *</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"allocActivity\" placeholder=\"e.g. Electrical Conduit Wiring Level 2\" />\n          </div>\n          <div class=\"form-grid\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Start Date *</label>\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"allocStartDate\" />\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Expected End Date</label>\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"allocEndDate\" />\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn-secondary\" (click)=\"showAllocateModal.set(false)\">Cancel</button>\n          <button class=\"btn-primary\" (click)=\"submitAllocateWorker()\">Save Allocation</button>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- Mark Attendance Modal -->\n  @if (showAttendanceModal()) {\n    <div class=\"modal-backdrop\">\n      <div class=\"modal-card\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\">Log Attendance Record</h3>\n          <button class=\"modal-close\" (click)=\"showAttendanceModal.set(false)\">\u00D7</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Worker *</label>\n            <select class=\"form-control\" [(ngModel)]=\"attWorkerId\">\n              <option value=\"\">-- Choose Worker --</option>\n              @for (w of projectService.workforce(); track w.id) {\n                <option [value]=\"w.id\">{{ w.name }} ({{ w.workerId }})</option>\n              }\n            </select>\n          </div>\n          <div class=\"form-grid\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Attendance Status</label>\n              <select class=\"form-control\" [(ngModel)]=\"attStatus\">\n                <option value=\"Present\">Present</option>\n                <option value=\"Absent\">Absent</option>\n                <option value=\"Leave\">Leave</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Project</label>\n              <select class=\"form-control\" [(ngModel)]=\"attProjectId\">\n                @for (p of projectService.projects(); track p.id) {\n                  <option [value]=\"p.id\">{{ p.name }}</option>\n                }\n              </select>\n            </div>\n          </div>\n          @if (attStatus === 'Present') {\n            <div class=\"form-grid\">\n              <div class=\"form-group\">\n                <label class=\"form-label\">Check In Time</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"attCheckIn\" placeholder=\"08:00 AM\" />\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-label\">Check Out Time</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"attCheckOut\" placeholder=\"05:00 PM\" />\n              </div>\n            </div>\n          }\n          <div class=\"form-group\">\n            <label class=\"form-label\">Remarks</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"attRemarks\" placeholder=\"Optional comments...\" />\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn-secondary\" (click)=\"showAttendanceModal.set(false)\">Cancel</button>\n          <button class=\"btn-primary\" (click)=\"submitLogAttendance()\">Save Attendance</button>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- Create Shift Modal -->\n  @if (showShiftModal()) {\n    <div class=\"modal-backdrop\">\n      <div class=\"modal-card\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\">Create New Shift Schedule</h3>\n          <button class=\"modal-close\" (click)=\"showShiftModal.set(false)\">\u00D7</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Shift Name *</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newShiftName\" placeholder=\"e.g. Morning Shift\" />\n          </div>\n          <div class=\"form-grid\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Start Time *</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newShiftStart\" placeholder=\"08:00 AM\" />\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">End Time *</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newShiftEnd\" placeholder=\"05:00 PM\" />\n            </div>\n          </div>\n          <div class=\"form-grid\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Project *</label>\n              <select class=\"form-control\" [(ngModel)]=\"newShiftProject\">\n                @for (p of projectService.projects(); track p.id) {\n                  <option [value]=\"p.id\">{{ p.name }}</option>\n                }\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Shift Date *</label>\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"newShiftDate\" />\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn-secondary\" (click)=\"showShiftModal.set(false)\">Cancel</button>\n          <button class=\"btn-primary\" (click)=\"submitCreateShift()\">Create Shift</button>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- Assign Workers To Shift Modal -->\n  @if (showAssignShiftModal()) {\n    <div class=\"modal-backdrop\">\n      <div class=\"modal-card\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\">Assign Workers to {{ selectedShiftForAssign()?.name }}</h3>\n          <button class=\"modal-close\" (click)=\"showAssignShiftModal.set(false)\">\u00D7</button>\n        </div>\n        <div class=\"modal-body\">\n          <div style=\"font-size: 0.85rem; color: #64748b; margin-bottom: 1rem;\">\n            Select workers to assign to <strong>{{ selectedShiftForAssign()?.name }}</strong> ({{ selectedShiftForAssign()?.startTime }} - {{ selectedShiftForAssign()?.endTime }}). Conflicting active shifts on the same date will be automatically checked.\n          </div>\n          <div style=\"max-height: 250px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.5rem;\">\n            @for (w of projectService.workforce(); track w.id) {\n              <label style=\"display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem; background: #f8fafc; border-radius: 8px; cursor: pointer;\">\n                <input type=\"checkbox\" [checked]=\"selectedWorkerIdsForShift.includes(w.id)\" (change)=\"toggleWorkerShiftSelection(w.id)\" />\n                <div>\n                  <strong style=\"font-size: 0.875rem;\">{{ w.name }}</strong> ({{ w.workerId || w.id }})\n                  <div style=\"font-size: 0.75rem; color: #64748b;\">{{ w.skillWorkType }} - {{ w.assignedProjectName || 'Unassigned' }}</div>\n                </div>\n              </label>\n            }\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn-secondary\" (click)=\"showAssignShiftModal.set(false)\">Cancel</button>\n          <button class=\"btn-primary\" (click)=\"submitAssignWorkersToShift()\">Save Shift Assignments</button>\n        </div>\n      </div>\n    </div>\n  }\n</div>\n", styles: [".workforce-container {\n  font-family: 'Inter', system-ui, -apple-system, sans-serif;\n  color: #1e293b;\n  padding: 0.5rem;\n}\n\n/* Header & Tabs */\n.workforce-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  gap: 1rem;\n}\n\n.sub-tab-nav {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  background: rgba(241, 245, 249, 0.8);\n  padding: 0.35rem;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n\n.tab-btn {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tab-btn:hover {\n  color: #0f172a;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.tab-btn.active {\n  background: #ffffff;\n  color: #2563eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.btn-primary {\n  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);\n  color: white;\n  border: none;\n  padding: 0.55rem 1.25rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);\n}\n\n.btn-secondary {\n  background: #f8fafc;\n  color: #334155;\n  border: 1px solid #cbd5e1;\n  padding: 0.55rem 1.1rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.btn-secondary:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n\n/* Executive Cards */\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n.metric-card {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 1.1rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: transform 0.2s ease;\n}\n\n.metric-card:hover {\n  transform: translateY(-2px);\n}\n\n.metric-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n\n.icon-blue { background: #dbeafe; color: #1d4ed8; }\n.icon-green { background: #dcfce7; color: #15803d; }\n.icon-emerald { background: #d1fae5; color: #047857; }\n.icon-rose { background: #ffe4e6; color: #be123c; }\n.icon-amber { background: #fef3c7; color: #b45309; }\n.icon-purple { background: #f3e8ff; color: #7e22ce; }\n\n.metric-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.metric-val {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.2;\n}\n\n.metric-label {\n  font-size: 0.75rem;\n  color: #64748b;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 0.2rem;\n}\n\n/* Glass & Card Layouts */\n.content-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1.25rem;\n}\n\n@media (max-width: 1024px) {\n  .content-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n.panel-card {\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 1.25rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  margin-bottom: 1.25rem;\n}\n\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.panel-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n/* Filters bar */\n.filter-bar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  background: #f8fafc;\n  padding: 0.85rem;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  padding: 0.5rem 0.85rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n}\n\n.search-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n\n.filter-select {\n  padding: 0.5rem 0.85rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.875rem;\n  background: white;\n  color: #334155;\n  outline: none;\n}\n\n/* Table Styling */\n.table-responsive {\n  width: 100%;\n  overflow-x: auto;\n}\n\n.custom-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.875rem;\n}\n\n.custom-table th {\n  background: #f8fafc;\n  color: #475569;\n  font-weight: 600;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.custom-table td {\n  padding: 0.85rem 1rem;\n  border-bottom: 1px solid #f1f5f9;\n  color: #334155;\n  vertical-align: middle;\n}\n\n.custom-table tr:hover {\n  background: #f8fafc;\n}\n\n/* Status Badges */\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.65rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.badge-active, .badge-present, .badge-paid {\n  background: #dcfce7;\n  color: #15803d;\n}\n\n.badge-inactive, .badge-absent {\n  background: #ffe4e6;\n  color: #be123c;\n}\n\n.badge-leave, .badge-onleave, .badge-pending {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.badge-transferred, .badge-processing {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n\n.badge-approved {\n  background: #d1fae5;\n  color: #047857;\n}\n\n.badge-scheduled {\n  background: #f3e8ff;\n  color: #7e22ce;\n}\n\n/* Progress bars */\n.progress-bar-bg {\n  width: 100%;\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-top: 0.35rem;\n}\n\n.progress-bar-fill {\n  height: 100%;\n  background: linear-gradient(90deg, #2563eb, #3b82f6);\n  border-radius: 4px;\n}\n\n/* Modals */\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 23, 42, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n\n.modal-card {\n  background: white;\n  width: 100%;\n  max-width: 580px;\n  border-radius: 16px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  animation: modalIn 0.2s ease-out;\n}\n\n@keyframes modalIn {\n  from { opacity: 0; transform: scale(0.95); }\n  to { opacity: 1; transform: scale(1); }\n}\n\n.modal-header {\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal-title {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n\n.modal-close {\n  background: transparent;\n  border: none;\n  font-size: 1.25rem;\n  cursor: pointer;\n  color: #94a3b8;\n}\n\n.modal-body {\n  padding: 1.5rem;\n  max-height: 75vh;\n  overflow-y: auto;\n}\n\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n\n@media (max-width: 640px) {\n  .form-grid { grid-template-columns: 1fr; }\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 0.35rem;\n}\n\n.form-control {\n  width: 100%;\n  padding: 0.55rem 0.85rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.875rem;\n  outline: none;\n}\n\n.form-control:focus {\n  border-color: #2563eb;\n}\n\n.modal-footer {\n  padding: 1rem 1.5rem;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n\n/* Toast */\n.toast-container {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 1100;\n}\n\n.toast {\n  padding: 0.85rem 1.25rem;\n  border-radius: 10px;\n  color: white;\n  font-weight: 600;\n  font-size: 0.875rem;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.toast-success { background: #10b981; }\n.toast-error { background: #ef4444; }\n.toast-warning { background: #f59e0b; }\n"] }]
    }], null, { initialTab: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(WorkforceManagementComponent, { className: "WorkforceManagementComponent", filePath: "src/app/components/workforce-management/workforce-management.ts", lineNumber: 14 }); })();
