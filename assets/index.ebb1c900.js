var jd=Object.defineProperty,Bd=Object.defineProperties;var Xd=Object.getOwnPropertyDescriptors;var mo=Object.getOwnPropertySymbols;var rr=Object.prototype.hasOwnProperty,lr=Object.prototype.propertyIsEnumerable;var ir=(e,t,n)=>t in e?jd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))rr.call(t,n)&&ir(e,n,t[n]);if(mo)for(var n of mo(t))lr.call(t,n)&&ir(e,n,t[n]);return e},S=(e,t)=>Bd(e,Xd(t));var ar=e=>typeof e=="symbol"?e:e+"",G=(e,t)=>{var n={};for(var o in e)rr.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&mo)for(var o of mo(e))t.indexOf(o)<0&&lr.call(e,o)&&(n[o]=e[o]);return n};import{r as c,M as El,S as Yd,c as M,w as Gd,j as w,a as d,F as Wd,E as Zd,b as Uo,R as gt,d as f,e as F,x as qn,f as Al,g as Ko,m as Tl,h as Ud,i as Kd,k as _s,l as qd,n as Jd,o as To,p as cr,z as Qd,q as ep,s as Dl,t as ur,u as cn,v as Cn,y as Rl,A as tp,B as Ze,C as np,D as op,G as sp,H as ip,I as Pl,J as rp,K as lp,L as ap,N as Fs,O as cp,P as up,Q as Bt,T as dp,U as pp,V as hp,W as fp,X as mp,Y as gp,Z as dr,_ as pn,$ as xp,a0 as bp,a1 as Je,a2 as xt,a3 as oe,a4 as Ve,a5 as yp,a6 as Jn,a7 as Il,a8 as pr,a9 as Nl,aa as vp,ab as V,ac as Qs,ad as Cp,ae as Ml,af as Ls,ag as ei,ah as Do,ai as je,aj as kp,ak as Sp,al as _l,am as ti,an as ni,ao as et,ap as wp,aq as qo,ar as Fl,as as oi,at as Ep,au as Ap,av as hn,aw as qe,ax as hr,ay as $e,az as Tp,aA as Dp,aB as Rp,aC as Pp,aD as pe,aE as Ip,aF as fr,aG as fn,aH as Np,aI as Mp,aJ as St,aK as _p,aL as Fp,aM as Lp,aN as Vn,aO as Ll,aP as Op,aQ as $p,aR as Hp,aS as ee,aT as ae,aU as zp,aV as Ol,aW as $l,aX as Hl,aY as Vp,aZ as jp,a_ as Bp,a$ as un,b0 as Mn,b1 as Jo,b2 as Xp,b3 as kn,b4 as zl,b5 as si,b6 as Vl,b7 as jl,b8 as Yp,b9 as Gp,ba as Wp,bb as Zp,bc as Up,bd as Bl,be as Kp,bf as qp,bg as Xl,bh as Jp,bi as Os,bj as Qp,bk as Qn,bl as Yl,bm as Qo,bn as Gl,bo as eh,bp as wo,bq as th,br as nh,bs as oh,bt as Wl,bu as sh,bv as ih,bw as rh,bx as Zl,by as lh,bz as Ro,bA as ah,bB as Pe,bC as _n,bD as es,bE as Ul,bF as ch,bG as uh,bH as rt,bI as dh,bJ as ph,bK as hh,bL as fh,bM as mh,bN as gh,bO as xh,bP as bh,bQ as yh,bR as vh,bS as Ch,bT as Kl,bU as mr,bV as kh,bW as Sh,bX as Se,bY as wh,bZ as Eh,b_ as Ah,b$ as Th,c0 as Dh,c1 as Rh,c2 as Ph,c3 as Ih,c4 as Nh,c5 as Mh,c6 as _h,c7 as Fh,c8 as Cs,c9 as ks,ca as Lh,cb as Oh,cc as $h,cd as gr,ce as Hh,cf as zh,cg as Vh,ch as jh,ci as Bh,cj as Xh,ck as Yh,cl as Gh,cm as Wh,cn as Zh,co as Uh,cp as Kh}from"./vendor.6bb543ed.js";const qh=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};qh();var xr=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/ethylbenzene/full.json",title:"FULL ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Workspaces",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"},{file:"./exercises/cytisine/hsqc_hmbc.json",title:"Exercise 3",view:"Exercise"},{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"},{title:"Prediction",view:"Prediction"}]},{title:"Test",view:"Test"}];function Jh(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t.push(ql(n.groupName,[n],[])):t.push(c.exports.createElement(El,b({key:n.title},n),n.title));return t}function ql(e,t=[],n=[],o=0){let s=n,i=[];o!==-1&&s[o]&&(s[o]=c.exports.cloneElement(s[o],{},i));for(const r in t)if(t[r].children&&Array.isArray(t[r].children)){const l=c.exports.createElement(Yd,{key:r+e,title:t[r].groupName});return s.push(l),ql(r+e,t[r].children,s,0)}else i.push(c.exports.createElement(El,b({key:r+e},t[r]),t[r].title));return s}function Qh(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t=t.concat(Jl([n],[])):t.push(n);return t}function Jl(e=[],t=[]){let n=t;for(const o of e){if(o.children&&Array.isArray(o.children))return Jl(o.children,n);t.push(o)}return n}function Ft(e=""){const t=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(e);let n="";if(t){const o=t[1].split("/");n=o.length>2?o[o.length-2]+o[o.length-1]:o[o.length-1]}return n+e.replace(/\.|\s|\//g,"")}const ef=M`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,tf=M`
  width: 260px;
`,nf=M`
  width: 3%;
`,of=M`
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
`,sf=M`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,rf=M`
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
`,lf=M`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,af=M`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;function cf(e){const t=c.exports.useMemo(()=>Jh(e.routes),[e.routes]),n=e.menuIsClosed?"none":"block";return w("div",{css:M(ef,e.menuIsClosed?nf:tf),children:[w("div",{css:sf,children:[d("div",{style:{display:n,padding:"0.5rem 0.7rem"},children:d("a",{css:M(rf,lf),children:"NMRium"})}),d("button",{type:"button",css:of,onClick:e.onMenuToggle,children:d(Wd,{})})]}),d("div",{css:af,style:{display:n},children:d(Zd,{onClick:o=>{e.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${(o.item.props.view||"View")+Ft(o.item.props.file)}`)},mode:"inline",children:t})})]})}var uf=Gd(c.exports.memo(cf));const df="modulepreload",br={},pf="./",it=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${pf}${o}`,o in br)return;br[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":df,s||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),s)return new Promise((l,a)=>{r.addEventListener("load",l),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},ii={Exam:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Exam.05f3d7e1.js"),["assets/Exam.05f3d7e1.js","assets/vendor.6bb543ed.js"]))),Exercise:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Exercise.7f94ce26.js"),["assets/Exercise.7f94ce26.js","assets/vendor.6bb543ed.js"]))),SingleView:c.exports.memo(c.exports.lazy(()=>it(()=>import("./SingleView.f5e09f3a.js"),["assets/SingleView.f5e09f3a.js","assets/vendor.6bb543ed.js"]))),Test:c.exports.memo(c.exports.lazy(()=>it(()=>Promise.resolve().then(function(){return _T}),void 0))),View:c.exports.memo(c.exports.lazy(()=>it(()=>import("./View.0ba61df7.js"),["assets/View.0ba61df7.js","assets/vendor.6bb543ed.js"]))),TwoInstances:c.exports.memo(c.exports.lazy(()=>it(()=>import("./TwoInstances.90e61024.js"),["assets/TwoInstances.90e61024.js","assets/vendor.6bb543ed.js"]))),Teaching:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Teaching.5da83938.js"),["assets/Teaching.5da83938.js","assets/vendor.6bb543ed.js"]))),Prediction:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Prediction.3c4605aa.js"),["assets/Prediction.3c4605aa.js","assets/View.0ba61df7.js","assets/vendor.6bb543ed.js"])))},hf=M`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,ff=M`
  width: calc(100% - 260px);
`,mf=M`
  width: 98%;
  margin-left: 20px !important;
`;function gf(e){const{routes:t=[],baseURL:n}=e,o=c.exports.useMemo(()=>Qh(t),[t]),[s,i]=c.exports.useState(!1),r=c.exports.useCallback(()=>i(!s),[s]);return w("div",{style:{position:"relative",top:0,height:"100vh"},children:[d(uf,S(b({},e),{routes:t,menuIsClosed:s,onMenuToggle:r})),d("div",{css:M(hf,s?mf:ff),children:d(c.exports.StrictMode,{children:d(c.exports.Suspense,{fallback:d("div",{children:"Loading..."}),children:w(Uo,{children:[o.map(l=>d(gt,{path:`/SamplesDashboard/:id/${(l.view||"View")+Ft(l.file)}`,render:a=>d(xf,S(b({},a),{prop:l,baseURL:n}))},Ft(l.file))),o.length>0&&d(gt,{path:"/",render:()=>{const l=o[0],a=l.view?l.view:"View",u=ii[a];return d(u,b({},l[0]))}},Ft(o[0].file))]})})})})]})}function xf(e){const{match:{params:{id:t}},prop:n,baseURL:o}=e,s=n.view?n.view:"View",i=ii[s];return d(i,S(b({},n),{id:Ft(n.file),baseURL:o}),t)}function bf(e){return f("div",{style:{position:"relative",top:0,height:"100vh"},children:f("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"},children:f(c.exports.Suspense,{fallback:f("div",{children:"Loading..."}),children:f(Uo,{children:f(gt,{path:"/",render:t=>{const{match:{params:{id:n}}}=t,o=e.view?e.view:"SingleView",s=ii[o];return f(s,S(b({},e),{id:Ft(e.patrh)}),n)}},Ft(e.path))})})})})}const Rt={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function yf(e){const t=await fetch(e);try{return vf(t),await t.json()}catch(n){return console.error(n),null}}function vf(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}const Cf=e=>{const[t,n]=c.exports.useState({isLoaded:!1,status:200,routes:[]}),[o,s]=c.exports.useState(""),i=c.exports.useCallback(()=>{n({isLoaded:!0,status:200,routes:xr})},[]),r=(a="")=>a.substring(a.lastIndexOf(".")+1),l=window.location.href;return c.exports.useEffect(()=>{const a=new URL(l).searchParams;if(a.has("sampleURL")){const u=a.get("sampleURL");if(!u)return;switch(r(u).toLowerCase()){case"json":{s("multi"),yf(u).then(h=>{if(h){const m=u.replace(/^(?<url>.*[\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),g=JSON.parse(JSON.stringify(h).replace(/\.\/+?/g,m));n({isLoaded:!0,status:200,routes:g,baseURL:m})}else n({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{s("single"),n({isLoaded:!0,status:200,path:u});break}}}else s("multi"),n({isLoaded:!0,status:200,routes:xr,baseURL:"./"})},[l]),t.isLoaded?o&&o==="single"?f(bf,S(b({},e),{path:t.path})):f(gf,S(b({},e),{routes:t.routes,baseURL:t.baseURL})):f("div",{style:Rt.bodyContainer,children:f("div",{style:b(b({},Rt.container),t.status===200?Rt.normal:Rt.error),children:t.status===200?F("div",{children:[f("p",{style:Rt.normalHeader,children:"Please wait"}),f("p",{children:"We will redirect you in a minute"})]}):F("div",{children:[f("p",{style:Rt.errorHeader,children:"404"}),f("p",{children:"Resource not found."}),f("button",{style:Rt.loadButton,type:"button",onClick:i,children:"Load local samples"})]})})})};function Xt(e){const t=["Alt","AltGraph","CapsLock","Control","Meta","NumLocK","ScrollLock","Shift","OS"];for(const n of t)if(e.getModifierState(n))return!0;return!1}const Po=2048;function kf(e,t,n,o,s){const{fromIndex:i,toIndex:r}=qn(e,{from:n,to:o});if(r-i<=Po){const l={x:e.subarray(i,r),y:t.subarray(i,r)},a=Al(l,{frequency:s,takeBestPartMultiplet:!0,symmetrizeEachStep:!0});return a&&a.chemShift===void 0?void 0:{multiplicity:a.js.map(u=>u.multiplicity).join(""),kind:"signal",delta:a.chemShift,js:a.js}}else throw new Error(`length of signal should not exceed ${Po} points`)}const Ql={step:"initial",brush:{start:null,end:null},startX:0,endX:0,startY:0,endY:0},wt=c.exports.createContext(Ql);function ea({children:e,className:t,style:n,onBrush:o=()=>null,onZoom:s=()=>null,onDoubleClick:i=()=>null,onClick:r=()=>null,noPropagation:l}){const[a,u]=c.exports.useReducer(Sf,Ql),[p,h]=c.exports.useState(0),m=c.exports.useRef([]),g=c.exports.useCallback(C=>(C.button===0&&(l&&C.stopPropagation(),u({type:"DOWN",shiftKey:C.shiftKey,altKey:C.altKey,screenX:C.screenX,screenY:C.screenY,clientX:C.clientX,clientY:C.clientY,boundingRect:C.currentTarget.getBoundingClientRect()}),h(C.timeStamp)),!1),[l]),x=c.exports.useCallback(C=>{C.persist();const E=C.timeStamp,T=C.currentTarget.getBoundingClientRect(),N=C.clientX-T.x,D=C.clientY-T.y,R=Ko(()=>{E-p<=150&&m.current.length===1&&r(S(b({},C),{x:N,y:D})),m.current=[]},200);m.current.push(R),R(),m.current.length>1&&(Tl(m.current,A=>A.cancel()),m.current=[],i(S(b({},C),{x:N,y:D})))},[p,r,i]),y=c.exports.useCallback(C=>{const E=C.currentTarget.getBoundingClientRect(),T=C.clientX-E.x,N=C.clientY-E.y,{deltaY:D,deltaX:R,shiftKey:A,deltaMode:P}=C;s({deltaY:D||R,shiftKey:A,deltaMode:P,x:T,y:N})},[s]);c.exports.useEffect(()=>{const{step:C,startX:E,endX:T,startY:N,endY:D}=a;C==="end"&&Math.hypot(T-E,D-N)>5&&(o(a),u({type:"DONE"}))},[o,a]);const k=c.exports.useCallback(C=>{u({type:"MOVE",screenX:C.screenX,screenY:C.screenY,clientX:C.clientX,clientY:C.clientY})},[]),v=c.exports.useCallback(C=>(u({type:"UP",clientX:C.clientX,clientY:C.clientY}),!1),[]);return f(wt.Provider,{value:a,children:f("div",{className:t,style:n,onMouseDown:g,onMouseUp:v,onMouseMove:k,onClick:x,onWheel:y,children:e})})}function Sf(e,t){switch(t.type){case"UP":if(e.step==="brushing"||e.step==="start"){const{clientX:n,clientY:o}=t;return S(b({},e),{endX:n-e.boundingRect.x,endY:o-e.boundingRect.y,step:e.step==="start"?"initial":"end"})}return e;case"DOWN":if(e.step==="initial"||e.step==="end"){const{screenX:n,screenY:o,clientX:s,clientY:i,boundingRect:r,shiftKey:l,altKey:a}=t,u=s-r.x,p=i-r.y;return S(b({},e),{shiftKey:l,altKey:a,startX:u,startY:p,startScreenX:n,startScreenY:o,startClientX:s,startClientY:i,boundingRect:r,step:"start"})}return e;case"MOVE":if(e.step==="start"||e.step==="brushing"){const{clientX:n,clientY:o}=t;return S(b({},e),{step:"brushing",endX:n-e.boundingRect.x,endY:o-e.boundingRect.y})}return e;case"DONE":if(e.step==="end")return S(b({},e),{step:"initial"});break;default:return e}}const ut=c.exports.createContext({}),wf=ut.Provider;function Ef(){return c.exports.useContext(ut)}function ta({children:e,className:t,style:n,noPropagation:o}){const[s,i]=c.exports.useState(null),r=c.exports.useCallback(a=>{const u=a.currentTarget.getBoundingClientRect(),p=a.clientX-u.x,h=a.clientY-u.y;i({x:p,y:h}),o&&a.stopPropagation()},[o]),l=c.exports.useCallback(a=>{i(null),o&&a.stopPropagation()},[o]);return f(wf,{value:s,children:f("div",{className:t,style:n,onMouseMove:r,onMouseLeave:l,children:e})})}const ri=[{key:"signal",label:"Signal",value:"signal"},{key:"reference",label:"Reference",value:"reference"},{key:"solvent",label:"Solvent",value:"solvent"},{key:"impurity",label:"Impurity",value:"impurity"},{key:"standard",label:"Standard",value:"standard"},{key:"p1",label:"P1",value:"p1"},{key:"p2",label:"P2",value:"p2"},{key:"p3",label:"P3",value:"p3"}],eo=["signal"],Ue={signal:"signal",mixed:"mixed"},na="absolute",Af="Absolute";function Tf(e){if(!oa(e))throw new Error("absolute not applicable on this data");e.data.re=Ud(e.data),e.data.im=new Float64Array(0),e.info=S(b({},e.info),{isComplex:!1})}function oa(e){return!!(e.info.isComplex&&!e.info.isFid)}function Df(){return{once:!1,reduce:null}}var Rf=Object.freeze(Object.defineProperty({__proto__:null,id:na,name:Af,apply:Tf,isApplicable:oa,reduce:Df},Symbol.toStringTag,{value:"Module"}));const Pf="autoPhaseCorrection",If="Automatic phase correction",Nf={minRegSize:5,maxDistanceToJoin:128,magnitudeMode:!0,factorNoise:5};function sa(e,t={}){if(!ia(e))throw new Error("phaseCorrection not applicable on this data");return Kd(e.data,b(b({},Nf),t))}function ia(e){return!!(e.info.isComplex&&!e.info.isFid)}function Mf(e,t){let n=Object.assign({},e);for(const o in n)n[o]+=t[o];return{once:!0,reduce:n}}var _f=Object.freeze(Object.defineProperty({__proto__:null,id:Pf,name:If,apply:sa,isApplicable:ia,reduce:Mf},Symbol.toStringTag,{value:"Module"}));const ra="baselineCorrection",Ff="Baseline correction",$s={airpls:"airPLS",polynomial:"Polynomial"};function Lf(e,t={}){if(!li(e))throw new Error("baselineCorrection not applicable on this data");const{algorithm:n,zones:o=[]}=t;let{x:s,re:i}=e.data,r;switch(n){case"airpls":r=Jd(s,i,t).corrected;break;case"polynomial":{const l={regressionOptions:t.degree};let a=_s({x:s,y:i},{numberOfPoints:4096,zones:o}),u=qd(a.x,a.y,l),{regression:p}=u;r=new Float64Array(s.length);for(let h=0;h<i.length;h++)r[h]=i[h]-p.predict(s[h])}break;default:throw new Error(`baselineCorrection: algorithm unknown: ${n}`)}Object.assign(e.data,{re:r})}function li(e){return!e.info.isFid}function Of(){return{once:!1,reduce:null}}var $f=Object.freeze(Object.defineProperty({__proto__:null,id:ra,name:Ff,baselineAlgorithms:$s,apply:Lf,isApplicable:li,reduce:Of},Symbol.toStringTag,{value:"Module"}));const Hs="centerMean",la="Center Mean";function Hf(e){var i;if(!aa(e))throw new Error("Center Mean is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=To.mean(t),s=To.mean(n||[]);for(let r=0;r<t.length;r++)t[r]-=o,n&&(n[r]-=s);e.data.re=t,n&&(e.data.im=n)}function aa(e){return!!(e.info.isComplex&&!e.info.isFid)}function zf(){return{once:!1,reduce:null}}var Vf=Object.freeze(Object.defineProperty({__proto__:null,id:Hs,name:la,apply:Hf,isApplicable:aa,reduce:zf},Symbol.toStringTag,{value:"Module"}));const zs="digitalFilter",jf="Digital Filter";function Bf(e,t={}){if(!ca(e))throw new Error("Digital Filter is not applicable on this data");let{digitalFilterValue:n=0}=t,o=new Float64Array(e.data.re),s=new Float64Array(e.data.im),i=Math.floor(n);const r=0;i+=0;const l=new Float64Array(o.length),a=new Float64Array(s.length);l.set(o.slice(i)),l.set(o.slice(r,i),o.length-i),a.set(s.slice(i)),a.set(s.slice(r,i),s.length-i),e.data.re=l,e.data.im=a}function ca(e){return!!(e.info.isComplex&&e.info.isFid)}function Xf(){return{once:!0,reduce:void 0}}var Yf=Object.freeze(Object.defineProperty({__proto__:null,id:zs,name:jf,apply:Bf,isApplicable:ca,reduce:Xf},Symbol.toStringTag,{value:"Module"}));const Yn="equallySpaced",ua="Equally Spaced";function Gf(e,t={}){if(!da(e))throw new Error("Equally Spaced is not applicable on this data");const{from:n,to:o,numberOfPoints:s,exclusions:i}=t,{x:r,re:l,im:a}=e.data,u=_s({x:r,y:l},{from:n,to:o,numberOfPoints:s,exclusions:i});if(e.data.x=u.x,e.data.re=u.y,a){const p=_s({x:r,y:l},{from:n,to:o,numberOfPoints:s,exclusions:i});e.data.im=p.y}}function da(e){return!!(e.info.isComplex&&!e.info.isFid)}function Wf(){return{once:!1,reduce:null}}var Zf=Object.freeze(Object.defineProperty({__proto__:null,id:Yn,name:ua,apply:Gf,isApplicable:da,reduce:Wf},Symbol.toStringTag,{value:"Module"}));const to="exclusionZones",Uf="Exclusion Zones";function Kf(e,t=[]){if(!pa(e))throw new Error("Exclusion Zones filter not applicable on this data");const{x:n,re:o,im:s}=e.data;e.data.re=cr({x:n,y:o},{zones:t}).y,e.data.im=s&&cr({x:n,y:o},{zones:t})}function pa(e){return!!(e.info.isComplex&&e.info.isFt)}function qf(e,t){return{once:!0,reduce:Qd(e.concat(t))}}var Jf=Object.freeze(Object.defineProperty({__proto__:null,id:to,name:Uf,apply:Kf,isApplicable:pa,reduce:qf},Symbol.toStringTag,{value:"Module"}));const ha="fft",Qf="FFT";function em(e){if(!ai(e))throw new Error("fft not applicable on this data");let t=e.filters.some(n=>n.name==="digitalFilter"&&n.flag);if(Object.assign(e.data,ep(e.data,{applyZeroShift:!0})),t){let{digitalFilter:n}=e.info,o=(n-Math.floor(n))*Math.PI*2;Object.assign(e.data,Dl(e.data,0,o))}e.data.x=nm(e),e.info=S(b({},e.info),{isFid:!1,isFt:!0})}function ai(e){return!!(e.info.isComplex&&e.info.isFid)}function tm(){return{once:!0,reduce:void 0}}function nm(e){const t=e.info,n=parseFloat(t.baseFrequency),o=parseFloat(t.frequencyOffset),s=parseFloat(t.spectralWidth),i=o/n;let r=.5*s,l=e.data.x.length,a=i-r,u=s/(l-1);const p=new Array(l);for(let h=0;h<l;h++)p[h]=a,a+=u;return p}var om=Object.freeze(Object.defineProperty({__proto__:null,id:ha,name:Qf,apply:em,isApplicable:ai,reduce:tm},Symbol.toStringTag,{value:"Module"}));const Io="fromTo",fa="From/To";function sm(e,t={}){if(!ma(e))throw new Error("From/To filter not applicable on this data");const{x:n,re:o,im:s}=e.data,{from:i,to:r}=t,{fromIndex:l,toIndex:a}=qn(n,{from:i,to:r});e.data.x=n.slice(l,a),e.data.re=o.slice(l,a),s&&(e.data.im=s.slice(l,a))}function ma(e){return!!(e.info.isComplex&&!e.info.isFid)}function im(e,t){return{once:!0,reduce:t}}var rm=Object.freeze(Object.defineProperty({__proto__:null,id:Io,name:fa,apply:sm,isApplicable:ma,reduce:im},Symbol.toStringTag,{value:"Module"}));const ga="lineBroadening",lm="Line broadening";function am(e,t){if(!xa(e))throw new Error("lineBroadening not applicable on this data");let n=e.info.digitalFilter,o;n>0?o=Math.floor(n):o=0;const s=e.data.re,i=e.data.im,r=e.data.x,l=s.length,a=new Float64Array(l),u=new Float64Array(l),p=(r[l-1]-r[0])/(l-1),h=-t*Math.exp(1),m=Math.exp(h*p);let g=Math.exp(h*r[0]);for(let x=0;x<l-o;x++)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;g=Math.exp(h*r[0]);for(let x=l;x>l-o;x--)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;e.data=S(b({},e.data),{re:a,im:u})}function xa(e){return!!(e.info.isComplex&&e.info.isFid)}function cm(e,t){return{once:!0,reduce:e+t}}var um=Object.freeze(Object.defineProperty({__proto__:null,id:ga,name:lm,apply:am,isApplicable:xa,reduce:cm},Symbol.toStringTag,{value:"Module"}));const Vs="pareto",ba="Pareto";function dm(e){var o;if(!ya(e))throw new Error("Pareto is not applicable on this data");const t=e.data.re.slice(0),n=(o=e.data.im)==null?void 0:o.slice(0);e.data.re=ur(t),n&&(e.data.im=ur(n))}function ya(e){return!!(e.info.isComplex&&!e.info.isFid)}function pm(){return{once:!1,reduce:null}}var hm=Object.freeze(Object.defineProperty({__proto__:null,id:Vs,name:ba,apply:dm,isApplicable:ya,reduce:pm},Symbol.toStringTag,{value:"Module"}));const Ht="phaseCorrection",va="Phase correction";function Ca(e,t={}){if(!ci(e))throw new Error("phaseCorrection not applicable on this data");let{ph0:n,ph1:o}=t;n*=Math.PI/180,o*=Math.PI/180,Object.assign(e.data,Dl(e.data,n,o))}function ci(e){return!!(e.info.isComplex&&!e.info.isFid)}function fm(e,t){return{once:!0,reduce:t}}var mm=Object.freeze(Object.defineProperty({__proto__:null,id:Ht,name:va,apply:Ca,isApplicable:ci,reduce:fm},Symbol.toStringTag,{value:"Module"}));const no="shiftX",gm="Shift X";function xm(e,t=0){e.data.x=e.data.x.map(n=>n+t)}function bm(){return!0}function ym(e,t){return{once:!0,reduce:e+t}}var vm=Object.freeze(Object.defineProperty({__proto__:null,id:no,name:gm,apply:xm,isApplicable:bm,reduce:ym},Symbol.toStringTag,{value:"Module"}));const js="standardDeviation",ka="Standard Deviation";function Cm(e){var i;if(!Sa(e))throw new Error("Standard Deviation is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=To.standardDeviation(t),s=To.standardDeviation(n||[]);for(let r=0;r<t.length;r++)t[r]/=o,n&&(n[r]/=s);e.data.re=t,n&&(e.data.im=n)}function Sa(e){return!!(e.info.isComplex&&!e.info.isFid)}function km(){return{once:!1,reduce:null}}var Sm=Object.freeze(Object.defineProperty({__proto__:null,id:js,name:ka,apply:Cm,isApplicable:Sa,reduce:km},Symbol.toStringTag,{value:"Module"}));const ui="zeroFilling",wa="Zero Filling";function wm(e,t){if(!di(e))throw new Error("zeroFilling not applicable on this data");let n=e.filters.some(x=>x.name==="digitalFilter"&&x.flag),o=e.info.digitalFilter,s;o>0&&n?s=Math.floor(o):s=0;const{re:i,im:r,x:l}=e.data;let a=new Float64Array(t),u=new Float64Array(t),p=new Float64Array(t);const h=Math.min(t,i.length);a.set(i.slice(0,h-s)),u.set(r.slice(0,h-s)),p.set(l.slice(0,h-s));let m=l[1]-l[0],g=l[h-s-1];for(let x=h-s;x<t;x++)g+=m,p[x]=g;s>0&&s<t&&(a.set(i.slice(i.length-s),t-s),u.set(r.slice(i.length-s),t-s)),e.data=S(b({},e.data),{re:a,im:u,x:p})}function di(e){return!!(e.info.isComplex&&e.info.isFid)}function Em(e,t){return{once:!0,reduce:t}}var Am=Object.freeze(Object.defineProperty({__proto__:null,id:ui,name:wa,apply:wm,isApplicable:di,reduce:Em},Symbol.toStringTag,{value:"Module"}));const pi="shift2DX",Tm="Shift 2D X";function Dm(e,t=0){e.data.minX+=t,e.data.maxX+=t}function Rm(){return!0}function Pm(e,t){return{once:!0,reduce:e+t}}var Im=Object.freeze(Object.defineProperty({__proto__:null,id:pi,name:Tm,apply:Dm,isApplicable:Rm,reduce:Pm},Symbol.toStringTag,{value:"Module"}));const hi="shift2DY",Nm="Shift 2D Y";function Mm(e,t=0){e.data.minY+=t,e.data.maxY+=t}function _m(){return!0}function Fm(e,t){return{once:!0,reduce:e+t}}var Lm=Object.freeze(Object.defineProperty({__proto__:null,id:hi,name:Nm,apply:Mm,isApplicable:_m,reduce:Fm},Symbol.toStringTag,{value:"Module"})),sn=Object.freeze(Object.defineProperty({__proto__:null,absolute:Rf,baselineCorrection:$f,lineBroadening:um,fft:om,phaseCorrection:mm,autoPhaseCorrection:_f,shiftX:vm,zeroFilling:Am,digitalFilter:Yf,fromTo:rm,equallySpaced:Zf,standardDeviation:Sm,centerMean:Vf,pareto:hm,exclusionZones:Jf,shift2DX:Im,shift2DY:Lm},Symbol.toStringTag,{value:"Module"}));const Om="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",$m=8;function U(){let e="";for(let t=0;t<$m;t++)e+=Om.charAt(Math.floor(Math.random()*62));return e}function Ae(e,t=[]){let n=!1;for(let o of t){const s={name:o.name,label:sn[o.name].name,value:o.options},i=zm(e,o.name);if(i){const r=sn[o.name].reduce(i.value,s.value);r.once?(n||(n=!0),r.reduce!=null&&r.reduce!==void 0&&Vm(e,i.id,r.reduce)):yr(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}else yr(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}if(n)t.length===1&&Hm(e,t[0].name)?sn[t[0].name].apply(e,t[0].options):mn(e);else for(let o of t)sn[o.name].apply(e,o.options)}function Hm(e,t){const n=e.filters.findIndex(o=>o.name===t);return e.filters.length===n+1}function zm(e,t){return e.filters.find(n=>n.name===t)}function mn(e,t=null){const n=t||e.filters;Ea(e,null,null,n)}function Ea(e,t,n,o=null){e.filters=e.filters.slice(0),t&&(e.filters=e.filters.map(i=>S(b({},i),{flag:i.id===t?n:i.flag}),[])),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);const s=o||e.filters;for(let i in s){const r=e.filters[i];if(e.filters[i]=S(b({},e.filters[i]),{error:null}),r.flag)try{sn[r.name].apply(e,r.value)}catch(l){e.filters[i]=S(b({},e.filters[i]),{error:l.message})}}}function fi(e,t){e.filters=e.filters.slice(0),e.filters=e.filters.filter(n=>n.id!==t),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);for(let n in e.filters){const o=e.filters[n];if(e.filters[n]=S(b({},e.filters[n]),{error:null}),o.flag)try{sn[o.name].apply(e,o.value)}catch(s){e.filters[n]=S(b({},e.filters[n]),{error:s.message})}}}function yr(e,t,n=!0){const o=U();e.filters=e.filters.slice(0),delete t.isSnapshot,e.filters.push(S(b({},t),{id:o,flag:!0,isDeleteAllow:n}))}function Vm(e,t,n){e.filters=e.filters.slice(0);const o=e.filters.findIndex(s=>s.id===t);delete e.filters[o].isSnapshot,e.filters[o]=S(b({},e.filters[o]),{value:n})}const Aa=["#C10020","#007D34","#803E75","#FF6800","#B32851","#7F180D","#232C16","#A6BDD7","#CEA262","#817066","#FF8E00","#F6768E","#00538A","#FF7A5C","#53377A","#FFB300","#F4C800","#93AA00","#593315","#F13A13"],vr={cosy:{positiveColor:"darkblue",negativeColor:"blue"},roesy:{positiveColor:"#e75480",negativeColor:"yellow"},noesy:{positiveColor:"#e75480",negativeColor:"yellow"},tocsy:{positiveColor:"green",negativeColor:"yellow"},hsqc:{positiveColor:"black",negativeColor:"yellow"},hmbc:{positiveColor:"darkviolet",negativeColor:"yellow"}};function jm(e,t=[]){if(!vr[e]){const n=mi(!1,t),o=Ta(n,50);return{positiveColor:n,negativeColor:o}}return vr[e]}function Bs(e){const t=Math.max(0,Math.min(100,e)),o=Math.round(t/100*255).toString(16);return t===100?"":o.padStart(2,"0")}function Ta(e,t){return e+Bs(t)}function mi(e=!1,t=[],n=100){const o=Aa.filter(s=>!t.includes(s));if(o.length>0&&!e)return o[0]+Bs(n);{let i=String(`#${Math.random().toString(16).slice(2,8).toUpperCase()}`).replace(/[^0-9a-f]/gi,"");i.length<6&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);let r="#",l;for(let a=0;a<3;a++)l=parseInt(i.substr(a*2,2),16),l=Math.round(Math.min(Math.max(0,l+l*-.25),255)).toString(16),r+=`00${l}`.substr(l.length);return r+Bs(n)}}function Bm(e){return cn({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.integrals)}function Da(e){const{x:t}=e.data;return(t[t.length-1]-t[0])/1e4}function Yt(e){const t=(e==null?void 0:e.filters)&&(e==null?void 0:e.filters.find(n=>n.name===no));return t!=null&&t.flag?t.value:0}function Xm(e,t,n){var o;for(const{x:s}of((o=t.peaks)==null?void 0:o.values)||[])if(Math.abs(e.x-s)<n)return!0;return!1}function Ra(e,t){const n=Yt(t),o=Da(t);return e.reduce((s,i)=>(Xm(i,t,o)||s.push({id:(i==null?void 0:i.id)||U(),originalX:i.x-n,x:i.x,y:i.y,width:i.width}),s),[])}function Ym(e,t){var n;return cn({values:[],options:{}},e.peaks,{values:Ra(((n=e==null?void 0:e.peaks)==null?void 0:n.values)||[],t)})}function Gm(e,t,n){var o;for(const{from:s,to:i}of((o=t.ranges)==null?void 0:o.values)||[])if(Math.abs(e.from-s)<n&&Math.abs(e.to-i)<n)return!0}function Sn(e,t){const{x:n,re:o}=t.data,s=Yt(t),i=Da(t);return e.reduce((r,l)=>{if(Gm(l,t,i))return r;const a=Cn({x:n,y:o},{from:l.from,to:l.to,reverse:!0}),u=l.signals.map(p=>{const x=p,{kind:h=null,id:m}=x,g=G(x,["kind","id"]);return b({kind:h||"signal",id:m||U(),originDelta:p.delta-s},g)});return r.push(S(b({},l),{kind:(u==null?void 0:u[0].kind)||Ue.signal,originFrom:l.from-s,originTo:l.to-s,id:l.id||U(),absolute:a,signals:u})),r},[])}function Wm(e,t){var n;return cn({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.ranges,{values:Sn(((n=e==null?void 0:e.ranges)==null?void 0:n.values)||[],t)})}function at(e,t={}){var o;const n={};return n.id=e.id||U(),n.source=Object.assign({jcampURL:null,file:{binary:null,name:"",extension:""}},e.source),n.display=Object.assign(S(b({name:(o=e.display)!=null&&o.name?e.display.name:U()},Zm(e,t)),{isVisible:!0,isPeaksMarkersVisible:!0,isRealSpectrumVisible:!0}),e.display),n.info=Object.assign({nucleus:"1H",isFid:!1,isComplex:!1,dimension:1},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({x:[],re:[],im:[]},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.peaks=Ym(e,n),n.integrals=Bm(e),n.ranges=Wm(e,n),mn(n),Um(n),n}function Zm(e,t){var o;let n="black";return((o=e==null?void 0:e.display)==null?void 0:o.color)===void 0?n=mi(!1,t["1d"]||[]):n=e.display.color,t["1d"]&&t["1d"].push(n),{color:n}}function Um(e){e.info.isFid&&e.filters.findIndex(t=>t.name===zs)===-1&&e.info.digitalFilter&&Ae(e,[{name:zs,options:{digitalFilterValue:e.info.digitalFilter},isDeleteAllow:!1}])}function Pa(e,t,n){const{nucleus:o,solvent:s,name:i=null,frequency:r=400}=t,{x:l,y:a}=Rl(e,{frequency:r,nbPoints:524288}),u=at({data:{x:l,im:null,re:a},display:{name:i},info:{nucleus:o,originFrequency:r,baseFrequency:r,pulseSequence:"",solvent:s,isFt:!0}},n);return u.ranges.values=Sn(e,u),u}function Km(e,t){const{ranges:n,experiment:{nucleus:o,solvent:s},parts:i}=tp(e);return Pa(n,{nucleus:o,solvent:s,name:i[0]},t)}function wn(e){const{display:{isRealSpectrumVisible:t},data:{x:n,re:o,im:s}}=e;return{x:n,y:t?o:s}}const Lt={"1H":{tms:{from:-.1,to:.1,nbPeaks:1,delta:0},tsp:{from:-.1,to:.1,nbPeaks:1,delta:0},glucose:{from:5.18,to:5.28,nbPeaks:2,delta:5.23}},"13C":{}};function qm(e={}){const{nucleus:t="1H",reference:n="tms"}=e;if(!Lt[t])throw new Error(`Nucleus not found: ${t}`);const o=Lt[t][n.toLowerCase()];if(!o)throw new Error(`Reference not found: ${n}`);return{from:o.delta-.05,to:o.delta+.05,delta:o.delta,nbPeaks:o.nbPeaks}}function Jm(e,t){let{from:n,to:o,nbPeaks:s,targetX:i,reference:r}=t;if(r){let u=qm({reference:r,nucleus:e.nucleus});n=u.from,o=u.to,s=u.nbPeaks,i=u.delta}const{re:l,x:a}=e.data;return Qm({x:a,y:l},{from:n,to:o},{nbPeaks:s,targetX:i})}function Qm(e,t={},n={}){const{targetX:o=0,nbPeaks:s=1,gsd:i={minMaxRatio:.1,realTopDetection:!0,smoothY:!0,sgOptions:{windowSize:7,polynomial:3}}}=n;let{from:r,to:l}=t;if(r===void 0||l===void 0)return 0;const a=Ze(e.x,r),u=Ze(e.x,l),p={x:e.x.slice(a,u),y:e.y.slice(a,u)};let h=np(p,i).sort((g,x)=>x.y-g.y).slice(0,s);if(h.length===0)return 0;const m=op(h.map(g=>g.x));return o-m}function eg(e,t){const n=e.integrals.values.findIndex(o=>o.id===t.id);if(n!==-1){const o=e.integrals.values[n].absolute/t.value,{values:s,sum:i}=e.integrals.values.reduce((r,l,a)=>{const u=l.absolute/o;return r.sum+=u,r.values[a]=S(b({},l),{integral:u}),r},{values:[],sum:0});e.integrals.values=s,e.integrals.options=S(b({},e.integrals.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:i})}}function Ia(e){return eo.includes(e.kind)}function Cr(e,t,n=null){return e.reduce((o,s)=>n&&n(s)===!0?o+=Math.abs(s[t]):o,0)}function Na(e,t,n,o=!1){var a;const{values:s,options:i}=e,r=Cr(s,"absolute",n);let l=0;if(i.sum){if(e.options.isSumConstant||o)l=r>0?i.sum/r:0;else if((a=e.values)!=null&&a[0]){const u=e.values[0];l=(u[t]?u[t]:i.sum)/u.absolute}}e.values=e.values.map(u=>b(b({},u),n(u)&&{[t]:u.absolute*l})),!e.options.isSumConstant&&!o&&(e.options.sum=Cr(e.values,t,n))}function En(e,t=!1){Na(e.integrals,"integral",Ia,t)}function oo(e){return e.info.dimension===1}function tg(e,t){const{minMaxRatio:n,maxNumberOfPeaks:o,noiseFactor:s,lookNegative:i,windowFromIndex:r,windowToIndex:l}=t,a=sp(e.data.re.map(m=>Math.abs(m)));let{re:u,x:p}=e.data;r!==void 0&&l!==void 0&&(p=p.slice(r,l),u=u.slice(r,l));let h=ip({x:p,y:u},{lookNegative:i,noiseLevel:a*s,minMaxRatio:n,realTopDetection:!0,smoothY:!1,sgOptions:{windowSize:15,polynomial:3}});return h.sort((m,g)=>g.y-m.y),o<h.length&&(h=h.slice(0,o)),Ra(h,e)}function Ma(e,t){const{from:n,to:o}=t;let s=e.x.findIndex(l=>l>=n),i=e.x.findIndex(l=>l>=o)-1;s>i&&(s=i,i=s);const r=e.re.slice(s,i);if(r&&r.length>0){const l=Pl(r),a=r.findIndex(p=>p===l);return{x:e.x[s+a],y:l,xIndex:s+a}}return null}function _a(e){return(e==null?void 0:e.replace(/[0-9]/g,""))||""}function gi(e,t){let n=b({},e);const{molecules:o,nucleus:s}=t;if(e.sumAuto&&Array.isArray(o)&&o.length>0){const{mf:r,key:l}=o[0];n=S(b({},n),{sumAuto:!0,mf:r,moleculeKey:l})}else{const i=n,{mf:r,moleculeKey:l}=i,a=G(i,["mf","moleculeKey"]);n=S(b({},a),{sumAuto:!1})}return n.sum||(n.sum=Fa(n.mf||null,s)),n}function Fa(e,t){if(!e||!t)return 100;const o=_a(t),s=ng(e);return s[o]?s[o]:100}function xi(e,t){const{nucleus:n,options:o}=t;if(o.sumAuto){const{mf:i,moleculeKey:r}=o,l=Fa(i,n);e.options=S(b({},e.options),{sumAuto:!0,moleculeKey:r,mf:i,sum:l})}else{const s=e.options,{mf:i,moleculeKey:r}=s,l=G(s,["mf","moleculeKey"]);e.options=S(b({},l),{sumAuto:!1,sum:o.sum})}}function ng(e){const t={},n=e.split(/(\d+)/);for(let o=0;o<n.length-1;o=o+2)t[n[o]]=Number(n[o+1]);return t}function bi(e,t,n){const o=["ranges","integrals"];for(const s of e.data)if(oo(s))for(const i of o){const{moleculeKey:r,mf:l,sumAuto:a}=s[i].options;if((t===r||!r&&!l)&&a){const u=n?{mf:n.mf,moleculeKey:n.key}:{mf:void 0,moleculeKey:void 0};xi(s[i],{nucleus:s.info.nucleus,options:S(b({},u),{sumAuto:!0,sum:void 0})}),Et(s,!0),En(s,!0)}}}function og(e,t){return t===void 0?e.signals?e.signals.reduce((n,o)=>o.nbAtoms?o.nbAtoms+n:n,0):0:e.signals[t].nbAtoms||0}function sg(e,t){e.nbAtoms=og(e,t),e.nbAtoms===0&&delete e.nbAtoms}function ig(e){delete e.diaIDs,delete e.nbAtoms,e.signals.forEach(t=>{delete t.diaIDs,delete t.nbAtoms}),delete e.nbAtoms}function jn(e,t="both",n={}){switch(t){case"both":ig(e);break;case"range":delete e.diaIDs,delete e.nbAtoms;break;case"signal":delete e.signals[n.signalIndex].diaIDs,delete e.signals[n.signalIndex].nbAtoms;break}return sg(e),e}function La(e){return e.kind===Ue.signal}function rg(e,t){return!e.signals.some(n=>n.kind===void 0||!t.includes(n.kind))}function zt(e,t){const n=t.reduce((o,s)=>(s.id&&o.push(s.id),s.signals&&(o=o.concat(s.signals.map(i=>i.id,[]))),o),[]);e.dispatch({type:"REMOVE_ALL",payload:{id:n,axis:"x"}})}function lg(e){return e.signals&&rg(e,eo)}function Et(e,t=!1){Na(e.ranges,"integration",lg,t)}function ag(e,t){const{from:n,to:o,molecules:s,nucleus:i}=t,{x:r,re:l}=e.data,a=Cn({x:r,y:l},{from:n,to:o,reverse:!0}),u=kf(r,l,n,o,e.info.originFrequency);if(!!u)try{const p={id:U(),from:n,to:o,absolute:a,signals:[b({id:U()},u)],kind:Ue.signal,integration:0};e.ranges.options=gi(e.ranges.options,{molecules:s,nucleus:i}),e.ranges.values=e.ranges.values.concat(Sn([p],e)),Et(e)}catch{throw new Error("Could not calculate the multiplicity")}}function cg(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,r=e.ranges.values.findIndex(a=>a.id===t.id),l=Cn({x:s,y:i},{from:n,to:o,reverse:!0});r!==-1&&(e.ranges.values[r]=S(b(S(b({},e.ranges.values[r]),{originFrom:n,originTo:o}),t),{absolute:l}),Et(e))}function ug(e,t){const n=e.ranges.values.findIndex(o=>o.id===t.id);if(n!==-1&&e.ranges.options.sum){const{absolute:o,integration:s}=e.ranges.values[n],i=o/t.value,r=t.value/s*e.ranges.options.sum;e.ranges.options=S(b({},e.ranges.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:r}),e.ranges.values=e.ranges.values.map(l=>S(b({},l),{integration:l.absolute/i}))}}function dg(e,t){const{rangeID:n,signalID:o,newSignalValue:s}=t;let i=0;const r=e.ranges.values.findIndex(l=>l.id===n);if(r!==-1){const l=e.ranges.values[r].signals.findIndex(a=>a.id===o);i=s-e.ranges.values[r].signals[l].delta,e.ranges.values[r].signals[l].delta=s}return i}function pg(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,r=Cn({x:s,y:i},{from:n,to:o,reverse:!0}),l=rp({x:s,y:i},{from:n,to:o}).y,a=lp({x:s,y:i},{from:n,to:o}).y,u=Yt(e);return{id:U(),originFrom:n-u,originTo:o-u,from:n,to:o,absolute:r,min:l,max:a}}const hg={minMaxRatio:1,realTopDetection:!0,maxCriteria:!0,smoothY:!1,integrationSum:100,factorStd:5,clean:!0,sgOptions:{windowSize:7,polynomial:3}};function fg(e,t={}){let{re:n,x:o}=e.data;const{originFrequency:s,nucleus:i}=e.info,{windowFromIndex:r,windowToIndex:l,peakPicking:a}=t,u=b(b({},hg),a),p={frequency:s,nucleus:i,compile:!0,frequencyCluster:13,keepPeaks:!0};if(r!==void 0&&l!==void 0&&(o=o.slice(r,l),n=n.slice(r,l)),s){let m=1/s/(o[1]-o[0]),g=Math.max(Math.round(m/2),5);u.sgOptions={windowSize:g-g%2+1,polynomial:3}}return u.smoothY=void 0,u.sgOptions=void 0,ap({x:o,y:n},{peakPicking:u,ranges:p})}function Oa(e,t){const r=t,{molecules:n,nucleus:o}=r,s=G(r,["molecules","nucleus"]);s.impurities={solvent:e.info.solvent||""};const i=fg(e,s);e.ranges.options=gi(e.ranges.options,{molecules:n,nucleus:o}),e.ranges.values=e.ranges.values.concat(Sn(i,e)),Et(e)}function mg(e,t){e.integrals.values=e.integrals.values.map(n=>S(b({},n),{from:n.originFrom+t,to:n.originTo+t}))}function gg(e,t){e.peaks.values=e.peaks.values.map(n=>{const o=n.originalX+t,s=Ze(e.data.x,o);return S(b({},n),{y:e.data.re[s],x:n.originalX+t})})}function xg(e,t){e.ranges.values=e.ranges.values.map(n=>S(b({},n),{from:(n.originFrom||0)+t,to:(n.originTo||0)+t,signals:(n==null?void 0:n.signals)&&n.signals.map(o=>S(b({},o),{delta:(o.originDelta||0)+t}))}))}function An(e){const t=Yt(e);gg(e,t),xg(e,t),mg(e,t)}const $a=20;var B=(e=>(e.DM_1D="1D",e.DM_2D="2D",e))(B||{});const Pt={"2D":{top:100,right:50,bottom:70,left:100},"1D":{top:10,right:10,bottom:70,left:10}};function bg(e,t={},n={}){const{dependentVariables:o,info:s,meta:i,source:r}=e;let l=Ha(o[0].components);return l.im&&(s.isComplex=!0),Array.isArray(s.nucleus)&&(s.nucleus=s.nucleus[0]),at(S(b({},t),{source:r,info:s,meta:i,data:l}),n)}function yg(e,t={},n={}){let o=e.dimensions[0],s=e.dependentVariables,i=o.quantityName,r=o.count,l=o.increment.magnitude,a=o.originOffset.magnitude,u=o.coordinatesOffset.magnitude,p=s[0].components[0],h=[],m=[];for(let C=p.length-1;C>0;C-=2)h.push(p[C-1]),m.push(p[C]);let g={},x,y;switch(i){case"frequency":y=0+u/a*1e6,x=l/a*1e6,g.re=h,g.im=m;break;case"time":y=a,x=l,g.re=h.reverse(),g.im=m.reverse().map(C=>-C);break}let k=[];for(let C=0;C<r;C++)k.push(y+C*x);return g.x=k,at(S(b({},t),{data:g}),n)}function vg(e,t,n){const{dependentVariables:o,info:s,meta:i}=e;let r=Ha(o[0].components);return Array.isArray(s.nucleus)&&(s.nucleus=s.nucleus[0]),at(S(b({},t),{info:s,meta:i,data:r}),n)}function Ha(e){var s,i,r,l,a,u;let t=(i=(s=e[0])==null?void 0:s.data)!=null&&i.x?e[0].data.x:[],n=(l=(r=e[0])==null?void 0:r.data)!=null&&l.y?e[0].data.y:[],o=(u=(a=e[1])==null?void 0:a.data)!=null&&u.y?e[1].data.y:null;return t[0]>t[1]&&(t.reverse(),n.reverse(),o&&o.reverse()),{x:t,re:n,im:o}}function Cg(e,t,n){let o=e.info.nucleus.indexOf(t);o===-1&&(o=0);let s={nucleus:e.info.nucleus[o],isFid:!1,isComplex:!1,dimension:1},i=o===0?e.data.minX:e.data.minY,r=o===0?e.data.maxX:e.data.maxY,l=o===0?e.data.z[0].length:e.data.z.length,a=new Float64Array(l);if(o===1)for(let p=0;p<e.data.z.length;p++)for(let h=0;h<e.data.z[0].length;h++)a[p]+=e.data.z[p][h];else for(let p=0;p<e.data.z[0].length;p++)for(const h of e.data.z)a[p]+=h[p];let u={x:Fs({from:i,to:r},l),re:a};return at({info:s,data:u},n)}function kg(e,t){const n=e.data,o=(n.maxX-n.minX)/(n.z[0].length-1),s=(n.maxY-n.minY)/(n.z.length-1),i=Math.floor((t.x-n.minX)/o),r=Math.floor((t.y-n.minY)/s);if(i<0||i>=n.z[0].length||r<0||r>=n.z.length)return;let l={nucleus:e.info.nucleus[0],isFid:!1,isComplex:!1,dimension:1},a={x:Fs({from:e.data.minX,to:e.data.maxX},e.data.z[0].length),re:new Float64Array(e.data.z[0].length)};for(let x=0;x<e.data.z[0].length;x++)a.re[x]+=e.data.z[r][x];let u={nucleus:e.info.nucleus[1],isFid:!1,isComplex:!1,dimension:1},p={x:Fs({from:e.data.minY,to:e.data.maxY},e.data.z.length),re:new Float64Array(e.data.z.length)},h=e.data.z.length-1;for(let x=0;x<e.data.z.length;x++)p.re[x]+=e.data.z[h--][i];const m=at({info:l,data:a},{}),g=at({info:u,data:p},{});return{horizontal:m,vertical:g}}const za={positive:{contourLevels:[0,21],numberOfLayers:10},negative:{contourLevels:[0,21],numberOfLayers:10}};class Sg{constructor(t,n=za,o={positive:10,negative:10}){this.options=n;const{positive:s,negative:i}=o;this.currentLevelPositive=s,this.currentLevelNegative=i;const r=Ss(t.minX,t.maxX,t.z[0].length),l=Ss(t.minY,t.maxY,t.z.length);this.conrec=new cp(t.z,{xs:r,ys:l,swapAxes:!1}),this.median=t.noise,this.minMax=t}getLevel(){return{levelPositive:this.currentLevelPositive,levelNegative:this.currentLevelNegative}}setLevel(t,n){this.currentLevelPositive=t,this.currentLevelNegative=n}setOptions(t){const n=t.positive.contourLevels,o=t.negative.contourLevels;this.currentLevelPositive>=n[1]?this.currentLevelPositive=n[1]:this.currentLevelPositive<=n[0]&&(this.currentLevelPositive=n[0]),this.currentLevelNegative>=o[1]?this.currentLevelNegative=o[1]:this.currentLevelNegative<=o[0]&&(this.currentLevelNegative=o[0]),this.options=t}wheel(t){const n=Math.sign(t),o=this.options.positive.contourLevels,s=this.options.negative.contourLevels;(this.currentLevelPositive>o[0]&&n===-1||this.currentLevelPositive<o[1]&&n===1)&&(this.currentLevelPositive+=n),(this.currentLevelNegative>s[0]&&n===-1||this.currentLevelNegative<s[1]&&n===1)&&(this.currentLevelNegative+=n)}shiftWheel(t){const n=Math.sign(t),[o,s]=this.options.positive.contourLevels;if(!(this.currentLevelPositive===o&&n===-1||this.currentLevelPositive>=s&&n===1))return this.currentLevelPositive+=n,[]}drawContours(){const t=this.currentLevelPositive/2+1,n=this.currentLevelNegative/2+1,{positive:{numberOfLayers:o},negative:{numberOfLayers:s}}=this.options;return{positive:this.getContours(t,{nbLevels:o}),negative:this.getContours(n,{negative:!0,nbLevels:s})}}getContours(t,n={}){const{negative:o=!1,timeout:s=2e3,nbLevels:i=10}=n,r=Math.max(Math.abs(this.minMax.maxZ),Math.abs(this.minMax.minZ));let l=Ss(this.median*1*Math.pow(2,t),r,i,2);o&&(l=l.map(u=>-u));let a=[];try{a=this.conrec.drawContour({contourDrawer:"basic",levels:l,timeout:s})}catch(u){throw console.log(u),u}return a}}function Ss(e,t,n,o){if(o!==void 0){const s=[];s[0]=0;for(let l=1;l<=n;l++)s[l]=s[l-1]+(o-1)/Math.pow(o,l);const i=s[n],r=new Array(n);for(let l=0;l<n;l++)r[l]=(t-e)*(1-s[l+1]/i)+e;return r}else{const s=(t-e)/(n-1);return wg(e,t+s/2,s)}}function wg(e,t,n){const o=[];for(let s=e;s<t;s+=n)o.push(s);return o}function so(e,t={}){var o;const n={};return n.id=e.id||U(),n.source=Object.assign({jcampURL:null},e.source),n.display=Object.assign(S(b({name:(o=e.display)!=null&&o.name?e.display.name:U()},Eg(e,t)),{isPositiveVisible:!0,isNegativeVisible:!0,isVisible:!0,contourOptions:za,dimension:2}),e.display),n.info=Object.assign({nucleus:["1H","1H"],isFt:!0,isFid:!1,isComplex:!1,dimension:2},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({z:[],minX:0,minY:0,maxX:0,maxY:0},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.zones=Object.assign({values:[],options:{}},e.zones),n.processingController=new Sg(n.data,n.display.contourOptions),mn(n),n}function Eg(e,t){var o,s;let n={positiveColor:"red",negativeColor:"blue"};return(((o=e==null?void 0:e.display)==null?void 0:o.negativeColor)===void 0||((s=e==null?void 0:e.display)==null?void 0:s.positiveColor)===void 0)&&(n=jm(e.info.experiment,t["2d"]||[])),t["2d"]&&t["2d"].push(n.positiveColor),n}function Xs(e){return e.info.dimension===2}function io(e){let t={xShift:0,yShift:0};return e!=null&&e.filters&&(t=e.filters.reduce((n,o)=>(o.name===pi&&(n.xShift=o!=null&&o.flag?o.value:0),o.name===hi&&(n.yShift=o!=null&&o.flag?o.value:0),n),{xShift:0,yShift:0})),t}function ro(e){const{xShift:t,yShift:n}=io(e);Ag(e,{xShift:t,yShift:n})}function Ag(e,{xShift:t,yShift:n}){e.zones.values=e.zones.values.map(o=>{var s;return S(b({},o),{signals:(s=o.signals)==null?void 0:s.map(i=>S(b({},i),{x:S(b({},i.x),{delta:i.x.originDelta+t}),y:S(b({},i.y),{delta:i.y.originDelta+n})}))})})}function Tg(e,t){return S(b({id:e.id},t===bt.ROW_DATA||t===bt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL}}),{zones:e.zones,filters:e.filters,display:e.display})}function Dg(e,t,n){var s;const o=e.zones.values.findIndex(i=>i.id===t);if(o!==-1){const i=e.zones.values[o].signals.findIndex(l=>l.id===n.id),r=e.zones.values[o];if(i!==-1){const l=r.signals[i],a=(n==null?void 0:n.x)||(n==null?void 0:n.x)===0?n.x-l.x.delta:0,u=(n==null?void 0:n.y)||(n==null?void 0:n.y)===0?n.y-((s=l.y)==null?void 0:s.delta):0;return{xShift:a,yShift:u}}}return{xShift:0,yShift:0}}function Va(e,t){let n={};return t.selectedZone?(t.enhanceSymmetry=!1,n=Pg(e,t.selectedZone)):n=e.data,Rg(n,S(b({},t),{info:e.info}))}function Rg(e,t){const{thresholdFactor:n,clean:o,maxPercentCutOff:s,convolutionByFFT:i}=t,{nucleus:r,originFrequency:l}=t.info,{enhanceSymmetry:a=r[0]===r[1]}=t;return up(e,{nuclei:r,observedFrequencies:l,thresholdFactor:n,clean:o,maxPercentCutOff:s,enhanceSymmetry:a,convolutionByFFT:i})}function Pg(e,t){const{fromX:n,toX:o,fromY:s,toY:i}=t,r=e.data,l=(r.maxX-r.minX)/(r.z[0].length-1),a=(r.maxY-r.minY)/(r.z.length-1);let u=Math.max(Math.floor((n-r.minX)/l),0),p=Math.max(Math.floor((s-r.minY)/a),0),h=Math.min(Math.floor((o-r.minX)/l),r.z[0].length-1),m=Math.min(Math.floor((i-r.minY)/a),r.z.length-1);u>h&&([u,h]=[h,u]),p>m&&([p,m]=[m,p]);let g={z:[],maxX:r.minX+h*l,minX:r.minX+u*l,maxY:r.minY+m*a,minY:r.minY+p*a},x=Number.MIN_SAFE_INTEGER,y=Number.MAX_SAFE_INTEGER,k=h-u+1;for(let v=p;v<m;v++){let C=new Float32Array(k),E=u;for(let T=0;T<k;T++)C[T]=r.z[v][E++];for(let T of C)x<T&&(x=T),y>T&&(y=T);g.z.push(Array.from(C))}return g.minZ=y,g.maxZ=x,g}function ja(e,t){const n=Va(e,t),{xShift:o,yShift:s}=io(e),{minX:i,maxX:r,minY:l,maxY:a}=e.data,u=Math.abs(r-i)/1e4,p=Math.abs(a-l)/1e4;return n.reduce((m,g)=>{const x=g.x||{from:0,to:0},y=g.y||{from:0,to:0};for(const{x:v,y:C}of e.zones.values)if(Math.abs(x.from-v.from)<u&&Math.abs(x.to-v.to)<u&&Math.abs(y.from-C.from)<p&&Math.abs(y.to-C.to)<p)return m;const k=g.signals.map(v=>({id:U(),peaks:v.peaks,x:b({originDelta:v.x.delta-o},v.x),y:b({originDelta:v.y.delta-s},v.y),kind:"signal"}));return m.push({id:U(),x:{from:x.from,to:x.to},y:{from:y.from,to:y.to},signals:k,kind:Ue.signal}),m},[])}function Ig(e,t){const n=Va(e,t),{xShift:o,yShift:s}=io(e);return n.map(r=>{const l=r.signals.map(a=>({id:U(),peaks:a.peaks,x:b({originDelta:a.x.delta-o},a.x),y:b({originDelta:a.y.delta-s},a.y),kind:a.kind||"signal"}));return{id:U(),x:r.x,y:r.y,signals:l,kind:Ue.signal}},[])}function Ng(e,t,n){const{dependentVariables:o,info:s,meta:i}=e;let r=o[0].components;return so(S(b({},t),{info:s,meta:i,data:r}),n)}function Mg(e,t={},n={}){const{dependentVariables:o,meta:s,source:i}=e;let r=o[0].components;return so(S(b({},t),{source:i,meta:s,data:r}),n)}function _g(e,t={},n={}){return so({},n)}function No(e,t){return JSON.parse(JSON.stringify(e),function(o,s){if(o in t){this[t[o]]=s;return}return s})}function Fg(e){if((e==null?void 0:e.version)===1)return e;const t=S(b({},e),{version:1}),n={j:"js",signal:"signals",integral:"integration",peak:"peaks",diaID:"diaIDs"};for(const o of t.spectra)o.ranges?o.ranges=No(o.ranges,n):o.zones&&(o.zones=No(o.zones,n));return t}function Lg(e){if((e==null?void 0:e.version)===2)return e;const t=S(b({},e),{version:2}),n={peaks:{delta:"x",originDelta:"originalX",intensity:"y"},ranges:{atomIDs:"atoms",intensity:"y"}};for(const o of t.spectra)o.peaks?o.peaks=No(o.peaks,n.peaks):o.ranges?o.ranges=No(o.ranges,n.ranges):o.zones&&(o.zones.values=Og(o.zones.values));return t}function Og(e){return e.map(t=>(t.signals&&(t.signals=t.signals.map(n=>{if(n.x&&n.y){const o=n,{x:s}=o,i=s,{fromTo:u}=i,p=G(i,["fromTo"]),{y:r}=o,l=r,{fromTo:h}=l,m=G(l,["fromTo"]);n=S(b({},n),{x:b(b({},p),u),y:b(b({},m),h)})}else{const a=n,{fromTo:u,deltaX:p,resolutionX:h,nucleusX:m,deltaY:g,resolutionY:x,nucleusY:y,shiftX:k,shiftY:v}=a,C=G(a,["fromTo","deltaX","resolutionX","nucleusX","deltaY","resolutionY","nucleusY","shiftX","shiftY"]);n=S(b({},C),{x:{from:u[0].from,to:u[0].to,delta:p,resolution:h,nucleus:m},y:{from:u[1].from,to:u[1].to,delta:g,resolution:x,nucleus:y}})}return n},[])),t),[])}const Ba=2;function $g(e){return t=>e.reduce((n,o)=>o(n),t)}function kr(e){let t=[Fg,Lg],n=(e==null?void 0:e.version)||0;if(n>Ba)throw new Error("This file can not be imported using the current NMRium version, Please move to the new one !!! ");return $g(t.slice(n))(e)}const Hg=/^(?:[A-Z][a-z]?\d* *)+$/;function Xa(e){if(!Hg.test(e))throw Error(`MF can not be parsed: ${e}`);const t={},n=e.matchAll(/(?<atom>[A-Z][a-z]?)(?<number>[0-9]*)/g);for(const o of n){const{atom:s,number:i}=o.groups;t[s]||(t[s]=0),t[s]+=i===""?1:Number(i)}return t}function Mo(e={}){const t=e.key||U(),n=e.molfile||"",o=Bt.Molecule.fromMolfile(n),s=o.getMolecularFormula();return{key:t,molfile:n,mf:s.formula,em:s.absoluteWeight,mw:s.relativeWeight,svg:o.toSVG(50,50),atoms:Xa(s.formula)}}function zg(e){return{molfile:e.molfile}}var bt=(e=>(e.ROW_DATA="ROW_DATA",e.DATA_SOURCE="DATA_SOURCE",e))(bt||{});function Vg(e,t,n,o){return fetch(t).then(s=>s.arrayBuffer()).then(s=>{Ya(e,s,n,o)})}function Ya(e,t,n,o){n=n||{};const s=pp(t,{noContour:!0,xy:!0,keepRecordsRegExp:/.*/,profiling:!0});if(s.length!==0)for(let i of s){let{dependentVariables:r}=i;r[0].components&&(r[0].components.length>0||r[0].components.z.length)&&jg(e,i,n,o)}}function jg(e,t,n,o){const s=t.info.dimension;s===1&&e.push(vg(t,n,o)),s===2&&e.push(Ng(t,n,o))}function Bg(e,t,n){const o=t.info.dimension;o===1&&e.push(at(t,n)),o===2&&e.push(so(t,n))}function Xg(e,t,n={},o={}){let s=hp(t);s=s[0];let i=s.description,r=i.metadata;delete i.metadata,i.acquisitionMode=0,i.experiment=i.dimension===1?"1d":"2d",i.type="NMR SPECTRUM",i.nucleus=i.nucleus[0],i.numberOfPoints=i.numberOfPoints[0],i.acquisitionTime=i.acquisitionTime[0],i.baseFrequency=i.baseFrequency[0],i.frequencyOffset=i.frequencyOffset[0],i.spectralWidthClipped=s.application.spectralWidthClipped,i.dimension===1&&s.dependentVariables&&e.push(yg(s,S(b({},n),{display:b({},n.display),info:i,meta:r}),o)),i.dimension===2&&i.isFt&&e.push(_g(s,S(b({},n),{display:b({},n.display),info:i}),o))}async function Sr(e=[],t={}){var s;const n=[];let o=[];for(let i of e)((s=i==null?void 0:i.source)==null?void 0:s.jcampURL)!=null?o.push(Vg(n,i.source.jcampURL,i,t)):Bg(n,i,t);return await Promise.all(o),n}async function Ga(e,t,n){const o=[];let i=await dp(t,{xy:!0,noContours:!0,keepOriginal:!0});for(let r of i){let{info:l,dependentVariables:a}=r;l.dimension===1?a[0].components&&o.push(bg(r,S(b({},e),{display:b({},e.display)}),n)):l.dimension===2&&l.isFt&&o.push(Mg(r,S(b({},e),{info:l,display:b({},e.display)}),n))}return o}function Yg(e,t){const n=[];for(const o of e)Xg(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function Wa(e,t){const n=[];for(const o of e)Ya(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function Gg(e){const{activeTab:t,verticalAlign:{align:n}}=e;return b({activeTab:t},e.displayerMode===B.DM_1D?{verticalAlign:n}:{})}function wr(e,t="DATA_SOURCE"){const{data:n,molecules:o,correlations:s,multipleAnalysis:i,toolOptions:{data:{exclusionZones:r}}}=e||{data:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:{}},l=n.map(p=>p.info.dimension===1?Wg(p,t):Tg(p,t)),a=Gg(e),u=o.map(p=>zg(p));return{spectra:l,molecules:u,correlations:s,multipleAnalysis:i,exclusionZones:r,version:Ba,preferences:a}}function Wg(e,t){return S(b({id:e.id,display:e.display},t===bt.ROW_DATA||t===bt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL}}),{peaks:e.peaks,integrals:e.integrals,ranges:e.ranges,filters:e.filters})}const Za={name:"",frequency:400,"1d":{"1H":{from:-1,to:12},"13C":{from:-5,to:220},nbPoints:2**17,lineWidth:1},"2d":{nbPoints:{x:1024,y:1024}},spectra:{proton:!0,carbon:!0,cosy:!0,hsqc:!0,hmbc:!0}},Ua=[{key:1,value:60,label:"60 MHz"},{key:2,value:100,label:"100 MHz"},{key:3,value:200,label:"200 MHz"},{key:4,value:300,label:"300 MHz"},{key:5,value:400,label:"400 MHz"},{key:6,value:500,label:"500 MHz"},{key:7,value:600,label:"600 MHz"},{key:8,value:800,label:"800 MHz"},{key:9,value:1e3,label:"1000 MHz"},{key:10,value:1200,label:"1200 MHz"}],Zg="https://nmr-prediction.service.zakodium.com";async function Ug(e){const t=Bt.Molecule.fromMolfile(e);return fp(t,{predictOptions:{C:{webserviceURL:`${Zg}/v1/predict/carbon`}}})}function Kg(e,t,n){const o=[];for(const s in e)if(t.spectra[s]){const i=e[s];switch(s){case"proton":case"carbon":{const r=qg({spectrum:i,inputOptions:t,experiment:s,color:n});o.push(r);break}case"cosy":case"hsqc":case"hmbc":{const r=Qg({spectrum:i,inputOptions:t,experiment:s,color:n});o.push(r);break}}}return o}function qg(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,ranges:r,nucleus:l}=t,{name:a,"1d":{nbPoints:u},frequency:p}=n,h=Ka(l,p),{x:m,y:g}=mp(i,S(b({},n["1d"][l]),{frequency:h,nbPoints:u})),x=at({data:{x:m,im:null,re:g},display:{name:a,color:s},info:{nucleus:l,originFrequency:h,baseFrequency:h,pulseSequence:"prediction",solvent:"",experiment:o,isFt:!0}},[]);return x.ranges.values=Sn(r,x),En(x),x}function Jg(e){return e.reduce((t,n)=>{const r=n,{signals:o}=r,s=G(r,["signals"]),i=o.reduce((l,a)=>{const g=a,{x:u,y:p,id:h}=g,m=G(g,["x","y","id"]);return l.push(b({id:h||U(),kind:"signal",x:S(b({},u),{originDelta:u.delta||0}),y:S(b({},p),{originDelta:p.delta||0})},m)),l},[]);return t.push(S(b({id:U()},s),{signals:i,kind:Ue.signal})),t},[])}function Qg(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,zones:r,nuclei:l}=t,a=n["1d"][l[0]],u=n["1d"][l[1]],p=ex(l),h=Ka(l,n.frequency),m=gp(i,{from:{x:a.from,y:u.from},to:{x:a.to,y:u.to},nbPoints:{x:n["2d"].nbPoints.x,y:n["2d"].nbPoints.y},width:p,factor:3}),g=so({data:S(b({},m),{noise:.01}),display:{name:n.name,positiveColor:s,negativeColor:Ta(s,40)},info:{nucleus:l,originFrequency:h,baseFrequency:h,pulseSequence:o,experiment:"2d"}},[]);return g.zones.values=Jg(r),g}function ex(e){return e[0]===e[1]?.02:{x:.02,y:.2133}}function Ka(e,t){return typeof e=="string"?dr(e,{nucleus:"1H",frequency:t}):e[0]===e[1]?`${t},${t}`:`${t},${dr(e[1],{nucleus:e[0],frequency:t})}`}const yi=[{key:"outOfLimit",color:"red"},{key:"ambiguousAttachment",color:"orange"},{key:"notAttached",color:"blue"},{key:"incomplete",color:"red"}],tx=yi.map(e=>e.key),qa={C:.25,H:.02,N:.25,F:.25,Si:.25,P:.25},_={zoom:{id:"zoom",label:"Zoom",hasOptionPanel:!1,isFilter:!1},peakPicking:{id:"peakPicking",label:"Peaks Picking",hasOptionPanel:!0,isFilter:!1},integral:{id:"integral",label:"integral Tool",hasOptionPanel:!1,isFilter:!1},zone2D:{id:"zone2D",label:"Zone Tool",hasOptionPanel:!0,isFilter:!1},slicingTool:{id:"slicingTool",label:"Slicing Tool",hasOptionPanel:!1,isFilter:!1},HMove:{id:"HMove",label:"Move spectrum horizontally",hasOptionPanel:!1,isFilter:!1},equalizerTool:{id:"equalizerTool",label:"Equalizer Tool",hasOptionPanel:!1,isFilter:!1},rangesPicking:{id:"rangesPicking",label:"Ranges Picking",hasOptionPanel:!0,isFilter:!1},zeroFilling:{id:ui,label:wa,hasOptionPanel:!0,isFilter:!0},phaseCorrection:{id:Ht,label:va,hasOptionPanel:!0,isFilter:!0},baseLineCorrection:{id:"baseLineCorrection",label:"baseline correction",hasOptionPanel:!0,isFilter:!0},generalSelector:{id:"generalSelector",label:"range general selector",hasOptionPanel:!1,isFilter:!1},editRange:{id:"editRange",label:"edit range",hasOptionPanel:!1,isFilter:!1},multipleSpectraAnalysis:{id:"multipleSpectraAnalysis",label:"Multiple Spectra Analysis",hasOptionPanel:!1,isFilter:!1},exclusionZones:{id:"exclusionZones",label:"Exclusion Zones",hasOptionPanel:!1,isFilter:!1},databaseRangesSelection:{id:"databaseRangesSelection",label:"Filter Database",hasOptionPanel:!1,isFilter:!1}};function nx(e,t){let n=[];const{baseFrequency:o=500}=t;for(const s of e){const{jCoupling:i,delta:r,diaIDs:l=[],multiplicity:a,integration:u}=s,p=ox({delta:r,js:i,frequency:o});if(i&&a&&i.length===a.length){i.sort((h,m)=>m-h);for(let h=0;h<i.length;h++)i[h].multiplicity=a[h]}n.push(S(b({},p),{integration:u,signals:[{js:i,delta:r,diaIDs:l,multiplicity:a}]}))}t.ranges.values=Sn(sx(n),t)}function ox(e={}){const{delta:t,js:n=[],frequency:o}=e;let s=.5;for(let i of n)s+=i.coupling;return s/=o,{from:t-s,to:t+s}}function sx(e){e.sort((t,n)=>t.from-n.from);for(let t=0;t<e.length-1;t++)e[t].to>e[t+1].from&&(e[t].to=Math.max(e[t+1].to,e[t].to),e[t].signals=e[t].signals.concat(e[t+1].signals),e[t].integration+=e[t+1].integration,e.splice(t+1,1),t--);return e}const ix=["y","x"];function rx(e,t){let n=[];const o=io(t),{baseFrequency:s}=t.info,i={x:s[0],y:s[1]};for(const r of e){let l={x:{},y:{},id:U(),kind:"signal"},a={id:U(),kind:"signal",peaks:[]},u={x:10,y:10};for(let p of ix){let{coupling:h=[],delta:m,diaIDs:g=[]}=r[p];for(let x of h)u[p]+=x.coupling;if(r.activeCoupling){const{activeCoupling:x=[]}=r;for(let y of x)u[p]+=y.coupling}u[p]/=i[p],l[p]={from:m-u[p],to:m+u[p]},a[p]={delta:m,diaIDs:g,originDelta:m-o[`${p}Shift`]}}n.push(S(b({},l),{signals:[a]}))}t.zones.values=n}async function lx(e,t){const o=await new pn().loadAsync(e.binary),s=await cx(o.files),i=await xp.toJSON({sdf:s[0],zipFiles:o.files});let{spectra:r,molecules:l=[]}=i,a={spectra:[],molecules:l};for(const u of r){const{file:p,jcampURL:h}=u.source;let m=await ax(p,{jcampURL:h},t)||[];for(const g of m){const{info:x}=g;x.isFid||(x.dimension>1?rx(u.signals,g):nx(u.signals,g))}a.spectra.push(...m)}return a}async function ax(e,t={},n={}){const{xy:o=!0,noContours:s=!0,keepOriginal:i=!0,jcampURL:r}=t;switch(e.extension){case"jdx":case"dx":return Wa([e],n);case"zip":return Ga({xy:o,noContours:s,keepOriginal:i},e.binary,n);default:if(!r)return}}async function cx(e){let t=[];for(const n in e){const o=n.split("/");if(/^[^.].+sdf$/.exec(o[o.length-1])){const s=o[o.length-1].replace(/\.sdf/,""),i=o.slice(0,o.length-1).join("/"),r=await e[n].async("string");let l=bp(`${r}`,{mixedEOL:!0});l.filename=s,l.root=i!==""?`${i}/`:"",t.push(l)}}return t}function Re(e,t,n){const o=e.find(s=>s.id===t);if(!(o&&n===!0&&o.display.isVisible===!1))return o}function Ja(e,t){for(let n of e.ranges.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function Gn(e,t){for(let n of e.zones.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function vi(e,t){for(let n of e.ranges.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function _o(e,t){for(let n of e.zones.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function Ci(e,t,n,o){const s=Re(e,t,o);if(s){if(s.info.dimension===1){const i=vi(s,n);if(i)return i.id}else if(s.info.dimension===2){const i=_o(s,n);if(i)return i.id}}}function Vt(e,t=null){const{width:n,margin:o,xDomains:s,xDomain:i,mode:r}=e,l=r==="RTL"?[n-o.right,o.left]:[o.left,n-o.right];return Je(t?s[t]:i,l)}function Fo(e,t=null){const{height:n,margin:o,verticalAlign:s,yDomain:i,yDomains:r}=e,l=s.align==="center"?(n-30)/2:n-o.bottom-30;let a=[];return t===null||r[t]===void 0?a=[0,i[1]]:a=[0,r[t][1]],Je(a,[l,o.top])}function ux(e){const{height:t,margin:n,verticalAlign:o,integralsYDomains:s,activeSpectrum:i}=e,r=o.align==="center"?t/2:t;return Je((i==null?void 0:i.id)&&s&&s[i==null?void 0:i.id]?s[i==null?void 0:i.id]:[0,0],[r*.3,n.top+r*.1])}function Gt(e,t){const{startX:n,endX:o}=t,s=Vt(e),i=s.invert(n),r=s.invert(o),l=[0,0];return i>r?(l[0]=r,l[1]=i):(l[0]=i,l[1]=r),l}function At(e){return typeof e=="string"?e:e.join(",")}function dx(e){let t=e.data.filter(n=>At(n.info.nucleus)===e.activeTab&&n.info.dimension===1);if(e.activeSpectrum){const n=t.findIndex(o=>{var s;return o.id===((s=e.activeSpectrum)==null?void 0:s.id)});if(n!==-1){const o=t[n].info.isFid||!1;t=t.filter(s=>s.info.isFid===o)}}else t=t.filter(n=>n.info.isFid===!1);return t}function Qa(e){let t=[],n=[],o={},s={};const i=dx(e);try{t=i.reduce((r,l)=>{const{display:a,data:u}=l,p=[u.x[0],u.x[u.x.length-1]];return s[l.id]=p,a.isVisible&&(r=r.concat(p)),r},[]),n=i.reduce((r,l)=>{const{display:a}=l,u=wn(l),p=xt(u.y);return o[l.id]=p,a.isVisible&&(r=r.concat(p)),r},[])}catch(r){console.log(r)}return{xDomain:xt(t),yDomain:xt(n),yDomains:o,xDomains:s}}function px(e){let t=[],n=[],o={},s={};const{activeTab:i,tabActiveSpectrum:r,data:l}=e,a=i.split(",");try{t=l.reduce((h,m)=>{var g;return Xs(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minX,m.data.maxX])),h},[]),n=l.reduce((h,m)=>{var g;return Xs(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minY,m.data.maxY])),h},[])}catch(h){console.log(h)}const u=a.map(h=>{var m;return(m=r[h])==null?void 0:m.id}),p=l.reduce((h,m)=>u.includes(m.id)&&m.info.dimension===1?h.concat(m):h.concat([]),[]);try{s=p.reduce((h,m)=>{const{x:g}=m.data,x=[g[0],g[g.length-1]];return h[m.id]=x,h},{}),o=p.reduce((h,m)=>{const g=xt(m.data.re);return h[m.id]=g,h},{})}catch(h){console.log(h)}return{xDomain:xt(t),yDomain:xt(n),yDomains:o,xDomains:s}}function se(e,t){const{yDomain:n={isChanged:!0,isShared:!0}}=t||{};let o;e.activeTab&&(e.displayerMode===B.DM_1D?o=Qa(e):o=px(e),e.xDomain=o.xDomain,e.xDomains=o.xDomains,e.originDomain=o,n.isChanged?(e.yDomain=o.yDomain,e.displayerMode===B.DM_1D&&n.isShared?e.yDomains=Object.keys(o.yDomains).reduce((s,i)=>(s[i]=o.yDomain,s),{}):e.yDomains=o.yDomains):e.originDomain=S(b({},e.originDomain),{xDomain:o.xDomain,xDomains:o.xDomains}))}function hx(e){const{integrals:t,ranges:n}=e;let o=Number.NEGATIVE_INFINITY;for(const s of t.values)o=Math.max(o,s.absolute);for(const s of n.values)o=Math.max(o,s.absolute);return[0,o]}function ts(e,t){var n;for(const o of Array.isArray(t)?t:[t])((n=o==null?void 0:o.info)==null?void 0:n.dimension)===1&&(e.integralsYDomains[o.id]=hx(o))}function fx(e,t){e.originDomain=t}function mx(e,t){e.xDomain=t}function gx(e,t){e.yDomain=t}function xx(e){const{xDomain:t,yDomain:n,xDomains:o,yDomains:s}=e.originDomain;e.xDomain=t,e.yDomain=n,e.xDomains=o,e.yDomains=s}function tt(e){var n;const t=e.data.filter(o=>e.xDomains[o.id]&&At(o.info.nucleus)===e.activeTab);e.mode=(n=t[0])!=null&&n.info.isFid?"LTR":"RTL"}function bx(e,t){const{activeSpectrum:n,data:o,xDomain:s,molecules:i,activeTab:r}=e;if(n!=null&&n.id){const{index:l}=n,a=o[l],[u,p]=s,h=Ze(a.data.x,u),m=Ze(a.data.x,p),g=b({factorStd:8,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},t);Oa(a,S(b({},g),{windowFromIndex:h,windowToIndex:m,molecules:i,nucleus:r})),Tt(e),ts(e,a)}}function yx(e){const t={factorStd:8,minMaxRatio:.05,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},{data:n,activeTab:o,molecules:s}=e;for(const i of n)i.info.dimension===1&&(Oa(i,{peakPicking:t,molecules:s,nucleus:o}),Tt(e))}function lo(e,t,n){return e.data[t].ranges.values.findIndex(o=>o.id===n)}function vx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{id:s=null,assignmentData:i}=t.payload.data,r=e.data[o];if(s){const l=lo(e,o,s);zt(i,[r.ranges.values[l]]),r.ranges.values.splice(l,1)}else zt(i,r.ranges.values),r.ranges.values=[];Et(r),Tt(e)}}function Cx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:r}=t.payload.data,l=lo(n,s,i.id),a=e.data[s].ranges.values[l];a!=null&&a.signals&&(a.signals[i.tableMetaInfo.signalIndex].kind=r,a.kind=eo.includes(r)?Ue.signal:Ue.mixed,Et(e.data[s]),Tt(e))}}function kx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{editedRowData:i,assignmentData:r}=t.payload;e.toolOptions.data.tempRange=null;const l=jn(i);delete l.tableMetaInfo,delete l.rowKey,zt(r,[l]);const a=lo(n,s,l.id);e.data[s].ranges.values[a]=l,Et(e.data[s]),Tt(e)}}function ec(e,t){const{spectrum:n,range:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:r=!0}=t.payload;if(n&&o){const l=e.data.find(h=>h.id===n.id),a=l.ranges.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),p=jn(Ve(o),"signal",{signalIndex:u});r===!0&&zt(i,[{signals:[s]}]),p.signals.splice(u,1),l.ranges.values[a]=p,p.signals.length===0&&(zt(i,[p]),l.ranges.values.splice(a,1)),Tt(e)}}function tc(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{assignmentData:s,rangeData:i=null,signalIndex:r=-1}=t.payload;if(i){const l=lo(e,o,i.id),a=Ve(e.data[o].ranges.values[l]);let u={},p=i.id;i&&r===-1?u=jn(a,"range"):(u=jn(a,"signal",{signalIndex:r}),p=i.signals[r].id),zt(s,[{id:p}]),e.data[o].ranges.values[l]=u}else{const l=e.data[o].ranges.values.map(a=>jn(a));e.data[o].ranges.values=l,zt(s,l)}}}function Sx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{rangeData:s,diaIDs:i,signalIndex:r,nbAtoms:l}=t.payload,a=(h,m=0)=>h+m,u=lo(e,o,s.id),p=e.data[o].ranges.values[u];r===void 0?(p.diaIDs=i,p.nbAtoms=a(l,p.nbAtoms)):(p.signals[r].diaIDs=i,p.signals[r].nbAtoms=a(l,p.signals[r].nbAtoms))}}function wx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum;cg(e.data[o],t.data)}}function Ex(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o!=null&&o.id){const{index:i}=o,r=n[i];xi(r.ranges,{options:t,nucleus:s}),Et(r,!0)}}function Ax(e,t){const{startX:n,endX:o}=t.payload,{activeSpectrum:s,activeTab:i,molecules:r}=e,l=Gt(e,{startX:n,endX:o});if(s!=null&&s.id){const{index:a}=s,[u,p]=l;ag(e.data[a],{from:u,to:p,nucleus:i,molecules:r}),Tt(e),ts(e,e.data[a])}}function Tx(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;ug(e.data[s],n)}}function Dx(e,t){var i;const{rangeID:n,signalID:o,value:s}=t.payload;if((i=e.activeSpectrum)!=null&&i.id){const{index:r}=e.activeSpectrum,l=dg(e.data[r],{rangeID:n,signalID:o,newSignalValue:s});Ae(e.data[r],[{name:no,options:l}]),An(e.data[r]),Tt(e),se(e)}}function Tt(e){ns(e)}function Rx(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;e.data[s].ranges.options.isSumConstant=!n}}function Px(e,t){e.toolOptions.data.tempRange=t.payload.tempRange}function Ix(e){e.toolOptions.data.showMultiplicityTrees=!e.toolOptions.data.showMultiplicityTrees}function Nx(e){e.toolOptions.data.showRangesIntegrals=!e.toolOptions.data.showRangesIntegrals}function Mx(e){e.toolOptions.data.showJGraph=!e.toolOptions.data.showJGraph}function _x(e,t){return e.signals?e.signals.reduce((n,o)=>o[t].nbAtoms?n+o[t].nbAtoms:n,0):0}function ws(e,t){e[t].nbAtoms=_x(e,t),e[t].nbAtoms===0&&delete e[t].nbAtoms}function Er(e,t){return delete e[t].diaIDs,delete e[t].nbAtoms,e.signals.forEach(n=>{delete n[t].diaIDs,delete n[t].nbAtoms}),e}function Fx(e){return e.kind===Ue.signal}function Lo(e,t,n,o){return t!==void 0&&o!==void 0?(t===!0?(delete e[o].diaIDs,delete e[o].nbAtoms):typeof n=="number"&&n!==-1&&e.signals[n]&&(delete e.signals[n][o].diaIDs,delete e.signals[n][o].nbAtoms),ws(e,o)):o!==void 0?(Er(e,o),ws(e,o)):["x","y"].forEach(s=>{Er(e,s),ws(e,s)}),e}function gn(e,t,n){const o=t.reduce((s,i)=>(i.id&&s.push(i.id),i.signals&&(s=s.concat(i.signals.map(r=>r.id,[]))),s),[]);n?e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:n}}):(e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"x"}}),e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"y"}}))}const Z={TOP_1D:"TOP_1D",LEFT_1D:"LEFT_1D",CENTER_2D:"CENTER_2D"};function Lx({width:e,height:t,margin:n}){return{CENTER_2D:{startX:n.left,startY:n.top,endX:e-n.right,endY:t-n.bottom},TOP_1D:{startX:n.left,startY:0,endX:e-n.right,endY:n.top},LEFT_1D:{startX:0,startY:n.top,endX:n.left,endY:t-n.bottom}}}function rn(e,t){for(const n of Object.keys(e))if(t.startX>=e[n].startX&&t.startX<=e[n].endX&&t.startY>=e[n].startY&&t.startY<=e[n].endY)return n;return null}function Ee(e){const{width:t,margin:n,xDomain:o}=e;return Je(o,[t-n.right,n.left])}function be(e,t=!1){const{height:n,margin:o,yDomain:s}=e;return Je(s,t?[n-o.bottom,o.top]:[o.top,n-o.bottom])}function xn(e,t,n=10){return Je(e,[t-n,n])}function Ox(e,t){const{startX:n,startY:o,endX:s,endY:i}=t,r=Ee(e),l=be(e),a=n*1e6>s*1e6?s:n,u=n*1e6>s*1e6?n:s,p=o*1e6>i*1e6?i:o,h=o*1e6>i*1e6?o:i,m=l.invert(p),g=r.invert(a),x=l.invert(h),y=r.invert(u);return{fromX:g,fromY:m,toX:y,toY:x}}function $x(e,t){e.toolOptions.data.zonesNoiseFactor=t.payload}function Hx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,s=Ox(e,t),i=e.data[o],r=Ig(oe(i),{selectedZone:s,thresholdFactor:e.toolOptions.data.zonesNoiseFactor,convolutionByFFT:!1});i.zones.values=i.zones.values.concat(r),dt(e)}}function zx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,[s,i]=e.xDomain,[r,l]=e.yDomain;t.selectedZone={fromX:s,toX:i,fromY:r,toY:l};const a=e.data[o],u=ja(oe(a),t);a.zones.values=a.zones.values.concat(u),dt(e)}}function Vx(e){for(const t of e.data)if(t.info.dimension===2){const{minX:n,maxX:o,minY:s,maxY:i}=t.data,r={selectedZone:{fromX:n,toX:o,fromY:s,toY:i},thresholdFactor:1},l=ja(oe(t),r);t.zones.values=t.zones.values.concat(l),dt(e)}}function jx(e,t){var s;const{zoneID:n,signal:o}=t.payload;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum,{xShift:r,yShift:l}=Dg(e.data[i],n,o);let a=[];r!==0&&a.push({name:pi,options:r}),l!==0&&a.push({name:hi,options:l}),Ae(e.data[i],a),ro(e.data[i]),se(e),dt(e)}}function ao(e,t,n){return e.data[t].zones.values.findIndex(o=>o.id===n)}function Bx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:r}=t.payload,l=ao(n,s,i.id),a=e.data[s].zones.values[l];a.signals[i.tableMetaInfo.signalIndex].kind=r,a.kind=eo.includes(r)?Ue.signal:Ue.mixed,dt(e)}}function Xx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{id:i,assignmentData:r}=t.payload;if(i){const l=e.data[s].zones.values.find(u=>u.id===i);gn(r,[l||{}]);const a=ao(n,s,i);e.data[s].zones.values.splice(a,1)}else gn(r,e.data[s].zones.values),e.data[s].zones.values=[];dt(e)}}function nc(e,t){const{spectrum:n,zone:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:r=!0}=t.payload;if(n&&o){const l=e.data.find(h=>h.id===n.id),a=l.zones.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),p=Lo(Ve(o),!1,u,void 0);r===!0&&gn(i,[{signals:[s]}],void 0),p.signals.splice(u,1),l.zones.values[a]=p,p.signals.length===0&&(gn(i,[p]),l.zones.values.splice(a,1)),dt(e)}}function Yx(e,t){const{spectrum:n,zone:o,signal:s,pathLength:i}=t.payload;if(n&&o){const r=e.data.find(p=>p.id===n.id),l=r.zones.values.findIndex(p=>p.id===o.id),a=o.signals.findIndex(p=>p.id===s.id),u=Lo(Ve(o),!1,a,void 0);u.signals[a].j=S(b({},u.signals[a].j),{pathLength:i}),r.zones.values[l]=u,dt(e)}}function oc(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{zoneData:i=null,assignmentData:r,isOnZoneLevel:l=void 0,signalIndex:a=-1,axis:u=void 0}=t.payload;if(i){const p=ao(n,s,i.id),h=Ve(e.data[s].zones.values[p]),m=Lo(h,l,a,u);gn(r,[{id:i.signals[a].id}],u),e.data[s].zones.values[p]=m}else{const p=e.data[s].zones.values.map(h=>Lo(h));e.data[s].zones.values=p,gn(r,p)}}}function Gx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{zoneData:i,diaIDs:r,axis:l,signalIndex:a,nbAtoms:u}=t.payload,p=(g,x=0)=>g+x,h=ao(n,s,i.id),m=e.data[s].zones.values[h];a===void 0?(m[l].diaIDs=r,m[l].nbAtoms=p(u,m[l].nbAtoms)):(m.signals[a][l].diaIDs=r,m.signals[a][l].nbAtoms=p(u,m.signals[a][l].nbAtoms))}}function Wx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{editedRowData:i}=t.payload;delete i.tableMetaInfo;const r=ao(n,s,i.id);e.data[s].zones.values[r]=i,i.signals&&i.signals.forEach(l=>{var a;yp(e.correlations.values,l.id,(a=l.j)==null?void 0:a.pathLength)}),dt(e)}}function dt(e){ns(e)}function ns(e){const{data:t,correlations:n}=e;e.correlations=Jn(t,S(b({},n.options),{values:Ve(n.values)}))}function Zx(e,t){const n=oe(e),{data:o,correlations:s}=n,{mf:i}=t;(s.options.mf===""||s.options.mf!==i)&&(e.correlations=Jn(o,S(b({},s.options),{mf:i,values:Ve(s.values)})))}function Ux(e,t){const n=oe(e),{data:o,correlations:s}=n,{tolerance:i}=t;e.correlations=Jn(o,S(b({},s.options),{tolerance:i,values:Ve(s.values)}))}function Kx(e,t){const n=oe(e),{correlations:o}=n,{id:s,correlation:i,options:r}=t;e.correlations=Il(o,s,i),r&&(e.correlations=S(b({},e.correlations),{options:b(b({},e.correlations.options),r)})),ns(e)}function qx(e,t){const{correlations:n,options:o}=t,s=oe(e);let i=Ve(s.correlations);n.forEach(r=>{i=Il(i,r.id,r)}),e.correlations=i,o&&(e.correlations=S(b({},e.correlations),{options:b(b({},e.correlations.options),o)})),ns(e)}function Jx(e,t){const{correlation:n,assignmentData:o}=t;n.link.forEach(s=>{const i=Re(e.data,s.experimentID,!1);if(i){if(i.info.dimension===1){const r=vi(i,s.signal.id),l=Ja(i,s.signal.id);ec(e,{payload:{spectrum:i,range:r,signal:l,assignmentData:o}})}else if(i.info.dimension===2){const r=_o(i,s.signal.id),l=Gn(i,s.signal.id);nc(e,{payload:{spectrum:i,zone:r,signal:l,assignmentData:o}})}}})}const Bn={HORIZONTAL:"HORIZONTAL",VERTICAL:"VERTICAL",STEP_HORIZONTAL:"STEP_HORIZONTAL",FULL:"FULL"};function go(e,t,n={}){const{factor:o=1,invert:s=!1}=n,r=(Math.abs(e.deltaY)<100?e.deltaY*100:e.deltaY)*(s?-.001:.001)*o,l=r<0?-1/(r-1):1+r,[a,u]=t;return[a*l,u*l]}function Ot(e,t={}){const{height:n,margin:o,activeSpectrum:s}=e,{scale:i=1,spectrumID:r=null}=t;if(s===null&&r===null){const{shareYDomain:l,yDomain:a,yDomains:u}=e.originDomain;e.yDomains=Object.keys(e.yDomains).reduce((p,h)=>{const m=Je(l?a:u[h],[n-o.bottom,o.top]),[g,x]=l?a:u[h],k=Math.max(Math.abs(x),Math.abs(g))===x?0:g,C=pr.translate(0,(Math.sign(k)>=0,m(k))).scale(i).translate(0,-m(0)).rescaleY(m).domain();return p[h]=C,p},{})}else{const l=r||(s==null?void 0:s.id);if(l){const a=Je(e.originDomain.yDomains[l],[n-o.bottom,o.top]),p=pr.translate(0,a(0)).scale(i).translate(0,-a(0)).rescaleY(a).domain();e.yDomains=S(b({},e.yDomains),{[l]:p})}}}function Qx(e,t){const{ranges:n,info:o}=t.payload,s=Pa(n,o,e.usedColors);e.data.push(s),se(e,{yDomain:{isShared:!1}}),Ot(e,{scale:.8,spectrumID:s.id})}function eb(e,t){e.width=t}function tb(e,t,n){e.width=t,e.height=n}function ki(e,t){return t.filter(n=>At(n.info.nucleus)===e)}function os(e,t){!e[t]&&!Array.isArray(e[t])&&(e[t]=[]);const n=nb(e[t]),o=ob(e[t]),s=sb(e[t]),i=()=>e[t]=[];return{historyStack:e[t],push:n,pop:o,getLast:s,clear:i}}function nb(e){return t=>{e.push(t)}}function ob(e){return()=>e.pop()?e[e.length-1]:null}function sb(e){return()=>e.length===0?null:e[e.length-1]}function Ar(e){const t=e.split(",");return t.reduce((n,o)=>{const s=t.length===2?100:0;return n+=Number(o.replace(/\D/g,""))+s,n},0)}function ss(e){return(t,n=!1)=>{const o=t.reduce((s,i)=>{const r=i.info[e];return s[r]=(s[r]||[]).concat(i),s},{});return n?Object.keys(o).sort((s,i)=>Ar(s)-Ar(i)).reduce((s,i)=>(s[i]=o[i],s),{}):o}}function yt(e,t){var n;if(e.data&&e.data.length>0){let o=[];switch(["auto-check","stack"].includes(t.align||"")&&(o=e.data.filter(s=>s.info.nucleus===(t==null?void 0:t.activeTab)?t.activeTab:e.activeTab&&s.info.dimension===1)),t.align){case"auto-check":case"bottom":case"center":{if(t.align==="center"||t.align==="auto-check"&&((n=o[0])==null?void 0:n.info.isFid)&&!o.some(s=>s.info.isFid===!1)){const s=e.height/2;e.verticalAlign.align="center",e.verticalAlign.verticalShift=s}else e.verticalAlign.align="bottom",e.verticalAlign.verticalShift=$a;break}case"stack":{e.verticalAlign.align="stack";const s=o.filter(i=>i.display.isVisible===!0);e.verticalAlign.verticalShift=Math.floor((e.height-e.margin.bottom)/(s.length+2));break}default:return}}}function ib(e,t){const{activeTab:n,data:o,activeSpectrum:s,zoom:i,xDomain:r,xDomains:l,yDomain:a,yDomains:u,originDomain:p,margin:h,displayerMode:m,tabActiveSpectrum:g}=e;if(n){const y=ss("nucleus")(o),k=m===B.DM_2D?y[n].reduce((v,C)=>(v[C.id]=C.processingController.getLevel(),v),{}):null;e.keysPreferences[t]={activeTab:n,activeSpectrum:s,displayerMode:m,tabActiveSpectrum:g,zoom:i,xDomain:r,xDomains:l,yDomain:a,yDomains:u,originDomain:p,level:k,margin:h,data:y[n].reduce((v,C)=>(v[C.id]={display:{color:C.display.color,isVisible:C.display.isVisible,isPeaksMarkersVisible:C.display.isPeaksMarkersVisible}},v),{})}}}function rb(e,t){const n=e.keysPreferences[t];if(n)if(e.activeTab=n.activeTab,e.data.forEach((o,s)=>{At(o.info.nucleus)===n.activeTab&&(e.data[s].display=Object.assign(Ve(o.display),n.data[o.id].display))}),e.displayerMode=n.displayerMode,e.tabActiveSpectrum=n.tabActiveSpectrum,e.activeSpectrum=n.activeSpectrum,e.margin=n.margin,se(e),e.xDomain=n.xDomain,e.xDomains=n.xDomains,e.yDomain=n.yDomain,e.originDomain=n.originDomain,e.yDomains=n.yDomains,e.displayerMode===B.DM_2D)for(const o of Object.keys(n.level)){const{levelPositive:s,levelNegative:i}=n.level[o],r=e.data.findIndex(a=>a.id===o),l=e.data[r].processingController;l.setLevel(s,i),e.contours[o]=l.drawContours()}else e.zoom=n.zoom}function lb(e){const{activeSpectrum:t,data:n}=e;if(t){const o=n[t==null?void 0:t.index].data,s=vp(o.re),i=o.re.findIndex(r=>r===s);return{xValue:o.x[i],yValue:s,index:i}}}function ab(e,t){var o;const n=(o=e.activeSpectrum)==null?void 0:o.id;if(t===Ht){const s=is(e,Ht,{rollback:!0,searchBy:"name",returnCurrentDatum:!0});e.tempData=Nl(e).data,s&&(e.tempData[s==null?void 0:s.index]=s==null?void 0:s.datum);const{xValue:i,index:r}=lb(e)||{xValue:0,index:0};e.toolOptions.data.pivot={value:i,index:r}}else if(e.toolOptions.selectedTool===_.phaseCorrection.id){e.toolOptions.data.activeFilterID=null;const s=e.data.findIndex(i=>i.id===n);e.data[s].data=e.tempData[s].data}}function Oo(e,t=!0){e.toolOptions.data.tempRange=null,Si(e,null),t&&(e.toolOptions.selectedTool=_.zoom.id),e.toolOptions.data.baseLineZones=[],e.toolOptions.data.activeFilterID&&is(e),e.tempData&&(e.tempData=null,se(e))}function Ke(e,t=!1){(e.toolOptions.selectedTool&&_[e.toolOptions.selectedTool].isFilter||!t)&&Oo(e)}function cb(e,t){const{selectedTool:n}=t.payload;(e==null?void 0:e.data.length)>0&&(n?(n===_.editRange.id?e.toolOptions.data.tempRange=t.payload.tempRange:e.toolOptions.data.tempRange=null,n!==e.toolOptions.selectedTool&&Oo(e,!1),e.toolOptions.selectedTool=n,_[n].hasOptionPanel&&Si(e,n),_[n].isFilter&&ab(e,n)):Oo(e,!1),sc(e))}function Si(e,t){e.toolOptions.selectedOptionPanel=t}function ub(e){const t=["stack","center"].includes(e.verticalAlign.align)?"bottom":"center";yt(e,{align:t})}function db(e){const t=e.verticalAlign.align==="stack"?"bottom":"stack";yt(e,{align:t})}function pb(e,{from:t,to:n}){const o=Vt(e);let s=o.invert(t);const i=o.invert(n);let r=[];s>i?r=[i,s]:r=[s,i];const l=e.toolOptions.data.baseLineZones.slice();l.push({id:U(),from:r[0],to:r[1]}),e.toolOptions.data.baseLineZones=l}function hb(e,t){const n=oe(e);e.toolOptions.data.baseLineZones=n.toolOptions.data.baseLineZones.baseLineZones.filter(o=>o.id!==t)}function fb(e){if(e.activeSpectrum!=null){const{index:t}=e.activeSpectrum;e.data[t].display.isRealSpectrumVisible=!e.data[t].display.isRealSpectrumVisible,se(e)}}function mb(e,t){const n=e.displayerMode===B.DM_2D,o=Vt(e),s=n?be(e):Fo(e),i=o.invert(t.startX),r=o.invert(t.endX),l=s.invert(t.startY),a=s.invert(t.endY),u=i>r?[r,i]:[i,r],p=l>a?[a,l]:[l,a],h=os(e.zoom.history,e.activeTab);if(e.displayerMode===B.DM_2D){switch(t.trackID){case Z.CENTER_2D:e.xDomain=u,e.yDomain=p;break;case Z.TOP_1D:e.xDomain=u;break;case Z.LEFT_1D:e.yDomain=p;break}h&&h.push({xDomain:e.xDomain,yDomain:e.yDomain})}else e.xDomain=u,h&&h.push({xDomain:u,yDomain:p})}function gb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const s=Vt(e).invert(t),i=e.data[e.activeSpectrum.index],r=Ze(i.data.x,s);e.toolOptions.data.pivot={value:s,index:r}}}function xb(e,t){const n=e.tabActiveSpectrum[e.activeTab.split(",")[t]];return n!=null&&n.id?n.id:null}function bb(e,t){const{event:n,trackID:o,selectedTool:s}=t,{activeSpectrum:i,toolOptions:{data:{showRangesIntegrals:r}},displayerMode:l}=e;if(l===B.DM_2D){const a=o===Z.TOP_1D?0:o===Z.LEFT_1D?1:null;if(a!==null){const u=xb(e,a);if(u){const p=e.yDomains[u];e.yDomains[u]=go(n,p)}}}else if(i!=null&&i.id)if((r||s===_.integral.id)&&n.shiftKey){const a=e.integralsYDomains[i==null?void 0:i.id];e.integralsYDomains[i==null?void 0:i.id]=go(n,a)}else{const a=e.yDomains[i==null?void 0:i.id];e.yDomains[i==null?void 0:i.id]=go(n,a)}else{const a=ki(e.activeTab,e.data);for(const u of a){const p=e.yDomains[u.id];e.yDomains[u.id]=go(n,p)}}}function yb(e,t){if((e==null?void 0:e.data.length)>0){const{zoomType:n,trackID:o}=t,s=os(e.zoom.history,e.activeTab);if(e.displayerMode===B.DM_1D)switch(n){case Bn.HORIZONTAL:{e.xDomain=e.originDomain.xDomain,s.clear();break}case Bn.VERTICAL:Ot(e,{scale:.8});break;case Bn.STEP_HORIZONTAL:{const i=s.pop();e.xDomain=i?i.xDomain:e.originDomain.xDomain,Ot(e,{scale:.8});break}default:{e.xDomain=e.originDomain.xDomain,Ot(e,{scale:.8});break}}else{const{xDomain:i,yDomain:r,yDomains:l}=e.originDomain;if([Z.TOP_1D,Z.LEFT_1D,Z.CENTER_2D].includes(o)){const a=s.pop();e.xDomain=a?a.xDomain:i,e.yDomain=a?a.yDomain:r}else s.clear(),e.xDomain=i,e.yDomain=r,e.yDomains=l}}}function Tr(e,t){const n=e.activeTab.split(","),o=e.tabActiveSpectrum[n[t]];return(o==null?void 0:o.id)&&!e.data[o.index].info.isFid}function sc(e){if(e.displayerMode===B.DM_2D&&e.toolOptions.selectedTool!==_.slicingTool.id){const t=Tr(e,0)?Pt["2D"].top:Pt["1D"].top,n=Tr(e,1)?Pt["2D"].left:Pt["1D"].left;e.margin=S(b({},Pt["2D"]),{top:t,left:n})}else e.toolOptions.selectedTool===_.slicingTool.id?e.margin=Pt["2D"]:e.displayerMode===B.DM_1D&&(e.margin=Pt["1D"])}function vb(e,t){if(e.displayerMode===B.DM_2D){let n={};for(const o of t[e.activeTab])n[o.id]=o.processingController.drawContours();e.contours=n}}function Cb(e,t){e.displayerMode=t&&t.some(n=>n.info.dimension===2)?B.DM_2D:B.DM_1D}function kb(e,t){let n=[];const o={},s=Object.keys(t).sort((i,r)=>i.split(",").length>r.split(",").length?-1:1);for(let i of s){const r=t[i],l=i.split(",").length;if(l===2&&n.push(i),r.length===1){const a=e.data.findIndex(u=>u.id===r[0].id);o[i]={id:r[0].id,index:a}}else{const a=t[i],u=a.length;if(u>=2){const p=a.filter(h=>!h.info.isFid);if(p.length>0&&(l===2||l===1&&u!==p.length)){const h=e.data.findIndex(m=>m.id===p[0].id);o[i]={id:p[0].id,index:h}}else o[i]=null}else o[i]=null}}return e.tabActiveSpectrum=o,n}function ic(e,t,n,o=!1){const s=Object.keys(t).sort((i,r)=>i.split(",").length>r.split(",").length?-1:1);if(JSON.stringify(s)!==JSON.stringify(Object.keys(e.tabActiveSpectrum))||o){const i=kb(e,t);i.length>0&&n==null?(e.activeSpectrum=e.tabActiveSpectrum[i[0]],e.activeTab=i[0]):(e.activeSpectrum=n&&e.tabActiveSpectrum[n],e.activeTab=n)}else e.activeTab=n,e.activeSpectrum=e.tabActiveSpectrum[n];Cb(e,t[e.activeTab]),sc(e)}function nt(e,t){const{tab:n=null,refreshActiveTab:o=!1,domainOptions:s={}}=t||{},r=ss("nucleus")(e.data),l=Object.keys(r),a=!n||!l.includes(n||"")?l[0]:n;ic(e,r,a,o),Oo(e),vb(e,r),se(e,s),ts(e,r[a]);const p=os(e.zoom.history,e.activeTab).getLast();p&&(e.xDomain=p.xDomain,e.yDomain=p.yDomain),tt(e)}function Sb(e,t){t&&nt(e,{tab:t})}function wb(e,{deltaY:t,shiftKey:n}){var o;try{if((o=e.activeSpectrum)!=null&&o.id){const{index:s,id:i}=e.activeSpectrum,r=e.data[s].processingController;n?r.shiftWheel(t):r.wheel(t);const l=Object.freeze(r.drawContours());e.contours[i]=l}}catch(s){console.log(s)}}function Eb(e){e.displayerMode===B.DM_1D&&(e.originDomain.shareYDomain=!1,Ot(e,{scale:.8}))}function Ab(e){e.originDomain.shareYDomain=!0,e.yDomains=e.originDomain.yDomains,e.yDomain=e.originDomain.yDomain,Ot(e,{scale:.8})}function Tb(e,t){var n,o;if((n=e.activeSpectrum)!=null&&n.id){const s=(o=e.activeSpectrum)==null?void 0:o.index;Ae(e.data[s],[{name:no,options:t}]),An(e.data[s]),Ke(e),se(e)}}function Db(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const o=e.activeSpectrum.index,s=[{name:ui,options:t.zeroFillingSize},{name:ga,options:t.lineBroadeningValue}];Ae(e.data[o],s),Ke(e),se(e),tt(e)}}function Rb(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum;Ae(e.data[n],[{name:ha,options:{}}]),Ke(e),yt(e,{align:"bottom"}),se(e,{yDomain:{isChanged:!0}}),tt(e)}}function Pb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{ph0:s,ph1:i}=t;Ae(e.data[o],[{name:Ht,options:{ph0:s,ph1:i}}]),Ke(e),e.tempData=null,se(e)}}function Ib(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum;Ae(e.data[n],[{name:na,options:{}}]),Ke(e),e.tempData=null,se(e)}}function Nb(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum,{ph0:o,ph1:s}=sa(e.data[n]);Ae(e.data[n],[{name:Ht,options:{ph0:o,ph1:s}}]),Ke(e),e.tempData=null,se(e)}}function Mb(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,{data:{x:o,re:s,im:i},info:r}=e.data[n],{ph0:l,ph1:a}=t;let u={data:{x:o,re:s,im:i},info:r};Ca(u,{ph0:l,ph1:a});const{im:p,re:h}=u.data;e.tempData[n].data.im=p,e.tempData[n].data.re=h}}function _b(e,t,n){var o,s,i;if((o=e.activeSpectrum)!=null&&o.id){const{index:r}=e.activeSpectrum;Ea(e.data[r],t,n),((s=e.data[r].info)==null?void 0:s.dimension)===1?An(e.data[r]):((i=e.data[r].info)==null?void 0:i.dimension)===2&&ro(e.data[r]),Ke(e),se(e),tt(e);const a=os(e.zoom.history,e.activeTab).getLast();a&&(e.xDomain=a.xDomain,e.yDomain=a.yDomain)}}function Fb(e,t){var o,s,i;const n=t.payload.id;if((o=e.activeSpectrum)!=null&&o.id){const{index:r}=e.activeSpectrum;fi(e.data[r],n),((s=e.data[r].info)==null?void 0:s.dimension)===1?An(e.data[r]):((i=e.data[r].info)==null?void 0:i.dimension)===2&&ro(e.data[r]),Ke(e),se(e),tt(e)}}function Lb(e,t){var o,s;const n=t.payload.filterType;if(e.activeTab){for(const i of e.data)At((o=i==null?void 0:i.info)==null?void 0:o.nucleus)===e.activeTab&&(((s=i.filters)==null?void 0:s.filter(l=>l.name===n))||[]).forEach(l=>{var a,u;fi(i,l.id),((a=i.info)==null?void 0:a.dimension)===1?An(i):((u=i.info)==null?void 0:u.dimension)===2&&ro(i)});Ke(e),se(e),tt(e)}}function Ob(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum;Ae(e.data[o],[{name:ra,options:b({zones:e.toolOptions.data.baseLineZones},t.options)}]),e.toolOptions.data.baseLineZones=[];const s=e.xDomain.slice();Ke(e),se(e),e.xDomain=s}}function is(e,t=null,n={},o=null){var p,h,m,g;const{updateDomain:s=!0,rollback:i=!1,searchBy:r="id",returnCurrentDatum:l=!1}=n;let a=null;const u=o||e.activeSpectrum;if(u!=null&&u.id){const x=u.index,y=e.data[x];if(t&&e.toolOptions.data.activeFilterID!==t){const k=y.filters.findIndex(C=>C[r]===t);let v=[];if(k!==-1&&(v=y.filters.slice(0,i?k:k+1),v.length>1?e.toolOptions.data.activeFilterID=(p=y.filters[i?k-1:k])==null?void 0:p.id:e.toolOptions.data.activeFilterID=null,mn(y,v),l)){const{name:C,value:E}=y.filters[k],T=Nl(e).data[x];((h=T.info)==null?void 0:h.dimension)===1&&Ae(T,[{name:C,options:E}]),a={datum:T,index:x}}}else e.toolOptions.data.activeFilterID=null,mn(y);((m=y.info)==null?void 0:m.dimension)===1?An(y):((g=y.info)==null?void 0:g.dimension)===2&&ro(y),s&&(se(e),tt(e))}if(l)return a}function $b(e,t){is(e,t.id)}function Hb(e,t){var o;const n=ki(e.activeTab,e.data);if(n&&n.length>0&&Array.isArray(t.payload)){const s=((o=n[0].filters.find(i=>i.name===to))==null?void 0:o.value)||[];for(const i of n){const r=t.payload.map(l=>l.name===Yn?S(b({},l),{options:S(b({},l.options),{exclusions:s})}):l);Ae(i,r)}}se(e)}function zb(e,t){var r,l;const{from:n,to:o}=t.payload,s=Gt(e,{startX:n,endX:o});let i;if((r=e.activeSpectrum)!=null&&r.id){const a=(l=e.activeSpectrum)==null?void 0:l.index;i=[e.data[a]]}else i=ki(e.activeTab,e.data);for(const a of i)Ae(a,[{name:to,options:[{id:U(),from:s[0],to:s[1]}]}]);se(e)}function Vb(e,t){const{id:n,spectrumID:o}=t.payload,s=e.data.findIndex(r=>r.id===o),i=e.data[s].filters.find(r=>r.name===to);i&&(i.value.length===1?fi(e.data[s],i.id):(i.value=i.value.filter(r=>r.id!==n),mn(e.data[s])))}function jb(e,t){e.overDisplayer=t.payload}function Bb(e){const{past:t,present:n,future:o}=e.history,s=t[t.length-1],i=t.slice(0,t.length-1),r=[n,...o],l=r.length!==0,a=t.length!==0,u=Qa(e.data),p={past:i,present:s,future:r,hasRedo:l,hasUndo:a};e.xDomain=u.xDomain,e.yDomain=u.yDomain,e.originDomain=u,e.history=p}function Xb(e){const{history:t}=e,n=t.future.shift();t.past.push(t.present),t.present=n,t.hasUndo=!0,t.hasRedo=t.future.length>0,se(e.data)}function Yb(e,t){e.history={past:[],present:t,future:[],hasRedo:!1,hasUndo:!1}}function Gb(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o!=null&&o.id){const{index:i}=o,r=n[i];xi(r.integrals,{options:t,nucleus:s}),En(r,!0)}}function Wb(e,t){const{startX:n,endX:o}=t,{data:s,molecules:i,activeTab:r,activeSpectrum:l}=e,[a,u]=Gt(e,{startX:n,endX:o});if(l!=null&&l.id){const p=s[l.index],{x:h,re:m}=p.data,g=Yt(p),x={id:U(),originFrom:a-g,originTo:u-g,from:a,to:u,absolute:Cn({x:h,y:m},{from:a,to:u,reverse:!0}),kind:"signal"};p.integrals.values.push(x),p.integrals.options=gi(p.integrals.options,{molecules:i,nucleus:r}),En(p),ts(e,p)}}function Zb(e,t){if(e.activeSpectrum){const n=oe(e),{index:o}=e.activeSpectrum,{integralID:s}=t,i=e.data[o];if(s==null)i.integrals.values=[];else{const r=n.data[o].integrals.values.findIndex(l=>l.id===s);i.integrals.values.splice(r,1),En(i)}}}function Dr(e,t){var s;const n=oe(e),o=t.payload.data;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum,r=n.data[i],l=e.data[i],{x:a,re:u}=r.data,p=r.integrals.values.findIndex(h=>h.id===o.id);p!==-1&&(l.integrals.values[p]=S(b({originFrom:o.from,originTo:o.to},o),{absolute:Cn({x:a,y:u},{from:o.from,to:o.to,reverse:!0})}),En(l))}}function Ub(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;eg(e.data[s],n)}}function Kb(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;e.data[s].integrals.options.isSumConstant=!n}}function qb(e=[]){const t=[];for(const n of e){const s=Bt.Molecule.fromMolfile(n.molfile).getFragments();for(let i of s)t.push(Mo({molfile:i.toMolfileV3()}))}return t}function rc(e,t){let o=Bt.Molecule.fromMolfile(t).getFragments();for(let s of o)e.push(Mo({molfile:s.toMolfileV3()}))}function Jb(e,t,n){let s=Bt.Molecule.fromMolfile(t).getFragments();if(s.length>1){e=e.filter(i=>i.key!==n);for(let i of s)e.push(Mo({molfile:i.toMolfileV3()}))}else if(s.length===1){const i=s[0],r=Mo({molfile:i.toMolfileV3(),key:n});let l=e.findIndex(a=>a.key===n);e.splice(l,1,r)}}const wi="INITIATE",Qb="SAVE_DATA_AS_JSON",bn="LOAD_JSON_FILE",$o="LOAD_JCAMP_FILE",Wn="LOAD_NMREDATA_FILE",Ys="LOAD_MOL_FILE",Ho="LOAD_ZIP_FILE",Gs="LOAD_JDF_FILE",lc="ADD_PEAK",ac="ADD_PEAKS",rs="DELETE_PEAK_NOTATION",Ei="SHIFT_SPECTRUM",ls="SET_X_DOMAIN",Ai="SET_Y_DOMAIN",cc="SET_ORIGINAL_DOMAIN",uc="SET_WIDTH",Ti="SET_DIMENSIONS",co="SET_SELECTED_TOOL",dc="SET_SELECTED_FILTER",pc="CHANGE_SPECTRUM_SETTING",yn="FULL_ZOOM_OUT",Zn="CHANGE_VISIBILITY",Di="CHANGE_PEAKS_MARKERS_VISIBILITY",zo="CHANGE_ACTIVE_SPECTRUM",hc="CHANGE_SPECTRUM_COLOR",fc="ADD_INTEGRAL",as="DELETE_INTEGRAL",Ri="TOGGLE_REAL_IMAGINARY_VISIBILITY",cs="SET_ZOOM",Pi="ADD_MOLECULE",Ii="SET_MOLECULE",mc="DELETE_MOLECULE",Ws="SET_CORRELATION",gc="SET_CORRELATIONS",xc="DELETE_CORRELATION",bc="SET_CORRELATIONS_MF",yc="SET_CORRELATIONS_TOLERANCE",Ni="DELETE_SPECTRA",Mi="CHANGE_SPECTRUM_DISPLAY_VIEW_MODE",vc="RESIZE_INTEGRAL",us="BRUSH_END",Cc="RESET_X_DOMAIN",kc="ENABLE_FILTER",Sc="DELETE_FILTER",wc="DELETE_SPECTRA_FILTER",Ec="APPLY_ZERO_FILLING_FILTER",Ac="APPLY_FFT_FILTER",_i="CALCULATE_MANUAL_PHASE_CORRECTION_FILTER",Tc="APPLY_MANUAL_PHASE_CORRECTION_FILTER",Dc="APPLY_AUTO_PHASE_CORRECTION_FILTER",Rc="APPLY_ABSOLUTE_FILTER",Fi="SET_VERTICAL_INDICATOR_X_POSITION",Pc="AUTO_PEAK_PICKING",Ic="AUTO_RANGES_DETECTION",Nc="AUTO_ZONES_DETECTION",ds="DELETE_RANGE",Mc="DELETE_1D_SIGNAL",_c="SET_SELECTED_OPTIONS_PANEL",vt="SET_LOADING_FLAG",ze="RESET_SELECTED_TOOL",Li="SET_SPECTRUMS_VERTICAL_AlIGN",ey="SAVE_AS_SVG",Fc="CHANGE_INTEGRAL_DATA",Oi="SET_ACTIVE_TAB",Lc="CHANGE_INTEGRAL_SUM",Oc="ADD_BASE_LINE_ZONE",$c="DELETE_BASE_LINE_ZONE",Hc="APPLY_BASE_LINE_CORRECTION_FILTER",Vo="SET_KEY_PREFERENCES",$i="APPLY_KEY_PREFERENCES",zc="RESIZE_RANGE",Vc="CHANGE_RANGE_SUM",jc="ADD_RANGE",Bc="SET_2D_LEVEL",Xc="ADD_2D_ZONE",ps="DELETE_2D_ZONE",Yc="DELETE_2D_SIGNAL",Gc="SET_2D_SIGNAL_PATH_LENGTH",Wc="ADD_MISSING_PROJECTION",Zc="SET_FILTER_SNAPSHOT",Uc="CHANGE_RANGE_RELATIVE",Kc="CHANGE_RANGE_SIGNAL_VALUE",qc="CHANGE_RANGE_SIGNAL_KIND",Jc="SAVE_EDITED_RANGE",Qc="UNLINK_RANGE",eu="SET_DIAID_RANGE",tu="CHANGE_INTEGRAL_RELATIVE",nu="ANALYZE_SPECTRA",Hi="DELETE_ANALYZE_SPECTRA_RANGE",ou="RESIZE_ANALYZE_SPECTRA_RANGE",su="SET_ANALYZE_SPECTRA_COLUMNS",iu="FILTER_SPECTRA_COLUMN",ru="ALIGN_SPECTRA",Zs="CHANGE_ZONE_SIGNAL_VALUE",lu="CHANGE_ZONE_SIGNAL_KIND",au="SAVE_EDITED_ZONE",cu="UNLINK_ZONE",uu="SET_DIAID_ZONE",hs="PREDICT_SPECTRA",du="SET_SPECTRA_SAME_TOP",pu="RESET_SPECTRA_SCALE",jo="SET_MOUSE_OVER_DISPLAYER",hu="APPLY_MULTIPLE_SPECTRA_FILTER",fu="ADD_EXCLUSION_ZONE",mu="DELETE_EXCLUSION_ZONE",gu="CHANGE_RANGES_SUM_FLAG",xu="CHANGE_INTEGRALS_SUM_FLAG",bu="CHANGE_ZONES_NOISE_FACTOR",yu="CHANGE_TEMP_RANGE",vu="SHOW_MULTIPLICTY_TREES",Cu="SHOW_RANGES_INTEGRALS",ku="AUTO_RANGES_SPECTRA_PICKING",Su="AUTO_ZONES_SPECTRA_PICKING",wu="GENERATE_SPECTRUM_FROM_PUBLICATION_STRING",Eu="RESURRECTING_SPECTRUM_FROM_RANGES",Au="SHOW_J_GRAPH";function ty(e,t){e.isLoading=t}function Tu(e,t){e.usedColors["1d"]=e.usedColors["1d"].concat(t["1d"]),e.usedColors["2d"]=e.usedColors["2d"].concat(t["2d"])}function zi(e,t){const{spectra:n,molecules:o,correlations:s,usedColors:i}=t||{spectra:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:[]};Tu(e,i),e.data=n,e.molecules=qb(o),!s||Object.keys(s).length===0?e.correlations=Jn([],{tolerance:qa}):e.correlations=ny(s)}function ny(e){return S(b({},e),{values:e.values.map(t=>{if(typeof t.hybridization=="string"){let n=[];if(t.hybridization.length>0){const o=t.hybridization.replaceAll("SP",""),s=Number(o);n.push(s)}t.hybridization=n}return t})})}function Du(e,t){const n={verticalAlign:null},{verticalAlign:o=null}=t||n;o?yt(e,{align:o}):yt(e,{align:"auto-check"})}function oy(e,t){var o;zi(e,t.payload);const n=((o=t.payload)==null?void 0:o.preferences)||{};nt(e,{tab:(n==null?void 0:n.activeTab)||""}),Du(e,t.payload),e.isLoading=!1}function sy(e,t){const{files:n}=t,o=Yg(n,e.usedColors);for(const s of o)e.data.push(s);nt(e),e.isLoading=!1}function iy(e,t){const{files:n}=t,o=Wa(n,e.usedColors);for(const s of o)e.data.push(s);nt(e),yt(e,{align:"auto-check"}),e.isLoading=!1}function ry(e,t){var s;const n=ji();zi(n,t.payload);const o=((s=t.payload)==null?void 0:s.preferences)||{};return nt(n,{tab:(o==null?void 0:o.activeTab)||""}),Du(n,o),n.width=e.width,n.height=e.height,n.isLoading=!1,n.actionType=bn,n}function ly(e,t){const{files:n}=t;for(let o of n)rc(e.molecules,o.binary.toString());e.isLoading=!1}function ay(e,t){const{data:n,usedColors:o}=t.payload;e.data=e.data.concat(n),Tu(e,o),nt(e),yt(e,{align:"auto-check"}),e.isLoading=!1}function cy(e,t){const n=ji();return zi(n,t.payload),nt(n),yt(n,{align:"auto-check"}),n.isLoading=!1,n.width=e.width,n.height=e.height,n.actionType=Wn,n}function uy(e,t){const n=e.molecules.length===0;rc(e.molecules,t);const o=e.molecules[0]||null;n&&o&&bi(e,o.key,o)}function dy(e,t,n){Jb(e.molecules,t,n);const o=e.molecules.findIndex(s=>s.key===n);bi(e,n,o!==-1?e.molecules[o]:e.molecules[0]||null)}function py(e,t){e.displayerMode===B.DM_1D&&tc(e,{payload:{assignmentData:t,rangeData:null}}),e.displayerMode===B.DM_2D&&oc(e,{payload:{assignmentData:t,zoneData:null}})}function hy(e,t){const{key:n,assignmentData:o}=t.payload;py(e,o);const s=e.molecules.findIndex(i=>i.key===n);e.molecules.splice(s,1),bi(e,n,e.molecules[0]||null)}function fy(e,t){const{data:n,options:o}=t.payload;if(!n)e.isLoading=!1;else{const s=mi(!1,e.usedColors["1d"]);for(const i of Kg(n,o,s))e.data.push(i),e.tabActiveSpectrum[At(i.info.nucleus)]={id:i.id,index:e.data.length-1};e.usedColors["1d"].push(s)}e.toolOptions.data.predictionIndex++,nt(e),e.isLoading=!1}function my(e,t){var o;const n=oe(e);if(((o=e.activeSpectrum)==null?void 0:o.id)&&n){const{index:s}=e.activeSpectrum,i=10,r=t.x-i,l=t.x+i,[a,u]=Gt(e,{startX:r,endX:l}),p=Ma(n.data[s].data,{from:a,to:u}),h=Yt(e.data[s]);if(p){const m={id:U(),originalX:p.x-h,x:p.x,y:p.y,width:0};e.data[s].peaks.values.push(m)}}}function gy(e,t){const n=oe(e);if(e.activeSpectrum){const{index:o}=e.activeSpectrum,s=n.data[o],{startX:i,endX:r}=t,[l,a]=Gt(e,{startX:i,endX:r});if(l!==a){const u=Ma(s.data,{from:l,to:a}),p=Yt(e.data[o]);if(u&&!s.peaks.values.some(h=>h.x===u.x)){const h={id:U(),originalX:u.x-p,x:u.x,y:u.y,width:0};e.data[o].peaks.values.push(h)}}}}function xy(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,o=oe(e);if(t==null)e.data[n].peaks.values=[];else{const s=o.data[n].peaks.values.findIndex(i=>i.id===t.id);e.data[n].peaks.values.splice(s,1)}}}function by(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){e.toolOptions.selectedTool=_.zoom.id,e.toolOptions.selectedOptionPanel=null;const{index:o}=e.activeSpectrum,s=e.data[o],[i,r]=e.xDomain,l=Ze(s.data.x,i),a=Ze(s.data.x,r),u=tg(e.data[o],S(b({},t),{windowFromIndex:l,windowToIndex:a}));s.peaks.values=s.peaks.values.concat(u)}}function yy(e){const t="a".charCodeAt(0),o="z".charCodeAt(0)-t+1;let s="";for(;e>=0;)s=String.fromCharCode(e%o+t)+s,e=Math.floor(e/o)-1;return s}var Bo=(e=>(e.NORMAL="NORMAL",e.FORMULA="FORMULA",e))(Bo||{}),Hn=(e=>(e.RELATIVE="relative",e.ABSOLUTE="absolute",e.MIN="min",e.MAX="max",e))(Hn||{});function vy(e,t,n,o){const s=o||yy(e[t].options.columnIndex).toUpperCase();return e[t].options.columns[s]=n,e[t].options.columnIndex++,s}function Cy(e,t){const{from:n,to:o,nucleus:s}=t;return e.reduce((i,r)=>{if(oo(r)&&r.info.nucleus===s&&!r.info.isFid){const l=pg(r,{from:n,to:o});i.sum+=l.absolute,i.values.push(b({SID:r.id},l))}return i},{values:[],sum:0})}function Ru(e,t){e[t]===void 0&&(e[t]={options:{sum:100,code:null,columns:{},columnIndex:0},values:{}})}function ky(e,t,n,o){e[t].options.columns[n].valueKey=o,e[t].values=Vi(e,t)}function Sy(e,t,{columns:n,code:o}){Ru(e,t),e[t].options.code=o,e[t].options.columns=Object.values(n).reduce((r,l)=>{const a=b({},l);return delete a.tempKey,r[l.tempKey]=a,r},{});const{columns:s}=e[t].options;let i=Object.entries(e[t].values).reduce((r,[l,a])=>(r[l]=Object.keys(n).reduce((u,p)=>{const h=n[p].tempKey;return a[p]&&(u[h]=a[p]),u},{}),r),{});i=Object.entries(i).reduce((r,l)=>(r[l[0]]=Object.keys(s).reduce((a,u)=>{const p=s[u].type==="FORMULA";return a[u]=p?{colKey:u,value:Iu(s,i[l[0]],s[u].formula)}:S(b({},l[1][u]),{colKey:u}),a},{}),r),{}),e[t].values=i}function wy(e,t){return Object.keys(t).reduce((n,o)=>(t[o].type==="FORMULA"&&(n[o]=S(b({colKey:o},e),{value:Iu(t,e,t[o].formula)})),n),{})}function Vi(e,t){const{columns:n}=e[t].options;return Object.entries(e[t].values).reduce((s,i)=>{const[r,l]=i;return s[r]=b(b({},l),wy(l,n)),s},{})}function Pu(e,t,n){const{from:o,to:s,nucleus:i,columnKey:r=null}=n;Ru(t,i);const l=vy(t,i,{type:"NORMAL",valueKey:"relative",from:o,to:s,index:1},r),{sum:a}=t[i].options,{values:u,sum:p}=Cy(e,{from:o,to:s,nucleus:i}),h=V(t,`${i}.values`,{});let m=u.reduce((g,x)=>{const y=p>0?a/p:0;return g[x.SID]=S(b({},h[x.SID]),{[l]:S(b({colKey:l},x),{relative:Math.abs(x.absolute)*y})}),g},{});t[i].values=m,t[i].values=Vi(t,i)}function Ey(e,t,n){const o=Object.entries(e[n].values).reduce((a,u)=>(delete u[1][t],u[1]&&Object.keys(u[1]).length>0&&(a[u[0]]=u[1]),a),{}),l=e[n].options.columns,{[t]:s}=l,i=G(l,[ar(t)]);Object.keys(e[n].options.columns).length===1&&(e[n].options.columnIndex=0),e[n].options.columns=i,e[n].values=o,e[n].values=Vi(e,n)}function Iu(e,t,n=""){const o=n.split(/\+|-|\*|\/|%|\(|\)/),s=[];for(const l of o){const a=l.trim();e[a]&&s.push(a)}const i=s.map(l=>t[l]?t[l][e[l].valueKey]:null);let r;try{r=new Function(...s,`return ${n}`)(...i)}catch(l){console.error(l),r=new Error(`Invalid Formula ( ${n} ) `)}return r}function Ay(e,t){if(e!=null&&e[t]){const{values:n,options:{columns:o}}=e[t];let s="";for(const i in o)s+=`${i}	`;s+=`
`;for(const i of Object.values(n)){for(const r in o)s+=`${i[r][o[r].valueKey]}	`;s+=`
`}return s}return null}function Ty(e,t){const[n,o]=Gt(e,t);Pu(e.data,e.spectraAnalysis,{from:n,to:o,nucleus:e.activeTab})}function Dy(e,t){const{colKey:n}=t;Ey(e.spectraAnalysis,n,e.activeTab)}function Ry(e,t){const{columnKey:n,from:o,to:s}=t.payload;Pu(e.data,e.spectraAnalysis,{from:o,to:s,nucleus:e.activeTab,columnKey:n})}function Py(e,t){const n=t.payload;Sy(e.spectraAnalysis,e.activeTab,n)}function Iy(e,t){const{columnKey:n,valueKey:o}=t.payload;ky(e.spectraAnalysis,e.activeTab,n,o)}function Nu(e){return!(e.display.isPositiveVisible===!1&&e.display.isNegativeVisible===!1)}function Es(e,t){e.info.dimension===2?(e.display.isPositiveVisible=t,e.display.isNegativeVisible=t,e.display.isVisible=Nu(e)):e.display.isVisible=t}function Ny(e,t){if(Array.isArray(t.id)){const n=t.id;if(n.length===0)for(const o of e.data)Es(o,!1);else for(const o of e.data)n.includes(o.id)?Es(o,!0):Es(o,!1)}else{const n=e.data.findIndex(o=>o.id===t.id);e.data[n].display[t.key]=t.value,e.data[n].info.dimension===2&&(e.data[n].display.isVisible=Nu(e.data[n]))}}function My(e,t){var n;for(let o of e.data)((n=o.info)==null?void 0:n.dimension)===1&&t.some(s=>s.id===o.id)?o.display.isPeaksMarkersVisible=!0:o.display.isPeaksMarkersVisible=!1}function _y(e,t){let n=!1;const o=e.activeSpectrum;if(t){const s=e.data.findIndex(r=>r.id===t.id),i=e.data.findIndex(r=>{var l;return r.id===((l=e.activeSpectrum)==null?void 0:l.id)});if(s!==-1){const r=e.data[s];r.display.isVisible=!0,i!==-1?n=e.data[i].info.isFid!==r.info.isFid:n=r.info.isFid||!1}t=S(b({},t),{index:s}),e.activeSpectrum=t,e.tabActiveSpectrum[e.activeTab]=t}else{if(o){const s=e.data.findIndex(i=>i.id===o.id);n=e.data[s].info.isFid}else n=!1;e.activeSpectrum=null,e.tabActiveSpectrum[e.activeTab]=null}_[e.toolOptions.selectedTool].isFilter&&(e.toolOptions.selectedTool=_.zoom.id,e.toolOptions.data.baseLineZones=[],e.toolOptions.selectedOptionPanel=null,e.tempData=null),e.toolOptions.data.activeFilterID?is(e,null,{},o):n&&(se(e),tt(e))}function Fy(e,{id:t,display:n}){const s=oe(e).data.findIndex(i=>i.id===t);s!==-1&&(e.data[s].display=n)}function Ly(e,{id:t,color:n,key:o}){const i=oe(e).data.findIndex(r=>r.id===t);i!==-1&&(e.data[i].display[o]=n)}function Oy(e,t){const n=oe(e);if(t.id){const o=n.data.findIndex(s=>s.id===t.id);e.data.splice(o,1)}else e.data=[];nt(e,{tab:e.activeTab,refreshActiveTab:!0})}function $y(e,t){var s;const n=oe(e),{nucleus:o}=t;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum;for(let a of o){const u=Cg(n.data[i],a,e.usedColors);e.data.push(u)}const l=ss("nucleus")(e.data);ic(e,l,e.activeTab,!0),se(e),tt(e)}}function Hy(e,t){var n,o;if(e.data&&e.data.length>0){for(let s of e.data)if(((n=s.info)==null?void 0:n.dimension)===1&&s.info.nucleus===e.activeTab&&!((o=s.info)!=null&&o.isFid)){const i=Jm(s,b({},t.payload));Ae(s,[{name:no,options:i}])}}se(e),tt(e)}function zy(e,t){const n=t.payload.publicationText,o=Km(n,e.usedColors);e.data.push(o),nt(e),Ot(e,{scale:.8,spectrumID:o.id})}const Vy="undo",jy="redo",By="reset",ji=()=>({actionType:"",data:[],contours:{},tempData:null,xDomain:[],yDomain:[],yDomains:{},xDomains:{},originDomain:{xDomain:[],yDomain:[],xDomains:{},yDomains:{},shareYDomain:!1},integralsYDomains:{},activeTab:"",width:0,height:0,margin:{top:10,right:20,bottom:70,left:0},activeSpectrum:null,mode:"RTL",molecules:[],verticalAlign:{align:"bottom",verticalShift:$a},history:{past:[],present:null,future:[],hasUndo:!1,hasRedo:!1},isLoading:!1,keysPreferences:{},displayerMode:B.DM_1D,tabActiveSpectrum:{},spectraAnalysis:{},correlations:{},displayerKey:"",zoom:{history:{}},overDisplayer:!1,toolOptions:{selectedTool:_.zoom.id,selectedOptionPanel:null,data:{baseLineZones:[],pivot:{value:0,index:0},zonesNoiseFactor:1,activeFilterID:null,tempRange:null,showMultiplicityTrees:!1,showRangesIntegrals:!0,showJGraph:!1,predictionIndex:0}},usedColors:{"1d":[],"2d":[]}}),Mu=ji();function Xy(e){const t=U(),n=Jn([],{tolerance:qa});return S(b({},e),{correlations:n,displayerKey:t,history:{}})}function Yy(e){const t={"1d":[],"2d":[]};return n=>{switch(n.type){case wi:{if(n.payload){const o=kr(n.payload),{spectra:s}=o,i=G(o,["spectra"]);Sr(s,t).then(r=>{n.payload=S(b({spectra:r},i),{usedColors:t}),e(n)})}break}case bn:{const s=JSON.parse(n.files[0].binary.toString()),i=kr(s);Sr(i.spectra,t).then(r=>{n.payload=Object.assign(i,{spectra:r,usedColors:t}),e(n)});break}case Ho:{for(let s of n.files)Ga({display:{name:s.name}},s.binary,t).then(i=>{n.payload={data:i,usedColors:t},e(n)});break}case Wn:{lx(n.file,t).then(s=>{n.payload=Object.assign(s,{usedColors:t}),e(n)});break}case hs:{const{mol:{molfile:s},options:i}=n.payload;Ug(s).then(r=>{n.payload={data:r,options:i},e(n)},()=>{e(n)});break}default:n.usedColors=t,e(n);break}}}function Gy(e,t){switch([bn,Wn].includes(t.type)||(e.actionType=t.type),t.type){case wi:return oy(e,t);case vt:return ty(e,t.isLoading);case bn:return ry(e,t);case $o:return iy(e,t);case Gs:return sy(e,t);case Ys:return ly(e,t);case Ho:return ay(e,t);case Wn:return cy(e,t);case lc:return my(e,t.mouseCoordinates);case ac:return gy(e,t);case rs:return xy(e,t.data);case fc:return Wb(e,t);case as:return Zb(e,t);case Fc:return Dr(e,t);case vc:return Dr(e,t);case Lc:return Gb(e,t.value);case xu:return Kb(e,t);case tu:return Ub(e,t);case cc:return fx(e,t.domain);case ls:return mx(e,t.xDomain);case Ai:return gx(e,t.yDomain);case uc:return eb(e,t.width);case Ti:return tb(e,t.width,t.height);case co:return cb(e,t);case ze:return Ke(e);case _c:return Si(e,t.selectedOptionPanel);case yn:return yb(e,t);case Ei:return Tb(e,t.shiftValue);case Ec:return Db(e,t.value);case Ac:return Rb(e);case Tc:return Pb(e,t.value);case Dc:return Nb(e);case Rc:return Ib(e);case _i:return Mb(e,t.value);case kc:return _b(e,t.id,t.checked);case Sc:return Fb(e,t);case wc:return Lb(e,t);case Zc:return $b(e,t);case hu:return Hb(e,t);case fu:return zb(e,t);case mu:return Vb(e,t);case Zn:return Ny(e,t);case Di:return My(e,t.data);case zo:return _y(e,t.data);case hc:return Ly(e,t.data);case pc:return Fy(e,t);case ru:return Hy(e,t);case Ni:return Oy(e,t);case Wc:return $y(e,t);case wu:return zy(e,t);case Ri:return fb(e);case cs:return bb(e,t);case du:return Eb(e);case pu:return Ab(e);case Mi:return db(e);case Pi:return uy(e,t.molfile);case Ii:return dy(e,t.molfile,t.key);case mc:return hy(e,t);case hs:return fy(e,t);case bc:return Zx(e,t.payload);case yc:return Ux(e,t.payload);case Ws:return Kx(e,t.payload);case gc:return qx(e,t.payload);case xc:return Jx(e,t.payload);case us:return mb(e,t);case Fi:return gb(e,t.position);case Li:return ub(e);case Pc:return by(e,t.options);case Nc:return zx(e,t.options);case bu:return $x(e,t);case Ic:return bx(e,t.options);case jc:return Ax(e,t);case ds:return vx(e,t);case Mc:return ec(e,t);case zc:return wx(e,t);case Vc:return Ex(e,t.value);case gu:return Rx(e,t);case Uc:return Tx(e,t);case Kc:return Dx(e,t);case qc:return Cx(e,t);case Jc:return kx(e,t);case Qc:return tc(e,t);case eu:return Sx(e,t);case yu:return Px(e,t);case vu:return Ix(e);case Cu:return Nx(e);case ku:return yx(e);case Au:return Mx(e);case Oi:return Sb(e,t.tab);case Oc:return pb(e,t.zone);case $c:return hb(e,t.id);case Hc:return Ob(e,t);case Vo:return ib(e,t.keyCode);case $i:return rb(e,t.keyCode);case Bc:return wb(e,t);case Xc:return Hx(e,t);case ps:return Xx(e,t);case Yc:return nc(e,t);case Gc:return Yx(e,t);case Cc:return xx(e);case Zs:return jx(e,t);case lu:return Bx(e,t);case cu:return oc(e,t);case uu:return Gx(e,t);case Su:return Vx(e);case au:return Wx(e,t);case nu:return Ty(e,t);case Hi:return Dy(e,t);case ou:return Ry(e,t);case su:return Py(e,t);case iu:return Iy(e,t);case Eu:return Qx(e,t);case Vy:return Bb(e);case jy:return Xb(e);case By:return Yb(e,t);case jo:return jb(e,t);default:return}}const Wy=Qs(Gy),_u=c.exports.createContext(Mu),Zy=_u.Provider;function $(){return c.exports.useContext(_u)}const Fu=c.exports.createContext({}),Uy=Fu.Provider;function Y(){return c.exports.useContext(Fu)}function ve(e){const{data:t,activeSpectrum:n}=$();return c.exports.useMemo(()=>t&&n&&n.id&&t.find(s=>s.id===n.id)||e,[n,t,e])}function Ky(){}const Lu=c.exports.createContext(Ky),qy=Lu.Provider;function Bi(){return c.exports.useContext(Lu)}const Jy=M`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  flex-direction: column;
  user-select: none;
  width: 100%;
  height: 100%;
  outline: 10px dashed rgba(0, 0, 0, 0.3);
  outline-offset: -10px;
  padding-left: 20px;
  padding-right: 20px;

  p {
    padding: 15px 30px;
    background-color:rgba(0, 0, 0, 0.5);
    border-radius: 39px;
    color: white;
    font-size: x-large;
    font-weight: bold;

  }
}
`;function Ou({isEmpty:e=!0,emptyText:t="Drag and drop here a JCAMP-DX, zipped Bruker folder, Jeol jdf or NMRium file",canOpenLoader:n=!0}){const o=Bi();return e?d("div",S(b({css:Jy},n&&{onClick:o}),{children:d("p",{children:t})})):null}const Qy=M`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  height: 100%;
  flex-direction: column;
  user-select: none;
  position: absolute;
  width: 100%;

  svg {
    animation-duration: 0.5s;
    animation-name: spinAnimation;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-direction: inherit;
    animation-timing-function: linear;
    animation-duration: 1s;
    width: 100px;
    height: 100px;
  }

  @keyframes spinAnimation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;function e0(){return w("div",{css:Qy,children:[d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[d("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),d("path",{d:"M520.5 78.1z"})]})}),d("p",{children:"Loading ..."})]})}function $u(){return f(e0,{})}const Hu=c.exports.createContext($u),t0=Hu.Provider;function zu({isLoading:e=!0,emptyText:t=void 0}){const{data:n}=$(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{let r=null;return e||(r=setTimeout(()=>{s(!0)},500)),()=>{clearTimeout(r)}},[e]);const i=c.exports.useContext(Hu);return F(c.exports.Fragment,{children:[e&&i(),o&&!e&&f(Ou,{isEmpty:n&&n.length===0,emptyText:t})]})}const n0={container:{transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",zoom:"100%"}},o0=[_.zoom.id,_.zeroFilling.id,_.peakPicking.id,_.integral.id,_.phaseCorrection.id,_.baseLineCorrection.id,_.rangesPicking.id,_.zone2D.id,_.slicingTool.id,_.editRange.id,_.multipleSpectraAnalysis.id,_.exclusionZones.id,_.databaseRangesSelection.id],De={X:1,Y:2,XY:3},s0={startX:0,startY:0};function Eo({brushType:e=De.XY,dimensionBorder:t=s0,width:n,height:o}){let{width:s,height:i,toolOptions:{selectedTool:r}}=$(),{startX:l,endX:a,startY:u,endY:p,step:h}=c.exports.useContext(wt);if(!o0.includes(r)||h!=="brushing"||!t||t.startX&&l<t.startX||t.startY&&u<t.startY||(t.endX&&Math.sign(a-l)===1?a>t.endX:a<t.startX)&&(t.endX&&t.endY&&Math.sign(p-u)===1?p>t.endY:p<t.startY))return null;s=n||s,i=o||i,a=t.endX&&a>t.endX?t.endX:t.startX&&a<t.startX?t.startX:a,p=t.endY&&p>t.endY?t.endY:t.startY&&p<t.startY?t.startY:p;const m=e===De.X||e===De.XY?(a-l)/s:1;l=e===De.X||e===De.XY?l:0;const g=e===De.Y||e===De.XY?(p-u)/i:1;return u=e===De.Y||e===De.XY?u:0,f("div",{style:S(b({},n0.container),{transform:`translate(${l}px, ${u}px) scale(${m},${g})`,willChange:"transform"}),children:f("svg",{width:s,height:i,children:f("rect",{x:"0",y:"0",width:s,height:i,fill:"gray",opacity:"0.2"})})})}const Rr={line:{stroke:"black",strokeOpacity:1,shapeRendering:"crispEdges",strokeWidth:"1",willChange:"transform"}},i0=[_.zoom.id,_.equalizerTool.id,_.baseLineCorrection.id,_.zone2D.id,_.slicingTool.id,_.integral.id,_.rangesPicking.id,_.editRange.id,_.multipleSpectraAnalysis.id,_.exclusionZones.id,_.databaseRangesSelection.id];function Vu(){const{height:e,width:t,margin:n,toolOptions:{selectedTool:o}}=$();let s=c.exports.useContext(ut);const i=c.exports.useContext(wt);return!i0.includes(o)||i.step==="brushing"||!s||s.x>t-n.right||s.y>e-n.bottom||!t||!e?null:f("div",{style:{willChange:"transform",cursor:"crosshair",transform:`translate(${-t+s.x}px, ${-e+s.y}px)`,position:"absolute",top:0,left:0,pointerEvents:"none",overflow:"visible",width:2*t,height:2*e},children:F("svg",{width:2*t,height:2*e,children:[f("line",{style:Rr.line,x1:t,y1:"0",x2:t,y2:e*2},"vertical_line"),f("line",{style:Rr.line,x1:"0",y1:e,x2:t*2,y2:e},"horizontal_line")]})},"crossLine")}function r0(e,t){const[n,o]=c.exports.useState(localStorage.getItem(e)||"{}");c.exports.useEffect(()=>{localStorage.setItem(e,n)},[e,n]);const s=c.exports.useCallback((i,r=null)=>{let l=JSON.parse(n);r?Cp(l,r,i):l=b(b({},l),i),o(JSON.stringify(l))},[n]);return c.exports.useMemo(()=>[t?V(JSON.parse(n),t,{}):JSON.parse(n),s],[t,s,n])}function Ct(e,t=!0){const n=localStorage.getItem(e);return n&&t?JSON.parse(n):n}function Tn(e,t){localStorage.setItem(e,t)}function Pr(e){localStorage.removeItem(e)}function pt(e,t,n=null){return V(e,t,n)}const jt={version:1,label:"Default workspace",display:{general:{disableMultipletAnalysis:!1,hideSetSumFromMolecule:!1,hideGeneralSettings:!1,experimentalFeatures:{display:!0}},panels:{spectraPanel:{display:!0,open:!0},informationPanel:{display:!0,open:!1},peaksPanel:{display:!0,open:!1},integralsPanel:{display:!0,open:!1},rangesPanel:{display:!0,open:!1},structuresPanel:{display:!0,open:!1},filtersPanel:{display:!0,open:!1},zonesPanel:{display:!0,open:!1},summaryPanel:{display:!1,open:!1},multipleSpectraAnalysisPanel:{display:!1,open:!1},databasePanel:{display:!1,open:!1},predictionPanel:{display:!1,open:!1}}},controllers:{dimmedSpectraTransparency:.1},formatting:{nucleus:[{key:"1H",name:"1H",ppm:"0.00",hz:"0.00"},{key:"13C",name:"13C",ppm:"0.00",hz:"0.00"},{key:"15N",name:"15N",ppm:"0.00",hz:"0.00"},{key:"19F",name:"19F",ppm:"0.00",hz:"0.00"},{key:"29Si",name:"29Si",ppm:"0.00",hz:"0.00"},{key:"31P",name:"31P",ppm:"0.00",hz:"0.00"}],nucleusByKey:{},panels:{}}},l0={version:1,label:"Exercise workspace",display:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0,hideGeneralSettings:!0,experimentalFeatures:{hidden:!0}},panels:{spectraPanel:{display:!0,open:!0},informationPanel:{hidden:!0},peaksPanel:{hidden:!0},integralsPanel:{display:!0},rangesPanel:{hidden:!0},structuresPanel:{hidden:!0},filtersPanel:{hidden:!0},zonesPanel:{hidden:!0},summaryPanel:{hidden:!0},multipleSpectraAnalysisPanel:{hidden:!0},databasePanel:{hidden:!0},predictionPanel:{hidden:!0}},toolBarButtons:{zoomTool:!0,zoomOutTool:!0,import:!1,exportAs:!1,spectraStackAlignments:!0,spectraCenterAlignments:!0,realImaginary:!1,peakTool:!0,integralTool:!0,zonePickingTool:!1,slicingTool:!1,autoRangesTool:!1,zeroFillingTool:!1,phaseCorrectionTool:!1,baseLineCorrectionTool:!1,FFTTool:!1,multipleSpectraAnalysisTool:!1,exclusionZonesTool:!1}},controllers:jt.controllers,formatting:jt.formatting},a0={version:1,label:"Prediction workspace",display:{general:{experimentalFeatures:{display:!1}},panels:{spectraPanel:{display:!0},rangesPanel:{display:!0},zonesPanel:{display:!0},predictionPanel:{display:!0,open:!0},informationPanel:{display:!1},peaksPanel:{display:!1},integralsPanel:{display:!1},structuresPanel:{display:!1},filtersPanel:{display:!1},summaryPanel:{display:!1},multipleSpectraAnalysisPanel:{display:!1},databasePanel:{display:!1}}},controllers:jt.controllers,formatting:jt.formatting},c0={version:1,label:"Process 1D workspace",display:{general:{disableMultipletAnalysis:!0},panels:{zonesPanel:{display:!0},summaryPanel:{display:!0},multipleSpectraAnalysisPanel:{display:!0,open:!0},spectraPanel:{display:!0,open:!0},informationPanel:{hidden:!0},peaksPanel:{hidden:!0},integralsPanel:{hidden:!0},rangesPanel:{hidden:!0},structuresPanel:{hidden:!0},filtersPanel:{hidden:!0},databasePanel:{hidden:!0},predictionPanel:{hidden:!0}},toolBarButtons:{import:!1,exportAs:!1,autoRangesTool:!1,multipleSpectraAnalysisTool:!1,exclusionZonesTool:!1}},controllers:jt.controllers,formatting:jt.formatting};var He={exercise:l0,default:jt,process1D:c0,prediction:a0};const ju=5,u0=[{key:"default",label:He.default.label},{key:"process1D",label:He.process1D.label},{key:"exercise",label:He.exercise.label},{key:"prediction",label:He.prediction.label}];function Xi(e){switch(e){case"exercise":return He.exercise;case"process1D":return He.process1D;case"prediction":return He.prediction;case"default":return He.default;default:return{}}}function uo(e){return e.workspaces[e.workspace.current||"default"]}const Bu={version:ju,workspaces:{},dispatch:()=>null,workspace:{current:"default",base:null}};function Xu(e){return JSON.parse(JSON.stringify(e),(t,n)=>{if((n==null?void 0:n.hidden)!==!0)return n})}function Ir(e){let t={};return JSON.parse(JSON.stringify(e),(n,o)=>{(o==null?void 0:o.hidden)!==!0&&n&&(t[n]=t[n]++||1)}),t}function d0(e,t){const n=Ir(e),o=Ir(t);if(Object.keys(o).length===0)return!1;for(const[s,i]of Object.entries(n))if(!o[s]||o[s]!==i)return!1;return!0}function p0(e){const t=uo(e);t.formatting.nucleus&&Array.isArray(t.formatting.nucleus)&&(t.formatting.nucleusByKey=t.formatting.nucleus.reduce((n,o)=>(n[o.name.toLowerCase()]=o,b({},n)),{}))}function h0(e){const t=Ct("nmr-local-storage-version",!1);let n=Ct("nmr-general-settings");return t&&(n==null?void 0:n.version)&&Pr("nmr-local-storage-version"),(!(n!=null&&n.version)||(n==null?void 0:n.version)!==ju)&&Pr("nmr-general-settings"),S(b({},e),{workspaces:(n==null?void 0:n.workspaces)||{default:He.default}})}function f0(e,t){if(t.payload){const o=Ct("nmr-general-settings"),n=t.payload,{dispatch:s,workspace:i}=n,r=G(n,["dispatch","workspace"]);e.workspace=!i&&(o==null?void 0:o.currentWorkspace)?{current:o.currentWorkspace,base:null}:{current:i||"default",base:i};const l=cn({},Xi(e.workspace.current),r),a=uo(e);if(He[e.workspace.current]&&(!a||(l==null?void 0:l.version)!==(a==null?void 0:a.version)||!d0(l.display,a==null?void 0:a.display))||!o){const{workspaces:u,version:p,workspace:{current:h}}=e||{},m=Xu(l.display),g=S(b({version:p},(o==null?void 0:o.currentWorkspace)&&{currentWorkspace:o==null?void 0:o.currentWorkspace}),{workspaces:S(b({},u),{[h]:S(b({},l),{display:m})})});e.workspaces[h]=cn({},a,l),Tn("nmr-general-settings",JSON.stringify(g))}else a.display=cn({},l.display,a.display);e.dispatch=s}}function m0(e,t){if(t.payload){const n=uo(e),{controllers:o,formatting:s,display:i}=t.payload;let r=Ct("nmr-general-settings");r.currentWorkspace=e.workspace.current,r.workspaces=S(b({},r.workspaces),{[e.workspace.current]:S(b({},r.workspaces[e.workspace.current]),{controllers:o,formatting:s,display:i})}),Tn("nmr-general-settings",JSON.stringify(r)),n.controllers=o,n.formatting=s,n.display=S(b({},n.display),{panels:i.panels,general:S(b({},n.display.general||{}),{experimentalFeatures:i.general.experimentalFeatures})}),p0(e)}}function g0(e,t){if(t.payload){const n=uo(e),{key:o,value:s}=t.payload;let i=Ct("nmr-general-settings");i.workspaces[e.workspace.current].formatting.panels[o]=s,Tn("nmr-general-settings",JSON.stringify(i)),n.formatting.panels[o]=s}}function x0(e){const t=uo(e);let n=Ct("nmr-general-settings");const o=Xi(e.workspace.current).display;n.workspaces[e.workspace.current]&&(n.workspaces[e.workspace.current].display=o,Tn("nmr-general-settings",JSON.stringify(n))),t.display=o}function b0(e,t){const n=t.payload.workspace;e.workspaces[n]||(e.workspaces[n]=Xi(n)),e.workspace.current=n}function y0(e,t){const{workspace:n,data:{display:o,controllers:s,formatting:i}}=t.payload,r={version:1,label:n,display:o,controllers:s,formatting:i},l=U(),a=Ct("nmr-general-settings");a.workspaces[l]=r,Tn("nmr-general-settings",JSON.stringify(a)),e.workspaces[l]=r,e.workspace.current=l}function v0(e,t){var r;const{workspace:n}=t.payload;n===e.workspace.current&&(e.workspace.current="default");let o=Ct("nmr-general-settings");const s=((r=oe(e))==null?void 0:r.workspaces)||{},i=Object.keys(s).reduce((l,a)=>(a!==n&&(l[a]=s[a]),l),{});e.workspaces=i,o.workspaces=Xu(i),Tn("nmr-general-settings",JSON.stringify(o))}function C0(e,t){switch(t.type){case"INIT_PREFERENCES":return f0(e,t);case"SET_PREFERENCES":return m0(e,t);case"SET_PANELS_PREFERENCES":return g0(e,t);case"RESET_PREFERENCES":return x0(e);case"SET_WORKSPACE":return b0(e,t);case"ADD_WORKSPACE":return y0(e,t);case"REMOVE_WORKSPACE":return v0(e,t);default:return e}}const k0=Qs(C0),Yu=c.exports.createContext(Bu),S0=Yu.Provider;function re(){const e=c.exports.useContext(Yu);if(!e)throw new Error("Preferences context was not found");const{workspace:t,workspaces:n,dispatch:o}=e;return c.exports.useMemo(()=>({current:n[t.current]||{},workspace:t,workspaces:n,dispatch:o}),[o,t,n])}function Gu(){const{workspaces:e}=re();return c.exports.useMemo(()=>{const t=Object.keys(e).reduce((n,o)=>(He[o]||n.push({key:o,label:e[o].label}),n),[]);return[...u0,...t]},[e])}class Wt{constructor(){this.array=[]}moveTo(t,n){this.array.push(`M ${t} ${n}`)}lineTo(t,n){this.array.push(`L ${t} ${n}`)}closePath(){this.array.push("Z")}toString(){return this.array.join(" ")}}function Nr({id:e,sign:t,color:n,datum:o}){const{margin:s,width:i,height:r,xDomain:l,yDomain:a,contours:u,activeSpectrum:p}=$(),h=re(),{xShift:m,yShift:g}=io(o),x=c.exports.useMemo(()=>p===null?!0:e===p.id,[p,e]);function y(v){const C=Ee({margin:s,width:i,xDomain:l}),E=be({margin:s,height:r,yDomain:a}),T=new Wt;for(const N of v)if(N.lines){const D=N.lines;if(D.length<1e6)for(let R=0;R<D.length;R+=4)T.moveTo(C(D[R]+m),E(D[R+1]+g)),T.lineTo(C(D[R+2]+m),E(D[R+3]+g))}else{T.moveTo(C(N[0].x+m),E(N[0].y+g));for(let D=1;D<N.length;D++)T.lineTo(C(N[D].x+m),E(N[D].y+g))}return T.closePath(),T.toString()}const k=c.exports.useMemo(()=>V(u,`${e}.${t}`,[]),[u,t,e]);return f("path",{fill:"none","data-test-id":"spectrum-line",stroke:n,strokeWidth:"1",style:{opacity:x?1:V(h.current,"controllers.dimmedSpectraTransparency",.1)},d:y(k)})}function w0({data:e,displayerKey:t}){return f("g",{clipPath:`url(#${t}clip-chart-2d)`,className:"contours",children:e==null?void 0:e.map((n,o)=>F("g",{children:[n.display.isPositiveVisible&&f(Nr,{id:n.id,sign:"positive",datum:n,color:n.display.positiveColor}),n.display.isNegativeVisible&&f(Nr,{id:n.id,sign:"negative",datum:n,color:n.display.negativeColor})]},`${n.id+o}`))})}const E0=c.exports.memo(w0);function A0(){const{data:e,displayerKey:t}=$(),n=c.exports.useMemo(()=>e.filter(o=>o.info.dimension===2&&o.info.isFt),[e]);return f(E0,{data:n,displayerKey:t})}var Dn=(e=>(e.XAxis="XAxis",e.YAxis="YAxis",e))(Dn||{});function po(e){const{width:t,xDomain:n,yDomain:o}=$();return c.exports.useCallback(s=>{const{x:i,y:r}=s,[l,a]=e==="XAxis"?n:o;return Ml({x:i,y:r},{from:l,to:a,nbPoints:t*4,optimize:!0})},[e,t,n,o])}function T0({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,yDomains:i,displayerKey:r}=$(),l=po(Dn.YAxis),a=o.left,u=c.exports.useMemo(()=>{if(t){const h=be({height:n,yDomain:[s[0],s[1]],margin:o}),m=xn(i[t.id],a,e),{x:g,re:x}=t.data,y=l({x:g,y:x}),k=new Wt;k.moveTo(m(y.y[y.y.length-1]),h(y.x.length-1));for(let v=y.x.length-2;v>=0;v--)k.lineTo(m(y.y[v]),h(y.x[v]));return k.toString()}else return},[a,o,e,n,t,l,s,i]),p=n-o.bottom-o.top;return!p||!a?null:F("svg",{viewBox:`0 0 ${a} ${p+o.top}`,width:a,height:p+o.top,children:[f("defs",{children:f("clipPath",{id:`${r}clip-left`,children:f("rect",{width:a,height:p,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${r}clip-left)`,children:f("path",{className:"line",stroke:"black",fill:"none",d:u})})]})}var D0=c.exports.memo(T0);function R0({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,yDomains:i,displayerKey:r}=$(),l=po(Dn.XAxis),a=o.top,u=c.exports.useMemo(()=>{if(t){const p=Ee({width:n,xDomain:s,margin:o}),h=xn(i[t.id],a,e),{x:m,re:g}=t.data,x=l({x:m,y:g}),y=new Wt;y.moveTo(p(x.x[0]),h(x.y[0]));for(let k=1;k<x.x.length;k++)y.lineTo(p(x.x[k]),h(x.y[k]));return y.toString()}else return},[a,e,o,t,n,s,l,i]);return!n||!a?null:F("svg",{viewBox:`0 0 ${n} ${a}`,width:n,height:a,children:[f("defs",{children:f("clipPath",{id:`${r}clip-top`,children:f("rect",{width:n-o.left-o.right,height:a,x:o.left,y:`${0}`})})}),f("g",{clipPath:`url(#${r}clip-top)`,children:f("path",{className:"line",stroke:"red",fill:"none",strokeWidth:"1px",d:u})})]})}var P0=c.exports.memo(R0);const I0=M`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,N0={right:100,top:0,left:0,bottom:0};function M0(e){const{show:t=!0,label:n="\u03B4 [ppm]",margin:o=N0}=e,s=$(),{xDomain:i,height:r,width:l,margin:a,tabActiveSpectrum:u,activeTab:p}=s,h=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!t)return;const m=Ee({width:l,margin:a,xDomain:i}),g=Ls(m).ticks(8).tickFormat(ei("0"));Do(h.current).call(g)},[p,r,a,a.bottom,a.left,a.right,a.top,t,u,l,i]),!l||!r?null:d(je,{children:t&&d("g",{className:"x",css:I0,transform:`translate(0,${r-(a.bottom+o.bottom)})`,ref:h,children:d("text",{fill:"#000",x:l-60,y:"20",dy:"0.71em",textAnchor:"end",children:n})})})}var _0=c.exports.memo(M0);const F0=M`
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: 'none';
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
  }
`,L0={right:50,top:0,bottom:0,left:0};function O0(e){const{show:t=!0,label:n="",margin:o=L0}=e,s=c.exports.useRef(null),i=$(),{yDomain:r,width:l,height:a,activeTab:u,tabActiveSpectrum:p,margin:h}=i;return c.exports.useEffect(()=>{if(!t||!r)return;const m=be({height:a,yDomain:r,margin:h}),g=kp(m).ticks(8).tickFormat(ei("0"));Do(s.current).call(g)},[t,r,u,p,a,h]),!l||!a?null:d(je,{children:d("g",{className:"y",css:F0,transform:`translate(${l-o.right})`,ref:s,children:d("text",{fill:"#000",x:-o.top,y:-(o.right-5),dy:"0.71em",transform:"rotate(-90)",textAnchor:"end",children:n})})})}var $0=c.exports.memo(O0);const Mr=M`
  stroke: lightgrey;
  opacity: 0.7;
`;function _r({axis:e,show:t}){const{data:n,activeTab:o,margin:s,width:i,height:r,xDomain:l,yDomain:a,displayerMode:u}=$(),[p,h]=c.exports.useState([]),m=Ee({margin:s,width:i,xDomain:l}),g=be({margin:s,height:r,yDomain:a});c.exports.useEffect(()=>{const y=o.split(","),k=e==="X"?y[0]:e==="Y"?y[1]:null;if(k!==null){const C=n.filter(E=>E.display.isVisible===!0&&E.info.nucleus===k).filter(oo).map(E=>E.ranges.values).flat().map(E=>E.signals.filter(T=>eo.some(N=>T.kind===N)).map(T=>T.delta)).flat();h(C)}else h([])},[o,e,n,u]);const x=c.exports.useMemo(()=>{if(t===!0&&p.length>0)return p.map((k,v)=>e==="X"?d("line",{css:Mr,x1:m(k),x2:m(k),y1:g(a[0]),y2:g(a[1])},`indicationLine${e}${v}`):e==="Y"?d("line",{css:Mr,x1:m(l[0]),x2:m(l[1]),y1:g(k),y2:g(k)},`indicationLine${e}${v}`):null)},[e,p,m,g,t,l,a]);return d("g",{children:x})}const xo=new Sp,de={on:(e,t)=>xo.on(e,t),once:(e,t)=>xo.once(e,t),off:(e,t)=>xo.off(e,t),emit:(e,t)=>xo.emit(e,t)};Object.freeze(de);const Wu=c.exports.createContext({});function H0(e,t){var n;switch(t.type){case"ADD":{const o=S(b({},e),{assignment:b({},e.assignment)});return o.assignment[t.payload.id[0]]===void 0&&(o.assignment[t.payload.id[0]]={}),o.assignment[t.payload.id[0]][t.payload.axis]===void 0&&(o.assignment[t.payload.id[0]][t.payload.axis]=[]),o.assignment[t.payload.id[0]][t.payload.axis].includes(t.payload.id[1])||o.assignment[t.payload.id[0]][t.payload.axis].push(t.payload.id[1]),o}case"REMOVE":{const o=S(b({},e),{assignment:b({},e.assignment)});return((n=o.assignment[t.payload.id[0]])==null?void 0:n[t.payload.axis])!==void 0&&(o.assignment[t.payload.id[0]][t.payload.axis]=o.assignment[t.payload.id[0]][t.payload.axis].filter(s=>s!==t.payload.id[1]),o.assignment[t.payload.id[0]][t.payload.axis].length===0&&delete o.assignment[t.payload.id[0]][t.payload.axis],Object.keys(o.assignment[t.payload.id[0]]).length===0&&delete o.assignment[t.payload.id[0]]),o}case"REMOVE_ALL":{const o=S(b({},e),{assignment:b({},e.assignment)});return t.payload.id.forEach(s=>{var i;((i=o.assignment[s])==null?void 0:i[t.payload.axis])!==void 0&&(delete o.assignment[s][t.payload.axis],Object.keys(o.assignment[s]).length===0&&delete o.assignment[s])}),o}case"SET_IS_ACTIVE":return S(b({},e),{isActive:t.payload.id!==void 0&&t.payload.axis!==void 0,activeID:t.payload.id,activeAxis:t.payload.axis});case"SET_IS_ON_HOVER":return S(b({},e),{isOnHover:t.payload.id!==void 0,onHoverID:t.payload.id,onHoverAxis:t.payload.axis});case"DELETE_RECORD":{const o=S(b({},e),{assignment:b({},e.assignment)});return delete o.assignment[t.payload.id],o.isActive&&o.activeID===t.payload.id&&(o.isActive=!1,o.activeID=void 0,o.activeAxis=void 0),o.isOnHover&&o.onHoverID===t.payload.id&&(o.isOnHover=!1,o.onHoverID=void 0,o.onHoverAxis=void 0),o}default:throw new Error(`unknown action type: ${t.type}`)}}const z0={assignment:{},isActive:!1,activeID:void 0,activeAxis:void 0,isOnHover:!1,onHoverID:void 0,onHoverAxis:void 0};function V0(e){const{spectraData:t}=e,[n,o]=c.exports.useReducer(H0,z0),s=c.exports.useMemo(()=>({assignment:n,dispatch:o}),[n]);function i(l,a){a.dispatch({type:"DELETE_RECORD",payload:{id:l.id}}),(l.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[l.id,u],axis:"x"}})),l.signals.forEach(u=>(u.diaIDs||[]).forEach(p=>a.dispatch({type:"ADD",payload:{id:[u.id,p],axis:"x"}})))}function r(l,a){a.dispatch({type:"DELETE_RECORD",payload:{id:l.id}}),(l.y.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[l.id,u],axis:"y"}})),(l.x.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[l.id,u],axis:"x"}})),l.signals.forEach(u=>{(u.x.diaIDs||[]).forEach(p=>a.dispatch({type:"ADD",payload:{id:[u.id,p],axis:"x"}})),(u.y.diaIDs||[]).forEach(p=>a.dispatch({type:"ADD",payload:{id:[u.id,p],axis:"y"}}))})}return c.exports.useEffect(()=>{t&&t.forEach(l=>{l.info.dimension===1?l.ranges.values.forEach(a=>i(a,s)):l.info.dimension===2&&l.zones.values.forEach(a=>r(a,s))})},[t]),f(Wu.Provider,{value:s,children:e.children})}function Be(){return c.exports.useContext(Wu)}function ct(e){const t=Be();if(typeof e!="string"&&typeof e!="number"||e==="")throw new Error("assignment key must be a non-empty string or number");const n=String(e),o=c.exports.useMemo(()=>t.assignment.isActive&&t.assignment.activeID===n,[t.assignment.activeID,t.assignment.isActive,n]),s=c.exports.useMemo(()=>o?t.assignment.activeAxis:void 0,[t.assignment.activeAxis,o]),i=c.exports.useMemo(()=>t.assignment.assignment[n]?t.assignment.assignment[n]:[],[t.assignment.assignment,n]),r=c.exports.useMemo(()=>t.assignment.isOnHover&&t.assignment.onHoverID===n,[t.assignment.isOnHover,t.assignment.onHoverID,n]),l=c.exports.useMemo(()=>r?t.assignment.onHoverAxis:void 0,[t.assignment.onHoverAxis,r]),a=c.exports.useCallback(v=>{t.dispatch({type:"ADD",payload:{id:[n,v],axis:s}})},[s,t,n]),u=c.exports.useCallback(v=>{t.dispatch({type:"REMOVE",payload:{id:[n,v],axis:s}})},[s,t,n]),p=c.exports.useCallback(v=>{t.dispatch({type:"REMOVE_ALL",payload:{id:[n],axis:v}})},[t,n]),h=c.exports.useCallback(v=>{i[s]===void 0||!i[s].includes(v)?a(v):u(v)},[s,a,i,u]),m=c.exports.useCallback(()=>{t.dispatch({type:"DELETE_RECORD",payload:{id:n}})},[t,n]),g=c.exports.useCallback(v=>{t.dispatch({type:"SET_IS_ACTIVE",payload:{id:o?void 0:n,axis:!o&&n!==void 0?v:void 0}})},[t,n,o]),x=c.exports.useCallback((v,C)=>{v==="enter"?t.dispatch({type:"SET_IS_ON_HOVER",payload:{id:n,axis:n!==void 0?C:void 0}}):v==="leave"&&t.dispatch({type:"SET_IS_ON_HOVER",payload:{}})},[t,n]),y=c.exports.useCallback(v=>x("enter",v),[x]),k=c.exports.useCallback(v=>x("leave",v),[x]);return{id:n,isActive:o,activeAxis:s,assigned:i,add:a,remove:u,removeAll:p,toggle:h,deleteRecord:m,onClick:g,isOnHover:r,onHoverAxis:l,onMouseEnter:y,onMouseLeave:k}}function Yi(e,t){return t.filter(n=>Object.keys(e.assignment).filter(o=>o===n))}var ue=(e=>(e.PEAK="PEAK",e.INTEGRAL="INTEGRAL",e.SIGNAL="SIGNAL",e.RANGE="RANGE",e.ZONE="ZONE",e.EXCLUSION_ZONE="EXCLUSION_ZONE",e.DATABASE="DATABASE",e.UNKNOWN="UNKNOWN",e))(ue||{});const Zu={highlight:{highlights:{},highlighted:[],highlightedPermanently:[],sourceData:null},dispatch:()=>null,remove:()=>null},Uu=c.exports.createContext(Zu);function j0(e,t){switch(t.type){case"SHOW":{const{convertedHighlights:n,sourceData:o}=t.payload,{type:s="UNKNOWN",extra:i=null}=o||{},r=S(b({},e),{highlights:b({},e.highlights),sourceData:{type:s,extra:i}});for(const l of n)l in r.highlights||(r.highlights[l]=1);return r.highlighted=Object.keys(r.highlights),r}case"HIDE":{const{convertedHighlights:n}=t.payload,o=S(b({},e),{highlights:b({},e.highlights),sourceData:null});for(const s of n)s in o.highlights&&delete o.highlights[s];return o.highlighted=Object.keys(o.highlights),o}case"SET_PERMANENT":return S(b({},e),{highlightedPermanently:t.payload});case"UNSET_PERMANENT":return S(b({},e),{highlightedPermanently:[]});default:throw new Error(`unknown action type: ${t.type}`)}}function B0(e){const[t,n]=c.exports.useReducer(j0,Zu.highlight),o=c.exports.useMemo(()=>{function s(){n({type:"HIDE",payload:{convertedHighlights:t.highlighted}})}return{highlight:t,dispatch:n,remove:s}},[t]);return f(Uu.Provider,{value:o,children:e.children})}function Rn(){return c.exports.useContext(Uu)}function ie(e,t=null){if(!Array.isArray(e))throw new Error("highlights must be an array");const{dispatch:n,highlight:o}=Rn(),s=c.exports.useMemo(()=>{const m=[];for(const g of e){if(typeof g!="string"&&typeof g!="number")throw new Error("highlight key must be a string or number");g!==""&&m.push(String(g))}return m},[e]);c.exports.useEffect(()=>()=>{n({type:"HIDE",payload:{convertedHighlights:[]}}),n({type:"UNSET_PERMANENT"})},[n]);const i=c.exports.useMemo(()=>o.highlighted.some(m=>s.includes(m)),[s,o.highlighted]),r=c.exports.useMemo(()=>o.highlightedPermanently.some(m=>s.includes(m)),[s,o.highlightedPermanently]),l=c.exports.useCallback(()=>{n({type:"SHOW",payload:{convertedHighlights:s,sourceData:t}})},[n,s,t]),a=c.exports.useCallback(()=>{n({type:"HIDE",payload:{convertedHighlights:s}})},[s,n]),u=c.exports.useCallback(m=>{n({type:"SHOW",payload:{convertedHighlights:[],id:m}})},[n]),p=c.exports.useCallback(m=>{n({type:"HIDE",payload:{convertedHighlights:[],id:m}})},[n]),h=c.exports.useCallback(m=>{m&&(m.preventDefault(),m.stopPropagation()),n(r?{type:"UNSET_PERMANENT"}:{type:"SET_PERMANENT",payload:s})},[s,n,r]);return c.exports.useMemo(()=>({isActive:i,onHover:{onMouseEnter:l,onMouseLeave:a},onClick:h,show:l,hide:a,isActivePermanently:r,click:h,add:u,remove:p}),[u,h,a,i,r,p,l])}const Ku="___";function Ce(e,t){return`${e}${Ku}${t}`}const Fr=M`
  stroke: green;
  stroke-width: 2;
  opacity: 0.5;
`;function Lr({delta:e,axis:t,show:n}){const{margin:o,width:s,height:i,xDomain:r,yDomain:l}=$(),a=Ee({margin:o,width:s,xDomain:r}),u=be({margin:o,height:i,yDomain:l}),p=c.exports.useMemo(()=>n===!0?t==="X"?d("line",{css:Fr,x1:a(e),x2:a(e),y1:u(l[0]),y2:u(l[1])},`signalLine_${e}_X`):t==="Y"?d("line",{css:Fr,x1:a(r[0]),x2:a(r[1]),y1:u(e),y2:u(e)},`signalLine_${e}_Y`):null:null,[t,e,a,u,n,r,l]);return d("g",{children:p})}function X0({signal:e}){var r,l;const t=c.exports.useMemo(()=>[Ce(e.id,"Crosshair"),Ce(e.id,"Crosshair_X")],[e.id]),n=c.exports.useMemo(()=>[Ce(e.id,"Crosshair"),Ce(e.id,"Crosshair_Y")],[e.id]),o=ie(t),s=ie(n),i=ie([e.id]);return!((r=e==null?void 0:e.x)!=null&&r.delta)||!((l=e==null?void 0:e.y)!=null&&l.delta)?null:w("g",{children:[d(Lr,{delta:e.x.delta,axis:"X",show:o.isActive||i.isActive}),d(Lr,{delta:e.y.delta,axis:"Y",show:s.isActive||i.isActive})]})}const Y0=c.exports.memo(({signal:e,isVisible:t})=>{const{margin:n,width:o,height:s,xDomain:i,yDomain:r}=$(),l=Ee({margin:n,width:o,xDomain:i}),a=be({margin:n,height:s,yDomain:r}),u=c.exports.useCallback(y=>[y].concat(Ce(y,"X"),Ce(y,"Y")),[]),p=ct(e.id),h=ie(u(p.id)),m=Rn(),[g,x]=c.exports.useState(!1);return c.exports.useEffect(()=>{m.highlight.highlighted.some(y=>u(e.id).includes(y))||p.isActive?x(!0):x(!1)},[p.isActive,u,m.highlight.highlighted,e.id]),e?w("g",{className:"zone-signal",onMouseEnter:()=>{p.onMouseEnter(void 0),h.show()},onMouseLeave:()=>{p.onMouseLeave(void 0),h.hide()},children:[t.signals&&w("g",{children:[d("circle",{cx:l(e.x.delta||0),cy:a(e.y.delta||0),r:g?6:4,fill:g?"green":"darkgreen"},e.id),d(X0,{signal:e})]}),d("g",{className:"zone-signal-peak",children:t.peaks&&e.peaks&&e.peaks.map((y,k)=>d("circle",{cx:l(y.x),cy:a(y.y),r:2,fill:"black"},`${e.id+k}`))})]}):null}),G0=M`
  pointer-events: bounding-box;
  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */

  .delete-button {
    visibility: hidden;
  }
`,W0=M`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  .Integral-area {
    fill: #ff6f0057;
  }
  .delete-button {
    visibility: visible;
    cursor: pointer;
  }
`,Z0=({zoneData:e,isVisible:t})=>{const{x:n,y:o,id:s,signals:i}=e,r=ct(s),l=ie([r.id],{type:ue.ZONE,extra:{id:r.id}}),{margin:a,width:u,height:p,xDomain:h,yDomain:m}=$(),g=Ee({margin:a,width:u,xDomain:h}),x=be({margin:a,height:p,yDomain:m}),{from:y=0,to:k=0}=n,{from:v=0,to:C=0}=o,[E,T]=c.exports.useState(!1);return c.exports.useEffect(()=>{T(!Fx(e))},[e]),w("g",{css:l.isActive||r.isActive?W0:G0,onMouseEnter:()=>{r.onMouseEnter(void 0),l.show()},onMouseLeave:()=>{r.onMouseLeave(void 0),l.hide()},children:[t.zones&&d("g",{transform:`translate(${g(k)},${x(v)})`,children:d("rect",{x:"0",width:g(y)-g(k),height:x(C)-x(v),className:"Integral-area",fill:"#0000000f",stroke:E?"#343a40":"darkgreen",strokeWidth:E?"0":"1"})}),i.map((N,D)=>d(Y0,{signal:N,isVisible:t},`${s+D}`))]},s)};function U0({zones:e,display:t,displayerKey:n}){const[o,s]=c.exports.useState({zones:!0,signals:!0,peaks:!0});return c.exports.useEffect(()=>{de.on("onZonesVisibilityChange",({key:i})=>{s(r=>S(b({},r),{[i]:!r[i]}))})},[]),f("g",{clipPath:`url(#${n}clip-chart-2d)`,className:"2D-Zones",children:t.isVisible&&e.values.map(i=>f("g",{className:"zone",children:f(Z0,{zoneData:i,isVisible:o})},i.id))})}const K0=c.exports.memo(U0),q0={zones:{},display:{}};function J0(){const{displayerKey:e}=$(),{zones:t,display:n}=ve(q0);return f(K0,{zones:t,display:n,displayerKey:e})}function Q0({spectra:e,width:t,height:n,margin:o,displayerKey:s}){return F("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-2d`,children:f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top})})}),f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top,stroke:"black",strokeWidth:"1",fill:"transparent"}),(e==null?void 0:e[0])&&f(P0,{data:e[0]}),(e==null?void 0:e[1])&&f(D0,{data:e[1]}),f(A0,{}),f(J0,{}),f(_r,{axis:"X",show:!0}),f(_r,{axis:"Y",show:!0}),F("g",{className:"container",style:{pointerEvents:"none"},children:[f(_0,{}),f($0,{})]})]})}const ev=c.exports.memo(Q0);function tv({spectra:e}){const{width:t,height:n,margin:o,displayerKey:s}=$();return f(ev,{spectra:e,width:t,height:n,margin:o,displayerKey:s})}function Ge(e,t,n="",o=""){return n+_l(e).format(t)+o}function Xe(e){const t=re(),n=V(t.current,"formatting.nucleusByKey",{ppm:"0.0",hz:"0.0"});return c.exports.useMemo(()=>{function o(s){return(i,r="ppm",l="",a="")=>l+_l(Number(i)).format(V(n,`${s.toLowerCase()}.${r}`,"0.0"))+a}if(!e)return()=>{};if(typeof e=="string")return o(e);if(Array.isArray(e))return e.map(s=>o(s));throw Error("nuclus must be string or array of string")},[e,n])}function Or(e){e=String(e).trim();const t=e.lastIndexOf(".");return t>0?e.substr(t).split("").length-1:0}const $r=M`
  display: flex;
  flex-firection: row;
  align-items: center;
  pointer-events: bounding-box;
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  background-color: #f7f7f7;
  height: 30px;
  padding: 6px;
  color: #8d0018;
  position: absolute;
  width: 100%;
  bottom: 0;
  div {
    margin: 0px 10px;
    display: inline-block;

    .label {
      font-size: 12px;
      color: #4d4d4d;
      font-weight: bold;
    }
    .value {
      font-weight: bold;
      font-size: 14px;
    }
    .unit {
      font-weight: bold;
      font-size: 10px;
    }
  }
`;function nv({layout:e,data1D:t}){const n=c.exports.useContext(ut),{startX:o,endX:s,startY:i,endY:r,step:l}=c.exports.useContext(wt),{margin:a,width:u,height:p,activeSpectrum:h,xDomain:m,yDomain:g,yDomains:x,activeTab:y,data:k,toolOptions:{selectedTool:v}}=$(),C=n&&rn(e,{startX:n.x,startY:n.y}),E=y.split(","),[T,N]=Xe(E),D=c.exports.useMemo(()=>{if(!t||t.length===0)return Ee({width:u,margin:a,xDomain:m});if(v!==_.slicingTool.id)switch(C){case Z.TOP_1D:case Z.CENTER_2D:return Ee({width:u,margin:a,xDomain:m});case Z.LEFT_1D:return be({height:p,margin:a,yDomain:g});default:return null}return null},[t,p,a,v,C,u,m,g]),R=c.exports.useMemo(()=>{if(!t||t.length===0)return be({height:p,margin:a,yDomain:g});if(v!==_.slicingTool.id)switch(C){case Z.CENTER_2D:return be({height:p,margin:a,yDomain:g});case Z.TOP_1D:return t[0]?xn(x[t[0].id],a.top):null;case Z.LEFT_1D:return t[1]?xn(x[t[1].id],a.left):null;default:return null}return null},[t,p,a,v,C,g,x]);if(!h||!n||n.y<10||n.x<10||n.x>u-a.right||n.y>p-a.bottom)return d("div",{css:$r});const A=J=>{let z=null;if(C===Z.TOP_1D?z=0:C===Z.LEFT_1D&&(z=1),z!=null&&D!=null){const j=wn(t[z]),K=Ze(j.x,D.invert(J));return j.y[K]}return 1},P=(J=null)=>{if(D!=null)switch(C){case Z.CENTER_2D:case Z.TOP_1D:return D.invert(J||n.x);case Z.LEFT_1D:return D.invert(J||n.y);default:return 0}return 0},I=()=>{if(R!=null)switch(C){case Z.CENTER_2D:case Z.TOP_1D:return R.invert(n.y);case Z.LEFT_1D:return R.invert(n.x);default:return 0}return 0},O=()=>{switch(C){case Z.TOP_1D:return(A(o)/(A(s)||Number.MIN_VALUE)*100).toFixed(2);case Z.LEFT_1D:return(A(i)/(A(r)||Number.MIN_VALUE)*100).toFixed(2);default:return 0}},L=()=>{switch(C){case Z.TOP_1D:return(P(o)-P(s)).toPrecision(6);case Z.LEFT_1D:return(P(i)-P(r)).toPrecision(6);default:return 0}},H=(J,z,j)=>C===Z.CENTER_2D?w(c.exports.Fragment,{children:[J," ( ",d(ti,{mf:j})," )"]}):z,X=()=>{if(C===Z.CENTER_2D){const{maxX:J,maxY:z,minX:j,minY:K,z:ne}=k[h.index].data,Me=(J-j)/(ne[0].length-1),ft=(z-K)/(ne.length-1),Kt=Math.floor((P()-j)/Me),qt=Math.floor((I()-K)/ft);return Kt<0||Kt>=ne[0].length||qt<0||qt>=ne.length?0:ne[qt][Kt]}return 0};return w("div",{css:$r,children:[w("div",{children:[w("span",{className:"label",children:[H("F2","X",E[0])," :"]}),d("span",{className:"value",children:T(P())}),d("span",{className:"unit",children:"ppm"})]}),w("div",{children:[w("span",{className:"label",children:[H("F1","Y",E[1])," :"]}),d("span",{className:"value",children:N(I())}),d("span",{className:"unit",children:"ppm"})]}),w("div",{children:[d("span",{className:"label",children:"Intensity :"}),d("span",{className:"value",children:X()})]}),l==="brushing"&&w("div",{children:[d("span",{className:"label",children:" \u0394ppm :"}),d("span",{className:"value",children:L()})]}),l==="brushing"&&w("div",{children:[d("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[O(),"%"]})]})]})}const ov={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-88px",fontWeight:"bold",pointerEvents:"none",overflow:"visible",userSelect:"none",width:"85px",textAlign:"right"};function sv({layout:e,data1D:t}){const n=c.exports.useContext(ut),{step:o}=c.exports.useContext(wt),{margin:s,width:i,height:r,xDomain:l,yDomain:a,yDomains:u,activeTab:p,activeSpectrum:h}=$(),m=n&&rn(e,{startX:n.x,startY:n.y}),g=p.split(","),[x,y]=Xe(g),k=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return Ee({width:i,margin:s,xDomain:l});switch(m){case Z.TOP_1D:case Z.CENTER_2D:return Ee({width:i,margin:s,xDomain:l});case Z.LEFT_1D:return be({height:r,margin:s,yDomain:a});default:return null}},[h,t,r,s,m,i,l,a]),v=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return be({height:r,margin:s,yDomain:a});switch(m){case Z.CENTER_2D:return be({height:r,margin:s,yDomain:a});case Z.TOP_1D:return t[0]?xn(u[t[0].id],s.top):null;case Z.LEFT_1D:return t[1]?xn(u[t[1].id],s.left):null;default:return null}},[h,t,r,s,m,a,u]);if(o==="brushing"||!n||n.y<s.top||n.x<s.left||n.x>i-s.right||n.y>r-s.bottom)return null;const C=(T=null)=>{switch(m){case Z.CENTER_2D:case Z.TOP_1D:return k==null?void 0:k.invert(T||n.x);case Z.LEFT_1D:return k==null?void 0:k.invert(T||n.y);default:return 0}},E=()=>{switch(m){case Z.CENTER_2D:case Z.TOP_1D:return v==null?void 0:v.invert(n.y);case Z.LEFT_1D:return v==null?void 0:v.invert(n.x);default:return 0}};return F("div",{style:S(b({},ov),{transform:`translate(${n.x}px, ${n.y}px)`}),children:[f("span",{children:y(E())}),f("span",{style:{color:"gray"},children:","}),f("span",{style:{color:"red"},children:x(C())})]},"xLabelPointer")}function qu(e,t,n=10){return Je(xt(t),[e-n,n])}function iv({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,displayerKey:i}=$(),r=po(Dn.XAxis),l=o.top,a=c.exports.useMemo(()=>{if(t){const{x:u,re:p}=t,h=Ee({margin:o,width:n,xDomain:s}),m=qu(l,p,e),g=r({x:u,y:p}),x=new Wt;x.moveTo(h(g.x[0]),m(g.y[0]));for(let y=1;y<g.x.length;y++)x.lineTo(h(g.x[y]),m(g.y[y]));return x.toString()}else return},[t,l,e,o,n,s,r]);return!n||!l?null:F("svg",{viewBox:`0 0 ${n} ${l}`,width:n,height:l,children:[f("defs",{children:f("clipPath",{id:`${i}clip-top`,children:f("rect",{width:n-o.left-o.right,height:l,x:o.left,y:`${0}`})})}),F("g",{clipPath:`url(#${i}clip-top)`,children:[f("rect",{width:n-o.left-o.right,height:l,x:o.left,y:`${0}`,fillOpacity:"0"}),f("path",{className:"line",stroke:"red",fill:"none",d:a})]})]})}var rv=c.exports.memo(iv);function lv({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,displayerKey:i}=$(),r=po(Dn.YAxis),l=o.left,a=c.exports.useMemo(()=>{if(t){const{x:p,re:h}=t,m=be({height:n,margin:o,yDomain:s}),g=qu(l,h,e),x=r({x:p,y:h}),y=new Wt;y.moveTo(g(x.y[x.y.length-1]),m(x.x.length-1));for(let k=x.x.length-2;k>=0;k--)y.lineTo(g(x.y[k]),m(x.x[k]));return y.toString()}else return},[t,l,o,e,n,r,s]),u=n-o.bottom-o.top;return!u||!l?null:F("svg",{viewBox:`0 0 ${l} ${u+o.top}`,width:l,height:u+o.top,children:[f("defs",{children:f("clipPath",{id:`${i}clip-left`,children:f("rect",{width:l,height:u,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${i}clip-left)`,children:f("path",{className:"line",stroke:"red",fill:"none",d:a})})]})}var av=c.exports.memo(lv);function cv(){const{width:e,height:t,margin:n,activeSpectrum:o,data:s,xDomain:i,yDomain:r}=$(),l=Ef(),a=c.exports.useMemo(()=>{if(l&&o&&o.id){const{x:u,y:p}=l,h=Ee({margin:n,width:e,xDomain:i}),m=be({margin:n,height:t,yDomain:r}),g=kg(s[o.index],{x:h.invert(u),y:m.invert(p)});return F("svg",{viewBox:`0 0 ${e} ${t}`,width:e,height:t,style:{position:"absolute",backgroundColor:"rgba(255,255,255,0.8)"},children:[(g==null?void 0:g.horizontal)&&f(rv,{data:g.horizontal.data}),(g==null?void 0:g.vertical)&&f(av,{data:g.vertical.data})]})}return null},[l,o,n,e,i,t,r,s]);return l?a:null}function uv({emptyText:e=void 0}){const t=$(),{toolOptions:{selectedTool:n},isLoading:o,data:s,margin:i,tabActiveSpectrum:r,activeTab:l}=t,a=Y(),{info:u}=ve({info:{}}),p=u.isFt||!("isFt"in u),h=c.exports.useMemo(()=>l.split(",").reduce((C,E)=>{var T,N;if((T=r[E])!=null&&T.id){const D=(N=r[E])==null?void 0:N.id,R=s.find(A=>A.id===D&&!A.info.isFid);R&&C.push(R)}else C.push(null);return C},[]),[l,s,r]),m=Lx(t),g=c.exports.useCallback(v=>{if(rn(m,v)&&!v.altKey)if(v.shiftKey)switch(n){case _.zone2D.id:a(b({type:Xc},v));break}else switch(n){default:if(n!=null)return a(S(b({type:us},v),{trackID:rn(m,v)}))}},[n,a,m]),x=c.exports.useCallback(v=>{const{x:C,y:E}=v,T=rn(m,{startX:C,startY:E});T&&a({type:yn,trackID:T})},[m,a]),y=v=>{const{x:C,y:E}=v,T=rn(m,{startX:C,startY:E});T&&a(T==="CENTER_2D"?b({type:Bc},v):{type:cs,event:v,trackID:T})},k=c.exports.useCallback(v=>{},[n]);return p?f(ni,{children:({width:v,height:C})=>F(Ju,{width:v,height:C,children:[f(zu,{isLoading:o,emptyText:e}),s&&s.length>0&&f(ea,{onBrush:g,onDoubleClick:x,onClick:k,onZoom:y,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:F(ta,{style:{width:"100%",height:"100%",position:"absolute"},children:[n&&n===_.slicingTool.id&&f(cv,{}),f(Vu,{}),h&&f(sv,{data1D:h,layout:m}),f(Eo,{brushType:De.XY,dimensionBorder:m.CENTER_2D}),F(et,{children:[(h==null?void 0:h[0])&&f(Eo,{brushType:De.X,dimensionBorder:m.TOP_1D,height:i.top}),(h==null?void 0:h[1])&&f(Eo,{brushType:De.Y,dimensionBorder:m.LEFT_1D,width:i.left})]}),h&&f(nv,{data1D:h,layout:m}),f(tv,{spectra:h})]})})]})}):f(Ou,{emptyText:"Currently FID can not be displayed for 2D spectra",canOpenLoader:!1})}function Ju(e){const t=Y(),{width:n,height:o,children:s}=e;return c.exports.useEffect(()=>{t({type:Ti,width:n,height:o})},[n,o,t]),s}const dv="SET_X_SCALE",pv="SET_Y_SCALE",Qu="SET_SCALE",ed={scaleX:null,scaleY:null};function hv(e,t){switch(t.type){case dv:e.scaleX=(n=null)=>Vt(t,n);break;case pv:e.scaleY=(n=null)=>Fo(t,n);break;case Qu:{e.scaleX=(n=null)=>Vt(t.payload,n),e.scaleY=(n=null)=>Fo(t.payload,n);break}default:return e}}const fv=Qs(hv),td=c.exports.createContext(ed),mv=td.Provider;function Gi(){return c.exports.useContext(td)}function me(){const e=Gi();if(!e.scaleX||!e.scaleY)throw new Error("scale cannot be null");return e}const te={TOP_LEFT:"top left",TOP_CENTER:"top center",TOP_RIGHT:"top right",MIDDLE_LEFT:"middle left",MIDDLE:"middle",MIDDLE_RIGHT:"middle right",BOTTOM_LEFT:"bottom left",BOTTOM_CENTER:"bottom center",BOTTOM_RIGHT:"bottom right"},Fn={INFO:"info",SUCCESS:"success",ERROR:"error",PROGRESS_INDICATOR:"progress_indicator"},Qe={FADE:"fade",SCALE:"scale",SLIDE_RIGHT:"slide_right",SLIDE_LEFT:"slide_left",SLIDE_TOP:"slide_top",SLIDE_BOTTOM:"slide_bottom"},nd=c.exports.createContext({}),gv=nd.Provider;function le(){return c.exports.useContext(nd)}const Us=250,xv={[Qe.FADE]:{transition:`opacity ${Us}ms ease`,opacity:0},[Qe.SCALE]:{transform:"scale(1)",transition:`all ${Us}ms ease-in-out`}},bv={[Qe.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Qe.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(1)"}}};function od(s){var i=s,{children:e,type:t,transitionStyles:n=bv}=i,o=G(i,["children","type","transitionStyles"]);const r=c.exports.useRef(null);return f(wp,S(b({nodeRef:r},o),{timeout:Us,children:l=>f("div",{ref:r,style:b(b(b({},xv[t]),n[t][l]),n.default),children:e})}))}function yv(e,t){const n=b({position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",pointerEvents:"none",overflow:"visible"},t?{top:`${t.top}px`,left:`${t.left}px`,height:`${t.height}px`,width:`${t.width}px`}:{width:"100%",height:"100%"});switch(e){case te.TOP_LEFT:return S(b({},n),{justifyContent:"flex-start",alignItems:"flex-start"});case te.TOP_CENTER:return S(b({},n),{justifyContent:"flex-start"});case te.TOP_RIGHT:return S(b({},n),{justifyContent:"flex-start",alignItems:"flex-end"});case te.MIDDLE_LEFT:return S(b({},n),{justifyContent:"center",alignItems:"flex-start"});case te.MIDDLE:return S(b({},n),{justifyContent:"center"});case te.MIDDLE_RIGHT:return S(b({},n),{justifyContent:"center",alignItems:"flex-end"});case te.BOTTOM_LEFT:return S(b({},n),{justifyContent:"flex-end",alignItems:"flex-start"});case te.BOTTOM_CENTER:return S(b({},n),{justifyContent:"flex-end"});case te.BOTTOM_RIGHT:return S(b({},n),{justifyContent:"flex-end",alignItems:"flex-end"});default:return n}}function sd(s){var i=s,{children:e,options:{position:t},containerStyle:n}=i,o=G(i,["children","options","containerStyle"]);const r=c.exports.useMemo(()=>yv(t,n),[t,n]);return e.length>0&&f("div",S(b({style:r},o),{children:e}))}function vv(e,t){return e.reduce((n,o)=>{const s=t(o);return n[s]||(n[s]=[]),n[s].push(o),n},{})}const Cv=M`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  :after {
    content: ' ';
    display: block;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    border-radius: 50%;
    border: 4px solid;
    border-color: #fff transparent #fff transparent;
    animation: ring-animation 1s linear infinite;
  }
  @keyframes ring-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function kv(){return d("div",{css:Cv})}function Sv(a){var u=a,{children:e,wrapperRef:t=null,offset:n="5px",position:o=te.BOTTOM_CENTER,timeout:s=3e3,type:i,transition:r=Qe.FADE}=u,l=G(u,["children","wrapperRef","offset","position","timeout","type","transition"]);const p=c.exports.useRef(null),h=c.exports.useRef([]),[m,g]=c.exports.useState([]);c.exports.useEffect(()=>{p.current=document.createElement("div");const A=p.current,P=h.current;return t&&t.appendChild(A),()=>{A&&t&&(P.forEach(clearTimeout),t.removeChild(A))}},[t]);const x=c.exports.useCallback(A=>{g(P=>{const I=P.length,O=P.filter(L=>L.id!==A.id);return I>O.length&&A.options.onClose&&A.options.onClose(),O})},[]),y=c.exports.useCallback((A="",P={})=>{const I=Math.random().toString(36).substr(2,9),O=b({position:P.position||o,timeout:s,type:i,backgroundColor:"black",color:"white"},P),L={id:I,message:A,options:O};if(L.close=()=>x(L),L.options.timeout){const H=setTimeout(()=>{x(L),h.current.splice(h.current.indexOf(H),1)},L.options.timeout);h.current.push(H)}return g(H=>H.concat(L)),L.options.onOpen&&L.options.onOpen(),L},[o,x,s,i]),k=c.exports.useCallback((A="",P={})=>(P.type=Fn.SUCCESS,P=b({backgroundColor:"#28ba62",color:"white"},P),y(A,P)),[y]),v=c.exports.useCallback((A="",P={})=>(P.type=Fn.ERROR,P=b({backgroundColor:"#cf3c4f",color:"white"},P),y(A,P)),[y]),C=c.exports.useCallback((A="",P={})=>(P.type=Fn.INFO,P.color="#28ba62",y(A,P)),[y]),E=c.exports.useCallback((A="Process in progress",P={})=>(P.type=Fn.PROGRESS_INDICATOR,P.timeout=0,P.backgroundColor="#232323",new Promise(I=>{const O=y(A,P);setTimeout(()=>{I(()=>x(O))},500)})),[x,y]),T=c.exports.useCallback(A=>{x(A)},[x]),N=vv(m,A=>A.options.position),D=c.exports.useMemo(()=>t?t.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[t]),R=c.exports.useMemo(()=>({show:y,success:k,error:v,info:C,showLoading:E}),[y,k,v,C,E]);return F(gv,{value:R,children:[e,p.current&&qo.exports.createPortal(f(c.exports.Fragment,{children:Object.keys(te).map(A=>{const P=te[A];return f(Fl,S(b({appear:!0,options:{position:P,zIndex:999999},component:sd,containerStyle:D},l),{children:N[P]?N[P].map(I=>f(od,{type:r,children:F("div",{style:{margin:n,padding:"25px",borderRadius:"10px",pointerEvents:"all",backgroundColor:I.options.backgroundColor,color:I.options.color,minHeight:"60px",position:"relative"},children:[f("button",{style:{position:"absolute",right:"5px",top:"5px",border:"none",backgroundColor:"transparent",color:"white"},type:"button",onClick:()=>T(I),children:f(oi,{})}),f("span",{children:I.message}),I.options.type===Fn.PROGRESS_INDICATOR&&f(kv,{})]},I.id)},I.id)):null}),P)})}),p.current)]})}var wv=c.exports.memo(Sv);const id=c.exports.createContext({}),Ev=id.Provider;function he(){return c.exports.useContext(id)}const Av=M`
  display: block;
  border-radius: 5px;
  overflow: hidden;
  width: 300px;
  border-top: 10px solid #ed0000;

  .message {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    color: #af0000;
    text-align: center;
    padding: 25px;
    display: block;
  }
  .buttons-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    padding: 5px;
    border-top: 1px solid #efefef;

    button:last-of-type {
      border-radius: 5px 0 0 5px;
    }
    button:first-of-type {
      border-radius: 0px 5px 5px 0px;
      border-width: 1px;
    }
    button {
      border-color: #dcdcdc;
      border-width: 1px 0px 1px 1px;
      background-color: white;
      display: inline-block;
      cursor: pointer;
      color: #363636;
      font-weight: bold;
      padding: 6px 24px;
      text-decoration: none;
    }
    button:hover {
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0.05, #f6f6f6),
        color-stop(1, #ffffff)
      );
      background: -moz-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: -webkit-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: -o-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: -ms-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6', endColorstr='#ffffff',GradientType=0);
      background-color: #f6f6f6;
    }
  }
`;function Tv({style:e={},buttons:t=[],onClose:n,message:o}){const s=c.exports.useCallback((i,{handler:r=()=>null})=>{r(i),n()},[n]);return w("div",{style:e,css:Av,children:[d("p",{className:"message",children:o}),d("div",{className:"buttons-container",children:t.map(i=>d("button",{type:"button",onClick:r=>s(r,i),style:i.style&&i.style,children:i.text},i.text))})]})}const Dv=({modal:e,onClose:t,onLayout:n})=>{const o=c.exports.useRef(),[s,{width:i,height:r}]=Ep(()=>f("div",{style:{height:"100%",display:"block",overflow:"auto"},children:c.exports.cloneElement(e.component,S(b({},e.options),{onClose:t,style:{cursor:"default"}}))}));return c.exports.useEffect(()=>{isFinite(r)&&isFinite(i)&&!o.current&&(o.current={width:i,height:r},n({modal:e,layout:{width:i,height:r}}))},[i,r,o,n,e]),s},Rv={[Qe.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Qe.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(0)"}}};function Pv({children:e,style:t=void 0,offset:n="0px",position:o=te.MIDDLE,transition:s=Qe.SCALE,wrapperRef:i=null}){const r=c.exports.useRef(),l=c.exports.useRef(),[a,u]=c.exports.useState();c.exports.useEffect(()=>{r.current=document.createElement("div");const C=r.current;return i&&i.appendChild(C),()=>{C&&i&&i.removeChild(C)}},[i]);const p=c.exports.useCallback(function(){u(null)},[u]),h=c.exports.useMemo(()=>i?i.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[i]),m=c.exports.useCallback((C,E={})=>{const T={component:C,options:b({isBackgroundBlur:!0,enableResizing:!1},E)};return T.close=p,u(T),T.options.onOpen&&T.options.onOpen(),T},[p]),g=c.exports.useCallback((C,E={enableResizing:!1})=>{const T={component:d(Tv,b({},C)),options:b({isBackgroundBlur:!0},E)};return T.close=p,u(T),T.options.onOpen&&T.options.onOpen(),T},[p]);c.exports.useEffect(()=>{function C(E){["Escape","Esc"].includes(E.key)&&p()}return document.addEventListener("keydown",C,!1),()=>document.removeEventListener("keydown",C,!1)},[p]);const x=M`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    pointer-events: all;
    .handle {
      cursor: move;
    }

    .rnd-container {
      box-sizing: initial;
      background-color: #fff;
      box-shadow: 0 0 0 0, 0 8px 16px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    }
  `,y=a!=null&&a.options.isBackgroundBlur?{backgroundColor:"rgba(255,255,255,0.8)"}:{pointerEvents:"none"},k=c.exports.useMemo(()=>({show:m,close:p,showConfirmDialog:g}),[m,p,g]),v=c.exports.useCallback(({modal:C,layout:E})=>{const T=C.options.width?C.options.width:E.width>h.width?h.width:E.width,N=C.options.height?C.options.height:E.height>h.height?h.height:E.height;l.current.updateSize({width:T,height:N})},[h.height,h.width]);return w(Ev,{value:k,children:[e,r.current&&qo.exports.createPortal(d(c.exports.Fragment,{children:a?d("div",{css:x,style:b({},y),children:d(Fl,{appear:!0,options:{position:a.options.position?a.options.position:o},containerStyle:h,component:sd,children:d(od,{type:a.options.transition?a.options.transition:s,transitionStyles:S(b({},Rv),{default:{width:a.options.width?`${a.options.width}px`:"auto"},height:a.options.height?`${a.options.height}px`:"auto"}),children:d(Ap,{maxWidth:h.width,maxHeight:h.height,ref:l,default:{width:a.options.width?a.options.width:"auto",height:a.options.height?a.options.height:"auto",x:0,y:0},className:"rnd-container",style:S(b({},t),{margin:n,position:"static",pointerEvents:"all",userSelect:"none"}),enableResizing:a.options.enableResizing,dragHandleClassName:"handle",enableUserSelectHack:!1,children:d(Dv,{modal:a,onClose:p,onLayout:v})})},a.id)},te[a.options.transition?a.options.transition:s])}):null}),r.current)]})}const rd=c.exports.createContext({rootRef:null,elementsWrapperRef:null}),Iv=rd.Provider;function fs(){return c.exports.useContext(rd)}const Nv={popup:{position:"fixed",top:0,left:0,pointerEvents:"none",backgroundColor:"gray",padding:"3px",borderRadius:"2px",color:"white",whiteSpace:"nowrap",fontSize:"10px",fontFamily:"tahoma",textShadow:"none"}};function Mv({style:e={popup:{},mainContainer:{}},className:t="",popupPlacement:n="right",children:o,title:s,offset:i={x:0,y:0}}){const r=c.exports.useRef(null),l=c.exports.useRef(null),[a,u]=c.exports.useState({x:0,y:0}),[p,h]=c.exports.useState(!1),{elementsWrapperRef:m}=fs();c.exports.useLayoutEffect(()=>{const y=()=>{let k,v;if(r.current===null||l.current===null)return null;const C=r.current.getBoundingClientRect(),E=l.current.getBoundingClientRect();switch(n){case"left":k=-E.width,v=C.height/2-C.height/2*E.height/C.height;break;case"right":k=C.width,v=C.height/2-C.height/2*E.height/C.height;break;case"top":k=C.width/2-C.width/2*E.width/C.width,v=-C.height;break;case"bottom":k=C.width/2-C.width/2*E.width/C.width,v=C.height;break;default:k=0,v=0;break}return{x:k+C.x,y:v+C.y}};if(p){const k=y();k&&u(k)}},[n,p]);const g=c.exports.useCallback(()=>{h(!0)},[]),x=c.exports.useCallback(()=>{h(!1)},[]);return F(c.exports.Fragment,{children:[f("div",{style:b({position:"relative",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},e.mainContainer),ref:r,onMouseOver:g,onMouseOut:x,children:o}),p&&m&&qo.exports.createPortal(f("div",{ref:l,style:b(S(b({},Nv.popup),{transform:`translate(${a.x+i.x}px,${a.y+i.y}px)`,zIndex:999999999}),e.popup),className:t,children:f("span",{style:{pointerEvents:"none"},children:s})}),m)]})}var we=c.exports.memo(Mv);const Hr={button:{backgroundColor:"transparent",border:"none",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},svg:{fill:"#ca0000",fontSize:"16px"}};function _v(e){const{onClick:t=()=>null,popupTitle:n="Close",popupPlacement:o="left",className:s=""}=e;return f("div",{className:s,children:f(we,{title:n,popupPlacement:o,children:f("button",{style:Hr.button,type:"button",onClick:t,children:f(oi,{style:Hr.svg})})})})}var fe=c.exports.memo(_v);const Fv=M`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 400px;
  padding: 5px;
  button:focus {
    outline: none;
  }
  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
    }

    button {
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }
  }
  .container {
    overflow-y: auto;
    background-color: white;
    padding-top: 10px;

    .row {
      outline: none;
      display: flex !important;
      flex-direction: row;
      margin: 0;
      div {
        flex: 4;
      }
      .multiplicity {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .row:nth-child(odd) {
      background: #fafafa;
    }
  }
`,Lv=M`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  width: 900px;
  height: 400px;

  svg {
    animation-duration: 0.5s;
    animation-name: spinAnimation;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-direction: inherit;
    animation-timing-function: linear;
    animation-duration: 1s;
    width: 100px;
    height: 100px;
  }

  @keyframes spinAnimation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;function Ov({data:e,activeSpectrum:t,scaleX:n,startX:o,endX:s,onClose:i}){var m;const[r,l]=c.exports.useState(),[a,u]=c.exports.useState(!1),[p,h]=c.exports.useState(!1);return c.exports.useEffect(()=>{setTimeout(()=>{u(!0)},400)},[]),c.exports.useEffect(()=>{if(t&&o&&s&&a){const g=e[t.index];if(Xs(g))throw new Error("unreachable");const{data:{x,re:y},info:k}=g,v=n().invert(o),C=n().invert(s),{fromIndex:E,toIndex:T}=qn(x,{from:v,to:C}),N={x:x.slice(E,T),y:y.slice(E,T)};try{const D=Al(N,{frequency:k.originFrequency,takeBestPartMultiplet:!0,symmetrizeEachStep:!0,debug:!0});h(!0),l(D)}catch(D){console.log(D)}}},[o,s,e,n,t,a]),p?w("div",{css:Fv,children:[w("div",{className:"header handle",children:[d("span",{children:"Analyse Multiplet"}),d(fe,{onClick:i})]}),d("div",{className:"container",children:(m=r==null?void 0:r.debug)==null?void 0:m.steps.map((g,x)=>{var y,k;return w("div",{className:"row",children:[w(hn,{width:400,height:200,svgStyle:{overflow:"visible"},seriesViewportStyle:{stroke:"black"},children:[d(qe,{data:hr(g.multiplet)}),d($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),d($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]}),d("div",{className:"multiplicity",children:d("p",{children:r.js[x]?`${(y=r.js[x])==null?void 0:y.multiplicity}: ${(k=r.js[x])==null?void 0:k.coupling.toFixed(3)} Hz`:""})}),w(hn,{width:400,height:200,seriesViewportStyle:{stroke:"black"},children:[d(qe,{data:hr(g.errorFunction),lineStyle:{strokeWidth:1}}),d($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),d($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]})]},x)})})]}):w("div",{css:Lv,children:[d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[d("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),d("path",{d:"M520.5 78.1z"})]})}),d("p",{children:"Analyse Multiplet in progress. Please wait ..."})]})}function ld(){const{data:e,activeTab:t}=$();return c.exports.useMemo(()=>e?e.filter(n=>t===At(n.info.nucleus))||[]:[],[t,e])}function ad(e){const{activeSpectrum:t}=$(),n=re();return c.exports.useMemo(()=>{const o=t===null?!0:e===t.id,s=o?1:V(n.current,"controllers.dimmedSpectraTransparency",.1);return{isActive:o,opacity:s}},[t,e,n])}function $v({zone:e,color:t,vAlign:n,spectrumID:o}){const{scaleX:s,scaleY:i}=me(),r=ie([e.id],{type:ue.EXCLUSION_ZONE,extra:{id:e.id,spectrumID:o}}),{opacity:l}=ad(o);return f("g",{transform:`translate(${s()(e.to)},0)`,children:f("rect",b({x:"0",transform:`translate(0,${i()(0)-(n+5)})`,width:`${s()(e.from)-s()(e.to)}`,height:"10px",style:{fill:r.isActive?"#ff6f0057":t,opacity:l}},r.onHover))},e.id)}var Hv=c.exports.memo($v);function ms(e,t){const{index:n=1,align:o="stack"}=t||{index:1,align:"stack"};return e.align===o?n*e.verticalShift:0}function zv({displayerKey:e,xDomains:t,spectra:n,verticalAlign:o}){return f("g",{className:"spectrum-exclusion-zones-group",clipPath:`url(#${e}clip-chart-1d)`,children:n.filter(s=>s.display.isVisible===!0&&t[s.id]).map((s,i)=>Bv(s).map(r=>f(Hv,{spectrumID:s.id,vAlign:ms(o,{index:i}),zone:r,color:s.display.color},r.id)))})}const Vv=c.exports.memo(zv);function jv(){const{displayerKey:e,xDomains:t,displayerMode:n,verticalAlign:o}=$(),s=ld();return n!==B.DM_1D?null:f(Vv,{spectra:s,displayerKey:e,xDomains:t,verticalAlign:o})}function Bv(e){var t;return((t=e.filters.find(n=>n.name===to&&n.flag))==null?void 0:t.value)||[]}function Xv(){const{width:e,margin:t,xDomains:n,xDomain:o,mode:s}=$();return c.exports.useMemo(()=>Vt({width:e,margin:t,xDomains:n,xDomain:o,mode:s}),[t,s,e,o,n])}function Yv(){const{height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}=$();return c.exports.useMemo(()=>ux({height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}),[o,e,s,t,n])}function cd(e){const{data:t,activeSpectrum:n}=$(),o=Xv(),s=Yv(),i=c.exports.useMemo(()=>{if(n){const{x:l,re:a}=t[n==null?void 0:n.index].data,{from:u,to:p}=e;return Tp({x:l,y:a},{from:u,to:p,reverse:!0})}return{x:[],y:[]}},[n,t,e]);return c.exports.useMemo(()=>{if(i){const l=Ml(i,{nbPoints:200,optimize:!0}),a=new Wt;a.moveTo(o(l.x[0]),s(l.y[0]));for(let u=1;u<l.x.length;u++)a.lineTo(o(l.x[u]),s(l.y[u]));return a.toString()}else return""},[i,o,s])}const _t={showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",color:"#000000",strokeWidth:1},Gv={showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00"},Wi=e=>({showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",jGraphTolerance:e==="1H"?.2:e==="13C"?2:0}),ud={showPeakNumber:!0,peakNumberFormat:"0",showPeakIndex:!1,peakIndexFormat:"0.00",showDeltaPPM:!0,deltaPPMFormat:"0.00",showDeltaHz:!1,deltaHzFormat:"0.00",showPeakWidth:!1,peakWidthFormat:"00.0000",showIntensity:!0,intensityFormat:"0.00"},dd={showSmiles:!0,showSolvent:!1,showNames:!0,showRange:!1,showDelta:!0,showAssignment:!1,showCoupling:!0,showMultiplicity:!0};function Xo(e){const{x:t,anchor:n}=e,o=c.exports.useRef(!1),s=c.exports.useRef({relativeX:t,x:t}),[i,r]=c.exports.useState({x:t,action:null});return c.exports.useEffect(()=>{s.current={relativeX:t,x:t},r({x:t,action:null})},[t]),{onMouseDown:c.exports.useCallback(a=>{r({x:s.current.x,action:"start"}),s.current.relativeX=a.clientX-s.current.relativeX,o.current=!0,a.stopPropagation();function u(h){if(h.stopPropagation(),o.current){const m=h.clientX-s.current.relativeX;s.current={relativeX:m,x:m},r({x:m,action:"end"}),o.current=!1}window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",u)}function p(h){h.stopPropagation(),o.current&&r({x:h.clientX-s.current.relativeX,action:"move"})}window.addEventListener("mousemove",p),window.addEventListener("mouseup",u)},[]),position:i,previousPosition:s.current.x,isActive:o.current,anchor:n}}const zr={marginLeft:"5px",width:"2px",height:"100%",pointerEvents:"none",position:"relative"},As={container:e=>M`
    position: absolute;
    height: 100%;
    width: 10px;
    left: -5px;
    cursor: e-resize;
    transform: translateX(${e}px);
    user-select: none;
    z-index: 99999999;

    &:hover {
      div {
        background-color: red;
      }
    }
  `,content:(e,t,n)=>{const o=n.previousPosition-t.previousPosition,s=M`
      position: absolute;
      width: ${o}px;
      overflow: hidden;
    `;if(n.position.action==="move"||t.position.action==="move"){const i=(n.position.x-t.position.x)/o;if(e==="RIGHT")return[s,M`
            transform: translateX(${t.position.x}px) scaleX(${i});
            transform-origin: left center;
          `];if(e==="LEFT")return M([s,M`
            transform: translateX(${t.position.x}px) scaleX(${i});
            transform-origin: left center;
          `])}else return M([s,M`
          transform: translateX(${t.position.x}px);
        `])}};function Wv(e){const{children:t,initialPosition:n={x1:10,x2:40},onStart:o,onMove:s,onEnd:i}=e,r=Xo({x:n.x2,anchor:"RIGHT"}),l=Xo({x:n.x1,anchor:"LEFT"}),a=l.isActive?l.anchor:r.isActive?r.anchor:"";return c.exports.useEffect(()=>{const u={x1:l.position.x,x2:r.position.x};switch(l.isActive?l.position.action:r.isActive?r.position.action:""){case"start":o==null||o(u);break;case"move":s==null||s(u);break;case"end":i==null||i(u);break}},[l,i,s,o,r]),w(je,{children:[d("div",{"data-no-export":"true",onMouseDown:r.onMouseDown,css:As.container(r.position.x),children:d("div",{style:zr})}),d("div",{css:As.content(a,l,r),children:typeof t=="function"?t==null?void 0:t(l.position.x,r.position.x):t}),d("div",{"data-no-export":"true",onMouseDown:l.onMouseDown,css:As.container(l.position.x),children:d("div",{style:zr})})]})}const Zv={width:"2px",height:"100%",pointerEvents:"none",fill:"transparent"},Vr={container:e=>M`
    transform: translateX(${e}px);

    &:hover {
      rect:last-child {
        fill: red !important;
      }
    }
  `,innerContainer:M`
    position: absolute;
    height: 100%;
    fill: transparent;
    width: 10px;
    cursor: e-resize;
    user-select: none;
    z-index: 99999999;
  `};function Uv(e){const{children:t,initialPosition:n={x1:10,x2:40},onStart:o,onMove:s,onEnd:i}=e,r=Xo({x:n.x2,anchor:"RIGHT"}),l=Xo({x:n.x1,anchor:"LEFT"});return c.exports.useEffect(()=>{const a={x1:l.position.x,x2:r.position.x};switch(l.isActive?l.position.action:r.isActive?r.position.action:""){case"start":o==null||o(a);break;case"move":s==null||s(a);break;case"end":i==null||i(a);break}},[l,i,s,o,r]),w("g",{style:{transform:`translateX(${l.position.x}px)`},children:[typeof t=="function"?t(l.position.x,r.position.x):t,d(jr,{onMouseDown:l.onMouseDown,position:0}),d(jr,{onMouseDown:r.onMouseDown,position:r.position.x-l.position.x})]})}function jr(e){return w("g",{onMouseDown:e.onMouseDown,css:Vr.container(e.position),"data-no-export":"true",children:[d("rect",{x:"-5px",css:Vr.innerContainer}),d("rect",{x:"-2.5px",style:Zv})]})}function Zi(e){const o=e,{tag:t="div"}=o,n=G(o,["tag"]);return t==="div"?f(Wv,b({},n)):f(Uv,b({},n))}const Kv=M`
  pointer-events: bounding-box;
  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  .highlight {
    fill: transparent;
  }
  .target {
    visibility: hidden;
  }
`,qv=M`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  fill: #ff6f0057;

  .target {
    visibility: visible;
  }
`;function Jv({integralData:e}){const{height:t,margin:n}=$(),{scaleX:o}=me(),s=Y(),{id:i,from:r,to:l,integral:a}=e,u=ie([i],{type:ue.INTEGRAL,extra:{id:i}}),p=c.exports.useCallback(y=>{s({type:vc,payload:{data:S(b({},e),{from:o().invert(y.x2),to:o().invert(y.x1)})}})},[s,e,o]),h=c.exports.useCallback(()=>{u.show()},[u]),m=c.exports.useCallback(()=>{u.hide()},[u]),g=r?o()(r):0,x=l?o()(l):0;return d("g",{css:u.isActive?qv:Kv,onMouseEnter:h,onMouseLeave:m,children:d(Zi,{tag:"svg",initialPosition:{x1:x,x2:g},onEnd:p,children:(y,k)=>w("g",{children:[d("rect",{x:"0",y:"0",width:k-y,height:t-n.bottom,className:"highlight","data-no-export":"true"}),d("text",{x:0,y:t-n.bottom+30,fill:"black",style:{fontSize:"12px",fontWeight:"bold"},children:a!==void 0?a.toFixed(2):""})]})})})}function Qv({integral:e,isActive:t}){const n=re(),o=cd(e),s=c.exports.useMemo(()=>{let{color:i=_t.color,strokeWidth:r=_t.strokeWidth}=pt(n.current,"formatting.panels.integrals")||{};return{color:i,strokeWidth:r}},[n]);return F("g",{children:[f("path",{className:"line",stroke:s.color,strokeWidth:s.strokeWidth,fill:"none",style:{opacity:t?1:.2},d:o}),f(Jv,{integralData:e})]})}function e1(){const{xDomains:e,activeSpectrum:t,data:n,displayerKey:o}=$(),s=c.exports.useMemo(()=>{const i=r=>t===null?!0:r===t.id;return f("g",{className:"integrals",children:(n==null?void 0:n[0])&&n.filter(r=>r.display.isVisible===!0&&e[r.id]).filter(oo).map(r=>r.integrals.values.map(l=>f(Qv,{integral:l,isActive:i(r.id)},l.id)))})},[t,n,e]);return f("g",{clipPath:`url(#${o}clip-chart-1d)`,children:s})}function t1({data:e,id:t,display:n,index:o}){const{verticalAlign:s}=$(),{scaleX:i,scaleY:r}=me(),l=po(Dn.XAxis),{opacity:a}=ad(t),u=c.exports.useMemo(()=>ms(s,{index:o}),[o,s]),p=c.exports.useMemo(()=>{const h=i(),m=r(t),g=new Wt;if((e==null?void 0:e.x)&&(e==null?void 0:e.y)&&h(0)){const x=l(e);g.moveTo(h(x.x[0]),m(x.y[0]));for(let y=1;y<x.x.length;y++)g.lineTo(h(x.x[y]),m(x.y[y]));return g.toString()}else return""},[i,r,t,e,l]);return f("path",{className:"line","data-test-id":"spectrum-line",stroke:n.color,fill:"none",style:{opacity:a},d:p,transform:`translate(0,-${u})`},t)}function n1(){const{data:e,tempData:t,displayerKey:n,xDomains:o}=$(),s=t||e;return f("g",{clipPath:`url(#${n}clip-chart-1d)`,className:"spectrums",children:s==null?void 0:s.filter(i=>i.display.isVisible===!0&&o[i.id]).map((i,r)=>f(t1,S(b({},i),{data:wn(i),index:r}),i.id))})}const o1=M`
  input {
    -webkit-user-select: text; /* Safari 3.1+ */
    -moz-user-select: text; /* Firefox 2+ */
    -ms-user-select: text; /* IE 10+ */
    user-select: text; /* Standard syntax */
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  .notification-input-normal {
    opacity: 1;
    left: 4px;
    position: fixed;
    font-size: 10px;
    outline: none;
    background-color: transparent;
  }

  .notification-input-normal input:focus {
    outline: none;
    background-color: white;
  }

  .input-over {
    background-color: white;
    outline: none;
  }
`;function s1({id:e,x:t,y:n,sign:o,value:s,color:i,isActive:r,nucleus:l}){const a=c.exports.useRef(null),[u,p]=c.exports.useState(!1),[h,m]=c.exports.useState(s),[g,x]=c.exports.useState({width:0,height:0}),y=Xe(l),k=ie([e],{type:ue.PEAK,extra:{id:e}}),v=Y(),C=c.exports.useCallback(I=>v({type:Ei,shiftValue:I.shiftValue}),[v]);c.exports.useLayoutEffect(()=>{var O;const I=(O=a.current)==null?void 0:O.getBBox();x({width:(I==null?void 0:I.width)||0,height:(I==null?void 0:I.height)||0})},[u]),c.exports.useEffect(()=>{m(s)},[s]);const E=c.exports.useCallback(I=>{if(I.key==="Enter"){const O=I.currentTarget.valueAsNumber;if(!isNaN(O)){const L=O-s;C({id:e,value:O,oldValue:s,shiftValue:L}),I.currentTarget.blur(),p(!1)}}else I.key==="Escape"&&(m(s),I.currentTarget.blur(),p(!1))},[s,C,e]),T=c.exports.useCallback(I=>{m(I.target.value)},[]),N=c.exports.useCallback(I=>(I.stopPropagation(),p(!0),!1),[]),D=c.exports.useCallback(()=>{k.show()},[k]),R=c.exports.useCallback(()=>{k.hide()},[k]),A=c.exports.useMemo(()=>u?s:y(s),[y,u,s]),P=c.exports.useMemo(()=>u?h:y(h),[h,y,u]);return w("g",{css:o1,id:e,style:{outline:"none"},transform:`translate(${t}, ${n})`,onMouseEnter:D,onMouseLeave:R,children:[d("line",{x1:"0",x2:"0",y1:o===-1?10:0,y2:o===-1?28:-18,stroke:i,strokeWidth:k.isActive?"7px":"1px"}),d("text",{ref:a,className:"peaks-text",x:"0",y:o===-1?28:-12,dy:"0",dx:"0.35em",fill:"transparent",fontSize:"10px",fontWeight:"100",style:{position:"absolute"},children:A}),d("foreignObject",{x:"0",y:o===-1?16:-22,dy:"0.1em",dx:"0.35em",width:g.width+20,height:"40px","data-no-export":"true",children:d("div",{style:{width:g.width+20,height:"100%",paddingRight:5},children:d("input",{onClick:N,className:u?"input-over":"notification-input-normal",style:{width:"inherit",border:u?`1px solid ${i}`:"0",opacity:r?1:.2,userSelect:"none",color:i},value:P,onKeyDown:E,onChange:T,type:"number",disabled:!r})})})]})}function i1(){const{data:e,activeSpectrum:t,verticalAlign:n,displayerKey:o,xDomains:s}=$(),{scaleX:i,scaleY:r}=me(),l=c.exports.useMemo(()=>{const a=p=>{const h=e.findIndex(m=>m.id===p);return ms(n,{index:h})};return e&&(()=>{const p=[...e];return t?p.sort((h,m)=>h.id===t.id?1:m.id===t.id?-1:0):p})().filter(p=>p.display.isVisible===!0&&s[p.id]).filter(oo).map(p=>{var h;return((h=p.peaks)==null?void 0:h.values)&&p.display.isPeaksMarkersVisible&&f("g",{transform:`translate(0,-${a(p.id)})`,children:p.peaks.values.map(({x:m,y:g,id:x})=>f(s1,{x:i()(m),y:r(p.id)(g)-5,sign:Math.sign(g),id:x,value:m,color:"#730000",nucleus:p.info.nucleus,isActive:t==null?!1:t.id===p.id},x))},p.id)})},[e,n,t,s,i,r]);return f("g",{className:"peaks",clipPath:`url(#${o}clip-chart-1d)`,children:l})}const r1={info:{originFrequency:400}};function l1(){var x;const{displayerKey:e,verticalAlign:t,height:n,margin:o}=$(),{info:s}=ve(r1),{highlight:i}=Rn(),{scaleX:r}=me();if(((x=i.sourceData)==null?void 0:x.type)!==ue.DATABASE)return null;const l=n-o.bottom,a=l/4,{ranges:u}=i.sourceData.extra||[];let p=[0,0];const h=u.map(y=>{const{from:k,to:v}=y,C=Math.abs(k-v)/2,E=k-C,T=v+C,N=Rl([y],{frequency:s.originFrequency,from:E,to:T,nbPoints:256}),D=xt(N.y);return p[0]=D[0]<p[0]?D[0]:p[0],p[1]=D[1]>p[1]?D[1]:p[1],{data:N,from:E,to:T}},[]),m=Fo({height:a,margin:{top:0,bottom:0},verticalAlign:t,yDomain:p}),g=h.map(({data:{x:y,y:k},from:v,to:C})=>{let E=`M ${r()(y[0])} ${m(k[0])} `;return E+=y.slice(1).reduce((T,N,D)=>(T+=` L ${r()(N)} ${m(k[D+1])}`,T),""),{path:E,from:v,to:C}},[]);return f("g",{clipPath:`url(#${e}clip-chart-1d)`,className:"resurrected-database-ranges",width:"100%",height:"100%",children:g.map(({path:y,from:k,to:v},C)=>F("g",{children:[f("g",{transform:`translate(${r()(v)},0)`,children:f("rect",{x:"0",width:Math.abs(r()(v)-r()(k)),height:"100%",fill:"#ff6f0057"})}),f("path",{transform:`translate(0,${l-a*2})`,stroke:"black",fill:"none",d:y})]},`${C}`))})}const a1=M`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,c1=M`
  user-select: none;

  line {
    stroke: rgb(104, 104, 104);
    stroke-opacity: 0.2;
    shape-rendering: crispEdges;
    stroke-dasharray: 3;
    stroke-width: 1;
    user-select: none;
  }

  path {
    stroke-width: 0;
  }
`;function u1(e){const{show:t=!0,showGrid:n=!1,mode:o,label:s}=e,{xDomain:i,height:r,width:l,margin:a}=$(),{scaleX:u}=Gi(),p=c.exports.useRef(null),h=c.exports.useRef(null),m=s||(o==="RTL"?"\u03B4 [ppm]":"time [s]");return c.exports.useEffect(()=>{if(!t||!u)return;const g=Ls(u().domain(i)).ticks(8).tickFormat(ei("0")),x=Ls(u().domain(i)).ticks(50).tickSize(-(r-a.top-a.bottom)).tickFormat(()=>"");Do(p.current).call(g),Do(h.current).call(x)},[r,a.bottom,a.top,u,t,i]),!l||!r||!u?null:w(je,{children:[t&&d("g",{className:"x",css:a1,transform:`translate(0,${r-a.bottom})`,ref:p,children:d("text",{fill:"#000",x:l-10,y:"30",dy:"0.70em",textAnchor:"end",children:m})}),n&&d("g",{css:c1,className:"grid",ref:h,transform:`translate(0,${r-a.bottom})`})]})}function d1(e,t){if(!e&&!Array.isArray(e))return null;let n=[],o=0,s=f1(e,t);for(const r of e)for(const l of r.signals){const i=l,{id:a}=i,u=G(i,["id"]);if(u.js){n.push(b({id:`${r.id}${a}`},u));const p=p1(u.js);o=p>o?p:o}}return{signals:n,jCouplingMax:o,links:s}}function p1(e){let t=-1/0;for(const{coupling:n}of e)t=n>t?n:t;return t}function h1(e){const t=[];for(let n of e)for(const{delta:o,js:s}of n.signals)for(const{coupling:i}of s||[])t.push({coupling:i,delta:o});return t}function Br(e){const{delta:t}=e;return{id:U(),from:t,to:t,couplings:[e]}}function f1(e,t=0){const n=h1(e).sort((l,a)=>l.coupling-a.coupling);if(!n||n.length===0)return[];const o=[Br(n[0])];let s=0,i=s,r=1;for(;r<n.length;){const l=n[r];Math.abs(n[i].coupling-l.coupling)<t?(o[s].couplings.push(l),l.delta>o[s].to?o[s].to=l.delta:l.delta<o[s].from&&(o[s].from=l.delta),r++):Math.abs(n[r-1].coupling-l.coupling)<t?i=r-1:(s++,o[s]=Br(n[r]),i=r,r=r+1)}return o}const pd=c.exports.createContext({scaleY:null,height:0,maxValue:0}),m1=pd.Provider;function gs(){const e=c.exports.useContext(pd);if(!e.scaleY)throw new Error("scale cannot be null");return e}const g1=c.exports.forwardRef((e,t)=>{const{x:n,y:o,height:s,showGrid:i,ticks:r}=e;return F("g",{ref:t,transform:`translate(${n}, ${o})`,children:[f("line",{y2:s,x1:15,x2:15,stroke:"black"}),r.map(({label:l,position:a},u)=>F("g",{children:[i&&e.width&&f("line",{y1:a,y2:a,x1:15,x2:e.width-n,stroke:"lightgray"}),f("line",{y1:a,y2:a,x1:15,x2:10,stroke:"black"}),f("text",{y:a,dominantBaseline:"middle",textAnchor:"end",children:l})]},u+l+a))]})});function x1(e){const i=e,{scale:t}=i,n=G(i,["scale"]),o=c.exports.useRef(null),s=Dp(t,"vertical",o);return f(g1,S(b({},n),{ticks:s,ref:o}))}function b1(){const{width:e,margin:t}=$(),{height:n,scaleY:o}=gs();return o?f("svg",{style:{overflow:"visible"},height:n+20,width:60,children:f(x1,{x:20,y:0,scale:o,height:n,showGrid:!0,width:e-t.right})}):null}function y1(e){const{links:t}=e,{scaleX:n}=me(),{scaleY:o,maxValue:s}=gs(),i=c.exports.useCallback(r=>{if(!o)return"";const{from:l,to:a,couplings:u}=r;let p=[];for(const h of u)p.push(`M${n()(l)},${o(h.coupling)} L${n()(a)},${o(h.coupling)}`);return p.join(" ")},[n,o]);return f("g",{className:"js-coupling-links",children:t.filter(r=>r.couplings.length>1).map(r=>f("path",{d:i(r),style:{stroke:`hsl(${r.couplings[0].coupling*360/s},100%,50%)`},strokeWidth:"1"},r.id))})}function v1({value:e}){const{scaleY:t,maxValue:n}=gs(),[o,s]=c.exports.useState(!1);return t?F("g",{className:"coupling",style:{transform:`translate(0px,${t(e)}px)`},children:[f("circle",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),cx:0,cy:0,r:4,fill:`hsl(${e*360/n},100%,${o?45:50}%)`,pointerEvents:"all"}),o&&F("g",{style:{transform:"translate(0px,15px)"},children:[f("text",{pointerEvents:"none",stroke:"white",strokeWidth:"0.6em",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`}),f("text",{pointerEvents:"none",stroke:"black",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`})]})]}):null}function C1(e){const{scaleX:t}=me(),{height:n}=gs();return f("g",{className:"js-coupling",children:e.signals.map(o=>{var s;return F("g",{transform:`translate(${t()(o.delta)},0)`,children:[f("line",{x1:"0",y1:n,x2:"0",y2:"0",stroke:"black",strokeWidth:"1"}),(s=o.js)==null?void 0:s.map(i=>f(v1,{value:i.coupling},`${i.coupling}`))]},o.id)})})}const k1=50;function S1(e){const{signals:t,links:n}=e;return F("g",{className:"j-graph",transform:`translate(0,${k1})`,children:[f(b1,{}),f(y1,{links:n}),f(C1,{signals:t})]})}const w1={ranges:{}},E1=c.exports.memo(S1);function A1(){const e=re(),{height:t,toolOptions:{data:{showJGraph:n}},activeTab:o}=$(),s=t/4,{ranges:i}=ve(w1),r=c.exports.useMemo(()=>(V(e.current,`formatting.panels.ranges.[${o}]`)||Wi(o)).jGraphTolerance,[o,e]),{signals:l,jCouplingMax:a,links:u}=c.exports.useMemo(()=>d1(i.values,r)||{signals:[],jCouplingMax:0,links:[]},[r,i.values]),p=c.exports.useMemo(()=>{const m=a+a*.1;return Je().range([s,0]).domain([0,m])},[s,a]),h=c.exports.useMemo(()=>({scaleY:p,height:s,maxValue:a}),[s,p,a]);return n?f(m1,{value:h,children:f(E1,{signals:l,links:u})}):null}function hd(e){const{x:t="initial",y:n="initial",onDelete:o=()=>null,fill:s="#c81121"}=e;return F("svg",{className:"delete-button",x:t,y:n,onClick:o,"data-no-export":"true",children:[f("rect",{rx:"5",width:"16",height:"16",fill:s}),f("line",{x1:"5",x2:"10",y1:"8",y2:"8",stroke:"white",strokeWidth:"2"})]})}const Ts={common:M`
    pointer-events: bounding-box;

    @-moz-document url-prefix() {
      pointer-events: fill;
    }
  `,hover:M`
    .delete-button {
      visibility: hidden;
    }
  `,Highlighted:M`
    .range-area {
      height: 100%;
      fill: #ff6f0057;
    }
    .delete-button {
      visibility: visible;
      cursor: pointer;
    }
  `};function T1({rangeData:e,columnKey:t}){const{from:n,to:o}=e,s=ie([t]),{scaleX:i}=me(),r=Y(),l=c.exports.useCallback(()=>{r({type:Hi,colKey:t})},[t,r]),a=c.exports.useCallback(u=>{r({type:ou,payload:S(b(b({},e),u),{columnKey:t})})},[t,r,e]);return d("g",S(b({},s.onHover),{css:[Ts.common,s.isActive?Ts.Highlighted:Ts.hover],children:d(Zi,{tag:"svg",onEnd:a,initialPosition:{x2:i()(n),x1:i()(o)},children:(u,p)=>w(je,{children:[w("g",{transform:"translate(0,25)",children:[d("rect",{x:"0",width:p-u,height:"6",className:"range-area",fill:"green"}),d("text",{textAnchor:"middle",x:(p-u)/2,y:"-5",fontSize:"12",fill:"red",fontWeight:"bolder",fillOpacity:s.isActive?1:.6,children:t})]}),d(hd,{x:-20,y:10,onDelete:l})]})})}))}function D1({activeTab:e,spectraAnalysis:t,displayerKey:n}){const o=c.exports.useMemo(()=>{const{options:{columns:i}}=t[e]||{options:{columns:{}}};return i},[e,t]),s=c.exports.useMemo(()=>Object.keys(o).map(i=>i,[]),[o]);return!s||s.length===0?null:f("g",{clipPath:`url(#${n}clip-chart-1d)`,children:s.map(i=>f(T1,{columnKey:i,rangeData:o[i]},i))})}const R1=c.exports.memo(D1);function P1(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=$();return f(R1,{activeTab:e,spectraAnalysis:t,displayerKey:n})}const Un=[{label:"massive (m)",value:"m",multiplicity:null},{label:"singlet (s)",value:"s",multiplicity:1},{label:"doublet (d)",value:"d",multiplicity:2},{label:"triplet (t)",value:"t",multiplicity:3},{label:"quartet (q)",value:"q",multiplicity:4},{label:"quintet (i)",value:"i",multiplicity:5},{label:"sextet (x)",value:"x",multiplicity:6},{label:"septet (p)",value:"p",multiplicity:7},{label:"octet (o)",value:"o",multiplicity:8},{label:"nonet (n)",value:"n",multiplicity:9}];function I1(e){const t=Un.find(n=>e===n.label||e===n.value);return t?t.multiplicity:null}function N1(e,t=[]){if(e===void 0||e.length===0)return!1;const n=Un.find(o=>o.value===e||o.label===e);return n&&!t.includes(n.value)&&!t.includes(n.label)}function Ui(e,t=[]){return e===void 0||e.length===0?!1:!e.split("").find(n=>!N1(n,t))}function $t(e){var t,n;return e.length===1?(t=Un.find(o=>o.value===e))==null?void 0:t.label:(n=Un.find(o=>o.label===e))==null?void 0:n.value}function Kn(e){return e.length>1&&(e=$t(e)),Ui(e,["m","s"])}function M1(e,t){if(e===void 0||e===0||t===void 0)return[1];let n=2*t+1,o=[];for(let s=0;s<n-1;s++)o.push(1);for(let s=0;s<e-1;s++){let i=o.slice();for(let r=1;r<n;r++){for(let l=0;l<o.length-1;l++)i[l+r]+=o[l];i.push(1)}o=i.slice()}return o}const Ks=["red","green","blue","magenta"];function Xr({signal:e,startY:t,levelHeight:n}){const{scaleX:o}=me();return f("line",{x1:o()(e.delta),y1:t,x2:o()(e.delta),y2:t+n,stroke:Ks[0]},`startLevelNode_${e.id}`)}function Yr({signal:e,startY:t,levelHeight:n,fontSize:o,showLabels:s}){const{scaleX:i}=me();return f("text",{textAnchor:"middle",x:i()(e.delta),y:t+n/2,fontSize:o,lengthAdjust:"spacing",fill:"black",visibility:s?"visible":"hidden",children:e.multiplicity},`multiplicityString_${e.id}`)}function _1({nodesData:e,levelHeight:t,startY:n,signalID:o,labelOptions:s,showLabels:i}){const{scaleX:r}=me(),l=c.exports.useCallback(({startX:a,_startX:u,ratio:p,multiplicityIndex:h,color:m})=>{const g=2*h+2,x=n+g*t,y=n+(g+1)*t;return F("g",{children:[f("text",{textAnchor:"middle",x:r()(u)+s.distance,y:y+2*(t/3),fontSize:s.fontSize,fill:m,visibility:i?"visible":"hidden",children:p}),f("line",{x1:r()(a),y1:x,x2:r()(u),y2:y,stroke:m}),f("line",{x1:r()(u),y1:y,x2:r()(u),y2:y+t,stroke:m})]},`${h}_${o}_${a}_${u}_${p}`)},[o,s.distance,s.fontSize,r,i,n,t]);return f(et,{children:e==null?void 0:e.map(a=>l(a))})}function F1(e,t){function n(o,s,i,r){var h;if(!e.multiplicity)return null;if(o>=e.multiplicity.length)return i;const l=Ks[o%Ks.length],a=s.findIndex(m=>m===o),u=V(t,"info.originFrequency",0),p=a>=0&&u>0&&((h=e==null?void 0:e.js)==null?void 0:h[a])?e.js[a].coupling/u:null;if(!p)i.push({startX:r,_startX:r,ratio:1,multiplicityIndex:o,color:l}),n(o+1,s,i,r);else{const m=e.multiplicity||"",g=M1(I1(m.charAt(o)),.5);let x=g.length%2===0?r-g.length/2*p+p/2:r-(g.length/2-.5)*p;g.forEach((y,k)=>{k>0&&(x+=p),i.push({startX:r,_startX:x,ratio:y,multiplicityIndex:o,color:l}),n(o+1,s,i,x)})}return i}return n}const Gr={cursor:"default",opacity:.6,strokeWidth:1};function Wr(e){return[e.id].concat(e.assigned.x||[])}function fd({rangeFrom:e,rangeTo:t,signal:n,labelOptions:o={distance:10,fontSize:11}}){const{scaleX:s,scaleY:i}=me(),{data:r,activeSpectrum:l,toolOptions:{selectedTool:a},width:u}=$(),p=ct(n.id),h=ie(Wr(p),{type:ue.SIGNAL,extra:Wr(p)}),m=c.exports.useMemo(()=>V(r,`${l==null?void 0:l.index}`,null),[l,r]),[g,x]=c.exports.useState({x1:n.delta,x2:n.delta}),[y,k]=c.exports.useState({width:0,height:0,levelHeight:0}),[v,C]=c.exports.useState(!1),[E,T]=c.exports.useState(!1);c.exports.useEffect(()=>{var H;const A=!Ui(n.multiplicity,["m"]),P=A?Math.abs(s()(g.x1)-s()(g.x2)):Math.abs(s()(g.x1)-s()(g.x2))+o.distance,I=A?P/3:P/2,O=((H=n==null?void 0:n.multiplicity)==null?void 0:H.length)||0,L=A?I/(O+2):I/(2*O+2);k({width:P,height:I,levelHeight:L}),C(A)},[o.distance,s,n.multiplicity,g.x1,g.x2]),c.exports.useEffect(()=>{y.width/u>=.1?T(!0):T(!1)},[y.width,u]);const N=c.exports.useMemo(()=>{let A;return m.data.x.forEach((P,I)=>{P>=e&&P<=t&&(!A||m.data.re[I]>A)&&(A=m.data.re[I])}),i(m.id)(A)-y.height-30},[m.data.x,m.data.re,m.id,i,y.height,e,t]),D=c.exports.useMemo(()=>{if(n.multiplicity){const A=F1(n,m),P=n.multiplicity.split("").map((I,O)=>Kn(I)?O:void 0).filter(I=>I!==void 0);return A(0,P,[],n.delta)}return[]},[n,m]);c.exports.useEffect(()=>{if(v)x({x1:e,x2:t});else{const A={x1:n.delta,x2:n.delta};D.forEach(P=>{P.startX<A.x1&&(A.x1=P.startX),P.startX>A.x2&&(A.x2=P.startX),P._startX<A.x1&&(A.x1=P._startX),P._startX>A.x2&&(A.x2=P._startX)}),x(A)}},[v,e,t,n.delta,n.multiplicity,D]);const R=c.exports.useMemo(()=>{const{levelHeight:A}=y,P=N;let I=P;const O=N+A;if(I=O,I+=A,v){const L=s()(e),H=s()(t),X=`M ${L} ${I+A} ${L} ${I} ${s()(n.delta)} ${I} ${H} ${I} ${H} ${I+A}`;return w("g",{children:[d(Yr,{signal:n,startY:P,levelHeight:A,fontSize:o.fontSize,showLabels:E}),d(Xr,{signal:n,startY:O,levelHeight:A}),d("path",{d:X,stroke:"blue",fill:"none"})]})}return w("g",{children:[d(Yr,{signal:n,startY:P,levelHeight:A,fontSize:o.fontSize,showLabels:E}),d(Xr,{signal:n,startY:O,levelHeight:A}),d(_1,{nodesData:D,signalID:D,showLabels:E,startY:N,labelOptions:o,levelHeight:A})]})},[y,N,v,n,o,E,D,s,e,t]);return d("g",{css:h.isActive||p.isActive?S(b({},Gr),{opacity:1,strokeWidth:1.5}):Gr,onMouseEnter:()=>{p.onMouseEnter("x"),h.show()},onMouseLeave:()=>{p.onMouseLeave("x"),h.hide()},onClick:a&&a===_.editRange.id?()=>null:A=>{A.shiftKey&&(A.stopPropagation(),p.onClick("x"))},children:R})}function L1({range:e}){return(e==null?void 0:e.signals)&&e.signals.length>0&&e.signals.map(t=>f(fd,{rangeFrom:e.from,rangeTo:e.to,signal:t},t.id))}const O1=c.exports.memo(L1);function $1(){const{toolOptions:{data:{tempRange:e}}}=$();return f(O1,{range:e})}const H1=M`
  pointer-events: bounding-box;
  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */

  .delete-button {
    visibility: hidden;
  }
`,z1=M`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  .range-area {
    height: 100%;
    fill: #ff6f0057;
  }
  .delete-button {
    visibility: visible;
    cursor: pointer;
  }
`;function V1({rangeData:e,showMultiplicityTrees:t,selectedTool:n,startEditMode:o}){const{id:s,from:i,to:r,integration:l,signals:a}=e,u=Be(),p=ct(s),h=ie([p.id].concat(p.assigned.x||[]).concat(Yi(u,a.map(D=>D.id))),{type:ue.RANGE,extra:{id:s}}),{scaleX:m}=me(),g=Y(),[x,y]=c.exports.useState(!1),[k,v]=c.exports.useState(!1);c.exports.useEffect(()=>{n&&n===_.editRange.id?v(!0):v(!1)},[n]),c.exports.useEffect(()=>{y(!La(e))},[e]);const C=c.exports.useCallback(D=>{g({type:zc,data:S(b({},e),{from:m().invert(D.x2),to:m().invert(D.x1)})})},[g,e,m]),E=c.exports.useCallback(()=>{p.onMouseEnter("x"),h.show()},[p,h]),T=c.exports.useCallback(()=>{p.onMouseLeave("x"),h.hide()},[p,h]),N=c.exports.useCallback(D=>{n===_.rangesPicking.id&&D.shiftKey&&!k&&p.onClick("x")},[p,k,n]);return w("g",{"data-test-id":"range",style:{outline:"none"},css:k||h.isActive||p.isActive?z1:H1,onMouseEnter:E,onMouseLeave:T,onClick:N,children:[d(Zi,{tag:"svg",initialPosition:{x1:m()(r),x2:m()(i)},onEnd:C,children:(D,R)=>w("g",{transform:"translate(0,10)",children:[d("rect",{"data-no-export":"true",x:"0",width:R-D,height:"6",className:"range-area",fill:"green",fillOpacity:!x||h.isActive||p.isActive?1:.4}),d("text",{textAnchor:"middle",x:(R-D)/2,y:"20",fontSize:"10",fill:"red",fillOpacity:!x||h.isActive||p.isActive?1:.6,children:l!==void 0?l.toFixed(2):""})]})}),o?d($1,{}):t&&a&&a.length>0&&a.map(D=>d(fd,{rangeFrom:i,rangeTo:r,signal:D},D.id))]},s)}function j1({range:e}){const t=cd(e);return f("path",{className:"line",stroke:"black",strokeWidth:"1",fill:"none",d:t})}function B1({ranges:e,displayerKey:t,selectedTool:n,editRangeID:o,showMultiplicityTrees:s,showRangesIntegrals:i}){var r;return f("g",{clipPath:`url(#${t}clip-chart-1d)`,children:(r=e==null?void 0:e.values)==null?void 0:r.map(l=>F(c.exports.Fragment,{children:[f(V1,{rangeData:l,selectedTool:n,showMultiplicityTrees:s,startEditMode:!!(o&&o===l.id)}),i&&f(j1,{range:l})]},l.id))})}const X1=c.exports.memo(B1),Y1={ranges:{}};function G1(){const{displayerKey:e,toolOptions:{selectedTool:t,data:{tempRange:n,showMultiplicityTrees:o,showRangesIntegrals:s}}}=$(),{ranges:i}=ve(Y1);return f(X1,{ranges:i,showMultiplicityTrees:o,showRangesIntegrals:s,selectedTool:t,displayerKey:e,editRangeID:(n==null?void 0:n.id)||""})}const W1=M`
  pointer-events: bounding-box;
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */

  .zone-area {
    height: 100%;
    fill: #b8b8b857;
    cursor: pointer;
  }
  .delete-button {
    display: none;
    cursor: pointer;
  }
  :hover .delete-button {
    display: block;
  }
`;function Z1(){const{toolOptions:e}=$(),{scaleX:t}=me(),n=Y(),o=c.exports.useCallback(i=>{n({type:$c,id:i})},[n]),s=c.exports.useMemo(()=>e.data.baseLineZones,[e]);return d(je,{children:s.length>0&&d("g",{children:s.map(i=>w("g",{transform:`translate(${t()(i.to)},0)`,css:W1,children:[d(hd,{x:-20,y:10,onDelete:()=>o(i.id)}),d("rect",{x:"0",width:`${t()(i.from)-t()(i.to)}`,className:"zone-area"})]},i.id))})})}function U1({mode:e,width:t,height:n,margin:o,displayerKey:s}){return F("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-1d`,children:f("rect",{width:`${t-o.left-o.right}`,height:`${n}`,x:`${o.left}`,y:`${0}`})})}),f(n1,{}),f(e1,{}),f(i1,{}),f(G1,{}),f(A1,{}),f(P1,{}),f(Z1,{}),f(jv,{}),f(l1,{}),f("g",{className:"container",style:{pointerEvents:"none"},children:f(u1,{showGrid:!0,mode:e})})]})}const Zr=M`
  display: flex;
  flex-firection: row;
  align-items: center;
  pointer-events: bounding-box;
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  background-color: #f7f7f7;
  height: 30px;
  padding: 6px;
  color: #8d0018;
  position: absolute;
  width: 100%;
  bottom: 0;

  div {
    margin: 0px 10px;
    display: inline-block;

    .label {
      font-size: 12px;
      color: #4d4d4d;
      font-weight: bold;
    }
    .value {
      font-weight: bold;
      font-size: 14px;
      display: inline-block;
    }
    .unit {
      font-weight: bold;
      font-size: 10px;
    }
    .xvalue {
      min-width: 50px;
    }
    .yvalue {
      min-width: 80px;
    }
  }

  .separator {
    border-left: 2px solid gray;
    margin: 0 20px;
    width: 1px;
    height: 100%;
  }
`;function K1({margin:e,width:t,height:n,activeSpectrum:o,spectrum:s,activeTab:i}){var g,x,y,k;let r=c.exports.useContext(ut);const{startX:l,endX:a,step:u}=c.exports.useContext(wt),{scaleX:p}=me(),h=Xe(i),m=c.exports.useCallback(v=>{if(s){const C=wn(s),E=Ze(C.x,p().invert(v));return C.y[E]}return 1},[s,p]);return!r||r.y<e.top||r.x<e.left||r.x>t-e.right||r.y>n-e.bottom?d("div",{css:Zr}):w("div",{css:Zr,children:[d(Rp,{}),w("div",{children:[d("span",{className:"label",children:" \u{1D6C5}: "}),d("span",{className:"value",children:h(p().invert(r.x))}),d("span",{className:"unit",children:"ppm"}),o&&((g=s==null?void 0:s.info)==null?void 0:g.originFrequency)&&w(je,{children:[w("span",{className:"value",children:["\xA0(",h(p().invert(r.x)*((x=s==null?void 0:s.info)==null?void 0:x.originFrequency),"hz")]}),d("span",{className:"unit",children:"Hz"}),d("span",{className:"value",children:") "})]})]}),u==="brushing"&&w("div",{children:[d("span",{className:"label",children:" \u0394ppm: "}),d("span",{className:"value",children:(p().invert(l)-p().invert(a)).toPrecision(6)})]}),o&&w(c.exports.Fragment,{children:[((y=s==null?void 0:s.info)==null?void 0:y.originFrequency)&&u==="brushing"&&w("div",{children:[d("span",{className:"label",children:" \u0394Hz: "}),d("span",{className:"value",children:((p().invert(l)-p().invert(a))*((k=s==null?void 0:s.info)==null?void 0:k.originFrequency)).toPrecision(5)})]}),u==="brushing"&&w("div",{children:[d("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[(m(l)/(m(a)||Number.MIN_VALUE)*100).toFixed(2),"%"]})]})]}),o&&w(c.exports.Fragment,{children:[d("div",{className:"separator"}),d(Pp,{}),w("div",{children:[d("span",{className:"label",children:"Intensity: "}),d("span",{className:"value yvalue",children:h(m(r.x))})]})]})]})}const q1=c.exports.memo(K1);function J1(){const{margin:e,width:t,height:n,activeSpectrum:o,activeTab:s}=$(),i=ve(null);return d(q1,{margin:e,width:t,height:n,activeSpectrum:o,spectrum:i,activeTab:s})}const Ao={container:{position:"absolute",left:"10px",top:"10px"},value:{width:"67px",display:"inline-block",margin:"0 5px",fontSize:"12px"},colorIndicator:{width:"10px",height:"1px",borderBottom:"2px solid",display:"inline-block",marginBottom:"3px"},name:{fontSize:"12px"}};function Q1({datum:e}){const{scaleX:t}=Gi(),n=c.exports.useContext(ut);if(!t||!n)return null;const o=Ze(e.x,t().invert(n.x));return f("span",{style:Ao.value,children:e.y[o]})}function eC(){const{data:e,activeTab:t,xDomains:n}=$(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{function r(l){s(l)}return de.on("showYSpectraTrackers",r),()=>{de.off("showYSpectraTrackers",r)}},[]);const i=c.exports.useMemo(()=>o&&e.map(r=>r.display.isVisible&&n[r.id]&&r.info.nucleus===t&&F("div",{style:{display:"block"},children:[f("span",{style:S(b({},Ao.colorIndicator),{borderColor:r.display.color})}),f(Q1,{datum:wn(r)}),f("span",{style:Ao.value,children:r.display.name})]},r.id),[]),[t,e,o,n]);return o?f("div",{style:Ao.container,children:i}):null}const q={radius:10,borderColor:"#1f1f1f",strokeWidth:1,fillOpacity:0,SVGPadding:1};function tC(){const{height:e,width:t,margin:n,activeSpectrum:o,data:s,mode:i,toolOptions:{selectedTool:r},verticalAlign:l}=$(),{scaleX:a,scaleY:u}=me();let p=c.exports.useContext(ut);const h=c.exports.useContext(wt),[m,g]=c.exports.useState();return c.exports.useEffect(()=>{const x=o?ms(l,{index:(o==null?void 0:o.index)||1,align:"center"}):0,k=((v,C)=>{if(o&&p&&r===_.peakPicking.id){const E=[a().invert(C.x-v),a().invert(C.x+v)].sort((P,I)=>P-I),T=s.find(P=>P.id===o.id);if(!T)throw new Error("Unreachable");const N=wn(T),D=N.x.findIndex(P=>P>=E[1])-1,R=N.x.findIndex(P=>P>=E[0]),A=N.y.slice(R,D);if(A&&A.length>0){const P=Pl(A),I=A.findIndex(L=>L===P),O=N.x[R+I];return{x:a()(O),y:u(o.id)(P)-x,xIndex:R+I}}}return null})(10,p);g(k)},[o,s,i,p,a,u,r,l]),r!==_.peakPicking.id||!m||!o||h.step==="brushing"||!p||p.y<n.top||p.left<n.left||p.x>t-n.right||p.y>e-n.bottom?null:f("div",{style:{cursor:"crosshair",transform:`translate(${m.x}px, ${m.y}px)`,transformOrigin:"top left",position:"absolute",top:-(q.radius+q.SVGPadding),left:-(q.radius+q.SVGPadding),pointerEvents:"none",overflow:"visible"},children:F("svg",{width:q.radius*2+q.SVGPadding*2,height:q.radius*2+q.SVGPadding*2,children:[f("circle",{cx:q.radius+q.SVGPadding,cy:q.radius+q.SVGPadding,r:q.radius,stroke:q.borderColor,strokeWidth:q.strokeWidth,fillOpacity:q.fillOpacity}),f("line",{x1:q.radius+q.SVGPadding,y1:q.SVGPadding,x2:q.radius+q.SVGPadding,y2:q.radius*2+q.SVGPadding,stroke:q.borderColor,strokeWidth:q.strokeWidth}),f("line",{x1:q.SVGPadding,y1:q.radius+q.SVGPadding,x2:q.radius*2+q.SVGPadding,y2:q.radius+q.SVGPadding,stroke:q.borderColor,strokeWidth:q.strokeWidth})]})},"peakPointer")}const nC={transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",width:1,backgroundColor:"red"};function oC(){const{height:e,toolOptions:{selectedTool:t,data:{pivot:n}}}=$(),{scaleX:o}=me();return _.phaseCorrection.id!==t?null:f("div",{style:S(b({},nC),{transform:`translate(${o()(n.value)}px, 0px)`,height:e})})}const sC={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-30px",pointerEvents:"none",overflow:"visible",userSelect:"none"};function iC(){const{height:e,width:t,margin:n,data:o,activeSpectrum:s}=$(),{scaleX:i}=me(),r=c.exports.useContext(ut),l=c.exports.useContext(wt),a=c.exports.useMemo(()=>s?o.find(m=>m.id===s.id):null,[s,o]),u=Xe(a==null?void 0:a.info.nucleus),p=c.exports.useCallback(h=>{if(a){const m=i().invert(h);return u(m)}},[a,u,i]);return!s||l.step==="brushing"||!r||r.y<n.top||r.x<n.left||r.x>t-n.right||r.y>e-n.bottom?null:f("div",{style:S(b({},sC),{transform:`translate(${r.x}px, ${r.y}px)`}),children:f("span",{children:p(r.x)})},"xLabelPointer")}function rC({emptyText:e=void 0}){const{current:{display:{general:t}}}=re(),n=$(),{toolOptions:{selectedTool:o},isLoading:s,data:i,mode:r,width:l,height:a,margin:u,activeSpectrum:p,xDomain:h,xDomains:m,yDomain:g,yDomains:x,verticalAlign:y,displayerKey:k}=n,v=Y(),C=he(),E=le(),[T,N]=c.exports.useReducer(fv,ed);c.exports.useEffect(()=>{h.length>0&&g.length>0&&l&&a&&N({type:Qu,payload:{yDomain:g,yDomains:x,xDomain:h,xDomains:m,margin:u,height:a,width:l,verticalAlign:y,mode:r}})},[a,u,r,y,l,h,m,g,x]);const D=c.exports.useCallback(I=>{const O=()=>{if(!T.scaleX||!T.scaleY)return;const{startX:L,endX:H}=I,X=T.scaleX().invert(L),J=T.scaleX().invert(H);de.emit("brushEnd",S(b({},I),{range:[X,J].sort((z,j)=>z-j)}))};if(I.altKey)switch(o){case _.rangesPicking.id:{t!=null&&t.disableMultipletAnalysis||C.show(f(Ov,b({data:i,activeSpectrum:p,scaleX:T.scaleX},I)),{onClose:()=>{C.close()}});break}}else if(I.shiftKey)switch(o){case _.integral.id:v(b({type:fc},I));break;case _.rangesPicking.id:{const[L,H]=Gt(n,{startX:I.startX,endX:I.endX});if(!p)break;const{data:{x:X}}=n.data[p.index],{fromIndex:J,toIndex:z}=qn(X,{from:L,to:H});z-J<=Po?v({type:jc,payload:b({},I)}):E.error(`Advanced peak picking only available for area up to ${Po} points`);break}case _.multipleSpectraAnalysis.id:v(b({type:nu},I));break;case _.peakPicking.id:v(b({type:ac},I));break;case _.baseLineCorrection.id:v({type:Oc,zone:{from:I.startX,to:I.endX}});break;case _.exclusionZones.id:v({type:fu,payload:{from:I.startX,to:I.endX}});break;default:O();break}else switch(o){default:o!=null&&v(b({type:us},I));break}},[T,o,t==null?void 0:t.disableMultipletAnalysis,C,i,p,v,n,E]),R=c.exports.useCallback(()=>{v({type:yn,zoomType:Bn.STEP_HORIZONTAL})},[v]),A=c.exports.useCallback(I=>{v({type:cs,event:I,selectedTool:o})},[v,o]),P=c.exports.useCallback(I=>{const O=()=>{if(!T.scaleX)return;const L=T.scaleX().invert(I.x);de.emit("mouseClick",S(b({},I),{xPPM:L}))};if(I.shiftKey)switch(o){case _.peakPicking.id:v({type:lc,mouseCoordinates:I});break;case _.editRange.id:O();break}else switch(o){case _.phaseCorrection.id:v({type:Fi,position:I.x});break}},[v,T,o]);return f(mv,{value:T,children:f(ni,{children:({height:I,width:O})=>f(Ju,{height:I,width:O,children:F("div",{style:{height:"100%",position:"relative"},children:[f(zu,{isLoading:s,emptyText:e}),T.scaleX&&T.scaleY&&i&&i.length>0&&f(ea,{onBrush:D,onDoubleClick:R,onClick:P,onZoom:A,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:F(ta,{style:{width:"100%",height:"100%",position:"absolute"},children:[f(eC,{}),f(Vu,{}),f(Eo,{brushType:De.X}),f(iC,{}),f(tC,{}),f(oC,{}),f(J1,{}),f(U1,{width:l,height:a,margin:u,mode:r,displayerKey:k})]})})]})})})})}const bo={container:{margin:"25px"},header:{backgroundColor:"#ffffff",padding:"20px",borderRadius:"10px",fontSize:"30px",textAlign:"center"},title:{textDecoration:"underline"},body:{marginTop:"10px",whiteSpace:"pre-wrap",backgroundColor:"white",padding:"20px",borderRadius:"10px",color:"red"}};function lC(e){return F("div",{style:bo.container,children:[f("p",{style:bo.header,children:"Something went wrong."}),F("details",{style:bo.body,children:[f("p",{style:bo.title,children:e.error.message}),e.error.stack]})]})}const ho=c.exports.forwardRef((e,t)=>{const{checked:n=!1,disabled:o=!1,name:s="",onChange:i=()=>null,style:r={}}=e,[l,a]=c.exports.useState(n),u=c.exports.useCallback(p=>{a(!l),i(p)},[l,i]);return f("input",{ref:t,type:"checkbox",name:s,id:s,onChange:u,defaultChecked:n,disabled:o,style:r})});function mt(e){const m=e,{label:t,name:n,onChange:o=()=>null,className:s="checkbox",reverse:i=!1,style:r={container:{},label:{},checkbox:{}}}=m,l=G(m,["label","name","onChange","className","reverse","style"]),{values:a,setFieldValue:u}=pe(),p=i?!V(a,n):V(a,n),h=c.exports.useCallback(g=>{g.persist(),o(g),u(n,i?p:!p)},[n,o,i,u,p]);return F("div",{className:`${s} check-${p}`,style:r.container?r.container:{},children:[t&&f("label",{htmlFor:n,className:"checkbox-label",style:r.label?r.label:{},children:t}),f(ho,S(b({},l),{name:n,checked:p,onChange:h,style:r.checkbox?r.checkbox:{}}))]})}const ce=c.exports.forwardRef((e,t)=>{const{onSubmit:n=()=>null,initialValues:o={},validationSchema:s=null}=e;return f(Ip,{innerRef:t,initialValues:o,onSubmit:n,validationSchema:s,children:f(et,{children:e.children})})});function md(e){const t=c.exports.useRef();return c.exports.useEffect(()=>{e.forEach(n=>{!n||(typeof n=="function"?n(t.current):n.current=t.current)})},[e]),t}const Ds={label:{lineHeight:2,userSelect:"none"},inputWrapper:{height:"100%",width:"100px",borderRadius:"5px",borderWidth:"0.55px",borderColor:"#c7c7c7",borderStyle:"solid",display:"flex",flexDirection:"row",alignItems:"center",overflow:"hidden"},input:{outline:"none",flex:1,height:"100%",textAlign:"center",width:"100%"},clearButton:{height:"calc(100% - 4px)",borderRadius:"50%",backgroundColor:"gray",color:"white",aspectRatio:"1",fontSize:"60%",padding:0}},kt=c.exports.forwardRef((C,v)=>{var E=C,{value:e="",name:t,style:n={input:{},inputWrapper:{}},onChange:o=()=>null,debounceTime:s=0,onKeyDown:i=()=>null,checkValue:r=()=>!0,type:l="text",enableAutoSelect:a=!1,className:u,format:p=()=>T=>T,onBlur:h=()=>null,onFocus:m=()=>null,renderIcon:g=null,canClear:x=!1,onClear:y}=E,k=G(E,["value","name","style","onChange","debounceTime","onKeyDown","checkValue","type","enableAutoSelect","className","format","onBlur","onFocus","renderIcon","canClear","onClear"]);const[T,N]=c.exports.useState(e),D=c.exports.useRef(),R=md([v,D]),A=c.exports.useRef(Ko(X=>{o(X)},s)).current;c.exports.useEffect(()=>{N(e)},[e]),c.exports.useEffect(()=>{var X;a&&((X=R==null?void 0:R.current)==null||X.select())},[a,R]);const P=c.exports.useCallback(X=>p()(l==="number"?String(X).trim()==="-"?Number(0):Number(X):X),[p,l]),I=c.exports.useCallback(X=>{X.persist(),X.stopPropagation(),X.preventDefault();function J(j){if(l==="number"){const K=/^(?:-?[0-9]*|[0-9]\d*)(?:\.\d{0,20})?$/;return!!(j.trim()===""||K.test(j))}return!0}const z=X.target.value;if(J(z)&&r(z)){const j=p();N(j(z));const K=S(b({},X),{target:{name:X.target.name,value:P(z)}});s?A(K):o(K)}},[r,A,s,p,P,o,l]),O=c.exports.useCallback(X=>{X.persist(),i(S(b({},X),{target:{name:X.target.name,value:P(T)}}))},[P,i,T]),L=c.exports.useCallback(X=>{X.stopPropagation()},[]),H=c.exports.useCallback(()=>{N(""),y==null||y()},[y]);return F("div",{style:b(b({},Ds.inputWrapper),n!=null&&n.inputWrapper?n.inputWrapper:{}),className:`input ${u||""}`,children:[g==null?void 0:g(),f("input",S(b({},k),{ref:R,name:t,style:b(b({},Ds.input),n!=null&&n.input?n.input:{}),"data-test-id":t?`input-${t}`:"",type:"text",value:T,onChange:I,onKeyDown:O,onKeyPress:L,onDoubleClick:X=>X.stopPropagation(),onFocus:m,onBlur:h})),x&&T&&f("button",{type:"button",style:Ds.clearButton,onClick:H,children:f("span",{style:{display:"block",margin:"0 auto"},children:"\u2715"})})]})});function W(e){const C=e,{name:t,style:n={label:{},input:{}},onChange:o=()=>null,checkValue:s=()=>!0,type:i="text",className:r="",value:l=null,format:a=()=>E=>E,checkErrorAfterInputTouched:u=!0}=C,p=G(C,["name","style","onChange","checkValue","type","className","value","format","checkErrorAfterInputTouched"]),{values:h,handleChange:m,setFieldValue:g,errors:x,touched:y}=pe(),k=c.exports.useCallback(E=>{o(E),m(E)},[m,o]);c.exports.useEffect(()=>{l&&g(t,l)},[t,g,l]);const v=c.exports.useMemo(()=>u?V(x,t)&&V(y,t):V(x,t),[u,x,t,y]);return f(kt,b({name:t,value:l||V(h,t),onChange:k,type:i,style:S(b({},n),{inputWrapper:b(b({},n.input),v&&{borderColor:"red",outline:"none"})}),checkValue:s,className:r,format:a},p))}const ht=M`
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    text-align: center;
    padding: 10px 0 10px 0px;
    margin: 0px;
    color: #005d9e;
    place-items: normal;
    text-transform: none;
    background-color: #fcfcfc;
  }

  .tab-content {
    width: 100%;
  }
  .row {
    display: flex;
  }

  .inner-content {
    padding: 15px 30px;
    width: 100%;
    overflow: auto;
  }

  button:focus {
    outline: none;
  }
  button:not([disabled]):hover {
    color: black;
  }
  .btn:not([disabled]):hover {
    background-color: #ffffff;
  }
  .btn:disabled {
    opacity: 0.5;
  }
  .btn {
    border: none;
    padding: 0 15px;
    background-color: #ffffff5e;
    border-radius: 5px;
    height: 25px;
  }

  .primary {
    background-color: #e2e2e2;
  }

  .footer-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    background: rgb(242, 242, 242);
    background: -moz-linear-gradient(
      0deg,
      rgba(242, 242, 242, 1) 0%,
      rgba(245, 245, 245, 1) 37%,
      rgba(255, 255, 255, 1) 90%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(242, 242, 242, 1) 0%,
      rgba(245, 245, 245, 1) 37%,
      rgba(255, 255, 255, 1) 90%
    );
    background: linear-gradient(
      0deg,
      rgba(242, 242, 242, 1) 0%,
      rgba(245, 245, 245, 1) 37%,
      rgba(255, 255, 255, 1) 90%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f2f2f2",endColorstr="#ffffff",GradientType=1);
    padding: 6px 15px;
    height: 55px;
  }

  .section-header {
    font-size: 13px;
    color: #2ca8ff;
    margin-bottom: 10px;
    border-bottom: 0.55px solid #f9f9f9;
    padding: 6px 2px;
  }

  .custom-label {
    font-size: 12px;
    font-weight: bold;
    margin-right: 10px;
    width: 120px;
  }
  .margin-10 {
    margin: 10px 0;
  }
  .padding-h-10 {
    margin: 10px;
  }

  .input {
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    padding: 5px;
    width: 100px;
    margin-right: 10px;
    height: initial !important;
  }

  .close-bt {
    border: none;
    color: red;
    background-color: transparent;
    outline: none;
    position: absolute;
    right: 10px;
    top: 2px;
    width: 30px;
    height: 30px;
  }
`,aC=M`
  .row {
    align-items: center;
  }

  .inner-content {
    flex: 1;
  }

  .custom-label {
    width: 80px;
  }

  .name {
    width: 100% !important;
    text-align: left !important;
  }

  .data-export-group {
    label:first-child {
      margin-right: 10px;
    }
    label {
      display: inline-block;
    }
    input[type='radio'] {
      margin-right: 5px;
    }
  }
`,cC={name:"",compressed:!1,pretty:!1,dataExportOption:bt.ROW_DATA};function uC({onClose:e,onSave:t,name:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{o.current.submitForm()},[]),i=c.exports.useCallback(r=>{t(r),e==null||e()},[e,t]);return w("div",{css:[ht,aC],children:[w("div",{className:"header handle",children:[d("span",{children:"Save as ... "}),d(fe,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",children:w(ce,{ref:o,initialValues:S(b({},cC),{name:n}),onSubmit:i,children:[w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Name"}),d(W,{name:"name",className:"name",style:{inputWrapper:{width:"100%"}}})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Compressed"}),d(mt,{name:"compressed"})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Pretty Format"}),d(mt,{name:"pretty"})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:" Include "}),w("div",{className:"data-export-group",children:[w("label",{children:[d(fr,{type:"radio",name:"dataExportOption",value:bt.ROW_DATA}),"Raw Data"]}),w("label",{children:[d(fr,{type:"radio",name:"dataExportOption",value:bt.DATA_SOURCE}),"Data Source"]})]})]})]})}),w("div",{className:"footer-container",children:[d("button",{type:"button",onClick:s,className:"btn primary",children:"Save"}),d("button",{type:"button",onClick:e,className:"btn",children:"Close"})]})]})}function dC(e){var s,i;let t=document.createElement("div");t.innerHTML=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0";let n=Array.prototype.slice.call(document.styleSheets).filter(r=>!r.disabled);document.body.appendChild(t),(s=window.getSelection())==null||s.removeAllRanges();let o=document.createRange();o.selectNode(t),(i=window.getSelection())==null||i.addRange(o),document.execCommand("copy");for(const r of n)r.disabled=!0;document.execCommand("copy");for(const r of n)r.disabled=!1;document.body.removeChild(t)}async function pC(e){try{return dC(e),!0}catch{return!1}}async function xs(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}async function Ur(e,t="experiment",n=0,o=!1){const s=JSON.stringify(e,(i,r)=>ArrayBuffer.isView(r)?Array.from(r):r,n);if(o)try{const i=new pn;i.file(`${t}.nmrium`,s);const r=await i.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}});fn.exports.saveAs(r,`${t}.nmrium`)}catch(i){console.log(i)}else{const i=new Blob([s],{type:"text/plain"});fn.exports.saveAs(i,`${t}.nmrium`)}}function hC(e,t,n="experiment"){const o=["name","experiment"];for(const r of e[0].data.x)o.push(r);let s=`${o.join("	")}
`;for(const r of e){const{data:{re:l},info:{experiment:a},display:{name:u}}=r,p=[u,a];for(const h of l)p.push(h);s+=`${p.join("	")}
`}const i=new Blob([s],{type:"text/tab-separated-values"});fn.exports.saveAs(i,`${n}.tsv`)}function fC(e,t="experiment"){e.generateAsync({type:"blob"}).then(n=>{fn.exports.saveAs(n,`${t}.nmredata`)})}function gd(e,t,n="experiment"){const{blob:o}=Ki(e,t);fn.exports.saveAs(o,`${n}.svg`)}function mC(e,t,n="experiment"){const{blob:o,width:s,height:i}=Ki(e,t);try{let r=document.createElement("canvas");r.width=s,r.height=i;let l=r.getContext("2d");l&&(l.fillStyle="white",l.fillRect(0,0,r.width,r.height));let a=new Image,u=URL.createObjectURL(o);a.onload=async()=>{l==null||l.drawImage(a,0,0);let p=r.toDataURL("image/png",1);fn.exports.saveAs(p,`${n}.png`),URL.revokeObjectURL(p)},a.src=u}catch(r){console.log(r)}}function gC(e){var o;const t=document.createElement("img");t.src=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0",document.body.appendChild(t);const n=document.createRange();n.selectNode(t),(o=window.getSelection())==null||o.addRange(n),document.execCommand("Copy"),document.body.removeChild(t)}function xC(e){e.toBlob(t=>{const n=new ClipboardItem({[t.type]:t});navigator.clipboard.write([n]).then(()=>{console.log("experiment copied.")},o=>{console.log(o)})})}function xd(e,t){const{blob:n,width:o,height:s}=Ki(e,t);try{let i=document.createElement("canvas");i.width=o,i.height=s;let r=i.getContext("2d");r&&(r.fillStyle="white",r.fillRect(0,0,i.width,i.height));let l=new Image;const a=URL.createObjectURL(n);l.onload=async()=>{r==null||r.drawImage(l,0,0);const u=i.toDataURL("image/png",1);navigator.clipboard.write?xC(i):gC(u),URL.revokeObjectURL(u)},l.src=a}catch(i){i instanceof ReferenceError&&alert("Your browser does not support this feature, please use Google Chrome"),console.log(i)}}function Ki(e,t){var u;let n=(u=e.getRootNode().getElementById(t))==null?void 0:u.cloneNode(!0);const o=n==null?void 0:n.getAttribute("width").replace("px",""),s=n==null?void 0:n.getAttribute("height").replace("px","");n.querySelectorAll('[data-no-export="true"]').forEach(p=>p.remove());const l=`${`<svg class="nmr-svg"  viewBox='0 0 ${o} ${s}' width="${o}"  height="${s}"  version="1.1" xmlns="http://www.w3.org/2000/svg">`+`<style>.grid line,.grid path{stroke:none;} .peaks-text{fill:#730000} .x path{stroke-width:1px} .x text{
    font-size: 12px;
    font-weight: bold;
  } 
 
  .nmr-svg,.contours{
    background-color:white;
    fill:white;
  }
  

  
  </style>`+n.innerHTML}</svg>`;return{blob:new Blob([l],{type:"image/svg+xml"}),width:o,height:s}}const bC=new pn;async function bd(e,t={}){const{spectrum:n,source:o}=t,{file:s={},jcampURL:i}=o;let r="";const l=`${n.info.dimension}d`;switch(s.extension){case"jdx":case"dx":r+=`
Jcamp_Location=file:jcamp/${l}/${n.display.name}\\`,e.file(`jcamp/${l}/${n.display.name}`,s.binary);break;case"zip":if(!s.binary)return;bC.loadAsync(s.binary).then(async a=>{var u;for(const p in a.files)p.endsWith("/")||e.file(`Bruker/${p}`,await((u=a.file(p))==null?void 0:u.async("arraybuffer")));r+=`
Spectrum_Location=file:Bruker/${yC(a)}\\`});break;default:if(!i)break;await fetch(i).then(async a=>{if(!a)return;let u=i.split("/").slice(-1);const p=`jcamp/${l}/${u}`;r+=`
Jcamp_Location=file:${p}\\`,e.file(p,await a.arrayBuffer())})}return r}function yC(e){let t=e.filter(o=>o.match("__MACOSX")?!1:!!(o.endsWith("fid")||o.endsWith("1r")||o.endsWith("ser")||o.endsWith("2rr")));const n=t.findIndex(o=>o.name.endsWith("1r")||o.name.endsWith("2rr"));return n>-1?t[n].name:t[0].name}function qi(e){Array.isArray(e)||(e=[e]);let t=[];for(let n of e)t.push(vC(n));return t}function vC(e){switch(e.toUpperCase()){case"1H":return 2;case"13C":return 1;default:return 1}}async function CC(e,t,n={labels:{byDiaID:[]}}){let{prefix:o="",labels:s}=n,i="",r=[];for(let l of e){const{info:a}=l;if(a.isFid||a.dimension>1)continue;let u="",p=l.ranges.values||[],h=l.info.nucleus,m=1,g="";r.forEach(k=>{k===h&&m++}),r.push(h),m>1&&(g=`#${m}`),u+=`${o}1D_${h.toUpperCase()}${g}>`,l.info.baseFrequency&&(u+=`
Larmor=${Number(l.info.baseFrequency).toFixed(2)}\\`);const{source:x={}}=l;u+=await bd(t,{spectrum:l,source:x});let y=qi(h)[0];for(let k of p){let v=k.signals;for(let C of v){let{multiplicity:E}=C;if((!E||E==="m")&&h==="1H")u+=`
${Number(k.from).toFixed(y)}-${Number(k.to).toFixed(y)}`;else if(C.delta)u+=`
${Number(C.delta).toFixed(y)}`;else continue;let T="";if(C.diaIDs&&C.diaIDs.length>0&&(C.diaIDs.forEach((N,D,R)=>{let A=", ";D===R.length-1&&(A=""),T+=`${s.byDiaID[N].label||N}${A}`}),u+=`, L=${T}`),h==="1H"){C.multiplicity&&(u+=`, S=${C.multiplicity}`);let N=C.js;if(Array.isArray(N)&&N.length){let D=", J=";for(const R of N){if(u+=`${D}${Number(R.coupling).toFixed(3)}`,R.diaIDs){let{diaIDs:A}=R;if(Array.isArray(A)||(A=[A]),!A.length)continue;u+=`(${s.byDiaID[A[0]].label||String(A[0])})`}D=", "}}k.integration?u+=`, E=${Number(k.integration).toFixed(y)}`:k.nbAtoms?u+=`, E=${k.nbAtoms.toFixed(y)}`:k.signals[0].nbAtoms!==void 0&&(u+=`, E=${k.signals[0].nbAtoms}`)}}v.length&&(u+="\\")}u+=`
`,/\n/.exec(u)&&(i+=u)}return i}function kC(e){switch(e.toLowerCase()){case"hsqc":case"cosy":return"1J";case"hmbc":return"NJ";default:return"NJ"}}const SC=Array.isArray;async function wC(e,t,n={labels:{}}){const{byDiaID:o}=n.labels;let s="";const i=`
> <NMREDATA_2D_`;for(let r of e){if(r.info.dimension<2)continue;let l="";const{info:a,source:u}=r;let{nucleus:p,experiment:h,pulseSequence:m}=a,g=kC(h);p&&(l+=`${i}${p[1]}_${g}_${p[0]}>`);let x=qi(p);l+=await bd(t,{spectrum:r,source:u}),h&&(l+=`
CorType=${h} \\`),m&&(l+=`
PulseProgram=${m} \\`),r.info.baseFrequency&&(l+=`
Larmor=${Number(r.info.baseFrequency[0]).toFixed(2)}\\`);let y=r.zones.values||[];for(let k of y){let v=k.signals;for(let C of v){let{x:E,y:T,peaks:N}=C,D=Kr(E,o,x[0]),R=Kr(T,o,x[1]),A=Math.max(...N.map(P=>P.z));l+=`
${D}/${R}, I=${A.toFixed(2)}\\`}}s+=l}return s.length>0?`${s}
`:""}function Kr(e,t,n){let{diaIDs:o,delta:s}=e;if(o){if(SC(o)||(o=[o]),o.length<1)return Number(s).toFixed(n);let i=o.map(r=>t[r].label).join(",");return o.length>1?`(${i})`:i}return Number(s).toFixed(n)}function EC(e){let t=[];for(const{x:n,y:o}of e)t.push(n,o);return t}function AC(e,t={groupedDiaIDs:[]}){const{groupedDiaIDs:n,molecule:o}=t;let s=Np(o,{toLabel:"H",maxLength:1}),i={},r={};for(let l of e){let{dimension:a,nucleus:u}=l.info,p=qi(u),[h,m]=a>1?["zones",EC]:["ranges",x=>x||[]],g=l[h].values||[];for(let x of g){let y=m(x.signals);for(let k=0;k<y.length;k++){let v=y[k].diaIDs||[];for(let C of v){let E=Number(y[k].delta).toFixed(p[k%a]),T=n.find(D=>D.oclID===C),N={atom:T.atoms[0],molecule:o,connections:s,atomLabel:T.atomLabel};i[C]={atoms:T.atoms.map(D=>D+1),shift:E,label:qr(N)};for(let D of T.atoms)N.atom=D,r[D]={shift:E,diaID:C,label:qr(N)}}}}}return{byAssignNumber:r,byDiaID:i}}function qr(e){const{atom:t,molecule:n,atomLabel:o,connections:s}=e;let i="";if(o!=="C"){let l=s[t].find(p=>p&&p.length>1),a=`${o}${l[0]+1}`,u=`${n.getAtomLabel(l[1])}${l[1]+1}`;i=`${a}${u}`}else i=`${o}${t+1}`;return i}const Ji={solvent:"SOLVENT",temperature:"TEMPERATURE",assignment:"ASSIGNMENT",j:"J",signals:"SIGNALS",id:"ID"};async function TC(e,t={}){const{data:n,molecules:o}=e||{data:[],molecules:[]};let s=new pn;for(const i of o)await Jr(n,s,S(b({},t),{molecule:i}));return o.length||await Jr(n,s,t),s}async function Jr(e,t,n={}){let{id:o,prefix:s=`
> <NMREDATA_`,filename:i="nmredata",molecule:r}=n,l="",a;r&&(r=Bt.Molecule.fromMolfile(r.molfile),l+=r.toMolfile(),r.addImplicitHydrogens(),a=Mp(r));let u=r?AC(e,{groupedDiaIDs:a,molecule:r}):{byDiaID:void 0,byAssignNumber:void 0};l+=`${s}VERSION>
1.1\\
`,l+=Qr(e,"temperature",{prefix:s}),l+=Qr(e,"solvent",{prefix:s}),o&&(l+=`${s+Ji.id}>
id\\
`),l+=DC(u.byDiaID,{prefix:s}),l+=await CC(e,t,{prefix:s,labels:u}),l+=await wC(e,t,{prefix:s,labels:u}),l+=`
$$$$
`,t.file(`${i}.sdf`,l)}function DC(e,t){if(!e)return"";const{prefix:n}=t;let o=`${n+Ji.assignment}>
`;for(let s in e){let i=e[s].atoms;o+=`${e[s].label}, ${e[s].shift}`;for(let r of i)o+=`, ${r}`;o+=`\\
`}return o}function Qr(e,t,n={prefix:""}){const{prefix:o}=n;let s="";for(let i of e)if(i.info[t]){s+=`${o+Ji[t]}>
${String(i.info[t])}\\
`;break}return s}function yd(){const{rootRef:e}=fs(),t=he(),n=le(),o=$(),s=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{xd(e,"nmrSVG"),h(),n.success("Image copied to clipboard")},0)}},[e,n,o]),i=c.exports.useCallback(async(h=0,m=!0)=>{if(o.data.length>0){const g=await n.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{async function x(){var v,C;const y=(C=(v=o.data[0])==null?void 0:v.display)==null?void 0:C.name,k=wr(o);await Ur(k,y,h,m),g()}x()},0)}},[n,o]),r=c.exports.useCallback(async()=>{if(o.data.length>0){const h=await n.showLoading("Exporting as NMRE process in progress");setTimeout(()=>{async function m(){var y,k;const g=(k=(y=o.data[0])==null?void 0:y.display)==null?void 0:k.name,x=await TC(o);fC(x,g),h()}m()},0)}},[n,o]),l=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as SVG process in progress");setTimeout(()=>{var g,x;const m=(x=(g=o.data[0])==null?void 0:g.display)==null?void 0:x.name;gd(e,"nmrSVG",m),h()},0)}},[e,n,o.data]),a=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as PNG process in progress");setTimeout(()=>{var g,x;const m=(x=(g=o.data[0])==null?void 0:g.display)==null?void 0:x.name;mC(e,"nmrSVG",m),h()},0)}},[e,n,o.data]),u=c.exports.useCallback(h=>{async function m(){const{name:g,pretty:x,compressed:y,dataExportOption:k}=h,v=await n.showLoading(`Exporting as ${g}.nmrium process in progress`);setTimeout(()=>{(async()=>{const C=wr(o,k);await Ur(C,g,x?2:0,y),v()})()},0)}m()},[n,o]),p=c.exports.useCallback(async()=>{var h,m;if(o.data.length>0){const g=(m=(h=o.data[0])==null?void 0:h.display)==null?void 0:m.name;t.show(f(uC,{name:g,onSave:u}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:400})}},[t,u,o.data]);return{saveToClipboardHandler:s,saveAsJSONHandler:i,saveAsNMREHandler:r,saveAsSVGHandler:l,saveAsPNGHandler:a,saveAsHandler:p}}function vd(){const e=re(),t=V(e.current,"display.general.experimentalFeatures",!1);return!((t==null?void 0:t.hidden)===!0||(t==null?void 0:t.display)===!1)}function ke(r){var l=r,{children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right"}=l,i=G(l,["children","style","onClick","popupTitle","popupPlacement"]);return f(we,{title:o,popupPlacement:s,children:f("button",S(b({style:t,type:"button",onClick:n},i),{children:e}))})}const Dt=M`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .inner-container {
    height: 100%;
    overflow: hidden;
    isolation: isolate;
  }

  .table-container {
    overflow: auto;
    height: 100%;
    display: block;
    background-color: white;
  }
`,RC=M`
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: lightgray !important;
    color: black !important;
  }

  &.toggle-active {
    background-color: gray;
    color: white;
  }
`;function PC({children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right",defaultValue:i=!1,disabled:r=!1,className:l=""}){const[a,u]=c.exports.useState(i),p=c.exports.useCallback(()=>{n(!a),u(!a)},[n,a]);return d(we,{title:o,popupPlacement:s,children:d("button",{disabled:r,css:RC,style:t,className:(a?"toggle toggle-active ":"toggle ")+l,type:"button",onClick:p,children:e})})}var We=c.exports.memo(PC);const IC=M`
  display: flex;
  flex-direction: row;
  border-bottom: 0.55px solid rgb(240, 240, 240);
  padding: 0px 5px;

  .left-container {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
  button {
    background-color: transparent;
    border: none;
    padding: 5px;
  }

  button:disabled {
    opacity: 0.6;
  }

  .counter-label {
    margin: 0;
    text-align: right;
    line-height: 22px;
    padding: 0px 10px;
    white-space: nowrap;
  }
`;function NC({counter:e,onDelete:t=()=>null,deleteToolTip:n="Delete",onFilter:o=()=>null,filterToolTip:s="",filterIsActive:i=!1,counterFiltered:r=0,children:l,onSettingClick:a=()=>null,showSettingButton:u=!1,canDelete:p=!0,style:h={},className:m=""}){return w("div",{css:IC,style:h,className:m,children:[w("div",{className:"left-container",children:[p&&d(we,{title:n,popupPlacement:"right",children:d("button",{type:"button",onClick:t,disabled:e===0,children:d(St,{})})}),s?d(We,{popupTitle:s,popupPlacement:"right",onClick:o,defaultValue:i,children:d(_p,{style:{pointerEvents:"none",fontSize:"12px"}})}):null,l]}),e!==void 0&&w("p",{className:"counter-label",children:["["," ",i&&i===!0&&r!==void 0?`${r}/${e}`:e," ","]"]}),u&&d(we,{title:"preferences",popupPlacement:"left",children:d("button",{type:"button",onClick:a,children:d(Fp,{})})})]})}var ot=c.exports.memo(NC);function MC(){const e=c.exports.useCallback(()=>{},[]);return w("div",{css:Dt,children:[d(ot,{showSettingButton:!1,canDelete:!1,children:d(ke,{popupTitle:"automatic assignment",onClick:e,children:d(Lp,{style:{fontSize:"18px"}})})}),d("div",{className:"inner-container"})]})}const _C=M`
  background-color: #ff6f0057;
`,FC=M`
  background-color: #f5f5dc;
`,Cd=M`
  border-spacing: 0;
  border: 1px solid #dedede;
  width: 100%;
  max-height: 100%;
  font-size: 12px;

  .react-contextmenu-wrapper {
    display: contents;
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th {
    position: sticky;
    background-color: white;
    z-index: 0;
    top: 0;
  }
  th,
  td {
    margin: 0;
    padding: 0.15rem 0.4rem;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;

    // :last-child {
    //   border-right: 0;
    // }
    button {
      background-color: transparent;
      border: none;
    }
  }
`;function LC({data:e,columns:t,onMouseDown:n=()=>null}){const{getTableProps:o,getTableBodyProps:s,headerGroups:i,rows:r,prepareRow:l}=Vn.exports.useTable({columns:t,data:e},Vn.exports.useSortBy,Vn.exports.useFlexLayout);return w("table",S(b({},o()),{css:Cd,style:{height:"100%"},children:[d("thead",{children:i.map(a=>d("tr",S(b({},a.getHeaderGroupProps()),{children:a.headers.map(u=>w("th",S(b({},u.getHeaderProps(u.getSortByToggleProps())),{children:[u.render("Header"),d("span",{children:u.isSorted?u.isSortedDesc?" \u25BC":" \u25B2":""})]}),u.getHeaderProps().key))}),a.getHeaderGroupProps().key))}),d("tbody",S(b({},s()),{style:{display:"block",height:"100%",overflowY:"auto"},children:r.map(a=>(l(a),d("tr",S(b({},a.getRowProps()),{onMouseDown:n,children:a.cells.map(u=>d("td",S(b({},u.getCellProps()),{style:S(b({},u.getCellProps().style),{padding:"0px"}),children:u.render("Cell")}),u.getCellProps().key))}),a.getRowProps().key)))}))]}))}var OC=c.exports.memo(LC);const Rs={container:{height:"100%",flexDirection:"column",display:"flex",width:"100%"},tableContainer:{height:"calc(100% - 30px)",overflow:"auto",display:"block"},searchInput:{width:"100%",borderRadius:"5px",border:"0.55px solid gray",padding:"5px",marginBottom:"2px"}};function $C({info:e,meta:t}){const[n,o]=c.exports.useState({}),[s,i]=c.exports.useState([]),r=c.exports.useRef(null),l=c.exports.useCallback(u=>{const p=Object.keys(n).filter(h=>h.toLowerCase().includes(u.target?u.target.value.toLowerCase():u.toLowerCase()));i(p)},[n]);c.exports.useEffect(()=>{r.current&&l(r.current.value)},[l,r]),c.exports.useEffect(()=>{if(e&&t){const u=Object.keys(e).concat(Object.keys(t));i(u),o(b(b({},e),t))}},[e,t]);const a=c.exports.useMemo(()=>[{Header:"Parameter",sortType:"basic",minWidth:100,width:20,maxWidth:20,Cell:({row:u})=>f("p",{style:{padding:"5px",backgroundColor:"white"},children:u.original})},{Header:"Value",sortType:"basic",resizable:!0,Cell:({row:u})=>f("p",{style:{backgroundColor:"#efefef",height:"100%",padding:"5px",fontFamily:"monospace",whiteSpace:"pre",overflow:"hidden"},children:`${n[u.original]}`})}],[n]);return F("div",{style:Rs.container,children:[f("div",{children:f("input",{type:"text",style:Rs.searchInput,placeholder:"Search for parameter...",onChange:l,ref:r})}),f("div",{style:Rs.tableContainer,children:f(OC,{data:s,columns:a})})]})}const HC=c.exports.memo($C),zC={info:{},meta:{}};function VC(){const{info:e,meta:t}=ve(zC);return f(HC,{info:e,meta:t})}const jC=M`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: red;
    border-radius: 50%;

    .icon {
      color: white;
    }
  }

  .icon {
    color: #252525;
    width: 8px;
  }
`;function kd({onDelete:e,className:t="delete"}){return d("button",{css:jC,className:t,type:"button",onClick:e,children:d(oi,{className:"icon"})})}const BC=e=>M`
  position: relative;

  .delete {
    position: absolute;
    top: 2px;
    left: 2px;
  }

  ${e}
`;function XC({tabid:e,tablabel:t,isActive:n,onClick:o=()=>null,canDelete:s,onDelete:i=()=>null,tabstyles:r,render:l}){let a="tab-list-item";n&&(a+=" tab-list-active");const u=c.exports.useCallback(h=>{o(S(b({},h),{tablabel:t,tabid:e}))},[o,t,e]),p=c.exports.useCallback(h=>{h.stopPropagation(),i(S(b({},h),{tablabel:t,tabid:e}))},[i,t,e]);return w("li",{className:a,onClick:u,css:BC(r),"data-test-id":`tab-${e}`,children:[s&&d(kd,{onDelete:p}),l?l({isActive:n,title:t||"",id:e}):t]})}function Ie(e){return d(je,{children:e.children})}const el=M`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .tab-list {
    border-bottom: 1px solid #ccc;
    padding-left: 0;
    margin: 0;
  }

  .tab-list li:first-of-type {
    margin-left: 5px;
  }

  .tab-list li:hover {
    background-color: #f7f7f7;
  }

  .tab-list-item {
    display: inline-block;
    list-style: none;
    padding: 0.5rem 2rem;
  }

  .tab-list-active {
    background-color: white;
    border: solid #ccc;
    border-width: 1px 1px 0 1px;
  }

  .tab-content {
    height: 100%;
    overflow: auto;
  }
`,YC=M`
  display: flex;
  height: 100%;
  width: 100%;
  .tab-list {
    border-right: 1px solid #ccc;
    padding-left: 0;
    margin: 0;
  }

  .tab-list li:hover {
    background-color: #f7f7f7;
  }

  .tab-list li:first-of-type {
    margin-top: 10px;
  }

  .tab-list-item {
    display: block;
    list-style: none;
    margin-right: -1px;
    padding: 0.5rem 0.75rem;
  }

  .tab-list-active {
    background-color: white;
    border: solid #ccc;
    border-width: 1px 0px 1px 1px;
  }

  .tab-content {
    height: 100%;
    overflow: auto;
  }
`;var Qi=(e=>(e.TOP="TOP",e.LEFT="LEFT",e))(Qi||{});function GC({children:e,onClick:t,position:n,onDelete:o=()=>null,activeTab:s}){const i=c.exports.useCallback(u=>{const{tablabel:p,tabid:h}=u;t({tablabel:p,tabid:h})},[t]);let r;const l=c.exports.Children.map(e,u=>{if(!c.exports.isValidElement(u))return null;const{tabid:p}=u.props;return p===s&&(r=u.props.children),d(XC,S(b({},u.props),{isActive:p===s,onClick:i,onDelete:o}))}),a=c.exports.useMemo(()=>{switch(n){case"TOP":return el;case"LEFT":return YC;default:return el}},[n]);return w("div",{className:"tabs",css:a,children:[d("ol",{className:"tab-list",children:l}),d("div",{className:"tab-content",children:r})]})}var Pn=c.exports.memo(GC);function tl({direction:e,onClick:t}){return d("div",{onClick:t,css:M`
        display: flex;
        position: absolute;
        top: calc(50% - 20px);
        ${e==="right"?"right: 25px":"left: 25px"};
        height: 40px;
        width: 40px;
        justify-content: center;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        border: none;
        transition: transform ease-in 0.1s;
        background-color: #f7f7f7;

        &:hover {
          transform: scale(1.1);
          background-color: #607d8b !important;
          color: white;
        }
        img {
          transform: translateX(${e==="left"?"-2":"2"}px);
          &:focus {
            outline: 0;
          }
        }
      `,children:d(Op,{style:{transform:`scaleX(${e==="right"?"-1":"1"})`}})})}const WC=.45;function ZC({children:e,loop:t=!1,defaultIndex:n=0,onChange:o=()=>null}){const[s,{width:i}]=Ll(),[r,l]=c.exports.useState(0);c.exports.useEffect(()=>{l(n)},[n]);const a=c.exports.useMemo(()=>c.exports.Children.map(e,h=>d("div",{css:M`
              width: ${i}px;
              height: 100%;
            `,children:h},h.key)),[e,i]),u=c.exports.useCallback(()=>{l(h=>{if(a&&h===a.length-1)return o(h),t?0:h;const m=h+1;return o(m),m})},[a,t,o]),p=c.exports.useCallback(()=>{l(h=>{if(h===0)return o(h),t?0:h;const m=h-1;return o(m),m})},[t,o]);return!i&&!a?null:w("div",{css:M`
        position: relative;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        display: block;
      `,ref:s,children:[d("div",{css:M`
          transform: translateX(-${i*r}px);
          transition: transform ease-out ${WC}s;
          height: 100%;
          width: ${i*(a?a.length:1)}px;
          display: flex;
        `,children:a}),r!==0&&d(tl,{direction:"left",onClick:p}),a&&r!==a.length-1&&d(tl,{direction:"right",onClick:u})]})}var Sd=c.exports.memo(ZC);const UC=M`
  display: flex;
  flex-direction: row;
  border-top: 0.55px solid rgb(240, 240, 240);
  border-bottom: 0.55px solid rgb(240, 240, 240);
  padding: 0px 5px;

  p {
    margin: 0;
    text-align: right;
    width: 100%;
    line-height: 22px;
    padding: 0px 10px;
  }
`,KC=M`
  width: 100%;
  position: relative;
  .slider {
    height: 180px;
    width: 100%;
    padding: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .slider p {
    width: 100%;
    margin: 0 auto;
    display: block;
    position: relative;
    text-align: center;
  }
  .slider svg polygon {
    fill: gray !important;
  }
  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 36px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 20%;

    color: white;
    background-color: gray;
  }
`;function wd(e){const{molecules:t,onChange:n=()=>null,index:o}=e,[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{const l=o&&o<t.length?o:0;t&&t.length>0&&i(l)},[o,t]);const r=c.exports.useCallback(l=>{i(l),n(l)},[n]);return w("div",{children:[d("div",{css:UC,children:w("p",{children:[t&&t.length>0&&`${+(s+1)} / ${t.length}`," "]})}),d("div",{css:KC,children:d(Sd,{defaultIndex:s,onChange:r,children:t==null?void 0:t.map((l,a)=>{var u;return w("div",{className:"slider",children:[d("div",{children:l.molfile&&d($p,{id:`molSVG${a}`,width:120,molfile:l.molfile})}),w("p",{children:[d(Hp,{mf:l.mf})," - ",(u=l.mw)==null?void 0:u.toFixed(2)]})]},l.key)})})})]})}const qC=M`
  .molecule-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .title {
      padding: 0px 10px;
      width: 100%;
      text-align: center;
    }

    .molecule-selection-container {
      width: 450px;
      display: block;
      margin: 0 auto;
    }

    .newSumText {
      margin-top: 15px;
      padding: 0px 10px;
      width: 100%;

      text-align: center;
    }
  }

  .empty {
    width: 100%;
    padding: 20%;
    text-align: center;
  }
`;function JC(e){const[t,n]=c.exports.useState(),{setFieldValue:o,errors:s,values:i}=pe(),{molecules:r,activeTab:l}=$(),a=_a(l),u=c.exports.useMemo(()=>a&&r&&r.length>0&&t!==void 0&&r[t].atoms[a]?r[t].atoms[a]:0,[t,a,r]),p=c.exports.useCallback(m=>{n(m),o(e.name,r[m])},[r,e.name,o]);c.exports.useEffect(()=>{if(r&&r.length>0){const m=i[e.name]?r.findIndex(g=>g.key===i[e.name].key):-1;p(m!==-1?m:0)}},[r,e.name,p,i]);const h=c.exports.useCallback(m=>{p(m)},[p]);return d("div",{css:qC,children:a&&r&&r.length>0?w("div",{className:"molecule-container",children:[d("p",{className:"title",children:"Select a molecule as reference!"}),w("div",{className:"molecule-selection-container",children:[d(wd,{index:t,molecules:r,onChange:h}),w("p",{className:"newSumText",children:["New sum for ",a," will be ",u,"!"]})]})]}):d("p",{className:"empty",style:{color:s[e.name]?"red":"black"},children:"You have to Select a spectrum and Add a molecule from the Structure panel to select as a reference!"})})}const QC=M`
  width: 450px;
  height: 400px;
  .header {
    display: flex;
    padding: 10px;
    span {
      font-size: 14px;
      flex: 1;
    }
  }

  .tab-content {
    flex: 1;
  }

  .manual-container {
    padding: 30px 5px;

    .input {
      width: 80% !important;
      height: 36px;
      margin: 0 auto;
    }
    .input Input {
      padding: 5px;
      text-align: center;
    }
  }

  .footer-container {
    button {
      width: 20%;
      color: white;
      background-color: gray !important;
    }
    button:hover {
      border: 1px solid gray;
      color: gray;
      background-color: white !important;
    }
  }
`;function Ed({onSave:e,onClose:t,header:n,sumOptions:o}){var g;const{current:{display:{general:s,panels:i}}}=re(),[r,l]=c.exports.useState("auto"),a=c.exports.useRef(null),u=c.exports.useCallback(x=>{x.key==="Enter"&&a.current.submitForm()},[]),p=c.exports.useCallback(x=>{l(x.tabid)},[]);c.exports.useEffect(()=>{var x;if((o==null?void 0:o.sumAuto)&&!(s!=null&&s.hideSetSumFromMolecule)&&!((x=i==null?void 0:i.structuresPanel)!=null&&x.hidden)){l("auto");const{mf:y,moleculeKey:k}=o;a.current.setValues({sum:null,molecule:k&&y?{mf:y,key:k}:null})}else l("manual"),a.current.setValues({sum:(o==null?void 0:o.sum)||"",molecule:null})},[s==null?void 0:s.hideSetSumFromMolecule,i==null?void 0:i.structuresPanel,o]);const h=c.exports.useCallback(x=>{switch(r){case"auto":{const{molecule:{mf:y,key:k}}=x;e({sumAuto:!0,mf:y,moleculeKey:k});break}case"manual":{const{sum:y}=x;e({sum:y,sumAuto:!1});break}default:return}t()},[t,e,r]),m=c.exports.useMemo(()=>{switch(r){case"auto":return ee({molecule:ee().required()});case"manual":return ee({sum:ae().required()});default:return null}},[r]);return w("div",{css:[ht,QC],children:[w("div",{className:"header handle",children:[d("span",{children:n}),d(fe,{onClick:t})]}),d("div",{className:"tab-content",children:d(ce,{ref:a,onSubmit:h,initialValues:{sum:null,molecule:null},validationSchema:m,children:w(Pn,{activeTab:r,onClick:p,children:[!(s!=null&&s.hideSetSumFromMolecule)&&!((g=i==null?void 0:i.structuresPanel)!=null&&g.hidden)&&d(Ie,{tablabel:"Auto",tabid:"auto",children:d(JC,{name:"molecule"})}),d(Ie,{tablabel:"Manual",tabid:"manual",children:d("div",{className:"manual-container",children:d(W,{name:"sum",type:"number",placeholder:"Enter the new value",onKeyDown:u})})})]})})}),d("div",{className:"footer-container",children:d("button",{type:"button",onClick:()=>a.current.submitForm(),className:"btn",children:"Set"})})]})}const ek=M`
  background-color: transparent;
  border: none;
  height: 100%;
  svg {
    fill: green;
    font-size: 16px;
  }
`;function tk(e){const{className:t="",disabled:n=!1,popupPlacement:o="left",popupTitle:s="Save",onClick:i}=e;return d("div",{className:t,children:d(we,{title:s,popupPlacement:o,children:d("button",{css:ek,type:"button",onClick:i,disabled:n,className:t,children:d(zp,{})})})})}var er=c.exports.memo(tk);const nk=M`
  display: flex;
  flex-direction: row-reverse;
  border-bottom: 0.55px solid rgb(240, 240, 240);

  button {
    background-color: transparent;
    border: none;
    padding: 5px;
  }
  button:disabled {
    opacity: 0.6;
  }
`;function ok({onClose:e,onSave:t}){return w("div",{css:nk,children:[d(fe,{onClick:e,popupTitle:"close Preferences"}),d(er,{onClick:t,popupTitle:"save Preferences"})]})}var In=c.exports.memo(ok);function sk(e,t){const{onSave:n=()=>null,value:o,type:s="text",style:i,onEditStart:r=()=>null,editStatus:l=!1}=e,[a,u]=c.exports.useState();c.exports.useEffect(()=>{u(l)},[l]),c.exports.useImperativeHandle(t,()=>({startEdit:()=>{u(!0)},closeEdit:()=>{u(!1)}}));const p=c.exports.useCallback(m=>{m.target.classList.contains("editable-column")||(u(!1),window.removeEventListener("mousedown",p))},[]),h=c.exports.useCallback((m,g=null)=>{m?(window.addEventListener("mousedown",p),r(g),u(m)):(["Enter","Tab"].includes(g.key)&&n(g),["Enter","Tab","Escape"].includes(g.key)&&(u(m),window.removeEventListener("mousedown",p)))},[p,r,n]);return F("div",{style:b({display:"table",width:"100%",height:"100%"},i),onDoubleClick:m=>h(!0,m),children:[!a&&f("span",{style:{display:"table-cell",verticalAlign:"middle"},children:o}),a&&f("div",{style:{display:"table-cell",verticalAlign:"middle"},children:f(kt,{enableAutoSelect:!0,className:"editable-column",value:o,type:s,onKeyDown:m=>h(!1,m)})})]})}var lt=c.exports.forwardRef(sk);const ik=M`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding: 0px;
  margin: 0px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99999;
  padding: 2px;
  background-color: white;
  width: 150px;
  pointer-events: all;

  button {
    background-color: transparent;
    border: none;
    border-bottom: 0.55px solid #f0f0f0;
    font-size: 11px;
    padding: 5px;
    text-align: left;
    outline: none;
  }
  button:hover {
    background-color: #fafafa;
    outline: none;
  }

  button:active {
    background-color: #eaeaea;
    outline: none;
  }

  button:last-of-type {
    border: none;
  }
`;function rk({context:e},t){const[n,o]=c.exports.useState({left:0,top:0}),{rootRef:s,elementsWrapperRef:i}=fs(),[r,l]=c.exports.useState(),[a,u]=c.exports.useState(),[p,h]=c.exports.useState(null),m=c.exports.useRef();c.exports.useEffect(()=>(m.current=document.createElement("div"),i&&i.appendChild(m.current),()=>{m.current&&i&&i.removeChild(m.current)}),[i]);const g=y=>{y.preventDefault(),h(y.target.parentElement),u(!0);const k=y.clientX,v=y.clientY,C=window.innerWidth,E=window.innerHeight,T=150,N=0,D=C-k>T;let R=!D,A=E-v>N;const P=!A;D&&(R=`${k+5}px`),R&&(R=`${k-T-5}px`),A&&(A=`${v+5}px`),P&&(A=`${v-N-5}px`),o({left:R,top:A})};c.exports.useImperativeHandle(t,()=>({handleContextMenu:(y,k)=>{l(k),g(y)}}));const x=c.exports.useCallback((y,k)=>{y.preventDefault(),k(r),u(!1)},[r]);return c.exports.useEffect(()=>{const y=k=>{p&&k.target.parentElement&&!k.target.parentElement.isSameNode(p)&&a&&u(!1)};return s&&s.addEventListener("click",y),()=>{s&&s.removeEventListener("click",y)}},[a,t,s,p]),a?m.current&&qo.exports.createPortal(e&&d("div",{ref:t,css:[ik,n],children:e.map((y,k)=>d("button",{type:"button",onClick:v=>x(v,y.onClick),children:y.label},k))}),m.current):null}var Zt=c.exports.forwardRef(rk);function lk({headerGroups:e}){return f("thead",{children:e.map(t=>f("tr",S(b({},t.getHeaderGroupProps()),{children:t.headers.map(n=>F("th",S(b({},n.getHeaderProps(n.getSortByToggleProps())),{style:n.style,children:[n.render("Header"),f("span",{children:n.isSorted?n.isSortedDesc?" \u25BC":" \u25B2":""})]}),n.getHeaderProps().key))}),t.getHeaderGroupProps().key))})}var ak=c.exports.memo(lk);function ck(e){const t=e.original.id;return t?t instanceof Array?t:[String(t)]:[""]}function uk(e,t){const{row:n,highlightedSource:o=ue.UNKNOWN,onContextMenu:s}=e,i=c.exports.useMemo(()=>({type:o,extra:n.original}),[o,n]),r=ie(ck(n),i);return c.exports.useEffect(()=>()=>{r.hide()},[]),c.exports.useMemo(()=>d("tr",S(b(b({ref:t,onContextMenu:s,css:r.isActive?_C:Object.prototype.hasOwnProperty.call(n.original,"isConstantlyHighlighted")&&n.original.isConstantlyHighlighted===!0?FC:null},n.getRowProps()),r.onHover),{children:n.cells.map(l=>{const{style:a,padding:u}=l.column;return l.isRowSpanned?null:d("td",S(b({rowSpan:l.rowSpan},l.getCellProps()),{onContextMenu:p=>(p.preventDefault(),!1),style:b({padding:u},a),children:l.render("Cell")}),l.key)})}),n.getRowProps().key),[r.isActive,r.onHover,s,t,n])}var dk=c.exports.forwardRef(uk);const Ad=c.exports.createContext(null),pk=Ad.Provider;function hk(){const e=c.exports.useContext(Ad);if(!e)throw new Error("react table context was not found ");return e}function fk(e){e.useInstance.push(mk)}function mk(e){const{allColumns:t}=e;let n=[];t.forEach(o=>{const{id:s,enableRowSpan:i}=o;i!==void 0&&i!==!1&&n.push({id:s,cellValue:null,cellIndex:0})}),Object.assign(e,{rowSpanHeaders:n})}function gk(e,t,n,o){const s=e[t];for(let i=0;i<s.allCells.length;i++){const r=s.allCells[i],l=n.find(a=>a.id===r.column.id);if(l!==void 0){const a=o?`${r.value}-${s.original[o]}`:r.value;l.cellValue===null||l.cellValue!==a?(r.isRowSpanned=!1,l.cellValue=a,l.cellIndex=t,r.rowSpan=1):(e[l.cellIndex].allCells[i].rowSpan++,r.isRowSpanned=!0)}}}const xk={table:e=>{if(e)return{position:"sticky",top:0}}},bk=c.exports.forwardRef(function(t,n){const{data:o,columns:s,highlightedSource:i,context:r=null,onScroll:l,approxItemHeight:a=40,enableVirtualScroll:u=!1,groupKey:p}=t,h=c.exports.useRef(null),{index:m}=hk(),{getTableProps:g,getTableBodyProps:x,headerGroups:y,rows:k,prepareRow:v,rowSpanHeaders:C}=Vn.exports.useTable({columns:s,data:o},Vn.exports.useSortBy,fk),E=c.exports.useCallback((N,D)=>{Xt(N)||(N.preventDefault(),h.current.handleContextMenu(N,D.original))},[h]),T=u?k.slice(m.start,m.end):k;return w("div",S(b({ref:n,className:"table-container",style:{overflowY:"auto",position:"relative",height:"100%"}},u&&{onScroll:l}),{children:[u&&d("div",{style:{height:a*o.length,position:"absolute",width:"100%",pointerEvents:"none"}}),w("table",S(b({},g()),{css:Cd,style:xk.table(u),children:[d(ak,{headerGroups:y}),d("tbody",S(b({},x()),{children:T.map((N,D)=>(v(N),gk(k,u?D+m.start:D,C,p),d(dk,S(b({row:N},N.getRowProps()),{onContextMenu:R=>E(R,N),highlightedSource:i}),N.key)))}))]})),d(Zt,{ref:h,context:r})]}))});function yk(e){const{data:t,approxItemHeight:n=40,groupKey:o}=e,s=c.exports.useRef(null),[i,{height:r}]=Ll(),l=md([i,s]),[a,u]=c.exports.useState({offsetHeight:0,scrollHeight:0,numberOfVisibleRows:0,index:{start:0,end:0}});c.exports.useEffect(()=>{if(l.current){const{scrollHeight:x}=l.current,y=Math.ceil(r/n);u(k=>S(b({},k),{offsetHeight:r,scrollHeight:x,numberOfVisibleRows:y,index:{start:0,end:y+1}}))}},[n,l,r]);const p=c.exports.useCallback((x,y)=>{const k=t[x];if(k.index&&o)switch(y){case-1:{let v=x-1;for(;v>0;){if(t[v][o]!==k[o])return v+1;v--}return x}case 1:{let v=x+1;for(;v<t.length;){if(t[v][o]!==k[o])return v-1;v++}return x}default:return x}return x},[t,o]),h=c.exports.useCallback((x,y)=>{const k=x-y,v=k>=t.length?k:x;return p(v,-1)},[t.length,p]),m=c.exports.useCallback((x,y)=>{const k=x+y,v=k>=t.length?t.length-1:k;return p(v,1)},[t.length,p]),g=c.exports.useCallback(()=>{if(s.current&&a){const{scrollTop:x}=s.current,{numberOfVisibleRows:y,index:k}=a,v=Math.ceil(x/n),C=h(v,y);if(v!==k.start){const E=m(v,y);u(S(b({},a),{index:{start:C,end:E+1}}))}}},[n,m,h,a]);return d(pk,{value:a,children:d(bk,b({onScroll:g,ref:l},e))})}var fo=c.exports.memo(yk);function bs(e,t){const{index:n,Header:o=()=>null,extraParams:s,accessor:i=null,Cell:r=null,sortType:l="basic",enableRowSpan:a=!1,style:u={},id:p}=t||{};e.push(b(S(b(b(b({index:n},b({},p&&{id:p})),b({},i?{accessor:i}:{})),b({},r?{Cell:r}:{})),{Header:o,sortType:l,enableRowSpan:a,style:u}),s))}const vk=`url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="960px" height="560px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve"><g id="Rounded_Rectangle_33_copy_4_1_"><path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/></g></svg>')`,Ne=c.exports.forwardRef(function(t,n){const{data:o,style:s={width:100},onChange:i=()=>null,defaultValue:r,name:l="",className:a=""}=t,u=c.exports.useCallback(h=>{let m=h.target.value;isNaN(m)||(m=Number(m)),i(m)},[i]),p=M`
    padding: 0px 5px;
    border: 0.55px solid #cacaca;
    font-size: 14px;
    width: ${s.width?Number(s.width)-5:115}px;
    margin: 0;
    height: 100%;
    background: ${vk} no-repeat right white;
    -webkit-appearance: none;
    background-position-x: calc(100% - 5px);
    background-size: 15px 15px;
    border-radius: 5px;
    margin: 0px 5px;
    align-self: center;
    :focus,
    input:focus {
      outline: none;
    }
  `;return d("select",{ref:n,css:p,name:l,onChange:u,defaultValue:r,className:a,style:s,children:o.map(h=>d("option",{value:h.value,children:h.label},`${h.key}`))})}),nl={container:{height:"100%",backgroundColor:"white"},label:{textAlign:"center",width:"100%",fontSize:"11px",padding:"5px",color:"gray"}};function Ut(){return f("div",{style:nl.container,children:f("p",{style:nl.label,children:"No Data"})})}const Ck={marginLeft:10,marginRight:10,border:"none"};function kk({activeTab:e,data:t,preferences:n}){const o=Y(),s=c.exports.useCallback((h,m)=>{h.preventDefault(),h.stopPropagation();const g=m.original;o({type:as,integralID:g.id})},[o]),i=c.exports.useCallback((h,m)=>{const g=S(b({},m.original),{kind:h});o({type:Fc,payload:{data:g}})},[o]),r=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:h})=>h.index+1,width:10},{index:2,Header:"From",sortType:"basic",resizable:!0,accessor:h=>h.from.toFixed(2)},{index:3,Header:"To",sortType:"basic",resizable:!0,accessor:h=>h.to.toFixed(2)},{index:6,Header:"Kind",sortType:"basic",resizable:!0,accessor:h=>h.kind,Cell:({row:h})=>f(Ne,{onChange:m=>i(m,h),data:ri,style:Ck,defaultValue:h.original.kind})},{index:7,style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:h})=>f("button",{type:"button",className:"delete-button",onClick:m=>s(m,h),children:f(St,{})})}],[i,s]),l=c.exports.useCallback((h,m)=>{const g={value:h.target.value,id:m.id};o({type:tu,payload:{data:g}})},[o]),a=c.exports.useMemo(()=>pt(n.current,`formatting.panels.integrals.[${e}]`,_t),[e,n]),u=c.exports.useMemo(()=>[{showWhen:"showAbsolute",index:4,Header:"Absolute",accessor:h=>Ge(h.absolute,V(a,"absoluteFormat",_t.absoluteFormat))},{showWhen:"showRelative",index:5,id:"relative",Header:()=>{const h=e==null?void 0:e.replace(/[0-9]/g,"");return f("span",{children:`Relative ${h}`})},accessor:h=>Ge(h.integral,V(a,"relativeFormat",_t.relativeFormat)),Cell:({row:h})=>{const m=Ge(h.original.integral,V(a,"relativeFormat",_t.relativeFormat)),x=Ia(h.original)?m:`[ ${m} ]`;return f(lt,{value:x,onSave:y=>l(y,h.original),type:"number"})}}],[e,a,l]),p=c.exports.useMemo(()=>{let h=[...r];for(const g of u){const m=g,{showWhen:x}=m,y=G(m,["showWhen"]);a[x]&&bs(h,y)}return h.sort((g,x)=>g.index-x.index)},[u,r,a]);return t&&t.length>0?f(fo,{data:t,columns:p}):f(Ut,{})}var Sk=c.exports.memo(kk);const wk=M`
  display: flex;
  margin: 5px 0px;

.inputLabel{
  flex: 2;
  font-size: 11px;
  font-weight: bold;
  color: #232323;
}

.input {
  width: '60%',
  text-align: 'center',
}

.color{
  width: 36px;
  height: 14px;
  border-radius: 2px;
}

.swatch{
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  display: inline-block;
  cursor: pointer;
}
.color-popover {
  position: absolute;
  z-index: 2;
}

.cover {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
  .chrome-picker {
    border-radius: none !important;
    width: 200px !important;
    height: 60px !important;
    display: flex;


  }
  .chrome-picker > div:first-of-type {
    padding: 0px !important;

  }
  .chrome-picker > div:last-child >  div:first-of-type {
    width: 120px;

  }
  .chrome-picker > div:last-child >  div:last-child {
    display:none !important;
  }
`;function Ek(e){const{label:t="Color: ",onColorChange:n=()=>null,name:o,value:s="#000000"}=e,[i,r]=c.exports.useState(!1),[l,a]=c.exports.useState(s);c.exports.useEffect(()=>{a(s)},[s]);const u=c.exports.useCallback(()=>{r(!i)},[i]),p=c.exports.useCallback(()=>{r(!1)},[]),h=c.exports.useCallback(m=>{const g=`${m.hex}${Math.round(m.rgb.a*255).toString(16)}`;a(g),n(S(b({},m),{hex:g,name:o}))},[o,n]);return w("div",{css:wk,children:[d("span",{className:"inputLabel",children:t}),w("div",{style:{flex:4},children:[w("div",{className:"swatch",onClick:u,children:[d("div",{className:"color",style:{backgroundColor:l}}),d("input",{type:"hidden",value:l,name:o})]}),i?w("div",{className:"color-popover",children:[d("div",{className:"cover",onClick:p}),d(Ol.ChromePicker,{color:{hex:l},onChangeComplete:h})]}):null]})]})}var Ak=c.exports.memo(Ek);function Tk(e){const l=e,{onColorChange:t=()=>null,name:n}=l,o=G(l,["onColorChange","name"]),{values:s,setFieldValue:i}=pe(),r=c.exports.useCallback(a=>{t(a),i(n,a.hex)},[n,t,i]);return f(Ak,S(b({},o),{name:n,onColorChange:r,value:V(s,n)}))}var Dk=c.exports.memo(Tk);const Ps={row:{display:"flex",margin:"5px 0px",alignItems:"center"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center"}};function Rk(e){const{label:t,checkControllerName:n,formatControllerName:o,disableFormat:s=!1,hideFormat:i=!1}=e,{values:r,handleChange:l,setFieldValue:a}=pe(),u=c.exports.useCallback(h=>{l(h)},[l]),p=c.exports.useCallback(h=>{a(h.target.name,h.target.checked)},[a]);return F("div",{style:Ps.row,children:[f("span",{style:Ps.inputLabel,children:t}),F("div",{style:{flex:4,display:"flex",flexDirection:"row",alignItems:"center"},children:[f("input",{type:"checkbox",style:{margin:"0px 5px"},name:n,onChange:p,checked:V(r,n,!1)}),!i&&o&&f(kt,{style:{inputWrapper:Ps.input},name:o,value:V(r,o,""),onChange:u,type:"text",disabled:s})]})]})}var Fe=c.exports.memo(Rk);const yo={container:{display:"flex"},label:{lineHeight:2,userSelect:"none",flex:"2"},inputContainer:{flex:"4",display:"flex",justifyContent:"flex-start"},input:{height:"100%",width:"100px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"}},dn=c.exports.forwardRef(({label:e,name:t,defaultValue:n=0,style:o={label:{},input:{},container:{},inputContainer:{}},onChange:s=()=>null,onInput:i=()=>null,pattern:r="^d*(.d{0,2})?$",step:l="any",min:a="any",max:u="any"},p)=>{const h=c.exports.useRef(null),m=c.exports.useCallback(g=>{if(g.target.checkValidity()){const x=Number(g.target.value===""?n:g.target.value);s(S(b({},g),{target:S(b({},g.target),{name:g.target.name,value:x})}))}else{const x=p||h;x.current.value=Number(n)}},[n,s,p]);return F("div",{style:b(b({},yo.container),o.container),children:[f("span",{style:b(b({},yo.label),o.label),children:e}),f("div",{style:b(b({},yo.inputContainer),o.inputContainer),children:f("input",{ref:p||h,name:t,style:b(b({},yo.input),o.input),type:"number",pattern:r,defaultValue:n,step:l,onChange:m,onInput:i,min:a,max:u},n)})]})});function qs(e){const l=e,{label:t,name:n}=l,o=G(l,["label","name"]),{values:s,handleChange:i}=pe(),r=c.exports.useCallback(a=>{i(a)},[i]);return f(dn,b({label:t,name:n,defaultValue:V(s,n),onChange:r},o))}function ys(){const{tabActiveSpectrum:e}=$();return c.exports.useMemo(()=>e&&Object.keys(e).length>0?Object.keys(e):[],[e])}const Ln={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},Pk=[{id:1,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:2,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function Ik({nucleus:e,preferences:t,innerRef:n}){const o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=_t,{color:a,strokeWidth:u}=l,p=G(l,["color","strokeWidth"]),h=pt(t.current,"formatting.panels.integrals");let m=e.reduce((g,x)=>(g[x]=p,g),{});m=Object.assign(m,{color:a,strokeWidth:u}),s.current.setValues(h||m)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"integrals",value:l}}),o.success("Integrals preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:Ln.container,children:F(ce,{onSubmit:r,ref:s,children:[F("div",{style:Ln.groupContainer,children:[f("p",{style:Ln.header,children:"General"}),f(Dk,{name:"color"}),f(qs,{name:"strokeWidth",label:"stroke width :",style:{label:{fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center",borderRadius:"5px"}},min:1,max:9,pattern:"[1-9]+"})]}),e==null?void 0:e.map(l=>F("div",{style:Ln.groupContainer,children:[f("p",{style:Ln.header,children:f(ti,{mf:l})}),Pk.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id))]},l))]})})}const Nk=c.exports.memo(Ik);function Mk(e,t){const n=re(),o=ys();return f(Nk,{innerRef:t,nucleus:o,preferences:n})}var _k=c.exports.forwardRef(Mk);const Fk=M`
  .sum-button {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fix-integral-toggle-btn {
    svg {
      font-size: 12px !important;
    }
  }
`;function Lk({integrals:e,info:t,activeTab:n,xDomain:o,preferences:s}){var D;const[i,r]=c.exports.useState(!1),l=Y(),a=he(),[u,p]=c.exports.useState(!1),h=c.exports.useRef(),m=c.exports.useCallback(()=>{l({type:as,integralID:null})},[l]),g=c.exports.useCallback(()=>{a.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:m},{text:"No"}]})},[a,m]),x=c.exports.useCallback(R=>{l({type:Lc,value:R}),a.close()},[l,a]),y=c.exports.useMemo(()=>V(e,"options.sum",null),[e]),k=c.exports.useCallback(()=>{a.show(d(Ed,{onClose:()=>a.close(),onSave:x,header:y?`Set new Integrals Sum (Current: ${Number(y).toFixed(2)})`:"Set new Integrals Sum",sumOptions:e==null?void 0:e.options}))},[x,y,e==null?void 0:e.options,a]),v=c.exports.useCallback(()=>{p(!u)},[u]),C=c.exports.useCallback(()=>{h.current.saveSetting(),p(!1)},[]),E=c.exports.useCallback(()=>{r(!i)},[i]),T=c.exports.useCallback(R=>{l({type:xu,payload:R})},[l]),N=c.exports.useMemo(()=>{function R(A,P){return P=P*1e4,A=A*1e4,P>=o[0]*1e4&&A<=o[1]*1e4||A<=o[0]*1e4&&P>=o[1]*1e4}return t.dimension===1&&(e==null?void 0:e.values)?(i?e.values.filter(P=>R(P.from,P.to)):e.values).map(P=>S(b({},P),{isConstantlyHighlighted:R(P.from,P.to)})):[]},[i,t.dimension,e,o]);return d(c.exports.Fragment,{children:w("div",{css:[Dt,Fk,u&&M`
              th {
                position: relative;
              }
            `],children:[!u&&w(ot,{counter:(D=e==null?void 0:e.values)==null?void 0:D.length,onDelete:g,deleteToolTip:"Delete All Integrals",onFilter:E,filterToolTip:i?"Show all integrals":"Hide integrals out of view",filterIsActive:i,counterFiltered:N.length,showSettingButton:!0,onSettingClick:v,children:[d(we,{title:y?`Change Integrals Sum (${Number(y).toFixed(2)})`:"Change Integrals Sum",popupPlacement:"right",children:d("button",{className:"sum-button",type:"button",onClick:k,children:d($l,{})})}),d(We,{className:"fix-integral-toggle-btn",popupTitle:"fix integral values",popupPlacement:"right",onClick:T,children:d(Hl,{})})]}),u&&d(In,{onSave:C,onClose:v}),d("div",{className:"inner-container",children:u?d(_k,{ref:h}):d(Sk,{data:N,activeTab:n,preferences:s})})]})})}const Ok=c.exports.memo(Lk),$k={integrals:{},info:{}};function Hk(){const{xDomain:e,activeTab:t}=$(),n=re(),{integrals:o,info:s}=ve($k);return d(Ok,{integrals:o,info:s,preferences:n.current,xDomain:e,activeTab:t})}function Q(e){const{title:t,className:n="",children:o,style:s}=e;return F("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{className:n,style:b({fontSize:"11px",fontWeight:"bold",color:"#232323",paddingRight:"10px",width:"max-content"},s==null?void 0:s.label),children:t}),f("div",{style:s==null?void 0:s.wrapper,children:o})]})}const zk={from:-1,to:1,nbPoints:1024};function Vk({onClose:e=()=>null}){const t=c.exports.useRef(),{data:n}=$(),o=c.exports.useCallback(()=>{t.current.submitForm()},[]),s=c.exports.useCallback(i=>{hC(n,i,"fileName"),e()},[n,e]);return c.exports.useEffect(()=>{function i(r){const[l,a]=r.range;t.current.setValues(S(b({},t.current.values),{from:l,to:a}))}return de.on("brushEnd",i),()=>{de.off("brushEnd",i)}},[]),w("div",{css:ht,children:[w("div",{className:"header handle",children:[d("span",{children:"Export spectra as a Matrix"}),d(fe,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",children:w(ce,{ref:t,initialValues:zk,onSubmit:s,children:[w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Range :"}),d(Q,{title:"From : ",children:d(W,{name:"from",type:"number"})}),d(Q,{title:"To : ",children:d(W,{name:"to",type:"number"})})]}),d("div",{className:"row margin-10",children:d(Q,{title:"Number of Points :",className:"custom-label",children:d(W,{name:"nbPoints",type:"number"})})})]})}),d("div",{className:"footer-container",children:d("button",{type:"button",onClick:o,className:"btn",children:"Export Now"})})]})}function jk({onSubmit:e},t){const{xDomain:n}=$();return F(ce,{ref:t,initialValues:{from:n[0],to:n[1],numberOfPoints:1024},onSubmit:e,children:[F("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(Q,{title:"From : ",children:f(W,{name:"from",type:"number"})}),f(Q,{title:"To : ",children:f(W,{name:"to",type:"number"})})]}),f("div",{className:"row margin-10",children:f(Q,{className:"custom-label",title:"Number of points : ",children:f(W,{name:"numberOfPoints",type:"number"})})})]})}var Bk=c.exports.forwardRef(jk);function Xk({onSubmit:e},t){const{xDomain:n}=$();return f(ce,{ref:t,initialValues:{from:n[0],to:n[1]},onSubmit:e,children:F("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(Q,{title:"From :",children:f(W,{name:"from",type:"number"})}),f(Q,{title:"To :",children:f(W,{name:"to",type:"number"})})]})})}var Yk=c.exports.forwardRef(Xk);const Gk=[{key:0,value:0,label:"Select Filter"},{key:Io,value:Io,label:fa},{key:Yn,value:Yn,label:ua},{key:js,value:js,label:ka},{key:Hs,value:Hs,label:la},{key:Vs,value:Vs,label:ba}],Wk=M`
  .row {
    align-items: center;
  }

  .container {
    flex: 1;
  }

  .infoText {
    padding: 10px;
    font-size: 12px;
    text-align: left;
    color: white;
    background-color: #5f5f5f;
    border-radius: 5px;
  }
`;function Zk({onClose:e=()=>null,nucleus:t=""}){const n=c.exports.useRef(),o=Y(),[s,i]=c.exports.useState(""),r=c.exports.useMemo(()=>{const h=Lt[t]?Object.entries(Lt[t]).map(m=>({key:m[0],value:m[0],label:m[0]}),[]):[];return Gk.concat(h)},[t]),l=c.exports.useCallback(h=>{h.preventDefault(),n.current&&n.current.submitForm()},[]),a=c.exports.useCallback(h=>{h&&(o({type:hu,payload:[{name:s,options:h}]}),e())},[o,s,e]);c.exports.useEffect(()=>{function h(m){const[g,x]=m.range;n.current&&n.current.setValues(S(b({},n.current.values),{from:g,to:x}))}return de.on("brushEnd",h),()=>{de.off("brushEnd",h)}},[]);const u=c.exports.useCallback(h=>{i(h)},[]),p=c.exports.useMemo(()=>{switch(s){case Io:return d(Yk,{onSubmit:a,ref:n});case Yn:return d(Bk,{onSubmit:a,ref:n})}},[s,a]);return w("div",{css:[ht,Wk],children:[w("div",{className:"header handle",children:[d("span",{children:"Apply filters"}),d(fe,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content container",children:[d("p",{className:"infoText",children:"This filter will use the exclusions zones defined in the first spectrum."}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Filter :"}),d(Ne,{data:r,style:{width:275,height:30,margin:0},onChange:u})]}),p]}),w("div",{className:"footer-container",children:[d("button",{type:"button",onClick:l,className:"btn primary",children:"Apply"}),d("button",{type:"button",onClick:e,className:"btn",children:"Close"})]})]})}function Uk(){const e=he(),t=Y(),n=c.exports.useCallback(()=>{t({type:ze}),e.show(d(Zk,{}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:550,height:250})},[e,t]),o=c.exports.useCallback(()=>{t({type:ze}),e.show(d(Vk,{}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:500})},[e,t]);return w("div",{css:Dt,children:[w(ot,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,children:[d(ke,{popupTitle:"Add Filter",onClick:n,children:d(Vp,{style:{fontSize:"18px"}})}),d(ke,{popupTitle:"Export spectra as a Matrix",onClick:o,children:d(jp,{})})]}),d("div",{className:"inner-container"})]})}function Kk(e){const{onClose:t=()=>null,selectedMolecule:n}=e,[o,s]=c.exports.useState(null),i=Y();c.exports.useEffect(()=>{s(n?n.molfile:null)},[n]);const r=c.exports.useCallback(u=>{var h,m;const p=(m=(h=/(?<s>M {2}V30 BEGIN BOND)(?<mol>.*?)(?<e>M {2}V30 END BOND)/gs.exec(u))==null?void 0:h.groups)==null?void 0:m.mol;s(p!=null&&p.trim()?u:null)},[s]),l=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(()=>{n?(i({type:Ii,molfile:o,key:n.key}),t("replace")):(i({type:Pi,molfile:o}),t("new"))},[i,n,o,t]);return w("div",{css:ht,children:[d(Bp,{initialMolfile:n==null?void 0:n.molfile,svgMenu:!0,fragment:!1,onChange:r}),w("div",{className:"footer-container",children:[d("button",{type:"button",className:"btn",onClick:a,disabled:!o,children:"Save"}),d("button",{type:"button",className:"btn",onClick:l,children:"Close"})]})]})}const qk=M`
  .menu {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 0px;
    margin: 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 99999;
    padding: 2px;
    background-color: white;

    button:hover {
      background-color: #fafafa;
    }
  }

  .menu-cover {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .menu-item {
    background-color: transparent;
    border: none;
    border-bottom: 0.55px solid whitesmoke;
    height: 35px;
    outline: outline;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding: 0 10px;

    svg {
      display: inline-block;
    }

    :focus {
      outline: none !important;
    }
    span {
      font-size: 10px;
      padding: 0px 10px;
    }
  }
`;function Jk({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,d("span",{children:t})]})}function Qk({items:e,boxBounding:t,onClick:n}){return d("div",{className:"menu",style:{transform:`translate(${t.width}px, -${t.height}px) `},children:e==null?void 0:e.map(o=>d(Jk,S(b({},o),{onClick:()=>n(o)}),o.id))})}function eS({style:e,component:t,toolTip:n="",className:o,items:s=[],onClick:i=()=>null}){var m;const r=c.exports.useRef(null),[l,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{a(!1)},[]),p=c.exports.useCallback(()=>{a(g=>!g)},[]),h=c.exports.useCallback(g=>{a(!1),i(g)},[i]);return w("div",{style:{height:"auto"},css:qk,children:[d("button",{ref:r,type:"button",css:e,onClick:p,className:o,style:{boxSizing:"border-box"},children:d(we,{title:n,popupPlacement:"right",children:t})}),l&&d(Qk,{items:s,boxBounding:(m=r.current)==null?void 0:m.getBoundingClientRect(),onClick:h}),l&&d("div",{className:"menu-cover",onClick:u})]})}function tr(e,t,n){const{power:o=2,format:s=tS}=n||{};let i=[];for(let r=e;r<=t;r++){const l=o**r;i.push({key:l,label:s(l),value:l})}return i}function tS(e){return e>=1024*1024?`${e/(1024*1024)}M`:e>=1024?`${e/1024}K`:e}function Le(n){var o=n,{value:e=""}=o,t=G(o,["value"]);return f("div",S(b({},t),{dangerouslySetInnerHTML:{__html:e.replace(/(?<isotope>[0-9]+)/g,"<sup>$<isotope></sup>")}}))}const ol={container:{backgroundColor:"#fd000c",borderRadius:"5px",padding:"0.4rem"},text:{color:"white",margin:"0.5px",fontSize:"0.9em",listStyle:"inside"}},nS=e=>{const t=[];function n(o){Object.keys(o).forEach(s=>{typeof o[s]=="object"?n(o[s]):t.push(o[s])})}return n(e),t};function Td({style:e}){const{errors:t,isValid:n}=pe(),o=c.exports.useMemo(()=>nS(t),[t]);return n?f("div",{}):f("ul",{style:b(b({},ol.container),e==null?void 0:e.container),children:o.map((s,i)=>f("li",{style:b(b({},ol.text),e==null?void 0:e.text),children:s},i))})}const ln=function(t){const u=t,{name:n="",value:o,onChange:s=()=>null}=u,i=G(u,["name","value","onChange"]),{values:r,setFieldValue:l}=pe(),a=c.exports.useCallback(p=>{s(p),l(n,p)},[n,s,l]);return c.exports.useEffect(()=>{o&&l(n,o)},[n,l,o]),f(Ne,b({name:n,defaultValue:o||V(r,n),onChange:a},i))},oS=M`
  .row {
    align-items: center;
  }

  .inner-content {
    flex: 1;
  }

  .custom-label {
    width: 160px;
    font-weight: 500;
  }

  .nucleus-label {
    padding: 0 10px;
    color: black;
    font-weight: 700;

    &.disabled {
      opacity: 0.5;
      color: black;
    }
  }
  .warning {
    color: #c40000;
    font-weight: bold;
    font-size: 13px;
    text-align: justify;
    margin-top: 30px;
  }

  .warning-container {
    margin-top: 5px;
    display: flex;
    input {
      margin: 5px 5px 5px 0;
    }
  }

  button[disabled],
  button[disabled]:hover {
    opacity: 0.5;
    color: black;
  }

  .middle-x {
    padding: 0 10px;
  }

  .group-label {
    width: 100%;
    display: block;
    border-bottom: 1px solid #efefef;
    padding-bottom: 5px;
    font-weight: 600;
    color: #005d9e;
  }
`,sS=tr(12,19),sl=tr(10,10,{format:e=>e}),iS=ee().shape({name:un().required().label("Name"),frequency:ae().integer().required().label("Frequency"),"1d":ee({"1H":ee({from:ae().integer().required().label("1H ' From ' "),to:ae().integer().required().label("1H ' To ' ")}),"13C":ee().shape({from:ae().integer().required().label("13C ' From ' "),to:ae().integer().required().label("13C ' To ' ")}),lineWidth:ae().integer().min(1).required().label("Line Width"),nbPoints:ae().integer().required().label("1D Number Of Points")}),"2d":ee({nbPoints:ee({x:ae().integer().required().label("2D Number Of Points"),y:ae().integer().required().label("2D Number Of Points")})}),spectra:ee({proton:Mn(),carbon:Mn(),cosy:Mn(),hsqc:Mn(),hmbc:Mn()}).test("check-options","You must check one of the options to start prediction",e=>!!Object.values(e).includes(!0))});function rS({onClose:e=()=>null,molfile:t}){const n=c.exports.useRef(),o=Y(),s=le(),[i,r]=c.exports.useState(!1),[l,a]=r0("nmrium-prediction-preferences"),{toolOptions:{data:{predictionIndex:u}}}=$(),p=c.exports.useCallback(()=>{n.current.submitForm()},[]),h=c.exports.useMemo(()=>{const k=l,{isApproved:x}=k,y=G(k,["isApproved"]);return r(x),Object.assign(Za,y,{name:`Prediction ${u+1}`})},[l,u]),m=c.exports.useCallback(x=>{(async()=>{a(S(b({},x),{isApproved:i})),o({type:vt,isLoading:!0});const y=Object.entries(x.spectra).reduce((v,[C,E])=>(E&&v.push(C),v),[]).join(" , "),k=await s.showLoading(`Predict ${y} in progress`);o({type:hs,payload:{mol:t,options:x}}),k(),e()})()},[s,o,i,t,e,a]),g=c.exports.useCallback(x=>{r(x.target.checked)},[]);return w("div",{css:[ht,oS],children:[w("div",{className:"header handle",children:[d("span",{children:"Prediction of NMR spectrum"}),d(fe,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content",children:[w(ce,{ref:n,initialValues:h,validationSchema:iS,onSubmit:m,children:[d(Td,{}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Name :"}),d(W,{name:"name",style:{input:{width:"200px",textAlign:"left"}}})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Spectrometer Frequency :"}),d(ln,{data:Ua,style:{width:290,height:30,margin:0},name:"frequency"})]}),d("span",{className:"group-label",children:"1D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[d(Le,{value:"1H",className:"custom-label"}),d(Q,{title:"From",children:d(W,{name:"1d.1H.from",type:"number"})}),d(Q,{title:"To",style:{label:{padding:"0 10px"}},children:d(W,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[d(Le,{value:"13C",className:"custom-label"}),d(Q,{title:"From",children:d(W,{name:"1d.13C.from",type:"number"})}),d(Q,{title:"To",style:{label:{padding:"0 10px"}},children:d(W,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Line Width : "}),d(W,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),d("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Number of Points : "}),d(ln,{data:sS,name:"1d.nbPoints",style:{width:290,height:30,margin:0}})]}),d("span",{className:"group-label",children:"2D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Number of Points : "}),d(ln,{data:sl,name:"2d.nbPoints.x",style:{margin:0,height:30}}),d("span",{className:"middle-x",children:" X "}),d(ln,{data:sl,name:"2d.nbPoints.y",style:{margin:0,height:30}})]}),d("div",{className:"row margin-10",children:d("span",{className:"group-label",children:"Spectra "})}),w("div",{className:"row margin-10 padding-h-10",style:{justifyContent:"space-between"},children:[w("div",{className:"row",children:[d(mt,{name:"spectra.proton"}),d(Le,{value:"1H",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(mt,{name:"spectra.carbon"}),d(Le,{value:"13C",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(mt,{name:"spectra.cosy"}),d(Le,{value:"COSY",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(mt,{name:"spectra.hsqc"}),d(Le,{value:"HSQC",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(mt,{name:"spectra.hmbc"}),d(Le,{value:"HMBC",className:"nucleus-label"})]})]})]}),d("p",{className:"warning",children:"In order to predict spectra we are calling an external service and the chemical structure will leave your browser! You should never predict spectra for confidential molecules."}),w("div",{className:"warning-container",children:[d(ho,{onChange:g,checked:i},String(i)),d("p",{children:"I confirm that the chemical structure is not confidential."})]})]}),d("div",{className:"footer-container",children:d("button",{type:"button",onClick:p,className:"btn",disabled:!i,children:"Predict spectrum"})})]})}const lS=M`
  display: flex;
  flex-direction: row;
  border-bottom: 0.55px solid rgb(240, 240, 240);
  padding: 0px 5px;

  button svg {
    fill: #4e4e4e;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 5px;
  }

  p {
    margin: 0;
    text-align: right;
    width: 100%;
    line-height: 22px;
    padding: 0px 10px;
  }
`,aS=[{id:"molfile",icon:d(si,{}),label:"Copy as molfile"},{id:"png",icon:d(Vl,{}),label:"Copy as PNG"},{id:"svg",icon:d(jl,{}),label:"Export as SVG"}];function cS({currentIndex:e,molecules:t,onMoleculeIndexChange:n=()=>null,onOpenMoleculeEditor:o=()=>null,actionsOptions:s={}}){const{rootRef:i}=fs(),r=le(),l=Y(),a=he(),u=Be(),p=c.exports.useCallback(()=>{!i||gd(i,`molSVG${e}`,"molFile")},[i,e]),h=c.exports.useCallback(()=>{!i||(xd(i,`molSVG${e}`),r.success("MOL copied as PNG to clipboard"))},[i,r,e]),m=c.exports.useCallback(()=>{t[e]&&xs(t[e].molfile).then(v=>{v?r.success("MOLFile copied to clipboard"):r.error("copied not completed")})},[r,e,t]),g=c.exports.useCallback(({id:v})=>{switch(v){case"molfile":m();break;case"png":h();break;case"svg":p();break}},[m,h,p]),x=c.exports.useCallback(()=>{navigator.clipboard.readText().then(v=>{l({type:Pi,molfile:v})})},[l]),y=c.exports.useCallback(()=>{var v;(v=t[e])!=null&&v.key&&(n(0),l({type:mc,payload:{key:t[e].key,assignmentData:u}}))},[t,e,n,l,u]),k=c.exports.useCallback(()=>{a.show(d(rS,{molfile:t[e]}),{position:te.TOP_CENTER,enableResizing:!0,width:600})},[a,t,e]);return w("div",{css:lS,children:[!s.hideExport&&d(eS,{component:d(Jo,{}),toolTip:"Export As",items:aS,onClick:g}),!s.hidePast&&d(we,{title:"Paste molfile",popupPlacement:"left",children:d("button",{className:"bar-button",type:"button",onClick:x,children:d(Xp,{})})}),!s.hideAdd&&d(we,{title:"Add Molecule",popupPlacement:"left",children:d("button",{className:"bar-button",type:"button",onClick:o,"data-test-id":"panel-structures-button-add",children:d(kn,{})})}),!s.hideDelete&&d(we,{title:"Delete Molecule",popupPlacement:"left",children:d("button",{className:"bar-button",type:"button",onClick:y,children:d(St,{})})}),!s.hidePredict&&t&&t.length>0&&d(ke,{popupTitle:"Predict Spectra",popupPlacement:"left",onClick:k,children:d(zl,{})}),w("p",{children:[t&&t.length>0&&`${+(e+1)} / ${t.length}`," "]})]})}function il(e,t,n){if(t.length>0&&Object.keys(e).length>0){const o=n==="x"?0:n==="y"?1:void 0;if(o!==void 0){if(t[o]===e.atomLabel)return{oclIDs:[e.oclID],nbAtoms:e.nbAtoms};if(t[o]==="H")return{oclIDs:e.hydrogenOCLIDs,nbAtoms:e.nbAtoms*e.nbHydrogens}}else return{oclIDs:[e.oclID].concat(e.hydrogenOCLIDs),nbAtoms:e.nbAtoms+e.nbAtoms*e.nbHydrogens}}return{oclIDs:[],nbAtoms:0}}function Yo(e,t){let n=e.find(s=>s.id===t),o;if(!n){for(const s of e)if(o=s.signals.findIndex(i=>i.id===t),o>=0){n=s;break}}return{datum:n,signalIndex:o}}function uS(e,t,n){let o=[];for(let s in e.assignment.assignment){let i,r,l=!1;if((e.assignment.assignment[s].x||[]).some(a=>t.includes(a))){o=o.concat(e.assignment.assignment[s].x);const a=Yo(n,s);i=a.datum,r=a.signalIndex,l=!0}if((e.assignment.assignment[s].y||[]).some(a=>t.includes(a))){o=o.concat(e.assignment.assignment[s].y);const a=Yo(n,s);i=a.datum,r=a.signalIndex,l=!0}if(i&&(o.push(i.id),r!==void 0&&o.push(i.signals[r].id)),l)break}return o}function dS(e,t){const n=e.assignment.isOnHover?e.assignment.assignment[e.assignment.onHoverID]:null,o=e.assignment.isOnHover?e.assignment.onHoverAxis:null;return n?t===B.DM_1D?n.x||[]:t===B.DM_2D?o?o==="x"?n.x||[]:o==="y"?n.y||[]:(n.x||[]).concat(n.y||[]):(n.x||[]).concat(n.y||[]):[]:[]}function pS(e,t){let n=e?e.slice():[];const{nbAtoms:o,oclIDs:s}=t;let i=o;return s.forEach(r=>{n.includes(r)?(i*=-1,n=n.filter(l=>l!==r)):n.push(r)}),[n,i]}function hS({displayerMode:e,activeTab:t,zones:n,ranges:o}){const s=le(),i=Y(),r=Rn(),l=Be(),a=ct(l.assignment.activeID!==void 0?l.assignment.activeID:Ku),[u,p]=c.exports.useState([]),[h,m]=c.exports.useState(null),[g,x]=c.exports.useState([]);c.exports.useEffect(()=>{if(t){const D=t.split(",");D.length===1?x([t.replace(/[0-9]/g,"")]):D.length===2&&x(D.map(R=>R.replace(/[0-9]/g,"")))}},[t]),c.exports.useEffect(()=>{h&&(h==="show"?r.dispatch({type:"SHOW",payload:{convertedHighlights:u}}):h==="hide"&&(r.dispatch({type:"HIDE",payload:{convertedHighlights:u}}),p([])),m(null))},[h,u,r]);const y=c.exports.useMemo(()=>{if(n||o){if(e===B.DM_1D&&o&&o.values)return o.values;if(e===B.DM_2D&&n&&n.values)return n.values}return[]},[e,o,n]),k=c.exports.useMemo(()=>{const D={x:[],y:[]};for(let R in l.assignment.assignment)l.assignment.assignment[R].x&&D.x.push(...l.assignment.assignment[R].x),l.assignment.assignment[R].y&&D.y.push(...l.assignment.assignment[R].y);return D},[l.assignment]),v=c.exports.useMemo(()=>k.x.concat(k.y),[k.x,k.y]),C=c.exports.useMemo(()=>{let D=[];return r.highlight.highlighted.forEach(R=>{var P;if(l.assignment.assignment[R]){const{datum:I}=Yo(y,R),O=(P=r.highlight.sourceData)==null?void 0:P.type;I&&(O===ue.ZONE||O===ue.RANGE)&&(D=D.concat(I.signals.map(L=>Yi(l,[L.id]).length>0?L.diaIDs:[]).flat()))}}),dS(l,e).concat(D)},[l,y,e,r.highlight]),E=c.exports.useCallback((D,R)=>pS(D,R),[]),T=c.exports.useCallback((D,R)=>{var A;if(!Xt(R)&&a.isActive){const P=il(D,g,a.activeAxis);if(P.nbAtoms>0){P.oclIDs.forEach(L=>{a.toggle(L)});const{datum:I,signalIndex:O}=Yo(y,a.id);if(I){let L=[],H=0;O===void 0?e===B.DM_1D?[L,H]=E(I.diaIDs||[],P):e===B.DM_2D&&([L,H]=E(I[a.activeAxis].diaIDs||[],P)):(A=I.signals)!=null&&A[O]&&(e===B.DM_1D?[L,H]=E(I.signals[O].diaIDs||[],P):e===B.DM_2D&&([L,H]=E(I.signals[O][a.activeAxis].diaIDs||[],P))),e===B.DM_1D?i({type:eu,payload:{nbAtoms:H,rangeData:I,diaIDs:L,signalIndex:O}}):e===B.DM_2D&&i({type:uu,payload:{nbAtoms:H,zoneData:I,diaIDs:L,axis:a.activeAxis,signalIndex:O}})}a.onClick(a.activeAxis)}else s.info("Not assigned! Different atom type or no attached hydrogens found!")}},[a,s,y,i,e,g,E]);return{handleOnAtomHover:c.exports.useCallback(D=>{const R=il(D,g,a.activeAxis).oclIDs;if(R.length>0){const A=uS(l,R,y);p(A),m("show")}else m("hide")},[a.activeAxis,l,y,g]),handleOnClickAtom:T,currentDiaIDsToHighlight:C,assignedDiaIDsMerged:v}}const It={panel:M({display:"flex",overflow:"auto",flexGrow:1,width:"100%",height:"100%",flexDirection:"column"}),innerPanel:M({display:"flex",flex:"1",flexDirection:"column",overflow:"auto"}),molecule:M({display:"flex",flex:"1"}),toolbar:M({display:"flex",borderBottom:"0.55px solid rgb(240, 240, 240)",padding:"0px 10px",justifyContent:"end",height:22}),slider:M({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1,minHeight:0}),items:M({display:"flex",flexDirection:"column",flex:"1 1 0%",height:"100%",minHeight:0})};function fS({zones:e,ranges:t,molecules:n,activeTab:o,displayerMode:s,onMoleculeChange:i,actionsOptions:r,children:l}){const[a,u]=c.exports.useState(0),[p,h]=c.exports.useState([]),m=Y(),g=he(),{currentDiaIDsToHighlight:x,handleOnAtomHover:y,handleOnClickAtom:k,assignedDiaIDsMerged:v}=hS({zones:e,ranges:t,activeTab:o,displayerMode:s});c.exports.useEffect(()=>{n&&h(N=>(n.length>N.length&&u(p.length),n))},[p.length,n]),c.exports.useEffect(()=>{i==null||i(p[a]||null)},[a,p,i]);const C=c.exports.useCallback((N,D)=>{m({type:Ii,molfile:D,key:N})},[m]),E=c.exports.useCallback((N=null)=>{g.show(d(Kk,{selectedMolecule:N}),{position:te.TOP_CENTER,width:700,height:500})},[g]),T=c.exports.useCallback(N=>{u(N)},[]);return w("div",{css:It.panel,children:[d(cS,{currentIndex:a,molecules:p,onOpenMoleculeEditor:()=>E(),onMoleculeIndexChange:T,actionsOptions:r}),w("div",{css:It.innerPanel,children:[d("div",{css:It.molecule,children:d(Sd,{onChange:N=>u(N),defaultIndex:a,children:p&&p.length>0?p.map((N,D)=>{var R;return w("div",{css:It.items,children:[w("span",{css:It.toolbar,children:[d(ti,{mf:N.mf})," - ",(R=N.mw)==null?void 0:R.toFixed(2)]}),d("div",{css:It.slider,className:"mol-svg-container",onDoubleClick:()=>E(N),style:{backgroundColor:(D+1)%2!==0?"#fafafa":"white"},children:d(ni,{children:({height:A,width:P})=>d(Yp,{OCL:Bt,id:`molSVG${D}`,width:P,height:A,molfile:N.molfile||"",setMolfile:I=>C(N.key,I),setSelectedAtom:k,atomHighlightColor:x&&x.length>0?"red":"#FFD700",atomHighlightOpacity:.35,highlights:x&&x.length>0?x:v,setHoverAtom:y})})})]},N.key)}):d("div",{css:It.slider,style:{height:"100%"},onClick:()=>E(),children:d("span",{children:"Click to draw molecule"})})})}),l]})]})}const mS=c.exports.memo(fS),gS={ranges:{},zones:{}};function Dd({onMoleculeChange:e,children:t,actionsOptions:n}){const{molecules:o,displayerMode:s,activeTab:i}=$(),r=ve(gS),l=(r==null?void 0:r.ranges)||{},a=(r==null?void 0:r.zones)||{};return d(mS,{molecules:o,displayerMode:s,activeTab:i,ranges:l,zones:a,onMoleculeChange:e,actionsOptions:n,children:t})}const xS=[{key:1,value:"manual",label:"Manual"}];function bS({onClose:e=()=>null,nucleus:t}){const n=c.exports.useRef(),o=Y(),s=c.exports.useMemo(()=>{const a=Lt[t]?Object.entries(Lt[t]).map(u=>({key:u[0],value:u[0],label:u[0]}),[]):[];return xS.concat(a)},[t]),i=c.exports.useCallback(()=>{n.current.submitForm()},[]),r=c.exports.useCallback(a=>{o({type:ru,payload:a}),e()},[o,e]);c.exports.useEffect(()=>{function a(u){const[p,h]=u.range;n.current.setValues(S(b({},n.current.values),{from:p,to:h}))}return de.on("brushEnd",a),()=>{de.off("brushEnd",a)}},[]);const l=c.exports.useCallback(a=>{const m=Lt[t][a]||{delta:0},{delta:p=0}=m,h=G(m,["delta"]);n.current.setValues(b(S(b({},n.current.values),{targetX:p}),h))},[t]);return w("div",{css:ht,children:[w("div",{className:"header handle",children:[d("span",{children:"Spectra calibration"}),d(fe,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",style:{flex:1},children:w(ce,{ref:n,initialValues:{from:-1,to:1,nbPeaks:1,targetX:0},onSubmit:r,children:[w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Options :"}),d(Ne,{data:s,style:{width:270,height:30,marginBottom:"20px"},onChange:l})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Range :"}),d(Q,{title:"From : ",children:d(W,{name:"from",type:"number"})}),d(Q,{title:"To : ",children:d(W,{name:"to",type:"number"})})]}),d("div",{className:" margin-10",children:d(Q,{className:"custom-label",title:"Number of Peaks : ",children:d(W,{name:"nbPeaks",type:"number"})})}),d("div",{className:" margin-10",children:d(Q,{className:"custom-label",title:"Target PPM :",children:d(W,{name:"targetX",type:"number"})})})]})}),d("div",{className:"footer-container",children:d("button",{type:"button",onClick:i,className:"btn",children:"Done"})})]})}function Rd(e,t=null){try{return new Function("args",`return ${e}`)(t)}catch(n){return n}}const yS=`function run(data) {

  return JSON.stringify(data,undefined, 2);
  
}(args);
`;function vS({data:e}){const{values:t,setFieldValue:n}=pe(),[o,s]=c.exports.useState(t.code?t.code:yS),[i,r]=c.exports.useState("");return c.exports.useEffect(()=>{const l=Rd(o,e);l instanceof Error?r(l.message):(n("code",o),r(l))},[o,e,n]),w("div",{style:{marginTop:"20px"},children:[d("textarea",{value:o,onChange:l=>s(l.target.value),style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",backgroundColor:"#fcfcfc",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}}),d("p",{style:{marginBottom:"5px"},children:"Result:"}),d("textarea",{value:i,readOnly:!0,style:{border:"0.55px solid #f3f3f3",fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}})]})}var CS=c.exports.memo(vS);const kS=M`
  width: 100%;
  thead {
    border-bottom: 1px solid lightgray;
    background-color: #fafafa;
    font-size: 12px;
  }

  td,
  th {
    padding: 3px 5px;
    text-align: center;
  }

  .operation-col {
    width: 30px;
  }

  .input {
    height: 25px !important;
    width: 100% !important;
    margin: 0 !important;
  }

  .input.disbale {
    background-color: #e8e8e8;
    border-radius: 5px;
  }

  .label,
  .index {
    width: 100px;
  }

  .counter {
    width: 50px;
  }

  .add {
    background-color: transparent;
    border: 0;
    outline: none;
    svg {
      font-szie: 14px;
      fill: green;
    }
  }
`;function SS({data:e,onAfterSave:t},n){const o=Y(),s=c.exports.useRef(),[i,r]=c.exports.useState({});c.exports.useImperativeHandle(n,()=>({saveSetting(){s.current.submitForm()}})),c.exports.useEffect(()=>{const h=Object.keys(e.columns).reduce((m,g)=>(m[g]=S(b({},e.columns[g]),{tempKey:g}),m),{});r(h),s.current.setValues({columns:h,code:e.code})},[e]);const l=c.exports.useMemo(()=>Object.keys(i),[i]),a=c.exports.useMemo(()=>{function h(){return l.reduce((m,g)=>(m[g]=ee().shape(S(b({tempKey:un().required().test("unique","must be unique column name",x=>{const y=s.current.values.columns;return Object.keys(y).reduce((k,v)=>(y[v].tempKey===x&&k.push(x),k),[]).length===1})},i[g].type===Bo.FORMULA?{formula:un().required()}:{}),{index:un().required()})),m),{})}return ee().shape({columns:ee().shape(h())})},[i,l,s]),u=c.exports.useCallback(h=>{t==null||t(!0);const m=Object.entries(h.columns).reduce((g,[x,y])=>(g[x]=b(b({},i[x]),y),g),{});o({type:su,payload:{code:h.code,columns:m}})},[i,o,t]),p=c.exports.useCallback(h=>{r(m=>S(b({},m),{[`temp${h}`]:{tempKey:"",type:"FORMULA",valueKey:"value",formula:"",index:h}}))},[]);return w(ce,{ref:s,initialValues:{columns:i,code:null},validationSchema:a,onSubmit:u,children:[l&&w("table",{css:kS,children:[d("thead",{children:w("tr",{children:[d("th",{className:"counter",children:"#"}),d("th",{className:"label",children:"Label"}),d("th",{children:"value"}),d("th",{className:"index",children:"index"})]})}),d("tbody",{children:l.map((h,m)=>w("tr",{children:[d("td",{className:"counter",children:m+1}),d("td",{className:"label",children:d(W,{name:`columns.${h}.tempKey`,value:i[h].tempKey},h)}),d("td",{children:i[h].type===Bo.FORMULA?d(W,{name:`columns.${h}.formula`,value:i[h].formula}):d("div",{className:"input disbale"})}),d("td",{className:"index",children:d(W,{name:`columns.${h}.index`,value:i[h].index})}),d("td",{className:"operation-col",children:l.length===m+1&&d("button",{className:"add",type:"button",onClick:()=>p(m+1),children:d(kn,{})})})]},h))})]}),d(CS,{data:e})]})}var wS=c.exports.forwardRef(SS);const vo={container:M`
    background-color: white;
    position: absolute;
    height: auto;
    z-index: 99999999999999;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
  `,ul:M`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `,li:M`
    text-align: center;
    color: black;
    border-bottom: 0.55px solid #f9f9f9;
    min-width: 150px;
    width: fit-content;
    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      background-color: gray;
      color: white;
    }
  `,label:M`
    padding: 5px 20px;
    display: block;
  `};function ES({data:e=[],onSelect:t,renderItem:n=null}){const o=c.exports.useRef(null);return c.exports.useLayoutEffect(()=>{var s;if(o.current){const i=(s=o.current)==null?void 0:s.getBoundingClientRect();i.right>window.innerWidth&&(o.current.style.right=`${i.right-window.innerWidth}px`)}},[]),d("div",{css:vo.container,ref:o,children:d("ul",{css:vo.ul,children:e.map((s,i)=>d("li",{css:vo.li,onClick:()=>t(i),children:(n==null?void 0:n(s))||d("span",{css:vo.label,children:s.label})},s.key))})})}const rl={container:M`
    position: relative;
    padding: 2px;
    border-radius: 10px;
    width: max-content;
    display: inline-block;
    border: 0.55px solid lightgray;
    font-size: 10px;
  `,button:M`
    width: 100%;
  `};function nr(e){const{data:t,selectedKey:n,onSelect:o,formatSelectedValue:s=g=>g.label,renderItem:i=null,style:r}=e,[l,a]=c.exports.useState(!1),[u,p]=c.exports.useState(),h=c.exports.useRef(null);c.exports.useEffect(()=>{if(n){const g=t.find(x=>x.key===n)||null;p(g)}},[n,t]),c.exports.useEffect(()=>{function g(){a(!1)}return window.addEventListener("click",g),()=>window.removeEventListener("click",g)},[]);const m=c.exports.useCallback(g=>{p(t[g]),o==null||o(t[g])},[t,o]);return w("div",{className:"dropdown",ref:h,css:[rl.container,r],children:[d("button",{css:rl.button,type:"button",onClick:g=>{a(x=>!x),g.stopPropagation()},children:u?s(u):d(Gp,{})}),l&&d(ES,{data:t,onSelect:m,renderItem:i})]})}const AS=e=>M`
  position: relative;

  .delete {
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  .dropDown-container {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .label-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 45px;
  }

  .label {
    text-align: center;
  }

  ${e}
`,TS=[{key:Hn.RELATIVE,label:"Relative"},{key:Hn.ABSOLUTE,label:"Absolute"},{key:Hn.MIN,label:"Min Intensity"},{key:Hn.MAX,label:"Max Intensity"}];function DS({charLabel:e,rangeLabel:t,data:n,onColumnFilter:o}){const s=Y(),i=c.exports.useCallback(()=>{s({type:Hi,colKey:e})},[e,s]);return w("div",{css:AS,children:[w("div",{className:"container",children:[n.type===Bo.NORMAL&&d("div",{className:"dropDown-container",children:d(nr,{data:TS,formatSelectedValue:r=>r.label.substring(0,3),selectedKey:n.valueKey,onSelect:o})}),w("div",{className:"label-container",children:[w("span",{className:"label",children:[" ",e]}),d("span",{className:"label",children:t})]})]}),d(kd,{onDelete:i})]})}function RS({data:e,activeTab:t}){const n=Xe(t),o=c.exports.useMemo(()=>{const l=V(e,"code","");return Rd(l,e)},[e]),s=Y(),i=c.exports.useCallback((l,a)=>{s({type:iu,payload:{columnKey:l,valueKey:a}})},[s]),r=c.exports.useMemo(()=>{const l=[{Header:"#",index:0,Cell:({row:p})=>p.index+1}];function a(p,h,m){const g=p.original[h][m];return g instanceof Error?f("span",{style:{color:"red"},children:g.message}):n(g)}function u(p,h){return f(DS,{charLabel:h,data:p,onColumnFilter:m=>i(h,m.key),rangeLabel:p.from&&p.to?`${n(p.from)} - ${n(p.to)}`:""})}return e.columns&&Object.keys(e.columns).forEach(p=>{const{valueKey:h,index:m}=e.columns[p];bs(l,{index:m+1,Cell:({row:g})=>a(g,p,h),Header:()=>u(e.columns[p],p),id:p})}),l.sort((p,h)=>p.index-h.index)},[i,e.columns,n]);return e.values&&e.values.length>0?F(c.exports.Fragment,{children:[f(fo,{data:e.values,columns:r}),f("div",{style:{width:"100%",padding:"10px"},dangerouslySetInnerHTML:{__html:o}})]}):f(Ut,{})}var PS=c.exports.memo(RS);function IS({activeTab:e,spectraAnalysis:t}){const[n,o]=c.exports.useState(!1),s=c.exports.useRef(),i=le(),r=he(),l=Y(),a=c.exports.useMemo(()=>{const{values:y,options:{columns:k,code:v}}=t[e]||{values:{},options:{columns:{},code:null}};return{values:Object.values(y),columns:k,code:v}},[e,t]),u=c.exports.useCallback(()=>{o(!n)},[n]),p=c.exports.useCallback(()=>{s.current.saveSetting()},[]),h=c.exports.useCallback(()=>{o(!1)},[]),m=c.exports.useCallback(y=>{de.emit("showYSpectraTrackers",y)},[]),g=c.exports.useCallback(()=>{l({type:ze}),r.show(d(bS,{nucleus:e}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:500})},[e,r,l]),x=c.exports.useCallback(()=>{(async()=>{const y=Ay(t,e);await xs(y)?i.success("Data copied to clipboard"):i.error("copy to clipboard failed")})()},[e,i,t]);return w("div",{css:[Dt,n&&M`
            .table-container th {
              position: relative;
            }
          `],children:[!n&&w(ot,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,onSettingClick:u,children:[d(ke,{popupTitle:"Copy To Clipboard",onClick:x,children:d(Jo,{})}),d(ke,{popupTitle:"Spectra calibration",onClick:g,children:d(Wp,{style:{fontSize:"18px"}})}),d(We,{popupTitle:"Y Spectra Tracker",popupPlacement:"right",onClick:m,children:d(Zp,{})})]}),n&&d(In,{onSave:p,onClose:u}),d("div",{className:"inner-container",children:n?d(wS,{data:a,onAfterSave:h,ref:s}):d(PS,{data:a,activeTab:e})})]})}const NS=c.exports.memo(IS);function MS(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=$();return e?d(NS,{activeTab:e,spectraAnalysis:t,displayerKey:n}):d("div",{})}const Is={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},_S=[{id:1,label:"Peak Number :",checkController:"showPeakNumber",formatController:"peakNumberFormat"},{id:2,label:"Peak Index : ",checkController:"showPeakIndex",formatController:"peakIndexFormat"},{id:3,label:"\u03B4 (ppm) :",checkController:"showDeltaPPM",formatController:"deltaPPMFormat"},{id:4,label:"\u03B4 (Hz) :",checkController:"showDeltaHz",formatController:"deltaHzFormat"},{id:5,label:"Peak Width",checkController:"showPeakWidth",formatController:"peakWidthFormat"},{id:6,label:"Intensity :",checkController:"showIntensity",formatController:"intensityFormat"}];function FS({nucleus:e,preferences:t,innerRef:n}){const o=le(),s=c.exports.useRef(null),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,p)=>(u[p]=ud,u),{}),a=pt(t.current,"formatting.panels.peaks");s.current.setValues(a||l)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"peaks",value:l}}),o.success("Peaks preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Is.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>F("div",{style:Is.groupContainer,children:[f(Le,{style:Is.header,value:l}),_S.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`,hideFormat:a.formatController==="deltaPPMFormat"},a.id))]},l))})})}const LS=c.exports.memo(FS);function OS(e,t){const n=ys(),o=re();return f(LS,{innerRef:t,nucleus:n,preferences:o})}var $S=c.exports.forwardRef(OS);function HS({activeTab:e,preferences:t,data:n,info:o}){const s=Y(),i=Xe(o.nucleus),r=c.exports.useCallback((m,g)=>{m.preventDefault(),m.stopPropagation();const x=g.original;s({type:rs,data:{id:x.id,xIndex:x.xIndex}})},[s]),l=c.exports.useMemo(()=>pt(t.current,`formatting.panels.peaks.[${e}]`,ud),[e,t]),a=c.exports.useCallback((m,g)=>{const x=parseFloat(m.target.value)-parseFloat(g.value);s({type:Ei,shiftValue:x})},[s]),u=c.exports.useMemo(()=>[{showWhen:"showPeakNumber",index:1,Header:"#",Cell:({row:m})=>m.index+1,style:{width:"1%",maxWidth:"40px",minWidth:"40px"}},{showWhen:"showPeakIndex",index:2,Header:"index",accessor:m=>Ge(m.xIndex,l.peakIndexFormat)},{showWhen:"showDeltaPPM",index:3,Header:"\u03B4 (ppm)",accessor:m=>i(m.value),Cell:({row:m})=>f(lt,{value:i(m.original.value),onSave:g=>a(g,m.original),type:"number"})},{showWhen:"showDeltaHz",index:4,Header:"\u03B4 (Hz)",accessor:m=>Ge(m.valueHz,l.deltaHzFormat)},{showWhen:"showIntensity",index:5,Header:"Intensity",style:{maxWidth:"80px"},accessor:m=>Ge(m.intensity,l.intensityFormat)},{showWhen:"showPeakWidth",index:6,Header:"Peak Width",accessor:m=>Ge(m.peakWidth,l.peakWidthFormat)}],[i,l,a]),p=c.exports.useMemo(()=>[{index:20,Header:"",style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:m})=>f("button",{type:"button",className:"delete-button",onClick:g=>r(g,m),children:f(St,{})})}],[r]),h=c.exports.useMemo(()=>{let m=[...p];for(const x of u){const g=x,{showWhen:y}=g,k=G(g,["showWhen"]);l[y]&&bs(m,k)}return m.sort((x,y)=>x.index-y.index)},[u,p,l]);return n&&n.length>0?f(fo,{data:n,columns:h,approxItemHeight:20,enableVirtualScroll:!0}):f(Ut,{})}var zS=c.exports.memo(HS);function VS({peaks:e,info:t,xDomain:n,activeTab:o,preferences:s}){var E;const[i,r]=c.exports.useState(!1),[l,a]=c.exports.useState(!1),u=Xe(t.nucleus),p=Y(),h=he(),m=c.exports.useRef(),g=c.exports.useCallback(()=>{p({type:rs,data:null})},[p]),x=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:g},{text:"No"}]})},[h,g]),y=c.exports.useCallback(()=>{a(!l)},[l]),k=c.exports.useCallback(()=>{m.current.saveSetting(),a(!1)},[]),v=c.exports.useCallback(()=>{r(!i)},[i]),C=c.exports.useMemo(()=>{function T(N){return N*1e5>=n[0]*1e5&&N*1e5<=n[1]*1e5}return e!=null&&e.values?(i?e.values.filter(D=>T(D.x)):e.values).map(D=>{const R=Number(u(D.x));return{value:R,valueHz:t!=null&&t.originFrequency?Number(R)*t.originFrequency:"",id:D.id,intensity:D.y,peakWidth:D.width?D.width:"",isConstantlyHighlighted:T(R)}}).sort((D,R)=>D.value-R.value):[]},[i,u,t,e,n]);return w("div",{css:[Dt,l&&M`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!l&&d(ot,{counter:(E=e==null?void 0:e.values)==null?void 0:E.length,onDelete:x,deleteToolTip:"Delete All Peaks",onFilter:v,filterToolTip:i?"Show all peaks":"Hide peaks out of view",filterIsActive:i,counterFiltered:C.length,showSettingButton:!0,onSettingClick:y}),l&&d(In,{onSave:k,onClose:y}),d("div",{className:"inner-container",children:l?d($S,{ref:m}):d(zS,{data:C,activeTab:o,preferences:s,info:t})})]})}const jS=c.exports.memo(VS),BS={peaks:null,info:{}};function XS(){const{xDomain:e,activeTab:t}=$(),{peaks:n,info:o}=ve(BS),s=re();return d(jS,{peaks:n,info:o,xDomain:e,activeTab:t,preferences:s})}const YS=M`
  overflow: auto;
  width: 400px;
  .innerContainer {
    padding: 5px;
    width: 100%;
    height: 180px;
    border: none;
  }

  .mainButtonsContainer {
    padding: 5px 0px;
    border-bottom: 0.55px solid #ebebeb;
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0 5px;
  }

  button:disabled {
    opacity: 0.6;
  }
`;function GS({text:e,onClose:t,onCopyClick:n}){return w("div",{css:YS,children:[w("div",{className:"mainButtonsContainer handle",children:[d("button",{type:"button",onClick:()=>n(e),children:d(si,{})}),d(fe,{onClick:t})]}),d("div",{className:"innerContainer",dangerouslySetInnerHTML:{__html:e}})]})}const WS=M`
  .btn {
    background-color: transparent;
    border: none;
  }

  .icon svg {
    font-size: 12px;
  }

  .preview-publication-icon svg {
    font-size: 13px;
  }

  button {
    margin-right: 2px;
  }
`;function ZS({ranges:e,info:t,onUnlink:n,onFilterActivated:o,onSettingClick:s,isFilterActive:i,filterCounter:r,showMultiplicityTrees:l,showJGraph:a,showRangesIntegrals:u}){var O;const p=Y(),h=he(),m=le(),g=re(),x=Be(),y=V(e,"options.sum",null),k=c.exports.useCallback(L=>{p({type:Vc,value:L}),h.close()},[p,h]),v=c.exports.useCallback(()=>{h.show(d(Ed,{onClose:()=>h.close(),onSave:k,header:y?`Set new Ranges Sum (Current: ${Number(y).toFixed(2)})`:"Set new Ranges Sum",sumOptions:e==null?void 0:e.options}))},[k,y,h,e==null?void 0:e.options]),C=c.exports.useCallback(()=>{n()},[n]),E=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:C},{text:"No"}]})},[C,h]),T=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All ranges will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{p({type:ds,payload:{data:{assignmentData:x}}})}},{text:"No"}]})},[x,p,h]),N=c.exports.useCallback(()=>{p({type:vu})},[p]),D=c.exports.useCallback(()=>{p({type:Cu})},[p]),R=c.exports.useCallback(()=>{p({type:Au})},[p]),A=c.exports.useCallback(L=>{(async()=>await pC(L)?m.success("Data copied to clipboard"):m.error("copy to clipboard failed"))()},[m]),P=c.exports.useCallback(()=>{const{originFrequency:L,nucleus:H}=t,X=V(g.current,`formatting.nucleusByKey[${H.toLowerCase()}]`),J=Or(X.ppm),z=Or(X.hz),j=Up(e.values,{nucleus:H,nbDecimalDelta:J,nbDecimalJ:z,observedFrequency:L});h.show(d(GS,{text:j,onCopyClick:A,onClose:()=>h.close()}),{})},[t,h,g,e.values,A]),I=c.exports.useCallback(L=>{p({type:gu,payload:L})},[p]);return d("div",{css:WS,children:w(ot,{counter:(O=e==null?void 0:e.values)==null?void 0:O.length,onDelete:T,deleteToolTip:"Delete All Ranges",onFilter:o,filterToolTip:i?"Show all ranges":"Hide ranges out of view",filterIsActive:i,counterFiltered:r,showSettingButton:!0,onSettingClick:s,children:[d(ke,{popupTitle:"Preview publication string",popupPlacement:"right",onClick:P,className:"btn preview-publication-icon",children:d(Jo,{})}),d(ke,{popupTitle:y?`Change Ranges Sum (${Number(y).toFixed(2)})`:"Change Ranges Sum",popupPlacement:"right",onClick:v,className:"btn icon",children:d($l,{})}),d(ke,{popupTitle:"Remove all Assignments",popupPlacement:"right",onClick:E,disabled:!e||!e.values||e.values.length===0,className:"btn icon",children:d(Bl,{})}),d(We,{popupTitle:l?"Hide Multiplicity Trees in Spectrum":"Show Multiplicity Trees in Spectrum",popupPlacement:"right",onClick:N,disabled:!e||!e.values||e.values.length===0,children:d(Kp,{style:{pointerEvents:"none",fontSize:"12px"}})}),d(We,{popupTitle:a?"Hide J Graph":"Show J Graph",popupPlacement:"right",onClick:R,disabled:!e||!e.values||e.values.length===0,children:d(qp,{style:{pointerEvents:"none",fontSize:"12px"}})}),d(We,{popupTitle:u?"Hide integrals":"Show integrals",popupPlacement:"right",onClick:D,defaultValue:u,disabled:!e||!e.values||e.values.length===0,children:d(Xl,{style:{pointerEvents:"none",fontSize:"12px"}})}),d(We,{className:"icon",popupTitle:"fix integral values",popupPlacement:"right",onClick:I,children:d(Hl,{})})]})})}const On={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2},inputWrapper:{width:"100px",flex:"4",borderRadius:"5px"}},US=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function KS({nucleus:e,preferences:t,innerRef:n}){const o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,p)=>(u[p]=Wi(p),u),{}),a=pt(t.current,"formatting.panels.ranges");s.current.setValues(a||l)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"ranges",value:l}}),o.success("ranges preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:On.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>F("div",{style:On.groupContainer,children:[f(Le,{style:On.header,value:l}),US.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id)),f(Q,{title:"J Graph tolerance (Hz) :",style:{label:On.inputLabel,wrapper:On.inputWrapper},children:f(W,{name:`${l}.jGraphTolerance`,type:"number"})})]},l))})})}const qS=c.exports.memo(KS);function JS(e,t){const n=ys(),o=re();return f(qS,{innerRef:t,preferences:o,nucleus:n})}var QS=c.exports.forwardRef(JS);function Pd(e,t=null){const[n,o]=c.exports.useState(t),s=c.exports.useMemo(()=>{const l=e.slice();return n!==null&&l.sort((a,u)=>n.direction==="asc"?V(a,n.key,0)-V(u,n.key,0):n.direction==="desc"?V(u,n.key,0)-V(a,n.key,0):0),l},[e,n]),i=c.exports.useCallback(l=>{var p;const a=(p=l.currentTarget)==null?void 0:p.id;let u="asc";if(a&&n&&n.key===a)switch(n.direction){case"asc":u="desc";break;case"desc":u="original";break;default:u="asc";break}o({key:a,direction:u})},[n]),r=c.exports.useCallback(l=>{const a={flag:null,content:" "};if(!n||n.key!==l)return a;switch(n.direction){case"desc":return{flag:!0,content:" \u25BC"};case"asc":return{flag:!1,content:" \u25B2"};default:return a}},[n]);return{items:s,isSortedDesc:r,onSort:{onClick:i}}}function Co(e,t){return V(e,t,!1)}function ew({rowSpanTags:e,value:t,onHoverRange:n,format:o}){return f("td",S(b(b({},e),n),{children:Ge(t,o)}))}function vn(n){var o=n,{onClick:e}=o,t=G(o,["onClick"]);return f(c.exports.Fragment,{children:f("button",b({type:"button",onClick:e},t))})}const tw=e=>{const{onChange:t=()=>null,enableValidation:n=!0}=e,{values:o,errors:s}=pe();return c.exports.useEffect(()=>{n?Object.keys(s).length===0&&t(o):t(o)},[o,n,s,t]),null},$n={container:M`
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 0.4rem;
  `,inputInfo:M`
    font-size: 10px;
    color: black;
    font-weight: bold;
  `,infoText:M`
    padding: 10px;
    font-size: 13px;
  `,signalContainer:M`
    border: 0.55px solid #dedede;
  `,inputContainer:M`
    display: flex;
    justify-content: center;
  `,addSignalBtn:M`
    margin-top: 15px;
    margin-top: 20px;
    width: 100%;
    background-color: #fcfcfc;
    border-top: 0.55px solid #dedede;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 0.4rem;
    font-size: 12px;

    & :disabled {
      opacity: 0.6;
    }
  `};function nw({onFocus:e,onBlur:t,range:n},o){const{values:s,setFieldValue:i}=pe(),{activeTab:r}=$(),l=Xe(r),a=c.exports.useCallback(h=>{const m={multiplicity:"m",kind:"signal",delta:Number(h.newSignalDelta),js:[{multiplicity:$t("m"),coupling:""}]},g=s.signals.slice().concat(m);i("signals",g),i("activeTab",String(g.length-1))},[i,s.signals]),u=c.exports.useMemo(()=>ee().shape({newSignalDelta:ae().test("test-range","",function(m){const{path:g,createError:x}=this;if(m&&m>n.from&&m<n.to)return!0;const y=` ${m?m.toFixed(5):0} ppm out of the range`;return x({path:g,message:y})}).required()}),[n]),p=c.exports.useCallback(()=>{o.current.submitForm()},[o]);return d("div",{css:$n.container,children:w("div",{children:[d("p",{css:$n.infoText,children:"Edit or select a delta value of new signal (ppm):"}),w(ce,{ref:o,validationSchema:u,initialValues:{newSignalDelta:(n.from+n.to)/2},onSubmit:a,children:[d("div",{css:$n.inputContainer,children:d(W,{name:"newSignalDelta",type:"number",placeholder:"\u{1D6C5} (ppm)",onFocus:e,onBlur:t,style:{input:{width:"250px",height:"30px"}},checkErrorAfterInputTouched:!1})}),w("p",{css:$n.inputInfo,children:["[ ",`${l(n.from)} ppm - ${l(n.to)} ppm`," ]"]}),d(vn,{css:$n.addSignalBtn,onClick:p,children:d(kn,{title:"Add new signal"})})]})]})})}var ow=c.exports.forwardRef(nw);const sw={input:{width:"50px",height:"26px",borderWidth:0,margin:"0 5px"}};function iw({signal:e,index:t,onFocus:n}){return F("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{children:"\u{1D6C5}: "}),f(W,{name:`signals.${t}.delta`,type:"number",placeholder:"J (Hz)",onFocus:n,style:sw,checkErrorAfterInputTouched:!1}),f("span",{children:e.js.map(o=>$t(o.multiplicity)).join("")})]})}const rw=M`
  border-spacing: 0;
  border: 1px solid #dedede;
  width: 100%;
  height: 100%;
  font-size: 12px;

  th,
  td {
    text-align: center;
    margin: 0;
    padding: 0.3rem;
    border-bottom: 1px solid #f5f5f5;

    button {
      background-color: transparent;
      border: none;
    }

    .add-button {
      color: blue;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .delete-button {
      border-radius: 25%;
      padding: 0;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
    }
    .delete-button:hover {
      .icon {
        color: red;
      }
    }

    input {
      background-color: transparent;
      border: 0.5px solid #dedede;
      height: 100%;
      width: 100%;
      text-align: center;
    }
    .selectBox {
      background-color: transparent;
      border: 0.5px solid #dedede;
      height: 100%;
      width: 100% !important;
      text-align: center;
      margin: 0;
    }
  }

  tr {
    :last-child {
      background-color: #fcfcfc;
    }
  }
`;function lw({push:e,remove:t,onFocus:n,onBlur:o}){const{values:s,setFieldValue:i}=pe(),r=c.exports.useCallback((a,u)=>{Kn(a)||i(u,"")},[i]),l=c.exports.useMemo(()=>Un.map(a=>S(b({key:a.value},a),{value:a.label})),[]);return d("table",{css:rw,children:w("tbody",{children:[w("tr",{children:[d("th",{children:"#"}),d("th",{children:"Multiplicity"}),d("th",{children:"J (Hz)"}),d("th",{children:""})]}),V(s,`signals[${s.activeTab}].js`,[]).map((a,u)=>w("tr",{children:[d("td",{children:u+1}),d("td",{children:d(ln,{className:"selectBox",name:`signals.${s.activeTab}.js.${u}.multiplicity`,data:l,onChange:p=>r(p,`signals.${s.activeTab}.js.${u}.coupling`)})}),d("td",{children:d(W,{name:`signals.${s.activeTab}.js.${u}.coupling`,type:"number",placeholder:"J (Hz)",disabled:!Kn(a.multiplicity),onFocus:n,onBlur:o,style:{input:{width:"100%",height:"26px"}},checkErrorAfterInputTouched:!1})}),d("td",{children:d(vn,{className:"delete-button",onClick:()=>{t(u)},children:d(St,{className:"icon",title:"Delete coupling"})})})]},`editCouplings${s.activeTab}${u}`)),d("tr",{}),d("tr",{children:d("td",{colSpan:4,children:d(vn,{className:"add-button",onClick:()=>e({multiplicity:$t("m"),coupling:""}),children:d(kn,{title:"Add new coupling"})})})})]})})}var aw=c.exports.memo(lw);const cw=M`
  border-spacing: 0;
  width: 100%;
  font-size: 12px;
  height: 100%;

  margin: 0;
  padding: 0.4rem;
  text-align: center;
`;function uw({onFocus:e,onBlur:t}){const{values:n}=pe();return d("div",{css:cw,children:d(Jp,{name:`signals.${n.activeTab}.js`,render:({push:o,remove:s})=>d("div",{children:d(aw,{push:o,remove:s,onFocus:e,onBlur:t})})})})}var dw=c.exports.memo(uw);const pw=M`
  text-align: center;
  width: 100%;

  .errorText {
    color: red;
  }

  .infoText {
    padding: 10px;
    margin: 10px 0;
    font-size: 14px;
    text-align: left;
    color: white;
    background-color: #5f5f5f;
    border-radius: 5px;
  }
`,hw=M`
  color: red;
`,fw=M`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function mw({range:e}){const t=c.exports.useRef(),[n,o]=c.exports.useState(null),{values:s,setFieldValue:i,errors:r}=pe(),{activeTab:l}=$(),{info:a}=ve({info:{}}),u=Xe(l);c.exports.useEffect(()=>{function v(C){if((a==null?void 0:a.originFrequency)&&n)if(s.activeTab==="addSignalTab")t.current.setValues({[n]:(C.range[1]-C.range[0])/2+C.range[0]});else if(n.includes("delta"))i(n,(C.range[1]-C.range[0])/2+C.range[0]);else{const E=Number(u(Math.abs(C.range[0]-C.range[1])*a.originFrequency));i(n,E)}o(null)}return de.on("brushEnd",v),()=>{de.off("brushEnd",v)}},[n,i,s.activeTab,u,a]),c.exports.useEffect(()=>{function v(C){n&&(s.activeTab==="addSignalTab"?t.current.setValues({[n]:C.xPPM}):n.includes("delta")&&i(n,C.xPPM)),o(null)}return de.on("mouseClick",v),()=>{de.off("mouseClick",v)}},[s.activeTab,n,i]);const p=c.exports.useCallback(v=>{o(v.target.name)},[o]),h=c.exports.useCallback(({tabid:v})=>{i("activeTab",v)},[i]),m=c.exports.useCallback(({tabid:v})=>{const C=s.signals.filter((E,T)=>T!==Number(v));i("signals",C)},[i,s.signals]);c.exports.useEffect(()=>{i("activeTab",s.signals.length>0?(s.signals.length-1).toString():"addSignalTab")},[i,s.signals.length]);const g=c.exports.useCallback(v=>!!((r==null?void 0:r.signals)&&(r==null?void 0:r.signals[v])),[r]),x=c.exports.useMemo(()=>{const v=s.signals.length>0?s.signals.map((E,T)=>d(Ie,{tabid:`${T}`,tabstyles:g(T)?hw:fw,canDelete:!0,render:()=>d(iw,{signal:E,index:T,onFocus:p}),children:d(dw,{onFocus:p})},`signalForm${T}`)):[],C=d(Ie,{tablabel:"+",tabid:"addSignalTab",canDelete:!1,className:"add-signal-tab",children:d(ow,{onFocus:p,range:e,ref:t})},"addSignalTab");return v.concat(C)},[p,e,g,s.signals]),y=d("p",{className:"infoText",children:"Focus on an input field and press Shift + Drag & Drop to draw a coupling constant in spectrum view."}),k=d("p",{className:"infoText",children:"Focus on the input field and press Shift + Left mouse click to select new signal delta value in spectrum view."});return w("div",{children:[d("div",{css:pw,children:r.signals&&(r.signals.noSignals||r.signals.noCouplings)?w("div",{children:[d("p",{className:"errorText",children:r.signals.noSignals||r.signals.noCouplings[0].message}),r.signals.noSignals?k:null]}):s.activeTab==="addSignalTab"?k:y}),d(Pn,{activeTab:s.activeTab,onClick:h,onDelete:m,children:x})]})}var gw=c.exports.memo(mw);const xw=()=>c.exports.useMemo(()=>ee().shape({signals:Os().of(ee().shape({j:Os().of(ee().shape({multiplicity:un().required(),coupling:Qp().test("checkValue","",function(t){const{path:n,createError:o}=this,s=Kn(this.parent.multiplicity);return!s&&isNaN(t)||s&&!isNaN(t)?!0:o({path:n,message:`${n} is required`})})})).min(1,"There must be at least one coupling in a signal")})).min(1,"There must be at least one signal in a range!")}),[]),bw=M`
  width: 600px;
  height: 500px;
  padding: 5px;
  button:focus {
    outline: none;
  }
  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
      border-left: 1px solid #ececec;
      padding-left: 6px;
    }

    button {
      background-color: transparent;
      border: none;
      padding: 5px;

      svg {
        height: 16px;
      }
    }
  }
  .container {
    display: flex;
    margin: 30px 5px;
    input,
    button {
      padding: 5px;
      border: 1px solid gray;
      border-radius: 5px;
      height: 36px;
      margin: 2px;
    }
    input {
      flex: 10;
    }
    button {
      flex: 2;
      color: white;
      background-color: gray;
    }
  }
`;function yw({onSaveEditRangeModal:e=()=>null,onCloseEditRangeModal:t=()=>null,onZoomEditRangeModal:n=()=>null,range:o,automaticZoom:s=!0}){const i=c.exports.useRef(null),{activeTab:r}=$(),l=Y(),a=Xe(r),u=xw(),p=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{s&&p()},[s,p]);const h=c.exports.useCallback(()=>{t()},[t]),m=c.exports.useCallback(v=>v.filter(C=>C.coupling!=="").map(C=>S(b({},C),{multiplicity:$t(C.multiplicity)})),[]),g=c.exports.useCallback(v=>v.map(C=>S(b({id:U()},C),{multiplicity:C.js.map(E=>$t(E.multiplicity)).join(""),js:m(C.js)})),[m]),x=c.exports.useCallback(v=>{(async()=>{const C=b({},o);C.signals=g(v.signals),await e(C),h()})()},[g,h,e,o]),y=c.exports.useMemo(()=>{const v=o.signals.map(C=>{let E=0;const T=[];return C.multiplicity.split("").forEach(N=>{let D={multiplicity:N,coupling:""};Kn(N)&&(D=b({},C.js[E]),D.coupling=Number(a(D.coupling)),E++),D.multiplicity=$t(D.multiplicity),T.push(D)}),S(b({},C),{js:T})});return{activeTab:"0",signals:v}},[a,o]),k=c.exports.useCallback(v=>{const C=g(v.signals);l({type:yu,payload:{tempRange:Object.assign({},o,{signals:C})}})},[l,g,o]);return d("div",{css:bw,children:w(ce,{ref:i,initialValues:y,validationSchema:u,onSubmit:x,children:[w("div",{className:"header handle",children:[d(vn,{onClick:p,className:"zoom-button",children:d(Qn,{title:"Set to default view on range in spectrum"})}),d("span",{children:` Range and Signal edition: ${a(o.from)} ppm to ${a(o.to)} ppm`}),d(er,{onClick:()=>i.current.submitForm(),popupTitle:"Save and exit"}),d(fe,{onClick:h})]}),d(gw,{range:o}),d(tw,{onChange:k})]})})}function vw(e){const t=Y(),n=he(),o=Be(),s=c.exports.useCallback(()=>{const p=Math.abs(e.from-e.to);t({type:ls,xDomain:[e.from-p,e.to+p]})},[t,e.from,e.to]),i=c.exports.useCallback(()=>{t({type:ds,payload:{data:{id:e.id,assignmentData:o}}})},[o,t,e.id]),r=c.exports.useCallback(p=>{t({type:qc,payload:{data:{rowData:e,value:p}}})},[t,e]),l=c.exports.useCallback(p=>{t({type:Jc,payload:{editedRowData:p,assignmentData:o}})},[o,t]),a=c.exports.useCallback(()=>{t({type:ze}),n.close()},[t,n]),u=c.exports.useCallback(()=>{t({type:co,payload:{selectedTool:_.editRange.id,tempRange:e}}),n.show(f(yw,{onCloseEditRangeModal:a,onSaveEditRangeModal:l,onZoomEditRangeModal:s,range:e}),{position:te.MIDDLE_RIGHT,transition:Qe.SCALE,isBackgroundBlur:!1})},[a,t,n,e,l,s]);return c.exports.useMemo(()=>({editRange:u,deleteRange:i,zoomRange:s,changeRangeSignalKind:r}),[r,i,u,s])}const Cw=M`
  width: 66px;
  padding: 0 !important;
  button {import useEditRangeModal from './../../../hooks/useEditRangeModal';

    background-color: transparent;
    border: none;
    padding: 5px;
  }

  button:disabled {
    opacity: 0.6;
  }
`,kw={marginLeft:2,marginRight:2,border:"none",height:"20px"};function Sw({rowData:e,onHoverSignal:t,rowSpanTags:n}){const{editRange:o,deleteRange:s,changeRangeSignalKind:i,zoomRange:r}=vw(e);return w(c.exports.Fragment,{children:[d("td",S(b({},t),{children:d(Ne,{onChange:i,data:ri,defaultValue:e.tableMetaInfo.signal.kind,style:kw})})),w("td",S(b({},n),{css:Cw,children:[d("button",{type:"button",className:"delete-button",onClick:s,children:d(St,{})}),d("button",{type:"button",className:"zoom-button",onClick:r,children:d(Qn,{title:"Zoom to range in spectrum"})}),d("button",{type:"button",className:"edit-button",onClick:o,children:d(Yl,{color:"blue"})})]}))]})}function ww({rowData:e,onHoverSignal:t}){const n=V(e,"tableMetaInfo.signal.js");return f("td",S(b({},t),{children:n==null?void 0:n.map(o=>isNaN(o.coupling)?"":o.coupling.toFixed(1)).join(",")}))}const ll={color:"red",fontWeight:"bold"};function Ew({rowData:e,assignment:t,highlight:n,onUnlinkVisibilityChange:o,unlinkVisibility:s,onLink:i,onUnlink:r,rowSpanTags:l,onHover:a,highlightData:u}){var g;const p=c.exports.useMemo(()=>V(e,"diaIDs",0),[e]),h=c.exports.useCallback(x=>{o==null||o(x)},[o]),m=c.exports.useMemo(()=>{var y;return t.isActive||t.isOnHover||n.isActive&&((y=u.highlight.sourceData)==null?void 0:y.type)!==ue.SIGNAL?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"}},[t.isActive,t.isOnHover,n.isActive,(g=u.highlight.sourceData)==null?void 0:g.type]);return f("td",S(b(b({},l),a),{onClick:x=>i==null?void 0:i(x,t),children:e.nbAtoms!==void 0&&e.nbAtoms>0?e.diaIDs&&e.diaIDs.length>0?F("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[e.nbAtoms," "," ( ",f("span",{style:m,children:p.length})," ) ",f("sup",{children:f("button",{type:"button",style:{visibility:s?"visible":"hidden",padding:0,margin:0},onClick:x=>r==null?void 0:r(x,!0),children:f(Qo,{color:"red"})})})]}):t.isActive?F("div",{children:[`${e.nbAtoms} (`,f("span",{style:ll,children:"0"}),")"]}):e.nbAtoms:t.isActive?F("div",{children:["0 (",f("span",{style:ll,children:"0"}),")"]}):""}))}var Aw=c.exports.memo(Ew);function Tw({value:e,rowSpanTags:t,onHoverRange:n,format:o}){return f("td",S(b(b({},t),n),{children:Ge(e,o)}))}var al=c.exports.memo(Tw);function Dw({rowData:e,rowSpanTags:t,onHoverRange:n,format:o}){const s=Y(),i=c.exports.useMemo(()=>{const l=La(e),a=Ge(e.integration,o);return l?a:`[ ${a} ]`},[o,e]),r=c.exports.useCallback(l=>{s({type:Uc,payload:{data:{value:l.target.value,id:e.id}}})},[s,e.id]);return f("td",S(b(b({},t),n),{children:f(lt,{value:i,onSave:r,type:"number",style:{padding:"0.1rem 0.4rem"}})}))}function Rw({rowData:e,onHover:t,assignment:n,highlight:o,onUnlinkVisibilityChange:s,unlinkVisibility:i,onLink:r,onUnlink:l}){const a=c.exports.useMemo(()=>V(e,"tableMetaInfo.signal.diaIDs",[]),[e]),u=c.exports.useMemo(()=>n.isActive||o.isActive?{color:"red",fontWeight:"bold"}:void 0,[n.isActive,o.isActive]),p=c.exports.useCallback(m=>{s==null||s(m)},[s]),h=c.exports.useCallback(m=>{r==null||r(m,n)},[n,r]);return f("td",S(b({},t),{onClick:h,style:u,children:a&&a.length>0?F("div",{onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[a.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:i?"visible":"hidden",padding:0,margin:0},onClick:m=>l==null?void 0:l(m,!1),children:f(Qo,{color:"red"})})})]}):n.isActive?"0":""}))}var Pw=c.exports.memo(Rw);function Id(e){return(t,n,o="",s="")=>{const i=V(e,n,"0.000");return Ge(t,i,o,s)}}function Iw({rowData:e,onHoverSignal:t,preferences:n}){const o=Y(),s=e.tableMetaInfo.signal,i=Id(n),r=c.exports.useCallback(l=>{o({type:Kc,payload:{value:l.target.value,rangeID:e.id,signalID:s.id}})},[o,e.id,s.id]);return s?f("td",S(b({},t),{children:Ui(s.multiplicity,["m"])?f(lt,{value:s.delta.toFixed(3),onSave:r,type:"number",style:{padding:"0.1rem 0.4rem"}}):`${i(e.from,"fromFormat")} - ${i(e.to,"toFormat")}`})):f("td",{children:""})}const Nw=M`
  background-color: #ff6f0057;
`,Mw=M`
  background-color: #f5f5dc;
`;function _w({rowData:e,onUnlink:t,onContextMenu:n,preferences:o}){const s=Be(),i=ct(e.id),r=ie([i.id].concat(i.assigned.x||[]).concat(Yi(s,e.signals.map(R=>R.id))),{type:ue.RANGE}),l=ie(i.assigned.x||[],{type:ue.RANGE}),a=ct(e.tableMetaInfo.id),u=ie([a.id].concat(a.assigned.x||[]),{type:ue.SIGNAL}),p=Rn(),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),y=Id(o),k=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:V(e.tableMetaInfo,"hide",!1)?{display:"none"}:void 0}),[e.tableMetaInfo]),v=c.exports.useCallback((R,A)=>{R&&R.stopPropagation(),A!==void 0?A?(t(e),m(!1),i.removeAll("x")):(t(e,V(e,"tableMetaInfo.signalIndex",void 0)),x(!1),a.removeAll("x")):(m(!1),x(!1))},[i,a,t,e]),C=c.exports.useCallback((R,A)=>{R.stopPropagation(),A.onClick("x")},[]),E=c.exports.useMemo(()=>({onMouseEnter:()=>{i.onMouseEnter("x"),r.show()},onMouseLeave:()=>{i.onMouseLeave("x"),r.hide()}}),[i,r]),T=c.exports.useMemo(()=>({onMouseEnter:()=>{i.onMouseEnter("x"),l.show()},onMouseLeave:()=>{i.onMouseLeave("x"),l.hide()}}),[i,l]),N=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("x"),u.show()},onMouseLeave:()=>{a.onMouseLeave("x"),u.hide()}}),[a,u]),D=c.exports.useMemo(()=>r.isActive||i.isActive?Nw:V(e,"tableMetaInfo.isConstantlyHighlighted",!1)?Mw:null,[i.isActive,r.isActive,e]);return w("tr",{onContextMenu:R=>n(R,e),css:D,children:[d("td",S(b(b({},k),E),{children:e.tableMetaInfo.rowIndex+1})),Co(o,"showFrom")&&d(al,{value:e.from,rowSpanTags:k,onHoverRange:E,format:y("showFrom",void 0)}),Co(o,"showTo")&&d(al,{value:e.to,rowSpanTags:k,onHoverRange:E,format:y("toFormat",void 0)}),d(Iw,{rowData:e,onHoverSignal:N,preferences:o}),Co(o,"showRelative")&&d(Dw,{rowData:e,rowSpanTags:k,onHoverRange:E,format:y("relativeFormat",void 0)}),Co(o,"showAbsolute")&&d(ew,{value:e.absolute,rowSpanTags:k,onHoverRange:E,format:y("absoluteFormat",void 0)}),d("td",S(b({},N),{children:V(e,"tableMetaInfo.signal.multiplicity","")})),d(ww,{rowData:e,onHoverSignal:N}),d(Pw,{rowData:e,assignment:a,highlight:u,onHover:N,unlinkVisibility:g,onUnlinkVisibilityChange:R=>x(R),onLink:C,onUnlink:v}),d(Aw,{rowData:e,assignment:i,highlight:l,onHover:T,unlinkVisibility:h,onUnlinkVisibilityChange:R=>m(R),onLink:C,onUnlink:v,rowSpanTags:k,highlightData:p}),d(Sw,{rowData:e,onHoverSignal:N,onHoverRange:E,rowSpanTags:k})]})}function Fw(e){return c.exports.useMemo(()=>{const t=[];return e.forEach((n,o)=>{n.signals.length===1?t.push(S(b({rowKey:U()},n),{tableMetaInfo:S(b({},n.tableMetaInfo),{signal:n.signals[0],rowIndex:o,signalIndex:0,id:n.signals[0].id})})):n.signals.length>1&&n.signals.forEach((s,i)=>{let r=!1,l=null;i<n.signals.length-1&&i===0?l=n.signals.length:r=!0,t.push(S(b({rowKey:U()},n),{tableMetaInfo:S(b({},n.tableMetaInfo),{signal:s,rowSpan:l,hide:r,rowIndex:o,signalIndex:i,id:s.id})}))})}),t},[e])}const Lw=M`
  border-spacing: 0;
  border: 1px solid #dedede;
  width: 100%;
  font-size: 12px;
  .react-contextmenu-wrapper {
    display: contents;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
  }
  th,
  td {
    white-space: nowrap;
    text-align: center;
    margin: 0;
    padding: 0.1rem 0.4rem;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;

    :last-child {
      border-right: 0;
    }
    button {
      background-color: transparent;
      border: none;
    }
  }
`;function Ow({tableData:e,onUnlink:t,context:n,activeTab:o,preferences:s}){const i=o==null?void 0:o.replace(/[0-9]/g,""),r=c.exports.useRef(),{items:l,isSortedDesc:a,onSort:u}=Pd(e),p=Fw(l),h=g=>V(s,g,!1),m=c.exports.useCallback((g,x)=>{Xt(g)||(g.preventDefault(),r.current.handleContextMenu(g,x))},[r]);return w(c.exports.Fragment,{children:[w("table",{css:Lw,children:[d("thead",{children:w("tr",{children:[d("th",{children:"#"}),h("showFrom")?w("th",S(b({id:"from"},u),{children:["From",a("from").content]})):null,h("showTo")?w("th",S(b({id:"to"},u),{children:["To ",a("to").content]})):null,d("th",{children:"\u03B4 (ppm) "}),h("showRelative")?w("th",S(b({id:"integration"},u),{children:["Rel. ",i," ",a("integration").content]})):null,h("showAbsolute")?d("th",{children:"Absolute"}):null,d("th",{children:"Mult."}),d("th",{children:"J (Hz)"}),d("th",{children:d(Gl,{style:{fontSize:10}})}),d("th",{children:"\u03A3"}),d("th",{children:"Kind"}),d("th",{children:""})]})}),d("tbody",{children:p==null?void 0:p.map(g=>d(_w,{rowData:g,onUnlink:t,onContextMenu:(x,y)=>m(x,y),preferences:s},g.rowKey))})]}),d(Zt,{ref:r,context:n})]})}function $w({ranges:e,data:t,info:n,xDomain:o,preferences:s,activeTab:i,molecules:r,showMultiplicityTrees:l,showJGraph:a,showRangesIntegrals:u}){const[p,h]=c.exports.useState(!1),m=Be(),g=Y(),x=le(),[y,k]=c.exports.useState(!1),v=c.exports.useRef(),C=c.exports.useMemo(()=>{const I=(L,H)=>(H=H*1e4,L=L*1e4,H>=o[0]*1e4&&L<=o[1]*1e4||L<=o[0]*1e4&&H>=o[1]*1e4),O=L=>L.filter(H=>I(H.from,H.to));return e.values?(p?O(e.values):e.values).map(H=>S(b({},H),{tableMetaInfo:{isConstantlyHighlighted:I(H.from,H.to)}})):[]},[p,e.values,o]),E=c.exports.useCallback((I,O=-1)=>{g({type:Qc,payload:{rangeData:I,assignmentData:m,signalIndex:O}})},[m,g]),T=c.exports.useCallback(async I=>{if(t.x&&t.re){const{x:O,re:L}=t,{from:H,to:X}=I,{fromIndex:J,toIndex:z}=qn(O,{from:H,to:X}),j=b({x:Array.from(O.slice(J,z)),y:Array.from(L.slice(J,z))},I);await xs(JSON.stringify(j,void 0,2))?x.show("Data copied to clipboard"):x.error("copy to clipboard failed")}},[t,x]),N=c.exports.useMemo(()=>V(s.current,`formatting.panels.ranges.[${i}]`)||Wi(i),[i,s]),D=c.exports.useMemo(()=>[{label:"Copy to clipboard",onClick:T}],[T]),R=c.exports.useCallback(()=>{h(!p)},[p]),A=c.exports.useCallback(()=>{k(!y)},[y]),P=c.exports.useCallback(()=>{v.current.saveSetting(),k(!1)},[]);return d(je,{children:w("div",{css:[Dt,y&&M`
              th {
                position: relative;
              }
            `],children:[!y&&d(ZS,{ranges:e,info:n,activeTab:i,molecules:r,showRangesIntegrals:u,showMultiplicityTrees:l,showJGraph:a,isFilterActive:p,onUnlink:E,onFilterActivated:R,onSettingClick:A,filterCounter:C.length}),y&&d(In,{onSave:P,onClose:A}),d("div",{className:"inner-container",children:y?d(QS,{ref:v}):d("div",{className:"table-container",children:C&&C.length>0?d(Ow,{activeTab:i,tableData:C,onUnlink:E,context:D,preferences:N}):d(Ut,{})})})]})})}const Hw=c.exports.memo($w),zw={ranges:{},data:{},info:{}};function Vw(){const{displayerKey:e,xDomain:t,activeTab:n,molecules:o,toolOptions:{selectedTool:s,data:{showMultiplicityTrees:i,showRangesIntegrals:r,showJGraph:l}}}=$(),{ranges:a,data:u,info:p}=ve(zw),h=re();return d(Hw,{ranges:a,data:u,info:p,showMultiplicityTrees:i,showJGraph:l,showRangesIntegrals:r,selectedTool:s,displayerKey:e,preferences:h,xDomain:t,activeTab:n,molecules:o})}function or(){const e=re();return t=>V(e.current,`display.toolBarButtons.${t}`,!0)}function jw({data:e,activeSpectrum:t,activeTab:n,displayerMode:o,spectrums:s,isAutomaticPickingVisible:i}){const r=he(),l=le(),a=Y(),u=c.exports.useCallback(()=>{r.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:()=>{a({type:Ni})}},{text:"No"}]})},[a,r]),p=c.exports.useCallback(()=>{const k=s.map(v=>v.id);a({type:Zn,id:k})},[a,s]),h=c.exports.useCallback(()=>{a({type:Zn,id:[]})},[a]),m=c.exports.useCallback(()=>{function k(C){let E=n.split(",");E=E[0]===E[1]?[E[0]]:E;const T=[];for(const N of E)C.some(R=>R.info.nucleus===N)||T.push(N);return T}const v=k(e);v.length>0?a({type:Wc,nucleus:v}):l.error("Nothing to calculate")},[n,l,e,a]),g=c.exports.useCallback(()=>{a({type:du})},[a]),x=c.exports.useCallback(()=>{a({type:pu})},[a]),y=c.exports.useCallback(()=>{(async()=>{const k=await l.showLoading("Automatic Ranges/Zones detection for all spectra in progress");setTimeout(()=>{a({type:ku}),a({type:Su}),k()},0)})()},[a,l]);return F(ot,{onDelete:u,counter:s==null?void 0:s.length,deleteToolTip:"Delete all spectra",children:[f(ke,{popupTitle:"Hide all spectra",onClick:h,children:f(eh,{})}),f(ke,{popupTitle:"Show all spectra",onClick:p,children:f(wo,{})}),t&&n&&n.split(",").length>1&&f(ke,{popupTitle:"Add missing projection",onClick:m,children:f(th,{})}),o===B.DM_1D&&s.length>1&&F(et,{children:[f(ke,{popupTitle:"Reset Scale",onClick:x,children:f(nh,{})}),f(ke,{popupTitle:"Same Top",onClick:g,children:f(oh,{})})]}),e&&e.length>0&&i&&f(ke,{popupTitle:"Automatic Ranges/Zones picking for all spectra",onClick:y,children:f(Wl,{})})]})}const Bw=c.exports.memo(jw);function Xw({spectrums:e}){const{data:t,activeSpectrum:n,activeTab:o,displayerMode:s}=$(),r=or()("autoRangesTool");return f(Bw,{data:t,activeSpectrum:n,activeTab:o,displayerMode:s,spectrums:e,isAutomaticPickingVisible:r})}function Yw({color:e,activated:t}){return f("div",{style:{backgroundColor:e,height:"12px",width:"12px",opacity:t?1:.1,display:"inline-block"}})}function Gw({positiveColor:e,negativeColor:t,activated:n}){return f("svg",{width:"12",height:"12",viewBox:"0 0 12 12",opacity:n?1:.1,children:F("g",{children:[f("path",{d:"M0,0H12L0,12Z",fill:e,strokeWidth:"0"}),f("path",{d:"M12,12H0L12,0Z",fill:t,strokeWidth:"0"})]})})}function Ww(e){const{style:t,onClick:n=()=>null,activated:o}=e;return f("button",{style:t,type:"button",onClick:n,children:e.dimension===2?f(Gw,S(b({},e.color),{activated:o})):f(Yw,b({activated:o},e.color))})}var Zw=c.exports.memo(Ww);function Uw({data:e,onChangeMarkersVisibility:t,markersVisible:n,style:o}){const s=i=>n.findIndex(r=>r.id===i)!==-1;return f("button",{style:S(b({},o),{opacity:s(e.id)&&e.peaks&&e.peaks.values.length>0?1:.1}),type:"button",onClick:()=>t(e),disabled:e.peaks&&e.peaks.values.length===0,children:f(sh,{})})}function Kw({data:e,onChangeVisibility:t,style:n}){const o=(s,i)=>e?e.display[i]:!0;return F(et,{children:[e.info.dimension===1&&f("button",{"data-test-id":"hide-show-spectrum-button",style:n,type:"button",onClick:()=>t(e,"isVisible"),children:f(wo,{style:b({},o(e.id,"isVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.color}:{opacity:.1,fill:e.display.color})})}),e.info.dimension===2&&F("div",{style:{minWidth:"40px"},children:[f("button",{style:S(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isPositiveVisible"),children:f(wo,{style:b({},o(e.id,"isPositiveVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.positiveColor}:{opacity:.1,fill:e.display.positiveColor})})}),f("button",{style:S(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isNegativeVisible"),children:f(wo,{style:b({},o(e.id,"isNegativeVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.negativeColor}:{opacity:.1,fill:e.display.negativeColor})})})]})]})}const Ye={button:{backgroundColor:"transparent",border:"none",width:"26px",minWidth:"26px"},row:{display:"flex",alignContent:"center",height:"25px",borderBottom:"0.55px solid #f1f1f1"},name:{flex:1,height:"100%",display:"flex"},info:{flex:"1 1 1px",height:"100%",display:"block",alignItems:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"24px"},icon:{display:"flex",margin:"auto",justifyContent:"center"}};function qw({activeSpectrum:e,markersVisible:t,data:n,onChangeVisibility:o,onChangeMarkersVisibility:s,onChangeActiveSpectrum:i,onOpenSettingModal:r,onContextMenu:l}){var x,y;const a=k=>(k&&(k=k.replace(/(?<value>[0-9]+)/g,"<sub>$<value></sub>")),k),u=e&&e.id===n.id,{color:p,name:h,positiveColor:m,negativeColor:g}=n.display;return F("div",{style:b(b({},Ye.row),u?{backgroundColor:"#fafafa"}:{opacity:e?.2:1}),onContextMenu:l,children:[f(Kw,{data:n,onChangeVisibility:o,style:Ye.button}),F("div",{"data-test-id":"activate-deactivate-spectrum-button",style:Ye.name,onClick:()=>i(n),children:[f("div",{style:S(b({},Ye.icon),{width:"16px"}),children:n.info.isFid?f(ih,{}):n.info.dimension===2?f(rh,{}):f(zl,{})}),f("span",{style:Ye.info,children:h}),f("div",{style:Ye.info,dangerouslySetInnerHTML:{__html:n.info&&a(n.info.solvent)}}),F("span",{style:Ye.info,children:[f("span",{style:{borderLeft:"0.55px solid #e5e5e5",paddingRight:"5px"}}),(x=n.info)==null?void 0:x.experiment]}),f("span",{style:Ye.info,children:(y=n.info)==null?void 0:y.pulse})]}),f(Uw,{data:n,style:b(b({},Ye.icon),Ye.button),onChangeMarkersVisibility:s,markersVisible:t}),f(Zw,{style:Ye.button,dimension:n.info.dimension,color:{positiveColor:m,color:p,negativeColor:g},activated:u,onClick:k=>r(n,k)})]})}var Jw=c.exports.memo(qw);function Qw(e){const{onColorChange:t=()=>null,name:n}=e,{values:o,setFieldValue:s}=pe(),i=c.exports.useCallback(r=>{t(r),s(n,`${r.hex}${Math.round(r.rgb.a*255).toString(16)}`)},[n,t,s]);return f(Ol.SketchPicker,{color:{hex:V(o,n,"#000")},presetColors:Aa,onChangeComplete:r=>i(r)})}var Js=c.exports.memo(Qw);function eE(e){const t=e.length,n=Math.floor(t/307200)||1,o=new Float64Array(t/n>>0);let s=0;for(let i=0;i<o.length;i+=n)o[s++]=e[i];return o}function tE(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,r=t.length>0?t[0].x:0,l=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:r,y:a},{x:l,y:a}]}function nE({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=eE(t.re),r=Zl(i,n),l={},a={};for(let u in r.sanplot){const{x:p,y:h}=r.sanplot[u];let m=new Array(p.length);for(let g=0;g<p.length;g++)m[g]={x:p[g],y:h[g]};l[u]=m,a[u]=tE(r[u],m,{yLogBase:o})}return{sanPlot:l,lines:a}},[t.re,n,o]);return F("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[f("div",{style:{display:"block"},children:F(hn,{width:180,height:220,children:[f(lh,{title:"Sanplot"}),f(qe,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Ro,{position:"embedded",bottom:5,right:60})]})}),f("div",{style:{display:"block",width:180,height:180},children:F(hn,{width:180,height:180,children:[f(qe,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Ro,{position:"embedded",bottom:5,right:60})]})})]})}var oE=c.exports.memo(nE);function sE({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=c.exports.useCallback(()=>{n.current&&n.current.submitForm()},[]);return f(ce,{ref:n,initialValues:e.display,onSubmit:t,children:F("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[f("div",{style:{display:"block",position:"relative"},children:f(Js,{name:"color",onColorChange:o})}),f(oE,{color:"red",data:e.data})]})})}function iE(e){const l=e,{onAfterChange:t=()=>null,name:n}=l,o=G(l,["onAfterChange","name"]),{values:s,setFieldValue:i}=pe(),r=c.exports.useCallback(a=>{t(a),i(n,a)},[n,t,i]);return f(ah,b({className:"horizontal-slider",thumbClassName:"thumb",trackClassName:"track",defaultValue:V(s,n,[0,100]),onAfterChange:r,renderThumb:(a,u)=>f("div",S(b({},a),{children:f("span",{children:u.valueNow})})),pearling:!0,minDistance:10},o))}var cl=c.exports.memo(iE);function rE(e){let t=e[0].length,n=e.length,o=Math.floor(t*n/204800)||1;const s=new Float64Array(t*n/o>>0);let i=0;for(let r=0;r<s.length;r+=o)s[i++]=e[r/n>>0][r%n];return s}function lE(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,r=t.length>0?t[0].x:0,l=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:r,y:a},{x:l,y:a}]}function aE({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=rE(t.z),r=Zl(i,n),l={},a={};for(let u in r.sanplot){const{x:p,y:h}=r.sanplot[u];let m=new Array(p.length);for(let g=0;g<p.length;g++)m[g]={x:p[g],y:h[g]};l[u]=m,a[u]=lE(r[u],m,{yLogBase:o})}return{sanPlot:l,lines:a}},[t.z,n,o]);return F("div",{children:[f("div",{style:{textAlign:"center",paddingBottom:5,paddingTop:5},children:"San Plot"}),F("div",{style:{borderTop:"1px solid #ededed",marginTop:"10px",paddingTop:"10px",display:"flex",flexDirection:"row"},children:[F(hn,{width:220,height:180,children:[f(qe,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log ${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Ro,{position:"embedded",bottom:90,right:5})]}),F(hn,{width:220,height:180,children:[f(qe,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Ro,{position:"embedded",bottom:90,right:5})]})]})]})}var cE=c.exports.memo(aE);function uE({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=M`
    .positive {
      display: inline-block;
      .track-1 {
        background-color: ${e.display.positiveColor} !important;
      }
    }
    .negative {
      display: inline-block;

      .track-1 {
        background-color: ${e.display.negativeColor} !important;
      }
    }
  `,s=c.exports.useCallback(()=>{n.current.submitForm()},[]);return d(ce,{ref:n,initialValues:e.display,onSubmit:t,children:w("div",{css:o,children:[w("div",{className:"positive",children:[d("span",{style:{padding:"0 10px"},children:"Positive"}),d(Js,{name:"positiveColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[d("span",{className:"label",children:"contour Levels [ min - max ]"}),d(cl,{name:"contourOptions.positive.contourLevels",onAfterChange:s}),d("span",{className:"label",children:"number of Layers "}),d(W,{name:"contourOptions.positive.numberOfLayers",onChange:s,type:"number"})]})]}),w("div",{className:"negative",children:[d("span",{style:{padding:"0 10px"},children:"Negative"}),d(Js,{name:"negativeColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[d("span",{className:"label",children:"contour Levels [ min - max ]"}),d(cl,{name:"contourOptions.negative.contourLevels",onAfterChange:s}),d("span",{className:"label",children:"number of Layers "}),d(W,{name:"contourOptions.negative.numberOfLayers",onChange:s,type:"number"})]})]}),d(cE,{data:e.data})]})})}const dE=M`
  position: fixed;
  z-index: 999999999;
  width:100%;
  height:100%;
  left:0;
  top:0;
  .inner-conatiner{
    position:absolute;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 4px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.15) 0px 8px 16px;
      overflow: auto;
      height: 350px;
  }


  .sketch-picker {
    border-radius: none !important;
    box-shadow: none !important;
  }


  .horizontal-slider {
    width: 80%;
    height: 15px;
  }

  .thumb {
    height: 15px;
    line-height: 15px;
    width: 20px;
    text-align: center;
    color: black;
    border-radius: 5px;
    cursor: grab;
    font-size: 10px;
    background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
    background-image: linear-gradient(top, #f4f1ee, #fff);
  }

  .track {
    top: 0;
    bottom: 0;
    background: #eaeaea;
    border-radius: 999px;
    border-radius: 5px;
  }

  .track-1 {
    background: red;
  }
   
  .label{
    font-size: 12px;
    margin: 8px 0;
    display: block;
  }
 
  }
`;function pE({position:e,data:t,onClose:n}){const o=Y(),{id:s,info:i}=t,r=c.exports.useCallback(p=>{o({type:pc,id:s,display:p})},[o,s]),l=c.exports.useCallback(p=>{p.target===p.currentTarget&&n()},[n]);if(!e)return null;const{x:a,y:u}=e;return d("div",{css:dE,onClick:l,children:d("div",{className:"inner-conatiner",style:{left:i.dimension===2?a-450:a-240,width:i.dimension===2?450:240,padding:i.dimension===2?"10px 0":"",top:u},children:i.dimension===2?d(uE,{onSubmit:r,data:t}):d(sE,{onSubmit:r,data:t})})})}function hE(){return!0}var fE=c.exports.memo(pE,hE);function mE({data:e,activeSpectrum:t,activeTab:n,onTabChange:o}){const s=c.exports.useRef(),[i,r]=c.exports.useState([]),[l,a]=c.exports.useState(null),[u,p]=c.exports.useState(null),[h,m]=c.exports.useState(!1),g=le(),x=Y();c.exports.useEffect(()=>{if(e){const A=e.reduce((P,I)=>(I.info.dimension===1&&I.display.isPeaksMarkersVisible===!0&&P.push({id:I.id}),P),[]);r(A)}},[e,x]);const y=c.exports.useMemo(()=>e?ss("nucleus")(e,!0):[],[e]);c.exports.useEffect(()=>{o({tab:n,data:y[n]})},[n,o,y]);const k=c.exports.useCallback(A=>{const P=i.findIndex(O=>O.id===A.id),I=[...i];P===-1?I.push({id:A.id}):I.splice(P,1),x({type:Di,data:I}),r(I)},[x,i]),v=c.exports.useCallback(A=>{o({tab:A.tabid,data:y[A.tabid]}),x({type:Oi,tab:A.tabid})},[x,o,y]),C=c.exports.useMemo(()=>[{label:"Copy to Clipboard",onClick:A=>{(async()=>{const{x:P,y:I,info:O}=A;await xs(JSON.stringify({x:P,y:I,info:O},void 0,2))?g.success("Data copied to clipboard"):g.error("Copy to clipboard failed")})()}},{label:"Delete",onClick:A=>{setTimeout(()=>{x({type:Ni,id:A.id})},0)}}],[g,x]),E=c.exports.useCallback((A,P)=>{Xt(A)||(A.preventDefault(),s.current.handleContextMenu(A,P))},[s]),T=c.exports.useCallback((A,P)=>{p({x:P.nativeEvent.clientX,y:P.nativeEvent.clientY}),a(A),m(!0)},[]),N=c.exports.useCallback((A,P)=>{x({type:Zn,id:A.id,key:P,value:!A.display[P]})},[x]),D=c.exports.useCallback(A=>{setTimeout(()=>{t&&t.id===A.id?x({type:zo,data:null}):x({type:zo,data:{id:A.id}})},0)},[t,x]),R=c.exports.useCallback(()=>{m(!1)},[]);return F("div",{style:{height:"calc(100% - 25px)"},children:[f(Pn,{activeTab:n,onClick:v,children:y&&Object.keys(y).map(A=>{var P;return f(Ie,{tablabel:A,tabid:A,children:(P=y[A])==null?void 0:P.map(I=>f(Jw,{activeSpectrum:t,markersVisible:i,data:I,onChangeVisibility:N,onChangeMarkersVisibility:k,onChangeActiveSpectrum:D,onOpenSettingModal:T,onContextMenu:O=>E(O,I)},I.id))},A)})}),f(Zt,{ref:s,context:C}),h?f(fE,{onClose:R,data:l,position:u}):null]})}const gE=c.exports.memo(mE);function xE({onTabChange:e}){const{data:t,activeSpectrum:n,activeTab:o}=$();return f(gE,{data:t,activeSpectrum:n,activeTab:o,onTabChange:e})}const bE={overflow:"hidden",height:"100%",display:"flex",flexDirection:"column",width:"100%"};function yE(){const[e,t]=c.exports.useState([]),n=c.exports.useCallback(o=>{t(o.data?o.data:[])},[]);return F("div",{style:bE,children:[f(Xw,{spectrums:e}),f(xE,{onTabChange:n})]})}var vE=c.exports.memo(yE);const ye={hmbc:{from:2,to:3},cosy:{from:3,to:4},hsqc:{from:1,to:1},hmqc:{from:1,to:1},inadequate:{from:1,to:1}};function Nd(e,t){return ye[t]&&e.from===ye[t].from&&e.to===ye[t].to}function Md(e){return e.split(/\d+/)[1]}function _d(e,t){const n=V(e,`state.${t.atomType}.error`,null);if(n){for(let{key:o,color:s}of yi)if(o!=="incomplete"&&(o==="notAttached"||o==="ambiguousAttachment")&&V(n,`${o}`,[]).some(i=>e.values[i].id===t.id))return s}return null}function Fd(e,t,n,o,s){var i;if(e&&e.info.dimension===2){const r=Gn(e,t.signal.id);if(r){const l=t.axis==="x"?"y":"x",a=(i=r[l])==null?void 0:i.delta;if(a!==void 0)return a*n>=o&&a*n<=s}}return!1}function Go(e,t,n,o,s,i,r){if(e&&e.info.dimension===2){const l=Gn(e,t.signal.id);if((l==null?void 0:l.x.delta)&&(l==null?void 0:l.y.delta))return l.x.delta*n>=o&&l.x.delta*n<=s&&l.y.delta*n>=i&&l.y.delta*n<=r}return!1}function ul(e){var o;let t="X";e.experimentType==="hsqc"||e.experimentType==="hmqc"?t=!e.signal||e.signal.sign===0?"S":`S${e.signal.sign===1?"+":"-"}`:e.experimentType==="hmbc"||e.experimentType==="cosy"||e.experimentType==="tocsy"?t="M":e.experimentType==="noesy"||e.experimentType==="roesy"?t="NOE":e.experimentType==="inadequate"?t="I":e.experimentType==="adequate"&&(t="A");const n=(o=e.signal.j)==null?void 0:o.pathLength;if(n){const s=ye[e.experimentType]&&n.from>=ye[e.experimentType].from&&n.from<=ye[e.experimentType].to&&n.to>=ye[e.experimentType].from&&n.to<=ye[e.experimentType].to;return`${t}${s?"":"*"}`}return t}function Ld(e){return es(S(b({},e),{edited:S(b({},e.edited),{moved:!0})}))}function zn(e,t){const n=e.id.split("_");return es(S(b({},e),{id:n[t==="x"?0:1],axis:t,match:[],edited:S(b({},e.edited),{moved:!0})}))}function xe(e,t,n,o){const s=Pe(t),i=Ve(e),r=t.id.split("_");return o==="add"?ch(i,s===1?Ld(t):zn(t,n)):(o==="remove"||o==="unmove")&&uh(i,n==="x"?r[0]:r[1]),i}function CE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:n,selectedCorrelationIdDim2:o,action:s,link:i,correlations:r}){const l=r.find(x=>x.id===n),a=r.find(x=>x.id===o),u=(l==null?void 0:l.id)!==e.id,p=t&&(a==null?void 0:a.id)!==(t==null?void 0:t.id),h=Pe(i),m=[],g={};if(s==="move"){if(h===1){const x=xe(e,i,"x","remove");let y;l?y=xe(u?l:x,i,"x","add"):y=_n({atomType:e.atomType,link:[Ld(i)]}),m.push(x,y),g.skipDataUpdate=!0}else if(h===2){const x=xe(e,i,"x","remove");m.push(x);const y=xe(t,i,"y","remove");m.push(y),l&&a?(m.push(xe(u?l:x,i,"x","add")),m.push(xe(p?a:y,i,"y","add"))):l&&o==="new"?(m.push(xe(u?l:x,i,"x","add")),m.push(_n({atomType:t.atomType,link:[zn(i,"y")]}))):n==="new"&&a?(m.push(_n({atomType:e.atomType,link:[zn(i,"x")]})),m.push(xe(p?a:y,i,"y","add"))):n==="new"&&o==="new"&&(m.push(_n({atomType:e.atomType,link:[zn(i,"x")]})),m.push(_n({atomType:t.atomType,link:[zn(i,"y")]}))),g.skipDataUpdate=!0}}else if(s==="remove"){const x=xe(e,i,"x","remove");if(m.push(x),Pe(i)===2){const y=xe(t,i,"y","remove");m.push(y)}}else s==="unmove"?h===1?l&&m.push(xe(l,i,"x","unmove")):h===2&&l&&a&&(m.push(xe(l,i,"x","unmove")),m.push(xe(a,i,"y","unmove"))):s==="setPathLength"&&(m.push(dl(e,i,"x")),m.push(dl(t,i,"y")));return{editedCorrelations:m,buildCorrelationDataOptions:g}}function dl(e,t,n){var i,r;const o=Ve(e);if(Pe(t)===2){const l=t.id.split("_")[n==="x"?0:1],a=o.link.find(u=>u.id===l);if(a){const u=(i=t.signal.j)==null?void 0:i.pathLength;Nd(u,a.experimentType)?((r=a.signal.j)==null||delete r.pathLength,a.signal.j&&Object.keys(a.signal.j).length===0&&delete a.signal.j,delete a.edited.pathLength):(a.signal.j?a.signal.j.pathLength=u:a.signal.j={pathLength:u},a.edited.pathLength=!0)}}return o}function kE(e,t){e=e.toLowerCase().replace(/\s+/g,"").split(",").map(s=>s==="sp"?"sp1":s).join(","),e=e.replaceAll("sp","");let n=[];return/^(?:[0-9],{0,1})+$/g.test(e)&&(n=e.split(",").filter(s=>s.length>0).map(s=>Number(s))),n=n.filter(s=>s>=(t==="protonsCount"?0:1)&&(t==="protonsCount"||s<=3)),n.filter((s,i,r)=>r.indexOf(s)===i)}function SE(e,t,n,o,s,i,r){if(r.pseudo===!0||n===null||!r.link.some(g=>g.experimentID===n.id))return!1;const l=t.split(",").map(g=>Md(g)),a=1e4,u=o[0]*a,p=o[1]*a,h=s[0]*a,m=s[1]*a;if(i===B.DM_1D){const g=r.link.find(k=>Pe(k)===1);if(!g)return!1;let x=Ul(g);if(x===void 0)return!1;if(x*=a,Re(e,g.experimentID,!0)&&l[0]===r.atomType&&x>=u&&x<=p||r.link.some(k=>{const v=Re(e,k.experimentID,!0);return Fd(v,k,a,u,p)}))return!0}else if(i===B.DM_2D){if(!l.includes(r.atomType))return!1;const g=r.link.find(y=>Pe(y)===2);if(!g)return!1;const x=Re(e,g.experimentID,!0);if(Go(x,g,a,u,p,h,m))return!0;if(r.link.some(y=>{const k=Re(e,y.experimentID,!0);return Go(k,y,a,u,p,h,m)}))return!0}return!1}function Wo({correlation:e}){const{data:t,xDomain:n,yDomain:o,displayerMode:s,activeTab:i,activeSpectrum:r}=$();return c.exports.useMemo(()=>SE(t,i,r,n,o,s,e),[r,i,e,s,t,n,o])}const wE=M`
  margin-top: 10px;
  padding: 5px;
  text-align: center;

  p {
    font-size: 14px;
  }

  button:focus {
    outline: none;
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 90px;

    color: white;
    background-color: gray;
  }
`;function pl({description:e,onConfirm:t}){const n=c.exports.useCallback(o=>{o.preventDefault(),o.stopPropagation(),t()},[t]);return w("div",{css:wE,children:[d("p",{children:e}),d("button",{type:"button",onClick:n,children:"Confirm"})]})}const EE=M`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  text-align: center;

  .input-container {
    width: 100%;
    margin-top: 5px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 60px;

    color: white;
    background-color: gray;
  }

  .warning {
    margin-top: 5px;
    color: red;
  }
`;function AE({signal:e,experimentType:t,onEdit:n}){var p,h,m,g;const[o,s]=c.exports.useState(((p=e.j)==null?void 0:p.pathLength)!==void 0?e.j.pathLength.from:((h=ye[t])==null?void 0:h.from)||0),[i,r]=c.exports.useState(((m=e.j)==null?void 0:m.pathLength)!==void 0?e.j.pathLength.to:((g=ye[t])==null?void 0:g.to)||0),[l,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{const x={from:o,to:i},y=S(b({},e),{j:S(b({},e.j),{pathLength:x})});n(y)},[i,o,n,e]);return c.exports.useEffect(()=>{a(o<=0||o>i)},[i,o]),w("div",{css:EE,children:[d("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[d(Q,{title:"Min:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:d(kt,{type:"number",value:o,onChange:x=>{s(Number(x.target.value))},style:{input:{color:l?"red":"black"}}})}),d(Q,{title:"Max:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:d(kt,{type:"number",value:i,onChange:x=>{r(Number(x.target.value))}})})]}),l?w("p",{className:"warning",children:["Minimum must not be 0 or higher than the maximum value."," "]}):d(vn,{type:"button",onClick:u,disabled:l,children:"Set"})]})}const TE=M`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  text-align: center;

  p {
    font-size: 14px;
  }

  .selection-container {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 60px;

    color: white;
    background-color: gray;
  }
`;function DE({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:s}){const[i,r]=c.exports.useState(e.id),[l,a]=c.exports.useState((t==null?void 0:t.id)||void 0);function u(h){const m=rt(h);return`${m?m.toFixed(2):"?"}`}const p=c.exports.useCallback((h,m)=>{const g=o.reduce((x,y)=>(y.pseudo===!1&&y.atomType===n.atomType[m]&&x.push({key:y.id,value:y.id,label:`${y.label.origin}: ${u(y)}`}),x),[]);return g.push({key:"new",value:"new",label:`new -> ${(m===0?rt(e):rt(t)).toFixed(2)}`}),d(Ne,{onChange:x=>{m===0?r(x):a(x)},data:g,defaultValue:h.id,style:{width:110,height:25,margin:0,border:"1px solid grey"}})},[e,t,o,n.atomType]);return w("div",{css:TE,children:[d("p",{children:"Move of signals on either one or both axes."}),d("p",{children:'"New" means to separate into a new row or column.'}),w("div",{className:"selection-container",children:[p(e,0),t&&p(t,1)]}),d("button",{type:"button",onClick:()=>s(i,l),children:"Move"})]})}const RE=M`
  width: 490px;
  height: 220px;
  padding: 5px;

  button:focus {
    outline: none;
  }

  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;

    button {
      height: 36px;
      margin: 2px;
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }

    p {
      font-weight: bold;

      margin-bottom: 5px;
      margin-right: 30px;
      padding: 0px 10px;
      width: 100%;

      text-align: center;
    }
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 20%;

    color: white;
    background-color: gray;
  }

  .tabs-container {
    width: 100%;
    flex: 1;
    overflow: auto;
    border: none;
  }
`;function sr({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onClose:s,onEdit:i}){const[r,l]=c.exports.useState("move"),a=c.exports.useCallback(()=>{const h=Pe(n);return h===1?` 1D (${n.signal.delta.toFixed(3)})`:h===2?`${n.signal.x?`${n.signal.x.delta.toFixed(2)}`:"?"} (${e.label.origin}), ${n.signal.y?n.signal.y.delta.toFixed(2):"?"} (${t.label.origin})`:""},[e.label.origin,n,t]),u=c.exports.useCallback((h,m,g,x)=>{const{editedCorrelations:y,buildCorrelationDataOptions:k}=CE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:m,selectedCorrelationIdDim2:g,action:h,link:x||n,correlations:o});i(y,h,x||n,k),s==null||s()},[e,t,o,n,s,i]),p=c.exports.useMemo(()=>d("div",{className:"tabs-container",children:w(Pn,{position:Qi.TOP,activeTab:r,onClick:h=>l(h.tabid),children:[d(Ie,{tablabel:"Move",tabid:"move",children:d(DE,{correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:(h,m)=>u("move",h,m)})}),d(Ie,{tablabel:"Unmove",tabid:"unmove",children:d(pl,{description:"Movement of signal to its original place.",onConfirm:()=>u("unmove",e.id,t.id)})}),d(Ie,{tablabel:"Remove",tabid:"remove",children:d(pl,{description:"Deletion of signal.",onConfirm:()=>u("remove",void 0,void 0)})}),d(Ie,{tablabel:"J Coupling",tabid:"setPathLength",children:d(AE,{signal:n.signal,experimentType:n.experimentType,onEdit:h=>{const m=S(b({},n),{signal:h});u("setPathLength",e,t,m)}})})]})}),[r,e,t,o,u,n]);return w("div",{css:RE,children:[w("div",{className:"header handle",children:[d(fe,{onClick:s}),d("p",{className:"header-info",children:`${n.experimentType.toUpperCase()} signal at ${a()}`})]}),p]})}function PE({spectraData:e,correlationsData:t,correlation:n,onEdit:o}){var C;const s=c.exports.useRef(),i=he(),r=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const E=[];return n.link.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(Ce(T.signal.id,"Crosshair_X"));const N=Ci(e,T.experimentID,T.signal.id,!0);N&&E.push(N)}}),E},[n,e]),l=ie(r),a=c.exports.useCallback(E=>{E.currentTarget.focus(),l.show()},[l]),u=c.exports.useCallback(E=>{E.currentTarget.blur(),l.hide()},[l]),p=Wo({correlation:n}),h=c.exports.useMemo(()=>({style:{color:_d(t,n)||void 0,backgroundColor:l.isActive?"#ff6f0057":p?"#f5f5dc":"inherit"},title:n.pseudo===!1&&n.link.reduce((E,T)=>(T.pseudo===!1&&!E.includes(T.experimentType.toUpperCase())&&E.push(T.experimentType.toUpperCase()),E),[]).sort().join("/"),onMouseEnter:a,onMouseLeave:u}),[n,t,l.isActive,p,a,u]),m=c.exports.useMemo(()=>n.edited.equivalence?{backgroundColor:"#F7F2E0"}:{color:Number.isInteger(n.equivalence)?n.equivalence===1?"#bebebe":"black":"red"},[n]),g=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(E=>Pe(E)===1&&E.pseudo===!1).map(E=>{var T;return{label:`edit 1D (${E.signal.delta.toFixed(3)}${((T=E.edited)==null?void 0:T.moved)===!0?"[MOVED]":""})`,onClick:()=>{l.hide(),i.show(d(sr,{onClose:()=>i.close(),onEdit:o,link:E,correlationDim1:n,correlationDim2:void 0,correlations:t.values}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete all (${n.label.origin})`,onClick:()=>{i.showConfirmDialog({message:`All signals of ${n.label.origin} (${rt(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{o([n],"removeAll")}},{text:"No"}]}),l.hide()}}]):[],[n,t.values,l,i,o]),x=c.exports.useCallback(E=>{E.preventDefault(),s.current.handleContextMenu(E)},[s]),v=h,{title:y}=v,k=G(v,["title"]);return d("th",S(b({},k),{title:y===!1?void 0:y,children:w("div",{style:{display:"block"},onContextMenu:E=>{g.length>0&&x(E)},children:[d("p",{children:n.label.origin}),d("p",{children:rt(n)?(C=rt(n))==null?void 0:C.toFixed(2):""}),d("p",{style:m,children:Number.isInteger(n.equivalence)?n.equivalence:n.equivalence.toFixed(2)}),d(Zt,{ref:s,context:g})]})}))}function IE({rowCorrelation:e,columnCorrelation:t,commonLinks:n,correlations:o,spectraData:s,onEdit:i}){const r=c.exports.useRef(),l=he(),a=c.exports.useMemo(()=>{const E=[];return n.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(Ce(T.signal.id,"Crosshair"));const N=Ci(s,T.experimentID,T.signal.id,!0);N&&E.push(N)}}),E},[n,s]),u=ie(a),p=c.exports.useCallback(E=>{E.currentTarget.focus(),u.show()},[u]),h=c.exports.useCallback(E=>{E.currentTarget.blur(),u.hide()},[u]),m=c.exports.useCallback(E=>{E.preventDefault(),r.current.handleContextMenu(E)},[r]),g=c.exports.useCallback((E,T)=>{const N=e.link.filter(A=>(A.experimentType==="hsqc"||A.experimentType==="hmqc")&&A.pseudo===!0).length;let D,R;if(E==="add"){const A=es({experimentType:"hsqc",experimentID:U(),atomType:[t.atomType,e.atomType],id:U(),pseudo:!0,signal:{id:U(),sign:0}});D=xe(t,A,"x","add"),R=xe(e,A,"y","add"),R.edited.protonsCount||(R.protonsCount=[N+1])}else D=xe(t,T,"x","remove"),R=xe(e,T,"y","remove"),R.edited.protonsCount||(R.protonsCount=N-1>0?[N-1]:[]);i([D,R],E,T,{skipDataUpdate:!0})},[t,i,e]),x=c.exports.useMemo(()=>{const E=n.map(N=>{var R;const D=`${ul(N)} (${N.signal.x?N.signal.x.delta.toFixed(2):"?"}, ${N.signal.y?N.signal.y.delta.toFixed(2):"?"})${((R=N.edited)==null?void 0:R.moved)===!0?"[MOVED]":""}`;return N.pseudo===!1?[{label:`edit ${D}`,onClick:()=>{u.hide(),l.show(f(sr,{onClose:()=>l.close(),onEdit:i,link:N,correlationDim1:t,correlationDim2:e,correlations:o}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}]:[]}).flat(),T=n.find(N=>N.pseudo===!0&&N.experimentType==="hsqc");return e.pseudo===!0&&(T?E.push({label:"remove pseudo HSQC",onClick:()=>g("remove",T)}):E.push({label:"add pseudo HSQC",onClick:()=>g("add")})),E},[t,n,o,g,u,l,i,e]),y=c.exports.useMemo(()=>n.map((E,T)=>{var N;return F("label",{children:[f("label",{style:{color:E.pseudo===!0||((N=E.edited)==null?void 0:N.moved)===!0?"blue":"black"},children:ul(E)}),T<n.length-1&&f("label",{children:"/"})]},E.id)}),[n]),k=c.exports.useMemo(()=>n.reduce((E,T)=>(E.includes(T.experimentType.toUpperCase())||E.push(T.experimentType.toUpperCase()),E),[]).join("/"),[n]),v=Wo({correlation:e}),C=Wo({correlation:t});return F("td",{onContextMenu:E=>{x.length>0&&m(E)},style:{backgroundColor:u.isActive?"#ff6f0057":C||v?"#f5f5dc":"inherit"},title:k,onMouseEnter:p,onMouseLeave:h,children:[y,f(Zt,{ref:r,context:x})]})}function NE({additionalColumnData:e,correlations:t,correlation:n,styleRow:o,styleLabel:s,onSaveEditEquivalences:i,onSaveEditNumericValues:r,onEditCorrelationTableCellHandler:l,spectraData:a}){var O;const u=c.exports.useRef(),p=he(),h=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const L=[];return n.link.forEach(H=>{if(H.pseudo===!1){L.push(H.signal.id),L.push(Ce(H.signal.id,"Crosshair_Y"));const X=Ci(a,H.experimentID,H.signal.id,!0);X&&L.push(X)}}),L},[n,a]),m=ie(h),g=c.exports.useCallback(L=>{i(n,L.target.value)},[n,i]),x=c.exports.useCallback((L,H)=>{r({correlation:n,values:kE(L.target.value,H),key:H})},[n,r]),y=c.exports.useMemo(()=>e.map(L=>{const H=[];return n.link.forEach(X=>{L.link.forEach(J=>{if(X.axis!==J.axis&&X.experimentID===J.experimentID&&X.signal.id===J.signal.id&&!H.some(z=>z.signal.id===X.signal.id)){let z=X.experimentType;X.signal&&X.signal.sign!==0&&(z+=X.signal.sign===1?" (+)":" (-)"),H.push(es(S(b({},X),{experimentLabel:z,axis:void 0,id:`${J.id}_${X.id}`})))}})}),f(IE,{rowCorrelation:n,columnCorrelation:L,commonLinks:H,correlations:t,spectraData:a,onEdit:l},`addColData_${n.id}_${L.id}`)}),[e,n,t,l,a]),k=c.exports.useMemo(()=>n.edited.equivalence?{color:"blue"}:{color:n.equivalence===1?"#bebebe":"black"},[n]),v=c.exports.useCallback(L=>{L.currentTarget.focus(),m.show()},[m]),C=c.exports.useCallback(L=>{L.currentTarget.blur(),m.hide()},[m]),E=Wo({correlation:n}),T=c.exports.useMemo(()=>({style:S(b({},o),{backgroundColor:m.isActive?"#ff6f0057":E?"#f5f5dc":"inherit"}),title:n.pseudo===!1&&n.link.reduce((L,H)=>(H.pseudo===!1&&!L.includes(H.experimentType.toUpperCase())&&L.push(H.experimentType.toUpperCase()),L),[]).sort().join("/"),onMouseEnter:v,onMouseLeave:C}),[n.link,n.pseudo,m.isActive,E,v,C,o]),N=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(L=>Pe(L)===1&&L.pseudo===!1).map(L=>{var H;return{label:`edit 1D (${L.signal.delta.toFixed(3)})${((H=L.edited)==null?void 0:H.moved)===!0?"[MOVED]":""}`,onClick:()=>{m.hide(),p.show(f(sr,{onClose:()=>p.close(),onEdit:l,link:L,correlationDim1:n,correlationDim2:void 0,correlations:t}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete ${n.label.origin}`,onClick:()=>{p.showConfirmDialog({message:`All signals of ${n.label.origin} (${rt(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{l([n],"removeAll")}},{text:"No"}]}),m.hide()}}]):[],[n,m,p,l,t]),D=c.exports.useCallback(L=>{L.preventDefault(),u.current.handleContextMenu(L)},[u]),I=T,{title:R}=I,A=G(I,["title"]),P=R||"";return F("tr",{style:o,children:[F("td",S(b({title:P},A),{style:S(b({},T.style),{styleLabel:s}),onContextMenu:L=>{N.length>0&&D(L)},children:[dh(t,n),f(Zt,{ref:u,context:N})]})),f("td",S(b({title:P},A),{children:rt(n)?(O=rt(n))==null?void 0:O.toFixed(2):""})),f("td",S(b({title:P},A),{children:n.pseudo===!1?n.atomType!=="H"?f(lt,{type:"number",value:n.equivalence,style:k,onSave:g}):f("text",{style:k,children:n.equivalence}):""})),f("td",S(b({title:P},A),{children:n.atomType!=="H"?f(lt,{type:"text",value:n.protonsCount.join(","),style:n.edited.protonsCount?{color:"blue"}:{},onSave:L=>x(L,"protonsCount")}):""})),f("td",S(b({title:P},A),{style:S(b({},T.style),{borderRight:"1px solid"}),children:n.atomType!=="H"?f(lt,{type:"text",value:n.hybridization.map(L=>`sp${L}`).join(","),style:n.edited.hybridization?{color:"blue"}:{},onSave:L=>x(L,"hybridization")}):""})),y]})}const ME=M`
  overflow: auto;
  height: 100%;
  display: block;
  table {
    border-spacing: 0;
    border: 1px solid #dedede;
    width: 100%;
    font-size: 12px;
    height: 100%;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  thead tr {
    background-color: white !important;
  }
  th {
    position: sticky;
    background-color: white;
    top: 0;
  }

  th,
  td {
    white-space: nowrap;
    text-align: center;
    margin: 0;
    padding: 0.4rem;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;

    :last-child {
      border-right: 0;
    }
    button {
      background-color: transparent;
      border: none;
    }
  }
`;function _E({correlationsData:e,filteredCorrelationsData:t,additionalColumnData:n,editEquivalencesSaveHandler:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,showProtonsAsRows:r,spectraData:l}){const a=c.exports.useMemo(()=>t?t.values.filter(p=>r?p.atomType==="H":p.atomType!=="H").map(p=>d(NE,{additionalColumnData:n,correlations:e.values,correlation:p,styleRow:{backgroundColor:"mintcream"},styleLabel:p.atomType==="H"?{color:_d(e,p)}:{},onSaveEditEquivalences:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,spectraData:l},`correlation${p.atomType}${p.id}`)):[],[t,r,n,e,o,s,i,l]),u=c.exports.useMemo(()=>n.map(p=>d(PE,{spectraData:l,correlationsData:e,correlation:p,onEdit:i},`additionalCorrelationHeader_${p.id}`)),[n,e,i,l]);return d("div",{css:ME,children:w("table",{children:[d("thead",{children:w("tr",{children:[d("th",{children:"Atom"}),d("th",{children:"\u03B4 (ppm)"}),d("th",{children:"Equiv"}),d("th",{children:"#H"}),d("th",{style:{borderRight:"1px solid"},children:"Hybrid"}),u]})}),d("tbody",{children:a})]})})}const FE=M`
  display: flex;
  width: 100%;
  font-size: 15px;
  font-weight: 300;
  white-space: nowrap;
  span {
    margin-left: 8px;
  }
`;function LE({correlationsData:e}){if(!e)return null;const t=ph(e.options.mf),n=Object.keys(t).length>0?Object.keys(t).map((o,s)=>{const i=e.state[o],r=i?i.error:void 0,l=r?tx.findIndex(a=>r[a]!==void 0):"black";return d("span",{style:{color:i?i.complete===!0&&(!r||Object.keys(r).length===0)?"green":l>=0?yi[l].color:"black":"black"},children:`${o}: ${i?i.current:"-"}/${t[o]}   `},`molFormulaView_${s}`)}):d("p",{style:{fontStyle:"italic",color:"orange"},children:"Molecular formula is not set"});return d("div",{css:FE,children:n})}var OE=c.exports.memo(LE);const $E=M`
  text-align: center;

  input {
    height: 100%;
    width: 200px;
    border-radius: 5px;
    border: 0.55px solid #c7c7c7;
    margin: 0px 5px 0px 5px;
    text-align: center;
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 36px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 20%;

    color: white;
    background-color: gray;
  }
`;function HE({onSave:e=()=>null,previousMF:t}){const[n,o]=c.exports.useState(""),[s,i]=c.exports.useState(!0),[r,l]=c.exports.useState(!1),a=c.exports.useCallback(h=>{if(h.trim().length===0)return!1;try{return Xa(h),!0}catch{return!1}},[]),u=c.exports.useCallback(h=>{l(!0),a(h.target.value)?(i(!0),o(h.target.value)):(i(!1),o(""))},[a]),p=c.exports.useCallback(()=>{e(r?n.trim():t)},[r,n,e,t]);return w("div",{css:$E,children:[d("input",{type:"text",onChange:u,defaultValue:t}),d("button",{type:"button",onClick:p,disabled:!s,children:s?"Set":"Invalid"})]})}const zE=M`
  overflow: auto;
  width: 400px;
  height: 550px;
  padding: 5px;
  button:focus {
    outline: none;
  }
  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;

    button {
      height: 36px;
      margin: 2px;
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 20%;

    color: white;
    background-color: gray;
  }

  .info {
    margin-top: 0;
    margin-bottom: 10px;
    padding: 0px 10px;
    width: 100%;

    text-align: center;
  }

  .optional {
    margin-top: 20px;
    margin-bottom: 5px;
    padding: 0px 10px;

    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  .optional2 {
    margin-top: 5px;
    margin-bottom: 25px;
    padding: 0px 10px;
    width: 100%;

    text-align: center;
  }
`;function VE({onClose:e,onSave:t,molecules:n,previousMF:o}){const[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{n&&n.length>0&&i(0)},[n]);const r=c.exports.useCallback(u=>{t==null||t(u),e==null||e()},[e,t]),l=c.exports.useCallback(()=>{t==null||t(n[s].mf),e==null||e()},[s,n,e,t]),a=c.exports.useCallback(u=>{i(u)},[]);return w("div",{css:zE,children:[d("div",{className:"header handle",children:d(fe,{onClick:e})}),d("div",{children:d("p",{className:"info",children:"Please type in a molecular formula!"})}),d(HE,{onSave:r,previousMF:o}),w("div",{children:[d("p",{className:"optional",children:"OR"}),d("p",{className:"optional2",children:"Select a molecule as reference!"})]}),d(wd,{molecules:n,onChange:a}),d("button",{type:"button",onClick:l,children:"Set"})]})}const jE=M`
  width: 220px;
  height: 270px;
  padding: 5px;
  text-align: center;

  button:focus {
    outline: none;
  }

  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;

    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
      user-select: none;
    }

    button {
      height: 36px;
      margin: 2px;
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 20%;

    color: white;
    background-color: gray;
  }

  table {
    margin-top: 10px;
    width: 100%;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input {
      width: 100px;
      text-align: center;
      border-radius: 5px;
      border: 0.55px solid #c7c7c7;
    }
  }
`;function BE({onClose:e,onSave:t,previousTolerance:n}){const[o,s]=c.exports.useState(),[i,r]=c.exports.useState({});c.exports.useEffect(()=>{if(n){s(n);const p={};Object.keys(n).forEach(h=>{p[h]=!0}),r(p)}else s(void 0)},[n]);const l=c.exports.useCallback(()=>{t==null||t(o),e==null||e()},[e,t,o]),a=c.exports.useCallback((p,h)=>{const m=p.target.value;m.trim().length>0?(s(S(b({},o),{[h]:Number(m)})),r(S(b({},i),{[h]:!0}))):r(S(b({},i),{[h]:!1}))},[i,o]),u=c.exports.useMemo(()=>o?Object.keys(o).map(p=>w("tr",{children:[d("td",{children:p}),d("td",{children:d("input",{type:"number",onChange:h=>a(h,p),defaultValue:o[p],style:i[p]?{}:{backgroundColor:"orange"}})})]},`tolerance_${p}`)):void 0,[i,a,o]);return w("div",{css:jE,children:[w("div",{className:"header handle",children:[d("span",{children:"Set Shift Tolerances"}),d(fe,{onClick:e})]}),w("table",{children:[d("thead",{children:w("tr",{children:[d("th",{children:"Atom"}),d("th",{children:"Value"})]})}),d("tbody",{children:u})]}),d("button",{type:"button",onClick:l,disabled:Object.keys(i).some(p=>!i[p]),children:"Set"})]})}const XE=M`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 100%;

  .extra-header-content {
    display: flex;
    width: 100%;

    .overview-container {
      width: 100%;
      display: flex;
      align-items: center;
      margin-left: 10px;
    }

    .table-view-selection {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 2px;

      white-space: nowrap;

      label {
        font-size: 13px;
      }
    }
  }
`;function YE(){const{molecules:e,correlations:t,data:n,xDomain:o,yDomain:s,displayerMode:i,activeTab:r}=$(),l=Y(),a=he(),u=Be(),[p,h]=c.exports.useState([]),[m,g]=c.exports.useState("H"),[x,y]=c.exports.useState(!1),[k,v]=c.exports.useState(!1),C=c.exports.useMemo(()=>{const z=j=>{if(j.pseudo===!0)return!1;const K=r.split(",").map(st=>Md(st)),ne=1e4,Me=o[0]*ne,ft=o[1]*ne,Kt=s[0]*ne,qt=s[1]*ne;if(i===B.DM_1D){const st=j.link.find(Qt=>Pe(Qt)===1);if(!st)return!1;let Jt=Ul(st);if(Jt===void 0)return!1;if(Jt*=ne,Re(n,st.experimentID,!0)&&K[0]===j.atomType&&Jt>=Me&&Jt<=ft||j.link.some(Qt=>{const Vd=Re(n,Qt.experimentID,!0);return Fd(Vd,Qt,ne,Me,ft)}))return!0}else if(i===B.DM_2D){if(!K.includes(j.atomType))return!1;const st=j.link.find(Nn=>Pe(Nn)===2);if(!st)return!1;const Jt=Re(n,st.experimentID,!0);if(Go(Jt,st,ne,Me,ft,Kt,qt))return!0;if(j.link.some(Nn=>{const Qt=Re(n,Nn.experimentID,!0);return Go(Qt,Nn,ne,Me,ft,Kt,qt)}))return!0}return!1};if(t){const j=k?t.values.filter(K=>z(K)):t.values;return S(b({},t),{values:j})}},[r,t,i,k,n,o,s]),E=c.exports.useCallback(z=>{l({type:bc,payload:{mf:z}})},[l]),T=c.exports.useCallback(z=>{l({type:yc,payload:{tolerance:z}})},[l]),N=c.exports.useCallback(()=>{a.show(d(VE,{onClose:()=>a.close(),onSave:E,molecules:e,previousMF:t.options.mf}))},[t,E,a,e]),D=c.exports.useCallback(()=>{a.show(d(BE,{onClose:()=>a.close(),onSave:T,previousTolerance:t.options.tolerance}))},[t,T,a]),R=c.exports.useMemo(()=>["H","H-H"].concat(t?t.values.map(j=>j.atomType).filter((j,K,ne)=>j!=="H"&&ne.indexOf(j)===K):[]).map(j=>({key:j,label:j,value:j})),[t]);c.exports.useEffect(()=>{const z=m.split("-")[0];h(C?C.values.filter(j=>j.atomType===z).reverse():[])},[C,m]);const A=c.exports.useCallback((z,j)=>{l({type:Ws,payload:{id:z.id,correlation:S(b({},z),{equivalence:j,edited:S(b({},z.edited),{equivalence:j!==1})})}})},[l]),P=c.exports.useCallback(({correlation:z,values:j,key:K})=>{l({type:Ws,payload:{id:z.id,correlation:S(b({},z),{[K]:j,edited:S(b({},z.edited),{[K]:!0})}),options:{skipDataUpdate:!0}}})},[l]),I=c.exports.useCallback((z,j)=>{l({type:gc,payload:{correlations:z,options:j}})},[l]),O=c.exports.useCallback(z=>{l({type:xc,payload:{correlation:z,assignmentData:u}})},[u,l]),L=c.exports.useCallback(z=>{const j=Pe(z);if(j===1){const K=Re(n,z.experimentID,!1),ne=vi(K,z.signal.id),Me=Ja(K,z.signal.id);l({type:Mc,payload:{spectrum:K,range:ne,signal:Me,assignmentData:u}})}else if(j===2){const K=Re(n,z.experimentID,!1),ne=_o(K,z.signal.id),Me=Gn(K,z.signal.id);l({type:Yc,payload:{spectrum:K,zone:ne,signal:Me,assignmentData:u}})}},[u,l,n]),H=c.exports.useCallback(z=>{var K;if(Pe(z)===2){const ne=Re(n,z.experimentID,!1),Me=_o(ne,z.signal.id),ft=Gn(ne,z.signal.id);l({type:Gc,payload:{spectrum:ne,zone:Me,signal:ft,pathLength:(K=z.signal.j)==null?void 0:K.pathLength}})}},[l,n]),X=c.exports.useCallback((z,j,K,ne)=>{j==="add"||j==="move"||j==="remove"||j==="unmove"||j==="setPathLength"?(K&&K.pseudo===!1&&(j==="remove"?L(K):j==="setPathLength"&&H(K)),I(z,ne)):j==="removeAll"&&O(z[0])},[H,O,L,I]),J=c.exports.useCallback(()=>{v(!k)},[k]);return w("div",{css:XE,children:[w(ot,{canDelete:!1,counter:t?t.values.length:0,onFilter:J,filterToolTip:k?"Show all correlations":"Hide correlations out of view",filterIsActive:k,counterFiltered:C==null?void 0:C.values.length,children:[d(we,{title:`Set molecular formula (${t.options.mf})`,popupPlacement:"right",children:d("button",{type:"button",onClick:N,children:d(hh,{})})}),d(we,{title:"Set shift tolerance",popupPlacement:"right",children:d("button",{type:"button",onClick:D,children:d(fh,{})})}),w("div",{className:"extra-header-content",children:[d("div",{className:"overview-container",children:d(OE,{correlationsData:t})}),d("div",{className:"table-view-selection",children:w("span",{children:[d("label",{children:"View:"}),d(Ne,{onChange:z=>{g(z),y(z==="H-H")},data:R,defaultValue:m,style:{fontSize:"12px",width:"70px",height:"18px",border:"1px solid grey"}})]})})]})]}),d(_E,{correlationsData:t,filteredCorrelationsData:C,additionalColumnData:p,editEquivalencesSaveHandler:A,onSaveEditNumericValues:P,onEditCorrelationTableCellHandler:X,showProtonsAsRows:x,spectraData:n})]})}var GE=c.exports.memo(YE);const Ns={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},WE=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function ZE({nucleus:e,innerRef:t}){const n=le(),o=re(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,p)=>(u[p]=Gv,u),{}),a=pt(o.current,"formatting.panels.zones");s.current.setValues(a||l)}},[e,o]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{o.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"zones",value:l}}),n.success("zones preferences saved successfully")},[n,o]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Ns.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>F("div",{style:Ns.groupContainer,children:[f(Le,{style:Ns.header,value:l}),WE.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id))]},l))})})}const UE=c.exports.memo(ZE);function KE(e,t){const n=ys();return f(UE,{innerRef:t,nucleus:n})}var qE=c.exports.forwardRef(KE);const JE=M`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  text-align: center;

  .input-container {
    width: 100%;
    margin-top: 5px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 60px;

    color: white;
    background-color: gray;
  }

  .warning {
    margin-top: 5px;
    color: red;
  }
`;function QE({signalIndex:e}){var o,s,i,r,l,a,u,p,h,m,g,x,y,k,v,C,E,T;const{errors:t,values:n}=pe();return w("div",{css:JE,children:[d("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[d(qs,{name:`signals[${e}].j.pathLength.from`,defaultValue:((s=(o=n.signals[e].j)==null?void 0:o.pathLength)==null?void 0:s.from)||((i=ye[n.experimentType])==null?void 0:i.from)||1,label:"Min: ",style:{input:{color:(a=(l=(r=t.signals)==null?void 0:r[e].j)==null?void 0:l.pathLength)!=null&&a.from?"red":"black"}},min:1,max:((p=(u=n.signals[e].j)==null?void 0:u.pathLength)==null?void 0:p.to)||((h=ye[n.experimentType])==null?void 0:h.to),pattern:"[1-9]+"}),d(qs,{name:`signals[${e}].j.pathLength.to`,defaultValue:((g=(m=n.signals[e].j)==null?void 0:m.pathLength)==null?void 0:g.to)||((x=ye[n.experimentType])==null?void 0:x.to)||1,label:"Max: ",style:{input:{color:(v=(k=(y=t.signals)==null?void 0:y[e].j)==null?void 0:k.pathLength)!=null&&v.to?"red":"black"}},min:((E=(C=n.signals[e].j)==null?void 0:C.pathLength)==null?void 0:E.from)||((T=ye[n.experimentType])==null?void 0:T.from)||1,pattern:"[1-9]+"})]})]})}function e2({signalIndex:e}){return f(QE,{signalIndex:e})}const t2=M`
  text-align: center;
  width: 100%;

  .errorText {
    color: red;
  }

  .infoText {
    padding: 10px;
    margin: 10px 0;
    font-size: 14px;
    text-align: left;
    color: white;
    background-color: #5f5f5f;
    border-radius: 5px;
  }
`,n2=M`
  color: red;
`,o2=M`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function s2(){const{values:e,setFieldValue:t,errors:n}=pe(),o=c.exports.useCallback(l=>!!((n==null?void 0:n.signals)&&(n==null?void 0:n.signals[l])),[n]),s=c.exports.useMemo(()=>e.signals.length>0?e.signals.map((a,u)=>d(Ie,{tabid:`${u}`,tabstyles:o(u)?n2:o2,render:()=>w("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"11px"},children:[w("span",{children:["\u{1D6C5}",d("sub",{children:a.x.nucleus}),": ",a.x.delta.toFixed(2)]}),w("span",{children:["\u{1D6C5}",d("sub",{children:a.y.nucleus}),": ",a.y.delta.toFixed(2)]})]}),children:d(e2,{signalIndex:u})},`signalForm_zone${u}`)):[],[o,e.signals]),i=c.exports.useCallback(({tabid:l})=>{t("activeTab",l)},[t]),r=c.exports.useCallback(({tabid:l})=>{const a=e.signals.filter((u,p)=>p!==Number(l));t("signals",a)},[t,e.signals]);return w("div",{children:[d("div",{css:t2}),d(Pn,{activeTab:e.activeTab,onClick:i,onDelete:r,children:s})]})}const i2=()=>c.exports.useMemo(()=>ee().shape({signals:Os().of(ee().shape({j:ee().shape({pathLength:ee().shape({from:ae().required().positive().integer(),to:ae().required().positive().integer()})})})).min(1,"There must be at least one signal in a zone!")}),[]),r2=M`
  width: 500px;
  height: 250px;
  padding: 5px;
  button:focus {
    outline: none;
  }
  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
      border-left: 1px solid #ececec;
      padding-left: 6px;
    }

    button {
      background-color: transparent;
      border: none;
      padding: 5px;

      svg {
        height: 16px;
      }
    }
  }
  .container {
    display: flex;
    margin: 30px 5px;
  }
`;function l2({onSaveEditZoneModal:e=()=>null,onCloseEditZoneModal:t=()=>null,onZoomEditZoneModal:n=()=>null,rowData:o}){const s=c.exports.useRef(null),i=i2(),r=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{r()},[r]);const l=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(p=>{(async()=>{const h=S(b({},o),{signals:p.signals.map(m=>{var g,x;return Nd((g=m.j)==null?void 0:g.pathLength,o.tableMetaInfo.experiment)&&((x=m.j)==null||delete x.pathLength,m.j&&Object.keys(m.j).length===0&&delete m.j),m})});await e(h),l()})()},[l,e,o]),u=c.exports.useMemo(()=>({activeTab:"0",signals:o.signals.map(p=>{var h,m;return S(b({},p),{j:b({pathLength:{from:((h=ye[o.tableMetaInfo.experiment])==null?void 0:h.from)||1,to:((m=ye[o.tableMetaInfo.experiment])==null?void 0:m.to)||1}},p.j)})})}),[o.signals,o.tableMetaInfo.experiment]);return d("div",{css:r2,children:w(ce,{ref:s,initialValues:u,validationSchema:i,onSubmit:a,children:[w("div",{className:"header handle",children:[d(vn,{onClick:r,className:"zoom-button",children:d(Qn,{title:"Set to default view on range in spectrum"})}),d("span",{children:"Zone and Signal edition"}),d(er,{onClick:()=>s.current.submitForm(),popupTitle:"Save and exit"}),d(fe,{onClick:l})]}),d(s2,{})]})})}const a2={marginLeft:2,marginRight:2,border:"none",height:"20px"};function c2({rowData:e,rowSpanTags:t}){const n=Y(),o=Be(),s=he(),i=c.exports.useCallback(p=>{n({type:lu,payload:{rowData:e,value:p}})},[n,e]),r=c.exports.useCallback(()=>{n({type:ps,payload:{id:e.id,assignmentData:o}})},[o,n,e]),l=c.exports.useCallback(()=>{const p=Math.abs(e.x.from-e.x.to)*10;n({type:ls,xDomain:e.x.from<=e.x.to?[e.x.from-p,e.x.to+p]:[e.x.to-p,e.x.from+p]});const h=Math.abs(e.y.from-e.y.to)*10;n({type:Ai,yDomain:e.y.from<=e.y.to?[e.y.from-h,e.y.to+h]:[e.y.to-h,e.y.from+h]})},[n,e.x.from,e.x.to,e.y.from,e.y.to]),a=c.exports.useCallback(p=>{n({type:au,payload:{editedRowData:p}})},[n]),u=c.exports.useCallback(()=>{n({type:co,payload:{selectedTool:_.editRange.id,tempRange:e}}),s.show(f(l2,{onCloseEditZoneModal:()=>s.close(),onSaveEditZoneModal:a,onZoomEditZoneModal:()=>l(),rowData:e}),{position:te.MIDDLE_RIGHT,transition:Qe.SCALE,isBackgroundBlur:!1})},[n,s,e,a,l]);return F(c.exports.Fragment,{children:[f("td",{children:f(Ne,{onChange:p=>{i(p)},data:ri,defaultValue:e.tableMetaInfo.signal.kind,style:a2})}),F("td",S(b({},t),{children:[f("button",{type:"button",className:"delete-button",onClick:r,children:f(St,{})}),f("button",{type:"button",className:"zoom-button",onClick:l,children:f(Qn,{title:"Zoom to zone in spectrum"})}),f("button",{type:"button",className:"edit-button",onClick:u,children:f(Yl,{color:"blue"})})]}))]})}function hl({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:r,showUnlinkButton:l,setShowUnlinkButton:a}){return f("td",S(b({},o),{onClick:u=>s(u,t,r),style:n.isActive||t.isActive&&t.activeAxis===r?{color:"red",fontWeight:"bold"}:void 0,children:V(e,`tableMetaInfo.signal.${r}.diaIDs`,[]).length>0?F("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e.tableMetaInfo.signal[r].diaIDs.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:l?"visible":"hidden",padding:0,margin:0},onClick:u=>i(u,!1,r),children:f(Qo,{color:"red"})})})]}):t.isActive&&t.activeAxis===r?"0":""}))}function u2({rowData:e,assignmentSignal:t,onHoverSignalX:n,onHoverSignalY:o,showUnlinkButtonSignalX:s,showUnlinkButtonSignalY:i,setShowUnlinkButtonSignalX:r,setShowUnlinkButtonSignalY:l,onClick:a,onUnlink:u,highlightSignalX:p,highlightSignalY:h}){return F(c.exports.Fragment,{children:[f(hl,{rowData:e,assignment:t,highlight:p,onHover:n,onClick:a,onUnlink:u,axis:"x",showUnlinkButton:s,setShowUnlinkButton:r}),f(hl,{rowData:e,assignment:t,highlight:h,onHover:o,onClick:a,onUnlink:u,axis:"y",showUnlinkButton:i,setShowUnlinkButton:l})]})}function d2({rowData:e,onHoverSignalX:t,onHoverSignalY:n}){const o=Y(),s=V(e,"tableMetaInfo.signal.x.delta",null),i=V(e,"tableMetaInfo.signal.y.delta",null),r=V(e,"tableMetaInfo.signal.id",void 0),l=c.exports.useCallback(u=>{const p=u.target.value;o({type:Zs,payload:{zoneID:e.id,signal:{id:r,x:p}}})},[o,r,e.id]),a=c.exports.useCallback(u=>{const p=u.target.value;o({type:Zs,payload:{zoneID:e.id,signal:{id:r,y:p}}})},[o,r,e.id]);return F(c.exports.Fragment,{children:[f("td",S(b({},t),{children:s!==null?f(lt,{value:s.toFixed(2),onSave:l,type:"number",style:{padding:"0.1rem 0.4rem"}}):""})),f("td",S(b({},n),{children:i!==null?f(lt,{value:i.toFixed(2),onSave:a,type:"number",style:{padding:"0.1rem 0.4rem"}}):""}))]})}function fl({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:r,showUnlinkButton:l,setShowUnlinkButton:a,rowSpanTags:u}){return f("td",S(b(b({},u),o),{onClick:p=>s(p,t,r),children:V(e,`${r}.nbAtoms`,0)>0?V(e,`${r}.diaIDs`,0).length>0?F("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e[r].nbAtoms," ","(",f("span",{style:t.isActive&&t.activeAxis===r||t.isOnHover&&t.onHoverAxis===r||n.isActive?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"},children:V(e,`${r}.diaIDs`,[]).length}),")"," ",f("sup",{children:f("button",{type:"button",style:{visibility:l?"visible":"hidden",padding:0,margin:0},onClick:p=>i(p,!0,r),children:f(Qo,{color:"red"})})})]}):t.isActive&&t.activeAxis===r?F("div",{children:[`${V(e,`${r}.nbAtoms`,"")} (`,f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):e[r].nbAtoms:t.isActive&&t.activeAxis===r?F("div",{children:["0 (",f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):""}))}function p2({rowData:e,assignmentZone:t,onHoverZoneX:n,onHoverZoneY:o,showUnlinkButtonZoneX:s,showUnlinkButtonZoneY:i,setShowUnlinkButtonZoneX:r,setShowUnlinkButtonZoneY:l,rowSpanTags:a,onClick:u,onUnlink:p,highlightZoneX:h,highlightZoneY:m}){return F(c.exports.Fragment,{children:[f(fl,{rowData:e,assignment:t,highlight:h,onHover:n,onClick:u,onUnlink:p,axis:"x",showUnlinkButton:s,setShowUnlinkButton:r,rowSpanTags:a}),f(fl,{rowData:e,assignment:t,highlight:m,onHover:o,onClick:u,onUnlink:p,axis:"y",showUnlinkButton:i,setShowUnlinkButton:l,rowSpanTags:a})]})}const h2={backgroundColor:"#ff6f0057"},f2={backgroundColor:"#f5f5dc"};function m2({rowData:e,onUnlink:t,onContextMenu:n,rowIndex:o}){const s=ct(e.id),i=ie([s.id]),r=ie([Ce(s.id,"X")].concat(s.assigned.x||[])),l=ie([Ce(s.id,"Y")].concat(s.assigned.y||[])),a=ct(e.tableMetaInfo.id),u=ie([Ce(a.id,"X")].concat(a.assigned.x||[],Ce(a.id,"Crosshair"))),p=ie([Ce(a.id,"Y")].concat(a.assigned.y||[],Ce(a.id,"Crosshair"))),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),[y,k]=c.exports.useState(!1),[v,C]=c.exports.useState(!1),E=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:V(e,"tableMetaInfo.hide",!1)===!0?{display:"none"}:null}),[e]),T=c.exports.useCallback((I,O,L)=>{I&&I.stopPropagation(),t(e,O,e.tableMetaInfo.signalIndex,L),L==="x"?O!==void 0?O?(m(!1),s.removeAll("x")):(k(!1),a.removeAll("x")):(m(!1),k(!1)):L==="y"?O!==void 0?O?(x(!1),s.removeAll("y")):(C(!1),a.removeAll("y")):(x(!1),C(!1)):(m(!1),s.removeAll("x"),k(!1),a.removeAll("x"),x(!1),s.removeAll("y"),C(!1),a.removeAll("y"))},[a,s,t,e]),N=c.exports.useCallback((I,O,L)=>{I.stopPropagation(),O.onClick(L)},[]),D=c.exports.useMemo(()=>({onMouseEnter:()=>{s.onMouseEnter("x"),r.show()},onMouseLeave:()=>{s.onMouseLeave("x"),r.hide()}}),[s,r]),R=c.exports.useMemo(()=>({onMouseEnter:()=>{s.onMouseEnter("y"),l.show()},onMouseLeave:()=>{s.onMouseLeave("y"),l.hide()}}),[s,l]),A=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("x"),u.show()},onMouseLeave:()=>{a.onMouseLeave("x"),u.hide()}}),[a,u]),P=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("y"),p.show()},onMouseLeave:()=>{a.onMouseLeave("y"),p.hide()}}),[a,p]);return w("tr",S(b({onContextMenu:I=>n(I,e),style:i.isActive||s.isActive?h2:V(e,"tableMetaInfo.isConstantlyHighlighted",!1)===!0?f2:null},i.onHover),{children:[d("td",S(b({},E),{children:o+1})),d(d2,{rowData:e,onHoverSignalX:A,onHoverSignalY:P}),d(u2,{rowData:e,assignmentSignal:a,onHoverSignalX:A,onHoverSignalY:P,showUnlinkButtonSignalX:y,showUnlinkButtonSignalY:v,setShowUnlinkButtonSignalX:I=>k(I),setShowUnlinkButtonSignalY:I=>C(I),onClick:N,onUnlink:T,highlightSignalX:u,highlightSignalY:p}),d(p2,{rowData:e,assignmentZone:s,onHoverZoneX:D,onHoverZoneY:R,showUnlinkButtonZoneX:h,showUnlinkButtonZoneY:g,setShowUnlinkButtonZoneX:I=>m(I),setShowUnlinkButtonZoneY:I=>x(I),rowSpanTags:E,onClick:N,onUnlink:T,highlightZoneX:r,highlightZoneY:l}),d(c2,{rowData:e,rowSpanTags:E})]}))}const g2=M`
  border-spacing: 0;
  border: 1px solid #dedede;
  width: 100%;
  font-size: 12px;
  .react-contextmenu-wrapper {
    display: contents;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  thead tr:nth-of-type(1) th {
    top: 0;
  }
  thead tr:nth-of-type(2) th {
    top: 21px;
  }
  th {
    position: sticky;
    background-color: white;
    z-index: 2;
  }
  th,
  td {
    white-space: nowrap;
    text-align: center;
    margin: 0;
    padding: 0.1rem 0.4rem;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;

    :last-child {
      border-right: 0;
    }
    button {
      background-color: transparent;
      border: none;
      padding: 0 5px;
    }
  }
`;function x2({tableData:e,onUnlink:t,context:n,nuclei:o,experiment:s}){const i=c.exports.useRef(null),r=c.exports.useCallback((m,g)=>{Xt(m)||(m.preventDefault(),i.current.handleContextMenu(m,g))},[i]),l=c.exports.useMemo(()=>{const m=[];return e.forEach((g,x)=>{g.signals.length===1?m.push(S(b({},g),{tableMetaInfo:S(b({},g.tableMetaInfo),{signal:g.signals[0],rowIndex:x,signalIndex:0,id:g.signals[0].id,experiment:s,nuclei:o})})):g.signals.length>1&&g.signals.forEach((y,k)=>{let v=!1,C=null;k<g.signals.length-1&&k===0?C=g.signals.length:v=!0,m.push(S(b({},g),{tableMetaInfo:S(b({},g.tableMetaInfo),{signal:y,rowSpan:C,hide:v,rowIndex:x,signalIndex:k,id:y.id,experiment:s})}))})}),m},[s,o,e]),{items:a,isSortedDesc:u,onSort:p}=Pd(l),h=c.exports.useMemo(()=>a.map((m,g)=>d(m2,{rowIndex:g,rowData:m,onUnlink:t,onContextMenu:(x,y)=>r(x,y)},`${m.tableMetaInfo.id}`)),[r,a,t]);return w("div",{children:[w("table",{css:g2,children:[w("thead",{children:[w("tr",{children:[d("th",{rowSpan:2,children:"#"}),d("th",{colSpan:2,children:"\u03B4 (ppm)"}),d("th",{colSpan:2,children:d(Gl,{})}),d("th",{colSpan:2,children:"\u03A3"}),d("th",{rowSpan:2,children:"Kind"}),d("th",{rowSpan:2,children:""})]}),w("tr",{children:[d("th",S(b({id:"tableMetaInfo.signal.x.delta"},p),{children:w(en,{text:"F2",children:[o[0]," ",u("tableMetaInfo.signal.x.delta").content]})})),d("th",S(b({id:"tableMetaInfo.signal.y.delta"},p),{children:w(en,{text:"F1",children:[o[1]," ",u("tableMetaInfo.signal.y.delta").content]})})),d("th",{children:d(en,{text:"F2",children:o[0]})}),d("th",{children:d(en,{text:"F1",children:o[1]})}),d("th",{children:d(en,{text:"F2",children:o[0]})}),d("th",{children:d(en,{text:"F1",children:o[1]})})]})]}),d("tbody",{children:h})]}),d(Zt,{ref:i,context:n})]})}function en(e){return w(je,{children:[d("div",{style:{position:"absolute",fontSize:8,color:"#3539E6"},children:e.text}),d("div",{style:{marginLeft:5},children:e.children})]})}const b2=M`
  .remove-assignments-btn {
    border-radius: 5px;
    margin-top: 3px;
    margin-left: 2px;
    border: none;
    height: 16px;
    width: 18px;
    font-size: 12px;
    padding: 0;
    background-color: transparent;
  }
  .toggle {
    width: 22px;
    height: 22px;
    margin-left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;function y2({zones:e,activeTab:t,xDomain:n,yDomain:o,experiment:s}){const[i,r]=c.exports.useState(!1),l=Be(),a=Y(),u=he(),[p,h]=c.exports.useState(!1),m=c.exports.useRef(),g=c.exports.useMemo(()=>{const D=(A,P,I,O)=>(A=A*1e4,P=P*1e4,I=I*1e4,O=O*1e4,(P>=n[0]*1e4&&A<=n[1]*1e4||A<=n[0]*1e4&&P>=n[1]*1e4)&&(O>=o[0]*1e4&&I<=o[1]*1e4||I<=o[0]*1e4&&O>=o[1]*1e4)),R=A=>A.filter(P=>D(P.x.from,P.x.to,P.y.from,P.y.to));if(e.values)return(i?R(e.values):e.values).map(P=>S(b({},P),{tableMetaInfo:{isConstantlyHighlighted:D(P.x.from,P.x.to,P.y.from,P.y.to)}}))},[e,i,n,o]),x=c.exports.useCallback(()=>{r(!i)},[i]),y=c.exports.useCallback((D=null,R=void 0,A=-1,P=void 0)=>{a({type:cu,payload:{zoneData:D,assignmentData:l,isOnZoneLevel:R,signalIndex:A,axis:P}})},[l,a]),k=c.exports.useCallback(()=>{y()},[y]),v=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:k},{text:"No"}]})},[k,u]),C=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All zones will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{a({type:ps,payload:{assignmentData:l}})}},{text:"No"}]})},[l,a,u]),E=c.exports.useCallback(()=>{h(!p)},[p]),T=c.exports.useCallback(()=>{m.current.saveSetting(),h(!1)},[]),N=c.exports.useCallback(D=>{de.emit("onZonesVisibilityChange",{key:D})},[]);return d(je,{children:w("div",{css:[Dt,b2,p&&M`
              th {
                position: relative;
              }
            `],children:[!p&&w(ot,{counter:e.values?e.values.length:0,onDelete:C,deleteToolTip:"Delete All Zones",onFilter:x,filterToolTip:i?"Show all zones":"Hide zones out of view",filterIsActive:i,counterFiltered:g==null?void 0:g.length,showSettingButton:!0,onSettingClick:E,children:[d(we,{title:"Remove all Assignments",popupPlacement:"right",children:d("button",{className:"remove-assignments-btn",type:"button",onClick:v,disabled:!e.values||e.values.length===0,children:d(Bl,{})})}),d(We,{popupTitle:"show/hide zones",popupPlacement:"right",defaultValue:!0,onClick:()=>N("zones"),children:d("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"z"})}),d(We,{popupTitle:"show/hide signals",popupPlacement:"right",defaultValue:!0,onClick:()=>N("signals"),children:d("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"s"})}),d(We,{popupTitle:"show/hide peaks",popupPlacement:"right",defaultValue:!0,onClick:()=>N("peaks"),children:d("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"p"})})]}),p&&d(In,{onSave:T,onClose:E}),d("div",{className:"inner-container",children:p?d(qE,{ref:m}):d("div",{className:"table-container",children:g&&g.length>0?d(x2,{tableData:g,onUnlink:y,nuclei:t&&t.split(",").length===2?t.split(","):["?","?"],experiment:s}):d(Ut,{})})})]})})}const v2=c.exports.memo(y2),C2={zones:{},info:{}};function k2(){const{displayerKey:e,xDomain:t,yDomain:n,activeTab:o}=$(),{zones:s,info:i}=ve(C2);return d(v2,{xDomain:t,yDomain:n,activeTab:o,displayerKey:e,zones:s,experiment:i.experiment})}const Zo={data:{solvent:{description:"Solvent database",value:E2([...mh,...gh])}}};function ml(e,t){const o=(Zo.data[e]?Zo.data[e].value:[]).filter(r=>r.nucleus===t);return{data:o,getSolvents:()=>S2(o),search:(r=[])=>xh(o,{keywords:r})}}function S2(e){const t=[],n=new Map;for(const o of e)n.has(o.solvent)||(n.set(o.solvent,!0),t.push(o.solvent));return t}function w2(){return Object.keys(Zo.data).map(e=>{const{description:t}=Zo.data[e];return{id:e,name:t}})}function E2(e){return e.map(t=>(t.ranges=t.ranges.map(n=>b({id:U()},n)),t),[])}function A2(e){const t=[];let n=0;for(const r of e){let l=[];const o=r,{ranges:a}=o,u=G(o,["ranges"]);for(const p of a){l.push(p.id||U());const s=p,{signals:h=[]}=s,m=G(s,["signals"]);for(const g of h){const i=g,{js:x=[]}=i,y=G(i,["js"]),k=T2(x),v=S(b(b(b(b({},u),m),y),k),{index:n,id:l,ranges:a});t.push(v)}}n++}return t}function T2(e){if(e&&e.length>0){const{coupling:t,multiplicity:n}=e.reduce((o,{coupling:s,multiplicity:i})=>(o.coupling.push(s.toFixed(1)),o.multiplicity+=i,o),{coupling:[],multiplicity:""});return{multiplicity:n,coupling:t.join(",")}}else return{multiplicity:"s",coupling:""}}const gl={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputContainer:{flex:4,borderRadius:"5px"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"100px"}};function D2(e,t){const n=re(),o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{const l=pt(n.current,"formatting.panels.database");s.current.setValues(l||dd)},[n]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{n.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"database",value:l}}),o.success("database preferences saved successfully")},[o,n]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:gl.container,children:f(ce,{onSubmit:r,ref:s,children:F("div",{style:gl.groupContainer,children:[f(Fe,{label:"Smiles",checkControllerName:"showSmiles",hideFormat:!0}),f(Fe,{label:"Solvent",checkControllerName:"showSolvent",hideFormat:!0}),f(Fe,{label:"Names",checkControllerName:"showNames",hideFormat:!0}),f(Fe,{label:"Range",checkControllerName:"showRange",hideFormat:!0}),f(Fe,{label:"\u03B4 (ppm)",checkControllerName:"showDelta",hideFormat:!0}),f(Fe,{label:"Assignment",checkControllerName:"showAssignment",hideFormat:!0}),f(Fe,{label:"J (Hz)",checkControllerName:"showCoupling",hideFormat:!0}),f(Fe,{label:"Multiplicity",checkControllerName:"showMultiplicity",hideFormat:!0})]})})})}var R2=c.exports.forwardRef(D2);const Ms={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},P2=[{showWhen:"showNames",index:1,Header:"names",accessor:e=>e.names?e.names.join(","):"",enableRowSpan:!0,style:b({width:"100px",minWidth:"100px",maxWidth:"100px"},Ms)},{showWhen:"showRange",index:2,Header:"From - To",accessor:e=>`${e.from.toFixed(2)} - ${e.to.toFixed(2)}`,enableRowSpan:!0},{showWhen:"showDelta",index:3,Header:"\u03B4 (ppm)",accessor:"delta"},{showWhen:"showAssignment",index:4,Header:"Assignment",accessor:"assignment"},{showWhen:"showMultiplicity",index:5,Header:"Multi.",accessor:"multiplicity"},{showWhen:"showCoupling",index:6,Header:"J (Hz)",accessor:"coupling",style:b({width:"60px",minWidth:"60px"},Ms)},{showWhen:"showSolvent",index:7,Header:"Solvent",accessor:"solvent",style:b({width:"80px",minWidth:"80px"},Ms)},{showWhen:"showSmiles",index:8,Header:"Smiles",accessor:"index",enableRowSpan:!0,Cell:({row:e})=>d("div",{className:"smiles-container",style:{width:"100px",display:"block",overflow:"hidden"},children:(e==null?void 0:e.original.smiles)&&d(bh,{height:60,width:60,smiles:e.original.smiles})})}];function I2({data:e,onAdd:t}){const n=re(),o=c.exports.useMemo(()=>[{index:10,Header:"",width:"1%",maxWidth:"24px",minWidth:"24px",id:"add-button",accessor:"index",enableRowSpan:!0,Cell:({row:i})=>d("button",{type:"button",className:"add-button",onClick:()=>t(i),children:d(kn,{})})}],[t]),s=c.exports.useMemo(()=>{const i=pt(n.current,"formatting.panels.database",dd);let r=[...o];for(const a of P2){const l=a,{showWhen:u}=l,p=G(l,["showWhen"]);i[u]&&bs(r,p)}return r.sort((a,u)=>a.index-u.index)},[o,n]);return e&&e.length>0?d(fo,{data:e,columns:s,highlightedSource:ue.DATABASE,groupKey:"index",approxItemHeight:30,enableVirtualScroll:!0}):d(Ut,{})}var N2=c.exports.memo(I2);const M2=M`
  .header {
    height: 30px;
    padding: 2px 0px 2px 5px;
  }
  .input-container {
    width: 100%;
  }
  .search-input {
    width: 100% !important;
    border-radius: 5px;
    border: 0.55px solid gray;
    padding: 0 5px;
    outline: none;
  }
  .smiles-container svg {
    display: block;
    margin: 0 auto;
  }
`,xl={solvent:"",searchKeywords:""};function _2({nucleus:e,selectedTool:t}){const n=Y(),{handleChangeOption:o}=vs(),s=Xe(e),[i,r]=c.exports.useState(!1),l=c.exports.useRef(),[a,u]=c.exports.useState(xl),p=c.exports.useRef(null),[h,m]=c.exports.useState({data:[],databases:[],solvents:[]}),{item:g}=yh("Database"),x=c.exports.useCallback(()=>{r(!i)},[i]),y=c.exports.useCallback(()=>{l.current.saveSetting(),r(!1)},[]),k=c.exports.useCallback(D=>{if(typeof D=="string"||D===-1){const R=String(D);u(A=>S(b({},A),{solvent:R}))}else u(R=>S(b({},R),{searchKeywords:D.target.value}))},[]);c.exports.useEffect(()=>{g!=null&&g.isOpen&&setTimeout(()=>{const D=O2(w2());p.current=ml(D[0].key,e);const R=p.current.data,A=bl(p.current.getSolvents());m({data:R,databases:D,solvents:A})})},[g==null?void 0:g.isOpen,e]),c.exports.useEffect(()=>{const{solvent:D,searchKeywords:R}=a;setTimeout(()=>{if(p.current)if(!D&&!R){const A=p.current.data,P=bl(p.current.getSolvents());m(I=>S(b({},I),{data:A,solvents:P}))}else{const A=[...R.split(",")];D!=="-1"&&A.unshift(`solvent:${D}`);const P=p.current.search(A);m(I=>S(b({},I),{data:P}))}})},[a]),c.exports.useEffect(()=>{function D(R){t===_.databaseRangesSelection.id&&u(A=>{const P=A.searchKeywords?A.searchKeywords.split(","):[],[I,O]=R.range,L=[...P,`delta:${s(I)}..${s(O)}`].join(",");return S(b({},A),{searchKeywords:L})})}return de.on("brushEnd",D),()=>{de.off("brushEnd",D)}},[s,t]);const v=c.exports.useCallback(D=>{p.current=ml(D,e),u(xl)},[e]),C=c.exports.useMemo(()=>A2(h.data),[h.data]),E=c.exports.useCallback(D=>{const{index:R}=D.original,{ranges:A,solvent:P,names:I=[]}=h.data[R];n({type:Eu,payload:{ranges:A,info:{solvent:P,nucleus:e,name:I[0]}}})},[n,e,h.data]),T=c.exports.useCallback(()=>{u(D=>S(b({},D),{searchKeywords:""}))},[]),N=c.exports.useCallback(D=>{const R=D?_.databaseRangesSelection.id:_.zoom.id;o(R)},[o]);return w("div",{css:[Dt,M2,i&&M`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!i&&w(ot,{showSettingButton:!0,onSettingClick:x,canDelete:!1,className:"header",children:[d(We,{defaultValue:t===_.databaseRangesSelection.id,popupTitle:"Filter by select ranges",popupPlacement:"right",onClick:N,children:d(vh,{style:{pointerEvents:"none",fontSize:"12px",transform:"rotate(90deg)"}})},`${t}`),d(Ne,{style:{flex:2},data:h.databases,onChange:v}),d(Ne,{style:{flex:1},data:h.solvents,onChange:k}),d(kt,{value:a.searchKeywords,renderIcon:()=>d(Ch,{}),style:{inputWrapper:{flex:3}},className:"search-input",type:"text",debounceTime:250,placeholder:"Search for parameter...",onChange:k,onClear:T,canClear:!0})]}),i&&d(In,{onSave:y,onClose:x}),d("div",{className:"inner-container",children:i?d(R2,{ref:l}):d(N2,{data:C,onAdd:E})})]})}const F2=c.exports.memo(_2);function L2(){const{activeTab:e,toolOptions:{selectedTool:t}}=$();return e?d(F2,{nucleus:e,selectedTool:t}):d("div",{})}function bl(e){const t=e.map(n=>({key:n,label:n,value:n}),[]);return t.unshift({key:"-1",label:"All",value:"-1"}),t}function O2(e){return e.map(({id:t,name:n})=>({key:t,value:t,label:n}))}const $2={width:"100%",height:"100%",padding:"0px",display:"flex",flexDirection:"column"};function H2({children:e,className:t,style:n,testID:o}){return f("div",{className:t,style:b(b({},$2),n),"data-test-id":o,children:e})}var z2=c.exports.memo(H2);const V2={width:"100%",overflowY:"auto",display:"flex",flexDirection:"column",padding:"5px 0px",color:"gray"};function j2({children:e,className:t,style:n}){const o=c.exports.useMemo(()=>c.exports.Children.map(e,s=>c.exports.cloneElement(s,{style:b({borderBottom:"0.55px solid #d8d8d8"},s.props.style)})),[e]);return f("div",{className:t,style:b(b({},V2),n),children:o})}var B2=c.exports.memo(j2);const X2={width:"100%",display:"flex",alignItems:"flex-start"};function Y2(e){return e.toLowerCase()==="top"?"flex-start":e.toLowerCase()==="bottom"?"flex-end":"center"}function G2({children:e,className:t,style:n,align:o="center",vAlign:s="center",size:i=1,onClick:r=()=>null}){return f("div",{className:t,style:b(S(b({},X2),{alignItems:Y2(s),textAlign:o,flex:i}),n),onClick:r,children:e})}var Xn=c.exports.memo(G2);const W2={width:"100%",display:"flex",padding:"0px 5px",color:"#424242",backgroundColor:"#d8d8d8",borderBottom:"0.55px solid #d8d8d8",fontSize:11,fontWeight:"bold"};function Z2({children:e,className:t,style:n}){return f("div",{className:t,style:b(b({},W2),n),children:e})}var U2=c.exports.memo(Z2);const K2={width:"100%",display:"flex",padding:"5px 0px"};function q2({children:e,className:t,style:n,onClick:o=()=>null}){return f("div",{className:t,style:b(b({},K2),n),onClick:o,children:e})}var Od=c.exports.memo(q2);function J2({filters:e,spectraCounter:t,selectedTool:n,activeFilterID:o}){const s=Y(),i=he(),r=le(),l=c.exports.useRef({index:null}),a=c.exports.useCallback((g,x)=>{(async()=>{const y=await r.showLoading(`${x?"Enable":"Disable"} filter in progress`);setTimeout(()=>{s({type:kc,id:g,checked:x}),y()},0)})()},[r,s]),u=c.exports.useCallback(({id:g,name:x})=>{const y=[{text:"Yes",handler:async()=>{const k=await r.showLoading("Delete filter process in progress");s({type:Sc,payload:{id:g}}),k()}},{text:"No"}];t>1&&y.unshift({text:"Yes, for all spectra",handler:async()=>{const k=await r.showLoading("Delete all spectra filter process in progress");s({type:wc,payload:{filterType:x}}),k()}}),i.showConfirmDialog({message:"Are you sure you want to delete the spectrum?",buttons:y})},[r,s,i,t]),p=c.exports.useCallback(g=>{(async()=>{const x=await r.showLoading("Filter snapshot process in progress");setTimeout(()=>{s({type:Zc,id:g}),x()},0)})()},[r,s]),h=c.exports.useCallback((g,x)=>{const{id:y,name:k}=g;o&&o===y?l.current.index=x:o||(l.current.index=null);const v=["filter-row"];return o===y?v.push("filter-active"):n===k?v.push("filter-current"):l.current.index!=null&&x>l.current.index&&v.push("filter-deactive"),v.join(" ")},[o,n]),m=c.exports.useMemo(()=>e==null?void 0:e.map((g,x)=>F(Od,{className:h(g,x),children:[f(Xn,{align:"center",size:2,onClick:()=>p(g.id),children:g.label}),f(Xn,{align:"left",size:3,children:f("div",{onClick:y=>y.stopPropagation(),children:f(Kl,{data:g.error?g.error:g.value})})}),F(Xn,{align:"center",vAlign:"center",size:1,children:[f(ho,{checked:g.flag,onChange:y=>a(g.id,y.target.checked)}),g.isDeleteAllow&&f("button",{className:"btn",type:"button",onClick:()=>u(g),children:f(St,{})})]})]},g.id)),[p,e,h,u,a]);return f(et,{children:m})}const Q2={filters:[]},eA=c.exports.memo(J2);function tA(){const{toolOptions:{selectedTool:e,data:{activeFilterID:t}}}=$(),{filters:n}=ve(Q2),o=ld().length;return f(eA,{selectedTool:e,filters:n,spectraCounter:o,activeFilterID:t})}const nA=M`
  .btn {
    background-color: transparent;
    border: none;
    height: 25;
    width: 25;
    padding: 5px;
  }
  .filter-row {
    padding: 5px !important;
  }
  .filter-active {
    background-color: #f7f7f7;
    div,
    span,
    .btn {
      color: black !important;
    }

    li {
      background-color: transparent !important;
    }
  }
  .filter-current {
    background-color: #707070;
    div,
    span,
    .btn {
      color: white !important;
    }

    li {
      background-color: transparent !important;
    }
  }

  .filter-deactive {
    opacity: 0.3;
  }
`;function oA({filters:e}){return c.exports.useMemo(()=>e?w(z2,{testID:"filters-table",children:[d(U2,{children:w(Od,{children:[d(Xn,{align:"center",size:1,children:"Label"}),d(Xn,{align:"center",size:2,children:"Properties"})]})}),d(B2,{css:nA,children:d(tA,{})})]}):d(Ut,{}),[e])}const sA={filters:[]},iA=c.exports.memo(oA);function rA(){const{filters:e}=ve(sA);return d(iA,{filters:e})}const lA=M`
  padding: 10px;
  border-top: solid #f2f2f2 1px;

  .row {
    flex: row;
    display: flex;
    padding-bottom: 10px;
  }

  .inner-content {
    flex: 1;
  }

  .custom-label {
    width: 160px;
  }

  .footer-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
  }

  .btn:not([disabled]):hover {
    background-color: #ffffff;
  }
  .btn:hover {
    background-color: #f2f2f2 !important;
  }
  .btn:disabled {
    opacity: 0.5;
  }
  .btn {
    border: none;
    padding: 0 15px;
    background-color: #ffffff;
    border-radius: 5px;
    height: 25px;
  }

  .input {
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    padding: 5px;
    width: 100px;
    margin-right: 10px;
    height: initial !important;
  }
`,aA=ee().shape({frequency:ae().integer().required().label("Frequency"),"1d":ee({"1H":ee({from:ae().integer().required().label("1H ' From ' "),to:ae().integer().required().label("1H ' To ' ")}),"13C":ee().shape({from:ae().integer().required().label("13C ' From ' "),to:ae().integer().required().label("13C ' To ' ")}),lineWidth:ae().integer().min(1).required().label("Line Width")})});function cA({onPredict:e=()=>null}){const t=c.exports.useRef(),n=c.exports.useCallback(()=>{t.current.submitForm()},[]),o=c.exports.useCallback(s=>{(async()=>e(s))()},[e]);return w("div",{css:lA,children:[d("div",{children:w(ce,{ref:t,initialValues:Za,validationSchema:aA,onSubmit:o,children:[d(Td,{}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Frequency : "}),d(ln,{data:Ua,style:{width:290,height:30,margin:0},name:"frequency"})]}),w("div",{className:"row",children:[d(Le,{value:"1H",className:"custom-label"}),d(Q,{title:"From",children:d(W,{name:"1d.1H.from",type:"number"})}),d(Q,{title:"To",style:{label:{padding:"0 10px"}},children:d(W,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row",children:[d(Le,{value:"13C",className:"custom-label"}),d(Q,{title:"From",children:d(W,{name:"1d.13C.from",type:"number"})}),d(Q,{title:"To",style:{label:{padding:"0 10px"}},children:d(W,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Line Width : "}),d(W,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),d("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]})]})}),d("div",{children:d("button",{type:"button",onClick:n,className:"btn",children:"Predict spectrum"})})]})}function uA(){const[e,t]=c.exports.useState(),n=c.exports.useCallback(r=>{t(r)},[]),o=Y(),s=le(),i=c.exports.useCallback(r=>{(async()=>{if(e){o({type:vt,isLoading:!0});const l=await s.showLoading("Predict 1H, 13C, COSY, HSQC, and HMBC in progress");o({type:hs,payload:{mol:e,options:r}}),l()}else s.error("No Molecule selected")})()},[s,o,e]);return f(Dd,{onMoleculeChange:n,actionsOptions:{hidePredict:!0,hideDelete:!0,hideExport:!0},children:f(cA,{onPredict:i})})}const dA=[{title:"Spectra",component:f(vE,{}),hidePreferenceKey:"spectraPanel",mode:null},{title:"Information",component:f(VC,{}),style:{overflow:"hidden"},hidePreferenceKey:"informationPanel",mode:null},{title:"Peaks",component:f(XS,{}),hidePreferenceKey:"peaksPanel",mode:null},{title:"Filters",component:f(rA,{}),hidePreferenceKey:"filtersPanel",mode:null},{title:"Integrals",component:f(Hk,{}),hidePreferenceKey:"integralsPanel",mode:null},{title:"Ranges",component:f(Vw,{}),hidePreferenceKey:"rangesPanel",mode:B.DM_1D},{title:"Multiple Spectra Analysis",component:f(MS,{}),hidePreferenceKey:"multipleSpectraAnalysisPanel",mode:null},{title:"Matrix Generation",component:f(Uk,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Zones",component:f(k2,{}),hidePreferenceKey:"zonesPanel",mode:B.DM_2D},{title:"Summary",component:f(GE,{}),hidePreferenceKey:"summaryPanel",mode:null},{title:"Structures",component:f(Dd,{}),hidePreferenceKey:"structuresPanel",mode:null},{title:"Database",component:f(L2,{}),hidePreferenceKey:"databasePanel",mode:null},{title:"Automatic Assignment",component:f(MC,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Prediction",component:f(uA,{}),hidePreferenceKey:"predictionPanel",mode:null}],yl={null:"Spectra",peakPicking:"Peaks",integral:"Integrals",rangesPicking:"Ranges",zone2D:"Zones",multipleSpectraAnalysis:"Multiple Spectra Analysis"};function pA(){const e=re();return c.exports.useCallback(t=>V(e.current,`display.panels.${t.hidePreferenceKey}`),[e])}function hA({displayerMode:e}){const t=pA(),n=vd(),o=c.exports.useCallback(i=>{const r=t(i);return(r==null?void 0:r.hidden)!==!0&&(r==null?void 0:r.display)===!0&&i.isExperimental===void 0&&(i.mode==null||i.mode===e)||i.isExperimental&&n},[e,t,n]),s=c.exports.useCallback(i=>{const r=t(i);return(r==null?void 0:r.hidden)!==!0&&(r==null?void 0:r.open)},[t]);return f("div",{style:{width:"100%",height:"100%",flex:"1 1 0%"},children:f(mr,{children:dA.map(i=>o(i)&&f(mr.Item,{title:i.title,defaultOpened:s(i),children:i.component},i.title))})})}const fA=c.exports.memo(hA);function mA(){const{displayerMode:e,toolOptions:{selectedTool:t}}=$();return f(fA,{displayerMode:e,selectedTool:t})}function vs(){const e=Y(),t=le(),{open:n}=kh(),[o,s]=c.exports.useState(!1),i=c.exports.useRef({clicks:[]}),r=c.exports.useCallback(h=>{[_.peakPicking.id,_.integral.id,_.zone2D.id,_.exclusionZones.id].includes(h)&&t.show("Press Shift + Left Mouse button to select zone"),Object.keys(yl).includes(h)&&n(yl[h]),e({type:co,payload:{selectedTool:h}})},[t,e,n]),l=c.exports.useCallback(()=>{i.current.clicks.length===0&&e({type:yn,zoomType:Bn.HORIZONTAL});const h=Ko(()=>{i.current.clicks=[]},500);i.current.clicks.push(h),h(),i.current.clicks.length>1&&(Tl(i.current.clicks,m=>m.cancel()),i.current.clicks=[],e({type:yn}))},[e,i]),a=c.exports.useCallback(()=>{e({type:Mi})},[e]),u=c.exports.useCallback(()=>{e({type:Ri,isRealSpectrumVisible:!o}),s(!o)},[e,o]),p=c.exports.useCallback(()=>{e({type:Li})},[e]);return{handleChangeOption:r,handleFullZoomOut:l,changeDisplayViewModeHandler:a,changeSpectrumViewHandler:u,alignSpectrumsVerticallyHandler:p,isRealSpectrumShown:o}}function gA(){const{keysPreferences:e,displayerMode:t,overDisplayer:n,data:o,activeSpectrum:s}=$(),i=Y(),r=le(),l=Bi(),{handleChangeOption:a,handleFullZoomOut:u,alignSpectrumsVerticallyHandler:p,changeDisplayViewModeHandler:h}=vs(),{saveToClipboardHandler:m,saveAsJSONHandler:g,saveAsHandler:x}=yd(),{highlight:y,remove:k}=Rn(),v=Be(),C=c.exports.useMemo(()=>t===B.DM_1D&&o&&o.length>0,[o,t]),E=c.exports.useCallback(async R=>{const{type:A,extra:{id:P}}=R;switch(A){case ue.INTEGRAL:{i({type:as,integralID:P}),k();break}case ue.PEAK:{i({type:rs,data:{id:P}}),k();break}case ue.RANGE:{i({type:ds,payload:{data:{id:P,assignmentData:v}}}),k();break}case ue.ZONE:{i({type:ps,payload:{id:P,assignmentData:v}}),k();break}case ue.EXCLUSION_ZONE:{const I=await r.showLoading("Exclusion filter in progress");i({type:mu,payload:{id:P,spectrumID:R.extra.spectrumID}}),I(),k();break}}},[v,i,k,r]),T=c.exports.useCallback((R,A)=>{o&&o.length>0&&A>=1&&A<=9&&(R.shiftKey?(i({type:Vo,keyCode:A}),r.show(`Configuration Reset, press '${A}' again to reload it.`)):Xt(R)||(e!=null&&e[A]?i({type:$i,keyCode:A}):(i({type:Vo,keyCode:A}),r.show(`Configuration saved, press '${A}' again to reload it.`))))},[r,o,i,e]),N=c.exports.useCallback(R=>{function A(I,O=!0){if(t===B.DM_1D&&!s)throw new Error(`Select a spectrum to proceed with ${I}`);if(O&&t===B.DM_2D)throw new Error(`Switch to 1D Mode and select a spectrum to proceed with ${I}`)}function P(I,O=!0){if(t===B.DM_2D&&!s)throw new Error(`Select a spectrum to proceed with ${I}`);if(O&&t===B.DM_1D)throw new Error(`Switch to 2D Mode and select a spectrum to proceed with ${I}`)}try{if(!R.shiftKey&&!R.metaKey)switch(R.key){case"f":u();break;case"z":case"Escape":a(_.zoom.id);break;case"r":{t===B.DM_2D?(P(_.zone2D.label,!1),a(_.zone2D.id)):(A(_.rangesPicking.label,!1),a(_.rangesPicking.id));break}case"a":{A(_.phaseCorrection.label),a(_.phaseCorrection.id);break}case"b":{A(_.baseLineCorrection.label),a(_.baseLineCorrection.id);break}case"p":{A(_.peakPicking.label),a(_.peakPicking.id);break}case"i":{A(_.integral.label),a(_.integral.id);break}case"e":{A(_.exclusionZones.label),a(_.exclusionZones.id);break}default:}if(!R.shiftKey&&!R.metaKey&&!R.ctrlKey)switch(R.key){case"c":{C&&p();break}case"s":{C&&h();break}default:}if(!R.shiftKey&&(R.metaKey||R.ctrlKey))switch(R.key){case"c":m(),R.preventDefault();break;case"s":g(),R.preventDefault();break;case"o":l(),R.preventDefault();break;default:}if(R.shiftKey&&(R.metaKey||R.ctrlKey))switch(R.key){case"s":case"S":x(),R.preventDefault();break;default:}}catch(I){r.error(I.message)}},[s,r,p,C,h,t,a,u,l,x,g,m]),D=c.exports.useCallback(R=>{if(!["input","textarea"].includes(R.target.localName)&&n){const A=Number(R.code.substr(R.code.length-1))||0;A>0?T(R,A):["Delete","Backspace"].includes(R.key)&&y.sourceData?(R.preventDefault(),E(y.sourceData)):N(R)}},[E,y,T,n,N]);return c.exports.useEffect(()=>(document.addEventListener("keydown",D,!0),()=>document.removeEventListener("keydown",D,!0)),[D]),null}const xA="https://docs.nmrium.org";var bA={version:"git-21ffc501a5fb359fde7a0918c5cb4951425898fc"};function yA({width:e=100,height:t=100}){return F("svg",{style:{width:e,height:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 752.34 221.73",children:[f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M.64,31.7A31.67,31.67,0,0,1,54.72,9.29l0,0A31.66,31.66,0,0,1,64,31.7V190a13.39,13.39,0,0,0,26.77,0V54a31.7,31.7,0,0,1,31.7-31.7V40.58A13.38,13.38,0,0,0,109.13,54V190a31.71,31.71,0,0,1-63.41,0V31.7a13.29,13.29,0,0,0-3.88-9.46l0,0A13.41,13.41,0,0,0,19,31.7V164.82H.64Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M154.21,54v68.17a13.34,13.34,0,0,0,3.89,9.47h0A13.39,13.39,0,0,0,181,122.14V99.32h-.06a31.63,31.63,0,0,1,9.29-22.38l0,0a31.65,31.65,0,0,1,44.8,0l0,0a31.58,31.58,0,0,1,9.3,22.39V118H226V99.32a13.3,13.3,0,0,0-3.89-9.46h0a13.44,13.44,0,0,0-18.93,0l0,0a13.3,13.3,0,0,0-3.83,8.19v24.09a31.7,31.7,0,0,1-54.11,22.42v0a31.66,31.66,0,0,1-9.3-22.4V54Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M729.19,96.34c-8.65,0-14.26,3.17-17.67,8-3.41-5.12-8.78-8-16-8-8.16,0-13.52,3.17-16.32,7.31v-5.6H661V159h18.28V124.62c0-7.19,3.41-11.46,9.5-11.46,5.85,0,8.78,3.9,8.78,10V159h18.27V124.62c0-7.19,3.42-11.46,9.51-11.46,5.85,0,8.77,3.9,8.77,10V159h18.28V121.57C752.34,106.33,743.2,96.34,729.19,96.34Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M629.26,98.05v33.26c0,8.66-4.63,12.56-11.33,12.56-5.85,0-10.6-3.54-10.6-11.09V98.05H589.05v37.41c0,16.45,10.48,25.22,22.79,25.22,8,0,14.13-2.92,17.42-7.43V159h18.28V98.05Z"}),f("rect",{fill:"#2b143e",x:"558.22",y:"98.05",width:"18.28",height:"60.93"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M567.36,92.68a11,11,0,1,0-11-11A11.08,11.08,0,0,0,567.36,92.68Z"}),f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M478.77,159H498V116.57L525.66,159H549.2l-22.3-34.75c5.45-2.13,8.12-4.14,11.48-8.86a31.07,31.07,0,0,0,6.07-18.26V94.62c0-10.61-3.45-15.93-9.28-21.78S520.75,63.09,510,63.09H478.71l.06,95.89Zm33.1-50.27h-6.46v-.06H498V82.19h10.87c4.67,0,9.44,1.38,11.94,3.81a12.84,12.84,0,0,1,3.81,9.2C524.58,102.52,518.92,108.71,511.87,108.71Z"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"372.91 60.8 372.91 158.98 392.16 158.98 392.16 119.23 419.91 157.41 447.61 119.23 447.61 158.98 466.87 158.98 466.87 60.8 419.91 125.22 372.91 60.8"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"283.89 61.04 283.89 159.1 303.14 159.1 303.14 105.85 361.01 160.93 361.01 62.83 341.67 62.83 341.67 116.08 283.89 61.04"})]})}const vA=M`
  display: flex;
  flex-direction: column;
  user-select:
  button:focus {
    outline: none;
  }
  .header {
    height: 34px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    padding: 5px;

    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
      user-select: none;

    }

    button {
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }
  }
  .container {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .center-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    list-style-type: disc;
    margin-left:20px;
    }
  span,li{
    user-select: text;
  }
  span.title {
    font-weight: bold;
    color: #ea580c;
  }
  span.content {
    color: #2b143e;
    font-size: 14px;
    text-align: left;
  }

  img {
    width: 100px;
  }

  a {
    color: #969696;
  }

  a:hover,
  a:focus {
    color: #00bcd4;
  }

  .separator {
    border-bottom: 1px solid gray;
    width: 15px;
    height: 1px;
    margin: 10px 0px;
  }
`;function CA({onClose:e=()=>null}){return w("div",{css:vA,children:[w("div",{className:"header handle",children:[d("span",{children:"About NMRium"}),d(fe,{onClick:e})]}),w("div",{className:"container",children:[w("div",{className:"center-container",children:[d(yA,{width:160,height:50}),"Version ",d(kA,{}),d("span",{className:"separator"}),d("a",{href:"https://git.nmrium.org",target:"_blank",rel:"noreferrer",children:"GitHub ( https://git.nmrium.org )"})]}),d("div",{className:"center-container",children:d("span",{className:"separator"})}),d("span",{className:"content",children:"This project is developed by Zakodium S\xE0rl (Switzerland), the University of Cologne (Germany), Johannes Gutenberg University Mainz (Germany) and Universidad del Valle (Colombia)."}),w("div",{className:"center-container",children:[d("span",{className:"separator"}),d("span",{className:"title",children:"Funding is provided by"}),d("span",{className:"separator"})]}),d("div",{className:"content",children:w("ul",{children:[d("li",{children:"IDNMR grant, which part of the Scientific Library Services and Information Systems (LIS) initiative of the DFG."}),d("li",{children:"Zakodium S\xE0rl (Switzerland)."}),d("li",{children:"Universidad del Valle (Cali, Colombia)."})]})})]})]})}function kA(){const{version:e}=bA;return e==="HEAD"?d(je,{children:"HEAD"}):e.startsWith("git-")?w("a",{href:`https://github.com/cheminfo/nmrium/tree/${e.slice(4)}`,target:"_blank",rel:"noreferrer",children:["git-",e.slice(4,14)]}):d("a",{href:`https://github.com/cheminfo/nmrium/tree/${e}`,target:"_blank",rel:"noreferrer",children:e})}function SA(){return F(et,{children:[f("p",{className:"section-header",children:"Spectra"}),f(Q,{title:"Transparency of Dimmed Spectra [ 0 - 1 ]",children:f(W,{name:"controllers.dimmedSpectraTransparency",checkValue:e=>e>=0&&e<=1,type:"number"})})]})}const wA=[{label:"Spectra selection panel",name:"panels.spectraPanel"},{label:"Spectra information Panel",name:"panels.informationPanel"},{label:"Peaks and peak picking",name:"panels.peaksPanel"},{label:"Integration and integrals",name:"panels.integralsPanel"},{label:"1D ranges peak picking",name:"panels.rangesPanel"},{label:"Chemical structure panel",name:"panels.structuresPanel"},{label:"Filters Panel",name:"panels.filtersPanel"},{label:"2D zones peak picking",name:"panels.zonesPanel"},{label:"Assignment summary Panel",name:"panels.summaryPanel"},{label:"Multiple Spectra Analysis Panel",name:"panels.multipleSpectraAnalysisPanel"},{label:"Database Panel",name:"panels.databasePanel"},{label:"Prediction Panel",name:"panels.predictionPanel"},{label:"Experimental Features",name:"general.experimentalFeatures",hideOpenOption:!0}];function vl(e){return f(mt,{style:{container:{display:"block",margin:"0 auto",width:"fit-content"}},className:"checkbox-element",name:e.name},e.name)}function EA({preferences:e}){const t=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:o})=>o.index+1},{index:1,Header:"Feature",accessor:"label",style:{width:"60%"}},{index:2,Header:"Active",Cell:({row:o})=>f(vl,{name:`display.${o.original.name}.display`})},{index:3,Header:"Open on load",Cell:({row:o})=>o.original.hideOpenOption?f("div",{}):f(vl,{name:`display.${o.original.name}.open`})}],[]),n=c.exports.useMemo(()=>wA.filter(o=>V(e,`${o.name}.hidden`)!==!0),[e]);return f("div",{style:{width:"100%",overflow:"hidden"},children:f(fo,{columns:t,data:n})})}const AA=M`
  .counter-col {
    width: 30px;
  }
  .nucleus-label-col {
    display: flex;
    justify-content: center;
    width: 80px;
  }

  .width-100 {
    width: 100% !important;
    margin: 0px !important;
  }

  .nucleus-format-input-col {
    text-align: center;
    width: 100px;
  }

  th {
    font-size: 11px;
    font-weight: 600;
  }
  .operation-container {
    display: flex;
  }
  .add {
    background-color: transparent;
    border: 0;
    outline: none;
    svg {
      font-szie: 14px;
      fill: green;
    }
  }
`;function TA(){const{values:e,setFieldValue:t}=pe(),n=c.exports.useMemo(()=>V(e,"formatting.nucleus",[]),[e]),o=c.exports.useCallback(i=>{const r=n.splice(0,i);t("formatting.nucleus",r)},[n,t]),s=c.exports.useCallback(()=>{const i={key:U(),name:"",ppm:"0.00",hz:"0.00"},r=[...n,i];t("formatting.nucleus",r)},[n,t]);return w(c.exports.Fragment,{children:[d("p",{className:"section-header",children:"Formating according to Nucleus"}),d("div",{css:AA,children:w("table",{children:[d("thead",{children:w("tr",{children:[d("th",{className:"counter-col",children:"#"}),d("th",{className:"nucleus-label-col",children:"Nucleus "}),d("th",{className:"nucleus-format-input-col",children:"\u03B4 (ppm)"}),d("th",{className:"nucleus-format-input-col",children:"Coupling (Hz)"}),d("th",{className:"nucleus-format-input-col"})]})}),d("tbody",{children:n==null?void 0:n.map((i,r)=>{const l=r+1;return w("tr",{children:[w("td",{className:"counter-col",children:[w("span",{children:[l," - "]})," "]}),d("td",{className:"nucleus-label-col",children:d(W,{name:`formatting.nucleus.${r}.name`,className:"width-100"})}),d("td",{className:"nucleus-format-input-col",children:d(W,{name:`formatting.nucleus.${r}.ppm`,className:"width-100"})}),d("td",{className:"nucleus-format-input-col",children:d(W,{name:`formatting.nucleus.${r}.hz`,className:"width-100"})}),w("td",{className:"operation-container",children:[d(fe,{onClick:()=>o(r),popupTitle:`remove ${i.name}`,popupPlacement:"right"}),n.length===r+1&&d("button",{className:"add",type:"button",onClick:s,children:d(kn,{})})]})]},`${i.key}`)})})]})})]})}const DA=M`
  .container {
    display: flex;
    span {
      padding: 5px !important;
    }
    span {
      flex: 1;
      text-align: left !important;
    }
  }

  .new-container {
    background-color: #f6f6f6;
    display: flex;
    padding: 0.3em;

    input {
      padding: 0.5em;
      color: black;
      outline: none;
      background-color: transparent !important;
    }
  }

  .delete-button:hover {
    color: white;
  }

  .save-button:hover {
    color: green;
  }
  .delete-button,
  .save-button {
    padding: 5px;
  }
`,RA=({item:e,onSave:t,onDelete:n})=>{const[o,s]=c.exports.useState(""),i=c.exports.useCallback(a=>{a.stopPropagation(),s(""),t(o)},[o,t]),r=c.exports.useCallback(a=>{a.stopPropagation(),n(e.key)},[e.key,n]),l=c.exports.useCallback(a=>{s(a.target.value)},[]);return d("div",{css:DA,children:e.key==="new"?w("div",{className:"new-container",children:[d("input",{value:o,placeholder:"Custom workspace",onClick:a=>a.stopPropagation(),onChange:l}),d("button",{type:"button",className:"save-button",onClick:i,disabled:!o,children:"save"})]}):w("div",{className:"container",children:[d("span",{children:e.label}),!He[e.key]&&d("button",{type:"button",className:"delete-button",onClick:r,children:"Delete"})]})})},PA=M`
  .main-content {
    width: 100%;
    flex: 1;
    overflow: auto;
    border: none;
  }

  .tab-content {
    width: 100%;
  }

  .section-header {
    font-size: 13px;
    color: #2ca8ff;
    margin-bottom: 10px;
    border-bottom: 0.55px solid #f9f9f9;
    padding: 6px 2px;
  }

  .label {
    font-size: 12px;
    font-weight: bold;
    margin-right: 10px;
  }

  .input {
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    padding: 5px;
    width: 100px;
    margin-right: 10px;
    height: initial !important;
  }

  .close-bt {
    border: none;
    color: red;
    background-color: transparent;
    outline: none;
    position: absolute;
    right: 10px;
    top: 2px;
    width: 30px;
    height: 30px;
  }

  .checkbox-label {
    min-width: 300px;
    display: inline-block;
  }

  .help-checkbox-element {
    .checkbox-label {
      width: 260px;
    }
  }

  .workspace-container {
    display: flex;
    background-color: #f4f4f4;
    align-items: center;
    cursor: default;
    padding: 0.5em;
    .dropdown {
      padding: 0.4em 1em;
    }
    & .label {
      font-size: 0.8em;
    }
  }
`;function IA({onClose:e}){const[t,n]=c.exports.useState("controllers"),v=re(),{dispatch:o}=v,s=G(v,["dispatch"]),i=le(),r=c.exports.useRef(),l=Gu(),a=c.exports.useMemo(()=>l.concat([{key:"new",label:"Custom workspace"}]),[l]),u=c.exports.useCallback(()=>{r.current.submitForm()},[]),p=c.exports.useCallback(()=>{o({type:"RESET_PREFERENCES"}),i.success("Settings saved successfully"),e==null||e()},[i,o,e]),h=c.exports.useCallback(C=>{o({type:"SET_PREFERENCES",payload:C}),i.success("Settings saved successfully"),e==null||e()},[i,o,e]),m=c.exports.useCallback(C=>{n(C.tabid)},[]),g=c.exports.useCallback(C=>{o({type:"ADD_WORKSPACE",payload:{workspace:C,data:r.current.values}})},[o]),x=c.exports.useCallback(C=>{o({type:"REMOVE_WORKSPACE",payload:{workspace:C}})},[o]),y=c.exports.useCallback(C=>{o({type:"SET_WORKSPACE",payload:{workspace:C.key}})},[o]),k=c.exports.useCallback(C=>d(RA,{item:C,onSave:g,onDelete:x}),[g,x]);return w("div",{css:[ht,PA],children:[w("div",{className:"header handle",children:[d("span",{children:"General Settings"}),d(fe,{onClick:e,className:"close-bt"})]}),w("div",{className:"workspace-container",children:[d("span",{className:"label",children:"Workspace : "}),d(nr,{data:a,renderItem:k,selectedKey:s==null?void 0:s.workspace.current,onSelect:y})]}),d("div",{className:"main-content",children:d(ce,{ref:r,initialValues:s.current,onSubmit:h,children:w(Pn,{position:Qi.LEFT,activeTab:t,onClick:m,children:[d(Ie,{tablabel:"Controllers",tabid:"controllers",children:d("div",{className:"inner-content",children:d(SA,{})})}),d(Ie,{tablabel:"Formatting",tabid:"formatting",children:d("div",{className:"inner-content",children:d(TA,{})})}),d(Ie,{tablabel:"Display",tabid:"display",children:d("div",{className:"inner-content",children:d(EA,{preferences:s.current.display})})})]})},JSON.stringify(s.current))}),w("div",{className:"footer-container",children:[d("button",{type:"button",onClick:u,className:"btn",children:"Save"}),d("button",{type:"button",onClick:p,className:"btn",children:"Reset"})]})]})}const _e={container:{height:"100%",display:"flex",fontSize:"12px"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"}};function NA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useRef(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{e({type:Pc,options:{maxNumberOfPeaks:n.current.value,minMaxRatio:t.current.value,noiseFactor:o.current.value,lookNegative:s.current.checked}})},[e]),r=c.exports.useCallback(()=>{e({type:ze})},[e]);return F("div",{style:_e.container,children:[f(dn,{ref:n,label:"Max Number Of Peaks:",name:"maxNumberOfPeaks",style:{input:_e.input,inputContainer:_e.inputContainer,label:_e.label},defaultValue:50}),f(dn,{ref:o,label:"Noise factor",name:"noiseFactor",style:{input:_e.input,inputContainer:_e.inputContainer,label:_e.label},defaultValue:3}),f(dn,{ref:t,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:_e.input,inputContainer:_e.inputContainer,label:_e.label},defaultValue:.1,step:"0.01"}),F("div",{style:{justifyItems:"baseline",marginRight:"3px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect Negative:"}),f(ho,{name:"lookNegative",ref:s})]}),f("button",{type:"button",style:_e.actionButton,onClick:i,children:"Apply"}),f("button",{type:"button",style:_e.actionButton,onClick:r,children:"Cancel"})]})}const ko={container:{padding:"5px",height:"100%",display:"flex",alignItems:"center"},label:{lineHeight:2,userSelect:"none"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"}};function MA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),[o,s]=c.exports.useState("polynomial"),i=c.exports.useCallback(p=>{let h={};switch(o){case"airpls":h=b({algorithm:n.current.value},p);break;case"polynomial":h=b({algorithm:n.current.value},p);break}e({type:Hc,options:h})},[o,e]),r=c.exports.useCallback(()=>{e({type:ze})},[e]),l=c.exports.useCallback(()=>Object.keys($s).map(p=>({key:p,label:$s[p],value:p})),[]),a=c.exports.useCallback(p=>{s(p)},[]),u=c.exports.useMemo(()=>{switch(o){case"airpls":return{validation:ee().shape({maxIterations:ae().integer().min(1).required(),tolerance:ae().moreThan(0).required()}),initialValue:{maxIterations:100,tolerance:.001}};case"autoPolynomial":case"polynomial":return{validation:ee().shape({degree:ae().integer().min(1).max(6).required()}),initialValue:{degree:3}};default:return{validation:{},initialValue:{}}}},[o]);return F("div",{style:ko.container,children:[f("span",{style:ko.label,children:"Algorithm: "}),f(Ne,{ref:n,data:l(),style:{marginLeft:10,marginRight:10},onChange:a,defaultValue:"polynomial"}),F(ce,{ref:t,onSubmit:i,initialValues:u.initialValue,validationSchema:u.validation,children:[o&&o==="airpls"&&F("div",{style:{display:"flex"},children:[f(Q,{title:"maxIterations:",children:f(W,{type:"number",name:"maxIterations"})}),f(Q,{title:"tolerance:",style:{label:{padding:"0 5px"}},children:f(W,{type:"number",name:"tolerance"})})]}),o&&["autoPolynomial","polynomial"].includes(o)&&f(Q,{title:"degree [ 1 - 6 ]:",children:f(W,{type:"number",name:"degree",min:1,max:6,style:{inputWrapper:{height:"100%"}}})})]},JSON.stringify(u.initialValue)),f("button",{type:"button",style:ko.actionButton,onClick:()=>t.current.submitForm(),children:"Apply"}),f("button",{type:"button",style:ko.actionButton,onClick:r,children:"Cancel"})]})}const Cl={container:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",border:"0.55px solid #c7c7c7",borderRadius:"5px",userSelect:"none",backgroundColor:"#18ce0f14",fontSize:"10px",color:"#00801d",margin:"0px 5px",cursor:"ew-resize"},label:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxWidth:"100%",paddingLeft:"5px",paddingRight:"5px"}};function _A(e,t){const{name:n,value:o=0,onChange:s,label:i,style:r,className:l}=e,a=c.exports.useRef(0),u=c.exports.useRef(o);c.exports.useImperativeHandle(t,()=>({setValue:h=>{u.current=h}}));const p=c.exports.useCallback(h=>{function m(x){let y=x.clientX-a.current;if(a.current=x.clientX,x.buttons===1){const k=y/(x.shiftKey?10:1);u.current=u.current+k,s({value:u.current,name:n})}}function g(){window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",g)}a.current=h.clientX,window.addEventListener("mousemove",m),window.addEventListener("mouseup",g)},[n,s]);return f("div",{style:b(b({},Cl.container),r),className:l,onMouseDown:p,children:f("span",{style:Cl.label,children:i})})}var kl=c.exports.forwardRef(_A);const tn={container:{padding:"5px",height:"100%",display:"flex"},input:{width:"100px"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"},select:{marginLeft:"5px",marginRight:"10px",border:"none",height:"20px"}},Oe={manual:"manual",automatic:"automatic",absolute:"absolute"},FA=[{key:Oe.manual,label:"Manual",value:Oe.manual},{key:Oe.automatic,label:"Automatic",value:Oe.automatic},{key:Oe.absolute,label:"Absolute",value:Oe.absolute}];function LA({data:e,pivot:t,filter:n}){const o=Y(),[s,i]=c.exports.useState({ph0:0,ph1:0}),r=c.exports.useRef({ph0:0,ph1:0}),l=c.exports.useRef(),a=c.exports.useRef(),[u,p]=c.exports.useState(Oe.manual);c.exports.useEffect(()=>{n?(r.current=n.value,i(n.value),l.current.setValue(n.value.ph0),a.current.setValue(n.value.ph1)):(l.current.setValue(r.current.ph0),a.current.setValue(r.current.ph1))},[n]);const h=c.exports.useCallback(()=>{switch(u){case Oe.automatic:{o({type:Dc});break}case Oe.manual:{o({type:Tc,value:s});break}case Oe.absolute:{o({type:Rc});break}}},[o,u,s]),m=c.exports.useCallback((v,C)=>{if(C==="ph1"&&e.re){const E=v.ph0-r.current.ph0,T=v.ph1-r.current.ph1;v.ph0+=E-T*(t==null?void 0:t.index)/e.re.length}o({type:_i,value:v})},[e.re,o,t==null?void 0:t.index]),g=c.exports.useCallback(v=>{const{name:C,value:E}=v.target;if(v.target){const T=S(b({},r.current),{[C]:E});String(E).trim()!=="-"&&m(T,C),r.current=T,i(r.current)}},[m]),x=c.exports.useCallback(v=>{const C=S(b({},r.current),{[v.name]:v.value});m(C,v.name),r.current=C,i(r.current)},[m]),y=c.exports.useCallback(()=>{o({type:ze})},[o]),k=c.exports.useCallback(v=>{p(v)},[]);return F("div",{style:tn.container,children:[f(Ne,{onChange:k,data:FA,defaultValue:Oe.manual,style:tn.select}),u===Oe.manual&&F(et,{children:[f(Q,{title:"PH0 :",style:{wrapper:{marginRight:"5px"}},children:f(kt,{name:"ph0",style:{input:tn.input},onChange:g,value:s.ph0,type:"number",debounceTime:250})}),f(Q,{title:"PH1 :",children:f(kt,{name:"ph1",style:{input:tn.input},onChange:g,value:s.ph1,type:"number",debounceTime:250})}),f(kl,{ref:l,name:"ph0",label:"Change Ph0 By mouse click and drag",style:{width:"20%"},onChange:x}),f(kl,{ref:a,name:"ph1",label:"Change Ph1 By mouse click and drag",style:{width:"20%"},onChange:x})]}),f("button",{type:"button",style:tn.actionButton,onClick:h,children:"Apply"}),f("button",{type:"button",style:tn.actionButton,onClick:y,children:"Cancel"})]})}const OA=c.exports.memo(LA),$A={datum:{},filter:null};function HA(){const{toolOptions:{data:{pivot:e}}}=$(),{data:t,filters:n}=ve($A),o=c.exports.useMemo(()=>n.find(s=>s.name===Ht)||null,[n]);return f(OA,{data:t,filter:o,pivot:e})}const Nt={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px",alignItems:"baseline"},input:{height:"100%",width:"50px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},inputContainer:{flex:2},label:{flex:5},actionButton:{height:"100%",minWidth:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none",padding:"3px"},hint:{lineHeight:2,userSelect:"none",fontSize:"11px"}};function zA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useCallback(()=>{e({type:Ic,options:{peakPicking:{minMaxRatio:Number(n.current.value)||.05,lookNegative:t.current.checked}}})},[e]),s=c.exports.useCallback(()=>{e({type:ze})},[e]);return F("div",{style:Nt.container,children:[F("div",{style:{justifyItems:"baseline",margin:"0 10px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect negative:"}),f(ho,{name:"lookNegative",ref:t})]}),f(dn,{ref:n,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:Nt.input,inputContainer:Nt.inputContainer,label:Nt.label},defaultValue:.05,step:"0.01"}),f("button",{type:"button",style:Nt.actionButton,onClick:o,"data-test-id":"auto-ranges-detection-btn",children:"Auto ranges picking"}),f("button",{type:"button",style:Nt.actionButton,onClick:s,children:"Cancel"}),f("span",{style:Nt.hint,children:"Manual selection using SHIFT + select zone or click on Auto peak picking"})]})}const nn={container:{padding:"5px",height:"100%",display:"flex"},input:{height:"100%",width:"80px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"},label:{lineHeight:2,userSelect:"none"}},VA=tr(8,21);function jA(){const e=Y(),{data:t,activeSpectrum:n}=$(),o=c.exports.useRef(),[s,i]=c.exports.useState(1),r=c.exports.useCallback(()=>{e({type:Ec,value:{zeroFillingSize:Number(o.current.value),lineBroadeningValue:s}})},[e,s]),l=c.exports.useCallback(()=>t&&(n==null?void 0:n.id)?2**Math.round(Math.log2(t[n.index].data.x.length)):"",[n,t]),a=c.exports.useCallback(p=>{if(p.target){const h=p.target.validity.valid?Number(p.target.value):s;i(h)}},[s]),u=c.exports.useCallback(()=>{e({type:ze})},[e]);return F("div",{style:nn.container,children:[f("span",{style:nn.label,children:"Size: "}),f(Ne,{ref:o,data:VA,style:{marginLeft:10,marginRight:10},defaultValue:l()}),f("span",{style:nn.label,children:"Line Broadening: "}),f("input",{name:"line-broadening",style:nn.input,type:"number",defaultValue:s,onInput:a,pattern:"^\\d*(\\.\\d{0,2})?$",step:"any"}),f("button",{type:"button",style:nn.actionButton,onClick:r,children:"Apply"}),f("button",{type:"button",style:nn.actionButton,onClick:u,children:"Cancel"})]})}const on={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"},actionButton:{height:"100%",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"}};function BA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useCallback(()=>{e({type:Nc,options:{thresholdFactor:t.current.value}})},[e]),o=c.exports.useCallback(()=>{e({type:ze})},[e]),s=c.exports.useCallback(i=>{i.target&&e({type:bu,payload:i.target.value})},[e]);return F("div",{style:on.container,children:[f(dn,{ref:t,label:"NoiseFactor",name:"noiseFactor",style:{input:on.input,inputContainer:on.inputContainer,label:on.label},defaultValue:1,onChange:s}),f("button",{type:"button",style:on.actionButton,onClick:n,children:"Auto Zones Picking"}),f("button",{type:"button",style:on.actionButton,onClick:o,children:"Cancel"})]})}function XA(e){const{isFullscreen:t,onMaximize:n=()=>null,selectedOptionPanel:o}=e,s=he(),{current:{display:{general:i}},workspace:r,dispatch:l}=re(),a=Gu(),u=!!((i==null?void 0:i.hideGeneralSettings)&&r.base),p=c.exports.useMemo(()=>{switch(o){case _.zeroFilling.id:return f(jA,{});case _.phaseCorrection.id:return f(HA,{});case _.peakPicking.id:return f(NA,{});case _.rangesPicking.id:return f(zA,{});case _.baseLineCorrection.id:return f(MA,{});case _.zone2D.id:return f(BA,{})}},[o]),h=c.exports.useCallback(()=>{s.show(f(IA,{}),{position:te.TOP_CENTER,enableResizing:!0,width:600,height:400})},[s]),m=c.exports.useCallback(()=>{s.show(f(CA,{}),{isBackgroundBlur:!1,position:te.MIDDLE,width:500,height:480})},[s]),g=c.exports.useCallback(x=>{l({type:"SET_WORKSPACE",payload:{workspace:x.key}})},[l]);return F(Sh,{children:[F("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[f("div",{children:f(Se,{orientation:"horizontal",children:f(Se.Item,{onClick:m,titleOrientation:"horizontal",id:"logo",title:"About NMRium",children:f("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:f(wh,{})})})})}),f("div",{className:"toolOptionsPanel",children:p})]}),F("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[!u&&f(nr,{data:a,selectedKey:r.current,onSelect:g}),f("div",{children:F(Se,{orientation:"horizontal",children:[f(Se.Item,{id:"user-manual",title:"User manual",onClick:()=>window.open(xA,"_blank"),children:f(Eh,{})}),!u&&f(Se.Item,{id:"general-settings",onClick:h,title:"General settings",children:f(Ah,{})}),!t&&f(Se.Item,{id:"full-screen",onClick:n,title:"Full Screen",className:"windowButton",children:f(Th,{})})]})})]})]})}const YA=c.exports.memo(XA);function GA({isFullscreen:e,onMaximize:t}){const{toolOptions:{selectedOptionPanel:n}}=$();return f(YA,{selectedOptionPanel:n,isFullscreen:e,onMaximize:t})}const ge={MOL:"mol",NMRIUM:"nmrium",JSON:"json",DX:"dx",JDX:"jdx",JDF:"jdf",ZIP:"zip",NMREDATA:"nmredata"},WA={ZIP:"504b0304"};function ZA(e){return new Uint8Array(e).slice(0,4).reduce((t,n)=>t+=n.toString(16).padStart(2,"0"),"")}async function UA(e,t={asBuffer:!1}){const n=await fetch(e);return KA(n),t.asBuffer?n.arrayBuffer():n.text()}function KA(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}function an(e){return e.replace(/^.*\./,"").toLowerCase()}function $d(e){return e.substr(0,e.lastIndexOf("."))}function qA(e){const t=e.replace(/^.*[\\/]/,"").split(".");return{name:t[0].toLowerCase(),extension:t[1].toLowerCase()}}function Mt(e,t={}){return Promise.all([].map.call(e,n=>new Promise((o,s)=>{const i=new FileReader;i.onabort=r=>s(r),i.onerror=r=>s(r),i.onload=()=>{if(i.result){const r=i.result,l=$d(n.name),a=an(n.name);o({binary:r,name:l,extension:a})}},t.asBuffer?i.readAsArrayBuffer(n):i.readAsBinaryString(n)})))}async function So(e,t={}){const n=[];for(const o of e)try{const s=await o.async(t.asBuffer?"uint8array":"text"),i=$d(o.name),r=an(o.name);n.push({binary:s,name:i,extension:r})}catch(s){console.error(s)}return n}const JA=M`
  height: 100%;
  background-color: #b5b5b599;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  z-index: 99999;

  p {
    color: white;
    background-color: rgb(104, 104, 104);
    padding: 1.5%;
    border-radius: 30px;
    margin: 0px;
  }

  svg {
    stroke-width: 0;
    font-size: 3rem !important;
    fill: white;
  }
`,QA=M`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
`;function eT(e){const{width:t,height:n}=$(),o=Y(),s=le(),i=c.exports.useCallback(async(g,x)=>{for(let y of x){const k=g.filter(v=>an(v.name)===y);switch(y){case ge.MOL:{const v=await So(k);o({type:Ys,files:v});break}case ge.NMRIUM:case ge.JSON:{const v=await So(k,{asBuffer:!0});if(k.length===1){const C=new TextDecoder("utf8");v[0].binary=C.decode(v[0].binary),o({type:bn,files:v})}else throw new Error("You can add only one json file");break}case ge.JDX:case ge.DX:{const v=await So(k,{asBuffer:!0});o({type:$o,files:v});break}case ge.JDF:{const v=await So(k,{asBuffer:!0});o({type:Gs,files:v});break}}}},[o]),r=c.exports.useCallback(async g=>{const x=[...new Set(g.map(y=>an(y.name)))];for(let y of x){const k=g.filter(v=>an(v.name)===y);try{switch(y){case ge.MOL:{const v=await Mt(k);o({type:Ys,files:v});break}case ge.NMRIUM:case ge.JSON:if(k.length===1){const v=await Mt(k,{asBuffer:!0});if(ZA(v[0].binary)===WA.ZIP){const E=await pn.loadAsync(v[0].binary);await i(Object.values(E.files),[ge.NMRIUM])}else{const E=new TextDecoder("utf8");v[0].binary=E.decode(v[0].binary),o({type:bn,files:v})}}else throw new Error("You can add only one json file");break;case ge.JDX:case ge.DX:{const v=await Mt(k,{asBuffer:!0});o({type:$o,files:v});break}case ge.JDF:{const v=await Mt(k,{asBuffer:!0});o({type:Gs,files:v});break}case ge.ZIP:{const v=await Mt(k,{asBuffer:!0});for(const C of v){const E=await pn.loadAsync(C.binary),T=[...new Set(Object.values(E.files).map(D=>an(D.name)))];T.some(D=>ge[D.toUpperCase()]&&D!==ge.ZIP)?(Object.keys(E.files).some(R=>["2rr","fid","1r"].some(A=>R.endsWith(A)))&&o({type:Ho,files:v}),await i(Object.values(E.files),T)):o({type:Ho,files:v})}break}case ge.NMREDATA:Mt(k,{asBuffer:!0}).then(async v=>{for(const C of v)o({type:Wn,file:C})});break;default:throw new Error("The file extension must be zip, dx, jdx, json, mol, nmredata or nmrium.")}}catch(v){o({type:vt,isLoading:!1}),s.error(v.message)}}},[s,o,i]),l=c.exports.useCallback(g=>{o({type:vt,isLoading:!0}),r(g)},[o,r]),{getRootProps:a,getInputProps:u,isDragActive:p,open:h}=Dh({onDrop:l,noClick:!0}),m=c.exports.useCallback(()=>{h()},[h]);return d(qy,{value:m,children:w("div",S(b({},a()),{role:"none",css:QA,children:[d("input",b({"data-test-id":"dropzone-input"},u())),p&&w("div",{css:JA,style:{width:`${t}px`,height:`${n}px`,marginTop:"30px",marginLeft:"30px"},children:[d(Rh,{}),d("p",{children:"Drop your files here"})]}),e.children]}))})}const tT=[$i,us,Cc,ze,Vo,vt,cc,dc,_c,co,Li,Fi,uc,Ti,ls,Ai,cs,Ri,_i,Mi,yn,ey,Qb,Oi,Zn,Di,zo,hc,jo];function nT(e){return!tT.includes(e)}const oT=M`
  .menu {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 0px;
    margin: 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 99999;
    padding: 2px;
    background-color: white;

    button:hover {
      background-color: #fafafa;
    }
  }

  .menu-cover {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .menu-item {
    background-color: transparent;
    border: none;
    border-bottom: 0.55px solid whitesmoke;
    height: 35px;
    outline: outline;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding: 0 10px;

    svg {
      display: inline-block;
    }

    :focus {
      outline: none !important;
    }
    span {
      font-size: 10px;
      padding: 0px 10px;
    }
  }
`;function sT({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,d("span",{children:t})]})}function iT({items:e,boxBounding:t,onClick:n}){const o=c.exports.useRef(),[s,i]=c.exports.useState({x:t.width,y:t.height});return c.exports.useLayoutEffect(()=>{const r=o.current.getBoundingClientRect();i(l=>{let a=t.height;return r.bottom>window.innerHeight&&(a=t.height*2+(r.bottom-window.innerHeight)),S(b({},l),{y:a})})},[t.height]),d("div",{ref:o,className:"menu",style:{transform:`translate(${s.x}px, -${s.y}px) `},children:e==null?void 0:e.map(r=>d(sT,S(b({},r),{onClick:()=>n(r)}),r.id))})}function Sl({component:e,toolTip:t="",items:n=[],onClick:o=()=>null}){const s=c.exports.useRef(null),[i,r]=c.exports.useState(!1),l=c.exports.useCallback(()=>{r(!1)},[]),a=c.exports.useCallback(()=>{r(h=>!h)},[]),u=c.exports.useCallback(h=>{r(!1),o(h)},[o]),p=c.exports.useCallback(()=>{var h;return(h=s.current)==null?void 0:h.getBoundingClientRect()},[]);return w("div",{style:{height:"auto"},css:oT,children:[d("div",{ref:s,children:d(Se.Item,{id:`menu-${t}`,title:t,active:i,onClick:a,children:e})}),i&&d(iT,{items:n,boxBounding:p(),onClick:u}),i&&d("div",{className:"menu-cover",onClick:l})]})}const rT={info:{},datum:{},ftCounter:0,fidCounter:0};function Hd(){const{data:e,activeSpectrum:t,activeTab:n}=$();return c.exports.useMemo(()=>{if(e){let o={},s={},i=0,r=0;for(const l of e){const{isFid:a,isFt:u,nucleus:p}=l.info;n===At(p)&&(a&&r++,u&&i++,t&&l.id===t.id&&(o=l.info,s=l.data))}return{info:o,datum:s,ftCounter:i,fidCounter:r}}return rT},[t,e,n])}function lT(e){const x=e,{name:t,style:n={},onChange:o=()=>null,className:s="",value:i,placeholder:r=""}=x,l=G(x,["name","style","onChange","className","value","placeholder"]),{values:a,handleChange:u,setFieldValue:p,errors:h}=pe(),m=c.exports.useCallback(y=>{o(y),u(y)},[u,o]);c.exports.useEffect(()=>{i&&p(t,i)},[t,p,i]);const g=c.exports.useMemo(()=>V(h,t),[h,t]);return f("textarea",b({name:t,className:s,placeholder:r,value:i||V(a,t),onChange:m,style:b(b({},n),g&&{borderColor:"red",borderWidth:"1px",outline:"none"})},l))}const aT=M`
  width: 600px;
  height: 300px;

  .inner-content {
    flex: 1;
    border: none;
    overflow: hidden;
    padding: 0px;
  }

  .text-area {
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    padding: 0 0 0 15px;
  }
`,cT=ee({publicationText:un().required()});function uT({onClose:e}){const t=c.exports.useRef(),n=Y(),o=le(),s=c.exports.useCallback(i=>{(async()=>{const r=await o.showLoading("Generate spectrum from publication string in progress");setTimeout(()=>{n({type:wu,payload:i}),r()}),e()})()},[o,n,e]);return w("div",{css:[ht,aT],children:[w("div",{className:"header handle",children:[d("span",{children:"Import from publication string"}),d(fe,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",children:d(ce,{ref:t,initialValues:{publicationText:"1H NMR (CDCl3, 400MHz) \u03B4 10.58 (b, 1H), 7.40 (d, 1H, J = 8.0 Hz), 6.19 (d, 1H, J = 7.6 Hz), 4.88 (s, 1H), 2.17 (s, 3H), 1.02 (s, 9H), 1.01 (s, 9H), 0.89 (s, 9H)"},validationSchema:cT,onSubmit:s,children:d(lT,{name:"publicationText",className:"text-area",placeholder:"Enter publication string"})})}),d("div",{className:"footer-container",children:d("button",{type:"button",onClick:()=>t.current.submitForm(),className:"btn primary",children:"Import"})})]})}const dT=M`
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 5px;
  button:focus {
    outline: none;
  }
  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
    }

    button {
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }
  }
  .container {
    display: flex;
    margin: 30px 5px;
    input,
    button {
      padding: 5px;
      border: 1px solid gray;
      border-radius: 5px;
      height: 36px;
      margin: 2px;
    }
    input {
      flex: 10;
    }
    button {
      flex: 2;
      color: white;
      background-color: gray;
    }
  }
`,pT=["dx","jdx"];function hT({onLoadClick:e,onClose:t,startLoading:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{const i=o.current.value,{name:r,extension:l}=qA(i);pT.includes(l)?(n==null||n(),UA(i,{asBuffer:!0}).then(a=>{e({binary:a,name:r,extension:l,jcampURL:i})})):e(null)},[e,n]);return w("div",{css:dT,children:[w("div",{className:"header handle",children:[d("span",{children:"Load JCAMP Dialog"}),d(fe,{onClick:t})]}),w("div",{className:"container",children:[d("input",{ref:o,type:"text",placeholder:"Enter URL to JCAMP-DX file"}),d("button",{type:"button",onClick:s,children:"Load"})]})]})}const wl=[{id:"importFile",icon:f(Cs,{}),label:"Import from file system (Press Ctrl + O)"},{id:"importJDX",icon:f(Cs,{}),label:"Add JCAMP-DX from URL"},{id:"importPublicationString",icon:f(Cs,{}),label:"Import from publication string"}],fT=[{id:"svg",icon:f(jl,{}),label:"Export as SVG"},{id:"png",icon:f(Vl,{}),label:"Export as PNG"},{id:"json",icon:f(ks,{}),label:"Save data ( Press Ctrl + S )"},{id:"advance_save",icon:f(ks,{}),label:"Save data as  ( Press Ctrl + Shift + S )"},{id:"nmre",icon:f(ks,{}),label:"Save NMRE data"},{id:"copy",icon:f(si,{}),label:"Copy image to Clipboard ( Press Ctrl + C )"}];function mT({info:e,verticalAlign:t,displayerMode:n,ftCounter:o,fidCounter:s,activeSpectrum:i}){const r=Y(),l=le(),a=he(),u=Bi(),p=vd(),h=or(),m=c.exports.useMemo(()=>p?wl:wl.filter(H=>H.id!=="importPublicationString"),[p]),{isRealSpectrumShown:g,changeSpectrumViewHandler:x,changeDisplayViewModeHandler:y,alignSpectrumsVerticallyHandler:k}=vs(),{saveAsSVGHandler:v,saveAsPNGHandler:C,saveAsJSONHandler:E,saveAsNMREHandler:T,saveToClipboardHandler:N,saveAsHandler:D}=yd(),R=c.exports.useCallback(H=>{H?(r({type:$o,files:[H]}),a.close()):l.error("you file must be one of those extensions [ .jdx, dx ] ")},[l,r,a]),A=c.exports.useCallback(()=>{a.close(),r({type:vt,isLoading:!0})},[r,a]),P=c.exports.useCallback(()=>{a.show(f(hT,{onLoadClick:R,onClose:()=>a.close(),startLoading:A}),{})},[R,a,A]),I=c.exports.useCallback(()=>{a.show(f(uT,{onClose:()=>a.close()}),{})},[a]),O=c.exports.useCallback(({id:H})=>{switch(H){case"importFile":u();break;case"importJDX":P();break;case"importPublicationString":I();break;default:return}},[u,P,I]),L=c.exports.useCallback(({id:H})=>{switch(H){case"svg":v();break;case"png":C();break;case"json":E();break;case"advance_save":D();break;case"nmre":T();break;case"copy":N();break}},[v,C,E,D,T,N]);return F(c.exports.Fragment,{children:[h("import")&&f(Sl,{component:f(Ph,{}),toolTip:"Import",onClick:H=>(O(H),null),items:m}),h("exportAs")&&f(Sl,{component:f(Jo,{}),toolTip:"Export As",onClick:H=>(L(H),null),items:fT}),n===B.DM_1D&&h("spectraStackAlignments")&&o>1&&((e==null?void 0:e.isFt)||!i)&&f(Se.Item,{id:"spectra-alignment",className:"cheminfo",title:"Spectra alignment ( Press s )",onClick:y,children:t.align==="stack"?f(Ih,{}):f(Nh,{})}),n===B.DM_1D&&h("realImaginary")&&e.isComplex&&f(Se.Item,{id:"display",title:g?"Display Real ":"Display Imaginary",onClick:x,className:"cheminfo",children:f(Mh,{})}),n===B.DM_1D&&h("spectraCenterAlignments")&&(o>0||s>0)&&f(Se.Item,{id:"baseline-position",title:t.align==="bottom"?"Baseline  Center ( Press c )":"Baseline  Bottom ( Press c )",onClick:k,className:"cheminfo",children:f("div",{style:{fontSize:24},children:t.align==="bottom"?f(_h,{}):f(Fh,{})})})]})}const gT=c.exports.memo(mT);function xT(){const{activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o}=$(),{info:s,fidCounter:i,ftCounter:r}=Hd();return f(gT,{info:s,fidCounter:i,ftCounter:r,activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o})}function Te(e){const{children:t,value:n=null,isActive:o=!1,onChange:s=()=>null,isVisible:i=!0,id:r,title:l}=e,[a,u]=c.exports.useState(e.isActive),p=c.exports.useCallback(()=>{const h=!a;u(h),s(h?n:null)},[a,s,n]);return c.exports.useEffect(()=>{u(o)},[o]),i?f(Se.Item,{onClick:p,title:l,id:r,active:a,children:t}):null}function bT({children:e,value:t,onChange:n=()=>null}){const[o,s]=c.exports.useState([]),i=c.exports.useCallback(l=>{const u=[...o].map(p=>({value:p.value,isActive:p.value===l}));s(u),n(l)},[n,o]),r=c.exports.useMemo(()=>{let l=0;return c.exports.Children.map(e,a=>{var u;if(a)if(a.type===Te){const p=c.exports.cloneElement(a,{onChange:i,isActive:(u=o[l])==null?void 0:u.isActive,index:l});return l++,p}else return c.exports.cloneElement(a)})},[e,i,o]);return c.exports.useEffect(()=>{const l=c.exports.Children.map(e,a=>{if(a&&a.type===Te)return{value:a.props.value,isActive:a.props.value===t}});s(l)},[e,t]),f(et,{children:r})}function yT({defaultValue:e,activeSpectrum:t,info:n,datum:o,displayerMode:s,ftCounter:i,mode:r}){const[l,a]=c.exports.useState(""),u=or(),p=Y(),{handleChangeOption:h,handleFullZoomOut:m}=vs(),g=c.exports.useCallback(y=>{a(y),h(y)},[h]);c.exports.useEffect(()=>{a(e)},[e]);const x=c.exports.useCallback(()=>{p({type:Ac,value:""}),p({type:dc,selectedFilter:null})},[p]);return F(et,{children:[F(bT,{value:l,onChange:g,children:[u("zoomTool")&&f(Te,{value:_.zoom.id,id:"zoomIn",title:`${_.zoom.label} ( Press z )`,children:f("div",{style:{fontSize:14},children:f(Qn,{})})},_.zoom.id),u("zoomOutTool")&&f(Se.Item,{id:"zoom-out",onClick:m,title:"Horizontal zoom out ( Press f ), Horizontal and Vertical zoom out, double click ( Press ff )",children:f("div",{style:{fontSize:14},children:f(Lh,{})})}),s===B.DM_1D&&u("peakTool")&&f(Te,{value:_.peakPicking.id,title:`${_.peakPicking.label} ( Press p )`,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"peakPicking",children:f(Oh,{})},_.peakPicking.id),s===B.DM_1D&&u("integralTool")&&f(Te,{value:_.integral.id,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"integralPicking",title:`${_.integral.label} ( Press i )`,children:f(Xl,{})},_.integral.id),s===B.DM_2D&&u("zonePickingTool")&&f(Te,{value:_.zone2D.id,id:"zone2d",isVisible:!!(t&&!(n!=null&&n.isFid)),title:`${_.zone2D.label} ( Press r )`,children:f($h,{})},_.zone2D.id),s===B.DM_2D&&u("slicingTool")&&f(Te,{value:_.slicingTool.id,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"slic",title:`${_.slicingTool.label}`,children:f("p",{children:"Slic"})},_.slicingTool.id),s===B.DM_1D&&u("autoRangesTool")&&f(Te,{value:_.rangesPicking.id,isVisible:!!(t&&!(n!=null&&n.isFid)),title:`${_.rangesPicking.label} ( Press r )`,id:"ranges-pick",children:f(Wl,{})},_.rangesPicking.id),s===B.DM_1D&&u("multipleSpectraAnalysisTool")&&i>1&&r==="RTL"&&f(Te,{value:_.multipleSpectraAnalysis.id,id:"multipleSpectraAnalysis",title:_.multipleSpectraAnalysis.label,children:f(gr,{})},_.multipleSpectraAnalysis.id),s===B.DM_1D&&u("zeroFillingTool")&&f(Te,{value:_.zeroFilling.id,isVisible:di({info:n}),id:"zeroFilling",title:_.zeroFilling.label,children:f(Hh,{})},_.zeroFilling.id),s===B.DM_1D&&u("phaseCorrectionTool")&&f(Te,{value:_.phaseCorrection.id,id:"phaseCorrection",title:`${_.phaseCorrection.label} ( Press a )`,isVisible:!!(t&&n&&ci({info:n})&&o.im),children:f(zh,{})},_.phaseCorrection.id),s===B.DM_1D&&u("baseLineCorrectionTool")&&f(Te,{value:_.baseLineCorrection.id,id:"baseLineCorrection",title:`${_.baseLineCorrection.label} ( Press b )`,isVisible:!!(t&&n&&li({info:n})),children:f(Vh,{})},_.baseLineCorrection.id),s===B.DM_1D&&u("exclusionZonesTool")&&!(n!=null&&n.isFid)&&i>0&&f(Te,{value:_.exclusionZones.id,title:`${_.exclusionZones.label} ( Press e )`,id:"exclusionZones",children:f("div",{style:{fontSize:18},children:f(gr,{})})},_.exclusionZones.id)]}),s===B.DM_1D&&u("FFTTool")&&n&&ai({info:n})&&f(Se.Item,{id:"fft-filter",className:"cheminfo",title:"FFT Filter",onClick:x,children:f(jh,{})})]})}const vT=c.exports.memo(yT);function CT({defaultValue:e=_.zoom.id}){const{activeSpectrum:t,displayerMode:n,activeTab:o,mode:s}=$(),i=Hd();return f(vT,S(b({},i),{activeSpectrum:t,displayerMode:n,activeTab:o,defaultValue:e,mode:s}))}function kT({selectedTool:e}){return f("div",{style:{fontSize:18},children:F(Se,{orientation:"vertical",children:[f(CT,{defaultValue:e}),f(xT,{})]})})}const ST=c.exports.memo(kT);function wT(){const{toolOptions:{selectedTool:e}}=$();return f(ST,{selectedTool:e})}const ET=M`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
  margin-left: -1px;
`,AT=M`
  background-color: white;
  width: 100%;
  display: block;
  height: 100%;
  font-size: 14px;

  div:focus {
    outline: none !important;
  }

  button {
    cursor: pointer;
    color: black;
    &:disabled {
      cursor: default;
    }
  }

  button:active,
  button:hover,
  button:focus,
  [type='button']:focus,
  button {
    outline: none !important;
  }
  * {
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .SplitPane {
    height: 100%;
  }

  .Resizer.vertical:after {
    content: '\\22EE';
    top: 50%;
    color: black;
    position: absolute;
    font-size: 14px;
  }

  .Resizer.vertical {
    padding: 2px;
  }

  .Resizer.vertical:hover {
    background-color: #dfdfdf !important;
    border-left: 0.55px #bbbbbb;
 solid;
    border-right: 0.55px #bbbbbb solid;
  }
`,TT={},DT={spectra:[]};function RT(e){return d(Xh,{style:{width:"100%"},children:d(Bh,{FallbackComponent:lC,children:d(PT,b({},e))})})}function PT({data:e=DT,workspace:t,preferences:n=TT,getSpinner:o=$u,onDataChange:s,emptyText:i}){const r=c.exports.useRef(null),l=c.exports.useRef(null),[a,u]=Yh(!1),p=Gh(r,a,{onClose:()=>{u(!1)}}),[h,m]=c.exports.useReducer(Wy,Mu,Xy),[g,x]=c.exports.useReducer(k0,Bu,h0),{displayerMode:y,data:k}=h;c.exports.useEffect(()=>{nT(h.actionType)&&(s==null||s(h))},[s,h]);const v=c.exports.useMemo(()=>Yy(m),[]);c.exports.useEffect(()=>{var T;(T=r.current)==null||T.focus()},[p]),c.exports.useEffect(()=>{x({type:"INIT_PREFERENCES",payload:{display:n,workspace:t,dispatch:x}})},[n,t]),c.exports.useEffect(()=>{v({type:vt,isLoading:!0}),e&&v({type:wi,payload:e})},[e,v]);const C=c.exports.useCallback(T=>{Xt(T)||T.preventDefault()},[]),E=c.exports.useRef(null);return c.exports.useEffect(()=>{const T=E.current;if(!T)return;function N(){v({type:jo,payload:!0})}function D(){v({type:jo,payload:!1})}return T.addEventListener("mouseenter",N),T.addEventListener("mouseleave",D),()=>{T.removeEventListener("mouseenter",N),T.removeEventListener("mouseleave",D)}},[v]),d(Iv,{value:{rootRef:r.current,elementsWrapperRef:l.current},children:d(S0,{value:g,children:d("div",{ref:E,style:{height:"100%",position:"relative"},children:d(wv,{wrapperRef:l.current,children:d(Uy,{value:v,children:d(Zy,{value:h,children:d(Pv,{wrapperRef:l.current,children:d(B0,{children:d(V0,{spectraData:k,children:d(t0,{value:o,children:d("div",{className:"nmrium-container",ref:r,css:AT,onContextMenu:C,style:{height:"100%",width:"100%"},children:d(eT,{children:w("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"white",width:"100%"},children:[d(GA,{isFullscreen:p,onMaximize:u}),w("div",{style:{display:"flex",flexDirection:"row",height:"100%"},children:[d(wT,{}),w(Wh,{initialSeparation:"590px",orientation:"horizontal",sideSeparation:"end",children:[w("div",{css:ET,children:[d(gA,{}),d("div",{"data-test-id":"viewer",style:{width:"100%",height:"100%"},children:y===B.DM_1D?d(rC,{emptyText:i}):d(uv,{emptyText:i})})]}),d(mA,{})]}),d("div",{ref:l,id:"main-wrapper",style:{position:"absolute",pointerEvents:"none",zIndex:0,left:0,right:0,top:0,bottom:0}},String(p))]})]})})})})})})})})})})})})})}var IT=c.exports.memo(RT);function NT(e,t){let n=[];function o(s){Object.keys(s).forEach(i=>{t===i&&n.push({[i]:s[i]}),Array.isArray(s[i])?s[i].forEach(r=>{o(r)}):typeof s[i]=="object"&&s[i]!==null&&o(s[i])})}return o(e),n}function MT(e){const[t,n]=c.exports.useState(),[o,s]=c.exports.useState("");c.exports.useEffect(()=>{const r=NT(e,o);n(o?r:e)},[e,o]);const i=c.exports.useCallback(Ko(r=>{const l=r.target.value;s(l)},500),[e]);return F("div",{style:{display:"flex",flexDirection:"column",paddingTop:"10px"},children:[f("input",{style:{border:"1px solid gray",padding:"5px"},type:"text",placeholder:"Search for key...",onChange:i}),f(Kl,{data:t}),";"]})}function zd(){const[e,t]=c.exports.useState(),[n,o]=c.exports.useState({}),s=c.exports.useCallback(r=>{(async()=>{try{const l=await Mt(r,{asBuffer:!0}),a=new TextDecoder("utf8"),u=JSON.parse(a.decode(l[0].binary));t(u)}catch{alert("Invalid JSON file")}})()},[]),i=c.exports.useCallback(r=>{o(r)},[]);return F("div",{style:{display:"flex",height:"100vh",padding:"20px"},children:[f("div",{style:{flex:9},children:f(IT,{data:e,onDataChange:i})}),F("div",{style:{display:"flex",flexDirection:"column",padding:"10px",flex:3},children:[f("div",{style:{flex:3},children:f(Zh,{onDrop:s,color:"gray"})}),f("div",{style:{flex:9},children:f(MT,{data:n})})]})]})}var _T=Object.freeze(Object.defineProperty({__proto__:null,default:zd},Symbol.toStringTag,{value:"Module"}));const FT=c.exports.lazy(()=>it(()=>import("./TestHighlight.3bc36655.js"),["assets/TestHighlight.3bc36655.js","assets/vendor.6bb543ed.js"]));function LT(){return f(c.exports.Suspense,{fallback:null,children:F(Uo,{children:[f(gt,{path:"/test/highlight",component:FT}),f(gt,{path:"/",component:zd}),f(gt,{render:()=>f("div",{children:"Page not found"})})]})})}Uh.render(f(Kh,{children:F(Uo,{children:[f(gt,{path:"/test",component:LT}),f(gt,{path:"/",render:e=>f(Cf,b({},e))})]})}),document.getElementById("root"));export{B0 as H,IT as N,xs as c,ie as u};
//# sourceMappingURL=index.ebb1c900.js.map
