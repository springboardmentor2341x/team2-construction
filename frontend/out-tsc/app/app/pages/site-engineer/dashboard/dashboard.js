import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';
import { WorkforceManagementComponent } from '../../../components/workforce-management/workforce-management';
import { ProcurementManagementComponent } from '../../../components/procurement-management/procurement-management';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function SiteEngineerDashboard_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const proj_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", proj_r1.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", proj_r1.name, " (", proj_r1.id, ")");
} }
function SiteEngineerDashboard_Conditional_25_For_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const mat_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", mat_r4.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", mat_r4.name, " (", mat_r4.unit, ") - Stock: ", mat_r4.inStock);
} }
function SiteEngineerDashboard_Conditional_25_Conditional_95_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 88)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 89);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_25_Conditional_95_For_2_Template_button_click_5_listener() { const $index_r6 = i0.ɵɵrestoreView(_r5).$index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.removeMaterialFromConsumption($index_r6)); });
    i0.ɵɵelement(6, "i", 90);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r7.materialName, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r7.quantity, " ", item_r7.unit);
} }
function SiteEngineerDashboard_Conditional_25_Conditional_95_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 68);
    i0.ɵɵrepeaterCreate(1, SiteEngineerDashboard_Conditional_25_Conditional_95_For_2_Template, 7, 3, "li", 88, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.tempMaterialsConsumed);
} }
function SiteEngineerDashboard_Conditional_25_Conditional_114_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 76)(1, "label", 91);
    i0.ɵɵtext(2, "Delay Reason *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 92);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Conditional_114_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.delayReason, $event) || (ctx_r2.delayReason = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 93);
    i0.ɵɵtext(5, "Heavy rainfall / Bad weather");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 94);
    i0.ɵɵtext(7, "Labour shortage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 95);
    i0.ɵɵtext(9, "Material delivery delay");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 96);
    i0.ɵɵtext(11, "Machinery breakdown");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 97);
    i0.ɵɵtext(13, "Design modification / RFI");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 98);
    i0.ɵɵtext(15, "Financial issue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 99);
    i0.ɵɵtext(17, "Government approval / Inspection delay");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 100);
    i0.ɵɵtext(19, "Other reason");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.delayReason);
} }
function SiteEngineerDashboard_Conditional_25_Conditional_147_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵelement(1, "i", 101);
    i0.ɵɵelementStart(2, "p", 102);
    i0.ɵɵtext(3, "No Daily Progress Reports recorded for this project yet.");
    i0.ɵɵelementEnd()();
} }
function SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 108);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rep_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("+", rep_r10.percentageWorkCompleted, "% Progress");
} }
function SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 109);
    i0.ɵɵelement(1, "i", 123);
    i0.ɵɵtext(2, "Delayed");
    i0.ɵɵelementEnd();
} }
function SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Conditional_35_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 126);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", m_r11.materialName, ": ", m_r11.quantity, " ", m_r11.unit, " ");
} }
function SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 118)(1, "span", 124);
    i0.ɵɵtext(2, "MATERIALS CONSUMED:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 125);
    i0.ɵɵrepeaterCreate(4, SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Conditional_35_For_5_Template, 2, 3, "span", 126, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const rep_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(rep_r10.materialsConsumed);
} }
function SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 103)(1, "div", 104)(2, "div", 105)(3, "span", 106);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 107);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Conditional_7_Template, 2, 1, "span", 108);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 105);
    i0.ɵɵconditionalCreate(9, SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Conditional_9_Template, 3, 0, "span", 109);
    i0.ɵɵelementStart(10, "button", 110);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Template_button_click_10_listener() { const rep_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.deleteReport(rep_r10.id)); });
    i0.ɵɵelement(11, "i", 111);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "h6", 2);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 112)(15, "div", 113);
    i0.ɵɵelement(16, "i", 114);
    i0.ɵɵtext(17, "Contractor: ");
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 113);
    i0.ɵɵelement(21, "i", 115);
    i0.ɵɵtext(22, "Workers: ");
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 113);
    i0.ɵɵelement(26, "i", 116);
    i0.ɵɵtext(27, "Weather: ");
    i0.ɵɵelementStart(28, "strong");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 113);
    i0.ɵɵelement(31, "i", 117);
    i0.ɵɵtext(32, "Machinery: ");
    i0.ɵɵelementStart(33, "strong");
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(35, SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Conditional_35_Template, 6, 0, "div", 118);
    i0.ɵɵelementStart(36, "div", 119)(37, "small", 120);
    i0.ɵɵtext(38, "Report ID: ");
    i0.ɵɵelementStart(39, "strong");
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "button", 121);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Template_button_click_42_listener() { const rep_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openReportDetail(rep_r10)); });
    i0.ɵɵelement(43, "i", 122);
    i0.ɵɵtext(44, " View Full Details ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const rep_r10 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rep_r10.reportDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rep_r10.workCategory);
    i0.ɵɵadvance();
    i0.ɵɵconditional(rep_r10.percentageWorkCompleted > 0 ? 7 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(rep_r10.delayEncountered ? 9 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rep_r10.activityPerformed);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(rep_r10.contractorName || "Vance Concrete");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", rep_r10.workersPresent, " Present");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(rep_r10.weatherConditions);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(rep_r10.machineryUsed || "Manual");
    i0.ɵɵadvance();
    i0.ɵɵconditional(rep_r10.materialsConsumed && rep_r10.materialsConsumed.length > 0 ? 35 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(rep_r10.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2022 Filed by ", rep_r10.siteEngineerName || "Sathvik S");
} }
function SiteEngineerDashboard_Conditional_25_Conditional_148_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 87);
    i0.ɵɵrepeaterCreate(1, SiteEngineerDashboard_Conditional_25_Conditional_148_For_2_Template, 45, 12, "div", 103, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectDailyReports());
} }
function SiteEngineerDashboard_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 21)(2, "div", 19)(3, "div", 22)(4, "div", 23)(5, "h5", 24);
    i0.ɵɵelement(6, "i", 25);
    i0.ɵɵtext(7, "File Daily Progress Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 26);
    i0.ɵɵtext(9, "Shift Record");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "form", 27);
    i0.ɵɵlistener("ngSubmit", function SiteEngineerDashboard_Conditional_25_Template_form_ngSubmit_10_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitDailyReport()); });
    i0.ɵɵelementStart(11, "div", 28)(12, "div", 29)(13, "label", 30);
    i0.ɵɵtext(14, "Report Date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.reportDate, $event) || (ctx_r2.reportDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 29)(17, "label", 30);
    i0.ɵɵtext(18, "Work Category *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.workCategory, $event) || (ctx_r2.workCategory = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(20, "option", 33);
    i0.ɵɵtext(21, "Earthwork & Piling");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 34);
    i0.ɵɵtext(23, "Structural Steel & Framing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "option", 35);
    i0.ɵɵtext(25, "Concrete & Slab Casting");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 36);
    i0.ɵɵtext(27, "Masonry & Blockwork");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 37);
    i0.ɵɵtext(29, "Electrical Works");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 38);
    i0.ɵɵtext(31, "Plumbing & Piping");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 39);
    i0.ɵɵtext(33, "HVAC & Mechanical");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 40);
    i0.ɵɵtext(35, "Finishing & Painting");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 41);
    i0.ɵɵtext(37, "Quality Inspection");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(38, "div", 42)(39, "label", 30);
    i0.ɵɵtext(40, "Activity Performed *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "textarea", 43);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_textarea_ngModelChange_41_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.activityPerformed, $event) || (ctx_r2.activityPerformed = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 28)(43, "div", 29)(44, "label", 30);
    i0.ɵɵtext(45, "% Shift Progress Added");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 44)(47, "input", 45);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.percentageWorkCompleted, $event) || (ctx_r2.percentageWorkCompleted = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "span", 46);
    i0.ɵɵtext(49, "%");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "div", 29)(51, "label", 30);
    i0.ɵɵtext(52, "Contractor Responsible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "select", 47);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_select_ngModelChange_53_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.selectedContractorId, $event) || (ctx_r2.selectedContractorId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(54, "option", 48);
    i0.ɵɵtext(55, "Vance Concrete Ltd (Gaurav K)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "option", 49);
    i0.ɵɵtext(57, "Apex Builders (Shradha S)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "option", 50);
    i0.ɵɵtext(59, "Apex Engineering (Sathvik S)");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(60, "div", 28)(61, "div", 51)(62, "label", 30);
    i0.ɵɵtext(63, "Workers Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "input", 52);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_64_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.workersPresent, $event) || (ctx_r2.workersPresent = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "div", 51)(66, "label", 30);
    i0.ɵɵtext(67, "Workers Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "input", 53);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_68_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.workersAbsent, $event) || (ctx_r2.workersAbsent = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(69, "div", 29)(70, "label", 30);
    i0.ɵɵtext(71, "Weather Conditions *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "input", 54);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_72_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.weatherConditions, $event) || (ctx_r2.weatherConditions = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(73, "div", 42)(74, "label", 30);
    i0.ɵɵtext(75, "Machinery Used & Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "input", 55);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_76_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.machineryUsed, $event) || (ctx_r2.machineryUsed = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(77, "div", 56)(78, "span", 57);
    i0.ɵɵelement(79, "i", 58);
    i0.ɵɵtext(80, "Materials Consumed This Shift");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "div", 59)(82, "div", 60)(83, "label", 61);
    i0.ɵɵtext(84, "Material");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "select", 62);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_select_ngModelChange_85_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.selectedMaterialId, $event) || (ctx_r2.selectedMaterialId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(86, SiteEngineerDashboard_Conditional_25_For_87_Template, 2, 4, "option", 7, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(88, "div", 63)(89, "label", 61);
    i0.ɵɵtext(90, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(91, "input", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_91_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.materialQty, $event) || (ctx_r2.materialQty = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(92, "div", 65)(93, "button", 66);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_25_Template_button_click_93_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addMaterialToConsumption()); });
    i0.ɵɵelement(94, "i", 67);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(95, SiteEngineerDashboard_Conditional_25_Conditional_95_Template, 3, 0, "ul", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(96, "div", 28)(97, "div", 29)(98, "label", 30);
    i0.ɵɵtext(99, "Safety Observations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(100, "input", 69);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_100_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.safetyObservations, $event) || (ctx_r2.safetyObservations = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(101, "div", 29)(102, "label", 30);
    i0.ɵɵtext(103, "Quality Inspection Remarks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "input", 70);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_104_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.qualityInspectionRemarks, $event) || (ctx_r2.qualityInspectionRemarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(105, "div", 42)(106, "label", 30);
    i0.ɵɵtext(107, "Progress Photograph URL (Optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(108, "input", 71);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_108_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.progressPhotograph, $event) || (ctx_r2.progressPhotograph = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(109, "div", 72)(110, "input", 73);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_input_ngModelChange_110_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.delayEncountered, $event) || (ctx_r2.delayEncountered = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(111, "label", 74);
    i0.ɵɵelement(112, "i", 75);
    i0.ɵɵtext(113, " Delay Encountered During Shift? ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(114, SiteEngineerDashboard_Conditional_25_Conditional_114_Template, 20, 1, "div", 76);
    i0.ɵɵelementStart(115, "div", 42)(116, "label", 30);
    i0.ɵɵtext(117, "Additional Remarks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(118, "textarea", 77);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_textarea_ngModelChange_118_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.additionalComments, $event) || (ctx_r2.additionalComments = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(119, "button", 78);
    i0.ɵɵelement(120, "i", 79);
    i0.ɵɵtext(121, " Submit Daily Progress Report ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(122, "div", 80)(123, "div", 19)(124, "div", 22)(125, "div", 81)(126, "div")(127, "h5", 24);
    i0.ɵɵtext(128, "Daily Progress Reports Ledger");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(129, "small", 82);
    i0.ɵɵtext(130, "Separate historical logs filed by Site Engineer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(131, "div", 83)(132, "select", 84);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_25_Template_select_ngModelChange_132_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.reportFilterCategory, $event) || (ctx_r2.reportFilterCategory = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(133, "option", 85);
    i0.ɵɵtext(134, "All Categories");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(135, "option", 34);
    i0.ɵɵtext(136, "Structural");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(137, "option", 35);
    i0.ɵɵtext(138, "Concrete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(139, "option", 37);
    i0.ɵɵtext(140, "Electrical");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(141, "option", 38);
    i0.ɵɵtext(142, "Plumbing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(143, "option", 33);
    i0.ɵɵtext(144, "Earthwork");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(145, "option", 41);
    i0.ɵɵtext(146, "Inspection");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(147, SiteEngineerDashboard_Conditional_25_Conditional_147_Template, 4, 0, "div", 86)(148, SiteEngineerDashboard_Conditional_25_Conditional_148_Template, 3, 0, "div", 87);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.reportDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.workCategory);
    i0.ɵɵadvance(22);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.activityPerformed);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.percentageWorkCompleted);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.selectedContractorId);
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.workersPresent);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.workersAbsent);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.weatherConditions);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.machineryUsed);
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.selectedMaterialId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectService.materials());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.materialQty);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r2.tempMaterialsConsumed.length > 0 ? 95 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.safetyObservations);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.qualityInspectionRemarks);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.progressPhotograph);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.delayEncountered);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r2.delayEncountered ? 114 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.additionalComments);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.reportFilterCategory);
    i0.ɵɵadvance(15);
    i0.ɵɵconditional(ctx_r2.projectDailyReports().length === 0 ? 147 : 148);
} }
function SiteEngineerDashboard_Conditional_26_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", res_r13.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", res_r13.id, " - ", res_r13.name, " [", res_r13.status, "]");
} }
function SiteEngineerDashboard_Conditional_26_Conditional_16_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", res_r14.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", res_r14.id, " - ", res_r14.name);
} }
function SiteEngineerDashboard_Conditional_26_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SiteEngineerDashboard_Conditional_26_Conditional_16_For_1_Template, 2, 3, "option", 7, _forTrack0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r2.projectService.resources());
} }
function SiteEngineerDashboard_Conditional_26_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145)(1, "p", 102);
    i0.ɵɵtext(2, "No machinery usage entries logged for this project yet.");
    i0.ɵɵelementEnd()();
} }
function SiteEngineerDashboard_Conditional_26_Conditional_49_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 149);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "div", 150);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small", 120);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td")(9, "span", 108);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td")(12, "span", 107);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td")(17, "strong", 151);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "td", 152);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const u_r15 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r15.usageDate);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(u_r15.resourceName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("ID: ", u_r15.resourceId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", u_r15.operatingHours, " hrs");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", u_r15.idleHours, " hrs");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", u_r15.totalAvailableHours, " hrs");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", u_r15.utilizationPercentage, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r15.remarks || "-");
} }
function SiteEngineerDashboard_Conditional_26_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 146)(1, "table", 147)(2, "thead", 148)(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Equipment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Operating");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Idle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Capacity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Utilization %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Remarks");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵrepeaterCreate(19, SiteEngineerDashboard_Conditional_26_Conditional_49_For_20_Template, 21, 8, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(19);
    i0.ɵɵrepeater(ctx_r2.projectMachineryLogs());
} }
function SiteEngineerDashboard_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 127)(2, "div", 19)(3, "div", 22)(4, "h5", 128);
    i0.ɵɵelement(5, "i", 129);
    i0.ɵɵtext(6, "Log Shift Machinery Hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 130);
    i0.ɵɵtext(8, "Record machine run-time and idle hours for automatic utilization calculations.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "form", 27);
    i0.ɵɵlistener("ngSubmit", function SiteEngineerDashboard_Conditional_26_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitMachineryUsage()); });
    i0.ɵɵelementStart(10, "div", 131)(11, "label", 30);
    i0.ɵɵtext(12, "Select Assigned Equipment *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "select", 132);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_26_Template_select_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.machineryResourceId, $event) || (ctx_r2.machineryResourceId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(14, SiteEngineerDashboard_Conditional_26_For_15_Template, 2, 4, "option", 7, _forTrack0);
    i0.ɵɵconditionalCreate(16, SiteEngineerDashboard_Conditional_26_Conditional_16_Template, 2, 0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 133)(18, "div", 134)(19, "label", 30);
    i0.ɵɵtext(20, "Usage Date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 135);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_26_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.machineryUsageDate, $event) || (ctx_r2.machineryUsageDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 134)(23, "label", 30);
    i0.ɵɵtext(24, "Shift Total (hrs)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "input", 136);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_26_Template_input_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.machineryTotalHours, $event) || (ctx_r2.machineryTotalHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 133)(27, "div", 134)(28, "label", 30);
    i0.ɵɵtext(29, "Operating (hrs) *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "input", 137);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_26_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.machineryOperatingHours, $event) || (ctx_r2.machineryOperatingHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 134)(32, "label", 30);
    i0.ɵɵtext(33, "Idle (hrs)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "input", 138);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_26_Template_input_ngModelChange_34_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.machineryIdleHours, $event) || (ctx_r2.machineryIdleHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "div", 42)(36, "label", 30);
    i0.ɵɵtext(37, "Remarks / Task Activity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "input", 139);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_26_Template_input_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.machineryRemarks, $event) || (ctx_r2.machineryRemarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "button", 140);
    i0.ɵɵelement(40, "i", 141);
    i0.ɵɵtext(41, " Record Shift Usage ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(42, "div", 142)(43, "div", 19)(44, "div", 22)(45, "h5", 143);
    i0.ɵɵelement(46, "i", 144);
    i0.ɵɵtext(47, "Jobsite Machinery Run-Time Logs");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(48, SiteEngineerDashboard_Conditional_26_Conditional_48_Template, 3, 0, "div", 145)(49, SiteEngineerDashboard_Conditional_26_Conditional_49_Template, 21, 0, "div", 146);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.machineryResourceId);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectEquipment());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.projectEquipment().length === 0 ? 16 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.machineryUsageDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.machineryTotalHours);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.machineryOperatingHours);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.machineryIdleHours);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.machineryRemarks);
    i0.ɵɵadvance(10);
    i0.ɵɵconditional(ctx_r2.projectMachineryLogs().length === 0 ? 48 : 49);
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 172);
    i0.ɵɵtext(1, "No activities recorded for this week interval.");
    i0.ɵɵelementEnd();
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_40_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 176);
    i0.ɵɵelement(1, "i", 177);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const act_r17 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(act_r17);
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 173);
    i0.ɵɵrepeaterCreate(1, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_40_For_2_Template, 4, 1, "li", 176, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ws_r18 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ws_r18.majorActivitiesCompleted);
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 172);
    i0.ɵɵtext(1, "No materials recorded during this period.");
    i0.ɵɵelementEnd();
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_47_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 149);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "span", 180);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r19 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r19.materialName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r19.quantity);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r19.unit);
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 146)(1, "table", 178)(2, "thead", 179)(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Material");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Total Consumed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Unit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵrepeaterCreate(11, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_47_For_12_Template, 8, 3, "tr", null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ws_r18 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵrepeater(ws_r18.materialsConsumedSummary);
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_48_Conditional_1_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 184)(1, "span", 185);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r20 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r20.date);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r20.reason);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(": ", d_r20.activity, " ");
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_48_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 169)(1, "div", 181)(2, "h6", 182);
    i0.ɵɵelement(3, "i", 183);
    i0.ɵɵtext(4, "Weekly Delays Encountered");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(5, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_48_Conditional_1_For_6_Template, 6, 3, "div", 184, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ws_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ws_r18.delayDetails);
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_48_Conditional_2_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 184);
    i0.ɵɵelement(1, "i", 188);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r21 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", s_r21, " ");
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_48_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 169)(1, "div", 186)(2, "h6", 128);
    i0.ɵɵelement(3, "i", 187);
    i0.ɵɵtext(4, "Safety Observations & Audits");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(5, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_48_Conditional_2_For_6_Template, 3, 1, "div", 184, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ws_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ws_r18.safetyObservations);
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 175);
    i0.ɵɵconditionalCreate(1, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_48_Conditional_1_Template, 7, 0, "div", 169);
    i0.ɵɵconditionalCreate(2, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_48_Conditional_2_Template, 7, 0, "div", 169);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ws_r18 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ws_r18.delayDetails.length > 0 ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ws_r18.safetyObservations.length > 0 ? 2 : -1);
} }
function SiteEngineerDashboard_Conditional_27_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 160)(3, "span", 161);
    i0.ɵɵtext(4, "Weekly Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3", 162);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small", 82);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 10)(10, "div", 163)(11, "span", 161);
    i0.ɵɵtext(12, "Daily Reports Filed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h3", 164);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "small", 82);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 10)(18, "div", 165)(19, "span", 161);
    i0.ɵɵtext(20, "Worker Shifts Utilized");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "h3", 166);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "small", 82);
    i0.ɵɵtext(24, "Total workers checked in");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 10)(26, "div", 167)(27, "span", 161);
    i0.ɵɵtext(28, "Delays Encountered");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "h3", 168);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "small", 82);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(33, "div", 15)(34, "div", 169)(35, "div", 170)(36, "h6", 143);
    i0.ɵɵelement(37, "i", 171);
    i0.ɵɵtext(38, "Major Construction Activities Completed");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(39, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_39_Template, 2, 0, "p", 172)(40, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_40_Template, 3, 0, "ul", 173);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 169)(42, "div", 170)(43, "h6", 143);
    i0.ɵɵelement(44, "i", 174);
    i0.ɵɵtext(45, "Materials Consumed Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(46, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_46_Template, 2, 0, "p", 172)(47, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_47_Template, 13, 0, "div", 146);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(48, SiteEngineerDashboard_Conditional_27_Conditional_16_Conditional_48_Template, 3, 2, "div", 175);
} if (rf & 2) {
    const ws_r18 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("+", ws_r18.weeklyProgressPercentage, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Overall: ", ws_r18.overallProjectProgress, "% (", ws_r18.projectStatus, ")");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ws_r18.totalReportsFiled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Period: ", ws_r18.weekStartDate, " to ", ws_r18.weekEndDate);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ws_r18.totalWorkersUtilized);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ws_r18.delaysEncounteredCount);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ws_r18.safetyObservationsCount, " Safety observations");
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ws_r18.majorActivitiesCompleted.length === 0 ? 39 : 40);
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ws_r18.materialsConsumedSummary.length === 0 ? 46 : 47);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ws_r18.delayDetails.length > 0 || ws_r18.safetyObservations.length > 0 ? 48 : -1);
} }
function SiteEngineerDashboard_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 22)(2, "div", 1)(3, "div")(4, "h5", 2);
    i0.ɵɵelement(5, "i", 153);
    i0.ɵɵtext(6, "Weekly Progress Report Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 154);
    i0.ɵɵtext(8, "Dynamically summarized from daily progress logs for the selected weekly period.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 155)(10, "label", 156);
    i0.ɵɵtext(11, "Week Start:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 157);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_27_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.selectedWeekStart, $event) || (ctx_r2.selectedWeekStart = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function SiteEngineerDashboard_Conditional_27_Template_input_change_12_listener() { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.fetchWeeklySummary()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 158);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_27_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.fetchWeeklySummary()); });
    i0.ɵɵelement(14, "i", 159);
    i0.ɵɵtext(15, "Refresh");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(16, SiteEngineerDashboard_Conditional_27_Conditional_16_Template, 49, 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.selectedWeekStart);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional((tmp_2_0 = ctx_r2.projectService.weeklySummary()) ? 16 : -1, tmp_2_0);
} }
function SiteEngineerDashboard_Conditional_28_For_16_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 202);
    i0.ɵɵelement(1, "i", 203);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Completed on ", m_r23.actualCompletionDate, " ");
} }
function SiteEngineerDashboard_Conditional_28_For_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 192)(1, "div", 193)(2, "div", 194)(3, "span", 195);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 150);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "h6", 2);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 196);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 197);
    i0.ɵɵelement(12, "div", 198);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 199)(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 200);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_28_For_16_Template_button_click_16_listener() { const m_r23 = i0.ɵɵrestoreView(_r22).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openEditMilestone(m_r23)); });
    i0.ɵɵelement(17, "i", 201);
    i0.ɵɵtext(18, " Update ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(19, SiteEngineerDashboard_Conditional_28_For_16_Conditional_19_Template, 3, 1, "small", 202);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r23 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("border-success", m_r23.status === "Completed")("border-primary", m_r23.status === "In Progress")("border-danger", m_r23.status === "Delayed");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", m_r23.status === "Completed")("bg-primary", m_r23.status === "In Progress")("bg-warning", m_r23.status === "Pending")("bg-danger", m_r23.status === "Delayed");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", m_r23.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", m_r23.progressPercentage, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r23.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r23.relatedActivities || "Related site activities underway.");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", m_r23.progressPercentage, "%");
    i0.ɵɵclassProp("bg-success", m_r23.status === "Completed")("bg-primary", m_r23.status === "In Progress")("bg-danger", m_r23.status === "Delayed");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("Planned: ", m_r23.plannedStartDate, " \u2192 ", m_r23.plannedEndDate);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(m_r23.actualCompletionDate ? 19 : -1);
} }
function SiteEngineerDashboard_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 22)(2, "div", 189)(3, "div")(4, "h5", 2);
    i0.ɵɵelement(5, "i", 190);
    i0.ɵɵtext(6, "Project Milestones Tracking");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 154);
    i0.ɵɵtext(8, "Planned project milestone schedule and actual verified completion rates for ");
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, ".");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "span", 191);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 15);
    i0.ɵɵrepeaterCreate(15, SiteEngineerDashboard_Conditional_28_For_16_Template, 20, 29, "div", 192, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r2.engineerProject()) == null ? null : tmp_1_0.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Cumulative Completion: ", (tmp_2_0 = ctx_r2.engineerProject()) == null ? null : tmp_2_0.progress, "% ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.projectMilestones());
} }
function SiteEngineerDashboard_Conditional_29_Conditional_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵelement(1, "i", 216);
    i0.ɵɵelementStart(2, "p", 102);
    i0.ɵɵtext(3, "No active delays logged for this site.");
    i0.ɵɵelementEnd()();
} }
function SiteEngineerDashboard_Conditional_29_Conditional_66_For_2_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 221);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(d_r26.additionalRemarks);
} }
function SiteEngineerDashboard_Conditional_29_Conditional_66_For_2_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 224);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_29_Conditional_66_For_2_Conditional_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const d_r26 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.resolveDelay(d_r26.id)); });
    i0.ɵɵelement(1, "i", 225);
    i0.ɵɵtext(2, " Mark Resolved ");
    i0.ɵɵelementEnd();
} }
function SiteEngineerDashboard_Conditional_29_Conditional_66_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 103)(1, "div", 104)(2, "div", 155)(3, "span", 195);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 107);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 155)(8, "span", 195);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 218);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_29_Conditional_66_For_2_Template_button_click_10_listener() { const d_r26 = i0.ɵɵrestoreView(_r25).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.deleteDelay(d_r26.id)); });
    i0.ɵɵelement(11, "i", 90);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "h6", 2);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p", 219)(15, "strong", 220);
    i0.ɵɵtext(16, "Reason:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17);
    i0.ɵɵelementStart(18, "strong", 220);
    i0.ɵɵtext(19, "Duration:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(21, SiteEngineerDashboard_Conditional_29_Conditional_66_For_2_Conditional_21_Template, 2, 1, "p", 221);
    i0.ɵɵelementStart(22, "div", 222)(23, "span", 82);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(25, SiteEngineerDashboard_Conditional_29_Conditional_66_For_2_Conditional_25_Template, 3, 0, "button", 223);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const d_r26 = ctx.$implicit;
    i0.ɵɵclassProp("border-danger", d_r26.status === "Active")("border-success", d_r26.status === "Resolved");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("bg-danger", d_r26.impactOnProject === "Critical" || d_r26.impactOnProject === "High")("bg-warning", d_r26.impactOnProject === "Medium")("bg-info", d_r26.impactOnProject === "Low");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", d_r26.impactOnProject, " Impact ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r26.date);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", d_r26.status === "Resolved")("bg-danger", d_r26.status === "Active");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", d_r26.status, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(d_r26.affectedActivity);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", d_r26.delayReason, " \u2022 ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", d_r26.delayDuration);
    i0.ɵɵadvance();
    i0.ɵɵconditional(d_r26.additionalRemarks ? 21 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Logged by: ", d_r26.recordedByName || "Site Engineer");
    i0.ɵɵadvance();
    i0.ɵɵconditional(d_r26.status === "Active" ? 25 : -1);
} }
function SiteEngineerDashboard_Conditional_29_Conditional_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 87);
    i0.ɵɵrepeaterCreate(1, SiteEngineerDashboard_Conditional_29_Conditional_66_For_2_Template, 26, 23, "div", 217, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectDelays());
} }
function SiteEngineerDashboard_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 127)(2, "div", 19)(3, "div", 22)(4, "h5", 143);
    i0.ɵɵelement(5, "i", 204);
    i0.ɵɵtext(6, "Log Site Delay Event");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "form", 27);
    i0.ɵɵlistener("ngSubmit", function SiteEngineerDashboard_Conditional_29_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitDelayRecord()); });
    i0.ɵɵelementStart(8, "div", 42)(9, "label", 30);
    i0.ɵɵtext(10, "Date of Delay *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 205);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_29_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.delayDate, $event) || (ctx_r2.delayDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 42)(13, "label", 30);
    i0.ɵɵtext(14, "Affected Activity *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 206);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_29_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.delayAffectedActivity, $event) || (ctx_r2.delayAffectedActivity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 42)(17, "label", 30);
    i0.ɵɵtext(18, "Delay Reason Classification *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 207);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_29_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.delayReasonSelect, $event) || (ctx_r2.delayReasonSelect = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(20, "option", 93);
    i0.ɵɵtext(21, "Heavy rainfall / Extreme weather");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 94);
    i0.ɵɵtext(23, "Labour shortage / Strike");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "option", 95);
    i0.ɵɵtext(25, "Material delivery delay");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 96);
    i0.ɵɵtext(27, "Machinery breakdown / Repair");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 97);
    i0.ɵɵtext(29, "Design modification / Engineering RFI");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 98);
    i0.ɵɵtext(31, "Financial / Invoice bottleneck");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 99);
    i0.ɵɵtext(33, "Government approval / Inspection hold");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 100);
    i0.ɵɵtext(35, "Other unclassified obstacle");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "div", 28)(37, "div", 134)(38, "label", 30);
    i0.ɵɵtext(39, "Delay Duration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "input", 208);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_29_Template_input_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.delayDuration, $event) || (ctx_r2.delayDuration = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 134)(42, "label", 30);
    i0.ɵɵtext(43, "Impact Level");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "select", 209);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_29_Template_select_ngModelChange_44_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.delayImpact, $event) || (ctx_r2.delayImpact = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(45, "option", 210);
    i0.ɵɵtext(46, "Low Impact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "option", 211);
    i0.ɵɵtext(48, "Medium Impact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "option", 212);
    i0.ɵɵtext(50, "High Impact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "option", 213);
    i0.ɵɵtext(52, "Critical Impact");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(53, "div", 42)(54, "label", 30);
    i0.ɵɵtext(55, "Additional Remarks / Mitigation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "textarea", 214);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_29_Template_textarea_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.delayRemarks, $event) || (ctx_r2.delayRemarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "button", 215);
    i0.ɵɵelement(58, "i", 75);
    i0.ɵɵtext(59, " Log Delay to Project Manager ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(60, "div", 142)(61, "div", 19)(62, "div", 22)(63, "h5", 143);
    i0.ɵɵtext(64, "Documented Site Delays & Bottlenecks");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(65, SiteEngineerDashboard_Conditional_29_Conditional_65_Template, 4, 0, "div", 86)(66, SiteEngineerDashboard_Conditional_29_Conditional_66_Template, 3, 0, "div", 87);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.delayDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.delayAffectedActivity);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.delayReasonSelect);
    i0.ɵɵadvance(21);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.delayDuration);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.delayImpact);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.delayRemarks);
    i0.ɵɵadvance(9);
    i0.ɵɵconditional(ctx_r2.projectDelays().length === 0 ? 65 : 66);
} }
function SiteEngineerDashboard_Conditional_30_Conditional_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵelement(1, "i", 243);
    i0.ɵɵelementStart(2, "p", 102);
    i0.ɵɵtext(3, "No site activity logs found.");
    i0.ɵɵelementEnd()();
} }
function SiteEngineerDashboard_Conditional_30_Conditional_76_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 103)(1, "div", 244)(2, "span", 245);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 105)(5, "small", 82);
    i0.ɵɵelement(6, "i", 246);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 247);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_30_Conditional_76_For_2_Template_button_click_8_listener() { const a_r30 = i0.ɵɵrestoreView(_r29).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.deleteActivityLog(a_r30.id)); });
    i0.ɵɵelement(9, "i", 90);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "p", 248);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 249)(13, "span", 82);
    i0.ɵɵtext(14, "Responsible: ");
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "span", 82);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const a_r30 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", a_r30.activityType, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", a_r30.date, " at ", a_r30.time);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r30.description);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(a_r30.responsiblePerson);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Recorded by ", a_r30.loggedByName || "Site Engineer");
} }
function SiteEngineerDashboard_Conditional_30_Conditional_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 87);
    i0.ɵɵrepeaterCreate(1, SiteEngineerDashboard_Conditional_30_Conditional_76_For_2_Template, 19, 6, "div", 103, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.projectActivityLogs());
} }
function SiteEngineerDashboard_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 127)(2, "div", 19)(3, "div", 22)(4, "h5", 143);
    i0.ɵɵelement(5, "i", 226);
    i0.ɵɵtext(6, "Record Site Event");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 130);
    i0.ɵɵtext(8, "Log site occurrences: material arrivals, machinery service, client walkthroughs, safety audits.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "form", 27);
    i0.ɵɵlistener("ngSubmit", function SiteEngineerDashboard_Conditional_30_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitActivityLog()); });
    i0.ɵɵelementStart(10, "div", 28)(11, "div", 134)(12, "label", 30);
    i0.ɵɵtext(13, "Date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "input", 227);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_30_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.activityDate, $event) || (ctx_r2.activityDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 134)(16, "label", 30);
    i0.ɵɵtext(17, "Time *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "input", 228);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_30_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.activityTime, $event) || (ctx_r2.activityTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 42)(20, "label", 30);
    i0.ɵɵtext(21, "Activity Type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "select", 229);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_30_Template_select_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.activityType, $event) || (ctx_r2.activityType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(23, "option", 230);
    i0.ɵɵtext(24, "Machinery maintenance / Service");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 231);
    i0.ɵɵtext(26, "Material arrival & Delivery");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "option", 232);
    i0.ɵɵtext(28, "Safety training / Tool Box Talk");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "option", 233);
    i0.ɵɵtext(30, "Client / Sponsor walkthrough");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 234);
    i0.ɵɵtext(32, "Government / Building inspection");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 235);
    i0.ɵɵtext(34, "Quality audit & Lab testing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "option", 236);
    i0.ɵɵtext(36, "Accident / Incident report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 237);
    i0.ɵɵtext(38, "Contractor coordination meeting");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "option", 238);
    i0.ɵɵtext(40, "Equipment servicing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "option", 100);
    i0.ɵɵtext(42, "Other site event");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "div", 42)(44, "label", 30);
    i0.ɵɵtext(45, "Description *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "textarea", 239);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_30_Template_textarea_ngModelChange_46_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.activityDescription, $event) || (ctx_r2.activityDescription = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 42)(48, "label", 30);
    i0.ɵɵtext(49, "Responsible Person *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "input", 240);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_30_Template_input_ngModelChange_50_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.activityResponsiblePerson, $event) || (ctx_r2.activityResponsiblePerson = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "button", 241);
    i0.ɵɵelement(52, "i", 242);
    i0.ɵɵtext(53, " Save Activity Log ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(54, "div", 142)(55, "div", 19)(56, "div", 22)(57, "div", 23)(58, "h5", 24);
    i0.ɵɵtext(59, "Site Activity Timeline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "select", 84);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_30_Template_select_ngModelChange_60_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.activityFilterType, $event) || (ctx_r2.activityFilterType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(61, "option", 85);
    i0.ɵɵtext(62, "All Event Types");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "option", 230);
    i0.ɵɵtext(64, "Machinery");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "option", 231);
    i0.ɵɵtext(66, "Materials");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "option", 232);
    i0.ɵɵtext(68, "Safety");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "option", 233);
    i0.ɵɵtext(70, "Client Visits");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "option", 234);
    i0.ɵɵtext(72, "Gov Inspection");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "option", 235);
    i0.ɵɵtext(74, "Quality Audit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(75, SiteEngineerDashboard_Conditional_30_Conditional_75_Template, 4, 0, "div", 86)(76, SiteEngineerDashboard_Conditional_30_Conditional_76_Template, 3, 0, "div", 87);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.activityDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.activityTime);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.activityType);
    i0.ɵɵadvance(24);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.activityDescription);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.activityResponsiblePerson);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.activityFilterType);
    i0.ɵɵadvance(15);
    i0.ɵɵconditional(ctx_r2.projectActivityLogs().length === 0 ? 75 : 76);
} }
function SiteEngineerDashboard_Conditional_31_For_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 258)(1, "div", 259);
    i0.ɵɵelement(2, "img", 260);
    i0.ɵɵelementStart(3, "div", 261)(4, "p", 262);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 263)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const photo_r32 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", photo_r32.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(photo_r32.caption);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Uploaded by: ", photo_r32.uploadedBy);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(photo_r32.date);
} }
function SiteEngineerDashboard_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 127)(2, "div", 19)(3, "div", 22)(4, "h5", 143);
    i0.ɵɵelement(5, "i", 250);
    i0.ɵɵtext(6, "Upload Site Photo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "form", 27);
    i0.ɵɵlistener("ngSubmit", function SiteEngineerDashboard_Conditional_31_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitSitePhoto()); });
    i0.ɵɵelementStart(8, "div", 42)(9, "label", 30);
    i0.ɵɵtext(10, "Photo URL *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 251);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_31_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.photoUrl, $event) || (ctx_r2.photoUrl = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 252);
    i0.ɵɵtext(13, "Preset image templates:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 253)(15, "button", 254);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_31_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.photoUrl = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=500"; return i0.ɵɵresetView(ctx_r2.photoCaption = "Curtain wall fittings and steel columns."); });
    i0.ɵɵtext(16, " Steel Columns Level 8 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 254);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_31_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.photoUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=500"; return i0.ɵɵresetView(ctx_r2.photoCaption = "Workers tightening deck scaffold plates."); });
    i0.ɵɵtext(18, " Worker Scaffolding View ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 254);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_31_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.photoUrl = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=500"; return i0.ɵɵresetView(ctx_r2.photoCaption = "Concrete slab pour on Level 7."); });
    i0.ɵɵtext(20, " Concrete Slab Pouring ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 42)(22, "label", 30);
    i0.ɵɵtext(23, "Photo Caption *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 255);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_31_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.photoCaption, $event) || (ctx_r2.photoCaption = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "button", 140);
    i0.ɵɵelement(26, "i", 256);
    i0.ɵɵtext(27, " Log Photo Feed ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(28, "div", 142)(29, "div", 19)(30, "div", 22)(31, "h5", 143);
    i0.ɵɵtext(32, "Active Photo Stream");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 257);
    i0.ɵɵrepeaterCreate(34, SiteEngineerDashboard_Conditional_31_For_35_Template, 11, 4, "div", 258, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.photoUrl);
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.photoCaption);
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r2.projectPhotos());
} }
function SiteEngineerDashboard_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-workforce-management", 18);
} if (rf & 2) {
    i0.ɵɵproperty("initialTab", "attendance");
} }
function SiteEngineerDashboard_Conditional_33_For_20_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 109);
    i0.ɵɵtext(1, "Critical Reorder");
    i0.ɵɵelementEnd();
} }
function SiteEngineerDashboard_Conditional_33_For_20_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 264);
    i0.ɵɵtext(1, "Buffer Low");
    i0.ɵɵelementEnd();
} }
function SiteEngineerDashboard_Conditional_33_For_20_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 265);
    i0.ɵɵtext(1, "Optimal");
    i0.ɵɵelementEnd();
} }
function SiteEngineerDashboard_Conditional_33_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 150);
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
    i0.ɵɵconditionalCreate(10, SiteEngineerDashboard_Conditional_33_For_20_Conditional_10_Template, 2, 0, "span", 109)(11, SiteEngineerDashboard_Conditional_33_For_20_Conditional_11_Template, 2, 0, "span", 264)(12, SiteEngineerDashboard_Conditional_33_For_20_Conditional_12_Template, 2, 0, "span", 265);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r33 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r33.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", m_r33.inStock, " ", m_r33.unit);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", m_r33.reorderLevel, " ", m_r33.unit);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("$", m_r33.costPerUnit, " / ", m_r33.unit);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(m_r33.inStock <= m_r33.reorderLevel ? 10 : m_r33.inStock <= m_r33.reorderLevel * 1.5 ? 11 : 12);
} }
function SiteEngineerDashboard_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 22)(2, "h5", 143);
    i0.ɵɵtext(3, "Materials Inventory Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 146)(5, "table", 147)(6, "thead", 148)(7, "tr")(8, "th");
    i0.ɵɵtext(9, "Material");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Quantity in Stock");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Min Safety Buffer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Estimated Unit Cost");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Stock Level");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵrepeaterCreate(19, SiteEngineerDashboard_Conditional_33_For_20_Template, 13, 8, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵrepeater(ctx_r2.projectService.materials());
} }
function SiteEngineerDashboard_Conditional_34_For_37_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 274);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_34_For_37_Conditional_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const issue_r36 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.resolveIssue(issue_r36.id)); });
    i0.ɵɵtext(1, " Mark Resolved ");
    i0.ɵɵelementEnd();
} }
function SiteEngineerDashboard_Conditional_34_For_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 272)(1, "div", 104)(2, "span", 195);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 180);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h6", 2);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 219);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 249)(11, "span", 82);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, SiteEngineerDashboard_Conditional_34_For_37_Conditional_13_Template, 2, 0, "button", 273);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const issue_r36 = ctx.$implicit;
    i0.ɵɵclassProp("border-danger-subtle", issue_r36.status === "Open")("bg-danger-subtle", issue_r36.status === "Open")("border-success-subtle", issue_r36.status === "Resolved")("bg-light", issue_r36.status === "Resolved");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-danger", issue_r36.severity === "Critical" || issue_r36.severity === "High")("bg-warning", issue_r36.severity === "Medium")("bg-info", issue_r36.severity === "Low");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", issue_r36.severity, " Severity ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(issue_r36.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(issue_r36.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(issue_r36.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("Reported by: ", issue_r36.reportedBy, " \u2022 ", issue_r36.reportedDate);
    i0.ɵɵadvance();
    i0.ɵɵconditional(issue_r36.status === "Open" ? 13 : -1);
} }
function SiteEngineerDashboard_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 127)(2, "div", 19)(3, "div", 22)(4, "h5", 143);
    i0.ɵɵtext(5, "Submit Issue / Hazard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "form", 27);
    i0.ɵɵlistener("ngSubmit", function SiteEngineerDashboard_Conditional_34_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r34); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitIssue()); });
    i0.ɵɵelementStart(7, "div", 42)(8, "label", 30);
    i0.ɵɵtext(9, "Issue Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 266);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_34_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.issueTitle, $event) || (ctx_r2.issueTitle = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 42)(12, "label", 30);
    i0.ɵɵtext(13, "Severity Classification");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "select", 267);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_34_Template_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.issueSeverity, $event) || (ctx_r2.issueSeverity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(15, "option", 210);
    i0.ɵɵtext(16, "Low (Administrative)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 211);
    i0.ɵɵtext(18, "Medium (Correction needed)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 212);
    i0.ɵɵtext(20, "High (Immediate check)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 213);
    i0.ɵɵtext(22, "Critical (Stop Work Trigger)");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 42)(24, "label", 30);
    i0.ɵɵtext(25, "Hazard Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "textarea", 268);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_34_Template_textarea_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.issueDescription, $event) || (ctx_r2.issueDescription = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "button", 269);
    i0.ɵɵelement(28, "i", 270);
    i0.ɵɵtext(29, " Flag Issue ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(30, "div", 142)(31, "div", 19)(32, "div", 22)(33, "h5", 143);
    i0.ɵɵtext(34, "Site Issues Log");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 87);
    i0.ɵɵrepeaterCreate(36, SiteEngineerDashboard_Conditional_34_For_37_Template, 14, 21, "div", 271, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.issueTitle);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.issueSeverity);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.issueDescription);
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r2.activeIssues());
} }
function SiteEngineerDashboard_Conditional_35_Conditional_36_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r38 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r38.materialName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r38.quantity);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r38.unit);
} }
function SiteEngineerDashboard_Conditional_35_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 286)(1, "h6", 128);
    i0.ɵɵelement(2, "i", 58);
    i0.ɵɵtext(3, "Materials Consumed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 146)(5, "table", 298)(6, "thead", 299)(7, "tr")(8, "th");
    i0.ɵɵtext(9, "Material Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Unit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵrepeaterCreate(15, SiteEngineerDashboard_Conditional_35_Conditional_36_For_16_Template, 8, 3, "tr", null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const rep_r39 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(rep_r39.materialsConsumed);
} }
function SiteEngineerDashboard_Conditional_35_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 293)(1, "strong", 300);
    i0.ɵɵelement(2, "i", 75);
    i0.ɵɵtext(3, "Delay Encountered:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 301);
    i0.ɵɵtext(5, "Reason: ");
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const rep_r39 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(rep_r39.delayReason);
} }
function SiteEngineerDashboard_Conditional_35_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 294)(1, "strong", 289);
    i0.ɵɵtext(2, "Additional Comments:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 291);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const rep_r39 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rep_r39.additionalComments);
} }
function SiteEngineerDashboard_Conditional_35_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 295)(1, "strong", 302);
    i0.ɵɵelement(2, "i", 303);
    i0.ɵɵtext(3, "Attached Progress Photograph:");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "img", 304);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rep_r39 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", rep_r39.progressPhotograph, i0.ɵɵsanitizeUrl);
} }
function SiteEngineerDashboard_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 275)(2, "div", 276)(3, "div", 277)(4, "h5", 278);
    i0.ɵɵelement(5, "i", 279);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 280);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_35_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r37); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeReportDetail()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 281)(9, "div", 23)(10, "div")(11, "span", 282);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 283);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "span", 284);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "h5", 128);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 285)(20, "div", 29)(21, "strong");
    i0.ɵɵtext(22, "Contractor Responsible:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 29)(25, "strong");
    i0.ɵɵtext(26, "Weather Conditions:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 29)(29, "strong");
    i0.ɵɵtext(30, "Workforce:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 29)(33, "strong");
    i0.ɵɵtext(34, "Machinery Used:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(36, SiteEngineerDashboard_Conditional_35_Conditional_36_Template, 17, 0, "div", 286);
    i0.ɵɵelementStart(37, "div", 287)(38, "div", 29)(39, "div", 288)(40, "strong", 289);
    i0.ɵɵelement(41, "i", 290);
    i0.ɵɵtext(42, "Safety Observations:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "p", 291);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(45, "div", 29)(46, "div", 288)(47, "strong", 289);
    i0.ɵɵelement(48, "i", 292);
    i0.ɵɵtext(49, "Quality Inspection Remarks:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "p", 291);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(52, SiteEngineerDashboard_Conditional_35_Conditional_52_Template, 8, 1, "div", 293);
    i0.ɵɵconditionalCreate(53, SiteEngineerDashboard_Conditional_35_Conditional_53_Template, 5, 1, "div", 294);
    i0.ɵɵconditionalCreate(54, SiteEngineerDashboard_Conditional_35_Conditional_54_Template, 5, 1, "div", 295);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "div", 296)(56, "button", 297);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_35_Template_button_click_56_listener() { i0.ɵɵrestoreView(_r37); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeReportDetail()); });
    i0.ɵɵtext(57, "Close");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const rep_r39 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Daily Progress Report Details \u2022 ", rep_r39.id, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(rep_r39.reportDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rep_r39.workCategory);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", rep_r39.percentageWorkCompleted, "% Work Completed");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rep_r39.activityPerformed);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", rep_r39.contractorName || "Vance Concrete Ltd", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", rep_r39.weatherConditions, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", rep_r39.workersPresent, " Present, ", rep_r39.workersAbsent, " Absent ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", rep_r39.machineryUsed || "None", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(rep_r39.materialsConsumed && rep_r39.materialsConsumed.length > 0 ? 36 : -1);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(rep_r39.safetyObservations || "Normal safety compliance maintained.");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(rep_r39.qualityInspectionRemarks || "Standard site inspection passed.");
    i0.ɵɵadvance();
    i0.ɵɵconditional(rep_r39.delayEncountered ? 52 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(rep_r39.additionalComments ? 53 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(rep_r39.progressPhotograph ? 54 : -1);
} }
function SiteEngineerDashboard_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 305)(2, "div", 276)(3, "div", 277)(4, "h5", 278);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 280);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_36_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r40); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeEditMilestone()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 281)(8, "div", 42)(9, "label", 30);
    i0.ɵɵtext(10, "Completion Percentage (0-100%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 306)(12, "input", 307);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_36_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.editMilestoneProgress, $event) || (ctx_r2.editMilestoneProgress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 308);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 42)(16, "label", 30);
    i0.ɵɵtext(17, "Milestone Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 309);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Conditional_36_Template_select_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.editMilestoneStatus, $event) || (ctx_r2.editMilestoneStatus = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(19, "option", 310);
    i0.ɵɵtext(20, "Pending");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 311);
    i0.ɵɵtext(22, "In Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 312);
    i0.ɵɵtext(24, "Completed (100%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 313);
    i0.ɵɵtext(26, "Delayed");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "small", 314);
    i0.ɵɵtext(28, " Updating this milestone will automatically recalculate the overall project completion percentage and reflect it on the Project Manager dashboard. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 296)(30, "button", 297);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_36_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r40); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeEditMilestone()); });
    i0.ɵɵtext(31, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "button", 315);
    i0.ɵɵlistener("click", function SiteEngineerDashboard_Conditional_36_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r40); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.saveMilestoneProgress()); });
    i0.ɵɵtext(33, "Save Progress");
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
function SiteEngineerDashboard_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-procurement-management");
} }
export class SiteEngineerDashboard {
    projectService = inject(ProjectService);
    route = inject(ActivatedRoute);
    queryParams = toSignal(this.route.queryParams);
    get activeModule() {
        return this.queryParams()?.['module'] || 'progress';
    }
    // Active Project Selection
    selectedProjectId = 'P-101';
    engineerProject = computed(() => this.projectService.projects().find(p => p.id === this.selectedProjectId), ...(ngDevMode ? [{ debugName: "engineerProject" }] : /* istanbul ignore next */ []));
    // ==========================================
    // 1. DAILY PROGRESS REPORT STATE & FORM
    // ==========================================
    reportDate = new Date().toISOString().split('T')[0];
    workCategory = 'Structural';
    activityPerformed = '';
    percentageWorkCompleted = 3.0;
    selectedContractorId = 'u4';
    workersPresent = 16;
    workersAbsent = 1;
    machineryUsed = 'Tower Crane #1 (8 hrs), Scissor Lift #2 (4 hrs)';
    weatherConditions = 'Sunny, 28°C';
    safetyObservations = 'Full harness & PPE compliance verified on deck.';
    qualityInspectionRemarks = 'Rebar spacing and weld points inspected and verified.';
    progressPhotograph = '';
    delayEncountered = false;
    delayReason = 'Material delivery delay';
    additionalComments = '';
    // Materials sub-form
    selectedMaterialId = 'M-01';
    materialQty = 0;
    tempMaterialsConsumed = [];
    // Selected Daily Report Modal detail state
    selectedReportDetail = null;
    reportFilterCategory = 'ALL';
    // ==========================================
    // 2. WEEKLY SUMMARY STATE
    // ==========================================
    selectedWeekStart = '';
    // ==========================================
    // 3. MILESTONES STATE & FORM
    // ==========================================
    selectedMilestoneToEdit = null;
    editMilestoneProgress = 0;
    editMilestoneStatus = 'In Progress';
    // ==========================================
    // 4. DELAY TRACKING STATE & FORM
    // ==========================================
    delayDate = new Date().toISOString().split('T')[0];
    delayAffectedActivity = '';
    delayReasonSelect = 'Material delivery delay';
    delayDuration = '1 day';
    delayImpact = 'Medium';
    delayRemarks = '';
    // ==========================================
    // 5. SITE ACTIVITY LOG STATE & FORM
    // ==========================================
    activityDate = new Date().toISOString().split('T')[0];
    activityTime = '10:00';
    activityType = 'Material arrival';
    activityDescription = '';
    activityResponsiblePerson = 'Sathvik S (Site Engineer)';
    activityFilterType = 'ALL';
    // ==========================================
    // 6. PHOTO ATTACHMENT / UPLOAD
    // ==========================================
    photoUrl = '';
    photoCaption = '';
    // ==========================================
    // 7. MODULE 4: MACHINERY USAGE STATE & FORM
    // ==========================================
    machineryResourceId = 'EQ-101';
    machineryUsageDate = new Date().toISOString().split('T')[0];
    machineryOperatingHours = 7.0;
    machineryIdleHours = 1.0;
    machineryTotalHours = 8.0;
    machineryRemarks = 'Daily site shift run-time';
    // Machinery assigned to this project
    projectEquipment = computed(() => this.projectService.resources().filter(r => r.currentProjectId === this.selectedProjectId), ...(ngDevMode ? [{ debugName: "projectEquipment" }] : /* istanbul ignore next */ []));
    // Machinery utilization logs for this project
    projectMachineryLogs = computed(() => this.projectService.resourceUtilizations().filter(u => u.projectId === this.selectedProjectId), ...(ngDevMode ? [{ debugName: "projectMachineryLogs" }] : /* istanbul ignore next */ []));
    submitMachineryUsage() {
        if (!this.machineryResourceId || !this.machineryUsageDate) {
            alert('Please select equipment and usage date.');
            return;
        }
        this.projectService.logResourceUtilization({
            resourceId: this.machineryResourceId,
            projectId: this.selectedProjectId,
            usageDate: this.machineryUsageDate,
            operatingHours: this.machineryOperatingHours,
            idleHours: this.machineryIdleHours,
            totalAvailableHours: this.machineryTotalHours,
            remarks: this.machineryRemarks
        }).subscribe({
            next: () => {
                alert('Machinery shift usage successfully recorded! Utilization updated.');
                this.machineryRemarks = '';
                this.projectService.loadModule4Data();
            },
            error: (err) => alert('Error: ' + (err.error?.detail || err.message))
        });
    }
    // ==========================================
    // 8. ISSUES FORM
    // ==========================================
    issueTitle = '';
    issueDescription = '';
    issueSeverity = 'High';
    // ==========================================
    // COMPUTED SIGNALS
    // ==========================================
    projectDailyReports = computed(() => {
        let list = this.projectService.dailyProgressReports().filter(r => r.projectId === this.selectedProjectId);
        if (this.reportFilterCategory !== 'ALL') {
            list = list.filter(r => r.workCategory === this.reportFilterCategory);
        }
        return list;
    }, ...(ngDevMode ? [{ debugName: "projectDailyReports" }] : /* istanbul ignore next */ []));
    projectMilestones = computed(() => this.projectService.milestones().filter(m => m.projectId === this.selectedProjectId), ...(ngDevMode ? [{ debugName: "projectMilestones" }] : /* istanbul ignore next */ []));
    projectDelays = computed(() => this.projectService.delays().filter(d => d.projectId === this.selectedProjectId), ...(ngDevMode ? [{ debugName: "projectDelays" }] : /* istanbul ignore next */ []));
    projectActivityLogs = computed(() => {
        let logs = this.projectService.activityLogs().filter(a => a.projectId === this.selectedProjectId);
        if (this.activityFilterType !== 'ALL') {
            logs = logs.filter(a => a.activityType === this.activityFilterType);
        }
        return logs;
    }, ...(ngDevMode ? [{ debugName: "projectActivityLogs" }] : /* istanbul ignore next */ []));
    projectPhotos = computed(() => this.projectService.sitePhotos().filter(photo => photo.projectId === this.selectedProjectId), ...(ngDevMode ? [{ debugName: "projectPhotos" }] : /* istanbul ignore next */ []));
    activeIssues = computed(() => this.projectService.issues().filter(issue => issue.projectId === this.selectedProjectId), ...(ngDevMode ? [{ debugName: "activeIssues" }] : /* istanbul ignore next */ []));
    attendanceRoster = computed(() => this.projectService.workforce().filter(w => w.assignedProject === this.engineerProject()?.name || w.assignedProject?.includes('Vanguard')), ...(ngDevMode ? [{ debugName: "attendanceRoster" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        // Default week start to 7 days ago
        const d = new Date();
        d.setDate(d.getDate() - 6);
        this.selectedWeekStart = d.toISOString().split('T')[0];
        this.projectService.loadWeeklySummary(this.selectedProjectId, this.selectedWeekStart);
    }
    onProjectChange() {
        this.projectService.loadModule3Data(this.selectedProjectId);
        this.projectService.loadWeeklySummary(this.selectedProjectId, this.selectedWeekStart);
    }
    // ==========================================
    // DAILY REPORT ACTIONS
    // ==========================================
    addMaterialToConsumption() {
        const mat = this.projectService.materials().find(m => m.id === this.selectedMaterialId);
        if (mat && this.materialQty > 0) {
            this.tempMaterialsConsumed.push({
                materialId: mat.id,
                materialName: mat.name,
                quantity: this.materialQty,
                unit: mat.unit
            });
            this.materialQty = 0;
        }
    }
    removeMaterialFromConsumption(index) {
        this.tempMaterialsConsumed.splice(index, 1);
    }
    submitDailyReport() {
        if (!this.activityPerformed.trim()) {
            alert('Please specify the construction activity performed.');
            return;
        }
        const payload = {
            projectId: this.selectedProjectId,
            reportDate: this.reportDate,
            workCategory: this.workCategory,
            activityPerformed: this.activityPerformed,
            percentageWorkCompleted: this.percentageWorkCompleted,
            contractorId: this.selectedContractorId,
            workersPresent: this.workersPresent,
            workersAbsent: this.workersAbsent,
            machineryUsed: this.machineryUsed,
            weatherConditions: this.weatherConditions,
            safetyObservations: this.safetyObservations,
            qualityInspectionRemarks: this.qualityInspectionRemarks,
            progressPhotograph: this.progressPhotograph || undefined,
            delayEncountered: this.delayEncountered,
            delayReason: this.delayEncountered ? this.delayReason : undefined,
            additionalComments: this.additionalComments,
            materialsConsumed: this.tempMaterialsConsumed
        };
        this.projectService.addDailyProgressReport(payload).subscribe({
            next: (res) => {
                alert('Daily Progress Report submitted successfully! Project & Milestone progress recalculated.');
                // Reset inputs
                this.activityPerformed = '';
                this.additionalComments = '';
                this.tempMaterialsConsumed = [];
                this.delayEncountered = false;
                this.progressPhotograph = '';
                this.projectService.loadAllData();
                this.projectService.loadWeeklySummary(this.selectedProjectId, this.selectedWeekStart);
            },
            error: (err) => {
                alert('Failed to submit report: ' + (err.error?.detail || err.message));
            }
        });
    }
    openReportDetail(report) {
        this.selectedReportDetail = report;
    }
    closeReportDetail() {
        this.selectedReportDetail = null;
    }
    deleteReport(id) {
        if (confirm('Are you sure you want to delete this Daily Progress Report? Project progress will be recalculated.')) {
            this.projectService.deleteDailyProgressReport(id).subscribe({
                next: () => {
                    alert('Daily report deleted.');
                    this.projectService.loadAllData();
                    this.projectService.loadWeeklySummary(this.selectedProjectId, this.selectedWeekStart);
                },
                error: (err) => alert('Error: ' + err.message)
            });
        }
    }
    // ==========================================
    // WEEKLY SUMMARY ACTIONS
    // ==========================================
    fetchWeeklySummary() {
        if (this.selectedWeekStart) {
            this.projectService.loadWeeklySummary(this.selectedProjectId, this.selectedWeekStart);
        }
    }
    // ==========================================
    // MILESTONES ACTIONS
    // ==========================================
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
                alert('Milestone progress updated! Project overall progress has been recalculated.');
                this.selectedMilestoneToEdit = null;
                this.projectService.loadAllData();
            },
            error: (err) => alert('Error: ' + err.message)
        });
    }
    // ==========================================
    // DELAY ACTIONS
    // ==========================================
    submitDelayRecord() {
        if (!this.delayAffectedActivity.trim()) {
            alert('Please specify the affected construction activity.');
            return;
        }
        const payload = {
            projectId: this.selectedProjectId,
            date: this.delayDate,
            affectedActivity: this.delayAffectedActivity,
            delayReason: this.delayReasonSelect,
            delayDuration: this.delayDuration,
            impactOnProject: this.delayImpact,
            additionalRemarks: this.delayRemarks
        };
        this.projectService.addDelayRecord(payload).subscribe({
            next: () => {
                alert('Delay record logged and notified to Project Manager.');
                this.delayAffectedActivity = '';
                this.delayRemarks = '';
                this.projectService.loadAllData();
            },
            error: (err) => alert('Error: ' + err.message)
        });
    }
    resolveDelay(id) {
        this.projectService.updateDelay(id, { status: 'Resolved' }).subscribe({
            next: () => {
                alert('Delay record marked as Resolved.');
                this.projectService.loadAllData();
            }
        });
    }
    deleteDelay(id) {
        if (confirm('Delete this delay record?')) {
            this.projectService.deleteDelayRecord(id).subscribe({
                next: () => {
                    alert('Delay record deleted.');
                    this.projectService.loadAllData();
                }
            });
        }
    }
    // ==========================================
    // SITE ACTIVITY ACTIONS
    // ==========================================
    submitActivityLog() {
        if (!this.activityDescription.trim()) {
            alert('Please describe the site activity / event.');
            return;
        }
        const payload = {
            projectId: this.selectedProjectId,
            date: this.activityDate,
            time: this.activityTime,
            activityType: this.activityType,
            description: this.activityDescription,
            responsiblePerson: this.activityResponsiblePerson
        };
        this.projectService.addSiteActivityLog(payload).subscribe({
            next: () => {
                alert('Site Activity Log recorded successfully!');
                this.activityDescription = '';
                this.projectService.loadAllData();
            },
            error: (err) => alert('Error: ' + err.message)
        });
    }
    deleteActivityLog(id) {
        if (confirm('Delete this site activity log?')) {
            this.projectService.deleteSiteActivityLog(id).subscribe({
                next: () => {
                    alert('Activity log removed.');
                    this.projectService.loadAllData();
                }
            });
        }
    }
    // ==========================================
    // SITE PHOTOS & ISSUES
    // ==========================================
    submitSitePhoto() {
        if (!this.photoUrl || !this.photoCaption) {
            alert('Photo URL and Caption are required.');
            return;
        }
        this.projectService.addSitePhoto({
            projectId: this.selectedProjectId,
            url: this.photoUrl,
            caption: this.photoCaption,
            uploadedBy: 'Sathvik S'
        });
        this.photoUrl = '';
        this.photoCaption = '';
        alert('Site photo uploaded and logged!');
    }
    submitIssue() {
        if (!this.issueTitle || !this.issueDescription) {
            alert('Issue Title and Description are required.');
            return;
        }
        this.projectService.reportIssue({
            projectId: this.selectedProjectId,
            projectName: this.engineerProject()?.name || 'Vanguard Heights Commercial Tower',
            title: this.issueTitle,
            description: this.issueDescription,
            severity: this.issueSeverity,
            reportedBy: 'Sathvik S'
        });
        this.issueTitle = '';
        this.issueDescription = '';
        alert('Safety issue logged and flagged to Project Manager.');
    }
    resolveIssue(id) {
        this.projectService.resolveIssue(id);
        alert('Issue marked as resolved.');
    }
    static ɵfac = function SiteEngineerDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SiteEngineerDashboard)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SiteEngineerDashboard, selectors: [["app-site-engineer-dashboard"]], decls: 38, vars: 21, consts: [[1, "container-fluid", "p-0"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-md-center", "gap-3", "mb-4"], [1, "fw-bold", "text-dark", "mb-1"], [1, "text-muted", "mb-0"], [1, "d-flex", "gap-3", "align-items-center"], [1, "small", "text-muted", "fw-semibold", "me-2", "d-none", "d-sm-inline"], [1, "form-select", "form-select-sm", "d-inline-block", "w-auto", "fw-bold", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "badge", "bg-primary", "px-3", "py-2", "fs-6", "rounded-pill", "shadow-sm"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-lg-3"], ["title", "Daily Reports Filed", "icon", "bi-journal-check", "colorType", "primary", "subtitle", "Separate historical records", 3, "value"], ["title", "Project Milestones", "icon", "bi-flag-fill", "colorType", "success", 3, "value", "subtitle"], ["title", "Active Delays", "icon", "bi-hourglass-split", "colorType", "danger", 3, "value", "subtitle"], ["title", "Site Activity Events", "icon", "bi-clipboard2-data-fill", "colorType", "info", "subtitle", "Machinery, Audits & Training", 3, "value"], [1, "row", "g-4"], [1, "row", "g-4", "mb-4"], [1, "card", "border-0", "shadow-sm", "rounded-3", "mb-4"], [3, "initialTab"], [1, "card", "border-0", "shadow-sm", "rounded-3"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,0.5)"], [1, "col-xl-5"], [1, "card-body", "p-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "text-dark", "mb-0"], [1, "bi", "bi-file-earmark-plus", "text-primary", "me-2"], [1, "badge", "bg-light", "text-muted", "border"], [3, "ngSubmit"], [1, "row", "g-2", "mb-3"], [1, "col-sm-6"], [1, "form-label", "fw-semibold", "small", "text-muted"], ["type", "date", "name", "reportDate", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["name", "workCategory", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "Earthwork"], ["value", "Structural"], ["value", "Concrete"], ["value", "Masonry"], ["value", "Electrical"], ["value", "Plumbing"], ["value", "HVAC"], ["value", "Finishing"], ["value", "Inspection"], [1, "form-group", "mb-3"], ["name", "activityPerformed", "required", "", "rows", "3", "placeholder", "Specify concrete pour location, levels framed, rebar ties, equipment used...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group", "input-group-sm"], ["type", "number", "name", "progress", "min", "0", "max", "100", "step", "0.5", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group-text"], ["name", "contractorId", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "u4"], ["value", "u2"], ["value", "u3"], [1, "col-6", "col-sm-3"], ["type", "number", "name", "workersPresent", "min", "0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "workersAbsent", "min", "0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "weatherConditions", "required", "", "placeholder", "e.g. Sunny, 28\u00B0C", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "machineryUsed", "placeholder", "e.g. Tower Crane #1 (8 hrs), Scissor Lift #2 (4 hrs)", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "border", "rounded-3", "p-3", "mb-3", "bg-light"], [1, "fw-semibold", "text-dark", "small", "d-block", "mb-2"], [1, "bi", "bi-box-seam", "me-1"], [1, "row", "g-2", "align-items-end"], [1, "col-7"], [1, "small", "text-muted", "mb-1", 2, "font-size", "11px"], ["name", "matSelect", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [1, "col-3"], ["type", "number", "name", "matQty", "min", "0", "step", "0.5", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-2"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "w-100", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "list-group", "list-group-flush", "mt-2", "border-top", "pt-2"], ["type", "text", "name", "safetyObs", "placeholder", "PPE compliance, harness ties...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "qualityRemarks", "placeholder", "Slump test, alignment verified...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "photoUrl", "placeholder", "https://images.unsplash.com/...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-check", "form-switch", "mb-3", "p-2", "bg-light", "rounded", "border"], ["type", "checkbox", "id", "delaySwitch", "name", "delayEncountered", 1, "form-check-input", "ms-0", "me-2", 3, "ngModelChange", "ngModel"], ["for", "delaySwitch", 1, "form-check-label", "fw-semibold", "small", "text-danger"], [1, "bi", "bi-exclamation-triangle-fill", "me-1"], [1, "form-group", "mb-3", "p-3", "bg-danger-subtle", "rounded", "border", "border-danger-subtle"], ["name", "comments", "rows", "2", "placeholder", "Any extra site notes...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2", "fw-bold", "shadow-sm"], [1, "bi", "bi-check-circle-fill", "me-1"], [1, "col-xl-7"], [1, "d-flex", "flex-column", "flex-sm-row", "justify-content-between", "align-items-sm-center", "gap-2", "mb-3"], [1, "text-muted"], [1, "d-flex", "gap-2"], [1, "form-select", "form-select-sm", "w-auto", 3, "ngModelChange", "ngModel"], ["value", "ALL"], [1, "p-5", "text-center", "bg-light", "rounded-3", "text-muted"], [1, "d-flex", "flex-column", "gap-3"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "bg-transparent", "px-0", "py-1", "small"], ["type", "button", 1, "btn", "btn-link", "text-danger", "btn-sm", "p-0", "border-0", 3, "click"], [1, "bi", "bi-trash"], [1, "form-label", "fw-bold", "small", "text-danger"], ["name", "delayReason", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "Heavy rainfall"], ["value", "Labour shortage"], ["value", "Material delivery delay"], ["value", "Machinery breakdown"], ["value", "Design modification"], ["value", "Financial issue"], ["value", "Government approval"], ["value", "Other"], [1, "bi", "bi-journal-x", "fs-1", "d-block", "mb-2", "text-secondary"], [1, "mb-0"], [1, "p-3", "border", "rounded-3", "bg-light-subtle", "shadow-sm"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "bg-primary", "fw-bold"], [1, "badge", "bg-secondary-subtle", "text-secondary", "border"], [1, "badge", "bg-success-subtle", "text-success", "border"], [1, "badge", "bg-danger"], ["title", "Delete Report", 1, "btn", "btn-outline-danger", "btn-sm", "p-1", "px-2", "border-0", 3, "click"], [1, "bi", "bi-trash-fill"], [1, "row", "g-2", "my-2", "text-muted", "small", 2, "font-size", "12px"], [1, "col-6", "col-md-3"], [1, "bi", "bi-person-workspace", "me-1"], [1, "bi", "bi-people-fill", "me-1"], [1, "bi", "bi-cloud-sun", "me-1"], [1, "bi", "bi-gear-wide-connected", "me-1"], [1, "border-top", "pt-2", "mt-2"], [1, "d-flex", "justify-content-between", "align-items-center", "border-top", "pt-2", "mt-2"], [1, "text-muted", 2, "font-size", "11px"], [1, "btn", "btn-outline-primary", "btn-sm", "py-0.5", "px-2.5", "rounded-pill", "text-xs", "fw-bold", 3, "click"], [1, "bi", "bi-eye", "me-1"], [1, "bi", "bi-clock-history", "me-1"], [1, "text-muted", "d-block", "small", "mb-1", "fw-semibold", 2, "font-size", "11px"], [1, "d-flex", "flex-wrap", "gap-1.5"], [1, "badge", "bg-light", "text-dark", "border", "rounded-pill", "px-2", "py-1", "text-xs"], [1, "col-lg-4"], [1, "fw-bold", "text-dark", "mb-2"], [1, "bi", "bi-speedometer2", "text-primary", "me-2"], [1, "text-muted", "small", "mb-3"], [1, "form-group", "mb-2.5"], ["name", "mRes", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [1, "row", "g-2", "mb-2.5"], [1, "col-6"], ["type", "date", "name", "mDate", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "mTotal", "min", "1", "max", "24", "step", "0.5", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "mOp", "min", "0", "max", "24", "step", "0.5", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "mIdle", "min", "0", "max", "24", "step", "0.5", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "mRem", "placeholder", "e.g. Trench digging on Grid 4", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2", "fw-bold"], [1, "bi", "bi-check2-circle", "me-1"], [1, "col-lg-8"], [1, "fw-bold", "text-dark", "mb-3"], [1, "bi", "bi-clock-history", "text-primary", "me-2"], [1, "p-5", "text-center", "bg-light", "rounded", "text-muted"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle"], [1, "table-light", "text-muted", "uppercase", "small"], [1, "fw-bold"], [1, "fw-bold", "text-dark"], [1, "text-primary"], [1, "small", "text-muted"], [1, "bi", "bi-calendar-week", "text-primary", "me-2"], [1, "text-muted", "mb-0", "small"], [1, "d-flex", "gap-2", "align-items-center"], [1, "small", "text-muted", "fw-bold"], ["type", "date", 1, "form-control", "form-control-sm", "w-auto", 3, "ngModelChange", "change", "ngModel"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [1, "bi", "bi-arrow-clockwise", "me-1"], [1, "p-3", "rounded-3", "bg-primary-subtle", "border", "border-primary-subtle"], [1, "text-muted", "small", "fw-semibold", "d-block", "mb-1"], [1, "fw-bold", "text-primary", "mb-0"], [1, "p-3", "rounded-3", "bg-success-subtle", "border", "border-success-subtle"], [1, "fw-bold", "text-success", "mb-0"], [1, "p-3", "rounded-3", "bg-info-subtle", "border", "border-info-subtle"], [1, "fw-bold", "text-info", "mb-0"], [1, "p-3", "rounded-3", "bg-danger-subtle", "border", "border-danger-subtle"], [1, "fw-bold", "text-danger", "mb-0"], [1, "col-lg-6"], [1, "card", "border", "rounded-3", "p-3", "bg-light-subtle", "h-100"], [1, "bi", "bi-check2-all", "text-success", "me-2"], [1, "text-muted", "small", "mb-0"], [1, "list-group", "list-group-flush"], [1, "bi", "bi-box-seam-fill", "text-warning", "me-2"], [1, "row", "g-4", "mt-1"], [1, "list-group-item", "bg-transparent", "px-0", "py-2", "small", "d-flex", "gap-2"], [1, "bi", "bi-arrow-right-circle-fill", "text-primary", "mt-1"], [1, "table", "table-sm", "align-middle", "mb-0"], [1, "table-light", "text-muted", "small"], [1, "badge", "bg-light", "text-dark", "border"], [1, "card", "border", "border-danger-subtle", "rounded-3", "p-3", "bg-danger-subtle"], [1, "fw-bold", "text-danger", "mb-2"], [1, "bi", "bi-exclamation-octagon", "me-2"], [1, "p-2", "bg-white", "rounded", "border", "mb-2", "small"], [1, "badge", "bg-danger", "me-2"], [1, "card", "border", "border-info-subtle", "rounded-3", "p-3", "bg-info-subtle"], [1, "bi", "bi-shield-check", "text-info", "me-2"], [1, "bi", "bi-check-circle", "text-success", "me-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "bi", "bi-flag-fill", "text-success", "me-2"], [1, "badge", "bg-primary", "fs-6", "px-3", "py-2", "rounded-pill"], [1, "col-md-6", "col-xl-4"], [1, "card", "border", "rounded-3", "p-3", "h-100", "shadow-sm"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "badge"], [1, "text-muted", "small", "mb-2", 2, "min-height", "38px"], [1, "progress", "mb-3", 2, "height", "8px"], [1, "progress-bar"], [1, "d-flex", "justify-content-between", "align-items-center", "text-muted", "small", "border-top", "pt-2", "mt-auto", 2, "font-size", "11px"], [1, "btn", "btn-outline-primary", "btn-sm", "py-0.5", "px-2", "rounded-pill", "text-xs", "fw-bold", 3, "click"], [1, "bi", "bi-pencil-square", "me-1"], [1, "text-success", "fw-semibold", "mt-1", "d-block", 2, "font-size", "11px"], [1, "bi", "bi-check-all", "me-1"], [1, "bi", "bi-hourglass-bottom", "text-danger", "me-2"], ["type", "date", "name", "delayDate", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "affActivity", "required", "", "placeholder", "e.g. Level 7 concrete pour, steel delivery", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["name", "reason", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "duration", "placeholder", "e.g. 2 days, 4 hours", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["name", "impact", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "Low"], ["value", "Medium"], ["value", "High"], ["value", "Critical"], ["name", "remarks", "rows", "3", "placeholder", "Describe remediation steps or revised delivery timelines...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "w-100", "py-2", "fw-bold", "shadow-sm"], [1, "bi", "bi-shield-check", "fs-1", "text-success", "d-block", "mb-2"], [1, "p-3", "border", "rounded-3", "bg-light-subtle", "shadow-sm", 3, "border-danger", "border-success"], ["title", "Delete delay", 1, "btn", "btn-outline-danger", "btn-sm", "p-1", "px-2", "border-0", 3, "click"], [1, "text-muted", "small", "mb-2"], [1, "text-dark"], [1, "p-2", "bg-white", "rounded", "border", "small", "text-secondary", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center", "border-top", "pt-2", "mt-2", 2, "font-size", "11px"], [1, "btn", "btn-outline-success", "btn-xs", "py-1", "px-2.5", "rounded-pill", "fw-bold"], [1, "btn", "btn-outline-success", "btn-xs", "py-1", "px-2.5", "rounded-pill", "fw-bold", 3, "click"], [1, "bi", "bi-check-circle", "me-1"], [1, "bi", "bi-calendar-event-fill", "text-info", "me-2"], ["type", "date", "name", "actDate", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "time", "name", "actTime", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["name", "actType", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "Machinery maintenance"], ["value", "Material arrival"], ["value", "Safety training"], ["value", "Client visit"], ["value", "Government inspection"], ["value", "Quality audit"], ["value", "Accident report"], ["value", "Contractor meeting"], ["value", "Equipment servicing"], ["name", "actDesc", "required", "", "rows", "4", "placeholder", "Details of the event, equipment serials, delivery manifest, attendees...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "respPerson", "required", "", "placeholder", "e.g. Gaurav K, Equipment Tech", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-info", "text-white", "w-100", "py-2", "fw-bold", "shadow-sm"], [1, "bi", "bi-plus-circle-fill", "me-1"], [1, "bi", "bi-calendar-x", "fs-1", "d-block", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "badge", "bg-primary-subtle", "text-primary", "border", "border-primary-subtle", "fw-bold"], [1, "bi", "bi-clock", "me-1"], ["title", "Delete log", 1, "btn", "btn-outline-danger", "btn-sm", "p-0", "px-1", "border-0", 3, "click"], [1, "text-dark", "small", "mb-2", 2, "white-space", "pre-line"], [1, "d-flex", "justify-content-between", "align-items-center", "border-top", "pt-2", 2, "font-size", "11px"], [1, "bi", "bi-camera-fill", "text-success", "me-2"], ["type", "url", "name", "photoUrl", "required", "", "placeholder", "https://images.unsplash.com/...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-text", "small", "mt-1"], [1, "d-flex", "flex-column", "gap-1", "mt-1"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", "text-start", "py-1", "px-2", "text-xs", 3, "click"], ["type", "text", "name", "caption", "required", "", "placeholder", "e.g. Scaffolding structures checking L6", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-camera-fill", "me-1"], [1, "row", "g-3"], [1, "col-md-6"], [1, "card", "border", "rounded-3", "overflow-hidden", "shadow-sm", "h-100"], ["alt", "Site photo", 1, "img-fluid", "object-fit-cover", 2, "height", "180px", "width", "100%", 3, "src"], [1, "card-body", "p-3"], [1, "card-text", "small", "text-dark", "fw-medium", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center", "text-muted", 2, "font-size", "11px"], [1, "badge", "bg-warning", "text-dark"], [1, "badge", "bg-success"], ["type", "text", "name", "issueTitle", "required", "", "placeholder", "e.g. Scaffolding locking pin damaged", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "severity", "required", "", 1, "form-select", "form-control", 3, "ngModelChange", "ngModel"], ["name", "desc", "required", "", "rows", "4", "placeholder", "Describe the safety hazard, exact location, or inventory bottleneck...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "w-100", "py-2.5"], [1, "bi", "bi-exclamation-triangle", "me-1"], [1, "p-3", "border", "rounded-3", 3, "border-danger-subtle", "bg-danger-subtle", "border-success-subtle", "bg-light"], [1, "p-3", "border", "rounded-3"], [1, "btn", "btn-outline-success", "btn-xs", "py-1", "px-2.5", "rounded-pill"], [1, "btn", "btn-outline-success", "btn-xs", "py-1", "px-2.5", "rounded-pill", 3, "click"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content", "border-0", "shadow", "rounded-3"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title", "fw-bold"], [1, "bi", "bi-file-earmark-text", "me-2"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body", "p-4"], [1, "badge", "bg-primary", "fs-6", "me-2"], [1, "badge", "bg-secondary", "fs-6"], [1, "badge", "bg-success", "fs-6"], [1, "row", "g-3", "my-2", "p-3", "bg-light", "rounded-3", "small"], [1, "my-3"], [1, "row", "g-3", "my-2"], [1, "p-2.5", "border", "rounded", "bg-light-subtle", "h-100"], [1, "d-block", "small", "text-dark", "mb-1"], [1, "bi", "bi-shield-check", "text-success", "me-1"], [1, "small", "text-muted", "mb-0"], [1, "bi", "bi-clipboard-check", "text-info", "me-1"], [1, "alert", "alert-danger", "p-3", "mt-3"], [1, "p-2.5", "border", "rounded", "bg-light", "mt-3"], [1, "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "table", "table-sm", "table-bordered"], [1, "table-light"], [1, "d-block"], [1, "mb-0", "small"], [1, "d-block", "small", "text-dark", "mb-2"], [1, "bi", "bi-camera", "me-1"], ["alt", "Progress Photo", 1, "img-fluid", "rounded", "border", "shadow-sm", 2, "max-height", "250px", "width", "100%", "object-fit", "cover", 3, "src"], [1, "modal-dialog", "modal-dialog-centered"], [1, "d-flex", "align-items-center", "gap-3"], ["type", "range", "min", "0", "max", "100", 1, "form-range", "flex-grow-1", 3, "ngModelChange", "ngModel"], [1, "fw-bold", "fs-5", "text-primary", 2, "width", "50px"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "Pending"], ["value", "In Progress"], ["value", "Completed"], ["value", "Delayed"], [1, "text-muted", "d-block", "mt-2"], ["type", "button", 1, "btn", "btn-primary", "fw-bold", 3, "click"]], template: function SiteEngineerDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
            i0.ɵɵtext(4, "Site Engineer Control Panel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Sathvik S \u2022 Site Progress Monitoring & Execution");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 4)(8, "div")(9, "label", 5);
            i0.ɵɵtext(10, "Active Project:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function SiteEngineerDashboard_Template_select_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedProjectId, $event) || (ctx.selectedProjectId = $event); return $event; });
            i0.ɵɵlistener("change", function SiteEngineerDashboard_Template_select_change_11_listener() { return ctx.onProjectChange(); });
            i0.ɵɵrepeaterCreate(12, SiteEngineerDashboard_For_13_Template, 2, 3, "option", 7, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "span", 8);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "div", 9)(17, "div", 10);
            i0.ɵɵelement(18, "app-dashboard-card", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 10);
            i0.ɵɵelement(20, "app-dashboard-card", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 10);
            i0.ɵɵelement(22, "app-dashboard-card", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 10);
            i0.ɵɵelement(24, "app-dashboard-card", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(25, SiteEngineerDashboard_Conditional_25_Template, 149, 20, "div", 15);
            i0.ɵɵconditionalCreate(26, SiteEngineerDashboard_Conditional_26_Template, 50, 8, "div", 16);
            i0.ɵɵconditionalCreate(27, SiteEngineerDashboard_Conditional_27_Template, 17, 2, "div", 17);
            i0.ɵɵconditionalCreate(28, SiteEngineerDashboard_Conditional_28_Template, 17, 2, "div", 17);
            i0.ɵɵconditionalCreate(29, SiteEngineerDashboard_Conditional_29_Template, 67, 7, "div", 15);
            i0.ɵɵconditionalCreate(30, SiteEngineerDashboard_Conditional_30_Template, 77, 7, "div", 15);
            i0.ɵɵconditionalCreate(31, SiteEngineerDashboard_Conditional_31_Template, 36, 2, "div", 15);
            i0.ɵɵconditionalCreate(32, SiteEngineerDashboard_Conditional_32_Template, 1, 1, "app-workforce-management", 18);
            i0.ɵɵconditionalCreate(33, SiteEngineerDashboard_Conditional_33_Template, 21, 0, "div", 19);
            i0.ɵɵconditionalCreate(34, SiteEngineerDashboard_Conditional_34_Template, 38, 3, "div", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(35, SiteEngineerDashboard_Conditional_35_Template, 58, 16, "div", 20);
            i0.ɵɵconditionalCreate(36, SiteEngineerDashboard_Conditional_36_Template, 34, 4, "div", 20);
            i0.ɵɵconditionalCreate(37, SiteEngineerDashboard_Conditional_37_Template, 1, 0, "app-procurement-management");
        } if (rf & 2) {
            let tmp_2_0;
            let tmp_5_0;
            let tmp_19_0;
            let tmp_20_0;
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedProjectId);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.projectService.projects());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" Overall Progress: ", (tmp_2_0 = ctx.engineerProject()) == null ? null : tmp_2_0.progress, "% ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.projectDailyReports().length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.projectMilestones().length)("subtitle", (((tmp_5_0 = ctx.engineerProject()) == null ? null : tmp_5_0.progress) || 0) + "% Cumulative Completion");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.projectDelays().length)("subtitle", ctx.projectDelays().length + " Site bottlenecks logged");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.projectActivityLogs().length);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "progress" ? 25 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "machinery_usage" ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "weekly" ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "milestones" ? 28 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "delays" ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "activities" ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "photos" ? 31 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "attendance" || ctx.activeModule === "workforce" ? 32 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "materials" ? 33 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "issues" ? 34 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_19_0 = ctx.selectedReportDetail) ? 35 : -1, tmp_19_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_20_0 = ctx.selectedMilestoneToEdit) ? 36 : -1, tmp_20_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "procurement" ? 37 : -1);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.RangeValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, i1.NgForm, RouterModule, DashboardCardComponent, WorkforceManagementComponent, ProcurementManagementComponent], styles: [".bg-light[_ngcontent-%COMP%] {\n  background-color: #f8fafc !important;\n}\n\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.btn-xs[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.bg-danger-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.03) !important;\n}\n\n.border-danger-subtle[_ngcontent-%COMP%] {\n  border-color: rgba(220, 53, 69, 0.15) !important;\n}\n\n.border-success-subtle[_ngcontent-%COMP%] {\n  border-color: rgba(25, 135, 84, 0.15) !important;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.05);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SiteEngineerDashboard, [{
        type: Component,
        args: [{ selector: 'app-site-engineer-dashboard', standalone: true, imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent, WorkforceManagementComponent, ProcurementManagementComponent], template: "<div class=\"container-fluid p-0\">\n\n  <!-- Header with Project Selector & Active Site Indicator -->\n  <div class=\"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4\">\n    <div>\n      <h2 class=\"fw-bold text-dark mb-1\">Site Engineer Control Panel</h2>\n      <p class=\"text-muted mb-0\">Sathvik S &bull; Site Progress Monitoring &amp; Execution</p>\n    </div>\n    <div class=\"d-flex gap-3 align-items-center\">\n      <div>\n        <label class=\"small text-muted fw-semibold me-2 d-none d-sm-inline\">Active Project:</label>\n        <select class=\"form-select form-select-sm d-inline-block w-auto fw-bold\" [(ngModel)]=\"selectedProjectId\" (change)=\"onProjectChange()\">\n          @for (proj of projectService.projects(); track proj.id) {\n            <option [value]=\"proj.id\">{{ proj.name }} ({{ proj.id }})</option>\n          }\n        </select>\n      </div>\n      <span class=\"badge bg-primary px-3 py-2 fs-6 rounded-pill shadow-sm\">\n        Overall Progress: {{ engineerProject()?.progress }}%\n      </span>\n    </div>\n  </div>\n\n  <!-- KPI summary cards -->\n  <div class=\"row g-3 mb-4\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Daily Reports Filed\" [value]=\"projectDailyReports().length\" icon=\"bi-journal-check\" colorType=\"primary\" subtitle=\"Separate historical records\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Project Milestones\" [value]=\"projectMilestones().length\" icon=\"bi-flag-fill\" colorType=\"success\" [subtitle]=\"(engineerProject()?.progress || 0) + '% Cumulative Completion'\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Active Delays\" [value]=\"projectDelays().length\" icon=\"bi-hourglass-split\" colorType=\"danger\" [subtitle]=\"projectDelays().length + ' Site bottlenecks logged'\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Site Activity Events\" [value]=\"projectActivityLogs().length\" icon=\"bi-clipboard2-data-fill\" colorType=\"info\" subtitle=\"Machinery, Audits & Training\"></app-dashboard-card>\n    </div>\n  </div>\n\n  <!-- ========================================== -->\n  <!-- 1. DAILY PROGRESS REPORT MODULE VIEW -->\n  <!-- ========================================== -->\n  @if (activeModule === 'progress') {\n    <div class=\"row g-4\">\n      <!-- Create Daily Progress Report Form -->\n      <div class=\"col-xl-5\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <div class=\"d-flex justify-content-between align-items-center mb-3\">\n              <h5 class=\"fw-bold text-dark mb-0\"><i class=\"bi bi-file-earmark-plus text-primary me-2\"></i>File Daily Progress Report</h5>\n              <span class=\"badge bg-light text-muted border\">Shift Record</span>\n            </div>\n            \n            <form (ngSubmit)=\"submitDailyReport()\">\n              \n              <div class=\"row g-2 mb-3\">\n                <div class=\"col-sm-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Report Date *</label>\n                  <input type=\"date\" name=\"reportDate\" [(ngModel)]=\"reportDate\" required class=\"form-control form-control-sm\">\n                </div>\n                <div class=\"col-sm-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Work Category *</label>\n                  <select class=\"form-select form-select-sm\" name=\"workCategory\" [(ngModel)]=\"workCategory\" required>\n                    <option value=\"Earthwork\">Earthwork &amp; Piling</option>\n                    <option value=\"Structural\">Structural Steel &amp; Framing</option>\n                    <option value=\"Concrete\">Concrete &amp; Slab Casting</option>\n                    <option value=\"Masonry\">Masonry &amp; Blockwork</option>\n                    <option value=\"Electrical\">Electrical Works</option>\n                    <option value=\"Plumbing\">Plumbing &amp; Piping</option>\n                    <option value=\"HVAC\">HVAC &amp; Mechanical</option>\n                    <option value=\"Finishing\">Finishing &amp; Painting</option>\n                    <option value=\"Inspection\">Quality Inspection</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Activity Performed *</label>\n                <textarea name=\"activityPerformed\" [(ngModel)]=\"activityPerformed\" required rows=\"3\" class=\"form-control\" placeholder=\"Specify concrete pour location, levels framed, rebar ties, equipment used...\"></textarea>\n              </div>\n\n              <div class=\"row g-2 mb-3\">\n                <div class=\"col-sm-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">% Shift Progress Added</label>\n                  <div class=\"input-group input-group-sm\">\n                    <input type=\"number\" name=\"progress\" [(ngModel)]=\"percentageWorkCompleted\" min=\"0\" max=\"100\" step=\"0.5\" class=\"form-control\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Contractor Responsible</label>\n                  <select class=\"form-select form-select-sm\" name=\"contractorId\" [(ngModel)]=\"selectedContractorId\">\n                    <option value=\"u4\">Vance Concrete Ltd (Gaurav K)</option>\n                    <option value=\"u2\">Apex Builders (Shradha S)</option>\n                    <option value=\"u3\">Apex Engineering (Sathvik S)</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"row g-2 mb-3\">\n                <div class=\"col-6 col-sm-3\">\n                  <label class=\"form-label fw-semibold small text-muted\">Workers Present</label>\n                  <input type=\"number\" name=\"workersPresent\" [(ngModel)]=\"workersPresent\" min=\"0\" class=\"form-control form-control-sm\">\n                </div>\n                <div class=\"col-6 col-sm-3\">\n                  <label class=\"form-label fw-semibold small text-muted\">Workers Absent</label>\n                  <input type=\"number\" name=\"workersAbsent\" [(ngModel)]=\"workersAbsent\" min=\"0\" class=\"form-control form-control-sm\">\n                </div>\n                <div class=\"col-sm-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Weather Conditions *</label>\n                  <input type=\"text\" name=\"weatherConditions\" [(ngModel)]=\"weatherConditions\" required class=\"form-control form-control-sm\" placeholder=\"e.g. Sunny, 28\u00B0C\">\n                </div>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Machinery Used &amp; Hours</label>\n                <input type=\"text\" name=\"machineryUsed\" [(ngModel)]=\"machineryUsed\" class=\"form-control form-control-sm\" placeholder=\"e.g. Tower Crane #1 (8 hrs), Scissor Lift #2 (4 hrs)\">\n              </div>\n\n              <!-- Materials consumed sub-section -->\n              <div class=\"border rounded-3 p-3 mb-3 bg-light\">\n                <span class=\"fw-semibold text-dark small d-block mb-2\"><i class=\"bi bi-box-seam me-1\"></i>Materials Consumed This Shift</span>\n                \n                <div class=\"row g-2 align-items-end\">\n                  <div class=\"col-7\">\n                    <label class=\"small text-muted mb-1\" style=\"font-size: 11px;\">Material</label>\n                    <select class=\"form-select form-select-sm\" name=\"matSelect\" [(ngModel)]=\"selectedMaterialId\">\n                      @for (mat of projectService.materials(); track mat.id) {\n                        <option [value]=\"mat.id\">{{ mat.name }} ({{ mat.unit }}) - Stock: {{ mat.inStock }}</option>\n                      }\n                    </select>\n                  </div>\n                  <div class=\"col-3\">\n                    <label class=\"small text-muted mb-1\" style=\"font-size: 11px;\">Quantity</label>\n                    <input type=\"number\" name=\"matQty\" [(ngModel)]=\"materialQty\" min=\"0\" step=\"0.5\" class=\"form-control form-control-sm\">\n                  </div>\n                  <div class=\"col-2\">\n                    <button type=\"button\" class=\"btn btn-primary btn-sm w-100\" (click)=\"addMaterialToConsumption()\">\n                      <i class=\"bi bi-plus-lg\"></i>\n                    </button>\n                  </div>\n                </div>\n\n                @if (tempMaterialsConsumed.length > 0) {\n                  <ul class=\"list-group list-group-flush mt-2 border-top pt-2\">\n                    @for (item of tempMaterialsConsumed; track $index) {\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center bg-transparent px-0 py-1 small\">\n                        <span>{{ item.materialName }}: <strong>{{ item.quantity }} {{ item.unit }}</strong></span>\n                        <button type=\"button\" class=\"btn btn-link text-danger btn-sm p-0 border-0\" (click)=\"removeMaterialFromConsumption($index)\">\n                          <i class=\"bi bi-trash\"></i>\n                        </button>\n                      </li>\n                    }\n                  </ul>\n                }\n              </div>\n\n              <div class=\"row g-2 mb-3\">\n                <div class=\"col-sm-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Safety Observations</label>\n                  <input type=\"text\" name=\"safetyObs\" [(ngModel)]=\"safetyObservations\" class=\"form-control form-control-sm\" placeholder=\"PPE compliance, harness ties...\">\n                </div>\n                <div class=\"col-sm-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Quality Inspection Remarks</label>\n                  <input type=\"text\" name=\"qualityRemarks\" [(ngModel)]=\"qualityInspectionRemarks\" class=\"form-control form-control-sm\" placeholder=\"Slump test, alignment verified...\">\n                </div>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Progress Photograph URL (Optional)</label>\n                <input type=\"url\" name=\"photoUrl\" [(ngModel)]=\"progressPhotograph\" class=\"form-control form-control-sm\" placeholder=\"https://images.unsplash.com/...\">\n              </div>\n\n              <!-- Delay Encountered Toggle -->\n              <div class=\"form-check form-switch mb-3 p-2 bg-light rounded border\">\n                <input class=\"form-check-input ms-0 me-2\" type=\"checkbox\" id=\"delaySwitch\" [(ngModel)]=\"delayEncountered\" name=\"delayEncountered\">\n                <label class=\"form-check-label fw-semibold small text-danger\" for=\"delaySwitch\">\n                  <i class=\"bi bi-exclamation-triangle-fill me-1\"></i> Delay Encountered During Shift?\n                </label>\n              </div>\n\n              @if (delayEncountered) {\n                <div class=\"form-group mb-3 p-3 bg-danger-subtle rounded border border-danger-subtle\">\n                  <label class=\"form-label fw-bold small text-danger\">Delay Reason *</label>\n                  <select class=\"form-select form-select-sm\" name=\"delayReason\" [(ngModel)]=\"delayReason\">\n                    <option value=\"Heavy rainfall\">Heavy rainfall / Bad weather</option>\n                    <option value=\"Labour shortage\">Labour shortage</option>\n                    <option value=\"Material delivery delay\">Material delivery delay</option>\n                    <option value=\"Machinery breakdown\">Machinery breakdown</option>\n                    <option value=\"Design modification\">Design modification / RFI</option>\n                    <option value=\"Financial issue\">Financial issue</option>\n                    <option value=\"Government approval\">Government approval / Inspection delay</option>\n                    <option value=\"Other\">Other reason</option>\n                  </select>\n                </div>\n              }\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Additional Remarks</label>\n                <textarea name=\"comments\" [(ngModel)]=\"additionalComments\" rows=\"2\" class=\"form-control form-control-sm\" placeholder=\"Any extra site notes...\"></textarea>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary w-100 py-2 fw-bold shadow-sm\">\n                <i class=\"bi bi-check-circle-fill me-1\"></i> Submit Daily Progress Report\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <!-- Historical Daily Progress Reports Ledger -->\n      <div class=\"col-xl-7\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <div class=\"d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-3\">\n              <div>\n                <h5 class=\"fw-bold text-dark mb-0\">Daily Progress Reports Ledger</h5>\n                <small class=\"text-muted\">Separate historical logs filed by Site Engineer</small>\n              </div>\n              <div class=\"d-flex gap-2\">\n                <select class=\"form-select form-select-sm w-auto\" [(ngModel)]=\"reportFilterCategory\">\n                  <option value=\"ALL\">All Categories</option>\n                  <option value=\"Structural\">Structural</option>\n                  <option value=\"Concrete\">Concrete</option>\n                  <option value=\"Electrical\">Electrical</option>\n                  <option value=\"Plumbing\">Plumbing</option>\n                  <option value=\"Earthwork\">Earthwork</option>\n                  <option value=\"Inspection\">Inspection</option>\n                </select>\n              </div>\n            </div>\n\n            @if (projectDailyReports().length === 0) {\n              <div class=\"p-5 text-center bg-light rounded-3 text-muted\">\n                <i class=\"bi bi-journal-x fs-1 d-block mb-2 text-secondary\"></i>\n                <p class=\"mb-0\">No Daily Progress Reports recorded for this project yet.</p>\n              </div>\n            } @else {\n              <div class=\"d-flex flex-column gap-3\">\n                @for (rep of projectDailyReports(); track rep.id) {\n                  <div class=\"p-3 border rounded-3 bg-light-subtle shadow-sm\">\n                    <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                      <div class=\"d-flex align-items-center gap-2\">\n                        <span class=\"badge bg-primary fw-bold\">{{ rep.reportDate }}</span>\n                        <span class=\"badge bg-secondary-subtle text-secondary border\">{{ rep.workCategory }}</span>\n                        @if (rep.percentageWorkCompleted > 0) {\n                          <span class=\"badge bg-success-subtle text-success border\">+{{ rep.percentageWorkCompleted }}% Progress</span>\n                        }\n                      </div>\n                      <div class=\"d-flex align-items-center gap-2\">\n                        @if (rep.delayEncountered) {\n                          <span class=\"badge bg-danger\"><i class=\"bi bi-clock-history me-1\"></i>Delayed</span>\n                        }\n                        <button class=\"btn btn-outline-danger btn-sm p-1 px-2 border-0\" title=\"Delete Report\" (click)=\"deleteReport(rep.id)\">\n                          <i class=\"bi bi-trash-fill\"></i>\n                        </button>\n                      </div>\n                    </div>\n\n                    <h6 class=\"fw-bold text-dark mb-1\">{{ rep.activityPerformed }}</h6>\n                    \n                    <div class=\"row g-2 my-2 text-muted small\" style=\"font-size: 12px;\">\n                      <div class=\"col-6 col-md-3\">\n                        <i class=\"bi bi-person-workspace me-1\"></i>Contractor: <strong>{{ rep.contractorName || 'Vance Concrete' }}</strong>\n                      </div>\n                      <div class=\"col-6 col-md-3\">\n                        <i class=\"bi bi-people-fill me-1\"></i>Workers: <strong>{{ rep.workersPresent }} Present</strong>\n                      </div>\n                      <div class=\"col-6 col-md-3\">\n                        <i class=\"bi bi-cloud-sun me-1\"></i>Weather: <strong>{{ rep.weatherConditions }}</strong>\n                      </div>\n                      <div class=\"col-6 col-md-3\">\n                        <i class=\"bi bi-gear-wide-connected me-1\"></i>Machinery: <strong>{{ rep.machineryUsed || 'Manual' }}</strong>\n                      </div>\n                    </div>\n\n                    @if (rep.materialsConsumed && rep.materialsConsumed.length > 0) {\n                      <div class=\"border-top pt-2 mt-2\">\n                        <span class=\"text-muted d-block small mb-1 fw-semibold\" style=\"font-size: 11px;\">MATERIALS CONSUMED:</span>\n                        <div class=\"d-flex flex-wrap gap-1.5\">\n                          @for (m of rep.materialsConsumed; track $index) {\n                            <span class=\"badge bg-light text-dark border rounded-pill px-2 py-1 text-xs\">\n                              {{ m.materialName }}: {{ m.quantity }} {{ m.unit }}\n                            </span>\n                          }\n                        </div>\n                      </div>\n                    }\n\n                    <div class=\"d-flex justify-content-between align-items-center border-top pt-2 mt-2\">\n                      <small class=\"text-muted\" style=\"font-size: 11px;\">Report ID: <strong>{{ rep.id }}</strong> &bull; Filed by {{ rep.siteEngineerName || 'Sathvik S' }}</small>\n                      <button class=\"btn btn-outline-primary btn-sm py-0.5 px-2.5 rounded-pill text-xs fw-bold\" (click)=\"openReportDetail(rep)\">\n                        <i class=\"bi bi-eye me-1\"></i> View Full Details\n                      </button>\n                    </div>\n\n                  </div>\n                }\n              </div>\n            }\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- MODULE 4: MACHINERY USAGE SHIFT LOGS -->\n  <!-- ========================================== -->\n  @if (activeModule === 'machinery_usage') {\n    <div class=\"row g-4 mb-4\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-2\"><i class=\"bi bi-speedometer2 text-primary me-2\"></i>Log Shift Machinery Hours</h5>\n            <p class=\"text-muted small mb-3\">Record machine run-time and idle hours for automatic utilization calculations.</p>\n\n            <form (ngSubmit)=\"submitMachineryUsage()\">\n              <div class=\"form-group mb-2.5\">\n                <label class=\"form-label fw-semibold small text-muted\">Select Assigned Equipment *</label>\n                <select class=\"form-select form-select-sm\" name=\"mRes\" [(ngModel)]=\"machineryResourceId\" required>\n                  @for (res of projectEquipment(); track res.id) {\n                    <option [value]=\"res.id\">{{ res.id }} - {{ res.name }} [{{ res.status }}]</option>\n                  }\n                  @if (projectEquipment().length === 0) {\n                    @for (res of projectService.resources(); track res.id) {\n                      <option [value]=\"res.id\">{{ res.id }} - {{ res.name }}</option>\n                    }\n                  }\n                </select>\n              </div>\n\n              <div class=\"row g-2 mb-2.5\">\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Usage Date *</label>\n                  <input type=\"date\" name=\"mDate\" [(ngModel)]=\"machineryUsageDate\" required class=\"form-control form-control-sm\">\n                </div>\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Shift Total (hrs)</label>\n                  <input type=\"number\" name=\"mTotal\" [(ngModel)]=\"machineryTotalHours\" min=\"1\" max=\"24\" step=\"0.5\" class=\"form-control form-control-sm\">\n                </div>\n              </div>\n\n              <div class=\"row g-2 mb-2.5\">\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Operating (hrs) *</label>\n                  <input type=\"number\" name=\"mOp\" [(ngModel)]=\"machineryOperatingHours\" min=\"0\" max=\"24\" step=\"0.5\" required class=\"form-control form-control-sm\">\n                </div>\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Idle (hrs)</label>\n                  <input type=\"number\" name=\"mIdle\" [(ngModel)]=\"machineryIdleHours\" min=\"0\" max=\"24\" step=\"0.5\" class=\"form-control form-control-sm\">\n                </div>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Remarks / Task Activity</label>\n                <input type=\"text\" name=\"mRem\" [(ngModel)]=\"machineryRemarks\" class=\"form-control form-control-sm\" placeholder=\"e.g. Trench digging on Grid 4\">\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary w-100 py-2 fw-bold\">\n                <i class=\"bi bi-check2-circle me-1\"></i> Record Shift Usage\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-8\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-clock-history text-primary me-2\"></i>Jobsite Machinery Run-Time Logs</h5>\n\n            @if (projectMachineryLogs().length === 0) {\n              <div class=\"p-5 text-center bg-light rounded text-muted\">\n                <p class=\"mb-0\">No machinery usage entries logged for this project yet.</p>\n              </div>\n            } @else {\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover align-middle\">\n                  <thead class=\"table-light text-muted uppercase small\">\n                    <tr>\n                      <th>Date</th>\n                      <th>Equipment</th>\n                      <th>Operating</th>\n                      <th>Idle</th>\n                      <th>Capacity</th>\n                      <th>Utilization %</th>\n                      <th>Remarks</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    @for (u of projectMachineryLogs(); track u.id) {\n                      <tr>\n                        <td class=\"fw-bold\">{{ u.usageDate }}</td>\n                        <td>\n                          <div class=\"fw-bold text-dark\">{{ u.resourceName }}</div>\n                          <small class=\"text-muted\" style=\"font-size: 11px;\">ID: {{ u.resourceId }}</small>\n                        </td>\n                        <td><span class=\"badge bg-success-subtle text-success border\">{{ u.operatingHours }} hrs</span></td>\n                        <td><span class=\"badge bg-secondary-subtle text-secondary border\">{{ u.idleHours }} hrs</span></td>\n                        <td>{{ u.totalAvailableHours }} hrs</td>\n                        <td><strong class=\"text-primary\">{{ u.utilizationPercentage }}%</strong></td>\n                        <td class=\"small text-muted\">{{ u.remarks || '-' }}</td>\n                      </tr>\n                    }\n                  </tbody>\n                </table>\n              </div>\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- 2. WEEKLY PROGRESS REPORT MODULE VIEW -->\n  <!-- ========================================== -->\n  @if (activeModule === 'weekly') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        <div class=\"d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4\">\n          <div>\n            <h5 class=\"fw-bold text-dark mb-1\"><i class=\"bi bi-calendar-week text-primary me-2\"></i>Weekly Progress Report Summary</h5>\n            <p class=\"text-muted mb-0 small\">Dynamically summarized from daily progress logs for the selected weekly period.</p>\n          </div>\n          <div class=\"d-flex gap-2 align-items-center\">\n            <label class=\"small text-muted fw-bold\">Week Start:</label>\n            <input type=\"date\" class=\"form-control form-control-sm w-auto\" [(ngModel)]=\"selectedWeekStart\" (change)=\"fetchWeeklySummary()\">\n            <button class=\"btn btn-primary btn-sm px-3\" (click)=\"fetchWeeklySummary()\"><i class=\"bi bi-arrow-clockwise me-1\"></i>Refresh</button>\n          </div>\n        </div>\n\n        @if (projectService.weeklySummary(); as ws) {\n          <!-- Weekly KPI Grid -->\n          <div class=\"row g-3 mb-4\">\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 rounded-3 bg-primary-subtle border border-primary-subtle\">\n                <span class=\"text-muted small fw-semibold d-block mb-1\">Weekly Progress</span>\n                <h3 class=\"fw-bold text-primary mb-0\">+{{ ws.weeklyProgressPercentage }}%</h3>\n                <small class=\"text-muted\">Overall: {{ ws.overallProjectProgress }}% ({{ ws.projectStatus }})</small>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 rounded-3 bg-success-subtle border border-success-subtle\">\n                <span class=\"text-muted small fw-semibold d-block mb-1\">Daily Reports Filed</span>\n                <h3 class=\"fw-bold text-success mb-0\">{{ ws.totalReportsFiled }}</h3>\n                <small class=\"text-muted\">Period: {{ ws.weekStartDate }} to {{ ws.weekEndDate }}</small>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 rounded-3 bg-info-subtle border border-info-subtle\">\n                <span class=\"text-muted small fw-semibold d-block mb-1\">Worker Shifts Utilized</span>\n                <h3 class=\"fw-bold text-info mb-0\">{{ ws.totalWorkersUtilized }}</h3>\n                <small class=\"text-muted\">Total workers checked in</small>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"p-3 rounded-3 bg-danger-subtle border border-danger-subtle\">\n                <span class=\"text-muted small fw-semibold d-block mb-1\">Delays Encountered</span>\n                <h3 class=\"fw-bold text-danger mb-0\">{{ ws.delaysEncounteredCount }}</h3>\n                <small class=\"text-muted\">{{ ws.safetyObservationsCount }} Safety observations</small>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row g-4\">\n            <div class=\"col-lg-6\">\n              <div class=\"card border rounded-3 p-3 bg-light-subtle h-100\">\n                <h6 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-check2-all text-success me-2\"></i>Major Construction Activities Completed</h6>\n                @if (ws.majorActivitiesCompleted.length === 0) {\n                  <p class=\"text-muted small mb-0\">No activities recorded for this week interval.</p>\n                } @else {\n                  <ul class=\"list-group list-group-flush\">\n                    @for (act of ws.majorActivitiesCompleted; track $index) {\n                      <li class=\"list-group-item bg-transparent px-0 py-2 small d-flex gap-2\">\n                        <i class=\"bi bi-arrow-right-circle-fill text-primary mt-1\"></i>\n                        <span>{{ act }}</span>\n                      </li>\n                    }\n                  </ul>\n                }\n              </div>\n            </div>\n\n            <div class=\"col-lg-6\">\n              <div class=\"card border rounded-3 p-3 bg-light-subtle h-100\">\n                <h6 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-box-seam-fill text-warning me-2\"></i>Materials Consumed Summary</h6>\n                @if (ws.materialsConsumedSummary.length === 0) {\n                  <p class=\"text-muted small mb-0\">No materials recorded during this period.</p>\n                } @else {\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-sm align-middle mb-0\">\n                      <thead class=\"table-light text-muted small\">\n                        <tr>\n                          <th>Material</th>\n                          <th>Total Consumed</th>\n                          <th>Unit</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        @for (m of ws.materialsConsumedSummary; track $index) {\n                          <tr>\n                            <td class=\"fw-bold\">{{ m.materialName }}</td>\n                            <td><span class=\"badge bg-light text-dark border\">{{ m.quantity }}</span></td>\n                            <td>{{ m.unit }}</td>\n                          </tr>\n                        }\n                      </tbody>\n                    </table>\n                  </div>\n                }\n              </div>\n            </div>\n          </div>\n\n          <!-- Delays & Safety summary row -->\n          @if (ws.delayDetails.length > 0 || ws.safetyObservations.length > 0) {\n            <div class=\"row g-4 mt-1\">\n              @if (ws.delayDetails.length > 0) {\n                <div class=\"col-lg-6\">\n                  <div class=\"card border border-danger-subtle rounded-3 p-3 bg-danger-subtle\">\n                    <h6 class=\"fw-bold text-danger mb-2\"><i class=\"bi bi-exclamation-octagon me-2\"></i>Weekly Delays Encountered</h6>\n                    @for (d of ws.delayDetails; track $index) {\n                      <div class=\"p-2 bg-white rounded border mb-2 small\">\n                        <span class=\"badge bg-danger me-2\">{{ d.date }}</span>\n                        <strong>{{ d.reason }}</strong>: {{ d.activity }}\n                      </div>\n                    }\n                  </div>\n                </div>\n              }\n              @if (ws.safetyObservations.length > 0) {\n                <div class=\"col-lg-6\">\n                  <div class=\"card border border-info-subtle rounded-3 p-3 bg-info-subtle\">\n                    <h6 class=\"fw-bold text-dark mb-2\"><i class=\"bi bi-shield-check text-info me-2\"></i>Safety Observations &amp; Audits</h6>\n                    @for (s of ws.safetyObservations; track $index) {\n                      <div class=\"p-2 bg-white rounded border mb-2 small\">\n                        <i class=\"bi bi-check-circle text-success me-1\"></i> {{ s }}\n                      </div>\n                    }\n                  </div>\n                </div>\n              }\n            </div>\n          }\n        }\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- 3. MILESTONE TRACKING MODULE VIEW -->\n  <!-- ========================================== -->\n  @if (activeModule === 'milestones') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        <div class=\"d-flex justify-content-between align-items-center mb-4\">\n          <div>\n            <h5 class=\"fw-bold text-dark mb-1\"><i class=\"bi bi-flag-fill text-success me-2\"></i>Project Milestones Tracking</h5>\n            <p class=\"text-muted mb-0 small\">Planned project milestone schedule and actual verified completion rates for <strong>{{ engineerProject()?.name }}</strong>.</p>\n          </div>\n          <span class=\"badge bg-primary fs-6 px-3 py-2 rounded-pill\">\n            Cumulative Completion: {{ engineerProject()?.progress }}%\n          </span>\n        </div>\n\n        <div class=\"row g-4\">\n          @for (m of projectMilestones(); track m.id) {\n            <div class=\"col-md-6 col-xl-4\">\n              <div class=\"card border rounded-3 p-3 h-100 shadow-sm\"\n                   [class.border-success]=\"m.status === 'Completed'\"\n                   [class.border-primary]=\"m.status === 'In Progress'\"\n                   [class.border-danger]=\"m.status === 'Delayed'\">\n                \n                <div class=\"d-flex justify-content-between align-items-start mb-2\">\n                  <span class=\"badge\"\n                        [class.bg-success]=\"m.status === 'Completed'\"\n                        [class.bg-primary]=\"m.status === 'In Progress'\"\n                        [class.bg-warning]=\"m.status === 'Pending'\"\n                        [class.bg-danger]=\"m.status === 'Delayed'\">\n                    {{ m.status }}\n                  </span>\n                  <span class=\"fw-bold text-dark\">{{ m.progressPercentage }}%</span>\n                </div>\n\n                <h6 class=\"fw-bold text-dark mb-1\">{{ m.name }}</h6>\n                <p class=\"text-muted small mb-2\" style=\"min-height: 38px;\">{{ m.relatedActivities || 'Related site activities underway.' }}</p>\n                \n                <div class=\"progress mb-3\" style=\"height: 8px;\">\n                  <div class=\"progress-bar\"\n                       [class.bg-success]=\"m.status === 'Completed'\"\n                       [class.bg-primary]=\"m.status === 'In Progress'\"\n                       [class.bg-danger]=\"m.status === 'Delayed'\"\n                       [style.width.%]=\"m.progressPercentage\"></div>\n                </div>\n\n                <div class=\"d-flex justify-content-between align-items-center text-muted small border-top pt-2 mt-auto\" style=\"font-size: 11px;\">\n                  <span>Planned: {{ m.plannedStartDate }} &rarr; {{ m.plannedEndDate }}</span>\n                  <button class=\"btn btn-outline-primary btn-sm py-0.5 px-2 rounded-pill text-xs fw-bold\" (click)=\"openEditMilestone(m)\">\n                    <i class=\"bi bi-pencil-square me-1\"></i> Update\n                  </button>\n                </div>\n\n                @if (m.actualCompletionDate) {\n                  <small class=\"text-success fw-semibold mt-1 d-block\" style=\"font-size: 11px;\">\n                    <i class=\"bi bi-check-all me-1\"></i> Completed on {{ m.actualCompletionDate }}\n                  </small>\n                }\n\n              </div>\n            </div>\n          }\n        </div>\n\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- 4. DELAY TRACKING MODULE VIEW -->\n  <!-- ========================================== -->\n  @if (activeModule === 'delays') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-hourglass-bottom text-danger me-2\"></i>Log Site Delay Event</h5>\n            \n            <form (ngSubmit)=\"submitDelayRecord()\">\n              \n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Date of Delay *</label>\n                <input type=\"date\" name=\"delayDate\" [(ngModel)]=\"delayDate\" required class=\"form-control form-control-sm\">\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Affected Activity *</label>\n                <input type=\"text\" name=\"affActivity\" [(ngModel)]=\"delayAffectedActivity\" required class=\"form-control form-control-sm\" placeholder=\"e.g. Level 7 concrete pour, steel delivery\">\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Delay Reason Classification *</label>\n                <select class=\"form-select form-select-sm\" name=\"reason\" [(ngModel)]=\"delayReasonSelect\" required>\n                  <option value=\"Heavy rainfall\">Heavy rainfall / Extreme weather</option>\n                  <option value=\"Labour shortage\">Labour shortage / Strike</option>\n                  <option value=\"Material delivery delay\">Material delivery delay</option>\n                  <option value=\"Machinery breakdown\">Machinery breakdown / Repair</option>\n                  <option value=\"Design modification\">Design modification / Engineering RFI</option>\n                  <option value=\"Financial issue\">Financial / Invoice bottleneck</option>\n                  <option value=\"Government approval\">Government approval / Inspection hold</option>\n                  <option value=\"Other\">Other unclassified obstacle</option>\n                </select>\n              </div>\n\n              <div class=\"row g-2 mb-3\">\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Delay Duration</label>\n                  <input type=\"text\" name=\"duration\" [(ngModel)]=\"delayDuration\" class=\"form-control form-control-sm\" placeholder=\"e.g. 2 days, 4 hours\">\n                </div>\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Impact Level</label>\n                  <select class=\"form-select form-select-sm\" name=\"impact\" [(ngModel)]=\"delayImpact\">\n                    <option value=\"Low\">Low Impact</option>\n                    <option value=\"Medium\">Medium Impact</option>\n                    <option value=\"High\">High Impact</option>\n                    <option value=\"Critical\">Critical Impact</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Additional Remarks / Mitigation</label>\n                <textarea name=\"remarks\" [(ngModel)]=\"delayRemarks\" rows=\"3\" class=\"form-control form-control-sm\" placeholder=\"Describe remediation steps or revised delivery timelines...\"></textarea>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-danger w-100 py-2 fw-bold shadow-sm\">\n                <i class=\"bi bi-exclamation-triangle-fill me-1\"></i> Log Delay to Project Manager\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-8\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Documented Site Delays &amp; Bottlenecks</h5>\n            \n            @if (projectDelays().length === 0) {\n              <div class=\"p-5 text-center bg-light rounded-3 text-muted\">\n                <i class=\"bi bi-shield-check fs-1 text-success d-block mb-2\"></i>\n                <p class=\"mb-0\">No active delays logged for this site.</p>\n              </div>\n            } @else {\n              <div class=\"d-flex flex-column gap-3\">\n                @for (d of projectDelays(); track d.id) {\n                  <div class=\"p-3 border rounded-3 bg-light-subtle shadow-sm\"\n                       [class.border-danger]=\"d.status === 'Active'\"\n                       [class.border-success]=\"d.status === 'Resolved'\">\n                    \n                    <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                      <div class=\"d-flex gap-2 align-items-center\">\n                        <span class=\"badge\"\n                              [class.bg-danger]=\"d.impactOnProject === 'Critical' || d.impactOnProject === 'High'\"\n                              [class.bg-warning]=\"d.impactOnProject === 'Medium'\"\n                              [class.bg-info]=\"d.impactOnProject === 'Low'\">\n                          {{ d.impactOnProject }} Impact\n                        </span>\n                        <span class=\"badge bg-secondary-subtle text-secondary border\">{{ d.date }}</span>\n                      </div>\n                      <div class=\"d-flex gap-2 align-items-center\">\n                        <span class=\"badge\" [class.bg-success]=\"d.status === 'Resolved'\" [class.bg-danger]=\"d.status === 'Active'\">\n                          {{ d.status }}\n                        </span>\n                        <button class=\"btn btn-outline-danger btn-sm p-1 px-2 border-0\" (click)=\"deleteDelay(d.id)\" title=\"Delete delay\">\n                          <i class=\"bi bi-trash\"></i>\n                        </button>\n                      </div>\n                    </div>\n\n                    <h6 class=\"fw-bold text-dark mb-1\">{{ d.affectedActivity }}</h6>\n                    <p class=\"text-muted small mb-2\"><strong class=\"text-dark\">Reason:</strong> {{ d.delayReason }} &bull; <strong class=\"text-dark\">Duration:</strong> {{ d.delayDuration }}</p>\n                    \n                    @if (d.additionalRemarks) {\n                      <p class=\"p-2 bg-white rounded border small text-secondary mb-2\">{{ d.additionalRemarks }}</p>\n                    }\n\n                    <div class=\"d-flex justify-content-between align-items-center border-top pt-2 mt-2\" style=\"font-size: 11px;\">\n                      <span class=\"text-muted\">Logged by: {{ d.recordedByName || 'Site Engineer' }}</span>\n                      @if (d.status === 'Active') {\n                        <button class=\"btn btn-outline-success btn-xs py-1 px-2.5 rounded-pill fw-bold\" (click)=\"resolveDelay(d.id)\">\n                          <i class=\"bi bi-check-circle me-1\"></i> Mark Resolved\n                        </button>\n                      }\n                    </div>\n\n                  </div>\n                }\n              </div>\n            }\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- 5. SITE ACTIVITY LOGS MODULE VIEW -->\n  <!-- ========================================== -->\n  @if (activeModule === 'activities') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-calendar-event-fill text-info me-2\"></i>Record Site Event</h5>\n            <p class=\"text-muted small mb-3\">Log site occurrences: material arrivals, machinery service, client walkthroughs, safety audits.</p>\n            \n            <form (ngSubmit)=\"submitActivityLog()\">\n              \n              <div class=\"row g-2 mb-3\">\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Date *</label>\n                  <input type=\"date\" name=\"actDate\" [(ngModel)]=\"activityDate\" required class=\"form-control form-control-sm\">\n                </div>\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Time *</label>\n                  <input type=\"time\" name=\"actTime\" [(ngModel)]=\"activityTime\" required class=\"form-control form-control-sm\">\n                </div>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Activity Type *</label>\n                <select class=\"form-select form-select-sm\" name=\"actType\" [(ngModel)]=\"activityType\" required>\n                  <option value=\"Machinery maintenance\">Machinery maintenance / Service</option>\n                  <option value=\"Material arrival\">Material arrival &amp; Delivery</option>\n                  <option value=\"Safety training\">Safety training / Tool Box Talk</option>\n                  <option value=\"Client visit\">Client / Sponsor walkthrough</option>\n                  <option value=\"Government inspection\">Government / Building inspection</option>\n                  <option value=\"Quality audit\">Quality audit &amp; Lab testing</option>\n                  <option value=\"Accident report\">Accident / Incident report</option>\n                  <option value=\"Contractor meeting\">Contractor coordination meeting</option>\n                  <option value=\"Equipment servicing\">Equipment servicing</option>\n                  <option value=\"Other\">Other site event</option>\n                </select>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Description *</label>\n                <textarea name=\"actDesc\" [(ngModel)]=\"activityDescription\" required rows=\"4\" class=\"form-control form-control-sm\" placeholder=\"Details of the event, equipment serials, delivery manifest, attendees...\"></textarea>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Responsible Person *</label>\n                <input type=\"text\" name=\"respPerson\" [(ngModel)]=\"activityResponsiblePerson\" required class=\"form-control form-control-sm\" placeholder=\"e.g. Gaurav K, Equipment Tech\">\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-info text-white w-100 py-2 fw-bold shadow-sm\">\n                <i class=\"bi bi-plus-circle-fill me-1\"></i> Save Activity Log\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-8\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <div class=\"d-flex justify-content-between align-items-center mb-3\">\n              <h5 class=\"fw-bold text-dark mb-0\">Site Activity Timeline</h5>\n              <select class=\"form-select form-select-sm w-auto\" [(ngModel)]=\"activityFilterType\">\n                <option value=\"ALL\">All Event Types</option>\n                <option value=\"Machinery maintenance\">Machinery</option>\n                <option value=\"Material arrival\">Materials</option>\n                <option value=\"Safety training\">Safety</option>\n                <option value=\"Client visit\">Client Visits</option>\n                <option value=\"Government inspection\">Gov Inspection</option>\n                <option value=\"Quality audit\">Quality Audit</option>\n              </select>\n            </div>\n\n            @if (projectActivityLogs().length === 0) {\n              <div class=\"p-5 text-center bg-light rounded-3 text-muted\">\n                <i class=\"bi bi-calendar-x fs-1 d-block mb-2\"></i>\n                <p class=\"mb-0\">No site activity logs found.</p>\n              </div>\n            } @else {\n              <div class=\"d-flex flex-column gap-3\">\n                @for (a of projectActivityLogs(); track a.id) {\n                  <div class=\"p-3 border rounded-3 bg-light-subtle shadow-sm\">\n                    <div class=\"d-flex justify-content-between align-items-center mb-1\">\n                      <span class=\"badge bg-primary-subtle text-primary border border-primary-subtle fw-bold\">\n                        {{ a.activityType }}\n                      </span>\n                      <div class=\"d-flex align-items-center gap-2\">\n                        <small class=\"text-muted\"><i class=\"bi bi-clock me-1\"></i>{{ a.date }} at {{ a.time }}</small>\n                        <button class=\"btn btn-outline-danger btn-sm p-0 px-1 border-0\" (click)=\"deleteActivityLog(a.id)\" title=\"Delete log\">\n                          <i class=\"bi bi-trash\"></i>\n                        </button>\n                      </div>\n                    </div>\n\n                    <p class=\"text-dark small mb-2\" style=\"white-space: pre-line;\">{{ a.description }}</p>\n\n                    <div class=\"d-flex justify-content-between align-items-center border-top pt-2\" style=\"font-size: 11px;\">\n                      <span class=\"text-muted\">Responsible: <strong>{{ a.responsiblePerson }}</strong></span>\n                      <span class=\"text-muted\">Recorded by {{ a.loggedByName || 'Site Engineer' }}</span>\n                    </div>\n\n                  </div>\n                }\n              </div>\n            }\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- 6. SITE PHOTOS MODULE VIEW -->\n  <!-- ========================================== -->\n  @if (activeModule === 'photos') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-camera-fill text-success me-2\"></i>Upload Site Photo</h5>\n            \n            <form (ngSubmit)=\"submitSitePhoto()\">\n              \n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Photo URL *</label>\n                <input type=\"url\" name=\"photoUrl\" [(ngModel)]=\"photoUrl\" required class=\"form-control form-control-sm\" placeholder=\"https://images.unsplash.com/...\">\n                <div class=\"form-text small mt-1\">Preset image templates:</div>\n                <div class=\"d-flex flex-column gap-1 mt-1\">\n                  <button type=\"button\" \n                          class=\"btn btn-outline-secondary btn-sm text-start py-1 px-2 text-xs\" \n                          (click)=\"photoUrl='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=500'; photoCaption='Curtain wall fittings and steel columns.'\">\n                    Steel Columns Level 8\n                  </button>\n                  <button type=\"button\" \n                          class=\"btn btn-outline-secondary btn-sm text-start py-1 px-2 text-xs\" \n                          (click)=\"photoUrl='https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=500'; photoCaption='Workers tightening deck scaffold plates.'\">\n                    Worker Scaffolding View\n                  </button>\n                  <button type=\"button\" \n                          class=\"btn btn-outline-secondary btn-sm text-start py-1 px-2 text-xs\" \n                          (click)=\"photoUrl='https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=500'; photoCaption='Concrete slab pour on Level 7.'\">\n                    Concrete Slab Pouring\n                  </button>\n                </div>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Photo Caption *</label>\n                <input type=\"text\" name=\"caption\" [(ngModel)]=\"photoCaption\" required class=\"form-control form-control-sm\" placeholder=\"e.g. Scaffolding structures checking L6\">\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary w-100 py-2 fw-bold\">\n                <i class=\"bi bi-camera-fill me-1\"></i> Log Photo Feed\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-8\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Active Photo Stream</h5>\n            \n            <div class=\"row g-3\">\n              @for (photo of projectPhotos(); track photo.id) {\n                <div class=\"col-md-6\">\n                  <div class=\"card border rounded-3 overflow-hidden shadow-sm h-100\">\n                    <img [src]=\"photo.url\" alt=\"Site photo\" class=\"img-fluid object-fit-cover\" style=\"height: 180px; width: 100%;\">\n                    <div class=\"card-body p-3\">\n                      <p class=\"card-text small text-dark fw-medium mb-2\">{{ photo.caption }}</p>\n                      <div class=\"d-flex justify-content-between align-items-center text-muted\" style=\"font-size: 11px;\">\n                        <span>Uploaded by: {{ photo.uploadedBy }}</span>\n                        <span>{{ photo.date }}</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              }\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- 7. ATTENDANCE MODULE VIEW -->\n  <!-- ========================================== -->\n  @if (activeModule === 'attendance' || activeModule === 'workforce') {\n    <app-workforce-management [initialTab]=\"'attendance'\"></app-workforce-management>\n  }\n\n  <!-- ========================================== -->\n  <!-- 8. MATERIALS INVENTORY VIEW -->\n  <!-- ========================================== -->\n  @if (activeModule === 'materials') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Materials Inventory Status</h5>\n        \n        <div class=\"table-responsive\">\n          <table class=\"table table-hover align-middle\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>Material</th>\n                <th>Quantity in Stock</th>\n                <th>Min Safety Buffer</th>\n                <th>Estimated Unit Cost</th>\n                <th>Stock Level</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (m of projectService.materials(); track m.id) {\n                <tr>\n                  <td class=\"fw-bold text-dark\">{{ m.name }}</td>\n                  <td>{{ m.inStock }} {{ m.unit }}</td>\n                  <td>{{ m.reorderLevel }} {{ m.unit }}</td>\n                  <td>${{ m.costPerUnit }} / {{ m.unit }}</td>\n                  <td>\n                    @if (m.inStock <= m.reorderLevel) {\n                      <span class=\"badge bg-danger\">Critical Reorder</span>\n                    } @else if (m.inStock <= m.reorderLevel * 1.5) {\n                      <span class=\"badge bg-warning text-dark\">Buffer Low</span>\n                    } @else {\n                      <span class=\"badge bg-success\">Optimal</span>\n                    }\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- 9. ISSUES HAZARD VIEW -->\n  <!-- ========================================== -->\n  @if (activeModule === 'issues') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Submit Issue / Hazard</h5>\n            \n            <form (ngSubmit)=\"submitIssue()\">\n              \n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Issue Title</label>\n                <input type=\"text\" name=\"issueTitle\" [(ngModel)]=\"issueTitle\" required class=\"form-control\" placeholder=\"e.g. Scaffolding locking pin damaged\">\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Severity Classification</label>\n                <select class=\"form-select form-control\" name=\"severity\" [(ngModel)]=\"issueSeverity\" required>\n                  <option value=\"Low\">Low (Administrative)</option>\n                  <option value=\"Medium\">Medium (Correction needed)</option>\n                  <option value=\"High\">High (Immediate check)</option>\n                  <option value=\"Critical\">Critical (Stop Work Trigger)</option>\n                </select>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Hazard Details</label>\n                <textarea name=\"desc\" [(ngModel)]=\"issueDescription\" required rows=\"4\" class=\"form-control\" placeholder=\"Describe the safety hazard, exact location, or inventory bottleneck...\"></textarea>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-danger w-100 py-2.5\">\n                <i class=\"bi bi-exclamation-triangle me-1\"></i> Flag Issue\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-8\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Site Issues Log</h5>\n            \n            <div class=\"d-flex flex-column gap-3\">\n              @for (issue of activeIssues(); track issue.id) {\n                <div class=\"p-3 border rounded-3\" \n                     [class.border-danger-subtle]=\"issue.status === 'Open'\"\n                     [class.bg-danger-subtle]=\"issue.status === 'Open'\"\n                     [class.border-success-subtle]=\"issue.status === 'Resolved'\"\n                     [class.bg-light]=\"issue.status === 'Resolved'\">\n                  \n                  <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                    <span class=\"badge\" \n                          [class.bg-danger]=\"issue.severity === 'Critical' || issue.severity === 'High'\"\n                          [class.bg-warning]=\"issue.severity === 'Medium'\"\n                          [class.bg-info]=\"issue.severity === 'Low'\">\n                      {{ issue.severity }} Severity\n                    </span>\n                    <span class=\"badge bg-light text-dark border\">{{ issue.status }}</span>\n                  </div>\n\n                  <h6 class=\"fw-bold text-dark mb-1\">{{ issue.title }}</h6>\n                  <p class=\"text-muted small mb-2\">{{ issue.description }}</p>\n                  \n                  <div class=\"d-flex justify-content-between align-items-center border-top pt-2\" style=\"font-size: 11px;\">\n                    <span class=\"text-muted\">Reported by: {{ issue.reportedBy }} &bull; {{ issue.reportedDate }}</span>\n                    @if (issue.status === 'Open') {\n                      <button class=\"btn btn-outline-success btn-xs py-1 px-2.5 rounded-pill\" (click)=\"resolveIssue(issue.id)\">\n                        Mark Resolved\n                      </button>\n                    }\n                  </div>\n\n                </div>\n              }\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n</div>\n\n<!-- ========================================== -->\n<!-- DAILY PROGRESS REPORT DETAIL MODAL -->\n<!-- ========================================== -->\n@if (selectedReportDetail; as rep) {\n  <div class=\"modal fade show d-block\" style=\"background: rgba(0,0,0,0.5);\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable\">\n      <div class=\"modal-content border-0 shadow rounded-3\">\n        <div class=\"modal-header bg-primary text-white\">\n          <h5 class=\"modal-title fw-bold\">\n            <i class=\"bi bi-file-earmark-text me-2\"></i>Daily Progress Report Details &bull; {{ rep.id }}\n          </h5>\n          <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"closeReportDetail()\"></button>\n        </div>\n        <div class=\"modal-body p-4\">\n          \n          <div class=\"d-flex justify-content-between align-items-center mb-3\">\n            <div>\n              <span class=\"badge bg-primary fs-6 me-2\">{{ rep.reportDate }}</span>\n              <span class=\"badge bg-secondary fs-6\">{{ rep.workCategory }}</span>\n            </div>\n            <span class=\"badge bg-success fs-6\">+{{ rep.percentageWorkCompleted }}% Work Completed</span>\n          </div>\n\n          <h5 class=\"fw-bold text-dark mb-2\">{{ rep.activityPerformed }}</h5>\n          \n          <div class=\"row g-3 my-2 p-3 bg-light rounded-3 small\">\n            <div class=\"col-sm-6\">\n              <strong>Contractor Responsible:</strong> {{ rep.contractorName || 'Vance Concrete Ltd' }}\n            </div>\n            <div class=\"col-sm-6\">\n              <strong>Weather Conditions:</strong> {{ rep.weatherConditions }}\n            </div>\n            <div class=\"col-sm-6\">\n              <strong>Workforce:</strong> {{ rep.workersPresent }} Present, {{ rep.workersAbsent }} Absent\n            </div>\n            <div class=\"col-sm-6\">\n              <strong>Machinery Used:</strong> {{ rep.machineryUsed || 'None' }}\n            </div>\n          </div>\n\n          @if (rep.materialsConsumed && rep.materialsConsumed.length > 0) {\n            <div class=\"my-3\">\n              <h6 class=\"fw-bold text-dark mb-2\"><i class=\"bi bi-box-seam me-1\"></i>Materials Consumed</h6>\n              <div class=\"table-responsive\">\n                <table class=\"table table-sm table-bordered\">\n                  <thead class=\"table-light\">\n                    <tr>\n                      <th>Material Name</th>\n                      <th>Quantity</th>\n                      <th>Unit</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    @for (m of rep.materialsConsumed; track $index) {\n                      <tr>\n                        <td>{{ m.materialName }}</td>\n                        <td><strong>{{ m.quantity }}</strong></td>\n                        <td>{{ m.unit }}</td>\n                      </tr>\n                    }\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          }\n\n          <div class=\"row g-3 my-2\">\n            <div class=\"col-sm-6\">\n              <div class=\"p-2.5 border rounded bg-light-subtle h-100\">\n                <strong class=\"d-block small text-dark mb-1\"><i class=\"bi bi-shield-check text-success me-1\"></i>Safety Observations:</strong>\n                <p class=\"small text-muted mb-0\">{{ rep.safetyObservations || 'Normal safety compliance maintained.' }}</p>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"p-2.5 border rounded bg-light-subtle h-100\">\n                <strong class=\"d-block small text-dark mb-1\"><i class=\"bi bi-clipboard-check text-info me-1\"></i>Quality Inspection Remarks:</strong>\n                <p class=\"small text-muted mb-0\">{{ rep.qualityInspectionRemarks || 'Standard site inspection passed.' }}</p>\n              </div>\n            </div>\n          </div>\n\n          @if (rep.delayEncountered) {\n            <div class=\"alert alert-danger p-3 mt-3\">\n              <strong class=\"d-block\"><i class=\"bi bi-exclamation-triangle-fill me-1\"></i>Delay Encountered:</strong>\n              <p class=\"mb-0 small\">Reason: <strong>{{ rep.delayReason }}</strong></p>\n            </div>\n          }\n\n          @if (rep.additionalComments) {\n            <div class=\"p-2.5 border rounded bg-light mt-3\">\n              <strong class=\"d-block small text-dark mb-1\">Additional Comments:</strong>\n              <p class=\"small text-muted mb-0\">{{ rep.additionalComments }}</p>\n            </div>\n          }\n\n          @if (rep.progressPhotograph) {\n            <div class=\"mt-3\">\n              <strong class=\"d-block small text-dark mb-2\"><i class=\"bi bi-camera me-1\"></i>Attached Progress Photograph:</strong>\n              <img [src]=\"rep.progressPhotograph\" alt=\"Progress Photo\" class=\"img-fluid rounded border shadow-sm\" style=\"max-height: 250px; width: 100%; object-fit: cover;\">\n            </div>\n          }\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeReportDetail()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n}\n\n<!-- ========================================== -->\n<!-- UPDATE MILESTONE MODAL -->\n<!-- ========================================== -->\n@if (selectedMilestoneToEdit; as m) {\n  <div class=\"modal fade show d-block\" style=\"background: rgba(0,0,0,0.5);\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content border-0 shadow rounded-3\">\n        <div class=\"modal-header bg-primary text-white\">\n          <h5 class=\"modal-title fw-bold\">Update Milestone &bull; {{ m.name }}</h5>\n          <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"closeEditMilestone()\"></button>\n        </div>\n        <div class=\"modal-body p-4\">\n          \n          <div class=\"form-group mb-3\">\n            <label class=\"form-label fw-semibold small text-muted\">Completion Percentage (0-100%)</label>\n            <div class=\"d-flex align-items-center gap-3\">\n              <input type=\"range\" class=\"form-range flex-grow-1\" min=\"0\" max=\"100\" [(ngModel)]=\"editMilestoneProgress\">\n              <span class=\"fw-bold fs-5 text-primary\" style=\"width: 50px;\">{{ editMilestoneProgress }}%</span>\n            </div>\n          </div>\n\n          <div class=\"form-group mb-3\">\n            <label class=\"form-label fw-semibold small text-muted\">Milestone Status</label>\n            <select class=\"form-select\" [(ngModel)]=\"editMilestoneStatus\">\n              <option value=\"Pending\">Pending</option>\n              <option value=\"In Progress\">In Progress</option>\n              <option value=\"Completed\">Completed (100%)</option>\n              <option value=\"Delayed\">Delayed</option>\n            </select>\n          </div>\n\n          <small class=\"text-muted d-block mt-2\">\n            Updating this milestone will automatically recalculate the overall project completion percentage and reflect it on the Project Manager dashboard.\n          </small>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeEditMilestone()\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary fw-bold\" (click)=\"saveMilestoneProgress()\">Save Progress</button>\n        </div>\n      </div>\n    </div>\n  </div>\n}\n\n@if (activeModule === 'procurement') {\n  <app-procurement-management></app-procurement-management>\n}\n", styles: [".bg-light {\n  background-color: #f8fafc !important;\n}\n\n.text-xs {\n  font-size: 11px;\n}\n\n.btn-xs {\n  font-size: 11px;\n  padding: 2px 8px;\n}\n\n.bg-danger-subtle {\n  background-color: rgba(220, 53, 69, 0.03) !important;\n}\n\n.border-danger-subtle {\n  border-color: rgba(220, 53, 69, 0.15) !important;\n}\n\n.border-success-subtle {\n  border-color: rgba(25, 135, 84, 0.15) !important;\n}\n\n.list-group-item {\n  border-color: rgba(0, 0, 0, 0.05);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SiteEngineerDashboard, { className: "SiteEngineerDashboard", filePath: "src/app/pages/site-engineer/dashboard/dashboard.ts", lineNumber: 19 }); })();
