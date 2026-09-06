
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
    "route": "/project-manager/dashboard"
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
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25670, hash: 'b72e0205ed67c634344f8792b2b8d0ac8ba38bbccec8ecb9d066e9488c7ebed4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17277, hash: '0cc43c5db4743030ca49ccf5d68896f30afdddef6219b183053e171401f63c46', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'worker/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/worker_dashboard_index_html.mjs').then(m => m.default)},
    'procurement/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/procurement_dashboard_index_html.mjs').then(m => m.default)},
    'procurement/requests/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/procurement_requests_index_html.mjs').then(m => m.default)},
    'procurement/invoices/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/procurement_invoices_index_html.mjs').then(m => m.default)},
    'admin/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/admin_dashboard_index_html.mjs').then(m => m.default)},
    'site-engineer/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/site-engineer_dashboard_index_html.mjs').then(m => m.default)},
    'client/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/client_dashboard_index_html.mjs').then(m => m.default)},
    'procurement/purchase-orders/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/procurement_purchase-orders_index_html.mjs').then(m => m.default)},
    'forgot-password/index.html': {size: 36058, hash: '0cc2de25530bf19fb41731fa1c29a0fafb9be5d052e355cb032794dbb6f24fc2', text: () => import('./assets-chunks/forgot-password_index_html.mjs').then(m => m.default)},
    'project-manager/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/project-manager_dashboard_index_html.mjs').then(m => m.default)},
    'contractor/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/contractor_dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 42429, hash: '08581f33aaa3a6d5dbb22611bcb48cb0c4e7cea401ba1b446ef1c93f17d5c4c5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'procurement/vendors/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/procurement_vendors_index_html.mjs').then(m => m.default)},
    'notifications/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/notifications_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 46140, hash: 'f9601cc2ed8f57d6a8381583e59b020ffe28809b1b2249572f18b48a1bb40b65', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-IAD5TDV4.css': {size: 244831, hash: 'zfbWcuvrnJ8', text: () => import('./assets-chunks/styles-IAD5TDV4_css.mjs').then(m => m.default)}
  },
};
