export default `<!DOCTYPE html><html lang="en"><head>
    <meta charset="utf-8">
    <title>BuildtrackTeam2</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="styles.css"><style ng-app-id="ng">
*[_ngcontent-ng-c2887596622] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.login-container[_ngcontent-ng-c2887596622] {
  display: flex;
  height: 100vh;
  font-family:
    Arial,
    Helvetica,
    sans-serif;
}
.login-left[_ngcontent-ng-c2887596622] {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: #000;
}
.bg-video[_ngcontent-ng-c2887596622] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.login-right[_ngcontent-ng-c2887596622] {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
}
.brand-header[_ngcontent-ng-c2887596622] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}
.brand-logo[_ngcontent-ng-c2887596622] {
  height: 140px;
  width: auto;
  object-fit: contain;
}
.brand-name[_ngcontent-ng-c2887596622] {
  font-size: 28px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.03em;
}
.login-card[_ngcontent-ng-c2887596622] {
  width: 430px;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.login-card[_ngcontent-ng-c2887596622]   h2[_ngcontent-ng-c2887596622] {
  color: #1e293b;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 6px;
}
.login-card[_ngcontent-ng-c2887596622]   p[_ngcontent-ng-c2887596622] {
  color: #64748b;
  font-size: 14.5px;
  margin-bottom: 24px;
}
.form-group[_ngcontent-ng-c2887596622] {
  display: flex;
  flex-direction: column;
}
.form-group[_ngcontent-ng-c2887596622]   label[_ngcontent-ng-c2887596622] {
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 13.5px;
  color: #475569;
}
.form-control[_ngcontent-ng-c2887596622] {
  height: 48px;
  border-radius: 10px;
  border: 1.5px solid #cbd5e1;
  padding: 10px 16px;
  font-size: 14.5px;
  color: #1e293b;
  background-color: #fff;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.form-control[_ngcontent-ng-c2887596622]::placeholder {
  color: #94a3b8;
}
.form-control[_ngcontent-ng-c2887596622]:focus {
  outline: none;
  border-color: #0d6efd;
  box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.12);
}
.options[_ngcontent-ng-c2887596622] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #475569;
}
.options[_ngcontent-ng-c2887596622]   label[_ngcontent-ng-c2887596622] {
  font-weight: 400;
}
.options[_ngcontent-ng-c2887596622]   a[_ngcontent-ng-c2887596622] {
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.2s ease;
}
.options[_ngcontent-ng-c2887596622]   a[_ngcontent-ng-c2887596622]:hover {
  color: #0056b3;
  text-decoration: underline;
}
.btn-primary[_ngcontent-ng-c2887596622] {
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  background:
    linear-gradient(
      135deg,
      #0d6efd 0%,
      #0056b3 100%);
  border: none;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 14px rgba(13, 110, 253, 0.25);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.btn-primary[_ngcontent-ng-c2887596622]:hover:not(:disabled) {
  background:
    linear-gradient(
      135deg,
      #1e75ff 0%,
      #004fb0 100%);
  transform: translateY(-1.5px);
  box-shadow: 0 6px 18px rgba(13, 110, 253, 0.35);
}
.btn-primary[_ngcontent-ng-c2887596622]:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 3px 10px rgba(13, 110, 253, 0.2);
}
.btn-primary[_ngcontent-ng-c2887596622]:disabled {
  background: #cbd5e1;
  color: #94a3b8;
  box-shadow: none;
  cursor: not-allowed;
}
.demo-badge-container[_ngcontent-ng-c2887596622] {
  background: #f8fafc;
  border-radius: 12px;
  padding: 16px;
  border: 1px dashed #e2e8f0;
}
.demo-title[_ngcontent-ng-c2887596622] {
  color: #64748b;
  font-size: 11px;
  letter-spacing: 0.05em;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
}
.demo-btn[_ngcontent-ng-c2887596622] {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #475569;
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.demo-btn[_ngcontent-ng-c2887596622]:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #0f172a;
  transform: translateY(-1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
.demo-btn[_ngcontent-ng-c2887596622]:active {
  transform: translateY(0);
}
.register[_ngcontent-ng-c2887596622] {
  text-align: center;
  margin-top: 24px;
  font-size: 14.5px;
  color: #475569;
}
.register[_ngcontent-ng-c2887596622]   a[_ngcontent-ng-c2887596622] {
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.2s ease;
}
.register[_ngcontent-ng-c2887596622]   a[_ngcontent-ng-c2887596622]:hover {
  color: #0056b3;
  text-decoration: underline;
}
.text-xs[_ngcontent-ng-c2887596622] {
  font-size: 12px !important;
}
.cursor-pointer[_ngcontent-ng-c2887596622] {
  cursor: pointer;
}
.audio-control-btn[_ngcontent-ng-c2887596622] {
  position: absolute;
  bottom: 24px;
  right: 24px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 10px 18px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
.audio-control-btn[_ngcontent-ng-c2887596622]:hover {
  background: rgba(0, 0, 0, 0.7);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
}
.audio-control-btn[_ngcontent-ng-c2887596622]:active {
  transform: translateY(0);
}
.audio-control-btn[_ngcontent-ng-c2887596622]   i[_ngcontent-ng-c2887596622] {
  font-size: 18px;
}
@media (max-width: 900px) {
  .login-left[_ngcontent-ng-c2887596622] {
    display: none;
  }
  .login-right[_ngcontent-ng-c2887596622] {
    width: 100%;
  }
  .login-card[_ngcontent-ng-c2887596622] {
    width: 90%;
  }
}
/*# sourceMappingURL=/login.css.map */</style></head>
  <body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["ended","click","submit","input","compositionstart","compositionend"],["blur"]);</script>
    <app-root ng-version="21.2.18" ngh="1" ng-server-context="ssg"><router-outlet></router-outlet><app-login _nghost-ng-c2887596622="" ngh="0"><div _ngcontent-ng-c2887596622="" class="login-container"><div _ngcontent-ng-c2887596622="" class="login-left"><video _ngcontent-ng-c2887596622="" autoplay="" loop="" playsinline="" class="bg-video" jsaction="ended:;"><source _ngcontent-ng-c2887596622="" src="/CcV.mp4" type="video/mp4"> Your browser does not support the video tag. </video><button _ngcontent-ng-c2887596622="" type="button" aria-label="Toggle background music" class="audio-control-btn" jsaction="click:;"><i _ngcontent-ng-c2887596622="" class="bi bi-volume-mute-fill"></i><span _ngcontent-ng-c2887596622="">Audio Off</span></button></div><div _ngcontent-ng-c2887596622="" class="login-right"><div _ngcontent-ng-c2887596622="" class="login-card"><div _ngcontent-ng-c2887596622="" class="brand-header"><img _ngcontent-ng-c2887596622="" src="/BuildTrack_Logo.png" alt="BuildTrack Logo" class="brand-logo"></div><h2 _ngcontent-ng-c2887596622="">Welcome Back</h2><p _ngcontent-ng-c2887596622="">Please login to continue to your dashboard</p><!--container--><form _ngcontent-ng-c2887596622="" novalidate="" class="ng-untouched ng-pristine ng-invalid" jsaction="submit:;"><div _ngcontent-ng-c2887596622="" class="form-group"><label _ngcontent-ng-c2887596622="">Email Address</label><input _ngcontent-ng-c2887596622="" type="email" name="email" required="" placeholder="e.g. admin@buildtrack.com" class="form-control ng-untouched ng-pristine ng-invalid" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c2887596622="" class="form-group mt-3"><label _ngcontent-ng-c2887596622="">Password</label><input _ngcontent-ng-c2887596622="" type="password" name="password" required="" placeholder="••••••••" class="form-control ng-untouched ng-pristine ng-invalid" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c2887596622="" class="options mt-3"><div _ngcontent-ng-c2887596622=""><input _ngcontent-ng-c2887596622="" type="checkbox" id="rememberMe"><label _ngcontent-ng-c2887596622="" for="rememberMe" class="ms-1 cursor-pointer">Remember Me</label></div><a _ngcontent-ng-c2887596622="" routerlink="/forgot-password" class="fw-semibold text-primary" href="/forgot-password" jsaction="click:;"> Forgot Password? </a></div><button _ngcontent-ng-c2887596622="" class="btn btn-primary w-100 mt-4 d-flex align-items-center justify-content-center gap-2" disabled=""><!--container--> Login <!--container--></button><div _ngcontent-ng-c2887596622="" class="mt-4 demo-badge-container"><span _ngcontent-ng-c2887596622="" class="demo-title text-center"> Quick Access Demo Roles </span><div _ngcontent-ng-c2887596622="" class="d-flex flex-wrap gap-2 justify-content-center"><button _ngcontent-ng-c2887596622="" type="button" class="demo-btn" jsaction="click:;"> Admin </button><button _ngcontent-ng-c2887596622="" type="button" class="demo-btn" jsaction="click:;"> Proj Mgr </button><button _ngcontent-ng-c2887596622="" type="button" class="demo-btn" jsaction="click:;"> Site Eng </button><button _ngcontent-ng-c2887596622="" type="button" class="demo-btn" jsaction="click:;"> Contractor </button><button _ngcontent-ng-c2887596622="" type="button" class="demo-btn" jsaction="click:;"> Worker </button><button _ngcontent-ng-c2887596622="" type="button" class="demo-btn" jsaction="click:;"> Client </button><!--container--></div></div><div _ngcontent-ng-c2887596622="" class="register"> Don't have an account? <a _ngcontent-ng-c2887596622="" routerlink="/register" class="fw-bold text-primary" href="/register" jsaction="click:;"> Register </a></div></form></div></div></div></app-login><!--container--></app-root>
  <script src="main.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"18":"t0","37":"t1","38":"t2","44":"t3"},"c":{"18":[],"37":[],"38":[{"i":"t2","r":1}],"44":[{"i":"t3","r":1,"x":6}]}},{"c":{"0":[{"i":"c2887596622","r":1}]}}]}</script></body></html>`;