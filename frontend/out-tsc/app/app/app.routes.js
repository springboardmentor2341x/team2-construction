import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';
// Public/Auth Pages
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
// Master Page Shell
import { DashboardLayoutComponent } from './layouts/dashboard-layout';
// Role Dashboards Pages
import { AdministratorDashboard } from './pages/admin/dashboard/dashboard';
import { ProjectManagerDashboard } from './pages/project-manager/dashboard/dashboard';
import { SiteEngineerDashboard } from './pages/site-engineer/dashboard/dashboard';
import { ContractorDashboard } from './pages/contractor/dashboard/dashboard';
import { WorkerDashboard } from './pages/worker/dashboard/dashboard';
import { ClientDashboard } from './pages/client/dashboard/dashboard';
// Procurement Module
import { ProcurementComponent } from './pages/admin/procurement/procurement';
export const routes = [
    // Public/Auth routes
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'forgot-password', component: ForgotPassword },
    // Role Protected Dashboards
    {
        path: '',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [
            // ================= ADMIN =================
            {
                path: 'admin/dashboard',
                component: AdministratorDashboard,
                canActivate: [roleGuard],
                data: { allowedRoles: ['admin'] }
            },
            // PROCUREMENT MODULE - MODULE 7
            {
                path: 'admin/procurement',
                component: ProcurementComponent,
                canActivate: [roleGuard],
                data: { allowedRoles: ['admin'] }
            },
            // ================= PROJECT MANAGER =================
            {
                path: 'project-manager/dashboard',
                component: ProjectManagerDashboard,
                canActivate: [roleGuard],
                data: { allowedRoles: ['project_manager'] }
            },
            // ================= SITE ENGINEER =================
            {
                path: 'site-engineer/dashboard',
                component: SiteEngineerDashboard,
                canActivate: [roleGuard],
                data: { allowedRoles: ['site_engineer'] }
            },
            // ================= CONTRACTOR =================
            {
                path: 'contractor/dashboard',
                component: ContractorDashboard,
                canActivate: [roleGuard],
                data: { allowedRoles: ['contractor'] }
            },
            // ================= WORKER =================
            {
                path: 'worker/dashboard',
                component: WorkerDashboard,
                canActivate: [roleGuard],
                data: { allowedRoles: ['worker'] }
            },
            // ================= CLIENT =================
            {
                path: 'client/dashboard',
                component: ClientDashboard,
                canActivate: [roleGuard],
                data: { allowedRoles: ['client'] }
            },
            // Default redirect
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'worker/dashboard'
            }
        ]
    },
    // Catch-all redirects back to login
    { path: '**', redirectTo: 'login' }
];
