var P=Object.defineProperty,M=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var R=(i,e,t)=>e in i?P(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,h=(i,e)=>{for(var t in e||(e={}))N.call(e,t)&&R(i,t,e[t]);if(L)for(var t of L(e))O.call(e,t)&&R(i,t,e[t]);return i},g=(i,e)=>M(i,A(e));import{r as o,M as T,S as V,c as u,w as I,j as w,a as c,F as $,E as B,b as v,R as y,d as l,e as j,f as F,g as U,H as J}from"./vendor.f5173abd.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}};q();var S=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/ethylbenzene/full.json",title:"FULL ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Exercises",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"}]},{groupName:"Exam",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"}]}];function W(i=[]){let e=[];for(const t of i)t.children&&Array.isArray(t.children)?e.push(k(t.groupName,[t],[])):e.push(o.exports.createElement(T,h({key:t.title},t),t.title));return e}function k(i,e=[],t=[],s=0){let n=t,a=[];s!==-1&&n[s]&&(n[s]=o.exports.cloneElement(n[s],{},a));for(const r in e)if(e[r].children&&Array.isArray(e[r].children)){const d=o.exports.createElement(V,{key:r+i,title:e[r].groupName});return n.push(d),k(r+i,e[r].children,n,0)}else a.push(o.exports.createElement(T,h({key:r+i},e[r]),e[r].title));return n}function X(i=[]){let e=[];for(const t of i)t.children&&Array.isArray(t.children)?e=e.concat(H([t],[])):e.push(t);return e}function H(i=[],e=[]){let t=e;for(const s of i){if(s.children&&Array.isArray(s.children))return H(s.children,t);e.push(s)}return t}function x(i=""){const e=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(i);let t="";if(e){const s=e[1].split("/");t=s.length>2?s[s.length-2]+s[s.length-1]:s[s.length-1]}return t+i.replace(/\.|\s|\//g,"")}const Q=u`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,K=u`
  width: 260px;
`,G=u`
  width: 3%;
`,Y=u`
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
`,Z=u`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,ee=u`
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
`,te=u`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,ie=u`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;function se(i){const e=o.exports.useMemo(()=>W(i.routes),[i.routes]),t=i.menuIsClosed?"none":"block";return w("div",{css:u(Q,i.menuIsClosed?G:K),children:[w("div",{css:Z,children:[c("div",{style:{display:t,padding:"0.5rem 0.7rem"},children:c("a",{css:u(ee,te),children:"NMRium"})}),c("button",{type:"button",css:Y,onClick:i.onMenuToggle,children:c($,{})})]}),c("div",{css:ie,style:{display:t},children:c(B,{onClick:s=>{i.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${s.item.props.view+x(s.item.props.file)}`)},mode:"inline",children:e})})]})}var ne=I(o.exports.memo(se));const oe="modulepreload",z={},re="./",p=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${re}${s}`,s in z)return;z[s]=!0;const n=s.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":oe,n||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),n)return new Promise((d,f)=>{r.addEventListener("load",d),r.addEventListener("error",f)})})).then(()=>e())},C={Exam:o.exports.memo(o.exports.lazy(()=>p(()=>import("./Exam.616831b1.js"),["assets/Exam.616831b1.js","assets/vendor.f5173abd.js","assets/NMRium.72d7ea1c.js","assets/index.8025e0a6.js"]))),Exercise:o.exports.memo(o.exports.lazy(()=>p(()=>import("./Exercise.2e67075b.js"),["assets/Exercise.2e67075b.js","assets/vendor.f5173abd.js","assets/NMRium.72d7ea1c.js","assets/index.8025e0a6.js"]))),SingleView:o.exports.memo(o.exports.lazy(()=>p(()=>import("./SingleView.457f317c.js"),["assets/SingleView.457f317c.js","assets/vendor.f5173abd.js","assets/NMRium.72d7ea1c.js","assets/index.8025e0a6.js"]))),Test:o.exports.memo(o.exports.lazy(()=>p(()=>import("./Test.0bab2b05.js"),["assets/Test.0bab2b05.js","assets/vendor.f5173abd.js","assets/NMRium.72d7ea1c.js","assets/index.8025e0a6.js"]))),View:o.exports.memo(o.exports.lazy(()=>p(()=>import("./View.844ba65d.js"),["assets/View.844ba65d.js","assets/vendor.f5173abd.js","assets/NMRium.72d7ea1c.js","assets/index.8025e0a6.js"]))),TwoInstances:o.exports.memo(o.exports.lazy(()=>p(()=>import("./TwoInstances.371b6491.js"),["assets/TwoInstances.371b6491.js","assets/NMRium.72d7ea1c.js","assets/vendor.f5173abd.js","assets/index.8025e0a6.js"]))),Teaching:o.exports.memo(o.exports.lazy(()=>p(()=>import("./Teaching.a0a2a956.js"),["assets/Teaching.a0a2a956.js","assets/vendor.f5173abd.js","assets/NMRium.72d7ea1c.js","assets/index.8025e0a6.js"])))},le=u`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,ae=u`
  width: calc(100% - 260px);
`,ce=u`
  width: 98%;
  margin-left: 20px !important;
`;function de(i){const{routes:e=[],baseURL:t}=i,s=o.exports.useMemo(()=>X(e),[e]),[n,a]=o.exports.useState(!1),r=o.exports.useCallback(()=>a(!n),[n]);return w("div",{style:{position:"relative",top:0,height:"100vh"},children:[c(ne,g(h({},i),{routes:e,menuIsClosed:n,onMenuToggle:r})),c("div",{css:u(le,n?ce:ae),children:c(o.exports.StrictMode,{children:c(o.exports.Suspense,{fallback:c("div",{children:"Loading..."}),children:w(v,{children:[s.map(d=>c(y,{path:`/SamplesDashboard/:id/${d.view+x(d.file)}`,render:f=>c(ue,g(h({},f),{prop:d,baseURL:t}))},x(d.file))),s.length>0&&c(y,{path:"/",render:()=>{const d=s[0],f=d.view?d.view:"View",m=C[f];return c(m,h({},d[0]))}},x(s[0].file))]})})})})]})}function ue(i){const{match:{params:{id:e}},prop:t,baseURL:s}=i,n=t.view?t.view:"View",a=C[n];return c(a,g(h({},t),{id:x(t.file),baseURL:s}),e)}function he(i){return l("div",{style:{position:"relative",top:0,height:"100vh"},children:l("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"},children:l(o.exports.Suspense,{fallback:l("div",{children:"Loading..."}),children:l(v,{children:l(y,{path:"/",render:e=>{const{match:{params:{id:t}}}=e,s=i.view?i.view:"SingleView",n=C[s];return l(n,g(h({},i),{id:x(i.patrh)}),t)}},x(i.path))})})})})}const b={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function fe(i){const e=await fetch(i);try{return pe(e),await e.json()}catch(t){return console.error(t),null}}function pe(i){if(!i.ok)throw new Error(`HTTP ${i.status} - ${i.statusText}`);return i}const me=i=>{const[e,t]=o.exports.useState({isLoaded:!1,status:200,routes:[]}),[s,n]=o.exports.useState(""),a=o.exports.useCallback(()=>{t({isLoaded:!0,status:200,routes:S})},[]),r=(f="")=>f.substring(f.lastIndexOf(".")+1),d=window.location.href;return o.exports.useEffect(()=>{const f=new URL(d).searchParams;if(f.has("sampleURL")){const m=f.get("sampleURL");if(!m)return;switch(r(m).toLowerCase()){case"json":{n("multi"),fe(m).then(_=>{if(_){const E=m.replace(/^(?<url>.*[\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),D=JSON.parse(JSON.stringify(_).replace(/\.\/+?/g,E));t({isLoaded:!0,status:200,routes:D,baseURL:E})}else t({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{n("single"),t({isLoaded:!0,status:200,path:m});break}}}else n("multi"),t({isLoaded:!0,status:200,routes:S,baseURL:"./"})},[d]),e.isLoaded?s&&s==="single"?l(he,g(h({},i),{path:e.path})):l(F,{children:l(de,g(h({},i),{routes:e.routes,baseURL:e.baseURL}))}):l("div",{style:b.bodyContainer,children:l("div",{style:h(h({},b.container),e.status===200?b.normal:b.error),children:e.status===200?j("div",{children:[l("p",{style:b.normalHeader,children:"Please wait"}),l("p",{children:"We will redirect you in a minute"})]}):j("div",{children:[l("p",{style:b.errorHeader,children:"404"}),l("p",{children:"Resource not found."}),l("button",{style:b.loadButton,type:"button",onClick:a,children:"Load local samples"})]})})})},ge=o.exports.lazy(()=>p(()=>import("./TestHighlight.4b2c0ccf.js"),["assets/TestHighlight.4b2c0ccf.js","assets/vendor.f5173abd.js","assets/index.8025e0a6.js"]));function ye(){return l(o.exports.Suspense,{fallback:null,children:j(v,{children:[l(y,{path:"/test/highlight",component:ge}),l(y,{render:()=>l("div",{children:"Page not found"})})]})})}U.render(l(J,{children:j(v,{children:[l(y,{path:"/",render:i=>l(me,h({},i))}),l(y,{path:"/test",component:ye})]})}),document.getElementById("root"));
//# sourceMappingURL=index.52c6111d.js.map
