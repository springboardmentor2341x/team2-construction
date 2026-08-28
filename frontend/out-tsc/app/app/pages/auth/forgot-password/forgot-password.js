import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
function ForgotPassword_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "h6", 5);
    i0.ɵɵelement(2, "i", 6);
    i0.ɵɵtext(3, "Reset Email Sent!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 7);
    i0.ɵɵtext(5, "We have simulated sending a password reset link to ");
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, ". Please check your inbox.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "a", 8);
    i0.ɵɵtext(10, "Back to Login");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.email);
} }
function ForgotPassword_Conditional_5_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "i", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage(), " ");
} }
function ForgotPassword_Conditional_5_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 20);
    i0.ɵɵtext(1, " Sending... ");
} }
function ForgotPassword_Conditional_5_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Send Reset Link ");
} }
function ForgotPassword_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1, "Enter the email associated with your account and we will send you instructions to reset your password.");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(2, ForgotPassword_Conditional_5_Conditional_2_Template, 3, 1, "div", 10);
    i0.ɵɵelementStart(3, "form", 11, 0);
    i0.ɵɵlistener("ngSubmit", function ForgotPassword_Conditional_5_Template_form_ngSubmit_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onSubmit()); });
    i0.ɵɵelementStart(5, "div", 12)(6, "label", 13);
    i0.ɵɵtext(7, "Email Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function ForgotPassword_Conditional_5_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 15);
    i0.ɵɵconditionalCreate(10, ForgotPassword_Conditional_5_Conditional_10_Template, 2, 0)(11, ForgotPassword_Conditional_5_Conditional_11_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 16)(13, "a", 17);
    i0.ɵɵelement(14, "i", 18);
    i0.ɵɵtext(15, " Back to Login ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const forgotForm_r3 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.errorMessage() ? 2 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.email);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.isLoading() || !forgotForm_r3.form.valid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isLoading() ? 10 : 11);
} }
export class ForgotPassword {
    authService = inject(AuthService);
    email = '';
    isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    isSubmitted = signal(false, ...(ngDevMode ? [{ debugName: "isSubmitted" }] : /* istanbul ignore next */ []));
    errorMessage = signal(null, ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    onSubmit() {
        if (!this.email) {
            this.errorMessage.set('Please enter your email address.');
            return;
        }
        this.isLoading.set(true);
        this.errorMessage.set(null);
        this.authService.forgotPassword(this.email).subscribe({
            next: () => {
                this.isLoading.set(false);
                this.isSubmitted.set(true);
            },
            error: (err) => {
                this.isLoading.set(false);
                this.errorMessage.set(err.message || 'Something went wrong.');
            }
        });
    }
    static ɵfac = function ForgotPassword_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForgotPassword)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ForgotPassword, selectors: [["app-forgot-password"]], decls: 6, vars: 1, consts: [["forgotForm", "ngForm"], [1, "forgot-container"], [1, "forgot-card"], [1, "text-primary", "fw-bold", "mb-2"], ["role", "alert", 1, "alert", "alert-success", "border-0", "rounded-3", "py-3", "px-3", "mb-4"], [1, "alert-heading", "fw-bold", "mb-1"], [1, "bi", "bi-envelope-check-fill", "me-2"], [1, "small", "m-0", "text-secondary"], ["routerLink", "/login", 1, "btn", "btn-primary", "w-100", "py-2.5"], [1, "text-muted", "mb-4", "small"], ["role", "alert", 1, "alert", "alert-danger", "py-2.5", "px-3", "mb-3", "rounded-3", "small", "border-0"], [3, "ngSubmit"], [1, "form-group", "mb-4"], [1, "form-label", "fw-semibold", "small", "mb-2", "text-dark"], ["type", "email", "name", "email", "required", "", "placeholder", "e.g. admin@buildtrack.com", 1, "form-control", "py-2.5", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "w-100", "py-2.5", "mb-3", "d-flex", "align-items-center", "justify-content-center", "gap-2", 3, "disabled"], [1, "text-center"], ["routerLink", "/login", 1, "text-decoration-none", "small", "text-muted", "hover-primary", "fw-semibold"], [1, "bi", "bi-arrow-left", "me-1"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function ForgotPassword_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
            i0.ɵɵtext(3, "Reset Password");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, ForgotPassword_Conditional_4_Template, 11, 1)(5, ForgotPassword_Conditional_5_Template, 16, 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.isSubmitted() ? 4 : 5);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, RouterModule, i2.RouterLink], styles: [".forgot-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background-color: #f1f5f9; \n}\n\n.forgot-card[_ngcontent-%COMP%] {\n  width: 440px;\n  background: white;\n  padding: 40px;\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 14px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 16px;\n}\n\n.hover-primary[_ngcontent-%COMP%]:hover {\n  color: #0d6efd !important;\n}\n\n@media (max-width: 480px) {\n  .forgot-card[_ngcontent-%COMP%] {\n    width: 90%;\n    padding: 25px;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPassword, [{
        type: Component,
        args: [{ selector: 'app-forgot-password', standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: "<div class=\"forgot-container\">\n  \n  <div class=\"forgot-card\">\n    \n    <h2 class=\"text-primary fw-bold mb-2\">Reset Password</h2>\n    \n    @if (isSubmitted()) {\n      <div class=\"alert alert-success border-0 rounded-3 py-3 px-3 mb-4\" role=\"alert\">\n        <h6 class=\"alert-heading fw-bold mb-1\"><i class=\"bi bi-envelope-check-fill me-2\"></i>Reset Email Sent!</h6>\n        <p class=\"small m-0 text-secondary\">We have simulated sending a password reset link to <strong>{{ email }}</strong>. Please check your inbox.</p>\n      </div>\n      <a routerLink=\"/login\" class=\"btn btn-primary w-100 py-2.5\">Back to Login</a>\n    } @else {\n      <p class=\"text-muted mb-4 small\">Enter the email associated with your account and we will send you instructions to reset your password.</p>\n      \n      @if (errorMessage()) {\n        <div class=\"alert alert-danger py-2.5 px-3 mb-3 rounded-3 small border-0\" role=\"alert\">\n          <i class=\"bi bi-exclamation-triangle-fill me-2\"></i> {{ errorMessage() }}\n        </div>\n      }\n\n      <form (ngSubmit)=\"onSubmit()\" #forgotForm=\"ngForm\">\n        \n        <div class=\"form-group mb-4\">\n          <label class=\"form-label fw-semibold small mb-2 text-dark\">Email Address</label>\n          <input type=\"email\" \n                 name=\"email\" \n                 [(ngModel)]=\"email\" \n                 required \n                 class=\"form-control py-2.5\" \n                 placeholder=\"e.g. admin@buildtrack.com\">\n        </div>\n\n        <button class=\"btn btn-primary w-100 py-2.5 mb-3 d-flex align-items-center justify-content-center gap-2\" \n                [disabled]=\"isLoading() || !forgotForm.form.valid\">\n          @if (isLoading()) {\n            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            Sending...\n          } @else {\n            Send Reset Link\n          }\n        </button>\n\n        <div class=\"text-center\">\n          <a routerLink=\"/login\" class=\"text-decoration-none small text-muted hover-primary fw-semibold\">\n            <i class=\"bi bi-arrow-left me-1\"></i> Back to Login\n          </a>\n        </div>\n\n      </form>\n    }\n\n  </div>\n\n</div>\n", styles: [".forgot-container {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background-color: #f1f5f9; /* Slate 100 background */\n}\n\n.forgot-card {\n  width: 440px;\n  background: white;\n  padding: 40px;\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n}\n\n.form-control {\n  height: 48px;\n  font-size: 14px;\n}\n\n.btn {\n  height: 48px;\n  font-size: 16px;\n}\n\n.hover-primary:hover {\n  color: #0d6efd !important;\n}\n\n@media (max-width: 480px) {\n  .forgot-card {\n    width: 90%;\n    padding: 25px;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotPassword, { className: "ForgotPassword", filePath: "src/app/pages/auth/forgot-password/forgot-password.ts", lineNumber: 14 }); })();
