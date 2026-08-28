import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AuthService {
    router;
    http = inject(HttpClient);
    demoUsers = [
        { id: '1', email: 'admin@buildtrack.com', name: 'Usha Admin', role: 'admin', company: 'BuildTrack Corp', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150' },
        { id: '2', email: 'pm@buildtrack.com', name: 'Shradha S', role: 'project_manager', company: 'Apex Builders', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150' },
        { id: '3', email: 'engineer@buildtrack.com', name: 'Sathvik S', role: 'site_engineer', company: 'Apex Builders', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
        { id: '4', email: 'contractor@buildtrack.com', name: 'Gaurav K', role: 'contractor', company: 'Vance Concrete Ltd', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150' },
        { id: '5', email: 'worker@buildtrack.com', name: 'Jyoti S', role: 'worker', company: 'Vance Concrete Ltd', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150' },
        { id: '6', email: 'client@buildtrack.com', name: 'Abhishek S', role: 'client', company: 'Vanguard Realty', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150' }
    ];
    // Signal for the current user
    currentUserSignal = signal(null, ...(ngDevMode ? [{ debugName: "currentUserSignal" }] : /* istanbul ignore next */ []));
    // Computed values
    currentUser = this.currentUserSignal.asReadonly();
    isLoggedIn = computed(() => this.currentUserSignal() !== null, ...(ngDevMode ? [{ debugName: "isLoggedIn" }] : /* istanbul ignore next */ []));
    userRole = computed(() => this.currentUserSignal()?.role || null, ...(ngDevMode ? [{ debugName: "userRole" }] : /* istanbul ignore next */ []));
    constructor(router) {
        this.router = router;
        this.loadSession();
    }
    loadSession() {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedUser = localStorage.getItem('bt_user');
            const token = localStorage.getItem('bt_token');
            if (storedUser && token) {
                try {
                    this.currentUserSignal.set(JSON.parse(storedUser));
                    // Asynchronously verify credentials with Express backend
                    this.http.get('/api/auth/me').subscribe({
                        next: (res) => {
                            if (res.success && res.data) {
                                this.currentUserSignal.set(res.data);
                                localStorage.setItem('bt_user', JSON.stringify(res.data));
                            }
                        },
                        error: () => {
                            this.clearSession();
                            this.router.navigate(['/login']);
                        }
                    });
                }
                catch (e) {
                    this.clearSession();
                }
            }
        }
    }
    saveSession(user, token) {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('bt_user', JSON.stringify(user));
            localStorage.setItem('bt_token', token);
        }
        this.currentUserSignal.set(user);
    }
    clearSession() {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem('bt_user');
            localStorage.removeItem('bt_token');
        }
        this.currentUserSignal.set(null);
    }
    // real API login with password fallback
    login(email, password) {
        const fallbackPassword = password || 'password123';
        return this.http.post('/api/auth/login', {
            email,
            password: fallbackPassword
        }).pipe(map(res => {
            const authData = res.data;
            this.saveSession(authData.user, authData.token);
            return authData.user;
        }), catchError(err => {
            console.error('Login error', err);
            return throwError(() => new Error(err.error?.message || 'Invalid email or password.'));
        }));
    }
    // real API register
    register(name, email, role, company, phone) {
        return this.http.post('/api/auth/register', {
            name,
            email,
            password: 'password123', // default credentials
            role,
            company,
            phone
        }).pipe(map(res => {
            const authData = res.data;
            this.saveSession(authData.user, authData.token);
            return authData.user;
        }), catchError(err => {
            console.error('Registration error', err);
            return throwError(() => new Error(err.error?.message || 'Registration failed.'));
        }));
    }
    forgotPassword(email) {
        return of(true).pipe(delay(500));
    }
    logout() {
        this.clearSession();
        this.router.navigate(['/login']);
    }
    getDashboardUrl(role) {
        switch (role) {
            case 'admin':
                return '/admin/dashboard';
            case 'project_manager':
                return '/project-manager/dashboard';
            case 'site_engineer':
                return '/site-engineer/dashboard';
            case 'contractor':
                return '/contractor/dashboard';
            case 'worker':
                return '/worker/dashboard';
            case 'client':
                return '/client/dashboard';
            default:
                return '/login';
        }
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.Router }], null); })();
