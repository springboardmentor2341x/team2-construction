import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

// Public/Auth Pages
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { ProjectManagerBudget } from './pages/project-manager/budget/budget';

// Master Page Shell
import { DashboardLayoutComponent } from './layouts/dashboard-layout';

// Role Dashboards Pages
import { AdministratorDashboard } from './pages/admin/dashboard/dashboard';
import { ProjectManagerDashboard } from './pages/project-manager/dashboard/dashboard';
import { SiteEngineerDashboard } from './pages/site-engineer/dashboard/dashboard';
import { ContractorDashboard } from './pages/contractor/dashboard/dashboard';
import { WorkerDashboard } from './pages/worker/dashboard/dashboard';
import { ClientDashboard } from './pages/client/dashboard/dashboard';

// Procurement Components
import { ProcurementDashboardComponent } from './components/procurement/dashboard/dashboard';
import { VendorManagementComponent } from './components/procurement/vendor-management/vendor-management';
import { ProcurementRequestsComponent } from './components/procurement/procurement-requests/procurement-requests';
import { PurchaseOrdersComponent } from './components/procurement/purchase-orders/purchase-orders';
import { InvoicesComponent } from './components/procurement/invoices/invoices';

// Notifications
import { NotificationsComponent } from './pages/notifications/notifications';

export const routes: Routes = [
  // Public/Auth routes
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },

  // Role Protected Dashboards (Nested inside Master Shell Layout)
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'admin/dashboard',
        component: AdministratorDashboard,
        canActivate: [roleGuard],
        data: { allowedRoles: ['admin'] }
      },
      {
        path: 'project-manager/dashboard',
        component: ProjectManagerDashboard,
        canActivate: [roleGuard],
        data: { allowedRoles: ['project_manager'] }
      },
      {
        path: 'site-engineer/dashboard',
        component: SiteEngineerDashboard,
        canActivate: [roleGuard],
        data: { allowedRoles: ['site_engineer'] }
      },
      {
        path: 'contractor/dashboard',
        component: ContractorDashboard,
        canActivate: [roleGuard],
        data: { allowedRoles: ['contractor'] }
      },
      {
        path: 'worker/dashboard',
        component: WorkerDashboard,
        canActivate: [roleGuard],
        data: { allowedRoles: ['worker'] }
      },
      {
        path: 'client/dashboard',
        component: ClientDashboard,
        canActivate: [roleGuard],
        data: { allowedRoles: ['client'] }
      },
      // Procurement Routes
      {
        path: 'procurement/dashboard',
        component: ProcurementDashboardComponent,
        canActivate: [roleGuard],
        data: { allowedRoles: ['admin', 'project_manager'] }
      },
      {
        path: 'procurement/vendors',
        component: VendorManagementComponent,
        canActivate: [roleGuard],
        data: { allowedRoles: ['admin', 'project_manager', 'site_engineer'] }
      },
      {
        path: 'procurement/requests',
        component: ProcurementRequestsComponent,
        canActivate: [roleGuard],
        data: { allowedRoles: ['admin', 'project_manager', 'site_engineer'] }
      },
      {
        path: 'procurement/purchase-orders',
        component: PurchaseOrdersComponent,
        canActivate: [roleGuard],
        data: { allowedRoles: ['admin', 'project_manager', 'site_engineer'] }
      },
      {
        path: 'procurement/invoices',
        component: InvoicesComponent,
        canActivate: [roleGuard],
        data: { allowedRoles: ['admin', 'project_manager'] }
      },
      // Budget Management
      {
        path: 'admin/budget',
        component: ProjectManagerBudget,
        canActivate: [roleGuard],
        data: { allowedRoles: ['admin'] }
      },
      {
        path: 'project-manager/budget',
        component: ProjectManagerBudget,
        canActivate: [roleGuard],
        data: { allowedRoles: ['project_manager'] }
      },
      // Notifications
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      // Redirect empty root inside Shell Layout (Default role-based redirecting)
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'worker/dashboard' // Guards will intercept and redirect to their appropriate role-based dashboard
      }
    ]
  },

  // Catch-all redirects back to login
  { path: '**', redirectTo: 'login' }
];
