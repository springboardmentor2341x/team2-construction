import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../../../services/project.service';
import { AuthService } from '../../../services/auth.service';
import { DashboardCardComponent } from '../../../components/dashboard-card/dashboard-card';
import { ChartsComponent } from '../../../components/charts/charts';
import { WorkforceManagementComponent } from '../../../components/workforce-management/workforce-management';
import { ProcurementManagementComponent } from '../../../components/procurement-management/procurement-management';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const _c1 = () => [5.2, 8.4, 12.1, 14.8, 19.3, 22.5, 25.8];
const _c2 = () => ["In Progress", "Planning", "Completed", "Delayed"];
const _c3 = () => [2, 1, 0, 1];
const _c4 = () => ["#0d6efd", "#ffc107", "#198754", "#dc3545"];
const _c5 = () => ["#0d6efd", "#20c997"];
const _c6 = () => ["Vanguard Tower", "Riverfront II", "Metro Transit", "Eco-Resort"];
const _c7 = () => [12.5, 8.2, 15, 5.4];
const _c8 = () => [9.1, 6.7, 8.3, 3.2];
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.title;
function AdministratorDashboard_Conditional_20_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small", 26);
    i0.ɵɵelement(5, "i", 27);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td")(12, "div", 28)(13, "div", 29);
    i0.ɵɵelement(14, "div", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 31);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "td")(18, "span", 32);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const proj_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(proj_r1.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(proj_r1.location);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(proj_r1.clientName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(proj_r1.manager);
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("width", proj_r1.progress, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", proj_r1.progress, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", proj_r1.status === "Completed")("bg-primary", proj_r1.status === "In Progress")("bg-warning", proj_r1.status === "Planning")("bg-danger", proj_r1.status === "Delayed");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", proj_r1.status, " ");
} }
function AdministratorDashboard_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 17);
    i0.ɵɵelement(2, "app-chart", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 17);
    i0.ɵɵelement(4, "app-chart", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 13)(6, "div", 20)(7, "h5", 21);
    i0.ɵɵtext(8, "Live Projects Status Feed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 22)(10, "table", 23)(11, "thead", 24)(12, "tr")(13, "th");
    i0.ɵɵtext(14, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Client");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "tbody");
    i0.ɵɵrepeaterCreate(24, AdministratorDashboard_Conditional_20_For_25_Template, 20, 16, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", i0.ɵɵpureFunction0(5, _c0))("data", i0.ɵɵpureFunction0(6, _c1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", i0.ɵɵpureFunction0(7, _c2))("data", i0.ɵɵpureFunction0(8, _c3))("customColors", i0.ɵɵpureFunction0(9, _c4));
    i0.ɵɵadvance(20);
    i0.ɵɵrepeater(ctx_r1.projectService.projects());
} }
function AdministratorDashboard_Conditional_21_For_59_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td")(6, "select", 51, 0);
    i0.ɵɵlistener("change", function AdministratorDashboard_Conditional_21_For_59_Template_select_change_6_listener() { const u_r5 = i0.ɵɵrestoreView(_r4).$implicit; const roleSelect_r6 = i0.ɵɵreference(7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateUserRole(u_r5.id, roleSelect_r6.value)); });
    i0.ɵɵelementStart(8, "option", 40);
    i0.ɵɵtext(9, "Admin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 41);
    i0.ɵɵtext(11, "Project Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 42);
    i0.ɵɵtext(13, "Site Engineer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 43);
    i0.ɵɵtext(15, "Contractor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 44);
    i0.ɵɵtext(17, "Worker");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 45);
    i0.ɵɵtext(19, "Client");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "td");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td")(23, "button", 52);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_21_For_59_Template_button_click_23_listener() { const u_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteUser(u_r5.id)); });
    i0.ɵɵelement(24, "i", 53);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const u_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r5.email);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", u_r5.role);
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(u_r5.company);
} }
function AdministratorDashboard_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 33)(2, "div", 13)(3, "div", 20)(4, "h5", 21);
    i0.ɵɵtext(5, "Register Platform User");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "form", 34);
    i0.ɵɵlistener("ngSubmit", function AdministratorDashboard_Conditional_21_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addUser()); });
    i0.ɵɵelementStart(7, "div", 35)(8, "label", 36);
    i0.ɵɵtext(9, "Full Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_21_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newUserName, $event) || (ctx_r1.newUserName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 35)(12, "label", 36);
    i0.ɵɵtext(13, "Email Address *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_21_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newUserEmail, $event) || (ctx_r1.newUserEmail = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 35)(16, "label", 36);
    i0.ɵɵtext(17, "Platform Role *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_21_Template_select_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newUserRole, $event) || (ctx_r1.newUserRole = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(19, "option", 40);
    i0.ɵɵtext(20, "Administrator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 41);
    i0.ɵɵtext(22, "Project Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 42);
    i0.ɵɵtext(24, "Site Engineer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 43);
    i0.ɵɵtext(26, "Contractor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "option", 44);
    i0.ɵɵtext(28, "Worker");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "option", 45);
    i0.ɵɵtext(30, "Client");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 35)(32, "label", 36);
    i0.ɵɵtext(33, "Company affiliation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_21_Template_input_ngModelChange_34_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newUserCompany, $event) || (ctx_r1.newUserCompany = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "button", 47);
    i0.ɵɵelement(36, "i", 48);
    i0.ɵɵtext(37, " Register User ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(38, "div", 49)(39, "div", 13)(40, "div", 20)(41, "h5", 21);
    i0.ɵɵtext(42, "Platform User Registry");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 22)(44, "table", 50)(45, "thead", 24)(46, "tr")(47, "th");
    i0.ɵɵtext(48, "User");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "th");
    i0.ɵɵtext(50, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "th");
    i0.ɵɵtext(52, "Role Permission");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "th");
    i0.ɵɵtext(54, "Affiliated Company");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "th");
    i0.ɵɵtext(56, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "tbody");
    i0.ɵɵrepeaterCreate(58, AdministratorDashboard_Conditional_21_For_59_Template, 25, 4, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newUserName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newUserEmail);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newUserRole);
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newUserCompany);
    i0.ɵɵadvance(24);
    i0.ɵɵrepeater(ctx_r1.usersRegistry());
} }
function AdministratorDashboard_Conditional_22_For_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small", 26);
    i0.ɵɵelement(5, "i", 27);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "span", 32);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const proj_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(proj_r8.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(proj_r8.location);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(9, 13, proj_r8.budget, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(proj_r8.manager);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", proj_r8.status === "Completed")("bg-primary", proj_r8.status === "In Progress")("bg-warning", proj_r8.status === "Planning")("bg-danger", proj_r8.status === "Delayed");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", proj_r8.status, " ");
} }
function AdministratorDashboard_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 54)(2, "div", 13)(3, "div", 20)(4, "h5", 21);
    i0.ɵɵtext(5, "Provision New Construction Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "form", 34);
    i0.ɵɵlistener("ngSubmit", function AdministratorDashboard_Conditional_22_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.provisionProject()); });
    i0.ɵɵelementStart(7, "div", 35)(8, "label", 36);
    i0.ɵɵtext(9, "Project Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 55);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_22_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newProjName, $event) || (ctx_r1.newProjName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 56)(12, "div", 57)(13, "label", 36);
    i0.ɵɵtext(14, "Site Location *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 58);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_22_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newProjLocation, $event) || (ctx_r1.newProjLocation = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 57)(17, "label", 36);
    i0.ɵɵtext(18, "Client Owner *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_22_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newProjClient, $event) || (ctx_r1.newProjClient = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 56)(21, "div", 57)(22, "label", 36);
    i0.ɵɵtext(23, "Assigned Capital Pool *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 60);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_22_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newProjBudget, $event) || (ctx_r1.newProjBudget = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 57)(26, "label", 36);
    i0.ɵɵtext(27, "Project Manager *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "select", 61);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_22_Template_select_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newProjManager, $event) || (ctx_r1.newProjManager = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(29, "option", 62);
    i0.ɵɵtext(30, "Shradha S");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 63);
    i0.ɵɵtext(32, "Shireen F");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(33, "div", 35)(34, "label", 36);
    i0.ɵɵtext(35, "Project Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "textarea", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_22_Template_textarea_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newProjDesc, $event) || (ctx_r1.newProjDesc = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "button", 47);
    i0.ɵɵelement(38, "i", 65);
    i0.ɵɵtext(39, " Provision Asset ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(40, "div", 66)(41, "div", 13)(42, "div", 20)(43, "h5", 21);
    i0.ɵɵtext(44, "System-wide Active Projects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 22)(46, "table", 50)(47, "thead", 24)(48, "tr")(49, "th");
    i0.ɵɵtext(50, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "th");
    i0.ɵɵtext(52, "Budget Pool");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "th");
    i0.ɵɵtext(54, "Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "th");
    i0.ɵɵtext(56, "Asset Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "tbody");
    i0.ɵɵrepeaterCreate(58, AdministratorDashboard_Conditional_22_For_59_Template, 15, 16, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newProjName);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newProjLocation);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newProjClient);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newProjBudget);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newProjManager);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newProjDesc);
    i0.ɵɵadvance(22);
    i0.ɵɵrepeater(ctx_r1.projectService.projects());
} }
function AdministratorDashboard_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-workforce-management");
} }
function AdministratorDashboard_Conditional_24_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
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
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r9.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r9.contactPerson);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r9.specialty);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r9.activeProjects);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", c_r9.status === "Active")("bg-warning", c_r9.status === "Under Review")("bg-danger", c_r9.status === "Suspended");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", c_r9.status, " ");
} }
function AdministratorDashboard_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 20)(2, "h5", 21);
    i0.ɵɵtext(3, "Subcontractor Companies Registry");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 22)(5, "table", 67)(6, "thead", 24)(7, "tr")(8, "th");
    i0.ɵɵtext(9, "Company Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Contact Representative");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Core Trade Specialty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Active Projects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Corporate Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵrepeaterCreate(19, AdministratorDashboard_Conditional_24_For_20_Template, 12, 11, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵrepeater(ctx_r1.contractorsData());
} }
function AdministratorDashboard_Conditional_25_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", cat_r11.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cat_r11.name);
} }
function AdministratorDashboard_Conditional_25_For_78_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 89);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div", 25);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small", 90);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "span", 91);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "span", 32);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td", 92);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td")(20, "button", 93);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_25_For_78_Template_button_click_20_listener() { const r_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteEquipment(r_r13.id)); });
    i0.ɵɵelement(21, "i", 94);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const r_r13 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r13.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r13.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Operator: ", r_r13.responsiblePerson);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r13.categoryName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r13.currentLocation);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", r_r13.status === "Available")("bg-primary", r_r13.status === "Allocated")("bg-info", r_r13.status === "Operating")("bg-warning", r_r13.status === "Under Maintenance")("bg-danger", r_r13.status === "Out of Service");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", r_r13.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", r_r13.hourlyCost, "/h");
} }
function AdministratorDashboard_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 33)(2, "div", 13)(3, "div", 20)(4, "h5", 68);
    i0.ɵɵelement(5, "i", 69);
    i0.ɵɵtext(6, "Register Equipment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 70);
    i0.ɵɵtext(8, "Add new construction machinery or equipment to the enterprise inventory.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "form", 34);
    i0.ɵɵlistener("ngSubmit", function AdministratorDashboard_Conditional_25_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addEquipment()); });
    i0.ɵɵelementStart(10, "div", 71)(11, "label", 36);
    i0.ɵɵtext(12, "Equipment ID *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 72);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_25_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newEqId, $event) || (ctx_r1.newEqId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 71)(15, "label", 36);
    i0.ɵɵtext(16, "Equipment Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 73);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_25_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newEqName, $event) || (ctx_r1.newEqName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 71)(19, "label", 36);
    i0.ɵɵtext(20, "Category *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "select", 74);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_25_Template_select_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newEqCategory, $event) || (ctx_r1.newEqCategory = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(22, AdministratorDashboard_Conditional_25_For_23_Template, 2, 2, "option", 75, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 76)(25, "div", 77)(26, "label", 36);
    i0.ɵɵtext(27, "Model Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "input", 78);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_25_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newEqModel, $event) || (ctx_r1.newEqModel = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 77)(30, "label", 36);
    i0.ɵɵtext(31, "Serial Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "input", 79);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_25_Template_input_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newEqSerial, $event) || (ctx_r1.newEqSerial = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "div", 76)(34, "div", 77)(35, "label", 36);
    i0.ɵɵtext(36, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "input", 80);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_25_Template_input_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newEqLocation, $event) || (ctx_r1.newEqLocation = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 77)(39, "label", 36);
    i0.ɵɵtext(40, "Hourly Rate ($)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "input", 81);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_25_Template_input_ngModelChange_41_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newEqCost, $event) || (ctx_r1.newEqCost = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "div", 35)(43, "label", 36);
    i0.ɵɵtext(44, "Responsible Person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_25_Template_input_ngModelChange_45_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newEqPerson, $event) || (ctx_r1.newEqPerson = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "button", 83);
    i0.ɵɵelement(47, "i", 84);
    i0.ɵɵtext(48, " Register Asset ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(49, "div", 49)(50, "div", 13)(51, "div", 20)(52, "div", 85)(53, "h5", 86);
    i0.ɵɵelement(54, "i", 87);
    i0.ɵɵtext(55, "Enterprise Equipment Registry");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "span", 88);
    i0.ɵɵtext(57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 22)(59, "table", 67)(60, "thead", 24)(61, "tr")(62, "th");
    i0.ɵɵtext(63, "ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "th");
    i0.ɵɵtext(65, "Equipment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "th");
    i0.ɵɵtext(67, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "th");
    i0.ɵɵtext(69, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "th");
    i0.ɵɵtext(71, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "th");
    i0.ɵɵtext(73, "Rate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "th");
    i0.ɵɵtext(75, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(76, "tbody");
    i0.ɵɵrepeaterCreate(77, AdministratorDashboard_Conditional_25_For_78_Template, 22, 17, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newEqId);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newEqName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newEqCategory);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.projectService.resourceCategories());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newEqModel);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newEqSerial);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newEqLocation);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newEqCost);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newEqPerson);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate1("", ctx_r1.projectService.resources().length, " Assets");
    i0.ɵɵadvance(20);
    i0.ɵɵrepeater(ctx_r1.projectService.resources());
} }
function AdministratorDashboard_Conditional_26_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 89);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div", 25);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small", 90);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td")(17, "span", 32);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const a_r14 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r14.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r14.resourceName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", a_r14.resourceCategory, " \u2022 ", a_r14.resourceId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r14.projectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", a_r14.allocationDate, " \u2192 ", a_r14.expectedReturnDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r14.responsiblePerson);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-primary", a_r14.status === "Allocated" || a_r14.status === "Active")("bg-success", a_r14.status === "Returned");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", a_r14.status, " ");
} }
function AdministratorDashboard_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 20)(2, "h5", 21);
    i0.ɵɵelement(3, "i", 95);
    i0.ɵɵtext(4, "Global Equipment Allocations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 22)(6, "table", 67)(7, "thead", 24)(8, "tr")(9, "th");
    i0.ɵɵtext(10, "Allocation ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Equipment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Dates");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Responsible Person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "tbody");
    i0.ɵɵrepeaterCreate(22, AdministratorDashboard_Conditional_26_For_23_Template, 19, 13, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(22);
    i0.ɵɵrepeater(ctx_r1.projectService.resourceAllocations());
} }
function AdministratorDashboard_Conditional_27_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 89);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td")(9, "span", 91);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td", 92);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td")(19, "span", 32);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td", 97);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r15 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r15.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r15.resourceName);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" (", m_r15.resourceId, ")");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r15.maintenanceType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r15.nextMaintenanceDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r15.serviceEngineer);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(17, 15, m_r15.maintenanceCost, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("bg-warning", m_r15.status === "Scheduled" || m_r15.status === "In Progress")("bg-success", m_r15.status === "Completed")("bg-danger", m_r15.status === "Overdue");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", m_r15.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r15.remarks);
} }
function AdministratorDashboard_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 20)(2, "h5", 21);
    i0.ɵɵelement(3, "i", 96);
    i0.ɵɵtext(4, "Global Maintenance Records & Overhauls");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 22)(6, "table", 67)(7, "thead", 24)(8, "tr")(9, "th");
    i0.ɵɵtext(10, "ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Equipment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Next Service Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Engineer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Cost");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Remarks");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "tbody");
    i0.ɵɵrepeaterCreate(26, AdministratorDashboard_Conditional_27_For_27_Template, 23, 18, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(26);
    i0.ɵɵrepeater(ctx_r1.projectService.maintenanceRecords());
} }
function AdministratorDashboard_Conditional_28_For_20_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 101);
    i0.ɵɵtext(1, "Critical Reorder");
    i0.ɵɵelementEnd();
} }
function AdministratorDashboard_Conditional_28_For_20_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 102);
    i0.ɵɵtext(1, "Optimal");
    i0.ɵɵelementEnd();
} }
function AdministratorDashboard_Conditional_28_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵconditionalCreate(8, AdministratorDashboard_Conditional_28_For_20_Conditional_8_Template, 2, 0, "span", 101)(9, AdministratorDashboard_Conditional_28_For_20_Conditional_9_Template, 2, 0, "span", 102);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r16 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r16.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", m_r16.inStock, " ", m_r16.unit);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", m_r16.reorderLevel, " ", m_r16.unit);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(m_r16.inStock <= m_r16.reorderLevel ? 8 : 9);
} }
function AdministratorDashboard_Conditional_28_For_30_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 105)(1, "button", 106);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_28_For_30_Conditional_15_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r17); const req_r18 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.rejectInventoryRequest(req_r18.id)); });
    i0.ɵɵtext(2, "Reject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 107);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_28_For_30_Conditional_15_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r17); const req_r18 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.approveInventoryRequest(req_r18.id)); });
    i0.ɵɵtext(4, "Approve");
    i0.ɵɵelementEnd()();
} }
function AdministratorDashboard_Conditional_28_For_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 100)(1, "div", 103)(2, "span", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 32);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 97);
    i0.ɵɵtext(7, " Requested by: ");
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " \u2022 Quantity: ");
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 104);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(15, AdministratorDashboard_Conditional_28_For_30_Conditional_15_Template, 5, 0, "div", 105);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const req_r18 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(req_r18.materialName);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bg-warning", req_r18.status === "Pending")("bg-success", req_r18.status === "Approved")("bg-danger", req_r18.status === "Rejected");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", req_r18.status, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(req_r18.requestedBy);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(req_r18.quantity);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Project Site: ", req_r18.projectName, " \u2022 Date: ", req_r18.requestDate);
    i0.ɵɵadvance();
    i0.ɵɵconditional(req_r18.status === "Pending" ? 15 : -1);
} }
function AdministratorDashboard_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 17)(2, "div", 13)(3, "div", 20)(4, "h5", 21);
    i0.ɵɵtext(5, "Inventory Material Stock levels");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 22)(7, "table", 23)(8, "thead", 24)(9, "tr")(10, "th");
    i0.ɵɵtext(11, "Item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Current Stock");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Buffer level");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵrepeaterCreate(19, AdministratorDashboard_Conditional_28_For_20_Template, 10, 6, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(21, "div", 17)(22, "div", 13)(23, "div", 20)(24, "h5", 21);
    i0.ɵɵtext(25, "Contractors Dispatch Requests");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "p", 98);
    i0.ɵɵtext(27, "Approve or reject contractor concrete/material requests. Approvals deduct stock.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 99);
    i0.ɵɵrepeaterCreate(29, AdministratorDashboard_Conditional_28_For_30_Template, 16, 13, "div", 100, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵrepeater(ctx_r1.projectService.materials());
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r1.projectService.materialRequests());
} }
function AdministratorDashboard_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-procurement-management");
} }
function AdministratorDashboard_Conditional_30_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-chart", 108);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("labels", ctx_r1.budgetChartLabels())("data", ctx_r1.budgetChartCommitted())("data2", ctx_r1.budgetChartSpent())("customColors", i0.ɵɵpureFunction0(4, _c5));
} }
function AdministratorDashboard_Conditional_30_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-chart", 108);
} if (rf & 2) {
    i0.ɵɵproperty("labels", i0.ɵɵpureFunction0(4, _c6))("data", i0.ɵɵpureFunction0(5, _c7))("data2", i0.ɵɵpureFunction0(6, _c8))("customColors", i0.ɵɵpureFunction0(7, _c5));
} }
function AdministratorDashboard_Conditional_30_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
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
    i0.ɵɵelementStart(9, "td", 109);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r19 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r19.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(5, 4, p_r19.budget, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(8, 7, p_r19.spent, "1.0-0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(11, 10, p_r19.budget - p_r19.spent, "1.0-0"));
} }
function AdministratorDashboard_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 17);
    i0.ɵɵconditionalCreate(2, AdministratorDashboard_Conditional_30_Conditional_2_Template, 1, 5, "app-chart", 108)(3, AdministratorDashboard_Conditional_30_Conditional_3_Template, 1, 8, "app-chart", 108);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 17)(5, "div", 13)(6, "div", 20)(7, "h5", 21);
    i0.ɵɵtext(8, "Portfolio Financial Sheet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 22)(10, "table", 67)(11, "thead", 24)(12, "tr")(13, "th");
    i0.ɵɵtext(14, "Asset Site");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Committed Pool");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Spend To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Remaining Buffer");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "tbody");
    i0.ɵɵrepeaterCreate(22, AdministratorDashboard_Conditional_30_For_23_Template, 12, 13, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.budgetChartLabels().length > 0 ? 2 : 3);
    i0.ɵɵadvance(20);
    i0.ɵɵrepeater(ctx_r1.projectService.projects());
} }
function AdministratorDashboard_Conditional_31_For_11_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 123);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_31_For_11_Conditional_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const rpt_r21 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.exportExcel(rpt_r21)); });
    i0.ɵɵelement(1, "i", 124);
    i0.ɵɵtext(2, " Export Excel ");
    i0.ɵɵelementEnd();
} }
function AdministratorDashboard_Conditional_31_For_11_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 125);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_31_For_11_Conditional_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const rpt_r21 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.exportPDF(rpt_r21)); });
    i0.ɵɵelement(1, "i", 124);
    i0.ɵɵtext(2, " Export PDF ");
    i0.ɵɵelementEnd();
} }
function AdministratorDashboard_Conditional_31_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 112)(1, "div", 114)(2, "h6", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 115);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 116)(7, "span", 32);
    i0.ɵɵelement(8, "i", 117);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 118)(11, "button", 119);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_31_For_11_Template_button_click_11_listener() { const rpt_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openReportPreview(rpt_r21)); });
    i0.ɵɵelement(12, "i", 120);
    i0.ɵɵtext(13, " Preview ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(14, AdministratorDashboard_Conditional_31_For_11_Conditional_14_Template, 3, 0, "button", 121)(15, AdministratorDashboard_Conditional_31_For_11_Conditional_15_Template, 3, 0, "button", 122);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const rpt_r21 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(rpt_r21.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rpt_r21.description);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bg-success", rpt_r21.format === "excel")("bg-danger", rpt_r21.format === "pdf");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bi-file-earmark-spreadsheet", rpt_r21.format === "excel")("bi-file-earmark-pdf", rpt_r21.format === "pdf");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", rpt_r21.format === "excel" ? "Excel / CSV" : "PDF Report", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(rpt_r21.format === "excel" ? 14 : 15);
} }
function AdministratorDashboard_Conditional_31_Conditional_12_Conditional_22_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 142);
    i0.ɵɵelement(1, "i", 143);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r25, " ");
} }
function AdministratorDashboard_Conditional_31_Conditional_12_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 137);
    i0.ɵɵrepeaterCreate(1, AdministratorDashboard_Conditional_31_Conditional_12_Conditional_22_For_2_Template, 3, 1, "li", 142, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.selectedReport.contents);
} }
function AdministratorDashboard_Conditional_31_Conditional_12_Conditional_23_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 145);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_31_Conditional_12_Conditional_23_For_2_Template_input_ngModelChange_0_listener($event) { const ɵ$index_1033_r27 = i0.ɵɵrestoreView(_r26).$index; const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedReport.contents[ɵ$index_1033_r27], $event) || (ctx_r1.selectedReport.contents[ɵ$index_1033_r27] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_1033_r27 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedReport.contents[ɵ$index_1033_r27]);
    i0.ɵɵproperty("name", "reportItem" + ɵ$index_1033_r27);
} }
function AdministratorDashboard_Conditional_31_Conditional_12_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 138);
    i0.ɵɵrepeaterCreate(1, AdministratorDashboard_Conditional_31_Conditional_12_Conditional_23_For_2_Template, 1, 2, "input", 144, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.selectedReport.contents);
} }
function AdministratorDashboard_Conditional_31_Conditional_12_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 146);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_31_Conditional_12_Conditional_27_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.exportExcel()); });
    i0.ɵɵelement(1, "i", 124);
    i0.ɵɵtext(2, " Download Excel ");
    i0.ɵɵelementEnd();
} }
function AdministratorDashboard_Conditional_31_Conditional_12_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 147);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_31_Conditional_12_Conditional_28_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.exportPDF()); });
    i0.ɵɵelement(1, "i", 124);
    i0.ɵɵtext(2, " Download PDF ");
    i0.ɵɵelementEnd();
} }
function AdministratorDashboard_Conditional_31_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_31_Conditional_12_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeReportModal()); });
    i0.ɵɵelementStart(1, "div", 127);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_31_Conditional_12_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "div", 20)(3, "div", 128)(4, "div")(5, "span", 129);
    i0.ɵɵelement(6, "i", 117);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h5", 86);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 130);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_31_Conditional_12_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeReportModal()); });
    i0.ɵɵelement(11, "i", 131);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "p", 70);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 132)(15, "div", 133)(16, "span", 134);
    i0.ɵɵelement(17, "i", 135);
    i0.ɵɵtext(18, "Report Contents");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 136);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_31_Conditional_12_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleEditReport()); });
    i0.ɵɵelement(20, "i", 117);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(22, AdministratorDashboard_Conditional_31_Conditional_12_Conditional_22_Template, 3, 0, "ul", 137)(23, AdministratorDashboard_Conditional_31_Conditional_12_Conditional_23_Template, 3, 0, "div", 138);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 139)(25, "button", 119);
    i0.ɵɵlistener("click", function AdministratorDashboard_Conditional_31_Conditional_12_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeReportModal()); });
    i0.ɵɵtext(26, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(27, AdministratorDashboard_Conditional_31_Conditional_12_Conditional_27_Template, 3, 0, "button", 140)(28, AdministratorDashboard_Conditional_31_Conditional_12_Conditional_28_Template, 3, 0, "button", 141);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("bg-success", ctx_r1.selectedReport.format === "excel")("bg-danger", ctx_r1.selectedReport.format === "pdf");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bi-file-earmark-spreadsheet", ctx_r1.selectedReport.format === "excel")("bi-file-earmark-pdf", ctx_r1.selectedReport.format === "pdf");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selectedReport.format === "excel" ? "Excel / CSV" : "PDF Report", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selectedReport.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.selectedReport.description);
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("bi-pencil", !ctx_r1.editingReport)("bi-check-lg", ctx_r1.editingReport);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.editingReport ? "Done" : "Edit", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.editingReport ? 22 : 23);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.selectedReport.format === "excel" ? 27 : 28);
} }
function AdministratorDashboard_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 20)(2, "h5", 3);
    i0.ɵɵtext(3, "Platform Analytics & Document Downloader");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 110);
    i0.ɵɵtext(5, "Click ");
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7, "Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " to see what's included in each report, then download in Excel or PDF format.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 111);
    i0.ɵɵrepeaterCreate(10, AdministratorDashboard_Conditional_31_For_11_Template, 16, 12, "div", 112, _forTrack1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(12, AdministratorDashboard_Conditional_31_Conditional_12_Template, 29, 18, "div", 113);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r1.reports);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.showReportModal && ctx_r1.selectedReport ? 12 : -1);
} }
function AdministratorDashboard_Conditional_32_For_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 155)(1, "div", 156)(2, "span", 157);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small", 26);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 158);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const bc_r31 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Target: ", bc_r31.target);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(bc_r31.date);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(bc_r31.message);
} }
function AdministratorDashboard_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 54)(2, "div", 13)(3, "div", 20)(4, "h5", 21);
    i0.ɵɵtext(5, "Publish System-wide Broadcast");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 98);
    i0.ɵɵtext(7, "Broadcast bulleting advisories or safety schedules instantly to specified role terminals.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "form", 34);
    i0.ɵɵlistener("ngSubmit", function AdministratorDashboard_Conditional_32_Template_form_ngSubmit_8_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sendBroadcast()); });
    i0.ɵɵelementStart(9, "div", 35)(10, "label", 36);
    i0.ɵɵtext(11, "Target Recipients");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 148);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_32_Template_select_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.broadcastTarget, $event) || (ctx_r1.broadcastTarget = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(13, "option", 149);
    i0.ɵɵtext(14, "All Terminals (Public Broadcast)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 150);
    i0.ɵɵtext(16, "Site Engineers Terminals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 151);
    i0.ɵɵtext(18, "Contractors Dashboards");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 152);
    i0.ɵɵtext(20, "Workers Mobile Terminals");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 35)(22, "label", 36);
    i0.ɵɵtext(23, "Bulletin message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "textarea", 153);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_32_Template_textarea_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.broadcastMessage, $event) || (ctx_r1.broadcastMessage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "button", 47);
    i0.ɵɵelement(26, "i", 154);
    i0.ɵɵtext(27, " Publish Bulletin ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(28, "div", 66)(29, "div", 13)(30, "div", 20)(31, "h5", 21);
    i0.ɵɵtext(32, "Active System Bulletins");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 111);
    i0.ɵɵrepeaterCreate(34, AdministratorDashboard_Conditional_32_For_35_Template, 8, 3, "div", 155, _forTrack0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.broadcastTarget);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.broadcastMessage);
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r1.recentBroadcasts());
} }
function AdministratorDashboard_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 20)(2, "h5", 21);
    i0.ɵɵtext(3, "Corporate Platform Settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "form", 34);
    i0.ɵɵlistener("ngSubmit", function AdministratorDashboard_Conditional_33_Template_form_ngSubmit_4_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveSettings()); });
    i0.ɵɵelementStart(5, "div", 35)(6, "label", 36);
    i0.ɵɵtext(7, "Currency Symbol Configuration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 159);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_33_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.currencySymbol, $event) || (ctx_r1.currencySymbol = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 160)(10, "input", 161);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_33_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.notificationsEnabled, $event) || (ctx_r1.notificationsEnabled = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "label", 162);
    i0.ɵɵtext(12, "Enable Real-Time Dispatch Pushes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 163)(14, "label", 36);
    i0.ɵɵtext(15, "Gateway API Cache duration (Minutes)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 164);
    i0.ɵɵtwoWayListener("ngModelChange", function AdministratorDashboard_Conditional_33_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.apiCacheDuration, $event) || (ctx_r1.apiCacheDuration = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "button", 165);
    i0.ɵɵelement(18, "i", 166);
    i0.ɵɵtext(19, " Save Changes ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.currencySymbol);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.notificationsEnabled);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.apiCacheDuration);
} }
export class AdministratorDashboard {
    projectService = inject(ProjectService);
    authService = inject(AuthService);
    route = inject(ActivatedRoute);
    queryParams = toSignal(this.route.queryParams);
    get activeModule() {
        return this.queryParams()?.['module'] || 'overview';
    }
    // Administrators custom user registry state (for role updates)
    usersRegistry = signal([
        { id: '1', email: 'admin@buildtrack.com', name: 'Usha Admin', role: 'admin', company: 'BuildTrack Corp' },
        { id: '2', email: 'pm@buildtrack.com', name: 'Shradha S', role: 'project_manager', company: 'Apex Builders' },
        { id: '3', email: 'engineer@buildtrack.com', name: 'Sathvik S', role: 'site_engineer', company: 'Apex Builders' },
        { id: '4', email: 'contractor@buildtrack.com', name: 'Gaurav K', role: 'contractor', company: 'Vance Concrete Ltd' },
        { id: '5', email: 'worker@buildtrack.com', name: 'Jyoti S', role: 'worker', company: 'Vance Concrete Ltd' },
        { id: '6', email: 'client@buildtrack.com', name: 'Abhishek S', role: 'client', company: 'Vanguard Realty' }
    ], ...(ngDevMode ? [{ debugName: "usersRegistry" }] : /* istanbul ignore next */ []));
    // Static fallback workforce data shown when backend has no data
    staticWorkforce = [
        { id: 'wf1', name: 'Ramesh Kumar', role: 'Mason', assignedProject: 'Vanguard Heights Tower', phone: '+91-9812345678', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Ramesh+Kumar&background=0d6efd&color=fff' },
        { id: 'wf2', name: 'Priya Nair', role: 'Electrician', assignedProject: 'Riverfront Residency II', phone: '+91-9823456789', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Priya+Nair&background=198754&color=fff' },
        { id: 'wf3', name: 'Suresh Patil', role: 'Plumber', assignedProject: 'Metro Transit Hub', phone: '+91-9834567890', status: 'On Leave', avatar: 'https://ui-avatars.com/api/?name=Suresh+Patil&background=ffc107&color=000' },
        { id: 'wf4', name: 'Kavita Sharma', role: 'Site Supervisor', assignedProject: 'Vanguard Heights Tower', phone: '+91-9845678901', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Kavita+Sharma&background=0dcaf0&color=fff' },
        { id: 'wf5', name: 'Mohan Das', role: 'Welder', assignedProject: 'Eco-Resort Suites', phone: '+91-9856789012', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Mohan+Das&background=6f42c1&color=fff' },
        { id: 'wf6', name: 'Deepa Mehta', role: 'Carpenter', assignedProject: 'Metro Transit Hub', phone: '+91-9867890123', status: 'Inactive', avatar: 'https://ui-avatars.com/api/?name=Deepa+Mehta&background=dc3545&color=fff' },
        { id: 'wf7', name: 'Arjun Singh', role: 'Safety Officer', assignedProject: 'Riverfront Residency II', phone: '+91-9878901234', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Arjun+Singh&background=fd7e14&color=fff' },
        { id: 'wf8', name: 'Lakshmi Rao', role: 'Scaffolding Expert', assignedProject: 'Eco-Resort Suites', phone: '+91-9889012345', status: 'On Leave', avatar: 'https://ui-avatars.com/api/?name=Lakshmi+Rao&background=20c997&color=fff' },
    ];
    // Static fallback contractor data
    staticContractors = [
        { id: 'c1', name: 'Vance Concrete Ltd', contactPerson: 'Gaurav Kumar', specialty: 'Foundation & Concrete Works', activeProjects: 3, status: 'Active' },
        { id: 'c2', name: 'Apex Steel Fabricators', contactPerson: 'Rajiv Mehta', specialty: 'Structural Steel & Rebar', activeProjects: 2, status: 'Active' },
        { id: 'c3', name: 'SunBright Electricals', contactPerson: 'Sheela Rao', specialty: 'Electrical & MEP Works', activeProjects: 4, status: 'Active' },
        { id: 'c4', name: 'ProPipe Plumbing Co.', contactPerson: 'Dilip Joshi', specialty: 'Plumbing & Drainage', activeProjects: 2, status: 'Under Review' },
        { id: 'c5', name: 'QuickBuild Masonry', contactPerson: 'Anita Desai', specialty: 'Brick & Block Masonry', activeProjects: 1, status: 'Active' },
        { id: 'c6', name: 'SafeGuard HVAC Pvt.', contactPerson: 'Sanjay Patel', specialty: 'HVAC & Ventilation', activeProjects: 2, status: 'Active' },
        { id: 'c7', name: 'TerraFirm Groundworks', contactPerson: 'Prakash Nair', specialty: 'Excavation & Groundworks', activeProjects: 0, status: 'Suspended' },
    ];
    // Form Fields - User Management
    newUserName = '';
    newUserEmail = '';
    newUserRole = 'worker';
    newUserCompany = '';
    // Form Fields - Project Provisioning
    newProjName = '';
    newProjLocation = '';
    newProjClient = '';
    newProjBudget = 1000000;
    newProjManager = 'Shireen F';
    newProjDesc = '';
    // Form Fields - System Broadcast
    broadcastTarget = 'all';
    broadcastMessage = '';
    recentBroadcasts = signal([
        { id: 1, target: 'all', message: 'Platform upgrade schedule set for Saturday at 22:00 PST.', date: '2026-07-20' },
        { id: 2, target: 'workers', message: 'Please ensure timesheet submissions are finalized by Friday.', date: '2026-07-22' }
    ], ...(ngDevMode ? [{ debugName: "recentBroadcasts" }] : /* istanbul ignore next */ []));
    // Report Preview Modal State
    showReportModal = false;
    editingReport = false;
    selectedReport = null;
    reports = [
        {
            title: 'Corporate Revenue and Tax Ledger (Q2 2026)',
            description: 'Contains all contractor billing reconciliations, invoice files, and project deposits.',
            format: 'excel',
            contents: [
                'Project Budget Allocations by Site',
                'Contractor Billing & Invoice Reconciliations',
                'Tax Deductions & GST Submissions (Q2)',
                'Revenue Inflows from Client Deposits',
                'Platform Expenditure Velocity Summary',
                'Budget vs Actuals Comparison Table'
            ]
        },
        {
            title: 'Subcontractor Activity Performance Indices',
            description: 'Ranks contractors based on timesheet accuracies, budget safety, and task schedules.',
            format: 'pdf',
            contents: [
                'Contractor Performance Score Card',
                'Timesheet Accuracy Reports by Company',
                'Budget Compliance & Cost Overruns',
                'Task Schedule Adherence Metrics',
                'Site Safety Observations per Contractor',
                'Active Project Count & Delivery Status'
            ]
        }
    ];
    // Budget chart computed data from real projects
    budgetChartLabels = computed(() => this.projectService.projects().map(p => p.name.split(' ').slice(0, 2).join(' ')), ...(ngDevMode ? [{ debugName: "budgetChartLabels" }] : /* istanbul ignore next */ []));
    budgetChartCommitted = computed(() => this.projectService.projects().map(p => parseFloat((p.budget / 1_000_000).toFixed(2))), ...(ngDevMode ? [{ debugName: "budgetChartCommitted" }] : /* istanbul ignore next */ []));
    budgetChartSpent = computed(() => this.projectService.projects().map(p => parseFloat((p.spent / 1_000_000).toFixed(2))), ...(ngDevMode ? [{ debugName: "budgetChartSpent" }] : /* istanbul ignore next */ []));
    // Computed workforce: use backend data if available, else static
    workforceData = computed(() => {
        const live = this.projectService.workforce();
        return live.length > 0 ? live : this.staticWorkforce;
    }, ...(ngDevMode ? [{ debugName: "workforceData" }] : /* istanbul ignore next */ []));
    // Computed contractors: use backend data if available, else static
    contractorsData = computed(() => {
        const live = this.projectService.contractors();
        return live.length > 0 ? live : this.staticContractors;
    }, ...(ngDevMode ? [{ debugName: "contractorsData" }] : /* istanbul ignore next */ []));
    // Admin settings variables
    currencySymbol = '$';
    notificationsEnabled = true;
    apiCacheDuration = 60; // minutes
    // Form Fields - Module 4 Equipment Provisioning
    newEqId = 'EQ-' + Math.floor(100 + Math.random() * 900);
    newEqName = '';
    newEqCategory = 'CAT-EXCAVATOR';
    newEqLocation = 'Equipment Yard';
    newEqPerson = 'Sathvik S (Site Engineer)';
    newEqModel = '';
    newEqSerial = '';
    newEqCost = 75;
    addEquipment() {
        if (!this.newEqId || !this.newEqName) {
            alert('Equipment ID and Machinery Name are required.');
            return;
        }
        this.projectService.addResource({
            id: this.newEqId,
            name: this.newEqName,
            categoryId: this.newEqCategory,
            quantity: 1,
            currentLocation: this.newEqLocation,
            currentProjectId: null,
            status: 'Available',
            responsiblePerson: this.newEqPerson,
            modelNumber: this.newEqModel,
            serialNumber: this.newEqSerial,
            hourlyCost: this.newEqCost
        }).subscribe({
            next: () => {
                alert('Equipment successfully registered into Enterprise Resource Registry!');
                this.newEqId = 'EQ-' + Math.floor(100 + Math.random() * 900);
                this.newEqName = '';
                this.newEqModel = '';
                this.newEqSerial = '';
                this.projectService.loadModule4Data();
            },
            error: (err) => alert('Error adding equipment: ' + (err.error?.detail || err.message))
        });
    }
    deleteEquipment(id) {
        if (confirm(`Permanently delete equipment ${id}?`)) {
            this.projectService.deleteResource(id).subscribe({
                next: () => {
                    alert(`Equipment ${id} deleted.`);
                    this.projectService.loadModule4Data();
                },
                error: (err) => alert('Error: ' + err.message)
            });
        }
    }
    // Computations
    totalBudgetPool = computed(() => this.projectService.projects().reduce((sum, p) => sum + p.budget, 0), ...(ngDevMode ? [{ debugName: "totalBudgetPool" }] : /* istanbul ignore next */ []));
    totalSpentPool = computed(() => this.projectService.projects().reduce((sum, p) => sum + p.spent, 0), ...(ngDevMode ? [{ debugName: "totalSpentPool" }] : /* istanbul ignore next */ []));
    criticalStockCount = computed(() => this.projectService.materials().filter(m => m.inStock <= m.reorderLevel).length, ...(ngDevMode ? [{ debugName: "criticalStockCount" }] : /* istanbul ignore next */ []));
    pendingRequestsCount = computed(() => this.projectService.materialRequests().filter(r => r.status === 'Pending').length, ...(ngDevMode ? [{ debugName: "pendingRequestsCount" }] : /* istanbul ignore next */ []));
    // User Actions
    addUser() {
        if (!this.newUserName || !this.newUserEmail) {
            alert('User Name and Email are required.');
            return;
        }
        const newUser = {
            id: Math.random().toString(36).substring(2, 9),
            name: this.newUserName,
            email: this.newUserEmail,
            role: this.newUserRole,
            company: this.newUserCompany || 'Independent'
        };
        this.usersRegistry.update(users => [...users, newUser]);
        // reset form
        this.newUserName = '';
        this.newUserEmail = '';
        this.newUserCompany = '';
        alert('Platform user registered successfully!');
    }
    updateUserRole(userId, newRole) {
        this.usersRegistry.update(users => users.map(u => (u.id === userId ? { ...u, role: newRole } : u)));
        alert('User platform permissions updated.');
    }
    deleteUser(userId) {
        if (confirm('Are you sure you want to deactivate this user account?')) {
            this.usersRegistry.update(users => users.filter(u => u.id !== userId));
            alert('User deleted.');
        }
    }
    provisionProject() {
        if (!this.newProjName || !this.newProjLocation || !this.newProjClient) {
            alert('Project Name, Location, and Client Name are required.');
            return;
        }
        this.projectService.addProject({
            name: this.newProjName,
            location: this.newProjLocation,
            clientName: this.newProjClient,
            status: 'Planning',
            startDate: new Date().toISOString().split('T')[0],
            endDate: '2028-12-31',
            budget: this.newProjBudget,
            manager: this.newProjManager,
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
            description: this.newProjDesc || 'No project scope description provided.'
        });
        // reset form
        this.newProjName = '';
        this.newProjLocation = '';
        this.newProjClient = '';
        this.newProjBudget = 1000000;
        this.newProjDesc = '';
        alert('Project provisioned and dispatched to Project Manager queue!');
    }
    approveInventoryRequest(reqId) {
        this.projectService.respondToMaterialRequest(reqId, true);
        alert('Material request approved and stock balance deducted.');
    }
    rejectInventoryRequest(reqId) {
        this.projectService.respondToMaterialRequest(reqId, false);
        alert('Material request rejected.');
    }
    sendBroadcast() {
        if (!this.broadcastMessage) {
            alert('Broadcast message cannot be blank.');
            return;
        }
        this.recentBroadcasts.update(list => [
            {
                id: Math.floor(Math.random() * 1000),
                target: this.broadcastTarget,
                message: this.broadcastMessage,
                date: new Date().toISOString().split('T')[0]
            },
            ...list
        ]);
        this.broadcastMessage = '';
        alert('System broadcast bulletin published and pushed to respective role views!');
    }
    saveSettings() {
        alert('System configurations saved successfully.');
    }
    // ── Report Modal Methods ──────────────────────────────────────────
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
    exportExcel(report) {
        const rpt = report || this.selectedReport;
        if (!rpt)
            return;
        const rows = [
            ['BuildTrack – ' + rpt.title],
            ['Generated on: ' + new Date().toLocaleDateString()],
            [''],
            ['Section', 'Details']
        ];
        rpt.contents.forEach((c, i) => rows.push([(i + 1).toString(), c]));
        const csvContent = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = rpt.title.replace(/[^a-zA-Z0-9]/g, '_') + '.csv';
        a.click();
        URL.revokeObjectURL(url);
        this.closeReportModal();
    }
    exportPDF(report) {
        const rpt = report || this.selectedReport;
        if (!rpt)
            return;
        const htmlContent = `
      <html><head><title>${rpt.title}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; color: #222; }
        h1 { font-size: 20px; color: #0d6efd; border-bottom: 2px solid #0d6efd; padding-bottom: 8px; }
        p { color: #666; font-size: 13px; }
        ul { margin-top: 16px; }
        li { margin-bottom: 8px; font-size: 14px; }
        footer { margin-top: 40px; font-size: 11px; color: #aaa; }
      </style></head>
      <body>
        <h1>${rpt.title}</h1>
        <p>${rpt.description}</p>
        <p>Generated: ${new Date().toLocaleString()}</p>
        <ul>${rpt.contents.map(c => `<li>${c}</li>`).join('')}</ul>
        <footer>BuildTrack Administrative Console – Confidential</footer>
      </body></html>`;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = rpt.title.replace(/[^a-zA-Z0-9]/g, '_') + '.html';
        a.click();
        URL.revokeObjectURL(url);
        this.closeReportModal();
    }
    static ɵfac = function AdministratorDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdministratorDashboard)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdministratorDashboard, selectors: [["app-admin-dashboard"]], decls: 34, vars: 23, consts: [["roleSelect", ""], [1, "container-fluid", "p-0"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "text-dark", "mb-1"], [1, "text-muted", "mb-0"], [1, "badge", "bg-primary", "px-3", "py-2", "fs-6", "rounded-pill"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-lg-3"], ["title", "Active Projects", "icon", "bi-briefcase-fill", "colorType", "primary", 3, "value"], ["title", "Total Budget Pools", "icon", "bi-cash-coin", "colorType", "success", 3, "value"], ["title", "Critical Stock Alerts", "icon", "bi-box-seam-fill", 3, "value", "colorType"], ["title", "Pending Material Requests", "icon", "bi-truck", 3, "value", "colorType"], [1, "row", "g-4"], [1, "card", "border-0", "shadow-sm", "rounded-3"], [1, "row", "g-4", "mb-4"], [1, "card", "border-0", "shadow-sm", "rounded-3", "mb-4"], [1, "card", "border-0", "shadow-sm", "rounded-3", 2, "max-width", "600px"], [1, "col-lg-6"], ["type", "line", "title", "Platform Expenditure Velocity ($ Millions)", 3, "labels", "data"], ["type", "donut", "title", "Platform Projects Distribution", 3, "labels", "data", "customColors"], [1, "card-body", "p-4"], [1, "fw-bold", "text-dark", "mb-3"], [1, "table-responsive"], [1, "table", "align-middle"], [1, "table-light", "text-muted", "uppercase", "small"], [1, "fw-bold", "text-dark"], [1, "text-muted"], [1, "bi", "bi-geo-alt", "me-1"], [1, "d-flex", "align-items-center", "gap-2", 2, "width", "130px"], [1, "progress", "flex-grow-1", 2, "height", "5px"], [1, "progress-bar", "bg-primary"], [1, "small", "fw-semibold"], [1, "badge"], [1, "col-lg-4"], [3, "ngSubmit"], [1, "form-group", "mb-3"], [1, "form-label", "fw-semibold", "small", "text-muted"], ["type", "text", "name", "name", "required", "", "placeholder", "e.g. Ritik", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", "placeholder", "e.g. ritik@buildtrack.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "role", 1, "form-select", "form-control", 3, "ngModelChange", "ngModel"], ["value", "admin"], ["value", "project_manager"], ["value", "site_engineer"], ["value", "contractor"], ["value", "worker"], ["value", "client"], ["type", "text", "name", "company", "placeholder", "e.g. Apex Builders", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2.5"], [1, "bi", "bi-person-plus", "me-1"], [1, "col-lg-8"], [1, "table", "align-middle", "table-hover"], [1, "form-select", "form-select-sm", 2, "max-width", "150px", 3, "change", "value"], [1, "btn", "btn-outline-danger", "btn-sm", "rounded-circle", "border-0", 3, "click"], [1, "bi", "bi-trash-fill"], [1, "col-lg-5"], ["type", "text", "name", "pName", "required", "", "placeholder", "e.g. Apex Industrial Park", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row"], [1, "col-md-6", "form-group", "mb-3"], ["type", "text", "name", "pLoc", "required", "", "placeholder", "e.g. 50 Valley Blvd", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "pClient", "required", "", "placeholder", "e.g. City Developers", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "pBudget", "required", "", "min", "50000", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "pPM", 1, "form-select", "form-control", 3, "ngModelChange", "ngModel"], ["value", "Shradha S"], ["value", "Shireen F"], ["name", "pDesc", "rows", "3", "placeholder", "Specify project scope guidelines...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-briefcase", "me-1"], [1, "col-lg-7"], [1, "table", "table-hover", "align-middle"], [1, "fw-bold", "text-dark", "mb-2"], [1, "bi", "bi-plus-circle-fill", "text-primary", "me-2"], [1, "text-muted", "small", "mb-3"], [1, "form-group", "mb-2.5"], ["type", "text", "name", "eqId", "required", "", "placeholder", "e.g. EQ-111", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "eqName", "required", "", "placeholder", "e.g. Caterpillar 336 Excavator", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["name", "eqCat", "required", "", 1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "row", "g-2", "mb-2.5"], [1, "col-6"], ["type", "text", "name", "eqMod", "placeholder", "336-07A", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "eqSer", "placeholder", "SN-CAT-5092", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "eqLoc", "placeholder", "Equipment Yard", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "eqCost", "min", "0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "eqPerson", "placeholder", "Operator or Site Engineer", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2", "fw-bold"], [1, "bi", "bi-save", "me-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "text-dark", "mb-0"], [1, "bi", "bi-truck", "text-primary", "me-2"], [1, "badge", "bg-primary", "px-3", "py-1.5", "rounded-pill"], [1, "badge", "bg-light", "text-dark", "border", "fw-bold"], [1, "text-muted", 2, "font-size", "11px"], [1, "badge", "bg-secondary-subtle", "text-secondary", "border"], [1, "fw-bold"], [1, "btn", "btn-outline-danger", "btn-xs", "py-0.5", "px-2", "rounded-pill", "text-xs", "fw-bold", 3, "click"], [1, "bi", "bi-trash"], [1, "bi", "bi-calendar2-range", "text-primary", "me-2"], [1, "bi", "bi-tools", "text-warning", "me-2"], [1, "small", "text-muted"], [1, "text-muted", "small"], [1, "d-flex", "flex-column", "gap-3"], [1, "p-3", "border", "rounded-3", "bg-light", "d-flex", "flex-column", "gap-2"], [1, "badge", "bg-danger"], [1, "badge", "bg-success"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "small", "text-secondary"], [1, "d-flex", "gap-2", "justify-content-end", "mt-1"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "btn", "btn-success", "btn-sm", 3, "click"], ["type", "grouped-bar", "title", "Committed Capital vs Spent To Date ($ Millions)", "dataLabel", "Committed", "data2Label", "Spent To Date", 3, "labels", "data", "data2", "customColors"], [1, "fw-bold", "text-success"], [1, "text-muted", "small", "mb-4"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "px-0", "py-3", "bg-transparent", "border-bottom"], [1, "modal-backdrop-overlay", 2, "position", "fixed", "inset", "0", "background", "rgba(0,0,0,0.5)", "z-index", "1050", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "me-3"], [1, "text-muted", "small", "mb-0"], [1, "mt-1"], [1, "bi"], [1, "d-flex", "gap-2", "flex-shrink-0"], [1, "btn", "btn-outline-secondary", "btn-sm", "rounded-pill", "px-3", 3, "click"], [1, "bi", "bi-eye", "me-1"], [1, "btn", "btn-outline-success", "btn-sm", "rounded-pill", "px-3"], [1, "btn", "btn-outline-danger", "btn-sm", "rounded-pill", "px-3"], [1, "btn", "btn-outline-success", "btn-sm", "rounded-pill", "px-3", 3, "click"], [1, "bi", "bi-download", "me-1"], [1, "btn", "btn-outline-danger", "btn-sm", "rounded-pill", "px-3", 3, "click"], [1, "modal-backdrop-overlay", 2, "position", "fixed", "inset", "0", "background", "rgba(0,0,0,0.5)", "z-index", "1050", "display", "flex", "align-items", "center", "justify-content", "center", 3, "click"], [1, "card", "border-0", "shadow-lg", "rounded-4", 2, "max-width", "560px", "width", "90%", "max-height", "85vh", "overflow-y", "auto", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "badge", "mb-2"], [1, "btn", "btn-sm", "btn-light", "rounded-circle", "border-0", "ms-2", 2, "width", "32px", "height", "32px", 3, "click"], [1, "bi", "bi-x-lg"], [1, "p-3", "bg-light", "rounded-3", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "fw-semibold", "small", "text-dark"], [1, "bi", "bi-list-check", "me-1", "text-primary"], [1, "btn", "btn-xs", "btn-outline-primary", "btn-sm", "rounded-pill", "px-2", "py-0", 3, "click"], [1, "mb-0", "ps-3", 2, "list-style", "none"], [1, "d-flex", "flex-column", "gap-2"], [1, "d-flex", "gap-2", "justify-content-end"], [1, "btn", "btn-success", "btn-sm", "rounded-pill", "px-4"], [1, "btn", "btn-danger", "btn-sm", "rounded-pill", "px-4"], [1, "text-dark", "small", "py-1", "border-bottom"], [1, "bi", "bi-check2", "text-success", "me-2"], [1, "form-control", "form-control-sm", 3, "ngModel", "name"], [1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], [1, "btn", "btn-success", "btn-sm", "rounded-pill", "px-4", 3, "click"], [1, "btn", "btn-danger", "btn-sm", "rounded-pill", "px-4", 3, "click"], ["name", "bcTarget", 1, "form-select", "form-control", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "engineers"], ["value", "contractors"], ["value", "workers"], ["name", "bcMsg", "required", "", "rows", "5", "placeholder", "Specify warning details, weather cautions, or site upgrades...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-send-check-fill", "me-1"], [1, "list-group-item", "px-0", "py-3", "bg-transparent"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "badge", "bg-secondary", "text-capitalize"], [1, "text-dark", "small", "mb-0"], ["type", "text", "name", "cur", 1, "form-control", 2, "max-width", "100px", 3, "ngModelChange", "ngModel"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "id", "notifySwitch", "name", "bcSwitch", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "notifySwitch", 1, "form-check-label", "fw-semibold", "small", "text-muted"], [1, "form-group", "mb-4"], ["type", "number", "name", "cache", 1, "form-control", 2, "max-width", "150px", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "px-4", "py-2"], [1, "bi", "bi-save-fill", "me-1"]], template: function AdministratorDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
            i0.ɵɵtext(4, "Administrative Console");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 4);
            i0.ɵɵtext(6, "Platform Overview \u2022 Audit user records, project dispatch pools, and budget parameters.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div")(8, "span", 5);
            i0.ɵɵtext(9, " System Health: Optimal ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 6)(11, "div", 7);
            i0.ɵɵelement(12, "app-dashboard-card", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 7);
            i0.ɵɵelement(14, "app-dashboard-card", 9);
            i0.ɵɵpipe(15, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 7);
            i0.ɵɵelement(17, "app-dashboard-card", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 7);
            i0.ɵɵelement(19, "app-dashboard-card", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(20, AdministratorDashboard_Conditional_20_Template, 26, 10);
            i0.ɵɵconditionalCreate(21, AdministratorDashboard_Conditional_21_Template, 60, 4, "div", 12);
            i0.ɵɵconditionalCreate(22, AdministratorDashboard_Conditional_22_Template, 60, 6, "div", 12);
            i0.ɵɵconditionalCreate(23, AdministratorDashboard_Conditional_23_Template, 1, 0, "app-workforce-management");
            i0.ɵɵconditionalCreate(24, AdministratorDashboard_Conditional_24_Template, 21, 0, "div", 13);
            i0.ɵɵconditionalCreate(25, AdministratorDashboard_Conditional_25_Template, 79, 9, "div", 14);
            i0.ɵɵconditionalCreate(26, AdministratorDashboard_Conditional_26_Template, 24, 0, "div", 15);
            i0.ɵɵconditionalCreate(27, AdministratorDashboard_Conditional_27_Template, 28, 0, "div", 15);
            i0.ɵɵconditionalCreate(28, AdministratorDashboard_Conditional_28_Template, 31, 0, "div", 12);
            i0.ɵɵconditionalCreate(29, AdministratorDashboard_Conditional_29_Template, 1, 0, "app-procurement-management");
            i0.ɵɵconditionalCreate(30, AdministratorDashboard_Conditional_30_Template, 24, 1, "div", 14);
            i0.ɵɵconditionalCreate(31, AdministratorDashboard_Conditional_31_Template, 13, 1);
            i0.ɵɵconditionalCreate(32, AdministratorDashboard_Conditional_32_Template, 36, 2, "div", 12);
            i0.ɵɵconditionalCreate(33, AdministratorDashboard_Conditional_33_Template, 20, 3, "div", 16);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("value", ctx.projectService.projects().length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", "$" + i0.ɵɵpipeBind2(15, 20, ctx.totalBudgetPool(), "1.0-0"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.criticalStockCount())("colorType", ctx.criticalStockCount() > 0 ? "danger" : "success");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.pendingRequestsCount())("colorType", ctx.pendingRequestsCount() > 0 ? "warning" : "dark");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "overview" ? 20 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "users" ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "projects" ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "workforce" ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "contractors" ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "resources" ? 25 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "allocations" ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "maintenance" ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "inventory" ? 28 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "procurement" ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "budget" ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "reports" ? 31 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "notifications" ? 32 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeModule === "settings" ? 33 : -1);
        } }, dependencies: [CommonModule,
            FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinValidator, i1.NgModel, i1.NgForm, RouterModule,
            DashboardCardComponent,
            ChartsComponent,
            WorkforceManagementComponent,
            ProcurementManagementComponent, i2.DecimalPipe], styles: [".form-select-sm[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease;\n}\n\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8fafc !important;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.05);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdministratorDashboard, [{
        type: Component,
        args: [{ selector: 'app-admin-dashboard', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule,
                    DashboardCardComponent,
                    ChartsComponent,
                    WorkforceManagementComponent,
                    ProcurementManagementComponent
                ], template: "<div class=\"container-fluid p-0\">\n\n  <!-- Header -->\n  <div class=\"d-flex justify-content-between align-items-center mb-4\">\n    <div>\n      <h2 class=\"fw-bold text-dark mb-1\">Administrative Console</h2>\n      <p class=\"text-muted mb-0\">Platform Overview &bull; Audit user records, project dispatch pools, and budget parameters.</p>\n    </div>\n    <div>\n      <span class=\"badge bg-primary px-3 py-2 fs-6 rounded-pill\">\n        System Health: Optimal\n      </span>\n    </div>\n  </div>\n\n  <!-- KPI summary cards -->\n  <div class=\"row g-3 mb-4\">\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Active Projects\" [value]=\"projectService.projects().length\" icon=\"bi-briefcase-fill\" colorType=\"primary\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Total Budget Pools\" [value]=\"'$' + (totalBudgetPool() | number:'1.0-0')\" icon=\"bi-cash-coin\" colorType=\"success\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Critical Stock Alerts\" [value]=\"criticalStockCount()\" icon=\"bi-box-seam-fill\" [colorType]=\"criticalStockCount() > 0 ? 'danger' : 'success'\"></app-dashboard-card>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <app-dashboard-card title=\"Pending Material Requests\" [value]=\"pendingRequestsCount()\" icon=\"bi-truck\" [colorType]=\"pendingRequestsCount() > 0 ? 'warning' : 'dark'\"></app-dashboard-card>\n    </div>\n  </div>\n\n  <!-- Dynamic Views -->\n  @if (activeModule === 'overview') {\n    <div class=\"row g-4 mb-4\">\n      <div class=\"col-lg-6\">\n        <app-chart type=\"line\" \n                   title=\"Platform Expenditure Velocity ($ Millions)\" \n                   [labels]=\"['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']\" \n                   [data]=\"[5.2, 8.4, 12.1, 14.8, 19.3, 22.5, 25.8]\">\n        </app-chart>\n      </div>\n      <div class=\"col-lg-6\">\n        <app-chart type=\"donut\" \n                   title=\"Platform Projects Distribution\" \n                   [labels]=\"['In Progress', 'Planning', 'Completed', 'Delayed']\" \n                   [data]=\"[2, 1, 0, 1]\" \n                   [customColors]=\"['#0d6efd', '#ffc107', '#198754', '#dc3545']\">\n        </app-chart>\n      </div>\n    </div>\n\n    <!-- Recent Activities table -->\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Live Projects Status Feed</h5>\n        \n        <div class=\"table-responsive\">\n          <table class=\"table align-middle\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>Project</th>\n                <th>Client</th>\n                <th>Manager</th>\n                <th>Progress</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (proj of projectService.projects(); track proj.id) {\n                <tr>\n                  <td>\n                    <div class=\"fw-bold text-dark\">{{ proj.name }}</div>\n                    <small class=\"text-muted\"><i class=\"bi bi-geo-alt me-1\"></i>{{ proj.location }}</small>\n                  </td>\n                  <td>{{ proj.clientName }}</td>\n                  <td>{{ proj.manager }}</td>\n                  <td>\n                    <div class=\"d-flex align-items-center gap-2\" style=\"width: 130px;\">\n                      <div class=\"progress flex-grow-1\" style=\"height: 5px;\">\n                        <div class=\"progress-bar bg-primary\" [style.width.%]=\"proj.progress\"></div>\n                      </div>\n                      <span class=\"small fw-semibold\">{{ proj.progress }}%</span>\n                    </div>\n                  </td>\n                  <td>\n                    <span class=\"badge\" \n                          [class.bg-success]=\"proj.status === 'Completed'\"\n                          [class.bg-primary]=\"proj.status === 'In Progress'\"\n                          [class.bg-warning]=\"proj.status === 'Planning'\"\n                          [class.bg-danger]=\"proj.status === 'Delayed'\">\n                      {{ proj.status }}\n                    </span>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'users') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Register Platform User</h5>\n            \n            <form (ngSubmit)=\"addUser()\">\n              \n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Full Name *</label>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"newUserName\" required class=\"form-control\" placeholder=\"e.g. Ritik\">\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Email Address *</label>\n                <input type=\"email\" name=\"email\" [(ngModel)]=\"newUserEmail\" required class=\"form-control\" placeholder=\"e.g. ritik@buildtrack.com\">\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Platform Role *</label>\n                <select class=\"form-select form-control\" name=\"role\" [(ngModel)]=\"newUserRole\">\n                  <option value=\"admin\">Administrator</option>\n                  <option value=\"project_manager\">Project Manager</option>\n                  <option value=\"site_engineer\">Site Engineer</option>\n                  <option value=\"contractor\">Contractor</option>\n                  <option value=\"worker\">Worker</option>\n                  <option value=\"client\">Client</option>\n                </select>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Company affiliation</label>\n                <input type=\"text\" name=\"company\" [(ngModel)]=\"newUserCompany\" class=\"form-control\" placeholder=\"e.g. Apex Builders\">\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary w-100 py-2.5\">\n                <i class=\"bi bi-person-plus me-1\"></i> Register User\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-8\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Platform User Registry</h5>\n            \n            <div class=\"table-responsive\">\n              <table class=\"table align-middle table-hover\">\n                <thead class=\"table-light text-muted uppercase small\">\n                  <tr>\n                    <th>User</th>\n                    <th>Email</th>\n                    <th>Role Permission</th>\n                    <th>Affiliated Company</th>\n                    <th>Actions</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (u of usersRegistry(); track u.id) {\n                    <tr>\n                      <td class=\"fw-bold text-dark\">{{ u.name }}</td>\n                      <td>{{ u.email }}</td>\n                      <td>\n                        <select class=\"form-select form-select-sm\" \n                                style=\"max-width: 150px;\"\n                                [value]=\"u.role\" \n                                #roleSelect\n                                (change)=\"updateUserRole(u.id, roleSelect.value)\">\n                          <option value=\"admin\">Admin</option>\n                          <option value=\"project_manager\">Project Manager</option>\n                          <option value=\"site_engineer\">Site Engineer</option>\n                          <option value=\"contractor\">Contractor</option>\n                          <option value=\"worker\">Worker</option>\n                          <option value=\"client\">Client</option>\n                        </select>\n                      </td>\n                      <td>{{ u.company }}</td>\n                      <td>\n                        <button class=\"btn btn-outline-danger btn-sm rounded-circle border-0\" (click)=\"deleteUser(u.id)\">\n                          <i class=\"bi bi-trash-fill\"></i>\n                        </button>\n                      </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'projects') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-5\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Provision New Construction Project</h5>\n            \n            <form (ngSubmit)=\"provisionProject()\">\n              \n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Project Name *</label>\n                <input type=\"text\" name=\"pName\" [(ngModel)]=\"newProjName\" required class=\"form-control\" placeholder=\"e.g. Apex Industrial Park\">\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-6 form-group mb-3\">\n                  <label class=\"form-label fw-semibold small text-muted\">Site Location *</label>\n                  <input type=\"text\" name=\"pLoc\" [(ngModel)]=\"newProjLocation\" required class=\"form-control\" placeholder=\"e.g. 50 Valley Blvd\">\n                </div>\n                <div class=\"col-md-6 form-group mb-3\">\n                  <label class=\"form-label fw-semibold small text-muted\">Client Owner *</label>\n                  <input type=\"text\" name=\"pClient\" [(ngModel)]=\"newProjClient\" required class=\"form-control\" placeholder=\"e.g. City Developers\">\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-6 form-group mb-3\">\n                  <label class=\"form-label fw-semibold small text-muted\">Assigned Capital Pool *</label>\n                  <input type=\"number\" name=\"pBudget\" [(ngModel)]=\"newProjBudget\" required class=\"form-control\" min=\"50000\">\n                </div>\n                <div class=\"col-md-6 form-group mb-3\">\n                  <label class=\"form-label fw-semibold small text-muted\">Project Manager *</label>\n                  <select class=\"form-select form-control\" name=\"pPM\" [(ngModel)]=\"newProjManager\">\n                    <option value=\"Shradha S\">Shradha S</option>\n                    <option value=\"Shireen F\">Shireen F</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Project Description</label>\n                <textarea name=\"pDesc\" [(ngModel)]=\"newProjDesc\" class=\"form-control\" rows=\"3\" placeholder=\"Specify project scope guidelines...\"></textarea>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary w-100 py-2.5\">\n                <i class=\"bi bi-briefcase me-1\"></i> Provision Asset\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-7\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">System-wide Active Projects</h5>\n            \n            <div class=\"table-responsive\">\n              <table class=\"table align-middle table-hover\">\n                <thead class=\"table-light text-muted uppercase small\">\n                  <tr>\n                    <th>Project</th>\n                    <th>Budget Pool</th>\n                    <th>Manager</th>\n                    <th>Asset Status</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (proj of projectService.projects(); track proj.id) {\n                    <tr>\n                      <td>\n                        <div class=\"fw-bold text-dark\">{{ proj.name }}</div>\n                        <small class=\"text-muted\"><i class=\"bi bi-geo-alt me-1\"></i>{{ proj.location }}</small>\n                      </td>\n                      <td>${{ proj.budget | number:'1.0-0' }}</td>\n                      <td>{{ proj.manager }}</td>\n                      <td>\n                        <span class=\"badge\" \n                              [class.bg-success]=\"proj.status === 'Completed'\"\n                              [class.bg-primary]=\"proj.status === 'In Progress'\"\n                              [class.bg-warning]=\"proj.status === 'Planning'\"\n                              [class.bg-danger]=\"proj.status === 'Delayed'\">\n                          {{ proj.status }}\n                        </span>\n                      </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'workforce') {\n    <app-workforce-management></app-workforce-management>\n  }\n\n  @if (activeModule === 'contractors') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Subcontractor Companies Registry</h5>\n        \n        <div class=\"table-responsive\">\n          <table class=\"table table-hover align-middle\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>Company Name</th>\n                <th>Contact Representative</th>\n                <th>Core Trade Specialty</th>\n                <th>Active Projects</th>\n                <th>Corporate Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (c of contractorsData(); track c.id) {\n                <tr>\n                  <td class=\"fw-bold text-dark\">{{ c.name }}</td>\n                  <td>{{ c.contactPerson }}</td>\n                  <td>{{ c.specialty }}</td>\n                  <td>{{ c.activeProjects }}</td>\n                  <td>\n                    <span class=\"badge\"\n                          [class.bg-success]=\"c.status === 'Active'\"\n                          [class.bg-warning]=\"c.status === 'Under Review'\"\n                          [class.bg-danger]=\"c.status === 'Suspended'\">\n                      {{ c.status }}\n                    </span>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- MODULE 4: ADMIN EQUIPMENT REGISTRY -->\n  <!-- ========================================== -->\n  @if (activeModule === 'resources') {\n    <div class=\"row g-4 mb-4\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-2\"><i class=\"bi bi-plus-circle-fill text-primary me-2\"></i>Register Equipment</h5>\n            <p class=\"text-muted small mb-3\">Add new construction machinery or equipment to the enterprise inventory.</p>\n\n            <form (ngSubmit)=\"addEquipment()\">\n              <div class=\"form-group mb-2.5\">\n                <label class=\"form-label fw-semibold small text-muted\">Equipment ID *</label>\n                <input type=\"text\" name=\"eqId\" [(ngModel)]=\"newEqId\" required class=\"form-control form-control-sm\" placeholder=\"e.g. EQ-111\">\n              </div>\n\n              <div class=\"form-group mb-2.5\">\n                <label class=\"form-label fw-semibold small text-muted\">Equipment Name *</label>\n                <input type=\"text\" name=\"eqName\" [(ngModel)]=\"newEqName\" required class=\"form-control form-control-sm\" placeholder=\"e.g. Caterpillar 336 Excavator\">\n              </div>\n\n              <div class=\"form-group mb-2.5\">\n                <label class=\"form-label fw-semibold small text-muted\">Category *</label>\n                <select class=\"form-select form-select-sm\" name=\"eqCat\" [(ngModel)]=\"newEqCategory\" required>\n                  @for (cat of projectService.resourceCategories(); track cat.id) {\n                    <option [value]=\"cat.id\">{{ cat.name }}</option>\n                  }\n                </select>\n              </div>\n\n              <div class=\"row g-2 mb-2.5\">\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Model Number</label>\n                  <input type=\"text\" name=\"eqMod\" [(ngModel)]=\"newEqModel\" class=\"form-control form-control-sm\" placeholder=\"336-07A\">\n                </div>\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Serial Number</label>\n                  <input type=\"text\" name=\"eqSer\" [(ngModel)]=\"newEqSerial\" class=\"form-control form-control-sm\" placeholder=\"SN-CAT-5092\">\n                </div>\n              </div>\n\n              <div class=\"row g-2 mb-2.5\">\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Location</label>\n                  <input type=\"text\" name=\"eqLoc\" [(ngModel)]=\"newEqLocation\" class=\"form-control form-control-sm\" placeholder=\"Equipment Yard\">\n                </div>\n                <div class=\"col-6\">\n                  <label class=\"form-label fw-semibold small text-muted\">Hourly Rate ($)</label>\n                  <input type=\"number\" name=\"eqCost\" [(ngModel)]=\"newEqCost\" class=\"form-control form-control-sm\" min=\"0\">\n                </div>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Responsible Person</label>\n                <input type=\"text\" name=\"eqPerson\" [(ngModel)]=\"newEqPerson\" class=\"form-control form-control-sm\" placeholder=\"Operator or Site Engineer\">\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary w-100 py-2 fw-bold\">\n                <i class=\"bi bi-save me-1\"></i> Register Asset\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-8\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <div class=\"d-flex justify-content-between align-items-center mb-3\">\n              <h5 class=\"fw-bold text-dark mb-0\"><i class=\"bi bi-truck text-primary me-2\"></i>Enterprise Equipment Registry</h5>\n              <span class=\"badge bg-primary px-3 py-1.5 rounded-pill\">{{ projectService.resources().length }} Assets</span>\n            </div>\n\n            <div class=\"table-responsive\">\n              <table class=\"table table-hover align-middle\">\n                <thead class=\"table-light text-muted uppercase small\">\n                  <tr>\n                    <th>ID</th>\n                    <th>Equipment</th>\n                    <th>Category</th>\n                    <th>Location</th>\n                    <th>Status</th>\n                    <th>Rate</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (r of projectService.resources(); track r.id) {\n                    <tr>\n                      <td><span class=\"badge bg-light text-dark border fw-bold\">{{ r.id }}</span></td>\n                      <td>\n                        <div class=\"fw-bold text-dark\">{{ r.name }}</div>\n                        <small class=\"text-muted\" style=\"font-size: 11px;\">Operator: {{ r.responsiblePerson }}</small>\n                      </td>\n                      <td><span class=\"badge bg-secondary-subtle text-secondary border\">{{ r.categoryName }}</span></td>\n                      <td>{{ r.currentLocation }}</td>\n                      <td>\n                        <span class=\"badge\"\n                              [class.bg-success]=\"r.status === 'Available'\"\n                              [class.bg-primary]=\"r.status === 'Allocated'\"\n                              [class.bg-info]=\"r.status === 'Operating'\"\n                              [class.bg-warning]=\"r.status === 'Under Maintenance'\"\n                              [class.bg-danger]=\"r.status === 'Out of Service'\">\n                          {{ r.status }}\n                        </span>\n                      </td>\n                      <td class=\"fw-bold\">${{ r.hourlyCost }}/h</td>\n                      <td>\n                        <button class=\"btn btn-outline-danger btn-xs py-0.5 px-2 rounded-pill text-xs fw-bold\" (click)=\"deleteEquipment(r.id)\">\n                          <i class=\"bi bi-trash\"></i>\n                        </button>\n                      </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- ========================================== -->\n  <!-- MODULE 4: ALLOCATIONS & MAINTENANCE -->\n  <!-- ========================================== -->\n  @if (activeModule === 'allocations') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-calendar2-range text-primary me-2\"></i>Global Equipment Allocations</h5>\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover align-middle\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>Allocation ID</th>\n                <th>Equipment</th>\n                <th>Project</th>\n                <th>Dates</th>\n                <th>Responsible Person</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (a of projectService.resourceAllocations(); track a.id) {\n                <tr>\n                  <td><span class=\"badge bg-light text-dark border fw-bold\">{{ a.id }}</span></td>\n                  <td>\n                    <div class=\"fw-bold text-dark\">{{ a.resourceName }}</div>\n                    <small class=\"text-muted\" style=\"font-size: 11px;\">{{ a.resourceCategory }} &bull; {{ a.resourceId }}</small>\n                  </td>\n                  <td><strong>{{ a.projectName }}</strong></td>\n                  <td>{{ a.allocationDate }} &rarr; {{ a.expectedReturnDate }}</td>\n                  <td>{{ a.responsiblePerson }}</td>\n                  <td>\n                    <span class=\"badge\" [class.bg-primary]=\"a.status === 'Allocated' || a.status === 'Active'\" [class.bg-success]=\"a.status === 'Returned'\">\n                      {{ a.status }}\n                    </span>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'maintenance') {\n    <div class=\"card border-0 shadow-sm rounded-3 mb-4\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\"><i class=\"bi bi-tools text-warning me-2\"></i>Global Maintenance Records &amp; Overhauls</h5>\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover align-middle\">\n            <thead class=\"table-light text-muted uppercase small\">\n              <tr>\n                <th>ID</th>\n                <th>Equipment</th>\n                <th>Type</th>\n                <th>Next Service Date</th>\n                <th>Engineer</th>\n                <th>Cost</th>\n                <th>Status</th>\n                <th>Remarks</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (m of projectService.maintenanceRecords(); track m.id) {\n                <tr>\n                  <td><span class=\"badge bg-light text-dark border fw-bold\">{{ m.id }}</span></td>\n                  <td><strong>{{ m.resourceName }}</strong> ({{ m.resourceId }})</td>\n                  <td><span class=\"badge bg-secondary-subtle text-secondary border\">{{ m.maintenanceType }}</span></td>\n                  <td>{{ m.nextMaintenanceDate }}</td>\n                  <td>{{ m.serviceEngineer }}</td>\n                  <td class=\"fw-bold\">${{ m.maintenanceCost | number:'1.0-0' }}</td>\n                  <td>\n                    <span class=\"badge\" [class.bg-warning]=\"m.status === 'Scheduled' || m.status === 'In Progress'\" [class.bg-success]=\"m.status === 'Completed'\" [class.bg-danger]=\"m.status === 'Overdue'\">\n                      {{ m.status }}\n                    </span>\n                  </td>\n                  <td class=\"small text-muted\">{{ m.remarks }}</td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'inventory') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-6\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Inventory Material Stock levels</h5>\n            \n            <div class=\"table-responsive\">\n              <table class=\"table align-middle\">\n                <thead class=\"table-light text-muted uppercase small\">\n                  <tr>\n                    <th>Item</th>\n                    <th>Current Stock</th>\n                    <th>Buffer level</th>\n                    <th>Status</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (m of projectService.materials(); track m.id) {\n                    <tr>\n                      <td class=\"fw-bold text-dark\">{{ m.name }}</td>\n                      <td>{{ m.inStock }} {{ m.unit }}</td>\n                      <td>{{ m.reorderLevel }} {{ m.unit }}</td>\n                      <td>\n                        @if (m.inStock <= m.reorderLevel) {\n                          <span class=\"badge bg-danger\">Critical Reorder</span>\n                        } @else {\n                          <span class=\"badge bg-success\">Optimal</span>\n                        }\n                      </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Contractors Dispatch Requests</h5>\n            <p class=\"text-muted small\">Approve or reject contractor concrete/material requests. Approvals deduct stock.</p>\n\n            <div class=\"d-flex flex-column gap-3\">\n              @for (req of projectService.materialRequests(); track req.id) {\n                <div class=\"p-3 border rounded-3 bg-light d-flex flex-column gap-2\">\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                    <span class=\"fw-bold text-dark\">{{ req.materialName }}</span>\n                    <span class=\"badge\" \n                          [class.bg-warning]=\"req.status === 'Pending'\"\n                          [class.bg-success]=\"req.status === 'Approved'\"\n                          [class.bg-danger]=\"req.status === 'Rejected'\">\n                      {{ req.status }}\n                    </span>\n                  </div>\n                  <div class=\"small text-muted\">\n                    Requested by: <strong>{{ req.requestedBy }}</strong> &bull; Quantity: <strong>{{ req.quantity }}</strong>\n                  </div>\n                  <div class=\"small text-secondary\">Project Site: {{ req.projectName }} &bull; Date: {{ req.requestDate }}</div>\n                  \n                  @if (req.status === 'Pending') {\n                    <div class=\"d-flex gap-2 justify-content-end mt-1\">\n                      <button class=\"btn btn-outline-danger btn-sm\" (click)=\"rejectInventoryRequest(req.id)\">Reject</button>\n                      <button class=\"btn btn-success btn-sm\" (click)=\"approveInventoryRequest(req.id)\">Approve</button>\n                    </div>\n                  }\n                </div>\n              }\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n   \n    <!-- ========================================== -->\n  <!-- MODULE 7: PROCUREMENT MANAGEMENT -->\n  <!-- ========================================== -->\n  @if (activeModule === 'procurement') {\n    <app-procurement-management></app-procurement-management>\n  }\n\n  @if (activeModule === 'budget') {\n    <div class=\"row g-4 mb-4\">\n      <div class=\"col-lg-6\">\n        @if (budgetChartLabels().length > 0) {\n          <app-chart type=\"grouped-bar\" \n                     title=\"Committed Capital vs Spent To Date ($ Millions)\"\n                     [labels]=\"budgetChartLabels()\"\n                     [data]=\"budgetChartCommitted()\"\n                     [data2]=\"budgetChartSpent()\"\n                     dataLabel=\"Committed\"\n                     data2Label=\"Spent To Date\"\n                     [customColors]=\"['#0d6efd', '#20c997']\">\n          </app-chart>\n        } @else {\n          <app-chart type=\"grouped-bar\" \n                     title=\"Committed Capital vs Spent To Date ($ Millions)\"\n                     [labels]=\"['Vanguard Tower', 'Riverfront II', 'Metro Transit', 'Eco-Resort']\"\n                     [data]=\"[12.5, 8.2, 15.0, 5.4]\"\n                     [data2]=\"[9.1, 6.7, 8.3, 3.2]\"\n                     dataLabel=\"Committed\"\n                     data2Label=\"Spent To Date\"\n                     [customColors]=\"['#0d6efd', '#20c997']\">\n          </app-chart>\n        }\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Portfolio Financial Sheet</h5>\n            \n            <div class=\"table-responsive\">\n              <table class=\"table table-hover align-middle\">\n                <thead class=\"table-light text-muted uppercase small\">\n                  <tr>\n                    <th>Asset Site</th>\n                    <th>Committed Pool</th>\n                    <th>Spend To Date</th>\n                    <th>Remaining Buffer</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (p of projectService.projects(); track p.id) {\n                    <tr>\n                      <td class=\"fw-bold text-dark\">{{ p.name }}</td>\n                      <td>${{ p.budget | number:'1.0-0' }}</td>\n                      <td>${{ p.spent | number:'1.0-0' }}</td>\n                      <td class=\"fw-bold text-success\">${{ (p.budget - p.spent) | number:'1.0-0' }}</td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'reports') {\n    <div class=\"card border-0 shadow-sm rounded-3\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-1\">Platform Analytics & Document Downloader</h5>\n        <p class=\"text-muted small mb-4\">Click <strong>Preview</strong> to see what's included in each report, then download in Excel or PDF format.</p>\n        \n        <div class=\"list-group list-group-flush\">\n          @for (rpt of reports; track rpt.title) {\n            <div class=\"list-group-item d-flex justify-content-between align-items-center px-0 py-3 bg-transparent border-bottom\">\n              <div class=\"me-3\">\n                <h6 class=\"fw-bold text-dark mb-1\">{{ rpt.title }}</h6>\n                <p class=\"text-muted small mb-0\">{{ rpt.description }}</p>\n                <div class=\"mt-1\">\n                  <span class=\"badge\" [class.bg-success]=\"rpt.format === 'excel'\" [class.bg-danger]=\"rpt.format === 'pdf'\">\n                    <i class=\"bi\" [class.bi-file-earmark-spreadsheet]=\"rpt.format === 'excel'\" [class.bi-file-earmark-pdf]=\"rpt.format === 'pdf'\"></i>\n                    {{ rpt.format === 'excel' ? 'Excel / CSV' : 'PDF Report' }}\n                  </span>\n                </div>\n              </div>\n              <div class=\"d-flex gap-2 flex-shrink-0\">\n                <!-- Preview / Edit button -->\n                <button class=\"btn btn-outline-secondary btn-sm rounded-pill px-3\" (click)=\"openReportPreview(rpt)\">\n                  <i class=\"bi bi-eye me-1\"></i> Preview\n                </button>\n                <!-- Direct Download -->\n                @if (rpt.format === 'excel') {\n                  <button class=\"btn btn-outline-success btn-sm rounded-pill px-3\" (click)=\"exportExcel(rpt)\">\n                    <i class=\"bi bi-download me-1\"></i> Export Excel\n                  </button>\n                } @else {\n                  <button class=\"btn btn-outline-danger btn-sm rounded-pill px-3\" (click)=\"exportPDF(rpt)\">\n                    <i class=\"bi bi-download me-1\"></i> Export PDF\n                  </button>\n                }\n              </div>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n\n    <!-- Report Preview Modal -->\n    @if (showReportModal && selectedReport) {\n      <div class=\"modal-backdrop-overlay\" style=\"position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:1050;display:flex;align-items:center;justify-content:center;\" (click)=\"closeReportModal()\">\n        <div class=\"card border-0 shadow-lg rounded-4\" style=\"max-width:560px;width:90%;max-height:85vh;overflow-y:auto;\" (click)=\"$event.stopPropagation()\">\n          <div class=\"card-body p-4\">\n            <!-- Header -->\n            <div class=\"d-flex justify-content-between align-items-start mb-3\">\n              <div>\n                <span class=\"badge mb-2\" [class.bg-success]=\"selectedReport.format === 'excel'\" [class.bg-danger]=\"selectedReport.format === 'pdf'\">\n                  <i class=\"bi\" [class.bi-file-earmark-spreadsheet]=\"selectedReport.format === 'excel'\" [class.bi-file-earmark-pdf]=\"selectedReport.format === 'pdf'\"></i>\n                  {{ selectedReport.format === 'excel' ? 'Excel / CSV' : 'PDF Report' }}\n                </span>\n                <h5 class=\"fw-bold text-dark mb-0\">{{ selectedReport.title }}</h5>\n              </div>\n              <button class=\"btn btn-sm btn-light rounded-circle border-0 ms-2\" (click)=\"closeReportModal()\" style=\"width:32px;height:32px;\">\n                <i class=\"bi bi-x-lg\"></i>\n              </button>\n            </div>\n\n            <p class=\"text-muted small mb-3\">{{ selectedReport.description }}</p>\n\n            <!-- Contents / Edit Section -->\n            <div class=\"p-3 bg-light rounded-3 mb-3\">\n              <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                <span class=\"fw-semibold small text-dark\"><i class=\"bi bi-list-check me-1 text-primary\"></i>Report Contents</span>\n                <button class=\"btn btn-xs btn-outline-primary btn-sm rounded-pill px-2 py-0\" (click)=\"toggleEditReport()\">\n                  <i class=\"bi\" [class.bi-pencil]=\"!editingReport\" [class.bi-check-lg]=\"editingReport\"></i>\n                  {{ editingReport ? 'Done' : 'Edit' }}\n                </button>\n              </div>\n              @if (!editingReport) {\n                <ul class=\"mb-0 ps-3\" style=\"list-style:none;\">\n                  @for (item of selectedReport.contents; track $index) {\n                    <li class=\"text-dark small py-1 border-bottom\">\n                      <i class=\"bi bi-check2 text-success me-2\"></i>{{ item }}\n                    </li>\n                  }\n                </ul>\n              } @else {\n                <div class=\"d-flex flex-column gap-2\">\n                  @for (item of selectedReport.contents; track $index; let i = $index) {\n                    <input class=\"form-control form-control-sm\" [(ngModel)]=\"selectedReport.contents[i]\" [name]=\"'reportItem' + i\">\n                  }\n                </div>\n              }\n            </div>\n\n            <!-- Action Buttons -->\n            <div class=\"d-flex gap-2 justify-content-end\">\n              <button class=\"btn btn-outline-secondary btn-sm rounded-pill px-3\" (click)=\"closeReportModal()\">\n                Cancel\n              </button>\n              @if (selectedReport.format === 'excel') {\n                <button class=\"btn btn-success btn-sm rounded-pill px-4\" (click)=\"exportExcel()\">\n                  <i class=\"bi bi-download me-1\"></i> Download Excel\n                </button>\n              } @else {\n                <button class=\"btn btn-danger btn-sm rounded-pill px-4\" (click)=\"exportPDF()\">\n                  <i class=\"bi bi-download me-1\"></i> Download PDF\n                </button>\n              }\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n  }\n\n  @if (activeModule === 'notifications') {\n    <div class=\"row g-4\">\n      <div class=\"col-lg-5\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Publish System-wide Broadcast</h5>\n            <p class=\"text-muted small\">Broadcast bulleting advisories or safety schedules instantly to specified role terminals.</p>\n\n            <form (ngSubmit)=\"sendBroadcast()\">\n              \n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Target Recipients</label>\n                <select class=\"form-select form-control\" name=\"bcTarget\" [(ngModel)]=\"broadcastTarget\">\n                  <option value=\"all\">All Terminals (Public Broadcast)</option>\n                  <option value=\"engineers\">Site Engineers Terminals</option>\n                  <option value=\"contractors\">Contractors Dashboards</option>\n                  <option value=\"workers\">Workers Mobile Terminals</option>\n                </select>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label fw-semibold small text-muted\">Bulletin message</label>\n                <textarea name=\"bcMsg\" [(ngModel)]=\"broadcastMessage\" required rows=\"5\" class=\"form-control\" placeholder=\"Specify warning details, weather cautions, or site upgrades...\"></textarea>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary w-100 py-2.5\">\n                <i class=\"bi bi-send-check-fill me-1\"></i> Publish Bulletin\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-7\">\n        <div class=\"card border-0 shadow-sm rounded-3\">\n          <div class=\"card-body p-4\">\n            <h5 class=\"fw-bold text-dark mb-3\">Active System Bulletins</h5>\n            \n            <div class=\"list-group list-group-flush\">\n              @for (bc of recentBroadcasts(); track bc.id) {\n                <div class=\"list-group-item px-0 py-3 bg-transparent\">\n                  <div class=\"d-flex justify-content-between align-items-center mb-1\">\n                    <span class=\"badge bg-secondary text-capitalize\">Target: {{ bc.target }}</span>\n                    <small class=\"text-muted\">{{ bc.date }}</small>\n                  </div>\n                  <p class=\"text-dark small mb-0\">{{ bc.message }}</p>\n                </div>\n              }\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (activeModule === 'settings') {\n    <div class=\"card border-0 shadow-sm rounded-3\" style=\"max-width: 600px;\">\n      <div class=\"card-body p-4\">\n        <h5 class=\"fw-bold text-dark mb-3\">Corporate Platform Settings</h5>\n        \n        <form (ngSubmit)=\"saveSettings()\">\n          \n          <div class=\"form-group mb-3\">\n            <label class=\"form-label fw-semibold small text-muted\">Currency Symbol Configuration</label>\n            <input type=\"text\" name=\"cur\" [(ngModel)]=\"currencySymbol\" class=\"form-control\" style=\"max-width: 100px;\">\n          </div>\n\n          <div class=\"form-check form-switch mb-3\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"notifySwitch\" name=\"bcSwitch\" [(ngModel)]=\"notificationsEnabled\">\n            <label class=\"form-check-label fw-semibold small text-muted\" for=\"notifySwitch\">Enable Real-Time Dispatch Pushes</label>\n          </div>\n\n          <div class=\"form-group mb-4\">\n            <label class=\"form-label fw-semibold small text-muted\">Gateway API Cache duration (Minutes)</label>\n            <input type=\"number\" name=\"cache\" [(ngModel)]=\"apiCacheDuration\" class=\"form-control\" style=\"max-width: 150px;\">\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary px-4 py-2\">\n            <i class=\"bi bi-save-fill me-1\"></i> Save Changes\n          </button>\n\n        </form>\n      </div>\n    </div>\n  }\n\n</div>\n", styles: [".form-select-sm {\n  font-size: 13px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.table-hover tbody tr {\n  transition: background-color 0.15s ease;\n}\n\n.table-hover tbody tr:hover {\n  background-color: #f8fafc;\n}\n\n.bg-light {\n  background-color: #f8fafc !important;\n}\n\n.list-group-item {\n  border-color: rgba(0, 0, 0, 0.05);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdministratorDashboard, { className: "AdministratorDashboard", filePath: "src/app/pages/admin/dashboard/dashboard.ts", lineNumber: 30 }); })();
