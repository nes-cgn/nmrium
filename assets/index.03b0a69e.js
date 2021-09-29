var N=Object.defineProperty,_=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var E=(t,n,e)=>n in t?N(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,d=(t,n)=>{for(var e in n||(n={}))H.call(n,e)&&E(t,e,n[e]);if(T)for(var e of T(n))F.call(n,e)&&E(t,e,n[e]);return t},b=(t,n)=>_(t,M(n));import{r as o,M as k,S as D,c as m,w as P,j as x,a as u,F as U,E as V,b as v,R as g,d as a,e as C,f as B,g as W,H as $}from"./vendor.17f91827.js";const Y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}};Y();var j=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Exercises",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"}]},{groupName:"Exam",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"}]}],Cn=`@font-face {
  font-family: 'FontAwesome';
  src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.eot');
  src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.eot?#iefix') format('embedded-opentype'), url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.woff') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.ttf') format('truetype'), url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.svg?#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
.rc-menu {
  outline: none;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  list-style: none;
  border: 1px solid #d9d9d9;
  box-shadow: 0 0 4px #d9d9d9;
  border-radius: 3px;
  color: #666;
}
.rc-menu-rtl {
  direction: rtl;
}
.rc-menu-hidden {
  display: none;
}
.rc-menu-collapse {
  overflow: hidden;
  transition: height 0.3s ease-out;
}
.rc-menu-item-group-list {
  margin: 0;
  padding: 0;
}
.rc-menu-item-group-title {
  color: #999;
  line-height: 1.5;
  padding: 8px 10px;
  border-bottom: 1px solid #dedede;
}
.rc-menu-item-active,
.rc-menu-submenu-active > .rc-menu-submenu-title {
  background-color: #eaf8fe;
}
.rc-menu-item-selected {
  background-color: #eaf8fe;
  transform: translateZ(0);
}
.rc-menu-submenu-selected {
  background-color: #eaf8fe;
}
.rc-menu > li.rc-menu-submenu {
  padding: 0;
}
.rc-menu-horizontal.rc-menu-sub,
.rc-menu-vertical.rc-menu-sub,
.rc-menu-vertical-left.rc-menu-sub,
.rc-menu-vertical-right.rc-menu-sub {
  min-width: 160px;
  margin-top: 0;
}
.rc-menu-item,
.rc-menu-submenu-title {
  margin: 0;
  position: relative;
  display: block;
  padding: 7px 7px 7px 16px;
  white-space: nowrap;
}
.rc-menu-rtl .rc-menu-item,
.rc-menu-rtl .rc-menu-submenu-title {
  padding: 7px 16px 7px 7px;
}
.rc-menu-item.rc-menu-item-disabled,
.rc-menu-submenu-title.rc-menu-item-disabled,
.rc-menu-item.rc-menu-submenu-disabled,
.rc-menu-submenu-title.rc-menu-submenu-disabled {
  color: #777 !important;
}
.rc-menu > .rc-menu-item-divider {
  height: 1px;
  margin: 1px 0;
  overflow: hidden;
  padding: 0;
  line-height: 0;
  background-color: #e5e5e5;
}
.rc-menu-submenu-popup {
  position: absolute;
}
.rc-menu-submenu-popup .submenu-title-wrapper {
  padding-right: 20px;
}
.rc-menu-submenu-rtl.rc-menu-submenu-popup .submenu-title-wrapper,
.rc-menu-submenu-rtl .rc-menu-submenu-popup .submenu-title-wrapper {
  padding-right: 0;
  padding-left: 20px;
}
.rc-menu-submenu > .rc-menu {
  background-color: #fff;
}
.rc-menu .rc-menu-submenu-title .anticon,
.rc-menu .rc-menu-item .anticon {
  width: 14px;
  height: 14px;
  margin-right: 8px;
  top: -1px;
}
.rc-menu-rtl .rc-menu .rc-menu-submenu-title .anticon,
.rc-menu-rtl .rc-menu .rc-menu-item .anticon {
  margin-right: 0;
  margin-left: 8px;
}
.rc-menu-horizontal {
  background-color: #f3f5f7;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  box-shadow: none;
  white-space: nowrap;
  overflow: hidden;
}
.rc-menu-horizontal > .rc-menu-item,
.rc-menu-horizontal > .rc-menu-submenu > .rc-menu-submenu-title {
  padding: 15px 20px;
}
.rc-menu-horizontal > .rc-menu-submenu,
.rc-menu-horizontal > .rc-menu-item {
  border-bottom: 2px solid transparent;
  display: inline-block;
  vertical-align: bottom;
}
.rc-menu-horizontal > .rc-menu-submenu-active,
.rc-menu-horizontal > .rc-menu-item-active {
  border-bottom: 2px solid #2db7f5;
  background-color: #f3f5f7;
  color: #2baee9;
}
.rc-menu-horizontal:after {
  content: '\\20';
  display: block;
  height: 0;
  clear: both;
}
.rc-menu-vertical,
.rc-menu-vertical-left,
.rc-menu-vertical-right,
.rc-menu-inline {
  padding: 12px 0;
}
.rc-menu-vertical > .rc-menu-item,
.rc-menu-vertical-left > .rc-menu-item,
.rc-menu-vertical-right > .rc-menu-item,
.rc-menu-inline > .rc-menu-item,
.rc-menu-vertical > .rc-menu-submenu > .rc-menu-submenu-title,
.rc-menu-vertical-left > .rc-menu-submenu > .rc-menu-submenu-title,
.rc-menu-vertical-right > .rc-menu-submenu > .rc-menu-submenu-title,
.rc-menu-inline > .rc-menu-submenu > .rc-menu-submenu-title {
  padding: 12px 8px 12px 24px;
}
.rc-menu-rtl.rc-menu-vertical > .rc-menu-item,
.rc-menu-rtl.rc-menu-vertical-left > .rc-menu-item,
.rc-menu-rtl.rc-menu-vertical-right > .rc-menu-item,
.rc-menu-rtl.rc-menu-inline > .rc-menu-item,
.rc-menu-rtl.rc-menu-vertical > .rc-menu-submenu > .rc-menu-submenu-title,
.rc-menu-rtl.rc-menu-vertical-left > .rc-menu-submenu > .rc-menu-submenu-title,
.rc-menu-rtl.rc-menu-vertical-right > .rc-menu-submenu > .rc-menu-submenu-title,
.rc-menu-rtl.rc-menu-inline > .rc-menu-submenu > .rc-menu-submenu-title {
  padding: 12px 24px 12px 8px;
}
.rc-menu-vertical .rc-menu-submenu-arrow,
.rc-menu-vertical-left .rc-menu-submenu-arrow,
.rc-menu-vertical-right .rc-menu-submenu-arrow,
.rc-menu-inline .rc-menu-submenu-arrow {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
  position: absolute;
  right: 16px;
  line-height: 1.5em;
}
.rc-menu-vertical .rc-menu-submenu-arrow:before,
.rc-menu-vertical-left .rc-menu-submenu-arrow:before,
.rc-menu-vertical-right .rc-menu-submenu-arrow:before,
.rc-menu-inline .rc-menu-submenu-arrow:before {
  content: '\\f0da';
}
.rc-menu-rtl.rc-menu-vertical .rc-menu-submenu-arrow:before,
.rc-menu-rtl.rc-menu-vertical-left .rc-menu-submenu-arrow:before,
.rc-menu-rtl.rc-menu-vertical-right .rc-menu-submenu-arrow:before,
.rc-menu-rtl.rc-menu-inline .rc-menu-submenu-arrow:before,
.rc-menu-submenu-rtl .rc-menu-vertical .rc-menu-submenu-arrow:before,
.rc-menu-submenu-rtl .rc-menu-vertical-left .rc-menu-submenu-arrow:before,
.rc-menu-submenu-rtl .rc-menu-vertical-right .rc-menu-submenu-arrow:before,
.rc-menu-submenu-rtl .rc-menu-inline .rc-menu-submenu-arrow:before {
  content: '\\f0d9';
}
.rc-menu-rtl.rc-menu-vertical .rc-menu-submenu-arrow,
.rc-menu-rtl.rc-menu-vertical-left .rc-menu-submenu-arrow,
.rc-menu-rtl.rc-menu-vertical-right .rc-menu-submenu-arrow,
.rc-menu-rtl.rc-menu-inline .rc-menu-submenu-arrow,
.rc-menu-submenu-rtl .rc-menu-vertical .rc-menu-submenu-arrow,
.rc-menu-submenu-rtl .rc-menu-vertical-left .rc-menu-submenu-arrow,
.rc-menu-submenu-rtl .rc-menu-vertical-right .rc-menu-submenu-arrow,
.rc-menu-submenu-rtl .rc-menu-inline .rc-menu-submenu-arrow {
  right: auto;
  left: 16px;
}
.rc-menu-inline .rc-menu-submenu-arrow {
  transform: rotate(90deg);
  transition: transform 0.3s;
}
.rc-menu-inline .rc-menu-submenu-open > .rc-menu-submenu-title .rc-menu-submenu-arrow {
  transform: rotate(-90deg);
}
.rc-menu-vertical.rc-menu-sub,
.rc-menu-vertical-left.rc-menu-sub,
.rc-menu-vertical-right.rc-menu-sub {
  padding: 0;
}
.rc-menu-submenu-rtl .rc-menu-vertical.rc-menu-sub,
.rc-menu-submenu-rtl .rc-menu-vertical-left.rc-menu-sub,
.rc-menu-submenu-rtl .rc-menu-vertical-right.rc-menu-sub {
  direction: rtl;
}
.rc-menu-sub.rc-menu-inline {
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.rc-menu-sub.rc-menu-inline > .rc-menu-item,
.rc-menu-sub.rc-menu-inline > .rc-menu-submenu > .rc-menu-submenu-title {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 0;
}
.rc-menu-rtl .rc-menu-sub.rc-menu-inline > .rc-menu-item,
.rc-menu-rtl .rc-menu-sub.rc-menu-inline > .rc-menu-submenu > .rc-menu-submenu-title {
  padding-left: 0;
}
.rc-menu-open-slide-up-enter,
.rc-menu-open-slide-up-appear {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  animation-play-state: paused;
}
.rc-menu-open-slide-up-leave {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  opacity: 1;
  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  animation-play-state: paused;
}
.rc-menu-open-slide-up-enter.rc-menu-open-slide-up-enter-active,
.rc-menu-open-slide-up-appear.rc-menu-open-slide-up-appear-active {
  animation-name: rcMenuOpenSlideUpIn;
  animation-play-state: running;
}
.rc-menu-open-slide-up-leave.rc-menu-open-slide-up-leave-active {
  animation-name: rcMenuOpenSlideUpOut;
  animation-play-state: running;
}
@keyframes rcMenuOpenSlideUpIn {
  0% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
}
@keyframes rcMenuOpenSlideUpOut {
  0% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0);
  }
}
.rc-menu-open-zoom-enter,
.rc-menu-open-zoom-appear {
  opacity: 0;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  animation-play-state: paused;
}
.rc-menu-open-zoom-leave {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  animation-play-state: paused;
}
.rc-menu-open-zoom-enter.rc-menu-open-zoom-enter-active,
.rc-menu-open-zoom-appear.rc-menu-open-zoom-appear-active {
  animation-name: rcMenuOpenZoomIn;
  animation-play-state: running;
}
.rc-menu-open-zoom-leave.rc-menu-open-zoom-leave-active {
  animation-name: rcMenuOpenZoomOut;
  animation-play-state: running;
}
.rc-menu-submenu-rtl.rc-menu-open-zoom-enter,
.rc-menu-submenu-rtl.rc-menu-open-zoom-appear,
.rc-menu-submenu-rtl.rc-menu-open-zoom-leave,
.rc-menu-submenu-rtl .rc-menu-open-zoom-enter,
.rc-menu-submenu-rtl .rc-menu-open-zoom-appear,
.rc-menu-submenu-rtl .rc-menu-open-zoom-leave {
  transform-origin: top right !important;
}
@keyframes rcMenuOpenZoomIn {
  0% {
    opacity: 0;
    transform: scale(0, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}
@keyframes rcMenuOpenZoomOut {
  0% {
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform: scale(0, 0);
  }
}
`;function G(t=[]){let n=[];for(const e of t)e.children&&Array.isArray(e.children)?n.push(I(e.groupName,[e],[])):n.push(o.exports.createElement(k,d({key:e.title},e),e.title));return n}function I(t,n=[],e=[],r=0){let i=e,l=[];r!==-1&&i[r]&&(i[r]=o.exports.cloneElement(i[r],{},l));for(const s in n)if(n[s].children&&Array.isArray(n[s].children)){const c=o.exports.createElement(D,{key:s+t,title:n[s].groupName});return i.push(c),I(s+t,n[s].children,i,0)}else l.push(o.exports.createElement(k,d({key:s+t},n[s]),n[s].title));return i}function J(t=[]){let n=[];for(const e of t)e.children&&Array.isArray(e.children)?n=n.concat(O([e],[])):n.push(e);return n}function O(t=[],n=[]){let e=n;for(const r of t){if(r.children&&Array.isArray(r.children))return O(r.children,e);n.push(r)}return e}function y(t=""){const n=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(t);let e="";if(n){const r=n[1].split("/");e=r.length>2?r[r.length-2]+r[r.length-1]:r[r.length-1]}return e+t.replace(/\.|\s|\//g,"")}const q=m`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,Z=m`
  width: 260px;
`,X=m`
  width: 3%;
`,K=m`
  margin-left: 4px;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-right: 4px;
  z-index: 7;
  font-size: 18px;
  background-color: transparent;
  border: none !important;
  height: 30px;
  width: 30px;
  padding: 1px 6px;

  & svg {
    fill: white;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
`,Q=m`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,nn=m`
  text-transform: uppercase;
  padding: 0.5rem 0;
  display: block;
  white-space: nowrap;
  font-size: 1em;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  line-height: 30px;
  overflow: hidden;
`,en=m`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,tn=m`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;function rn(t){const n=o.exports.useMemo(()=>G(t.routes),[t.routes]),e=t.menuIsClosed?"none":"block";return x("div",{css:m(q,t.menuIsClosed?X:Z),children:[x("div",{css:Q,children:[u("div",{style:{display:e,padding:"0.5rem 0.7rem"},children:u("a",{css:m(nn,en),children:"NMRium"})}),u("button",{type:"button",css:K,onClick:t.onMenuToggle,children:u(U,{})})]}),u("div",{css:tn,style:{display:e},children:u(V,{onClick:r=>{t.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${r.item.props.view+y(r.item.props.file)}`)},mode:"inline",children:n})})]})}var on=P(o.exports.memo(rn));const sn="modulepreload",A={},an="./",h=function(n,e){return!e||e.length===0?n():Promise.all(e.map(r=>{if(r=`${an}${r}`,r in A)return;A[r]=!0;const i=r.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":sn,i||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),i)return new Promise((c,p)=>{s.addEventListener("load",c),s.addEventListener("error",p)})})).then(()=>n())},S={Exam:o.exports.memo(o.exports.lazy(()=>h(()=>import("./Exam.a8b183b9.js"),["assets/Exam.a8b183b9.js","assets/vendor.17f91827.js","assets/NMRium.c8163a5f.js","assets/index.86dcbf27.js"]))),Exercise:o.exports.memo(o.exports.lazy(()=>h(()=>import("./Exercise.47e100aa.js"),["assets/Exercise.47e100aa.js","assets/vendor.17f91827.js","assets/NMRium.c8163a5f.js","assets/index.86dcbf27.js"]))),SingleView:o.exports.memo(o.exports.lazy(()=>h(()=>import("./SingleView.ae433f65.js"),["assets/SingleView.ae433f65.js","assets/vendor.17f91827.js","assets/NMRium.c8163a5f.js","assets/index.86dcbf27.js"]))),Test:o.exports.memo(o.exports.lazy(()=>h(()=>import("./Test.d452153b.js"),["assets/Test.d452153b.js","assets/vendor.17f91827.js","assets/NMRium.c8163a5f.js","assets/index.86dcbf27.js"]))),View:o.exports.memo(o.exports.lazy(()=>h(()=>import("./View.e6000ae1.js"),["assets/View.e6000ae1.js","assets/vendor.17f91827.js","assets/NMRium.c8163a5f.js","assets/index.86dcbf27.js"]))),TwoInstances:o.exports.memo(o.exports.lazy(()=>h(()=>import("./TwoInstances.c3f742da.js"),["assets/TwoInstances.c3f742da.js","assets/NMRium.c8163a5f.js","assets/vendor.17f91827.js","assets/index.86dcbf27.js"]))),Teaching:o.exports.memo(o.exports.lazy(()=>h(()=>import("./Teaching.fbb71a7c.js"),["assets/Teaching.fbb71a7c.js","assets/vendor.17f91827.js","assets/NMRium.c8163a5f.js","assets/index.86dcbf27.js"])))},ln=m`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,un=m`
  width: calc(100% - 260px);
`,cn=m`
  width: 98%;
  margin-left: 20px !important;
`;function mn(t){const{routes:n=[],baseURL:e}=t,r=o.exports.useMemo(()=>J(n),[n]),[i,l]=o.exports.useState(!1),s=o.exports.useCallback(()=>l(!i),[i]);return x("div",{style:{position:"relative",top:0,height:"100vh"},children:[u(on,b(d({},t),{routes:n,menuIsClosed:i,onMenuToggle:s})),u("div",{css:m(ln,i?cn:un),children:u(o.exports.StrictMode,{children:u(o.exports.Suspense,{fallback:u("div",{children:"Loading..."}),children:x(v,{children:[r.map(c=>u(g,{path:`/SamplesDashboard/:id/${c.view+y(c.file)}`,render:p=>u(dn,b(d({},p),{prop:c,baseURL:e}))},y(c.file))),r.length>0&&u(g,{path:"/",render:()=>{const c=r[0],p=c.view?c.view:"View",f=S[p];return u(f,d({},c[0]))}},y(r[0].file))]})})})})]})}function dn(t){const{match:{params:{id:n}},prop:e,baseURL:r}=t,i=e.view?e.view:"View",l=S[i];return u(l,b(d({},e),{id:y(e.file),baseURL:r}),n)}function pn(t){return a("div",{style:{position:"relative",top:0,height:"100vh"},children:a("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"},children:a(o.exports.Suspense,{fallback:a("div",{children:"Loading..."}),children:a(v,{children:a(g,{path:"/",render:n=>{const{match:{params:{id:e}}}=n,r=t.view?t.view:"SingleView",i=S[r];return a(i,b(d({},t),{id:y(t.patrh)}),e)}},y(t.path))})})})})}const w={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function hn(t){const n=await fetch(t);try{return fn(n),await n.json()}catch(e){return console.log(e),null}}function fn(t){if(!t.ok)throw new Error(`HTTP ${t.status} - ${t.statusText}`);return t}const bn=t=>{const[n,e]=o.exports.useState({isLoaded:!1,status:200,routes:[]}),[r,i]=o.exports.useState(""),l=o.exports.useCallback(()=>{e({isLoaded:!0,status:200,routes:j})},[]),s=(p="")=>p.substring(p.lastIndexOf(".")+1),c=window.location.href;return o.exports.useEffect(()=>{const p=new URL(c).searchParams;if(p.has("sampleURL")){const f=p.get("sampleURL");if(!f)return;switch(s(f).toLowerCase()){case"json":{i("multi"),hn(f).then(R=>{if(R){const z=f.replace(/^(?<url>.*[\\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),L=JSON.parse(JSON.stringify(R).replace(/\.\/+?/g,z));e({isLoaded:!0,status:200,routes:L,baseURL:z})}else e({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{i("single"),e({isLoaded:!0,status:200,path:f});break}}}else i("multi"),e({isLoaded:!0,status:200,routes:j,baseURL:"./"})},[c]),n.isLoaded?r&&r==="single"?a(pn,b(d({},t),{path:n.path})):a(B,{children:a(mn,b(d({},t),{routes:n.routes,baseURL:n.baseURL}))}):a("div",{style:w.bodyContainer,children:a("div",{style:d(d({},w.container),n.status===200?w.normal:w.error),children:n.status===200?C("div",{children:[a("p",{style:w.normalHeader,children:"Please wait"}),a("p",{children:"We will redirect you in a minute"})]}):C("div",{children:[a("p",{style:w.errorHeader,children:"404"}),a("p",{children:"Resource not found."}),a("button",{style:w.loadButton,type:"button",onClick:l,children:"Load local samples"})]})})})},gn=o.exports.lazy(()=>h(()=>import("./TestHighlight.46556006.js"),["assets/TestHighlight.46556006.js","assets/vendor.17f91827.js","assets/index.86dcbf27.js"]));function yn(){return a(o.exports.Suspense,{fallback:null,children:C(v,{children:[a(g,{path:"/test/highlight",component:gn}),a(g,{render:()=>a("div",{children:"Page not found"})})]})})}var Sn=`/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
::before,
::after {
	box-sizing: border-box;
}

/**
Use a more readable tab size (opinionated).
*/

html {
	-moz-tab-size: 4;
	tab-size: 4;
}

/**
1. Correct the line height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
*/

html {
	line-height: 1.15; /* 1 */
	-webkit-text-size-adjust: 100%; /* 2 */
}

/*
Sections
========
*/

/**
Remove the margin in all browsers.
*/

body {
	margin: 0;
}

/**
Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
*/

body {
	font-family:
		system-ui,
		-apple-system, /* Firefox supports this but not yet \`system-ui\` */
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
	text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
1. Remove the inheritance of text transform in Firefox.
*/

button,
select { /* 1 */
	text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
	box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}
`,Rn=`/*
Adapted from:
https://raw.githubusercontent.com/tailwindlabs/tailwindcss/c1d6174546f81dc6997833fa47ab3fe3f7cdc14d/src/plugins/css/preflight.css

Changes:
- Replace calls to \`theme()\` with the default value.
*/

/*
MIT License

Copyright (c) Adam Wathan <adam.wathan@gmail.com>
Copyright (c) Jonathan Reinink <jonathan@reinink.ca>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/**
 * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
 * A thin layer on top of normalize.css that provides a starting point more
 * suitable for web applications.
 */

/**
 * Removes the default spacing and border for appropriate elements.
 */

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

button {
  background-color: transparent;
  background-image: none;
}

/**
  * Work around a Firefox/IE bug where the transparent \`button\` background
  * results in a loss of the default \`button\` focus styles.
  */

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/**
  * Tailwind custom reset styles
  */

/**
  * 1. Use the user's configured \`sans\` font-family (with Tailwind's default
  *    sans-serif font stack as a fallback) as a sane default.
  * 2. Use Tailwind's default "normal" line-height so the user isn't forced
  *    to override it to ensure consistency even when using the default theme.
  */

html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; /* 1 */
  line-height: 1.5; /* 2 */
}

/**
  * 1. Prevent padding and border from affecting element width.
  *
  *    We used to set this in the html element and inherit from
  *    the parent element for everything else. This caused issues
  *    in shadow-dom-enhanced elements like <details> where the content
  *    is wrapped by a div with box-sizing set to \`content-box\`.
  *
  *    https://github.com/mozdevs/cssremedy/issues/4
  *
  *
  * 2. Allow adding a border to an element by just adding a border-width.
  *
  *    By default, the way the browser specifies that an element should have no
  *    border is by setting it's border-style to \`none\` in the user-agent
  *    stylesheet.
  *
  *    In order to easily add borders to elements by just setting the \`border-width\`
  *    property, we change the default border-style for all elements to \`solid\`, and
  *    use border-width to hide them instead. This way our \`border\` utilities only
  *    need to set the \`border-width\` property instead of the entire \`border\`
  *    shorthand, making our border utilities much more straightforward to compose.
  *
  *    https://github.com/tailwindcss/tailwindcss/pull/116
  */

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: currentColor; /* 2 */
}

/*
  * Ensure horizontal rules are visible by default
  */

hr {
  border-top-width: 1px;
}

/**
  * Undo the \`border-style: none\` reset that Normalize applies to images so that
  * our \`border-{width}\` utilities have the expected effect.
  *
  * The Normalize reset is unnecessary for us since we default the border-width
  * to 0 on all elements.
  *
  * https://github.com/tailwindcss/tailwindcss/issues/362
  */

img {
  border-style: solid;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color: #a0aec0;
}

button,
[role='button'] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/**
  * Reset links to optimize for opt-in styling instead of
  * opt-out.
  */

a {
  color: inherit;
  text-decoration: inherit;
}

/**
  * Reset form element properties that are easy to forget to
  * style explicitly so you don't inadvertently introduce
  * styles that deviate from your design system. These styles
  * supplement a partial reset that is already applied by
  * normalize.css.
  */

button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

/**
  * Use the configured 'mono' font family for elements that
  * are expected to be rendered with a monospace font, falling
  * back to the system monospace stack if there is no configured
  * 'mono' font family.
  */

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
}

/**
  * Make replaced elements \`display: block\` by default as that's
  * the behavior you want almost all of the time. Inspired by
  * CSS Remedy, with \`svg\` added as well.
  *
  * https://github.com/mozdevs/cssremedy/issues/14
  */

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

/**
  * Constrain images and videos to the parent width and preserve
  * their instrinsic aspect ratio.
  *
  * https://github.com/mozdevs/cssremedy/issues/14
  */

img,
video {
  max-width: 100%;
  height: auto;
}
`,zn=`.rc-menu {
  border: none !important;
  box-shadow: none !important;
}

.rc-menu-item,
.rc-menu-submenu {
  color: white;
}

.rc-menu-item:hover {
  color: #ffffff;
  background-color: #37adff;
  font-weight: bold;
  transform: translate(2px);
  transition: transform 0.1s ease-in-out;
}

.rc-menu li {
  user-select: none;
  -webkit-user-select: none;
}

.rc-menu-submenu.rc-menu-submenu-active,
.rc-menu-submenu.rc-menu-submenu-selected,
.rc-menu:first-of-type .rc-menu-item.rc-menu-item-selected {
  color: black;
  background-color: white;
}

.rc-menu-submenu > .rc-menu {
  background-color: #28a4fb;
  color: #000000;
  font-size: 12px;
}
`;W.render(a($,{children:C(v,{children:[a(g,{path:"/",render:t=>a(bn,d({},t))}),a(g,{path:"/test",component:yn})]})}),document.getElementById("root"));
//# sourceMappingURL=index.03b0a69e.js.map
