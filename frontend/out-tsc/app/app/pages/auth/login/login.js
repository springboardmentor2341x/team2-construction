import { Component, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
const _c0 = ["bgVideo"];
const _forTrack0 = ($index, $item) => $item.role;
function Login_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "i", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.errorMessage(), " ");
} }
function Login_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 30);
    i0.ɵɵtext(1, " Logging in... ");
} }
function Login_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Login ");
} }
function Login_For_44_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function Login_For_44_Template_button_click_0_listener() { const acc_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectDemo(acc_r5.email)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const acc_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", acc_r5.label, " ");
} }
export class Login {
    bgVideo;
    ngAfterViewInit() {
        if (this.bgVideo && this.bgVideo.nativeElement && typeof this.bgVideo.nativeElement.play === 'function') {
            this.bgVideo.nativeElement.play().catch(err => {
                console.log('Autoplay was prevented or video loading failed:', err);
            });
        }
    }
    authService = inject(AuthService);
    router = inject(Router);
    email = '';
    password = '';
    isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    errorMessage = signal(null, ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    isMuted = signal(true, ...(ngDevMode ? [{ debugName: "isMuted" }] : /* istanbul ignore next */ []));
    toggleMute() {
        this.isMuted.update(val => !val);
    }
    // Demo accounts data for testing
    demoAccounts = [
        { label: 'Admin', email: 'admin@buildtrack.com', role: 'admin' },
        { label: 'Proj Mgr', email: 'pm@buildtrack.com', role: 'project_manager' },
        { label: 'Site Eng', email: 'engineer@buildtrack.com', role: 'site_engineer' },
        { label: 'Contractor', email: 'contractor@buildtrack.com', role: 'contractor' },
        { label: 'Worker', email: 'worker@buildtrack.com', role: 'worker' },
        { label: 'Client', email: 'client@buildtrack.com', role: 'client' }
    ];
    selectDemo(email) {
        this.email = email;
        this.password = 'password123'; // fill a dummy password
        this.onSubmit();
    }
    onSubmit() {
        if (!this.email) {
            this.errorMessage.set('Please enter your email address.');
            return;
        }
        this.isLoading.set(true);
        this.errorMessage.set(null);
        this.authService.login(this.email, this.password).subscribe({
            next: (user) => {
                this.isLoading.set(false);
                const destination = this.authService.getDashboardUrl(user.role);
                this.router.navigate([destination]);
            },
            error: (err) => {
                this.isLoading.set(false);
                this.errorMessage.set(err.message || 'Authentication failed. Please check credentials.');
            }
        });
    }
    static ɵfac = function Login_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Login)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Login, selectors: [["app-login"]], viewQuery: function Login_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bgVideo = _t.first);
        } }, decls: 49, vars: 11, consts: [["bgVideo", ""], ["loginForm", "ngForm"], [1, "login-container"], [1, "login-left"], ["autoplay", "", "loop", "", "playsinline", "", 1, "bg-video", 3, "ended", "pause", "muted"], ["src", "/CcV.mp4", "type", "video/mp4"], ["type", "button", "aria-label", "Toggle background music", 1, "audio-control-btn", 3, "click"], [1, "bi"], [1, "login-right"], [1, "login-card"], [1, "brand-header"], ["src", "/BuildTrack_Logo.png", "alt", "BuildTrack Logo", 1, "brand-logo"], ["role", "alert", 1, "alert", "alert-danger", "py-2.5", "px-3", "mb-3", "rounded-3", "small", "border-0"], [3, "ngSubmit"], [1, "form-group"], ["type", "email", "name", "email", "required", "", "placeholder", "e.g. admin@buildtrack.com", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "mt-3"], ["type", "password", "name", "password", "required", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "options", "mt-3"], ["type", "checkbox", "id", "rememberMe"], ["for", "rememberMe", 1, "ms-1", "cursor-pointer"], ["routerLink", "/forgot-password", 1, "fw-semibold", "text-primary"], [1, "btn", "btn-primary", "w-100", "mt-4", "d-flex", "align-items-center", "justify-content-center", "gap-2", 3, "disabled"], [1, "mt-4", "demo-badge-container"], [1, "demo-title", "text-center"], [1, "d-flex", "flex-wrap", "gap-2", "justify-content-center"], ["type", "button", 1, "demo-btn"], [1, "register"], ["routerLink", "/register", 1, "fw-bold", "text-primary"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["type", "button", 1, "demo-btn", 3, "click"]], template: function Login_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "video", 4, 0);
            i0.ɵɵlistener("ended", function Login_Template_video_ended_2_listener() { i0.ɵɵrestoreView(_r1); const bgVideo_r2 = i0.ɵɵreference(3); return i0.ɵɵresetView(bgVideo_r2.play()); })("pause", function Login_Template_video_pause_2_listener() { i0.ɵɵrestoreView(_r1); const bgVideo_r2 = i0.ɵɵreference(3); return i0.ɵɵresetView(bgVideo_r2.play()); });
            i0.ɵɵelement(4, "source", 5);
            i0.ɵɵtext(5, " Your browser does not support the video tag. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 6);
            i0.ɵɵlistener("click", function Login_Template_button_click_6_listener() { return ctx.toggleMute(); });
            i0.ɵɵelement(7, "i", 7);
            i0.ɵɵelementStart(8, "span");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 8)(11, "div", 9)(12, "div", 10);
            i0.ɵɵelement(13, "img", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "h2");
            i0.ɵɵtext(15, "Welcome Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p");
            i0.ɵɵtext(17, "Please login to continue to your dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(18, Login_Conditional_18_Template, 3, 1, "div", 12);
            i0.ɵɵelementStart(19, "form", 13, 1);
            i0.ɵɵlistener("ngSubmit", function Login_Template_form_ngSubmit_19_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(21, "div", 14)(22, "label");
            i0.ɵɵtext(23, "Email Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function Login_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 16)(26, "label");
            i0.ɵɵtext(27, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "input", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function Login_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 18)(30, "div");
            i0.ɵɵelement(31, "input", 19);
            i0.ɵɵelementStart(32, "label", 20);
            i0.ɵɵtext(33, "Remember Me");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "a", 21);
            i0.ɵɵtext(35, " Forgot Password? ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "button", 22);
            i0.ɵɵconditionalCreate(37, Login_Conditional_37_Template, 2, 0)(38, Login_Conditional_38_Template, 1, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "div", 23)(40, "span", 24);
            i0.ɵɵtext(41, " Quick Access Demo Roles ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 25);
            i0.ɵɵrepeaterCreate(43, Login_For_44_Template, 2, 1, "button", 26, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 27);
            i0.ɵɵtext(46, " Don't have an account? ");
            i0.ɵɵelementStart(47, "a", 28);
            i0.ɵɵtext(48, " Register ");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            const loginForm_r6 = i0.ɵɵreference(20);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("muted", ctx.isMuted());
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("bi-volume-mute-fill", ctx.isMuted())("bi-volume-up-fill", !ctx.isMuted());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.isMuted() ? "Audio Off" : "Audio On");
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(ctx.errorMessage() ? 18 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("disabled", ctx.isLoading() || !loginForm_r6.form.valid);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 37 : 38);
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.demoAccounts);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, RouterModule, i2.RouterLink], styles: ["*[_ngcontent-%COMP%]{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n}\n\n.login-container[_ngcontent-%COMP%]{\n\n    display:flex;\n    height:100vh;\n\n    font-family:Arial, Helvetica, sans-serif;\n\n}\n\n.login-left[_ngcontent-%COMP%]{\n\n    flex:1;\n\n    position:relative;\n\n    overflow:hidden;\n\n    background:#000;\n\n}\n\n.bg-video[_ngcontent-%COMP%]{\n\n    position:absolute;\n\n    top:0;\n\n    left:0;\n\n    width:100%;\n\n    height:100%;\n\n    object-fit:cover;\n\n}\n\n.login-right[_ngcontent-%COMP%]{\n\n    flex:1;\n\n    display:flex;\n\n    justify-content:center;\n\n    align-items:center;\n\n    background:#f8f9fa;\n\n}\n\n.brand-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 24px;\n}\n\n.brand-logo[_ngcontent-%COMP%] {\n    height: 140px;\n    width: auto;\n    object-fit: contain;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-weight: 700;\n    color: #0f172a;\n    letter-spacing: -0.03em;\n}\n\n.login-card[_ngcontent-%COMP%] {\n    width: 430px;\n    background: white;\n    padding: 40px;\n    border-radius: 16px;\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n    border: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.login-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #1e293b;\n    font-size: 28px;\n    font-weight: 700;\n    margin-bottom: 6px;\n}\n\n.login-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #64748b;\n    font-size: 14.5px;\n    margin-bottom: 24px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 6px;\n    font-weight: 500;\n    font-size: 13.5px;\n    color: #475569;\n}\n\n.form-control[_ngcontent-%COMP%] {\n    height: 48px;\n    border-radius: 10px;\n    border: 1.5px solid #cbd5e1;\n    padding: 10px 16px;\n    font-size: 14.5px;\n    color: #1e293b;\n    background-color: #fff;\n    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n    color: #94a3b8;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-color: #0d6efd;\n    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.12);\n}\n\n.options[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 14px;\n    color: #475569;\n}\n\n.options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-weight: 400;\n}\n\n.options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #0d6efd;\n    text-decoration: none;\n    transition: color 0.2s ease;\n}\n\n.options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #0056b3;\n    text-decoration: underline;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n    height: 48px;\n    font-size: 16px;\n    font-weight: 600;\n    background: linear-gradient(135deg, #0d6efd 0%, #0056b3 100%);\n    border: none;\n    border-radius: 10px;\n    color: white;\n    box-shadow: 0 4px 14px rgba(13, 110, 253, 0.25);\n    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n    background: linear-gradient(135deg, #1e75ff 0%, #004fb0 100%);\n    transform: translateY(-1.5px);\n    box-shadow: 0 6px 18px rgba(13, 110, 253, 0.35);\n}\n\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n    transform: translateY(0);\n    box-shadow: 0 3px 10px rgba(13, 110, 253, 0.2);\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n    background: #cbd5e1;\n    color: #94a3b8;\n    box-shadow: none;\n    cursor: not-allowed;\n}\n\n.demo-badge-container[_ngcontent-%COMP%] {\n    background: #f8fafc;\n    border-radius: 12px;\n    padding: 16px;\n    border: 1px dashed #e2e8f0;\n}\n\n.demo-title[_ngcontent-%COMP%] {\n    color: #64748b;\n    font-size: 11px;\n    letter-spacing: 0.05em;\n    font-weight: 700;\n    text-transform: uppercase;\n    display: block;\n    margin-bottom: 12px;\n}\n\n.demo-btn[_ngcontent-%COMP%] {\n    background: white;\n    border: 1px solid #e2e8f0;\n    border-radius: 8px;\n    color: #475569;\n    font-size: 12px;\n    font-weight: 500;\n    padding: 6px 12px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n}\n\n.demo-btn[_ngcontent-%COMP%]:hover {\n    background: #f1f5f9;\n    border-color: #cbd5e1;\n    color: #0f172a;\n    transform: translateY(-1px);\n    box-shadow: 0 2px 5px rgba(0,0,0,0.05);\n}\n\n.demo-btn[_ngcontent-%COMP%]:active {\n    transform: translateY(0);\n}\n\n.register[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 24px;\n    font-size: 14.5px;\n    color: #475569;\n}\n\n.register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #0d6efd;\n    text-decoration: none;\n    transition: color 0.2s ease;\n}\n\n.register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #0056b3;\n    text-decoration: underline;\n}\n\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.audio-control-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 24px;\n  right: 24px;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 30px;\n  padding: 10px 18px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n}\n\n.audio-control-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n  border-color: rgba(255, 255, 255, 0.4);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);\n}\n\n.audio-control-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.audio-control-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n@media(max-width:900px){\n\n.login-left[_ngcontent-%COMP%]{\n\ndisplay:none;\n\n}\n\n.login-right[_ngcontent-%COMP%]{\n\nwidth:100%;\n\n}\n\n.login-card[_ngcontent-%COMP%]{\n\nwidth:90%;\n\n}\n\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Login, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: "<div class=\"login-container\">\n\n    <div class=\"login-left\">\n        <video #bgVideo autoplay loop [muted]=\"isMuted()\" playsinline class=\"bg-video\" (ended)=\"bgVideo.play()\" (pause)=\"bgVideo.play()\">\n            <source src=\"/CcV.mp4\" type=\"video/mp4\">\n            Your browser does not support the video tag.\n        </video>\n        <button type=\"button\" class=\"audio-control-btn\" (click)=\"toggleMute()\" aria-label=\"Toggle background music\">\n            <i class=\"bi\" [class.bi-volume-mute-fill]=\"isMuted()\" [class.bi-volume-up-fill]=\"!isMuted()\"></i>\n            <span>{{ isMuted() ? 'Audio Off' : 'Audio On' }}</span>\n        </button>\n    </div>\n\n    <div class=\"login-right\">\n\n        <div class=\"login-card\">\n\n            <div class=\"brand-header\">\n                <img src=\"/BuildTrack_Logo.png\" alt=\"BuildTrack Logo\" class=\"brand-logo\">\n            </div>\n\n            <h2>Welcome Back</h2>\n            <p>Please login to continue to your dashboard</p>\n\n            <!-- Error Alerts -->\n            @if (errorMessage()) {\n              <div class=\"alert alert-danger py-2.5 px-3 mb-3 rounded-3 small border-0\" role=\"alert\">\n                <i class=\"bi bi-exclamation-triangle-fill me-2\"></i> {{ errorMessage() }}\n              </div>\n            }\n\n            <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n\n                <div class=\"form-group\">\n                    <label>Email Address</label>\n                    <input\n                        type=\"email\"\n                        name=\"email\"\n                        [(ngModel)]=\"email\"\n                        required\n                        class=\"form-control\"\n                        placeholder=\"e.g. admin@buildtrack.com\">\n                </div>\n\n                <div class=\"form-group mt-3\">\n                    <label>Password</label>\n                    <input\n                        type=\"password\"\n                        name=\"password\"\n                        [(ngModel)]=\"password\"\n                        required\n                        class=\"form-control\"\n                        placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\">\n                </div>\n\n                <div class=\"options mt-3\">\n                    <div>\n                        <input type=\"checkbox\" id=\"rememberMe\">\n                        <label for=\"rememberMe\" class=\"ms-1 cursor-pointer\">Remember Me</label>\n                    </div>\n                    <a routerLink=\"/forgot-password\" class=\"fw-semibold text-primary\">\n                        Forgot Password?\n                    </a>\n                </div>\n\n                <button class=\"btn btn-primary w-100 mt-4 d-flex align-items-center justify-content-center gap-2\" \n                        [disabled]=\"isLoading() || !loginForm.form.valid\">\n                    @if (isLoading()) {\n                      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                      Logging in...\n                    } @else {\n                      Login\n                    }\n                </button>\n\n                <!-- Demo quick access panel -->\n                <div class=\"mt-4 demo-badge-container\">\n                  <span class=\"demo-title text-center\">\n                    Quick Access Demo Roles\n                  </span>\n                  <div class=\"d-flex flex-wrap gap-2 justify-content-center\">\n                    @for (acc of demoAccounts; track acc.role) {\n                      <button type=\"button\" \n                              class=\"demo-btn\" \n                              (click)=\"selectDemo(acc.email)\">\n                        {{ acc.label }}\n                      </button>\n                    }\n                  </div>\n                </div>\n\n                <div class=\"register\">\n                    Don't have an account?\n                    <a routerLink=\"/register\" class=\"fw-bold text-primary\">\n                        Register\n                    </a>\n                </div>\n\n            </form>\n\n        </div>\n\n    </div>\n\n</div>", styles: ["*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n}\n\n.login-container{\n\n    display:flex;\n    height:100vh;\n\n    font-family:Arial, Helvetica, sans-serif;\n\n}\n\n.login-left{\n\n    flex:1;\n\n    position:relative;\n\n    overflow:hidden;\n\n    background:#000;\n\n}\n\n.bg-video{\n\n    position:absolute;\n\n    top:0;\n\n    left:0;\n\n    width:100%;\n\n    height:100%;\n\n    object-fit:cover;\n\n}\n\n.login-right{\n\n    flex:1;\n\n    display:flex;\n\n    justify-content:center;\n\n    align-items:center;\n\n    background:#f8f9fa;\n\n}\n\n.brand-header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 24px;\n}\n\n.brand-logo {\n    height: 140px;\n    width: auto;\n    object-fit: contain;\n}\n\n.brand-name {\n    font-size: 28px;\n    font-weight: 700;\n    color: #0f172a;\n    letter-spacing: -0.03em;\n}\n\n.login-card {\n    width: 430px;\n    background: white;\n    padding: 40px;\n    border-radius: 16px;\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n    border: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.login-card h2 {\n    color: #1e293b;\n    font-size: 28px;\n    font-weight: 700;\n    margin-bottom: 6px;\n}\n\n.login-card p {\n    color: #64748b;\n    font-size: 14.5px;\n    margin-bottom: 24px;\n}\n\n.form-group {\n    display: flex;\n    flex-direction: column;\n}\n\n.form-group label {\n    margin-bottom: 6px;\n    font-weight: 500;\n    font-size: 13.5px;\n    color: #475569;\n}\n\n.form-control {\n    height: 48px;\n    border-radius: 10px;\n    border: 1.5px solid #cbd5e1;\n    padding: 10px 16px;\n    font-size: 14.5px;\n    color: #1e293b;\n    background-color: #fff;\n    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.form-control::placeholder {\n    color: #94a3b8;\n}\n\n.form-control:focus {\n    outline: none;\n    border-color: #0d6efd;\n    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.12);\n}\n\n.options {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 14px;\n    color: #475569;\n}\n\n.options label {\n    font-weight: 400;\n}\n\n.options a {\n    color: #0d6efd;\n    text-decoration: none;\n    transition: color 0.2s ease;\n}\n\n.options a:hover {\n    color: #0056b3;\n    text-decoration: underline;\n}\n\n.btn-primary {\n    height: 48px;\n    font-size: 16px;\n    font-weight: 600;\n    background: linear-gradient(135deg, #0d6efd 0%, #0056b3 100%);\n    border: none;\n    border-radius: 10px;\n    color: white;\n    box-shadow: 0 4px 14px rgba(13, 110, 253, 0.25);\n    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n}\n\n.btn-primary:hover:not(:disabled) {\n    background: linear-gradient(135deg, #1e75ff 0%, #004fb0 100%);\n    transform: translateY(-1.5px);\n    box-shadow: 0 6px 18px rgba(13, 110, 253, 0.35);\n}\n\n.btn-primary:active:not(:disabled) {\n    transform: translateY(0);\n    box-shadow: 0 3px 10px rgba(13, 110, 253, 0.2);\n}\n\n.btn-primary:disabled {\n    background: #cbd5e1;\n    color: #94a3b8;\n    box-shadow: none;\n    cursor: not-allowed;\n}\n\n.demo-badge-container {\n    background: #f8fafc;\n    border-radius: 12px;\n    padding: 16px;\n    border: 1px dashed #e2e8f0;\n}\n\n.demo-title {\n    color: #64748b;\n    font-size: 11px;\n    letter-spacing: 0.05em;\n    font-weight: 700;\n    text-transform: uppercase;\n    display: block;\n    margin-bottom: 12px;\n}\n\n.demo-btn {\n    background: white;\n    border: 1px solid #e2e8f0;\n    border-radius: 8px;\n    color: #475569;\n    font-size: 12px;\n    font-weight: 500;\n    padding: 6px 12px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n}\n\n.demo-btn:hover {\n    background: #f1f5f9;\n    border-color: #cbd5e1;\n    color: #0f172a;\n    transform: translateY(-1px);\n    box-shadow: 0 2px 5px rgba(0,0,0,0.05);\n}\n\n.demo-btn:active {\n    transform: translateY(0);\n}\n\n.register {\n    text-align: center;\n    margin-top: 24px;\n    font-size: 14.5px;\n    color: #475569;\n}\n\n.register a {\n    color: #0d6efd;\n    text-decoration: none;\n    transition: color 0.2s ease;\n}\n\n.register a:hover {\n    color: #0056b3;\n    text-decoration: underline;\n}\n\n.text-xs {\n  font-size: 12px !important;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.audio-control-btn {\n  position: absolute;\n  bottom: 24px;\n  right: 24px;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 30px;\n  padding: 10px 18px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n}\n\n.audio-control-btn:hover {\n  background: rgba(0, 0, 0, 0.7);\n  border-color: rgba(255, 255, 255, 0.4);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);\n}\n\n.audio-control-btn:active {\n  transform: translateY(0);\n}\n\n.audio-control-btn i {\n  font-size: 18px;\n}\n\n\n\n@media(max-width:900px){\n\n.login-left{\n\ndisplay:none;\n\n}\n\n.login-right{\n\nwidth:100%;\n\n}\n\n.login-card{\n\nwidth:90%;\n\n}\n\n}"] }]
    }], null, { bgVideo: [{
            type: ViewChild,
            args: ['bgVideo']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Login, { className: "Login", filePath: "src/app/pages/auth/login/login.ts", lineNumber: 14 }); })();
