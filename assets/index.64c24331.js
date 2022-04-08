var Xd=Object.defineProperty,Yd=Object.defineProperties;var Gd=Object.getOwnPropertyDescriptors;var ho=Object.getOwnPropertySymbols;var lr=Object.prototype.hasOwnProperty,ar=Object.prototype.propertyIsEnumerable;var rr=(e,t,n)=>t in e?Xd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))lr.call(t,n)&&rr(e,n,t[n]);if(ho)for(var n of ho(t))ar.call(t,n)&&rr(e,n,t[n]);return e},S=(e,t)=>Yd(e,Gd(t));var cr=e=>typeof e=="symbol"?e:e+"",G=(e,t)=>{var n={};for(var o in e)lr.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&ho)for(var o of ho(e))t.indexOf(o)<0&&ar.call(e,o)&&(n[o]=e[o]);return n};import{r as c,M as Tl,S as Wd,c as N,w as Zd,j as w,a as d,F as Ud,E as Kd,b as Uo,R as xt,d as f,e as _,x as Un,f as Dl,g as Ko,m as Il,h as qd,i as Jd,k as _s,l as Qd,n as ep,o as To,p as ur,z as tp,q as np,s as Pl,t as dr,u as ln,v as bn,y as Rl,A as op,B as We,C as sp,D as ip,G as rp,H as lp,I as Ml,J as ap,K as cp,L as up,N as Fs,O as dp,P as pp,Q as Bt,T as hp,U as fp,V as mp,W as gp,X as xp,Y as bp,Z as pr,_ as un,$ as yp,a0 as vp,a1 as Je,a2 as bt,a3 as oe,a4 as ze,a5 as Cp,a6 as Kn,a7 as Nl,a8 as hr,a9 as _l,aa as kp,ab as V,ac as Qs,ad as Sp,ae as Fl,af as Ls,ag as ei,ah as Do,ai as Ve,aj as wp,ak as Ep,al as Ll,am as ti,an as ni,ao as et,ap as Ap,aq as qo,ar as Ol,as as oi,at as Tp,au as Dp,av as dn,aw as qe,ax as fr,ay as $e,az as Ip,aA as Pp,aB as Rp,aC as Mp,aD as he,aE as Np,aF as mr,aG as pn,aH as _p,aI as Fp,aJ as wt,aK as Lp,aL as Op,aM as $p,aN as Hn,aO as $l,aP as Hp,aQ as zp,aR as Vp,aS as ee,aT as ae,aU as jp,aV as Hl,aW as zl,aX as Vl,aY as Bp,aZ as Xp,a_ as Yp,a$ as an,b0 as Pn,b1 as Jo,b2 as Gp,b3 as yn,b4 as jl,b5 as si,b6 as Bl,b7 as Xl,b8 as Wp,b9 as Zp,ba as Up,bb as Kp,bc as qp,bd as Yl,be as Jp,bf as Qp,bg as Gl,bh as eh,bi as Os,bj as th,bk as qn,bl as Wl,bm as Qo,bn as Zl,bo as nh,bp as wo,bq as oh,br as sh,bs as ih,bt as Ul,bu as rh,bv as lh,bw as ah,bx as Kl,by as ch,bz as Io,bA as uh,bB as Re,bC as Rn,bD as es,bE as ql,bF as dh,bG as ph,bH as rt,bI as hh,bJ as fh,bK as mh,bL as gh,bM as xh,bN as bh,bO as yh,bP as vh,bQ as Ch,bR as kh,bS as Sh,bT as Jl,bU as gr,bV as wh,bW as Eh,bX as we,bY as Ah,bZ as Th,b_ as Dh,b$ as Ih,c0 as Ph,c1 as Rh,c2 as Mh,c3 as Nh,c4 as _h,c5 as Fh,c6 as Lh,c7 as Oh,c8 as Cs,c9 as ks,ca as $h,cb as Hh,cc as zh,cd as xr,ce as Vh,cf as jh,cg as Bh,ch as Xh,ci as Yh,cj as Gh,ck as Wh,cl as Zh,cm as Uh,cn as Kh,co as qh,cp as Jh}from"./vendor.6bb543ed.js";const Qh=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Qh();var br=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/ethylbenzene/full.json",title:"FULL ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Workspaces",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"},{file:"./exercises/cytisine/hsqc_hmbc.json",title:"Exercise 3",view:"Exercise"},{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"},{title:"Prediction",view:"Prediction"}]},{title:"Test",view:"Test"}];function ef(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t.push(Ql(n.groupName,[n],[])):t.push(c.exports.createElement(Tl,b({key:n.title},n),n.title));return t}function Ql(e,t=[],n=[],o=0){let s=n,i=[];o!==-1&&s[o]&&(s[o]=c.exports.cloneElement(s[o],{},i));for(const r in t)if(t[r].children&&Array.isArray(t[r].children)){const l=c.exports.createElement(Wd,{key:r+e,title:t[r].groupName});return s.push(l),Ql(r+e,t[r].children,s,0)}else i.push(c.exports.createElement(Tl,b({key:r+e},t[r]),t[r].title));return s}function tf(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t=t.concat(ea([n],[])):t.push(n);return t}function ea(e=[],t=[]){let n=t;for(const o of e){if(o.children&&Array.isArray(o.children))return ea(o.children,n);t.push(o)}return n}function Ft(e=""){const t=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(e);let n="";if(t){const o=t[1].split("/");n=o.length>2?o[o.length-2]+o[o.length-1]:o[o.length-1]}return n+e.replace(/\.|\s|\//g,"")}const nf=N`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,of=N`
  width: 260px;
`,sf=N`
  width: 3%;
`,rf=N`
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
`,lf=N`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,af=N`
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
`,cf=N`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,uf=N`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;function df(e){const t=c.exports.useMemo(()=>ef(e.routes),[e.routes]),n=e.menuIsClosed?"none":"block";return w("div",{css:N(nf,e.menuIsClosed?sf:of),children:[w("div",{css:lf,children:[d("div",{style:{display:n,padding:"0.5rem 0.7rem"},children:d("a",{css:N(af,cf),children:"NMRium"})}),d("button",{type:"button",css:rf,onClick:e.onMenuToggle,children:d(Ud,{})})]}),d("div",{css:uf,style:{display:n},children:d(Kd,{onClick:o=>{e.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${(o.item.props.view||"View")+Ft(o.item.props.file)}`)},mode:"inline",children:t})})]})}var pf=Zd(c.exports.memo(df));const hf="modulepreload",yr={},ff="./",it=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${ff}${o}`,o in yr)return;yr[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":hf,s||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),s)return new Promise((l,a)=>{r.addEventListener("load",l),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},ii={Exam:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Exam.980dba6f.js"),["assets/Exam.980dba6f.js","assets/vendor.6bb543ed.js"]))),Exercise:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Exercise.c3b213d7.js"),["assets/Exercise.c3b213d7.js","assets/vendor.6bb543ed.js"]))),SingleView:c.exports.memo(c.exports.lazy(()=>it(()=>import("./SingleView.f2f1a1cd.js"),["assets/SingleView.f2f1a1cd.js","assets/vendor.6bb543ed.js"]))),Test:c.exports.memo(c.exports.lazy(()=>it(()=>Promise.resolve().then(function(){return zT}),void 0))),View:c.exports.memo(c.exports.lazy(()=>it(()=>import("./View.9d26de2e.js"),["assets/View.9d26de2e.js","assets/vendor.6bb543ed.js"]))),TwoInstances:c.exports.memo(c.exports.lazy(()=>it(()=>import("./TwoInstances.5bc44b08.js"),["assets/TwoInstances.5bc44b08.js","assets/vendor.6bb543ed.js"]))),Teaching:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Teaching.e876a843.js"),["assets/Teaching.e876a843.js","assets/vendor.6bb543ed.js"]))),Prediction:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Prediction.8391f4ba.js"),["assets/Prediction.8391f4ba.js","assets/View.9d26de2e.js","assets/vendor.6bb543ed.js"])))},mf=N`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,gf=N`
  width: calc(100% - 260px);
`,xf=N`
  width: 98%;
  margin-left: 20px !important;
`;function bf(e){const{routes:t=[],baseURL:n}=e,o=c.exports.useMemo(()=>tf(t),[t]),[s,i]=c.exports.useState(!1),r=c.exports.useCallback(()=>i(!s),[s]);return w("div",{style:{position:"relative",top:0,height:"100vh"},children:[d(pf,S(b({},e),{routes:t,menuIsClosed:s,onMenuToggle:r})),d("div",{css:N(mf,s?xf:gf),children:d(c.exports.StrictMode,{children:d(c.exports.Suspense,{fallback:d("div",{children:"Loading..."}),children:w(Uo,{children:[o.map(l=>d(xt,{path:`/SamplesDashboard/:id/${(l.view||"View")+Ft(l.file)}`,render:a=>d(yf,S(b({},a),{prop:l,baseURL:n}))},Ft(l.file))),o.length>0&&d(xt,{path:"/",render:()=>{const l=o[0],a=l.view?l.view:"View",u=ii[a];return d(u,b({},l[0]))}},Ft(o[0].file))]})})})})]})}function yf(e){const{match:{params:{id:t}},prop:n,baseURL:o}=e,s=n.view?n.view:"View",i=ii[s];return d(i,S(b({},n),{id:Ft(n.file),baseURL:o}),t)}function vf(e){return f("div",{style:{position:"relative",top:0,height:"100vh"},children:f("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"},children:f(c.exports.Suspense,{fallback:f("div",{children:"Loading..."}),children:f(Uo,{children:f(xt,{path:"/",render:t=>{const{match:{params:{id:n}}}=t,o=e.view?e.view:"SingleView",s=ii[o];return f(s,S(b({},e),{id:Ft(e.patrh)}),n)}},Ft(e.path))})})})})}const Pt={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function Cf(e){const t=await fetch(e);try{return kf(t),await t.json()}catch(n){return console.error(n),null}}function kf(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}const Sf=e=>{const[t,n]=c.exports.useState({isLoaded:!1,status:200,routes:[]}),[o,s]=c.exports.useState(""),i=c.exports.useCallback(()=>{n({isLoaded:!0,status:200,routes:br})},[]),r=(a="")=>a.substring(a.lastIndexOf(".")+1),l=window.location.href;return c.exports.useEffect(()=>{const a=new URL(l).searchParams;if(a.has("sampleURL")){const u=a.get("sampleURL");if(!u)return;switch(r(u).toLowerCase()){case"json":{s("multi"),Cf(u).then(h=>{if(h){const m=u.replace(/^(?<url>.*[\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),g=JSON.parse(JSON.stringify(h).replace(/\.\/+?/g,m));n({isLoaded:!0,status:200,routes:g,baseURL:m})}else n({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{s("single"),n({isLoaded:!0,status:200,path:u});break}}}else s("multi"),n({isLoaded:!0,status:200,routes:br,baseURL:"./"})},[l]),t.isLoaded?o&&o==="single"?f(vf,S(b({},e),{path:t.path})):f(bf,S(b({},e),{routes:t.routes,baseURL:t.baseURL})):f("div",{style:Pt.bodyContainer,children:f("div",{style:b(b({},Pt.container),t.status===200?Pt.normal:Pt.error),children:t.status===200?_("div",{children:[f("p",{style:Pt.normalHeader,children:"Please wait"}),f("p",{children:"We will redirect you in a minute"})]}):_("div",{children:[f("p",{style:Pt.errorHeader,children:"404"}),f("p",{children:"Resource not found."}),f("button",{style:Pt.loadButton,type:"button",onClick:i,children:"Load local samples"})]})})})};function Xt(e){const t=["Alt","AltGraph","CapsLock","Control","Meta","NumLocK","ScrollLock","Shift","OS"];for(const n of t)if(e.getModifierState(n))return!0;return!1}const Po=2048;function wf(e,t,n,o,s){const{fromIndex:i,toIndex:r}=Un(e,{from:n,to:o});if(r-i<=Po){const l={x:e.subarray(i,r),y:t.subarray(i,r)},a=Dl(l,{frequency:s,takeBestPartMultiplet:!0,symmetrizeEachStep:!0});return a&&a.chemShift===void 0?void 0:{multiplicity:a.js.map(u=>u.multiplicity).join(""),kind:"signal",delta:a.chemShift,js:a.js}}else throw new Error(`length of signal should not exceed ${Po} points`)}const ta={step:"initial",brush:{start:null,end:null},startX:0,endX:0,startY:0,endY:0},Et=c.exports.createContext(ta);function na({children:e,className:t,style:n,onBrush:o=()=>null,onZoom:s=()=>null,onDoubleClick:i=()=>null,onClick:r=()=>null,noPropagation:l}){const[a,u]=c.exports.useReducer(Ef,ta),[p,h]=c.exports.useState(0),m=c.exports.useRef([]),g=c.exports.useCallback(C=>(C.button===0&&(l&&C.stopPropagation(),u({type:"DOWN",shiftKey:C.shiftKey,altKey:C.altKey,screenX:C.screenX,screenY:C.screenY,clientX:C.clientX,clientY:C.clientY,boundingRect:C.currentTarget.getBoundingClientRect()}),h(C.timeStamp)),!1),[l]),x=c.exports.useCallback(C=>{C.persist();const E=C.timeStamp,T=C.currentTarget.getBoundingClientRect(),M=C.clientX-T.x,D=C.clientY-T.y,I=Ko(()=>{E-p<=150&&m.current.length===1&&r(S(b({},C),{x:M,y:D})),m.current=[]},200);m.current.push(I),I(),m.current.length>1&&(Il(m.current,A=>A.cancel()),m.current=[],i(S(b({},C),{x:M,y:D})))},[p,r,i]),y=c.exports.useCallback(C=>{const E=C.currentTarget.getBoundingClientRect(),T=C.clientX-E.x,M=C.clientY-E.y,{deltaY:D,deltaX:I,shiftKey:A,deltaMode:P}=C;s({deltaY:D||I,shiftKey:A,deltaMode:P,x:T,y:M})},[s]);c.exports.useEffect(()=>{const{step:C,startX:E,endX:T,startY:M,endY:D}=a;C==="end"&&Math.hypot(T-E,D-M)>5&&(o(a),u({type:"DONE"}))},[o,a]);const k=c.exports.useCallback(C=>{u({type:"MOVE",screenX:C.screenX,screenY:C.screenY,clientX:C.clientX,clientY:C.clientY})},[]),v=c.exports.useCallback(C=>(u({type:"UP",clientX:C.clientX,clientY:C.clientY}),!1),[]);return f(Et.Provider,{value:a,children:f("div",{className:t,style:n,onMouseDown:g,onMouseUp:v,onMouseMove:k,onClick:x,onWheel:y,children:e})})}function Ef(e,t){switch(t.type){case"UP":if(e.step==="brushing"||e.step==="start"){const{clientX:n,clientY:o}=t;return S(b({},e),{endX:n-e.boundingRect.x,endY:o-e.boundingRect.y,step:e.step==="start"?"initial":"end"})}return e;case"DOWN":if(e.step==="initial"||e.step==="end"){const{screenX:n,screenY:o,clientX:s,clientY:i,boundingRect:r,shiftKey:l,altKey:a}=t,u=s-r.x,p=i-r.y;return S(b({},e),{shiftKey:l,altKey:a,startX:u,startY:p,startScreenX:n,startScreenY:o,startClientX:s,startClientY:i,boundingRect:r,step:"start"})}return e;case"MOVE":if(e.step==="start"||e.step==="brushing"){const{clientX:n,clientY:o}=t;return S(b({},e),{step:"brushing",endX:n-e.boundingRect.x,endY:o-e.boundingRect.y})}return e;case"DONE":if(e.step==="end")return S(b({},e),{step:"initial"});break;default:return e}}const dt=c.exports.createContext({}),Af=dt.Provider;function Tf(){return c.exports.useContext(dt)}function oa({children:e,className:t,style:n,noPropagation:o}){const[s,i]=c.exports.useState(null),r=c.exports.useCallback(a=>{const u=a.currentTarget.getBoundingClientRect(),p=a.clientX-u.x,h=a.clientY-u.y;i({x:p,y:h}),o&&a.stopPropagation()},[o]),l=c.exports.useCallback(a=>{i(null),o&&a.stopPropagation()},[o]);return f(Af,{value:s,children:f("div",{className:t,style:n,onMouseMove:r,onMouseLeave:l,children:e})})}const ri=[{key:"signal",label:"Signal",value:"signal"},{key:"reference",label:"Reference",value:"reference"},{key:"solvent",label:"Solvent",value:"solvent"},{key:"impurity",label:"Impurity",value:"impurity"},{key:"standard",label:"Standard",value:"standard"},{key:"p1",label:"P1",value:"p1"},{key:"p2",label:"P2",value:"p2"},{key:"p3",label:"P3",value:"p3"}],Jn=["signal"],Ze={signal:"signal",mixed:"mixed"},sa="absolute",Df="Absolute";function If(e){if(!ia(e))throw new Error("absolute not applicable on this data");e.data.re=qd(e.data),e.data.im=new Float64Array(0),e.info=S(b({},e.info),{isComplex:!1})}function ia(e){return!!(e.info.isComplex&&!e.info.isFid)}function Pf(){return{once:!1,reduce:null}}var Rf=Object.freeze(Object.defineProperty({__proto__:null,id:sa,name:Df,apply:If,isApplicable:ia,reduce:Pf},Symbol.toStringTag,{value:"Module"}));const Mf="autoPhaseCorrection",Nf="Automatic phase correction",_f={minRegSize:5,maxDistanceToJoin:128,magnitudeMode:!0,factorNoise:5};function ra(e,t={}){if(!la(e))throw new Error("phaseCorrection not applicable on this data");return Jd(e.data,b(b({},_f),t))}function la(e){return!!(e.info.isComplex&&!e.info.isFid)}function Ff(e,t){let n=Object.assign({},e);for(const o in n)n[o]+=t[o];return{once:!0,reduce:n}}var Lf=Object.freeze(Object.defineProperty({__proto__:null,id:Mf,name:Nf,apply:ra,isApplicable:la,reduce:Ff},Symbol.toStringTag,{value:"Module"}));const aa="baselineCorrection",Of="Baseline correction",$s={airpls:"airPLS",polynomial:"Polynomial"};function $f(e,t={}){if(!li(e))throw new Error("baselineCorrection not applicable on this data");const{algorithm:n,zones:o=[]}=t;let{x:s,re:i}=e.data,r;switch(n){case"airpls":r=ep(s,i,t).corrected;break;case"polynomial":{const l={regressionOptions:t.degree};let a=_s({x:s,y:i},{numberOfPoints:4096,zones:o}),u=Qd(a.x,a.y,l),{regression:p}=u;r=new Float64Array(s.length);for(let h=0;h<i.length;h++)r[h]=i[h]-p.predict(s[h])}break;default:throw new Error(`baselineCorrection: algorithm unknown: ${n}`)}Object.assign(e.data,{re:r})}function li(e){return!e.info.isFid}function Hf(){return{once:!1,reduce:null}}var zf=Object.freeze(Object.defineProperty({__proto__:null,id:aa,name:Of,baselineAlgorithms:$s,apply:$f,isApplicable:li,reduce:Hf},Symbol.toStringTag,{value:"Module"}));const Hs="centerMean",ca="Center Mean";function Vf(e){var i;if(!ua(e))throw new Error("Center Mean is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=To.mean(t),s=To.mean(n||[]);for(let r=0;r<t.length;r++)t[r]-=o,n&&(n[r]-=s);e.data.re=t,n&&(e.data.im=n)}function ua(e){return!!(e.info.isComplex&&!e.info.isFid)}function jf(){return{once:!1,reduce:null}}var Bf=Object.freeze(Object.defineProperty({__proto__:null,id:Hs,name:ca,apply:Vf,isApplicable:ua,reduce:jf},Symbol.toStringTag,{value:"Module"}));const zs="digitalFilter",Xf="Digital Filter";function Yf(e,t={}){if(!da(e))throw new Error("Digital Filter is not applicable on this data");let{digitalFilterValue:n=0}=t,o=new Float64Array(e.data.re),s=new Float64Array(e.data.im),i=Math.floor(n);const r=0;i+=0;const l=new Float64Array(o.length),a=new Float64Array(s.length);l.set(o.slice(i)),l.set(o.slice(r,i),o.length-i),a.set(s.slice(i)),a.set(s.slice(r,i),s.length-i),e.data.re=l,e.data.im=a}function da(e){return!!(e.info.isComplex&&e.info.isFid)}function Gf(){return{once:!0,reduce:void 0}}var Wf=Object.freeze(Object.defineProperty({__proto__:null,id:zs,name:Xf,apply:Yf,isApplicable:da,reduce:Gf},Symbol.toStringTag,{value:"Module"}));const Bn="equallySpaced",pa="Equally Spaced";function Zf(e,t={}){if(!ha(e))throw new Error("Equally Spaced is not applicable on this data");const{from:n,to:o,numberOfPoints:s,exclusions:i}=t,{x:r,re:l,im:a}=e.data,u=_s({x:r,y:l},{from:n,to:o,numberOfPoints:s,exclusions:i});if(e.data.x=u.x,e.data.re=u.y,a){const p=_s({x:r,y:l},{from:n,to:o,numberOfPoints:s,exclusions:i});e.data.im=p.y}}function ha(e){return!!(e.info.isComplex&&!e.info.isFid)}function Uf(){return{once:!1,reduce:null}}var Kf=Object.freeze(Object.defineProperty({__proto__:null,id:Bn,name:pa,apply:Zf,isApplicable:ha,reduce:Uf},Symbol.toStringTag,{value:"Module"}));const Qn="exclusionZones",qf="Exclusion Zones";function Jf(e,t=[]){if(!fa(e))throw new Error("Exclusion Zones filter not applicable on this data");const{x:n,re:o,im:s}=e.data;e.data.re=ur({x:n,y:o},{zones:t}).y,e.data.im=s&&ur({x:n,y:o},{zones:t})}function fa(e){return!!(e.info.isComplex&&e.info.isFt)}function Qf(e,t){return{once:!0,reduce:tp(e.concat(t))}}var em=Object.freeze(Object.defineProperty({__proto__:null,id:Qn,name:qf,apply:Jf,isApplicable:fa,reduce:Qf},Symbol.toStringTag,{value:"Module"}));const ma="fft",tm="FFT";function nm(e){if(!ai(e))throw new Error("fft not applicable on this data");let t=e.filters.some(n=>n.name==="digitalFilter"&&n.flag);if(Object.assign(e.data,np(e.data,{applyZeroShift:!0})),t){let{digitalFilter:n}=e.info,o=(n-Math.floor(n))*Math.PI*2;Object.assign(e.data,Pl(e.data,0,o))}e.data.x=sm(e),e.info=S(b({},e.info),{isFid:!1,isFt:!0})}function ai(e){return!!(e.info.isComplex&&e.info.isFid)}function om(){return{once:!0,reduce:void 0}}function sm(e){const t=e.info,n=parseFloat(t.baseFrequency),o=parseFloat(t.frequencyOffset),s=parseFloat(t.spectralWidth),i=o/n;let r=.5*s,l=e.data.x.length,a=i-r,u=s/(l-1);const p=new Array(l);for(let h=0;h<l;h++)p[h]=a,a+=u;return p}var im=Object.freeze(Object.defineProperty({__proto__:null,id:ma,name:tm,apply:nm,isApplicable:ai,reduce:om},Symbol.toStringTag,{value:"Module"}));const Ro="fromTo",ga="From/To";function rm(e,t={}){if(!xa(e))throw new Error("From/To filter not applicable on this data");const{x:n,re:o,im:s}=e.data,{from:i,to:r}=t,{fromIndex:l,toIndex:a}=Un(n,{from:i,to:r});e.data.x=n.slice(l,a),e.data.re=o.slice(l,a),s&&(e.data.im=s.slice(l,a))}function xa(e){return!!(e.info.isComplex&&!e.info.isFid)}function lm(e,t){return{once:!0,reduce:t}}var am=Object.freeze(Object.defineProperty({__proto__:null,id:Ro,name:ga,apply:rm,isApplicable:xa,reduce:lm},Symbol.toStringTag,{value:"Module"}));const ba="lineBroadening",cm="Line broadening";function um(e,t){if(!ya(e))throw new Error("lineBroadening not applicable on this data");let n=e.info.digitalFilter,o;n>0?o=Math.floor(n):o=0;const s=e.data.re,i=e.data.im,r=e.data.x,l=s.length,a=new Float64Array(l),u=new Float64Array(l),p=(r[l-1]-r[0])/(l-1),h=-t*Math.exp(1),m=Math.exp(h*p);let g=Math.exp(h*r[0]);for(let x=0;x<l-o;x++)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;g=Math.exp(h*r[0]);for(let x=l;x>l-o;x--)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;e.data=S(b({},e.data),{re:a,im:u})}function ya(e){return!!(e.info.isComplex&&e.info.isFid)}function dm(e,t){return{once:!0,reduce:e+t}}var pm=Object.freeze(Object.defineProperty({__proto__:null,id:ba,name:cm,apply:um,isApplicable:ya,reduce:dm},Symbol.toStringTag,{value:"Module"}));const Vs="pareto",va="Pareto";function hm(e){var o;if(!Ca(e))throw new Error("Pareto is not applicable on this data");const t=e.data.re.slice(0),n=(o=e.data.im)==null?void 0:o.slice(0);e.data.re=dr(t),n&&(e.data.im=dr(n))}function Ca(e){return!!(e.info.isComplex&&!e.info.isFid)}function fm(){return{once:!1,reduce:null}}var mm=Object.freeze(Object.defineProperty({__proto__:null,id:Vs,name:va,apply:hm,isApplicable:Ca,reduce:fm},Symbol.toStringTag,{value:"Module"}));const Ht="phaseCorrection",ka="Phase correction";function Sa(e,t={}){if(!ci(e))throw new Error("phaseCorrection not applicable on this data");let{ph0:n,ph1:o}=t;n*=Math.PI/180,o*=Math.PI/180,Object.assign(e.data,Pl(e.data,n,o))}function ci(e){return!!(e.info.isComplex&&!e.info.isFid)}function gm(e,t){return{once:!0,reduce:t}}var xm=Object.freeze(Object.defineProperty({__proto__:null,id:Ht,name:ka,apply:Sa,isApplicable:ci,reduce:gm},Symbol.toStringTag,{value:"Module"}));const eo="shiftX",bm="Shift X";function ym(e,t=0){e.data.x=e.data.x.map(n=>n+t)}function vm(){return!0}function Cm(e,t){return{once:!0,reduce:e+t}}var km=Object.freeze(Object.defineProperty({__proto__:null,id:eo,name:bm,apply:ym,isApplicable:vm,reduce:Cm},Symbol.toStringTag,{value:"Module"}));const js="standardDeviation",wa="Standard Deviation";function Sm(e){var i;if(!Ea(e))throw new Error("Standard Deviation is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=To.standardDeviation(t),s=To.standardDeviation(n||[]);for(let r=0;r<t.length;r++)t[r]/=o,n&&(n[r]/=s);e.data.re=t,n&&(e.data.im=n)}function Ea(e){return!!(e.info.isComplex&&!e.info.isFid)}function wm(){return{once:!1,reduce:null}}var Em=Object.freeze(Object.defineProperty({__proto__:null,id:js,name:wa,apply:Sm,isApplicable:Ea,reduce:wm},Symbol.toStringTag,{value:"Module"}));const ui="zeroFilling",Aa="Zero Filling";function Am(e,t){if(!di(e))throw new Error("zeroFilling not applicable on this data");let n=e.filters.some(x=>x.name==="digitalFilter"&&x.flag),o=e.info.digitalFilter,s;o>0&&n?s=Math.floor(o):s=0;const{re:i,im:r,x:l}=e.data;let a=new Float64Array(t),u=new Float64Array(t),p=new Float64Array(t);const h=Math.min(t,i.length);a.set(i.slice(0,h-s)),u.set(r.slice(0,h-s)),p.set(l.slice(0,h-s));let m=l[1]-l[0],g=l[h-s-1];for(let x=h-s;x<t;x++)g+=m,p[x]=g;s>0&&s<t&&(a.set(i.slice(i.length-s),t-s),u.set(r.slice(i.length-s),t-s)),e.data=S(b({},e.data),{re:a,im:u,x:p})}function di(e){return!!(e.info.isComplex&&e.info.isFid)}function Tm(e,t){return{once:!0,reduce:t}}var Dm=Object.freeze(Object.defineProperty({__proto__:null,id:ui,name:Aa,apply:Am,isApplicable:di,reduce:Tm},Symbol.toStringTag,{value:"Module"}));const pi="shift2DX",Im="Shift 2D X";function Pm(e,t=0){e.data.minX+=t,e.data.maxX+=t}function Rm(){return!0}function Mm(e,t){return{once:!0,reduce:e+t}}var Nm=Object.freeze(Object.defineProperty({__proto__:null,id:pi,name:Im,apply:Pm,isApplicable:Rm,reduce:Mm},Symbol.toStringTag,{value:"Module"}));const hi="shift2DY",_m="Shift 2D Y";function Fm(e,t=0){e.data.minY+=t,e.data.maxY+=t}function Lm(){return!0}function Om(e,t){return{once:!0,reduce:e+t}}var $m=Object.freeze(Object.defineProperty({__proto__:null,id:hi,name:_m,apply:Fm,isApplicable:Lm,reduce:Om},Symbol.toStringTag,{value:"Module"})),nn=Object.freeze(Object.defineProperty({__proto__:null,absolute:Rf,baselineCorrection:zf,lineBroadening:pm,fft:im,phaseCorrection:xm,autoPhaseCorrection:Lf,shiftX:km,zeroFilling:Dm,digitalFilter:Wf,fromTo:am,equallySpaced:Kf,standardDeviation:Em,centerMean:Bf,pareto:mm,exclusionZones:em,shift2DX:Nm,shift2DY:$m},Symbol.toStringTag,{value:"Module"}));const Hm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",zm=8;function U(){let e="";for(let t=0;t<zm;t++)e+=Hm.charAt(Math.floor(Math.random()*62));return e}function Te(e,t=[]){let n=!1;for(let o of t){const s={name:o.name,label:nn[o.name].name,value:o.options},i=jm(e,o.name);if(i){const r=nn[o.name].reduce(i.value,s.value);r.once?(n||(n=!0),r.reduce!=null&&r.reduce!==void 0&&Bm(e,i.id,r.reduce)):vr(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}else vr(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}if(n)t.length===1&&Vm(e,t[0].name)?nn[t[0].name].apply(e,t[0].options):hn(e);else for(let o of t)nn[o.name].apply(e,o.options)}function Vm(e,t){const n=e.filters.findIndex(o=>o.name===t);return e.filters.length===n+1}function jm(e,t){return e.filters.find(n=>n.name===t)}function hn(e,t=null){const n=t||e.filters;Ta(e,null,null,n)}function Ta(e,t,n,o=null){e.filters=e.filters.slice(0),t&&(e.filters=e.filters.map(i=>S(b({},i),{flag:i.id===t?n:i.flag}),[])),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);const s=o||e.filters;for(let i in s){const r=e.filters[i];if(e.filters[i]=S(b({},e.filters[i]),{error:null}),r.flag)try{nn[r.name].apply(e,r.value)}catch(l){e.filters[i]=S(b({},e.filters[i]),{error:l.message})}}}function fi(e,t){e.filters=e.filters.slice(0),e.filters=e.filters.filter(n=>n.id!==t),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);for(let n in e.filters){const o=e.filters[n];if(e.filters[n]=S(b({},e.filters[n]),{error:null}),o.flag)try{nn[o.name].apply(e,o.value)}catch(s){e.filters[n]=S(b({},e.filters[n]),{error:s.message})}}}function vr(e,t,n=!0){const o=U();e.filters=e.filters.slice(0),delete t.isSnapshot,e.filters.push(S(b({},t),{id:o,flag:!0,isDeleteAllow:n}))}function Bm(e,t,n){e.filters=e.filters.slice(0);const o=e.filters.findIndex(s=>s.id===t);delete e.filters[o].isSnapshot,e.filters[o]=S(b({},e.filters[o]),{value:n})}const Da=["#C10020","#007D34","#803E75","#FF6800","#B32851","#7F180D","#232C16","#A6BDD7","#CEA262","#817066","#FF8E00","#F6768E","#00538A","#FF7A5C","#53377A","#FFB300","#F4C800","#93AA00","#593315","#F13A13"],Cr={cosy:{positiveColor:"darkblue",negativeColor:"blue"},roesy:{positiveColor:"#e75480",negativeColor:"yellow"},noesy:{positiveColor:"#e75480",negativeColor:"yellow"},tocsy:{positiveColor:"green",negativeColor:"yellow"},hsqc:{positiveColor:"black",negativeColor:"yellow"},hmbc:{positiveColor:"darkviolet",negativeColor:"yellow"}};function Xm(e,t=[]){if(!Cr[e]){const n=mi(!1,t),o=Ia(n,50);return{positiveColor:n,negativeColor:o}}return Cr[e]}function Bs(e){const t=Math.max(0,Math.min(100,e)),o=Math.round(t/100*255).toString(16);return t===100?"":o.padStart(2,"0")}function Ia(e,t){return e+Bs(t)}function mi(e=!1,t=[],n=100){const o=Da.filter(s=>!t.includes(s));if(o.length>0&&!e)return o[0]+Bs(n);{let i=String(`#${Math.random().toString(16).slice(2,8).toUpperCase()}`).replace(/[^0-9a-f]/gi,"");i.length<6&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);let r="#",l;for(let a=0;a<3;a++)l=parseInt(i.substr(a*2,2),16),l=Math.round(Math.min(Math.max(0,l+l*-.25),255)).toString(16),r+=`00${l}`.substr(l.length);return r+Bs(n)}}function Ym(e){return ln({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.integrals)}function Pa(e){const{x:t}=e.data;return(t[t.length-1]-t[0])/1e4}function Yt(e){const t=(e==null?void 0:e.filters)&&(e==null?void 0:e.filters.find(n=>n.name===eo));return t!=null&&t.flag?t.value:0}function Gm(e,t,n){var o;for(const{x:s}of((o=t.peaks)==null?void 0:o.values)||[])if(Math.abs(e.x-s)<n)return!0;return!1}function Ra(e,t){const n=Yt(t),o=Pa(t);return e.reduce((s,i)=>(Gm(i,t,o)||s.push({id:(i==null?void 0:i.id)||U(),originalX:i.x-n,x:i.x,y:i.y,width:i.width}),s),[])}function Wm(e,t){var n;return ln({values:[],options:{}},e.peaks,{values:Ra(((n=e==null?void 0:e.peaks)==null?void 0:n.values)||[],t)})}function Zm(e,t,n){var o;for(const{from:s,to:i}of((o=t.ranges)==null?void 0:o.values)||[])if(Math.abs(e.from-s)<n&&Math.abs(e.to-i)<n)return!0}function vn(e,t){const{x:n,re:o}=t.data,s=Yt(t),i=Pa(t);return e.reduce((r,l)=>{if(Zm(l,t,i))return r;const a=bn({x:n,y:o},{from:l.from,to:l.to,reverse:!0}),u=l.signals.map(p=>{const x=p,{kind:h=null,id:m}=x,g=G(x,["kind","id"]);return b({kind:h||"signal",id:m||U(),originDelta:p.delta-s},g)});return r.push(S(b({},l),{kind:(u==null?void 0:u[0].kind)||Ze.signal,originFrom:l.from-s,originTo:l.to-s,id:l.id||U(),absolute:a,signals:u})),r},[])}function Um(e,t){var n;return ln({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.ranges,{values:vn(((n=e==null?void 0:e.ranges)==null?void 0:n.values)||[],t)})}function at(e,t={}){var o;const n={};return n.id=e.id||U(),n.source=Object.assign({jcampURL:null,file:{binary:null,name:"",extension:""}},e.source),n.display=Object.assign(S(b({name:(o=e.display)!=null&&o.name?e.display.name:U()},Km(e,t)),{isVisible:!0,isPeaksMarkersVisible:!0,isRealSpectrumVisible:!0}),e.display),n.info=Object.assign({nucleus:"1H",isFid:!1,isComplex:!1,dimension:1},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({x:[],re:[],im:[]},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.peaks=Wm(e,n),n.integrals=Ym(e),n.ranges=Um(e,n),hn(n),qm(n),n}function Km(e,t){var o;let n="black";return((o=e==null?void 0:e.display)==null?void 0:o.color)===void 0?n=mi(!1,t["1d"]||[]):n=e.display.color,t["1d"]&&t["1d"].push(n),{color:n}}function qm(e){e.info.isFid&&e.filters.findIndex(t=>t.name===zs)===-1&&e.info.digitalFilter&&Te(e,[{name:zs,options:{digitalFilterValue:e.info.digitalFilter},isDeleteAllow:!1}])}function Ma(e,t,n){const{nucleus:o,solvent:s,name:i=null,frequency:r=400}=t,{x:l,y:a}=Rl(e,{frequency:r,nbPoints:524288}),u=at({data:{x:l,im:null,re:a},display:{name:i},info:{nucleus:o,originFrequency:r,baseFrequency:r,pulseSequence:"",solvent:s,isFt:!0}},n);return u.ranges.values=vn(e,u),u}function Jm(e,t){const{ranges:n,experiment:{nucleus:o,solvent:s},parts:i}=op(e);return Ma(n,{nucleus:o,solvent:s,name:i[0]},t)}function Cn(e){const{display:{isRealSpectrumVisible:t},data:{x:n,re:o,im:s}}=e;return{x:n,y:t?o:s}}const Lt={"1H":{tms:{from:-.1,to:.1,nbPeaks:1,delta:0},tsp:{from:-.1,to:.1,nbPeaks:1,delta:0},glucose:{from:5.18,to:5.28,nbPeaks:2,delta:5.23}},"13C":{}};function Qm(e={}){const{nucleus:t="1H",reference:n="tms"}=e;if(!Lt[t])throw new Error(`Nucleus not found: ${t}`);const o=Lt[t][n.toLowerCase()];if(!o)throw new Error(`Reference not found: ${n}`);return{from:o.delta-.05,to:o.delta+.05,delta:o.delta,nbPeaks:o.nbPeaks}}function eg(e,t){let{from:n,to:o,nbPeaks:s,targetX:i,reference:r}=t;if(r){let u=Qm({reference:r,nucleus:e.nucleus});n=u.from,o=u.to,s=u.nbPeaks,i=u.delta}const{re:l,x:a}=e.data;return tg({x:a,y:l},{from:n,to:o},{nbPeaks:s,targetX:i})}function tg(e,t={},n={}){const{targetX:o=0,nbPeaks:s=1,gsd:i={minMaxRatio:.1,realTopDetection:!0,smoothY:!0,sgOptions:{windowSize:7,polynomial:3}}}=n;let{from:r,to:l}=t;if(r===void 0||l===void 0)return 0;const a=We(e.x,r),u=We(e.x,l),p={x:e.x.slice(a,u),y:e.y.slice(a,u)};let h=sp(p,i).sort((g,x)=>x.y-g.y).slice(0,s);if(h.length===0)return 0;const m=ip(h.map(g=>g.x));return o-m}function ng(e,t){const n=e.integrals.values.findIndex(o=>o.id===t.id);if(n!==-1){const o=e.integrals.values[n].absolute/t.value,{values:s,sum:i}=e.integrals.values.reduce((r,l,a)=>{const u=l.absolute/o;return r.sum+=u,r.values[a]=S(b({},l),{integral:u}),r},{values:[],sum:0});e.integrals.values=s,e.integrals.options=S(b({},e.integrals.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:i})}}function Na(e){return Jn.includes(e.kind)}function kr(e,t,n=null){return e.reduce((o,s)=>n&&n(s)===!0?o+=Math.abs(s[t]):o,0)}function _a(e,t,n,o=!1){var a;const{values:s,options:i}=e,r=kr(s,"absolute",n);let l=0;if(i.sum){if(e.options.isSumConstant||o)l=r>0?i.sum/r:0;else if((a=e.values)!=null&&a[0]){const u=e.values[0];l=(u[t]?u[t]:i.sum)/u.absolute}}e.values=e.values.map(u=>b(b({},u),n(u)&&{[t]:u.absolute*l})),!e.options.isSumConstant&&!o&&(e.options.sum=kr(e.values,t,n))}function kn(e,t=!1){_a(e.integrals,"integral",Na,t)}function to(e){return e.info.dimension===1}function og(e,t){const{minMaxRatio:n,maxNumberOfPeaks:o,noiseFactor:s,lookNegative:i,windowFromIndex:r,windowToIndex:l}=t,a=rp(e.data.re.map(m=>Math.abs(m)));let{re:u,x:p}=e.data;r!==void 0&&l!==void 0&&(p=p.slice(r,l),u=u.slice(r,l));let h=lp({x:p,y:u},{lookNegative:i,noiseLevel:a*s,minMaxRatio:n,realTopDetection:!0,smoothY:!1,sgOptions:{windowSize:15,polynomial:3}});return h.sort((m,g)=>g.y-m.y),o<h.length&&(h=h.slice(0,o)),Ra(h,e)}function Fa(e,t){const{from:n,to:o}=t;let s=e.x.findIndex(l=>l>=n),i=e.x.findIndex(l=>l>=o)-1;s>i&&(s=i,i=s);const r=e.re.slice(s,i);if(r&&r.length>0){const l=Ml(r),a=r.findIndex(p=>p===l);return{x:e.x[s+a],y:l,xIndex:s+a}}return null}function La(e){return(e==null?void 0:e.replace(/[0-9]/g,""))||""}function gi(e,t){let n=b({},e);const{molecules:o,nucleus:s}=t;if(e.sumAuto&&Array.isArray(o)&&o.length>0){const{mf:r,key:l}=o[0];n=S(b({},n),{sumAuto:!0,mf:r,moleculeKey:l})}else{const i=n,{mf:r,moleculeKey:l}=i,a=G(i,["mf","moleculeKey"]);n=S(b({},a),{sumAuto:!1})}return n.sum||(n.sum=Oa(n.mf||null,s)),n}function Oa(e,t){if(!e||!t)return 100;const o=La(t),s=sg(e);return s[o]?s[o]:100}function xi(e,t){const{nucleus:n,options:o}=t;if(o.sumAuto){const{mf:i,moleculeKey:r}=o,l=Oa(i,n);e.options=S(b({},e.options),{sumAuto:!0,moleculeKey:r,mf:i,sum:l})}else{const s=e.options,{mf:i,moleculeKey:r}=s,l=G(s,["mf","moleculeKey"]);e.options=S(b({},l),{sumAuto:!1,sum:o.sum})}}function sg(e){const t={},n=e.split(/(\d+)/);for(let o=0;o<n.length-1;o=o+2)t[n[o]]=Number(n[o+1]);return t}function bi(e,t,n){const o=["ranges","integrals"];for(const s of e.data)if(to(s))for(const i of o){const{moleculeKey:r,mf:l,sumAuto:a}=s[i].options;if((t===r||!r&&!l)&&a){const u=n?{mf:n.mf,moleculeKey:n.key}:{mf:void 0,moleculeKey:void 0};xi(s[i],{nucleus:s.info.nucleus,options:S(b({},u),{sumAuto:!0,sum:void 0})}),At(s,!0),kn(s,!0)}}}function ig(e,t){return t===void 0?e.signals?e.signals.reduce((n,o)=>o.nbAtoms?o.nbAtoms+n:n,0):0:e.signals[t].nbAtoms||0}function rg(e,t){e.nbAtoms=ig(e,t),e.nbAtoms===0&&delete e.nbAtoms}function lg(e){delete e.diaIDs,delete e.nbAtoms,e.signals.forEach(t=>{delete t.diaIDs,delete t.nbAtoms}),delete e.nbAtoms}function zn(e,t="both",n={}){switch(t){case"both":lg(e);break;case"range":delete e.diaIDs,delete e.nbAtoms;break;case"signal":delete e.signals[n.signalIndex].diaIDs,delete e.signals[n.signalIndex].nbAtoms;break}return rg(e),e}function $a(e){return e.kind===Ze.signal}function ag(e,t){return!e.signals.some(n=>n.kind===void 0||!t.includes(n.kind))}function zt(e,t){const n=t.reduce((o,s)=>(s.id&&o.push(s.id),s.signals&&(o=o.concat(s.signals.map(i=>i.id,[]))),o),[]);e.dispatch({type:"REMOVE_ALL",payload:{id:n,axis:"x"}})}function cg(e){return e.signals&&ag(e,Jn)}function At(e,t=!1){_a(e.ranges,"integration",cg,t)}function ug(e,t){const{from:n,to:o,molecules:s,nucleus:i}=t,{x:r,re:l}=e.data,a=bn({x:r,y:l},{from:n,to:o,reverse:!0}),u=wf(r,l,n,o,e.info.originFrequency);if(!!u)try{const p={id:U(),from:n,to:o,absolute:a,signals:[b({id:U()},u)],kind:Ze.signal,integration:0};e.ranges.options=gi(e.ranges.options,{molecules:s,nucleus:i}),e.ranges.values=e.ranges.values.concat(vn([p],e)),At(e)}catch{throw new Error("Could not calculate the multiplicity")}}function dg(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,r=e.ranges.values.findIndex(a=>a.id===t.id),l=bn({x:s,y:i},{from:n,to:o,reverse:!0});r!==-1&&(e.ranges.values[r]=S(b(S(b({},e.ranges.values[r]),{originFrom:n,originTo:o}),t),{absolute:l}),At(e))}function pg(e,t){const n=e.ranges.values.findIndex(o=>o.id===t.id);if(n!==-1&&e.ranges.options.sum){const{absolute:o,integration:s}=e.ranges.values[n],i=o/t.value,r=t.value/s*e.ranges.options.sum;e.ranges.options=S(b({},e.ranges.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:r}),e.ranges.values=e.ranges.values.map(l=>S(b({},l),{integration:l.absolute/i}))}}function hg(e,t){const{rangeID:n,signalID:o,newSignalValue:s}=t;let i=0;const r=e.ranges.values.findIndex(l=>l.id===n);if(r!==-1){const l=e.ranges.values[r].signals.findIndex(a=>a.id===o);i=s-e.ranges.values[r].signals[l].delta,e.ranges.values[r].signals[l].delta=s}return i}function fg(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,r=bn({x:s,y:i},{from:n,to:o,reverse:!0}),l=ap({x:s,y:i},{from:n,to:o}).y,a=cp({x:s,y:i},{from:n,to:o}).y,u=Yt(e);return{id:U(),originFrom:n-u,originTo:o-u,from:n,to:o,absolute:r,min:l,max:a}}const mg={minMaxRatio:1,realTopDetection:!0,maxCriteria:!0,smoothY:!1,integrationSum:100,factorStd:5,clean:!0,sgOptions:{windowSize:7,polynomial:3}};function gg(e,t={}){let{re:n,x:o}=e.data;const{originFrequency:s,nucleus:i}=e.info,{windowFromIndex:r,windowToIndex:l,peakPicking:a}=t,u=b(b({},mg),a),p={frequency:s,nucleus:i,compile:!0,frequencyCluster:13,keepPeaks:!0};if(r!==void 0&&l!==void 0&&(o=o.slice(r,l),n=n.slice(r,l)),s){let m=1/s/(o[1]-o[0]),g=Math.max(Math.round(m/2),5);u.sgOptions={windowSize:g-g%2+1,polynomial:3}}return u.smoothY=void 0,u.sgOptions=void 0,up({x:o,y:n},{peakPicking:u,ranges:p})}function Ha(e,t){const r=t,{molecules:n,nucleus:o}=r,s=G(r,["molecules","nucleus"]);s.impurities={solvent:e.info.solvent||""};const i=gg(e,s);e.ranges.options=gi(e.ranges.options,{molecules:n,nucleus:o}),e.ranges.values=e.ranges.values.concat(vn(i,e)),At(e)}function xg(e,t){e.integrals.values=e.integrals.values.map(n=>S(b({},n),{from:n.originFrom+t,to:n.originTo+t}))}function bg(e,t){e.peaks.values=e.peaks.values.map(n=>{const o=n.originalX+t,s=We(e.data.x,o);return S(b({},n),{y:e.data.re[s],x:n.originalX+t})})}function yg(e,t){e.ranges.values=e.ranges.values.map(n=>S(b({},n),{from:(n.originFrom||0)+t,to:(n.originTo||0)+t,signals:(n==null?void 0:n.signals)&&n.signals.map(o=>S(b({},o),{delta:(o.originDelta||0)+t}))}))}function Sn(e){const t=Yt(e);bg(e,t),yg(e,t),xg(e,t)}const za=20;var B=(e=>(e.DM_1D="1D",e.DM_2D="2D",e))(B||{});const Rt={"2D":{top:100,right:50,bottom:70,left:100},"1D":{top:10,right:10,bottom:70,left:10}};function vg(e,t={},n={}){const{dependentVariables:o,info:s,meta:i,source:r}=e;let l=Va(o[0].components);return l.im&&(s.isComplex=!0),Array.isArray(s.nucleus)&&(s.nucleus=s.nucleus[0]),at(S(b({},t),{source:r,info:s,meta:i,data:l}),n)}function Cg(e,t={},n={}){let o=e.dimensions[0],s=e.dependentVariables,i=o.quantityName,r=o.count,l=o.increment.magnitude,a=o.originOffset.magnitude,u=o.coordinatesOffset.magnitude,p=s[0].components[0],h=[],m=[];for(let C=p.length-1;C>0;C-=2)h.push(p[C-1]),m.push(p[C]);let g={},x,y;switch(i){case"frequency":y=0+u/a*1e6,x=l/a*1e6,g.re=h,g.im=m;break;case"time":y=a,x=l,g.re=h.reverse(),g.im=m.reverse().map(C=>-C);break}let k=[];for(let C=0;C<r;C++)k.push(y+C*x);return g.x=k,at(S(b({},t),{data:g}),n)}function kg(e,t,n,o){const{dependentVariables:s,info:i,meta:r}=e;let l=Va(s[0].components);return Array.isArray(i.nucleus)&&(i.nucleus=i.nucleus[0]),at(S(b({},t),{source:S(b({},t.source),{jcampSpectrumIndex:o}),info:i,meta:r,data:l}),n)}function Va(e){var s,i,r,l,a,u;let t=(i=(s=e[0])==null?void 0:s.data)!=null&&i.x?e[0].data.x:[],n=(l=(r=e[0])==null?void 0:r.data)!=null&&l.y?e[0].data.y:[],o=(u=(a=e[1])==null?void 0:a.data)!=null&&u.y?e[1].data.y:null;return t[0]>t[1]&&(t.reverse(),n.reverse(),o&&o.reverse()),{x:t,re:n,im:o}}function Sg(e,t,n){let o=e.info.nucleus.indexOf(t);o===-1&&(o=0);let s={nucleus:e.info.nucleus[o],isFid:!1,isComplex:!1,dimension:1},i=o===0?e.data.minX:e.data.minY,r=o===0?e.data.maxX:e.data.maxY,l=o===0?e.data.z[0].length:e.data.z.length,a=new Float64Array(l);if(o===1)for(let p=0;p<e.data.z.length;p++)for(let h=0;h<e.data.z[0].length;h++)a[p]+=e.data.z[p][h];else for(let p=0;p<e.data.z[0].length;p++)for(const h of e.data.z)a[p]+=h[p];let u={x:Fs({from:i,to:r},l),re:a};return at({info:s,data:u},n)}function wg(e,t){const n=e.data,o=(n.maxX-n.minX)/(n.z[0].length-1),s=(n.maxY-n.minY)/(n.z.length-1),i=Math.floor((t.x-n.minX)/o),r=Math.floor((t.y-n.minY)/s);if(i<0||i>=n.z[0].length||r<0||r>=n.z.length)return;let l={nucleus:e.info.nucleus[0],isFid:!1,isComplex:!1,dimension:1},a={x:Fs({from:e.data.minX,to:e.data.maxX},e.data.z[0].length),re:new Float64Array(e.data.z[0].length)};for(let x=0;x<e.data.z[0].length;x++)a.re[x]+=e.data.z[r][x];let u={nucleus:e.info.nucleus[1],isFid:!1,isComplex:!1,dimension:1},p={x:Fs({from:e.data.minY,to:e.data.maxY},e.data.z.length),re:new Float64Array(e.data.z.length)},h=e.data.z.length-1;for(let x=0;x<e.data.z.length;x++)p.re[x]+=e.data.z[h--][i];const m=at({info:l,data:a},{}),g=at({info:u,data:p},{});return{horizontal:m,vertical:g}}const ja={positive:{contourLevels:[0,21],numberOfLayers:10},negative:{contourLevels:[0,21],numberOfLayers:10}};class Eg{constructor(t,n=ja,o={positive:10,negative:10}){this.options=n;const{positive:s,negative:i}=o;this.currentLevelPositive=s,this.currentLevelNegative=i;const r=Ss(t.minX,t.maxX,t.z[0].length),l=Ss(t.minY,t.maxY,t.z.length);this.conrec=new dp(t.z,{xs:r,ys:l,swapAxes:!1}),this.median=t.noise,this.minMax=t}getLevel(){return{levelPositive:this.currentLevelPositive,levelNegative:this.currentLevelNegative}}setLevel(t,n){this.currentLevelPositive=t,this.currentLevelNegative=n}setOptions(t){const n=t.positive.contourLevels,o=t.negative.contourLevels;this.currentLevelPositive>=n[1]?this.currentLevelPositive=n[1]:this.currentLevelPositive<=n[0]&&(this.currentLevelPositive=n[0]),this.currentLevelNegative>=o[1]?this.currentLevelNegative=o[1]:this.currentLevelNegative<=o[0]&&(this.currentLevelNegative=o[0]),this.options=t}wheel(t){const n=Math.sign(t),o=this.options.positive.contourLevels,s=this.options.negative.contourLevels;(this.currentLevelPositive>o[0]&&n===-1||this.currentLevelPositive<o[1]&&n===1)&&(this.currentLevelPositive+=n),(this.currentLevelNegative>s[0]&&n===-1||this.currentLevelNegative<s[1]&&n===1)&&(this.currentLevelNegative+=n)}shiftWheel(t){const n=Math.sign(t),[o,s]=this.options.positive.contourLevels;if(!(this.currentLevelPositive===o&&n===-1||this.currentLevelPositive>=s&&n===1))return this.currentLevelPositive+=n,[]}drawContours(){const t=this.currentLevelPositive/2+1,n=this.currentLevelNegative/2+1,{positive:{numberOfLayers:o},negative:{numberOfLayers:s}}=this.options;return{positive:this.getContours(t,{nbLevels:o}),negative:this.getContours(n,{negative:!0,nbLevels:s})}}getContours(t,n={}){const{negative:o=!1,timeout:s=2e3,nbLevels:i=10}=n,r=Math.max(Math.abs(this.minMax.maxZ),Math.abs(this.minMax.minZ));let l=Ss(this.median*1*Math.pow(2,t),r,i,2);o&&(l=l.map(u=>-u));let a=[];try{a=this.conrec.drawContour({contourDrawer:"basic",levels:l,timeout:s})}catch(u){throw console.log(u),u}return a}}function Ss(e,t,n,o){if(o!==void 0){const s=[];s[0]=0;for(let l=1;l<=n;l++)s[l]=s[l-1]+(o-1)/Math.pow(o,l);const i=s[n],r=new Array(n);for(let l=0;l<n;l++)r[l]=(t-e)*(1-s[l+1]/i)+e;return r}else{const s=(t-e)/(n-1);return Ag(e,t+s/2,s)}}function Ag(e,t,n){const o=[];for(let s=e;s<t;s+=n)o.push(s);return o}function no(e,t={}){var o;const n={};return n.id=e.id||U(),n.source=Object.assign({jcampURL:null},e.source),n.display=Object.assign(S(b({name:(o=e.display)!=null&&o.name?e.display.name:U()},Tg(e,t)),{isPositiveVisible:!0,isNegativeVisible:!0,isVisible:!0,contourOptions:ja,dimension:2}),e.display),n.info=Object.assign({nucleus:["1H","1H"],isFt:!0,isFid:!1,isComplex:!1,dimension:2},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({z:[],minX:0,minY:0,maxX:0,maxY:0},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.zones=Object.assign({values:[],options:{}},e.zones),n.processingController=new Eg(n.data,n.display.contourOptions),hn(n),n}function Tg(e,t){var o,s;let n={positiveColor:"red",negativeColor:"blue"};return(((o=e==null?void 0:e.display)==null?void 0:o.negativeColor)===void 0||((s=e==null?void 0:e.display)==null?void 0:s.positiveColor)===void 0)&&(n=Xm(e.info.experiment,t["2d"]||[])),t["2d"]&&t["2d"].push(n.positiveColor),n}function Xs(e){return e.info.dimension===2}function oo(e){let t={xShift:0,yShift:0};return e!=null&&e.filters&&(t=e.filters.reduce((n,o)=>(o.name===pi&&(n.xShift=o!=null&&o.flag?o.value:0),o.name===hi&&(n.yShift=o!=null&&o.flag?o.value:0),n),{xShift:0,yShift:0})),t}function so(e){const{xShift:t,yShift:n}=oo(e);Dg(e,{xShift:t,yShift:n})}function Dg(e,{xShift:t,yShift:n}){e.zones.values=e.zones.values.map(o=>{var s;return S(b({},o),{signals:(s=o.signals)==null?void 0:s.map(i=>S(b({},i),{x:S(b({},i.x),{delta:i.x.originDelta+t}),y:S(b({},i.y),{delta:i.y.originDelta+n})}))})})}function Ig(e,t){return S(b({id:e.id},t===yt.ROW_DATA||t===yt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL,jcampSpectrumIndex:e.source.jcampSpectrumIndex}}),{zones:e.zones,filters:e.filters,display:e.display})}function Pg(e,t,n){var s;const o=e.zones.values.findIndex(i=>i.id===t);if(o!==-1){const i=e.zones.values[o].signals.findIndex(l=>l.id===n.id),r=e.zones.values[o];if(i!==-1){const l=r.signals[i],a=(n==null?void 0:n.x)||(n==null?void 0:n.x)===0?n.x-l.x.delta:0,u=(n==null?void 0:n.y)||(n==null?void 0:n.y)===0?n.y-((s=l.y)==null?void 0:s.delta):0;return{xShift:a,yShift:u}}}return{xShift:0,yShift:0}}function Ba(e,t){let n={};return t.selectedZone?(t.enhanceSymmetry=!1,n=Mg(e,t.selectedZone)):n=e.data,Rg(n,S(b({},t),{info:e.info}))}function Rg(e,t){const{thresholdFactor:n,clean:o,maxPercentCutOff:s,convolutionByFFT:i}=t,{nucleus:r,originFrequency:l}=t.info,{enhanceSymmetry:a=r[0]===r[1]}=t;return pp(e,{nuclei:r,observedFrequencies:l,thresholdFactor:n,clean:o,maxPercentCutOff:s,enhanceSymmetry:a,convolutionByFFT:i})}function Mg(e,t){const{fromX:n,toX:o,fromY:s,toY:i}=t,r=e.data,l=(r.maxX-r.minX)/(r.z[0].length-1),a=(r.maxY-r.minY)/(r.z.length-1);let u=Math.max(Math.floor((n-r.minX)/l),0),p=Math.max(Math.floor((s-r.minY)/a),0),h=Math.min(Math.floor((o-r.minX)/l),r.z[0].length-1),m=Math.min(Math.floor((i-r.minY)/a),r.z.length-1);u>h&&([u,h]=[h,u]),p>m&&([p,m]=[m,p]);let g={z:[],maxX:r.minX+h*l,minX:r.minX+u*l,maxY:r.minY+m*a,minY:r.minY+p*a},x=Number.MIN_SAFE_INTEGER,y=Number.MAX_SAFE_INTEGER,k=h-u+1;for(let v=p;v<m;v++){let C=new Float32Array(k),E=u;for(let T=0;T<k;T++)C[T]=r.z[v][E++];for(let T of C)x<T&&(x=T),y>T&&(y=T);g.z.push(Array.from(C))}return g.minZ=y,g.maxZ=x,g}function Xa(e,t){const n=Ba(e,t),{xShift:o,yShift:s}=oo(e),{minX:i,maxX:r,minY:l,maxY:a}=e.data,u=Math.abs(r-i)/1e4,p=Math.abs(a-l)/1e4;return n.reduce((m,g)=>{const x=g.x||{from:0,to:0},y=g.y||{from:0,to:0};for(const{x:v,y:C}of e.zones.values)if(Math.abs(x.from-v.from)<u&&Math.abs(x.to-v.to)<u&&Math.abs(y.from-C.from)<p&&Math.abs(y.to-C.to)<p)return m;const k=g.signals.map(v=>({id:U(),peaks:v.peaks,x:b({originDelta:v.x.delta-o},v.x),y:b({originDelta:v.y.delta-s},v.y),kind:"signal"}));return m.push({id:U(),x:{from:x.from,to:x.to},y:{from:y.from,to:y.to},signals:k,kind:Ze.signal}),m},[])}function Ng(e,t){const n=Ba(e,t),{xShift:o,yShift:s}=oo(e);return n.map(r=>{const l=r.signals.map(a=>({id:U(),peaks:a.peaks,x:b({originDelta:a.x.delta-o},a.x),y:b({originDelta:a.y.delta-s},a.y),kind:a.kind||"signal"}));return{id:U(),x:r.x,y:r.y,signals:l,kind:Ze.signal}},[])}function _g(e,t,n,o){const{dependentVariables:s,info:i,meta:r}=e;let l=s[0].components;return no(S(b({},t),{source:S(b({},t==null?void 0:t.source),{jcampSpectrumIndex:o}),info:i,meta:r,data:l}),n)}function Fg(e,t={},n={}){const{dependentVariables:o,meta:s,source:i}=e;let r=o[0].components;return no(S(b({},t),{source:i,meta:s,data:r}),n)}function Lg(e,t={},n={}){return no({},n)}function Mo(e,t){return JSON.parse(JSON.stringify(e),function(o,s){if(o in t){this[t[o]]=s;return}return s})}function Og(e){if((e==null?void 0:e.version)===1)return e;const t=S(b({},e),{version:1}),n={j:"js",signal:"signals",integral:"integration",peak:"peaks",diaID:"diaIDs"};for(const o of t.spectra)o.ranges?o.ranges=Mo(o.ranges,n):o.zones&&(o.zones=Mo(o.zones,n));return t}function $g(e){if((e==null?void 0:e.version)===2)return e;const t=S(b({},e),{version:2}),n={peaks:{delta:"x",originDelta:"originalX",intensity:"y"},ranges:{atomIDs:"atoms",intensity:"y"}};for(const o of t.spectra)o.peaks?o.peaks=Mo(o.peaks,n.peaks):o.ranges?o.ranges=Mo(o.ranges,n.ranges):o.zones&&(o.zones.values=Hg(o.zones.values));return t}function Hg(e){return e.map(t=>(t.signals&&(t.signals=t.signals.map(n=>{if(n.x&&n.y){const o=n,{x:s}=o,i=s,{fromTo:u}=i,p=G(i,["fromTo"]),{y:r}=o,l=r,{fromTo:h}=l,m=G(l,["fromTo"]);n=S(b({},n),{x:b(b({},p),u),y:b(b({},m),h)})}else{const a=n,{fromTo:u,deltaX:p,resolutionX:h,nucleusX:m,deltaY:g,resolutionY:x,nucleusY:y,shiftX:k,shiftY:v}=a,C=G(a,["fromTo","deltaX","resolutionX","nucleusX","deltaY","resolutionY","nucleusY","shiftX","shiftY"]);n=S(b({},C),{x:{from:u[0].from,to:u[0].to,delta:p,resolution:h,nucleus:m},y:{from:u[1].from,to:u[1].to,delta:g,resolution:x,nucleus:y}})}return n},[])),t),[])}const Ya=2;function zg(e){return t=>e.reduce((n,o)=>o(n),t)}function Sr(e){let t=[Og,$g],n=(e==null?void 0:e.version)||0;if(n>Ya)throw new Error("This file can not be imported using the current NMRium version, Please move to the new one !!! ");return zg(t.slice(n))(e)}const Vg=/^(?:[A-Z][a-z]?\d* *)+$/;function Ga(e){if(!Vg.test(e))throw Error(`MF can not be parsed: ${e}`);const t={},n=e.matchAll(/(?<atom>[A-Z][a-z]?)(?<number>[0-9]*)/g);for(const o of n){const{atom:s,number:i}=o.groups;t[s]||(t[s]=0),t[s]+=i===""?1:Number(i)}return t}function No(e={}){const t=e.key||U(),n=e.molfile||"",o=Bt.Molecule.fromMolfile(n),s=o.getMolecularFormula();return{key:t,molfile:n,mf:s.formula,em:s.absoluteWeight,mw:s.relativeWeight,svg:o.toSVG(50,50),atoms:Ga(s.formula)}}function jg(e){return{molfile:e.molfile}}var yt=(e=>(e.ROW_DATA="ROW_DATA",e.DATA_SOURCE="DATA_SOURCE",e))(yt||{});function Bg(e,t,n,o){return fetch(t).then(s=>s.arrayBuffer()).then(s=>{Wa(e,s,n,o)})}function Wa(e,t,n,o){var i,r;n=n||{};const s=fp(t,{noContour:!0,xy:!0,keepRecordsRegExp:/.*/,profiling:!0});if(s.length!==0)for(let l=0;l<s.length;l++){let a=s[l];const u=(r=(i=a.dependentVariables)==null?void 0:i[0])==null?void 0:r.components;u&&(u.length>0||u.z)&&Xg(e,{index:l,entry:a},n,o)}}function Xg(e,t,n,o){const s=(n==null?void 0:n.source)||{};if(!("jcampSpectrumIndex"in s)||s.jcampSpectrumIndex===t.index){const i=t.entry.info.dimension;i===1&&e.push(kg(t.entry,n,o,t.index)),i===2&&e.push(_g(t.entry,n,o,t.index))}}function Yg(e,t,n){const o=t.info.dimension;o===1&&e.push(at(t,n)),o===2&&e.push(no(t,n))}function Gg(e,t,n={},o={}){let s=mp(t);s=s[0];let i=s.description,r=i.metadata;delete i.metadata,i.acquisitionMode=0,i.experiment=i.dimension===1?"1d":"2d",i.type="NMR SPECTRUM",i.nucleus=i.nucleus[0],i.numberOfPoints=i.numberOfPoints[0],i.acquisitionTime=i.acquisitionTime[0],i.baseFrequency=i.baseFrequency[0],i.frequencyOffset=i.frequencyOffset[0],i.spectralWidthClipped=s.application.spectralWidthClipped,i.dimension===1&&s.dependentVariables&&e.push(Cg(s,S(b({},n),{display:b({},n.display),info:i,meta:r}),o)),i.dimension===2&&i.isFt&&e.push(Lg(s,S(b({},n),{display:b({},n.display),info:i}),o))}async function wr(e=[],t={}){var s;const n=[];let o=[];for(let i of e)((s=i==null?void 0:i.source)==null?void 0:s.jcampURL)!=null?o.push(Bg(n,i.source.jcampURL,i,t)):Yg(n,i,t);return await Promise.all(o),n}async function Za(e,t,n){const o=[];let i=await hp(t,{xy:!0,noContours:!0,keepOriginal:!0});for(let r of i){let{info:l,dependentVariables:a}=r;l.dimension===1?a[0].components&&o.push(vg(r,S(b({},e),{display:b({},e.display)}),n)):l.dimension===2&&l.isFt&&o.push(Fg(r,S(b({},e),{info:l,display:b({},e.display)}),n))}return o}function Wg(e,t){const n=[];for(const o of e)Gg(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function Ua(e,t){const n=[];for(const o of e)Wa(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function Zg(e){const{activeTab:t,verticalAlign:{align:n}}=e;return b({activeTab:t},e.displayerMode===B.DM_1D?{verticalAlign:n}:{})}function Er(e,t="DATA_SOURCE"){const{data:n,molecules:o,correlations:s,multipleAnalysis:i,toolOptions:{data:{exclusionZones:r}}}=e||{data:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:{}},l=n.map(p=>p.info.dimension===1?Ug(p,t):Ig(p,t)),a=Zg(e),u=o.map(p=>jg(p));return{spectra:l,molecules:u,correlations:s,multipleAnalysis:i,exclusionZones:r,version:Ya,preferences:a}}function Ug(e,t){return S(b({id:e.id,display:e.display},t===yt.ROW_DATA||t===yt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL,jcampSpectrumIndex:e.source.jcampSpectrumIndex}}),{peaks:e.peaks,integrals:e.integrals,ranges:e.ranges,filters:e.filters})}const Ka={name:"",frequency:400,"1d":{"1H":{from:-1,to:12},"13C":{from:-5,to:220},nbPoints:2**17,lineWidth:1},"2d":{nbPoints:{x:1024,y:1024}},spectra:{proton:!0,carbon:!0,cosy:!0,hsqc:!0,hmbc:!0}},qa=[{key:1,value:60,label:"60 MHz"},{key:2,value:100,label:"100 MHz"},{key:3,value:200,label:"200 MHz"},{key:4,value:300,label:"300 MHz"},{key:5,value:400,label:"400 MHz"},{key:6,value:500,label:"500 MHz"},{key:7,value:600,label:"600 MHz"},{key:8,value:800,label:"800 MHz"},{key:9,value:1e3,label:"1000 MHz"},{key:10,value:1200,label:"1200 MHz"}],Kg="https://nmr-prediction.service.zakodium.com";async function qg(e){const t=Bt.Molecule.fromMolfile(e);return gp(t,{predictOptions:{C:{webserviceURL:`${Kg}/v1/predict/carbon`}}})}function Jg(e,t,n){const o=[];for(const s in e)if(t.spectra[s]){const i=e[s];switch(s){case"proton":case"carbon":{const r=Qg({spectrum:i,inputOptions:t,experiment:s,color:n});o.push(r);break}case"cosy":case"hsqc":case"hmbc":{const r=tx({spectrum:i,inputOptions:t,experiment:s,color:n});o.push(r);break}}}return o}function Qg(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,ranges:r,nucleus:l}=t,{name:a,"1d":{nbPoints:u},frequency:p}=n,h=Ja(l,p),{x:m,y:g}=xp(i,S(b({},n["1d"][l]),{frequency:h,nbPoints:u})),x=at({data:{x:m,im:null,re:g},display:{name:a,color:s},info:{nucleus:l,originFrequency:h,baseFrequency:h,pulseSequence:"prediction",solvent:"",experiment:o,isFt:!0}},[]);return x.ranges.values=vn(r,x),kn(x),x}function ex(e){return e.reduce((t,n)=>{const r=n,{signals:o}=r,s=G(r,["signals"]),i=o.reduce((l,a)=>{const g=a,{x:u,y:p,id:h}=g,m=G(g,["x","y","id"]);return l.push(b({id:h||U(),kind:"signal",x:S(b({},u),{originDelta:u.delta||0}),y:S(b({},p),{originDelta:p.delta||0})},m)),l},[]);return t.push(S(b({id:U()},s),{signals:i,kind:Ze.signal})),t},[])}function tx(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,zones:r,nuclei:l}=t,a=n["1d"][l[0]],u=n["1d"][l[1]],p=nx(l),h=Ja(l,n.frequency),m=bp(i,{from:{x:a.from,y:u.from},to:{x:a.to,y:u.to},nbPoints:{x:n["2d"].nbPoints.x,y:n["2d"].nbPoints.y},width:p,factor:3}),g=no({data:S(b({},m),{noise:.01}),display:{name:n.name,positiveColor:s,negativeColor:Ia(s,40)},info:{nucleus:l,originFrequency:h,baseFrequency:h,pulseSequence:o,experiment:"2d"}},[]);return g.zones.values=ex(r),g}function nx(e){return e[0]===e[1]?.02:{x:.02,y:.2133}}function Ja(e,t){return typeof e=="string"?pr(e,{nucleus:"1H",frequency:t}):e[0]===e[1]?`${t},${t}`:`${t},${pr(e[1],{nucleus:e[0],frequency:t})}`}const yi=[{key:"outOfLimit",color:"red"},{key:"ambiguousAttachment",color:"orange"},{key:"notAttached",color:"blue"},{key:"incomplete",color:"red"}],ox=yi.map(e=>e.key),Qa={C:.25,H:.02,N:.25,F:.25,Si:.25,P:.25},F={zoom:{id:"zoom",label:"Zoom",hasOptionPanel:!1,isFilter:!1},peakPicking:{id:"peakPicking",label:"Peaks Picking",hasOptionPanel:!0,isFilter:!1},integral:{id:"integral",label:"integral Tool",hasOptionPanel:!1,isFilter:!1},zone2D:{id:"zone2D",label:"Zone Tool",hasOptionPanel:!0,isFilter:!1},slicingTool:{id:"slicingTool",label:"Slicing Tool",hasOptionPanel:!1,isFilter:!1},HMove:{id:"HMove",label:"Move spectrum horizontally",hasOptionPanel:!1,isFilter:!1},equalizerTool:{id:"equalizerTool",label:"Equalizer Tool",hasOptionPanel:!1,isFilter:!1},rangesPicking:{id:"rangesPicking",label:"Ranges Picking",hasOptionPanel:!0,isFilter:!1},zeroFilling:{id:ui,label:Aa,hasOptionPanel:!0,isFilter:!0},phaseCorrection:{id:Ht,label:ka,hasOptionPanel:!0,isFilter:!0},baseLineCorrection:{id:"baseLineCorrection",label:"baseline correction",hasOptionPanel:!0,isFilter:!0},generalSelector:{id:"generalSelector",label:"range general selector",hasOptionPanel:!1,isFilter:!1},editRange:{id:"editRange",label:"edit range",hasOptionPanel:!1,isFilter:!1},multipleSpectraAnalysis:{id:"multipleSpectraAnalysis",label:"Multiple Spectra Analysis",hasOptionPanel:!1,isFilter:!1},exclusionZones:{id:"exclusionZones",label:"Exclusion Zones",hasOptionPanel:!1,isFilter:!1},databaseRangesSelection:{id:"databaseRangesSelection",label:"Filter Database",hasOptionPanel:!1,isFilter:!1}};function sx(e,t){let n=[];const{baseFrequency:o=500}=t;for(const s of e){const{jCoupling:i,delta:r,diaIDs:l=[],multiplicity:a,integration:u}=s,p=ix({delta:r,js:i,frequency:o});if(i&&a&&i.length===a.length){i.sort((h,m)=>m-h);for(let h=0;h<i.length;h++)i[h].multiplicity=a[h]}n.push(S(b({},p),{integration:u,signals:[{js:i,delta:r,diaIDs:l,multiplicity:a}]}))}t.ranges.values=vn(rx(n),t)}function ix(e={}){const{delta:t,js:n=[],frequency:o}=e;let s=.5;for(let i of n)s+=i.coupling;return s/=o,{from:t-s,to:t+s}}function rx(e){e.sort((t,n)=>t.from-n.from);for(let t=0;t<e.length-1;t++)e[t].to>e[t+1].from&&(e[t].to=Math.max(e[t+1].to,e[t].to),e[t].signals=e[t].signals.concat(e[t+1].signals),e[t].integration+=e[t+1].integration,e.splice(t+1,1),t--);return e}const lx=["y","x"];function ax(e,t){let n=[];const o=oo(t),{baseFrequency:s}=t.info,i={x:s[0],y:s[1]};for(const r of e){let l={x:{},y:{},id:U(),kind:"signal"},a={id:U(),kind:"signal",peaks:[]},u={x:10,y:10};for(let p of lx){let{coupling:h=[],delta:m,diaIDs:g=[]}=r[p];for(let x of h)u[p]+=x.coupling;if(r.activeCoupling){const{activeCoupling:x=[]}=r;for(let y of x)u[p]+=y.coupling}u[p]/=i[p],l[p]={from:m-u[p],to:m+u[p]},a[p]={delta:m,diaIDs:g,originDelta:m-o[`${p}Shift`]}}n.push(S(b({},l),{signals:[a]}))}t.zones.values=n}async function cx(e,t){const o=await new un().loadAsync(e.binary),s=await dx(o.files),i=await yp.toJSON({sdf:s[0],zipFiles:o.files});let{spectra:r,molecules:l=[]}=i,a={spectra:[],molecules:l};for(const u of r){const{file:p,jcampURL:h}=u.source;let m=await ux(p,{jcampURL:h},t)||[];for(const g of m){const{info:x}=g;x.isFid||(x.dimension>1?ax(u.signals,g):sx(u.signals,g))}a.spectra.push(...m)}return a}async function ux(e,t={},n={}){const{xy:o=!0,noContours:s=!0,keepOriginal:i=!0,jcampURL:r}=t;switch(e.extension){case"jdx":case"dx":return Ua([e],n);case"zip":return Za({xy:o,noContours:s,keepOriginal:i},e.binary,n);default:if(!r)return}}async function dx(e){let t=[];for(const n in e){const o=n.split("/");if(/^[^.].+sdf$/.exec(o[o.length-1])){const s=o[o.length-1].replace(/\.sdf/,""),i=o.slice(0,o.length-1).join("/"),r=await e[n].async("string");let l=vp(`${r}`,{mixedEOL:!0});l.filename=s,l.root=i!==""?`${i}/`:"",t.push(l)}}return t}function Pe(e,t,n){const o=e.find(s=>s.id===t);if(!(o&&n===!0&&o.display.isVisible===!1))return o}function ec(e,t){for(let n of e.ranges.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function Xn(e,t){for(let n of e.zones.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function vi(e,t){for(let n of e.ranges.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function _o(e,t){for(let n of e.zones.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function Ci(e,t,n,o){const s=Pe(e,t,o);if(s){if(s.info.dimension===1){const i=vi(s,n);if(i)return i.id}else if(s.info.dimension===2){const i=_o(s,n);if(i)return i.id}}}function Vt(e,t=null){const{width:n,margin:o,xDomains:s,xDomain:i,mode:r}=e,l=r==="RTL"?[n-o.right,o.left]:[o.left,n-o.right];return Je(t?s[t]:i,l)}function Fo(e,t=null){const{height:n,margin:o,verticalAlign:s,yDomain:i,yDomains:r}=e,l=s.align==="center"?(n-30)/2:n-o.bottom-30;let a=[];return t===null||r[t]===void 0?a=[0,i[1]]:a=[0,r[t][1]],Je(a,[l,o.top])}function px(e){const{height:t,margin:n,verticalAlign:o,integralsYDomains:s,activeSpectrum:i}=e,r=o.align==="center"?t/2:t;return Je((i==null?void 0:i.id)&&s&&s[i==null?void 0:i.id]?s[i==null?void 0:i.id]:[0,0],[r*.3,n.top+r*.1])}function Gt(e,t){const{startX:n,endX:o}=t,s=Vt(e),i=s.invert(n),r=s.invert(o),l=[0,0];return i>r?(l[0]=r,l[1]=i):(l[0]=i,l[1]=r),l}function Tt(e){return typeof e=="string"?e:e.join(",")}function hx(e){let t=e.data.filter(n=>Tt(n.info.nucleus)===e.activeTab&&n.info.dimension===1);if(e.activeSpectrum){const n=t.findIndex(o=>{var s;return o.id===((s=e.activeSpectrum)==null?void 0:s.id)});if(n!==-1){const o=t[n].info.isFid||!1;t=t.filter(s=>s.info.isFid===o)}}else t=t.filter(n=>n.info.isFid===!1);return t}function tc(e){let t=[],n=[],o={},s={};const i=hx(e);try{t=i.reduce((r,l)=>{const{display:a,data:u}=l,p=[u.x[0],u.x[u.x.length-1]];return s[l.id]=p,a.isVisible&&(r=r.concat(p)),r},[]),n=i.reduce((r,l)=>{const{display:a}=l,u=Cn(l),p=bt(u.y);return o[l.id]=p,a.isVisible&&(r=r.concat(p)),r},[])}catch(r){console.log(r)}return{xDomain:bt(t),yDomain:bt(n),yDomains:o,xDomains:s}}function fx(e){let t=[],n=[],o={},s={};const{activeTab:i,tabActiveSpectrum:r,data:l}=e,a=i.split(",");try{t=l.reduce((h,m)=>{var g;return Xs(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minX,m.data.maxX])),h},[]),n=l.reduce((h,m)=>{var g;return Xs(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minY,m.data.maxY])),h},[])}catch(h){console.log(h)}const u=a.map(h=>{var m;return(m=r[h])==null?void 0:m.id}),p=l.reduce((h,m)=>u.includes(m.id)&&m.info.dimension===1?h.concat(m):h.concat([]),[]);try{s=p.reduce((h,m)=>{const{x:g}=m.data,x=[g[0],g[g.length-1]];return h[m.id]=x,h},{}),o=p.reduce((h,m)=>{const g=bt(m.data.re);return h[m.id]=g,h},{})}catch(h){console.log(h)}return{xDomain:bt(t),yDomain:bt(n),yDomains:o,xDomains:s}}function se(e,t){const{yDomain:n={isChanged:!0,isShared:!0}}=t||{};let o;e.activeTab&&(e.displayerMode===B.DM_1D?o=tc(e):o=fx(e),e.xDomain=o.xDomain,e.xDomains=o.xDomains,e.originDomain=o,n.isChanged?(e.yDomain=o.yDomain,e.displayerMode===B.DM_1D&&n.isShared?e.yDomains=Object.keys(o.yDomains).reduce((s,i)=>(s[i]=o.yDomain,s),{}):e.yDomains=o.yDomains):e.originDomain=S(b({},e.originDomain),{xDomain:o.xDomain,xDomains:o.xDomains}))}function mx(e){const{integrals:t,ranges:n}=e;let o=Number.NEGATIVE_INFINITY;for(const s of t.values)o=Math.max(o,s.absolute);for(const s of n.values)o=Math.max(o,s.absolute);return[0,o]}function ts(e,t){var n;for(const o of Array.isArray(t)?t:[t])((n=o==null?void 0:o.info)==null?void 0:n.dimension)===1&&(e.integralsYDomains[o.id]=mx(o))}function gx(e,t){e.originDomain=t}function xx(e,t){e.xDomain=t}function bx(e,t){e.yDomain=t}function yx(e){const{xDomain:t,yDomain:n,xDomains:o,yDomains:s}=e.originDomain;e.xDomain=t,e.yDomain=n,e.xDomains=o,e.yDomains=s}function tt(e){var n;const t=e.data.filter(o=>e.xDomains[o.id]&&Tt(o.info.nucleus)===e.activeTab);e.mode=(n=t[0])!=null&&n.info.isFid?"LTR":"RTL"}function vx(e,t){const{activeSpectrum:n,data:o,xDomain:s,molecules:i,activeTab:r}=e;if(n!=null&&n.id){const{index:l}=n,a=o[l],[u,p]=s,h=We(a.data.x,u),m=We(a.data.x,p),g=b({factorStd:8,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},t);Ha(a,S(b({},g),{windowFromIndex:h,windowToIndex:m,molecules:i,nucleus:r})),Dt(e),ts(e,a)}}function Cx(e){const t={factorStd:8,minMaxRatio:.05,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},{data:n,activeTab:o,molecules:s}=e;for(const i of n)i.info.dimension===1&&(Ha(i,{peakPicking:t,molecules:s,nucleus:o}),Dt(e))}function io(e,t,n){return e.data[t].ranges.values.findIndex(o=>o.id===n)}function kx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{id:s=null,assignmentData:i}=t.payload.data,r=e.data[o];if(s){const l=io(e,o,s);zt(i,[r.ranges.values[l]]),r.ranges.values.splice(l,1)}else zt(i,r.ranges.values),r.ranges.values=[];At(r),Dt(e)}}function Sx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:r}=t.payload.data,l=io(n,s,i.id),a=e.data[s].ranges.values[l];a!=null&&a.signals&&(a.signals[i.tableMetaInfo.signalIndex].kind=r,a.kind=Jn.includes(r)?Ze.signal:Ze.mixed,At(e.data[s]),Dt(e))}}function wx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{editedRowData:i,assignmentData:r}=t.payload;e.toolOptions.data.tempRange=null;const l=zn(i);delete l.tableMetaInfo,delete l.rowKey,zt(r,[l]);const a=io(n,s,l.id);e.data[s].ranges.values[a]=l,At(e.data[s]),Dt(e)}}function nc(e,t){const{spectrum:n,range:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:r=!0}=t.payload;if(n&&o){const l=e.data.find(h=>h.id===n.id),a=l.ranges.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),p=zn(ze(o),"signal",{signalIndex:u});r===!0&&zt(i,[{signals:[s]}]),p.signals.splice(u,1),l.ranges.values[a]=p,p.signals.length===0&&(zt(i,[p]),l.ranges.values.splice(a,1)),Dt(e)}}function oc(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{assignmentData:s,rangeData:i=null,signalIndex:r=-1}=t.payload;if(i){const l=io(e,o,i.id),a=ze(e.data[o].ranges.values[l]);let u={},p=i.id;i&&r===-1?u=zn(a,"range"):(u=zn(a,"signal",{signalIndex:r}),p=i.signals[r].id),zt(s,[{id:p}]),e.data[o].ranges.values[l]=u}else{const l=e.data[o].ranges.values.map(a=>zn(a));e.data[o].ranges.values=l,zt(s,l)}}}function Ex(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{rangeData:s,diaIDs:i,signalIndex:r,nbAtoms:l}=t.payload,a=(h,m=0)=>h+m,u=io(e,o,s.id),p=e.data[o].ranges.values[u];r===void 0?(p.diaIDs=i,p.nbAtoms=a(l,p.nbAtoms)):(p.signals[r].diaIDs=i,p.signals[r].nbAtoms=a(l,p.signals[r].nbAtoms))}}function Ax(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum;dg(e.data[o],t.data)}}function Tx(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o!=null&&o.id){const{index:i}=o,r=n[i];xi(r.ranges,{options:t,nucleus:s}),At(r,!0)}}function Dx(e,t){const{startX:n,endX:o}=t.payload,{activeSpectrum:s,activeTab:i,molecules:r}=e,l=Gt(e,{startX:n,endX:o});if(s!=null&&s.id){const{index:a}=s,[u,p]=l;ug(e.data[a],{from:u,to:p,nucleus:i,molecules:r}),Dt(e),ts(e,e.data[a])}}function Ix(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;pg(e.data[s],n)}}function Px(e,t){var i;const{rangeID:n,signalID:o,value:s}=t.payload;if((i=e.activeSpectrum)!=null&&i.id){const{index:r}=e.activeSpectrum,l=hg(e.data[r],{rangeID:n,signalID:o,newSignalValue:s});Te(e.data[r],[{name:eo,options:l}]),Sn(e.data[r]),Dt(e),se(e)}}function Dt(e){ns(e)}function Rx(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;e.data[s].ranges.options.isSumConstant=!n}}function Mx(e,t){e.toolOptions.data.tempRange=t.payload.tempRange}function Nx(e){e.toolOptions.data.showMultiplicityTrees=!e.toolOptions.data.showMultiplicityTrees}function _x(e){e.toolOptions.data.showRangesIntegrals=!e.toolOptions.data.showRangesIntegrals}function Fx(e){e.toolOptions.data.showJGraph=!e.toolOptions.data.showJGraph}function Lx(e,t){return e.signals?e.signals.reduce((n,o)=>o[t].nbAtoms?n+o[t].nbAtoms:n,0):0}function ws(e,t){e[t].nbAtoms=Lx(e,t),e[t].nbAtoms===0&&delete e[t].nbAtoms}function Ar(e,t){return delete e[t].diaIDs,delete e[t].nbAtoms,e.signals.forEach(n=>{delete n[t].diaIDs,delete n[t].nbAtoms}),e}function Ox(e){return e.kind===Ze.signal}function Lo(e,t,n,o){return t!==void 0&&o!==void 0?(t===!0?(delete e[o].diaIDs,delete e[o].nbAtoms):typeof n=="number"&&n!==-1&&e.signals[n]&&(delete e.signals[n][o].diaIDs,delete e.signals[n][o].nbAtoms),ws(e,o)):o!==void 0?(Ar(e,o),ws(e,o)):["x","y"].forEach(s=>{Ar(e,s),ws(e,s)}),e}function fn(e,t,n){const o=t.reduce((s,i)=>(i.id&&s.push(i.id),i.signals&&(s=s.concat(i.signals.map(r=>r.id,[]))),s),[]);n?e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:n}}):(e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"x"}}),e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"y"}}))}const Z={TOP_1D:"TOP_1D",LEFT_1D:"LEFT_1D",CENTER_2D:"CENTER_2D"};function $x({width:e,height:t,margin:n}){return{CENTER_2D:{startX:n.left,startY:n.top,endX:e-n.right,endY:t-n.bottom},TOP_1D:{startX:n.left,startY:0,endX:e-n.right,endY:n.top},LEFT_1D:{startX:0,startY:n.top,endX:n.left,endY:t-n.bottom}}}function on(e,t){for(const n of Object.keys(e))if(t.startX>=e[n].startX&&t.startX<=e[n].endX&&t.startY>=e[n].startY&&t.startY<=e[n].endY)return n;return null}function Ae(e){const{width:t,margin:n,xDomain:o}=e;return Je(o,[t-n.right,n.left])}function ye(e,t=!1){const{height:n,margin:o,yDomain:s}=e;return Je(s,t?[n-o.bottom,o.top]:[o.top,n-o.bottom])}function mn(e,t,n=10){return Je(e,[t-n,n])}function Hx(e,t){const{startX:n,startY:o,endX:s,endY:i}=t,r=Ae(e),l=ye(e),a=n*1e6>s*1e6?s:n,u=n*1e6>s*1e6?n:s,p=o*1e6>i*1e6?i:o,h=o*1e6>i*1e6?o:i,m=l.invert(p),g=r.invert(a),x=l.invert(h),y=r.invert(u);return{fromX:g,fromY:m,toX:y,toY:x}}function zx(e,t){e.toolOptions.data.zonesNoiseFactor=t.payload}function Vx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,s=Hx(e,t),i=e.data[o],r=Ng(oe(i),{selectedZone:s,thresholdFactor:e.toolOptions.data.zonesNoiseFactor,convolutionByFFT:!1});i.zones.values=i.zones.values.concat(r),pt(e)}}function jx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,[s,i]=e.xDomain,[r,l]=e.yDomain;t.selectedZone={fromX:s,toX:i,fromY:r,toY:l};const a=e.data[o],u=Xa(oe(a),t);a.zones.values=a.zones.values.concat(u),pt(e)}}function Bx(e){for(const t of e.data)if(t.info.dimension===2){const{minX:n,maxX:o,minY:s,maxY:i}=t.data,r={selectedZone:{fromX:n,toX:o,fromY:s,toY:i},thresholdFactor:1},l=Xa(oe(t),r);t.zones.values=t.zones.values.concat(l),pt(e)}}function Xx(e,t){var s;const{zoneID:n,signal:o}=t.payload;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum,{xShift:r,yShift:l}=Pg(e.data[i],n,o);let a=[];r!==0&&a.push({name:pi,options:r}),l!==0&&a.push({name:hi,options:l}),Te(e.data[i],a),so(e.data[i]),se(e),pt(e)}}function ro(e,t,n){return e.data[t].zones.values.findIndex(o=>o.id===n)}function Yx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:r}=t.payload,l=ro(n,s,i.id),a=e.data[s].zones.values[l];a.signals[i.tableMetaInfo.signalIndex].kind=r,a.kind=Jn.includes(r)?Ze.signal:Ze.mixed,pt(e)}}function Gx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{id:i,assignmentData:r}=t.payload;if(i){const l=e.data[s].zones.values.find(u=>u.id===i);fn(r,[l||{}]);const a=ro(n,s,i);e.data[s].zones.values.splice(a,1)}else fn(r,e.data[s].zones.values),e.data[s].zones.values=[];pt(e)}}function sc(e,t){const{spectrum:n,zone:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:r=!0}=t.payload;if(n&&o){const l=e.data.find(h=>h.id===n.id),a=l.zones.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),p=Lo(ze(o),!1,u,void 0);r===!0&&fn(i,[{signals:[s]}],void 0),p.signals.splice(u,1),l.zones.values[a]=p,p.signals.length===0&&(fn(i,[p]),l.zones.values.splice(a,1)),pt(e)}}function Wx(e,t){const{spectrum:n,zone:o,signal:s,pathLength:i}=t.payload;if(n&&o){const r=e.data.find(p=>p.id===n.id),l=r.zones.values.findIndex(p=>p.id===o.id),a=o.signals.findIndex(p=>p.id===s.id),u=Lo(ze(o),!1,a,void 0);u.signals[a].j=S(b({},u.signals[a].j),{pathLength:i}),r.zones.values[l]=u,pt(e)}}function ic(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{zoneData:i=null,assignmentData:r,isOnZoneLevel:l=void 0,signalIndex:a=-1,axis:u=void 0}=t.payload;if(i){const p=ro(n,s,i.id),h=ze(e.data[s].zones.values[p]),m=Lo(h,l,a,u);fn(r,[{id:i.signals[a].id}],u),e.data[s].zones.values[p]=m}else{const p=e.data[s].zones.values.map(h=>Lo(h));e.data[s].zones.values=p,fn(r,p)}}}function Zx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{zoneData:i,diaIDs:r,axis:l,signalIndex:a,nbAtoms:u}=t.payload,p=(g,x=0)=>g+x,h=ro(n,s,i.id),m=e.data[s].zones.values[h];a===void 0?(m[l].diaIDs=r,m[l].nbAtoms=p(u,m[l].nbAtoms)):(m.signals[a][l].diaIDs=r,m.signals[a][l].nbAtoms=p(u,m.signals[a][l].nbAtoms))}}function Ux(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{editedRowData:i}=t.payload;delete i.tableMetaInfo;const r=ro(n,s,i.id);e.data[s].zones.values[r]=i,i.signals&&i.signals.forEach(l=>{var a;Cp(e.correlations.values,l.id,(a=l.j)==null?void 0:a.pathLength)}),pt(e)}}function pt(e){ns(e)}function ns(e){const{data:t,correlations:n}=e;e.correlations=Kn(t,S(b({},n.options),{values:ze(n.values)}))}function Kx(e,t){const n=oe(e),{data:o,correlations:s}=n,{mf:i}=t;(s.options.mf===""||s.options.mf!==i)&&(e.correlations=Kn(o,S(b({},s.options),{mf:i,values:ze(s.values)})))}function qx(e,t){const n=oe(e),{data:o,correlations:s}=n,{tolerance:i}=t;e.correlations=Kn(o,S(b({},s.options),{tolerance:i,values:ze(s.values)}))}function Jx(e,t){const n=oe(e),{correlations:o}=n,{id:s,correlation:i,options:r}=t;e.correlations=Nl(o,s,i),r&&(e.correlations=S(b({},e.correlations),{options:b(b({},e.correlations.options),r)})),ns(e)}function Qx(e,t){const{correlations:n,options:o}=t,s=oe(e);let i=ze(s.correlations);n.forEach(r=>{i=Nl(i,r.id,r)}),e.correlations=i,o&&(e.correlations=S(b({},e.correlations),{options:b(b({},e.correlations.options),o)})),ns(e)}function eb(e,t){const{correlation:n,assignmentData:o}=t;n.link.forEach(s=>{const i=Pe(e.data,s.experimentID,!1);if(i){if(i.info.dimension===1){const r=vi(i,s.signal.id),l=ec(i,s.signal.id);nc(e,{payload:{spectrum:i,range:r,signal:l,assignmentData:o}})}else if(i.info.dimension===2){const r=_o(i,s.signal.id),l=Xn(i,s.signal.id);sc(e,{payload:{spectrum:i,zone:r,signal:l,assignmentData:o}})}}})}const Vn={HORIZONTAL:"HORIZONTAL",VERTICAL:"VERTICAL",STEP_HORIZONTAL:"STEP_HORIZONTAL",FULL:"FULL"};function fo(e,t,n={}){const{factor:o=1,invert:s=!1}=n,r=(Math.abs(e.deltaY)<100?e.deltaY*100:e.deltaY)*(s?-.001:.001)*o,l=r<0?-1/(r-1):1+r,[a,u]=t;return[a*l,u*l]}function Ot(e,t={}){const{height:n,margin:o,activeSpectrum:s}=e,{scale:i=1,spectrumID:r=null}=t;if(s===null&&r===null){const{shareYDomain:l,yDomain:a,yDomains:u}=e.originDomain;e.yDomains=Object.keys(e.yDomains).reduce((p,h)=>{const m=Je(l?a:u[h],[n-o.bottom,o.top]),[g,x]=l?a:u[h],k=Math.max(Math.abs(x),Math.abs(g))===x?0:g,C=hr.translate(0,(Math.sign(k)>=0,m(k))).scale(i).translate(0,-m(0)).rescaleY(m).domain();return p[h]=C,p},{})}else{const l=r||(s==null?void 0:s.id);if(l){const a=Je(e.originDomain.yDomains[l],[n-o.bottom,o.top]),p=hr.translate(0,a(0)).scale(i).translate(0,-a(0)).rescaleY(a).domain();e.yDomains=S(b({},e.yDomains),{[l]:p})}}}function tb(e,t){const{ranges:n,info:o}=t.payload,s=Ma(n,o,e.usedColors);e.data.push(s),se(e,{yDomain:{isShared:!1}}),Ot(e,{scale:.8,spectrumID:s.id})}function nb(e,t){e.width=t}function ob(e,t,n){e.width=t,e.height=n}function ki(e,t){return t.filter(n=>Tt(n.info.nucleus)===e)}function os(e,t){!e[t]&&!Array.isArray(e[t])&&(e[t]=[]);const n=sb(e[t]),o=ib(e[t]),s=rb(e[t]),i=()=>e[t]=[];return{historyStack:e[t],push:n,pop:o,getLast:s,clear:i}}function sb(e){return t=>{e.push(t)}}function ib(e){return()=>e.pop()?e[e.length-1]:null}function rb(e){return()=>e.length===0?null:e[e.length-1]}function Tr(e){const t=e.split(",");return t.reduce((n,o)=>{const s=t.length===2?100:0;return n+=Number(o.replace(/\D/g,""))+s,n},0)}function ss(e){return(t,n=!1)=>{const o=t.reduce((s,i)=>{const r=i.info[e];return s[r]=(s[r]||[]).concat(i),s},{});return n?Object.keys(o).sort((s,i)=>Tr(s)-Tr(i)).reduce((s,i)=>(s[i]=o[i],s),{}):o}}function vt(e,t){var n;if(e.data&&e.data.length>0){let o=[];switch(["auto-check","stack"].includes(t.align||"")&&(o=e.data.filter(s=>s.info.nucleus===(t==null?void 0:t.activeTab)?t.activeTab:e.activeTab&&s.info.dimension===1)),t.align){case"auto-check":case"bottom":case"center":{if(t.align==="center"||t.align==="auto-check"&&((n=o[0])==null?void 0:n.info.isFid)&&!o.some(s=>s.info.isFid===!1)){const s=e.height/2;e.verticalAlign.align="center",e.verticalAlign.verticalShift=s}else e.verticalAlign.align="bottom",e.verticalAlign.verticalShift=za;break}case"stack":{e.verticalAlign.align="stack";const s=o.filter(i=>i.display.isVisible===!0);e.verticalAlign.verticalShift=Math.floor((e.height-e.margin.bottom)/(s.length+2));break}default:return}}}function lb(e,t){const{activeTab:n,data:o,activeSpectrum:s,zoom:i,xDomain:r,xDomains:l,yDomain:a,yDomains:u,originDomain:p,margin:h,displayerMode:m,tabActiveSpectrum:g}=e;if(n){const y=ss("nucleus")(o),k=m===B.DM_2D?y[n].reduce((v,C)=>(v[C.id]=C.processingController.getLevel(),v),{}):null;e.keysPreferences[t]={activeTab:n,activeSpectrum:s,displayerMode:m,tabActiveSpectrum:g,zoom:i,xDomain:r,xDomains:l,yDomain:a,yDomains:u,originDomain:p,level:k,margin:h,data:y[n].reduce((v,C)=>(v[C.id]={display:{color:C.display.color,isVisible:C.display.isVisible,isPeaksMarkersVisible:C.display.isPeaksMarkersVisible}},v),{})}}}function ab(e,t){const n=e.keysPreferences[t];if(n)if(e.activeTab=n.activeTab,e.data.forEach((o,s)=>{Tt(o.info.nucleus)===n.activeTab&&(e.data[s].display=Object.assign(ze(o.display),n.data[o.id].display))}),e.displayerMode=n.displayerMode,e.tabActiveSpectrum=n.tabActiveSpectrum,e.activeSpectrum=n.activeSpectrum,e.margin=n.margin,se(e),e.xDomain=n.xDomain,e.xDomains=n.xDomains,e.yDomain=n.yDomain,e.originDomain=n.originDomain,e.yDomains=n.yDomains,e.displayerMode===B.DM_2D)for(const o of Object.keys(n.level)){const{levelPositive:s,levelNegative:i}=n.level[o],r=e.data.findIndex(a=>a.id===o),l=e.data[r].processingController;l.setLevel(s,i),e.contours[o]=l.drawContours()}else e.zoom=n.zoom}function cb(e){const{activeSpectrum:t,data:n}=e;if(t){const o=n[t==null?void 0:t.index].data,s=kp(o.re),i=o.re.findIndex(r=>r===s);return{xValue:o.x[i],yValue:s,index:i}}}function ub(e,t){var o;const n=(o=e.activeSpectrum)==null?void 0:o.id;if(t===Ht){const s=is(e,Ht,{rollback:!0,searchBy:"name",returnCurrentDatum:!0});e.tempData=_l(e).data,s&&(e.tempData[s==null?void 0:s.index]=s==null?void 0:s.datum);const{xValue:i,index:r}=cb(e)||{xValue:0,index:0};e.toolOptions.data.pivot={value:i,index:r}}else if(e.toolOptions.selectedTool===F.phaseCorrection.id){e.toolOptions.data.activeFilterID=null;const s=e.data.findIndex(i=>i.id===n);e.data[s].data=e.tempData[s].data}}function Oo(e,t=!0){e.toolOptions.data.tempRange=null,Si(e,null),t&&(e.toolOptions.selectedTool=F.zoom.id),e.toolOptions.data.baseLineZones=[],e.toolOptions.data.activeFilterID&&is(e),e.tempData&&(e.tempData=null,se(e))}function Ue(e,t=!1){(e.toolOptions.selectedTool&&F[e.toolOptions.selectedTool].isFilter||!t)&&Oo(e)}function db(e,t){const{selectedTool:n}=t.payload;(e==null?void 0:e.data.length)>0&&(n?(n===F.editRange.id?e.toolOptions.data.tempRange=t.payload.tempRange:e.toolOptions.data.tempRange=null,n!==e.toolOptions.selectedTool&&Oo(e,!1),e.toolOptions.selectedTool=n,F[n].hasOptionPanel&&Si(e,n),F[n].isFilter&&ub(e,n)):Oo(e,!1),rc(e))}function Si(e,t){e.toolOptions.selectedOptionPanel=t}function pb(e){const t=["stack","center"].includes(e.verticalAlign.align)?"bottom":"center";vt(e,{align:t})}function hb(e){const t=e.verticalAlign.align==="stack"?"bottom":"stack";vt(e,{align:t})}function fb(e,{from:t,to:n}){const o=Vt(e);let s=o.invert(t);const i=o.invert(n);let r=[];s>i?r=[i,s]:r=[s,i];const l=e.toolOptions.data.baseLineZones.slice();l.push({id:U(),from:r[0],to:r[1]}),e.toolOptions.data.baseLineZones=l}function mb(e,t){const n=oe(e);e.toolOptions.data.baseLineZones=n.toolOptions.data.baseLineZones.baseLineZones.filter(o=>o.id!==t)}function gb(e){if(e.activeSpectrum!=null){const{index:t}=e.activeSpectrum;e.data[t].display.isRealSpectrumVisible=!e.data[t].display.isRealSpectrumVisible,se(e)}}function xb(e,t){const n=e.displayerMode===B.DM_2D,o=Vt(e),s=n?ye(e):Fo(e),i=o.invert(t.startX),r=o.invert(t.endX),l=s.invert(t.startY),a=s.invert(t.endY),u=i>r?[r,i]:[i,r],p=l>a?[a,l]:[l,a],h=os(e.zoom.history,e.activeTab);if(e.displayerMode===B.DM_2D){switch(t.trackID){case Z.CENTER_2D:e.xDomain=u,e.yDomain=p;break;case Z.TOP_1D:e.xDomain=u;break;case Z.LEFT_1D:e.yDomain=p;break}h&&h.push({xDomain:e.xDomain,yDomain:e.yDomain})}else e.xDomain=u,h&&h.push({xDomain:u,yDomain:p})}function bb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const s=Vt(e).invert(t),i=e.data[e.activeSpectrum.index],r=We(i.data.x,s);e.toolOptions.data.pivot={value:s,index:r}}}function yb(e,t){const n=e.tabActiveSpectrum[e.activeTab.split(",")[t]];return n!=null&&n.id?n.id:null}function vb(e,t){const{event:n,trackID:o,selectedTool:s}=t,{activeSpectrum:i,toolOptions:{data:{showRangesIntegrals:r}},displayerMode:l}=e;if(l===B.DM_2D){const a=o===Z.TOP_1D?0:o===Z.LEFT_1D?1:null;if(a!==null){const u=yb(e,a);if(u){const p=e.yDomains[u];e.yDomains[u]=fo(n,p)}}}else if(i!=null&&i.id)if((r||s===F.integral.id)&&n.shiftKey){const a=e.integralsYDomains[i==null?void 0:i.id];e.integralsYDomains[i==null?void 0:i.id]=fo(n,a)}else{const a=e.yDomains[i==null?void 0:i.id];e.yDomains[i==null?void 0:i.id]=fo(n,a)}else{const a=ki(e.activeTab,e.data);for(const u of a){const p=e.yDomains[u.id];e.yDomains[u.id]=fo(n,p)}}}function Cb(e,t){if((e==null?void 0:e.data.length)>0){const{zoomType:n,trackID:o}=t,s=os(e.zoom.history,e.activeTab);if(e.displayerMode===B.DM_1D)switch(n){case Vn.HORIZONTAL:{e.xDomain=e.originDomain.xDomain,s.clear();break}case Vn.VERTICAL:Ot(e,{scale:.8});break;case Vn.STEP_HORIZONTAL:{const i=s.pop();e.xDomain=i?i.xDomain:e.originDomain.xDomain,Ot(e,{scale:.8});break}default:{e.xDomain=e.originDomain.xDomain,Ot(e,{scale:.8});break}}else{const{xDomain:i,yDomain:r,yDomains:l}=e.originDomain;if([Z.TOP_1D,Z.LEFT_1D,Z.CENTER_2D].includes(o)){const a=s.pop();e.xDomain=a?a.xDomain:i,e.yDomain=a?a.yDomain:r}else s.clear(),e.xDomain=i,e.yDomain=r,e.yDomains=l}}}function Dr(e,t){const n=e.activeTab.split(","),o=e.tabActiveSpectrum[n[t]];return(o==null?void 0:o.id)&&!e.data[o.index].info.isFid}function rc(e){if(e.displayerMode===B.DM_2D&&e.toolOptions.selectedTool!==F.slicingTool.id){const t=Dr(e,0)?Rt["2D"].top:Rt["1D"].top,n=Dr(e,1)?Rt["2D"].left:Rt["1D"].left;e.margin=S(b({},Rt["2D"]),{top:t,left:n})}else e.toolOptions.selectedTool===F.slicingTool.id?e.margin=Rt["2D"]:e.displayerMode===B.DM_1D&&(e.margin=Rt["1D"])}function kb(e,t){if(e.displayerMode===B.DM_2D){let n={};for(const o of t[e.activeTab])n[o.id]=o.processingController.drawContours();e.contours=n}}function Sb(e,t){e.displayerMode=t&&t.some(n=>n.info.dimension===2)?B.DM_2D:B.DM_1D}function wb(e,t){let n=[];const o={},s=Object.keys(t).sort((i,r)=>i.split(",").length>r.split(",").length?-1:1);for(let i of s){const r=t[i],l=i.split(",").length;if(l===2&&n.push(i),r.length===1){const a=e.data.findIndex(u=>u.id===r[0].id);o[i]={id:r[0].id,index:a}}else{const a=t[i],u=a.length;if(u>=2){const p=a.filter(h=>!h.info.isFid);if(p.length>0&&(l===2||l===1&&u!==p.length)){const h=e.data.findIndex(m=>m.id===p[0].id);o[i]={id:p[0].id,index:h}}else o[i]=null}else o[i]=null}}return e.tabActiveSpectrum=o,n}function lc(e,t,n,o=!1){const s=Object.keys(t).sort((i,r)=>i.split(",").length>r.split(",").length?-1:1);if(JSON.stringify(s)!==JSON.stringify(Object.keys(e.tabActiveSpectrum))||o){const i=wb(e,t);i.length>0&&n==null?(e.activeSpectrum=e.tabActiveSpectrum[i[0]],e.activeTab=i[0]):(e.activeSpectrum=n&&e.tabActiveSpectrum[n],e.activeTab=n)}else e.activeTab=n,e.activeSpectrum=e.tabActiveSpectrum[n];Sb(e,t[e.activeTab]),rc(e)}function nt(e,t){const{tab:n=null,refreshActiveTab:o=!1,domainOptions:s={}}=t||{},r=ss("nucleus")(e.data),l=Object.keys(r),a=!n||!l.includes(n||"")?l[0]:n;lc(e,r,a,o),Oo(e),kb(e,r),se(e,s),ts(e,r[a]);const p=os(e.zoom.history,e.activeTab).getLast();p&&(e.xDomain=p.xDomain,e.yDomain=p.yDomain),tt(e)}function Eb(e,t){t&&nt(e,{tab:t})}function Ab(e,{deltaY:t,shiftKey:n}){var o;try{if((o=e.activeSpectrum)!=null&&o.id){const{index:s,id:i}=e.activeSpectrum,r=e.data[s].processingController;n?r.shiftWheel(t):r.wheel(t);const l=Object.freeze(r.drawContours());e.contours[i]=l}}catch(s){console.log(s)}}function Tb(e){e.displayerMode===B.DM_1D&&(e.originDomain.shareYDomain=!1,Ot(e,{scale:.8}))}function Db(e){e.originDomain.shareYDomain=!0,e.yDomains=e.originDomain.yDomains,e.yDomain=e.originDomain.yDomain,Ot(e,{scale:.8})}function Ib(e,t){var n,o;if((n=e.activeSpectrum)!=null&&n.id){const s=(o=e.activeSpectrum)==null?void 0:o.index;Te(e.data[s],[{name:eo,options:t}]),Sn(e.data[s]),Ue(e),se(e)}}function Pb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const o=e.activeSpectrum.index,s=[{name:ui,options:t.zeroFillingSize},{name:ba,options:t.lineBroadeningValue}];Te(e.data[o],s),Ue(e),se(e),tt(e)}}function Rb(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum;Te(e.data[n],[{name:ma,options:{}}]),Ue(e),vt(e,{align:"bottom"}),se(e,{yDomain:{isChanged:!0}}),tt(e)}}function Mb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{ph0:s,ph1:i}=t;Te(e.data[o],[{name:Ht,options:{ph0:s,ph1:i}}]),Ue(e),e.tempData=null,se(e)}}function Nb(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum;Te(e.data[n],[{name:sa,options:{}}]),Ue(e),e.tempData=null,se(e)}}function _b(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum,{ph0:o,ph1:s}=ra(e.data[n]);Te(e.data[n],[{name:Ht,options:{ph0:o,ph1:s}}]),Ue(e),e.tempData=null,se(e)}}function Fb(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,{data:{x:o,re:s,im:i},info:r}=e.data[n],{ph0:l,ph1:a}=t;let u={data:{x:o,re:s,im:i},info:r};Sa(u,{ph0:l,ph1:a});const{im:p,re:h}=u.data;e.tempData[n].data.im=p,e.tempData[n].data.re=h}}function Lb(e,t,n){var o,s,i;if((o=e.activeSpectrum)!=null&&o.id){const{index:r}=e.activeSpectrum;Ta(e.data[r],t,n),((s=e.data[r].info)==null?void 0:s.dimension)===1?Sn(e.data[r]):((i=e.data[r].info)==null?void 0:i.dimension)===2&&so(e.data[r]),Ue(e),se(e),tt(e);const a=os(e.zoom.history,e.activeTab).getLast();a&&(e.xDomain=a.xDomain,e.yDomain=a.yDomain)}}function Ob(e,t){var o,s,i;const n=t.payload.id;if((o=e.activeSpectrum)!=null&&o.id){const{index:r}=e.activeSpectrum;fi(e.data[r],n),((s=e.data[r].info)==null?void 0:s.dimension)===1?Sn(e.data[r]):((i=e.data[r].info)==null?void 0:i.dimension)===2&&so(e.data[r]),Ue(e),se(e),tt(e)}}function $b(e,t){var o,s;const n=t.payload.filterType;if(e.activeTab){for(const i of e.data)Tt((o=i==null?void 0:i.info)==null?void 0:o.nucleus)===e.activeTab&&(((s=i.filters)==null?void 0:s.filter(l=>l.name===n))||[]).forEach(l=>{var a,u;fi(i,l.id),((a=i.info)==null?void 0:a.dimension)===1?Sn(i):((u=i.info)==null?void 0:u.dimension)===2&&so(i)});Ue(e),se(e),tt(e)}}function Hb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum;Te(e.data[o],[{name:aa,options:b({zones:e.toolOptions.data.baseLineZones},t.options)}]),e.toolOptions.data.baseLineZones=[];const s=e.xDomain.slice();Ue(e),se(e),e.xDomain=s}}function is(e,t=null,n={},o=null){var p,h,m,g;const{updateDomain:s=!0,rollback:i=!1,searchBy:r="id",returnCurrentDatum:l=!1}=n;let a=null;const u=o||e.activeSpectrum;if(u!=null&&u.id){const x=u.index,y=e.data[x];if(t&&e.toolOptions.data.activeFilterID!==t){const k=y.filters.findIndex(C=>C[r]===t);let v=[];if(k!==-1&&(v=y.filters.slice(0,i?k:k+1),v.length>1?e.toolOptions.data.activeFilterID=(p=y.filters[i?k-1:k])==null?void 0:p.id:e.toolOptions.data.activeFilterID=null,hn(y,v),l)){const{name:C,value:E}=y.filters[k],T=_l(e).data[x];((h=T.info)==null?void 0:h.dimension)===1&&Te(T,[{name:C,options:E}]),a={datum:T,index:x}}}else e.toolOptions.data.activeFilterID=null,hn(y);((m=y.info)==null?void 0:m.dimension)===1?Sn(y):((g=y.info)==null?void 0:g.dimension)===2&&so(y),s&&(se(e),tt(e))}if(l)return a}function zb(e,t){is(e,t.id)}function Vb(e,t){var o;const n=ki(e.activeTab,e.data);if(n&&n.length>0&&Array.isArray(t.payload)){const s=((o=n[0].filters.find(i=>i.name===Qn))==null?void 0:o.value)||[];for(const i of n){const r=t.payload.map(l=>l.name===Bn?S(b({},l),{options:S(b({},l.options),{exclusions:s})}):l);Te(i,r)}}se(e)}function jb(e,t){var r,l;const{from:n,to:o}=t.payload,s=Gt(e,{startX:n,endX:o});let i;if((r=e.activeSpectrum)!=null&&r.id){const a=(l=e.activeSpectrum)==null?void 0:l.index;i=[e.data[a]]}else i=ki(e.activeTab,e.data);for(const a of i)Te(a,[{name:Qn,options:[{id:U(),from:s[0],to:s[1]}]}]);se(e)}function Bb(e,t){const{id:n,spectrumID:o}=t.payload,s=e.data.findIndex(r=>r.id===o),i=e.data[s].filters.find(r=>r.name===Qn);i&&(i.value.length===1?fi(e.data[s],i.id):(i.value=i.value.filter(r=>r.id!==n),hn(e.data[s])))}function Xb(e,t){e.overDisplayer=t.payload}function Yb(e){const{past:t,present:n,future:o}=e.history,s=t[t.length-1],i=t.slice(0,t.length-1),r=[n,...o],l=r.length!==0,a=t.length!==0,u=tc(e.data),p={past:i,present:s,future:r,hasRedo:l,hasUndo:a};e.xDomain=u.xDomain,e.yDomain=u.yDomain,e.originDomain=u,e.history=p}function Gb(e){const{history:t}=e,n=t.future.shift();t.past.push(t.present),t.present=n,t.hasUndo=!0,t.hasRedo=t.future.length>0,se(e.data)}function Wb(e,t){e.history={past:[],present:t,future:[],hasRedo:!1,hasUndo:!1}}function Zb(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o!=null&&o.id){const{index:i}=o,r=n[i];xi(r.integrals,{options:t,nucleus:s}),kn(r,!0)}}function Ub(e,t){const{startX:n,endX:o}=t,{data:s,molecules:i,activeTab:r,activeSpectrum:l}=e,[a,u]=Gt(e,{startX:n,endX:o});if(l!=null&&l.id){const p=s[l.index],{x:h,re:m}=p.data,g=Yt(p),x={id:U(),originFrom:a-g,originTo:u-g,from:a,to:u,absolute:bn({x:h,y:m},{from:a,to:u,reverse:!0}),kind:"signal"};p.integrals.values.push(x),p.integrals.options=gi(p.integrals.options,{molecules:i,nucleus:r}),kn(p),ts(e,p)}}function Kb(e,t){if(e.activeSpectrum){const n=oe(e),{index:o}=e.activeSpectrum,{integralID:s}=t,i=e.data[o];if(s==null)i.integrals.values=[];else{const r=n.data[o].integrals.values.findIndex(l=>l.id===s);i.integrals.values.splice(r,1),kn(i)}}}function Ir(e,t){var s;const n=oe(e),o=t.payload.data;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum,r=n.data[i],l=e.data[i],{x:a,re:u}=r.data,p=r.integrals.values.findIndex(h=>h.id===o.id);p!==-1&&(l.integrals.values[p]=S(b({originFrom:o.from,originTo:o.to},o),{absolute:bn({x:a,y:u},{from:o.from,to:o.to,reverse:!0})}),kn(l))}}function qb(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;ng(e.data[s],n)}}function Jb(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;e.data[s].integrals.options.isSumConstant=!n}}function Qb(e=[]){const t=[];for(const n of e){const s=Bt.Molecule.fromMolfile(n.molfile).getFragments();for(let i of s)t.push(No({molfile:i.toMolfileV3()}))}return t}function ac(e,t){let o=Bt.Molecule.fromMolfile(t).getFragments();for(let s of o)e.push(No({molfile:s.toMolfileV3()}))}function ey(e,t,n){let s=Bt.Molecule.fromMolfile(t).getFragments();if(s.length>1){e=e.filter(i=>i.key!==n);for(let i of s)e.push(No({molfile:i.toMolfileV3()}))}else if(s.length===1){const i=s[0],r=No({molfile:i.toMolfileV3(),key:n});let l=e.findIndex(a=>a.key===n);e.splice(l,1,r)}}const wi="INITIATE",ty="SAVE_DATA_AS_JSON",gn="LOAD_JSON_FILE",$o="LOAD_JCAMP_FILE",Yn="LOAD_NMREDATA_FILE",Ys="LOAD_MOL_FILE",Ho="LOAD_ZIP_FILE",Gs="LOAD_JDF_FILE",cc="ADD_PEAK",uc="ADD_PEAKS",rs="DELETE_PEAK_NOTATION",Ei="SHIFT_SPECTRUM",ls="SET_X_DOMAIN",Ai="SET_Y_DOMAIN",dc="SET_ORIGINAL_DOMAIN",pc="SET_WIDTH",Ti="SET_DIMENSIONS",lo="SET_SELECTED_TOOL",hc="SET_SELECTED_FILTER",fc="CHANGE_SPECTRUM_SETTING",xn="FULL_ZOOM_OUT",Gn="CHANGE_VISIBILITY",Di="CHANGE_PEAKS_MARKERS_VISIBILITY",zo="CHANGE_ACTIVE_SPECTRUM",mc="CHANGE_SPECTRUM_COLOR",gc="ADD_INTEGRAL",as="DELETE_INTEGRAL",Ii="TOGGLE_REAL_IMAGINARY_VISIBILITY",cs="SET_ZOOM",Pi="ADD_MOLECULE",Ri="SET_MOLECULE",xc="DELETE_MOLECULE",Ws="SET_CORRELATION",bc="SET_CORRELATIONS",yc="DELETE_CORRELATION",vc="SET_CORRELATIONS_MF",Cc="SET_CORRELATIONS_TOLERANCE",Mi="DELETE_SPECTRA",Ni="CHANGE_SPECTRUM_DISPLAY_VIEW_MODE",kc="RESIZE_INTEGRAL",us="BRUSH_END",Sc="RESET_X_DOMAIN",wc="ENABLE_FILTER",Ec="DELETE_FILTER",Ac="DELETE_SPECTRA_FILTER",Tc="APPLY_ZERO_FILLING_FILTER",Dc="APPLY_FFT_FILTER",_i="CALCULATE_MANUAL_PHASE_CORRECTION_FILTER",Ic="APPLY_MANUAL_PHASE_CORRECTION_FILTER",Pc="APPLY_AUTO_PHASE_CORRECTION_FILTER",Rc="APPLY_ABSOLUTE_FILTER",Fi="SET_VERTICAL_INDICATOR_X_POSITION",Mc="AUTO_PEAK_PICKING",Nc="AUTO_RANGES_DETECTION",_c="AUTO_ZONES_DETECTION",ds="DELETE_RANGE",Fc="DELETE_1D_SIGNAL",Lc="SET_SELECTED_OPTIONS_PANEL",Ct="SET_LOADING_FLAG",ct="RESET_SELECTED_TOOL",Li="SET_SPECTRUMS_VERTICAL_AlIGN",ny="SAVE_AS_SVG",Oc="CHANGE_INTEGRAL_DATA",Oi="SET_ACTIVE_TAB",$c="CHANGE_INTEGRAL_SUM",Hc="ADD_BASE_LINE_ZONE",zc="DELETE_BASE_LINE_ZONE",Vc="APPLY_BASE_LINE_CORRECTION_FILTER",Vo="SET_KEY_PREFERENCES",$i="APPLY_KEY_PREFERENCES",jc="RESIZE_RANGE",Bc="CHANGE_RANGE_SUM",Xc="ADD_RANGE",Yc="SET_2D_LEVEL",Gc="ADD_2D_ZONE",ps="DELETE_2D_ZONE",Wc="DELETE_2D_SIGNAL",Zc="SET_2D_SIGNAL_PATH_LENGTH",Uc="ADD_MISSING_PROJECTION",Kc="SET_FILTER_SNAPSHOT",qc="CHANGE_RANGE_RELATIVE",Jc="CHANGE_RANGE_SIGNAL_VALUE",Qc="CHANGE_RANGE_SIGNAL_KIND",eu="SAVE_EDITED_RANGE",tu="UNLINK_RANGE",nu="SET_DIAID_RANGE",ou="CHANGE_INTEGRAL_RELATIVE",su="ANALYZE_SPECTRA",Hi="DELETE_ANALYZE_SPECTRA_RANGE",iu="RESIZE_ANALYZE_SPECTRA_RANGE",ru="SET_ANALYZE_SPECTRA_COLUMNS",lu="FILTER_SPECTRA_COLUMN",au="ALIGN_SPECTRA",Zs="CHANGE_ZONE_SIGNAL_VALUE",cu="CHANGE_ZONE_SIGNAL_KIND",uu="SAVE_EDITED_ZONE",du="UNLINK_ZONE",pu="SET_DIAID_ZONE",hs="PREDICT_SPECTRA",hu="SET_SPECTRA_SAME_TOP",fu="RESET_SPECTRA_SCALE",jo="SET_MOUSE_OVER_DISPLAYER",mu="APPLY_MULTIPLE_SPECTRA_FILTER",gu="ADD_EXCLUSION_ZONE",xu="DELETE_EXCLUSION_ZONE",bu="CHANGE_RANGES_SUM_FLAG",yu="CHANGE_INTEGRALS_SUM_FLAG",vu="CHANGE_ZONES_NOISE_FACTOR",Cu="CHANGE_TEMP_RANGE",ku="SHOW_MULTIPLICTY_TREES",Su="SHOW_RANGES_INTEGRALS",wu="AUTO_RANGES_SPECTRA_PICKING",Eu="AUTO_ZONES_SPECTRA_PICKING",Au="GENERATE_SPECTRUM_FROM_PUBLICATION_STRING",Tu="RESURRECTING_SPECTRUM_FROM_RANGES",Du="SHOW_J_GRAPH";function oy(e,t){e.isLoading=t}function Iu(e,t){e.usedColors["1d"]=e.usedColors["1d"].concat(t["1d"]),e.usedColors["2d"]=e.usedColors["2d"].concat(t["2d"])}function zi(e,t){const{spectra:n,molecules:o,correlations:s,usedColors:i}=t||{spectra:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:[]};Iu(e,i),e.data=n,e.molecules=Qb(o),!s||Object.keys(s).length===0?e.correlations=Kn([],{tolerance:Qa}):e.correlations=sy(s)}function sy(e){return S(b({},e),{values:e.values.map(t=>{if(typeof t.hybridization=="string"){let n=[];if(t.hybridization.length>0){const o=t.hybridization.replaceAll("SP",""),s=Number(o);n.push(s)}t.hybridization=n}return t})})}function Pu(e,t){const n={verticalAlign:null},{verticalAlign:o=null}=t||n;o?vt(e,{align:o}):vt(e,{align:"auto-check"})}function iy(e,t){var o;zi(e,t.payload);const n=((o=t.payload)==null?void 0:o.preferences)||{};nt(e,{tab:(n==null?void 0:n.activeTab)||""}),Pu(e,t.payload),e.isLoading=!1}function ry(e,t){const{files:n}=t,o=Wg(n,e.usedColors);for(const s of o)e.data.push(s);nt(e),e.isLoading=!1}function ly(e,t){const{files:n}=t,o=Ua(n,e.usedColors);for(const s of o)e.data.push(s);nt(e),vt(e,{align:"auto-check"}),e.isLoading=!1}function ay(e,t){var s;const n=ji();zi(n,t.payload);const o=((s=t.payload)==null?void 0:s.preferences)||{};return nt(n,{tab:(o==null?void 0:o.activeTab)||""}),Pu(n,o),n.width=e.width,n.height=e.height,n.isLoading=!1,n.actionType=gn,n}function cy(e,t){const{files:n}=t;for(let o of n)ac(e.molecules,o.binary.toString());e.isLoading=!1}function uy(e,t){const{data:n,usedColors:o}=t.payload;e.data=e.data.concat(n),Iu(e,o),nt(e),vt(e,{align:"auto-check"}),e.isLoading=!1}function dy(e,t){const n=ji();return zi(n,t.payload),nt(n),vt(n,{align:"auto-check"}),n.isLoading=!1,n.width=e.width,n.height=e.height,n.actionType=Yn,n}function py(e,t){const n=e.molecules.length===0;ac(e.molecules,t);const o=e.molecules[0]||null;n&&o&&bi(e,o.key,o)}function hy(e,t,n){ey(e.molecules,t,n);const o=e.molecules.findIndex(s=>s.key===n);bi(e,n,o!==-1?e.molecules[o]:e.molecules[0]||null)}function fy(e,t){e.displayerMode===B.DM_1D&&oc(e,{payload:{assignmentData:t,rangeData:null}}),e.displayerMode===B.DM_2D&&ic(e,{payload:{assignmentData:t,zoneData:null}})}function my(e,t){const{key:n,assignmentData:o}=t.payload;fy(e,o);const s=e.molecules.findIndex(i=>i.key===n);e.molecules.splice(s,1),bi(e,n,e.molecules[0]||null)}function gy(e,t){const{data:n,options:o}=t.payload;if(!n)e.isLoading=!1;else{const s=mi(!1,e.usedColors["1d"]);for(const i of Jg(n,o,s))e.data.push(i),e.tabActiveSpectrum[Tt(i.info.nucleus)]={id:i.id,index:e.data.length-1};e.usedColors["1d"].push(s)}e.toolOptions.data.predictionIndex++,nt(e),e.isLoading=!1}function xy(e,t){var o;const n=oe(e);if(((o=e.activeSpectrum)==null?void 0:o.id)&&n){const{index:s}=e.activeSpectrum,i=10,r=t.x-i,l=t.x+i,[a,u]=Gt(e,{startX:r,endX:l}),p=Fa(n.data[s].data,{from:a,to:u}),h=Yt(e.data[s]);if(p){const m={id:U(),originalX:p.x-h,x:p.x,y:p.y,width:0};e.data[s].peaks.values.push(m)}}}function by(e,t){const n=oe(e);if(e.activeSpectrum){const{index:o}=e.activeSpectrum,s=n.data[o],{startX:i,endX:r}=t,[l,a]=Gt(e,{startX:i,endX:r});if(l!==a){const u=Fa(s.data,{from:l,to:a}),p=Yt(e.data[o]);if(u&&!s.peaks.values.some(h=>h.x===u.x)){const h={id:U(),originalX:u.x-p,x:u.x,y:u.y,width:0};e.data[o].peaks.values.push(h)}}}}function yy(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,o=oe(e);if(t==null)e.data[n].peaks.values=[];else{const s=o.data[n].peaks.values.findIndex(i=>i.id===t.id);e.data[n].peaks.values.splice(s,1)}}}function vy(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){e.toolOptions.selectedTool=F.zoom.id,e.toolOptions.selectedOptionPanel=null;const{index:o}=e.activeSpectrum,s=e.data[o],[i,r]=e.xDomain,l=We(s.data.x,i),a=We(s.data.x,r),u=og(e.data[o],S(b({},t),{windowFromIndex:l,windowToIndex:a}));s.peaks.values=s.peaks.values.concat(u)}}function Cy(e){const t="a".charCodeAt(0),o="z".charCodeAt(0)-t+1;let s="";for(;e>=0;)s=String.fromCharCode(e%o+t)+s,e=Math.floor(e/o)-1;return s}var Bo=(e=>(e.NORMAL="NORMAL",e.FORMULA="FORMULA",e))(Bo||{}),On=(e=>(e.RELATIVE="relative",e.ABSOLUTE="absolute",e.MIN="min",e.MAX="max",e))(On||{});function ky(e,t,n,o){const s=o||Cy(e[t].options.columnIndex).toUpperCase();return e[t].options.columns[s]=n,e[t].options.columnIndex++,s}function Sy(e,t){const{from:n,to:o,nucleus:s}=t;return e.reduce((i,r)=>{if(to(r)&&r.info.nucleus===s&&!r.info.isFid){const l=fg(r,{from:n,to:o});i.sum+=l.absolute,i.values.push(b({SID:r.id},l))}return i},{values:[],sum:0})}function Ru(e,t){e[t]===void 0&&(e[t]={options:{sum:100,code:null,columns:{},columnIndex:0},values:{}})}function wy(e,t,n,o){e[t].options.columns[n].valueKey=o,e[t].values=Vi(e,t)}function Ey(e,t,{columns:n,code:o}){Ru(e,t),e[t].options.code=o,e[t].options.columns=Object.values(n).reduce((r,l)=>{const a=b({},l);return delete a.tempKey,r[l.tempKey]=a,r},{});const{columns:s}=e[t].options;let i=Object.entries(e[t].values).reduce((r,[l,a])=>(r[l]=Object.keys(n).reduce((u,p)=>{const h=n[p].tempKey;return a[p]&&(u[h]=a[p]),u},{}),r),{});i=Object.entries(i).reduce((r,l)=>(r[l[0]]=Object.keys(s).reduce((a,u)=>{const p=s[u].type==="FORMULA";return a[u]=p?{colKey:u,value:Nu(s,i[l[0]],s[u].formula)}:S(b({},l[1][u]),{colKey:u}),a},{}),r),{}),e[t].values=i}function Ay(e,t){return Object.keys(t).reduce((n,o)=>(t[o].type==="FORMULA"&&(n[o]=S(b({colKey:o},e),{value:Nu(t,e,t[o].formula)})),n),{})}function Vi(e,t){const{columns:n}=e[t].options;return Object.entries(e[t].values).reduce((s,i)=>{const[r,l]=i;return s[r]=b(b({},l),Ay(l,n)),s},{})}function Mu(e,t,n){const{from:o,to:s,nucleus:i,columnKey:r=null}=n;Ru(t,i);const l=ky(t,i,{type:"NORMAL",valueKey:"relative",from:o,to:s,index:1},r),{sum:a}=t[i].options,{values:u,sum:p}=Sy(e,{from:o,to:s,nucleus:i}),h=V(t,`${i}.values`,{});let m=u.reduce((g,x)=>{const y=p>0?a/p:0;return g[x.SID]=S(b({},h[x.SID]),{[l]:S(b({colKey:l},x),{relative:Math.abs(x.absolute)*y})}),g},{});t[i].values=m,t[i].values=Vi(t,i)}function Ty(e,t,n){const o=Object.entries(e[n].values).reduce((a,u)=>(delete u[1][t],u[1]&&Object.keys(u[1]).length>0&&(a[u[0]]=u[1]),a),{}),l=e[n].options.columns,{[t]:s}=l,i=G(l,[cr(t)]);Object.keys(e[n].options.columns).length===1&&(e[n].options.columnIndex=0),e[n].options.columns=i,e[n].values=o,e[n].values=Vi(e,n)}function Nu(e,t,n=""){const o=n.split(/\+|-|\*|\/|%|\(|\)/),s=[];for(const l of o){const a=l.trim();e[a]&&s.push(a)}const i=s.map(l=>t[l]?t[l][e[l].valueKey]:null);let r;try{r=new Function(...s,`return ${n}`)(...i)}catch(l){console.error(l),r=new Error(`Invalid Formula ( ${n} ) `)}return r}function Dy(e,t){if(e!=null&&e[t]){const{values:n,options:{columns:o}}=e[t];let s="";for(const i in o)s+=`${i}	`;s+=`
`;for(const i of Object.values(n)){for(const r in o)s+=`${i[r][o[r].valueKey]}	`;s+=`
`}return s}return null}function Iy(e,t){const[n,o]=Gt(e,t);Mu(e.data,e.spectraAnalysis,{from:n,to:o,nucleus:e.activeTab})}function Py(e,t){const{colKey:n}=t;Ty(e.spectraAnalysis,n,e.activeTab)}function Ry(e,t){const{columnKey:n,from:o,to:s}=t.payload;Mu(e.data,e.spectraAnalysis,{from:o,to:s,nucleus:e.activeTab,columnKey:n})}function My(e,t){const n=t.payload;Ey(e.spectraAnalysis,e.activeTab,n)}function Ny(e,t){const{columnKey:n,valueKey:o}=t.payload;wy(e.spectraAnalysis,e.activeTab,n,o)}function _u(e){return!(e.display.isPositiveVisible===!1&&e.display.isNegativeVisible===!1)}function Es(e,t){e.info.dimension===2?(e.display.isPositiveVisible=t,e.display.isNegativeVisible=t,e.display.isVisible=_u(e)):e.display.isVisible=t}function _y(e,t){if(Array.isArray(t.id)){const n=t.id;if(n.length===0)for(const o of e.data)Es(o,!1);else for(const o of e.data)n.includes(o.id)?Es(o,!0):Es(o,!1)}else{const n=e.data.findIndex(o=>o.id===t.id);e.data[n].display[t.key]=t.value,e.data[n].info.dimension===2&&(e.data[n].display.isVisible=_u(e.data[n]))}}function Fy(e,t){var n;for(let o of e.data)((n=o.info)==null?void 0:n.dimension)===1&&t.some(s=>s.id===o.id)?o.display.isPeaksMarkersVisible=!0:o.display.isPeaksMarkersVisible=!1}function Ly(e,t){let n=!1;const o=e.activeSpectrum;if(t){const s=e.data.findIndex(r=>r.id===t.id),i=e.data.findIndex(r=>{var l;return r.id===((l=e.activeSpectrum)==null?void 0:l.id)});if(s!==-1){const r=e.data[s];r.display.isVisible=!0,i!==-1?n=e.data[i].info.isFid!==r.info.isFid:n=r.info.isFid||!1}t=S(b({},t),{index:s}),e.activeSpectrum=t,e.tabActiveSpectrum[e.activeTab]=t}else{if(o){const s=e.data.findIndex(i=>i.id===o.id);n=e.data[s].info.isFid}else n=!1;e.activeSpectrum=null,e.tabActiveSpectrum[e.activeTab]=null}F[e.toolOptions.selectedTool].isFilter&&(e.toolOptions.selectedTool=F.zoom.id,e.toolOptions.data.baseLineZones=[],e.toolOptions.selectedOptionPanel=null,e.tempData=null),e.toolOptions.data.activeFilterID?is(e,null,{},o):n&&(se(e),tt(e))}function Oy(e,{id:t,display:n}){const s=oe(e).data.findIndex(i=>i.id===t);s!==-1&&(e.data[s].display=n)}function $y(e,{id:t,color:n,key:o}){const i=oe(e).data.findIndex(r=>r.id===t);i!==-1&&(e.data[i].display[o]=n)}function Hy(e,t){const n=oe(e);if(t.id){const o=n.data.findIndex(s=>s.id===t.id);e.data.splice(o,1)}else e.data=[];nt(e,{tab:e.activeTab,refreshActiveTab:!0})}function zy(e,t){var s;const n=oe(e),{nucleus:o}=t;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum;for(let a of o){const u=Sg(n.data[i],a,e.usedColors);e.data.push(u)}const l=ss("nucleus")(e.data);lc(e,l,e.activeTab,!0),se(e),tt(e)}}function Vy(e,t){var n,o;if(e.data&&e.data.length>0){for(let s of e.data)if(((n=s.info)==null?void 0:n.dimension)===1&&s.info.nucleus===e.activeTab&&!((o=s.info)!=null&&o.isFid)){const i=eg(s,b({},t.payload));Te(s,[{name:eo,options:i}])}}se(e),tt(e)}function jy(e,t){const n=t.payload.publicationText,o=Jm(n,e.usedColors);e.data.push(o),nt(e),Ot(e,{scale:.8,spectrumID:o.id})}const By="undo",Xy="redo",Yy="reset",ji=()=>({actionType:"",data:[],contours:{},tempData:null,xDomain:[],yDomain:[],yDomains:{},xDomains:{},originDomain:{xDomain:[],yDomain:[],xDomains:{},yDomains:{},shareYDomain:!1},integralsYDomains:{},activeTab:"",width:0,height:0,margin:{top:10,right:20,bottom:70,left:0},activeSpectrum:null,mode:"RTL",molecules:[],verticalAlign:{align:"bottom",verticalShift:za},history:{past:[],present:null,future:[],hasUndo:!1,hasRedo:!1},isLoading:!1,keysPreferences:{},displayerMode:B.DM_1D,tabActiveSpectrum:{},spectraAnalysis:{},correlations:{},displayerKey:"",zoom:{history:{}},overDisplayer:!1,toolOptions:{selectedTool:F.zoom.id,selectedOptionPanel:null,data:{baseLineZones:[],pivot:{value:0,index:0},zonesNoiseFactor:1,activeFilterID:null,tempRange:null,showMultiplicityTrees:!1,showRangesIntegrals:!0,showJGraph:!1,predictionIndex:0}},usedColors:{"1d":[],"2d":[]}}),Fu=ji();function Gy(e){const t=U(),n=Kn([],{tolerance:Qa});return S(b({},e),{correlations:n,displayerKey:t,history:{}})}function Wy(e){const t={"1d":[],"2d":[]};return n=>{switch(n.type){case wi:{if(n.payload){const o=Sr(n.payload),{spectra:s}=o,i=G(o,["spectra"]);wr(s,t).then(r=>{n.payload=S(b({spectra:r},i),{usedColors:t}),e(n)})}break}case gn:{const s=JSON.parse(n.files[0].binary.toString()),i=Sr(s);wr(i.spectra,t).then(r=>{n.payload=Object.assign(i,{spectra:r,usedColors:t}),e(n)});break}case Ho:{for(let s of n.files)Za({display:{name:s.name}},s.binary,t).then(i=>{n.payload={data:i,usedColors:t},e(n)});break}case Yn:{cx(n.file,t).then(s=>{n.payload=Object.assign(s,{usedColors:t}),e(n)});break}case hs:{const{mol:{molfile:s},options:i}=n.payload;qg(s).then(r=>{n.payload={data:r,options:i},e(n)},()=>{e(n)});break}default:n.usedColors=t,e(n);break}}}function Zy(e,t){switch([gn,Yn].includes(t.type)||(e.actionType=t.type),t.type){case wi:return iy(e,t);case Ct:return oy(e,t.isLoading);case gn:return ay(e,t);case $o:return ly(e,t);case Gs:return ry(e,t);case Ys:return cy(e,t);case Ho:return uy(e,t);case Yn:return dy(e,t);case cc:return xy(e,t.mouseCoordinates);case uc:return by(e,t);case rs:return yy(e,t.data);case gc:return Ub(e,t);case as:return Kb(e,t);case Oc:return Ir(e,t);case kc:return Ir(e,t);case $c:return Zb(e,t.value);case yu:return Jb(e,t);case ou:return qb(e,t);case dc:return gx(e,t.domain);case ls:return xx(e,t.xDomain);case Ai:return bx(e,t.yDomain);case pc:return nb(e,t.width);case Ti:return ob(e,t.width,t.height);case lo:return db(e,t);case ct:return Ue(e);case Lc:return Si(e,t.selectedOptionPanel);case xn:return Cb(e,t);case Ei:return Ib(e,t.shiftValue);case Tc:return Pb(e,t.value);case Dc:return Rb(e);case Ic:return Mb(e,t.value);case Pc:return _b(e);case Rc:return Nb(e);case _i:return Fb(e,t.value);case wc:return Lb(e,t.id,t.checked);case Ec:return Ob(e,t);case Ac:return $b(e,t);case Kc:return zb(e,t);case mu:return Vb(e,t);case gu:return jb(e,t);case xu:return Bb(e,t);case Gn:return _y(e,t);case Di:return Fy(e,t.data);case zo:return Ly(e,t.data);case mc:return $y(e,t.data);case fc:return Oy(e,t);case au:return Vy(e,t);case Mi:return Hy(e,t);case Uc:return zy(e,t);case Au:return jy(e,t);case Ii:return gb(e);case cs:return vb(e,t);case hu:return Tb(e);case fu:return Db(e);case Ni:return hb(e);case Pi:return py(e,t.molfile);case Ri:return hy(e,t.molfile,t.key);case xc:return my(e,t);case hs:return gy(e,t);case vc:return Kx(e,t.payload);case Cc:return qx(e,t.payload);case Ws:return Jx(e,t.payload);case bc:return Qx(e,t.payload);case yc:return eb(e,t.payload);case us:return xb(e,t);case Fi:return bb(e,t.position);case Li:return pb(e);case Mc:return vy(e,t.options);case _c:return jx(e,t.options);case vu:return zx(e,t);case Nc:return vx(e,t.options);case Xc:return Dx(e,t);case ds:return kx(e,t);case Fc:return nc(e,t);case jc:return Ax(e,t);case Bc:return Tx(e,t.value);case bu:return Rx(e,t);case qc:return Ix(e,t);case Jc:return Px(e,t);case Qc:return Sx(e,t);case eu:return wx(e,t);case tu:return oc(e,t);case nu:return Ex(e,t);case Cu:return Mx(e,t);case ku:return Nx(e);case Su:return _x(e);case wu:return Cx(e);case Du:return Fx(e);case Oi:return Eb(e,t.tab);case Hc:return fb(e,t.zone);case zc:return mb(e,t.id);case Vc:return Hb(e,t);case Vo:return lb(e,t.keyCode);case $i:return ab(e,t.keyCode);case Yc:return Ab(e,t);case Gc:return Vx(e,t);case ps:return Gx(e,t);case Wc:return sc(e,t);case Zc:return Wx(e,t);case Sc:return yx(e);case Zs:return Xx(e,t);case cu:return Yx(e,t);case du:return ic(e,t);case pu:return Zx(e,t);case Eu:return Bx(e);case uu:return Ux(e,t);case su:return Iy(e,t);case Hi:return Py(e,t);case iu:return Ry(e,t);case ru:return My(e,t);case lu:return Ny(e,t);case Tu:return tb(e,t);case By:return Yb(e);case Xy:return Gb(e);case Yy:return Wb(e,t);case jo:return Xb(e,t);default:return}}const Uy=Qs(Zy),Lu=c.exports.createContext(Fu),Ky=Lu.Provider;function $(){return c.exports.useContext(Lu)}const Ou=c.exports.createContext({}),qy=Ou.Provider;function Y(){return c.exports.useContext(Ou)}function Ce(e){const{data:t,activeSpectrum:n}=$();return c.exports.useMemo(()=>t&&n&&n.id&&t.find(s=>s.id===n.id)||e,[n,t,e])}function Jy(){}const $u=c.exports.createContext(Jy),Qy=$u.Provider;function Bi(){return c.exports.useContext($u)}const e0=N`
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
`;function Hu({isEmpty:e=!0,emptyText:t="Drag and drop here a JCAMP-DX, zipped Bruker folder, Jeol jdf or NMRium file",canOpenLoader:n=!0}){const o=Bi();return e?d("div",S(b({css:e0},n&&{onClick:o}),{children:d("p",{children:t})})):null}const t0=N`
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
`;function n0(){return w("div",{css:t0,children:[d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[d("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),d("path",{d:"M520.5 78.1z"})]})}),d("p",{children:"Loading ..."})]})}function zu(){return f(n0,{})}const Vu=c.exports.createContext(zu),o0=Vu.Provider;function ju({isLoading:e=!0,emptyText:t=void 0}){const{data:n}=$(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{let r=null;return e||(r=setTimeout(()=>{s(!0)},500)),()=>{clearTimeout(r)}},[e]);const i=c.exports.useContext(Vu);return _(c.exports.Fragment,{children:[e&&i(),o&&!e&&f(Hu,{isEmpty:n&&n.length===0,emptyText:t})]})}const s0={container:{transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",zoom:"100%"}},i0=[F.zoom.id,F.zeroFilling.id,F.peakPicking.id,F.integral.id,F.phaseCorrection.id,F.baseLineCorrection.id,F.rangesPicking.id,F.zone2D.id,F.slicingTool.id,F.editRange.id,F.multipleSpectraAnalysis.id,F.exclusionZones.id,F.databaseRangesSelection.id],Ie={X:1,Y:2,XY:3},r0={startX:0,startY:0};function Eo({brushType:e=Ie.XY,dimensionBorder:t=r0,width:n,height:o}){let{width:s,height:i,toolOptions:{selectedTool:r}}=$(),{startX:l,endX:a,startY:u,endY:p,step:h}=c.exports.useContext(Et);if(!i0.includes(r)||h!=="brushing"||!t||t.startX&&l<t.startX||t.startY&&u<t.startY||(t.endX&&Math.sign(a-l)===1?a>t.endX:a<t.startX)&&(t.endX&&t.endY&&Math.sign(p-u)===1?p>t.endY:p<t.startY))return null;s=n||s,i=o||i,a=t.endX&&a>t.endX?t.endX:t.startX&&a<t.startX?t.startX:a,p=t.endY&&p>t.endY?t.endY:t.startY&&p<t.startY?t.startY:p;const m=e===Ie.X||e===Ie.XY?(a-l)/s:1;l=e===Ie.X||e===Ie.XY?l:0;const g=e===Ie.Y||e===Ie.XY?(p-u)/i:1;return u=e===Ie.Y||e===Ie.XY?u:0,f("div",{style:S(b({},s0.container),{transform:`translate(${l}px, ${u}px) scale(${m},${g})`,willChange:"transform"}),children:f("svg",{width:s,height:i,children:f("rect",{x:"0",y:"0",width:s,height:i,fill:"gray",opacity:"0.2"})})})}const Pr={line:{stroke:"black",strokeOpacity:1,shapeRendering:"crispEdges",strokeWidth:"1",willChange:"transform"}},l0=[F.zoom.id,F.equalizerTool.id,F.baseLineCorrection.id,F.zone2D.id,F.slicingTool.id,F.integral.id,F.rangesPicking.id,F.editRange.id,F.multipleSpectraAnalysis.id,F.exclusionZones.id,F.databaseRangesSelection.id];function Bu(){const{height:e,width:t,margin:n,toolOptions:{selectedTool:o}}=$();let s=c.exports.useContext(dt);const i=c.exports.useContext(Et);return!l0.includes(o)||i.step==="brushing"||!s||s.x>t-n.right||s.y>e-n.bottom||!t||!e?null:f("div",{style:{willChange:"transform",cursor:"crosshair",transform:`translate(${-t+s.x}px, ${-e+s.y}px)`,position:"absolute",top:0,left:0,pointerEvents:"none",overflow:"visible",width:2*t,height:2*e},children:_("svg",{width:2*t,height:2*e,children:[f("line",{style:Pr.line,x1:t,y1:"0",x2:t,y2:e*2},"vertical_line"),f("line",{style:Pr.line,x1:"0",y1:e,x2:t*2,y2:e},"horizontal_line")]})},"crossLine")}function a0(e,t){const[n,o]=c.exports.useState(localStorage.getItem(e)||"{}");c.exports.useEffect(()=>{localStorage.setItem(e,n)},[e,n]);const s=c.exports.useCallback((i,r=null)=>{let l=JSON.parse(n);r?Sp(l,r,i):l=b(b({},l),i),o(JSON.stringify(l))},[n]);return c.exports.useMemo(()=>[t?V(JSON.parse(n),t,{}):JSON.parse(n),s],[t,s,n])}function kt(e,t=!0){const n=localStorage.getItem(e);return n&&t?JSON.parse(n):n}function wn(e,t){localStorage.setItem(e,t)}function Rr(e){localStorage.removeItem(e)}function ht(e,t,n=null){return V(e,t,n)}const jt={version:1,label:"Default workspace",display:{general:{disableMultipletAnalysis:!1,hideSetSumFromMolecule:!1,hideGeneralSettings:!1,experimentalFeatures:{display:!0}},panels:{spectraPanel:{display:!0,open:!0},informationPanel:{display:!0,open:!1},peaksPanel:{display:!0,open:!1},integralsPanel:{display:!0,open:!1},rangesPanel:{display:!0,open:!1},structuresPanel:{display:!0,open:!1},filtersPanel:{display:!0,open:!1},zonesPanel:{display:!0,open:!1},summaryPanel:{display:!1,open:!1},multipleSpectraAnalysisPanel:{display:!1,open:!1},databasePanel:{display:!1,open:!1},predictionPanel:{display:!1,open:!1}}},controllers:{dimmedSpectraTransparency:.1},formatting:{nucleus:[{key:"1H",name:"1H",ppm:"0.00",hz:"0.00"},{key:"13C",name:"13C",ppm:"0.00",hz:"0.00"},{key:"15N",name:"15N",ppm:"0.00",hz:"0.00"},{key:"19F",name:"19F",ppm:"0.00",hz:"0.00"},{key:"29Si",name:"29Si",ppm:"0.00",hz:"0.00"},{key:"31P",name:"31P",ppm:"0.00",hz:"0.00"}],nucleusByKey:{},panels:{}}},c0={version:1,label:"Exercise workspace",display:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0,hideGeneralSettings:!0,experimentalFeatures:{hidden:!0}},panels:{spectraPanel:{display:!0,open:!0},informationPanel:{hidden:!0},peaksPanel:{hidden:!0},integralsPanel:{display:!0},rangesPanel:{hidden:!0},structuresPanel:{hidden:!0},filtersPanel:{hidden:!0},zonesPanel:{hidden:!0},summaryPanel:{hidden:!0},multipleSpectraAnalysisPanel:{hidden:!0},databasePanel:{hidden:!0},predictionPanel:{hidden:!0}},toolBarButtons:{zoomTool:!0,zoomOutTool:!0,import:!1,exportAs:!1,spectraStackAlignments:!0,spectraCenterAlignments:!0,realImaginary:!1,peakTool:!0,integralTool:!0,zonePickingTool:!1,slicingTool:!1,autoRangesTool:!1,zeroFillingTool:!1,phaseCorrectionTool:!1,baseLineCorrectionTool:!1,FFTTool:!1,multipleSpectraAnalysisTool:!1,exclusionZonesTool:!1}},controllers:jt.controllers,formatting:jt.formatting},u0={version:1,label:"Prediction workspace",display:{general:{experimentalFeatures:{display:!1}},panels:{spectraPanel:{display:!0},rangesPanel:{display:!0},zonesPanel:{display:!0},predictionPanel:{display:!0,open:!0},informationPanel:{display:!1},peaksPanel:{display:!1},integralsPanel:{display:!1},structuresPanel:{display:!1},filtersPanel:{display:!1},summaryPanel:{display:!1},multipleSpectraAnalysisPanel:{display:!1},databasePanel:{display:!1}}},controllers:jt.controllers,formatting:jt.formatting},d0={version:1,label:"Process 1D workspace",display:{general:{disableMultipletAnalysis:!0},panels:{zonesPanel:{display:!0},summaryPanel:{display:!0},multipleSpectraAnalysisPanel:{display:!0,open:!0},spectraPanel:{display:!0,open:!0},informationPanel:{hidden:!0},peaksPanel:{hidden:!0},integralsPanel:{hidden:!0},rangesPanel:{hidden:!0},structuresPanel:{hidden:!0},filtersPanel:{hidden:!0},databasePanel:{hidden:!0},predictionPanel:{hidden:!0}},toolBarButtons:{import:!1,exportAs:!1,autoRangesTool:!1,multipleSpectraAnalysisTool:!1,exclusionZonesTool:!1}},controllers:jt.controllers,formatting:jt.formatting};var He={exercise:c0,default:jt,process1D:d0,prediction:u0};const Xu=5,p0=[{key:"default",label:He.default.label},{key:"process1D",label:He.process1D.label},{key:"exercise",label:He.exercise.label},{key:"prediction",label:He.prediction.label}];function Xi(e){switch(e){case"exercise":return He.exercise;case"process1D":return He.process1D;case"prediction":return He.prediction;case"default":return He.default;default:return{}}}function ao(e){return e.workspaces[e.workspace.current||"default"]}const Yu={version:Xu,workspaces:{},dispatch:()=>null,workspace:{current:"default",base:null}};function Gu(e){return JSON.parse(JSON.stringify(e),(t,n)=>{if((n==null?void 0:n.hidden)!==!0)return n})}function Mr(e){let t={};return JSON.parse(JSON.stringify(e),(n,o)=>{(o==null?void 0:o.hidden)!==!0&&n&&(t[n]=t[n]++||1)}),t}function h0(e,t){const n=Mr(e),o=Mr(t);if(Object.keys(o).length===0)return!1;for(const[s,i]of Object.entries(n))if(!o[s]||o[s]!==i)return!1;return!0}function f0(e){const t=ao(e);t.formatting.nucleus&&Array.isArray(t.formatting.nucleus)&&(t.formatting.nucleusByKey=t.formatting.nucleus.reduce((n,o)=>(n[o.name.toLowerCase()]=o,b({},n)),{}))}function m0(e){const t=kt("nmr-local-storage-version",!1);let n=kt("nmr-general-settings");return t&&(n==null?void 0:n.version)&&Rr("nmr-local-storage-version"),(!(n!=null&&n.version)||(n==null?void 0:n.version)!==Xu)&&Rr("nmr-general-settings"),S(b({},e),{workspaces:(n==null?void 0:n.workspaces)||{default:He.default}})}function g0(e,t){if(t.payload){const o=kt("nmr-general-settings"),n=t.payload,{dispatch:s,workspace:i}=n,r=G(n,["dispatch","workspace"]);e.workspace=!i&&(o==null?void 0:o.currentWorkspace)?{current:o.currentWorkspace,base:null}:{current:i||"default",base:i};const l=ln({},Xi(e.workspace.current),r),a=ao(e);if(He[e.workspace.current]&&(!a||(l==null?void 0:l.version)!==(a==null?void 0:a.version)||!h0(l.display,a==null?void 0:a.display))||!o){const{workspaces:u,version:p,workspace:{current:h}}=e||{},m=Gu(l.display),g=S(b({version:p},(o==null?void 0:o.currentWorkspace)&&{currentWorkspace:o==null?void 0:o.currentWorkspace}),{workspaces:S(b({},u),{[h]:S(b({},l),{display:m})})});e.workspaces[h]=ln({},a,l),wn("nmr-general-settings",JSON.stringify(g))}else a.display=ln({},l.display,a.display);e.dispatch=s}}function x0(e,t){if(t.payload){const n=ao(e),{controllers:o,formatting:s,display:i}=t.payload;let r=kt("nmr-general-settings");r.currentWorkspace=e.workspace.current,r.workspaces=S(b({},r.workspaces),{[e.workspace.current]:S(b({},r.workspaces[e.workspace.current]),{controllers:o,formatting:s,display:i})}),wn("nmr-general-settings",JSON.stringify(r)),n.controllers=o,n.formatting=s,n.display=S(b({},n.display),{panels:i.panels,general:S(b({},n.display.general||{}),{experimentalFeatures:i.general.experimentalFeatures})}),f0(e)}}function b0(e,t){if(t.payload){const n=ao(e),{key:o,value:s}=t.payload;let i=kt("nmr-general-settings");i.workspaces[e.workspace.current].formatting.panels[o]=s,wn("nmr-general-settings",JSON.stringify(i)),n.formatting.panels[o]=s}}function y0(e){const t=ao(e);let n=kt("nmr-general-settings");const o=Xi(e.workspace.current).display;n.workspaces[e.workspace.current]&&(n.workspaces[e.workspace.current].display=o,wn("nmr-general-settings",JSON.stringify(n))),t.display=o}function v0(e,t){const n=t.payload.workspace;e.workspaces[n]||(e.workspaces[n]=Xi(n)),e.workspace.current=n}function C0(e,t){const{workspace:n,data:{display:o,controllers:s,formatting:i}}=t.payload,r={version:1,label:n,display:o,controllers:s,formatting:i},l=U(),a=kt("nmr-general-settings");a.workspaces[l]=r,wn("nmr-general-settings",JSON.stringify(a)),e.workspaces[l]=r,e.workspace.current=l}function k0(e,t){var r;const{workspace:n}=t.payload;n===e.workspace.current&&(e.workspace.current="default");let o=kt("nmr-general-settings");const s=((r=oe(e))==null?void 0:r.workspaces)||{},i=Object.keys(s).reduce((l,a)=>(a!==n&&(l[a]=s[a]),l),{});e.workspaces=i,o.workspaces=Gu(i),wn("nmr-general-settings",JSON.stringify(o))}function S0(e,t){switch(t.type){case"INIT_PREFERENCES":return g0(e,t);case"SET_PREFERENCES":return x0(e,t);case"SET_PANELS_PREFERENCES":return b0(e,t);case"RESET_PREFERENCES":return y0(e);case"SET_WORKSPACE":return v0(e,t);case"ADD_WORKSPACE":return C0(e,t);case"REMOVE_WORKSPACE":return k0(e,t);default:return e}}const w0=Qs(S0),Wu=c.exports.createContext(Yu),E0=Wu.Provider;function re(){const e=c.exports.useContext(Wu);if(!e)throw new Error("Preferences context was not found");const{workspace:t,workspaces:n,dispatch:o}=e;return c.exports.useMemo(()=>({current:n[t.current]||{},workspace:t,workspaces:n,dispatch:o}),[o,t,n])}function Zu(){const{workspaces:e}=re();return c.exports.useMemo(()=>{const t=Object.keys(e).reduce((n,o)=>(He[o]||n.push({key:o,label:e[o].label}),n),[]);return[...p0,...t]},[e])}class Wt{constructor(){this.array=[]}moveTo(t,n){this.array.push(`M ${t} ${n}`)}lineTo(t,n){this.array.push(`L ${t} ${n}`)}closePath(){this.array.push("Z")}toString(){return this.array.join(" ")}}function Nr({id:e,sign:t,color:n,datum:o}){const{margin:s,width:i,height:r,xDomain:l,yDomain:a,contours:u,activeSpectrum:p}=$(),h=re(),{xShift:m,yShift:g}=oo(o),x=c.exports.useMemo(()=>p===null?!0:e===p.id,[p,e]);function y(v){const C=Ae({margin:s,width:i,xDomain:l}),E=ye({margin:s,height:r,yDomain:a}),T=new Wt;for(const M of v)if(M.lines){const D=M.lines;if(D.length<1e6)for(let I=0;I<D.length;I+=4)T.moveTo(C(D[I]+m),E(D[I+1]+g)),T.lineTo(C(D[I+2]+m),E(D[I+3]+g))}else{T.moveTo(C(M[0].x+m),E(M[0].y+g));for(let D=1;D<M.length;D++)T.lineTo(C(M[D].x+m),E(M[D].y+g))}return T.closePath(),T.toString()}const k=c.exports.useMemo(()=>V(u,`${e}.${t}`,[]),[u,t,e]);return f("path",{fill:"none","data-test-id":"spectrum-line",stroke:n,strokeWidth:"1",style:{opacity:x?1:V(h.current,"controllers.dimmedSpectraTransparency",.1)},d:y(k)})}function A0({data:e,displayerKey:t}){return f("g",{clipPath:`url(#${t}clip-chart-2d)`,className:"contours",children:e==null?void 0:e.map((n,o)=>_("g",{children:[n.display.isPositiveVisible&&f(Nr,{id:n.id,sign:"positive",datum:n,color:n.display.positiveColor}),n.display.isNegativeVisible&&f(Nr,{id:n.id,sign:"negative",datum:n,color:n.display.negativeColor})]},`${n.id+o}`))})}const T0=c.exports.memo(A0);function D0(){const{data:e,displayerKey:t}=$(),n=c.exports.useMemo(()=>e.filter(o=>o.info.dimension===2&&o.info.isFt),[e]);return f(T0,{data:n,displayerKey:t})}var En=(e=>(e.XAxis="XAxis",e.YAxis="YAxis",e))(En||{});function co(e){const{width:t,xDomain:n,yDomain:o}=$();return c.exports.useCallback(s=>{const{x:i,y:r}=s,[l,a]=e==="XAxis"?n:o;return Fl({x:i,y:r},{from:l,to:a,nbPoints:t*4,optimize:!0})},[e,t,n,o])}function I0({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,yDomains:i,displayerKey:r}=$(),l=co(En.YAxis),a=o.left,u=c.exports.useMemo(()=>{if(t){const h=ye({height:n,yDomain:[s[0],s[1]],margin:o}),m=mn(i[t.id],a,e),{x:g,re:x}=t.data,y=l({x:g,y:x}),k=new Wt;k.moveTo(m(y.y[y.y.length-1]),h(y.x.length-1));for(let v=y.x.length-2;v>=0;v--)k.lineTo(m(y.y[v]),h(y.x[v]));return k.toString()}else return},[a,o,e,n,t,l,s,i]),p=n-o.bottom-o.top;return!p||!a?null:_("svg",{viewBox:`0 0 ${a} ${p+o.top}`,width:a,height:p+o.top,children:[f("defs",{children:f("clipPath",{id:`${r}clip-left`,children:f("rect",{width:a,height:p,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${r}clip-left)`,children:f("path",{className:"line",stroke:"black",fill:"none",d:u})})]})}var P0=c.exports.memo(I0);function R0({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,yDomains:i,displayerKey:r}=$(),l=co(En.XAxis),a=o.top,u=c.exports.useMemo(()=>{if(t){const p=Ae({width:n,xDomain:s,margin:o}),h=mn(i[t.id],a,e),{x:m,re:g}=t.data,x=l({x:m,y:g}),y=new Wt;y.moveTo(p(x.x[0]),h(x.y[0]));for(let k=1;k<x.x.length;k++)y.lineTo(p(x.x[k]),h(x.y[k]));return y.toString()}else return},[a,e,o,t,n,s,l,i]);return!n||!a?null:_("svg",{viewBox:`0 0 ${n} ${a}`,width:n,height:a,children:[f("defs",{children:f("clipPath",{id:`${r}clip-top`,children:f("rect",{width:n-o.left-o.right,height:a,x:o.left,y:`${0}`})})}),f("g",{clipPath:`url(#${r}clip-top)`,children:f("path",{className:"line",stroke:"red",fill:"none",strokeWidth:"1px",d:u})})]})}var M0=c.exports.memo(R0);const N0=N`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,_0={right:100,top:0,left:0,bottom:0};function F0(e){const{show:t=!0,label:n="\u03B4 [ppm]",margin:o=_0}=e,s=$(),{xDomain:i,height:r,width:l,margin:a,tabActiveSpectrum:u,activeTab:p}=s,h=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!t)return;const m=Ae({width:l,margin:a,xDomain:i}),g=Ls(m).ticks(8).tickFormat(ei("0"));Do(h.current).call(g)},[p,r,a,a.bottom,a.left,a.right,a.top,t,u,l,i]),!l||!r?null:d(Ve,{children:t&&d("g",{className:"x",css:N0,transform:`translate(0,${r-(a.bottom+o.bottom)})`,ref:h,children:d("text",{fill:"#000",x:l-60,y:"20",dy:"0.71em",textAnchor:"end",children:n})})})}var L0=c.exports.memo(F0);const O0=N`
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
`,$0={right:50,top:0,bottom:0,left:0};function H0(e){const{show:t=!0,label:n="",margin:o=$0}=e,s=c.exports.useRef(null),i=$(),{yDomain:r,width:l,height:a,activeTab:u,tabActiveSpectrum:p,margin:h}=i;return c.exports.useEffect(()=>{if(!t||!r)return;const m=ye({height:a,yDomain:r,margin:h}),g=wp(m).ticks(8).tickFormat(ei("0"));Do(s.current).call(g)},[t,r,u,p,a,h]),!l||!a?null:d(Ve,{children:d("g",{className:"y",css:O0,transform:`translate(${l-o.right})`,ref:s,children:d("text",{fill:"#000",x:-o.top,y:-(o.right-5),dy:"0.71em",transform:"rotate(-90)",textAnchor:"end",children:n})})})}var z0=c.exports.memo(H0);const _r=N`
  stroke: lightgrey;
  opacity: 0.7;
`;function Fr({axis:e,show:t}){const{data:n,activeTab:o,margin:s,width:i,height:r,xDomain:l,yDomain:a,displayerMode:u}=$(),[p,h]=c.exports.useState([]),m=Ae({margin:s,width:i,xDomain:l}),g=ye({margin:s,height:r,yDomain:a});c.exports.useEffect(()=>{const y=o.split(","),k=e==="X"?y[0]:e==="Y"?y[1]:null;if(k!==null){const C=n.filter(E=>E.display.isVisible===!0&&E.info.nucleus===k).filter(to).map(E=>E.ranges.values).flat().map(E=>E.signals.filter(T=>Jn.some(M=>T.kind===M)).map(T=>T.delta)).flat();h(C)}else h([])},[o,e,n,u]);const x=c.exports.useMemo(()=>{if(t===!0&&p.length>0)return p.map((k,v)=>e==="X"?d("line",{css:_r,x1:m(k),x2:m(k),y1:g(a[0]),y2:g(a[1])},`indicationLine${e}${v}`):e==="Y"?d("line",{css:_r,x1:m(l[0]),x2:m(l[1]),y1:g(k),y2:g(k)},`indicationLine${e}${v}`):null)},[e,p,m,g,t,l,a]);return d("g",{children:x})}const mo=new Ep,pe={on:(e,t)=>mo.on(e,t),once:(e,t)=>mo.once(e,t),off:(e,t)=>mo.off(e,t),emit:(e,t)=>mo.emit(e,t)};Object.freeze(pe);const Uu=c.exports.createContext({});function V0(e,t){var n;switch(t.type){case"ADD":{const o=S(b({},e),{assignment:b({},e.assignment)});return o.assignment[t.payload.id[0]]===void 0&&(o.assignment[t.payload.id[0]]={}),o.assignment[t.payload.id[0]][t.payload.axis]===void 0&&(o.assignment[t.payload.id[0]][t.payload.axis]=[]),o.assignment[t.payload.id[0]][t.payload.axis].includes(t.payload.id[1])||o.assignment[t.payload.id[0]][t.payload.axis].push(t.payload.id[1]),o}case"REMOVE":{const o=S(b({},e),{assignment:b({},e.assignment)});return((n=o.assignment[t.payload.id[0]])==null?void 0:n[t.payload.axis])!==void 0&&(o.assignment[t.payload.id[0]][t.payload.axis]=o.assignment[t.payload.id[0]][t.payload.axis].filter(s=>s!==t.payload.id[1]),o.assignment[t.payload.id[0]][t.payload.axis].length===0&&delete o.assignment[t.payload.id[0]][t.payload.axis],Object.keys(o.assignment[t.payload.id[0]]).length===0&&delete o.assignment[t.payload.id[0]]),o}case"REMOVE_ALL":{const o=S(b({},e),{assignment:b({},e.assignment)});return t.payload.id.forEach(s=>{var i;((i=o.assignment[s])==null?void 0:i[t.payload.axis])!==void 0&&(delete o.assignment[s][t.payload.axis],Object.keys(o.assignment[s]).length===0&&delete o.assignment[s])}),o}case"SET_IS_ACTIVE":return S(b({},e),{isActive:t.payload.id!==void 0&&t.payload.axis!==void 0,activeID:t.payload.id,activeAxis:t.payload.axis});case"SET_IS_ON_HOVER":return S(b({},e),{isOnHover:t.payload.id!==void 0,onHoverID:t.payload.id,onHoverAxis:t.payload.axis});case"DELETE_RECORD":{const o=S(b({},e),{assignment:b({},e.assignment)});return delete o.assignment[t.payload.id],o.isActive&&o.activeID===t.payload.id&&(o.isActive=!1,o.activeID=void 0,o.activeAxis=void 0),o.isOnHover&&o.onHoverID===t.payload.id&&(o.isOnHover=!1,o.onHoverID=void 0,o.onHoverAxis=void 0),o}default:throw new Error(`unknown action type: ${t.type}`)}}const j0={assignment:{},isActive:!1,activeID:void 0,activeAxis:void 0,isOnHover:!1,onHoverID:void 0,onHoverAxis:void 0};function B0(e){const{spectraData:t}=e,[n,o]=c.exports.useReducer(V0,j0),s=c.exports.useMemo(()=>({assignment:n,dispatch:o}),[n]);function i(l,a){a.dispatch({type:"DELETE_RECORD",payload:{id:l.id}}),(l.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[l.id,u],axis:"x"}})),l.signals.forEach(u=>(u.diaIDs||[]).forEach(p=>a.dispatch({type:"ADD",payload:{id:[u.id,p],axis:"x"}})))}function r(l,a){a.dispatch({type:"DELETE_RECORD",payload:{id:l.id}}),(l.y.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[l.id,u],axis:"y"}})),(l.x.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[l.id,u],axis:"x"}})),l.signals.forEach(u=>{(u.x.diaIDs||[]).forEach(p=>a.dispatch({type:"ADD",payload:{id:[u.id,p],axis:"x"}})),(u.y.diaIDs||[]).forEach(p=>a.dispatch({type:"ADD",payload:{id:[u.id,p],axis:"y"}}))})}return c.exports.useEffect(()=>{t&&t.forEach(l=>{l.info.dimension===1?l.ranges.values.forEach(a=>i(a,s)):l.info.dimension===2&&l.zones.values.forEach(a=>r(a,s))})},[t]),f(Uu.Provider,{value:s,children:e.children})}function je(){return c.exports.useContext(Uu)}function ut(e){const t=je();if(typeof e!="string"&&typeof e!="number"||e==="")throw new Error("assignment key must be a non-empty string or number");const n=String(e),o=c.exports.useMemo(()=>t.assignment.isActive&&t.assignment.activeID===n,[t.assignment.activeID,t.assignment.isActive,n]),s=c.exports.useMemo(()=>o?t.assignment.activeAxis:void 0,[t.assignment.activeAxis,o]),i=c.exports.useMemo(()=>t.assignment.assignment[n]?t.assignment.assignment[n]:[],[t.assignment.assignment,n]),r=c.exports.useMemo(()=>t.assignment.isOnHover&&t.assignment.onHoverID===n,[t.assignment.isOnHover,t.assignment.onHoverID,n]),l=c.exports.useMemo(()=>r?t.assignment.onHoverAxis:void 0,[t.assignment.onHoverAxis,r]),a=c.exports.useCallback(v=>{t.dispatch({type:"ADD",payload:{id:[n,v],axis:s}})},[s,t,n]),u=c.exports.useCallback(v=>{t.dispatch({type:"REMOVE",payload:{id:[n,v],axis:s}})},[s,t,n]),p=c.exports.useCallback(v=>{t.dispatch({type:"REMOVE_ALL",payload:{id:[n],axis:v}})},[t,n]),h=c.exports.useCallback(v=>{i[s]===void 0||!i[s].includes(v)?a(v):u(v)},[s,a,i,u]),m=c.exports.useCallback(()=>{t.dispatch({type:"DELETE_RECORD",payload:{id:n}})},[t,n]),g=c.exports.useCallback(v=>{t.dispatch({type:"SET_IS_ACTIVE",payload:{id:o?void 0:n,axis:!o&&n!==void 0?v:void 0}})},[t,n,o]),x=c.exports.useCallback((v,C)=>{v==="enter"?t.dispatch({type:"SET_IS_ON_HOVER",payload:{id:n,axis:n!==void 0?C:void 0}}):v==="leave"&&t.dispatch({type:"SET_IS_ON_HOVER",payload:{}})},[t,n]),y=c.exports.useCallback(v=>x("enter",v),[x]),k=c.exports.useCallback(v=>x("leave",v),[x]);return{id:n,isActive:o,activeAxis:s,assigned:i,add:a,remove:u,removeAll:p,toggle:h,deleteRecord:m,onClick:g,isOnHover:r,onHoverAxis:l,onMouseEnter:y,onMouseLeave:k}}function Yi(e,t){return t.filter(n=>Object.keys(e.assignment).filter(o=>o===n))}var ue=(e=>(e.PEAK="PEAK",e.INTEGRAL="INTEGRAL",e.SIGNAL="SIGNAL",e.RANGE="RANGE",e.ZONE="ZONE",e.EXCLUSION_ZONE="EXCLUSION_ZONE",e.DATABASE="DATABASE",e.UNKNOWN="UNKNOWN",e))(ue||{});const Ku={highlight:{highlights:{},highlighted:[],highlightedPermanently:[],sourceData:null},dispatch:()=>null,remove:()=>null},qu=c.exports.createContext(Ku);function X0(e,t){switch(t.type){case"SHOW":{const{convertedHighlights:n,sourceData:o}=t.payload,{type:s="UNKNOWN",extra:i=null}=o||{},r=S(b({},e),{highlights:b({},e.highlights),sourceData:{type:s,extra:i}});for(const l of n)l in r.highlights||(r.highlights[l]=1);return r.highlighted=Object.keys(r.highlights),r}case"HIDE":{const{convertedHighlights:n}=t.payload,o=S(b({},e),{highlights:b({},e.highlights),sourceData:null});for(const s of n)s in o.highlights&&delete o.highlights[s];return o.highlighted=Object.keys(o.highlights),o}case"SET_PERMANENT":return S(b({},e),{highlightedPermanently:t.payload});case"UNSET_PERMANENT":return S(b({},e),{highlightedPermanently:[]});default:throw new Error(`unknown action type: ${t.type}`)}}function Y0(e){const[t,n]=c.exports.useReducer(X0,Ku.highlight),o=c.exports.useMemo(()=>{function s(){n({type:"HIDE",payload:{convertedHighlights:t.highlighted}})}return{highlight:t,dispatch:n,remove:s}},[t]);return f(qu.Provider,{value:o,children:e.children})}function An(){return c.exports.useContext(qu)}function ie(e,t=null){if(!Array.isArray(e))throw new Error("highlights must be an array");const{dispatch:n,highlight:o}=An(),s=c.exports.useMemo(()=>{const m=[];for(const g of e){if(typeof g!="string"&&typeof g!="number")throw new Error("highlight key must be a string or number");g!==""&&m.push(String(g))}return m},[e]);c.exports.useEffect(()=>()=>{n({type:"HIDE",payload:{convertedHighlights:[]}}),n({type:"UNSET_PERMANENT"})},[n]);const i=c.exports.useMemo(()=>o.highlighted.some(m=>s.includes(m)),[s,o.highlighted]),r=c.exports.useMemo(()=>o.highlightedPermanently.some(m=>s.includes(m)),[s,o.highlightedPermanently]),l=c.exports.useCallback(()=>{n({type:"SHOW",payload:{convertedHighlights:s,sourceData:t}})},[n,s,t]),a=c.exports.useCallback(()=>{n({type:"HIDE",payload:{convertedHighlights:s}})},[s,n]),u=c.exports.useCallback(m=>{n({type:"SHOW",payload:{convertedHighlights:[],id:m}})},[n]),p=c.exports.useCallback(m=>{n({type:"HIDE",payload:{convertedHighlights:[],id:m}})},[n]),h=c.exports.useCallback(m=>{m&&(m.preventDefault(),m.stopPropagation()),n(r?{type:"UNSET_PERMANENT"}:{type:"SET_PERMANENT",payload:s})},[s,n,r]);return c.exports.useMemo(()=>({isActive:i,onHover:{onMouseEnter:l,onMouseLeave:a},onClick:h,show:l,hide:a,isActivePermanently:r,click:h,add:u,remove:p}),[u,h,a,i,r,p,l])}const Ju="___";function ke(e,t){return`${e}${Ju}${t}`}const Lr=N`
  stroke: green;
  stroke-width: 2;
  opacity: 0.5;
`;function Or({delta:e,axis:t,show:n}){const{margin:o,width:s,height:i,xDomain:r,yDomain:l}=$(),a=Ae({margin:o,width:s,xDomain:r}),u=ye({margin:o,height:i,yDomain:l}),p=c.exports.useMemo(()=>n===!0?t==="X"?d("line",{css:Lr,x1:a(e),x2:a(e),y1:u(l[0]),y2:u(l[1])},`signalLine_${e}_X`):t==="Y"?d("line",{css:Lr,x1:a(r[0]),x2:a(r[1]),y1:u(e),y2:u(e)},`signalLine_${e}_Y`):null:null,[t,e,a,u,n,r,l]);return d("g",{children:p})}function G0({signal:e}){var r,l;const t=c.exports.useMemo(()=>[ke(e.id,"Crosshair"),ke(e.id,"Crosshair_X")],[e.id]),n=c.exports.useMemo(()=>[ke(e.id,"Crosshair"),ke(e.id,"Crosshair_Y")],[e.id]),o=ie(t),s=ie(n),i=ie([e.id]);return!((r=e==null?void 0:e.x)!=null&&r.delta)||!((l=e==null?void 0:e.y)!=null&&l.delta)?null:w("g",{children:[d(Or,{delta:e.x.delta,axis:"X",show:o.isActive||i.isActive}),d(Or,{delta:e.y.delta,axis:"Y",show:s.isActive||i.isActive})]})}const W0=c.exports.memo(({signal:e,isVisible:t})=>{const{margin:n,width:o,height:s,xDomain:i,yDomain:r}=$(),l=Ae({margin:n,width:o,xDomain:i}),a=ye({margin:n,height:s,yDomain:r}),u=c.exports.useCallback(y=>[y].concat(ke(y,"X"),ke(y,"Y")),[]),p=ut(e.id),h=ie(u(p.id)),m=An(),[g,x]=c.exports.useState(!1);return c.exports.useEffect(()=>{m.highlight.highlighted.some(y=>u(e.id).includes(y))||p.isActive?x(!0):x(!1)},[p.isActive,u,m.highlight.highlighted,e.id]),e?w("g",{className:"zone-signal",onMouseEnter:()=>{p.onMouseEnter(void 0),h.show()},onMouseLeave:()=>{p.onMouseLeave(void 0),h.hide()},children:[t.signals&&w("g",{children:[d("circle",{cx:l(e.x.delta||0),cy:a(e.y.delta||0),r:g?6:4,fill:g?"green":"darkgreen"},e.id),d(G0,{signal:e})]}),d("g",{className:"zone-signal-peak",children:t.peaks&&e.peaks&&e.peaks.map((y,k)=>d("circle",{cx:l(y.x),cy:a(y.y),r:2,fill:"black"},`${e.id+k}`))})]}):null}),Z0=N`
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
`,U0=N`
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
`,K0=({zoneData:e,isVisible:t})=>{const{x:n,y:o,id:s,signals:i}=e,r=ut(s),l=ie([r.id],{type:ue.ZONE,extra:{id:r.id}}),{margin:a,width:u,height:p,xDomain:h,yDomain:m}=$(),g=Ae({margin:a,width:u,xDomain:h}),x=ye({margin:a,height:p,yDomain:m}),{from:y=0,to:k=0}=n,{from:v=0,to:C=0}=o,[E,T]=c.exports.useState(!1);return c.exports.useEffect(()=>{T(!Ox(e))},[e]),w("g",{css:l.isActive||r.isActive?U0:Z0,onMouseEnter:()=>{r.onMouseEnter(void 0),l.show()},onMouseLeave:()=>{r.onMouseLeave(void 0),l.hide()},children:[t.zones&&d("g",{transform:`translate(${g(k)},${x(v)})`,children:d("rect",{x:"0",width:g(y)-g(k),height:x(C)-x(v),className:"Integral-area",fill:"#0000000f",stroke:E?"#343a40":"darkgreen",strokeWidth:E?"0":"1"})}),i.map((M,D)=>d(W0,{signal:M,isVisible:t},`${s+D}`))]},s)};function q0({zones:e,display:t,displayerKey:n}){const[o,s]=c.exports.useState({zones:!0,signals:!0,peaks:!0});return c.exports.useEffect(()=>{pe.on("onZonesVisibilityChange",({key:i})=>{s(r=>S(b({},r),{[i]:!r[i]}))})},[]),f("g",{clipPath:`url(#${n}clip-chart-2d)`,className:"2D-Zones",children:t.isVisible&&e.values.map(i=>f("g",{className:"zone",children:f(K0,{zoneData:i,isVisible:o})},i.id))})}const J0=c.exports.memo(q0),Q0={zones:{},display:{}};function ev(){const{displayerKey:e}=$(),{zones:t,display:n}=Ce(Q0);return f(J0,{zones:t,display:n,displayerKey:e})}function tv({spectra:e,width:t,height:n,margin:o,displayerKey:s}){return _("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-2d`,children:f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top})})}),f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top,stroke:"black",strokeWidth:"1",fill:"transparent"}),(e==null?void 0:e[0])&&f(M0,{data:e[0]}),(e==null?void 0:e[1])&&f(P0,{data:e[1]}),f(D0,{}),f(ev,{}),f(Fr,{axis:"X",show:!0}),f(Fr,{axis:"Y",show:!0}),_("g",{className:"container",style:{pointerEvents:"none"},children:[f(L0,{}),f(z0,{})]})]})}const nv=c.exports.memo(tv);function ov({spectra:e}){const{width:t,height:n,margin:o,displayerKey:s}=$();return f(nv,{spectra:e,width:t,height:n,margin:o,displayerKey:s})}function Ye(e,t,n="",o=""){return n+Ll(e).format(t)+o}function Be(e){const t=re(),n=V(t.current,"formatting.nucleusByKey",{ppm:"0.0",hz:"0.0"});return c.exports.useMemo(()=>{function o(s){return(i,r="ppm",l="",a="")=>l+Ll(Number(i)).format(V(n,`${s.toLowerCase()}.${r}`,"0.0"))+a}if(!e)return()=>{};if(typeof e=="string")return o(e);if(Array.isArray(e))return e.map(s=>o(s));throw Error("nuclus must be string or array of string")},[e,n])}function $r(e){e=String(e).trim();const t=e.lastIndexOf(".");return t>0?e.substr(t).split("").length-1:0}const Hr=N`
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
`;function sv({layout:e,data1D:t}){const n=c.exports.useContext(dt),{startX:o,endX:s,startY:i,endY:r,step:l}=c.exports.useContext(Et),{margin:a,width:u,height:p,activeSpectrum:h,xDomain:m,yDomain:g,yDomains:x,activeTab:y,data:k,toolOptions:{selectedTool:v}}=$(),C=n&&on(e,{startX:n.x,startY:n.y}),E=y.split(","),[T,M]=Be(E),D=c.exports.useMemo(()=>{if(!t||t.length===0)return Ae({width:u,margin:a,xDomain:m});if(v!==F.slicingTool.id)switch(C){case Z.TOP_1D:case Z.CENTER_2D:return Ae({width:u,margin:a,xDomain:m});case Z.LEFT_1D:return ye({height:p,margin:a,yDomain:g});default:return null}return null},[t,p,a,v,C,u,m,g]),I=c.exports.useMemo(()=>{if(!t||t.length===0)return ye({height:p,margin:a,yDomain:g});if(v!==F.slicingTool.id)switch(C){case Z.CENTER_2D:return ye({height:p,margin:a,yDomain:g});case Z.TOP_1D:return t[0]?mn(x[t[0].id],a.top):null;case Z.LEFT_1D:return t[1]?mn(x[t[1].id],a.left):null;default:return null}return null},[t,p,a,v,C,g,x]);if(!h||!n||n.y<10||n.x<10||n.x>u-a.right||n.y>p-a.bottom)return d("div",{css:Hr});const A=J=>{let z=null;if(C===Z.TOP_1D?z=0:C===Z.LEFT_1D&&(z=1),z!=null&&D!=null){const j=Cn(t[z]),K=We(j.x,D.invert(J));return j.y[K]}return 1},P=(J=null)=>{if(D!=null)switch(C){case Z.CENTER_2D:case Z.TOP_1D:return D.invert(J||n.x);case Z.LEFT_1D:return D.invert(J||n.y);default:return 0}return 0},R=()=>{if(I!=null)switch(C){case Z.CENTER_2D:case Z.TOP_1D:return I.invert(n.y);case Z.LEFT_1D:return I.invert(n.x);default:return 0}return 0},O=()=>{switch(C){case Z.TOP_1D:return(A(o)/(A(s)||Number.MIN_VALUE)*100).toFixed(2);case Z.LEFT_1D:return(A(i)/(A(r)||Number.MIN_VALUE)*100).toFixed(2);default:return 0}},L=()=>{switch(C){case Z.TOP_1D:return(P(o)-P(s)).toPrecision(6);case Z.LEFT_1D:return(P(i)-P(r)).toPrecision(6);default:return 0}},H=(J,z,j)=>C===Z.CENTER_2D?w(c.exports.Fragment,{children:[J," ( ",d(ti,{mf:j})," )"]}):z,X=()=>{if(C===Z.CENTER_2D){const{maxX:J,maxY:z,minX:j,minY:K,z:ne}=k[h.index].data,_e=(J-j)/(ne[0].length-1),mt=(z-K)/(ne.length-1),qt=Math.floor((P()-j)/_e),Jt=Math.floor((R()-K)/mt);return qt<0||qt>=ne[0].length||Jt<0||Jt>=ne.length?0:ne[Jt][qt]}return 0};return w("div",{css:Hr,children:[w("div",{children:[w("span",{className:"label",children:[H("F2","X",E[0])," :"]}),d("span",{className:"value",children:T(P())}),d("span",{className:"unit",children:"ppm"})]}),w("div",{children:[w("span",{className:"label",children:[H("F1","Y",E[1])," :"]}),d("span",{className:"value",children:M(R())}),d("span",{className:"unit",children:"ppm"})]}),w("div",{children:[d("span",{className:"label",children:"Intensity :"}),d("span",{className:"value",children:X()})]}),l==="brushing"&&w("div",{children:[d("span",{className:"label",children:" \u0394ppm :"}),d("span",{className:"value",children:L()})]}),l==="brushing"&&w("div",{children:[d("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[O(),"%"]})]})]})}const iv={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-88px",fontWeight:"bold",pointerEvents:"none",overflow:"visible",userSelect:"none",width:"85px",textAlign:"right"};function rv({layout:e,data1D:t}){const n=c.exports.useContext(dt),{step:o}=c.exports.useContext(Et),{margin:s,width:i,height:r,xDomain:l,yDomain:a,yDomains:u,activeTab:p,activeSpectrum:h}=$(),m=n&&on(e,{startX:n.x,startY:n.y}),g=p.split(","),[x,y]=Be(g),k=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return Ae({width:i,margin:s,xDomain:l});switch(m){case Z.TOP_1D:case Z.CENTER_2D:return Ae({width:i,margin:s,xDomain:l});case Z.LEFT_1D:return ye({height:r,margin:s,yDomain:a});default:return null}},[h,t,r,s,m,i,l,a]),v=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return ye({height:r,margin:s,yDomain:a});switch(m){case Z.CENTER_2D:return ye({height:r,margin:s,yDomain:a});case Z.TOP_1D:return t[0]?mn(u[t[0].id],s.top):null;case Z.LEFT_1D:return t[1]?mn(u[t[1].id],s.left):null;default:return null}},[h,t,r,s,m,a,u]);if(o==="brushing"||!n||n.y<s.top||n.x<s.left||n.x>i-s.right||n.y>r-s.bottom)return null;const C=(T=null)=>{switch(m){case Z.CENTER_2D:case Z.TOP_1D:return k==null?void 0:k.invert(T||n.x);case Z.LEFT_1D:return k==null?void 0:k.invert(T||n.y);default:return 0}},E=()=>{switch(m){case Z.CENTER_2D:case Z.TOP_1D:return v==null?void 0:v.invert(n.y);case Z.LEFT_1D:return v==null?void 0:v.invert(n.x);default:return 0}};return _("div",{style:S(b({},iv),{transform:`translate(${n.x}px, ${n.y}px)`}),children:[f("span",{children:y(E())}),f("span",{style:{color:"gray"},children:","}),f("span",{style:{color:"red"},children:x(C())})]},"xLabelPointer")}function Qu(e,t,n=10){return Je(bt(t),[e-n,n])}function lv({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,displayerKey:i}=$(),r=co(En.XAxis),l=o.top,a=c.exports.useMemo(()=>{if(t){const{x:u,re:p}=t,h=Ae({margin:o,width:n,xDomain:s}),m=Qu(l,p,e),g=r({x:u,y:p}),x=new Wt;x.moveTo(h(g.x[0]),m(g.y[0]));for(let y=1;y<g.x.length;y++)x.lineTo(h(g.x[y]),m(g.y[y]));return x.toString()}else return},[t,l,e,o,n,s,r]);return!n||!l?null:_("svg",{viewBox:`0 0 ${n} ${l}`,width:n,height:l,children:[f("defs",{children:f("clipPath",{id:`${i}clip-top`,children:f("rect",{width:n-o.left-o.right,height:l,x:o.left,y:`${0}`})})}),_("g",{clipPath:`url(#${i}clip-top)`,children:[f("rect",{width:n-o.left-o.right,height:l,x:o.left,y:`${0}`,fillOpacity:"0"}),f("path",{className:"line",stroke:"red",fill:"none",d:a})]})]})}var av=c.exports.memo(lv);function cv({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,displayerKey:i}=$(),r=co(En.YAxis),l=o.left,a=c.exports.useMemo(()=>{if(t){const{x:p,re:h}=t,m=ye({height:n,margin:o,yDomain:s}),g=Qu(l,h,e),x=r({x:p,y:h}),y=new Wt;y.moveTo(g(x.y[x.y.length-1]),m(x.x.length-1));for(let k=x.x.length-2;k>=0;k--)y.lineTo(g(x.y[k]),m(x.x[k]));return y.toString()}else return},[t,l,o,e,n,r,s]),u=n-o.bottom-o.top;return!u||!l?null:_("svg",{viewBox:`0 0 ${l} ${u+o.top}`,width:l,height:u+o.top,children:[f("defs",{children:f("clipPath",{id:`${i}clip-left`,children:f("rect",{width:l,height:u,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${i}clip-left)`,children:f("path",{className:"line",stroke:"red",fill:"none",d:a})})]})}var uv=c.exports.memo(cv);function dv(){const{width:e,height:t,margin:n,activeSpectrum:o,data:s,xDomain:i,yDomain:r}=$(),l=Tf(),a=c.exports.useMemo(()=>{if(l&&o&&o.id){const{x:u,y:p}=l,h=Ae({margin:n,width:e,xDomain:i}),m=ye({margin:n,height:t,yDomain:r}),g=wg(s[o.index],{x:h.invert(u),y:m.invert(p)});return _("svg",{viewBox:`0 0 ${e} ${t}`,width:e,height:t,style:{position:"absolute",backgroundColor:"rgba(255,255,255,0.8)"},children:[(g==null?void 0:g.horizontal)&&f(av,{data:g.horizontal.data}),(g==null?void 0:g.vertical)&&f(uv,{data:g.vertical.data})]})}return null},[l,o,n,e,i,t,r,s]);return l?a:null}function pv({emptyText:e=void 0}){const t=$(),{toolOptions:{selectedTool:n},isLoading:o,data:s,margin:i,tabActiveSpectrum:r,activeTab:l}=t,a=Y(),{info:u}=Ce({info:{}}),p=u.isFt||!("isFt"in u),h=c.exports.useMemo(()=>l.split(",").reduce((C,E)=>{var T,M;if((T=r[E])!=null&&T.id){const D=(M=r[E])==null?void 0:M.id,I=s.find(A=>A.id===D&&!A.info.isFid);I&&C.push(I)}else C.push(null);return C},[]),[l,s,r]),m=$x(t),g=c.exports.useCallback(v=>{if(on(m,v)&&!v.altKey)if(v.shiftKey)switch(n){case F.zone2D.id:a(b({type:Gc},v));break}else switch(n){default:if(n!=null)return a(S(b({type:us},v),{trackID:on(m,v)}))}},[n,a,m]),x=c.exports.useCallback(v=>{const{x:C,y:E}=v,T=on(m,{startX:C,startY:E});T&&a({type:xn,trackID:T})},[m,a]),y=v=>{const{x:C,y:E}=v,T=on(m,{startX:C,startY:E});T&&a(T==="CENTER_2D"?b({type:Yc},v):{type:cs,event:v,trackID:T})},k=c.exports.useCallback(v=>{},[n]);return p?f(ni,{children:({width:v,height:C})=>_(ed,{width:v,height:C,children:[f(ju,{isLoading:o,emptyText:e}),s&&s.length>0&&f(na,{onBrush:g,onDoubleClick:x,onClick:k,onZoom:y,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:_(oa,{style:{width:"100%",height:"100%",position:"absolute"},children:[n&&n===F.slicingTool.id&&f(dv,{}),f(Bu,{}),h&&f(rv,{data1D:h,layout:m}),f(Eo,{brushType:Ie.XY,dimensionBorder:m.CENTER_2D}),_(et,{children:[(h==null?void 0:h[0])&&f(Eo,{brushType:Ie.X,dimensionBorder:m.TOP_1D,height:i.top}),(h==null?void 0:h[1])&&f(Eo,{brushType:Ie.Y,dimensionBorder:m.LEFT_1D,width:i.left})]}),h&&f(sv,{data1D:h,layout:m}),f(ov,{spectra:h})]})})]})}):f(Hu,{emptyText:"Currently FID can not be displayed for 2D spectra",canOpenLoader:!1})}function ed(e){const t=Y(),{width:n,height:o,children:s}=e;return c.exports.useEffect(()=>{t({type:Ti,width:n,height:o})},[n,o,t]),s}const hv="SET_X_SCALE",fv="SET_Y_SCALE",td="SET_SCALE",nd={scaleX:null,scaleY:null};function mv(e,t){switch(t.type){case hv:e.scaleX=(n=null)=>Vt(t,n);break;case fv:e.scaleY=(n=null)=>Fo(t,n);break;case td:{e.scaleX=(n=null)=>Vt(t.payload,n),e.scaleY=(n=null)=>Fo(t.payload,n);break}default:return e}}const gv=Qs(mv),od=c.exports.createContext(nd),xv=od.Provider;function Gi(){return c.exports.useContext(od)}function ge(){const e=Gi();if(!e.scaleX||!e.scaleY)throw new Error("scale cannot be null");return e}const te={TOP_LEFT:"top left",TOP_CENTER:"top center",TOP_RIGHT:"top right",MIDDLE_LEFT:"middle left",MIDDLE:"middle",MIDDLE_RIGHT:"middle right",BOTTOM_LEFT:"bottom left",BOTTOM_CENTER:"bottom center",BOTTOM_RIGHT:"bottom right"},Mn={INFO:"info",SUCCESS:"success",ERROR:"error",PROGRESS_INDICATOR:"progress_indicator"},Qe={FADE:"fade",SCALE:"scale",SLIDE_RIGHT:"slide_right",SLIDE_LEFT:"slide_left",SLIDE_TOP:"slide_top",SLIDE_BOTTOM:"slide_bottom"},sd=c.exports.createContext({}),bv=sd.Provider;function le(){return c.exports.useContext(sd)}const Us=250,yv={[Qe.FADE]:{transition:`opacity ${Us}ms ease`,opacity:0},[Qe.SCALE]:{transform:"scale(1)",transition:`all ${Us}ms ease-in-out`}},vv={[Qe.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Qe.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(1)"}}};function id(s){var i=s,{children:e,type:t,transitionStyles:n=vv}=i,o=G(i,["children","type","transitionStyles"]);const r=c.exports.useRef(null);return f(Ap,S(b({nodeRef:r},o),{timeout:Us,children:l=>f("div",{ref:r,style:b(b(b({},yv[t]),n[t][l]),n.default),children:e})}))}function Cv(e,t){const n=b({position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",pointerEvents:"none",overflow:"visible"},t?{top:`${t.top}px`,left:`${t.left}px`,height:`${t.height}px`,width:`${t.width}px`}:{width:"100%",height:"100%"});switch(e){case te.TOP_LEFT:return S(b({},n),{justifyContent:"flex-start",alignItems:"flex-start"});case te.TOP_CENTER:return S(b({},n),{justifyContent:"flex-start"});case te.TOP_RIGHT:return S(b({},n),{justifyContent:"flex-start",alignItems:"flex-end"});case te.MIDDLE_LEFT:return S(b({},n),{justifyContent:"center",alignItems:"flex-start"});case te.MIDDLE:return S(b({},n),{justifyContent:"center"});case te.MIDDLE_RIGHT:return S(b({},n),{justifyContent:"center",alignItems:"flex-end"});case te.BOTTOM_LEFT:return S(b({},n),{justifyContent:"flex-end",alignItems:"flex-start"});case te.BOTTOM_CENTER:return S(b({},n),{justifyContent:"flex-end"});case te.BOTTOM_RIGHT:return S(b({},n),{justifyContent:"flex-end",alignItems:"flex-end"});default:return n}}function rd(s){var i=s,{children:e,options:{position:t},containerStyle:n}=i,o=G(i,["children","options","containerStyle"]);const r=c.exports.useMemo(()=>Cv(t,n),[t,n]);return e.length>0&&f("div",S(b({style:r},o),{children:e}))}function kv(e,t){return e.reduce((n,o)=>{const s=t(o);return n[s]||(n[s]=[]),n[s].push(o),n},{})}const Sv=N`
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
`;function wv(){return d("div",{css:Sv})}function Ev(a){var u=a,{children:e,wrapperRef:t=null,offset:n="5px",position:o=te.BOTTOM_CENTER,timeout:s=3e3,type:i,transition:r=Qe.FADE}=u,l=G(u,["children","wrapperRef","offset","position","timeout","type","transition"]);const p=c.exports.useRef(null),h=c.exports.useRef([]),[m,g]=c.exports.useState([]);c.exports.useEffect(()=>{p.current=document.createElement("div");const A=p.current,P=h.current;return t&&t.appendChild(A),()=>{A&&t&&(P.forEach(clearTimeout),t.removeChild(A))}},[t]);const x=c.exports.useCallback(A=>{g(P=>{const R=P.length,O=P.filter(L=>L.id!==A.id);return R>O.length&&A.options.onClose&&A.options.onClose(),O})},[]),y=c.exports.useCallback((A="",P={})=>{const R=Math.random().toString(36).substr(2,9),O=b({position:P.position||o,timeout:s,type:i,backgroundColor:"black",color:"white"},P),L={id:R,message:A,options:O};if(L.close=()=>x(L),L.options.timeout){const H=setTimeout(()=>{x(L),h.current.splice(h.current.indexOf(H),1)},L.options.timeout);h.current.push(H)}return g(H=>H.concat(L)),L.options.onOpen&&L.options.onOpen(),L},[o,x,s,i]),k=c.exports.useCallback((A="",P={})=>(P.type=Mn.SUCCESS,P=b({backgroundColor:"#28ba62",color:"white"},P),y(A,P)),[y]),v=c.exports.useCallback((A="",P={})=>(P.type=Mn.ERROR,P=b({backgroundColor:"#cf3c4f",color:"white"},P),y(A,P)),[y]),C=c.exports.useCallback((A="",P={})=>(P.type=Mn.INFO,P.color="#28ba62",y(A,P)),[y]),E=c.exports.useCallback((A="Process in progress",P={})=>(P.type=Mn.PROGRESS_INDICATOR,P.timeout=0,P.backgroundColor="#232323",new Promise(R=>{const O=y(A,P);setTimeout(()=>{R(()=>x(O))},500)})),[x,y]),T=c.exports.useCallback(A=>{x(A)},[x]),M=kv(m,A=>A.options.position),D=c.exports.useMemo(()=>t?t.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[t]),I=c.exports.useMemo(()=>({show:y,success:k,error:v,info:C,showLoading:E}),[y,k,v,C,E]);return _(bv,{value:I,children:[e,p.current&&qo.exports.createPortal(f(c.exports.Fragment,{children:Object.keys(te).map(A=>{const P=te[A];return f(Ol,S(b({appear:!0,options:{position:P,zIndex:999999},component:rd,containerStyle:D},l),{children:M[P]?M[P].map(R=>f(id,{type:r,children:_("div",{style:{margin:n,padding:"25px",borderRadius:"10px",pointerEvents:"all",backgroundColor:R.options.backgroundColor,color:R.options.color,minHeight:"60px",position:"relative"},children:[f("button",{style:{position:"absolute",right:"5px",top:"5px",border:"none",backgroundColor:"transparent",color:"white"},type:"button",onClick:()=>T(R),children:f(oi,{})}),f("span",{children:R.message}),R.options.type===Mn.PROGRESS_INDICATOR&&f(wv,{})]},R.id)},R.id)):null}),P)})}),p.current)]})}var Av=c.exports.memo(Ev);const ld=c.exports.createContext({}),Tv=ld.Provider;function fe(){return c.exports.useContext(ld)}const Dv=N`
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
`;function Iv({style:e={},buttons:t=[],onClose:n,message:o}){const s=c.exports.useCallback((i,{handler:r=()=>null})=>{r(i),n()},[n]);return w("div",{style:e,css:Dv,children:[d("p",{className:"message",children:o}),d("div",{className:"buttons-container",children:t.map(i=>d("button",{type:"button",onClick:r=>s(r,i),style:i.style&&i.style,children:i.text},i.text))})]})}const Pv=({modal:e,onClose:t,onLayout:n})=>{const o=c.exports.useRef(),[s,{width:i,height:r}]=Tp(()=>f("div",{style:{height:"100%",display:"block",overflow:"auto"},children:c.exports.cloneElement(e.component,S(b({},e.options),{onClose:t,style:{cursor:"default"}}))}));return c.exports.useEffect(()=>{isFinite(r)&&isFinite(i)&&!o.current&&(o.current={width:i,height:r},n({modal:e,layout:{width:i,height:r}}))},[i,r,o,n,e]),s},Rv={[Qe.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Qe.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(0)"}}};function Mv({children:e,style:t=void 0,offset:n="0px",position:o=te.MIDDLE,transition:s=Qe.SCALE,wrapperRef:i=null}){const r=c.exports.useRef(),l=c.exports.useRef(),[a,u]=c.exports.useState();c.exports.useEffect(()=>{r.current=document.createElement("div");const C=r.current;return i&&i.appendChild(C),()=>{C&&i&&i.removeChild(C)}},[i]);const p=c.exports.useCallback(function(){u(null)},[u]),h=c.exports.useMemo(()=>i?i.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[i]),m=c.exports.useCallback((C,E={})=>{const T={component:C,options:b({isBackgroundBlur:!0,enableResizing:!1},E)};return T.close=p,u(T),T.options.onOpen&&T.options.onOpen(),T},[p]),g=c.exports.useCallback((C,E={enableResizing:!1})=>{const T={component:d(Iv,b({},C)),options:b({isBackgroundBlur:!0},E)};return T.close=p,u(T),T.options.onOpen&&T.options.onOpen(),T},[p]);c.exports.useEffect(()=>{function C(E){["Escape","Esc"].includes(E.key)&&p()}return document.addEventListener("keydown",C,!1),()=>document.removeEventListener("keydown",C,!1)},[p]);const x=N`
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
  `,y=a!=null&&a.options.isBackgroundBlur?{backgroundColor:"rgba(255,255,255,0.8)"}:{pointerEvents:"none"},k=c.exports.useMemo(()=>({show:m,close:p,showConfirmDialog:g}),[m,p,g]),v=c.exports.useCallback(({modal:C,layout:E})=>{const T=C.options.width?C.options.width:E.width>h.width?h.width:E.width,M=C.options.height?C.options.height:E.height>h.height?h.height:E.height;l.current.updateSize({width:T,height:M})},[h.height,h.width]);return w(Tv,{value:k,children:[e,r.current&&qo.exports.createPortal(d(c.exports.Fragment,{children:a?d("div",{css:x,style:b({},y),children:d(Ol,{appear:!0,options:{position:a.options.position?a.options.position:o},containerStyle:h,component:rd,children:d(id,{type:a.options.transition?a.options.transition:s,transitionStyles:S(b({},Rv),{default:{width:a.options.width?`${a.options.width}px`:"auto"},height:a.options.height?`${a.options.height}px`:"auto"}),children:d(Dp,{maxWidth:h.width,maxHeight:h.height,ref:l,default:{width:a.options.width?a.options.width:"auto",height:a.options.height?a.options.height:"auto",x:0,y:0},className:"rnd-container",style:S(b({},t),{margin:n,position:"static",pointerEvents:"all",userSelect:"none"}),enableResizing:a.options.enableResizing,dragHandleClassName:"handle",enableUserSelectHack:!1,children:d(Pv,{modal:a,onClose:p,onLayout:v})})},a.id)},te[a.options.transition?a.options.transition:s])}):null}),r.current)]})}const ad=c.exports.createContext({rootRef:null,elementsWrapperRef:null}),Nv=ad.Provider;function fs(){return c.exports.useContext(ad)}const _v={popup:{position:"fixed",top:0,left:0,pointerEvents:"none",backgroundColor:"gray",padding:"3px",borderRadius:"2px",color:"white",whiteSpace:"nowrap",fontSize:"10px",fontFamily:"tahoma",textShadow:"none"}};function Fv({style:e={popup:{},mainContainer:{}},className:t="",popupPlacement:n="right",children:o,title:s,offset:i={x:0,y:0}}){const r=c.exports.useRef(null),l=c.exports.useRef(null),[a,u]=c.exports.useState({x:0,y:0}),[p,h]=c.exports.useState(!1),{elementsWrapperRef:m}=fs();c.exports.useLayoutEffect(()=>{const y=()=>{let k,v;if(r.current===null||l.current===null)return null;const C=r.current.getBoundingClientRect(),E=l.current.getBoundingClientRect();switch(n){case"left":k=-E.width,v=C.height/2-C.height/2*E.height/C.height;break;case"right":k=C.width,v=C.height/2-C.height/2*E.height/C.height;break;case"top":k=C.width/2-C.width/2*E.width/C.width,v=-C.height;break;case"bottom":k=C.width/2-C.width/2*E.width/C.width,v=C.height;break;default:k=0,v=0;break}return{x:k+C.x,y:v+C.y}};if(p){const k=y();k&&u(k)}},[n,p]);const g=c.exports.useCallback(()=>{h(!0)},[]),x=c.exports.useCallback(()=>{h(!1)},[]);return _(c.exports.Fragment,{children:[f("div",{style:b({position:"relative",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},e.mainContainer),ref:r,onMouseOver:g,onMouseOut:x,children:o}),p&&m&&qo.exports.createPortal(f("div",{ref:l,style:b(S(b({},_v.popup),{transform:`translate(${a.x+i.x}px,${a.y+i.y}px)`,zIndex:999999999}),e.popup),className:t,children:f("span",{style:{pointerEvents:"none"},children:s})}),m)]})}var Ee=c.exports.memo(Fv);const zr={button:{backgroundColor:"transparent",border:"none",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},svg:{fill:"#ca0000",fontSize:"16px"}};function Lv(e){const{onClick:t=()=>null,popupTitle:n="Close",popupPlacement:o="left",className:s=""}=e;return f("div",{className:s,children:f(Ee,{title:n,popupPlacement:o,children:f("button",{style:zr.button,type:"button",onClick:t,children:f(oi,{style:zr.svg})})})})}var me=c.exports.memo(Lv);const Ov=N`
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
`,$v=N`
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
`;function Hv({data:e,activeSpectrum:t,scaleX:n,startX:o,endX:s,onClose:i}){var m;const[r,l]=c.exports.useState(),[a,u]=c.exports.useState(!1),[p,h]=c.exports.useState(!1);return c.exports.useEffect(()=>{setTimeout(()=>{u(!0)},400)},[]),c.exports.useEffect(()=>{if(t&&o&&s&&a){const g=e[t.index];if(Xs(g))throw new Error("unreachable");const{data:{x,re:y},info:k}=g,v=n().invert(o),C=n().invert(s),{fromIndex:E,toIndex:T}=Un(x,{from:v,to:C}),M={x:x.slice(E,T),y:y.slice(E,T)};try{const D=Dl(M,{frequency:k.originFrequency,takeBestPartMultiplet:!0,symmetrizeEachStep:!0,debug:!0});h(!0),l(D)}catch(D){console.log(D)}}},[o,s,e,n,t,a]),p?w("div",{css:Ov,children:[w("div",{className:"header handle",children:[d("span",{children:"Analyse Multiplet"}),d(me,{onClick:i})]}),d("div",{className:"container",children:(m=r==null?void 0:r.debug)==null?void 0:m.steps.map((g,x)=>{var y,k;return w("div",{className:"row",children:[w(dn,{width:400,height:200,svgStyle:{overflow:"visible"},seriesViewportStyle:{stroke:"black"},children:[d(qe,{data:fr(g.multiplet)}),d($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),d($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]}),d("div",{className:"multiplicity",children:d("p",{children:r.js[x]?`${(y=r.js[x])==null?void 0:y.multiplicity}: ${(k=r.js[x])==null?void 0:k.coupling.toFixed(3)} Hz`:""})}),w(dn,{width:400,height:200,seriesViewportStyle:{stroke:"black"},children:[d(qe,{data:fr(g.errorFunction),lineStyle:{strokeWidth:1}}),d($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),d($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]})]},x)})})]}):w("div",{css:$v,children:[d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[d("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),d("path",{d:"M520.5 78.1z"})]})}),d("p",{children:"Analyse Multiplet in progress. Please wait ..."})]})}function cd(){const{data:e,activeTab:t}=$();return c.exports.useMemo(()=>e?e.filter(n=>t===Tt(n.info.nucleus))||[]:[],[t,e])}function ud(e){const{activeSpectrum:t}=$(),n=re();return c.exports.useMemo(()=>{const o=t===null?!0:e===t.id,s=o?1:V(n.current,"controllers.dimmedSpectraTransparency",.1);return{isActive:o,opacity:s}},[t,e,n])}function zv({zone:e,color:t,vAlign:n,spectrumID:o}){const{scaleX:s,scaleY:i}=ge(),r=ie([e.id],{type:ue.EXCLUSION_ZONE,extra:{id:e.id,spectrumID:o}}),{opacity:l}=ud(o);return f("g",{transform:`translate(${s()(e.to)},0)`,children:f("rect",b({x:"0",transform:`translate(0,${i()(0)-(n+5)})`,width:`${s()(e.from)-s()(e.to)}`,height:"10px",style:{fill:r.isActive?"#ff6f0057":t,opacity:l}},r.onHover))},e.id)}var Vv=c.exports.memo(zv);function ms(e,t){const{index:n=1,align:o="stack"}=t||{index:1,align:"stack"};return e.align===o?n*e.verticalShift:0}function jv({displayerKey:e,xDomains:t,spectra:n,verticalAlign:o}){return f("g",{className:"spectrum-exclusion-zones-group",clipPath:`url(#${e}clip-chart-1d)`,children:n.filter(s=>s.display.isVisible===!0&&t[s.id]).map((s,i)=>Yv(s).map(r=>f(Vv,{spectrumID:s.id,vAlign:ms(o,{index:i}),zone:r,color:s.display.color},r.id)))})}const Bv=c.exports.memo(jv);function Xv(){const{displayerKey:e,xDomains:t,displayerMode:n,verticalAlign:o}=$(),s=cd();return n!==B.DM_1D?null:f(Bv,{spectra:s,displayerKey:e,xDomains:t,verticalAlign:o})}function Yv(e){var t;return((t=e.filters.find(n=>n.name===Qn&&n.flag))==null?void 0:t.value)||[]}function Gv(){const{width:e,margin:t,xDomains:n,xDomain:o,mode:s}=$();return c.exports.useMemo(()=>Vt({width:e,margin:t,xDomains:n,xDomain:o,mode:s}),[t,s,e,o,n])}function Wv(){const{height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}=$();return c.exports.useMemo(()=>px({height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}),[o,e,s,t,n])}function dd(e){const{data:t,activeSpectrum:n}=$(),o=Gv(),s=Wv(),i=c.exports.useMemo(()=>{if(n){const{x:l,re:a}=t[n==null?void 0:n.index].data,{from:u,to:p}=e;return Ip({x:l,y:a},{from:u,to:p,reverse:!0})}return{x:[],y:[]}},[n,t,e]);return c.exports.useMemo(()=>{if(i){const l=Fl(i,{nbPoints:200,optimize:!0}),a=new Wt;a.moveTo(o(l.x[0]),s(l.y[0]));for(let u=1;u<l.x.length;u++)a.lineTo(o(l.x[u]),s(l.y[u]));return a.toString()}else return""},[i,o,s])}const _t={showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",color:"#000000",strokeWidth:1},Zv={showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00"},Wi=e=>({showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",jGraphTolerance:e==="1H"?.2:e==="13C"?2:0}),pd={showPeakNumber:!0,peakNumberFormat:"0",showPeakIndex:!1,peakIndexFormat:"0.00",showDeltaPPM:!0,deltaPPMFormat:"0.00",showDeltaHz:!1,deltaHzFormat:"0.00",showPeakWidth:!1,peakWidthFormat:"00.0000",showIntensity:!0,intensityFormat:"0.00"},hd={showSmiles:!0,showSolvent:!1,showNames:!0,showRange:!1,showDelta:!0,showAssignment:!1,showCoupling:!0,showMultiplicity:!0};function Xo(e){const{x:t,anchor:n}=e,o=c.exports.useRef(!1),s=c.exports.useRef({relativeX:t,x:t}),[i,r]=c.exports.useState({x:t,action:null});return c.exports.useEffect(()=>{s.current={relativeX:t,x:t},r({x:t,action:null})},[t]),{onMouseDown:c.exports.useCallback(a=>{r({x:s.current.x,action:"start"}),s.current.relativeX=a.clientX-s.current.relativeX,o.current=!0,a.stopPropagation();function u(h){if(h.stopPropagation(),o.current){const m=h.clientX-s.current.relativeX;s.current={relativeX:m,x:m},r({x:m,action:"end"}),o.current=!1}window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",u)}function p(h){h.stopPropagation(),o.current&&r({x:h.clientX-s.current.relativeX,action:"move"})}window.addEventListener("mousemove",p),window.addEventListener("mouseup",u)},[]),position:i,previousPosition:s.current.x,isActive:o.current,anchor:n}}const Vr={marginLeft:"5px",width:"2px",height:"100%",pointerEvents:"none",position:"relative"},As={container:e=>N`
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
  `,content:(e,t,n)=>{const o=n.previousPosition-t.previousPosition,s=N`
      position: absolute;
      width: ${o}px;
      overflow: hidden;
    `;if(n.position.action==="move"||t.position.action==="move"){const i=(n.position.x-t.position.x)/o;if(e==="RIGHT")return[s,N`
            transform: translateX(${t.position.x}px) scaleX(${i});
            transform-origin: left center;
          `];if(e==="LEFT")return N([s,N`
            transform: translateX(${t.position.x}px) scaleX(${i});
            transform-origin: left center;
          `])}else return N([s,N`
          transform: translateX(${t.position.x}px);
        `])}};function Uv(e){const{children:t,initialPosition:n={x1:10,x2:40},onStart:o,onMove:s,onEnd:i}=e,r=Xo({x:n.x2,anchor:"RIGHT"}),l=Xo({x:n.x1,anchor:"LEFT"}),a=l.isActive?l.anchor:r.isActive?r.anchor:"";return c.exports.useEffect(()=>{const u={x1:l.position.x,x2:r.position.x};switch(l.isActive?l.position.action:r.isActive?r.position.action:""){case"start":o==null||o(u);break;case"move":s==null||s(u);break;case"end":i==null||i(u);break}},[l,i,s,o,r]),w(Ve,{children:[d("div",{"data-no-export":"true",onMouseDown:r.onMouseDown,css:As.container(r.position.x),children:d("div",{style:Vr})}),d("div",{css:As.content(a,l,r),children:typeof t=="function"?t==null?void 0:t(l.position.x,r.position.x):t}),d("div",{"data-no-export":"true",onMouseDown:l.onMouseDown,css:As.container(l.position.x),children:d("div",{style:Vr})})]})}const Kv={width:"2px",height:"100%",pointerEvents:"none",fill:"transparent"},jr={container:e=>N`
    transform: translateX(${e}px);

    &:hover {
      rect:last-child {
        fill: red !important;
      }
    }
  `,innerContainer:N`
    position: absolute;
    height: 100%;
    fill: transparent;
    width: 10px;
    cursor: e-resize;
    user-select: none;
    z-index: 99999999;
  `};function qv(e){const{children:t,initialPosition:n={x1:10,x2:40},onStart:o,onMove:s,onEnd:i}=e,r=Xo({x:n.x2,anchor:"RIGHT"}),l=Xo({x:n.x1,anchor:"LEFT"});return c.exports.useEffect(()=>{const a={x1:l.position.x,x2:r.position.x};switch(l.isActive?l.position.action:r.isActive?r.position.action:""){case"start":o==null||o(a);break;case"move":s==null||s(a);break;case"end":i==null||i(a);break}},[l,i,s,o,r]),w("g",{style:{transform:`translateX(${l.position.x}px)`},children:[typeof t=="function"?t(l.position.x,r.position.x):t,d(Br,{onMouseDown:l.onMouseDown,position:0}),d(Br,{onMouseDown:r.onMouseDown,position:r.position.x-l.position.x})]})}function Br(e){return w("g",{onMouseDown:e.onMouseDown,css:jr.container(e.position),"data-no-export":"true",children:[d("rect",{x:"-5px",css:jr.innerContainer}),d("rect",{x:"-2.5px",style:Kv})]})}function Zi(e){const o=e,{tag:t="div"}=o,n=G(o,["tag"]);return t==="div"?f(Uv,b({},n)):f(qv,b({},n))}const Jv=N`
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
`,Qv=N`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  fill: #ff6f0057;

  .target {
    visibility: visible;
  }
`;function e1({integralData:e}){const{height:t,margin:n}=$(),{scaleX:o}=ge(),s=Y(),{id:i,from:r,to:l,integral:a}=e,u=ie([i],{type:ue.INTEGRAL,extra:{id:i}}),p=c.exports.useCallback(y=>{s({type:kc,payload:{data:S(b({},e),{from:o().invert(y.x2),to:o().invert(y.x1)})}})},[s,e,o]),h=c.exports.useCallback(()=>{u.show()},[u]),m=c.exports.useCallback(()=>{u.hide()},[u]),g=r?o()(r):0,x=l?o()(l):0;return d("g",{css:u.isActive?Qv:Jv,onMouseEnter:h,onMouseLeave:m,children:d(Zi,{tag:"svg",initialPosition:{x1:x,x2:g},onEnd:p,children:(y,k)=>w("g",{children:[d("rect",{x:"0",y:"0",width:k-y,height:t-n.bottom,className:"highlight","data-no-export":"true"}),d("text",{x:0,y:t-n.bottom+30,fill:"black",style:{fontSize:"12px",fontWeight:"bold"},children:a!==void 0?a.toFixed(2):""})]})})})}function t1({integral:e,isActive:t}){const n=re(),o=dd(e),s=c.exports.useMemo(()=>{let{color:i=_t.color,strokeWidth:r=_t.strokeWidth}=ht(n.current,"formatting.panels.integrals")||{};return{color:i,strokeWidth:r}},[n]);return _("g",{children:[f("path",{className:"line",stroke:s.color,strokeWidth:s.strokeWidth,fill:"none",style:{opacity:t?1:.2},d:o}),f(e1,{integralData:e})]})}function n1(){const{xDomains:e,activeSpectrum:t,data:n,displayerKey:o}=$(),s=c.exports.useMemo(()=>{const i=r=>t===null?!0:r===t.id;return f("g",{className:"integrals",children:(n==null?void 0:n[0])&&n.filter(r=>r.display.isVisible===!0&&e[r.id]).filter(to).map(r=>r.integrals.values.map(l=>f(t1,{integral:l,isActive:i(r.id)},l.id)))})},[t,n,e]);return f("g",{clipPath:`url(#${o}clip-chart-1d)`,children:s})}function o1({data:e,id:t,display:n,index:o}){const{verticalAlign:s}=$(),{scaleX:i,scaleY:r}=ge(),l=co(En.XAxis),{opacity:a}=ud(t),u=c.exports.useMemo(()=>ms(s,{index:o}),[o,s]),p=c.exports.useMemo(()=>{const h=i(),m=r(t),g=new Wt;if((e==null?void 0:e.x)&&(e==null?void 0:e.y)&&h(0)){const x=l(e);g.moveTo(h(x.x[0]),m(x.y[0]));for(let y=1;y<x.x.length;y++)g.lineTo(h(x.x[y]),m(x.y[y]));return g.toString()}else return""},[i,r,t,e,l]);return f("path",{className:"line","data-test-id":"spectrum-line",stroke:n.color,fill:"none",style:{opacity:a},d:p,transform:`translate(0,-${u})`},t)}function s1(){const{data:e,tempData:t,displayerKey:n,xDomains:o}=$(),s=t||e;return f("g",{clipPath:`url(#${n}clip-chart-1d)`,className:"spectrums",children:s==null?void 0:s.filter(i=>i.display.isVisible===!0&&o[i.id]).map((i,r)=>f(o1,S(b({},i),{data:Cn(i),index:r}),i.id))})}const i1=N`
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
`;function r1({id:e,x:t,y:n,sign:o,value:s,color:i,isActive:r,nucleus:l}){const a=c.exports.useRef(null),[u,p]=c.exports.useState(!1),[h,m]=c.exports.useState(s),[g,x]=c.exports.useState({width:0,height:0}),y=Be(l),k=ie([e],{type:ue.PEAK,extra:{id:e}}),v=Y(),C=c.exports.useCallback(R=>v({type:Ei,shiftValue:R.shiftValue}),[v]);c.exports.useLayoutEffect(()=>{var O;const R=(O=a.current)==null?void 0:O.getBBox();x({width:(R==null?void 0:R.width)||0,height:(R==null?void 0:R.height)||0})},[u]),c.exports.useEffect(()=>{m(s)},[s]);const E=c.exports.useCallback(R=>{if(R.key==="Enter"){const O=R.currentTarget.valueAsNumber;if(!isNaN(O)){const L=O-s;C({id:e,value:O,oldValue:s,shiftValue:L}),R.currentTarget.blur(),p(!1)}}else R.key==="Escape"&&(m(s),R.currentTarget.blur(),p(!1))},[s,C,e]),T=c.exports.useCallback(R=>{m(R.target.value)},[]),M=c.exports.useCallback(R=>(R.stopPropagation(),p(!0),!1),[]),D=c.exports.useCallback(()=>{k.show()},[k]),I=c.exports.useCallback(()=>{k.hide()},[k]),A=c.exports.useMemo(()=>u?s:y(s),[y,u,s]),P=c.exports.useMemo(()=>u?h:y(h),[h,y,u]);return w("g",{css:i1,id:e,style:{outline:"none"},transform:`translate(${t}, ${n})`,onMouseEnter:D,onMouseLeave:I,children:[d("line",{x1:"0",x2:"0",y1:o===-1?10:0,y2:o===-1?28:-18,stroke:i,strokeWidth:k.isActive?"7px":"1px"}),d("text",{ref:a,className:"peaks-text",x:"0",y:o===-1?28:-12,dy:"0",dx:"0.35em",fill:"transparent",fontSize:"10px",fontWeight:"100",style:{position:"absolute"},children:A}),d("foreignObject",{x:"0",y:o===-1?16:-22,dy:"0.1em",dx:"0.35em",width:g.width+20,height:"40px","data-no-export":"true",children:d("div",{style:{width:g.width+20,height:"100%",paddingRight:5},children:d("input",{onClick:M,className:u?"input-over":"notification-input-normal",style:{width:"inherit",border:u?`1px solid ${i}`:"0",opacity:r?1:.2,userSelect:"none",color:i},value:P,onKeyDown:E,onChange:T,type:"number",disabled:!r})})})]})}function l1(){const{data:e,activeSpectrum:t,verticalAlign:n,displayerKey:o,xDomains:s}=$(),{scaleX:i,scaleY:r}=ge(),l=c.exports.useMemo(()=>{const a=p=>{const h=e.findIndex(m=>m.id===p);return ms(n,{index:h})};return e&&(()=>{const p=[...e];return t?p.sort((h,m)=>h.id===t.id?1:m.id===t.id?-1:0):p})().filter(p=>p.display.isVisible===!0&&s[p.id]).filter(to).map(p=>{var h;return((h=p.peaks)==null?void 0:h.values)&&p.display.isPeaksMarkersVisible&&f("g",{transform:`translate(0,-${a(p.id)})`,children:p.peaks.values.map(({x:m,y:g,id:x})=>f(r1,{x:i()(m),y:r(p.id)(g)-5,sign:Math.sign(g),id:x,value:m,color:"#730000",nucleus:p.info.nucleus,isActive:t==null?!1:t.id===p.id},x))},p.id)})},[e,n,t,s,i,r]);return f("g",{className:"peaks",clipPath:`url(#${o}clip-chart-1d)`,children:l})}const a1={info:{originFrequency:400}};function c1(){var x;const{displayerKey:e,verticalAlign:t,height:n,margin:o}=$(),{info:s}=Ce(a1),{highlight:i}=An(),{scaleX:r}=ge();if(((x=i.sourceData)==null?void 0:x.type)!==ue.DATABASE)return null;const l=n-o.bottom,a=l/4,{ranges:u}=i.sourceData.extra||[];let p=[0,0];const h=u.map(y=>{const{from:k,to:v}=y,C=Math.abs(k-v)/2,E=k-C,T=v+C,M=Rl([y],{frequency:s.originFrequency,from:E,to:T,nbPoints:256}),D=bt(M.y);return p[0]=D[0]<p[0]?D[0]:p[0],p[1]=D[1]>p[1]?D[1]:p[1],{data:M,from:E,to:T}},[]),m=Fo({height:a,margin:{top:0,bottom:0},verticalAlign:t,yDomain:p}),g=h.map(({data:{x:y,y:k},from:v,to:C})=>{let E=`M ${r()(y[0])} ${m(k[0])} `;return E+=y.slice(1).reduce((T,M,D)=>(T+=` L ${r()(M)} ${m(k[D+1])}`,T),""),{path:E,from:v,to:C}},[]);return f("g",{clipPath:`url(#${e}clip-chart-1d)`,className:"resurrected-database-ranges",width:"100%",height:"100%",children:g.map(({path:y,from:k,to:v},C)=>_("g",{children:[f("g",{transform:`translate(${r()(v)},0)`,children:f("rect",{x:"0",width:Math.abs(r()(v)-r()(k)),height:"100%",fill:"#ff6f0057"})}),f("path",{transform:`translate(0,${l-a*2})`,stroke:"black",fill:"none",d:y})]},`${C}`))})}const u1=N`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,d1=N`
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
`;function p1(e){const{show:t=!0,showGrid:n=!1,mode:o,label:s}=e,{xDomain:i,height:r,width:l,margin:a}=$(),{scaleX:u}=Gi(),p=c.exports.useRef(null),h=c.exports.useRef(null),m=s||(o==="RTL"?"\u03B4 [ppm]":"time [s]");return c.exports.useEffect(()=>{if(!t||!u)return;const g=Ls(u().domain(i)).ticks(8).tickFormat(ei("0")),x=Ls(u().domain(i)).ticks(50).tickSize(-(r-a.top-a.bottom)).tickFormat(()=>"");Do(p.current).call(g),Do(h.current).call(x)},[r,a.bottom,a.top,u,t,i]),!l||!r||!u?null:w(Ve,{children:[t&&d("g",{className:"x",css:u1,transform:`translate(0,${r-a.bottom})`,ref:p,children:d("text",{fill:"#000",x:l-10,y:"30",dy:"0.70em",textAnchor:"end",children:m})}),n&&d("g",{css:d1,className:"grid",ref:h,transform:`translate(0,${r-a.bottom})`})]})}function h1(e,t){if(!e&&!Array.isArray(e))return null;let n=[],o=0,s=g1(e,t);for(const r of e)for(const l of r.signals){const i=l,{id:a}=i,u=G(i,["id"]);if(u.js){n.push(b({id:`${r.id}${a}`},u));const p=f1(u.js);o=p>o?p:o}}return{signals:n,jCouplingMax:o,links:s}}function f1(e){let t=-1/0;for(const{coupling:n}of e)t=n>t?n:t;return t}function m1(e){const t=[];for(let n of e)for(const{delta:o,js:s}of n.signals)for(const{coupling:i}of s||[])t.push({coupling:i,delta:o});return t}function Xr(e){const{delta:t}=e;return{id:U(),from:t,to:t,couplings:[e]}}function g1(e,t=0){const n=m1(e).sort((l,a)=>l.coupling-a.coupling);if(!n||n.length===0)return[];const o=[Xr(n[0])];let s=0,i=s,r=1;for(;r<n.length;){const l=n[r];Math.abs(n[i].coupling-l.coupling)<t?(o[s].couplings.push(l),l.delta>o[s].to?o[s].to=l.delta:l.delta<o[s].from&&(o[s].from=l.delta),r++):Math.abs(n[r-1].coupling-l.coupling)<t?i=r-1:(s++,o[s]=Xr(n[r]),i=r,r=r+1)}return o}const fd=c.exports.createContext({scaleY:null,height:0,maxValue:0}),x1=fd.Provider;function gs(){const e=c.exports.useContext(fd);if(!e.scaleY)throw new Error("scale cannot be null");return e}const b1=c.exports.forwardRef((e,t)=>{const{x:n,y:o,height:s,showGrid:i,ticks:r}=e;return _("g",{ref:t,transform:`translate(${n}, ${o})`,children:[f("line",{y2:s,x1:15,x2:15,stroke:"black"}),r.map(({label:l,position:a},u)=>_("g",{children:[i&&e.width&&f("line",{y1:a,y2:a,x1:15,x2:e.width-n,stroke:"lightgray"}),f("line",{y1:a,y2:a,x1:15,x2:10,stroke:"black"}),f("text",{y:a,dominantBaseline:"middle",textAnchor:"end",children:l})]},u+l+a))]})});function y1(e){const i=e,{scale:t}=i,n=G(i,["scale"]),o=c.exports.useRef(null),s=Pp(t,"vertical",o);return f(b1,S(b({},n),{ticks:s,ref:o}))}function v1(){const{width:e,margin:t}=$(),{height:n,scaleY:o}=gs();return o?f("svg",{style:{overflow:"visible"},height:n+20,width:60,children:f(y1,{x:20,y:0,scale:o,height:n,showGrid:!0,width:e-t.right})}):null}function C1(e){const{links:t}=e,{scaleX:n}=ge(),{scaleY:o,maxValue:s}=gs(),i=c.exports.useCallback(r=>{if(!o)return"";const{from:l,to:a,couplings:u}=r;let p=[];for(const h of u)p.push(`M${n()(l)},${o(h.coupling)} L${n()(a)},${o(h.coupling)}`);return p.join(" ")},[n,o]);return f("g",{className:"js-coupling-links",children:t.filter(r=>r.couplings.length>1).map(r=>f("path",{d:i(r),style:{stroke:`hsl(${r.couplings[0].coupling*360/s},100%,50%)`},strokeWidth:"1"},r.id))})}function k1({value:e}){const{scaleY:t,maxValue:n}=gs(),[o,s]=c.exports.useState(!1);return t?_("g",{className:"coupling",style:{transform:`translate(0px,${t(e)}px)`},children:[f("circle",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),cx:0,cy:0,r:4,fill:`hsl(${e*360/n},100%,${o?45:50}%)`,pointerEvents:"all"}),o&&_("g",{style:{transform:"translate(0px,15px)"},children:[f("text",{pointerEvents:"none",stroke:"white",strokeWidth:"0.6em",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`}),f("text",{pointerEvents:"none",stroke:"black",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`})]})]}):null}function S1(e){const{scaleX:t}=ge(),{height:n}=gs();return f("g",{className:"js-coupling",children:e.signals.map(o=>{var s;return _("g",{transform:`translate(${t()(o.delta)},0)`,children:[f("line",{x1:"0",y1:n,x2:"0",y2:"0",stroke:"black",strokeWidth:"1"}),(s=o.js)==null?void 0:s.map(i=>f(k1,{value:i.coupling},`${i.coupling}`))]},o.id)})})}const w1=50;function E1(e){const{signals:t,links:n}=e;return _("g",{className:"j-graph",transform:`translate(0,${w1})`,children:[f(v1,{}),f(C1,{links:n}),f(S1,{signals:t})]})}const A1={ranges:{}},T1=c.exports.memo(E1);function D1(){const e=re(),{height:t,toolOptions:{data:{showJGraph:n}},activeTab:o}=$(),s=t/4,{ranges:i}=Ce(A1),r=c.exports.useMemo(()=>(V(e.current,`formatting.panels.ranges.[${o}]`)||Wi(o)).jGraphTolerance,[o,e]),{signals:l,jCouplingMax:a,links:u}=c.exports.useMemo(()=>h1(i.values,r)||{signals:[],jCouplingMax:0,links:[]},[r,i.values]),p=c.exports.useMemo(()=>{const m=a+a*.1;return Je().range([s,0]).domain([0,m])},[s,a]),h=c.exports.useMemo(()=>({scaleY:p,height:s,maxValue:a}),[s,p,a]);return n?f(x1,{value:h,children:f(T1,{signals:l,links:u})}):null}function md(e){const{x:t="initial",y:n="initial",onDelete:o=()=>null,fill:s="#c81121"}=e;return _("svg",{className:"delete-button",x:t,y:n,onClick:o,"data-no-export":"true",children:[f("rect",{rx:"5",width:"16",height:"16",fill:s}),f("line",{x1:"5",x2:"10",y1:"8",y2:"8",stroke:"white",strokeWidth:"2"})]})}const Ts={common:N`
    pointer-events: bounding-box;

    @-moz-document url-prefix() {
      pointer-events: fill;
    }
  `,hover:N`
    .delete-button {
      visibility: hidden;
    }
  `,Highlighted:N`
    .range-area {
      height: 100%;
      fill: #ff6f0057;
    }
    .delete-button {
      visibility: visible;
      cursor: pointer;
    }
  `};function I1({rangeData:e,columnKey:t}){const{from:n,to:o}=e,s=ie([t]),{scaleX:i}=ge(),r=Y(),l=c.exports.useCallback(()=>{r({type:Hi,colKey:t})},[t,r]),a=c.exports.useCallback(u=>{r({type:iu,payload:S(b(b({},e),u),{columnKey:t})})},[t,r,e]);return d("g",S(b({},s.onHover),{css:[Ts.common,s.isActive?Ts.Highlighted:Ts.hover],children:d(Zi,{tag:"svg",onEnd:a,initialPosition:{x2:i()(n),x1:i()(o)},children:(u,p)=>w(Ve,{children:[w("g",{transform:"translate(0,25)",children:[d("rect",{x:"0",width:p-u,height:"6",className:"range-area",fill:"green"}),d("text",{textAnchor:"middle",x:(p-u)/2,y:"-5",fontSize:"12",fill:"red",fontWeight:"bolder",fillOpacity:s.isActive?1:.6,children:t})]}),d(md,{x:-20,y:10,onDelete:l})]})})}))}function P1({activeTab:e,spectraAnalysis:t,displayerKey:n}){const o=c.exports.useMemo(()=>{const{options:{columns:i}}=t[e]||{options:{columns:{}}};return i},[e,t]),s=c.exports.useMemo(()=>Object.keys(o).map(i=>i,[]),[o]);return!s||s.length===0?null:f("g",{clipPath:`url(#${n}clip-chart-1d)`,children:s.map(i=>f(I1,{columnKey:i,rangeData:o[i]},i))})}const R1=c.exports.memo(P1);function M1(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=$();return f(R1,{activeTab:e,spectraAnalysis:t,displayerKey:n})}const Wn=[{label:"massive (m)",value:"m",multiplicity:null},{label:"singlet (s)",value:"s",multiplicity:1},{label:"doublet (d)",value:"d",multiplicity:2},{label:"triplet (t)",value:"t",multiplicity:3},{label:"quartet (q)",value:"q",multiplicity:4},{label:"quintet (i)",value:"i",multiplicity:5},{label:"sextet (x)",value:"x",multiplicity:6},{label:"septet (p)",value:"p",multiplicity:7},{label:"octet (o)",value:"o",multiplicity:8},{label:"nonet (n)",value:"n",multiplicity:9}];function N1(e){const t=Wn.find(n=>e===n.label||e===n.value);return t?t.multiplicity:null}function _1(e,t=[]){if(e===void 0||e.length===0)return!1;const n=Wn.find(o=>o.value===e||o.label===e);return n&&!t.includes(n.value)&&!t.includes(n.label)}function Ui(e,t=[]){return e===void 0||e.length===0?!1:!e.split("").find(n=>!_1(n,t))}function $t(e){var t,n;return e.length===1?(t=Wn.find(o=>o.value===e))==null?void 0:t.label:(n=Wn.find(o=>o.label===e))==null?void 0:n.value}function Zn(e){return e.length>1&&(e=$t(e)),Ui(e,["m","s"])}function F1(e,t){if(e===void 0||e===0||t===void 0)return[1];let n=2*t+1,o=[];for(let s=0;s<n-1;s++)o.push(1);for(let s=0;s<e-1;s++){let i=o.slice();for(let r=1;r<n;r++){for(let l=0;l<o.length-1;l++)i[l+r]+=o[l];i.push(1)}o=i.slice()}return o}const Ks=["red","green","blue","magenta"];function Yr({signal:e,startY:t,levelHeight:n}){const{scaleX:o}=ge();return f("line",{x1:o()(e.delta),y1:t,x2:o()(e.delta),y2:t+n,stroke:Ks[0]},`startLevelNode_${e.id}`)}function Gr({signal:e,startY:t,levelHeight:n,fontSize:o,showLabels:s}){const{scaleX:i}=ge();return f("text",{textAnchor:"middle",x:i()(e.delta),y:t+n/2,fontSize:o,lengthAdjust:"spacing",fill:"black",visibility:s?"visible":"hidden",children:e.multiplicity},`multiplicityString_${e.id}`)}function L1({nodesData:e,levelHeight:t,startY:n,signalID:o,labelOptions:s,showLabels:i}){const{scaleX:r}=ge(),l=c.exports.useCallback(({startX:a,_startX:u,ratio:p,multiplicityIndex:h,color:m})=>{const g=2*h+2,x=n+g*t,y=n+(g+1)*t;return _("g",{children:[f("text",{textAnchor:"middle",x:r()(u)+s.distance,y:y+2*(t/3),fontSize:s.fontSize,fill:m,visibility:i?"visible":"hidden",children:p}),f("line",{x1:r()(a),y1:x,x2:r()(u),y2:y,stroke:m}),f("line",{x1:r()(u),y1:y,x2:r()(u),y2:y+t,stroke:m})]},`${h}_${o}_${a}_${u}_${p}`)},[o,s.distance,s.fontSize,r,i,n,t]);return f(et,{children:e==null?void 0:e.map(a=>l(a))})}function O1(e,t){function n(o,s,i,r){var h;if(!e.multiplicity)return null;if(o>=e.multiplicity.length)return i;const l=Ks[o%Ks.length],a=s.findIndex(m=>m===o),u=V(t,"info.originFrequency",0),p=a>=0&&u>0&&((h=e==null?void 0:e.js)==null?void 0:h[a])?e.js[a].coupling/u:null;if(!p)i.push({startX:r,_startX:r,ratio:1,multiplicityIndex:o,color:l}),n(o+1,s,i,r);else{const m=e.multiplicity||"",g=F1(N1(m.charAt(o)),.5);let x=g.length%2===0?r-g.length/2*p+p/2:r-(g.length/2-.5)*p;g.forEach((y,k)=>{k>0&&(x+=p),i.push({startX:r,_startX:x,ratio:y,multiplicityIndex:o,color:l}),n(o+1,s,i,x)})}return i}return n}const Wr={cursor:"default",opacity:.6,strokeWidth:1};function Zr(e){return[e.id].concat(e.assigned.x||[])}function gd({rangeFrom:e,rangeTo:t,signal:n,labelOptions:o={distance:10,fontSize:11}}){const{scaleX:s,scaleY:i}=ge(),{data:r,activeSpectrum:l,toolOptions:{selectedTool:a},width:u}=$(),p=ut(n.id),h=ie(Zr(p),{type:ue.SIGNAL,extra:Zr(p)}),m=c.exports.useMemo(()=>V(r,`${l==null?void 0:l.index}`,null),[l,r]),[g,x]=c.exports.useState({x1:n.delta,x2:n.delta}),[y,k]=c.exports.useState({width:0,height:0,levelHeight:0}),[v,C]=c.exports.useState(!1),[E,T]=c.exports.useState(!1);c.exports.useEffect(()=>{var H;const A=!Ui(n.multiplicity,["m"]),P=A?Math.abs(s()(g.x1)-s()(g.x2)):Math.abs(s()(g.x1)-s()(g.x2))+o.distance,R=A?P/3:P/2,O=((H=n==null?void 0:n.multiplicity)==null?void 0:H.length)||0,L=A?R/(O+2):R/(2*O+2);k({width:P,height:R,levelHeight:L}),C(A)},[o.distance,s,n.multiplicity,g.x1,g.x2]),c.exports.useEffect(()=>{y.width/u>=.1?T(!0):T(!1)},[y.width,u]);const M=c.exports.useMemo(()=>{let A;return m.data.x.forEach((P,R)=>{P>=e&&P<=t&&(!A||m.data.re[R]>A)&&(A=m.data.re[R])}),i(m.id)(A)-y.height-30},[m.data.x,m.data.re,m.id,i,y.height,e,t]),D=c.exports.useMemo(()=>{if(n.multiplicity){const A=O1(n,m),P=n.multiplicity.split("").map((R,O)=>Zn(R)?O:void 0).filter(R=>R!==void 0);return A(0,P,[],n.delta)}return[]},[n,m]);c.exports.useEffect(()=>{if(v)x({x1:e,x2:t});else{const A={x1:n.delta,x2:n.delta};D.forEach(P=>{P.startX<A.x1&&(A.x1=P.startX),P.startX>A.x2&&(A.x2=P.startX),P._startX<A.x1&&(A.x1=P._startX),P._startX>A.x2&&(A.x2=P._startX)}),x(A)}},[v,e,t,n.delta,n.multiplicity,D]);const I=c.exports.useMemo(()=>{const{levelHeight:A}=y,P=M;let R=P;const O=M+A;if(R=O,R+=A,v){const L=s()(e),H=s()(t),X=`M ${L} ${R+A} ${L} ${R} ${s()(n.delta)} ${R} ${H} ${R} ${H} ${R+A}`;return w("g",{children:[d(Gr,{signal:n,startY:P,levelHeight:A,fontSize:o.fontSize,showLabels:E}),d(Yr,{signal:n,startY:O,levelHeight:A}),d("path",{d:X,stroke:"blue",fill:"none"})]})}return w("g",{children:[d(Gr,{signal:n,startY:P,levelHeight:A,fontSize:o.fontSize,showLabels:E}),d(Yr,{signal:n,startY:O,levelHeight:A}),d(L1,{nodesData:D,signalID:D,showLabels:E,startY:M,labelOptions:o,levelHeight:A})]})},[y,M,v,n,o,E,D,s,e,t]);return d("g",{css:h.isActive||p.isActive?S(b({},Wr),{opacity:1,strokeWidth:1.5}):Wr,onMouseEnter:()=>{p.onMouseEnter("x"),h.show()},onMouseLeave:()=>{p.onMouseLeave("x"),h.hide()},onClick:a&&a===F.editRange.id?()=>null:A=>{A.shiftKey&&(A.stopPropagation(),p.onClick("x"))},children:I})}function $1({range:e}){return(e==null?void 0:e.signals)&&e.signals.length>0&&e.signals.map(t=>f(gd,{rangeFrom:e.from,rangeTo:e.to,signal:t},t.id))}const H1=c.exports.memo($1);function z1(){const{toolOptions:{data:{tempRange:e}}}=$();return f(H1,{range:e})}const V1=N`
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
`,j1=N`
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
`;function B1({rangeData:e,showMultiplicityTrees:t,selectedTool:n,startEditMode:o}){const{id:s,from:i,to:r,integration:l,signals:a}=e,u=je(),p=ut(s),h=ie([p.id].concat(p.assigned.x||[]).concat(Yi(u,a.map(D=>D.id))),{type:ue.RANGE,extra:{id:s}}),{scaleX:m}=ge(),g=Y(),[x,y]=c.exports.useState(!1),[k,v]=c.exports.useState(!1);c.exports.useEffect(()=>{n&&n===F.editRange.id?v(!0):v(!1)},[n]),c.exports.useEffect(()=>{y(!$a(e))},[e]);const C=c.exports.useCallback(D=>{g({type:jc,data:S(b({},e),{from:m().invert(D.x2),to:m().invert(D.x1)})})},[g,e,m]),E=c.exports.useCallback(()=>{p.onMouseEnter("x"),h.show()},[p,h]),T=c.exports.useCallback(()=>{p.onMouseLeave("x"),h.hide()},[p,h]),M=c.exports.useCallback(D=>{n===F.rangesPicking.id&&D.shiftKey&&!k&&p.onClick("x")},[p,k,n]);return w("g",{"data-test-id":"range",style:{outline:"none"},css:k||h.isActive||p.isActive?j1:V1,onMouseEnter:E,onMouseLeave:T,onClick:M,children:[d(Zi,{tag:"svg",initialPosition:{x1:m()(r),x2:m()(i)},onEnd:C,children:(D,I)=>w("g",{transform:"translate(0,10)",children:[d("rect",{"data-no-export":"true",x:"0",width:I-D,height:"6",className:"range-area",fill:"green",fillOpacity:!x||h.isActive||p.isActive?1:.4}),d("text",{textAnchor:"middle",x:(I-D)/2,y:"20",fontSize:"10",fill:"red",fillOpacity:!x||h.isActive||p.isActive?1:.6,children:l!==void 0?l.toFixed(2):""})]})}),o?d(z1,{}):t&&a&&a.length>0&&a.map(D=>d(gd,{rangeFrom:i,rangeTo:r,signal:D},D.id))]},s)}function X1({range:e}){const t=dd(e);return f("path",{className:"line",stroke:"black",strokeWidth:"1",fill:"none",d:t})}function Y1({ranges:e,displayerKey:t,selectedTool:n,editRangeID:o,showMultiplicityTrees:s,showRangesIntegrals:i}){var r;return f("g",{clipPath:`url(#${t}clip-chart-1d)`,children:(r=e==null?void 0:e.values)==null?void 0:r.map(l=>_(c.exports.Fragment,{children:[f(B1,{rangeData:l,selectedTool:n,showMultiplicityTrees:s,startEditMode:!!(o&&o===l.id)}),i&&f(X1,{range:l})]},l.id))})}const G1=c.exports.memo(Y1),W1={ranges:{}};function Z1(){const{displayerKey:e,toolOptions:{selectedTool:t,data:{tempRange:n,showMultiplicityTrees:o,showRangesIntegrals:s}}}=$(),{ranges:i}=Ce(W1);return f(G1,{ranges:i,showMultiplicityTrees:o,showRangesIntegrals:s,selectedTool:t,displayerKey:e,editRangeID:(n==null?void 0:n.id)||""})}const U1=N`
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
`;function K1(){const{toolOptions:e}=$(),{scaleX:t}=ge(),n=Y(),o=c.exports.useCallback(i=>{n({type:zc,id:i})},[n]),s=c.exports.useMemo(()=>e.data.baseLineZones,[e]);return d(Ve,{children:s.length>0&&d("g",{children:s.map(i=>w("g",{transform:`translate(${t()(i.to)},0)`,css:U1,children:[d(md,{x:-20,y:10,onDelete:()=>o(i.id)}),d("rect",{x:"0",width:`${t()(i.from)-t()(i.to)}`,className:"zone-area"})]},i.id))})})}function q1({mode:e,width:t,height:n,margin:o,displayerKey:s}){return _("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-1d`,children:f("rect",{width:`${t-o.left-o.right}`,height:`${n}`,x:`${o.left}`,y:`${0}`})})}),f(s1,{}),f(n1,{}),f(l1,{}),f(Z1,{}),f(D1,{}),f(M1,{}),f(K1,{}),f(Xv,{}),f(c1,{}),f("g",{className:"container",style:{pointerEvents:"none"},children:f(p1,{showGrid:!0,mode:e})})]})}const Ur=N`
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
`;function J1({margin:e,width:t,height:n,activeSpectrum:o,spectrum:s,activeTab:i}){var g,x,y,k;let r=c.exports.useContext(dt);const{startX:l,endX:a,step:u}=c.exports.useContext(Et),{scaleX:p}=ge(),h=Be(i),m=c.exports.useCallback(v=>{if(s){const C=Cn(s),E=We(C.x,p().invert(v));return C.y[E]}return 1},[s,p]);return!r||r.y<e.top||r.x<e.left||r.x>t-e.right||r.y>n-e.bottom?d("div",{css:Ur}):w("div",{css:Ur,children:[d(Rp,{}),w("div",{children:[d("span",{className:"label",children:" \u{1D6C5}: "}),d("span",{className:"value",children:h(p().invert(r.x))}),d("span",{className:"unit",children:"ppm"}),o&&((g=s==null?void 0:s.info)==null?void 0:g.originFrequency)&&w(Ve,{children:[w("span",{className:"value",children:["\xA0(",h(p().invert(r.x)*((x=s==null?void 0:s.info)==null?void 0:x.originFrequency),"hz")]}),d("span",{className:"unit",children:"Hz"}),d("span",{className:"value",children:") "})]})]}),u==="brushing"&&w("div",{children:[d("span",{className:"label",children:" \u0394ppm: "}),d("span",{className:"value",children:(p().invert(l)-p().invert(a)).toPrecision(6)})]}),o&&w(c.exports.Fragment,{children:[((y=s==null?void 0:s.info)==null?void 0:y.originFrequency)&&u==="brushing"&&w("div",{children:[d("span",{className:"label",children:" \u0394Hz: "}),d("span",{className:"value",children:((p().invert(l)-p().invert(a))*((k=s==null?void 0:s.info)==null?void 0:k.originFrequency)).toPrecision(5)})]}),u==="brushing"&&w("div",{children:[d("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[(m(l)/(m(a)||Number.MIN_VALUE)*100).toFixed(2),"%"]})]})]}),o&&w(c.exports.Fragment,{children:[d("div",{className:"separator"}),d(Mp,{}),w("div",{children:[d("span",{className:"label",children:"Intensity: "}),d("span",{className:"value yvalue",children:h(m(r.x))})]})]})]})}const Q1=c.exports.memo(J1);function eC(){const{margin:e,width:t,height:n,activeSpectrum:o,activeTab:s}=$(),i=Ce(null);return d(Q1,{margin:e,width:t,height:n,activeSpectrum:o,spectrum:i,activeTab:s})}const Ao={container:{position:"absolute",left:"10px",top:"10px"},value:{width:"67px",display:"inline-block",margin:"0 5px",fontSize:"12px"},colorIndicator:{width:"10px",height:"1px",borderBottom:"2px solid",display:"inline-block",marginBottom:"3px"},name:{fontSize:"12px"}};function tC({datum:e}){const{scaleX:t}=Gi(),n=c.exports.useContext(dt);if(!t||!n)return null;const o=We(e.x,t().invert(n.x));return f("span",{style:Ao.value,children:e.y[o]})}function nC(){const{data:e,activeTab:t,xDomains:n}=$(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{function r(l){s(l)}return pe.on("showYSpectraTrackers",r),()=>{pe.off("showYSpectraTrackers",r)}},[]);const i=c.exports.useMemo(()=>o&&e.map(r=>r.display.isVisible&&n[r.id]&&r.info.nucleus===t&&_("div",{style:{display:"block"},children:[f("span",{style:S(b({},Ao.colorIndicator),{borderColor:r.display.color})}),f(tC,{datum:Cn(r)}),f("span",{style:Ao.value,children:r.display.name})]},r.id),[]),[t,e,o,n]);return o?f("div",{style:Ao.container,children:i}):null}const q={radius:10,borderColor:"#1f1f1f",strokeWidth:1,fillOpacity:0,SVGPadding:1};function oC(){const{height:e,width:t,margin:n,activeSpectrum:o,data:s,mode:i,toolOptions:{selectedTool:r},verticalAlign:l}=$(),{scaleX:a,scaleY:u}=ge();let p=c.exports.useContext(dt);const h=c.exports.useContext(Et),[m,g]=c.exports.useState();return c.exports.useEffect(()=>{const x=o?ms(l,{index:(o==null?void 0:o.index)||1,align:"center"}):0,k=((v,C)=>{if(o&&p&&r===F.peakPicking.id){const E=[a().invert(C.x-v),a().invert(C.x+v)].sort((P,R)=>P-R),T=s.find(P=>P.id===o.id);if(!T)throw new Error("Unreachable");const M=Cn(T),D=M.x.findIndex(P=>P>=E[1])-1,I=M.x.findIndex(P=>P>=E[0]),A=M.y.slice(I,D);if(A&&A.length>0){const P=Ml(A),R=A.findIndex(L=>L===P),O=M.x[I+R];return{x:a()(O),y:u(o.id)(P)-x,xIndex:I+R}}}return null})(10,p);g(k)},[o,s,i,p,a,u,r,l]),r!==F.peakPicking.id||!m||!o||h.step==="brushing"||!p||p.y<n.top||p.left<n.left||p.x>t-n.right||p.y>e-n.bottom?null:f("div",{style:{cursor:"crosshair",transform:`translate(${m.x}px, ${m.y}px)`,transformOrigin:"top left",position:"absolute",top:-(q.radius+q.SVGPadding),left:-(q.radius+q.SVGPadding),pointerEvents:"none",overflow:"visible"},children:_("svg",{width:q.radius*2+q.SVGPadding*2,height:q.radius*2+q.SVGPadding*2,children:[f("circle",{cx:q.radius+q.SVGPadding,cy:q.radius+q.SVGPadding,r:q.radius,stroke:q.borderColor,strokeWidth:q.strokeWidth,fillOpacity:q.fillOpacity}),f("line",{x1:q.radius+q.SVGPadding,y1:q.SVGPadding,x2:q.radius+q.SVGPadding,y2:q.radius*2+q.SVGPadding,stroke:q.borderColor,strokeWidth:q.strokeWidth}),f("line",{x1:q.SVGPadding,y1:q.radius+q.SVGPadding,x2:q.radius*2+q.SVGPadding,y2:q.radius+q.SVGPadding,stroke:q.borderColor,strokeWidth:q.strokeWidth})]})},"peakPointer")}const sC={transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",width:1,backgroundColor:"red"};function iC(){const{height:e,toolOptions:{selectedTool:t,data:{pivot:n}}}=$(),{scaleX:o}=ge();return F.phaseCorrection.id!==t?null:f("div",{style:S(b({},sC),{transform:`translate(${o()(n.value)}px, 0px)`,height:e})})}const rC={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-30px",pointerEvents:"none",overflow:"visible",userSelect:"none"};function lC(){const{height:e,width:t,margin:n,data:o,activeSpectrum:s}=$(),{scaleX:i}=ge(),r=c.exports.useContext(dt),l=c.exports.useContext(Et),a=c.exports.useMemo(()=>s?o.find(m=>m.id===s.id):null,[s,o]),u=Be(a==null?void 0:a.info.nucleus),p=c.exports.useCallback(h=>{if(a){const m=i().invert(h);return u(m)}},[a,u,i]);return!s||l.step==="brushing"||!r||r.y<n.top||r.x<n.left||r.x>t-n.right||r.y>e-n.bottom?null:f("div",{style:S(b({},rC),{transform:`translate(${r.x}px, ${r.y}px)`}),children:f("span",{children:p(r.x)})},"xLabelPointer")}function aC({emptyText:e=void 0}){const{current:{display:{general:t}}}=re(),n=$(),{toolOptions:{selectedTool:o},isLoading:s,data:i,mode:r,width:l,height:a,margin:u,activeSpectrum:p,xDomain:h,xDomains:m,yDomain:g,yDomains:x,verticalAlign:y,displayerKey:k}=n,v=Y(),C=fe(),E=le(),[T,M]=c.exports.useReducer(gv,nd);c.exports.useEffect(()=>{h.length>0&&g.length>0&&l&&a&&M({type:td,payload:{yDomain:g,yDomains:x,xDomain:h,xDomains:m,margin:u,height:a,width:l,verticalAlign:y,mode:r}})},[a,u,r,y,l,h,m,g,x]);const D=c.exports.useCallback(R=>{const O=()=>{if(!T.scaleX||!T.scaleY)return;const{startX:L,endX:H}=R,X=T.scaleX().invert(L),J=T.scaleX().invert(H);pe.emit("brushEnd",S(b({},R),{range:[X,J].sort((z,j)=>z-j)}))};if(R.altKey)switch(o){case F.rangesPicking.id:{t!=null&&t.disableMultipletAnalysis||C.show(f(Hv,b({data:i,activeSpectrum:p,scaleX:T.scaleX},R)),{onClose:()=>{C.close()}});break}}else if(R.shiftKey)switch(o){case F.integral.id:v(b({type:gc},R));break;case F.rangesPicking.id:{const[L,H]=Gt(n,{startX:R.startX,endX:R.endX});if(!p)break;const{data:{x:X}}=n.data[p.index],{fromIndex:J,toIndex:z}=Un(X,{from:L,to:H});z-J<=Po?v({type:Xc,payload:b({},R)}):E.error(`Advanced peak picking only available for area up to ${Po} points`);break}case F.multipleSpectraAnalysis.id:v(b({type:su},R));break;case F.peakPicking.id:v(b({type:uc},R));break;case F.baseLineCorrection.id:v({type:Hc,zone:{from:R.startX,to:R.endX}});break;case F.exclusionZones.id:v({type:gu,payload:{from:R.startX,to:R.endX}});break;default:O();break}else switch(o){default:o!=null&&v(b({type:us},R));break}},[T,o,t==null?void 0:t.disableMultipletAnalysis,C,i,p,v,n,E]),I=c.exports.useCallback(()=>{v({type:xn,zoomType:Vn.STEP_HORIZONTAL})},[v]),A=c.exports.useCallback(R=>{v({type:cs,event:R,selectedTool:o})},[v,o]),P=c.exports.useCallback(R=>{const O=()=>{if(!T.scaleX)return;const L=T.scaleX().invert(R.x);pe.emit("mouseClick",S(b({},R),{xPPM:L}))};if(R.shiftKey)switch(o){case F.peakPicking.id:v({type:cc,mouseCoordinates:R});break;case F.editRange.id:O();break}else switch(o){case F.phaseCorrection.id:v({type:Fi,position:R.x});break}},[v,T,o]);return f(xv,{value:T,children:f(ni,{children:({height:R,width:O})=>f(ed,{height:R,width:O,children:_("div",{style:{height:"100%",position:"relative"},children:[f(ju,{isLoading:s,emptyText:e}),T.scaleX&&T.scaleY&&i&&i.length>0&&f(na,{onBrush:D,onDoubleClick:I,onClick:P,onZoom:A,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:_(oa,{style:{width:"100%",height:"100%",position:"absolute"},children:[f(nC,{}),f(Bu,{}),f(Eo,{brushType:Ie.X}),f(lC,{}),f(oC,{}),f(iC,{}),f(eC,{}),f(q1,{width:l,height:a,margin:u,mode:r,displayerKey:k})]})})]})})})})}const go={container:{margin:"25px"},header:{backgroundColor:"#ffffff",padding:"20px",borderRadius:"10px",fontSize:"30px",textAlign:"center"},title:{textDecoration:"underline"},body:{marginTop:"10px",whiteSpace:"pre-wrap",backgroundColor:"white",padding:"20px",borderRadius:"10px",color:"red"}};function cC(e){return _("div",{style:go.container,children:[f("p",{style:go.header,children:"Something went wrong."}),_("details",{style:go.body,children:[f("p",{style:go.title,children:e.error.message}),e.error.stack]})]})}const uC={success:{base:"#2dd36f",shade:"#28ba62",tint:"#42d77d"},danger:{base:"#eb445a",shade:"#cf3c4f",tint:"#ed576b"},warning:{base:"#ffc409",shade:"#e0ac08",tint:"#ffca22"},medium:{base:"#92949c",shade:"#808289",tint:"#9d9fa6"},light:{base:"#f4f5f8",shade:"#d7d8da",tint:"#f5f6f9"}},dC={xSmall:{fontSize:"0.75rem",padding:"0.15rem 0.3rem",borderRadius:"0.15rem"},small:{fontSize:"0.8rem",padding:"0.25rem 0.5rem",borderRadius:"0.2rem"},medium:{fontSize:"1rem",padding:"0.375rem 0.75rem",borderRadius:"0.25rem"},large:{fontSize:"1.25rem",padding:"0.5rem 1rem",borderRadius:"0.3rem"}};function pC(e){const{borderColor:t,fill:n,backgroundColor:o,color:s}=e;switch(n){case"solid":return N`
        border-color: transparent;
        background-color: ${o.base};
        color: ${s.hover};
      `;case"outline":return N`
        border-style: solid;
        border-color: ${o.base};
        background-color: transparent;
        color: ${s.base};
      `;case"clear":return N`
        border-color: transparent;
        background-color: transparent;
        color: ${s.base};
      `;default:return N`
        background-color: ${o.base};
        color: ${s.base};
        border-color: ${t};
      `}}const hC={button:e=>{const{size:t,backgroundColor:n,color:o,borderRadius:s}=e,i=N`
      display: flex;
      flex-direction: row;
      border-width: 1px;
      align-items: center;
    `,r=pC(e),l=N`
      &:not([disabled]):hover {
        background-color: ${n.hover};
        color: ${o.hover};
      }
      &:not([disabled]):active {
        background-color: ${(n==null?void 0:n.active)||n.hover};
        color: ${(o==null?void 0:o.active)||o.hover};
      }

      &:disabled {
        opacity: 0.25;
      }
    `;return N([i,dC[t],r,l,{borderRadius:s}])}},de=e=>{const p=e,{onClick:t,size:n="small",color:o={base:"black",hover:"white"},backgroundColor:s={base:"white",hover:"black",active:"black"},borderColor:i="transparent",fill:r,borderRadius:l,style:a={}}=p,u=G(p,["onClick","size","color","backgroundColor","borderColor","fill","borderRadius","style"]);return d("button",S(b({type:"button",onClick:t,css:[hC.button({size:n,backgroundColor:s,color:o,borderColor:i,fill:r,borderRadius:l}),a]},u),{children:w("span",{style:{flex:1},children:[" ",e.children]})}))};function Ki(e){const{base:t,shade:n,tint:o}=uC[e.colorTheme],a=e,{color:s={base:n,hover:"white"},backgroundColor:i={base:t,hover:n,active:o},fill:r="solid"}=a,l=G(a,["color","backgroundColor","fill"]);return d(de,S(b({fill:r},l),{backgroundColor:i,color:s}))}de.Done=e=>d(Ki,S(b({},e),{colorTheme:"success"}));de.Danger=e=>d(Ki,S(b({},e),{colorTheme:"danger"}));de.Action=e=>d(Ki,S(b({},e),{colorTheme:"medium"}));function Zt(e){const{onDone:t,onCancel:n,doneLabel:o="Apply",cancelLabel:s="Cancel",style:i={}}=e;return _("div",{style:b({margin:"0 10px",display:"flex"},i),children:[f(de.Done,{onClick:t,style:(i==null?void 0:i.flexDirection)==="row-reverse"?{marginLeft:"10px"}:{},children:o}),f(de.Danger,{fill:"outline",onClick:n,style:!i.flexDirection||i.flexDirection==="row"?{marginLeft:"10px"}:{},children:s})]})}const uo=c.exports.forwardRef((e,t)=>{const{checked:n=!1,disabled:o=!1,name:s="",onChange:i=()=>null,style:r={}}=e,[l,a]=c.exports.useState(n),u=c.exports.useCallback(p=>{a(!l),i(p)},[l,i]);return f("input",{ref:t,type:"checkbox",name:s,id:s,onChange:u,defaultChecked:n,disabled:o,style:r})});function gt(e){const m=e,{label:t,name:n,onChange:o=()=>null,className:s="checkbox",reverse:i=!1,style:r={container:{},label:{},checkbox:{}}}=m,l=G(m,["label","name","onChange","className","reverse","style"]),{values:a,setFieldValue:u}=he(),p=i?!V(a,n):V(a,n),h=c.exports.useCallback(g=>{g.persist(),o(g),u(n,i?p:!p)},[n,o,i,u,p]);return _("div",{className:`${s} check-${p}`,style:r.container?r.container:{},children:[t&&f("label",{htmlFor:n,className:"checkbox-label",style:r.label?r.label:{},children:t}),f(uo,S(b({},l),{name:n,checked:p,onChange:h,style:r.checkbox?r.checkbox:{}}))]})}const ce=c.exports.forwardRef((e,t)=>{const{onSubmit:n=()=>null,initialValues:o={},validationSchema:s=null}=e;return f(Np,{innerRef:t,initialValues:o,onSubmit:n,validationSchema:s,children:f(et,{children:e.children})})});function xd(e){const t=c.exports.useRef();return c.exports.useEffect(()=>{e.forEach(n=>{!n||(typeof n=="function"?n(t.current):n.current=t.current)})},[e]),t}const Ds={label:{lineHeight:2,userSelect:"none"},inputWrapper:{height:"100%",width:"100px",borderRadius:"5px",borderWidth:"0.55px",borderColor:"#c7c7c7",borderStyle:"solid",display:"flex",flexDirection:"row",alignItems:"center",overflow:"hidden"},input:{outline:"none",flex:1,height:"100%",textAlign:"center",width:"100%"},clearButton:{height:"calc(100% - 4px)",borderRadius:"50%",backgroundColor:"gray",color:"white",aspectRatio:"1",fontSize:"60%",padding:0}},St=c.exports.forwardRef((C,v)=>{var E=C,{value:e="",name:t,style:n={input:{},inputWrapper:{}},onChange:o=()=>null,debounceTime:s=0,onKeyDown:i=()=>null,checkValue:r=()=>!0,type:l="text",enableAutoSelect:a=!1,className:u,format:p=()=>T=>T,onBlur:h=()=>null,onFocus:m=()=>null,renderIcon:g=null,canClear:x=!1,onClear:y}=E,k=G(E,["value","name","style","onChange","debounceTime","onKeyDown","checkValue","type","enableAutoSelect","className","format","onBlur","onFocus","renderIcon","canClear","onClear"]);const[T,M]=c.exports.useState(e),D=c.exports.useRef(),I=xd([v,D]),A=c.exports.useRef(Ko(X=>{o(X)},s)).current;c.exports.useEffect(()=>{M(e)},[e]),c.exports.useEffect(()=>{var X;a&&((X=I==null?void 0:I.current)==null||X.select())},[a,I]);const P=c.exports.useCallback(X=>p()(l==="number"?String(X).trim()==="-"?Number(0):Number(X):X),[p,l]),R=c.exports.useCallback(X=>{X.persist(),X.stopPropagation(),X.preventDefault();function J(j){if(l==="number"){const K=/^(?:-?[0-9]*|[0-9]\d*)(?:\.\d{0,20})?$/;return!!(j.trim()===""||K.test(j))}return!0}const z=X.target.value;if(J(z)&&r(z)){const j=p();M(j(z));const K=S(b({},X),{target:{name:X.target.name,value:P(z)}});s?A(K):o(K)}},[r,A,s,p,P,o,l]),O=c.exports.useCallback(X=>{X.persist(),i(S(b({},X),{target:{name:X.target.name,value:P(T)}}))},[P,i,T]),L=c.exports.useCallback(X=>{X.stopPropagation()},[]),H=c.exports.useCallback(()=>{M(""),y==null||y()},[y]);return _("div",{style:b(b({},Ds.inputWrapper),n!=null&&n.inputWrapper?n.inputWrapper:{}),className:`input ${u||""}`,children:[g==null?void 0:g(),f("input",S(b({},k),{ref:I,name:t,style:b(b({},Ds.input),n!=null&&n.input?n.input:{}),"data-test-id":t?`input-${t}`:"",type:"text",value:T,onChange:R,onKeyDown:O,onKeyPress:L,onDoubleClick:X=>X.stopPropagation(),onFocus:m,onBlur:h})),x&&T&&f("button",{type:"button",style:Ds.clearButton,onClick:H,children:f("span",{style:{display:"block",margin:"0 auto"},children:"\u2715"})})]})});function W(e){const C=e,{name:t,style:n={label:{},input:{}},onChange:o=()=>null,checkValue:s=()=>!0,type:i="text",className:r="",value:l=null,format:a=()=>E=>E,checkErrorAfterInputTouched:u=!0}=C,p=G(C,["name","style","onChange","checkValue","type","className","value","format","checkErrorAfterInputTouched"]),{values:h,handleChange:m,setFieldValue:g,errors:x,touched:y}=he(),k=c.exports.useCallback(E=>{o(E),m(E)},[m,o]);c.exports.useEffect(()=>{l&&g(t,l)},[t,g,l]);const v=c.exports.useMemo(()=>u?V(x,t)&&V(y,t):V(x,t),[u,x,t,y]);return f(St,b({name:t,value:l||V(h,t),onChange:k,type:i,style:S(b({},n),{inputWrapper:b(b({},n.input),v&&{borderColor:"red",outline:"none"})}),checkValue:s,className:r,format:a},p))}const ft=N`
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

  .footer-container {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;

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
`,fC=N`
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
`,mC={name:"",compressed:!1,pretty:!1,dataExportOption:yt.ROW_DATA};function gC({onClose:e,onSave:t,name:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{o.current.submitForm()},[]),i=c.exports.useCallback(r=>{t(r),e==null||e()},[e,t]);return w("div",{css:[ft,fC],children:[w("div",{className:"header handle",children:[d("span",{children:"Save as ... "}),d(me,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",children:w(ce,{ref:o,initialValues:S(b({},mC),{name:n}),onSubmit:i,children:[w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Name"}),d(W,{name:"name",className:"name",style:{inputWrapper:{width:"100%"}}})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Compressed"}),d(gt,{name:"compressed"})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Pretty Format"}),d(gt,{name:"pretty"})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:" Include "}),w("div",{className:"data-export-group",children:[w("label",{children:[d(mr,{type:"radio",name:"dataExportOption",value:yt.ROW_DATA}),"Raw Data"]}),w("label",{children:[d(mr,{type:"radio",name:"dataExportOption",value:yt.DATA_SOURCE}),"Data Source"]})]})]})]})}),d("div",{className:"footer-container",children:d(Zt,{style:{flexDirection:"row-reverse",margin:0},onDone:s,doneLabel:"Save",onCancel:()=>e==null?void 0:e()})})]})}function xC(e){var s,i;let t=document.createElement("div");t.innerHTML=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0";let n=Array.prototype.slice.call(document.styleSheets).filter(r=>!r.disabled);document.body.appendChild(t),(s=window.getSelection())==null||s.removeAllRanges();let o=document.createRange();o.selectNode(t),(i=window.getSelection())==null||i.addRange(o),document.execCommand("copy");for(const r of n)r.disabled=!0;document.execCommand("copy");for(const r of n)r.disabled=!1;document.body.removeChild(t)}async function bC(e){try{return xC(e),!0}catch{return!1}}async function xs(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}async function Kr(e,t="experiment",n=0,o=!1){const s=JSON.stringify(e,(i,r)=>ArrayBuffer.isView(r)?Array.from(r):r,n);if(o)try{const i=new un;i.file(`${t}.nmrium`,s);const r=await i.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}});pn.exports.saveAs(r,`${t}.nmrium`)}catch(i){console.log(i)}else{const i=new Blob([s],{type:"text/plain"});pn.exports.saveAs(i,`${t}.nmrium`)}}function yC(e,t,n="experiment"){const o=["name","experiment"];for(const r of e[0].data.x)o.push(r);let s=`${o.join("	")}
`;for(const r of e){const{data:{re:l},info:{experiment:a},display:{name:u}}=r,p=[u,a];for(const h of l)p.push(h);s+=`${p.join("	")}
`}const i=new Blob([s],{type:"text/tab-separated-values"});pn.exports.saveAs(i,`${n}.tsv`)}function vC(e,t="experiment"){e.generateAsync({type:"blob"}).then(n=>{pn.exports.saveAs(n,`${t}.nmredata`)})}function bd(e,t,n="experiment"){const{blob:o}=qi(e,t);pn.exports.saveAs(o,`${n}.svg`)}function CC(e,t,n="experiment"){const{blob:o,width:s,height:i}=qi(e,t);try{let r=document.createElement("canvas");r.width=s,r.height=i;let l=r.getContext("2d");l&&(l.fillStyle="white",l.fillRect(0,0,r.width,r.height));let a=new Image,u=URL.createObjectURL(o);a.onload=async()=>{l==null||l.drawImage(a,0,0);let p=r.toDataURL("image/png",1);pn.exports.saveAs(p,`${n}.png`),URL.revokeObjectURL(p)},a.src=u}catch(r){console.log(r)}}function kC(e){var o;const t=document.createElement("img");t.src=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0",document.body.appendChild(t);const n=document.createRange();n.selectNode(t),(o=window.getSelection())==null||o.addRange(n),document.execCommand("Copy"),document.body.removeChild(t)}function SC(e){e.toBlob(t=>{const n=new ClipboardItem({[t.type]:t});navigator.clipboard.write([n]).then(()=>{console.log("experiment copied.")},o=>{console.log(o)})})}function yd(e,t){const{blob:n,width:o,height:s}=qi(e,t);try{let i=document.createElement("canvas");i.width=o,i.height=s;let r=i.getContext("2d");r&&(r.fillStyle="white",r.fillRect(0,0,i.width,i.height));let l=new Image;const a=URL.createObjectURL(n);l.onload=async()=>{r==null||r.drawImage(l,0,0);const u=i.toDataURL("image/png",1);navigator.clipboard.write?SC(i):kC(u),URL.revokeObjectURL(u)},l.src=a}catch(i){i instanceof ReferenceError&&alert("Your browser does not support this feature, please use Google Chrome"),console.log(i)}}function qi(e,t){var u;let n=(u=e.getRootNode().getElementById(t))==null?void 0:u.cloneNode(!0);const o=n==null?void 0:n.getAttribute("width").replace("px",""),s=n==null?void 0:n.getAttribute("height").replace("px","");n.querySelectorAll('[data-no-export="true"]').forEach(p=>p.remove());const l=`${`<svg class="nmr-svg"  viewBox='0 0 ${o} ${s}' width="${o}"  height="${s}"  version="1.1" xmlns="http://www.w3.org/2000/svg">`+`<style>.grid line,.grid path{stroke:none;} .peaks-text{fill:#730000} .x path{stroke-width:1px} .x text{
    font-size: 12px;
    font-weight: bold;
  } 
 
  .nmr-svg,.contours{
    background-color:white;
    fill:white;
  }
  

  
  </style>`+n.innerHTML}</svg>`;return{blob:new Blob([l],{type:"image/svg+xml"}),width:o,height:s}}const wC=new un;async function vd(e,t={}){const{spectrum:n,source:o}=t,{file:s={},jcampURL:i}=o;let r="";const l=`${n.info.dimension}d`;switch(s.extension){case"jdx":case"dx":r+=`
Jcamp_Location=file:jcamp/${l}/${n.display.name}\\`,e.file(`jcamp/${l}/${n.display.name}`,s.binary);break;case"zip":if(!s.binary)return;wC.loadAsync(s.binary).then(async a=>{var u;for(const p in a.files)p.endsWith("/")||e.file(`Bruker/${p}`,await((u=a.file(p))==null?void 0:u.async("arraybuffer")));r+=`
Spectrum_Location=file:Bruker/${EC(a)}\\`});break;default:if(!i)break;await fetch(i).then(async a=>{if(!a)return;let u=i.split("/").slice(-1);const p=`jcamp/${l}/${u}`;r+=`
Jcamp_Location=file:${p}\\`,e.file(p,await a.arrayBuffer())})}return r}function EC(e){let t=e.filter(o=>o.match("__MACOSX")?!1:!!(o.endsWith("fid")||o.endsWith("1r")||o.endsWith("ser")||o.endsWith("2rr")));const n=t.findIndex(o=>o.name.endsWith("1r")||o.name.endsWith("2rr"));return n>-1?t[n].name:t[0].name}function Ji(e){Array.isArray(e)||(e=[e]);let t=[];for(let n of e)t.push(AC(n));return t}function AC(e){switch(e.toUpperCase()){case"1H":return 2;case"13C":return 1;default:return 1}}async function TC(e,t,n={labels:{byDiaID:[]}}){let{prefix:o="",labels:s}=n,i="",r=[];for(let l of e){const{info:a}=l;if(a.isFid||a.dimension>1)continue;let u="",p=l.ranges.values||[],h=l.info.nucleus,m=1,g="";r.forEach(k=>{k===h&&m++}),r.push(h),m>1&&(g=`#${m}`),u+=`${o}1D_${h.toUpperCase()}${g}>`,l.info.baseFrequency&&(u+=`
Larmor=${Number(l.info.baseFrequency).toFixed(2)}\\`);const{source:x={}}=l;u+=await vd(t,{spectrum:l,source:x});let y=Ji(h)[0];for(let k of p){let v=k.signals;for(let C of v){let{multiplicity:E}=C;if((!E||E==="m")&&h==="1H")u+=`
${Number(k.from).toFixed(y)}-${Number(k.to).toFixed(y)}`;else if(C.delta)u+=`
${Number(C.delta).toFixed(y)}`;else continue;let T="";if(C.diaIDs&&C.diaIDs.length>0&&(C.diaIDs.forEach((M,D,I)=>{let A=", ";D===I.length-1&&(A=""),T+=`${s.byDiaID[M].label||M}${A}`}),u+=`, L=${T}`),h==="1H"){C.multiplicity&&(u+=`, S=${C.multiplicity}`);let M=C.js;if(Array.isArray(M)&&M.length){let D=", J=";for(const I of M){if(u+=`${D}${Number(I.coupling).toFixed(3)}`,I.diaIDs){let{diaIDs:A}=I;if(Array.isArray(A)||(A=[A]),!A.length)continue;u+=`(${s.byDiaID[A[0]].label||String(A[0])})`}D=", "}}k.integration?u+=`, E=${Number(k.integration).toFixed(y)}`:k.nbAtoms?u+=`, E=${k.nbAtoms.toFixed(y)}`:k.signals[0].nbAtoms!==void 0&&(u+=`, E=${k.signals[0].nbAtoms}`)}}v.length&&(u+="\\")}u+=`
`,/\n/.exec(u)&&(i+=u)}return i}function DC(e){switch(e.toLowerCase()){case"hsqc":case"cosy":return"1J";case"hmbc":return"NJ";default:return"NJ"}}const IC=Array.isArray;async function PC(e,t,n={labels:{}}){const{byDiaID:o}=n.labels;let s="";const i=`
> <NMREDATA_2D_`;for(let r of e){if(r.info.dimension<2)continue;let l="";const{info:a,source:u}=r;let{nucleus:p,experiment:h,pulseSequence:m}=a,g=DC(h);p&&(l+=`${i}${p[1]}_${g}_${p[0]}>`);let x=Ji(p);l+=await vd(t,{spectrum:r,source:u}),h&&(l+=`
CorType=${h} \\`),m&&(l+=`
PulseProgram=${m} \\`),r.info.baseFrequency&&(l+=`
Larmor=${Number(r.info.baseFrequency[0]).toFixed(2)}\\`);let y=r.zones.values||[];for(let k of y){let v=k.signals;for(let C of v){let{x:E,y:T,peaks:M}=C,D=qr(E,o,x[0]),I=qr(T,o,x[1]),A=Math.max(...M.map(P=>P.z));l+=`
${D}/${I}, I=${A.toFixed(2)}\\`}}s+=l}return s.length>0?`${s}
`:""}function qr(e,t,n){let{diaIDs:o,delta:s}=e;if(o){if(IC(o)||(o=[o]),o.length<1)return Number(s).toFixed(n);let i=o.map(r=>t[r].label).join(",");return o.length>1?`(${i})`:i}return Number(s).toFixed(n)}function RC(e){let t=[];for(const{x:n,y:o}of e)t.push(n,o);return t}function MC(e,t={groupedDiaIDs:[]}){const{groupedDiaIDs:n,molecule:o}=t;let s=_p(o,{toLabel:"H",maxLength:1}),i={},r={};for(let l of e){let{dimension:a,nucleus:u}=l.info,p=Ji(u),[h,m]=a>1?["zones",RC]:["ranges",x=>x||[]],g=l[h].values||[];for(let x of g){let y=m(x.signals);for(let k=0;k<y.length;k++){let v=y[k].diaIDs||[];for(let C of v){let E=Number(y[k].delta).toFixed(p[k%a]),T=n.find(D=>D.oclID===C),M={atom:T.atoms[0],molecule:o,connections:s,atomLabel:T.atomLabel};i[C]={atoms:T.atoms.map(D=>D+1),shift:E,label:Jr(M)};for(let D of T.atoms)M.atom=D,r[D]={shift:E,diaID:C,label:Jr(M)}}}}}return{byAssignNumber:r,byDiaID:i}}function Jr(e){const{atom:t,molecule:n,atomLabel:o,connections:s}=e;let i="";if(o!=="C"){let l=s[t].find(p=>p&&p.length>1),a=`${o}${l[0]+1}`,u=`${n.getAtomLabel(l[1])}${l[1]+1}`;i=`${a}${u}`}else i=`${o}${t+1}`;return i}const Qi={solvent:"SOLVENT",temperature:"TEMPERATURE",assignment:"ASSIGNMENT",j:"J",signals:"SIGNALS",id:"ID"};async function NC(e,t={}){const{data:n,molecules:o}=e||{data:[],molecules:[]};let s=new un;for(const i of o)await Qr(n,s,S(b({},t),{molecule:i}));return o.length||await Qr(n,s,t),s}async function Qr(e,t,n={}){let{id:o,prefix:s=`
> <NMREDATA_`,filename:i="nmredata",molecule:r}=n,l="",a;r&&(r=Bt.Molecule.fromMolfile(r.molfile),l+=r.toMolfile(),r.addImplicitHydrogens(),a=Fp(r));let u=r?MC(e,{groupedDiaIDs:a,molecule:r}):{byDiaID:void 0,byAssignNumber:void 0};l+=`${s}VERSION>
1.1\\
`,l+=el(e,"temperature",{prefix:s}),l+=el(e,"solvent",{prefix:s}),o&&(l+=`${s+Qi.id}>
id\\
`),l+=_C(u.byDiaID,{prefix:s}),l+=await TC(e,t,{prefix:s,labels:u}),l+=await PC(e,t,{prefix:s,labels:u}),l+=`
$$$$
`,t.file(`${i}.sdf`,l)}function _C(e,t){if(!e)return"";const{prefix:n}=t;let o=`${n+Qi.assignment}>
`;for(let s in e){let i=e[s].atoms;o+=`${e[s].label}, ${e[s].shift}`;for(let r of i)o+=`, ${r}`;o+=`\\
`}return o}function el(e,t,n={prefix:""}){const{prefix:o}=n;let s="";for(let i of e)if(i.info[t]){s+=`${o+Qi[t]}>
${String(i.info[t])}\\
`;break}return s}function Cd(){const{rootRef:e}=fs(),t=fe(),n=le(),o=$(),s=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{yd(e,"nmrSVG"),h(),n.success("Image copied to clipboard")},0)}},[e,n,o]),i=c.exports.useCallback(async(h=0,m=!0)=>{if(o.data.length>0){const g=await n.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{async function x(){var v,C;const y=(C=(v=o.data[0])==null?void 0:v.display)==null?void 0:C.name,k=Er(o);await Kr(k,y,h,m),g()}x()},0)}},[n,o]),r=c.exports.useCallback(async()=>{if(o.data.length>0){const h=await n.showLoading("Exporting as NMRE process in progress");setTimeout(()=>{async function m(){var y,k;const g=(k=(y=o.data[0])==null?void 0:y.display)==null?void 0:k.name,x=await NC(o);vC(x,g),h()}m()},0)}},[n,o]),l=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as SVG process in progress");setTimeout(()=>{var g,x;const m=(x=(g=o.data[0])==null?void 0:g.display)==null?void 0:x.name;bd(e,"nmrSVG",m),h()},0)}},[e,n,o.data]),a=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as PNG process in progress");setTimeout(()=>{var g,x;const m=(x=(g=o.data[0])==null?void 0:g.display)==null?void 0:x.name;CC(e,"nmrSVG",m),h()},0)}},[e,n,o.data]),u=c.exports.useCallback(h=>{async function m(){const{name:g,pretty:x,compressed:y,dataExportOption:k}=h,v=await n.showLoading(`Exporting as ${g}.nmrium process in progress`);setTimeout(()=>{(async()=>{const C=Er(o,k);await Kr(C,g,x?2:0,y),v()})()},0)}m()},[n,o]),p=c.exports.useCallback(async()=>{var h,m;if(o.data.length>0){const g=(m=(h=o.data[0])==null?void 0:h.display)==null?void 0:m.name;t.show(f(gC,{name:g,onSave:u}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:400})}},[t,u,o.data]);return{saveToClipboardHandler:s,saveAsJSONHandler:i,saveAsNMREHandler:r,saveAsSVGHandler:l,saveAsPNGHandler:a,saveAsHandler:p}}function kd(){const e=re(),t=V(e.current,"display.general.experimentalFeatures",!1);return!((t==null?void 0:t.hidden)===!0||(t==null?void 0:t.display)===!1)}function Se(r){var l=r,{children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right"}=l,i=G(l,["children","style","onClick","popupTitle","popupPlacement"]);return f(Ee,{title:o,popupPlacement:s,children:f("button",S(b({style:t,type:"button",onClick:n},i),{children:e}))})}const It=N`
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
`,FC=N`
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
`;function LC({children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right",defaultValue:i=!1,disabled:r=!1,className:l=""}){const[a,u]=c.exports.useState(i),p=c.exports.useCallback(()=>{n(!a),u(!a)},[n,a]);return d(Ee,{title:o,popupPlacement:s,children:d("button",{disabled:r,css:FC,style:t,className:(a?"toggle toggle-active ":"toggle ")+l,type:"button",onClick:p,children:e})})}var Ge=c.exports.memo(LC);const OC=N`
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
`;function $C({counter:e,onDelete:t=()=>null,deleteToolTip:n="Delete",onFilter:o=()=>null,filterToolTip:s="",filterIsActive:i=!1,counterFiltered:r=0,children:l,onSettingClick:a=()=>null,showSettingButton:u=!1,canDelete:p=!0,style:h={},className:m=""}){return w("div",{css:OC,style:h,className:m,children:[w("div",{className:"left-container",children:[p&&d(Ee,{title:n,popupPlacement:"right",children:d("button",{type:"button",onClick:t,disabled:e===0,children:d(wt,{})})}),s?d(Ge,{popupTitle:s,popupPlacement:"right",onClick:o,defaultValue:i,children:d(Lp,{style:{pointerEvents:"none",fontSize:"12px"}})}):null,l]}),e!==void 0&&w("p",{className:"counter-label",children:["["," ",i&&i===!0&&r!==void 0?`${r}/${e}`:e," ","]"]}),u&&d(Ee,{title:"preferences",popupPlacement:"left",children:d("button",{type:"button",onClick:a,children:d(Op,{})})})]})}var ot=c.exports.memo($C);function HC(){const e=c.exports.useCallback(()=>{},[]);return w("div",{css:It,children:[d(ot,{showSettingButton:!1,canDelete:!1,children:d(Se,{popupTitle:"automatic assignment",onClick:e,children:d($p,{style:{fontSize:"18px"}})})}),d("div",{className:"inner-container"})]})}const zC=N`
  background-color: #ff6f0057;
`,VC=N`
  background-color: #f5f5dc;
`,Sd=N`
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
`;function jC({data:e,columns:t,onMouseDown:n=()=>null}){const{getTableProps:o,getTableBodyProps:s,headerGroups:i,rows:r,prepareRow:l}=Hn.exports.useTable({columns:t,data:e},Hn.exports.useSortBy,Hn.exports.useFlexLayout);return w("table",S(b({},o()),{css:Sd,style:{height:"100%"},children:[d("thead",{children:i.map(a=>d("tr",S(b({},a.getHeaderGroupProps()),{children:a.headers.map(u=>w("th",S(b({},u.getHeaderProps(u.getSortByToggleProps())),{children:[u.render("Header"),d("span",{children:u.isSorted?u.isSortedDesc?" \u25BC":" \u25B2":""})]}),u.getHeaderProps().key))}),a.getHeaderGroupProps().key))}),d("tbody",S(b({},s()),{style:{display:"block",height:"100%",overflowY:"auto"},children:r.map(a=>(l(a),d("tr",S(b({},a.getRowProps()),{onMouseDown:n,children:a.cells.map(u=>d("td",S(b({},u.getCellProps()),{style:S(b({},u.getCellProps().style),{padding:"0px"}),children:u.render("Cell")}),u.getCellProps().key))}),a.getRowProps().key)))}))]}))}var BC=c.exports.memo(jC);const Is={container:{height:"100%",flexDirection:"column",display:"flex",width:"100%"},tableContainer:{height:"calc(100% - 30px)",overflow:"auto",display:"block"},searchInput:{width:"100%",borderRadius:"5px",border:"0.55px solid gray",padding:"5px",marginBottom:"2px"}};function XC({info:e,meta:t}){const[n,o]=c.exports.useState({}),[s,i]=c.exports.useState([]),r=c.exports.useRef(null),l=c.exports.useCallback(u=>{const p=Object.keys(n).filter(h=>h.toLowerCase().includes(u.target?u.target.value.toLowerCase():u.toLowerCase()));i(p)},[n]);c.exports.useEffect(()=>{r.current&&l(r.current.value)},[l,r]),c.exports.useEffect(()=>{if(e&&t){const u=Object.keys(e).concat(Object.keys(t));i(u),o(b(b({},e),t))}},[e,t]);const a=c.exports.useMemo(()=>[{Header:"Parameter",sortType:"basic",minWidth:100,width:20,maxWidth:20,Cell:({row:u})=>f("p",{style:{padding:"5px",backgroundColor:"white"},children:u.original})},{Header:"Value",sortType:"basic",resizable:!0,Cell:({row:u})=>f("p",{style:{backgroundColor:"#efefef",height:"100%",padding:"5px",fontFamily:"monospace",whiteSpace:"pre",overflow:"hidden"},children:`${n[u.original]}`})}],[n]);return _("div",{style:Is.container,children:[f("div",{children:f("input",{type:"text",style:Is.searchInput,placeholder:"Search for parameter...",onChange:l,ref:r})}),f("div",{style:Is.tableContainer,children:f(BC,{data:s,columns:a})})]})}const YC=c.exports.memo(XC),GC={info:{},meta:{}};function WC(){const{info:e,meta:t}=Ce(GC);return f(YC,{info:e,meta:t})}const ZC=N`
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
`;function wd({onDelete:e,className:t="delete"}){return d("button",{css:ZC,className:t,type:"button",onClick:e,children:d(oi,{className:"icon"})})}const UC=e=>N`
  position: relative;

  .delete {
    position: absolute;
    top: 2px;
    left: 2px;
  }

  ${e}
`;function KC({tabid:e,tablabel:t,isActive:n,onClick:o=()=>null,canDelete:s,onDelete:i=()=>null,tabstyles:r,render:l}){let a="tab-list-item";n&&(a+=" tab-list-active");const u=c.exports.useCallback(h=>{o(S(b({},h),{tablabel:t,tabid:e}))},[o,t,e]),p=c.exports.useCallback(h=>{h.stopPropagation(),i(S(b({},h),{tablabel:t,tabid:e}))},[i,t,e]);return w("li",{className:a,onClick:u,css:UC(r),"data-test-id":`tab-${e}`,children:[s&&d(wd,{onDelete:p}),l?l({isActive:n,title:t||"",id:e}):t]})}function Me(e){return d(Ve,{children:e.children})}const tl=N`
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
`,qC=N`
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
`;var er=(e=>(e.TOP="TOP",e.LEFT="LEFT",e))(er||{});function JC({children:e,onClick:t,position:n,onDelete:o=()=>null,activeTab:s}){const i=c.exports.useCallback(u=>{const{tablabel:p,tabid:h}=u;t({tablabel:p,tabid:h})},[t]);let r;const l=c.exports.Children.map(e,u=>{if(!c.exports.isValidElement(u))return null;const{tabid:p}=u.props;return p===s&&(r=u.props.children),d(KC,S(b({},u.props),{isActive:p===s,onClick:i,onDelete:o}))}),a=c.exports.useMemo(()=>{switch(n){case"TOP":return tl;case"LEFT":return qC;default:return tl}},[n]);return w("div",{className:"tabs",css:a,children:[d("ol",{className:"tab-list",children:l}),d("div",{className:"tab-content",children:r})]})}var Tn=c.exports.memo(JC);function nl({direction:e,onClick:t}){return d("div",{onClick:t,css:N`
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
      `,children:d(Hp,{style:{transform:`scaleX(${e==="right"?"-1":"1"})`}})})}const QC=.45;function ek({children:e,loop:t=!1,defaultIndex:n=0,onChange:o=()=>null}){const[s,{width:i}]=$l(),[r,l]=c.exports.useState(0);c.exports.useEffect(()=>{l(n)},[n]);const a=c.exports.useMemo(()=>c.exports.Children.map(e,h=>d("div",{css:N`
              width: ${i}px;
              height: 100%;
            `,children:h},h.key)),[e,i]),u=c.exports.useCallback(()=>{l(h=>{if(a&&h===a.length-1)return o(h),t?0:h;const m=h+1;return o(m),m})},[a,t,o]),p=c.exports.useCallback(()=>{l(h=>{if(h===0)return o(h),t?0:h;const m=h-1;return o(m),m})},[t,o]);return!i&&!a?null:w("div",{css:N`
        position: relative;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        display: block;
      `,ref:s,children:[d("div",{css:N`
          transform: translateX(-${i*r}px);
          transition: transform ease-out ${QC}s;
          height: 100%;
          width: ${i*(a?a.length:1)}px;
          display: flex;
        `,children:a}),r!==0&&d(nl,{direction:"left",onClick:p}),a&&r!==a.length-1&&d(nl,{direction:"right",onClick:u})]})}var Ed=c.exports.memo(ek);const tk=N`
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
`,nk=N`
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
`;function Ad(e){const{molecules:t,onChange:n=()=>null,index:o}=e,[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{const l=o&&o<t.length?o:0;t&&t.length>0&&i(l)},[o,t]);const r=c.exports.useCallback(l=>{i(l),n(l)},[n]);return w("div",{children:[d("div",{css:tk,children:w("p",{children:[t&&t.length>0&&`${+(s+1)} / ${t.length}`," "]})}),d("div",{css:nk,children:d(Ed,{defaultIndex:s,onChange:r,children:t==null?void 0:t.map((l,a)=>{var u;return w("div",{className:"slider",children:[d("div",{children:l.molfile&&d(zp,{id:`molSVG${a}`,width:120,molfile:l.molfile})}),w("p",{children:[d(Vp,{mf:l.mf})," - ",(u=l.mw)==null?void 0:u.toFixed(2)]})]},l.key)})})})]})}const ok=N`
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
`;function sk(e){const[t,n]=c.exports.useState(),{setFieldValue:o,errors:s,values:i}=he(),{molecules:r,activeTab:l}=$(),a=La(l),u=c.exports.useMemo(()=>a&&r&&r.length>0&&t!==void 0&&r[t].atoms[a]?r[t].atoms[a]:0,[t,a,r]),p=c.exports.useCallback(m=>{n(m),o(e.name,r[m])},[r,e.name,o]);c.exports.useEffect(()=>{if(r&&r.length>0){const m=i[e.name]?r.findIndex(g=>g.key===i[e.name].key):-1;p(m!==-1?m:0)}},[r,e.name,p,i]);const h=c.exports.useCallback(m=>{p(m)},[p]);return d("div",{css:ok,children:a&&r&&r.length>0?w("div",{className:"molecule-container",children:[d("p",{className:"title",children:"Select a molecule as reference!"}),w("div",{className:"molecule-selection-container",children:[d(Ad,{index:t,molecules:r,onChange:h}),w("p",{className:"newSumText",children:["New sum for ",a," will be ",u,"!"]})]})]}):d("p",{className:"empty",style:{color:s[e.name]?"red":"black"},children:"You have to Select a spectrum and Add a molecule from the Structure panel to select as a reference!"})})}const ik=N`
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
`;function Td({onSave:e,onClose:t,header:n,sumOptions:o}){var g;const{current:{display:{general:s,panels:i}}}=re(),[r,l]=c.exports.useState("auto"),a=c.exports.useRef(null),u=c.exports.useCallback(x=>{x.key==="Enter"&&a.current.submitForm()},[]),p=c.exports.useCallback(x=>{l(x.tabid)},[]);c.exports.useEffect(()=>{var x;if((o==null?void 0:o.sumAuto)&&!(s!=null&&s.hideSetSumFromMolecule)&&!((x=i==null?void 0:i.structuresPanel)!=null&&x.hidden)){l("auto");const{mf:y,moleculeKey:k}=o;a.current.setValues({sum:null,molecule:k&&y?{mf:y,key:k}:null})}else l("manual"),a.current.setValues({sum:(o==null?void 0:o.sum)||"",molecule:null})},[s==null?void 0:s.hideSetSumFromMolecule,i==null?void 0:i.structuresPanel,o]);const h=c.exports.useCallback(x=>{switch(r){case"auto":{const{molecule:{mf:y,key:k}}=x;e({sumAuto:!0,mf:y,moleculeKey:k});break}case"manual":{const{sum:y}=x;e({sum:y,sumAuto:!1});break}default:return}t()},[t,e,r]),m=c.exports.useMemo(()=>{switch(r){case"auto":return ee({molecule:ee().required()});case"manual":return ee({sum:ae().required()});default:return null}},[r]);return w("div",{css:[ft,ik],children:[w("div",{className:"header handle",children:[d("span",{children:n}),d(me,{onClick:t})]}),d("div",{className:"tab-content",children:d(ce,{ref:a,onSubmit:h,initialValues:{sum:null,molecule:null},validationSchema:m,children:w(Tn,{activeTab:r,onClick:p,children:[!(s!=null&&s.hideSetSumFromMolecule)&&!((g=i==null?void 0:i.structuresPanel)!=null&&g.hidden)&&d(Me,{tablabel:"Auto",tabid:"auto",children:d(sk,{name:"molecule"})}),d(Me,{tablabel:"Manual",tabid:"manual",children:d("div",{className:"manual-container",children:d(W,{name:"sum",type:"number",placeholder:"Enter the new value",onKeyDown:u})})})]})})}),d("div",{className:"footer-container",children:d("button",{type:"button",onClick:()=>a.current.submitForm(),className:"btn",children:"Set"})})]})}const rk=N`
  background-color: transparent;
  border: none;
  height: 100%;
  svg {
    fill: green;
    font-size: 16px;
  }
`;function lk(e){const{className:t="",disabled:n=!1,popupPlacement:o="left",popupTitle:s="Save",onClick:i}=e;return d("div",{className:t,children:d(Ee,{title:s,popupPlacement:o,children:d("button",{css:rk,type:"button",onClick:i,disabled:n,className:t,children:d(jp,{})})})})}var tr=c.exports.memo(lk);const ak=N`
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
`;function ck({onClose:e,onSave:t}){return w("div",{css:ak,children:[d(me,{onClick:e,popupTitle:"close Preferences"}),d(tr,{onClick:t,popupTitle:"save Preferences"})]})}var Dn=c.exports.memo(ck);function uk(e,t){const{onSave:n=()=>null,value:o,type:s="text",style:i,onEditStart:r=()=>null,editStatus:l=!1}=e,[a,u]=c.exports.useState();c.exports.useEffect(()=>{u(l)},[l]),c.exports.useImperativeHandle(t,()=>({startEdit:()=>{u(!0)},closeEdit:()=>{u(!1)}}));const p=c.exports.useCallback(m=>{m.target.classList.contains("editable-column")||(u(!1),window.removeEventListener("mousedown",p))},[]),h=c.exports.useCallback((m,g=null)=>{m?(window.addEventListener("mousedown",p),r(g),u(m)):(["Enter","Tab"].includes(g.key)&&n(g),["Enter","Tab","Escape"].includes(g.key)&&(u(m),window.removeEventListener("mousedown",p)))},[p,r,n]);return _("div",{style:b({display:"table",width:"100%",height:"100%"},i),onDoubleClick:m=>h(!0,m),children:[!a&&f("span",{style:{display:"table-cell",verticalAlign:"middle"},children:o}),a&&f("div",{style:{display:"table-cell",verticalAlign:"middle"},children:f(St,{enableAutoSelect:!0,className:"editable-column",value:o,type:s,onKeyDown:m=>h(!1,m)})})]})}var lt=c.exports.forwardRef(uk);const dk=N`
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
`;function pk({context:e},t){const[n,o]=c.exports.useState({left:0,top:0}),{rootRef:s,elementsWrapperRef:i}=fs(),[r,l]=c.exports.useState(),[a,u]=c.exports.useState(),[p,h]=c.exports.useState(null),m=c.exports.useRef();c.exports.useEffect(()=>(m.current=document.createElement("div"),i&&i.appendChild(m.current),()=>{m.current&&i&&i.removeChild(m.current)}),[i]);const g=y=>{y.preventDefault(),h(y.target.parentElement),u(!0);const k=y.clientX,v=y.clientY,C=window.innerWidth,E=window.innerHeight,T=150,M=0,D=C-k>T;let I=!D,A=E-v>M;const P=!A;D&&(I=`${k+5}px`),I&&(I=`${k-T-5}px`),A&&(A=`${v+5}px`),P&&(A=`${v-M-5}px`),o({left:I,top:A})};c.exports.useImperativeHandle(t,()=>({handleContextMenu:(y,k)=>{l(k),g(y)}}));const x=c.exports.useCallback((y,k)=>{y.preventDefault(),k(r),u(!1)},[r]);return c.exports.useEffect(()=>{const y=k=>{p&&k.target.parentElement&&!k.target.parentElement.isSameNode(p)&&a&&u(!1)};return s&&s.addEventListener("click",y),()=>{s&&s.removeEventListener("click",y)}},[a,t,s,p]),a?m.current&&qo.exports.createPortal(e&&d("div",{ref:t,css:[dk,n],children:e.map((y,k)=>d("button",{type:"button",onClick:v=>x(v,y.onClick),children:y.label},k))}),m.current):null}var Ut=c.exports.forwardRef(pk);function hk({headerGroups:e}){return f("thead",{children:e.map(t=>f("tr",S(b({},t.getHeaderGroupProps()),{children:t.headers.map(n=>_("th",S(b({},n.getHeaderProps(n.getSortByToggleProps())),{style:n.style,children:[n.render("Header"),f("span",{children:n.isSorted?n.isSortedDesc?" \u25BC":" \u25B2":""})]}),n.getHeaderProps().key))}),t.getHeaderGroupProps().key))})}var fk=c.exports.memo(hk);function mk(e){const t=e.original.id;return t?t instanceof Array?t:[String(t)]:[""]}function gk(e,t){const{row:n,highlightedSource:o=ue.UNKNOWN,onContextMenu:s}=e,i=c.exports.useMemo(()=>({type:o,extra:n.original}),[o,n]),r=ie(mk(n),i);return c.exports.useEffect(()=>()=>{r.hide()},[]),c.exports.useMemo(()=>d("tr",S(b(b({ref:t,onContextMenu:s,css:r.isActive?zC:Object.prototype.hasOwnProperty.call(n.original,"isConstantlyHighlighted")&&n.original.isConstantlyHighlighted===!0?VC:null},n.getRowProps()),r.onHover),{children:n.cells.map(l=>{const{style:a,padding:u}=l.column;return l.isRowSpanned?null:d("td",S(b({rowSpan:l.rowSpan},l.getCellProps()),{onContextMenu:p=>(p.preventDefault(),!1),style:b({padding:u},a),children:l.render("Cell")}),l.key)})}),n.getRowProps().key),[r.isActive,r.onHover,s,t,n])}var xk=c.exports.forwardRef(gk);const Dd=c.exports.createContext(null),bk=Dd.Provider;function yk(){const e=c.exports.useContext(Dd);if(!e)throw new Error("react table context was not found ");return e}function vk(e){e.useInstance.push(Ck)}function Ck(e){const{allColumns:t}=e;let n=[];t.forEach(o=>{const{id:s,enableRowSpan:i}=o;i!==void 0&&i!==!1&&n.push({id:s,cellValue:null,cellIndex:0})}),Object.assign(e,{rowSpanHeaders:n})}function kk(e,t,n,o){const s=e[t];for(let i=0;i<s.allCells.length;i++){const r=s.allCells[i],l=n.find(a=>a.id===r.column.id);if(l!==void 0){const a=o?`${r.value}-${s.original[o]}`:r.value;l.cellValue===null||l.cellValue!==a?(r.isRowSpanned=!1,l.cellValue=a,l.cellIndex=t,r.rowSpan=1):(e[l.cellIndex].allCells[i].rowSpan++,r.isRowSpanned=!0)}}}const Sk={table:e=>{if(e)return{position:"sticky",top:0}}},wk=c.exports.forwardRef(function(t,n){const{data:o,columns:s,highlightedSource:i,context:r=null,onScroll:l,approxItemHeight:a=40,enableVirtualScroll:u=!1,groupKey:p}=t,h=c.exports.useRef(null),{index:m}=yk(),{getTableProps:g,getTableBodyProps:x,headerGroups:y,rows:k,prepareRow:v,rowSpanHeaders:C}=Hn.exports.useTable({columns:s,data:o},Hn.exports.useSortBy,vk),E=c.exports.useCallback((M,D)=>{Xt(M)||(M.preventDefault(),h.current.handleContextMenu(M,D.original))},[h]),T=u?k.slice(m.start,m.end):k;return w("div",S(b({ref:n,className:"table-container",style:{overflowY:"auto",position:"relative",height:"100%"}},u&&{onScroll:l}),{children:[u&&d("div",{style:{height:a*o.length,position:"absolute",width:"100%",pointerEvents:"none"}}),w("table",S(b({},g()),{css:Sd,style:Sk.table(u),children:[d(fk,{headerGroups:y}),d("tbody",S(b({},x()),{children:T.map((M,D)=>(v(M),kk(k,u?D+m.start:D,C,p),d(xk,S(b({row:M},M.getRowProps()),{onContextMenu:I=>E(I,M),highlightedSource:i}),M.key)))}))]})),d(Ut,{ref:h,context:r})]}))});function Ek(e){const{data:t,approxItemHeight:n=40,groupKey:o}=e,s=c.exports.useRef(null),[i,{height:r}]=$l(),l=xd([i,s]),[a,u]=c.exports.useState({offsetHeight:0,scrollHeight:0,numberOfVisibleRows:0,index:{start:0,end:0}});c.exports.useEffect(()=>{if(l.current){const{scrollHeight:x}=l.current,y=Math.ceil(r/n);u(k=>S(b({},k),{offsetHeight:r,scrollHeight:x,numberOfVisibleRows:y,index:{start:0,end:y+1}}))}},[n,l,r]);const p=c.exports.useCallback((x,y)=>{const k=t[x];if(k.index&&o)switch(y){case-1:{let v=x-1;for(;v>0;){if(t[v][o]!==k[o])return v+1;v--}return x}case 1:{let v=x+1;for(;v<t.length;){if(t[v][o]!==k[o])return v-1;v++}return x}default:return x}return x},[t,o]),h=c.exports.useCallback((x,y)=>{const k=x-y,v=k>=t.length?k:x;return p(v,-1)},[t.length,p]),m=c.exports.useCallback((x,y)=>{const k=x+y,v=k>=t.length?t.length-1:k;return p(v,1)},[t.length,p]),g=c.exports.useCallback(()=>{if(s.current&&a){const{scrollTop:x}=s.current,{numberOfVisibleRows:y,index:k}=a,v=Math.ceil(x/n),C=h(v,y);if(v!==k.start){const E=m(v,y);u(S(b({},a),{index:{start:C,end:E+1}}))}}},[n,m,h,a]);return d(bk,{value:a,children:d(wk,b({onScroll:g,ref:l},e))})}var po=c.exports.memo(Ek);function bs(e,t){const{index:n,Header:o=()=>null,extraParams:s,accessor:i=null,Cell:r=null,sortType:l="basic",enableRowSpan:a=!1,style:u={},id:p}=t||{};e.push(b(S(b(b(b({index:n},b({},p&&{id:p})),b({},i?{accessor:i}:{})),b({},r?{Cell:r}:{})),{Header:o,sortType:l,enableRowSpan:a,style:u}),s))}const Ak=`url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="960px" height="560px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve"><g id="Rounded_Rectangle_33_copy_4_1_"><path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/></g></svg>')`,Ne=c.exports.forwardRef(function(t,n){const{data:o,style:s={width:100},onChange:i=()=>null,defaultValue:r,name:l="",className:a=""}=t,u=c.exports.useCallback(h=>{let m=h.target.value;isNaN(m)||(m=Number(m)),i(m)},[i]),p=N`
    padding: 0px 5px;
    border: 0.55px solid #cacaca;
    font-size: 14px;
    width: ${s.width?Number(s.width)-5:115}px;
    margin: 0;
    height: 100%;
    background: ${Ak} no-repeat right white;
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
  `;return d("select",{ref:n,css:p,name:l,onChange:u,defaultValue:r,className:a,style:s,children:o.map(h=>d("option",{value:h.value,children:h.label},`${h.key}`))})}),ol={container:{height:"100%",backgroundColor:"white"},label:{textAlign:"center",width:"100%",fontSize:"11px",padding:"5px",color:"gray"}};function Kt(){return f("div",{style:ol.container,children:f("p",{style:ol.label,children:"No Data"})})}const Tk={marginLeft:10,marginRight:10,border:"none"};function Dk({activeTab:e,data:t,preferences:n}){const o=Y(),s=c.exports.useCallback((h,m)=>{h.preventDefault(),h.stopPropagation();const g=m.original;o({type:as,integralID:g.id})},[o]),i=c.exports.useCallback((h,m)=>{const g=S(b({},m.original),{kind:h});o({type:Oc,payload:{data:g}})},[o]),r=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:h})=>h.index+1,width:10},{index:2,Header:"From",sortType:"basic",resizable:!0,accessor:h=>h.from.toFixed(2)},{index:3,Header:"To",sortType:"basic",resizable:!0,accessor:h=>h.to.toFixed(2)},{index:6,Header:"Kind",sortType:"basic",resizable:!0,accessor:h=>h.kind,Cell:({row:h})=>f(Ne,{onChange:m=>i(m,h),data:ri,style:Tk,defaultValue:h.original.kind})},{index:7,style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:h})=>f("button",{type:"button",className:"delete-button",onClick:m=>s(m,h),children:f(wt,{})})}],[i,s]),l=c.exports.useCallback((h,m)=>{const g={value:h.target.value,id:m.id};o({type:ou,payload:{data:g}})},[o]),a=c.exports.useMemo(()=>ht(n.current,`formatting.panels.integrals.[${e}]`,_t),[e,n]),u=c.exports.useMemo(()=>[{showWhen:"showAbsolute",index:4,Header:"Absolute",accessor:h=>Ye(h.absolute,V(a,"absoluteFormat",_t.absoluteFormat))},{showWhen:"showRelative",index:5,id:"relative",Header:()=>{const h=e==null?void 0:e.replace(/[0-9]/g,"");return f("span",{children:`Relative ${h}`})},accessor:h=>Ye(h.integral,V(a,"relativeFormat",_t.relativeFormat)),Cell:({row:h})=>{const m=Ye(h.original.integral,V(a,"relativeFormat",_t.relativeFormat)),x=Na(h.original)?m:`[ ${m} ]`;return f(lt,{value:x,onSave:y=>l(y,h.original),type:"number"})}}],[e,a,l]),p=c.exports.useMemo(()=>{let h=[...r];for(const g of u){const m=g,{showWhen:x}=m,y=G(m,["showWhen"]);a[x]&&bs(h,y)}return h.sort((g,x)=>g.index-x.index)},[u,r,a]);return t&&t.length>0?f(po,{data:t,columns:p}):f(Kt,{})}var Ik=c.exports.memo(Dk);const Pk=N`
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
`;function Rk(e){const{label:t="Color: ",onColorChange:n=()=>null,name:o,value:s="#000000"}=e,[i,r]=c.exports.useState(!1),[l,a]=c.exports.useState(s);c.exports.useEffect(()=>{a(s)},[s]);const u=c.exports.useCallback(()=>{r(!i)},[i]),p=c.exports.useCallback(()=>{r(!1)},[]),h=c.exports.useCallback(m=>{const g=`${m.hex}${Math.round(m.rgb.a*255).toString(16)}`;a(g),n(S(b({},m),{hex:g,name:o}))},[o,n]);return w("div",{css:Pk,children:[d("span",{className:"inputLabel",children:t}),w("div",{style:{flex:4},children:[w("div",{className:"swatch",onClick:u,children:[d("div",{className:"color",style:{backgroundColor:l}}),d("input",{type:"hidden",value:l,name:o})]}),i?w("div",{className:"color-popover",children:[d("div",{className:"cover",onClick:p}),d(Hl.ChromePicker,{color:{hex:l},onChangeComplete:h})]}):null]})]})}var Mk=c.exports.memo(Rk);function Nk(e){const l=e,{onColorChange:t=()=>null,name:n}=l,o=G(l,["onColorChange","name"]),{values:s,setFieldValue:i}=he(),r=c.exports.useCallback(a=>{t(a),i(n,a.hex)},[n,t,i]);return f(Mk,S(b({},o),{name:n,onColorChange:r,value:V(s,n)}))}var _k=c.exports.memo(Nk);const Ps={row:{display:"flex",margin:"5px 0px",alignItems:"center"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center"}};function Fk(e){const{label:t,checkControllerName:n,formatControllerName:o,disableFormat:s=!1,hideFormat:i=!1}=e,{values:r,handleChange:l,setFieldValue:a}=he(),u=c.exports.useCallback(h=>{l(h)},[l]),p=c.exports.useCallback(h=>{a(h.target.name,h.target.checked)},[a]);return _("div",{style:Ps.row,children:[f("span",{style:Ps.inputLabel,children:t}),_("div",{style:{flex:4,display:"flex",flexDirection:"row",alignItems:"center"},children:[f("input",{type:"checkbox",style:{margin:"0px 5px"},name:n,onChange:p,checked:V(r,n,!1)}),!i&&o&&f(St,{style:{inputWrapper:Ps.input},name:o,value:V(r,o,""),onChange:u,type:"text",disabled:s})]})]})}var Fe=c.exports.memo(Fk);const xo={container:{display:"flex"},label:{lineHeight:2,userSelect:"none",flex:"2"},inputContainer:{flex:"4",display:"flex",justifyContent:"flex-start"},input:{height:"100%",width:"100px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"}},cn=c.exports.forwardRef(({label:e,name:t,defaultValue:n=0,style:o={label:{},input:{},container:{},inputContainer:{}},onChange:s=()=>null,onInput:i=()=>null,pattern:r="^d*(.d{0,2})?$",step:l="any",min:a="any",max:u="any"},p)=>{const h=c.exports.useRef(null),m=c.exports.useCallback(g=>{if(g.target.checkValidity()){const x=Number(g.target.value===""?n:g.target.value);s(S(b({},g),{target:S(b({},g.target),{name:g.target.name,value:x})}))}else{const x=p||h;x.current.value=Number(n)}},[n,s,p]);return _("div",{style:b(b({},xo.container),o.container),children:[f("span",{style:b(b({},xo.label),o.label),children:e}),f("div",{style:b(b({},xo.inputContainer),o.inputContainer),children:f("input",{ref:p||h,name:t,style:b(b({},xo.input),o.input),type:"number",pattern:r,defaultValue:n,step:l,onChange:m,onInput:i,min:a,max:u},n)})]})});function qs(e){const l=e,{label:t,name:n}=l,o=G(l,["label","name"]),{values:s,handleChange:i}=he(),r=c.exports.useCallback(a=>{i(a)},[i]);return f(cn,b({label:t,name:n,defaultValue:V(s,n),onChange:r},o))}function ys(){const{tabActiveSpectrum:e}=$();return c.exports.useMemo(()=>e&&Object.keys(e).length>0?Object.keys(e):[],[e])}const Nn={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},Lk=[{id:1,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:2,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function Ok({nucleus:e,preferences:t,innerRef:n}){const o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=_t,{color:a,strokeWidth:u}=l,p=G(l,["color","strokeWidth"]),h=ht(t.current,"formatting.panels.integrals");let m=e.reduce((g,x)=>(g[x]=p,g),{});m=Object.assign(m,{color:a,strokeWidth:u}),s.current.setValues(h||m)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"integrals",value:l}}),o.success("Integrals preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:Nn.container,children:_(ce,{onSubmit:r,ref:s,children:[_("div",{style:Nn.groupContainer,children:[f("p",{style:Nn.header,children:"General"}),f(_k,{name:"color"}),f(qs,{name:"strokeWidth",label:"stroke width :",style:{label:{fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center",borderRadius:"5px"}},min:1,max:9,pattern:"[1-9]+"})]}),e==null?void 0:e.map(l=>_("div",{style:Nn.groupContainer,children:[f("p",{style:Nn.header,children:f(ti,{mf:l})}),Lk.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id))]},l))]})})}const $k=c.exports.memo(Ok);function Hk(e,t){const n=re(),o=ys();return f($k,{innerRef:t,nucleus:o,preferences:n})}var zk=c.exports.forwardRef(Hk);const Vk=N`
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
`;function jk({integrals:e,info:t,activeTab:n,xDomain:o,preferences:s}){var D;const[i,r]=c.exports.useState(!1),l=Y(),a=fe(),[u,p]=c.exports.useState(!1),h=c.exports.useRef(),m=c.exports.useCallback(()=>{l({type:as,integralID:null})},[l]),g=c.exports.useCallback(()=>{a.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:m},{text:"No"}]})},[a,m]),x=c.exports.useCallback(I=>{l({type:$c,value:I}),a.close()},[l,a]),y=c.exports.useMemo(()=>V(e,"options.sum",null),[e]),k=c.exports.useCallback(()=>{a.show(d(Td,{onClose:()=>a.close(),onSave:x,header:y?`Set new Integrals Sum (Current: ${Number(y).toFixed(2)})`:"Set new Integrals Sum",sumOptions:e==null?void 0:e.options}))},[x,y,e==null?void 0:e.options,a]),v=c.exports.useCallback(()=>{p(!u)},[u]),C=c.exports.useCallback(()=>{h.current.saveSetting(),p(!1)},[]),E=c.exports.useCallback(()=>{r(!i)},[i]),T=c.exports.useCallback(I=>{l({type:yu,payload:I})},[l]),M=c.exports.useMemo(()=>{function I(A,P){return P=P*1e4,A=A*1e4,P>=o[0]*1e4&&A<=o[1]*1e4||A<=o[0]*1e4&&P>=o[1]*1e4}return t.dimension===1&&(e==null?void 0:e.values)?(i?e.values.filter(P=>I(P.from,P.to)):e.values).map(P=>S(b({},P),{isConstantlyHighlighted:I(P.from,P.to)})):[]},[i,t.dimension,e,o]);return d(c.exports.Fragment,{children:w("div",{css:[It,Vk,u&&N`
              th {
                position: relative;
              }
            `],children:[!u&&w(ot,{counter:(D=e==null?void 0:e.values)==null?void 0:D.length,onDelete:g,deleteToolTip:"Delete All Integrals",onFilter:E,filterToolTip:i?"Show all integrals":"Hide integrals out of view",filterIsActive:i,counterFiltered:M.length,showSettingButton:!0,onSettingClick:v,children:[d(Ee,{title:y?`Change Integrals Sum (${Number(y).toFixed(2)})`:"Change Integrals Sum",popupPlacement:"right",children:d("button",{className:"sum-button",type:"button",onClick:k,children:d(zl,{})})}),d(Ge,{className:"fix-integral-toggle-btn",popupTitle:"fix integral values",popupPlacement:"right",onClick:T,children:d(Vl,{})})]}),u&&d(Dn,{onSave:C,onClose:v}),d("div",{className:"inner-container",children:u?d(zk,{ref:h}):d(Ik,{data:M,activeTab:n,preferences:s})})]})})}const Bk=c.exports.memo(jk),Xk={integrals:{},info:{}};function Yk(){const{xDomain:e,activeTab:t}=$(),n=re(),{integrals:o,info:s}=Ce(Xk);return d(Bk,{integrals:o,info:s,preferences:n.current,xDomain:e,activeTab:t})}function Q(e){const{title:t,className:n="",children:o,style:s}=e;return _("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{className:n,style:b({fontSize:"11px",fontWeight:"bold",color:"#232323",paddingRight:"10px",width:"max-content"},s==null?void 0:s.label),children:t}),f("div",{style:s==null?void 0:s.wrapper,children:o})]})}const Gk={from:-1,to:1,nbPoints:1024};function Wk({onClose:e=()=>null}){const t=c.exports.useRef(),{data:n}=$(),o=c.exports.useCallback(()=>{t.current.submitForm()},[]),s=c.exports.useCallback(i=>{yC(n,i,"fileName"),e()},[n,e]);return c.exports.useEffect(()=>{function i(r){const[l,a]=r.range;t.current.setValues(S(b({},t.current.values),{from:l,to:a}))}return pe.on("brushEnd",i),()=>{pe.off("brushEnd",i)}},[]),w("div",{css:ft,children:[w("div",{className:"header handle",children:[d("span",{children:"Export spectra as a Matrix"}),d(me,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",children:w(ce,{ref:t,initialValues:Gk,onSubmit:s,children:[w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Range :"}),d(Q,{title:"From : ",children:d(W,{name:"from",type:"number"})}),d(Q,{title:"To : ",children:d(W,{name:"to",type:"number"})})]}),d("div",{className:"row margin-10",children:d(Q,{title:"Number of Points :",className:"custom-label",children:d(W,{name:"nbPoints",type:"number"})})})]})}),d("div",{className:"footer-container",children:d(de.Done,{onClick:o,children:"Export Now"})})]})}function Zk({onSubmit:e},t){const{xDomain:n}=$();return _(ce,{ref:t,initialValues:{from:n[0],to:n[1],numberOfPoints:1024},onSubmit:e,children:[_("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(Q,{title:"From : ",children:f(W,{name:"from",type:"number"})}),f(Q,{title:"To : ",children:f(W,{name:"to",type:"number"})})]}),f("div",{className:"row margin-10",children:f(Q,{className:"custom-label",title:"Number of points : ",children:f(W,{name:"numberOfPoints",type:"number"})})})]})}var Uk=c.exports.forwardRef(Zk);function Kk({onSubmit:e},t){const{xDomain:n}=$();return f(ce,{ref:t,initialValues:{from:n[0],to:n[1]},onSubmit:e,children:_("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(Q,{title:"From :",children:f(W,{name:"from",type:"number"})}),f(Q,{title:"To :",children:f(W,{name:"to",type:"number"})})]})})}var qk=c.exports.forwardRef(Kk);const Jk=[{key:0,value:0,label:"Select Filter"},{key:Ro,value:Ro,label:ga},{key:Bn,value:Bn,label:pa},{key:js,value:js,label:wa},{key:Hs,value:Hs,label:ca},{key:Vs,value:Vs,label:va}],Qk=N`
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
`;function eS({onClose:e=()=>null,nucleus:t=""}){const n=c.exports.useRef(),o=Y(),[s,i]=c.exports.useState(""),r=c.exports.useMemo(()=>{const h=Lt[t]?Object.entries(Lt[t]).map(m=>({key:m[0],value:m[0],label:m[0]}),[]):[];return Jk.concat(h)},[t]),l=c.exports.useCallback(h=>{h.preventDefault(),n.current&&n.current.submitForm()},[]),a=c.exports.useCallback(h=>{h&&(o({type:mu,payload:[{name:s,options:h}]}),e())},[o,s,e]);c.exports.useEffect(()=>{function h(m){const[g,x]=m.range;n.current&&n.current.setValues(S(b({},n.current.values),{from:g,to:x}))}return pe.on("brushEnd",h),()=>{pe.off("brushEnd",h)}},[]);const u=c.exports.useCallback(h=>{i(h)},[]),p=c.exports.useMemo(()=>{switch(s){case Ro:return d(qk,{onSubmit:a,ref:n});case Bn:return d(Uk,{onSubmit:a,ref:n})}},[s,a]);return w("div",{css:[ft,Qk],children:[w("div",{className:"header handle",children:[d("span",{children:"Apply filters"}),d(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content container",children:[d("p",{className:"infoText",children:"This filter will use the exclusions zones defined in the first spectrum."}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Filter :"}),d(Ne,{data:r,style:{width:275,height:30,margin:0},onChange:u})]}),p]}),d("div",{className:"footer-container",children:d(Zt,{style:{flexDirection:"row-reverse",margin:0},onDone:l,doneLabel:"Save",onCancel:e,cancelLabel:"Close"})})]})}function tS(){const e=fe(),t=Y(),n=c.exports.useCallback(()=>{t({type:ct}),e.show(d(eS,{}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:550,height:250})},[e,t]),o=c.exports.useCallback(()=>{t({type:ct}),e.show(d(Wk,{}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:500})},[e,t]);return w("div",{css:It,children:[w(ot,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,children:[d(Se,{popupTitle:"Add Filter",onClick:n,children:d(Bp,{style:{fontSize:"18px"}})}),d(Se,{popupTitle:"Export spectra as a Matrix",onClick:o,children:d(Xp,{})})]}),d("div",{className:"inner-container"})]})}function nS(e){const{onClose:t=()=>null,selectedMolecule:n}=e,[o,s]=c.exports.useState(null),i=Y();c.exports.useEffect(()=>{s(n?n.molfile:null)},[n]);const r=c.exports.useCallback(u=>{var h,m;const p=(m=(h=/(?<s>M {2}V30 BEGIN BOND)(?<mol>.*?)(?<e>M {2}V30 END BOND)/gs.exec(u))==null?void 0:h.groups)==null?void 0:m.mol;s(p!=null&&p.trim()?u:null)},[s]),l=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(()=>{n?(i({type:Ri,molfile:o,key:n.key}),t("replace")):(i({type:Pi,molfile:o}),t("new"))},[i,n,o,t]);return w("div",{css:ft,children:[d(Yp,{initialMolfile:n==null?void 0:n.molfile,svgMenu:!0,fragment:!1,onChange:r}),d("div",{className:"footer-container",children:d(Zt,{style:{flexDirection:"row-reverse",margin:0},onDone:a,doneLabel:"Save",onCancel:l})})]})}const oS=N`
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
`;function sS({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,d("span",{children:t})]})}function iS({items:e,boxBounding:t,onClick:n}){return d("div",{className:"menu",style:{transform:`translate(${t.width}px, -${t.height}px) `},children:e==null?void 0:e.map(o=>d(sS,S(b({},o),{onClick:()=>n(o)}),o.id))})}function rS({style:e,component:t,toolTip:n="",className:o,items:s=[],onClick:i=()=>null}){var m;const r=c.exports.useRef(null),[l,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{a(!1)},[]),p=c.exports.useCallback(()=>{a(g=>!g)},[]),h=c.exports.useCallback(g=>{a(!1),i(g)},[i]);return w("div",{style:{height:"auto"},css:oS,children:[d("button",{ref:r,type:"button",css:e,onClick:p,className:o,style:{boxSizing:"border-box"},children:d(Ee,{title:n,popupPlacement:"right",children:t})}),l&&d(iS,{items:s,boxBounding:(m=r.current)==null?void 0:m.getBoundingClientRect(),onClick:h}),l&&d("div",{className:"menu-cover",onClick:u})]})}function nr(e,t,n){const{power:o=2,format:s=lS}=n||{};let i=[];for(let r=e;r<=t;r++){const l=o**r;i.push({key:l,label:s(l),value:l})}return i}function lS(e){return e>=1024*1024?`${e/(1024*1024)}M`:e>=1024?`${e/1024}K`:e}function Le(n){var o=n,{value:e=""}=o,t=G(o,["value"]);return f("div",S(b({},t),{dangerouslySetInnerHTML:{__html:e.replace(/(?<isotope>[0-9]+)/g,"<sup>$<isotope></sup>")}}))}const sl={container:{backgroundColor:"#fd000c",borderRadius:"5px",padding:"0.4rem"},text:{color:"white",margin:"0.5px",fontSize:"0.9em",listStyle:"inside"}},aS=e=>{const t=[];function n(o){Object.keys(o).forEach(s=>{typeof o[s]=="object"?n(o[s]):t.push(o[s])})}return n(e),t};function Id({style:e}){const{errors:t,isValid:n}=he(),o=c.exports.useMemo(()=>aS(t),[t]);return n?f("div",{}):f("ul",{style:b(b({},sl.container),e==null?void 0:e.container),children:o.map((s,i)=>f("li",{style:b(b({},sl.text),e==null?void 0:e.text),children:s},i))})}const sn=function(t){const u=t,{name:n="",value:o,onChange:s=()=>null}=u,i=G(u,["name","value","onChange"]),{values:r,setFieldValue:l}=he(),a=c.exports.useCallback(p=>{s(p),l(n,p)},[n,s,l]);return c.exports.useEffect(()=>{o&&l(n,o)},[n,l,o]),f(Ne,b({name:n,defaultValue:o||V(r,n),onChange:a},i))},cS=N`
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
`,uS=nr(12,19),il=nr(10,10,{format:e=>e}),dS=ee().shape({name:an().required().label("Name"),frequency:ae().integer().required().label("Frequency"),"1d":ee({"1H":ee({from:ae().integer().required().label("1H ' From ' "),to:ae().integer().required().label("1H ' To ' ")}),"13C":ee().shape({from:ae().integer().required().label("13C ' From ' "),to:ae().integer().required().label("13C ' To ' ")}),lineWidth:ae().integer().min(1).required().label("Line Width"),nbPoints:ae().integer().required().label("1D Number Of Points")}),"2d":ee({nbPoints:ee({x:ae().integer().required().label("2D Number Of Points"),y:ae().integer().required().label("2D Number Of Points")})}),spectra:ee({proton:Pn(),carbon:Pn(),cosy:Pn(),hsqc:Pn(),hmbc:Pn()}).test("check-options","You must check one of the options to start prediction",e=>!!Object.values(e).includes(!0))});function pS({onClose:e=()=>null,molfile:t}){const n=c.exports.useRef(),o=Y(),s=le(),[i,r]=c.exports.useState(!1),[l,a]=a0("nmrium-prediction-preferences"),{toolOptions:{data:{predictionIndex:u}}}=$(),p=c.exports.useCallback(()=>{n.current.submitForm()},[]),h=c.exports.useMemo(()=>{const k=l,{isApproved:x}=k,y=G(k,["isApproved"]);return r(x),Object.assign(Ka,y,{name:`Prediction ${u+1}`})},[l,u]),m=c.exports.useCallback(x=>{(async()=>{a(S(b({},x),{isApproved:i})),o({type:Ct,isLoading:!0});const y=Object.entries(x.spectra).reduce((v,[C,E])=>(E&&v.push(C),v),[]).join(" , "),k=await s.showLoading(`Predict ${y} in progress`);o({type:hs,payload:{mol:t,options:x}}),k(),e()})()},[s,o,i,t,e,a]),g=c.exports.useCallback(x=>{r(x.target.checked)},[]);return w("div",{css:[ft,cS],children:[w("div",{className:"header handle",children:[d("span",{children:"Prediction of NMR spectrum"}),d(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content",children:[w(ce,{ref:n,initialValues:h,validationSchema:dS,onSubmit:m,children:[d(Id,{}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Name :"}),d(W,{name:"name",style:{input:{width:"200px",textAlign:"left"}}})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Spectrometer Frequency :"}),d(sn,{data:qa,style:{width:290,height:30,margin:0},name:"frequency"})]}),d("span",{className:"group-label",children:"1D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[d(Le,{value:"1H",className:"custom-label"}),d(Q,{title:"From",children:d(W,{name:"1d.1H.from",type:"number"})}),d(Q,{title:"To",style:{label:{padding:"0 10px"}},children:d(W,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[d(Le,{value:"13C",className:"custom-label"}),d(Q,{title:"From",children:d(W,{name:"1d.13C.from",type:"number"})}),d(Q,{title:"To",style:{label:{padding:"0 10px"}},children:d(W,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Line Width : "}),d(W,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),d("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Number of Points : "}),d(sn,{data:uS,name:"1d.nbPoints",style:{width:290,height:30,margin:0}})]}),d("span",{className:"group-label",children:"2D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Number of Points : "}),d(sn,{data:il,name:"2d.nbPoints.x",style:{margin:0,height:30}}),d("span",{className:"middle-x",children:" X "}),d(sn,{data:il,name:"2d.nbPoints.y",style:{margin:0,height:30}})]}),d("div",{className:"row margin-10",children:d("span",{className:"group-label",children:"Spectra "})}),w("div",{className:"row margin-10 padding-h-10",style:{justifyContent:"space-between"},children:[w("div",{className:"row",children:[d(gt,{name:"spectra.proton"}),d(Le,{value:"1H",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(gt,{name:"spectra.carbon"}),d(Le,{value:"13C",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(gt,{name:"spectra.cosy"}),d(Le,{value:"COSY",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(gt,{name:"spectra.hsqc"}),d(Le,{value:"HSQC",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(gt,{name:"spectra.hmbc"}),d(Le,{value:"HMBC",className:"nucleus-label"})]})]})]}),d("p",{className:"warning",children:"In order to predict spectra we are calling an external service and the chemical structure will leave your browser! You should never predict spectra for confidential molecules."}),w("div",{className:"warning-container",children:[d(uo,{onChange:g,checked:i},String(i)),d("p",{children:"I confirm that the chemical structure is not confidential."})]})]}),d("div",{className:"footer-container",children:d(de.Done,{onClick:p,disabled:!i,children:"Predict spectrum"})})]})}const hS=N`
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
`,fS=[{id:"molfile",icon:d(si,{}),label:"Copy as molfile"},{id:"png",icon:d(Bl,{}),label:"Copy as PNG"},{id:"svg",icon:d(Xl,{}),label:"Export as SVG"}];function mS({currentIndex:e,molecules:t,onMoleculeIndexChange:n=()=>null,onOpenMoleculeEditor:o=()=>null,actionsOptions:s={}}){const{rootRef:i}=fs(),r=le(),l=Y(),a=fe(),u=je(),p=c.exports.useCallback(()=>{!i||bd(i,`molSVG${e}`,"molFile")},[i,e]),h=c.exports.useCallback(()=>{!i||(yd(i,`molSVG${e}`),r.success("MOL copied as PNG to clipboard"))},[i,r,e]),m=c.exports.useCallback(()=>{t[e]&&xs(t[e].molfile).then(v=>{v?r.success("MOLFile copied to clipboard"):r.error("copied not completed")})},[r,e,t]),g=c.exports.useCallback(({id:v})=>{switch(v){case"molfile":m();break;case"png":h();break;case"svg":p();break}},[m,h,p]),x=c.exports.useCallback(()=>{navigator.clipboard.readText().then(v=>{l({type:Pi,molfile:v})})},[l]),y=c.exports.useCallback(()=>{var v;(v=t[e])!=null&&v.key&&(n(0),l({type:xc,payload:{key:t[e].key,assignmentData:u}}))},[t,e,n,l,u]),k=c.exports.useCallback(()=>{a.show(d(pS,{molfile:t[e]}),{position:te.TOP_CENTER,enableResizing:!0,width:600})},[a,t,e]);return w("div",{css:hS,children:[!s.hideExport&&d(rS,{component:d(Jo,{}),toolTip:"Export As",items:fS,onClick:g}),!s.hidePast&&d(Ee,{title:"Paste molfile",popupPlacement:"left",children:d("button",{className:"bar-button",type:"button",onClick:x,children:d(Gp,{})})}),!s.hideAdd&&d(Ee,{title:"Add Molecule",popupPlacement:"left",children:d("button",{className:"bar-button",type:"button",onClick:o,"data-test-id":"panel-structures-button-add",children:d(yn,{})})}),!s.hideDelete&&d(Ee,{title:"Delete Molecule",popupPlacement:"left",children:d("button",{className:"bar-button",type:"button",onClick:y,children:d(wt,{})})}),!s.hidePredict&&t&&t.length>0&&d(Se,{popupTitle:"Predict Spectra",popupPlacement:"left",onClick:k,children:d(jl,{})}),w("p",{children:[t&&t.length>0&&`${+(e+1)} / ${t.length}`," "]})]})}function rl(e,t,n){if(t.length>0&&Object.keys(e).length>0){const o=n==="x"?0:n==="y"?1:void 0;if(o!==void 0){if(t[o]===e.atomLabel)return{oclIDs:[e.oclID],nbAtoms:e.nbAtoms};if(t[o]==="H")return{oclIDs:e.hydrogenOCLIDs,nbAtoms:e.nbAtoms*e.nbHydrogens}}else return{oclIDs:[e.oclID].concat(e.hydrogenOCLIDs),nbAtoms:e.nbAtoms+e.nbAtoms*e.nbHydrogens}}return{oclIDs:[],nbAtoms:0}}function Yo(e,t){let n=e.find(s=>s.id===t),o;if(!n){for(const s of e)if(o=s.signals.findIndex(i=>i.id===t),o>=0){n=s;break}}return{datum:n,signalIndex:o}}function gS(e,t,n){let o=[];for(let s in e.assignment.assignment){let i,r,l=!1;if((e.assignment.assignment[s].x||[]).some(a=>t.includes(a))){o=o.concat(e.assignment.assignment[s].x);const a=Yo(n,s);i=a.datum,r=a.signalIndex,l=!0}if((e.assignment.assignment[s].y||[]).some(a=>t.includes(a))){o=o.concat(e.assignment.assignment[s].y);const a=Yo(n,s);i=a.datum,r=a.signalIndex,l=!0}if(i&&(o.push(i.id),r!==void 0&&o.push(i.signals[r].id)),l)break}return o}function xS(e,t){const n=e.assignment.isOnHover?e.assignment.assignment[e.assignment.onHoverID]:null,o=e.assignment.isOnHover?e.assignment.onHoverAxis:null;return n?t===B.DM_1D?n.x||[]:t===B.DM_2D?o?o==="x"?n.x||[]:o==="y"?n.y||[]:(n.x||[]).concat(n.y||[]):(n.x||[]).concat(n.y||[]):[]:[]}function bS(e,t){let n=e?e.slice():[];const{nbAtoms:o,oclIDs:s}=t;let i=o;return s.forEach(r=>{n.includes(r)?(i*=-1,n=n.filter(l=>l!==r)):n.push(r)}),[n,i]}function yS({displayerMode:e,activeTab:t,zones:n,ranges:o}){const s=le(),i=Y(),r=An(),l=je(),a=ut(l.assignment.activeID!==void 0?l.assignment.activeID:Ju),[u,p]=c.exports.useState([]),[h,m]=c.exports.useState(null),[g,x]=c.exports.useState([]);c.exports.useEffect(()=>{if(t){const D=t.split(",");D.length===1?x([t.replace(/[0-9]/g,"")]):D.length===2&&x(D.map(I=>I.replace(/[0-9]/g,"")))}},[t]),c.exports.useEffect(()=>{h&&(h==="show"?r.dispatch({type:"SHOW",payload:{convertedHighlights:u}}):h==="hide"&&(r.dispatch({type:"HIDE",payload:{convertedHighlights:u}}),p([])),m(null))},[h,u,r]);const y=c.exports.useMemo(()=>{if(n||o){if(e===B.DM_1D&&o&&o.values)return o.values;if(e===B.DM_2D&&n&&n.values)return n.values}return[]},[e,o,n]),k=c.exports.useMemo(()=>{const D={x:[],y:[]};for(let I in l.assignment.assignment)l.assignment.assignment[I].x&&D.x.push(...l.assignment.assignment[I].x),l.assignment.assignment[I].y&&D.y.push(...l.assignment.assignment[I].y);return D},[l.assignment]),v=c.exports.useMemo(()=>k.x.concat(k.y),[k.x,k.y]),C=c.exports.useMemo(()=>{let D=[];return r.highlight.highlighted.forEach(I=>{var P;if(l.assignment.assignment[I]){const{datum:R}=Yo(y,I),O=(P=r.highlight.sourceData)==null?void 0:P.type;R&&(O===ue.ZONE||O===ue.RANGE)&&(D=D.concat(R.signals.map(L=>Yi(l,[L.id]).length>0?L.diaIDs:[]).flat()))}}),xS(l,e).concat(D)},[l,y,e,r.highlight]),E=c.exports.useCallback((D,I)=>bS(D,I),[]),T=c.exports.useCallback((D,I)=>{var A;if(!Xt(I)&&a.isActive){const P=rl(D,g,a.activeAxis);if(P.nbAtoms>0){P.oclIDs.forEach(L=>{a.toggle(L)});const{datum:R,signalIndex:O}=Yo(y,a.id);if(R){let L=[],H=0;O===void 0?e===B.DM_1D?[L,H]=E(R.diaIDs||[],P):e===B.DM_2D&&([L,H]=E(R[a.activeAxis].diaIDs||[],P)):(A=R.signals)!=null&&A[O]&&(e===B.DM_1D?[L,H]=E(R.signals[O].diaIDs||[],P):e===B.DM_2D&&([L,H]=E(R.signals[O][a.activeAxis].diaIDs||[],P))),e===B.DM_1D?i({type:nu,payload:{nbAtoms:H,rangeData:R,diaIDs:L,signalIndex:O}}):e===B.DM_2D&&i({type:pu,payload:{nbAtoms:H,zoneData:R,diaIDs:L,axis:a.activeAxis,signalIndex:O}})}a.onClick(a.activeAxis)}else s.info("Not assigned! Different atom type or no attached hydrogens found!")}},[a,s,y,i,e,g,E]);return{handleOnAtomHover:c.exports.useCallback(D=>{const I=rl(D,g,a.activeAxis).oclIDs;if(I.length>0){const A=gS(l,I,y);p(A),m("show")}else m("hide")},[a.activeAxis,l,y,g]),handleOnClickAtom:T,currentDiaIDsToHighlight:C,assignedDiaIDsMerged:v}}const Mt={panel:N({display:"flex",overflow:"auto",flexGrow:1,width:"100%",height:"100%",flexDirection:"column"}),innerPanel:N({display:"flex",flex:"1",flexDirection:"column",overflow:"auto"}),molecule:N({display:"flex",flex:"1"}),toolbar:N({display:"flex",borderBottom:"0.55px solid rgb(240, 240, 240)",padding:"0px 10px",justifyContent:"end",height:22}),slider:N({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1,minHeight:0}),items:N({display:"flex",flexDirection:"column",flex:"1 1 0%",height:"100%",minHeight:0})};function vS({zones:e,ranges:t,molecules:n,activeTab:o,displayerMode:s,onMoleculeChange:i,actionsOptions:r,children:l}){const[a,u]=c.exports.useState(0),[p,h]=c.exports.useState([]),m=Y(),g=fe(),{currentDiaIDsToHighlight:x,handleOnAtomHover:y,handleOnClickAtom:k,assignedDiaIDsMerged:v}=yS({zones:e,ranges:t,activeTab:o,displayerMode:s});c.exports.useEffect(()=>{n&&h(M=>(n.length>M.length&&u(p.length),n))},[p.length,n]),c.exports.useEffect(()=>{i==null||i(p[a]||null)},[a,p,i]);const C=c.exports.useCallback((M,D)=>{m({type:Ri,molfile:D,key:M})},[m]),E=c.exports.useCallback((M=null)=>{g.show(d(nS,{selectedMolecule:M}),{position:te.TOP_CENTER,width:700,height:500})},[g]),T=c.exports.useCallback(M=>{u(M)},[]);return w("div",{css:Mt.panel,children:[d(mS,{currentIndex:a,molecules:p,onOpenMoleculeEditor:()=>E(),onMoleculeIndexChange:T,actionsOptions:r}),w("div",{css:Mt.innerPanel,children:[d("div",{css:Mt.molecule,children:d(Ed,{onChange:M=>u(M),defaultIndex:a,children:p&&p.length>0?p.map((M,D)=>{var I;return w("div",{css:Mt.items,children:[w("span",{css:Mt.toolbar,children:[d(ti,{mf:M.mf})," - ",(I=M.mw)==null?void 0:I.toFixed(2)]}),d("div",{css:Mt.slider,className:"mol-svg-container",onDoubleClick:()=>E(M),style:{backgroundColor:(D+1)%2!==0?"#fafafa":"white"},children:d(ni,{children:({height:A,width:P})=>d(Wp,{OCL:Bt,id:`molSVG${D}`,width:P,height:A,molfile:M.molfile||"",setMolfile:R=>C(M.key,R),setSelectedAtom:k,atomHighlightColor:x&&x.length>0?"red":"#FFD700",atomHighlightOpacity:.35,highlights:x&&x.length>0?x:v,setHoverAtom:y})})})]},M.key)}):d("div",{css:Mt.slider,style:{height:"100%"},onClick:()=>E(),children:d("span",{children:"Click to draw molecule"})})})}),l]})]})}const CS=c.exports.memo(vS),kS={ranges:{},zones:{}};function Pd({onMoleculeChange:e,children:t,actionsOptions:n}){const{molecules:o,displayerMode:s,activeTab:i}=$(),r=Ce(kS),l=(r==null?void 0:r.ranges)||{},a=(r==null?void 0:r.zones)||{};return d(CS,{molecules:o,displayerMode:s,activeTab:i,ranges:l,zones:a,onMoleculeChange:e,actionsOptions:n,children:t})}const SS=[{key:1,value:"manual",label:"Manual"}];function wS({onClose:e=()=>null,nucleus:t}){const n=c.exports.useRef(),o=Y(),s=c.exports.useMemo(()=>{const a=Lt[t]?Object.entries(Lt[t]).map(u=>({key:u[0],value:u[0],label:u[0]}),[]):[];return SS.concat(a)},[t]),i=c.exports.useCallback(()=>{n.current.submitForm()},[]),r=c.exports.useCallback(a=>{o({type:au,payload:a}),e()},[o,e]);c.exports.useEffect(()=>{function a(u){const[p,h]=u.range;n.current.setValues(S(b({},n.current.values),{from:p,to:h}))}return pe.on("brushEnd",a),()=>{pe.off("brushEnd",a)}},[]);const l=c.exports.useCallback(a=>{const m=Lt[t][a]||{delta:0},{delta:p=0}=m,h=G(m,["delta"]);n.current.setValues(b(S(b({},n.current.values),{targetX:p}),h))},[t]);return w("div",{css:ft,children:[w("div",{className:"header handle",children:[d("span",{children:"Spectra calibration"}),d(me,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",style:{flex:1},children:w(ce,{ref:n,initialValues:{from:-1,to:1,nbPeaks:1,targetX:0},onSubmit:r,children:[w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Options :"}),d(Ne,{data:s,style:{width:270,height:30,marginBottom:"20px"},onChange:l})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Range :"}),d(Q,{title:"From : ",children:d(W,{name:"from",type:"number"})}),d(Q,{title:"To : ",children:d(W,{name:"to",type:"number"})})]}),d("div",{className:" margin-10",children:d(Q,{className:"custom-label",title:"Number of Peaks : ",children:d(W,{name:"nbPeaks",type:"number"})})}),d("div",{className:" margin-10",children:d(Q,{className:"custom-label",title:"Target PPM :",children:d(W,{name:"targetX",type:"number"})})})]})}),d("div",{className:"footer-container",children:d(de.Done,{onClick:i,children:"Done"})})]})}function Rd(e,t=null){try{return new Function("args",`return ${e}`)(t)}catch(n){return n}}const ES=`function run(data) {

  return JSON.stringify(data,undefined, 2);
  
}(args);
`;function AS({data:e}){const{values:t,setFieldValue:n}=he(),[o,s]=c.exports.useState(t.code?t.code:ES),[i,r]=c.exports.useState("");return c.exports.useEffect(()=>{const l=Rd(o,e);l instanceof Error?r(l.message):(n("code",o),r(l))},[o,e,n]),w("div",{style:{marginTop:"20px"},children:[d("textarea",{value:o,onChange:l=>s(l.target.value),style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",backgroundColor:"#fcfcfc",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}}),d("p",{style:{marginBottom:"5px"},children:"Result:"}),d("textarea",{value:i,readOnly:!0,style:{border:"0.55px solid #f3f3f3",fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}})]})}var TS=c.exports.memo(AS);const DS=N`
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
`;function IS({data:e,onAfterSave:t},n){const o=Y(),s=c.exports.useRef(),[i,r]=c.exports.useState({});c.exports.useImperativeHandle(n,()=>({saveSetting(){s.current.submitForm()}})),c.exports.useEffect(()=>{const h=Object.keys(e.columns).reduce((m,g)=>(m[g]=S(b({},e.columns[g]),{tempKey:g}),m),{});r(h),s.current.setValues({columns:h,code:e.code})},[e]);const l=c.exports.useMemo(()=>Object.keys(i),[i]),a=c.exports.useMemo(()=>{function h(){return l.reduce((m,g)=>(m[g]=ee().shape(S(b({tempKey:an().required().test("unique","must be unique column name",x=>{const y=s.current.values.columns;return Object.keys(y).reduce((k,v)=>(y[v].tempKey===x&&k.push(x),k),[]).length===1})},i[g].type===Bo.FORMULA?{formula:an().required()}:{}),{index:an().required()})),m),{})}return ee().shape({columns:ee().shape(h())})},[i,l,s]),u=c.exports.useCallback(h=>{t==null||t(!0);const m=Object.entries(h.columns).reduce((g,[x,y])=>(g[x]=b(b({},i[x]),y),g),{});o({type:ru,payload:{code:h.code,columns:m}})},[i,o,t]),p=c.exports.useCallback(h=>{r(m=>S(b({},m),{[`temp${h}`]:{tempKey:"",type:"FORMULA",valueKey:"value",formula:"",index:h}}))},[]);return w(ce,{ref:s,initialValues:{columns:i,code:null},validationSchema:a,onSubmit:u,children:[l&&w("table",{css:DS,children:[d("thead",{children:w("tr",{children:[d("th",{className:"counter",children:"#"}),d("th",{className:"label",children:"Label"}),d("th",{children:"value"}),d("th",{className:"index",children:"index"})]})}),d("tbody",{children:l.map((h,m)=>w("tr",{children:[d("td",{className:"counter",children:m+1}),d("td",{className:"label",children:d(W,{name:`columns.${h}.tempKey`,value:i[h].tempKey},h)}),d("td",{children:i[h].type===Bo.FORMULA?d(W,{name:`columns.${h}.formula`,value:i[h].formula}):d("div",{className:"input disbale"})}),d("td",{className:"index",children:d(W,{name:`columns.${h}.index`,value:i[h].index})}),d("td",{className:"operation-col",children:l.length===m+1&&d("button",{className:"add",type:"button",onClick:()=>p(m+1),children:d(yn,{})})})]},h))})]}),d(TS,{data:e})]})}var PS=c.exports.forwardRef(IS);const bo={container:N`
    background-color: white;
    position: absolute;
    height: auto;
    z-index: 99999999999999;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
  `,ul:N`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `,li:N`
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
  `,label:N`
    padding: 5px 20px;
    display: block;
  `};function RS({data:e=[],onSelect:t,renderItem:n=null}){const o=c.exports.useRef(null);return c.exports.useLayoutEffect(()=>{var s;if(o.current){const i=(s=o.current)==null?void 0:s.getBoundingClientRect();i.right>window.innerWidth&&(o.current.style.right=`${i.right-window.innerWidth}px`)}},[]),d("div",{css:bo.container,ref:o,children:d("ul",{css:bo.ul,children:e.map((s,i)=>d("li",{css:bo.li,onClick:()=>t(i),children:(n==null?void 0:n(s))||d("span",{css:bo.label,children:s.label})},s.key))})})}const ll={container:N`
    position: relative;
    padding: 2px;
    border-radius: 10px;
    width: max-content;
    display: inline-block;
    border: 0.55px solid lightgray;
    font-size: 10px;
  `,button:N`
    width: 100%;
  `};function or(e){const{data:t,selectedKey:n,onSelect:o,formatSelectedValue:s=g=>g.label,renderItem:i=null,style:r}=e,[l,a]=c.exports.useState(!1),[u,p]=c.exports.useState(),h=c.exports.useRef(null);c.exports.useEffect(()=>{if(n){const g=t.find(x=>x.key===n)||null;p(g)}},[n,t]),c.exports.useEffect(()=>{function g(){a(!1)}return window.addEventListener("click",g),()=>window.removeEventListener("click",g)},[]);const m=c.exports.useCallback(g=>{p(t[g]),o==null||o(t[g])},[t,o]);return w("div",{className:"dropdown",ref:h,css:[ll.container,r],children:[d("button",{css:ll.button,type:"button",onClick:g=>{a(x=>!x),g.stopPropagation()},children:u?s(u):d(Zp,{})}),l&&d(RS,{data:t,onSelect:m,renderItem:i})]})}const MS=e=>N`
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
`,NS=[{key:On.RELATIVE,label:"Relative"},{key:On.ABSOLUTE,label:"Absolute"},{key:On.MIN,label:"Min Intensity"},{key:On.MAX,label:"Max Intensity"}];function _S({charLabel:e,rangeLabel:t,data:n,onColumnFilter:o}){const s=Y(),i=c.exports.useCallback(()=>{s({type:Hi,colKey:e})},[e,s]);return w("div",{css:MS,children:[w("div",{className:"container",children:[n.type===Bo.NORMAL&&d("div",{className:"dropDown-container",children:d(or,{data:NS,formatSelectedValue:r=>r.label.substring(0,3),selectedKey:n.valueKey,onSelect:o})}),w("div",{className:"label-container",children:[w("span",{className:"label",children:[" ",e]}),d("span",{className:"label",children:t})]})]}),d(wd,{onDelete:i})]})}function FS({data:e,activeTab:t}){const n=Be(t),o=c.exports.useMemo(()=>{const l=V(e,"code","");return Rd(l,e)},[e]),s=Y(),i=c.exports.useCallback((l,a)=>{s({type:lu,payload:{columnKey:l,valueKey:a}})},[s]),r=c.exports.useMemo(()=>{const l=[{Header:"#",index:0,Cell:({row:p})=>p.index+1}];function a(p,h,m){const g=p.original[h][m];return g instanceof Error?f("span",{style:{color:"red"},children:g.message}):n(g)}function u(p,h){return f(_S,{charLabel:h,data:p,onColumnFilter:m=>i(h,m.key),rangeLabel:p.from&&p.to?`${n(p.from)} - ${n(p.to)}`:""})}return e.columns&&Object.keys(e.columns).forEach(p=>{const{valueKey:h,index:m}=e.columns[p];bs(l,{index:m+1,Cell:({row:g})=>a(g,p,h),Header:()=>u(e.columns[p],p),id:p})}),l.sort((p,h)=>p.index-h.index)},[i,e.columns,n]);return e.values&&e.values.length>0?_(c.exports.Fragment,{children:[f(po,{data:e.values,columns:r}),f("div",{style:{width:"100%",padding:"10px"},dangerouslySetInnerHTML:{__html:o}})]}):f(Kt,{})}var LS=c.exports.memo(FS);function OS({activeTab:e,spectraAnalysis:t}){const[n,o]=c.exports.useState(!1),s=c.exports.useRef(),i=le(),r=fe(),l=Y(),a=c.exports.useMemo(()=>{const{values:y,options:{columns:k,code:v}}=t[e]||{values:{},options:{columns:{},code:null}};return{values:Object.values(y),columns:k,code:v}},[e,t]),u=c.exports.useCallback(()=>{o(!n)},[n]),p=c.exports.useCallback(()=>{s.current.saveSetting()},[]),h=c.exports.useCallback(()=>{o(!1)},[]),m=c.exports.useCallback(y=>{pe.emit("showYSpectraTrackers",y)},[]),g=c.exports.useCallback(()=>{l({type:ct}),r.show(d(wS,{nucleus:e}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:500})},[e,r,l]),x=c.exports.useCallback(()=>{(async()=>{const y=Dy(t,e);await xs(y)?i.success("Data copied to clipboard"):i.error("copy to clipboard failed")})()},[e,i,t]);return w("div",{css:[It,n&&N`
            .table-container th {
              position: relative;
            }
          `],children:[!n&&w(ot,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,onSettingClick:u,children:[d(Se,{popupTitle:"Copy To Clipboard",onClick:x,children:d(Jo,{})}),d(Se,{popupTitle:"Spectra calibration",onClick:g,children:d(Up,{style:{fontSize:"18px"}})}),d(Ge,{popupTitle:"Y Spectra Tracker",popupPlacement:"right",onClick:m,children:d(Kp,{})})]}),n&&d(Dn,{onSave:p,onClose:u}),d("div",{className:"inner-container",children:n?d(PS,{data:a,onAfterSave:h,ref:s}):d(LS,{data:a,activeTab:e})})]})}const $S=c.exports.memo(OS);function HS(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=$();return e?d($S,{activeTab:e,spectraAnalysis:t,displayerKey:n}):d("div",{})}const Rs={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},zS=[{id:1,label:"Peak Number :",checkController:"showPeakNumber",formatController:"peakNumberFormat"},{id:2,label:"Peak Index : ",checkController:"showPeakIndex",formatController:"peakIndexFormat"},{id:3,label:"\u03B4 (ppm) :",checkController:"showDeltaPPM",formatController:"deltaPPMFormat"},{id:4,label:"\u03B4 (Hz) :",checkController:"showDeltaHz",formatController:"deltaHzFormat"},{id:5,label:"Peak Width",checkController:"showPeakWidth",formatController:"peakWidthFormat"},{id:6,label:"Intensity :",checkController:"showIntensity",formatController:"intensityFormat"}];function VS({nucleus:e,preferences:t,innerRef:n}){const o=le(),s=c.exports.useRef(null),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,p)=>(u[p]=pd,u),{}),a=ht(t.current,"formatting.panels.peaks");s.current.setValues(a||l)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"peaks",value:l}}),o.success("Peaks preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Rs.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>_("div",{style:Rs.groupContainer,children:[f(Le,{style:Rs.header,value:l}),zS.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`,hideFormat:a.formatController==="deltaPPMFormat"},a.id))]},l))})})}const jS=c.exports.memo(VS);function BS(e,t){const n=ys(),o=re();return f(jS,{innerRef:t,nucleus:n,preferences:o})}var XS=c.exports.forwardRef(BS);function YS({activeTab:e,preferences:t,data:n,info:o}){const s=Y(),i=Be(o.nucleus),r=c.exports.useCallback((m,g)=>{m.preventDefault(),m.stopPropagation();const x=g.original;s({type:rs,data:{id:x.id,xIndex:x.xIndex}})},[s]),l=c.exports.useMemo(()=>ht(t.current,`formatting.panels.peaks.[${e}]`,pd),[e,t]),a=c.exports.useCallback((m,g)=>{const x=parseFloat(m.target.value)-parseFloat(g.value);s({type:Ei,shiftValue:x})},[s]),u=c.exports.useMemo(()=>[{showWhen:"showPeakNumber",index:1,Header:"#",Cell:({row:m})=>m.index+1,style:{width:"1%",maxWidth:"40px",minWidth:"40px"}},{showWhen:"showPeakIndex",index:2,Header:"index",accessor:m=>Ye(m.xIndex,l.peakIndexFormat)},{showWhen:"showDeltaPPM",index:3,Header:"\u03B4 (ppm)",accessor:m=>i(m.value),Cell:({row:m})=>f(lt,{value:i(m.original.value),onSave:g=>a(g,m.original),type:"number"})},{showWhen:"showDeltaHz",index:4,Header:"\u03B4 (Hz)",accessor:m=>Ye(m.valueHz,l.deltaHzFormat)},{showWhen:"showIntensity",index:5,Header:"Intensity",style:{maxWidth:"80px"},accessor:m=>Ye(m.intensity,l.intensityFormat)},{showWhen:"showPeakWidth",index:6,Header:"Peak Width",accessor:m=>Ye(m.peakWidth,l.peakWidthFormat)}],[i,l,a]),p=c.exports.useMemo(()=>[{index:20,Header:"",style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:m})=>f("button",{type:"button",className:"delete-button",onClick:g=>r(g,m),children:f(wt,{})})}],[r]),h=c.exports.useMemo(()=>{let m=[...p];for(const x of u){const g=x,{showWhen:y}=g,k=G(g,["showWhen"]);l[y]&&bs(m,k)}return m.sort((x,y)=>x.index-y.index)},[u,p,l]);return n&&n.length>0?f(po,{data:n,columns:h,approxItemHeight:20,enableVirtualScroll:!0}):f(Kt,{})}var GS=c.exports.memo(YS);function WS({peaks:e,info:t,xDomain:n,activeTab:o,preferences:s}){var E;const[i,r]=c.exports.useState(!1),[l,a]=c.exports.useState(!1),u=Be(t.nucleus),p=Y(),h=fe(),m=c.exports.useRef(),g=c.exports.useCallback(()=>{p({type:rs,data:null})},[p]),x=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:g},{text:"No"}]})},[h,g]),y=c.exports.useCallback(()=>{a(!l)},[l]),k=c.exports.useCallback(()=>{m.current.saveSetting(),a(!1)},[]),v=c.exports.useCallback(()=>{r(!i)},[i]),C=c.exports.useMemo(()=>{function T(M){return M*1e5>=n[0]*1e5&&M*1e5<=n[1]*1e5}return e!=null&&e.values?(i?e.values.filter(D=>T(D.x)):e.values).map(D=>{const I=Number(u(D.x));return{value:I,valueHz:t!=null&&t.originFrequency?Number(I)*t.originFrequency:"",id:D.id,intensity:D.y,peakWidth:D.width?D.width:"",isConstantlyHighlighted:T(I)}}).sort((D,I)=>D.value-I.value):[]},[i,u,t,e,n]);return w("div",{css:[It,l&&N`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!l&&d(ot,{counter:(E=e==null?void 0:e.values)==null?void 0:E.length,onDelete:x,deleteToolTip:"Delete All Peaks",onFilter:v,filterToolTip:i?"Show all peaks":"Hide peaks out of view",filterIsActive:i,counterFiltered:C.length,showSettingButton:!0,onSettingClick:y}),l&&d(Dn,{onSave:k,onClose:y}),d("div",{className:"inner-container",children:l?d(XS,{ref:m}):d(GS,{data:C,activeTab:o,preferences:s,info:t})})]})}const ZS=c.exports.memo(WS),US={peaks:null,info:{}};function KS(){const{xDomain:e,activeTab:t}=$(),{peaks:n,info:o}=Ce(US),s=re();return d(ZS,{peaks:n,info:o,xDomain:e,activeTab:t,preferences:s})}const qS=N`
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
`;function JS({text:e,onClose:t,onCopyClick:n}){return w("div",{css:qS,children:[w("div",{className:"mainButtonsContainer handle",children:[d("button",{type:"button",onClick:()=>n(e),children:d(si,{})}),d(me,{onClick:t})]}),d("div",{className:"innerContainer",dangerouslySetInnerHTML:{__html:e}})]})}const QS=N`
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
`;function ew({ranges:e,info:t,onUnlink:n,onFilterActivated:o,onSettingClick:s,isFilterActive:i,filterCounter:r,showMultiplicityTrees:l,showJGraph:a,showRangesIntegrals:u}){var O;const p=Y(),h=fe(),m=le(),g=re(),x=je(),y=V(e,"options.sum",null),k=c.exports.useCallback(L=>{p({type:Bc,value:L}),h.close()},[p,h]),v=c.exports.useCallback(()=>{h.show(d(Td,{onClose:()=>h.close(),onSave:k,header:y?`Set new Ranges Sum (Current: ${Number(y).toFixed(2)})`:"Set new Ranges Sum",sumOptions:e==null?void 0:e.options}))},[k,y,h,e==null?void 0:e.options]),C=c.exports.useCallback(()=>{n()},[n]),E=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:C},{text:"No"}]})},[C,h]),T=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All ranges will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{p({type:ds,payload:{data:{assignmentData:x}}})}},{text:"No"}]})},[x,p,h]),M=c.exports.useCallback(()=>{p({type:ku})},[p]),D=c.exports.useCallback(()=>{p({type:Su})},[p]),I=c.exports.useCallback(()=>{p({type:Du})},[p]),A=c.exports.useCallback(L=>{(async()=>await bC(L)?m.success("Data copied to clipboard"):m.error("copy to clipboard failed"))()},[m]),P=c.exports.useCallback(()=>{const{originFrequency:L,nucleus:H}=t,X=V(g.current,`formatting.nucleusByKey[${H.toLowerCase()}]`),J=$r(X.ppm),z=$r(X.hz),j=qp(e.values,{nucleus:H,nbDecimalDelta:J,nbDecimalJ:z,observedFrequency:L});h.show(d(JS,{text:j,onCopyClick:A,onClose:()=>h.close()}),{})},[t,h,g,e.values,A]),R=c.exports.useCallback(L=>{p({type:bu,payload:L})},[p]);return d("div",{css:QS,children:w(ot,{counter:(O=e==null?void 0:e.values)==null?void 0:O.length,onDelete:T,deleteToolTip:"Delete All Ranges",onFilter:o,filterToolTip:i?"Show all ranges":"Hide ranges out of view",filterIsActive:i,counterFiltered:r,showSettingButton:!0,onSettingClick:s,children:[d(Se,{popupTitle:"Preview publication string",popupPlacement:"right",onClick:P,className:"btn preview-publication-icon",children:d(Jo,{})}),d(Se,{popupTitle:y?`Change Ranges Sum (${Number(y).toFixed(2)})`:"Change Ranges Sum",popupPlacement:"right",onClick:v,className:"btn icon",children:d(zl,{})}),d(Se,{popupTitle:"Remove all Assignments",popupPlacement:"right",onClick:E,disabled:!e||!e.values||e.values.length===0,className:"btn icon",children:d(Yl,{})}),d(Ge,{popupTitle:l?"Hide Multiplicity Trees in Spectrum":"Show Multiplicity Trees in Spectrum",popupPlacement:"right",onClick:M,disabled:!e||!e.values||e.values.length===0,children:d(Jp,{style:{pointerEvents:"none",fontSize:"12px"}})}),d(Ge,{popupTitle:a?"Hide J Graph":"Show J Graph",popupPlacement:"right",onClick:I,disabled:!e||!e.values||e.values.length===0,children:d(Qp,{style:{pointerEvents:"none",fontSize:"12px"}})}),d(Ge,{popupTitle:u?"Hide integrals":"Show integrals",popupPlacement:"right",onClick:D,defaultValue:u,disabled:!e||!e.values||e.values.length===0,children:d(Gl,{style:{pointerEvents:"none",fontSize:"12px"}})}),d(Ge,{className:"icon",popupTitle:"fix integral values",popupPlacement:"right",onClick:R,children:d(Vl,{})})]})})}const _n={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2},inputWrapper:{width:"100px",flex:"4",borderRadius:"5px"}},tw=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function nw({nucleus:e,preferences:t,innerRef:n}){const o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,p)=>(u[p]=Wi(p),u),{}),a=ht(t.current,"formatting.panels.ranges");s.current.setValues(a||l)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"ranges",value:l}}),o.success("ranges preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:_n.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>_("div",{style:_n.groupContainer,children:[f(Le,{style:_n.header,value:l}),tw.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id)),f(Q,{title:"J Graph tolerance (Hz) :",style:{label:_n.inputLabel,wrapper:_n.inputWrapper},children:f(W,{name:`${l}.jGraphTolerance`,type:"number"})})]},l))})})}const ow=c.exports.memo(nw);function sw(e,t){const n=ys(),o=re();return f(ow,{innerRef:t,preferences:o,nucleus:n})}var iw=c.exports.forwardRef(sw);function Md(e,t=null){const[n,o]=c.exports.useState(t),s=c.exports.useMemo(()=>{const l=e.slice();return n!==null&&l.sort((a,u)=>n.direction==="asc"?V(a,n.key,0)-V(u,n.key,0):n.direction==="desc"?V(u,n.key,0)-V(a,n.key,0):0),l},[e,n]),i=c.exports.useCallback(l=>{var p;const a=(p=l.currentTarget)==null?void 0:p.id;let u="asc";if(a&&n&&n.key===a)switch(n.direction){case"asc":u="desc";break;case"desc":u="original";break;default:u="asc";break}o({key:a,direction:u})},[n]),r=c.exports.useCallback(l=>{const a={flag:null,content:" "};if(!n||n.key!==l)return a;switch(n.direction){case"desc":return{flag:!0,content:" \u25BC"};case"asc":return{flag:!1,content:" \u25B2"};default:return a}},[n]);return{items:s,isSortedDesc:r,onSort:{onClick:i}}}function yo(e,t){return V(e,t,!1)}function rw({rowSpanTags:e,value:t,onHoverRange:n,format:o}){return f("td",S(b(b({},e),n),{children:Ye(t,o)}))}const lw=e=>{const{onChange:t=()=>null,enableValidation:n=!0}=e,{values:o,errors:s}=he();return c.exports.useEffect(()=>{n?Object.keys(s).length===0&&t(o):t(o)},[o,n,s,t]),null},Fn={container:N`
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 0.4rem;
  `,inputInfo:N`
    font-size: 10px;
    color: black;
    font-weight: bold;
  `,infoText:N`
    padding: 10px;
    font-size: 13px;
  `,signalContainer:N`
    border: 0.55px solid #dedede;
  `,inputContainer:N`
    display: flex;
    justify-content: center;
  `,addSignalBtn:N`
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
  `};function aw({onFocus:e,onBlur:t,range:n},o){const{values:s,setFieldValue:i}=he(),{activeTab:r}=$(),l=Be(r),a=c.exports.useCallback(h=>{const m={multiplicity:"m",kind:"signal",delta:Number(h.newSignalDelta),js:[{multiplicity:$t("m"),coupling:""}]},g=s.signals.slice().concat(m);i("signals",g),i("activeTab",String(g.length-1))},[i,s.signals]),u=c.exports.useMemo(()=>ee().shape({newSignalDelta:ae().test("test-range","",function(m){const{path:g,createError:x}=this;if(m&&m>n.from&&m<n.to)return!0;const y=` ${m?m.toFixed(5):0} ppm out of the range`;return x({path:g,message:y})}).required()}),[n]),p=c.exports.useCallback(()=>{o.current.submitForm()},[o]);return d("div",{css:Fn.container,children:w("div",{children:[d("p",{css:Fn.infoText,children:"Edit or select a delta value of new signal (ppm):"}),w(ce,{ref:o,validationSchema:u,initialValues:{newSignalDelta:(n.from+n.to)/2},onSubmit:a,children:[d("div",{css:Fn.inputContainer,children:d(W,{name:"newSignalDelta",type:"number",placeholder:"\u{1D6C5} (ppm)",onFocus:e,onBlur:t,style:{input:{width:"250px",height:"30px"}},checkErrorAfterInputTouched:!1})}),w("p",{css:Fn.inputInfo,children:["[ ",`${l(n.from)} ppm - ${l(n.to)} ppm`," ]"]}),d(de,{css:Fn.addSignalBtn,onClick:p,children:d(yn,{title:"Add new signal"})})]})]})})}var cw=c.exports.forwardRef(aw);const uw={input:{width:"50px",height:"26px",borderWidth:0,margin:"0 5px"}};function dw({signal:e,index:t,onFocus:n}){return _("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{children:"\u{1D6C5}: "}),f(W,{name:`signals.${t}.delta`,type:"number",placeholder:"J (Hz)",onFocus:n,style:uw,checkErrorAfterInputTouched:!1}),f("span",{children:e.js.map(o=>$t(o.multiplicity)).join("")})]})}const pw=N`
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
`;function hw({push:e,remove:t,onFocus:n,onBlur:o}){const{values:s,setFieldValue:i}=he(),r=c.exports.useCallback((a,u)=>{Zn(a)||i(u,"")},[i]),l=c.exports.useMemo(()=>Wn.map(a=>S(b({key:a.value},a),{value:a.label})),[]);return d("table",{css:pw,children:w("tbody",{children:[w("tr",{children:[d("th",{children:"#"}),d("th",{children:"Multiplicity"}),d("th",{children:"J (Hz)"}),d("th",{children:""})]}),V(s,`signals[${s.activeTab}].js`,[]).map((a,u)=>w("tr",{children:[d("td",{children:u+1}),d("td",{children:d(sn,{className:"selectBox",name:`signals.${s.activeTab}.js.${u}.multiplicity`,data:l,onChange:p=>r(p,`signals.${s.activeTab}.js.${u}.coupling`)})}),d("td",{children:d(W,{name:`signals.${s.activeTab}.js.${u}.coupling`,type:"number",placeholder:"J (Hz)",disabled:!Zn(a.multiplicity),onFocus:n,onBlur:o,style:{input:{width:"100%",height:"26px"}},checkErrorAfterInputTouched:!1})}),d("td",{children:d(de,{className:"delete-button",onClick:()=>{t(u)},children:d(wt,{className:"icon",title:"Delete coupling"})})})]},`editCouplings${s.activeTab}${u}`)),d("tr",{}),d("tr",{children:d("td",{colSpan:4,children:d(de,{className:"add-button",onClick:()=>e({multiplicity:$t("m"),coupling:""}),children:d(yn,{title:"Add new coupling"})})})})]})})}var fw=c.exports.memo(hw);const mw=N`
  border-spacing: 0;
  width: 100%;
  font-size: 12px;
  height: 100%;

  margin: 0;
  padding: 0.4rem;
  text-align: center;
`;function gw({onFocus:e,onBlur:t}){const{values:n}=he();return d("div",{css:mw,children:d(eh,{name:`signals.${n.activeTab}.js`,render:({push:o,remove:s})=>d("div",{children:d(fw,{push:o,remove:s,onFocus:e,onBlur:t})})})})}var xw=c.exports.memo(gw);const bw=N`
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
`,yw=N`
  color: red;
`,vw=N`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function Cw({range:e}){const t=c.exports.useRef(),[n,o]=c.exports.useState(null),{values:s,setFieldValue:i,errors:r}=he(),{activeTab:l}=$(),{info:a}=Ce({info:{}}),u=Be(l);c.exports.useEffect(()=>{function v(C){if((a==null?void 0:a.originFrequency)&&n)if(s.activeTab==="addSignalTab")t.current.setValues({[n]:(C.range[1]-C.range[0])/2+C.range[0]});else if(n.includes("delta"))i(n,(C.range[1]-C.range[0])/2+C.range[0]);else{const E=Number(u(Math.abs(C.range[0]-C.range[1])*a.originFrequency));i(n,E)}o(null)}return pe.on("brushEnd",v),()=>{pe.off("brushEnd",v)}},[n,i,s.activeTab,u,a]),c.exports.useEffect(()=>{function v(C){n&&(s.activeTab==="addSignalTab"?t.current.setValues({[n]:C.xPPM}):n.includes("delta")&&i(n,C.xPPM)),o(null)}return pe.on("mouseClick",v),()=>{pe.off("mouseClick",v)}},[s.activeTab,n,i]);const p=c.exports.useCallback(v=>{o(v.target.name)},[o]),h=c.exports.useCallback(({tabid:v})=>{i("activeTab",v)},[i]),m=c.exports.useCallback(({tabid:v})=>{const C=s.signals.filter((E,T)=>T!==Number(v));i("signals",C)},[i,s.signals]);c.exports.useEffect(()=>{i("activeTab",s.signals.length>0?(s.signals.length-1).toString():"addSignalTab")},[i,s.signals.length]);const g=c.exports.useCallback(v=>!!((r==null?void 0:r.signals)&&(r==null?void 0:r.signals[v])),[r]),x=c.exports.useMemo(()=>{const v=s.signals.length>0?s.signals.map((E,T)=>d(Me,{tabid:`${T}`,tabstyles:g(T)?yw:vw,canDelete:!0,render:()=>d(dw,{signal:E,index:T,onFocus:p}),children:d(xw,{onFocus:p})},`signalForm${T}`)):[],C=d(Me,{tablabel:"+",tabid:"addSignalTab",canDelete:!1,className:"add-signal-tab",children:d(cw,{onFocus:p,range:e,ref:t})},"addSignalTab");return v.concat(C)},[p,e,g,s.signals]),y=d("p",{className:"infoText",children:"Focus on an input field and press Shift + Drag & Drop to draw a coupling constant in spectrum view."}),k=d("p",{className:"infoText",children:"Focus on the input field and press Shift + Left mouse click to select new signal delta value in spectrum view."});return w("div",{children:[d("div",{css:bw,children:r.signals&&(r.signals.noSignals||r.signals.noCouplings)?w("div",{children:[d("p",{className:"errorText",children:r.signals.noSignals||r.signals.noCouplings[0].message}),r.signals.noSignals?k:null]}):s.activeTab==="addSignalTab"?k:y}),d(Tn,{activeTab:s.activeTab,onClick:h,onDelete:m,children:x})]})}var kw=c.exports.memo(Cw);const Sw=()=>c.exports.useMemo(()=>ee().shape({signals:Os().of(ee().shape({j:Os().of(ee().shape({multiplicity:an().required(),coupling:th().test("checkValue","",function(t){const{path:n,createError:o}=this,s=Zn(this.parent.multiplicity);return!s&&isNaN(t)||s&&!isNaN(t)?!0:o({path:n,message:`${n} is required`})})})).min(1,"There must be at least one coupling in a signal")})).min(1,"There must be at least one signal in a range!")}),[]),ww=N`
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
`;function Ew({onSaveEditRangeModal:e=()=>null,onCloseEditRangeModal:t=()=>null,onZoomEditRangeModal:n=()=>null,range:o,automaticZoom:s=!0}){const i=c.exports.useRef(null),{activeTab:r}=$(),l=Y(),a=Be(r),u=Sw(),p=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{s&&p()},[s,p]);const h=c.exports.useCallback(()=>{t()},[t]),m=c.exports.useCallback(v=>v.filter(C=>C.coupling!=="").map(C=>S(b({},C),{multiplicity:$t(C.multiplicity)})),[]),g=c.exports.useCallback(v=>v.map(C=>S(b({id:U()},C),{multiplicity:C.js.map(E=>$t(E.multiplicity)).join(""),js:m(C.js)})),[m]),x=c.exports.useCallback(v=>{(async()=>{const C=b({},o);C.signals=g(v.signals),await e(C),h()})()},[g,h,e,o]),y=c.exports.useMemo(()=>{const v=o.signals.map(C=>{let E=0;const T=[];return C.multiplicity.split("").forEach(M=>{let D={multiplicity:M,coupling:""};Zn(M)&&(D=b({},C.js[E]),D.coupling=Number(a(D.coupling)),E++),D.multiplicity=$t(D.multiplicity),T.push(D)}),S(b({},C),{js:T})});return{activeTab:"0",signals:v}},[a,o]),k=c.exports.useCallback(v=>{const C=g(v.signals);l({type:Cu,payload:{tempRange:Object.assign({},o,{signals:C})}})},[l,g,o]);return d("div",{css:ww,children:w(ce,{ref:i,initialValues:y,validationSchema:u,onSubmit:x,children:[w("div",{className:"header handle",children:[d(de,{onClick:p,className:"zoom-button",children:d(qn,{title:"Set to default view on range in spectrum"})}),d("span",{children:` Range and Signal edition: ${a(o.from)} ppm to ${a(o.to)} ppm`}),d(tr,{onClick:()=>i.current.submitForm(),popupTitle:"Save and exit"}),d(me,{onClick:h})]}),d(kw,{range:o}),d(lw,{onChange:k})]})})}function Aw(e){const t=Y(),n=fe(),o=je(),s=c.exports.useCallback(()=>{const p=Math.abs(e.from-e.to);t({type:ls,xDomain:[e.from-p,e.to+p]})},[t,e.from,e.to]),i=c.exports.useCallback(()=>{t({type:ds,payload:{data:{id:e.id,assignmentData:o}}})},[o,t,e.id]),r=c.exports.useCallback(p=>{t({type:Qc,payload:{data:{rowData:e,value:p}}})},[t,e]),l=c.exports.useCallback(p=>{t({type:eu,payload:{editedRowData:p,assignmentData:o}})},[o,t]),a=c.exports.useCallback(()=>{t({type:ct}),n.close()},[t,n]),u=c.exports.useCallback(()=>{t({type:lo,payload:{selectedTool:F.editRange.id,tempRange:e}}),n.show(f(Ew,{onCloseEditRangeModal:a,onSaveEditRangeModal:l,onZoomEditRangeModal:s,range:e}),{position:te.MIDDLE_RIGHT,transition:Qe.SCALE,isBackgroundBlur:!1})},[a,t,n,e,l,s]);return c.exports.useMemo(()=>({editRange:u,deleteRange:i,zoomRange:s,changeRangeSignalKind:r}),[r,i,u,s])}const Tw=N`
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
`,Dw={marginLeft:2,marginRight:2,border:"none",height:"20px"};function Iw({rowData:e,onHoverSignal:t,rowSpanTags:n}){const{editRange:o,deleteRange:s,changeRangeSignalKind:i,zoomRange:r}=Aw(e);return w(c.exports.Fragment,{children:[d("td",S(b({},t),{children:d(Ne,{onChange:i,data:ri,defaultValue:e.tableMetaInfo.signal.kind,style:Dw})})),w("td",S(b({},n),{css:Tw,children:[d("button",{type:"button",className:"delete-button",onClick:s,children:d(wt,{})}),d("button",{type:"button",className:"zoom-button",onClick:r,children:d(qn,{title:"Zoom to range in spectrum"})}),d("button",{type:"button",className:"edit-button",onClick:o,children:d(Wl,{color:"blue"})})]}))]})}function Pw({rowData:e,onHoverSignal:t}){const n=V(e,"tableMetaInfo.signal.js");return f("td",S(b({},t),{children:n==null?void 0:n.map(o=>isNaN(o.coupling)?"":o.coupling.toFixed(1)).join(",")}))}const al={color:"red",fontWeight:"bold"};function Rw({rowData:e,assignment:t,highlight:n,onUnlinkVisibilityChange:o,unlinkVisibility:s,onLink:i,onUnlink:r,rowSpanTags:l,onHover:a,highlightData:u}){var g;const p=c.exports.useMemo(()=>V(e,"diaIDs",0),[e]),h=c.exports.useCallback(x=>{o==null||o(x)},[o]),m=c.exports.useMemo(()=>{var y;return t.isActive||t.isOnHover||n.isActive&&((y=u.highlight.sourceData)==null?void 0:y.type)!==ue.SIGNAL?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"}},[t.isActive,t.isOnHover,n.isActive,(g=u.highlight.sourceData)==null?void 0:g.type]);return f("td",S(b(b({},l),a),{onClick:x=>i==null?void 0:i(x,t),children:e.nbAtoms!==void 0&&e.nbAtoms>0?e.diaIDs&&e.diaIDs.length>0?_("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[e.nbAtoms," "," ( ",f("span",{style:m,children:p.length})," ) ",f("sup",{children:f("button",{type:"button",style:{visibility:s?"visible":"hidden",padding:0,margin:0},onClick:x=>r==null?void 0:r(x,!0),children:f(Qo,{color:"red"})})})]}):t.isActive?_("div",{children:[`${e.nbAtoms} (`,f("span",{style:al,children:"0"}),")"]}):e.nbAtoms:t.isActive?_("div",{children:["0 (",f("span",{style:al,children:"0"}),")"]}):""}))}var Mw=c.exports.memo(Rw);function Nw({value:e,rowSpanTags:t,onHoverRange:n,format:o}){return f("td",S(b(b({},t),n),{children:Ye(e,o)}))}var cl=c.exports.memo(Nw);function _w({rowData:e,rowSpanTags:t,onHoverRange:n,format:o}){const s=Y(),i=c.exports.useMemo(()=>{const l=$a(e),a=Ye(e.integration,o);return l?a:`[ ${a} ]`},[o,e]),r=c.exports.useCallback(l=>{s({type:qc,payload:{data:{value:l.target.value,id:e.id}}})},[s,e.id]);return f("td",S(b(b({},t),n),{children:f(lt,{value:i,onSave:r,type:"number",style:{padding:"0.1rem 0.4rem"}})}))}function Fw({rowData:e,onHover:t,assignment:n,highlight:o,onUnlinkVisibilityChange:s,unlinkVisibility:i,onLink:r,onUnlink:l}){const a=c.exports.useMemo(()=>V(e,"tableMetaInfo.signal.diaIDs",[]),[e]),u=c.exports.useMemo(()=>n.isActive||o.isActive?{color:"red",fontWeight:"bold"}:void 0,[n.isActive,o.isActive]),p=c.exports.useCallback(m=>{s==null||s(m)},[s]),h=c.exports.useCallback(m=>{r==null||r(m,n)},[n,r]);return f("td",S(b({},t),{onClick:h,style:u,children:a&&a.length>0?_("div",{onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[a.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:i?"visible":"hidden",padding:0,margin:0},onClick:m=>l==null?void 0:l(m,!1),children:f(Qo,{color:"red"})})})]}):n.isActive?"0":""}))}var Lw=c.exports.memo(Fw);function Nd(e){return(t,n,o="",s="")=>{const i=V(e,n,"0.000");return Ye(t,i,o,s)}}function Ow({rowData:e,onHoverSignal:t,preferences:n}){const o=Y(),s=e.tableMetaInfo.signal,i=Nd(n),r=c.exports.useCallback(l=>{o({type:Jc,payload:{value:l.target.value,rangeID:e.id,signalID:s.id}})},[o,e.id,s.id]);return s?f("td",S(b({},t),{children:Ui(s.multiplicity,["m"])?f(lt,{value:s.delta.toFixed(3),onSave:r,type:"number",style:{padding:"0.1rem 0.4rem"}}):`${i(e.from,"fromFormat")} - ${i(e.to,"toFormat")}`})):f("td",{children:""})}const $w=N`
  background-color: #ff6f0057;
`,Hw=N`
  background-color: #f5f5dc;
`;function zw({rowData:e,onUnlink:t,onContextMenu:n,preferences:o}){const s=je(),i=ut(e.id),r=ie([i.id].concat(i.assigned.x||[]).concat(Yi(s,e.signals.map(I=>I.id))),{type:ue.RANGE}),l=ie(i.assigned.x||[],{type:ue.RANGE}),a=ut(e.tableMetaInfo.id),u=ie([a.id].concat(a.assigned.x||[]),{type:ue.SIGNAL}),p=An(),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),y=Nd(o),k=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:V(e.tableMetaInfo,"hide",!1)?{display:"none"}:void 0}),[e.tableMetaInfo]),v=c.exports.useCallback((I,A)=>{I&&I.stopPropagation(),A!==void 0?A?(t(e),m(!1),i.removeAll("x")):(t(e,V(e,"tableMetaInfo.signalIndex",void 0)),x(!1),a.removeAll("x")):(m(!1),x(!1))},[i,a,t,e]),C=c.exports.useCallback((I,A)=>{I.stopPropagation(),A.onClick("x")},[]),E=c.exports.useMemo(()=>({onMouseEnter:()=>{i.onMouseEnter("x"),r.show()},onMouseLeave:()=>{i.onMouseLeave("x"),r.hide()}}),[i,r]),T=c.exports.useMemo(()=>({onMouseEnter:()=>{i.onMouseEnter("x"),l.show()},onMouseLeave:()=>{i.onMouseLeave("x"),l.hide()}}),[i,l]),M=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("x"),u.show()},onMouseLeave:()=>{a.onMouseLeave("x"),u.hide()}}),[a,u]),D=c.exports.useMemo(()=>r.isActive||i.isActive?$w:V(e,"tableMetaInfo.isConstantlyHighlighted",!1)?Hw:null,[i.isActive,r.isActive,e]);return w("tr",{onContextMenu:I=>n(I,e),css:D,children:[d("td",S(b(b({},k),E),{children:e.tableMetaInfo.rowIndex+1})),yo(o,"showFrom")&&d(cl,{value:e.from,rowSpanTags:k,onHoverRange:E,format:y("showFrom",void 0)}),yo(o,"showTo")&&d(cl,{value:e.to,rowSpanTags:k,onHoverRange:E,format:y("toFormat",void 0)}),d(Ow,{rowData:e,onHoverSignal:M,preferences:o}),yo(o,"showRelative")&&d(_w,{rowData:e,rowSpanTags:k,onHoverRange:E,format:y("relativeFormat",void 0)}),yo(o,"showAbsolute")&&d(rw,{value:e.absolute,rowSpanTags:k,onHoverRange:E,format:y("absoluteFormat",void 0)}),d("td",S(b({},M),{children:V(e,"tableMetaInfo.signal.multiplicity","")})),d(Pw,{rowData:e,onHoverSignal:M}),d(Lw,{rowData:e,assignment:a,highlight:u,onHover:M,unlinkVisibility:g,onUnlinkVisibilityChange:I=>x(I),onLink:C,onUnlink:v}),d(Mw,{rowData:e,assignment:i,highlight:l,onHover:T,unlinkVisibility:h,onUnlinkVisibilityChange:I=>m(I),onLink:C,onUnlink:v,rowSpanTags:k,highlightData:p}),d(Iw,{rowData:e,onHoverSignal:M,onHoverRange:E,rowSpanTags:k})]})}function Vw(e){return c.exports.useMemo(()=>{const t=[];return e.forEach((n,o)=>{n.signals.length===1?t.push(S(b({rowKey:U()},n),{tableMetaInfo:S(b({},n.tableMetaInfo),{signal:n.signals[0],rowIndex:o,signalIndex:0,id:n.signals[0].id})})):n.signals.length>1&&n.signals.forEach((s,i)=>{let r=!1,l=null;i<n.signals.length-1&&i===0?l=n.signals.length:r=!0,t.push(S(b({rowKey:U()},n),{tableMetaInfo:S(b({},n.tableMetaInfo),{signal:s,rowSpan:l,hide:r,rowIndex:o,signalIndex:i,id:s.id})}))})}),t},[e])}const jw=N`
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
`;function Bw({tableData:e,onUnlink:t,context:n,activeTab:o,preferences:s}){const i=o==null?void 0:o.replace(/[0-9]/g,""),r=c.exports.useRef(),{items:l,isSortedDesc:a,onSort:u}=Md(e),p=Vw(l),h=g=>V(s,g,!1),m=c.exports.useCallback((g,x)=>{Xt(g)||(g.preventDefault(),r.current.handleContextMenu(g,x))},[r]);return w(c.exports.Fragment,{children:[w("table",{css:jw,children:[d("thead",{children:w("tr",{children:[d("th",{children:"#"}),h("showFrom")?w("th",S(b({id:"from"},u),{children:["From",a("from").content]})):null,h("showTo")?w("th",S(b({id:"to"},u),{children:["To ",a("to").content]})):null,d("th",{children:"\u03B4 (ppm) "}),h("showRelative")?w("th",S(b({id:"integration"},u),{children:["Rel. ",i," ",a("integration").content]})):null,h("showAbsolute")?d("th",{children:"Absolute"}):null,d("th",{children:"Mult."}),d("th",{children:"J (Hz)"}),d("th",{children:d(Zl,{style:{fontSize:10}})}),d("th",{children:"\u03A3"}),d("th",{children:"Kind"}),d("th",{children:""})]})}),d("tbody",{children:p==null?void 0:p.map(g=>d(zw,{rowData:g,onUnlink:t,onContextMenu:(x,y)=>m(x,y),preferences:s},g.rowKey))})]}),d(Ut,{ref:r,context:n})]})}function Xw({ranges:e,data:t,info:n,xDomain:o,preferences:s,activeTab:i,molecules:r,showMultiplicityTrees:l,showJGraph:a,showRangesIntegrals:u}){const[p,h]=c.exports.useState(!1),m=je(),g=Y(),x=le(),[y,k]=c.exports.useState(!1),v=c.exports.useRef(),C=c.exports.useMemo(()=>{const R=(L,H)=>(H=H*1e4,L=L*1e4,H>=o[0]*1e4&&L<=o[1]*1e4||L<=o[0]*1e4&&H>=o[1]*1e4),O=L=>L.filter(H=>R(H.from,H.to));return e.values?(p?O(e.values):e.values).map(H=>S(b({},H),{tableMetaInfo:{isConstantlyHighlighted:R(H.from,H.to)}})):[]},[p,e.values,o]),E=c.exports.useCallback((R,O=-1)=>{g({type:tu,payload:{rangeData:R,assignmentData:m,signalIndex:O}})},[m,g]),T=c.exports.useCallback(async R=>{if(t.x&&t.re){const{x:O,re:L}=t,{from:H,to:X}=R,{fromIndex:J,toIndex:z}=Un(O,{from:H,to:X}),j=b({x:Array.from(O.slice(J,z)),y:Array.from(L.slice(J,z))},R);await xs(JSON.stringify(j,void 0,2))?x.show("Data copied to clipboard"):x.error("copy to clipboard failed")}},[t,x]),M=c.exports.useMemo(()=>V(s.current,`formatting.panels.ranges.[${i}]`)||Wi(i),[i,s]),D=c.exports.useMemo(()=>[{label:"Copy to clipboard",onClick:T}],[T]),I=c.exports.useCallback(()=>{h(!p)},[p]),A=c.exports.useCallback(()=>{k(!y)},[y]),P=c.exports.useCallback(()=>{v.current.saveSetting(),k(!1)},[]);return d(Ve,{children:w("div",{css:[It,y&&N`
              th {
                position: relative;
              }
            `],children:[!y&&d(ew,{ranges:e,info:n,activeTab:i,molecules:r,showRangesIntegrals:u,showMultiplicityTrees:l,showJGraph:a,isFilterActive:p,onUnlink:E,onFilterActivated:I,onSettingClick:A,filterCounter:C.length}),y&&d(Dn,{onSave:P,onClose:A}),d("div",{className:"inner-container",children:y?d(iw,{ref:v}):d("div",{className:"table-container",children:C&&C.length>0?d(Bw,{activeTab:i,tableData:C,onUnlink:E,context:D,preferences:M}):d(Kt,{})})})]})})}const Yw=c.exports.memo(Xw),Gw={ranges:{},data:{},info:{}};function Ww(){const{displayerKey:e,xDomain:t,activeTab:n,molecules:o,toolOptions:{selectedTool:s,data:{showMultiplicityTrees:i,showRangesIntegrals:r,showJGraph:l}}}=$(),{ranges:a,data:u,info:p}=Ce(Gw),h=re();return d(Yw,{ranges:a,data:u,info:p,showMultiplicityTrees:i,showJGraph:l,showRangesIntegrals:r,selectedTool:s,displayerKey:e,preferences:h,xDomain:t,activeTab:n,molecules:o})}function sr(){const e=re();return t=>V(e.current,`display.toolBarButtons.${t}`,!0)}function Zw({data:e,activeSpectrum:t,activeTab:n,displayerMode:o,spectrums:s,isAutomaticPickingVisible:i}){const r=fe(),l=le(),a=Y(),u=c.exports.useCallback(()=>{r.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:()=>{a({type:Mi})}},{text:"No"}]})},[a,r]),p=c.exports.useCallback(()=>{const k=s.map(v=>v.id);a({type:Gn,id:k})},[a,s]),h=c.exports.useCallback(()=>{a({type:Gn,id:[]})},[a]),m=c.exports.useCallback(()=>{function k(C){let E=n.split(",");E=E[0]===E[1]?[E[0]]:E;const T=[];for(const M of E)C.some(I=>I.info.nucleus===M)||T.push(M);return T}const v=k(e);v.length>0?a({type:Uc,nucleus:v}):l.error("Nothing to calculate")},[n,l,e,a]),g=c.exports.useCallback(()=>{a({type:hu})},[a]),x=c.exports.useCallback(()=>{a({type:fu})},[a]),y=c.exports.useCallback(()=>{(async()=>{const k=await l.showLoading("Automatic Ranges/Zones detection for all spectra in progress");setTimeout(()=>{a({type:wu}),a({type:Eu}),k()},0)})()},[a,l]);return _(ot,{onDelete:u,counter:s==null?void 0:s.length,deleteToolTip:"Delete all spectra",children:[f(Se,{popupTitle:"Hide all spectra",onClick:h,children:f(nh,{})}),f(Se,{popupTitle:"Show all spectra",onClick:p,children:f(wo,{})}),t&&n&&n.split(",").length>1&&f(Se,{popupTitle:"Add missing projection",onClick:m,children:f(oh,{})}),o===B.DM_1D&&s.length>1&&_(et,{children:[f(Se,{popupTitle:"Reset Scale",onClick:x,children:f(sh,{})}),f(Se,{popupTitle:"Same Top",onClick:g,children:f(ih,{})})]}),e&&e.length>0&&i&&f(Se,{popupTitle:"Automatic Ranges/Zones picking for all spectra",onClick:y,children:f(Ul,{})})]})}const Uw=c.exports.memo(Zw);function Kw({spectrums:e}){const{data:t,activeSpectrum:n,activeTab:o,displayerMode:s}=$(),r=sr()("autoRangesTool");return f(Uw,{data:t,activeSpectrum:n,activeTab:o,displayerMode:s,spectrums:e,isAutomaticPickingVisible:r})}function qw({color:e,activated:t}){return f("div",{style:{backgroundColor:e,height:"12px",width:"12px",opacity:t?1:.1,display:"inline-block"}})}function Jw({positiveColor:e,negativeColor:t,activated:n}){return f("svg",{width:"12",height:"12",viewBox:"0 0 12 12",opacity:n?1:.1,children:_("g",{children:[f("path",{d:"M0,0H12L0,12Z",fill:e,strokeWidth:"0"}),f("path",{d:"M12,12H0L12,0Z",fill:t,strokeWidth:"0"})]})})}function Qw(e){const{style:t,onClick:n=()=>null,activated:o}=e;return f("button",{style:t,type:"button",onClick:n,children:e.dimension===2?f(Jw,S(b({},e.color),{activated:o})):f(qw,b({activated:o},e.color))})}var eE=c.exports.memo(Qw);function tE({data:e,onChangeMarkersVisibility:t,markersVisible:n,style:o}){const s=i=>n.findIndex(r=>r.id===i)!==-1;return f("button",{style:S(b({},o),{opacity:s(e.id)&&e.peaks&&e.peaks.values.length>0?1:.1}),type:"button",onClick:()=>t(e),disabled:e.peaks&&e.peaks.values.length===0,children:f(rh,{})})}function nE({data:e,onChangeVisibility:t,style:n}){const o=(s,i)=>e?e.display[i]:!0;return _(et,{children:[e.info.dimension===1&&f("button",{"data-test-id":"hide-show-spectrum-button",style:n,type:"button",onClick:()=>t(e,"isVisible"),children:f(wo,{style:b({},o(e.id,"isVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.color}:{opacity:.1,fill:e.display.color})})}),e.info.dimension===2&&_("div",{style:{minWidth:"40px"},children:[f("button",{style:S(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isPositiveVisible"),children:f(wo,{style:b({},o(e.id,"isPositiveVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.positiveColor}:{opacity:.1,fill:e.display.positiveColor})})}),f("button",{style:S(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isNegativeVisible"),children:f(wo,{style:b({},o(e.id,"isNegativeVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.negativeColor}:{opacity:.1,fill:e.display.negativeColor})})})]})]})}const Xe={button:{backgroundColor:"transparent",border:"none",width:"26px",minWidth:"26px"},row:{display:"flex",alignContent:"center",height:"25px",borderBottom:"0.55px solid #f1f1f1"},name:{flex:1,height:"100%",display:"flex"},info:{flex:"1 1 1px",height:"100%",display:"block",alignItems:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"24px"},icon:{display:"flex",margin:"auto",justifyContent:"center"}};function oE({activeSpectrum:e,markersVisible:t,data:n,onChangeVisibility:o,onChangeMarkersVisibility:s,onChangeActiveSpectrum:i,onOpenSettingModal:r,onContextMenu:l}){var x,y;const a=k=>(k&&(k=k.replace(/(?<value>[0-9]+)/g,"<sub>$<value></sub>")),k),u=e&&e.id===n.id,{color:p,name:h,positiveColor:m,negativeColor:g}=n.display;return _("div",{style:b(b({},Xe.row),u?{backgroundColor:"#fafafa"}:{opacity:e?.2:1}),onContextMenu:l,children:[f(nE,{data:n,onChangeVisibility:o,style:Xe.button}),_("div",{"data-test-id":"activate-deactivate-spectrum-button",style:Xe.name,onClick:()=>i(n),children:[f("div",{style:S(b({},Xe.icon),{width:"16px"}),children:n.info.isFid?f(lh,{}):n.info.dimension===2?f(ah,{}):f(jl,{})}),f("span",{style:Xe.info,children:h}),f("div",{style:Xe.info,dangerouslySetInnerHTML:{__html:n.info&&a(n.info.solvent)}}),_("span",{style:Xe.info,children:[f("span",{style:{borderLeft:"0.55px solid #e5e5e5",paddingRight:"5px"}}),(x=n.info)==null?void 0:x.experiment]}),f("span",{style:Xe.info,children:(y=n.info)==null?void 0:y.pulse})]}),f(tE,{data:n,style:b(b({},Xe.icon),Xe.button),onChangeMarkersVisibility:s,markersVisible:t}),f(eE,{style:Xe.button,dimension:n.info.dimension,color:{positiveColor:m,color:p,negativeColor:g},activated:u,onClick:k=>r(n,k)})]})}var sE=c.exports.memo(oE);function iE(e){const{onColorChange:t=()=>null,name:n}=e,{values:o,setFieldValue:s}=he(),i=c.exports.useCallback(r=>{t(r),s(n,`${r.hex}${Math.round(r.rgb.a*255).toString(16)}`)},[n,t,s]);return f(Hl.SketchPicker,{color:{hex:V(o,n,"#000")},presetColors:Da,onChangeComplete:r=>i(r)})}var Js=c.exports.memo(iE);function rE(e){const t=e.length,n=Math.floor(t/307200)||1,o=new Float64Array(t/n>>0);let s=0;for(let i=0;i<o.length;i+=n)o[s++]=e[i];return o}function lE(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,r=t.length>0?t[0].x:0,l=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:r,y:a},{x:l,y:a}]}function aE({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=rE(t.re),r=Kl(i,n),l={},a={};for(let u in r.sanplot){const{x:p,y:h}=r.sanplot[u];let m=new Array(p.length);for(let g=0;g<p.length;g++)m[g]={x:p[g],y:h[g]};l[u]=m,a[u]=lE(r[u],m,{yLogBase:o})}return{sanPlot:l,lines:a}},[t.re,n,o]);return _("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[f("div",{style:{display:"block"},children:_(dn,{width:180,height:220,children:[f(ch,{title:"Sanplot"}),f(qe,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:5,right:60})]})}),f("div",{style:{display:"block",width:180,height:180},children:_(dn,{width:180,height:180,children:[f(qe,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:5,right:60})]})})]})}var cE=c.exports.memo(aE);function uE({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=c.exports.useCallback(()=>{n.current&&n.current.submitForm()},[]);return f(ce,{ref:n,initialValues:e.display,onSubmit:t,children:_("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[f("div",{style:{display:"block",position:"relative"},children:f(Js,{name:"color",onColorChange:o})}),f(cE,{color:"red",data:e.data})]})})}function dE(e){const l=e,{onAfterChange:t=()=>null,name:n}=l,o=G(l,["onAfterChange","name"]),{values:s,setFieldValue:i}=he(),r=c.exports.useCallback(a=>{t(a),i(n,a)},[n,t,i]);return f(uh,b({className:"horizontal-slider",thumbClassName:"thumb",trackClassName:"track",defaultValue:V(s,n,[0,100]),onAfterChange:r,renderThumb:(a,u)=>f("div",S(b({},a),{children:f("span",{children:u.valueNow})})),pearling:!0,minDistance:10},o))}var ul=c.exports.memo(dE);function pE(e){let t=e[0].length,n=e.length,o=Math.floor(t*n/204800)||1;const s=new Float64Array(t*n/o>>0);let i=0;for(let r=0;r<s.length;r+=o)s[i++]=e[r/n>>0][r%n];return s}function hE(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,r=t.length>0?t[0].x:0,l=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:r,y:a},{x:l,y:a}]}function fE({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=pE(t.z),r=Kl(i,n),l={},a={};for(let u in r.sanplot){const{x:p,y:h}=r.sanplot[u];let m=new Array(p.length);for(let g=0;g<p.length;g++)m[g]={x:p[g],y:h[g]};l[u]=m,a[u]=hE(r[u],m,{yLogBase:o})}return{sanPlot:l,lines:a}},[t.z,n,o]);return _("div",{children:[f("div",{style:{textAlign:"center",paddingBottom:5,paddingTop:5},children:"San Plot"}),_("div",{style:{borderTop:"1px solid #ededed",marginTop:"10px",paddingTop:"10px",display:"flex",flexDirection:"row"},children:[_(dn,{width:220,height:180,children:[f(qe,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log ${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:90,right:5})]}),_(dn,{width:220,height:180,children:[f(qe,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:90,right:5})]})]})]})}var mE=c.exports.memo(fE);function gE({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=N`
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
  `,s=c.exports.useCallback(()=>{n.current.submitForm()},[]);return d(ce,{ref:n,initialValues:e.display,onSubmit:t,children:w("div",{css:o,children:[w("div",{className:"positive",children:[d("span",{style:{padding:"0 10px"},children:"Positive"}),d(Js,{name:"positiveColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[d("span",{className:"label",children:"contour Levels [ min - max ]"}),d(ul,{name:"contourOptions.positive.contourLevels",onAfterChange:s}),d("span",{className:"label",children:"number of Layers "}),d(W,{name:"contourOptions.positive.numberOfLayers",onChange:s,type:"number"})]})]}),w("div",{className:"negative",children:[d("span",{style:{padding:"0 10px"},children:"Negative"}),d(Js,{name:"negativeColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[d("span",{className:"label",children:"contour Levels [ min - max ]"}),d(ul,{name:"contourOptions.negative.contourLevels",onAfterChange:s}),d("span",{className:"label",children:"number of Layers "}),d(W,{name:"contourOptions.negative.numberOfLayers",onChange:s,type:"number"})]})]}),d(mE,{data:e.data})]})})}const xE=N`
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
`;function bE({position:e,data:t,onClose:n}){const o=Y(),{id:s,info:i}=t,r=c.exports.useCallback(p=>{o({type:fc,id:s,display:p})},[o,s]),l=c.exports.useCallback(p=>{p.target===p.currentTarget&&n()},[n]);if(!e)return null;const{x:a,y:u}=e;return d("div",{css:xE,onClick:l,children:d("div",{className:"inner-conatiner",style:{left:i.dimension===2?a-450:a-240,width:i.dimension===2?450:240,padding:i.dimension===2?"10px 0":"",top:u},children:i.dimension===2?d(gE,{onSubmit:r,data:t}):d(uE,{onSubmit:r,data:t})})})}function yE(){return!0}var vE=c.exports.memo(bE,yE);function CE({data:e,activeSpectrum:t,activeTab:n,onTabChange:o}){const s=c.exports.useRef(),[i,r]=c.exports.useState([]),[l,a]=c.exports.useState(null),[u,p]=c.exports.useState(null),[h,m]=c.exports.useState(!1),g=le(),x=Y();c.exports.useEffect(()=>{if(e){const A=e.reduce((P,R)=>(R.info.dimension===1&&R.display.isPeaksMarkersVisible===!0&&P.push({id:R.id}),P),[]);r(A)}},[e,x]);const y=c.exports.useMemo(()=>e?ss("nucleus")(e,!0):[],[e]);c.exports.useEffect(()=>{o({tab:n,data:y[n]})},[n,o,y]);const k=c.exports.useCallback(A=>{const P=i.findIndex(O=>O.id===A.id),R=[...i];P===-1?R.push({id:A.id}):R.splice(P,1),x({type:Di,data:R}),r(R)},[x,i]),v=c.exports.useCallback(A=>{o({tab:A.tabid,data:y[A.tabid]}),x({type:Oi,tab:A.tabid})},[x,o,y]),C=c.exports.useMemo(()=>[{label:"Copy to Clipboard",onClick:A=>{(async()=>{const{x:P,y:R,info:O}=A;await xs(JSON.stringify({x:P,y:R,info:O},void 0,2))?g.success("Data copied to clipboard"):g.error("Copy to clipboard failed")})()}},{label:"Delete",onClick:A=>{setTimeout(()=>{x({type:Mi,id:A.id})},0)}}],[g,x]),E=c.exports.useCallback((A,P)=>{Xt(A)||(A.preventDefault(),s.current.handleContextMenu(A,P))},[s]),T=c.exports.useCallback((A,P)=>{p({x:P.nativeEvent.clientX,y:P.nativeEvent.clientY}),a(A),m(!0)},[]),M=c.exports.useCallback((A,P)=>{x({type:Gn,id:A.id,key:P,value:!A.display[P]})},[x]),D=c.exports.useCallback(A=>{setTimeout(()=>{t&&t.id===A.id?x({type:zo,data:null}):x({type:zo,data:{id:A.id}})},0)},[t,x]),I=c.exports.useCallback(()=>{m(!1)},[]);return _("div",{style:{height:"calc(100% - 25px)"},children:[f(Tn,{activeTab:n,onClick:v,children:y&&Object.keys(y).map(A=>{var P;return f(Me,{tablabel:A,tabid:A,children:(P=y[A])==null?void 0:P.map(R=>f(sE,{activeSpectrum:t,markersVisible:i,data:R,onChangeVisibility:M,onChangeMarkersVisibility:k,onChangeActiveSpectrum:D,onOpenSettingModal:T,onContextMenu:O=>E(O,R)},R.id))},A)})}),f(Ut,{ref:s,context:C}),h?f(vE,{onClose:I,data:l,position:u}):null]})}const kE=c.exports.memo(CE);function SE({onTabChange:e}){const{data:t,activeSpectrum:n,activeTab:o}=$();return f(kE,{data:t,activeSpectrum:n,activeTab:o,onTabChange:e})}const wE={overflow:"hidden",height:"100%",display:"flex",flexDirection:"column",width:"100%"};function EE(){const[e,t]=c.exports.useState([]),n=c.exports.useCallback(o=>{t(o.data?o.data:[])},[]);return _("div",{style:wE,children:[f(Kw,{spectrums:e}),f(SE,{onTabChange:n})]})}var AE=c.exports.memo(EE);const ve={hmbc:{from:2,to:3},cosy:{from:3,to:4},hsqc:{from:1,to:1},hmqc:{from:1,to:1},inadequate:{from:1,to:1}};function _d(e,t){return ve[t]&&e.from===ve[t].from&&e.to===ve[t].to}function Fd(e){return e.split(/\d+/)[1]}function Ld(e,t){const n=V(e,`state.${t.atomType}.error`,null);if(n){for(let{key:o,color:s}of yi)if(o!=="incomplete"&&(o==="notAttached"||o==="ambiguousAttachment")&&V(n,`${o}`,[]).some(i=>e.values[i].id===t.id))return s}return null}function Od(e,t,n,o,s){var i;if(e&&e.info.dimension===2){const r=Xn(e,t.signal.id);if(r){const l=t.axis==="x"?"y":"x",a=(i=r[l])==null?void 0:i.delta;if(a!==void 0)return a*n>=o&&a*n<=s}}return!1}function Go(e,t,n,o,s,i,r){if(e&&e.info.dimension===2){const l=Xn(e,t.signal.id);if((l==null?void 0:l.x.delta)&&(l==null?void 0:l.y.delta))return l.x.delta*n>=o&&l.x.delta*n<=s&&l.y.delta*n>=i&&l.y.delta*n<=r}return!1}function dl(e){var o;let t="X";e.experimentType==="hsqc"||e.experimentType==="hmqc"?t=!e.signal||e.signal.sign===0?"S":`S${e.signal.sign===1?"+":"-"}`:e.experimentType==="hmbc"||e.experimentType==="cosy"||e.experimentType==="tocsy"?t="M":e.experimentType==="noesy"||e.experimentType==="roesy"?t="NOE":e.experimentType==="inadequate"?t="I":e.experimentType==="adequate"&&(t="A");const n=(o=e.signal.j)==null?void 0:o.pathLength;if(n){const s=ve[e.experimentType]&&n.from>=ve[e.experimentType].from&&n.from<=ve[e.experimentType].to&&n.to>=ve[e.experimentType].from&&n.to<=ve[e.experimentType].to;return`${t}${s?"":"*"}`}return t}function $d(e){return es(S(b({},e),{edited:S(b({},e.edited),{moved:!0})}))}function $n(e,t){const n=e.id.split("_");return es(S(b({},e),{id:n[t==="x"?0:1],axis:t,match:[],edited:S(b({},e.edited),{moved:!0})}))}function be(e,t,n,o){const s=Re(t),i=ze(e),r=t.id.split("_");return o==="add"?dh(i,s===1?$d(t):$n(t,n)):(o==="remove"||o==="unmove")&&ph(i,n==="x"?r[0]:r[1]),i}function TE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:n,selectedCorrelationIdDim2:o,action:s,link:i,correlations:r}){const l=r.find(x=>x.id===n),a=r.find(x=>x.id===o),u=(l==null?void 0:l.id)!==e.id,p=t&&(a==null?void 0:a.id)!==(t==null?void 0:t.id),h=Re(i),m=[],g={};if(s==="move"){if(h===1){const x=be(e,i,"x","remove");let y;l?y=be(u?l:x,i,"x","add"):y=Rn({atomType:e.atomType,link:[$d(i)]}),m.push(x,y),g.skipDataUpdate=!0}else if(h===2){const x=be(e,i,"x","remove");m.push(x);const y=be(t,i,"y","remove");m.push(y),l&&a?(m.push(be(u?l:x,i,"x","add")),m.push(be(p?a:y,i,"y","add"))):l&&o==="new"?(m.push(be(u?l:x,i,"x","add")),m.push(Rn({atomType:t.atomType,link:[$n(i,"y")]}))):n==="new"&&a?(m.push(Rn({atomType:e.atomType,link:[$n(i,"x")]})),m.push(be(p?a:y,i,"y","add"))):n==="new"&&o==="new"&&(m.push(Rn({atomType:e.atomType,link:[$n(i,"x")]})),m.push(Rn({atomType:t.atomType,link:[$n(i,"y")]}))),g.skipDataUpdate=!0}}else if(s==="remove"){const x=be(e,i,"x","remove");if(m.push(x),Re(i)===2){const y=be(t,i,"y","remove");m.push(y)}}else s==="unmove"?h===1?l&&m.push(be(l,i,"x","unmove")):h===2&&l&&a&&(m.push(be(l,i,"x","unmove")),m.push(be(a,i,"y","unmove"))):s==="setPathLength"&&(m.push(pl(e,i,"x")),m.push(pl(t,i,"y")));return{editedCorrelations:m,buildCorrelationDataOptions:g}}function pl(e,t,n){var i,r;const o=ze(e);if(Re(t)===2){const l=t.id.split("_")[n==="x"?0:1],a=o.link.find(u=>u.id===l);if(a){const u=(i=t.signal.j)==null?void 0:i.pathLength;_d(u,a.experimentType)?((r=a.signal.j)==null||delete r.pathLength,a.signal.j&&Object.keys(a.signal.j).length===0&&delete a.signal.j,delete a.edited.pathLength):(a.signal.j?a.signal.j.pathLength=u:a.signal.j={pathLength:u},a.edited.pathLength=!0)}}return o}function DE(e,t){e=e.toLowerCase().replace(/\s+/g,"").split(",").map(s=>s==="sp"?"sp1":s).join(","),e=e.replaceAll("sp","");let n=[];return/^(?:[0-9],{0,1})+$/g.test(e)&&(n=e.split(",").filter(s=>s.length>0).map(s=>Number(s))),n=n.filter(s=>s>=(t==="protonsCount"?0:1)&&(t==="protonsCount"||s<=3)),n.filter((s,i,r)=>r.indexOf(s)===i)}function IE(e,t,n,o,s,i,r){if(r.pseudo===!0||n===null||!r.link.some(g=>g.experimentID===n.id))return!1;const l=t.split(",").map(g=>Fd(g)),a=1e4,u=o[0]*a,p=o[1]*a,h=s[0]*a,m=s[1]*a;if(i===B.DM_1D){const g=r.link.find(k=>Re(k)===1);if(!g)return!1;let x=ql(g);if(x===void 0)return!1;if(x*=a,Pe(e,g.experimentID,!0)&&l[0]===r.atomType&&x>=u&&x<=p||r.link.some(k=>{const v=Pe(e,k.experimentID,!0);return Od(v,k,a,u,p)}))return!0}else if(i===B.DM_2D){if(!l.includes(r.atomType))return!1;const g=r.link.find(y=>Re(y)===2);if(!g)return!1;const x=Pe(e,g.experimentID,!0);if(Go(x,g,a,u,p,h,m))return!0;if(r.link.some(y=>{const k=Pe(e,y.experimentID,!0);return Go(k,y,a,u,p,h,m)}))return!0}return!1}function Wo({correlation:e}){const{data:t,xDomain:n,yDomain:o,displayerMode:s,activeTab:i,activeSpectrum:r}=$();return c.exports.useMemo(()=>IE(t,i,r,n,o,s,e),[r,i,e,s,t,n,o])}const PE=N`
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
`;function hl({description:e,onConfirm:t}){const n=c.exports.useCallback(o=>{o.preventDefault(),o.stopPropagation(),t()},[t]);return w("div",{css:PE,children:[d("p",{children:e}),d("button",{type:"button",onClick:n,children:"Confirm"})]})}const RE=N`
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
`;function ME({signal:e,experimentType:t,onEdit:n}){var p,h,m,g;const[o,s]=c.exports.useState(((p=e.j)==null?void 0:p.pathLength)!==void 0?e.j.pathLength.from:((h=ve[t])==null?void 0:h.from)||0),[i,r]=c.exports.useState(((m=e.j)==null?void 0:m.pathLength)!==void 0?e.j.pathLength.to:((g=ve[t])==null?void 0:g.to)||0),[l,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{const x={from:o,to:i},y=S(b({},e),{j:S(b({},e.j),{pathLength:x})});n(y)},[i,o,n,e]);return c.exports.useEffect(()=>{a(o<=0||o>i)},[i,o]),w("div",{css:RE,children:[d("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[d(Q,{title:"Min:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:d(St,{type:"number",value:o,onChange:x=>{s(Number(x.target.value))},style:{input:{color:l?"red":"black"}}})}),d(Q,{title:"Max:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:d(St,{type:"number",value:i,onChange:x=>{r(Number(x.target.value))}})})]}),l?w("p",{className:"warning",children:["Minimum must not be 0 or higher than the maximum value."," "]}):d(de,{type:"button",onClick:u,disabled:l,children:"Set"})]})}const NE=N`
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
`;function _E({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:s}){const[i,r]=c.exports.useState(e.id),[l,a]=c.exports.useState((t==null?void 0:t.id)||void 0);function u(h){const m=rt(h);return`${m?m.toFixed(2):"?"}`}const p=c.exports.useCallback((h,m)=>{const g=o.reduce((x,y)=>(y.pseudo===!1&&y.atomType===n.atomType[m]&&x.push({key:y.id,value:y.id,label:`${y.label.origin}: ${u(y)}`}),x),[]);return g.push({key:"new",value:"new",label:`new -> ${(m===0?rt(e):rt(t)).toFixed(2)}`}),d(Ne,{onChange:x=>{m===0?r(x):a(x)},data:g,defaultValue:h.id,style:{width:110,height:25,margin:0,border:"1px solid grey"}})},[e,t,o,n.atomType]);return w("div",{css:NE,children:[d("p",{children:"Move of signals on either one or both axes."}),d("p",{children:'"New" means to separate into a new row or column.'}),w("div",{className:"selection-container",children:[p(e,0),t&&p(t,1)]}),d("button",{type:"button",onClick:()=>s(i,l),children:"Move"})]})}const FE=N`
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
`;function ir({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onClose:s,onEdit:i}){const[r,l]=c.exports.useState("move"),a=c.exports.useCallback(()=>{const h=Re(n);return h===1?` 1D (${n.signal.delta.toFixed(3)})`:h===2?`${n.signal.x?`${n.signal.x.delta.toFixed(2)}`:"?"} (${e.label.origin}), ${n.signal.y?n.signal.y.delta.toFixed(2):"?"} (${t.label.origin})`:""},[e.label.origin,n,t]),u=c.exports.useCallback((h,m,g,x)=>{const{editedCorrelations:y,buildCorrelationDataOptions:k}=TE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:m,selectedCorrelationIdDim2:g,action:h,link:x||n,correlations:o});i(y,h,x||n,k),s==null||s()},[e,t,o,n,s,i]),p=c.exports.useMemo(()=>d("div",{className:"tabs-container",children:w(Tn,{position:er.TOP,activeTab:r,onClick:h=>l(h.tabid),children:[d(Me,{tablabel:"Move",tabid:"move",children:d(_E,{correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:(h,m)=>u("move",h,m)})}),d(Me,{tablabel:"Unmove",tabid:"unmove",children:d(hl,{description:"Movement of signal to its original place.",onConfirm:()=>u("unmove",e.id,t.id)})}),d(Me,{tablabel:"Remove",tabid:"remove",children:d(hl,{description:"Deletion of signal.",onConfirm:()=>u("remove",void 0,void 0)})}),d(Me,{tablabel:"J Coupling",tabid:"setPathLength",children:d(ME,{signal:n.signal,experimentType:n.experimentType,onEdit:h=>{const m=S(b({},n),{signal:h});u("setPathLength",e,t,m)}})})]})}),[r,e,t,o,u,n]);return w("div",{css:FE,children:[w("div",{className:"header handle",children:[d(me,{onClick:s}),d("p",{className:"header-info",children:`${n.experimentType.toUpperCase()} signal at ${a()}`})]}),p]})}function LE({spectraData:e,correlationsData:t,correlation:n,onEdit:o}){var C;const s=c.exports.useRef(),i=fe(),r=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const E=[];return n.link.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(ke(T.signal.id,"Crosshair_X"));const M=Ci(e,T.experimentID,T.signal.id,!0);M&&E.push(M)}}),E},[n,e]),l=ie(r),a=c.exports.useCallback(E=>{E.currentTarget.focus(),l.show()},[l]),u=c.exports.useCallback(E=>{E.currentTarget.blur(),l.hide()},[l]),p=Wo({correlation:n}),h=c.exports.useMemo(()=>({style:{color:Ld(t,n)||void 0,backgroundColor:l.isActive?"#ff6f0057":p?"#f5f5dc":"inherit"},title:n.pseudo===!1&&n.link.reduce((E,T)=>(T.pseudo===!1&&!E.includes(T.experimentType.toUpperCase())&&E.push(T.experimentType.toUpperCase()),E),[]).sort().join("/"),onMouseEnter:a,onMouseLeave:u}),[n,t,l.isActive,p,a,u]),m=c.exports.useMemo(()=>n.edited.equivalence?{backgroundColor:"#F7F2E0"}:{color:Number.isInteger(n.equivalence)?n.equivalence===1?"#bebebe":"black":"red"},[n]),g=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(E=>Re(E)===1&&E.pseudo===!1).map(E=>{var T;return{label:`edit 1D (${E.signal.delta.toFixed(3)}${((T=E.edited)==null?void 0:T.moved)===!0?"[MOVED]":""})`,onClick:()=>{l.hide(),i.show(d(ir,{onClose:()=>i.close(),onEdit:o,link:E,correlationDim1:n,correlationDim2:void 0,correlations:t.values}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete all (${n.label.origin})`,onClick:()=>{i.showConfirmDialog({message:`All signals of ${n.label.origin} (${rt(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{o([n],"removeAll")}},{text:"No"}]}),l.hide()}}]):[],[n,t.values,l,i,o]),x=c.exports.useCallback(E=>{E.preventDefault(),s.current.handleContextMenu(E)},[s]),v=h,{title:y}=v,k=G(v,["title"]);return d("th",S(b({},k),{title:y===!1?void 0:y,children:w("div",{style:{display:"block"},onContextMenu:E=>{g.length>0&&x(E)},children:[d("p",{children:n.label.origin}),d("p",{children:rt(n)?(C=rt(n))==null?void 0:C.toFixed(2):""}),d("p",{style:m,children:Number.isInteger(n.equivalence)?n.equivalence:n.equivalence.toFixed(2)}),d(Ut,{ref:s,context:g})]})}))}function OE({rowCorrelation:e,columnCorrelation:t,commonLinks:n,correlations:o,spectraData:s,onEdit:i}){const r=c.exports.useRef(),l=fe(),a=c.exports.useMemo(()=>{const E=[];return n.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(ke(T.signal.id,"Crosshair"));const M=Ci(s,T.experimentID,T.signal.id,!0);M&&E.push(M)}}),E},[n,s]),u=ie(a),p=c.exports.useCallback(E=>{E.currentTarget.focus(),u.show()},[u]),h=c.exports.useCallback(E=>{E.currentTarget.blur(),u.hide()},[u]),m=c.exports.useCallback(E=>{E.preventDefault(),r.current.handleContextMenu(E)},[r]),g=c.exports.useCallback((E,T)=>{const M=e.link.filter(A=>(A.experimentType==="hsqc"||A.experimentType==="hmqc")&&A.pseudo===!0).length;let D,I;if(E==="add"){const A=es({experimentType:"hsqc",experimentID:U(),atomType:[t.atomType,e.atomType],id:U(),pseudo:!0,signal:{id:U(),sign:0}});D=be(t,A,"x","add"),I=be(e,A,"y","add"),I.edited.protonsCount||(I.protonsCount=[M+1])}else D=be(t,T,"x","remove"),I=be(e,T,"y","remove"),I.edited.protonsCount||(I.protonsCount=M-1>0?[M-1]:[]);i([D,I],E,T,{skipDataUpdate:!0})},[t,i,e]),x=c.exports.useMemo(()=>{const E=n.map(M=>{var I;const D=`${dl(M)} (${M.signal.x?M.signal.x.delta.toFixed(2):"?"}, ${M.signal.y?M.signal.y.delta.toFixed(2):"?"})${((I=M.edited)==null?void 0:I.moved)===!0?"[MOVED]":""}`;return M.pseudo===!1?[{label:`edit ${D}`,onClick:()=>{u.hide(),l.show(f(ir,{onClose:()=>l.close(),onEdit:i,link:M,correlationDim1:t,correlationDim2:e,correlations:o}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}]:[]}).flat(),T=n.find(M=>M.pseudo===!0&&M.experimentType==="hsqc");return e.pseudo===!0&&(T?E.push({label:"remove pseudo HSQC",onClick:()=>g("remove",T)}):E.push({label:"add pseudo HSQC",onClick:()=>g("add")})),E},[t,n,o,g,u,l,i,e]),y=c.exports.useMemo(()=>n.map((E,T)=>{var M;return _("label",{children:[f("label",{style:{color:E.pseudo===!0||((M=E.edited)==null?void 0:M.moved)===!0?"blue":"black"},children:dl(E)}),T<n.length-1&&f("label",{children:"/"})]},E.id)}),[n]),k=c.exports.useMemo(()=>n.reduce((E,T)=>(E.includes(T.experimentType.toUpperCase())||E.push(T.experimentType.toUpperCase()),E),[]).join("/"),[n]),v=Wo({correlation:e}),C=Wo({correlation:t});return _("td",{onContextMenu:E=>{x.length>0&&m(E)},style:{backgroundColor:u.isActive?"#ff6f0057":C||v?"#f5f5dc":"inherit"},title:k,onMouseEnter:p,onMouseLeave:h,children:[y,f(Ut,{ref:r,context:x})]})}function $E({additionalColumnData:e,correlations:t,correlation:n,styleRow:o,styleLabel:s,onSaveEditEquivalences:i,onSaveEditNumericValues:r,onEditCorrelationTableCellHandler:l,spectraData:a}){var O;const u=c.exports.useRef(),p=fe(),h=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const L=[];return n.link.forEach(H=>{if(H.pseudo===!1){L.push(H.signal.id),L.push(ke(H.signal.id,"Crosshair_Y"));const X=Ci(a,H.experimentID,H.signal.id,!0);X&&L.push(X)}}),L},[n,a]),m=ie(h),g=c.exports.useCallback(L=>{i(n,L.target.value)},[n,i]),x=c.exports.useCallback((L,H)=>{r({correlation:n,values:DE(L.target.value,H),key:H})},[n,r]),y=c.exports.useMemo(()=>e.map(L=>{const H=[];return n.link.forEach(X=>{L.link.forEach(J=>{if(X.axis!==J.axis&&X.experimentID===J.experimentID&&X.signal.id===J.signal.id&&!H.some(z=>z.signal.id===X.signal.id)){let z=X.experimentType;X.signal&&X.signal.sign!==0&&(z+=X.signal.sign===1?" (+)":" (-)"),H.push(es(S(b({},X),{experimentLabel:z,axis:void 0,id:`${J.id}_${X.id}`})))}})}),f(OE,{rowCorrelation:n,columnCorrelation:L,commonLinks:H,correlations:t,spectraData:a,onEdit:l},`addColData_${n.id}_${L.id}`)}),[e,n,t,l,a]),k=c.exports.useMemo(()=>n.edited.equivalence?{color:"blue"}:{color:n.equivalence===1?"#bebebe":"black"},[n]),v=c.exports.useCallback(L=>{L.currentTarget.focus(),m.show()},[m]),C=c.exports.useCallback(L=>{L.currentTarget.blur(),m.hide()},[m]),E=Wo({correlation:n}),T=c.exports.useMemo(()=>({style:S(b({},o),{backgroundColor:m.isActive?"#ff6f0057":E?"#f5f5dc":"inherit"}),title:n.pseudo===!1&&n.link.reduce((L,H)=>(H.pseudo===!1&&!L.includes(H.experimentType.toUpperCase())&&L.push(H.experimentType.toUpperCase()),L),[]).sort().join("/"),onMouseEnter:v,onMouseLeave:C}),[n.link,n.pseudo,m.isActive,E,v,C,o]),M=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(L=>Re(L)===1&&L.pseudo===!1).map(L=>{var H;return{label:`edit 1D (${L.signal.delta.toFixed(3)})${((H=L.edited)==null?void 0:H.moved)===!0?"[MOVED]":""}`,onClick:()=>{m.hide(),p.show(f(ir,{onClose:()=>p.close(),onEdit:l,link:L,correlationDim1:n,correlationDim2:void 0,correlations:t}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete ${n.label.origin}`,onClick:()=>{p.showConfirmDialog({message:`All signals of ${n.label.origin} (${rt(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{l([n],"removeAll")}},{text:"No"}]}),m.hide()}}]):[],[n,m,p,l,t]),D=c.exports.useCallback(L=>{L.preventDefault(),u.current.handleContextMenu(L)},[u]),R=T,{title:I}=R,A=G(R,["title"]),P=I||"";return _("tr",{style:o,children:[_("td",S(b({title:P},A),{style:S(b({},T.style),{styleLabel:s}),onContextMenu:L=>{M.length>0&&D(L)},children:[hh(t,n),f(Ut,{ref:u,context:M})]})),f("td",S(b({title:P},A),{children:rt(n)?(O=rt(n))==null?void 0:O.toFixed(2):""})),f("td",S(b({title:P},A),{children:n.pseudo===!1?n.atomType!=="H"?f(lt,{type:"number",value:n.equivalence,style:k,onSave:g}):f("text",{style:k,children:n.equivalence}):""})),f("td",S(b({title:P},A),{children:n.atomType!=="H"?f(lt,{type:"text",value:n.protonsCount.join(","),style:n.edited.protonsCount?{color:"blue"}:{},onSave:L=>x(L,"protonsCount")}):""})),f("td",S(b({title:P},A),{style:S(b({},T.style),{borderRight:"1px solid"}),children:n.atomType!=="H"?f(lt,{type:"text",value:n.hybridization.map(L=>`sp${L}`).join(","),style:n.edited.hybridization?{color:"blue"}:{},onSave:L=>x(L,"hybridization")}):""})),y]})}const HE=N`
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
`;function zE({correlationsData:e,filteredCorrelationsData:t,additionalColumnData:n,editEquivalencesSaveHandler:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,showProtonsAsRows:r,spectraData:l}){const a=c.exports.useMemo(()=>t?t.values.filter(p=>r?p.atomType==="H":p.atomType!=="H").map(p=>d($E,{additionalColumnData:n,correlations:e.values,correlation:p,styleRow:{backgroundColor:"mintcream"},styleLabel:p.atomType==="H"?{color:Ld(e,p)}:{},onSaveEditEquivalences:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,spectraData:l},`correlation${p.atomType}${p.id}`)):[],[t,r,n,e,o,s,i,l]),u=c.exports.useMemo(()=>n.map(p=>d(LE,{spectraData:l,correlationsData:e,correlation:p,onEdit:i},`additionalCorrelationHeader_${p.id}`)),[n,e,i,l]);return d("div",{css:HE,children:w("table",{children:[d("thead",{children:w("tr",{children:[d("th",{children:"Atom"}),d("th",{children:"\u03B4 (ppm)"}),d("th",{children:"Equiv"}),d("th",{children:"#H"}),d("th",{style:{borderRight:"1px solid"},children:"Hybrid"}),u]})}),d("tbody",{children:a})]})})}const VE=N`
  display: flex;
  width: 100%;
  font-size: 15px;
  font-weight: 300;
  white-space: nowrap;
  span {
    margin-left: 8px;
  }
`;function jE({correlationsData:e}){if(!e)return null;const t=fh(e.options.mf),n=Object.keys(t).length>0?Object.keys(t).map((o,s)=>{const i=e.state[o],r=i?i.error:void 0,l=r?ox.findIndex(a=>r[a]!==void 0):"black";return d("span",{style:{color:i?i.complete===!0&&(!r||Object.keys(r).length===0)?"green":l>=0?yi[l].color:"black":"black"},children:`${o}: ${i?i.current:"-"}/${t[o]}   `},`molFormulaView_${s}`)}):d("p",{style:{fontStyle:"italic",color:"orange"},children:"Molecular formula is not set"});return d("div",{css:VE,children:n})}var BE=c.exports.memo(jE);const XE=N`
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
`;function YE({onSave:e=()=>null,previousMF:t}){const[n,o]=c.exports.useState(""),[s,i]=c.exports.useState(!0),[r,l]=c.exports.useState(!1),a=c.exports.useCallback(h=>{if(h.trim().length===0)return!1;try{return Ga(h),!0}catch{return!1}},[]),u=c.exports.useCallback(h=>{l(!0),a(h.target.value)?(i(!0),o(h.target.value)):(i(!1),o(""))},[a]),p=c.exports.useCallback(()=>{e(r?n.trim():t)},[r,n,e,t]);return w("div",{css:XE,children:[d("input",{type:"text",onChange:u,defaultValue:t}),d("button",{type:"button",onClick:p,disabled:!s,children:s?"Set":"Invalid"})]})}const GE=N`
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
`;function WE({onClose:e,onSave:t,molecules:n,previousMF:o}){const[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{n&&n.length>0&&i(0)},[n]);const r=c.exports.useCallback(u=>{t==null||t(u),e==null||e()},[e,t]),l=c.exports.useCallback(()=>{t==null||t(n[s].mf),e==null||e()},[s,n,e,t]),a=c.exports.useCallback(u=>{i(u)},[]);return w("div",{css:GE,children:[d("div",{className:"header handle",children:d(me,{onClick:e})}),d("div",{children:d("p",{className:"info",children:"Please type in a molecular formula!"})}),d(YE,{onSave:r,previousMF:o}),w("div",{children:[d("p",{className:"optional",children:"OR"}),d("p",{className:"optional2",children:"Select a molecule as reference!"})]}),d(Ad,{molecules:n,onChange:a}),d("button",{type:"button",onClick:l,children:"Set"})]})}const ZE=N`
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
`;function UE({onClose:e,onSave:t,previousTolerance:n}){const[o,s]=c.exports.useState(),[i,r]=c.exports.useState({});c.exports.useEffect(()=>{if(n){s(n);const p={};Object.keys(n).forEach(h=>{p[h]=!0}),r(p)}else s(void 0)},[n]);const l=c.exports.useCallback(()=>{t==null||t(o),e==null||e()},[e,t,o]),a=c.exports.useCallback((p,h)=>{const m=p.target.value;m.trim().length>0?(s(S(b({},o),{[h]:Number(m)})),r(S(b({},i),{[h]:!0}))):r(S(b({},i),{[h]:!1}))},[i,o]),u=c.exports.useMemo(()=>o?Object.keys(o).map(p=>w("tr",{children:[d("td",{children:p}),d("td",{children:d("input",{type:"number",onChange:h=>a(h,p),defaultValue:o[p],style:i[p]?{}:{backgroundColor:"orange"}})})]},`tolerance_${p}`)):void 0,[i,a,o]);return w("div",{css:ZE,children:[w("div",{className:"header handle",children:[d("span",{children:"Set Shift Tolerances"}),d(me,{onClick:e})]}),w("table",{children:[d("thead",{children:w("tr",{children:[d("th",{children:"Atom"}),d("th",{children:"Value"})]})}),d("tbody",{children:u})]}),d("button",{type:"button",onClick:l,disabled:Object.keys(i).some(p=>!i[p]),children:"Set"})]})}const KE=N`
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
`;function qE(){const{molecules:e,correlations:t,data:n,xDomain:o,yDomain:s,displayerMode:i,activeTab:r}=$(),l=Y(),a=fe(),u=je(),[p,h]=c.exports.useState([]),[m,g]=c.exports.useState("H"),[x,y]=c.exports.useState(!1),[k,v]=c.exports.useState(!1),C=c.exports.useMemo(()=>{const z=j=>{if(j.pseudo===!0)return!1;const K=r.split(",").map(st=>Fd(st)),ne=1e4,_e=o[0]*ne,mt=o[1]*ne,qt=s[0]*ne,Jt=s[1]*ne;if(i===B.DM_1D){const st=j.link.find(en=>Re(en)===1);if(!st)return!1;let Qt=ql(st);if(Qt===void 0)return!1;if(Qt*=ne,Pe(n,st.experimentID,!0)&&K[0]===j.atomType&&Qt>=_e&&Qt<=mt||j.link.some(en=>{const Bd=Pe(n,en.experimentID,!0);return Od(Bd,en,ne,_e,mt)}))return!0}else if(i===B.DM_2D){if(!K.includes(j.atomType))return!1;const st=j.link.find(In=>Re(In)===2);if(!st)return!1;const Qt=Pe(n,st.experimentID,!0);if(Go(Qt,st,ne,_e,mt,qt,Jt))return!0;if(j.link.some(In=>{const en=Pe(n,In.experimentID,!0);return Go(en,In,ne,_e,mt,qt,Jt)}))return!0}return!1};if(t){const j=k?t.values.filter(K=>z(K)):t.values;return S(b({},t),{values:j})}},[r,t,i,k,n,o,s]),E=c.exports.useCallback(z=>{l({type:vc,payload:{mf:z}})},[l]),T=c.exports.useCallback(z=>{l({type:Cc,payload:{tolerance:z}})},[l]),M=c.exports.useCallback(()=>{a.show(d(WE,{onClose:()=>a.close(),onSave:E,molecules:e,previousMF:t.options.mf}))},[t,E,a,e]),D=c.exports.useCallback(()=>{a.show(d(UE,{onClose:()=>a.close(),onSave:T,previousTolerance:t.options.tolerance}))},[t,T,a]),I=c.exports.useMemo(()=>["H","H-H"].concat(t?t.values.map(j=>j.atomType).filter((j,K,ne)=>j!=="H"&&ne.indexOf(j)===K):[]).map(j=>({key:j,label:j,value:j})),[t]);c.exports.useEffect(()=>{const z=m.split("-")[0];h(C?C.values.filter(j=>j.atomType===z).reverse():[])},[C,m]);const A=c.exports.useCallback((z,j)=>{l({type:Ws,payload:{id:z.id,correlation:S(b({},z),{equivalence:j,edited:S(b({},z.edited),{equivalence:j!==1})})}})},[l]),P=c.exports.useCallback(({correlation:z,values:j,key:K})=>{l({type:Ws,payload:{id:z.id,correlation:S(b({},z),{[K]:j,edited:S(b({},z.edited),{[K]:!0})}),options:{skipDataUpdate:!0}}})},[l]),R=c.exports.useCallback((z,j)=>{l({type:bc,payload:{correlations:z,options:j}})},[l]),O=c.exports.useCallback(z=>{l({type:yc,payload:{correlation:z,assignmentData:u}})},[u,l]),L=c.exports.useCallback(z=>{const j=Re(z);if(j===1){const K=Pe(n,z.experimentID,!1),ne=vi(K,z.signal.id),_e=ec(K,z.signal.id);l({type:Fc,payload:{spectrum:K,range:ne,signal:_e,assignmentData:u}})}else if(j===2){const K=Pe(n,z.experimentID,!1),ne=_o(K,z.signal.id),_e=Xn(K,z.signal.id);l({type:Wc,payload:{spectrum:K,zone:ne,signal:_e,assignmentData:u}})}},[u,l,n]),H=c.exports.useCallback(z=>{var K;if(Re(z)===2){const ne=Pe(n,z.experimentID,!1),_e=_o(ne,z.signal.id),mt=Xn(ne,z.signal.id);l({type:Zc,payload:{spectrum:ne,zone:_e,signal:mt,pathLength:(K=z.signal.j)==null?void 0:K.pathLength}})}},[l,n]),X=c.exports.useCallback((z,j,K,ne)=>{j==="add"||j==="move"||j==="remove"||j==="unmove"||j==="setPathLength"?(K&&K.pseudo===!1&&(j==="remove"?L(K):j==="setPathLength"&&H(K)),R(z,ne)):j==="removeAll"&&O(z[0])},[H,O,L,R]),J=c.exports.useCallback(()=>{v(!k)},[k]);return w("div",{css:KE,children:[w(ot,{canDelete:!1,counter:t?t.values.length:0,onFilter:J,filterToolTip:k?"Show all correlations":"Hide correlations out of view",filterIsActive:k,counterFiltered:C==null?void 0:C.values.length,children:[d(Ee,{title:`Set molecular formula (${t.options.mf})`,popupPlacement:"right",children:d("button",{type:"button",onClick:M,children:d(mh,{})})}),d(Ee,{title:"Set shift tolerance",popupPlacement:"right",children:d("button",{type:"button",onClick:D,children:d(gh,{})})}),w("div",{className:"extra-header-content",children:[d("div",{className:"overview-container",children:d(BE,{correlationsData:t})}),d("div",{className:"table-view-selection",children:w("span",{children:[d("label",{children:"View:"}),d(Ne,{onChange:z=>{g(z),y(z==="H-H")},data:I,defaultValue:m,style:{fontSize:"12px",width:"70px",height:"18px",border:"1px solid grey"}})]})})]})]}),d(zE,{correlationsData:t,filteredCorrelationsData:C,additionalColumnData:p,editEquivalencesSaveHandler:A,onSaveEditNumericValues:P,onEditCorrelationTableCellHandler:X,showProtonsAsRows:x,spectraData:n})]})}var JE=c.exports.memo(qE);const Ms={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},QE=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function e2({nucleus:e,innerRef:t}){const n=le(),o=re(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,p)=>(u[p]=Zv,u),{}),a=ht(o.current,"formatting.panels.zones");s.current.setValues(a||l)}},[e,o]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{o.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"zones",value:l}}),n.success("zones preferences saved successfully")},[n,o]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Ms.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>_("div",{style:Ms.groupContainer,children:[f(Le,{style:Ms.header,value:l}),QE.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id))]},l))})})}const t2=c.exports.memo(e2);function n2(e,t){const n=ys();return f(t2,{innerRef:t,nucleus:n})}var o2=c.exports.forwardRef(n2);const s2=N`
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
`;function i2({signalIndex:e}){var o,s,i,r,l,a,u,p,h,m,g,x,y,k,v,C,E,T;const{errors:t,values:n}=he();return w("div",{css:s2,children:[d("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[d(qs,{name:`signals[${e}].j.pathLength.from`,defaultValue:((s=(o=n.signals[e].j)==null?void 0:o.pathLength)==null?void 0:s.from)||((i=ve[n.experimentType])==null?void 0:i.from)||1,label:"Min: ",style:{input:{color:(a=(l=(r=t.signals)==null?void 0:r[e].j)==null?void 0:l.pathLength)!=null&&a.from?"red":"black"}},min:1,max:((p=(u=n.signals[e].j)==null?void 0:u.pathLength)==null?void 0:p.to)||((h=ve[n.experimentType])==null?void 0:h.to),pattern:"[1-9]+"}),d(qs,{name:`signals[${e}].j.pathLength.to`,defaultValue:((g=(m=n.signals[e].j)==null?void 0:m.pathLength)==null?void 0:g.to)||((x=ve[n.experimentType])==null?void 0:x.to)||1,label:"Max: ",style:{input:{color:(v=(k=(y=t.signals)==null?void 0:y[e].j)==null?void 0:k.pathLength)!=null&&v.to?"red":"black"}},min:((E=(C=n.signals[e].j)==null?void 0:C.pathLength)==null?void 0:E.from)||((T=ve[n.experimentType])==null?void 0:T.from)||1,pattern:"[1-9]+"})]})]})}function r2({signalIndex:e}){return f(i2,{signalIndex:e})}const l2=N`
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
`,a2=N`
  color: red;
`,c2=N`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function u2(){const{values:e,setFieldValue:t,errors:n}=he(),o=c.exports.useCallback(l=>!!((n==null?void 0:n.signals)&&(n==null?void 0:n.signals[l])),[n]),s=c.exports.useMemo(()=>e.signals.length>0?e.signals.map((a,u)=>d(Me,{tabid:`${u}`,tabstyles:o(u)?a2:c2,render:()=>w("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"11px"},children:[w("span",{children:["\u{1D6C5}",d("sub",{children:a.x.nucleus}),": ",a.x.delta.toFixed(2)]}),w("span",{children:["\u{1D6C5}",d("sub",{children:a.y.nucleus}),": ",a.y.delta.toFixed(2)]})]}),children:d(r2,{signalIndex:u})},`signalForm_zone${u}`)):[],[o,e.signals]),i=c.exports.useCallback(({tabid:l})=>{t("activeTab",l)},[t]),r=c.exports.useCallback(({tabid:l})=>{const a=e.signals.filter((u,p)=>p!==Number(l));t("signals",a)},[t,e.signals]);return w("div",{children:[d("div",{css:l2}),d(Tn,{activeTab:e.activeTab,onClick:i,onDelete:r,children:s})]})}const d2=()=>c.exports.useMemo(()=>ee().shape({signals:Os().of(ee().shape({j:ee().shape({pathLength:ee().shape({from:ae().required().positive().integer(),to:ae().required().positive().integer()})})})).min(1,"There must be at least one signal in a zone!")}),[]),p2=N`
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
`;function h2({onSaveEditZoneModal:e=()=>null,onCloseEditZoneModal:t=()=>null,onZoomEditZoneModal:n=()=>null,rowData:o}){const s=c.exports.useRef(null),i=d2(),r=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{r()},[r]);const l=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(p=>{(async()=>{const h=S(b({},o),{signals:p.signals.map(m=>{var g,x;return _d((g=m.j)==null?void 0:g.pathLength,o.tableMetaInfo.experiment)&&((x=m.j)==null||delete x.pathLength,m.j&&Object.keys(m.j).length===0&&delete m.j),m})});await e(h),l()})()},[l,e,o]),u=c.exports.useMemo(()=>({activeTab:"0",signals:o.signals.map(p=>{var h,m;return S(b({},p),{j:b({pathLength:{from:((h=ve[o.tableMetaInfo.experiment])==null?void 0:h.from)||1,to:((m=ve[o.tableMetaInfo.experiment])==null?void 0:m.to)||1}},p.j)})})}),[o.signals,o.tableMetaInfo.experiment]);return d("div",{css:p2,children:w(ce,{ref:s,initialValues:u,validationSchema:i,onSubmit:a,children:[w("div",{className:"header handle",children:[d(de,{onClick:r,className:"zoom-button",children:d(qn,{title:"Set to default view on range in spectrum"})}),d("span",{children:"Zone and Signal edition"}),d(tr,{onClick:()=>s.current.submitForm(),popupTitle:"Save and exit"}),d(me,{onClick:l})]}),d(u2,{})]})})}const f2={marginLeft:2,marginRight:2,border:"none",height:"20px"};function m2({rowData:e,rowSpanTags:t}){const n=Y(),o=je(),s=fe(),i=c.exports.useCallback(p=>{n({type:cu,payload:{rowData:e,value:p}})},[n,e]),r=c.exports.useCallback(()=>{n({type:ps,payload:{id:e.id,assignmentData:o}})},[o,n,e]),l=c.exports.useCallback(()=>{const p=Math.abs(e.x.from-e.x.to)*10;n({type:ls,xDomain:e.x.from<=e.x.to?[e.x.from-p,e.x.to+p]:[e.x.to-p,e.x.from+p]});const h=Math.abs(e.y.from-e.y.to)*10;n({type:Ai,yDomain:e.y.from<=e.y.to?[e.y.from-h,e.y.to+h]:[e.y.to-h,e.y.from+h]})},[n,e.x.from,e.x.to,e.y.from,e.y.to]),a=c.exports.useCallback(p=>{n({type:uu,payload:{editedRowData:p}})},[n]),u=c.exports.useCallback(()=>{n({type:lo,payload:{selectedTool:F.editRange.id,tempRange:e}}),s.show(f(h2,{onCloseEditZoneModal:()=>s.close(),onSaveEditZoneModal:a,onZoomEditZoneModal:()=>l(),rowData:e}),{position:te.MIDDLE_RIGHT,transition:Qe.SCALE,isBackgroundBlur:!1})},[n,s,e,a,l]);return _(c.exports.Fragment,{children:[f("td",{children:f(Ne,{onChange:p=>{i(p)},data:ri,defaultValue:e.tableMetaInfo.signal.kind,style:f2})}),_("td",S(b({},t),{children:[f("button",{type:"button",className:"delete-button",onClick:r,children:f(wt,{})}),f("button",{type:"button",className:"zoom-button",onClick:l,children:f(qn,{title:"Zoom to zone in spectrum"})}),f("button",{type:"button",className:"edit-button",onClick:u,children:f(Wl,{color:"blue"})})]}))]})}function fl({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:r,showUnlinkButton:l,setShowUnlinkButton:a}){return f("td",S(b({},o),{onClick:u=>s(u,t,r),style:n.isActive||t.isActive&&t.activeAxis===r?{color:"red",fontWeight:"bold"}:void 0,children:V(e,`tableMetaInfo.signal.${r}.diaIDs`,[]).length>0?_("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e.tableMetaInfo.signal[r].diaIDs.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:l?"visible":"hidden",padding:0,margin:0},onClick:u=>i(u,!1,r),children:f(Qo,{color:"red"})})})]}):t.isActive&&t.activeAxis===r?"0":""}))}function g2({rowData:e,assignmentSignal:t,onHoverSignalX:n,onHoverSignalY:o,showUnlinkButtonSignalX:s,showUnlinkButtonSignalY:i,setShowUnlinkButtonSignalX:r,setShowUnlinkButtonSignalY:l,onClick:a,onUnlink:u,highlightSignalX:p,highlightSignalY:h}){return _(c.exports.Fragment,{children:[f(fl,{rowData:e,assignment:t,highlight:p,onHover:n,onClick:a,onUnlink:u,axis:"x",showUnlinkButton:s,setShowUnlinkButton:r}),f(fl,{rowData:e,assignment:t,highlight:h,onHover:o,onClick:a,onUnlink:u,axis:"y",showUnlinkButton:i,setShowUnlinkButton:l})]})}function x2({rowData:e,onHoverSignalX:t,onHoverSignalY:n}){const o=Y(),s=V(e,"tableMetaInfo.signal.x.delta",null),i=V(e,"tableMetaInfo.signal.y.delta",null),r=V(e,"tableMetaInfo.signal.id",void 0),l=c.exports.useCallback(u=>{const p=u.target.value;o({type:Zs,payload:{zoneID:e.id,signal:{id:r,x:p}}})},[o,r,e.id]),a=c.exports.useCallback(u=>{const p=u.target.value;o({type:Zs,payload:{zoneID:e.id,signal:{id:r,y:p}}})},[o,r,e.id]);return _(c.exports.Fragment,{children:[f("td",S(b({},t),{children:s!==null?f(lt,{value:s.toFixed(2),onSave:l,type:"number",style:{padding:"0.1rem 0.4rem"}}):""})),f("td",S(b({},n),{children:i!==null?f(lt,{value:i.toFixed(2),onSave:a,type:"number",style:{padding:"0.1rem 0.4rem"}}):""}))]})}function ml({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:r,showUnlinkButton:l,setShowUnlinkButton:a,rowSpanTags:u}){return f("td",S(b(b({},u),o),{onClick:p=>s(p,t,r),children:V(e,`${r}.nbAtoms`,0)>0?V(e,`${r}.diaIDs`,0).length>0?_("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e[r].nbAtoms," ","(",f("span",{style:t.isActive&&t.activeAxis===r||t.isOnHover&&t.onHoverAxis===r||n.isActive?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"},children:V(e,`${r}.diaIDs`,[]).length}),")"," ",f("sup",{children:f("button",{type:"button",style:{visibility:l?"visible":"hidden",padding:0,margin:0},onClick:p=>i(p,!0,r),children:f(Qo,{color:"red"})})})]}):t.isActive&&t.activeAxis===r?_("div",{children:[`${V(e,`${r}.nbAtoms`,"")} (`,f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):e[r].nbAtoms:t.isActive&&t.activeAxis===r?_("div",{children:["0 (",f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):""}))}function b2({rowData:e,assignmentZone:t,onHoverZoneX:n,onHoverZoneY:o,showUnlinkButtonZoneX:s,showUnlinkButtonZoneY:i,setShowUnlinkButtonZoneX:r,setShowUnlinkButtonZoneY:l,rowSpanTags:a,onClick:u,onUnlink:p,highlightZoneX:h,highlightZoneY:m}){return _(c.exports.Fragment,{children:[f(ml,{rowData:e,assignment:t,highlight:h,onHover:n,onClick:u,onUnlink:p,axis:"x",showUnlinkButton:s,setShowUnlinkButton:r,rowSpanTags:a}),f(ml,{rowData:e,assignment:t,highlight:m,onHover:o,onClick:u,onUnlink:p,axis:"y",showUnlinkButton:i,setShowUnlinkButton:l,rowSpanTags:a})]})}const y2={backgroundColor:"#ff6f0057"},v2={backgroundColor:"#f5f5dc"};function C2({rowData:e,onUnlink:t,onContextMenu:n,rowIndex:o}){const s=ut(e.id),i=ie([s.id]),r=ie([ke(s.id,"X")].concat(s.assigned.x||[])),l=ie([ke(s.id,"Y")].concat(s.assigned.y||[])),a=ut(e.tableMetaInfo.id),u=ie([ke(a.id,"X")].concat(a.assigned.x||[],ke(a.id,"Crosshair"))),p=ie([ke(a.id,"Y")].concat(a.assigned.y||[],ke(a.id,"Crosshair"))),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),[y,k]=c.exports.useState(!1),[v,C]=c.exports.useState(!1),E=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:V(e,"tableMetaInfo.hide",!1)===!0?{display:"none"}:null}),[e]),T=c.exports.useCallback((R,O,L)=>{R&&R.stopPropagation(),t(e,O,e.tableMetaInfo.signalIndex,L),L==="x"?O!==void 0?O?(m(!1),s.removeAll("x")):(k(!1),a.removeAll("x")):(m(!1),k(!1)):L==="y"?O!==void 0?O?(x(!1),s.removeAll("y")):(C(!1),a.removeAll("y")):(x(!1),C(!1)):(m(!1),s.removeAll("x"),k(!1),a.removeAll("x"),x(!1),s.removeAll("y"),C(!1),a.removeAll("y"))},[a,s,t,e]),M=c.exports.useCallback((R,O,L)=>{R.stopPropagation(),O.onClick(L)},[]),D=c.exports.useMemo(()=>({onMouseEnter:()=>{s.onMouseEnter("x"),r.show()},onMouseLeave:()=>{s.onMouseLeave("x"),r.hide()}}),[s,r]),I=c.exports.useMemo(()=>({onMouseEnter:()=>{s.onMouseEnter("y"),l.show()},onMouseLeave:()=>{s.onMouseLeave("y"),l.hide()}}),[s,l]),A=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("x"),u.show()},onMouseLeave:()=>{a.onMouseLeave("x"),u.hide()}}),[a,u]),P=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("y"),p.show()},onMouseLeave:()=>{a.onMouseLeave("y"),p.hide()}}),[a,p]);return w("tr",S(b({onContextMenu:R=>n(R,e),style:i.isActive||s.isActive?y2:V(e,"tableMetaInfo.isConstantlyHighlighted",!1)===!0?v2:null},i.onHover),{children:[d("td",S(b({},E),{children:o+1})),d(x2,{rowData:e,onHoverSignalX:A,onHoverSignalY:P}),d(g2,{rowData:e,assignmentSignal:a,onHoverSignalX:A,onHoverSignalY:P,showUnlinkButtonSignalX:y,showUnlinkButtonSignalY:v,setShowUnlinkButtonSignalX:R=>k(R),setShowUnlinkButtonSignalY:R=>C(R),onClick:M,onUnlink:T,highlightSignalX:u,highlightSignalY:p}),d(b2,{rowData:e,assignmentZone:s,onHoverZoneX:D,onHoverZoneY:I,showUnlinkButtonZoneX:h,showUnlinkButtonZoneY:g,setShowUnlinkButtonZoneX:R=>m(R),setShowUnlinkButtonZoneY:R=>x(R),rowSpanTags:E,onClick:M,onUnlink:T,highlightZoneX:r,highlightZoneY:l}),d(m2,{rowData:e,rowSpanTags:E})]}))}const k2=N`
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
`;function S2({tableData:e,onUnlink:t,context:n,nuclei:o,experiment:s}){const i=c.exports.useRef(null),r=c.exports.useCallback((m,g)=>{Xt(m)||(m.preventDefault(),i.current.handleContextMenu(m,g))},[i]),l=c.exports.useMemo(()=>{const m=[];return e.forEach((g,x)=>{g.signals.length===1?m.push(S(b({},g),{tableMetaInfo:S(b({},g.tableMetaInfo),{signal:g.signals[0],rowIndex:x,signalIndex:0,id:g.signals[0].id,experiment:s,nuclei:o})})):g.signals.length>1&&g.signals.forEach((y,k)=>{let v=!1,C=null;k<g.signals.length-1&&k===0?C=g.signals.length:v=!0,m.push(S(b({},g),{tableMetaInfo:S(b({},g.tableMetaInfo),{signal:y,rowSpan:C,hide:v,rowIndex:x,signalIndex:k,id:y.id,experiment:s})}))})}),m},[s,o,e]),{items:a,isSortedDesc:u,onSort:p}=Md(l),h=c.exports.useMemo(()=>a.map((m,g)=>d(C2,{rowIndex:g,rowData:m,onUnlink:t,onContextMenu:(x,y)=>r(x,y)},`${m.tableMetaInfo.id}`)),[r,a,t]);return w("div",{children:[w("table",{css:k2,children:[w("thead",{children:[w("tr",{children:[d("th",{rowSpan:2,children:"#"}),d("th",{colSpan:2,children:"\u03B4 (ppm)"}),d("th",{colSpan:2,children:d(Zl,{})}),d("th",{colSpan:2,children:"\u03A3"}),d("th",{rowSpan:2,children:"Kind"}),d("th",{rowSpan:2,children:""})]}),w("tr",{children:[d("th",S(b({id:"tableMetaInfo.signal.x.delta"},p),{children:w(tn,{text:"F2",children:[o[0]," ",u("tableMetaInfo.signal.x.delta").content]})})),d("th",S(b({id:"tableMetaInfo.signal.y.delta"},p),{children:w(tn,{text:"F1",children:[o[1]," ",u("tableMetaInfo.signal.y.delta").content]})})),d("th",{children:d(tn,{text:"F2",children:o[0]})}),d("th",{children:d(tn,{text:"F1",children:o[1]})}),d("th",{children:d(tn,{text:"F2",children:o[0]})}),d("th",{children:d(tn,{text:"F1",children:o[1]})})]})]}),d("tbody",{children:h})]}),d(Ut,{ref:i,context:n})]})}function tn(e){return w(Ve,{children:[d("div",{style:{position:"absolute",fontSize:8,color:"#3539E6"},children:e.text}),d("div",{style:{marginLeft:5},children:e.children})]})}const w2=N`
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
`;function E2({zones:e,activeTab:t,xDomain:n,yDomain:o,experiment:s}){const[i,r]=c.exports.useState(!1),l=je(),a=Y(),u=fe(),[p,h]=c.exports.useState(!1),m=c.exports.useRef(),g=c.exports.useMemo(()=>{const D=(A,P,R,O)=>(A=A*1e4,P=P*1e4,R=R*1e4,O=O*1e4,(P>=n[0]*1e4&&A<=n[1]*1e4||A<=n[0]*1e4&&P>=n[1]*1e4)&&(O>=o[0]*1e4&&R<=o[1]*1e4||R<=o[0]*1e4&&O>=o[1]*1e4)),I=A=>A.filter(P=>D(P.x.from,P.x.to,P.y.from,P.y.to));if(e.values)return(i?I(e.values):e.values).map(P=>S(b({},P),{tableMetaInfo:{isConstantlyHighlighted:D(P.x.from,P.x.to,P.y.from,P.y.to)}}))},[e,i,n,o]),x=c.exports.useCallback(()=>{r(!i)},[i]),y=c.exports.useCallback((D=null,I=void 0,A=-1,P=void 0)=>{a({type:du,payload:{zoneData:D,assignmentData:l,isOnZoneLevel:I,signalIndex:A,axis:P}})},[l,a]),k=c.exports.useCallback(()=>{y()},[y]),v=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:k},{text:"No"}]})},[k,u]),C=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All zones will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{a({type:ps,payload:{assignmentData:l}})}},{text:"No"}]})},[l,a,u]),E=c.exports.useCallback(()=>{h(!p)},[p]),T=c.exports.useCallback(()=>{m.current.saveSetting(),h(!1)},[]),M=c.exports.useCallback(D=>{pe.emit("onZonesVisibilityChange",{key:D})},[]);return d(Ve,{children:w("div",{css:[It,w2,p&&N`
              th {
                position: relative;
              }
            `],children:[!p&&w(ot,{counter:e.values?e.values.length:0,onDelete:C,deleteToolTip:"Delete All Zones",onFilter:x,filterToolTip:i?"Show all zones":"Hide zones out of view",filterIsActive:i,counterFiltered:g==null?void 0:g.length,showSettingButton:!0,onSettingClick:E,children:[d(Ee,{title:"Remove all Assignments",popupPlacement:"right",children:d("button",{className:"remove-assignments-btn",type:"button",onClick:v,disabled:!e.values||e.values.length===0,children:d(Yl,{})})}),d(Ge,{popupTitle:"show/hide zones",popupPlacement:"right",defaultValue:!0,onClick:()=>M("zones"),children:d("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"z"})}),d(Ge,{popupTitle:"show/hide signals",popupPlacement:"right",defaultValue:!0,onClick:()=>M("signals"),children:d("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"s"})}),d(Ge,{popupTitle:"show/hide peaks",popupPlacement:"right",defaultValue:!0,onClick:()=>M("peaks"),children:d("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"p"})})]}),p&&d(Dn,{onSave:T,onClose:E}),d("div",{className:"inner-container",children:p?d(o2,{ref:m}):d("div",{className:"table-container",children:g&&g.length>0?d(S2,{tableData:g,onUnlink:y,nuclei:t&&t.split(",").length===2?t.split(","):["?","?"],experiment:s}):d(Kt,{})})})]})})}const A2=c.exports.memo(E2),T2={zones:{},info:{}};function D2(){const{displayerKey:e,xDomain:t,yDomain:n,activeTab:o}=$(),{zones:s,info:i}=Ce(T2);return d(A2,{xDomain:t,yDomain:n,activeTab:o,displayerKey:e,zones:s,experiment:i.experiment})}const Zo={data:{solvent:{description:"Solvent database",value:R2([...xh,...bh])}}};function gl(e,t){const o=(Zo.data[e]?Zo.data[e].value:[]).filter(r=>r.nucleus===t);return{data:o,getSolvents:()=>I2(o),search:(r=[])=>yh(o,{keywords:r})}}function I2(e){const t=[],n=new Map;for(const o of e)n.has(o.solvent)||(n.set(o.solvent,!0),t.push(o.solvent));return t}function P2(){return Object.keys(Zo.data).map(e=>{const{description:t}=Zo.data[e];return{id:e,name:t}})}function R2(e){return e.map(t=>(t.ranges=t.ranges.map(n=>b({id:U()},n)),t),[])}function M2(e){const t=[];let n=0;for(const r of e){let l=[];const o=r,{ranges:a}=o,u=G(o,["ranges"]);for(const p of a){l.push(p.id||U());const s=p,{signals:h=[]}=s,m=G(s,["signals"]);for(const g of h){const i=g,{js:x=[]}=i,y=G(i,["js"]),k=N2(x),v=S(b(b(b(b({},u),m),y),k),{index:n,id:l,ranges:a});t.push(v)}}n++}return t}function N2(e){if(e&&e.length>0){const{coupling:t,multiplicity:n}=e.reduce((o,{coupling:s,multiplicity:i})=>(o.coupling.push(s.toFixed(1)),o.multiplicity+=i,o),{coupling:[],multiplicity:""});return{multiplicity:n,coupling:t.join(",")}}else return{multiplicity:"s",coupling:""}}const xl={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputContainer:{flex:4,borderRadius:"5px"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"100px"}};function _2(e,t){const n=re(),o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{const l=ht(n.current,"formatting.panels.database");s.current.setValues(l||hd)},[n]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{n.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"database",value:l}}),o.success("database preferences saved successfully")},[o,n]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:xl.container,children:f(ce,{onSubmit:r,ref:s,children:_("div",{style:xl.groupContainer,children:[f(Fe,{label:"Smiles",checkControllerName:"showSmiles",hideFormat:!0}),f(Fe,{label:"Solvent",checkControllerName:"showSolvent",hideFormat:!0}),f(Fe,{label:"Names",checkControllerName:"showNames",hideFormat:!0}),f(Fe,{label:"Range",checkControllerName:"showRange",hideFormat:!0}),f(Fe,{label:"\u03B4 (ppm)",checkControllerName:"showDelta",hideFormat:!0}),f(Fe,{label:"Assignment",checkControllerName:"showAssignment",hideFormat:!0}),f(Fe,{label:"J (Hz)",checkControllerName:"showCoupling",hideFormat:!0}),f(Fe,{label:"Multiplicity",checkControllerName:"showMultiplicity",hideFormat:!0})]})})})}var F2=c.exports.forwardRef(_2);const Ns={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},L2=[{showWhen:"showNames",index:1,Header:"names",accessor:e=>e.names?e.names.join(","):"",enableRowSpan:!0,style:b({width:"100px",minWidth:"100px",maxWidth:"100px"},Ns)},{showWhen:"showRange",index:2,Header:"From - To",accessor:e=>`${e.from.toFixed(2)} - ${e.to.toFixed(2)}`,enableRowSpan:!0},{showWhen:"showDelta",index:3,Header:"\u03B4 (ppm)",accessor:"delta"},{showWhen:"showAssignment",index:4,Header:"Assignment",accessor:"assignment"},{showWhen:"showMultiplicity",index:5,Header:"Multi.",accessor:"multiplicity"},{showWhen:"showCoupling",index:6,Header:"J (Hz)",accessor:"coupling",style:b({width:"60px",minWidth:"60px"},Ns)},{showWhen:"showSolvent",index:7,Header:"Solvent",accessor:"solvent",style:b({width:"80px",minWidth:"80px"},Ns)},{showWhen:"showSmiles",index:8,Header:"Smiles",accessor:"index",enableRowSpan:!0,Cell:({row:e})=>d("div",{className:"smiles-container",style:{width:"100px",display:"block",overflow:"hidden"},children:(e==null?void 0:e.original.smiles)&&d(vh,{height:60,width:60,smiles:e.original.smiles})})}];function O2({data:e,onAdd:t}){const n=re(),o=c.exports.useMemo(()=>[{index:10,Header:"",width:"1%",maxWidth:"24px",minWidth:"24px",id:"add-button",accessor:"index",enableRowSpan:!0,Cell:({row:i})=>d("button",{type:"button",className:"add-button",onClick:()=>t(i),children:d(yn,{})})}],[t]),s=c.exports.useMemo(()=>{const i=ht(n.current,"formatting.panels.database",hd);let r=[...o];for(const a of L2){const l=a,{showWhen:u}=l,p=G(l,["showWhen"]);i[u]&&bs(r,p)}return r.sort((a,u)=>a.index-u.index)},[o,n]);return e&&e.length>0?d(po,{data:e,columns:s,highlightedSource:ue.DATABASE,groupKey:"index",approxItemHeight:30,enableVirtualScroll:!0}):d(Kt,{})}var $2=c.exports.memo(O2);const H2=N`
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
`,bl={solvent:"",searchKeywords:""};function z2({nucleus:e,selectedTool:t}){const n=Y(),{handleChangeOption:o}=vs(),s=Be(e),[i,r]=c.exports.useState(!1),l=c.exports.useRef(),[a,u]=c.exports.useState(bl),p=c.exports.useRef(null),[h,m]=c.exports.useState({data:[],databases:[],solvents:[]}),{item:g}=Ch("Database"),x=c.exports.useCallback(()=>{r(!i)},[i]),y=c.exports.useCallback(()=>{l.current.saveSetting(),r(!1)},[]),k=c.exports.useCallback(D=>{if(typeof D=="string"||D===-1){const I=String(D);u(A=>S(b({},A),{solvent:I}))}else u(I=>S(b({},I),{searchKeywords:D.target.value}))},[]);c.exports.useEffect(()=>{g!=null&&g.isOpen&&setTimeout(()=>{const D=B2(P2());p.current=gl(D[0].key,e);const I=p.current.data,A=yl(p.current.getSolvents());m({data:I,databases:D,solvents:A})})},[g==null?void 0:g.isOpen,e]),c.exports.useEffect(()=>{const{solvent:D,searchKeywords:I}=a;setTimeout(()=>{if(p.current)if(!D&&!I){const A=p.current.data,P=yl(p.current.getSolvents());m(R=>S(b({},R),{data:A,solvents:P}))}else{const A=[...I.split(",")];D!=="-1"&&A.unshift(`solvent:${D}`);const P=p.current.search(A);m(R=>S(b({},R),{data:P}))}})},[a]),c.exports.useEffect(()=>{function D(I){t===F.databaseRangesSelection.id&&u(A=>{const P=A.searchKeywords?A.searchKeywords.split(","):[],[R,O]=I.range,L=[...P,`delta:${s(R)}..${s(O)}`].join(",");return S(b({},A),{searchKeywords:L})})}return pe.on("brushEnd",D),()=>{pe.off("brushEnd",D)}},[s,t]);const v=c.exports.useCallback(D=>{p.current=gl(D,e),u(bl)},[e]),C=c.exports.useMemo(()=>M2(h.data),[h.data]),E=c.exports.useCallback(D=>{const{index:I}=D.original,{ranges:A,solvent:P,names:R=[]}=h.data[I];n({type:Tu,payload:{ranges:A,info:{solvent:P,nucleus:e,name:R[0]}}})},[n,e,h.data]),T=c.exports.useCallback(()=>{u(D=>S(b({},D),{searchKeywords:""}))},[]),M=c.exports.useCallback(D=>{const I=D?F.databaseRangesSelection.id:F.zoom.id;o(I)},[o]);return w("div",{css:[It,H2,i&&N`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!i&&w(ot,{showSettingButton:!0,onSettingClick:x,canDelete:!1,className:"header",children:[d(Ge,{defaultValue:t===F.databaseRangesSelection.id,popupTitle:"Filter by select ranges",popupPlacement:"right",onClick:M,children:d(kh,{style:{pointerEvents:"none",fontSize:"12px",transform:"rotate(90deg)"}})},`${t}`),d(Ne,{style:{flex:2},data:h.databases,onChange:v}),d(Ne,{style:{flex:1},data:h.solvents,onChange:k}),d(St,{value:a.searchKeywords,renderIcon:()=>d(Sh,{}),style:{inputWrapper:{flex:3}},className:"search-input",type:"text",debounceTime:250,placeholder:"Search for parameter...",onChange:k,onClear:T,canClear:!0})]}),i&&d(Dn,{onSave:y,onClose:x}),d("div",{className:"inner-container",children:i?d(F2,{ref:l}):d($2,{data:C,onAdd:E})})]})}const V2=c.exports.memo(z2);function j2(){const{activeTab:e,toolOptions:{selectedTool:t}}=$();return e?d(V2,{nucleus:e,selectedTool:t}):d("div",{})}function yl(e){const t=e.map(n=>({key:n,label:n,value:n}),[]);return t.unshift({key:"-1",label:"All",value:"-1"}),t}function B2(e){return e.map(({id:t,name:n})=>({key:t,value:t,label:n}))}const X2={width:"100%",height:"100%",padding:"0px",display:"flex",flexDirection:"column"};function Y2({children:e,className:t,style:n,testID:o}){return f("div",{className:t,style:b(b({},X2),n),"data-test-id":o,children:e})}var G2=c.exports.memo(Y2);const W2={width:"100%",overflowY:"auto",display:"flex",flexDirection:"column",padding:"5px 0px",color:"gray"};function Z2({children:e,className:t,style:n}){const o=c.exports.useMemo(()=>c.exports.Children.map(e,s=>c.exports.cloneElement(s,{style:b({borderBottom:"0.55px solid #d8d8d8"},s.props.style)})),[e]);return f("div",{className:t,style:b(b({},W2),n),children:o})}var U2=c.exports.memo(Z2);const K2={width:"100%",display:"flex",alignItems:"flex-start"};function q2(e){return e.toLowerCase()==="top"?"flex-start":e.toLowerCase()==="bottom"?"flex-end":"center"}function J2({children:e,className:t,style:n,align:o="center",vAlign:s="center",size:i=1,onClick:r=()=>null}){return f("div",{className:t,style:b(S(b({},K2),{alignItems:q2(s),textAlign:o,flex:i}),n),onClick:r,children:e})}var jn=c.exports.memo(J2);const Q2={width:"100%",display:"flex",padding:"0px 5px",color:"#424242",backgroundColor:"#d8d8d8",borderBottom:"0.55px solid #d8d8d8",fontSize:11,fontWeight:"bold"};function eA({children:e,className:t,style:n}){return f("div",{className:t,style:b(b({},Q2),n),children:e})}var tA=c.exports.memo(eA);const nA={width:"100%",display:"flex",padding:"5px 0px"};function oA({children:e,className:t,style:n,onClick:o=()=>null}){return f("div",{className:t,style:b(b({},nA),n),onClick:o,children:e})}var Hd=c.exports.memo(oA);function sA({filters:e,spectraCounter:t,selectedTool:n,activeFilterID:o}){const s=Y(),i=fe(),r=le(),l=c.exports.useRef({index:null}),a=c.exports.useCallback((g,x)=>{(async()=>{const y=await r.showLoading(`${x?"Enable":"Disable"} filter in progress`);setTimeout(()=>{s({type:wc,id:g,checked:x}),y()},0)})()},[r,s]),u=c.exports.useCallback(({id:g,name:x})=>{const y=[{text:"Yes",handler:async()=>{const k=await r.showLoading("Delete filter process in progress");s({type:Ec,payload:{id:g}}),k()}},{text:"No"}];t>1&&y.unshift({text:"Yes, for all spectra",handler:async()=>{const k=await r.showLoading("Delete all spectra filter process in progress");s({type:Ac,payload:{filterType:x}}),k()}}),i.showConfirmDialog({message:"Are you sure you want to delete the spectrum?",buttons:y})},[r,s,i,t]),p=c.exports.useCallback(g=>{(async()=>{const x=await r.showLoading("Filter snapshot process in progress");setTimeout(()=>{s({type:Kc,id:g}),x()},0)})()},[r,s]),h=c.exports.useCallback((g,x)=>{const{id:y,name:k}=g;o&&o===y?l.current.index=x:o||(l.current.index=null);const v=["filter-row"];return o===y?v.push("filter-active"):n===k?v.push("filter-current"):l.current.index!=null&&x>l.current.index&&v.push("filter-deactive"),v.join(" ")},[o,n]),m=c.exports.useMemo(()=>e==null?void 0:e.map((g,x)=>_(Hd,{className:h(g,x),children:[f(jn,{align:"center",size:2,onClick:()=>p(g.id),children:g.label}),f(jn,{align:"left",size:3,children:f("div",{onClick:y=>y.stopPropagation(),children:f(Jl,{data:g.error?g.error:g.value})})}),_(jn,{align:"center",vAlign:"center",size:1,children:[f(uo,{checked:g.flag,onChange:y=>a(g.id,y.target.checked)}),g.isDeleteAllow&&f("button",{className:"btn",type:"button",onClick:()=>u(g),children:f(wt,{})})]})]},g.id)),[p,e,h,u,a]);return f(et,{children:m})}const iA={filters:[]},rA=c.exports.memo(sA);function lA(){const{toolOptions:{selectedTool:e,data:{activeFilterID:t}}}=$(),{filters:n}=Ce(iA),o=cd().length;return f(rA,{selectedTool:e,filters:n,spectraCounter:o,activeFilterID:t})}const aA=N`
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
`;function cA({filters:e}){return c.exports.useMemo(()=>e?w(G2,{testID:"filters-table",children:[d(tA,{children:w(Hd,{children:[d(jn,{align:"center",size:1,children:"Label"}),d(jn,{align:"center",size:2,children:"Properties"})]})}),d(U2,{css:aA,children:d(lA,{})})]}):d(Kt,{}),[e])}const uA={filters:[]},dA=c.exports.memo(cA);function pA(){const{filters:e}=Ce(uA);return d(dA,{filters:e})}const hA=N`
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

  .input {
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    padding: 5px;
    width: 100px;
    margin-right: 10px;
    height: initial !important;
  }
`,fA=ee().shape({frequency:ae().integer().required().label("Frequency"),"1d":ee({"1H":ee({from:ae().integer().required().label("1H ' From ' "),to:ae().integer().required().label("1H ' To ' ")}),"13C":ee().shape({from:ae().integer().required().label("13C ' From ' "),to:ae().integer().required().label("13C ' To ' ")}),lineWidth:ae().integer().min(1).required().label("Line Width")})});function mA({onPredict:e=()=>null}){const t=c.exports.useRef(),n=c.exports.useCallback(()=>{t.current.submitForm()},[]),o=c.exports.useCallback(s=>{(async()=>e(s))()},[e]);return w("div",{css:hA,children:[d("div",{children:w(ce,{ref:t,initialValues:Ka,validationSchema:fA,onSubmit:o,children:[d(Id,{}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Frequency : "}),d(sn,{data:qa,style:{width:290,height:30,margin:0},name:"frequency"})]}),w("div",{className:"row",children:[d(Le,{value:"1H",className:"custom-label"}),d(Q,{title:"From",children:d(W,{name:"1d.1H.from",type:"number"})}),d(Q,{title:"To",style:{label:{padding:"0 10px"}},children:d(W,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row",children:[d(Le,{value:"13C",className:"custom-label"}),d(Q,{title:"From",children:d(W,{name:"1d.13C.from",type:"number"})}),d(Q,{title:"To",style:{label:{padding:"0 10px"}},children:d(W,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Line Width : "}),d(W,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),d("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]})]})}),d("div",{children:d(de.Done,{onClick:n,children:"Predict spectrum"})})]})}function gA(){const[e,t]=c.exports.useState(),n=c.exports.useCallback(r=>{t(r)},[]),o=Y(),s=le(),i=c.exports.useCallback(r=>{(async()=>{if(e){o({type:Ct,isLoading:!0});const l=await s.showLoading("Predict 1H, 13C, COSY, HSQC, and HMBC in progress");o({type:hs,payload:{mol:e,options:r}}),l()}else s.error("No Molecule selected")})()},[s,o,e]);return f(Pd,{onMoleculeChange:n,actionsOptions:{hidePredict:!0,hideDelete:!0,hideExport:!0},children:f(mA,{onPredict:i})})}const xA=[{title:"Spectra",component:f(AE,{}),hidePreferenceKey:"spectraPanel",mode:null},{title:"Information",component:f(WC,{}),style:{overflow:"hidden"},hidePreferenceKey:"informationPanel",mode:null},{title:"Peaks",component:f(KS,{}),hidePreferenceKey:"peaksPanel",mode:null},{title:"Filters",component:f(pA,{}),hidePreferenceKey:"filtersPanel",mode:null},{title:"Integrals",component:f(Yk,{}),hidePreferenceKey:"integralsPanel",mode:null},{title:"Ranges",component:f(Ww,{}),hidePreferenceKey:"rangesPanel",mode:B.DM_1D},{title:"Multiple Spectra Analysis",component:f(HS,{}),hidePreferenceKey:"multipleSpectraAnalysisPanel",mode:null},{title:"Matrix Generation",component:f(tS,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Zones",component:f(D2,{}),hidePreferenceKey:"zonesPanel",mode:B.DM_2D},{title:"Summary",component:f(JE,{}),hidePreferenceKey:"summaryPanel",mode:null},{title:"Structures",component:f(Pd,{}),hidePreferenceKey:"structuresPanel",mode:null},{title:"Database",component:f(j2,{}),hidePreferenceKey:"databasePanel",mode:null},{title:"Automatic Assignment",component:f(HC,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Prediction",component:f(gA,{}),hidePreferenceKey:"predictionPanel",mode:null}],vl={null:"Spectra",peakPicking:"Peaks",integral:"Integrals",rangesPicking:"Ranges",zone2D:"Zones",multipleSpectraAnalysis:"Multiple Spectra Analysis"};function bA(){const e=re();return c.exports.useCallback(t=>V(e.current,`display.panels.${t.hidePreferenceKey}`),[e])}function yA({displayerMode:e}){const t=bA(),n=kd(),o=c.exports.useCallback(i=>{const r=t(i);return(r==null?void 0:r.hidden)!==!0&&(r==null?void 0:r.display)===!0&&i.isExperimental===void 0&&(i.mode==null||i.mode===e)||i.isExperimental&&n},[e,t,n]),s=c.exports.useCallback(i=>{const r=t(i);return(r==null?void 0:r.hidden)!==!0&&(r==null?void 0:r.open)},[t]);return f("div",{style:{width:"100%",height:"100%",flex:"1 1 0%"},children:f(gr,{children:xA.map(i=>o(i)&&f(gr.Item,{title:i.title,defaultOpened:s(i),children:i.component},i.title))})})}const vA=c.exports.memo(yA);function CA(){const{displayerMode:e,toolOptions:{selectedTool:t}}=$();return f(vA,{displayerMode:e,selectedTool:t})}function vs(){const e=Y(),t=le(),{open:n}=wh(),[o,s]=c.exports.useState(!1),i=c.exports.useRef({clicks:[]}),r=c.exports.useCallback(h=>{[F.peakPicking.id,F.integral.id,F.zone2D.id,F.exclusionZones.id].includes(h)&&t.show("Press Shift + Left Mouse button to select zone"),Object.keys(vl).includes(h)&&n(vl[h]),e({type:lo,payload:{selectedTool:h}})},[t,e,n]),l=c.exports.useCallback(()=>{i.current.clicks.length===0&&e({type:xn,zoomType:Vn.HORIZONTAL});const h=Ko(()=>{i.current.clicks=[]},500);i.current.clicks.push(h),h(),i.current.clicks.length>1&&(Il(i.current.clicks,m=>m.cancel()),i.current.clicks=[],e({type:xn}))},[e,i]),a=c.exports.useCallback(()=>{e({type:Ni})},[e]),u=c.exports.useCallback(()=>{e({type:Ii,isRealSpectrumVisible:!o}),s(!o)},[e,o]),p=c.exports.useCallback(()=>{e({type:Li})},[e]);return{handleChangeOption:r,handleFullZoomOut:l,changeDisplayViewModeHandler:a,changeSpectrumViewHandler:u,alignSpectrumsVerticallyHandler:p,isRealSpectrumShown:o}}function kA(){const{keysPreferences:e,displayerMode:t,overDisplayer:n,data:o,activeSpectrum:s}=$(),i=Y(),r=le(),l=Bi(),{handleChangeOption:a,handleFullZoomOut:u,alignSpectrumsVerticallyHandler:p,changeDisplayViewModeHandler:h}=vs(),{saveToClipboardHandler:m,saveAsJSONHandler:g,saveAsHandler:x}=Cd(),{highlight:y,remove:k}=An(),v=je(),C=c.exports.useMemo(()=>t===B.DM_1D&&o&&o.length>0,[o,t]),E=c.exports.useCallback(async I=>{const{type:A,extra:{id:P}}=I;switch(A){case ue.INTEGRAL:{i({type:as,integralID:P}),k();break}case ue.PEAK:{i({type:rs,data:{id:P}}),k();break}case ue.RANGE:{i({type:ds,payload:{data:{id:P,assignmentData:v}}}),k();break}case ue.ZONE:{i({type:ps,payload:{id:P,assignmentData:v}}),k();break}case ue.EXCLUSION_ZONE:{const R=await r.showLoading("Exclusion filter in progress");i({type:xu,payload:{id:P,spectrumID:I.extra.spectrumID}}),R(),k();break}}},[v,i,k,r]),T=c.exports.useCallback((I,A)=>{o&&o.length>0&&A>=1&&A<=9&&(I.shiftKey?(i({type:Vo,keyCode:A}),r.show(`Configuration Reset, press '${A}' again to reload it.`)):Xt(I)||(e!=null&&e[A]?i({type:$i,keyCode:A}):(i({type:Vo,keyCode:A}),r.show(`Configuration saved, press '${A}' again to reload it.`))))},[r,o,i,e]),M=c.exports.useCallback(I=>{function A(R,O=!0){if(t===B.DM_1D&&!s)throw new Error(`Select a spectrum to proceed with ${R}`);if(O&&t===B.DM_2D)throw new Error(`Switch to 1D Mode and select a spectrum to proceed with ${R}`)}function P(R,O=!0){if(t===B.DM_2D&&!s)throw new Error(`Select a spectrum to proceed with ${R}`);if(O&&t===B.DM_1D)throw new Error(`Switch to 2D Mode and select a spectrum to proceed with ${R}`)}try{if(!I.shiftKey&&!I.metaKey)switch(I.key){case"f":u();break;case"z":case"Escape":a(F.zoom.id);break;case"r":{t===B.DM_2D?(P(F.zone2D.label,!1),a(F.zone2D.id)):(A(F.rangesPicking.label,!1),a(F.rangesPicking.id));break}case"a":{A(F.phaseCorrection.label),a(F.phaseCorrection.id);break}case"b":{A(F.baseLineCorrection.label),a(F.baseLineCorrection.id);break}case"p":{A(F.peakPicking.label),a(F.peakPicking.id);break}case"i":{A(F.integral.label),a(F.integral.id);break}case"e":{A(F.exclusionZones.label),a(F.exclusionZones.id);break}default:}if(!I.shiftKey&&!I.metaKey&&!I.ctrlKey)switch(I.key){case"c":{C&&p();break}case"s":{C&&h();break}default:}if(!I.shiftKey&&(I.metaKey||I.ctrlKey))switch(I.key){case"c":m(),I.preventDefault();break;case"s":g(),I.preventDefault();break;case"o":l(),I.preventDefault();break;default:}if(I.shiftKey&&(I.metaKey||I.ctrlKey))switch(I.key){case"s":case"S":x(),I.preventDefault();break;default:}}catch(R){r.error(R.message)}},[s,r,p,C,h,t,a,u,l,x,g,m]),D=c.exports.useCallback(I=>{if(!["input","textarea"].includes(I.target.localName)&&n){const A=Number(I.code.substr(I.code.length-1))||0;A>0?T(I,A):["Delete","Backspace"].includes(I.key)&&y.sourceData?(I.preventDefault(),E(y.sourceData)):M(I)}},[E,y,T,n,M]);return c.exports.useEffect(()=>(document.addEventListener("keydown",D,!0),()=>document.removeEventListener("keydown",D,!0)),[D]),null}const SA="https://docs.nmrium.org";var wA={version:"git-39eac4bbea6e33e31860716d6eea21a8b58cb4d6"};function EA({width:e=100,height:t=100}){return _("svg",{style:{width:e,height:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 752.34 221.73",children:[f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M.64,31.7A31.67,31.67,0,0,1,54.72,9.29l0,0A31.66,31.66,0,0,1,64,31.7V190a13.39,13.39,0,0,0,26.77,0V54a31.7,31.7,0,0,1,31.7-31.7V40.58A13.38,13.38,0,0,0,109.13,54V190a31.71,31.71,0,0,1-63.41,0V31.7a13.29,13.29,0,0,0-3.88-9.46l0,0A13.41,13.41,0,0,0,19,31.7V164.82H.64Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M154.21,54v68.17a13.34,13.34,0,0,0,3.89,9.47h0A13.39,13.39,0,0,0,181,122.14V99.32h-.06a31.63,31.63,0,0,1,9.29-22.38l0,0a31.65,31.65,0,0,1,44.8,0l0,0a31.58,31.58,0,0,1,9.3,22.39V118H226V99.32a13.3,13.3,0,0,0-3.89-9.46h0a13.44,13.44,0,0,0-18.93,0l0,0a13.3,13.3,0,0,0-3.83,8.19v24.09a31.7,31.7,0,0,1-54.11,22.42v0a31.66,31.66,0,0,1-9.3-22.4V54Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M729.19,96.34c-8.65,0-14.26,3.17-17.67,8-3.41-5.12-8.78-8-16-8-8.16,0-13.52,3.17-16.32,7.31v-5.6H661V159h18.28V124.62c0-7.19,3.41-11.46,9.5-11.46,5.85,0,8.78,3.9,8.78,10V159h18.27V124.62c0-7.19,3.42-11.46,9.51-11.46,5.85,0,8.77,3.9,8.77,10V159h18.28V121.57C752.34,106.33,743.2,96.34,729.19,96.34Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M629.26,98.05v33.26c0,8.66-4.63,12.56-11.33,12.56-5.85,0-10.6-3.54-10.6-11.09V98.05H589.05v37.41c0,16.45,10.48,25.22,22.79,25.22,8,0,14.13-2.92,17.42-7.43V159h18.28V98.05Z"}),f("rect",{fill:"#2b143e",x:"558.22",y:"98.05",width:"18.28",height:"60.93"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M567.36,92.68a11,11,0,1,0-11-11A11.08,11.08,0,0,0,567.36,92.68Z"}),f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M478.77,159H498V116.57L525.66,159H549.2l-22.3-34.75c5.45-2.13,8.12-4.14,11.48-8.86a31.07,31.07,0,0,0,6.07-18.26V94.62c0-10.61-3.45-15.93-9.28-21.78S520.75,63.09,510,63.09H478.71l.06,95.89Zm33.1-50.27h-6.46v-.06H498V82.19h10.87c4.67,0,9.44,1.38,11.94,3.81a12.84,12.84,0,0,1,3.81,9.2C524.58,102.52,518.92,108.71,511.87,108.71Z"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"372.91 60.8 372.91 158.98 392.16 158.98 392.16 119.23 419.91 157.41 447.61 119.23 447.61 158.98 466.87 158.98 466.87 60.8 419.91 125.22 372.91 60.8"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"283.89 61.04 283.89 159.1 303.14 159.1 303.14 105.85 361.01 160.93 361.01 62.83 341.67 62.83 341.67 116.08 283.89 61.04"})]})}const AA=N`
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
`;function TA({onClose:e=()=>null}){return w("div",{css:AA,children:[w("div",{className:"header handle",children:[d("span",{children:"About NMRium"}),d(me,{onClick:e})]}),w("div",{className:"container",children:[w("div",{className:"center-container",children:[d(EA,{width:160,height:50}),"Version ",d(DA,{}),d("span",{className:"separator"}),d("a",{href:"https://git.nmrium.org",target:"_blank",rel:"noreferrer",children:"GitHub ( https://git.nmrium.org )"})]}),d("div",{className:"center-container",children:d("span",{className:"separator"})}),d("span",{className:"content",children:"This project is developed by Zakodium S\xE0rl (Switzerland), the University of Cologne (Germany), Johannes Gutenberg University Mainz (Germany) and Universidad del Valle (Colombia)."}),w("div",{className:"center-container",children:[d("span",{className:"separator"}),d("span",{className:"title",children:"Funding is provided by"}),d("span",{className:"separator"})]}),d("div",{className:"content",children:w("ul",{children:[d("li",{children:"IDNMR grant, which part of the Scientific Library Services and Information Systems (LIS) initiative of the DFG."}),d("li",{children:"Zakodium S\xE0rl (Switzerland)."}),d("li",{children:"Universidad del Valle (Cali, Colombia)."})]})})]})]})}function DA(){const{version:e}=wA;return e==="HEAD"?d(Ve,{children:"HEAD"}):e.startsWith("git-")?w("a",{href:`https://github.com/cheminfo/nmrium/tree/${e.slice(4)}`,target:"_blank",rel:"noreferrer",children:["git-",e.slice(4,14)]}):d("a",{href:`https://github.com/cheminfo/nmrium/tree/${e}`,target:"_blank",rel:"noreferrer",children:e})}function IA(){return _(et,{children:[f("p",{className:"section-header",children:"Spectra"}),f(Q,{title:"Transparency of Dimmed Spectra [ 0 - 1 ]",children:f(W,{name:"controllers.dimmedSpectraTransparency",checkValue:e=>e>=0&&e<=1,type:"number"})})]})}const PA=[{label:"Spectra selection panel",name:"panels.spectraPanel"},{label:"Spectra information Panel",name:"panels.informationPanel"},{label:"Peaks and peak picking",name:"panels.peaksPanel"},{label:"Integration and integrals",name:"panels.integralsPanel"},{label:"1D ranges peak picking",name:"panels.rangesPanel"},{label:"Chemical structure panel",name:"panels.structuresPanel"},{label:"Filters Panel",name:"panels.filtersPanel"},{label:"2D zones peak picking",name:"panels.zonesPanel"},{label:"Assignment summary Panel",name:"panels.summaryPanel"},{label:"Multiple Spectra Analysis Panel",name:"panels.multipleSpectraAnalysisPanel"},{label:"Database Panel",name:"panels.databasePanel"},{label:"Prediction Panel",name:"panels.predictionPanel"},{label:"Experimental Features",name:"general.experimentalFeatures",hideOpenOption:!0}];function Cl(e){return f(gt,{style:{container:{display:"block",margin:"0 auto",width:"fit-content"}},className:"checkbox-element",name:e.name},e.name)}function RA({preferences:e}){const t=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:o})=>o.index+1},{index:1,Header:"Feature",accessor:"label",style:{width:"60%"}},{index:2,Header:"Active",Cell:({row:o})=>f(Cl,{name:`display.${o.original.name}.display`})},{index:3,Header:"Open on load",Cell:({row:o})=>o.original.hideOpenOption?f("div",{}):f(Cl,{name:`display.${o.original.name}.open`})}],[]),n=c.exports.useMemo(()=>PA.filter(o=>V(e,`${o.name}.hidden`)!==!0),[e]);return f("div",{style:{width:"100%",overflow:"hidden"},children:f(po,{columns:t,data:n})})}const MA=N`
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
`;function NA(){const{values:e,setFieldValue:t}=he(),n=c.exports.useMemo(()=>V(e,"formatting.nucleus",[]),[e]),o=c.exports.useCallback(i=>{const r=n.splice(0,i);t("formatting.nucleus",r)},[n,t]),s=c.exports.useCallback(()=>{const i={key:U(),name:"",ppm:"0.00",hz:"0.00"},r=[...n,i];t("formatting.nucleus",r)},[n,t]);return w(c.exports.Fragment,{children:[d("p",{className:"section-header",children:"Formating according to Nucleus"}),d("div",{css:MA,children:w("table",{children:[d("thead",{children:w("tr",{children:[d("th",{className:"counter-col",children:"#"}),d("th",{className:"nucleus-label-col",children:"Nucleus "}),d("th",{className:"nucleus-format-input-col",children:"\u03B4 (ppm)"}),d("th",{className:"nucleus-format-input-col",children:"Coupling (Hz)"}),d("th",{className:"nucleus-format-input-col"})]})}),d("tbody",{children:n==null?void 0:n.map((i,r)=>{const l=r+1;return w("tr",{children:[w("td",{className:"counter-col",children:[w("span",{children:[l," - "]})," "]}),d("td",{className:"nucleus-label-col",children:d(W,{name:`formatting.nucleus.${r}.name`,className:"width-100"})}),d("td",{className:"nucleus-format-input-col",children:d(W,{name:`formatting.nucleus.${r}.ppm`,className:"width-100"})}),d("td",{className:"nucleus-format-input-col",children:d(W,{name:`formatting.nucleus.${r}.hz`,className:"width-100"})}),w("td",{className:"operation-container",children:[d(me,{onClick:()=>o(r),popupTitle:`remove ${i.name}`,popupPlacement:"right"}),n.length===r+1&&d("button",{className:"add",type:"button",onClick:s,children:d(yn,{})})]})]},`${i.key}`)})})]})})]})}const _A=N`
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
`,FA=({item:e,onSave:t,onDelete:n})=>{const[o,s]=c.exports.useState(""),i=c.exports.useCallback(a=>{a.stopPropagation(),s(""),t(o)},[o,t]),r=c.exports.useCallback(a=>{a.stopPropagation(),n(e.key)},[e.key,n]),l=c.exports.useCallback(a=>{s(a.target.value)},[]);return d("div",{css:_A,children:e.key==="new"?w("div",{className:"new-container",children:[d("input",{value:o,placeholder:"Custom workspace",onClick:a=>a.stopPropagation(),onChange:l}),d("button",{type:"button",className:"save-button",onClick:i,disabled:!o,children:"save"})]}):w("div",{className:"container",children:[d("span",{children:e.label}),!He[e.key]&&d("button",{type:"button",className:"delete-button",onClick:r,children:"Delete"})]})})},LA=N`
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
`;function OA({onClose:e}){const[t,n]=c.exports.useState("controllers"),v=re(),{dispatch:o}=v,s=G(v,["dispatch"]),i=le(),r=c.exports.useRef(),l=Zu(),a=c.exports.useMemo(()=>l.concat([{key:"new",label:"Custom workspace"}]),[l]),u=c.exports.useCallback(()=>{r.current.submitForm()},[]),p=c.exports.useCallback(()=>{o({type:"RESET_PREFERENCES"}),i.success("Settings saved successfully"),e==null||e()},[i,o,e]),h=c.exports.useCallback(C=>{o({type:"SET_PREFERENCES",payload:C}),i.success("Settings saved successfully"),e==null||e()},[i,o,e]),m=c.exports.useCallback(C=>{n(C.tabid)},[]),g=c.exports.useCallback(C=>{o({type:"ADD_WORKSPACE",payload:{workspace:C,data:r.current.values}})},[o]),x=c.exports.useCallback(C=>{o({type:"REMOVE_WORKSPACE",payload:{workspace:C}})},[o]),y=c.exports.useCallback(C=>{o({type:"SET_WORKSPACE",payload:{workspace:C.key}})},[o]),k=c.exports.useCallback(C=>d(FA,{item:C,onSave:g,onDelete:x}),[g,x]);return w("div",{css:[ft,LA],children:[w("div",{className:"header handle",children:[d("span",{children:"General Settings"}),d(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"workspace-container",children:[d("span",{className:"label",children:"Workspace : "}),d(or,{data:a,renderItem:k,selectedKey:s==null?void 0:s.workspace.current,onSelect:y})]}),d("div",{className:"main-content",children:d(ce,{ref:r,initialValues:s.current,onSubmit:h,children:w(Tn,{position:er.LEFT,activeTab:t,onClick:m,children:[d(Me,{tablabel:"Controllers",tabid:"controllers",children:d("div",{className:"inner-content",children:d(IA,{})})}),d(Me,{tablabel:"Formatting",tabid:"formatting",children:d("div",{className:"inner-content",children:d(NA,{})})}),d(Me,{tablabel:"Display",tabid:"display",children:d("div",{className:"inner-content",children:d(RA,{preferences:s.current.display})})})]})},JSON.stringify(s.current))}),d("div",{className:"footer-container",children:d(Zt,{style:{flexDirection:"row-reverse",margin:0},onDone:u,doneLabel:"Save",onCancel:p,cancelLabel:"Reset"})})]})}const Ke={container:{height:"100%",display:"flex",fontSize:"12px",alignItems:"center"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"}};function $A(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useRef(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{e({type:Mc,options:{maxNumberOfPeaks:n.current.value,minMaxRatio:t.current.value,noiseFactor:o.current.value,lookNegative:s.current.checked}})},[e]);return _("div",{style:Ke.container,children:[f(cn,{ref:n,label:"Max Number Of Peaks:",name:"maxNumberOfPeaks",style:{input:Ke.input,inputContainer:Ke.inputContainer,label:Ke.label},defaultValue:50}),f(cn,{ref:o,label:"Noise factor",name:"noiseFactor",style:{input:Ke.input,inputContainer:Ke.inputContainer,label:Ke.label},defaultValue:3}),f(cn,{ref:t,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:Ke.input,inputContainer:Ke.inputContainer,label:Ke.label},defaultValue:.1,step:"0.01"}),_("div",{style:{justifyItems:"baseline",marginRight:"3px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect Negative:"}),f(uo,{name:"lookNegative",ref:s})]}),f(de.Done,{onClick:i,style:{margin:"0 10px"},children:"Apply"})]})}const kl={container:{padding:"5px",height:"100%",display:"flex",alignItems:"center"},label:{lineHeight:2,userSelect:"none"}};function HA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),[o,s]=c.exports.useState("polynomial"),i=c.exports.useCallback(p=>{let h={};switch(o){case"airpls":h=b({algorithm:n.current.value},p);break;case"polynomial":h=b({algorithm:n.current.value},p);break}e({type:Vc,options:h})},[o,e]),r=c.exports.useCallback(()=>{e({type:ct})},[e]),l=c.exports.useCallback(()=>Object.keys($s).map(p=>({key:p,label:$s[p],value:p})),[]),a=c.exports.useCallback(p=>{s(p)},[]),u=c.exports.useMemo(()=>{switch(o){case"airpls":return{validation:ee().shape({maxIterations:ae().integer().min(1).required(),tolerance:ae().moreThan(0).required()}),initialValue:{maxIterations:100,tolerance:.001}};case"autoPolynomial":case"polynomial":return{validation:ee().shape({degree:ae().integer().min(1).max(6).required()}),initialValue:{degree:3}};default:return{validation:{},initialValue:{}}}},[o]);return _("div",{style:kl.container,children:[f("span",{style:kl.label,children:"Algorithm: "}),f(Ne,{ref:n,data:l(),style:{marginLeft:10,marginRight:10},onChange:a,defaultValue:"polynomial"}),_(ce,{ref:t,onSubmit:i,initialValues:u.initialValue,validationSchema:u.validation,children:[o&&o==="airpls"&&_("div",{style:{display:"flex"},children:[f(Q,{title:"maxIterations:",children:f(W,{type:"number",name:"maxIterations"})}),f(Q,{title:"tolerance:",style:{label:{padding:"0 5px"}},children:f(W,{type:"number",name:"tolerance"})})]}),o&&["autoPolynomial","polynomial"].includes(o)&&f(Q,{title:"degree [ 1 - 6 ]:",children:f(W,{type:"number",name:"degree",min:1,max:6,style:{inputWrapper:{height:"100%"}}})})]},JSON.stringify(u.initialValue)),f(Zt,{onDone:()=>t.current.submitForm(),onCancel:r})]})}const Sl={container:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",border:"0.55px solid #c7c7c7",borderRadius:"5px",userSelect:"none",backgroundColor:"#18ce0f14",fontSize:"10px",color:"#00801d",margin:"0px 5px",cursor:"ew-resize"},label:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxWidth:"100%",paddingLeft:"5px",paddingRight:"5px"}};function zA(e,t){const{name:n,value:o=0,onChange:s,label:i,style:r,className:l}=e,a=c.exports.useRef(0),u=c.exports.useRef(o);c.exports.useImperativeHandle(t,()=>({setValue:h=>{u.current=h}}));const p=c.exports.useCallback(h=>{function m(x){let y=x.clientX-a.current;if(a.current=x.clientX,x.buttons===1){const k=y/(x.shiftKey?10:1);u.current=u.current+k,s({value:u.current,name:n})}}function g(){window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",g)}a.current=h.clientX,window.addEventListener("mousemove",m),window.addEventListener("mouseup",g)},[n,s]);return f("div",{style:b(b({},Sl.container),r),className:l,onMouseDown:p,children:f("span",{style:Sl.label,children:i})})}var wl=c.exports.forwardRef(zA);const vo={container:{padding:"5px",height:"100%",display:"flex"},input:{width:"100px"},select:{marginLeft:"5px",marginRight:"10px",border:"none",height:"20px"}},Oe={manual:"manual",automatic:"automatic",absolute:"absolute"},VA=[{key:Oe.manual,label:"Manual",value:Oe.manual},{key:Oe.automatic,label:"Automatic",value:Oe.automatic},{key:Oe.absolute,label:"Absolute",value:Oe.absolute}];function jA({data:e,pivot:t,filter:n}){const o=Y(),[s,i]=c.exports.useState({ph0:0,ph1:0}),r=c.exports.useRef({ph0:0,ph1:0}),l=c.exports.useRef(),a=c.exports.useRef(),[u,p]=c.exports.useState(Oe.manual);c.exports.useEffect(()=>{n?(r.current=n.value,i(n.value),l.current.setValue(n.value.ph0),a.current.setValue(n.value.ph1)):(l.current.setValue(r.current.ph0),a.current.setValue(r.current.ph1))},[n]);const h=c.exports.useCallback(()=>{switch(u){case Oe.automatic:{o({type:Pc});break}case Oe.manual:{o({type:Ic,value:s});break}case Oe.absolute:{o({type:Rc});break}}},[o,u,s]),m=c.exports.useCallback((v,C)=>{if(C==="ph1"&&e.re){const E=v.ph0-r.current.ph0,T=v.ph1-r.current.ph1;v.ph0+=E-T*(t==null?void 0:t.index)/e.re.length}o({type:_i,value:v})},[e.re,o,t==null?void 0:t.index]),g=c.exports.useCallback(v=>{const{name:C,value:E}=v.target;if(v.target){const T=S(b({},r.current),{[C]:E});String(E).trim()!=="-"&&m(T,C),r.current=T,i(r.current)}},[m]),x=c.exports.useCallback(v=>{const C=S(b({},r.current),{[v.name]:v.value});m(C,v.name),r.current=C,i(r.current)},[m]),y=c.exports.useCallback(()=>{o({type:ct})},[o]),k=c.exports.useCallback(v=>{p(v)},[]);return _("div",{style:vo.container,children:[f(Ne,{onChange:k,data:VA,defaultValue:Oe.manual,style:vo.select}),u===Oe.manual&&_(et,{children:[f(Q,{title:"PH0 :",style:{wrapper:{marginRight:"5px"}},children:f(St,{name:"ph0",style:{input:vo.input},onChange:g,value:s.ph0,type:"number",debounceTime:250})}),f(Q,{title:"PH1 :",children:f(St,{name:"ph1",style:{input:vo.input},onChange:g,value:s.ph1,type:"number",debounceTime:250})}),f(wl,{ref:l,name:"ph0",label:"Change Ph0 By mouse click and drag",style:{width:"20%"},onChange:x}),f(wl,{ref:a,name:"ph1",label:"Change Ph1 By mouse click and drag",style:{width:"20%"},onChange:x})]}),f(Zt,{onDone:h,onCancel:y})]})}const BA=c.exports.memo(jA),XA={datum:{},filter:null};function YA(){const{toolOptions:{data:{pivot:e}}}=$(),{data:t,filters:n}=Ce(XA),o=c.exports.useMemo(()=>n.find(s=>s.name===Ht)||null,[n]);return f(BA,{data:t,filter:o,pivot:e})}const Ln={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px",alignItems:"baseline"},input:{height:"100%",width:"50px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},inputContainer:{flex:2},label:{flex:5},hint:{lineHeight:2,userSelect:"none",fontSize:"11px"}};function GA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useCallback(()=>{e({type:Nc,options:{peakPicking:{minMaxRatio:Number(n.current.value)||.05,lookNegative:t.current.checked}}})},[e]);return _("div",{style:Ln.container,children:[_("div",{style:{justifyItems:"baseline",margin:"0 10px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect negative:"}),f(uo,{name:"lookNegative",ref:t})]}),f(cn,{ref:n,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:Ln.input,inputContainer:Ln.inputContainer,label:Ln.label},defaultValue:.05,step:"0.01"}),f(de.Done,{onClick:o,style:{margin:"0 10px"},children:"Auto ranges picking"}),f("span",{style:Ln.hint,children:"Manual selection using SHIFT + select zone or click on Auto peak picking"})]})}const Co={container:{padding:"5px",height:"100%",display:"flex"},input:{height:"100%",width:"80px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},label:{lineHeight:2,userSelect:"none"}},WA=nr(8,21);function ZA(){const e=Y(),{data:t,activeSpectrum:n}=$(),o=c.exports.useRef(),[s,i]=c.exports.useState(1),r=c.exports.useCallback(()=>{e({type:Tc,value:{zeroFillingSize:Number(o.current.value),lineBroadeningValue:s}})},[e,s]),l=c.exports.useCallback(()=>t&&(n==null?void 0:n.id)?2**Math.round(Math.log2(t[n.index].data.x.length)):"",[n,t]),a=c.exports.useCallback(p=>{if(p.target){const h=p.target.validity.valid?Number(p.target.value):s;i(h)}},[s]),u=c.exports.useCallback(()=>{e({type:ct})},[e]);return _("div",{style:Co.container,children:[f("span",{style:Co.label,children:"Size: "}),f(Ne,{ref:o,data:WA,style:{marginLeft:10,marginRight:10},defaultValue:l()}),f("span",{style:Co.label,children:"Line Broadening: "}),f("input",{name:"line-broadening",style:Co.input,type:"number",defaultValue:s,onInput:a,pattern:"^\\d*(\\.\\d{0,2})?$",step:"any"}),f(Zt,{onDone:r,onCancel:u})]})}const ko={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"}};function UA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useCallback(()=>{e({type:_c,options:{thresholdFactor:t.current.value}})},[e]),o=c.exports.useCallback(s=>{s.target&&e({type:vu,payload:s.target.value})},[e]);return _("div",{style:ko.container,children:[f(cn,{ref:t,label:"NoiseFactor",name:"noiseFactor",style:{input:ko.input,inputContainer:ko.inputContainer,label:ko.label},defaultValue:1,onChange:o}),f(de.Done,{onClick:n,style:{margin:"0 10px"},children:"Auto Zones Picking"})]})}function KA(e){const{isFullscreen:t,onMaximize:n=()=>null,selectedOptionPanel:o}=e,s=fe(),{current:{display:{general:i}},workspace:r,dispatch:l}=re(),a=Zu(),u=!!((i==null?void 0:i.hideGeneralSettings)&&r.base),p=c.exports.useMemo(()=>{switch(o){case F.zeroFilling.id:return f(ZA,{});case F.phaseCorrection.id:return f(YA,{});case F.peakPicking.id:return f($A,{});case F.rangesPicking.id:return f(GA,{});case F.baseLineCorrection.id:return f(HA,{});case F.zone2D.id:return f(UA,{})}},[o]),h=c.exports.useCallback(()=>{s.show(f(OA,{}),{position:te.TOP_CENTER,enableResizing:!0,width:600,height:400})},[s]),m=c.exports.useCallback(()=>{s.show(f(TA,{}),{isBackgroundBlur:!1,position:te.MIDDLE,width:500,height:480})},[s]),g=c.exports.useCallback(x=>{l({type:"SET_WORKSPACE",payload:{workspace:x.key}})},[l]);return _(Eh,{children:[_("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[f("div",{children:f(we,{orientation:"horizontal",children:f(we.Item,{onClick:m,titleOrientation:"horizontal",id:"logo",title:"About NMRium",children:f("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:f(Ah,{})})})})}),f("div",{className:"toolOptionsPanel",children:p})]}),_("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[!u&&f(or,{data:a,selectedKey:r.current,onSelect:g}),f("div",{children:_(we,{orientation:"horizontal",children:[f(we.Item,{id:"user-manual",title:"User manual",onClick:()=>window.open(SA,"_blank"),children:f(Th,{})}),!u&&f(we.Item,{id:"general-settings",onClick:h,title:"General settings",children:f(Dh,{})}),!t&&f(we.Item,{id:"full-screen",onClick:n,title:"Full Screen",className:"windowButton",children:f(Ih,{})})]})})]})]})}const qA=c.exports.memo(KA);function JA({isFullscreen:e,onMaximize:t}){const{toolOptions:{selectedOptionPanel:n}}=$();return f(qA,{selectedOptionPanel:n,isFullscreen:e,onMaximize:t})}const xe={MOL:"mol",NMRIUM:"nmrium",JSON:"json",DX:"dx",JDX:"jdx",JDF:"jdf",ZIP:"zip",NMREDATA:"nmredata"},QA={ZIP:"504b0304"};function eT(e){return new Uint8Array(e).slice(0,4).reduce((t,n)=>t+=n.toString(16).padStart(2,"0"),"")}async function tT(e,t={asBuffer:!1}){const n=await fetch(e);return nT(n),t.asBuffer?n.arrayBuffer():n.text()}function nT(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}function rn(e){return e.replace(/^.*\./,"").toLowerCase()}function zd(e){return e.substr(0,e.lastIndexOf("."))}function oT(e){const t=e.replace(/^.*[\\/]/,"").split(".");return{name:t[0].toLowerCase(),extension:t[1].toLowerCase()}}function Nt(e,t={}){return Promise.all([].map.call(e,n=>new Promise((o,s)=>{const i=new FileReader;i.onabort=r=>s(r),i.onerror=r=>s(r),i.onload=()=>{if(i.result){const r=i.result,l=zd(n.name),a=rn(n.name);o({binary:r,name:l,extension:a})}},t.asBuffer?i.readAsArrayBuffer(n):i.readAsBinaryString(n)})))}async function So(e,t={}){const n=[];for(const o of e)try{const s=await o.async(t.asBuffer?"uint8array":"text"),i=zd(o.name),r=rn(o.name);n.push({binary:s,name:i,extension:r})}catch(s){console.error(s)}return n}const sT=N`
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
`,iT=N`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
`;function rT(e){const{width:t,height:n}=$(),o=Y(),s=le(),i=c.exports.useCallback(async(g,x)=>{for(let y of x){const k=g.filter(v=>rn(v.name)===y);switch(y){case xe.MOL:{const v=await So(k);o({type:Ys,files:v});break}case xe.NMRIUM:case xe.JSON:{const v=await So(k,{asBuffer:!0});if(k.length===1){const C=new TextDecoder("utf8");v[0].binary=C.decode(v[0].binary),o({type:gn,files:v})}else throw new Error("You can add only one json file");break}case xe.JDX:case xe.DX:{const v=await So(k,{asBuffer:!0});o({type:$o,files:v});break}case xe.JDF:{const v=await So(k,{asBuffer:!0});o({type:Gs,files:v});break}}}},[o]),r=c.exports.useCallback(async g=>{const x=[...new Set(g.map(y=>rn(y.name)))];for(let y of x){const k=g.filter(v=>rn(v.name)===y);try{switch(y){case xe.MOL:{const v=await Nt(k);o({type:Ys,files:v});break}case xe.NMRIUM:case xe.JSON:if(k.length===1){const v=await Nt(k,{asBuffer:!0});if(eT(v[0].binary)===QA.ZIP){const E=await un.loadAsync(v[0].binary);await i(Object.values(E.files),[xe.NMRIUM])}else{const E=new TextDecoder("utf8");v[0].binary=E.decode(v[0].binary),o({type:gn,files:v})}}else throw new Error("You can add only one json file");break;case xe.JDX:case xe.DX:{const v=await Nt(k,{asBuffer:!0});o({type:$o,files:v});break}case xe.JDF:{const v=await Nt(k,{asBuffer:!0});o({type:Gs,files:v});break}case xe.ZIP:{const v=await Nt(k,{asBuffer:!0});for(const C of v){const E=await un.loadAsync(C.binary),T=[...new Set(Object.values(E.files).map(D=>rn(D.name)))];T.some(D=>xe[D.toUpperCase()]&&D!==xe.ZIP)?(Object.keys(E.files).some(I=>["2rr","fid","1r"].some(A=>I.endsWith(A)))&&o({type:Ho,files:v}),await i(Object.values(E.files),T)):o({type:Ho,files:v})}break}case xe.NMREDATA:Nt(k,{asBuffer:!0}).then(async v=>{for(const C of v)o({type:Yn,file:C})});break;default:throw new Error("The file extension must be zip, dx, jdx, json, mol, nmredata or nmrium.")}}catch(v){o({type:Ct,isLoading:!1}),s.error(v.message)}}},[s,o,i]),l=c.exports.useCallback(g=>{o({type:Ct,isLoading:!0}),r(g)},[o,r]),{getRootProps:a,getInputProps:u,isDragActive:p,open:h}=Ph({onDrop:l,noClick:!0,noKeyboard:!0}),m=c.exports.useCallback(()=>{h()},[h]);return d(Qy,{value:m,children:w("div",S(b({},a()),{role:"none",css:iT,children:[d("input",b({"data-test-id":"dropzone-input"},u())),p&&w("div",{css:sT,style:{width:`${t}px`,height:`${n}px`,marginTop:"30px",marginLeft:"30px"},children:[d(Rh,{}),d("p",{children:"Drop your files here"})]}),e.children]}))})}const lT=[$i,us,Sc,ct,Vo,Ct,dc,hc,Lc,lo,Li,Fi,pc,Ti,ls,Ai,cs,Ii,_i,Ni,xn,ny,ty,Oi,Gn,Di,zo,mc,jo];function aT(e){return!lT.includes(e)}const cT=N`
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
`;function uT({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,d("span",{children:t})]})}function dT({items:e,boxBounding:t,onClick:n}){const o=c.exports.useRef(),[s,i]=c.exports.useState({x:t.width,y:t.height});return c.exports.useLayoutEffect(()=>{const r=o.current.getBoundingClientRect();i(l=>{let a=t.height;return r.bottom>window.innerHeight&&(a=t.height*2+(r.bottom-window.innerHeight)),S(b({},l),{y:a})})},[t.height]),d("div",{ref:o,className:"menu",style:{transform:`translate(${s.x}px, -${s.y}px) `},children:e==null?void 0:e.map(r=>d(uT,S(b({},r),{onClick:()=>n(r)}),r.id))})}function El({component:e,toolTip:t="",items:n=[],onClick:o=()=>null}){const s=c.exports.useRef(null),[i,r]=c.exports.useState(!1),l=c.exports.useCallback(()=>{r(!1)},[]),a=c.exports.useCallback(()=>{r(h=>!h)},[]),u=c.exports.useCallback(h=>{r(!1),o(h)},[o]),p=c.exports.useCallback(()=>{var h;return(h=s.current)==null?void 0:h.getBoundingClientRect()},[]);return w("div",{style:{height:"auto"},css:cT,children:[d("div",{ref:s,children:d(we.Item,{id:`menu-${t}`,title:t,active:i,onClick:a,children:e})}),i&&d(dT,{items:n,boxBounding:p(),onClick:u}),i&&d("div",{className:"menu-cover",onClick:l})]})}const pT={info:{},datum:{},ftCounter:0,fidCounter:0};function Vd(){const{data:e,activeSpectrum:t,activeTab:n}=$();return c.exports.useMemo(()=>{if(e){let o={},s={},i=0,r=0;for(const l of e){const{isFid:a,isFt:u,nucleus:p}=l.info;n===Tt(p)&&(a&&r++,u&&i++,t&&l.id===t.id&&(o=l.info,s=l.data))}return{info:o,datum:s,ftCounter:i,fidCounter:r}}return pT},[t,e,n])}function hT(e){const x=e,{name:t,style:n={},onChange:o=()=>null,className:s="",value:i,placeholder:r=""}=x,l=G(x,["name","style","onChange","className","value","placeholder"]),{values:a,handleChange:u,setFieldValue:p,errors:h}=he(),m=c.exports.useCallback(y=>{o(y),u(y)},[u,o]);c.exports.useEffect(()=>{i&&p(t,i)},[t,p,i]);const g=c.exports.useMemo(()=>V(h,t),[h,t]);return f("textarea",b({name:t,className:s,placeholder:r,value:i||V(a,t),onChange:m,style:b(b({},n),g&&{borderColor:"red",borderWidth:"1px",outline:"none"})},l))}const fT=N`
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
`,mT=ee({publicationText:an().required()});function gT({onClose:e}){const t=c.exports.useRef(),n=Y(),o=le(),s=c.exports.useCallback(i=>{(async()=>{const r=await o.showLoading("Generate spectrum from publication string in progress");setTimeout(()=>{n({type:Au,payload:i}),r()}),e()})()},[o,n,e]);return w("div",{css:[ft,fT],children:[w("div",{className:"header handle",children:[d("span",{children:"Import from publication string"}),d(me,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",children:d(ce,{ref:t,initialValues:{publicationText:"1H NMR (CDCl3, 400MHz) \u03B4 10.58 (b, 1H), 7.40 (d, 1H, J = 8.0 Hz), 6.19 (d, 1H, J = 7.6 Hz), 4.88 (s, 1H), 2.17 (s, 3H), 1.02 (s, 9H), 1.01 (s, 9H), 0.89 (s, 9H)"},validationSchema:mT,onSubmit:s,children:d(hT,{name:"publicationText",className:"text-area",placeholder:"Enter publication string"})})}),d("div",{className:"footer-container",children:d(de.Done,{onClick:()=>t.current.submitForm(),children:"Import"})})]})}const xT=N`
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
    align-items: center;
    height: 36px;

    input {
      padding: 5px;
      border: 1px solid gray;
      border-radius: 5px;
      margin: 2px;
    }
    input {
      flex: 10;
    }
    button {
      flex: 2;
      height: 100%;
    }
  }
`,bT=["dx","jdx"];function yT({onLoadClick:e,onClose:t,startLoading:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{const i=o.current.value,{name:r,extension:l}=oT(i);bT.includes(l)?(n==null||n(),tT(i,{asBuffer:!0}).then(a=>{e({binary:a,name:r,extension:l,jcampURL:i})})):e(null)},[e,n]);return w("div",{css:xT,children:[w("div",{className:"header handle",children:[d("span",{children:"Load JCAMP Dialog"}),d(me,{onClick:t})]}),w("div",{className:"container",children:[d("input",{ref:o,type:"text",placeholder:"Enter URL to JCAMP-DX file"}),d(de.Done,{onClick:s,children:"Load"})]})]})}const Al=[{id:"importFile",icon:f(Cs,{}),label:"Import from file system (Press Ctrl + O)"},{id:"importJDX",icon:f(Cs,{}),label:"Add JCAMP-DX from URL"},{id:"importPublicationString",icon:f(Cs,{}),label:"Import from publication string"}],vT=[{id:"svg",icon:f(Xl,{}),label:"Export as SVG"},{id:"png",icon:f(Bl,{}),label:"Export as PNG"},{id:"json",icon:f(ks,{}),label:"Save data ( Press Ctrl + S )"},{id:"advance_save",icon:f(ks,{}),label:"Save data as  ( Press Ctrl + Shift + S )"},{id:"nmre",icon:f(ks,{}),label:"Save NMRE data"},{id:"copy",icon:f(si,{}),label:"Copy image to Clipboard ( Press Ctrl + C )"}];function CT({info:e,verticalAlign:t,displayerMode:n,ftCounter:o,fidCounter:s,activeSpectrum:i}){const r=Y(),l=le(),a=fe(),u=Bi(),p=kd(),h=sr(),m=c.exports.useMemo(()=>p?Al:Al.filter(H=>H.id!=="importPublicationString"),[p]),{isRealSpectrumShown:g,changeSpectrumViewHandler:x,changeDisplayViewModeHandler:y,alignSpectrumsVerticallyHandler:k}=vs(),{saveAsSVGHandler:v,saveAsPNGHandler:C,saveAsJSONHandler:E,saveAsNMREHandler:T,saveToClipboardHandler:M,saveAsHandler:D}=Cd(),I=c.exports.useCallback(H=>{H?(r({type:$o,files:[H]}),a.close()):l.error("you file must be one of those extensions [ .jdx, dx ] ")},[l,r,a]),A=c.exports.useCallback(()=>{a.close(),r({type:Ct,isLoading:!0})},[r,a]),P=c.exports.useCallback(()=>{a.show(f(yT,{onLoadClick:I,onClose:()=>a.close(),startLoading:A}),{})},[I,a,A]),R=c.exports.useCallback(()=>{a.show(f(gT,{onClose:()=>a.close()}),{})},[a]),O=c.exports.useCallback(({id:H})=>{switch(H){case"importFile":u();break;case"importJDX":P();break;case"importPublicationString":R();break;default:return}},[u,P,R]),L=c.exports.useCallback(({id:H})=>{switch(H){case"svg":v();break;case"png":C();break;case"json":E();break;case"advance_save":D();break;case"nmre":T();break;case"copy":M();break}},[v,C,E,D,T,M]);return _(c.exports.Fragment,{children:[h("import")&&f(El,{component:f(Mh,{}),toolTip:"Import",onClick:H=>(O(H),null),items:m}),h("exportAs")&&f(El,{component:f(Jo,{}),toolTip:"Export As",onClick:H=>(L(H),null),items:vT}),n===B.DM_1D&&h("spectraStackAlignments")&&o>1&&((e==null?void 0:e.isFt)||!i)&&f(we.Item,{id:"spectra-alignment",className:"cheminfo",title:"Spectra alignment ( Press s )",onClick:y,children:t.align==="stack"?f(Nh,{}):f(_h,{})}),n===B.DM_1D&&h("realImaginary")&&e.isComplex&&f(we.Item,{id:"display",title:g?"Display Real ":"Display Imaginary",onClick:x,className:"cheminfo",children:f(Fh,{})}),n===B.DM_1D&&h("spectraCenterAlignments")&&(o>0||s>0)&&f(we.Item,{id:"baseline-position",title:t.align==="bottom"?"Baseline  Center ( Press c )":"Baseline  Bottom ( Press c )",onClick:k,className:"cheminfo",children:f("div",{style:{fontSize:24},children:t.align==="bottom"?f(Lh,{}):f(Oh,{})})})]})}const kT=c.exports.memo(CT);function ST(){const{activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o}=$(),{info:s,fidCounter:i,ftCounter:r}=Vd();return f(kT,{info:s,fidCounter:i,ftCounter:r,activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o})}function De(e){const{children:t,value:n=null,isActive:o=!1,onChange:s=()=>null,isVisible:i=!0,id:r,title:l}=e,[a,u]=c.exports.useState(e.isActive),p=c.exports.useCallback(()=>{const h=!a;u(h),s(h?n:null)},[a,s,n]);return c.exports.useEffect(()=>{u(o)},[o]),i?f(we.Item,{onClick:p,title:l,id:r,active:a,children:t}):null}function wT({children:e,value:t,onChange:n=()=>null}){const[o,s]=c.exports.useState([]),i=c.exports.useCallback(l=>{const u=[...o].map(p=>({value:p.value,isActive:p.value===l}));s(u),n(l)},[n,o]),r=c.exports.useMemo(()=>{let l=0;return c.exports.Children.map(e,a=>{var u;if(a)if(a.type===De){const p=c.exports.cloneElement(a,{onChange:i,isActive:(u=o[l])==null?void 0:u.isActive,index:l});return l++,p}else return c.exports.cloneElement(a)})},[e,i,o]);return c.exports.useEffect(()=>{const l=c.exports.Children.map(e,a=>{if(a&&a.type===De)return{value:a.props.value,isActive:a.props.value===t}});s(l)},[e,t]),f(et,{children:r})}function ET({defaultValue:e,activeSpectrum:t,info:n,datum:o,displayerMode:s,ftCounter:i,mode:r}){const[l,a]=c.exports.useState(""),u=sr(),p=Y(),{handleChangeOption:h,handleFullZoomOut:m}=vs(),g=c.exports.useCallback(y=>{a(y),h(y)},[h]);c.exports.useEffect(()=>{a(e)},[e]);const x=c.exports.useCallback(()=>{p({type:Dc,value:""}),p({type:hc,selectedFilter:null})},[p]);return _(et,{children:[_(wT,{value:l,onChange:g,children:[u("zoomTool")&&f(De,{value:F.zoom.id,id:"zoomIn",title:`${F.zoom.label} ( Press z )`,children:f("div",{style:{fontSize:14},children:f(qn,{})})},F.zoom.id),u("zoomOutTool")&&f(we.Item,{id:"zoom-out",onClick:m,title:"Horizontal zoom out ( Press f ), Horizontal and Vertical zoom out, double click ( Press ff )",children:f("div",{style:{fontSize:14},children:f($h,{})})}),s===B.DM_1D&&u("peakTool")&&f(De,{value:F.peakPicking.id,title:`${F.peakPicking.label} ( Press p )`,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"peakPicking",children:f(Hh,{})},F.peakPicking.id),s===B.DM_1D&&u("integralTool")&&f(De,{value:F.integral.id,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"integralPicking",title:`${F.integral.label} ( Press i )`,children:f(Gl,{})},F.integral.id),s===B.DM_2D&&u("zonePickingTool")&&f(De,{value:F.zone2D.id,id:"zone2d",isVisible:!!(t&&!(n!=null&&n.isFid)),title:`${F.zone2D.label} ( Press r )`,children:f(zh,{})},F.zone2D.id),s===B.DM_2D&&u("slicingTool")&&f(De,{value:F.slicingTool.id,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"slic",title:`${F.slicingTool.label}`,children:f("p",{children:"Slic"})},F.slicingTool.id),s===B.DM_1D&&u("autoRangesTool")&&f(De,{value:F.rangesPicking.id,isVisible:!!(t&&!(n!=null&&n.isFid)),title:`${F.rangesPicking.label} ( Press r )`,id:"ranges-pick",children:f(Ul,{})},F.rangesPicking.id),s===B.DM_1D&&u("multipleSpectraAnalysisTool")&&i>1&&r==="RTL"&&f(De,{value:F.multipleSpectraAnalysis.id,id:"multipleSpectraAnalysis",title:F.multipleSpectraAnalysis.label,children:f(xr,{})},F.multipleSpectraAnalysis.id),s===B.DM_1D&&u("zeroFillingTool")&&f(De,{value:F.zeroFilling.id,isVisible:di({info:n}),id:"zeroFilling",title:F.zeroFilling.label,children:f(Vh,{})},F.zeroFilling.id),s===B.DM_1D&&u("phaseCorrectionTool")&&f(De,{value:F.phaseCorrection.id,id:"phaseCorrection",title:`${F.phaseCorrection.label} ( Press a )`,isVisible:!!(t&&n&&ci({info:n})&&o.im),children:f(jh,{})},F.phaseCorrection.id),s===B.DM_1D&&u("baseLineCorrectionTool")&&f(De,{value:F.baseLineCorrection.id,id:"baseLineCorrection",title:`${F.baseLineCorrection.label} ( Press b )`,isVisible:!!(t&&n&&li({info:n})),children:f(Bh,{})},F.baseLineCorrection.id),s===B.DM_1D&&u("exclusionZonesTool")&&!(n!=null&&n.isFid)&&i>0&&f(De,{value:F.exclusionZones.id,title:`${F.exclusionZones.label} ( Press e )`,id:"exclusionZones",children:f("div",{style:{fontSize:18},children:f(xr,{})})},F.exclusionZones.id)]}),s===B.DM_1D&&u("FFTTool")&&n&&ai({info:n})&&f(we.Item,{id:"fft-filter",className:"cheminfo",title:"FFT Filter",onClick:x,children:f(Xh,{})})]})}const AT=c.exports.memo(ET);function TT({defaultValue:e=F.zoom.id}){const{activeSpectrum:t,displayerMode:n,activeTab:o,mode:s}=$(),i=Vd();return f(AT,S(b({},i),{activeSpectrum:t,displayerMode:n,activeTab:o,defaultValue:e,mode:s}))}function DT({selectedTool:e}){return f("div",{style:{fontSize:18},children:_(we,{orientation:"vertical",children:[f(TT,{defaultValue:e}),f(ST,{})]})})}const IT=c.exports.memo(DT);function PT(){const{toolOptions:{selectedTool:e}}=$();return f(IT,{selectedTool:e})}const RT=N`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
  margin-left: -1px;
`,MT=N`
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
`,NT={},_T={spectra:[]};function FT(e){return d(Gh,{style:{width:"100%"},children:d(Yh,{FallbackComponent:cC,children:d(LT,b({},e))})})}function LT({data:e=_T,workspace:t,preferences:n=NT,getSpinner:o=zu,onDataChange:s,emptyText:i}){const r=c.exports.useRef(null),l=c.exports.useRef(null),[a,u]=Wh(!1),p=Zh(r,a,{onClose:()=>{u(!1)}}),[h,m]=c.exports.useReducer(Uy,Fu,Gy),[g,x]=c.exports.useReducer(w0,Yu,m0),{displayerMode:y,data:k}=h;c.exports.useEffect(()=>{aT(h.actionType)&&(s==null||s(h))},[s,h]);const v=c.exports.useMemo(()=>Wy(m),[]);c.exports.useEffect(()=>{var T;(T=r.current)==null||T.focus()},[p]),c.exports.useEffect(()=>{x({type:"INIT_PREFERENCES",payload:{display:n,workspace:t,dispatch:x}})},[n,t]),c.exports.useEffect(()=>{v({type:Ct,isLoading:!0}),e&&v({type:wi,payload:e})},[e,v]);const C=c.exports.useCallback(T=>{Xt(T)||T.preventDefault()},[]),E=c.exports.useRef(null);return c.exports.useEffect(()=>{const T=E.current;if(!T)return;function M(){v({type:jo,payload:!0})}function D(){v({type:jo,payload:!1})}return T.addEventListener("mouseenter",M),T.addEventListener("mouseleave",D),()=>{T.removeEventListener("mouseenter",M),T.removeEventListener("mouseleave",D)}},[v]),d(Nv,{value:{rootRef:r.current,elementsWrapperRef:l.current},children:d(E0,{value:g,children:d("div",{ref:E,style:{height:"100%",position:"relative"},children:d(Av,{wrapperRef:l.current,children:d(qy,{value:v,children:d(Ky,{value:h,children:d(Mv,{wrapperRef:l.current,children:d(Y0,{children:d(B0,{spectraData:k,children:d(o0,{value:o,children:d("div",{className:"nmrium-container",ref:r,css:MT,onContextMenu:C,style:{height:"100%",width:"100%"},children:d(rT,{children:w("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"white",width:"100%"},children:[d(JA,{isFullscreen:p,onMaximize:u}),w("div",{style:{display:"flex",flexDirection:"row",height:"100%"},children:[d(PT,{}),w(Uh,{initialSeparation:"590px",orientation:"horizontal",sideSeparation:"end",children:[w("div",{css:RT,children:[d(kA,{}),d("div",{"data-test-id":"viewer",style:{width:"100%",height:"100%"},children:y===B.DM_1D?d(aC,{emptyText:i}):d(pv,{emptyText:i})})]}),d(CA,{})]}),d("div",{ref:l,id:"main-wrapper",style:{position:"absolute",pointerEvents:"none",zIndex:0,left:0,right:0,top:0,bottom:0}},String(p))]})]})})})})})})})})})})})})})}var OT=c.exports.memo(FT);function $T(e,t){let n=[];function o(s){Object.keys(s).forEach(i=>{t===i&&n.push({[i]:s[i]}),Array.isArray(s[i])?s[i].forEach(r=>{o(r)}):typeof s[i]=="object"&&s[i]!==null&&o(s[i])})}return o(e),n}function HT(e){const[t,n]=c.exports.useState(),[o,s]=c.exports.useState("");c.exports.useEffect(()=>{const r=$T(e,o);n(o?r:e)},[e,o]);const i=c.exports.useCallback(Ko(r=>{const l=r.target.value;s(l)},500),[e]);return _("div",{style:{display:"flex",flexDirection:"column",paddingTop:"10px"},children:[f("input",{style:{border:"1px solid gray",padding:"5px"},type:"text",placeholder:"Search for key...",onChange:i}),f(Jl,{data:t}),";"]})}function jd(){const[e,t]=c.exports.useState(),[n,o]=c.exports.useState({}),s=c.exports.useCallback(r=>{(async()=>{try{const l=await Nt(r,{asBuffer:!0}),a=new TextDecoder("utf8"),u=JSON.parse(a.decode(l[0].binary));t(u)}catch{alert("Invalid JSON file")}})()},[]),i=c.exports.useCallback(r=>{o(r)},[]);return _("div",{style:{display:"flex",height:"100vh",padding:"20px"},children:[f("div",{style:{flex:9},children:f(OT,{data:e,onDataChange:i})}),_("div",{style:{display:"flex",flexDirection:"column",padding:"10px",flex:3},children:[f("div",{style:{flex:3},children:f(Kh,{onDrop:s,color:"gray"})}),f("div",{style:{flex:9},children:f(HT,{data:n})})]})]})}var zT=Object.freeze(Object.defineProperty({__proto__:null,default:jd},Symbol.toStringTag,{value:"Module"}));const VT=c.exports.lazy(()=>it(()=>import("./TestHighlight.7fb2309b.js"),["assets/TestHighlight.7fb2309b.js","assets/vendor.6bb543ed.js"]));function jT(){return f(c.exports.Suspense,{fallback:null,children:_(Uo,{children:[f(xt,{path:"/test/highlight",component:VT}),f(xt,{path:"/",component:jd}),f(xt,{render:()=>f("div",{children:"Page not found"})})]})})}qh.render(f(Jh,{children:_(Uo,{children:[f(xt,{path:"/test",component:jT}),f(xt,{path:"/",render:e=>f(Sf,b({},e))})]})}),document.getElementById("root"));export{Y0 as H,OT as N,xs as c,ie as u};
//# sourceMappingURL=index.64c24331.js.map
