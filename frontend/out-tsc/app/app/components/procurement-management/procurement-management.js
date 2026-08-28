import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ProjectService } from '../../services/project.service';
import { AuthService } from '../../services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.po_item_id;
function ProcurementManagementComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function ProcurementManagementComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ProcurementManagementComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setTab("categories")); });
    i0.ɵɵtext(1, "Categories");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r0.activeTab() === "categories");
} }
function ProcurementManagementComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setTab("vendors")); });
    i0.ɵɵtext(1, "Vendors");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r0.activeTab() === "vendors");
} }
function ProcurementManagementComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setTab("orders")); });
    i0.ɵɵtext(1, "Purchase Orders");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r0.activeTab() === "orders");
} }
function ProcurementManagementComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setTab("receipts")); });
    i0.ɵɵtext(1, "Goods Receipt");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r0.activeTab() === "receipts");
} }
function ProcurementManagementComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setTab("invoices")); });
    i0.ɵɵtext(1, "Invoices & Payments");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r0.activeTab() === "invoices");
} }
function ProcurementManagementComponent_Conditional_21_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "span");
    i0.ɵɵtext(2, "Active POs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 9)(6, "span");
    i0.ɵɵtext(7, "Pending Invoices");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(((tmp_2_0 = ctx_r0.projectService.procurementSummary()) == null ? null : tmp_2_0.active_purchase_orders) || 0);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(((tmp_3_0 = ctx_r0.projectService.procurementSummary()) == null ? null : tmp_3_0.pending_invoices) || 0);
} }
function ProcurementManagementComponent_Conditional_21_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Create a request now. The request is saved in the backend and becomes visible to Admin and Project Manager.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 11);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_21_Conditional_15_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setTab("requests")); });
    i0.ɵɵtext(3, "+ Create Procurement Request");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_21_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Open Requests to approve/reject, then create PO, receive goods, create invoice and update payment.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 12)(3, "button", 11);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_21_Conditional_16_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setTab("requests")); });
    i0.ɵɵtext(4, "Manage Requests");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 13);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_21_Conditional_16_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setTab("orders")); });
    i0.ɵɵtext(6, "Create Purchase Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 13);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_21_Conditional_16_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setTab("invoices")); });
    i0.ɵɵtext(8, "Manage Invoices");
    i0.ɵɵelementEnd()();
} }
function ProcurementManagementComponent_Conditional_21_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "You have read-only access to the current procurement records.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 11);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_21_Conditional_17_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setTab("requests")); });
    i0.ɵɵtext(3, "View Requests");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "span");
    i0.ɵɵtext(3, "Total Requests");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 9)(7, "span");
    i0.ɵɵtext(8, "Pending Requests");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(11, ProcurementManagementComponent_Conditional_21_Conditional_11_Template, 10, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 10)(13, "h4");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(15, ProcurementManagementComponent_Conditional_21_Conditional_15_Template, 4, 0);
    i0.ɵɵconditionalCreate(16, ProcurementManagementComponent_Conditional_21_Conditional_16_Template, 9, 0);
    i0.ɵɵconditionalCreate(17, ProcurementManagementComponent_Conditional_21_Conditional_17_Template, 4, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.isSiteEngineer() ? ctx_r0.projectService.procurementRequests().length : ((tmp_1_0 = ctx_r0.projectService.procurementSummary()) == null ? null : tmp_1_0.total_procurement_requests) || 0);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.isSiteEngineer() ? ctx_r0.pendingCount() : ((tmp_2_0 = ctx_r0.projectService.procurementSummary()) == null ? null : tmp_2_0.pending_requests) || 0);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r0.isSiteEngineer() ? 11 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.isSiteEngineer() ? "Start a Procurement Request" : ctx_r0.isAdmin() ? "Manage Procurement Operations" : "Procurement Tracking");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isSiteEngineer() ? 15 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 16 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isProjectManager() ? 17 : -1);
} }
function ProcurementManagementComponent_Conditional_22_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_22_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.cancelCategoryEdit()); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_22_For_25_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "button", 20);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_22_For_25_Template_button_click_8_listener() { const c_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.editCategory(c_r13)); });
    i0.ɵɵtext(9, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 21);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_22_For_25_Template_button_click_10_listener() { const c_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deleteCategory(c_r13)); });
    i0.ɵɵtext(11, "Delete");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const c_r13 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r13.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r13.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r13.description || "-");
} }
function ProcurementManagementComponent_Conditional_22_ForEmpty_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 22);
    i0.ɵɵtext(2, "No categories found.");
    i0.ɵɵelementEnd()();
} }
function ProcurementManagementComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14)(4, "input", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_22_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.categoryForm.id, $event) || (ctx_r0.categoryForm.id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_22_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.categoryForm.name, $event) || (ctx_r0.categoryForm.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_22_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.categoryForm.description, $event) || (ctx_r0.categoryForm.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 12)(8, "button", 11);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_22_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.saveCategory()); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, ProcurementManagementComponent_Conditional_22_Conditional_10_Template, 2, 0, "button", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 19)(12, "table")(13, "thead")(14, "tr")(15, "th");
    i0.ɵɵtext(16, "ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "tbody");
    i0.ɵɵrepeaterCreate(24, ProcurementManagementComponent_Conditional_22_For_25_Template, 12, 3, "tr", null, _forTrack0, false, ProcurementManagementComponent_Conditional_22_ForEmpty_26_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.editingCategoryId ? "Edit Category" : "Add Procurement Category");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.categoryForm.id);
    i0.ɵɵproperty("disabled", !!ctx_r0.editingCategoryId);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.categoryForm.name);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.categoryForm.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.editingCategoryId ? "Update" : "Save", " Category");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.editingCategoryId ? 10 : -1);
    i0.ɵɵadvance(14);
    i0.ɵɵrepeater(ctx_r0.categories());
} }
function ProcurementManagementComponent_Conditional_23_Conditional_0_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r15.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r15.name);
} }
function ProcurementManagementComponent_Conditional_23_Conditional_0_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_23_Conditional_0_Conditional_22_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.cancelVendorEdit()); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_23_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14)(4, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_23_Conditional_0_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.vendorForm.id, $event) || (ctx_r0.vendorForm.id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_23_Conditional_0_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.vendorForm.name, $event) || (ctx_r0.vendorForm.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 25);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_23_Conditional_0_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.vendorForm.contact_person, $event) || (ctx_r0.vendorForm.contact_person = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_23_Conditional_0_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.vendorForm.contact_number, $event) || (ctx_r0.vendorForm.contact_number = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_23_Conditional_0_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.vendorForm.email, $event) || (ctx_r0.vendorForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_23_Conditional_0_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.vendorForm.address, $event) || (ctx_r0.vendorForm.address = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_23_Conditional_0_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.vendorForm.category, $event) || (ctx_r0.vendorForm.category = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(11, ProcurementManagementComponent_Conditional_23_Conditional_0_For_12_Template, 2, 2, "option", 30, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_23_Conditional_0_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.vendorForm.products_services, $event) || (ctx_r0.vendorForm.products_services = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_23_Conditional_0_Template_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.vendorForm.status, $event) || (ctx_r0.vendorForm.status = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(15, "option");
    i0.ɵɵtext(16, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option");
    i0.ɵɵtext(18, "Inactive");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 12)(20, "button", 11);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_23_Conditional_0_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.saveVendor()); });
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(22, ProcurementManagementComponent_Conditional_23_Conditional_0_Conditional_22_Template, 2, 0, "button", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.editingVendorId ? "Edit Vendor" : "Add Vendor");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.vendorForm.id);
    i0.ɵɵproperty("disabled", !!ctx_r0.editingVendorId);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.vendorForm.name);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.vendorForm.contact_person);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.vendorForm.contact_number);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.vendorForm.email);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.vendorForm.address);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.vendorForm.category);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.categories());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.vendorForm.products_services);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.vendorForm.status);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", ctx_r0.editingVendorId ? "Update" : "Save", " Vendor");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.editingVendorId ? 22 : -1);
} }
function ProcurementManagementComponent_Conditional_23_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Action");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_23_For_20_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "button", 20);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_23_For_20_Conditional_17_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r17); const v_r18 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.editVendor(v_r18)); });
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 21);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_23_For_20_Conditional_17_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r17); const v_r18 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deleteVendor(v_r18)); });
    i0.ɵɵtext(4, "Delete");
    i0.ɵɵelementEnd()();
} }
function ProcurementManagementComponent_Conditional_23_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelement(7, "br");
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "span", 32);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(17, ProcurementManagementComponent_Conditional_23_For_20_Conditional_17_Template, 5, 0, "td");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r18 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r18.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r18.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r18.contact_person || "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r18.contact_number || v_r18.email || "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r18.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r18.products_services || "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r18.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 17 : -1);
} }
function ProcurementManagementComponent_Conditional_23_ForEmpty_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "No vendors found.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r0.isAdmin() ? 7 : 6);
} }
function ProcurementManagementComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ProcurementManagementComponent_Conditional_23_Conditional_0_Template, 23, 13, "div", 10);
    i0.ɵɵelementStart(1, "div", 19)(2, "table")(3, "thead")(4, "tr")(5, "th");
    i0.ɵɵtext(6, "ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Vendor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Contact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Products");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, ProcurementManagementComponent_Conditional_23_Conditional_17_Template, 2, 0, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵrepeaterCreate(19, ProcurementManagementComponent_Conditional_23_For_20_Template, 18, 8, "tr", null, _forTrack0, false, ProcurementManagementComponent_Conditional_23_ForEmpty_21_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 0 : -1);
    i0.ɵɵadvance(17);
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 17 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.vendors());
} }
function ProcurementManagementComponent_Conditional_24_Conditional_0_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r21 = ctx.$implicit;
    i0.ɵɵproperty("value", p_r21.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r21.name);
} }
function ProcurementManagementComponent_Conditional_24_Conditional_0_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r22.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r22.name);
} }
function ProcurementManagementComponent_Conditional_24_Conditional_0_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r23 = ctx.$implicit;
    i0.ɵɵproperty("value", m_r23.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", m_r23.name, " (Stock: ", m_r23.inStock, " ", m_r23.unit, ")");
} }
function ProcurementManagementComponent_Conditional_24_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "h4");
    i0.ɵɵtext(2, "New Procurement Request");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14)(4, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.requestForm.projectId, $event) || (ctx_r0.requestForm.projectId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(5, "option", 35);
    i0.ɵɵtext(6, "Select project *");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(7, ProcurementManagementComponent_Conditional_24_Conditional_0_For_8_Template, 2, 2, "option", 30, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.requestForm.categoryId, $event) || (ctx_r0.requestForm.categoryId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(10, "option", 35);
    i0.ɵɵtext(11, "Select category *");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(12, ProcurementManagementComponent_Conditional_24_Conditional_0_For_13_Template, 2, 2, "option", 30, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "input", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.requestForm.itemName, $event) || (ctx_r0.requestForm.itemName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_select_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.requestForm.materialId, $event) || (ctx_r0.requestForm.materialId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(16, "option", 35);
    i0.ɵɵtext(17, "Optional: link inventory material");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(18, ProcurementManagementComponent_Conditional_24_Conditional_0_For_19_Template, 2, 4, "option", 30, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.requestForm.quantity, $event) || (ctx_r0.requestForm.quantity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.requestForm.unit, $event) || (ctx_r0.requestForm.unit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "input", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.requestForm.requiredDate, $event) || (ctx_r0.requestForm.requiredDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.requestForm.priority, $event) || (ctx_r0.requestForm.priority = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(24, "option");
    i0.ɵɵtext(25, "Low");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option");
    i0.ɵɵtext(27, "Medium");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option");
    i0.ɵɵtext(29, "High");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option");
    i0.ɵɵtext(31, "Critical");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "input", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_input_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.requestForm.purpose, $event) || (ctx_r0.requestForm.purpose = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "textarea", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_textarea_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.requestForm.remarks, $event) || (ctx_r0.requestForm.remarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 12)(35, "button", 42);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_24_Conditional_0_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.submitRequest()); });
    i0.ɵɵtext(36, "Submit Procurement Request");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requestForm.projectId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.projects());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requestForm.categoryId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.categories());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requestForm.itemName);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requestForm.materialId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.materials());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requestForm.quantity);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requestForm.unit);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requestForm.requiredDate);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requestForm.priority);
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requestForm.purpose);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requestForm.remarks);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.loading());
} }
function ProcurementManagementComponent_Conditional_24_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Action");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_24_For_41_Conditional_18_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_24_For_41_Conditional_18_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const r_r25 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.approve(r_r25)); });
    i0.ɵɵtext(1, "Approve");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 21);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_24_For_41_Conditional_18_Conditional_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r24); const r_r25 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.reject(r_r25)); });
    i0.ɵɵtext(3, "Reject");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_24_For_41_Conditional_18_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "-");
} }
function ProcurementManagementComponent_Conditional_24_For_41_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵconditionalCreate(1, ProcurementManagementComponent_Conditional_24_For_41_Conditional_18_Conditional_1_Template, 4, 0)(2, ProcurementManagementComponent_Conditional_24_For_41_Conditional_18_Conditional_2_Template, 1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(r_r25.status === "Pending" ? 1 : 2);
} }
function ProcurementManagementComponent_Conditional_24_For_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "span", 32);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(18, ProcurementManagementComponent_Conditional_24_For_41_Conditional_18_Template, 3, 1, "td");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r25 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r25.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r25.projectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r25.itemName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", r_r25.quantity, " ", r_r25.unit);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r25.requiredDate || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r25.priority);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r25.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r25.rejectionReason || r_r25.remarks || "-");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 18 : -1);
} }
function ProcurementManagementComponent_Conditional_24_ForEmpty_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "No procurement requests found.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r0.isAdmin() ? 9 : 8);
} }
function ProcurementManagementComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵconditionalCreate(0, ProcurementManagementComponent_Conditional_24_Conditional_0_Template, 37, 11, "div", 10);
    i0.ɵɵelementStart(1, "div", 19)(2, "div", 33)(3, "input", 34);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.searchText, $event) || (ctx_r0.searchText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_24_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.selectedStatus, $event) || (ctx_r0.selectedStatus = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(5, "option");
    i0.ɵɵtext(6, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "option");
    i0.ɵɵtext(8, "Pending");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option");
    i0.ɵɵtext(10, "Approved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option");
    i0.ɵɵtext(12, "Rejected");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "option");
    i0.ɵɵtext(14, "Processing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option");
    i0.ɵɵtext(16, "Completed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option");
    i0.ɵɵtext(18, "Cancelled");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "table")(20, "thead")(21, "tr")(22, "th");
    i0.ɵɵtext(23, "Request");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "Item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "Qty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th");
    i0.ɵɵtext(31, "Required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th");
    i0.ɵɵtext(33, "Priority");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "th");
    i0.ɵɵtext(35, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "th");
    i0.ɵɵtext(37, "Remarks / Reason");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(38, ProcurementManagementComponent_Conditional_24_Conditional_38_Template, 2, 0, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "tbody");
    i0.ɵɵrepeaterCreate(40, ProcurementManagementComponent_Conditional_24_For_41_Template, 19, 10, "tr", null, _forTrack0, false, ProcurementManagementComponent_Conditional_24_ForEmpty_42_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.isSiteEngineer() ? 0 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.searchText);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.selectedStatus);
    i0.ɵɵadvance(34);
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 38 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.filteredRequests());
} }
function ProcurementManagementComponent_Conditional_25_Conditional_0_For_8_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r27 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", v_r27.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(v_r27.name);
} }
function ProcurementManagementComponent_Conditional_25_Conditional_0_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ProcurementManagementComponent_Conditional_25_Conditional_0_For_8_Conditional_0_Template, 2, 2, "option", 30);
} if (rf & 2) {
    const v_r27 = ctx.$implicit;
    i0.ɵɵconditional(v_r27.status === "Active" ? 0 : -1);
} }
function ProcurementManagementComponent_Conditional_25_Conditional_0_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", r_r28.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", r_r28.id, " - ", r_r28.itemName);
} }
function ProcurementManagementComponent_Conditional_25_Conditional_0_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r29 = ctx.$implicit;
    i0.ɵɵproperty("value", p_r29.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r29.name);
} }
function ProcurementManagementComponent_Conditional_25_Conditional_0_For_27_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r32 = ctx.$implicit;
    i0.ɵɵproperty("value", m_r32.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(m_r32.name);
} }
function ProcurementManagementComponent_Conditional_25_Conditional_0_For_27_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_For_27_Template_input_ngModelChange_1_listener($event) { const item_r31 = i0.ɵɵrestoreView(_r30).$implicit; i0.ɵɵtwoWayBindingSet(item_r31.description, $event) || (item_r31.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "input", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_For_27_Template_input_ngModelChange_2_listener($event) { const item_r31 = i0.ɵɵrestoreView(_r30).$implicit; i0.ɵɵtwoWayBindingSet(item_r31.quantity, $event) || (item_r31.quantity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 52);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_For_27_Template_input_ngModelChange_3_listener($event) { const item_r31 = i0.ɵɵrestoreView(_r30).$implicit; i0.ɵɵtwoWayBindingSet(item_r31.unit, $event) || (item_r31.unit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 53);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_For_27_Template_input_ngModelChange_4_listener($event) { const item_r31 = i0.ɵɵrestoreView(_r30).$implicit; i0.ɵɵtwoWayBindingSet(item_r31.unit_price, $event) || (item_r31.unit_price = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_For_27_Template_select_ngModelChange_5_listener($event) { const item_r31 = i0.ɵɵrestoreView(_r30).$implicit; i0.ɵɵtwoWayBindingSet(item_r31.material_id, $event) || (item_r31.material_id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(6, "option", 35);
    i0.ɵɵtext(7, "No inventory material link");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(8, ProcurementManagementComponent_Conditional_25_Conditional_0_For_27_For_9_Template, 2, 2, "option", 30, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 54);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_25_Conditional_0_For_27_Template_button_click_10_listener() { const ɵ$index_543_r33 = i0.ɵɵrestoreView(_r30).$index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.removePOItem(ɵ$index_543_r33)); });
    i0.ɵɵtext(11, "Remove");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", item_r31.description);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", item_r31.quantity);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", item_r31.unit);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", item_r31.unit_price);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", item_r31.material_id);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.materials());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.poForm.items.length === 1);
} }
function ProcurementManagementComponent_Conditional_25_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "h4");
    i0.ɵɵtext(2, "Create Purchase Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14)(4, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.poForm.vendor_id, $event) || (ctx_r0.poForm.vendor_id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(5, "option", 35);
    i0.ɵɵtext(6, "Select active vendor *");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(7, ProcurementManagementComponent_Conditional_25_Conditional_0_For_8_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.poForm.procurement_request_id, $event) || (ctx_r0.poForm.procurement_request_id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ProcurementManagementComponent_Conditional_25_Conditional_0_Template_select_change_9_listener() { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onRequestForPO()); });
    i0.ɵɵelementStart(10, "option", 35);
    i0.ɵɵtext(11, "Select approved request *");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(12, ProcurementManagementComponent_Conditional_25_Conditional_0_For_13_Template, 2, 3, "option", 30, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_Template_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.poForm.project_id, $event) || (ctx_r0.poForm.project_id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(15, "option", 35);
    i0.ɵɵtext(16, "Project auto-fills from request *");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(17, ProcurementManagementComponent_Conditional_25_Conditional_0_For_18_Template, 2, 2, "option", 30, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.poForm.expected_delivery_date, $event) || (ctx_r0.poForm.expected_delivery_date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 45);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.poForm.tax_amount, $event) || (ctx_r0.poForm.tax_amount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.poForm.additional_charges, $event) || (ctx_r0.poForm.additional_charges = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "textarea", 47);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_25_Conditional_0_Template_textarea_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.poForm.notes, $event) || (ctx_r0.poForm.notes = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "h5");
    i0.ɵɵtext(24, "Purchase Order Items");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 48);
    i0.ɵɵrepeaterCreate(26, ProcurementManagementComponent_Conditional_25_Conditional_0_For_27_Template, 12, 6, "div", 49, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 12)(29, "button", 13);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_25_Conditional_0_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.addPOItem()); });
    i0.ɵɵtext(30, "+ Add Item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "span", 50);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "button", 11);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_25_Conditional_0_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.createPO()); });
    i0.ɵɵtext(34, "Create Purchase Order");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.poForm.vendor_id);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.vendors());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.poForm.procurement_request_id);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.approvedRequests());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.poForm.project_id);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.projects());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.poForm.expected_delivery_date);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.poForm.tax_amount);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.poForm.additional_charges);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.poForm.notes);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r0.poForm.items);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("Subtotal: \u20B9", ctx_r0.poSubtotal(), " | Total: \u20B9", ctx_r0.poTotal());
} }
function ProcurementManagementComponent_Conditional_25_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Action");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_25_For_20_Conditional_14_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_25_For_20_Conditional_14_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const po_r36 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.advancePO(po_r36)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const po_r36 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(po_r36.status === "Issued" ? "Confirm" : "Start Processing");
} }
function ProcurementManagementComponent_Conditional_25_For_20_Conditional_14_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_25_For_20_Conditional_14_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r37); const po_r36 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectPOForReceipt(po_r36)); });
    i0.ɵɵtext(1, "Receive Goods");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_25_For_20_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵconditionalCreate(1, ProcurementManagementComponent_Conditional_25_For_20_Conditional_14_Conditional_1_Template, 2, 1, "button", 55);
    i0.ɵɵconditionalCreate(2, ProcurementManagementComponent_Conditional_25_For_20_Conditional_14_Conditional_2_Template, 2, 0, "button", 55);
    i0.ɵɵelementStart(3, "button", 20);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_25_For_20_Conditional_14_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r34); const po_r36 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectPOForInvoice(po_r36)); });
    i0.ɵɵtext(4, "Invoice");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const po_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(po_r36.status === "Issued" || po_r36.status === "Confirmed" ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(po_r36.status !== "Received" && po_r36.status !== "Cancelled" ? 2 : -1);
} }
function ProcurementManagementComponent_Conditional_25_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td")(10, "span", 32);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(14, ProcurementManagementComponent_Conditional_25_For_20_Conditional_14_Template, 5, 2, "td");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const po_r36 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(po_r36.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(po_r36.vendor_name || po_r36.vendor_id || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(po_r36.project_name || po_r36.project_id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", po_r36.total_amount || 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(po_r36.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(po_r36.expected_delivery_date || "-");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 14 : -1);
} }
function ProcurementManagementComponent_Conditional_25_ForEmpty_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "No purchase orders found.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r0.isAdmin() ? 7 : 6);
} }
function ProcurementManagementComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ProcurementManagementComponent_Conditional_25_Conditional_0_Template, 35, 9, "div", 10);
    i0.ɵɵelementStart(1, "div", 19)(2, "table")(3, "thead")(4, "tr")(5, "th");
    i0.ɵɵtext(6, "PO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Vendor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Expected Delivery");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, ProcurementManagementComponent_Conditional_25_Conditional_17_Template, 2, 0, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵrepeaterCreate(19, ProcurementManagementComponent_Conditional_25_For_20_Template, 15, 7, "tr", null, _forTrack0, false, ProcurementManagementComponent_Conditional_25_ForEmpty_21_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 0 : -1);
    i0.ɵɵadvance(17);
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 17 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.orders());
} }
function ProcurementManagementComponent_Conditional_26_For_8_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const po_r39 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", po_r39.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", po_r39.id, " - ", po_r39.status);
} }
function ProcurementManagementComponent_Conditional_26_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ProcurementManagementComponent_Conditional_26_For_8_Conditional_0_Template, 2, 3, "option", 30);
} if (rf & 2) {
    const po_r39 = ctx.$implicit;
    i0.ɵɵconditional(po_r39.status !== "Received" && po_r39.status !== "Cancelled" ? 0 : -1);
} }
function ProcurementManagementComponent_Conditional_26_Conditional_12_For_15_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "input", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_26_Conditional_12_For_15_Template_input_ngModelChange_8_listener($event) { const item_r41 = i0.ɵɵrestoreView(_r40).$implicit; i0.ɵɵtwoWayBindingSet(item_r41.received_quantity, $event) || (item_r41.received_quantity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r41.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r41.ordered_quantity);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r41.remaining_quantity);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("max", item_r41.remaining_quantity);
    i0.ɵɵtwoWayProperty("ngModel", item_r41.received_quantity);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r41.unit);
} }
function ProcurementManagementComponent_Conditional_26_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 58)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Ordered");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Remaining");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Receive Now");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Unit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "tbody");
    i0.ɵɵrepeaterCreate(14, ProcurementManagementComponent_Conditional_26_Conditional_12_For_15_Template, 11, 6, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(14);
    i0.ɵɵrepeater(ctx_r0.receiptForm.items);
} }
function ProcurementManagementComponent_Conditional_26_Conditional_16_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelement(4, "br");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const gr_r42 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(gr_r42.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" \u2014 ", gr_r42.received_date, " \u2014 ", gr_r42.delivery_note_number || "No delivery note");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(gr_r42.remarks || "");
} }
function ProcurementManagementComponent_Conditional_26_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "h5");
    i0.ɵɵtext(2, "Receipts for Selected PO");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, ProcurementManagementComponent_Conditional_26_Conditional_16_For_4_Template, 7, 4, "div", 60, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.receipts());
} }
function ProcurementManagementComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "h4");
    i0.ɵɵtext(2, "Goods Receipt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14)(4, "select", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_26_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.receiptForm.purchase_order_id, $event) || (ctx_r0.receiptForm.purchase_order_id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ProcurementManagementComponent_Conditional_26_Template_select_change_4_listener() { i0.ɵɵrestoreView(_r38); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectPOForReceipt(ctx_r0.orders().find(p => p.id === ctx_r0.receiptForm.purchase_order_id))); });
    i0.ɵɵelementStart(5, "option", 35);
    i0.ɵɵtext(6, "Select PO");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(7, ProcurementManagementComponent_Conditional_26_For_8_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_26_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.receiptForm.received_date, $event) || (ctx_r0.receiptForm.received_date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 56);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_26_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.receiptForm.delivery_note_number, $event) || (ctx_r0.receiptForm.delivery_note_number = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "textarea", 57);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_26_Template_textarea_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.receiptForm.remarks, $event) || (ctx_r0.receiptForm.remarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(12, ProcurementManagementComponent_Conditional_26_Conditional_12_Template, 16, 0, "table", 58);
    i0.ɵɵelementStart(13, "div", 12)(14, "button", 11);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_26_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r38); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.receiveGoods()); });
    i0.ɵɵtext(15, "Save Goods Receipt & Update Inventory");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(16, ProcurementManagementComponent_Conditional_26_Conditional_16_Template, 5, 0, "div", 10);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.receiptForm.purchase_order_id);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.orders());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.receiptForm.received_date);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.receiptForm.delivery_note_number);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.receiptForm.remarks);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.receiptForm.items.length ? 12 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r0.receipts().length ? 16 : -1);
} }
function ProcurementManagementComponent_Conditional_27_Conditional_0_For_9_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const po_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", po_r44.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(po_r44.id);
} }
function ProcurementManagementComponent_Conditional_27_Conditional_0_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ProcurementManagementComponent_Conditional_27_Conditional_0_For_9_Conditional_0_Template, 2, 2, "option", 30);
} if (rf & 2) {
    const po_r44 = ctx.$implicit;
    i0.ɵɵconditional(po_r44.status === "Received" || po_r44.status === "Partially Received" ? 0 : -1);
} }
function ProcurementManagementComponent_Conditional_27_Conditional_0_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r45 = ctx.$implicit;
    i0.ɵɵproperty("value", v_r45.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(v_r45.name);
} }
function ProcurementManagementComponent_Conditional_27_Conditional_0_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r46 = ctx.$implicit;
    i0.ɵɵproperty("value", p_r46.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r46.name);
} }
function ProcurementManagementComponent_Conditional_27_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "h4");
    i0.ɵɵtext(2, "Create Invoice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14)(4, "input", 61);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_27_Conditional_0_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.invoiceForm.invoice_number, $event) || (ctx_r0.invoiceForm.invoice_number = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "select", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_27_Conditional_0_Template_select_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.invoiceForm.purchase_order_id, $event) || (ctx_r0.invoiceForm.purchase_order_id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ProcurementManagementComponent_Conditional_27_Conditional_0_Template_select_change_5_listener() { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onInvoicePOChange()); });
    i0.ɵɵelementStart(6, "option", 35);
    i0.ɵɵtext(7, "Select received/partially received PO");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(8, ProcurementManagementComponent_Conditional_27_Conditional_0_For_9_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_27_Conditional_0_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.invoiceForm.vendor_id, $event) || (ctx_r0.invoiceForm.vendor_id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(11, "option", 35);
    i0.ɵɵtext(12, "Vendor auto-fills from PO");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(13, ProcurementManagementComponent_Conditional_27_Conditional_0_For_14_Template, 2, 2, "option", 30, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_27_Conditional_0_Template_select_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.invoiceForm.project_id, $event) || (ctx_r0.invoiceForm.project_id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(16, "option", 35);
    i0.ɵɵtext(17, "Project auto-fills from PO");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(18, ProcurementManagementComponent_Conditional_27_Conditional_0_For_19_Template, 2, 2, "option", 30, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_27_Conditional_0_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.invoiceForm.invoice_date, $event) || (ctx_r0.invoiceForm.invoice_date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_27_Conditional_0_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.invoiceForm.due_date, $event) || (ctx_r0.invoiceForm.due_date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "input", 62);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_27_Conditional_0_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.invoiceForm.invoice_amount, $event) || (ctx_r0.invoiceForm.invoice_amount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "textarea", 63);
    i0.ɵɵtwoWayListener("ngModelChange", function ProcurementManagementComponent_Conditional_27_Conditional_0_Template_textarea_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.invoiceForm.remarks, $event) || (ctx_r0.invoiceForm.remarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 12)(25, "button", 11);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_27_Conditional_0_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.createInvoice()); });
    i0.ɵɵtext(26, "Create Invoice");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.invoiceForm.invoice_number);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.invoiceForm.purchase_order_id);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.orders());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.invoiceForm.vendor_id);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.vendors());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.invoiceForm.project_id);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.projectService.projects());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.invoiceForm.invoice_date);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.invoiceForm.due_date);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.invoiceForm.invoice_amount);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.invoiceForm.remarks);
} }
function ProcurementManagementComponent_Conditional_27_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Action");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_27_For_24_Conditional_18_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_27_For_24_Conditional_18_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r48); const inv_r49 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.verifyInvoice(inv_r49)); });
    i0.ɵɵtext(1, "Verify");
    i0.ɵɵelementEnd();
} }
function ProcurementManagementComponent_Conditional_27_For_24_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵconditionalCreate(1, ProcurementManagementComponent_Conditional_27_For_24_Conditional_18_Conditional_1_Template, 2, 0, "button", 55);
    i0.ɵɵelementStart(2, "button", 43);
    i0.ɵɵlistener("click", function ProcurementManagementComponent_Conditional_27_For_24_Conditional_18_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r47); const inv_r49 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.updatePayment(inv_r49)); });
    i0.ɵɵtext(3, "Update Payment");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const inv_r49 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(inv_r49.invoice_status === "Received" ? 1 : -1);
} }
function ProcurementManagementComponent_Conditional_27_For_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td")(12, "span", 32);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(18, ProcurementManagementComponent_Conditional_27_For_24_Conditional_18_Template, 4, 1, "td");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const inv_r49 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inv_r49.invoice_number);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inv_r49.vendor_name || inv_r49.vendor_id || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inv_r49.purchase_order_id || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", inv_r49.invoice_amount);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", inv_r49.paid_amount || 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(inv_r49.payment_status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inv_r49.invoice_status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inv_r49.due_date || "-");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 18 : -1);
} }
function ProcurementManagementComponent_Conditional_27_ForEmpty_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2, "No invoices found.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r0.isAdmin() ? 9 : 8);
} }
function ProcurementManagementComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ProcurementManagementComponent_Conditional_27_Conditional_0_Template, 27, 8, "div", 10);
    i0.ɵɵelementStart(1, "div", 19)(2, "table")(3, "thead")(4, "tr")(5, "th");
    i0.ɵɵtext(6, "Invoice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Vendor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "PO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Paid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Payment Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Invoice Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Due Date");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(21, ProcurementManagementComponent_Conditional_27_Conditional_21_Template, 2, 0, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "tbody");
    i0.ɵɵrepeaterCreate(23, ProcurementManagementComponent_Conditional_27_For_24_Template, 19, 9, "tr", null, _forTrack0, false, ProcurementManagementComponent_Conditional_27_ForEmpty_25_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 0 : -1);
    i0.ɵɵadvance(21);
    i0.ɵɵconditional(ctx_r0.isAdmin() ? 21 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.invoices());
} }
export class ProcurementManagementComponent {
    projectService = inject(ProjectService);
    auth = inject(AuthService);
    activeTab = signal('overview', ...(ngDevMode ? [{ debugName: "activeTab" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    categories = signal([], ...(ngDevMode ? [{ debugName: "categories" }] : /* istanbul ignore next */ []));
    vendors = signal([], ...(ngDevMode ? [{ debugName: "vendors" }] : /* istanbul ignore next */ []));
    orders = signal([], ...(ngDevMode ? [{ debugName: "orders" }] : /* istanbul ignore next */ []));
    invoices = signal([], ...(ngDevMode ? [{ debugName: "invoices" }] : /* istanbul ignore next */ []));
    receipts = signal([], ...(ngDevMode ? [{ debugName: "receipts" }] : /* istanbul ignore next */ []));
    selectedStatus = 'All';
    searchText = '';
    requestForm = this.blankRequest();
    categoryForm = { id: '', name: '', description: '' };
    editingCategoryId = '';
    vendorForm = this.blankVendor();
    editingVendorId = '';
    poForm = this.blankPO();
    invoiceForm = this.blankInvoice();
    receiptForm = this.blankReceipt();
    role = computed(() => String(this.auth.userRole() || '').trim().toLowerCase().replace(/[\s-]+/g, '_'), ...(ngDevMode ? [{ debugName: "role" }] : /* istanbul ignore next */ []));
    isAdmin = computed(() => this.role() === 'admin', ...(ngDevMode ? [{ debugName: "isAdmin" }] : /* istanbul ignore next */ []));
    isSiteEngineer = computed(() => this.role() === 'site_engineer', ...(ngDevMode ? [{ debugName: "isSiteEngineer" }] : /* istanbul ignore next */ []));
    isProjectManager = computed(() => this.role() === 'project_manager', ...(ngDevMode ? [{ debugName: "isProjectManager" }] : /* istanbul ignore next */ []));
    filteredRequests = computed(() => this.projectService.procurementRequests().filter(r => {
        const statusOk = this.selectedStatus === 'All' || r.status === this.selectedStatus;
        const q = this.searchText.trim().toLowerCase();
        const searchOk = !q || [r.id, r.itemName, r.projectName, r.requestedByName].join(' ').toLowerCase().includes(q);
        return statusOk && searchOk;
    }), ...(ngDevMode ? [{ debugName: "filteredRequests" }] : /* istanbul ignore next */ []));
    pendingCount = computed(() => this.projectService.procurementRequests().filter(r => r.status === 'Pending').length, ...(ngDevMode ? [{ debugName: "pendingCount" }] : /* istanbul ignore next */ []));
    approvedRequests = computed(() => this.projectService.procurementRequests().filter(r => r.status === 'Approved'), ...(ngDevMode ? [{ debugName: "approvedRequests" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        // Site engineer lands directly on the actual request form, not a text-only workflow page.
        if (this.isSiteEngineer())
            this.activeTab.set('requests');
        this.refreshAll();
    }
    blankRequest() { return { projectId: '', categoryId: '', itemName: '', quantity: 1, unit: 'Nos', requiredDate: '', purpose: '', priority: 'Medium', remarks: '', materialId: '' }; }
    blankVendor() { return { id: '', name: '', contact_person: '', contact_number: '', email: '', address: '', category: 'Raw Materials', products_services: '', status: 'Active' }; }
    blankPO() { return { vendor_id: '', project_id: '', procurement_request_id: '', expected_delivery_date: '', tax_amount: 0, additional_charges: 0, notes: '', items: [this.newPOItem()] }; }
    newPOItem() { return { description: '', quantity: 1, unit: 'Nos', unit_price: 0, tax_percent: 0, material_id: '', resource_id: '' }; }
    blankInvoice() { return { invoice_number: '', vendor_id: '', purchase_order_id: '', project_id: '', invoice_date: new Date().toISOString().slice(0, 10), due_date: '', invoice_amount: 0, remarks: '' }; }
    blankReceipt() { return { purchase_order_id: '', project_id: '', received_date: new Date().toISOString().slice(0, 10), delivery_note_number: '', remarks: '', items: [] }; }
    setTab(tab) { this.activeTab.set(tab); this.error.set(''); }
    notify(text) { this.message.set(text); setTimeout(() => this.message.set(''), 3500); }
    fail(err, fallback) { this.error.set(err?.error?.detail || err?.error?.message || err?.message || fallback); }
    refreshAll() {
        this.loading.set(true);
        this.error.set('');
        if (this.isSiteEngineer()) {
            forkJoin({ categories: this.projectService.getProcurementCategories(), requests: this.projectService.getProcurementRequests() }).subscribe({
                next: r => {
                    this.categories.set(r.categories?.data || []);
                    const data = (r.requests?.data || []).map((x) => this.projectService.mapProcurementRequestForModule7(x));
                    this.projectService.setProcurementRequestsForModule7(data);
                    this.loading.set(false);
                }, error: e => { this.loading.set(false); this.fail(e, 'Unable to load procurement requests'); }
            });
            return;
        }
        forkJoin({
            categories: this.projectService.getProcurementCategories(),
            vendors: this.projectService.getProcurementVendors(),
            orders: this.projectService.getPurchaseOrders(),
            invoices: this.projectService.getProcurementInvoices(),
            requests: this.projectService.getProcurementRequests(),
            summary: this.projectService.getProcurementSummary()
        }).subscribe({
            next: r => {
                this.categories.set(r.categories?.data || []);
                this.vendors.set(r.vendors?.data || []);
                this.orders.set(r.orders?.data || []);
                this.invoices.set(r.invoices?.data || []);
                const requests = (r.requests?.data || []).map((x) => this.projectService.mapProcurementRequestForModule7(x));
                this.projectService.setProcurementRequestsForModule7(requests);
                this.projectService.setProcurementSummary(r.summary?.data || null);
                this.loading.set(false);
            }, error: e => { this.loading.set(false); this.fail(e, 'Unable to load procurement data'); }
        });
    }
    submitRequest() {
        const d = this.requestForm;
        if (!d.projectId || !d.categoryId || !d.itemName?.trim() || Number(d.quantity) <= 0 || !d.unit?.trim() || !d.requiredDate) {
            this.error.set('Project, category, item, quantity, unit and required date are required.');
            return;
        }
        this.loading.set(true);
        this.projectService.createProcurementRequest(d).subscribe({
            next: () => { this.notify('Procurement request submitted successfully.'); this.requestForm = this.blankRequest(); this.refreshAll(); },
            error: e => { this.loading.set(false); this.fail(e, 'Request could not be submitted'); }
        });
    }
    approve(r) {
        if (!confirm(`Approve procurement request ${r.id} for ${r.itemName}?`))
            return;
        this.projectService.approveProcurementRequest(r.id).subscribe({ next: () => { this.notify('Request approved. Create the Purchase Order from the approved request.'); this.refreshAll(); }, error: e => this.fail(e, 'Approval failed') });
    }
    reject(r) {
        const reason = prompt('Enter rejection reason:');
        if (reason === null)
            return;
        if (!reason.trim()) {
            this.error.set('Rejection reason is required.');
            return;
        }
        this.projectService.rejectProcurementRequest(r.id, reason.trim()).subscribe({ next: () => { this.notify('Request rejected.'); this.refreshAll(); }, error: e => this.fail(e, 'Rejection failed') });
    }
    saveCategory() {
        if (!this.categoryForm.id?.trim() || !this.categoryForm.name?.trim()) {
            this.error.set('Category ID and name are required.');
            return;
        }
        const call = this.editingCategoryId ? this.projectService.updateProcurementCategory(this.editingCategoryId, { name: this.categoryForm.name, description: this.categoryForm.description || null }) : this.projectService.createProcurementCategory(this.categoryForm);
        call.subscribe({ next: () => { this.notify(this.editingCategoryId ? 'Category updated.' : 'Category created.'); this.categoryForm = { id: '', name: '', description: '' }; this.editingCategoryId = ''; this.refreshAll(); }, error: e => this.fail(e, 'Category save failed') });
    }
    editCategory(c) { this.editingCategoryId = c.id; this.categoryForm = { id: c.id, name: c.name, description: c.description || '' }; }
    cancelCategoryEdit() { this.editingCategoryId = ''; this.categoryForm = { id: '', name: '', description: '' }; }
    deleteCategory(c) { if (confirm(`Delete category ${c.name}?`))
        this.projectService.deleteProcurementCategory(c.id).subscribe({ next: () => { this.notify('Category deleted.'); this.refreshAll(); }, error: e => this.fail(e, 'Cannot delete category because it may be in use.') }); }
    saveVendor() {
        if (!this.vendorForm.id?.trim() || !this.vendorForm.name?.trim() || !this.vendorForm.category?.trim()) {
            this.error.set('Vendor ID, name and category are required.');
            return;
        }
        const payload = { ...this.vendorForm };
        const call = this.editingVendorId ? this.projectService.updateProcurementVendor(this.editingVendorId, { ...payload, id: undefined }) : this.projectService.createProcurementVendor(payload);
        call.subscribe({ next: () => { this.notify(this.editingVendorId ? 'Vendor updated.' : 'Vendor created.'); this.vendorForm = this.blankVendor(); this.editingVendorId = ''; this.refreshAll(); }, error: e => this.fail(e, 'Vendor save failed') });
    }
    editVendor(v) { this.editingVendorId = v.id; this.vendorForm = { ...this.blankVendor(), ...v }; }
    cancelVendorEdit() { this.editingVendorId = ''; this.vendorForm = this.blankVendor(); }
    deleteVendor(v) { if (confirm(`Delete vendor ${v.name}?`))
        this.projectService.deleteProcurementVendor(v.id).subscribe({ next: () => { this.notify('Vendor deleted.'); this.refreshAll(); }, error: e => this.fail(e, 'Cannot delete vendor because procurement records may exist.') }); }
    onRequestForPO() {
        const r = this.projectService.procurementRequests().find(x => x.id === this.poForm.procurement_request_id);
        if (!r)
            return;
        this.poForm.project_id = r.projectId;
        if (this.poForm.items.length === 1 && !this.poForm.items[0].description) {
            this.poForm.items[0] = { ...this.newPOItem(), description: r.itemName, quantity: r.quantity, unit: r.unit, material_id: r.materialId || '', resource_id: r.resourceId || '' };
        }
    }
    addPOItem() { this.poForm.items.push(this.newPOItem()); }
    removePOItem(index) { if (this.poForm.items.length > 1)
        this.poForm.items.splice(index, 1); }
    poSubtotal() { return this.poForm.items.reduce((s, i) => s + Number(i.quantity || 0) * Number(i.unit_price || 0), 0); }
    poTotal() { return this.poSubtotal() + Number(this.poForm.tax_amount || 0) + Number(this.poForm.additional_charges || 0); }
    createPO() {
        const d = this.poForm;
        if (!d.vendor_id || !d.project_id || !d.procurement_request_id || !d.expected_delivery_date || !d.items.length) {
            this.error.set('Vendor, project, approved request, delivery date and at least one item are required.');
            return;
        }
        if (d.items.some((i) => !i.description?.trim() || Number(i.quantity) <= 0 || !i.unit?.trim() || Number(i.unit_price) < 0)) {
            this.error.set('Every PO item needs description, positive quantity, unit and valid price.');
            return;
        }
        const payload = { ...d, tax_amount: Number(d.tax_amount || 0), additional_charges: Number(d.additional_charges || 0),
            items: d.items.map((i) => ({ ...i, quantity: Number(i.quantity), unit_price: Number(i.unit_price), tax_percent: Number(i.tax_percent || 0), material_id: i.material_id || null, resource_id: i.resource_id || null })) };
        this.projectService.createPurchaseOrder(payload).subscribe({ next: () => { this.notify('Purchase Order created successfully. Request is now Processing.'); this.poForm = this.blankPO(); this.refreshAll(); }, error: e => this.fail(e, 'Purchase order failed') });
    }
    advancePO(po) {
        const next = { Issued: 'Confirmed', Confirmed: 'Processing' };
        if (!next[po.status])
            return;
        this.projectService.updatePurchaseOrder(po.id, { status: next[po.status] }).subscribe({ next: () => { this.notify(`PO moved to ${next[po.status]}.`); this.refreshAll(); }, error: e => this.fail(e, 'Unable to update PO') });
    }
    selectPOForReceipt(po) {
        if (!po)
            return;
        this.receiptForm = { ...this.blankReceipt(), purchase_order_id: po.id, project_id: po.project_id,
            items: (po.items || []).map((i) => ({ po_item_id: i.id, material_id: i.material_id || null, description: i.description, ordered_quantity: Number(i.quantity || 0), remaining_quantity: Math.max(0, Number(i.quantity || 0) - Number(i.received_quantity || 0)), received_quantity: Math.max(0, Number(i.quantity || 0) - Number(i.received_quantity || 0)), unit: i.unit })) };
        this.loadReceipts(po.id);
        this.setTab('receipts');
    }
    loadReceipts(poId) { this.projectService.getGoodsReceipts(poId).subscribe({ next: r => this.receipts.set(r?.data || []), error: e => this.fail(e, 'Unable to load goods receipts') }); }
    receiveGoods() {
        const d = this.receiptForm;
        if (!d.purchase_order_id || !d.project_id || !d.items?.length) {
            this.error.set('Select a purchase order with items.');
            return;
        }
        if (d.items.some((i) => Number(i.received_quantity) < 0 || Number(i.received_quantity) > Number(i.remaining_quantity))) {
            this.error.set('Received quantity cannot exceed the remaining quantity.');
            return;
        }
        if (!d.items.some((i) => Number(i.received_quantity) > 0)) {
            this.error.set('Enter received quantity for at least one item.');
            return;
        }
        const payload = { ...d, items: d.items.map((i) => ({ po_item_id: i.po_item_id, material_id: i.material_id || null, description: i.description, ordered_quantity: Number(i.ordered_quantity), received_quantity: Number(i.received_quantity), unit: i.unit })) };
        this.projectService.receiveGoods(payload).subscribe({ next: () => { this.notify('Goods receipt saved. Linked inventory was updated for material items.'); this.receiptForm = this.blankReceipt(); this.receipts.set([]); this.refreshAll(); }, error: e => this.fail(e, 'Goods receipt failed') });
    }
    selectPOForInvoice(po) {
        if (!po || !['Partially Received', 'Received'].includes(po.status)) {
            this.error.set('Invoice can be created only after goods have been received.');
            return;
        }
        this.invoiceForm = { ...this.blankInvoice(), purchase_order_id: po.id, vendor_id: po.vendor_id || '', project_id: po.project_id || '', invoice_amount: Number(po.total_amount || 0) };
        this.setTab('invoices');
    }
    onInvoicePOChange() { const po = this.orders().find(p => p.id === this.invoiceForm.purchase_order_id); if (po) {
        this.invoiceForm.vendor_id = po.vendor_id || '';
        this.invoiceForm.project_id = po.project_id || '';
        this.invoiceForm.invoice_amount = Number(po.total_amount || 0);
    } }
    createInvoice() {
        const d = this.invoiceForm;
        if (!d.invoice_number?.trim() || !d.purchase_order_id || !d.vendor_id || !d.project_id || !d.invoice_date || Number(d.invoice_amount) <= 0) {
            this.error.set('Invoice number, PO, vendor, project, invoice date and positive amount are required.');
            return;
        }
        this.projectService.createProcurementInvoice({ ...d, invoice_amount: Number(d.invoice_amount) }).subscribe({ next: () => { this.notify('Invoice created successfully.'); this.invoiceForm = this.blankInvoice(); this.refreshAll(); }, error: e => this.fail(e, 'Invoice creation failed') });
    }
    updatePayment(inv) { const raw = prompt(`Total paid amount for ${inv.invoice_number} (invoice ₹${inv.invoice_amount}):`, String(inv.paid_amount || 0)); if (raw === null)
        return; const value = Number(raw); if (Number.isNaN(value) || value < 0 || value > Number(inv.invoice_amount)) {
        this.error.set('Paid amount must be between 0 and invoice amount.');
        return;
    } this.projectService.updateProcurementInvoice(inv.id, { paid_amount: value }).subscribe({ next: () => { this.notify('Payment updated successfully.'); this.refreshAll(); }, error: e => this.fail(e, 'Payment update failed') }); }
    verifyInvoice(inv) { if (inv.invoice_status === 'Received')
        this.projectService.updateProcurementInvoice(inv.id, { invoice_status: 'Verified' }).subscribe({ next: () => { this.notify('Invoice verified.'); this.refreshAll(); }, error: e => this.fail(e, 'Invoice verification failed') }); }
    static ɵfac = function ProcurementManagementComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProcurementManagementComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProcurementManagementComponent, selectors: [["app-procurement-management"]], decls: 28, vars: 21, consts: [[1, "procurement-page"], [1, "page-head"], [1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "notice", "success"], [1, "notice", "error"], [1, "tabs"], [3, "click"], [3, "active"], [1, "stats-grid"], [1, "stat"], [1, "card"], [1, "btn", "btn-primary", 3, "click"], [1, "actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "form-grid", "three"], ["placeholder", "Category ID", 3, "ngModelChange", "ngModel", "disabled"], ["placeholder", "Category name", 3, "ngModelChange", "ngModel"], ["placeholder", "Description", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary"], [1, "table-card"], [1, "link-btn", 3, "click"], [1, "link-btn", "danger", 3, "click"], ["colspan", "4"], ["placeholder", "Vendor ID (e.g. VEN-001)", 3, "ngModelChange", "ngModel", "disabled"], ["placeholder", "Vendor name", 3, "ngModelChange", "ngModel"], ["placeholder", "Contact person", 3, "ngModelChange", "ngModel"], ["placeholder", "Contact number", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Email", 3, "ngModelChange", "ngModel"], ["placeholder", "Address", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], ["placeholder", "Products / Services", 3, "ngModelChange", "ngModel"], [1, "badge"], [1, "filters"], ["placeholder", "Search by request, item or project", 3, "ngModelChange", "ngModel"], ["value", ""], ["placeholder", "Item / material name *", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0.01", "placeholder", "Quantity *", 3, "ngModelChange", "ngModel"], ["placeholder", "Unit * (Bags, Kg, Nos...)", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel"], ["placeholder", "Purpose / requirement", 3, "ngModelChange", "ngModel"], ["placeholder", "Remarks", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "link-btn", "success", 3, "click"], [3, "ngModelChange", "change", "ngModel"], ["type", "number", "placeholder", "Tax amount", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Additional charges", 3, "ngModelChange", "ngModel"], ["placeholder", "PO notes", 1, "full", 3, "ngModelChange", "ngModel"], [1, "po-items"], [1, "po-item"], [1, "amount"], ["type", "number", "min", "0.01", "placeholder", "Qty", 3, "ngModelChange", "ngModel"], ["placeholder", "Unit", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "placeholder", "Unit price", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], [1, "link-btn"], ["placeholder", "Delivery note number", 3, "ngModelChange", "ngModel"], ["placeholder", "Receipt remarks", 1, "full", 3, "ngModelChange", "ngModel"], [1, "receipt-table"], ["type", "number", "min", "0", 3, "ngModelChange", "max", "ngModel"], [1, "receipt-history"], ["placeholder", "Invoice number", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0.01", "placeholder", "Invoice amount", 3, "ngModelChange", "ngModel"], ["placeholder", "Invoice remarks", 1, "full", 3, "ngModelChange", "ngModel"]], template: function ProcurementManagementComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
            i0.ɵɵtext(4, "Procurement Management");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Live Module 7 operations: requests, approval, vendors, purchase orders, goods receipt, invoices and payments.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 2);
            i0.ɵɵlistener("click", function ProcurementManagementComponent_Template_button_click_7_listener() { return ctx.refreshAll(); });
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(9, ProcurementManagementComponent_Conditional_9_Template, 2, 1, "div", 3);
            i0.ɵɵconditionalCreate(10, ProcurementManagementComponent_Conditional_10_Template, 2, 1, "div", 4);
            i0.ɵɵelementStart(11, "div", 5)(12, "button", 6);
            i0.ɵɵlistener("click", function ProcurementManagementComponent_Template_button_click_12_listener() { return ctx.setTab("overview"); });
            i0.ɵɵtext(13, "Overview");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(14, ProcurementManagementComponent_Conditional_14_Template, 2, 2, "button", 7);
            i0.ɵɵconditionalCreate(15, ProcurementManagementComponent_Conditional_15_Template, 2, 2, "button", 7);
            i0.ɵɵelementStart(16, "button", 6);
            i0.ɵɵlistener("click", function ProcurementManagementComponent_Template_button_click_16_listener() { return ctx.setTab("requests"); });
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(18, ProcurementManagementComponent_Conditional_18_Template, 2, 2, "button", 7);
            i0.ɵɵconditionalCreate(19, ProcurementManagementComponent_Conditional_19_Template, 2, 2, "button", 7);
            i0.ɵɵconditionalCreate(20, ProcurementManagementComponent_Conditional_20_Template, 2, 2, "button", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(21, ProcurementManagementComponent_Conditional_21_Template, 18, 7);
            i0.ɵɵconditionalCreate(22, ProcurementManagementComponent_Conditional_22_Template, 27, 8);
            i0.ɵɵconditionalCreate(23, ProcurementManagementComponent_Conditional_23_Template, 22, 3);
            i0.ɵɵconditionalCreate(24, ProcurementManagementComponent_Conditional_24_Template, 43, 5);
            i0.ɵɵconditionalCreate(25, ProcurementManagementComponent_Conditional_25_Template, 22, 3);
            i0.ɵɵconditionalCreate(26, ProcurementManagementComponent_Conditional_26_Template, 17, 6);
            i0.ɵɵconditionalCreate(27, ProcurementManagementComponent_Conditional_27_Template, 26, 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.loading() ? "Loading..." : "Refresh Data");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 10 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.activeTab() === "overview");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isAdmin() ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.isSiteEngineer() ? 15 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.activeTab() === "requests");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.isSiteEngineer() ? "My Requests" : "Requests");
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.isSiteEngineer() ? 18 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isAdmin() ? 19 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.isSiteEngineer() ? 20 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "overview" ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "categories" && ctx.isAdmin() ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "vendors" && !ctx.isSiteEngineer() ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "requests" ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "orders" && !ctx.isSiteEngineer() ? 25 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "receipts" && ctx.isAdmin() ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "invoices" && !ctx.isSiteEngineer() ? 27 : -1);
        } }, dependencies: [CommonModule, FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MinValidator, i1.MaxValidator, i1.NgModel], styles: [".procurement-page[_ngcontent-%COMP%]{padding:20px;color:#243042}.page-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:16px}.page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 5px;font-size:1.55rem}.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#6b7280}.notice[_ngcontent-%COMP%]{padding:11px 14px;border-radius:8px;margin:10px 0}.notice.success[_ngcontent-%COMP%]{background:#dcfce7;color:#166534}.notice.error[_ngcontent-%COMP%]{background:#fee2e2;color:#991b1b}.tabs[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;border-bottom:1px solid #e5e7eb;margin:18px 0}.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;background:#f3f4f6;padding:9px 14px;border-radius:8px 8px 0 0;cursor:pointer}.tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#2563eb;color:#fff}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(150px,1fr));gap:14px}.stat[_ngcontent-%COMP%], .card[_ngcontent-%COMP%], .table-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.04)}.stat[_ngcontent-%COMP%]{padding:18px}.stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#6b7280;font-size:.85rem}.stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.6rem}.card[_ngcontent-%COMP%]{padding:18px;margin:14px 0}.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 14px}.workflow[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:14px;background:#f8fafc;border-radius:8px}.workflow[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#2563eb}.form-grid[_ngcontent-%COMP%]{display:grid;gap:10px;margin-bottom:10px}.form-grid.three[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}.form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-grid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-grid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .full[_ngcontent-%COMP%], .po-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:9px 10px;border:1px solid #d1d5db;border-radius:7px;box-sizing:border-box;background:#fff}.full[_ngcontent-%COMP%]{min-height:70px;margin:8px 0}.actions[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:12px}.amount[_ngcontent-%COMP%]{margin-left:auto;font-weight:600}.po-items[_ngcontent-%COMP%]{display:grid;gap:8px}.po-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr repeat(4,1fr) auto;gap:8px;padding:10px;background:#f8fafc;border-radius:8px}.table-card[_ngcontent-%COMP%]{overflow:auto;margin-top:14px}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;min-width:760px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:10px;border-bottom:1px solid #e5e7eb;text-align:left;font-size:.9rem;vertical-align:top}th[_ngcontent-%COMP%]{background:#f8fafc;color:#475569}.badge[_ngcontent-%COMP%]{display:inline-block;padding:4px 8px;border-radius:999px;background:#e0e7ff;color:#3730a3;font-size:.78rem;white-space:nowrap}.filters[_ngcontent-%COMP%]{display:flex;gap:10px;padding:12px}.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{max-width:340px}.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{max-width:180px}.link-btn[_ngcontent-%COMP%]{border:0;background:transparent;color:#2563eb;padding:3px 5px;cursor:pointer}.link-btn.danger[_ngcontent-%COMP%]{color:#dc2626}.link-btn.success[_ngcontent-%COMP%]{color:#15803d}.receipt-table[_ngcontent-%COMP%]{margin-top:14px;min-width:0}.receipt-history[_ngcontent-%COMP%]{padding:10px;border-top:1px solid #e5e7eb}.btn[_ngcontent-%COMP%]{white-space:nowrap}@media(max-width:900px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.form-grid.three[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.po-item[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media(max-width:600px){.page-head[_ngcontent-%COMP%]{flex-direction:column}.stats-grid[_ngcontent-%COMP%], .form-grid.three[_ngcontent-%COMP%], .po-item[_ngcontent-%COMP%]{grid-template-columns:1fr}.amount[_ngcontent-%COMP%]{margin-left:0}.filters[_ngcontent-%COMP%]{flex-direction:column}.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{max-width:none}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProcurementManagementComponent, [{
        type: Component,
        args: [{ selector: 'app-procurement-management', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"procurement-page\">\n  <div class=\"page-head\">\n    <div><h2>Procurement Management</h2><p>Live Module 7 operations: requests, approval, vendors, purchase orders, goods receipt, invoices and payments.</p></div>\n    <button class=\"btn btn-outline-primary\" (click)=\"refreshAll()\" [disabled]=\"loading()\">{{loading() ? 'Loading...' : 'Refresh Data'}}</button>\n  </div>\n  @if(message()){<div class=\"notice success\">{{message()}}</div>}\n  @if(error()){<div class=\"notice error\">{{error()}}</div>}\n\n  <div class=\"tabs\">\n    <button [class.active]=\"activeTab()==='overview'\" (click)=\"setTab('overview')\">Overview</button>\n    @if(isAdmin()){<button [class.active]=\"activeTab()==='categories'\" (click)=\"setTab('categories')\">Categories</button>}\n    @if(!isSiteEngineer()){<button [class.active]=\"activeTab()==='vendors'\" (click)=\"setTab('vendors')\">Vendors</button>}\n    <button [class.active]=\"activeTab()==='requests'\" (click)=\"setTab('requests')\">{{isSiteEngineer()?'My Requests':'Requests'}}</button>\n    @if(!isSiteEngineer()){<button [class.active]=\"activeTab()==='orders'\" (click)=\"setTab('orders')\">Purchase Orders</button>}\n    @if(isAdmin()){<button [class.active]=\"activeTab()==='receipts'\" (click)=\"setTab('receipts')\">Goods Receipt</button>}\n    @if(!isSiteEngineer()){<button [class.active]=\"activeTab()==='invoices'\" (click)=\"setTab('invoices')\">Invoices & Payments</button>}\n  </div>\n\n  @if(activeTab()==='overview'){\n    <div class=\"stats-grid\">\n      <div class=\"stat\"><span>Total Requests</span><strong>{{ isSiteEngineer() ? projectService.procurementRequests().length : (projectService.procurementSummary()?.total_procurement_requests || 0) }}</strong></div>\n      <div class=\"stat\"><span>Pending Requests</span><strong>{{ isSiteEngineer() ? pendingCount() : (projectService.procurementSummary()?.pending_requests || 0) }}</strong></div>\n      @if(!isSiteEngineer()){<div class=\"stat\"><span>Active POs</span><strong>{{projectService.procurementSummary()?.active_purchase_orders || 0}}</strong></div><div class=\"stat\"><span>Pending Invoices</span><strong>{{projectService.procurementSummary()?.pending_invoices || 0}}</strong></div>}\n    </div>\n    <div class=\"card\">\n      <h4>{{isSiteEngineer() ? 'Start a Procurement Request' : isAdmin() ? 'Manage Procurement Operations' : 'Procurement Tracking'}}</h4>\n      @if(isSiteEngineer()){<p>Create a request now. The request is saved in the backend and becomes visible to Admin and Project Manager.</p><button class=\"btn btn-primary\" (click)=\"setTab('requests')\">+ Create Procurement Request</button>}\n      @if(isAdmin()){<p>Open Requests to approve/reject, then create PO, receive goods, create invoice and update payment.</p><div class=\"actions\"><button class=\"btn btn-primary\" (click)=\"setTab('requests')\">Manage Requests</button><button class=\"btn btn-secondary\" (click)=\"setTab('orders')\">Create Purchase Order</button><button class=\"btn btn-secondary\" (click)=\"setTab('invoices')\">Manage Invoices</button></div>}\n      @if(isProjectManager()){<p>You have read-only access to the current procurement records.</p><button class=\"btn btn-primary\" (click)=\"setTab('requests')\">View Requests</button>}\n    </div>\n  }\n\n  @if(activeTab()==='categories' && isAdmin()){\n    <div class=\"card\"><h4>{{editingCategoryId ? 'Edit Category' : 'Add Procurement Category'}}</h4><div class=\"form-grid three\"><input placeholder=\"Category ID\" [(ngModel)]=\"categoryForm.id\" [disabled]=\"!!editingCategoryId\"><input placeholder=\"Category name\" [(ngModel)]=\"categoryForm.name\"><input placeholder=\"Description\" [(ngModel)]=\"categoryForm.description\"></div><div class=\"actions\"><button class=\"btn btn-primary\" (click)=\"saveCategory()\">{{editingCategoryId?'Update':'Save'}} Category</button>@if(editingCategoryId){<button class=\"btn btn-secondary\" (click)=\"cancelCategoryEdit()\">Cancel</button>}</div></div>\n    <div class=\"table-card\"><table><thead><tr><th>ID</th><th>Name</th><th>Description</th><th>Action</th></tr></thead><tbody>@for(c of categories();track c.id){<tr><td>{{c.id}}</td><td>{{c.name}}</td><td>{{c.description||'-'}}</td><td><button class=\"link-btn\" (click)=\"editCategory(c)\">Edit</button><button class=\"link-btn danger\" (click)=\"deleteCategory(c)\">Delete</button></td></tr>}@empty{<tr><td colspan=\"4\">No categories found.</td></tr>}</tbody></table></div>\n  }\n\n  @if(activeTab()==='vendors' && !isSiteEngineer()){\n    @if(isAdmin()){\n      <div class=\"card\"><h4>{{editingVendorId ? 'Edit Vendor' : 'Add Vendor'}}</h4><div class=\"form-grid three\"><input placeholder=\"Vendor ID (e.g. VEN-001)\" [(ngModel)]=\"vendorForm.id\" [disabled]=\"!!editingVendorId\"><input placeholder=\"Vendor name\" [(ngModel)]=\"vendorForm.name\"><input placeholder=\"Contact person\" [(ngModel)]=\"vendorForm.contact_person\"><input placeholder=\"Contact number\" [(ngModel)]=\"vendorForm.contact_number\"><input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"vendorForm.email\"><input placeholder=\"Address\" [(ngModel)]=\"vendorForm.address\"><select [(ngModel)]=\"vendorForm.category\">@for(c of categories();track c.id){<option [value]=\"c.name\">{{c.name}}</option>}</select><input placeholder=\"Products / Services\" [(ngModel)]=\"vendorForm.products_services\"><select [(ngModel)]=\"vendorForm.status\"><option>Active</option><option>Inactive</option></select></div><div class=\"actions\"><button class=\"btn btn-primary\" (click)=\"saveVendor()\">{{editingVendorId?'Update':'Save'}} Vendor</button>@if(editingVendorId){<button class=\"btn btn-secondary\" (click)=\"cancelVendorEdit()\">Cancel</button>}</div></div>\n    }\n    <div class=\"table-card\"><table><thead><tr><th>ID</th><th>Vendor</th><th>Contact</th><th>Category</th><th>Products</th><th>Status</th>@if(isAdmin()){<th>Action</th>}</tr></thead><tbody>@for(v of vendors();track v.id){<tr><td>{{v.id}}</td><td>{{v.name}}</td><td>{{v.contact_person||'-'}}<br><small>{{v.contact_number||v.email||''}}</small></td><td>{{v.category}}</td><td>{{v.products_services||'-'}}</td><td><span class=\"badge\">{{v.status}}</span></td>@if(isAdmin()){<td><button class=\"link-btn\" (click)=\"editVendor(v)\">Edit</button><button class=\"link-btn danger\" (click)=\"deleteVendor(v)\">Delete</button></td>}</tr>}@empty{<tr><td [attr.colspan]=\"isAdmin()?7:6\">No vendors found.</td></tr>}</tbody></table></div>\n  }\n\n  @if(activeTab()==='requests'){\n    @if(isSiteEngineer()){\n      <div class=\"card\"><h4>New Procurement Request</h4><div class=\"form-grid three\"><select [(ngModel)]=\"requestForm.projectId\"><option value=\"\">Select project *</option>@for(p of projectService.projects();track p.id){<option [value]=\"p.id\">{{p.name}}</option>}</select><select [(ngModel)]=\"requestForm.categoryId\"><option value=\"\">Select category *</option>@for(c of categories();track c.id){<option [value]=\"c.id\">{{c.name}}</option>}</select><input placeholder=\"Item / material name *\" [(ngModel)]=\"requestForm.itemName\"><select [(ngModel)]=\"requestForm.materialId\"><option value=\"\">Optional: link inventory material</option>@for(m of projectService.materials();track m.id){<option [value]=\"m.id\">{{m.name}} (Stock: {{m.inStock}} {{m.unit}})</option>}</select><input type=\"number\" min=\"0.01\" placeholder=\"Quantity *\" [(ngModel)]=\"requestForm.quantity\"><input placeholder=\"Unit * (Bags, Kg, Nos...)\" [(ngModel)]=\"requestForm.unit\"><input type=\"date\" [(ngModel)]=\"requestForm.requiredDate\"><select [(ngModel)]=\"requestForm.priority\"><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select><input placeholder=\"Purpose / requirement\" [(ngModel)]=\"requestForm.purpose\"><textarea placeholder=\"Remarks\" [(ngModel)]=\"requestForm.remarks\"></textarea></div><div class=\"actions\"><button class=\"btn btn-primary\" (click)=\"submitRequest()\" [disabled]=\"loading()\">Submit Procurement Request</button></div></div>\n    }\n    <div class=\"table-card\"><div class=\"filters\"><input placeholder=\"Search by request, item or project\" [(ngModel)]=\"searchText\"><select [(ngModel)]=\"selectedStatus\"><option>All</option><option>Pending</option><option>Approved</option><option>Rejected</option><option>Processing</option><option>Completed</option><option>Cancelled</option></select></div><table><thead><tr><th>Request</th><th>Project</th><th>Item</th><th>Qty</th><th>Required</th><th>Priority</th><th>Status</th><th>Remarks / Reason</th>@if(isAdmin()){<th>Action</th>}</tr></thead><tbody>@for(r of filteredRequests();track r.id){<tr><td>{{r.id}}</td><td>{{r.projectName}}</td><td>{{r.itemName}}</td><td>{{r.quantity}} {{r.unit}}</td><td>{{r.requiredDate||'-'}}</td><td>{{r.priority}}</td><td><span class=\"badge\">{{r.status}}</span></td><td>{{r.rejectionReason||r.remarks||'-'}}</td>@if(isAdmin()){<td>@if(r.status==='Pending'){<button class=\"link-btn success\" (click)=\"approve(r)\">Approve</button><button class=\"link-btn danger\" (click)=\"reject(r)\">Reject</button>}@else{-}</td>}</tr>}@empty{<tr><td [attr.colspan]=\"isAdmin()?9:8\">No procurement requests found.</td></tr>}</tbody></table></div>\n  }\n\n  @if(activeTab()==='orders' && !isSiteEngineer()){\n    @if(isAdmin()){\n      <div class=\"card\"><h4>Create Purchase Order</h4><div class=\"form-grid three\"><select [(ngModel)]=\"poForm.vendor_id\"><option value=\"\">Select active vendor *</option>@for(v of vendors();track v.id){@if(v.status==='Active'){<option [value]=\"v.id\">{{v.name}}</option>}}</select><select [(ngModel)]=\"poForm.procurement_request_id\" (change)=\"onRequestForPO()\"><option value=\"\">Select approved request *</option>@for(r of approvedRequests();track r.id){<option [value]=\"r.id\">{{r.id}} - {{r.itemName}}</option>}</select><select [(ngModel)]=\"poForm.project_id\"><option value=\"\">Project auto-fills from request *</option>@for(p of projectService.projects();track p.id){<option [value]=\"p.id\">{{p.name}}</option>}</select><input type=\"date\" [(ngModel)]=\"poForm.expected_delivery_date\"><input type=\"number\" placeholder=\"Tax amount\" [(ngModel)]=\"poForm.tax_amount\"><input type=\"number\" placeholder=\"Additional charges\" [(ngModel)]=\"poForm.additional_charges\"></div><textarea class=\"full\" placeholder=\"PO notes\" [(ngModel)]=\"poForm.notes\"></textarea><h5>Purchase Order Items</h5><div class=\"po-items\">@for(item of poForm.items;track $index;let i=$index){<div class=\"po-item\"><input placeholder=\"Description\" [(ngModel)]=\"item.description\"><input type=\"number\" min=\"0.01\" placeholder=\"Qty\" [(ngModel)]=\"item.quantity\"><input placeholder=\"Unit\" [(ngModel)]=\"item.unit\"><input type=\"number\" min=\"0\" placeholder=\"Unit price\" [(ngModel)]=\"item.unit_price\"><select [(ngModel)]=\"item.material_id\"><option value=\"\">No inventory material link</option>@for(m of projectService.materials();track m.id){<option [value]=\"m.id\">{{m.name}}</option>}</select><button class=\"btn btn-sm btn-outline-danger\" (click)=\"removePOItem(i)\" [disabled]=\"poForm.items.length===1\">Remove</button></div>}</div><div class=\"actions\"><button class=\"btn btn-secondary\" (click)=\"addPOItem()\">+ Add Item</button><span class=\"amount\">Subtotal: \u20B9{{poSubtotal()}} | Total: \u20B9{{poTotal()}}</span><button class=\"btn btn-primary\" (click)=\"createPO()\">Create Purchase Order</button></div></div>\n    }\n    <div class=\"table-card\"><table><thead><tr><th>PO</th><th>Vendor</th><th>Project</th><th>Total</th><th>Status</th><th>Expected Delivery</th>@if(isAdmin()){<th>Action</th>}</tr></thead><tbody>@for(po of orders();track po.id){<tr><td>{{po.id}}</td><td>{{po.vendor_name||po.vendor_id||'-'}}</td><td>{{po.project_name||po.project_id}}</td><td>\u20B9{{po.total_amount||0}}</td><td><span class=\"badge\">{{po.status}}</span></td><td>{{po.expected_delivery_date||'-'}}</td>@if(isAdmin()){<td>@if(po.status==='Issued'||po.status==='Confirmed'){<button class=\"link-btn\" (click)=\"advancePO(po)\">{{po.status==='Issued'?'Confirm':'Start Processing'}}</button>}@if(po.status!=='Received'&&po.status!=='Cancelled'){<button class=\"link-btn\" (click)=\"selectPOForReceipt(po)\">Receive Goods</button>}<button class=\"link-btn\" (click)=\"selectPOForInvoice(po)\">Invoice</button></td>}</tr>}@empty{<tr><td [attr.colspan]=\"isAdmin()?7:6\">No purchase orders found.</td></tr>}</tbody></table></div>\n  }\n\n  @if(activeTab()==='receipts' && isAdmin()){\n    <div class=\"card\"><h4>Goods Receipt</h4><div class=\"form-grid three\"><select [(ngModel)]=\"receiptForm.purchase_order_id\" (change)=\"selectPOForReceipt(orders().find(p=>p.id===receiptForm.purchase_order_id))\"><option value=\"\">Select PO</option>@for(po of orders();track po.id){@if(po.status!=='Received'&&po.status!=='Cancelled'){<option [value]=\"po.id\">{{po.id}} - {{po.status}}</option>}}</select><input type=\"date\" [(ngModel)]=\"receiptForm.received_date\"><input placeholder=\"Delivery note number\" [(ngModel)]=\"receiptForm.delivery_note_number\"></div><textarea class=\"full\" placeholder=\"Receipt remarks\" [(ngModel)]=\"receiptForm.remarks\"></textarea>@if(receiptForm.items.length){<table class=\"receipt-table\"><thead><tr><th>Item</th><th>Ordered</th><th>Remaining</th><th>Receive Now</th><th>Unit</th></tr></thead><tbody>@for(item of receiptForm.items;track item.po_item_id){<tr><td>{{item.description}}</td><td>{{item.ordered_quantity}}</td><td>{{item.remaining_quantity}}</td><td><input type=\"number\" min=\"0\" [max]=\"item.remaining_quantity\" [(ngModel)]=\"item.received_quantity\"></td><td>{{item.unit}}</td></tr>}</tbody></table>}<div class=\"actions\"><button class=\"btn btn-primary\" (click)=\"receiveGoods()\">Save Goods Receipt & Update Inventory</button></div></div>\n    @if(receipts().length){<div class=\"card\"><h5>Receipts for Selected PO</h5>@for(gr of receipts();track gr.id){<div class=\"receipt-history\"><b>{{gr.id}}</b> \u2014 {{gr.received_date}} \u2014 {{gr.delivery_note_number||'No delivery note'}}<br><small>{{gr.remarks||''}}</small></div>}</div>}\n  }\n\n  @if(activeTab()==='invoices' && !isSiteEngineer()){\n    @if(isAdmin()){\n      <div class=\"card\"><h4>Create Invoice</h4><div class=\"form-grid three\"><input placeholder=\"Invoice number\" [(ngModel)]=\"invoiceForm.invoice_number\"><select [(ngModel)]=\"invoiceForm.purchase_order_id\" (change)=\"onInvoicePOChange()\"><option value=\"\">Select received/partially received PO</option>@for(po of orders();track po.id){@if(po.status==='Received'||po.status==='Partially Received'){<option [value]=\"po.id\">{{po.id}}</option>}}</select><select [(ngModel)]=\"invoiceForm.vendor_id\"><option value=\"\">Vendor auto-fills from PO</option>@for(v of vendors();track v.id){<option [value]=\"v.id\">{{v.name}}</option>}</select><select [(ngModel)]=\"invoiceForm.project_id\"><option value=\"\">Project auto-fills from PO</option>@for(p of projectService.projects();track p.id){<option [value]=\"p.id\">{{p.name}}</option>}</select><input type=\"date\" [(ngModel)]=\"invoiceForm.invoice_date\"><input type=\"date\" [(ngModel)]=\"invoiceForm.due_date\"><input type=\"number\" min=\"0.01\" placeholder=\"Invoice amount\" [(ngModel)]=\"invoiceForm.invoice_amount\"></div><textarea class=\"full\" placeholder=\"Invoice remarks\" [(ngModel)]=\"invoiceForm.remarks\"></textarea><div class=\"actions\"><button class=\"btn btn-primary\" (click)=\"createInvoice()\">Create Invoice</button></div></div>\n    }\n    <div class=\"table-card\"><table><thead><tr><th>Invoice</th><th>Vendor</th><th>PO</th><th>Amount</th><th>Paid</th><th>Payment Status</th><th>Invoice Status</th><th>Due Date</th>@if(isAdmin()){<th>Action</th>}</tr></thead><tbody>@for(inv of invoices();track inv.id){<tr><td>{{inv.invoice_number}}</td><td>{{inv.vendor_name||inv.vendor_id||'-'}}</td><td>{{inv.purchase_order_id||'-'}}</td><td>\u20B9{{inv.invoice_amount}}</td><td>\u20B9{{inv.paid_amount||0}}</td><td><span class=\"badge\">{{inv.payment_status}}</span></td><td>{{inv.invoice_status}}</td><td>{{inv.due_date||'-'}}</td>@if(isAdmin()){<td>@if(inv.invoice_status==='Received'){<button class=\"link-btn\" (click)=\"verifyInvoice(inv)\">Verify</button>}<button class=\"link-btn success\" (click)=\"updatePayment(inv)\">Update Payment</button></td>}</tr>}@empty{<tr><td [attr.colspan]=\"isAdmin()?9:8\">No invoices found.</td></tr>}</tbody></table></div>\n  }\n</div>", styles: [".procurement-page{padding:20px;color:#243042}.page-head{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:16px}.page-head h2{margin:0 0 5px;font-size:1.55rem}.page-head p{margin:0;color:#6b7280}.notice{padding:11px 14px;border-radius:8px;margin:10px 0}.notice.success{background:#dcfce7;color:#166534}.notice.error{background:#fee2e2;color:#991b1b}.tabs{display:flex;gap:8px;flex-wrap:wrap;border-bottom:1px solid #e5e7eb;margin:18px 0}.tabs button{border:0;background:#f3f4f6;padding:9px 14px;border-radius:8px 8px 0 0;cursor:pointer}.tabs button.active{background:#2563eb;color:#fff}.stats-grid{display:grid;grid-template-columns:repeat(4,minmax(150px,1fr));gap:14px}.stat,.card,.table-card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.04)}.stat{padding:18px}.stat span{display:block;color:#6b7280;font-size:.85rem}.stat strong{font-size:1.6rem}.card{padding:18px;margin:14px 0}.card h4,.card h5{margin:0 0 14px}.workflow{display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:14px;background:#f8fafc;border-radius:8px}.workflow b{color:#2563eb}.form-grid{display:grid;gap:10px;margin-bottom:10px}.form-grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}.form-grid input,.form-grid select,.form-grid textarea,.full,.po-item input,.receipt-table input,.filters input,.filters select{width:100%;padding:9px 10px;border:1px solid #d1d5db;border-radius:7px;box-sizing:border-box;background:#fff}.full{min-height:70px;margin:8px 0}.actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:12px}.amount{margin-left:auto;font-weight:600}.po-items{display:grid;gap:8px}.po-item{display:grid;grid-template-columns:2fr repeat(4,1fr) auto;gap:8px;padding:10px;background:#f8fafc;border-radius:8px}.table-card{overflow:auto;margin-top:14px}table{width:100%;border-collapse:collapse;min-width:760px}th,td{padding:10px;border-bottom:1px solid #e5e7eb;text-align:left;font-size:.9rem;vertical-align:top}th{background:#f8fafc;color:#475569}.badge{display:inline-block;padding:4px 8px;border-radius:999px;background:#e0e7ff;color:#3730a3;font-size:.78rem;white-space:nowrap}.filters{display:flex;gap:10px;padding:12px}.filters input{max-width:340px}.filters select{max-width:180px}.link-btn{border:0;background:transparent;color:#2563eb;padding:3px 5px;cursor:pointer}.link-btn.danger{color:#dc2626}.link-btn.success{color:#15803d}.receipt-table{margin-top:14px;min-width:0}.receipt-history{padding:10px;border-top:1px solid #e5e7eb}.btn{white-space:nowrap}@media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr)}.form-grid.three{grid-template-columns:1fr 1fr}.po-item{grid-template-columns:1fr 1fr}}@media(max-width:600px){.page-head{flex-direction:column}.stats-grid,.form-grid.three,.po-item{grid-template-columns:1fr}.amount{margin-left:0}.filters{flex-direction:column}.filters input,.filters select{max-width:none}}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProcurementManagementComponent, { className: "ProcurementManagementComponent", filePath: "src/app/components/procurement-management/procurement-management.ts", lineNumber: 13 }); })();
