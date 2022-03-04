var P=Object.defineProperty,M=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var R=(i,e,t)=>e in i?P(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,h=(i,e)=>{for(var t in e||(e={}))N.call(e,t)&&R(i,t,e[t]);if(L)for(var t of L(e))O.call(e,t)&&R(i,t,e[t]);return i},y=(i,e)=>M(i,A(e));import{r as o,M as k,S as I,c as u,w as V,j as v,a as c,F as $,E as B,b as C,R as b,d as l,e as w,f as F,g as U,H as q}from"./vendor.464d9055.js";const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}};J();var T=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/ethylbenzene/full.json",title:"FULL ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Exercises",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"},{file:"./exercises/cytisine/hsqc_hmbc.json",title:"Exercise 3",view:"Exercise"}]},{groupName:"Exam",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"}]}];function W(i=[]){let e=[];for(const t of i)t.children&&Array.isArray(t.children)?e.push(H(t.groupName,[t],[])):e.push(o.exports.createElement(k,h({key:t.title},t),t.title));return e}function H(i,e=[],t=[],s=0){let n=t,a=[];s!==-1&&n[s]&&(n[s]=o.exports.cloneElement(n[s],{},a));for(const r in e)if(e[r].children&&Array.isArray(e[r].children)){const d=o.exports.createElement(I,{key:r+i,title:e[r].groupName});return n.push(d),H(r+i,e[r].children,n,0)}else a.push(o.exports.createElement(k,h({key:r+i},e[r]),e[r].title));return n}function X(i=[]){let e=[];for(const t of i)t.children&&Array.isArray(t.children)?e=e.concat(z([t],[])):e.push(t);return e}function z(i=[],e=[]){let t=e;for(const s of i){if(s.children&&Array.isArray(s.children))return z(s.children,t);e.push(s)}return t}function x(i=""){const e=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(i);let t="";if(e){const s=e[1].split("/");t=s.length>2?s[s.length-2]+s[s.length-1]:s[s.length-1]}return t+i.replace(/\.|\s|\//g,"")}const Q=u`
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
`;function se(i){const e=o.exports.useMemo(()=>W(i.routes),[i.routes]),t=i.menuIsClosed?"none":"block";return v("div",{css:u(Q,i.menuIsClosed?G:K),children:[v("div",{css:Z,children:[c("div",{style:{display:t,padding:"0.5rem 0.7rem"},children:c("a",{css:u(ee,te),children:"NMRium"})}),c("button",{type:"button",css:Y,onClick:i.onMenuToggle,children:c($,{})})]}),c("div",{css:ie,style:{display:t},children:c(B,{onClick:s=>{i.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${s.item.props.view+x(s.item.props.file)}`)},mode:"inline",children:e})})]})}var ne=V(o.exports.memo(se));const oe="modulepreload",S={},re="./",f=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${re}${s}`,s in S)return;S[s]=!0;const n=s.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":oe,n||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),n)return new Promise((d,p)=>{r.addEventListener("load",d),r.addEventListener("error",p)})})).then(()=>e())},j={Exam:o.exports.memo(o.exports.lazy(()=>f(()=>import("./Exam.f011b5dc.js"),["assets/Exam.f011b5dc.js","assets/vendor.464d9055.js","assets/NMRium.b08675b3.js","assets/index.89e55a67.js"]))),Exercise:o.exports.memo(o.exports.lazy(()=>f(()=>import("./Exercise.05b5c9b6.js"),["assets/Exercise.05b5c9b6.js","assets/vendor.464d9055.js","assets/NMRium.b08675b3.js","assets/index.89e55a67.js"]))),SingleView:o.exports.memo(o.exports.lazy(()=>f(()=>import("./SingleView.1ebacdf0.js"),["assets/SingleView.1ebacdf0.js","assets/vendor.464d9055.js","assets/NMRium.b08675b3.js","assets/index.89e55a67.js"]))),Test:o.exports.memo(o.exports.lazy(()=>f(()=>import("./Test.e5cbc61b.js"),["assets/Test.e5cbc61b.js","assets/vendor.464d9055.js","assets/NMRium.b08675b3.js","assets/index.89e55a67.js"]))),View:o.exports.memo(o.exports.lazy(()=>f(()=>import("./View.33c41098.js"),["assets/View.33c41098.js","assets/vendor.464d9055.js","assets/NMRium.b08675b3.js","assets/index.89e55a67.js"]))),TwoInstances:o.exports.memo(o.exports.lazy(()=>f(()=>import("./TwoInstances.3e615a0d.js"),["assets/TwoInstances.3e615a0d.js","assets/NMRium.b08675b3.js","assets/vendor.464d9055.js","assets/index.89e55a67.js"]))),Teaching:o.exports.memo(o.exports.lazy(()=>f(()=>import("./Teaching.1cf2f5f1.js"),["assets/Teaching.1cf2f5f1.js","assets/vendor.464d9055.js","assets/NMRium.b08675b3.js","assets/index.89e55a67.js"])))},le=u`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,ae=u`
  width: calc(100% - 260px);
`,ce=u`
  width: 98%;
  margin-left: 20px !important;
`;function de(i){const{routes:e=[],baseURL:t}=i,s=o.exports.useMemo(()=>X(e),[e]),[n,a]=o.exports.useState(!1),r=o.exports.useCallback(()=>a(!n),[n]);return v("div",{style:{position:"relative",top:0,height:"100vh"},children:[c(ne,y(h({},i),{routes:e,menuIsClosed:n,onMenuToggle:r})),c("div",{css:u(le,n?ce:ae),children:c(o.exports.StrictMode,{children:c(o.exports.Suspense,{fallback:c("div",{children:"Loading..."}),children:v(C,{children:[s.map(d=>c(b,{path:`/SamplesDashboard/:id/${d.view+x(d.file)}`,render:p=>c(ue,y(h({},p),{prop:d,baseURL:t}))},x(d.file))),s.length>0&&c(b,{path:"/",render:()=>{const d=s[0],p=d.view?d.view:"View",m=j[p];return c(m,h({},d[0]))}},x(s[0].file))]})})})})]})}function ue(i){const{match:{params:{id:e}},prop:t,baseURL:s}=i,n=t.view?t.view:"View",a=j[n];return c(a,y(h({},t),{id:x(t.file),baseURL:s}),e)}function he(i){return l("div",{style:{position:"relative",top:0,height:"100vh"},children:l("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"},children:l(o.exports.Suspense,{fallback:l("div",{children:"Loading..."}),children:l(C,{children:l(b,{path:"/",render:e=>{const{match:{params:{id:t}}}=e,s=i.view?i.view:"SingleView",n=j[s];return l(n,y(h({},i),{id:x(i.patrh)}),t)}},x(i.path))})})})})}const g={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function pe(i){const e=await fetch(i);try{return fe(e),await e.json()}catch(t){return console.error(t),null}}function fe(i){if(!i.ok)throw new Error(`HTTP ${i.status} - ${i.statusText}`);return i}const me=i=>{const[e,t]=o.exports.useState({isLoaded:!1,status:200,routes:[]}),[s,n]=o.exports.useState(""),a=o.exports.useCallback(()=>{t({isLoaded:!0,status:200,routes:T})},[]),r=(p="")=>p.substring(p.lastIndexOf(".")+1),d=window.location.href;return o.exports.useEffect(()=>{const p=new URL(d).searchParams;if(p.has("sampleURL")){const m=p.get("sampleURL");if(!m)return;switch(r(m).toLowerCase()){case"json":{n("multi"),pe(m).then(_=>{if(_){const E=m.replace(/^(?<url>.*[\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),D=JSON.parse(JSON.stringify(_).replace(/\.\/+?/g,E));t({isLoaded:!0,status:200,routes:D,baseURL:E})}else t({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{n("single"),t({isLoaded:!0,status:200,path:m});break}}}else n("multi"),t({isLoaded:!0,status:200,routes:T,baseURL:"./"})},[d]),e.isLoaded?s&&s==="single"?l(he,y(h({},i),{path:e.path})):l(F,{children:l(de,y(h({},i),{routes:e.routes,baseURL:e.baseURL}))}):l("div",{style:g.bodyContainer,children:l("div",{style:h(h({},g.container),e.status===200?g.normal:g.error),children:e.status===200?w("div",{children:[l("p",{style:g.normalHeader,children:"Please wait"}),l("p",{children:"We will redirect you in a minute"})]}):w("div",{children:[l("p",{style:g.errorHeader,children:"404"}),l("p",{children:"Resource not found."}),l("button",{style:g.loadButton,type:"button",onClick:a,children:"Load local samples"})]})})})},ye=o.exports.lazy(()=>f(()=>import("./TestHighlight.d0496108.js"),["assets/TestHighlight.d0496108.js","assets/vendor.464d9055.js","assets/index.89e55a67.js"]));function ge(){return l(o.exports.Suspense,{fallback:null,children:w(C,{children:[l(b,{path:"/test/highlight",component:ye}),l(b,{render:()=>l("div",{children:"Page not found"})})]})})}U.render(l(q,{children:w(C,{children:[l(b,{path:"/",render:i=>l(me,h({},i))}),l(b,{path:"/test",component:ge})]})}),document.getElementById("root"));
//# sourceMappingURL=index.92a5f4af.js.map
