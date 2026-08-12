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
*[_ngcontent-ng-c3853323601] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.register-container[_ngcontent-ng-c3853323601] {
  display: flex;
  height: 100vh;
  font-family:
    Arial,
    Helvetica,
    sans-serif;
}
.register-left[_ngcontent-ng-c3853323601] {
  flex: 1;
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  overflow: hidden;
}
.carousel-container[_ngcontent-ng-c3853323601] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.carousel-slide[_ngcontent-ng-c3853323601] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.carousel-slide.active[_ngcontent-ng-c3853323601] {
  opacity: 1;
}
.carousel-img[_ngcontent-ng-c3853323601] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel-overlay[_ngcontent-ng-c3853323601] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0.75) 100%);
  z-index: 2;
}
.carousel-indicators[_ngcontent-ng-c3853323601] {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 4;
}
.indicator-dot[_ngcontent-ng-c3853323601] {
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}
.indicator-dot.active[_ngcontent-ng-c3853323601] {
  background: white;
  transform: scale(1.2);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}
.overlay[_ngcontent-ng-c3853323601] {
  position: relative;
  max-width: 450px;
  z-index: 3;
}
.overlay[_ngcontent-ng-c3853323601]   h1[_ngcontent-ng-c3853323601] {
  font-size: 48px;
  font-weight: bold;
}
.overlay[_ngcontent-ng-c3853323601]   p[_ngcontent-ng-c3853323601] {
  margin-top: 20px;
  font-size: 20px;
  line-height: 30px;
}
.features[_ngcontent-ng-c3853323601] {
  margin-top: 40px;
}
.features[_ngcontent-ng-c3853323601]   div[_ngcontent-ng-c3853323601] {
  margin: 15px 0;
  font-size: 18px;
}
.register-right[_ngcontent-ng-c3853323601] {
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  overflow-y: auto;
}
.register-card[_ngcontent-ng-c3853323601] {
  width: 580px;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.register-card[_ngcontent-ng-c3853323601]   h2[_ngcontent-ng-c3853323601] {
  color: #1e293b;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 6px;
}
.register-card[_ngcontent-ng-c3853323601]   p[_ngcontent-ng-c3853323601] {
  color: #64748b;
  font-size: 14.5px;
  margin-bottom: 24px;
}
.form-group[_ngcontent-ng-c3853323601] {
  display: flex;
  flex-direction: column;
}
.form-group[_ngcontent-ng-c3853323601]   label[_ngcontent-ng-c3853323601] {
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 13.5px;
  color: #475569;
}
.form-control[_ngcontent-ng-c3853323601] {
  height: 48px;
  border-radius: 10px;
  border: 1.5px solid #cbd5e1;
  padding: 10px 16px;
  font-size: 14.5px;
  color: #1e293b;
  background-color: #fff;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.form-control[_ngcontent-ng-c3853323601]::placeholder {
  color: #94a3b8;
}
.form-control[_ngcontent-ng-c3853323601]:focus {
  outline: none;
  border-color: #0d6efd;
  box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.12);
}
.form-select[_ngcontent-ng-c3853323601] {
  padding-left: 12px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23475569' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 12px 12px;
}
.btn-primary[_ngcontent-ng-c3853323601] {
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
.btn-primary[_ngcontent-ng-c3853323601]:hover:not(:disabled) {
  background:
    linear-gradient(
      135deg,
      #1e75ff 0%,
      #004fb0 100%);
  transform: translateY(-1.5px);
  box-shadow: 0 6px 18px rgba(13, 110, 253, 0.35);
}
.btn-primary[_ngcontent-ng-c3853323601]:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 3px 10px rgba(13, 110, 253, 0.2);
}
.btn-primary[_ngcontent-ng-c3853323601]:disabled {
  background: #cbd5e1;
  color: #94a3b8;
  box-shadow: none;
  cursor: not-allowed;
}
.login-link[_ngcontent-ng-c3853323601] {
  font-size: 14.5px;
  color: #475569;
}
.login-link[_ngcontent-ng-c3853323601]   a[_ngcontent-ng-c3853323601] {
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.2s ease;
}
.login-link[_ngcontent-ng-c3853323601]   a[_ngcontent-ng-c3853323601]:hover {
  color: #0056b3;
  text-decoration: underline;
}
@media (max-width: 900px) {
  .register-left[_ngcontent-ng-c3853323601] {
    display: none;
  }
  .register-right[_ngcontent-ng-c3853323601] {
    width: 100%;
    padding: 20px;
  }
  .register-card[_ngcontent-ng-c3853323601] {
    width: 100%;
  }
}
/*# sourceMappingURL=/register.css.map */</style></head>
  <body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["submit","input","compositionstart","compositionend","change","click"],["blur"]);</script>
    <app-root ng-version="21.2.18" ngh="1" ng-server-context="ssg"><router-outlet></router-outlet><app-register _nghost-ng-c3853323601="" ngh="0"><div _ngcontent-ng-c3853323601="" class="register-container"><div _ngcontent-ng-c3853323601="" class="register-left"><div _ngcontent-ng-c3853323601="" class="carousel-container"><div _ngcontent-ng-c3853323601="" class="carousel-slide active"><img _ngcontent-ng-c3853323601="" alt="Construction Site" class="carousel-img" src="/construction1.jpg"></div><div _ngcontent-ng-c3853323601="" class="carousel-slide"><img _ngcontent-ng-c3853323601="" alt="Construction Site" class="carousel-img" src="/construction2.jpg"></div><div _ngcontent-ng-c3853323601="" class="carousel-slide"><img _ngcontent-ng-c3853323601="" alt="Construction Site" class="carousel-img" src="/construction3.jpg"></div><div _ngcontent-ng-c3853323601="" class="carousel-slide"><img _ngcontent-ng-c3853323601="" alt="Construction Site" class="carousel-img" src="/construction4.jpg"></div><div _ngcontent-ng-c3853323601="" class="carousel-slide"><img _ngcontent-ng-c3853323601="" alt="Construction Site" class="carousel-img" src="/construction5.jpg"></div><!--container--><div _ngcontent-ng-c3853323601="" class="carousel-overlay"></div></div><div _ngcontent-ng-c3853323601="" class="overlay"><h1 _ngcontent-ng-c3853323601="">BuildTrack</h1><p _ngcontent-ng-c3853323601="">Join the construction project management platform of the future.</p><div _ngcontent-ng-c3853323601="" class="features"><div _ngcontent-ng-c3853323601="">✔ Allocate tasks &amp; resource schedules</div><div _ngcontent-ng-c3853323601="">✔ Review real-time site activity reports</div><div _ngcontent-ng-c3853323601="">✔ Fast and secure invoice tracking</div><div _ngcontent-ng-c3853323601="">✔ Real-time status communication</div></div></div><div _ngcontent-ng-c3853323601="" class="carousel-indicators"><button _ngcontent-ng-c3853323601="" type="button" class="indicator-dot active" aria-label="Go to slide 1" jsaction="click:;"></button><button _ngcontent-ng-c3853323601="" type="button" class="indicator-dot" aria-label="Go to slide 2" jsaction="click:;"></button><button _ngcontent-ng-c3853323601="" type="button" class="indicator-dot" aria-label="Go to slide 3" jsaction="click:;"></button><button _ngcontent-ng-c3853323601="" type="button" class="indicator-dot" aria-label="Go to slide 4" jsaction="click:;"></button><button _ngcontent-ng-c3853323601="" type="button" class="indicator-dot" aria-label="Go to slide 5" jsaction="click:;"></button><!--container--></div></div><div _ngcontent-ng-c3853323601="" class="register-right"><div _ngcontent-ng-c3853323601="" class="register-card my-4"><h2 _ngcontent-ng-c3853323601="">Create Account</h2><p _ngcontent-ng-c3853323601="">Fill out the credentials to sign up</p><!--container--><form _ngcontent-ng-c3853323601="" novalidate="" class="ng-untouched ng-pristine ng-invalid" jsaction="submit:;"><div _ngcontent-ng-c3853323601="" class="row"><div _ngcontent-ng-c3853323601="" class="col-md-6 form-group"><label _ngcontent-ng-c3853323601="">Full Name *</label><input _ngcontent-ng-c3853323601="" type="text" name="name" required="" placeholder="e.g. Your Name" class="form-control ng-untouched ng-pristine ng-invalid" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c3853323601="" class="col-md-6 form-group mt-3 mt-md-0"><label _ngcontent-ng-c3853323601="">Email Address *</label><input _ngcontent-ng-c3853323601="" type="email" name="email" required="" placeholder="yourname@buildtrack.com" class="form-control ng-untouched ng-pristine ng-invalid" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"></div></div><div _ngcontent-ng-c3853323601="" class="row mt-3"><div _ngcontent-ng-c3853323601="" class="col-md-6 form-group"><label _ngcontent-ng-c3853323601="">Password *</label><input _ngcontent-ng-c3853323601="" type="password" name="password" required="" placeholder="••••••••" class="form-control ng-untouched ng-pristine ng-invalid" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c3853323601="" class="col-md-6 form-group mt-3 mt-md-0"><label _ngcontent-ng-c3853323601="">Platform Role *</label><select _ngcontent-ng-c3853323601="" name="role" required="" class="form-select form-control ng-untouched ng-pristine ng-valid" jsaction="change:;blur:;"><option _ngcontent-ng-c3853323601="" value="admin">Administrator</option><option _ngcontent-ng-c3853323601="" value="project_manager">Project Manager</option><option _ngcontent-ng-c3853323601="" value="site_engineer">Site Engineer</option><option _ngcontent-ng-c3853323601="" value="contractor">Contractor</option><option _ngcontent-ng-c3853323601="" value="worker">Workforce/Worker</option><option _ngcontent-ng-c3853323601="" value="client">Client / Owner</option><!--container--></select></div></div><div _ngcontent-ng-c3853323601="" class="row mt-3"><div _ngcontent-ng-c3853323601="" class="col-md-6 form-group"><label _ngcontent-ng-c3853323601="">Company / Organization</label><input _ngcontent-ng-c3853323601="" type="text" name="company" placeholder="e.g. Acme Construction" class="form-control ng-untouched ng-pristine ng-valid" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c3853323601="" class="col-md-6 form-group mt-3 mt-md-0"><label _ngcontent-ng-c3853323601="">Phone Number</label><input _ngcontent-ng-c3853323601="" type="tel" name="phone" placeholder="e.g. +91 555-1234" class="form-control ng-untouched ng-pristine ng-valid" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"></div></div><button _ngcontent-ng-c3853323601="" class="btn btn-primary w-100 mt-4 d-flex align-items-center justify-content-center gap-2" disabled=""><!--container--> Create Account <!--container--></button><div _ngcontent-ng-c3853323601="" class="login-link text-center mt-3"> Already have an account? <a _ngcontent-ng-c3853323601="" routerlink="/login" class="fw-bold text-primary" href="/login" jsaction="click:;"> Login </a></div></form></div></div></div></app-register><!--container--></app-root>
  <script src="main.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"4":"t0","22":"t1","29":"t2","51":"t3","62":"t4","63":"t5"},"c":{"4":[{"i":"t0","r":1,"x":5}],"22":[{"i":"t1","r":1,"x":5}],"29":[],"51":[{"i":"t3","r":1,"x":6}],"62":[],"63":[{"i":"t5","r":1}]}},{"c":{"0":[{"i":"c3853323601","r":1}]}}]}</script></body></html>`;