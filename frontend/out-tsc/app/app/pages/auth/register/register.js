import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
const _forTrack0 = ($index, $item) => $item.value;
function Register_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelement(1, "img", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r2 = ctx.$implicit;
    const ɵ$index_7_r3 = ctx.$index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ɵ$index_7_r3 === ctx_r3.currentImageIndex());
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", img_r2, i0.ɵɵsanitizeUrl);
} }
function Register_For_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function Register_For_22_Template_button_click_0_listener() { const ɵ$index_38_r6 = i0.ɵɵrestoreView(_r5).$index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.setSlide(ɵ$index_38_r6)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_38_r6 = ctx.$index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ɵ$index_38_r6 === ctx_r3.currentImageIndex());
    i0.ɵɵattribute("aria-label", "Go to slide " + (ɵ$index_38_r6 + 1));
} }
function Register_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "i", 31);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.errorMessage(), " ");
} }
function Register_For_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", r_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r7.label);
} }
function Register_Conditional_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 32);
    i0.ɵɵtext(1, " Registering... ");
} }
function Register_Conditional_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Create Account ");
} }
export class Register {
    platformId = inject(PLATFORM_ID);
    timerId;
    carouselImages = [
        '/construction1.jpg',
        '/construction2.jpg',
        '/construction3.jpg',
        '/construction4.jpg',
        '/construction5.jpg'
    ];
    currentImageIndex = signal(0, ...(ngDevMode ? [{ debugName: "currentImageIndex" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.timerId = setInterval(() => {
                this.nextSlide();
            }, 4000);
        }
    }
    ngOnDestroy() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }
    nextSlide() {
        this.currentImageIndex.update(idx => (idx + 1) % this.carouselImages.length);
    }
    prevSlide() {
        this.currentImageIndex.update(idx => (idx - 1 + this.carouselImages.length) % this.carouselImages.length);
    }
    setSlide(idx) {
        this.currentImageIndex.set(idx);
    }
    authService = inject(AuthService);
    router = inject(Router);
    name = '';
    email = '';
    password = '';
    role = 'worker'; // default
    company = '';
    phone = '';
    isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    errorMessage = signal(null, ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    rolesList = [
        { value: 'admin', label: 'Administrator' },
        { value: 'project_manager', label: 'Project Manager' },
        { value: 'site_engineer', label: 'Site Engineer' },
        { value: 'contractor', label: 'Contractor' },
        { value: 'worker', label: 'Workforce/Worker' },
        { value: 'client', label: 'Client / Owner' }
    ];
    onSubmit() {
        if (!this.name || !this.email || !this.password || !this.role) {
            this.errorMessage.set('All fields are required.');
            return;
        }
        this.isLoading.set(true);
        this.errorMessage.set(null);
        this.authService.register(this.name, this.email, this.role, this.company, this.phone).subscribe({
            next: (user) => {
                this.isLoading.set(false);
                const destination = this.authService.getDashboardUrl(user.role);
                this.router.navigate([destination]);
            },
            error: (err) => {
                this.isLoading.set(false);
                this.errorMessage.set(err.message || 'Registration failed.');
            }
        });
    }
    static ɵfac = function Register_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Register)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Register, selectors: [["app-register"]], decls: 68, vars: 9, consts: [["registerForm", "ngForm"], [1, "register-container"], [1, "register-left"], [1, "carousel-container"], [1, "carousel-slide", 3, "active"], [1, "carousel-overlay"], [1, "overlay"], [1, "features"], [1, "carousel-indicators"], ["type", "button", 1, "indicator-dot", 3, "active"], [1, "register-right"], [1, "register-card", "my-4"], ["role", "alert", 1, "alert", "alert-danger", "py-2.5", "px-3", "mb-3", "rounded-3", "small", "border-0"], [3, "ngSubmit"], [1, "row"], [1, "col-md-6", "form-group"], ["type", "text", "name", "name", "required", "", "placeholder", "e.g. Your Name", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-6", "form-group", "mt-3", "mt-md-0"], ["type", "email", "name", "email", "required", "", "placeholder", "yourname@buildtrack.com", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "mt-3"], ["type", "password", "name", "password", "required", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "role", "required", "", 1, "form-select", "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "text", "name", "company", "placeholder", "e.g. Acme Construction", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "e.g. +91 555-1234", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "w-100", "mt-4", "d-flex", "align-items-center", "justify-content-center", "gap-2", 3, "disabled"], [1, "login-link", "text-center", "mt-3"], ["routerLink", "/login", 1, "fw-bold", "text-primary"], [1, "carousel-slide"], ["alt", "Construction Site", 1, "carousel-img", 3, "src"], ["type", "button", 1, "indicator-dot", 3, "click"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function Register_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
            i0.ɵɵrepeaterCreate(3, Register_For_4_Template, 2, 3, "div", 4, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelement(5, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6)(7, "h1");
            i0.ɵɵtext(8, "BuildTrack");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, "Join the construction project management platform of the future.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 7)(12, "div");
            i0.ɵɵtext(13, "\u2714 Allocate tasks & resource schedules");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div");
            i0.ɵɵtext(15, "\u2714 Review real-time site activity reports");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div");
            i0.ɵɵtext(17, "\u2714 Fast and secure invoice tracking");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div");
            i0.ɵɵtext(19, "\u2714 Real-time status communication");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(20, "div", 8);
            i0.ɵɵrepeaterCreate(21, Register_For_22_Template, 1, 3, "button", 9, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 10)(24, "div", 11)(25, "h2");
            i0.ɵɵtext(26, "Create Account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "p");
            i0.ɵɵtext(28, "Fill out the credentials to sign up");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(29, Register_Conditional_29_Template, 3, 1, "div", 12);
            i0.ɵɵelementStart(30, "form", 13, 0);
            i0.ɵɵlistener("ngSubmit", function Register_Template_form_ngSubmit_30_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(32, "div", 14)(33, "div", 15)(34, "label");
            i0.ɵɵtext(35, "Full Name *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "input", 16);
            i0.ɵɵtwoWayListener("ngModelChange", function Register_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.name, $event) || (ctx.name = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 17)(38, "label");
            i0.ɵɵtext(39, "Email Address *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function Register_Template_input_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "div", 19)(42, "div", 15)(43, "label");
            i0.ɵɵtext(44, "Password *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "input", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function Register_Template_input_ngModelChange_45_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "div", 17)(47, "label");
            i0.ɵɵtext(48, "Platform Role *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "select", 21);
            i0.ɵɵtwoWayListener("ngModelChange", function Register_Template_select_ngModelChange_49_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.role, $event) || (ctx.role = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵrepeaterCreate(50, Register_For_51_Template, 2, 2, "option", 22, _forTrack0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(52, "div", 19)(53, "div", 15)(54, "label");
            i0.ɵɵtext(55, "Company / Organization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "input", 23);
            i0.ɵɵtwoWayListener("ngModelChange", function Register_Template_input_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.company, $event) || (ctx.company = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "div", 17)(58, "label");
            i0.ɵɵtext(59, "Phone Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "input", 24);
            i0.ɵɵtwoWayListener("ngModelChange", function Register_Template_input_ngModelChange_60_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.phone, $event) || (ctx.phone = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(61, "button", 25);
            i0.ɵɵconditionalCreate(62, Register_Conditional_62_Template, 2, 0)(63, Register_Conditional_63_Template, 1, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "div", 26);
            i0.ɵɵtext(65, " Already have an account? ");
            i0.ɵɵelementStart(66, "a", 27);
            i0.ɵɵtext(67, " Login ");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            const registerForm_r8 = i0.ɵɵreference(31);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.carouselImages);
            i0.ɵɵadvance(18);
            i0.ɵɵrepeater(ctx.carouselImages);
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(ctx.errorMessage() ? 29 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.name);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.role);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.rolesList);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.company);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.phone);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isLoading() || !registerForm_r8.form.valid);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 62 : 63);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, RouterModule, i2.RouterLink], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.register-left[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 60px;\n  overflow: hidden;\n}\n\n.carousel-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.carousel-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.carousel-slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.carousel-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.carousel-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.75) 100%);\n  z-index: 2;\n}\n\n.carousel-indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 10px;\n  z-index: 4;\n}\n\n.indicator-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  padding: 0;\n}\n\n.indicator-dot.active[_ngcontent-%COMP%] {\n  background: white;\n  transform: scale(1.2);\n  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 450px;\n  z-index: 3;\n}\n\n.overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: bold;\n}\n\n.overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 20px;\n  line-height: 30px;\n}\n\n.features[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.features[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  font-size: 18px;\n}\n\n.register-right[_ngcontent-%COMP%] {\n  flex: 1.2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f8f9fa;\n  overflow-y: auto;\n}\n\n.register-card[_ngcontent-%COMP%] {\n  width: 580px;\n  background: white;\n  padding: 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.register-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n\n.register-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14.5px;\n  margin-bottom: 24px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  font-weight: 500;\n  font-size: 13.5px;\n  color: #475569;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: 48px;\n  border-radius: 10px;\n  border: 1.5px solid #cbd5e1;\n  padding: 10px 16px;\n  font-size: 14.5px;\n  color: #1e293b;\n  background-color: #fff;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0d6efd;\n  box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.12);\n}\n\n.form-select[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23475569' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 16px center;\n  background-size: 12px 12px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 16px;\n  font-weight: 600;\n  background: linear-gradient(135deg, #0d6efd 0%, #0056b3 100%);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  box-shadow: 0 4px 14px rgba(13, 110, 253, 0.25);\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #1e75ff 0%, #004fb0 100%);\n  transform: translateY(-1.5px);\n  box-shadow: 0 6px 18px rgba(13, 110, 253, 0.35);\n}\n\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 3px 10px rgba(13, 110, 253, 0.2);\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #cbd5e1;\n  color: #94a3b8;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n\n.login-link[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  color: #475569;\n}\n\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\n@media(max-width: 900px) {\n  .register-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .register-right[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Register, [{
        type: Component,
        args: [{ selector: 'app-register', standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: "<div class=\"register-container\">\n\n    <div class=\"register-left\">\n        <div class=\"carousel-container\">\n            @for (img of carouselImages; track img; let i = $index) {\n              <div class=\"carousel-slide\" [class.active]=\"i === currentImageIndex()\">\n                <img [src]=\"img\" alt=\"Construction Site\" class=\"carousel-img\">\n              </div>\n            }\n            <div class=\"carousel-overlay\"></div>\n        </div>\n\n        <div class=\"overlay\">\n            <h1>BuildTrack</h1>\n            <p>Join the construction project management platform of the future.</p>\n            <div class=\"features\">\n                <div>\u2714 Allocate tasks & resource schedules</div>\n                <div>\u2714 Review real-time site activity reports</div>\n                <div>\u2714 Fast and secure invoice tracking</div>\n                <div>\u2714 Real-time status communication</div>\n            </div>\n        </div>\n\n        <div class=\"carousel-indicators\">\n            @for (img of carouselImages; track img; let i = $index) {\n              <button type=\"button\" \n                      class=\"indicator-dot\" \n                      [class.active]=\"i === currentImageIndex()\" \n                      (click)=\"setSlide(i)\"\n                      [attr.aria-label]=\"'Go to slide ' + (i + 1)\">\n              </button>\n            }\n        </div>\n    </div>\n\n    <div class=\"register-right\">\n\n        <div class=\"register-card my-4\">\n\n            <h2>Create Account</h2>\n            <p>Fill out the credentials to sign up</p>\n\n            @if (errorMessage()) {\n              <div class=\"alert alert-danger py-2.5 px-3 mb-3 rounded-3 small border-0\" role=\"alert\">\n                <i class=\"bi bi-exclamation-triangle-fill me-2\"></i> {{ errorMessage() }}\n              </div>\n            }\n\n            <form (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n\n                <div class=\"row\">\n                  <div class=\"col-md-6 form-group\">\n                      <label>Full Name *</label>\n                      <input\n                          type=\"text\"\n                          name=\"name\"\n                          [(ngModel)]=\"name\"\n                          required\n                          class=\"form-control\"\n                          placeholder=\"e.g. Your Name\">\n                  </div>\n\n                  <div class=\"col-md-6 form-group mt-3 mt-md-0\">\n                      <label>Email Address *</label>\n                      <input\n                          type=\"email\"\n                          name=\"email\"\n                          [(ngModel)]=\"email\"\n                          required\n                          class=\"form-control\"\n                          placeholder=\"yourname@buildtrack.com\">\n                  </div>\n                </div>\n\n                <div class=\"row mt-3\">\n                  <div class=\"col-md-6 form-group\">\n                      <label>Password *</label>\n                      <input\n                          type=\"password\"\n                          name=\"password\"\n                          [(ngModel)]=\"password\"\n                          required\n                          class=\"form-control\"\n                          placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\">\n                  </div>\n\n                  <div class=\"col-md-6 form-group mt-3 mt-md-0\">\n                      <label>Platform Role *</label>\n                      <select class=\"form-select form-control\" name=\"role\" [(ngModel)]=\"role\" required>\n                        @for (r of rolesList; track r.value) {\n                          <option [value]=\"r.value\">{{ r.label }}</option>\n                        }\n                      </select>\n                  </div>\n                </div>\n\n                <div class=\"row mt-3\">\n                  <div class=\"col-md-6 form-group\">\n                      <label>Company / Organization</label>\n                      <input\n                          type=\"text\"\n                          name=\"company\"\n                          [(ngModel)]=\"company\"\n                          class=\"form-control\"\n                          placeholder=\"e.g. Acme Construction\">\n                  </div>\n\n                  <div class=\"col-md-6 form-group mt-3 mt-md-0\">\n                      <label>Phone Number</label>\n                      <input\n                          type=\"tel\"\n                          name=\"phone\"\n                          [(ngModel)]=\"phone\"\n                          class=\"form-control\"\n                          placeholder=\"e.g. +91 555-1234\">\n                  </div>\n                </div>\n\n                <button class=\"btn btn-primary w-100 mt-4 d-flex align-items-center justify-content-center gap-2\" \n                        [disabled]=\"isLoading() || !registerForm.form.valid\">\n                    @if (isLoading()) {\n                      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                      Registering...\n                    } @else {\n                      Create Account\n                    }\n                </button>\n\n                <div class=\"login-link text-center mt-3\">\n                    Already have an account?\n                    <a routerLink=\"/login\" class=\"fw-bold text-primary\">\n                        Login\n                    </a>\n                </div>\n\n            </form>\n\n        </div>\n\n    </div>\n\n</div>\n", styles: ["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.register-container {\n  display: flex;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.register-left {\n  flex: 1;\n  position: relative;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 60px;\n  overflow: hidden;\n}\n\n.carousel-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.carousel-slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.carousel-slide.active {\n  opacity: 1;\n}\n\n.carousel-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.carousel-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.75) 100%);\n  z-index: 2;\n}\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 10px;\n  z-index: 4;\n}\n\n.indicator-dot {\n  width: 10px;\n  height: 10px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  padding: 0;\n}\n\n.indicator-dot.active {\n  background: white;\n  transform: scale(1.2);\n  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);\n}\n\n.overlay {\n  position: relative;\n  max-width: 450px;\n  z-index: 3;\n}\n\n.overlay h1 {\n  font-size: 48px;\n  font-weight: bold;\n}\n\n.overlay p {\n  margin-top: 20px;\n  font-size: 20px;\n  line-height: 30px;\n}\n\n.features {\n  margin-top: 40px;\n}\n\n.features div {\n  margin: 15px 0;\n  font-size: 18px;\n}\n\n.register-right {\n  flex: 1.2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f8f9fa;\n  overflow-y: auto;\n}\n\n.register-card {\n  width: 580px;\n  background: white;\n  padding: 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.register-card h2 {\n  color: #1e293b;\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n\n.register-card p {\n  color: #64748b;\n  font-size: 14.5px;\n  margin-bottom: 24px;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group label {\n  margin-bottom: 6px;\n  font-weight: 500;\n  font-size: 13.5px;\n  color: #475569;\n}\n\n.form-control {\n  height: 48px;\n  border-radius: 10px;\n  border: 1.5px solid #cbd5e1;\n  padding: 10px 16px;\n  font-size: 14.5px;\n  color: #1e293b;\n  background-color: #fff;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.form-control::placeholder {\n  color: #94a3b8;\n}\n\n.form-control:focus {\n  outline: none;\n  border-color: #0d6efd;\n  box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.12);\n}\n\n.form-select {\n  padding-left: 12px;\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23475569' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 16px center;\n  background-size: 12px 12px;\n}\n\n.btn-primary {\n  height: 48px;\n  font-size: 16px;\n  font-weight: 600;\n  background: linear-gradient(135deg, #0d6efd 0%, #0056b3 100%);\n  border: none;\n  border-radius: 10px;\n  color: white;\n  box-shadow: 0 4px 14px rgba(13, 110, 253, 0.25);\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n\n.btn-primary:hover:not(:disabled) {\n  background: linear-gradient(135deg, #1e75ff 0%, #004fb0 100%);\n  transform: translateY(-1.5px);\n  box-shadow: 0 6px 18px rgba(13, 110, 253, 0.35);\n}\n\n.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 3px 10px rgba(13, 110, 253, 0.2);\n}\n\n.btn-primary:disabled {\n  background: #cbd5e1;\n  color: #94a3b8;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n\n.login-link {\n  font-size: 14.5px;\n  color: #475569;\n}\n\n.login-link a {\n  color: #0d6efd;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n\n.login-link a:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\n@media(max-width: 900px) {\n  .register-left {\n    display: none;\n  }\n  .register-right {\n    width: 100%;\n    padding: 20px;\n  }\n  .register-card {\n    width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Register, { className: "Register", filePath: "src/app/pages/auth/register/register.ts", lineNumber: 15 }); })();
