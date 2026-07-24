
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
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24547, hash: '40978c0ab0db5fb2cdd57e575ddbf0d3735a3971805e4fb75e1fc980257419a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17277, hash: 'e25c54316f05aa669910ea0273845dcc91bb9017228d855a469c495d3ca34281', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'worker/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/worker_dashboard_index_html.mjs').then(m => m.default)},
    'admin/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/admin_dashboard_index_html.mjs').then(m => m.default)},
    'site-engineer/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/site-engineer_dashboard_index_html.mjs').then(m => m.default)},
    'client/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/client_dashboard_index_html.mjs').then(m => m.default)},
    'forgot-password/index.html': {size: 34879, hash: '837264a462cf78d9e168a798f70c244c5731fd189940cd766fc53036e9efc2f2', text: () => import('./assets-chunks/forgot-password_index_html.mjs').then(m => m.default)},
    'contractor/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/contractor_dashboard_index_html.mjs').then(m => m.default)},
    'project-manager/dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/project-manager_dashboard_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44961, hash: '1231a9146a3181540871022b74d8e8eddd91d29acafc761662c5a03d9ec09d06', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 41250, hash: 'd0048ce75fa48589b61fcfaef08764bbd8b5580079d6fba933d35b8a0d60dd24', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-UCKWECY5.css': {size: 240659, hash: 'MFFiTINvtW8', text: () => import('./assets-chunks/styles-UCKWECY5_css.mjs').then(m => m.default)}
  },
};
