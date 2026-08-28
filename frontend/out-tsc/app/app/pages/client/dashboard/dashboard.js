import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { AuthService } from '../../../services/auth.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';
import { WorkforceManagementComponent } from '../../../components/workforce-management/workforce-management';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = () => [];
const _forTrack0 = ($index, $item) => $item.id;
function ClientDashboard_Conditional_22_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17);
    i0.ɵɵelement(2, "img", 18);
    i0.ɵɵelementStart(3, "div")(4, "h6", 2);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 19);
    i0.ɵɵelement(7, "i", 20);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 21);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 22)(12, "div", 23)(13, "span");
    i0.ɵɵtext(14, "Project Completion");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 24);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 25);
    i0.ɵɵelement(18, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small", 27);
    i0.ɵɵtext(20, "Status: ");
    i0.ɵɵelementStart(21, "strong");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 28)(24, "div", 29);
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "small", 30);
    i0.ɵɵtext(28);
    i0.ɵɵpipe(29, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "small", 31);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const proj_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", proj_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(proj_r1.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(proj_r1.location);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(proj_r1.description);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", proj_r1.progress, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", proj_r1.progress, "%");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(proj_r1.status);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Invested: $", i0.ɵɵpipeBind2(26, 11, proj_r1.budget, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Spent: $", i0.ɵɵpipeBind2(29, 14, proj_r1.spent, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Manager: ", proj_r1.manager);
} }
function ClientDashboard_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 13)(2, "h5", 14);
    i0.ɵɵtext(3, "Portfolio Assets Progression");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 15);
    i0.ɵɵrepeaterCreate(5, ClientDashboard_Conditional_22_For_6_Template, 32, 17, "div", 16, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.clientProjects());
} }
function ClientDashboard_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 13)(2, "h5", 32);
    i0.ɵɵtext(3, "Construction Milestones Checklist");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 33)(5, "div", 34);
    i0.ɵɵelement(6, "div", 35);
    i0.ɵɵelementStart(7, "h6", 2);
    i0.ɵɵtext(8, "Site Mobilization & Engineering Permits");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 36);
    i0.ɵɵtext(10, "Local building code approvals and initial machinery layouts finalized.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small", 37);
    i0.ɵɵtext(12, "Verified");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 34);
    i0.ɵɵelement(14, "div", 35);
    i0.ɵɵelementStart(15, "h6", 2);
    i0.ɵɵtext(16, "Foundation Pour & Retaining Shoring");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p", 36);
    i0.ɵɵtext(18, "Deep concrete diaphragm wall structural core completed.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small", 37);
    i0.ɵɵtext(20, "Verified");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 34);
    i0.ɵɵelement(22, "div", 38);
    i0.ɵɵelementStart(23, "h6", 2);
    i0.ɵɵtext(24, "Structural Frame Erection (Level 1 to 10)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "p", 36);
    i0.ɵɵtext(26, "Active core structural column placement in progress. Erection rate at 55%.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "small", 39);
    i0.ɵɵtext(28, "In Progress");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 40);
    i0.ɵɵelement(30, "div", 41);
    i0.ɵɵelementStart(31, "h6", 2);
    i0.ɵɵtext(32, "Curtain Glass Wall Installation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "p", 36);
    i0.ɵɵtext(34, "Expected to commence immediately upon level columns reaching L12 structural stability.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "small", 42);
    i0.ɵɵtext(36, "Pending Target");
    i0.ɵɵelementEnd()()()()();
} }
function ClientDashboard_Conditional_24_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 29);
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
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 24);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const proj_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(proj_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(5, 5, proj_r3.budget, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(8, 8, proj_r3.spent, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(11, 11, proj_r3.spent * 0.9, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(14, 14, proj_r3.budget - proj_r3.spent, "1.0-0"));
} }
function ClientDashboard_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 13)(2, "h5", 14);
    i0.ɵɵtext(3, "Portfolio Financial Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 43)(5, "table", 44)(6, "thead", 45)(7, "tr")(8, "th");
    i0.ɵɵtext(9, "Project Asset");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Committed Capital");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Invoiced Spend");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Disbursed Invoices");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Outstanding Balances");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵrepeaterCreate(19, ClientDashboard_Conditional_24_For_20_Template, 15, 17, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵrepeater(ctx_r1.clientProjects());
} }
function ClientDashboard_Conditional_25_For_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 47);
    i0.ɵɵelement(3, "i", 48);
    i0.ɵɵelementStart(4, "span", 29);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td", 49);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "button", 50);
    i0.ɵɵlistener("click", function ClientDashboard_Conditional_25_For_22_Template_button_click_13_listener() { const doc_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.downloadDocument(doc_r5.name)); });
    i0.ɵɵelement(14, "i", 51);
    i0.ɵɵtext(15, " Download ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const doc_r5 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(doc_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(doc_r5.size);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(doc_r5.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(doc_r5.uploadDate);
} }
function ClientDashboard_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 13)(2, "h5", 14);
    i0.ɵɵtext(3, "Assets Blueprints & Documents Locker");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 46);
    i0.ɵɵtext(5, "Access final engineering drafts, geological survey certificates, and concrete cylinder pressure reports.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 43)(7, "table", 44)(8, "thead", 45)(9, "tr")(10, "th");
    i0.ɵɵtext(11, "Document File Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Size");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Format");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Upload Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "tbody");
    i0.ɵɵrepeaterCreate(21, ClientDashboard_Conditional_25_For_22_Template, 16, 4, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(21);
    i0.ɵɵrepeater(ctx_r1.clientDocuments());
} }
function ClientDashboard_Conditional_26_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "div", 54);
    i0.ɵɵelement(2, "img", 55);
    i0.ɵɵelementStart(3, "div", 56)(4, "p", 57);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small", 58);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const photo_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", photo_r6.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(photo_r6.caption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", photo_r6.date, " \u2022 Site Engineer: ", photo_r6.uploadedBy);
} }
function ClientDashboard_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 13)(2, "h5", 14);
    i0.ɵɵtext(3, "Site Progress Galleries");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 52);
    i0.ɵɵrepeaterCreate(5, ClientDashboard_Conditional_26_For_6_Template, 8, 4, "div", 53, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.clientPhotos());
} }
function ClientDashboard_Conditional_27_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const proj_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", proj_r8.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(proj_r8.name);
} }
function ClientDashboard_Conditional_27_For_41_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u2605 ");
} }
function ClientDashboard_Conditional_27_For_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76)(1, "div", 77)(2, "span", 29);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 78);
    i0.ɵɵrepeaterCreate(5, ClientDashboard_Conditional_27_For_41_For_6_Template, 1, 0, null, null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 79);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small", 80);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const fb_r9 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(fb_r9.projectName);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(3, _c0).constructor(fb_r9.rating));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(fb_r9.message);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Submitted: ", fb_r9.date);
} }
function ClientDashboard_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 59)(2, "div", 11)(3, "div", 13)(4, "h5", 14);
    i0.ɵɵtext(5, "Submit Portfolio Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "form", 60);
    i0.ɵɵlistener("ngSubmit", function ClientDashboard_Conditional_27_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitFeedback()); });
    i0.ɵɵelementStart(7, "div", 61)(8, "label", 62);
    i0.ɵɵtext(9, "Select Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "select", 63);
    i0.ɵɵtwoWayListener("ngModelChange", function ClientDashboard_Conditional_27_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.fbProjectName, $event) || (ctx_r1.fbProjectName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(11, ClientDashboard_Conditional_27_For_12_Template, 2, 2, "option", 64, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 61)(14, "label", 62);
    i0.ɵɵtext(15, "Satisfaction Rating (1 to 5 Stars)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 65);
    i0.ɵɵtwoWayListener("ngModelChange", function ClientDashboard_Conditional_27_Template_select_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.fbRating, $event) || (ctx_r1.fbRating = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(17, "option", 66);
    i0.ɵɵtext(18, "\u2B50\u2B50\u2B50\u2B50\u2B50 Excellent Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 67);
    i0.ɵɵtext(20, "\u2B50\u2B50\u2B50\u2B50 Satisfactory");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 68);
    i0.ɵɵtext(22, "\u2B50\u2B50\u2B50 Neutral");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 69);
    i0.ɵɵtext(24, "\u2B50\u2B50 Fair");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 70);
    i0.ɵɵtext(26, "\u2B50 Concerns / Audit Required");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 61)(28, "label", 62);
    i0.ɵɵtext(29, "Comments / Review Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "textarea", 71);
    i0.ɵɵtwoWayListener("ngModelChange", function ClientDashboard_Conditional_27_Template_textarea_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.fbMessage, $event) || (ctx_r1.fbMessage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "button", 72);
    i0.ɵɵelement(32, "i", 73);
    i0.ɵɵtext(33, " Submit Review ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(34, "div", 74)(35, "div", 11)(36, "div", 13)(37, "h5", 14);
    i0.ɵɵtext(38, "Portfolio Review Logs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div", 75);
    i0.ɵɵrepeaterCreate(40, ClientDashboard_Conditional_27_For_41_Template, 11, 4, "div", 76, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.fbProjectName);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.clientProjects());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.fbRating);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.fbMessage);
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r1.clientFeedbacks());
} }
function ClientDashboard_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-workforce-management");
} }
export class ClientDashboard {
    projectService = inject(ProjectService);
    authService = inject(AuthService);
    route = inject(ActivatedRoute);
    queryParams = toSignal(this.route.queryParams);
    get activeModule() {
        return this.queryParams()?.['module'] || 'progress';
    }
    // Active Client Name (Abhishek S)
    clientName = 'Abhishek S';
    // Form Fields - Feedback
    fbRating = 5;
    fbMessage = '';
    fbProjectName = 'Vanguard Heights Commercial Tower';
    // Client Projects (Projects matching Vanguard Realty / Abhishek S)
    clientProjects = computed(() => this.projectService.projects().filter(p => p.clientName === 'Vanguard Realty'), ...(ngDevMode ? [{ debugName: "clientProjects" }] : /* istanbul ignore next */ []));
    totalBudget = computed(() => this.clientProjects().reduce((sum, p) => sum + p.budget, 0), ...(ngDevMode ? [{ debugName: "totalBudget" }] : /* istanbul ignore next */ []));
    totalSpent = computed(() => this.clientProjects().reduce((sum, p) => sum + p.spent, 0), ...(ngDevMode ? [{ debugName: "totalSpent" }] : /* istanbul ignore next */ []));
    averageProgress = computed(() => {
        const projs = this.clientProjects();
        if (projs.length === 0)
            return 0;
        return Math.round(projs.reduce((sum, p) => sum + p.progress, 0) / projs.length);
    }, ...(ngDevMode ? [{ debugName: "averageProgress" }] : /* istanbul ignore next */ []));
    // Project Photos corresponding to client projects
    clientPhotos = computed(() => this.projectService.sitePhotos().filter(photo => this.clientProjects().some(p => p.id === photo.projectId)), ...(ngDevMode ? [{ debugName: "clientPhotos" }] : /* istanbul ignore next */ []));
    // Documents corresponding to client projects
    clientDocuments = computed(() => this.projectService.documents().filter(doc => this.clientProjects().some(p => p.id === doc.projectId)), ...(ngDevMode ? [{ debugName: "clientDocuments" }] : /* istanbul ignore next */ []));
    // Feedback history from this client
    clientFeedbacks = computed(() => this.projectService.feedback().filter(fb => fb.clientName === this.clientName), ...(ngDevMode ? [{ debugName: "clientFeedbacks" }] : /* istanbul ignore next */ []));
    submitFeedback() {
        if (!this.fbMessage) {
            alert('Feedback message cannot be empty.');
            return;
        }
        this.projectService.submitFeedback({
            clientName: this.clientName,
            projectName: this.fbProjectName,
            rating: Number(this.fbRating),
            message: this.fbMessage
        });
        this.fbMessage = ''; // reset
        alert('Thank you! Your feedback has been submitted to Shradha S.');
    }
    downloadDocument(docName) {
        alert(`Downloading blueprint file: ${docName}. This is a simulated download.`);
    }
    static ɵfac = function ClientDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClientDashboard)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ClientDashboard, selectors: [["app-client-dashboard"]], decls: 29, vars: 21, consts: [[1, "container-fluid", "p-0"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "text-dark", "mb-1"], [1, "text-muted", "mb-0"], [1, "badge", "bg-primary", "px-3", "py-2", "fs-6", "rounded-pill"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-md-3"], ["title", "Invested Projects", "icon", "bi-building-fill", "colorType", "primary", 3, "value"], ["title", "Total Investment Pool", "icon", "bi-cash-coin", "colorType", "success", 3, "value"], ["title", "Invoiced To Date", "icon", "bi-wallet2", "colorType", "info", 3, "value"], ["title", "Portfolio Balance", "icon", "bi-currency-dollar", "colorType", "warning", "subtitle", "Remaining Pool", 3, "value"], [1, "card", "border-0", "shadow-sm", "rounded-3"], [1, "row", "g-4"], [1, "card-body", "p-4"], [1, "fw-bold", "text-dark", "mb-3"], [1, "d-flex", "flex-column", "gap-4"], [1, "p-3", "border", "rounded-3", "bg-light", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-md-center", "gap-3"], [1, "d-flex", "gap-3", "align-items-center"], ["alt", "Project image", 1, "rounded-3", "object-fit-cover", 2, "width", "80px", "height", "80px", 3, "src"], [1, "text-muted", "mb-1", "small"], [1, "bi", "bi-geo-alt", "me-1"], [1, "text-muted", "small", "mb-0", "d-none", "d-md-block"], [1, "flex-grow-1", "mx-md-4", 2, "max-width", "250px"], [1, "d-flex", "justify-content-between", "mb-1", "small", "text-muted"], [1, "fw-bold", "text-primary"], [1, "progress", 2, "height", "8px"], [1, "progress-bar", "bg-primary"], [1, "text-muted", "mt-1", "d-block", "small"], [1, "text-start", "text-md-end"], [1, "fw-bold", "text-dark"], [1, "text-muted", "d-block"], [1, "text-secondary", "d-block", "mt-1", "small"], [1, "fw-bold", "text-dark", "mb-4"], [1, "timeline-stepper", "position-relative", "ps-4", "border-start", "border-2", "border-primary-subtle", "py-2"], [1, "timeline-step", "position-relative", "mb-4"], [1, "step-marker", "bg-success", "rounded-circle", "position-absolute", "start-0", "translate-middle-x", 2, "width", "14px", "height", "14px", "margin-left", "-26px", "top", "6px"], [1, "text-muted", "small", "mb-0"], [1, "badge", "bg-success", "mt-1"], [1, "step-marker", "bg-primary", "rounded-circle", "position-absolute", "start-0", "translate-middle-x", 2, "width", "14px", "height", "14px", "margin-left", "-26px", "top", "6px"], [1, "badge", "bg-primary", "mt-1"], [1, "timeline-step", "position-relative"], [1, "step-marker", "bg-secondary", "rounded-circle", "position-absolute", "start-0", "translate-middle-x", 2, "width", "14px", "height", "14px", "margin-left", "-26px", "top", "6px"], [1, "badge", "bg-secondary", "mt-1"], [1, "table-responsive"], [1, "table", "align-middle", "table-hover"], [1, "table-light", "text-muted", "uppercase", "small"], [1, "text-muted", "small"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-file-earmark-pdf-fill", "text-danger", "fs-5"], [1, "text-uppercase", "fw-semibold", 2, "font-size", "11px"], [1, "btn", "btn-outline-primary", "btn-sm", "rounded-pill", 3, "click"], [1, "bi", "bi-download"], [1, "row", "g-3"], [1, "col-md-4"], [1, "card", "border", "rounded-3", "overflow-hidden", "shadow-sm", "h-100"], ["alt", "Site photo", 1, "img-fluid", "object-fit-cover", 2, "height", "200px", "width", "100%", 3, "src"], [1, "card-body", "p-3"], [1, "card-text", "small", "text-dark", "fw-medium", "mb-1"], [1, "text-muted"], [1, "col-lg-5"], [3, "ngSubmit"], [1, "form-group", "mb-3"], [1, "form-label", "fw-semibold", "small", "text-muted"], ["name", "fbProjectName", 1, "form-select", "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["name", "fbRating", 1, "form-select", "form-control", 3, "ngModelChange", "ngModel"], ["value", "5"], ["value", "4"], ["value", "3"], ["value", "2"], ["value", "1"], ["name", "fbMessage", "required", "", "rows", "4", "placeholder", "Share satisfaction notes or specify points requiring PM revision...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2.5"], [1, "bi", "bi-chat-left-text-fill", "me-1"], [1, "col-lg-7"], [1, "d-flex", "flex-column", "gap-3"], [1, "p-3", "border", "rounded-3", "bg-light"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "text-warning"], [1, "text-muted", "small", "mb-1"], [1, "text-secondary", "d-block", "text-end", 2, "font-size", "11px"]], template: function ClientDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
            i0.ɵɵtext(4, "Investor Portfolio Portal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Abhishek S \u2022 Vanguard Realty \u2022 Monitor construction asset progression and budget expenditures.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div")(8, "span", 4);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 5)(11, "div", 6);
            i0.ɵɵelement(12, "app-dashboard-card", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 6);
            i0.ɵɵelement(14, "app-dashboard-card", 8);
            i0.ɵɵpipe(15, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 6);
            i0.ɵɵelement(17, "app-dashboard-card", 9);
            i0.ɵɵpipe(18, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 6);
            i0.ɵɵelement(20, "app-dashboard-card", 10);
            i0.ɵɵpipe(21, "number");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(22, ClientDashboard_Conditional_22_Template, 7, 0, "div", 11);
            i0.ɵɵconditionalCreate(23, ClientDashboard_Conditional_23_Template, 37, 0, "div", 11);
            i0.ɵɵconditionalCreate(24, ClientDashboard_Conditional_24_Template, 21, 0, "div", 11);
            i0.ɵɵconditionalCreate(25, ClientDashboard_Conditional_25_Template, 23, 0, "div", 11);
            i0.ɵɵconditionalCreate(26, ClientDashboard_Conditional_26_Template, 7, 0, "div", 11);
            i0.ɵɵconditionalCreate(27, ClientDashboard_Conditional_27_Template, 42, 3, "div", 12);
            i0.ɵɵconditionalCreate(28, ClientDashboard_Conditional_28_Template, 1, 0, "app-workforce-management");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1(" Portfolio Progress: ", ctx.averageProgress(), "% ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.clientProjects().length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", "$" + i0.ɵɵpipeBind2(15, 12, ctx.totalBudget(), "1.0-0"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", "$" + i0.ɵɵpipeBind2(18, 15, ctx.totalSpent(), "1.0-0"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", "$" + i0.ɵɵpipeBind2(21, 18, ctx.totalBudget() - ctx.totalSpent(), "1.0-0"));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.activeModule === "progress" ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "timeline" ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "budget" ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "documents" ? 25 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "images" ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "feedback" ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "workforce" ? 28 : -1);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, RouterModule, DashboardCardComponent, WorkforceManagementComponent, i2.DecimalPipe], styles: [".timeline-step[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n\n.step-marker[_ngcontent-%COMP%] {\n  z-index: 2;\n  box-shadow: 0 0 0 4px #e0e7ff;\n}\n\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease;\n}\n\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClientDashboard, [{
        type: Component,
        args: [{ selector: 'app-client-dashboard', standalone: true, imports: [CommonModule, FormsModule, RouterModule, DashboardCardComponent, WorkforceManagementComponent], template: "<div class=\"container-fluid p-0\">\n\n  <!-- Header -->\n  <div class=\"d-flex justify-content-between align-items-center mb-4\">\n    <div>\n      <h2 class=\"fw-bold text-dark mb-1\">Investor Portfolio Portal</h2>\n      <p class=\"text-muted mb-0\">Abhishek S &bull; Vanguard Realty &bull; Monitor construction asset progression and budget expenditures.</p>\n    </div>\n    <div>\n      <span class=\"badge bg-primary px-3 py-2 fs-6 rounded-pill\">\n        Portfolio Progress: {{ averageProgress() }}%\n      </span>\n    </div>\n  </div>\n\n  <!-- KPI summary cards -->\n  <div class=\"row g-3 mb-4\">\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Invested Projects\" [value]=\"clientProjects().length\" icon=\"bi-building-fill\" colorType=\"primary\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Total Investment Pool\" [value]=\"'$' + (totalBudget() | number:'1.0-0')\" icon=\"bi-cash-coin\" colorType=\"success\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Invoiced To Date\" [value]=\"'$' + (totalSpent() | number:'1.0-0')\" icon=\"bi-wallet2\" colorType=\"info\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-md-3\">\n      <app-dashboard-card title=\"Portfolio Balance\" [value]=\"'$' + ((totalBudget() - totalSpent()) | number:'1.0-0')\" icon=\"bi-currency-dollar\" colorType=\"warning\" subtitle=\"Remaining Pool\"></app-dashboard-card>\n    </div>\n  </div>\n\n  <!-- Modules views -->\n  @if (activeModule === 'progress') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Portfolio Assets Progression</h5>\n        \n        <div class=\"d-flex flex-column gap-4\">\n          @for (proj of clientProjects(); track proj.id) {\n            <div class=\"p-3 border rounded-3 bg-light d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3\">\n              <div class=\"d-flex gap-3 align-items-center\">\n                <img [src]=\"proj.image\" alt=\"Project image\" class=\"rounded-3 object-fit-cover\" style=\"width: 80px; height: 80px;\">\n                <div>\n                  <h6 class=\"fw-bold text-dark mb-1\">{{ proj.name }}</h6>\n                  <p class=\"text-muted mb-1 small\"><i class=\"bi bi-geo-alt me-1\"></i>{{ proj.location }}</p>\n                  <p class=\"text-muted small mb-0 d-none d-md-block\">{{ proj.description }}</p>\n                </div>\n              </div>\n\n              <div class=\"flex-grow-1 mx-md-4\" style=\"max-width: 250px;\">\n                <div class=\"d-flex justify-content-between mb-1 small text-muted\">\n                  <span>Project Completion</span>\n                  <span class=\"fw-bold text-primary\">{{ proj.progress }}%</span>\n                </div>\n                <div class=\"progress\" style=\"height: 8px;\">\n                  <div class=\"progress-bar bg-primary\" [style.width.%]=\"proj.progress\"></div>\n                </div>\n                <small class=\"text-muted mt-1 d-block small\">Status: <strong>{{ proj.status }}</strong></small>\n              </div>\n\n              <div class=\"text-start text-md-end\">\n                <div class=\"fw-bold text-dark\">Invested: ${{ proj.budget | number:'1.0-0' }}</div>\n                <small class=\"text-muted d-block\">Spent: ${{ proj.spent | number:'1.0-0' }}</small>\n                <small class=\"text-secondary d-block mt-1 small\">Manager: {{ proj.manager }}</small>\n              </div>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'timeline') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-4\">Construction Milestones Checklist</h5>\n        \n        <div class=\"timeline-stepper position-relative ps-4 border-start border-2 border-primary-subtle py-2\">\n          \n          <div class=\"timeline-step position-relative mb-4\">\n            <div class=\"step-marker bg-success rounded-circle position-absolute start-0 translate-middle-x\" style=\"width: 14px; height: 14px; margin-left: -26px; top: 6px;\"></div>\n            <h6 class=\"fw-bold text-dark mb-1\">Site Mobilization & Engineering Permits</h6>\n            <p class=\"text-muted small mb-0\">Local building code approvals and initial machinery layouts finalized.</p>\n            <small class=\"badge bg-success mt-1\">Verified</small>\n          </div>\n\n          <div class=\"timeline-step position-relative mb-4\">\n            <div class=\"step-marker bg-success rounded-circle position-absolute start-0 translate-middle-x\" style=\"width: 14px; height: 14px; margin-left: -26px; top: 6px;\"></div>\n            <h6 class=\"fw-bold text-dark mb-1\">Foundation Pour & Retaining Shoring</h6>\n            <p class=\"text-muted small mb-0\">Deep concrete diaphragm wall structural core completed.</p>\n            <small class=\"badge bg-success mt-1\">Verified</small>\n          </div>\n\n          <div class=\"timeline-step position-relative mb-4\">\n            <div class=\"step-marker bg-primary rounded-circle position-absolute start-0 translate-middle-x\" style=\"width: 14px; height: 14px; margin-left: -26px; top: 6px;\"></div>\n            <h6 class=\"fw-bold text-dark mb-1\">Structural Frame Erection (Level 1 to 10)</h6>\n            <p class=\"text-muted small mb-0\">Active core structural column placement in progress. Erection rate at 55%.</p>\n            <small class=\"badge bg-primary mt-1\">In Progress</small>\n          </div>\n\n          <div class=\"timeline-step position-relative\">\n            <div class=\"step-marker bg-secondary rounded-circle position-absolute start-0 translate-middle-x\" style=\"width: 14px; height: 14px; margin-left: -26px; top: 6px;\"></div>\n            <h6 class=\"fw-bold text-dark mb-1\">Curtain Glass Wall Installation</h6>\n            <p class=\"text-muted small mb-0\">Expected to commence immediately upon level columns reaching L12 structural stability.</p>\n            <small class=\"badge bg-secondary mt-1\">Pending Target</small>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'budget') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Portfolio Financial Summary</h5>\n        \n        <div class=\"table-responsive\">\n          <table class=\"table align-middle table-hover\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>Project Asset</th>\n                <th>Committed Capital</th>\n                <th>Invoiced Spend</th>\n                <th>Disbursed Invoices</th>\n                <th>Outstanding Balances</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (proj of clientProjects(); track proj.id) {\n                <tr>\n                  <td class=\"fw-bold text-dark\">{{ proj.name }}</td>\n                  <td>${{ proj.budget | number:'1.0-0' }}</td>\n                  <td>${{ proj.spent | number:'1.0-0' }}</td>\n                  <td>${{ (proj.spent * 0.9) | number:'1.0-0' }}</td>\n                  <td class=\"fw-bold text-primary\">${{ (proj.budget - proj.spent) | number:'1.0-0' }}</td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'documents') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Assets Blueprints & Documents Locker</h5>\n        <p class=\"text-muted small\">Access final engineering drafts, geological survey certificates, and concrete cylinder pressure reports.</p>\n\n        <div class=\"table-responsive\">\n          <table class=\"table align-middle table-hover\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>Document File Name</th>\n                <th>Size</th>\n                <th>Format</th>\n                <th>Upload Date</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (doc of clientDocuments(); track doc.id) {\n                <tr>\n                  <td>\n                    <div class=\"d-flex align-items-center gap-2\">\n                      <i class=\"bi bi-file-earmark-pdf-fill text-danger fs-5\"></i>\n                      <span class=\"fw-bold text-dark\">{{ doc.name }}</span>\n                    </div>\n                  </td>\n                  <td>{{ doc.size }}</td>\n                  <td class=\"text-uppercase fw-semibold\" style=\"font-size: 11px;\">{{ doc.type }}</td>\n                  <td>{{ doc.uploadDate }}</td>\n                  <td>\n                    <button class=\"btn btn-outline-primary btn-sm rounded-pill\" (click)=\"downloadDocument(doc.name)\">\n                      <i class=\"bi bi-download\"></i> Download\n                    </button>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'images') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Site Progress Galleries</h5>\n        \n        <div class=\"row g-3\">\n          @for (photo of clientPhotos(); track photo.id) {\n            <div class=\"col-md-4\">\n              <div class=\"card border rounded-3 overflow-hidden shadow-sm h-100\">\n                <img [src]=\"photo.url\" alt=\"Site photo\" class=\"img-fluid object-fit-cover\" style=\"height: 200px; width: 100%;\">\n                <div class=\"card-body p-3\">\n                  <p class=\"card-text small text-dark fw-medium mb-1\">{{ photo.caption }}</p>\n                  <small class=\"text-muted\">{{ photo.date }} &bull; Site Engineer: {{ photo.uploadedBy }}</small>\n                </div>\n              </div>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'feedback') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-5\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Submit Portfolio Feedback</h5>\n            \n            <form (ngSubmit)=\"submitFeedback()\">\n              \n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Select Project</label>\n                <select class=\"form-select form-control\" name=\"fbProjectName\" [(ngModel)]=\"fbProjectName\">\n                  @for (proj of clientProjects(); track proj.id) {\n                    <option [value]=\"proj.name\">{{ proj.name }}</option>\n                  }\n                </select>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Satisfaction Rating (1 to 5 Stars)</label>\n                <select class=\"form-select form-control\" name=\"fbRating\" [(ngModel)]=\"fbRating\">\n                  <option value=\"5\">\u2B50\u2B50\u2B50\u2B50\u2B50 Excellent Progress</option>\n                  <option value=\"4\">\u2B50\u2B50\u2B50\u2B50 Satisfactory</option>\n                  <option value=\"3\">\u2B50\u2B50\u2B50 Neutral</option>\n                  <option value=\"2\">\u2B50\u2B50 Fair</option>\n                  <option value=\"1\">\u2B50 Concerns / Audit Required</option>\n                </select>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Comments / Review Details</label>\n                <textarea name=\"fbMessage\" [(ngModel)]=\"fbMessage\" required rows=\"4\" class=\"form-control\" placeholder=\"Share satisfaction notes or specify points requiring PM revision...\"></textarea>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary w-100 py-2.5\">\n                <i class=\"bi bi-chat-left-text-fill me-1\"></i> Submit Review\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-7\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Portfolio Review Logs</h5>\n            \n            <div class=\"d-flex flex-column gap-3\">\n              @for (fb of clientFeedbacks(); track fb.id) {\n                <div class=\"p-3 border rounded-3 bg-light\">\n                  <div class=\"d-flex justify-content-between align-items-center mb-1\">\n                    <span class=\"fw-bold text-dark\">{{ fb.projectName }}</span>\n                    <span class=\"text-warning\">\n                      @for (star of [].constructor(fb.rating); track $index) {\n                        \u2605\n                      }\n                    </span>\n                  </div>\n                  <p class=\"text-muted small mb-1\">{{ fb.message }}</p>\n                  <small class=\"text-secondary d-block text-end\" style=\"font-size: 11px;\">Submitted: {{ fb.date }}</small>\n                </div>\n              }\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'workforce') {\n    <app-workforce-management></app-workforce-management>\n  }\n</div>\n", styles: [".timeline-step {\n  padding-bottom: 24px;\n}\n\n.step-marker {\n  z-index: 2;\n  box-shadow: 0 0 0 4px #e0e7ff;\n}\n\n.table-hover tbody tr {\n  transition: background-color 0.15s ease;\n}\n\n.table-hover tbody tr:hover {\n  background-color: #f8fafc;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ClientDashboard, { className: "ClientDashboard", filePath: "src/app/pages/client/dashboard/dashboard.ts", lineNumber: 19 }); })();
