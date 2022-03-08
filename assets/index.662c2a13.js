var P=Object.defineProperty,M=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var R=(i,e,t)=>e in i?P(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,h=(i,e)=>{for(var t in e||(e={}))N.call(e,t)&&R(i,t,e[t]);if(L)for(var t of L(e))O.call(e,t)&&R(i,t,e[t]);return i},y=(i,e)=>M(i,A(e));import{r as o,M as k,S as V,c as u,w as I,j as w,a as c,F as $,E as B,b as C,R as b,d as l,e as v,f as F,H as U}from"./vendor.ff85ee72.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}};q();var T=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/ethylbenzene/full.json",title:"FULL ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Exercises",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"},{file:"./exercises/cytisine/hsqc_hmbc.json",title:"Exercise 3",view:"Exercise"}]},{groupName:"Exam",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"}]}];function J(i=[]){let e=[];for(const t of i)t.children&&Array.isArray(t.children)?e.push(H(t.groupName,[t],[])):e.push(o.exports.createElement(k,h({key:t.title},t),t.title));return e}function H(i,e=[],t=[],s=0){let n=t,a=[];s!==-1&&n[s]&&(n[s]=o.exports.cloneElement(n[s],{},a));for(const r in e)if(e[r].children&&Array.isArray(e[r].children)){const d=o.exports.createElement(V,{key:r+i,title:e[r].groupName});return n.push(d),H(r+i,e[r].children,n,0)}else a.push(o.exports.createElement(k,h({key:r+i},e[r]),e[r].title));return n}function W(i=[]){let e=[];for(const t of i)t.children&&Array.isArray(t.children)?e=e.concat(z([t],[])):e.push(t);return e}function z(i=[],e=[]){let t=e;for(const s of i){if(s.children&&Array.isArray(s.children))return z(s.children,t);e.push(s)}return t}function x(i=""){const e=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(i);let t="";if(e){const s=e[1].split("/");t=s.length>2?s[s.length-2]+s[s.length-1]:s[s.length-1]}return t+i.replace(/\.|\s|\//g,"")}const X=u`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,Q=u`
  width: 260px;
`,K=u`
  width: 3%;
`,G=u`
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
`,Y=u`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,Z=u`
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
`,ee=u`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,te=u`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;function ie(i){const e=o.exports.useMemo(()=>J(i.routes),[i.routes]),t=i.menuIsClosed?"none":"block";return w("div",{css:u(X,i.menuIsClosed?K:Q),children:[w("div",{css:Y,children:[c("div",{style:{display:t,padding:"0.5rem 0.7rem"},children:c("a",{css:u(Z,ee),children:"NMRium"})}),c("button",{type:"button",css:G,onClick:i.onMenuToggle,children:c($,{})})]}),c("div",{css:te,style:{display:t},children:c(B,{onClick:s=>{i.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${(s.item.props.view||"View")+x(s.item.props.file)}`)},mode:"inline",children:e})})]})}var se=I(o.exports.memo(ie));const ne="modulepreload",S={},oe="./",f=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${oe}${s}`,s in S)return;S[s]=!0;const n=s.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":ne,n||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),n)return new Promise((d,p)=>{r.addEventListener("load",d),r.addEventListener("error",p)})})).then(()=>e())},j={Exam:o.exports.memo(o.exports.lazy(()=>f(()=>import("./Exam.c054d9de.js"),["assets/Exam.c054d9de.js","assets/vendor.ff85ee72.js","assets/NMRium.f09dd0d5.js","assets/index.2a8589df.js"]))),Exercise:o.exports.memo(o.exports.lazy(()=>f(()=>import("./Exercise.3083a411.js"),["assets/Exercise.3083a411.js","assets/vendor.ff85ee72.js","assets/NMRium.f09dd0d5.js","assets/index.2a8589df.js"]))),SingleView:o.exports.memo(o.exports.lazy(()=>f(()=>import("./SingleView.9cd3ee26.js"),["assets/SingleView.9cd3ee26.js","assets/vendor.ff85ee72.js","assets/NMRium.f09dd0d5.js","assets/index.2a8589df.js"]))),Test:o.exports.memo(o.exports.lazy(()=>f(()=>import("./Test.6b223afb.js"),["assets/Test.6b223afb.js","assets/vendor.ff85ee72.js","assets/NMRium.f09dd0d5.js","assets/index.2a8589df.js"]))),View:o.exports.memo(o.exports.lazy(()=>f(()=>import("./View.d22afe38.js"),["assets/View.d22afe38.js","assets/vendor.ff85ee72.js","assets/NMRium.f09dd0d5.js","assets/index.2a8589df.js"]))),TwoInstances:o.exports.memo(o.exports.lazy(()=>f(()=>import("./TwoInstances.d23654e5.js"),["assets/TwoInstances.d23654e5.js","assets/NMRium.f09dd0d5.js","assets/vendor.ff85ee72.js","assets/index.2a8589df.js"]))),Teaching:o.exports.memo(o.exports.lazy(()=>f(()=>import("./Teaching.d1cf0f71.js"),["assets/Teaching.d1cf0f71.js","assets/vendor.ff85ee72.js","assets/NMRium.f09dd0d5.js","assets/index.2a8589df.js"])))},re=u`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,le=u`
  width: calc(100% - 260px);
`,ae=u`
  width: 98%;
  margin-left: 20px !important;
`;function ce(i){const{routes:e=[],baseURL:t}=i,s=o.exports.useMemo(()=>W(e),[e]),[n,a]=o.exports.useState(!1),r=o.exports.useCallback(()=>a(!n),[n]);return w("div",{style:{position:"relative",top:0,height:"100vh"},children:[c(se,y(h({},i),{routes:e,menuIsClosed:n,onMenuToggle:r})),c("div",{css:u(re,n?ae:le),children:c(o.exports.StrictMode,{children:c(o.exports.Suspense,{fallback:c("div",{children:"Loading..."}),children:w(C,{children:[s.map(d=>c(b,{path:`/SamplesDashboard/:id/${(d.view||"View")+x(d.file)}`,render:p=>c(de,y(h({},p),{prop:d,baseURL:t}))},x(d.file))),s.length>0&&c(b,{path:"/",render:()=>{const d=s[0],p=d.view?d.view:"View",m=j[p];return c(m,h({},d[0]))}},x(s[0].file))]})})})})]})}function de(i){const{match:{params:{id:e}},prop:t,baseURL:s}=i,n=t.view?t.view:"View",a=j[n];return c(a,y(h({},t),{id:x(t.file),baseURL:s}),e)}function ue(i){return l("div",{style:{position:"relative",top:0,height:"100vh"},children:l("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"},children:l(o.exports.Suspense,{fallback:l("div",{children:"Loading..."}),children:l(C,{children:l(b,{path:"/",render:e=>{const{match:{params:{id:t}}}=e,s=i.view?i.view:"SingleView",n=j[s];return l(n,y(h({},i),{id:x(i.patrh)}),t)}},x(i.path))})})})})}const g={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function he(i){const e=await fetch(i);try{return pe(e),await e.json()}catch(t){return console.error(t),null}}function pe(i){if(!i.ok)throw new Error(`HTTP ${i.status} - ${i.statusText}`);return i}const fe=i=>{const[e,t]=o.exports.useState({isLoaded:!1,status:200,routes:[]}),[s,n]=o.exports.useState(""),a=o.exports.useCallback(()=>{t({isLoaded:!0,status:200,routes:T})},[]),r=(p="")=>p.substring(p.lastIndexOf(".")+1),d=window.location.href;return o.exports.useEffect(()=>{const p=new URL(d).searchParams;if(p.has("sampleURL")){const m=p.get("sampleURL");if(!m)return;switch(r(m).toLowerCase()){case"json":{n("multi"),he(m).then(_=>{if(_){const E=m.replace(/^(?<url>.*[\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),D=JSON.parse(JSON.stringify(_).replace(/\.\/+?/g,E));t({isLoaded:!0,status:200,routes:D,baseURL:E})}else t({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{n("single"),t({isLoaded:!0,status:200,path:m});break}}}else n("multi"),t({isLoaded:!0,status:200,routes:T,baseURL:"./"})},[d]),e.isLoaded?s&&s==="single"?l(ue,y(h({},i),{path:e.path})):l(ce,y(h({},i),{routes:e.routes,baseURL:e.baseURL})):l("div",{style:g.bodyContainer,children:l("div",{style:h(h({},g.container),e.status===200?g.normal:g.error),children:e.status===200?v("div",{children:[l("p",{style:g.normalHeader,children:"Please wait"}),l("p",{children:"We will redirect you in a minute"})]}):v("div",{children:[l("p",{style:g.errorHeader,children:"404"}),l("p",{children:"Resource not found."}),l("button",{style:g.loadButton,type:"button",onClick:a,children:"Load local samples"})]})})})},me=o.exports.lazy(()=>f(()=>import("./TestHighlight.9ee72ae4.js"),["assets/TestHighlight.9ee72ae4.js","assets/vendor.ff85ee72.js","assets/index.2a8589df.js"]));function ye(){return l(o.exports.Suspense,{fallback:null,children:v(C,{children:[l(b,{path:"/test/highlight",component:me}),l(b,{render:()=>l("div",{children:"Page not found"})})]})})}F.render(l(U,{children:v(C,{children:[l(b,{path:"/",render:i=>l(fe,h({},i))}),l(b,{path:"/test",component:ye})]})}),document.getElementById("root"));
//# sourceMappingURL=index.662c2a13.js.map
