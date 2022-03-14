var Rd=Object.defineProperty,Nd=Object.defineProperties;var Pd=Object.getOwnPropertyDescriptors;var co=Object.getOwnPropertySymbols;var Ji=Object.prototype.hasOwnProperty,Qi=Object.prototype.propertyIsEnumerable;var qi=(e,t,n)=>t in e?Rd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))Ji.call(t,n)&&qi(e,n,t[n]);if(co)for(var n of co(t))Qi.call(t,n)&&qi(e,n,t[n]);return e},k=(e,t)=>Nd(e,Pd(t));var el=e=>typeof e=="symbol"?e:e+"",G=(e,t)=>{var n={};for(var o in e)Ji.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&co)for(var o of co(e))t.indexOf(o)<0&&Qi.call(e,o)&&(n[o]=e[o]);return n};import{r as c,M as pr,S as Fd,c as P,w as _d,j as w,a as p,F as Ld,E as Od,b as jo,R as ft,d as f,e as _,x as Un,f as hr,g as Xo,m as fr,h as $d,i as Hd,k as Ts,l as zd,n as Vd,o as So,p as tl,z as Bd,q as jd,s as mr,t as nl,u as Pt,v as xn,y as gr,A as Xd,B as Ge,C as Yd,D as Gd,G as Zd,H as Ud,I as xr,J as Wd,K as Kd,L as qd,N as Ds,O as Jd,P as Qd,Q as Vt,T as ep,U as tp,V as np,W as op,X as sp,Y as ip,Z as an,_ as lp,$ as rp,a0 as qe,a1 as mt,a2 as oe,a3 as ze,a4 as ap,a5 as Wn,a6 as br,a7 as ol,a8 as yr,a9 as cp,aa as B,ab as Us,ac as up,ad as vr,ae as Is,af as Ws,ag as ko,ah as Qe,ai as dp,aj as pp,ak as Cr,al as Ks,am as qs,an as Ue,ao as hp,ap as Yo,aq as Sr,ar as Js,as as fp,at as mp,au as cn,av as Ke,aw as sl,ax as $e,ay as gp,az as il,aA as xp,aB as bp,aC as yp,aD as pe,aE as vp,aF as ll,aG as un,aH as Cp,aI as Sp,aJ as vt,aK as kp,aL as wp,aM as Ep,aN as Ln,aO as kr,aP as Ap,aQ as Tp,aR as Dp,aS as ee,aT as ce,aU as Ip,aV as wr,aW as Er,aX as Ar,aY as Mp,aZ as Rp,a_ as Np,a$ as In,b0 as Qs,b1 as Tr,b2 as Dr,b3 as Go,b4 as Pp,b5 as bn,b6 as Ir,b7 as Fp,b8 as On,b9 as _p,ba as Lp,bb as Op,bc as $p,bd as Mr,be as Hp,bf as zp,bg as Rr,bh as Vp,bi as Ms,bj as Bp,bk as Kn,bl as Nr,bm as Zo,bn as Pr,bo as jp,bp as bo,bq as Xp,br as Yp,bs as Gp,bt as Fr,bu as Zp,bv as Up,bw as Wp,bx as _r,by as Kp,bz as wo,bA as qp,bB as Me,bC as Mn,bD as Uo,bE as Lr,bF as Jp,bG as Qp,bH as st,bI as eh,bJ as th,bK as nh,bL as oh,bM as sh,bN as ih,bO as lh,bP as rh,bQ as ah,bR as ch,bS as uh,bT as Or,bU as rl,bV as dh,bW as ph,bX as ke,bY as hh,bZ as fh,b_ as mh,b$ as gh,c0 as xh,c1 as bh,c2 as yh,c3 as vh,c4 as Ch,c5 as Sh,c6 as kh,c7 as wh,c8 as gs,c9 as xs,ca as Eh,cb as Ah,cc as Th,cd as al,ce as Dh,cf as Ih,cg as Mh,ch as Rh,ci as Nh,cj as Ph,ck as Fh,cl as _h,cm as Lh,cn as Oh,co as $h,cp as Hh}from"./vendor.3abbb066.js";const zh=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};zh();var cl=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/ethylbenzene/full.json",title:"FULL ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Exercises",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"},{file:"./exercises/cytisine/hsqc_hmbc.json",title:"Exercise 3",view:"Exercise"}]},{groupName:"Exam",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"}]},{title:"Test",view:"Test"}];function Vh(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t.push($r(n.groupName,[n],[])):t.push(c.exports.createElement(pr,b({key:n.title},n),n.title));return t}function $r(e,t=[],n=[],o=0){let s=n,i=[];o!==-1&&s[o]&&(s[o]=c.exports.cloneElement(s[o],{},i));for(const l in t)if(t[l].children&&Array.isArray(t[l].children)){const r=c.exports.createElement(Fd,{key:l+e,title:t[l].groupName});return s.push(r),$r(l+e,t[l].children,s,0)}else i.push(c.exports.createElement(pr,b({key:l+e},t[l]),t[l].title));return s}function Bh(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t=t.concat(Hr([n],[])):t.push(n);return t}function Hr(e=[],t=[]){let n=t;for(const o of e){if(o.children&&Array.isArray(o.children))return Hr(o.children,n);t.push(o)}return n}function Ft(e=""){const t=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(e);let n="";if(t){const o=t[1].split("/");n=o.length>2?o[o.length-2]+o[o.length-1]:o[o.length-1]}return n+e.replace(/\.|\s|\//g,"")}const jh=P`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,Xh=P`
  width: 260px;
`,Yh=P`
  width: 3%;
`,Gh=P`
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
`,Zh=P`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,Uh=P`
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
`,Wh=P`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,Kh=P`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;function qh(e){const t=c.exports.useMemo(()=>Vh(e.routes),[e.routes]),n=e.menuIsClosed?"none":"block";return w("div",{css:P(jh,e.menuIsClosed?Yh:Xh),children:[w("div",{css:Zh,children:[p("div",{style:{display:n,padding:"0.5rem 0.7rem"},children:p("a",{css:P(Uh,Wh),children:"NMRium"})}),p("button",{type:"button",css:Gh,onClick:e.onMenuToggle,children:p(Ld,{})})]}),p("div",{css:Kh,style:{display:n},children:p(Od,{onClick:o=>{e.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${(o.item.props.view||"View")+Ft(o.item.props.file)}`)},mode:"inline",children:t})})]})}var Jh=_d(c.exports.memo(qh));const Qh="modulepreload",ul={},ef="./",pt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${ef}${o}`,o in ul)return;ul[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":Qh,s||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),s)return new Promise((r,a)=>{l.addEventListener("load",r),l.addEventListener("error",a)})})).then(()=>t())},ei={Exam:c.exports.memo(c.exports.lazy(()=>pt(()=>import("./Exam.0cb733f2.js"),["assets/Exam.0cb733f2.js","assets/vendor.3abbb066.js"]))),Exercise:c.exports.memo(c.exports.lazy(()=>pt(()=>import("./Exercise.ed2bc6d0.js"),["assets/Exercise.ed2bc6d0.js","assets/vendor.3abbb066.js"]))),SingleView:c.exports.memo(c.exports.lazy(()=>pt(()=>import("./SingleView.3aa9cf20.js"),["assets/SingleView.3aa9cf20.js","assets/vendor.3abbb066.js"]))),Test:c.exports.memo(c.exports.lazy(()=>pt(()=>Promise.resolve().then(function(){return xT}),void 0))),View:c.exports.memo(c.exports.lazy(()=>pt(()=>import("./View.a444abf3.js"),["assets/View.a444abf3.js","assets/vendor.3abbb066.js"]))),TwoInstances:c.exports.memo(c.exports.lazy(()=>pt(()=>import("./TwoInstances.d9c62a9e.js"),["assets/TwoInstances.d9c62a9e.js","assets/vendor.3abbb066.js"]))),Teaching:c.exports.memo(c.exports.lazy(()=>pt(()=>import("./Teaching.ec7d2788.js"),["assets/Teaching.ec7d2788.js","assets/vendor.3abbb066.js"])))},tf=P`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,nf=P`
  width: calc(100% - 260px);
`,of=P`
  width: 98%;
  margin-left: 20px !important;
`;function sf(e){const{routes:t=[],baseURL:n}=e,o=c.exports.useMemo(()=>Bh(t),[t]),[s,i]=c.exports.useState(!1),l=c.exports.useCallback(()=>i(!s),[s]);return w("div",{style:{position:"relative",top:0,height:"100vh"},children:[p(Jh,k(b({},e),{routes:t,menuIsClosed:s,onMenuToggle:l})),p("div",{css:P(tf,s?of:nf),children:p(c.exports.StrictMode,{children:p(c.exports.Suspense,{fallback:p("div",{children:"Loading..."}),children:w(jo,{children:[o.map(r=>p(ft,{path:`/SamplesDashboard/:id/${(r.view||"View")+Ft(r.file)}`,render:a=>p(lf,k(b({},a),{prop:r,baseURL:n}))},Ft(r.file))),o.length>0&&p(ft,{path:"/",render:()=>{const r=o[0],a=r.view?r.view:"View",u=ei[a];return p(u,b({},r[0]))}},Ft(o[0].file))]})})})})]})}function lf(e){const{match:{params:{id:t}},prop:n,baseURL:o}=e,s=n.view?n.view:"View",i=ei[s];return p(i,k(b({},n),{id:Ft(n.file),baseURL:o}),t)}function rf(e){return f("div",{style:{position:"relative",top:0,height:"100vh"},children:f("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"},children:f(c.exports.Suspense,{fallback:f("div",{children:"Loading..."}),children:f(jo,{children:f(ft,{path:"/",render:t=>{const{match:{params:{id:n}}}=t,o=e.view?e.view:"SingleView",s=ei[o];return f(s,k(b({},e),{id:Ft(e.patrh)}),n)}},Ft(e.path))})})})})}const Tt={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function af(e){const t=await fetch(e);try{return cf(t),await t.json()}catch(n){return console.error(n),null}}function cf(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}const uf=e=>{const[t,n]=c.exports.useState({isLoaded:!1,status:200,routes:[]}),[o,s]=c.exports.useState(""),i=c.exports.useCallback(()=>{n({isLoaded:!0,status:200,routes:cl})},[]),l=(a="")=>a.substring(a.lastIndexOf(".")+1),r=window.location.href;return c.exports.useEffect(()=>{const a=new URL(r).searchParams;if(a.has("sampleURL")){const u=a.get("sampleURL");if(!u)return;switch(l(u).toLowerCase()){case"json":{s("multi"),af(u).then(h=>{if(h){const m=u.replace(/^(?<url>.*[\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),g=JSON.parse(JSON.stringify(h).replace(/\.\/+?/g,m));n({isLoaded:!0,status:200,routes:g,baseURL:m})}else n({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{s("single"),n({isLoaded:!0,status:200,path:u});break}}}else s("multi"),n({isLoaded:!0,status:200,routes:cl,baseURL:"./"})},[r]),t.isLoaded?o&&o==="single"?f(rf,k(b({},e),{path:t.path})):f(sf,k(b({},e),{routes:t.routes,baseURL:t.baseURL})):f("div",{style:Tt.bodyContainer,children:f("div",{style:b(b({},Tt.container),t.status===200?Tt.normal:Tt.error),children:t.status===200?_("div",{children:[f("p",{style:Tt.normalHeader,children:"Please wait"}),f("p",{children:"We will redirect you in a minute"})]}):_("div",{children:[f("p",{style:Tt.errorHeader,children:"404"}),f("p",{children:"Resource not found."}),f("button",{style:Tt.loadButton,type:"button",onClick:i,children:"Load local samples"})]})})})};function Bt(e){const t=["Alt","AltGraph","CapsLock","Control","Meta","NumLocK","ScrollLock","Shift","OS"];for(const n of t)if(e.getModifierState(n))return!0;return!1}const Eo=2048;function df(e,t,n,o,s){const{fromIndex:i,toIndex:l}=Un(e,{from:n,to:o});if(l-i<=Eo){const r={x:e.subarray(i,l),y:t.subarray(i,l)},a=hr(r,{frequency:s,takeBestPartMultiplet:!0,symmetrizeEachStep:!0});return a&&a.chemShift===void 0?void 0:{multiplicity:a.js.map(u=>u.multiplicity).join(""),kind:"signal",delta:a.chemShift,js:a.js}}else throw new Error(`length of signal should not exceed ${Eo} points`)}const zr={step:"initial",brush:{start:null,end:null},startX:0,endX:0,startY:0,endY:0},Ct=c.exports.createContext(zr);function Vr({children:e,className:t,style:n,onBrush:o=()=>null,onZoom:s=()=>null,onDoubleClick:i=()=>null,onClick:l=()=>null,noPropagation:r}){const[a,u]=c.exports.useReducer(pf,zr),[d,h]=c.exports.useState(0),m=c.exports.useRef([]),g=c.exports.useCallback(S=>(S.button===0&&(r&&S.stopPropagation(),u({type:"DOWN",shiftKey:S.shiftKey,altKey:S.altKey,screenX:S.screenX,screenY:S.screenY,clientX:S.clientX,clientY:S.clientY,boundingRect:S.currentTarget.getBoundingClientRect()}),h(S.timeStamp)),!1),[r]),x=c.exports.useCallback(S=>{S.persist();const E=S.timeStamp,T=S.currentTarget.getBoundingClientRect(),N=S.clientX-T.x,R=S.clientY-T.y,M=Xo(()=>{E-d<=150&&m.current.length===1&&l(k(b({},S),{x:N,y:R})),m.current=[]},200);m.current.push(M),M(),m.current.length>1&&(fr(m.current,A=>A.cancel()),m.current=[],i(k(b({},S),{x:N,y:R})))},[d,l,i]),y=c.exports.useCallback(S=>{const E=S.currentTarget.getBoundingClientRect(),T=S.clientX-E.x,N=S.clientY-E.y,{deltaY:R,deltaX:M,shiftKey:A,deltaMode:D}=S;s({deltaY:R||M,shiftKey:A,deltaMode:D,x:T,y:N})},[s]);c.exports.useEffect(()=>{const{step:S,startX:E,endX:T,startY:N,endY:R}=a;S==="end"&&Math.hypot(T-E,R-N)>5&&(o(a),u({type:"DONE"}))},[o,a]);const C=c.exports.useCallback(S=>{u({type:"MOVE",screenX:S.screenX,screenY:S.screenY,clientX:S.clientX,clientY:S.clientY})},[]),v=c.exports.useCallback(S=>(u({type:"UP",clientX:S.clientX,clientY:S.clientY}),!1),[]);return f(Ct.Provider,{value:a,children:f("div",{className:t,style:n,onMouseDown:g,onMouseUp:v,onMouseMove:C,onClick:x,onWheel:y,children:e})})}function pf(e,t){switch(t.type){case"UP":if(e.step==="brushing"||e.step==="start"){const{clientX:n,clientY:o}=t;return k(b({},e),{endX:n-e.boundingRect.x,endY:o-e.boundingRect.y,step:e.step==="start"?"initial":"end"})}return e;case"DOWN":if(e.step==="initial"||e.step==="end"){const{screenX:n,screenY:o,clientX:s,clientY:i,boundingRect:l,shiftKey:r,altKey:a}=t,u=s-l.x,d=i-l.y;return k(b({},e),{shiftKey:r,altKey:a,startX:u,startY:d,startScreenX:n,startScreenY:o,startClientX:s,startClientY:i,boundingRect:l,step:"start"})}return e;case"MOVE":if(e.step==="start"||e.step==="brushing"){const{clientX:n,clientY:o}=t;return k(b({},e),{step:"brushing",endX:n-e.boundingRect.x,endY:o-e.boundingRect.y})}return e;case"DONE":if(e.step==="end")return k(b({},e),{step:"initial"});break;default:return e}}const at=c.exports.createContext({}),hf=at.Provider;function ff(){return c.exports.useContext(at)}function Br({children:e,className:t,style:n,noPropagation:o}){const[s,i]=c.exports.useState(null),l=c.exports.useCallback(a=>{const u=a.currentTarget.getBoundingClientRect(),d=a.clientX-u.x,h=a.clientY-u.y;i({x:d,y:h}),o&&a.stopPropagation()},[o]),r=c.exports.useCallback(a=>{i(null),o&&a.stopPropagation()},[o]);return f(hf,{value:s,children:f("div",{className:t,style:n,onMouseMove:l,onMouseLeave:r,children:e})})}const ti=[{key:"signal",label:"Signal",value:"signal"},{key:"reference",label:"Reference",value:"reference"},{key:"solvent",label:"Solvent",value:"solvent"},{key:"impurity",label:"Impurity",value:"impurity"},{key:"standard",label:"Standard",value:"standard"},{key:"p1",label:"P1",value:"p1"},{key:"p2",label:"P2",value:"p2"},{key:"p3",label:"P3",value:"p3"}],qn=["signal"],Ze={signal:"signal",mixed:"mixed"},jr="absolute",mf="Absolute";function gf(e){if(!Xr(e))throw new Error("absolute not applicable on this data");e.data.re=$d(e.data),e.data.im=new Float64Array(0),e.info=k(b({},e.info),{isComplex:!1})}function Xr(e){return!!(e.info.isComplex&&!e.info.isFid)}function xf(){return{once:!1,reduce:null}}var bf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:jr,name:mf,apply:gf,isApplicable:Xr,reduce:xf});const yf="autoPhaseCorrection",vf="Automatic phase correction",Cf={minRegSize:5,maxDistanceToJoin:128,magnitudeMode:!0,factorNoise:5};function Yr(e,t={}){if(!Gr(e))throw new Error("phaseCorrection not applicable on this data");return Hd(e.data,b(b({},Cf),t))}function Gr(e){return!!(e.info.isComplex&&!e.info.isFid)}function Sf(e,t){let n=Object.assign({},e);for(const o in n)n[o]+=t[o];return{once:!0,reduce:n}}var kf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:yf,name:vf,apply:Yr,isApplicable:Gr,reduce:Sf});const Zr="baselineCorrection",wf="Baseline correction",Rs={airpls:"airPLS",polynomial:"Polynomial"};function Ef(e,t={}){if(!ni(e))throw new Error("baselineCorrection not applicable on this data");const{algorithm:n,zones:o=[]}=t;let{x:s,re:i}=e.data,l;switch(n){case"airpls":l=Vd(s,i,t).corrected;break;case"polynomial":{const r={regressionOptions:t.degree};let a=Ts({x:s,y:i},{numberOfPoints:4096,zones:o}),u=zd(a.x,a.y,r),{regression:d}=u;l=new Float64Array(s.length);for(let h=0;h<i.length;h++)l[h]=i[h]-d.predict(s[h])}break;default:throw new Error(`baselineCorrection: algorithm unknown: ${n}`)}Object.assign(e.data,{re:l})}function ni(e){return!e.info.isFid}function Af(){return{once:!1,reduce:null}}var Tf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Zr,name:wf,baselineAlgorithms:Rs,apply:Ef,isApplicable:ni,reduce:Af});const Ns="centerMean",Ur="Center Mean";function Df(e){var i;if(!Wr(e))throw new Error("Center Mean is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=So.mean(t),s=So.mean(n||[]);for(let l=0;l<t.length;l++)t[l]-=o,n&&(n[l]-=s);e.data.re=t,n&&(e.data.im=n)}function Wr(e){return!!(e.info.isComplex&&!e.info.isFid)}function If(){return{once:!1,reduce:null}}var Mf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Ns,name:Ur,apply:Df,isApplicable:Wr,reduce:If});const Ps="digitalFilter",Rf="Digital Filter";function Nf(e,t={}){if(!Kr(e))throw new Error("Digital Filter is not applicable on this data");let{digitalFilterValue:n=0}=t,o=new Float64Array(e.data.re),s=new Float64Array(e.data.im),i=Math.floor(n);const l=0;i+=0;const r=new Float64Array(o.length),a=new Float64Array(s.length);r.set(o.slice(i)),r.set(o.slice(l,i),o.length-i),a.set(s.slice(i)),a.set(s.slice(l,i),s.length-i),e.data.re=r,e.data.im=a}function Kr(e){return!!(e.info.isComplex&&e.info.isFid)}function Pf(){return{once:!0,reduce:void 0}}var Ff=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Ps,name:Rf,apply:Nf,isApplicable:Kr,reduce:Pf});const Vn="equallySpaced",qr="Equally Spaced";function _f(e,t={}){if(!Jr(e))throw new Error("Equally Spaced is not applicable on this data");const{from:n,to:o,numberOfPoints:s,exclusions:i}=t,{x:l,re:r,im:a}=e.data,u=Ts({x:l,y:r},{from:n,to:o,numberOfPoints:s,exclusions:i});if(e.data.x=u.x,e.data.re=u.y,a){const d=Ts({x:l,y:r},{from:n,to:o,numberOfPoints:s,exclusions:i});e.data.im=d.y}}function Jr(e){return!!(e.info.isComplex&&!e.info.isFid)}function Lf(){return{once:!1,reduce:null}}var Of=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Vn,name:qr,apply:_f,isApplicable:Jr,reduce:Lf});const Jn="exclusionZones",$f="Exclusion Zones";function Hf(e,t=[]){if(!Qr(e))throw new Error("Exclusion Zones filter not applicable on this data");const{x:n,re:o,im:s}=e.data;e.data.re=tl({x:n,y:o},{zones:t}).y,e.data.im=s&&tl({x:n,y:o},{zones:t})}function Qr(e){return!!(e.info.isComplex&&e.info.isFt)}function zf(e,t){return{once:!0,reduce:Bd(e.concat(t))}}var Vf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Jn,name:$f,apply:Hf,isApplicable:Qr,reduce:zf});const ea="fft",Bf="FFT";function jf(e){if(!oi(e))throw new Error("fft not applicable on this data");let t=e.filters.some(n=>n.name==="digitalFilter"&&n.flag);if(Object.assign(e.data,jd(e.data,{applyZeroShift:!0})),t){let{digitalFilter:n}=e.info,o=(n-Math.floor(n))*Math.PI*2;Object.assign(e.data,mr(e.data,0,o))}e.data.x=Yf(e),e.info=k(b({},e.info),{isFid:!1,isFt:!0})}function oi(e){return!!(e.info.isComplex&&e.info.isFid)}function Xf(){return{once:!0,reduce:void 0}}function Yf(e){const t=e.info,n=parseFloat(t.baseFrequency),o=parseFloat(t.frequencyOffset),s=parseFloat(t.spectralWidth),i=o/n;let l=.5*s,r=e.data.x.length,a=i-l,u=s/(r-1);const d=new Array(r);for(let h=0;h<r;h++)d[h]=a,a+=u;return d}var Gf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:ea,name:Bf,apply:jf,isApplicable:oi,reduce:Xf});const Ao="fromTo",ta="From/To";function Zf(e,t={}){if(!na(e))throw new Error("From/To filter not applicable on this data");const{x:n,re:o,im:s}=e.data,{from:i,to:l}=t,{fromIndex:r,toIndex:a}=Un(n,{from:i,to:l});e.data.x=n.slice(r,a),e.data.re=o.slice(r,a),s&&(e.data.im=s.slice(r,a))}function na(e){return!!(e.info.isComplex&&!e.info.isFid)}function Uf(e,t){return{once:!0,reduce:t}}var Wf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Ao,name:ta,apply:Zf,isApplicable:na,reduce:Uf});const oa="lineBroadening",Kf="Line broadening";function qf(e,t){if(!sa(e))throw new Error("lineBroadening not applicable on this data");let n=e.info.digitalFilter,o;n>0?o=Math.floor(n):o=0;const s=e.data.re,i=e.data.im,l=e.data.x,r=s.length,a=new Float64Array(r),u=new Float64Array(r),d=(l[r-1]-l[0])/(r-1),h=-t*Math.exp(1),m=Math.exp(h*d);let g=Math.exp(h*l[0]);for(let x=0;x<r-o;x++)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;g=Math.exp(h*l[0]);for(let x=r;x>r-o;x--)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;e.data=k(b({},e.data),{re:a,im:u})}function sa(e){return!!(e.info.isComplex&&e.info.isFid)}function Jf(e,t){return{once:!0,reduce:e+t}}var Qf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:oa,name:Kf,apply:qf,isApplicable:sa,reduce:Jf});const Fs="pareto",ia="Pareto";function em(e){var o;if(!la(e))throw new Error("Pareto is not applicable on this data");const t=e.data.re.slice(0),n=(o=e.data.im)==null?void 0:o.slice(0);e.data.re=nl(t),n&&(e.data.im=nl(n))}function la(e){return!!(e.info.isComplex&&!e.info.isFid)}function tm(){return{once:!1,reduce:null}}var nm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Fs,name:ia,apply:em,isApplicable:la,reduce:tm});const $t="phaseCorrection",ra="Phase correction";function aa(e,t={}){if(!si(e))throw new Error("phaseCorrection not applicable on this data");let{ph0:n,ph1:o}=t;n*=Math.PI/180,o*=Math.PI/180,Object.assign(e.data,mr(e.data,n,o))}function si(e){return!!(e.info.isComplex&&!e.info.isFid)}function om(e,t){return{once:!0,reduce:t}}var sm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:$t,name:ra,apply:aa,isApplicable:si,reduce:om});const Qn="shiftX",im="Shift X";function lm(e,t=0){e.data.x=e.data.x.map(n=>n+t)}function rm(){return!0}function am(e,t){return{once:!0,reduce:e+t}}var cm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Qn,name:im,apply:lm,isApplicable:rm,reduce:am});const _s="standardDeviation",ca="Standard Deviation";function um(e){var i;if(!ua(e))throw new Error("Standard Deviation is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=So.standardDeviation(t),s=So.standardDeviation(n||[]);for(let l=0;l<t.length;l++)t[l]/=o,n&&(n[l]/=s);e.data.re=t,n&&(e.data.im=n)}function ua(e){return!!(e.info.isComplex&&!e.info.isFid)}function dm(){return{once:!1,reduce:null}}var pm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:_s,name:ca,apply:um,isApplicable:ua,reduce:dm});const ii="zeroFilling",da="Zero Filling";function hm(e,t){if(!li(e))throw new Error("zeroFilling not applicable on this data");let n=e.filters.some(x=>x.name==="digitalFilter"&&x.flag),o=e.info.digitalFilter,s;o>0&&n?s=Math.floor(o):s=0;const{re:i,im:l,x:r}=e.data;let a=new Float64Array(t),u=new Float64Array(t),d=new Float64Array(t);const h=Math.min(t,i.length);a.set(i.slice(0,h-s)),u.set(l.slice(0,h-s)),d.set(r.slice(0,h-s));let m=r[1]-r[0],g=r[h-s-1];for(let x=h-s;x<t;x++)g+=m,d[x]=g;s>0&&s<t&&(a.set(i.slice(i.length-s),t-s),u.set(l.slice(i.length-s),t-s)),e.data=k(b({},e.data),{re:a,im:u,x:d})}function li(e){return!!(e.info.isComplex&&e.info.isFid)}function fm(e,t){return{once:!0,reduce:t}}var mm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:ii,name:da,apply:hm,isApplicable:li,reduce:fm});const ri="shift2DX",gm="Shift 2D X";function xm(e,t=0){e.data.minX+=t,e.data.maxX+=t}function bm(){return!0}function ym(e,t){return{once:!0,reduce:e+t}}var vm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:ri,name:gm,apply:xm,isApplicable:bm,reduce:ym});const ai="shift2DY",Cm="Shift 2D Y";function Sm(e,t=0){e.data.minY+=t,e.data.maxY+=t}function km(){return!0}function wm(e,t){return{once:!0,reduce:e+t}}var Em=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:ai,name:Cm,apply:Sm,isApplicable:km,reduce:wm}),nn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",absolute:bf,baselineCorrection:Tf,lineBroadening:Qf,fft:Gf,phaseCorrection:sm,autoPhaseCorrection:kf,shiftX:cm,zeroFilling:mm,digitalFilter:Ff,fromTo:Wf,equallySpaced:Of,standardDeviation:pm,centerMean:Mf,pareto:nm,exclusionZones:Vf,shift2DX:vm,shift2DY:Em});const Am="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",Tm=8;function K(){let e="";for(let t=0;t<Tm;t++)e+=Am.charAt(Math.floor(Math.random()*62));return e}function Ae(e,t=[]){let n=!1;for(let o of t){const s={name:o.name,label:nn[o.name].name,value:o.options},i=Im(e,o.name);if(i){const l=nn[o.name].reduce(i.value,s.value);l.once?(n||(n=!0),l.reduce!=null&&l.reduce!==void 0&&Mm(e,i.id,l.reduce)):dl(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}else dl(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}if(n)t.length===1&&Dm(e,t[0].name)?nn[t[0].name].apply(e,t[0].options):dn(e);else for(let o of t)nn[o.name].apply(e,o.options)}function Dm(e,t){const n=e.filters.findIndex(o=>o.name===t);return e.filters.length===n+1}function Im(e,t){return e.filters.find(n=>n.name===t)}function dn(e,t=null){const n=t||e.filters;pa(e,null,null,n)}function pa(e,t,n,o=null){e.filters=e.filters.slice(0),t&&(e.filters=e.filters.map(i=>k(b({},i),{flag:i.id===t?n:i.flag}),[])),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);const s=o||e.filters;for(let i in s){const l=e.filters[i];if(e.filters[i]=k(b({},e.filters[i]),{error:null}),l.flag)try{nn[l.name].apply(e,l.value)}catch(r){e.filters[i]=k(b({},e.filters[i]),{error:r.message})}}}function ci(e,t){e.filters=e.filters.slice(0),e.filters=e.filters.filter(n=>n.id!==t),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);for(let n in e.filters){const o=e.filters[n];if(e.filters[n]=k(b({},e.filters[n]),{error:null}),o.flag)try{nn[o.name].apply(e,o.value)}catch(s){e.filters[n]=k(b({},e.filters[n]),{error:s.message})}}}function dl(e,t,n=!0){const o=K();e.filters=e.filters.slice(0),delete t.isSnapshot,e.filters.push(k(b({},t),{id:o,flag:!0,isDeleteAllow:n}))}function Mm(e,t,n){e.filters=e.filters.slice(0);const o=e.filters.findIndex(s=>s.id===t);delete e.filters[o].isSnapshot,e.filters[o]=k(b({},e.filters[o]),{value:n})}const ha=["#C10020","#007D34","#803E75","#FF6800","#B32851","#7F180D","#232C16","#A6BDD7","#CEA262","#817066","#FF8E00","#F6768E","#00538A","#FF7A5C","#53377A","#FFB300","#F4C800","#93AA00","#593315","#F13A13"],pl={cosy:{positiveColor:"darkblue",negativeColor:"blue"},roesy:{positiveColor:"#e75480",negativeColor:"yellow"},noesy:{positiveColor:"#e75480",negativeColor:"yellow"},tocsy:{positiveColor:"green",negativeColor:"yellow"},hsqc:{positiveColor:"black",negativeColor:"yellow"},hmbc:{positiveColor:"darkviolet",negativeColor:"yellow"}};function Rm(e,t=[]){if(!pl[e]){const n=fa(!1,t),o=Nm(n,50);return{positiveColor:n,negativeColor:o}}return pl[e]}function Ls(e){const t=Math.max(0,Math.min(100,e)),o=Math.round(t/100*255).toString(16);return t===100?"":o.padStart(2,"0")}function Nm(e,t){return e+Ls(t)}function fa(e=!1,t=[],n=100){const o=ha.filter(s=>!t.includes(s));if(o.length>0&&!e)return o[0]+Ls(n);{let i=String(`#${Math.random().toString(16).slice(2,8).toUpperCase()}`).replace(/[^0-9a-f]/gi,"");i.length<6&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);let l="#",r;for(let a=0;a<3;a++)r=parseInt(i.substr(a*2,2),16),r=Math.round(Math.min(Math.max(0,r+r*-.25),255)).toString(16),l+=`00${r}`.substr(r.length);return l+Ls(n)}}function Pm(e){return Pt({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.integrals)}function ma(e){const{x:t}=e.data;return(t[t.length-1]-t[0])/1e4}function jt(e){const t=(e==null?void 0:e.filters)&&(e==null?void 0:e.filters.find(n=>n.name===Qn));return(t==null?void 0:t.flag)?t.value:0}function Fm(e,t,n){var o;for(const{x:s}of((o=t.peaks)==null?void 0:o.values)||[])if(Math.abs(e.x-s)<n)return!0;return!1}function ga(e,t){const n=jt(t),o=ma(t);return e.reduce((s,i)=>(Fm(i,t,o)||s.push({id:(i==null?void 0:i.id)||K(),originalX:i.x-n,x:i.x,y:i.y,width:i.width}),s),[])}function _m(e,t){var n;return Pt({values:[],options:{}},e.peaks,{values:ga(((n=e==null?void 0:e.peaks)==null?void 0:n.values)||[],t)})}function Lm(e,t,n){var o;for(const{from:s,to:i}of((o=t.ranges)==null?void 0:o.values)||[])if(Math.abs(e.from-s)<n&&Math.abs(e.to-i)<n)return!0}function yn(e,t){const{x:n,re:o}=t.data,s=jt(t),i=ma(t);return e.reduce((l,r)=>{if(Lm(r,t,i))return l;const a=xn({x:n,y:o},{from:r.from,to:r.to,reverse:!0}),u=r.signals.map(d=>{const x=d,{kind:h=null,id:m}=x,g=G(x,["kind","id"]);return b({kind:h||"signal",id:m||K(),originDelta:d.delta-s},g)});return l.push(k(b({},r),{kind:(u==null?void 0:u[0].kind)||Ze.signal,originFrom:r.from-s,originTo:r.to-s,id:r.id||K(),absolute:a,signals:u})),l},[])}function Om(e,t){var n;return Pt({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.ranges,{values:yn(((n=e==null?void 0:e.ranges)==null?void 0:n.values)||[],t)})}function lt(e,t={}){var o;const n={};return n.id=e.id||K(),n.source=Object.assign({jcampURL:null,file:{binary:null,name:"",extension:""}},e.source),n.display=Object.assign(k(b({name:((o=e.display)==null?void 0:o.name)?e.display.name:K()},$m(e,t)),{isVisible:!0,isPeaksMarkersVisible:!0,isRealSpectrumVisible:!0}),e.display),n.info=Object.assign({nucleus:"1H",isFid:!1,isComplex:!1,dimension:1},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({x:[],re:[],im:[]},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.peaks=_m(e,n),n.integrals=Pm(e),n.ranges=Om(e,n),dn(n),Hm(n),n}function $m(e,t){let n="black";return(e.display===void 0||e.display.color===void 0)&&(n=fa(!1,t["1d"]||[])),t["1d"]&&t["1d"].push(n),{color:n}}function Hm(e){e.info.isFid&&e.filters.findIndex(t=>t.name===Ps)===-1&&e.info.digitalFilter&&Ae(e,[{name:Ps,options:{digitalFilterValue:e.info.digitalFilter},isDeleteAllow:!1}])}function xa(e,t,n){const{nucleus:o,solvent:s,name:i=null,frequency:l=400}=t,{x:r,y:a}=gr(e,{frequency:l,nbPoints:524288}),u=lt({data:{x:r,im:null,re:a},display:{name:i},info:{nucleus:o,originFrequency:l,baseFrequency:l,pulseSequence:"",solvent:s,isFt:!0}},n);return u.ranges.values=yn(e,u),u}function zm(e,t){const{ranges:n,experiment:{nucleus:o,solvent:s},parts:i}=Xd(e);return xa(n,{nucleus:o,solvent:s,name:i[0]},t)}function vn(e){const{display:{isRealSpectrumVisible:t},data:{x:n,re:o,im:s}}=e;return{x:n,y:t?o:s}}const _t={"1H":{tms:{from:-.1,to:.1,nbPeaks:1,delta:0},tsp:{from:-.1,to:.1,nbPeaks:1,delta:0},glucose:{from:5.18,to:5.28,nbPeaks:2,delta:5.23}},"13C":{}};function Vm(e={}){const{nucleus:t="1H",reference:n="tms"}=e;if(!_t[t])throw new Error(`Nucleus not found: ${t}`);const o=_t[t][n.toLowerCase()];if(!o)throw new Error(`Reference not found: ${n}`);return{from:o.delta-.05,to:o.delta+.05,delta:o.delta,nbPeaks:o.nbPeaks}}function Bm(e,t){let{from:n,to:o,nbPeaks:s,targetX:i,reference:l}=t;if(l){let u=Vm({reference:l,nucleus:e.nucleus});n=u.from,o=u.to,s=u.nbPeaks,i=u.delta}const{re:r,x:a}=e.data;return jm({x:a,y:r},{from:n,to:o},{nbPeaks:s,targetX:i})}function jm(e,t={},n={}){const{targetX:o=0,nbPeaks:s=1,gsd:i={minMaxRatio:.1,realTopDetection:!0,smoothY:!0,sgOptions:{windowSize:7,polynomial:3}}}=n;let{from:l,to:r}=t;if(l===void 0||r===void 0)return 0;const a=Ge(e.x,l),u=Ge(e.x,r),d={x:e.x.slice(a,u),y:e.y.slice(a,u)};let h=Yd(d,i).sort((g,x)=>x.y-g.y).slice(0,s);if(h.length===0)return 0;const m=Gd(h.map(g=>g.x));return o-m}function Xm(e,t){const n=e.integrals.values.findIndex(o=>o.id===t.id);if(n!==-1){const o=e.integrals.values[n].absolute/t.value,{values:s,sum:i}=e.integrals.values.reduce((l,r,a)=>{const u=r.absolute/o;return l.sum+=u,l.values[a]=k(b({},r),{integral:u}),l},{values:[],sum:0});e.integrals.values=s,e.integrals.options=k(b({},e.integrals.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:i})}}function ba(e){return qn.includes(e.kind)}function hl(e,t,n=null){return e.reduce((o,s)=>n&&n(s)===!0?o+=Math.abs(s[t]):o,0)}function ya(e,t,n,o=!1){var a;const{values:s,options:i}=e,l=hl(s,"absolute",n);let r=0;if(i.sum){if(e.options.isSumConstant||o)r=l>0?i.sum/l:0;else if((a=e.values)==null?void 0:a[0]){const u=e.values[0];r=(u[t]?u[t]:i.sum)/u.absolute}}e.values=e.values.map(u=>b(b({},u),n(u)&&{[t]:u.absolute*r})),!e.options.isSumConstant&&!o&&(e.options.sum=hl(e.values,t,n))}function Cn(e,t=!1){ya(e.integrals,"integral",ba,t)}function eo(e){return e.info.dimension===1}function Ym(e,t){const{minMaxRatio:n,maxNumberOfPeaks:o,noiseFactor:s,lookNegative:i,windowFromIndex:l,windowToIndex:r}=t,a=Zd(e.data.re.map(m=>Math.abs(m)));let{re:u,x:d}=e.data;l!==void 0&&r!==void 0&&(d=d.slice(l,r),u=u.slice(l,r));let h=Ud({x:d,y:u},{lookNegative:i,noiseLevel:a*s,minMaxRatio:n,realTopDetection:!0,smoothY:!1,sgOptions:{windowSize:15,polynomial:3}});return h.sort((m,g)=>g.y-m.y),o<h.length&&(h=h.slice(0,o)),ga(h,e)}function va(e,t){const{from:n,to:o}=t;let s=e.x.findIndex(r=>r>=n),i=e.x.findIndex(r=>r>=o)-1;s>i&&(s=i,i=s);const l=e.re.slice(s,i);if(l&&l.length>0){const r=xr(l),a=l.findIndex(d=>d===r);return{x:e.x[s+a],y:r,xIndex:s+a}}return null}function Ca(e){return e.replace(/[0-9]/g,"")}function ui(e,t){let n=b({},e);const{molecules:o,nucleus:s}=t;if(e.sumAuto&&Array.isArray(o)&&o.length>0){const{mf:l,key:r}=o[0];n=k(b({},n),{sumAuto:!0,mf:l,moleculeKey:r})}else{const i=n,{mf:l,moleculeKey:r}=i,a=G(i,["mf","moleculeKey"]);n=k(b({},a),{sumAuto:!1})}return n.sum||(n.sum=Sa(n.mf||null,s)),n}function Sa(e,t){if(!e||!t)return 100;const o=Ca(t),s=Gm(e);return s[o]?s[o]:100}function di(e,t){const{nucleus:n,options:o}=t;if(o.sumAuto){const{mf:i,moleculeKey:l}=o,r=Sa(i,n);e.options=k(b({},e.options),{sumAuto:!0,moleculeKey:l,mf:i,sum:r})}else{const s=e.options,{mf:i,moleculeKey:l}=s,r=G(s,["mf","moleculeKey"]);e.options=k(b({},r),{sumAuto:!1,sum:o.sum})}}function Gm(e){const t={},n=e.split(/(\d+)/);for(let o=0;o<n.length-1;o=o+2)t[n[o]]=Number(n[o+1]);return t}function pi(e,t,n){const o=["ranges","integrals"];for(const s of e.data)if(eo(s))for(const i of o){const{moleculeKey:l,mf:r,sumAuto:a}=s[i].options;if((t===l||!l&&!r)&&a){const u=n?{mf:n.mf,moleculeKey:n.key}:{mf:void 0,moleculeKey:void 0};di(s[i],{nucleus:s.info.nucleus,options:k(b({},u),{sumAuto:!0,sum:void 0})}),St(s,!0),Cn(s,!0)}}}function Zm(e,t){return t===void 0?e.signals?e.signals.reduce((n,o)=>o.nbAtoms?o.nbAtoms+n:n,0):0:e.signals[t].nbAtoms||0}function Um(e,t){e.nbAtoms=Zm(e,t),e.nbAtoms===0&&delete e.nbAtoms}function Wm(e){delete e.diaIDs,delete e.nbAtoms,e.signals.forEach(t=>{delete t.diaIDs,delete t.nbAtoms}),delete e.nbAtoms}function $n(e,t="both",n={}){switch(t){case"both":Wm(e);break;case"range":delete e.diaIDs,delete e.nbAtoms;break;case"signal":delete e.signals[n.signalIndex].diaIDs,delete e.signals[n.signalIndex].nbAtoms;break}return Um(e),e}function ka(e){return e.kind===Ze.signal}function Km(e,t){return!e.signals.some(n=>n.kind===void 0||!t.includes(n.kind))}function Ht(e,t){const n=t.reduce((o,s)=>(s.id&&o.push(s.id),s.signals&&(o=o.concat(s.signals.map(i=>i.id,[]))),o),[]);e.dispatch({type:"REMOVE_ALL",payload:{id:n,axis:"x"}})}function qm(e){return e.signals&&Km(e,qn)}function St(e,t=!1){ya(e.ranges,"integration",qm,t)}function Jm(e,t){const{from:n,to:o,molecules:s,nucleus:i}=t,{x:l,re:r}=e.data,a=xn({x:l,y:r},{from:n,to:o,reverse:!0}),u=df(l,r,n,o,e.info.originFrequency);if(!!u)try{const d={id:K(),from:n,to:o,absolute:a,signals:[b({id:K()},u)],kind:Ze.signal,integration:0};e.ranges.options=ui(e.ranges.options,{molecules:s,nucleus:i}),e.ranges.values=e.ranges.values.concat(yn([d],e)),St(e)}catch{throw new Error("Could not calculate the multiplicity")}}function Qm(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,l=e.ranges.values.findIndex(a=>a.id===t.id),r=xn({x:s,y:i},{from:n,to:o,reverse:!0});l!==-1&&(e.ranges.values[l]=k(b(k(b({},e.ranges.values[l]),{originFrom:n,originTo:o}),t),{absolute:r}),St(e))}function eg(e,t){const n=e.ranges.values.findIndex(o=>o.id===t.id);if(n!==-1&&e.ranges.options.sum){const{absolute:o,integration:s}=e.ranges.values[n],i=o/t.value,l=t.value/s*e.ranges.options.sum;e.ranges.options=k(b({},e.ranges.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:l}),e.ranges.values=e.ranges.values.map(r=>k(b({},r),{integration:r.absolute/i}))}}function tg(e,t){const{rangeID:n,signalID:o,newSignalValue:s}=t;let i=0;const l=e.ranges.values.findIndex(r=>r.id===n);if(l!==-1){const r=e.ranges.values[l].signals.findIndex(a=>a.id===o);i=s-e.ranges.values[l].signals[r].delta,e.ranges.values[l].signals[r].delta=s}return i}function ng(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,l=xn({x:s,y:i},{from:n,to:o,reverse:!0}),r=Wd({x:s,y:i},{from:n,to:o}).y,a=Kd({x:s,y:i},{from:n,to:o}).y,u=jt(e);return{id:K(),originFrom:n-u,originTo:o-u,from:n,to:o,absolute:l,min:r,max:a}}const og={minMaxRatio:1,realTopDetection:!0,maxCriteria:!0,smoothY:!1,integrationSum:100,factorStd:5,clean:!0,sgOptions:{windowSize:7,polynomial:3}};function sg(e,t={}){let{re:n,x:o}=e.data;const{originFrequency:s,nucleus:i}=e.info,{windowFromIndex:l,windowToIndex:r,peakPicking:a}=t,u=b(b({},og),a),d={frequency:s,nucleus:i,compile:!0,frequencyCluster:13,keepPeaks:!0};if(l!==void 0&&r!==void 0&&(o=o.slice(l,r),n=n.slice(l,r)),s){let m=1/s/(o[1]-o[0]),g=Math.max(Math.round(m/2),5);u.sgOptions={windowSize:g-g%2+1,polynomial:3}}return u.smoothY=void 0,u.sgOptions=void 0,qd({x:o,y:n},{peakPicking:u,ranges:d})}function wa(e,t){const l=t,{molecules:n,nucleus:o}=l,s=G(l,["molecules","nucleus"]);s.impurities={solvent:e.info.solvent||""};const i=sg(e,s);e.ranges.options=ui(e.ranges.options,{molecules:n,nucleus:o}),e.ranges.values=e.ranges.values.concat(yn(i,e)),St(e)}function ig(e,t){e.integrals.values=e.integrals.values.map(n=>k(b({},n),{from:n.originFrom+t,to:n.originTo+t}))}function lg(e,t){e.peaks.values=e.peaks.values.map(n=>{const o=n.originalX+t,s=Ge(e.data.x,o);return k(b({},n),{y:e.data.re[s],x:n.originalX+t})})}function rg(e,t){e.ranges.values=e.ranges.values.map(n=>k(b({},n),{from:(n.originFrom||0)+t,to:(n.originTo||0)+t,signals:(n==null?void 0:n.signals)&&n.signals.map(o=>k(b({},o),{delta:(o.originDelta||0)+t}))}))}function Sn(e){const t=jt(e);lg(e,t),rg(e,t),ig(e,t)}const Ea=20;var X=(e=>(e.DM_1D="1D",e.DM_2D="2D",e))(X||{});const Dt={"2D":{top:100,right:50,bottom:70,left:100},"1D":{top:10,right:10,bottom:70,left:10}};function ag(e,t={},n={}){const{dependentVariables:o,info:s,meta:i,source:l}=e;let r=Aa(o[0].components);return r.im&&(s.isComplex=!0),Array.isArray(s.nucleus)&&(s.nucleus=s.nucleus[0]),lt(k(b({},t),{source:l,info:s,meta:i,data:r}),n)}function cg(e,t={},n={}){let o=e.dimensions[0],s=e.dependentVariables,i=o.quantityName,l=o.count,r=o.increment.magnitude,a=o.originOffset.magnitude,u=o.coordinatesOffset.magnitude,d=s[0].components[0],h=[],m=[];for(let S=d.length-1;S>0;S-=2)h.push(d[S-1]),m.push(d[S]);let g={},x,y;switch(i){case"frequency":y=0+u/a*1e6,x=r/a*1e6,g.re=h,g.im=m;break;case"time":y=a,x=r,g.re=h.reverse(),g.im=m.reverse().map(S=>-S);break}let C=[];for(let S=0;S<l;S++)C.push(y+S*x);return g.x=C,lt(k(b({},t),{data:g}),n)}function ug(e,t,n){const{dependentVariables:o,info:s,meta:i}=e;let l=Aa(o[0].components);return Array.isArray(s.nucleus)&&(s.nucleus=s.nucleus[0]),lt(k(b({},t),{info:s,meta:i,data:l}),n)}function Aa(e){var s,i,l,r,a,u;let t=((i=(s=e[0])==null?void 0:s.data)==null?void 0:i.x)?e[0].data.x:[],n=((r=(l=e[0])==null?void 0:l.data)==null?void 0:r.y)?e[0].data.y:[],o=((u=(a=e[1])==null?void 0:a.data)==null?void 0:u.y)?e[1].data.y:null;return t[0]>t[1]&&(t.reverse(),n.reverse(),o&&o.reverse()),{x:t,re:n,im:o}}function dg(e,t,n){let o=e.info.nucleus.indexOf(t);o===-1&&(o=0);let s={nucleus:e.info.nucleus[o],isFid:!1,isComplex:!1,dimension:1},i=o===0?e.data.minX:e.data.minY,l=o===0?e.data.maxX:e.data.maxY,r=o===0?e.data.z[0].length:e.data.z.length,a=new Float64Array(r);if(o===1)for(let d=0;d<e.data.z.length;d++)for(let h=0;h<e.data.z[0].length;h++)a[d]+=e.data.z[d][h];else for(let d=0;d<e.data.z[0].length;d++)for(const h of e.data.z)a[d]+=h[d];let u={x:Ds({from:i,to:l},r),re:a};return lt({info:s,data:u},n)}function pg(e,t){const n=e.data,o=(n.maxX-n.minX)/(n.z[0].length-1),s=(n.maxY-n.minY)/(n.z.length-1),i=Math.floor((t.x-n.minX)/o),l=Math.floor((t.y-n.minY)/s);if(i<0||i>=n.z[0].length||l<0||l>=n.z.length)return;let r={nucleus:e.info.nucleus[0],isFid:!1,isComplex:!1,dimension:1},a={x:Ds({from:e.data.minX,to:e.data.maxX},e.data.z[0].length),re:new Float64Array(e.data.z[0].length)};for(let x=0;x<e.data.z[0].length;x++)a.re[x]+=e.data.z[l][x];let u={nucleus:e.info.nucleus[1],isFid:!1,isComplex:!1,dimension:1},d={x:Ds({from:e.data.minY,to:e.data.maxY},e.data.z.length),re:new Float64Array(e.data.z.length)},h=e.data.z.length-1;for(let x=0;x<e.data.z.length;x++)d.re[x]+=e.data.z[h--][i];const m=lt({info:r,data:a},{}),g=lt({info:u,data:d},{});return{horizontal:m,vertical:g}}const Ta={positive:{contourLevels:[0,21],numberOfLayers:10},negative:{contourLevels:[0,21],numberOfLayers:10}};class hg{constructor(t,n=Ta,o={positive:10,negative:10}){this.options=n;const{positive:s,negative:i}=o;this.currentLevelPositive=s,this.currentLevelNegative=i;const l=bs(t.minX,t.maxX,t.z[0].length),r=bs(t.minY,t.maxY,t.z.length);this.conrec=new Jd(t.z,{xs:l,ys:r,swapAxes:!1}),this.median=t.noise,this.minMax=t}getLevel(){return{levelPositive:this.currentLevelPositive,levelNegative:this.currentLevelNegative}}setLevel(t,n){this.currentLevelPositive=t,this.currentLevelNegative=n}setOptions(t){const n=t.positive.contourLevels,o=t.negative.contourLevels;this.currentLevelPositive>=n[1]?this.currentLevelPositive=n[1]:this.currentLevelPositive<=n[0]&&(this.currentLevelPositive=n[0]),this.currentLevelNegative>=o[1]?this.currentLevelNegative=o[1]:this.currentLevelNegative<=o[0]&&(this.currentLevelNegative=o[0]),this.options=t}wheel(t){const n=Math.sign(t),o=this.options.positive.contourLevels,s=this.options.negative.contourLevels;(this.currentLevelPositive>o[0]&&n===-1||this.currentLevelPositive<o[1]&&n===1)&&(this.currentLevelPositive+=n),(this.currentLevelNegative>s[0]&&n===-1||this.currentLevelNegative<s[1]&&n===1)&&(this.currentLevelNegative+=n)}shiftWheel(t){const n=Math.sign(t),[o,s]=this.options.positive.contourLevels;if(!(this.currentLevelPositive===o&&n===-1||this.currentLevelPositive>=s&&n===1))return this.currentLevelPositive+=n,[]}drawContours(){const t=this.currentLevelPositive/2+1,n=this.currentLevelNegative/2+1,{positive:{numberOfLayers:o},negative:{numberOfLayers:s}}=this.options;return{positive:this.getContours(t,{nbLevels:o}),negative:this.getContours(n,{negative:!0,nbLevels:s})}}getContours(t,n={}){const{negative:o=!1,timeout:s=2e3,nbLevels:i=10}=n,l=Math.max(Math.abs(this.minMax.maxZ),Math.abs(this.minMax.minZ));let r=bs(this.median*1*Math.pow(2,t),l,i,2);o&&(r=r.map(u=>-u));let a=[];try{a=this.conrec.drawContour({contourDrawer:"basic",levels:r,timeout:s})}catch(u){throw console.log(u),u}return a}}function bs(e,t,n,o){if(o!==void 0){const s=[];s[0]=0;for(let r=1;r<=n;r++)s[r]=s[r-1]+(o-1)/Math.pow(o,r);const i=s[n],l=new Array(n);for(let r=0;r<n;r++)l[r]=(t-e)*(1-s[r+1]/i)+e;return l}else{const s=(t-e)/(n-1);return fg(e,t+s/2,s)}}function fg(e,t,n){const o=[];for(let s=e;s<t;s+=n)o.push(s);return o}function to(e,t={}){var o;const n={};return n.id=e.id||K(),n.source=Object.assign({jcampURL:null},e.source),n.display=Object.assign(k(b({name:((o=e.display)==null?void 0:o.name)?e.display.name:K()},mg(e,t)),{isPositiveVisible:!0,isNegativeVisible:!0,isVisible:!0,contourOptions:Ta,dimension:2}),e.display),n.info=Object.assign({nucleus:["1H","1H"],isFt:!0,isFid:!1,isComplex:!1,dimension:2},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({z:[],minX:0,minY:0,maxX:0,maxY:0},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.zones=Object.assign({values:[],options:{}},e.zones),n.processingController=new hg(n.data,n.display.contourOptions),dn(n),n}function mg(e,t){let n={positiveColor:"red",negativeColor:"blue"};return(e.display===void 0||e.display.negativeColor===void 0||e.display.positiveColor===void 0)&&(n=Rm(e.info.experiment,t["2d"]||[])),t["2d"]&&t["2d"].push(n.positiveColor),n}function Os(e){return e.info.dimension===2}function no(e){let t={xShift:0,yShift:0};return(e==null?void 0:e.filters)&&(t=e.filters.reduce((n,o)=>(o.name===ri&&(n.xShift=(o==null?void 0:o.flag)?o.value:0),o.name===ai&&(n.yShift=(o==null?void 0:o.flag)?o.value:0),n),{xShift:0,yShift:0})),t}function oo(e){const{xShift:t,yShift:n}=no(e);gg(e,{xShift:t,yShift:n})}function gg(e,{xShift:t,yShift:n}){e.zones.values=e.zones.values.map(o=>{var s;return k(b({},o),{signals:(s=o.signals)==null?void 0:s.map(i=>k(b({},i),{x:k(b({},i.x),{delta:i.x.originDelta+t}),y:k(b({},i.y),{delta:i.y.originDelta+n})}))})})}function xg(e,t){return k(b({id:e.id},t===gt.ROW_DATA||t===gt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL}}),{zones:e.zones,filters:e.filters,display:e.display})}function bg(e,t,n){var s;const o=e.zones.values.findIndex(i=>i.id===t);if(o!==-1){const i=e.zones.values[o].signals.findIndex(r=>r.id===n.id),l=e.zones.values[o];if(i!==-1){const r=l.signals[i],a=(n==null?void 0:n.x)||(n==null?void 0:n.x)===0?n.x-r.x.delta:0,u=(n==null?void 0:n.y)||(n==null?void 0:n.y)===0?n.y-((s=r.y)==null?void 0:s.delta):0;return{xShift:a,yShift:u}}}return{xShift:0,yShift:0}}function Da(e,t){let n={};return t.selectedZone?(t.enhanceSymmetry=!1,n=vg(e,t.selectedZone)):n=e.data,yg(n,k(b({},t),{info:e.info}))}function yg(e,t){const{thresholdFactor:n,clean:o,maxPercentCutOff:s,convolutionByFFT:i}=t,{nucleus:l,originFrequency:r}=t.info,{enhanceSymmetry:a=l[0]===l[1]}=t;return Qd(e,{nuclei:l,observedFrequencies:r,thresholdFactor:n,clean:o,maxPercentCutOff:s,enhanceSymmetry:a,convolutionByFFT:i})}function vg(e,t){const{fromX:n,toX:o,fromY:s,toY:i}=t,l=e.data,r=(l.maxX-l.minX)/(l.z[0].length-1),a=(l.maxY-l.minY)/(l.z.length-1);let u=Math.max(Math.floor((n-l.minX)/r),0),d=Math.max(Math.floor((s-l.minY)/a),0),h=Math.min(Math.floor((o-l.minX)/r),l.z[0].length-1),m=Math.min(Math.floor((i-l.minY)/a),l.z.length-1);u>h&&([u,h]=[h,u]),d>m&&([d,m]=[m,d]);let g={z:[],maxX:l.minX+h*r,minX:l.minX+u*r,maxY:l.minY+m*a,minY:l.minY+d*a},x=Number.MIN_SAFE_INTEGER,y=Number.MAX_SAFE_INTEGER,C=h-u+1;for(let v=d;v<m;v++){let S=new Float32Array(C),E=u;for(let T=0;T<C;T++)S[T]=l.z[v][E++];for(let T of S)x<T&&(x=T),y>T&&(y=T);g.z.push(Array.from(S))}return g.minZ=y,g.maxZ=x,g}function Ia(e,t){const n=Da(e,t),{xShift:o,yShift:s}=no(e),{minX:i,maxX:l,minY:r,maxY:a}=e.data,u=Math.abs(l-i)/1e4,d=Math.abs(a-r)/1e4;return n.reduce((m,g)=>{const x=g.x||{from:0,to:0},y=g.y||{from:0,to:0};for(const{x:v,y:S}of e.zones.values)if(Math.abs(x.from-v.from)<u&&Math.abs(x.to-v.to)<u&&Math.abs(y.from-S.from)<d&&Math.abs(y.to-S.to)<d)return m;const C=g.signals.map(v=>({id:K(),peaks:v.peaks,x:b({originDelta:v.x.delta-o},v.x),y:b({originDelta:v.y.delta-s},v.y),kind:"signal"}));return m.push({id:K(),x:{from:x.from,to:x.to},y:{from:y.from,to:y.to},signals:C,kind:Ze.signal}),m},[])}function Cg(e,t){const n=Da(e,t),{xShift:o,yShift:s}=no(e);return n.map(l=>{const r=l.signals.map(a=>({id:K(),peaks:a.peaks,x:b({originDelta:a.x.delta-o},a.x),y:b({originDelta:a.y.delta-s},a.y),kind:a.kind||"signal"}));return{id:K(),x:l.x,y:l.y,signals:r,kind:Ze.signal}},[])}function Sg(e,t,n){const{dependentVariables:o,info:s,meta:i}=e;let l=o[0].components;return to(k(b({},t),{info:s,meta:i,data:l}),n)}function kg(e,t={},n={}){const{dependentVariables:o,meta:s,source:i}=e;let l=o[0].components;return to(k(b({},t),{source:i,meta:s,data:l}),n)}function wg(e,t={},n={}){return to({},n)}function To(e,t){return JSON.parse(JSON.stringify(e),function(o,s){if(o in t){this[t[o]]=s;return}return s})}function Eg(e){if((e==null?void 0:e.version)===1)return e;const t=k(b({},e),{version:1}),n={j:"js",signal:"signals",integral:"integration",peak:"peaks",diaID:"diaIDs"};for(const o of t.spectra)o.ranges?o.ranges=To(o.ranges,n):o.zones&&(o.zones=To(o.zones,n));return t}function Ag(e){if((e==null?void 0:e.version)===2)return e;const t=k(b({},e),{version:2}),n={peaks:{delta:"x",originDelta:"originalX",intensity:"y"},ranges:{atomIDs:"atoms",intensity:"y"}};for(const o of t.spectra)o.peaks?o.peaks=To(o.peaks,n.peaks):o.ranges?o.ranges=To(o.ranges,n.ranges):o.zones&&(o.zones.values=Tg(o.zones.values));return t}function Tg(e){return e.map(t=>(t.signals&&(t.signals=t.signals.map(n=>{if(n.x&&n.y){const o=n,{x:s}=o,i=s,{fromTo:u}=i,d=G(i,["fromTo"]),{y:l}=o,r=l,{fromTo:h}=r,m=G(r,["fromTo"]);n=k(b({},n),{x:b(b({},d),u),y:b(b({},m),h)})}else{const a=n,{fromTo:u,deltaX:d,resolutionX:h,nucleusX:m,deltaY:g,resolutionY:x,nucleusY:y,shiftX:C,shiftY:v}=a,S=G(a,["fromTo","deltaX","resolutionX","nucleusX","deltaY","resolutionY","nucleusY","shiftX","shiftY"]);n=k(b({},S),{x:{from:u[0].from,to:u[0].to,delta:d,resolution:h,nucleus:m},y:{from:u[1].from,to:u[1].to,delta:g,resolution:x,nucleus:y}})}return n},[])),t),[])}const Ma=2;function Dg(e){return t=>e.reduce((n,o)=>o(n),t)}function fl(e){let t=[Eg,Ag],n=(e==null?void 0:e.version)||0;if(n>Ma)throw new Error("This file can not be imported using the current NMRium version, Please move to the new one !!! ");return Dg(t.slice(n))(e)}const Ig=/^(?:[A-Z][a-z]?\d* *)+$/;function Ra(e){if(!Ig.test(e))throw Error(`MF can not be parsed: ${e}`);const t={},n=e.matchAll(/(?<atom>[A-Z][a-z]?)(?<number>[0-9]*)/g);for(const o of n){const{atom:s,number:i}=o.groups;t[s]||(t[s]=0),t[s]+=i===""?1:Number(i)}return t}function Do(e={}){const t=e.key||K(),n=e.molfile||"",o=Vt.Molecule.fromMolfile(n),s=o.getMolecularFormula();return{key:t,molfile:n,mf:s.formula,em:s.absoluteWeight,mw:s.relativeWeight,svg:o.toSVG(50,50),atoms:Ra(s.formula)}}function Mg(e){return{molfile:e.molfile}}var gt=(e=>(e.ROW_DATA="ROW_DATA",e.DATA_SOURCE="DATA_SOURCE",e))(gt||{});function Rg(e,t,n,o){return fetch(t).then(s=>s.arrayBuffer()).then(s=>{Na(e,s,n,o)})}function Na(e,t,n,o){n=n||{};const s=tp(t,{noContour:!0,xy:!0,keepRecordsRegExp:/.*/,profiling:!0});if(s.length!==0)for(let i of s){let{dependentVariables:l}=i;l[0].components&&(l[0].components.length>0||l[0].components.z.length)&&Ng(e,i,n,o)}}function Ng(e,t,n,o){const s=t.info.dimension;s===1&&e.push(ug(t,n,o)),s===2&&e.push(Sg(t,n,o))}function Pg(e,t,n){const o=t.info.dimension;o===1&&e.push(lt(t,n)),o===2&&e.push(to(t,n))}function Fg(e,t,n={},o={}){let s=np(t);s=s[0];let i=s.description,l=i.metadata;delete i.metadata,i.acquisitionMode=0,i.experiment=i.dimension===1?"1d":"2d",i.type="NMR SPECTRUM",i.nucleus=i.nucleus[0],i.numberOfPoints=i.numberOfPoints[0],i.acquisitionTime=i.acquisitionTime[0],i.baseFrequency=i.baseFrequency[0],i.frequencyOffset=i.frequencyOffset[0],i.spectralWidthClipped=s.application.spectralWidthClipped,i.dimension===1&&s.dependentVariables&&e.push(cg(s,k(b({},n),{display:b({},n.display),info:i,meta:l}),o)),i.dimension===2&&i.isFt&&e.push(wg(s,k(b({},n),{display:b({},n.display),info:i}),o))}async function ml(e=[],t={}){var s;const n=[];let o=[];for(let i of e)((s=i==null?void 0:i.source)==null?void 0:s.jcampURL)!=null?o.push(Rg(n,i.source.jcampURL,i,t)):Pg(n,i,t);return await Promise.all(o),n}async function Pa(e,t,n){const o=[];let i=await ep(t,{xy:!0,noContours:!0,keepOriginal:!0});for(let l of i){let{info:r,dependentVariables:a}=l;r.dimension===1?a[0].components&&o.push(ag(l,k(b({},e),{display:b({},e.display)}),n)):r.dimension===2&&r.isFt&&o.push(kg(l,k(b({},e),{info:r,display:b({},e.display)}),n))}return o}function _g(e,t){const n=[];for(const o of e)Fg(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function Fa(e,t){const n=[];for(const o of e)Na(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function Lg(e){const{activeTab:t,verticalAlign:{align:n}}=e;return b({activeTab:t},e.displayerMode===X.DM_1D?{verticalAlign:n}:{})}function gl(e,t="DATA_SOURCE"){const{data:n,molecules:o,correlations:s,multipleAnalysis:i,toolOptions:{data:{exclusionZones:l}}}=e||{data:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:{}},r=n.map(d=>d.info.dimension===1?Og(d,t):xg(d,t)),a=Lg(e),u=o.map(d=>Mg(d));return{spectra:r,molecules:u,correlations:s,multipleAnalysis:i,exclusionZones:l,version:Ma,preferences:a}}function Og(e,t){return k(b({id:e.id,display:e.display},t===gt.ROW_DATA||t===gt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL}}),{peaks:e.peaks,integrals:e.integrals,ranges:e.ranges,filters:e.filters})}const _a={frequency:400,"1d":{"1H":{from:-1,to:12},"13C":{from:-5,to:220},nbPoints:2**17,lineWidth:1},"2d":{nbPoints:{x:1024,y:1024}},spectra:{proton:!0,carbon:!0,cosy:!0,hsqc:!0,hmbc:!0}},La=[{key:1,value:60,label:"60 MHz"},{key:2,value:100,label:"100 MHz"},{key:3,value:200,label:"200 MHz"},{key:4,value:300,label:"300 MHz"},{key:5,value:400,label:"400 MHz"},{key:6,value:500,label:"500 MHz"},{key:7,value:600,label:"600 MHz"},{key:8,value:800,label:"800 MHz"},{key:9,value:1e3,label:"1000 MHz"},{key:10,value:1200,label:"1200 MHz"}],$g="https://nmr-prediction.service.zakodium.com";async function Hg(e){const t=Vt.Molecule.fromMolfile(e);return op(t,{predictOptions:{C:{webserviceURL:`${$g}/v1/predict/carbon`}}})}function zg(e,t){const n=[],o="#593315";for(const s in e)if(t.spectra[s]){const i=e[s];switch(s){case"proton":case"carbon":{const l=Vg({spectrum:i,inputOptions:t,experiment:s,color:o});n.push(l);break}case"cosy":case"hsqc":case"hmbc":{const l=jg({spectrum:i,inputOptions:t,experiment:s,color:o});n.push(l);break}}}return n}function Vg(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,ranges:l,nucleus:r}=t,{"1d":{nbPoints:a},frequency:u}=n,d=Oa(r,u),{x:h,y:m}=sp(i,k(b({},n["1d"][r]),{frequency:d,nbPoints:a})),g=lt({data:{x:h,im:null,re:m},display:{color:s},info:{nucleus:r,originFrequency:d,baseFrequency:d,pulseSequence:"prediction",solvent:"",experiment:o,isFt:!0}},[]);return g.ranges.values=yn(l,g),Cn(g),g}function Bg(e){return e.reduce((t,n)=>{const l=n,{signals:o}=l,s=G(l,["signals"]),i=o.reduce((r,a)=>{const g=a,{x:u,y:d,id:h}=g,m=G(g,["x","y","id"]);return r.push(b({id:h||K(),kind:"signal",x:k(b({},u),{originDelta:u.delta||0}),y:k(b({},d),{originDelta:d.delta||0})},m)),r},[]);return t.push(k(b({id:K()},s),{signals:i,kind:Ze.signal})),t},[])}function jg(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,zones:l,nuclei:r}=t,a=n["1d"][r[0]],u=n["1d"][r[1]],d=Xg(r),h=Oa(r,n.frequency),m=ip(i,{from:{x:a.from,y:u.from},to:{x:a.to,y:u.to},nbPoints:{x:n["2d"].nbPoints.x,y:n["2d"].nbPoints.y},width:d}),g=to({data:k(b({},m),{noise:.01}),display:{positiveColor:o==="hmbc"?"#e68337":s},info:{nucleus:r,originFrequency:h,baseFrequency:h,pulseSequence:o,experiment:"2d"}},[]);return g.zones.values=Bg(l),g}function Xg(e){return e[0]===e[1]?.03:{x:.03,y:.32}}function Oa(e,t){return typeof e=="string"?e==="13C"?t*.25:t:e[0]===e[1]?`${t},${t}`:`${t},${t*.25}`}const hi=[{key:"outOfLimit",color:"red"},{key:"ambiguousAttachment",color:"orange"},{key:"notAttached",color:"blue"},{key:"incomplete",color:"red"}],Yg=hi.map(e=>e.key),$a={C:.25,H:.02,N:.25,F:.25,Si:.25,P:.25},F={zoom:{id:"zoom",label:"Zoom",hasOptionPanel:!1,isFilter:!1},peakPicking:{id:"peakPicking",label:"Peaks Picking",hasOptionPanel:!0,isFilter:!1},integral:{id:"integral",label:"integral Tool",hasOptionPanel:!1,isFilter:!1},zone2D:{id:"zone2D",label:"Zone Tool",hasOptionPanel:!0,isFilter:!1},slicingTool:{id:"slicingTool",label:"Slicing Tool",hasOptionPanel:!1,isFilter:!1},HMove:{id:"HMove",label:"Move spectrum horizontally",hasOptionPanel:!1,isFilter:!1},equalizerTool:{id:"equalizerTool",label:"Equalizer Tool",hasOptionPanel:!1,isFilter:!1},rangesPicking:{id:"rangesPicking",label:"Ranges Picking",hasOptionPanel:!0,isFilter:!1},zeroFilling:{id:ii,label:da,hasOptionPanel:!0,isFilter:!0},phaseCorrection:{id:$t,label:ra,hasOptionPanel:!0,isFilter:!0},baseLineCorrection:{id:"baseLineCorrection",label:"baseline correction",hasOptionPanel:!0,isFilter:!0},generalSelector:{id:"generalSelector",label:"range general selector",hasOptionPanel:!1,isFilter:!1},editRange:{id:"editRange",label:"edit range",hasOptionPanel:!1,isFilter:!1},multipleSpectraAnalysis:{id:"multipleSpectraAnalysis",label:"Multiple Spectra Analysis",hasOptionPanel:!1,isFilter:!1},exclusionZones:{id:"exclusionZones",label:"Exclusion Zones",hasOptionPanel:!1,isFilter:!1},databaseRangesSelection:{id:"databaseRangesSelection",label:"Filter Database",hasOptionPanel:!1,isFilter:!1}};function Gg(e,t){let n=[];const{baseFrequency:o=500}=t;for(const s of e){const{jCoupling:i,delta:l,diaIDs:r=[],multiplicity:a,integration:u}=s,d=Zg({delta:l,js:i,frequency:o});if(i&&a&&i.length===a.length){i.sort((h,m)=>m-h);for(let h=0;h<i.length;h++)i[h].multiplicity=a[h]}n.push(k(b({},d),{integration:u,signals:[{js:i,delta:l,diaIDs:r,multiplicity:a}]}))}t.ranges.values=yn(Ug(n),t)}function Zg(e={}){const{delta:t,js:n=[],frequency:o}=e;let s=.5;for(let i of n)s+=i.coupling;return s/=o,{from:t-s,to:t+s}}function Ug(e){e.sort((t,n)=>t.from-n.from);for(let t=0;t<e.length-1;t++)e[t].to>e[t+1].from&&(e[t].to=Math.max(e[t+1].to,e[t].to),e[t].signals=e[t].signals.concat(e[t+1].signals),e[t].integration+=e[t+1].integration,e.splice(t+1,1),t--);return e}const Wg=["y","x"];function Kg(e,t){let n=[];const o=no(t),{baseFrequency:s}=t.info,i={x:s[0],y:s[1]};for(const l of e){let r={x:{},y:{},id:K(),kind:"signal"},a={id:K(),kind:"signal",peaks:[]},u={x:10,y:10};for(let d of Wg){let{coupling:h=[],delta:m,diaIDs:g=[]}=l[d];for(let x of h)u[d]+=x.coupling;if(l.activeCoupling){const{activeCoupling:x=[]}=l;for(let y of x)u[d]+=y.coupling}u[d]/=i[d],r[d]={from:m-u[d],to:m+u[d]},a[d]={delta:m,diaIDs:g,originDelta:m-o[`${d}Shift`]}}n.push(k(b({},r),{signals:[a]}))}t.zones.values=n}async function qg(e,t){const o=await new an().loadAsync(e.binary),s=await Qg(o.files),i=await lp.toJSON({sdf:s[0],zipFiles:o.files});let{spectra:l,molecules:r=[]}=i,a={spectra:[],molecules:r};for(const u of l){const{file:d,jcampURL:h}=u.source;let m=await Jg(d,{jcampURL:h},t)||[];for(const g of m){const{info:x}=g;x.isFid||(x.dimension>1?Kg(u.signals,g):Gg(u.signals,g))}a.spectra.push(...m)}return a}async function Jg(e,t={},n={}){const{xy:o=!0,noContours:s=!0,keepOriginal:i=!0,jcampURL:l}=t;switch(e.extension){case"jdx":case"dx":return Fa([e],n);case"zip":return Pa({xy:o,noContours:s,keepOriginal:i},e.binary,n);default:if(!l)return}}async function Qg(e){let t=[];for(const n in e){const o=n.split("/");if(/^[^.].+sdf$/.exec(o[o.length-1])){const s=o[o.length-1].replace(/\.sdf/,""),i=o.slice(0,o.length-1).join("/"),l=await e[n].async("string");let r=rp(`${l}`,{mixedEOL:!0});r.filename=s,r.root=i!==""?`${i}/`:"",t.push(r)}}return t}function Ie(e,t,n){const o=e.find(s=>s.id===t);if(!(o&&n===!0&&o.display.isVisible===!1))return o}function Ha(e,t){for(let n of e.ranges.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function Bn(e,t){for(let n of e.zones.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function fi(e,t){for(let n of e.ranges.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function Io(e,t){for(let n of e.zones.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function mi(e,t,n,o){const s=Ie(e,t,o);if(s){if(s.info.dimension===1){const i=fi(s,n);if(i)return i.id}else if(s.info.dimension===2){const i=Io(s,n);if(i)return i.id}}}function zt(e,t=null){const{width:n,margin:o,xDomains:s,xDomain:i,mode:l}=e,r=l==="RTL"?[n-o.right,o.left]:[o.left,n-o.right];return qe(t?s[t]:i,r)}function Mo(e,t=null){const{height:n,margin:o,verticalAlign:s,yDomain:i,yDomains:l}=e,r=s.align==="center"?(n-30)/2:n-o.bottom-30;let a=[];return t===null||l[t]===void 0?a=[0,i[1]]:a=[0,l[t][1]],qe(a,[r,o.top])}function ex(e){const{height:t,margin:n,verticalAlign:o,integralsYDomains:s,activeSpectrum:i}=e,l=o.align==="center"?t/2:t;return qe((i==null?void 0:i.id)&&s&&s[i==null?void 0:i.id]?s[i==null?void 0:i.id]:[0,0],[l*.3,n.top+l*.1])}function Xt(e,t){const{startX:n,endX:o}=t,s=zt(e),i=s.invert(n),l=s.invert(o),r=[0,0];return i>l?(r[0]=l,r[1]=i):(r[0]=i,r[1]=l),r}function kt(e){return typeof e=="string"?e:e.join(",")}function tx(e){let t=e.data.filter(n=>kt(n.info.nucleus)===e.activeTab&&n.info.dimension===1);if(e.activeSpectrum){const n=t.findIndex(o=>{var s;return o.id===((s=e.activeSpectrum)==null?void 0:s.id)});if(n!==-1){const o=t[n].info.isFid||!1;t=t.filter(s=>s.info.isFid===o)}}else t=t.filter(n=>n.info.isFid===!1);return t}function za(e){let t=[],n=[],o={},s={};const i=tx(e);try{t=i.reduce((l,r)=>{const{display:a,data:u}=r,d=[u.x[0],u.x[u.x.length-1]];return s[r.id]=d,a.isVisible&&(l=l.concat(d)),l},[]),n=i.reduce((l,r)=>{const{display:a}=r,u=vn(r),d=mt(u.y);return o[r.id]=d,a.isVisible&&(l=l.concat(d)),l},[])}catch(l){console.log(l)}return{xDomain:mt(t),yDomain:mt(n),yDomains:o,xDomains:s}}function nx(e){let t=[],n=[],o={},s={};const{activeTab:i,tabActiveSpectrum:l,data:r}=e,a=i.split(",");try{t=r.reduce((h,m)=>{var g;return Os(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minX,m.data.maxX])),h},[]),n=r.reduce((h,m)=>{var g;return Os(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minY,m.data.maxY])),h},[])}catch(h){console.log(h)}const u=a.map(h=>{var m;return(m=l[h])==null?void 0:m.id}),d=r.reduce((h,m)=>u.includes(m.id)&&m.info.dimension===1?h.concat(m):h.concat([]),[]);try{s=d.reduce((h,m)=>{const{x:g}=m.data,x=[g[0],g[g.length-1]];return h[m.id]=x,h},{}),o=d.reduce((h,m)=>{const g=mt(m.data.re);return h[m.id]=g,h},{})}catch(h){console.log(h)}return{xDomain:mt(t),yDomain:mt(n),yDomains:o,xDomains:s}}function se(e,t){const{yDomain:n={isChanged:!0,isShared:!0}}=t||{};let o;e.activeTab&&(e.displayerMode===X.DM_1D?o=za(e):o=nx(e),e.xDomain=o.xDomain,e.xDomains=o.xDomains,e.originDomain=o,n.isChanged?(e.yDomain=o.yDomain,e.displayerMode===X.DM_1D&&n.isShared?e.yDomains=Object.keys(o.yDomains).reduce((s,i)=>(s[i]=o.yDomain,s),{}):e.yDomains=o.yDomains):e.originDomain=k(b({},e.originDomain),{xDomain:o.xDomain,xDomains:o.xDomains}))}function ox(e){const{integrals:t,ranges:n}=e;let o=Number.NEGATIVE_INFINITY;for(const s of t.values)o=Math.max(o,s.absolute);for(const s of n.values)o=Math.max(o,s.absolute);return[0,o]}function Wo(e,t){var n;for(const o of Array.isArray(t)?t:[t])((n=o==null?void 0:o.info)==null?void 0:n.dimension)===1&&(e.integralsYDomains[o.id]=ox(o))}function sx(e,t){e.originDomain=t}function ix(e,t){e.xDomain=t}function lx(e,t){e.yDomain=t}function rx(e){const{xDomain:t,yDomain:n,xDomains:o,yDomains:s}=e.originDomain;e.xDomain=t,e.yDomain=n,e.xDomains=o,e.yDomains=s}function et(e){var n;const t=e.data.filter(o=>e.xDomains[o.id]&&kt(o.info.nucleus)===e.activeTab);e.mode=((n=t[0])==null?void 0:n.info.isFid)?"LTR":"RTL"}function ax(e,t){const{activeSpectrum:n,data:o,xDomain:s,molecules:i,activeTab:l}=e;if(n==null?void 0:n.id){const{index:r}=n,a=o[r],[u,d]=s,h=Ge(a.data.x,u),m=Ge(a.data.x,d),g=b({factorStd:8,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},t);wa(a,k(b({},g),{windowFromIndex:h,windowToIndex:m,molecules:i,nucleus:l})),wt(e),Wo(e,a)}}function cx(e){const t={factorStd:8,minMaxRatio:.05,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},{data:n,activeTab:o,molecules:s}=e;for(const i of n)i.info.dimension===1&&(wa(i,{peakPicking:t,molecules:s,nucleus:o}),wt(e))}function so(e,t,n){return e.data[t].ranges.values.findIndex(o=>o.id===n)}function ux(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,{id:s=null,assignmentData:i}=t.payload.data,l=e.data[o];if(s){const r=so(e,o,s);Ht(i,[l.ranges.values[r]]),l.ranges.values.splice(r,1)}else Ht(i,l.ranges.values),l.ranges.values=[];St(l),wt(e)}}function dx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:l}=t.payload.data,r=so(n,s,i.id),a=e.data[s].ranges.values[r];(a==null?void 0:a.signals)&&(a.signals[i.tableMetaInfo.signalIndex].kind=l,a.kind=qn.includes(l)?Ze.signal:Ze.mixed,St(e.data[s]),wt(e))}}function px(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{editedRowData:i,assignmentData:l}=t.payload;e.toolOptions.data.tempRange=null;const r=$n(i);delete r.tableMetaInfo,delete r.rowKey,Ht(l,[r]);const a=so(n,s,r.id);e.data[s].ranges.values[a]=r,St(e.data[s]),wt(e)}}function Va(e,t){const{spectrum:n,range:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:l=!0}=t.payload;if(n&&o){const r=e.data.find(h=>h.id===n.id),a=r.ranges.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),d=$n(ze(o),"signal",{signalIndex:u});l===!0&&Ht(i,[{signals:[s]}]),d.signals.splice(u,1),r.ranges.values[a]=d,d.signals.length===0&&(Ht(i,[d]),r.ranges.values.splice(a,1)),wt(e)}}function Ba(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,{assignmentData:s,rangeData:i=null,signalIndex:l=-1}=t.payload;if(i){const r=so(e,o,i.id),a=ze(e.data[o].ranges.values[r]);let u={},d=i.id;i&&l===-1?u=$n(a,"range"):(u=$n(a,"signal",{signalIndex:l}),d=i.signals[l].id),Ht(s,[{id:d}]),e.data[o].ranges.values[r]=u}else{const r=e.data[o].ranges.values.map(a=>$n(a));e.data[o].ranges.values=r,Ht(s,r)}}}function hx(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,{rangeData:s,diaIDs:i,signalIndex:l,nbAtoms:r}=t.payload,a=(h,m=0)=>h+m,u=so(e,o,s.id),d=e.data[o].ranges.values[u];l===void 0?(d.diaIDs=i,d.nbAtoms=a(r,d.nbAtoms)):(d.signals[l].diaIDs=i,d.signals[l].nbAtoms=a(r,d.signals[l].nbAtoms))}}function fx(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum;Qm(e.data[o],t.data)}}function mx(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o==null?void 0:o.id){const{index:i}=o,l=n[i];di(l.ranges,{options:t,nucleus:s}),St(l,!0)}}function gx(e,t){const{startX:n,endX:o}=t.payload,{activeSpectrum:s,activeTab:i,molecules:l}=e,r=Xt(e,{startX:n,endX:o});if(s==null?void 0:s.id){const{index:a}=s,[u,d]=r;Jm(e.data[a],{from:u,to:d,nucleus:i,molecules:l}),wt(e),Wo(e,e.data[a])}}function xx(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:s}=e.activeSpectrum;eg(e.data[s],n)}}function bx(e,t){var i;const{rangeID:n,signalID:o,value:s}=t.payload;if((i=e.activeSpectrum)==null?void 0:i.id){const{index:l}=e.activeSpectrum,r=tg(e.data[l],{rangeID:n,signalID:o,newSignalValue:s});Ae(e.data[l],[{name:Qn,options:r}]),Sn(e.data[l]),wt(e),se(e)}}function wt(e){Ko(e)}function yx(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:s}=e.activeSpectrum;e.data[s].ranges.options.isSumConstant=!n}}function vx(e,t){e.toolOptions.data.tempRange=t.payload.tempRange}function Cx(e){e.toolOptions.data.showMultiplicityTrees=!e.toolOptions.data.showMultiplicityTrees}function Sx(e){e.toolOptions.data.showRangesIntegrals=!e.toolOptions.data.showRangesIntegrals}function kx(e){e.toolOptions.data.showJGraph=!e.toolOptions.data.showJGraph}function wx(e,t){return e.signals?e.signals.reduce((n,o)=>o[t].nbAtoms?n+o[t].nbAtoms:n,0):0}function ys(e,t){e[t].nbAtoms=wx(e,t),e[t].nbAtoms===0&&delete e[t].nbAtoms}function xl(e,t){return delete e[t].diaIDs,delete e[t].nbAtoms,e.signals.forEach(n=>{delete n[t].diaIDs,delete n[t].nbAtoms}),e}function Ex(e){return e.kind===Ze.signal}function Ro(e,t,n,o){return t!==void 0&&o!==void 0?(t===!0?(delete e[o].diaIDs,delete e[o].nbAtoms):typeof n=="number"&&n!==-1&&e.signals[n]&&(delete e.signals[n][o].diaIDs,delete e.signals[n][o].nbAtoms),ys(e,o)):o!==void 0?(xl(e,o),ys(e,o)):["x","y"].forEach(s=>{xl(e,s),ys(e,s)}),e}function pn(e,t,n){const o=t.reduce((s,i)=>(i.id&&s.push(i.id),i.signals&&(s=s.concat(i.signals.map(l=>l.id,[]))),s),[]);n?e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:n}}):(e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"x"}}),e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"y"}}))}const Z={TOP_1D:"TOP_1D",LEFT_1D:"LEFT_1D",CENTER_2D:"CENTER_2D"};function Ax({width:e,height:t,margin:n}){return{CENTER_2D:{startX:n.left,startY:n.top,endX:e-n.right,endY:t-n.bottom},TOP_1D:{startX:n.left,startY:0,endX:e-n.right,endY:n.top},LEFT_1D:{startX:0,startY:n.top,endX:n.left,endY:t-n.bottom}}}function on(e,t){for(const n of Object.keys(e))if(t.startX>=e[n].startX&&t.startX<=e[n].endX&&t.startY>=e[n].startY&&t.startY<=e[n].endY)return n;return null}function Ee(e){const{width:t,margin:n,xDomain:o}=e;return qe(o,[t-n.right,n.left])}function be(e,t=!1){const{height:n,margin:o,yDomain:s}=e;return qe(s,t?[n-o.bottom,o.top]:[o.top,n-o.bottom])}function hn(e,t,n=10){return qe(e,[t-n,n])}function Tx(e,t){const{startX:n,startY:o,endX:s,endY:i}=t,l=Ee(e),r=be(e),a=n*1e6>s*1e6?s:n,u=n*1e6>s*1e6?n:s,d=o*1e6>i*1e6?i:o,h=o*1e6>i*1e6?o:i,m=r.invert(d),g=l.invert(a),x=r.invert(h),y=l.invert(u);return{fromX:g,fromY:m,toX:y,toY:x}}function Dx(e,t){e.toolOptions.data.zonesNoiseFactor=t.payload}function Ix(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,s=Tx(e,t),i=e.data[o],l=Cg(oe(i),{selectedZone:s,thresholdFactor:e.toolOptions.data.zonesNoiseFactor,convolutionByFFT:!1});i.zones.values=i.zones.values.concat(l),ct(e)}}function Mx(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,[s,i]=e.xDomain,[l,r]=e.yDomain;t.selectedZone={fromX:s,toX:i,fromY:l,toY:r};const a=e.data[o],u=Ia(oe(a),t);a.zones.values=a.zones.values.concat(u),ct(e)}}function Rx(e){for(const t of e.data)if(t.info.dimension===2){const{minX:n,maxX:o,minY:s,maxY:i}=t.data,l={selectedZone:{fromX:n,toX:o,fromY:s,toY:i},thresholdFactor:1},r=Ia(oe(t),l);t.zones.values=t.zones.values.concat(r),ct(e)}}function Nx(e,t){var s;const{zoneID:n,signal:o}=t.payload;if((s=e.activeSpectrum)==null?void 0:s.id){const{index:i}=e.activeSpectrum,{xShift:l,yShift:r}=bg(e.data[i],n,o);let a=[];l!==0&&a.push({name:ri,options:l}),r!==0&&a.push({name:ai,options:r}),Ae(e.data[i],a),oo(e.data[i]),se(e),ct(e)}}function io(e,t,n){return e.data[t].zones.values.findIndex(o=>o.id===n)}function Px(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:l}=t.payload,r=io(n,s,i.id),a=e.data[s].zones.values[r];a.signals[i.tableMetaInfo.signalIndex].kind=l,a.kind=qn.includes(l)?Ze.signal:Ze.mixed,ct(e)}}function Fx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{id:i,assignmentData:l}=t.payload;if(i){const r=e.data[s].zones.values.find(u=>u.id===i);pn(l,[r||{}]);const a=io(n,s,i);e.data[s].zones.values.splice(a,1)}else pn(l,e.data[s].zones.values),e.data[s].zones.values=[];ct(e)}}function ja(e,t){const{spectrum:n,zone:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:l=!0}=t.payload;if(n&&o){const r=e.data.find(h=>h.id===n.id),a=r.zones.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),d=Ro(ze(o),!1,u,void 0);l===!0&&pn(i,[{signals:[s]}],void 0),d.signals.splice(u,1),r.zones.values[a]=d,d.signals.length===0&&(pn(i,[d]),r.zones.values.splice(a,1)),ct(e)}}function _x(e,t){const{spectrum:n,zone:o,signal:s,pathLength:i}=t.payload;if(n&&o){const l=e.data.find(d=>d.id===n.id),r=l.zones.values.findIndex(d=>d.id===o.id),a=o.signals.findIndex(d=>d.id===s.id),u=Ro(ze(o),!1,a,void 0);u.signals[a].j=k(b({},u.signals[a].j),{pathLength:i}),l.zones.values[r]=u,ct(e)}}function Xa(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{zoneData:i=null,assignmentData:l,isOnZoneLevel:r=void 0,signalIndex:a=-1,axis:u=void 0}=t.payload;if(i){const d=io(n,s,i.id),h=ze(e.data[s].zones.values[d]),m=Ro(h,r,a,u);pn(l,[{id:i.signals[a].id}],u),e.data[s].zones.values[d]=m}else{const d=e.data[s].zones.values.map(h=>Ro(h));e.data[s].zones.values=d,pn(l,d)}}}function Lx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{zoneData:i,diaIDs:l,axis:r,signalIndex:a,nbAtoms:u}=t.payload,d=(g,x=0)=>g+x,h=io(n,s,i.id),m=e.data[s].zones.values[h];a===void 0?(m[r].diaIDs=l,m[r].nbAtoms=d(u,m[r].nbAtoms)):(m.signals[a][r].diaIDs=l,m.signals[a][r].nbAtoms=d(u,m.signals[a][r].nbAtoms))}}function Ox(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{editedRowData:i}=t.payload;delete i.tableMetaInfo;const l=io(n,s,i.id);e.data[s].zones.values[l]=i,i.signals&&i.signals.forEach(r=>{var a;ap(e.correlations.values,r.id,(a=r.j)==null?void 0:a.pathLength)}),ct(e)}}function ct(e){Ko(e)}function Ko(e){const{data:t,correlations:n}=e;e.correlations=Wn(t,k(b({},n.options),{values:ze(n.values)}))}function $x(e,t){const n=oe(e),{data:o,correlations:s}=n,{mf:i}=t;(s.options.mf===""||s.options.mf!==i)&&(e.correlations=Wn(o,k(b({},s.options),{mf:i,values:ze(s.values)})))}function Hx(e,t){const n=oe(e),{data:o,correlations:s}=n,{tolerance:i}=t;e.correlations=Wn(o,k(b({},s.options),{tolerance:i,values:ze(s.values)}))}function zx(e,t){const n=oe(e),{correlations:o}=n,{id:s,correlation:i,options:l}=t;e.correlations=br(o,s,i),l&&(e.correlations=k(b({},e.correlations),{options:b(b({},e.correlations.options),l)})),Ko(e)}function Vx(e,t){const{correlations:n,options:o}=t,s=oe(e);let i=ze(s.correlations);n.forEach(l=>{i=br(i,l.id,l)}),e.correlations=i,o&&(e.correlations=k(b({},e.correlations),{options:b(b({},e.correlations.options),o)})),Ko(e)}function Bx(e,t){const{correlation:n,assignmentData:o}=t;n.link.forEach(s=>{const i=Ie(e.data,s.experimentID,!1);if(i){if(i.info.dimension===1){const l=fi(i,s.signal.id),r=Ha(i,s.signal.id);Va(e,{payload:{spectrum:i,range:l,signal:r,assignmentData:o}})}else if(i.info.dimension===2){const l=Io(i,s.signal.id),r=Bn(i,s.signal.id);ja(e,{payload:{spectrum:i,zone:l,signal:r,assignmentData:o}})}}})}const Hn={HORIZONTAL:"HORIZONTAL",VERTICAL:"VERTICAL",STEP_HORIZONTAL:"STEP_HORIZONTAL",FULL:"FULL"};function uo(e,t,n={}){const{factor:o=1,invert:s=!1}=n,l=(Math.abs(e.deltaY)<100?e.deltaY*100:e.deltaY)*(s?-.001:.001)*o,r=l<0?-1/(l-1):1+l,[a,u]=t;return[a*r,u*r]}function Lt(e,t={}){const{height:n,margin:o,activeSpectrum:s}=e,{scale:i=1,spectrumID:l=null}=t;if(s===null&&l===null){const{shareYDomain:r,yDomain:a,yDomains:u}=e.originDomain;e.yDomains=Object.keys(e.yDomains).reduce((d,h)=>{const m=qe(r?a:u[h],[n-o.bottom,o.top]),[g,x]=r?a:u[h],C=Math.max(Math.abs(x),Math.abs(g))===x?0:g,S=ol.translate(0,(Math.sign(C)>=0,m(C))).scale(i).translate(0,-m(0)).rescaleY(m).domain();return d[h]=S,d},{})}else{const r=l||(s==null?void 0:s.id);if(r){const a=qe(e.originDomain.yDomains[r],[n-o.bottom,o.top]),d=ol.translate(0,a(0)).scale(i).translate(0,-a(0)).rescaleY(a).domain();e.yDomains=k(b({},e.yDomains),{[r]:d})}}}function jx(e,t){const{ranges:n,info:o}=t.payload,s=xa(n,o,e.usedColors);e.data.push(s),se(e,{yDomain:{isShared:!1}}),Lt(e,{scale:.8,spectrumID:s.id})}function Xx(e,t){e.width=t}function Yx(e,t,n){e.width=t,e.height=n}function gi(e,t){return t.filter(n=>kt(n.info.nucleus)===e)}function qo(e,t){!e[t]&&!Array.isArray(e[t])&&(e[t]=[]);const n=Gx(e[t]),o=Zx(e[t]),s=Ux(e[t]),i=()=>e[t]=[];return{historyStack:e[t],push:n,pop:o,getLast:s,clear:i}}function Gx(e){return t=>{e.push(t)}}function Zx(e){return()=>e.pop()?e[e.length-1]:null}function Ux(e){return()=>e.length===0?null:e[e.length-1]}function bl(e){const t=e.split(",");return t.reduce((n,o)=>{const s=t.length===2?100:0;return n+=Number(o.replace(/\D/g,""))+s,n},0)}function Jo(e){return(t,n=!1)=>{const o=t.reduce((s,i)=>{const l=i.info[e];return s[l]=(s[l]||[]).concat(i),s},{});return n?Object.keys(o).sort((s,i)=>bl(s)-bl(i)).reduce((s,i)=>(s[i]=o[i],s),{}):o}}function xt(e,t){var n;if(e.data&&e.data.length>0){let o=[];switch(["auto-check","stack"].includes(t.align||"")&&(o=e.data.filter(s=>s.info.nucleus===(t==null?void 0:t.activeTab)?t.activeTab:e.activeTab&&s.info.dimension===1)),t.align){case"auto-check":case"bottom":case"center":{if(t.align==="center"||t.align==="auto-check"&&((n=o[0])==null?void 0:n.info.isFid)&&!o.some(s=>s.info.isFid===!1)){const s=e.height/2;e.verticalAlign.align="center",e.verticalAlign.verticalShift=s}else e.verticalAlign.align="bottom",e.verticalAlign.verticalShift=Ea;break}case"stack":{e.verticalAlign.align="stack";const s=o.filter(i=>i.display.isVisible===!0);e.verticalAlign.verticalShift=Math.floor((e.height-e.margin.bottom)/(s.length+2));break}default:return}}}function Wx(e,t){const{activeTab:n,data:o,activeSpectrum:s,zoom:i,xDomain:l,xDomains:r,yDomain:a,yDomains:u,originDomain:d,margin:h,displayerMode:m,tabActiveSpectrum:g}=e;if(n){const y=Jo("nucleus")(o),C=m===X.DM_2D?y[n].reduce((v,S)=>(v[S.id]=S.processingController.getLevel(),v),{}):null;e.keysPreferences[t]={activeTab:n,activeSpectrum:s,displayerMode:m,tabActiveSpectrum:g,zoom:i,xDomain:l,xDomains:r,yDomain:a,yDomains:u,originDomain:d,level:C,margin:h,data:y[n].reduce((v,S)=>(v[S.id]={display:{color:S.display.color,isVisible:S.display.isVisible,isPeaksMarkersVisible:S.display.isPeaksMarkersVisible}},v),{})}}}function Kx(e,t){const n=e.keysPreferences[t];if(n)if(e.activeTab=n.activeTab,e.data.forEach((o,s)=>{kt(o.info.nucleus)===n.activeTab&&(e.data[s].display=Object.assign(ze(o.display),n.data[o.id].display))}),e.displayerMode=n.displayerMode,e.tabActiveSpectrum=n.tabActiveSpectrum,e.activeSpectrum=n.activeSpectrum,e.margin=n.margin,se(e),e.xDomain=n.xDomain,e.xDomains=n.xDomains,e.yDomain=n.yDomain,e.originDomain=n.originDomain,e.yDomains=n.yDomains,e.displayerMode===X.DM_2D)for(const o of Object.keys(n.level)){const{levelPositive:s,levelNegative:i}=n.level[o],l=e.data.findIndex(a=>a.id===o),r=e.data[l].processingController;r.setLevel(s,i),e.contours[o]=r.drawContours()}else e.zoom=n.zoom}function qx(e){const{activeSpectrum:t,data:n}=e;if(t){const o=n[t==null?void 0:t.index].data,s=cp(o.re),i=o.re.findIndex(l=>l===s);return{xValue:o.x[i],yValue:s,index:i}}}function Jx(e,t){var o;const n=(o=e.activeSpectrum)==null?void 0:o.id;if(t===$t){const s=Qo(e,$t,{rollback:!0,searchBy:"name",returnCurrentDatum:!0});e.tempData=yr(e).data,s&&(e.tempData[s==null?void 0:s.index]=s==null?void 0:s.datum);const{xValue:i,index:l}=qx(e)||{xValue:0,index:0};e.toolOptions.data.pivot={value:i,index:l}}else if(e.toolOptions.selectedTool===F.phaseCorrection.id){e.toolOptions.data.activeFilterID=null;const s=e.data.findIndex(i=>i.id===n);e.data[s].data=e.tempData[s].data}}function No(e,t=!0){e.toolOptions.data.tempRange=null,xi(e,null),t&&(e.toolOptions.selectedTool=F.zoom.id),e.toolOptions.data.baseLineZones=[],e.toolOptions.data.activeFilterID&&Qo(e),e.tempData&&(e.tempData=null,se(e))}function We(e,t=!1){(e.toolOptions.selectedTool&&F[e.toolOptions.selectedTool].isFilter||!t)&&No(e)}function Qx(e,t){const{selectedTool:n}=t.payload;(e==null?void 0:e.data.length)>0&&(n?(n===F.editRange.id?e.toolOptions.data.tempRange=t.payload.tempRange:e.toolOptions.data.tempRange=null,n!==e.toolOptions.selectedTool&&No(e,!1),e.toolOptions.selectedTool=n,F[n].hasOptionPanel&&xi(e,n),F[n].isFilter&&Jx(e,n)):No(e,!1),Ya(e))}function xi(e,t){e.toolOptions.selectedOptionPanel=t}function eb(e){const t=["stack","center"].includes(e.verticalAlign.align)?"bottom":"center";xt(e,{align:t})}function tb(e){const t=e.verticalAlign.align==="stack"?"bottom":"stack";xt(e,{align:t})}function nb(e,{from:t,to:n}){const o=zt(e);let s=o.invert(t);const i=o.invert(n);let l=[];s>i?l=[i,s]:l=[s,i];const r=e.toolOptions.data.baseLineZones.slice();r.push({id:K(),from:l[0],to:l[1]}),e.toolOptions.data.baseLineZones=r}function ob(e,t){const n=oe(e);e.toolOptions.data.baseLineZones=n.toolOptions.data.baseLineZones.baseLineZones.filter(o=>o.id!==t)}function sb(e){if(e.activeSpectrum!=null){const{index:t}=e.activeSpectrum;e.data[t].display.isRealSpectrumVisible=!e.data[t].display.isRealSpectrumVisible,se(e)}}function ib(e,t){const n=e.displayerMode===X.DM_2D,o=zt(e),s=n?be(e):Mo(e),i=o.invert(t.startX),l=o.invert(t.endX),r=s.invert(t.startY),a=s.invert(t.endY),u=i>l?[l,i]:[i,l],d=r>a?[a,r]:[r,a],h=qo(e.zoom.history,e.activeTab);if(e.displayerMode===X.DM_2D){switch(t.trackID){case Z.CENTER_2D:e.xDomain=u,e.yDomain=d;break;case Z.TOP_1D:e.xDomain=u;break;case Z.LEFT_1D:e.yDomain=d;break}h&&h.push({xDomain:e.xDomain,yDomain:e.yDomain})}else e.xDomain=u,h&&h.push({xDomain:u,yDomain:d})}function lb(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const s=zt(e).invert(t),i=e.data[e.activeSpectrum.index],l=Ge(i.data.x,s);e.toolOptions.data.pivot={value:s,index:l}}}function rb(e,t){const n=e.tabActiveSpectrum[e.activeTab.split(",")[t]];return(n==null?void 0:n.id)?n.id:null}function ab(e,t){const{event:n,trackID:o,selectedTool:s}=t,{activeSpectrum:i,toolOptions:{data:{showRangesIntegrals:l}},displayerMode:r}=e;if(r===X.DM_2D){const a=o===Z.TOP_1D?0:o===Z.LEFT_1D?1:null;if(a!==null){const u=rb(e,a);if(u){const d=e.yDomains[u];e.yDomains[u]=uo(n,d)}}}else if(i==null?void 0:i.id)if((l||s===F.integral.id)&&n.shiftKey){const a=e.integralsYDomains[i==null?void 0:i.id];e.integralsYDomains[i==null?void 0:i.id]=uo(n,a)}else{const a=e.yDomains[i==null?void 0:i.id];e.yDomains[i==null?void 0:i.id]=uo(n,a)}else{const a=gi(e.activeTab,e.data);for(const u of a){const d=e.yDomains[u.id];e.yDomains[u.id]=uo(n,d)}}}function cb(e,t){if((e==null?void 0:e.data.length)>0){const{zoomType:n,trackID:o}=t,s=qo(e.zoom.history,e.activeTab);if(e.displayerMode===X.DM_1D)switch(n){case Hn.HORIZONTAL:{e.xDomain=e.originDomain.xDomain,s.clear();break}case Hn.VERTICAL:Lt(e,{scale:.8});break;case Hn.STEP_HORIZONTAL:{const i=s.pop();e.xDomain=i?i.xDomain:e.originDomain.xDomain,Lt(e,{scale:.8});break}default:{e.xDomain=e.originDomain.xDomain,Lt(e,{scale:.8});break}}else{const{xDomain:i,yDomain:l,yDomains:r}=e.originDomain;if([Z.TOP_1D,Z.LEFT_1D,Z.CENTER_2D].includes(o)){const a=s.pop();e.xDomain=a?a.xDomain:i,e.yDomain=a?a.yDomain:l}else s.clear(),e.xDomain=i,e.yDomain=l,e.yDomains=r}}}function yl(e,t){const n=e.activeTab.split(","),o=e.tabActiveSpectrum[n[t]];return(o==null?void 0:o.id)&&!e.data[o.index].info.isFid}function Ya(e){if(e.displayerMode===X.DM_2D&&e.toolOptions.selectedTool!==F.slicingTool.id){const t=yl(e,0)?Dt["2D"].top:Dt["1D"].top,n=yl(e,1)?Dt["2D"].left:Dt["1D"].left;e.margin=k(b({},Dt["2D"]),{top:t,left:n})}else e.toolOptions.selectedTool===F.slicingTool.id?e.margin=Dt["2D"]:e.displayerMode===X.DM_1D&&(e.margin=Dt["1D"])}function ub(e,t){if(e.displayerMode===X.DM_2D){let n={};for(const o of t[e.activeTab])n[o.id]=o.processingController.drawContours();e.contours=n}}function db(e,t){e.displayerMode=t&&t.some(n=>n.info.dimension===2)?X.DM_2D:X.DM_1D}function pb(e,t){let n=[];const o={},s=Object.keys(t).sort((i,l)=>i.split(",").length>l.split(",").length?-1:1);for(let i of s){const l=t[i],r=i.split(",").length;if(r===2&&n.push(i),l.length===1){const a=e.data.findIndex(u=>u.id===l[0].id);o[i]={id:l[0].id,index:a}}else{const a=t[i],u=a.length;if(u>=2){const d=a.filter(h=>!h.info.isFid);if(d.length>0&&(r===2||r===1&&u!==d.length)){const h=e.data.findIndex(m=>m.id===d[0].id);o[i]={id:d[0].id,index:h}}else o[i]=null}else o[i]=null}}return e.tabActiveSpectrum=o,n}function Ga(e,t,n,o=!1){const s=Object.keys(t).sort((i,l)=>i.split(",").length>l.split(",").length?-1:1);if(JSON.stringify(s)!==JSON.stringify(Object.keys(e.tabActiveSpectrum))||o){const i=pb(e,t);i.length>0&&n==null?(e.activeSpectrum=e.tabActiveSpectrum[i[0]],e.activeTab=i[0]):(e.activeSpectrum=n&&e.tabActiveSpectrum[n],e.activeTab=n)}else e.activeTab=n,e.activeSpectrum=e.tabActiveSpectrum[n];db(e,t[e.activeTab]),Ya(e)}function tt(e,t){const{tab:n=null,refreshActiveTab:o=!1,domainOptions:s={}}=t||{},l=Jo("nucleus")(e.data),r=Object.keys(l),a=!n||!r.includes(n||"")?r[0]:n;Ga(e,l,a,o),No(e),ub(e,l),se(e,s),Wo(e,l[a]);const d=qo(e.zoom.history,e.activeTab).getLast();d&&(e.xDomain=d.xDomain,e.yDomain=d.yDomain),et(e)}function hb(e,t){t&&tt(e,{tab:t})}function fb(e,{deltaY:t,shiftKey:n}){var o;try{if((o=e.activeSpectrum)==null?void 0:o.id){const{index:s,id:i}=e.activeSpectrum,l=e.data[s].processingController;n?l.shiftWheel(t):l.wheel(t);const r=Object.freeze(l.drawContours());e.contours[i]=r}}catch(s){console.log(s)}}function mb(e){e.displayerMode===X.DM_1D&&(e.originDomain.shareYDomain=!1,Lt(e,{scale:.8}))}function gb(e){e.originDomain.shareYDomain=!0,e.yDomains=e.originDomain.yDomains,e.yDomain=e.originDomain.yDomain,Lt(e,{scale:.8})}function xb(e,t){var n,o;if((n=e.activeSpectrum)==null?void 0:n.id){const s=(o=e.activeSpectrum)==null?void 0:o.index;Ae(e.data[s],[{name:Qn,options:t}]),Sn(e.data[s]),We(e),se(e)}}function bb(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const o=e.activeSpectrum.index,s=[{name:ii,options:t.zeroFillingSize},{name:oa,options:t.lineBroadeningValue}];Ae(e.data[o],s),We(e),se(e),et(e)}}function yb(e){var t;if((t=e.activeSpectrum)==null?void 0:t.id){const{index:n}=e.activeSpectrum;Ae(e.data[n],[{name:ea,options:{}}]),We(e),xt(e,{align:"bottom"}),se(e),et(e)}}function vb(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,{ph0:s,ph1:i}=t;Ae(e.data[o],[{name:$t,options:{ph0:s,ph1:i}}]),We(e),e.tempData=null,se(e)}}function Cb(e){var t;if((t=e.activeSpectrum)==null?void 0:t.id){const{index:n}=e.activeSpectrum;Ae(e.data[n],[{name:jr,options:{}}]),We(e),e.tempData=null,se(e)}}function Sb(e){var t;if((t=e.activeSpectrum)==null?void 0:t.id){const{index:n}=e.activeSpectrum,{ph0:o,ph1:s}=Yr(e.data[n]);Ae(e.data[n],[{name:$t,options:{ph0:o,ph1:s}}]),We(e),e.tempData=null,se(e)}}function kb(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,{data:{x:o,re:s,im:i},info:l}=e.data[n],{ph0:r,ph1:a}=t;let u={data:{x:o,re:s,im:i},info:l};aa(u,{ph0:r,ph1:a});const{im:d,re:h}=u.data;e.tempData[n].data.im=d,e.tempData[n].data.re=h}}function wb(e,t,n){var o,s,i;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:l}=e.activeSpectrum;pa(e.data[l],t,n),((s=e.data[l].info)==null?void 0:s.dimension)===1?Sn(e.data[l]):((i=e.data[l].info)==null?void 0:i.dimension)===2&&oo(e.data[l]),We(e),se(e),et(e);const a=qo(e.zoom.history,e.activeTab).getLast();a&&(e.xDomain=a.xDomain,e.yDomain=a.yDomain)}}function Eb(e,t){var o,s,i;const n=t.payload.id;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:l}=e.activeSpectrum;ci(e.data[l],n),((s=e.data[l].info)==null?void 0:s.dimension)===1?Sn(e.data[l]):((i=e.data[l].info)==null?void 0:i.dimension)===2&&oo(e.data[l]),We(e),se(e),et(e)}}function Ab(e,t){var o,s;const n=t.payload.filterType;if(e.activeTab){for(const i of e.data)kt((o=i==null?void 0:i.info)==null?void 0:o.nucleus)===e.activeTab&&(((s=i.filters)==null?void 0:s.filter(r=>r.name===n))||[]).forEach(r=>{var a,u;ci(i,r.id),((a=i.info)==null?void 0:a.dimension)===1?Sn(i):((u=i.info)==null?void 0:u.dimension)===2&&oo(i)});We(e),se(e),et(e)}}function Tb(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum;Ae(e.data[o],[{name:Zr,options:b({zones:e.toolOptions.data.baseLineZones},t.options)}]),e.toolOptions.data.baseLineZones=[];const s=e.xDomain.slice();We(e),se(e),e.xDomain=s}}function Qo(e,t=null,n={},o=null){var d,h,m,g;const{updateDomain:s=!0,rollback:i=!1,searchBy:l="id",returnCurrentDatum:r=!1}=n;let a=null;const u=o||e.activeSpectrum;if(u==null?void 0:u.id){const x=u.index,y=e.data[x];if(t&&e.toolOptions.data.activeFilterID!==t){const C=y.filters.findIndex(S=>S[l]===t);let v=[];if(C!==-1&&(v=y.filters.slice(0,i?C:C+1),v.length>1?e.toolOptions.data.activeFilterID=(d=y.filters[i?C-1:C])==null?void 0:d.id:e.toolOptions.data.activeFilterID=null,dn(y,v),r)){const{name:S,value:E}=y.filters[C],T=yr(e).data[x];((h=T.info)==null?void 0:h.dimension)===1&&Ae(T,[{name:S,options:E}]),a={datum:T,index:x}}}else e.toolOptions.data.activeFilterID=null,dn(y);((m=y.info)==null?void 0:m.dimension)===1?Sn(y):((g=y.info)==null?void 0:g.dimension)===2&&oo(y),s&&(se(e),et(e))}if(r)return a}function Db(e,t){Qo(e,t.id)}function Ib(e,t){var o;const n=gi(e.activeTab,e.data);if(n&&n.length>0&&Array.isArray(t.payload)){const s=((o=n[0].filters.find(i=>i.name===Jn))==null?void 0:o.value)||[];for(const i of n){const l=t.payload.map(r=>r.name===Vn?k(b({},r),{options:k(b({},r.options),{exclusions:s})}):r);Ae(i,l)}}se(e)}function Mb(e,t){var l,r;const{from:n,to:o}=t.payload,s=Xt(e,{startX:n,endX:o});let i;if((l=e.activeSpectrum)==null?void 0:l.id){const a=(r=e.activeSpectrum)==null?void 0:r.index;i=[e.data[a]]}else i=gi(e.activeTab,e.data);for(const a of i)Ae(a,[{name:Jn,options:[{id:K(),from:s[0],to:s[1]}]}]);se(e)}function Rb(e,t){const{id:n,spectrumID:o}=t.payload,s=e.data.findIndex(l=>l.id===o),i=e.data[s].filters.find(l=>l.name===Jn);i&&(i.value.length===1?ci(e.data[s],i.id):(i.value=i.value.filter(l=>l.id!==n),dn(e.data[s])))}function Nb(e,t){e.overDisplayer=t.payload}function Pb(e){const{past:t,present:n,future:o}=e.history,s=t[t.length-1],i=t.slice(0,t.length-1),l=[n,...o],r=l.length!==0,a=t.length!==0,u=za(e.data),d={past:i,present:s,future:l,hasRedo:r,hasUndo:a};e.xDomain=u.xDomain,e.yDomain=u.yDomain,e.originDomain=u,e.history=d}function Fb(e){const{history:t}=e,n=t.future.shift();t.past.push(t.present),t.present=n,t.hasUndo=!0,t.hasRedo=t.future.length>0,se(e.data)}function _b(e,t){e.history={past:[],present:t,future:[],hasRedo:!1,hasUndo:!1}}function Lb(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o==null?void 0:o.id){const{index:i}=o,l=n[i];di(l.integrals,{options:t,nucleus:s}),Cn(l,!0)}}function Ob(e,t){const{startX:n,endX:o}=t,{data:s,molecules:i,activeTab:l,activeSpectrum:r}=e,[a,u]=Xt(e,{startX:n,endX:o});if(r==null?void 0:r.id){const d=s[r.index],{x:h,re:m}=d.data,g=jt(d),x={id:K(),originFrom:a-g,originTo:u-g,from:a,to:u,absolute:xn({x:h,y:m},{from:a,to:u,reverse:!0}),kind:"signal"};d.integrals.values.push(x),d.integrals.options=ui(d.integrals.options,{molecules:i,nucleus:l}),Cn(d),Wo(e,d)}}function $b(e,t){if(e.activeSpectrum){const n=oe(e),{index:o}=e.activeSpectrum,{integralID:s}=t,i=e.data[o];if(s==null)i.integrals.values=[];else{const l=n.data[o].integrals.values.findIndex(r=>r.id===s);i.integrals.values.splice(l,1),Cn(i)}}}function vl(e,t){var s;const n=oe(e),o=t.payload.data;if((s=e.activeSpectrum)==null?void 0:s.id){const{index:i}=e.activeSpectrum,l=n.data[i],r=e.data[i],{x:a,re:u}=l.data,d=l.integrals.values.findIndex(h=>h.id===o.id);d!==-1&&(r.integrals.values[d]=k(b({originFrom:o.from,originTo:o.to},o),{absolute:xn({x:a,y:u},{from:o.from,to:o.to,reverse:!0})}),Cn(r))}}function Hb(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:s}=e.activeSpectrum;Xm(e.data[s],n)}}function zb(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:s}=e.activeSpectrum;e.data[s].integrals.options.isSumConstant=!n}}function Vb(e=[]){const t=[];for(const n of e){const s=Vt.Molecule.fromMolfile(n.molfile).getFragments();for(let i of s)t.push(Do({molfile:i.toMolfileV3()}))}return t}function Za(e,t){let o=Vt.Molecule.fromMolfile(t).getFragments();for(let s of o)e.push(Do({molfile:s.toMolfileV3()}))}function Bb(e,t,n){let s=Vt.Molecule.fromMolfile(t).getFragments();if(s.length>1){e=e.filter(i=>i.key!==n);for(let i of s)e.push(Do({molfile:i.toMolfileV3()}))}else if(s.length===1){const i=s[0],l=Do({molfile:i.toMolfileV3(),key:n});let r=e.findIndex(a=>a.key===n);e.splice(r,1,l)}}const bi="INITIATE",jb="SAVE_DATA_AS_JSON",fn="LOAD_JSON_FILE",Po="LOAD_JCAMP_FILE",jn="LOAD_NMREDATA_FILE",$s="LOAD_MOL_FILE",Fo="LOAD_ZIP_FILE",Hs="LOAD_JDF_FILE",Ua="ADD_PEAK",Wa="ADD_PEAKS",es="DELETE_PEAK_NOTATION",yi="SHIFT_SPECTRUM",ts="SET_X_DOMAIN",vi="SET_Y_DOMAIN",Ka="SET_ORIGINAL_DOMAIN",qa="SET_WIDTH",Ci="SET_DIMENSIONS",lo="SET_SELECTED_TOOL",Ja="SET_SELECTED_FILTER",Qa="CHANGE_SPECTRUM_SETTING",mn="FULL_ZOOM_OUT",Xn="CHANGE_VISIBILITY",Si="CHANGE_PEAKS_MARKERS_VISIBILITY",_o="CHANGE_ACTIVE_SPECTRUM",ec="CHANGE_SPECTRUM_COLOR",tc="ADD_INTEGRAL",ns="DELETE_INTEGRAL",ki="TOGGLE_REAL_IMAGINARY_VISIBILITY",os="SET_ZOOM",wi="ADD_MOLECULE",Ei="SET_MOLECULE",nc="DELETE_MOLECULE",zs="SET_CORRELATION",oc="SET_CORRELATIONS",sc="DELETE_CORRELATION",ic="SET_CORRELATIONS_MF",lc="SET_CORRELATIONS_TOLERANCE",Ai="DELETE_SPECTRA",Ti="CHANGE_SPECTRUM_DISPLAY_VIEW_MODE",rc="RESIZE_INTEGRAL",ss="BRUSH_END",ac="RESET_X_DOMAIN",cc="ENABLE_FILTER",uc="DELETE_FILTER",dc="DELETE_SPECTRA_FILTER",pc="APPLY_ZERO_FILLING_FILTER",hc="APPLY_FFT_FILTER",Di="CALCULATE_MANUAL_PHASE_CORRECTION_FILTER",fc="APPLY_MANUAL_PHASE_CORRECTION_FILTER",mc="APPLY_AUTO_PHASE_CORRECTION_FILTER",gc="APPLY_ABSOLUTE_FILTER",Ii="SET_VERTICAL_INDICATOR_X_POSITION",xc="AUTO_PEAK_PICKING",bc="AUTO_RANGES_DETECTION",yc="AUTO_ZONES_DETECTION",is="DELETE_RANGE",vc="DELETE_1D_SIGNAL",Cc="SET_SELECTED_OPTIONS_PANEL",bt="SET_LOADING_FLAG",He="RESET_SELECTED_TOOL",Mi="SET_SPECTRUMS_VERTICAL_AlIGN",Xb="SAVE_AS_SVG",Sc="CHANGE_INTEGRAL_DATA",Ri="SET_ACTIVE_TAB",kc="CHANGE_INTEGRAL_SUM",wc="ADD_BASE_LINE_ZONE",Ec="DELETE_BASE_LINE_ZONE",Ac="APPLY_BASE_LINE_CORRECTION_FILTER",Lo="SET_KEY_PREFERENCES",Ni="APPLY_KEY_PREFERENCES",Tc="RESIZE_RANGE",Dc="CHANGE_RANGE_SUM",Ic="ADD_RANGE",Mc="SET_2D_LEVEL",Rc="ADD_2D_ZONE",ls="DELETE_2D_ZONE",Nc="DELETE_2D_SIGNAL",Pc="SET_2D_SIGNAL_PATH_LENGTH",Fc="ADD_MISSING_PROJECTION",_c="SET_FILTER_SNAPSHOT",Lc="CHANGE_RANGE_RELATIVE",Oc="CHANGE_RANGE_SIGNAL_VALUE",$c="CHANGE_RANGE_SIGNAL_KIND",Hc="SAVE_EDITED_RANGE",zc="UNLINK_RANGE",Vc="SET_DIAID_RANGE",Bc="CHANGE_INTEGRAL_RELATIVE",jc="ANALYZE_SPECTRA",Pi="DELETE_ANALYZE_SPECTRA_RANGE",Xc="RESIZE_ANALYZE_SPECTRA_RANGE",Yc="SET_ANALYZE_SPECTRA_COLUMNS",Gc="FILTER_SPECTRA_COLUMN",Zc="ALIGN_SPECTRA",Vs="CHANGE_ZONE_SIGNAL_VALUE",Uc="CHANGE_ZONE_SIGNAL_KIND",Wc="SAVE_EDITED_ZONE",Kc="UNLINK_ZONE",qc="SET_DIAID_ZONE",rs="PREDICT_SPECTRA",Jc="SET_SPECTRA_SAME_TOP",Qc="RESET_SPECTRA_SCALE",Oo="SET_MOUSE_OVER_DISPLAYER",eu="APPLY_MULTIPLE_SPECTRA_FILTER",tu="ADD_EXCLUSION_ZONE",nu="DELETE_EXCLUSION_ZONE",ou="CHANGE_RANGES_SUM_FLAG",su="CHANGE_INTEGRALS_SUM_FLAG",iu="CHANGE_ZONES_NOISE_FACTOR",lu="CHANGE_TEMP_RANGE",ru="SHOW_MULTIPLICTY_TREES",au="SHOW_RANGES_INTEGRALS",cu="AUTO_RANGES_SPECTRA_PICKING",uu="AUTO_ZONES_SPECTRA_PICKING",du="GENERATE_SPECTRUM_FROM_PUBLICATION_STRING",pu="RESURRECTING_SPECTRUM_FROM_RANGES",hu="SHOW_J_GRAPH";function Yb(e,t){e.isLoading=t}function fu(e,t){e.usedColors["1d"]=e.usedColors["1d"].concat(t["1d"]),e.usedColors["2d"]=e.usedColors["2d"].concat(t["2d"])}function Fi(e,t){const{spectra:n,molecules:o,correlations:s,usedColors:i}=t||{spectra:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:[]};fu(e,i),e.data=n,e.molecules=Vb(o),!s||Object.keys(s).length===0?e.correlations=Wn([],{tolerance:$a}):e.correlations=Gb(s)}function Gb(e){return k(b({},e),{values:e.values.map(t=>{if(typeof t.hybridization=="string"){let n=[];if(t.hybridization.length>0){const o=t.hybridization.replaceAll("SP",""),s=Number(o);n.push(s)}t.hybridization=n}return t})})}function mu(e,t){const n={verticalAlign:null},{verticalAlign:o=null}=t||n;o?xt(e,{align:o}):xt(e,{align:"auto-check"})}function Zb(e,t){var o;Fi(e,t.payload);const n=((o=t.payload)==null?void 0:o.preferences)||{};tt(e,{tab:(n==null?void 0:n.activeTab)||""}),mu(e,t.payload),e.isLoading=!1}function Ub(e,t){const{files:n}=t,o=_g(n,e.usedColors);for(const s of o)e.data.push(s);tt(e),e.isLoading=!1}function Wb(e,t){const{files:n}=t,o=Fa(n,e.usedColors);for(const s of o)e.data.push(s);tt(e),xt(e,{align:"auto-check"}),e.isLoading=!1}function Kb(e,t){var s;const n=Li();Fi(n,t.payload);const o=((s=t.payload)==null?void 0:s.preferences)||{};return tt(n,{tab:(o==null?void 0:o.activeTab)||""}),mu(n,o),n.width=e.width,n.height=e.height,n.isLoading=!1,n.actionType=fn,n}function qb(e,t){const{files:n}=t;for(let o of n)Za(e.molecules,o.binary.toString());e.isLoading=!1}function Jb(e,t){const{data:n,usedColors:o}=t.payload;e.data=e.data.concat(n),fu(e,o),tt(e),xt(e,{align:"auto-check"}),e.isLoading=!1}function Qb(e,t){const n=Li();return Fi(n,t.payload),tt(n),xt(n,{align:"auto-check"}),n.isLoading=!1,n.width=e.width,n.height=e.height,n.actionType=jn,n}function ey(e,t){const n=e.molecules.length===0;Za(e.molecules,t);const o=e.molecules[0]||null;n&&o&&pi(e,o.key,o)}function ty(e,t,n){Bb(e.molecules,t,n);const o=e.molecules.findIndex(s=>s.key===n);pi(e,n,o!==-1?e.molecules[o]:e.molecules[0]||null)}function ny(e,t){e.displayerMode===X.DM_1D&&Ba(e,{payload:{assignmentData:t,rangeData:null}}),e.displayerMode===X.DM_2D&&Xa(e,{payload:{assignmentData:t,zoneData:null}})}function oy(e,t){const{key:n,assignmentData:o}=t.payload;ny(e,o);const s=e.molecules.findIndex(i=>i.key===n);e.molecules.splice(s,1),pi(e,n,e.molecules[0]||null)}function sy(e,t){const{data:n,options:o}=t.payload;if(!n)e.isLoading=!1;else for(const s of zg(n,o))e.data.push(s),e.tabActiveSpectrum[kt(s.info.nucleus)]={id:s.id,index:e.data.length-1};tt(e),e.isLoading=!1}function iy(e,t){var o;const n=oe(e);if(((o=e.activeSpectrum)==null?void 0:o.id)&&n){const{index:s}=e.activeSpectrum,i=10,l=t.x-i,r=t.x+i,[a,u]=Xt(e,{startX:l,endX:r}),d=va(n.data[s].data,{from:a,to:u}),h=jt(e.data[s]);if(d){const m={id:K(),originalX:d.x-h,x:d.x,y:d.y,width:0};e.data[s].peaks.values.push(m)}}}function ly(e,t){const n=oe(e);if(e.activeSpectrum){const{index:o}=e.activeSpectrum,s=n.data[o],{startX:i,endX:l}=t,[r,a]=Xt(e,{startX:i,endX:l});if(r!==a){const u=va(s.data,{from:r,to:a}),d=jt(e.data[o]);if(u&&!s.peaks.values.some(h=>h.x===u.x)){const h={id:K(),originalX:u.x-d,x:u.x,y:u.y,width:0};e.data[o].peaks.values.push(h)}}}}function ry(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,o=oe(e);if(t==null)e.data[n].peaks.values=[];else{const s=o.data[n].peaks.values.findIndex(i=>i.id===t.id);e.data[n].peaks.values.splice(s,1)}}}function ay(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){e.toolOptions.selectedTool=F.zoom.id,e.toolOptions.selectedOptionPanel=null;const{index:o}=e.activeSpectrum,s=e.data[o],[i,l]=e.xDomain,r=Ge(s.data.x,i),a=Ge(s.data.x,l),u=Ym(e.data[o],k(b({},t),{windowFromIndex:r,windowToIndex:a}));s.peaks.values=s.peaks.values.concat(u)}}function cy(e){const t="a".charCodeAt(0),o="z".charCodeAt(0)-t+1;let s="";for(;e>=0;)s=String.fromCharCode(e%o+t)+s,e=Math.floor(e/o)-1;return s}var $o=(e=>(e.NORMAL="NORMAL",e.FORMULA="FORMULA",e))($o||{}),Fn=(e=>(e.RELATIVE="relative",e.ABSOLUTE="absolute",e.MIN="min",e.MAX="max",e))(Fn||{});function uy(e,t,n,o){const s=o||cy(e[t].options.columnIndex).toUpperCase();return e[t].options.columns[s]=n,e[t].options.columnIndex++,s}function dy(e,t){const{from:n,to:o,nucleus:s}=t;return e.reduce((i,l)=>{if(eo(l)&&l.info.nucleus===s&&!l.info.isFid){const r=ng(l,{from:n,to:o});i.sum+=r.absolute,i.values.push(b({SID:l.id},r))}return i},{values:[],sum:0})}function gu(e,t){e[t]===void 0&&(e[t]={options:{sum:100,code:null,columns:{},columnIndex:0},values:{}})}function py(e,t,n,o){e[t].options.columns[n].valueKey=o,e[t].values=_i(e,t)}function hy(e,t,{columns:n,code:o}){gu(e,t),e[t].options.code=o,e[t].options.columns=Object.values(n).reduce((l,r)=>{const a=b({},r);return delete a.tempKey,l[r.tempKey]=a,l},{});const{columns:s}=e[t].options;let i=Object.entries(e[t].values).reduce((l,[r,a])=>(l[r]=Object.keys(n).reduce((u,d)=>{const h=n[d].tempKey;return a[d]&&(u[h]=a[d]),u},{}),l),{});i=Object.entries(i).reduce((l,r)=>(l[r[0]]=Object.keys(s).reduce((a,u)=>{const d=s[u].type==="FORMULA";return a[u]=d?{colKey:u,value:bu(s,i[r[0]],s[u].formula)}:k(b({},r[1][u]),{colKey:u}),a},{}),l),{}),e[t].values=i}function fy(e,t){return Object.keys(t).reduce((n,o)=>(t[o].type==="FORMULA"&&(n[o]=k(b({colKey:o},e),{value:bu(t,e,t[o].formula)})),n),{})}function _i(e,t){const{columns:n}=e[t].options;return Object.entries(e[t].values).reduce((s,i)=>{const[l,r]=i;return s[l]=b(b({},r),fy(r,n)),s},{})}function xu(e,t,n){const{from:o,to:s,nucleus:i,columnKey:l=null}=n;gu(t,i);const r=uy(t,i,{type:"NORMAL",valueKey:"relative",from:o,to:s,index:1},l),{sum:a}=t[i].options,{values:u,sum:d}=dy(e,{from:o,to:s,nucleus:i}),h=B(t,`${i}.values`,{});let m=u.reduce((g,x)=>{const y=d>0?a/d:0;return g[x.SID]=k(b({},h[x.SID]),{[r]:k(b({colKey:r},x),{relative:Math.abs(x.absolute)*y})}),g},{});t[i].values=m,t[i].values=_i(t,i)}function my(e,t,n){const o=Object.entries(e[n].values).reduce((a,u)=>(delete u[1][t],u[1]&&Object.keys(u[1]).length>0&&(a[u[0]]=u[1]),a),{}),r=e[n].options.columns,{[t]:s}=r,i=G(r,[el(t)]);Object.keys(e[n].options.columns).length===1&&(e[n].options.columnIndex=0),e[n].options.columns=i,e[n].values=o,e[n].values=_i(e,n)}function bu(e,t,n=""){const o=n.split(/\+|-|\*|\/|%|\(|\)/),s=[];for(const r of o){const a=r.trim();e[a]&&s.push(a)}const i=s.map(r=>t[r]?t[r][e[r].valueKey]:null);let l;try{l=new Function(...s,`return ${n}`)(...i)}catch(r){console.error(r),l=new Error(`Invalid Formula ( ${n} ) `)}return l}function gy(e,t){if(e==null?void 0:e[t]){const{values:n,options:{columns:o}}=e[t];let s="";for(const i in o)s+=`${i}	`;s+=`
`;for(const i of Object.values(n)){for(const l in o)s+=`${i[l][o[l].valueKey]}	`;s+=`
`}return s}return null}function xy(e,t){const[n,o]=Xt(e,t);xu(e.data,e.spectraAnalysis,{from:n,to:o,nucleus:e.activeTab})}function by(e,t){const{colKey:n}=t;my(e.spectraAnalysis,n,e.activeTab)}function yy(e,t){const{columnKey:n,from:o,to:s}=t.payload;xu(e.data,e.spectraAnalysis,{from:o,to:s,nucleus:e.activeTab,columnKey:n})}function vy(e,t){const n=t.payload;hy(e.spectraAnalysis,e.activeTab,n)}function Cy(e,t){const{columnKey:n,valueKey:o}=t.payload;py(e.spectraAnalysis,e.activeTab,n,o)}function yu(e){return!(e.display.isPositiveVisible===!1&&e.display.isNegativeVisible===!1)}function vs(e,t){e.info.dimension===2?(e.display.isPositiveVisible=t,e.display.isNegativeVisible=t,e.display.isVisible=yu(e)):e.display.isVisible=t}function Sy(e,t){if(Array.isArray(t.id)){const n=t.id;if(n.length===0)for(const o of e.data)vs(o,!1);else for(const o of e.data)n.includes(o.id)?vs(o,!0):vs(o,!1)}else{const n=e.data.findIndex(o=>o.id===t.id);e.data[n].display[t.key]=t.value,e.data[n].info.dimension===2&&(e.data[n].display.isVisible=yu(e.data[n]))}}function ky(e,t){var n;for(let o of e.data)((n=o.info)==null?void 0:n.dimension)===1&&t.some(s=>s.id===o.id)?o.display.isPeaksMarkersVisible=!0:o.display.isPeaksMarkersVisible=!1}function wy(e,t){let n=!1;const o=e.activeSpectrum;if(t){const s=e.data.findIndex(l=>l.id===t.id),i=e.data.findIndex(l=>{var r;return l.id===((r=e.activeSpectrum)==null?void 0:r.id)});if(s!==-1){const l=e.data[s];l.display.isVisible=!0,i!==-1?n=e.data[i].info.isFid!==l.info.isFid:n=l.info.isFid||!1}t=k(b({},t),{index:s}),e.activeSpectrum=t,e.tabActiveSpectrum[e.activeTab]=t}else{if(o){const s=e.data.findIndex(i=>i.id===o.id);n=e.data[s].info.isFid}else n=!1;e.activeSpectrum=null,e.tabActiveSpectrum[e.activeTab]=null}F[e.toolOptions.selectedTool].isFilter&&(e.toolOptions.selectedTool=F.zoom.id,e.toolOptions.data.baseLineZones=[],e.toolOptions.selectedOptionPanel=null,e.tempData=null),e.toolOptions.data.activeFilterID?Qo(e,null,{},o):n&&(se(e),et(e))}function Ey(e,{id:t,display:n}){const s=oe(e).data.findIndex(i=>i.id===t);s!==-1&&(e.data[s].display=n)}function Ay(e,{id:t,color:n,key:o}){const i=oe(e).data.findIndex(l=>l.id===t);i!==-1&&(e.data[i].display[o]=n)}function Ty(e,t){const n=oe(e);if(t.id){const o=n.data.findIndex(s=>s.id===t.id);e.data.splice(o,1)}else e.data=[];tt(e,{tab:e.activeTab,refreshActiveTab:!0})}function Dy(e,t){var s;const n=oe(e),{nucleus:o}=t;if((s=e.activeSpectrum)==null?void 0:s.id){const{index:i}=e.activeSpectrum;for(let a of o){const u=dg(n.data[i],a,e.usedColors);e.data.push(u)}const r=Jo("nucleus")(e.data);Ga(e,r,e.activeTab,!0),se(e),et(e)}}function Iy(e,t){var n,o;if(e.data&&e.data.length>0){for(let s of e.data)if(((n=s.info)==null?void 0:n.dimension)===1&&s.info.nucleus===e.activeTab&&!((o=s.info)==null?void 0:o.isFid)){const i=Bm(s,b({},t.payload));Ae(s,[{name:Qn,options:i}])}}se(e),et(e)}function My(e,t){const n=t.payload.publicationText,o=zm(n,e.usedColors);e.data.push(o),tt(e),Lt(e,{scale:.8,spectrumID:o.id})}const Ry="undo",Ny="redo",Py="reset",Li=()=>({actionType:"",data:[],contours:{},tempData:null,xDomain:[],yDomain:[],yDomains:{},xDomains:{},originDomain:{xDomain:[],yDomain:[],xDomains:{},yDomains:{},shareYDomain:!1},integralsYDomains:{},activeTab:"",width:0,height:0,margin:{top:10,right:20,bottom:70,left:0},activeSpectrum:null,mode:"RTL",molecules:[],verticalAlign:{align:"bottom",verticalShift:Ea},history:{past:[],present:null,future:[],hasUndo:!1,hasRedo:!1},isLoading:!1,keysPreferences:{},displayerMode:X.DM_1D,tabActiveSpectrum:{},spectraAnalysis:{},correlations:{},displayerKey:"",zoom:{history:{}},overDisplayer:!1,toolOptions:{selectedTool:F.zoom.id,selectedOptionPanel:null,data:{baseLineZones:[],pivot:{value:0,index:0},zonesNoiseFactor:1,activeFilterID:null,tempRange:null,showMultiplicityTrees:!1,showRangesIntegrals:!0,showJGraph:!1}},usedColors:{"1d":[],"2d":[]}}),vu=Li();function Fy(e){const t=K(),n=Wn([],{tolerance:$a});return k(b({},e),{correlations:n,displayerKey:t,history:{}})}function _y(e){const t={"1d":[],"2d":[]};return n=>{switch(n.type){case bi:{if(n.payload){const o=fl(n.payload),{spectra:s}=o,i=G(o,["spectra"]);ml(s,t).then(l=>{n.payload=k(b({spectra:l},i),{usedColors:t}),e(n)})}break}case fn:{const s=JSON.parse(n.files[0].binary.toString()),i=fl(s);ml(i.spectra,t).then(l=>{n.payload=Object.assign(i,{spectra:l,usedColors:t}),e(n)});break}case Fo:{for(let s of n.files)Pa({display:{name:s.name}},s.binary,t).then(i=>{n.payload={data:i,usedColors:t},e(n)});break}case jn:{qg(n.file,t).then(s=>{n.payload=Object.assign(s,{usedColors:t}),e(n)});break}case rs:{const{mol:{molfile:s},options:i}=n.payload;Hg(s).then(l=>{n.payload={data:l,options:i},e(n)},()=>{e(n)});break}default:n.usedColors=t,e(n);break}}}function Ly(e,t){switch([fn,jn].includes(t.type)||(e.actionType=t.type),t.type){case bi:return Zb(e,t);case bt:return Yb(e,t.isLoading);case fn:return Kb(e,t);case Po:return Wb(e,t);case Hs:return Ub(e,t);case $s:return qb(e,t);case Fo:return Jb(e,t);case jn:return Qb(e,t);case Ua:return iy(e,t.mouseCoordinates);case Wa:return ly(e,t);case es:return ry(e,t.data);case tc:return Ob(e,t);case ns:return $b(e,t);case Sc:return vl(e,t);case rc:return vl(e,t);case kc:return Lb(e,t.value);case su:return zb(e,t);case Bc:return Hb(e,t);case Ka:return sx(e,t.domain);case ts:return ix(e,t.xDomain);case vi:return lx(e,t.yDomain);case qa:return Xx(e,t.width);case Ci:return Yx(e,t.width,t.height);case lo:return Qx(e,t);case He:return We(e);case Cc:return xi(e,t.selectedOptionPanel);case mn:return cb(e,t);case yi:return xb(e,t.shiftValue);case pc:return bb(e,t.value);case hc:return yb(e);case fc:return vb(e,t.value);case mc:return Sb(e);case gc:return Cb(e);case Di:return kb(e,t.value);case cc:return wb(e,t.id,t.checked);case uc:return Eb(e,t);case dc:return Ab(e,t);case _c:return Db(e,t);case eu:return Ib(e,t);case tu:return Mb(e,t);case nu:return Rb(e,t);case Xn:return Sy(e,t);case Si:return ky(e,t.data);case _o:return wy(e,t.data);case ec:return Ay(e,t.data);case Qa:return Ey(e,t);case Zc:return Iy(e,t);case Ai:return Ty(e,t);case Fc:return Dy(e,t);case du:return My(e,t);case ki:return sb(e);case os:return ab(e,t);case Jc:return mb(e);case Qc:return gb(e);case Ti:return tb(e);case wi:return ey(e,t.molfile);case Ei:return ty(e,t.molfile,t.key);case nc:return oy(e,t);case rs:return sy(e,t);case ic:return $x(e,t.payload);case lc:return Hx(e,t.payload);case zs:return zx(e,t.payload);case oc:return Vx(e,t.payload);case sc:return Bx(e,t.payload);case ss:return ib(e,t);case Ii:return lb(e,t.position);case Mi:return eb(e);case xc:return ay(e,t.options);case yc:return Mx(e,t.options);case iu:return Dx(e,t);case bc:return ax(e,t.options);case Ic:return gx(e,t);case is:return ux(e,t);case vc:return Va(e,t);case Tc:return fx(e,t);case Dc:return mx(e,t.value);case ou:return yx(e,t);case Lc:return xx(e,t);case Oc:return bx(e,t);case $c:return dx(e,t);case Hc:return px(e,t);case zc:return Ba(e,t);case Vc:return hx(e,t);case lu:return vx(e,t);case ru:return Cx(e);case au:return Sx(e);case cu:return cx(e);case hu:return kx(e);case Ri:return hb(e,t.tab);case wc:return nb(e,t.zone);case Ec:return ob(e,t.id);case Ac:return Tb(e,t);case Lo:return Wx(e,t.keyCode);case Ni:return Kx(e,t.keyCode);case Mc:return fb(e,t);case Rc:return Ix(e,t);case ls:return Fx(e,t);case Nc:return ja(e,t);case Pc:return _x(e,t);case ac:return rx(e);case Vs:return Nx(e,t);case Uc:return Px(e,t);case Kc:return Xa(e,t);case qc:return Lx(e,t);case uu:return Rx(e);case Wc:return Ox(e,t);case jc:return xy(e,t);case Pi:return by(e,t);case Xc:return yy(e,t);case Yc:return vy(e,t);case Gc:return Cy(e,t);case pu:return jx(e,t);case Ry:return Pb(e);case Ny:return Fb(e);case Py:return _b(e,t);case Oo:return Nb(e,t);default:return}}const Oy=Us(Ly),Cu=c.exports.createContext(vu),$y=Cu.Provider;function $(){return c.exports.useContext(Cu)}const Su=c.exports.createContext({}),Hy=Su.Provider;function Y(){return c.exports.useContext(Su)}function ve(e){const{data:t,activeSpectrum:n}=$();return c.exports.useMemo(()=>t&&n&&n.id&&t.find(s=>s.id===n.id)||e,[n,t,e])}function zy(){}const ku=c.exports.createContext(zy),Vy=ku.Provider;function Oi(){return c.exports.useContext(ku)}const By=P`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  height: 100%;
  flex-direction: column;
  user-select: none;
  position: absolute;
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
`;function wu({isEmpty:e=!0,emptyText:t="Drag and drop here a JCAMP-DX, zipped Bruker folder, Jeol jdf or NMRium file",canOpenLoader:n=!0}){const o=Oi();return e?p("div",k(b({css:By},n&&{onClick:o}),{children:p("p",{children:t})})):null}const jy=P`
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
`;function Xy(){return w("div",{css:jy,children:[p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[p("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),p("path",{d:"M520.5 78.1z"})]})}),p("p",{children:"Loading ..."})]})}function Eu(){return f(Xy,{})}const Au=c.exports.createContext(Eu),Yy=Au.Provider;function Tu({isLoading:e=!0,emptyText:t=void 0}){const{data:n}=$(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{let l=null;return e||(l=setTimeout(()=>{s(!0)},500)),()=>{clearTimeout(l)}},[e]);const i=c.exports.useContext(Au);return _(c.exports.Fragment,{children:[e&&i(),o&&!e&&f(wu,{isEmpty:n&&n.length===0,emptyText:t})]})}const Gy={container:{transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",zoom:"100%"}},Zy=[F.zoom.id,F.zeroFilling.id,F.peakPicking.id,F.integral.id,F.phaseCorrection.id,F.baseLineCorrection.id,F.rangesPicking.id,F.zone2D.id,F.slicingTool.id,F.editRange.id,F.multipleSpectraAnalysis.id,F.exclusionZones.id,F.databaseRangesSelection.id],De={X:1,Y:2,XY:3},Uy={startX:0,startY:0};function yo({brushType:e=De.XY,dimensionBorder:t=Uy,width:n,height:o}){let{width:s,height:i,toolOptions:{selectedTool:l}}=$(),{startX:r,endX:a,startY:u,endY:d,step:h}=c.exports.useContext(Ct);if(!Zy.includes(l)||h!=="brushing"||!t||t.startX&&r<t.startX||t.startY&&u<t.startY||(t.endX&&Math.sign(a-r)===1?a>t.endX:a<t.startX)&&(t.endX&&t.endY&&Math.sign(d-u)===1?d>t.endY:d<t.startY))return null;s=n||s,i=o||i,a=t.endX&&a>t.endX?t.endX:t.startX&&a<t.startX?t.startX:a,d=t.endY&&d>t.endY?t.endY:t.startY&&d<t.startY?t.startY:d;const m=e===De.X||e===De.XY?(a-r)/s:1;r=e===De.X||e===De.XY?r:0;const g=e===De.Y||e===De.XY?(d-u)/i:1;return u=e===De.Y||e===De.XY?u:0,f("div",{style:k(b({},Gy.container),{transform:`translate(${r}px, ${u}px) scale(${m},${g})`,willChange:"transform"}),children:f("svg",{width:s,height:i,children:f("rect",{x:"0",y:"0",width:s,height:i,fill:"gray",opacity:"0.2"})})})}const Cl={line:{stroke:"black",strokeOpacity:1,shapeRendering:"crispEdges",strokeWidth:"1",willChange:"transform"}},Wy=[F.zoom.id,F.equalizerTool.id,F.baseLineCorrection.id,F.zone2D.id,F.slicingTool.id,F.integral.id,F.rangesPicking.id,F.editRange.id,F.multipleSpectraAnalysis.id,F.exclusionZones.id,F.databaseRangesSelection.id];function Du(){const{height:e,width:t,margin:n,toolOptions:{selectedTool:o}}=$();let s=c.exports.useContext(at);const i=c.exports.useContext(Ct);return!Wy.includes(o)||i.step==="brushing"||!s||s.x>t-n.right||s.y>e-n.bottom||!t||!e?null:f("div",{style:{willChange:"transform",cursor:"crosshair",transform:`translate(${-t+s.x}px, ${-e+s.y}px)`,position:"absolute",top:0,left:0,pointerEvents:"none",overflow:"visible",width:2*t,height:2*e},children:_("svg",{width:2*t,height:2*e,children:[f("line",{style:Cl.line,x1:t,y1:"0",x2:t,y2:e*2},"vertical_line"),f("line",{style:Cl.line,x1:"0",y1:e,x2:t*2,y2:e},"horizontal_line")]})},"crossLine")}function Ky(e,t){const[n,o]=c.exports.useState(localStorage.getItem(e)||"{}");c.exports.useEffect(()=>{localStorage.setItem(e,n)},[e,n]);const s=c.exports.useCallback((i,l=null)=>{let r=JSON.parse(n);l?up(r,l,i):r=b(b({},r),i),o(JSON.stringify(r))},[n]);return c.exports.useMemo(()=>[t?B(JSON.parse(n),t,{}):JSON.parse(n),s],[t,s,n])}function Yn(e,t=!0){const n=localStorage.getItem(e);return n&&t?JSON.parse(n):n}function as(e,t){localStorage.setItem(e,t)}function Sl(e){localStorage.removeItem(e)}function ut(e,t,n=null){return B(e,t,n)}const qy={version:1,label:"Default Mode",display:{general:{disableMultipletAnalysis:!1,hideSetSumFromMolecule:!1,hideGeneralSettings:!1,hideExperimentalFeatures:!1},panels:{hideSpectraPanel:!1,hideInformationPanel:!1,hidePeaksPanel:!1,hideIntegralsPanel:!1,hideRangesPanel:!1,hideStructuresPanel:!1,hideFiltersPanel:!1,hideZonesPanel:!1,hideSummaryPanel:!1,hideMultipleSpectraAnalysisPanel:!1,hideDatabasePanel:!1,hidePredictionPanel:!1},toolBarButtons:{hideZoomTool:!1,hideZoomOutTool:!1,hideImport:!1,hideExportAs:!1,hideSpectraStackAlignments:!1,hideSpectraCenterAlignments:!1,hideRealImaginary:!1,hidePeakTool:!1,hideIntegralTool:!1,hideZonePickingTool:!1,hideSlicingTool:!1,hideAutoRangesTool:!1,hideZeroFillingTool:!1,hidePhaseCorrectionTool:!1,hideBaseLineCorrectionTool:!1,hideFFTTool:!1,hideMultipleSpectraAnalysisTool:!1,hideExclusionZonesTool:!1}}},Jy={version:1,label:"Exercise 1D Mode",display:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0,hideGeneralSettings:!0,hideExperimentalFeatures:!0},panels:{hideSpectraPanel:!1,hideInformationPanel:!0,hidePeaksPanel:!0,hideIntegralsPanel:!1,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0,hideDatabasePanel:!0,hidePredictionPanel:!1},toolBarButtons:{hideZoomTool:!1,hideZoomOutTool:!1,hideImport:!0,hideExportAs:!0,hideSpectraStackAlignments:!1,hideSpectraCenterAlignments:!1,hideRealImaginary:!0,hidePeakTool:!1,hideIntegralTool:!1,hideZonePickingTool:!0,hideSlicingTool:!0,hideAutoRangesTool:!0,hideZeroFillingTool:!0,hidePhaseCorrectionTool:!0,hideBaseLineCorrectionTool:!0,hideFFTTool:!0,hideMultipleSpectraAnalysisTool:!0,hideExclusionZonesTool:!0}}},Qy={version:1,label:"Process 1D Mode",display:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!1,hideGeneralSettings:!1,hideExperimentalFeatures:!1},panels:{hideSpectraPanel:!1,hideInformationPanel:!1,hidePeaksPanel:!1,hideIntegralsPanel:!1,hideRangesPanel:!0,hideStructuresPanel:!1,hideFiltersPanel:!1,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0,hideDatabasePanel:!1,hidePredictionPanel:!1},toolBarButtons:{hideZoomTool:!1,hideZoomOutTool:!1,hideImport:!0,hideExportAs:!0,hideSpectraStackAlignments:!1,hideSpectraCenterAlignments:!1,hideRealImaginary:!1,hidePeakTool:!1,hideIntegralTool:!1,hideAutoRangesTool:!0,hideZeroFillingTool:!1,hidePhaseCorrectionTool:!1,hideBaseLineCorrectionTool:!1,hideFFTTool:!1,hideMultipleSpectraAnalysisTool:!0,hideExclusionZonesTool:!0}}};var vo={exercise1D:Jy,basic:qy,process1D:Qy};const Iu="INIT_PREFERENCES",Mu="SET_PREFERENCES",Ru="RESET_PREFERENCES",kn="SET_PANELS_PREFERENCES",kl=3;function Bs(e){switch(e){case"exercise1D":return vo.exercise1D;case"process1D":return vo.process1D;default:return vo.basic}}const Nu={basePreferences:{},display:vo.basic.display,controllers:{dimmedSpectraTransparency:.1},formatting:{nucleus:[{key:"1H",name:"1H",ppm:"0.00",hz:"0.00"},{key:"13C",name:"13C",ppm:"0.00",hz:"0.00"},{key:"15N",name:"15N",ppm:"0.00",hz:"0.00"},{key:"19F",name:"19F",ppm:"0.00",hz:"0.00"},{key:"29Si",name:"29Si",ppm:"0.00",hz:"0.00"},{key:"31P",name:"31P",ppm:"0.00",hz:"0.00"}],nucleusByKey:{},panels:{}},dispatch:null,workspace:"default"};function js(e){return JSON.parse(JSON.stringify(e),(t,n)=>{if(n)return n})}function Pu(e){e.formatting.nucleus&&Array.isArray(e.formatting.nucleus)&&(e.formatting.nucleusByKey=e.formatting.nucleus.reduce((t,n)=>(t[n.name.toLowerCase()]=n,b({},t)),{}))}function e0(e,t){var i;const n=Yn("nmr-local-storage-version",!1);let o=Yn("nmr-general-settings");if(n&&(o==null?void 0:o.version)&&Sl("nmr-local-storage-version"),(!(o==null?void 0:o.version)||(o==null?void 0:o.version)!==kl)&&Sl("nmr-general-settings"),t.payload){const s=t.payload,{dispatch:l,workspace:r}=s,a=G(s,["dispatch","workspace"]);e.workspace=r;const u=Bs(r);(!o||!(o==null?void 0:o.workspaces[r])||u.version!==((i=o==null?void 0:o.workspaces[r])==null?void 0:i.version))&&(o=o||{},o={version:kl,workspaces:k(b({},o.workspaces),{[r]:k(b({},u),{controllers:e.controllers,formatting:e.formatting})})},as("nmr-general-settings",JSON.stringify(o))),e.basePreferences=Pt({},u,a);const d=js(e.basePreferences.display);let h={};e.dispatch=l;const m=(o==null?void 0:o.workspaces[r])||null;m&&(Object.entries(m).forEach(([g,x])=>{g==="display"?h=js(x):["dispatch","basePreferences"].includes(g)||(e[g]=Pt({},a[g]?a[g]:{},x))}),Pu(e)),e.display=Pt({},Bs("default").display,d,h)}}function t0(e,t){if(t.payload){const{controllers:n,formatting:o,display:s}=t.payload;let i=Yn("nmr-general-settings");i.workspaces=k(b({},i.workspaces),{[e.workspace]:k(b({},i.workspaces[e.workspace]),{controllers:n,formatting:o,display:s})}),as("nmr-general-settings",JSON.stringify(i)),e.controllers=n,e.formatting=o,e.display.panels=s.panels,e.display.general.hideExperimentalFeatures=s.general.hideExperimentalFeatures,Pu(e)}}function n0(e,t){if(t.payload){const{key:n,value:o}=t.payload;let s=Yn("nmr-general-settings");s.workspaces[e.workspace].formatting.panels[n]=o,as("nmr-general-settings",JSON.stringify(s)),e.formatting.panels[n]=o}}function o0(e){let t=Yn("nmr-general-settings");const n=js(e.basePreferences.display),o=Pt({},Bs(e.workspace).display,n);t.workspaces[e.workspace].display=o,e.display=o,as("nmr-general-settings",JSON.stringify(t))}function s0(e,t){switch(t.type){case Iu:return e0(e,t);case Mu:return t0(e,t);case kn:return n0(e,t);case Ru:return o0(e);default:return e}}const i0=Us(s0),Fu=c.exports.createContext(Nu),l0=Fu.Provider;function ie(){return c.exports.useContext(Fu)}class Yt{constructor(){this.array=[]}moveTo(t,n){this.array.push(`M ${t} ${n}`)}lineTo(t,n){this.array.push(`L ${t} ${n}`)}closePath(){this.array.push("Z")}toString(){return this.array.join(" ")}}function wl({id:e,sign:t,color:n,datum:o}){const{margin:s,width:i,height:l,xDomain:r,yDomain:a,contours:u,activeSpectrum:d}=$(),h=ie(),{xShift:m,yShift:g}=no(o),x=c.exports.useMemo(()=>d===null?!0:e===d.id,[d,e]);function y(v){const S=Ee({margin:s,width:i,xDomain:r}),E=be({margin:s,height:l,yDomain:a}),T=new Yt;for(const N of v)if(N.lines){const R=N.lines;if(R.length<1e6)for(let M=0;M<R.length;M+=4)T.moveTo(S(R[M]+m),E(R[M+1]+g)),T.lineTo(S(R[M+2]+m),E(R[M+3]+g))}else{T.moveTo(S(N[0].x+m),E(N[0].y+g));for(let R=1;R<N.length;R++)T.lineTo(S(N[R].x+m),E(N[R].y+g))}return T.closePath(),T.toString()}const C=c.exports.useMemo(()=>B(u,`${e}.${t}`,[]),[u,t,e]);return f("path",{fill:"none",stroke:n,strokeWidth:"1",style:{opacity:x?1:B(h,"controllers.dimmedSpectraTransparency",.1)},d:y(C)})}function r0({data:e,displayerKey:t}){return f("g",{clipPath:`url(#${t}clip-chart-2d)`,className:"contours",children:e==null?void 0:e.map((n,o)=>_("g",{children:[n.display.isPositiveVisible&&f(wl,{id:n.id,sign:"positive",datum:n,color:n.display.positiveColor}),n.display.isNegativeVisible&&f(wl,{id:n.id,sign:"negative",datum:n,color:n.display.negativeColor})]},`${n.id+o}`))})}const a0=c.exports.memo(r0);function c0(){const{data:e,displayerKey:t}=$(),n=c.exports.useMemo(()=>e.filter(o=>o.info.dimension===2),[e]);return f(a0,{data:n,displayerKey:t})}var wn=(e=>(e.XAxis="XAxis",e.YAxis="YAxis",e))(wn||{});function ro(e){const{width:t,xDomain:n,yDomain:o}=$();return c.exports.useCallback(s=>{const{x:i,y:l}=s,[r,a]=e==="XAxis"?n:o;return vr({x:i,y:l},{from:r,to:a,nbPoints:t*4,optimize:!0})},[e,t,n,o])}function u0({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,yDomains:i,displayerKey:l}=$(),r=ro(wn.YAxis),a=o.left,u=c.exports.useMemo(()=>{if(t){const h=be({height:n,yDomain:[s[0],s[1]],margin:o}),m=hn(i[t.id],a,e),{x:g,re:x}=t.data,y=r({x:g,y:x}),C=new Yt;C.moveTo(m(y.y[y.y.length-1]),h(y.x.length-1));for(let v=y.x.length-2;v>=0;v--)C.lineTo(m(y.y[v]),h(y.x[v]));return C.toString()}else return},[a,o,e,n,t,r,s,i]),d=n-o.bottom-o.top;return!d||!a?null:_("svg",{viewBox:`0 0 ${a} ${d+o.top}`,width:a,height:d+o.top,children:[f("defs",{children:f("clipPath",{id:`${l}clip-left`,children:f("rect",{width:a,height:d,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${l}clip-left)`,children:f("path",{className:"line",stroke:"black",fill:"none",d:u})})]})}var d0=c.exports.memo(u0);function p0({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,yDomains:i,displayerKey:l}=$(),r=ro(wn.XAxis),a=o.top,u=c.exports.useMemo(()=>{if(t){const d=Ee({width:n,xDomain:s,margin:o}),h=hn(i[t.id],a,e),{x:m,re:g}=t.data,x=r({x:m,y:g}),y=new Yt;y.moveTo(d(x.x[0]),h(x.y[0]));for(let C=1;C<x.x.length;C++)y.lineTo(d(x.x[C]),h(x.y[C]));return y.toString()}else return},[a,e,o,t,n,s,r,i]);return!n||!a?null:_("svg",{viewBox:`0 0 ${n} ${a}`,width:n,height:a,children:[f("defs",{children:f("clipPath",{id:`${l}clip-top`,children:f("rect",{width:n-o.left-o.right,height:a,x:o.left,y:`${0}`})})}),f("g",{clipPath:`url(#${l}clip-top)`,children:f("path",{className:"line",stroke:"red",fill:"none",strokeWidth:"1px",d:u})})]})}var h0=c.exports.memo(p0);const f0=P`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,m0={right:100,top:0,left:0,bottom:0};function g0(e){const{show:t=!0,label:n="\u03B4 [ppm]",margin:o=m0}=e,s=$(),{xDomain:i,height:l,width:r,margin:a,tabActiveSpectrum:u,activeTab:d}=s,h=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!t)return;const m=Ee({width:r,margin:a,xDomain:i}),g=Is(m).ticks(8).tickFormat(Ws("0"));ko(h.current).call(g)},[d,l,a,a.bottom,a.left,a.right,a.top,t,u,r,i]),!r||!l?null:p(Qe,{children:t&&p("g",{className:"x",css:f0,transform:`translate(0,${l-(a.bottom+o.bottom)})`,ref:h,children:p("text",{fill:"#000",x:r-60,y:"20",dy:"0.71em",textAnchor:"end",children:n})})})}var x0=c.exports.memo(g0);const b0=P`
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
`,y0={right:50,top:0,bottom:0,left:0};function v0(e){const{show:t=!0,label:n="",margin:o=y0}=e,s=c.exports.useRef(null),i=$(),{yDomain:l,width:r,height:a,activeTab:u,tabActiveSpectrum:d,margin:h}=i;return c.exports.useEffect(()=>{if(!t||!l)return;const m=be({height:a,yDomain:l,margin:h}),g=dp(m).ticks(8).tickFormat(Ws("0"));ko(s.current).call(g)},[t,l,u,d,a,h]),!r||!a?null:p(Qe,{children:p("g",{className:"y",css:b0,transform:`translate(${r-o.right})`,ref:s,children:p("text",{fill:"#000",x:-o.top,y:-(o.right-5),dy:"0.71em",transform:"rotate(-90)",textAnchor:"end",children:n})})})}var C0=c.exports.memo(v0);const El=P`
  stroke: lightgrey;
  opacity: 0.7;
`;function Al({axis:e,show:t}){const{data:n,activeTab:o,margin:s,width:i,height:l,xDomain:r,yDomain:a,displayerMode:u}=$(),[d,h]=c.exports.useState([]),m=Ee({margin:s,width:i,xDomain:r}),g=be({margin:s,height:l,yDomain:a});c.exports.useEffect(()=>{const y=o.split(","),C=e==="X"?y[0]:e==="Y"?y[1]:null;if(C!==null){const S=n.filter(E=>E.display.isVisible===!0&&E.info.nucleus===C).filter(eo).map(E=>E.ranges.values).flat().map(E=>E.signals.filter(T=>qn.some(N=>T.kind===N)).map(T=>T.delta)).flat();h(S)}else h([])},[o,e,n,u]);const x=c.exports.useMemo(()=>{if(t===!0&&d.length>0)return d.map((C,v)=>e==="X"?p("line",{css:El,x1:m(C),x2:m(C),y1:g(a[0]),y2:g(a[1])},`indicationLine${e}${v}`):e==="Y"?p("line",{css:El,x1:m(r[0]),x2:m(r[1]),y1:g(C),y2:g(C)},`indicationLine${e}${v}`):null)},[e,d,m,g,t,r,a]);return p("g",{children:x})}const po=new pp,de={on:(e,t)=>po.on(e,t),once:(e,t)=>po.once(e,t),off:(e,t)=>po.off(e,t),emit:(e,t)=>po.emit(e,t)};Object.freeze(de);const _u=c.exports.createContext({});function S0(e,t){var n;switch(t.type){case"ADD":{const o=k(b({},e),{assignment:b({},e.assignment)});return o.assignment[t.payload.id[0]]===void 0&&(o.assignment[t.payload.id[0]]={}),o.assignment[t.payload.id[0]][t.payload.axis]===void 0&&(o.assignment[t.payload.id[0]][t.payload.axis]=[]),o.assignment[t.payload.id[0]][t.payload.axis].includes(t.payload.id[1])||o.assignment[t.payload.id[0]][t.payload.axis].push(t.payload.id[1]),o}case"REMOVE":{const o=k(b({},e),{assignment:b({},e.assignment)});return((n=o.assignment[t.payload.id[0]])==null?void 0:n[t.payload.axis])!==void 0&&(o.assignment[t.payload.id[0]][t.payload.axis]=o.assignment[t.payload.id[0]][t.payload.axis].filter(s=>s!==t.payload.id[1]),o.assignment[t.payload.id[0]][t.payload.axis].length===0&&delete o.assignment[t.payload.id[0]][t.payload.axis],Object.keys(o.assignment[t.payload.id[0]]).length===0&&delete o.assignment[t.payload.id[0]]),o}case"REMOVE_ALL":{const o=k(b({},e),{assignment:b({},e.assignment)});return t.payload.id.forEach(s=>{var i;((i=o.assignment[s])==null?void 0:i[t.payload.axis])!==void 0&&(delete o.assignment[s][t.payload.axis],Object.keys(o.assignment[s]).length===0&&delete o.assignment[s])}),o}case"SET_IS_ACTIVE":return k(b({},e),{isActive:t.payload.id!==void 0&&t.payload.axis!==void 0,activeID:t.payload.id,activeAxis:t.payload.axis});case"SET_IS_ON_HOVER":return k(b({},e),{isOnHover:t.payload.id!==void 0,onHoverID:t.payload.id,onHoverAxis:t.payload.axis});case"DELETE_RECORD":{const o=k(b({},e),{assignment:b({},e.assignment)});return delete o.assignment[t.payload.id],o.isActive&&o.activeID===t.payload.id&&(o.isActive=!1,o.activeID=void 0,o.activeAxis=void 0),o.isOnHover&&o.onHoverID===t.payload.id&&(o.isOnHover=!1,o.onHoverID=void 0,o.onHoverAxis=void 0),o}default:throw new Error(`unknown action type: ${t.type}`)}}const k0={assignment:{},isActive:!1,activeID:void 0,activeAxis:void 0,isOnHover:!1,onHoverID:void 0,onHoverAxis:void 0};function w0(e){const{spectraData:t}=e,[n,o]=c.exports.useReducer(S0,k0),s=c.exports.useMemo(()=>({assignment:n,dispatch:o}),[n]);function i(r,a){a.dispatch({type:"DELETE_RECORD",payload:{id:r.id}}),(r.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[r.id,u],axis:"x"}})),r.signals.forEach(u=>(u.diaIDs||[]).forEach(d=>a.dispatch({type:"ADD",payload:{id:[u.id,d],axis:"x"}})))}function l(r,a){a.dispatch({type:"DELETE_RECORD",payload:{id:r.id}}),(r.y.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[r.id,u],axis:"y"}})),(r.x.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[r.id,u],axis:"x"}})),r.signals.forEach(u=>{(u.x.diaIDs||[]).forEach(d=>a.dispatch({type:"ADD",payload:{id:[u.id,d],axis:"x"}})),(u.y.diaIDs||[]).forEach(d=>a.dispatch({type:"ADD",payload:{id:[u.id,d],axis:"y"}}))})}return c.exports.useEffect(()=>{t&&t.forEach(r=>{r.info.dimension===1?r.ranges.values.forEach(a=>i(a,s)):r.info.dimension===2&&r.zones.values.forEach(a=>l(a,s))})},[t]),f(_u.Provider,{value:s,children:e.children})}function Ve(){return c.exports.useContext(_u)}function rt(e){const t=Ve();if(typeof e!="string"&&typeof e!="number"||e==="")throw new Error("assignment key must be a non-empty string or number");const n=String(e),o=c.exports.useMemo(()=>t.assignment.isActive&&t.assignment.activeID===n,[t.assignment.activeID,t.assignment.isActive,n]),s=c.exports.useMemo(()=>o?t.assignment.activeAxis:void 0,[t.assignment.activeAxis,o]),i=c.exports.useMemo(()=>t.assignment.assignment[n]?t.assignment.assignment[n]:[],[t.assignment.assignment,n]),l=c.exports.useMemo(()=>t.assignment.isOnHover&&t.assignment.onHoverID===n,[t.assignment.isOnHover,t.assignment.onHoverID,n]),r=c.exports.useMemo(()=>l?t.assignment.onHoverAxis:void 0,[t.assignment.onHoverAxis,l]),a=c.exports.useCallback(v=>{t.dispatch({type:"ADD",payload:{id:[n,v],axis:s}})},[s,t,n]),u=c.exports.useCallback(v=>{t.dispatch({type:"REMOVE",payload:{id:[n,v],axis:s}})},[s,t,n]),d=c.exports.useCallback(v=>{t.dispatch({type:"REMOVE_ALL",payload:{id:[n],axis:v}})},[t,n]),h=c.exports.useCallback(v=>{i[s]===void 0||!i[s].includes(v)?a(v):u(v)},[s,a,i,u]),m=c.exports.useCallback(()=>{t.dispatch({type:"DELETE_RECORD",payload:{id:n}})},[t,n]),g=c.exports.useCallback(v=>{t.dispatch({type:"SET_IS_ACTIVE",payload:{id:o?void 0:n,axis:!o&&n!==void 0?v:void 0}})},[t,n,o]),x=c.exports.useCallback((v,S)=>{v==="enter"?t.dispatch({type:"SET_IS_ON_HOVER",payload:{id:n,axis:n!==void 0?S:void 0}}):v==="leave"&&t.dispatch({type:"SET_IS_ON_HOVER",payload:{}})},[t,n]),y=c.exports.useCallback(v=>x("enter",v),[x]),C=c.exports.useCallback(v=>x("leave",v),[x]);return{id:n,isActive:o,activeAxis:s,assigned:i,add:a,remove:u,removeAll:d,toggle:h,deleteRecord:m,onClick:g,isOnHover:l,onHoverAxis:r,onMouseEnter:y,onMouseLeave:C}}function $i(e,t){return t.filter(n=>Object.keys(e.assignment).filter(o=>o===n))}var ue=(e=>(e.PEAK="PEAK",e.INTEGRAL="INTEGRAL",e.SIGNAL="SIGNAL",e.RANGE="RANGE",e.ZONE="ZONE",e.EXCLUSION_ZONE="EXCLUSION_ZONE",e.DATABASE="DATABASE",e.UNKNOWN="UNKNOWN",e))(ue||{});const Lu={highlight:{highlights:{},highlighted:[],highlightedPermanently:[],sourceData:null},dispatch:()=>null,remove:()=>null},Ou=c.exports.createContext(Lu);function E0(e,t){switch(t.type){case"SHOW":{const{convertedHighlights:n,sourceData:o}=t.payload,{type:s="UNKNOWN",extra:i=null}=o||{},l=k(b({},e),{highlights:b({},e.highlights),sourceData:{type:s,extra:i}});for(const r of n)r in l.highlights||(l.highlights[r]=1);return l.highlighted=Object.keys(l.highlights),l}case"HIDE":{const{convertedHighlights:n}=t.payload,o=k(b({},e),{highlights:b({},e.highlights),sourceData:null});for(const s of n)s in o.highlights&&delete o.highlights[s];return o.highlighted=Object.keys(o.highlights),o}case"SET_PERMANENT":return k(b({},e),{highlightedPermanently:t.payload});case"UNSET_PERMANENT":return k(b({},e),{highlightedPermanently:[]});default:throw new Error(`unknown action type: ${t.type}`)}}function A0(e){const[t,n]=c.exports.useReducer(E0,Lu.highlight),o=c.exports.useMemo(()=>{function s(){n({type:"HIDE",payload:{convertedHighlights:t.highlighted}})}return{highlight:t,dispatch:n,remove:s}},[t]);return f(Ou.Provider,{value:o,children:e.children})}function En(){return c.exports.useContext(Ou)}function le(e,t=null){if(!Array.isArray(e))throw new Error("highlights must be an array");const{dispatch:n,highlight:o}=En(),s=c.exports.useMemo(()=>{const m=[];for(const g of e){if(typeof g!="string"&&typeof g!="number")throw new Error("highlight key must be a string or number");g!==""&&m.push(String(g))}return m},[e]);c.exports.useEffect(()=>()=>{n({type:"HIDE",payload:{convertedHighlights:[]}}),n({type:"UNSET_PERMANENT"})},[n]);const i=c.exports.useMemo(()=>o.highlighted.some(m=>s.includes(m)),[s,o.highlighted]),l=c.exports.useMemo(()=>o.highlightedPermanently.some(m=>s.includes(m)),[s,o.highlightedPermanently]),r=c.exports.useCallback(()=>{n({type:"SHOW",payload:{convertedHighlights:s,sourceData:t}})},[n,s,t]),a=c.exports.useCallback(()=>{n({type:"HIDE",payload:{convertedHighlights:s}})},[s,n]),u=c.exports.useCallback(m=>{n({type:"SHOW",payload:{convertedHighlights:[],id:m}})},[n]),d=c.exports.useCallback(m=>{n({type:"HIDE",payload:{convertedHighlights:[],id:m}})},[n]),h=c.exports.useCallback(m=>{m&&(m.preventDefault(),m.stopPropagation()),n(l?{type:"UNSET_PERMANENT"}:{type:"SET_PERMANENT",payload:s})},[s,n,l]);return c.exports.useMemo(()=>({isActive:i,onHover:{onMouseEnter:r,onMouseLeave:a},onClick:h,show:r,hide:a,isActivePermanently:l,click:h,add:u,remove:d}),[u,h,a,i,l,d,r])}const $u="___";function Ce(e,t){return`${e}${$u}${t}`}const Tl=P`
  stroke: green;
  stroke-width: 2;
  opacity: 0.5;
`;function Dl({delta:e,axis:t,show:n}){const{margin:o,width:s,height:i,xDomain:l,yDomain:r}=$(),a=Ee({margin:o,width:s,xDomain:l}),u=be({margin:o,height:i,yDomain:r}),d=c.exports.useMemo(()=>n===!0?t==="X"?p("line",{css:Tl,x1:a(e),x2:a(e),y1:u(r[0]),y2:u(r[1])},`signalLine_${e}_X`):t==="Y"?p("line",{css:Tl,x1:a(l[0]),x2:a(l[1]),y1:u(e),y2:u(e)},`signalLine_${e}_Y`):null:null,[t,e,a,u,n,l,r]);return p("g",{children:d})}function T0({signal:e}){var l,r;const t=c.exports.useMemo(()=>[Ce(e.id,"Crosshair"),Ce(e.id,"Crosshair_X")],[e.id]),n=c.exports.useMemo(()=>[Ce(e.id,"Crosshair"),Ce(e.id,"Crosshair_Y")],[e.id]),o=le(t),s=le(n),i=le([e.id]);return!((l=e==null?void 0:e.x)==null?void 0:l.delta)||!((r=e==null?void 0:e.y)==null?void 0:r.delta)?null:w("g",{children:[p(Dl,{delta:e.x.delta,axis:"X",show:o.isActive||i.isActive}),p(Dl,{delta:e.y.delta,axis:"Y",show:s.isActive||i.isActive})]})}const D0=c.exports.memo(({signal:e,isVisible:t})=>{const{margin:n,width:o,height:s,xDomain:i,yDomain:l}=$(),r=Ee({margin:n,width:o,xDomain:i}),a=be({margin:n,height:s,yDomain:l}),u=c.exports.useCallback(y=>[y].concat(Ce(y,"X"),Ce(y,"Y")),[]),d=rt(e.id),h=le(u(d.id)),m=En(),[g,x]=c.exports.useState(!1);return c.exports.useEffect(()=>{m.highlight.highlighted.some(y=>u(e.id).includes(y))||d.isActive?x(!0):x(!1)},[d.isActive,u,m.highlight.highlighted,e.id]),e?w("g",{className:"zone-signal",onMouseEnter:()=>{d.onMouseEnter(void 0),h.show()},onMouseLeave:()=>{d.onMouseLeave(void 0),h.hide()},children:[t.signals&&w("g",{children:[p("circle",{cx:r(e.x.delta||0),cy:a(e.y.delta||0),r:g?6:4,fill:g?"green":"darkgreen"},e.id),p(T0,{signal:e})]}),p("g",{className:"zone-signal-peak",children:t.peaks&&e.peaks&&e.peaks.map((y,C)=>p("circle",{cx:r(y.x),cy:a(y.y),r:2,fill:"black"},`${e.id+C}`))})]}):null}),I0=P`
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
`,M0=P`
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
`,R0=({zoneData:e,isVisible:t})=>{const{x:n,y:o,id:s,signals:i}=e,l=rt(s),r=le([l.id],{type:ue.ZONE,extra:{id:l.id}}),{margin:a,width:u,height:d,xDomain:h,yDomain:m}=$(),g=Ee({margin:a,width:u,xDomain:h}),x=be({margin:a,height:d,yDomain:m}),{from:y=0,to:C=0}=n,{from:v=0,to:S=0}=o,[E,T]=c.exports.useState(!1);return c.exports.useEffect(()=>{T(!Ex(e))},[e]),w("g",{css:r.isActive||l.isActive?M0:I0,onMouseEnter:()=>{l.onMouseEnter(void 0),r.show()},onMouseLeave:()=>{l.onMouseLeave(void 0),r.hide()},children:[t.zones&&p("g",{transform:`translate(${g(C)},${x(v)})`,children:p("rect",{x:"0",width:g(y)-g(C),height:x(S)-x(v),className:"Integral-area",fill:"#0000000f",stroke:E?"#343a40":"darkgreen",strokeWidth:E?"0":"1"})}),i.map((N,R)=>p(D0,{signal:N,isVisible:t},`${s+R}`))]},s)};function N0({zones:e,display:t,displayerKey:n}){const[o,s]=c.exports.useState({zones:!0,signals:!0,peaks:!0});return c.exports.useEffect(()=>{de.on("onZonesVisibilityChange",({key:i})=>{s(l=>k(b({},l),{[i]:!l[i]}))})},[]),f("g",{clipPath:`url(#${n}clip-chart-2d)`,className:"2D-Zones",children:t.isVisible&&e.values.map(i=>f("g",{className:"zone",children:f(R0,{zoneData:i,isVisible:o})},i.id))})}const P0=c.exports.memo(N0),F0={zones:{},display:{}};function _0(){const{displayerKey:e}=$(),{zones:t,display:n}=ve(F0);return f(P0,{zones:t,display:n,displayerKey:e})}function L0({spectra:e,width:t,height:n,margin:o,displayerKey:s}){return _("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-2d`,children:f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top})})}),f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top,stroke:"black",strokeWidth:"1",fill:"transparent"}),(e==null?void 0:e[0])&&f(h0,{data:e[0]}),(e==null?void 0:e[1])&&f(d0,{data:e[1]}),f(c0,{}),f(_0,{}),f(Al,{axis:"X",show:!0}),f(Al,{axis:"Y",show:!0}),_("g",{className:"container",style:{pointerEvents:"none"},children:[f(x0,{}),f(C0,{})]})]})}const O0=c.exports.memo(L0);function $0({spectra:e}){const{width:t,height:n,margin:o,displayerKey:s}=$();return f(O0,{spectra:e,width:t,height:n,margin:o,displayerKey:s})}function Xe(e,t,n="",o=""){return n+Cr(e).format(t)+o}function Be(e){const t=ie(),n=B(t,"formatting.nucleusByKey",{ppm:"0.0",hz:"0.0"});return c.exports.useMemo(()=>{function o(s){return(i,l="ppm",r="",a="")=>r+Cr(Number(i)).format(B(n,`${s.toLowerCase()}.${l}`,"0.0"))+a}if(!e)return()=>{};if(typeof e=="string")return o(e);if(Array.isArray(e))return e.map(s=>o(s));throw Error("nuclus must be string or array of string")},[e,n])}function Il(e){e=String(e).trim();const t=e.lastIndexOf(".");return t>0?e.substr(t).split("").length-1:0}const Ml=P`
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
`;function H0({layout:e,data1D:t}){const n=c.exports.useContext(at),{startX:o,endX:s,startY:i,endY:l,step:r}=c.exports.useContext(Ct),{margin:a,width:u,height:d,activeSpectrum:h,xDomain:m,yDomain:g,yDomains:x,activeTab:y,data:C,toolOptions:{selectedTool:v}}=$(),S=n&&on(e,{startX:n.x,startY:n.y}),E=y.split(","),[T,N]=Be(E),R=c.exports.useMemo(()=>{if(!t||t.length===0)return Ee({width:u,margin:a,xDomain:m});if(v!==F.slicingTool.id)switch(S){case Z.TOP_1D:case Z.CENTER_2D:return Ee({width:u,margin:a,xDomain:m});case Z.LEFT_1D:return be({height:d,margin:a,yDomain:g});default:return null}return null},[t,d,a,v,S,u,m,g]),M=c.exports.useMemo(()=>{if(!t||t.length===0)return be({height:d,margin:a,yDomain:g});if(v!==F.slicingTool.id)switch(S){case Z.CENTER_2D:return be({height:d,margin:a,yDomain:g});case Z.TOP_1D:return t[0]?hn(x[t[0].id],a.top):null;case Z.LEFT_1D:return t[1]?hn(x[t[1].id],a.left):null;default:return null}return null},[t,d,a,v,S,g,x]);if(!h||!n||n.y<10||n.x<10||n.x>u-a.right||n.y>d-a.bottom)return p("div",{css:Ml});const A=J=>{let V=null;if(S===Z.TOP_1D?V=0:S===Z.LEFT_1D&&(V=1),V!=null&&R!=null){const j=vn(t[V]),W=Ge(j.x,R.invert(J));return j.y[W]}return 1},D=(J=null)=>{if(R!=null)switch(S){case Z.CENTER_2D:case Z.TOP_1D:return R.invert(J||n.x);case Z.LEFT_1D:return R.invert(J||n.y);default:return 0}return 0},I=()=>{if(M!=null)switch(S){case Z.CENTER_2D:case Z.TOP_1D:return M.invert(n.y);case Z.LEFT_1D:return M.invert(n.x);default:return 0}return 0},O=()=>{switch(S){case Z.TOP_1D:return(A(o)/(A(s)||Number.MIN_VALUE)*100).toFixed(2);case Z.LEFT_1D:return(A(i)/(A(l)||Number.MIN_VALUE)*100).toFixed(2);default:return 0}},L=()=>{switch(S){case Z.TOP_1D:return(D(o)-D(s)).toPrecision(6);case Z.LEFT_1D:return(D(i)-D(l)).toPrecision(6);default:return 0}},H=(J,V,j)=>S===Z.CENTER_2D?w(c.exports.Fragment,{children:[J," ( ",p(Ks,{mf:j})," )"]}):V,z=()=>{if(S===Z.CENTER_2D){const{maxX:J,maxY:V,minX:j,minY:W,z:ne}=C[h.index].data,Pe=(J-j)/(ne[0].length-1),dt=(V-W)/(ne.length-1),Ut=Math.floor((D()-j)/Pe),Wt=Math.floor((I()-W)/dt);return Ut<0||Ut>=ne[0].length||Wt<0||Wt>=ne.length?0:ne[Wt][Ut]}return 0};return w("div",{css:Ml,children:[w("div",{children:[w("span",{className:"label",children:[H("F2","X",E[0])," :"]}),p("span",{className:"value",children:T(D())}),p("span",{className:"unit",children:"ppm"})]}),w("div",{children:[w("span",{className:"label",children:[H("F1","Y",E[1])," :"]}),p("span",{className:"value",children:N(I())}),p("span",{className:"unit",children:"ppm"})]}),w("div",{children:[p("span",{className:"label",children:"Intensity :"}),p("span",{className:"value",children:z()})]}),r==="brushing"&&w("div",{children:[p("span",{className:"label",children:" \u0394ppm :"}),p("span",{className:"value",children:L()})]}),r==="brushing"&&w("div",{children:[p("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[O(),"%"]})]})]})}const z0={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-88px",fontWeight:"bold",pointerEvents:"none",overflow:"visible",userSelect:"none",width:"85px",textAlign:"right"};function V0({layout:e,data1D:t}){const n=c.exports.useContext(at),{step:o}=c.exports.useContext(Ct),{margin:s,width:i,height:l,xDomain:r,yDomain:a,yDomains:u,activeTab:d,activeSpectrum:h}=$(),m=n&&on(e,{startX:n.x,startY:n.y}),g=d.split(","),[x,y]=Be(g),C=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return Ee({width:i,margin:s,xDomain:r});switch(m){case Z.TOP_1D:case Z.CENTER_2D:return Ee({width:i,margin:s,xDomain:r});case Z.LEFT_1D:return be({height:l,margin:s,yDomain:a});default:return null}},[h,t,l,s,m,i,r,a]),v=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return be({height:l,margin:s,yDomain:a});switch(m){case Z.CENTER_2D:return be({height:l,margin:s,yDomain:a});case Z.TOP_1D:return t[0]?hn(u[t[0].id],s.top):null;case Z.LEFT_1D:return t[1]?hn(u[t[1].id],s.left):null;default:return null}},[h,t,l,s,m,a,u]);if(o==="brushing"||!n||n.y<s.top||n.x<s.left||n.x>i-s.right||n.y>l-s.bottom)return null;const S=(T=null)=>{switch(m){case Z.CENTER_2D:case Z.TOP_1D:return C==null?void 0:C.invert(T||n.x);case Z.LEFT_1D:return C==null?void 0:C.invert(T||n.y);default:return 0}},E=()=>{switch(m){case Z.CENTER_2D:case Z.TOP_1D:return v==null?void 0:v.invert(n.y);case Z.LEFT_1D:return v==null?void 0:v.invert(n.x);default:return 0}};return _("div",{style:k(b({},z0),{transform:`translate(${n.x}px, ${n.y}px)`}),children:[f("span",{children:y(E())}),f("span",{style:{color:"gray"},children:","}),f("span",{style:{color:"red"},children:x(S())})]},"xLabelPointer")}function Hu(e,t,n=10){return qe(mt(t),[e-n,n])}function B0({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,displayerKey:i}=$(),l=ro(wn.XAxis),r=o.top,a=c.exports.useMemo(()=>{if(t){const{x:u,re:d}=t,h=Ee({margin:o,width:n,xDomain:s}),m=Hu(r,d,e),g=l({x:u,y:d}),x=new Yt;x.moveTo(h(g.x[0]),m(g.y[0]));for(let y=1;y<g.x.length;y++)x.lineTo(h(g.x[y]),m(g.y[y]));return x.toString()}else return},[t,r,e,o,n,s,l]);return!n||!r?null:_("svg",{viewBox:`0 0 ${n} ${r}`,width:n,height:r,children:[f("defs",{children:f("clipPath",{id:`${i}clip-top`,children:f("rect",{width:n-o.left-o.right,height:r,x:o.left,y:`${0}`})})}),_("g",{clipPath:`url(#${i}clip-top)`,children:[f("rect",{width:n-o.left-o.right,height:r,x:o.left,y:`${0}`,fillOpacity:"0"}),f("path",{className:"line",stroke:"red",fill:"none",d:a})]})]})}var j0=c.exports.memo(B0);function X0({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,displayerKey:i}=$(),l=ro(wn.YAxis),r=o.left,a=c.exports.useMemo(()=>{if(t){const{x:d,re:h}=t,m=be({height:n,margin:o,yDomain:s}),g=Hu(r,h,e),x=l({x:d,y:h}),y=new Yt;y.moveTo(g(x.y[x.y.length-1]),m(x.x.length-1));for(let C=x.x.length-2;C>=0;C--)y.lineTo(g(x.y[C]),m(x.x[C]));return y.toString()}else return},[t,r,o,e,n,l,s]),u=n-o.bottom-o.top;return!u||!r?null:_("svg",{viewBox:`0 0 ${r} ${u+o.top}`,width:r,height:u+o.top,children:[f("defs",{children:f("clipPath",{id:`${i}clip-left`,children:f("rect",{width:r,height:u,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${i}clip-left)`,children:f("path",{className:"line",stroke:"red",fill:"none",d:a})})]})}var Y0=c.exports.memo(X0);function G0(){const{width:e,height:t,margin:n,activeSpectrum:o,data:s,xDomain:i,yDomain:l}=$(),r=ff(),a=c.exports.useMemo(()=>{if(r&&o&&o.id){const{x:u,y:d}=r,h=Ee({margin:n,width:e,xDomain:i}),m=be({margin:n,height:t,yDomain:l}),g=pg(s[o.index],{x:h.invert(u),y:m.invert(d)});return _("svg",{viewBox:`0 0 ${e} ${t}`,width:e,height:t,style:{position:"absolute",backgroundColor:"rgba(255,255,255,0.8)"},children:[(g==null?void 0:g.horizontal)&&f(j0,{data:g.horizontal.data}),(g==null?void 0:g.vertical)&&f(Y0,{data:g.vertical.data})]})}return null},[r,o,n,e,i,t,l,s]);return r?a:null}function Z0({emptyText:e=void 0}){const t=$(),{toolOptions:{selectedTool:n},isLoading:o,data:s,margin:i,tabActiveSpectrum:l,activeTab:r}=t,a=Y(),{info:u}=ve({info:{}}),d=u.isFt||!("isFt"in u),h=c.exports.useMemo(()=>r.split(",").reduce((S,E)=>{var T,N;if((T=l[E])==null?void 0:T.id){const R=(N=l[E])==null?void 0:N.id,M=s.find(A=>A.id===R&&!A.info.isFid);M&&S.push(M)}else S.push(null);return S},[]),[r,s,l]),m=Ax(t),g=c.exports.useCallback(v=>{if(on(m,v)&&!v.altKey)if(v.shiftKey)switch(n){case F.zone2D.id:a(b({type:Rc},v));break}else switch(n){default:if(n!=null)return a(k(b({type:ss},v),{trackID:on(m,v)}))}},[n,a,m]),x=c.exports.useCallback(v=>{const{x:S,y:E}=v,T=on(m,{startX:S,startY:E});T&&a({type:mn,trackID:T})},[m,a]),y=v=>{const{x:S,y:E}=v,T=on(m,{startX:S,startY:E});T&&a(T==="CENTER_2D"?b({type:Mc},v):{type:os,event:v,trackID:T})},C=c.exports.useCallback(v=>{},[n]);return d?f(qs,{children:({width:v,height:S})=>_(zu,{width:v,height:S,children:[f(Tu,{isLoading:o,emptyText:e}),s&&s.length>0&&f(Vr,{onBrush:g,onDoubleClick:x,onClick:C,onZoom:y,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:_(Br,{style:{width:"100%",height:"100%",position:"absolute"},children:[n&&n===F.slicingTool.id&&f(G0,{}),f(Du,{}),h&&f(V0,{data1D:h,layout:m}),f(yo,{brushType:De.XY,dimensionBorder:m.CENTER_2D}),_(Ue,{children:[(h==null?void 0:h[0])&&f(yo,{brushType:De.X,dimensionBorder:m.TOP_1D,height:i.top}),(h==null?void 0:h[1])&&f(yo,{brushType:De.Y,dimensionBorder:m.LEFT_1D,width:i.left})]}),h&&f(H0,{data1D:h,layout:m}),f($0,{spectra:h})]})})]})}):f(wu,{emptyText:"Currently FID can not be displayed for 2D spectra",canOpenLoader:!1})}function zu(e){const t=Y(),{width:n,height:o,children:s}=e;return c.exports.useEffect(()=>{t({type:Ci,width:n,height:o})},[n,o,t]),s}const U0="SET_X_SCALE",W0="SET_Y_SCALE",Vu="SET_SCALE",Bu={scaleX:null,scaleY:null};function K0(e,t){switch(t.type){case U0:e.scaleX=(n=null)=>zt(t,n);break;case W0:e.scaleY=(n=null)=>Mo(t,n);break;case Vu:{e.scaleX=(n=null)=>zt(t.payload,n),e.scaleY=(n=null)=>Mo(t.payload,n);break}default:return e}}const q0=Us(K0),ju=c.exports.createContext(Bu),J0=ju.Provider;function Hi(){return c.exports.useContext(ju)}function fe(){const e=Hi();if(!e.scaleX||!e.scaleY)throw new Error("scale cannot be null");return e}const te={TOP_LEFT:"top left",TOP_CENTER:"top center",TOP_RIGHT:"top right",MIDDLE_LEFT:"middle left",MIDDLE:"middle",MIDDLE_RIGHT:"middle right",BOTTOM_LEFT:"bottom left",BOTTOM_CENTER:"bottom center",BOTTOM_RIGHT:"bottom right"},Rn={INFO:"info",SUCCESS:"success",ERROR:"error",PROGRESS_INDICATOR:"progress_indicator"},Je={FADE:"fade",SCALE:"scale",SLIDE_RIGHT:"slide_right",SLIDE_LEFT:"slide_left",SLIDE_TOP:"slide_top",SLIDE_BOTTOM:"slide_bottom"},Xu=c.exports.createContext({}),Q0=Xu.Provider;function re(){return c.exports.useContext(Xu)}const Xs=250,ev={[Je.FADE]:{transition:`opacity ${Xs}ms ease`,opacity:0},[Je.SCALE]:{transform:"scale(1)",transition:`all ${Xs}ms ease-in-out`}},tv={[Je.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Je.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(1)"}}};function Yu(s){var i=s,{children:e,type:t,transitionStyles:n=tv}=i,o=G(i,["children","type","transitionStyles"]);const l=c.exports.useRef(null);return f(hp,k(b({nodeRef:l},o),{timeout:Xs,children:r=>f("div",{ref:l,style:b(b(b({},ev[t]),n[t][r]),n.default),children:e})}))}function nv(e,t){const n=b({position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",pointerEvents:"none",overflow:"visible"},t?{top:`${t.top}px`,left:`${t.left}px`,height:`${t.height}px`,width:`${t.width}px`}:{width:"100%",height:"100%"});switch(e){case te.TOP_LEFT:return k(b({},n),{justifyContent:"flex-start",alignItems:"flex-start"});case te.TOP_CENTER:return k(b({},n),{justifyContent:"flex-start"});case te.TOP_RIGHT:return k(b({},n),{justifyContent:"flex-start",alignItems:"flex-end"});case te.MIDDLE_LEFT:return k(b({},n),{justifyContent:"center",alignItems:"flex-start"});case te.MIDDLE:return k(b({},n),{justifyContent:"center"});case te.MIDDLE_RIGHT:return k(b({},n),{justifyContent:"center",alignItems:"flex-end"});case te.BOTTOM_LEFT:return k(b({},n),{justifyContent:"flex-end",alignItems:"flex-start"});case te.BOTTOM_CENTER:return k(b({},n),{justifyContent:"flex-end"});case te.BOTTOM_RIGHT:return k(b({},n),{justifyContent:"flex-end",alignItems:"flex-end"});default:return n}}function Gu(s){var i=s,{children:e,options:{position:t},containerStyle:n}=i,o=G(i,["children","options","containerStyle"]);const l=c.exports.useMemo(()=>nv(t,n),[t,n]);return e.length>0&&f("div",k(b({style:l},o),{children:e}))}function ov(e,t){return e.reduce((n,o)=>{const s=t(o);return n[s]||(n[s]=[]),n[s].push(o),n},{})}const sv=P`
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
`;function iv(){return p("div",{css:sv})}function lv(a){var u=a,{children:e,wrapperRef:t=null,offset:n="5px",position:o=te.BOTTOM_CENTER,timeout:s=3e3,type:i,transition:l=Je.FADE}=u,r=G(u,["children","wrapperRef","offset","position","timeout","type","transition"]);const d=c.exports.useRef(null),h=c.exports.useRef([]),[m,g]=c.exports.useState([]);c.exports.useEffect(()=>{d.current=document.createElement("div");const A=d.current,D=h.current;return t&&t.appendChild(A),()=>{A&&t&&(D.forEach(clearTimeout),t.removeChild(A))}},[t]);const x=c.exports.useCallback(A=>{g(D=>{const I=D.length,O=D.filter(L=>L.id!==A.id);return I>O.length&&A.options.onClose&&A.options.onClose(),O})},[]),y=c.exports.useCallback((A="",D={})=>{const I=Math.random().toString(36).substr(2,9),O=b({position:D.position||o,timeout:s,type:i,backgroundColor:"black",color:"white"},D),L={id:I,message:A,options:O};if(L.close=()=>x(L),L.options.timeout){const H=setTimeout(()=>{x(L),h.current.splice(h.current.indexOf(H),1)},L.options.timeout);h.current.push(H)}return g(H=>H.concat(L)),L.options.onOpen&&L.options.onOpen(),L},[o,x,s,i]),C=c.exports.useCallback((A="",D={})=>(D.type=Rn.SUCCESS,D=b({backgroundColor:"#28ba62",color:"white"},D),y(A,D)),[y]),v=c.exports.useCallback((A="",D={})=>(D.type=Rn.ERROR,D=b({backgroundColor:"#cf3c4f",color:"white"},D),y(A,D)),[y]),S=c.exports.useCallback((A="",D={})=>(D.type=Rn.INFO,D.color="#28ba62",y(A,D)),[y]),E=c.exports.useCallback((A="Process in progress",D={})=>(D.type=Rn.PROGRESS_INDICATOR,D.timeout=0,D.backgroundColor="#232323",new Promise(I=>{const O=y(A,D);setTimeout(()=>{I(()=>x(O))},500)})),[x,y]),T=c.exports.useCallback(A=>{x(A)},[x]),N=ov(m,A=>A.options.position),R=c.exports.useMemo(()=>t?t.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[t]),M=c.exports.useMemo(()=>({show:y,success:C,error:v,info:S,showLoading:E}),[y,C,v,S,E]);return _(Q0,{value:M,children:[e,d.current&&Yo.exports.createPortal(f(c.exports.Fragment,{children:Object.keys(te).map(A=>{const D=te[A];return f(Sr,k(b({appear:!0,options:{position:D,zIndex:999999},component:Gu,containerStyle:R},r),{children:N[D]?N[D].map(I=>f(Yu,{type:l,children:_("div",{style:{margin:n,padding:"25px",borderRadius:"10px",pointerEvents:"all",backgroundColor:I.options.backgroundColor,color:I.options.color,minHeight:"60px",position:"relative"},children:[f("button",{style:{position:"absolute",right:"5px",top:"5px",border:"none",backgroundColor:"transparent",color:"white"},type:"button",onClick:()=>T(I),children:f(Js,{})}),f("span",{children:I.message}),I.options.type===Rn.PROGRESS_INDICATOR&&f(iv,{})]},I.id)},I.id)):null}),D)})}),d.current)]})}var rv=c.exports.memo(lv);const Zu=c.exports.createContext({}),av=Zu.Provider;function he(){return c.exports.useContext(Zu)}const cv=P`
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
`;function uv({style:e={},buttons:t=[],onClose:n,message:o}){const s=c.exports.useCallback((i,{handler:l=()=>null})=>{l(i),n()},[n]);return w("div",{style:e,css:cv,children:[p("p",{className:"message",children:o}),p("div",{className:"buttons-container",children:t.map(i=>p("button",{type:"button",onClick:l=>s(l,i),style:i.style&&i.style,children:i.text},i.text))})]})}const dv=({modal:e,onClose:t,onLayout:n})=>{const o=c.exports.useRef(),[s,{width:i,height:l}]=fp(()=>f("div",{style:{height:"100%",display:"block",overflow:"auto"},children:c.exports.cloneElement(e.component,k(b({},e.options),{onClose:t,style:{cursor:"default"}}))}));return c.exports.useEffect(()=>{isFinite(l)&&isFinite(i)&&!o.current&&(o.current={width:i,height:l},n({modal:e,layout:{width:i,height:l}}))},[i,l,o,n,e]),s},pv={[Je.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Je.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(0)"}}};function hv({children:e,style:t=void 0,offset:n="0px",position:o=te.MIDDLE,transition:s=Je.SCALE,wrapperRef:i=null}){const l=c.exports.useRef(),r=c.exports.useRef(),[a,u]=c.exports.useState();c.exports.useEffect(()=>{l.current=document.createElement("div");const S=l.current;return i&&i.appendChild(S),()=>{S&&i&&i.removeChild(S)}},[i]);const d=c.exports.useCallback(function(){u(null)},[u]),h=c.exports.useMemo(()=>i?i.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[i]),m=c.exports.useCallback((S,E={})=>{const T={component:S,options:b({isBackgroundBlur:!0,enableResizing:!1},E)};return T.close=d,u(T),T.options.onOpen&&T.options.onOpen(),T},[d]),g=c.exports.useCallback((S,E={enableResizing:!1})=>{const T={component:p(uv,b({},S)),options:b({isBackgroundBlur:!0},E)};return T.close=d,u(T),T.options.onOpen&&T.options.onOpen(),T},[d]);c.exports.useEffect(()=>{function S(E){["Escape","Esc"].includes(E.key)&&d()}return document.addEventListener("keydown",S,!1),()=>document.removeEventListener("keydown",S,!1)},[d]);const x=P`
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
  `,y=(a==null?void 0:a.options.isBackgroundBlur)?{backgroundColor:"rgba(255,255,255,0.8)"}:{pointerEvents:"none"},C=c.exports.useMemo(()=>({show:m,close:d,showConfirmDialog:g}),[m,d,g]),v=c.exports.useCallback(({modal:S,layout:E})=>{const T=S.options.width?S.options.width:E.width>h.width?h.width:E.width,N=S.options.height?S.options.height:E.height>h.height?h.height:E.height;r.current.updateSize({width:T,height:N})},[h.height,h.width]);return w(av,{value:C,children:[e,l.current&&Yo.exports.createPortal(p(c.exports.Fragment,{children:a?p("div",{css:x,style:b({},y),children:p(Sr,{appear:!0,options:{position:a.options.position?a.options.position:o},containerStyle:h,component:Gu,children:p(Yu,{type:a.options.transition?a.options.transition:s,transitionStyles:k(b({},pv),{default:{width:a.options.width?`${a.options.width}px`:"auto"},height:a.options.height?`${a.options.height}px`:"auto"}),children:p(mp,{maxWidth:h.width,maxHeight:h.height,ref:r,default:{width:a.options.width?a.options.width:"auto",height:a.options.height?a.options.height:"auto",x:0,y:0},className:"rnd-container",style:k(b({},t),{margin:n,position:"static",pointerEvents:"all",userSelect:"none"}),enableResizing:a.options.enableResizing,dragHandleClassName:"handle",enableUserSelectHack:!1,children:p(dv,{modal:a,onClose:d,onLayout:v})})},a.id)},te[a.options.transition?a.options.transition:s])}):null}),l.current)]})}const Uu=c.exports.createContext({}),fv=Uu.Provider;function zi(){return c.exports.useContext(Uu)}const mv={popup:{position:"fixed",top:0,left:0,pointerEvents:"none",backgroundColor:"gray",padding:"3px",borderRadius:"2px",color:"white",whiteSpace:"nowrap",fontSize:"10px",fontFamily:"tahoma",textShadow:"none"}};function gv({style:e={popup:{},mainContainer:{}},className:t="",popupPlacement:n="right",children:o,title:s,offset:i={x:0,y:0}}){const l=c.exports.useRef(null),r=c.exports.useRef(null),[a,u]=c.exports.useState({x:0,y:0}),[d,h]=c.exports.useState(!1),{elementsWraperRef:m}=zi();c.exports.useLayoutEffect(()=>{const y=()=>{let C,v;if(l.current===null||r.current===null)return null;const S=l.current.getBoundingClientRect(),E=r.current.getBoundingClientRect();switch(n){case"left":C=-E.width,v=S.height/2-S.height/2*E.height/S.height;break;case"right":C=S.width,v=S.height/2-S.height/2*E.height/S.height;break;case"top":C=S.width/2-S.width/2*E.width/S.width,v=-S.height;break;case"bottom":C=S.width/2-S.width/2*E.width/S.width,v=S.height;break;default:C=0,v=0;break}return{x:C+S.x,y:v+S.y}};if(d){const C=y();C&&u(C)}},[n,d]);const g=c.exports.useCallback(()=>{h(!0)},[]),x=c.exports.useCallback(()=>{h(!1)},[]);return _(c.exports.Fragment,{children:[f("div",{style:b({position:"relative",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},e.mainContainer),ref:l,onMouseOver:g,onMouseOut:x,children:o}),d&&Yo.exports.createPortal(f("div",{ref:r,style:b(k(b({},mv.popup),{transform:`translate(${a.x+i.x}px,${a.y+i.y}px)`,zIndex:999999999}),e.popup),className:t,children:f("span",{style:{pointerEvents:"none"},children:s})}),m)]})}var we=c.exports.memo(gv);const Rl={button:{backgroundColor:"transparent",border:"none",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},svg:{fill:"#ca0000",fontSize:"16px"}};function xv(e){const{onClick:t=()=>null,popupTitle:n="Close",popupPlacement:o="left",className:s=""}=e;return f("div",{className:s,children:f(we,{title:n,popupPlacement:o,children:f("button",{style:Rl.button,type:"button",onClick:t,children:f(Js,{style:Rl.svg})})})})}var me=c.exports.memo(xv);const bv=P`
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
`,yv=P`
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
`;function vv({data:e,activeSpectrum:t,scaleX:n,startX:o,endX:s,onClose:i}){var m;const[l,r]=c.exports.useState(),[a,u]=c.exports.useState(!1),[d,h]=c.exports.useState(!1);return c.exports.useEffect(()=>{setTimeout(()=>{u(!0)},400)},[]),c.exports.useEffect(()=>{if(t&&o&&s&&a){const g=e[t.index];if(Os(g))throw new Error("unreachable");const{data:{x,re:y},info:C}=g,v=n().invert(o),S=n().invert(s),{fromIndex:E,toIndex:T}=Un(x,{from:v,to:S}),N={x:x.slice(E,T),y:y.slice(E,T)};try{const R=hr(N,{frequency:C.originFrequency,takeBestPartMultiplet:!0,symmetrizeEachStep:!0,debug:!0});h(!0),r(R)}catch(R){console.log(R)}}},[o,s,e,n,t,a]),d?w("div",{css:bv,children:[w("div",{className:"header handle",children:[p("span",{children:"Analyse Multiplet"}),p(me,{onClick:i})]}),p("div",{className:"container",children:(m=l==null?void 0:l.debug)==null?void 0:m.steps.map((g,x)=>{var y,C;return w("div",{className:"row",children:[w(cn,{width:400,height:200,svgStyle:{overflow:"visible"},seriesViewportStyle:{stroke:"black"},children:[p(Ke,{data:sl(g.multiplet)}),p($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),p($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]}),p("div",{className:"multiplicity",children:p("p",{children:l.js[x]?`${(y=l.js[x])==null?void 0:y.multiplicity}: ${(C=l.js[x])==null?void 0:C.coupling.toFixed(3)} Hz`:""})}),w(cn,{width:400,height:200,seriesViewportStyle:{stroke:"black"},children:[p(Ke,{data:sl(g.errorFunction),lineStyle:{strokeWidth:1}}),p($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),p($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]})]},x)})})]}):w("div",{css:yv,children:[p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[p("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),p("path",{d:"M520.5 78.1z"})]})}),p("p",{children:"Analyse Multiplet in progress. Please wait ..."})]})}function Wu(){const{data:e,activeTab:t}=$();return c.exports.useMemo(()=>e?e.filter(n=>t===kt(n.info.nucleus))||[]:[],[t,e])}function Ku(e){const{activeSpectrum:t}=$(),n=ie();return c.exports.useMemo(()=>{const o=t===null?!0:e===t.id,s=o?1:B(n,"controllers.dimmedSpectraTransparency",.1);return{isActive:o,opacity:s}},[t,e,n])}function Cv({zone:e,color:t,vAlign:n,spectrumID:o}){const{scaleX:s,scaleY:i}=fe(),l=le([e.id],{type:ue.EXCLUSION_ZONE,extra:{id:e.id,spectrumID:o}}),{opacity:r}=Ku(o);return f("g",{transform:`translate(${s()(e.to)},0)`,children:f("rect",b({x:"0",transform:`translate(0,${i()(0)-(n+5)})`,width:`${s()(e.from)-s()(e.to)}`,height:"10px",style:{fill:l.isActive?"#ff6f0057":t,opacity:r}},l.onHover))},e.id)}var Sv=c.exports.memo(Cv);function cs(e,t){const{index:n=1,align:o="stack"}=t||{index:1,align:"stack"};return e.align===o?n*e.verticalShift:0}function kv({displayerKey:e,xDomains:t,spectra:n,verticalAlign:o}){return f("g",{className:"spectrum-exclusion-zones-group",clipPath:`url(#${e}clip-chart-1d)`,children:n.filter(s=>s.display.isVisible===!0&&t[s.id]).map((s,i)=>Av(s).map(l=>f(Sv,{spectrumID:s.id,vAlign:cs(o,{index:i}),zone:l,color:s.display.color},l.id)))})}const wv=c.exports.memo(kv);function Ev(){const{displayerKey:e,xDomains:t,displayerMode:n,verticalAlign:o}=$(),s=Wu();return n!==X.DM_1D?null:f(wv,{spectra:s,displayerKey:e,xDomains:t,verticalAlign:o})}function Av(e){var t;return((t=e.filters.find(n=>n.name===Jn&&n.flag))==null?void 0:t.value)||[]}function Tv(){const{width:e,margin:t,xDomains:n,xDomain:o,mode:s}=$();return c.exports.useMemo(()=>zt({width:e,margin:t,xDomains:n,xDomain:o,mode:s}),[t,s,e,o,n])}function Dv(){const{height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}=$();return c.exports.useMemo(()=>ex({height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}),[o,e,s,t,n])}function qu(e){const{data:t,activeSpectrum:n}=$(),o=Tv(),s=Dv(),i=c.exports.useMemo(()=>{if(n){const{x:r,re:a}=t[n==null?void 0:n.index].data,{from:u,to:d}=e;return gp({x:r,y:a},{from:u,to:d,reverse:!0})}return{x:[],y:[]}},[n,t,e]);return c.exports.useMemo(()=>{if(i){const r=vr(i,{nbPoints:200,optimize:!0}),a=new Yt;a.moveTo(o(r.x[0]),s(r.y[0]));for(let u=1;u<r.x.length;u++)a.lineTo(o(r.x[u]),s(r.y[u]));return a.toString()}else return""},[i,o,s])}const Nt={showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",color:"#000000",strokeWidth:1},Iv={showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00"},Vi=e=>({showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",jGraphTolerance:e==="1H"?.2:e==="13C"?2:0}),Ju={showPeakNumber:!0,peakNumberFormat:"0",showPeakIndex:!1,peakIndexFormat:"0.00",showDeltaPPM:!0,deltaPPMFormat:"0.00",showDeltaHz:!1,deltaHzFormat:"0.00",showPeakWidth:!1,peakWidthFormat:"00.0000",showIntensity:!0,intensityFormat:"0.00"},Qu={showSmiles:!0,showSolvent:!1,showNames:!0,showRange:!1,showDelta:!0,showAssignment:!1,showCoupling:!0,showMultiplicity:!0};function Bi({from:e,to:t,onDrag:n=()=>null,onDrop:o}){const{height:s,margin:i,mode:l}=$(),[r,a]=c.exports.useState(!1),[u,d]=c.exports.useState(!1),[h,m]=c.exports.useState(!0),g=c.exports.useRef(null),x=c.exports.useRef(null),{scaleX:y}=fe(),C=c.exports.useCallback(D=>{D.preventDefault(),D.stopPropagation(),a(!0)},[]),v=c.exports.useCallback(D=>{n({from:y().invert(D.layerX)})},[n,y]),S=c.exports.useCallback(D=>{D.preventDefault(),D.stopPropagation(),a(!1);const I=l==="RTL"?[y().invert(D.layerX),t]:[t,y().invert(D.layerX)];let O;I[1]>I[0]?O={from:I[0],to:I[1]}:O={from:e,to:t},o(O)},[e,l,o,y,t]),E=c.exports.useCallback(D=>{D.preventDefault(),D.stopPropagation(),d(!0)},[]),T=c.exports.useCallback(D=>{n({to:y().invert(D.layerX)})},[n,y]),N=c.exports.useCallback(D=>{D.preventDefault(),D.stopPropagation(),d(!1);const I=l==="RTL"?[e,y().invert(D.layerX)]:[y().invert(D.layerX),e];let O;I[1]>I[0]?O={from:I[0],to:I[1]}:O={from:e,to:t},o(O)},[e,l,o,y,t]),R=c.exports.useCallback(({shiftKey:D})=>{D&&m(!1)},[]),M=c.exports.useCallback(()=>{m(!0)},[]),A=c.exports.useCallback(({target:D,shiftKey:I})=>{I?D.style.cursor="crosshair":D.style.cursor="ew-resize"},[]);return w(c.exports.Fragment,{children:[p(il,{axis:"x",defaultPosition:{x:y()(e),y:0},position:{x:y()(e),y:0},scale:1,handle:".handle",onStart:C,onDrag:v,onStop:S,nodeRef:g,children:p("rect",{ref:g,className:h?"handle":"",width:r?1:6,fill:"red",height:s+i.top,style:{fillOpacity:r?1:0},onMouseDownCapture:R,onMouseUpCapture:M,onMouseEnter:A})}),p(il,{axis:"x",defaultPosition:{x:y()(t),y:0},position:{x:y()(t),y:0},handle:".handle",scale:1,onStart:E,onDrag:T,onStop:N,nodeRef:x,children:p("rect",{ref:x,className:h?"handle":"",width:u?1:6,fill:"red",height:s+i.top,style:{fillOpacity:u?1:0},onMouseDownCapture:R,onMouseUpCapture:M,onMouseEnter:A})})]})}const Mv=P`
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
`,Rv=P`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  fill: #ff6f0057;

  .target {
    visibility: visible;
  }
`;function Nv({integralData:e}){const{height:t,margin:n}=$(),{scaleX:o}=fe(),s=Y(),[{id:i,integral:l,from:r,to:a},u]=c.exports.useState(e),d=le([i],{type:ue.INTEGRAL,extra:{id:i}});c.exports.useEffect(()=>{u(e)},[e]);const h=c.exports.useCallback(v=>{s({type:rc,payload:{data:b(b({},e),v)}})},[s,e]),m=c.exports.useCallback(()=>{d.show()},[d]),g=c.exports.useCallback(()=>{d.hide()},[d]),x=c.exports.useCallback(v=>{u(S=>b(b({},S),v))},[]),y=r?o()(r):0,C=a?o()(a):0;return w("g",{css:d.isActive?Rv:Mv,onMouseEnter:m,onMouseLeave:g,children:[p("rect",{"data-no-export":"true",x:`${C}`,y:"0",width:`${y-C}`,height:t-n.bottom,className:"highlight"}),p("text",{x:C,y:t-n.bottom+30,fill:"black",style:{fontSize:"12px",fontWeight:"bold"},children:l!==void 0?l.toFixed(2):""}),p(Bi,{from:e.from,to:e.to,onDrag:x,onDrop:h,"data-no-export":"true"})]})}function Pv({integral:e,isActive:t}){const n=ie(),o=qu(e),s=c.exports.useMemo(()=>{let{color:i=Nt.color,strokeWidth:l=Nt.strokeWidth}=ut(n,"formatting.panels.integrals")||{};return{color:i,strokeWidth:l}},[n]);return _("g",{children:[f("path",{className:"line",stroke:s.color,strokeWidth:s.strokeWidth,fill:"none",style:{opacity:t?1:.2},d:o}),f(Nv,{integralData:e})]})}function Fv(){const{xDomains:e,activeSpectrum:t,data:n,displayerKey:o}=$(),s=c.exports.useMemo(()=>{const i=l=>t===null?!0:l===t.id;return f("g",{className:"integrals",children:(n==null?void 0:n[0])&&n.filter(l=>l.display.isVisible===!0&&e[l.id]).filter(eo).map(l=>l.integrals.values.map(r=>f(Pv,{integral:r,isActive:i(l.id)},r.id)))})},[t,n,e]);return f("g",{clipPath:`url(#${o}clip-chart-1d)`,children:s})}function _v({data:e,id:t,display:n,index:o}){const{verticalAlign:s}=$(),{scaleX:i,scaleY:l}=fe(),r=ro(wn.XAxis),{opacity:a}=Ku(t),u=c.exports.useMemo(()=>cs(s,{index:o}),[o,s]),d=c.exports.useMemo(()=>{const h=i(),m=l(t),g=new Yt;if((e==null?void 0:e.x)&&(e==null?void 0:e.y)&&h(0)){const x=r(e);g.moveTo(h(x.x[0]),m(x.y[0]));for(let y=1;y<x.x.length;y++)g.lineTo(h(x.x[y]),m(x.y[y]));return g.toString()}else return""},[i,l,t,e,r]);return f("path",{className:"line","data-test-id":"spectrum-line",stroke:n.color,fill:"none",style:{opacity:a},d,transform:`translate(0,-${u})`},t)}function Lv(){const{data:e,tempData:t,displayerKey:n,xDomains:o}=$(),s=t||e;return f("g",{clipPath:`url(#${n}clip-chart-1d)`,className:"spectrums",children:s==null?void 0:s.filter(i=>i.display.isVisible===!0&&o[i.id]).map((i,l)=>f(_v,k(b({},i),{data:vn(i),index:l}),i.id))})}const Ov=P`
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
`;function $v({id:e,x:t,y:n,sign:o,value:s,color:i,isActive:l,nucleus:r}){const a=c.exports.useRef(null),[u,d]=c.exports.useState(!1),[h,m]=c.exports.useState(s),[g,x]=c.exports.useState({width:0,height:0}),y=Be(r),C=le([e],{type:ue.PEAK,extra:{id:e}}),v=Y(),S=c.exports.useCallback(I=>v({type:yi,shiftValue:I.shiftValue}),[v]);c.exports.useLayoutEffect(()=>{var O;const I=(O=a.current)==null?void 0:O.getBBox();x({width:(I==null?void 0:I.width)||0,height:(I==null?void 0:I.height)||0})},[u]),c.exports.useEffect(()=>{m(s)},[s]);const E=c.exports.useCallback(I=>{if(I.key==="Enter"){const O=I.currentTarget.valueAsNumber;if(!isNaN(O)){const L=O-s;S({id:e,value:O,oldValue:s,shiftValue:L}),I.currentTarget.blur(),d(!1)}}else I.key==="Escape"&&(m(s),I.currentTarget.blur(),d(!1))},[s,S,e]),T=c.exports.useCallback(I=>{m(I.target.value)},[]),N=c.exports.useCallback(I=>(I.stopPropagation(),d(!0),!1),[]),R=c.exports.useCallback(()=>{C.show()},[C]),M=c.exports.useCallback(()=>{C.hide()},[C]),A=c.exports.useMemo(()=>u?s:y(s),[y,u,s]),D=c.exports.useMemo(()=>u?h:y(h),[h,y,u]);return w("g",{css:Ov,id:e,style:{outline:"none"},transform:`translate(${t}, ${n})`,onMouseEnter:R,onMouseLeave:M,children:[p("line",{x1:"0",x2:"0",y1:o===-1?10:0,y2:o===-1?28:-18,stroke:i,strokeWidth:C.isActive?"7px":"1px"}),p("text",{ref:a,className:"peaks-text",x:"0",y:o===-1?28:-12,dy:"0",dx:"0.35em",fill:"transparent",fontSize:"10px",fontWeight:"100",style:{position:"absolute"},children:A}),p("foreignObject",{x:"0",y:o===-1?16:-22,dy:"0.1em",dx:"0.35em",width:g.width+20,height:"40px","data-no-export":"true",children:p("div",{style:{width:g.width+20,height:"100%",paddingRight:5},children:p("input",{onClick:N,className:u?"input-over":"notification-input-normal",style:{width:"inherit",border:u?`1px solid ${i}`:"0",opacity:l?1:.2,userSelect:"none",color:i},value:D,onKeyDown:E,onChange:T,type:"number",disabled:!l})})})]})}function Hv(){const{data:e,activeSpectrum:t,verticalAlign:n,displayerKey:o,xDomains:s}=$(),{scaleX:i,scaleY:l}=fe(),r=c.exports.useMemo(()=>{const a=d=>{const h=e.findIndex(m=>m.id===d);return cs(n,{index:h})};return e&&(()=>{const d=[...e];return t?d.sort((h,m)=>h.id===t.id?1:m.id===t.id?-1:0):d})().filter(d=>d.display.isVisible===!0&&s[d.id]).filter(eo).map(d=>{var h;return((h=d.peaks)==null?void 0:h.values)&&d.display.isPeaksMarkersVisible&&f("g",{transform:`translate(0,-${a(d.id)})`,children:d.peaks.values.map(({x:m,y:g,id:x})=>f($v,{x:i()(m),y:l(d.id)(g)-5,sign:Math.sign(g),id:x,value:m,color:"#730000",nucleus:d.info.nucleus,isActive:t==null?!1:t.id===d.id},x))},d.id)})},[e,n,t,s,i,l]);return f("g",{className:"peaks",clipPath:`url(#${o}clip-chart-1d)`,children:r})}const zv={info:{originFrequency:400}};function Vv(){var x;const{displayerKey:e,verticalAlign:t,height:n,margin:o}=$(),{info:s}=ve(zv),{highlight:i}=En(),{scaleX:l}=fe();if(((x=i.sourceData)==null?void 0:x.type)!==ue.DATABASE)return null;const r=n-o.bottom,a=r/4,{ranges:u}=i.sourceData.extra||[];let d=[0,0];const h=u.map(y=>{const{from:C,to:v}=y,S=Math.abs(C-v)/2,E=C-S,T=v+S,N=gr([y],{frequency:s.originFrequency,from:E,to:T,nbPoints:256}),R=mt(N.y);return d[0]=R[0]<d[0]?R[0]:d[0],d[1]=R[1]>d[1]?R[1]:d[1],{data:N,from:E,to:T}},[]),m=Mo({height:a,margin:{top:0,bottom:0},verticalAlign:t,yDomain:d}),g=h.map(({data:{x:y,y:C},from:v,to:S})=>{let E=`M ${l()(y[0])} ${m(C[0])} `;return E+=y.slice(1).reduce((T,N,R)=>(T+=` L ${l()(N)} ${m(C[R+1])}`,T),""),{path:E,from:v,to:S}},[]);return f("g",{clipPath:`url(#${e}clip-chart-1d)`,className:"resurrected-database-ranges",width:"100%",height:"100%",children:g.map(({path:y,from:C,to:v},S)=>_("g",{children:[f("g",{transform:`translate(${l()(v)},0)`,children:f("rect",{x:"0",width:Math.abs(l()(v)-l()(C)),height:"100%",fill:"#ff6f0057"})}),f("path",{transform:`translate(0,${r-a*2})`,stroke:"black",fill:"none",d:y})]},`${S}`))})}const Bv=P`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,jv=P`
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
`;function Xv(e){const{show:t=!0,showGrid:n=!1,mode:o,label:s}=e,{xDomain:i,height:l,width:r,margin:a}=$(),{scaleX:u}=Hi(),d=c.exports.useRef(null),h=c.exports.useRef(null),m=s||(o==="RTL"?"\u03B4 [ppm]":"time [s]");return c.exports.useEffect(()=>{if(!t||!u)return;const g=Is(u().domain(i)).ticks(8).tickFormat(Ws("0")),x=Is(u().domain(i)).ticks(50).tickSize(-(l-a.top-a.bottom)).tickFormat(()=>"");ko(d.current).call(g),ko(h.current).call(x)},[l,a.bottom,a.top,u,t,i]),!r||!l||!u?null:w(Qe,{children:[t&&p("g",{className:"x",css:Bv,transform:`translate(0,${l-a.bottom})`,ref:d,children:p("text",{fill:"#000",x:r-10,y:"30",dy:"0.70em",textAnchor:"end",children:m})}),n&&p("g",{css:jv,className:"grid",ref:h,transform:`translate(0,${l-a.bottom})`})]})}function Yv(e,t){if(!e&&!Array.isArray(e))return null;let n=[],o=0,s=Uv(e,t);for(const l of e)for(const r of l.signals){const i=r,{id:a}=i,u=G(i,["id"]);if(u.js){n.push(b({id:`${l.id}${a}`},u));const d=Gv(u.js);o=d>o?d:o}}return{signals:n,jCouplingMax:o,links:s}}function Gv(e){let t=-1/0;for(const{coupling:n}of e)t=n>t?n:t;return t}function Zv(e){const t=[];for(let n of e)for(const{delta:o,js:s}of n.signals)for(const{coupling:i}of s||[])t.push({coupling:i,delta:o});return t}function Nl(e){const{delta:t}=e;return{id:K(),from:t,to:t,couplings:[e]}}function Uv(e,t=0){const n=Zv(e).sort((r,a)=>r.coupling-a.coupling);if(!n||n.length===0)return[];const o=[Nl(n[0])];let s=0,i=s,l=1;for(;l<n.length;){const r=n[l];Math.abs(n[i].coupling-r.coupling)<t?(o[s].couplings.push(r),r.delta>o[s].to?o[s].to=r.delta:r.delta<o[s].from&&(o[s].from=r.delta),l++):Math.abs(n[l-1].coupling-r.coupling)<t?i=l-1:(s++,o[s]=Nl(n[l]),i=l,l=l+1)}return o}const ed=c.exports.createContext({scaleY:null,height:0,maxValue:0}),Wv=ed.Provider;function us(){const e=c.exports.useContext(ed);if(!e.scaleY)throw new Error("scale cannot be null");return e}const Kv=c.exports.forwardRef((e,t)=>{const{x:n,y:o,height:s,showGrid:i,ticks:l}=e;return _("g",{ref:t,transform:`translate(${n}, ${o})`,children:[f("line",{y2:s,x1:15,x2:15,stroke:"black"}),l.map(({label:r,position:a},u)=>_("g",{children:[i&&e.width&&f("line",{y1:a,y2:a,x1:15,x2:e.width-n,stroke:"lightgray"}),f("line",{y1:a,y2:a,x1:15,x2:10,stroke:"black"}),f("text",{y:a,dominantBaseline:"middle",textAnchor:"end",children:r})]},u+r+a))]})});function qv(e){const i=e,{scale:t}=i,n=G(i,["scale"]),o=c.exports.useRef(null),s=xp(t,"vertical",o);return f(Kv,k(b({},n),{ticks:s,ref:o}))}function Jv(){const{width:e,margin:t}=$(),{height:n,scaleY:o}=us();return o?f("svg",{style:{overflow:"visible"},height:n+20,width:60,children:f(qv,{x:20,y:0,scale:o,height:n,showGrid:!0,width:e-t.right})}):null}function Qv(e){const{links:t}=e,{scaleX:n}=fe(),{scaleY:o,maxValue:s}=us(),i=c.exports.useCallback(l=>{if(!o)return"";const{from:r,to:a,couplings:u}=l;let d=[];for(const h of u)d.push(`M${n()(r)},${o(h.coupling)} L${n()(a)},${o(h.coupling)}`);return d.join(" ")},[n,o]);return f("g",{className:"js-coupling-links",children:t.filter(l=>l.couplings.length>1).map(l=>f("path",{d:i(l),style:{stroke:`hsl(${l.couplings[0].coupling*360/s},100%,50%)`},strokeWidth:"1"},l.id))})}function e1({value:e}){const{scaleY:t,maxValue:n}=us(),[o,s]=c.exports.useState(!1);return t?_("g",{className:"coupling",style:{transform:`translate(0px,${t(e)}px)`},children:[f("circle",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),cx:0,cy:0,r:4,fill:`hsl(${e*360/n},100%,${o?45:50}%)`,pointerEvents:"all"}),o&&_("g",{style:{transform:"translate(0px,15px)"},children:[f("text",{pointerEvents:"none",stroke:"white",strokeWidth:"0.6em",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`}),f("text",{pointerEvents:"none",stroke:"black",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`})]})]}):null}function t1(e){const{scaleX:t}=fe(),{height:n}=us();return f("g",{className:"js-coupling",children:e.signals.map(o=>{var s;return _("g",{transform:`translate(${t()(o.delta)},0)`,children:[f("line",{x1:"0",y1:n,x2:"0",y2:"0",stroke:"black",strokeWidth:"1"}),(s=o.js)==null?void 0:s.map(i=>f(e1,{value:i.coupling},`${i.coupling}`))]},o.id)})})}const n1=50;function o1(e){const{signals:t,links:n}=e;return _("g",{className:"j-graph",transform:`translate(0,${n1})`,children:[f(Jv,{}),f(Qv,{links:n}),f(t1,{signals:t})]})}const s1={ranges:{}},i1=c.exports.memo(o1);function l1(){const e=ie(),{height:t,toolOptions:{data:{showJGraph:n}},activeTab:o}=$(),s=t/4,{ranges:i}=ve(s1),l=c.exports.useMemo(()=>(B(e,`formatting.panels.ranges.[${o}]`)||Vi(o)).jGraphTolerance,[o,e]),{signals:r,jCouplingMax:a,links:u}=c.exports.useMemo(()=>Yv(i.values,l)||{signals:[],jCouplingMax:0,links:[]},[l,i.values]),d=c.exports.useMemo(()=>{const m=a+a*.1;return qe().range([s,0]).domain([0,m])},[s,a]),h=c.exports.useMemo(()=>({scaleY:d,height:s,maxValue:a}),[s,d,a]);return n?f(Wv,{value:h,children:f(i1,{signals:r,links:u})}):null}function td(e){const{x:t="initial",y:n="initial",onDelete:o=()=>null,fill:s="#c81121"}=e;return _("svg",{className:"delete-button",x:t,y:n,onClick:o,"data-no-export":"true",children:[f("rect",{rx:"5",width:"16",height:"16",fill:s}),f("line",{x1:"5",x2:"10",y1:"8",y2:"8",stroke:"white",strokeWidth:"2"})]})}const r1=P`
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
`,a1=P`
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
`;function c1({rangeData:e,columnKey:t}){const{from:n,to:o}=e,s=le([t]),{scaleX:i}=fe(),l=Y(),r=c.exports.useCallback(()=>{l({type:Pi,colKey:t})},[t,l]),a=c.exports.useCallback(u=>{l({type:Xc,payload:k(b(b({},e),u),{columnKey:t})})},[t,l,e]);return w("g",k(b({},s.onHover),{css:s.isActive?a1:r1,children:[w("g",{transform:`translate(${i()(o)},25)`,children:[p("rect",{x:"0",width:i()(n)-i()(o),height:"6",className:"range-area",fill:"green"}),p("text",{textAnchor:"middle",x:(i()(n)-i()(o))/2,y:"-5",fontSize:"12",fill:"red",fontWeight:"bolder",fillOpacity:s.isActive?1:.6,children:t})]}),p(Bi,{from:e.from,to:e.to,onDrop:a}),p(td,{x:i()(o)-20,y:10,onDelete:r})]}))}function u1({activeTab:e,spectraAnalysis:t,displayerKey:n}){const o=c.exports.useMemo(()=>{const{options:{columns:i}}=t[e]||{options:{columns:{}}};return i},[e,t]),s=c.exports.useMemo(()=>Object.keys(o).map(i=>i,[]),[o]);return!s||s.length===0?null:f("g",{clipPath:`url(#${n}clip-chart-1d)`,children:s.map(i=>f(c1,{columnKey:i,rangeData:o[i]},i))})}const d1=c.exports.memo(u1);function p1(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=$();return f(d1,{activeTab:e,spectraAnalysis:t,displayerKey:n})}const Gn=[{label:"massive (m)",value:"m",multiplicity:null},{label:"singlet (s)",value:"s",multiplicity:1},{label:"doublet (d)",value:"d",multiplicity:2},{label:"triplet (t)",value:"t",multiplicity:3},{label:"quartet (q)",value:"q",multiplicity:4},{label:"quintet (i)",value:"i",multiplicity:5},{label:"sextet (x)",value:"x",multiplicity:6},{label:"septet (p)",value:"p",multiplicity:7},{label:"octet (o)",value:"o",multiplicity:8},{label:"nonet (n)",value:"n",multiplicity:9}];function h1(e){const t=Gn.find(n=>e===n.label||e===n.value);return t?t.multiplicity:null}function f1(e,t=[]){if(e===void 0||e.length===0)return!1;const n=Gn.find(o=>o.value===e||o.label===e);return n&&!t.includes(n.value)&&!t.includes(n.label)}function ji(e,t=[]){return e===void 0||e.length===0?!1:!e.split("").find(n=>!f1(n,t))}function Ot(e){var t,n;return e.length===1?(t=Gn.find(o=>o.value===e))==null?void 0:t.label:(n=Gn.find(o=>o.label===e))==null?void 0:n.value}function Zn(e){return e.length>1&&(e=Ot(e)),ji(e,["m","s"])}function m1(e,t){if(e===void 0||e===0||t===void 0)return[1];let n=2*t+1,o=[];for(let s=0;s<n-1;s++)o.push(1);for(let s=0;s<e-1;s++){let i=o.slice();for(let l=1;l<n;l++){for(let r=0;r<o.length-1;r++)i[r+l]+=o[r];i.push(1)}o=i.slice()}return o}const Ys=["red","green","blue","magenta"];function Pl({signal:e,startY:t,levelHeight:n}){const{scaleX:o}=fe();return f("line",{x1:o()(e.delta),y1:t,x2:o()(e.delta),y2:t+n,stroke:Ys[0]},`startLevelNode_${e.id}`)}function Fl({signal:e,startY:t,levelHeight:n,fontSize:o,showLabels:s}){const{scaleX:i}=fe();return f("text",{textAnchor:"middle",x:i()(e.delta),y:t+n/2,fontSize:o,lengthAdjust:"spacing",fill:"black",visibility:s?"visible":"hidden",children:e.multiplicity},`multiplicityString_${e.id}`)}function g1({nodesData:e,levelHeight:t,startY:n,signalID:o,labelOptions:s,showLabels:i}){const{scaleX:l}=fe(),r=c.exports.useCallback(({startX:a,_startX:u,ratio:d,multiplicityIndex:h,color:m})=>{const g=2*h+2,x=n+g*t,y=n+(g+1)*t;return _("g",{children:[f("text",{textAnchor:"middle",x:l()(u)+s.distance,y:y+2*(t/3),fontSize:s.fontSize,fill:m,visibility:i?"visible":"hidden",children:d}),f("line",{x1:l()(a),y1:x,x2:l()(u),y2:y,stroke:m}),f("line",{x1:l()(u),y1:y,x2:l()(u),y2:y+t,stroke:m})]},`${h}_${o}_${a}_${u}_${d}`)},[o,s.distance,s.fontSize,l,i,n,t]);return f(Ue,{children:e==null?void 0:e.map(a=>r(a))})}function x1(e,t){function n(o,s,i,l){var h;if(!e.multiplicity)return null;if(o>=e.multiplicity.length)return i;const r=Ys[o%Ys.length],a=s.findIndex(m=>m===o),u=B(t,"info.originFrequency",0),d=a>=0&&u>0&&((h=e==null?void 0:e.js)==null?void 0:h[a])?e.js[a].coupling/u:null;if(!d)i.push({startX:l,_startX:l,ratio:1,multiplicityIndex:o,color:r}),n(o+1,s,i,l);else{const m=e.multiplicity||"",g=m1(h1(m.charAt(o)),.5);let x=g.length%2===0?l-g.length/2*d+d/2:l-(g.length/2-.5)*d;g.forEach((y,C)=>{C>0&&(x+=d),i.push({startX:l,_startX:x,ratio:y,multiplicityIndex:o,color:r}),n(o+1,s,i,x)})}return i}return n}const _l={cursor:"default",opacity:.6,strokeWidth:1};function Ll(e){return[e.id].concat(e.assigned.x||[])}function nd({rangeFrom:e,rangeTo:t,signal:n,labelOptions:o={distance:10,fontSize:11}}){const{scaleX:s,scaleY:i}=fe(),{data:l,activeSpectrum:r,toolOptions:{selectedTool:a},width:u}=$(),d=rt(n.id),h=le(Ll(d),{type:ue.SIGNAL,extra:Ll(d)}),m=c.exports.useMemo(()=>B(l,`${r==null?void 0:r.index}`,null),[r,l]),[g,x]=c.exports.useState({x1:n.delta,x2:n.delta}),[y,C]=c.exports.useState({width:0,height:0,levelHeight:0}),[v,S]=c.exports.useState(!1),[E,T]=c.exports.useState(!1);c.exports.useEffect(()=>{var H;const A=!ji(n.multiplicity,["m"]),D=A?Math.abs(s()(g.x1)-s()(g.x2)):Math.abs(s()(g.x1)-s()(g.x2))+o.distance,I=A?D/3:D/2,O=((H=n==null?void 0:n.multiplicity)==null?void 0:H.length)||0,L=A?I/(O+2):I/(2*O+2);C({width:D,height:I,levelHeight:L}),S(A)},[o.distance,s,n.multiplicity,g.x1,g.x2]),c.exports.useEffect(()=>{y.width/u>=.1?T(!0):T(!1)},[y.width,u]);const N=c.exports.useMemo(()=>{let A;return m.data.x.forEach((D,I)=>{D>=e&&D<=t&&(!A||m.data.re[I]>A)&&(A=m.data.re[I])}),i(m.id)(A)-y.height-30},[m.data.x,m.data.re,m.id,i,y.height,e,t]),R=c.exports.useMemo(()=>{if(n.multiplicity){const A=x1(n,m),D=n.multiplicity.split("").map((I,O)=>Zn(I)?O:void 0).filter(I=>I!==void 0);return A(0,D,[],n.delta)}return[]},[n,m]);c.exports.useEffect(()=>{if(v)x({x1:e,x2:t});else{const A={x1:n.delta,x2:n.delta};R.forEach(D=>{D.startX<A.x1&&(A.x1=D.startX),D.startX>A.x2&&(A.x2=D.startX),D._startX<A.x1&&(A.x1=D._startX),D._startX>A.x2&&(A.x2=D._startX)}),x(A)}},[v,e,t,n.delta,n.multiplicity,R]);const M=c.exports.useMemo(()=>{const{levelHeight:A}=y,D=N;let I=D;const O=N+A;if(I=O,I+=A,v){const L=s()(e),H=s()(t),z=`M ${L} ${I+A} ${L} ${I} ${s()(n.delta)} ${I} ${H} ${I} ${H} ${I+A}`;return w("g",{children:[p(Fl,{signal:n,startY:D,levelHeight:A,fontSize:o.fontSize,showLabels:E}),p(Pl,{signal:n,startY:O,levelHeight:A}),p("path",{d:z,stroke:"blue",fill:"none"})]})}return w("g",{children:[p(Fl,{signal:n,startY:D,levelHeight:A,fontSize:o.fontSize,showLabels:E}),p(Pl,{signal:n,startY:O,levelHeight:A}),p(g1,{nodesData:R,signalID:R,showLabels:E,startY:N,labelOptions:o,levelHeight:A})]})},[y,N,v,n,o,E,R,s,e,t]);return p("g",{css:h.isActive||d.isActive?k(b({},_l),{opacity:1,strokeWidth:1.5}):_l,onMouseEnter:()=>{d.onMouseEnter("x"),h.show()},onMouseLeave:()=>{d.onMouseLeave("x"),h.hide()},onClick:a&&a===F.editRange.id?()=>null:A=>{A.shiftKey&&(A.stopPropagation(),d.onClick("x"))},children:M})}function b1({range:e}){return(e==null?void 0:e.signals)&&e.signals.length>0&&e.signals.map(t=>f(nd,{rangeFrom:e.from,rangeTo:e.to,signal:t},t.id))}const y1=c.exports.memo(b1);function v1(){const{toolOptions:{data:{tempRange:e}}}=$();return f(y1,{range:e})}const C1=P`
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
`,S1=P`
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
`;function k1({rangeData:e,showMultiplicityTrees:t,selectedTool:n,startEditMode:o}){const{id:s,from:i,to:l,integration:r,signals:a}=e,u=Ve(),d=rt(s),h=le([d.id].concat(d.assigned.x||[]).concat($i(u,a.map(O=>O.id))),{type:ue.RANGE,extra:{id:s}}),[m,g]=c.exports.useState({from:i,to:l}),{scaleX:x}=fe(),y=Y(),[C,v]=c.exports.useState(!1),[S,E]=c.exports.useState(!1);c.exports.useEffect(()=>{g({from:i,to:l})},[i,l]),c.exports.useEffect(()=>{n&&n===F.editRange.id?E(!0):E(!1)},[n]),c.exports.useEffect(()=>{v(!ka(e))},[e]);const T=c.exports.useCallback(O=>{y({type:Tc,data:b(b({},e),O)})},[y,e]),N=c.exports.useCallback(()=>{d.onMouseEnter("x"),h.show()},[d,h]),R=c.exports.useCallback(()=>{d.onMouseLeave("x"),h.hide()},[d,h]),M=c.exports.useCallback(O=>{n===F.rangesPicking.id&&O.shiftKey&&!S&&d.onClick("x")},[d,S,n]),A=c.exports.useCallback(O=>{g(L=>b(b({},L),O))},[]),{from:D,to:I}=m;return w("g",{"data-test-id":"range",style:{outline:"none"},css:S||h.isActive||d.isActive?S1:C1,onMouseEnter:N,onMouseLeave:R,onClick:M,children:[w("g",{transform:`translate(${x()(I)},10)`,children:[p("rect",{x:"0",width:Math.abs(x()(D)-x()(I)),height:"6",className:"range-area",fill:"green",fillOpacity:!C||h.isActive||d.isActive?1:.4}),p("text",{textAnchor:"middle",x:Math.abs(x()(D)-x()(I))/2,y:"20",fontSize:"10",fill:"red",fillOpacity:!C||h.isActive||d.isActive?1:.6,children:r!==void 0?r.toFixed(2):""})]}),p(Bi,{from:e.from,to:e.to,onDrop:T,onDrag:A}),o?p(v1,{}):t&&a&&a.length>0&&a.map(O=>p(nd,{rangeFrom:D,rangeTo:I,signal:O},O.id))]},s)}function w1({range:e}){const t=qu(e);return f("path",{className:"line",stroke:"black",strokeWidth:"1",fill:"none",d:t})}function E1({ranges:e,displayerKey:t,selectedTool:n,editRangeID:o,showMultiplicityTrees:s,showRangesIntegrals:i}){var l;return f("g",{clipPath:`url(#${t}clip-chart-1d)`,children:(l=e==null?void 0:e.values)==null?void 0:l.map(r=>_(c.exports.Fragment,{children:[f(k1,{rangeData:r,selectedTool:n,showMultiplicityTrees:s,startEditMode:!!(o&&o===r.id)}),i&&f(w1,{range:r})]},r.id))})}const A1=c.exports.memo(E1),T1={ranges:{}};function D1(){const{displayerKey:e,toolOptions:{selectedTool:t,data:{tempRange:n,showMultiplicityTrees:o,showRangesIntegrals:s}}}=$(),{ranges:i}=ve(T1);return f(A1,{ranges:i,showMultiplicityTrees:o,showRangesIntegrals:s,selectedTool:t,displayerKey:e,editRangeID:(n==null?void 0:n.id)||""})}const I1=P`
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
`;function M1(){const{toolOptions:e}=$(),{scaleX:t}=fe(),n=Y(),o=c.exports.useCallback(i=>{n({type:Ec,id:i})},[n]),s=c.exports.useMemo(()=>e.data.baseLineZones,[e]);return p(Qe,{children:s.length>0&&p("g",{children:s.map(i=>w("g",{transform:`translate(${t()(i.to)},0)`,css:I1,children:[p(td,{x:-20,y:10,onDelete:()=>o(i.id)}),p("rect",{x:"0",width:`${t()(i.from)-t()(i.to)}`,className:"zone-area"})]},i.id))})})}function R1({mode:e,width:t,height:n,margin:o,displayerKey:s}){return _("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-1d`,children:f("rect",{width:`${t-o.left-o.right}`,height:`${n}`,x:`${o.left}`,y:`${0}`})})}),f(Lv,{}),f(Fv,{}),f(Hv,{}),f(D1,{}),f(l1,{}),f(p1,{}),f(M1,{}),f(Ev,{}),f(Vv,{}),f("g",{className:"container",style:{pointerEvents:"none"},children:f(Xv,{showGrid:!0,mode:e})})]})}const Ol=P`
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
`;function N1({margin:e,width:t,height:n,activeSpectrum:o,spectrum:s,activeTab:i}){var g,x,y,C;let l=c.exports.useContext(at);const{startX:r,endX:a,step:u}=c.exports.useContext(Ct),{scaleX:d}=fe(),h=Be(i),m=c.exports.useCallback(v=>{if(s){const S=vn(s),E=Ge(S.x,d().invert(v));return S.y[E]}return 1},[s,d]);return!l||l.y<e.top||l.x<e.left||l.x>t-e.right||l.y>n-e.bottom?p("div",{css:Ol}):w("div",{css:Ol,children:[p(bp,{}),w("div",{children:[p("span",{className:"label",children:" \u{1D6C5}: "}),p("span",{className:"value",children:h(d().invert(l.x))}),p("span",{className:"unit",children:"ppm"}),o&&((g=s==null?void 0:s.info)==null?void 0:g.originFrequency)&&w(Qe,{children:[w("span",{className:"value",children:["\xA0(",h(d().invert(l.x)*((x=s==null?void 0:s.info)==null?void 0:x.originFrequency),"hz")]}),p("span",{className:"unit",children:"Hz"}),p("span",{className:"value",children:") "})]})]}),u==="brushing"&&w("div",{children:[p("span",{className:"label",children:" \u0394ppm: "}),p("span",{className:"value",children:(d().invert(r)-d().invert(a)).toPrecision(6)})]}),o&&w(c.exports.Fragment,{children:[((y=s==null?void 0:s.info)==null?void 0:y.originFrequency)&&u==="brushing"&&w("div",{children:[p("span",{className:"label",children:" \u0394Hz: "}),p("span",{className:"value",children:((d().invert(r)-d().invert(a))*((C=s==null?void 0:s.info)==null?void 0:C.originFrequency)).toPrecision(5)})]}),u==="brushing"&&w("div",{children:[p("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[(m(r)/(m(a)||Number.MIN_VALUE)*100).toFixed(2),"%"]})]})]}),o&&w(c.exports.Fragment,{children:[p("div",{className:"separator"}),p(yp,{}),w("div",{children:[p("span",{className:"label",children:"Intensity: "}),p("span",{className:"value yvalue",children:h(m(l.x))})]})]})]})}const P1=c.exports.memo(N1);function F1(){const{margin:e,width:t,height:n,activeSpectrum:o,activeTab:s}=$(),i=ve(null);return p(P1,{margin:e,width:t,height:n,activeSpectrum:o,spectrum:i,activeTab:s})}const Co={container:{position:"absolute",left:"10px",top:"10px"},value:{width:"67px",display:"inline-block",margin:"0 5px",fontSize:"12px"},colorIndicator:{width:"10px",height:"1px",borderBottom:"2px solid",display:"inline-block",marginBottom:"3px"},name:{fontSize:"12px"}};function _1({datum:e}){const{scaleX:t}=Hi(),n=c.exports.useContext(at);if(!t||!n)return null;const o=Ge(e.x,t().invert(n.x));return f("span",{style:Co.value,children:e.y[o]})}function L1(){const{data:e,activeTab:t,xDomains:n}=$(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{function l(r){s(r)}return de.on("showYSpectraTrackers",l),()=>{de.off("showYSpectraTrackers",l)}},[]);const i=c.exports.useMemo(()=>o&&e.map(l=>l.display.isVisible&&n[l.id]&&l.info.nucleus===t&&_("div",{style:{display:"block"},children:[f("span",{style:k(b({},Co.colorIndicator),{borderColor:l.display.color})}),f(_1,{datum:vn(l)}),f("span",{style:Co.value,children:l.display.name})]},l.id),[]),[t,e,o,n]);return o?f("div",{style:Co.container,children:i}):null}const q={radius:10,borderColor:"#1f1f1f",strokeWidth:1,fillOpacity:0,SVGPadding:1};function O1(){const{height:e,width:t,margin:n,activeSpectrum:o,data:s,mode:i,toolOptions:{selectedTool:l},verticalAlign:r}=$(),{scaleX:a,scaleY:u}=fe();let d=c.exports.useContext(at);const h=c.exports.useContext(Ct),[m,g]=c.exports.useState();return c.exports.useEffect(()=>{const x=o?cs(r,{index:(o==null?void 0:o.index)||1,align:"center"}):0,C=((v,S)=>{if(o&&d&&l===F.peakPicking.id){const E=[a().invert(S.x-v),a().invert(S.x+v)].sort((D,I)=>D-I),T=s.find(D=>D.id===o.id);if(!T)throw new Error("Unreachable");const N=vn(T),R=N.x.findIndex(D=>D>=E[1])-1,M=N.x.findIndex(D=>D>=E[0]),A=N.y.slice(M,R);if(A&&A.length>0){const D=xr(A),I=A.findIndex(L=>L===D),O=N.x[M+I];return{x:a()(O),y:u(o.id)(D)-x,xIndex:M+I}}}return null})(10,d);g(C)},[o,s,i,d,a,u,l,r]),l!==F.peakPicking.id||!m||!o||h.step==="brushing"||!d||d.y<n.top||d.left<n.left||d.x>t-n.right||d.y>e-n.bottom?null:f("div",{style:{cursor:"crosshair",transform:`translate(${m.x}px, ${m.y}px)`,transformOrigin:"top left",position:"absolute",top:-(q.radius+q.SVGPadding),left:-(q.radius+q.SVGPadding),pointerEvents:"none",overflow:"visible"},children:_("svg",{width:q.radius*2+q.SVGPadding*2,height:q.radius*2+q.SVGPadding*2,children:[f("circle",{cx:q.radius+q.SVGPadding,cy:q.radius+q.SVGPadding,r:q.radius,stroke:q.borderColor,strokeWidth:q.strokeWidth,fillOpacity:q.fillOpacity}),f("line",{x1:q.radius+q.SVGPadding,y1:q.SVGPadding,x2:q.radius+q.SVGPadding,y2:q.radius*2+q.SVGPadding,stroke:q.borderColor,strokeWidth:q.strokeWidth}),f("line",{x1:q.SVGPadding,y1:q.radius+q.SVGPadding,x2:q.radius*2+q.SVGPadding,y2:q.radius+q.SVGPadding,stroke:q.borderColor,strokeWidth:q.strokeWidth})]})},"peakPointer")}const $1={transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",width:1,backgroundColor:"red"};function H1(){const{height:e,toolOptions:{selectedTool:t,data:{pivot:n}}}=$(),{scaleX:o}=fe();return F.phaseCorrection.id!==t?null:f("div",{style:k(b({},$1),{transform:`translate(${o()(n.value)}px, 0px)`,height:e})})}const z1={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-30px",pointerEvents:"none",overflow:"visible",userSelect:"none"};function V1(){const{height:e,width:t,margin:n,data:o,activeSpectrum:s}=$(),{scaleX:i}=fe(),l=c.exports.useContext(at),r=c.exports.useContext(Ct),a=c.exports.useMemo(()=>s?o.find(m=>m.id===s.id):null,[s,o]),u=Be(a==null?void 0:a.info.nucleus),d=c.exports.useCallback(h=>{if(a){const m=i().invert(h);return u(m)}},[a,u,i]);return!s||r.step==="brushing"||!l||l.y<n.top||l.x<n.left||l.x>t-n.right||l.y>e-n.bottom?null:f("div",{style:k(b({},z1),{transform:`translate(${l.x}px, ${l.y}px)`}),children:f("span",{children:d(l.x)})},"xLabelPointer")}function B1({emptyText:e=void 0}){const{display:{general:t}}=ie(),n=$(),{toolOptions:{selectedTool:o},isLoading:s,data:i,mode:l,width:r,height:a,margin:u,activeSpectrum:d,xDomain:h,xDomains:m,yDomain:g,yDomains:x,verticalAlign:y,displayerKey:C}=n,v=Y(),S=he(),E=re(),[T,N]=c.exports.useReducer(q0,Bu);c.exports.useEffect(()=>{h.length>0&&g.length>0&&r&&a&&N({type:Vu,payload:{yDomain:g,yDomains:x,xDomain:h,xDomains:m,margin:u,height:a,width:r,verticalAlign:y,mode:l}})},[a,u,l,y,r,h,m,g,x]);const R=c.exports.useCallback(I=>{const O=()=>{if(!T.scaleX||!T.scaleY)return;const{startX:L,endX:H}=I,z=T.scaleX().invert(L),J=T.scaleX().invert(H);de.emit("brushEnd",k(b({},I),{range:[z,J].sort((V,j)=>V-j)}))};if(I.altKey)switch(o){case F.rangesPicking.id:{t.disableMultipletAnalysis||S.show(f(vv,b({data:i,activeSpectrum:d,scaleX:T.scaleX},I)),{onClose:()=>{S.close()}});break}}else if(I.shiftKey)switch(o){case F.integral.id:v(b({type:tc},I));break;case F.rangesPicking.id:{const[L,H]=Xt(n,{startX:I.startX,endX:I.endX});if(!d)break;const{data:{x:z}}=n.data[d.index],{fromIndex:J,toIndex:V}=Un(z,{from:L,to:H});V-J<=Eo?v({type:Ic,payload:b({},I)}):E.error(`Advanced peak picking only available for area up to ${Eo} points`);break}case F.multipleSpectraAnalysis.id:v(b({type:jc},I));break;case F.peakPicking.id:v(b({type:Wa},I));break;case F.baseLineCorrection.id:v({type:wc,zone:{from:I.startX,to:I.endX}});break;case F.exclusionZones.id:v({type:tu,payload:{from:I.startX,to:I.endX}});break;default:O();break}else switch(o){default:o!=null&&v(b({type:ss},I));break}},[T,o,t==null?void 0:t.disableMultipletAnalysis,S,i,d,v,n,E]),M=c.exports.useCallback(()=>{v({type:mn,zoomType:Hn.STEP_HORIZONTAL})},[v]),A=c.exports.useCallback(I=>{v({type:os,event:I,selectedTool:o})},[v,o]),D=c.exports.useCallback(I=>{const O=()=>{if(!T.scaleX)return;const L=T.scaleX().invert(I.x);de.emit("mouseClick",k(b({},I),{xPPM:L}))};if(I.shiftKey)switch(o){case F.peakPicking.id:v({type:Ua,mouseCoordinates:I});break;case F.editRange.id:O();break}else switch(o){case F.phaseCorrection.id:v({type:Ii,position:I.x});break}},[v,T,o]);return f(J0,{value:T,children:f(qs,{children:({height:I,width:O})=>f(zu,{height:I,width:O,children:_("div",{style:{height:"100%",position:"relative"},children:[f(Tu,{isLoading:s,emptyText:e}),T.scaleX&&T.scaleY&&i&&i.length>0&&f(Vr,{onBrush:R,onDoubleClick:M,onClick:D,onZoom:A,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:_(Br,{style:{width:"100%",height:"100%",position:"absolute"},children:[f(L1,{}),f(Du,{}),f(yo,{brushType:De.X}),f(V1,{}),f(O1,{}),f(H1,{}),f(F1,{}),f(R1,{width:r,height:a,margin:u,mode:l,displayerKey:C})]})})]})})})})}const ho={container:{margin:"25px"},header:{backgroundColor:"#ffffff",padding:"20px",borderRadius:"10px",fontSize:"30px",textAlign:"center"},title:{textDecoration:"underline"},body:{marginTop:"10px",whiteSpace:"pre-wrap",backgroundColor:"white",padding:"20px",borderRadius:"10px",color:"red"}};function j1(e){return _("div",{style:ho.container,children:[f("p",{style:ho.header,children:"Something went wrong."}),_("details",{style:ho.body,children:[f("p",{style:ho.title,children:e.error.message}),e.error.stack]})]})}const ao=c.exports.forwardRef((e,t)=>{const{checked:n=!1,disabled:o=!1,name:s="",onChange:i=()=>null,style:l={}}=e,[r,a]=c.exports.useState(n),u=c.exports.useCallback(d=>{a(!r),i(d)},[r,i]);return f("input",{ref:t,type:"checkbox",name:s,id:s,onChange:u,defaultChecked:n,disabled:o,style:l})});function ht(e){const m=e,{label:t,name:n,onChange:o=()=>null,className:s="checkbox",reverse:i=!1,style:l={label:{},checkbox:{}}}=m,r=G(m,["label","name","onChange","className","reverse","style"]),{values:a,setFieldValue:u}=pe(),d=i?!B(a,n):B(a,n),h=c.exports.useCallback(g=>{g.persist(),o(g),u(n,i?d:!d)},[n,o,i,u,d]);return _("div",{className:`${s} check-${d}`,children:[f("label",{htmlFor:n,className:"checkbox-label",style:l.label?l.label:{},children:t}),f(ao,k(b({},r),{name:n,checked:d,onChange:h,style:l.checkbox?l.checkbox:{}}))]})}const ae=c.exports.forwardRef((e,t)=>{const{onSubmit:n=()=>null,initialValues:o={},validationSchema:s=null}=e;return f(vp,{innerRef:t,initialValues:o,onSubmit:n,validationSchema:s,children:f(Ue,{children:e.children})})});function od(e){const t=c.exports.useRef();return c.exports.useEffect(()=>{e.forEach(n=>{!n||(typeof n=="function"?n(t.current):n.current=t.current)})},[e]),t}const Cs={label:{lineHeight:2,userSelect:"none"},inputWrapper:{height:"100%",width:"100px",borderRadius:"5px",borderWidth:"0.55px",borderColor:"#c7c7c7",borderStyle:"solid",display:"flex",flexDirection:"row",alignItems:"center",overflow:"hidden"},input:{outline:"none",flex:1,height:"100%",textAlign:"center",width:"100%"},clearButton:{height:"calc(100% - 4px)",borderRadius:"50%",backgroundColor:"gray",color:"white",aspectRatio:"1",fontSize:"60%",padding:0}},yt=c.exports.forwardRef((S,v)=>{var E=S,{value:e="",name:t,style:n={input:{},inputWrapper:{}},onChange:o=()=>null,debounceTime:s=0,onKeyDown:i=()=>null,checkValue:l=()=>!0,type:r="text",enableAutoSelect:a=!1,className:u,format:d=()=>T=>T,onBlur:h=()=>null,onFocus:m=()=>null,renderIcon:g=null,canClear:x=!1,onClear:y}=E,C=G(E,["value","name","style","onChange","debounceTime","onKeyDown","checkValue","type","enableAutoSelect","className","format","onBlur","onFocus","renderIcon","canClear","onClear"]);const[T,N]=c.exports.useState(e),R=c.exports.useRef(),M=od([v,R]),A=c.exports.useRef(Xo(z=>{o(z)},s)).current;c.exports.useEffect(()=>{N(e)},[e]),c.exports.useEffect(()=>{var z;a&&((z=M==null?void 0:M.current)==null||z.select())},[a,M]);const D=c.exports.useCallback(z=>d()(r==="number"?String(z).trim()==="-"?Number(0):Number(z):z),[d,r]),I=c.exports.useCallback(z=>{z.persist(),z.stopPropagation(),z.preventDefault();function J(j){if(r==="number"){const W=/^(?:-?[0-9]*|[0-9]\d*)(?:\.\d{0,20})?$/;return!!(j.trim()===""||W.test(j))}return!0}const V=z.target.value;if(J(V)&&l(V)){const j=d();N(j(V));const W=k(b({},z),{target:{name:z.target.name,value:D(V)}});s?A(W):o(W)}},[l,A,s,d,D,o,r]),O=c.exports.useCallback(z=>{z.persist(),i(k(b({},z),{target:{name:z.target.name,value:D(T)}}))},[D,i,T]),L=c.exports.useCallback(z=>{z.stopPropagation()},[]),H=c.exports.useCallback(()=>{N(""),y==null||y()},[y]);return _("div",{style:b(b({},Cs.inputWrapper),(n==null?void 0:n.inputWrapper)?n.inputWrapper:{}),className:`input ${u||""}`,children:[g==null?void 0:g(),f("input",k(b({},C),{ref:M,name:t,style:b(b({},Cs.input),(n==null?void 0:n.input)?n.input:{}),"data-test-id":t?`input-${t}`:"",type:"text",value:T,onChange:I,onKeyDown:O,onKeyPress:L,onDoubleClick:z=>z.stopPropagation(),onFocus:m,onBlur:h})),x&&T&&f("button",{type:"button",style:Cs.clearButton,onClick:H,children:f("span",{style:{display:"block",margin:"0 auto"},children:"\u2715"})})]})});function U(e){const S=e,{name:t,style:n={label:{},input:{}},onChange:o=()=>null,checkValue:s=()=>!0,type:i="text",className:l="",value:r=null,format:a=()=>E=>E,checkErrorAfterInputTouched:u=!0}=S,d=G(S,["name","style","onChange","checkValue","type","className","value","format","checkErrorAfterInputTouched"]),{values:h,handleChange:m,setFieldValue:g,errors:x,touched:y}=pe(),C=c.exports.useCallback(E=>{o(E),m(E)},[m,o]);c.exports.useEffect(()=>{r&&g(t,r)},[t,g,r]);const v=c.exports.useMemo(()=>u?B(x,t)&&B(y,t):B(x,t),[u,x,t,y]);return f(yt,b({name:t,value:r||B(h,t),onChange:C,type:i,style:k(b({},n),{inputWrapper:b(b({},n.input),v&&{borderColor:"red",outline:"none"})}),checkValue:s,className:l,format:a},d))}const Et=P`
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
    color: #007bff;
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
`,X1=P`
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
`,Y1={name:"",compressed:!1,pretty:!1,dataExportOption:gt.ROW_DATA};function G1({onClose:e,onSave:t,name:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{o.current.submitForm()},[]),i=c.exports.useCallback(l=>{t(l),e==null||e()},[e,t]);return w("div",{css:[Et,X1],children:[w("div",{className:"header handle",children:[p("span",{children:"Save as ... "}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",children:w(ae,{ref:o,initialValues:k(b({},Y1),{name:n}),onSubmit:i,children:[w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Name"}),p(U,{name:"name",className:"name",style:{inputWrapper:{width:"100%"}}})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Compressed"}),p(ht,{name:"compressed"})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Pretty Format"}),p(ht,{name:"pretty"})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:" Include "}),w("div",{className:"data-export-group",children:[w("label",{children:[p(ll,{type:"radio",name:"dataExportOption",value:gt.ROW_DATA}),"Raw Data"]}),w("label",{children:[p(ll,{type:"radio",name:"dataExportOption",value:gt.DATA_SOURCE}),"Data Source"]})]})]})]})}),w("div",{className:"footer-container",children:[p("button",{type:"button",onClick:s,className:"btn primary",children:"Save"}),p("button",{type:"button",onClick:e,className:"btn",children:"Close"})]})]})}function Z1(e){var s,i;let t=document.createElement("div");t.innerHTML=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0";let n=Array.prototype.slice.call(document.styleSheets).filter(l=>!l.disabled);document.body.appendChild(t),(s=window.getSelection())==null||s.removeAllRanges();let o=document.createRange();o.selectNode(t),(i=window.getSelection())==null||i.addRange(o),document.execCommand("copy");for(const l of n)l.disabled=!0;document.execCommand("copy");for(const l of n)l.disabled=!1;document.body.removeChild(t)}async function U1(e){try{return Z1(e),!0}catch{return!1}}async function ds(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}async function $l(e,t="experiment",n=0,o=!1){const s=JSON.stringify(e,(i,l)=>ArrayBuffer.isView(l)?Array.from(l):l,n);if(o)try{const i=new an;i.file(`${t}.nmrium`,s);const l=await i.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}});un.exports.saveAs(l,`${t}.nmrium`)}catch(i){console.log(i)}else{const i=new Blob([s],{type:"text/plain"});un.exports.saveAs(i,`${t}.nmrium`)}}function W1(e,t,n="experiment"){const o=["name","experiment"];for(const l of e[0].data.x)o.push(l);let s=`${o.join("	")}
`;for(const l of e){const{data:{re:r},info:{experiment:a},display:{name:u}}=l,d=[u,a];for(const h of r)d.push(h);s+=`${d.join("	")}
`}const i=new Blob([s],{type:"text/tab-separated-values"});un.exports.saveAs(i,`${n}.tsv`)}function K1(e,t="experiment"){e.generateAsync({type:"blob"}).then(n=>{un.exports.saveAs(n,`${t}.nmredata`)})}function sd(e,t="experiment"){const{blob:n}=Xi(e);un.exports.saveAs(n,`${t}.svg`)}function q1(e,t="experiment"){const{blob:n,width:o,height:s}=Xi(e);try{let i=document.createElement("canvas");i.width=o,i.height=s;let l=i.getContext("2d");l&&(l.fillStyle="white",l.fillRect(0,0,i.width,i.height));let r=new Image,a=URL.createObjectURL(n);r.onload=async()=>{l==null||l.drawImage(r,0,0);let u=i.toDataURL("image/png",1);un.exports.saveAs(u,`${t}.png`),URL.revokeObjectURL(u)},r.src=a}catch(i){console.log(i)}}function J1(e){var o;const t=document.createElement("img");t.src=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0",document.body.appendChild(t);const n=document.createRange();n.selectNode(t),(o=window.getSelection())==null||o.addRange(n),document.execCommand("Copy"),document.body.removeChild(t)}function Q1(e){e.toBlob(t=>{const n=new ClipboardItem({[t.type]:t});navigator.clipboard.write([n]).then(()=>{console.log("experiment copied.")},o=>{console.log(o)})})}function id(e){const{blob:t,width:n,height:o}=Xi(e);try{let s=document.createElement("canvas");s.width=n,s.height=o;let i=s.getContext("2d");i&&(i.fillStyle="white",i.fillRect(0,0,s.width,s.height));let l=new Image;const r=URL.createObjectURL(t);l.onload=async()=>{i==null||i.drawImage(l,0,0);const a=s.toDataURL("image/png",1);navigator.clipboard.write?Q1(s):J1(a),URL.revokeObjectURL(a)},l.src=r}catch(s){s instanceof ReferenceError&&alert("Your browser does not support this feature, please use Google Chrome"),console.log(s)}}function Xi(e){var a;let t=(a=document.getElementById(e))==null?void 0:a.cloneNode(!0);const n=t==null?void 0:t.getAttribute("width").replace("px",""),o=t==null?void 0:t.getAttribute("height").replace("px","");t.querySelectorAll('[data-no-export="true"]').forEach(u=>u.remove());const l=`${`<svg class="nmr-svg"  viewBox='0 0 ${n} ${o}' width="${n}"  height="${o}"  version="1.1" xmlns="http://www.w3.org/2000/svg">`+`<style>.grid line,.grid path{stroke:none;} .peaks-text{fill:#730000} .x path{stroke-width:1px} .x text{
    font-size: 12px;
    font-weight: bold;
  } 
 
  .nmr-svg,.contours{
    background-color:white;
    fill:white;
  }
  

  
  </style>`+t.innerHTML}</svg>`;return{blob:new Blob([l],{type:"image/svg+xml"}),width:n,height:o}}const eC=new an;async function ld(e,t={}){const{spectrum:n,source:o}=t,{file:s={},jcampURL:i}=o;let l="";const r=`${n.info.dimension}d`;switch(s.extension){case"jdx":case"dx":l+=`
Jcamp_Location=file:jcamp/${r}/${n.display.name}\\`,e.file(`jcamp/${r}/${n.display.name}`,s.binary);break;case"zip":if(!s.binary)return;eC.loadAsync(s.binary).then(async a=>{var u;for(const d in a.files)d.endsWith("/")||e.file(`Bruker/${d}`,await((u=a.file(d))==null?void 0:u.async("arraybuffer")));l+=`
Spectrum_Location=file:Bruker/${tC(a)}\\`});break;default:if(!i)break;await fetch(i).then(async a=>{if(!a)return;let u=i.split("/").slice(-1);const d=`jcamp/${r}/${u}`;l+=`
Jcamp_Location=file:${d}\\`,e.file(d,await a.arrayBuffer())})}return l}function tC(e){let t=e.filter(o=>o.match("__MACOSX")?!1:!!(o.endsWith("fid")||o.endsWith("1r")||o.endsWith("ser")||o.endsWith("2rr")));const n=t.findIndex(o=>o.name.endsWith("1r")||o.name.endsWith("2rr"));return n>-1?t[n].name:t[0].name}function Yi(e){Array.isArray(e)||(e=[e]);let t=[];for(let n of e)t.push(nC(n));return t}function nC(e){switch(e.toUpperCase()){case"1H":return 2;case"13C":return 1;default:return 1}}async function oC(e,t,n={labels:{byDiaID:[]}}){let{prefix:o="",labels:s}=n,i="",l=[];for(let r of e){const{info:a}=r;if(a.isFid||a.dimension>1)continue;let u="",d=r.ranges.values||[],h=r.info.nucleus,m=1,g="";l.forEach(C=>{C===h&&m++}),l.push(h),m>1&&(g=`#${m}`),u+=`${o}1D_${h.toUpperCase()}${g}>`,r.info.baseFrequency&&(u+=`
Larmor=${Number(r.info.baseFrequency).toFixed(2)}\\`);const{source:x={}}=r;u+=await ld(t,{spectrum:r,source:x});let y=Yi(h)[0];for(let C of d){let v=C.signals;for(let S of v){let{multiplicity:E}=S;if((!E||E==="m")&&h==="1H")u+=`
${Number(C.from).toFixed(y)}-${Number(C.to).toFixed(y)}`;else if(S.delta)u+=`
${Number(S.delta).toFixed(y)}`;else continue;let T="";if(S.diaIDs&&S.diaIDs.length>0&&(S.diaIDs.forEach((N,R,M)=>{let A=", ";R===M.length-1&&(A=""),T+=`${s.byDiaID[N].label||N}${A}`}),u+=`, L=${T}`),h==="1H"){S.multiplicity&&(u+=`, S=${S.multiplicity}`);let N=S.js;if(Array.isArray(N)&&N.length){let R=", J=";for(const M of N){if(u+=`${R}${Number(M.coupling).toFixed(3)}`,M.diaIDs){let{diaIDs:A}=M;if(Array.isArray(A)||(A=[A]),!A.length)continue;u+=`(${s.byDiaID[A[0]].label||String(A[0])})`}R=", "}}C.integration?u+=`, E=${Number(C.integration).toFixed(y)}`:C.nbAtoms?u+=`, E=${C.nbAtoms.toFixed(y)}`:C.signals[0].nbAtoms!==void 0&&(u+=`, E=${C.signals[0].nbAtoms}`)}}v.length&&(u+="\\")}u+=`
`,/\n/.exec(u)&&(i+=u)}return i}function sC(e){switch(e.toLowerCase()){case"hsqc":case"cosy":return"1J";case"hmbc":return"NJ";default:return"NJ"}}const iC=Array.isArray;async function lC(e,t,n={labels:{}}){const{byDiaID:o}=n.labels;let s="";const i=`
> <NMREDATA_2D_`;for(let l of e){if(l.info.dimension<2)continue;let r="";const{info:a,source:u}=l;let{nucleus:d,experiment:h,pulseSequence:m}=a,g=sC(h);d&&(r+=`${i}${d[1]}_${g}_${d[0]}>`);let x=Yi(d);r+=await ld(t,{spectrum:l,source:u}),h&&(r+=`
CorType=${h} \\`),m&&(r+=`
PulseProgram=${m} \\`),l.info.baseFrequency&&(r+=`
Larmor=${Number(l.info.baseFrequency[0]).toFixed(2)}\\`);let y=l.zones.values||[];for(let C of y){let v=C.signals;for(let S of v){let{x:E,y:T,peaks:N}=S,R=Hl(E,o,x[0]),M=Hl(T,o,x[1]),A=Math.max(...N.map(D=>D.z));r+=`
${R}/${M}, I=${A.toFixed(2)}\\`}}s+=r}return s.length>0?`${s}
`:""}function Hl(e,t,n){let{diaIDs:o,delta:s}=e;if(o){if(iC(o)||(o=[o]),o.length<1)return Number(s).toFixed(n);let i=o.map(l=>t[l].label).join(",");return o.length>1?`(${i})`:i}return Number(s).toFixed(n)}function rC(e){let t=[];for(const{x:n,y:o}of e)t.push(n,o);return t}function aC(e,t={groupedDiaIDs:[]}){const{groupedDiaIDs:n,molecule:o}=t;let s=Cp(o,{toLabel:"H",maxLength:1}),i={},l={};for(let r of e){let{dimension:a,nucleus:u}=r.info,d=Yi(u),[h,m]=a>1?["zones",rC]:["ranges",x=>x||[]],g=r[h].values||[];for(let x of g){let y=m(x.signals);for(let C=0;C<y.length;C++){let v=y[C].diaIDs||[];for(let S of v){let E=Number(y[C].delta).toFixed(d[C%a]),T=n.find(R=>R.oclID===S),N={atom:T.atoms[0],molecule:o,connections:s,atomLabel:T.atomLabel};i[S]={atoms:T.atoms.map(R=>R+1),shift:E,label:zl(N)};for(let R of T.atoms)N.atom=R,l[R]={shift:E,diaID:S,label:zl(N)}}}}}return{byAssignNumber:l,byDiaID:i}}function zl(e){const{atom:t,molecule:n,atomLabel:o,connections:s}=e;let i="";if(o!=="C"){let r=s[t].find(d=>d&&d.length>1),a=`${o}${r[0]+1}`,u=`${n.getAtomLabel(r[1])}${r[1]+1}`;i=`${a}${u}`}else i=`${o}${t+1}`;return i}const Gi={solvent:"SOLVENT",temperature:"TEMPERATURE",assignment:"ASSIGNMENT",j:"J",signals:"SIGNALS",id:"ID"};async function cC(e,t={}){const{data:n,molecules:o}=e||{data:[],molecules:[]};let s=new an;for(const i of o)await Vl(n,s,k(b({},t),{molecule:i}));return o.length||await Vl(n,s,t),s}async function Vl(e,t,n={}){let{id:o,prefix:s=`
> <NMREDATA_`,filename:i="nmredata",molecule:l}=n,r="",a;l&&(l=Vt.Molecule.fromMolfile(l.molfile),r+=l.toMolfile(),l.addImplicitHydrogens(),a=Sp(l));let u=l?aC(e,{groupedDiaIDs:a,molecule:l}):{byDiaID:void 0,byAssignNumber:void 0};r+=`${s}VERSION>
1.1\\
`,r+=Bl(e,"temperature",{prefix:s}),r+=Bl(e,"solvent",{prefix:s}),o&&(r+=`${s+Gi.id}>
id\\
`),r+=uC(u.byDiaID,{prefix:s}),r+=await oC(e,t,{prefix:s,labels:u}),r+=await lC(e,t,{prefix:s,labels:u}),r+=`
$$$$
`,t.file(`${i}.sdf`,r)}function uC(e,t){if(!e)return"";const{prefix:n}=t;let o=`${n+Gi.assignment}>
`;for(let s in e){let i=e[s].atoms;o+=`${e[s].label}, ${e[s].shift}`;for(let l of i)o+=`, ${l}`;o+=`\\
`}return o}function Bl(e,t,n={prefix:""}){const{prefix:o}=n;let s="";for(let i of e)if(i.info[t]){s+=`${o+Gi[t]}>
${String(i.info[t])}\\
`;break}return s}function rd(){const e=he(),t=re(),n=$(),o=c.exports.useCallback(async()=>{if(n.data.length>0){const d=await t.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{id("nmrSVG"),d(),t.success("Image copied to clipboard")},0)}},[t,n]),s=c.exports.useCallback(async(d=0,h=!0)=>{if(n.data.length>0){const m=await t.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{async function g(){var C,v;const x=(v=(C=n.data[0])==null?void 0:C.display)==null?void 0:v.name,y=gl(n);await $l(y,x,d,h),m()}g()},0)}},[t,n]),i=c.exports.useCallback(async()=>{if(n.data.length>0){const d=await t.showLoading("Exporting as NMRE process in progress");setTimeout(()=>{async function h(){var x,y;const m=(y=(x=n.data[0])==null?void 0:x.display)==null?void 0:y.name,g=await cC(n);K1(g,m),d()}h()},0)}},[t,n]),l=c.exports.useCallback(async()=>{if(n.data.length>0){const d=await t.showLoading("Exporting as SVG process in progress");setTimeout(()=>{var m,g;const h=(g=(m=n.data[0])==null?void 0:m.display)==null?void 0:g.name;sd("nmrSVG",h),d()},0)}},[t,n.data]),r=c.exports.useCallback(async()=>{if(n.data.length>0){const d=await t.showLoading("Exporting as PNG process in progress");setTimeout(()=>{var m,g;const h=(g=(m=n.data[0])==null?void 0:m.display)==null?void 0:g.name;q1("nmrSVG",h),d()},0)}},[t,n.data]),a=c.exports.useCallback(async d=>{const{name:h,pretty:m,compressed:g,dataExportOption:x}=d,y=await t.showLoading(`Exporting as ${h}.nmrium process in progress`);setTimeout(()=>{async function C(){const v=gl(n,x);await $l(v,h,m?2:0,g),y()}C()},0)},[t,n]),u=c.exports.useCallback(async()=>{var d,h;if(n.data.length>0){const m=(h=(d=n.data[0])==null?void 0:d.display)==null?void 0:h.name;e.show(f(G1,{name:m,onSave:a}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:400})}},[e,a,n.data]);return{saveToClipboardHandler:o,saveAsJSONHandler:s,saveAsNMREHandler:i,saveAsSVGHandler:l,saveAsPNGHandler:r,saveAsHandler:u}}function ad(){const e=ie();return c.exports.useMemo(()=>!B(e,"display.general.hideExperimentalFeatures",!1),[e])}function Se(l){var r=l,{children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right"}=r,i=G(r,["children","style","onClick","popupTitle","popupPlacement"]);return f(we,{title:o,popupPlacement:s,children:f("button",k(b({style:t,type:"button",onClick:n},i),{children:e}))})}const At=P`
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
`,dC=P`
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
`;function pC({children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right",defaultValue:i=!1,disabled:l=!1,className:r=""}){const[a,u]=c.exports.useState(i),d=c.exports.useCallback(()=>{n(!a),u(!a)},[n,a]);return p(we,{title:o,popupPlacement:s,children:p("button",{disabled:l,css:dC,style:t,className:(a?"toggle toggle-active ":"toggle ")+r,type:"button",onClick:d,children:e})})}var Ye=c.exports.memo(pC);const hC=P`
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
`;function fC({counter:e,onDelete:t=()=>null,deleteToolTip:n="Delete",onFilter:o=()=>null,filterToolTip:s="",filterIsActive:i=!1,counterFiltered:l=0,children:r,onSettingClick:a=()=>null,showSettingButton:u=!1,canDelete:d=!0,style:h={},className:m=""}){return w("div",{css:hC,style:h,className:m,children:[w("div",{className:"left-container",children:[d&&p(we,{title:n,popupPlacement:"right",children:p("button",{type:"button",onClick:t,disabled:e===0,children:p(vt,{})})}),s?p(Ye,{popupTitle:s,popupPlacement:"right",onClick:o,defaultValue:i,children:p(kp,{style:{pointerEvents:"none",fontSize:"12px"}})}):null,r]}),e!==void 0&&w("p",{className:"counter-label",children:["["," ",i&&i===!0&&l!==void 0?`${l}/${e}`:e," ","]"]}),u&&p(we,{title:"preferences",popupPlacement:"left",children:p("button",{type:"button",onClick:a,children:p(wp,{})})})]})}var nt=c.exports.memo(fC);function mC(){const e=c.exports.useCallback(()=>{},[]);return w("div",{css:At,children:[p(nt,{showSettingButton:!1,canDelete:!1,children:p(Se,{popupTitle:"automatic assignment",onClick:e,children:p(Ep,{style:{fontSize:"18px"}})})}),p("div",{className:"inner-container"})]})}const gC=P`
  background-color: #ff6f0057;
`,xC=P`
  background-color: #f5f5dc;
`,cd=P`
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
`;function bC({data:e,columns:t,onMouseDown:n=()=>null}){const{getTableProps:o,getTableBodyProps:s,headerGroups:i,rows:l,prepareRow:r}=Ln.exports.useTable({columns:t,data:e},Ln.exports.useSortBy,Ln.exports.useFlexLayout);return w("table",k(b({},o()),{css:cd,style:{height:"100%"},children:[p("thead",{children:i.map(a=>p("tr",k(b({},a.getHeaderGroupProps()),{children:a.headers.map(u=>w("th",k(b({},u.getHeaderProps(u.getSortByToggleProps())),{children:[u.render("Header"),p("span",{children:u.isSorted?u.isSortedDesc?" \u25BC":" \u25B2":""})]}),u.getHeaderProps().key))}),a.getHeaderGroupProps().key))}),p("tbody",k(b({},s()),{style:{display:"block",height:"100%",overflowY:"auto"},children:l.map(a=>(r(a),p("tr",k(b({},a.getRowProps()),{onMouseDown:n,children:a.cells.map(u=>p("td",k(b({},u.getCellProps()),{style:k(b({},u.getCellProps().style),{padding:"0px"}),children:u.render("Cell")}),u.getCellProps().key))}),a.getRowProps().key)))}))]}))}var yC=c.exports.memo(bC);const Ss={container:{height:"100%",flexDirection:"column",display:"flex",width:"100%"},tableContainer:{height:"calc(100% - 30px)",overflow:"auto",display:"block"},searchInput:{width:"100%",borderRadius:"5px",border:"0.55px solid gray",padding:"5px",marginBottom:"2px"}};function vC({info:e,meta:t}){const[n,o]=c.exports.useState({}),[s,i]=c.exports.useState([]),l=c.exports.useRef(null),r=c.exports.useCallback(u=>{const d=Object.keys(n).filter(h=>h.toLowerCase().includes(u.target?u.target.value.toLowerCase():u.toLowerCase()));i(d)},[n]);c.exports.useEffect(()=>{l.current&&r(l.current.value)},[r,l]),c.exports.useEffect(()=>{if(e&&t){const u=Object.keys(e).concat(Object.keys(t));i(u),o(b(b({},e),t))}},[e,t]);const a=c.exports.useMemo(()=>[{Header:"Parameter",sortType:"basic",minWidth:100,width:20,maxWidth:20,Cell:({row:u})=>f("p",{style:{padding:"5px",backgroundColor:"white"},children:u.original})},{Header:"Value",sortType:"basic",resizable:!0,Cell:({row:u})=>f("p",{style:{backgroundColor:"#efefef",height:"100%",padding:"5px",fontFamily:"monospace",whiteSpace:"pre",overflow:"hidden"},children:`${n[u.original]}`})}],[n]);return _("div",{style:Ss.container,children:[f("div",{children:f("input",{type:"text",style:Ss.searchInput,placeholder:"Search for parameter...",onChange:r,ref:l})}),f("div",{style:Ss.tableContainer,children:f(yC,{data:s,columns:a})})]})}const CC=c.exports.memo(vC),SC={info:{},meta:{}};function kC(){const{info:e,meta:t}=ve(SC);return f(CC,{info:e,meta:t})}const wC=P`
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
`;function ud({onDelete:e,className:t="delete"}){return p("button",{css:wC,className:t,type:"button",onClick:e,children:p(Js,{className:"icon"})})}const EC=e=>P`
  position: relative;

  .delete {
    position: absolute;
    top: 2px;
    left: 2px;
  }

  ${e}
`;function AC({tabid:e,tablabel:t,isActive:n,onClick:o=()=>null,canDelete:s,onDelete:i=()=>null,tabstyles:l,render:r}){let a="tab-list-item";n&&(a+=" tab-list-active");const u=c.exports.useCallback(h=>{o(k(b({},h),{tablabel:t,tabid:e}))},[o,t,e]),d=c.exports.useCallback(h=>{h.stopPropagation(),i(k(b({},h),{tablabel:t,tabid:e}))},[i,t,e]);return w("li",{className:a,onClick:u,css:EC(l),"data-test-id":`tab-${e}`,children:[s&&p(ud,{onDelete:d}),r?r({isActive:n,title:t||"",id:e}):t]})}function Re(e){return p(Qe,{children:e.children})}const jl=P`
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
`,TC=P`
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
`;var Zi=(e=>(e.TOP="TOP",e.LEFT="LEFT",e))(Zi||{});function DC({children:e,onClick:t,position:n,onDelete:o=()=>null,activeTab:s}){const i=c.exports.useCallback(u=>{const{tablabel:d,tabid:h}=u;t({tablabel:d,tabid:h})},[t]);let l;const r=c.exports.Children.map(e,u=>{if(!c.exports.isValidElement(u))return null;const{tabid:d}=u.props;return d===s&&(l=u.props.children),p(AC,k(b({},u.props),{isActive:d===s,onClick:i,onDelete:o}))}),a=c.exports.useMemo(()=>{switch(n){case"TOP":return jl;case"LEFT":return TC;default:return jl}},[n]);return w("div",{className:"tabs",css:a,children:[p("ol",{className:"tab-list",children:r}),p("div",{className:"tab-content",children:l})]})}var An=c.exports.memo(DC);function Xl({direction:e,onClick:t}){return p("div",{onClick:t,css:P`
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
      `,children:p(Ap,{style:{transform:`scaleX(${e==="right"?"-1":"1"})`}})})}const IC=.45;function MC({children:e,loop:t=!1,defaultIndex:n=0,onChange:o=()=>null}){const[s,{width:i}]=kr(),[l,r]=c.exports.useState(0);c.exports.useEffect(()=>{r(n)},[n]);const a=c.exports.useMemo(()=>c.exports.Children.map(e,h=>p("div",{css:P`
              width: ${i}px;
              height: 100%;
            `,children:h},h.key)),[e,i]),u=c.exports.useCallback(()=>{r(h=>{if(a&&h===a.length-1)return o(h),t?0:h;const m=h+1;return o(m),m})},[a,t,o]),d=c.exports.useCallback(()=>{r(h=>{if(h===0)return o(h),t?0:h;const m=h-1;return o(m),m})},[t,o]);return!i&&!a?null:w("div",{css:P`
        position: relative;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        display: block;
      `,ref:s,children:[p("div",{css:P`
          transform: translateX(-${i*l}px);
          transition: transform ease-out ${IC}s;
          height: 100%;
          width: ${i*(a?a.length:1)}px;
          display: flex;
        `,children:a}),l!==0&&p(Xl,{direction:"left",onClick:d}),a&&l!==a.length-1&&p(Xl,{direction:"right",onClick:u})]})}var dd=c.exports.memo(MC);const RC=P`
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
`,NC=P`
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
`;function pd(e){const{molecules:t,onChange:n=()=>null,index:o}=e,[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{const r=o&&o<t.length?o:0;t&&t.length>0&&i(r)},[o,t]);const l=c.exports.useCallback(r=>{i(r),n(r)},[n]);return w("div",{children:[p("div",{css:RC,children:w("p",{children:[t&&t.length>0&&`${+(s+1)} / ${t.length}`," "]})}),p("div",{css:NC,children:p(dd,{defaultIndex:s,onChange:l,children:t==null?void 0:t.map((r,a)=>{var u;return w("div",{className:"slider",children:[p("div",{children:r.molfile&&p(Tp,{id:`molSVG${a}`,width:120,molfile:r.molfile})}),w("p",{children:[p(Dp,{mf:r.mf})," - ",(u=r.mw)==null?void 0:u.toFixed(2)]})]},r.key)})})})]})}const PC=P`
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
`;function FC(e){const[t,n]=c.exports.useState(),{setFieldValue:o,errors:s,values:i}=pe(),{molecules:l,activeTab:r}=$(),a=Ca(r),u=c.exports.useMemo(()=>a&&l&&l.length>0&&t!==void 0&&l[t].atoms[a]?l[t].atoms[a]:0,[t,a,l]),d=c.exports.useCallback(m=>{n(m),o(e.name,l[m])},[l,e.name,o]);c.exports.useEffect(()=>{if(l&&l.length>0){const m=i[e.name]?l.findIndex(g=>g.key===i[e.name].key):-1;d(m!==-1?m:0)}},[l,e.name,d,i]);const h=c.exports.useCallback(m=>{d(m)},[d]);return p("div",{css:PC,children:a&&l&&l.length>0?w("div",{className:"molecule-container",children:[p("p",{className:"title",children:"Select a molecule as reference!"}),w("div",{className:"molecule-selection-container",children:[p(pd,{index:t,molecules:l,onChange:h}),w("p",{className:"newSumText",children:["New sum for ",a," will be ",u,"!"]})]})]}):p("p",{className:"empty",style:{color:s[e.name]?"red":"black"},children:"Add a molecule first from Structure panel to select as a reference!"})})}const _C=P`
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
`;function hd({onSave:e,onClose:t,header:n,sumOptions:o}){const{display:{general:s,panels:i}}=ie(),[l,r]=c.exports.useState("auto"),a=c.exports.useRef(null),u=c.exports.useCallback(g=>{g.key==="Enter"&&a.current.submitForm()},[]),d=c.exports.useCallback(g=>{r(g.tabid)},[]);c.exports.useEffect(()=>{if(o.sumAuto&&!s.hideSetSumFromMolecule&&!i.hideStructuresPanel){r("auto");const{mf:g,moleculeKey:x}=o;a.current.setValues({sum:null,molecule:x&&g?{mf:g,key:x}:null})}else r("manual"),a.current.setValues({sum:o.sum,molecule:null})},[s.hideSetSumFromMolecule,i.hideStructuresPanel,o]);const h=c.exports.useCallback(g=>{switch(l){case"auto":{const{molecule:{mf:x,key:y}}=g;e({sumAuto:!0,mf:x,moleculeKey:y});break}case"manual":{const{sum:x}=g;e({sum:x,sumAuto:!1});break}default:return}t()},[t,e,l]),m=c.exports.useMemo(()=>{switch(l){case"auto":return ee({molecule:ee().required()});case"manual":return ee({sum:ce().required()});default:return null}},[l]);return w("div",{css:[Et,_C],children:[w("div",{className:"header handle",children:[p("span",{children:n}),p(me,{onClick:t})]}),p("div",{className:"tab-content",children:p(ae,{ref:a,onSubmit:h,initialValues:{sum:null,molecule:null},validationSchema:m,children:w(An,{activeTab:l,onClick:d,children:[!s.hideSetSumFromMolecule&&!i.hideStructuresPanel&&p(Re,{tablabel:"Auto",tabid:"auto",children:p(FC,{name:"molecule"})}),p(Re,{tablabel:"Manual",tabid:"manual",children:p("div",{className:"manual-container",children:p(U,{name:"sum",type:"number",placeholder:"Enter the new value",onKeyDown:u})})})]})})}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:()=>a.current.submitForm(),className:"btn",children:"Set"})})]})}const LC=P`
  background-color: transparent;
  border: none;
  height: 100%;
  svg {
    fill: green;
    font-size: 16px;
  }
`;function OC(e){const{className:t="",disabled:n=!1,popupPlacement:o="left",popupTitle:s="Save",onClick:i}=e;return p("div",{className:t,children:p(we,{title:s,popupPlacement:o,children:p("button",{css:LC,type:"button",onClick:i,disabled:n,className:t,children:p(Ip,{})})})})}var Ui=c.exports.memo(OC);const $C=P`
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
`;function HC({onClose:e,onSave:t}){return w("div",{css:$C,children:[p(me,{onClick:e,popupTitle:"close Preferences"}),p(Ui,{onClick:t,popupTitle:"save Preferences"})]})}var Tn=c.exports.memo(HC);function zC(e,t){const{onSave:n=()=>null,value:o,type:s="text",style:i,onEditStart:l=()=>null,editStatus:r=!1}=e,[a,u]=c.exports.useState();c.exports.useEffect(()=>{u(r)},[r]),c.exports.useImperativeHandle(t,()=>({startEdit:()=>{u(!0)},closeEdit:()=>{u(!1)}}));const d=c.exports.useCallback(m=>{m.target.classList.contains("editable-column")||(u(!1),window.removeEventListener("mousedown",d))},[]),h=c.exports.useCallback((m,g=null)=>{m?(window.addEventListener("mousedown",d),l(g),u(m)):(["Enter","Tab"].includes(g.key)&&n(g),["Enter","Tab","Escape"].includes(g.key)&&(u(m),window.removeEventListener("mousedown",d)))},[d,l,n]);return _("div",{style:b({display:"table",width:"100%",height:"100%"},i),onDoubleClick:m=>h(!0,m),children:[!a&&f("span",{style:{display:"table-cell",verticalAlign:"middle"},children:o}),a&&f("div",{style:{display:"table-cell",verticalAlign:"middle"},children:f(yt,{enableAutoSelect:!0,className:"editable-column",value:o,type:s,onKeyDown:m=>h(!1,m)})})]})}var it=c.exports.forwardRef(zC);const VC=P`
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
`;function BC({context:e},t){const[n,o]=c.exports.useState({left:0,top:0}),{rootRef:s,elementsWraperRef:i}=zi(),[l,r]=c.exports.useState(),[a,u]=c.exports.useState(),[d,h]=c.exports.useState(null),m=c.exports.useRef();c.exports.useEffect(()=>(m.current=document.createElement("div"),i&&i.appendChild(m.current),()=>{m.current&&i&&i.removeChild(m.current)}),[i]);const g=y=>{y.preventDefault(),h(y.target.parentElement),u(!0);const C=y.clientX,v=y.clientY,S=window.innerWidth,E=window.innerHeight,T=150,N=0,R=S-C>T;let M=!R,A=E-v>N;const D=!A;R&&(M=`${C+5}px`),M&&(M=`${C-T-5}px`),A&&(A=`${v+5}px`),D&&(A=`${v-N-5}px`),o({left:M,top:A})};c.exports.useImperativeHandle(t,()=>({handleContextMenu:(y,C)=>{r(C),g(y)}}));const x=c.exports.useCallback((y,C)=>{y.preventDefault(),C(l),u(!1)},[l]);return c.exports.useEffect(()=>{const y=C=>{d&&C.target.parentElement&&!C.target.parentElement.isSameNode(d)&&a&&u(!1)};return s&&s.addEventListener("click",y),()=>{s&&s.removeEventListener("click",y)}},[a,t,s,d]),a?m.current&&Yo.exports.createPortal(e&&p("div",{ref:t,css:[VC,n],children:e.map((y,C)=>p("button",{type:"button",onClick:v=>x(v,y.onClick),children:y.label},C))}),m.current):null}var Gt=c.exports.forwardRef(BC);function jC({headerGroups:e}){return f("thead",{children:e.map(t=>f("tr",k(b({},t.getHeaderGroupProps()),{children:t.headers.map(n=>_("th",k(b({},n.getHeaderProps(n.getSortByToggleProps())),{style:n.style,children:[n.render("Header"),f("span",{children:n.isSorted?n.isSortedDesc?" \u25BC":" \u25B2":""})]}),n.getHeaderProps().key))}),t.getHeaderGroupProps().key))})}var XC=c.exports.memo(jC);function YC(e){const t=e.original.id;return t?t instanceof Array?t:[String(t)]:[""]}function GC(e,t){const{row:n,highlightedSource:o=ue.UNKNOWN,onContextMenu:s}=e,i=c.exports.useMemo(()=>({type:o,extra:n.original}),[o,n]),l=le(YC(n),i);return c.exports.useEffect(()=>()=>{l.hide()},[]),c.exports.useMemo(()=>p("tr",k(b(b({ref:t,onContextMenu:s,css:l.isActive?gC:Object.prototype.hasOwnProperty.call(n.original,"isConstantlyHighlighted")&&n.original.isConstantlyHighlighted===!0?xC:null},n.getRowProps()),l.onHover),{children:n.cells.map(r=>{const{style:a,padding:u}=r.column;return r.isRowSpanned?null:p("td",k(b({rowSpan:r.rowSpan},r.getCellProps()),{onContextMenu:d=>(d.preventDefault(),!1),style:b({padding:u},a),children:r.render("Cell")}),r.key)})}),n.getRowProps().key),[l.isActive,l.onHover,s,t,n])}var ZC=c.exports.forwardRef(GC);const fd=c.exports.createContext(null),UC=fd.Provider;function WC(){const e=c.exports.useContext(fd);if(!e)throw new Error("react table context was not found ");return e}function KC(e){e.useInstance.push(qC)}function qC(e){const{allColumns:t}=e;let n=[];t.forEach(o=>{const{id:s,enableRowSpan:i}=o;i!==void 0&&i!==!1&&n.push({id:s,cellValue:null,cellIndex:0})}),Object.assign(e,{rowSpanHeaders:n})}function JC(e,t,n,o){const s=e[t];for(let i=0;i<s.allCells.length;i++){const l=s.allCells[i],r=n.find(a=>a.id===l.column.id);if(r!==void 0){const a=o?`${l.value}-${s.original[o]}`:l.value;r.cellValue===null||r.cellValue!==a?(l.isRowSpanned=!1,r.cellValue=a,r.cellIndex=t,l.rowSpan=1):(e[r.cellIndex].allCells[i].rowSpan++,l.isRowSpanned=!0)}}}const QC={table:e=>{if(e)return{position:"sticky",top:0}}},eS=c.exports.forwardRef(function(t,n){const{data:o,columns:s,highlightedSource:i,context:l=null,onScroll:r,approxItemHeight:a=40,enableVirtualScroll:u=!1,groupKey:d}=t,h=c.exports.useRef(null),{index:m}=WC(),{getTableProps:g,getTableBodyProps:x,headerGroups:y,rows:C,prepareRow:v,rowSpanHeaders:S}=Ln.exports.useTable({columns:s,data:o},Ln.exports.useSortBy,KC),E=c.exports.useCallback((N,R)=>{Bt(N)||(N.preventDefault(),h.current.handleContextMenu(N,R.original))},[h]),T=u?C.slice(m.start,m.end):C;return w("div",k(b({ref:n,className:"table-container",style:{overflowY:"auto",position:"relative",height:"100%"}},u&&{onScroll:r}),{children:[u&&p("div",{style:{height:a*o.length,position:"absolute",width:"100%",pointerEvents:"none"}}),w("table",k(b({},g()),{css:cd,style:QC.table(u),children:[p(XC,{headerGroups:y}),p("tbody",k(b({},x()),{children:T.map((N,R)=>(v(N),JC(C,u?R+m.start:R,S,d),p(ZC,k(b({row:N},N.getRowProps()),{onContextMenu:M=>E(M,N),highlightedSource:i}),N.key)))}))]})),p(Gt,{ref:h,context:l})]}))});function tS(e){const{data:t,approxItemHeight:n=40,groupKey:o}=e,s=c.exports.useRef(null),[i,{height:l}]=kr(),r=od([i,s]),[a,u]=c.exports.useState({offsetHeight:0,scrollHeight:0,numberOfVisibleRows:0,index:{start:0,end:0}});c.exports.useEffect(()=>{if(r.current){const{scrollHeight:x}=r.current,y=Math.ceil(l/n);u(C=>k(b({},C),{offsetHeight:l,scrollHeight:x,numberOfVisibleRows:y,index:{start:0,end:y+1}}))}},[n,r,l]);const d=c.exports.useCallback((x,y)=>{const C=t[x];if(C.index&&o)switch(y){case-1:{let v=x-1;for(;v>0;){if(t[v][o]!==C[o])return v+1;v--}return x}case 1:{let v=x+1;for(;v<t.length;){if(t[v][o]!==C[o])return v-1;v++}return x}default:return x}return x},[t,o]),h=c.exports.useCallback((x,y)=>{const C=x-y,v=C>=t.length?C:x;return d(v,-1)},[t.length,d]),m=c.exports.useCallback((x,y)=>{const C=x+y,v=C>=t.length?t.length-1:C;return d(v,1)},[t.length,d]),g=c.exports.useCallback(()=>{if(s.current&&a){const{scrollTop:x}=s.current,{numberOfVisibleRows:y,index:C}=a,v=Math.ceil(x/n),S=h(v,y);if(v!==C.start){const E=m(v,y);u(k(b({},a),{index:{start:S,end:E+1}}))}}},[n,m,h,a]);return p(UC,{value:a,children:p(eS,b({onScroll:g,ref:r},e))})}var ps=c.exports.memo(tS);function hs(e,t){const{index:n,Header:o=()=>null,extraParams:s,accessor:i=null,Cell:l=null,sortType:r="basic",enableRowSpan:a=!1,style:u={},id:d}=t||{};e.push(b(k(b(b(b({index:n},b({},d&&{id:d})),b({},i?{accessor:i}:{})),b({},l?{Cell:l}:{})),{Header:o,sortType:r,enableRowSpan:a,style:u}),s))}const nS=`url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="960px" height="560px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve"><g id="Rounded_Rectangle_33_copy_4_1_"><path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/></g></svg>')`,Ne=c.exports.forwardRef(function(t,n){const{data:o,style:s={width:100},onChange:i=()=>null,defaultValue:l,name:r="",className:a=""}=t,u=c.exports.useCallback(h=>{let m=h.target.value;isNaN(m)||(m=Number(m)),i(m)},[i]),d=P`
    padding: 0px 5px;
    border: 0.55px solid #cacaca;
    font-size: 14px;
    width: ${s.width?Number(s.width)-5:115}px;
    margin: 0;
    height: 100%;
    background: ${nS} no-repeat right white;
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
  `;return p("select",{ref:n,css:d,name:r,onChange:u,defaultValue:l,className:a,style:s,children:o.map(h=>p("option",{value:h.value,children:h.label},`${h.key}`))})}),Yl={container:{height:"100%",backgroundColor:"white"},label:{textAlign:"center",width:"100%",fontSize:"11px",padding:"5px",color:"gray"}};function Zt(){return f("div",{style:Yl.container,children:f("p",{style:Yl.label,children:"No Data"})})}const oS={marginLeft:10,marginRight:10,border:"none"};function sS({activeTab:e,data:t,preferences:n}){const o=Y(),s=c.exports.useCallback((h,m)=>{h.preventDefault(),h.stopPropagation();const g=m.original;o({type:ns,integralID:g.id})},[o]),i=c.exports.useCallback((h,m)=>{const g=k(b({},m.original),{kind:h});o({type:Sc,payload:{data:g}})},[o]),l=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:h})=>h.index+1,width:10},{index:2,Header:"From",sortType:"basic",resizable:!0,accessor:h=>h.from.toFixed(2)},{index:3,Header:"To",sortType:"basic",resizable:!0,accessor:h=>h.to.toFixed(2)},{index:6,Header:"Kind",sortType:"basic",resizable:!0,accessor:h=>h.kind,Cell:({row:h})=>f(Ne,{onChange:m=>i(m,h),data:ti,style:oS,defaultValue:h.original.kind})},{index:7,style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:h})=>f("button",{type:"button",className:"delete-button",onClick:m=>s(m,h),children:f(vt,{})})}],[i,s]),r=c.exports.useCallback((h,m)=>{const g={value:h.target.value,id:m.id};o({type:Bc,payload:{data:g}})},[o]),a=c.exports.useMemo(()=>ut(n,`formatting.panels.integrals.[${e}]`,Nt),[e,n]),u=c.exports.useMemo(()=>[{showWhen:"showAbsolute",index:4,Header:"Absolute",accessor:h=>Xe(h.absolute,B(a,"absoluteFormat",Nt.absoluteFormat))},{showWhen:"showRelative",index:5,id:"relative",Header:()=>{const h=e==null?void 0:e.replace(/[0-9]/g,"");return f("span",{children:`Relative ${h}`})},accessor:h=>Xe(h.integral,B(a,"relativeFormat",Nt.relativeFormat)),Cell:({row:h})=>{const m=Xe(h.original.integral,B(a,"relativeFormat",Nt.relativeFormat)),x=ba(h.original)?m:`[ ${m} ]`;return f(it,{value:x,onSave:y=>r(y,h.original),type:"number"})}}],[e,a,r]),d=c.exports.useMemo(()=>{let h=[...l];for(const g of u){const m=g,{showWhen:x}=m,y=G(m,["showWhen"]);a[x]&&hs(h,y)}return h.sort((g,x)=>g.index-x.index)},[u,l,a]);return t&&t.length>0?f(ps,{data:t,columns:d}):f(Zt,{})}var iS=c.exports.memo(sS);const lS=P`
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
`;function rS(e){const{label:t="Color: ",onColorChange:n=()=>null,name:o,value:s="#000000"}=e,[i,l]=c.exports.useState(!1),[r,a]=c.exports.useState(s);c.exports.useEffect(()=>{a(s)},[s]);const u=c.exports.useCallback(()=>{l(!i)},[i]),d=c.exports.useCallback(()=>{l(!1)},[]),h=c.exports.useCallback(m=>{const g=`${m.hex}${Math.round(m.rgb.a*255).toString(16)}`;a(g),n(k(b({},m),{hex:g,name:o}))},[o,n]);return w("div",{css:lS,children:[p("span",{className:"inputLabel",children:t}),w("div",{style:{flex:4},children:[w("div",{className:"swatch",onClick:u,children:[p("div",{className:"color",style:{backgroundColor:r}}),p("input",{type:"hidden",value:r,name:o})]}),i?w("div",{className:"color-popover",children:[p("div",{className:"cover",onClick:d}),p(wr.ChromePicker,{color:{hex:r},onChangeComplete:h})]}):null]})]})}var aS=c.exports.memo(rS);function cS(e){const r=e,{onColorChange:t=()=>null,name:n}=r,o=G(r,["onColorChange","name"]),{values:s,setFieldValue:i}=pe(),l=c.exports.useCallback(a=>{t(a),i(n,a.hex)},[n,t,i]);return f(aS,k(b({},o),{name:n,onColorChange:l,value:B(s,n)}))}var uS=c.exports.memo(cS);const ks={row:{display:"flex",margin:"5px 0px",alignItems:"center"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center"}};function dS(e){const{label:t,checkControllerName:n,formatControllerName:o,disableFormat:s=!1,hideFormat:i=!1}=e,{values:l,handleChange:r,setFieldValue:a}=pe(),u=c.exports.useCallback(h=>{r(h)},[r]),d=c.exports.useCallback(h=>{a(h.target.name,h.target.checked)},[a]);return _("div",{style:ks.row,children:[f("span",{style:ks.inputLabel,children:t}),_("div",{style:{flex:4,display:"flex",flexDirection:"row",alignItems:"center"},children:[f("input",{type:"checkbox",style:{margin:"0px 5px"},name:n,onChange:d,checked:B(l,n,!1)}),!i&&o&&f(yt,{style:{inputWrapper:ks.input},name:o,value:B(l,o,""),onChange:u,type:"text",disabled:s})]})]})}var _e=c.exports.memo(dS);const fo={container:{display:"flex"},label:{lineHeight:2,userSelect:"none",flex:"2"},inputContainer:{flex:"4",display:"flex",justifyContent:"flex-start"},input:{height:"100%",width:"100px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"}},rn=c.exports.forwardRef(({label:e,name:t,defaultValue:n=0,style:o={label:{},input:{},container:{},inputContainer:{}},onChange:s=()=>null,onInput:i=()=>null,pattern:l="^d*(.d{0,2})?$",step:r="any",min:a="any",max:u="any"},d)=>{const h=c.exports.useRef(null),m=c.exports.useCallback(g=>{if(g.target.checkValidity()){const x=Number(g.target.value===""?n:g.target.value);s(k(b({},g),{target:k(b({},g.target),{name:g.target.name,value:x})}))}else{const x=d||h;x.current.value=Number(n)}},[n,s,d]);return _("div",{style:b(b({},fo.container),o.container),children:[f("span",{style:b(b({},fo.label),o.label),children:e}),f("div",{style:b(b({},fo.inputContainer),o.inputContainer),children:f("input",{ref:d||h,name:t,style:b(b({},fo.input),o.input),type:"number",pattern:l,defaultValue:n,step:r,onChange:m,onInput:i,min:a,max:u},n)})]})});function Gs(e){const r=e,{label:t,name:n}=r,o=G(r,["label","name"]),{values:s,handleChange:i}=pe(),l=c.exports.useCallback(a=>{i(a)},[i]);return f(rn,b({label:t,name:n,defaultValue:B(s,n),onChange:l},o))}function fs(){const{tabActiveSpectrum:e}=$();return c.exports.useMemo(()=>e&&Object.keys(e).length>0?Object.keys(e):[],[e])}const Nn={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},pS=[{id:1,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:2,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function hS({nucleus:e,preferences:t,innerRef:n}){const o=re(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const r=Nt,{color:a,strokeWidth:u}=r,d=G(r,["color","strokeWidth"]),h=ut(t,"formatting.panels.integrals");let m=e.reduce((g,x)=>(g[x]=d,g),{});m=Object.assign(m,{color:a,strokeWidth:u}),s.current.setValues(h||m)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const l=c.exports.useCallback(r=>{t.dispatch({type:kn,payload:{key:"integrals",value:r}}),o.success("Integrals preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:Nn.container,children:_(ae,{onSubmit:l,ref:s,children:[_("div",{style:Nn.groupContainer,children:[f("p",{style:Nn.header,children:"General"}),f(uS,{name:"color"}),f(Gs,{name:"strokeWidth",label:"stroke width :",style:{label:{fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center",borderRadius:"5px"}},min:1,max:9,pattern:"[1-9]+"})]}),e==null?void 0:e.map(r=>_("div",{style:Nn.groupContainer,children:[f("p",{style:Nn.header,children:f(Ks,{mf:r})}),pS.map(a=>f(_e,{label:a.label,checkControllerName:`${r}.${a.checkController}`,formatControllerName:`${r}.${a.formatController}`},a.id))]},r))]})})}const fS=c.exports.memo(hS);function mS(e,t){const n=ie(),o=fs();return f(fS,{innerRef:t,nucleus:o,preferences:n})}var gS=c.exports.forwardRef(mS);const xS=P`
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
`;function bS({integrals:e,info:t,activeTab:n,xDomain:o,preferences:s}){var R;const[i,l]=c.exports.useState(!1),r=Y(),a=he(),[u,d]=c.exports.useState(!1),h=c.exports.useRef(),m=c.exports.useCallback(()=>{r({type:ns,integralID:null})},[r]),g=c.exports.useCallback(()=>{a.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:m},{text:"No"}]})},[a,m]),x=c.exports.useCallback(M=>{r({type:kc,value:M}),a.close()},[r,a]),y=c.exports.useMemo(()=>B(e,"options.sum",null),[e]),C=c.exports.useCallback(()=>{a.show(p(hd,{onClose:()=>a.close(),onSave:x,header:y?`Set new Integrals Sum (Current: ${Number(y).toFixed(2)})`:"Set new Integrals Sum",sumOptions:e==null?void 0:e.options}))},[x,y,e==null?void 0:e.options,a]),v=c.exports.useCallback(()=>{d(!u)},[u]),S=c.exports.useCallback(()=>{h.current.saveSetting(),d(!1)},[]),E=c.exports.useCallback(()=>{l(!i)},[i]),T=c.exports.useCallback(M=>{r({type:su,payload:M})},[r]),N=c.exports.useMemo(()=>{function M(A,D){return D=D*1e4,A=A*1e4,D>=o[0]*1e4&&A<=o[1]*1e4||A<=o[0]*1e4&&D>=o[1]*1e4}return t.dimension===1&&(e==null?void 0:e.values)?(i?e.values.filter(D=>M(D.from,D.to)):e.values).map(D=>k(b({},D),{isConstantlyHighlighted:M(D.from,D.to)})):[]},[i,t.dimension,e,o]);return p(c.exports.Fragment,{children:w("div",{css:[At,xS,u&&P`
              th {
                position: relative;
              }
            `],children:[!u&&w(nt,{counter:(R=e==null?void 0:e.values)==null?void 0:R.length,onDelete:g,deleteToolTip:"Delete All Integrals",onFilter:E,filterToolTip:i?"Show all integrals":"Hide integrals out of view",filterIsActive:i,counterFiltered:N.length,showSettingButton:!0,onSettingClick:v,children:[p(we,{title:y?`Change Integrals Sum (${Number(y).toFixed(2)})`:"Change Integrals Sum",popupPlacement:"right",children:p("button",{className:"sum-button",type:"button",onClick:C,children:p(Er,{})})}),p(Ye,{className:"fix-integral-toggle-btn",popupTitle:"fix integral values",popupPlacement:"right",onClick:T,children:p(Ar,{})})]}),u&&p(Tn,{onSave:S,onClose:v}),p("div",{className:"inner-container",children:u?p(gS,{ref:h}):p(iS,{data:N,activeTab:n,preferences:s})})]})})}const yS=c.exports.memo(bS),vS={integrals:{},info:{}};function CS(){const{xDomain:e,activeTab:t}=$(),n=ie(),{integrals:o,info:s}=ve(vS);return p(yS,{integrals:o,info:s,preferences:n,xDomain:e,activeTab:t})}function Q(e){const{title:t,className:n="",children:o,style:s}=e;return _("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{className:n,style:b({fontSize:"11px",fontWeight:"bold",color:"#232323",paddingRight:"10px",width:"max-content"},s==null?void 0:s.label),children:t}),f("div",{style:s==null?void 0:s.wrapper,children:o})]})}const SS={from:-1,to:1,nbPoints:1024};function kS({onClose:e=()=>null}){const t=c.exports.useRef(),{data:n}=$(),o=c.exports.useCallback(()=>{t.current.submitForm()},[]),s=c.exports.useCallback(i=>{W1(n,i,"fileName"),e()},[n,e]);return c.exports.useEffect(()=>{function i(l){const[r,a]=l.range;t.current.setValues(k(b({},t.current.values),{from:r,to:a}))}return de.on("brushEnd",i),()=>{de.off("brushEnd",i)}},[]),w("div",{css:Et,children:[w("div",{className:"header handle",children:[p("span",{children:"Export spectra as a Matrix"}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",children:w(ae,{ref:t,initialValues:SS,onSubmit:s,children:[w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Range :"}),p(Q,{title:"From : ",children:p(U,{name:"from",type:"number"})}),p(Q,{title:"To : ",children:p(U,{name:"to",type:"number"})})]}),p("div",{className:"row margin-10",children:p(Q,{title:"Number of Points :",className:"custom-label",children:p(U,{name:"nbPoints",type:"number"})})})]})}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:o,className:"btn",children:"Export Now"})})]})}function wS({onSubmit:e},t){const{xDomain:n}=$();return _(ae,{ref:t,initialValues:{from:n[0],to:n[1],numberOfPoints:1024},onSubmit:e,children:[_("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(Q,{title:"From : ",children:f(U,{name:"from",type:"number"})}),f(Q,{title:"To : ",children:f(U,{name:"to",type:"number"})})]}),f("div",{className:"row margin-10",children:f(Q,{className:"custom-label",title:"Number of points : ",children:f(U,{name:"numberOfPoints",type:"number"})})})]})}var ES=c.exports.forwardRef(wS);function AS({onSubmit:e},t){const{xDomain:n}=$();return f(ae,{ref:t,initialValues:{from:n[0],to:n[1]},onSubmit:e,children:_("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(Q,{title:"From :",children:f(U,{name:"from",type:"number"})}),f(Q,{title:"To :",children:f(U,{name:"to",type:"number"})})]})})}var TS=c.exports.forwardRef(AS);const DS=[{key:0,value:0,label:"Select Filter"},{key:Ao,value:Ao,label:ta},{key:Vn,value:Vn,label:qr},{key:_s,value:_s,label:ca},{key:Ns,value:Ns,label:Ur},{key:Fs,value:Fs,label:ia}],IS=P`
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
`;function MS({onClose:e=()=>null,nucleus:t=""}){const n=c.exports.useRef(),o=Y(),[s,i]=c.exports.useState(""),l=c.exports.useMemo(()=>{const h=_t[t]?Object.entries(_t[t]).map(m=>({key:m[0],value:m[0],label:m[0]}),[]):[];return DS.concat(h)},[t]),r=c.exports.useCallback(h=>{h.preventDefault(),n.current&&n.current.submitForm()},[]),a=c.exports.useCallback(h=>{h&&(o({type:eu,payload:[{name:s,options:h}]}),e())},[o,s,e]);c.exports.useEffect(()=>{function h(m){const[g,x]=m.range;n.current&&n.current.setValues(k(b({},n.current.values),{from:g,to:x}))}return de.on("brushEnd",h),()=>{de.off("brushEnd",h)}},[]);const u=c.exports.useCallback(h=>{i(h)},[]),d=c.exports.useMemo(()=>{switch(s){case Ao:return p(TS,{onSubmit:a,ref:n});case Vn:return p(ES,{onSubmit:a,ref:n});default:p(ae,{ref:n,initialValues:null,onSubmit:a});break}},[s,a]);return w("div",{css:[Et,IS],children:[w("div",{className:"header handle",children:[p("span",{children:"Apply filters"}),p(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content container",children:[p("p",{className:"infoText",children:"This filter will use the exclusions zones defined in the first spectrum."}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Filter :"}),p(Ne,{data:l,style:{width:275,height:30,margin:0},onChange:u})]}),d]}),w("div",{className:"footer-container",children:[p("button",{type:"button",onClick:r,className:"btn primary",children:"Apply"}),p("button",{type:"button",onClick:e,className:"btn",children:"Close"})]})]})}function RS(){const e=he(),t=Y(),n=c.exports.useCallback(()=>{t({type:He}),e.show(p(MS,{}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:550,height:250})},[e,t]),o=c.exports.useCallback(()=>{t({type:He}),e.show(p(kS,{}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:500})},[e,t]);return w("div",{css:At,children:[w(nt,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,children:[p(Se,{popupTitle:"Add Filter",onClick:n,children:p(Mp,{style:{fontSize:"18px"}})}),p(Se,{popupTitle:"Export spectra as a Matrix",onClick:o,children:p(Rp,{})})]}),p("div",{className:"inner-container"})]})}function NS(e){const{onClose:t=()=>null,selectedMolecule:n}=e,[o,s]=c.exports.useState(null),i=Y();c.exports.useEffect(()=>{s(n?n.molfile:null)},[n]);const l=c.exports.useCallback(u=>{var h,m;const d=(m=(h=/(?<s>M {2}V30 BEGIN BOND)(?<mol>.*?)(?<e>M {2}V30 END BOND)/gs.exec(u))==null?void 0:h.groups)==null?void 0:m.mol;s((d==null?void 0:d.trim())?u:null)},[s]),r=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(()=>{n?(i({type:Ei,molfile:o,key:n.key}),t("replace")):(i({type:wi,molfile:o}),t("new"))},[i,n,o,t]);return w("div",{css:Et,children:[p(Np,{initialMolfile:n==null?void 0:n.molfile,svgMenu:!0,fragment:!1,onChange:l}),w("div",{className:"footer-container",children:[p("button",{type:"button",className:"btn",onClick:a,disabled:!o,children:"Save"}),p("button",{type:"button",className:"btn",onClick:r,children:"Close"})]})]})}const PS=P`
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
`;function FS({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,p("span",{children:t})]})}function _S({items:e,boxBounding:t,onClick:n}){return p("div",{className:"menu",style:{transform:`translate(${t.width}px, -${t.height}px) `},children:e==null?void 0:e.map(o=>p(FS,k(b({},o),{onClick:()=>n(o)}),o.id))})}function LS({style:e,component:t,toolTip:n="",className:o,items:s=[],onClick:i=()=>null}){var m;const l=c.exports.useRef(null),[r,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{a(!1)},[]),d=c.exports.useCallback(()=>{a(g=>!g)},[]),h=c.exports.useCallback(g=>{a(!1),i(g)},[i]);return w("div",{style:{height:"auto"},css:PS,children:[p("button",{ref:l,type:"button",css:e,onClick:d,className:o,style:{boxSizing:"border-box"},children:p(we,{title:n,popupPlacement:"right",children:t})}),r&&p(_S,{items:s,boxBounding:(m=l.current)==null?void 0:m.getBoundingClientRect(),onClick:h}),r&&p("div",{className:"menu-cover",onClick:u})]})}function Wi(e,t,n){const{power:o=2,format:s=OS}=n||{};let i=[];for(let l=e;l<=t;l++){const r=o**l;i.push({key:r,label:s(r),value:r})}return i}function OS(e){return e>=1024*1024?`${e/(1024*1024)}M`:e>=1024?`${e/1024}K`:e}function Le(n){var o=n,{value:e=""}=o,t=G(o,["value"]);return f("div",k(b({},t),{dangerouslySetInnerHTML:{__html:e.replace(/(?<isotope>[0-9]+)/g,"<sup>$<isotope></sup>")}}))}const Gl={container:{backgroundColor:"#fd000c",borderRadius:"5px",padding:"0.4rem"},text:{color:"white",margin:"0.5px",fontSize:"0.9em",listStyle:"inside"}},$S=e=>{const t=[];function n(o){Object.keys(o).forEach(s=>{typeof o[s]=="object"?n(o[s]):t.push(o[s])})}return n(e),t};function md({style:e}){const{errors:t,isValid:n}=pe(),o=c.exports.useMemo(()=>$S(t),[t]);return n?f("div",{}):f("ul",{style:b(b({},Gl.container),e==null?void 0:e.container),children:o.map((s,i)=>f("li",{style:b(b({},Gl.text),e==null?void 0:e.text),children:s},i))})}const sn=function(t){const u=t,{name:n="",value:o,onChange:s=()=>null}=u,i=G(u,["name","value","onChange"]),{values:l,setFieldValue:r}=pe(),a=c.exports.useCallback(d=>{s(d),r(n,d)},[n,s,r]);return c.exports.useEffect(()=>{o&&r(n,o)},[n,r,o]),f(Ne,b({name:n,defaultValue:o||B(l,n),onChange:a},i))},HS=P`
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
`,zS=Wi(12,19),Zl=Wi(10,10,{format:e=>e}),VS=ee().shape({frequency:ce().integer().required().label("Frequency"),"1d":ee({"1H":ee({from:ce().integer().required().label("1H ' From ' "),to:ce().integer().required().label("1H ' To ' ")}),"13C":ee().shape({from:ce().integer().required().label("13C ' From ' "),to:ce().integer().required().label("13C ' To ' ")}),lineWidth:ce().integer().min(1).required().label("Line Width"),nbPoints:ce().integer().required().label("1D Number Of Points")}),"2d":ee({nbPoints:ee({x:ce().integer().required().label("2D Number Of Points"),y:ce().integer().required().label("2D Number Of Points")})}),spectra:ee({proton:In(),carbon:In(),cosy:In(),hsqc:In(),hmbc:In()}).test("check-options","You must check one of the options to start prediction",e=>!!Object.values(e).includes(!0))});function BS({onClose:e=()=>null,molfile:t}){const n=c.exports.useRef(),o=Y(),s=re(),[i,l]=c.exports.useState(!1),[r,a]=Ky("nmrium-prediction-preferences"),u=c.exports.useCallback(()=>{n.current.submitForm()},[]),d=c.exports.useMemo(()=>{const y=r,{isApproved:g}=y,x=G(y,["isApproved"]);return l(g),Object.assign(_a,x)},[r]),h=c.exports.useCallback(async g=>{a(k(b({},g),{isApproved:i})),o({type:bt,isLoading:!0});const x=Object.entries(g.spectra).reduce((C,[v,S])=>(S&&C.push(v),C),[]).join(" , "),y=await s.showLoading(`Predict ${x} in progress`);o({type:rs,payload:{mol:t,options:g}}),y(),e()},[s,o,i,t,e,a]),m=c.exports.useCallback(g=>{l(g.target.checked)},[]);return w("div",{css:[Et,HS],children:[w("div",{className:"header handle",children:[p("span",{children:"Prediction of NMR spectrum"}),p(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content",children:[w(ae,{ref:n,initialValues:d,validationSchema:VS,onSubmit:h,children:[p(md,{}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Spectrometer Frequency :"}),p(sn,{data:La,style:{width:290,height:30,margin:0},name:"frequency"})]}),p("span",{className:"group-label",children:"1D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[p(Le,{value:"1H",className:"custom-label"}),p(Q,{title:"From",children:p(U,{name:"1d.1H.from",type:"number"})}),p(Q,{title:"To",style:{label:{padding:"0 10px"}},children:p(U,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[p(Le,{value:"13C",className:"custom-label"}),p(Q,{title:"From",children:p(U,{name:"1d.13C.from",type:"number"})}),p(Q,{title:"To",style:{label:{padding:"0 10px"}},children:p(U,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Line Width : "}),p(U,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),p("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Number of Points : "}),p(sn,{data:zS,name:"1d.nbPoints",style:{width:290,height:30,margin:0}})]}),p("span",{className:"group-label",children:"2D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Number of Points : "}),p(sn,{data:Zl,name:"2d.nbPoints.x",style:{margin:0,height:30}}),p("span",{className:"middle-x",children:" X "}),p(sn,{data:Zl,name:"2d.nbPoints.y",style:{margin:0,height:30}})]}),p("div",{className:"row margin-10",children:p("span",{className:"group-label",children:"Spectra "})}),w("div",{className:"row margin-10 padding-h-10",style:{justifyContent:"space-between"},children:[w("div",{className:"row",children:[p(ht,{name:"spectra.proton"}),p(Le,{value:"1H",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(ht,{name:"spectra.carbon"}),p(Le,{value:"13C",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(ht,{name:"spectra.cosy"}),p(Le,{value:"COSY",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(ht,{name:"spectra.hsqc"}),p(Le,{value:"HSQC",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(ht,{name:"spectra.hmbc"}),p(Le,{value:"HMBC",className:"nucleus-label"})]})]})]}),p("p",{className:"warning",children:"In order to predict spectra we are calling an external service and the chemical structure will leave your browser! You should never predict spectra for confidential molecules."}),w("div",{className:"warning-container",children:[p(ao,{onChange:m,checked:i},String(i)),p("p",{children:"I confirm that the chemical structure is not confidential."})]})]}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:u,className:"btn",disabled:!i,children:"Predict spectrum"})})]})}const jS=P`
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
`,XS=[{id:"molfile",icon:p(Qs,{}),label:"Copy as molfile"},{id:"png",icon:p(Tr,{}),label:"Copy as PNG"},{id:"svg",icon:p(Dr,{}),label:"Export as SVG"}];function YS({currentIndex:e,molecules:t,onMoleculeIndexChange:n=()=>null,onOpenMoleculeEditor:o=()=>null,actionsOptions:s={}}){const i=re(),l=Y(),r=he(),a=Ve(),u=c.exports.useCallback(()=>{sd(`molSVG${e}`,"molFile")},[e]),d=c.exports.useCallback(()=>{id(`molSVG${e}`),i.success("MOL copied as PNG to clipboard")},[i,e]),h=c.exports.useCallback(()=>{t[e]&&ds(t[e].molfile).then(C=>{C?i.success("MOLFile copied to clipboard"):i.error("copied not completed")})},[i,e,t]),m=c.exports.useCallback(({id:C})=>{switch(C){case"molfile":h();break;case"png":d();break;case"svg":u();break}},[h,d,u]),g=c.exports.useCallback(()=>{navigator.clipboard.readText().then(C=>{l({type:wi,molfile:C})})},[l]),x=c.exports.useCallback(()=>{var C;((C=t[e])==null?void 0:C.key)&&(n(0),l({type:nc,payload:{key:t[e].key,assignmentData:a}}))},[t,e,n,l,a]),y=c.exports.useCallback(()=>{r.show(p(BS,{molfile:t[e]}),{position:te.TOP_CENTER,enableResizing:!0,width:600})},[r,t,e]);return w("div",{css:jS,children:[!s.hideExport&&p(LS,{component:p(Go,{}),toolTip:"Export As",items:XS,onClick:m}),!s.hidePast&&p(we,{title:"Paste molfile",popupPlacement:"left",children:p("button",{className:"bar-button",type:"button",onClick:g,children:p(Pp,{})})}),!s.hideAdd&&p(we,{title:"Add Molecule",popupPlacement:"left",children:p("button",{className:"bar-button",type:"button",onClick:o,"data-test-id":"panel-structures-button-add",children:p(bn,{})})}),!s.hideDelete&&p(we,{title:"Delete Molecule",popupPlacement:"left",children:p("button",{className:"bar-button",type:"button",onClick:x,children:p(vt,{})})}),!s.hidePredict&&t&&t.length>0&&p(Se,{popupTitle:"Predict Spectra",popupPlacement:"left",onClick:y,children:p(Ir,{})}),w("p",{children:[t&&t.length>0&&`${+(e+1)} / ${t.length}`," "]})]})}function Ul(e,t,n){if(t.length>0&&Object.keys(e).length>0){const o=n==="x"?0:n==="y"?1:void 0;if(o!==void 0){if(t[o]===e.atomLabel)return{oclIDs:[e.oclID],nbAtoms:e.nbAtoms};if(t[o]==="H")return{oclIDs:e.hydrogenOCLIDs,nbAtoms:e.nbAtoms*e.nbHydrogens}}else return{oclIDs:[e.oclID].concat(e.hydrogenOCLIDs),nbAtoms:e.nbAtoms+e.nbAtoms*e.nbHydrogens}}return{oclIDs:[],nbAtoms:0}}function Ho(e,t){let n=e.find(s=>s.id===t),o;if(!n){for(const s of e)if(o=s.signals.findIndex(i=>i.id===t),o>=0){n=s;break}}return{datum:n,signalIndex:o}}function GS(e,t,n){let o=[];for(let s in e.assignment.assignment){let i,l,r=!1;if((e.assignment.assignment[s].x||[]).some(a=>t.includes(a))){o=o.concat(e.assignment.assignment[s].x);const a=Ho(n,s);i=a.datum,l=a.signalIndex,r=!0}if((e.assignment.assignment[s].y||[]).some(a=>t.includes(a))){o=o.concat(e.assignment.assignment[s].y);const a=Ho(n,s);i=a.datum,l=a.signalIndex,r=!0}if(i&&(o.push(i.id),l!==void 0&&o.push(i.signals[l].id)),r)break}return o}function ZS(e,t){const n=e.assignment.isOnHover?e.assignment.assignment[e.assignment.onHoverID]:null,o=e.assignment.isOnHover?e.assignment.onHoverAxis:null;return n?t===X.DM_1D?n.x||[]:t===X.DM_2D?o?o==="x"?n.x||[]:o==="y"?n.y||[]:(n.x||[]).concat(n.y||[]):(n.x||[]).concat(n.y||[]):[]:[]}function US(e,t){let n=e?e.slice():[];const{nbAtoms:o,oclIDs:s}=t;let i=o;return s.forEach(l=>{n.includes(l)?(i*=-1,n=n.filter(r=>r!==l)):n.push(l)}),[n,i]}function WS({displayerMode:e,activeTab:t,zones:n,ranges:o}){const s=re(),i=Y(),l=En(),r=Ve(),a=rt(r.assignment.activeID!==void 0?r.assignment.activeID:$u),[u,d]=c.exports.useState([]),[h,m]=c.exports.useState(null),[g,x]=c.exports.useState([]);c.exports.useEffect(()=>{if(t){const R=t.split(",");R.length===1?x([t.replace(/[0-9]/g,"")]):R.length===2&&x(R.map(M=>M.replace(/[0-9]/g,"")))}},[t]),c.exports.useEffect(()=>{h&&(h==="show"?l.dispatch({type:"SHOW",payload:{convertedHighlights:u}}):h==="hide"&&(l.dispatch({type:"HIDE",payload:{convertedHighlights:u}}),d([])),m(null))},[h,u,l]);const y=c.exports.useMemo(()=>{if(n||o){if(e===X.DM_1D&&o&&o.values)return o.values;if(e===X.DM_2D&&n&&n.values)return n.values}return[]},[e,o,n]),C=c.exports.useMemo(()=>{const R={x:[],y:[]};for(let M in r.assignment.assignment)r.assignment.assignment[M].x&&R.x.push(...r.assignment.assignment[M].x),r.assignment.assignment[M].y&&R.y.push(...r.assignment.assignment[M].y);return R},[r.assignment]),v=c.exports.useMemo(()=>C.x.concat(C.y),[C.x,C.y]),S=c.exports.useMemo(()=>{let R=[];return l.highlight.highlighted.forEach(M=>{var D;if(r.assignment.assignment[M]){const{datum:I}=Ho(y,M),O=(D=l.highlight.sourceData)==null?void 0:D.type;I&&(O===ue.ZONE||O===ue.RANGE)&&(R=R.concat(I.signals.map(L=>$i(r,[L.id]).length>0?L.diaIDs:[]).flat()))}}),ZS(r,e).concat(R)},[r,y,e,l.highlight]),E=c.exports.useCallback((R,M)=>US(R,M),[]),T=c.exports.useCallback((R,M)=>{var A;if(!Bt(M)&&a.isActive){const D=Ul(R,g,a.activeAxis);if(D.nbAtoms>0){D.oclIDs.forEach(L=>{a.toggle(L)});const{datum:I,signalIndex:O}=Ho(y,a.id);if(I){let L=[],H=0;O===void 0?e===X.DM_1D?[L,H]=E(I.diaIDs||[],D):e===X.DM_2D&&([L,H]=E(I[a.activeAxis].diaIDs||[],D)):((A=I.signals)==null?void 0:A[O])&&(e===X.DM_1D?[L,H]=E(I.signals[O].diaIDs||[],D):e===X.DM_2D&&([L,H]=E(I.signals[O][a.activeAxis].diaIDs||[],D))),e===X.DM_1D?i({type:Vc,payload:{nbAtoms:H,rangeData:I,diaIDs:L,signalIndex:O}}):e===X.DM_2D&&i({type:qc,payload:{nbAtoms:H,zoneData:I,diaIDs:L,axis:a.activeAxis,signalIndex:O}})}a.onClick(a.activeAxis)}else s.info("Not assigned! Different atom type or no attached hydrogens found!")}},[a,s,y,i,e,g,E]);return{handleOnAtomHover:c.exports.useCallback(R=>{const M=Ul(R,g,a.activeAxis).oclIDs;if(M.length>0){const A=GS(r,M,y);d(A),m("show")}else m("hide")},[a.activeAxis,r,y,g]),handleOnClickAtom:T,currentDiaIDsToHighlight:S,assignedDiaIDsMerged:v}}const It={panel:P({display:"flex",overflow:"auto",flexGrow:1,width:"100%",height:"100%",flexDirection:"column"}),innerPanel:P({display:"flex",flex:"1",flexDirection:"column",overflow:"auto"}),molecule:P({display:"flex",flex:"1"}),toolbar:P({display:"flex",borderBottom:"0.55px solid rgb(240, 240, 240)",padding:"0px 10px",justifyContent:"end",height:22}),slider:P({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1,minHeight:0}),items:P({display:"flex",flexDirection:"column",flex:"1 1 0%",height:"100%",minHeight:0})};function KS({zones:e,ranges:t,molecules:n,activeTab:o,displayerMode:s,onMoleculeChange:i,actionsOptions:l,children:r}){const[a,u]=c.exports.useState(0),[d,h]=c.exports.useState([]),m=Y(),g=he(),{currentDiaIDsToHighlight:x,handleOnAtomHover:y,handleOnClickAtom:C,assignedDiaIDsMerged:v}=WS({zones:e,ranges:t,activeTab:o,displayerMode:s});c.exports.useEffect(()=>{n&&h(N=>(n.length>N.length&&u(d.length),n))},[d.length,n]),c.exports.useEffect(()=>{i==null||i(d[a]||null)},[a,d,i]);const S=c.exports.useCallback((N,R)=>{m({type:Ei,molfile:R,key:N})},[m]),E=c.exports.useCallback((N=null)=>{g.show(p(NS,{selectedMolecule:N}),{position:te.TOP_CENTER,width:700,height:500})},[g]),T=c.exports.useCallback(N=>{u(N)},[]);return w("div",{css:It.panel,children:[p(YS,{currentIndex:a,molecules:d,onOpenMoleculeEditor:()=>E(),onMoleculeIndexChange:T,actionsOptions:l}),w("div",{css:It.innerPanel,children:[p("div",{css:It.molecule,children:p(dd,{onChange:N=>u(N),defaultIndex:a,children:d&&d.length>0?d.map((N,R)=>{var M;return w("div",{css:It.items,children:[w("span",{css:It.toolbar,children:[p(Ks,{mf:N.mf})," - ",(M=N.mw)==null?void 0:M.toFixed(2)]}),p("div",{css:It.slider,className:"mol-svg-container",onDoubleClick:()=>E(N),style:{backgroundColor:(R+1)%2!==0?"#fafafa":"white"},children:p(qs,{children:({height:A,width:D})=>p(Fp,{OCL:Vt,id:`molSVG${R}`,width:D,height:A,molfile:N.molfile||"",setMolfile:I=>S(N.key,I),setSelectedAtom:C,atomHighlightColor:x&&x.length>0?"red":"#FFD700",atomHighlightOpacity:.35,highlights:x&&x.length>0?x:v,setHoverAtom:y})})})]},N.key)}):p("div",{css:It.slider,style:{height:"100%"},onClick:()=>E(),children:p("span",{children:"Click to draw molecule"})})})}),r]})]})}const qS=c.exports.memo(KS),JS={ranges:{},zones:{}};function gd({onMoleculeChange:e,children:t,actionsOptions:n}){const{molecules:o,displayerMode:s,activeTab:i}=$(),l=ve(JS),r=(l==null?void 0:l.ranges)||{},a=(l==null?void 0:l.zones)||{};return p(qS,{molecules:o,displayerMode:s,activeTab:i,ranges:r,zones:a,onMoleculeChange:e,actionsOptions:n,children:t})}const QS=[{key:1,value:"manual",label:"Manual"}];function ek({onClose:e=()=>null,nucleus:t}){const n=c.exports.useRef(),o=Y(),s=c.exports.useMemo(()=>{const a=_t[t]?Object.entries(_t[t]).map(u=>({key:u[0],value:u[0],label:u[0]}),[]):[];return QS.concat(a)},[t]),i=c.exports.useCallback(()=>{n.current.submitForm()},[]),l=c.exports.useCallback(a=>{o({type:Zc,payload:a}),e()},[o,e]);c.exports.useEffect(()=>{function a(u){const[d,h]=u.range;n.current.setValues(k(b({},n.current.values),{from:d,to:h}))}return de.on("brushEnd",a),()=>{de.off("brushEnd",a)}},[]);const r=c.exports.useCallback(a=>{const m=_t[t][a]||{delta:0},{delta:d=0}=m,h=G(m,["delta"]);n.current.setValues(b(k(b({},n.current.values),{targetX:d}),h))},[t]);return w("div",{css:Et,children:[w("div",{className:"header handle",children:[p("span",{children:"Spectra calibration"}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",style:{flex:1},children:w(ae,{ref:n,initialValues:{from:-1,to:1,nbPeaks:1,targetX:0},onSubmit:l,children:[w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Options :"}),p(Ne,{data:s,style:{width:270,height:30,marginBottom:"20px"},onChange:r})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Range :"}),p(Q,{title:"From : ",children:p(U,{name:"from",type:"number"})}),p(Q,{title:"To : ",children:p(U,{name:"to",type:"number"})})]}),p("div",{className:" margin-10",children:p(Q,{className:"custom-label",title:"Number of Peaks : ",children:p(U,{name:"nbPeaks",type:"number"})})}),p("div",{className:" margin-10",children:p(Q,{className:"custom-label",title:"Target PPM :",children:p(U,{name:"targetX",type:"number"})})})]})}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:i,className:"btn",children:"Done"})})]})}function xd(e,t=null){try{return new Function("args",`return ${e}`)(t)}catch(n){return n}}const tk=`function run(data) {

  return JSON.stringify(data,undefined, 2);
  
}(args);
`;function nk({data:e}){const{values:t,setFieldValue:n}=pe(),[o,s]=c.exports.useState(t.code?t.code:tk),[i,l]=c.exports.useState("");return c.exports.useEffect(()=>{const r=xd(o,e);r instanceof Error?l(r.message):(n("code",o),l(r))},[o,e,n]),w("div",{style:{marginTop:"20px"},children:[p("textarea",{value:o,onChange:r=>s(r.target.value),style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",backgroundColor:"#fcfcfc",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}}),p("p",{style:{marginBottom:"5px"},children:"Result:"}),p("textarea",{value:i,readOnly:!0,style:{border:"0.55px solid #f3f3f3",fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}})]})}var ok=c.exports.memo(nk);const sk=P`
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
`;function ik({data:e,onAfterSave:t},n){const o=Y(),s=c.exports.useRef(),[i,l]=c.exports.useState({});c.exports.useImperativeHandle(n,()=>({saveSetting(){s.current.submitForm()}})),c.exports.useEffect(()=>{const h=Object.keys(e.columns).reduce((m,g)=>(m[g]=k(b({},e.columns[g]),{tempKey:g}),m),{});l(h),s.current.setValues({columns:h,code:e.code})},[e]);const r=c.exports.useMemo(()=>Object.keys(i),[i]),a=c.exports.useMemo(()=>{function h(){return r.reduce((m,g)=>(m[g]=ee().shape(k(b({tempKey:On().required().test("unique","must be unique column name",x=>{const y=s.current.values.columns;return Object.keys(y).reduce((C,v)=>(y[v].tempKey===x&&C.push(x),C),[]).length===1})},i[g].type===$o.FORMULA?{formula:On().required()}:{}),{index:On().required()})),m),{})}return ee().shape({columns:ee().shape(h())})},[i,r,s]),u=c.exports.useCallback(h=>{t==null||t(!0);const m=Object.entries(h.columns).reduce((g,[x,y])=>(g[x]=b(b({},i[x]),y),g),{});o({type:Yc,payload:{code:h.code,columns:m}})},[i,o,t]),d=c.exports.useCallback(h=>{l(m=>k(b({},m),{[`temp${h}`]:{tempKey:"",type:"FORMULA",valueKey:"value",formula:"",index:h}}))},[]);return w(ae,{ref:s,initialValues:{columns:i,code:null},validationSchema:a,onSubmit:u,children:[r&&w("table",{css:sk,children:[p("thead",{children:w("tr",{children:[p("th",{className:"counter",children:"#"}),p("th",{className:"label",children:"Label"}),p("th",{children:"value"}),p("th",{className:"index",children:"index"})]})}),p("tbody",{children:r.map((h,m)=>w("tr",{children:[p("td",{className:"counter",children:m+1}),p("td",{className:"label",children:p(U,{name:`columns.${h}.tempKey`,value:i[h].tempKey},h)}),p("td",{children:i[h].type===$o.FORMULA?p(U,{name:`columns.${h}.formula`,value:i[h].formula}):p("div",{className:"input disbale"})}),p("td",{className:"index",children:p(U,{name:`columns.${h}.index`,value:i[h].index})}),p("td",{className:"operation-col",children:r.length===m+1&&p("button",{className:"add",type:"button",onClick:()=>d(m+1),children:p(bn,{})})})]},h))})]}),p(ok,{data:e})]})}var lk=c.exports.forwardRef(ik);const rk=P`
  background-color: white;
  position: absolute;
  height: auto;
  z-index: 99999999999999;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  margin-bottom: 20px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      padding: 10px 30px;
      text-align: center;
      color: black;
      border-bottom: 0.55px solid lightgoldenrodyellow;
      min-width: 150px;
    }

    li:last-of-type {
      border-bottom: none;
    }

    li:hover {
      background-color: gray;
      color: white;
    }
  }
`;function ak({data:e=[],onSelect:t}){return p("div",{css:rk,children:p("ul",{children:e.map((n,o)=>p("li",{onClick:()=>t(o),children:n.label},n.key))})})}const ck=P`
  padding: 2px;
  border-radius: 10px;
  width: auto;
  display: inline-block;
  border: 0.55px solid lightgray;
  font-size: 10px;

  button {
    text-transform: Capitalize;
  }
`;function uk(e){return e}function dk(e){const{data:t=null,selectedKey:n,onSelect:o,formatSelectedValue:s=uk}=e,[i,l]=c.exports.useState(!1),[r,a]=c.exports.useState(n),{rootRef:u}=zi(),d=c.exports.useRef(null),h=c.exports.useCallback(g=>{d.current&&!g.target.closest(`.${d.current.className}`)&&i&&setTimeout(()=>{l(!1)},0)},[i]);c.exports.useEffect(()=>(u&&u.addEventListener("click",h),()=>u.removeEventListener("click",h)),[h,i,u]);const m=c.exports.useCallback(g=>{a(t[g].label),o(t[g].key)},[t,o]);return w("div",{className:"dropdown",ref:d,css:ck,children:[p("button",{type:"button",onClick:()=>l(g=>!g),children:r?s(r):p(_p,{})}),i&&p(ak,{data:t,onSelect:m})]})}const pk=e=>P`
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
`,hk=[{key:Fn.RELATIVE,label:"Relative"},{key:Fn.ABSOLUTE,label:"Absolute"},{key:Fn.MIN,label:"Min Intensity"},{key:Fn.MAX,label:"Max Intensity"}];function fk({charLabel:e,rangeLabel:t,data:n,onColumnFilter:o}){const s=Y(),i=c.exports.useCallback(()=>{s({type:Pi,colKey:e})},[e,s]);return w("div",{css:pk,children:[w("div",{className:"container",children:[n.type===$o.NORMAL&&p("div",{className:"dropDown-container",children:p(dk,{data:hk,formatSelectedValue:l=>l&&l.substr(0,3),selectedKey:n.valueKey,onSelect:o})}),w("div",{className:"label-container",children:[w("span",{className:"label",children:[" ",e]}),p("span",{className:"label",children:t})]})]}),p(ud,{onDelete:i})]})}function mk({data:e,activeTab:t}){const n=Be(t),o=c.exports.useMemo(()=>{const r=B(e,"code","");return xd(r,e)},[e]),s=Y(),i=c.exports.useCallback((r,a)=>{s({type:Gc,payload:{columnKey:r,valueKey:a}})},[s]),l=c.exports.useMemo(()=>{const r=[{Header:"#",index:0,Cell:({row:d})=>d.index+1}];function a(d,h,m){const g=d.original[h][m];return g instanceof Error?f("span",{style:{color:"red"},children:g.message}):n(g)}function u(d,h){return f(fk,{charLabel:h,data:d,onColumnFilter:m=>i(h,m),rangeLabel:d.from&&d.to?`${n(d.from)} - ${n(d.to)}`:""})}return e.columns&&Object.keys(e.columns).forEach(d=>{const{valueKey:h,index:m}=e.columns[d];hs(r,{index:m+1,Cell:({row:g})=>a(g,d,h),Header:()=>u(e.columns[d],d),id:d})}),r.sort((d,h)=>d.index-h.index)},[i,e.columns,n]);return e.values&&e.values.length>0?_(c.exports.Fragment,{children:[f(ps,{data:e.values,columns:l}),f("div",{style:{width:"100%",padding:"10px"},dangerouslySetInnerHTML:{__html:o}})]}):f(Zt,{})}var gk=c.exports.memo(mk);function xk({activeTab:e,spectraAnalysis:t}){const[n,o]=c.exports.useState(!1),s=c.exports.useRef(),i=re(),l=he(),r=Y(),a=c.exports.useMemo(()=>{const{values:y,options:{columns:C,code:v}}=t[e]||{values:{},options:{columns:{},code:null}};return{values:Object.values(y),columns:C,code:v}},[e,t]),u=c.exports.useCallback(()=>{o(!n)},[n]),d=c.exports.useCallback(()=>{s.current.saveSetting()},[]),h=c.exports.useCallback(()=>{o(!1)},[]),m=c.exports.useCallback(y=>{de.emit("showYSpectraTrackers",y)},[]),g=c.exports.useCallback(()=>{r({type:He}),l.show(p(ek,{nucleus:e}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:500})},[e,l,r]),x=c.exports.useCallback(async()=>{const y=gy(t,e);await ds(y)?i.success("Data copied to clipboard"):i.error("copy to clipboard failed")},[e,i,t]);return w("div",{css:[At,n&&P`
            .table-container th {
              position: relative;
            }
          `],children:[!n&&w(nt,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,onSettingClick:u,children:[p(Se,{popupTitle:"Copy To Clipboard",onClick:x,children:p(Go,{})}),p(Se,{popupTitle:"Spectra calibration",onClick:g,children:p(Lp,{style:{fontSize:"18px"}})}),p(Ye,{popupTitle:"Y Spectra Tracker",popupPlacement:"right",onClick:m,children:p(Op,{})})]}),n&&p(Tn,{onSave:d,onClose:u}),p("div",{className:"inner-container",children:n?p(lk,{data:a,onAfterSave:h,ref:s}):p(gk,{data:a,activeTab:e})})]})}const bk=c.exports.memo(xk);function yk(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=$();return e?p(bk,{activeTab:e,spectraAnalysis:t,displayerKey:n}):p("div",{})}const ws={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},vk=[{id:1,label:"Peak Number :",checkController:"showPeakNumber",formatController:"peakNumberFormat"},{id:2,label:"Peak Index : ",checkController:"showPeakIndex",formatController:"peakIndexFormat"},{id:3,label:"\u03B4 (ppm) :",checkController:"showDeltaPPM",formatController:"deltaPPMFormat"},{id:4,label:"\u03B4 (Hz) :",checkController:"showDeltaHz",formatController:"deltaHzFormat"},{id:5,label:"Peak Width",checkController:"showPeakWidth",formatController:"peakWidthFormat"},{id:6,label:"Intensity :",checkController:"showIntensity",formatController:"intensityFormat"}];function Ck({nucleus:e,preferences:t,innerRef:n}){const o=re(),s=c.exports.useRef(null),i=c.exports.useCallback(()=>{if(e){const r=e.reduce((u,d)=>(u[d]=Ju,u),{}),a=ut(t,"formatting.panels.peaks");s.current.setValues(a||r)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const l=c.exports.useCallback(r=>{t.dispatch({type:kn,payload:{key:"peaks",value:r}}),o.success("Peaks preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:ws.container,children:f(ae,{onSubmit:l,ref:s,children:e==null?void 0:e.map(r=>_("div",{style:ws.groupContainer,children:[f(Le,{style:ws.header,value:r}),vk.map(a=>f(_e,{label:a.label,checkControllerName:`${r}.${a.checkController}`,formatControllerName:`${r}.${a.formatController}`,hideFormat:a.formatController==="deltaPPMFormat"},a.id))]},r))})})}const Sk=c.exports.memo(Ck);function kk(e,t){const n=fs(),o=ie();return f(Sk,{innerRef:t,nucleus:n,preferences:o})}var wk=c.exports.forwardRef(kk);function Ek({activeTab:e,preferences:t,data:n,info:o}){const s=Y(),i=Be(o.nucleus),l=c.exports.useCallback((m,g)=>{m.preventDefault(),m.stopPropagation();const x=g.original;s({type:es,data:{id:x.id,xIndex:x.xIndex}})},[s]),r=c.exports.useMemo(()=>ut(t,`formatting.panels.peaks.[${e}]`,Ju),[e,t]),a=c.exports.useCallback((m,g)=>{const x=parseFloat(m.target.value)-parseFloat(g.value);s({type:yi,shiftValue:x})},[s]),u=c.exports.useMemo(()=>[{showWhen:"showPeakNumber",index:1,Header:"#",Cell:({row:m})=>m.index+1,style:{width:"1%",maxWidth:"40px",minWidth:"40px"}},{showWhen:"showPeakIndex",index:2,Header:"index",accessor:m=>Xe(m.xIndex,r.peakIndexFormat)},{showWhen:"showDeltaPPM",index:3,Header:"\u03B4 (ppm)",accessor:m=>i(m.value),Cell:({row:m})=>f(it,{value:i(m.original.value),onSave:g=>a(g,m.original),type:"number"})},{showWhen:"showDeltaHz",index:4,Header:"\u03B4 (Hz)",accessor:m=>Xe(m.valueHz,r.deltaHzFormat)},{showWhen:"showIntensity",index:5,Header:"Intensity",style:{maxWidth:"80px"},accessor:m=>Xe(m.intensity,r.intensityFormat)},{showWhen:"showPeakWidth",index:6,Header:"Peak Width",accessor:m=>Xe(m.peakWidth,r.peakWidthFormat)}],[i,r,a]),d=c.exports.useMemo(()=>[{index:20,Header:"",style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:m})=>f("button",{type:"button",className:"delete-button",onClick:g=>l(g,m),children:f(vt,{})})}],[l]),h=c.exports.useMemo(()=>{let m=[...d];for(const x of u){const g=x,{showWhen:y}=g,C=G(g,["showWhen"]);r[y]&&hs(m,C)}return m.sort((x,y)=>x.index-y.index)},[u,d,r]);return n&&n.length>0?f(ps,{data:n,columns:h,approxItemHeight:20,enableVirtualScroll:!0}):f(Zt,{})}var Ak=c.exports.memo(Ek);function Tk({peaks:e,info:t,xDomain:n,activeTab:o,preferences:s}){var E;const[i,l]=c.exports.useState(!1),[r,a]=c.exports.useState(!1),u=Be(t.nucleus),d=Y(),h=he(),m=c.exports.useRef(),g=c.exports.useCallback(()=>{d({type:es,data:null})},[d]),x=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:g},{text:"No"}]})},[h,g]),y=c.exports.useCallback(()=>{a(!r)},[r]),C=c.exports.useCallback(()=>{m.current.saveSetting(),a(!1)},[]),v=c.exports.useCallback(()=>{l(!i)},[i]),S=c.exports.useMemo(()=>{function T(N){return N*1e5>=n[0]*1e5&&N*1e5<=n[1]*1e5}return(e==null?void 0:e.values)?(i?e.values.filter(R=>T(R.x)):e.values).map(R=>{const M=Number(u(R.x));return{value:M,valueHz:(t==null?void 0:t.originFrequency)?Number(M)*t.originFrequency:"",id:R.id,intensity:R.y,peakWidth:R.width?R.width:"",isConstantlyHighlighted:T(M)}}).sort((R,M)=>R.value-M.value):[]},[i,u,t,e,n]);return w("div",{css:[At,r&&P`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!r&&p(nt,{counter:(E=e==null?void 0:e.values)==null?void 0:E.length,onDelete:x,deleteToolTip:"Delete All Peaks",onFilter:v,filterToolTip:i?"Show all peaks":"Hide peaks out of view",filterIsActive:i,counterFiltered:S.length,showSettingButton:!0,onSettingClick:y}),r&&p(Tn,{onSave:C,onClose:y}),p("div",{className:"inner-container",children:r?p(wk,{ref:m}):p(Ak,{data:S,activeTab:o,preferences:s,info:t})})]})}const Dk=c.exports.memo(Tk),Ik={peaks:null,info:{}};function Mk(){const{xDomain:e,activeTab:t}=$(),{peaks:n,info:o}=ve(Ik),s=ie();return p(Dk,{peaks:n,info:o,xDomain:e,activeTab:t,preferences:s})}const Rk=P`
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
`;function Nk({text:e,onClose:t,onCopyClick:n}){return w("div",{css:Rk,children:[w("div",{className:"mainButtonsContainer handle",children:[p("button",{type:"button",onClick:()=>n(e),children:p(Qs,{})}),p(me,{onClick:t})]}),p("div",{className:"innerContainer",dangerouslySetInnerHTML:{__html:e}})]})}const Pk=P`
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
`;function Fk({ranges:e,info:t,onUnlink:n,onFilterActivated:o,onSettingClick:s,isFilterActive:i,filterCounter:l,showMultiplicityTrees:r,showJGraph:a,showRangesIntegrals:u}){var O;const d=Y(),h=he(),m=re(),g=ie(),x=Ve(),y=B(e,"options.sum",null),C=c.exports.useCallback(L=>{d({type:Dc,value:L}),h.close()},[d,h]),v=c.exports.useCallback(()=>{h.show(p(hd,{onClose:()=>h.close(),onSave:C,header:y?`Set new Ranges Sum (Current: ${Number(y).toFixed(2)})`:"Set new Ranges Sum",sumOptions:e==null?void 0:e.options}))},[C,y,h,e==null?void 0:e.options]),S=c.exports.useCallback(()=>{n()},[n]),E=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:S},{text:"No"}]})},[S,h]),T=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All ranges will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{d({type:is,payload:{data:{assignmentData:x}}})}},{text:"No"}]})},[x,d,h]),N=c.exports.useCallback(()=>{d({type:ru})},[d]),R=c.exports.useCallback(()=>{d({type:au})},[d]),M=c.exports.useCallback(()=>{d({type:hu})},[d]),A=c.exports.useCallback(async L=>{await U1(L)?m.success("Data copied to clipboard"):m.error("copy to clipboard failed")},[m]),D=c.exports.useCallback(()=>{const{originFrequency:L,nucleus:H}=t,z=B(g,`formatting.nucleusByKey[${H.toLowerCase()}]`),J=Il(z.ppm),V=Il(z.hz),j=$p(e.values,{nucleus:H,nbDecimalDelta:J,nbDecimalJ:V,observedFrequency:L});h.show(p(Nk,{text:j,onCopyClick:A,onClose:()=>h.close()}),{})},[t,h,g,e.values,A]),I=c.exports.useCallback(L=>{d({type:ou,payload:L})},[d]);return p("div",{css:Pk,children:w(nt,{counter:(O=e==null?void 0:e.values)==null?void 0:O.length,onDelete:T,deleteToolTip:"Delete All Ranges",onFilter:o,filterToolTip:i?"Show all ranges":"Hide ranges out of view",filterIsActive:i,counterFiltered:l,showSettingButton:!0,onSettingClick:s,children:[p(Se,{popupTitle:"Preview publication string",popupPlacement:"right",onClick:D,className:"btn preview-publication-icon",children:p(Go,{})}),p(Se,{popupTitle:y?`Change Ranges Sum (${Number(y).toFixed(2)})`:"Change Ranges Sum",popupPlacement:"right",onClick:v,className:"btn icon",children:p(Er,{})}),p(Se,{popupTitle:"Remove all Assignments",popupPlacement:"right",onClick:E,disabled:!e||!e.values||e.values.length===0,className:"btn icon",children:p(Mr,{})}),p(Ye,{popupTitle:r?"Hide Multiplicity Trees in Spectrum":"Show Multiplicity Trees in Spectrum",popupPlacement:"right",onClick:N,disabled:!e||!e.values||e.values.length===0,children:p(Hp,{style:{pointerEvents:"none",fontSize:"12px"}})}),p(Ye,{popupTitle:a?"Hide J Graph":"Show J Graph",popupPlacement:"right",onClick:M,disabled:!e||!e.values||e.values.length===0,children:p(zp,{style:{pointerEvents:"none",fontSize:"12px"}})}),p(Ye,{popupTitle:u?"Hide integrals":"Show integrals",popupPlacement:"right",onClick:R,defaultValue:u,disabled:!e||!e.values||e.values.length===0,children:p(Rr,{style:{pointerEvents:"none",fontSize:"12px"}})}),p(Ye,{className:"icon",popupTitle:"fix integral values",popupPlacement:"right",onClick:I,children:p(Ar,{})})]})})}const Pn={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2},inputWrapper:{width:"100px",flex:"4",borderRadius:"5px"}},_k=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function Lk({nucleus:e,preferences:t,innerRef:n}){const o=re(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const r=e.reduce((u,d)=>(u[d]=Vi(d),u),{}),a=ut(t,"formatting.panels.ranges");s.current.setValues(a||r)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const l=c.exports.useCallback(r=>{t.dispatch({type:kn,payload:{key:"ranges",value:r}}),o.success("ranges preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Pn.container,children:f(ae,{onSubmit:l,ref:s,children:e==null?void 0:e.map(r=>_("div",{style:Pn.groupContainer,children:[f(Le,{style:Pn.header,value:r}),_k.map(a=>f(_e,{label:a.label,checkControllerName:`${r}.${a.checkController}`,formatControllerName:`${r}.${a.formatController}`},a.id)),f(Q,{title:"J Graph tolerance (Hz) :",style:{label:Pn.inputLabel,wrapper:Pn.inputWrapper},children:f(U,{name:`${r}.jGraphTolerance`,type:"number"})})]},r))})})}const Ok=c.exports.memo(Lk);function $k(e,t){const n=fs(),o=ie();return f(Ok,{innerRef:t,preferences:o,nucleus:n})}var Hk=c.exports.forwardRef($k);function bd(e,t=null){const[n,o]=c.exports.useState(t),s=c.exports.useMemo(()=>{const r=e.slice();return n!==null&&r.sort((a,u)=>n.direction==="asc"?B(a,n.key,0)-B(u,n.key,0):n.direction==="desc"?B(u,n.key,0)-B(a,n.key,0):0),r},[e,n]),i=c.exports.useCallback(r=>{var d;const a=(d=r.currentTarget)==null?void 0:d.id;let u="asc";if(a&&n&&n.key===a)switch(n.direction){case"asc":u="desc";break;case"desc":u="original";break;default:u="asc";break}o({key:a,direction:u})},[n]),l=c.exports.useCallback(r=>{const a={flag:null,content:" "};if(!n||n.key!==r)return a;switch(n.direction){case"desc":return{flag:!0,content:" \u25BC"};case"asc":return{flag:!1,content:" \u25B2"};default:return a}},[n]);return{items:s,isSortedDesc:l,onSort:{onClick:i}}}function mo(e,t){return B(e,t,!1)}function zk({rowSpanTags:e,value:t,onHoverRange:n,format:o}){return f("td",k(b(b({},e),n),{children:Xe(t,o)}))}function gn(n){var o=n,{onClick:e}=o,t=G(o,["onClick"]);return f(c.exports.Fragment,{children:f("button",b({type:"button",onClick:e},t))})}const Vk=e=>{const{onChange:t=()=>null,enableValidation:n=!0}=e,{values:o,errors:s}=pe();return c.exports.useEffect(()=>{n?Object.keys(s).length===0&&t(o):t(o)},[o,n,s,t]),null},Bk=P`
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 0.4rem;

  .info-text {
    padding: 10px;
    font-size: 13px;
  }
  .input-notes {
    font-size: 10px;
    color: black;
    font-weight: bold;
  }

  input {
    background-color: transparent;
    border: 0.55px solid #dedede;
    width: 50%;
    text-align: center;
    outline: none;
  }

  .add-signal-container {
    border: 0.55px solid #dedede;
  }

  .addSignalButton {
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
  }
  .addSignalButton:disabled {
    opacity: 0.6;
  }
`;function jk({onFocus:e,onBlur:t,range:n},o){const{values:s,setFieldValue:i}=pe(),{activeTab:l}=$(),r=Be(l),a=c.exports.useCallback(h=>{const m={multiplicity:"m",kind:"signal",delta:Number(h.newSignalDelta),js:[{multiplicity:Ot("m"),coupling:""}]},g=s.signals.slice().concat(m);i("signals",g),i("activeTab",String(g.length-1))},[i,s.signals]),u=c.exports.useMemo(()=>ee().shape({newSignalDelta:ce().test("test-range","",function(m){const{path:g,createError:x}=this;if(m&&m>n.from&&m<n.to)return!0;const y=` ${m?m.toFixed(5):0} ppm out of the range`;return x({path:g,message:y})}).required()}),[n]),d=c.exports.useCallback(()=>{o.current.submitForm()},[o]);return p("div",{css:Bk,children:w("div",{className:"add-signal-container",children:[p("p",{className:"info-text",children:"Edit or select a delta value of new signal (ppm):"}),w(ae,{ref:o,validationSchema:u,initialValues:{newSignalDelta:(n.from+n.to)/2},onSubmit:a,children:[p(U,{name:"newSignalDelta",type:"number",placeholder:"\u{1D6C5} (ppm)",onFocus:e,onBlur:t,style:{inputWrapper:{width:"250px",height:"30px"}},checkErrorAfterInputTouched:!1}),w("p",{className:"input-notes",children:["[ ",`${r(n.from)} ppm - ${r(n.to)} ppm`," ]"]}),p(gn,{className:"addSignalButton",onClick:d,children:p(bn,{title:"Add new signal"})})]})]})})}var Xk=c.exports.forwardRef(jk);const Yk={inputWrapper:{width:"50px",height:"26px",borderWidth:0,margin:"0 5px"}};function Gk({signal:e,index:t,onFocus:n}){return _("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{children:"\u{1D6C5}:"}),f(U,{name:`signals.${t}.delta`,type:"number",placeholder:"J (Hz)",onFocus:n,style:Yk,checkErrorAfterInputTouched:!1}),f("span",{children:e.js.map(o=>Ot(o.multiplicity)).join("")})]})}const Zk=P`
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
`;function Uk({push:e,remove:t,onFocus:n,onBlur:o}){const{values:s,setFieldValue:i}=pe(),l=c.exports.useCallback((a,u)=>{Zn(a)||i(u,"")},[i]),r=c.exports.useMemo(()=>Gn.map(a=>k(b({key:a.value},a),{value:a.label})),[]);return p("table",{css:Zk,children:w("tbody",{children:[w("tr",{children:[p("th",{children:"#"}),p("th",{children:"Multiplicity"}),p("th",{children:"J (Hz)"}),p("th",{children:""})]}),B(s,`signals[${s.activeTab}].js`,[]).map((a,u)=>w("tr",{children:[p("td",{children:u+1}),p("td",{children:p(sn,{className:"selectBox",name:`signals.${s.activeTab}.js.${u}.multiplicity`,data:r,onChange:d=>l(d,`signals.${s.activeTab}.js.${u}.coupling`)})}),p("td",{children:p(U,{name:`signals.${s.activeTab}.js.${u}.coupling`,type:"number",placeholder:"J (Hz)",disabled:!Zn(a.multiplicity),onFocus:n,onBlur:o,style:{inputWrapper:{width:"100%",height:"26px"}},checkErrorAfterInputTouched:!1})}),p("td",{children:p(gn,{className:"delete-button",onClick:()=>{t(u)},children:p(vt,{className:"icon",title:"Delete coupling"})})})]},`editCouplings${s.activeTab}${u}`)),p("tr",{}),p("tr",{children:p("td",{colSpan:4,children:p(gn,{className:"add-button",onClick:()=>e({multiplicity:Ot("m"),coupling:""}),children:p(bn,{title:"Add new coupling"})})})})]})})}var Wk=c.exports.memo(Uk);const Kk=P`
  border-spacing: 0;
  width: 100%;
  font-size: 12px;
  height: 100%;

  margin: 0;
  padding: 0.4rem;
  text-align: center;
`;function qk({onFocus:e,onBlur:t}){const{values:n}=pe();return p("div",{css:Kk,children:p(Vp,{name:`signals.${n.activeTab}.js`,render:({push:o,remove:s})=>p("div",{children:p(Wk,{push:o,remove:s,onFocus:e,onBlur:t})})})})}var Jk=c.exports.memo(qk);const Qk=P`
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
`,ew=P`
  color: red;
`,tw=P`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function nw({range:e}){const t=c.exports.useRef(),[n,o]=c.exports.useState(null),{values:s,setFieldValue:i,errors:l}=pe(),{activeTab:r}=$(),{info:a}=ve({info:{}}),u=Be(r);c.exports.useEffect(()=>{function v(S){if((a==null?void 0:a.originFrequency)&&n)if(s.activeTab==="addSignalTab")t.current.setValues({[n]:(S.range[1]-S.range[0])/2+S.range[0]});else if(n.includes("delta"))i(n,(S.range[1]-S.range[0])/2+S.range[0]);else{const E=Number(u(Math.abs(S.range[0]-S.range[1])*a.originFrequency));i(n,E)}o(null)}return de.on("brushEnd",v),()=>{de.off("brushEnd",v)}},[n,i,s.activeTab,u,a]),c.exports.useEffect(()=>{function v(S){n&&(s.activeTab==="addSignalTab"?t.current.setValues({[n]:S.xPPM}):n.includes("delta")&&i(n,S.xPPM)),o(null)}return de.on("mouseClick",v),()=>{de.off("mouseClick",v)}},[s.activeTab,n,i]);const d=c.exports.useCallback(v=>{o(v.target.name)},[o]),h=c.exports.useCallback(({tabid:v})=>{i("activeTab",v)},[i]),m=c.exports.useCallback(({tabid:v})=>{const S=s.signals.filter((E,T)=>T!==Number(v));i("signals",S)},[i,s.signals]);c.exports.useEffect(()=>{i("activeTab",s.signals.length>0?(s.signals.length-1).toString():"addSignalTab")},[i,s.signals.length]);const g=c.exports.useCallback(v=>!!((l==null?void 0:l.signals)&&(l==null?void 0:l.signals[v])),[l]),x=c.exports.useMemo(()=>{const v=s.signals.length>0?s.signals.map((E,T)=>p(Re,{tabid:`${T}`,tabstyles:g(T)?ew:tw,canDelete:!0,render:()=>p(Gk,{signal:E,index:T,onFocus:d}),children:p(Jk,{onFocus:d})},`signalForm${T}`)):[],S=p(Re,{tablabel:"+",tabid:"addSignalTab",canDelete:!1,className:"add-signal-tab",children:p(Xk,{onFocus:d,range:e,ref:t})},"addSignalTab");return v.concat(S)},[d,e,g,s.signals]),y=p("p",{className:"infoText",children:"Focus on an input field and press Shift + Drag & Drop to draw a coupling constant in spectrum view."}),C=p("p",{className:"infoText",children:"Focus on the input field and press Shift + Left mouse click to select new signal delta value in spectrum view."});return w("div",{children:[p("div",{css:Qk,children:l.signals&&(l.signals.noSignals||l.signals.noCouplings)?w("div",{children:[p("p",{className:"errorText",children:l.signals.noSignals||l.signals.noCouplings[0].message}),l.signals.noSignals?C:null]}):s.activeTab==="addSignalTab"?C:y}),p(An,{activeTab:s.activeTab,onClick:h,onDelete:m,children:x})]})}var ow=c.exports.memo(nw);const sw=()=>c.exports.useMemo(()=>ee().shape({signals:Ms().of(ee().shape({j:Ms().of(ee().shape({multiplicity:On().required(),coupling:Bp().test("checkValue","",function(t){const{path:n,createError:o}=this,s=Zn(this.parent.multiplicity);return!s&&isNaN(t)||s&&!isNaN(t)?!0:o({path:n,message:`${n} is required`})})})).min(1,"There must be at least one coupling in a signal")})).min(1,"There must be at least one signal in a range!")}),[]),iw=P`
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
`;function lw({onSaveEditRangeModal:e=()=>null,onCloseEditRangeModal:t=()=>null,onZoomEditRangeModal:n=()=>null,range:o}){const s=c.exports.useRef(null),{activeTab:i}=$(),l=Y(),r=Be(i),a=sw(),u=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{u()},[u]);const d=c.exports.useCallback(()=>{t()},[t]),h=c.exports.useCallback(C=>C.filter(v=>v.coupling!=="").map(v=>k(b({},v),{multiplicity:Ot(v.multiplicity)})),[]),m=c.exports.useCallback(C=>C.map(v=>k(b({id:K()},v),{multiplicity:v.js.map(S=>Ot(S.multiplicity)).join(""),js:h(v.js)})),[h]),g=c.exports.useCallback(async C=>{const v=b({},o);v.signals=m(C.signals),await e(v),d()},[m,d,e,o]),x=c.exports.useMemo(()=>{const C=o.signals.map(v=>{let S=0;const E=[];return v.multiplicity.split("").forEach(T=>{let N={multiplicity:T,coupling:""};Zn(T)&&(N=b({},v.js[S]),N.coupling=Number(r(N.coupling)),S++),N.multiplicity=Ot(N.multiplicity),E.push(N)}),k(b({},v),{js:E})});return{activeTab:"0",signals:C}},[r,o]),y=c.exports.useCallback(C=>{const v=m(C.signals);l({type:lu,payload:{tempRange:Object.assign({},o,{signals:v})}})},[l,m,o]);return p("div",{css:iw,children:w(ae,{ref:s,initialValues:x,validationSchema:a,onSubmit:g,children:[w("div",{className:"header handle",children:[p(gn,{onClick:u,className:"zoom-button",children:p(Kn,{title:"Set to default view on range in spectrum"})}),p("span",{children:` Range and Signal edition: ${r(o.from)} ppm to ${r(o.to)} ppm`}),p(Ui,{onClick:()=>s.current.submitForm(),popupTitle:"Save and exit"}),p(me,{onClick:d})]}),p(ow,{range:o}),p(Vk,{onChange:y})]})})}const rw=P`
  width: 66px;
  padding: 0 !important;
  button {
    background-color: transparent;
    border: none;
    padding: 5px;
  }

  button:disabled {
    opacity: 0.6;
  }
`,aw={marginLeft:2,marginRight:2,border:"none",height:"20px"};function cw({rowData:e,onHoverSignal:t,rowSpanTags:n}){const o=Y(),s=he(),i=Ve(),l=c.exports.useCallback(()=>{const m=Math.abs(e.from-e.to);o({type:ts,xDomain:[e.from-m,e.to+m]})},[o,e.from,e.to]),r=c.exports.useCallback(()=>{o({type:is,payload:{data:{id:e.id,assignmentData:i}}})},[i,o,e.id]),a=c.exports.useCallback(m=>{o({type:$c,payload:{data:{rowData:e,value:m}}})},[o,e]),u=c.exports.useCallback(m=>{o({type:Hc,payload:{editedRowData:m,assignmentData:i}})},[i,o]),d=c.exports.useCallback(()=>{o({type:He}),s.close()},[o,s]),h=c.exports.useCallback(()=>{o({type:lo,payload:{selectedTool:F.editRange.id,tempRange:e}}),s.show(p(lw,{onCloseEditRangeModal:d,onSaveEditRangeModal:u,onZoomEditRangeModal:l,range:e}),{position:te.MIDDLE_RIGHT,transition:Je.SCALE,isBackgroundBlur:!1})},[d,o,s,e,u,l]);return w(c.exports.Fragment,{children:[p("td",k(b({},t),{children:p(Ne,{onChange:a,data:ti,defaultValue:e.tableMetaInfo.signal.kind,style:aw})})),w("td",k(b({},n),{css:rw,children:[p("button",{type:"button",className:"delete-button",onClick:r,children:p(vt,{})}),p("button",{type:"button",className:"zoom-button",onClick:l,children:p(Kn,{title:"Zoom to range in spectrum"})}),p("button",{type:"button",className:"edit-button",onClick:h,children:p(Nr,{color:"blue"})})]}))]})}function uw({rowData:e,onHoverSignal:t}){const n=B(e,"tableMetaInfo.signal.js");return f("td",k(b({},t),{children:n==null?void 0:n.map(o=>isNaN(o.coupling)?"":o.coupling.toFixed(1)).join(",")}))}const Wl={color:"red",fontWeight:"bold"};function dw({rowData:e,assignment:t,highlight:n,onUnlinkVisibilityChange:o,unlinkVisibility:s,onLink:i,onUnlink:l,rowSpanTags:r,onHover:a,highlightData:u}){var g;const d=c.exports.useMemo(()=>B(e,"diaIDs",0),[e]),h=c.exports.useCallback(x=>{o==null||o(x)},[o]),m=c.exports.useMemo(()=>{var y;return t.isActive||t.isOnHover||n.isActive&&((y=u.highlight.sourceData)==null?void 0:y.type)!==ue.SIGNAL?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"}},[t.isActive,t.isOnHover,n.isActive,(g=u.highlight.sourceData)==null?void 0:g.type]);return f("td",k(b(b({},r),a),{onClick:x=>i==null?void 0:i(x,t),children:e.nbAtoms!==void 0&&e.nbAtoms>0?e.diaIDs&&e.diaIDs.length>0?_("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[e.nbAtoms," "," ( ",f("span",{style:m,children:d.length})," ) ",f("sup",{children:f("button",{type:"button",style:{visibility:s?"visible":"hidden",padding:0,margin:0},onClick:x=>l==null?void 0:l(x,!0),children:f(Zo,{color:"red"})})})]}):t.isActive?_("div",{children:[`${e.nbAtoms} (`,f("span",{style:Wl,children:"0"}),")"]}):e.nbAtoms:t.isActive?_("div",{children:["0 (",f("span",{style:Wl,children:"0"}),")"]}):""}))}var pw=c.exports.memo(dw);function hw({value:e,rowSpanTags:t,onHoverRange:n,format:o}){return f("td",k(b(b({},t),n),{children:Xe(e,o)}))}var Kl=c.exports.memo(hw);function fw({rowData:e,rowSpanTags:t,onHoverRange:n,format:o}){const s=Y(),i=c.exports.useMemo(()=>{const r=ka(e),a=Xe(e.integration,o);return r?a:`[ ${a} ]`},[o,e]),l=c.exports.useCallback(r=>{s({type:Lc,payload:{data:{value:r.target.value,id:e.id}}})},[s,e.id]);return f("td",k(b(b({},t),n),{children:f(it,{value:i,onSave:l,type:"number",style:{padding:"0.1rem 0.4rem"}})}))}function mw({rowData:e,onHover:t,assignment:n,highlight:o,onUnlinkVisibilityChange:s,unlinkVisibility:i,onLink:l,onUnlink:r}){const a=c.exports.useMemo(()=>B(e,"tableMetaInfo.signal.diaIDs",[]),[e]),u=c.exports.useMemo(()=>n.isActive||o.isActive?{color:"red",fontWeight:"bold"}:void 0,[n.isActive,o.isActive]),d=c.exports.useCallback(m=>{s==null||s(m)},[s]),h=c.exports.useCallback(m=>{l==null||l(m,n)},[n,l]);return f("td",k(b({},t),{onClick:h,style:u,children:a&&a.length>0?_("div",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[a.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:i?"visible":"hidden",padding:0,margin:0},onClick:m=>r==null?void 0:r(m,!1),children:f(Zo,{color:"red"})})})]}):n.isActive?"0":""}))}var gw=c.exports.memo(mw);function yd(e){return(t,n,o="",s="")=>{const i=B(e,n,"0.000");return Xe(t,i,o,s)}}function xw({rowData:e,onHoverSignal:t,preferences:n}){const o=Y(),s=e.tableMetaInfo.signal,i=yd(n),l=c.exports.useCallback(r=>{o({type:Oc,payload:{value:r.target.value,rangeID:e.id,signalID:s.id}})},[o,e.id,s.id]);return s?f("td",k(b({},t),{children:ji(s.multiplicity,["m"])?f(it,{value:s.delta.toFixed(3),onSave:l,type:"number",style:{padding:"0.1rem 0.4rem"}}):`${i(e.from,"fromFormat")} - ${i(e.to,"toFormat")}`})):f("td",{children:""})}const bw=P`
  background-color: #ff6f0057;
`,yw=P`
  background-color: #f5f5dc;
`;function vw({rowData:e,onUnlink:t,onContextMenu:n,preferences:o}){const s=Ve(),i=rt(e.id),l=le([i.id].concat(i.assigned.x||[]).concat($i(s,e.signals.map(M=>M.id))),{type:ue.RANGE}),r=le(i.assigned.x||[],{type:ue.RANGE}),a=rt(e.tableMetaInfo.id),u=le([a.id].concat(a.assigned.x||[]),{type:ue.SIGNAL}),d=En(),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),y=yd(o),C=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:B(e.tableMetaInfo,"hide",!1)?{display:"none"}:void 0}),[e.tableMetaInfo]),v=c.exports.useCallback((M,A)=>{M&&M.stopPropagation(),A!==void 0?A?(t(e),m(!1),i.removeAll("x")):(t(e,B(e,"tableMetaInfo.signalIndex",void 0)),x(!1),a.removeAll("x")):(m(!1),x(!1))},[i,a,t,e]),S=c.exports.useCallback((M,A)=>{M.stopPropagation(),A.onClick("x")},[]),E=c.exports.useMemo(()=>({onMouseEnter:()=>{i.onMouseEnter("x"),l.show()},onMouseLeave:()=>{i.onMouseLeave("x"),l.hide()}}),[i,l]),T=c.exports.useMemo(()=>({onMouseEnter:()=>{i.onMouseEnter("x"),r.show()},onMouseLeave:()=>{i.onMouseLeave("x"),r.hide()}}),[i,r]),N=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("x"),u.show()},onMouseLeave:()=>{a.onMouseLeave("x"),u.hide()}}),[a,u]),R=c.exports.useMemo(()=>l.isActive||i.isActive?bw:B(e,"tableMetaInfo.isConstantlyHighlighted",!1)?yw:null,[i.isActive,l.isActive,e]);return w("tr",{onContextMenu:M=>n(M,e),css:R,children:[p("td",k(b(b({},C),E),{children:e.tableMetaInfo.rowIndex+1})),mo(o,"showFrom")&&p(Kl,{value:e.from,rowSpanTags:C,onHoverRange:E,format:y("showFrom",void 0)}),mo(o,"showTo")&&p(Kl,{value:e.to,rowSpanTags:C,onHoverRange:E,format:y("toFormat",void 0)}),p(xw,{rowData:e,onHoverSignal:N,preferences:o}),mo(o,"showRelative")&&p(fw,{rowData:e,rowSpanTags:C,onHoverRange:E,format:y("relativeFormat",void 0)}),mo(o,"showAbsolute")&&p(zk,{value:e.absolute,rowSpanTags:C,onHoverRange:E,format:y("absoluteFormat",void 0)}),p("td",k(b({},N),{children:B(e,"tableMetaInfo.signal.multiplicity","")})),p(uw,{rowData:e,onHoverSignal:N}),p(gw,{rowData:e,assignment:a,highlight:u,onHover:N,unlinkVisibility:g,onUnlinkVisibilityChange:M=>x(M),onLink:S,onUnlink:v}),p(pw,{rowData:e,assignment:i,highlight:r,onHover:T,unlinkVisibility:h,onUnlinkVisibilityChange:M=>m(M),onLink:S,onUnlink:v,rowSpanTags:C,highlightData:d}),p(cw,{rowData:e,onHoverSignal:N,onHoverRange:E,rowSpanTags:C})]})}function Cw(e){return c.exports.useMemo(()=>{const t=[];return e.forEach((n,o)=>{n.signals.length===1?t.push(k(b({rowKey:K()},n),{tableMetaInfo:k(b({},n.tableMetaInfo),{signal:n.signals[0],rowIndex:o,signalIndex:0,id:n.signals[0].id})})):n.signals.length>1&&n.signals.forEach((s,i)=>{let l=!1,r=null;i<n.signals.length-1&&i===0?r=n.signals.length:l=!0,t.push(k(b({rowKey:K()},n),{tableMetaInfo:k(b({},n.tableMetaInfo),{signal:s,rowSpan:r,hide:l,rowIndex:o,signalIndex:i,id:s.id})}))})}),t},[e])}const Sw=P`
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
`;function kw({tableData:e,onUnlink:t,context:n,activeTab:o,preferences:s}){const i=o==null?void 0:o.replace(/[0-9]/g,""),l=c.exports.useRef(),{items:r,isSortedDesc:a,onSort:u}=bd(e),d=Cw(r),h=g=>B(s,g,!1),m=c.exports.useCallback((g,x)=>{Bt(g)||(g.preventDefault(),l.current.handleContextMenu(g,x))},[l]);return w(c.exports.Fragment,{children:[w("table",{css:Sw,children:[p("thead",{children:w("tr",{children:[p("th",{children:"#"}),h("showFrom")?w("th",k(b({id:"from"},u),{children:["From",a("from").content]})):null,h("showTo")?w("th",k(b({id:"to"},u),{children:["To ",a("to").content]})):null,p("th",{children:"\u03B4 (ppm) "}),h("showRelative")?w("th",k(b({id:"integration"},u),{children:["Rel. ",i," ",a("integration").content]})):null,h("showAbsolute")?p("th",{children:"Absolute"}):null,p("th",{children:"Mult."}),p("th",{children:"J (Hz)"}),p("th",{children:p(Pr,{style:{fontSize:10}})}),p("th",{children:"\u03A3"}),p("th",{children:"Kind"}),p("th",{children:""})]})}),p("tbody",{children:d==null?void 0:d.map(g=>p(vw,{rowData:g,onUnlink:t,onContextMenu:(x,y)=>m(x,y),preferences:s},g.rowKey))})]}),p(Gt,{ref:l,context:n})]})}function ww({ranges:e,data:t,info:n,xDomain:o,preferences:s,activeTab:i,molecules:l,showMultiplicityTrees:r,showJGraph:a,showRangesIntegrals:u}){const[d,h]=c.exports.useState(!1),m=Ve(),g=Y(),x=re(),[y,C]=c.exports.useState(!1),v=c.exports.useRef(),S=c.exports.useMemo(()=>{const I=(L,H)=>(H=H*1e4,L=L*1e4,H>=o[0]*1e4&&L<=o[1]*1e4||L<=o[0]*1e4&&H>=o[1]*1e4),O=L=>L.filter(H=>I(H.from,H.to));return e.values?(d?O(e.values):e.values).map(H=>k(b({},H),{tableMetaInfo:{isConstantlyHighlighted:I(H.from,H.to)}})):[]},[d,e.values,o]),E=c.exports.useCallback((I,O=-1)=>{g({type:zc,payload:{rangeData:I,assignmentData:m,signalIndex:O}})},[m,g]),T=c.exports.useCallback(async I=>{if(t.x&&t.re){const{x:O,re:L}=t,{from:H,to:z}=I,{fromIndex:J,toIndex:V}=Un(O,{from:H,to:z}),j=b({x:Array.from(O.slice(J,V)),y:Array.from(L.slice(J,V))},I);await ds(JSON.stringify(j,void 0,2))?x.show("Data copied to clipboard"):x.error("copy to clipboard failed")}},[t,x]),N=c.exports.useMemo(()=>B(s,`formatting.panels.ranges.[${i}]`)||Vi(i),[i,s]),R=c.exports.useMemo(()=>[{label:"Copy to clipboard",onClick:T}],[T]),M=c.exports.useCallback(()=>{h(!d)},[d]),A=c.exports.useCallback(()=>{C(!y)},[y]),D=c.exports.useCallback(()=>{v.current.saveSetting(),C(!1)},[]);return p(Qe,{children:w("div",{css:[At,y&&P`
              th {
                position: relative;
              }
            `],children:[!y&&p(Fk,{ranges:e,info:n,activeTab:i,molecules:l,showRangesIntegrals:u,showMultiplicityTrees:r,showJGraph:a,isFilterActive:d,onUnlink:E,onFilterActivated:M,onSettingClick:A,filterCounter:S.length}),y&&p(Tn,{onSave:D,onClose:A}),p("div",{className:"inner-container",children:y?p(Hk,{ref:v}):p("div",{className:"table-container",children:S&&S.length>0?p(kw,{activeTab:i,tableData:S,onUnlink:E,context:R,preferences:N}):p(Zt,{})})})]})})}const Ew=c.exports.memo(ww),Aw={ranges:{},data:{},info:{}};function Tw(){const{displayerKey:e,xDomain:t,activeTab:n,molecules:o,toolOptions:{selectedTool:s,data:{showMultiplicityTrees:i,showRangesIntegrals:l,showJGraph:r}}}=$(),{ranges:a,data:u,info:d}=ve(Aw),h=ie();return p(Ew,{ranges:a,data:u,info:d,showMultiplicityTrees:i,showJGraph:r,showRangesIntegrals:l,selectedTool:s,displayerKey:e,preferences:h,xDomain:t,activeTab:n,molecules:o})}function vd(){const e=ie();return t=>!B(e,`display.toolBarButtons.${t}`,!1)}function Dw({data:e,activeSpectrum:t,activeTab:n,displayerMode:o,spectrums:s,isAutomaticPickingVisible:i}){const l=he(),r=re(),a=Y(),u=c.exports.useCallback(()=>{l.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:()=>{a({type:Ai})}},{text:"No"}]})},[a,l]),d=c.exports.useCallback(()=>{const C=s.map(v=>v.id);a({type:Xn,id:C})},[a,s]),h=c.exports.useCallback(()=>{a({type:Xn,id:[]})},[a]),m=c.exports.useCallback(()=>{function C(S){let E=n.split(",");E=E[0]===E[1]?[E[0]]:E;const T=[];for(const N of E)S.some(M=>M.info.nucleus===N)||T.push(N);return T}const v=C(e);v.length>0?a({type:Fc,nucleus:v}):r.error("Nothing to calculate")},[n,r,e,a]),g=c.exports.useCallback(()=>{a({type:Jc})},[a]),x=c.exports.useCallback(()=>{a({type:Qc})},[a]),y=c.exports.useCallback(async()=>{const C=await r.showLoading("Automatic Ranges/Zones detection for all spectra in progress");setTimeout(()=>{a({type:cu}),a({type:uu}),C()},0)},[a,r]);return _(nt,{onDelete:u,counter:s==null?void 0:s.length,deleteToolTip:"Delete all spectra",children:[f(Se,{popupTitle:"Hide all spectra",onClick:h,children:f(jp,{})}),f(Se,{popupTitle:"Show all spectra",onClick:d,children:f(bo,{})}),t&&n&&n.split(",").length>1&&f(Se,{popupTitle:"Add missing projection",onClick:m,children:f(Xp,{})}),o===X.DM_1D&&s.length>1&&_(Ue,{children:[f(Se,{popupTitle:"Reset Scale",onClick:x,children:f(Yp,{})}),f(Se,{popupTitle:"Same Top",onClick:g,children:f(Gp,{})})]}),e&&e.length>0&&i&&f(Se,{popupTitle:"Automatic Ranges/Zones picking for all spectra",onClick:y,children:f(Fr,{})})]})}const Iw=c.exports.memo(Dw);function Mw({spectrums:e}){const{data:t,activeSpectrum:n,activeTab:o,displayerMode:s}=$(),l=vd()("hideAutoRangesTool");return f(Iw,{data:t,activeSpectrum:n,activeTab:o,displayerMode:s,spectrums:e,isAutomaticPickingVisible:l})}function Rw({color:e,activated:t}){return f("div",{style:{backgroundColor:e,height:"12px",width:"12px",opacity:t?1:.1,display:"inline-block"}})}function Nw({positiveColor:e,negativeColor:t,activated:n}){return f("svg",{width:"12",height:"12",viewBox:"0 0 12 12",opacity:n?1:.1,children:_("g",{children:[f("path",{d:"M0,0H12L0,12Z",fill:e,strokeWidth:"0"}),f("path",{d:"M12,12H0L12,0Z",fill:t,strokeWidth:"0"})]})})}function Pw(e){const{style:t,onClick:n=()=>null,activated:o}=e;return f("button",{style:t,type:"button",onClick:n,children:e.dimension===2?f(Nw,k(b({},e.color),{activated:o})):f(Rw,b({activated:o},e.color))})}var Fw=c.exports.memo(Pw);function _w({data:e,onChangeMarkersVisibility:t,markersVisible:n,style:o}){const s=i=>n.findIndex(l=>l.id===i)!==-1;return f("button",{style:k(b({},o),{opacity:s(e.id)&&e.peaks&&e.peaks.values.length>0?1:.1}),type:"button",onClick:()=>t(e),disabled:e.peaks&&e.peaks.values.length===0,children:f(Zp,{})})}function Lw({data:e,onChangeVisibility:t,style:n}){const o=(s,i)=>e?e.display[i]:!0;return _(Ue,{children:[e.info.dimension===1&&f("button",{"data-test-id":"hide-show-spectrum-button",style:n,type:"button",onClick:()=>t(e,"isVisible"),children:f(bo,{style:b({},o(e.id,"isVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.color}:{opacity:.1,fill:e.display.color})})}),e.info.dimension===2&&_("div",{style:{minWidth:"40px"},children:[f("button",{style:k(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isPositiveVisible"),children:f(bo,{style:b({},o(e.id,"isPositiveVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.positiveColor}:{opacity:.1,fill:e.display.positiveColor})})}),f("button",{style:k(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isNegativeVisible"),children:f(bo,{style:b({},o(e.id,"isNegativeVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.negativeColor}:{opacity:.1,fill:e.display.negativeColor})})})]})]})}const je={button:{backgroundColor:"transparent",border:"none",width:"26px",minWidth:"26px"},row:{display:"flex",alignContent:"center",height:"25px",borderBottom:"0.55px solid #f1f1f1"},name:{flex:1,height:"100%",display:"flex"},info:{flex:"1 1 1px",height:"100%",display:"block",alignItems:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"24px"},icon:{display:"flex",margin:"auto",justifyContent:"center"}};function Ow({activeSpectrum:e,markersVisible:t,data:n,onChangeVisibility:o,onChangeMarkersVisibility:s,onChangeActiveSpectrum:i,onOpenSettingModal:l,onContextMenu:r}){var x,y;const a=C=>(C&&(C=C.replace(/(?<value>[0-9]+)/g,"<sub>$<value></sub>")),C),u=e&&e.id===n.id,{color:d,name:h,positiveColor:m,negativeColor:g}=n.display;return _("div",{style:b(b({},je.row),u?{backgroundColor:"#fafafa"}:{opacity:e?.2:1}),onContextMenu:r,children:[f(Lw,{data:n,onChangeVisibility:o,style:je.button}),_("div",{style:je.name,onClick:()=>i(n),children:[f("div",{style:k(b({},je.icon),{width:"16px"}),children:n.info.isFid?f(Up,{}):n.info.dimension===2?f(Wp,{}):f(Ir,{})}),f("span",{style:je.info,children:h}),f("div",{style:je.info,dangerouslySetInnerHTML:{__html:n.info&&a(n.info.solvent)}}),_("span",{style:je.info,children:[f("span",{style:{borderLeft:"0.55px solid #e5e5e5",paddingRight:"5px"}}),(x=n.info)==null?void 0:x.experiment]}),f("span",{style:je.info,children:(y=n.info)==null?void 0:y.pulse})]}),f(_w,{data:n,style:b(b({},je.icon),je.button),onChangeMarkersVisibility:s,markersVisible:t}),f(Fw,{style:je.button,dimension:n.info.dimension,color:{positiveColor:m,color:d,negativeColor:g},activated:u,onClick:C=>l(n,C)})]})}var $w=c.exports.memo(Ow);function Hw(e){const{onColorChange:t=()=>null,name:n}=e,{values:o,setFieldValue:s}=pe(),i=c.exports.useCallback(l=>{t(l),s(n,`${l.hex}${Math.round(l.rgb.a*255).toString(16)}`)},[n,t,s]);return f(wr.SketchPicker,{color:{hex:B(o,n,"#000")},presetColors:ha,onChangeComplete:l=>i(l)})}var Zs=c.exports.memo(Hw);function zw(e){const t=e.length,n=Math.floor(t/307200)||1,o=new Float64Array(t/n>>0);let s=0;for(let i=0;i<o.length;i+=n)o[s++]=e[i];return o}function Vw(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,l=t.length>0?t[0].x:0,r=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:l,y:a},{x:r,y:a}]}function Bw({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=zw(t.re),l=_r(i,n),r={},a={};for(let u in l.sanplot){const{x:d,y:h}=l.sanplot[u];let m=new Array(d.length);for(let g=0;g<d.length;g++)m[g]={x:d[g],y:h[g]};r[u]=m,a[u]=Vw(l[u],m,{yLogBase:o})}return{sanPlot:r,lines:a}},[t.re,n,o]);return _("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[f("div",{style:{display:"block"},children:_(cn,{width:180,height:220,children:[f(Kp,{title:"Sanplot"}),f(Ke,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(Ke,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(wo,{position:"embedded",bottom:5,right:60})]})}),f("div",{style:{display:"block",width:180,height:180},children:_(cn,{width:180,height:180,children:[f(Ke,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(Ke,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(wo,{position:"embedded",bottom:5,right:60})]})})]})}var jw=c.exports.memo(Bw);function Xw({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=c.exports.useCallback(()=>{n.current&&n.current.submitForm()},[]);return f(ae,{ref:n,initialValues:e.display,onSubmit:t,children:_("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[f("div",{style:{display:"block",position:"relative"},children:f(Zs,{name:"color",onColorChange:o})}),f(jw,{color:"red",data:e.data})]})})}function Yw(e){const r=e,{onAfterChange:t=()=>null,name:n}=r,o=G(r,["onAfterChange","name"]),{values:s,setFieldValue:i}=pe(),l=c.exports.useCallback(a=>{t(a),i(n,a)},[n,t,i]);return f(qp,b({className:"horizontal-slider",thumbClassName:"thumb",trackClassName:"track",defaultValue:B(s,n,[0,100]),onAfterChange:l,renderThumb:(a,u)=>f("div",k(b({},a),{children:f("span",{children:u.valueNow})})),pearling:!0,minDistance:10},o))}var ql=c.exports.memo(Yw);function Gw(e){let t=e[0].length,n=e.length,o=Math.floor(t*n/204800)||1;const s=new Float64Array(t*n/o>>0);let i=0;for(let l=0;l<s.length;l+=o)s[i++]=e[l/n>>0][l%n];return s}function Zw(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,l=t.length>0?t[0].x:0,r=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:l,y:a},{x:r,y:a}]}function Uw({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=Gw(t.z),l=_r(i,n),r={},a={};for(let u in l.sanplot){const{x:d,y:h}=l.sanplot[u];let m=new Array(d.length);for(let g=0;g<d.length;g++)m[g]={x:d[g],y:h[g]};r[u]=m,a[u]=Zw(l[u],m,{yLogBase:o})}return{sanPlot:r,lines:a}},[t.z,n,o]);return _("div",{children:[f("div",{style:{textAlign:"center",paddingBottom:5,paddingTop:5},children:"San Plot"}),_("div",{style:{borderTop:"1px solid #ededed",marginTop:"10px",paddingTop:"10px",display:"flex",flexDirection:"row"},children:[_(cn,{width:220,height:180,children:[f(Ke,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(Ke,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log ${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(wo,{position:"embedded",bottom:90,right:5})]}),_(cn,{width:220,height:180,children:[f(Ke,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(Ke,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(wo,{position:"embedded",bottom:90,right:5})]})]})]})}var Ww=c.exports.memo(Uw);function Kw({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=P`
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
  `,s=c.exports.useCallback(()=>{n.current.submitForm()},[]);return p(ae,{ref:n,initialValues:e.display,onSubmit:t,children:w("div",{css:o,children:[w("div",{className:"positive",children:[p("span",{style:{padding:"0 10px"},children:"Positive"}),p(Zs,{name:"positiveColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[p("span",{className:"label",children:"contour Levels [ min - max ]"}),p(ql,{name:"contourOptions.positive.contourLevels",onAfterChange:s}),p("span",{className:"label",children:"number of Layers "}),p(U,{name:"contourOptions.positive.numberOfLayers",onChange:s,type:"number"})]})]}),w("div",{className:"negative",children:[p("span",{style:{padding:"0 10px"},children:"Negative"}),p(Zs,{name:"negativeColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[p("span",{className:"label",children:"contour Levels [ min - max ]"}),p(ql,{name:"contourOptions.negative.contourLevels",onAfterChange:s}),p("span",{className:"label",children:"number of Layers "}),p(U,{name:"contourOptions.negative.numberOfLayers",onChange:s,type:"number"})]})]}),p(Ww,{data:e.data})]})})}const qw=P`
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
`;function Jw({position:e,data:t,onClose:n}){const o=Y(),{id:s,info:i}=t,l=c.exports.useCallback(d=>{o({type:Qa,id:s,display:d})},[o,s]),r=c.exports.useCallback(d=>{d.target===d.currentTarget&&n()},[n]);if(!e)return null;const{x:a,y:u}=e;return p("div",{css:qw,onClick:r,children:p("div",{className:"inner-conatiner",style:{left:i.dimension===2?a-450:a-240,width:i.dimension===2?450:240,padding:i.dimension===2?"10px 0":"",top:u},children:i.dimension===2?p(Kw,{onSubmit:l,data:t}):p(Xw,{onSubmit:l,data:t})})})}function Qw(){return!0}var eE=c.exports.memo(Jw,Qw);function tE({data:e,activeSpectrum:t,activeTab:n,onTabChange:o}){const s=c.exports.useRef(),[i,l]=c.exports.useState([]),[r,a]=c.exports.useState(null),[u,d]=c.exports.useState(null),[h,m]=c.exports.useState(!1),g=re(),x=Y();c.exports.useEffect(()=>{if(e){const A=e.reduce((D,I)=>(I.info.dimension===1&&I.display.isPeaksMarkersVisible===!0&&D.push({id:I.id}),D),[]);l(A)}},[e,x]);const y=c.exports.useMemo(()=>e?Jo("nucleus")(e,!0):[],[e]);c.exports.useEffect(()=>{o({tab:n,data:y[n]})},[n,o,y]);const C=c.exports.useCallback(A=>{const D=i.findIndex(O=>O.id===A.id),I=[...i];D===-1?I.push({id:A.id}):I.splice(D,1),x({type:Si,data:I}),l(I)},[x,i]),v=c.exports.useCallback(A=>{o({tab:A.tabid,data:y[A.tabid]}),x({type:Ri,tab:A.tabid})},[x,o,y]),S=c.exports.useMemo(()=>[{label:"Copy to Clipboard",onClick:async A=>{const{x:D,y:I,info:O}=A;await ds(JSON.stringify({x:D,y:I,info:O},void 0,2))?g.success("Data copied to clipboard"):g.error("Copy to clipboard failed")}},{label:"Delete",onClick:A=>{setTimeout(()=>{x({type:Ai,id:A.id})},0)}}],[g,x]),E=c.exports.useCallback((A,D)=>{Bt(A)||(A.preventDefault(),s.current.handleContextMenu(A,D))},[s]),T=c.exports.useCallback((A,D)=>{d({x:D.nativeEvent.clientX,y:D.nativeEvent.clientY}),a(A),m(!0)},[]),N=c.exports.useCallback((A,D)=>{x({type:Xn,id:A.id,key:D,value:!A.display[D]})},[x]),R=c.exports.useCallback(A=>{setTimeout(()=>{t&&t.id===A.id?x({type:_o,data:null}):x({type:_o,data:{id:A.id}})},0)},[t,x]),M=c.exports.useCallback(()=>{m(!1)},[]);return _("div",{style:{height:"calc(100% - 25px)"},children:[f(An,{activeTab:n,onClick:v,children:y&&Object.keys(y).map(A=>{var D;return f(Re,{tablabel:A,tabid:A,children:(D=y[A])==null?void 0:D.map(I=>f($w,{activeSpectrum:t,markersVisible:i,data:I,onChangeVisibility:N,onChangeMarkersVisibility:C,onChangeActiveSpectrum:R,onOpenSettingModal:T,onContextMenu:O=>E(O,I)},I.id))},A)})}),f(Gt,{ref:s,context:S}),h?f(eE,{onClose:M,data:r,position:u}):null]})}const nE=c.exports.memo(tE);function oE({onTabChange:e}){const{data:t,activeSpectrum:n,activeTab:o}=$();return f(nE,{data:t,activeSpectrum:n,activeTab:o,onTabChange:e})}const sE={overflow:"hidden",height:"100%",display:"flex",flexDirection:"column",width:"100%"};function iE(){const[e,t]=c.exports.useState([]),n=c.exports.useCallback(o=>{t(o.data?o.data:[])},[]);return _("div",{style:sE,children:[f(Mw,{spectrums:e}),f(oE,{onTabChange:n})]})}var lE=c.exports.memo(iE);const ye={hmbc:{from:2,to:3},cosy:{from:3,to:4},hsqc:{from:1,to:1},hmqc:{from:1,to:1},inadequate:{from:1,to:1}};function Cd(e,t){return ye[t]&&e.from===ye[t].from&&e.to===ye[t].to}function Sd(e){return e.split(/\d+/)[1]}function kd(e,t){const n=B(e,`state.${t.atomType}.error`,null);if(n){for(let{key:o,color:s}of hi)if(o!=="incomplete"&&(o==="notAttached"||o==="ambiguousAttachment")&&B(n,`${o}`,[]).some(i=>e.values[i].id===t.id))return s}return null}function wd(e,t,n,o,s){var i;if(e&&e.info.dimension===2){const l=Bn(e,t.signal.id);if(l){const r=t.axis==="x"?"y":"x",a=(i=l[r])==null?void 0:i.delta;if(a!==void 0)return a*n>=o&&a*n<=s}}return!1}function zo(e,t,n,o,s,i,l){if(e&&e.info.dimension===2){const r=Bn(e,t.signal.id);if((r==null?void 0:r.x.delta)&&(r==null?void 0:r.y.delta))return r.x.delta*n>=o&&r.x.delta*n<=s&&r.y.delta*n>=i&&r.y.delta*n<=l}return!1}function Jl(e){var o;let t="X";e.experimentType==="hsqc"||e.experimentType==="hmqc"?t=!e.signal||e.signal.sign===0?"S":`S${e.signal.sign===1?"+":"-"}`:e.experimentType==="hmbc"||e.experimentType==="cosy"||e.experimentType==="tocsy"?t="M":e.experimentType==="noesy"||e.experimentType==="roesy"?t="NOE":e.experimentType==="inadequate"?t="I":e.experimentType==="adequate"&&(t="A");const n=(o=e.signal.j)==null?void 0:o.pathLength;if(n){const s=ye[e.experimentType]&&n.from>=ye[e.experimentType].from&&n.from<=ye[e.experimentType].to&&n.to>=ye[e.experimentType].from&&n.to<=ye[e.experimentType].to;return`${t}${s?"":"*"}`}return t}function Ed(e){return Uo(k(b({},e),{edited:k(b({},e.edited),{moved:!0})}))}function _n(e,t){const n=e.id.split("_");return Uo(k(b({},e),{id:n[t==="x"?0:1],axis:t,match:[],edited:k(b({},e.edited),{moved:!0})}))}function xe(e,t,n,o){const s=Me(t),i=ze(e),l=t.id.split("_");return o==="add"?Jp(i,s===1?Ed(t):_n(t,n)):(o==="remove"||o==="unmove")&&Qp(i,n==="x"?l[0]:l[1]),i}function rE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:n,selectedCorrelationIdDim2:o,action:s,link:i,correlations:l}){const r=l.find(x=>x.id===n),a=l.find(x=>x.id===o),u=(r==null?void 0:r.id)!==e.id,d=t&&(a==null?void 0:a.id)!==(t==null?void 0:t.id),h=Me(i),m=[],g={};if(s==="move"){if(h===1){const x=xe(e,i,"x","remove");let y;r?y=xe(u?r:x,i,"x","add"):y=Mn({atomType:e.atomType,link:[Ed(i)]}),m.push(x,y),g.skipDataUpdate=!0}else if(h===2){const x=xe(e,i,"x","remove");m.push(x);const y=xe(t,i,"y","remove");m.push(y),r&&a?(m.push(xe(u?r:x,i,"x","add")),m.push(xe(d?a:y,i,"y","add"))):r&&o==="new"?(m.push(xe(u?r:x,i,"x","add")),m.push(Mn({atomType:t.atomType,link:[_n(i,"y")]}))):n==="new"&&a?(m.push(Mn({atomType:e.atomType,link:[_n(i,"x")]})),m.push(xe(d?a:y,i,"y","add"))):n==="new"&&o==="new"&&(m.push(Mn({atomType:e.atomType,link:[_n(i,"x")]})),m.push(Mn({atomType:t.atomType,link:[_n(i,"y")]}))),g.skipDataUpdate=!0}}else if(s==="remove"){const x=xe(e,i,"x","remove");if(m.push(x),Me(i)===2){const y=xe(t,i,"y","remove");m.push(y)}}else s==="unmove"?h===1?r&&m.push(xe(r,i,"x","unmove")):h===2&&r&&a&&(m.push(xe(r,i,"x","unmove")),m.push(xe(a,i,"y","unmove"))):s==="setPathLength"&&(m.push(Ql(e,i,"x")),m.push(Ql(t,i,"y")));return{editedCorrelations:m,buildCorrelationDataOptions:g}}function Ql(e,t,n){var i,l;const o=ze(e);if(Me(t)===2){const r=t.id.split("_")[n==="x"?0:1],a=o.link.find(u=>u.id===r);if(a){const u=(i=t.signal.j)==null?void 0:i.pathLength;Cd(u,a.experimentType)?((l=a.signal.j)==null||delete l.pathLength,a.signal.j&&Object.keys(a.signal.j).length===0&&delete a.signal.j,delete a.edited.pathLength):(a.signal.j?a.signal.j.pathLength=u:a.signal.j={pathLength:u},a.edited.pathLength=!0)}}return o}function aE(e,t){e=e.toLowerCase().replace(/\s+/g,"").split(",").map(s=>s==="sp"?"sp1":s).join(","),e=e.replaceAll("sp","");let n=[];return/^(?:[0-9],{0,1})+$/g.test(e)&&(n=e.split(",").filter(s=>s.length>0).map(s=>Number(s))),n=n.filter(s=>s>=(t==="protonsCount"?0:1)&&(t==="protonsCount"||s<=3)),n.filter((s,i,l)=>l.indexOf(s)===i)}function cE(e,t,n,o,s,i,l){if(l.pseudo===!0||n===null||!l.link.some(g=>g.experimentID===n.id))return!1;const r=t.split(",").map(g=>Sd(g)),a=1e4,u=o[0]*a,d=o[1]*a,h=s[0]*a,m=s[1]*a;if(i===X.DM_1D){const g=l.link.find(C=>Me(C)===1);if(!g)return!1;let x=Lr(g);if(x===void 0)return!1;if(x*=a,Ie(e,g.experimentID,!0)&&r[0]===l.atomType&&x>=u&&x<=d||l.link.some(C=>{const v=Ie(e,C.experimentID,!0);return wd(v,C,a,u,d)}))return!0}else if(i===X.DM_2D){if(!r.includes(l.atomType))return!1;const g=l.link.find(y=>Me(y)===2);if(!g)return!1;const x=Ie(e,g.experimentID,!0);if(zo(x,g,a,u,d,h,m))return!0;if(l.link.some(y=>{const C=Ie(e,y.experimentID,!0);return zo(C,y,a,u,d,h,m)}))return!0}return!1}function Vo({correlation:e}){const{data:t,xDomain:n,yDomain:o,displayerMode:s,activeTab:i,activeSpectrum:l}=$();return c.exports.useMemo(()=>cE(t,i,l,n,o,s,e),[l,i,e,s,t,n,o])}const uE=P`
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
`;function er({description:e,onConfirm:t}){const n=c.exports.useCallback(o=>{o.preventDefault(),o.stopPropagation(),t()},[t]);return w("div",{css:uE,children:[p("p",{children:e}),p("button",{type:"button",onClick:n,children:"Confirm"})]})}const dE=P`
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
`;function pE({signal:e,experimentType:t,onEdit:n}){var d,h,m,g;const[o,s]=c.exports.useState(((d=e.j)==null?void 0:d.pathLength)!==void 0?e.j.pathLength.from:((h=ye[t])==null?void 0:h.from)||0),[i,l]=c.exports.useState(((m=e.j)==null?void 0:m.pathLength)!==void 0?e.j.pathLength.to:((g=ye[t])==null?void 0:g.to)||0),[r,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{const x={from:o,to:i},y=k(b({},e),{j:k(b({},e.j),{pathLength:x})});n(y)},[i,o,n,e]);return c.exports.useEffect(()=>{a(o<=0||o>i)},[i,o]),w("div",{css:dE,children:[p("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[p(Q,{title:"Min:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:p(yt,{type:"number",value:o,onChange:x=>{s(Number(x.target.value))},style:{input:{color:r?"red":"black"}}})}),p(Q,{title:"Max:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:p(yt,{type:"number",value:i,onChange:x=>{l(Number(x.target.value))}})})]}),r?w("p",{className:"warning",children:["Minimum must not be 0 or higher than the maximum value."," "]}):p(gn,{type:"button",onClick:u,disabled:r,children:"Set"})]})}const hE=P`
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
`;function fE({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:s}){const[i,l]=c.exports.useState(e.id),[r,a]=c.exports.useState((t==null?void 0:t.id)||void 0);function u(h){const m=st(h);return`${m?m.toFixed(2):"?"}`}const d=c.exports.useCallback((h,m)=>{const g=o.reduce((x,y)=>(y.pseudo===!1&&y.atomType===n.atomType[m]&&x.push({key:y.id,value:y.id,label:`${y.label.origin}: ${u(y)}`}),x),[]);return g.push({key:"new",value:"new",label:`new -> ${(m===0?st(e):st(t)).toFixed(2)}`}),p(Ne,{onChange:x=>{m===0?l(x):a(x)},data:g,defaultValue:h.id,style:{width:110,height:25,margin:0,border:"1px solid grey"}})},[e,t,o,n.atomType]);return w("div",{css:hE,children:[p("p",{children:"Move of signals on either one or both axes."}),p("p",{children:'"New" means to separate into a new row or column.'}),w("div",{className:"selection-container",children:[d(e,0),t&&d(t,1)]}),p("button",{type:"button",onClick:()=>s(i,r),children:"Move"})]})}const mE=P`
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
`;function Ki({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onClose:s,onEdit:i}){const[l,r]=c.exports.useState("move"),a=c.exports.useCallback(()=>{const h=Me(n);return h===1?` 1D (${n.signal.delta.toFixed(3)})`:h===2?`${n.signal.x?`${n.signal.x.delta.toFixed(2)}`:"?"} (${e.label.origin}), ${n.signal.y?n.signal.y.delta.toFixed(2):"?"} (${t.label.origin})`:""},[e.label.origin,n,t]),u=c.exports.useCallback((h,m,g,x)=>{const{editedCorrelations:y,buildCorrelationDataOptions:C}=rE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:m,selectedCorrelationIdDim2:g,action:h,link:x||n,correlations:o});i(y,h,x||n,C),s==null||s()},[e,t,o,n,s,i]),d=c.exports.useMemo(()=>p("div",{className:"tabs-container",children:w(An,{position:Zi.TOP,activeTab:l,onClick:h=>r(h.tabid),children:[p(Re,{tablabel:"Move",tabid:"move",children:p(fE,{correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:(h,m)=>u("move",h,m)})}),p(Re,{tablabel:"Unmove",tabid:"unmove",children:p(er,{description:"Movement of signal to its original place.",onConfirm:()=>u("unmove",e.id,t.id)})}),p(Re,{tablabel:"Remove",tabid:"remove",children:p(er,{description:"Deletion of signal.",onConfirm:()=>u("remove",void 0,void 0)})}),p(Re,{tablabel:"J Coupling",tabid:"setPathLength",children:p(pE,{signal:n.signal,experimentType:n.experimentType,onEdit:h=>{const m=k(b({},n),{signal:h});u("setPathLength",e,t,m)}})})]})}),[l,e,t,o,u,n]);return w("div",{css:mE,children:[w("div",{className:"header handle",children:[p(me,{onClick:s}),p("p",{className:"header-info",children:`${n.experimentType.toUpperCase()} signal at ${a()}`})]}),d]})}function gE({spectraData:e,correlationsData:t,correlation:n,onEdit:o}){var S;const s=c.exports.useRef(),i=he(),l=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const E=[];return n.link.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(Ce(T.signal.id,"Crosshair_X"));const N=mi(e,T.experimentID,T.signal.id,!0);N&&E.push(N)}}),E},[n,e]),r=le(l),a=c.exports.useCallback(E=>{E.currentTarget.focus(),r.show()},[r]),u=c.exports.useCallback(E=>{E.currentTarget.blur(),r.hide()},[r]),d=Vo({correlation:n}),h=c.exports.useMemo(()=>({style:{color:kd(t,n)||void 0,backgroundColor:r.isActive?"#ff6f0057":d?"#f5f5dc":"inherit"},title:n.pseudo===!1&&n.link.reduce((E,T)=>(T.pseudo===!1&&!E.includes(T.experimentType.toUpperCase())&&E.push(T.experimentType.toUpperCase()),E),[]).sort().join("/"),onMouseEnter:a,onMouseLeave:u}),[n,t,r.isActive,d,a,u]),m=c.exports.useMemo(()=>n.edited.equivalence?{backgroundColor:"#F7F2E0"}:{color:Number.isInteger(n.equivalence)?n.equivalence===1?"#bebebe":"black":"red"},[n]),g=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(E=>Me(E)===1&&E.pseudo===!1).map(E=>{var T;return{label:`edit 1D (${E.signal.delta.toFixed(3)}${((T=E.edited)==null?void 0:T.moved)===!0?"[MOVED]":""})`,onClick:()=>{r.hide(),i.show(p(Ki,{onClose:()=>i.close(),onEdit:o,link:E,correlationDim1:n,correlationDim2:void 0,correlations:t.values}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete all (${n.label.origin})`,onClick:()=>{i.showConfirmDialog({message:`All signals of ${n.label.origin} (${st(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{o([n],"removeAll")}},{text:"No"}]}),r.hide()}}]):[],[n,t.values,r,i,o]),x=c.exports.useCallback(E=>{E.preventDefault(),s.current.handleContextMenu(E)},[s]),v=h,{title:y}=v,C=G(v,["title"]);return p("th",k(b({},C),{title:y===!1?void 0:y,children:w("div",{style:{display:"block"},onContextMenu:E=>{g.length>0&&x(E)},children:[p("p",{children:n.label.origin}),p("p",{children:st(n)?(S=st(n))==null?void 0:S.toFixed(2):""}),p("p",{style:m,children:Number.isInteger(n.equivalence)?n.equivalence:n.equivalence.toFixed(2)}),p(Gt,{ref:s,context:g})]})}))}function xE({rowCorrelation:e,columnCorrelation:t,commonLinks:n,correlations:o,spectraData:s,onEdit:i}){const l=c.exports.useRef(),r=he(),a=c.exports.useMemo(()=>{const E=[];return n.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(Ce(T.signal.id,"Crosshair"));const N=mi(s,T.experimentID,T.signal.id,!0);N&&E.push(N)}}),E},[n,s]),u=le(a),d=c.exports.useCallback(E=>{E.currentTarget.focus(),u.show()},[u]),h=c.exports.useCallback(E=>{E.currentTarget.blur(),u.hide()},[u]),m=c.exports.useCallback(E=>{E.preventDefault(),l.current.handleContextMenu(E)},[l]),g=c.exports.useCallback((E,T)=>{const N=e.link.filter(A=>(A.experimentType==="hsqc"||A.experimentType==="hmqc")&&A.pseudo===!0).length;let R,M;if(E==="add"){const A=Uo({experimentType:"hsqc",experimentID:K(),atomType:[t.atomType,e.atomType],id:K(),pseudo:!0,signal:{id:K(),sign:0}});R=xe(t,A,"x","add"),M=xe(e,A,"y","add"),M.edited.protonsCount||(M.protonsCount=[N+1])}else R=xe(t,T,"x","remove"),M=xe(e,T,"y","remove"),M.edited.protonsCount||(M.protonsCount=N-1>0?[N-1]:[]);i([R,M],E,T,{skipDataUpdate:!0})},[t,i,e]),x=c.exports.useMemo(()=>{const E=n.map(N=>{var M;const R=`${Jl(N)} (${N.signal.x?N.signal.x.delta.toFixed(2):"?"}, ${N.signal.y?N.signal.y.delta.toFixed(2):"?"})${((M=N.edited)==null?void 0:M.moved)===!0?"[MOVED]":""}`;return N.pseudo===!1?[{label:`edit ${R}`,onClick:()=>{u.hide(),r.show(f(Ki,{onClose:()=>r.close(),onEdit:i,link:N,correlationDim1:t,correlationDim2:e,correlations:o}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}]:[]}).flat(),T=n.find(N=>N.pseudo===!0&&N.experimentType==="hsqc");return e.pseudo===!0&&(T?E.push({label:"remove pseudo HSQC",onClick:()=>g("remove",T)}):E.push({label:"add pseudo HSQC",onClick:()=>g("add")})),E},[t,n,o,g,u,r,i,e]),y=c.exports.useMemo(()=>n.map((E,T)=>{var N;return _("label",{children:[f("label",{style:{color:E.pseudo===!0||((N=E.edited)==null?void 0:N.moved)===!0?"blue":"black"},children:Jl(E)}),T<n.length-1&&f("label",{children:"/"})]},E.id)}),[n]),C=c.exports.useMemo(()=>n.reduce((E,T)=>(E.includes(T.experimentType.toUpperCase())||E.push(T.experimentType.toUpperCase()),E),[]).join("/"),[n]),v=Vo({correlation:e}),S=Vo({correlation:t});return _("td",{onContextMenu:E=>{x.length>0&&m(E)},style:{backgroundColor:u.isActive?"#ff6f0057":S||v?"#f5f5dc":"inherit"},title:C,onMouseEnter:d,onMouseLeave:h,children:[y,f(Gt,{ref:l,context:x})]})}function bE({additionalColumnData:e,correlations:t,correlation:n,styleRow:o,styleLabel:s,onSaveEditEquivalences:i,onSaveEditNumericValues:l,onEditCorrelationTableCellHandler:r,spectraData:a}){var O;const u=c.exports.useRef(),d=he(),h=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const L=[];return n.link.forEach(H=>{if(H.pseudo===!1){L.push(H.signal.id),L.push(Ce(H.signal.id,"Crosshair_Y"));const z=mi(a,H.experimentID,H.signal.id,!0);z&&L.push(z)}}),L},[n,a]),m=le(h),g=c.exports.useCallback(L=>{i(n,L.target.value)},[n,i]),x=c.exports.useCallback((L,H)=>{l({correlation:n,values:aE(L.target.value,H),key:H})},[n,l]),y=c.exports.useMemo(()=>e.map(L=>{const H=[];return n.link.forEach(z=>{L.link.forEach(J=>{if(z.axis!==J.axis&&z.experimentID===J.experimentID&&z.signal.id===J.signal.id&&!H.some(V=>V.signal.id===z.signal.id)){let V=z.experimentType;z.signal&&z.signal.sign!==0&&(V+=z.signal.sign===1?" (+)":" (-)"),H.push(Uo(k(b({},z),{experimentLabel:V,axis:void 0,id:`${J.id}_${z.id}`})))}})}),f(xE,{rowCorrelation:n,columnCorrelation:L,commonLinks:H,correlations:t,spectraData:a,onEdit:r},`addColData_${n.id}_${L.id}`)}),[e,n,t,r,a]),C=c.exports.useMemo(()=>n.edited.equivalence?{color:"blue"}:{color:n.equivalence===1?"#bebebe":"black"},[n]),v=c.exports.useCallback(L=>{L.currentTarget.focus(),m.show()},[m]),S=c.exports.useCallback(L=>{L.currentTarget.blur(),m.hide()},[m]),E=Vo({correlation:n}),T=c.exports.useMemo(()=>({style:k(b({},o),{backgroundColor:m.isActive?"#ff6f0057":E?"#f5f5dc":"inherit"}),title:n.pseudo===!1&&n.link.reduce((L,H)=>(H.pseudo===!1&&!L.includes(H.experimentType.toUpperCase())&&L.push(H.experimentType.toUpperCase()),L),[]).sort().join("/"),onMouseEnter:v,onMouseLeave:S}),[n.link,n.pseudo,m.isActive,E,v,S,o]),N=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(L=>Me(L)===1&&L.pseudo===!1).map(L=>{var H;return{label:`edit 1D (${L.signal.delta.toFixed(3)})${((H=L.edited)==null?void 0:H.moved)===!0?"[MOVED]":""}`,onClick:()=>{m.hide(),d.show(f(Ki,{onClose:()=>d.close(),onEdit:r,link:L,correlationDim1:n,correlationDim2:void 0,correlations:t}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete ${n.label.origin}`,onClick:()=>{d.showConfirmDialog({message:`All signals of ${n.label.origin} (${st(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{r([n],"removeAll")}},{text:"No"}]}),m.hide()}}]):[],[n,m,d,r,t]),R=c.exports.useCallback(L=>{L.preventDefault(),u.current.handleContextMenu(L)},[u]),I=T,{title:M}=I,A=G(I,["title"]),D=M||"";return _("tr",{style:o,children:[_("td",k(b({title:D},A),{style:k(b({},T.style),{styleLabel:s}),onContextMenu:L=>{N.length>0&&R(L)},children:[eh(t,n),f(Gt,{ref:u,context:N})]})),f("td",k(b({title:D},A),{children:st(n)?(O=st(n))==null?void 0:O.toFixed(2):""})),f("td",k(b({title:D},A),{children:n.pseudo===!1?n.atomType!=="H"?f(it,{type:"number",value:n.equivalence,style:C,onSave:g}):f("text",{style:C,children:n.equivalence}):""})),f("td",k(b({title:D},A),{children:n.atomType!=="H"?f(it,{type:"text",value:n.protonsCount.join(","),style:n.edited.protonsCount?{color:"blue"}:{},onSave:L=>x(L,"protonsCount")}):""})),f("td",k(b({title:D},A),{style:k(b({},T.style),{borderRight:"1px solid"}),children:n.atomType!=="H"?f(it,{type:"text",value:n.hybridization.map(L=>`sp${L}`).join(","),style:n.edited.hybridization?{color:"blue"}:{},onSave:L=>x(L,"hybridization")}):""})),y]})}const yE=P`
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
`;function vE({correlationsData:e,filteredCorrelationsData:t,additionalColumnData:n,editEquivalencesSaveHandler:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,showProtonsAsRows:l,spectraData:r}){const a=c.exports.useMemo(()=>t?t.values.filter(d=>l?d.atomType==="H":d.atomType!=="H").map(d=>p(bE,{additionalColumnData:n,correlations:e.values,correlation:d,styleRow:{backgroundColor:"mintcream"},styleLabel:d.atomType==="H"?{color:kd(e,d)}:{},onSaveEditEquivalences:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,spectraData:r},`correlation${d.atomType}${d.id}`)):[],[t,l,n,e,o,s,i,r]),u=c.exports.useMemo(()=>n.map(d=>p(gE,{spectraData:r,correlationsData:e,correlation:d,onEdit:i},`additionalCorrelationHeader_${d.id}`)),[n,e,i,r]);return p("div",{css:yE,children:w("table",{children:[p("thead",{children:w("tr",{children:[p("th",{children:"Atom"}),p("th",{children:"\u03B4 (ppm)"}),p("th",{children:"Equiv"}),p("th",{children:"#H"}),p("th",{style:{borderRight:"1px solid"},children:"Hybrid"}),u]})}),p("tbody",{children:a})]})})}const CE=P`
  display: flex;
  width: 100%;
  font-size: 15px;
  font-weight: 300;
  white-space: nowrap;
  span {
    margin-left: 8px;
  }
`;function SE({correlationsData:e}){if(!e)return null;const t=th(e.options.mf),n=Object.keys(t).length>0?Object.keys(t).map((o,s)=>{const i=e.state[o],l=i?i.error:void 0,r=l?Yg.findIndex(a=>l[a]!==void 0):"black";return p("span",{style:{color:i?i.complete===!0&&(!l||Object.keys(l).length===0)?"green":r>=0?hi[r].color:"black":"black"},children:`${o}: ${i?i.current:"-"}/${t[o]}   `},`molFormulaView_${s}`)}):p("p",{style:{fontStyle:"italic",color:"orange"},children:"Molecular formula is not set"});return p("div",{css:CE,children:n})}var kE=c.exports.memo(SE);const wE=P`
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
`;function EE({onSave:e=()=>null,previousMF:t}){const[n,o]=c.exports.useState(""),[s,i]=c.exports.useState(!0),[l,r]=c.exports.useState(!1),a=c.exports.useCallback(h=>{if(h.trim().length===0)return!1;try{return Ra(h),!0}catch{return!1}},[]),u=c.exports.useCallback(h=>{r(!0),a(h.target.value)?(i(!0),o(h.target.value)):(i(!1),o(""))},[a]),d=c.exports.useCallback(()=>{e(l?n.trim():t)},[l,n,e,t]);return w("div",{css:wE,children:[p("input",{type:"text",onChange:u,defaultValue:t}),p("button",{type:"button",onClick:d,disabled:!s,children:s?"Set":"Invalid"})]})}const AE=P`
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
`;function TE({onClose:e,onSave:t,molecules:n,previousMF:o}){const[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{n&&n.length>0&&i(0)},[n]);const l=c.exports.useCallback(u=>{t==null||t(u),e==null||e()},[e,t]),r=c.exports.useCallback(()=>{t==null||t(n[s].mf),e==null||e()},[s,n,e,t]),a=c.exports.useCallback(u=>{i(u)},[]);return w("div",{css:AE,children:[p("div",{className:"header handle",children:p(me,{onClick:e})}),p("div",{children:p("p",{className:"info",children:"Please type in a molecular formula!"})}),p(EE,{onSave:l,previousMF:o}),w("div",{children:[p("p",{className:"optional",children:"OR"}),p("p",{className:"optional2",children:"Select a molecule as reference!"})]}),p(pd,{molecules:n,onChange:a}),p("button",{type:"button",onClick:r,children:"Set"})]})}const DE=P`
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
`;function IE({onClose:e,onSave:t,previousTolerance:n}){const[o,s]=c.exports.useState(),[i,l]=c.exports.useState({});c.exports.useEffect(()=>{if(n){s(n);const d={};Object.keys(n).forEach(h=>{d[h]=!0}),l(d)}else s(void 0)},[n]);const r=c.exports.useCallback(()=>{t==null||t(o),e==null||e()},[e,t,o]),a=c.exports.useCallback((d,h)=>{const m=d.target.value;m.trim().length>0?(s(k(b({},o),{[h]:Number(m)})),l(k(b({},i),{[h]:!0}))):l(k(b({},i),{[h]:!1}))},[i,o]),u=c.exports.useMemo(()=>o?Object.keys(o).map(d=>w("tr",{children:[p("td",{children:d}),p("td",{children:p("input",{type:"number",onChange:h=>a(h,d),defaultValue:o[d],style:i[d]?{}:{backgroundColor:"orange"}})})]},`tolerance_${d}`)):void 0,[i,a,o]);return w("div",{css:DE,children:[w("div",{className:"header handle",children:[p("span",{children:"Set Shift Tolerances"}),p(me,{onClick:e})]}),w("table",{children:[p("thead",{children:w("tr",{children:[p("th",{children:"Atom"}),p("th",{children:"Value"})]})}),p("tbody",{children:u})]}),p("button",{type:"button",onClick:r,disabled:Object.keys(i).some(d=>!i[d]),children:"Set"})]})}const ME=P`
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
`;function RE(){const{molecules:e,correlations:t,data:n,xDomain:o,yDomain:s,displayerMode:i,activeTab:l}=$(),r=Y(),a=he(),u=Ve(),[d,h]=c.exports.useState([]),[m,g]=c.exports.useState("H"),[x,y]=c.exports.useState(!1),[C,v]=c.exports.useState(!1),S=c.exports.useMemo(()=>{const V=j=>{if(j.pseudo===!0)return!1;const W=l.split(",").map(ot=>Sd(ot)),ne=1e4,Pe=o[0]*ne,dt=o[1]*ne,Ut=s[0]*ne,Wt=s[1]*ne;if(i===X.DM_1D){const ot=j.link.find(qt=>Me(qt)===1);if(!ot)return!1;let Kt=Lr(ot);if(Kt===void 0)return!1;if(Kt*=ne,Ie(n,ot.experimentID,!0)&&W[0]===j.atomType&&Kt>=Pe&&Kt<=dt||j.link.some(qt=>{const Md=Ie(n,qt.experimentID,!0);return wd(Md,qt,ne,Pe,dt)}))return!0}else if(i===X.DM_2D){if(!W.includes(j.atomType))return!1;const ot=j.link.find(Dn=>Me(Dn)===2);if(!ot)return!1;const Kt=Ie(n,ot.experimentID,!0);if(zo(Kt,ot,ne,Pe,dt,Ut,Wt))return!0;if(j.link.some(Dn=>{const qt=Ie(n,Dn.experimentID,!0);return zo(qt,Dn,ne,Pe,dt,Ut,Wt)}))return!0}return!1};if(t){const j=C?t.values.filter(W=>V(W)):t.values;return k(b({},t),{values:j})}},[l,t,i,C,n,o,s]),E=c.exports.useCallback(V=>{r({type:ic,payload:{mf:V}})},[r]),T=c.exports.useCallback(V=>{r({type:lc,payload:{tolerance:V}})},[r]),N=c.exports.useCallback(()=>{a.show(p(TE,{onClose:()=>a.close(),onSave:E,molecules:e,previousMF:t.options.mf}))},[t,E,a,e]),R=c.exports.useCallback(()=>{a.show(p(IE,{onClose:()=>a.close(),onSave:T,previousTolerance:t.options.tolerance}))},[t,T,a]),M=c.exports.useMemo(()=>["H","H-H"].concat(t?t.values.map(j=>j.atomType).filter((j,W,ne)=>j!=="H"&&ne.indexOf(j)===W):[]).map(j=>({key:j,label:j,value:j})),[t]);c.exports.useEffect(()=>{const V=m.split("-")[0];h(S?S.values.filter(j=>j.atomType===V).reverse():[])},[S,m]);const A=c.exports.useCallback((V,j)=>{r({type:zs,payload:{id:V.id,correlation:k(b({},V),{equivalence:j,edited:k(b({},V.edited),{equivalence:j!==1})})}})},[r]),D=c.exports.useCallback(({correlation:V,values:j,key:W})=>{r({type:zs,payload:{id:V.id,correlation:k(b({},V),{[W]:j,edited:k(b({},V.edited),{[W]:!0})}),options:{skipDataUpdate:!0}}})},[r]),I=c.exports.useCallback((V,j)=>{r({type:oc,payload:{correlations:V,options:j}})},[r]),O=c.exports.useCallback(V=>{r({type:sc,payload:{correlation:V,assignmentData:u}})},[u,r]),L=c.exports.useCallback(V=>{const j=Me(V);if(j===1){const W=Ie(n,V.experimentID,!1),ne=fi(W,V.signal.id),Pe=Ha(W,V.signal.id);r({type:vc,payload:{spectrum:W,range:ne,signal:Pe,assignmentData:u}})}else if(j===2){const W=Ie(n,V.experimentID,!1),ne=Io(W,V.signal.id),Pe=Bn(W,V.signal.id);r({type:Nc,payload:{spectrum:W,zone:ne,signal:Pe,assignmentData:u}})}},[u,r,n]),H=c.exports.useCallback(V=>{var W;if(Me(V)===2){const ne=Ie(n,V.experimentID,!1),Pe=Io(ne,V.signal.id),dt=Bn(ne,V.signal.id);r({type:Pc,payload:{spectrum:ne,zone:Pe,signal:dt,pathLength:(W=V.signal.j)==null?void 0:W.pathLength}})}},[r,n]),z=c.exports.useCallback((V,j,W,ne)=>{j==="add"||j==="move"||j==="remove"||j==="unmove"||j==="setPathLength"?(W&&W.pseudo===!1&&(j==="remove"?L(W):j==="setPathLength"&&H(W)),I(V,ne)):j==="removeAll"&&O(V[0])},[H,O,L,I]),J=c.exports.useCallback(()=>{v(!C)},[C]);return w("div",{css:ME,children:[w(nt,{canDelete:!1,counter:t?t.values.length:0,onFilter:J,filterToolTip:C?"Show all correlations":"Hide correlations out of view",filterIsActive:C,counterFiltered:S==null?void 0:S.values.length,children:[p(we,{title:`Set molecular formula (${t.options.mf})`,popupPlacement:"right",children:p("button",{type:"button",onClick:N,children:p(nh,{})})}),p(we,{title:"Set shift tolerance",popupPlacement:"right",children:p("button",{type:"button",onClick:R,children:p(oh,{})})}),w("div",{className:"extra-header-content",children:[p("div",{className:"overview-container",children:p(kE,{correlationsData:t})}),p("div",{className:"table-view-selection",children:w("span",{children:[p("label",{children:"View:"}),p(Ne,{onChange:V=>{g(V),y(V==="H-H")},data:M,defaultValue:m,style:{fontSize:"12px",width:"70px",height:"18px",border:"1px solid grey"}})]})})]})]}),p(vE,{correlationsData:t,filteredCorrelationsData:S,additionalColumnData:d,editEquivalencesSaveHandler:A,onSaveEditNumericValues:D,onEditCorrelationTableCellHandler:z,showProtonsAsRows:x,spectraData:n})]})}var NE=c.exports.memo(RE);const Es={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},PE=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function FE({nucleus:e,innerRef:t}){const n=re(),o=ie(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const r=e.reduce((u,d)=>(u[d]=Iv,u),{}),a=ut(o,"formatting.panels.zones");s.current.setValues(a||r)}},[e,o]);c.exports.useEffect(()=>{i()},[i]);const l=c.exports.useCallback(r=>{o.dispatch({type:kn,payload:{key:"zones",value:r}}),n.success("zones preferences saved successfully")},[n,o]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Es.container,children:f(ae,{onSubmit:l,ref:s,children:e==null?void 0:e.map(r=>_("div",{style:Es.groupContainer,children:[f(Le,{style:Es.header,value:r}),PE.map(a=>f(_e,{label:a.label,checkControllerName:`${r}.${a.checkController}`,formatControllerName:`${r}.${a.formatController}`},a.id))]},r))})})}const _E=c.exports.memo(FE);function LE(e,t){const n=fs();return f(_E,{innerRef:t,nucleus:n})}var OE=c.exports.forwardRef(LE);const $E=P`
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
`;function HE({signalIndex:e}){var o,s,i,l,r,a,u,d,h,m,g,x,y,C,v,S,E,T;const{errors:t,values:n}=pe();return w("div",{css:$E,children:[p("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[p(Gs,{name:`signals[${e}].j.pathLength.from`,defaultValue:((s=(o=n.signals[e].j)==null?void 0:o.pathLength)==null?void 0:s.from)||((i=ye[n.experimentType])==null?void 0:i.from)||1,label:"Min: ",style:{input:{color:((a=(r=(l=t.signals)==null?void 0:l[e].j)==null?void 0:r.pathLength)==null?void 0:a.from)?"red":"black"}},min:1,max:((d=(u=n.signals[e].j)==null?void 0:u.pathLength)==null?void 0:d.to)||((h=ye[n.experimentType])==null?void 0:h.to),pattern:"[1-9]+"}),p(Gs,{name:`signals[${e}].j.pathLength.to`,defaultValue:((g=(m=n.signals[e].j)==null?void 0:m.pathLength)==null?void 0:g.to)||((x=ye[n.experimentType])==null?void 0:x.to)||1,label:"Max: ",style:{input:{color:((v=(C=(y=t.signals)==null?void 0:y[e].j)==null?void 0:C.pathLength)==null?void 0:v.to)?"red":"black"}},min:((E=(S=n.signals[e].j)==null?void 0:S.pathLength)==null?void 0:E.from)||((T=ye[n.experimentType])==null?void 0:T.from)||1,pattern:"[1-9]+"})]})]})}function zE({signalIndex:e}){return f(HE,{signalIndex:e})}const VE=P`
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
`,BE=P`
  color: red;
`,jE=P`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function XE(){const{values:e,setFieldValue:t,errors:n}=pe(),o=c.exports.useCallback(r=>!!((n==null?void 0:n.signals)&&(n==null?void 0:n.signals[r])),[n]),s=c.exports.useMemo(()=>e.signals.length>0?e.signals.map((a,u)=>p(Re,{tabid:`${u}`,tabstyles:o(u)?BE:jE,render:()=>w("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"11px"},children:[w("span",{children:["\u{1D6C5}",p("sub",{children:a.x.nucleus}),": ",a.x.delta.toFixed(2)]}),w("span",{children:["\u{1D6C5}",p("sub",{children:a.y.nucleus}),": ",a.y.delta.toFixed(2)]})]}),children:p(zE,{signalIndex:u})},`signalForm_zone${u}`)):[],[o,e.signals]),i=c.exports.useCallback(({tabid:r})=>{t("activeTab",r)},[t]),l=c.exports.useCallback(({tabid:r})=>{const a=e.signals.filter((u,d)=>d!==Number(r));t("signals",a)},[t,e.signals]);return w("div",{children:[p("div",{css:VE}),p(An,{activeTab:e.activeTab,onClick:i,onDelete:l,children:s})]})}const YE=()=>c.exports.useMemo(()=>ee().shape({signals:Ms().of(ee().shape({j:ee().shape({pathLength:ee().shape({from:ce().required().positive().integer(),to:ce().required().positive().integer()})})})).min(1,"There must be at least one signal in a zone!")}),[]),GE=P`
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
`;function ZE({onSaveEditZoneModal:e=()=>null,onCloseEditZoneModal:t=()=>null,onZoomEditZoneModal:n=()=>null,rowData:o}){const s=c.exports.useRef(null),i=YE(),l=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{l()},[l]);const r=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(async d=>{const h=k(b({},o),{signals:d.signals.map(m=>{var g,x;return Cd((g=m.j)==null?void 0:g.pathLength,o.tableMetaInfo.experiment)&&((x=m.j)==null||delete x.pathLength,m.j&&Object.keys(m.j).length===0&&delete m.j),m})});await e(h),r()},[r,e,o]),u=c.exports.useMemo(()=>({activeTab:"0",signals:o.signals.map(d=>{var h,m;return k(b({},d),{j:b({pathLength:{from:((h=ye[o.tableMetaInfo.experiment])==null?void 0:h.from)||1,to:((m=ye[o.tableMetaInfo.experiment])==null?void 0:m.to)||1}},d.j)})})}),[o.signals,o.tableMetaInfo.experiment]);return p("div",{css:GE,children:w(ae,{ref:s,initialValues:u,validationSchema:i,onSubmit:a,children:[w("div",{className:"header handle",children:[p(gn,{onClick:l,className:"zoom-button",children:p(Kn,{title:"Set to default view on range in spectrum"})}),p("span",{children:"Zone and Signal edition"}),p(Ui,{onClick:()=>s.current.submitForm(),popupTitle:"Save and exit"}),p(me,{onClick:r})]}),p(XE,{})]})})}const UE={marginLeft:2,marginRight:2,border:"none",height:"20px"};function WE({rowData:e,rowSpanTags:t}){const n=Y(),o=Ve(),s=he(),i=c.exports.useCallback(d=>{n({type:Uc,payload:{rowData:e,value:d}})},[n,e]),l=c.exports.useCallback(()=>{n({type:ls,payload:{id:e.id,assignmentData:o}})},[o,n,e]),r=c.exports.useCallback(()=>{const d=Math.abs(e.x.from-e.x.to)*10;n({type:ts,xDomain:e.x.from<=e.x.to?[e.x.from-d,e.x.to+d]:[e.x.to-d,e.x.from+d]});const h=Math.abs(e.y.from-e.y.to)*10;n({type:vi,yDomain:e.y.from<=e.y.to?[e.y.from-h,e.y.to+h]:[e.y.to-h,e.y.from+h]})},[n,e.x.from,e.x.to,e.y.from,e.y.to]),a=c.exports.useCallback(d=>{n({type:Wc,payload:{editedRowData:d}})},[n]),u=c.exports.useCallback(()=>{n({type:lo,payload:{selectedTool:F.editRange.id,tempRange:e}}),s.show(f(ZE,{onCloseEditZoneModal:()=>s.close(),onSaveEditZoneModal:a,onZoomEditZoneModal:()=>r(),rowData:e}),{position:te.MIDDLE_RIGHT,transition:Je.SCALE,isBackgroundBlur:!1})},[n,s,e,a,r]);return _(c.exports.Fragment,{children:[f("td",{children:f(Ne,{onChange:d=>{i(d)},data:ti,defaultValue:e.tableMetaInfo.signal.kind,style:UE})}),_("td",k(b({},t),{children:[f("button",{type:"button",className:"delete-button",onClick:l,children:f(vt,{})}),f("button",{type:"button",className:"zoom-button",onClick:r,children:f(Kn,{title:"Zoom to zone in spectrum"})}),f("button",{type:"button",className:"edit-button",onClick:u,children:f(Nr,{color:"blue"})})]}))]})}function tr({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:l,showUnlinkButton:r,setShowUnlinkButton:a}){return f("td",k(b({},o),{onClick:u=>s(u,t,l),style:n.isActive||t.isActive&&t.activeAxis===l?{color:"red",fontWeight:"bold"}:void 0,children:B(e,`tableMetaInfo.signal.${l}.diaIDs`,[]).length>0?_("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e.tableMetaInfo.signal[l].diaIDs.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:r?"visible":"hidden",padding:0,margin:0},onClick:u=>i(u,!1,l),children:f(Zo,{color:"red"})})})]}):t.isActive&&t.activeAxis===l?"0":""}))}function KE({rowData:e,assignmentSignal:t,onHoverSignalX:n,onHoverSignalY:o,showUnlinkButtonSignalX:s,showUnlinkButtonSignalY:i,setShowUnlinkButtonSignalX:l,setShowUnlinkButtonSignalY:r,onClick:a,onUnlink:u,highlightSignalX:d,highlightSignalY:h}){return _(c.exports.Fragment,{children:[f(tr,{rowData:e,assignment:t,highlight:d,onHover:n,onClick:a,onUnlink:u,axis:"x",showUnlinkButton:s,setShowUnlinkButton:l}),f(tr,{rowData:e,assignment:t,highlight:h,onHover:o,onClick:a,onUnlink:u,axis:"y",showUnlinkButton:i,setShowUnlinkButton:r})]})}function qE({rowData:e,onHoverSignalX:t,onHoverSignalY:n}){const o=Y(),s=B(e,"tableMetaInfo.signal.x.delta",null),i=B(e,"tableMetaInfo.signal.y.delta",null),l=B(e,"tableMetaInfo.signal.id",void 0),r=c.exports.useCallback(u=>{const d=u.target.value;o({type:Vs,payload:{zoneID:e.id,signal:{id:l,x:d}}})},[o,l,e.id]),a=c.exports.useCallback(u=>{const d=u.target.value;o({type:Vs,payload:{zoneID:e.id,signal:{id:l,y:d}}})},[o,l,e.id]);return _(c.exports.Fragment,{children:[f("td",k(b({},t),{children:s!==null?f(it,{value:s.toFixed(2),onSave:r,type:"number",style:{padding:"0.1rem 0.4rem"}}):""})),f("td",k(b({},n),{children:i!==null?f(it,{value:i.toFixed(2),onSave:a,type:"number",style:{padding:"0.1rem 0.4rem"}}):""}))]})}function nr({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:l,showUnlinkButton:r,setShowUnlinkButton:a,rowSpanTags:u}){return f("td",k(b(b({},u),o),{onClick:d=>s(d,t,l),children:B(e,`${l}.nbAtoms`,0)>0?B(e,`${l}.diaIDs`,0).length>0?_("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e[l].nbAtoms," ","(",f("span",{style:t.isActive&&t.activeAxis===l||t.isOnHover&&t.onHoverAxis===l||n.isActive?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"},children:B(e,`${l}.diaIDs`,[]).length}),")"," ",f("sup",{children:f("button",{type:"button",style:{visibility:r?"visible":"hidden",padding:0,margin:0},onClick:d=>i(d,!0,l),children:f(Zo,{color:"red"})})})]}):t.isActive&&t.activeAxis===l?_("div",{children:[`${B(e,`${l}.nbAtoms`,"")} (`,f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):e[l].nbAtoms:t.isActive&&t.activeAxis===l?_("div",{children:["0 (",f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):""}))}function JE({rowData:e,assignmentZone:t,onHoverZoneX:n,onHoverZoneY:o,showUnlinkButtonZoneX:s,showUnlinkButtonZoneY:i,setShowUnlinkButtonZoneX:l,setShowUnlinkButtonZoneY:r,rowSpanTags:a,onClick:u,onUnlink:d,highlightZoneX:h,highlightZoneY:m}){return _(c.exports.Fragment,{children:[f(nr,{rowData:e,assignment:t,highlight:h,onHover:n,onClick:u,onUnlink:d,axis:"x",showUnlinkButton:s,setShowUnlinkButton:l,rowSpanTags:a}),f(nr,{rowData:e,assignment:t,highlight:m,onHover:o,onClick:u,onUnlink:d,axis:"y",showUnlinkButton:i,setShowUnlinkButton:r,rowSpanTags:a})]})}const QE={backgroundColor:"#ff6f0057"},e2={backgroundColor:"#f5f5dc"};function t2({rowData:e,onUnlink:t,onContextMenu:n,rowIndex:o}){const s=rt(e.id),i=le([s.id]),l=le([Ce(s.id,"X")].concat(s.assigned.x||[])),r=le([Ce(s.id,"Y")].concat(s.assigned.y||[])),a=rt(e.tableMetaInfo.id),u=le([Ce(a.id,"X")].concat(a.assigned.x||[],Ce(a.id,"Crosshair"))),d=le([Ce(a.id,"Y")].concat(a.assigned.y||[],Ce(a.id,"Crosshair"))),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),[y,C]=c.exports.useState(!1),[v,S]=c.exports.useState(!1),E=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:B(e,"tableMetaInfo.hide",!1)===!0?{display:"none"}:null}),[e]),T=c.exports.useCallback((I,O,L)=>{I&&I.stopPropagation(),t(e,O,e.tableMetaInfo.signalIndex,L),L==="x"?O!==void 0?O?(m(!1),s.removeAll("x")):(C(!1),a.removeAll("x")):(m(!1),C(!1)):L==="y"?O!==void 0?O?(x(!1),s.removeAll("y")):(S(!1),a.removeAll("y")):(x(!1),S(!1)):(m(!1),s.removeAll("x"),C(!1),a.removeAll("x"),x(!1),s.removeAll("y"),S(!1),a.removeAll("y"))},[a,s,t,e]),N=c.exports.useCallback((I,O,L)=>{I.stopPropagation(),O.onClick(L)},[]),R=c.exports.useMemo(()=>({onMouseEnter:()=>{s.onMouseEnter("x"),l.show()},onMouseLeave:()=>{s.onMouseLeave("x"),l.hide()}}),[s,l]),M=c.exports.useMemo(()=>({onMouseEnter:()=>{s.onMouseEnter("y"),r.show()},onMouseLeave:()=>{s.onMouseLeave("y"),r.hide()}}),[s,r]),A=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("x"),u.show()},onMouseLeave:()=>{a.onMouseLeave("x"),u.hide()}}),[a,u]),D=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("y"),d.show()},onMouseLeave:()=>{a.onMouseLeave("y"),d.hide()}}),[a,d]);return w("tr",k(b({onContextMenu:I=>n(I,e),style:i.isActive||s.isActive?QE:B(e,"tableMetaInfo.isConstantlyHighlighted",!1)===!0?e2:null},i.onHover),{children:[p("td",k(b({},E),{children:o+1})),p(qE,{rowData:e,onHoverSignalX:A,onHoverSignalY:D}),p(KE,{rowData:e,assignmentSignal:a,onHoverSignalX:A,onHoverSignalY:D,showUnlinkButtonSignalX:y,showUnlinkButtonSignalY:v,setShowUnlinkButtonSignalX:I=>C(I),setShowUnlinkButtonSignalY:I=>S(I),onClick:N,onUnlink:T,highlightSignalX:u,highlightSignalY:d}),p(JE,{rowData:e,assignmentZone:s,onHoverZoneX:R,onHoverZoneY:M,showUnlinkButtonZoneX:h,showUnlinkButtonZoneY:g,setShowUnlinkButtonZoneX:I=>m(I),setShowUnlinkButtonZoneY:I=>x(I),rowSpanTags:E,onClick:N,onUnlink:T,highlightZoneX:l,highlightZoneY:r}),p(WE,{rowData:e,rowSpanTags:E})]}))}const n2=P`
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
`;function o2({tableData:e,onUnlink:t,context:n,nuclei:o,experiment:s}){const i=c.exports.useRef(null),l=c.exports.useCallback((m,g)=>{Bt(m)||(m.preventDefault(),i.current.handleContextMenu(m,g))},[i]),r=c.exports.useMemo(()=>{const m=[];return e.forEach((g,x)=>{g.signals.length===1?m.push(k(b({},g),{tableMetaInfo:k(b({},g.tableMetaInfo),{signal:g.signals[0],rowIndex:x,signalIndex:0,id:g.signals[0].id,experiment:s,nuclei:o})})):g.signals.length>1&&g.signals.forEach((y,C)=>{let v=!1,S=null;C<g.signals.length-1&&C===0?S=g.signals.length:v=!0,m.push(k(b({},g),{tableMetaInfo:k(b({},g.tableMetaInfo),{signal:y,rowSpan:S,hide:v,rowIndex:x,signalIndex:C,id:y.id,experiment:s})}))})}),m},[s,o,e]),{items:a,isSortedDesc:u,onSort:d}=bd(r),h=c.exports.useMemo(()=>a.map((m,g)=>p(t2,{rowIndex:g,rowData:m,onUnlink:t,onContextMenu:(x,y)=>l(x,y)},`${m.tableMetaInfo.id}`)),[l,a,t]);return w("div",{children:[w("table",{css:n2,children:[w("thead",{children:[w("tr",{children:[p("th",{rowSpan:2,children:"#"}),p("th",{colSpan:2,children:"\u03B4 (ppm)"}),p("th",{colSpan:2,children:p(Pr,{})}),p("th",{colSpan:2,children:"\u03A3"}),p("th",{rowSpan:2,children:"Kind"}),p("th",{rowSpan:2,children:""})]}),w("tr",{children:[p("th",k(b({id:"tableMetaInfo.signal.x.delta"},d),{children:w(Jt,{text:"F2",children:[o[0]," ",u("tableMetaInfo.signal.x.delta").content]})})),p("th",k(b({id:"tableMetaInfo.signal.y.delta"},d),{children:w(Jt,{text:"F1",children:[o[1]," ",u("tableMetaInfo.signal.y.delta").content]})})),p("th",{children:p(Jt,{text:"F2",children:o[0]})}),p("th",{children:p(Jt,{text:"F1",children:o[1]})}),p("th",{children:p(Jt,{text:"F2",children:o[0]})}),p("th",{children:p(Jt,{text:"F1",children:o[1]})})]})]}),p("tbody",{children:h})]}),p(Gt,{ref:i,context:n})]})}function Jt(e){return w(Qe,{children:[p("div",{style:{position:"absolute",fontSize:8,color:"#3539E6"},children:e.text}),p("div",{style:{marginLeft:5},children:e.children})]})}const s2=P`
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
`;function i2({zones:e,activeTab:t,xDomain:n,yDomain:o,experiment:s}){const[i,l]=c.exports.useState(!1),r=Ve(),a=Y(),u=he(),[d,h]=c.exports.useState(!1),m=c.exports.useRef(),g=c.exports.useMemo(()=>{const R=(A,D,I,O)=>(A=A*1e4,D=D*1e4,I=I*1e4,O=O*1e4,(D>=n[0]*1e4&&A<=n[1]*1e4||A<=n[0]*1e4&&D>=n[1]*1e4)&&(O>=o[0]*1e4&&I<=o[1]*1e4||I<=o[0]*1e4&&O>=o[1]*1e4)),M=A=>A.filter(D=>R(D.x.from,D.x.to,D.y.from,D.y.to));if(e.values)return(i?M(e.values):e.values).map(D=>k(b({},D),{tableMetaInfo:{isConstantlyHighlighted:R(D.x.from,D.x.to,D.y.from,D.y.to)}}))},[e,i,n,o]),x=c.exports.useCallback(()=>{l(!i)},[i]),y=c.exports.useCallback((R=null,M=void 0,A=-1,D=void 0)=>{a({type:Kc,payload:{zoneData:R,assignmentData:r,isOnZoneLevel:M,signalIndex:A,axis:D}})},[r,a]),C=c.exports.useCallback(()=>{y()},[y]),v=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:C},{text:"No"}]})},[C,u]),S=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All zones will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{a({type:ls,payload:{assignmentData:r}})}},{text:"No"}]})},[r,a,u]),E=c.exports.useCallback(()=>{h(!d)},[d]),T=c.exports.useCallback(()=>{m.current.saveSetting(),h(!1)},[]),N=c.exports.useCallback(R=>{de.emit("onZonesVisibilityChange",{key:R})},[]);return p(Qe,{children:w("div",{css:[At,s2,d&&P`
              th {
                position: relative;
              }
            `],children:[!d&&w(nt,{counter:e.values?e.values.length:0,onDelete:S,deleteToolTip:"Delete All Zones",onFilter:x,filterToolTip:i?"Show all zones":"Hide zones out of view",filterIsActive:i,counterFiltered:g==null?void 0:g.length,showSettingButton:!0,onSettingClick:E,children:[p(we,{title:"Remove all Assignments",popupPlacement:"right",children:p("button",{className:"remove-assignments-btn",type:"button",onClick:v,disabled:!e.values||e.values.length===0,children:p(Mr,{})})}),p(Ye,{popupTitle:"show/hide zones",popupPlacement:"right",defaultValue:!0,onClick:()=>N("zones"),children:p("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"z"})}),p(Ye,{popupTitle:"show/hide signals",popupPlacement:"right",defaultValue:!0,onClick:()=>N("signals"),children:p("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"s"})}),p(Ye,{popupTitle:"show/hide peaks",popupPlacement:"right",defaultValue:!0,onClick:()=>N("peaks"),children:p("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"p"})})]}),d&&p(Tn,{onSave:T,onClose:E}),p("div",{className:"inner-container",children:d?p(OE,{ref:m}):p("div",{className:"table-container",children:g&&g.length>0?p(o2,{tableData:g,onUnlink:y,nuclei:t&&t.split(",").length===2?t.split(","):["?","?"],experiment:s}):p(Zt,{})})})]})})}const l2=c.exports.memo(i2),r2={zones:{}};function a2(){const{displayerKey:e,xDomain:t,yDomain:n,activeTab:o}=$(),{zones:s,info:i}=ve(r2),l=ie();return p(l2,{xDomain:t,yDomain:n,activeTab:o,displayerKey:e,preferences:l,zones:s,experiment:i.experiment})}const Bo={data:{solvent:{description:"Solvent database",value:d2([...sh,...ih])}}};function or(e,t){const o=(Bo.data[e]?Bo.data[e].value:[]).filter(l=>l.nucleus===t);return{data:o,getSolvents:()=>c2(o),search:(l=[])=>lh(o,{keywords:l})}}function c2(e){const t=[],n=new Map;for(const o of e)n.has(o.solvent)||(n.set(o.solvent,!0),t.push(o.solvent));return t}function u2(){return Object.keys(Bo.data).map(e=>{const{description:t}=Bo.data[e];return{id:e,name:t}})}function d2(e){return e.map(t=>(t.ranges=t.ranges.map(n=>b({id:K()},n)),t),[])}function p2(e){const t=[];let n=0;for(const l of e){let r=[];const o=l,{ranges:a}=o,u=G(o,["ranges"]);for(const d of a){r.push(d.id||K());const s=d,{signals:h=[]}=s,m=G(s,["signals"]);for(const g of h){const i=g,{js:x=[]}=i,y=G(i,["js"]),C=h2(x),v=k(b(b(b(b({},u),m),y),C),{index:n,id:r,ranges:a});t.push(v)}}n++}return t}function h2(e){if(e&&e.length>0){const{coupling:t,multiplicity:n}=e.reduce((o,{coupling:s,multiplicity:i})=>(o.coupling.push(s.toFixed(1)),o.multiplicity+=i,o),{coupling:[],multiplicity:""});return{multiplicity:n,coupling:t.join(",")}}else return{multiplicity:"s",coupling:""}}const sr={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputContainer:{flex:4,borderRadius:"5px"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"100px"}};function f2(e,t){const n=ie(),o=re(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{const r=ut(n,"formatting.panels.database");s.current.setValues(r||Qu)},[n]);c.exports.useEffect(()=>{i()},[i]);const l=c.exports.useCallback(r=>{n.dispatch({type:kn,payload:{key:"database",value:r}}),o.success("database preferences saved successfully")},[o,n]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:sr.container,children:f(ae,{onSubmit:l,ref:s,children:_("div",{style:sr.groupContainer,children:[f(_e,{label:"Smiles",checkControllerName:"showSmiles",hideFormat:!0}),f(_e,{label:"Solvent",checkControllerName:"showSolvent",hideFormat:!0}),f(_e,{label:"Names",checkControllerName:"showNames",hideFormat:!0}),f(_e,{label:"Range",checkControllerName:"showRange",hideFormat:!0}),f(_e,{label:"\u03B4 (ppm)",checkControllerName:"showDelta",hideFormat:!0}),f(_e,{label:"Assignment",checkControllerName:"showAssignment",hideFormat:!0}),f(_e,{label:"J (Hz)",checkControllerName:"showCoupling",hideFormat:!0}),f(_e,{label:"Multiplicity",checkControllerName:"showMultiplicity",hideFormat:!0})]})})})}var m2=c.exports.forwardRef(f2);const As={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},g2=[{showWhen:"showNames",index:1,Header:"names",accessor:e=>e.names?e.names.join(","):"",enableRowSpan:!0,style:b({width:"100px",minWidth:"100px",maxWidth:"100px"},As)},{showWhen:"showRange",index:2,Header:"From - To",accessor:e=>`${e.from.toFixed(2)} - ${e.to.toFixed(2)}`,enableRowSpan:!0},{showWhen:"showDelta",index:3,Header:"\u03B4 (ppm)",accessor:"delta"},{showWhen:"showAssignment",index:4,Header:"Assignment",accessor:"assignment"},{showWhen:"showMultiplicity",index:5,Header:"Multi.",accessor:"multiplicity"},{showWhen:"showCoupling",index:6,Header:"J (Hz)",accessor:"coupling",style:b({width:"60px",minWidth:"60px"},As)},{showWhen:"showSolvent",index:7,Header:"Solvent",accessor:"solvent",style:b({width:"80px",minWidth:"80px"},As)},{showWhen:"showSmiles",index:8,Header:"Smiles",accessor:"index",enableRowSpan:!0,Cell:({row:e})=>p("div",{className:"smiles-container",style:{width:"100px",display:"block",overflow:"hidden"},children:(e==null?void 0:e.original.smiles)&&p(rh,{height:60,width:60,smiles:e.original.smiles})})}];function x2({data:e,onAdd:t}){const n=ie(),o=c.exports.useMemo(()=>[{index:10,Header:"",width:"1%",maxWidth:"24px",minWidth:"24px",id:"add-button",accessor:"index",enableRowSpan:!0,Cell:({row:i})=>p("button",{type:"button",className:"add-button",onClick:()=>t(i),children:p(bn,{})})}],[t]),s=c.exports.useMemo(()=>{const i=ut(n,"formatting.panels.database",Qu);let l=[...o];for(const a of g2){const r=a,{showWhen:u}=r,d=G(r,["showWhen"]);i[u]&&hs(l,d)}return l.sort((a,u)=>a.index-u.index)},[o,n]);return e&&e.length>0?p(ps,{data:e,columns:s,highlightedSource:ue.DATABASE,groupKey:"index",approxItemHeight:30,enableVirtualScroll:!0}):p(Zt,{})}var b2=c.exports.memo(x2);const y2=P`
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
`,ir={solvent:"",searchKeywords:""};function v2({nucleus:e,selectedTool:t}){const n=Y(),{handleChangeOption:o}=ms(),s=Be(e),[i,l]=c.exports.useState(!1),r=c.exports.useRef(),[a,u]=c.exports.useState(ir),d=c.exports.useRef(null),[h,m]=c.exports.useState({data:[],databases:[],solvents:[]}),{item:g}=ah("Database"),x=c.exports.useCallback(()=>{l(!i)},[i]),y=c.exports.useCallback(()=>{r.current.saveSetting(),l(!1)},[]),C=c.exports.useCallback(R=>{if(typeof R=="string"||R===-1){const M=String(R);u(A=>k(b({},A),{solvent:M}))}else u(M=>k(b({},M),{searchKeywords:R.target.value}))},[]);c.exports.useEffect(()=>{(g==null?void 0:g.isOpen)&&setTimeout(()=>{const R=k2(u2());d.current=or(R[0].key,e);const M=d.current.data,A=lr(d.current.getSolvents());m({data:M,databases:R,solvents:A})})},[g==null?void 0:g.isOpen,e]),c.exports.useEffect(()=>{const{solvent:R,searchKeywords:M}=a;setTimeout(()=>{if(d.current)if(!R&&!M){const A=d.current.data,D=lr(d.current.getSolvents());m(I=>k(b({},I),{data:A,solvents:D}))}else{const A=[...M.split(",")];R!=="-1"&&A.unshift(`solvent:${R}`);const D=d.current.search(A);m(I=>k(b({},I),{data:D}))}})},[a]),c.exports.useEffect(()=>{function R(M){t===F.databaseRangesSelection.id&&u(A=>{const D=A.searchKeywords?A.searchKeywords.split(","):[],[I,O]=M.range,L=[...D,`delta:${s(I)}..${s(O)}`].join(",");return k(b({},A),{searchKeywords:L})})}return de.on("brushEnd",R),()=>{de.off("brushEnd",R)}},[s,t]);const v=c.exports.useCallback(R=>{d.current=or(R,e),u(ir)},[e]),S=c.exports.useMemo(()=>p2(h.data),[h.data]),E=c.exports.useCallback(R=>{const{index:M}=R.original,{ranges:A,solvent:D,names:I=[]}=h.data[M];n({type:pu,payload:{ranges:A,info:{solvent:D,nucleus:e,name:I[0]}}})},[n,e,h.data]),T=c.exports.useCallback(()=>{u(R=>k(b({},R),{searchKeywords:""}))},[]),N=c.exports.useCallback(R=>{const M=R?F.databaseRangesSelection.id:F.zoom.id;o(M)},[o]);return w("div",{css:[At,y2,i&&P`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!i&&w(nt,{showSettingButton:!0,onSettingClick:x,canDelete:!1,className:"header",children:[p(Ye,{defaultValue:t===F.databaseRangesSelection.id,popupTitle:"Filter by select ranges",popupPlacement:"right",onClick:N,children:p(ch,{style:{pointerEvents:"none",fontSize:"12px",transform:"rotate(90deg)"}})},`${t}`),p(Ne,{style:{flex:2},data:h.databases,onChange:v}),p(Ne,{style:{flex:1},data:h.solvents,onChange:C}),p(yt,{value:a.searchKeywords,renderIcon:()=>p(uh,{}),style:{inputWrapper:{flex:3}},className:"search-input",type:"text",debounceTime:250,placeholder:"Search for parameter...",onChange:C,onClear:T,canClear:!0})]}),i&&p(Tn,{onSave:y,onClose:x}),p("div",{className:"inner-container",children:i?p(m2,{ref:r}):p(b2,{data:S,onAdd:E})})]})}const C2=c.exports.memo(v2);function S2(){const{activeTab:e,toolOptions:{selectedTool:t}}=$();return e?p(C2,{nucleus:e,selectedTool:t}):p("div",{})}function lr(e){const t=e.map(n=>({key:n,label:n,value:n}),[]);return t.unshift({key:"-1",label:"All",value:"-1"}),t}function k2(e){return e.map(({id:t,name:n})=>({key:t,value:t,label:n}))}const w2={width:"100%",height:"100%",padding:"0px",display:"flex",flexDirection:"column"};function E2({children:e,className:t,style:n,testID:o}){return f("div",{className:t,style:b(b({},w2),n),"data-test-id":o,children:e})}var A2=c.exports.memo(E2);const T2={width:"100%",overflowY:"auto",display:"flex",flexDirection:"column",padding:"5px 0px",color:"gray"};function D2({children:e,className:t,style:n}){const o=c.exports.useMemo(()=>c.exports.Children.map(e,s=>c.exports.cloneElement(s,{style:b({borderBottom:"0.55px solid #d8d8d8"},s.props.style)})),[e]);return f("div",{className:t,style:b(b({},T2),n),children:o})}var I2=c.exports.memo(D2);const M2={width:"100%",display:"flex",alignItems:"flex-start"};function R2(e){return e.toLowerCase()==="top"?"flex-start":e.toLowerCase()==="bottom"?"flex-end":"center"}function N2({children:e,className:t,style:n,align:o="center",vAlign:s="center",size:i=1,onClick:l=()=>null}){return f("div",{className:t,style:b(k(b({},M2),{alignItems:R2(s),textAlign:o,flex:i}),n),onClick:l,children:e})}var zn=c.exports.memo(N2);const P2={width:"100%",display:"flex",padding:"0px 5px",color:"#424242",backgroundColor:"#d8d8d8",borderBottom:"0.55px solid #d8d8d8",fontSize:11,fontWeight:"bold"};function F2({children:e,className:t,style:n}){return f("div",{className:t,style:b(b({},P2),n),children:e})}var _2=c.exports.memo(F2);const L2={width:"100%",display:"flex",padding:"5px 0px"};function O2({children:e,className:t,style:n,onClick:o=()=>null}){return f("div",{className:t,style:b(b({},L2),n),onClick:o,children:e})}var Ad=c.exports.memo(O2);function $2({filters:e,spectraCounter:t,selectedTool:n,activeFilterID:o}){const s=Y(),i=he(),l=re(),r=c.exports.useRef({index:null}),a=c.exports.useCallback(async(g,x)=>{const y=await l.showLoading(`${x?"Enable":"Disable"} filter in progress`);setTimeout(()=>{s({type:cc,id:g,checked:x}),y()},0)},[l,s]),u=c.exports.useCallback(({id:g,name:x})=>{const y=[{text:"Yes",handler:async()=>{const C=await l.showLoading("Delete filter process in progress");s({type:uc,payload:{id:g}}),C()}},{text:"No"}];t>1&&y.unshift({text:"Yes, for all spectra",handler:async()=>{const C=await l.showLoading("Delete all spectra filter process in progress");s({type:dc,payload:{filterType:x}}),C()}}),i.showConfirmDialog({message:"Are you sure you want to delete the spectrum?",buttons:y})},[l,s,i,t]),d=c.exports.useCallback(async g=>{const x=await l.showLoading("Filter snapshot process in progress");setTimeout(()=>{s({type:_c,id:g}),x()},0)},[l,s]),h=c.exports.useCallback((g,x)=>{const{id:y,name:C}=g;o&&o===y?r.current.index=x:o||(r.current.index=null);const v=["filter-row"];return o===y?v.push("filter-active"):n===C?v.push("filter-current"):r.current.index!=null&&x>r.current.index&&v.push("filter-deactive"),v.join(" ")},[o,n]),m=c.exports.useMemo(()=>e==null?void 0:e.map((g,x)=>_(Ad,{className:h(g,x),children:[f(zn,{align:"center",size:2,onClick:()=>d(g.id),children:g.label}),f(zn,{align:"left",size:3,children:f("div",{onClick:y=>y.stopPropagation(),children:f(Or,{data:g.error?g.error:g.value})})}),_(zn,{align:"center",vAlign:"center",size:1,children:[f(ao,{checked:g.flag,onChange:y=>a(g.id,y.target.checked)}),g.isDeleteAllow&&f("button",{className:"btn",type:"button",onClick:()=>u(g),children:f(vt,{})})]})]},g.id)),[d,e,h,u,a]);return f(Ue,{children:m})}const H2={filters:[]},z2=c.exports.memo($2);function V2(){const{toolOptions:{selectedTool:e,data:{activeFilterID:t}}}=$(),{filters:n}=ve(H2),o=Wu().length;return f(z2,{selectedTool:e,filters:n,spectraCounter:o,activeFilterID:t})}const B2=P`
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
`;function j2({filters:e}){return c.exports.useMemo(()=>e?w(A2,{testID:"filters-table",children:[p(_2,{children:w(Ad,{children:[p(zn,{align:"center",size:1,children:"Label"}),p(zn,{align:"center",size:2,children:"Properties"})]})}),p(I2,{css:B2,children:p(V2,{})})]}):p(Zt,{}),[e])}const X2={filters:[]},Y2=c.exports.memo(j2);function G2(){const{filters:e}=ve(X2);return p(Y2,{filters:e})}const Z2=P`
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
`,U2=ee().shape({frequency:ce().integer().required().label("Frequency"),"1d":ee({"1H":ee({from:ce().integer().required().label("1H ' From ' "),to:ce().integer().required().label("1H ' To ' ")}),"13C":ee().shape({from:ce().integer().required().label("13C ' From ' "),to:ce().integer().required().label("13C ' To ' ")}),lineWidth:ce().integer().min(1).required().label("Line Width")})});function W2({onPredict:e=()=>null}){const t=c.exports.useRef(),n=c.exports.useCallback(()=>{t.current.submitForm()},[]),o=c.exports.useCallback(async s=>{e(s)},[e]);return w("div",{css:Z2,children:[p("div",{children:w(ae,{ref:t,initialValues:_a,validationSchema:U2,onSubmit:o,children:[p(md,{}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Frequency : "}),p(sn,{data:La,style:{width:290,height:30,margin:0},name:"frequency"})]}),w("div",{className:"row",children:[p(Le,{value:"1H",className:"custom-label"}),p(Q,{title:"From",children:p(U,{name:"1d.1H.from",type:"number"})}),p(Q,{title:"To",style:{label:{padding:"0 10px"}},children:p(U,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row",children:[p(Le,{value:"13C",className:"custom-label"}),p(Q,{title:"From",children:p(U,{name:"1d.13C.from",type:"number"})}),p(Q,{title:"To",style:{label:{padding:"0 10px"}},children:p(U,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Line Width : "}),p(U,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),p("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]})]})}),p("div",{children:p("button",{type:"button",onClick:n,className:"btn",children:"Predict spectrum"})})]})}function K2(){const[e,t]=c.exports.useState(),n=c.exports.useCallback(l=>{t(l)},[]),o=Y(),s=re(),i=c.exports.useCallback(async l=>{if(e){o({type:bt,isLoading:!0});const r=await s.showLoading("Predict 1H, 13C, COSY, HSQC, and HMBC in progress");o({type:rs,payload:{mol:e,options:l}}),r()}else s.error("No Molecule selected")},[s,o,e]);return f(gd,{onMoleculeChange:n,actionsOptions:{hidePredict:!0,hideDelete:!0,hideExport:!0},children:f(W2,{onPredict:i})})}const q2=[{title:"Spectra",component:f(lE,{}),hidePreferenceKey:"hideSpectraPanel",mode:null},{title:"Information",component:f(kC,{}),style:{overflow:"hidden"},hidePreferenceKey:"hideInformationPanel",mode:null},{title:"Peaks",component:f(Mk,{}),hidePreferenceKey:"hidePeaksPanel",mode:null},{title:"Filters",component:f(G2,{}),hidePreferenceKey:"hideFiltersPanel",mode:null},{title:"Integrals",component:f(CS,{}),hidePreferenceKey:"hideIntegralsPanel",mode:null},{title:"Ranges",component:f(Tw,{}),hidePreferenceKey:"hideRangesPanel",mode:X.DM_1D},{title:"Multiple Spectra Analysis",component:f(yk,{}),hidePreferenceKey:"hideMultipleSpectraAnalysisPanel",mode:null},{title:"Matrix Generation",component:f(RS,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Zones",component:f(a2,{}),hidePreferenceKey:"hideZonesPanel",mode:X.DM_2D},{title:"Summary",component:f(NE,{}),hidePreferenceKey:"hideSummaryPanel",mode:null},{title:"Structures",component:f(gd,{}),hidePreferenceKey:"hideStructuresPanel",mode:null},{title:"Database",component:f(S2,{}),hidePreferenceKey:"hideDatabasePanel",mode:null},{title:"Automatic Assignment",component:f(mC,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Prediction",component:f(K2,{}),hidePreferenceKey:"hidePredictionPanel",mode:null}],rr={null:"Spectra",peakPicking:"Peaks",integral:"Integrals",rangesPicking:"Ranges",zone2D:"Zones",multipleSpectraAnalysis:"Multiple Spectra Analysis"};function J2({displayerMode:e}){const t=ie(),n=ad(),o=c.exports.useCallback(s=>!B(t,`display.panels.${s.hidePreferenceKey}`)&&s.isExperimental===void 0&&(s.mode==null||s.mode===e)||s.isExperimental&&n,[e,n,t]);return f("div",{style:{width:"100%",height:"100%",flex:"1 1 0%"},children:f(rl,{children:q2.map((s,i)=>o(s)&&f(rl.Item,{title:s.title,defaultOpened:i===0,children:s.component},s.title))})})}const Q2=c.exports.memo(J2);function eA(){const{displayerMode:e,toolOptions:{selectedTool:t}}=$();return f(Q2,{displayerMode:e,selectedTool:t})}function ms(){const e=Y(),t=re(),{open:n}=dh(),[o,s]=c.exports.useState(!1),i=c.exports.useRef({clicks:[]}),l=c.exports.useCallback(h=>{[F.peakPicking.id,F.integral.id,F.zone2D.id,F.exclusionZones.id].includes(h)&&t.show("Press Shift + Left Mouse button to select zone"),Object.keys(rr).includes(h)&&n(rr[h]),e({type:lo,payload:{selectedTool:h}})},[t,e,n]),r=c.exports.useCallback(()=>{i.current.clicks.length===0&&e({type:mn,zoomType:Hn.HORIZONTAL});const h=Xo(()=>{i.current.clicks=[]},500);i.current.clicks.push(h),h(),i.current.clicks.length>1&&(fr(i.current.clicks,m=>m.cancel()),i.current.clicks=[],e({type:mn}))},[e,i]),a=c.exports.useCallback(()=>{e({type:Ti})},[e]),u=c.exports.useCallback(()=>{e({type:ki,isRealSpectrumVisible:!o}),s(!o)},[e,o]),d=c.exports.useCallback(()=>{e({type:Mi})},[e]);return{handleChangeOption:l,handleFullZoomOut:r,changeDisplayViewModeHandler:a,changeSpectrumViewHandler:u,alignSpectrumsVerticallyHandler:d,isRealSpectrumShown:o}}function tA(){const{keysPreferences:e,displayerMode:t,overDisplayer:n,data:o,activeSpectrum:s}=$(),i=Y(),l=re(),r=Oi(),{handleChangeOption:a,handleFullZoomOut:u,alignSpectrumsVerticallyHandler:d,changeDisplayViewModeHandler:h}=ms(),{saveToClipboardHandler:m,saveAsJSONHandler:g,saveAsHandler:x}=rd(),{highlight:y,remove:C}=En(),v=Ve(),S=c.exports.useMemo(()=>t===X.DM_1D&&o&&o.length>0,[o,t]),E=c.exports.useCallback(async M=>{const{type:A,extra:{id:D}}=M;switch(A){case ue.INTEGRAL:{i({type:ns,integralID:D}),C();break}case ue.PEAK:{i({type:es,data:{id:D}}),C();break}case ue.RANGE:{i({type:is,payload:{data:{id:D,assignmentData:v}}}),C();break}case ue.ZONE:{i({type:ls,payload:{id:D,assignmentData:v}}),C();break}case ue.EXCLUSION_ZONE:{const I=await l.showLoading("Exclusion filter in progress");i({type:nu,payload:{id:D,spectrumID:M.extra.spectrumID}}),I(),C();break}}},[v,i,C,l]),T=c.exports.useCallback((M,A)=>{o&&o.length>0&&A>=1&&A<=9&&(M.shiftKey?(i({type:Lo,keyCode:A}),l.show(`Configuration Reset, press '${A}' again to reload it.`)):Bt(M)||((e==null?void 0:e[A])?i({type:Ni,keyCode:A}):(i({type:Lo,keyCode:A}),l.show(`Configuration saved, press '${A}' again to reload it.`))))},[l,o,i,e]),N=c.exports.useCallback(M=>{function A(I,O=!0){if(t===X.DM_1D&&!s)throw new Error(`Select a spectrum to proceed with ${I}`);if(O&&t===X.DM_2D)throw new Error(`Switch to 1D Mode and select a spectrum to proceed with ${I}`)}function D(I,O=!0){if(t===X.DM_2D&&!s)throw new Error(`Select a spectrum to proceed with ${I}`);if(O&&t===X.DM_1D)throw new Error(`Switch to 2D Mode and select a spectrum to proceed with ${I}`)}try{if(!M.shiftKey&&!M.metaKey)switch(M.key){case"f":u();break;case"z":case"Escape":a(F.zoom.id);break;case"r":{t===X.DM_2D?(D(F.zone2D.label,!1),a(F.zone2D.id)):(A(F.rangesPicking.label,!1),a(F.rangesPicking.id));break}case"a":{A(F.phaseCorrection.label),a(F.phaseCorrection.id);break}case"b":{A(F.baseLineCorrection.label),a(F.baseLineCorrection.id);break}case"p":{A(F.peakPicking.label),a(F.peakPicking.id);break}case"i":{A(F.integral.label),a(F.integral.id);break}case"e":{A(F.exclusionZones.label),a(F.exclusionZones.id);break}default:}if(!M.shiftKey&&!M.metaKey&&!M.ctrlKey)switch(M.key){case"c":{S&&d();break}case"s":{S&&h();break}default:}if(!M.shiftKey&&(M.metaKey||M.ctrlKey))switch(M.key){case"c":m(),M.preventDefault();break;case"s":g(),M.preventDefault();break;case"o":r(),M.preventDefault();break;default:}if(M.shiftKey&&(M.metaKey||M.ctrlKey))switch(M.key){case"s":case"S":x(),M.preventDefault();break;default:}}catch(I){l.error(I.message)}},[s,l,d,S,h,t,a,u,r,x,g,m]),R=c.exports.useCallback(M=>{if(!["input","textarea"].includes(M.target.localName)&&n){const A=Number(M.code.substr(M.code.length-1))||0;A>0?T(M,A):["Delete","Backspace"].includes(M.key)&&y.sourceData?(M.preventDefault(),E(y.sourceData)):N(M)}},[E,y,T,n,N]);return c.exports.useEffect(()=>(document.addEventListener("keydown",R,!0),()=>document.removeEventListener("keydown",R,!0)),[R]),null}const nA="https://docs.nmrium.org";var oA={version:"git-67e850a89bc4f6dc5e458a6e814857282d61433a"};function sA({width:e=100,height:t=100}){return _("svg",{style:{width:e,height:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 752.34 221.73",children:[f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M.64,31.7A31.67,31.67,0,0,1,54.72,9.29l0,0A31.66,31.66,0,0,1,64,31.7V190a13.39,13.39,0,0,0,26.77,0V54a31.7,31.7,0,0,1,31.7-31.7V40.58A13.38,13.38,0,0,0,109.13,54V190a31.71,31.71,0,0,1-63.41,0V31.7a13.29,13.29,0,0,0-3.88-9.46l0,0A13.41,13.41,0,0,0,19,31.7V164.82H.64Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M154.21,54v68.17a13.34,13.34,0,0,0,3.89,9.47h0A13.39,13.39,0,0,0,181,122.14V99.32h-.06a31.63,31.63,0,0,1,9.29-22.38l0,0a31.65,31.65,0,0,1,44.8,0l0,0a31.58,31.58,0,0,1,9.3,22.39V118H226V99.32a13.3,13.3,0,0,0-3.89-9.46h0a13.44,13.44,0,0,0-18.93,0l0,0a13.3,13.3,0,0,0-3.83,8.19v24.09a31.7,31.7,0,0,1-54.11,22.42v0a31.66,31.66,0,0,1-9.3-22.4V54Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M729.19,96.34c-8.65,0-14.26,3.17-17.67,8-3.41-5.12-8.78-8-16-8-8.16,0-13.52,3.17-16.32,7.31v-5.6H661V159h18.28V124.62c0-7.19,3.41-11.46,9.5-11.46,5.85,0,8.78,3.9,8.78,10V159h18.27V124.62c0-7.19,3.42-11.46,9.51-11.46,5.85,0,8.77,3.9,8.77,10V159h18.28V121.57C752.34,106.33,743.2,96.34,729.19,96.34Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M629.26,98.05v33.26c0,8.66-4.63,12.56-11.33,12.56-5.85,0-10.6-3.54-10.6-11.09V98.05H589.05v37.41c0,16.45,10.48,25.22,22.79,25.22,8,0,14.13-2.92,17.42-7.43V159h18.28V98.05Z"}),f("rect",{fill:"#2b143e",x:"558.22",y:"98.05",width:"18.28",height:"60.93"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M567.36,92.68a11,11,0,1,0-11-11A11.08,11.08,0,0,0,567.36,92.68Z"}),f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M478.77,159H498V116.57L525.66,159H549.2l-22.3-34.75c5.45-2.13,8.12-4.14,11.48-8.86a31.07,31.07,0,0,0,6.07-18.26V94.62c0-10.61-3.45-15.93-9.28-21.78S520.75,63.09,510,63.09H478.71l.06,95.89Zm33.1-50.27h-6.46v-.06H498V82.19h10.87c4.67,0,9.44,1.38,11.94,3.81a12.84,12.84,0,0,1,3.81,9.2C524.58,102.52,518.92,108.71,511.87,108.71Z"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"372.91 60.8 372.91 158.98 392.16 158.98 392.16 119.23 419.91 157.41 447.61 119.23 447.61 158.98 466.87 158.98 466.87 60.8 419.91 125.22 372.91 60.8"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"283.89 61.04 283.89 159.1 303.14 159.1 303.14 105.85 361.01 160.93 361.01 62.83 341.67 62.83 341.67 116.08 283.89 61.04"})]})}const iA=P`
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
`;function lA({onClose:e=()=>null}){return w("div",{css:iA,children:[w("div",{className:"header handle",children:[p("span",{children:"About NMRium"}),p(me,{onClick:e})]}),w("div",{className:"container",children:[w("div",{className:"center-container",children:[p(sA,{width:160,height:50}),"Version ",p(rA,{}),p("span",{className:"separator"}),p("a",{href:"https://git.nmrium.org",target:"_blank",rel:"noreferrer",children:"GitHub ( https://git.nmrium.org )"})]}),p("div",{className:"center-container",children:p("span",{className:"separator"})}),p("span",{className:"content",children:"This project is developed by Zakodium S\xE0rl (Switzerland), the University of Cologne (Germany), Johannes Gutenberg University Mainz (Germany) and Universidad del Valle (Colombia)."}),w("div",{className:"center-container",children:[p("span",{className:"separator"}),p("span",{className:"title",children:"Funding is provided by"}),p("span",{className:"separator"})]}),p("div",{className:"content",children:w("ul",{children:[p("li",{children:"IDNMR grant, which part of the Scientific Library Services and Information Systems (LIS) initiative of the DFG."}),p("li",{children:"Zakodium S\xE0rl (Switzerland)."}),p("li",{children:"Universidad del Valle (Cali, Colombia)."})]})})]})]})}function rA(){const{version:e}=oA;return e==="HEAD"?p(Qe,{children:"HEAD"}):e.startsWith("git-")?w("a",{href:`https://github.com/cheminfo/nmrium/tree/${e.slice(4)}`,target:"_blank",rel:"noreferrer",children:["git-",e.slice(4,14)]}):p("a",{href:`https://github.com/cheminfo/nmrium/tree/${e}`,target:"_blank",rel:"noreferrer",children:e})}function aA(){return _(Ue,{children:[f("p",{className:"section-header",children:"Spectra"}),f(Q,{title:"Transparency of Dimmed Spectra [ 0 - 1 ]",children:f(U,{name:"controllers.dimmedSpectraTransparency",checkValue:e=>e>=0&&e<=1,type:"number"})})]})}const cA=[{label:"Spectra selection panel",name:"display.panels.hideSpectraPanel"},{label:"Spectra information Panel",name:"display.panels.hideInformationPanel"},{label:"Peaks and peak picking",name:"display.panels.hidePeaksPanel"},{label:"Integration and integrals",name:"display.panels.hideIntegralsPanel"},{label:"1D ranges peak picking",name:"display.panels.hideRangesPanel"},{label:"Chemical structure panel",name:"display.panels.hideStructuresPanel"},{label:"Filters Panel",name:"display.panels.hideFiltersPanel"},{label:"2D zones peak picking",name:"display.panels.hideZonesPanel"},{label:"Assignment summary Panel",name:"display.panels.hideSummaryPanel"},{label:"Multiple Spectra Analysis Panel",name:"display.panels.hideMultipleSpectraAnalysisPanel"},{label:"Database Panel",name:"display.panels.hideDatabasePanel"},{label:"Prediction Panel",name:"display.panels.hidePredictionPanel"},{label:"Experimental Features",name:"display.general.hideExperimentalFeatures"}];function uA({preferences:e}){return _(Ue,{children:[f("p",{className:"section-header",children:"Show / Hide Panels"}),cA.map(t=>!B(e,`basePreferences.${t.name}`,!1)&&f(ht,{className:"checkbox-element",label:t.label,name:t.name,reverse:!0},t.name))]})}const dA=P`
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
`;function pA(){const{values:e,setFieldValue:t}=pe(),n=c.exports.useMemo(()=>B(e,"formatting.nucleus",[]),[e]),o=c.exports.useCallback(i=>{const l=n.splice(0,i);t("formatting.nucleus",l)},[n,t]),s=c.exports.useCallback(()=>{const i={key:K(),name:"",ppm:"0.00",hz:"0.00"},l=[...n,i];t("formatting.nucleus",l)},[n,t]);return w(c.exports.Fragment,{children:[p("p",{className:"section-header",children:"Formating according to Nucleus"}),p("div",{css:dA,children:w("table",{children:[p("thead",{children:w("tr",{children:[p("th",{className:"counter-col",children:"#"}),p("th",{className:"nucleus-label-col",children:"Nucleus "}),p("th",{className:"nucleus-format-input-col",children:"\u03B4 (ppm)"}),p("th",{className:"nucleus-format-input-col",children:"Coupling (Hz)"}),p("th",{className:"nucleus-format-input-col"})]})}),p("tbody",{children:n==null?void 0:n.map((i,l)=>{const r=l+1;return w("tr",{children:[w("td",{className:"counter-col",children:[w("span",{children:[r," - "]})," "]}),p("td",{className:"nucleus-label-col",children:p(U,{name:`formatting.nucleus.${l}.name`,className:"width-100"})}),p("td",{className:"nucleus-format-input-col",children:p(U,{name:`formatting.nucleus.${l}.ppm`,className:"width-100"})}),p("td",{className:"nucleus-format-input-col",children:p(U,{name:`formatting.nucleus.${l}.hz`,className:"width-100"})}),w("td",{className:"operation-container",children:[p(me,{onClick:()=>o(l),popupTitle:`remove ${i.name}`,popupPlacement:"right"}),n.length===l+1&&p("button",{className:"add",type:"button",onClick:s,children:p(bn,{})})]})]},`${i.key}`)})})]})})]})}const hA=P`
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
  .main-content {
    width: 100%;
    flex: 1;
    overflow: auto;
    border: none;
  }

  .tab-content {
    width: 100%;
  }

  .inner-content {
    padding: 15px 30px;
    width: 100%;
    overflow: auto;
  }

  button:focus {
    outline: none;
  }
  button:hover {
    color: #007bff;
  }
  .btn:hover {
    background-color: #ffffff;
  }
  .btn {
    border: none;
    padding: 0 15px;
    background-color: #ffffff5e;
    border-radius: 5px;
    height: 25px;
  }

  .footer-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
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
  .checkbox-element {
    margin-bottom: 5px;
  }
`;function fA({onClose:e}){const[t,n]=c.exports.useState("controllers"),o=ie(),s=re(),i=c.exports.useRef(),l=c.exports.useCallback(()=>{i.current.submitForm()},[]),r=c.exports.useCallback(()=>{o.dispatch({type:Ru}),s.success("Settings saved successfully"),e==null||e()},[s,e,o]),a=c.exports.useCallback(d=>{o.dispatch({type:Mu,payload:d}),s.success("Settings saved successfully"),e==null||e()},[s,e,o]),u=c.exports.useCallback(d=>{n(d.tabid)},[]);return w("div",{css:hA,children:[w("div",{className:"header handle",children:[p("span",{children:"General Settings"}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"main-content",children:p(ae,{ref:i,initialValues:o,onSubmit:a,children:w(An,{position:Zi.LEFT,activeTab:t,onClick:u,children:[p(Re,{tablabel:"Controllers",tabid:"controllers",children:p("div",{className:"inner-content",children:p(aA,{})})}),p(Re,{tablabel:"Formatting",tabid:"formatting",children:p("div",{className:"inner-content",children:p(pA,{})})}),p(Re,{tablabel:"Display",tabid:"display",children:p("div",{className:"inner-content",children:p(uA,{preferences:o})})})]})})}),w("div",{className:"footer-container",children:[p("button",{type:"button",onClick:r,className:"btn",children:"Reset"}),p("button",{type:"button",onClick:l,className:"btn",children:"Save"})]})]})}const Fe={container:{height:"100%",display:"flex",fontSize:"12px"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"}};function mA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useRef(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{e({type:xc,options:{maxNumberOfPeaks:n.current.value,minMaxRatio:t.current.value,noiseFactor:o.current.value,lookNegative:s.current.checked}})},[e]),l=c.exports.useCallback(()=>{e({type:He})},[e]);return _("div",{style:Fe.container,children:[f(rn,{ref:n,label:"Max Number Of Peaks:",name:"maxNumberOfPeaks",style:{input:Fe.input,inputContainer:Fe.inputContainer,label:Fe.label},defaultValue:50}),f(rn,{ref:o,label:"Noise factor",name:"noiseFactor",style:{input:Fe.input,inputContainer:Fe.inputContainer,label:Fe.label},defaultValue:3}),f(rn,{ref:t,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:Fe.input,inputContainer:Fe.inputContainer,label:Fe.label},defaultValue:.1,step:"0.01"}),_("div",{style:{justifyItems:"baseline",marginRight:"3px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect Negative:"}),f(ao,{name:"lookNegative",ref:s})]}),f("button",{type:"button",style:Fe.actionButton,onClick:i,children:"Apply"}),f("button",{type:"button",style:Fe.actionButton,onClick:l,children:"Cancel"})]})}const go={container:{padding:"5px",height:"100%",display:"flex",alignItems:"center"},label:{lineHeight:2,userSelect:"none"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"}};function gA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),[o,s]=c.exports.useState("polynomial"),i=c.exports.useCallback(d=>{let h={};switch(o){case"airpls":h=b({algorithm:n.current.value},d);break;case"polynomial":h=b({algorithm:n.current.value},d);break}e({type:Ac,options:h})},[o,e]),l=c.exports.useCallback(()=>{e({type:He})},[e]),r=c.exports.useCallback(()=>Object.keys(Rs).map(d=>({key:d,label:Rs[d],value:d})),[]),a=c.exports.useCallback(d=>{s(d)},[]),u=c.exports.useMemo(()=>{switch(o){case"airpls":return{validation:ee().shape({maxIterations:ce().integer().min(1).required(),tolerance:ce().moreThan(0).required()}),initialValue:{maxIterations:100,tolerance:.001}};case"autoPolynomial":case"polynomial":return{validation:ee().shape({degree:ce().integer().min(1).max(6).required()}),initialValue:{degree:3}};default:return{validation:{},initialValue:{}}}},[o]);return _("div",{style:go.container,children:[f("span",{style:go.label,children:"Algorithm: "}),f(Ne,{ref:n,data:r(),style:{marginLeft:10,marginRight:10},onChange:a,defaultValue:"polynomial"}),_(ae,{ref:t,onSubmit:i,initialValues:u.initialValue,validationSchema:u.validation,children:[o&&o==="airpls"&&_("div",{style:{display:"flex"},children:[f(Q,{title:"maxIterations:",children:f(U,{type:"number",name:"maxIterations"})}),f(Q,{title:"tolerance:",style:{label:{padding:"0 5px"}},children:f(U,{type:"number",name:"tolerance"})})]}),o&&["autoPolynomial","polynomial"].includes(o)&&f(Q,{title:"degree [ 1 - 6 ]:",children:f(U,{type:"number",name:"degree",min:1,max:6,style:{inputWrapper:{height:"100%"}}})})]},JSON.stringify(u.initialValue)),f("button",{type:"button",style:go.actionButton,onClick:()=>t.current.submitForm(),children:"Apply"}),f("button",{type:"button",style:go.actionButton,onClick:l,children:"Cancel"})]})}const ar={container:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",border:"0.55px solid #c7c7c7",borderRadius:"5px",userSelect:"none",backgroundColor:"#18ce0f14",fontSize:"10px",color:"#00801d",margin:"0px 5px",cursor:"ew-resize"},label:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxWidth:"100%",paddingLeft:"5px",paddingRight:"5px"}};function xA(e,t){const{name:n,value:o=0,onChange:s,label:i,style:l,className:r}=e,a=c.exports.useRef(0),u=c.exports.useRef(o);c.exports.useImperativeHandle(t,()=>({setValue:h=>{u.current=h}}));const d=c.exports.useCallback(h=>{function m(x){let y=x.clientX-a.current;if(a.current=x.clientX,x.buttons===1){const C=y/(x.shiftKey?10:1);u.current=u.current+C,s({value:u.current,name:n})}}function g(){window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",g)}a.current=h.clientX,window.addEventListener("mousemove",m),window.addEventListener("mouseup",g)},[n,s]);return f("div",{style:b(b({},ar.container),l),className:r,onMouseDown:d,children:f("span",{style:ar.label,children:i})})}var cr=c.exports.forwardRef(xA);const Qt={container:{padding:"5px",height:"100%",display:"flex"},input:{width:"100px"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"},select:{marginLeft:"5px",marginRight:"10px",border:"none",height:"20px"}},Oe={manual:"manual",automatic:"automatic",absolute:"absolute"},bA=[{key:Oe.manual,label:"Manual",value:Oe.manual},{key:Oe.automatic,label:"Automatic",value:Oe.automatic},{key:Oe.absolute,label:"Absolute",value:Oe.absolute}];function yA({data:e,pivot:t,filter:n}){const o=Y(),[s,i]=c.exports.useState({ph0:0,ph1:0}),l=c.exports.useRef({ph0:0,ph1:0}),r=c.exports.useRef(),a=c.exports.useRef(),[u,d]=c.exports.useState(Oe.manual);c.exports.useEffect(()=>{n?(l.current=n.value,i(n.value),r.current.setValue(n.value.ph0),a.current.setValue(n.value.ph1)):(r.current.setValue(l.current.ph0),a.current.setValue(l.current.ph1))},[n]);const h=c.exports.useCallback(()=>{switch(u){case Oe.automatic:{o({type:mc});break}case Oe.manual:{o({type:fc,value:s});break}case Oe.absolute:{o({type:gc});break}}},[o,u,s]),m=c.exports.useCallback((v,S)=>{if(S==="ph1"&&e.re){const E=v.ph0-l.current.ph0,T=v.ph1-l.current.ph1;v.ph0+=E-T*(t==null?void 0:t.index)/e.re.length}o({type:Di,value:v})},[e.re,o,t==null?void 0:t.index]),g=c.exports.useCallback(v=>{const{name:S,value:E}=v.target;if(v.target){const T=k(b({},l.current),{[S]:E});String(E).trim()!=="-"&&m(T,S),l.current=T,i(l.current)}},[m]),x=c.exports.useCallback(v=>{const S=k(b({},l.current),{[v.name]:v.value});m(S,v.name),l.current=S,i(l.current)},[m]),y=c.exports.useCallback(()=>{o({type:He})},[o]),C=c.exports.useCallback(v=>{d(v)},[]);return _("div",{style:Qt.container,children:[f(Ne,{onChange:C,data:bA,defaultValue:Oe.manual,style:Qt.select}),u===Oe.manual&&_(Ue,{children:[f(Q,{title:"PH0 :",style:{wrapper:{marginRight:"5px"}},children:f(yt,{name:"ph0",style:{input:Qt.input},onChange:g,value:s.ph0,type:"number",debounceTime:500})}),f(Q,{title:"PH1 :",children:f(yt,{name:"ph1",style:{input:Qt.input},onChange:g,value:s.ph1,type:"number",debounceTime:500})}),f(cr,{ref:r,name:"ph0",label:"Change Ph0 By mouse click and drag",style:{width:"20%"},onChange:x}),f(cr,{ref:a,name:"ph1",label:"Change Ph1 By mouse click and drag",style:{width:"20%"},onChange:x})]}),f("button",{type:"button",style:Qt.actionButton,onClick:h,children:"Apply"}),f("button",{type:"button",style:Qt.actionButton,onClick:y,children:"Cancel"})]})}const vA=c.exports.memo(yA),CA={datum:{},filter:null};function SA(){const{toolOptions:{data:{pivot:e}}}=$(),{data:t,filters:n}=ve(CA),o=c.exports.useMemo(()=>n.find(s=>s.name===$t)||null,[n]);return f(vA,{data:t,filter:o,pivot:e})}const Mt={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px",alignItems:"baseline"},input:{height:"100%",width:"50px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},inputContainer:{flex:2},label:{flex:5},actionButton:{height:"100%",minWidth:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none",padding:"3px"},hint:{lineHeight:2,userSelect:"none",fontSize:"11px"}};function kA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useCallback(()=>{e({type:bc,options:{peakPicking:{minMaxRatio:Number(n.current.value)||.05,lookNegative:t.current.checked}}})},[e]),s=c.exports.useCallback(()=>{e({type:He})},[e]);return _("div",{style:Mt.container,children:[_("div",{style:{justifyItems:"baseline",margin:"0 10px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect negative:"}),f(ao,{name:"lookNegative",ref:t})]}),f(rn,{ref:n,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:Mt.input,inputContainer:Mt.inputContainer,label:Mt.label},defaultValue:.05,step:"0.01"}),f("button",{type:"button",style:Mt.actionButton,onClick:o,"data-test-id":"auto-ranges-detection-btn",children:"Auto ranges picking"}),f("button",{type:"button",style:Mt.actionButton,onClick:s,children:"Cancel"}),f("span",{style:Mt.hint,children:"Manual selection using SHIFT + select zone or click on Auto peak picking"})]})}const en={container:{padding:"5px",height:"100%",display:"flex"},input:{height:"100%",width:"80px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"},label:{lineHeight:2,userSelect:"none"}},wA=Wi(8,21);function EA(){const e=Y(),{data:t,activeSpectrum:n}=$(),o=c.exports.useRef(),[s,i]=c.exports.useState(1),l=c.exports.useCallback(()=>{e({type:pc,value:{zeroFillingSize:Number(o.current.value),lineBroadeningValue:s}})},[e,s]),r=c.exports.useCallback(()=>t&&(n==null?void 0:n.id)?2**Math.round(Math.log2(t[n.index].data.x.length)):"",[n,t]),a=c.exports.useCallback(d=>{if(d.target){const h=d.target.validity.valid?Number(d.target.value):s;i(h)}},[s]),u=c.exports.useCallback(()=>{e({type:He})},[e]);return _("div",{style:en.container,children:[f("span",{style:en.label,children:"Size: "}),f(Ne,{ref:o,data:wA,style:{marginLeft:10,marginRight:10},defaultValue:r()}),f("span",{style:en.label,children:"Line Broadening: "}),f("input",{name:"line-broadening",style:en.input,type:"number",defaultValue:s,onInput:a,pattern:"^\\d*(\\.\\d{0,2})?$",step:"any"}),f("button",{type:"button",style:en.actionButton,onClick:l,children:"Apply"}),f("button",{type:"button",style:en.actionButton,onClick:u,children:"Cancel"})]})}const tn={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"},actionButton:{height:"100%",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"}};function AA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useCallback(()=>{e({type:yc,options:{thresholdFactor:t.current.value}})},[e]),o=c.exports.useCallback(()=>{e({type:He})},[e]),s=c.exports.useCallback(i=>{i.target&&e({type:iu,payload:i.target.value})},[e]);return _("div",{style:tn.container,children:[f(rn,{ref:t,label:"NoiseFactor",name:"noiseFactor",style:{input:tn.input,inputContainer:tn.inputContainer,label:tn.label},defaultValue:1,onChange:s}),f("button",{type:"button",style:tn.actionButton,onClick:n,children:"Auto Zones Picking"}),f("button",{type:"button",style:tn.actionButton,onClick:o,children:"Cancel"})]})}function TA(e){const{isFullscreen:t,onMaximize:n=()=>null,selectedOptionPanel:o,hideGeneralSettings:s}=e,i=he(),l=c.exports.useMemo(()=>{switch(o){case F.zeroFilling.id:return f(EA,{});case F.phaseCorrection.id:return f(SA,{});case F.peakPicking.id:return f(mA,{});case F.rangesPicking.id:return f(kA,{});case F.baseLineCorrection.id:return f(gA,{});case F.zone2D.id:return f(AA,{})}},[o]),r=c.exports.useCallback(()=>{i.show(f(fA,{}),{position:te.TOP_CENTER,enableResizing:!0,width:600,height:400})},[i]),a=c.exports.useCallback(()=>{i.show(f(lA,{}),{isBackgroundBlur:!1,position:te.MIDDLE,width:500,height:480})},[i]);return _(ph,{children:[_("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[f("div",{children:f(ke,{orientation:"horizontal",children:f(ke.Item,{onClick:a,titleOrientation:"horizontal",id:"logo",title:"About NMRium",children:f("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:f(hh,{})})})})}),f("div",{className:"toolOptionsPanel",children:l})]}),_(ke,{orientation:"horizontal",children:[f(ke.Item,{id:"user-manual",title:"User manual",onClick:()=>window.open(nA,"_blank"),children:f(fh,{})}),!s&&f(ke.Item,{id:"general-settings",onClick:r,title:"General settings",children:f(mh,{})}),!t&&f(ke.Item,{id:"full-screen",onClick:n,title:"Full Screen",className:"windowButton",children:f(gh,{})})]})]})}const DA=c.exports.memo(TA);function IA({isFullscreen:e,onMaximize:t}){const{toolOptions:{selectedOptionPanel:n}}=$(),{display:{general:o}}=ie();return f(DA,{selectedOptionPanel:n,isFullscreen:e,onMaximize:t,hideGeneralSettings:(o==null?void 0:o.hideGeneralSettings)||!1})}const ge={MOL:"mol",NMRIUM:"nmrium",JSON:"json",DX:"dx",JDX:"jdx",JDF:"jdf",ZIP:"zip",NMREDATA:"nmredata"},MA={ZIP:"504b0304"};function RA(e){return new Uint8Array(e).slice(0,4).reduce((t,n)=>t+=n.toString(16).padStart(2,"0"),"")}async function NA(e,t={asBuffer:!1}){const n=await fetch(e);return PA(n),t.asBuffer?n.arrayBuffer():n.text()}function PA(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}function ln(e){return e.replace(/^.*\./,"").toLowerCase()}function Td(e){return e.substr(0,e.lastIndexOf("."))}function FA(e){const t=e.replace(/^.*[\\/]/,"").split(".");return{name:t[0].toLowerCase(),extension:t[1].toLowerCase()}}function Rt(e,t={}){return Promise.all([].map.call(e,n=>new Promise((o,s)=>{const i=new FileReader;i.onabort=l=>s(l),i.onerror=l=>s(l),i.onload=()=>{if(i.result){const l=i.result,r=Td(n.name),a=ln(n.name);o({binary:l,name:r,extension:a})}},t.asBuffer?i.readAsArrayBuffer(n):i.readAsBinaryString(n)})))}async function xo(e,t={}){const n=[];for(const o of e)try{const s=await o.async(t.asBuffer?"uint8array":"text"),i=Td(o.name),l=ln(o.name);n.push({binary:s,name:i,extension:l})}catch(s){console.error(s)}return n}const _A=P`
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
`,LA=P`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
`;function OA(e){const{width:t,height:n}=$(),o=Y(),s=re(),i=c.exports.useCallback(async(g,x)=>{for(let y of x){const C=g.filter(v=>ln(v.name)===y);switch(y){case ge.MOL:{const v=await xo(C);o({type:$s,files:v});break}case ge.NMRIUM:case ge.JSON:{const v=await xo(C,{asBuffer:!0});if(C.length===1){const S=new TextDecoder("utf8");v[0].binary=S.decode(v[0].binary),o({type:fn,files:v})}else throw new Error("You can add only one json file");break}case ge.JDX:case ge.DX:{const v=await xo(C,{asBuffer:!0});o({type:Po,files:v});break}case ge.JDF:{const v=await xo(C,{asBuffer:!0});o({type:Hs,files:v});break}}}},[o]),l=c.exports.useCallback(async g=>{const x=[...new Set(g.map(y=>ln(y.name)))];for(let y of x){const C=g.filter(v=>ln(v.name)===y);try{switch(y){case ge.MOL:{const v=await Rt(C);o({type:$s,files:v});break}case ge.NMRIUM:case ge.JSON:if(C.length===1){const v=await Rt(C,{asBuffer:!0});if(RA(v[0].binary)===MA.ZIP){const E=await an.loadAsync(v[0].binary);await i(Object.values(E.files),[ge.NMRIUM])}else{const E=new TextDecoder("utf8");v[0].binary=E.decode(v[0].binary),o({type:fn,files:v})}}else throw new Error("You can add only one json file");break;case ge.JDX:case ge.DX:{const v=await Rt(C,{asBuffer:!0});o({type:Po,files:v});break}case ge.JDF:{const v=await Rt(C,{asBuffer:!0});o({type:Hs,files:v});break}case ge.ZIP:{const v=await Rt(C,{asBuffer:!0});for(const S of v){const E=await an.loadAsync(S.binary),T=[...new Set(Object.values(E.files).map(R=>ln(R.name)))];T.some(R=>ge[R.toUpperCase()]&&R!==ge.ZIP)?(Object.keys(E.files).some(M=>["2rr","fid","1r"].some(A=>M.endsWith(A)))&&o({type:Fo,files:v}),await i(Object.values(E.files),T)):o({type:Fo,files:v})}break}case ge.NMREDATA:Rt(C,{asBuffer:!0}).then(async v=>{for(const S of v)o({type:jn,file:S})});break;default:throw new Error("The file extension must be zip, dx, jdx, json, mol, nmredata or nmrium.")}}catch(v){o({type:bt,isLoading:!1}),s.error(v.message)}}},[s,o,i]),r=c.exports.useCallback(g=>{o({type:bt,isLoading:!0}),l(g)},[o,l]),{getRootProps:a,getInputProps:u,isDragActive:d,open:h}=xh({onDrop:r,noClick:!0}),m=c.exports.useCallback(()=>{h()},[h]);return p(Vy,{value:m,children:w("div",k(b({},a()),{role:"none",css:LA,children:[p("input",b({"data-test-id":"dropzone-input"},u())),d&&w("div",{css:_A,style:{width:`${t}px`,height:`${n}px`,marginTop:"30px",marginLeft:"30px"},children:[p(bh,{}),p("p",{children:"Drop your files here"})]}),e.children]}))})}const $A=[Ni,ss,ac,He,Lo,bt,Ka,Ja,Cc,lo,Mi,Ii,qa,Ci,ts,vi,os,ki,Di,Ti,mn,Xb,jb,Ri,Xn,Si,_o,ec,Oo];function HA(e){return!$A.includes(e)}const zA=P`
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
`;function VA({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,p("span",{children:t})]})}function BA({items:e,boxBounding:t,onClick:n}){const o=c.exports.useRef(),[s,i]=c.exports.useState({x:t.width,y:t.height});return c.exports.useLayoutEffect(()=>{const l=o.current.getBoundingClientRect();i(r=>{let a=t.height;return l.bottom>window.innerHeight&&(a=t.height*2+(l.bottom-window.innerHeight)),k(b({},r),{y:a})})},[t.height]),p("div",{ref:o,className:"menu",style:{transform:`translate(${s.x}px, -${s.y}px) `},children:e==null?void 0:e.map(l=>p(VA,k(b({},l),{onClick:()=>n(l)}),l.id))})}function ur({component:e,toolTip:t="",items:n=[],onClick:o=()=>null}){const s=c.exports.useRef(null),[i,l]=c.exports.useState(!1),r=c.exports.useCallback(()=>{l(!1)},[]),a=c.exports.useCallback(()=>{l(h=>!h)},[]),u=c.exports.useCallback(h=>{l(!1),o(h)},[o]),d=c.exports.useCallback(()=>{var h;return(h=s.current)==null?void 0:h.getBoundingClientRect()},[]);return w("div",{style:{height:"auto"},css:zA,children:[p("div",{ref:s,children:p(ke.Item,{id:`menu-${t}`,title:t,active:i,onClick:a,children:e})}),i&&p(BA,{items:n,boxBounding:d(),onClick:u}),i&&p("div",{className:"menu-cover",onClick:r})]})}const jA={info:{},datum:{},ftCounter:0,fidCounter:0};function Dd(){const{data:e,activeSpectrum:t,activeTab:n}=$();return c.exports.useMemo(()=>{if(e){let o={},s={},i=0,l=0;for(const r of e){const{isFid:a,isFt:u,nucleus:d}=r.info;n===kt(d)&&(a&&l++,u&&i++,t&&r.id===t.id&&(o=r.info,s=r.data))}return{info:o,datum:s,ftCounter:i,fidCounter:l}}return jA},[t,e,n])}function XA(e){const x=e,{name:t,style:n={},onChange:o=()=>null,className:s="",value:i,placeholder:l=""}=x,r=G(x,["name","style","onChange","className","value","placeholder"]),{values:a,handleChange:u,setFieldValue:d,errors:h}=pe(),m=c.exports.useCallback(y=>{o(y),u(y)},[u,o]);c.exports.useEffect(()=>{i&&d(t,i)},[t,d,i]);const g=c.exports.useMemo(()=>B(h,t),[h,t]);return f("textarea",b({name:t,className:s,placeholder:l,value:i||B(a,t),onChange:m,style:b(b({},n),g&&{borderColor:"red",borderWidth:"1px",outline:"none"})},r))}const YA=P`
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
`,GA=ee({publicationText:On().required()});function ZA({onClose:e}){const t=c.exports.useRef(),n=Y(),o=re(),s=c.exports.useCallback(async i=>{const l=await o.showLoading("Generate spectrum from publication string in progress");setTimeout(()=>{n({type:du,payload:i}),l()}),e()},[o,n,e]);return w("div",{css:[Et,YA],children:[w("div",{className:"header handle",children:[p("span",{children:"Import from publication string"}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",children:p(ae,{ref:t,initialValues:{publicationText:"1H NMR (CDCl3, 400MHz) \u03B4 10.58 (b, 1H), 7.40 (d, 1H, J = 8.0 Hz), 6.19 (d, 1H, J = 7.6 Hz), 4.88 (s, 1H), 2.17 (s, 3H), 1.02 (s, 9H), 1.01 (s, 9H), 0.89 (s, 9H)"},validationSchema:GA,onSubmit:s,children:p(XA,{name:"publicationText",className:"text-area",placeholder:"Enter publication string"})})}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:()=>t.current.submitForm(),className:"btn primary",children:"Import"})})]})}const UA=P`
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
`,WA=["dx","jdx"];function KA({onLoadClick:e,onClose:t,startLoading:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{const i=o.current.value,{name:l,extension:r}=FA(i);WA.includes(r)?(n==null||n(),NA(i,{asBuffer:!0}).then(a=>{e({binary:a,name:l,extension:r,jcampURL:i})})):e(null)},[e,n]);return w("div",{css:UA,children:[w("div",{className:"header handle",children:[p("span",{children:"Load JCAMP Dialog"}),p(me,{onClick:t})]}),w("div",{className:"container",children:[p("input",{ref:o,type:"text",placeholder:"Enter URL to JCAMP-DX file"}),p("button",{type:"button",onClick:s,children:"Load"})]})]})}const dr=[{id:"importFile",icon:f(gs,{}),label:"Import from file system (Press Ctrl + O)"},{id:"importJDX",icon:f(gs,{}),label:"Add JCAMP-DX from URL"},{id:"importPublicationString",icon:f(gs,{}),label:"Import from publication string"}],qA=[{id:"svg",icon:f(Dr,{}),label:"Export as SVG"},{id:"png",icon:f(Tr,{}),label:"Export as PNG"},{id:"json",icon:f(xs,{}),label:"Save data ( Press Ctrl + S )"},{id:"advance_save",icon:f(xs,{}),label:"Save data as  ( Press Ctrl + Shift + S )"},{id:"nmre",icon:f(xs,{}),label:"Save NMRE data"},{id:"copy",icon:f(Qs,{}),label:"Copy image to Clipboard ( Press Ctrl + C )"}];function JA({info:e,verticalAlign:t,displayerMode:n,ftCounter:o,fidCounter:s,activeSpectrum:i}){const l=Y(),r=ie(),a=re(),u=he(),d=Oi(),h=ad(),m=c.exports.useMemo(()=>h?dr:dr.filter(z=>z.id!=="importPublicationString"),[h]),{isRealSpectrumShown:g,changeSpectrumViewHandler:x,changeDisplayViewModeHandler:y,alignSpectrumsVerticallyHandler:C}=ms(),{saveAsSVGHandler:v,saveAsPNGHandler:S,saveAsJSONHandler:E,saveAsNMREHandler:T,saveToClipboardHandler:N,saveAsHandler:R}=rd(),M=c.exports.useCallback(z=>{z?(l({type:Po,files:[z]}),u.close()):a.error("you file must be one of those extensions [ .jdx, dx ] ")},[a,l,u]),A=c.exports.useCallback(()=>{u.close(),l({type:bt,isLoading:!0})},[l,u]),D=c.exports.useCallback(()=>{u.show(f(KA,{onLoadClick:M,onClose:()=>u.close(),startLoading:A}),{})},[M,u,A]),I=c.exports.useCallback(()=>{u.show(f(ZA,{onClose:()=>u.close()}),{})},[u]),O=c.exports.useCallback(z=>!B(r,`display.toolBarButtons.${z}`),[r]),L=c.exports.useCallback(({id:z})=>{switch(z){case"importFile":d();break;case"importJDX":D();break;case"importPublicationString":I();break;default:return}},[d,D,I]),H=c.exports.useCallback(({id:z})=>{switch(z){case"svg":v();break;case"png":S();break;case"json":E();break;case"advance_save":R();break;case"nmre":T();break;case"copy":N();break}},[v,S,E,R,T,N]);return _(c.exports.Fragment,{children:[O("hideImport")&&f(ur,{component:f(yh,{}),toolTip:"Import",onClick:z=>(L(z),null),items:m}),O("hideExportAs")&&f(ur,{component:f(Go,{}),toolTip:"Export As",onClick:z=>(H(z),null),items:qA}),n===X.DM_1D&&O("hideSpectraStackAlignments")&&o>1&&((e==null?void 0:e.isFt)||!i)&&f(ke.Item,{id:"spectra-alignment",className:"cheminfo",title:"Spectra alignment ( Press s )",onClick:y,children:t.align==="stack"?f(vh,{}):f(Ch,{})}),n===X.DM_1D&&O("hideRealImaginary")&&e.isComplex&&f(ke.Item,{id:"display",title:g?"Display Real ":"Display Imaginary",onClick:x,className:"cheminfo",children:f(Sh,{})}),n===X.DM_1D&&O("hideSpectraCenterAlignments")&&(o>0||s>0)&&f(ke.Item,{id:"baseline-position",title:t.align==="bottom"?"Baseline  Center ( Press c )":"Baseline  Bottom ( Press c )",onClick:C,className:"cheminfo",children:f("div",{style:{fontSize:24},children:t.align==="bottom"?f(kh,{}):f(wh,{})})})]})}const QA=c.exports.memo(JA);function eT(){const{activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o}=$(),{info:s,fidCounter:i,ftCounter:l}=Dd();return f(QA,{info:s,fidCounter:i,ftCounter:l,activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o})}function Te(e){const{children:t,value:n=null,isActive:o=!1,onChange:s=()=>null,isVisible:i=!0,id:l,title:r}=e,[a,u]=c.exports.useState(e.isActive),d=c.exports.useCallback(()=>{const h=!a;u(h),s(h?n:null)},[a,s,n]);return c.exports.useEffect(()=>{u(o)},[o]),i?f(ke.Item,{onClick:d,title:r,id:l,active:a,children:t}):null}function tT({children:e,value:t,onChange:n=()=>null}){const[o,s]=c.exports.useState([]),i=c.exports.useCallback(r=>{const u=[...o].map(d=>({value:d.value,isActive:d.value===r}));s(u),n(r)},[n,o]),l=c.exports.useMemo(()=>{let r=0;return c.exports.Children.map(e,a=>{var u;if(a)if(a.type===Te){const d=c.exports.cloneElement(a,{onChange:i,isActive:(u=o[r])==null?void 0:u.isActive,index:r});return r++,d}else return c.exports.cloneElement(a)})},[e,i,o]);return c.exports.useEffect(()=>{const r=c.exports.Children.map(e,a=>{if(a&&a.type===Te)return{value:a.props.value,isActive:a.props.value===t}});s(r)},[e,t]),f(Ue,{children:l})}function nT({defaultValue:e,activeSpectrum:t,info:n,datum:o,displayerMode:s,ftCounter:i,mode:l}){const[r,a]=c.exports.useState(""),u=vd(),d=Y(),{handleChangeOption:h,handleFullZoomOut:m}=ms(),g=c.exports.useCallback(y=>{a(y),h(y)},[h]);c.exports.useEffect(()=>{a(e)},[e]);const x=c.exports.useCallback(()=>{d({type:hc,value:""}),d({type:Ja,selectedFilter:null})},[d]);return _(Ue,{children:[_(tT,{value:r,onChange:g,children:[u("hideZoomTool")&&f(Te,{value:F.zoom.id,id:"zoomIn",title:`${F.zoom.label} ( Press z )`,children:f("div",{style:{fontSize:14},children:f(Kn,{})})},F.zoom.id),u("hideZoomOutTool")&&f(ke.Item,{id:"zoom-out",onClick:m,title:"Horizontal zoom out ( Press f ), Horizontal and Vertical zoom out, double click ( Press ff )",children:f("div",{style:{fontSize:14},children:f(Eh,{})})}),s===X.DM_1D&&u("hidePeakTool")&&f(Te,{value:F.peakPicking.id,title:`${F.peakPicking.label} ( Press p )`,isVisible:!!(t&&!(n==null?void 0:n.isFid)),id:"peakPicking",children:f(Ah,{})},F.peakPicking.id),s===X.DM_1D&&u("hideIntegralTool")&&f(Te,{value:F.integral.id,isVisible:!!(t&&!(n==null?void 0:n.isFid)),id:"integralPicking",title:`${F.integral.label} ( Press i )`,children:f(Rr,{})},F.integral.id),s===X.DM_2D&&u("hideZonePickingTool")&&f(Te,{value:F.zone2D.id,id:"zone2d",isVisible:!!(t&&!(n==null?void 0:n.isFid)),title:`${F.zone2D.label} ( Press r )`,children:f(Th,{})},F.zone2D.id),s===X.DM_2D&&u("hideSlicingTool")&&f(Te,{value:F.slicingTool.id,isVisible:!!(t&&!(n==null?void 0:n.isFid)),id:"slic",title:`${F.slicingTool.label}`,children:f("p",{children:"Slic"})},F.slicingTool.id),s===X.DM_1D&&u("hideAutoRangesTool")&&f(Te,{value:F.rangesPicking.id,isVisible:!!(t&&!(n==null?void 0:n.isFid)),title:`${F.rangesPicking.label} ( Press r )`,id:"ranges-pick",children:f(Fr,{})},F.rangesPicking.id),s===X.DM_1D&&u("hideMultipleSpectraAnalysisTool")&&i>1&&l==="RTL"&&f(Te,{value:F.multipleSpectraAnalysis.id,id:"multipleSpectraAnalysis",title:F.multipleSpectraAnalysis.label,children:f(al,{})},F.multipleSpectraAnalysis.id),s===X.DM_1D&&u("hideZeroFillingTool")&&f(Te,{value:F.zeroFilling.id,isVisible:li({info:n}),id:"zeroFilling",title:F.zeroFilling.label,children:f(Dh,{})},F.zeroFilling.id),s===X.DM_1D&&u("hidePhaseCorrectionTool")&&f(Te,{value:F.phaseCorrection.id,id:"phaseCorrection",title:`${F.phaseCorrection.label} ( Press a )`,isVisible:!!(t&&n&&si({info:n})&&o.im),children:f(Ih,{})},F.phaseCorrection.id),s===X.DM_1D&&u("hideBaseLineCorrectionTool")&&f(Te,{value:F.baseLineCorrection.id,id:"baseLineCorrection",title:`${F.baseLineCorrection.label} ( Press b )`,isVisible:!!(t&&n&&ni({info:n})),children:f(Mh,{})},F.baseLineCorrection.id),s===X.DM_1D&&u("hideExclusionZonesTool")&&!(n==null?void 0:n.isFid)&&i>0&&f(Te,{value:F.exclusionZones.id,title:`${F.exclusionZones.label} ( Press e )`,id:"exclusionZones",children:f("div",{style:{fontSize:18},children:f(al,{})})},F.exclusionZones.id)]}),s===X.DM_1D&&u("hideFFTTool")&&n&&oi({info:n})&&f(ke.Item,{id:"fft-filter",className:"cheminfo",title:"FFT Filter",onClick:x,children:f(Rh,{})})]})}const oT=c.exports.memo(nT);function sT({defaultValue:e=F.zoom.id}){const{activeSpectrum:t,displayerMode:n,activeTab:o,mode:s}=$(),i=Dd();return f(oT,k(b({},i),{activeSpectrum:t,displayerMode:n,activeTab:o,defaultValue:e,mode:s}))}function iT({selectedTool:e}){return f("div",{style:{fontSize:18},children:_(ke,{orientation:"vertical",children:[f(sT,{defaultValue:e}),f(eT,{})]})})}const lT=c.exports.memo(iT);function rT(){const{toolOptions:{selectedTool:e}}=$();return f(lT,{selectedTool:e})}const aT=P`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
  margin-left: -1px;
`,cT=P`
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
    border-left: 0.55px #bbbbbbimport preferencesReducer from './reducer/preferencesReducer';
 solid;
    border-right: 0.55px #bbbbbb solid;
  }
`,uT={},dT={spectra:[]};function pT(e){return p(Ph,{style:{width:"100%"},children:p(Nh,{FallbackComponent:j1,children:p(hT,b({},e))})})}function hT({data:e=dT,workspace:t="default",preferences:n=uT,getSpinner:o=Eu,onDataChange:s,emptyText:i}){const l=c.exports.useRef(null),r=c.exports.useRef(null),[a,u]=Fh(!1),d=_h(l,a,{onClose:()=>{u(!1)}}),[h,m]=c.exports.useReducer(Oy,vu,Fy),[g,x]=c.exports.useReducer(i0,Nu),{displayerMode:y,data:C}=h;c.exports.useEffect(()=>{HA(h.actionType)&&(s==null||s(h))},[s,h]);const v=c.exports.useMemo(()=>_y(m),[]);c.exports.useEffect(()=>{var N;(N=l.current)==null||N.focus()},[d]),c.exports.useEffect(()=>{x({type:Iu,payload:{display:n,workspace:t,dispatch:x}})},[n,t]),c.exports.useEffect(()=>{v({type:bt,isLoading:!0}),e&&v({type:bi,payload:e})},[e,v]);const S=c.exports.useCallback(N=>{Bt(N)||N.preventDefault()},[]),E=c.exports.useCallback(()=>{v({type:Oo,payload:!0})},[v]),T=c.exports.useCallback(()=>{v({type:Oo,payload:!1})},[v]);return p(fv,{value:{rootRef:l.current,elementsWraperRef:r.current},children:p(l0,{value:g,children:p("div",{onMouseEnter:E,onMouseLeave:T,style:{height:"100%",position:"relative"},children:p(rv,{wrapperRef:r.current,children:p(Hy,{value:v,children:p($y,{value:h,children:p(hv,{wrapperRef:r.current,children:p(A0,{children:p(w0,{spectraData:C,children:p(Yy,{value:o,children:p("div",{className:"nmrium-container",ref:l,css:cT,onContextMenu:S,style:{height:"100%",width:"100%"},children:p(OA,{children:w("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"white",width:"100%"},children:[p(IA,{isFullscreen:d,onMaximize:u}),w("div",{style:{display:"flex",flexDirection:"row",height:"100%"},children:[p(rT,{}),w(Lh,{initialSeparation:"590px",orientation:"horizontal",sideSeparation:"end",children:[w("div",{css:aT,children:[p(tA,{}),p("div",{"data-test-id":"viewer",style:{width:"100%",height:"100%"},children:y===X.DM_1D?p(B1,{emptyText:i}):p(Z0,{emptyText:i})})]}),p(eA,{})]}),p("div",{ref:r,id:"main-wrapper",style:{position:"absolute",pointerEvents:"none",zIndex:0,left:0,right:0,top:0,bottom:0}},String(d))]})]})})})})})})})})})})})})})}var fT=c.exports.memo(pT);function mT(e,t){let n=[];function o(s){Object.keys(s).forEach(i=>{t===i&&n.push({[i]:s[i]}),Array.isArray(s[i])?s[i].forEach(l=>{o(l)}):typeof s[i]=="object"&&s[i]!==null&&o(s[i])})}return o(e),n}function gT(e){const[t,n]=c.exports.useState(),[o,s]=c.exports.useState("");c.exports.useEffect(()=>{const l=mT(e,o);n(o?l:e)},[e,o]);const i=c.exports.useCallback(Xo(l=>{const r=l.target.value;s(r)},500),[e]);return _("div",{style:{display:"flex",flexDirection:"column",paddingTop:"10px"},children:[f("input",{style:{border:"1px solid gray",padding:"5px"},type:"text",placeholder:"Search for key...",onChange:i}),f(Or,{data:t}),";"]})}function Id(){const[e,t]=c.exports.useState(),[n,o]=c.exports.useState({}),s=c.exports.useCallback(async l=>{try{const r=await Rt(l,{asBuffer:!0}),a=new TextDecoder("utf8"),u=JSON.parse(a.decode(r[0].binary));t(u)}catch{alert("Invalid JSON file")}},[]),i=c.exports.useCallback(l=>{o(l)},[]);return _("div",{style:{display:"flex",height:"100vh",padding:"20px"},children:[f("div",{style:{flex:9},children:f(fT,{data:e,onDataChange:i})}),_("div",{style:{display:"flex",flexDirection:"column",padding:"10px",flex:3},children:[f("div",{style:{flex:3},children:f(Oh,{onDrop:s,color:"gray"})}),f("div",{style:{flex:9},children:f(gT,{data:n})})]})]})}var xT=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Id});const bT=c.exports.lazy(()=>pt(()=>import("./TestHighlight.37c91ebb.js"),["assets/TestHighlight.37c91ebb.js","assets/vendor.3abbb066.js"]));function yT(){return f(c.exports.Suspense,{fallback:null,children:_(jo,{children:[f(ft,{path:"/test/highlight",component:bT}),f(ft,{path:"/",component:Id}),f(ft,{render:()=>f("div",{children:"Page not found"})})]})})}$h.render(f(Hh,{children:_(jo,{children:[f(ft,{path:"/test",component:yT}),f(ft,{path:"/",render:e=>f(uf,b({},e))})]})}),document.getElementById("root"));export{A0 as H,fT as N,ds as c,le as u};
//# sourceMappingURL=index.061bc11b.js.map
