
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
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
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 888, hash: 'e2a9fee9296abfb0e9559f264491f6953bd78189ab95a137be994bc39e51f6a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1428, hash: '120d92bb32dbf1e95d5a9c5b971b5f9f68cb3c1825a3c944053fcb4d8c482e81', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'worker/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/worker_dashboard_index_html.mjs').then(m => m.default)},
    'admin/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/admin_dashboard_index_html.mjs').then(m => m.default)},
    'site-engineer/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/site-engineer_dashboard_index_html.mjs').then(m => m.default)},
    'client/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/client_dashboard_index_html.mjs').then(m => m.default)},
    'contractor/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/contractor_dashboard_index_html.mjs').then(m => m.default)},
    'project-manager/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/project-manager_dashboard_index_html.mjs').then(m => m.default)},
    'forgot-password/index.html': {size: 4220, hash: '5556828c0eb4f7a2ceeaa497cf2321d4999e930d6fa6dbd169ab1c436865ff58', text: () => import('./assets-chunks/forgot-password_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 13663, hash: 'fc0fb31cba6509acfbf826d0242fe02bb339e23d19a3817fd548699cc9852717', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 11794, hash: '16abaf50d628d445ba7af5fbc82cf0b3588bb87a95b5995ec4c46848b8754b97', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)}
  },
};
