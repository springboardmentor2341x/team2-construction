
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/forgot-password"
  },
  {
    "renderMode": 2,
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/admin/budget"
  },
  {
    "renderMode": 2,
    "route": "/project-manager/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/project-manager/budget"
  },
  {
    "renderMode": 2,
    "route": "/site-engineer/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/contractor/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/worker/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/client/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/procurement/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/procurement/vendors"
  },
  {
    "renderMode": 2,
    "route": "/procurement/requests"
  },
  {
    "renderMode": 2,
    "route": "/procurement/purchase-orders"
  },
  {
    "renderMode": 2,
    "route": "/procurement/invoices"
  },
  {
    "renderMode": 2,
    "route": "/notifications"
  },
  {
    "renderMode": 2,
    "route": "/reports"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/settings"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 29483, hash: 'a0a8a4b82929c590b1f8042a0086825f91a33dce417088e45cd22bfbcb848815', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17277, hash: '1c754eea1909998f0c757ac25fe2ab9a42d78266607f059952857945ddfae6ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'site-engineer/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/site-engineer_dashboard_index_html.mjs').then(m => m.default)},
    'worker/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/worker_dashboard_index_html.mjs').then(m => m.default)},
    'procurement/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/procurement_dashboard_index_html.mjs').then(m => m.default)},
    'procurement/requests/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/procurement_requests_index_html.mjs').then(m => m.default)},
    'procurement/invoices/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/procurement_invoices_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'admin/budget/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/admin_budget_index_html.mjs').then(m => m.default)},
    'forgot-password/index.html': {size: 40027, hash: '81e84f7bda2212a3d7ad52b831aa8343de273dd8ba4fedabe28895cf923bdd5b', text: () => import('./assets-chunks/forgot-password_index_html.mjs').then(m => m.default)},
    'project-manager/budget/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/project-manager_budget_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 46398, hash: '6e1e3f3d9ab23107880cc8356194f5c4eab78aed8b66ffc64efaf2a3f6a2b102', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'procurement/purchase-orders/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/procurement_purchase-orders_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'client/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/client_dashboard_index_html.mjs').then(m => m.default)},
    'project-manager/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/project-manager_dashboard_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 50109, hash: '239eed4d64153e304d4f7a4c972e468e6627391b73fa0a34b095aa9a9cd293c6', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'admin/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/admin_dashboard_index_html.mjs').then(m => m.default)},
    'procurement/vendors/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/procurement_vendors_index_html.mjs').then(m => m.default)},
    'notifications/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/notifications_index_html.mjs').then(m => m.default)},
    'contractor/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/contractor_dashboard_index_html.mjs').then(m => m.default)},
    'styles-QC4JG5EJ.css': {size: 269632, hash: 'ZEzhzCkU9U4', text: () => import('./assets-chunks/styles-QC4JG5EJ_css.mjs').then(m => m.default)}
  },
};
