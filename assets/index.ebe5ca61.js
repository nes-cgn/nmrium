var Kd=Object.defineProperty,qd=Object.defineProperties;var Jd=Object.getOwnPropertyDescriptors;var ho=Object.getOwnPropertySymbols;var dr=Object.prototype.hasOwnProperty,pr=Object.prototype.propertyIsEnumerable;var ur=(e,t,n)=>t in e?Kd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))dr.call(t,n)&&ur(e,n,t[n]);if(ho)for(var n of ho(t))pr.call(t,n)&&ur(e,n,t[n]);return e},k=(e,t)=>qd(e,Jd(t));var hr=e=>typeof e=="symbol"?e:e+"",G=(e,t)=>{var n={};for(var o in e)dr.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&ho)for(var o of ho(e))t.indexOf(o)<0&&pr.call(e,o)&&(n[o]=e[o]);return n};import{r as c,M as Nl,S as Qd,c as M,w as ep,j as w,a as p,F as tp,E as np,b as Uo,R as bt,d as f,e as _,x as Jn,f as Ml,g as Ko,m as _l,h as op,i as sp,k as Ls,l as ip,n as rp,o as To,p as fr,z as lp,q as ap,s as Fl,t as mr,u as an,v as bn,y as Ll,A as cp,B as We,C as up,D as dp,G as pp,H as hp,I as Ol,J as fp,K as mp,L as gp,N as Os,O as xp,P as bp,Q as Et,T as yp,U as vp,V as Cp,W as Sp,X as kp,Y as wp,Z as gr,_ as un,$ as Ep,a0 as Ap,a1 as Je,a2 as yt,a3 as oe,a4 as ze,a5 as Tp,a6 as Qn,a7 as $l,a8 as xr,a9 as Hl,aa as Dp,ab as B,ac as ni,ad as Ip,ae as zl,af as $s,ag as oi,ah as Do,ai as Ve,aj as Pp,ak as Rp,al as Vl,am as si,an as ii,ao as et,ap as Np,aq as qo,ar as jl,as as ri,at as Mp,au as _p,av as dn,aw as qe,ax as br,ay as $e,az as Fp,aA as Lp,aB as Op,aC as $p,aD as he,aE as Hp,aF as yr,aG as pn,aH as zp,aI as Vp,aJ as At,aK as jp,aL as Bp,aM as Bl,aN as Vn,aO as Xl,aP as Xp,aQ as Yp,aR as Gp,aS as Wp,aT as Zp,aU as Up,aV as Kp,aW as Q,aX as ae,aY as qp,aZ as Yl,a_ as Gl,a$ as Wl,b0 as Jp,b1 as Qp,b2 as eh,b3 as rt,b4 as Nn,b5 as Jo,b6 as th,b7 as yn,b8 as Zl,b9 as li,ba as Ul,bb as Kl,bc as nh,bd as oh,be as sh,bf as ih,bg as rh,bh as ql,bi as lh,bj as ah,bk as Jl,bl as ch,bm as Hs,bn as uh,bo as eo,bp as Ql,bq as Qo,br as ea,bs as dh,bt as wo,bu as ph,bv as hh,bw as fh,bx as mh,by as gh,bz as xh,bA as ta,bB as bh,bC as Io,bD as yh,bE as Re,bF as Mn,bG as es,bH as na,bI as vh,bJ as Ch,bK as lt,bL as Sh,bM as kh,bN as wh,bO as Eh,bP as Ah,bQ as Th,bR as Dh,bS as Ih,bT as Ph,bU as Rh,bV as Nh,bW as oa,bX as vr,bY as Mh,bZ as _h,b_ as Cr,b$ as Fh,c0 as we,c1 as Lh,c2 as Oh,c3 as $h,c4 as Hh,c5 as zh,c6 as Vh,c7 as jh,c8 as Bh,c9 as Xh,ca as Yh,cb as Gh,cc as Wh,cd as ks,ce as ws,cf as Zh,cg as Uh,ch as Kh,ci as Sr,cj as qh,ck as Jh,cl as Qh,cm as ef,cn as tf,co as nf,cp as of,cq as sf,cr as rf,cs as lf,ct as af,cu as cf}from"./vendor.50bee1a9.js";const uf=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};uf();var kr=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/ethylbenzene/full.json",title:"FULL ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Workspaces",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"},{file:"./exercises/cytisine/hsqc_hmbc.json",title:"Exercise 3",view:"Exercise"},{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"},{title:"Prediction",view:"Prediction"}]},{title:"Test",view:"Test"}];function df(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t.push(sa(n.groupName,[n],[])):t.push(c.exports.createElement(Nl,b({key:n.title},n),n.title));return t}function sa(e,t=[],n=[],o=0){let s=n,i=[];o!==-1&&s[o]&&(s[o]=c.exports.cloneElement(s[o],{},i));for(const r in t)if(t[r].children&&Array.isArray(t[r].children)){const l=c.exports.createElement(Qd,{key:r+e,title:t[r].groupName});return s.push(l),sa(r+e,t[r].children,s,0)}else i.push(c.exports.createElement(Nl,b({key:r+e},t[r]),t[r].title));return s}function pf(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t=t.concat(ia([n],[])):t.push(n);return t}function ia(e=[],t=[]){let n=t;for(const o of e){if(o.children&&Array.isArray(o.children))return ia(o.children,n);t.push(o)}return n}function $t(e=""){const t=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(e);let n="";if(t){const o=t[1].split("/");n=o.length>2?o[o.length-2]+o[o.length-1]:o[o.length-1]}return n+e.replace(/\.|\s|\//g,"")}const hf=M`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,ff=M`
  width: 260px;
`,mf=M`
  width: 3%;
`,gf=M`
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
`,xf=M`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,bf=M`
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
`,yf=M`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,vf=M`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;function Cf(e){const t=c.exports.useMemo(()=>df(e.routes),[e.routes]),n=e.menuIsClosed?"none":"block";return w("div",{css:M(hf,e.menuIsClosed?mf:ff),children:[w("div",{css:xf,children:[p("div",{style:{display:n,padding:"0.5rem 0.7rem"},children:p("a",{css:M(bf,yf),children:"NMRium"})}),p("button",{type:"button",css:gf,onClick:e.onMenuToggle,children:p(tp,{})})]}),p("div",{css:vf,style:{display:n},children:p(np,{onClick:o=>{e.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${(o.item.props.view||"View")+$t(o.item.props.file)}`)},mode:"inline",children:t})})]})}var Sf=ep(c.exports.memo(Cf));const kf="modulepreload",wr={},wf="./",it=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${wf}${o}`,o in wr)return;wr[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":kf,s||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),s)return new Promise((l,a)=>{r.addEventListener("load",l),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},ai={Exam:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Exam.85b89082.js"),["assets/Exam.85b89082.js","assets/vendor.50bee1a9.js"]))),Exercise:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Exercise.d9f37c78.js"),["assets/Exercise.d9f37c78.js","assets/vendor.50bee1a9.js"]))),SingleView:c.exports.memo(c.exports.lazy(()=>it(()=>import("./SingleView.83022a68.js"),["assets/SingleView.83022a68.js","assets/vendor.50bee1a9.js"]))),Test:c.exports.memo(c.exports.lazy(()=>it(()=>Promise.resolve().then(function(){return uD}),void 0))),View:c.exports.memo(c.exports.lazy(()=>it(()=>import("./View.fbde74ea.js"),["assets/View.fbde74ea.js","assets/vendor.50bee1a9.js"]))),TwoInstances:c.exports.memo(c.exports.lazy(()=>it(()=>import("./TwoInstances.d1280390.js"),["assets/TwoInstances.d1280390.js","assets/vendor.50bee1a9.js"]))),Teaching:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Teaching.ecf11851.js"),["assets/Teaching.ecf11851.js","assets/vendor.50bee1a9.js"]))),Prediction:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Prediction.d1ab61f7.js"),["assets/Prediction.d1ab61f7.js","assets/View.fbde74ea.js","assets/vendor.50bee1a9.js"])))},Ef=M`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,Af=M`
  width: calc(100% - 260px);
`,Tf=M`
  width: 98%;
  margin-left: 20px !important;
`;function Df(e){const{routes:t=[],baseURL:n}=e,o=c.exports.useMemo(()=>pf(t),[t]),[s,i]=c.exports.useState(!1),r=c.exports.useCallback(()=>i(!s),[s]);return w("div",{style:{position:"relative",top:0,height:"100vh"},children:[p(Sf,k(b({},e),{routes:t,menuIsClosed:s,onMenuToggle:r})),p("div",{css:M(Ef,s?Tf:Af),children:p(c.exports.StrictMode,{children:p(c.exports.Suspense,{fallback:p("div",{children:"Loading..."}),children:w(Uo,{children:[o.map(l=>p(bt,{path:`/SamplesDashboard/:id/${(l.view||"View")+$t(l.file)}`,render:a=>p(If,k(b({},a),{prop:l,baseURL:n}))},$t(l.file))),o.length>0&&p(bt,{path:"/",render:()=>{const l=o[0],a=l.view?l.view:"View",u=ai[a];return p(u,b({},l[0]))}},$t(o[0].file))]})})})})]})}function If(e){const{match:{params:{id:t}},prop:n,baseURL:o}=e,s=n.view?n.view:"View",i=ai[s];return p(i,k(b({},n),{id:$t(n.file),baseURL:o}),t)}function Pf(e){return f("div",{style:{position:"relative",top:0,height:"100vh"},children:f("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"},children:f(c.exports.Suspense,{fallback:f("div",{children:"Loading..."}),children:f(Uo,{children:f(bt,{path:"/",render:t=>{const{match:{params:{id:n}}}=t,o=e.view?e.view:"SingleView",s=ai[o];return f(s,k(b({},e),{id:$t(e.patrh)}),n)}},$t(e.path))})})})})}const Mt={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function Rf(e){const t=await fetch(e);try{return Nf(t),await t.json()}catch(n){return console.error(n),null}}function Nf(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}const Mf=e=>{const[t,n]=c.exports.useState({isLoaded:!1,status:200,routes:[]}),[o,s]=c.exports.useState(""),i=c.exports.useCallback(()=>{n({isLoaded:!0,status:200,routes:kr})},[]),r=(a="")=>a.substring(a.lastIndexOf(".")+1),l=window.location.href;return c.exports.useEffect(()=>{const a=new URL(l).searchParams;if(a.has("sampleURL")){const u=a.get("sampleURL");if(!u)return;switch(r(u).toLowerCase()){case"json":{s("multi"),Rf(u).then(h=>{if(h){const m=u.replace(/^(?<url>.*[\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),g=JSON.parse(JSON.stringify(h).replace(/\.\/+?/g,m));n({isLoaded:!0,status:200,routes:g,baseURL:m})}else n({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{s("single"),n({isLoaded:!0,status:200,path:u});break}}}else s("multi"),n({isLoaded:!0,status:200,routes:kr,baseURL:"./"})},[l]),t.isLoaded?o&&o==="single"?f(Pf,k(b({},e),{path:t.path})):f(Df,k(b({},e),{routes:t.routes,baseURL:t.baseURL})):f("div",{style:Mt.bodyContainer,children:f("div",{style:b(b({},Mt.container),t.status===200?Mt.normal:Mt.error),children:t.status===200?_("div",{children:[f("p",{style:Mt.normalHeader,children:"Please wait"}),f("p",{children:"We will redirect you in a minute"})]}):_("div",{children:[f("p",{style:Mt.errorHeader,children:"404"}),f("p",{children:"Resource not found."}),f("button",{style:Mt.loadButton,type:"button",onClick:i,children:"Load local samples"})]})})})};function Gt(e){const t=["Alt","AltGraph","CapsLock","Control","Meta","NumLocK","ScrollLock","Shift","OS"];for(const n of t)if(e.getModifierState(n))return!0;return!1}const Po=2048;function _f(e,t,n,o,s){const{fromIndex:i,toIndex:r}=Jn(e,{from:n,to:o});if(r-i<=Po){const l={x:e.subarray(i,r),y:t.subarray(i,r)},a=Ml(l,{frequency:s,takeBestPartMultiplet:!0,symmetrizeEachStep:!0});return a&&a.chemShift===void 0?void 0:{multiplicity:a.js.map(u=>u.multiplicity).join(""),kind:"signal",delta:a.chemShift,js:a.js}}else throw new Error(`length of signal should not exceed ${Po} points`)}const ra={step:"initial",brush:{start:null,end:null},startX:0,endX:0,startY:0,endY:0},Tt=c.exports.createContext(ra);function la({children:e,className:t,style:n,onBrush:o=()=>null,onZoom:s=()=>null,onDoubleClick:i=()=>null,onClick:r=()=>null,noPropagation:l}){const[a,u]=c.exports.useReducer(Ff,ra),[d,h]=c.exports.useState(0),m=c.exports.useRef([]),g=c.exports.useCallback(C=>(C.button===0&&(l&&C.stopPropagation(),u({type:"DOWN",shiftKey:C.shiftKey,altKey:C.altKey,screenX:C.screenX,screenY:C.screenY,clientX:C.clientX,clientY:C.clientY,boundingRect:C.currentTarget.getBoundingClientRect()}),h(C.timeStamp)),!1),[l]),x=c.exports.useCallback(C=>{C.persist();const E=C.timeStamp,T=C.currentTarget.getBoundingClientRect(),R=C.clientX-T.x,I=C.clientY-T.y,N=Ko(()=>{E-d<=150&&m.current.length===1&&r(k(b({},C),{x:R,y:I})),m.current=[]},200);m.current.push(N),N(),m.current.length>1&&(_l(m.current,A=>A.cancel()),m.current=[],i(k(b({},C),{x:R,y:I})))},[d,r,i]),y=c.exports.useCallback(C=>{const E=C.currentTarget.getBoundingClientRect(),T=C.clientX-E.x,R=C.clientY-E.y,{deltaY:I,deltaX:N,shiftKey:A,deltaMode:P}=C;s({deltaY:I||N,shiftKey:A,deltaMode:P,x:T,y:R})},[s]);c.exports.useEffect(()=>{const{step:C,startX:E,endX:T,startY:R,endY:I}=a;C==="end"&&Math.hypot(T-E,I-R)>5&&(o(a),u({type:"DONE"}))},[o,a]);const S=c.exports.useCallback(C=>{u({type:"MOVE",screenX:C.screenX,screenY:C.screenY,clientX:C.clientX,clientY:C.clientY})},[]),v=c.exports.useCallback(C=>(u({type:"UP",clientX:C.clientX,clientY:C.clientY}),!1),[]);return f(Tt.Provider,{value:a,children:f("div",{className:t,style:n,onMouseDown:g,onMouseUp:v,onMouseMove:S,onClick:x,onWheel:y,children:e})})}function Ff(e,t){switch(t.type){case"UP":if(e.step==="brushing"||e.step==="start"){const{clientX:n,clientY:o}=t;return k(b({},e),{endX:n-e.boundingRect.x,endY:o-e.boundingRect.y,step:e.step==="start"?"initial":"end"})}return e;case"DOWN":if(e.step==="initial"||e.step==="end"){const{screenX:n,screenY:o,clientX:s,clientY:i,boundingRect:r,shiftKey:l,altKey:a}=t,u=s-r.x,d=i-r.y;return k(b({},e),{shiftKey:l,altKey:a,startX:u,startY:d,startScreenX:n,startScreenY:o,startClientX:s,startClientY:i,boundingRect:r,step:"start"})}return e;case"MOVE":if(e.step==="start"||e.step==="brushing"){const{clientX:n,clientY:o}=t;return k(b({},e),{step:"brushing",endX:n-e.boundingRect.x,endY:o-e.boundingRect.y})}return e;case"DONE":if(e.step==="end")return k(b({},e),{step:"initial"});break;default:return e}}const pt=c.exports.createContext({}),Lf=pt.Provider;function Of(){return c.exports.useContext(pt)}function aa({children:e,className:t,style:n,noPropagation:o}){const[s,i]=c.exports.useState(null),r=c.exports.useCallback(a=>{const u=a.currentTarget.getBoundingClientRect(),d=a.clientX-u.x,h=a.clientY-u.y;i({x:d,y:h}),o&&a.stopPropagation()},[o]),l=c.exports.useCallback(a=>{i(null),o&&a.stopPropagation()},[o]);return f(Lf,{value:s,children:f("div",{className:t,style:n,onMouseMove:r,onMouseLeave:l,children:e})})}const ci=[{key:"signal",label:"Signal",value:"signal"},{key:"reference",label:"Reference",value:"reference"},{key:"solvent",label:"Solvent",value:"solvent"},{key:"impurity",label:"Impurity",value:"impurity"},{key:"standard",label:"Standard",value:"standard"},{key:"p1",label:"P1",value:"p1"},{key:"p2",label:"P2",value:"p2"},{key:"p3",label:"P3",value:"p3"}],to=["signal"],Ze={signal:"signal",mixed:"mixed"},ca="absolute",$f="Absolute";function Hf(e){if(!ua(e))throw new Error("absolute not applicable on this data");e.data.re=op(e.data),e.data.im=new Float64Array(0),e.info=k(b({},e.info),{isComplex:!1})}function ua(e){return!!(e.info.isComplex&&!e.info.isFid)}function zf(){return{once:!1,reduce:null}}var Vf=Object.freeze(Object.defineProperty({__proto__:null,id:ca,name:$f,apply:Hf,isApplicable:ua,reduce:zf},Symbol.toStringTag,{value:"Module"}));const jf="autoPhaseCorrection",Bf="Automatic phase correction",Xf={minRegSize:5,maxDistanceToJoin:128,magnitudeMode:!0,factorNoise:5};function da(e,t={}){if(!pa(e))throw new Error("phaseCorrection not applicable on this data");return sp(e.data,b(b({},Xf),t))}function pa(e){return!!(e.info.isComplex&&!e.info.isFid)}function Yf(e,t){let n=Object.assign({},e);for(const o in n)n[o]+=t[o];return{once:!0,reduce:n}}var Gf=Object.freeze(Object.defineProperty({__proto__:null,id:jf,name:Bf,apply:da,isApplicable:pa,reduce:Yf},Symbol.toStringTag,{value:"Module"}));const ha="baselineCorrection",Wf="Baseline correction",zs={airpls:"airPLS",polynomial:"Polynomial"};function Zf(e,t={}){if(!ui(e))throw new Error("baselineCorrection not applicable on this data");const{algorithm:n,zones:o=[]}=t;let{x:s,re:i}=e.data,r;switch(n){case"airpls":r=rp(s,i,t).corrected;break;case"polynomial":{const l={regressionOptions:t.degree};let a=Ls({x:s,y:i},{numberOfPoints:4096,zones:o}),u=ip(a.x,a.y,l),{regression:d}=u;r=new Float64Array(s.length);for(let h=0;h<i.length;h++)r[h]=i[h]-d.predict(s[h])}break;default:throw new Error(`baselineCorrection: algorithm unknown: ${n}`)}Object.assign(e.data,{re:r})}function ui(e){return!e.info.isFid}function Uf(){return{once:!1,reduce:null}}var Kf=Object.freeze(Object.defineProperty({__proto__:null,id:ha,name:Wf,baselineAlgorithms:zs,apply:Zf,isApplicable:ui,reduce:Uf},Symbol.toStringTag,{value:"Module"}));const Vs="centerMean",fa="Center Mean";function qf(e){var i;if(!ma(e))throw new Error("Center Mean is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=To.mean(t),s=To.mean(n||[]);for(let r=0;r<t.length;r++)t[r]-=o,n&&(n[r]-=s);e.data.re=t,n&&(e.data.im=n)}function ma(e){return!!(e.info.isComplex&&!e.info.isFid)}function Jf(){return{once:!1,reduce:null}}var Qf=Object.freeze(Object.defineProperty({__proto__:null,id:Vs,name:fa,apply:qf,isApplicable:ma,reduce:Jf},Symbol.toStringTag,{value:"Module"}));const js="digitalFilter",em="Digital Filter";function tm(e,t={}){if(!ga(e))throw new Error("Digital Filter is not applicable on this data");let{digitalFilterValue:n=0}=t,o=new Float64Array(e.data.re),s=new Float64Array(e.data.im),i=Math.floor(n);const r=0;i+=0;const l=new Float64Array(o.length),a=new Float64Array(s.length);l.set(o.slice(i)),l.set(o.slice(r,i),o.length-i),a.set(s.slice(i)),a.set(s.slice(r,i),s.length-i),e.data.re=l,e.data.im=a}function ga(e){return!!(e.info.isComplex&&e.info.isFid)}function nm(){return{once:!0,reduce:void 0}}var om=Object.freeze(Object.defineProperty({__proto__:null,id:js,name:em,apply:tm,isApplicable:ga,reduce:nm},Symbol.toStringTag,{value:"Module"}));const Yn="equallySpaced",xa="Equally Spaced";function sm(e,t={}){if(!ba(e))throw new Error("Equally Spaced is not applicable on this data");const{from:n,to:o,numberOfPoints:s,exclusions:i}=t,{x:r,re:l,im:a}=e.data,u=Ls({x:r,y:l},{from:n,to:o,numberOfPoints:s,exclusions:i});if(e.data.x=u.x,e.data.re=u.y,a){const d=Ls({x:r,y:l},{from:n,to:o,numberOfPoints:s,exclusions:i});e.data.im=d.y}}function ba(e){return!!(e.info.isComplex&&!e.info.isFid)}function im(){return{once:!1,reduce:null}}var rm=Object.freeze(Object.defineProperty({__proto__:null,id:Yn,name:xa,apply:sm,isApplicable:ba,reduce:im},Symbol.toStringTag,{value:"Module"}));const no="exclusionZones",lm="Exclusion Zones";function am(e,t=[]){if(!ya(e))throw new Error("Exclusion Zones filter not applicable on this data");const{x:n,re:o,im:s}=e.data;e.data.re=fr({x:n,y:o},{zones:t}).y,e.data.im=s&&fr({x:n,y:o},{zones:t})}function ya(e){return!!(e.info.isComplex&&e.info.isFt)}function cm(e,t){return{once:!0,reduce:lp(e.concat(t))}}var um=Object.freeze(Object.defineProperty({__proto__:null,id:no,name:lm,apply:am,isApplicable:ya,reduce:cm},Symbol.toStringTag,{value:"Module"}));const va="fft",dm="FFT";function pm(e){if(!di(e))throw new Error("fft not applicable on this data");let t=e.filters.some(n=>n.name==="digitalFilter"&&n.flag);if(Object.assign(e.data,ap(e.data,{applyZeroShift:!0})),t){let{digitalFilter:n}=e.info,o=(n-Math.floor(n))*Math.PI*2;Object.assign(e.data,Fl(e.data,0,o))}e.data.x=fm(e),e.info=k(b({},e.info),{isFid:!1,isFt:!0})}function di(e){return!!(e.info.isComplex&&e.info.isFid)}function hm(){return{once:!0,reduce:void 0}}function fm(e){const t=e.info,n=parseFloat(t.baseFrequency),o=parseFloat(t.frequencyOffset),s=parseFloat(t.spectralWidth),i=o/n;let r=.5*s,l=e.data.x.length,a=i-r,u=s/(l-1);const d=new Array(l);for(let h=0;h<l;h++)d[h]=a,a+=u;return d}var mm=Object.freeze(Object.defineProperty({__proto__:null,id:va,name:dm,apply:pm,isApplicable:di,reduce:hm},Symbol.toStringTag,{value:"Module"}));const Ro="fromTo",Ca="From/To";function gm(e,t={}){if(!Sa(e))throw new Error("From/To filter not applicable on this data");const{x:n,re:o,im:s}=e.data,{from:i,to:r}=t,{fromIndex:l,toIndex:a}=Jn(n,{from:i,to:r});e.data.x=n.slice(l,a),e.data.re=o.slice(l,a),s&&(e.data.im=s.slice(l,a))}function Sa(e){return!!(e.info.isComplex&&!e.info.isFid)}function xm(e,t){return{once:!0,reduce:t}}var bm=Object.freeze(Object.defineProperty({__proto__:null,id:Ro,name:Ca,apply:gm,isApplicable:Sa,reduce:xm},Symbol.toStringTag,{value:"Module"}));const ka="lineBroadening",ym="Line broadening";function vm(e,t){if(!wa(e))throw new Error("lineBroadening not applicable on this data");let n=e.info.digitalFilter,o;n>0?o=Math.floor(n):o=0;const s=e.data.re,i=e.data.im,r=e.data.x,l=s.length,a=new Float64Array(l),u=new Float64Array(l),d=(r[l-1]-r[0])/(l-1),h=-t*Math.exp(1),m=Math.exp(h*d);let g=Math.exp(h*r[0]);for(let x=0;x<l-o;x++)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;g=Math.exp(h*r[0]);for(let x=l;x>l-o;x--)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;e.data=k(b({},e.data),{re:a,im:u})}function wa(e){return!!(e.info.isComplex&&e.info.isFid)}function Cm(e,t){return{once:!0,reduce:e+t}}var Sm=Object.freeze(Object.defineProperty({__proto__:null,id:ka,name:ym,apply:vm,isApplicable:wa,reduce:Cm},Symbol.toStringTag,{value:"Module"}));const Bs="pareto",Ea="Pareto";function km(e){var o;if(!Aa(e))throw new Error("Pareto is not applicable on this data");const t=e.data.re.slice(0),n=(o=e.data.im)==null?void 0:o.slice(0);e.data.re=mr(t),n&&(e.data.im=mr(n))}function Aa(e){return!!(e.info.isComplex&&!e.info.isFid)}function wm(){return{once:!1,reduce:null}}var Em=Object.freeze(Object.defineProperty({__proto__:null,id:Bs,name:Ea,apply:km,isApplicable:Aa,reduce:wm},Symbol.toStringTag,{value:"Module"}));const jt="phaseCorrection",Ta="Phase correction";function Da(e,t={}){if(!pi(e))throw new Error("phaseCorrection not applicable on this data");let{ph0:n,ph1:o}=t;n*=Math.PI/180,o*=Math.PI/180,Object.assign(e.data,Fl(e.data,n,o))}function pi(e){return!!(e.info.isComplex&&!e.info.isFid)}function Am(e,t){return{once:!0,reduce:t}}var Tm=Object.freeze(Object.defineProperty({__proto__:null,id:jt,name:Ta,apply:Da,isApplicable:pi,reduce:Am},Symbol.toStringTag,{value:"Module"}));const oo="shiftX",Dm="Shift X";function Im(e,t=0){e.data.x=e.data.x.map(n=>n+t)}function Pm(){return!0}function Rm(e,t){return{once:!0,reduce:e+t}}var Nm=Object.freeze(Object.defineProperty({__proto__:null,id:oo,name:Dm,apply:Im,isApplicable:Pm,reduce:Rm},Symbol.toStringTag,{value:"Module"}));const Xs="standardDeviation",Ia="Standard Deviation";function Mm(e){var i;if(!Pa(e))throw new Error("Standard Deviation is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=To.standardDeviation(t),s=To.standardDeviation(n||[]);for(let r=0;r<t.length;r++)t[r]/=o,n&&(n[r]/=s);e.data.re=t,n&&(e.data.im=n)}function Pa(e){return!!(e.info.isComplex&&!e.info.isFid)}function _m(){return{once:!1,reduce:null}}var Fm=Object.freeze(Object.defineProperty({__proto__:null,id:Xs,name:Ia,apply:Mm,isApplicable:Pa,reduce:_m},Symbol.toStringTag,{value:"Module"}));const hi="zeroFilling",Ra="Zero Filling";function Lm(e,t){if(!fi(e))throw new Error("zeroFilling not applicable on this data");let n=e.filters.some(x=>x.name==="digitalFilter"&&x.flag),o=e.info.digitalFilter,s;o>0&&n?s=Math.floor(o):s=0;const{re:i,im:r,x:l}=e.data;let a=new Float64Array(t),u=new Float64Array(t),d=new Float64Array(t);const h=Math.min(t,i.length);a.set(i.slice(0,h-s)),u.set(r.slice(0,h-s)),d.set(l.slice(0,h-s));let m=l[1]-l[0],g=l[h-s-1];for(let x=h-s;x<t;x++)g+=m,d[x]=g;s>0&&s<t&&(a.set(i.slice(i.length-s),t-s),u.set(r.slice(i.length-s),t-s)),e.data=k(b({},e.data),{re:a,im:u,x:d})}function fi(e){return!!(e.info.isComplex&&e.info.isFid)}function Om(e,t){return{once:!0,reduce:t}}var $m=Object.freeze(Object.defineProperty({__proto__:null,id:hi,name:Ra,apply:Lm,isApplicable:fi,reduce:Om},Symbol.toStringTag,{value:"Module"}));const mi="shift2DX",Hm="Shift 2D X";function zm(e,t=0){e.data.minX+=t,e.data.maxX+=t}function Vm(){return!0}function jm(e,t){return{once:!0,reduce:e+t}}var Bm=Object.freeze(Object.defineProperty({__proto__:null,id:mi,name:Hm,apply:zm,isApplicable:Vm,reduce:jm},Symbol.toStringTag,{value:"Module"}));const gi="shift2DY",Xm="Shift 2D Y";function Ym(e,t=0){e.data.minY+=t,e.data.maxY+=t}function Gm(){return!0}function Wm(e,t){return{once:!0,reduce:e+t}}var Zm=Object.freeze(Object.defineProperty({__proto__:null,id:gi,name:Xm,apply:Ym,isApplicable:Gm,reduce:Wm},Symbol.toStringTag,{value:"Module"})),on=Object.freeze(Object.defineProperty({__proto__:null,absolute:Vf,baselineCorrection:Kf,lineBroadening:Sm,fft:mm,phaseCorrection:Tm,autoPhaseCorrection:Gf,shiftX:Nm,zeroFilling:$m,digitalFilter:om,fromTo:bm,equallySpaced:rm,standardDeviation:Fm,centerMean:Qf,pareto:Em,exclusionZones:um,shift2DX:Bm,shift2DY:Zm},Symbol.toStringTag,{value:"Module"}));const Um="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",Km=8;function q(){let e="";for(let t=0;t<Km;t++)e+=Um.charAt(Math.floor(Math.random()*62));return e}function Te(e,t=[]){let n=!1;for(let o of t){const s={name:o.name,label:on[o.name].name,value:o.options},i=Jm(e,o.name);if(i){const r=on[o.name].reduce(i.value,s.value);r.once?(n||(n=!0),r.reduce!=null&&r.reduce!==void 0&&Qm(e,i.id,r.reduce)):Er(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}else Er(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}if(n)t.length===1&&qm(e,t[0].name)?on[t[0].name].apply(e,t[0].options):hn(e);else for(let o of t)on[o.name].apply(e,o.options)}function qm(e,t){const n=e.filters.findIndex(o=>o.name===t);return e.filters.length===n+1}function Jm(e,t){return e.filters.find(n=>n.name===t)}function hn(e,t=null){const n=t||e.filters;Na(e,null,null,n)}function Na(e,t,n,o=null){e.filters=e.filters.slice(0),t&&(e.filters=e.filters.map(i=>k(b({},i),{flag:i.id===t?n:i.flag}),[])),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);const s=o||e.filters;for(let i in s){const r=e.filters[i];if(e.filters[i]=k(b({},e.filters[i]),{error:null}),r.flag)try{on[r.name].apply(e,r.value)}catch(l){e.filters[i]=k(b({},e.filters[i]),{error:l.message})}}}function xi(e,t){e.filters=e.filters.slice(0),e.filters=e.filters.filter(n=>n.id!==t),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);for(let n in e.filters){const o=e.filters[n];if(e.filters[n]=k(b({},e.filters[n]),{error:null}),o.flag)try{on[o.name].apply(e,o.value)}catch(s){e.filters[n]=k(b({},e.filters[n]),{error:s.message})}}}function Er(e,t,n=!0){const o=q();e.filters=e.filters.slice(0),delete t.isSnapshot,e.filters.push(k(b({},t),{id:o,flag:!0,isDeleteAllow:n}))}function Qm(e,t,n){e.filters=e.filters.slice(0);const o=e.filters.findIndex(s=>s.id===t);delete e.filters[o].isSnapshot,e.filters[o]=k(b({},e.filters[o]),{value:n})}const Ma=["#C10020","#007D34","#803E75","#FF6800","#B32851","#7F180D","#232C16","#A6BDD7","#CEA262","#817066","#FF8E00","#F6768E","#00538A","#FF7A5C","#53377A","#FFB300","#F4C800","#93AA00","#593315","#F13A13"],Ar={cosy:{positiveColor:"darkblue",negativeColor:"blue"},roesy:{positiveColor:"#e75480",negativeColor:"yellow"},noesy:{positiveColor:"#e75480",negativeColor:"yellow"},tocsy:{positiveColor:"green",negativeColor:"yellow"},hsqc:{positiveColor:"black",negativeColor:"yellow"},hmbc:{positiveColor:"darkviolet",negativeColor:"yellow"}};function eg(e,t=[]){if(!Ar[e]){const n=bi(!1,t),o=_a(n,50);return{positiveColor:n,negativeColor:o}}return Ar[e]}function Ys(e){const t=Math.max(0,Math.min(100,e)),o=Math.round(t/100*255).toString(16);return t===100?"":o.padStart(2,"0")}function _a(e,t){return e+Ys(t)}function bi(e=!1,t=[],n=100){const o=Ma.filter(s=>!t.includes(s));if(o.length>0&&!e)return o[0]+Ys(n);{let i=String(`#${Math.random().toString(16).slice(2,8).toUpperCase()}`).replace(/[^0-9a-f]/gi,"");i.length<6&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);let r="#",l;for(let a=0;a<3;a++)l=parseInt(i.substr(a*2,2),16),l=Math.round(Math.min(Math.max(0,l+l*-.25),255)).toString(16),r+=`00${l}`.substr(l.length);return r+Ys(n)}}function tg(e){return an({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.integrals)}function Fa(e){const{x:t}=e.data;return(t[t.length-1]-t[0])/1e4}function Wt(e){const t=(e==null?void 0:e.filters)&&(e==null?void 0:e.filters.find(n=>n.name===oo));return t!=null&&t.flag?t.value:0}function ng(e,t,n){var o;for(const{x:s}of((o=t.peaks)==null?void 0:o.values)||[])if(Math.abs(e.x-s)<n)return!0;return!1}function La(e,t){const n=Wt(t),o=Fa(t);return e.reduce((s,i)=>(ng(i,t,o)||s.push({id:(i==null?void 0:i.id)||q(),originalX:i.x-n,x:i.x,y:i.y,width:i.width}),s),[])}function og(e,t){var n;return an({values:[],options:{}},e.peaks,{values:La(((n=e==null?void 0:e.peaks)==null?void 0:n.values)||[],t)})}function sg(e,t,n){var o;for(const{from:s,to:i}of((o=t.ranges)==null?void 0:o.values)||[])if(Math.abs(e.from-s)<n&&Math.abs(e.to-i)<n)return!0}function vn(e,t){const{x:n,re:o}=t.data,s=Wt(t),i=Fa(t);return e.reduce((r,l)=>{if(sg(l,t,i))return r;const a=bn({x:n,y:o},{from:l.from,to:l.to,reverse:!0}),u=l.signals.map(d=>{const x=d,{kind:h=null,id:m}=x,g=G(x,["kind","id"]);return b({kind:h||"signal",id:m||q(),originDelta:d.delta-s},g)});return r.push(k(b({},l),{kind:(u==null?void 0:u[0].kind)||Ze.signal,originFrom:l.from-s,originTo:l.to-s,id:l.id||q(),absolute:a,signals:u})),r},[])}function ig(e,t){var n;return an({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.ranges,{values:vn(((n=e==null?void 0:e.ranges)==null?void 0:n.values)||[],t)})}function ct(e,t={}){var o;const n={};return n.id=e.id||q(),n.source=Object.assign({jcampURL:null,file:{binary:null,name:"",extension:""}},e.source),n.display=Object.assign(k(b({name:(o=e.display)!=null&&o.name?e.display.name:q()},rg(e,t)),{isVisible:!0,isPeaksMarkersVisible:!0,isRealSpectrumVisible:!0}),e.display),n.info=Object.assign({nucleus:"1H",isFid:!1,isComplex:!1,dimension:1},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({x:[],re:[],im:[]},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.peaks=og(e,n),n.integrals=tg(e),n.ranges=ig(e,n),hn(n),lg(n),n}function rg(e,t){var o;let n="black";return((o=e==null?void 0:e.display)==null?void 0:o.color)===void 0?n=bi(!1,t["1d"]||[]):n=e.display.color,t["1d"]&&t["1d"].push(n),{color:n}}function lg(e){e.info.isFid&&e.filters.findIndex(t=>t.name===js)===-1&&e.info.digitalFilter&&Te(e,[{name:js,options:{digitalFilterValue:e.info.digitalFilter},isDeleteAllow:!1}])}function Oa(e,t,n){const{nucleus:o,solvent:s,name:i=null,frequency:r=400}=t,{x:l,y:a}=Ll(e,{frequency:r,nbPoints:524288}),u=ct({data:{x:l,im:null,re:a},display:{name:i},info:{nucleus:o,originFrequency:r,baseFrequency:r,pulseSequence:"",solvent:s,isFt:!0}},n);return u.ranges.values=vn(e,u),u}function ag(e,t){const{ranges:n,experiment:{nucleus:o,solvent:s},parts:i}=cp(e);return Oa(n,{nucleus:o,solvent:s,name:i[0]},t)}function Cn(e){const{display:{isRealSpectrumVisible:t},data:{x:n,re:o,im:s}}=e;return{x:n,y:t?o:s}}const Ht={"1H":{tms:{from:-.1,to:.1,nbPeaks:1,delta:0},tsp:{from:-.1,to:.1,nbPeaks:1,delta:0},glucose:{from:5.18,to:5.28,nbPeaks:2,delta:5.23}},"13C":{}};function cg(e={}){const{nucleus:t="1H",reference:n="tms"}=e;if(!Ht[t])throw new Error(`Nucleus not found: ${t}`);const o=Ht[t][n.toLowerCase()];if(!o)throw new Error(`Reference not found: ${n}`);return{from:o.delta-.05,to:o.delta+.05,delta:o.delta,nbPeaks:o.nbPeaks}}function ug(e,t){let{from:n,to:o,nbPeaks:s,targetX:i,reference:r}=t;if(r){let u=cg({reference:r,nucleus:e.nucleus});n=u.from,o=u.to,s=u.nbPeaks,i=u.delta}const{re:l,x:a}=e.data;return dg({x:a,y:l},{from:n,to:o},{nbPeaks:s,targetX:i})}function dg(e,t={},n={}){const{targetX:o=0,nbPeaks:s=1,gsd:i={minMaxRatio:.1,realTopDetection:!0,smoothY:!0,sgOptions:{windowSize:7,polynomial:3}}}=n;let{from:r,to:l}=t;if(r===void 0||l===void 0)return 0;const a=We(e.x,r),u=We(e.x,l),d={x:e.x.slice(a,u),y:e.y.slice(a,u)};let h=up(d,i).sort((g,x)=>x.y-g.y).slice(0,s);if(h.length===0)return 0;const m=dp(h.map(g=>g.x));return o-m}function pg(e,t){const n=e.integrals.values.findIndex(o=>o.id===t.id);if(n!==-1){const o=e.integrals.values[n].absolute/t.value,{values:s,sum:i}=e.integrals.values.reduce((r,l,a)=>{const u=l.absolute/o;return r.sum+=u,r.values[a]=k(b({},l),{integral:u}),r},{values:[],sum:0});e.integrals.values=s,e.integrals.options=k(b({},e.integrals.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:i})}}function $a(e){return to.includes(e.kind)}function Tr(e,t,n=null){return e.reduce((o,s)=>n&&n(s)===!0?o+=Math.abs(s[t]):o,0)}function Ha(e,t,n,o=!1){var a;const{values:s,options:i}=e,r=Tr(s,"absolute",n);let l=0;if(i.sum){if(e.options.isSumConstant||o)l=r>0?i.sum/r:0;else if((a=e.values)!=null&&a[0]){const u=e.values[0];l=(u[t]?u[t]:i.sum)/u.absolute}}e.values=e.values.map(u=>b(b({},u),n(u)&&{[t]:u.absolute*l})),!e.options.isSumConstant&&!o&&(e.options.sum=Tr(e.values,t,n))}function Sn(e,t=!1){Ha(e.integrals,"integral",$a,t)}function kn(e){return e.info.dimension===1}function hg(e,t){const{minMaxRatio:n,maxNumberOfPeaks:o,noiseFactor:s,lookNegative:i,windowFromIndex:r,windowToIndex:l}=t,a=pp(e.data.re.map(m=>Math.abs(m)));let{re:u,x:d}=e.data;r!==void 0&&l!==void 0&&(d=d.slice(r,l),u=u.slice(r,l));let h=hp({x:d,y:u},{lookNegative:i,noiseLevel:a*s,minMaxRatio:n,realTopDetection:!0,smoothY:!1,sgOptions:{windowSize:15,polynomial:3}});return h.sort((m,g)=>g.y-m.y),o<h.length&&(h=h.slice(0,o)),La(h,e)}function za(e,t){const{from:n,to:o}=t;let s=e.x.findIndex(l=>l>=n),i=e.x.findIndex(l=>l>=o)-1;s>i&&(s=i,i=s);const r=e.re.slice(s,i);if(r&&r.length>0){const l=Ol(r),a=r.findIndex(d=>d===l);return{x:e.x[s+a],y:l,xIndex:s+a}}return null}function Va(e){return(e==null?void 0:e.replace(/[0-9]/g,""))||""}function yi(e,t){let n=b({},e);const{molecules:o,nucleus:s}=t;if(e.sumAuto&&Array.isArray(o)&&o.length>0){const{mf:r,key:l}=o[0];n=k(b({},n),{sumAuto:!0,mf:r,moleculeKey:l})}else{const i=n,{mf:r,moleculeKey:l}=i,a=G(i,["mf","moleculeKey"]);n=k(b({},a),{sumAuto:!1})}return n.sum||(n.sum=ja(n.mf||null,s)),n}function ja(e,t){if(!e||!t)return 100;const o=Va(t),s=fg(e);return s[o]?s[o]:100}function vi(e,t){const{nucleus:n,options:o}=t;if(o.sumAuto){const{mf:i,moleculeKey:r}=o,l=ja(i,n);e.options=k(b({},e.options),{sumAuto:!0,moleculeKey:r,mf:i,sum:l})}else{const s=e.options,{mf:i,moleculeKey:r}=s,l=G(s,["mf","moleculeKey"]);e.options=k(b({},l),{sumAuto:!1,sum:o.sum})}}function fg(e){const t={},n=e.split(/(\d+)/);for(let o=0;o<n.length-1;o=o+2)t[n[o]]=Number(n[o+1]);return t}function Ci(e,t,n){const o=["ranges","integrals"];for(const s of e.data)if(kn(s))for(const i of o){const{moleculeKey:r,mf:l,sumAuto:a}=s[i].options;if((t===r||!r&&!l)&&a){const u=n?{mf:n.mf,moleculeKey:n.key}:{mf:void 0,moleculeKey:void 0};vi(s[i],{nucleus:s.info.nucleus,options:k(b({},u),{sumAuto:!0,sum:void 0})}),Dt(s,!0),Sn(s,!0)}}}function mg(e,t){return t===void 0?e.signals?e.signals.reduce((n,o)=>o.nbAtoms?o.nbAtoms+n:n,0):0:e.signals[t].nbAtoms||0}function gg(e,t){e.nbAtoms=mg(e,t),e.nbAtoms===0&&delete e.nbAtoms}function xg(e){delete e.diaIDs,delete e.nbAtoms,e.signals.forEach(t=>{delete t.diaIDs,delete t.nbAtoms}),delete e.nbAtoms}function jn(e,t="both",n={}){switch(t){case"both":xg(e);break;case"range":delete e.diaIDs,delete e.nbAtoms;break;case"signal":delete e.signals[n.signalIndex].diaIDs,delete e.signals[n.signalIndex].nbAtoms;break}return gg(e),e}function Ba(e){return e.kind===Ze.signal}function bg(e,t){return!e.signals.some(n=>n.kind===void 0||!t.includes(n.kind))}function Bt(e,t){const n=t.reduce((o,s)=>(s.id&&o.push(s.id),s.signals&&(o=o.concat(s.signals.map(i=>i.id,[]))),o),[]);e.dispatch({type:"REMOVE_ALL",payload:{id:n,axis:"x"}})}function yg(e){return e.signals&&bg(e,to)}function Dt(e,t=!1){Ha(e.ranges,"integration",yg,t)}function vg(e,t){const{from:n,to:o,molecules:s,nucleus:i}=t,{x:r,re:l}=e.data,a=bn({x:r,y:l},{from:n,to:o,reverse:!0}),u=_f(r,l,n,o,e.info.originFrequency);if(!!u)try{const d={id:q(),from:n,to:o,absolute:a,signals:[b({id:q()},u)],kind:Ze.signal,integration:0};e.ranges.options=yi(e.ranges.options,{molecules:s,nucleus:i}),e.ranges.values=e.ranges.values.concat(vn([d],e)),Dt(e)}catch{throw new Error("Could not calculate the multiplicity")}}function Cg(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,r=e.ranges.values.findIndex(a=>a.id===t.id),l=bn({x:s,y:i},{from:n,to:o,reverse:!0});r!==-1&&(e.ranges.values[r]=k(b(k(b({},e.ranges.values[r]),{originFrom:n,originTo:o}),t),{absolute:l}),Dt(e))}function Sg(e,t){const n=e.ranges.values.findIndex(o=>o.id===t.id);if(n!==-1&&e.ranges.options.sum){const{absolute:o,integration:s}=e.ranges.values[n],i=o/t.value,r=t.value/s*e.ranges.options.sum;e.ranges.options=k(b({},e.ranges.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:r}),e.ranges.values=e.ranges.values.map(l=>k(b({},l),{integration:l.absolute/i}))}}function kg(e,t){const{rangeID:n,signalID:o,newSignalValue:s}=t;let i=0;const r=e.ranges.values.findIndex(l=>l.id===n);if(r!==-1){const l=e.ranges.values[r].signals.findIndex(a=>a.id===o);i=s-e.ranges.values[r].signals[l].delta,e.ranges.values[r].signals[l].delta=s}return i}function wg(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,r=bn({x:s,y:i},{from:n,to:o,reverse:!0}),l=fp({x:s,y:i},{from:n,to:o}).y,a=mp({x:s,y:i},{from:n,to:o}).y,u=Wt(e);return{id:q(),originFrom:n-u,originTo:o-u,from:n,to:o,absolute:r,min:l,max:a}}const Eg={minMaxRatio:1,realTopDetection:!0,maxCriteria:!0,smoothY:!1,integrationSum:100,factorStd:5,clean:!0,sgOptions:{windowSize:7,polynomial:3}};function Ag(e,t={}){let{re:n,x:o}=e.data;const{originFrequency:s,nucleus:i}=e.info,{windowFromIndex:r,windowToIndex:l,peakPicking:a}=t,u=b(b({},Eg),a),d={frequency:s,nucleus:i,compile:!0,frequencyCluster:13,keepPeaks:!0};if(r!==void 0&&l!==void 0&&(o=o.slice(r,l),n=n.slice(r,l)),s){let m=1/s/(o[1]-o[0]),g=Math.max(Math.round(m/2),5);u.sgOptions={windowSize:g-g%2+1,polynomial:3}}return u.smoothY=void 0,u.sgOptions=void 0,gp({x:o,y:n},{peakPicking:u,ranges:d})}function Xa(e,t){const r=t,{molecules:n,nucleus:o}=r,s=G(r,["molecules","nucleus"]);s.impurities={solvent:e.info.solvent||""};const i=Ag(e,s);e.ranges.options=yi(e.ranges.options,{molecules:n,nucleus:o}),e.ranges.values=e.ranges.values.concat(vn(i,e)),Dt(e)}function Tg(e,t){e.integrals.values=e.integrals.values.map(n=>k(b({},n),{from:n.originFrom+t,to:n.originTo+t}))}function Dg(e,t){e.peaks.values=e.peaks.values.map(n=>{const o=n.originalX+t,s=We(e.data.x,o);return k(b({},n),{y:e.data.re[s],x:n.originalX+t})})}function Ig(e,t){e.ranges.values=e.ranges.values.map(n=>k(b({},n),{from:(n.originFrom||0)+t,to:(n.originTo||0)+t,signals:(n==null?void 0:n.signals)&&n.signals.map(o=>k(b({},o),{delta:(o.originDelta||0)+t}))}))}function wn(e){const t=Wt(e);Dg(e,t),Ig(e,t),Tg(e,t)}const Ya=20;var Y=(e=>(e.DM_1D="1D",e.DM_2D="2D",e))(Y||{});const _t={"2D":{top:100,right:50,bottom:70,left:100},"1D":{top:10,right:10,bottom:70,left:10}};function Pg(e,t={},n={}){const{dependentVariables:o,info:s,meta:i,source:r}=e;let l=Ga(o[0].components);return l.im&&(s.isComplex=!0),Array.isArray(s.nucleus)&&(s.nucleus=s.nucleus[0]),ct(k(b({},t),{source:r,info:s,meta:i,data:l}),n)}function Rg(e,t={},n={}){let o=e.dimensions[0],s=e.dependentVariables,i=o.quantityName,r=o.count,l=o.increment.magnitude,a=o.originOffset.magnitude,u=o.coordinatesOffset.magnitude,d=s[0].components[0],h=[],m=[];for(let C=d.length-1;C>0;C-=2)h.push(d[C-1]),m.push(d[C]);let g={},x,y;switch(i){case"frequency":y=0+u/a*1e6,x=l/a*1e6,g.re=h,g.im=m;break;case"time":y=a,x=l,g.re=h.reverse(),g.im=m.reverse().map(C=>-C);break}let S=[];for(let C=0;C<r;C++)S.push(y+C*x);return g.x=S,ct(k(b({},t),{data:g}),n)}function Ng(e,t,n,o){const{dependentVariables:s,info:i,meta:r}=e;let l=Ga(s[0].components);return Array.isArray(i.nucleus)&&(i.nucleus=i.nucleus[0]),ct(k(b({},t),{source:k(b({},t.source),{jcampSpectrumIndex:o}),info:i,meta:r,data:l}),n)}function Ga(e){var s,i,r,l,a,u;let t=(i=(s=e[0])==null?void 0:s.data)!=null&&i.x?e[0].data.x:[],n=(l=(r=e[0])==null?void 0:r.data)!=null&&l.y?e[0].data.y:[],o=(u=(a=e[1])==null?void 0:a.data)!=null&&u.y?e[1].data.y:null;return t[0]>t[1]&&(t.reverse(),n.reverse(),o&&o.reverse()),{x:t,re:n,im:o}}function Mg(e,t,n){let o=e.info.nucleus.indexOf(t);o===-1&&(o=0);let s={nucleus:e.info.nucleus[o],isFid:!1,isComplex:!1,dimension:1},i=o===0?e.data.minX:e.data.minY,r=o===0?e.data.maxX:e.data.maxY,l=o===0?e.data.z[0].length:e.data.z.length,a=new Float64Array(l);if(o===1)for(let d=0;d<e.data.z.length;d++)for(let h=0;h<e.data.z[0].length;h++)a[d]+=e.data.z[d][h];else for(let d=0;d<e.data.z[0].length;d++)for(const h of e.data.z)a[d]+=h[d];let u={x:Os({from:i,to:r},l),re:a};return ct({info:s,data:u},n)}function _g(e,t){const n=e.data,o=(n.maxX-n.minX)/(n.z[0].length-1),s=(n.maxY-n.minY)/(n.z.length-1),i=Math.floor((t.x-n.minX)/o),r=Math.floor((t.y-n.minY)/s);if(i<0||i>=n.z[0].length||r<0||r>=n.z.length)return;let l={nucleus:e.info.nucleus[0],isFid:!1,isComplex:!1,dimension:1},a={x:Os({from:e.data.minX,to:e.data.maxX},e.data.z[0].length),re:new Float64Array(e.data.z[0].length)};for(let x=0;x<e.data.z[0].length;x++)a.re[x]+=e.data.z[r][x];let u={nucleus:e.info.nucleus[1],isFid:!1,isComplex:!1,dimension:1},d={x:Os({from:e.data.minY,to:e.data.maxY},e.data.z.length),re:new Float64Array(e.data.z.length)},h=e.data.z.length-1;for(let x=0;x<e.data.z.length;x++)d.re[x]+=e.data.z[h--][i];const m=ct({info:l,data:a},{}),g=ct({info:u,data:d},{});return{horizontal:m,vertical:g}}const Wa={positive:{contourLevels:[0,21],numberOfLayers:10},negative:{contourLevels:[0,21],numberOfLayers:10}};class Fg{constructor(t,n=Wa,o={positive:10,negative:10}){this.options=n;const{positive:s,negative:i}=o;this.currentLevelPositive=s,this.currentLevelNegative=i;const r=Es(t.minX,t.maxX,t.z[0].length),l=Es(t.minY,t.maxY,t.z.length);this.conrec=new xp(t.z,{xs:r,ys:l,swapAxes:!1}),this.median=t.noise,this.minMax=t}getLevel(){return{levelPositive:this.currentLevelPositive,levelNegative:this.currentLevelNegative}}setLevel(t,n){this.currentLevelPositive=t,this.currentLevelNegative=n}setOptions(t){const n=t.positive.contourLevels,o=t.negative.contourLevels;this.currentLevelPositive>=n[1]?this.currentLevelPositive=n[1]:this.currentLevelPositive<=n[0]&&(this.currentLevelPositive=n[0]),this.currentLevelNegative>=o[1]?this.currentLevelNegative=o[1]:this.currentLevelNegative<=o[0]&&(this.currentLevelNegative=o[0]),this.options=t}wheel(t){const n=Math.sign(t),o=this.options.positive.contourLevels,s=this.options.negative.contourLevels;(this.currentLevelPositive>o[0]&&n===-1||this.currentLevelPositive<o[1]&&n===1)&&(this.currentLevelPositive+=n),(this.currentLevelNegative>s[0]&&n===-1||this.currentLevelNegative<s[1]&&n===1)&&(this.currentLevelNegative+=n)}shiftWheel(t){const n=Math.sign(t),[o,s]=this.options.positive.contourLevels;if(!(this.currentLevelPositive===o&&n===-1||this.currentLevelPositive>=s&&n===1))return this.currentLevelPositive+=n,[]}drawContours(){const t=this.currentLevelPositive/2+1,n=this.currentLevelNegative/2+1,{positive:{numberOfLayers:o},negative:{numberOfLayers:s}}=this.options;return{positive:this.getContours(t,{nbLevels:o}),negative:this.getContours(n,{negative:!0,nbLevels:s})}}getContours(t,n={}){const{negative:o=!1,timeout:s=2e3,nbLevels:i=10}=n,r=Math.max(Math.abs(this.minMax.maxZ),Math.abs(this.minMax.minZ));let l=Es(this.median*1*Math.pow(2,t),r,i,2);o&&(l=l.map(u=>-u));let a=[];try{a=this.conrec.drawContour({contourDrawer:"basic",levels:l,timeout:s})}catch(u){throw console.log(u),u}return a}}function Es(e,t,n,o){if(o!==void 0){const s=[];s[0]=0;for(let l=1;l<=n;l++)s[l]=s[l-1]+(o-1)/Math.pow(o,l);const i=s[n],r=new Array(n);for(let l=0;l<n;l++)r[l]=(t-e)*(1-s[l+1]/i)+e;return r}else{const s=(t-e)/(n-1);return Lg(e,t+s/2,s)}}function Lg(e,t,n){const o=[];for(let s=e;s<t;s+=n)o.push(s);return o}function so(e,t={}){var o;const n={};return n.id=e.id||q(),n.source=Object.assign({jcampURL:null},e.source),n.display=Object.assign(k(b({name:(o=e.display)!=null&&o.name?e.display.name:q()},Og(e,t)),{isPositiveVisible:!0,isNegativeVisible:!0,isVisible:!0,contourOptions:Wa,dimension:2}),e.display),n.info=Object.assign({nucleus:["1H","1H"],isFt:!0,isFid:!1,isComplex:!1,dimension:2},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({z:[],minX:0,minY:0,maxX:0,maxY:0},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.zones=Object.assign({values:[],options:{}},e.zones),n.processingController=new Fg(n.data,n.display.contourOptions),hn(n),n}function Og(e,t){var o,s;let n={positiveColor:"red",negativeColor:"blue"};return(((o=e==null?void 0:e.display)==null?void 0:o.negativeColor)===void 0||((s=e==null?void 0:e.display)==null?void 0:s.positiveColor)===void 0)&&(n=eg(e.info.experiment,t["2d"]||[])),t["2d"]&&t["2d"].push(n.positiveColor),n}function Gs(e){return e.info.dimension===2}function io(e){let t={xShift:0,yShift:0};return e!=null&&e.filters&&(t=e.filters.reduce((n,o)=>(o.name===mi&&(n.xShift=o!=null&&o.flag?o.value:0),o.name===gi&&(n.yShift=o!=null&&o.flag?o.value:0),n),{xShift:0,yShift:0})),t}function ro(e){const{xShift:t,yShift:n}=io(e);$g(e,{xShift:t,yShift:n})}function $g(e,{xShift:t,yShift:n}){e.zones.values=e.zones.values.map(o=>{var s;return k(b({},o),{signals:(s=o.signals)==null?void 0:s.map(i=>k(b({},i),{x:k(b({},i.x),{delta:i.x.originDelta+t}),y:k(b({},i.y),{delta:i.y.originDelta+n})}))})})}function Hg(e,t){return k(b({id:e.id},t===vt.ROW_DATA||t===vt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL,jcampSpectrumIndex:e.source.jcampSpectrumIndex}}),{zones:e.zones,filters:e.filters,display:e.display})}function zg(e,t,n){var s;const o=e.zones.values.findIndex(i=>i.id===t);if(o!==-1){const i=e.zones.values[o].signals.findIndex(l=>l.id===n.id),r=e.zones.values[o];if(i!==-1){const l=r.signals[i],a=(n==null?void 0:n.x)||(n==null?void 0:n.x)===0?n.x-l.x.delta:0,u=(n==null?void 0:n.y)||(n==null?void 0:n.y)===0?n.y-((s=l.y)==null?void 0:s.delta):0;return{xShift:a,yShift:u}}}return{xShift:0,yShift:0}}function Za(e,t){let n={};return t.selectedZone?(t.enhanceSymmetry=!1,n=jg(e,t.selectedZone)):n=e.data,Vg(n,k(b({},t),{info:e.info}))}function Vg(e,t){const{thresholdFactor:n,clean:o,maxPercentCutOff:s,convolutionByFFT:i}=t,{nucleus:r,originFrequency:l}=t.info,{enhanceSymmetry:a=r[0]===r[1]}=t;return bp(e,{nuclei:r,observedFrequencies:l,thresholdFactor:n,clean:o,maxPercentCutOff:s,enhanceSymmetry:a,convolutionByFFT:i})}function jg(e,t){const{fromX:n,toX:o,fromY:s,toY:i}=t,r=e.data,l=(r.maxX-r.minX)/(r.z[0].length-1),a=(r.maxY-r.minY)/(r.z.length-1);let u=Math.max(Math.floor((n-r.minX)/l),0),d=Math.max(Math.floor((s-r.minY)/a),0),h=Math.min(Math.floor((o-r.minX)/l),r.z[0].length-1),m=Math.min(Math.floor((i-r.minY)/a),r.z.length-1);u>h&&([u,h]=[h,u]),d>m&&([d,m]=[m,d]);let g={z:[],maxX:r.minX+h*l,minX:r.minX+u*l,maxY:r.minY+m*a,minY:r.minY+d*a},x=Number.MIN_SAFE_INTEGER,y=Number.MAX_SAFE_INTEGER,S=h-u+1;for(let v=d;v<m;v++){let C=new Float32Array(S),E=u;for(let T=0;T<S;T++)C[T]=r.z[v][E++];for(let T of C)x<T&&(x=T),y>T&&(y=T);g.z.push(Array.from(C))}return g.minZ=y,g.maxZ=x,g}function Ua(e,t){const n=Za(e,t),{xShift:o,yShift:s}=io(e),{minX:i,maxX:r,minY:l,maxY:a}=e.data,u=Math.abs(r-i)/1e4,d=Math.abs(a-l)/1e4;return n.reduce((m,g)=>{const x=g.x||{from:0,to:0},y=g.y||{from:0,to:0};for(const{x:v,y:C}of e.zones.values)if(Math.abs(x.from-v.from)<u&&Math.abs(x.to-v.to)<u&&Math.abs(y.from-C.from)<d&&Math.abs(y.to-C.to)<d)return m;const S=g.signals.map(v=>({id:q(),peaks:v.peaks,x:b({originDelta:v.x.delta-o},v.x),y:b({originDelta:v.y.delta-s},v.y),kind:"signal"}));return m.push({id:q(),x:{from:x.from,to:x.to},y:{from:y.from,to:y.to},signals:S,kind:Ze.signal}),m},[])}function Bg(e,t){const n=Za(e,t),{xShift:o,yShift:s}=io(e);return n.map(r=>{const l=r.signals.map(a=>({id:q(),peaks:a.peaks,x:b({originDelta:a.x.delta-o},a.x),y:b({originDelta:a.y.delta-s},a.y),kind:a.kind||"signal"}));return{id:q(),x:r.x,y:r.y,signals:l,kind:Ze.signal}},[])}function Xg(e,t,n,o){const{dependentVariables:s,info:i,meta:r}=e;let l=s[0].components;return so(k(b({},t),{source:k(b({},t==null?void 0:t.source),{jcampSpectrumIndex:o}),info:i,meta:r,data:l}),n)}function Yg(e,t={},n={}){const{dependentVariables:o,meta:s,source:i}=e;let r=o[0].components;return so(k(b({},t),{source:i,meta:s,data:r}),n)}function Gg(e,t={},n={}){return so({},n)}function No(e,t){return JSON.parse(JSON.stringify(e),function(o,s){if(o in t){this[t[o]]=s;return}return s})}function Wg(e){if((e==null?void 0:e.version)===1)return e;const t=k(b({},e),{version:1}),n={j:"js",signal:"signals",integral:"integration",peak:"peaks",diaID:"diaIDs"};for(const o of t.spectra)o.ranges?o.ranges=No(o.ranges,n):o.zones&&(o.zones=No(o.zones,n));return t}function Zg(e){if((e==null?void 0:e.version)===2)return e;const t=k(b({},e),{version:2}),n={peaks:{delta:"x",originDelta:"originalX",intensity:"y"},ranges:{atomIDs:"atoms",intensity:"y"}};for(const o of t.spectra)o.peaks?o.peaks=No(o.peaks,n.peaks):o.ranges?o.ranges=No(o.ranges,n.ranges):o.zones&&(o.zones.values=Ug(o.zones.values));return t}function Ug(e){return e.map(t=>(t.signals&&(t.signals=t.signals.map(n=>{if(n.x&&n.y){const o=n,{x:s}=o,i=s,{fromTo:u}=i,d=G(i,["fromTo"]),{y:r}=o,l=r,{fromTo:h}=l,m=G(l,["fromTo"]);n=k(b({},n),{x:b(b({},d),u),y:b(b({},m),h)})}else{const a=n,{fromTo:u,deltaX:d,resolutionX:h,nucleusX:m,deltaY:g,resolutionY:x,nucleusY:y,shiftX:S,shiftY:v}=a,C=G(a,["fromTo","deltaX","resolutionX","nucleusX","deltaY","resolutionY","nucleusY","shiftX","shiftY"]);n=k(b({},C),{x:{from:u[0].from,to:u[0].to,delta:d,resolution:h,nucleus:m},y:{from:u[1].from,to:u[1].to,delta:g,resolution:x,nucleus:y}})}return n},[])),t),[])}const Ka=2;function Kg(e){return t=>e.reduce((n,o)=>o(n),t)}function Dr(e){let t=[Wg,Zg],n=(e==null?void 0:e.version)||0;if(n>Ka)throw new Error("This file can not be imported using the current NMRium version, Please move to the new one !!! ");return Kg(t.slice(n))(e)}const qg=/^(?:[A-Z][a-z]?\d* *)+$/;function qa(e){if(!qg.test(e))throw Error(`MF can not be parsed: ${e}`);const t={},n=e.matchAll(/(?<atom>[A-Z][a-z]?)(?<number>[0-9]*)/g);for(const o of n){const{atom:s,number:i}=o.groups;t[s]||(t[s]=0),t[s]+=i===""?1:Number(i)}return t}function Mo(e={}){const t=e.key||q(),n=e.molfile||"",o=Et.Molecule.fromMolfile(n),s=o.getMolecularFormula();return{key:t,molfile:n,mf:s.formula,em:s.absoluteWeight,mw:s.relativeWeight,svg:o.toSVG(50,50),atoms:qa(s.formula)}}function Jg(e){return{molfile:e.molfile}}var vt=(e=>(e.ROW_DATA="ROW_DATA",e.DATA_SOURCE="DATA_SOURCE",e))(vt||{});function Qg(e,t,n,o){return fetch(t).then(s=>s.arrayBuffer()).then(s=>{Si(e,s,n,o)})}function Si(e,t,n,o){var i,r;n=n||{};const s=vp(t,{noContour:!0,xy:!0,keepRecordsRegExp:/.*/,profiling:!0});if(s.length!==0)for(let l=0;l<s.length;l++){let a=s[l];const u=(r=(i=a.dependentVariables)==null?void 0:i[0])==null?void 0:r.components;u&&(u.length>0||u.z)&&ex(e,{index:l,entry:a},n,o)}}function ex(e,t,n,o){const s=(n==null?void 0:n.source)||{};if(!("jcampSpectrumIndex"in s)||s.jcampSpectrumIndex===t.index){const i=t.entry.info.dimension;i===1&&e.push(Ng(t.entry,n,o,t.index)),i===2&&e.push(Xg(t.entry,n,o,t.index))}}function tx(e,t,n){const o=t.info.dimension;o===1&&e.push(ct(t,n)),o===2&&e.push(so(t,n))}function nx(e,t,n={},o={}){let s=Cp(t);s=s[0];let i=s.description,r=i.metadata;delete i.metadata,i.acquisitionMode=0,i.experiment=i.dimension===1?"1d":"2d",i.type="NMR SPECTRUM",i.nucleus=i.nucleus[0],i.numberOfPoints=i.numberOfPoints[0],i.acquisitionTime=i.acquisitionTime[0],i.baseFrequency=i.baseFrequency[0],i.frequencyOffset=i.frequencyOffset[0],i.spectralWidthClipped=s.application.spectralWidthClipped,i.dimension===1&&s.dependentVariables&&e.push(Rg(s,k(b({},n),{display:b({},n.display),info:i,meta:r}),o)),i.dimension===2&&i.isFt&&e.push(Gg(s,k(b({},n),{display:b({},n.display),info:i}),o))}async function Ir(e=[],t={}){const n=[];let o=[];for(let s of e){const{jcamp:i,jcampURL:r}=(s==null?void 0:s.source)||{};i!=null?Si(n,i,s,t):r!=null?o.push(Qg(n,r,s,t)):tx(n,s,t)}return await Promise.all(o),n}async function Ja(e,t,n){const o=[];let i=await yp(t,{xy:!0,noContours:!0,keepOriginal:!0});for(let r of i){let{info:l,dependentVariables:a}=r;l.dimension===1?a[0].components&&o.push(Pg(r,k(b({},e),{display:b({},e.display)}),n)):l.dimension===2&&l.isFt&&o.push(Yg(r,k(b({},e),{info:l,display:b({},e.display)}),n))}return o}function ox(e,t){const n=[];for(const o of e)nx(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function Qa(e,t){const n=[];for(const o of e)Si(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function sx(e){const{activeTab:t,verticalAlign:{align:n}}=e;return b({activeTab:t},e.displayerMode===Y.DM_1D?{verticalAlign:n}:{})}function Pr(e,t="DATA_SOURCE"){const{data:n,molecules:o,correlations:s,multipleAnalysis:i,toolOptions:{data:{exclusionZones:r}}}=e||{data:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:{}},l=n.map(d=>d.info.dimension===1?ix(d,t):Hg(d,t)),a=sx(e),u=o.map(d=>Jg(d));return{spectra:l,molecules:u,correlations:s,multipleAnalysis:i,exclusionZones:r,version:Ka,preferences:a}}function ix(e,t){return k(b({id:e.id,display:e.display},t===vt.ROW_DATA||t===vt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL,jcampSpectrumIndex:e.source.jcampSpectrumIndex}}),{peaks:e.peaks,integrals:e.integrals,ranges:e.ranges,filters:e.filters})}const ec={name:"",frequency:400,"1d":{"1H":{from:-1,to:12},"13C":{from:-5,to:220},nbPoints:2**17,lineWidth:1},"2d":{nbPoints:{x:1024,y:1024}},spectra:{proton:!0,carbon:!0,cosy:!0,hsqc:!0,hmbc:!0}},tc=[{key:1,value:60,label:"60 MHz"},{key:2,value:100,label:"100 MHz"},{key:3,value:200,label:"200 MHz"},{key:4,value:300,label:"300 MHz"},{key:5,value:400,label:"400 MHz"},{key:6,value:500,label:"500 MHz"},{key:7,value:600,label:"600 MHz"},{key:8,value:800,label:"800 MHz"},{key:9,value:1e3,label:"1000 MHz"},{key:10,value:1200,label:"1200 MHz"}],rx="https://nmr-prediction.service.zakodium.com";async function lx(e){const t=Et.Molecule.fromMolfile(e);return Sp(t,{predictOptions:{C:{webserviceURL:`${rx}/v1/predict/carbon`}}})}function ax(e,t,n){const o=[];for(const s in e)if(t.spectra[s]){const i=e[s];switch(s){case"proton":case"carbon":{const r=cx({spectrum:i,inputOptions:t,experiment:s,color:n});o.push(r);break}case"cosy":case"hsqc":case"hmbc":{const r=dx({spectrum:i,inputOptions:t,experiment:s,color:n});o.push(r);break}}}return o}function cx(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,ranges:r,nucleus:l}=t,{name:a,"1d":{nbPoints:u},frequency:d}=n,h=nc(l,d),{x:m,y:g}=kp(i,k(b({},n["1d"][l]),{frequency:h,nbPoints:u})),x=ct({data:{x:m,im:null,re:g},display:{name:a,color:s},info:{nucleus:l,originFrequency:h,baseFrequency:h,pulseSequence:"prediction",solvent:"",experiment:o,isFt:!0}},[]);return x.ranges.values=vn(r,x),Sn(x),x}function ux(e){return e.reduce((t,n)=>{const r=n,{signals:o}=r,s=G(r,["signals"]),i=o.reduce((l,a)=>{const g=a,{x:u,y:d,id:h}=g,m=G(g,["x","y","id"]);return l.push(b({id:h||q(),kind:"signal",x:k(b({},u),{originDelta:u.delta||0}),y:k(b({},d),{originDelta:d.delta||0})},m)),l},[]);return t.push(k(b({id:q()},s),{signals:i,kind:Ze.signal})),t},[])}function dx(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,zones:r,nuclei:l}=t,a=n["1d"][l[0]],u=n["1d"][l[1]],d=px(l),h=nc(l,n.frequency),m=wp(i,{from:{x:a.from,y:u.from},to:{x:a.to,y:u.to},nbPoints:{x:n["2d"].nbPoints.x,y:n["2d"].nbPoints.y},width:d,factor:3}),g=so({data:k(b({},m),{noise:.01}),display:{name:n.name,positiveColor:s,negativeColor:_a(s,40)},info:{nucleus:l,originFrequency:h,baseFrequency:h,pulseSequence:o,experiment:"2d"}},[]);return g.zones.values=ux(r),g}function px(e){return e[0]===e[1]?.02:{x:.02,y:.2133}}function nc(e,t){return typeof e=="string"?gr(e,{nucleus:"1H",frequency:t}):e[0]===e[1]?`${t},${t}`:`${t},${gr(e[1],{nucleus:e[0],frequency:t})}`}const ki=[{key:"outOfLimit",color:"red"},{key:"ambiguousAttachment",color:"orange"},{key:"notAttached",color:"blue"},{key:"incomplete",color:"red"}],hx=ki.map(e=>e.key),oc={C:.25,H:.02,N:.25,F:.25,Si:.25,P:.25},F={zoom:{id:"zoom",label:"Zoom",hasOptionPanel:!1,isFilter:!1},peakPicking:{id:"peakPicking",label:"Peaks Picking",hasOptionPanel:!0,isFilter:!1},integral:{id:"integral",label:"integral Tool",hasOptionPanel:!1,isFilter:!1},zone2D:{id:"zone2D",label:"Zone Tool",hasOptionPanel:!0,isFilter:!1},slicingTool:{id:"slicingTool",label:"Slicing Tool",hasOptionPanel:!1,isFilter:!1},HMove:{id:"HMove",label:"Move spectrum horizontally",hasOptionPanel:!1,isFilter:!1},equalizerTool:{id:"equalizerTool",label:"Equalizer Tool",hasOptionPanel:!1,isFilter:!1},rangesPicking:{id:"rangesPicking",label:"Ranges Picking",hasOptionPanel:!0,isFilter:!1},zeroFilling:{id:hi,label:Ra,hasOptionPanel:!0,isFilter:!0},phaseCorrection:{id:jt,label:Ta,hasOptionPanel:!0,isFilter:!0},baseLineCorrection:{id:"baseLineCorrection",label:"baseline correction",hasOptionPanel:!0,isFilter:!0},generalSelector:{id:"generalSelector",label:"range general selector",hasOptionPanel:!1,isFilter:!1},editRange:{id:"editRange",label:"edit range",hasOptionPanel:!1,isFilter:!1},multipleSpectraAnalysis:{id:"multipleSpectraAnalysis",label:"Multiple Spectra Analysis",hasOptionPanel:!1,isFilter:!1},exclusionZones:{id:"exclusionZones",label:"Exclusion Zones",hasOptionPanel:!1,isFilter:!1},databaseRangesSelection:{id:"databaseRangesSelection",label:"Filter Database",hasOptionPanel:!1,isFilter:!1}};function fx(e,t){let n=[];const{baseFrequency:o=500}=t;for(const s of e){const{jCoupling:i,delta:r,diaIDs:l=[],multiplicity:a,integration:u}=s,d=mx({delta:r,js:i,frequency:o});if(i&&a&&i.length===a.length){i.sort((h,m)=>m-h);for(let h=0;h<i.length;h++)i[h].multiplicity=a[h]}n.push(k(b({},d),{integration:u,signals:[{js:i,delta:r,diaIDs:l,multiplicity:a}]}))}t.ranges.values=vn(gx(n),t)}function mx(e={}){const{delta:t,js:n=[],frequency:o}=e;let s=.5;for(let i of n)s+=i.coupling;return s/=o,{from:t-s,to:t+s}}function gx(e){e.sort((t,n)=>t.from-n.from);for(let t=0;t<e.length-1;t++)e[t].to>e[t+1].from&&(e[t].to=Math.max(e[t+1].to,e[t].to),e[t].signals=e[t].signals.concat(e[t+1].signals),e[t].integration+=e[t+1].integration,e.splice(t+1,1),t--);return e}const xx=["y","x"];function bx(e,t){let n=[];const o=io(t),{baseFrequency:s}=t.info,i={x:s[0],y:s[1]};for(const r of e){let l={x:{},y:{},id:q(),kind:"signal"},a={id:q(),kind:"signal",peaks:[]},u={x:10,y:10};for(let d of xx){let{coupling:h=[],delta:m,diaIDs:g=[]}=r[d];for(let x of h)u[d]+=x.coupling;if(r.activeCoupling){const{activeCoupling:x=[]}=r;for(let y of x)u[d]+=y.coupling}u[d]/=i[d],l[d]={from:m-u[d],to:m+u[d]},a[d]={delta:m,diaIDs:g,originDelta:m-o[`${d}Shift`]}}n.push(k(b({},l),{signals:[a]}))}t.zones.values=n}async function yx(e,t){const o=await new un().loadAsync(e.binary),s=await Cx(o.files),i=await Ep.toJSON({sdf:s[0],zipFiles:o.files});let{spectra:r,molecules:l=[]}=i,a={spectra:[],molecules:l};for(const u of r){const{file:d,jcampURL:h}=u.source;let m=await vx(d,{jcampURL:h},t)||[];for(const g of m){const{info:x}=g;x.isFid||(x.dimension>1?bx(u.signals,g):fx(u.signals,g))}a.spectra.push(...m)}return a}async function vx(e,t={},n={}){const{xy:o=!0,noContours:s=!0,keepOriginal:i=!0,jcampURL:r}=t;switch(e.extension){case"jdx":case"dx":return Qa([e],n);case"zip":return Ja({xy:o,noContours:s,keepOriginal:i},e.binary,n);default:if(!r)return}}async function Cx(e){let t=[];for(const n in e){const o=n.split("/");if(/^[^.].+sdf$/.exec(o[o.length-1])){const s=o[o.length-1].replace(/\.sdf/,""),i=o.slice(0,o.length-1).join("/"),r=await e[n].async("string");let l=Ap(`${r}`,{mixedEOL:!0});l.filename=s,l.root=i!==""?`${i}/`:"",t.push(l)}}return t}function Sx(e,t){const n=t.payload.assignments;for(let o of n){const s=e.data.findIndex(i=>i.id===o.id);if(s!==-1){const i=e.data[s].info.dimension;i===1?e.data[s].ranges.values=o.ranges:i===2&&(e.data[s].zones.values=o.zones)}}}function Pe(e,t,n){const o=e.find(s=>s.id===t);if(!(o&&n===!0&&o.display.isVisible===!1))return o}function sc(e,t){for(let n of e.ranges.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function Gn(e,t){for(let n of e.zones.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function wi(e,t){for(let n of e.ranges.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function _o(e,t){for(let n of e.zones.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function Ei(e,t,n,o){const s=Pe(e,t,o);if(s){if(s.info.dimension===1){const i=wi(s,n);if(i)return i.id}else if(s.info.dimension===2){const i=_o(s,n);if(i)return i.id}}}function Xt(e,t=null){const{width:n,margin:o,xDomains:s,xDomain:i,mode:r}=e,l=r==="RTL"?[n-o.right,o.left]:[o.left,n-o.right];return Je(t?s[t]:i,l)}function Fo(e,t=null){const{height:n,margin:o,verticalAlign:s,yDomain:i,yDomains:r}=e,l=s.align==="center"?(n-30)/2:n-o.bottom-30;let a=[];return t===null||r[t]===void 0?a=[0,i[1]]:a=[0,r[t][1]],Je(a,[l,o.top])}function kx(e){const{height:t,margin:n,verticalAlign:o,integralsYDomains:s,activeSpectrum:i}=e,r=o.align==="center"?t/2:t;return Je((i==null?void 0:i.id)&&s&&s[i==null?void 0:i.id]?s[i==null?void 0:i.id]:[0,0],[r*.3,n.top+r*.1])}function Zt(e,t){const{startX:n,endX:o}=t,s=Xt(e),i=s.invert(n),r=s.invert(o),l=[0,0];return i>r?(l[0]=r,l[1]=i):(l[0]=i,l[1]=r),l}function It(e){return typeof e=="string"?e:e.join(",")}function wx(e){let t=e.data.filter(n=>It(n.info.nucleus)===e.activeTab&&n.info.dimension===1);if(e.activeSpectrum){const n=t.findIndex(o=>{var s;return o.id===((s=e.activeSpectrum)==null?void 0:s.id)});if(n!==-1){const o=t[n].info.isFid||!1;t=t.filter(s=>s.info.isFid===o)}}else t=t.filter(n=>n.info.isFid===!1);return t}function ic(e){let t=[],n=[],o={},s={};const i=wx(e);try{t=i.reduce((r,l)=>{const{display:a,data:u}=l,d=[u.x[0],u.x[u.x.length-1]];return s[l.id]=d,a.isVisible&&(r=r.concat(d)),r},[]),n=i.reduce((r,l)=>{const{display:a}=l,u=Cn(l),d=yt(u.y);return o[l.id]=d,a.isVisible&&(r=r.concat(d)),r},[])}catch(r){console.log(r)}return{xDomain:yt(t),yDomain:yt(n),yDomains:o,xDomains:s}}function Ex(e){let t=[],n=[],o={},s={};const{activeTab:i,tabActiveSpectrum:r,data:l}=e,a=i.split(",");try{t=l.reduce((h,m)=>{var g;return Gs(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minX,m.data.maxX])),h},[]),n=l.reduce((h,m)=>{var g;return Gs(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minY,m.data.maxY])),h},[])}catch(h){console.log(h)}const u=a.map(h=>{var m;return(m=r[h])==null?void 0:m.id}),d=l.reduce((h,m)=>u.includes(m.id)&&m.info.dimension===1?h.concat(m):h.concat([]),[]);try{s=d.reduce((h,m)=>{const{x:g}=m.data,x=[g[0],g[g.length-1]];return h[m.id]=x,h},{}),o=d.reduce((h,m)=>{const g=yt(m.data.re);return h[m.id]=g,h},{})}catch(h){console.log(h)}return{xDomain:yt(t),yDomain:yt(n),yDomains:o,xDomains:s}}function ie(e,t){const{yDomain:n={isChanged:!0,isShared:!0}}=t||{};let o;e.activeTab&&(e.displayerMode===Y.DM_1D?o=ic(e):o=Ex(e),e.xDomain=o.xDomain,e.xDomains=o.xDomains,e.originDomain=o,n.isChanged?(e.yDomain=o.yDomain,e.displayerMode===Y.DM_1D&&n.isShared?e.yDomains=Object.keys(o.yDomains).reduce((s,i)=>(s[i]=o.yDomain,s),{}):e.yDomains=o.yDomains):e.originDomain=k(b({},e.originDomain),{xDomain:o.xDomain,xDomains:o.xDomains}))}function Ax(e){const{integrals:t,ranges:n}=e;let o=Number.NEGATIVE_INFINITY;for(const s of t.values)o=Math.max(o,s.absolute);for(const s of n.values)o=Math.max(o,s.absolute);return[0,o]}function ts(e,t){var n;for(const o of Array.isArray(t)?t:[t])((n=o==null?void 0:o.info)==null?void 0:n.dimension)===1&&(e.integralsYDomains[o.id]=Ax(o))}function Tx(e,t){e.originDomain=t}function Dx(e,t){e.xDomain=t}function Ix(e,t){e.yDomain=t}function Px(e){const{xDomain:t,yDomain:n,xDomains:o,yDomains:s}=e.originDomain;e.xDomain=t,e.yDomain=n,e.xDomains=o,e.yDomains=s}function tt(e){var n;const t=e.data.filter(o=>e.xDomains[o.id]&&It(o.info.nucleus)===e.activeTab);e.mode=(n=t[0])!=null&&n.info.isFid?"LTR":"RTL"}function Rx(e,t){const{activeSpectrum:n,data:o,xDomain:s,molecules:i,activeTab:r}=e;if(n!=null&&n.id){const{index:l}=n,a=o[l],[u,d]=s,h=We(a.data.x,u),m=We(a.data.x,d),g=b({factorStd:8,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},t);Xa(a,k(b({},g),{windowFromIndex:h,windowToIndex:m,molecules:i,nucleus:r})),Pt(e),ts(e,a)}}function Nx(e){const t={factorStd:8,minMaxRatio:.05,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},{data:n,activeTab:o,molecules:s}=e;for(const i of n)i.info.dimension===1&&(Xa(i,{peakPicking:t,molecules:s,nucleus:o}),Pt(e))}function lo(e,t,n){return e.data[t].ranges.values.findIndex(o=>o.id===n)}function Mx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{id:s=null,assignmentData:i}=t.payload.data,r=e.data[o];if(s){const l=lo(e,o,s);Bt(i,[r.ranges.values[l]]),r.ranges.values.splice(l,1)}else Bt(i,r.ranges.values),r.ranges.values=[];Dt(r),Pt(e)}}function _x(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:r}=t.payload.data,l=lo(n,s,i.id),a=e.data[s].ranges.values[l];a!=null&&a.signals&&(a.signals[i.tableMetaInfo.signalIndex].kind=r,a.kind=to.includes(r)?Ze.signal:Ze.mixed,Dt(e.data[s]),Pt(e))}}function Fx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{editedRowData:i,assignmentData:r}=t.payload;e.toolOptions.data.tempRange=null;const l=jn(i);delete l.tableMetaInfo,delete l.rowKey,Bt(r,[l]);const a=lo(n,s,l.id);e.data[s].ranges.values[a]=l,Dt(e.data[s]),Pt(e)}}function rc(e,t){const{spectrum:n,range:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:r=!0}=t.payload;if(n&&o){const l=e.data.find(h=>h.id===n.id),a=l.ranges.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),d=jn(ze(o),"signal",{signalIndex:u});r===!0&&Bt(i,[{signals:[s]}]),d.signals.splice(u,1),l.ranges.values[a]=d,d.signals.length===0&&(Bt(i,[d]),l.ranges.values.splice(a,1)),Pt(e)}}function lc(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{assignmentData:s,rangeData:i=null,signalIndex:r=-1}=t.payload;if(i){const l=lo(e,o,i.id),a=ze(e.data[o].ranges.values[l]);let u={},d=i.id;i&&r===-1?u=jn(a,"range"):(u=jn(a,"signal",{signalIndex:r}),d=i.signals[r].id),Bt(s,[{id:d}]),e.data[o].ranges.values[l]=u}else{const l=e.data[o].ranges.values.map(a=>jn(a));e.data[o].ranges.values=l,Bt(s,l)}}}function Lx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{rangeData:s,diaIDs:i,signalIndex:r,nbAtoms:l}=t.payload,a=(h,m=0)=>h+m,u=lo(e,o,s.id),d=e.data[o].ranges.values[u];r===void 0?(d.diaIDs=i,d.nbAtoms=a(l,d.nbAtoms)):(d.signals[r].diaIDs=i,d.signals[r].nbAtoms=a(l,d.signals[r].nbAtoms))}}function Ox(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum;Cg(e.data[o],t.data)}}function $x(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o!=null&&o.id){const{index:i}=o,r=n[i];vi(r.ranges,{options:t,nucleus:s}),Dt(r,!0)}}function Hx(e,t){const{startX:n,endX:o}=t.payload,{activeSpectrum:s,activeTab:i,molecules:r}=e,l=Zt(e,{startX:n,endX:o});if(s!=null&&s.id){const{index:a}=s,[u,d]=l;vg(e.data[a],{from:u,to:d,nucleus:i,molecules:r}),Pt(e),ts(e,e.data[a])}}function zx(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;Sg(e.data[s],n)}}function Vx(e,t){var i;const{rangeID:n,signalID:o,value:s}=t.payload;if((i=e.activeSpectrum)!=null&&i.id){const{index:r}=e.activeSpectrum,l=kg(e.data[r],{rangeID:n,signalID:o,newSignalValue:s});Te(e.data[r],[{name:oo,options:l}]),wn(e.data[r]),Pt(e),ie(e)}}function Pt(e){ns(e)}function jx(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;e.data[s].ranges.options.isSumConstant=!n}}function Bx(e,t){e.toolOptions.data.tempRange=t.payload.tempRange}function Xx(e){e.toolOptions.data.showMultiplicityTrees=!e.toolOptions.data.showMultiplicityTrees}function Yx(e){e.toolOptions.data.showRangesIntegrals=!e.toolOptions.data.showRangesIntegrals}function Gx(e){e.toolOptions.data.showJGraph=!e.toolOptions.data.showJGraph}function Wx(e,t){return e.signals?e.signals.reduce((n,o)=>o[t].nbAtoms?n+o[t].nbAtoms:n,0):0}function As(e,t){e[t].nbAtoms=Wx(e,t),e[t].nbAtoms===0&&delete e[t].nbAtoms}function Rr(e,t){return delete e[t].diaIDs,delete e[t].nbAtoms,e.signals.forEach(n=>{delete n[t].diaIDs,delete n[t].nbAtoms}),e}function Zx(e){return e.kind===Ze.signal}function Lo(e,t,n,o){return t!==void 0&&o!==void 0?(t===!0?(delete e[o].diaIDs,delete e[o].nbAtoms):typeof n=="number"&&n!==-1&&e.signals[n]&&(delete e.signals[n][o].diaIDs,delete e.signals[n][o].nbAtoms),As(e,o)):o!==void 0?(Rr(e,o),As(e,o)):["x","y"].forEach(s=>{Rr(e,s),As(e,s)}),e}function fn(e,t,n){const o=t.reduce((s,i)=>(i.id&&s.push(i.id),i.signals&&(s=s.concat(i.signals.map(r=>r.id,[]))),s),[]);n?e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:n}}):(e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"x"}}),e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"y"}}))}const K={TOP_1D:"TOP_1D",LEFT_1D:"LEFT_1D",CENTER_2D:"CENTER_2D"};function Ux({width:e,height:t,margin:n}){return{CENTER_2D:{startX:n.left,startY:n.top,endX:e-n.right,endY:t-n.bottom},TOP_1D:{startX:n.left,startY:0,endX:e-n.right,endY:n.top},LEFT_1D:{startX:0,startY:n.top,endX:n.left,endY:t-n.bottom}}}function sn(e,t){for(const n of Object.keys(e))if(t.startX>=e[n].startX&&t.startX<=e[n].endX&&t.startY>=e[n].startY&&t.startY<=e[n].endY)return n;return null}function Ae(e){const{width:t,margin:n,xDomain:o}=e;return Je(o,[t-n.right,n.left])}function ye(e,t=!1){const{height:n,margin:o,yDomain:s}=e;return Je(s,t?[n-o.bottom,o.top]:[o.top,n-o.bottom])}function mn(e,t,n=10){return Je(e,[t-n,n])}function Kx(e,t){const{startX:n,startY:o,endX:s,endY:i}=t,r=Ae(e),l=ye(e),a=n*1e6>s*1e6?s:n,u=n*1e6>s*1e6?n:s,d=o*1e6>i*1e6?i:o,h=o*1e6>i*1e6?o:i,m=l.invert(d),g=r.invert(a),x=l.invert(h),y=r.invert(u);return{fromX:g,fromY:m,toX:y,toY:x}}function qx(e,t){e.toolOptions.data.zonesNoiseFactor=t.payload}function Jx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,s=Kx(e,t),i=e.data[o],r=Bg(oe(i),{selectedZone:s,thresholdFactor:e.toolOptions.data.zonesNoiseFactor,convolutionByFFT:!1});i.zones.values=i.zones.values.concat(r),ht(e)}}function Qx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,[s,i]=e.xDomain,[r,l]=e.yDomain;t.selectedZone={fromX:s,toX:i,fromY:r,toY:l};const a=e.data[o],u=Ua(oe(a),t);a.zones.values=a.zones.values.concat(u),ht(e)}}function eb(e){for(const t of e.data)if(t.info.dimension===2){const{minX:n,maxX:o,minY:s,maxY:i}=t.data,r={selectedZone:{fromX:n,toX:o,fromY:s,toY:i},thresholdFactor:1},l=Ua(oe(t),r);t.zones.values=t.zones.values.concat(l),ht(e)}}function tb(e,t){var s;const{zoneID:n,signal:o}=t.payload;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum,{xShift:r,yShift:l}=zg(e.data[i],n,o);let a=[];r!==0&&a.push({name:mi,options:r}),l!==0&&a.push({name:gi,options:l}),Te(e.data[i],a),ro(e.data[i]),ie(e),ht(e)}}function ao(e,t,n){return e.data[t].zones.values.findIndex(o=>o.id===n)}function nb(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:r}=t.payload,l=ao(n,s,i.id),a=e.data[s].zones.values[l];a.signals[i.tableMetaInfo.signalIndex].kind=r,a.kind=to.includes(r)?Ze.signal:Ze.mixed,ht(e)}}function ob(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{id:i,assignmentData:r}=t.payload;if(i){const l=e.data[s].zones.values.find(u=>u.id===i);fn(r,[l||{}]);const a=ao(n,s,i);e.data[s].zones.values.splice(a,1)}else fn(r,e.data[s].zones.values),e.data[s].zones.values=[];ht(e)}}function ac(e,t){const{spectrum:n,zone:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:r=!0}=t.payload;if(n&&o){const l=e.data.find(h=>h.id===n.id),a=l.zones.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),d=Lo(ze(o),!1,u,void 0);r===!0&&fn(i,[{signals:[s]}],void 0),d.signals.splice(u,1),l.zones.values[a]=d,d.signals.length===0&&(fn(i,[d]),l.zones.values.splice(a,1)),ht(e)}}function sb(e,t){const{spectrum:n,zone:o,signal:s,pathLength:i}=t.payload;if(n&&o){const r=e.data.find(d=>d.id===n.id),l=r.zones.values.findIndex(d=>d.id===o.id),a=o.signals.findIndex(d=>d.id===s.id),u=Lo(ze(o),!1,a,void 0);u.signals[a].j=k(b({},u.signals[a].j),{pathLength:i}),r.zones.values[l]=u,ht(e)}}function cc(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{zoneData:i=null,assignmentData:r,isOnZoneLevel:l=void 0,signalIndex:a=-1,axis:u=void 0}=t.payload;if(i){const d=ao(n,s,i.id),h=ze(e.data[s].zones.values[d]),m=Lo(h,l,a,u);fn(r,[{id:i.signals[a].id}],u),e.data[s].zones.values[d]=m}else{const d=e.data[s].zones.values.map(h=>Lo(h));e.data[s].zones.values=d,fn(r,d)}}}function ib(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{zoneData:i,diaIDs:r,axis:l,signalIndex:a,nbAtoms:u}=t.payload,d=(g,x=0)=>g+x,h=ao(n,s,i.id),m=e.data[s].zones.values[h];a===void 0?(m[l].diaIDs=r,m[l].nbAtoms=d(u,m[l].nbAtoms)):(m.signals[a][l].diaIDs=r,m.signals[a][l].nbAtoms=d(u,m.signals[a][l].nbAtoms))}}function rb(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{editedRowData:i}=t.payload;delete i.tableMetaInfo;const r=ao(n,s,i.id);e.data[s].zones.values[r]=i,i.signals&&i.signals.forEach(l=>{var a;Tp(e.correlations.values,l.id,(a=l.j)==null?void 0:a.pathLength)}),ht(e)}}function ht(e){ns(e)}function ns(e){const{data:t,correlations:n}=e;e.correlations=Qn(t,k(b({},n.options),{values:ze(n.values)}))}function lb(e,t){const n=oe(e),{data:o,correlations:s}=n,{mf:i}=t;(s.options.mf===""||s.options.mf!==i)&&(e.correlations=Qn(o,k(b({},s.options),{mf:i,values:ze(s.values)})))}function ab(e,t){const n=oe(e),{data:o,correlations:s}=n,{tolerance:i}=t;e.correlations=Qn(o,k(b({},s.options),{tolerance:i,values:ze(s.values)}))}function cb(e,t){const n=oe(e),{correlations:o}=n,{id:s,correlation:i,options:r}=t;e.correlations=$l(o,s,i),r&&(e.correlations=k(b({},e.correlations),{options:b(b({},e.correlations.options),r)})),ns(e)}function ub(e,t){const{correlations:n,options:o}=t,s=oe(e);let i=ze(s.correlations);n.forEach(r=>{i=$l(i,r.id,r)}),e.correlations=i,o&&(e.correlations=k(b({},e.correlations),{options:b(b({},e.correlations.options),o)})),ns(e)}function db(e,t){const{correlation:n,assignmentData:o}=t;n.link.forEach(s=>{const i=Pe(e.data,s.experimentID,!1);if(i){if(i.info.dimension===1){const r=wi(i,s.signal.id),l=sc(i,s.signal.id);rc(e,{payload:{spectrum:i,range:r,signal:l,assignmentData:o}})}else if(i.info.dimension===2){const r=_o(i,s.signal.id),l=Gn(i,s.signal.id);ac(e,{payload:{spectrum:i,zone:r,signal:l,assignmentData:o}})}}})}const Bn={HORIZONTAL:"HORIZONTAL",VERTICAL:"VERTICAL",STEP_HORIZONTAL:"STEP_HORIZONTAL",FULL:"FULL"};function fo(e,t,n={}){const{factor:o=1,invert:s=!1}=n,r=(Math.abs(e.deltaY)<100?e.deltaY*100:e.deltaY)*(s?-.001:.001)*o,l=r<0?-1/(r-1):1+r,[a,u]=t;return[a*l,u*l]}function zt(e,t={}){const{height:n,margin:o,activeSpectrum:s}=e,{scale:i=1,spectrumID:r=null}=t;if(s===null&&r===null){const{shareYDomain:l,yDomain:a,yDomains:u}=e.originDomain;e.yDomains=Object.keys(e.yDomains).reduce((d,h)=>{const m=Je(l?a:u[h],[n-o.bottom,o.top]),[g,x]=l?a:u[h],S=Math.max(Math.abs(x),Math.abs(g))===x?0:g,C=xr.translate(0,(Math.sign(S)>=0,m(S))).scale(i).translate(0,-m(0)).rescaleY(m).domain();return d[h]=C,d},{})}else{const l=r||(s==null?void 0:s.id);if(l){const a=Je(e.originDomain.yDomains[l],[n-o.bottom,o.top]),d=xr.translate(0,a(0)).scale(i).translate(0,-a(0)).rescaleY(a).domain();e.yDomains=k(b({},e.yDomains),{[l]:d})}}}function pb(e,t){const{ranges:n,info:o}=t.payload,s=Oa(n,o,e.usedColors);e.data.push(s),ie(e,{yDomain:{isShared:!1}}),zt(e,{scale:.8,spectrumID:s.id})}function hb(e,t){e.width=t}function fb(e,t,n){e.width=t,e.height=n}function Ai(e,t){return t.filter(n=>It(n.info.nucleus)===e)}function os(e,t){!e[t]&&!Array.isArray(e[t])&&(e[t]=[]);const n=mb(e[t]),o=gb(e[t]),s=xb(e[t]),i=()=>e[t]=[];return{historyStack:e[t],push:n,pop:o,getLast:s,clear:i}}function mb(e){return t=>{e.push(t)}}function gb(e){return()=>e.pop()?e[e.length-1]:null}function xb(e){return()=>e.length===0?null:e[e.length-1]}function Nr(e){const t=e.split(",");return t.reduce((n,o)=>{const s=t.length===2?100:0;return n+=Number(o.replace(/\D/g,""))+s,n},0)}function ss(e){return(t,n=!1)=>{const o=t.reduce((s,i)=>{const r=i.info[e];return s[r]=(s[r]||[]).concat(i),s},{});return n?Object.keys(o).sort((s,i)=>Nr(s)-Nr(i)).reduce((s,i)=>(s[i]=o[i],s),{}):o}}function Ct(e,t){var n;if(e.data&&e.data.length>0){let o=[];switch(["auto-check","stack"].includes(t.align||"")&&(o=e.data.filter(s=>s.info.nucleus===(t==null?void 0:t.activeTab)?t.activeTab:e.activeTab&&s.info.dimension===1)),t.align){case"auto-check":case"bottom":case"center":{if(t.align==="center"||t.align==="auto-check"&&((n=o[0])==null?void 0:n.info.isFid)&&!o.some(s=>s.info.isFid===!1)){const s=e.height/2;e.verticalAlign.align="center",e.verticalAlign.verticalShift=s}else e.verticalAlign.align="bottom",e.verticalAlign.verticalShift=Ya;break}case"stack":{e.verticalAlign.align="stack";const s=o.filter(i=>i.display.isVisible===!0);e.verticalAlign.verticalShift=Math.floor((e.height-e.margin.bottom)/(s.length+2));break}default:return}}}function bb(e,t){const{activeTab:n,data:o,activeSpectrum:s,zoom:i,xDomain:r,xDomains:l,yDomain:a,yDomains:u,originDomain:d,margin:h,displayerMode:m,tabActiveSpectrum:g}=e;if(n){const y=ss("nucleus")(o),S=m===Y.DM_2D?y[n].reduce((v,C)=>(v[C.id]=C.processingController.getLevel(),v),{}):null;e.keysPreferences[t]={activeTab:n,activeSpectrum:s,displayerMode:m,tabActiveSpectrum:g,zoom:i,xDomain:r,xDomains:l,yDomain:a,yDomains:u,originDomain:d,level:S,margin:h,data:y[n].reduce((v,C)=>(v[C.id]={display:{color:C.display.color,isVisible:C.display.isVisible,isPeaksMarkersVisible:C.display.isPeaksMarkersVisible}},v),{})}}}function yb(e,t){const n=e.keysPreferences[t];if(n)if(e.activeTab=n.activeTab,e.data.forEach((o,s)=>{It(o.info.nucleus)===n.activeTab&&(e.data[s].display=Object.assign(ze(o.display),n.data[o.id].display))}),e.displayerMode=n.displayerMode,e.tabActiveSpectrum=n.tabActiveSpectrum,e.activeSpectrum=n.activeSpectrum,e.margin=n.margin,ie(e),e.xDomain=n.xDomain,e.xDomains=n.xDomains,e.yDomain=n.yDomain,e.originDomain=n.originDomain,e.yDomains=n.yDomains,e.displayerMode===Y.DM_2D)for(const o of Object.keys(n.level)){const{levelPositive:s,levelNegative:i}=n.level[o],r=e.data.findIndex(a=>a.id===o),l=e.data[r].processingController;l.setLevel(s,i),e.contours[o]=l.drawContours()}else e.zoom=n.zoom}function vb(e){const{activeSpectrum:t,data:n}=e;if(t){const o=n[t==null?void 0:t.index].data,s=Dp(o.re),i=o.re.findIndex(r=>r===s);return{xValue:o.x[i],yValue:s,index:i}}}function Cb(e,t){var o;const n=(o=e.activeSpectrum)==null?void 0:o.id;if(t===jt){const s=is(e,jt,{rollback:!0,searchBy:"name",returnCurrentDatum:!0});e.tempData=Hl(e).data,s&&(e.tempData[s==null?void 0:s.index]=s==null?void 0:s.datum);const{xValue:i,index:r}=vb(e)||{xValue:0,index:0};e.toolOptions.data.pivot={value:i,index:r}}else if(e.toolOptions.selectedTool===F.phaseCorrection.id){e.toolOptions.data.activeFilterID=null;const s=e.data.findIndex(i=>i.id===n);e.data[s].data=e.tempData[s].data}}function Oo(e,t=!0){e.toolOptions.data.tempRange=null,Ti(e,null),t&&(e.toolOptions.selectedTool=F.zoom.id),e.toolOptions.data.baseLineZones=[],e.toolOptions.data.activeFilterID&&is(e),e.tempData&&(e.tempData=null,ie(e))}function Ue(e,t=!1){(e.toolOptions.selectedTool&&F[e.toolOptions.selectedTool].isFilter||!t)&&Oo(e)}function Sb(e,t){const{selectedTool:n}=t.payload;(e==null?void 0:e.data.length)>0&&(n?(n===F.editRange.id?e.toolOptions.data.tempRange=t.payload.tempRange:e.toolOptions.data.tempRange=null,n!==e.toolOptions.selectedTool&&Oo(e,!1),e.toolOptions.selectedTool=n,F[n].hasOptionPanel&&Ti(e,n),F[n].isFilter&&Cb(e,n)):Oo(e,!1),uc(e))}function Ti(e,t){e.toolOptions.selectedOptionPanel=t}function kb(e){const t=["stack","center"].includes(e.verticalAlign.align)?"bottom":"center";Ct(e,{align:t})}function wb(e){const t=e.verticalAlign.align==="stack"?"bottom":"stack";Ct(e,{align:t})}function Eb(e,{from:t,to:n}){const o=Xt(e);let s=o.invert(t);const i=o.invert(n);let r=[];s>i?r=[i,s]:r=[s,i];const l=e.toolOptions.data.baseLineZones.slice();l.push({id:q(),from:r[0],to:r[1]}),e.toolOptions.data.baseLineZones=l}function Ab(e,t){const n=oe(e);e.toolOptions.data.baseLineZones=n.toolOptions.data.baseLineZones.baseLineZones.filter(o=>o.id!==t)}function Tb(e){if(e.activeSpectrum!=null){const{index:t}=e.activeSpectrum;e.data[t].display.isRealSpectrumVisible=!e.data[t].display.isRealSpectrumVisible,ie(e)}}function Db(e,t){const n=e.displayerMode===Y.DM_2D,o=Xt(e),s=n?ye(e):Fo(e),i=o.invert(t.startX),r=o.invert(t.endX),l=s.invert(t.startY),a=s.invert(t.endY),u=i>r?[r,i]:[i,r],d=l>a?[a,l]:[l,a],h=os(e.zoom.history,e.activeTab);if(e.displayerMode===Y.DM_2D){switch(t.trackID){case K.CENTER_2D:e.xDomain=u,e.yDomain=d;break;case K.TOP_1D:e.xDomain=u;break;case K.LEFT_1D:e.yDomain=d;break}h&&h.push({xDomain:e.xDomain,yDomain:e.yDomain})}else e.xDomain=u,h&&h.push({xDomain:u,yDomain:d})}function Ib(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const s=Xt(e).invert(t),i=e.data[e.activeSpectrum.index],r=We(i.data.x,s);e.toolOptions.data.pivot={value:s,index:r}}}function Pb(e,t){const n=e.tabActiveSpectrum[e.activeTab.split(",")[t]];return n!=null&&n.id?n.id:null}function Rb(e,t){const{event:n,trackID:o,selectedTool:s}=t,{activeSpectrum:i,toolOptions:{data:{showRangesIntegrals:r}},displayerMode:l}=e;if(l===Y.DM_2D){const a=o===K.TOP_1D?0:o===K.LEFT_1D?1:null;if(a!==null){const u=Pb(e,a);if(u){const d=e.yDomains[u];e.yDomains[u]=fo(n,d)}}}else if(i!=null&&i.id)if((r||s===F.integral.id)&&n.shiftKey){const a=e.integralsYDomains[i==null?void 0:i.id];e.integralsYDomains[i==null?void 0:i.id]=fo(n,a)}else{const a=e.yDomains[i==null?void 0:i.id];e.yDomains[i==null?void 0:i.id]=fo(n,a)}else{const a=Ai(e.activeTab,e.data);for(const u of a){const d=e.yDomains[u.id];e.yDomains[u.id]=fo(n,d)}}}function Nb(e,t){if((e==null?void 0:e.data.length)>0){const{zoomType:n,trackID:o}=t,s=os(e.zoom.history,e.activeTab);if(e.displayerMode===Y.DM_1D)switch(n){case Bn.HORIZONTAL:{e.xDomain=e.originDomain.xDomain,s.clear();break}case Bn.VERTICAL:zt(e,{scale:.8});break;case Bn.STEP_HORIZONTAL:{const i=s.pop();e.xDomain=i?i.xDomain:e.originDomain.xDomain,zt(e,{scale:.8});break}default:{e.xDomain=e.originDomain.xDomain,zt(e,{scale:.8});break}}else{const{xDomain:i,yDomain:r,yDomains:l}=e.originDomain;if([K.TOP_1D,K.LEFT_1D,K.CENTER_2D].includes(o)){const a=s.pop();e.xDomain=a?a.xDomain:i,e.yDomain=a?a.yDomain:r}else s.clear(),e.xDomain=i,e.yDomain=r,e.yDomains=l}}}function Mr(e,t){const n=e.activeTab.split(","),o=e.tabActiveSpectrum[n[t]];return(o==null?void 0:o.id)&&!e.data[o.index].info.isFid}function uc(e){if(e.displayerMode===Y.DM_2D&&e.toolOptions.selectedTool!==F.slicingTool.id){const t=Mr(e,0)?_t["2D"].top:_t["1D"].top,n=Mr(e,1)?_t["2D"].left:_t["1D"].left;e.margin=k(b({},_t["2D"]),{top:t,left:n})}else e.toolOptions.selectedTool===F.slicingTool.id?e.margin=_t["2D"]:e.displayerMode===Y.DM_1D&&(e.margin=_t["1D"])}function Mb(e,t){if(e.displayerMode===Y.DM_2D){let n={};for(const o of t[e.activeTab])n[o.id]=o.processingController.drawContours();e.contours=n}}function _b(e,t){e.displayerMode=t&&t.some(n=>n.info.dimension===2)?Y.DM_2D:Y.DM_1D}function Fb(e,t){let n=[];const o={},s=Object.keys(t).sort((i,r)=>i.split(",").length>r.split(",").length?-1:1);for(let i of s){const r=t[i],l=i.split(",").length;if(l===2&&n.push(i),r.length===1){const a=e.data.findIndex(u=>u.id===r[0].id);o[i]={id:r[0].id,index:a}}else{const a=t[i],u=a.length;if(u>=2){const d=a.filter(h=>!h.info.isFid);if(d.length>0&&(l===2||l===1&&u!==d.length)){const h=e.data.findIndex(m=>m.id===d[0].id);o[i]={id:d[0].id,index:h}}else o[i]=null}else o[i]=null}}return e.tabActiveSpectrum=o,n}function dc(e,t,n,o=!1){const s=Object.keys(t).sort((i,r)=>i.split(",").length>r.split(",").length?-1:1);if(JSON.stringify(s)!==JSON.stringify(Object.keys(e.tabActiveSpectrum))||o){const i=Fb(e,t);i.length>0&&n==null?(e.activeSpectrum=e.tabActiveSpectrum[i[0]],e.activeTab=i[0]):(e.activeSpectrum=n&&e.tabActiveSpectrum[n],e.activeTab=n)}else e.activeTab=n,e.activeSpectrum=e.tabActiveSpectrum[n];_b(e,t[e.activeTab]),uc(e)}function nt(e,t){const{tab:n=null,refreshActiveTab:o=!1,domainOptions:s={}}=t||{},r=ss("nucleus")(e.data),l=Object.keys(r),a=!n||!l.includes(n||"")?l[0]:n;dc(e,r,a,o),Oo(e),Mb(e,r),ie(e,s),ts(e,r[a]);const d=os(e.zoom.history,e.activeTab).getLast();d&&(e.xDomain=d.xDomain,e.yDomain=d.yDomain),tt(e)}function Lb(e,t){t&&nt(e,{tab:t})}function Ob(e,{deltaY:t,shiftKey:n}){var o;try{if((o=e.activeSpectrum)!=null&&o.id){const{index:s,id:i}=e.activeSpectrum,r=e.data[s].processingController;n?r.shiftWheel(t):r.wheel(t);const l=Object.freeze(r.drawContours());e.contours[i]=l}}catch(s){console.log(s)}}function $b(e){e.displayerMode===Y.DM_1D&&(e.originDomain.shareYDomain=!1,zt(e,{scale:.8}))}function Hb(e){e.originDomain.shareYDomain=!0,e.yDomains=e.originDomain.yDomains,e.yDomain=e.originDomain.yDomain,zt(e,{scale:.8})}function zb(e,t){var n,o;if((n=e.activeSpectrum)!=null&&n.id){const s=(o=e.activeSpectrum)==null?void 0:o.index;Te(e.data[s],[{name:oo,options:t}]),wn(e.data[s]),Ue(e),ie(e)}}function Vb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const o=e.activeSpectrum.index,s=[{name:hi,options:t.zeroFillingSize},{name:ka,options:t.lineBroadeningValue}];Te(e.data[o],s),Ue(e),ie(e),tt(e)}}function jb(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum;Te(e.data[n],[{name:va,options:{}}]),Ue(e),Ct(e,{align:"bottom"}),ie(e,{yDomain:{isChanged:!0}}),tt(e)}}function Bb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{ph0:s,ph1:i}=t;Te(e.data[o],[{name:jt,options:{ph0:s,ph1:i}}]),Ue(e),e.tempData=null,ie(e)}}function Xb(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum;Te(e.data[n],[{name:ca,options:{}}]),Ue(e),e.tempData=null,ie(e)}}function Yb(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum,{ph0:o,ph1:s}=da(e.data[n]);Te(e.data[n],[{name:jt,options:{ph0:o,ph1:s}}]),Ue(e),e.tempData=null,ie(e)}}function Gb(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,{data:{x:o,re:s,im:i},info:r}=e.data[n],{ph0:l,ph1:a}=t;let u={data:{x:o,re:s,im:i},info:r};Da(u,{ph0:l,ph1:a});const{im:d,re:h}=u.data;e.tempData[n].data.im=d,e.tempData[n].data.re=h}}function Wb(e,t,n){var o,s,i;if((o=e.activeSpectrum)!=null&&o.id){const{index:r}=e.activeSpectrum;Na(e.data[r],t,n),((s=e.data[r].info)==null?void 0:s.dimension)===1?wn(e.data[r]):((i=e.data[r].info)==null?void 0:i.dimension)===2&&ro(e.data[r]),Ue(e),ie(e),tt(e);const a=os(e.zoom.history,e.activeTab).getLast();a&&(e.xDomain=a.xDomain,e.yDomain=a.yDomain)}}function Zb(e,t){var o,s,i;const n=t.payload.id;if((o=e.activeSpectrum)!=null&&o.id){const{index:r}=e.activeSpectrum;xi(e.data[r],n),((s=e.data[r].info)==null?void 0:s.dimension)===1?wn(e.data[r]):((i=e.data[r].info)==null?void 0:i.dimension)===2&&ro(e.data[r]),Ue(e),ie(e),tt(e)}}function Ub(e,t){var o,s;const n=t.payload.filterType;if(e.activeTab){for(const i of e.data)It((o=i==null?void 0:i.info)==null?void 0:o.nucleus)===e.activeTab&&(((s=i.filters)==null?void 0:s.filter(l=>l.name===n))||[]).forEach(l=>{var a,u;xi(i,l.id),((a=i.info)==null?void 0:a.dimension)===1?wn(i):((u=i.info)==null?void 0:u.dimension)===2&&ro(i)});Ue(e),ie(e),tt(e)}}function Kb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum;Te(e.data[o],[{name:ha,options:b({zones:e.toolOptions.data.baseLineZones},t.options)}]),e.toolOptions.data.baseLineZones=[];const s=e.xDomain.slice();Ue(e),ie(e),e.xDomain=s}}function is(e,t=null,n={},o=null){var d,h,m,g;const{updateDomain:s=!0,rollback:i=!1,searchBy:r="id",returnCurrentDatum:l=!1}=n;let a=null;const u=o||e.activeSpectrum;if(u!=null&&u.id){const x=u.index,y=e.data[x];if(t&&e.toolOptions.data.activeFilterID!==t){const S=y.filters.findIndex(C=>C[r]===t);let v=[];if(S!==-1&&(v=y.filters.slice(0,i?S:S+1),v.length>1?e.toolOptions.data.activeFilterID=(d=y.filters[i?S-1:S])==null?void 0:d.id:e.toolOptions.data.activeFilterID=null,hn(y,v),l)){const{name:C,value:E}=y.filters[S],T=Hl(e).data[x];((h=T.info)==null?void 0:h.dimension)===1&&Te(T,[{name:C,options:E}]),a={datum:T,index:x}}}else e.toolOptions.data.activeFilterID=null,hn(y);((m=y.info)==null?void 0:m.dimension)===1?wn(y):((g=y.info)==null?void 0:g.dimension)===2&&ro(y),s&&(ie(e),tt(e))}if(l)return a}function qb(e,t){is(e,t.id)}function Jb(e,t){var o;const n=Ai(e.activeTab,e.data);if(n&&n.length>0&&Array.isArray(t.payload)){const s=((o=n[0].filters.find(i=>i.name===no))==null?void 0:o.value)||[];for(const i of n){const r=t.payload.map(l=>l.name===Yn?k(b({},l),{options:k(b({},l.options),{exclusions:s})}):l);Te(i,r)}}ie(e)}function Qb(e,t){var r,l;const{from:n,to:o}=t.payload,s=Zt(e,{startX:n,endX:o});let i;if((r=e.activeSpectrum)!=null&&r.id){const a=(l=e.activeSpectrum)==null?void 0:l.index;i=[e.data[a]]}else i=Ai(e.activeTab,e.data);for(const a of i)Te(a,[{name:no,options:[{id:q(),from:s[0],to:s[1]}]}]);ie(e)}function ey(e,t){const{id:n,spectrumID:o}=t.payload,s=e.data.findIndex(r=>r.id===o),i=e.data[s].filters.find(r=>r.name===no);i&&(i.value.length===1?xi(e.data[s],i.id):(i.value=i.value.filter(r=>r.id!==n),hn(e.data[s])))}function ty(e,t){e.overDisplayer=t.payload}function ny(e){const{past:t,present:n,future:o}=e.history,s=t[t.length-1],i=t.slice(0,t.length-1),r=[n,...o],l=r.length!==0,a=t.length!==0,u=ic(e.data),d={past:i,present:s,future:r,hasRedo:l,hasUndo:a};e.xDomain=u.xDomain,e.yDomain=u.yDomain,e.originDomain=u,e.history=d}function oy(e){const{history:t}=e,n=t.future.shift();t.past.push(t.present),t.present=n,t.hasUndo=!0,t.hasRedo=t.future.length>0,ie(e.data)}function sy(e,t){e.history={past:[],present:t,future:[],hasRedo:!1,hasUndo:!1}}function iy(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o!=null&&o.id){const{index:i}=o,r=n[i];vi(r.integrals,{options:t,nucleus:s}),Sn(r,!0)}}function ry(e,t){const{startX:n,endX:o}=t,{data:s,molecules:i,activeTab:r,activeSpectrum:l}=e,[a,u]=Zt(e,{startX:n,endX:o});if(l!=null&&l.id){const d=s[l.index],{x:h,re:m}=d.data,g=Wt(d),x={id:q(),originFrom:a-g,originTo:u-g,from:a,to:u,absolute:bn({x:h,y:m},{from:a,to:u,reverse:!0}),kind:"signal"};d.integrals.values.push(x),d.integrals.options=yi(d.integrals.options,{molecules:i,nucleus:r}),Sn(d),ts(e,d)}}function ly(e,t){if(e.activeSpectrum){const n=oe(e),{index:o}=e.activeSpectrum,{integralID:s}=t,i=e.data[o];if(s==null)i.integrals.values=[];else{const r=n.data[o].integrals.values.findIndex(l=>l.id===s);i.integrals.values.splice(r,1),Sn(i)}}}function _r(e,t){var s;const n=oe(e),o=t.payload.data;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum,r=n.data[i],l=e.data[i],{x:a,re:u}=r.data,d=r.integrals.values.findIndex(h=>h.id===o.id);d!==-1&&(l.integrals.values[d]=k(b({originFrom:o.from,originTo:o.to},o),{absolute:bn({x:a,y:u},{from:o.from,to:o.to,reverse:!0})}),Sn(l))}}function ay(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;pg(e.data[s],n)}}function cy(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;e.data[s].integrals.options.isSumConstant=!n}}function uy(e=[]){const t=[];for(const n of e){const s=Et.Molecule.fromMolfile(n.molfile).getFragments();for(let i of s)t.push(Mo({molfile:i.toMolfileV3()}))}return t}function pc(e,t){let o=Et.Molecule.fromMolfile(t).getFragments();for(let s of o)e.push(Mo({molfile:s.toMolfileV3()}))}function dy(e,t,n){let s=Et.Molecule.fromMolfile(t).getFragments();if(s.length>1){e=e.filter(i=>i.key!==n);for(let i of s)e.push(Mo({molfile:i.toMolfileV3()}))}else if(s.length===1){const i=s[0],r=Mo({molfile:i.toMolfileV3(),key:n});let l=e.findIndex(a=>a.key===n);e.splice(l,1,r)}}const Wn="INITIATE",py="SAVE_DATA_AS_JSON",gn="LOAD_JSON_FILE",$o="LOAD_JCAMP_FILE",Zn="LOAD_NMREDATA_FILE",Ws="LOAD_MOL_FILE",Ho="LOAD_ZIP_FILE",Zs="LOAD_JDF_FILE",hc="ADD_PEAK",fc="ADD_PEAKS",rs="DELETE_PEAK_NOTATION",Di="SHIFT_SPECTRUM",ls="SET_X_DOMAIN",Ii="SET_Y_DOMAIN",mc="SET_ORIGINAL_DOMAIN",gc="SET_WIDTH",Pi="SET_DIMENSIONS",co="SET_SELECTED_TOOL",xc="SET_SELECTED_FILTER",bc="CHANGE_SPECTRUM_SETTING",xn="FULL_ZOOM_OUT",Un="CHANGE_VISIBILITY",Ri="CHANGE_PEAKS_MARKERS_VISIBILITY",zo="CHANGE_ACTIVE_SPECTRUM",yc="CHANGE_SPECTRUM_COLOR",vc="ADD_INTEGRAL",as="DELETE_INTEGRAL",Ni="TOGGLE_REAL_IMAGINARY_VISIBILITY",cs="SET_ZOOM",Mi="ADD_MOLECULE",_i="SET_MOLECULE",Cc="DELETE_MOLECULE",Us="SET_CORRELATION",Sc="SET_CORRELATIONS",kc="DELETE_CORRELATION",wc="SET_CORRELATIONS_MF",Ec="SET_CORRELATIONS_TOLERANCE",Fi="DELETE_SPECTRA",Li="CHANGE_SPECTRUM_DISPLAY_VIEW_MODE",Ac="RESIZE_INTEGRAL",us="BRUSH_END",Tc="RESET_X_DOMAIN",Dc="ENABLE_FILTER",Ic="DELETE_FILTER",Pc="DELETE_SPECTRA_FILTER",Rc="APPLY_ZERO_FILLING_FILTER",Nc="APPLY_FFT_FILTER",Oi="CALCULATE_MANUAL_PHASE_CORRECTION_FILTER",Mc="APPLY_MANUAL_PHASE_CORRECTION_FILTER",_c="APPLY_AUTO_PHASE_CORRECTION_FILTER",Fc="APPLY_ABSOLUTE_FILTER",$i="SET_VERTICAL_INDICATOR_X_POSITION",Lc="AUTO_PEAK_PICKING",Oc="AUTO_RANGES_DETECTION",$c="AUTO_ZONES_DETECTION",ds="DELETE_RANGE",Hc="DELETE_1D_SIGNAL",zc="SET_SELECTED_OPTIONS_PANEL",St="SET_LOADING_FLAG",ut="RESET_SELECTED_TOOL",Hi="SET_SPECTRUMS_VERTICAL_AlIGN",hy="SAVE_AS_SVG",Vc="CHANGE_INTEGRAL_DATA",zi="SET_ACTIVE_TAB",jc="CHANGE_INTEGRAL_SUM",Bc="ADD_BASE_LINE_ZONE",Xc="DELETE_BASE_LINE_ZONE",Yc="APPLY_BASE_LINE_CORRECTION_FILTER",Vo="SET_KEY_PREFERENCES",Vi="APPLY_KEY_PREFERENCES",Gc="RESIZE_RANGE",Wc="CHANGE_RANGE_SUM",Zc="ADD_RANGE",Uc="SET_2D_LEVEL",Kc="ADD_2D_ZONE",ps="DELETE_2D_ZONE",qc="DELETE_2D_SIGNAL",Jc="SET_2D_SIGNAL_PATH_LENGTH",Qc="ADD_MISSING_PROJECTION",eu="SET_FILTER_SNAPSHOT",tu="CHANGE_RANGE_RELATIVE",nu="CHANGE_RANGE_SIGNAL_VALUE",ou="CHANGE_RANGE_SIGNAL_KIND",su="SAVE_EDITED_RANGE",iu="UNLINK_RANGE",ru="SET_DIAID_RANGE",lu="CHANGE_INTEGRAL_RELATIVE",au="ANALYZE_SPECTRA",ji="DELETE_ANALYZE_SPECTRA_RANGE",cu="RESIZE_ANALYZE_SPECTRA_RANGE",uu="SET_ANALYZE_SPECTRA_COLUMNS",du="FILTER_SPECTRA_COLUMN",pu="ALIGN_SPECTRA",Ks="CHANGE_ZONE_SIGNAL_VALUE",hu="CHANGE_ZONE_SIGNAL_KIND",fu="SAVE_EDITED_ZONE",mu="UNLINK_ZONE",gu="SET_DIAID_ZONE",hs="PREDICT_SPECTRA",xu="SET_SPECTRA_SAME_TOP",bu="RESET_SPECTRA_SCALE",jo="SET_MOUSE_OVER_DISPLAYER",yu="APPLY_MULTIPLE_SPECTRA_FILTER",vu="ADD_EXCLUSION_ZONE",Cu="DELETE_EXCLUSION_ZONE",Su="CHANGE_RANGES_SUM_FLAG",ku="CHANGE_INTEGRALS_SUM_FLAG",wu="CHANGE_ZONES_NOISE_FACTOR",Eu="CHANGE_TEMP_RANGE",Au="SHOW_MULTIPLICTY_TREES",Tu="SHOW_RANGES_INTEGRALS",Du="AUTO_RANGES_SPECTRA_PICKING",Iu="AUTO_ZONES_SPECTRA_PICKING",Pu="GENERATE_SPECTRUM_FROM_PUBLICATION_STRING",Ru="RESURRECTING_SPECTRUM_FROM_RANGES",Nu="SHOW_J_GRAPH",Bo="SET_AUTOMATIC_ASSIGNMENTS";function fy(e,t){e.isLoading=t}function Mu(e,t){e.usedColors["1d"]=e.usedColors["1d"].concat(t["1d"]),e.usedColors["2d"]=e.usedColors["2d"].concat(t["2d"])}function Bi(e,t){const{spectra:n,molecules:o,correlations:s,usedColors:i}=t||{spectra:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:[]};Mu(e,i),e.data=n,e.molecules=uy(o),!s||Object.keys(s).length===0?e.correlations=Qn([],{tolerance:oc}):e.correlations=my(s)}function my(e){return k(b({},e),{values:e.values.map(t=>{if(typeof t.hybridization=="string"){let n=[];if(t.hybridization.length>0){const o=t.hybridization.replaceAll("SP",""),s=Number(o);n.push(s)}t.hybridization=n}return t})})}function _u(e,t){const n={verticalAlign:null},{verticalAlign:o=null}=t||n;o?Ct(e,{align:o}):Ct(e,{align:"auto-check"})}function gy(e,t){var s;const n=fs();Bi(n,t.payload);const o=((s=t.payload)==null?void 0:s.preferences)||{};return nt(n,{tab:(o==null?void 0:o.activeTab)||""}),_u(n,t.payload),n.width=e.width,n.height=e.height,n.isLoading=!1,n.actionType=Wn,n}function xy(e,t){const{files:n}=t,o=ox(n,e.usedColors);for(const s of o)e.data.push(s);nt(e),e.isLoading=!1}function by(e,t){const{files:n}=t,o=Qa(n,e.usedColors);for(const s of o)e.data.push(s);nt(e),Ct(e,{align:"auto-check"}),e.isLoading=!1}function yy(e,t){var s;const n=fs();Bi(n,t.payload);const o=((s=t.payload)==null?void 0:s.preferences)||{};return nt(n,{tab:(o==null?void 0:o.activeTab)||""}),_u(n,o),n.width=e.width,n.height=e.height,n.isLoading=!1,n.actionType=gn,n}function vy(e,t){const{files:n}=t;for(let o of n)pc(e.molecules,o.binary.toString());e.isLoading=!1}function Cy(e,t){const{data:n,usedColors:o}=t.payload;e.data=e.data.concat(n),Mu(e,o),nt(e),Ct(e,{align:"auto-check"}),e.isLoading=!1}function Sy(e,t){const n=fs();return Bi(n,t.payload),nt(n),Ct(n,{align:"auto-check"}),n.isLoading=!1,n.width=e.width,n.height=e.height,n.actionType=Zn,n}function ky(e,t){const n=e.molecules.length===0;pc(e.molecules,t);const o=e.molecules[0]||null;n&&o&&Ci(e,o.key,o)}function wy(e,t,n){dy(e.molecules,t,n);const o=e.molecules.findIndex(s=>s.key===n);Ci(e,n,o!==-1?e.molecules[o]:e.molecules[0]||null)}function Ey(e,t){e.displayerMode===Y.DM_1D&&lc(e,{payload:{assignmentData:t,rangeData:null}}),e.displayerMode===Y.DM_2D&&cc(e,{payload:{assignmentData:t,zoneData:null}})}function Ay(e,t){const{key:n,assignmentData:o}=t.payload;Ey(e,o);const s=e.molecules.findIndex(i=>i.key===n);e.molecules.splice(s,1),Ci(e,n,e.molecules[0]||null)}function Ty(e,t){const{data:n,options:o}=t.payload;if(!n)e.isLoading=!1;else{const s=bi(!1,e.usedColors["1d"]);for(const i of ax(n,o,s))e.data.push(i),e.tabActiveSpectrum[It(i.info.nucleus)]={id:i.id,index:e.data.length-1};e.usedColors["1d"].push(s)}e.toolOptions.data.predictionIndex++,nt(e),e.isLoading=!1}function Dy(e,t){var o;const n=oe(e);if(((o=e.activeSpectrum)==null?void 0:o.id)&&n){const{index:s}=e.activeSpectrum,i=10,r=t.x-i,l=t.x+i,[a,u]=Zt(e,{startX:r,endX:l}),d=za(n.data[s].data,{from:a,to:u}),h=Wt(e.data[s]);if(d){const m={id:q(),originalX:d.x-h,x:d.x,y:d.y,width:0};e.data[s].peaks.values.push(m)}}}function Iy(e,t){const n=oe(e);if(e.activeSpectrum){const{index:o}=e.activeSpectrum,s=n.data[o],{startX:i,endX:r}=t,[l,a]=Zt(e,{startX:i,endX:r});if(l!==a){const u=za(s.data,{from:l,to:a}),d=Wt(e.data[o]);if(u&&!s.peaks.values.some(h=>h.x===u.x)){const h={id:q(),originalX:u.x-d,x:u.x,y:u.y,width:0};e.data[o].peaks.values.push(h)}}}}function Py(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,o=oe(e);if(t==null)e.data[n].peaks.values=[];else{const s=o.data[n].peaks.values.findIndex(i=>i.id===t.id);e.data[n].peaks.values.splice(s,1)}}}function Ry(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){e.toolOptions.selectedTool=F.zoom.id,e.toolOptions.selectedOptionPanel=null;const{index:o}=e.activeSpectrum,s=e.data[o],[i,r]=e.xDomain,l=We(s.data.x,i),a=We(s.data.x,r),u=hg(e.data[o],k(b({},t),{windowFromIndex:l,windowToIndex:a}));s.peaks.values=s.peaks.values.concat(u)}}function Ny(e){const t="a".charCodeAt(0),o="z".charCodeAt(0)-t+1;let s="";for(;e>=0;)s=String.fromCharCode(e%o+t)+s,e=Math.floor(e/o)-1;return s}var Xo=(e=>(e.NORMAL="NORMAL",e.FORMULA="FORMULA",e))(Xo||{}),Hn=(e=>(e.RELATIVE="relative",e.ABSOLUTE="absolute",e.MIN="min",e.MAX="max",e))(Hn||{});function My(e,t,n,o){const s=o||Ny(e[t].options.columnIndex).toUpperCase();return e[t].options.columns[s]=n,e[t].options.columnIndex++,s}function _y(e,t){const{from:n,to:o,nucleus:s}=t;return e.reduce((i,r)=>{if(kn(r)&&r.info.nucleus===s&&!r.info.isFid){const l=wg(r,{from:n,to:o});i.sum+=l.absolute,i.values.push(b({SID:r.id},l))}return i},{values:[],sum:0})}function Fu(e,t){e[t]===void 0&&(e[t]={options:{sum:100,code:null,columns:{},columnIndex:0},values:{}})}function Fy(e,t,n,o){e[t].options.columns[n].valueKey=o,e[t].values=Xi(e,t)}function Ly(e,t,{columns:n,code:o}){Fu(e,t),e[t].options.code=o,e[t].options.columns=Object.values(n).reduce((r,l)=>{const a=b({},l);return delete a.tempKey,r[l.tempKey]=a,r},{});const{columns:s}=e[t].options;let i=Object.entries(e[t].values).reduce((r,[l,a])=>(r[l]=Object.keys(n).reduce((u,d)=>{const h=n[d].tempKey;return a[d]&&(u[h]=a[d]),u},{}),r),{});i=Object.entries(i).reduce((r,l)=>(r[l[0]]=Object.keys(s).reduce((a,u)=>{const d=s[u].type==="FORMULA";return a[u]=d?{colKey:u,value:Ou(s,i[l[0]],s[u].formula)}:k(b({},l[1][u]),{colKey:u}),a},{}),r),{}),e[t].values=i}function Oy(e,t){return Object.keys(t).reduce((n,o)=>(t[o].type==="FORMULA"&&(n[o]=k(b({colKey:o},e),{value:Ou(t,e,t[o].formula)})),n),{})}function Xi(e,t){const{columns:n}=e[t].options;return Object.entries(e[t].values).reduce((s,i)=>{const[r,l]=i;return s[r]=b(b({},l),Oy(l,n)),s},{})}function Lu(e,t,n){const{from:o,to:s,nucleus:i,columnKey:r=null}=n;Fu(t,i);const l=My(t,i,{type:"NORMAL",valueKey:"relative",from:o,to:s,index:1},r),{sum:a}=t[i].options,{values:u,sum:d}=_y(e,{from:o,to:s,nucleus:i}),h=B(t,`${i}.values`,{});let m=u.reduce((g,x)=>{const y=d>0?a/d:0;return g[x.SID]=k(b({},h[x.SID]),{[l]:k(b({colKey:l},x),{relative:Math.abs(x.absolute)*y})}),g},{});t[i].values=m,t[i].values=Xi(t,i)}function $y(e,t,n){const o=Object.entries(e[n].values).reduce((a,u)=>(delete u[1][t],u[1]&&Object.keys(u[1]).length>0&&(a[u[0]]=u[1]),a),{}),l=e[n].options.columns,{[t]:s}=l,i=G(l,[hr(t)]);Object.keys(e[n].options.columns).length===1&&(e[n].options.columnIndex=0),e[n].options.columns=i,e[n].values=o,e[n].values=Xi(e,n)}function Ou(e,t,n=""){const o=n.split(/\+|-|\*|\/|%|\(|\)/),s=[];for(const l of o){const a=l.trim();e[a]&&s.push(a)}const i=s.map(l=>t[l]?t[l][e[l].valueKey]:null);let r;try{r=new Function(...s,`return ${n}`)(...i)}catch(l){console.error(l),r=new Error(`Invalid Formula ( ${n} ) `)}return r}function Hy(e,t){if(e!=null&&e[t]){const{values:n,options:{columns:o}}=e[t];let s="";for(const i in o)s+=`${i}	`;s+=`
`;for(const i of Object.values(n)){for(const r in o)s+=`${i[r][o[r].valueKey]}	`;s+=`
`}return s}return null}function zy(e,t){const[n,o]=Zt(e,t);Lu(e.data,e.spectraAnalysis,{from:n,to:o,nucleus:e.activeTab})}function Vy(e,t){const{colKey:n}=t;$y(e.spectraAnalysis,n,e.activeTab)}function jy(e,t){const{columnKey:n,from:o,to:s}=t.payload;Lu(e.data,e.spectraAnalysis,{from:o,to:s,nucleus:e.activeTab,columnKey:n})}function By(e,t){const n=t.payload;Ly(e.spectraAnalysis,e.activeTab,n)}function Xy(e,t){const{columnKey:n,valueKey:o}=t.payload;Fy(e.spectraAnalysis,e.activeTab,n,o)}function $u(e){return!(e.display.isPositiveVisible===!1&&e.display.isNegativeVisible===!1)}function Ts(e,t){e.info.dimension===2?(e.display.isPositiveVisible=t,e.display.isNegativeVisible=t,e.display.isVisible=$u(e)):e.display.isVisible=t}function Yy(e,t){if(Array.isArray(t.id)){const n=t.id;if(n.length===0)for(const o of e.data)Ts(o,!1);else for(const o of e.data)n.includes(o.id)?Ts(o,!0):Ts(o,!1)}else{const n=e.data.findIndex(o=>o.id===t.id);e.data[n].display[t.key]=t.value,e.data[n].info.dimension===2&&(e.data[n].display.isVisible=$u(e.data[n]))}}function Gy(e,t){var n;for(let o of e.data)((n=o.info)==null?void 0:n.dimension)===1&&t.some(s=>s.id===o.id)?o.display.isPeaksMarkersVisible=!0:o.display.isPeaksMarkersVisible=!1}function Wy(e,t){let n=!1;const o=e.activeSpectrum;if(t){const s=e.data.findIndex(r=>r.id===t.id),i=e.data.findIndex(r=>{var l;return r.id===((l=e.activeSpectrum)==null?void 0:l.id)});if(s!==-1){const r=e.data[s];r.display.isVisible=!0,i!==-1?n=e.data[i].info.isFid!==r.info.isFid:n=r.info.isFid||!1}t=k(b({},t),{index:s}),e.activeSpectrum=t,e.tabActiveSpectrum[e.activeTab]=t}else{if(o){const s=e.data.findIndex(i=>i.id===o.id);n=e.data[s].info.isFid}else n=!1;e.activeSpectrum=null,e.tabActiveSpectrum[e.activeTab]=null}F[e.toolOptions.selectedTool].isFilter&&(e.toolOptions.selectedTool=F.zoom.id,e.toolOptions.data.baseLineZones=[],e.toolOptions.selectedOptionPanel=null,e.tempData=null),e.toolOptions.data.activeFilterID?is(e,null,{},o):n&&(ie(e),tt(e))}function Zy(e,{id:t,display:n}){const s=oe(e).data.findIndex(i=>i.id===t);s!==-1&&(e.data[s].display=n)}function Uy(e,{id:t,color:n,key:o}){const i=oe(e).data.findIndex(r=>r.id===t);i!==-1&&(e.data[i].display[o]=n)}function Ky(e,t){const n=oe(e);if(t.id){const o=n.data.findIndex(s=>s.id===t.id);e.data.splice(o,1)}else e.data=[];nt(e,{tab:e.activeTab,refreshActiveTab:!0})}function qy(e,t){var s;const n=oe(e),{nucleus:o}=t;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum;for(let a of o){const u=Mg(n.data[i],a,e.usedColors);e.data.push(u)}const l=ss("nucleus")(e.data);dc(e,l,e.activeTab,!0),ie(e),tt(e)}}function Jy(e,t){var n,o;if(e.data&&e.data.length>0){for(let s of e.data)if(((n=s.info)==null?void 0:n.dimension)===1&&s.info.nucleus===e.activeTab&&!((o=s.info)!=null&&o.isFid)){const i=ug(s,b({},t.payload));Te(s,[{name:oo,options:i}])}}ie(e),tt(e)}function Qy(e,t){const n=t.payload.publicationText,o=ag(n,e.usedColors);e.data.push(o),nt(e),zt(e,{scale:.8,spectrumID:o.id})}const e0="undo",t0="redo",n0="reset",fs=()=>({actionType:"",data:[],contours:{},tempData:null,xDomain:[],yDomain:[],yDomains:{},xDomains:{},originDomain:{xDomain:[],yDomain:[],xDomains:{},yDomains:{},shareYDomain:!1},integralsYDomains:{},activeTab:"",width:0,height:0,margin:{top:10,right:20,bottom:70,left:0},activeSpectrum:null,mode:"RTL",molecules:[],verticalAlign:{align:"bottom",verticalShift:Ya},history:{past:[],present:null,future:[],hasUndo:!1,hasRedo:!1},isLoading:!1,keysPreferences:{},displayerMode:Y.DM_1D,tabActiveSpectrum:{},spectraAnalysis:{},correlations:{},displayerKey:"",zoom:{history:{}},overDisplayer:!1,toolOptions:{selectedTool:F.zoom.id,selectedOptionPanel:null,data:{baseLineZones:[],pivot:{value:0,index:0},zonesNoiseFactor:1,activeFilterID:null,tempRange:null,showMultiplicityTrees:!1,showRangesIntegrals:!0,showJGraph:!1,predictionIndex:0}},usedColors:{"1d":[],"2d":[]}}),Hu=fs();function o0(e){const t=q(),n=Qn([],{tolerance:oc});return k(b({},e),{correlations:n,displayerKey:t,history:{}})}function s0(e){const t={"1d":[],"2d":[]};return n=>{switch(n.type){case Wn:{if(n.payload){const o=Dr(n.payload),{spectra:s}=o,i=G(o,["spectra"]);Ir(s,t).then(r=>{n.payload=k(b({spectra:r},i),{usedColors:t}),e(n)})}break}case gn:{const s=JSON.parse(n.files[0].binary.toString()),i=Dr(s);Ir(i.spectra,t).then(r=>{n.payload=Object.assign(i,{spectra:r,usedColors:t}),e(n)});break}case Ho:{for(let s of n.files)Ja({display:{name:s.name}},s.binary,t).then(i=>{n.payload={data:i,usedColors:t},e(n)});break}case Zn:{yx(n.file,t).then(s=>{n.payload=Object.assign(s,{usedColors:t}),e(n)});break}case hs:{const{mol:{molfile:s},options:i}=n.payload;lx(s).then(r=>{n.payload={data:r,options:i},e(n)},()=>{e(n)});break}default:n.usedColors=t,e(n);break}}}function i0(e,t){switch([gn,Zn,Wn].includes(t.type)||(e.actionType=t.type),t.type){case Wn:return gy(e,t);case St:return fy(e,t.isLoading);case gn:return yy(e,t);case $o:return by(e,t);case Zs:return xy(e,t);case Ws:return vy(e,t);case Ho:return Cy(e,t);case Zn:return Sy(e,t);case hc:return Dy(e,t.mouseCoordinates);case fc:return Iy(e,t);case rs:return Py(e,t.data);case vc:return ry(e,t);case as:return ly(e,t);case Vc:return _r(e,t);case Ac:return _r(e,t);case jc:return iy(e,t.value);case ku:return cy(e,t);case lu:return ay(e,t);case mc:return Tx(e,t.domain);case ls:return Dx(e,t.xDomain);case Ii:return Ix(e,t.yDomain);case gc:return hb(e,t.width);case Pi:return fb(e,t.width,t.height);case co:return Sb(e,t);case ut:return Ue(e);case zc:return Ti(e,t.selectedOptionPanel);case xn:return Nb(e,t);case Di:return zb(e,t.shiftValue);case Rc:return Vb(e,t.value);case Nc:return jb(e);case Mc:return Bb(e,t.value);case _c:return Yb(e);case Fc:return Xb(e);case Oi:return Gb(e,t.value);case Dc:return Wb(e,t.id,t.checked);case Ic:return Zb(e,t);case Pc:return Ub(e,t);case eu:return qb(e,t);case yu:return Jb(e,t);case vu:return Qb(e,t);case Cu:return ey(e,t);case Un:return Yy(e,t);case Ri:return Gy(e,t.data);case zo:return Wy(e,t.data);case yc:return Uy(e,t.data);case bc:return Zy(e,t);case pu:return Jy(e,t);case Fi:return Ky(e,t);case Qc:return qy(e,t);case Pu:return Qy(e,t);case Ni:return Tb(e);case cs:return Rb(e,t);case xu:return $b(e);case bu:return Hb(e);case Li:return wb(e);case Mi:return ky(e,t.molfile);case _i:return wy(e,t.molfile,t.key);case Cc:return Ay(e,t);case hs:return Ty(e,t);case wc:return lb(e,t.payload);case Ec:return ab(e,t.payload);case Us:return cb(e,t.payload);case Sc:return ub(e,t.payload);case kc:return db(e,t.payload);case us:return Db(e,t);case $i:return Ib(e,t.position);case Hi:return kb(e);case Lc:return Ry(e,t.options);case $c:return Qx(e,t.options);case wu:return qx(e,t);case Oc:return Rx(e,t.options);case Zc:return Hx(e,t);case ds:return Mx(e,t);case Hc:return rc(e,t);case Gc:return Ox(e,t);case Wc:return $x(e,t.value);case Su:return jx(e,t);case tu:return zx(e,t);case nu:return Vx(e,t);case ou:return _x(e,t);case su:return Fx(e,t);case iu:return lc(e,t);case ru:return Lx(e,t);case Eu:return Bx(e,t);case Au:return Xx(e);case Tu:return Yx(e);case Du:return Nx(e);case Nu:return Gx(e);case zi:return Lb(e,t.tab);case Bc:return Eb(e,t.zone);case Xc:return Ab(e,t.id);case Yc:return Kb(e,t);case Vo:return bb(e,t.keyCode);case Vi:return yb(e,t.keyCode);case Uc:return Ob(e,t);case Kc:return Jx(e,t);case ps:return ob(e,t);case qc:return ac(e,t);case Jc:return sb(e,t);case Tc:return Px(e);case Ks:return tb(e,t);case hu:return nb(e,t);case mu:return cc(e,t);case gu:return ib(e,t);case Iu:return eb(e);case fu:return rb(e,t);case au:return zy(e,t);case ji:return Vy(e,t);case cu:return jy(e,t);case uu:return By(e,t);case du:return Xy(e,t);case Ru:return pb(e,t);case Bo:return Sx(e,t);case e0:return ny(e);case t0:return oy(e);case n0:return sy(e,t);case jo:return ty(e,t);default:return}}const r0=ni(i0),zu=c.exports.createContext(Hu),l0=zu.Provider;function H(){return c.exports.useContext(zu)}const Vu=c.exports.createContext({}),a0=Vu.Provider;function X(){return c.exports.useContext(Vu)}function Se(e){const{data:t,activeSpectrum:n}=H();return c.exports.useMemo(()=>t&&n&&n.id&&t.find(s=>s.id===n.id)||e,[n,t,e])}function c0(){}const ju=c.exports.createContext(c0),u0=ju.Provider;function Yi(){return c.exports.useContext(ju)}const d0=M`
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
`;function Bu({isEmpty:e=!0,emptyText:t="Drag and drop here a JCAMP-DX, zipped Bruker folder, Jeol jdf or NMRium file",canOpenLoader:n=!0}){const o=Yi();return e?p("div",k(b({css:d0},n&&{onClick:o}),{children:p("p",{children:t})})):null}const p0=M`
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
`;function h0(){return w("div",{css:p0,children:[p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[p("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),p("path",{d:"M520.5 78.1z"})]})}),p("p",{children:"Loading ..."})]})}function Xu(){return f(h0,{})}const Yu=c.exports.createContext(Xu),f0=Yu.Provider;function Gu({isLoading:e=!0,emptyText:t=void 0}){const{data:n}=H(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{let r=null;return e||(r=setTimeout(()=>{s(!0)},500)),()=>{clearTimeout(r)}},[e]);const i=c.exports.useContext(Yu);return _(c.exports.Fragment,{children:[e&&i(),o&&!e&&f(Bu,{isEmpty:n&&n.length===0,emptyText:t})]})}const m0={container:{transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",zoom:"100%"}},g0=[F.zoom.id,F.zeroFilling.id,F.peakPicking.id,F.integral.id,F.phaseCorrection.id,F.baseLineCorrection.id,F.rangesPicking.id,F.zone2D.id,F.slicingTool.id,F.editRange.id,F.multipleSpectraAnalysis.id,F.exclusionZones.id,F.databaseRangesSelection.id],Ie={X:1,Y:2,XY:3},x0={startX:0,startY:0};function Eo({brushType:e=Ie.XY,dimensionBorder:t=x0,width:n,height:o}){let{width:s,height:i,toolOptions:{selectedTool:r}}=H(),{startX:l,endX:a,startY:u,endY:d,step:h}=c.exports.useContext(Tt);if(!g0.includes(r)||h!=="brushing"||!t||t.startX&&l<t.startX||t.startY&&u<t.startY||(t.endX&&Math.sign(a-l)===1?a>t.endX:a<t.startX)&&(t.endX&&t.endY&&Math.sign(d-u)===1?d>t.endY:d<t.startY))return null;s=n||s,i=o||i,a=t.endX&&a>t.endX?t.endX:t.startX&&a<t.startX?t.startX:a,d=t.endY&&d>t.endY?t.endY:t.startY&&d<t.startY?t.startY:d;const m=e===Ie.X||e===Ie.XY?(a-l)/s:1;l=e===Ie.X||e===Ie.XY?l:0;const g=e===Ie.Y||e===Ie.XY?(d-u)/i:1;return u=e===Ie.Y||e===Ie.XY?u:0,f("div",{style:k(b({},m0.container),{transform:`translate(${l}px, ${u}px) scale(${m},${g})`,willChange:"transform"}),children:f("svg",{width:s,height:i,children:f("rect",{x:"0",y:"0",width:s,height:i,fill:"gray",opacity:"0.2"})})})}const Fr={line:{stroke:"black",strokeOpacity:1,shapeRendering:"crispEdges",strokeWidth:"1",willChange:"transform"}},b0=[F.zoom.id,F.equalizerTool.id,F.baseLineCorrection.id,F.zone2D.id,F.slicingTool.id,F.integral.id,F.rangesPicking.id,F.editRange.id,F.multipleSpectraAnalysis.id,F.exclusionZones.id,F.databaseRangesSelection.id];function Wu(){const{height:e,width:t,margin:n,toolOptions:{selectedTool:o}}=H();let s=c.exports.useContext(pt);const i=c.exports.useContext(Tt);return!b0.includes(o)||i.step==="brushing"||!s||s.x>t-n.right||s.y>e-n.bottom||!t||!e?null:f("div",{style:{willChange:"transform",cursor:"crosshair",transform:`translate(${-t+s.x}px, ${-e+s.y}px)`,position:"absolute",top:0,left:0,pointerEvents:"none",overflow:"visible",width:2*t,height:2*e},children:_("svg",{width:2*t,height:2*e,children:[f("line",{style:Fr.line,x1:t,y1:"0",x2:t,y2:e*2},"vertical_line"),f("line",{style:Fr.line,x1:"0",y1:e,x2:t*2,y2:e},"horizontal_line")]})},"crossLine")}function y0(e,t){const[n,o]=c.exports.useState(localStorage.getItem(e)||"{}");c.exports.useEffect(()=>{localStorage.setItem(e,n)},[e,n]);const s=c.exports.useCallback((i,r=null)=>{let l=JSON.parse(n);r?Ip(l,r,i):l=b(b({},l),i),o(JSON.stringify(l))},[n]);return c.exports.useMemo(()=>[t?B(JSON.parse(n),t,{}):JSON.parse(n),s],[t,s,n])}function kt(e,t=!0){const n=localStorage.getItem(e);return n&&t?JSON.parse(n):n}function En(e,t){localStorage.setItem(e,t)}function Lr(e){localStorage.removeItem(e)}function ft(e,t,n=null){return B(e,t,n)}const Yt={version:1,label:"Default workspace",display:{general:{disableMultipletAnalysis:!1,hideSetSumFromMolecule:!1,hideGeneralSettings:!1,experimentalFeatures:{display:!0}},panels:{spectraPanel:{display:!0,open:!0},informationPanel:{display:!0,open:!1},peaksPanel:{display:!0,open:!1},integralsPanel:{display:!0,open:!1},rangesPanel:{display:!0,open:!1},structuresPanel:{display:!0,open:!1},filtersPanel:{display:!0,open:!1},zonesPanel:{display:!0,open:!1},summaryPanel:{display:!1,open:!1},multipleSpectraAnalysisPanel:{display:!1,open:!1},databasePanel:{display:!1,open:!1},predictionPanel:{display:!1,open:!1}}},controllers:{dimmedSpectraTransparency:.1},formatting:{nuclei:{"1h":{name:"1H",ppm:"0.00",hz:"0.00"},"13c":{name:"13C",ppm:"0.00",hz:"0.00"},"15n":{name:"15N",ppm:"0.00",hz:"0.00"},"19f":{name:"19F",ppm:"0.00",hz:"0.00"},"29si":{name:"29Si",ppm:"0.00",hz:"0.00"},"31p":{name:"31P",ppm:"0.00",hz:"0.00"}},panels:{}}},v0={version:1,label:"Exercise workspace",display:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0,hideGeneralSettings:!0,experimentalFeatures:{hidden:!0}},panels:{spectraPanel:{display:!0,open:!0},informationPanel:{hidden:!0},peaksPanel:{hidden:!0},integralsPanel:{display:!0},rangesPanel:{hidden:!0},structuresPanel:{hidden:!0},filtersPanel:{hidden:!0},zonesPanel:{hidden:!0},summaryPanel:{hidden:!0},multipleSpectraAnalysisPanel:{hidden:!0},databasePanel:{hidden:!0},predictionPanel:{hidden:!0}},toolBarButtons:{zoomTool:!0,zoomOutTool:!0,import:!1,exportAs:!1,spectraStackAlignments:!0,spectraCenterAlignments:!0,realImaginary:!1,peakTool:!0,integralTool:!0,zonePickingTool:!1,slicingTool:!1,autoRangesTool:!1,zeroFillingTool:!1,phaseCorrectionTool:!1,baseLineCorrectionTool:!1,FFTTool:!1,multipleSpectraAnalysisTool:!1,exclusionZonesTool:!1}},controllers:Yt.controllers,formatting:Yt.formatting},C0={version:1,label:"Prediction workspace",display:{general:{experimentalFeatures:{display:!1}},panels:{spectraPanel:{display:!0},rangesPanel:{display:!0},zonesPanel:{display:!0},predictionPanel:{display:!0,open:!0},informationPanel:{display:!1},peaksPanel:{display:!1},integralsPanel:{display:!1},structuresPanel:{display:!1},filtersPanel:{display:!1},summaryPanel:{display:!1},multipleSpectraAnalysisPanel:{display:!1},databasePanel:{display:!1}}},controllers:Yt.controllers,formatting:Yt.formatting},S0={version:1,label:"Process 1D workspace",display:{general:{disableMultipletAnalysis:!0},panels:{zonesPanel:{display:!0},summaryPanel:{display:!0},multipleSpectraAnalysisPanel:{display:!0,open:!0},spectraPanel:{display:!0,open:!0},informationPanel:{hidden:!0},peaksPanel:{hidden:!0},integralsPanel:{hidden:!0},rangesPanel:{hidden:!0},structuresPanel:{hidden:!0},filtersPanel:{hidden:!0},databasePanel:{hidden:!0},predictionPanel:{hidden:!0}},toolBarButtons:{import:!1,exportAs:!1,autoRangesTool:!1,multipleSpectraAnalysisTool:!1,exclusionZonesTool:!1}},controllers:Yt.controllers,formatting:Yt.formatting};var He={exercise:v0,default:Yt,process1D:S0,prediction:C0};const Zu=6,k0=[{key:"default",label:He.default.label},{key:"process1D",label:He.process1D.label},{key:"exercise",label:He.exercise.label},{key:"prediction",label:He.prediction.label}];function Gi(e){switch(e){case"exercise":return He.exercise;case"process1D":return He.process1D;case"prediction":return He.prediction;case"default":return He.default;default:return{}}}function ms(e){return e.workspaces[e.workspace.current||"default"]}const Uu={version:Zu,workspaces:{},dispatch:()=>null,workspace:{current:"default",base:null}};function Ku(e){return JSON.parse(JSON.stringify(e),(t,n)=>{if((n==null?void 0:n.hidden)!==!0)return n})}function Or(e){let t={};return JSON.parse(JSON.stringify(e),(n,o)=>{(o==null?void 0:o.hidden)!==!0&&n&&(t[n]=t[n]++||1)}),t}function w0(e,t){const n=Or(e),o=Or(t);if(Object.keys(o).length===0)return!1;for(const[s,i]of Object.entries(n))if(!o[s]||o[s]!==i)return!1;return!0}function E0(e){const s=e,{nuclei:t}=s,n=G(s,["nuclei"]),o=Object.keys(t).reduce((i,r)=>(i[t[r].name.trim().toLowerCase()]=t[r],i),{});return b({nuclei:o},n)}function A0(e){const t=kt("nmr-local-storage-version",!1);let n=kt("nmr-general-settings");return t&&(n==null?void 0:n.version)&&Lr("nmr-local-storage-version"),(!(n!=null&&n.version)||(n==null?void 0:n.version)!==Zu)&&Lr("nmr-general-settings"),k(b({},e),{workspaces:(n==null?void 0:n.workspaces)||{default:He.default}})}function T0(e,t){if(t.payload){const o=kt("nmr-general-settings"),n=t.payload,{dispatch:s,workspace:i}=n,r=G(n,["dispatch","workspace"]);e.workspace=!i&&(o==null?void 0:o.currentWorkspace)?{current:o.currentWorkspace,base:null}:{current:i||"default",base:i};const l=an({},Gi(e.workspace.current),r),a=ms(e);if(He[e.workspace.current]&&(!a||(l==null?void 0:l.version)!==(a==null?void 0:a.version)||!w0(l.display,a==null?void 0:a.display))||!o){const{workspaces:u,version:d,workspace:{current:h}}=e||{},m=Ku(l.display),g=k(b({version:d},(o==null?void 0:o.currentWorkspace)&&{currentWorkspace:o==null?void 0:o.currentWorkspace}),{workspaces:k(b({},u),{[h]:k(b({},l),{display:m})})});e.workspaces[h]=an({},a,l),En("nmr-general-settings",JSON.stringify(g))}else a.display=an({},l.display,a.display);e.dispatch=s}}function D0(e,t){if(t.payload){const n=ms(e);let{controllers:o,formatting:s,display:i}=t.payload;s=E0(s);let r=kt("nmr-general-settings");r.currentWorkspace=e.workspace.current,r.workspaces=k(b({},r.workspaces),{[e.workspace.current]:k(b({},r.workspaces[e.workspace.current]),{controllers:o,formatting:s,display:i})}),En("nmr-general-settings",JSON.stringify(r)),n.controllers=o,n.formatting=s,n.display=k(b({},n.display),{panels:i.panels,general:k(b({},n.display.general||{}),{experimentalFeatures:i.general.experimentalFeatures})})}}function I0(e,t){if(t.payload){const n=ms(e),{key:o,value:s}=t.payload;let i=kt("nmr-general-settings");i.workspaces[e.workspace.current].formatting.panels[o]=s,En("nmr-general-settings",JSON.stringify(i)),n.formatting.panels[o]=s}}function P0(e){const t=ms(e);let n=kt("nmr-general-settings");const o=Gi(e.workspace.current).display;n.workspaces[e.workspace.current]&&(n.workspaces[e.workspace.current].display=o,En("nmr-general-settings",JSON.stringify(n))),t.display=o}function R0(e,t){const n=t.payload.workspace;e.workspaces[n]||(e.workspaces[n]=Gi(n)),e.workspace.current=n}function N0(e,t){const{workspace:n,data:{display:o,controllers:s,formatting:i}}=t.payload,r={version:1,label:n,display:o,controllers:s,formatting:i},l=q(),a=kt("nmr-general-settings");a.workspaces[l]=r,En("nmr-general-settings",JSON.stringify(a)),e.workspaces[l]=r,e.workspace.current=l}function M0(e,t){var r;const{workspace:n}=t.payload;n===e.workspace.current&&(e.workspace.current="default");let o=kt("nmr-general-settings");const s=((r=oe(e))==null?void 0:r.workspaces)||{},i=Object.keys(s).reduce((l,a)=>(a!==n&&(l[a]=s[a]),l),{});e.workspaces=i,o.workspaces=Ku(i),En("nmr-general-settings",JSON.stringify(o))}function _0(e,t){switch(t.type){case"INIT_PREFERENCES":return T0(e,t);case"SET_PREFERENCES":return D0(e,t);case"SET_PANELS_PREFERENCES":return I0(e,t);case"RESET_PREFERENCES":return P0(e);case"SET_WORKSPACE":return R0(e,t);case"ADD_WORKSPACE":return N0(e,t);case"REMOVE_WORKSPACE":return M0(e,t);default:return e}}const F0=ni(_0),qu=c.exports.createContext(Uu),L0=qu.Provider;function le(){const e=c.exports.useContext(qu);if(!e)throw new Error("Preferences context was not found");const{workspace:t,workspaces:n,dispatch:o}=e;return c.exports.useMemo(()=>({current:n[t.current]||{},workspace:t,workspaces:n,dispatch:o}),[o,t,n])}function Ju(){const{workspaces:e}=le();return c.exports.useMemo(()=>{const t=Object.keys(e).reduce((n,o)=>(He[o]||n.push({key:o,label:e[o].label}),n),[]);return[...k0,...t]},[e])}class Ut{constructor(){this.array=[]}moveTo(t,n){this.array.push(`M ${t} ${n}`)}lineTo(t,n){this.array.push(`L ${t} ${n}`)}closePath(){this.array.push("Z")}toString(){return this.array.join(" ")}}function $r({id:e,sign:t,color:n,datum:o}){const{margin:s,width:i,height:r,xDomain:l,yDomain:a,contours:u,activeSpectrum:d}=H(),h=le(),{xShift:m,yShift:g}=io(o),x=c.exports.useMemo(()=>d===null?!0:e===d.id,[d,e]);function y(v){const C=Ae({margin:s,width:i,xDomain:l}),E=ye({margin:s,height:r,yDomain:a}),T=new Ut;for(const R of v)if(R.lines){const I=R.lines;if(I.length<1e6)for(let N=0;N<I.length;N+=4)T.moveTo(C(I[N]+m),E(I[N+1]+g)),T.lineTo(C(I[N+2]+m),E(I[N+3]+g))}else{T.moveTo(C(R[0].x+m),E(R[0].y+g));for(let I=1;I<R.length;I++)T.lineTo(C(R[I].x+m),E(R[I].y+g))}return T.closePath(),T.toString()}const S=c.exports.useMemo(()=>B(u,`${e}.${t}`,[]),[u,t,e]);return f("path",{fill:"none","data-test-id":"spectrum-line",stroke:n,strokeWidth:"1",style:{opacity:x?1:B(h.current,"controllers.dimmedSpectraTransparency",.1)},d:y(S)})}function O0({data:e,displayerKey:t}){return f("g",{clipPath:`url(#${t}clip-chart-2d)`,className:"contours",children:e==null?void 0:e.map((n,o)=>_("g",{children:[n.display.isPositiveVisible&&f($r,{id:n.id,sign:"positive",datum:n,color:n.display.positiveColor}),n.display.isNegativeVisible&&f($r,{id:n.id,sign:"negative",datum:n,color:n.display.negativeColor})]},`${n.id+o}`))})}const $0=c.exports.memo(O0);function H0(){const{data:e,displayerKey:t}=H(),n=c.exports.useMemo(()=>e.filter(o=>o.info.dimension===2&&o.info.isFt),[e]);return f($0,{data:n,displayerKey:t})}var An=(e=>(e.XAxis="XAxis",e.YAxis="YAxis",e))(An||{});function uo(e){const{width:t,xDomain:n,yDomain:o}=H();return c.exports.useCallback(s=>{const{x:i,y:r}=s,[l,a]=e==="XAxis"?n:o;return zl({x:i,y:r},{from:l,to:a,nbPoints:t*4,optimize:!0})},[e,t,n,o])}function z0({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,yDomains:i,displayerKey:r}=H(),l=uo(An.YAxis),a=o.left,u=c.exports.useMemo(()=>{if(t){const h=ye({height:n,yDomain:[s[0],s[1]],margin:o}),m=mn(i[t.id],a,e),{x:g,re:x}=t.data,y=l({x:g,y:x}),S=new Ut;S.moveTo(m(y.y[y.y.length-1]),h(y.x.length-1));for(let v=y.x.length-2;v>=0;v--)S.lineTo(m(y.y[v]),h(y.x[v]));return S.toString()}else return},[a,o,e,n,t,l,s,i]),d=n-o.bottom-o.top;return!d||!a?null:_("svg",{viewBox:`0 0 ${a} ${d+o.top}`,width:a,height:d+o.top,children:[f("defs",{children:f("clipPath",{id:`${r}clip-left`,children:f("rect",{width:a,height:d,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${r}clip-left)`,children:f("path",{className:"line",stroke:"black",fill:"none",d:u})})]})}var V0=c.exports.memo(z0);function j0({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,yDomains:i,displayerKey:r}=H(),l=uo(An.XAxis),a=o.top,u=c.exports.useMemo(()=>{if(t){const d=Ae({width:n,xDomain:s,margin:o}),h=mn(i[t.id],a,e),{x:m,re:g}=t.data,x=l({x:m,y:g}),y=new Ut;y.moveTo(d(x.x[0]),h(x.y[0]));for(let S=1;S<x.x.length;S++)y.lineTo(d(x.x[S]),h(x.y[S]));return y.toString()}else return},[a,e,o,t,n,s,l,i]);return!n||!a?null:_("svg",{viewBox:`0 0 ${n} ${a}`,width:n,height:a,children:[f("defs",{children:f("clipPath",{id:`${r}clip-top`,children:f("rect",{width:n-o.left-o.right,height:a,x:o.left,y:`${0}`})})}),f("g",{clipPath:`url(#${r}clip-top)`,children:f("path",{className:"line",stroke:"red",fill:"none",strokeWidth:"1px",d:u})})]})}var B0=c.exports.memo(j0);const X0=M`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,Y0={right:100,top:0,left:0,bottom:0};function G0(e){const{show:t=!0,label:n="\u03B4 [ppm]",margin:o=Y0}=e,s=H(),{xDomain:i,height:r,width:l,margin:a,tabActiveSpectrum:u,activeTab:d}=s,h=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!t)return;const m=Ae({width:l,margin:a,xDomain:i}),g=$s(m).ticks(8).tickFormat(oi("0"));Do(h.current).call(g)},[d,r,a,a.bottom,a.left,a.right,a.top,t,u,l,i]),!l||!r?null:p(Ve,{children:t&&p("g",{className:"x",css:X0,transform:`translate(0,${r-(a.bottom+o.bottom)})`,ref:h,children:p("text",{fill:"#000",x:l-60,y:"20",dy:"0.71em",textAnchor:"end",children:n})})})}var W0=c.exports.memo(G0);const Z0=M`
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
`,U0={right:50,top:0,bottom:0,left:0};function K0(e){const{show:t=!0,label:n="",margin:o=U0}=e,s=c.exports.useRef(null),i=H(),{yDomain:r,width:l,height:a,activeTab:u,tabActiveSpectrum:d,margin:h}=i;return c.exports.useEffect(()=>{if(!t||!r)return;const m=ye({height:a,yDomain:r,margin:h}),g=Pp(m).ticks(8).tickFormat(oi("0"));Do(s.current).call(g)},[t,r,u,d,a,h]),!l||!a?null:p(Ve,{children:p("g",{className:"y",css:Z0,transform:`translate(${l-o.right})`,ref:s,children:p("text",{fill:"#000",x:-o.top,y:-(o.right-5),dy:"0.71em",transform:"rotate(-90)",textAnchor:"end",children:n})})})}var q0=c.exports.memo(K0);const Hr=M`
  stroke: lightgrey;
  opacity: 0.7;
`;function zr({axis:e,show:t}){const{data:n,activeTab:o,margin:s,width:i,height:r,xDomain:l,yDomain:a,displayerMode:u}=H(),[d,h]=c.exports.useState([]),m=Ae({margin:s,width:i,xDomain:l}),g=ye({margin:s,height:r,yDomain:a});c.exports.useEffect(()=>{const y=o.split(","),S=e==="X"?y[0]:e==="Y"?y[1]:null;if(S!==null){const C=n.filter(E=>E.display.isVisible===!0&&E.info.nucleus===S).filter(kn).map(E=>E.ranges.values).flat().map(E=>E.signals.filter(T=>to.some(R=>T.kind===R)).map(T=>T.delta)).flat();h(C)}else h([])},[o,e,n,u]);const x=c.exports.useMemo(()=>{if(t===!0&&d.length>0)return d.map((S,v)=>e==="X"?p("line",{css:Hr,x1:m(S),x2:m(S),y1:g(a[0]),y2:g(a[1])},`indicationLine${e}${v}`):e==="Y"?p("line",{css:Hr,x1:m(l[0]),x2:m(l[1]),y1:g(S),y2:g(S)},`indicationLine${e}${v}`):null)},[e,d,m,g,t,l,a]);return p("g",{children:x})}const mo=new Rp,pe={on:(e,t)=>mo.on(e,t),once:(e,t)=>mo.once(e,t),off:(e,t)=>mo.off(e,t),emit:(e,t)=>mo.emit(e,t)};Object.freeze(pe);const Wi={assignments:{},activated:null,highlighted:null},Zi=c.exports.createContext({data:Wi,dispatch:()=>null});Zi.Provider;function je(){const e=c.exports.useContext(Zi);if(!e)throw new Error("Assignment context was not found");return e}function dt(e){const{data:{activated:t,highlighted:n,assignments:o},dispatch:s}=je();if(typeof e!="string"&&typeof e!="number"||e==="")throw new Error("assignment key must be a non-empty string or number");const i=String(e),r=c.exports.useMemo(()=>(t==null?void 0:t.id)===i,[t==null?void 0:t.id,i]),l=c.exports.useMemo(()=>(n==null?void 0:n.id)===i,[n==null?void 0:n.id,i]),a=c.exports.useMemo(()=>o[i]||null,[o,i]),u=c.exports.useCallback(x=>{s({type:"REMOVE",payload:{ids:[i],axis:x}})},[s,i]),d=c.exports.useCallback((x,y)=>{s({type:"TOGGLE",payload:{atomIDs:x,id:i,dimension:y}})},[s,i]),h=c.exports.useCallback(x=>{s({type:"SET_ACTIVE",payload:{id:i,axis:x}})},[s,i]),m=c.exports.useCallback(x=>{s({type:"SHOW",payload:{id:i,axis:x}})},[s,i]),g=c.exports.useCallback(()=>{s({type:"HIDE"})},[s]);return{id:i,activated:t,isActive:r,isOver:l,highlighted:n,assigned:a,removeAll:u,toggle:d,setActive:h,show:m,hide:g}}var ue=(e=>(e.PEAK="PEAK",e.INTEGRAL="INTEGRAL",e.SIGNAL="SIGNAL",e.RANGE="RANGE",e.ZONE="ZONE",e.EXCLUSION_ZONE="EXCLUSION_ZONE",e.DATABASE="DATABASE",e.UNKNOWN="UNKNOWN",e))(ue||{});const Qu={highlight:{highlights:{},highlighted:[],highlightedPermanently:[],sourceData:null},dispatch:()=>null,remove:()=>null},ed=c.exports.createContext(Qu);function J0(e,t){switch(t.type){case"SHOW":{const{convertedHighlights:n,sourceData:o}=t.payload,{type:s="UNKNOWN",extra:i=null}=o||{},r=k(b({},e),{highlights:b({},e.highlights),sourceData:{type:s,extra:i}});for(const l of n)l in r.highlights||(r.highlights[l]=1);return r.highlighted=Object.keys(r.highlights),r}case"HIDE":{const{convertedHighlights:n}=t.payload,o=k(b({},e),{highlights:b({},e.highlights),sourceData:null});for(const s of n)s in o.highlights&&delete o.highlights[s];return o.highlighted=Object.keys(o.highlights),o}case"SET_PERMANENT":return k(b({},e),{highlightedPermanently:t.payload});case"UNSET_PERMANENT":return k(b({},e),{highlightedPermanently:[]});default:throw new Error(`unknown action type: ${t.type}`)}}function Q0(e){const[t,n]=c.exports.useReducer(J0,Qu.highlight),o=c.exports.useMemo(()=>{function s(){n({type:"HIDE",payload:{convertedHighlights:t.highlighted}})}return{highlight:t,dispatch:n,remove:s}},[t]);return f(ed.Provider,{value:o,children:e.children})}function Tn(){return c.exports.useContext(ed)}function re(e,t=null){if(!Array.isArray(e))throw new Error("highlights must be an array");const{dispatch:n,highlight:o}=Tn(),s=c.exports.useMemo(()=>{const m=[];for(const g of e){if(typeof g!="string"&&typeof g!="number")throw new Error("highlight key must be a string or number");g!==""&&m.push(String(g))}return m},[e]);c.exports.useEffect(()=>()=>{n({type:"HIDE",payload:{convertedHighlights:[]}}),n({type:"UNSET_PERMANENT"})},[n]);const i=c.exports.useMemo(()=>o.highlighted.some(m=>s.includes(m)),[s,o.highlighted]),r=c.exports.useMemo(()=>o.highlightedPermanently.some(m=>s.includes(m)),[s,o.highlightedPermanently]),l=c.exports.useCallback(()=>{n({type:"SHOW",payload:{convertedHighlights:s,sourceData:t}})},[n,s,t]),a=c.exports.useCallback(()=>{n({type:"HIDE",payload:{convertedHighlights:s}})},[s,n]),u=c.exports.useCallback(m=>{n({type:"SHOW",payload:{convertedHighlights:[],id:m}})},[n]),d=c.exports.useCallback(m=>{n({type:"HIDE",payload:{convertedHighlights:[],id:m}})},[n]),h=c.exports.useCallback(m=>{m&&(m.preventDefault(),m.stopPropagation()),n(r?{type:"UNSET_PERMANENT"}:{type:"SET_PERMANENT",payload:s})},[s,n,r]);return c.exports.useMemo(()=>({isActive:i,onHover:{onMouseEnter:l,onMouseLeave:a},onClick:h,show:l,hide:a,isActivePermanently:r,click:h,add:u,remove:d}),[u,h,a,i,r,d,l])}const td="___";function ke(e,t){return`${e}${td}${t}`}const Vr=M`
  stroke: green;
  stroke-width: 2;
  opacity: 0.5;
`;function jr({delta:e,axis:t,show:n}){const{margin:o,width:s,height:i,xDomain:r,yDomain:l}=H(),a=Ae({margin:o,width:s,xDomain:r}),u=ye({margin:o,height:i,yDomain:l}),d=c.exports.useMemo(()=>n===!0?t==="X"?p("line",{css:Vr,x1:a(e),x2:a(e),y1:u(l[0]),y2:u(l[1])},`signalLine_${e}_X`):t==="Y"?p("line",{css:Vr,x1:a(r[0]),x2:a(r[1]),y1:u(e),y2:u(e)},`signalLine_${e}_Y`):null:null,[t,e,a,u,n,r,l]);return p("g",{children:d})}function ev({signal:e}){var r,l;const t=c.exports.useMemo(()=>[ke(e.id,"Crosshair"),ke(e.id,"Crosshair_X")],[e.id]),n=c.exports.useMemo(()=>[ke(e.id,"Crosshair"),ke(e.id,"Crosshair_Y")],[e.id]),o=re(t),s=re(n),i=re([e.id]);return!((r=e==null?void 0:e.x)!=null&&r.delta)||!((l=e==null?void 0:e.y)!=null&&l.delta)?null:w("g",{children:[p(jr,{delta:e.x.delta,axis:"X",show:o.isActive||i.isActive}),p(jr,{delta:e.y.delta,axis:"Y",show:s.isActive||i.isActive})]})}const tv=c.exports.memo(({signal:e,isVisible:t})=>{const{margin:n,width:o,height:s,xDomain:i,yDomain:r}=H(),l=Ae({margin:n,width:o,xDomain:i}),a=ye({margin:n,height:s,yDomain:r}),u=c.exports.useCallback(y=>[y].concat(ke(y,"X"),ke(y,"Y")),[]),d=dt(e.id),h=re(u(d.id)),m=Tn(),[g,x]=c.exports.useState(!1);return c.exports.useEffect(()=>{m.highlight.highlighted.some(y=>u(e.id).includes(y))||d.isActive?x(!0):x(!1)},[d.isActive,u,m.highlight.highlighted,e.id]),e?w("g",{className:"zone-signal",children:[t.signals&&w("g",{children:[p(ev,{signal:e}),p("circle",{onMouseEnter:()=>{d.show(),h.show()},onMouseLeave:()=>{d.hide(),h.hide()},cx:l(e.x.delta||0),cy:a(e.y.delta||0),r:g?6:4,fill:g?"green":"darkgreen"},e.id)]}),p("g",{className:"zone-signal-peak",style:{pointerEvents:"none"},children:t.peaks&&e.peaks&&e.peaks.map((y,S)=>p("circle",{cx:l(y.x),cy:a(y.y),r:2,fill:"black"},`${e.id+S}`))})]}):null}),nv=M`
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
`,ov=M`
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
`,sv=({zoneData:e,isVisible:t})=>{const{x:n,y:o,id:s,signals:i}=e,r=dt(s),l=re([r.id],{type:ue.ZONE,extra:{id:r.id}}),{margin:a,width:u,height:d,xDomain:h,yDomain:m}=H(),g=Ae({margin:a,width:u,xDomain:h}),x=ye({margin:a,height:d,yDomain:m}),{from:y=0,to:S=0}=n,{from:v=0,to:C=0}=o,[E,T]=c.exports.useState(!1);return c.exports.useEffect(()=>{T(!Zx(e))},[e]),w("g",{css:l.isActive||r.isActive?ov:nv,onMouseEnter:()=>{r.show(),l.show()},onMouseLeave:()=>{r.hide(),l.hide()},children:[t.zones&&p("g",{transform:`translate(${g(S)},${x(v)})`,children:p("rect",{x:"0",width:g(y)-g(S),height:x(C)-x(v),className:"Integral-area",fill:"#0000000f",stroke:E?"#343a40":"darkgreen",strokeWidth:E?"0":"1"})}),i.map((R,I)=>p(tv,{signal:R,isVisible:t},`${s+I}`))]},s)};function iv({zones:e,display:t,displayerKey:n}){const[o,s]=c.exports.useState({zones:!0,signals:!0,peaks:!0});return c.exports.useEffect(()=>{pe.on("onZonesVisibilityChange",({key:i})=>{s(r=>k(b({},r),{[i]:!r[i]}))})},[]),f("g",{clipPath:`url(#${n}clip-chart-2d)`,className:"2D-Zones",children:t.isVisible&&e.values.map(i=>f("g",{className:"zone",children:f(sv,{zoneData:i,isVisible:o})},i.id))})}const rv=c.exports.memo(iv),lv={zones:{},display:{}};function av(){const{displayerKey:e}=H(),{zones:t,display:n}=Se(lv);return f(rv,{zones:t,display:n,displayerKey:e})}function cv({spectra:e,width:t,height:n,margin:o,displayerKey:s}){return _("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-2d`,children:f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top})})}),f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top,stroke:"black",strokeWidth:"1",fill:"transparent"}),(e==null?void 0:e[0])&&f(B0,{data:e[0]}),(e==null?void 0:e[1])&&f(V0,{data:e[1]}),f(H0,{}),f(av,{}),f(zr,{axis:"X",show:!0}),f(zr,{axis:"Y",show:!0}),_("g",{className:"container",style:{pointerEvents:"none"},children:[f(W0,{}),f(q0,{})]})]})}const uv=c.exports.memo(cv);function dv({spectra:e}){const{width:t,height:n,margin:o,displayerKey:s}=H();return f(uv,{spectra:e,width:t,height:n,margin:o,displayerKey:s})}function Ye(e,t,n="",o=""){return n+Vl(e).format(t)+o}function Be(e){const t=le(),n=B(t.current,"formatting.nuclei",{ppm:"0.0",hz:"0.0"});return c.exports.useMemo(()=>{function o(s){return(i,r="ppm",l="",a="")=>l+Vl(Number(i)).format(B(n,`${s.toLowerCase()}.${r}`,"0.0"))+a}if(!e)return()=>{};if(typeof e=="string")return o(e);if(Array.isArray(e))return e.map(s=>o(s));throw Error("nuclus must be string or array of string")},[e,n])}function Br(e){e=String(e).trim();const t=e.lastIndexOf(".");return t>0?e.substr(t).split("").length-1:0}const Xr=M`
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
`;function pv({layout:e,data1D:t}){const n=c.exports.useContext(pt),{startX:o,endX:s,startY:i,endY:r,step:l}=c.exports.useContext(Tt),{margin:a,width:u,height:d,activeSpectrum:h,xDomain:m,yDomain:g,yDomains:x,activeTab:y,data:S,toolOptions:{selectedTool:v}}=H(),C=n&&sn(e,{startX:n.x,startY:n.y}),E=y.split(","),[T,R]=Be(E),I=c.exports.useMemo(()=>{if(!t||t.length===0)return Ae({width:u,margin:a,xDomain:m});if(v!==F.slicingTool.id)switch(C){case K.TOP_1D:case K.CENTER_2D:return Ae({width:u,margin:a,xDomain:m});case K.LEFT_1D:return ye({height:d,margin:a,yDomain:g});default:return null}return null},[t,d,a,v,C,u,m,g]),N=c.exports.useMemo(()=>{if(!t||t.length===0)return ye({height:d,margin:a,yDomain:g});if(v!==F.slicingTool.id)switch(C){case K.CENTER_2D:return ye({height:d,margin:a,yDomain:g});case K.TOP_1D:return t[0]?mn(x[t[0].id],a.top):null;case K.LEFT_1D:return t[1]?mn(x[t[1].id],a.left):null;default:return null}return null},[t,d,a,v,C,g,x]);if(!h||!n||n.y<10||n.x<10||n.x>u-a.right||n.y>d-a.bottom)return p("div",{css:Xr});const A=W=>{let $=null;if(C===K.TOP_1D?$=0:C===K.LEFT_1D&&($=1),$!=null&&I!=null){const j=Cn(t[$]),U=We(j.x,I.invert(W));return j.y[U]}return 1},P=(W=null)=>{if(I!=null)switch(C){case K.CENTER_2D:case K.TOP_1D:return I.invert(W||n.x);case K.LEFT_1D:return I.invert(W||n.y);default:return 0}return 0},D=()=>{if(N!=null)switch(C){case K.CENTER_2D:case K.TOP_1D:return N.invert(n.y);case K.LEFT_1D:return N.invert(n.x);default:return 0}return 0},O=()=>{switch(C){case K.TOP_1D:return(A(o)/(A(s)||Number.MIN_VALUE)*100).toFixed(2);case K.LEFT_1D:return(A(i)/(A(r)||Number.MIN_VALUE)*100).toFixed(2);default:return 0}},L=()=>{switch(C){case K.TOP_1D:return(P(o)-P(s)).toPrecision(6);case K.LEFT_1D:return(P(i)-P(r)).toPrecision(6);default:return 0}},z=(W,$,j)=>C===K.CENTER_2D?w(c.exports.Fragment,{children:[W," ( ",p(si,{mf:j})," )"]}):$,V=()=>{if(C===K.CENTER_2D){const{maxX:W,maxY:$,minX:j,minY:U,z:ee}=S[h.index].data,_e=(W-j)/(ee[0].length-1),gt=($-U)/(ee.length-1),Jt=Math.floor((P()-j)/_e),Qt=Math.floor((D()-U)/gt);return Jt<0||Jt>=ee[0].length||Qt<0||Qt>=ee.length?0:ee[Qt][Jt]}return 0};return w("div",{css:Xr,children:[w("div",{children:[w("span",{className:"label",children:[z("F2","X",E[0])," :"]}),p("span",{className:"value",children:T(P())}),p("span",{className:"unit",children:"ppm"})]}),w("div",{children:[w("span",{className:"label",children:[z("F1","Y",E[1])," :"]}),p("span",{className:"value",children:R(D())}),p("span",{className:"unit",children:"ppm"})]}),w("div",{children:[p("span",{className:"label",children:"Intensity :"}),p("span",{className:"value",children:V()})]}),l==="brushing"&&w("div",{children:[p("span",{className:"label",children:" \u0394ppm :"}),p("span",{className:"value",children:L()})]}),l==="brushing"&&w("div",{children:[p("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[O(),"%"]})]})]})}const hv={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-88px",fontWeight:"bold",pointerEvents:"none",overflow:"visible",userSelect:"none",width:"85px",textAlign:"right"};function fv({layout:e,data1D:t}){const n=c.exports.useContext(pt),{step:o}=c.exports.useContext(Tt),{margin:s,width:i,height:r,xDomain:l,yDomain:a,yDomains:u,activeTab:d,activeSpectrum:h}=H(),m=n&&sn(e,{startX:n.x,startY:n.y}),g=d.split(","),[x,y]=Be(g),S=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return Ae({width:i,margin:s,xDomain:l});switch(m){case K.TOP_1D:case K.CENTER_2D:return Ae({width:i,margin:s,xDomain:l});case K.LEFT_1D:return ye({height:r,margin:s,yDomain:a});default:return null}},[h,t,r,s,m,i,l,a]),v=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return ye({height:r,margin:s,yDomain:a});switch(m){case K.CENTER_2D:return ye({height:r,margin:s,yDomain:a});case K.TOP_1D:return t[0]?mn(u[t[0].id],s.top):null;case K.LEFT_1D:return t[1]?mn(u[t[1].id],s.left):null;default:return null}},[h,t,r,s,m,a,u]);if(o==="brushing"||!n||n.y<s.top||n.x<s.left||n.x>i-s.right||n.y>r-s.bottom)return null;const C=(T=null)=>{switch(m){case K.CENTER_2D:case K.TOP_1D:return S==null?void 0:S.invert(T||n.x);case K.LEFT_1D:return S==null?void 0:S.invert(T||n.y);default:return 0}},E=()=>{switch(m){case K.CENTER_2D:case K.TOP_1D:return v==null?void 0:v.invert(n.y);case K.LEFT_1D:return v==null?void 0:v.invert(n.x);default:return 0}};return _("div",{style:k(b({},hv),{transform:`translate(${n.x}px, ${n.y}px)`}),children:[f("span",{children:y(E())}),f("span",{style:{color:"gray"},children:","}),f("span",{style:{color:"red"},children:x(C())})]},"xLabelPointer")}function nd(e,t,n=10){return Je(yt(t),[e-n,n])}function mv({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,displayerKey:i}=H(),r=uo(An.XAxis),l=o.top,a=c.exports.useMemo(()=>{if(t){const{x:u,re:d}=t,h=Ae({margin:o,width:n,xDomain:s}),m=nd(l,d,e),g=r({x:u,y:d}),x=new Ut;x.moveTo(h(g.x[0]),m(g.y[0]));for(let y=1;y<g.x.length;y++)x.lineTo(h(g.x[y]),m(g.y[y]));return x.toString()}else return},[t,l,e,o,n,s,r]);return!n||!l?null:_("svg",{viewBox:`0 0 ${n} ${l}`,width:n,height:l,children:[f("defs",{children:f("clipPath",{id:`${i}clip-top`,children:f("rect",{width:n-o.left-o.right,height:l,x:o.left,y:`${0}`})})}),_("g",{clipPath:`url(#${i}clip-top)`,children:[f("rect",{width:n-o.left-o.right,height:l,x:o.left,y:`${0}`,fillOpacity:"0"}),f("path",{className:"line",stroke:"red",fill:"none",d:a})]})]})}var gv=c.exports.memo(mv);function xv({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,displayerKey:i}=H(),r=uo(An.YAxis),l=o.left,a=c.exports.useMemo(()=>{if(t){const{x:d,re:h}=t,m=ye({height:n,margin:o,yDomain:s}),g=nd(l,h,e),x=r({x:d,y:h}),y=new Ut;y.moveTo(g(x.y[x.y.length-1]),m(x.x.length-1));for(let S=x.x.length-2;S>=0;S--)y.lineTo(g(x.y[S]),m(x.x[S]));return y.toString()}else return},[t,l,o,e,n,r,s]),u=n-o.bottom-o.top;return!u||!l?null:_("svg",{viewBox:`0 0 ${l} ${u+o.top}`,width:l,height:u+o.top,children:[f("defs",{children:f("clipPath",{id:`${i}clip-left`,children:f("rect",{width:l,height:u,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${i}clip-left)`,children:f("path",{className:"line",stroke:"red",fill:"none",d:a})})]})}var bv=c.exports.memo(xv);function yv(){const{width:e,height:t,margin:n,activeSpectrum:o,data:s,xDomain:i,yDomain:r}=H(),l=Of(),a=c.exports.useMemo(()=>{if(l&&o&&o.id){const{x:u,y:d}=l,h=Ae({margin:n,width:e,xDomain:i}),m=ye({margin:n,height:t,yDomain:r}),g=_g(s[o.index],{x:h.invert(u),y:m.invert(d)});return _("svg",{viewBox:`0 0 ${e} ${t}`,width:e,height:t,style:{position:"absolute",backgroundColor:"rgba(255,255,255,0.8)"},children:[(g==null?void 0:g.horizontal)&&f(gv,{data:g.horizontal.data}),(g==null?void 0:g.vertical)&&f(bv,{data:g.vertical.data})]})}return null},[l,o,n,e,i,t,r,s]);return l?a:null}function vv({emptyText:e=void 0}){const t=H(),{toolOptions:{selectedTool:n},isLoading:o,data:s,margin:i,tabActiveSpectrum:r,activeTab:l}=t,a=X(),{info:u}=Se({info:{}}),d=u.isFt||!("isFt"in u),h=c.exports.useMemo(()=>l.split(",").reduce((C,E)=>{var T,R;if((T=r[E])!=null&&T.id){const I=(R=r[E])==null?void 0:R.id,N=s.find(A=>A.id===I&&!A.info.isFid);N&&C.push(N)}else C.push(null);return C},[]),[l,s,r]),m=Ux(t),g=c.exports.useCallback(v=>{if(sn(m,v)&&!v.altKey)if(v.shiftKey)switch(n){case F.zone2D.id:a(b({type:Kc},v));break}else switch(n){default:if(n!=null)return a(k(b({type:us},v),{trackID:sn(m,v)}))}},[n,a,m]),x=c.exports.useCallback(v=>{const{x:C,y:E}=v,T=sn(m,{startX:C,startY:E});T&&a({type:xn,trackID:T})},[m,a]),y=v=>{const{x:C,y:E}=v,T=sn(m,{startX:C,startY:E});T&&a(T==="CENTER_2D"?b({type:Uc},v):{type:cs,event:v,trackID:T})},S=c.exports.useCallback(v=>{},[n]);return d?f(ii,{children:({width:v,height:C})=>_(od,{width:v,height:C,children:[f(Gu,{isLoading:o,emptyText:e}),s&&s.length>0&&f(la,{onBrush:g,onDoubleClick:x,onClick:S,onZoom:y,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:_(aa,{style:{width:"100%",height:"100%",position:"absolute"},children:[n&&n===F.slicingTool.id&&f(yv,{}),f(Wu,{}),h&&f(fv,{data1D:h,layout:m}),f(Eo,{brushType:Ie.XY,dimensionBorder:m.CENTER_2D}),_(et,{children:[(h==null?void 0:h[0])&&f(Eo,{brushType:Ie.X,dimensionBorder:m.TOP_1D,height:i.top}),(h==null?void 0:h[1])&&f(Eo,{brushType:Ie.Y,dimensionBorder:m.LEFT_1D,width:i.left})]}),h&&f(pv,{data1D:h,layout:m}),f(dv,{spectra:h})]})})]})}):f(Bu,{emptyText:"Currently FID can not be displayed for 2D spectra",canOpenLoader:!1})}function od(e){const t=X(),{width:n,height:o,children:s}=e;return c.exports.useEffect(()=>{t({type:Pi,width:n,height:o})},[n,o,t]),s}const Cv="SET_X_SCALE",Sv="SET_Y_SCALE",sd="SET_SCALE",id={scaleX:null,scaleY:null};function kv(e,t){switch(t.type){case Cv:e.scaleX=(n=null)=>Xt(t,n);break;case Sv:e.scaleY=(n=null)=>Fo(t,n);break;case sd:{e.scaleX=(n=null)=>Xt(t.payload,n),e.scaleY=(n=null)=>Fo(t.payload,n);break}default:return e}}const wv=ni(kv),rd=c.exports.createContext(id),Ev=rd.Provider;function Ui(){return c.exports.useContext(rd)}function ge(){const e=Ui();if(!e.scaleX||!e.scaleY)throw new Error("scale cannot be null");return e}const ne={TOP_LEFT:"top left",TOP_CENTER:"top center",TOP_RIGHT:"top right",MIDDLE_LEFT:"middle left",MIDDLE:"middle",MIDDLE_RIGHT:"middle right",BOTTOM_LEFT:"bottom left",BOTTOM_CENTER:"bottom center",BOTTOM_RIGHT:"bottom right"},_n={INFO:"info",SUCCESS:"success",ERROR:"error",PROGRESS_INDICATOR:"progress_indicator"},Qe={FADE:"fade",SCALE:"scale",SLIDE_RIGHT:"slide_right",SLIDE_LEFT:"slide_left",SLIDE_TOP:"slide_top",SLIDE_BOTTOM:"slide_bottom"},ld=c.exports.createContext({}),Av=ld.Provider;function se(){return c.exports.useContext(ld)}const qs=250,Tv={[Qe.FADE]:{transition:`opacity ${qs}ms ease`,opacity:0},[Qe.SCALE]:{transform:"scale(1)",transition:`all ${qs}ms ease-in-out`}},Dv={[Qe.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Qe.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(1)"}}};function ad(s){var i=s,{children:e,type:t,transitionStyles:n=Dv}=i,o=G(i,["children","type","transitionStyles"]);const r=c.exports.useRef(null);return f(Np,k(b({nodeRef:r},o),{timeout:qs,children:l=>f("div",{ref:r,style:b(b(b({},Tv[t]),n[t][l]),n.default),children:e})}))}function Iv(e,t){const n=b({position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",pointerEvents:"none",overflow:"visible"},t?{top:`${t.top}px`,left:`${t.left}px`,height:`${t.height}px`,width:`${t.width}px`}:{width:"100%",height:"100%"});switch(e){case ne.TOP_LEFT:return k(b({},n),{justifyContent:"flex-start",alignItems:"flex-start"});case ne.TOP_CENTER:return k(b({},n),{justifyContent:"flex-start"});case ne.TOP_RIGHT:return k(b({},n),{justifyContent:"flex-start",alignItems:"flex-end"});case ne.MIDDLE_LEFT:return k(b({},n),{justifyContent:"center",alignItems:"flex-start"});case ne.MIDDLE:return k(b({},n),{justifyContent:"center"});case ne.MIDDLE_RIGHT:return k(b({},n),{justifyContent:"center",alignItems:"flex-end"});case ne.BOTTOM_LEFT:return k(b({},n),{justifyContent:"flex-end",alignItems:"flex-start"});case ne.BOTTOM_CENTER:return k(b({},n),{justifyContent:"flex-end"});case ne.BOTTOM_RIGHT:return k(b({},n),{justifyContent:"flex-end",alignItems:"flex-end"});default:return n}}function cd(s){var i=s,{children:e,options:{position:t},containerStyle:n}=i,o=G(i,["children","options","containerStyle"]);const r=c.exports.useMemo(()=>Iv(t,n),[t,n]);return e.length>0&&f("div",k(b({style:r},o),{children:e}))}function Pv(e,t){return e.reduce((n,o)=>{const s=t(o);return n[s]||(n[s]=[]),n[s].push(o),n},{})}const Rv=M`
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
`;function Nv(){return p("div",{css:Rv})}function Mv(a){var u=a,{children:e,wrapperRef:t=null,offset:n="5px",position:o=ne.BOTTOM_CENTER,timeout:s=3e3,type:i,transition:r=Qe.FADE}=u,l=G(u,["children","wrapperRef","offset","position","timeout","type","transition"]);const d=c.exports.useRef(null),h=c.exports.useRef([]),[m,g]=c.exports.useState([]);c.exports.useEffect(()=>{d.current=document.createElement("div");const A=d.current,P=h.current;return t&&t.appendChild(A),()=>{A&&t&&(P.forEach(clearTimeout),t.removeChild(A))}},[t]);const x=c.exports.useCallback(A=>{g(P=>{const D=P.length,O=P.filter(L=>L.id!==A.id);return D>O.length&&A.options.onClose&&A.options.onClose(),O})},[]),y=c.exports.useCallback((A="",P={})=>{const D=Math.random().toString(36).substr(2,9),O=b({position:P.position||o,timeout:s,type:i,backgroundColor:"black",color:"white"},P),L={id:D,message:A,options:O};if(L.close=()=>x(L),L.options.timeout){const z=setTimeout(()=>{x(L),h.current.splice(h.current.indexOf(z),1)},L.options.timeout);h.current.push(z)}return g(z=>z.concat(L)),L.options.onOpen&&L.options.onOpen(),L},[o,x,s,i]),S=c.exports.useCallback((A="",P={})=>(P.type=_n.SUCCESS,P=b({backgroundColor:"#28ba62",color:"white"},P),y(A,P)),[y]),v=c.exports.useCallback((A="",P={})=>(P.type=_n.ERROR,P=b({backgroundColor:"#cf3c4f",color:"white"},P),y(A,P)),[y]),C=c.exports.useCallback((A="",P={})=>(P.type=_n.INFO,P.color="#28ba62",y(A,P)),[y]),E=c.exports.useCallback((A="Process in progress",P={})=>(P.type=_n.PROGRESS_INDICATOR,P.timeout=0,P.backgroundColor="#232323",new Promise(D=>{const O=y(A,P);setTimeout(()=>{D(()=>x(O))},500)})),[x,y]),T=c.exports.useCallback(A=>{x(A)},[x]),R=Pv(m,A=>A.options.position),I=c.exports.useMemo(()=>t?t.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[t]),N=c.exports.useMemo(()=>({show:y,success:S,error:v,info:C,showLoading:E}),[y,S,v,C,E]);return _(Av,{value:N,children:[e,d.current&&qo.exports.createPortal(f(c.exports.Fragment,{children:Object.keys(ne).map(A=>{const P=ne[A];return f(jl,k(b({appear:!0,options:{position:P,zIndex:999999},component:cd,containerStyle:I},l),{children:R[P]?R[P].map(D=>f(ad,{type:r,children:_("div",{style:{margin:n,padding:"25px",borderRadius:"10px",pointerEvents:"all",backgroundColor:D.options.backgroundColor,color:D.options.color,minHeight:"60px",position:"relative"},children:[f("button",{style:{position:"absolute",right:"5px",top:"5px",border:"none",backgroundColor:"transparent",color:"white"},type:"button",onClick:()=>T(D),children:f(ri,{})}),f("span",{children:D.message}),D.options.type===_n.PROGRESS_INDICATOR&&f(Nv,{})]},D.id)},D.id)):null}),P)})}),d.current)]})}var _v=c.exports.memo(Mv);const ud=c.exports.createContext({}),Fv=ud.Provider;function fe(){return c.exports.useContext(ud)}const Lv=M`
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
`;function Ov({style:e={},buttons:t=[],onClose:n,message:o}){const s=c.exports.useCallback((i,{handler:r=()=>null})=>{r(i),n()},[n]);return w("div",{style:e,css:Lv,children:[p("p",{className:"message",children:o}),p("div",{className:"buttons-container",children:t.map(i=>p("button",{type:"button",onClick:r=>s(r,i),style:i.style&&i.style,children:i.text},i.text))})]})}const $v=({modal:e,onClose:t,onLayout:n})=>{const o=c.exports.useRef(),[s,{width:i,height:r}]=Mp(()=>f("div",{style:{height:"100%",display:"block",overflow:"auto"},children:c.exports.cloneElement(e.component,k(b({},e.options),{onClose:t,style:{cursor:"default"}}))}));return c.exports.useEffect(()=>{isFinite(r)&&isFinite(i)&&!o.current&&(o.current={width:i,height:r},n({modal:e,layout:{width:i,height:r}}))},[i,r,o,n,e]),s},Hv={[Qe.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Qe.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(0)"}}};function zv({children:e,style:t=void 0,offset:n="0px",position:o=ne.MIDDLE,transition:s=Qe.SCALE,wrapperRef:i=null}){const r=c.exports.useRef(),l=c.exports.useRef(),[a,u]=c.exports.useState();c.exports.useEffect(()=>{r.current=document.createElement("div");const C=r.current;return i&&i.appendChild(C),()=>{C&&i&&i.removeChild(C)}},[i]);const d=c.exports.useCallback(function(){u(null)},[u]),h=c.exports.useMemo(()=>i?i.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[i]),m=c.exports.useCallback((C,E={})=>{const T={component:C,options:b({isBackgroundBlur:!0,enableResizing:!1},E)};return T.close=d,u(T),T.options.onOpen&&T.options.onOpen(),T},[d]),g=c.exports.useCallback((C,E={enableResizing:!1})=>{const T={component:p(Ov,b({},C)),options:b({isBackgroundBlur:!0},E)};return T.close=d,u(T),T.options.onOpen&&T.options.onOpen(),T},[d]);c.exports.useEffect(()=>{function C(E){["Escape","Esc"].includes(E.key)&&d()}return document.addEventListener("keydown",C,!1),()=>document.removeEventListener("keydown",C,!1)},[d]);const x=M`
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
  `,y=a!=null&&a.options.isBackgroundBlur?{backgroundColor:"rgba(255,255,255,0.8)"}:{pointerEvents:"none"},S=c.exports.useMemo(()=>({show:m,close:d,showConfirmDialog:g}),[m,d,g]),v=c.exports.useCallback(({modal:C,layout:E})=>{const T=C.options.width?C.options.width:E.width>h.width?h.width:E.width,R=C.options.height?C.options.height:E.height>h.height?h.height:E.height;l.current.updateSize({width:T,height:R})},[h.height,h.width]);return w(Fv,{value:S,children:[e,r.current&&qo.exports.createPortal(p(c.exports.Fragment,{children:a?p("div",{css:x,style:b({},y),children:p(jl,{appear:!0,options:{position:a.options.position?a.options.position:o},containerStyle:h,component:cd,children:p(ad,{type:a.options.transition?a.options.transition:s,transitionStyles:k(b({},Hv),{default:{width:a.options.width?`${a.options.width}px`:"auto"},height:a.options.height?`${a.options.height}px`:"auto"}),children:p(_p,{maxWidth:h.width,maxHeight:h.height,ref:l,default:{width:a.options.width?a.options.width:"auto",height:a.options.height?a.options.height:"auto",x:0,y:0},className:"rnd-container",style:k(b({},t),{margin:n,position:"static",pointerEvents:"all",userSelect:"none"}),enableResizing:a.options.enableResizing,dragHandleClassName:"handle",enableUserSelectHack:!1,children:p($v,{modal:a,onClose:d,onLayout:v})})},a.id)},ne[a.options.transition?a.options.transition:s])}):null}),r.current)]})}const dd=c.exports.createContext({rootRef:null,elementsWrapperRef:null}),Vv=dd.Provider;function gs(){return c.exports.useContext(dd)}const jv={popup:{position:"fixed",top:0,left:0,pointerEvents:"none",backgroundColor:"gray",padding:"3px",borderRadius:"2px",color:"white",whiteSpace:"nowrap",fontSize:"10px",fontFamily:"tahoma",textShadow:"none"}};function Bv({style:e={popup:{},mainContainer:{}},className:t="",popupPlacement:n="right",children:o,title:s,offset:i={x:0,y:0}}){const r=c.exports.useRef(null),l=c.exports.useRef(null),[a,u]=c.exports.useState({x:0,y:0}),[d,h]=c.exports.useState(!1),{elementsWrapperRef:m}=gs();c.exports.useLayoutEffect(()=>{const y=()=>{let S,v;if(r.current===null||l.current===null)return null;const C=r.current.getBoundingClientRect(),E=l.current.getBoundingClientRect();switch(n){case"left":S=-E.width,v=C.height/2-C.height/2*E.height/C.height;break;case"right":S=C.width,v=C.height/2-C.height/2*E.height/C.height;break;case"top":S=C.width/2-C.width/2*E.width/C.width,v=-C.height;break;case"bottom":S=C.width/2-C.width/2*E.width/C.width,v=C.height;break;default:S=0,v=0;break}return{x:S+C.x,y:v+C.y}};if(d){const S=y();S&&u(S)}},[n,d]);const g=c.exports.useCallback(()=>{h(!0)},[]),x=c.exports.useCallback(()=>{h(!1)},[]);return _(c.exports.Fragment,{children:[f("div",{style:b({position:"relative",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},e.mainContainer),ref:r,onMouseOver:g,onMouseOut:x,children:o}),d&&m&&qo.exports.createPortal(f("div",{ref:l,style:b(k(b({},jv.popup),{transform:`translate(${a.x+i.x}px,${a.y+i.y}px)`,zIndex:999999999}),e.popup),className:t,children:f("span",{style:{pointerEvents:"none"},children:s})}),m)]})}var Ee=c.exports.memo(Bv);const Yr={button:{backgroundColor:"transparent",border:"none",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},svg:{fill:"#ca0000",fontSize:"16px"}};function Xv(e){const{onClick:t=()=>null,popupTitle:n="Close",popupPlacement:o="left",className:s=""}=e;return f("div",{className:s,children:f(Ee,{title:n,popupPlacement:o,children:f("button",{style:Yr.button,type:"button",onClick:t,children:f(ri,{style:Yr.svg})})})})}var me=c.exports.memo(Xv);const Yv=M`
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
`,Gv=M`
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
`;function Wv({data:e,activeSpectrum:t,scaleX:n,startX:o,endX:s,onClose:i}){var m;const[r,l]=c.exports.useState(),[a,u]=c.exports.useState(!1),[d,h]=c.exports.useState(!1);return c.exports.useEffect(()=>{setTimeout(()=>{u(!0)},400)},[]),c.exports.useEffect(()=>{if(t&&o&&s&&a){const g=e[t.index];if(Gs(g))throw new Error("unreachable");const{data:{x,re:y},info:S}=g,v=n().invert(o),C=n().invert(s),{fromIndex:E,toIndex:T}=Jn(x,{from:v,to:C}),R={x:x.slice(E,T),y:y.slice(E,T)};try{const I=Ml(R,{frequency:S.originFrequency,takeBestPartMultiplet:!0,symmetrizeEachStep:!0,debug:!0});h(!0),l(I)}catch(I){console.log(I)}}},[o,s,e,n,t,a]),d?w("div",{css:Yv,children:[w("div",{className:"header handle",children:[p("span",{children:"Analyse Multiplet"}),p(me,{onClick:i})]}),p("div",{className:"container",children:(m=r==null?void 0:r.debug)==null?void 0:m.steps.map((g,x)=>{var y,S;return w("div",{className:"row",children:[w(dn,{width:400,height:200,svgStyle:{overflow:"visible"},seriesViewportStyle:{stroke:"black"},children:[p(qe,{data:br(g.multiplet)}),p($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),p($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]}),p("div",{className:"multiplicity",children:p("p",{children:r.js[x]?`${(y=r.js[x])==null?void 0:y.multiplicity}: ${(S=r.js[x])==null?void 0:S.coupling.toFixed(3)} Hz`:""})}),w(dn,{width:400,height:200,seriesViewportStyle:{stroke:"black"},children:[p(qe,{data:br(g.errorFunction),lineStyle:{strokeWidth:1}}),p($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),p($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]})]},x)})})]}):w("div",{css:Gv,children:[p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[p("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),p("path",{d:"M520.5 78.1z"})]})}),p("p",{children:"Analyse Multiplet in progress. Please wait ..."})]})}function pd(){const{data:e,activeTab:t}=H();return c.exports.useMemo(()=>e?e.filter(n=>t===It(n.info.nucleus))||[]:[],[t,e])}function hd(e){const{activeSpectrum:t}=H(),n=le();return c.exports.useMemo(()=>{const o=t===null?!0:e===t.id,s=o?1:B(n.current,"controllers.dimmedSpectraTransparency",.1);return{isActive:o,opacity:s}},[t,e,n])}function Zv({zone:e,color:t,vAlign:n,spectrumID:o}){const{scaleX:s,scaleY:i}=ge(),r=re([e.id],{type:ue.EXCLUSION_ZONE,extra:{id:e.id,spectrumID:o}}),{opacity:l}=hd(o);return f("g",{transform:`translate(${s()(e.to)},0)`,children:f("rect",b({x:"0",transform:`translate(0,${i()(0)-(n+5)})`,width:`${s()(e.from)-s()(e.to)}`,height:"10px",style:{fill:r.isActive?"#ff6f0057":t,opacity:l}},r.onHover))},e.id)}var Uv=c.exports.memo(Zv);function xs(e,t){const{index:n=1,align:o="stack"}=t||{index:1,align:"stack"};return e.align===o?n*e.verticalShift:0}function Kv({displayerKey:e,xDomains:t,spectra:n,verticalAlign:o}){return f("g",{className:"spectrum-exclusion-zones-group",clipPath:`url(#${e}clip-chart-1d)`,children:n.filter(s=>s.display.isVisible===!0&&t[s.id]).map((s,i)=>Qv(s).map(r=>f(Uv,{spectrumID:s.id,vAlign:xs(o,{index:i}),zone:r,color:s.display.color},r.id)))})}const qv=c.exports.memo(Kv);function Jv(){const{displayerKey:e,xDomains:t,displayerMode:n,verticalAlign:o}=H(),s=pd();return n!==Y.DM_1D?null:f(qv,{spectra:s,displayerKey:e,xDomains:t,verticalAlign:o})}function Qv(e){var t;return((t=e.filters.find(n=>n.name===no&&n.flag))==null?void 0:t.value)||[]}function e1(){const{width:e,margin:t,xDomains:n,xDomain:o,mode:s}=H();return c.exports.useMemo(()=>Xt({width:e,margin:t,xDomains:n,xDomain:o,mode:s}),[t,s,e,o,n])}function t1(){const{height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}=H();return c.exports.useMemo(()=>kx({height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}),[o,e,s,t,n])}function fd(e){const{data:t,activeSpectrum:n}=H(),o=e1(),s=t1(),i=c.exports.useMemo(()=>{if(n){const{x:l,re:a}=t[n==null?void 0:n.index].data,{from:u,to:d}=e;return Fp({x:l,y:a},{from:u,to:d,reverse:!0})}return{x:[],y:[]}},[n,t,e]);return c.exports.useMemo(()=>{if(i){const l=zl(i,{nbPoints:200,optimize:!0}),a=new Ut;a.moveTo(o(l.x[0]),s(l.y[0]));for(let u=1;u<l.x.length;u++)a.lineTo(o(l.x[u]),s(l.y[u]));return a.toString()}else return""},[i,o,s])}const Ot={showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",color:"#000000",strokeWidth:1},n1={showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00"},Ki=e=>({showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",jGraphTolerance:e==="1H"?.2:e==="13C"?2:0}),md={showPeakNumber:!0,peakNumberFormat:"0",showPeakIndex:!1,peakIndexFormat:"0.00",showDeltaPPM:!0,deltaPPMFormat:"0.00",showDeltaHz:!1,deltaHzFormat:"0.00",showPeakWidth:!1,peakWidthFormat:"00.0000",showIntensity:!0,intensityFormat:"0.00"},gd={showSmiles:!0,showSolvent:!1,showNames:!0,showRange:!1,showDelta:!0,showAssignment:!1,showCoupling:!0,showMultiplicity:!0};function Yo(e){const{x:t,anchor:n}=e,o=c.exports.useRef(!1),s=c.exports.useRef({relativeX:t,x:t}),[i,r]=c.exports.useState({x:t,action:null});return c.exports.useEffect(()=>{s.current={relativeX:t,x:t},r({x:t,action:null})},[t]),{onMouseDown:c.exports.useCallback(a=>{r({x:s.current.x,action:"start"}),s.current.relativeX=a.clientX-s.current.relativeX,o.current=!0,a.stopPropagation();function u(h){if(h.stopPropagation(),o.current){const m=h.clientX-s.current.relativeX;s.current={relativeX:m,x:m},r({x:m,action:"end"}),o.current=!1}window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",u)}function d(h){h.stopPropagation(),o.current&&r({x:h.clientX-s.current.relativeX,action:"move"})}window.addEventListener("mousemove",d),window.addEventListener("mouseup",u)},[]),position:i,previousPosition:s.current.x,isActive:o.current,anchor:n}}const Gr={marginLeft:"5px",width:"2px",height:"100%",pointerEvents:"none",position:"relative"},Ds={container:e=>M`
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
        `])}};function o1(e){const{children:t,initialPosition:n={x1:10,x2:40},onStart:o,onMove:s,onEnd:i}=e,r=Yo({x:n.x2,anchor:"RIGHT"}),l=Yo({x:n.x1,anchor:"LEFT"}),a=l.isActive?l.anchor:r.isActive?r.anchor:"";return c.exports.useEffect(()=>{const u={x1:l.position.x,x2:r.position.x};switch(l.isActive?l.position.action:r.isActive?r.position.action:""){case"start":o==null||o(u);break;case"move":s==null||s(u);break;case"end":i==null||i(u);break}},[l,i,s,o,r]),w(Ve,{children:[p("div",{"data-no-export":"true",onMouseDown:r.onMouseDown,css:Ds.container(r.position.x),children:p("div",{style:Gr})}),p("div",{css:Ds.content(a,l,r),children:typeof t=="function"?t==null?void 0:t(l.position.x,r.position.x):t}),p("div",{"data-no-export":"true",onMouseDown:l.onMouseDown,css:Ds.container(l.position.x),children:p("div",{style:Gr})})]})}const s1={width:"2px",height:"100%",pointerEvents:"none",fill:"transparent"},Wr={container:e=>M`
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
  `};function i1(e){const{children:t,initialPosition:n={x1:10,x2:40},onStart:o,onMove:s,onEnd:i}=e,r=Yo({x:n.x2,anchor:"RIGHT"}),l=Yo({x:n.x1,anchor:"LEFT"});return c.exports.useEffect(()=>{const a={x1:l.position.x,x2:r.position.x};switch(l.isActive?l.position.action:r.isActive?r.position.action:""){case"start":o==null||o(a);break;case"move":s==null||s(a);break;case"end":i==null||i(a);break}},[l,i,s,o,r]),w("g",{style:{transform:`translateX(${l.position.x}px)`},children:[typeof t=="function"?t(l.position.x,r.position.x):t,p(Zr,{onMouseDown:l.onMouseDown,position:0}),p(Zr,{onMouseDown:r.onMouseDown,position:r.position.x-l.position.x})]})}function Zr(e){return w("g",{onMouseDown:e.onMouseDown,css:Wr.container(e.position),"data-no-export":"true",children:[p("rect",{x:"-5px",css:Wr.innerContainer}),p("rect",{x:"-2.5px",style:s1})]})}function qi(e){const o=e,{tag:t="div"}=o,n=G(o,["tag"]);return t==="div"?f(o1,b({},n)):f(i1,b({},n))}const r1=M`
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
`,l1=M`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  fill: #ff6f0057;

  .target {
    visibility: visible;
  }
`;function a1({integralData:e}){const{height:t,margin:n}=H(),{scaleX:o}=ge(),s=X(),{id:i,from:r,to:l,integral:a}=e,u=re([i],{type:ue.INTEGRAL,extra:{id:i}}),d=c.exports.useCallback(y=>{s({type:Ac,payload:{data:k(b({},e),{from:o().invert(y.x2),to:o().invert(y.x1)})}})},[s,e,o]),h=c.exports.useCallback(()=>{u.show()},[u]),m=c.exports.useCallback(()=>{u.hide()},[u]),g=r?o()(r):0,x=l?o()(l):0;return p("g",{css:u.isActive?l1:r1,onMouseEnter:h,onMouseLeave:m,children:p(qi,{tag:"svg",initialPosition:{x1:x,x2:g},onEnd:d,children:(y,S)=>w("g",{children:[p("rect",{x:"0",y:"0",width:S-y,height:t-n.bottom,className:"highlight","data-no-export":"true"}),p("text",{x:0,y:t-n.bottom+30,fill:"black",style:{fontSize:"12px",fontWeight:"bold"},children:a!==void 0?a.toFixed(2):""})]})})})}function c1({integral:e,isActive:t}){const n=le(),o=fd(e),s=c.exports.useMemo(()=>{let{color:i=Ot.color,strokeWidth:r=Ot.strokeWidth}=ft(n.current,"formatting.panels.integrals")||{};return{color:i,strokeWidth:r}},[n]);return _("g",{children:[f("path",{className:"line",stroke:s.color,strokeWidth:s.strokeWidth,fill:"none",style:{opacity:t?1:.2},d:o}),f(a1,{integralData:e})]})}function u1(){const{xDomains:e,activeSpectrum:t,data:n,displayerKey:o}=H(),s=c.exports.useMemo(()=>{const i=r=>t===null?!0:r===t.id;return f("g",{className:"integrals",children:(n==null?void 0:n[0])&&n.filter(r=>r.display.isVisible===!0&&e[r.id]).filter(kn).map(r=>r.integrals.values.map(l=>f(c1,{integral:l,isActive:i(r.id)},l.id)))})},[t,n,e]);return f("g",{clipPath:`url(#${o}clip-chart-1d)`,children:s})}function d1({data:e,id:t,display:n,index:o}){const{verticalAlign:s}=H(),{scaleX:i,scaleY:r}=ge(),l=uo(An.XAxis),{opacity:a}=hd(t),u=c.exports.useMemo(()=>xs(s,{index:o}),[o,s]),d=c.exports.useMemo(()=>{const h=i(),m=r(t),g=new Ut;if((e==null?void 0:e.x)&&(e==null?void 0:e.y)&&h(0)){const x=l(e);g.moveTo(h(x.x[0]),m(x.y[0]));for(let y=1;y<x.x.length;y++)g.lineTo(h(x.x[y]),m(x.y[y]));return g.toString()}else return""},[i,r,t,e,l]);return f("path",{className:"line","data-test-id":"spectrum-line",stroke:n.color,fill:"none",style:{opacity:a},d,transform:`translate(0,-${u})`},t)}function p1(){const{data:e,tempData:t,displayerKey:n,xDomains:o}=H(),s=t||e;return f("g",{clipPath:`url(#${n}clip-chart-1d)`,className:"spectrums",children:s==null?void 0:s.filter(i=>i.display.isVisible===!0&&o[i.id]).map((i,r)=>f(d1,k(b({},i),{data:Cn(i),index:r}),i.id))})}const h1=M`
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
`;function f1({id:e,x:t,y:n,sign:o,value:s,color:i,isActive:r,nucleus:l}){const a=c.exports.useRef(null),[u,d]=c.exports.useState(!1),[h,m]=c.exports.useState(s),[g,x]=c.exports.useState({width:0,height:0}),y=Be(l),S=re([e],{type:ue.PEAK,extra:{id:e}}),v=X(),C=c.exports.useCallback(D=>v({type:Di,shiftValue:D.shiftValue}),[v]);c.exports.useLayoutEffect(()=>{var O;const D=(O=a.current)==null?void 0:O.getBBox();x({width:(D==null?void 0:D.width)||0,height:(D==null?void 0:D.height)||0})},[u]),c.exports.useEffect(()=>{m(s)},[s]);const E=c.exports.useCallback(D=>{if(D.key==="Enter"){const O=D.currentTarget.valueAsNumber;if(!isNaN(O)){const L=O-s;C({id:e,value:O,oldValue:s,shiftValue:L}),D.currentTarget.blur(),d(!1)}}else D.key==="Escape"&&(m(s),D.currentTarget.blur(),d(!1))},[s,C,e]),T=c.exports.useCallback(D=>{m(D.target.value)},[]),R=c.exports.useCallback(D=>(D.stopPropagation(),d(!0),!1),[]),I=c.exports.useCallback(()=>{S.show()},[S]),N=c.exports.useCallback(()=>{S.hide()},[S]),A=c.exports.useMemo(()=>u?s:y(s),[y,u,s]),P=c.exports.useMemo(()=>u?h:y(h),[h,y,u]);return w("g",{css:h1,id:e,style:{outline:"none"},transform:`translate(${t}, ${n})`,onMouseEnter:I,onMouseLeave:N,children:[p("line",{x1:"0",x2:"0",y1:o===-1?10:0,y2:o===-1?28:-18,stroke:i,strokeWidth:S.isActive?"7px":"1px"}),p("text",{ref:a,className:"peaks-text",x:"0",y:o===-1?28:-12,dy:"0",dx:"0.35em",fill:"transparent",fontSize:"10px",fontWeight:"100",style:{position:"absolute"},children:A}),p("foreignObject",{x:"0",y:o===-1?16:-22,dy:"0.1em",dx:"0.35em",width:g.width+20,height:"40px","data-no-export":"true",children:p("div",{style:{width:g.width+20,height:"100%",paddingRight:5},children:p("input",{onClick:R,className:u?"input-over":"notification-input-normal",style:{width:"inherit",border:u?`1px solid ${i}`:"0",opacity:r?1:.2,userSelect:"none",color:i},value:P,onKeyDown:E,onChange:T,type:"number",disabled:!r})})})]})}function m1(){const{data:e,activeSpectrum:t,verticalAlign:n,displayerKey:o,xDomains:s}=H(),{scaleX:i,scaleY:r}=ge(),l=c.exports.useMemo(()=>{const a=d=>{const h=e.findIndex(m=>m.id===d);return xs(n,{index:h})};return e&&(()=>{const d=[...e];return t?d.sort((h,m)=>h.id===t.id?1:m.id===t.id?-1:0):d})().filter(d=>d.display.isVisible===!0&&s[d.id]).filter(kn).map(d=>{var h;return((h=d.peaks)==null?void 0:h.values)&&d.display.isPeaksMarkersVisible&&f("g",{transform:`translate(0,-${a(d.id)})`,children:d.peaks.values.map(({x:m,y:g,id:x})=>f(f1,{x:i()(m),y:r(d.id)(g)-5,sign:Math.sign(g),id:x,value:m,color:"#730000",nucleus:d.info.nucleus,isActive:t==null?!1:t.id===d.id},x))},d.id)})},[e,n,t,s,i,r]);return f("g",{className:"peaks",clipPath:`url(#${o}clip-chart-1d)`,children:l})}const g1={info:{originFrequency:400}};function x1(){var x;const{displayerKey:e,verticalAlign:t,height:n,margin:o}=H(),{info:s}=Se(g1),{highlight:i}=Tn(),{scaleX:r}=ge();if(((x=i.sourceData)==null?void 0:x.type)!==ue.DATABASE)return null;const l=n-o.bottom,a=l/4,{ranges:u}=i.sourceData.extra||[];let d=[0,0];const h=u.map(y=>{const{from:S,to:v}=y,C=Math.abs(S-v)/2,E=S-C,T=v+C,R=Ll([y],{frequency:s.originFrequency,from:E,to:T,nbPoints:256}),I=yt(R.y);return d[0]=I[0]<d[0]?I[0]:d[0],d[1]=I[1]>d[1]?I[1]:d[1],{data:R,from:E,to:T}},[]),m=Fo({height:a,margin:{top:0,bottom:0},verticalAlign:t,yDomain:d}),g=h.map(({data:{x:y,y:S},from:v,to:C})=>{let E=`M ${r()(y[0])} ${m(S[0])} `;return E+=y.slice(1).reduce((T,R,I)=>(T+=` L ${r()(R)} ${m(S[I+1])}`,T),""),{path:E,from:v,to:C}},[]);return f("g",{clipPath:`url(#${e}clip-chart-1d)`,className:"resurrected-database-ranges",width:"100%",height:"100%",children:g.map(({path:y,from:S,to:v},C)=>_("g",{children:[f("g",{transform:`translate(${r()(v)},0)`,children:f("rect",{x:"0",width:Math.abs(r()(v)-r()(S)),height:"100%",fill:"#ff6f0057"})}),f("path",{transform:`translate(0,${l-a*2})`,stroke:"black",fill:"none",d:y})]},`${C}`))})}const b1=M`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,y1=M`
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
`;function v1(e){const{show:t=!0,showGrid:n=!1,mode:o,label:s}=e,{xDomain:i,height:r,width:l,margin:a}=H(),{scaleX:u}=Ui(),d=c.exports.useRef(null),h=c.exports.useRef(null),m=s||(o==="RTL"?"\u03B4 [ppm]":"time [s]");return c.exports.useEffect(()=>{if(!t||!u)return;const g=$s(u().domain(i)).ticks(8).tickFormat(oi("0")),x=$s(u().domain(i)).ticks(50).tickSize(-(r-a.top-a.bottom)).tickFormat(()=>"");Do(d.current).call(g),Do(h.current).call(x)},[r,a.bottom,a.top,u,t,i]),!l||!r||!u?null:w(Ve,{children:[t&&p("g",{className:"x",css:b1,transform:`translate(0,${r-a.bottom})`,ref:d,children:p("text",{fill:"#000",x:l-10,y:"30",dy:"0.70em",textAnchor:"end",children:m})}),n&&p("g",{css:y1,className:"grid",ref:h,transform:`translate(0,${r-a.bottom})`})]})}function C1(e,t){if(!e&&!Array.isArray(e))return null;let n=[],o=0,s=w1(e,t);for(const r of e)for(const l of r.signals){const i=l,{id:a}=i,u=G(i,["id"]);if(u.js){n.push(b({id:`${r.id}${a}`},u));const d=S1(u.js);o=d>o?d:o}}return{signals:n,jCouplingMax:o,links:s}}function S1(e){let t=-1/0;for(const{coupling:n}of e)t=n>t?n:t;return t}function k1(e){const t=[];for(let n of e)for(const{delta:o,js:s}of n.signals)for(const{coupling:i}of s||[])t.push({coupling:i,delta:o});return t}function Ur(e){const{delta:t}=e;return{id:q(),from:t,to:t,couplings:[e]}}function w1(e,t=0){const n=k1(e).sort((l,a)=>l.coupling-a.coupling);if(!n||n.length===0)return[];const o=[Ur(n[0])];let s=0,i=s,r=1;for(;r<n.length;){const l=n[r];Math.abs(n[i].coupling-l.coupling)<t?(o[s].couplings.push(l),l.delta>o[s].to?o[s].to=l.delta:l.delta<o[s].from&&(o[s].from=l.delta),r++):Math.abs(n[r-1].coupling-l.coupling)<t?i=r-1:(s++,o[s]=Ur(n[r]),i=r,r=r+1)}return o}const xd=c.exports.createContext({scaleY:null,height:0,maxValue:0}),E1=xd.Provider;function bs(){const e=c.exports.useContext(xd);if(!e.scaleY)throw new Error("scale cannot be null");return e}const A1=c.exports.forwardRef((e,t)=>{const{x:n,y:o,height:s,showGrid:i,ticks:r}=e;return _("g",{ref:t,transform:`translate(${n}, ${o})`,children:[f("line",{y2:s,x1:15,x2:15,stroke:"black"}),r.map(({label:l,position:a},u)=>_("g",{children:[i&&e.width&&f("line",{y1:a,y2:a,x1:15,x2:e.width-n,stroke:"lightgray"}),f("line",{y1:a,y2:a,x1:15,x2:10,stroke:"black"}),f("text",{y:a,dominantBaseline:"middle",textAnchor:"end",children:l})]},u+l+a))]})});function T1(e){const i=e,{scale:t}=i,n=G(i,["scale"]),o=c.exports.useRef(null),s=Lp(t,"vertical",o);return f(A1,k(b({},n),{ticks:s,ref:o}))}function D1(){const{width:e,margin:t}=H(),{height:n,scaleY:o}=bs();return o?f("svg",{style:{overflow:"visible"},height:n+20,width:60,children:f(T1,{x:20,y:0,scale:o,height:n,showGrid:!0,width:e-t.right})}):null}function I1(e){const{links:t}=e,{scaleX:n}=ge(),{scaleY:o,maxValue:s}=bs(),i=c.exports.useCallback(r=>{if(!o)return"";const{from:l,to:a,couplings:u}=r;let d=[];for(const h of u)d.push(`M${n()(l)},${o(h.coupling)} L${n()(a)},${o(h.coupling)}`);return d.join(" ")},[n,o]);return f("g",{className:"js-coupling-links",children:t.filter(r=>r.couplings.length>1).map(r=>f("path",{d:i(r),style:{stroke:`hsl(${r.couplings[0].coupling*360/s},100%,50%)`},strokeWidth:"1"},r.id))})}function P1({value:e}){const{scaleY:t,maxValue:n}=bs(),[o,s]=c.exports.useState(!1);return t?_("g",{className:"coupling",style:{transform:`translate(0px,${t(e)}px)`},children:[f("circle",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),cx:0,cy:0,r:4,fill:`hsl(${e*360/n},100%,${o?45:50}%)`,pointerEvents:"all"}),o&&_("g",{style:{transform:"translate(0px,15px)"},children:[f("text",{pointerEvents:"none",stroke:"white",strokeWidth:"0.6em",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`}),f("text",{pointerEvents:"none",stroke:"black",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`})]})]}):null}function R1(e){const{scaleX:t}=ge(),{height:n}=bs();return f("g",{className:"js-coupling",children:e.signals.map(o=>{var s;return _("g",{transform:`translate(${t()(o.delta)},0)`,children:[f("line",{x1:"0",y1:n,x2:"0",y2:"0",stroke:"black",strokeWidth:"1"}),(s=o.js)==null?void 0:s.map(i=>f(P1,{value:i.coupling},`${i.coupling}`))]},o.id)})})}const N1=50;function M1(e){const{signals:t,links:n}=e;return _("g",{className:"j-graph",transform:`translate(0,${N1})`,children:[f(D1,{}),f(I1,{links:n}),f(R1,{signals:t})]})}const _1={ranges:{}},F1=c.exports.memo(M1);function L1(){const e=le(),{height:t,toolOptions:{data:{showJGraph:n}},activeTab:o}=H(),s=t/4,{ranges:i}=Se(_1),r=c.exports.useMemo(()=>(B(e.current,`formatting.panels.ranges.[${o}]`)||Ki(o)).jGraphTolerance,[o,e]),{signals:l,jCouplingMax:a,links:u}=c.exports.useMemo(()=>C1(i.values,r)||{signals:[],jCouplingMax:0,links:[]},[r,i.values]),d=c.exports.useMemo(()=>{const m=a+a*.1;return Je().range([s,0]).domain([0,m])},[s,a]),h=c.exports.useMemo(()=>({scaleY:d,height:s,maxValue:a}),[s,d,a]);return n?f(E1,{value:h,children:f(F1,{signals:l,links:u})}):null}function bd(e){const{x:t="initial",y:n="initial",onDelete:o=()=>null,fill:s="#c81121"}=e;return _("svg",{className:"delete-button",x:t,y:n,onClick:o,"data-no-export":"true",children:[f("rect",{rx:"5",width:"16",height:"16",fill:s}),f("line",{x1:"5",x2:"10",y1:"8",y2:"8",stroke:"white",strokeWidth:"2"})]})}const Is={common:M`
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
  `};function O1({rangeData:e,columnKey:t}){const{from:n,to:o}=e,s=re([t]),{scaleX:i}=ge(),r=X(),l=c.exports.useCallback(()=>{r({type:ji,colKey:t})},[t,r]),a=c.exports.useCallback(u=>{r({type:cu,payload:k(b(b({},e),u),{columnKey:t})})},[t,r,e]);return p("g",k(b({},s.onHover),{css:[Is.common,s.isActive?Is.Highlighted:Is.hover],children:p(qi,{tag:"svg",onEnd:a,initialPosition:{x2:i()(n),x1:i()(o)},children:(u,d)=>w(Ve,{children:[w("g",{transform:"translate(0,25)",children:[p("rect",{x:"0",width:d-u,height:"6",className:"range-area",fill:"green"}),p("text",{textAnchor:"middle",x:(d-u)/2,y:"-5",fontSize:"12",fill:"red",fontWeight:"bolder",fillOpacity:s.isActive?1:.6,children:t})]}),p(bd,{x:-20,y:10,onDelete:l})]})})}))}function $1({activeTab:e,spectraAnalysis:t,displayerKey:n}){const o=c.exports.useMemo(()=>{const{options:{columns:i}}=t[e]||{options:{columns:{}}};return i},[e,t]),s=c.exports.useMemo(()=>Object.keys(o).map(i=>i,[]),[o]);return!s||s.length===0?null:f("g",{clipPath:`url(#${n}clip-chart-1d)`,children:s.map(i=>f(O1,{columnKey:i,rangeData:o[i]},i))})}const H1=c.exports.memo($1);function z1(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=H();return f(H1,{activeTab:e,spectraAnalysis:t,displayerKey:n})}function Ji(e,t){return t.filter(n=>Object.keys(e.data).filter(o=>o===n))}const Kn=[{label:"massive (m)",value:"m",multiplicity:null},{label:"singlet (s)",value:"s",multiplicity:1},{label:"doublet (d)",value:"d",multiplicity:2},{label:"triplet (t)",value:"t",multiplicity:3},{label:"quartet (q)",value:"q",multiplicity:4},{label:"quintet (i)",value:"i",multiplicity:5},{label:"sextet (x)",value:"x",multiplicity:6},{label:"septet (p)",value:"p",multiplicity:7},{label:"octet (o)",value:"o",multiplicity:8},{label:"nonet (n)",value:"n",multiplicity:9}];function V1(e){const t=Kn.find(n=>e===n.label||e===n.value);return t?t.multiplicity:null}function j1(e,t=[]){if(e===void 0||e.length===0)return!1;const n=Kn.find(o=>o.value===e||o.label===e);return n&&!t.includes(n.value)&&!t.includes(n.label)}function Qi(e,t=[]){return e===void 0||e.length===0?!1:!e.split("").find(n=>!j1(n,t))}function Vt(e){var t,n;return e.length===1?(t=Kn.find(o=>o.value===e))==null?void 0:t.label:(n=Kn.find(o=>o.label===e))==null?void 0:n.value}function qn(e){return e.length>1&&(e=Vt(e)),Qi(e,["m","s"])}function B1(e,t){if(e===void 0||e===0||t===void 0)return[1];let n=2*t+1,o=[];for(let s=0;s<n-1;s++)o.push(1);for(let s=0;s<e-1;s++){let i=o.slice();for(let r=1;r<n;r++){for(let l=0;l<o.length-1;l++)i[l+r]+=o[l];i.push(1)}o=i.slice()}return o}const Js=["red","green","blue","magenta"];function Kr({signal:e,startY:t,levelHeight:n}){const{scaleX:o}=ge();return f("line",{x1:o()(e.delta),y1:t,x2:o()(e.delta),y2:t+n,stroke:Js[0]},`startLevelNode_${e.id}`)}function qr({signal:e,startY:t,levelHeight:n,fontSize:o,showLabels:s}){const{scaleX:i}=ge();return f("text",{textAnchor:"middle",x:i()(e.delta),y:t+n/2,fontSize:o,lengthAdjust:"spacing",fill:"black",visibility:s?"visible":"hidden",children:e.multiplicity},`multiplicityString_${e.id}`)}function X1({nodesData:e,levelHeight:t,startY:n,signalID:o,labelOptions:s,showLabels:i}){const{scaleX:r}=ge(),l=c.exports.useCallback(({startX:a,_startX:u,ratio:d,multiplicityIndex:h,color:m})=>{const g=2*h+2,x=n+g*t,y=n+(g+1)*t;return _("g",{children:[f("text",{textAnchor:"middle",x:r()(u)+s.distance,y:y+2*(t/3),fontSize:s.fontSize,fill:m,visibility:i?"visible":"hidden",children:d}),f("line",{x1:r()(a),y1:x,x2:r()(u),y2:y,stroke:m}),f("line",{x1:r()(u),y1:y,x2:r()(u),y2:y+t,stroke:m})]},`${h}_${o}_${a}_${u}_${d}`)},[o,s.distance,s.fontSize,r,i,n,t]);return f(et,{children:e==null?void 0:e.map(a=>l(a))})}function Y1(e,t){function n(o,s,i,r){var h;if(!e.multiplicity)return null;if(o>=e.multiplicity.length)return i;const l=Js[o%Js.length],a=s.findIndex(m=>m===o),u=B(t,"info.originFrequency",0),d=a>=0&&u>0&&((h=e==null?void 0:e.js)==null?void 0:h[a])?e.js[a].coupling/u:null;if(!d)i.push({startX:r,_startX:r,ratio:1,multiplicityIndex:o,color:l}),n(o+1,s,i,r);else{const m=e.multiplicity||"",g=B1(V1(m.charAt(o)),.5);let x=g.length%2===0?r-g.length/2*d+d/2:r-(g.length/2-.5)*d;g.forEach((y,S)=>{S>0&&(x+=d),i.push({startX:r,_startX:x,ratio:y,multiplicityIndex:o,color:l}),n(o+1,s,i,x)})}return i}return n}const Jr={cursor:"default",opacity:.6,strokeWidth:1};function Qr(e){var t;return[e.id].concat(((t=e.assigned)==null?void 0:t.x)||[])}function yd({rangeFrom:e,rangeTo:t,signal:n,labelOptions:o={distance:10,fontSize:11}}){const{scaleX:s,scaleY:i}=ge(),{data:r,activeSpectrum:l,toolOptions:{selectedTool:a},width:u}=H(),d=dt(n.id),h=re(Qr(d),{type:ue.SIGNAL,extra:Qr(d)}),m=c.exports.useMemo(()=>B(r,`${l==null?void 0:l.index}`,null),[l,r]),[g,x]=c.exports.useState({x1:n.delta,x2:n.delta}),[y,S]=c.exports.useState({width:0,height:0,levelHeight:0}),[v,C]=c.exports.useState(!1),[E,T]=c.exports.useState(!1);c.exports.useEffect(()=>{var z;const A=!Qi(n.multiplicity,["m"]),P=A?Math.abs(s()(g.x1)-s()(g.x2)):Math.abs(s()(g.x1)-s()(g.x2))+o.distance,D=A?P/3:P/2,O=((z=n==null?void 0:n.multiplicity)==null?void 0:z.length)||0,L=A?D/(O+2):D/(2*O+2);S({width:P,height:D,levelHeight:L}),C(A)},[o.distance,s,n.multiplicity,g.x1,g.x2]),c.exports.useEffect(()=>{y.width/u>=.1?T(!0):T(!1)},[y.width,u]);const R=c.exports.useMemo(()=>{let A;return m.data.x.forEach((P,D)=>{P>=e&&P<=t&&(!A||m.data.re[D]>A)&&(A=m.data.re[D])}),i(m.id)(A)-y.height-30},[m.data.x,m.data.re,m.id,i,y.height,e,t]),I=c.exports.useMemo(()=>{if(n.multiplicity){const A=Y1(n,m),P=n.multiplicity.split("").map((D,O)=>qn(D)?O:void 0).filter(D=>D!==void 0);return A(0,P,[],n.delta)}return[]},[n,m]);c.exports.useEffect(()=>{if(v)x({x1:e,x2:t});else{const A={x1:n.delta,x2:n.delta};I.forEach(P=>{P.startX<A.x1&&(A.x1=P.startX),P.startX>A.x2&&(A.x2=P.startX),P._startX<A.x1&&(A.x1=P._startX),P._startX>A.x2&&(A.x2=P._startX)}),x(A)}},[v,e,t,n.delta,n.multiplicity,I]);const N=c.exports.useMemo(()=>{const{levelHeight:A}=y,P=R;let D=P;const O=R+A;if(D=O,D+=A,v){const L=s()(e),z=s()(t),V=`M ${L} ${D+A} ${L} ${D} ${s()(n.delta)} ${D} ${z} ${D} ${z} ${D+A}`;return w("g",{children:[p(qr,{signal:n,startY:P,levelHeight:A,fontSize:o.fontSize,showLabels:E}),p(Kr,{signal:n,startY:O,levelHeight:A}),p("path",{d:V,stroke:"blue",fill:"none"})]})}return w("g",{children:[p(qr,{signal:n,startY:P,levelHeight:A,fontSize:o.fontSize,showLabels:E}),p(Kr,{signal:n,startY:O,levelHeight:A}),p(X1,{nodesData:I,signalID:I,showLabels:E,startY:R,labelOptions:o,levelHeight:A})]})},[y,R,v,n,o,E,I,s,e,t]);return p("g",{css:h.isActive||d.isActive?k(b({},Jr),{opacity:1,strokeWidth:1.5}):Jr,onMouseEnter:()=>{d.show("x"),h.show()},onMouseLeave:()=>{d.hide(),h.hide()},onClick:a&&a===F.editRange.id?()=>null:A=>{A.shiftKey&&(A.stopPropagation(),d.setActive("x"))},children:N})}function G1({range:e}){return(e==null?void 0:e.signals)&&e.signals.length>0&&e.signals.map(t=>f(yd,{rangeFrom:e.from,rangeTo:e.to,signal:t},t.id))}const W1=c.exports.memo(G1);function Z1(){const{toolOptions:{data:{tempRange:e}}}=H();return f(W1,{range:e})}const U1=M`
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
`,K1=M`
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
`;function q1({rangeData:e,showMultiplicityTrees:t,selectedTool:n,startEditMode:o}){var I;const{id:s,from:i,to:r,integration:l,signals:a}=e,u=je(),d=dt(s),h=re([d.id].concat(((I=d.assigned)==null?void 0:I.x)||[]).concat(Ji(u,a.map(N=>N.id))),{type:ue.RANGE,extra:{id:s}}),{scaleX:m}=ge(),g=X(),[x,y]=c.exports.useState(!1),[S,v]=c.exports.useState(!1);c.exports.useEffect(()=>{n&&n===F.editRange.id?v(!0):v(!1)},[n]),c.exports.useEffect(()=>{y(!Ba(e))},[e]);const C=c.exports.useCallback(N=>{g({type:Gc,data:k(b({},e),{from:m().invert(N.x2),to:m().invert(N.x1)})})},[g,e,m]),E=c.exports.useCallback(()=>{d.show("x"),h.show()},[d,h]),T=c.exports.useCallback(()=>{d.hide(),h.hide()},[d,h]),R=c.exports.useCallback(N=>{n===F.rangesPicking.id&&N.shiftKey&&!S&&d.setActive("x")},[d,S,n]);return w("g",{"data-test-id":"range",style:{outline:"none"},css:S||h.isActive||d.isActive?K1:U1,onMouseEnter:E,onMouseLeave:T,onClick:R,children:[p(qi,{tag:"svg",initialPosition:{x1:m()(r),x2:m()(i)},onEnd:C,children:(N,A)=>w("g",{transform:"translate(0,10)",children:[p("rect",{"data-no-export":"true",x:"0",width:A-N,height:"6",className:"range-area",fill:"green",fillOpacity:!x||h.isActive||d.isActive?1:.4}),p("text",{textAnchor:"middle",x:(A-N)/2,y:"20",fontSize:"10",fill:"red",fillOpacity:!x||h.isActive||d.isActive?1:.6,children:l!==void 0?l.toFixed(2):""})]})}),o?p(Z1,{}):t&&a&&a.length>0&&a.map(N=>p(yd,{rangeFrom:i,rangeTo:r,signal:N},N.id))]},s)}function J1({range:e}){const t=fd(e);return f("path",{className:"line",stroke:"black",strokeWidth:"1",fill:"none",d:t})}function Q1({ranges:e,displayerKey:t,selectedTool:n,editRangeID:o,showMultiplicityTrees:s,showRangesIntegrals:i}){var r;return f("g",{clipPath:`url(#${t}clip-chart-1d)`,children:(r=e==null?void 0:e.values)==null?void 0:r.map(l=>_(c.exports.Fragment,{children:[f(q1,{rangeData:l,selectedTool:n,showMultiplicityTrees:s,startEditMode:!!(o&&o===l.id)}),i&&f(J1,{range:l})]},l.id))})}const eC=c.exports.memo(Q1),tC={ranges:{}};function nC(){const{displayerKey:e,toolOptions:{selectedTool:t,data:{tempRange:n,showMultiplicityTrees:o,showRangesIntegrals:s}}}=H(),{ranges:i}=Se(tC);return f(eC,{ranges:i,showMultiplicityTrees:o,showRangesIntegrals:s,selectedTool:t,displayerKey:e,editRangeID:(n==null?void 0:n.id)||""})}const oC=M`
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
`;function sC(){const{toolOptions:e}=H(),{scaleX:t}=ge(),n=X(),o=c.exports.useCallback(i=>{n({type:Xc,id:i})},[n]),s=c.exports.useMemo(()=>e.data.baseLineZones,[e]);return p(Ve,{children:s.length>0&&p("g",{children:s.map(i=>w("g",{transform:`translate(${t()(i.to)},0)`,css:oC,children:[p(bd,{x:-20,y:10,onDelete:()=>o(i.id)}),p("rect",{x:"0",width:`${t()(i.from)-t()(i.to)}`,className:"zone-area"})]},i.id))})})}function iC({mode:e,width:t,height:n,margin:o,displayerKey:s}){return _("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-1d`,children:f("rect",{width:`${t-o.left-o.right}`,height:`${n}`,x:`${o.left}`,y:`${0}`})})}),f(p1,{}),f(u1,{}),f(m1,{}),f(nC,{}),f(L1,{}),f(z1,{}),f(sC,{}),f(Jv,{}),f(x1,{}),f("g",{className:"container",style:{pointerEvents:"none"},children:f(v1,{showGrid:!0,mode:e})})]})}const el=M`
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
`;function rC({margin:e,width:t,height:n,activeSpectrum:o,spectrum:s,activeTab:i}){var g,x,y,S;let r=c.exports.useContext(pt);const{startX:l,endX:a,step:u}=c.exports.useContext(Tt),{scaleX:d}=ge(),h=Be(i),m=c.exports.useCallback(v=>{if(s){const C=Cn(s),E=We(C.x,d().invert(v));return C.y[E]}return 1},[s,d]);return!r||r.y<e.top||r.x<e.left||r.x>t-e.right||r.y>n-e.bottom?p("div",{css:el}):w("div",{css:el,children:[p(Op,{}),w("div",{children:[p("span",{className:"label",children:" \u{1D6C5}: "}),p("span",{className:"value",children:h(d().invert(r.x))}),p("span",{className:"unit",children:"ppm"}),o&&((g=s==null?void 0:s.info)==null?void 0:g.originFrequency)&&w(Ve,{children:[w("span",{className:"value",children:["\xA0(",h(d().invert(r.x)*((x=s==null?void 0:s.info)==null?void 0:x.originFrequency),"hz")]}),p("span",{className:"unit",children:"Hz"}),p("span",{className:"value",children:") "})]})]}),u==="brushing"&&w("div",{children:[p("span",{className:"label",children:" \u0394ppm: "}),p("span",{className:"value",children:(d().invert(l)-d().invert(a)).toPrecision(6)})]}),o&&w(c.exports.Fragment,{children:[((y=s==null?void 0:s.info)==null?void 0:y.originFrequency)&&u==="brushing"&&w("div",{children:[p("span",{className:"label",children:" \u0394Hz: "}),p("span",{className:"value",children:((d().invert(l)-d().invert(a))*((S=s==null?void 0:s.info)==null?void 0:S.originFrequency)).toPrecision(5)})]}),u==="brushing"&&w("div",{children:[p("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[(m(l)/(m(a)||Number.MIN_VALUE)*100).toFixed(2),"%"]})]})]}),o&&w(c.exports.Fragment,{children:[p("div",{className:"separator"}),p($p,{}),w("div",{children:[p("span",{className:"label",children:"Intensity: "}),p("span",{className:"value yvalue",children:h(m(r.x))})]})]})]})}const lC=c.exports.memo(rC);function aC(){const{margin:e,width:t,height:n,activeSpectrum:o,activeTab:s}=H(),i=Se(null);return p(lC,{margin:e,width:t,height:n,activeSpectrum:o,spectrum:i,activeTab:s})}const Ao={container:{position:"absolute",left:"10px",top:"10px"},value:{width:"67px",display:"inline-block",margin:"0 5px",fontSize:"12px"},colorIndicator:{width:"10px",height:"1px",borderBottom:"2px solid",display:"inline-block",marginBottom:"3px"},name:{fontSize:"12px"}};function cC({datum:e}){const{scaleX:t}=Ui(),n=c.exports.useContext(pt);if(!t||!n)return null;const o=We(e.x,t().invert(n.x));return f("span",{style:Ao.value,children:e.y[o]})}function uC(){const{data:e,activeTab:t,xDomains:n}=H(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{function r(l){s(l)}return pe.on("showYSpectraTrackers",r),()=>{pe.off("showYSpectraTrackers",r)}},[]);const i=c.exports.useMemo(()=>o&&e.map(r=>r.display.isVisible&&n[r.id]&&r.info.nucleus===t&&_("div",{style:{display:"block"},children:[f("span",{style:k(b({},Ao.colorIndicator),{borderColor:r.display.color})}),f(cC,{datum:Cn(r)}),f("span",{style:Ao.value,children:r.display.name})]},r.id),[]),[t,e,o,n]);return o?f("div",{style:Ao.container,children:i}):null}const J={radius:10,borderColor:"#1f1f1f",strokeWidth:1,fillOpacity:0,SVGPadding:1};function dC(){const{height:e,width:t,margin:n,activeSpectrum:o,data:s,mode:i,toolOptions:{selectedTool:r},verticalAlign:l}=H(),{scaleX:a,scaleY:u}=ge();let d=c.exports.useContext(pt);const h=c.exports.useContext(Tt),[m,g]=c.exports.useState();return c.exports.useEffect(()=>{const x=o?xs(l,{index:(o==null?void 0:o.index)||1,align:"center"}):0,S=((v,C)=>{if(o&&d&&r===F.peakPicking.id){const E=[a().invert(C.x-v),a().invert(C.x+v)].sort((P,D)=>P-D),T=s.find(P=>P.id===o.id);if(!T)throw new Error("Unreachable");const R=Cn(T),I=R.x.findIndex(P=>P>=E[1])-1,N=R.x.findIndex(P=>P>=E[0]),A=R.y.slice(N,I);if(A&&A.length>0){const P=Ol(A),D=A.findIndex(L=>L===P),O=R.x[N+D];return{x:a()(O),y:u(o.id)(P)-x,xIndex:N+D}}}return null})(10,d);g(S)},[o,s,i,d,a,u,r,l]),r!==F.peakPicking.id||!m||!o||h.step==="brushing"||!d||d.y<n.top||d.left<n.left||d.x>t-n.right||d.y>e-n.bottom?null:f("div",{style:{cursor:"crosshair",transform:`translate(${m.x}px, ${m.y}px)`,transformOrigin:"top left",position:"absolute",top:-(J.radius+J.SVGPadding),left:-(J.radius+J.SVGPadding),pointerEvents:"none",overflow:"visible"},children:_("svg",{width:J.radius*2+J.SVGPadding*2,height:J.radius*2+J.SVGPadding*2,children:[f("circle",{cx:J.radius+J.SVGPadding,cy:J.radius+J.SVGPadding,r:J.radius,stroke:J.borderColor,strokeWidth:J.strokeWidth,fillOpacity:J.fillOpacity}),f("line",{x1:J.radius+J.SVGPadding,y1:J.SVGPadding,x2:J.radius+J.SVGPadding,y2:J.radius*2+J.SVGPadding,stroke:J.borderColor,strokeWidth:J.strokeWidth}),f("line",{x1:J.SVGPadding,y1:J.radius+J.SVGPadding,x2:J.radius*2+J.SVGPadding,y2:J.radius+J.SVGPadding,stroke:J.borderColor,strokeWidth:J.strokeWidth})]})},"peakPointer")}const pC={transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",width:1,backgroundColor:"red"};function hC(){const{height:e,toolOptions:{selectedTool:t,data:{pivot:n}}}=H(),{scaleX:o}=ge();return F.phaseCorrection.id!==t?null:f("div",{style:k(b({},pC),{transform:`translate(${o()(n.value)}px, 0px)`,height:e})})}const fC={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-30px",pointerEvents:"none",overflow:"visible",userSelect:"none"};function mC(){const{height:e,width:t,margin:n,data:o,activeSpectrum:s}=H(),{scaleX:i}=ge(),r=c.exports.useContext(pt),l=c.exports.useContext(Tt),a=c.exports.useMemo(()=>s?o.find(m=>m.id===s.id):null,[s,o]),u=Be(a==null?void 0:a.info.nucleus),d=c.exports.useCallback(h=>{if(a){const m=i().invert(h);return u(m)}},[a,u,i]);return!s||l.step==="brushing"||!r||r.y<n.top||r.x<n.left||r.x>t-n.right||r.y>e-n.bottom?null:f("div",{style:k(b({},fC),{transform:`translate(${r.x}px, ${r.y}px)`}),children:f("span",{children:d(r.x)})},"xLabelPointer")}function gC({emptyText:e=void 0}){const{current:{display:{general:t}}}=le(),n=H(),{toolOptions:{selectedTool:o},isLoading:s,data:i,mode:r,width:l,height:a,margin:u,activeSpectrum:d,xDomain:h,xDomains:m,yDomain:g,yDomains:x,verticalAlign:y,displayerKey:S}=n,v=X(),C=fe(),E=se(),[T,R]=c.exports.useReducer(wv,id);c.exports.useEffect(()=>{h.length>0&&g.length>0&&l&&a&&R({type:sd,payload:{yDomain:g,yDomains:x,xDomain:h,xDomains:m,margin:u,height:a,width:l,verticalAlign:y,mode:r}})},[a,u,r,y,l,h,m,g,x]);const I=c.exports.useCallback(D=>{const O=()=>{if(!T.scaleX||!T.scaleY)return;const{startX:L,endX:z}=D,V=T.scaleX().invert(L),W=T.scaleX().invert(z);pe.emit("brushEnd",k(b({},D),{range:[V,W].sort(($,j)=>$-j)}))};if(D.altKey)switch(o){case F.rangesPicking.id:{t!=null&&t.disableMultipletAnalysis||C.show(f(Wv,b({data:i,activeSpectrum:d,scaleX:T.scaleX},D)),{onClose:()=>{C.close()}});break}}else if(D.shiftKey)switch(o){case F.integral.id:v(b({type:vc},D));break;case F.rangesPicking.id:{const[L,z]=Zt(n,{startX:D.startX,endX:D.endX});if(!d)break;const{data:{x:V}}=n.data[d.index],{fromIndex:W,toIndex:$}=Jn(V,{from:L,to:z});$-W<=Po?v({type:Zc,payload:b({},D)}):E.error(`Advanced peak picking only available for area up to ${Po} points`);break}case F.multipleSpectraAnalysis.id:v(b({type:au},D));break;case F.peakPicking.id:v(b({type:fc},D));break;case F.baseLineCorrection.id:v({type:Bc,zone:{from:D.startX,to:D.endX}});break;case F.exclusionZones.id:v({type:vu,payload:{from:D.startX,to:D.endX}});break;default:O();break}else switch(o){default:o!=null&&v(b({type:us},D));break}},[T,o,t==null?void 0:t.disableMultipletAnalysis,C,i,d,v,n,E]),N=c.exports.useCallback(()=>{v({type:xn,zoomType:Bn.STEP_HORIZONTAL})},[v]),A=c.exports.useCallback(D=>{v({type:cs,event:D,selectedTool:o})},[v,o]),P=c.exports.useCallback(D=>{const O=()=>{if(!T.scaleX)return;const L=T.scaleX().invert(D.x);pe.emit("mouseClick",k(b({},D),{xPPM:L}))};if(D.shiftKey)switch(o){case F.peakPicking.id:v({type:hc,mouseCoordinates:D});break;case F.editRange.id:O();break}else switch(o){case F.phaseCorrection.id:v({type:$i,position:D.x});break}},[v,T,o]);return f(Ev,{value:T,children:f(ii,{children:({height:D,width:O})=>f(od,{height:D,width:O,children:_("div",{style:{height:"100%",position:"relative"},children:[f(Gu,{isLoading:s,emptyText:e}),T.scaleX&&T.scaleY&&i&&i.length>0&&f(la,{onBrush:I,onDoubleClick:N,onClick:P,onZoom:A,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:_(aa,{style:{width:"100%",height:"100%",position:"absolute"},children:[f(uC,{}),f(Wu,{}),f(Eo,{brushType:Ie.X}),f(mC,{}),f(dC,{}),f(hC,{}),f(aC,{}),f(iC,{width:l,height:a,margin:u,mode:r,displayerKey:S})]})})]})})})})}const go={container:{margin:"25px"},header:{backgroundColor:"#ffffff",padding:"20px",borderRadius:"10px",fontSize:"30px",textAlign:"center"},title:{textDecoration:"underline"},body:{marginTop:"10px",whiteSpace:"pre-wrap",backgroundColor:"white",padding:"20px",borderRadius:"10px",color:"red"}};function xC(e){return _("div",{style:go.container,children:[f("p",{style:go.header,children:"Something went wrong."}),_("details",{style:go.body,children:[f("p",{style:go.title,children:e.error.message}),e.error.stack]})]})}const bC={success:{base:"#2dd36f",shade:"#28ba62",tint:"#42d77d"},danger:{base:"#eb445a",shade:"#cf3c4f",tint:"#ed576b"},warning:{base:"#ffc409",shade:"#e0ac08",tint:"#ffca22"},medium:{base:"#92949c",shade:"#808289",tint:"#9d9fa6"},light:{base:"#f4f5f8",shade:"#d7d8da",tint:"#f5f6f9"}},yC={xSmall:{fontSize:"0.75rem",padding:"0.15rem 0.3rem",borderRadius:"0.15rem"},small:{fontSize:"0.8rem",padding:"0.25rem 0.5rem",borderRadius:"0.2rem"},medium:{fontSize:"1rem",padding:"0.375rem 0.75rem",borderRadius:"0.25rem"},large:{fontSize:"1.25rem",padding:"0.5rem 1rem",borderRadius:"0.3rem"}};function vC(e){const{borderColor:t,fill:n,backgroundColor:o,color:s}=e;switch(n){case"solid":return M`
        border-color: transparent;
        background-color: ${o.base};
        color: ${s.hover};
      `;case"outline":return M`
        border-style: solid;
        border-color: ${o.base};
        background-color: transparent;
        color: ${s.base};
      `;case"clear":return M`
        border-color: transparent;
        background-color: transparent;
        color: ${s.base};
      `;default:return M`
        background-color: ${o.base};
        color: ${s.base};
        border-color: ${t};
      `}}const CC={button:e=>{const{size:t,backgroundColor:n,color:o,borderRadius:s}=e,i=M`
      display: flex;
      flex-direction: row;
      border-width: 1px;
      align-items: center;
    `,r=vC(e),l=M`
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
    `;return M([i,yC[t],r,l,{borderRadius:s}])}},de=e=>{const d=e,{onClick:t,size:n="small",color:o={base:"black",hover:"white"},backgroundColor:s={base:"white",hover:"black",active:"black"},borderColor:i="transparent",fill:r,borderRadius:l,style:a={}}=d,u=G(d,["onClick","size","color","backgroundColor","borderColor","fill","borderRadius","style"]);return p("button",k(b({type:"button",onClick:t,css:[CC.button({size:n,backgroundColor:s,color:o,borderColor:i,fill:r,borderRadius:l}),a]},u),{children:w("span",{style:{flex:1},children:[" ",e.children]})}))};function er(e){const d=e,{colorTheme:t}=d,n=G(d,["colorTheme"]),{base:o,shade:s,tint:i}=bC[e.colorTheme],h=n,{color:r={base:s,hover:"white"},backgroundColor:l={base:o,hover:s,active:i},fill:a="solid"}=h,u=G(h,["color","backgroundColor","fill"]);return p(de,k(b({fill:a},u),{backgroundColor:l,color:r}))}de.Done=e=>p(er,k(b({},e),{colorTheme:"success"}));de.Danger=e=>p(er,k(b({},e),{colorTheme:"danger"}));de.Action=e=>p(er,k(b({},e),{colorTheme:"medium"}));function Kt(e){const{onDone:t,onCancel:n,doneLabel:o="Apply",cancelLabel:s="Cancel",style:i={}}=e;return _("div",{style:b({margin:"0 10px",display:"flex"},i),children:[f(de.Done,{onClick:t,style:(i==null?void 0:i.flexDirection)==="row-reverse"?{marginLeft:"10px"}:{},children:o}),f(de.Danger,{fill:"outline",onClick:n,style:!i.flexDirection||i.flexDirection==="row"?{marginLeft:"10px"}:{},children:s})]})}const po=c.exports.forwardRef((e,t)=>{const{checked:n=!1,disabled:o=!1,name:s="",onChange:i=()=>null,style:r={}}=e,[l,a]=c.exports.useState(n),u=c.exports.useCallback(d=>{a(!l),i(d)},[l,i]);return f("input",{ref:t,type:"checkbox",name:s,id:s,onChange:u,defaultChecked:n,disabled:o,style:r})});function xt(e){const m=e,{label:t,name:n,onChange:o=()=>null,className:s="checkbox",reverse:i=!1,style:r={container:{},label:{},checkbox:{}}}=m,l=G(m,["label","name","onChange","className","reverse","style"]),{values:a,setFieldValue:u}=he(),d=i?!B(a,n):B(a,n),h=c.exports.useCallback(g=>{g.persist(),o(g),u(n,i?d:!d)},[n,o,i,u,d]);return _("div",{className:`${s} check-${d}`,style:r.container?r.container:{},children:[t&&f("label",{htmlFor:n,className:"checkbox-label",style:r.label?r.label:{},children:t}),f(po,k(b({},l),{name:n,checked:d,onChange:h,style:r.checkbox?r.checkbox:{}}))]})}const ce=c.exports.forwardRef((e,t)=>{const{onSubmit:n=()=>null,initialValues:o={},validationSchema:s=null}=e;return f(Hp,{innerRef:t,initialValues:o,onSubmit:n,validationSchema:s,children:f(et,{children:e.children})})});function vd(e){const t=c.exports.useRef();return c.exports.useEffect(()=>{e.forEach(n=>{!n||(typeof n=="function"?n(t.current):n.current=t.current)})},[e]),t}const Ps={label:{lineHeight:2,userSelect:"none"},inputWrapper:{height:"100%",width:"100px",borderRadius:"5px",borderWidth:"0.55px",borderColor:"#c7c7c7",borderStyle:"solid",display:"flex",flexDirection:"row",alignItems:"center",overflow:"hidden"},input:{outline:"none",flex:1,height:"100%",textAlign:"center",width:"100%"},clearButton:{height:"calc(100% - 4px)",borderRadius:"50%",backgroundColor:"gray",color:"white",aspectRatio:"1",fontSize:"60%",padding:0}},wt=c.exports.forwardRef((C,v)=>{var E=C,{value:e="",name:t,style:n={input:{},inputWrapper:{}},onChange:o=()=>null,debounceTime:s=0,onKeyDown:i=()=>null,checkValue:r=()=>!0,type:l="text",enableAutoSelect:a=!1,className:u,format:d=()=>T=>T,onBlur:h=()=>null,onFocus:m=()=>null,renderIcon:g=null,canClear:x=!1,onClear:y}=E,S=G(E,["value","name","style","onChange","debounceTime","onKeyDown","checkValue","type","enableAutoSelect","className","format","onBlur","onFocus","renderIcon","canClear","onClear"]);const[T,R]=c.exports.useState(e),I=c.exports.useRef(),N=vd([v,I]),A=c.exports.useRef(Ko(V=>{o(V)},s)).current;c.exports.useEffect(()=>{R(e)},[e]),c.exports.useEffect(()=>{var V;a&&((V=N==null?void 0:N.current)==null||V.select())},[a,N]);const P=c.exports.useCallback(V=>d()(l==="number"?String(V).trim()==="-"?Number(0):Number(V):V),[d,l]),D=c.exports.useCallback(V=>{V.persist(),V.stopPropagation(),V.preventDefault();function W(j){if(l==="number"){const U=/^(?:-?[0-9]*|[0-9]\d*)(?:\.\d{0,20})?$/;return!!(j.trim()===""||U.test(j))}return!0}const $=V.target.value;if(W($)&&r($)){const j=d();R(j($));const U=k(b({},V),{target:{name:V.target.name,value:P($)}});s?A(U):o(U)}},[r,A,s,d,P,o,l]),O=c.exports.useCallback(V=>{V.persist(),i(k(b({},V),{target:{name:V.target.name,value:P(T)}}))},[P,i,T]),L=c.exports.useCallback(V=>{V.stopPropagation()},[]),z=c.exports.useCallback(()=>{R(""),y==null||y()},[y]);return _("div",{style:b(b({},Ps.inputWrapper),n!=null&&n.inputWrapper?n.inputWrapper:{}),className:`input ${u||""}`,children:[g==null?void 0:g(),f("input",k(b({},S),{ref:N,name:t,style:b(b({},Ps.input),n!=null&&n.input?n.input:{}),"data-test-id":t?`input-${t}`:"",type:"text",value:T,onChange:D,onKeyDown:O,onKeyPress:L,onDoubleClick:V=>V.stopPropagation(),onFocus:m,onBlur:h})),x&&T&&f("button",{type:"button",style:Ps.clearButton,onClick:z,children:f("span",{style:{display:"block",margin:"0 auto"},children:"\u2715"})})]})});function Z(e){const C=e,{name:t,style:n={label:{},input:{}},onChange:o=()=>null,checkValue:s=()=>!0,type:i="text",className:r="",value:l=null,format:a=()=>E=>E,checkErrorAfterInputTouched:u=!0}=C,d=G(C,["name","style","onChange","checkValue","type","className","value","format","checkErrorAfterInputTouched"]),{values:h,handleChange:m,setFieldValue:g,errors:x,touched:y}=he(),S=c.exports.useCallback(E=>{o(E),m(E)},[m,o]);c.exports.useEffect(()=>{l&&g(t,l)},[t,g,l]);const v=c.exports.useMemo(()=>u?B(x,t)&&B(y,t):B(x,t),[u,x,t,y]);return f(wt,b({name:t,value:l||B(h,t),onChange:S,type:i,style:k(b({},n),{inputWrapper:b(b({},n.input),v&&{borderColor:"red",outline:"none"})}),checkValue:s,className:r,format:a},d))}const mt=M`
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
`,SC=M`
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
`,kC={name:"",compressed:!1,pretty:!1,dataExportOption:vt.ROW_DATA};function wC({onClose:e,onSave:t,name:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{o.current.submitForm()},[]),i=c.exports.useCallback(r=>{t(r),e==null||e()},[e,t]);return w("div",{css:[mt,SC],children:[w("div",{className:"header handle",children:[p("span",{children:"Save as ... "}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",children:w(ce,{ref:o,initialValues:k(b({},kC),{name:n}),onSubmit:i,children:[w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Name"}),p(Z,{name:"name",className:"name",style:{inputWrapper:{width:"100%"}}})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Compressed"}),p(xt,{name:"compressed"})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Pretty Format"}),p(xt,{name:"pretty"})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:" Include "}),w("div",{className:"data-export-group",children:[w("label",{children:[p(yr,{type:"radio",name:"dataExportOption",value:vt.ROW_DATA}),"Raw Data"]}),w("label",{children:[p(yr,{type:"radio",name:"dataExportOption",value:vt.DATA_SOURCE}),"Data Source"]})]})]})]})}),p("div",{className:"footer-container",children:p(Kt,{style:{flexDirection:"row-reverse",margin:0},onDone:s,doneLabel:"Save",onCancel:()=>e==null?void 0:e()})})]})}function EC(e){var s,i;let t=document.createElement("div");t.innerHTML=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0";let n=Array.prototype.slice.call(document.styleSheets).filter(r=>!r.disabled);document.body.appendChild(t),(s=window.getSelection())==null||s.removeAllRanges();let o=document.createRange();o.selectNode(t),(i=window.getSelection())==null||i.addRange(o),document.execCommand("copy");for(const r of n)r.disabled=!0;document.execCommand("copy");for(const r of n)r.disabled=!1;document.body.removeChild(t)}async function AC(e){try{return EC(e),!0}catch{return!1}}async function ys(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}async function tl(e,t="experiment",n=0,o=!1){const s=JSON.stringify(e,(i,r)=>ArrayBuffer.isView(r)?Array.from(r):r,n);if(o)try{const i=new un;i.file(`${t}.nmrium`,s);const r=await i.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}});pn.exports.saveAs(r,`${t}.nmrium`)}catch(i){console.log(i)}else{const i=new Blob([s],{type:"text/plain"});pn.exports.saveAs(i,`${t}.nmrium`)}}function TC(e,t,n="experiment"){const o=["name","experiment"];for(const r of e[0].data.x)o.push(r);let s=`${o.join("	")}
`;for(const r of e){const{data:{re:l},info:{experiment:a},display:{name:u}}=r,d=[u,a];for(const h of l)d.push(h);s+=`${d.join("	")}
`}const i=new Blob([s],{type:"text/tab-separated-values"});pn.exports.saveAs(i,`${n}.tsv`)}function DC(e,t="experiment"){e.generateAsync({type:"blob"}).then(n=>{pn.exports.saveAs(n,`${t}.nmredata`)})}function Cd(e,t,n="experiment"){const{blob:o}=tr(e,t);pn.exports.saveAs(o,`${n}.svg`)}function IC(e,t,n="experiment"){const{blob:o,width:s,height:i}=tr(e,t);try{let r=document.createElement("canvas");r.width=s,r.height=i;let l=r.getContext("2d");l&&(l.fillStyle="white",l.fillRect(0,0,r.width,r.height));let a=new Image,u=URL.createObjectURL(o);a.onload=async()=>{l==null||l.drawImage(a,0,0);let d=r.toDataURL("image/png",1);pn.exports.saveAs(d,`${n}.png`),URL.revokeObjectURL(d)},a.src=u}catch(r){console.log(r)}}function PC(e){var o;const t=document.createElement("img");t.src=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0",document.body.appendChild(t);const n=document.createRange();n.selectNode(t),(o=window.getSelection())==null||o.addRange(n),document.execCommand("Copy"),document.body.removeChild(t)}function RC(e){e.toBlob(t=>{const n=new ClipboardItem({[t.type]:t});navigator.clipboard.write([n]).then(()=>{console.log("experiment copied.")},o=>{console.log(o)})})}function Sd(e,t){const{blob:n,width:o,height:s}=tr(e,t);try{let i=document.createElement("canvas");i.width=o,i.height=s;let r=i.getContext("2d");r&&(r.fillStyle="white",r.fillRect(0,0,i.width,i.height));let l=new Image;const a=URL.createObjectURL(n);l.onload=async()=>{r==null||r.drawImage(l,0,0);const u=i.toDataURL("image/png",1);navigator.clipboard.write?RC(i):PC(u),URL.revokeObjectURL(u)},l.src=a}catch(i){i instanceof ReferenceError&&alert("Your browser does not support this feature, please use Google Chrome"),console.log(i)}}function tr(e,t){var u;let n=(u=e.getRootNode().getElementById(t))==null?void 0:u.cloneNode(!0);const o=n==null?void 0:n.getAttribute("width").replace("px",""),s=n==null?void 0:n.getAttribute("height").replace("px","");n.querySelectorAll('[data-no-export="true"]').forEach(d=>d.remove());const l=`${`<svg class="nmr-svg"  viewBox='0 0 ${o} ${s}' width="${o}"  height="${s}"  version="1.1" xmlns="http://www.w3.org/2000/svg">`+`<style>.grid line,.grid path{stroke:none;} .peaks-text{fill:#730000} .x path{stroke-width:1px} .x text{
    font-size: 12px;
    font-weight: bold;
  } 
 
  .nmr-svg,.contours{
    background-color:white;
    fill:white;
  }
  

  
  </style>`+n.innerHTML}</svg>`;return{blob:new Blob([l],{type:"image/svg+xml"}),width:o,height:s}}const NC=new un;async function kd(e,t={}){const{spectrum:n,source:o}=t,{file:s={},jcampURL:i}=o;let r="";const l=`${n.info.dimension}d`;switch(s.extension){case"jdx":case"dx":r+=`
Jcamp_Location=file:jcamp/${l}/${n.display.name}\\`,e.file(`jcamp/${l}/${n.display.name}`,s.binary);break;case"zip":if(!s.binary)return;NC.loadAsync(s.binary).then(async a=>{var u;for(const d in a.files)d.endsWith("/")||e.file(`Bruker/${d}`,await((u=a.file(d))==null?void 0:u.async("arraybuffer")));r+=`
Spectrum_Location=file:Bruker/${MC(a)}\\`});break;default:if(!i)break;await fetch(i).then(async a=>{if(!a)return;let u=i.split("/").slice(-1);const d=`jcamp/${l}/${u}`;r+=`
Jcamp_Location=file:${d}\\`,e.file(d,await a.arrayBuffer())})}return r}function MC(e){let t=e.filter(o=>o.match("__MACOSX")?!1:!!(o.endsWith("fid")||o.endsWith("1r")||o.endsWith("ser")||o.endsWith("2rr")));const n=t.findIndex(o=>o.name.endsWith("1r")||o.name.endsWith("2rr"));return n>-1?t[n].name:t[0].name}function nr(e){Array.isArray(e)||(e=[e]);let t=[];for(let n of e)t.push(_C(n));return t}function _C(e){switch(e.toUpperCase()){case"1H":return 2;case"13C":return 1;default:return 1}}async function FC(e,t,n={labels:{byDiaID:[]}}){let{prefix:o="",labels:s}=n,i="",r=[];for(let l of e){const{info:a}=l;if(a.isFid||a.dimension>1)continue;let u="",d=l.ranges.values||[],h=l.info.nucleus,m=1,g="";r.forEach(S=>{S===h&&m++}),r.push(h),m>1&&(g=`#${m}`),u+=`${o}1D_${h.toUpperCase()}${g}>`,l.info.baseFrequency&&(u+=`
Larmor=${Number(l.info.baseFrequency).toFixed(2)}\\`);const{source:x={}}=l;u+=await kd(t,{spectrum:l,source:x});let y=nr(h)[0];for(let S of d){let v=S.signals;for(let C of v){let{multiplicity:E}=C;if((!E||E==="m")&&h==="1H")u+=`
${Number(S.from).toFixed(y)}-${Number(S.to).toFixed(y)}`;else if(C.delta)u+=`
${Number(C.delta).toFixed(y)}`;else continue;let T="";if(C.diaIDs&&C.diaIDs.length>0&&(C.diaIDs.forEach((R,I,N)=>{let A=", ";I===N.length-1&&(A=""),T+=`${s.byDiaID[R].label||R}${A}`}),u+=`, L=${T}`),h==="1H"){C.multiplicity&&(u+=`, S=${C.multiplicity}`);let R=C.js;if(Array.isArray(R)&&R.length){let I=", J=";for(const N of R){if(u+=`${I}${Number(N.coupling).toFixed(3)}`,N.diaIDs){let{diaIDs:A}=N;if(Array.isArray(A)||(A=[A]),!A.length)continue;u+=`(${s.byDiaID[A[0]].label||String(A[0])})`}I=", "}}S.integration?u+=`, E=${Number(S.integration).toFixed(y)}`:S.nbAtoms?u+=`, E=${S.nbAtoms.toFixed(y)}`:S.signals[0].nbAtoms!==void 0&&(u+=`, E=${S.signals[0].nbAtoms}`)}}v.length&&(u+="\\")}u+=`
`,/\n/.exec(u)&&(i+=u)}return i}function LC(e){switch(e.toLowerCase()){case"hsqc":case"cosy":return"1J";case"hmbc":return"NJ";default:return"NJ"}}const OC=Array.isArray;async function $C(e,t,n={labels:{}}){const{byDiaID:o}=n.labels;let s="";const i=`
> <NMREDATA_2D_`;for(let r of e){if(r.info.dimension<2)continue;let l="";const{info:a,source:u}=r;let{nucleus:d,experiment:h,pulseSequence:m}=a,g=LC(h);d&&(l+=`${i}${d[1]}_${g}_${d[0]}>`);let x=nr(d);l+=await kd(t,{spectrum:r,source:u}),h&&(l+=`
CorType=${h} \\`),m&&(l+=`
PulseProgram=${m} \\`),r.info.baseFrequency&&(l+=`
Larmor=${Number(r.info.baseFrequency[0]).toFixed(2)}\\`);let y=r.zones.values||[];for(let S of y){let v=S.signals;for(let C of v){let{x:E,y:T,peaks:R}=C,I=nl(E,o,x[0]),N=nl(T,o,x[1]),A=Math.max(...R.map(P=>P.z));l+=`
${I}/${N}, I=${A.toFixed(2)}\\`}}s+=l}return s.length>0?`${s}
`:""}function nl(e,t,n){let{diaIDs:o,delta:s}=e;if(o){if(OC(o)||(o=[o]),o.length<1)return Number(s).toFixed(n);let i=o.map(r=>t[r].label).join(",");return o.length>1?`(${i})`:i}return Number(s).toFixed(n)}function HC(e){let t=[];for(const{x:n,y:o}of e)t.push(n,o);return t}function zC(e,t={groupedDiaIDs:[]}){const{groupedDiaIDs:n,molecule:o}=t;let s=zp(o,{toLabel:"H",maxLength:1}),i={},r={};for(let l of e){let{dimension:a,nucleus:u}=l.info,d=nr(u),[h,m]=a>1?["zones",HC]:["ranges",x=>x||[]],g=l[h].values||[];for(let x of g){let y=m(x.signals);for(let S=0;S<y.length;S++){let v=y[S].diaIDs||[];for(let C of v){let E=Number(y[S].delta).toFixed(d[S%a]),T=n.find(I=>I.oclID===C),R={atom:T.atoms[0],molecule:o,connections:s,atomLabel:T.atomLabel};i[C]={atoms:T.atoms.map(I=>I+1),shift:E,label:ol(R)};for(let I of T.atoms)R.atom=I,r[I]={shift:E,diaID:C,label:ol(R)}}}}}return{byAssignNumber:r,byDiaID:i}}function ol(e){const{atom:t,molecule:n,atomLabel:o,connections:s}=e;let i="";if(o!=="C"){let l=s[t].find(d=>d&&d.length>1),a=`${o}${l[0]+1}`,u=`${n.getAtomLabel(l[1])}${l[1]+1}`;i=`${a}${u}`}else i=`${o}${t+1}`;return i}const or={solvent:"SOLVENT",temperature:"TEMPERATURE",assignment:"ASSIGNMENT",j:"J",signals:"SIGNALS",id:"ID"};async function VC(e,t={}){const{data:n,molecules:o}=e||{data:[],molecules:[]};let s=new un;for(const i of o)await sl(n,s,k(b({},t),{molecule:i}));return o.length||await sl(n,s,t),s}async function sl(e,t,n={}){let{id:o,prefix:s=`
> <NMREDATA_`,filename:i="nmredata",molecule:r}=n,l="",a;r&&(r=Et.Molecule.fromMolfile(r.molfile),l+=r.toMolfile(),r.addImplicitHydrogens(),a=Vp(r));let u=r?zC(e,{groupedDiaIDs:a,molecule:r}):{byDiaID:void 0,byAssignNumber:void 0};l+=`${s}VERSION>
1.1\\
`,l+=il(e,"temperature",{prefix:s}),l+=il(e,"solvent",{prefix:s}),o&&(l+=`${s+or.id}>
id\\
`),l+=jC(u.byDiaID,{prefix:s}),l+=await FC(e,t,{prefix:s,labels:u}),l+=await $C(e,t,{prefix:s,labels:u}),l+=`
$$$$
`,t.file(`${i}.sdf`,l)}function jC(e,t){if(!e)return"";const{prefix:n}=t;let o=`${n+or.assignment}>
`;for(let s in e){let i=e[s].atoms;o+=`${e[s].label}, ${e[s].shift}`;for(let r of i)o+=`, ${r}`;o+=`\\
`}return o}function il(e,t,n={prefix:""}){const{prefix:o}=n;let s="";for(let i of e)if(i.info[t]){s+=`${o+or[t]}>
${String(i.info[t])}\\
`;break}return s}function wd(){const{rootRef:e}=gs(),t=fe(),n=se(),o=H(),s=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{Sd(e,"nmrSVG"),h(),n.success("Image copied to clipboard")},0)}},[e,n,o]),i=c.exports.useCallback(async(h=0,m=!0)=>{if(o.data.length>0){const g=await n.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{async function x(){var v,C;const y=(C=(v=o.data[0])==null?void 0:v.display)==null?void 0:C.name,S=Pr(o);await tl(S,y,h,m),g()}x()},0)}},[n,o]),r=c.exports.useCallback(async()=>{if(o.data.length>0){const h=await n.showLoading("Exporting as NMRE process in progress");setTimeout(()=>{async function m(){var y,S;const g=(S=(y=o.data[0])==null?void 0:y.display)==null?void 0:S.name,x=await VC(o);DC(x,g),h()}m()},0)}},[n,o]),l=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as SVG process in progress");setTimeout(()=>{var g,x;const m=(x=(g=o.data[0])==null?void 0:g.display)==null?void 0:x.name;Cd(e,"nmrSVG",m),h()},0)}},[e,n,o.data]),a=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as PNG process in progress");setTimeout(()=>{var g,x;const m=(x=(g=o.data[0])==null?void 0:g.display)==null?void 0:x.name;IC(e,"nmrSVG",m),h()},0)}},[e,n,o.data]),u=c.exports.useCallback(h=>{async function m(){const{name:g,pretty:x,compressed:y,dataExportOption:S}=h,v=await n.showLoading(`Exporting as ${g}.nmrium process in progress`);setTimeout(()=>{(async()=>{const C=Pr(o,S);await tl(C,g,x?2:0,y),v()})()},0)}m()},[n,o]),d=c.exports.useCallback(async()=>{var h,m;if(o.data.length>0){const g=(m=(h=o.data[0])==null?void 0:h.display)==null?void 0:m.name;t.show(f(wC,{name:g,onSave:u}),{isBackgroundBlur:!1,position:ne.TOP_CENTER,width:400})}},[t,u,o.data]);return{saveToClipboardHandler:s,saveAsJSONHandler:i,saveAsNMREHandler:r,saveAsSVGHandler:l,saveAsPNGHandler:a,saveAsHandler:d}}function Ed(){const e=le(),t=B(e.current,"display.general.experimentalFeatures",!1);return!((t==null?void 0:t.hidden)===!0||(t==null?void 0:t.display)===!1)}function ve(r){var l=r,{children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right"}=l,i=G(l,["children","style","onClick","popupTitle","popupPlacement"]);return f(Ee,{title:o,popupPlacement:s,children:f("button",k(b({style:t,type:"button",onClick:n},i),{children:e}))})}const Rt=M`
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
`,BC=M`
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
`;function XC({children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right",defaultValue:i=!1,disabled:r=!1,className:l=""}){const[a,u]=c.exports.useState(i),d=c.exports.useCallback(()=>{n(!a),u(!a)},[n,a]);return p(Ee,{title:o,popupPlacement:s,children:p("button",{disabled:r,css:BC,style:t,className:(a?"toggle toggle-active ":"toggle ")+l,type:"button",onClick:d,children:e})})}var Ge=c.exports.memo(XC);const YC=M`
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
`;function GC({counter:e,onDelete:t=()=>null,deleteToolTip:n="Delete",onFilter:o=()=>null,filterToolTip:s="",filterIsActive:i=!1,counterFiltered:r=0,children:l,onSettingClick:a=()=>null,showSettingButton:u=!1,canDelete:d=!0,style:h={},className:m=""}){return w("div",{css:YC,style:h,className:m,children:[w("div",{className:"left-container",children:[d&&p(Ee,{title:n,popupPlacement:"right",children:p("button",{type:"button",onClick:t,disabled:e===0,children:p(At,{})})}),s?p(Ge,{popupTitle:s,popupPlacement:"right",onClick:o,defaultValue:i,children:p(jp,{style:{pointerEvents:"none",fontSize:"12px"}})}):null,l]}),e!==void 0&&w("p",{className:"counter-label",children:["["," ",i&&i===!0&&r!==void 0?`${r}/${e}`:e," ","]"]}),u&&p(Ee,{title:"preferences",popupPlacement:"left",children:p("button",{type:"button",onClick:a,children:p(Bp,{})})})]})}var ot=c.exports.memo(GC);function sr(){const e=le();return t=>B(e.current,`display.toolBarButtons.${t}`,!0)}function Ad(){const e=X(),t=se(),{data:n}=H(),o=sr(),s=c.exports.useCallback(()=>{(async()=>{const i=await t.showLoading("Automatic Ranges/Zones detection for all spectra in progress");setTimeout(()=>{e({type:Du}),e({type:Iu}),i()},0)})()},[e,t]);return Array.isArray(n)&&n.length===0||!o("autoRangesTool")?null:f(ve,{popupTitle:"Automatic Ranges/Zones picking for all spectra",onClick:s,children:f(Bl,{})})}const WC=M`
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
`;function ZC({context:e},t){const[n,o]=c.exports.useState({left:0,top:0}),{rootRef:s,elementsWrapperRef:i}=gs(),[r,l]=c.exports.useState(),[a,u]=c.exports.useState(),[d,h]=c.exports.useState(null),m=c.exports.useRef();c.exports.useEffect(()=>(m.current=document.createElement("div"),i&&i.appendChild(m.current),()=>{m.current&&i&&i.removeChild(m.current)}),[i]);const g=y=>{y.preventDefault(),h(y.target.parentElement),u(!0);const S=y.clientX,v=y.clientY,C=window.innerWidth,E=window.innerHeight,T=150,R=0,I=C-S>T;let N=!I,A=E-v>R;const P=!A;I&&(N=`${S+5}px`),N&&(N=`${S-T-5}px`),A&&(A=`${v+5}px`),P&&(A=`${v-R-5}px`),o({left:N,top:A})};c.exports.useImperativeHandle(t,()=>({handleContextMenu:(y,S)=>{l(S),g(y)}}));const x=c.exports.useCallback((y,S)=>{y.preventDefault(),S(r),u(!1)},[r]);return c.exports.useEffect(()=>{const y=S=>{d&&S.target.parentElement&&!S.target.parentElement.isSameNode(d)&&a&&u(!1)};return s&&s.addEventListener("click",y),()=>{s&&s.removeEventListener("click",y)}},[a,t,s,d]),a?m.current&&qo.exports.createPortal(e&&p("div",{ref:t,css:[WC,n],children:e.map((y,S)=>p("button",{type:"button",onClick:v=>x(v,y.onClick),children:y.label},S))}),m.current):null}var qt=c.exports.forwardRef(ZC);function UC({headerGroups:e}){return f("thead",{children:e.map(t=>f("tr",k(b({},t.getHeaderGroupProps()),{children:t.headers.map(n=>_("th",k(b({},n.getHeaderProps(n.getSortByToggleProps())),{style:n.style,children:[n.render("Header"),f("span",{children:n.isSorted?n.isSortedDesc?" \u25BC":" \u25B2":""})]}),n.getHeaderProps().key))}),t.getHeaderGroupProps().key))})}var KC=c.exports.memo(UC);function qC(e,t){var n;return e?{backgroundColor:"#ff6f0057"}:((n=t.original)==null?void 0:n.isConstantlyHighlighted)===!0?{backgroundColor:"#f5f5dc"}:{}}const JC=M`
  &:hover {
    background-color: #ff6f0091 !important;
  }

  &:active {
    background-color: #ff6f0070 !important;
  }
`;function QC(e){const t=e.original.id;return t?t instanceof Array?t:[String(t)]:[""]}function eS(e,t){const{row:n,highlightedSource:o=ue.UNKNOWN,onContextMenu:s,onClick:i,isRowActive:r=!1}=e,l=c.exports.useMemo(()=>({type:o,extra:n.original}),[o,n]),a=re(QC(n),l);c.exports.useEffect(()=>()=>{a.hide()},[]);const u=c.exports.useCallback(d=>{i==null||i(d,n)},[i,n]);return c.exports.useMemo(()=>p("tr",k(b(b({ref:t,onContextMenu:s,css:[qC(a.isActive||r,n),i&&JC]},n.getRowProps()),a.onHover),{children:n.cells.map(d=>{const{style:h,padding:m}=d.column;return d.isRowSpanned?null:p("td",k(b({rowSpan:d.rowSpan},d.getCellProps()),{onContextMenu:g=>(g.preventDefault(),!1),style:b({padding:m},h),onClick:u,children:d.render("Cell")}),d.key)})}),n.getRowProps().key),[u,a.isActive,a.onHover,i,s,t,n])}var tS=c.exports.forwardRef(eS);const Td=M`
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
`,Dd=c.exports.createContext(null),nS=Dd.Provider;function oS(){const e=c.exports.useContext(Dd);if(!e)throw new Error("react table context was not found ");return e}function sS(e){e.useInstance.push(iS)}function iS(e){const{allColumns:t}=e;let n=[];t.forEach(o=>{const{id:s,enableRowSpan:i}=o;i!==void 0&&i!==!1&&n.push({id:s,cellValue:null,cellIndex:0})}),Object.assign(e,{rowSpanHeaders:n})}function rS(e,t,n,o){const s=e[t];for(let i=0;i<s.allCells.length;i++){const r=s.allCells[i],l=n.find(a=>a.id===r.column.id);if(l!==void 0){const a=o?`${r.value}-${s.original[o]}`:r.value;l.cellValue===null||l.cellValue!==a?(r.isRowSpanned=!1,l.cellValue=a,l.cellIndex=t,r.rowSpan=1):(e[l.cellIndex].allCells[i].rowSpan++,r.isRowSpanned=!0)}}}const lS={table:e=>{if(e)return{position:"sticky",top:0}}},aS=c.exports.forwardRef(function(t,n){const{data:o,columns:s,highlightedSource:i,context:r=null,onScroll:l,approxItemHeight:a=40,enableVirtualScroll:u=!1,groupKey:d,onClick:h,highlightActiveRow:m=!1}=t,g=c.exports.useRef(null),{index:x}=oS(),[y,S]=c.exports.useState(),{getTableProps:v,getTableBodyProps:C,headerGroups:E,rows:T,prepareRow:R,rowSpanHeaders:I}=Vn.exports.useTable({columns:s,data:o},Vn.exports.useSortBy,sS),N=c.exports.useCallback((D,O)=>{Gt(D)||(D.preventDefault(),g.current.handleContextMenu(D,O.original))},[g]),A=u?T.slice(x.start,x.end):T,P=c.exports.useCallback((D,O)=>{S(O.index),h==null||h(D,O)},[h]);return w("div",k(b({ref:n,className:"table-container",style:{overflowY:"auto",position:"relative",height:"100%"}},u&&{onScroll:l}),{children:[u&&p("div",{style:{height:a*o.length,position:"absolute",width:"100%",pointerEvents:"none"}}),w("table",k(b({},v()),{css:Td,style:lS.table(u),children:[p(KC,{headerGroups:E}),p("tbody",k(b({},C()),{children:A.map((D,O)=>(R(D),rS(T,u?O+x.start:O,I,d),p(tS,k(b({row:D},D.getRowProps()),{onContextMenu:L=>N(L,D),onClick:m?P:h,highlightedSource:i,isRowActive:y===O}),D.key)))}))]})),p(qt,{ref:g,context:r})]}))});function cS(e){const{data:t,approxItemHeight:n=40,groupKey:o}=e,s=c.exports.useRef(null),[i,{height:r}]=Xl(),l=vd([i,s]),[a,u]=c.exports.useState({offsetHeight:0,scrollHeight:0,numberOfVisibleRows:0,index:{start:0,end:0}});c.exports.useEffect(()=>{if(l.current){const{scrollHeight:x}=l.current,y=Math.ceil(r/n);u(S=>k(b({},S),{offsetHeight:r,scrollHeight:x,numberOfVisibleRows:y,index:{start:0,end:y+1}}))}},[n,l,r]);const d=c.exports.useCallback((x,y)=>{const S=t[x];if(S.index&&o)switch(y){case-1:{let v=x-1;for(;v>0;){if(t[v][o]!==S[o])return v+1;v--}return x}case 1:{let v=x+1;for(;v<t.length;){if(t[v][o]!==S[o])return v-1;v++}return x}default:return x}return x},[t,o]),h=c.exports.useCallback((x,y)=>{const S=x-y,v=S>=t.length?S:x;return d(v,-1)},[t.length,d]),m=c.exports.useCallback((x,y)=>{const S=x+y,v=S>=t.length?t.length-1:S;return d(v,1)},[t.length,d]),g=c.exports.useCallback(()=>{if(s.current&&a){const{scrollTop:x}=s.current,{numberOfVisibleRows:y,index:S}=a,v=Math.ceil(x/n),C=h(v,y);if(v!==S.start){const E=m(v,y);u(k(b({},a),{index:{start:C,end:E+1}}))}}},[n,m,h,a]);return p(nS,{value:a,children:p(aS,b({onScroll:g,ref:l},e))})}var Dn=c.exports.memo(cS);const rl={container:{height:"100%",backgroundColor:"white"},label:{textAlign:"center",width:"100%",fontSize:"11px",padding:"5px",color:"gray"}};function Nt(){return f("div",{style:rl.container,children:f("p",{style:rl.label,children:"No Data"})})}function uS({data:e}){const t=X(),n=c.exports.useCallback((s,i)=>{s.preventDefault(),s.stopPropagation();const r=i.original.assignment;t({type:Bo,payload:{assignments:r}})},[t]),o=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:s})=>s.index+1,style:{width:"1%",maxWidth:"40px",minWidth:"40px"}},{index:2,Header:"Score",accessor:"score"},{index:3,Header:"",style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"assign-button",Cell:({row:s})=>f("button",{type:"button",className:"assign-button",onClick:i=>n(i,s),children:f(Xp,{})})}],[n]);return e&&e.length>0?f(Dn,{data:e,columns:o,onClick:n,highlightActiveRow:!0}):f(Nt,{})}var dS=c.exports.memo(uS);function pS(e){return e.reduce((t,n)=>{const{id:o,info:s}=n,i=n.info.dimension;if(i===1){const r=n.ranges.values;t.push({id:o,info:s,ranges:r})}else if(i===2){const r=n.zones.values;t.push({id:o,info:s,zones:r})}return t},[])}function hS(){const e=X(),{data:t,molecules:n}=H(),o=c.exports.useRef(),s=se(),[i,r]=c.exports.useState([]),l=c.exports.useCallback(()=>{e({type:Bo,payload:{assignments:o.current}})},[e]),a=c.exports.useCallback(()=>{(async()=>{var g;const u=await s.showLoading("Auto Assignments"),d=Et.Molecule.fromMolfile(((g=n[0])==null?void 0:g.molfile)||""),h=pS(t);o.current||(o.current=h);const m=await Yp({spectra:h,molecule:d},{minScore:0});e({type:Bo,payload:{assignments:m[0].assignment}}),u(),r(m)})()},[s,t,e,n]);return c.exports.useMemo(()=>({getAssignments:a,assignments:i,restAssignments:l}),[i,a,l])}function fS(){const{getAssignments:e,assignments:t,restAssignments:n}=hS();return w("div",{css:Rt,children:[w(ot,{showSettingButton:!1,canDelete:!1,children:[p(Ad,{}),p(ve,{popupTitle:"automatic assignment",onClick:e,children:p(Gp,{style:{fontSize:"18px"}})}),p(ve,{popupTitle:"reset assignment",onClick:n,children:p(Wp,{})})]}),p("div",{className:"inner-container",children:p(dS,{data:t})})]})}function mS({data:e,columns:t,onMouseDown:n=()=>null}){const{getTableProps:o,getTableBodyProps:s,headerGroups:i,rows:r,prepareRow:l}=Vn.exports.useTable({columns:t,data:e},Vn.exports.useSortBy,Vn.exports.useFlexLayout);return w("table",k(b({},o()),{css:Td,style:{height:"100%"},children:[p("thead",{children:i.map(a=>p("tr",k(b({},a.getHeaderGroupProps()),{children:a.headers.map(u=>w("th",k(b({},u.getHeaderProps(u.getSortByToggleProps())),{children:[u.render("Header"),p("span",{children:u.isSorted?u.isSortedDesc?" \u25BC":" \u25B2":""})]}),u.getHeaderProps().key))}),a.getHeaderGroupProps().key))}),p("tbody",k(b({},s()),{style:{display:"block",height:"100%",overflowY:"auto"},children:r.map(a=>(l(a),p("tr",k(b({},a.getRowProps()),{onMouseDown:n,children:a.cells.map(u=>p("td",k(b({},u.getCellProps()),{style:k(b({},u.getCellProps().style),{padding:"0px"}),children:u.render("Cell")}),u.getCellProps().key))}),a.getRowProps().key)))}))]}))}var gS=c.exports.memo(mS);const Rs={container:{height:"100%",flexDirection:"column",display:"flex",width:"100%"},tableContainer:{height:"calc(100% - 30px)",overflow:"auto",display:"block"},searchInput:{width:"100%",borderRadius:"5px",border:"0.55px solid gray",padding:"5px",marginBottom:"2px"}};function xS({info:e,meta:t}){const[n,o]=c.exports.useState({}),[s,i]=c.exports.useState([]),r=c.exports.useRef(null),l=c.exports.useCallback(u=>{const d=Object.keys(n).filter(h=>h.toLowerCase().includes(u.target?u.target.value.toLowerCase():u.toLowerCase()));i(d)},[n]);c.exports.useEffect(()=>{r.current&&l(r.current.value)},[l,r]),c.exports.useEffect(()=>{if(e&&t){const u=Object.keys(e).concat(Object.keys(t));i(u),o(b(b({},e),t))}},[e,t]);const a=c.exports.useMemo(()=>[{Header:"Parameter",sortType:"basic",minWidth:100,width:20,maxWidth:20,Cell:({row:u})=>f("p",{style:{padding:"5px",backgroundColor:"white"},children:u.original})},{Header:"Value",sortType:"basic",resizable:!0,Cell:({row:u})=>f("p",{style:{backgroundColor:"#efefef",height:"100%",padding:"5px",fontFamily:"monospace",whiteSpace:"pre",overflow:"hidden"},children:`${n[u.original]}`})}],[n]);return _("div",{style:Rs.container,children:[f("div",{children:f("input",{type:"text",style:Rs.searchInput,placeholder:"Search for parameter...",onChange:l,ref:r})}),f("div",{style:Rs.tableContainer,children:f(gS,{data:s,columns:a})})]})}const bS=c.exports.memo(xS),yS={info:{},meta:{}};function vS(){const{info:e,meta:t}=Se(yS);return f(bS,{info:e,meta:t})}const CS=M`
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
`;function Id({onDelete:e,className:t="delete"}){return p("button",{css:CS,className:t,type:"button",onClick:e,children:p(ri,{className:"icon"})})}const SS=e=>M`
  position: relative;

  .delete {
    position: absolute;
    top: 2px;
    left: 2px;
  }

  ${e}
`;function kS({tabid:e,tablabel:t,isActive:n,onClick:o=()=>null,canDelete:s,onDelete:i=()=>null,tabstyles:r,render:l}){let a="tab-list-item";n&&(a+=" tab-list-active");const u=c.exports.useCallback(h=>{o(k(b({},h),{tablabel:t,tabid:e}))},[o,t,e]),d=c.exports.useCallback(h=>{h.stopPropagation(),i(k(b({},h),{tablabel:t,tabid:e}))},[i,t,e]);return w("li",{className:a,onClick:u,css:SS(r),"data-test-id":`tab-${e}`,children:[s&&p(Id,{onDelete:d}),l?l({isActive:n,title:t||"",id:e}):t]})}function Ne(e){return p(Ve,{children:e.children})}const ll=M`
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
`,wS=M`
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
`;var ir=(e=>(e.TOP="TOP",e.LEFT="LEFT",e))(ir||{});function ES({children:e,onClick:t,position:n,onDelete:o=()=>null,activeTab:s}){const i=c.exports.useCallback(u=>{const{tablabel:d,tabid:h}=u;t({tablabel:d,tabid:h})},[t]);let r;const l=c.exports.Children.map(e,u=>{if(!c.exports.isValidElement(u))return null;const{tabid:d}=u.props;return d===s&&(r=u.props.children),p(kS,k(b({},u.props),{isActive:d===s,onClick:i,onDelete:o}))}),a=c.exports.useMemo(()=>{switch(n){case"TOP":return ll;case"LEFT":return wS;default:return ll}},[n]);return w("div",{className:"tabs",css:a,children:[p("ol",{className:"tab-list",children:l}),p("div",{className:"tab-content",children:r})]})}var In=c.exports.memo(ES);function al({direction:e,onClick:t}){return p("div",{onClick:t,css:M`
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
      `,children:p(Zp,{style:{transform:`scaleX(${e==="right"?"-1":"1"})`}})})}const AS=.45;function TS({children:e,loop:t=!1,defaultIndex:n=0,onChange:o=()=>null}){const[s,{width:i}]=Xl(),[r,l]=c.exports.useState(0);c.exports.useEffect(()=>{l(n)},[n]);const a=c.exports.useMemo(()=>c.exports.Children.map(e,h=>p("div",{css:M`
              width: ${i}px;
              height: 100%;
            `,children:h},h.key)),[e,i]),u=c.exports.useCallback(()=>{l(h=>{if(a&&h===a.length-1)return o(h),t?0:h;const m=h+1;return o(m),m})},[a,t,o]),d=c.exports.useCallback(()=>{l(h=>{if(h===0)return o(h),t?0:h;const m=h-1;return o(m),m})},[t,o]);return!i&&!a?null:w("div",{css:M`
        position: relative;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        display: block;
      `,ref:s,children:[p("div",{css:M`
          transform: translateX(-${i*r}px);
          transition: transform ease-out ${AS}s;
          height: 100%;
          width: ${i*(a?a.length:1)}px;
          display: flex;
        `,children:a}),r!==0&&p(al,{direction:"left",onClick:d}),a&&r!==a.length-1&&p(al,{direction:"right",onClick:u})]})}var Pd=c.exports.memo(TS);const DS=M`
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
`,IS=M`
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
`;function Rd(e){const{molecules:t,onChange:n=()=>null,index:o}=e,[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{const l=o&&o<t.length?o:0;t&&t.length>0&&i(l)},[o,t]);const r=c.exports.useCallback(l=>{i(l),n(l)},[n]);return w("div",{children:[p("div",{css:DS,children:w("p",{children:[t&&t.length>0&&`${+(s+1)} / ${t.length}`," "]})}),p("div",{css:IS,children:p(Pd,{defaultIndex:s,onChange:r,children:t==null?void 0:t.map((l,a)=>{var u;return w("div",{className:"slider",children:[p("div",{children:l.molfile&&p(Up,{id:`molSVG${a}`,width:120,molfile:l.molfile})}),w("p",{children:[p(Kp,{mf:l.mf})," - ",(u=l.mw)==null?void 0:u.toFixed(2)]})]},l.key)})})})]})}const PS=M`
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
`;function RS(e){const[t,n]=c.exports.useState(),{setFieldValue:o,errors:s,values:i}=he(),{molecules:r,activeTab:l}=H(),a=Va(l),u=c.exports.useMemo(()=>a&&r&&r.length>0&&t!==void 0&&r[t].atoms[a]?r[t].atoms[a]:0,[t,a,r]),d=c.exports.useCallback(m=>{n(m),o(e.name,r[m])},[r,e.name,o]);c.exports.useEffect(()=>{if(r&&r.length>0){const m=i[e.name]?r.findIndex(g=>g.key===i[e.name].key):-1;d(m!==-1?m:0)}},[r,e.name,d,i]);const h=c.exports.useCallback(m=>{d(m)},[d]);return p("div",{css:PS,children:a&&r&&r.length>0?w("div",{className:"molecule-container",children:[p("p",{className:"title",children:"Select a molecule as reference!"}),w("div",{className:"molecule-selection-container",children:[p(Rd,{index:t,molecules:r,onChange:h}),w("p",{className:"newSumText",children:["New sum for ",a," will be ",u,"!"]})]})]}):p("p",{className:"empty",style:{color:s[e.name]?"red":"black"},children:"You have to Select a spectrum and Add a molecule from the Structure panel to select as a reference!"})})}const NS=M`
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
`;function Nd({onSave:e,onClose:t,header:n,sumOptions:o}){var g;const{current:{display:{general:s,panels:i}}}=le(),[r,l]=c.exports.useState("auto"),a=c.exports.useRef(null),u=c.exports.useCallback(x=>{x.key==="Enter"&&a.current.submitForm()},[]),d=c.exports.useCallback(x=>{l(x.tabid)},[]);c.exports.useEffect(()=>{var x;if((o==null?void 0:o.sumAuto)&&!(s!=null&&s.hideSetSumFromMolecule)&&!((x=i==null?void 0:i.structuresPanel)!=null&&x.hidden)){l("auto");const{mf:y,moleculeKey:S}=o;a.current.setValues({sum:null,molecule:S&&y?{mf:y,key:S}:null})}else l("manual"),a.current.setValues({sum:(o==null?void 0:o.sum)||"",molecule:null})},[s==null?void 0:s.hideSetSumFromMolecule,i==null?void 0:i.structuresPanel,o]);const h=c.exports.useCallback(x=>{switch(r){case"auto":{const{molecule:{mf:y,key:S}}=x;e({sumAuto:!0,mf:y,moleculeKey:S});break}case"manual":{const{sum:y}=x;e({sum:y,sumAuto:!1});break}default:return}t()},[t,e,r]),m=c.exports.useMemo(()=>{switch(r){case"auto":return Q({molecule:Q().required()});case"manual":return Q({sum:ae().required()});default:return null}},[r]);return w("div",{css:[mt,NS],children:[w("div",{className:"header handle",children:[p("span",{children:n}),p(me,{onClick:t})]}),p("div",{className:"tab-content",children:p(ce,{ref:a,onSubmit:h,initialValues:{sum:null,molecule:null},validationSchema:m,children:w(In,{activeTab:r,onClick:d,children:[!(s!=null&&s.hideSetSumFromMolecule)&&!((g=i==null?void 0:i.structuresPanel)!=null&&g.hidden)&&p(Ne,{tablabel:"Auto",tabid:"auto",children:p(RS,{name:"molecule"})}),p(Ne,{tablabel:"Manual",tabid:"manual",children:p("div",{className:"manual-container",children:p(Z,{name:"sum",type:"number",placeholder:"Enter the new value",onKeyDown:u})})})]})})}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:()=>a.current.submitForm(),className:"btn",children:"Set"})})]})}const MS=M`
  background-color: transparent;
  border: none;
  height: 100%;
  svg {
    fill: green;
    font-size: 16px;
  }
`;function _S(e){const{className:t="",disabled:n=!1,popupPlacement:o="left",popupTitle:s="Save",onClick:i}=e;return p("div",{className:t,children:p(Ee,{title:s,popupPlacement:o,children:p("button",{css:MS,type:"button",onClick:i,disabled:n,className:t,children:p(qp,{})})})})}var rr=c.exports.memo(_S);const FS=M`
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
`;function LS({onClose:e,onSave:t}){return w("div",{css:FS,children:[p(me,{onClick:e,popupTitle:"close Preferences"}),p(rr,{onClick:t,popupTitle:"save Preferences"})]})}var Pn=c.exports.memo(LS);function OS(e,t){const{onSave:n=()=>null,value:o,type:s="text",style:i,onEditStart:r=()=>null,editStatus:l=!1}=e,[a,u]=c.exports.useState();c.exports.useEffect(()=>{u(l)},[l]),c.exports.useImperativeHandle(t,()=>({startEdit:()=>{u(!0)},closeEdit:()=>{u(!1)}}));const d=c.exports.useCallback(m=>{m.target.classList.contains("editable-column")||(u(!1),window.removeEventListener("mousedown",d))},[]),h=c.exports.useCallback((m,g=null)=>{m?(window.addEventListener("mousedown",d),r(g),u(m)):(["Enter","Tab"].includes(g.key)&&n(g),["Enter","Tab","Escape"].includes(g.key)&&(u(m),window.removeEventListener("mousedown",d)))},[d,r,n]);return _("div",{style:b({display:"table",width:"100%",height:"100%"},i),onDoubleClick:m=>h(!0,m),children:[!a&&f("span",{style:{display:"table-cell",verticalAlign:"middle"},children:o}),a&&f("div",{style:{display:"table-cell",verticalAlign:"middle"},children:f(wt,{enableAutoSelect:!0,className:"editable-column",value:o,type:s,onKeyDown:m=>h(!1,m)})})]})}var at=c.exports.forwardRef(OS);function vs(e,t){const{index:n,Header:o=()=>null,extraParams:s,accessor:i=null,Cell:r=null,sortType:l="basic",enableRowSpan:a=!1,style:u={},id:d}=t||{};e.push(b(k(b(b(b({index:n},b({},d&&{id:d})),b({},i?{accessor:i}:{})),b({},r?{Cell:r}:{})),{Header:o,sortType:l,enableRowSpan:a,style:u}),s))}const $S=`url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="960px" height="560px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve"><g id="Rounded_Rectangle_33_copy_4_1_"><path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/></g></svg>')`,Me=c.exports.forwardRef(function(t,n){const{data:o,style:s={width:100},onChange:i=()=>null,defaultValue:r,name:l="",className:a=""}=t,u=c.exports.useCallback(h=>{let m=h.target.value;isNaN(m)||(m=Number(m)),i(m)},[i]),d=M`
    padding: 0px 5px;
    border: 0.55px solid #cacaca;
    font-size: 14px;
    width: ${s.width?Number(s.width)-5:115}px;
    margin: 0;
    height: 100%;
    background: ${$S} no-repeat right white;
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
  `;return p("select",{ref:n,css:d,name:l,onChange:u,defaultValue:r,className:a,style:s,children:o.map(h=>p("option",{value:h.value,children:h.label},`${h.key}`))})}),HS={marginLeft:10,marginRight:10,border:"none"};function zS({activeTab:e,data:t,preferences:n}){const o=X(),s=c.exports.useCallback((h,m)=>{h.preventDefault(),h.stopPropagation();const g=m.original;o({type:as,integralID:g.id})},[o]),i=c.exports.useCallback((h,m)=>{const g=k(b({},m.original),{kind:h});o({type:Vc,payload:{data:g}})},[o]),r=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:h})=>h.index+1,width:10},{index:2,Header:"From",sortType:"basic",resizable:!0,accessor:h=>h.from.toFixed(2)},{index:3,Header:"To",sortType:"basic",resizable:!0,accessor:h=>h.to.toFixed(2)},{index:6,Header:"Kind",sortType:"basic",resizable:!0,accessor:h=>h.kind,Cell:({row:h})=>f(Me,{onChange:m=>i(m,h),data:ci,style:HS,defaultValue:h.original.kind})},{index:7,style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:h})=>f("button",{type:"button",className:"delete-button",onClick:m=>s(m,h),children:f(At,{})})}],[i,s]),l=c.exports.useCallback((h,m)=>{const g={value:h.target.value,id:m.id};o({type:lu,payload:{data:g}})},[o]),a=c.exports.useMemo(()=>ft(n.current,`formatting.panels.integrals.[${e}]`,Ot),[e,n]),u=c.exports.useMemo(()=>[{showWhen:"showAbsolute",index:4,Header:"Absolute",accessor:h=>Ye(h.absolute,B(a,"absoluteFormat",Ot.absoluteFormat))},{showWhen:"showRelative",index:5,id:"relative",Header:()=>{const h=e==null?void 0:e.replace(/[0-9]/g,"");return f("span",{children:`Relative ${h}`})},accessor:h=>Ye(h.integral,B(a,"relativeFormat",Ot.relativeFormat)),Cell:({row:h})=>{const m=Ye(h.original.integral,B(a,"relativeFormat",Ot.relativeFormat)),x=$a(h.original)?m:`[ ${m} ]`;return f(at,{value:x,onSave:y=>l(y,h.original),type:"number"})}}],[e,a,l]),d=c.exports.useMemo(()=>{let h=[...r];for(const g of u){const m=g,{showWhen:x}=m,y=G(m,["showWhen"]);a[x]&&vs(h,y)}return h.sort((g,x)=>g.index-x.index)},[u,r,a]);return t&&t.length>0?f(Dn,{data:t,columns:d}):f(Nt,{})}var VS=c.exports.memo(zS);const jS=M`
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
`;function BS(e){const{label:t="Color: ",onColorChange:n=()=>null,name:o,value:s="#000000"}=e,[i,r]=c.exports.useState(!1),[l,a]=c.exports.useState(s);c.exports.useEffect(()=>{a(s)},[s]);const u=c.exports.useCallback(()=>{r(!i)},[i]),d=c.exports.useCallback(()=>{r(!1)},[]),h=c.exports.useCallback(m=>{const g=`${m.hex}${Math.round(m.rgb.a*255).toString(16)}`;a(g),n(k(b({},m),{hex:g,name:o}))},[o,n]);return w("div",{css:jS,children:[p("span",{className:"inputLabel",children:t}),w("div",{style:{flex:4},children:[w("div",{className:"swatch",onClick:u,children:[p("div",{className:"color",style:{backgroundColor:l}}),p("input",{type:"hidden",value:l,name:o})]}),i?w("div",{className:"color-popover",children:[p("div",{className:"cover",onClick:d}),p(Yl.ChromePicker,{color:{hex:l},onChangeComplete:h})]}):null]})]})}var XS=c.exports.memo(BS);function YS(e){const l=e,{onColorChange:t=()=>null,name:n}=l,o=G(l,["onColorChange","name"]),{values:s,setFieldValue:i}=he(),r=c.exports.useCallback(a=>{t(a),i(n,a.hex)},[n,t,i]);return f(XS,k(b({},o),{name:n,onColorChange:r,value:B(s,n)}))}var GS=c.exports.memo(YS);const Ns={row:{display:"flex",margin:"5px 0px",alignItems:"center"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center"}};function WS(e){const{label:t,checkControllerName:n,formatControllerName:o,disableFormat:s=!1,hideFormat:i=!1}=e,{values:r,handleChange:l,setFieldValue:a}=he(),u=c.exports.useCallback(h=>{l(h)},[l]),d=c.exports.useCallback(h=>{a(h.target.name,h.target.checked)},[a]);return _("div",{style:Ns.row,children:[f("span",{style:Ns.inputLabel,children:t}),_("div",{style:{flex:4,display:"flex",flexDirection:"row",alignItems:"center"},children:[f("input",{type:"checkbox",style:{margin:"0px 5px"},name:n,onChange:d,checked:B(r,n,!1)}),!i&&o&&f(wt,{style:{inputWrapper:Ns.input},name:o,value:B(r,o,""),onChange:u,type:"text",disabled:s})]})]})}var Fe=c.exports.memo(WS);const xo={container:{display:"flex"},label:{lineHeight:2,userSelect:"none",flex:"2"},inputContainer:{flex:"4",display:"flex",justifyContent:"flex-start"},input:{height:"100%",width:"100px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"}},cn=c.exports.forwardRef(({label:e,name:t,defaultValue:n=0,style:o={label:{},input:{},container:{},inputContainer:{}},onChange:s=()=>null,onInput:i=()=>null,pattern:r="^d*(.d{0,2})?$",step:l="any",min:a="any",max:u="any"},d)=>{const h=c.exports.useRef(null),m=c.exports.useCallback(g=>{if(g.target.checkValidity()){const x=Number(g.target.value===""?n:g.target.value);s(k(b({},g),{target:k(b({},g.target),{name:g.target.name,value:x})}))}else{const x=d||h;x.current.value=Number(n)}},[n,s,d]);return _("div",{style:b(b({},xo.container),o.container),children:[f("span",{style:b(b({},xo.label),o.label),children:e}),f("div",{style:b(b({},xo.inputContainer),o.inputContainer),children:f("input",{ref:d||h,name:t,style:b(b({},xo.input),o.input),type:"number",pattern:r,defaultValue:n,step:l,onChange:m,onInput:i,min:a,max:u},n)})]})});function Qs(e){const l=e,{label:t,name:n}=l,o=G(l,["label","name"]),{values:s,handleChange:i}=he(),r=c.exports.useCallback(a=>{i(a)},[i]);return f(cn,b({label:t,name:n,defaultValue:B(s,n),onChange:r},o))}function Cs(){const{tabActiveSpectrum:e}=H();return c.exports.useMemo(()=>e&&Object.keys(e).length>0?Object.keys(e):[],[e])}const Fn={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},ZS=[{id:1,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:2,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function US({nucleus:e,preferences:t,innerRef:n}){const o=se(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=Ot,{color:a,strokeWidth:u}=l,d=G(l,["color","strokeWidth"]),h=ft(t.current,"formatting.panels.integrals");let m=e.reduce((g,x)=>(g[x]=d,g),{});m=Object.assign(m,{color:a,strokeWidth:u}),s.current.setValues(h||m)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"integrals",value:l}}),o.success("Integrals preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:Fn.container,children:_(ce,{onSubmit:r,ref:s,children:[_("div",{style:Fn.groupContainer,children:[f("p",{style:Fn.header,children:"General"}),f(GS,{name:"color"}),f(Qs,{name:"strokeWidth",label:"stroke width :",style:{label:{fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center",borderRadius:"5px"}},min:1,max:9,pattern:"[1-9]+"})]}),e==null?void 0:e.map(l=>_("div",{style:Fn.groupContainer,children:[f("p",{style:Fn.header,children:f(si,{mf:l})}),ZS.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id))]},l))]})})}const KS=c.exports.memo(US);function qS(e,t){const n=le(),o=Cs();return f(KS,{innerRef:t,nucleus:o,preferences:n})}var JS=c.exports.forwardRef(qS);const QS=M`
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
`;function ek({integrals:e,info:t,activeTab:n,xDomain:o,preferences:s}){var I;const[i,r]=c.exports.useState(!1),l=X(),a=fe(),[u,d]=c.exports.useState(!1),h=c.exports.useRef(),m=c.exports.useCallback(()=>{l({type:as,integralID:null})},[l]),g=c.exports.useCallback(()=>{a.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:m},{text:"No"}]})},[a,m]),x=c.exports.useCallback(N=>{l({type:jc,value:N}),a.close()},[l,a]),y=c.exports.useMemo(()=>B(e,"options.sum",null),[e]),S=c.exports.useCallback(()=>{a.show(p(Nd,{onClose:()=>a.close(),onSave:x,header:y?`Set new Integrals Sum (Current: ${Number(y).toFixed(2)})`:"Set new Integrals Sum",sumOptions:e==null?void 0:e.options}))},[x,y,e==null?void 0:e.options,a]),v=c.exports.useCallback(()=>{d(!u)},[u]),C=c.exports.useCallback(()=>{h.current.saveSetting(),d(!1)},[]),E=c.exports.useCallback(()=>{r(!i)},[i]),T=c.exports.useCallback(N=>{l({type:ku,payload:N})},[l]),R=c.exports.useMemo(()=>{function N(A,P){return P=P*1e4,A=A*1e4,P>=o[0]*1e4&&A<=o[1]*1e4||A<=o[0]*1e4&&P>=o[1]*1e4}return t.dimension===1&&(e==null?void 0:e.values)?(i?e.values.filter(P=>N(P.from,P.to)):e.values).map(P=>k(b({},P),{isConstantlyHighlighted:N(P.from,P.to)})):[]},[i,t.dimension,e,o]);return p(c.exports.Fragment,{children:w("div",{css:[Rt,QS,u&&M`
              th {
                position: relative;
              }
            `],children:[!u&&w(ot,{counter:(I=e==null?void 0:e.values)==null?void 0:I.length,onDelete:g,deleteToolTip:"Delete All Integrals",onFilter:E,filterToolTip:i?"Show all integrals":"Hide integrals out of view",filterIsActive:i,counterFiltered:R.length,showSettingButton:!0,onSettingClick:v,children:[p(Ee,{title:y?`Change Integrals Sum (${Number(y).toFixed(2)})`:"Change Integrals Sum",popupPlacement:"right",children:p("button",{className:"sum-button",type:"button",onClick:S,children:p(Gl,{})})}),p(Ge,{className:"fix-integral-toggle-btn",popupTitle:"fix integral values",popupPlacement:"right",onClick:T,children:p(Wl,{})})]}),u&&p(Pn,{onSave:C,onClose:v}),p("div",{className:"inner-container",children:u?p(JS,{ref:h}):p(VS,{data:R,activeTab:n,preferences:s})})]})})}const tk=c.exports.memo(ek),nk={integrals:{},info:{}};function ok(){const{xDomain:e,activeTab:t}=H(),n=le(),{integrals:o,info:s}=Se(nk);return p(tk,{integrals:o,info:s,preferences:n.current,xDomain:e,activeTab:t})}function te(e){const{title:t,className:n="",children:o,style:s}=e;return _("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{className:n,style:b({fontSize:"11px",fontWeight:"bold",color:"#232323",paddingRight:"10px",width:"max-content"},s==null?void 0:s.label),children:t}),f("div",{style:s==null?void 0:s.wrapper,children:o})]})}const sk={from:-1,to:1,nbPoints:1024};function ik({onClose:e=()=>null}){const t=c.exports.useRef(),{data:n}=H(),o=c.exports.useCallback(()=>{t.current.submitForm()},[]),s=c.exports.useCallback(i=>{TC(n,i,"fileName"),e()},[n,e]);return c.exports.useEffect(()=>{function i(r){const[l,a]=r.range;t.current.setValues(k(b({},t.current.values),{from:l,to:a}))}return pe.on("brushEnd",i),()=>{pe.off("brushEnd",i)}},[]),w("div",{css:mt,children:[w("div",{className:"header handle",children:[p("span",{children:"Export spectra as a Matrix"}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",children:w(ce,{ref:t,initialValues:sk,onSubmit:s,children:[w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Range :"}),p(te,{title:"From : ",children:p(Z,{name:"from",type:"number"})}),p(te,{title:"To : ",children:p(Z,{name:"to",type:"number"})})]}),p("div",{className:"row margin-10",children:p(te,{title:"Number of Points :",className:"custom-label",children:p(Z,{name:"nbPoints",type:"number"})})})]})}),p("div",{className:"footer-container",children:p(de.Done,{onClick:o,children:"Export Now"})})]})}function rk({onSubmit:e},t){const{xDomain:n}=H();return _(ce,{ref:t,initialValues:{from:n[0],to:n[1],numberOfPoints:1024},onSubmit:e,children:[_("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(te,{title:"From : ",children:f(Z,{name:"from",type:"number"})}),f(te,{title:"To : ",children:f(Z,{name:"to",type:"number"})})]}),f("div",{className:"row margin-10",children:f(te,{className:"custom-label",title:"Number of points : ",children:f(Z,{name:"numberOfPoints",type:"number"})})})]})}var lk=c.exports.forwardRef(rk);function ak({onSubmit:e},t){const{xDomain:n}=H();return f(ce,{ref:t,initialValues:{from:n[0],to:n[1]},onSubmit:e,children:_("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(te,{title:"From :",children:f(Z,{name:"from",type:"number"})}),f(te,{title:"To :",children:f(Z,{name:"to",type:"number"})})]})})}var ck=c.exports.forwardRef(ak);const uk=[{key:0,value:0,label:"Select Filter"},{key:Ro,value:Ro,label:Ca},{key:Yn,value:Yn,label:xa},{key:Xs,value:Xs,label:Ia},{key:Vs,value:Vs,label:fa},{key:Bs,value:Bs,label:Ea}],dk=M`
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
`;function pk({onClose:e=()=>null,nucleus:t=""}){const n=c.exports.useRef(),o=X(),[s,i]=c.exports.useState(""),r=c.exports.useMemo(()=>{const h=Ht[t]?Object.entries(Ht[t]).map(m=>({key:m[0],value:m[0],label:m[0]}),[]):[];return uk.concat(h)},[t]),l=c.exports.useCallback(h=>{h.preventDefault(),n.current&&n.current.submitForm()},[]),a=c.exports.useCallback(h=>{h&&(o({type:yu,payload:[{name:s,options:h}]}),e())},[o,s,e]);c.exports.useEffect(()=>{function h(m){const[g,x]=m.range;n.current&&n.current.setValues(k(b({},n.current.values),{from:g,to:x}))}return pe.on("brushEnd",h),()=>{pe.off("brushEnd",h)}},[]);const u=c.exports.useCallback(h=>{i(h)},[]),d=c.exports.useMemo(()=>{switch(s){case Ro:return p(ck,{onSubmit:a,ref:n});case Yn:return p(lk,{onSubmit:a,ref:n})}},[s,a]);return w("div",{css:[mt,dk],children:[w("div",{className:"header handle",children:[p("span",{children:"Apply filters"}),p(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content container",children:[p("p",{className:"infoText",children:"This filter will use the exclusions zones defined in the first spectrum."}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Filter :"}),p(Me,{data:r,style:{width:275,height:30,margin:0},onChange:u})]}),d]}),p("div",{className:"footer-container",children:p(Kt,{style:{flexDirection:"row-reverse",margin:0},onDone:l,doneLabel:"Save",onCancel:e,cancelLabel:"Close"})})]})}function hk(){const e=fe(),t=X(),n=c.exports.useCallback(()=>{t({type:ut}),e.show(p(pk,{}),{isBackgroundBlur:!1,position:ne.TOP_CENTER,width:550,height:250})},[e,t]),o=c.exports.useCallback(()=>{t({type:ut}),e.show(p(ik,{}),{isBackgroundBlur:!1,position:ne.TOP_CENTER,width:500})},[e,t]);return w("div",{css:Rt,children:[w(ot,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,children:[p(ve,{popupTitle:"Add Filter",onClick:n,children:p(Jp,{style:{fontSize:"18px"}})}),p(ve,{popupTitle:"Export spectra as a Matrix",onClick:o,children:p(Qp,{})})]}),p("div",{className:"inner-container"})]})}function fk(e){const{onClose:t=()=>null,selectedMolecule:n}=e,[o,s]=c.exports.useState(null),i=X();c.exports.useEffect(()=>{s(n?n.molfile:null)},[n]);const r=c.exports.useCallback(u=>{var h,m;const d=(m=(h=/(?<s>M {2}V30 BEGIN BOND)(?<mol>.*?)(?<e>M {2}V30 END BOND)/gs.exec(u))==null?void 0:h.groups)==null?void 0:m.mol;s(d!=null&&d.trim()?u:null)},[s]),l=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(()=>{n?(i({type:_i,molfile:o,key:n.key}),t("replace")):(i({type:Mi,molfile:o}),t("new"))},[i,n,o,t]);return w("div",{css:mt,children:[p(eh,{initialMolfile:n==null?void 0:n.molfile,svgMenu:!0,fragment:!1,onChange:r}),p("div",{className:"footer-container",children:p(Kt,{style:{flexDirection:"row-reverse",margin:0},onDone:a,doneLabel:"Save",onCancel:l})})]})}const mk=M`
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
`;function gk({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,p("span",{children:t})]})}function xk({items:e,boxBounding:t,onClick:n}){return p("div",{className:"menu",style:{transform:`translate(${t.width}px, -${t.height}px) `},children:e==null?void 0:e.map(o=>p(gk,k(b({},o),{onClick:()=>n(o)}),o.id))})}function bk({style:e,component:t,toolTip:n="",className:o,items:s=[],onClick:i=()=>null}){var m;const r=c.exports.useRef(null),[l,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{a(!1)},[]),d=c.exports.useCallback(()=>{a(g=>!g)},[]),h=c.exports.useCallback(g=>{a(!1),i(g)},[i]);return w("div",{style:{height:"auto"},css:mk,children:[p("button",{ref:r,type:"button",css:e,onClick:d,className:o,style:{boxSizing:"border-box"},children:p(Ee,{title:n,popupPlacement:"right",children:t})}),l&&p(xk,{items:s,boxBounding:(m=r.current)==null?void 0:m.getBoundingClientRect(),onClick:h}),l&&p("div",{className:"menu-cover",onClick:u})]})}function lr(e,t,n){const{power:o=2,format:s=yk}=n||{};let i=[];for(let r=e;r<=t;r++){const l=o**r;i.push({key:l,label:s(l),value:l})}return i}function yk(e){return e>=1024*1024?`${e/(1024*1024)}M`:e>=1024?`${e/1024}K`:e}function Le(n){var o=n,{value:e=""}=o,t=G(o,["value"]);return f("div",k(b({},t),{dangerouslySetInnerHTML:{__html:e.replace(/(?<isotope>[0-9]+)/g,"<sup>$<isotope></sup>")}}))}const cl={container:{backgroundColor:"#fd000c",borderRadius:"5px",padding:"0.4rem"},text:{color:"white",margin:"0.5px",fontSize:"0.9em",listStyle:"inside"}},vk=e=>{const t=[];function n(o){Object.keys(o).forEach(s=>{typeof o[s]=="object"?n(o[s]):t.push(o[s])})}return n(e),t};function Md({style:e}){const{errors:t,isValid:n}=he(),o=c.exports.useMemo(()=>vk(t),[t]);return n?f("div",{}):f("ul",{style:b(b({},cl.container),e==null?void 0:e.container),children:o.map((s,i)=>f("li",{style:b(b({},cl.text),e==null?void 0:e.text),children:s},i))})}const rn=function(t){const u=t,{name:n="",value:o,onChange:s=()=>null}=u,i=G(u,["name","value","onChange"]),{values:r,setFieldValue:l}=he(),a=c.exports.useCallback(d=>{s(d),l(n,d)},[n,s,l]);return c.exports.useEffect(()=>{o&&l(n,o)},[n,l,o]),f(Me,b({name:n,defaultValue:o||B(r,n),onChange:a},i))},Ck=M`
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
`,Sk=lr(12,19),ul=lr(10,10,{format:e=>e}),kk=Q().shape({name:rt().required().label("Name"),frequency:ae().integer().required().label("Frequency"),"1d":Q({"1H":Q({from:ae().integer().required().label("1H ' From ' "),to:ae().integer().required().label("1H ' To ' ")}),"13C":Q().shape({from:ae().integer().required().label("13C ' From ' "),to:ae().integer().required().label("13C ' To ' ")}),lineWidth:ae().integer().min(1).required().label("Line Width"),nbPoints:ae().integer().required().label("1D Number Of Points")}),"2d":Q({nbPoints:Q({x:ae().integer().required().label("2D Number Of Points"),y:ae().integer().required().label("2D Number Of Points")})}),spectra:Q({proton:Nn(),carbon:Nn(),cosy:Nn(),hsqc:Nn(),hmbc:Nn()}).test("check-options","You must check one of the options to start prediction",e=>!!Object.values(e).includes(!0))});function wk({onClose:e=()=>null,molfile:t}){const n=c.exports.useRef(),o=X(),s=se(),[i,r]=c.exports.useState(!1),[l,a]=y0("nmrium-prediction-preferences"),{toolOptions:{data:{predictionIndex:u}}}=H(),d=c.exports.useCallback(()=>{n.current.submitForm()},[]),h=c.exports.useMemo(()=>{const S=l,{isApproved:x}=S,y=G(S,["isApproved"]);return r(x),Object.assign(ec,y,{name:`Prediction ${u+1}`})},[l,u]),m=c.exports.useCallback(x=>{(async()=>{a(k(b({},x),{isApproved:i})),o({type:St,isLoading:!0});const y=Object.entries(x.spectra).reduce((v,[C,E])=>(E&&v.push(C),v),[]).join(" , "),S=await s.showLoading(`Predict ${y} in progress`);o({type:hs,payload:{mol:t,options:x}}),S(),e()})()},[s,o,i,t,e,a]),g=c.exports.useCallback(x=>{r(x.target.checked)},[]);return w("div",{css:[mt,Ck],children:[w("div",{className:"header handle",children:[p("span",{children:"Prediction of NMR spectrum"}),p(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content",children:[w(ce,{ref:n,initialValues:h,validationSchema:kk,onSubmit:m,children:[p(Md,{}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Name :"}),p(Z,{name:"name",style:{input:{width:"200px",textAlign:"left"}}})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Spectrometer Frequency :"}),p(rn,{data:tc,style:{width:290,height:30,margin:0},name:"frequency"})]}),p("span",{className:"group-label",children:"1D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[p(Le,{value:"1H",className:"custom-label"}),p(te,{title:"From",children:p(Z,{name:"1d.1H.from",type:"number"})}),p(te,{title:"To",style:{label:{padding:"0 10px"}},children:p(Z,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[p(Le,{value:"13C",className:"custom-label"}),p(te,{title:"From",children:p(Z,{name:"1d.13C.from",type:"number"})}),p(te,{title:"To",style:{label:{padding:"0 10px"}},children:p(Z,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Line Width : "}),p(Z,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),p("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Number of Points : "}),p(rn,{data:Sk,name:"1d.nbPoints",style:{width:290,height:30,margin:0}})]}),p("span",{className:"group-label",children:"2D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Number of Points : "}),p(rn,{data:ul,name:"2d.nbPoints.x",style:{margin:0,height:30}}),p("span",{className:"middle-x",children:" X "}),p(rn,{data:ul,name:"2d.nbPoints.y",style:{margin:0,height:30}})]}),p("div",{className:"row margin-10",children:p("span",{className:"group-label",children:"Spectra "})}),w("div",{className:"row margin-10 padding-h-10",style:{justifyContent:"space-between"},children:[w("div",{className:"row",children:[p(xt,{name:"spectra.proton"}),p(Le,{value:"1H",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(xt,{name:"spectra.carbon"}),p(Le,{value:"13C",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(xt,{name:"spectra.cosy"}),p(Le,{value:"COSY",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(xt,{name:"spectra.hsqc"}),p(Le,{value:"HSQC",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(xt,{name:"spectra.hmbc"}),p(Le,{value:"HMBC",className:"nucleus-label"})]})]})]}),p("p",{className:"warning",children:"In order to predict spectra we are calling an external service and the chemical structure will leave your browser! You should never predict spectra for confidential molecules."}),w("div",{className:"warning-container",children:[p(po,{onChange:g,checked:i},String(i)),p("p",{children:"I confirm that the chemical structure is not confidential."})]})]}),p("div",{className:"footer-container",children:p(de.Done,{onClick:d,disabled:!i,children:"Predict spectrum"})})]})}const Ek=M`
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
`,Ak=[{id:"molfile",icon:p(li,{}),label:"Copy as molfile"},{id:"png",icon:p(Ul,{}),label:"Copy as PNG"},{id:"svg",icon:p(Kl,{}),label:"Export as SVG"}];function Tk({currentIndex:e,molecules:t,onMoleculeIndexChange:n=()=>null,onOpenMoleculeEditor:o=()=>null,actionsOptions:s={}}){const{rootRef:i}=gs(),r=se(),l=X(),a=fe(),u=je(),d=c.exports.useCallback(()=>{!i||Cd(i,`molSVG${e}`,"molFile")},[i,e]),h=c.exports.useCallback(()=>{!i||(Sd(i,`molSVG${e}`),r.success("MOL copied as PNG to clipboard"))},[i,r,e]),m=c.exports.useCallback(()=>{t[e]&&ys(t[e].molfile).then(v=>{v?r.success("MOLFile copied to clipboard"):r.error("copied not completed")})},[r,e,t]),g=c.exports.useCallback(({id:v})=>{switch(v){case"molfile":m();break;case"png":h();break;case"svg":d();break}},[m,h,d]),x=c.exports.useCallback(()=>{navigator.clipboard.readText().then(v=>{l({type:Mi,molfile:v})})},[l]),y=c.exports.useCallback(()=>{var v;(v=t[e])!=null&&v.key&&(n(0),l({type:Cc,payload:{key:t[e].key,assignmentData:u}}))},[t,e,n,l,u]),S=c.exports.useCallback(()=>{a.show(p(wk,{molfile:t[e]}),{position:ne.TOP_CENTER,enableResizing:!0,width:600})},[a,t,e]);return w("div",{css:Ek,children:[!s.hideExport&&p(bk,{component:p(Jo,{}),toolTip:"Export As",items:Ak,onClick:g}),!s.hidePast&&p(Ee,{title:"Paste molfile",popupPlacement:"left",children:p("button",{className:"bar-button",type:"button",onClick:x,children:p(th,{})})}),!s.hideAdd&&p(Ee,{title:"Add Molecule",popupPlacement:"left",children:p("button",{className:"bar-button",type:"button",onClick:o,"data-test-id":"panel-structures-button-add",children:p(yn,{})})}),!s.hideDelete&&p(Ee,{title:"Delete Molecule",popupPlacement:"left",children:p("button",{className:"bar-button",type:"button",onClick:y,children:p(At,{})})}),!s.hidePredict&&t&&t.length>0&&p(ve,{popupTitle:"Predict Spectra",popupPlacement:"left",onClick:S,children:p(Zl,{})}),w("p",{children:[t&&t.length>0&&`${+(e+1)} / ${t.length}`," "]})]})}function Dk(e){return e.split(",").map(n=>n.replace(/[0-9]/g,""))}function dl(e,t,n){const o=Dk(t);if(o.length>0&&Object.keys(e).length>0){const s=n==="x"?0:n==="y"?1:null;switch(s!==null&&o[s]){case e.atomLabel:return{oclIDs:[e.oclID],nbAtoms:e.nbAtoms};case"H":return{oclIDs:e.hydrogenOCLIDs,nbAtoms:e.nbAtoms*e.nbHydrogens};default:return{oclIDs:[e.oclID].concat(e.hydrogenOCLIDs),nbAtoms:e.nbAtoms+e.nbAtoms*e.nbHydrogens}}}return{oclIDs:[],nbAtoms:0}}function ei(e,t){let n=e.find(s=>s.id===t),o;if(!n){for(const s of e)if(o=s.signals.findIndex(i=>i.id===t),o>=0){n=s;break}}return{datum:n,signalIndex:o}}function Ik(e,t,n){var i;let o=[];const s=e.data.assignments;for(const r in s){const l=s[r];for(const a in l)if((i=l[a])!=null&&i.some(u=>t.includes(u))){o=o.concat(l[a]);const{datum:u,signalIndex:d}=ei(n,r);u&&(o.push(u.id),d!==void 0&&o.push(u.signals[d].id))}}return o}function Pk(e){const{highlighted:t,assignments:n}=e.data,o=t?n[t.id]:null,s=t?t.axis:null;return s&&o&&o[s]?o[s]:((o==null?void 0:o.x)||[]).concat((o==null?void 0:o.y)||[])}function Rk(e,t){let n=e?e.slice():[];const{nbAtoms:o,oclIDs:s}=t;let i=o;return s.forEach(r=>{n.includes(r)?(i*=-1,n=n.filter(l=>l!==r)):n.push(r)}),[n,i]}function Nk({displayerMode:e,activeTab:t,zones:n,ranges:o}){var T;const s=se(),i=X(),r=Tn(),l=je(),a=dt(l.data.activated?l.data.activated.id:td),[u,d]=c.exports.useState([]),[h,m]=c.exports.useState(null);c.exports.useEffect(()=>{h&&(h==="show"?r.dispatch({type:"SHOW",payload:{convertedHighlights:u}}):h==="hide"&&(r.dispatch({type:"HIDE",payload:{convertedHighlights:u}}),d([])),m(null))},[h,u,r]);const g=c.exports.useMemo(()=>{if(n||o){if(e===Y.DM_1D&&o&&o.values)return o.values;if(e===Y.DM_2D&&n&&n.values)return n.values}return[]},[e,o,n]),x=c.exports.useMemo(()=>{const R={x:[],y:[]},I=l.data.assignments;for(let N in I)I[N].x&&R.x.push(...I[N].x),I[N].y&&R.y.push(...I[N].y);return R},[l.data]),y=c.exports.useMemo(()=>x.x.concat(x.y),[x.x,x.y]),S=c.exports.useMemo(()=>{let R=[];return r.highlight.highlighted.forEach(I=>{var A;if(l.data.assignments[I]){const{datum:P}=ei(g,I),D=(A=r.highlight.sourceData)==null?void 0:A.type;P&&(D===ue.ZONE||D===ue.RANGE)&&(R=R.concat(P.signals.map(O=>Ji(l,[O.id]).length>0?O.diaIDs:[]).flat()))}}),Pk(l).concat(R)},[l,g,r.highlight.highlighted,(T=r.highlight.sourceData)==null?void 0:T.type]),v=c.exports.useCallback((R,I)=>Rk(R,I),[]),C=c.exports.useCallback((R,I)=>{var N,A,P;if(!Gt(I)&&a.activated){const{axis:D,id:O}=a.activated;if(O&&D){const L=dl(R,t,D);if(L.nbAtoms>0){const z=e===Y.DM_1D?"1D":"2D";a.toggle(L.oclIDs,z);const{datum:V,signalIndex:W}=ei(g,a.id);if(V)if(e===Y.DM_1D){const $=V;let j=[];W===void 0?j=($==null?void 0:$.diaIDs)||[]:j=((N=$==null?void 0:$.signals[W])==null?void 0:N.diaIDs)||[];const[U,ee]=v(j,L);i({type:ru,payload:{nbAtoms:ee,rangeData:V,diaIDs:U,signalIndex:W}})}else{const $=V;let j=[];W===void 0?j=((A=$[D])==null?void 0:A.diaIDs)||[]:j=((P=$==null?void 0:$.signals[W][D])==null?void 0:P.diaIDs)||[];const[U,ee]=v(j,L);i({type:gu,payload:{nbAtoms:ee,zoneData:V,diaIDs:U,axis:D,signalIndex:W}})}a.setActive(D)}else s.info("Not assigned! Different atom type or no attached hydrogens found!")}}},[a,s,g,i,e,t,v]);return{handleOnAtomHover:c.exports.useCallback(R=>{const{oclIDs:I}=dl(R,t);if(I.length>0){const N=Ik(l,I,g);d(N),m("show")}else m("hide")},[l,g,t]),handleOnClickAtom:C,currentDiaIDsToHighlight:S,assignedDiaIDsMerged:y}}const Ft={panel:M({display:"flex",overflow:"auto",flexGrow:1,width:"100%",height:"100%",flexDirection:"column"}),innerPanel:M({display:"flex",flex:"1",flexDirection:"column",overflow:"auto"}),molecule:M({display:"flex",flex:"1"}),toolbar:M({display:"flex",borderBottom:"0.55px solid rgb(240, 240, 240)",padding:"0px 10px",justifyContent:"end",height:22}),slider:M({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1,minHeight:0}),items:M({display:"flex",flexDirection:"column",flex:"1 1 0%",height:"100%",minHeight:0})};function Mk({zones:e,ranges:t,molecules:n,activeTab:o,displayerMode:s,onMoleculeChange:i,actionsOptions:r,children:l}){const[a,u]=c.exports.useState(0),[d,h]=c.exports.useState([]),m=X(),g=fe(),{currentDiaIDsToHighlight:x,handleOnAtomHover:y,handleOnClickAtom:S,assignedDiaIDsMerged:v}=Nk({zones:e,ranges:t,activeTab:o,displayerMode:s});c.exports.useEffect(()=>{n&&h(R=>(n.length>R.length&&u(d.length),n))},[d.length,n]),c.exports.useEffect(()=>{i==null||i(d[a]||null)},[a,d,i]);const C=c.exports.useCallback((R,I)=>{m({type:_i,molfile:I,key:R})},[m]),E=c.exports.useCallback((R=null)=>{g.show(p(fk,{selectedMolecule:R}),{position:ne.TOP_CENTER,width:700,height:500})},[g]),T=c.exports.useCallback(R=>{u(R)},[]);return w("div",{css:Ft.panel,children:[p(Tk,{currentIndex:a,molecules:d,onOpenMoleculeEditor:()=>E(),onMoleculeIndexChange:T,actionsOptions:r}),w("div",{css:Ft.innerPanel,children:[p("div",{css:Ft.molecule,children:p(Pd,{onChange:R=>u(R),defaultIndex:a,children:d&&d.length>0?d.map((R,I)=>{var N;return w("div",{css:Ft.items,children:[w("span",{css:Ft.toolbar,children:[p(si,{mf:R.mf})," - ",(N=R.mw)==null?void 0:N.toFixed(2)]}),p("div",{css:Ft.slider,className:"mol-svg-container",onDoubleClick:()=>E(R),style:{backgroundColor:(I+1)%2!==0?"#fafafa":"white"},children:p(ii,{children:({height:A,width:P})=>p(nh,{OCL:Et,id:`molSVG${I}`,width:P,height:A,molfile:R.molfile||"",setMolfile:D=>C(R.key,D),setSelectedAtom:S,atomHighlightColor:x&&x.length>0?"red":"#FFD700",atomHighlightOpacity:.35,highlights:x&&x.length>0?x:v,setHoverAtom:y})})})]},R.key)}):p("div",{css:Ft.slider,style:{height:"100%"},onClick:()=>E(),children:p("span",{children:"Click to draw molecule"})})})}),l]})]})}const _k=c.exports.memo(Mk),Fk={ranges:{},zones:{}};function _d({onMoleculeChange:e,children:t,actionsOptions:n}){const{molecules:o,displayerMode:s,activeTab:i}=H(),r=Se(Fk),l=(r==null?void 0:r.ranges)||{},a=(r==null?void 0:r.zones)||{};return p(_k,{molecules:o,displayerMode:s,activeTab:i,ranges:l,zones:a,onMoleculeChange:e,actionsOptions:n,children:t})}const Lk=[{key:1,value:"manual",label:"Manual"}];function Ok({onClose:e=()=>null,nucleus:t}){const n=c.exports.useRef(),o=X(),s=c.exports.useMemo(()=>{const a=Ht[t]?Object.entries(Ht[t]).map(u=>({key:u[0],value:u[0],label:u[0]}),[]):[];return Lk.concat(a)},[t]),i=c.exports.useCallback(()=>{n.current.submitForm()},[]),r=c.exports.useCallback(a=>{o({type:pu,payload:a}),e()},[o,e]);c.exports.useEffect(()=>{function a(u){const[d,h]=u.range;n.current.setValues(k(b({},n.current.values),{from:d,to:h}))}return pe.on("brushEnd",a),()=>{pe.off("brushEnd",a)}},[]);const l=c.exports.useCallback(a=>{const m=Ht[t][a]||{delta:0},{delta:d=0}=m,h=G(m,["delta"]);n.current.setValues(b(k(b({},n.current.values),{targetX:d}),h))},[t]);return w("div",{css:mt,children:[w("div",{className:"header handle",children:[p("span",{children:"Spectra calibration"}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",style:{flex:1},children:w(ce,{ref:n,initialValues:{from:-1,to:1,nbPeaks:1,targetX:0},onSubmit:r,children:[w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Options :"}),p(Me,{data:s,style:{width:270,height:30,marginBottom:"20px"},onChange:l})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Range :"}),p(te,{title:"From : ",children:p(Z,{name:"from",type:"number"})}),p(te,{title:"To : ",children:p(Z,{name:"to",type:"number"})})]}),p("div",{className:" margin-10",children:p(te,{className:"custom-label",title:"Number of Peaks : ",children:p(Z,{name:"nbPeaks",type:"number"})})}),p("div",{className:" margin-10",children:p(te,{className:"custom-label",title:"Target PPM :",children:p(Z,{name:"targetX",type:"number"})})})]})}),p("div",{className:"footer-container",children:p(de.Done,{onClick:i,children:"Done"})})]})}function Fd(e,t=null){try{return new Function("args",`return ${e}`)(t)}catch(n){return n}}const $k=`function run(data) {

  return JSON.stringify(data,undefined, 2);
  
}(args);
`;function Hk({data:e}){const{values:t,setFieldValue:n}=he(),[o,s]=c.exports.useState(t.code?t.code:$k),[i,r]=c.exports.useState("");return c.exports.useEffect(()=>{const l=Fd(o,e);l instanceof Error?r(l.message):(n("code",o),r(l))},[o,e,n]),w("div",{style:{marginTop:"20px"},children:[p("textarea",{value:o,onChange:l=>s(l.target.value),style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",backgroundColor:"#fcfcfc",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}}),p("p",{style:{marginBottom:"5px"},children:"Result:"}),p("textarea",{value:i,readOnly:!0,style:{border:"0.55px solid #f3f3f3",fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}})]})}var zk=c.exports.memo(Hk);const Vk=M`
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
`;function jk({data:e,onAfterSave:t},n){const o=X(),s=c.exports.useRef(),[i,r]=c.exports.useState({});c.exports.useImperativeHandle(n,()=>({saveSetting(){s.current.submitForm()}})),c.exports.useEffect(()=>{const h=Object.keys(e.columns).reduce((m,g)=>(m[g]=k(b({},e.columns[g]),{tempKey:g}),m),{});r(h),s.current.setValues({columns:h,code:e.code})},[e]);const l=c.exports.useMemo(()=>Object.keys(i),[i]),a=c.exports.useMemo(()=>{function h(){return l.reduce((m,g)=>(m[g]=Q().shape(k(b({tempKey:rt().required().test("unique","must be unique column name",x=>{const y=s.current.values.columns;return Object.keys(y).reduce((S,v)=>(y[v].tempKey===x&&S.push(x),S),[]).length===1})},i[g].type===Xo.FORMULA?{formula:rt().required()}:{}),{index:rt().required()})),m),{})}return Q().shape({columns:Q().shape(h())})},[i,l,s]),u=c.exports.useCallback(h=>{t==null||t(!0);const m=Object.entries(h.columns).reduce((g,[x,y])=>(g[x]=b(b({},i[x]),y),g),{});o({type:uu,payload:{code:h.code,columns:m}})},[i,o,t]),d=c.exports.useCallback(h=>{r(m=>k(b({},m),{[`temp${h}`]:{tempKey:"",type:"FORMULA",valueKey:"value",formula:"",index:h}}))},[]);return w(ce,{ref:s,initialValues:{columns:i,code:null},validationSchema:a,onSubmit:u,children:[l&&w("table",{css:Vk,children:[p("thead",{children:w("tr",{children:[p("th",{className:"counter",children:"#"}),p("th",{className:"label",children:"Label"}),p("th",{children:"value"}),p("th",{className:"index",children:"index"})]})}),p("tbody",{children:l.map((h,m)=>w("tr",{children:[p("td",{className:"counter",children:m+1}),p("td",{className:"label",children:p(Z,{name:`columns.${h}.tempKey`,value:i[h].tempKey},h)}),p("td",{children:i[h].type===Xo.FORMULA?p(Z,{name:`columns.${h}.formula`,value:i[h].formula}):p("div",{className:"input disbale"})}),p("td",{className:"index",children:p(Z,{name:`columns.${h}.index`,value:i[h].index})}),p("td",{className:"operation-col",children:l.length===m+1&&p("button",{className:"add",type:"button",onClick:()=>d(m+1),children:p(yn,{})})})]},h))})]}),p(zk,{data:e})]})}var Bk=c.exports.forwardRef(jk);const bo={container:M`
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
  `};function Xk({data:e=[],onSelect:t,renderItem:n=null}){const o=c.exports.useRef(null);return c.exports.useLayoutEffect(()=>{var s;if(o.current){const i=(s=o.current)==null?void 0:s.getBoundingClientRect();i.right>window.innerWidth&&(o.current.style.right=`${i.right-window.innerWidth}px`)}},[]),p("div",{css:bo.container,ref:o,children:p("ul",{css:bo.ul,children:e.map((s,i)=>p("li",{css:bo.li,onClick:()=>t(i),children:(n==null?void 0:n(s))||p("span",{css:bo.label,children:s.label})},s.key))})})}const pl={container:M`
    position: relative;
    padding: 2px;
    border-radius: 10px;
    width: max-content;
    display: inline-block;
    border: 0.55px solid lightgray;
    font-size: 10px;
  `,button:M`
    width: 100%;
  `};function ar(e){const{data:t,selectedKey:n,onSelect:o,formatSelectedValue:s=g=>g.label,renderItem:i=null,style:r}=e,[l,a]=c.exports.useState(!1),[u,d]=c.exports.useState(),h=c.exports.useRef(null);c.exports.useEffect(()=>{if(n){const g=t.find(x=>x.key===n)||null;d(g)}},[n,t]),c.exports.useEffect(()=>{function g(){a(!1)}return window.addEventListener("click",g),()=>window.removeEventListener("click",g)},[]);const m=c.exports.useCallback(g=>{d(t[g]),o==null||o(t[g])},[t,o]);return w("div",{className:"dropdown",ref:h,css:[pl.container,r],children:[p("button",{css:pl.button,type:"button",onClick:g=>{a(x=>!x),g.stopPropagation()},children:u?s(u):p(oh,{})}),l&&p(Xk,{data:t,onSelect:m,renderItem:i})]})}const Yk=e=>M`
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
`,Gk=[{key:Hn.RELATIVE,label:"Relative"},{key:Hn.ABSOLUTE,label:"Absolute"},{key:Hn.MIN,label:"Min Intensity"},{key:Hn.MAX,label:"Max Intensity"}];function Wk({charLabel:e,rangeLabel:t,data:n,onColumnFilter:o}){const s=X(),i=c.exports.useCallback(()=>{s({type:ji,colKey:e})},[e,s]);return w("div",{css:Yk,children:[w("div",{className:"container",children:[n.type===Xo.NORMAL&&p("div",{className:"dropDown-container",children:p(ar,{data:Gk,formatSelectedValue:r=>r.label.substring(0,3),selectedKey:n.valueKey,onSelect:o})}),w("div",{className:"label-container",children:[w("span",{className:"label",children:[" ",e]}),p("span",{className:"label",children:t})]})]}),p(Id,{onDelete:i})]})}function Zk({data:e,activeTab:t}){const n=Be(t),o=c.exports.useMemo(()=>{const l=B(e,"code","");return Fd(l,e)},[e]),s=X(),i=c.exports.useCallback((l,a)=>{s({type:du,payload:{columnKey:l,valueKey:a}})},[s]),r=c.exports.useMemo(()=>{const l=[{Header:"#",index:0,Cell:({row:d})=>d.index+1}];function a(d,h,m){const g=d.original[h][m];return g instanceof Error?f("span",{style:{color:"red"},children:g.message}):n(g)}function u(d,h){return f(Wk,{charLabel:h,data:d,onColumnFilter:m=>i(h,m.key),rangeLabel:d.from&&d.to?`${n(d.from)} - ${n(d.to)}`:""})}return e.columns&&Object.keys(e.columns).forEach(d=>{const{valueKey:h,index:m}=e.columns[d];vs(l,{index:m+1,Cell:({row:g})=>a(g,d,h),Header:()=>u(e.columns[d],d),id:d})}),l.sort((d,h)=>d.index-h.index)},[i,e.columns,n]);return e.values&&e.values.length>0?_(c.exports.Fragment,{children:[f(Dn,{data:e.values,columns:r}),f("div",{style:{width:"100%",padding:"10px"},dangerouslySetInnerHTML:{__html:o}})]}):f(Nt,{})}var Uk=c.exports.memo(Zk);function Kk({activeTab:e,spectraAnalysis:t}){const[n,o]=c.exports.useState(!1),s=c.exports.useRef(),i=se(),r=fe(),l=X(),a=c.exports.useMemo(()=>{const{values:y,options:{columns:S,code:v}}=t[e]||{values:{},options:{columns:{},code:null}};return{values:Object.values(y),columns:S,code:v}},[e,t]),u=c.exports.useCallback(()=>{o(!n)},[n]),d=c.exports.useCallback(()=>{s.current.saveSetting()},[]),h=c.exports.useCallback(()=>{o(!1)},[]),m=c.exports.useCallback(y=>{pe.emit("showYSpectraTrackers",y)},[]),g=c.exports.useCallback(()=>{l({type:ut}),r.show(p(Ok,{nucleus:e}),{isBackgroundBlur:!1,position:ne.TOP_CENTER,width:500})},[e,r,l]),x=c.exports.useCallback(()=>{(async()=>{const y=Hy(t,e);await ys(y)?i.success("Data copied to clipboard"):i.error("copy to clipboard failed")})()},[e,i,t]);return w("div",{css:[Rt,n&&M`
            .table-container th {
              position: relative;
            }
          `],children:[!n&&w(ot,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,onSettingClick:u,children:[p(ve,{popupTitle:"Copy To Clipboard",onClick:x,children:p(Jo,{})}),p(ve,{popupTitle:"Spectra calibration",onClick:g,children:p(sh,{style:{fontSize:"18px"}})}),p(Ge,{popupTitle:"Y Spectra Tracker",popupPlacement:"right",onClick:m,children:p(ih,{})})]}),n&&p(Pn,{onSave:d,onClose:u}),p("div",{className:"inner-container",children:n?p(Bk,{data:a,onAfterSave:h,ref:s}):p(Uk,{data:a,activeTab:e})})]})}const qk=c.exports.memo(Kk);function Jk(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=H();return e?p(qk,{activeTab:e,spectraAnalysis:t,displayerKey:n}):p("div",{})}const Ms={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},Qk=[{id:1,label:"Peak Number :",checkController:"showPeakNumber",formatController:"peakNumberFormat"},{id:2,label:"Peak Index : ",checkController:"showPeakIndex",formatController:"peakIndexFormat"},{id:3,label:"\u03B4 (ppm) :",checkController:"showDeltaPPM",formatController:"deltaPPMFormat"},{id:4,label:"\u03B4 (Hz) :",checkController:"showDeltaHz",formatController:"deltaHzFormat"},{id:5,label:"Peak Width",checkController:"showPeakWidth",formatController:"peakWidthFormat"},{id:6,label:"Intensity :",checkController:"showIntensity",formatController:"intensityFormat"}];function ew({nucleus:e,preferences:t,innerRef:n}){const o=se(),s=c.exports.useRef(null),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,d)=>(u[d]=md,u),{}),a=ft(t.current,"formatting.panels.peaks");s.current.setValues(a||l)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"peaks",value:l}}),o.success("Peaks preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Ms.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>_("div",{style:Ms.groupContainer,children:[f(Le,{style:Ms.header,value:l}),Qk.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`,hideFormat:a.formatController==="deltaPPMFormat"},a.id))]},l))})})}const tw=c.exports.memo(ew);function nw(e,t){const n=Cs(),o=le();return f(tw,{innerRef:t,nucleus:n,preferences:o})}var ow=c.exports.forwardRef(nw);function sw({activeTab:e,preferences:t,data:n,info:o}){const s=X(),i=Be(o.nucleus),r=c.exports.useCallback((m,g)=>{m.preventDefault(),m.stopPropagation();const x=g.original;s({type:rs,data:{id:x.id,xIndex:x.xIndex}})},[s]),l=c.exports.useMemo(()=>ft(t.current,`formatting.panels.peaks.[${e}]`,md),[e,t]),a=c.exports.useCallback((m,g)=>{const x=parseFloat(m.target.value)-parseFloat(g.value);s({type:Di,shiftValue:x})},[s]),u=c.exports.useMemo(()=>[{showWhen:"showPeakNumber",index:1,Header:"#",Cell:({row:m})=>m.index+1,style:{width:"1%",maxWidth:"40px",minWidth:"40px"}},{showWhen:"showPeakIndex",index:2,Header:"index",accessor:m=>Ye(m.xIndex,l.peakIndexFormat)},{showWhen:"showDeltaPPM",index:3,Header:"\u03B4 (ppm)",accessor:m=>i(m.value),Cell:({row:m})=>f(at,{value:i(m.original.value),onSave:g=>a(g,m.original),type:"number"})},{showWhen:"showDeltaHz",index:4,Header:"\u03B4 (Hz)",accessor:m=>Ye(m.valueHz,l.deltaHzFormat)},{showWhen:"showIntensity",index:5,Header:"Intensity",style:{maxWidth:"80px"},accessor:m=>Ye(m.intensity,l.intensityFormat)},{showWhen:"showPeakWidth",index:6,Header:"Peak Width",accessor:m=>Ye(m.peakWidth,l.peakWidthFormat)}],[i,l,a]),d=c.exports.useMemo(()=>[{index:20,Header:"",style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:m})=>f("button",{type:"button",className:"delete-button",onClick:g=>r(g,m),children:f(At,{})})}],[r]),h=c.exports.useMemo(()=>{let m=[...d];for(const x of u){const g=x,{showWhen:y}=g,S=G(g,["showWhen"]);l[y]&&vs(m,S)}return m.sort((x,y)=>x.index-y.index)},[u,d,l]);return n&&n.length>0?f(Dn,{data:n,columns:h,approxItemHeight:20,enableVirtualScroll:!0}):f(Nt,{})}var iw=c.exports.memo(sw);function rw({peaks:e,info:t,xDomain:n,activeTab:o,preferences:s}){var E;const[i,r]=c.exports.useState(!1),[l,a]=c.exports.useState(!1),u=Be(t.nucleus),d=X(),h=fe(),m=c.exports.useRef(),g=c.exports.useCallback(()=>{d({type:rs,data:null})},[d]),x=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:g},{text:"No"}]})},[h,g]),y=c.exports.useCallback(()=>{a(!l)},[l]),S=c.exports.useCallback(()=>{m.current.saveSetting(),a(!1)},[]),v=c.exports.useCallback(()=>{r(!i)},[i]),C=c.exports.useMemo(()=>{function T(R){return R*1e5>=n[0]*1e5&&R*1e5<=n[1]*1e5}return e!=null&&e.values?(i?e.values.filter(I=>T(I.x)):e.values).map(I=>{const N=Number(u(I.x));return{value:N,valueHz:t!=null&&t.originFrequency?Number(N)*t.originFrequency:"",id:I.id,intensity:I.y,peakWidth:I.width?I.width:"",isConstantlyHighlighted:T(N)}}).sort((I,N)=>I.value-N.value):[]},[i,u,t,e,n]);return w("div",{css:[Rt,l&&M`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!l&&p(ot,{counter:(E=e==null?void 0:e.values)==null?void 0:E.length,onDelete:x,deleteToolTip:"Delete All Peaks",onFilter:v,filterToolTip:i?"Show all peaks":"Hide peaks out of view",filterIsActive:i,counterFiltered:C.length,showSettingButton:!0,onSettingClick:y}),l&&p(Pn,{onSave:S,onClose:y}),p("div",{className:"inner-container",children:l?p(ow,{ref:m}):p(iw,{data:C,activeTab:o,preferences:s,info:t})})]})}const lw=c.exports.memo(rw),aw={peaks:null,info:{}};function cw(){const{xDomain:e,activeTab:t}=H(),{peaks:n,info:o}=Se(aw),s=le();return p(lw,{peaks:n,info:o,xDomain:e,activeTab:t,preferences:s})}const uw=M`
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
`;function dw({text:e,onClose:t,onCopyClick:n}){return w("div",{css:uw,children:[w("div",{className:"mainButtonsContainer handle",children:[p("button",{type:"button",onClick:()=>n(e),children:p(li,{})}),p(me,{onClick:t})]}),p("div",{className:"innerContainer",dangerouslySetInnerHTML:{__html:e}})]})}const pw=M`
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
`;function hw({ranges:e,info:t,onUnlink:n,onFilterActivated:o,onSettingClick:s,isFilterActive:i,filterCounter:r,showMultiplicityTrees:l,showJGraph:a,showRangesIntegrals:u}){var O;const d=X(),h=fe(),m=se(),g=le(),x=je(),y=B(e,"options.sum",null),S=c.exports.useCallback(L=>{d({type:Wc,value:L}),h.close()},[d,h]),v=c.exports.useCallback(()=>{h.show(p(Nd,{onClose:()=>h.close(),onSave:S,header:y?`Set new Ranges Sum (Current: ${Number(y).toFixed(2)})`:"Set new Ranges Sum",sumOptions:e==null?void 0:e.options}))},[S,y,h,e==null?void 0:e.options]),C=c.exports.useCallback(()=>{n()},[n]),E=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:C},{text:"No"}]})},[C,h]),T=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All ranges will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{d({type:ds,payload:{data:{assignmentData:x}}})}},{text:"No"}]})},[x,d,h]),R=c.exports.useCallback(()=>{d({type:Au})},[d]),I=c.exports.useCallback(()=>{d({type:Tu})},[d]),N=c.exports.useCallback(()=>{d({type:Nu})},[d]),A=c.exports.useCallback(L=>{(async()=>await AC(L)?m.success("Data copied to clipboard"):m.error("copy to clipboard failed"))()},[m]),P=c.exports.useCallback(()=>{const{originFrequency:L,nucleus:z}=t,V=B(g.current,`formatting.nuclei[${z.toLowerCase()}]`,"0.0"),W=Br(V.ppm),$=Br(V.hz),j=rh(e.values,{nucleus:z,nbDecimalDelta:W,nbDecimalJ:$,observedFrequency:L});h.show(p(dw,{text:j,onCopyClick:A,onClose:()=>h.close()}),{})},[t,h,g,e.values,A]),D=c.exports.useCallback(L=>{d({type:Su,payload:L})},[d]);return p("div",{css:pw,children:w(ot,{counter:(O=e==null?void 0:e.values)==null?void 0:O.length,onDelete:T,deleteToolTip:"Delete All Ranges",onFilter:o,filterToolTip:i?"Show all ranges":"Hide ranges out of view",filterIsActive:i,counterFiltered:r,showSettingButton:!0,onSettingClick:s,children:[p(ve,{popupTitle:"Preview publication string",popupPlacement:"right",onClick:P,className:"btn preview-publication-icon",children:p(Jo,{})}),p(ve,{popupTitle:y?`Change Ranges Sum (${Number(y).toFixed(2)})`:"Change Ranges Sum",popupPlacement:"right",onClick:v,className:"btn icon",children:p(Gl,{})}),p(ve,{popupTitle:"Remove all Assignments",popupPlacement:"right",onClick:E,disabled:!e||!e.values||e.values.length===0,className:"btn icon",children:p(ql,{})}),p(Ge,{popupTitle:l?"Hide Multiplicity Trees in Spectrum":"Show Multiplicity Trees in Spectrum",popupPlacement:"right",onClick:R,disabled:!e||!e.values||e.values.length===0,children:p(lh,{style:{pointerEvents:"none",fontSize:"12px"}})}),p(Ge,{popupTitle:a?"Hide J Graph":"Show J Graph",popupPlacement:"right",onClick:N,disabled:!e||!e.values||e.values.length===0,children:p(ah,{style:{pointerEvents:"none",fontSize:"12px"}})}),p(Ge,{popupTitle:u?"Hide integrals":"Show integrals",popupPlacement:"right",onClick:I,defaultValue:u,disabled:!e||!e.values||e.values.length===0,children:p(Jl,{style:{pointerEvents:"none",fontSize:"12px"}})}),p(Ge,{className:"icon",popupTitle:"fix integral values",popupPlacement:"right",onClick:D,children:p(Wl,{})})]})})}const Ln={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2},inputWrapper:{width:"100px",flex:"4",borderRadius:"5px"}},fw=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function mw({nucleus:e,preferences:t,innerRef:n}){const o=se(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,d)=>(u[d]=Ki(d),u),{}),a=ft(t.current,"formatting.panels.ranges");s.current.setValues(a||l)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"ranges",value:l}}),o.success("ranges preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Ln.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>_("div",{style:Ln.groupContainer,children:[f(Le,{style:Ln.header,value:l}),fw.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id)),f(te,{title:"J Graph tolerance (Hz) :",style:{label:Ln.inputLabel,wrapper:Ln.inputWrapper},children:f(Z,{name:`${l}.jGraphTolerance`,type:"number"})})]},l))})})}const gw=c.exports.memo(mw);function xw(e,t){const n=Cs(),o=le();return f(gw,{innerRef:t,preferences:o,nucleus:n})}var bw=c.exports.forwardRef(xw);function Ld(e,t=null){const[n,o]=c.exports.useState(t),s=c.exports.useMemo(()=>{const l=e.slice();return n!==null&&l.sort((a,u)=>n.direction==="asc"?B(a,n.key,0)-B(u,n.key,0):n.direction==="desc"?B(u,n.key,0)-B(a,n.key,0):0),l},[e,n]),i=c.exports.useCallback(l=>{var d;const a=(d=l.currentTarget)==null?void 0:d.id;let u="asc";if(a&&n&&n.key===a)switch(n.direction){case"asc":u="desc";break;case"desc":u="original";break;default:u="asc";break}o({key:a,direction:u})},[n]),r=c.exports.useCallback(l=>{const a={flag:null,content:" "};if(!n||n.key!==l)return a;switch(n.direction){case"desc":return{flag:!0,content:" \u25BC"};case"asc":return{flag:!1,content:" \u25B2"};default:return a}},[n]);return{items:s,isSortedDesc:r,onSort:{onClick:i}}}function yo(e,t){return B(e,t,!1)}function yw({rowSpanTags:e,value:t,onHoverRange:n,format:o}){return f("td",k(b(b({},e),n),{children:Ye(t,o)}))}const vw=e=>{const{onChange:t=()=>null,enableValidation:n=!0}=e,{values:o,errors:s}=he();return c.exports.useEffect(()=>{n?Object.keys(s).length===0&&t(o):t(o)},[o,n,s,t]),null},On={container:M`
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
  `};function Cw({onFocus:e,onBlur:t,range:n},o){const{values:s,setFieldValue:i}=he(),{activeTab:r}=H(),l=Be(r),a=c.exports.useCallback(h=>{const m={multiplicity:"m",kind:"signal",delta:Number(h.newSignalDelta),js:[{multiplicity:Vt("m"),coupling:""}]},g=s.signals.slice().concat(m);i("signals",g),i("activeTab",String(g.length-1))},[i,s.signals]),u=c.exports.useMemo(()=>Q().shape({newSignalDelta:ae().test("test-range","",function(m){const{path:g,createError:x}=this;if(m&&m>n.from&&m<n.to)return!0;const y=` ${m?m.toFixed(5):0} ppm out of the range`;return x({path:g,message:y})}).required()}),[n]),d=c.exports.useCallback(()=>{o.current.submitForm()},[o]);return p("div",{css:On.container,children:w("div",{children:[p("p",{css:On.infoText,children:"Edit or select a delta value of new signal (ppm):"}),w(ce,{ref:o,validationSchema:u,initialValues:{newSignalDelta:(n.from+n.to)/2},onSubmit:a,children:[p("div",{css:On.inputContainer,children:p(Z,{name:"newSignalDelta",type:"number",placeholder:"\u{1D6C5} (ppm)",onFocus:e,onBlur:t,style:{input:{width:"250px",height:"30px"}},checkErrorAfterInputTouched:!1})}),w("p",{css:On.inputInfo,children:["[ ",`${l(n.from)} ppm - ${l(n.to)} ppm`," ]"]}),p(de,{css:On.addSignalBtn,onClick:d,children:p(yn,{title:"Add new signal"})})]})]})})}var Sw=c.exports.forwardRef(Cw);const kw={input:{width:"50px",height:"26px",borderWidth:0,margin:"0 5px"}};function ww({signal:e,index:t,onFocus:n}){return _("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{children:"\u{1D6C5}: "}),f(Z,{name:`signals.${t}.delta`,type:"number",placeholder:"J (Hz)",onFocus:n,style:kw,checkErrorAfterInputTouched:!1}),f("span",{children:e.js.map(o=>Vt(o.multiplicity)).join("")})]})}const Ew=M`
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
`;function Aw({push:e,remove:t,onFocus:n,onBlur:o}){const{values:s,setFieldValue:i}=he(),r=c.exports.useCallback((a,u)=>{qn(a)||i(u,"")},[i]),l=c.exports.useMemo(()=>Kn.map(a=>k(b({key:a.value},a),{value:a.label})),[]);return p("table",{css:Ew,children:w("tbody",{children:[w("tr",{children:[p("th",{children:"#"}),p("th",{children:"Multiplicity"}),p("th",{children:"J (Hz)"}),p("th",{children:""})]}),B(s,`signals[${s.activeTab}].js`,[]).map((a,u)=>w("tr",{children:[p("td",{children:u+1}),p("td",{children:p(rn,{className:"selectBox",name:`signals.${s.activeTab}.js.${u}.multiplicity`,data:l,onChange:d=>r(d,`signals.${s.activeTab}.js.${u}.coupling`)})}),p("td",{children:p(Z,{name:`signals.${s.activeTab}.js.${u}.coupling`,type:"number",placeholder:"J (Hz)",disabled:!qn(a.multiplicity),onFocus:n,onBlur:o,style:{input:{width:"100%",height:"26px"}},checkErrorAfterInputTouched:!1})}),p("td",{children:p(de,{className:"delete-button",onClick:()=>{t(u)},children:p(At,{className:"icon",title:"Delete coupling"})})})]},`editCouplings${s.activeTab}${u}`)),p("tr",{}),p("tr",{children:p("td",{colSpan:4,children:p(de,{className:"add-button",onClick:()=>e({multiplicity:Vt("m"),coupling:""}),children:p(yn,{title:"Add new coupling"})})})})]})})}var Tw=c.exports.memo(Aw);const Dw=M`
  border-spacing: 0;
  width: 100%;
  font-size: 12px;
  height: 100%;

  margin: 0;
  padding: 0.4rem;
  text-align: center;
`;function Iw({onFocus:e,onBlur:t}){const{values:n}=he();return p("div",{css:Dw,children:p(ch,{name:`signals.${n.activeTab}.js`,render:({push:o,remove:s})=>p("div",{children:p(Tw,{push:o,remove:s,onFocus:e,onBlur:t})})})})}var Pw=c.exports.memo(Iw);const Rw=M`
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
`,Nw=M`
  color: red;
`,Mw=M`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function _w({range:e}){const t=c.exports.useRef(),[n,o]=c.exports.useState(null),{values:s,setFieldValue:i,errors:r}=he(),{activeTab:l}=H(),{info:a}=Se({info:{}}),u=Be(l);c.exports.useEffect(()=>{function v(C){if((a==null?void 0:a.originFrequency)&&n)if(s.activeTab==="addSignalTab")t.current.setValues({[n]:(C.range[1]-C.range[0])/2+C.range[0]});else if(n.includes("delta"))i(n,(C.range[1]-C.range[0])/2+C.range[0]);else{const E=Number(u(Math.abs(C.range[0]-C.range[1])*a.originFrequency));i(n,E)}o(null)}return pe.on("brushEnd",v),()=>{pe.off("brushEnd",v)}},[n,i,s.activeTab,u,a]),c.exports.useEffect(()=>{function v(C){n&&(s.activeTab==="addSignalTab"?t.current.setValues({[n]:C.xPPM}):n.includes("delta")&&i(n,C.xPPM)),o(null)}return pe.on("mouseClick",v),()=>{pe.off("mouseClick",v)}},[s.activeTab,n,i]);const d=c.exports.useCallback(v=>{o(v.target.name)},[o]),h=c.exports.useCallback(({tabid:v})=>{i("activeTab",v)},[i]),m=c.exports.useCallback(({tabid:v})=>{const C=s.signals.filter((E,T)=>T!==Number(v));i("signals",C)},[i,s.signals]);c.exports.useEffect(()=>{i("activeTab",s.signals.length>0?(s.signals.length-1).toString():"addSignalTab")},[i,s.signals.length]);const g=c.exports.useCallback(v=>!!((r==null?void 0:r.signals)&&(r==null?void 0:r.signals[v])),[r]),x=c.exports.useMemo(()=>{const v=s.signals.length>0?s.signals.map((E,T)=>p(Ne,{tabid:`${T}`,tabstyles:g(T)?Nw:Mw,canDelete:!0,render:()=>p(ww,{signal:E,index:T,onFocus:d}),children:p(Pw,{onFocus:d})},`signalForm${T}`)):[],C=p(Ne,{tablabel:"+",tabid:"addSignalTab",canDelete:!1,className:"add-signal-tab",children:p(Sw,{onFocus:d,range:e,ref:t})},"addSignalTab");return v.concat(C)},[d,e,g,s.signals]),y=p("p",{className:"infoText",children:"Focus on an input field and press Shift + Drag & Drop to draw a coupling constant in spectrum view."}),S=p("p",{className:"infoText",children:"Focus on the input field and press Shift + Left mouse click to select new signal delta value in spectrum view."});return w("div",{children:[p("div",{css:Rw,children:r.signals&&(r.signals.noSignals||r.signals.noCouplings)?w("div",{children:[p("p",{className:"errorText",children:r.signals.noSignals||r.signals.noCouplings[0].message}),r.signals.noSignals?S:null]}):s.activeTab==="addSignalTab"?S:y}),p(In,{activeTab:s.activeTab,onClick:h,onDelete:m,children:x})]})}var Fw=c.exports.memo(_w);const Lw=()=>c.exports.useMemo(()=>Q().shape({signals:Hs().of(Q().shape({j:Hs().of(Q().shape({multiplicity:rt().required(),coupling:uh().test("checkValue","",function(t){const{path:n,createError:o}=this,s=qn(this.parent.multiplicity);return!s&&isNaN(t)||s&&!isNaN(t)?!0:o({path:n,message:`${n} is required`})})})).min(1,"There must be at least one coupling in a signal")})).min(1,"There must be at least one signal in a range!")}),[]),Ow=M`
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
`;function $w({onSaveEditRangeModal:e=()=>null,onCloseEditRangeModal:t=()=>null,onZoomEditRangeModal:n=()=>null,range:o,automaticZoom:s=!0}){const i=c.exports.useRef(null),{activeTab:r}=H(),l=X(),a=Be(r),u=Lw(),d=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{s&&d()},[s,d]);const h=c.exports.useCallback(()=>{t()},[t]),m=c.exports.useCallback(v=>v.filter(C=>C.coupling!=="").map(C=>k(b({},C),{multiplicity:Vt(C.multiplicity)})),[]),g=c.exports.useCallback(v=>v.map(C=>k(b({id:q()},C),{multiplicity:C.js.map(E=>Vt(E.multiplicity)).join(""),js:m(C.js)})),[m]),x=c.exports.useCallback(v=>{(async()=>{const C=b({},o);C.signals=g(v.signals),await e(C),h()})()},[g,h,e,o]),y=c.exports.useMemo(()=>{const v=o.signals.map(C=>{let E=0;const T=[];return C.multiplicity.split("").forEach(R=>{let I={multiplicity:R,coupling:""};qn(R)&&(I=b({},C.js[E]),I.coupling=Number(a(I.coupling)),E++),I.multiplicity=Vt(I.multiplicity),T.push(I)}),k(b({},C),{js:T})});return{activeTab:"0",signals:v}},[a,o]),S=c.exports.useCallback(v=>{const C=g(v.signals);l({type:Eu,payload:{tempRange:Object.assign({},o,{signals:C})}})},[l,g,o]);return p("div",{css:Ow,children:w(ce,{ref:i,initialValues:y,validationSchema:u,onSubmit:x,children:[w("div",{className:"header handle",children:[p(de,{onClick:d,className:"zoom-button",children:p(eo,{title:"Set to default view on range in spectrum"})}),p("span",{children:` Range and Signal edition: ${a(o.from)} ppm to ${a(o.to)} ppm`}),p(rr,{onClick:()=>i.current.submitForm(),popupTitle:"Save and exit"}),p(me,{onClick:h})]}),p(Fw,{range:o}),p(vw,{onChange:S})]})})}function Hw(e){const t=X(),n=fe(),o=je(),s=c.exports.useCallback(()=>{const d=Math.abs(e.from-e.to);t({type:ls,xDomain:[e.from-d,e.to+d]})},[t,e.from,e.to]),i=c.exports.useCallback(()=>{t({type:ds,payload:{data:{id:e.id,assignmentData:o}}})},[o,t,e.id]),r=c.exports.useCallback(d=>{t({type:ou,payload:{data:{rowData:e,value:d}}})},[t,e]),l=c.exports.useCallback(d=>{t({type:su,payload:{editedRowData:d,assignmentData:o}})},[o,t]),a=c.exports.useCallback(()=>{t({type:ut}),n.close()},[t,n]),u=c.exports.useCallback(()=>{t({type:co,payload:{selectedTool:F.editRange.id,tempRange:e}}),n.show(f($w,{onCloseEditRangeModal:a,onSaveEditRangeModal:l,onZoomEditRangeModal:s,range:e}),{position:ne.MIDDLE_RIGHT,transition:Qe.SCALE,isBackgroundBlur:!1})},[a,t,n,e,l,s]);return c.exports.useMemo(()=>({editRange:u,deleteRange:i,zoomRange:s,changeRangeSignalKind:r}),[r,i,u,s])}const zw=M`
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
`,Vw={marginLeft:2,marginRight:2,border:"none",height:"20px"};function jw({rowData:e,onHoverSignal:t,rowSpanTags:n}){const{editRange:o,deleteRange:s,changeRangeSignalKind:i,zoomRange:r}=Hw(e);return w(c.exports.Fragment,{children:[p("td",k(b({},t),{children:p(Me,{onChange:i,data:ci,defaultValue:e.tableMetaInfo.signal.kind,style:Vw})})),w("td",k(b({},n),{css:zw,children:[p("button",{type:"button",className:"delete-button",onClick:s,children:p(At,{})}),p("button",{type:"button",className:"zoom-button",onClick:r,children:p(eo,{title:"Zoom to range in spectrum"})}),p("button",{type:"button",className:"edit-button",onClick:o,children:p(Ql,{color:"blue"})})]}))]})}function Bw({rowData:e,onHoverSignal:t}){const n=B(e,"tableMetaInfo.signal.js");return f("td",k(b({},t),{children:n==null?void 0:n.map(o=>isNaN(o.coupling)?"":o.coupling.toFixed(1)).join(",")}))}const hl={color:"red",fontWeight:"bold"};function Xw({rowData:e,assignment:t,highlight:n,onUnlinkVisibilityChange:o,unlinkVisibility:s,onLink:i,onUnlink:r,rowSpanTags:l,onHover:a,highlightData:u}){var g;const d=c.exports.useMemo(()=>B(e,"diaIDs",0),[e]),h=c.exports.useCallback(x=>{o==null||o(x)},[o]),m=c.exports.useMemo(()=>{var y;return t.isActive||t.isOver||n.isActive&&((y=u.highlight.sourceData)==null?void 0:y.type)!==ue.SIGNAL?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"}},[t.isActive,t.isOver,n.isActive,(g=u.highlight.sourceData)==null?void 0:g.type]);return f("td",k(b(b({},l),a),{onClick:x=>i==null?void 0:i(x,t),children:e.nbAtoms!==void 0&&e.nbAtoms>0?e.diaIDs&&e.diaIDs.length>0?_("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[e.nbAtoms," "," ( ",f("span",{style:m,children:d.length})," ) ",f("sup",{children:f("button",{type:"button",style:{visibility:s?"visible":"hidden",padding:0,margin:0},onClick:x=>r==null?void 0:r(x,!0),children:f(Qo,{color:"red"})})})]}):t.isActive?_("div",{children:[`${e.nbAtoms} (`,f("span",{style:hl,children:"0"}),")"]}):e.nbAtoms:t.isActive?_("div",{children:["0 (",f("span",{style:hl,children:"0"}),")"]}):""}))}var Yw=c.exports.memo(Xw);function Gw({value:e,rowSpanTags:t,onHoverRange:n,format:o}){return f("td",k(b(b({},t),n),{children:Ye(e,o)}))}var fl=c.exports.memo(Gw);function Ww({rowData:e,rowSpanTags:t,onHoverRange:n,format:o}){const s=X(),i=c.exports.useMemo(()=>{const l=Ba(e),a=Ye(e.integration,o);return l?a:`[ ${a} ]`},[o,e]),r=c.exports.useCallback(l=>{s({type:tu,payload:{data:{value:l.target.value,id:e.id}}})},[s,e.id]);return f("td",k(b(b({},t),n),{children:f(at,{value:i,onSave:r,type:"number",style:{padding:"0.1rem 0.4rem"}})}))}function Zw({rowData:e,onHover:t,assignment:n,highlight:o,onUnlinkVisibilityChange:s,unlinkVisibility:i,onLink:r,onUnlink:l}){const a=c.exports.useMemo(()=>B(e,"tableMetaInfo.signal.diaIDs",[]),[e]),u=c.exports.useMemo(()=>n.isActive||o.isActive?{color:"red",fontWeight:"bold"}:void 0,[n.isActive,o.isActive]),d=c.exports.useCallback(m=>{s==null||s(m)},[s]),h=c.exports.useCallback(m=>{r==null||r(m,n)},[n,r]);return f("td",k(b({},t),{onClick:h,style:u,children:a&&a.length>0?_("div",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[a.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:i?"visible":"hidden",padding:0,margin:0},onClick:m=>l==null?void 0:l(m,!1),children:f(Qo,{color:"red"})})})]}):n.isActive?"0":""}))}var Uw=c.exports.memo(Zw);function Od(e){return(t,n,o="",s="")=>{const i=B(e,n,"0.000");return Ye(t,i,o,s)}}function Kw({rowData:e,onHoverSignal:t,preferences:n}){const o=X(),s=e.tableMetaInfo.signal,i=Od(n),r=c.exports.useCallback(l=>{o({type:nu,payload:{value:l.target.value,rangeID:e.id,signalID:s.id}})},[o,e.id,s.id]);return s?f("td",k(b({},t),{children:Qi(s.multiplicity,["m"])?f(at,{value:s.delta.toFixed(3),onSave:r,type:"number",style:{padding:"0.1rem 0.4rem"}}):`${i(e.from,"fromFormat")} - ${i(e.to,"toFormat")}`})):f("td",{children:""})}const qw=M`
  background-color: #ff6f0057;
`,Jw=M`
  background-color: #f5f5dc;
`;function Qw({rowData:e,onUnlink:t,onContextMenu:n,preferences:o}){var N,A,P;const s=je(),i=dt(e.id),r=re([i.id].concat(((N=i.assigned)==null?void 0:N.x)||[]).concat(Ji(s,e.signals.map(D=>D.id))),{type:ue.RANGE}),l=re(((A=i.assigned)==null?void 0:A.x)||[],{type:ue.RANGE}),a=dt(e.tableMetaInfo.id),u=re([a.id].concat(((P=a.assigned)==null?void 0:P.x)||[]),{type:ue.SIGNAL}),d=Tn(),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),y=Od(o),S=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:B(e.tableMetaInfo,"hide",!1)?{display:"none"}:void 0}),[e.tableMetaInfo]),v=c.exports.useCallback((D,O)=>{D&&D.stopPropagation(),O!==void 0?O?(t(e),m(!1),i.removeAll("x")):(t(e,B(e,"tableMetaInfo.signalIndex",void 0)),x(!1),a.removeAll("x")):(m(!1),x(!1))},[i,a,t,e]),C=c.exports.useCallback((D,O)=>{D.stopPropagation(),O.setActive("x")},[]),E=c.exports.useMemo(()=>({onMouseEnter:()=>{i.show("x"),r.show()},onMouseLeave:()=>{i.hide(),r.hide()}}),[i,r]),T=c.exports.useMemo(()=>({onMouseEnter:()=>{i.show("x"),l.show()},onMouseLeave:()=>{i.hide(),l.hide()}}),[i,l]),R=c.exports.useMemo(()=>({onMouseEnter:()=>{a.show("x"),u.show()},onMouseLeave:()=>{a.hide(),u.hide()}}),[a,u]),I=c.exports.useMemo(()=>r.isActive||i.isActive?qw:B(e,"tableMetaInfo.isConstantlyHighlighted",!1)?Jw:null,[i.isActive,r.isActive,e]);return w("tr",{onContextMenu:D=>n(D,e),css:I,children:[p("td",k(b(b({},S),E),{children:e.tableMetaInfo.rowIndex+1})),yo(o,"showFrom")&&p(fl,{value:e.from,rowSpanTags:S,onHoverRange:E,format:y("showFrom",void 0)}),yo(o,"showTo")&&p(fl,{value:e.to,rowSpanTags:S,onHoverRange:E,format:y("toFormat",void 0)}),p(Kw,{rowData:e,onHoverSignal:R,preferences:o}),yo(o,"showRelative")&&p(Ww,{rowData:e,rowSpanTags:S,onHoverRange:E,format:y("relativeFormat",void 0)}),yo(o,"showAbsolute")&&p(yw,{value:e.absolute,rowSpanTags:S,onHoverRange:E,format:y("absoluteFormat",void 0)}),p("td",k(b({},R),{children:B(e,"tableMetaInfo.signal.multiplicity","")})),p(Bw,{rowData:e,onHoverSignal:R}),p(Uw,{rowData:e,assignment:a,highlight:u,onHover:R,unlinkVisibility:g,onUnlinkVisibilityChange:D=>x(D),onLink:C,onUnlink:v}),p(Yw,{rowData:e,assignment:i,highlight:l,onHover:T,unlinkVisibility:h,onUnlinkVisibilityChange:D=>m(D),onLink:C,onUnlink:v,rowSpanTags:S,highlightData:d}),p(jw,{rowData:e,onHoverSignal:R,onHoverRange:E,rowSpanTags:S})]})}function eE(e){return c.exports.useMemo(()=>{const t=[];return e.forEach((n,o)=>{n.signals.length===1?t.push(k(b({rowKey:q()},n),{tableMetaInfo:k(b({},n.tableMetaInfo),{signal:n.signals[0],rowIndex:o,signalIndex:0,id:n.signals[0].id})})):n.signals.length>1&&n.signals.forEach((s,i)=>{let r=!1,l=null;i<n.signals.length-1&&i===0?l=n.signals.length:r=!0,t.push(k(b({rowKey:q()},n),{tableMetaInfo:k(b({},n.tableMetaInfo),{signal:s,rowSpan:l,hide:r,rowIndex:o,signalIndex:i,id:s.id})}))})}),t},[e])}const tE=M`
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
`;function nE({tableData:e,onUnlink:t,context:n,activeTab:o,preferences:s}){const i=o==null?void 0:o.replace(/[0-9]/g,""),r=c.exports.useRef(),{items:l,isSortedDesc:a,onSort:u}=Ld(e),d=eE(l),h=g=>B(s,g,!1),m=c.exports.useCallback((g,x)=>{Gt(g)||(g.preventDefault(),r.current.handleContextMenu(g,x))},[r]);return w(c.exports.Fragment,{children:[w("table",{css:tE,children:[p("thead",{children:w("tr",{children:[p("th",{children:"#"}),h("showFrom")?w("th",k(b({id:"from"},u),{children:["From",a("from").content]})):null,h("showTo")?w("th",k(b({id:"to"},u),{children:["To ",a("to").content]})):null,p("th",{children:"\u03B4 (ppm) "}),h("showRelative")?w("th",k(b({id:"integration"},u),{children:["Rel. ",i," ",a("integration").content]})):null,h("showAbsolute")?p("th",{children:"Absolute"}):null,p("th",{children:"Mult."}),p("th",{children:"J (Hz)"}),p("th",{children:p(ea,{style:{fontSize:10}})}),p("th",{children:"\u03A3"}),p("th",{children:"Kind"}),p("th",{children:""})]})}),p("tbody",{children:d==null?void 0:d.map(g=>p(Qw,{rowData:g,onUnlink:t,onContextMenu:(x,y)=>m(x,y),preferences:s},g.rowKey))})]}),p(qt,{ref:r,context:n})]})}function oE({ranges:e,data:t,info:n,xDomain:o,preferences:s,activeTab:i,molecules:r,showMultiplicityTrees:l,showJGraph:a,showRangesIntegrals:u}){const[d,h]=c.exports.useState(!1),m=je(),g=X(),x=se(),[y,S]=c.exports.useState(!1),v=c.exports.useRef(),C=c.exports.useMemo(()=>{const D=(L,z)=>(z=z*1e4,L=L*1e4,z>=o[0]*1e4&&L<=o[1]*1e4||L<=o[0]*1e4&&z>=o[1]*1e4),O=L=>L.filter(z=>D(z.from,z.to));return e.values?(d?O(e.values):e.values).map(z=>k(b({},z),{tableMetaInfo:{isConstantlyHighlighted:D(z.from,z.to)}})):[]},[d,e.values,o]),E=c.exports.useCallback((D,O=-1)=>{g({type:iu,payload:{rangeData:D,assignmentData:m,signalIndex:O}})},[m,g]),T=c.exports.useCallback(async D=>{if(t.x&&t.re){const{x:O,re:L}=t,{from:z,to:V}=D,{fromIndex:W,toIndex:$}=Jn(O,{from:z,to:V}),j=b({x:Array.from(O.slice(W,$)),y:Array.from(L.slice(W,$))},D);await ys(JSON.stringify(j,void 0,2))?x.show("Data copied to clipboard"):x.error("copy to clipboard failed")}},[t,x]),R=c.exports.useMemo(()=>B(s.current,`formatting.panels.ranges.[${i}]`)||Ki(i),[i,s]),I=c.exports.useMemo(()=>[{label:"Copy to clipboard",onClick:T}],[T]),N=c.exports.useCallback(()=>{h(!d)},[d]),A=c.exports.useCallback(()=>{S(!y)},[y]),P=c.exports.useCallback(()=>{v.current.saveSetting(),S(!1)},[]);return p(Ve,{children:w("div",{css:[Rt,y&&M`
              th {
                position: relative;
              }
            `],children:[!y&&p(hw,{ranges:e,info:n,activeTab:i,molecules:r,showRangesIntegrals:u,showMultiplicityTrees:l,showJGraph:a,isFilterActive:d,onUnlink:E,onFilterActivated:N,onSettingClick:A,filterCounter:C.length}),y&&p(Pn,{onSave:P,onClose:A}),p("div",{className:"inner-container",children:y?p(bw,{ref:v}):p("div",{className:"table-container",children:C&&C.length>0?p(nE,{activeTab:i,tableData:C,onUnlink:E,context:I,preferences:R}):p(Nt,{})})})]})})}const sE=c.exports.memo(oE),iE={ranges:{},data:{},info:{}};function rE(){const{displayerKey:e,xDomain:t,activeTab:n,molecules:o,toolOptions:{selectedTool:s,data:{showMultiplicityTrees:i,showRangesIntegrals:r,showJGraph:l}}}=H(),{ranges:a,data:u,info:d}=Se(iE),h=le();return p(sE,{ranges:a,data:u,info:d,showMultiplicityTrees:i,showJGraph:l,showRangesIntegrals:r,selectedTool:s,displayerKey:e,preferences:h,xDomain:t,activeTab:n,molecules:o})}function lE({data:e,activeSpectrum:t,activeTab:n,displayerMode:o,spectrums:s}){const i=fe(),r=se(),l=X(),a=c.exports.useCallback(()=>{i.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:()=>{l({type:Fi})}},{text:"No"}]})},[l,i]),u=c.exports.useCallback(()=>{const x=s.map(y=>y.id);l({type:Un,id:x})},[l,s]),d=c.exports.useCallback(()=>{l({type:Un,id:[]})},[l]),h=c.exports.useCallback(()=>{function x(S){let v=n.split(",");v=v[0]===v[1]?[v[0]]:v;const C=[];for(const E of v)S.some(R=>R.info.nucleus===E)||C.push(E);return C}const y=x(e);y.length>0?l({type:Qc,nucleus:y}):r.error("Nothing to calculate")},[n,r,e,l]),m=c.exports.useCallback(()=>{l({type:xu})},[l]),g=c.exports.useCallback(()=>{l({type:bu})},[l]);return _(ot,{onDelete:a,counter:s==null?void 0:s.length,deleteToolTip:"Delete all spectra",children:[f(ve,{popupTitle:"Hide all spectra",onClick:d,children:f(dh,{})}),f(ve,{popupTitle:"Show all spectra",onClick:u,children:f(wo,{})}),t&&n&&n.split(",").length>1&&f(ve,{popupTitle:"Add missing projection",onClick:h,children:f(ph,{})}),o===Y.DM_1D&&s.length>1&&_(et,{children:[f(ve,{popupTitle:"Reset Scale",onClick:g,children:f(hh,{})}),f(ve,{popupTitle:"Same Top",onClick:m,children:f(fh,{})})]}),f(Ad,{})]})}const aE=c.exports.memo(lE);function cE({spectrums:e}){const{data:t,activeSpectrum:n,activeTab:o,displayerMode:s}=H();return f(aE,{data:t,activeSpectrum:n,activeTab:o,displayerMode:s,spectrums:e})}function uE({color:e,activated:t}){return f("div",{style:{backgroundColor:e,height:"12px",width:"12px",opacity:t?1:.1,display:"inline-block"}})}function dE({positiveColor:e,negativeColor:t,activated:n}){return f("svg",{width:"12",height:"12",viewBox:"0 0 12 12",opacity:n?1:.1,children:_("g",{children:[f("path",{d:"M0,0H12L0,12Z",fill:e,strokeWidth:"0"}),f("path",{d:"M12,12H0L12,0Z",fill:t,strokeWidth:"0"})]})})}function pE(e){const{style:t,onClick:n=()=>null,activated:o}=e;return f("button",{style:t,type:"button",onClick:n,children:e.dimension===2?f(dE,k(b({},e.color),{activated:o})):f(uE,b({activated:o},e.color))})}var hE=c.exports.memo(pE);function fE({data:e,onChangeMarkersVisibility:t,markersVisible:n,style:o}){const s=i=>n.findIndex(r=>r.id===i)!==-1;return f("button",{style:k(b({},o),{opacity:s(e.id)&&e.peaks&&e.peaks.values.length>0?1:.1}),type:"button",onClick:()=>t(e),disabled:e.peaks&&e.peaks.values.length===0,children:f(mh,{})})}function mE({data:e,onChangeVisibility:t,style:n}){const o=(s,i)=>e?e.display[i]:!0;return _(et,{children:[e.info.dimension===1&&f("button",{"data-test-id":"hide-show-spectrum-button",style:n,type:"button",onClick:()=>t(e,"isVisible"),children:f(wo,{style:b({},o(e.id,"isVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.color}:{opacity:.1,fill:e.display.color})})}),e.info.dimension===2&&_("div",{style:{minWidth:"40px"},children:[f("button",{style:k(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isPositiveVisible"),children:f(wo,{style:b({},o(e.id,"isPositiveVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.positiveColor}:{opacity:.1,fill:e.display.positiveColor})})}),f("button",{style:k(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isNegativeVisible"),children:f(wo,{style:b({},o(e.id,"isNegativeVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.negativeColor}:{opacity:.1,fill:e.display.negativeColor})})})]})]})}const Xe={button:{backgroundColor:"transparent",border:"none",width:"26px",minWidth:"26px"},row:{display:"flex",alignContent:"center",height:"25px",borderBottom:"0.55px solid #f1f1f1"},name:{flex:1,height:"100%",display:"flex"},info:{flex:"1 1 1px",height:"100%",display:"block",alignItems:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"24px"},icon:{display:"flex",margin:"auto",justifyContent:"center"}};function gE({activeSpectrum:e,markersVisible:t,data:n,onChangeVisibility:o,onChangeMarkersVisibility:s,onChangeActiveSpectrum:i,onOpenSettingModal:r,onContextMenu:l}){var x,y;const a=S=>(S&&(S=S.replace(/(?<value>[0-9]+)/g,"<sub>$<value></sub>")),S),u=e&&e.id===n.id,{color:d,name:h,positiveColor:m,negativeColor:g}=n.display;return _("div",{style:b(b({},Xe.row),u?{backgroundColor:"#fafafa"}:{opacity:e?.2:1}),onContextMenu:l,children:[f(mE,{data:n,onChangeVisibility:o,style:Xe.button}),_("div",{"data-test-id":"activate-deactivate-spectrum-button",style:Xe.name,onClick:()=>i(n),children:[f("div",{style:k(b({},Xe.icon),{width:"16px"}),children:n.info.isFid?f(gh,{}):n.info.dimension===2?f(xh,{}):f(Zl,{})}),f("span",{style:Xe.info,children:h}),f("div",{style:Xe.info,dangerouslySetInnerHTML:{__html:n.info&&a(n.info.solvent)}}),_("span",{style:Xe.info,children:[f("span",{style:{borderLeft:"0.55px solid #e5e5e5",paddingRight:"5px"}}),(x=n.info)==null?void 0:x.experiment]}),f("span",{style:Xe.info,children:(y=n.info)==null?void 0:y.pulse})]}),f(fE,{data:n,style:b(b({},Xe.icon),Xe.button),onChangeMarkersVisibility:s,markersVisible:t}),f(hE,{style:Xe.button,dimension:n.info.dimension,color:{positiveColor:m,color:d,negativeColor:g},activated:u,onClick:S=>r(n,S)})]})}var xE=c.exports.memo(gE);function bE(e){const{onColorChange:t=()=>null,name:n}=e,{values:o,setFieldValue:s}=he(),i=c.exports.useCallback(r=>{t(r),s(n,`${r.hex}${Math.round(r.rgb.a*255).toString(16)}`)},[n,t,s]);return f(Yl.SketchPicker,{color:{hex:B(o,n,"#000")},presetColors:Ma,onChangeComplete:r=>i(r)})}var ti=c.exports.memo(bE);function yE(e){const t=e.length,n=Math.floor(t/307200)||1,o=new Float64Array(t/n>>0);let s=0;for(let i=0;i<o.length;i+=n)o[s++]=e[i];return o}function vE(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,r=t.length>0?t[0].x:0,l=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:r,y:a},{x:l,y:a}]}function CE({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=yE(t.re),r=ta(i,n),l={},a={};for(let u in r.sanplot){const{x:d,y:h}=r.sanplot[u];let m=new Array(d.length);for(let g=0;g<d.length;g++)m[g]={x:d[g],y:h[g]};l[u]=m,a[u]=vE(r[u],m,{yLogBase:o})}return{sanPlot:l,lines:a}},[t.re,n,o]);return _("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[f("div",{style:{display:"block"},children:_(dn,{width:180,height:220,children:[f(bh,{title:"Sanplot"}),f(qe,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:5,right:60})]})}),f("div",{style:{display:"block",width:180,height:180},children:_(dn,{width:180,height:180,children:[f(qe,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:5,right:60})]})})]})}var SE=c.exports.memo(CE);function kE({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=c.exports.useCallback(()=>{n.current&&n.current.submitForm()},[]);return f(ce,{ref:n,initialValues:e.display,onSubmit:t,children:_("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[f("div",{style:{display:"block",position:"relative"},children:f(ti,{name:"color",onColorChange:o})}),f(SE,{color:"red",data:e.data})]})})}function wE(e){const l=e,{onAfterChange:t=()=>null,name:n}=l,o=G(l,["onAfterChange","name"]),{values:s,setFieldValue:i}=he(),r=c.exports.useCallback(a=>{t(a),i(n,a)},[n,t,i]);return f(yh,b({className:"horizontal-slider",thumbClassName:"thumb",trackClassName:"track",defaultValue:B(s,n,[0,100]),onAfterChange:r,renderThumb:(a,u)=>f("div",k(b({},a),{children:f("span",{children:u.valueNow})})),pearling:!0,minDistance:10},o))}var ml=c.exports.memo(wE);function EE(e){let t=e[0].length,n=e.length,o=Math.floor(t*n/204800)||1;const s=new Float64Array(t*n/o>>0);let i=0;for(let r=0;r<s.length;r+=o)s[i++]=e[r/n>>0][r%n];return s}function AE(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,r=t.length>0?t[0].x:0,l=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:r,y:a},{x:l,y:a}]}function TE({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=EE(t.z),r=ta(i,n),l={},a={};for(let u in r.sanplot){const{x:d,y:h}=r.sanplot[u];let m=new Array(d.length);for(let g=0;g<d.length;g++)m[g]={x:d[g],y:h[g]};l[u]=m,a[u]=AE(r[u],m,{yLogBase:o})}return{sanPlot:l,lines:a}},[t.z,n,o]);return _("div",{children:[f("div",{style:{textAlign:"center",paddingBottom:5,paddingTop:5},children:"San Plot"}),_("div",{style:{borderTop:"1px solid #ededed",marginTop:"10px",paddingTop:"10px",display:"flex",flexDirection:"row"},children:[_(dn,{width:220,height:180,children:[f(qe,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log ${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:90,right:5})]}),_(dn,{width:220,height:180,children:[f(qe,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:90,right:5})]})]})]})}var DE=c.exports.memo(TE);function IE({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=M`
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
  `,s=c.exports.useCallback(()=>{n.current.submitForm()},[]);return p(ce,{ref:n,initialValues:e.display,onSubmit:t,children:w("div",{css:o,children:[w("div",{className:"positive",children:[p("span",{style:{padding:"0 10px"},children:"Positive"}),p(ti,{name:"positiveColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[p("span",{className:"label",children:"contour Levels [ min - max ]"}),p(ml,{name:"contourOptions.positive.contourLevels",onAfterChange:s}),p("span",{className:"label",children:"number of Layers "}),p(Z,{name:"contourOptions.positive.numberOfLayers",onChange:s,type:"number"})]})]}),w("div",{className:"negative",children:[p("span",{style:{padding:"0 10px"},children:"Negative"}),p(ti,{name:"negativeColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[p("span",{className:"label",children:"contour Levels [ min - max ]"}),p(ml,{name:"contourOptions.negative.contourLevels",onAfterChange:s}),p("span",{className:"label",children:"number of Layers "}),p(Z,{name:"contourOptions.negative.numberOfLayers",onChange:s,type:"number"})]})]}),p(DE,{data:e.data})]})})}const PE=M`
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
`;function RE({position:e,data:t,onClose:n}){const o=X(),{id:s,info:i}=t,r=c.exports.useCallback(d=>{o({type:bc,id:s,display:d})},[o,s]),l=c.exports.useCallback(d=>{d.target===d.currentTarget&&n()},[n]);if(!e)return null;const{x:a,y:u}=e;return p("div",{css:PE,onClick:l,children:p("div",{className:"inner-conatiner",style:{left:i.dimension===2?a-450:a-240,width:i.dimension===2?450:240,padding:i.dimension===2?"10px 0":"",top:u},children:i.dimension===2?p(IE,{onSubmit:r,data:t}):p(kE,{onSubmit:r,data:t})})})}function NE(){return!0}var ME=c.exports.memo(RE,NE);function _E({data:e,activeSpectrum:t,activeTab:n,onTabChange:o}){const s=c.exports.useRef(),[i,r]=c.exports.useState([]),[l,a]=c.exports.useState(null),[u,d]=c.exports.useState(null),[h,m]=c.exports.useState(!1),g=se(),x=X();c.exports.useEffect(()=>{if(e){const A=e.reduce((P,D)=>(D.info.dimension===1&&D.display.isPeaksMarkersVisible===!0&&P.push({id:D.id}),P),[]);r(A)}},[e,x]);const y=c.exports.useMemo(()=>e?ss("nucleus")(e,!0):[],[e]);c.exports.useEffect(()=>{o({tab:n,data:y[n]})},[n,o,y]);const S=c.exports.useCallback(A=>{const P=i.findIndex(O=>O.id===A.id),D=[...i];P===-1?D.push({id:A.id}):D.splice(P,1),x({type:Ri,data:D}),r(D)},[x,i]),v=c.exports.useCallback(A=>{o({tab:A.tabid,data:y[A.tabid]}),x({type:zi,tab:A.tabid})},[x,o,y]),C=c.exports.useMemo(()=>[{label:"Copy to Clipboard",onClick:A=>{(async()=>{const{x:P,y:D,info:O}=A;await ys(JSON.stringify({x:P,y:D,info:O},void 0,2))?g.success("Data copied to clipboard"):g.error("Copy to clipboard failed")})()}},{label:"Delete",onClick:A=>{setTimeout(()=>{x({type:Fi,id:A.id})},0)}}],[g,x]),E=c.exports.useCallback((A,P)=>{Gt(A)||(A.preventDefault(),s.current.handleContextMenu(A,P))},[s]),T=c.exports.useCallback((A,P)=>{d({x:P.nativeEvent.clientX,y:P.nativeEvent.clientY}),a(A),m(!0)},[]),R=c.exports.useCallback((A,P)=>{x({type:Un,id:A.id,key:P,value:!A.display[P]})},[x]),I=c.exports.useCallback(A=>{setTimeout(()=>{t&&t.id===A.id?x({type:zo,data:null}):x({type:zo,data:{id:A.id}})},0)},[t,x]),N=c.exports.useCallback(()=>{m(!1)},[]);return _("div",{style:{height:"calc(100% - 25px)"},children:[f(In,{activeTab:n,onClick:v,children:y&&Object.keys(y).map(A=>{var P;return f(Ne,{tablabel:A,tabid:A,children:(P=y[A])==null?void 0:P.map(D=>f(xE,{activeSpectrum:t,markersVisible:i,data:D,onChangeVisibility:R,onChangeMarkersVisibility:S,onChangeActiveSpectrum:I,onOpenSettingModal:T,onContextMenu:O=>E(O,D)},D.id))},A)})}),f(qt,{ref:s,context:C}),h?f(ME,{onClose:N,data:l,position:u}):null]})}const FE=c.exports.memo(_E);function LE({onTabChange:e}){const{data:t,activeSpectrum:n,activeTab:o}=H();return f(FE,{data:t,activeSpectrum:n,activeTab:o,onTabChange:e})}const OE={overflow:"hidden",height:"100%",display:"flex",flexDirection:"column",width:"100%"};function $E(){const[e,t]=c.exports.useState([]),n=c.exports.useCallback(o=>{t(o.data?o.data:[])},[]);return _("div",{style:OE,children:[f(cE,{spectrums:e}),f(LE,{onTabChange:n})]})}var HE=c.exports.memo($E);const Ce={hmbc:{from:2,to:3},cosy:{from:3,to:4},hsqc:{from:1,to:1},hmqc:{from:1,to:1},inadequate:{from:1,to:1}};function $d(e,t){return Ce[t]&&e.from===Ce[t].from&&e.to===Ce[t].to}function Hd(e){return e.split(/\d+/)[1]}function zd(e,t){const n=B(e,`state.${t.atomType}.error`,null);if(n){for(let{key:o,color:s}of ki)if(o!=="incomplete"&&(o==="notAttached"||o==="ambiguousAttachment")&&B(n,`${o}`,[]).some(i=>e.values[i].id===t.id))return s}return null}function Vd(e,t,n,o,s){var i;if(e&&e.info.dimension===2){const r=Gn(e,t.signal.id);if(r){const l=t.axis==="x"?"y":"x",a=(i=r[l])==null?void 0:i.delta;if(a!==void 0)return a*n>=o&&a*n<=s}}return!1}function Go(e,t,n,o,s,i,r){if(e&&e.info.dimension===2){const l=Gn(e,t.signal.id);if((l==null?void 0:l.x.delta)&&(l==null?void 0:l.y.delta))return l.x.delta*n>=o&&l.x.delta*n<=s&&l.y.delta*n>=i&&l.y.delta*n<=r}return!1}function gl(e){var o;let t="X";e.experimentType==="hsqc"||e.experimentType==="hmqc"?t=!e.signal||e.signal.sign===0?"S":`S${e.signal.sign===1?"+":"-"}`:e.experimentType==="hmbc"||e.experimentType==="cosy"||e.experimentType==="tocsy"?t="M":e.experimentType==="noesy"||e.experimentType==="roesy"?t="NOE":e.experimentType==="inadequate"?t="I":e.experimentType==="adequate"&&(t="A");const n=(o=e.signal.j)==null?void 0:o.pathLength;if(n){const s=Ce[e.experimentType]&&n.from>=Ce[e.experimentType].from&&n.from<=Ce[e.experimentType].to&&n.to>=Ce[e.experimentType].from&&n.to<=Ce[e.experimentType].to;return`${t}${s?"":"*"}`}return t}function jd(e){return es(k(b({},e),{edited:k(b({},e.edited),{moved:!0})}))}function zn(e,t){const n=e.id.split("_");return es(k(b({},e),{id:n[t==="x"?0:1],axis:t,match:[],edited:k(b({},e.edited),{moved:!0})}))}function be(e,t,n,o){const s=Re(t),i=ze(e),r=t.id.split("_");return o==="add"?vh(i,s===1?jd(t):zn(t,n)):(o==="remove"||o==="unmove")&&Ch(i,n==="x"?r[0]:r[1]),i}function zE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:n,selectedCorrelationIdDim2:o,action:s,link:i,correlations:r}){const l=r.find(x=>x.id===n),a=r.find(x=>x.id===o),u=(l==null?void 0:l.id)!==e.id,d=t&&(a==null?void 0:a.id)!==(t==null?void 0:t.id),h=Re(i),m=[],g={};if(s==="move"){if(h===1){const x=be(e,i,"x","remove");let y;l?y=be(u?l:x,i,"x","add"):y=Mn({atomType:e.atomType,link:[jd(i)]}),m.push(x,y),g.skipDataUpdate=!0}else if(h===2){const x=be(e,i,"x","remove");m.push(x);const y=be(t,i,"y","remove");m.push(y),l&&a?(m.push(be(u?l:x,i,"x","add")),m.push(be(d?a:y,i,"y","add"))):l&&o==="new"?(m.push(be(u?l:x,i,"x","add")),m.push(Mn({atomType:t.atomType,link:[zn(i,"y")]}))):n==="new"&&a?(m.push(Mn({atomType:e.atomType,link:[zn(i,"x")]})),m.push(be(d?a:y,i,"y","add"))):n==="new"&&o==="new"&&(m.push(Mn({atomType:e.atomType,link:[zn(i,"x")]})),m.push(Mn({atomType:t.atomType,link:[zn(i,"y")]}))),g.skipDataUpdate=!0}}else if(s==="remove"){const x=be(e,i,"x","remove");if(m.push(x),Re(i)===2){const y=be(t,i,"y","remove");m.push(y)}}else s==="unmove"?h===1?l&&m.push(be(l,i,"x","unmove")):h===2&&l&&a&&(m.push(be(l,i,"x","unmove")),m.push(be(a,i,"y","unmove"))):s==="setPathLength"&&(m.push(xl(e,i,"x")),m.push(xl(t,i,"y")));return{editedCorrelations:m,buildCorrelationDataOptions:g}}function xl(e,t,n){var i,r;const o=ze(e);if(Re(t)===2){const l=t.id.split("_")[n==="x"?0:1],a=o.link.find(u=>u.id===l);if(a){const u=(i=t.signal.j)==null?void 0:i.pathLength;$d(u,a.experimentType)?((r=a.signal.j)==null||delete r.pathLength,a.signal.j&&Object.keys(a.signal.j).length===0&&delete a.signal.j,delete a.edited.pathLength):(a.signal.j?a.signal.j.pathLength=u:a.signal.j={pathLength:u},a.edited.pathLength=!0)}}return o}function VE(e,t){e=e.toLowerCase().replace(/\s+/g,"").split(",").map(s=>s==="sp"?"sp1":s).join(","),e=e.replaceAll("sp","");let n=[];return/^(?:[0-9],{0,1})+$/g.test(e)&&(n=e.split(",").filter(s=>s.length>0).map(s=>Number(s))),n=n.filter(s=>s>=(t==="protonsCount"?0:1)&&(t==="protonsCount"||s<=3)),n.filter((s,i,r)=>r.indexOf(s)===i)}function jE(e,t,n,o,s,i,r){if(r.pseudo===!0||n===null||!r.link.some(g=>g.experimentID===n.id))return!1;const l=t.split(",").map(g=>Hd(g)),a=1e4,u=o[0]*a,d=o[1]*a,h=s[0]*a,m=s[1]*a;if(i===Y.DM_1D){const g=r.link.find(S=>Re(S)===1);if(!g)return!1;let x=na(g);if(x===void 0)return!1;if(x*=a,Pe(e,g.experimentID,!0)&&l[0]===r.atomType&&x>=u&&x<=d||r.link.some(S=>{const v=Pe(e,S.experimentID,!0);return Vd(v,S,a,u,d)}))return!0}else if(i===Y.DM_2D){if(!l.includes(r.atomType))return!1;const g=r.link.find(y=>Re(y)===2);if(!g)return!1;const x=Pe(e,g.experimentID,!0);if(Go(x,g,a,u,d,h,m))return!0;if(r.link.some(y=>{const S=Pe(e,y.experimentID,!0);return Go(S,y,a,u,d,h,m)}))return!0}return!1}function Wo({correlation:e}){const{data:t,xDomain:n,yDomain:o,displayerMode:s,activeTab:i,activeSpectrum:r}=H();return c.exports.useMemo(()=>jE(t,i,r,n,o,s,e),[r,i,e,s,t,n,o])}const BE=M`
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
`;function bl({description:e,onConfirm:t}){const n=c.exports.useCallback(o=>{o.preventDefault(),o.stopPropagation(),t()},[t]);return w("div",{css:BE,children:[p("p",{children:e}),p("button",{type:"button",onClick:n,children:"Confirm"})]})}const XE=M`
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
`;function YE({signal:e,experimentType:t,onEdit:n}){var d,h,m,g;const[o,s]=c.exports.useState(((d=e.j)==null?void 0:d.pathLength)!==void 0?e.j.pathLength.from:((h=Ce[t])==null?void 0:h.from)||0),[i,r]=c.exports.useState(((m=e.j)==null?void 0:m.pathLength)!==void 0?e.j.pathLength.to:((g=Ce[t])==null?void 0:g.to)||0),[l,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{const x={from:o,to:i},y=k(b({},e),{j:k(b({},e.j),{pathLength:x})});n(y)},[i,o,n,e]);return c.exports.useEffect(()=>{a(o<=0||o>i)},[i,o]),w("div",{css:XE,children:[p("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[p(te,{title:"Min:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:p(wt,{type:"number",value:o,onChange:x=>{s(Number(x.target.value))},style:{input:{color:l?"red":"black"}}})}),p(te,{title:"Max:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:p(wt,{type:"number",value:i,onChange:x=>{r(Number(x.target.value))}})})]}),l?w("p",{className:"warning",children:["Minimum must not be 0 or higher than the maximum value."," "]}):p(de,{type:"button",onClick:u,disabled:l,children:"Set"})]})}const GE=M`
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
`;function WE({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:s}){const[i,r]=c.exports.useState(e.id),[l,a]=c.exports.useState((t==null?void 0:t.id)||void 0);function u(h){const m=lt(h);return`${m?m.toFixed(2):"?"}`}const d=c.exports.useCallback((h,m)=>{const g=o.reduce((x,y)=>(y.pseudo===!1&&y.atomType===n.atomType[m]&&x.push({key:y.id,value:y.id,label:`${y.label.origin}: ${u(y)}`}),x),[]);return g.push({key:"new",value:"new",label:`new -> ${(m===0?lt(e):lt(t)).toFixed(2)}`}),p(Me,{onChange:x=>{m===0?r(x):a(x)},data:g,defaultValue:h.id,style:{width:110,height:25,margin:0,border:"1px solid grey"}})},[e,t,o,n.atomType]);return w("div",{css:GE,children:[p("p",{children:"Move of signals on either one or both axes."}),p("p",{children:'"New" means to separate into a new row or column.'}),w("div",{className:"selection-container",children:[d(e,0),t&&d(t,1)]}),p("button",{type:"button",onClick:()=>s(i,l),children:"Move"})]})}const ZE=M`
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
`;function cr({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onClose:s,onEdit:i}){const[r,l]=c.exports.useState("move"),a=c.exports.useCallback(()=>{const h=Re(n);return h===1?` 1D (${n.signal.delta.toFixed(3)})`:h===2?`${n.signal.x?`${n.signal.x.delta.toFixed(2)}`:"?"} (${e.label.origin}), ${n.signal.y?n.signal.y.delta.toFixed(2):"?"} (${t.label.origin})`:""},[e.label.origin,n,t]),u=c.exports.useCallback((h,m,g,x)=>{const{editedCorrelations:y,buildCorrelationDataOptions:S}=zE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:m,selectedCorrelationIdDim2:g,action:h,link:x||n,correlations:o});i(y,h,x||n,S),s==null||s()},[e,t,o,n,s,i]),d=c.exports.useMemo(()=>p("div",{className:"tabs-container",children:w(In,{position:ir.TOP,activeTab:r,onClick:h=>l(h.tabid),children:[p(Ne,{tablabel:"Move",tabid:"move",children:p(WE,{correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:(h,m)=>u("move",h,m)})}),p(Ne,{tablabel:"Unmove",tabid:"unmove",children:p(bl,{description:"Movement of signal to its original place.",onConfirm:()=>u("unmove",e.id,t.id)})}),p(Ne,{tablabel:"Remove",tabid:"remove",children:p(bl,{description:"Deletion of signal.",onConfirm:()=>u("remove",void 0,void 0)})}),p(Ne,{tablabel:"J Coupling",tabid:"setPathLength",children:p(YE,{signal:n.signal,experimentType:n.experimentType,onEdit:h=>{const m=k(b({},n),{signal:h});u("setPathLength",e,t,m)}})})]})}),[r,e,t,o,u,n]);return w("div",{css:ZE,children:[w("div",{className:"header handle",children:[p(me,{onClick:s}),p("p",{className:"header-info",children:`${n.experimentType.toUpperCase()} signal at ${a()}`})]}),d]})}function UE({spectraData:e,correlationsData:t,correlation:n,onEdit:o}){var C;const s=c.exports.useRef(),i=fe(),r=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const E=[];return n.link.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(ke(T.signal.id,"Crosshair_X"));const R=Ei(e,T.experimentID,T.signal.id,!0);R&&E.push(R)}}),E},[n,e]),l=re(r),a=c.exports.useCallback(E=>{E.currentTarget.focus(),l.show()},[l]),u=c.exports.useCallback(E=>{E.currentTarget.blur(),l.hide()},[l]),d=Wo({correlation:n}),h=c.exports.useMemo(()=>({style:{color:zd(t,n)||void 0,backgroundColor:l.isActive?"#ff6f0057":d?"#f5f5dc":"inherit"},title:n.pseudo===!1&&n.link.reduce((E,T)=>(T.pseudo===!1&&!E.includes(T.experimentType.toUpperCase())&&E.push(T.experimentType.toUpperCase()),E),[]).sort().join("/"),onMouseEnter:a,onMouseLeave:u}),[n,t,l.isActive,d,a,u]),m=c.exports.useMemo(()=>n.edited.equivalence?{backgroundColor:"#F7F2E0"}:{color:Number.isInteger(n.equivalence)?n.equivalence===1?"#bebebe":"black":"red"},[n]),g=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(E=>Re(E)===1&&E.pseudo===!1).map(E=>{var T;return{label:`edit 1D (${E.signal.delta.toFixed(3)}${((T=E.edited)==null?void 0:T.moved)===!0?"[MOVED]":""})`,onClick:()=>{l.hide(),i.show(p(cr,{onClose:()=>i.close(),onEdit:o,link:E,correlationDim1:n,correlationDim2:void 0,correlations:t.values}),{position:ne.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete all (${n.label.origin})`,onClick:()=>{i.showConfirmDialog({message:`All signals of ${n.label.origin} (${lt(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{o([n],"removeAll")}},{text:"No"}]}),l.hide()}}]):[],[n,t.values,l,i,o]),x=c.exports.useCallback(E=>{E.preventDefault(),s.current.handleContextMenu(E)},[s]),v=h,{title:y}=v,S=G(v,["title"]);return p("th",k(b({},S),{title:y===!1?void 0:y,children:w("div",{style:{display:"block"},onContextMenu:E=>{g.length>0&&x(E)},children:[p("p",{children:n.label.origin}),p("p",{children:lt(n)?(C=lt(n))==null?void 0:C.toFixed(2):""}),p("p",{style:m,children:Number.isInteger(n.equivalence)?n.equivalence:n.equivalence.toFixed(2)}),p(qt,{ref:s,context:g})]})}))}function KE({rowCorrelation:e,columnCorrelation:t,commonLinks:n,correlations:o,spectraData:s,onEdit:i}){const r=c.exports.useRef(),l=fe(),a=c.exports.useMemo(()=>{const E=[];return n.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(ke(T.signal.id,"Crosshair"));const R=Ei(s,T.experimentID,T.signal.id,!0);R&&E.push(R)}}),E},[n,s]),u=re(a),d=c.exports.useCallback(E=>{E.currentTarget.focus(),u.show()},[u]),h=c.exports.useCallback(E=>{E.currentTarget.blur(),u.hide()},[u]),m=c.exports.useCallback(E=>{E.preventDefault(),r.current.handleContextMenu(E)},[r]),g=c.exports.useCallback((E,T)=>{const R=e.link.filter(A=>(A.experimentType==="hsqc"||A.experimentType==="hmqc")&&A.pseudo===!0).length;let I,N;if(E==="add"){const A=es({experimentType:"hsqc",experimentID:q(),atomType:[t.atomType,e.atomType],id:q(),pseudo:!0,signal:{id:q(),sign:0}});I=be(t,A,"x","add"),N=be(e,A,"y","add"),N.edited.protonsCount||(N.protonsCount=[R+1])}else I=be(t,T,"x","remove"),N=be(e,T,"y","remove"),N.edited.protonsCount||(N.protonsCount=R-1>0?[R-1]:[]);i([I,N],E,T,{skipDataUpdate:!0})},[t,i,e]),x=c.exports.useMemo(()=>{const E=n.map(R=>{var N;const I=`${gl(R)} (${R.signal.x?R.signal.x.delta.toFixed(2):"?"}, ${R.signal.y?R.signal.y.delta.toFixed(2):"?"})${((N=R.edited)==null?void 0:N.moved)===!0?"[MOVED]":""}`;return R.pseudo===!1?[{label:`edit ${I}`,onClick:()=>{u.hide(),l.show(f(cr,{onClose:()=>l.close(),onEdit:i,link:R,correlationDim1:t,correlationDim2:e,correlations:o}),{position:ne.MIDDLE_RIGHT,isBackgroundBlur:!1})}}]:[]}).flat(),T=n.find(R=>R.pseudo===!0&&R.experimentType==="hsqc");return e.pseudo===!0&&(T?E.push({label:"remove pseudo HSQC",onClick:()=>g("remove",T)}):E.push({label:"add pseudo HSQC",onClick:()=>g("add")})),E},[t,n,o,g,u,l,i,e]),y=c.exports.useMemo(()=>n.map((E,T)=>{var R;return _("label",{children:[f("label",{style:{color:E.pseudo===!0||((R=E.edited)==null?void 0:R.moved)===!0?"blue":"black"},children:gl(E)}),T<n.length-1&&f("label",{children:"/"})]},E.id)}),[n]),S=c.exports.useMemo(()=>n.reduce((E,T)=>(E.includes(T.experimentType.toUpperCase())||E.push(T.experimentType.toUpperCase()),E),[]).join("/"),[n]),v=Wo({correlation:e}),C=Wo({correlation:t});return _("td",{onContextMenu:E=>{x.length>0&&m(E)},style:{backgroundColor:u.isActive?"#ff6f0057":C||v?"#f5f5dc":"inherit"},title:S,onMouseEnter:d,onMouseLeave:h,children:[y,f(qt,{ref:r,context:x})]})}function qE({additionalColumnData:e,correlations:t,correlation:n,styleRow:o,styleLabel:s,onSaveEditEquivalences:i,onSaveEditNumericValues:r,onEditCorrelationTableCellHandler:l,spectraData:a}){var O;const u=c.exports.useRef(),d=fe(),h=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const L=[];return n.link.forEach(z=>{if(z.pseudo===!1){L.push(z.signal.id),L.push(ke(z.signal.id,"Crosshair_Y"));const V=Ei(a,z.experimentID,z.signal.id,!0);V&&L.push(V)}}),L},[n,a]),m=re(h),g=c.exports.useCallback(L=>{i(n,L.target.value)},[n,i]),x=c.exports.useCallback((L,z)=>{r({correlation:n,values:VE(L.target.value,z),key:z})},[n,r]),y=c.exports.useMemo(()=>e.map(L=>{const z=[];return n.link.forEach(V=>{L.link.forEach(W=>{if(V.axis!==W.axis&&V.experimentID===W.experimentID&&V.signal.id===W.signal.id&&!z.some($=>$.signal.id===V.signal.id)){let $=V.experimentType;V.signal&&V.signal.sign!==0&&($+=V.signal.sign===1?" (+)":" (-)"),z.push(es(k(b({},V),{experimentLabel:$,axis:void 0,id:`${W.id}_${V.id}`})))}})}),f(KE,{rowCorrelation:n,columnCorrelation:L,commonLinks:z,correlations:t,spectraData:a,onEdit:l},`addColData_${n.id}_${L.id}`)}),[e,n,t,l,a]),S=c.exports.useMemo(()=>n.edited.equivalence?{color:"blue"}:{color:n.equivalence===1?"#bebebe":"black"},[n]),v=c.exports.useCallback(L=>{L.currentTarget.focus(),m.show()},[m]),C=c.exports.useCallback(L=>{L.currentTarget.blur(),m.hide()},[m]),E=Wo({correlation:n}),T=c.exports.useMemo(()=>({style:k(b({},o),{backgroundColor:m.isActive?"#ff6f0057":E?"#f5f5dc":"inherit"}),title:n.pseudo===!1&&n.link.reduce((L,z)=>(z.pseudo===!1&&!L.includes(z.experimentType.toUpperCase())&&L.push(z.experimentType.toUpperCase()),L),[]).sort().join("/"),onMouseEnter:v,onMouseLeave:C}),[n.link,n.pseudo,m.isActive,E,v,C,o]),R=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(L=>Re(L)===1&&L.pseudo===!1).map(L=>{var z;return{label:`edit 1D (${L.signal.delta.toFixed(3)})${((z=L.edited)==null?void 0:z.moved)===!0?"[MOVED]":""}`,onClick:()=>{m.hide(),d.show(f(cr,{onClose:()=>d.close(),onEdit:l,link:L,correlationDim1:n,correlationDim2:void 0,correlations:t}),{position:ne.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete ${n.label.origin}`,onClick:()=>{d.showConfirmDialog({message:`All signals of ${n.label.origin} (${lt(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{l([n],"removeAll")}},{text:"No"}]}),m.hide()}}]):[],[n,m,d,l,t]),I=c.exports.useCallback(L=>{L.preventDefault(),u.current.handleContextMenu(L)},[u]),D=T,{title:N}=D,A=G(D,["title"]),P=N||"";return _("tr",{style:o,children:[_("td",k(b({title:P},A),{style:k(b({},T.style),{styleLabel:s}),onContextMenu:L=>{R.length>0&&I(L)},children:[Sh(t,n),f(qt,{ref:u,context:R})]})),f("td",k(b({title:P},A),{children:lt(n)?(O=lt(n))==null?void 0:O.toFixed(2):""})),f("td",k(b({title:P},A),{children:n.pseudo===!1?n.atomType!=="H"?f(at,{type:"number",value:n.equivalence,style:S,onSave:g}):f("text",{style:S,children:n.equivalence}):""})),f("td",k(b({title:P},A),{children:n.atomType!=="H"?f(at,{type:"text",value:n.protonsCount.join(","),style:n.edited.protonsCount?{color:"blue"}:{},onSave:L=>x(L,"protonsCount")}):""})),f("td",k(b({title:P},A),{style:k(b({},T.style),{borderRight:"1px solid"}),children:n.atomType!=="H"?f(at,{type:"text",value:n.hybridization.map(L=>`sp${L}`).join(","),style:n.edited.hybridization?{color:"blue"}:{},onSave:L=>x(L,"hybridization")}):""})),y]})}const JE=M`
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
`;function QE({correlationsData:e,filteredCorrelationsData:t,additionalColumnData:n,editEquivalencesSaveHandler:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,showProtonsAsRows:r,spectraData:l}){const a=c.exports.useMemo(()=>t?t.values.filter(d=>r?d.atomType==="H":d.atomType!=="H").map(d=>p(qE,{additionalColumnData:n,correlations:e.values,correlation:d,styleRow:{backgroundColor:"mintcream"},styleLabel:d.atomType==="H"?{color:zd(e,d)}:{},onSaveEditEquivalences:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,spectraData:l},`correlation${d.atomType}${d.id}`)):[],[t,r,n,e,o,s,i,l]),u=c.exports.useMemo(()=>n.map(d=>p(UE,{spectraData:l,correlationsData:e,correlation:d,onEdit:i},`additionalCorrelationHeader_${d.id}`)),[n,e,i,l]);return p("div",{css:JE,children:w("table",{children:[p("thead",{children:w("tr",{children:[p("th",{children:"Atom"}),p("th",{children:"\u03B4 (ppm)"}),p("th",{children:"Equiv"}),p("th",{children:"#H"}),p("th",{style:{borderRight:"1px solid"},children:"Hybrid"}),u]})}),p("tbody",{children:a})]})})}const e2=M`
  display: flex;
  width: 100%;
  font-size: 15px;
  font-weight: 300;
  white-space: nowrap;
  span {
    margin-left: 8px;
  }
`;function t2({correlationsData:e}){if(!e)return null;const t=kh(e.options.mf),n=Object.keys(t).length>0?Object.keys(t).map((o,s)=>{const i=e.state[o],r=i?i.error:void 0,l=r?hx.findIndex(a=>r[a]!==void 0):"black";return p("span",{style:{color:i?i.complete===!0&&(!r||Object.keys(r).length===0)?"green":l>=0?ki[l].color:"black":"black"},children:`${o}: ${i?i.current:"-"}/${t[o]}   `},`molFormulaView_${s}`)}):p("p",{style:{fontStyle:"italic",color:"orange"},children:"Molecular formula is not set"});return p("div",{css:e2,children:n})}var n2=c.exports.memo(t2);const o2=M`
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
`;function s2({onSave:e=()=>null,previousMF:t}){const[n,o]=c.exports.useState(""),[s,i]=c.exports.useState(!0),[r,l]=c.exports.useState(!1),a=c.exports.useCallback(h=>{if(h.trim().length===0)return!1;try{return qa(h),!0}catch{return!1}},[]),u=c.exports.useCallback(h=>{l(!0),a(h.target.value)?(i(!0),o(h.target.value)):(i(!1),o(""))},[a]),d=c.exports.useCallback(()=>{e(r?n.trim():t)},[r,n,e,t]);return w("div",{css:o2,children:[p("input",{type:"text",onChange:u,defaultValue:t}),p("button",{type:"button",onClick:d,disabled:!s,children:s?"Set":"Invalid"})]})}const i2=M`
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
`;function r2({onClose:e,onSave:t,molecules:n,previousMF:o}){const[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{n&&n.length>0&&i(0)},[n]);const r=c.exports.useCallback(u=>{t==null||t(u),e==null||e()},[e,t]),l=c.exports.useCallback(()=>{t==null||t(n[s].mf),e==null||e()},[s,n,e,t]),a=c.exports.useCallback(u=>{i(u)},[]);return w("div",{css:i2,children:[p("div",{className:"header handle",children:p(me,{onClick:e})}),p("div",{children:p("p",{className:"info",children:"Please type in a molecular formula!"})}),p(s2,{onSave:r,previousMF:o}),w("div",{children:[p("p",{className:"optional",children:"OR"}),p("p",{className:"optional2",children:"Select a molecule as reference!"})]}),p(Rd,{molecules:n,onChange:a}),p("button",{type:"button",onClick:l,children:"Set"})]})}const l2=M`
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
`;function a2({onClose:e,onSave:t,previousTolerance:n}){const[o,s]=c.exports.useState(),[i,r]=c.exports.useState({});c.exports.useEffect(()=>{if(n){s(n);const d={};Object.keys(n).forEach(h=>{d[h]=!0}),r(d)}else s(void 0)},[n]);const l=c.exports.useCallback(()=>{t==null||t(o),e==null||e()},[e,t,o]),a=c.exports.useCallback((d,h)=>{const m=d.target.value;m.trim().length>0?(s(k(b({},o),{[h]:Number(m)})),r(k(b({},i),{[h]:!0}))):r(k(b({},i),{[h]:!1}))},[i,o]),u=c.exports.useMemo(()=>o?Object.keys(o).map(d=>w("tr",{children:[p("td",{children:d}),p("td",{children:p("input",{type:"number",onChange:h=>a(h,d),defaultValue:o[d],style:i[d]?{}:{backgroundColor:"orange"}})})]},`tolerance_${d}`)):void 0,[i,a,o]);return w("div",{css:l2,children:[w("div",{className:"header handle",children:[p("span",{children:"Set Shift Tolerances"}),p(me,{onClick:e})]}),w("table",{children:[p("thead",{children:w("tr",{children:[p("th",{children:"Atom"}),p("th",{children:"Value"})]})}),p("tbody",{children:u})]}),p("button",{type:"button",onClick:l,disabled:Object.keys(i).some(d=>!i[d]),children:"Set"})]})}const c2=M`
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
`;function u2(){const{molecules:e,correlations:t,data:n,xDomain:o,yDomain:s,displayerMode:i,activeTab:r}=H(),l=X(),a=fe(),u=je(),[d,h]=c.exports.useState([]),[m,g]=c.exports.useState("H"),[x,y]=c.exports.useState(!1),[S,v]=c.exports.useState(!1),C=c.exports.useMemo(()=>{const $=j=>{if(j.pseudo===!0)return!1;const U=r.split(",").map(st=>Hd(st)),ee=1e4,_e=o[0]*ee,gt=o[1]*ee,Jt=s[0]*ee,Qt=s[1]*ee;if(i===Y.DM_1D){const st=j.link.find(tn=>Re(tn)===1);if(!st)return!1;let en=na(st);if(en===void 0)return!1;if(en*=ee,Pe(n,st.experimentID,!0)&&U[0]===j.atomType&&en>=_e&&en<=gt||j.link.some(tn=>{const Ud=Pe(n,tn.experimentID,!0);return Vd(Ud,tn,ee,_e,gt)}))return!0}else if(i===Y.DM_2D){if(!U.includes(j.atomType))return!1;const st=j.link.find(Rn=>Re(Rn)===2);if(!st)return!1;const en=Pe(n,st.experimentID,!0);if(Go(en,st,ee,_e,gt,Jt,Qt))return!0;if(j.link.some(Rn=>{const tn=Pe(n,Rn.experimentID,!0);return Go(tn,Rn,ee,_e,gt,Jt,Qt)}))return!0}return!1};if(t){const j=S?t.values.filter(U=>$(U)):t.values;return k(b({},t),{values:j})}},[r,t,i,S,n,o,s]),E=c.exports.useCallback($=>{l({type:wc,payload:{mf:$}})},[l]),T=c.exports.useCallback($=>{l({type:Ec,payload:{tolerance:$}})},[l]),R=c.exports.useCallback(()=>{a.show(p(r2,{onClose:()=>a.close(),onSave:E,molecules:e,previousMF:t.options.mf}))},[t,E,a,e]),I=c.exports.useCallback(()=>{a.show(p(a2,{onClose:()=>a.close(),onSave:T,previousTolerance:t.options.tolerance}))},[t,T,a]),N=c.exports.useMemo(()=>["H","H-H"].concat(t?t.values.map(j=>j.atomType).filter((j,U,ee)=>j!=="H"&&ee.indexOf(j)===U):[]).map(j=>({key:j,label:j,value:j})),[t]);c.exports.useEffect(()=>{const $=m.split("-")[0];h(C?C.values.filter(j=>j.atomType===$).reverse():[])},[C,m]);const A=c.exports.useCallback(($,j)=>{l({type:Us,payload:{id:$.id,correlation:k(b({},$),{equivalence:j,edited:k(b({},$.edited),{equivalence:j!==1})})}})},[l]),P=c.exports.useCallback(({correlation:$,values:j,key:U})=>{l({type:Us,payload:{id:$.id,correlation:k(b({},$),{[U]:j,edited:k(b({},$.edited),{[U]:!0})}),options:{skipDataUpdate:!0}}})},[l]),D=c.exports.useCallback(($,j)=>{l({type:Sc,payload:{correlations:$,options:j}})},[l]),O=c.exports.useCallback($=>{l({type:kc,payload:{correlation:$,assignmentData:u}})},[u,l]),L=c.exports.useCallback($=>{const j=Re($);if(j===1){const U=Pe(n,$.experimentID,!1),ee=wi(U,$.signal.id),_e=sc(U,$.signal.id);l({type:Hc,payload:{spectrum:U,range:ee,signal:_e,assignmentData:u}})}else if(j===2){const U=Pe(n,$.experimentID,!1),ee=_o(U,$.signal.id),_e=Gn(U,$.signal.id);l({type:qc,payload:{spectrum:U,zone:ee,signal:_e,assignmentData:u}})}},[u,l,n]),z=c.exports.useCallback($=>{var U;if(Re($)===2){const ee=Pe(n,$.experimentID,!1),_e=_o(ee,$.signal.id),gt=Gn(ee,$.signal.id);l({type:Jc,payload:{spectrum:ee,zone:_e,signal:gt,pathLength:(U=$.signal.j)==null?void 0:U.pathLength}})}},[l,n]),V=c.exports.useCallback(($,j,U,ee)=>{j==="add"||j==="move"||j==="remove"||j==="unmove"||j==="setPathLength"?(U&&U.pseudo===!1&&(j==="remove"?L(U):j==="setPathLength"&&z(U)),D($,ee)):j==="removeAll"&&O($[0])},[z,O,L,D]),W=c.exports.useCallback(()=>{v(!S)},[S]);return w("div",{css:c2,children:[w(ot,{canDelete:!1,counter:t?t.values.length:0,onFilter:W,filterToolTip:S?"Show all correlations":"Hide correlations out of view",filterIsActive:S,counterFiltered:C==null?void 0:C.values.length,children:[p(Ee,{title:`Set molecular formula (${t.options.mf})`,popupPlacement:"right",children:p("button",{type:"button",onClick:R,children:p(wh,{})})}),p(Ee,{title:"Set shift tolerance",popupPlacement:"right",children:p("button",{type:"button",onClick:I,children:p(Eh,{})})}),w("div",{className:"extra-header-content",children:[p("div",{className:"overview-container",children:p(n2,{correlationsData:t})}),p("div",{className:"table-view-selection",children:w("span",{children:[p("label",{children:"View:"}),p(Me,{onChange:$=>{g($),y($==="H-H")},data:N,defaultValue:m,style:{fontSize:"12px",width:"70px",height:"18px",border:"1px solid grey"}})]})})]})]}),p(QE,{correlationsData:t,filteredCorrelationsData:C,additionalColumnData:d,editEquivalencesSaveHandler:A,onSaveEditNumericValues:P,onEditCorrelationTableCellHandler:V,showProtonsAsRows:x,spectraData:n})]})}var d2=c.exports.memo(u2);const _s={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},p2=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function h2({nucleus:e,innerRef:t}){const n=se(),o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,d)=>(u[d]=n1,u),{}),a=ft(o.current,"formatting.panels.zones");s.current.setValues(a||l)}},[e,o]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{o.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"zones",value:l}}),n.success("zones preferences saved successfully")},[n,o]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:_s.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>_("div",{style:_s.groupContainer,children:[f(Le,{style:_s.header,value:l}),p2.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id))]},l))})})}const f2=c.exports.memo(h2);function m2(e,t){const n=Cs();return f(f2,{innerRef:t,nucleus:n})}var g2=c.exports.forwardRef(m2);const x2=M`
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
`;function b2({signalIndex:e}){var o,s,i,r,l,a,u,d,h,m,g,x,y,S,v,C,E,T;const{errors:t,values:n}=he();return w("div",{css:x2,children:[p("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[p(Qs,{name:`signals[${e}].j.pathLength.from`,defaultValue:((s=(o=n.signals[e].j)==null?void 0:o.pathLength)==null?void 0:s.from)||((i=Ce[n.experimentType])==null?void 0:i.from)||1,label:"Min: ",style:{input:{color:(a=(l=(r=t.signals)==null?void 0:r[e].j)==null?void 0:l.pathLength)!=null&&a.from?"red":"black"}},min:1,max:((d=(u=n.signals[e].j)==null?void 0:u.pathLength)==null?void 0:d.to)||((h=Ce[n.experimentType])==null?void 0:h.to),pattern:"[1-9]+"}),p(Qs,{name:`signals[${e}].j.pathLength.to`,defaultValue:((g=(m=n.signals[e].j)==null?void 0:m.pathLength)==null?void 0:g.to)||((x=Ce[n.experimentType])==null?void 0:x.to)||1,label:"Max: ",style:{input:{color:(v=(S=(y=t.signals)==null?void 0:y[e].j)==null?void 0:S.pathLength)!=null&&v.to?"red":"black"}},min:((E=(C=n.signals[e].j)==null?void 0:C.pathLength)==null?void 0:E.from)||((T=Ce[n.experimentType])==null?void 0:T.from)||1,pattern:"[1-9]+"})]})]})}function y2({signalIndex:e}){return f(b2,{signalIndex:e})}const v2=M`
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
`,C2=M`
  color: red;
`,S2=M`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function k2(){const{values:e,setFieldValue:t,errors:n}=he(),o=c.exports.useCallback(l=>!!((n==null?void 0:n.signals)&&(n==null?void 0:n.signals[l])),[n]),s=c.exports.useMemo(()=>e.signals.length>0?e.signals.map((a,u)=>p(Ne,{tabid:`${u}`,tabstyles:o(u)?C2:S2,render:()=>w("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"11px"},children:[w("span",{children:["\u{1D6C5}",p("sub",{children:a.x.nucleus}),": ",a.x.delta.toFixed(2)]}),w("span",{children:["\u{1D6C5}",p("sub",{children:a.y.nucleus}),": ",a.y.delta.toFixed(2)]})]}),children:p(y2,{signalIndex:u})},`signalForm_zone${u}`)):[],[o,e.signals]),i=c.exports.useCallback(({tabid:l})=>{t("activeTab",l)},[t]),r=c.exports.useCallback(({tabid:l})=>{const a=e.signals.filter((u,d)=>d!==Number(l));t("signals",a)},[t,e.signals]);return w("div",{children:[p("div",{css:v2}),p(In,{activeTab:e.activeTab,onClick:i,onDelete:r,children:s})]})}const w2=()=>c.exports.useMemo(()=>Q().shape({signals:Hs().of(Q().shape({j:Q().shape({pathLength:Q().shape({from:ae().required().positive().integer(),to:ae().required().positive().integer()})})})).min(1,"There must be at least one signal in a zone!")}),[]),E2=M`
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
`;function A2({onSaveEditZoneModal:e=()=>null,onCloseEditZoneModal:t=()=>null,onZoomEditZoneModal:n=()=>null,rowData:o}){const s=c.exports.useRef(null),i=w2(),r=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{r()},[r]);const l=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(d=>{(async()=>{const h=k(b({},o),{signals:d.signals.map(m=>{var g,x;return $d((g=m.j)==null?void 0:g.pathLength,o.tableMetaInfo.experiment)&&((x=m.j)==null||delete x.pathLength,m.j&&Object.keys(m.j).length===0&&delete m.j),m})});await e(h),l()})()},[l,e,o]),u=c.exports.useMemo(()=>({activeTab:"0",signals:o.signals.map(d=>{var h,m;return k(b({},d),{j:b({pathLength:{from:((h=Ce[o.tableMetaInfo.experiment])==null?void 0:h.from)||1,to:((m=Ce[o.tableMetaInfo.experiment])==null?void 0:m.to)||1}},d.j)})})}),[o.signals,o.tableMetaInfo.experiment]);return p("div",{css:E2,children:w(ce,{ref:s,initialValues:u,validationSchema:i,onSubmit:a,children:[w("div",{className:"header handle",children:[p(de,{onClick:r,className:"zoom-button",children:p(eo,{title:"Set to default view on range in spectrum"})}),p("span",{children:"Zone and Signal edition"}),p(rr,{onClick:()=>s.current.submitForm(),popupTitle:"Save and exit"}),p(me,{onClick:l})]}),p(k2,{})]})})}const T2={marginLeft:2,marginRight:2,border:"none",height:"20px"};function D2({rowData:e,rowSpanTags:t}){const n=X(),o=je(),s=fe(),i=c.exports.useCallback(d=>{n({type:hu,payload:{rowData:e,value:d}})},[n,e]),r=c.exports.useCallback(()=>{n({type:ps,payload:{id:e.id,assignmentData:o}})},[o,n,e]),l=c.exports.useCallback(()=>{const d=Math.abs(e.x.from-e.x.to)*10;n({type:ls,xDomain:e.x.from<=e.x.to?[e.x.from-d,e.x.to+d]:[e.x.to-d,e.x.from+d]});const h=Math.abs(e.y.from-e.y.to)*10;n({type:Ii,yDomain:e.y.from<=e.y.to?[e.y.from-h,e.y.to+h]:[e.y.to-h,e.y.from+h]})},[n,e.x.from,e.x.to,e.y.from,e.y.to]),a=c.exports.useCallback(d=>{n({type:fu,payload:{editedRowData:d}})},[n]),u=c.exports.useCallback(()=>{n({type:co,payload:{selectedTool:F.editRange.id,tempRange:e}}),s.show(f(A2,{onCloseEditZoneModal:()=>s.close(),onSaveEditZoneModal:a,onZoomEditZoneModal:()=>l(),rowData:e}),{position:ne.MIDDLE_RIGHT,transition:Qe.SCALE,isBackgroundBlur:!1})},[n,s,e,a,l]);return _(c.exports.Fragment,{children:[f("td",{children:f(Me,{onChange:d=>{i(d)},data:ci,defaultValue:e.tableMetaInfo.signal.kind,style:T2})}),_("td",k(b({},t),{children:[f("button",{type:"button",className:"delete-button",onClick:r,children:f(At,{})}),f("button",{type:"button",className:"zoom-button",onClick:l,children:f(eo,{title:"Zoom to zone in spectrum"})}),f("button",{type:"button",className:"edit-button",onClick:u,children:f(Ql,{color:"blue"})})]}))]})}function yl({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:r,showUnlinkButton:l,setShowUnlinkButton:a}){var u,d;return f("td",k(b({},o),{onClick:h=>s(h,t,r),style:n.isActive||t.isActive&&((u=t.activated)==null?void 0:u.axis)===r?{color:"red",fontWeight:"bold"}:void 0,children:B(e,`tableMetaInfo.signal.${r}.diaIDs`,[]).length>0?_("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e.tableMetaInfo.signal[r].diaIDs.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:l?"visible":"hidden",padding:0,margin:0},onClick:h=>i(h,!1,r),children:f(Qo,{color:"red"})})})]}):t.isActive&&((d=t.activated)==null?void 0:d.axis)===r?"0":""}))}function I2({rowData:e,assignmentSignal:t,onHoverSignalX:n,onHoverSignalY:o,showUnlinkButtonSignalX:s,showUnlinkButtonSignalY:i,setShowUnlinkButtonSignalX:r,setShowUnlinkButtonSignalY:l,onClick:a,onUnlink:u,highlightSignalX:d,highlightSignalY:h}){return _(c.exports.Fragment,{children:[f(yl,{rowData:e,assignment:t,highlight:d,onHover:n,onClick:a,onUnlink:u,axis:"x",showUnlinkButton:s,setShowUnlinkButton:r}),f(yl,{rowData:e,assignment:t,highlight:h,onHover:o,onClick:a,onUnlink:u,axis:"y",showUnlinkButton:i,setShowUnlinkButton:l})]})}function P2({rowData:e,onHoverSignalX:t,onHoverSignalY:n}){const o=X(),s=B(e,"tableMetaInfo.signal.x.delta",null),i=B(e,"tableMetaInfo.signal.y.delta",null),r=B(e,"tableMetaInfo.signal.id",void 0),l=c.exports.useCallback(u=>{const d=u.target.value;o({type:Ks,payload:{zoneID:e.id,signal:{id:r,x:d}}})},[o,r,e.id]),a=c.exports.useCallback(u=>{const d=u.target.value;o({type:Ks,payload:{zoneID:e.id,signal:{id:r,y:d}}})},[o,r,e.id]);return _(c.exports.Fragment,{children:[f("td",k(b({},t),{children:s!==null?f(at,{value:s.toFixed(2),onSave:l,type:"number",style:{padding:"0.1rem 0.4rem"}}):""})),f("td",k(b({},n),{children:i!==null?f(at,{value:i.toFixed(2),onSave:a,type:"number",style:{padding:"0.1rem 0.4rem"}}):""}))]})}function vl({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:r,showUnlinkButton:l,setShowUnlinkButton:a,rowSpanTags:u}){var d,h,m,g;return f("td",k(b(b({},u),o),{onClick:x=>s(x,t,r),children:B(e,`${r}.nbAtoms`,0)>0?B(e,`${r}.diaIDs`,0).length>0?_("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e[r].nbAtoms," ","(",f("span",{style:t.isActive&&((d=t.activated)==null?void 0:d.axis)===r||t.isOver&&((h=t.highlighted)==null?void 0:h.axis)===r||n.isActive?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"},children:B(e,`${r}.diaIDs`,[]).length}),")"," ",f("sup",{children:f("button",{type:"button",style:{visibility:l?"visible":"hidden",padding:0,margin:0},onClick:x=>i(x,!0,r),children:f(Qo,{color:"red"})})})]}):t.isActive&&((m=t.activated)==null?void 0:m.axis)===r?_("div",{children:[`${B(e,`${r}.nbAtoms`,"")} (`,f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):e[r].nbAtoms:t.isActive&&((g=t.activated)==null?void 0:g.axis)===r?_("div",{children:["0 (",f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):""}))}function R2({rowData:e,assignmentZone:t,onHoverZoneX:n,onHoverZoneY:o,showUnlinkButtonZoneX:s,showUnlinkButtonZoneY:i,setShowUnlinkButtonZoneX:r,setShowUnlinkButtonZoneY:l,rowSpanTags:a,onClick:u,onUnlink:d,highlightZoneX:h,highlightZoneY:m}){return _(c.exports.Fragment,{children:[f(vl,{rowData:e,assignment:t,highlight:h,onHover:n,onClick:u,onUnlink:d,axis:"x",showUnlinkButton:s,setShowUnlinkButton:r,rowSpanTags:a}),f(vl,{rowData:e,assignment:t,highlight:m,onHover:o,onClick:u,onUnlink:d,axis:"y",showUnlinkButton:i,setShowUnlinkButton:l,rowSpanTags:a})]})}const N2={backgroundColor:"#ff6f0057"},M2={backgroundColor:"#f5f5dc"};function _2({rowData:e,onUnlink:t,onContextMenu:n,rowIndex:o}){var D,O,L,z;const s=dt(e.id),i=re([s.id]),r=re([ke(s.id,"X")].concat(((D=s.assigned)==null?void 0:D.x)||[])),l=re([ke(s.id,"Y")].concat(((O=s.assigned)==null?void 0:O.y)||[])),a=dt(e.tableMetaInfo.id),u=re([ke(a.id,"X")].concat(((L=a.assigned)==null?void 0:L.x)||[],ke(a.id,"Crosshair"))),d=re([ke(a.id,"Y")].concat(((z=a.assigned)==null?void 0:z.y)||[],ke(a.id,"Crosshair"))),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),[y,S]=c.exports.useState(!1),[v,C]=c.exports.useState(!1),E=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:B(e,"tableMetaInfo.hide",!1)===!0?{display:"none"}:null}),[e]),T=c.exports.useCallback((V,W,$)=>{V&&V.stopPropagation(),t(e,W,e.tableMetaInfo.signalIndex,$),$==="x"?W!==void 0?W?(m(!1),s.removeAll("x")):(S(!1),a.removeAll("x")):(m(!1),S(!1)):$==="y"?W!==void 0?W?(x(!1),s.removeAll("y")):(C(!1),a.removeAll("y")):(x(!1),C(!1)):(m(!1),s.removeAll("x"),S(!1),a.removeAll("x"),x(!1),s.removeAll("y"),C(!1),a.removeAll("y"))},[a,s,t,e]),R=c.exports.useCallback((V,W,$)=>{V.stopPropagation(),W.setActive($)},[]),I=c.exports.useMemo(()=>({onMouseEnter:()=>{s.show("x"),r.show()},onMouseLeave:()=>{s.hide(),r.hide()}}),[s,r]),N=c.exports.useMemo(()=>({onMouseEnter:()=>{s.show("y"),l.show()},onMouseLeave:()=>{s.hide(),l.hide()}}),[s,l]),A=c.exports.useMemo(()=>({onMouseEnter:()=>{a.show("x"),u.show()},onMouseLeave:()=>{a.hide(),u.hide()}}),[a,u]),P=c.exports.useMemo(()=>({onMouseEnter:()=>{a.show("y"),d.show()},onMouseLeave:()=>{a.hide(),d.hide()}}),[a,d]);return w("tr",k(b({onContextMenu:V=>n(V,e),style:i.isActive||s.isActive?N2:B(e,"tableMetaInfo.isConstantlyHighlighted",!1)===!0?M2:null},i.onHover),{children:[p("td",k(b({},E),{children:o+1})),p(P2,{rowData:e,onHoverSignalX:A,onHoverSignalY:P}),p(I2,{rowData:e,assignmentSignal:a,onHoverSignalX:A,onHoverSignalY:P,showUnlinkButtonSignalX:y,showUnlinkButtonSignalY:v,setShowUnlinkButtonSignalX:V=>S(V),setShowUnlinkButtonSignalY:V=>C(V),onClick:R,onUnlink:T,highlightSignalX:u,highlightSignalY:d}),p(R2,{rowData:e,assignmentZone:s,onHoverZoneX:I,onHoverZoneY:N,showUnlinkButtonZoneX:h,showUnlinkButtonZoneY:g,setShowUnlinkButtonZoneX:V=>m(V),setShowUnlinkButtonZoneY:V=>x(V),rowSpanTags:E,onClick:R,onUnlink:T,highlightZoneX:r,highlightZoneY:l}),p(D2,{rowData:e,rowSpanTags:E})]}))}const F2=M`
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
`;function L2({tableData:e,onUnlink:t,context:n,nuclei:o,experiment:s}){const i=c.exports.useRef(null),r=c.exports.useCallback((m,g)=>{Gt(m)||(m.preventDefault(),i.current.handleContextMenu(m,g))},[i]),l=c.exports.useMemo(()=>{const m=[];return e.forEach((g,x)=>{g.signals.length===1?m.push(k(b({},g),{tableMetaInfo:k(b({},g.tableMetaInfo),{signal:g.signals[0],rowIndex:x,signalIndex:0,id:g.signals[0].id,experiment:s,nuclei:o})})):g.signals.length>1&&g.signals.forEach((y,S)=>{let v=!1,C=null;S<g.signals.length-1&&S===0?C=g.signals.length:v=!0,m.push(k(b({},g),{tableMetaInfo:k(b({},g.tableMetaInfo),{signal:y,rowSpan:C,hide:v,rowIndex:x,signalIndex:S,id:y.id,experiment:s})}))})}),m},[s,o,e]),{items:a,isSortedDesc:u,onSort:d}=Ld(l),h=c.exports.useMemo(()=>a.map((m,g)=>p(_2,{rowIndex:g,rowData:m,onUnlink:t,onContextMenu:(x,y)=>r(x,y)},`${m.tableMetaInfo.id}`)),[r,a,t]);return w("div",{children:[w("table",{css:F2,children:[w("thead",{children:[w("tr",{children:[p("th",{rowSpan:2,children:"#"}),p("th",{colSpan:2,children:"\u03B4 (ppm)"}),p("th",{colSpan:2,children:p(ea,{})}),p("th",{colSpan:2,children:"\u03A3"}),p("th",{rowSpan:2,children:"Kind"}),p("th",{rowSpan:2,children:""})]}),w("tr",{children:[p("th",k(b({id:"tableMetaInfo.signal.x.delta"},d),{children:w(nn,{text:"F2",children:[o[0]," ",u("tableMetaInfo.signal.x.delta").content]})})),p("th",k(b({id:"tableMetaInfo.signal.y.delta"},d),{children:w(nn,{text:"F1",children:[o[1]," ",u("tableMetaInfo.signal.y.delta").content]})})),p("th",{children:p(nn,{text:"F2",children:o[0]})}),p("th",{children:p(nn,{text:"F1",children:o[1]})}),p("th",{children:p(nn,{text:"F2",children:o[0]})}),p("th",{children:p(nn,{text:"F1",children:o[1]})})]})]}),p("tbody",{children:h})]}),p(qt,{ref:i,context:n})]})}function nn(e){return w(Ve,{children:[p("div",{style:{position:"absolute",fontSize:8,color:"#3539E6"},children:e.text}),p("div",{style:{marginLeft:5},children:e.children})]})}const O2=M`
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
`;function $2({zones:e,activeTab:t,xDomain:n,yDomain:o,experiment:s}){const[i,r]=c.exports.useState(!1),l=je(),a=X(),u=fe(),[d,h]=c.exports.useState(!1),m=c.exports.useRef(),g=c.exports.useMemo(()=>{const I=(A,P,D,O)=>(A=A*1e4,P=P*1e4,D=D*1e4,O=O*1e4,(P>=n[0]*1e4&&A<=n[1]*1e4||A<=n[0]*1e4&&P>=n[1]*1e4)&&(O>=o[0]*1e4&&D<=o[1]*1e4||D<=o[0]*1e4&&O>=o[1]*1e4)),N=A=>A.filter(P=>I(P.x.from,P.x.to,P.y.from,P.y.to));if(e.values)return(i?N(e.values):e.values).map(P=>k(b({},P),{tableMetaInfo:{isConstantlyHighlighted:I(P.x.from,P.x.to,P.y.from,P.y.to)}}))},[e,i,n,o]),x=c.exports.useCallback(()=>{r(!i)},[i]),y=c.exports.useCallback((I=null,N=void 0,A=-1,P=void 0)=>{a({type:mu,payload:{zoneData:I,assignmentData:l,isOnZoneLevel:N,signalIndex:A,axis:P}})},[l,a]),S=c.exports.useCallback(()=>{y()},[y]),v=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:S},{text:"No"}]})},[S,u]),C=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All zones will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{a({type:ps,payload:{assignmentData:l}})}},{text:"No"}]})},[l,a,u]),E=c.exports.useCallback(()=>{h(!d)},[d]),T=c.exports.useCallback(()=>{m.current.saveSetting(),h(!1)},[]),R=c.exports.useCallback(I=>{pe.emit("onZonesVisibilityChange",{key:I})},[]);return p(Ve,{children:w("div",{css:[Rt,O2,d&&M`
              th {
                position: relative;
              }
            `],children:[!d&&w(ot,{counter:e.values?e.values.length:0,onDelete:C,deleteToolTip:"Delete All Zones",onFilter:x,filterToolTip:i?"Show all zones":"Hide zones out of view",filterIsActive:i,counterFiltered:g==null?void 0:g.length,showSettingButton:!0,onSettingClick:E,children:[p(Ee,{title:"Remove all Assignments",popupPlacement:"right",children:p("button",{className:"remove-assignments-btn",type:"button",onClick:v,disabled:!e.values||e.values.length===0,children:p(ql,{})})}),p(Ge,{popupTitle:"show/hide zones",popupPlacement:"right",defaultValue:!0,onClick:()=>R("zones"),children:p("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"z"})}),p(Ge,{popupTitle:"show/hide signals",popupPlacement:"right",defaultValue:!0,onClick:()=>R("signals"),children:p("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"s"})}),p(Ge,{popupTitle:"show/hide peaks",popupPlacement:"right",defaultValue:!0,onClick:()=>R("peaks"),children:p("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"p"})})]}),d&&p(Pn,{onSave:T,onClose:E}),p("div",{className:"inner-container",children:d?p(g2,{ref:m}):p("div",{className:"table-container",children:g&&g.length>0?p(L2,{tableData:g,onUnlink:y,nuclei:t&&t.split(",").length===2?t.split(","):["?","?"],experiment:s}):p(Nt,{})})})]})})}const H2=c.exports.memo($2),z2={zones:{},info:{}};function V2(){const{displayerKey:e,xDomain:t,yDomain:n,activeTab:o}=H(),{zones:s,info:i}=Se(z2);return p(H2,{xDomain:t,yDomain:n,activeTab:o,displayerKey:e,zones:s,experiment:i.experiment})}const Zo={data:{solvent:{description:"Solvent database",value:X2([...Ah,...Th])}}};function Cl(e,t){const o=(Zo.data[e]?Zo.data[e].value:[]).filter(r=>r.nucleus===t);return{data:o,getSolvents:()=>j2(o),search:(r=[])=>Dh(o,{keywords:r})}}function j2(e){const t=[],n=new Map;for(const o of e)n.has(o.solvent)||(n.set(o.solvent,!0),t.push(o.solvent));return t}function B2(){return Object.keys(Zo.data).map(e=>{const{description:t}=Zo.data[e];return{id:e,name:t}})}function X2(e){return e.map(t=>(t.ranges=t.ranges.map(n=>b({id:q()},n)),t),[])}function Y2(e){const t=[];let n=0;for(const r of e){let l=[];const o=r,{ranges:a}=o,u=G(o,["ranges"]);for(const d of a){l.push(d.id||q());const s=d,{signals:h=[]}=s,m=G(s,["signals"]);for(const g of h){const i=g,{js:x=[]}=i,y=G(i,["js"]),S=G2(x),v=k(b(b(b(b({},u),m),y),S),{index:n,id:l,ranges:a});t.push(v)}}n++}return t}function G2(e){if(e&&e.length>0){const{coupling:t,multiplicity:n}=e.reduce((o,{coupling:s,multiplicity:i})=>(o.coupling.push(s.toFixed(1)),o.multiplicity+=i,o),{coupling:[],multiplicity:""});return{multiplicity:n,coupling:t.join(",")}}else return{multiplicity:"s",coupling:""}}const Sl={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputContainer:{flex:4,borderRadius:"5px"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"100px"}};function W2(e,t){const n=le(),o=se(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{const l=ft(n.current,"formatting.panels.database");s.current.setValues(l||gd)},[n]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{n.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"database",value:l}}),o.success("database preferences saved successfully")},[o,n]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:Sl.container,children:f(ce,{onSubmit:r,ref:s,children:_("div",{style:Sl.groupContainer,children:[f(Fe,{label:"Smiles",checkControllerName:"showSmiles",hideFormat:!0}),f(Fe,{label:"Solvent",checkControllerName:"showSolvent",hideFormat:!0}),f(Fe,{label:"Names",checkControllerName:"showNames",hideFormat:!0}),f(Fe,{label:"Range",checkControllerName:"showRange",hideFormat:!0}),f(Fe,{label:"\u03B4 (ppm)",checkControllerName:"showDelta",hideFormat:!0}),f(Fe,{label:"Assignment",checkControllerName:"showAssignment",hideFormat:!0}),f(Fe,{label:"J (Hz)",checkControllerName:"showCoupling",hideFormat:!0}),f(Fe,{label:"Multiplicity",checkControllerName:"showMultiplicity",hideFormat:!0})]})})})}var Z2=c.exports.forwardRef(W2);const Fs={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},U2=[{showWhen:"showNames",index:1,Header:"names",accessor:e=>e.names?e.names.join(","):"",enableRowSpan:!0,style:b({width:"100px",minWidth:"100px",maxWidth:"100px"},Fs)},{showWhen:"showRange",index:2,Header:"From - To",accessor:e=>`${e.from.toFixed(2)} - ${e.to.toFixed(2)}`,enableRowSpan:!0},{showWhen:"showDelta",index:3,Header:"\u03B4 (ppm)",accessor:"delta"},{showWhen:"showAssignment",index:4,Header:"Assignment",accessor:"assignment"},{showWhen:"showMultiplicity",index:5,Header:"Multi.",accessor:"multiplicity"},{showWhen:"showCoupling",index:6,Header:"J (Hz)",accessor:"coupling",style:b({width:"60px",minWidth:"60px"},Fs)},{showWhen:"showSolvent",index:7,Header:"Solvent",accessor:"solvent",style:b({width:"80px",minWidth:"80px"},Fs)},{showWhen:"showSmiles",index:8,Header:"Smiles",accessor:"index",enableRowSpan:!0,Cell:({row:e})=>p("div",{className:"smiles-container",style:{width:"100px",display:"block",overflow:"hidden"},children:(e==null?void 0:e.original.smiles)&&p(Ih,{height:60,width:60,smiles:e.original.smiles})})}];function K2({data:e,onAdd:t}){const n=le(),o=c.exports.useMemo(()=>[{index:10,Header:"",width:"1%",maxWidth:"24px",minWidth:"24px",id:"add-button",accessor:"index",enableRowSpan:!0,Cell:({row:i})=>p("button",{type:"button",className:"add-button",onClick:()=>t(i),children:p(yn,{})})}],[t]),s=c.exports.useMemo(()=>{const i=ft(n.current,"formatting.panels.database",gd);let r=[...o];for(const a of U2){const l=a,{showWhen:u}=l,d=G(l,["showWhen"]);i[u]&&vs(r,d)}return r.sort((a,u)=>a.index-u.index)},[o,n]);return e&&e.length>0?p(Dn,{data:e,columns:s,highlightedSource:ue.DATABASE,groupKey:"index",approxItemHeight:30,enableVirtualScroll:!0}):p(Nt,{})}var q2=c.exports.memo(K2);const J2=M`
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
`,kl={solvent:"",searchKeywords:""};function Q2({nucleus:e,selectedTool:t}){const n=X(),{handleChangeOption:o}=Ss(),s=Be(e),[i,r]=c.exports.useState(!1),l=c.exports.useRef(),[a,u]=c.exports.useState(kl),d=c.exports.useRef(null),[h,m]=c.exports.useState({data:[],databases:[],solvents:[]}),{item:g}=Ph("Database"),x=c.exports.useCallback(()=>{r(!i)},[i]),y=c.exports.useCallback(()=>{l.current.saveSetting(),r(!1)},[]),S=c.exports.useCallback(I=>{if(typeof I=="string"||I===-1){const N=String(I);u(A=>k(b({},A),{solvent:N}))}else u(N=>k(b({},N),{searchKeywords:I.target.value}))},[]);c.exports.useEffect(()=>{g!=null&&g.isOpen&&setTimeout(()=>{const I=nA(B2());d.current=Cl(I[0].key,e);const N=d.current.data,A=wl(d.current.getSolvents());m({data:N,databases:I,solvents:A})})},[g==null?void 0:g.isOpen,e]),c.exports.useEffect(()=>{const{solvent:I,searchKeywords:N}=a;setTimeout(()=>{if(d.current)if(!I&&!N){const A=d.current.data,P=wl(d.current.getSolvents());m(D=>k(b({},D),{data:A,solvents:P}))}else{const A=[...N.split(",")];I!=="-1"&&A.unshift(`solvent:${I}`);const P=d.current.search(A);m(D=>k(b({},D),{data:P}))}})},[a]),c.exports.useEffect(()=>{function I(N){t===F.databaseRangesSelection.id&&u(A=>{const P=A.searchKeywords?A.searchKeywords.split(","):[],[D,O]=N.range,L=[...P,`delta:${s(D)}..${s(O)}`].join(",");return k(b({},A),{searchKeywords:L})})}return pe.on("brushEnd",I),()=>{pe.off("brushEnd",I)}},[s,t]);const v=c.exports.useCallback(I=>{d.current=Cl(I,e),u(kl)},[e]),C=c.exports.useMemo(()=>Y2(h.data),[h.data]),E=c.exports.useCallback(I=>{const{index:N}=I.original,{ranges:A,solvent:P,names:D=[]}=h.data[N];n({type:Ru,payload:{ranges:A,info:{solvent:P,nucleus:e,name:D[0]}}})},[n,e,h.data]),T=c.exports.useCallback(()=>{u(I=>k(b({},I),{searchKeywords:""}))},[]),R=c.exports.useCallback(I=>{const N=I?F.databaseRangesSelection.id:F.zoom.id;o(N)},[o]);return w("div",{css:[Rt,J2,i&&M`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!i&&w(ot,{showSettingButton:!0,onSettingClick:x,canDelete:!1,className:"header",children:[p(Ge,{defaultValue:t===F.databaseRangesSelection.id,popupTitle:"Filter by select ranges",popupPlacement:"right",onClick:R,children:p(Rh,{style:{pointerEvents:"none",fontSize:"12px",transform:"rotate(90deg)"}})},`${t}`),p(Me,{style:{flex:2},data:h.databases,onChange:v}),p(Me,{style:{flex:1},data:h.solvents,onChange:S}),p(wt,{value:a.searchKeywords,renderIcon:()=>p(Nh,{}),style:{inputWrapper:{flex:3}},className:"search-input",type:"text",debounceTime:250,placeholder:"Search for parameter...",onChange:S,onClear:T,canClear:!0})]}),i&&p(Pn,{onSave:y,onClose:x}),p("div",{className:"inner-container",children:i?p(Z2,{ref:l}):p(q2,{data:C,onAdd:E})})]})}const eA=c.exports.memo(Q2);function tA(){const{activeTab:e,toolOptions:{selectedTool:t}}=H();return e?p(eA,{nucleus:e,selectedTool:t}):p("div",{})}function wl(e){const t=e.map(n=>({key:n,label:n,value:n}),[]);return t.unshift({key:"-1",label:"All",value:"-1"}),t}function nA(e){return e.map(({id:t,name:n})=>({key:t,value:t,label:n}))}const oA={width:"100%",height:"100%",padding:"0px",display:"flex",flexDirection:"column"};function sA({children:e,className:t,style:n,testID:o}){return f("div",{className:t,style:b(b({},oA),n),"data-test-id":o,children:e})}var iA=c.exports.memo(sA);const rA={width:"100%",overflowY:"auto",display:"flex",flexDirection:"column",padding:"5px 0px",color:"gray"};function lA({children:e,className:t,style:n}){const o=c.exports.useMemo(()=>c.exports.Children.map(e,s=>c.exports.cloneElement(s,{style:b({borderBottom:"0.55px solid #d8d8d8"},s.props.style)})),[e]);return f("div",{className:t,style:b(b({},rA),n),children:o})}var aA=c.exports.memo(lA);const cA={width:"100%",display:"flex",alignItems:"flex-start"};function uA(e){return e.toLowerCase()==="top"?"flex-start":e.toLowerCase()==="bottom"?"flex-end":"center"}function dA({children:e,className:t,style:n,align:o="center",vAlign:s="center",size:i=1,onClick:r=()=>null}){return f("div",{className:t,style:b(k(b({},cA),{alignItems:uA(s),textAlign:o,flex:i}),n),onClick:r,children:e})}var Xn=c.exports.memo(dA);const pA={width:"100%",display:"flex",padding:"0px 5px",color:"#424242",backgroundColor:"#d8d8d8",borderBottom:"0.55px solid #d8d8d8",fontSize:11,fontWeight:"bold"};function hA({children:e,className:t,style:n}){return f("div",{className:t,style:b(b({},pA),n),children:e})}var fA=c.exports.memo(hA);const mA={width:"100%",display:"flex",padding:"5px 0px"};function gA({children:e,className:t,style:n,onClick:o=()=>null}){return f("div",{className:t,style:b(b({},mA),n),onClick:o,children:e})}var Bd=c.exports.memo(gA);function xA({filters:e,spectraCounter:t,selectedTool:n,activeFilterID:o}){const s=X(),i=fe(),r=se(),l=c.exports.useRef({index:null}),a=c.exports.useCallback((g,x)=>{(async()=>{const y=await r.showLoading(`${x?"Enable":"Disable"} filter in progress`);setTimeout(()=>{s({type:Dc,id:g,checked:x}),y()},0)})()},[r,s]),u=c.exports.useCallback(({id:g,name:x})=>{const y=[{text:"Yes",handler:async()=>{const S=await r.showLoading("Delete filter process in progress");s({type:Ic,payload:{id:g}}),S()}},{text:"No"}];t>1&&y.unshift({text:"Yes, for all spectra",handler:async()=>{const S=await r.showLoading("Delete all spectra filter process in progress");s({type:Pc,payload:{filterType:x}}),S()}}),i.showConfirmDialog({message:"Are you sure you want to delete the spectrum?",buttons:y})},[r,s,i,t]),d=c.exports.useCallback(g=>{(async()=>{const x=await r.showLoading("Filter snapshot process in progress");setTimeout(()=>{s({type:eu,id:g}),x()},0)})()},[r,s]),h=c.exports.useCallback((g,x)=>{const{id:y,name:S}=g;o&&o===y?l.current.index=x:o||(l.current.index=null);const v=["filter-row"];return o===y?v.push("filter-active"):n===S?v.push("filter-current"):l.current.index!=null&&x>l.current.index&&v.push("filter-deactive"),v.join(" ")},[o,n]),m=c.exports.useMemo(()=>e==null?void 0:e.map((g,x)=>_(Bd,{className:h(g,x),children:[f(Xn,{align:"center",size:2,onClick:()=>d(g.id),children:g.label}),f(Xn,{align:"left",size:3,children:f("div",{onClick:y=>y.stopPropagation(),children:f(oa,{data:g.error?g.error:g.value})})}),_(Xn,{align:"center",vAlign:"center",size:1,children:[f(po,{checked:g.flag,onChange:y=>a(g.id,y.target.checked)}),g.isDeleteAllow&&f("button",{className:"btn",type:"button",onClick:()=>u(g),children:f(At,{})})]})]},g.id)),[d,e,h,u,a]);return f(et,{children:m})}const bA={filters:[]},yA=c.exports.memo(xA);function vA(){const{toolOptions:{selectedTool:e,data:{activeFilterID:t}}}=H(),{filters:n}=Se(bA),o=pd().length;return f(yA,{selectedTool:e,filters:n,spectraCounter:o,activeFilterID:t})}const CA=M`
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
`;function SA({filters:e}){return c.exports.useMemo(()=>e?w(iA,{testID:"filters-table",children:[p(fA,{children:w(Bd,{children:[p(Xn,{align:"center",size:1,children:"Label"}),p(Xn,{align:"center",size:2,children:"Properties"})]})}),p(aA,{css:CA,children:p(vA,{})})]}):p(Nt,{}),[e])}const kA={filters:[]},wA=c.exports.memo(SA);function EA(){const{filters:e}=Se(kA);return p(wA,{filters:e})}const AA=M`
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
`,TA=Q().shape({frequency:ae().integer().required().label("Frequency"),"1d":Q({"1H":Q({from:ae().integer().required().label("1H ' From ' "),to:ae().integer().required().label("1H ' To ' ")}),"13C":Q().shape({from:ae().integer().required().label("13C ' From ' "),to:ae().integer().required().label("13C ' To ' ")}),lineWidth:ae().integer().min(1).required().label("Line Width")})});function DA({onPredict:e=()=>null}){const t=c.exports.useRef(),n=c.exports.useCallback(()=>{t.current.submitForm()},[]),o=c.exports.useCallback(s=>{(async()=>e(s))()},[e]);return w("div",{css:AA,children:[p("div",{children:w(ce,{ref:t,initialValues:ec,validationSchema:TA,onSubmit:o,children:[p(Md,{}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Frequency : "}),p(rn,{data:tc,style:{width:290,height:30,margin:0},name:"frequency"})]}),w("div",{className:"row",children:[p(Le,{value:"1H",className:"custom-label"}),p(te,{title:"From",children:p(Z,{name:"1d.1H.from",type:"number"})}),p(te,{title:"To",style:{label:{padding:"0 10px"}},children:p(Z,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row",children:[p(Le,{value:"13C",className:"custom-label"}),p(te,{title:"From",children:p(Z,{name:"1d.13C.from",type:"number"})}),p(te,{title:"To",style:{label:{padding:"0 10px"}},children:p(Z,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Line Width : "}),p(Z,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),p("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]})]})}),p("div",{children:p(de.Done,{onClick:n,children:"Predict spectrum"})})]})}function IA(){const[e,t]=c.exports.useState(),n=c.exports.useCallback(r=>{t(r)},[]),o=X(),s=se(),i=c.exports.useCallback(r=>{(async()=>{if(e){o({type:St,isLoading:!0});const l=await s.showLoading("Predict 1H, 13C, COSY, HSQC, and HMBC in progress");o({type:hs,payload:{mol:e,options:r}}),l()}else s.error("No Molecule selected")})()},[s,o,e]);return f(_d,{onMoleculeChange:n,actionsOptions:{hidePredict:!0,hideDelete:!0,hideExport:!0},children:f(DA,{onPredict:i})})}const PA=[{title:"Spectra",component:f(HE,{}),hidePreferenceKey:"spectraPanel",mode:null},{title:"Information",component:f(vS,{}),style:{overflow:"hidden"},hidePreferenceKey:"informationPanel",mode:null},{title:"Peaks",component:f(cw,{}),hidePreferenceKey:"peaksPanel",mode:null},{title:"Filters",component:f(EA,{}),hidePreferenceKey:"filtersPanel",mode:null},{title:"Integrals",component:f(ok,{}),hidePreferenceKey:"integralsPanel",mode:null},{title:"Ranges",component:f(rE,{}),hidePreferenceKey:"rangesPanel",mode:Y.DM_1D},{title:"Multiple Spectra Analysis",component:f(Jk,{}),hidePreferenceKey:"multipleSpectraAnalysisPanel",mode:null},{title:"Matrix Generation",component:f(hk,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Zones",component:f(V2,{}),hidePreferenceKey:"zonesPanel",mode:Y.DM_2D},{title:"Summary",component:f(d2,{}),hidePreferenceKey:"summaryPanel",mode:null},{title:"Structures",component:f(_d,{}),hidePreferenceKey:"structuresPanel",mode:null},{title:"Database",component:f(tA,{}),hidePreferenceKey:"databasePanel",mode:null},{title:"Automatic Assignment",component:f(fS,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Prediction",component:f(IA,{}),hidePreferenceKey:"predictionPanel",mode:null}],El={null:"Spectra",peakPicking:"Peaks",integral:"Integrals",rangesPicking:"Ranges",zone2D:"Zones",multipleSpectraAnalysis:"Multiple Spectra Analysis"};function RA(){const e=le();return c.exports.useCallback(t=>B(e.current,`display.panels.${t.hidePreferenceKey}`),[e])}function NA({displayerMode:e}){const t=RA(),n=Ed(),o=c.exports.useCallback(i=>{const r=t(i);return(r==null?void 0:r.hidden)!==!0&&(r==null?void 0:r.display)===!0&&i.isExperimental===void 0&&(i.mode==null||i.mode===e)||i.isExperimental&&n},[e,t,n]),s=c.exports.useCallback(i=>{const r=t(i);return(r==null?void 0:r.hidden)!==!0&&(r==null?void 0:r.open)},[t]);return f("div",{style:{width:"100%",height:"100%",flex:"1 1 0%"},children:f(vr,{children:PA.map(i=>o(i)&&f(vr.Item,{title:i.title,defaultOpened:s(i),children:i.component},i.title))})})}const MA=c.exports.memo(NA);function _A(){const{displayerMode:e,toolOptions:{selectedTool:t}}=H();return f(MA,{displayerMode:e,selectedTool:t})}function Ss(){const e=X(),t=se(),{open:n}=Mh(),[o,s]=c.exports.useState(!1),i=c.exports.useRef({clicks:[]}),r=c.exports.useCallback(h=>{[F.peakPicking.id,F.integral.id,F.zone2D.id,F.exclusionZones.id].includes(h)&&t.show("Press Shift + Left Mouse button to select zone"),Object.keys(El).includes(h)&&n(El[h]),e({type:co,payload:{selectedTool:h}})},[t,e,n]),l=c.exports.useCallback(()=>{i.current.clicks.length===0&&e({type:xn,zoomType:Bn.HORIZONTAL});const h=Ko(()=>{i.current.clicks=[]},500);i.current.clicks.push(h),h(),i.current.clicks.length>1&&(_l(i.current.clicks,m=>m.cancel()),i.current.clicks=[],e({type:xn}))},[e,i]),a=c.exports.useCallback(()=>{e({type:Li})},[e]),u=c.exports.useCallback(()=>{e({type:Ni,isRealSpectrumVisible:!o}),s(!o)},[e,o]),d=c.exports.useCallback(()=>{e({type:Hi})},[e]);return{handleChangeOption:r,handleFullZoomOut:l,changeDisplayViewModeHandler:a,changeSpectrumViewHandler:u,alignSpectrumsVerticallyHandler:d,isRealSpectrumShown:o}}function FA(){const{keysPreferences:e,displayerMode:t,overDisplayer:n,data:o,activeSpectrum:s}=H(),i=X(),r=se(),l=Yi(),{handleChangeOption:a,handleFullZoomOut:u,alignSpectrumsVerticallyHandler:d,changeDisplayViewModeHandler:h}=Ss(),{saveToClipboardHandler:m,saveAsJSONHandler:g,saveAsHandler:x}=wd(),{highlight:y,remove:S}=Tn(),v=je(),C=c.exports.useMemo(()=>t===Y.DM_1D&&o&&o.length>0,[o,t]),E=c.exports.useCallback(async N=>{const{type:A,extra:{id:P}}=N;switch(A){case ue.INTEGRAL:{i({type:as,integralID:P}),S();break}case ue.PEAK:{i({type:rs,data:{id:P}}),S();break}case ue.RANGE:{i({type:ds,payload:{data:{id:P,assignmentData:v}}}),S();break}case ue.ZONE:{i({type:ps,payload:{id:P,assignmentData:v}}),S();break}case ue.EXCLUSION_ZONE:{const D=await r.showLoading("Exclusion filter in progress");i({type:Cu,payload:{id:P,spectrumID:N.extra.spectrumID}}),D(),S();break}}},[v,i,S,r]),T=c.exports.useCallback((N,A)=>{o&&o.length>0&&A>=1&&A<=9&&(N.shiftKey?(i({type:Vo,keyCode:A}),r.show(`Configuration Reset, press '${A}' again to reload it.`)):Gt(N)||(e!=null&&e[A]?i({type:Vi,keyCode:A}):(i({type:Vo,keyCode:A}),r.show(`Configuration saved, press '${A}' again to reload it.`))))},[r,o,i,e]),R=c.exports.useCallback(N=>{function A(D,O=!0){if(t===Y.DM_1D&&!s)throw new Error(`Select a spectrum to proceed with ${D}`);if(O&&t===Y.DM_2D)throw new Error(`Switch to 1D Mode and select a spectrum to proceed with ${D}`)}function P(D,O=!0){if(t===Y.DM_2D&&!s)throw new Error(`Select a spectrum to proceed with ${D}`);if(O&&t===Y.DM_1D)throw new Error(`Switch to 2D Mode and select a spectrum to proceed with ${D}`)}try{if(!N.shiftKey&&!N.metaKey)switch(N.key){case"f":u();break;case"z":case"Escape":a(F.zoom.id);break;case"r":{t===Y.DM_2D?(P(F.zone2D.label,!1),a(F.zone2D.id)):(A(F.rangesPicking.label,!1),a(F.rangesPicking.id));break}case"a":{A(F.phaseCorrection.label),a(F.phaseCorrection.id);break}case"b":{A(F.baseLineCorrection.label),a(F.baseLineCorrection.id);break}case"p":{A(F.peakPicking.label),a(F.peakPicking.id);break}case"i":{A(F.integral.label),a(F.integral.id);break}case"e":{A(F.exclusionZones.label),a(F.exclusionZones.id);break}default:}if(!N.shiftKey&&!N.metaKey&&!N.ctrlKey)switch(N.key){case"c":{C&&d();break}case"s":{C&&h();break}default:}if(!N.shiftKey&&(N.metaKey||N.ctrlKey))switch(N.key){case"c":m(),N.preventDefault();break;case"s":g(),N.preventDefault();break;case"o":l(),N.preventDefault();break;default:}if(N.shiftKey&&(N.metaKey||N.ctrlKey))switch(N.key){case"s":case"S":x(),N.preventDefault();break;default:}}catch(D){r.error(D.message)}},[s,r,d,C,h,t,a,u,l,x,g,m]),I=c.exports.useCallback(N=>{if(!["input","textarea"].includes(N.target.localName)&&n){const A=Number(N.code.substr(N.code.length-1))||0;A>0?T(N,A):["Delete","Backspace"].includes(N.key)&&y.sourceData?(N.preventDefault(),E(y.sourceData)):R(N)}},[E,y,T,n,R]);return c.exports.useEffect(()=>(document.addEventListener("keydown",I,!0),()=>document.removeEventListener("keydown",I,!0)),[I]),null}function LA(e){const t=b({},Wi),n=e.payload.spectra||[];for(const o of n)kn(o)?OA(t,o.ranges):$A(t,o.zones);return t}function OA(e,t){const n=t.values.reduce((o,{id:s,diaIDs:i,signals:r})=>{o.push({id:s,diaIDs:i||[]});for(const l of r)o.push({id:l.id,diaIDs:l.diaIDs||[]});return o},[]);for(const{id:o,diaIDs:s}of n)for(const i of s)Xd(e,o,"x",i)}function $A(e,t){const n=t.values.reduce((o,{id:s,x:i,y:r,signals:l})=>{o.push({id:s,diaIDs:{x:i.diaIDs||[],y:r.diaIDs||[]}});for(const a of l)o.push({id:a.id,diaIDs:{x:a.x.diaIDs||[],y:a.y.diaIDs||[]}});return o},[]);for(const{id:o,diaIDs:s}of n)["x","y"].forEach(i=>{for(const r of s[i])Xd(e,o,i,r)})}function Xd(e,t,n,o){var s,i;Array.isArray((i=(s=e.assignments)==null?void 0:s[t])==null?void 0:i[n])&&!e.assignments[t][n].includes(o)?e.assignments[t][n].push(o):e.assignments=k(b({},e.assignments),{[t]:k(b({},e.assignments[t]),{[n]:[o]})})}function Yd(e,t){var r,l;const{id:n,atomID:o="",axis:s}=t,i=((l=(r=e.assignments)==null?void 0:r[n])==null?void 0:l[s])||null;i&&(o?(i.filter(a=>a!==o),e.assignments[n][s]=i):e.assignments[n][s]=[])}function HA(e,t){const n=b({},e),{ids:o,atomID:s="",axis:i}=t;for(const r of o)Yd(n,{id:r,atomID:s,axis:i});return n}function zA(e,t){var i;let{id:n,axis:o}=t.payload;const s=((i=e.activated)==null?void 0:i.id)===n;return k(b({},e),{activated:s?null:{id:n,axis:o||null}})}function VA(e,t){var a;const{id:n,atomID:o,axis:s,dimension:i}=t,r=((a=e.assignments)==null?void 0:a[n])||null,l=(r==null?void 0:r[s])||null;if(l)l.includes(n)||l.push(o);else{const u=s==="x"?"y":"x";e.assignments=k(b({},e.assignments),{[n]:b(k(b({},e.assignments[n]),{[s]:[o]}),i==="2D"&&{[u]:r!=null&&r[u]?r[u]:[]})})}}function jA(e,t){var l,a,u;const n=b({},e),{id:o,atomIDs:s,dimension:i}=t.payload,r=(l=e.activated)==null?void 0:l.axis;if(r){const d=((u=(a=e.assignments)==null?void 0:a[o])==null?void 0:u[r])||[];for(const h of s)d.includes(o)?Yd(n,{atomID:h,axis:r,id:o}):VA(n,{axis:r,id:o,atomID:h,dimension:i})}return n}function BA(e,t){switch(t.type){case"INITIATE_ASSIGNMENTS":return LA(t);case"REMOVE":{const{axis:n,ids:o,atomID:s}=t.payload;return HA(e,{axis:n,ids:o,atomID:s})}case"TOGGLE":return jA(e,t);case"SET_ACTIVE":return zA(e,t);case"SHOW":{const{id:n,axis:o}=t.payload;return k(b({},e),{highlighted:{id:n,axis:o||null}})}case"HIDE":return k(b({},e),{highlighted:null});default:return e}}function XA(e){const{spectraData:t}=e,[n,o]=c.exports.useReducer(BA,Wi),s=c.exports.useMemo(()=>({data:n,dispatch:o}),[n]);return c.exports.useEffect(()=>{t&&o({type:"INITIATE_ASSIGNMENTS",payload:{spectra:t}})},[t]),f(Zi.Provider,{value:s,children:e.children})}const YA="https://docs.nmrium.org";var GA={version:"git-1441c5c248c68987ddb0880629e934e2276874ba"};function WA({width:e=100,height:t=100}){return _("svg",{style:{width:e,height:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 752.34 221.73",children:[f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M.64,31.7A31.67,31.67,0,0,1,54.72,9.29l0,0A31.66,31.66,0,0,1,64,31.7V190a13.39,13.39,0,0,0,26.77,0V54a31.7,31.7,0,0,1,31.7-31.7V40.58A13.38,13.38,0,0,0,109.13,54V190a31.71,31.71,0,0,1-63.41,0V31.7a13.29,13.29,0,0,0-3.88-9.46l0,0A13.41,13.41,0,0,0,19,31.7V164.82H.64Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M154.21,54v68.17a13.34,13.34,0,0,0,3.89,9.47h0A13.39,13.39,0,0,0,181,122.14V99.32h-.06a31.63,31.63,0,0,1,9.29-22.38l0,0a31.65,31.65,0,0,1,44.8,0l0,0a31.58,31.58,0,0,1,9.3,22.39V118H226V99.32a13.3,13.3,0,0,0-3.89-9.46h0a13.44,13.44,0,0,0-18.93,0l0,0a13.3,13.3,0,0,0-3.83,8.19v24.09a31.7,31.7,0,0,1-54.11,22.42v0a31.66,31.66,0,0,1-9.3-22.4V54Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M729.19,96.34c-8.65,0-14.26,3.17-17.67,8-3.41-5.12-8.78-8-16-8-8.16,0-13.52,3.17-16.32,7.31v-5.6H661V159h18.28V124.62c0-7.19,3.41-11.46,9.5-11.46,5.85,0,8.78,3.9,8.78,10V159h18.27V124.62c0-7.19,3.42-11.46,9.51-11.46,5.85,0,8.77,3.9,8.77,10V159h18.28V121.57C752.34,106.33,743.2,96.34,729.19,96.34Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M629.26,98.05v33.26c0,8.66-4.63,12.56-11.33,12.56-5.85,0-10.6-3.54-10.6-11.09V98.05H589.05v37.41c0,16.45,10.48,25.22,22.79,25.22,8,0,14.13-2.92,17.42-7.43V159h18.28V98.05Z"}),f("rect",{fill:"#2b143e",x:"558.22",y:"98.05",width:"18.28",height:"60.93"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M567.36,92.68a11,11,0,1,0-11-11A11.08,11.08,0,0,0,567.36,92.68Z"}),f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M478.77,159H498V116.57L525.66,159H549.2l-22.3-34.75c5.45-2.13,8.12-4.14,11.48-8.86a31.07,31.07,0,0,0,6.07-18.26V94.62c0-10.61-3.45-15.93-9.28-21.78S520.75,63.09,510,63.09H478.71l.06,95.89Zm33.1-50.27h-6.46v-.06H498V82.19h10.87c4.67,0,9.44,1.38,11.94,3.81a12.84,12.84,0,0,1,3.81,9.2C524.58,102.52,518.92,108.71,511.87,108.71Z"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"372.91 60.8 372.91 158.98 392.16 158.98 392.16 119.23 419.91 157.41 447.61 119.23 447.61 158.98 466.87 158.98 466.87 60.8 419.91 125.22 372.91 60.8"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"283.89 61.04 283.89 159.1 303.14 159.1 303.14 105.85 361.01 160.93 361.01 62.83 341.67 62.83 341.67 116.08 283.89 61.04"})]})}const ZA=M`
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
`;function UA({onClose:e=()=>null}){return w("div",{css:ZA,children:[w("div",{className:"header handle",children:[p("span",{children:"About NMRium"}),p(me,{onClick:e})]}),w("div",{className:"container",children:[w("div",{className:"center-container",children:[p(WA,{width:160,height:50}),"Version ",p(KA,{}),p("span",{className:"separator"}),p("a",{href:"https://git.nmrium.org",target:"_blank",rel:"noreferrer",children:"GitHub ( https://git.nmrium.org )"})]}),p("div",{className:"center-container",children:p("span",{className:"separator"})}),p("span",{className:"content",children:"This project is developed by Zakodium S\xE0rl (Switzerland), the University of Cologne (Germany), Johannes Gutenberg University Mainz (Germany) and Universidad del Valle (Colombia)."}),w("div",{className:"center-container",children:[p("span",{className:"separator"}),p("span",{className:"title",children:"Funding is provided by"}),p("span",{className:"separator"})]}),p("div",{className:"content",children:w("ul",{children:[p("li",{children:"IDNMR grant, which part of the Scientific Library Services and Information Systems (LIS) initiative of the DFG."}),p("li",{children:"Zakodium S\xE0rl (Switzerland)."}),p("li",{children:"Universidad del Valle (Cali, Colombia)."})]})})]})]})}function KA(){const{version:e}=GA;return e==="HEAD"?p(Ve,{children:"HEAD"}):e.startsWith("git-")?w("a",{href:`https://github.com/cheminfo/nmrium/tree/${e.slice(4)}`,target:"_blank",rel:"noreferrer",children:["git-",e.slice(4,14)]}):p("a",{href:`https://github.com/cheminfo/nmrium/tree/${e}`,target:"_blank",rel:"noreferrer",children:e})}function qA(){return _(et,{children:[f("p",{className:"section-header",children:"Spectra"}),f(te,{title:"Transparency of Dimmed Spectra [ 0 - 1 ]",children:f(Z,{name:"controllers.dimmedSpectraTransparency",checkValue:e=>e>=0&&e<=1,type:"number"})})]})}const JA=[{label:"Spectra selection panel",name:"panels.spectraPanel"},{label:"Spectra information Panel",name:"panels.informationPanel"},{label:"Peaks and peak picking",name:"panels.peaksPanel"},{label:"Integration and integrals",name:"panels.integralsPanel"},{label:"1D ranges peak picking",name:"panels.rangesPanel"},{label:"Chemical structure panel",name:"panels.structuresPanel"},{label:"Filters Panel",name:"panels.filtersPanel"},{label:"2D zones peak picking",name:"panels.zonesPanel"},{label:"Assignment summary Panel",name:"panels.summaryPanel"},{label:"Multiple Spectra Analysis Panel",name:"panels.multipleSpectraAnalysisPanel"},{label:"Database Panel",name:"panels.databasePanel"},{label:"Prediction Panel",name:"panels.predictionPanel"},{label:"Experimental Features",name:"general.experimentalFeatures",hideOpenOption:!0}];function Al(e){return f(xt,{style:{container:{display:"block",margin:"0 auto",width:"fit-content"}},className:"checkbox-element",name:e.name},e.name)}function QA({preferences:e}){const t=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:o})=>o.index+1},{index:1,Header:"Feature",accessor:"label",style:{width:"60%"}},{index:2,Header:"Active",Cell:({row:o})=>f(Al,{name:`display.${o.original.name}.display`})},{index:3,Header:"Open on load",Cell:({row:o})=>o.original.hideOpenOption?f("div",{}):f(Al,{name:`display.${o.original.name}.open`})}],[]),n=c.exports.useMemo(()=>JA.filter(o=>B(e,`${o.name}.hidden`)!==!0),[e]);return f("div",{style:{width:"100%",overflow:"hidden"},children:f(Dn,{columns:t,data:n})})}const eT=M`
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
`;function tT(){const{values:e,setFieldValue:t}=he(),n=c.exports.useMemo(()=>B(e,"formatting.nuclei",{}),[e]),o=c.exports.useCallback(r=>{let l={};for(const a in n)a!==r&&(l[a]=n[a]);t("formatting.nuclei",l)},[n,t]),s=c.exports.useCallback(()=>{const r={name:"",ppm:"0.00",hz:"0.00"},l=q(),a=k(b({},n),{[l]:r});t("formatting.nuclei",a)},[n,t]),i=Object.keys(n);return w(c.exports.Fragment,{children:[p("p",{className:"section-header",children:"Nuclei Formatting"}),p("div",{css:eT,children:w("table",{children:[p("thead",{children:w("tr",{children:[p("th",{className:"counter-col",children:"#"}),p("th",{className:"nucleus-label-col",children:"Nucleus "}),p("th",{className:"nucleus-format-input-col",children:"\u03B4 (ppm)"}),p("th",{className:"nucleus-format-input-col",children:"Coupling (Hz)"}),p("th",{className:"nucleus-format-input-col"})]})}),p("tbody",{children:i==null?void 0:i.map((r,l)=>{const a=l+1;return w("tr",{children:[w("td",{className:"counter-col",children:[w("span",{children:[a," - "]})," "]}),p("td",{className:"nucleus-label-col",children:p(Z,{name:`formatting.nuclei.${r}.name`,className:"width-100",checkErrorAfterInputTouched:!1})}),p("td",{className:"nucleus-format-input-col",children:p(Z,{name:`formatting.nuclei.${r}.ppm`,className:"width-100"})}),p("td",{className:"nucleus-format-input-col",children:p(Z,{name:`formatting.nuclei.${r}.hz`,className:"width-100"})}),w("td",{className:"operation-container",children:[p(me,{onClick:()=>o(r),popupTitle:`remove ${n[r].name}`,popupPlacement:"right"}),i.length===l+1&&p("button",{className:"add",type:"button",onClick:s,children:p(yn,{})})]})]},`${r}`)})})]})})]})}const nT=M`
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
`,oT=({item:e,onSave:t,onDelete:n})=>{const[o,s]=c.exports.useState(""),i=c.exports.useCallback(a=>{a.stopPropagation(),s(""),t(o)},[o,t]),r=c.exports.useCallback(a=>{a.stopPropagation(),n(e.key)},[e.key,n]),l=c.exports.useCallback(a=>{s(a.target.value)},[]);return p("div",{css:nT,children:e.key==="new"?w("div",{className:"new-container",children:[p("input",{value:o,placeholder:"Custom workspace",onClick:a=>a.stopPropagation(),onChange:l}),p("button",{type:"button",className:"save-button",onClick:i,disabled:!o,children:"save"})]}):w("div",{className:"container",children:[p("span",{children:e.label}),!He[e.key]&&p("button",{type:"button",className:"delete-button",onClick:r,children:"Delete"})]})})},sT=e=>Object.keys(e.formatting.nuclei).reduce((t,n)=>(t[n]=Q().shape({name:rt().trim().required("Nucleus is a required field"),ppm:rt().trim().required("PPM format is a required field"),hz:rt().trim().required("Hz format  is a required field")}),t),{}),iT=_h(e=>Q().shape({formatting:Q().shape({nuclei:Q().shape(sT(e)).test("Unique","Nuclei need te be unique",function(n){var i;let o={};for(const r of Object.keys(n)){const l=((i=n[r].name)==null?void 0:i.toLowerCase())||"";l&&(o[l]?(++o[l].value,o[l].fields.push(r)):o[l]={value:1,fields:[r]})}const s=Object.keys(o).reduce((r,l)=>{const{value:a,fields:u}=o[l];if(a>1)for(let d of u)r.push(new Cr(`${l} nucleus must te be unique`,n[l].name,`${this.path}.${d}.name`));return r},[]);return new Cr(s)})})})),rT=M`
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
`;function lT({onClose:e}){const[t,n]=c.exports.useState("controllers"),v=le(),{dispatch:o}=v,s=G(v,["dispatch"]),i=se(),r=c.exports.useRef(),l=Ju(),a=c.exports.useMemo(()=>l.concat([{key:"new",label:"Custom workspace"}]),[l]),u=c.exports.useCallback(()=>{r.current.submitForm()},[]),d=c.exports.useCallback(()=>{o({type:"RESET_PREFERENCES"}),i.success("Settings saved successfully"),e==null||e()},[i,o,e]),h=c.exports.useCallback(C=>{o({type:"SET_PREFERENCES",payload:C}),i.success("Settings saved successfully"),e==null||e()},[i,o,e]),m=c.exports.useCallback(C=>{n(C.tabid)},[]),g=c.exports.useCallback(C=>{o({type:"ADD_WORKSPACE",payload:{workspace:C,data:r.current.values}})},[o]),x=c.exports.useCallback(C=>{o({type:"REMOVE_WORKSPACE",payload:{workspace:C}})},[o]),y=c.exports.useCallback(C=>{o({type:"SET_WORKSPACE",payload:{workspace:C.key}})},[o]),S=c.exports.useCallback(C=>p(oT,{item:C,onSave:g,onDelete:x}),[g,x]);return w("div",{css:[mt,rT],children:[w("div",{className:"header handle",children:[p("span",{children:"General Settings"}),p(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"workspace-container",children:[p("span",{className:"label",children:"Workspace : "}),p(ar,{data:a,renderItem:S,selectedKey:s==null?void 0:s.workspace.current,onSelect:y})]}),p("div",{className:"main-content",children:p(ce,{ref:r,initialValues:s.current,validationSchema:iT,onSubmit:h,children:w(In,{position:ir.LEFT,activeTab:t,onClick:m,children:[p(Ne,{tablabel:"Controllers",tabid:"controllers",children:p("div",{className:"inner-content",children:p(qA,{})})}),p(Ne,{tablabel:"Formatting",tabid:"formatting",children:p("div",{className:"inner-content",children:p(tT,{})})}),p(Ne,{tablabel:"Display",tabid:"display",children:p("div",{className:"inner-content",children:p(QA,{preferences:s.current.display})})})]})},JSON.stringify(s.current))}),p("div",{className:"footer-container",children:p(Kt,{style:{flexDirection:"row-reverse",margin:0},onDone:u,doneLabel:"Save",onCancel:d,cancelLabel:"Reset"})})]})}const Ke={container:{height:"100%",display:"flex",fontSize:"12px",alignItems:"center"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"}};function aT(){const e=X(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useRef(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{e({type:Lc,options:{maxNumberOfPeaks:n.current.value,minMaxRatio:t.current.value,noiseFactor:o.current.value,lookNegative:s.current.checked}})},[e]);return _("div",{style:Ke.container,children:[f(cn,{ref:n,label:"Max Number Of Peaks:",name:"maxNumberOfPeaks",style:{input:Ke.input,inputContainer:Ke.inputContainer,label:Ke.label},defaultValue:50}),f(cn,{ref:o,label:"Noise factor",name:"noiseFactor",style:{input:Ke.input,inputContainer:Ke.inputContainer,label:Ke.label},defaultValue:3}),f(cn,{ref:t,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:Ke.input,inputContainer:Ke.inputContainer,label:Ke.label},defaultValue:.1,step:"0.01"}),_("div",{style:{justifyItems:"baseline",marginRight:"3px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect Negative:"}),f(po,{name:"lookNegative",ref:s})]}),f(de.Done,{onClick:i,style:{margin:"0 10px"},children:"Apply"})]})}const Tl={container:{padding:"5px",height:"100%",display:"flex",alignItems:"center"},label:{lineHeight:2,userSelect:"none"}};function cT(){const e=X(),t=c.exports.useRef(),n=c.exports.useRef(),[o,s]=c.exports.useState("polynomial"),i=c.exports.useCallback(d=>{let h={};switch(o){case"airpls":h=b({algorithm:n.current.value},d);break;case"polynomial":h=b({algorithm:n.current.value},d);break}e({type:Yc,options:h})},[o,e]),r=c.exports.useCallback(()=>{e({type:ut})},[e]),l=c.exports.useCallback(()=>Object.keys(zs).map(d=>({key:d,label:zs[d],value:d})),[]),a=c.exports.useCallback(d=>{s(d)},[]),u=c.exports.useMemo(()=>{switch(o){case"airpls":return{validation:Q().shape({maxIterations:ae().integer().min(1).required(),tolerance:ae().moreThan(0).required()}),initialValue:{maxIterations:100,tolerance:.001}};case"autoPolynomial":case"polynomial":return{validation:Q().shape({degree:ae().integer().min(1).max(6).required()}),initialValue:{degree:3}};default:return{validation:{},initialValue:{}}}},[o]);return _("div",{style:Tl.container,children:[f("span",{style:Tl.label,children:"Algorithm: "}),f(Me,{ref:n,data:l(),style:{marginLeft:10,marginRight:10},onChange:a,defaultValue:"polynomial"}),_(ce,{ref:t,onSubmit:i,initialValues:u.initialValue,validationSchema:u.validation,children:[o&&o==="airpls"&&_("div",{style:{display:"flex"},children:[f(te,{title:"maxIterations:",children:f(Z,{type:"number",name:"maxIterations"})}),f(te,{title:"tolerance:",style:{label:{padding:"0 5px"}},children:f(Z,{type:"number",name:"tolerance"})})]}),o&&["autoPolynomial","polynomial"].includes(o)&&f(te,{title:"degree [ 1 - 6 ]:",children:f(Z,{type:"number",name:"degree",min:1,max:6,style:{inputWrapper:{height:"100%"}}})})]},JSON.stringify(u.initialValue)),f(Kt,{onDone:()=>t.current.submitForm(),onCancel:r})]})}const Dl={container:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",border:"0.55px solid #c7c7c7",borderRadius:"5px",userSelect:"none",backgroundColor:"#18ce0f14",fontSize:"10px",color:"#00801d",margin:"0px 5px",cursor:"ew-resize"},label:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxWidth:"100%",paddingLeft:"5px",paddingRight:"5px"}};function uT(e,t){const{name:n,value:o=0,onChange:s,label:i,style:r,className:l}=e,a=c.exports.useRef(0),u=c.exports.useRef(o);c.exports.useImperativeHandle(t,()=>({setValue:h=>{u.current=h}}));const d=c.exports.useCallback(h=>{function m(x){let y=x.clientX-a.current;if(a.current=x.clientX,x.buttons===1){const S=y/(x.shiftKey?10:1);u.current=u.current+S,s({value:u.current,name:n})}}function g(){window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",g)}a.current=h.clientX,window.addEventListener("mousemove",m),window.addEventListener("mouseup",g)},[n,s]);return f("div",{style:b(b({},Dl.container),r),className:l,onMouseDown:d,children:f("span",{style:Dl.label,children:i})})}var Il=c.exports.forwardRef(uT);const vo={container:{padding:"5px",height:"100%",display:"flex"},input:{width:"100px"},select:{marginLeft:"5px",marginRight:"10px",border:"none",height:"20px"}},Oe={manual:"manual",automatic:"automatic",absolute:"absolute"},dT=[{key:Oe.manual,label:"Manual",value:Oe.manual},{key:Oe.automatic,label:"Automatic",value:Oe.automatic},{key:Oe.absolute,label:"Absolute",value:Oe.absolute}];function pT({data:e,pivot:t,filter:n}){const o=X(),[s,i]=c.exports.useState({ph0:0,ph1:0}),r=c.exports.useRef({ph0:0,ph1:0}),l=c.exports.useRef(),a=c.exports.useRef(),[u,d]=c.exports.useState(Oe.manual);c.exports.useEffect(()=>{n?(r.current=n.value,i(n.value),l.current.setValue(n.value.ph0),a.current.setValue(n.value.ph1)):(l.current.setValue(r.current.ph0),a.current.setValue(r.current.ph1))},[n]);const h=c.exports.useCallback(()=>{switch(u){case Oe.automatic:{o({type:_c});break}case Oe.manual:{o({type:Mc,value:s});break}case Oe.absolute:{o({type:Fc});break}}},[o,u,s]),m=c.exports.useCallback((v,C)=>{if(C==="ph1"&&e.re){const E=v.ph0-r.current.ph0,T=v.ph1-r.current.ph1;v.ph0+=E-T*(t==null?void 0:t.index)/e.re.length}o({type:Oi,value:v})},[e.re,o,t==null?void 0:t.index]),g=c.exports.useCallback(v=>{const{name:C,value:E}=v.target;if(v.target){const T=k(b({},r.current),{[C]:E});String(E).trim()!=="-"&&m(T,C),r.current=T,i(r.current)}},[m]),x=c.exports.useCallback(v=>{const C=k(b({},r.current),{[v.name]:v.value});m(C,v.name),r.current=C,i(r.current)},[m]),y=c.exports.useCallback(()=>{o({type:ut})},[o]),S=c.exports.useCallback(v=>{d(v)},[]);return _("div",{style:vo.container,children:[f(Me,{onChange:S,data:dT,defaultValue:Oe.manual,style:vo.select}),u===Oe.manual&&_(et,{children:[f(te,{title:"PH0 :",style:{wrapper:{marginRight:"5px"}},children:f(wt,{name:"ph0",style:{input:vo.input},onChange:g,value:s.ph0,type:"number",debounceTime:250})}),f(te,{title:"PH1 :",children:f(wt,{name:"ph1",style:{input:vo.input},onChange:g,value:s.ph1,type:"number",debounceTime:250})}),f(Il,{ref:l,name:"ph0",label:"Change Ph0 By mouse click and drag",style:{width:"20%"},onChange:x}),f(Il,{ref:a,name:"ph1",label:"Change Ph1 By mouse click and drag",style:{width:"20%"},onChange:x})]}),f(Kt,{onDone:h,onCancel:y})]})}const hT=c.exports.memo(pT),fT={datum:{},filter:null};function mT(){const{toolOptions:{data:{pivot:e}}}=H(),{data:t,filters:n}=Se(fT),o=c.exports.useMemo(()=>n.find(s=>s.name===jt)||null,[n]);return f(hT,{data:t,filter:o,pivot:e})}const $n={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px",alignItems:"baseline"},input:{height:"100%",width:"50px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},inputContainer:{flex:2},label:{flex:5},hint:{lineHeight:2,userSelect:"none",fontSize:"11px"}};function gT(){const e=X(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useCallback(()=>{e({type:Oc,options:{peakPicking:{minMaxRatio:Number(n.current.value)||.05,lookNegative:t.current.checked}}})},[e]);return _("div",{style:$n.container,children:[_("div",{style:{justifyItems:"baseline",margin:"0 10px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect negative:"}),f(po,{name:"lookNegative",ref:t})]}),f(cn,{ref:n,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:$n.input,inputContainer:$n.inputContainer,label:$n.label},defaultValue:.05,step:"0.01"}),f(de.Done,{onClick:o,style:{margin:"0 10px"},children:"Auto ranges picking"}),f("span",{style:$n.hint,children:"Manual selection using SHIFT + select zone or click on Auto peak picking"})]})}const Co={container:{padding:"5px",height:"100%",display:"flex"},input:{height:"100%",width:"80px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},label:{lineHeight:2,userSelect:"none"}},xT=lr(8,21);function bT(){const e=X(),{data:t,activeSpectrum:n}=H(),o=c.exports.useRef(),[s,i]=c.exports.useState(1),r=c.exports.useCallback(()=>{e({type:Rc,value:{zeroFillingSize:Number(o.current.value),lineBroadeningValue:s}})},[e,s]),l=c.exports.useCallback(()=>t&&(n==null?void 0:n.id)?2**Math.round(Math.log2(t[n.index].data.x.length)):"",[n,t]),a=c.exports.useCallback(d=>{if(d.target){const h=d.target.validity.valid?Number(d.target.value):s;i(h)}},[s]),u=c.exports.useCallback(()=>{e({type:ut})},[e]);return _("div",{style:Co.container,children:[f("span",{style:Co.label,children:"Size: "}),f(Me,{ref:o,data:xT,style:{marginLeft:10,marginRight:10},defaultValue:l()}),f("span",{style:Co.label,children:"Line Broadening: "}),f("input",{name:"line-broadening",style:Co.input,type:"number",defaultValue:s,onInput:a,pattern:"^\\d*(\\.\\d{0,2})?$",step:"any"}),f(Kt,{onDone:r,onCancel:u})]})}const So={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"}};function yT(){const e=X(),t=c.exports.useRef(),n=c.exports.useCallback(()=>{e({type:$c,options:{thresholdFactor:t.current.value}})},[e]),o=c.exports.useCallback(s=>{s.target&&e({type:wu,payload:s.target.value})},[e]);return _("div",{style:So.container,children:[f(cn,{ref:t,label:"NoiseFactor",name:"noiseFactor",style:{input:So.input,inputContainer:So.inputContainer,label:So.label},defaultValue:1,onChange:o}),f(de.Done,{onClick:n,style:{margin:"0 10px"},children:"Auto Zones Picking"})]})}function vT(e){const{isFullscreen:t,onMaximize:n=()=>null,selectedOptionPanel:o}=e,s=fe(),{current:{display:{general:i}},workspace:r,dispatch:l}=le(),a=Ju(),u=!!((i==null?void 0:i.hideGeneralSettings)&&r.base),d=c.exports.useMemo(()=>{switch(o){case F.zeroFilling.id:return f(bT,{});case F.phaseCorrection.id:return f(mT,{});case F.peakPicking.id:return f(aT,{});case F.rangesPicking.id:return f(gT,{});case F.baseLineCorrection.id:return f(cT,{});case F.zone2D.id:return f(yT,{})}},[o]),h=c.exports.useCallback(()=>{s.show(f(lT,{}),{position:ne.TOP_CENTER,enableResizing:!0,width:600,height:400})},[s]),m=c.exports.useCallback(()=>{s.show(f(UA,{}),{isBackgroundBlur:!1,position:ne.MIDDLE,width:500,height:480})},[s]),g=c.exports.useCallback(x=>{l({type:"SET_WORKSPACE",payload:{workspace:x.key}})},[l]);return _(Fh,{children:[_("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[f("div",{children:f(we,{orientation:"horizontal",children:f(we.Item,{onClick:m,titleOrientation:"horizontal",id:"logo",title:"About NMRium",children:f("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:f(Lh,{})})})})}),f("div",{className:"toolOptionsPanel",children:d})]}),_("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[!u&&f(ar,{data:a,selectedKey:r.current,onSelect:g}),f("div",{children:_(we,{orientation:"horizontal",children:[f(we.Item,{id:"user-manual",title:"User manual",onClick:()=>window.open(YA,"_blank"),children:f(Oh,{})}),!u&&f(we.Item,{id:"general-settings",onClick:h,title:"General settings",children:f($h,{})}),!t&&f(we.Item,{id:"full-screen",onClick:n,title:"Full Screen",className:"windowButton",children:f(Hh,{})})]})})]})]})}const CT=c.exports.memo(vT);function ST({isFullscreen:e,onMaximize:t}){const{toolOptions:{selectedOptionPanel:n}}=H();return f(CT,{selectedOptionPanel:n,isFullscreen:e,onMaximize:t})}const xe={MOL:"mol",NMRIUM:"nmrium",JSON:"json",DX:"dx",JDX:"jdx",JDF:"jdf",ZIP:"zip",NMREDATA:"nmredata"},kT={ZIP:"504b0304"};function wT(e){return new Uint8Array(e).slice(0,4).reduce((t,n)=>t+=n.toString(16).padStart(2,"0"),"")}async function ET(e,t={asBuffer:!1}){const n=await fetch(e);return AT(n),t.asBuffer?n.arrayBuffer():n.text()}function AT(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}function ln(e){return e.replace(/^.*\./,"").toLowerCase()}function Gd(e){return e.substr(0,e.lastIndexOf("."))}function TT(e){const t=e.replace(/^.*[\\/]/,"").split(".");return{name:t[0].toLowerCase(),extension:t[1].toLowerCase()}}function Lt(e,t={}){return Promise.all([].map.call(e,n=>new Promise((o,s)=>{const i=new FileReader;i.onabort=r=>s(r),i.onerror=r=>s(r),i.onload=()=>{if(i.result){const r=i.result,l=Gd(n.name),a=ln(n.name);o({binary:r,name:l,extension:a})}},t.asBuffer?i.readAsArrayBuffer(n):i.readAsBinaryString(n)})))}async function ko(e,t={}){const n=[];for(const o of e)try{const s=await o.async(t.asBuffer?"uint8array":"text"),i=Gd(o.name),r=ln(o.name);n.push({binary:s,name:i,extension:r})}catch(s){console.error(s)}return n}const DT=M`
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
`,IT=M`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
`;function PT(e){const{width:t,height:n}=H(),o=X(),s=se(),i=c.exports.useCallback(async(g,x)=>{for(let y of x){const S=g.filter(v=>ln(v.name)===y);switch(y){case xe.MOL:{const v=await ko(S);o({type:Ws,files:v});break}case xe.NMRIUM:case xe.JSON:{const v=await ko(S,{asBuffer:!0});if(S.length===1){const C=new TextDecoder("utf8");v[0].binary=C.decode(v[0].binary),o({type:gn,files:v})}else throw new Error("You can add only one json file");break}case xe.JDX:case xe.DX:{const v=await ko(S,{asBuffer:!0});o({type:$o,files:v});break}case xe.JDF:{const v=await ko(S,{asBuffer:!0});o({type:Zs,files:v});break}}}},[o]),r=c.exports.useCallback(async g=>{const x=[...new Set(g.map(y=>ln(y.name)))];for(let y of x){const S=g.filter(v=>ln(v.name)===y);try{switch(y){case xe.MOL:{const v=await Lt(S);o({type:Ws,files:v});break}case xe.NMRIUM:case xe.JSON:if(S.length===1){const v=await Lt(S,{asBuffer:!0});if(wT(v[0].binary)===kT.ZIP){const E=await un.loadAsync(v[0].binary);await i(Object.values(E.files),[xe.NMRIUM])}else{const E=new TextDecoder("utf8");v[0].binary=E.decode(v[0].binary),o({type:gn,files:v})}}else throw new Error("You can add only one json file");break;case xe.JDX:case xe.DX:{const v=await Lt(S,{asBuffer:!0});o({type:$o,files:v});break}case xe.JDF:{const v=await Lt(S,{asBuffer:!0});o({type:Zs,files:v});break}case xe.ZIP:{const v=await Lt(S,{asBuffer:!0});for(const C of v){const E=await un.loadAsync(C.binary),T=[...new Set(Object.values(E.files).map(I=>ln(I.name)))];T.some(I=>xe[I.toUpperCase()]&&I!==xe.ZIP)?(Object.keys(E.files).some(N=>["2rr","fid","1r"].some(A=>N.endsWith(A)))&&o({type:Ho,files:v}),await i(Object.values(E.files),T)):o({type:Ho,files:v})}break}case xe.NMREDATA:Lt(S,{asBuffer:!0}).then(async v=>{for(const C of v)o({type:Zn,file:C})});break;default:throw new Error("The file extension must be zip, dx, jdx, json, mol, nmredata or nmrium.")}}catch(v){o({type:St,isLoading:!1}),s.error(v.message)}}},[s,o,i]),l=c.exports.useCallback(g=>{o({type:St,isLoading:!0}),r(g)},[o,r]),{getRootProps:a,getInputProps:u,isDragActive:d,open:h}=zh({onDrop:l,noClick:!0,noKeyboard:!0}),m=c.exports.useCallback(()=>{h()},[h]);return p(u0,{value:m,children:w("div",k(b({},a()),{role:"none",css:IT,children:[p("input",b({"data-test-id":"dropzone-input"},u())),d&&w("div",{css:DT,style:{width:`${t}px`,height:`${n}px`,marginTop:"30px",marginLeft:"30px"},children:[p(Vh,{}),p("p",{children:"Drop your files here"})]}),e.children]}))})}const RT=[Vi,us,Tc,ut,Vo,St,mc,xc,zc,co,Hi,$i,gc,Pi,ls,Ii,cs,Ni,Oi,Li,xn,hy,py,zi,Un,Ri,zo,yc,jo];function NT(e){return!RT.includes(e)}const MT=M`
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
`;function _T({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,p("span",{children:t})]})}function FT({items:e,boxBounding:t,onClick:n}){const o=c.exports.useRef(),[s,i]=c.exports.useState({x:t.width,y:t.height});return c.exports.useLayoutEffect(()=>{const r=o.current.getBoundingClientRect();i(l=>{let a=t.height;return r.bottom>window.innerHeight&&(a=t.height*2+(r.bottom-window.innerHeight)),k(b({},l),{y:a})})},[t.height]),p("div",{ref:o,className:"menu",style:{transform:`translate(${s.x}px, -${s.y}px) `},children:e==null?void 0:e.map(r=>p(_T,k(b({},r),{onClick:()=>n(r)}),r.id))})}function Pl({component:e,toolTip:t="",items:n=[],onClick:o=()=>null}){const s=c.exports.useRef(null),[i,r]=c.exports.useState(!1),l=c.exports.useCallback(()=>{r(!1)},[]),a=c.exports.useCallback(()=>{r(h=>!h)},[]),u=c.exports.useCallback(h=>{r(!1),o(h)},[o]),d=c.exports.useCallback(()=>{var h;return(h=s.current)==null?void 0:h.getBoundingClientRect()},[]);return w("div",{style:{height:"auto"},css:MT,children:[p("div",{ref:s,children:p(we.Item,{id:`menu-${t}`,title:t,active:i,onClick:a,children:e})}),i&&p(FT,{items:n,boxBounding:d(),onClick:u}),i&&p("div",{className:"menu-cover",onClick:l})]})}const LT={info:{},datum:{},ftCounter:0,fidCounter:0};function Wd(){const{data:e,activeSpectrum:t,activeTab:n}=H();return c.exports.useMemo(()=>{if(e){let o={},s={},i=0,r=0;for(const l of e){const{isFid:a,isFt:u,nucleus:d}=l.info;n===It(d)&&(a&&r++,u&&i++,t&&l.id===t.id&&(o=l.info,s=l.data))}return{info:o,datum:s,ftCounter:i,fidCounter:r}}return LT},[t,e,n])}function OT(e){const x=e,{name:t,style:n={},onChange:o=()=>null,className:s="",value:i,placeholder:r=""}=x,l=G(x,["name","style","onChange","className","value","placeholder"]),{values:a,handleChange:u,setFieldValue:d,errors:h}=he(),m=c.exports.useCallback(y=>{o(y),u(y)},[u,o]);c.exports.useEffect(()=>{i&&d(t,i)},[t,d,i]);const g=c.exports.useMemo(()=>B(h,t),[h,t]);return f("textarea",b({name:t,className:s,placeholder:r,value:i||B(a,t),onChange:m,style:b(b({},n),g&&{borderColor:"red",borderWidth:"1px",outline:"none"})},l))}const $T=M`
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
`,HT=Q({publicationText:rt().required()});function zT({onClose:e}){const t=c.exports.useRef(),n=X(),o=se(),s=c.exports.useCallback(i=>{(async()=>{const r=await o.showLoading("Generate spectrum from publication string in progress");setTimeout(()=>{n({type:Pu,payload:i}),r()}),e()})()},[o,n,e]);return w("div",{css:[mt,$T],children:[w("div",{className:"header handle",children:[p("span",{children:"Import from publication string"}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",children:p(ce,{ref:t,initialValues:{publicationText:"1H NMR (CDCl3, 400MHz) \u03B4 10.58 (b, 1H), 7.40 (d, 1H, J = 8.0 Hz), 6.19 (d, 1H, J = 7.6 Hz), 4.88 (s, 1H), 2.17 (s, 3H), 1.02 (s, 9H), 1.01 (s, 9H), 0.89 (s, 9H)"},validationSchema:HT,onSubmit:s,children:p(OT,{name:"publicationText",className:"text-area",placeholder:"Enter publication string"})})}),p("div",{className:"footer-container",children:p(de.Done,{onClick:()=>t.current.submitForm(),children:"Import"})})]})}const VT=M`
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
`,jT=["dx","jdx"];function BT({onLoadClick:e,onClose:t,startLoading:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{const i=o.current.value,{name:r,extension:l}=TT(i);jT.includes(l)?(n==null||n(),ET(i,{asBuffer:!0}).then(a=>{e({binary:a,name:r,extension:l,jcampURL:i})})):e(null)},[e,n]);return w("div",{css:VT,children:[w("div",{className:"header handle",children:[p("span",{children:"Load JCAMP Dialog"}),p(me,{onClick:t})]}),w("div",{className:"container",children:[p("input",{ref:o,type:"text",placeholder:"Enter URL to JCAMP-DX file"}),p(de.Done,{onClick:s,children:"Load"})]})]})}const Rl=[{id:"importFile",icon:f(ks,{}),label:"Import from file system (Press Ctrl + O)"},{id:"importJDX",icon:f(ks,{}),label:"Add JCAMP-DX from URL"},{id:"importPublicationString",icon:f(ks,{}),label:"Import from publication string"}],XT=[{id:"svg",icon:f(Kl,{}),label:"Export as SVG"},{id:"png",icon:f(Ul,{}),label:"Export as PNG"},{id:"json",icon:f(ws,{}),label:"Save data ( Press Ctrl + S )"},{id:"advance_save",icon:f(ws,{}),label:"Save data as  ( Press Ctrl + Shift + S )"},{id:"nmre",icon:f(ws,{}),label:"Save NMRE data"},{id:"copy",icon:f(li,{}),label:"Copy image to Clipboard ( Press Ctrl + C )"}];function YT({info:e,verticalAlign:t,displayerMode:n,ftCounter:o,fidCounter:s,activeSpectrum:i}){const r=X(),l=se(),a=fe(),u=Yi(),d=Ed(),h=sr(),m=c.exports.useMemo(()=>d?Rl:Rl.filter(z=>z.id!=="importPublicationString"),[d]),{isRealSpectrumShown:g,changeSpectrumViewHandler:x,changeDisplayViewModeHandler:y,alignSpectrumsVerticallyHandler:S}=Ss(),{saveAsSVGHandler:v,saveAsPNGHandler:C,saveAsJSONHandler:E,saveAsNMREHandler:T,saveToClipboardHandler:R,saveAsHandler:I}=wd(),N=c.exports.useCallback(z=>{z?(r({type:$o,files:[z]}),a.close()):l.error("you file must be one of those extensions [ .jdx, dx ] ")},[l,r,a]),A=c.exports.useCallback(()=>{a.close(),r({type:St,isLoading:!0})},[r,a]),P=c.exports.useCallback(()=>{a.show(f(BT,{onLoadClick:N,onClose:()=>a.close(),startLoading:A}),{})},[N,a,A]),D=c.exports.useCallback(()=>{a.show(f(zT,{onClose:()=>a.close()}),{})},[a]),O=c.exports.useCallback(({id:z})=>{switch(z){case"importFile":u();break;case"importJDX":P();break;case"importPublicationString":D();break;default:return}},[u,P,D]),L=c.exports.useCallback(({id:z})=>{switch(z){case"svg":v();break;case"png":C();break;case"json":E();break;case"advance_save":I();break;case"nmre":T();break;case"copy":R();break}},[v,C,E,I,T,R]);return _(c.exports.Fragment,{children:[h("import")&&f(Pl,{component:f(jh,{}),toolTip:"Import",onClick:z=>(O(z),null),items:m}),h("exportAs")&&f(Pl,{component:f(Jo,{}),toolTip:"Export As",onClick:z=>(L(z),null),items:XT}),n===Y.DM_1D&&h("spectraStackAlignments")&&o>1&&((e==null?void 0:e.isFt)||!i)&&f(we.Item,{id:"spectra-alignment",className:"cheminfo",title:"Spectra alignment ( Press s )",onClick:y,children:t.align==="stack"?f(Bh,{}):f(Xh,{})}),n===Y.DM_1D&&h("realImaginary")&&e.isComplex&&f(we.Item,{id:"display",title:g?"Display Real ":"Display Imaginary",onClick:x,className:"cheminfo",children:f(Yh,{})}),n===Y.DM_1D&&h("spectraCenterAlignments")&&(o>0||s>0)&&f(we.Item,{id:"baseline-position",title:t.align==="bottom"?"Baseline  Center ( Press c )":"Baseline  Bottom ( Press c )",onClick:S,className:"cheminfo",children:f("div",{style:{fontSize:24},children:t.align==="bottom"?f(Gh,{}):f(Wh,{})})})]})}const GT=c.exports.memo(YT);function WT(){const{activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o}=H(),{info:s,fidCounter:i,ftCounter:r}=Wd();return f(GT,{info:s,fidCounter:i,ftCounter:r,activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o})}function De(e){const{children:t,value:n=null,isActive:o=!1,onChange:s=()=>null,isVisible:i=!0,id:r,title:l}=e,[a,u]=c.exports.useState(e.isActive),d=c.exports.useCallback(()=>{const h=!a;u(h),s(h?n:null)},[a,s,n]);return c.exports.useEffect(()=>{u(o)},[o]),i?f(we.Item,{onClick:d,title:l,id:r,active:a,children:t}):null}function ZT({children:e,value:t,onChange:n=()=>null}){const[o,s]=c.exports.useState([]),i=c.exports.useCallback(l=>{const u=[...o].map(d=>({value:d.value,isActive:d.value===l}));s(u),n(l)},[n,o]),r=c.exports.useMemo(()=>{let l=0;return c.exports.Children.map(e,a=>{var u;if(a)if(a.type===De){const d=c.exports.cloneElement(a,{onChange:i,isActive:(u=o[l])==null?void 0:u.isActive,index:l});return l++,d}else return c.exports.cloneElement(a)})},[e,i,o]);return c.exports.useEffect(()=>{const l=c.exports.Children.map(e,a=>{if(a&&a.type===De)return{value:a.props.value,isActive:a.props.value===t}});s(l)},[e,t]),f(et,{children:r})}function UT({defaultValue:e,activeSpectrum:t,info:n,datum:o,displayerMode:s,ftCounter:i,mode:r}){const[l,a]=c.exports.useState(""),u=sr(),d=X(),{handleChangeOption:h,handleFullZoomOut:m}=Ss(),g=c.exports.useCallback(y=>{a(y),h(y)},[h]);c.exports.useEffect(()=>{a(e)},[e]);const x=c.exports.useCallback(()=>{d({type:Nc,value:""}),d({type:xc,selectedFilter:null})},[d]);return _(et,{children:[_(ZT,{value:l,onChange:g,children:[u("zoomTool")&&f(De,{value:F.zoom.id,id:"zoomIn",title:`${F.zoom.label} ( Press z )`,children:f("div",{style:{fontSize:14},children:f(eo,{})})},F.zoom.id),u("zoomOutTool")&&f(we.Item,{id:"zoom-out",onClick:m,title:"Horizontal zoom out ( Press f ), Horizontal and Vertical zoom out, double click ( Press ff )",children:f("div",{style:{fontSize:14},children:f(Zh,{})})}),s===Y.DM_1D&&u("peakTool")&&f(De,{value:F.peakPicking.id,title:`${F.peakPicking.label} ( Press p )`,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"peakPicking",children:f(Uh,{})},F.peakPicking.id),s===Y.DM_1D&&u("integralTool")&&f(De,{value:F.integral.id,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"integralPicking",title:`${F.integral.label} ( Press i )`,children:f(Jl,{})},F.integral.id),s===Y.DM_2D&&u("zonePickingTool")&&f(De,{value:F.zone2D.id,id:"zone2d",isVisible:!!(t&&!(n!=null&&n.isFid)),title:`${F.zone2D.label} ( Press r )`,children:f(Kh,{})},F.zone2D.id),s===Y.DM_2D&&u("slicingTool")&&f(De,{value:F.slicingTool.id,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"slic",title:`${F.slicingTool.label}`,children:f("p",{children:"Slic"})},F.slicingTool.id),s===Y.DM_1D&&u("autoRangesTool")&&f(De,{value:F.rangesPicking.id,isVisible:!!(t&&!(n!=null&&n.isFid)),title:`${F.rangesPicking.label} ( Press r )`,id:"ranges-pick",children:f(Bl,{})},F.rangesPicking.id),s===Y.DM_1D&&u("multipleSpectraAnalysisTool")&&i>1&&r==="RTL"&&f(De,{value:F.multipleSpectraAnalysis.id,id:"multipleSpectraAnalysis",title:F.multipleSpectraAnalysis.label,children:f(Sr,{})},F.multipleSpectraAnalysis.id),s===Y.DM_1D&&u("zeroFillingTool")&&f(De,{value:F.zeroFilling.id,isVisible:fi({info:n}),id:"zeroFilling",title:F.zeroFilling.label,children:f(qh,{})},F.zeroFilling.id),s===Y.DM_1D&&u("phaseCorrectionTool")&&f(De,{value:F.phaseCorrection.id,id:"phaseCorrection",title:`${F.phaseCorrection.label} ( Press a )`,isVisible:!!(t&&n&&pi({info:n})&&o.im),children:f(Jh,{})},F.phaseCorrection.id),s===Y.DM_1D&&u("baseLineCorrectionTool")&&f(De,{value:F.baseLineCorrection.id,id:"baseLineCorrection",title:`${F.baseLineCorrection.label} ( Press b )`,isVisible:!!(t&&n&&ui({info:n})),children:f(Qh,{})},F.baseLineCorrection.id),s===Y.DM_1D&&u("exclusionZonesTool")&&!(n!=null&&n.isFid)&&i>0&&f(De,{value:F.exclusionZones.id,title:`${F.exclusionZones.label} ( Press e )`,id:"exclusionZones",children:f("div",{style:{fontSize:18},children:f(Sr,{})})},F.exclusionZones.id)]}),s===Y.DM_1D&&u("FFTTool")&&n&&di({info:n})&&f(we.Item,{id:"fft-filter",className:"cheminfo",title:"FFT Filter",onClick:x,children:f(ef,{})})]})}const KT=c.exports.memo(UT);function qT({defaultValue:e=F.zoom.id}){const{activeSpectrum:t,displayerMode:n,activeTab:o,mode:s}=H(),i=Wd();return f(KT,k(b({},i),{activeSpectrum:t,displayerMode:n,activeTab:o,defaultValue:e,mode:s}))}function JT({selectedTool:e}){return f("div",{style:{fontSize:18},children:_(we,{orientation:"vertical",children:[f(qT,{defaultValue:e}),f(WT,{})]})})}const QT=c.exports.memo(JT);function eD(){const{toolOptions:{selectedTool:e}}=H();return f(QT,{selectedTool:e})}const tD=M`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
  margin-left: -1px;
`,nD=M`
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
`,oD={},sD={spectra:[]};function iD(e){return p(nf,{style:{width:"100%"},children:p(tf,{FallbackComponent:xC,children:p(rD,b({},e))})})}function rD({data:e=sD,workspace:t,preferences:n=oD,getSpinner:o=Xu,onDataChange:s,emptyText:i}){const r=c.exports.useRef(null),l=c.exports.useRef(null),[a,u]=of(!1),d=sf(r,a,{onClose:()=>{u(!1)}}),[h,m]=c.exports.useReducer(r0,Hu,o0),[g,x]=c.exports.useReducer(F0,Uu,A0),{displayerMode:y,data:S}=h;c.exports.useEffect(()=>{NT(h.actionType)&&(s==null||s(h))},[s,h]);const v=c.exports.useMemo(()=>s0(m),[]);c.exports.useEffect(()=>{var T;(T=r.current)==null||T.focus()},[d]),c.exports.useEffect(()=>{x({type:"INIT_PREFERENCES",payload:{display:n,workspace:t,dispatch:x}})},[n,t]),c.exports.useEffect(()=>{v({type:St,isLoading:!0}),e&&v({type:Wn,payload:e})},[e,v]);const C=c.exports.useCallback(T=>{Gt(T)||T.preventDefault()},[]),E=c.exports.useRef(null);return c.exports.useEffect(()=>{const T=E.current;if(!T)return;function R(){v({type:jo,payload:!0})}function I(){v({type:jo,payload:!1})}return T.addEventListener("mouseenter",R),T.addEventListener("mouseleave",I),()=>{T.removeEventListener("mouseenter",R),T.removeEventListener("mouseleave",I)}},[v]),p(Vv,{value:{rootRef:r.current,elementsWrapperRef:l.current},children:p(L0,{value:g,children:p("div",{ref:E,style:{height:"100%",position:"relative"},children:p(_v,{wrapperRef:l.current,children:p(a0,{value:v,children:p(l0,{value:h,children:p(zv,{wrapperRef:l.current,children:p(Q0,{children:p(XA,{spectraData:S,children:p(f0,{value:o,children:p("div",{className:"nmrium-container",ref:r,css:nD,onContextMenu:C,style:{height:"100%",width:"100%"},children:p(PT,{children:w("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"white",width:"100%"},children:[p(ST,{isFullscreen:d,onMaximize:u}),w("div",{style:{display:"flex",flexDirection:"row",height:"100%"},children:[p(eD,{}),w(rf,{initialSeparation:"590px",orientation:"horizontal",sideSeparation:"end",children:[w("div",{css:tD,children:[p(FA,{}),p("div",{"data-test-id":"viewer",style:{width:"100%",height:"100%"},children:y===Y.DM_1D?p(gC,{emptyText:i}):p(vv,{emptyText:i})})]}),p(_A,{})]}),p("div",{ref:l,id:"main-wrapper",style:{position:"absolute",pointerEvents:"none",zIndex:0,left:0,right:0,top:0,bottom:0}},String(d))]})]})})})})})})})})})})})})})}var lD=c.exports.memo(iD);function aD(e,t){let n=[];function o(s){Object.keys(s).forEach(i=>{t===i&&n.push({[i]:s[i]}),Array.isArray(s[i])?s[i].forEach(r=>{o(r)}):typeof s[i]=="object"&&s[i]!==null&&o(s[i])})}return o(e),n}function cD(e){const[t,n]=c.exports.useState(),[o,s]=c.exports.useState("");c.exports.useEffect(()=>{const r=aD(e,o);n(o?r:e)},[e,o]);const i=c.exports.useCallback(Ko(r=>{const l=r.target.value;s(l)},500),[e]);return _("div",{style:{display:"flex",flexDirection:"column",paddingTop:"10px"},children:[f("input",{style:{border:"1px solid gray",padding:"5px"},type:"text",placeholder:"Search for key...",onChange:i}),f(oa,{data:t}),";"]})}function Zd(){const[e,t]=c.exports.useState(),[n,o]=c.exports.useState({}),s=c.exports.useCallback(r=>{(async()=>{try{const l=await Lt(r,{asBuffer:!0}),a=new TextDecoder("utf8"),u=JSON.parse(a.decode(l[0].binary));t(u)}catch{alert("Invalid JSON file")}})()},[]),i=c.exports.useCallback(r=>{o(r)},[]);return _("div",{style:{display:"flex",height:"100vh",padding:"20px"},children:[f("div",{style:{flex:9},children:f(lD,{data:e,onDataChange:i})}),_("div",{style:{display:"flex",flexDirection:"column",padding:"10px",flex:3},children:[f("div",{style:{flex:3},children:f(lf,{onDrop:s,color:"gray"})}),f("div",{style:{flex:9},children:f(cD,{data:n})})]})]})}var uD=Object.freeze(Object.defineProperty({__proto__:null,default:Zd},Symbol.toStringTag,{value:"Module"}));const dD=c.exports.lazy(()=>it(()=>import("./TestHighlight.cdc7704f.js"),["assets/TestHighlight.cdc7704f.js","assets/vendor.50bee1a9.js"]));function pD(){return f(c.exports.Suspense,{fallback:null,children:_(Uo,{children:[f(bt,{path:"/test/highlight",component:dD}),f(bt,{path:"/",component:Zd}),f(bt,{render:()=>f("div",{children:"Page not found"})})]})})}af.render(f(cf,{children:_(Uo,{children:[f(bt,{path:"/test",component:pD}),f(bt,{path:"/",render:e=>f(Mf,b({},e))})]})}),document.getElementById("root"));export{Q0 as H,lD as N,ys as c,re as u};
//# sourceMappingURL=index.ebe5ca61.js.map
