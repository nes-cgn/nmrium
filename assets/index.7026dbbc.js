var O=Object.defineProperty,A=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var k=(t,n,e)=>n in t?O(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,m=(t,n)=>{for(var e in n||(n={}))N.call(n,e)&&k(t,e,n[e]);if(S)for(var e of S(n))_.call(n,e)&&k(t,e,n[e]);return t},f=(t,n)=>A(t,L(n));var gn=typeof require!="undefined"?require:t=>{throw new Error('Dynamic require of "'+t+'" is not supported')};import{r as s,M as R,S as M,c,w as H,j as r,F,E as D,a as w,R as b,b as P,d as U,H as V}from"./vendor.35105230.js";const B=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}};B();var z=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Exercises",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"}]},{groupName:"Exam",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"}]}],xn=`@font-face {
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
`;function W(t=[]){let n=[];for(const e of t)e.children&&Array.isArray(e.children)?n.push(T(e.groupName,[e],[])):n.push(s.exports.createElement(R,m({key:e.title},e),e.title));return n}function T(t,n=[],e=[],o=0){let i=e,l=[];o!==-1&&i[o]&&(i[o]=s.exports.cloneElement(i[o],{},l));for(const a in n)if(n[a].children&&Array.isArray(n[a].children)){const u=s.exports.createElement(M,{key:a+t,title:n[a].groupName});return i.push(u),T(a+t,n[a].children,i,0)}else l.push(s.exports.createElement(R,m({key:a+t},n[a]),n[a].title));return i}function $(t=[]){let n=[];for(const e of t)e.children&&Array.isArray(e.children)?n=n.concat(E([e],[])):n.push(e);return n}function E(t=[],n=[]){let e=n;for(const o of t){if(o.children&&Array.isArray(o.children))return E(o.children,e);n.push(o)}return e}function g(t=""){const n=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(t);let e="";if(n){const o=n[1].split("/");e=o.length>2?o[o.length-2]+o[o.length-1]:o[o.length-1]}return e+t.replace(/\.|\s|\//g,"")}const Y=c`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,G=c`
  width: 260px;
`,J=c`
  width: 3%;
`,q=c`
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
`,Z=c`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,X=c`
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
`,K=c`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,Q=c`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;function nn(t){const n=s.exports.useMemo(()=>W(t.routes),[t.routes]),e=t.menuIsClosed?"none":"block";return r("div",{css:c(Y,t.menuIsClosed?J:G)},r("div",{css:Z},r("div",{style:{display:e,padding:"0.5rem 0.7rem"}},r("a",{css:c(X,K)},"NMRium")),r("button",{type:"button",css:q,onClick:t.onMenuToggle},r(F,null))),r("div",{css:Q,style:{display:e}},r(D,{onClick:o=>{t.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${o.item.props.view+g(o.item.props.file)}`)},mode:"inline"},n)))}var en=H(s.exports.memo(nn));const tn="modulepreload",j={},rn="./",p=function(n,e){return!e||e.length===0?n():Promise.all(e.map(o=>{if(o=`${rn}${o}`,o in j)return;j[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":tn,i||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),i)return new Promise((u,d)=>{a.addEventListener("load",u),a.addEventListener("error",d)})})).then(()=>n())},x={Exam:s.exports.memo(s.exports.lazy(()=>p(()=>import("./Exam.30b6f2fd.js"),["assets/Exam.30b6f2fd.js","assets/vendor.35105230.js","assets/NMRium.a8e79573.js","assets/index.7da7f219.js"]))),Exercise:s.exports.memo(s.exports.lazy(()=>p(()=>import("./Exercise.fcb4460a.js"),["assets/Exercise.fcb4460a.js","assets/vendor.35105230.js","assets/NMRium.a8e79573.js","assets/index.7da7f219.js"]))),SingleView:s.exports.memo(s.exports.lazy(()=>p(()=>import("./SingleView.708c38e6.js"),["assets/SingleView.708c38e6.js","assets/vendor.35105230.js","assets/NMRium.a8e79573.js","assets/index.7da7f219.js"]))),Test:s.exports.memo(s.exports.lazy(()=>p(()=>import("./Test.5a97ae47.js"),["assets/Test.5a97ae47.js","assets/vendor.35105230.js","assets/NMRium.a8e79573.js","assets/index.7da7f219.js"]))),View:s.exports.memo(s.exports.lazy(()=>p(()=>import("./View.9a65ca78.js"),["assets/View.9a65ca78.js","assets/vendor.35105230.js","assets/NMRium.a8e79573.js","assets/index.7da7f219.js"]))),TwoInstances:s.exports.memo(s.exports.lazy(()=>p(()=>import("./TwoInstances.c2fdfbcc.js"),["assets/TwoInstances.c2fdfbcc.js","assets/vendor.35105230.js","assets/NMRium.a8e79573.js","assets/index.7da7f219.js"]))),Teaching:s.exports.memo(s.exports.lazy(()=>p(()=>import("./Teaching.d0c4491a.js"),["assets/Teaching.d0c4491a.js","assets/vendor.35105230.js","assets/NMRium.a8e79573.js","assets/index.7da7f219.js"])))},on=c`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,sn=c`
  width: calc(100% - 260px);
`,an=c`
  width: 98%;
  margin-left: 20px !important;
`;function ln(t){const{routes:n=[],baseURL:e}=t,o=s.exports.useMemo(()=>$(n),[n]),[i,l]=s.exports.useState(!1),a=s.exports.useCallback(()=>l(!i),[i]);return r("div",{style:{position:"relative",top:0,height:"100vh"}},r(en,f(m({},t),{routes:n,menuIsClosed:i,onMenuToggle:a})),r("div",{css:c(on,i?an:sn)},r(s.exports.StrictMode,null,r(s.exports.Suspense,{fallback:r("div",null,"Loading...")},r(w,null,o.map(u=>r(b,{path:`/SamplesDashboard/:id/${u.view+g(u.file)}`,render:d=>r(un,f(m({},d),{prop:u,baseURL:e})),key:g(u.file)})),o.length>0&&r(b,{path:"/",render:()=>{const u=o[0],d=u.view?u.view:"View",h=x[d];return r(h,m({},u[0]))},key:g(o[0].file)}))))))}function un(t){const{match:{params:{id:n}},prop:e,baseURL:o}=t,i=e.view?e.view:"View",l=x[i];return r(l,f(m({key:n},e),{id:g(e.file),baseURL:o}))}function cn(t){return r("div",{style:{position:"relative",top:0,height:"100vh"}},r("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"}},r(s.exports.Suspense,{fallback:r("div",null,"Loading...")},r(w,null,r(b,{path:"/",render:n=>{const{match:{params:{id:e}}}=n,o=t.view?t.view:"SingleView",i=x[o];return r(i,f(m({key:e},t),{id:g(t.patrh)}))},key:g(t.path)})))))}const y={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function mn(t){const n=await fetch(t);try{return dn(n),await n.json()}catch(e){return console.log(e),null}}function dn(t){if(!t.ok)throw new Error(`HTTP ${t.status} - ${t.statusText}`);return t}const pn=t=>{const[n,e]=s.exports.useState({isLoaded:!1,status:200,routes:[]}),[o,i]=s.exports.useState(""),l=s.exports.useCallback(()=>{e({isLoaded:!0,status:200,routes:z})},[]),a=(d="")=>d.substring(d.lastIndexOf(".")+1),u=window.location.href;return s.exports.useEffect(()=>{const d=new URL(u).searchParams;if(d.has("sampleURL")){const h=d.get("sampleURL");if(!h)return;switch(a(h).toLowerCase()){case"json":{i("multi"),mn(h).then(v=>{if(v){const C=h.replace(/^(?<url>.*[\\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),I=JSON.parse(JSON.stringify(v).replace(/\.\/+?/g,C));e({isLoaded:!0,status:200,routes:I,baseURL:C})}else e({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{i("single"),e({isLoaded:!0,status:200,path:h});break}}}else i("multi"),e({isLoaded:!0,status:200,routes:z,baseURL:"./"})},[u]),n.isLoaded?o&&o==="single"?r(cn,f(m({},t),{path:n.path})):r(P,null,r(ln,f(m({},t),{routes:n.routes,baseURL:n.baseURL}))):r("div",{style:y.bodyContainer},r("div",{style:m(m({},y.container),n.status===200?y.normal:y.error)},n.status===200?r("div",null,r("p",{style:y.normalHeader},"Please wait"),r("p",null,"We will redirect you in a minute")):r("div",null,r("p",{style:y.errorHeader},"404"),r("p",null,"Resource not found."),r("button",{style:y.loadButton,type:"button",onClick:l},"Load local samples"))))},hn=s.exports.lazy(()=>p(()=>import("./TestHighlight.aedcdddf.js"),["assets/TestHighlight.aedcdddf.js","assets/vendor.35105230.js","assets/index.7da7f219.js"]));function fn(){return r(s.exports.Suspense,{fallback:null},r(w,null,r(b,{path:"/test/highlight",component:hn}),r(b,{render:()=>r("div",null,"Page not found")})))}var vn=`/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

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
`,Cn=`/*
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
`,Sn=`.rc-menu {
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
`;U.render(r(V,null,r(w,null,r(b,{path:"/",render:t=>r(pn,m({},t))}),r(b,{path:"/test",component:fn}))),document.getElementById("root"));
