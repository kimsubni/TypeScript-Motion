/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/App.ts":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var r=s("./src/core/Component.ts"),n=s("./src/Pages/Main.ts");class a extends r.default{didMount(){const e=this.target.querySelector("mainContainer");new n.default(e,{propTest:"main"})}template(){return"\n      <div class='page-wrapper'>\n        <header></header>\n        <div class ='content-wrapper'>\n          <mainContainer></mainContainer>\n        </div>\n      </div>\n    "}}},"./src/Pages/Login.ts":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var r=s("./src/components/Header/Header.ts"),n=s("./src/core/Component.ts");class a extends n.default{didMount(){const e=this.target.querySelector("header");new r.default(e,{propTest:"subprop"})}template(){return"\n        <div>login</div>\n    "}}},"./src/Pages/Main.ts":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var r=s("./src/components/Header/Header.ts"),n=s("./src/core/Component.ts");class a extends n.default{didMount(){const e=this.target.querySelector("header");new r.default(e,{propTest:"mainprops"})}template(){return"\n    <div class='main-wrapper drop-shadow'>\n        <header></header>\n    </div>"}}},"./src/components/Header/Header.ts":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var r=s("./src/core/Component.ts"),n=s("./src/components/Header/HeaderItemCard.ts");class a extends r.default{didMount(){[{name:"이미지 삽입",id:"img"},{name:"비디오 삽입",id:"video"},{name:"메모",id:"note"},{name:"할 일",id:"todo"}].forEach((e=>{this.insertItemCard(e.name,e.id)}))}insertItemCard(e,t){const s=this.target.querySelector(`#${t}`);new n.default(s,{name:e,id:t}),console.log("여기와봐")}template(){return"\n    <div class='header'>\n      <div>김수빈의 모션</div>\n      <div class='header-items' >\n        <div class='header-item' id='img'></div>\n        <div class='header-item' id='video'></div>\n        <div class='header-item' id='note'></div>\n        <div class='header-item' id='todo'></div>\n      </div>\n    </div>\n    "}}},"./src/components/Header/HeaderItemCard.ts":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var r=s("./src/core/Component.ts");class n extends r.default{didMount(){this.target.querySelector("img")}template(){const{name:e,id:t}=this.props;return`<button> <img />${e}</button>`}}},"./src/core/BrowserRouter.ts":(e,t,s)=>{s.r(t),s.d(t,{initRouter:()=>o,router:()=>a});var r=s("./src/utils/helpers.ts");class n{routes={};fallback="/";constructor(e){let{$app:t,routes:s,fallback:r="/"}=e;this.$app=t,this.fallback=r,s.forEach((e=>{this.routes[e.path]=e.page})),this.initEvent()}initEvent(){document.addEventListener("moveRoutes",this.onRouteChangeHandler.bind(this))}onRouteChangeHandler(e){const t=e.detail.path;history.pushState(e.detail,"",t),this.renderPage(t)}hasRoute(e){return void 0!==this.routes[e]}getRoute(e){return this.routes[e]}renderPage(e){let t;const s=/\w{1,}$/;t=this.hasRoute(e)?this.getRoute(e):s.test(e)?this.getRoute(e.replace(s,":id")):this.getRoute(this.fallback),new t(this.$app,{})}push(e){(0,r.customEventEmitter)("moveRoutes",{...history.state,path:e})}}let a;function o(e){const t=new n(e);a={push:e=>t.push(e)},(0,r.customEventEmitter)("moveRoutes",history.state??{path:"/"})}},"./src/core/Component.ts":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});class r{constructor(e,t){this.target=e,this.props=t,this.state={},this.setup(),this.mount(),this.setEvent()}setup(){}template(){return""}render(){const e=this.template();e&&(this.target.innerHTML=e)}mount(){this.render(),this.didMount()}update(){this.render(),this.didUpdate()}didMount(){}didUpdate(){}setState(e){const t={...this.state,...e};JSON.stringify(this.state)!==JSON.stringify(t)&&(this.state=t,this.update())}setEvent(){}addEvent(e,t,s){const r=[...this.target.querySelectorAll(t)];this.target.addEventListener(e,(e=>{if(n=e.target,!r.includes(n)&&!n.closest(t))return!1;var n;s(e)}))}}},"./src/utils/helpers.ts":(e,t,s)=>{s.r(t),s.d(t,{customEventEmitter:()=>r});const r=(e,t)=>{document.dispatchEvent(new CustomEvent(e,{detail:t}))}},"./src/scss/index.scss":(e,t,s)=>{s.r(t)}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{s.r(r);var e=s("./src/core/BrowserRouter.ts"),t=s("./src/App.ts"),n=(s("./src/scss/index.scss"),s("./src/Pages/Login.ts"));const a=[{path:"/",page:t.default},{path:"/login",page:n.default}],o=document.querySelector("#app");o.appendChild(document.createElement("main")),(0,e.initRouter)({$app:o,routes:a})})()})();
//# sourceMappingURL=main.js.map