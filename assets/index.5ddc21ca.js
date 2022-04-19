var Kd=Object.defineProperty,qd=Object.defineProperties;var Jd=Object.getOwnPropertyDescriptors;var ho=Object.getOwnPropertySymbols;var ur=Object.prototype.hasOwnProperty,dr=Object.prototype.propertyIsEnumerable;var cr=(e,t,n)=>t in e?Kd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))ur.call(t,n)&&cr(e,n,t[n]);if(ho)for(var n of ho(t))dr.call(t,n)&&cr(e,n,t[n]);return e},k=(e,t)=>qd(e,Jd(t));var pr=e=>typeof e=="symbol"?e:e+"",G=(e,t)=>{var n={};for(var o in e)ur.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&ho)for(var o of ho(e))t.indexOf(o)<0&&dr.call(e,o)&&(n[o]=e[o]);return n};import{r as c,M as Nl,S as Qd,c as M,w as ep,j as w,a as d,F as tp,E as np,b as Zo,R as bt,d as f,e as _,x as Jn,f as Rl,g as Uo,m as Ml,h as op,i as sp,k as Fs,l as ip,n as rp,o as To,p as hr,z as lp,q as ap,s as _l,t as fr,u as an,v as bn,y as Fl,A as cp,B as We,C as up,D as dp,G as pp,H as hp,I as Ll,J as fp,K as mp,L as gp,N as Ls,O as xp,P as bp,Q as Et,T as yp,U as vp,V as Cp,W as Sp,X as kp,Y as wp,Z as mr,_ as un,$ as Ep,a0 as Ap,a1 as Je,a2 as yt,a3 as oe,a4 as ze,a5 as Tp,a6 as Qn,a7 as Ol,a8 as gr,a9 as $l,aa as Dp,ab as B,ac as ti,ad as Ip,ae as Hl,af as Os,ag as ni,ah as Do,ai as Ve,aj as Pp,ak as Np,al as zl,am as oi,an as si,ao as et,ap as Rp,aq as Ko,ar as Vl,as as ii,at as Mp,au as _p,av as dn,aw as qe,ax as xr,ay as $e,az as Fp,aA as Lp,aB as Op,aC as $p,aD as he,aE as Hp,aF as br,aG as pn,aH as zp,aI as Vp,aJ as At,aK as jp,aL as Bp,aM as jl,aN as Vn,aO as Bl,aP as Xp,aQ as Yp,aR as Gp,aS as Wp,aT as Zp,aU as Up,aV as Q,aW as ae,aX as Kp,aY as Xl,aZ as Yl,a_ as Gl,a$ as qp,b0 as Jp,b1 as Qp,b2 as rt,b3 as Rn,b4 as qo,b5 as eh,b6 as yn,b7 as Wl,b8 as ri,b9 as Zl,ba as Ul,bb as th,bc as nh,bd as oh,be as sh,bf as ih,bg as Kl,bh as rh,bi as lh,bj as ql,bk as ah,bl as $s,bm as ch,bn as eo,bo as Jl,bp as Jo,bq as Ql,br as uh,bs as wo,bt as dh,bu as ph,bv as hh,bw as fh,bx as mh,by as gh,bz as ea,bA as xh,bB as Io,bC as bh,bD as Ne,bE as Mn,bF as Qo,bG as ta,bH as yh,bI as vh,bJ as lt,bK as Ch,bL as Sh,bM as kh,bN as wh,bO as Eh,bP as Ah,bQ as Th,bR as Dh,bS as Ih,bT as Ph,bU as Nh,bV as na,bW as yr,bX as Rh,bY as Mh,bZ as vr,b_ as _h,b$ as we,c0 as Fh,c1 as Lh,c2 as Oh,c3 as $h,c4 as Hh,c5 as zh,c6 as Vh,c7 as jh,c8 as Bh,c9 as Xh,ca as Yh,cb as Gh,cc as Ss,cd as ks,ce as Wh,cf as Zh,cg as Uh,ch as Cr,ci as Kh,cj as qh,ck as Jh,cl as Qh,cm as ef,cn as tf,co as nf,cp as of,cq as sf,cr as rf,cs as lf,ct as af}from"./vendor.e38ac3d0.js";const cf=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};cf();var Sr=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/ethylbenzene/full.json",title:"FULL ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Workspaces",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"},{file:"./exercises/cytisine/hsqc_hmbc.json",title:"Exercise 3",view:"Exercise"},{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"},{title:"Prediction",view:"Prediction"}]},{title:"Test",view:"Test"}];function uf(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t.push(oa(n.groupName,[n],[])):t.push(c.exports.createElement(Nl,b({key:n.title},n),n.title));return t}function oa(e,t=[],n=[],o=0){let s=n,i=[];o!==-1&&s[o]&&(s[o]=c.exports.cloneElement(s[o],{},i));for(const r in t)if(t[r].children&&Array.isArray(t[r].children)){const l=c.exports.createElement(Qd,{key:r+e,title:t[r].groupName});return s.push(l),oa(r+e,t[r].children,s,0)}else i.push(c.exports.createElement(Nl,b({key:r+e},t[r]),t[r].title));return s}function df(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t=t.concat(sa([n],[])):t.push(n);return t}function sa(e=[],t=[]){let n=t;for(const o of e){if(o.children&&Array.isArray(o.children))return sa(o.children,n);t.push(o)}return n}function $t(e=""){const t=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(e);let n="";if(t){const o=t[1].split("/");n=o.length>2?o[o.length-2]+o[o.length-1]:o[o.length-1]}return n+e.replace(/\.|\s|\//g,"")}const pf=M`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,hf=M`
  width: 260px;
`,ff=M`
  width: 3%;
`,mf=M`
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
`,gf=M`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,xf=M`
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
`,bf=M`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,yf=M`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;function vf(e){const t=c.exports.useMemo(()=>uf(e.routes),[e.routes]),n=e.menuIsClosed?"none":"block";return w("div",{css:M(pf,e.menuIsClosed?ff:hf),children:[w("div",{css:gf,children:[d("div",{style:{display:n,padding:"0.5rem 0.7rem"},children:d("a",{css:M(xf,bf),children:"NMRium"})}),d("button",{type:"button",css:mf,onClick:e.onMenuToggle,children:d(tp,{})})]}),d("div",{css:yf,style:{display:n},children:d(np,{onClick:o=>{e.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${(o.item.props.view||"View")+$t(o.item.props.file)}`)},mode:"inline",children:t})})]})}var Cf=ep(c.exports.memo(vf));const Sf="modulepreload",kr={},kf="./",it=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${kf}${o}`,o in kr)return;kr[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":Sf,s||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),s)return new Promise((l,a)=>{r.addEventListener("load",l),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},li={Exam:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Exam.ff396dfb.js"),["assets/Exam.ff396dfb.js","assets/vendor.e38ac3d0.js"]))),Exercise:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Exercise.364c35b5.js"),["assets/Exercise.364c35b5.js","assets/vendor.e38ac3d0.js"]))),SingleView:c.exports.memo(c.exports.lazy(()=>it(()=>import("./SingleView.c9eb3a3b.js"),["assets/SingleView.c9eb3a3b.js","assets/vendor.e38ac3d0.js"]))),Test:c.exports.memo(c.exports.lazy(()=>it(()=>Promise.resolve().then(function(){return cD}),void 0))),View:c.exports.memo(c.exports.lazy(()=>it(()=>import("./View.ac20da67.js"),["assets/View.ac20da67.js","assets/vendor.e38ac3d0.js"]))),TwoInstances:c.exports.memo(c.exports.lazy(()=>it(()=>import("./TwoInstances.c80b4334.js"),["assets/TwoInstances.c80b4334.js","assets/vendor.e38ac3d0.js"]))),Teaching:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Teaching.95ba6c14.js"),["assets/Teaching.95ba6c14.js","assets/vendor.e38ac3d0.js"]))),Prediction:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Prediction.b22e03df.js"),["assets/Prediction.b22e03df.js","assets/View.ac20da67.js","assets/vendor.e38ac3d0.js"])))},wf=M`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,Ef=M`
  width: calc(100% - 260px);
`,Af=M`
  width: 98%;
  margin-left: 20px !important;
`;function Tf(e){const{routes:t=[],baseURL:n}=e,o=c.exports.useMemo(()=>df(t),[t]),[s,i]=c.exports.useState(!1),r=c.exports.useCallback(()=>i(!s),[s]);return w("div",{style:{position:"relative",top:0,height:"100vh"},children:[d(Cf,k(b({},e),{routes:t,menuIsClosed:s,onMenuToggle:r})),d("div",{css:M(wf,s?Af:Ef),children:d(c.exports.StrictMode,{children:d(c.exports.Suspense,{fallback:d("div",{children:"Loading..."}),children:w(Zo,{children:[o.map(l=>d(bt,{path:`/SamplesDashboard/:id/${(l.view||"View")+$t(l.file)}`,render:a=>d(Df,k(b({},a),{prop:l,baseURL:n}))},$t(l.file))),o.length>0&&d(bt,{path:"/",render:()=>{const l=o[0],a=l.view?l.view:"View",u=li[a];return d(u,b({},l[0]))}},$t(o[0].file))]})})})})]})}function Df(e){const{match:{params:{id:t}},prop:n,baseURL:o}=e,s=n.view?n.view:"View",i=li[s];return d(i,k(b({},n),{id:$t(n.file),baseURL:o}),t)}function If(e){return f("div",{style:{position:"relative",top:0,height:"100vh"},children:f("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"},children:f(c.exports.Suspense,{fallback:f("div",{children:"Loading..."}),children:f(Zo,{children:f(bt,{path:"/",render:t=>{const{match:{params:{id:n}}}=t,o=e.view?e.view:"SingleView",s=li[o];return f(s,k(b({},e),{id:$t(e.patrh)}),n)}},$t(e.path))})})})})}const Mt={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function Pf(e){const t=await fetch(e);try{return Nf(t),await t.json()}catch(n){return console.error(n),null}}function Nf(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}const Rf=e=>{const[t,n]=c.exports.useState({isLoaded:!1,status:200,routes:[]}),[o,s]=c.exports.useState(""),i=c.exports.useCallback(()=>{n({isLoaded:!0,status:200,routes:Sr})},[]),r=(a="")=>a.substring(a.lastIndexOf(".")+1),l=window.location.href;return c.exports.useEffect(()=>{const a=new URL(l).searchParams;if(a.has("sampleURL")){const u=a.get("sampleURL");if(!u)return;switch(r(u).toLowerCase()){case"json":{s("multi"),Pf(u).then(h=>{if(h){const m=u.replace(/^(?<url>.*[\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),g=JSON.parse(JSON.stringify(h).replace(/\.\/+?/g,m));n({isLoaded:!0,status:200,routes:g,baseURL:m})}else n({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{s("single"),n({isLoaded:!0,status:200,path:u});break}}}else s("multi"),n({isLoaded:!0,status:200,routes:Sr,baseURL:"./"})},[l]),t.isLoaded?o&&o==="single"?f(If,k(b({},e),{path:t.path})):f(Tf,k(b({},e),{routes:t.routes,baseURL:t.baseURL})):f("div",{style:Mt.bodyContainer,children:f("div",{style:b(b({},Mt.container),t.status===200?Mt.normal:Mt.error),children:t.status===200?_("div",{children:[f("p",{style:Mt.normalHeader,children:"Please wait"}),f("p",{children:"We will redirect you in a minute"})]}):_("div",{children:[f("p",{style:Mt.errorHeader,children:"404"}),f("p",{children:"Resource not found."}),f("button",{style:Mt.loadButton,type:"button",onClick:i,children:"Load local samples"})]})})})};function Gt(e){const t=["Alt","AltGraph","CapsLock","Control","Meta","NumLocK","ScrollLock","Shift","OS"];for(const n of t)if(e.getModifierState(n))return!0;return!1}const Po=2048;function Mf(e,t,n,o,s){const{fromIndex:i,toIndex:r}=Jn(e,{from:n,to:o});if(r-i<=Po){const l={x:e.subarray(i,r),y:t.subarray(i,r)},a=Rl(l,{frequency:s,takeBestPartMultiplet:!0,symmetrizeEachStep:!0});return a&&a.chemShift===void 0?void 0:{multiplicity:a.js.map(u=>u.multiplicity).join(""),kind:"signal",delta:a.chemShift,js:a.js}}else throw new Error(`length of signal should not exceed ${Po} points`)}const ia={step:"initial",brush:{start:null,end:null},startX:0,endX:0,startY:0,endY:0},Tt=c.exports.createContext(ia);function ra({children:e,className:t,style:n,onBrush:o=()=>null,onZoom:s=()=>null,onDoubleClick:i=()=>null,onClick:r=()=>null,noPropagation:l}){const[a,u]=c.exports.useReducer(_f,ia),[p,h]=c.exports.useState(0),m=c.exports.useRef([]),g=c.exports.useCallback(C=>(C.button===0&&(l&&C.stopPropagation(),u({type:"DOWN",shiftKey:C.shiftKey,altKey:C.altKey,screenX:C.screenX,screenY:C.screenY,clientX:C.clientX,clientY:C.clientY,boundingRect:C.currentTarget.getBoundingClientRect()}),h(C.timeStamp)),!1),[l]),x=c.exports.useCallback(C=>{C.persist();const E=C.timeStamp,T=C.currentTarget.getBoundingClientRect(),I=C.clientX-T.x,D=C.clientY-T.y,N=Uo(()=>{E-p<=150&&m.current.length===1&&r(k(b({},C),{x:I,y:D})),m.current=[]},200);m.current.push(N),N(),m.current.length>1&&(Ml(m.current,A=>A.cancel()),m.current=[],i(k(b({},C),{x:I,y:D})))},[p,r,i]),y=c.exports.useCallback(C=>{const E=C.currentTarget.getBoundingClientRect(),T=C.clientX-E.x,I=C.clientY-E.y,{deltaY:D,deltaX:N,shiftKey:A,deltaMode:P}=C;s({deltaY:D||N,shiftKey:A,deltaMode:P,x:T,y:I})},[s]);c.exports.useEffect(()=>{const{step:C,startX:E,endX:T,startY:I,endY:D}=a;C==="end"&&Math.hypot(T-E,D-I)>5&&(o(a),u({type:"DONE"}))},[o,a]);const S=c.exports.useCallback(C=>{u({type:"MOVE",screenX:C.screenX,screenY:C.screenY,clientX:C.clientX,clientY:C.clientY})},[]),v=c.exports.useCallback(C=>(u({type:"UP",clientX:C.clientX,clientY:C.clientY}),!1),[]);return f(Tt.Provider,{value:a,children:f("div",{className:t,style:n,onMouseDown:g,onMouseUp:v,onMouseMove:S,onClick:x,onWheel:y,children:e})})}function _f(e,t){switch(t.type){case"UP":if(e.step==="brushing"||e.step==="start"){const{clientX:n,clientY:o}=t;return k(b({},e),{endX:n-e.boundingRect.x,endY:o-e.boundingRect.y,step:e.step==="start"?"initial":"end"})}return e;case"DOWN":if(e.step==="initial"||e.step==="end"){const{screenX:n,screenY:o,clientX:s,clientY:i,boundingRect:r,shiftKey:l,altKey:a}=t,u=s-r.x,p=i-r.y;return k(b({},e),{shiftKey:l,altKey:a,startX:u,startY:p,startScreenX:n,startScreenY:o,startClientX:s,startClientY:i,boundingRect:r,step:"start"})}return e;case"MOVE":if(e.step==="start"||e.step==="brushing"){const{clientX:n,clientY:o}=t;return k(b({},e),{step:"brushing",endX:n-e.boundingRect.x,endY:o-e.boundingRect.y})}return e;case"DONE":if(e.step==="end")return k(b({},e),{step:"initial"});break;default:return e}}const pt=c.exports.createContext({}),Ff=pt.Provider;function Lf(){return c.exports.useContext(pt)}function la({children:e,className:t,style:n,noPropagation:o}){const[s,i]=c.exports.useState(null),r=c.exports.useCallback(a=>{const u=a.currentTarget.getBoundingClientRect(),p=a.clientX-u.x,h=a.clientY-u.y;i({x:p,y:h}),o&&a.stopPropagation()},[o]),l=c.exports.useCallback(a=>{i(null),o&&a.stopPropagation()},[o]);return f(Ff,{value:s,children:f("div",{className:t,style:n,onMouseMove:r,onMouseLeave:l,children:e})})}const ai=[{key:"signal",label:"Signal",value:"signal"},{key:"reference",label:"Reference",value:"reference"},{key:"solvent",label:"Solvent",value:"solvent"},{key:"impurity",label:"Impurity",value:"impurity"},{key:"standard",label:"Standard",value:"standard"},{key:"p1",label:"P1",value:"p1"},{key:"p2",label:"P2",value:"p2"},{key:"p3",label:"P3",value:"p3"}],to=["signal"],Ze={signal:"signal",mixed:"mixed"},aa="absolute",Of="Absolute";function $f(e){if(!ca(e))throw new Error("absolute not applicable on this data");e.data.re=op(e.data),e.data.im=new Float64Array(0),e.info=k(b({},e.info),{isComplex:!1})}function ca(e){return!!(e.info.isComplex&&!e.info.isFid)}function Hf(){return{once:!1,reduce:null}}var zf=Object.freeze(Object.defineProperty({__proto__:null,id:aa,name:Of,apply:$f,isApplicable:ca,reduce:Hf},Symbol.toStringTag,{value:"Module"}));const Vf="autoPhaseCorrection",jf="Automatic phase correction",Bf={minRegSize:5,maxDistanceToJoin:128,magnitudeMode:!0,factorNoise:5};function ua(e,t={}){if(!da(e))throw new Error("phaseCorrection not applicable on this data");return sp(e.data,b(b({},Bf),t))}function da(e){return!!(e.info.isComplex&&!e.info.isFid)}function Xf(e,t){let n=Object.assign({},e);for(const o in n)n[o]+=t[o];return{once:!0,reduce:n}}var Yf=Object.freeze(Object.defineProperty({__proto__:null,id:Vf,name:jf,apply:ua,isApplicable:da,reduce:Xf},Symbol.toStringTag,{value:"Module"}));const pa="baselineCorrection",Gf="Baseline correction",Hs={airpls:"airPLS",polynomial:"Polynomial"};function Wf(e,t={}){if(!ci(e))throw new Error("baselineCorrection not applicable on this data");const{algorithm:n,zones:o=[]}=t;let{x:s,re:i}=e.data,r;switch(n){case"airpls":r=rp(s,i,t).corrected;break;case"polynomial":{const l={regressionOptions:t.degree};let a=Fs({x:s,y:i},{numberOfPoints:4096,zones:o}),u=ip(a.x,a.y,l),{regression:p}=u;r=new Float64Array(s.length);for(let h=0;h<i.length;h++)r[h]=i[h]-p.predict(s[h])}break;default:throw new Error(`baselineCorrection: algorithm unknown: ${n}`)}Object.assign(e.data,{re:r})}function ci(e){return!e.info.isFid}function Zf(){return{once:!1,reduce:null}}var Uf=Object.freeze(Object.defineProperty({__proto__:null,id:pa,name:Gf,baselineAlgorithms:Hs,apply:Wf,isApplicable:ci,reduce:Zf},Symbol.toStringTag,{value:"Module"}));const zs="centerMean",ha="Center Mean";function Kf(e){var i;if(!fa(e))throw new Error("Center Mean is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=To.mean(t),s=To.mean(n||[]);for(let r=0;r<t.length;r++)t[r]-=o,n&&(n[r]-=s);e.data.re=t,n&&(e.data.im=n)}function fa(e){return!!(e.info.isComplex&&!e.info.isFid)}function qf(){return{once:!1,reduce:null}}var Jf=Object.freeze(Object.defineProperty({__proto__:null,id:zs,name:ha,apply:Kf,isApplicable:fa,reduce:qf},Symbol.toStringTag,{value:"Module"}));const Vs="digitalFilter",Qf="Digital Filter";function em(e,t={}){if(!ma(e))throw new Error("Digital Filter is not applicable on this data");let{digitalFilterValue:n=0}=t,o=new Float64Array(e.data.re),s=new Float64Array(e.data.im),i=Math.floor(n);const r=0;i+=0;const l=new Float64Array(o.length),a=new Float64Array(s.length);l.set(o.slice(i)),l.set(o.slice(r,i),o.length-i),a.set(s.slice(i)),a.set(s.slice(r,i),s.length-i),e.data.re=l,e.data.im=a}function ma(e){return!!(e.info.isComplex&&e.info.isFid)}function tm(){return{once:!0,reduce:void 0}}var nm=Object.freeze(Object.defineProperty({__proto__:null,id:Vs,name:Qf,apply:em,isApplicable:ma,reduce:tm},Symbol.toStringTag,{value:"Module"}));const Yn="equallySpaced",ga="Equally Spaced";function om(e,t={}){if(!xa(e))throw new Error("Equally Spaced is not applicable on this data");const{from:n,to:o,numberOfPoints:s,exclusions:i}=t,{x:r,re:l,im:a}=e.data,u=Fs({x:r,y:l},{from:n,to:o,numberOfPoints:s,exclusions:i});if(e.data.x=u.x,e.data.re=u.y,a){const p=Fs({x:r,y:l},{from:n,to:o,numberOfPoints:s,exclusions:i});e.data.im=p.y}}function xa(e){return!!(e.info.isComplex&&!e.info.isFid)}function sm(){return{once:!1,reduce:null}}var im=Object.freeze(Object.defineProperty({__proto__:null,id:Yn,name:ga,apply:om,isApplicable:xa,reduce:sm},Symbol.toStringTag,{value:"Module"}));const no="exclusionZones",rm="Exclusion Zones";function lm(e,t=[]){if(!ba(e))throw new Error("Exclusion Zones filter not applicable on this data");const{x:n,re:o,im:s}=e.data;e.data.re=hr({x:n,y:o},{zones:t}).y,e.data.im=s&&hr({x:n,y:o},{zones:t})}function ba(e){return!!(e.info.isComplex&&e.info.isFt)}function am(e,t){return{once:!0,reduce:lp(e.concat(t))}}var cm=Object.freeze(Object.defineProperty({__proto__:null,id:no,name:rm,apply:lm,isApplicable:ba,reduce:am},Symbol.toStringTag,{value:"Module"}));const ya="fft",um="FFT";function dm(e){if(!ui(e))throw new Error("fft not applicable on this data");let t=e.filters.some(n=>n.name==="digitalFilter"&&n.flag);if(Object.assign(e.data,ap(e.data,{applyZeroShift:!0})),t){let{digitalFilter:n}=e.info,o=(n-Math.floor(n))*Math.PI*2;Object.assign(e.data,_l(e.data,0,o))}e.data.x=hm(e),e.info=k(b({},e.info),{isFid:!1,isFt:!0})}function ui(e){return!!(e.info.isComplex&&e.info.isFid)}function pm(){return{once:!0,reduce:void 0}}function hm(e){const t=e.info,n=parseFloat(t.baseFrequency),o=parseFloat(t.frequencyOffset),s=parseFloat(t.spectralWidth),i=o/n;let r=.5*s,l=e.data.x.length,a=i-r,u=s/(l-1);const p=new Array(l);for(let h=0;h<l;h++)p[h]=a,a+=u;return p}var fm=Object.freeze(Object.defineProperty({__proto__:null,id:ya,name:um,apply:dm,isApplicable:ui,reduce:pm},Symbol.toStringTag,{value:"Module"}));const No="fromTo",va="From/To";function mm(e,t={}){if(!Ca(e))throw new Error("From/To filter not applicable on this data");const{x:n,re:o,im:s}=e.data,{from:i,to:r}=t,{fromIndex:l,toIndex:a}=Jn(n,{from:i,to:r});e.data.x=n.slice(l,a),e.data.re=o.slice(l,a),s&&(e.data.im=s.slice(l,a))}function Ca(e){return!!(e.info.isComplex&&!e.info.isFid)}function gm(e,t){return{once:!0,reduce:t}}var xm=Object.freeze(Object.defineProperty({__proto__:null,id:No,name:va,apply:mm,isApplicable:Ca,reduce:gm},Symbol.toStringTag,{value:"Module"}));const Sa="lineBroadening",bm="Line broadening";function ym(e,t){if(!ka(e))throw new Error("lineBroadening not applicable on this data");let n=e.info.digitalFilter,o;n>0?o=Math.floor(n):o=0;const s=e.data.re,i=e.data.im,r=e.data.x,l=s.length,a=new Float64Array(l),u=new Float64Array(l),p=(r[l-1]-r[0])/(l-1),h=-t*Math.exp(1),m=Math.exp(h*p);let g=Math.exp(h*r[0]);for(let x=0;x<l-o;x++)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;g=Math.exp(h*r[0]);for(let x=l;x>l-o;x--)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;e.data=k(b({},e.data),{re:a,im:u})}function ka(e){return!!(e.info.isComplex&&e.info.isFid)}function vm(e,t){return{once:!0,reduce:e+t}}var Cm=Object.freeze(Object.defineProperty({__proto__:null,id:Sa,name:bm,apply:ym,isApplicable:ka,reduce:vm},Symbol.toStringTag,{value:"Module"}));const js="pareto",wa="Pareto";function Sm(e){var o;if(!Ea(e))throw new Error("Pareto is not applicable on this data");const t=e.data.re.slice(0),n=(o=e.data.im)==null?void 0:o.slice(0);e.data.re=fr(t),n&&(e.data.im=fr(n))}function Ea(e){return!!(e.info.isComplex&&!e.info.isFid)}function km(){return{once:!1,reduce:null}}var wm=Object.freeze(Object.defineProperty({__proto__:null,id:js,name:wa,apply:Sm,isApplicable:Ea,reduce:km},Symbol.toStringTag,{value:"Module"}));const jt="phaseCorrection",Aa="Phase correction";function Ta(e,t={}){if(!di(e))throw new Error("phaseCorrection not applicable on this data");let{ph0:n,ph1:o}=t;n*=Math.PI/180,o*=Math.PI/180,Object.assign(e.data,_l(e.data,n,o))}function di(e){return!!(e.info.isComplex&&!e.info.isFid)}function Em(e,t){return{once:!0,reduce:t}}var Am=Object.freeze(Object.defineProperty({__proto__:null,id:jt,name:Aa,apply:Ta,isApplicable:di,reduce:Em},Symbol.toStringTag,{value:"Module"}));const oo="shiftX",Tm="Shift X";function Dm(e,t=0){e.data.x=e.data.x.map(n=>n+t)}function Im(){return!0}function Pm(e,t){return{once:!0,reduce:e+t}}var Nm=Object.freeze(Object.defineProperty({__proto__:null,id:oo,name:Tm,apply:Dm,isApplicable:Im,reduce:Pm},Symbol.toStringTag,{value:"Module"}));const Bs="standardDeviation",Da="Standard Deviation";function Rm(e){var i;if(!Ia(e))throw new Error("Standard Deviation is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=To.standardDeviation(t),s=To.standardDeviation(n||[]);for(let r=0;r<t.length;r++)t[r]/=o,n&&(n[r]/=s);e.data.re=t,n&&(e.data.im=n)}function Ia(e){return!!(e.info.isComplex&&!e.info.isFid)}function Mm(){return{once:!1,reduce:null}}var _m=Object.freeze(Object.defineProperty({__proto__:null,id:Bs,name:Da,apply:Rm,isApplicable:Ia,reduce:Mm},Symbol.toStringTag,{value:"Module"}));const pi="zeroFilling",Pa="Zero Filling";function Fm(e,t){if(!hi(e))throw new Error("zeroFilling not applicable on this data");let n=e.filters.some(x=>x.name==="digitalFilter"&&x.flag),o=e.info.digitalFilter,s;o>0&&n?s=Math.floor(o):s=0;const{re:i,im:r,x:l}=e.data;let a=new Float64Array(t),u=new Float64Array(t),p=new Float64Array(t);const h=Math.min(t,i.length);a.set(i.slice(0,h-s)),u.set(r.slice(0,h-s)),p.set(l.slice(0,h-s));let m=l[1]-l[0],g=l[h-s-1];for(let x=h-s;x<t;x++)g+=m,p[x]=g;s>0&&s<t&&(a.set(i.slice(i.length-s),t-s),u.set(r.slice(i.length-s),t-s)),e.data=k(b({},e.data),{re:a,im:u,x:p})}function hi(e){return!!(e.info.isComplex&&e.info.isFid)}function Lm(e,t){return{once:!0,reduce:t}}var Om=Object.freeze(Object.defineProperty({__proto__:null,id:pi,name:Pa,apply:Fm,isApplicable:hi,reduce:Lm},Symbol.toStringTag,{value:"Module"}));const fi="shift2DX",$m="Shift 2D X";function Hm(e,t=0){e.data.minX+=t,e.data.maxX+=t}function zm(){return!0}function Vm(e,t){return{once:!0,reduce:e+t}}var jm=Object.freeze(Object.defineProperty({__proto__:null,id:fi,name:$m,apply:Hm,isApplicable:zm,reduce:Vm},Symbol.toStringTag,{value:"Module"}));const mi="shift2DY",Bm="Shift 2D Y";function Xm(e,t=0){e.data.minY+=t,e.data.maxY+=t}function Ym(){return!0}function Gm(e,t){return{once:!0,reduce:e+t}}var Wm=Object.freeze(Object.defineProperty({__proto__:null,id:mi,name:Bm,apply:Xm,isApplicable:Ym,reduce:Gm},Symbol.toStringTag,{value:"Module"})),on=Object.freeze(Object.defineProperty({__proto__:null,absolute:zf,baselineCorrection:Uf,lineBroadening:Cm,fft:fm,phaseCorrection:Am,autoPhaseCorrection:Yf,shiftX:Nm,zeroFilling:Om,digitalFilter:nm,fromTo:xm,equallySpaced:im,standardDeviation:_m,centerMean:Jf,pareto:wm,exclusionZones:cm,shift2DX:jm,shift2DY:Wm},Symbol.toStringTag,{value:"Module"}));const Zm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",Um=8;function q(){let e="";for(let t=0;t<Um;t++)e+=Zm.charAt(Math.floor(Math.random()*62));return e}function Te(e,t=[]){let n=!1;for(let o of t){const s={name:o.name,label:on[o.name].name,value:o.options},i=qm(e,o.name);if(i){const r=on[o.name].reduce(i.value,s.value);r.once?(n||(n=!0),r.reduce!=null&&r.reduce!==void 0&&Jm(e,i.id,r.reduce)):wr(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}else wr(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}if(n)t.length===1&&Km(e,t[0].name)?on[t[0].name].apply(e,t[0].options):hn(e);else for(let o of t)on[o.name].apply(e,o.options)}function Km(e,t){const n=e.filters.findIndex(o=>o.name===t);return e.filters.length===n+1}function qm(e,t){return e.filters.find(n=>n.name===t)}function hn(e,t=null){const n=t||e.filters;Na(e,null,null,n)}function Na(e,t,n,o=null){e.filters=e.filters.slice(0),t&&(e.filters=e.filters.map(i=>k(b({},i),{flag:i.id===t?n:i.flag}),[])),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);const s=o||e.filters;for(let i in s){const r=e.filters[i];if(e.filters[i]=k(b({},e.filters[i]),{error:null}),r.flag)try{on[r.name].apply(e,r.value)}catch(l){e.filters[i]=k(b({},e.filters[i]),{error:l.message})}}}function gi(e,t){e.filters=e.filters.slice(0),e.filters=e.filters.filter(n=>n.id!==t),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);for(let n in e.filters){const o=e.filters[n];if(e.filters[n]=k(b({},e.filters[n]),{error:null}),o.flag)try{on[o.name].apply(e,o.value)}catch(s){e.filters[n]=k(b({},e.filters[n]),{error:s.message})}}}function wr(e,t,n=!0){const o=q();e.filters=e.filters.slice(0),delete t.isSnapshot,e.filters.push(k(b({},t),{id:o,flag:!0,isDeleteAllow:n}))}function Jm(e,t,n){e.filters=e.filters.slice(0);const o=e.filters.findIndex(s=>s.id===t);delete e.filters[o].isSnapshot,e.filters[o]=k(b({},e.filters[o]),{value:n})}const Ra=["#C10020","#007D34","#803E75","#FF6800","#B32851","#7F180D","#232C16","#A6BDD7","#CEA262","#817066","#FF8E00","#F6768E","#00538A","#FF7A5C","#53377A","#FFB300","#F4C800","#93AA00","#593315","#F13A13"],Er={cosy:{positiveColor:"darkblue",negativeColor:"blue"},roesy:{positiveColor:"#e75480",negativeColor:"yellow"},noesy:{positiveColor:"#e75480",negativeColor:"yellow"},tocsy:{positiveColor:"green",negativeColor:"yellow"},hsqc:{positiveColor:"black",negativeColor:"yellow"},hmbc:{positiveColor:"darkviolet",negativeColor:"yellow"}};function Qm(e,t=[]){if(!Er[e]){const n=xi(!1,t),o=Ma(n,50);return{positiveColor:n,negativeColor:o}}return Er[e]}function Xs(e){const t=Math.max(0,Math.min(100,e)),o=Math.round(t/100*255).toString(16);return t===100?"":o.padStart(2,"0")}function Ma(e,t){return e+Xs(t)}function xi(e=!1,t=[],n=100){const o=Ra.filter(s=>!t.includes(s));if(o.length>0&&!e)return o[0]+Xs(n);{let i=String(`#${Math.random().toString(16).slice(2,8).toUpperCase()}`).replace(/[^0-9a-f]/gi,"");i.length<6&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);let r="#",l;for(let a=0;a<3;a++)l=parseInt(i.substr(a*2,2),16),l=Math.round(Math.min(Math.max(0,l+l*-.25),255)).toString(16),r+=`00${l}`.substr(l.length);return r+Xs(n)}}function eg(e){return an({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.integrals)}function _a(e){const{x:t}=e.data;return(t[t.length-1]-t[0])/1e4}function Wt(e){const t=(e==null?void 0:e.filters)&&(e==null?void 0:e.filters.find(n=>n.name===oo));return t!=null&&t.flag?t.value:0}function tg(e,t,n){var o;for(const{x:s}of((o=t.peaks)==null?void 0:o.values)||[])if(Math.abs(e.x-s)<n)return!0;return!1}function Fa(e,t){const n=Wt(t),o=_a(t);return e.reduce((s,i)=>(tg(i,t,o)||s.push({id:(i==null?void 0:i.id)||q(),originalX:i.x-n,x:i.x,y:i.y,width:i.width}),s),[])}function ng(e,t){var n;return an({values:[],options:{}},e.peaks,{values:Fa(((n=e==null?void 0:e.peaks)==null?void 0:n.values)||[],t)})}function og(e,t,n){var o;for(const{from:s,to:i}of((o=t.ranges)==null?void 0:o.values)||[])if(Math.abs(e.from-s)<n&&Math.abs(e.to-i)<n)return!0}function vn(e,t){const{x:n,re:o}=t.data,s=Wt(t),i=_a(t);return e.reduce((r,l)=>{if(og(l,t,i))return r;const a=bn({x:n,y:o},{from:l.from,to:l.to,reverse:!0}),u=l.signals.map(p=>{const x=p,{kind:h=null,id:m}=x,g=G(x,["kind","id"]);return b({kind:h||"signal",id:m||q(),originDelta:p.delta-s},g)});return r.push(k(b({},l),{kind:(u==null?void 0:u[0].kind)||Ze.signal,originFrom:l.from-s,originTo:l.to-s,id:l.id||q(),absolute:a,signals:u})),r},[])}function sg(e,t){var n;return an({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.ranges,{values:vn(((n=e==null?void 0:e.ranges)==null?void 0:n.values)||[],t)})}function ct(e,t={}){var o;const n={};return n.id=e.id||q(),n.source=Object.assign({jcampURL:null,file:{binary:null,name:"",extension:""}},e.source),n.display=Object.assign(k(b({name:(o=e.display)!=null&&o.name?e.display.name:q()},ig(e,t)),{isVisible:!0,isPeaksMarkersVisible:!0,isRealSpectrumVisible:!0}),e.display),n.info=Object.assign({nucleus:"1H",isFid:!1,isComplex:!1,dimension:1},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({x:[],re:[],im:[]},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.peaks=ng(e,n),n.integrals=eg(e),n.ranges=sg(e,n),hn(n),rg(n),n}function ig(e,t){var o;let n="black";return((o=e==null?void 0:e.display)==null?void 0:o.color)===void 0?n=xi(!1,t["1d"]||[]):n=e.display.color,t["1d"]&&t["1d"].push(n),{color:n}}function rg(e){e.info.isFid&&e.filters.findIndex(t=>t.name===Vs)===-1&&e.info.digitalFilter&&Te(e,[{name:Vs,options:{digitalFilterValue:e.info.digitalFilter},isDeleteAllow:!1}])}function La(e,t,n){const{nucleus:o,solvent:s,name:i=null,frequency:r=400}=t,{x:l,y:a}=Fl(e,{frequency:r,nbPoints:524288}),u=ct({data:{x:l,im:null,re:a},display:{name:i},info:{nucleus:o,originFrequency:r,baseFrequency:r,pulseSequence:"",solvent:s,isFt:!0}},n);return u.ranges.values=vn(e,u),u}function lg(e,t){const{ranges:n,experiment:{nucleus:o,solvent:s},parts:i}=cp(e);return La(n,{nucleus:o,solvent:s,name:i[0]},t)}function Cn(e){const{display:{isRealSpectrumVisible:t},data:{x:n,re:o,im:s}}=e;return{x:n,y:t?o:s}}const Ht={"1H":{tms:{from:-.1,to:.1,nbPeaks:1,delta:0},tsp:{from:-.1,to:.1,nbPeaks:1,delta:0},glucose:{from:5.18,to:5.28,nbPeaks:2,delta:5.23}},"13C":{}};function ag(e={}){const{nucleus:t="1H",reference:n="tms"}=e;if(!Ht[t])throw new Error(`Nucleus not found: ${t}`);const o=Ht[t][n.toLowerCase()];if(!o)throw new Error(`Reference not found: ${n}`);return{from:o.delta-.05,to:o.delta+.05,delta:o.delta,nbPeaks:o.nbPeaks}}function cg(e,t){let{from:n,to:o,nbPeaks:s,targetX:i,reference:r}=t;if(r){let u=ag({reference:r,nucleus:e.nucleus});n=u.from,o=u.to,s=u.nbPeaks,i=u.delta}const{re:l,x:a}=e.data;return ug({x:a,y:l},{from:n,to:o},{nbPeaks:s,targetX:i})}function ug(e,t={},n={}){const{targetX:o=0,nbPeaks:s=1,gsd:i={minMaxRatio:.1,realTopDetection:!0,smoothY:!0,sgOptions:{windowSize:7,polynomial:3}}}=n;let{from:r,to:l}=t;if(r===void 0||l===void 0)return 0;const a=We(e.x,r),u=We(e.x,l),p={x:e.x.slice(a,u),y:e.y.slice(a,u)};let h=up(p,i).sort((g,x)=>x.y-g.y).slice(0,s);if(h.length===0)return 0;const m=dp(h.map(g=>g.x));return o-m}function dg(e,t){const n=e.integrals.values.findIndex(o=>o.id===t.id);if(n!==-1){const o=e.integrals.values[n].absolute/t.value,{values:s,sum:i}=e.integrals.values.reduce((r,l,a)=>{const u=l.absolute/o;return r.sum+=u,r.values[a]=k(b({},l),{integral:u}),r},{values:[],sum:0});e.integrals.values=s,e.integrals.options=k(b({},e.integrals.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:i})}}function Oa(e){return to.includes(e.kind)}function Ar(e,t,n=null){return e.reduce((o,s)=>n&&n(s)===!0?o+=Math.abs(s[t]):o,0)}function $a(e,t,n,o=!1){var a;const{values:s,options:i}=e,r=Ar(s,"absolute",n);let l=0;if(i.sum){if(e.options.isSumConstant||o)l=r>0?i.sum/r:0;else if((a=e.values)!=null&&a[0]){const u=e.values[0];l=(u[t]?u[t]:i.sum)/u.absolute}}e.values=e.values.map(u=>b(b({},u),n(u)&&{[t]:u.absolute*l})),!e.options.isSumConstant&&!o&&(e.options.sum=Ar(e.values,t,n))}function Sn(e,t=!1){$a(e.integrals,"integral",Oa,t)}function kn(e){return e.info.dimension===1}function pg(e,t){const{minMaxRatio:n,maxNumberOfPeaks:o,noiseFactor:s,lookNegative:i,windowFromIndex:r,windowToIndex:l}=t,a=pp(e.data.re.map(m=>Math.abs(m)));let{re:u,x:p}=e.data;r!==void 0&&l!==void 0&&(p=p.slice(r,l),u=u.slice(r,l));let h=hp({x:p,y:u},{lookNegative:i,noiseLevel:a*s,minMaxRatio:n,realTopDetection:!0,smoothY:!1,sgOptions:{windowSize:15,polynomial:3}});return h.sort((m,g)=>g.y-m.y),o<h.length&&(h=h.slice(0,o)),Fa(h,e)}function Ha(e,t){const{from:n,to:o}=t;let s=e.x.findIndex(l=>l>=n),i=e.x.findIndex(l=>l>=o)-1;s>i&&(s=i,i=s);const r=e.re.slice(s,i);if(r&&r.length>0){const l=Ll(r),a=r.findIndex(p=>p===l);return{x:e.x[s+a],y:l,xIndex:s+a}}return null}function za(e){return(e==null?void 0:e.replace(/[0-9]/g,""))||""}function bi(e,t){let n=b({},e);const{molecules:o,nucleus:s}=t;if(e.sumAuto&&Array.isArray(o)&&o.length>0){const{mf:r,key:l}=o[0];n=k(b({},n),{sumAuto:!0,mf:r,moleculeKey:l})}else{const i=n,{mf:r,moleculeKey:l}=i,a=G(i,["mf","moleculeKey"]);n=k(b({},a),{sumAuto:!1})}return n.sum||(n.sum=Va(n.mf||null,s)),n}function Va(e,t){if(!e||!t)return 100;const o=za(t),s=hg(e);return s[o]?s[o]:100}function yi(e,t){const{nucleus:n,options:o}=t;if(o.sumAuto){const{mf:i,moleculeKey:r}=o,l=Va(i,n);e.options=k(b({},e.options),{sumAuto:!0,moleculeKey:r,mf:i,sum:l})}else{const s=e.options,{mf:i,moleculeKey:r}=s,l=G(s,["mf","moleculeKey"]);e.options=k(b({},l),{sumAuto:!1,sum:o.sum})}}function hg(e){const t={},n=e.split(/(\d+)/);for(let o=0;o<n.length-1;o=o+2)t[n[o]]=Number(n[o+1]);return t}function vi(e,t,n){const o=["ranges","integrals"];for(const s of e.data)if(kn(s))for(const i of o){const{moleculeKey:r,mf:l,sumAuto:a}=s[i].options;if((t===r||!r&&!l)&&a){const u=n?{mf:n.mf,moleculeKey:n.key}:{mf:void 0,moleculeKey:void 0};yi(s[i],{nucleus:s.info.nucleus,options:k(b({},u),{sumAuto:!0,sum:void 0})}),Dt(s,!0),Sn(s,!0)}}}function fg(e,t){return t===void 0?e.signals?e.signals.reduce((n,o)=>o.nbAtoms?o.nbAtoms+n:n,0):0:e.signals[t].nbAtoms||0}function mg(e,t){e.nbAtoms=fg(e,t),e.nbAtoms===0&&delete e.nbAtoms}function gg(e){delete e.diaIDs,delete e.nbAtoms,e.signals.forEach(t=>{delete t.diaIDs,delete t.nbAtoms}),delete e.nbAtoms}function jn(e,t="both",n={}){switch(t){case"both":gg(e);break;case"range":delete e.diaIDs,delete e.nbAtoms;break;case"signal":delete e.signals[n.signalIndex].diaIDs,delete e.signals[n.signalIndex].nbAtoms;break}return mg(e),e}function ja(e){return e.kind===Ze.signal}function xg(e,t){return!e.signals.some(n=>n.kind===void 0||!t.includes(n.kind))}function Bt(e,t){const n=t.reduce((o,s)=>(s.id&&o.push(s.id),s.signals&&(o=o.concat(s.signals.map(i=>i.id,[]))),o),[]);e.dispatch({type:"REMOVE_ALL",payload:{id:n,axis:"x"}})}function bg(e){return e.signals&&xg(e,to)}function Dt(e,t=!1){$a(e.ranges,"integration",bg,t)}function yg(e,t){const{from:n,to:o,molecules:s,nucleus:i}=t,{x:r,re:l}=e.data,a=bn({x:r,y:l},{from:n,to:o,reverse:!0}),u=Mf(r,l,n,o,e.info.originFrequency);if(!!u)try{const p={id:q(),from:n,to:o,absolute:a,signals:[b({id:q()},u)],kind:Ze.signal,integration:0};e.ranges.options=bi(e.ranges.options,{molecules:s,nucleus:i}),e.ranges.values=e.ranges.values.concat(vn([p],e)),Dt(e)}catch{throw new Error("Could not calculate the multiplicity")}}function vg(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,r=e.ranges.values.findIndex(a=>a.id===t.id),l=bn({x:s,y:i},{from:n,to:o,reverse:!0});r!==-1&&(e.ranges.values[r]=k(b(k(b({},e.ranges.values[r]),{originFrom:n,originTo:o}),t),{absolute:l}),Dt(e))}function Cg(e,t){const n=e.ranges.values.findIndex(o=>o.id===t.id);if(n!==-1&&e.ranges.options.sum){const{absolute:o,integration:s}=e.ranges.values[n],i=o/t.value,r=t.value/s*e.ranges.options.sum;e.ranges.options=k(b({},e.ranges.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:r}),e.ranges.values=e.ranges.values.map(l=>k(b({},l),{integration:l.absolute/i}))}}function Sg(e,t){const{rangeID:n,signalID:o,newSignalValue:s}=t;let i=0;const r=e.ranges.values.findIndex(l=>l.id===n);if(r!==-1){const l=e.ranges.values[r].signals.findIndex(a=>a.id===o);i=s-e.ranges.values[r].signals[l].delta,e.ranges.values[r].signals[l].delta=s}return i}function kg(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,r=bn({x:s,y:i},{from:n,to:o,reverse:!0}),l=fp({x:s,y:i},{from:n,to:o}).y,a=mp({x:s,y:i},{from:n,to:o}).y,u=Wt(e);return{id:q(),originFrom:n-u,originTo:o-u,from:n,to:o,absolute:r,min:l,max:a}}const wg={minMaxRatio:1,realTopDetection:!0,maxCriteria:!0,smoothY:!1,integrationSum:100,factorStd:5,clean:!0,sgOptions:{windowSize:7,polynomial:3}};function Eg(e,t={}){let{re:n,x:o}=e.data;const{originFrequency:s,nucleus:i}=e.info,{windowFromIndex:r,windowToIndex:l,peakPicking:a}=t,u=b(b({},wg),a),p={frequency:s,nucleus:i,compile:!0,frequencyCluster:13,keepPeaks:!0};if(r!==void 0&&l!==void 0&&(o=o.slice(r,l),n=n.slice(r,l)),s){let m=1/s/(o[1]-o[0]),g=Math.max(Math.round(m/2),5);u.sgOptions={windowSize:g-g%2+1,polynomial:3}}return u.smoothY=void 0,u.sgOptions=void 0,gp({x:o,y:n},{peakPicking:u,ranges:p})}function Ba(e,t){const r=t,{molecules:n,nucleus:o}=r,s=G(r,["molecules","nucleus"]);s.impurities={solvent:e.info.solvent||""};const i=Eg(e,s);e.ranges.options=bi(e.ranges.options,{molecules:n,nucleus:o}),e.ranges.values=e.ranges.values.concat(vn(i,e)),Dt(e)}function Ag(e,t){e.integrals.values=e.integrals.values.map(n=>k(b({},n),{from:n.originFrom+t,to:n.originTo+t}))}function Tg(e,t){e.peaks.values=e.peaks.values.map(n=>{const o=n.originalX+t,s=We(e.data.x,o);return k(b({},n),{y:e.data.re[s],x:n.originalX+t})})}function Dg(e,t){e.ranges.values=e.ranges.values.map(n=>k(b({},n),{from:(n.originFrom||0)+t,to:(n.originTo||0)+t,signals:(n==null?void 0:n.signals)&&n.signals.map(o=>k(b({},o),{delta:(o.originDelta||0)+t}))}))}function wn(e){const t=Wt(e);Tg(e,t),Dg(e,t),Ag(e,t)}const Xa=20;var Y=(e=>(e.DM_1D="1D",e.DM_2D="2D",e))(Y||{});const _t={"2D":{top:100,right:50,bottom:70,left:100},"1D":{top:10,right:10,bottom:70,left:10}};function Ig(e,t={},n={}){const{dependentVariables:o,info:s,meta:i,source:r}=e;let l=Ya(o[0].components);return l.im&&(s.isComplex=!0),Array.isArray(s.nucleus)&&(s.nucleus=s.nucleus[0]),ct(k(b({},t),{source:r,info:s,meta:i,data:l}),n)}function Pg(e,t={},n={}){let o=e.dimensions[0],s=e.dependentVariables,i=o.quantityName,r=o.count,l=o.increment.magnitude,a=o.originOffset.magnitude,u=o.coordinatesOffset.magnitude,p=s[0].components[0],h=[],m=[];for(let C=p.length-1;C>0;C-=2)h.push(p[C-1]),m.push(p[C]);let g={},x,y;switch(i){case"frequency":y=0+u/a*1e6,x=l/a*1e6,g.re=h,g.im=m;break;case"time":y=a,x=l,g.re=h.reverse(),g.im=m.reverse().map(C=>-C);break}let S=[];for(let C=0;C<r;C++)S.push(y+C*x);return g.x=S,ct(k(b({},t),{data:g}),n)}function Ng(e,t,n,o){const{dependentVariables:s,info:i,meta:r}=e;let l=Ya(s[0].components);return Array.isArray(i.nucleus)&&(i.nucleus=i.nucleus[0]),ct(k(b({},t),{source:k(b({},t.source),{jcampSpectrumIndex:o}),info:i,meta:r,data:l}),n)}function Ya(e){var s,i,r,l,a,u;let t=(i=(s=e[0])==null?void 0:s.data)!=null&&i.x?e[0].data.x:[],n=(l=(r=e[0])==null?void 0:r.data)!=null&&l.y?e[0].data.y:[],o=(u=(a=e[1])==null?void 0:a.data)!=null&&u.y?e[1].data.y:null;return t[0]>t[1]&&(t.reverse(),n.reverse(),o&&o.reverse()),{x:t,re:n,im:o}}function Rg(e,t,n){let o=e.info.nucleus.indexOf(t);o===-1&&(o=0);let s={nucleus:e.info.nucleus[o],isFid:!1,isComplex:!1,dimension:1},i=o===0?e.data.minX:e.data.minY,r=o===0?e.data.maxX:e.data.maxY,l=o===0?e.data.z[0].length:e.data.z.length,a=new Float64Array(l);if(o===1)for(let p=0;p<e.data.z.length;p++)for(let h=0;h<e.data.z[0].length;h++)a[p]+=e.data.z[p][h];else for(let p=0;p<e.data.z[0].length;p++)for(const h of e.data.z)a[p]+=h[p];let u={x:Ls({from:i,to:r},l),re:a};return ct({info:s,data:u},n)}function Mg(e,t){const n=e.data,o=(n.maxX-n.minX)/(n.z[0].length-1),s=(n.maxY-n.minY)/(n.z.length-1),i=Math.floor((t.x-n.minX)/o),r=Math.floor((t.y-n.minY)/s);if(i<0||i>=n.z[0].length||r<0||r>=n.z.length)return;let l={nucleus:e.info.nucleus[0],isFid:!1,isComplex:!1,dimension:1},a={x:Ls({from:e.data.minX,to:e.data.maxX},e.data.z[0].length),re:new Float64Array(e.data.z[0].length)};for(let x=0;x<e.data.z[0].length;x++)a.re[x]+=e.data.z[r][x];let u={nucleus:e.info.nucleus[1],isFid:!1,isComplex:!1,dimension:1},p={x:Ls({from:e.data.minY,to:e.data.maxY},e.data.z.length),re:new Float64Array(e.data.z.length)},h=e.data.z.length-1;for(let x=0;x<e.data.z.length;x++)p.re[x]+=e.data.z[h--][i];const m=ct({info:l,data:a},{}),g=ct({info:u,data:p},{});return{horizontal:m,vertical:g}}const Ga={positive:{contourLevels:[0,21],numberOfLayers:10},negative:{contourLevels:[0,21],numberOfLayers:10}};class _g{constructor(t,n=Ga,o={positive:10,negative:10}){this.options=n;const{positive:s,negative:i}=o;this.currentLevelPositive=s,this.currentLevelNegative=i;const r=ws(t.minX,t.maxX,t.z[0].length),l=ws(t.minY,t.maxY,t.z.length);this.conrec=new xp(t.z,{xs:r,ys:l,swapAxes:!1}),this.median=t.noise,this.minMax=t}getLevel(){return{levelPositive:this.currentLevelPositive,levelNegative:this.currentLevelNegative}}setLevel(t,n){this.currentLevelPositive=t,this.currentLevelNegative=n}setOptions(t){const n=t.positive.contourLevels,o=t.negative.contourLevels;this.currentLevelPositive>=n[1]?this.currentLevelPositive=n[1]:this.currentLevelPositive<=n[0]&&(this.currentLevelPositive=n[0]),this.currentLevelNegative>=o[1]?this.currentLevelNegative=o[1]:this.currentLevelNegative<=o[0]&&(this.currentLevelNegative=o[0]),this.options=t}wheel(t){const n=Math.sign(t),o=this.options.positive.contourLevels,s=this.options.negative.contourLevels;(this.currentLevelPositive>o[0]&&n===-1||this.currentLevelPositive<o[1]&&n===1)&&(this.currentLevelPositive+=n),(this.currentLevelNegative>s[0]&&n===-1||this.currentLevelNegative<s[1]&&n===1)&&(this.currentLevelNegative+=n)}shiftWheel(t){const n=Math.sign(t),[o,s]=this.options.positive.contourLevels;if(!(this.currentLevelPositive===o&&n===-1||this.currentLevelPositive>=s&&n===1))return this.currentLevelPositive+=n,[]}drawContours(){const t=this.currentLevelPositive/2+1,n=this.currentLevelNegative/2+1,{positive:{numberOfLayers:o},negative:{numberOfLayers:s}}=this.options;return{positive:this.getContours(t,{nbLevels:o}),negative:this.getContours(n,{negative:!0,nbLevels:s})}}getContours(t,n={}){const{negative:o=!1,timeout:s=2e3,nbLevels:i=10}=n,r=Math.max(Math.abs(this.minMax.maxZ),Math.abs(this.minMax.minZ));let l=ws(this.median*1*Math.pow(2,t),r,i,2);o&&(l=l.map(u=>-u));let a=[];try{a=this.conrec.drawContour({contourDrawer:"basic",levels:l,timeout:s})}catch(u){throw console.log(u),u}return a}}function ws(e,t,n,o){if(o!==void 0){const s=[];s[0]=0;for(let l=1;l<=n;l++)s[l]=s[l-1]+(o-1)/Math.pow(o,l);const i=s[n],r=new Array(n);for(let l=0;l<n;l++)r[l]=(t-e)*(1-s[l+1]/i)+e;return r}else{const s=(t-e)/(n-1);return Fg(e,t+s/2,s)}}function Fg(e,t,n){const o=[];for(let s=e;s<t;s+=n)o.push(s);return o}function so(e,t={}){var o;const n={};return n.id=e.id||q(),n.source=Object.assign({jcampURL:null},e.source),n.display=Object.assign(k(b({name:(o=e.display)!=null&&o.name?e.display.name:q()},Lg(e,t)),{isPositiveVisible:!0,isNegativeVisible:!0,isVisible:!0,contourOptions:Ga,dimension:2}),e.display),n.info=Object.assign({nucleus:["1H","1H"],isFt:!0,isFid:!1,isComplex:!1,dimension:2},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({z:[],minX:0,minY:0,maxX:0,maxY:0},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.zones=Object.assign({values:[],options:{}},e.zones),n.processingController=new _g(n.data,n.display.contourOptions),hn(n),n}function Lg(e,t){var o,s;let n={positiveColor:"red",negativeColor:"blue"};return(((o=e==null?void 0:e.display)==null?void 0:o.negativeColor)===void 0||((s=e==null?void 0:e.display)==null?void 0:s.positiveColor)===void 0)&&(n=Qm(e.info.experiment,t["2d"]||[])),t["2d"]&&t["2d"].push(n.positiveColor),n}function Ys(e){return e.info.dimension===2}function io(e){let t={xShift:0,yShift:0};return e!=null&&e.filters&&(t=e.filters.reduce((n,o)=>(o.name===fi&&(n.xShift=o!=null&&o.flag?o.value:0),o.name===mi&&(n.yShift=o!=null&&o.flag?o.value:0),n),{xShift:0,yShift:0})),t}function ro(e){const{xShift:t,yShift:n}=io(e);Og(e,{xShift:t,yShift:n})}function Og(e,{xShift:t,yShift:n}){e.zones.values=e.zones.values.map(o=>{var s;return k(b({},o),{signals:(s=o.signals)==null?void 0:s.map(i=>k(b({},i),{x:k(b({},i.x),{delta:i.x.originDelta+t}),y:k(b({},i.y),{delta:i.y.originDelta+n})}))})})}function $g(e,t){return k(b({id:e.id},t===vt.ROW_DATA||t===vt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL,jcampSpectrumIndex:e.source.jcampSpectrumIndex}}),{zones:e.zones,filters:e.filters,display:e.display})}function Hg(e,t,n){var s;const o=e.zones.values.findIndex(i=>i.id===t);if(o!==-1){const i=e.zones.values[o].signals.findIndex(l=>l.id===n.id),r=e.zones.values[o];if(i!==-1){const l=r.signals[i],a=(n==null?void 0:n.x)||(n==null?void 0:n.x)===0?n.x-l.x.delta:0,u=(n==null?void 0:n.y)||(n==null?void 0:n.y)===0?n.y-((s=l.y)==null?void 0:s.delta):0;return{xShift:a,yShift:u}}}return{xShift:0,yShift:0}}function Wa(e,t){let n={};return t.selectedZone?(t.enhanceSymmetry=!1,n=Vg(e,t.selectedZone)):n=e.data,zg(n,k(b({},t),{info:e.info}))}function zg(e,t){const{thresholdFactor:n,clean:o,maxPercentCutOff:s,convolutionByFFT:i}=t,{nucleus:r,originFrequency:l}=t.info,{enhanceSymmetry:a=r[0]===r[1]}=t;return bp(e,{nuclei:r,observedFrequencies:l,thresholdFactor:n,clean:o,maxPercentCutOff:s,enhanceSymmetry:a,convolutionByFFT:i})}function Vg(e,t){const{fromX:n,toX:o,fromY:s,toY:i}=t,r=e.data,l=(r.maxX-r.minX)/(r.z[0].length-1),a=(r.maxY-r.minY)/(r.z.length-1);let u=Math.max(Math.floor((n-r.minX)/l),0),p=Math.max(Math.floor((s-r.minY)/a),0),h=Math.min(Math.floor((o-r.minX)/l),r.z[0].length-1),m=Math.min(Math.floor((i-r.minY)/a),r.z.length-1);u>h&&([u,h]=[h,u]),p>m&&([p,m]=[m,p]);let g={z:[],maxX:r.minX+h*l,minX:r.minX+u*l,maxY:r.minY+m*a,minY:r.minY+p*a},x=Number.MIN_SAFE_INTEGER,y=Number.MAX_SAFE_INTEGER,S=h-u+1;for(let v=p;v<m;v++){let C=new Float32Array(S),E=u;for(let T=0;T<S;T++)C[T]=r.z[v][E++];for(let T of C)x<T&&(x=T),y>T&&(y=T);g.z.push(Array.from(C))}return g.minZ=y,g.maxZ=x,g}function Za(e,t){const n=Wa(e,t),{xShift:o,yShift:s}=io(e),{minX:i,maxX:r,minY:l,maxY:a}=e.data,u=Math.abs(r-i)/1e4,p=Math.abs(a-l)/1e4;return n.reduce((m,g)=>{const x=g.x||{from:0,to:0},y=g.y||{from:0,to:0};for(const{x:v,y:C}of e.zones.values)if(Math.abs(x.from-v.from)<u&&Math.abs(x.to-v.to)<u&&Math.abs(y.from-C.from)<p&&Math.abs(y.to-C.to)<p)return m;const S=g.signals.map(v=>({id:q(),peaks:v.peaks,x:b({originDelta:v.x.delta-o},v.x),y:b({originDelta:v.y.delta-s},v.y),kind:"signal"}));return m.push({id:q(),x:{from:x.from,to:x.to},y:{from:y.from,to:y.to},signals:S,kind:Ze.signal}),m},[])}function jg(e,t){const n=Wa(e,t),{xShift:o,yShift:s}=io(e);return n.map(r=>{const l=r.signals.map(a=>({id:q(),peaks:a.peaks,x:b({originDelta:a.x.delta-o},a.x),y:b({originDelta:a.y.delta-s},a.y),kind:a.kind||"signal"}));return{id:q(),x:r.x,y:r.y,signals:l,kind:Ze.signal}},[])}function Bg(e,t,n,o){const{dependentVariables:s,info:i,meta:r}=e;let l=s[0].components;return so(k(b({},t),{source:k(b({},t==null?void 0:t.source),{jcampSpectrumIndex:o}),info:i,meta:r,data:l}),n)}function Xg(e,t={},n={}){const{dependentVariables:o,meta:s,source:i}=e;let r=o[0].components;return so(k(b({},t),{source:i,meta:s,data:r}),n)}function Yg(e,t={},n={}){return so({},n)}function Ro(e,t){return JSON.parse(JSON.stringify(e),function(o,s){if(o in t){this[t[o]]=s;return}return s})}function Gg(e){if((e==null?void 0:e.version)===1)return e;const t=k(b({},e),{version:1}),n={j:"js",signal:"signals",integral:"integration",peak:"peaks",diaID:"diaIDs"};for(const o of t.spectra)o.ranges?o.ranges=Ro(o.ranges,n):o.zones&&(o.zones=Ro(o.zones,n));return t}function Wg(e){if((e==null?void 0:e.version)===2)return e;const t=k(b({},e),{version:2}),n={peaks:{delta:"x",originDelta:"originalX",intensity:"y"},ranges:{atomIDs:"atoms",intensity:"y"}};for(const o of t.spectra)o.peaks?o.peaks=Ro(o.peaks,n.peaks):o.ranges?o.ranges=Ro(o.ranges,n.ranges):o.zones&&(o.zones.values=Zg(o.zones.values));return t}function Zg(e){return e.map(t=>(t.signals&&(t.signals=t.signals.map(n=>{if(n.x&&n.y){const o=n,{x:s}=o,i=s,{fromTo:u}=i,p=G(i,["fromTo"]),{y:r}=o,l=r,{fromTo:h}=l,m=G(l,["fromTo"]);n=k(b({},n),{x:b(b({},p),u),y:b(b({},m),h)})}else{const a=n,{fromTo:u,deltaX:p,resolutionX:h,nucleusX:m,deltaY:g,resolutionY:x,nucleusY:y,shiftX:S,shiftY:v}=a,C=G(a,["fromTo","deltaX","resolutionX","nucleusX","deltaY","resolutionY","nucleusY","shiftX","shiftY"]);n=k(b({},C),{x:{from:u[0].from,to:u[0].to,delta:p,resolution:h,nucleus:m},y:{from:u[1].from,to:u[1].to,delta:g,resolution:x,nucleus:y}})}return n},[])),t),[])}const Ua=2;function Ug(e){return t=>e.reduce((n,o)=>o(n),t)}function Tr(e){let t=[Gg,Wg],n=(e==null?void 0:e.version)||0;if(n>Ua)throw new Error("This file can not be imported using the current NMRium version, Please move to the new one !!! ");return Ug(t.slice(n))(e)}const Kg=/^(?:[A-Z][a-z]?\d* *)+$/;function Ka(e){if(!Kg.test(e))throw Error(`MF can not be parsed: ${e}`);const t={},n=e.matchAll(/(?<atom>[A-Z][a-z]?)(?<number>[0-9]*)/g);for(const o of n){const{atom:s,number:i}=o.groups;t[s]||(t[s]=0),t[s]+=i===""?1:Number(i)}return t}function Mo(e={}){const t=e.key||q(),n=e.molfile||"",o=Et.Molecule.fromMolfile(n),s=o.getMolecularFormula();return{key:t,molfile:n,mf:s.formula,em:s.absoluteWeight,mw:s.relativeWeight,svg:o.toSVG(50,50),atoms:Ka(s.formula)}}function qg(e){return{molfile:e.molfile}}var vt=(e=>(e.ROW_DATA="ROW_DATA",e.DATA_SOURCE="DATA_SOURCE",e))(vt||{});function Jg(e,t,n,o){return fetch(t).then(s=>s.arrayBuffer()).then(s=>{qa(e,s,n,o)})}function qa(e,t,n,o){var i,r;n=n||{};const s=vp(t,{noContour:!0,xy:!0,keepRecordsRegExp:/.*/,profiling:!0});if(s.length!==0)for(let l=0;l<s.length;l++){let a=s[l];const u=(r=(i=a.dependentVariables)==null?void 0:i[0])==null?void 0:r.components;u&&(u.length>0||u.z)&&Qg(e,{index:l,entry:a},n,o)}}function Qg(e,t,n,o){const s=(n==null?void 0:n.source)||{};if(!("jcampSpectrumIndex"in s)||s.jcampSpectrumIndex===t.index){const i=t.entry.info.dimension;i===1&&e.push(Ng(t.entry,n,o,t.index)),i===2&&e.push(Bg(t.entry,n,o,t.index))}}function ex(e,t,n){const o=t.info.dimension;o===1&&e.push(ct(t,n)),o===2&&e.push(so(t,n))}function tx(e,t,n={},o={}){let s=Cp(t);s=s[0];let i=s.description,r=i.metadata;delete i.metadata,i.acquisitionMode=0,i.experiment=i.dimension===1?"1d":"2d",i.type="NMR SPECTRUM",i.nucleus=i.nucleus[0],i.numberOfPoints=i.numberOfPoints[0],i.acquisitionTime=i.acquisitionTime[0],i.baseFrequency=i.baseFrequency[0],i.frequencyOffset=i.frequencyOffset[0],i.spectralWidthClipped=s.application.spectralWidthClipped,i.dimension===1&&s.dependentVariables&&e.push(Pg(s,k(b({},n),{display:b({},n.display),info:i,meta:r}),o)),i.dimension===2&&i.isFt&&e.push(Yg(s,k(b({},n),{display:b({},n.display),info:i}),o))}async function Dr(e=[],t={}){var s;const n=[];let o=[];for(let i of e)((s=i==null?void 0:i.source)==null?void 0:s.jcampURL)!=null?o.push(Jg(n,i.source.jcampURL,i,t)):ex(n,i,t);return await Promise.all(o),n}async function Ja(e,t,n){const o=[];let i=await yp(t,{xy:!0,noContours:!0,keepOriginal:!0});for(let r of i){let{info:l,dependentVariables:a}=r;l.dimension===1?a[0].components&&o.push(Ig(r,k(b({},e),{display:b({},e.display)}),n)):l.dimension===2&&l.isFt&&o.push(Xg(r,k(b({},e),{info:l,display:b({},e.display)}),n))}return o}function nx(e,t){const n=[];for(const o of e)tx(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function Qa(e,t){const n=[];for(const o of e)qa(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function ox(e){const{activeTab:t,verticalAlign:{align:n}}=e;return b({activeTab:t},e.displayerMode===Y.DM_1D?{verticalAlign:n}:{})}function Ir(e,t="DATA_SOURCE"){const{data:n,molecules:o,correlations:s,multipleAnalysis:i,toolOptions:{data:{exclusionZones:r}}}=e||{data:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:{}},l=n.map(p=>p.info.dimension===1?sx(p,t):$g(p,t)),a=ox(e),u=o.map(p=>qg(p));return{spectra:l,molecules:u,correlations:s,multipleAnalysis:i,exclusionZones:r,version:Ua,preferences:a}}function sx(e,t){return k(b({id:e.id,display:e.display},t===vt.ROW_DATA||t===vt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL,jcampSpectrumIndex:e.source.jcampSpectrumIndex}}),{peaks:e.peaks,integrals:e.integrals,ranges:e.ranges,filters:e.filters})}const ec={name:"",frequency:400,"1d":{"1H":{from:-1,to:12},"13C":{from:-5,to:220},nbPoints:2**17,lineWidth:1},"2d":{nbPoints:{x:1024,y:1024}},spectra:{proton:!0,carbon:!0,cosy:!0,hsqc:!0,hmbc:!0}},tc=[{key:1,value:60,label:"60 MHz"},{key:2,value:100,label:"100 MHz"},{key:3,value:200,label:"200 MHz"},{key:4,value:300,label:"300 MHz"},{key:5,value:400,label:"400 MHz"},{key:6,value:500,label:"500 MHz"},{key:7,value:600,label:"600 MHz"},{key:8,value:800,label:"800 MHz"},{key:9,value:1e3,label:"1000 MHz"},{key:10,value:1200,label:"1200 MHz"}],ix="https://nmr-prediction.service.zakodium.com";async function rx(e){const t=Et.Molecule.fromMolfile(e);return Sp(t,{predictOptions:{C:{webserviceURL:`${ix}/v1/predict/carbon`}}})}function lx(e,t,n){const o=[];for(const s in e)if(t.spectra[s]){const i=e[s];switch(s){case"proton":case"carbon":{const r=ax({spectrum:i,inputOptions:t,experiment:s,color:n});o.push(r);break}case"cosy":case"hsqc":case"hmbc":{const r=ux({spectrum:i,inputOptions:t,experiment:s,color:n});o.push(r);break}}}return o}function ax(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,ranges:r,nucleus:l}=t,{name:a,"1d":{nbPoints:u},frequency:p}=n,h=nc(l,p),{x:m,y:g}=kp(i,k(b({},n["1d"][l]),{frequency:h,nbPoints:u})),x=ct({data:{x:m,im:null,re:g},display:{name:a,color:s},info:{nucleus:l,originFrequency:h,baseFrequency:h,pulseSequence:"prediction",solvent:"",experiment:o,isFt:!0}},[]);return x.ranges.values=vn(r,x),Sn(x),x}function cx(e){return e.reduce((t,n)=>{const r=n,{signals:o}=r,s=G(r,["signals"]),i=o.reduce((l,a)=>{const g=a,{x:u,y:p,id:h}=g,m=G(g,["x","y","id"]);return l.push(b({id:h||q(),kind:"signal",x:k(b({},u),{originDelta:u.delta||0}),y:k(b({},p),{originDelta:p.delta||0})},m)),l},[]);return t.push(k(b({id:q()},s),{signals:i,kind:Ze.signal})),t},[])}function ux(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,zones:r,nuclei:l}=t,a=n["1d"][l[0]],u=n["1d"][l[1]],p=dx(l),h=nc(l,n.frequency),m=wp(i,{from:{x:a.from,y:u.from},to:{x:a.to,y:u.to},nbPoints:{x:n["2d"].nbPoints.x,y:n["2d"].nbPoints.y},width:p,factor:3}),g=so({data:k(b({},m),{noise:.01}),display:{name:n.name,positiveColor:s,negativeColor:Ma(s,40)},info:{nucleus:l,originFrequency:h,baseFrequency:h,pulseSequence:o,experiment:"2d"}},[]);return g.zones.values=cx(r),g}function dx(e){return e[0]===e[1]?.02:{x:.02,y:.2133}}function nc(e,t){return typeof e=="string"?mr(e,{nucleus:"1H",frequency:t}):e[0]===e[1]?`${t},${t}`:`${t},${mr(e[1],{nucleus:e[0],frequency:t})}`}const Ci=[{key:"outOfLimit",color:"red"},{key:"ambiguousAttachment",color:"orange"},{key:"notAttached",color:"blue"},{key:"incomplete",color:"red"}],px=Ci.map(e=>e.key),oc={C:.25,H:.02,N:.25,F:.25,Si:.25,P:.25},F={zoom:{id:"zoom",label:"Zoom",hasOptionPanel:!1,isFilter:!1},peakPicking:{id:"peakPicking",label:"Peaks Picking",hasOptionPanel:!0,isFilter:!1},integral:{id:"integral",label:"integral Tool",hasOptionPanel:!1,isFilter:!1},zone2D:{id:"zone2D",label:"Zone Tool",hasOptionPanel:!0,isFilter:!1},slicingTool:{id:"slicingTool",label:"Slicing Tool",hasOptionPanel:!1,isFilter:!1},HMove:{id:"HMove",label:"Move spectrum horizontally",hasOptionPanel:!1,isFilter:!1},equalizerTool:{id:"equalizerTool",label:"Equalizer Tool",hasOptionPanel:!1,isFilter:!1},rangesPicking:{id:"rangesPicking",label:"Ranges Picking",hasOptionPanel:!0,isFilter:!1},zeroFilling:{id:pi,label:Pa,hasOptionPanel:!0,isFilter:!0},phaseCorrection:{id:jt,label:Aa,hasOptionPanel:!0,isFilter:!0},baseLineCorrection:{id:"baseLineCorrection",label:"baseline correction",hasOptionPanel:!0,isFilter:!0},generalSelector:{id:"generalSelector",label:"range general selector",hasOptionPanel:!1,isFilter:!1},editRange:{id:"editRange",label:"edit range",hasOptionPanel:!1,isFilter:!1},multipleSpectraAnalysis:{id:"multipleSpectraAnalysis",label:"Multiple Spectra Analysis",hasOptionPanel:!1,isFilter:!1},exclusionZones:{id:"exclusionZones",label:"Exclusion Zones",hasOptionPanel:!1,isFilter:!1},databaseRangesSelection:{id:"databaseRangesSelection",label:"Filter Database",hasOptionPanel:!1,isFilter:!1}};function hx(e,t){let n=[];const{baseFrequency:o=500}=t;for(const s of e){const{jCoupling:i,delta:r,diaIDs:l=[],multiplicity:a,integration:u}=s,p=fx({delta:r,js:i,frequency:o});if(i&&a&&i.length===a.length){i.sort((h,m)=>m-h);for(let h=0;h<i.length;h++)i[h].multiplicity=a[h]}n.push(k(b({},p),{integration:u,signals:[{js:i,delta:r,diaIDs:l,multiplicity:a}]}))}t.ranges.values=vn(mx(n),t)}function fx(e={}){const{delta:t,js:n=[],frequency:o}=e;let s=.5;for(let i of n)s+=i.coupling;return s/=o,{from:t-s,to:t+s}}function mx(e){e.sort((t,n)=>t.from-n.from);for(let t=0;t<e.length-1;t++)e[t].to>e[t+1].from&&(e[t].to=Math.max(e[t+1].to,e[t].to),e[t].signals=e[t].signals.concat(e[t+1].signals),e[t].integration+=e[t+1].integration,e.splice(t+1,1),t--);return e}const gx=["y","x"];function xx(e,t){let n=[];const o=io(t),{baseFrequency:s}=t.info,i={x:s[0],y:s[1]};for(const r of e){let l={x:{},y:{},id:q(),kind:"signal"},a={id:q(),kind:"signal",peaks:[]},u={x:10,y:10};for(let p of gx){let{coupling:h=[],delta:m,diaIDs:g=[]}=r[p];for(let x of h)u[p]+=x.coupling;if(r.activeCoupling){const{activeCoupling:x=[]}=r;for(let y of x)u[p]+=y.coupling}u[p]/=i[p],l[p]={from:m-u[p],to:m+u[p]},a[p]={delta:m,diaIDs:g,originDelta:m-o[`${p}Shift`]}}n.push(k(b({},l),{signals:[a]}))}t.zones.values=n}async function bx(e,t){const o=await new un().loadAsync(e.binary),s=await vx(o.files),i=await Ep.toJSON({sdf:s[0],zipFiles:o.files});let{spectra:r,molecules:l=[]}=i,a={spectra:[],molecules:l};for(const u of r){const{file:p,jcampURL:h}=u.source;let m=await yx(p,{jcampURL:h},t)||[];for(const g of m){const{info:x}=g;x.isFid||(x.dimension>1?xx(u.signals,g):hx(u.signals,g))}a.spectra.push(...m)}return a}async function yx(e,t={},n={}){const{xy:o=!0,noContours:s=!0,keepOriginal:i=!0,jcampURL:r}=t;switch(e.extension){case"jdx":case"dx":return Qa([e],n);case"zip":return Ja({xy:o,noContours:s,keepOriginal:i},e.binary,n);default:if(!r)return}}async function vx(e){let t=[];for(const n in e){const o=n.split("/");if(/^[^.].+sdf$/.exec(o[o.length-1])){const s=o[o.length-1].replace(/\.sdf/,""),i=o.slice(0,o.length-1).join("/"),r=await e[n].async("string");let l=Ap(`${r}`,{mixedEOL:!0});l.filename=s,l.root=i!==""?`${i}/`:"",t.push(l)}}return t}function Cx(e,t){const n=t.payload.assignments;for(let o of n){const s=e.data.findIndex(i=>i.id===o.id);if(s!==-1){const i=e.data[s].info.dimension;i===1?e.data[s].ranges.values=o.ranges:i===2&&(e.data[s].zones.values=o.zones)}}}function Pe(e,t,n){const o=e.find(s=>s.id===t);if(!(o&&n===!0&&o.display.isVisible===!1))return o}function sc(e,t){for(let n of e.ranges.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function Gn(e,t){for(let n of e.zones.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function Si(e,t){for(let n of e.ranges.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function _o(e,t){for(let n of e.zones.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function ki(e,t,n,o){const s=Pe(e,t,o);if(s){if(s.info.dimension===1){const i=Si(s,n);if(i)return i.id}else if(s.info.dimension===2){const i=_o(s,n);if(i)return i.id}}}function Xt(e,t=null){const{width:n,margin:o,xDomains:s,xDomain:i,mode:r}=e,l=r==="RTL"?[n-o.right,o.left]:[o.left,n-o.right];return Je(t?s[t]:i,l)}function Fo(e,t=null){const{height:n,margin:o,verticalAlign:s,yDomain:i,yDomains:r}=e,l=s.align==="center"?(n-30)/2:n-o.bottom-30;let a=[];return t===null||r[t]===void 0?a=[0,i[1]]:a=[0,r[t][1]],Je(a,[l,o.top])}function Sx(e){const{height:t,margin:n,verticalAlign:o,integralsYDomains:s,activeSpectrum:i}=e,r=o.align==="center"?t/2:t;return Je((i==null?void 0:i.id)&&s&&s[i==null?void 0:i.id]?s[i==null?void 0:i.id]:[0,0],[r*.3,n.top+r*.1])}function Zt(e,t){const{startX:n,endX:o}=t,s=Xt(e),i=s.invert(n),r=s.invert(o),l=[0,0];return i>r?(l[0]=r,l[1]=i):(l[0]=i,l[1]=r),l}function It(e){return typeof e=="string"?e:e.join(",")}function kx(e){let t=e.data.filter(n=>It(n.info.nucleus)===e.activeTab&&n.info.dimension===1);if(e.activeSpectrum){const n=t.findIndex(o=>{var s;return o.id===((s=e.activeSpectrum)==null?void 0:s.id)});if(n!==-1){const o=t[n].info.isFid||!1;t=t.filter(s=>s.info.isFid===o)}}else t=t.filter(n=>n.info.isFid===!1);return t}function ic(e){let t=[],n=[],o={},s={};const i=kx(e);try{t=i.reduce((r,l)=>{const{display:a,data:u}=l,p=[u.x[0],u.x[u.x.length-1]];return s[l.id]=p,a.isVisible&&(r=r.concat(p)),r},[]),n=i.reduce((r,l)=>{const{display:a}=l,u=Cn(l),p=yt(u.y);return o[l.id]=p,a.isVisible&&(r=r.concat(p)),r},[])}catch(r){console.log(r)}return{xDomain:yt(t),yDomain:yt(n),yDomains:o,xDomains:s}}function wx(e){let t=[],n=[],o={},s={};const{activeTab:i,tabActiveSpectrum:r,data:l}=e,a=i.split(",");try{t=l.reduce((h,m)=>{var g;return Ys(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minX,m.data.maxX])),h},[]),n=l.reduce((h,m)=>{var g;return Ys(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minY,m.data.maxY])),h},[])}catch(h){console.log(h)}const u=a.map(h=>{var m;return(m=r[h])==null?void 0:m.id}),p=l.reduce((h,m)=>u.includes(m.id)&&m.info.dimension===1?h.concat(m):h.concat([]),[]);try{s=p.reduce((h,m)=>{const{x:g}=m.data,x=[g[0],g[g.length-1]];return h[m.id]=x,h},{}),o=p.reduce((h,m)=>{const g=yt(m.data.re);return h[m.id]=g,h},{})}catch(h){console.log(h)}return{xDomain:yt(t),yDomain:yt(n),yDomains:o,xDomains:s}}function ie(e,t){const{yDomain:n={isChanged:!0,isShared:!0}}=t||{};let o;e.activeTab&&(e.displayerMode===Y.DM_1D?o=ic(e):o=wx(e),e.xDomain=o.xDomain,e.xDomains=o.xDomains,e.originDomain=o,n.isChanged?(e.yDomain=o.yDomain,e.displayerMode===Y.DM_1D&&n.isShared?e.yDomains=Object.keys(o.yDomains).reduce((s,i)=>(s[i]=o.yDomain,s),{}):e.yDomains=o.yDomains):e.originDomain=k(b({},e.originDomain),{xDomain:o.xDomain,xDomains:o.xDomains}))}function Ex(e){const{integrals:t,ranges:n}=e;let o=Number.NEGATIVE_INFINITY;for(const s of t.values)o=Math.max(o,s.absolute);for(const s of n.values)o=Math.max(o,s.absolute);return[0,o]}function es(e,t){var n;for(const o of Array.isArray(t)?t:[t])((n=o==null?void 0:o.info)==null?void 0:n.dimension)===1&&(e.integralsYDomains[o.id]=Ex(o))}function Ax(e,t){e.originDomain=t}function Tx(e,t){e.xDomain=t}function Dx(e,t){e.yDomain=t}function Ix(e){const{xDomain:t,yDomain:n,xDomains:o,yDomains:s}=e.originDomain;e.xDomain=t,e.yDomain=n,e.xDomains=o,e.yDomains=s}function tt(e){var n;const t=e.data.filter(o=>e.xDomains[o.id]&&It(o.info.nucleus)===e.activeTab);e.mode=(n=t[0])!=null&&n.info.isFid?"LTR":"RTL"}function Px(e,t){const{activeSpectrum:n,data:o,xDomain:s,molecules:i,activeTab:r}=e;if(n!=null&&n.id){const{index:l}=n,a=o[l],[u,p]=s,h=We(a.data.x,u),m=We(a.data.x,p),g=b({factorStd:8,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},t);Ba(a,k(b({},g),{windowFromIndex:h,windowToIndex:m,molecules:i,nucleus:r})),Pt(e),es(e,a)}}function Nx(e){const t={factorStd:8,minMaxRatio:.05,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},{data:n,activeTab:o,molecules:s}=e;for(const i of n)i.info.dimension===1&&(Ba(i,{peakPicking:t,molecules:s,nucleus:o}),Pt(e))}function lo(e,t,n){return e.data[t].ranges.values.findIndex(o=>o.id===n)}function Rx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{id:s=null,assignmentData:i}=t.payload.data,r=e.data[o];if(s){const l=lo(e,o,s);Bt(i,[r.ranges.values[l]]),r.ranges.values.splice(l,1)}else Bt(i,r.ranges.values),r.ranges.values=[];Dt(r),Pt(e)}}function Mx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:r}=t.payload.data,l=lo(n,s,i.id),a=e.data[s].ranges.values[l];a!=null&&a.signals&&(a.signals[i.tableMetaInfo.signalIndex].kind=r,a.kind=to.includes(r)?Ze.signal:Ze.mixed,Dt(e.data[s]),Pt(e))}}function _x(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{editedRowData:i,assignmentData:r}=t.payload;e.toolOptions.data.tempRange=null;const l=jn(i);delete l.tableMetaInfo,delete l.rowKey,Bt(r,[l]);const a=lo(n,s,l.id);e.data[s].ranges.values[a]=l,Dt(e.data[s]),Pt(e)}}function rc(e,t){const{spectrum:n,range:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:r=!0}=t.payload;if(n&&o){const l=e.data.find(h=>h.id===n.id),a=l.ranges.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),p=jn(ze(o),"signal",{signalIndex:u});r===!0&&Bt(i,[{signals:[s]}]),p.signals.splice(u,1),l.ranges.values[a]=p,p.signals.length===0&&(Bt(i,[p]),l.ranges.values.splice(a,1)),Pt(e)}}function lc(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{assignmentData:s,rangeData:i=null,signalIndex:r=-1}=t.payload;if(i){const l=lo(e,o,i.id),a=ze(e.data[o].ranges.values[l]);let u={},p=i.id;i&&r===-1?u=jn(a,"range"):(u=jn(a,"signal",{signalIndex:r}),p=i.signals[r].id),Bt(s,[{id:p}]),e.data[o].ranges.values[l]=u}else{const l=e.data[o].ranges.values.map(a=>jn(a));e.data[o].ranges.values=l,Bt(s,l)}}}function Fx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{rangeData:s,diaIDs:i,signalIndex:r,nbAtoms:l}=t.payload,a=(h,m=0)=>h+m,u=lo(e,o,s.id),p=e.data[o].ranges.values[u];r===void 0?(p.diaIDs=i,p.nbAtoms=a(l,p.nbAtoms)):(p.signals[r].diaIDs=i,p.signals[r].nbAtoms=a(l,p.signals[r].nbAtoms))}}function Lx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum;vg(e.data[o],t.data)}}function Ox(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o!=null&&o.id){const{index:i}=o,r=n[i];yi(r.ranges,{options:t,nucleus:s}),Dt(r,!0)}}function $x(e,t){const{startX:n,endX:o}=t.payload,{activeSpectrum:s,activeTab:i,molecules:r}=e,l=Zt(e,{startX:n,endX:o});if(s!=null&&s.id){const{index:a}=s,[u,p]=l;yg(e.data[a],{from:u,to:p,nucleus:i,molecules:r}),Pt(e),es(e,e.data[a])}}function Hx(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;Cg(e.data[s],n)}}function zx(e,t){var i;const{rangeID:n,signalID:o,value:s}=t.payload;if((i=e.activeSpectrum)!=null&&i.id){const{index:r}=e.activeSpectrum,l=Sg(e.data[r],{rangeID:n,signalID:o,newSignalValue:s});Te(e.data[r],[{name:oo,options:l}]),wn(e.data[r]),Pt(e),ie(e)}}function Pt(e){ts(e)}function Vx(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;e.data[s].ranges.options.isSumConstant=!n}}function jx(e,t){e.toolOptions.data.tempRange=t.payload.tempRange}function Bx(e){e.toolOptions.data.showMultiplicityTrees=!e.toolOptions.data.showMultiplicityTrees}function Xx(e){e.toolOptions.data.showRangesIntegrals=!e.toolOptions.data.showRangesIntegrals}function Yx(e){e.toolOptions.data.showJGraph=!e.toolOptions.data.showJGraph}function Gx(e,t){return e.signals?e.signals.reduce((n,o)=>o[t].nbAtoms?n+o[t].nbAtoms:n,0):0}function Es(e,t){e[t].nbAtoms=Gx(e,t),e[t].nbAtoms===0&&delete e[t].nbAtoms}function Pr(e,t){return delete e[t].diaIDs,delete e[t].nbAtoms,e.signals.forEach(n=>{delete n[t].diaIDs,delete n[t].nbAtoms}),e}function Wx(e){return e.kind===Ze.signal}function Lo(e,t,n,o){return t!==void 0&&o!==void 0?(t===!0?(delete e[o].diaIDs,delete e[o].nbAtoms):typeof n=="number"&&n!==-1&&e.signals[n]&&(delete e.signals[n][o].diaIDs,delete e.signals[n][o].nbAtoms),Es(e,o)):o!==void 0?(Pr(e,o),Es(e,o)):["x","y"].forEach(s=>{Pr(e,s),Es(e,s)}),e}function fn(e,t,n){const o=t.reduce((s,i)=>(i.id&&s.push(i.id),i.signals&&(s=s.concat(i.signals.map(r=>r.id,[]))),s),[]);n?e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:n}}):(e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"x"}}),e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"y"}}))}const K={TOP_1D:"TOP_1D",LEFT_1D:"LEFT_1D",CENTER_2D:"CENTER_2D"};function Zx({width:e,height:t,margin:n}){return{CENTER_2D:{startX:n.left,startY:n.top,endX:e-n.right,endY:t-n.bottom},TOP_1D:{startX:n.left,startY:0,endX:e-n.right,endY:n.top},LEFT_1D:{startX:0,startY:n.top,endX:n.left,endY:t-n.bottom}}}function sn(e,t){for(const n of Object.keys(e))if(t.startX>=e[n].startX&&t.startX<=e[n].endX&&t.startY>=e[n].startY&&t.startY<=e[n].endY)return n;return null}function Ae(e){const{width:t,margin:n,xDomain:o}=e;return Je(o,[t-n.right,n.left])}function ye(e,t=!1){const{height:n,margin:o,yDomain:s}=e;return Je(s,t?[n-o.bottom,o.top]:[o.top,n-o.bottom])}function mn(e,t,n=10){return Je(e,[t-n,n])}function Ux(e,t){const{startX:n,startY:o,endX:s,endY:i}=t,r=Ae(e),l=ye(e),a=n*1e6>s*1e6?s:n,u=n*1e6>s*1e6?n:s,p=o*1e6>i*1e6?i:o,h=o*1e6>i*1e6?o:i,m=l.invert(p),g=r.invert(a),x=l.invert(h),y=r.invert(u);return{fromX:g,fromY:m,toX:y,toY:x}}function Kx(e,t){e.toolOptions.data.zonesNoiseFactor=t.payload}function qx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,s=Ux(e,t),i=e.data[o],r=jg(oe(i),{selectedZone:s,thresholdFactor:e.toolOptions.data.zonesNoiseFactor,convolutionByFFT:!1});i.zones.values=i.zones.values.concat(r),ht(e)}}function Jx(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,[s,i]=e.xDomain,[r,l]=e.yDomain;t.selectedZone={fromX:s,toX:i,fromY:r,toY:l};const a=e.data[o],u=Za(oe(a),t);a.zones.values=a.zones.values.concat(u),ht(e)}}function Qx(e){for(const t of e.data)if(t.info.dimension===2){const{minX:n,maxX:o,minY:s,maxY:i}=t.data,r={selectedZone:{fromX:n,toX:o,fromY:s,toY:i},thresholdFactor:1},l=Za(oe(t),r);t.zones.values=t.zones.values.concat(l),ht(e)}}function eb(e,t){var s;const{zoneID:n,signal:o}=t.payload;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum,{xShift:r,yShift:l}=Hg(e.data[i],n,o);let a=[];r!==0&&a.push({name:fi,options:r}),l!==0&&a.push({name:mi,options:l}),Te(e.data[i],a),ro(e.data[i]),ie(e),ht(e)}}function ao(e,t,n){return e.data[t].zones.values.findIndex(o=>o.id===n)}function tb(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:r}=t.payload,l=ao(n,s,i.id),a=e.data[s].zones.values[l];a.signals[i.tableMetaInfo.signalIndex].kind=r,a.kind=to.includes(r)?Ze.signal:Ze.mixed,ht(e)}}function nb(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{id:i,assignmentData:r}=t.payload;if(i){const l=e.data[s].zones.values.find(u=>u.id===i);fn(r,[l||{}]);const a=ao(n,s,i);e.data[s].zones.values.splice(a,1)}else fn(r,e.data[s].zones.values),e.data[s].zones.values=[];ht(e)}}function ac(e,t){const{spectrum:n,zone:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:r=!0}=t.payload;if(n&&o){const l=e.data.find(h=>h.id===n.id),a=l.zones.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),p=Lo(ze(o),!1,u,void 0);r===!0&&fn(i,[{signals:[s]}],void 0),p.signals.splice(u,1),l.zones.values[a]=p,p.signals.length===0&&(fn(i,[p]),l.zones.values.splice(a,1)),ht(e)}}function ob(e,t){const{spectrum:n,zone:o,signal:s,pathLength:i}=t.payload;if(n&&o){const r=e.data.find(p=>p.id===n.id),l=r.zones.values.findIndex(p=>p.id===o.id),a=o.signals.findIndex(p=>p.id===s.id),u=Lo(ze(o),!1,a,void 0);u.signals[a].j=k(b({},u.signals[a].j),{pathLength:i}),r.zones.values[l]=u,ht(e)}}function cc(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{zoneData:i=null,assignmentData:r,isOnZoneLevel:l=void 0,signalIndex:a=-1,axis:u=void 0}=t.payload;if(i){const p=ao(n,s,i.id),h=ze(e.data[s].zones.values[p]),m=Lo(h,l,a,u);fn(r,[{id:i.signals[a].id}],u),e.data[s].zones.values[p]=m}else{const p=e.data[s].zones.values.map(h=>Lo(h));e.data[s].zones.values=p,fn(r,p)}}}function sb(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{zoneData:i,diaIDs:r,axis:l,signalIndex:a,nbAtoms:u}=t.payload,p=(g,x=0)=>g+x,h=ao(n,s,i.id),m=e.data[s].zones.values[h];a===void 0?(m[l].diaIDs=r,m[l].nbAtoms=p(u,m[l].nbAtoms)):(m.signals[a][l].diaIDs=r,m.signals[a][l].nbAtoms=p(u,m.signals[a][l].nbAtoms))}}function ib(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)!=null&&o.id){const{index:s}=n.activeSpectrum,{editedRowData:i}=t.payload;delete i.tableMetaInfo;const r=ao(n,s,i.id);e.data[s].zones.values[r]=i,i.signals&&i.signals.forEach(l=>{var a;Tp(e.correlations.values,l.id,(a=l.j)==null?void 0:a.pathLength)}),ht(e)}}function ht(e){ts(e)}function ts(e){const{data:t,correlations:n}=e;e.correlations=Qn(t,k(b({},n.options),{values:ze(n.values)}))}function rb(e,t){const n=oe(e),{data:o,correlations:s}=n,{mf:i}=t;(s.options.mf===""||s.options.mf!==i)&&(e.correlations=Qn(o,k(b({},s.options),{mf:i,values:ze(s.values)})))}function lb(e,t){const n=oe(e),{data:o,correlations:s}=n,{tolerance:i}=t;e.correlations=Qn(o,k(b({},s.options),{tolerance:i,values:ze(s.values)}))}function ab(e,t){const n=oe(e),{correlations:o}=n,{id:s,correlation:i,options:r}=t;e.correlations=Ol(o,s,i),r&&(e.correlations=k(b({},e.correlations),{options:b(b({},e.correlations.options),r)})),ts(e)}function cb(e,t){const{correlations:n,options:o}=t,s=oe(e);let i=ze(s.correlations);n.forEach(r=>{i=Ol(i,r.id,r)}),e.correlations=i,o&&(e.correlations=k(b({},e.correlations),{options:b(b({},e.correlations.options),o)})),ts(e)}function ub(e,t){const{correlation:n,assignmentData:o}=t;n.link.forEach(s=>{const i=Pe(e.data,s.experimentID,!1);if(i){if(i.info.dimension===1){const r=Si(i,s.signal.id),l=sc(i,s.signal.id);rc(e,{payload:{spectrum:i,range:r,signal:l,assignmentData:o}})}else if(i.info.dimension===2){const r=_o(i,s.signal.id),l=Gn(i,s.signal.id);ac(e,{payload:{spectrum:i,zone:r,signal:l,assignmentData:o}})}}})}const Bn={HORIZONTAL:"HORIZONTAL",VERTICAL:"VERTICAL",STEP_HORIZONTAL:"STEP_HORIZONTAL",FULL:"FULL"};function fo(e,t,n={}){const{factor:o=1,invert:s=!1}=n,r=(Math.abs(e.deltaY)<100?e.deltaY*100:e.deltaY)*(s?-.001:.001)*o,l=r<0?-1/(r-1):1+r,[a,u]=t;return[a*l,u*l]}function zt(e,t={}){const{height:n,margin:o,activeSpectrum:s}=e,{scale:i=1,spectrumID:r=null}=t;if(s===null&&r===null){const{shareYDomain:l,yDomain:a,yDomains:u}=e.originDomain;e.yDomains=Object.keys(e.yDomains).reduce((p,h)=>{const m=Je(l?a:u[h],[n-o.bottom,o.top]),[g,x]=l?a:u[h],S=Math.max(Math.abs(x),Math.abs(g))===x?0:g,C=gr.translate(0,(Math.sign(S)>=0,m(S))).scale(i).translate(0,-m(0)).rescaleY(m).domain();return p[h]=C,p},{})}else{const l=r||(s==null?void 0:s.id);if(l){const a=Je(e.originDomain.yDomains[l],[n-o.bottom,o.top]),p=gr.translate(0,a(0)).scale(i).translate(0,-a(0)).rescaleY(a).domain();e.yDomains=k(b({},e.yDomains),{[l]:p})}}}function db(e,t){const{ranges:n,info:o}=t.payload,s=La(n,o,e.usedColors);e.data.push(s),ie(e,{yDomain:{isShared:!1}}),zt(e,{scale:.8,spectrumID:s.id})}function pb(e,t){e.width=t}function hb(e,t,n){e.width=t,e.height=n}function wi(e,t){return t.filter(n=>It(n.info.nucleus)===e)}function ns(e,t){!e[t]&&!Array.isArray(e[t])&&(e[t]=[]);const n=fb(e[t]),o=mb(e[t]),s=gb(e[t]),i=()=>e[t]=[];return{historyStack:e[t],push:n,pop:o,getLast:s,clear:i}}function fb(e){return t=>{e.push(t)}}function mb(e){return()=>e.pop()?e[e.length-1]:null}function gb(e){return()=>e.length===0?null:e[e.length-1]}function Nr(e){const t=e.split(",");return t.reduce((n,o)=>{const s=t.length===2?100:0;return n+=Number(o.replace(/\D/g,""))+s,n},0)}function os(e){return(t,n=!1)=>{const o=t.reduce((s,i)=>{const r=i.info[e];return s[r]=(s[r]||[]).concat(i),s},{});return n?Object.keys(o).sort((s,i)=>Nr(s)-Nr(i)).reduce((s,i)=>(s[i]=o[i],s),{}):o}}function Ct(e,t){var n;if(e.data&&e.data.length>0){let o=[];switch(["auto-check","stack"].includes(t.align||"")&&(o=e.data.filter(s=>s.info.nucleus===(t==null?void 0:t.activeTab)?t.activeTab:e.activeTab&&s.info.dimension===1)),t.align){case"auto-check":case"bottom":case"center":{if(t.align==="center"||t.align==="auto-check"&&((n=o[0])==null?void 0:n.info.isFid)&&!o.some(s=>s.info.isFid===!1)){const s=e.height/2;e.verticalAlign.align="center",e.verticalAlign.verticalShift=s}else e.verticalAlign.align="bottom",e.verticalAlign.verticalShift=Xa;break}case"stack":{e.verticalAlign.align="stack";const s=o.filter(i=>i.display.isVisible===!0);e.verticalAlign.verticalShift=Math.floor((e.height-e.margin.bottom)/(s.length+2));break}default:return}}}function xb(e,t){const{activeTab:n,data:o,activeSpectrum:s,zoom:i,xDomain:r,xDomains:l,yDomain:a,yDomains:u,originDomain:p,margin:h,displayerMode:m,tabActiveSpectrum:g}=e;if(n){const y=os("nucleus")(o),S=m===Y.DM_2D?y[n].reduce((v,C)=>(v[C.id]=C.processingController.getLevel(),v),{}):null;e.keysPreferences[t]={activeTab:n,activeSpectrum:s,displayerMode:m,tabActiveSpectrum:g,zoom:i,xDomain:r,xDomains:l,yDomain:a,yDomains:u,originDomain:p,level:S,margin:h,data:y[n].reduce((v,C)=>(v[C.id]={display:{color:C.display.color,isVisible:C.display.isVisible,isPeaksMarkersVisible:C.display.isPeaksMarkersVisible}},v),{})}}}function bb(e,t){const n=e.keysPreferences[t];if(n)if(e.activeTab=n.activeTab,e.data.forEach((o,s)=>{It(o.info.nucleus)===n.activeTab&&(e.data[s].display=Object.assign(ze(o.display),n.data[o.id].display))}),e.displayerMode=n.displayerMode,e.tabActiveSpectrum=n.tabActiveSpectrum,e.activeSpectrum=n.activeSpectrum,e.margin=n.margin,ie(e),e.xDomain=n.xDomain,e.xDomains=n.xDomains,e.yDomain=n.yDomain,e.originDomain=n.originDomain,e.yDomains=n.yDomains,e.displayerMode===Y.DM_2D)for(const o of Object.keys(n.level)){const{levelPositive:s,levelNegative:i}=n.level[o],r=e.data.findIndex(a=>a.id===o),l=e.data[r].processingController;l.setLevel(s,i),e.contours[o]=l.drawContours()}else e.zoom=n.zoom}function yb(e){const{activeSpectrum:t,data:n}=e;if(t){const o=n[t==null?void 0:t.index].data,s=Dp(o.re),i=o.re.findIndex(r=>r===s);return{xValue:o.x[i],yValue:s,index:i}}}function vb(e,t){var o;const n=(o=e.activeSpectrum)==null?void 0:o.id;if(t===jt){const s=ss(e,jt,{rollback:!0,searchBy:"name",returnCurrentDatum:!0});e.tempData=$l(e).data,s&&(e.tempData[s==null?void 0:s.index]=s==null?void 0:s.datum);const{xValue:i,index:r}=yb(e)||{xValue:0,index:0};e.toolOptions.data.pivot={value:i,index:r}}else if(e.toolOptions.selectedTool===F.phaseCorrection.id){e.toolOptions.data.activeFilterID=null;const s=e.data.findIndex(i=>i.id===n);e.data[s].data=e.tempData[s].data}}function Oo(e,t=!0){e.toolOptions.data.tempRange=null,Ei(e,null),t&&(e.toolOptions.selectedTool=F.zoom.id),e.toolOptions.data.baseLineZones=[],e.toolOptions.data.activeFilterID&&ss(e),e.tempData&&(e.tempData=null,ie(e))}function Ue(e,t=!1){(e.toolOptions.selectedTool&&F[e.toolOptions.selectedTool].isFilter||!t)&&Oo(e)}function Cb(e,t){const{selectedTool:n}=t.payload;(e==null?void 0:e.data.length)>0&&(n?(n===F.editRange.id?e.toolOptions.data.tempRange=t.payload.tempRange:e.toolOptions.data.tempRange=null,n!==e.toolOptions.selectedTool&&Oo(e,!1),e.toolOptions.selectedTool=n,F[n].hasOptionPanel&&Ei(e,n),F[n].isFilter&&vb(e,n)):Oo(e,!1),uc(e))}function Ei(e,t){e.toolOptions.selectedOptionPanel=t}function Sb(e){const t=["stack","center"].includes(e.verticalAlign.align)?"bottom":"center";Ct(e,{align:t})}function kb(e){const t=e.verticalAlign.align==="stack"?"bottom":"stack";Ct(e,{align:t})}function wb(e,{from:t,to:n}){const o=Xt(e);let s=o.invert(t);const i=o.invert(n);let r=[];s>i?r=[i,s]:r=[s,i];const l=e.toolOptions.data.baseLineZones.slice();l.push({id:q(),from:r[0],to:r[1]}),e.toolOptions.data.baseLineZones=l}function Eb(e,t){const n=oe(e);e.toolOptions.data.baseLineZones=n.toolOptions.data.baseLineZones.baseLineZones.filter(o=>o.id!==t)}function Ab(e){if(e.activeSpectrum!=null){const{index:t}=e.activeSpectrum;e.data[t].display.isRealSpectrumVisible=!e.data[t].display.isRealSpectrumVisible,ie(e)}}function Tb(e,t){const n=e.displayerMode===Y.DM_2D,o=Xt(e),s=n?ye(e):Fo(e),i=o.invert(t.startX),r=o.invert(t.endX),l=s.invert(t.startY),a=s.invert(t.endY),u=i>r?[r,i]:[i,r],p=l>a?[a,l]:[l,a],h=ns(e.zoom.history,e.activeTab);if(e.displayerMode===Y.DM_2D){switch(t.trackID){case K.CENTER_2D:e.xDomain=u,e.yDomain=p;break;case K.TOP_1D:e.xDomain=u;break;case K.LEFT_1D:e.yDomain=p;break}h&&h.push({xDomain:e.xDomain,yDomain:e.yDomain})}else e.xDomain=u,h&&h.push({xDomain:u,yDomain:p})}function Db(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const s=Xt(e).invert(t),i=e.data[e.activeSpectrum.index],r=We(i.data.x,s);e.toolOptions.data.pivot={value:s,index:r}}}function Ib(e,t){const n=e.tabActiveSpectrum[e.activeTab.split(",")[t]];return n!=null&&n.id?n.id:null}function Pb(e,t){const{event:n,trackID:o,selectedTool:s}=t,{activeSpectrum:i,toolOptions:{data:{showRangesIntegrals:r}},displayerMode:l}=e;if(l===Y.DM_2D){const a=o===K.TOP_1D?0:o===K.LEFT_1D?1:null;if(a!==null){const u=Ib(e,a);if(u){const p=e.yDomains[u];e.yDomains[u]=fo(n,p)}}}else if(i!=null&&i.id)if((r||s===F.integral.id)&&n.shiftKey){const a=e.integralsYDomains[i==null?void 0:i.id];e.integralsYDomains[i==null?void 0:i.id]=fo(n,a)}else{const a=e.yDomains[i==null?void 0:i.id];e.yDomains[i==null?void 0:i.id]=fo(n,a)}else{const a=wi(e.activeTab,e.data);for(const u of a){const p=e.yDomains[u.id];e.yDomains[u.id]=fo(n,p)}}}function Nb(e,t){if((e==null?void 0:e.data.length)>0){const{zoomType:n,trackID:o}=t,s=ns(e.zoom.history,e.activeTab);if(e.displayerMode===Y.DM_1D)switch(n){case Bn.HORIZONTAL:{e.xDomain=e.originDomain.xDomain,s.clear();break}case Bn.VERTICAL:zt(e,{scale:.8});break;case Bn.STEP_HORIZONTAL:{const i=s.pop();e.xDomain=i?i.xDomain:e.originDomain.xDomain,zt(e,{scale:.8});break}default:{e.xDomain=e.originDomain.xDomain,zt(e,{scale:.8});break}}else{const{xDomain:i,yDomain:r,yDomains:l}=e.originDomain;if([K.TOP_1D,K.LEFT_1D,K.CENTER_2D].includes(o)){const a=s.pop();e.xDomain=a?a.xDomain:i,e.yDomain=a?a.yDomain:r}else s.clear(),e.xDomain=i,e.yDomain=r,e.yDomains=l}}}function Rr(e,t){const n=e.activeTab.split(","),o=e.tabActiveSpectrum[n[t]];return(o==null?void 0:o.id)&&!e.data[o.index].info.isFid}function uc(e){if(e.displayerMode===Y.DM_2D&&e.toolOptions.selectedTool!==F.slicingTool.id){const t=Rr(e,0)?_t["2D"].top:_t["1D"].top,n=Rr(e,1)?_t["2D"].left:_t["1D"].left;e.margin=k(b({},_t["2D"]),{top:t,left:n})}else e.toolOptions.selectedTool===F.slicingTool.id?e.margin=_t["2D"]:e.displayerMode===Y.DM_1D&&(e.margin=_t["1D"])}function Rb(e,t){if(e.displayerMode===Y.DM_2D){let n={};for(const o of t[e.activeTab])n[o.id]=o.processingController.drawContours();e.contours=n}}function Mb(e,t){e.displayerMode=t&&t.some(n=>n.info.dimension===2)?Y.DM_2D:Y.DM_1D}function _b(e,t){let n=[];const o={},s=Object.keys(t).sort((i,r)=>i.split(",").length>r.split(",").length?-1:1);for(let i of s){const r=t[i],l=i.split(",").length;if(l===2&&n.push(i),r.length===1){const a=e.data.findIndex(u=>u.id===r[0].id);o[i]={id:r[0].id,index:a}}else{const a=t[i],u=a.length;if(u>=2){const p=a.filter(h=>!h.info.isFid);if(p.length>0&&(l===2||l===1&&u!==p.length)){const h=e.data.findIndex(m=>m.id===p[0].id);o[i]={id:p[0].id,index:h}}else o[i]=null}else o[i]=null}}return e.tabActiveSpectrum=o,n}function dc(e,t,n,o=!1){const s=Object.keys(t).sort((i,r)=>i.split(",").length>r.split(",").length?-1:1);if(JSON.stringify(s)!==JSON.stringify(Object.keys(e.tabActiveSpectrum))||o){const i=_b(e,t);i.length>0&&n==null?(e.activeSpectrum=e.tabActiveSpectrum[i[0]],e.activeTab=i[0]):(e.activeSpectrum=n&&e.tabActiveSpectrum[n],e.activeTab=n)}else e.activeTab=n,e.activeSpectrum=e.tabActiveSpectrum[n];Mb(e,t[e.activeTab]),uc(e)}function nt(e,t){const{tab:n=null,refreshActiveTab:o=!1,domainOptions:s={}}=t||{},r=os("nucleus")(e.data),l=Object.keys(r),a=!n||!l.includes(n||"")?l[0]:n;dc(e,r,a,o),Oo(e),Rb(e,r),ie(e,s),es(e,r[a]);const p=ns(e.zoom.history,e.activeTab).getLast();p&&(e.xDomain=p.xDomain,e.yDomain=p.yDomain),tt(e)}function Fb(e,t){t&&nt(e,{tab:t})}function Lb(e,{deltaY:t,shiftKey:n}){var o;try{if((o=e.activeSpectrum)!=null&&o.id){const{index:s,id:i}=e.activeSpectrum,r=e.data[s].processingController;n?r.shiftWheel(t):r.wheel(t);const l=Object.freeze(r.drawContours());e.contours[i]=l}}catch(s){console.log(s)}}function Ob(e){e.displayerMode===Y.DM_1D&&(e.originDomain.shareYDomain=!1,zt(e,{scale:.8}))}function $b(e){e.originDomain.shareYDomain=!0,e.yDomains=e.originDomain.yDomains,e.yDomain=e.originDomain.yDomain,zt(e,{scale:.8})}function Hb(e,t){var n,o;if((n=e.activeSpectrum)!=null&&n.id){const s=(o=e.activeSpectrum)==null?void 0:o.index;Te(e.data[s],[{name:oo,options:t}]),wn(e.data[s]),Ue(e),ie(e)}}function zb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const o=e.activeSpectrum.index,s=[{name:pi,options:t.zeroFillingSize},{name:Sa,options:t.lineBroadeningValue}];Te(e.data[o],s),Ue(e),ie(e),tt(e)}}function Vb(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum;Te(e.data[n],[{name:ya,options:{}}]),Ue(e),Ct(e,{align:"bottom"}),ie(e,{yDomain:{isChanged:!0}}),tt(e)}}function jb(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum,{ph0:s,ph1:i}=t;Te(e.data[o],[{name:jt,options:{ph0:s,ph1:i}}]),Ue(e),e.tempData=null,ie(e)}}function Bb(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum;Te(e.data[n],[{name:aa,options:{}}]),Ue(e),e.tempData=null,ie(e)}}function Xb(e){var t;if((t=e.activeSpectrum)!=null&&t.id){const{index:n}=e.activeSpectrum,{ph0:o,ph1:s}=ua(e.data[n]);Te(e.data[n],[{name:jt,options:{ph0:o,ph1:s}}]),Ue(e),e.tempData=null,ie(e)}}function Yb(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,{data:{x:o,re:s,im:i},info:r}=e.data[n],{ph0:l,ph1:a}=t;let u={data:{x:o,re:s,im:i},info:r};Ta(u,{ph0:l,ph1:a});const{im:p,re:h}=u.data;e.tempData[n].data.im=p,e.tempData[n].data.re=h}}function Gb(e,t,n){var o,s,i;if((o=e.activeSpectrum)!=null&&o.id){const{index:r}=e.activeSpectrum;Na(e.data[r],t,n),((s=e.data[r].info)==null?void 0:s.dimension)===1?wn(e.data[r]):((i=e.data[r].info)==null?void 0:i.dimension)===2&&ro(e.data[r]),Ue(e),ie(e),tt(e);const a=ns(e.zoom.history,e.activeTab).getLast();a&&(e.xDomain=a.xDomain,e.yDomain=a.yDomain)}}function Wb(e,t){var o,s,i;const n=t.payload.id;if((o=e.activeSpectrum)!=null&&o.id){const{index:r}=e.activeSpectrum;gi(e.data[r],n),((s=e.data[r].info)==null?void 0:s.dimension)===1?wn(e.data[r]):((i=e.data[r].info)==null?void 0:i.dimension)===2&&ro(e.data[r]),Ue(e),ie(e),tt(e)}}function Zb(e,t){var o,s;const n=t.payload.filterType;if(e.activeTab){for(const i of e.data)It((o=i==null?void 0:i.info)==null?void 0:o.nucleus)===e.activeTab&&(((s=i.filters)==null?void 0:s.filter(l=>l.name===n))||[]).forEach(l=>{var a,u;gi(i,l.id),((a=i.info)==null?void 0:a.dimension)===1?wn(i):((u=i.info)==null?void 0:u.dimension)===2&&ro(i)});Ue(e),ie(e),tt(e)}}function Ub(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){const{index:o}=e.activeSpectrum;Te(e.data[o],[{name:pa,options:b({zones:e.toolOptions.data.baseLineZones},t.options)}]),e.toolOptions.data.baseLineZones=[];const s=e.xDomain.slice();Ue(e),ie(e),e.xDomain=s}}function ss(e,t=null,n={},o=null){var p,h,m,g;const{updateDomain:s=!0,rollback:i=!1,searchBy:r="id",returnCurrentDatum:l=!1}=n;let a=null;const u=o||e.activeSpectrum;if(u!=null&&u.id){const x=u.index,y=e.data[x];if(t&&e.toolOptions.data.activeFilterID!==t){const S=y.filters.findIndex(C=>C[r]===t);let v=[];if(S!==-1&&(v=y.filters.slice(0,i?S:S+1),v.length>1?e.toolOptions.data.activeFilterID=(p=y.filters[i?S-1:S])==null?void 0:p.id:e.toolOptions.data.activeFilterID=null,hn(y,v),l)){const{name:C,value:E}=y.filters[S],T=$l(e).data[x];((h=T.info)==null?void 0:h.dimension)===1&&Te(T,[{name:C,options:E}]),a={datum:T,index:x}}}else e.toolOptions.data.activeFilterID=null,hn(y);((m=y.info)==null?void 0:m.dimension)===1?wn(y):((g=y.info)==null?void 0:g.dimension)===2&&ro(y),s&&(ie(e),tt(e))}if(l)return a}function Kb(e,t){ss(e,t.id)}function qb(e,t){var o;const n=wi(e.activeTab,e.data);if(n&&n.length>0&&Array.isArray(t.payload)){const s=((o=n[0].filters.find(i=>i.name===no))==null?void 0:o.value)||[];for(const i of n){const r=t.payload.map(l=>l.name===Yn?k(b({},l),{options:k(b({},l.options),{exclusions:s})}):l);Te(i,r)}}ie(e)}function Jb(e,t){var r,l;const{from:n,to:o}=t.payload,s=Zt(e,{startX:n,endX:o});let i;if((r=e.activeSpectrum)!=null&&r.id){const a=(l=e.activeSpectrum)==null?void 0:l.index;i=[e.data[a]]}else i=wi(e.activeTab,e.data);for(const a of i)Te(a,[{name:no,options:[{id:q(),from:s[0],to:s[1]}]}]);ie(e)}function Qb(e,t){const{id:n,spectrumID:o}=t.payload,s=e.data.findIndex(r=>r.id===o),i=e.data[s].filters.find(r=>r.name===no);i&&(i.value.length===1?gi(e.data[s],i.id):(i.value=i.value.filter(r=>r.id!==n),hn(e.data[s])))}function ey(e,t){e.overDisplayer=t.payload}function ty(e){const{past:t,present:n,future:o}=e.history,s=t[t.length-1],i=t.slice(0,t.length-1),r=[n,...o],l=r.length!==0,a=t.length!==0,u=ic(e.data),p={past:i,present:s,future:r,hasRedo:l,hasUndo:a};e.xDomain=u.xDomain,e.yDomain=u.yDomain,e.originDomain=u,e.history=p}function ny(e){const{history:t}=e,n=t.future.shift();t.past.push(t.present),t.present=n,t.hasUndo=!0,t.hasRedo=t.future.length>0,ie(e.data)}function oy(e,t){e.history={past:[],present:t,future:[],hasRedo:!1,hasUndo:!1}}function sy(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o!=null&&o.id){const{index:i}=o,r=n[i];yi(r.integrals,{options:t,nucleus:s}),Sn(r,!0)}}function iy(e,t){const{startX:n,endX:o}=t,{data:s,molecules:i,activeTab:r,activeSpectrum:l}=e,[a,u]=Zt(e,{startX:n,endX:o});if(l!=null&&l.id){const p=s[l.index],{x:h,re:m}=p.data,g=Wt(p),x={id:q(),originFrom:a-g,originTo:u-g,from:a,to:u,absolute:bn({x:h,y:m},{from:a,to:u,reverse:!0}),kind:"signal"};p.integrals.values.push(x),p.integrals.options=bi(p.integrals.options,{molecules:i,nucleus:r}),Sn(p),es(e,p)}}function ry(e,t){if(e.activeSpectrum){const n=oe(e),{index:o}=e.activeSpectrum,{integralID:s}=t,i=e.data[o];if(s==null)i.integrals.values=[];else{const r=n.data[o].integrals.values.findIndex(l=>l.id===s);i.integrals.values.splice(r,1),Sn(i)}}}function Mr(e,t){var s;const n=oe(e),o=t.payload.data;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum,r=n.data[i],l=e.data[i],{x:a,re:u}=r.data,p=r.integrals.values.findIndex(h=>h.id===o.id);p!==-1&&(l.integrals.values[p]=k(b({originFrom:o.from,originTo:o.to},o),{absolute:bn({x:a,y:u},{from:o.from,to:o.to,reverse:!0})}),Sn(l))}}function ly(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;dg(e.data[s],n)}}function ay(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)!=null&&o.id){const{index:s}=e.activeSpectrum;e.data[s].integrals.options.isSumConstant=!n}}function cy(e=[]){const t=[];for(const n of e){const s=Et.Molecule.fromMolfile(n.molfile).getFragments();for(let i of s)t.push(Mo({molfile:i.toMolfileV3()}))}return t}function pc(e,t){let o=Et.Molecule.fromMolfile(t).getFragments();for(let s of o)e.push(Mo({molfile:s.toMolfileV3()}))}function uy(e,t,n){let s=Et.Molecule.fromMolfile(t).getFragments();if(s.length>1){e=e.filter(i=>i.key!==n);for(let i of s)e.push(Mo({molfile:i.toMolfileV3()}))}else if(s.length===1){const i=s[0],r=Mo({molfile:i.toMolfileV3(),key:n});let l=e.findIndex(a=>a.key===n);e.splice(l,1,r)}}const Wn="INITIATE",dy="SAVE_DATA_AS_JSON",gn="LOAD_JSON_FILE",$o="LOAD_JCAMP_FILE",Zn="LOAD_NMREDATA_FILE",Gs="LOAD_MOL_FILE",Ho="LOAD_ZIP_FILE",Ws="LOAD_JDF_FILE",hc="ADD_PEAK",fc="ADD_PEAKS",is="DELETE_PEAK_NOTATION",Ai="SHIFT_SPECTRUM",rs="SET_X_DOMAIN",Ti="SET_Y_DOMAIN",mc="SET_ORIGINAL_DOMAIN",gc="SET_WIDTH",Di="SET_DIMENSIONS",co="SET_SELECTED_TOOL",xc="SET_SELECTED_FILTER",bc="CHANGE_SPECTRUM_SETTING",xn="FULL_ZOOM_OUT",Un="CHANGE_VISIBILITY",Ii="CHANGE_PEAKS_MARKERS_VISIBILITY",zo="CHANGE_ACTIVE_SPECTRUM",yc="CHANGE_SPECTRUM_COLOR",vc="ADD_INTEGRAL",ls="DELETE_INTEGRAL",Pi="TOGGLE_REAL_IMAGINARY_VISIBILITY",as="SET_ZOOM",Ni="ADD_MOLECULE",Ri="SET_MOLECULE",Cc="DELETE_MOLECULE",Zs="SET_CORRELATION",Sc="SET_CORRELATIONS",kc="DELETE_CORRELATION",wc="SET_CORRELATIONS_MF",Ec="SET_CORRELATIONS_TOLERANCE",Mi="DELETE_SPECTRA",_i="CHANGE_SPECTRUM_DISPLAY_VIEW_MODE",Ac="RESIZE_INTEGRAL",cs="BRUSH_END",Tc="RESET_X_DOMAIN",Dc="ENABLE_FILTER",Ic="DELETE_FILTER",Pc="DELETE_SPECTRA_FILTER",Nc="APPLY_ZERO_FILLING_FILTER",Rc="APPLY_FFT_FILTER",Fi="CALCULATE_MANUAL_PHASE_CORRECTION_FILTER",Mc="APPLY_MANUAL_PHASE_CORRECTION_FILTER",_c="APPLY_AUTO_PHASE_CORRECTION_FILTER",Fc="APPLY_ABSOLUTE_FILTER",Li="SET_VERTICAL_INDICATOR_X_POSITION",Lc="AUTO_PEAK_PICKING",Oc="AUTO_RANGES_DETECTION",$c="AUTO_ZONES_DETECTION",us="DELETE_RANGE",Hc="DELETE_1D_SIGNAL",zc="SET_SELECTED_OPTIONS_PANEL",St="SET_LOADING_FLAG",ut="RESET_SELECTED_TOOL",Oi="SET_SPECTRUMS_VERTICAL_AlIGN",py="SAVE_AS_SVG",Vc="CHANGE_INTEGRAL_DATA",$i="SET_ACTIVE_TAB",jc="CHANGE_INTEGRAL_SUM",Bc="ADD_BASE_LINE_ZONE",Xc="DELETE_BASE_LINE_ZONE",Yc="APPLY_BASE_LINE_CORRECTION_FILTER",Vo="SET_KEY_PREFERENCES",Hi="APPLY_KEY_PREFERENCES",Gc="RESIZE_RANGE",Wc="CHANGE_RANGE_SUM",Zc="ADD_RANGE",Uc="SET_2D_LEVEL",Kc="ADD_2D_ZONE",ds="DELETE_2D_ZONE",qc="DELETE_2D_SIGNAL",Jc="SET_2D_SIGNAL_PATH_LENGTH",Qc="ADD_MISSING_PROJECTION",eu="SET_FILTER_SNAPSHOT",tu="CHANGE_RANGE_RELATIVE",nu="CHANGE_RANGE_SIGNAL_VALUE",ou="CHANGE_RANGE_SIGNAL_KIND",su="SAVE_EDITED_RANGE",iu="UNLINK_RANGE",ru="SET_DIAID_RANGE",lu="CHANGE_INTEGRAL_RELATIVE",au="ANALYZE_SPECTRA",zi="DELETE_ANALYZE_SPECTRA_RANGE",cu="RESIZE_ANALYZE_SPECTRA_RANGE",uu="SET_ANALYZE_SPECTRA_COLUMNS",du="FILTER_SPECTRA_COLUMN",pu="ALIGN_SPECTRA",Us="CHANGE_ZONE_SIGNAL_VALUE",hu="CHANGE_ZONE_SIGNAL_KIND",fu="SAVE_EDITED_ZONE",mu="UNLINK_ZONE",gu="SET_DIAID_ZONE",ps="PREDICT_SPECTRA",xu="SET_SPECTRA_SAME_TOP",bu="RESET_SPECTRA_SCALE",jo="SET_MOUSE_OVER_DISPLAYER",yu="APPLY_MULTIPLE_SPECTRA_FILTER",vu="ADD_EXCLUSION_ZONE",Cu="DELETE_EXCLUSION_ZONE",Su="CHANGE_RANGES_SUM_FLAG",ku="CHANGE_INTEGRALS_SUM_FLAG",wu="CHANGE_ZONES_NOISE_FACTOR",Eu="CHANGE_TEMP_RANGE",Au="SHOW_MULTIPLICTY_TREES",Tu="SHOW_RANGES_INTEGRALS",Du="AUTO_RANGES_SPECTRA_PICKING",Iu="AUTO_ZONES_SPECTRA_PICKING",Pu="GENERATE_SPECTRUM_FROM_PUBLICATION_STRING",Nu="RESURRECTING_SPECTRUM_FROM_RANGES",Ru="SHOW_J_GRAPH",Vi="SET_AUTOMATIC_ASSIGNMENTS";function hy(e,t){e.isLoading=t}function Mu(e,t){e.usedColors["1d"]=e.usedColors["1d"].concat(t["1d"]),e.usedColors["2d"]=e.usedColors["2d"].concat(t["2d"])}function ji(e,t){const{spectra:n,molecules:o,correlations:s,usedColors:i}=t||{spectra:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:[]};Mu(e,i),e.data=n,e.molecules=cy(o),!s||Object.keys(s).length===0?e.correlations=Qn([],{tolerance:oc}):e.correlations=fy(s)}function fy(e){return k(b({},e),{values:e.values.map(t=>{if(typeof t.hybridization=="string"){let n=[];if(t.hybridization.length>0){const o=t.hybridization.replaceAll("SP",""),s=Number(o);n.push(s)}t.hybridization=n}return t})})}function _u(e,t){const n={verticalAlign:null},{verticalAlign:o=null}=t||n;o?Ct(e,{align:o}):Ct(e,{align:"auto-check"})}function my(e,t){var s;const n=hs();ji(n,t.payload);const o=((s=t.payload)==null?void 0:s.preferences)||{};return nt(n,{tab:(o==null?void 0:o.activeTab)||""}),_u(n,t.payload),n.width=e.width,n.height=e.height,n.isLoading=!1,n.actionType=Wn,n}function gy(e,t){const{files:n}=t,o=nx(n,e.usedColors);for(const s of o)e.data.push(s);nt(e),e.isLoading=!1}function xy(e,t){const{files:n}=t,o=Qa(n,e.usedColors);for(const s of o)e.data.push(s);nt(e),Ct(e,{align:"auto-check"}),e.isLoading=!1}function by(e,t){var s;const n=hs();ji(n,t.payload);const o=((s=t.payload)==null?void 0:s.preferences)||{};return nt(n,{tab:(o==null?void 0:o.activeTab)||""}),_u(n,o),n.width=e.width,n.height=e.height,n.isLoading=!1,n.actionType=gn,n}function yy(e,t){const{files:n}=t;for(let o of n)pc(e.molecules,o.binary.toString());e.isLoading=!1}function vy(e,t){const{data:n,usedColors:o}=t.payload;e.data=e.data.concat(n),Mu(e,o),nt(e),Ct(e,{align:"auto-check"}),e.isLoading=!1}function Cy(e,t){const n=hs();return ji(n,t.payload),nt(n),Ct(n,{align:"auto-check"}),n.isLoading=!1,n.width=e.width,n.height=e.height,n.actionType=Zn,n}function Sy(e,t){const n=e.molecules.length===0;pc(e.molecules,t);const o=e.molecules[0]||null;n&&o&&vi(e,o.key,o)}function ky(e,t,n){uy(e.molecules,t,n);const o=e.molecules.findIndex(s=>s.key===n);vi(e,n,o!==-1?e.molecules[o]:e.molecules[0]||null)}function wy(e,t){e.displayerMode===Y.DM_1D&&lc(e,{payload:{assignmentData:t,rangeData:null}}),e.displayerMode===Y.DM_2D&&cc(e,{payload:{assignmentData:t,zoneData:null}})}function Ey(e,t){const{key:n,assignmentData:o}=t.payload;wy(e,o);const s=e.molecules.findIndex(i=>i.key===n);e.molecules.splice(s,1),vi(e,n,e.molecules[0]||null)}function Ay(e,t){const{data:n,options:o}=t.payload;if(!n)e.isLoading=!1;else{const s=xi(!1,e.usedColors["1d"]);for(const i of lx(n,o,s))e.data.push(i),e.tabActiveSpectrum[It(i.info.nucleus)]={id:i.id,index:e.data.length-1};e.usedColors["1d"].push(s)}e.toolOptions.data.predictionIndex++,nt(e),e.isLoading=!1}function Ty(e,t){var o;const n=oe(e);if(((o=e.activeSpectrum)==null?void 0:o.id)&&n){const{index:s}=e.activeSpectrum,i=10,r=t.x-i,l=t.x+i,[a,u]=Zt(e,{startX:r,endX:l}),p=Ha(n.data[s].data,{from:a,to:u}),h=Wt(e.data[s]);if(p){const m={id:q(),originalX:p.x-h,x:p.x,y:p.y,width:0};e.data[s].peaks.values.push(m)}}}function Dy(e,t){const n=oe(e);if(e.activeSpectrum){const{index:o}=e.activeSpectrum,s=n.data[o],{startX:i,endX:r}=t,[l,a]=Zt(e,{startX:i,endX:r});if(l!==a){const u=Ha(s.data,{from:l,to:a}),p=Wt(e.data[o]);if(u&&!s.peaks.values.some(h=>h.x===u.x)){const h={id:q(),originalX:u.x-p,x:u.x,y:u.y,width:0};e.data[o].peaks.values.push(h)}}}}function Iy(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,o=oe(e);if(t==null)e.data[n].peaks.values=[];else{const s=o.data[n].peaks.values.findIndex(i=>i.id===t.id);e.data[n].peaks.values.splice(s,1)}}}function Py(e,t){var n;if((n=e.activeSpectrum)!=null&&n.id){e.toolOptions.selectedTool=F.zoom.id,e.toolOptions.selectedOptionPanel=null;const{index:o}=e.activeSpectrum,s=e.data[o],[i,r]=e.xDomain,l=We(s.data.x,i),a=We(s.data.x,r),u=pg(e.data[o],k(b({},t),{windowFromIndex:l,windowToIndex:a}));s.peaks.values=s.peaks.values.concat(u)}}function Ny(e){const t="a".charCodeAt(0),o="z".charCodeAt(0)-t+1;let s="";for(;e>=0;)s=String.fromCharCode(e%o+t)+s,e=Math.floor(e/o)-1;return s}var Bo=(e=>(e.NORMAL="NORMAL",e.FORMULA="FORMULA",e))(Bo||{}),Hn=(e=>(e.RELATIVE="relative",e.ABSOLUTE="absolute",e.MIN="min",e.MAX="max",e))(Hn||{});function Ry(e,t,n,o){const s=o||Ny(e[t].options.columnIndex).toUpperCase();return e[t].options.columns[s]=n,e[t].options.columnIndex++,s}function My(e,t){const{from:n,to:o,nucleus:s}=t;return e.reduce((i,r)=>{if(kn(r)&&r.info.nucleus===s&&!r.info.isFid){const l=kg(r,{from:n,to:o});i.sum+=l.absolute,i.values.push(b({SID:r.id},l))}return i},{values:[],sum:0})}function Fu(e,t){e[t]===void 0&&(e[t]={options:{sum:100,code:null,columns:{},columnIndex:0},values:{}})}function _y(e,t,n,o){e[t].options.columns[n].valueKey=o,e[t].values=Bi(e,t)}function Fy(e,t,{columns:n,code:o}){Fu(e,t),e[t].options.code=o,e[t].options.columns=Object.values(n).reduce((r,l)=>{const a=b({},l);return delete a.tempKey,r[l.tempKey]=a,r},{});const{columns:s}=e[t].options;let i=Object.entries(e[t].values).reduce((r,[l,a])=>(r[l]=Object.keys(n).reduce((u,p)=>{const h=n[p].tempKey;return a[p]&&(u[h]=a[p]),u},{}),r),{});i=Object.entries(i).reduce((r,l)=>(r[l[0]]=Object.keys(s).reduce((a,u)=>{const p=s[u].type==="FORMULA";return a[u]=p?{colKey:u,value:Ou(s,i[l[0]],s[u].formula)}:k(b({},l[1][u]),{colKey:u}),a},{}),r),{}),e[t].values=i}function Ly(e,t){return Object.keys(t).reduce((n,o)=>(t[o].type==="FORMULA"&&(n[o]=k(b({colKey:o},e),{value:Ou(t,e,t[o].formula)})),n),{})}function Bi(e,t){const{columns:n}=e[t].options;return Object.entries(e[t].values).reduce((s,i)=>{const[r,l]=i;return s[r]=b(b({},l),Ly(l,n)),s},{})}function Lu(e,t,n){const{from:o,to:s,nucleus:i,columnKey:r=null}=n;Fu(t,i);const l=Ry(t,i,{type:"NORMAL",valueKey:"relative",from:o,to:s,index:1},r),{sum:a}=t[i].options,{values:u,sum:p}=My(e,{from:o,to:s,nucleus:i}),h=B(t,`${i}.values`,{});let m=u.reduce((g,x)=>{const y=p>0?a/p:0;return g[x.SID]=k(b({},h[x.SID]),{[l]:k(b({colKey:l},x),{relative:Math.abs(x.absolute)*y})}),g},{});t[i].values=m,t[i].values=Bi(t,i)}function Oy(e,t,n){const o=Object.entries(e[n].values).reduce((a,u)=>(delete u[1][t],u[1]&&Object.keys(u[1]).length>0&&(a[u[0]]=u[1]),a),{}),l=e[n].options.columns,{[t]:s}=l,i=G(l,[pr(t)]);Object.keys(e[n].options.columns).length===1&&(e[n].options.columnIndex=0),e[n].options.columns=i,e[n].values=o,e[n].values=Bi(e,n)}function Ou(e,t,n=""){const o=n.split(/\+|-|\*|\/|%|\(|\)/),s=[];for(const l of o){const a=l.trim();e[a]&&s.push(a)}const i=s.map(l=>t[l]?t[l][e[l].valueKey]:null);let r;try{r=new Function(...s,`return ${n}`)(...i)}catch(l){console.error(l),r=new Error(`Invalid Formula ( ${n} ) `)}return r}function $y(e,t){if(e!=null&&e[t]){const{values:n,options:{columns:o}}=e[t];let s="";for(const i in o)s+=`${i}	`;s+=`
`;for(const i of Object.values(n)){for(const r in o)s+=`${i[r][o[r].valueKey]}	`;s+=`
`}return s}return null}function Hy(e,t){const[n,o]=Zt(e,t);Lu(e.data,e.spectraAnalysis,{from:n,to:o,nucleus:e.activeTab})}function zy(e,t){const{colKey:n}=t;Oy(e.spectraAnalysis,n,e.activeTab)}function Vy(e,t){const{columnKey:n,from:o,to:s}=t.payload;Lu(e.data,e.spectraAnalysis,{from:o,to:s,nucleus:e.activeTab,columnKey:n})}function jy(e,t){const n=t.payload;Fy(e.spectraAnalysis,e.activeTab,n)}function By(e,t){const{columnKey:n,valueKey:o}=t.payload;_y(e.spectraAnalysis,e.activeTab,n,o)}function $u(e){return!(e.display.isPositiveVisible===!1&&e.display.isNegativeVisible===!1)}function As(e,t){e.info.dimension===2?(e.display.isPositiveVisible=t,e.display.isNegativeVisible=t,e.display.isVisible=$u(e)):e.display.isVisible=t}function Xy(e,t){if(Array.isArray(t.id)){const n=t.id;if(n.length===0)for(const o of e.data)As(o,!1);else for(const o of e.data)n.includes(o.id)?As(o,!0):As(o,!1)}else{const n=e.data.findIndex(o=>o.id===t.id);e.data[n].display[t.key]=t.value,e.data[n].info.dimension===2&&(e.data[n].display.isVisible=$u(e.data[n]))}}function Yy(e,t){var n;for(let o of e.data)((n=o.info)==null?void 0:n.dimension)===1&&t.some(s=>s.id===o.id)?o.display.isPeaksMarkersVisible=!0:o.display.isPeaksMarkersVisible=!1}function Gy(e,t){let n=!1;const o=e.activeSpectrum;if(t){const s=e.data.findIndex(r=>r.id===t.id),i=e.data.findIndex(r=>{var l;return r.id===((l=e.activeSpectrum)==null?void 0:l.id)});if(s!==-1){const r=e.data[s];r.display.isVisible=!0,i!==-1?n=e.data[i].info.isFid!==r.info.isFid:n=r.info.isFid||!1}t=k(b({},t),{index:s}),e.activeSpectrum=t,e.tabActiveSpectrum[e.activeTab]=t}else{if(o){const s=e.data.findIndex(i=>i.id===o.id);n=e.data[s].info.isFid}else n=!1;e.activeSpectrum=null,e.tabActiveSpectrum[e.activeTab]=null}F[e.toolOptions.selectedTool].isFilter&&(e.toolOptions.selectedTool=F.zoom.id,e.toolOptions.data.baseLineZones=[],e.toolOptions.selectedOptionPanel=null,e.tempData=null),e.toolOptions.data.activeFilterID?ss(e,null,{},o):n&&(ie(e),tt(e))}function Wy(e,{id:t,display:n}){const s=oe(e).data.findIndex(i=>i.id===t);s!==-1&&(e.data[s].display=n)}function Zy(e,{id:t,color:n,key:o}){const i=oe(e).data.findIndex(r=>r.id===t);i!==-1&&(e.data[i].display[o]=n)}function Uy(e,t){const n=oe(e);if(t.id){const o=n.data.findIndex(s=>s.id===t.id);e.data.splice(o,1)}else e.data=[];nt(e,{tab:e.activeTab,refreshActiveTab:!0})}function Ky(e,t){var s;const n=oe(e),{nucleus:o}=t;if((s=e.activeSpectrum)!=null&&s.id){const{index:i}=e.activeSpectrum;for(let a of o){const u=Rg(n.data[i],a,e.usedColors);e.data.push(u)}const l=os("nucleus")(e.data);dc(e,l,e.activeTab,!0),ie(e),tt(e)}}function qy(e,t){var n,o;if(e.data&&e.data.length>0){for(let s of e.data)if(((n=s.info)==null?void 0:n.dimension)===1&&s.info.nucleus===e.activeTab&&!((o=s.info)!=null&&o.isFid)){const i=cg(s,b({},t.payload));Te(s,[{name:oo,options:i}])}}ie(e),tt(e)}function Jy(e,t){const n=t.payload.publicationText,o=lg(n,e.usedColors);e.data.push(o),nt(e),zt(e,{scale:.8,spectrumID:o.id})}const Qy="undo",e0="redo",t0="reset",hs=()=>({actionType:"",data:[],contours:{},tempData:null,xDomain:[],yDomain:[],yDomains:{},xDomains:{},originDomain:{xDomain:[],yDomain:[],xDomains:{},yDomains:{},shareYDomain:!1},integralsYDomains:{},activeTab:"",width:0,height:0,margin:{top:10,right:20,bottom:70,left:0},activeSpectrum:null,mode:"RTL",molecules:[],verticalAlign:{align:"bottom",verticalShift:Xa},history:{past:[],present:null,future:[],hasUndo:!1,hasRedo:!1},isLoading:!1,keysPreferences:{},displayerMode:Y.DM_1D,tabActiveSpectrum:{},spectraAnalysis:{},correlations:{},displayerKey:"",zoom:{history:{}},overDisplayer:!1,toolOptions:{selectedTool:F.zoom.id,selectedOptionPanel:null,data:{baseLineZones:[],pivot:{value:0,index:0},zonesNoiseFactor:1,activeFilterID:null,tempRange:null,showMultiplicityTrees:!1,showRangesIntegrals:!0,showJGraph:!1,predictionIndex:0}},usedColors:{"1d":[],"2d":[]}}),Hu=hs();function n0(e){const t=q(),n=Qn([],{tolerance:oc});return k(b({},e),{correlations:n,displayerKey:t,history:{}})}function o0(e){const t={"1d":[],"2d":[]};return n=>{switch(n.type){case Wn:{if(n.payload){const o=Tr(n.payload),{spectra:s}=o,i=G(o,["spectra"]);Dr(s,t).then(r=>{n.payload=k(b({spectra:r},i),{usedColors:t}),e(n)})}break}case gn:{const s=JSON.parse(n.files[0].binary.toString()),i=Tr(s);Dr(i.spectra,t).then(r=>{n.payload=Object.assign(i,{spectra:r,usedColors:t}),e(n)});break}case Ho:{for(let s of n.files)Ja({display:{name:s.name}},s.binary,t).then(i=>{n.payload={data:i,usedColors:t},e(n)});break}case Zn:{bx(n.file,t).then(s=>{n.payload=Object.assign(s,{usedColors:t}),e(n)});break}case ps:{const{mol:{molfile:s},options:i}=n.payload;rx(s).then(r=>{n.payload={data:r,options:i},e(n)},()=>{e(n)});break}default:n.usedColors=t,e(n);break}}}function s0(e,t){switch([gn,Zn,Wn].includes(t.type)||(e.actionType=t.type),t.type){case Wn:return my(e,t);case St:return hy(e,t.isLoading);case gn:return by(e,t);case $o:return xy(e,t);case Ws:return gy(e,t);case Gs:return yy(e,t);case Ho:return vy(e,t);case Zn:return Cy(e,t);case hc:return Ty(e,t.mouseCoordinates);case fc:return Dy(e,t);case is:return Iy(e,t.data);case vc:return iy(e,t);case ls:return ry(e,t);case Vc:return Mr(e,t);case Ac:return Mr(e,t);case jc:return sy(e,t.value);case ku:return ay(e,t);case lu:return ly(e,t);case mc:return Ax(e,t.domain);case rs:return Tx(e,t.xDomain);case Ti:return Dx(e,t.yDomain);case gc:return pb(e,t.width);case Di:return hb(e,t.width,t.height);case co:return Cb(e,t);case ut:return Ue(e);case zc:return Ei(e,t.selectedOptionPanel);case xn:return Nb(e,t);case Ai:return Hb(e,t.shiftValue);case Nc:return zb(e,t.value);case Rc:return Vb(e);case Mc:return jb(e,t.value);case _c:return Xb(e);case Fc:return Bb(e);case Fi:return Yb(e,t.value);case Dc:return Gb(e,t.id,t.checked);case Ic:return Wb(e,t);case Pc:return Zb(e,t);case eu:return Kb(e,t);case yu:return qb(e,t);case vu:return Jb(e,t);case Cu:return Qb(e,t);case Un:return Xy(e,t);case Ii:return Yy(e,t.data);case zo:return Gy(e,t.data);case yc:return Zy(e,t.data);case bc:return Wy(e,t);case pu:return qy(e,t);case Mi:return Uy(e,t);case Qc:return Ky(e,t);case Pu:return Jy(e,t);case Pi:return Ab(e);case as:return Pb(e,t);case xu:return Ob(e);case bu:return $b(e);case _i:return kb(e);case Ni:return Sy(e,t.molfile);case Ri:return ky(e,t.molfile,t.key);case Cc:return Ey(e,t);case ps:return Ay(e,t);case wc:return rb(e,t.payload);case Ec:return lb(e,t.payload);case Zs:return ab(e,t.payload);case Sc:return cb(e,t.payload);case kc:return ub(e,t.payload);case cs:return Tb(e,t);case Li:return Db(e,t.position);case Oi:return Sb(e);case Lc:return Py(e,t.options);case $c:return Jx(e,t.options);case wu:return Kx(e,t);case Oc:return Px(e,t.options);case Zc:return $x(e,t);case us:return Rx(e,t);case Hc:return rc(e,t);case Gc:return Lx(e,t);case Wc:return Ox(e,t.value);case Su:return Vx(e,t);case tu:return Hx(e,t);case nu:return zx(e,t);case ou:return Mx(e,t);case su:return _x(e,t);case iu:return lc(e,t);case ru:return Fx(e,t);case Eu:return jx(e,t);case Au:return Bx(e);case Tu:return Xx(e);case Du:return Nx(e);case Ru:return Yx(e);case $i:return Fb(e,t.tab);case Bc:return wb(e,t.zone);case Xc:return Eb(e,t.id);case Yc:return Ub(e,t);case Vo:return xb(e,t.keyCode);case Hi:return bb(e,t.keyCode);case Uc:return Lb(e,t);case Kc:return qx(e,t);case ds:return nb(e,t);case qc:return ac(e,t);case Jc:return ob(e,t);case Tc:return Ix(e);case Us:return eb(e,t);case hu:return tb(e,t);case mu:return cc(e,t);case gu:return sb(e,t);case Iu:return Qx(e);case fu:return ib(e,t);case au:return Hy(e,t);case zi:return zy(e,t);case cu:return Vy(e,t);case uu:return jy(e,t);case du:return By(e,t);case Nu:return db(e,t);case Vi:return Cx(e,t);case Qy:return ty(e);case e0:return ny(e);case t0:return oy(e,t);case jo:return ey(e,t);default:return}}const i0=ti(s0),zu=c.exports.createContext(Hu),r0=zu.Provider;function $(){return c.exports.useContext(zu)}const Vu=c.exports.createContext({}),l0=Vu.Provider;function X(){return c.exports.useContext(Vu)}function Ce(e){const{data:t,activeSpectrum:n}=$();return c.exports.useMemo(()=>t&&n&&n.id&&t.find(s=>s.id===n.id)||e,[n,t,e])}function a0(){}const ju=c.exports.createContext(a0),c0=ju.Provider;function Xi(){return c.exports.useContext(ju)}const u0=M`
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
`;function Bu({isEmpty:e=!0,emptyText:t="Drag and drop here a JCAMP-DX, zipped Bruker folder, Jeol jdf or NMRium file",canOpenLoader:n=!0}){const o=Xi();return e?d("div",k(b({css:u0},n&&{onClick:o}),{children:d("p",{children:t})})):null}const d0=M`
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
`;function p0(){return w("div",{css:d0,children:[d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[d("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),d("path",{d:"M520.5 78.1z"})]})}),d("p",{children:"Loading ..."})]})}function Xu(){return f(p0,{})}const Yu=c.exports.createContext(Xu),h0=Yu.Provider;function Gu({isLoading:e=!0,emptyText:t=void 0}){const{data:n}=$(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{let r=null;return e||(r=setTimeout(()=>{s(!0)},500)),()=>{clearTimeout(r)}},[e]);const i=c.exports.useContext(Yu);return _(c.exports.Fragment,{children:[e&&i(),o&&!e&&f(Bu,{isEmpty:n&&n.length===0,emptyText:t})]})}const f0={container:{transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",zoom:"100%"}},m0=[F.zoom.id,F.zeroFilling.id,F.peakPicking.id,F.integral.id,F.phaseCorrection.id,F.baseLineCorrection.id,F.rangesPicking.id,F.zone2D.id,F.slicingTool.id,F.editRange.id,F.multipleSpectraAnalysis.id,F.exclusionZones.id,F.databaseRangesSelection.id],Ie={X:1,Y:2,XY:3},g0={startX:0,startY:0};function Eo({brushType:e=Ie.XY,dimensionBorder:t=g0,width:n,height:o}){let{width:s,height:i,toolOptions:{selectedTool:r}}=$(),{startX:l,endX:a,startY:u,endY:p,step:h}=c.exports.useContext(Tt);if(!m0.includes(r)||h!=="brushing"||!t||t.startX&&l<t.startX||t.startY&&u<t.startY||(t.endX&&Math.sign(a-l)===1?a>t.endX:a<t.startX)&&(t.endX&&t.endY&&Math.sign(p-u)===1?p>t.endY:p<t.startY))return null;s=n||s,i=o||i,a=t.endX&&a>t.endX?t.endX:t.startX&&a<t.startX?t.startX:a,p=t.endY&&p>t.endY?t.endY:t.startY&&p<t.startY?t.startY:p;const m=e===Ie.X||e===Ie.XY?(a-l)/s:1;l=e===Ie.X||e===Ie.XY?l:0;const g=e===Ie.Y||e===Ie.XY?(p-u)/i:1;return u=e===Ie.Y||e===Ie.XY?u:0,f("div",{style:k(b({},f0.container),{transform:`translate(${l}px, ${u}px) scale(${m},${g})`,willChange:"transform"}),children:f("svg",{width:s,height:i,children:f("rect",{x:"0",y:"0",width:s,height:i,fill:"gray",opacity:"0.2"})})})}const _r={line:{stroke:"black",strokeOpacity:1,shapeRendering:"crispEdges",strokeWidth:"1",willChange:"transform"}},x0=[F.zoom.id,F.equalizerTool.id,F.baseLineCorrection.id,F.zone2D.id,F.slicingTool.id,F.integral.id,F.rangesPicking.id,F.editRange.id,F.multipleSpectraAnalysis.id,F.exclusionZones.id,F.databaseRangesSelection.id];function Wu(){const{height:e,width:t,margin:n,toolOptions:{selectedTool:o}}=$();let s=c.exports.useContext(pt);const i=c.exports.useContext(Tt);return!x0.includes(o)||i.step==="brushing"||!s||s.x>t-n.right||s.y>e-n.bottom||!t||!e?null:f("div",{style:{willChange:"transform",cursor:"crosshair",transform:`translate(${-t+s.x}px, ${-e+s.y}px)`,position:"absolute",top:0,left:0,pointerEvents:"none",overflow:"visible",width:2*t,height:2*e},children:_("svg",{width:2*t,height:2*e,children:[f("line",{style:_r.line,x1:t,y1:"0",x2:t,y2:e*2},"vertical_line"),f("line",{style:_r.line,x1:"0",y1:e,x2:t*2,y2:e},"horizontal_line")]})},"crossLine")}function b0(e,t){const[n,o]=c.exports.useState(localStorage.getItem(e)||"{}");c.exports.useEffect(()=>{localStorage.setItem(e,n)},[e,n]);const s=c.exports.useCallback((i,r=null)=>{let l=JSON.parse(n);r?Ip(l,r,i):l=b(b({},l),i),o(JSON.stringify(l))},[n]);return c.exports.useMemo(()=>[t?B(JSON.parse(n),t,{}):JSON.parse(n),s],[t,s,n])}function kt(e,t=!0){const n=localStorage.getItem(e);return n&&t?JSON.parse(n):n}function En(e,t){localStorage.setItem(e,t)}function Fr(e){localStorage.removeItem(e)}function ft(e,t,n=null){return B(e,t,n)}const Yt={version:1,label:"Default workspace",display:{general:{disableMultipletAnalysis:!1,hideSetSumFromMolecule:!1,hideGeneralSettings:!1,experimentalFeatures:{display:!0}},panels:{spectraPanel:{display:!0,open:!0},informationPanel:{display:!0,open:!1},peaksPanel:{display:!0,open:!1},integralsPanel:{display:!0,open:!1},rangesPanel:{display:!0,open:!1},structuresPanel:{display:!0,open:!1},filtersPanel:{display:!0,open:!1},zonesPanel:{display:!0,open:!1},summaryPanel:{display:!1,open:!1},multipleSpectraAnalysisPanel:{display:!1,open:!1},databasePanel:{display:!1,open:!1},predictionPanel:{display:!1,open:!1}}},controllers:{dimmedSpectraTransparency:.1},formatting:{nuclei:{"1h":{name:"1H",ppm:"0.00",hz:"0.00"},"13c":{name:"13C",ppm:"0.00",hz:"0.00"},"15n":{name:"15N",ppm:"0.00",hz:"0.00"},"19f":{name:"19F",ppm:"0.00",hz:"0.00"},"29si":{name:"29Si",ppm:"0.00",hz:"0.00"},"31p":{name:"31P",ppm:"0.00",hz:"0.00"}},panels:{}}},y0={version:1,label:"Exercise workspace",display:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0,hideGeneralSettings:!0,experimentalFeatures:{hidden:!0}},panels:{spectraPanel:{display:!0,open:!0},informationPanel:{hidden:!0},peaksPanel:{hidden:!0},integralsPanel:{display:!0},rangesPanel:{hidden:!0},structuresPanel:{hidden:!0},filtersPanel:{hidden:!0},zonesPanel:{hidden:!0},summaryPanel:{hidden:!0},multipleSpectraAnalysisPanel:{hidden:!0},databasePanel:{hidden:!0},predictionPanel:{hidden:!0}},toolBarButtons:{zoomTool:!0,zoomOutTool:!0,import:!1,exportAs:!1,spectraStackAlignments:!0,spectraCenterAlignments:!0,realImaginary:!1,peakTool:!0,integralTool:!0,zonePickingTool:!1,slicingTool:!1,autoRangesTool:!1,zeroFillingTool:!1,phaseCorrectionTool:!1,baseLineCorrectionTool:!1,FFTTool:!1,multipleSpectraAnalysisTool:!1,exclusionZonesTool:!1}},controllers:Yt.controllers,formatting:Yt.formatting},v0={version:1,label:"Prediction workspace",display:{general:{experimentalFeatures:{display:!1}},panels:{spectraPanel:{display:!0},rangesPanel:{display:!0},zonesPanel:{display:!0},predictionPanel:{display:!0,open:!0},informationPanel:{display:!1},peaksPanel:{display:!1},integralsPanel:{display:!1},structuresPanel:{display:!1},filtersPanel:{display:!1},summaryPanel:{display:!1},multipleSpectraAnalysisPanel:{display:!1},databasePanel:{display:!1}}},controllers:Yt.controllers,formatting:Yt.formatting},C0={version:1,label:"Process 1D workspace",display:{general:{disableMultipletAnalysis:!0},panels:{zonesPanel:{display:!0},summaryPanel:{display:!0},multipleSpectraAnalysisPanel:{display:!0,open:!0},spectraPanel:{display:!0,open:!0},informationPanel:{hidden:!0},peaksPanel:{hidden:!0},integralsPanel:{hidden:!0},rangesPanel:{hidden:!0},structuresPanel:{hidden:!0},filtersPanel:{hidden:!0},databasePanel:{hidden:!0},predictionPanel:{hidden:!0}},toolBarButtons:{import:!1,exportAs:!1,autoRangesTool:!1,multipleSpectraAnalysisTool:!1,exclusionZonesTool:!1}},controllers:Yt.controllers,formatting:Yt.formatting};var He={exercise:y0,default:Yt,process1D:C0,prediction:v0};const Zu=6,S0=[{key:"default",label:He.default.label},{key:"process1D",label:He.process1D.label},{key:"exercise",label:He.exercise.label},{key:"prediction",label:He.prediction.label}];function Yi(e){switch(e){case"exercise":return He.exercise;case"process1D":return He.process1D;case"prediction":return He.prediction;case"default":return He.default;default:return{}}}function fs(e){return e.workspaces[e.workspace.current||"default"]}const Uu={version:Zu,workspaces:{},dispatch:()=>null,workspace:{current:"default",base:null}};function Ku(e){return JSON.parse(JSON.stringify(e),(t,n)=>{if((n==null?void 0:n.hidden)!==!0)return n})}function Lr(e){let t={};return JSON.parse(JSON.stringify(e),(n,o)=>{(o==null?void 0:o.hidden)!==!0&&n&&(t[n]=t[n]++||1)}),t}function k0(e,t){const n=Lr(e),o=Lr(t);if(Object.keys(o).length===0)return!1;for(const[s,i]of Object.entries(n))if(!o[s]||o[s]!==i)return!1;return!0}function w0(e){const s=e,{nuclei:t}=s,n=G(s,["nuclei"]),o=Object.keys(t).reduce((i,r)=>(i[t[r].name.trim().toLowerCase()]=t[r],i),{});return b({nuclei:o},n)}function E0(e){const t=kt("nmr-local-storage-version",!1);let n=kt("nmr-general-settings");return t&&(n==null?void 0:n.version)&&Fr("nmr-local-storage-version"),(!(n!=null&&n.version)||(n==null?void 0:n.version)!==Zu)&&Fr("nmr-general-settings"),k(b({},e),{workspaces:(n==null?void 0:n.workspaces)||{default:He.default}})}function A0(e,t){if(t.payload){const o=kt("nmr-general-settings"),n=t.payload,{dispatch:s,workspace:i}=n,r=G(n,["dispatch","workspace"]);e.workspace=!i&&(o==null?void 0:o.currentWorkspace)?{current:o.currentWorkspace,base:null}:{current:i||"default",base:i};const l=an({},Yi(e.workspace.current),r),a=fs(e);if(He[e.workspace.current]&&(!a||(l==null?void 0:l.version)!==(a==null?void 0:a.version)||!k0(l.display,a==null?void 0:a.display))||!o){const{workspaces:u,version:p,workspace:{current:h}}=e||{},m=Ku(l.display),g=k(b({version:p},(o==null?void 0:o.currentWorkspace)&&{currentWorkspace:o==null?void 0:o.currentWorkspace}),{workspaces:k(b({},u),{[h]:k(b({},l),{display:m})})});e.workspaces[h]=an({},a,l),En("nmr-general-settings",JSON.stringify(g))}else a.display=an({},l.display,a.display);e.dispatch=s}}function T0(e,t){if(t.payload){const n=fs(e);let{controllers:o,formatting:s,display:i}=t.payload;s=w0(s);let r=kt("nmr-general-settings");r.currentWorkspace=e.workspace.current,r.workspaces=k(b({},r.workspaces),{[e.workspace.current]:k(b({},r.workspaces[e.workspace.current]),{controllers:o,formatting:s,display:i})}),En("nmr-general-settings",JSON.stringify(r)),n.controllers=o,n.formatting=s,n.display=k(b({},n.display),{panels:i.panels,general:k(b({},n.display.general||{}),{experimentalFeatures:i.general.experimentalFeatures})})}}function D0(e,t){if(t.payload){const n=fs(e),{key:o,value:s}=t.payload;let i=kt("nmr-general-settings");i.workspaces[e.workspace.current].formatting.panels[o]=s,En("nmr-general-settings",JSON.stringify(i)),n.formatting.panels[o]=s}}function I0(e){const t=fs(e);let n=kt("nmr-general-settings");const o=Yi(e.workspace.current).display;n.workspaces[e.workspace.current]&&(n.workspaces[e.workspace.current].display=o,En("nmr-general-settings",JSON.stringify(n))),t.display=o}function P0(e,t){const n=t.payload.workspace;e.workspaces[n]||(e.workspaces[n]=Yi(n)),e.workspace.current=n}function N0(e,t){const{workspace:n,data:{display:o,controllers:s,formatting:i}}=t.payload,r={version:1,label:n,display:o,controllers:s,formatting:i},l=q(),a=kt("nmr-general-settings");a.workspaces[l]=r,En("nmr-general-settings",JSON.stringify(a)),e.workspaces[l]=r,e.workspace.current=l}function R0(e,t){var r;const{workspace:n}=t.payload;n===e.workspace.current&&(e.workspace.current="default");let o=kt("nmr-general-settings");const s=((r=oe(e))==null?void 0:r.workspaces)||{},i=Object.keys(s).reduce((l,a)=>(a!==n&&(l[a]=s[a]),l),{});e.workspaces=i,o.workspaces=Ku(i),En("nmr-general-settings",JSON.stringify(o))}function M0(e,t){switch(t.type){case"INIT_PREFERENCES":return A0(e,t);case"SET_PREFERENCES":return T0(e,t);case"SET_PANELS_PREFERENCES":return D0(e,t);case"RESET_PREFERENCES":return I0(e);case"SET_WORKSPACE":return P0(e,t);case"ADD_WORKSPACE":return N0(e,t);case"REMOVE_WORKSPACE":return R0(e,t);default:return e}}const _0=ti(M0),qu=c.exports.createContext(Uu),F0=qu.Provider;function le(){const e=c.exports.useContext(qu);if(!e)throw new Error("Preferences context was not found");const{workspace:t,workspaces:n,dispatch:o}=e;return c.exports.useMemo(()=>({current:n[t.current]||{},workspace:t,workspaces:n,dispatch:o}),[o,t,n])}function Ju(){const{workspaces:e}=le();return c.exports.useMemo(()=>{const t=Object.keys(e).reduce((n,o)=>(He[o]||n.push({key:o,label:e[o].label}),n),[]);return[...S0,...t]},[e])}class Ut{constructor(){this.array=[]}moveTo(t,n){this.array.push(`M ${t} ${n}`)}lineTo(t,n){this.array.push(`L ${t} ${n}`)}closePath(){this.array.push("Z")}toString(){return this.array.join(" ")}}function Or({id:e,sign:t,color:n,datum:o}){const{margin:s,width:i,height:r,xDomain:l,yDomain:a,contours:u,activeSpectrum:p}=$(),h=le(),{xShift:m,yShift:g}=io(o),x=c.exports.useMemo(()=>p===null?!0:e===p.id,[p,e]);function y(v){const C=Ae({margin:s,width:i,xDomain:l}),E=ye({margin:s,height:r,yDomain:a}),T=new Ut;for(const I of v)if(I.lines){const D=I.lines;if(D.length<1e6)for(let N=0;N<D.length;N+=4)T.moveTo(C(D[N]+m),E(D[N+1]+g)),T.lineTo(C(D[N+2]+m),E(D[N+3]+g))}else{T.moveTo(C(I[0].x+m),E(I[0].y+g));for(let D=1;D<I.length;D++)T.lineTo(C(I[D].x+m),E(I[D].y+g))}return T.closePath(),T.toString()}const S=c.exports.useMemo(()=>B(u,`${e}.${t}`,[]),[u,t,e]);return f("path",{fill:"none","data-test-id":"spectrum-line",stroke:n,strokeWidth:"1",style:{opacity:x?1:B(h.current,"controllers.dimmedSpectraTransparency",.1)},d:y(S)})}function L0({data:e,displayerKey:t}){return f("g",{clipPath:`url(#${t}clip-chart-2d)`,className:"contours",children:e==null?void 0:e.map((n,o)=>_("g",{children:[n.display.isPositiveVisible&&f(Or,{id:n.id,sign:"positive",datum:n,color:n.display.positiveColor}),n.display.isNegativeVisible&&f(Or,{id:n.id,sign:"negative",datum:n,color:n.display.negativeColor})]},`${n.id+o}`))})}const O0=c.exports.memo(L0);function $0(){const{data:e,displayerKey:t}=$(),n=c.exports.useMemo(()=>e.filter(o=>o.info.dimension===2&&o.info.isFt),[e]);return f(O0,{data:n,displayerKey:t})}var An=(e=>(e.XAxis="XAxis",e.YAxis="YAxis",e))(An||{});function uo(e){const{width:t,xDomain:n,yDomain:o}=$();return c.exports.useCallback(s=>{const{x:i,y:r}=s,[l,a]=e==="XAxis"?n:o;return Hl({x:i,y:r},{from:l,to:a,nbPoints:t*4,optimize:!0})},[e,t,n,o])}function H0({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,yDomains:i,displayerKey:r}=$(),l=uo(An.YAxis),a=o.left,u=c.exports.useMemo(()=>{if(t){const h=ye({height:n,yDomain:[s[0],s[1]],margin:o}),m=mn(i[t.id],a,e),{x:g,re:x}=t.data,y=l({x:g,y:x}),S=new Ut;S.moveTo(m(y.y[y.y.length-1]),h(y.x.length-1));for(let v=y.x.length-2;v>=0;v--)S.lineTo(m(y.y[v]),h(y.x[v]));return S.toString()}else return},[a,o,e,n,t,l,s,i]),p=n-o.bottom-o.top;return!p||!a?null:_("svg",{viewBox:`0 0 ${a} ${p+o.top}`,width:a,height:p+o.top,children:[f("defs",{children:f("clipPath",{id:`${r}clip-left`,children:f("rect",{width:a,height:p,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${r}clip-left)`,children:f("path",{className:"line",stroke:"black",fill:"none",d:u})})]})}var z0=c.exports.memo(H0);function V0({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,yDomains:i,displayerKey:r}=$(),l=uo(An.XAxis),a=o.top,u=c.exports.useMemo(()=>{if(t){const p=Ae({width:n,xDomain:s,margin:o}),h=mn(i[t.id],a,e),{x:m,re:g}=t.data,x=l({x:m,y:g}),y=new Ut;y.moveTo(p(x.x[0]),h(x.y[0]));for(let S=1;S<x.x.length;S++)y.lineTo(p(x.x[S]),h(x.y[S]));return y.toString()}else return},[a,e,o,t,n,s,l,i]);return!n||!a?null:_("svg",{viewBox:`0 0 ${n} ${a}`,width:n,height:a,children:[f("defs",{children:f("clipPath",{id:`${r}clip-top`,children:f("rect",{width:n-o.left-o.right,height:a,x:o.left,y:`${0}`})})}),f("g",{clipPath:`url(#${r}clip-top)`,children:f("path",{className:"line",stroke:"red",fill:"none",strokeWidth:"1px",d:u})})]})}var j0=c.exports.memo(V0);const B0=M`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,X0={right:100,top:0,left:0,bottom:0};function Y0(e){const{show:t=!0,label:n="\u03B4 [ppm]",margin:o=X0}=e,s=$(),{xDomain:i,height:r,width:l,margin:a,tabActiveSpectrum:u,activeTab:p}=s,h=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!t)return;const m=Ae({width:l,margin:a,xDomain:i}),g=Os(m).ticks(8).tickFormat(ni("0"));Do(h.current).call(g)},[p,r,a,a.bottom,a.left,a.right,a.top,t,u,l,i]),!l||!r?null:d(Ve,{children:t&&d("g",{className:"x",css:B0,transform:`translate(0,${r-(a.bottom+o.bottom)})`,ref:h,children:d("text",{fill:"#000",x:l-60,y:"20",dy:"0.71em",textAnchor:"end",children:n})})})}var G0=c.exports.memo(Y0);const W0=M`
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
`,Z0={right:50,top:0,bottom:0,left:0};function U0(e){const{show:t=!0,label:n="",margin:o=Z0}=e,s=c.exports.useRef(null),i=$(),{yDomain:r,width:l,height:a,activeTab:u,tabActiveSpectrum:p,margin:h}=i;return c.exports.useEffect(()=>{if(!t||!r)return;const m=ye({height:a,yDomain:r,margin:h}),g=Pp(m).ticks(8).tickFormat(ni("0"));Do(s.current).call(g)},[t,r,u,p,a,h]),!l||!a?null:d(Ve,{children:d("g",{className:"y",css:W0,transform:`translate(${l-o.right})`,ref:s,children:d("text",{fill:"#000",x:-o.top,y:-(o.right-5),dy:"0.71em",transform:"rotate(-90)",textAnchor:"end",children:n})})})}var K0=c.exports.memo(U0);const $r=M`
  stroke: lightgrey;
  opacity: 0.7;
`;function Hr({axis:e,show:t}){const{data:n,activeTab:o,margin:s,width:i,height:r,xDomain:l,yDomain:a,displayerMode:u}=$(),[p,h]=c.exports.useState([]),m=Ae({margin:s,width:i,xDomain:l}),g=ye({margin:s,height:r,yDomain:a});c.exports.useEffect(()=>{const y=o.split(","),S=e==="X"?y[0]:e==="Y"?y[1]:null;if(S!==null){const C=n.filter(E=>E.display.isVisible===!0&&E.info.nucleus===S).filter(kn).map(E=>E.ranges.values).flat().map(E=>E.signals.filter(T=>to.some(I=>T.kind===I)).map(T=>T.delta)).flat();h(C)}else h([])},[o,e,n,u]);const x=c.exports.useMemo(()=>{if(t===!0&&p.length>0)return p.map((S,v)=>e==="X"?d("line",{css:$r,x1:m(S),x2:m(S),y1:g(a[0]),y2:g(a[1])},`indicationLine${e}${v}`):e==="Y"?d("line",{css:$r,x1:m(l[0]),x2:m(l[1]),y1:g(S),y2:g(S)},`indicationLine${e}${v}`):null)},[e,p,m,g,t,l,a]);return d("g",{children:x})}const mo=new Np,pe={on:(e,t)=>mo.on(e,t),once:(e,t)=>mo.once(e,t),off:(e,t)=>mo.off(e,t),emit:(e,t)=>mo.emit(e,t)};Object.freeze(pe);const Gi={assignments:{},activated:null,highlighted:null},Wi=c.exports.createContext({data:Gi,dispatch:()=>null});Wi.Provider;function je(){const e=c.exports.useContext(Wi);if(!e)throw new Error("Assignment context was not found");return e}function dt(e){const{data:{activated:t,highlighted:n,assignments:o},dispatch:s}=je();if(typeof e!="string"&&typeof e!="number"||e==="")throw new Error("assignment key must be a non-empty string or number");const i=String(e),r=c.exports.useMemo(()=>(t==null?void 0:t.id)===i,[t==null?void 0:t.id,i]),l=c.exports.useMemo(()=>(n==null?void 0:n.id)===i,[n==null?void 0:n.id,i]),a=c.exports.useMemo(()=>o[i]||null,[o,i]),u=c.exports.useCallback(x=>{s({type:"REMOVE",payload:{ids:[i],axis:x}})},[s,i]),p=c.exports.useCallback((x,y)=>{s({type:"TOGGLE",payload:{atomIDs:x,id:i,dimension:y}})},[s,i]),h=c.exports.useCallback(x=>{s({type:"SET_ACTIVE",payload:{id:i,axis:x}})},[s,i]),m=c.exports.useCallback(x=>{s({type:"SHOW",payload:{id:i,axis:x}})},[s,i]),g=c.exports.useCallback(()=>{s({type:"HIDE"})},[s]);return{id:i,activated:t,isActive:r,isOver:l,highlighted:n,assigned:a,removeAll:u,toggle:p,setActive:h,show:m,hide:g}}var ue=(e=>(e.PEAK="PEAK",e.INTEGRAL="INTEGRAL",e.SIGNAL="SIGNAL",e.RANGE="RANGE",e.ZONE="ZONE",e.EXCLUSION_ZONE="EXCLUSION_ZONE",e.DATABASE="DATABASE",e.UNKNOWN="UNKNOWN",e))(ue||{});const Qu={highlight:{highlights:{},highlighted:[],highlightedPermanently:[],sourceData:null},dispatch:()=>null,remove:()=>null},ed=c.exports.createContext(Qu);function q0(e,t){switch(t.type){case"SHOW":{const{convertedHighlights:n,sourceData:o}=t.payload,{type:s="UNKNOWN",extra:i=null}=o||{},r=k(b({},e),{highlights:b({},e.highlights),sourceData:{type:s,extra:i}});for(const l of n)l in r.highlights||(r.highlights[l]=1);return r.highlighted=Object.keys(r.highlights),r}case"HIDE":{const{convertedHighlights:n}=t.payload,o=k(b({},e),{highlights:b({},e.highlights),sourceData:null});for(const s of n)s in o.highlights&&delete o.highlights[s];return o.highlighted=Object.keys(o.highlights),o}case"SET_PERMANENT":return k(b({},e),{highlightedPermanently:t.payload});case"UNSET_PERMANENT":return k(b({},e),{highlightedPermanently:[]});default:throw new Error(`unknown action type: ${t.type}`)}}function J0(e){const[t,n]=c.exports.useReducer(q0,Qu.highlight),o=c.exports.useMemo(()=>{function s(){n({type:"HIDE",payload:{convertedHighlights:t.highlighted}})}return{highlight:t,dispatch:n,remove:s}},[t]);return f(ed.Provider,{value:o,children:e.children})}function Tn(){return c.exports.useContext(ed)}function re(e,t=null){if(!Array.isArray(e))throw new Error("highlights must be an array");const{dispatch:n,highlight:o}=Tn(),s=c.exports.useMemo(()=>{const m=[];for(const g of e){if(typeof g!="string"&&typeof g!="number")throw new Error("highlight key must be a string or number");g!==""&&m.push(String(g))}return m},[e]);c.exports.useEffect(()=>()=>{n({type:"HIDE",payload:{convertedHighlights:[]}}),n({type:"UNSET_PERMANENT"})},[n]);const i=c.exports.useMemo(()=>o.highlighted.some(m=>s.includes(m)),[s,o.highlighted]),r=c.exports.useMemo(()=>o.highlightedPermanently.some(m=>s.includes(m)),[s,o.highlightedPermanently]),l=c.exports.useCallback(()=>{n({type:"SHOW",payload:{convertedHighlights:s,sourceData:t}})},[n,s,t]),a=c.exports.useCallback(()=>{n({type:"HIDE",payload:{convertedHighlights:s}})},[s,n]),u=c.exports.useCallback(m=>{n({type:"SHOW",payload:{convertedHighlights:[],id:m}})},[n]),p=c.exports.useCallback(m=>{n({type:"HIDE",payload:{convertedHighlights:[],id:m}})},[n]),h=c.exports.useCallback(m=>{m&&(m.preventDefault(),m.stopPropagation()),n(r?{type:"UNSET_PERMANENT"}:{type:"SET_PERMANENT",payload:s})},[s,n,r]);return c.exports.useMemo(()=>({isActive:i,onHover:{onMouseEnter:l,onMouseLeave:a},onClick:h,show:l,hide:a,isActivePermanently:r,click:h,add:u,remove:p}),[u,h,a,i,r,p,l])}const td="___";function Se(e,t){return`${e}${td}${t}`}const zr=M`
  stroke: green;
  stroke-width: 2;
  opacity: 0.5;
`;function Vr({delta:e,axis:t,show:n}){const{margin:o,width:s,height:i,xDomain:r,yDomain:l}=$(),a=Ae({margin:o,width:s,xDomain:r}),u=ye({margin:o,height:i,yDomain:l}),p=c.exports.useMemo(()=>n===!0?t==="X"?d("line",{css:zr,x1:a(e),x2:a(e),y1:u(l[0]),y2:u(l[1])},`signalLine_${e}_X`):t==="Y"?d("line",{css:zr,x1:a(r[0]),x2:a(r[1]),y1:u(e),y2:u(e)},`signalLine_${e}_Y`):null:null,[t,e,a,u,n,r,l]);return d("g",{children:p})}function Q0({signal:e}){var r,l;const t=c.exports.useMemo(()=>[Se(e.id,"Crosshair"),Se(e.id,"Crosshair_X")],[e.id]),n=c.exports.useMemo(()=>[Se(e.id,"Crosshair"),Se(e.id,"Crosshair_Y")],[e.id]),o=re(t),s=re(n),i=re([e.id]);return!((r=e==null?void 0:e.x)!=null&&r.delta)||!((l=e==null?void 0:e.y)!=null&&l.delta)?null:w("g",{children:[d(Vr,{delta:e.x.delta,axis:"X",show:o.isActive||i.isActive}),d(Vr,{delta:e.y.delta,axis:"Y",show:s.isActive||i.isActive})]})}const ev=c.exports.memo(({signal:e,isVisible:t})=>{const{margin:n,width:o,height:s,xDomain:i,yDomain:r}=$(),l=Ae({margin:n,width:o,xDomain:i}),a=ye({margin:n,height:s,yDomain:r}),u=c.exports.useCallback(y=>[y].concat(Se(y,"X"),Se(y,"Y")),[]),p=dt(e.id),h=re(u(p.id)),m=Tn(),[g,x]=c.exports.useState(!1);return c.exports.useEffect(()=>{m.highlight.highlighted.some(y=>u(e.id).includes(y))||p.isActive?x(!0):x(!1)},[p.isActive,u,m.highlight.highlighted,e.id]),e?w("g",{className:"zone-signal",children:[t.signals&&w("g",{children:[d(Q0,{signal:e}),d("circle",{onMouseEnter:()=>{p.show(),h.show()},onMouseLeave:()=>{p.hide(),h.hide()},cx:l(e.x.delta||0),cy:a(e.y.delta||0),r:g?6:4,fill:g?"green":"darkgreen"},e.id)]}),d("g",{className:"zone-signal-peak",style:{pointerEvents:"none"},children:t.peaks&&e.peaks&&e.peaks.map((y,S)=>d("circle",{cx:l(y.x),cy:a(y.y),r:2,fill:"black"},`${e.id+S}`))})]}):null}),tv=M`
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
`,nv=M`
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
`,ov=({zoneData:e,isVisible:t})=>{const{x:n,y:o,id:s,signals:i}=e,r=dt(s),l=re([r.id],{type:ue.ZONE,extra:{id:r.id}}),{margin:a,width:u,height:p,xDomain:h,yDomain:m}=$(),g=Ae({margin:a,width:u,xDomain:h}),x=ye({margin:a,height:p,yDomain:m}),{from:y=0,to:S=0}=n,{from:v=0,to:C=0}=o,[E,T]=c.exports.useState(!1);return c.exports.useEffect(()=>{T(!Wx(e))},[e]),w("g",{css:l.isActive||r.isActive?nv:tv,onMouseEnter:()=>{r.show(),l.show()},onMouseLeave:()=>{r.hide(),l.hide()},children:[t.zones&&d("g",{transform:`translate(${g(S)},${x(v)})`,children:d("rect",{x:"0",width:g(y)-g(S),height:x(C)-x(v),className:"Integral-area",fill:"#0000000f",stroke:E?"#343a40":"darkgreen",strokeWidth:E?"0":"1"})}),i.map((I,D)=>d(ev,{signal:I,isVisible:t},`${s+D}`))]},s)};function sv({zones:e,display:t,displayerKey:n}){const[o,s]=c.exports.useState({zones:!0,signals:!0,peaks:!0});return c.exports.useEffect(()=>{pe.on("onZonesVisibilityChange",({key:i})=>{s(r=>k(b({},r),{[i]:!r[i]}))})},[]),f("g",{clipPath:`url(#${n}clip-chart-2d)`,className:"2D-Zones",children:t.isVisible&&e.values.map(i=>f("g",{className:"zone",children:f(ov,{zoneData:i,isVisible:o})},i.id))})}const iv=c.exports.memo(sv),rv={zones:{},display:{}};function lv(){const{displayerKey:e}=$(),{zones:t,display:n}=Ce(rv);return f(iv,{zones:t,display:n,displayerKey:e})}function av({spectra:e,width:t,height:n,margin:o,displayerKey:s}){return _("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-2d`,children:f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top})})}),f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top,stroke:"black",strokeWidth:"1",fill:"transparent"}),(e==null?void 0:e[0])&&f(j0,{data:e[0]}),(e==null?void 0:e[1])&&f(z0,{data:e[1]}),f($0,{}),f(lv,{}),f(Hr,{axis:"X",show:!0}),f(Hr,{axis:"Y",show:!0}),_("g",{className:"container",style:{pointerEvents:"none"},children:[f(G0,{}),f(K0,{})]})]})}const cv=c.exports.memo(av);function uv({spectra:e}){const{width:t,height:n,margin:o,displayerKey:s}=$();return f(cv,{spectra:e,width:t,height:n,margin:o,displayerKey:s})}function Ye(e,t,n="",o=""){return n+zl(e).format(t)+o}function Be(e){const t=le(),n=B(t.current,"formatting.nuclei",{ppm:"0.0",hz:"0.0"});return c.exports.useMemo(()=>{function o(s){return(i,r="ppm",l="",a="")=>l+zl(Number(i)).format(B(n,`${s.toLowerCase()}.${r}`,"0.0"))+a}if(!e)return()=>{};if(typeof e=="string")return o(e);if(Array.isArray(e))return e.map(s=>o(s));throw Error("nuclus must be string or array of string")},[e,n])}function jr(e){e=String(e).trim();const t=e.lastIndexOf(".");return t>0?e.substr(t).split("").length-1:0}const Br=M`
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
`;function dv({layout:e,data1D:t}){const n=c.exports.useContext(pt),{startX:o,endX:s,startY:i,endY:r,step:l}=c.exports.useContext(Tt),{margin:a,width:u,height:p,activeSpectrum:h,xDomain:m,yDomain:g,yDomains:x,activeTab:y,data:S,toolOptions:{selectedTool:v}}=$(),C=n&&sn(e,{startX:n.x,startY:n.y}),E=y.split(","),[T,I]=Be(E),D=c.exports.useMemo(()=>{if(!t||t.length===0)return Ae({width:u,margin:a,xDomain:m});if(v!==F.slicingTool.id)switch(C){case K.TOP_1D:case K.CENTER_2D:return Ae({width:u,margin:a,xDomain:m});case K.LEFT_1D:return ye({height:p,margin:a,yDomain:g});default:return null}return null},[t,p,a,v,C,u,m,g]),N=c.exports.useMemo(()=>{if(!t||t.length===0)return ye({height:p,margin:a,yDomain:g});if(v!==F.slicingTool.id)switch(C){case K.CENTER_2D:return ye({height:p,margin:a,yDomain:g});case K.TOP_1D:return t[0]?mn(x[t[0].id],a.top):null;case K.LEFT_1D:return t[1]?mn(x[t[1].id],a.left):null;default:return null}return null},[t,p,a,v,C,g,x]);if(!h||!n||n.y<10||n.x<10||n.x>u-a.right||n.y>p-a.bottom)return d("div",{css:Br});const A=W=>{let O=null;if(C===K.TOP_1D?O=0:C===K.LEFT_1D&&(O=1),O!=null&&D!=null){const j=Cn(t[O]),U=We(j.x,D.invert(W));return j.y[U]}return 1},P=(W=null)=>{if(D!=null)switch(C){case K.CENTER_2D:case K.TOP_1D:return D.invert(W||n.x);case K.LEFT_1D:return D.invert(W||n.y);default:return 0}return 0},R=()=>{if(N!=null)switch(C){case K.CENTER_2D:case K.TOP_1D:return N.invert(n.y);case K.LEFT_1D:return N.invert(n.x);default:return 0}return 0},H=()=>{switch(C){case K.TOP_1D:return(A(o)/(A(s)||Number.MIN_VALUE)*100).toFixed(2);case K.LEFT_1D:return(A(i)/(A(r)||Number.MIN_VALUE)*100).toFixed(2);default:return 0}},L=()=>{switch(C){case K.TOP_1D:return(P(o)-P(s)).toPrecision(6);case K.LEFT_1D:return(P(i)-P(r)).toPrecision(6);default:return 0}},z=(W,O,j)=>C===K.CENTER_2D?w(c.exports.Fragment,{children:[W," ( ",d(oi,{mf:j})," )"]}):O,V=()=>{if(C===K.CENTER_2D){const{maxX:W,maxY:O,minX:j,minY:U,z:ee}=S[h.index].data,_e=(W-j)/(ee[0].length-1),gt=(O-U)/(ee.length-1),Jt=Math.floor((P()-j)/_e),Qt=Math.floor((R()-U)/gt);return Jt<0||Jt>=ee[0].length||Qt<0||Qt>=ee.length?0:ee[Qt][Jt]}return 0};return w("div",{css:Br,children:[w("div",{children:[w("span",{className:"label",children:[z("F2","X",E[0])," :"]}),d("span",{className:"value",children:T(P())}),d("span",{className:"unit",children:"ppm"})]}),w("div",{children:[w("span",{className:"label",children:[z("F1","Y",E[1])," :"]}),d("span",{className:"value",children:I(R())}),d("span",{className:"unit",children:"ppm"})]}),w("div",{children:[d("span",{className:"label",children:"Intensity :"}),d("span",{className:"value",children:V()})]}),l==="brushing"&&w("div",{children:[d("span",{className:"label",children:" \u0394ppm :"}),d("span",{className:"value",children:L()})]}),l==="brushing"&&w("div",{children:[d("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[H(),"%"]})]})]})}const pv={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-88px",fontWeight:"bold",pointerEvents:"none",overflow:"visible",userSelect:"none",width:"85px",textAlign:"right"};function hv({layout:e,data1D:t}){const n=c.exports.useContext(pt),{step:o}=c.exports.useContext(Tt),{margin:s,width:i,height:r,xDomain:l,yDomain:a,yDomains:u,activeTab:p,activeSpectrum:h}=$(),m=n&&sn(e,{startX:n.x,startY:n.y}),g=p.split(","),[x,y]=Be(g),S=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return Ae({width:i,margin:s,xDomain:l});switch(m){case K.TOP_1D:case K.CENTER_2D:return Ae({width:i,margin:s,xDomain:l});case K.LEFT_1D:return ye({height:r,margin:s,yDomain:a});default:return null}},[h,t,r,s,m,i,l,a]),v=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return ye({height:r,margin:s,yDomain:a});switch(m){case K.CENTER_2D:return ye({height:r,margin:s,yDomain:a});case K.TOP_1D:return t[0]?mn(u[t[0].id],s.top):null;case K.LEFT_1D:return t[1]?mn(u[t[1].id],s.left):null;default:return null}},[h,t,r,s,m,a,u]);if(o==="brushing"||!n||n.y<s.top||n.x<s.left||n.x>i-s.right||n.y>r-s.bottom)return null;const C=(T=null)=>{switch(m){case K.CENTER_2D:case K.TOP_1D:return S==null?void 0:S.invert(T||n.x);case K.LEFT_1D:return S==null?void 0:S.invert(T||n.y);default:return 0}},E=()=>{switch(m){case K.CENTER_2D:case K.TOP_1D:return v==null?void 0:v.invert(n.y);case K.LEFT_1D:return v==null?void 0:v.invert(n.x);default:return 0}};return _("div",{style:k(b({},pv),{transform:`translate(${n.x}px, ${n.y}px)`}),children:[f("span",{children:y(E())}),f("span",{style:{color:"gray"},children:","}),f("span",{style:{color:"red"},children:x(C())})]},"xLabelPointer")}function nd(e,t,n=10){return Je(yt(t),[e-n,n])}function fv({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,displayerKey:i}=$(),r=uo(An.XAxis),l=o.top,a=c.exports.useMemo(()=>{if(t){const{x:u,re:p}=t,h=Ae({margin:o,width:n,xDomain:s}),m=nd(l,p,e),g=r({x:u,y:p}),x=new Ut;x.moveTo(h(g.x[0]),m(g.y[0]));for(let y=1;y<g.x.length;y++)x.lineTo(h(g.x[y]),m(g.y[y]));return x.toString()}else return},[t,l,e,o,n,s,r]);return!n||!l?null:_("svg",{viewBox:`0 0 ${n} ${l}`,width:n,height:l,children:[f("defs",{children:f("clipPath",{id:`${i}clip-top`,children:f("rect",{width:n-o.left-o.right,height:l,x:o.left,y:`${0}`})})}),_("g",{clipPath:`url(#${i}clip-top)`,children:[f("rect",{width:n-o.left-o.right,height:l,x:o.left,y:`${0}`,fillOpacity:"0"}),f("path",{className:"line",stroke:"red",fill:"none",d:a})]})]})}var mv=c.exports.memo(fv);function gv({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,displayerKey:i}=$(),r=uo(An.YAxis),l=o.left,a=c.exports.useMemo(()=>{if(t){const{x:p,re:h}=t,m=ye({height:n,margin:o,yDomain:s}),g=nd(l,h,e),x=r({x:p,y:h}),y=new Ut;y.moveTo(g(x.y[x.y.length-1]),m(x.x.length-1));for(let S=x.x.length-2;S>=0;S--)y.lineTo(g(x.y[S]),m(x.x[S]));return y.toString()}else return},[t,l,o,e,n,r,s]),u=n-o.bottom-o.top;return!u||!l?null:_("svg",{viewBox:`0 0 ${l} ${u+o.top}`,width:l,height:u+o.top,children:[f("defs",{children:f("clipPath",{id:`${i}clip-left`,children:f("rect",{width:l,height:u,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${i}clip-left)`,children:f("path",{className:"line",stroke:"red",fill:"none",d:a})})]})}var xv=c.exports.memo(gv);function bv(){const{width:e,height:t,margin:n,activeSpectrum:o,data:s,xDomain:i,yDomain:r}=$(),l=Lf(),a=c.exports.useMemo(()=>{if(l&&o&&o.id){const{x:u,y:p}=l,h=Ae({margin:n,width:e,xDomain:i}),m=ye({margin:n,height:t,yDomain:r}),g=Mg(s[o.index],{x:h.invert(u),y:m.invert(p)});return _("svg",{viewBox:`0 0 ${e} ${t}`,width:e,height:t,style:{position:"absolute",backgroundColor:"rgba(255,255,255,0.8)"},children:[(g==null?void 0:g.horizontal)&&f(mv,{data:g.horizontal.data}),(g==null?void 0:g.vertical)&&f(xv,{data:g.vertical.data})]})}return null},[l,o,n,e,i,t,r,s]);return l?a:null}function yv({emptyText:e=void 0}){const t=$(),{toolOptions:{selectedTool:n},isLoading:o,data:s,margin:i,tabActiveSpectrum:r,activeTab:l}=t,a=X(),{info:u}=Ce({info:{}}),p=u.isFt||!("isFt"in u),h=c.exports.useMemo(()=>l.split(",").reduce((C,E)=>{var T,I;if((T=r[E])!=null&&T.id){const D=(I=r[E])==null?void 0:I.id,N=s.find(A=>A.id===D&&!A.info.isFid);N&&C.push(N)}else C.push(null);return C},[]),[l,s,r]),m=Zx(t),g=c.exports.useCallback(v=>{if(sn(m,v)&&!v.altKey)if(v.shiftKey)switch(n){case F.zone2D.id:a(b({type:Kc},v));break}else switch(n){default:if(n!=null)return a(k(b({type:cs},v),{trackID:sn(m,v)}))}},[n,a,m]),x=c.exports.useCallback(v=>{const{x:C,y:E}=v,T=sn(m,{startX:C,startY:E});T&&a({type:xn,trackID:T})},[m,a]),y=v=>{const{x:C,y:E}=v,T=sn(m,{startX:C,startY:E});T&&a(T==="CENTER_2D"?b({type:Uc},v):{type:as,event:v,trackID:T})},S=c.exports.useCallback(v=>{},[n]);return p?f(si,{children:({width:v,height:C})=>_(od,{width:v,height:C,children:[f(Gu,{isLoading:o,emptyText:e}),s&&s.length>0&&f(ra,{onBrush:g,onDoubleClick:x,onClick:S,onZoom:y,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:_(la,{style:{width:"100%",height:"100%",position:"absolute"},children:[n&&n===F.slicingTool.id&&f(bv,{}),f(Wu,{}),h&&f(hv,{data1D:h,layout:m}),f(Eo,{brushType:Ie.XY,dimensionBorder:m.CENTER_2D}),_(et,{children:[(h==null?void 0:h[0])&&f(Eo,{brushType:Ie.X,dimensionBorder:m.TOP_1D,height:i.top}),(h==null?void 0:h[1])&&f(Eo,{brushType:Ie.Y,dimensionBorder:m.LEFT_1D,width:i.left})]}),h&&f(dv,{data1D:h,layout:m}),f(uv,{spectra:h})]})})]})}):f(Bu,{emptyText:"Currently FID can not be displayed for 2D spectra",canOpenLoader:!1})}function od(e){const t=X(),{width:n,height:o,children:s}=e;return c.exports.useEffect(()=>{t({type:Di,width:n,height:o})},[n,o,t]),s}const vv="SET_X_SCALE",Cv="SET_Y_SCALE",sd="SET_SCALE",id={scaleX:null,scaleY:null};function Sv(e,t){switch(t.type){case vv:e.scaleX=(n=null)=>Xt(t,n);break;case Cv:e.scaleY=(n=null)=>Fo(t,n);break;case sd:{e.scaleX=(n=null)=>Xt(t.payload,n),e.scaleY=(n=null)=>Fo(t.payload,n);break}default:return e}}const kv=ti(Sv),rd=c.exports.createContext(id),wv=rd.Provider;function Zi(){return c.exports.useContext(rd)}function ge(){const e=Zi();if(!e.scaleX||!e.scaleY)throw new Error("scale cannot be null");return e}const ne={TOP_LEFT:"top left",TOP_CENTER:"top center",TOP_RIGHT:"top right",MIDDLE_LEFT:"middle left",MIDDLE:"middle",MIDDLE_RIGHT:"middle right",BOTTOM_LEFT:"bottom left",BOTTOM_CENTER:"bottom center",BOTTOM_RIGHT:"bottom right"},_n={INFO:"info",SUCCESS:"success",ERROR:"error",PROGRESS_INDICATOR:"progress_indicator"},Qe={FADE:"fade",SCALE:"scale",SLIDE_RIGHT:"slide_right",SLIDE_LEFT:"slide_left",SLIDE_TOP:"slide_top",SLIDE_BOTTOM:"slide_bottom"},ld=c.exports.createContext({}),Ev=ld.Provider;function se(){return c.exports.useContext(ld)}const Ks=250,Av={[Qe.FADE]:{transition:`opacity ${Ks}ms ease`,opacity:0},[Qe.SCALE]:{transform:"scale(1)",transition:`all ${Ks}ms ease-in-out`}},Tv={[Qe.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Qe.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(1)"}}};function ad(s){var i=s,{children:e,type:t,transitionStyles:n=Tv}=i,o=G(i,["children","type","transitionStyles"]);const r=c.exports.useRef(null);return f(Rp,k(b({nodeRef:r},o),{timeout:Ks,children:l=>f("div",{ref:r,style:b(b(b({},Av[t]),n[t][l]),n.default),children:e})}))}function Dv(e,t){const n=b({position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",pointerEvents:"none",overflow:"visible"},t?{top:`${t.top}px`,left:`${t.left}px`,height:`${t.height}px`,width:`${t.width}px`}:{width:"100%",height:"100%"});switch(e){case ne.TOP_LEFT:return k(b({},n),{justifyContent:"flex-start",alignItems:"flex-start"});case ne.TOP_CENTER:return k(b({},n),{justifyContent:"flex-start"});case ne.TOP_RIGHT:return k(b({},n),{justifyContent:"flex-start",alignItems:"flex-end"});case ne.MIDDLE_LEFT:return k(b({},n),{justifyContent:"center",alignItems:"flex-start"});case ne.MIDDLE:return k(b({},n),{justifyContent:"center"});case ne.MIDDLE_RIGHT:return k(b({},n),{justifyContent:"center",alignItems:"flex-end"});case ne.BOTTOM_LEFT:return k(b({},n),{justifyContent:"flex-end",alignItems:"flex-start"});case ne.BOTTOM_CENTER:return k(b({},n),{justifyContent:"flex-end"});case ne.BOTTOM_RIGHT:return k(b({},n),{justifyContent:"flex-end",alignItems:"flex-end"});default:return n}}function cd(s){var i=s,{children:e,options:{position:t},containerStyle:n}=i,o=G(i,["children","options","containerStyle"]);const r=c.exports.useMemo(()=>Dv(t,n),[t,n]);return e.length>0&&f("div",k(b({style:r},o),{children:e}))}function Iv(e,t){return e.reduce((n,o)=>{const s=t(o);return n[s]||(n[s]=[]),n[s].push(o),n},{})}const Pv=M`
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
`;function Nv(){return d("div",{css:Pv})}function Rv(a){var u=a,{children:e,wrapperRef:t=null,offset:n="5px",position:o=ne.BOTTOM_CENTER,timeout:s=3e3,type:i,transition:r=Qe.FADE}=u,l=G(u,["children","wrapperRef","offset","position","timeout","type","transition"]);const p=c.exports.useRef(null),h=c.exports.useRef([]),[m,g]=c.exports.useState([]);c.exports.useEffect(()=>{p.current=document.createElement("div");const A=p.current,P=h.current;return t&&t.appendChild(A),()=>{A&&t&&(P.forEach(clearTimeout),t.removeChild(A))}},[t]);const x=c.exports.useCallback(A=>{g(P=>{const R=P.length,H=P.filter(L=>L.id!==A.id);return R>H.length&&A.options.onClose&&A.options.onClose(),H})},[]),y=c.exports.useCallback((A="",P={})=>{const R=Math.random().toString(36).substr(2,9),H=b({position:P.position||o,timeout:s,type:i,backgroundColor:"black",color:"white"},P),L={id:R,message:A,options:H};if(L.close=()=>x(L),L.options.timeout){const z=setTimeout(()=>{x(L),h.current.splice(h.current.indexOf(z),1)},L.options.timeout);h.current.push(z)}return g(z=>z.concat(L)),L.options.onOpen&&L.options.onOpen(),L},[o,x,s,i]),S=c.exports.useCallback((A="",P={})=>(P.type=_n.SUCCESS,P=b({backgroundColor:"#28ba62",color:"white"},P),y(A,P)),[y]),v=c.exports.useCallback((A="",P={})=>(P.type=_n.ERROR,P=b({backgroundColor:"#cf3c4f",color:"white"},P),y(A,P)),[y]),C=c.exports.useCallback((A="",P={})=>(P.type=_n.INFO,P.color="#28ba62",y(A,P)),[y]),E=c.exports.useCallback((A="Process in progress",P={})=>(P.type=_n.PROGRESS_INDICATOR,P.timeout=0,P.backgroundColor="#232323",new Promise(R=>{const H=y(A,P);setTimeout(()=>{R(()=>x(H))},500)})),[x,y]),T=c.exports.useCallback(A=>{x(A)},[x]),I=Iv(m,A=>A.options.position),D=c.exports.useMemo(()=>t?t.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[t]),N=c.exports.useMemo(()=>({show:y,success:S,error:v,info:C,showLoading:E}),[y,S,v,C,E]);return _(Ev,{value:N,children:[e,p.current&&Ko.exports.createPortal(f(c.exports.Fragment,{children:Object.keys(ne).map(A=>{const P=ne[A];return f(Vl,k(b({appear:!0,options:{position:P,zIndex:999999},component:cd,containerStyle:D},l),{children:I[P]?I[P].map(R=>f(ad,{type:r,children:_("div",{style:{margin:n,padding:"25px",borderRadius:"10px",pointerEvents:"all",backgroundColor:R.options.backgroundColor,color:R.options.color,minHeight:"60px",position:"relative"},children:[f("button",{style:{position:"absolute",right:"5px",top:"5px",border:"none",backgroundColor:"transparent",color:"white"},type:"button",onClick:()=>T(R),children:f(ii,{})}),f("span",{children:R.message}),R.options.type===_n.PROGRESS_INDICATOR&&f(Nv,{})]},R.id)},R.id)):null}),P)})}),p.current)]})}var Mv=c.exports.memo(Rv);const ud=c.exports.createContext({}),_v=ud.Provider;function fe(){return c.exports.useContext(ud)}const Fv=M`
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
`;function Lv({style:e={},buttons:t=[],onClose:n,message:o}){const s=c.exports.useCallback((i,{handler:r=()=>null})=>{r(i),n()},[n]);return w("div",{style:e,css:Fv,children:[d("p",{className:"message",children:o}),d("div",{className:"buttons-container",children:t.map(i=>d("button",{type:"button",onClick:r=>s(r,i),style:i.style&&i.style,children:i.text},i.text))})]})}const Ov=({modal:e,onClose:t,onLayout:n})=>{const o=c.exports.useRef(),[s,{width:i,height:r}]=Mp(()=>f("div",{style:{height:"100%",display:"block",overflow:"auto"},children:c.exports.cloneElement(e.component,k(b({},e.options),{onClose:t,style:{cursor:"default"}}))}));return c.exports.useEffect(()=>{isFinite(r)&&isFinite(i)&&!o.current&&(o.current={width:i,height:r},n({modal:e,layout:{width:i,height:r}}))},[i,r,o,n,e]),s},$v={[Qe.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Qe.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(0)"}}};function Hv({children:e,style:t=void 0,offset:n="0px",position:o=ne.MIDDLE,transition:s=Qe.SCALE,wrapperRef:i=null}){const r=c.exports.useRef(),l=c.exports.useRef(),[a,u]=c.exports.useState();c.exports.useEffect(()=>{r.current=document.createElement("div");const C=r.current;return i&&i.appendChild(C),()=>{C&&i&&i.removeChild(C)}},[i]);const p=c.exports.useCallback(function(){u(null)},[u]),h=c.exports.useMemo(()=>i?i.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[i]),m=c.exports.useCallback((C,E={})=>{const T={component:C,options:b({isBackgroundBlur:!0,enableResizing:!1},E)};return T.close=p,u(T),T.options.onOpen&&T.options.onOpen(),T},[p]),g=c.exports.useCallback((C,E={enableResizing:!1})=>{const T={component:d(Lv,b({},C)),options:b({isBackgroundBlur:!0},E)};return T.close=p,u(T),T.options.onOpen&&T.options.onOpen(),T},[p]);c.exports.useEffect(()=>{function C(E){["Escape","Esc"].includes(E.key)&&p()}return document.addEventListener("keydown",C,!1),()=>document.removeEventListener("keydown",C,!1)},[p]);const x=M`
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
  `,y=a!=null&&a.options.isBackgroundBlur?{backgroundColor:"rgba(255,255,255,0.8)"}:{pointerEvents:"none"},S=c.exports.useMemo(()=>({show:m,close:p,showConfirmDialog:g}),[m,p,g]),v=c.exports.useCallback(({modal:C,layout:E})=>{const T=C.options.width?C.options.width:E.width>h.width?h.width:E.width,I=C.options.height?C.options.height:E.height>h.height?h.height:E.height;l.current.updateSize({width:T,height:I})},[h.height,h.width]);return w(_v,{value:S,children:[e,r.current&&Ko.exports.createPortal(d(c.exports.Fragment,{children:a?d("div",{css:x,style:b({},y),children:d(Vl,{appear:!0,options:{position:a.options.position?a.options.position:o},containerStyle:h,component:cd,children:d(ad,{type:a.options.transition?a.options.transition:s,transitionStyles:k(b({},$v),{default:{width:a.options.width?`${a.options.width}px`:"auto"},height:a.options.height?`${a.options.height}px`:"auto"}),children:d(_p,{maxWidth:h.width,maxHeight:h.height,ref:l,default:{width:a.options.width?a.options.width:"auto",height:a.options.height?a.options.height:"auto",x:0,y:0},className:"rnd-container",style:k(b({},t),{margin:n,position:"static",pointerEvents:"all",userSelect:"none"}),enableResizing:a.options.enableResizing,dragHandleClassName:"handle",enableUserSelectHack:!1,children:d(Ov,{modal:a,onClose:p,onLayout:v})})},a.id)},ne[a.options.transition?a.options.transition:s])}):null}),r.current)]})}const dd=c.exports.createContext({rootRef:null,elementsWrapperRef:null}),zv=dd.Provider;function ms(){return c.exports.useContext(dd)}const Vv={popup:{position:"fixed",top:0,left:0,pointerEvents:"none",backgroundColor:"gray",padding:"3px",borderRadius:"2px",color:"white",whiteSpace:"nowrap",fontSize:"10px",fontFamily:"tahoma",textShadow:"none"}};function jv({style:e={popup:{},mainContainer:{}},className:t="",popupPlacement:n="right",children:o,title:s,offset:i={x:0,y:0}}){const r=c.exports.useRef(null),l=c.exports.useRef(null),[a,u]=c.exports.useState({x:0,y:0}),[p,h]=c.exports.useState(!1),{elementsWrapperRef:m}=ms();c.exports.useLayoutEffect(()=>{const y=()=>{let S,v;if(r.current===null||l.current===null)return null;const C=r.current.getBoundingClientRect(),E=l.current.getBoundingClientRect();switch(n){case"left":S=-E.width,v=C.height/2-C.height/2*E.height/C.height;break;case"right":S=C.width,v=C.height/2-C.height/2*E.height/C.height;break;case"top":S=C.width/2-C.width/2*E.width/C.width,v=-C.height;break;case"bottom":S=C.width/2-C.width/2*E.width/C.width,v=C.height;break;default:S=0,v=0;break}return{x:S+C.x,y:v+C.y}};if(p){const S=y();S&&u(S)}},[n,p]);const g=c.exports.useCallback(()=>{h(!0)},[]),x=c.exports.useCallback(()=>{h(!1)},[]);return _(c.exports.Fragment,{children:[f("div",{style:b({position:"relative",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},e.mainContainer),ref:r,onMouseOver:g,onMouseOut:x,children:o}),p&&m&&Ko.exports.createPortal(f("div",{ref:l,style:b(k(b({},Vv.popup),{transform:`translate(${a.x+i.x}px,${a.y+i.y}px)`,zIndex:999999999}),e.popup),className:t,children:f("span",{style:{pointerEvents:"none"},children:s})}),m)]})}var Ee=c.exports.memo(jv);const Xr={button:{backgroundColor:"transparent",border:"none",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},svg:{fill:"#ca0000",fontSize:"16px"}};function Bv(e){const{onClick:t=()=>null,popupTitle:n="Close",popupPlacement:o="left",className:s=""}=e;return f("div",{className:s,children:f(Ee,{title:n,popupPlacement:o,children:f("button",{style:Xr.button,type:"button",onClick:t,children:f(ii,{style:Xr.svg})})})})}var me=c.exports.memo(Bv);const Xv=M`
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
`,Yv=M`
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
`;function Gv({data:e,activeSpectrum:t,scaleX:n,startX:o,endX:s,onClose:i}){var m;const[r,l]=c.exports.useState(),[a,u]=c.exports.useState(!1),[p,h]=c.exports.useState(!1);return c.exports.useEffect(()=>{setTimeout(()=>{u(!0)},400)},[]),c.exports.useEffect(()=>{if(t&&o&&s&&a){const g=e[t.index];if(Ys(g))throw new Error("unreachable");const{data:{x,re:y},info:S}=g,v=n().invert(o),C=n().invert(s),{fromIndex:E,toIndex:T}=Jn(x,{from:v,to:C}),I={x:x.slice(E,T),y:y.slice(E,T)};try{const D=Rl(I,{frequency:S.originFrequency,takeBestPartMultiplet:!0,symmetrizeEachStep:!0,debug:!0});h(!0),l(D)}catch(D){console.log(D)}}},[o,s,e,n,t,a]),p?w("div",{css:Xv,children:[w("div",{className:"header handle",children:[d("span",{children:"Analyse Multiplet"}),d(me,{onClick:i})]}),d("div",{className:"container",children:(m=r==null?void 0:r.debug)==null?void 0:m.steps.map((g,x)=>{var y,S;return w("div",{className:"row",children:[w(dn,{width:400,height:200,svgStyle:{overflow:"visible"},seriesViewportStyle:{stroke:"black"},children:[d(qe,{data:xr(g.multiplet)}),d($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),d($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]}),d("div",{className:"multiplicity",children:d("p",{children:r.js[x]?`${(y=r.js[x])==null?void 0:y.multiplicity}: ${(S=r.js[x])==null?void 0:S.coupling.toFixed(3)} Hz`:""})}),w(dn,{width:400,height:200,seriesViewportStyle:{stroke:"black"},children:[d(qe,{data:xr(g.errorFunction),lineStyle:{strokeWidth:1}}),d($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),d($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]})]},x)})})]}):w("div",{css:Yv,children:[d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[d("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),d("path",{d:"M520.5 78.1z"})]})}),d("p",{children:"Analyse Multiplet in progress. Please wait ..."})]})}function pd(){const{data:e,activeTab:t}=$();return c.exports.useMemo(()=>e?e.filter(n=>t===It(n.info.nucleus))||[]:[],[t,e])}function hd(e){const{activeSpectrum:t}=$(),n=le();return c.exports.useMemo(()=>{const o=t===null?!0:e===t.id,s=o?1:B(n.current,"controllers.dimmedSpectraTransparency",.1);return{isActive:o,opacity:s}},[t,e,n])}function Wv({zone:e,color:t,vAlign:n,spectrumID:o}){const{scaleX:s,scaleY:i}=ge(),r=re([e.id],{type:ue.EXCLUSION_ZONE,extra:{id:e.id,spectrumID:o}}),{opacity:l}=hd(o);return f("g",{transform:`translate(${s()(e.to)},0)`,children:f("rect",b({x:"0",transform:`translate(0,${i()(0)-(n+5)})`,width:`${s()(e.from)-s()(e.to)}`,height:"10px",style:{fill:r.isActive?"#ff6f0057":t,opacity:l}},r.onHover))},e.id)}var Zv=c.exports.memo(Wv);function gs(e,t){const{index:n=1,align:o="stack"}=t||{index:1,align:"stack"};return e.align===o?n*e.verticalShift:0}function Uv({displayerKey:e,xDomains:t,spectra:n,verticalAlign:o}){return f("g",{className:"spectrum-exclusion-zones-group",clipPath:`url(#${e}clip-chart-1d)`,children:n.filter(s=>s.display.isVisible===!0&&t[s.id]).map((s,i)=>Jv(s).map(r=>f(Zv,{spectrumID:s.id,vAlign:gs(o,{index:i}),zone:r,color:s.display.color},r.id)))})}const Kv=c.exports.memo(Uv);function qv(){const{displayerKey:e,xDomains:t,displayerMode:n,verticalAlign:o}=$(),s=pd();return n!==Y.DM_1D?null:f(Kv,{spectra:s,displayerKey:e,xDomains:t,verticalAlign:o})}function Jv(e){var t;return((t=e.filters.find(n=>n.name===no&&n.flag))==null?void 0:t.value)||[]}function Qv(){const{width:e,margin:t,xDomains:n,xDomain:o,mode:s}=$();return c.exports.useMemo(()=>Xt({width:e,margin:t,xDomains:n,xDomain:o,mode:s}),[t,s,e,o,n])}function e1(){const{height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}=$();return c.exports.useMemo(()=>Sx({height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}),[o,e,s,t,n])}function fd(e){const{data:t,activeSpectrum:n}=$(),o=Qv(),s=e1(),i=c.exports.useMemo(()=>{if(n){const{x:l,re:a}=t[n==null?void 0:n.index].data,{from:u,to:p}=e;return Fp({x:l,y:a},{from:u,to:p,reverse:!0})}return{x:[],y:[]}},[n,t,e]);return c.exports.useMemo(()=>{if(i){const l=Hl(i,{nbPoints:200,optimize:!0}),a=new Ut;a.moveTo(o(l.x[0]),s(l.y[0]));for(let u=1;u<l.x.length;u++)a.lineTo(o(l.x[u]),s(l.y[u]));return a.toString()}else return""},[i,o,s])}const Ot={showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",color:"#000000",strokeWidth:1},t1={showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00"},Ui=e=>({showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",jGraphTolerance:e==="1H"?.2:e==="13C"?2:0}),md={showPeakNumber:!0,peakNumberFormat:"0",showPeakIndex:!1,peakIndexFormat:"0.00",showDeltaPPM:!0,deltaPPMFormat:"0.00",showDeltaHz:!1,deltaHzFormat:"0.00",showPeakWidth:!1,peakWidthFormat:"00.0000",showIntensity:!0,intensityFormat:"0.00"},gd={showSmiles:!0,showSolvent:!1,showNames:!0,showRange:!1,showDelta:!0,showAssignment:!1,showCoupling:!0,showMultiplicity:!0};function Xo(e){const{x:t,anchor:n}=e,o=c.exports.useRef(!1),s=c.exports.useRef({relativeX:t,x:t}),[i,r]=c.exports.useState({x:t,action:null});return c.exports.useEffect(()=>{s.current={relativeX:t,x:t},r({x:t,action:null})},[t]),{onMouseDown:c.exports.useCallback(a=>{r({x:s.current.x,action:"start"}),s.current.relativeX=a.clientX-s.current.relativeX,o.current=!0,a.stopPropagation();function u(h){if(h.stopPropagation(),o.current){const m=h.clientX-s.current.relativeX;s.current={relativeX:m,x:m},r({x:m,action:"end"}),o.current=!1}window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",u)}function p(h){h.stopPropagation(),o.current&&r({x:h.clientX-s.current.relativeX,action:"move"})}window.addEventListener("mousemove",p),window.addEventListener("mouseup",u)},[]),position:i,previousPosition:s.current.x,isActive:o.current,anchor:n}}const Yr={marginLeft:"5px",width:"2px",height:"100%",pointerEvents:"none",position:"relative"},Ts={container:e=>M`
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
        `])}};function n1(e){const{children:t,initialPosition:n={x1:10,x2:40},onStart:o,onMove:s,onEnd:i}=e,r=Xo({x:n.x2,anchor:"RIGHT"}),l=Xo({x:n.x1,anchor:"LEFT"}),a=l.isActive?l.anchor:r.isActive?r.anchor:"";return c.exports.useEffect(()=>{const u={x1:l.position.x,x2:r.position.x};switch(l.isActive?l.position.action:r.isActive?r.position.action:""){case"start":o==null||o(u);break;case"move":s==null||s(u);break;case"end":i==null||i(u);break}},[l,i,s,o,r]),w(Ve,{children:[d("div",{"data-no-export":"true",onMouseDown:r.onMouseDown,css:Ts.container(r.position.x),children:d("div",{style:Yr})}),d("div",{css:Ts.content(a,l,r),children:typeof t=="function"?t==null?void 0:t(l.position.x,r.position.x):t}),d("div",{"data-no-export":"true",onMouseDown:l.onMouseDown,css:Ts.container(l.position.x),children:d("div",{style:Yr})})]})}const o1={width:"2px",height:"100%",pointerEvents:"none",fill:"transparent"},Gr={container:e=>M`
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
  `};function s1(e){const{children:t,initialPosition:n={x1:10,x2:40},onStart:o,onMove:s,onEnd:i}=e,r=Xo({x:n.x2,anchor:"RIGHT"}),l=Xo({x:n.x1,anchor:"LEFT"});return c.exports.useEffect(()=>{const a={x1:l.position.x,x2:r.position.x};switch(l.isActive?l.position.action:r.isActive?r.position.action:""){case"start":o==null||o(a);break;case"move":s==null||s(a);break;case"end":i==null||i(a);break}},[l,i,s,o,r]),w("g",{style:{transform:`translateX(${l.position.x}px)`},children:[typeof t=="function"?t(l.position.x,r.position.x):t,d(Wr,{onMouseDown:l.onMouseDown,position:0}),d(Wr,{onMouseDown:r.onMouseDown,position:r.position.x-l.position.x})]})}function Wr(e){return w("g",{onMouseDown:e.onMouseDown,css:Gr.container(e.position),"data-no-export":"true",children:[d("rect",{x:"-5px",css:Gr.innerContainer}),d("rect",{x:"-2.5px",style:o1})]})}function Ki(e){const o=e,{tag:t="div"}=o,n=G(o,["tag"]);return t==="div"?f(n1,b({},n)):f(s1,b({},n))}const i1=M`
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
`,r1=M`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  fill: #ff6f0057;

  .target {
    visibility: visible;
  }
`;function l1({integralData:e}){const{height:t,margin:n}=$(),{scaleX:o}=ge(),s=X(),{id:i,from:r,to:l,integral:a}=e,u=re([i],{type:ue.INTEGRAL,extra:{id:i}}),p=c.exports.useCallback(y=>{s({type:Ac,payload:{data:k(b({},e),{from:o().invert(y.x2),to:o().invert(y.x1)})}})},[s,e,o]),h=c.exports.useCallback(()=>{u.show()},[u]),m=c.exports.useCallback(()=>{u.hide()},[u]),g=r?o()(r):0,x=l?o()(l):0;return d("g",{css:u.isActive?r1:i1,onMouseEnter:h,onMouseLeave:m,children:d(Ki,{tag:"svg",initialPosition:{x1:x,x2:g},onEnd:p,children:(y,S)=>w("g",{children:[d("rect",{x:"0",y:"0",width:S-y,height:t-n.bottom,className:"highlight","data-no-export":"true"}),d("text",{x:0,y:t-n.bottom+30,fill:"black",style:{fontSize:"12px",fontWeight:"bold"},children:a!==void 0?a.toFixed(2):""})]})})})}function a1({integral:e,isActive:t}){const n=le(),o=fd(e),s=c.exports.useMemo(()=>{let{color:i=Ot.color,strokeWidth:r=Ot.strokeWidth}=ft(n.current,"formatting.panels.integrals")||{};return{color:i,strokeWidth:r}},[n]);return _("g",{children:[f("path",{className:"line",stroke:s.color,strokeWidth:s.strokeWidth,fill:"none",style:{opacity:t?1:.2},d:o}),f(l1,{integralData:e})]})}function c1(){const{xDomains:e,activeSpectrum:t,data:n,displayerKey:o}=$(),s=c.exports.useMemo(()=>{const i=r=>t===null?!0:r===t.id;return f("g",{className:"integrals",children:(n==null?void 0:n[0])&&n.filter(r=>r.display.isVisible===!0&&e[r.id]).filter(kn).map(r=>r.integrals.values.map(l=>f(a1,{integral:l,isActive:i(r.id)},l.id)))})},[t,n,e]);return f("g",{clipPath:`url(#${o}clip-chart-1d)`,children:s})}function u1({data:e,id:t,display:n,index:o}){const{verticalAlign:s}=$(),{scaleX:i,scaleY:r}=ge(),l=uo(An.XAxis),{opacity:a}=hd(t),u=c.exports.useMemo(()=>gs(s,{index:o}),[o,s]),p=c.exports.useMemo(()=>{const h=i(),m=r(t),g=new Ut;if((e==null?void 0:e.x)&&(e==null?void 0:e.y)&&h(0)){const x=l(e);g.moveTo(h(x.x[0]),m(x.y[0]));for(let y=1;y<x.x.length;y++)g.lineTo(h(x.x[y]),m(x.y[y]));return g.toString()}else return""},[i,r,t,e,l]);return f("path",{className:"line","data-test-id":"spectrum-line",stroke:n.color,fill:"none",style:{opacity:a},d:p,transform:`translate(0,-${u})`},t)}function d1(){const{data:e,tempData:t,displayerKey:n,xDomains:o}=$(),s=t||e;return f("g",{clipPath:`url(#${n}clip-chart-1d)`,className:"spectrums",children:s==null?void 0:s.filter(i=>i.display.isVisible===!0&&o[i.id]).map((i,r)=>f(u1,k(b({},i),{data:Cn(i),index:r}),i.id))})}const p1=M`
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
`;function h1({id:e,x:t,y:n,sign:o,value:s,color:i,isActive:r,nucleus:l}){const a=c.exports.useRef(null),[u,p]=c.exports.useState(!1),[h,m]=c.exports.useState(s),[g,x]=c.exports.useState({width:0,height:0}),y=Be(l),S=re([e],{type:ue.PEAK,extra:{id:e}}),v=X(),C=c.exports.useCallback(R=>v({type:Ai,shiftValue:R.shiftValue}),[v]);c.exports.useLayoutEffect(()=>{var H;const R=(H=a.current)==null?void 0:H.getBBox();x({width:(R==null?void 0:R.width)||0,height:(R==null?void 0:R.height)||0})},[u]),c.exports.useEffect(()=>{m(s)},[s]);const E=c.exports.useCallback(R=>{if(R.key==="Enter"){const H=R.currentTarget.valueAsNumber;if(!isNaN(H)){const L=H-s;C({id:e,value:H,oldValue:s,shiftValue:L}),R.currentTarget.blur(),p(!1)}}else R.key==="Escape"&&(m(s),R.currentTarget.blur(),p(!1))},[s,C,e]),T=c.exports.useCallback(R=>{m(R.target.value)},[]),I=c.exports.useCallback(R=>(R.stopPropagation(),p(!0),!1),[]),D=c.exports.useCallback(()=>{S.show()},[S]),N=c.exports.useCallback(()=>{S.hide()},[S]),A=c.exports.useMemo(()=>u?s:y(s),[y,u,s]),P=c.exports.useMemo(()=>u?h:y(h),[h,y,u]);return w("g",{css:p1,id:e,style:{outline:"none"},transform:`translate(${t}, ${n})`,onMouseEnter:D,onMouseLeave:N,children:[d("line",{x1:"0",x2:"0",y1:o===-1?10:0,y2:o===-1?28:-18,stroke:i,strokeWidth:S.isActive?"7px":"1px"}),d("text",{ref:a,className:"peaks-text",x:"0",y:o===-1?28:-12,dy:"0",dx:"0.35em",fill:"transparent",fontSize:"10px",fontWeight:"100",style:{position:"absolute"},children:A}),d("foreignObject",{x:"0",y:o===-1?16:-22,dy:"0.1em",dx:"0.35em",width:g.width+20,height:"40px","data-no-export":"true",children:d("div",{style:{width:g.width+20,height:"100%",paddingRight:5},children:d("input",{onClick:I,className:u?"input-over":"notification-input-normal",style:{width:"inherit",border:u?`1px solid ${i}`:"0",opacity:r?1:.2,userSelect:"none",color:i},value:P,onKeyDown:E,onChange:T,type:"number",disabled:!r})})})]})}function f1(){const{data:e,activeSpectrum:t,verticalAlign:n,displayerKey:o,xDomains:s}=$(),{scaleX:i,scaleY:r}=ge(),l=c.exports.useMemo(()=>{const a=p=>{const h=e.findIndex(m=>m.id===p);return gs(n,{index:h})};return e&&(()=>{const p=[...e];return t?p.sort((h,m)=>h.id===t.id?1:m.id===t.id?-1:0):p})().filter(p=>p.display.isVisible===!0&&s[p.id]).filter(kn).map(p=>{var h;return((h=p.peaks)==null?void 0:h.values)&&p.display.isPeaksMarkersVisible&&f("g",{transform:`translate(0,-${a(p.id)})`,children:p.peaks.values.map(({x:m,y:g,id:x})=>f(h1,{x:i()(m),y:r(p.id)(g)-5,sign:Math.sign(g),id:x,value:m,color:"#730000",nucleus:p.info.nucleus,isActive:t==null?!1:t.id===p.id},x))},p.id)})},[e,n,t,s,i,r]);return f("g",{className:"peaks",clipPath:`url(#${o}clip-chart-1d)`,children:l})}const m1={info:{originFrequency:400}};function g1(){var x;const{displayerKey:e,verticalAlign:t,height:n,margin:o}=$(),{info:s}=Ce(m1),{highlight:i}=Tn(),{scaleX:r}=ge();if(((x=i.sourceData)==null?void 0:x.type)!==ue.DATABASE)return null;const l=n-o.bottom,a=l/4,{ranges:u}=i.sourceData.extra||[];let p=[0,0];const h=u.map(y=>{const{from:S,to:v}=y,C=Math.abs(S-v)/2,E=S-C,T=v+C,I=Fl([y],{frequency:s.originFrequency,from:E,to:T,nbPoints:256}),D=yt(I.y);return p[0]=D[0]<p[0]?D[0]:p[0],p[1]=D[1]>p[1]?D[1]:p[1],{data:I,from:E,to:T}},[]),m=Fo({height:a,margin:{top:0,bottom:0},verticalAlign:t,yDomain:p}),g=h.map(({data:{x:y,y:S},from:v,to:C})=>{let E=`M ${r()(y[0])} ${m(S[0])} `;return E+=y.slice(1).reduce((T,I,D)=>(T+=` L ${r()(I)} ${m(S[D+1])}`,T),""),{path:E,from:v,to:C}},[]);return f("g",{clipPath:`url(#${e}clip-chart-1d)`,className:"resurrected-database-ranges",width:"100%",height:"100%",children:g.map(({path:y,from:S,to:v},C)=>_("g",{children:[f("g",{transform:`translate(${r()(v)},0)`,children:f("rect",{x:"0",width:Math.abs(r()(v)-r()(S)),height:"100%",fill:"#ff6f0057"})}),f("path",{transform:`translate(0,${l-a*2})`,stroke:"black",fill:"none",d:y})]},`${C}`))})}const x1=M`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,b1=M`
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
`;function y1(e){const{show:t=!0,showGrid:n=!1,mode:o,label:s}=e,{xDomain:i,height:r,width:l,margin:a}=$(),{scaleX:u}=Zi(),p=c.exports.useRef(null),h=c.exports.useRef(null),m=s||(o==="RTL"?"\u03B4 [ppm]":"time [s]");return c.exports.useEffect(()=>{if(!t||!u)return;const g=Os(u().domain(i)).ticks(8).tickFormat(ni("0")),x=Os(u().domain(i)).ticks(50).tickSize(-(r-a.top-a.bottom)).tickFormat(()=>"");Do(p.current).call(g),Do(h.current).call(x)},[r,a.bottom,a.top,u,t,i]),!l||!r||!u?null:w(Ve,{children:[t&&d("g",{className:"x",css:x1,transform:`translate(0,${r-a.bottom})`,ref:p,children:d("text",{fill:"#000",x:l-10,y:"30",dy:"0.70em",textAnchor:"end",children:m})}),n&&d("g",{css:b1,className:"grid",ref:h,transform:`translate(0,${r-a.bottom})`})]})}function v1(e,t){if(!e&&!Array.isArray(e))return null;let n=[],o=0,s=k1(e,t);for(const r of e)for(const l of r.signals){const i=l,{id:a}=i,u=G(i,["id"]);if(u.js){n.push(b({id:`${r.id}${a}`},u));const p=C1(u.js);o=p>o?p:o}}return{signals:n,jCouplingMax:o,links:s}}function C1(e){let t=-1/0;for(const{coupling:n}of e)t=n>t?n:t;return t}function S1(e){const t=[];for(let n of e)for(const{delta:o,js:s}of n.signals)for(const{coupling:i}of s||[])t.push({coupling:i,delta:o});return t}function Zr(e){const{delta:t}=e;return{id:q(),from:t,to:t,couplings:[e]}}function k1(e,t=0){const n=S1(e).sort((l,a)=>l.coupling-a.coupling);if(!n||n.length===0)return[];const o=[Zr(n[0])];let s=0,i=s,r=1;for(;r<n.length;){const l=n[r];Math.abs(n[i].coupling-l.coupling)<t?(o[s].couplings.push(l),l.delta>o[s].to?o[s].to=l.delta:l.delta<o[s].from&&(o[s].from=l.delta),r++):Math.abs(n[r-1].coupling-l.coupling)<t?i=r-1:(s++,o[s]=Zr(n[r]),i=r,r=r+1)}return o}const xd=c.exports.createContext({scaleY:null,height:0,maxValue:0}),w1=xd.Provider;function xs(){const e=c.exports.useContext(xd);if(!e.scaleY)throw new Error("scale cannot be null");return e}const E1=c.exports.forwardRef((e,t)=>{const{x:n,y:o,height:s,showGrid:i,ticks:r}=e;return _("g",{ref:t,transform:`translate(${n}, ${o})`,children:[f("line",{y2:s,x1:15,x2:15,stroke:"black"}),r.map(({label:l,position:a},u)=>_("g",{children:[i&&e.width&&f("line",{y1:a,y2:a,x1:15,x2:e.width-n,stroke:"lightgray"}),f("line",{y1:a,y2:a,x1:15,x2:10,stroke:"black"}),f("text",{y:a,dominantBaseline:"middle",textAnchor:"end",children:l})]},u+l+a))]})});function A1(e){const i=e,{scale:t}=i,n=G(i,["scale"]),o=c.exports.useRef(null),s=Lp(t,"vertical",o);return f(E1,k(b({},n),{ticks:s,ref:o}))}function T1(){const{width:e,margin:t}=$(),{height:n,scaleY:o}=xs();return o?f("svg",{style:{overflow:"visible"},height:n+20,width:60,children:f(A1,{x:20,y:0,scale:o,height:n,showGrid:!0,width:e-t.right})}):null}function D1(e){const{links:t}=e,{scaleX:n}=ge(),{scaleY:o,maxValue:s}=xs(),i=c.exports.useCallback(r=>{if(!o)return"";const{from:l,to:a,couplings:u}=r;let p=[];for(const h of u)p.push(`M${n()(l)},${o(h.coupling)} L${n()(a)},${o(h.coupling)}`);return p.join(" ")},[n,o]);return f("g",{className:"js-coupling-links",children:t.filter(r=>r.couplings.length>1).map(r=>f("path",{d:i(r),style:{stroke:`hsl(${r.couplings[0].coupling*360/s},100%,50%)`},strokeWidth:"1"},r.id))})}function I1({value:e}){const{scaleY:t,maxValue:n}=xs(),[o,s]=c.exports.useState(!1);return t?_("g",{className:"coupling",style:{transform:`translate(0px,${t(e)}px)`},children:[f("circle",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),cx:0,cy:0,r:4,fill:`hsl(${e*360/n},100%,${o?45:50}%)`,pointerEvents:"all"}),o&&_("g",{style:{transform:"translate(0px,15px)"},children:[f("text",{pointerEvents:"none",stroke:"white",strokeWidth:"0.6em",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`}),f("text",{pointerEvents:"none",stroke:"black",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`})]})]}):null}function P1(e){const{scaleX:t}=ge(),{height:n}=xs();return f("g",{className:"js-coupling",children:e.signals.map(o=>{var s;return _("g",{transform:`translate(${t()(o.delta)},0)`,children:[f("line",{x1:"0",y1:n,x2:"0",y2:"0",stroke:"black",strokeWidth:"1"}),(s=o.js)==null?void 0:s.map(i=>f(I1,{value:i.coupling},`${i.coupling}`))]},o.id)})})}const N1=50;function R1(e){const{signals:t,links:n}=e;return _("g",{className:"j-graph",transform:`translate(0,${N1})`,children:[f(T1,{}),f(D1,{links:n}),f(P1,{signals:t})]})}const M1={ranges:{}},_1=c.exports.memo(R1);function F1(){const e=le(),{height:t,toolOptions:{data:{showJGraph:n}},activeTab:o}=$(),s=t/4,{ranges:i}=Ce(M1),r=c.exports.useMemo(()=>(B(e.current,`formatting.panels.ranges.[${o}]`)||Ui(o)).jGraphTolerance,[o,e]),{signals:l,jCouplingMax:a,links:u}=c.exports.useMemo(()=>v1(i.values,r)||{signals:[],jCouplingMax:0,links:[]},[r,i.values]),p=c.exports.useMemo(()=>{const m=a+a*.1;return Je().range([s,0]).domain([0,m])},[s,a]),h=c.exports.useMemo(()=>({scaleY:p,height:s,maxValue:a}),[s,p,a]);return n?f(w1,{value:h,children:f(_1,{signals:l,links:u})}):null}function bd(e){const{x:t="initial",y:n="initial",onDelete:o=()=>null,fill:s="#c81121"}=e;return _("svg",{className:"delete-button",x:t,y:n,onClick:o,"data-no-export":"true",children:[f("rect",{rx:"5",width:"16",height:"16",fill:s}),f("line",{x1:"5",x2:"10",y1:"8",y2:"8",stroke:"white",strokeWidth:"2"})]})}const Ds={common:M`
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
  `};function L1({rangeData:e,columnKey:t}){const{from:n,to:o}=e,s=re([t]),{scaleX:i}=ge(),r=X(),l=c.exports.useCallback(()=>{r({type:zi,colKey:t})},[t,r]),a=c.exports.useCallback(u=>{r({type:cu,payload:k(b(b({},e),u),{columnKey:t})})},[t,r,e]);return d("g",k(b({},s.onHover),{css:[Ds.common,s.isActive?Ds.Highlighted:Ds.hover],children:d(Ki,{tag:"svg",onEnd:a,initialPosition:{x2:i()(n),x1:i()(o)},children:(u,p)=>w(Ve,{children:[w("g",{transform:"translate(0,25)",children:[d("rect",{x:"0",width:p-u,height:"6",className:"range-area",fill:"green"}),d("text",{textAnchor:"middle",x:(p-u)/2,y:"-5",fontSize:"12",fill:"red",fontWeight:"bolder",fillOpacity:s.isActive?1:.6,children:t})]}),d(bd,{x:-20,y:10,onDelete:l})]})})}))}function O1({activeTab:e,spectraAnalysis:t,displayerKey:n}){const o=c.exports.useMemo(()=>{const{options:{columns:i}}=t[e]||{options:{columns:{}}};return i},[e,t]),s=c.exports.useMemo(()=>Object.keys(o).map(i=>i,[]),[o]);return!s||s.length===0?null:f("g",{clipPath:`url(#${n}clip-chart-1d)`,children:s.map(i=>f(L1,{columnKey:i,rangeData:o[i]},i))})}const $1=c.exports.memo(O1);function H1(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=$();return f($1,{activeTab:e,spectraAnalysis:t,displayerKey:n})}function qi(e,t){return t.filter(n=>Object.keys(e.data).filter(o=>o===n))}const Kn=[{label:"massive (m)",value:"m",multiplicity:null},{label:"singlet (s)",value:"s",multiplicity:1},{label:"doublet (d)",value:"d",multiplicity:2},{label:"triplet (t)",value:"t",multiplicity:3},{label:"quartet (q)",value:"q",multiplicity:4},{label:"quintet (i)",value:"i",multiplicity:5},{label:"sextet (x)",value:"x",multiplicity:6},{label:"septet (p)",value:"p",multiplicity:7},{label:"octet (o)",value:"o",multiplicity:8},{label:"nonet (n)",value:"n",multiplicity:9}];function z1(e){const t=Kn.find(n=>e===n.label||e===n.value);return t?t.multiplicity:null}function V1(e,t=[]){if(e===void 0||e.length===0)return!1;const n=Kn.find(o=>o.value===e||o.label===e);return n&&!t.includes(n.value)&&!t.includes(n.label)}function Ji(e,t=[]){return e===void 0||e.length===0?!1:!e.split("").find(n=>!V1(n,t))}function Vt(e){var t,n;return e.length===1?(t=Kn.find(o=>o.value===e))==null?void 0:t.label:(n=Kn.find(o=>o.label===e))==null?void 0:n.value}function qn(e){return e.length>1&&(e=Vt(e)),Ji(e,["m","s"])}function j1(e,t){if(e===void 0||e===0||t===void 0)return[1];let n=2*t+1,o=[];for(let s=0;s<n-1;s++)o.push(1);for(let s=0;s<e-1;s++){let i=o.slice();for(let r=1;r<n;r++){for(let l=0;l<o.length-1;l++)i[l+r]+=o[l];i.push(1)}o=i.slice()}return o}const qs=["red","green","blue","magenta"];function Ur({signal:e,startY:t,levelHeight:n}){const{scaleX:o}=ge();return f("line",{x1:o()(e.delta),y1:t,x2:o()(e.delta),y2:t+n,stroke:qs[0]},`startLevelNode_${e.id}`)}function Kr({signal:e,startY:t,levelHeight:n,fontSize:o,showLabels:s}){const{scaleX:i}=ge();return f("text",{textAnchor:"middle",x:i()(e.delta),y:t+n/2,fontSize:o,lengthAdjust:"spacing",fill:"black",visibility:s?"visible":"hidden",children:e.multiplicity},`multiplicityString_${e.id}`)}function B1({nodesData:e,levelHeight:t,startY:n,signalID:o,labelOptions:s,showLabels:i}){const{scaleX:r}=ge(),l=c.exports.useCallback(({startX:a,_startX:u,ratio:p,multiplicityIndex:h,color:m})=>{const g=2*h+2,x=n+g*t,y=n+(g+1)*t;return _("g",{children:[f("text",{textAnchor:"middle",x:r()(u)+s.distance,y:y+2*(t/3),fontSize:s.fontSize,fill:m,visibility:i?"visible":"hidden",children:p}),f("line",{x1:r()(a),y1:x,x2:r()(u),y2:y,stroke:m}),f("line",{x1:r()(u),y1:y,x2:r()(u),y2:y+t,stroke:m})]},`${h}_${o}_${a}_${u}_${p}`)},[o,s.distance,s.fontSize,r,i,n,t]);return f(et,{children:e==null?void 0:e.map(a=>l(a))})}function X1(e,t){function n(o,s,i,r){var h;if(!e.multiplicity)return null;if(o>=e.multiplicity.length)return i;const l=qs[o%qs.length],a=s.findIndex(m=>m===o),u=B(t,"info.originFrequency",0),p=a>=0&&u>0&&((h=e==null?void 0:e.js)==null?void 0:h[a])?e.js[a].coupling/u:null;if(!p)i.push({startX:r,_startX:r,ratio:1,multiplicityIndex:o,color:l}),n(o+1,s,i,r);else{const m=e.multiplicity||"",g=j1(z1(m.charAt(o)),.5);let x=g.length%2===0?r-g.length/2*p+p/2:r-(g.length/2-.5)*p;g.forEach((y,S)=>{S>0&&(x+=p),i.push({startX:r,_startX:x,ratio:y,multiplicityIndex:o,color:l}),n(o+1,s,i,x)})}return i}return n}const qr={cursor:"default",opacity:.6,strokeWidth:1};function Jr(e){var t;return[e.id].concat(((t=e.assigned)==null?void 0:t.x)||[])}function yd({rangeFrom:e,rangeTo:t,signal:n,labelOptions:o={distance:10,fontSize:11}}){const{scaleX:s,scaleY:i}=ge(),{data:r,activeSpectrum:l,toolOptions:{selectedTool:a},width:u}=$(),p=dt(n.id),h=re(Jr(p),{type:ue.SIGNAL,extra:Jr(p)}),m=c.exports.useMemo(()=>B(r,`${l==null?void 0:l.index}`,null),[l,r]),[g,x]=c.exports.useState({x1:n.delta,x2:n.delta}),[y,S]=c.exports.useState({width:0,height:0,levelHeight:0}),[v,C]=c.exports.useState(!1),[E,T]=c.exports.useState(!1);c.exports.useEffect(()=>{var z;const A=!Ji(n.multiplicity,["m"]),P=A?Math.abs(s()(g.x1)-s()(g.x2)):Math.abs(s()(g.x1)-s()(g.x2))+o.distance,R=A?P/3:P/2,H=((z=n==null?void 0:n.multiplicity)==null?void 0:z.length)||0,L=A?R/(H+2):R/(2*H+2);S({width:P,height:R,levelHeight:L}),C(A)},[o.distance,s,n.multiplicity,g.x1,g.x2]),c.exports.useEffect(()=>{y.width/u>=.1?T(!0):T(!1)},[y.width,u]);const I=c.exports.useMemo(()=>{let A;return m.data.x.forEach((P,R)=>{P>=e&&P<=t&&(!A||m.data.re[R]>A)&&(A=m.data.re[R])}),i(m.id)(A)-y.height-30},[m.data.x,m.data.re,m.id,i,y.height,e,t]),D=c.exports.useMemo(()=>{if(n.multiplicity){const A=X1(n,m),P=n.multiplicity.split("").map((R,H)=>qn(R)?H:void 0).filter(R=>R!==void 0);return A(0,P,[],n.delta)}return[]},[n,m]);c.exports.useEffect(()=>{if(v)x({x1:e,x2:t});else{const A={x1:n.delta,x2:n.delta};D.forEach(P=>{P.startX<A.x1&&(A.x1=P.startX),P.startX>A.x2&&(A.x2=P.startX),P._startX<A.x1&&(A.x1=P._startX),P._startX>A.x2&&(A.x2=P._startX)}),x(A)}},[v,e,t,n.delta,n.multiplicity,D]);const N=c.exports.useMemo(()=>{const{levelHeight:A}=y,P=I;let R=P;const H=I+A;if(R=H,R+=A,v){const L=s()(e),z=s()(t),V=`M ${L} ${R+A} ${L} ${R} ${s()(n.delta)} ${R} ${z} ${R} ${z} ${R+A}`;return w("g",{children:[d(Kr,{signal:n,startY:P,levelHeight:A,fontSize:o.fontSize,showLabels:E}),d(Ur,{signal:n,startY:H,levelHeight:A}),d("path",{d:V,stroke:"blue",fill:"none"})]})}return w("g",{children:[d(Kr,{signal:n,startY:P,levelHeight:A,fontSize:o.fontSize,showLabels:E}),d(Ur,{signal:n,startY:H,levelHeight:A}),d(B1,{nodesData:D,signalID:D,showLabels:E,startY:I,labelOptions:o,levelHeight:A})]})},[y,I,v,n,o,E,D,s,e,t]);return d("g",{css:h.isActive||p.isActive?k(b({},qr),{opacity:1,strokeWidth:1.5}):qr,onMouseEnter:()=>{p.show("x"),h.show()},onMouseLeave:()=>{p.hide(),h.hide()},onClick:a&&a===F.editRange.id?()=>null:A=>{A.shiftKey&&(A.stopPropagation(),p.setActive("x"))},children:N})}function Y1({range:e}){return(e==null?void 0:e.signals)&&e.signals.length>0&&e.signals.map(t=>f(yd,{rangeFrom:e.from,rangeTo:e.to,signal:t},t.id))}const G1=c.exports.memo(Y1);function W1(){const{toolOptions:{data:{tempRange:e}}}=$();return f(G1,{range:e})}const Z1=M`
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
`,U1=M`
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
`;function K1({rangeData:e,showMultiplicityTrees:t,selectedTool:n,startEditMode:o}){var D;const{id:s,from:i,to:r,integration:l,signals:a}=e,u=je(),p=dt(s),h=re([p.id].concat(((D=p.assigned)==null?void 0:D.x)||[]).concat(qi(u,a.map(N=>N.id))),{type:ue.RANGE,extra:{id:s}}),{scaleX:m}=ge(),g=X(),[x,y]=c.exports.useState(!1),[S,v]=c.exports.useState(!1);c.exports.useEffect(()=>{n&&n===F.editRange.id?v(!0):v(!1)},[n]),c.exports.useEffect(()=>{y(!ja(e))},[e]);const C=c.exports.useCallback(N=>{g({type:Gc,data:k(b({},e),{from:m().invert(N.x2),to:m().invert(N.x1)})})},[g,e,m]),E=c.exports.useCallback(()=>{p.show("x"),h.show()},[p,h]),T=c.exports.useCallback(()=>{p.hide(),h.hide()},[p,h]),I=c.exports.useCallback(N=>{n===F.rangesPicking.id&&N.shiftKey&&!S&&p.setActive("x")},[p,S,n]);return w("g",{"data-test-id":"range",style:{outline:"none"},css:S||h.isActive||p.isActive?U1:Z1,onMouseEnter:E,onMouseLeave:T,onClick:I,children:[d(Ki,{tag:"svg",initialPosition:{x1:m()(r),x2:m()(i)},onEnd:C,children:(N,A)=>w("g",{transform:"translate(0,10)",children:[d("rect",{"data-no-export":"true",x:"0",width:A-N,height:"6",className:"range-area",fill:"green",fillOpacity:!x||h.isActive||p.isActive?1:.4}),d("text",{textAnchor:"middle",x:(A-N)/2,y:"20",fontSize:"10",fill:"red",fillOpacity:!x||h.isActive||p.isActive?1:.6,children:l!==void 0?l.toFixed(2):""})]})}),o?d(W1,{}):t&&a&&a.length>0&&a.map(N=>d(yd,{rangeFrom:i,rangeTo:r,signal:N},N.id))]},s)}function q1({range:e}){const t=fd(e);return f("path",{className:"line",stroke:"black",strokeWidth:"1",fill:"none",d:t})}function J1({ranges:e,displayerKey:t,selectedTool:n,editRangeID:o,showMultiplicityTrees:s,showRangesIntegrals:i}){var r;return f("g",{clipPath:`url(#${t}clip-chart-1d)`,children:(r=e==null?void 0:e.values)==null?void 0:r.map(l=>_(c.exports.Fragment,{children:[f(K1,{rangeData:l,selectedTool:n,showMultiplicityTrees:s,startEditMode:!!(o&&o===l.id)}),i&&f(q1,{range:l})]},l.id))})}const Q1=c.exports.memo(J1),eC={ranges:{}};function tC(){const{displayerKey:e,toolOptions:{selectedTool:t,data:{tempRange:n,showMultiplicityTrees:o,showRangesIntegrals:s}}}=$(),{ranges:i}=Ce(eC);return f(Q1,{ranges:i,showMultiplicityTrees:o,showRangesIntegrals:s,selectedTool:t,displayerKey:e,editRangeID:(n==null?void 0:n.id)||""})}const nC=M`
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
`;function oC(){const{toolOptions:e}=$(),{scaleX:t}=ge(),n=X(),o=c.exports.useCallback(i=>{n({type:Xc,id:i})},[n]),s=c.exports.useMemo(()=>e.data.baseLineZones,[e]);return d(Ve,{children:s.length>0&&d("g",{children:s.map(i=>w("g",{transform:`translate(${t()(i.to)},0)`,css:nC,children:[d(bd,{x:-20,y:10,onDelete:()=>o(i.id)}),d("rect",{x:"0",width:`${t()(i.from)-t()(i.to)}`,className:"zone-area"})]},i.id))})})}function sC({mode:e,width:t,height:n,margin:o,displayerKey:s}){return _("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-1d`,children:f("rect",{width:`${t-o.left-o.right}`,height:`${n}`,x:`${o.left}`,y:`${0}`})})}),f(d1,{}),f(c1,{}),f(f1,{}),f(tC,{}),f(F1,{}),f(H1,{}),f(oC,{}),f(qv,{}),f(g1,{}),f("g",{className:"container",style:{pointerEvents:"none"},children:f(y1,{showGrid:!0,mode:e})})]})}const Qr=M`
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
`;function iC({margin:e,width:t,height:n,activeSpectrum:o,spectrum:s,activeTab:i}){var g,x,y,S;let r=c.exports.useContext(pt);const{startX:l,endX:a,step:u}=c.exports.useContext(Tt),{scaleX:p}=ge(),h=Be(i),m=c.exports.useCallback(v=>{if(s){const C=Cn(s),E=We(C.x,p().invert(v));return C.y[E]}return 1},[s,p]);return!r||r.y<e.top||r.x<e.left||r.x>t-e.right||r.y>n-e.bottom?d("div",{css:Qr}):w("div",{css:Qr,children:[d(Op,{}),w("div",{children:[d("span",{className:"label",children:" \u{1D6C5}: "}),d("span",{className:"value",children:h(p().invert(r.x))}),d("span",{className:"unit",children:"ppm"}),o&&((g=s==null?void 0:s.info)==null?void 0:g.originFrequency)&&w(Ve,{children:[w("span",{className:"value",children:["\xA0(",h(p().invert(r.x)*((x=s==null?void 0:s.info)==null?void 0:x.originFrequency),"hz")]}),d("span",{className:"unit",children:"Hz"}),d("span",{className:"value",children:") "})]})]}),u==="brushing"&&w("div",{children:[d("span",{className:"label",children:" \u0394ppm: "}),d("span",{className:"value",children:(p().invert(l)-p().invert(a)).toPrecision(6)})]}),o&&w(c.exports.Fragment,{children:[((y=s==null?void 0:s.info)==null?void 0:y.originFrequency)&&u==="brushing"&&w("div",{children:[d("span",{className:"label",children:" \u0394Hz: "}),d("span",{className:"value",children:((p().invert(l)-p().invert(a))*((S=s==null?void 0:s.info)==null?void 0:S.originFrequency)).toPrecision(5)})]}),u==="brushing"&&w("div",{children:[d("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[(m(l)/(m(a)||Number.MIN_VALUE)*100).toFixed(2),"%"]})]})]}),o&&w(c.exports.Fragment,{children:[d("div",{className:"separator"}),d($p,{}),w("div",{children:[d("span",{className:"label",children:"Intensity: "}),d("span",{className:"value yvalue",children:h(m(r.x))})]})]})]})}const rC=c.exports.memo(iC);function lC(){const{margin:e,width:t,height:n,activeSpectrum:o,activeTab:s}=$(),i=Ce(null);return d(rC,{margin:e,width:t,height:n,activeSpectrum:o,spectrum:i,activeTab:s})}const Ao={container:{position:"absolute",left:"10px",top:"10px"},value:{width:"67px",display:"inline-block",margin:"0 5px",fontSize:"12px"},colorIndicator:{width:"10px",height:"1px",borderBottom:"2px solid",display:"inline-block",marginBottom:"3px"},name:{fontSize:"12px"}};function aC({datum:e}){const{scaleX:t}=Zi(),n=c.exports.useContext(pt);if(!t||!n)return null;const o=We(e.x,t().invert(n.x));return f("span",{style:Ao.value,children:e.y[o]})}function cC(){const{data:e,activeTab:t,xDomains:n}=$(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{function r(l){s(l)}return pe.on("showYSpectraTrackers",r),()=>{pe.off("showYSpectraTrackers",r)}},[]);const i=c.exports.useMemo(()=>o&&e.map(r=>r.display.isVisible&&n[r.id]&&r.info.nucleus===t&&_("div",{style:{display:"block"},children:[f("span",{style:k(b({},Ao.colorIndicator),{borderColor:r.display.color})}),f(aC,{datum:Cn(r)}),f("span",{style:Ao.value,children:r.display.name})]},r.id),[]),[t,e,o,n]);return o?f("div",{style:Ao.container,children:i}):null}const J={radius:10,borderColor:"#1f1f1f",strokeWidth:1,fillOpacity:0,SVGPadding:1};function uC(){const{height:e,width:t,margin:n,activeSpectrum:o,data:s,mode:i,toolOptions:{selectedTool:r},verticalAlign:l}=$(),{scaleX:a,scaleY:u}=ge();let p=c.exports.useContext(pt);const h=c.exports.useContext(Tt),[m,g]=c.exports.useState();return c.exports.useEffect(()=>{const x=o?gs(l,{index:(o==null?void 0:o.index)||1,align:"center"}):0,S=((v,C)=>{if(o&&p&&r===F.peakPicking.id){const E=[a().invert(C.x-v),a().invert(C.x+v)].sort((P,R)=>P-R),T=s.find(P=>P.id===o.id);if(!T)throw new Error("Unreachable");const I=Cn(T),D=I.x.findIndex(P=>P>=E[1])-1,N=I.x.findIndex(P=>P>=E[0]),A=I.y.slice(N,D);if(A&&A.length>0){const P=Ll(A),R=A.findIndex(L=>L===P),H=I.x[N+R];return{x:a()(H),y:u(o.id)(P)-x,xIndex:N+R}}}return null})(10,p);g(S)},[o,s,i,p,a,u,r,l]),r!==F.peakPicking.id||!m||!o||h.step==="brushing"||!p||p.y<n.top||p.left<n.left||p.x>t-n.right||p.y>e-n.bottom?null:f("div",{style:{cursor:"crosshair",transform:`translate(${m.x}px, ${m.y}px)`,transformOrigin:"top left",position:"absolute",top:-(J.radius+J.SVGPadding),left:-(J.radius+J.SVGPadding),pointerEvents:"none",overflow:"visible"},children:_("svg",{width:J.radius*2+J.SVGPadding*2,height:J.radius*2+J.SVGPadding*2,children:[f("circle",{cx:J.radius+J.SVGPadding,cy:J.radius+J.SVGPadding,r:J.radius,stroke:J.borderColor,strokeWidth:J.strokeWidth,fillOpacity:J.fillOpacity}),f("line",{x1:J.radius+J.SVGPadding,y1:J.SVGPadding,x2:J.radius+J.SVGPadding,y2:J.radius*2+J.SVGPadding,stroke:J.borderColor,strokeWidth:J.strokeWidth}),f("line",{x1:J.SVGPadding,y1:J.radius+J.SVGPadding,x2:J.radius*2+J.SVGPadding,y2:J.radius+J.SVGPadding,stroke:J.borderColor,strokeWidth:J.strokeWidth})]})},"peakPointer")}const dC={transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",width:1,backgroundColor:"red"};function pC(){const{height:e,toolOptions:{selectedTool:t,data:{pivot:n}}}=$(),{scaleX:o}=ge();return F.phaseCorrection.id!==t?null:f("div",{style:k(b({},dC),{transform:`translate(${o()(n.value)}px, 0px)`,height:e})})}const hC={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-30px",pointerEvents:"none",overflow:"visible",userSelect:"none"};function fC(){const{height:e,width:t,margin:n,data:o,activeSpectrum:s}=$(),{scaleX:i}=ge(),r=c.exports.useContext(pt),l=c.exports.useContext(Tt),a=c.exports.useMemo(()=>s?o.find(m=>m.id===s.id):null,[s,o]),u=Be(a==null?void 0:a.info.nucleus),p=c.exports.useCallback(h=>{if(a){const m=i().invert(h);return u(m)}},[a,u,i]);return!s||l.step==="brushing"||!r||r.y<n.top||r.x<n.left||r.x>t-n.right||r.y>e-n.bottom?null:f("div",{style:k(b({},hC),{transform:`translate(${r.x}px, ${r.y}px)`}),children:f("span",{children:p(r.x)})},"xLabelPointer")}function mC({emptyText:e=void 0}){const{current:{display:{general:t}}}=le(),n=$(),{toolOptions:{selectedTool:o},isLoading:s,data:i,mode:r,width:l,height:a,margin:u,activeSpectrum:p,xDomain:h,xDomains:m,yDomain:g,yDomains:x,verticalAlign:y,displayerKey:S}=n,v=X(),C=fe(),E=se(),[T,I]=c.exports.useReducer(kv,id);c.exports.useEffect(()=>{h.length>0&&g.length>0&&l&&a&&I({type:sd,payload:{yDomain:g,yDomains:x,xDomain:h,xDomains:m,margin:u,height:a,width:l,verticalAlign:y,mode:r}})},[a,u,r,y,l,h,m,g,x]);const D=c.exports.useCallback(R=>{const H=()=>{if(!T.scaleX||!T.scaleY)return;const{startX:L,endX:z}=R,V=T.scaleX().invert(L),W=T.scaleX().invert(z);pe.emit("brushEnd",k(b({},R),{range:[V,W].sort((O,j)=>O-j)}))};if(R.altKey)switch(o){case F.rangesPicking.id:{t!=null&&t.disableMultipletAnalysis||C.show(f(Gv,b({data:i,activeSpectrum:p,scaleX:T.scaleX},R)),{onClose:()=>{C.close()}});break}}else if(R.shiftKey)switch(o){case F.integral.id:v(b({type:vc},R));break;case F.rangesPicking.id:{const[L,z]=Zt(n,{startX:R.startX,endX:R.endX});if(!p)break;const{data:{x:V}}=n.data[p.index],{fromIndex:W,toIndex:O}=Jn(V,{from:L,to:z});O-W<=Po?v({type:Zc,payload:b({},R)}):E.error(`Advanced peak picking only available for area up to ${Po} points`);break}case F.multipleSpectraAnalysis.id:v(b({type:au},R));break;case F.peakPicking.id:v(b({type:fc},R));break;case F.baseLineCorrection.id:v({type:Bc,zone:{from:R.startX,to:R.endX}});break;case F.exclusionZones.id:v({type:vu,payload:{from:R.startX,to:R.endX}});break;default:H();break}else switch(o){default:o!=null&&v(b({type:cs},R));break}},[T,o,t==null?void 0:t.disableMultipletAnalysis,C,i,p,v,n,E]),N=c.exports.useCallback(()=>{v({type:xn,zoomType:Bn.STEP_HORIZONTAL})},[v]),A=c.exports.useCallback(R=>{v({type:as,event:R,selectedTool:o})},[v,o]),P=c.exports.useCallback(R=>{const H=()=>{if(!T.scaleX)return;const L=T.scaleX().invert(R.x);pe.emit("mouseClick",k(b({},R),{xPPM:L}))};if(R.shiftKey)switch(o){case F.peakPicking.id:v({type:hc,mouseCoordinates:R});break;case F.editRange.id:H();break}else switch(o){case F.phaseCorrection.id:v({type:Li,position:R.x});break}},[v,T,o]);return f(wv,{value:T,children:f(si,{children:({height:R,width:H})=>f(od,{height:R,width:H,children:_("div",{style:{height:"100%",position:"relative"},children:[f(Gu,{isLoading:s,emptyText:e}),T.scaleX&&T.scaleY&&i&&i.length>0&&f(ra,{onBrush:D,onDoubleClick:N,onClick:P,onZoom:A,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:_(la,{style:{width:"100%",height:"100%",position:"absolute"},children:[f(cC,{}),f(Wu,{}),f(Eo,{brushType:Ie.X}),f(fC,{}),f(uC,{}),f(pC,{}),f(lC,{}),f(sC,{width:l,height:a,margin:u,mode:r,displayerKey:S})]})})]})})})})}const go={container:{margin:"25px"},header:{backgroundColor:"#ffffff",padding:"20px",borderRadius:"10px",fontSize:"30px",textAlign:"center"},title:{textDecoration:"underline"},body:{marginTop:"10px",whiteSpace:"pre-wrap",backgroundColor:"white",padding:"20px",borderRadius:"10px",color:"red"}};function gC(e){return _("div",{style:go.container,children:[f("p",{style:go.header,children:"Something went wrong."}),_("details",{style:go.body,children:[f("p",{style:go.title,children:e.error.message}),e.error.stack]})]})}const xC={success:{base:"#2dd36f",shade:"#28ba62",tint:"#42d77d"},danger:{base:"#eb445a",shade:"#cf3c4f",tint:"#ed576b"},warning:{base:"#ffc409",shade:"#e0ac08",tint:"#ffca22"},medium:{base:"#92949c",shade:"#808289",tint:"#9d9fa6"},light:{base:"#f4f5f8",shade:"#d7d8da",tint:"#f5f6f9"}},bC={xSmall:{fontSize:"0.75rem",padding:"0.15rem 0.3rem",borderRadius:"0.15rem"},small:{fontSize:"0.8rem",padding:"0.25rem 0.5rem",borderRadius:"0.2rem"},medium:{fontSize:"1rem",padding:"0.375rem 0.75rem",borderRadius:"0.25rem"},large:{fontSize:"1.25rem",padding:"0.5rem 1rem",borderRadius:"0.3rem"}};function yC(e){const{borderColor:t,fill:n,backgroundColor:o,color:s}=e;switch(n){case"solid":return M`
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
      `}}const vC={button:e=>{const{size:t,backgroundColor:n,color:o,borderRadius:s}=e,i=M`
      display: flex;
      flex-direction: row;
      border-width: 1px;
      align-items: center;
    `,r=yC(e),l=M`
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
    `;return M([i,bC[t],r,l,{borderRadius:s}])}},de=e=>{const p=e,{onClick:t,size:n="small",color:o={base:"black",hover:"white"},backgroundColor:s={base:"white",hover:"black",active:"black"},borderColor:i="transparent",fill:r,borderRadius:l,style:a={}}=p,u=G(p,["onClick","size","color","backgroundColor","borderColor","fill","borderRadius","style"]);return d("button",k(b({type:"button",onClick:t,css:[vC.button({size:n,backgroundColor:s,color:o,borderColor:i,fill:r,borderRadius:l}),a]},u),{children:w("span",{style:{flex:1},children:[" ",e.children]})}))};function Qi(e){const p=e,{colorTheme:t}=p,n=G(p,["colorTheme"]),{base:o,shade:s,tint:i}=xC[e.colorTheme],h=n,{color:r={base:s,hover:"white"},backgroundColor:l={base:o,hover:s,active:i},fill:a="solid"}=h,u=G(h,["color","backgroundColor","fill"]);return d(de,k(b({fill:a},u),{backgroundColor:l,color:r}))}de.Done=e=>d(Qi,k(b({},e),{colorTheme:"success"}));de.Danger=e=>d(Qi,k(b({},e),{colorTheme:"danger"}));de.Action=e=>d(Qi,k(b({},e),{colorTheme:"medium"}));function Kt(e){const{onDone:t,onCancel:n,doneLabel:o="Apply",cancelLabel:s="Cancel",style:i={}}=e;return _("div",{style:b({margin:"0 10px",display:"flex"},i),children:[f(de.Done,{onClick:t,style:(i==null?void 0:i.flexDirection)==="row-reverse"?{marginLeft:"10px"}:{},children:o}),f(de.Danger,{fill:"outline",onClick:n,style:!i.flexDirection||i.flexDirection==="row"?{marginLeft:"10px"}:{},children:s})]})}const po=c.exports.forwardRef((e,t)=>{const{checked:n=!1,disabled:o=!1,name:s="",onChange:i=()=>null,style:r={}}=e,[l,a]=c.exports.useState(n),u=c.exports.useCallback(p=>{a(!l),i(p)},[l,i]);return f("input",{ref:t,type:"checkbox",name:s,id:s,onChange:u,defaultChecked:n,disabled:o,style:r})});function xt(e){const m=e,{label:t,name:n,onChange:o=()=>null,className:s="checkbox",reverse:i=!1,style:r={container:{},label:{},checkbox:{}}}=m,l=G(m,["label","name","onChange","className","reverse","style"]),{values:a,setFieldValue:u}=he(),p=i?!B(a,n):B(a,n),h=c.exports.useCallback(g=>{g.persist(),o(g),u(n,i?p:!p)},[n,o,i,u,p]);return _("div",{className:`${s} check-${p}`,style:r.container?r.container:{},children:[t&&f("label",{htmlFor:n,className:"checkbox-label",style:r.label?r.label:{},children:t}),f(po,k(b({},l),{name:n,checked:p,onChange:h,style:r.checkbox?r.checkbox:{}}))]})}const ce=c.exports.forwardRef((e,t)=>{const{onSubmit:n=()=>null,initialValues:o={},validationSchema:s=null}=e;return f(Hp,{innerRef:t,initialValues:o,onSubmit:n,validationSchema:s,children:f(et,{children:e.children})})});function vd(e){const t=c.exports.useRef();return c.exports.useEffect(()=>{e.forEach(n=>{!n||(typeof n=="function"?n(t.current):n.current=t.current)})},[e]),t}const Is={label:{lineHeight:2,userSelect:"none"},inputWrapper:{height:"100%",width:"100px",borderRadius:"5px",borderWidth:"0.55px",borderColor:"#c7c7c7",borderStyle:"solid",display:"flex",flexDirection:"row",alignItems:"center",overflow:"hidden"},input:{outline:"none",flex:1,height:"100%",textAlign:"center",width:"100%"},clearButton:{height:"calc(100% - 4px)",borderRadius:"50%",backgroundColor:"gray",color:"white",aspectRatio:"1",fontSize:"60%",padding:0}},wt=c.exports.forwardRef((C,v)=>{var E=C,{value:e="",name:t,style:n={input:{},inputWrapper:{}},onChange:o=()=>null,debounceTime:s=0,onKeyDown:i=()=>null,checkValue:r=()=>!0,type:l="text",enableAutoSelect:a=!1,className:u,format:p=()=>T=>T,onBlur:h=()=>null,onFocus:m=()=>null,renderIcon:g=null,canClear:x=!1,onClear:y}=E,S=G(E,["value","name","style","onChange","debounceTime","onKeyDown","checkValue","type","enableAutoSelect","className","format","onBlur","onFocus","renderIcon","canClear","onClear"]);const[T,I]=c.exports.useState(e),D=c.exports.useRef(),N=vd([v,D]),A=c.exports.useRef(Uo(V=>{o(V)},s)).current;c.exports.useEffect(()=>{I(e)},[e]),c.exports.useEffect(()=>{var V;a&&((V=N==null?void 0:N.current)==null||V.select())},[a,N]);const P=c.exports.useCallback(V=>p()(l==="number"?String(V).trim()==="-"?Number(0):Number(V):V),[p,l]),R=c.exports.useCallback(V=>{V.persist(),V.stopPropagation(),V.preventDefault();function W(j){if(l==="number"){const U=/^(?:-?[0-9]*|[0-9]\d*)(?:\.\d{0,20})?$/;return!!(j.trim()===""||U.test(j))}return!0}const O=V.target.value;if(W(O)&&r(O)){const j=p();I(j(O));const U=k(b({},V),{target:{name:V.target.name,value:P(O)}});s?A(U):o(U)}},[r,A,s,p,P,o,l]),H=c.exports.useCallback(V=>{V.persist(),i(k(b({},V),{target:{name:V.target.name,value:P(T)}}))},[P,i,T]),L=c.exports.useCallback(V=>{V.stopPropagation()},[]),z=c.exports.useCallback(()=>{I(""),y==null||y()},[y]);return _("div",{style:b(b({},Is.inputWrapper),n!=null&&n.inputWrapper?n.inputWrapper:{}),className:`input ${u||""}`,children:[g==null?void 0:g(),f("input",k(b({},S),{ref:N,name:t,style:b(b({},Is.input),n!=null&&n.input?n.input:{}),"data-test-id":t?`input-${t}`:"",type:"text",value:T,onChange:R,onKeyDown:H,onKeyPress:L,onDoubleClick:V=>V.stopPropagation(),onFocus:m,onBlur:h})),x&&T&&f("button",{type:"button",style:Is.clearButton,onClick:z,children:f("span",{style:{display:"block",margin:"0 auto"},children:"\u2715"})})]})});function Z(e){const C=e,{name:t,style:n={label:{},input:{}},onChange:o=()=>null,checkValue:s=()=>!0,type:i="text",className:r="",value:l=null,format:a=()=>E=>E,checkErrorAfterInputTouched:u=!0}=C,p=G(C,["name","style","onChange","checkValue","type","className","value","format","checkErrorAfterInputTouched"]),{values:h,handleChange:m,setFieldValue:g,errors:x,touched:y}=he(),S=c.exports.useCallback(E=>{o(E),m(E)},[m,o]);c.exports.useEffect(()=>{l&&g(t,l)},[t,g,l]);const v=c.exports.useMemo(()=>u?B(x,t)&&B(y,t):B(x,t),[u,x,t,y]);return f(wt,b({name:t,value:l||B(h,t),onChange:S,type:i,style:k(b({},n),{inputWrapper:b(b({},n.input),v&&{borderColor:"red",outline:"none"})}),checkValue:s,className:r,format:a},p))}const mt=M`
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
`,CC=M`
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
`,SC={name:"",compressed:!1,pretty:!1,dataExportOption:vt.ROW_DATA};function kC({onClose:e,onSave:t,name:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{o.current.submitForm()},[]),i=c.exports.useCallback(r=>{t(r),e==null||e()},[e,t]);return w("div",{css:[mt,CC],children:[w("div",{className:"header handle",children:[d("span",{children:"Save as ... "}),d(me,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",children:w(ce,{ref:o,initialValues:k(b({},SC),{name:n}),onSubmit:i,children:[w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Name"}),d(Z,{name:"name",className:"name",style:{inputWrapper:{width:"100%"}}})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Compressed"}),d(xt,{name:"compressed"})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Pretty Format"}),d(xt,{name:"pretty"})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:" Include "}),w("div",{className:"data-export-group",children:[w("label",{children:[d(br,{type:"radio",name:"dataExportOption",value:vt.ROW_DATA}),"Raw Data"]}),w("label",{children:[d(br,{type:"radio",name:"dataExportOption",value:vt.DATA_SOURCE}),"Data Source"]})]})]})]})}),d("div",{className:"footer-container",children:d(Kt,{style:{flexDirection:"row-reverse",margin:0},onDone:s,doneLabel:"Save",onCancel:()=>e==null?void 0:e()})})]})}function wC(e){var s,i;let t=document.createElement("div");t.innerHTML=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0";let n=Array.prototype.slice.call(document.styleSheets).filter(r=>!r.disabled);document.body.appendChild(t),(s=window.getSelection())==null||s.removeAllRanges();let o=document.createRange();o.selectNode(t),(i=window.getSelection())==null||i.addRange(o),document.execCommand("copy");for(const r of n)r.disabled=!0;document.execCommand("copy");for(const r of n)r.disabled=!1;document.body.removeChild(t)}async function EC(e){try{return wC(e),!0}catch{return!1}}async function bs(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}async function el(e,t="experiment",n=0,o=!1){const s=JSON.stringify(e,(i,r)=>ArrayBuffer.isView(r)?Array.from(r):r,n);if(o)try{const i=new un;i.file(`${t}.nmrium`,s);const r=await i.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}});pn.exports.saveAs(r,`${t}.nmrium`)}catch(i){console.log(i)}else{const i=new Blob([s],{type:"text/plain"});pn.exports.saveAs(i,`${t}.nmrium`)}}function AC(e,t,n="experiment"){const o=["name","experiment"];for(const r of e[0].data.x)o.push(r);let s=`${o.join("	")}
`;for(const r of e){const{data:{re:l},info:{experiment:a},display:{name:u}}=r,p=[u,a];for(const h of l)p.push(h);s+=`${p.join("	")}
`}const i=new Blob([s],{type:"text/tab-separated-values"});pn.exports.saveAs(i,`${n}.tsv`)}function TC(e,t="experiment"){e.generateAsync({type:"blob"}).then(n=>{pn.exports.saveAs(n,`${t}.nmredata`)})}function Cd(e,t,n="experiment"){const{blob:o}=er(e,t);pn.exports.saveAs(o,`${n}.svg`)}function DC(e,t,n="experiment"){const{blob:o,width:s,height:i}=er(e,t);try{let r=document.createElement("canvas");r.width=s,r.height=i;let l=r.getContext("2d");l&&(l.fillStyle="white",l.fillRect(0,0,r.width,r.height));let a=new Image,u=URL.createObjectURL(o);a.onload=async()=>{l==null||l.drawImage(a,0,0);let p=r.toDataURL("image/png",1);pn.exports.saveAs(p,`${n}.png`),URL.revokeObjectURL(p)},a.src=u}catch(r){console.log(r)}}function IC(e){var o;const t=document.createElement("img");t.src=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0",document.body.appendChild(t);const n=document.createRange();n.selectNode(t),(o=window.getSelection())==null||o.addRange(n),document.execCommand("Copy"),document.body.removeChild(t)}function PC(e){e.toBlob(t=>{const n=new ClipboardItem({[t.type]:t});navigator.clipboard.write([n]).then(()=>{console.log("experiment copied.")},o=>{console.log(o)})})}function Sd(e,t){const{blob:n,width:o,height:s}=er(e,t);try{let i=document.createElement("canvas");i.width=o,i.height=s;let r=i.getContext("2d");r&&(r.fillStyle="white",r.fillRect(0,0,i.width,i.height));let l=new Image;const a=URL.createObjectURL(n);l.onload=async()=>{r==null||r.drawImage(l,0,0);const u=i.toDataURL("image/png",1);navigator.clipboard.write?PC(i):IC(u),URL.revokeObjectURL(u)},l.src=a}catch(i){i instanceof ReferenceError&&alert("Your browser does not support this feature, please use Google Chrome"),console.log(i)}}function er(e,t){var u;let n=(u=e.getRootNode().getElementById(t))==null?void 0:u.cloneNode(!0);const o=n==null?void 0:n.getAttribute("width").replace("px",""),s=n==null?void 0:n.getAttribute("height").replace("px","");n.querySelectorAll('[data-no-export="true"]').forEach(p=>p.remove());const l=`${`<svg class="nmr-svg"  viewBox='0 0 ${o} ${s}' width="${o}"  height="${s}"  version="1.1" xmlns="http://www.w3.org/2000/svg">`+`<style>.grid line,.grid path{stroke:none;} .peaks-text{fill:#730000} .x path{stroke-width:1px} .x text{
    font-size: 12px;
    font-weight: bold;
  } 
 
  .nmr-svg,.contours{
    background-color:white;
    fill:white;
  }
  

  
  </style>`+n.innerHTML}</svg>`;return{blob:new Blob([l],{type:"image/svg+xml"}),width:o,height:s}}const NC=new un;async function kd(e,t={}){const{spectrum:n,source:o}=t,{file:s={},jcampURL:i}=o;let r="";const l=`${n.info.dimension}d`;switch(s.extension){case"jdx":case"dx":r+=`
Jcamp_Location=file:jcamp/${l}/${n.display.name}\\`,e.file(`jcamp/${l}/${n.display.name}`,s.binary);break;case"zip":if(!s.binary)return;NC.loadAsync(s.binary).then(async a=>{var u;for(const p in a.files)p.endsWith("/")||e.file(`Bruker/${p}`,await((u=a.file(p))==null?void 0:u.async("arraybuffer")));r+=`
Spectrum_Location=file:Bruker/${RC(a)}\\`});break;default:if(!i)break;await fetch(i).then(async a=>{if(!a)return;let u=i.split("/").slice(-1);const p=`jcamp/${l}/${u}`;r+=`
Jcamp_Location=file:${p}\\`,e.file(p,await a.arrayBuffer())})}return r}function RC(e){let t=e.filter(o=>o.match("__MACOSX")?!1:!!(o.endsWith("fid")||o.endsWith("1r")||o.endsWith("ser")||o.endsWith("2rr")));const n=t.findIndex(o=>o.name.endsWith("1r")||o.name.endsWith("2rr"));return n>-1?t[n].name:t[0].name}function tr(e){Array.isArray(e)||(e=[e]);let t=[];for(let n of e)t.push(MC(n));return t}function MC(e){switch(e.toUpperCase()){case"1H":return 2;case"13C":return 1;default:return 1}}async function _C(e,t,n={labels:{byDiaID:[]}}){let{prefix:o="",labels:s}=n,i="",r=[];for(let l of e){const{info:a}=l;if(a.isFid||a.dimension>1)continue;let u="",p=l.ranges.values||[],h=l.info.nucleus,m=1,g="";r.forEach(S=>{S===h&&m++}),r.push(h),m>1&&(g=`#${m}`),u+=`${o}1D_${h.toUpperCase()}${g}>`,l.info.baseFrequency&&(u+=`
Larmor=${Number(l.info.baseFrequency).toFixed(2)}\\`);const{source:x={}}=l;u+=await kd(t,{spectrum:l,source:x});let y=tr(h)[0];for(let S of p){let v=S.signals;for(let C of v){let{multiplicity:E}=C;if((!E||E==="m")&&h==="1H")u+=`
${Number(S.from).toFixed(y)}-${Number(S.to).toFixed(y)}`;else if(C.delta)u+=`
${Number(C.delta).toFixed(y)}`;else continue;let T="";if(C.diaIDs&&C.diaIDs.length>0&&(C.diaIDs.forEach((I,D,N)=>{let A=", ";D===N.length-1&&(A=""),T+=`${s.byDiaID[I].label||I}${A}`}),u+=`, L=${T}`),h==="1H"){C.multiplicity&&(u+=`, S=${C.multiplicity}`);let I=C.js;if(Array.isArray(I)&&I.length){let D=", J=";for(const N of I){if(u+=`${D}${Number(N.coupling).toFixed(3)}`,N.diaIDs){let{diaIDs:A}=N;if(Array.isArray(A)||(A=[A]),!A.length)continue;u+=`(${s.byDiaID[A[0]].label||String(A[0])})`}D=", "}}S.integration?u+=`, E=${Number(S.integration).toFixed(y)}`:S.nbAtoms?u+=`, E=${S.nbAtoms.toFixed(y)}`:S.signals[0].nbAtoms!==void 0&&(u+=`, E=${S.signals[0].nbAtoms}`)}}v.length&&(u+="\\")}u+=`
`,/\n/.exec(u)&&(i+=u)}return i}function FC(e){switch(e.toLowerCase()){case"hsqc":case"cosy":return"1J";case"hmbc":return"NJ";default:return"NJ"}}const LC=Array.isArray;async function OC(e,t,n={labels:{}}){const{byDiaID:o}=n.labels;let s="";const i=`
> <NMREDATA_2D_`;for(let r of e){if(r.info.dimension<2)continue;let l="";const{info:a,source:u}=r;let{nucleus:p,experiment:h,pulseSequence:m}=a,g=FC(h);p&&(l+=`${i}${p[1]}_${g}_${p[0]}>`);let x=tr(p);l+=await kd(t,{spectrum:r,source:u}),h&&(l+=`
CorType=${h} \\`),m&&(l+=`
PulseProgram=${m} \\`),r.info.baseFrequency&&(l+=`
Larmor=${Number(r.info.baseFrequency[0]).toFixed(2)}\\`);let y=r.zones.values||[];for(let S of y){let v=S.signals;for(let C of v){let{x:E,y:T,peaks:I}=C,D=tl(E,o,x[0]),N=tl(T,o,x[1]),A=Math.max(...I.map(P=>P.z));l+=`
${D}/${N}, I=${A.toFixed(2)}\\`}}s+=l}return s.length>0?`${s}
`:""}function tl(e,t,n){let{diaIDs:o,delta:s}=e;if(o){if(LC(o)||(o=[o]),o.length<1)return Number(s).toFixed(n);let i=o.map(r=>t[r].label).join(",");return o.length>1?`(${i})`:i}return Number(s).toFixed(n)}function $C(e){let t=[];for(const{x:n,y:o}of e)t.push(n,o);return t}function HC(e,t={groupedDiaIDs:[]}){const{groupedDiaIDs:n,molecule:o}=t;let s=zp(o,{toLabel:"H",maxLength:1}),i={},r={};for(let l of e){let{dimension:a,nucleus:u}=l.info,p=tr(u),[h,m]=a>1?["zones",$C]:["ranges",x=>x||[]],g=l[h].values||[];for(let x of g){let y=m(x.signals);for(let S=0;S<y.length;S++){let v=y[S].diaIDs||[];for(let C of v){let E=Number(y[S].delta).toFixed(p[S%a]),T=n.find(D=>D.oclID===C),I={atom:T.atoms[0],molecule:o,connections:s,atomLabel:T.atomLabel};i[C]={atoms:T.atoms.map(D=>D+1),shift:E,label:nl(I)};for(let D of T.atoms)I.atom=D,r[D]={shift:E,diaID:C,label:nl(I)}}}}}return{byAssignNumber:r,byDiaID:i}}function nl(e){const{atom:t,molecule:n,atomLabel:o,connections:s}=e;let i="";if(o!=="C"){let l=s[t].find(p=>p&&p.length>1),a=`${o}${l[0]+1}`,u=`${n.getAtomLabel(l[1])}${l[1]+1}`;i=`${a}${u}`}else i=`${o}${t+1}`;return i}const nr={solvent:"SOLVENT",temperature:"TEMPERATURE",assignment:"ASSIGNMENT",j:"J",signals:"SIGNALS",id:"ID"};async function zC(e,t={}){const{data:n,molecules:o}=e||{data:[],molecules:[]};let s=new un;for(const i of o)await ol(n,s,k(b({},t),{molecule:i}));return o.length||await ol(n,s,t),s}async function ol(e,t,n={}){let{id:o,prefix:s=`
> <NMREDATA_`,filename:i="nmredata",molecule:r}=n,l="",a;r&&(r=Et.Molecule.fromMolfile(r.molfile),l+=r.toMolfile(),r.addImplicitHydrogens(),a=Vp(r));let u=r?HC(e,{groupedDiaIDs:a,molecule:r}):{byDiaID:void 0,byAssignNumber:void 0};l+=`${s}VERSION>
1.1\\
`,l+=sl(e,"temperature",{prefix:s}),l+=sl(e,"solvent",{prefix:s}),o&&(l+=`${s+nr.id}>
id\\
`),l+=VC(u.byDiaID,{prefix:s}),l+=await _C(e,t,{prefix:s,labels:u}),l+=await OC(e,t,{prefix:s,labels:u}),l+=`
$$$$
`,t.file(`${i}.sdf`,l)}function VC(e,t){if(!e)return"";const{prefix:n}=t;let o=`${n+nr.assignment}>
`;for(let s in e){let i=e[s].atoms;o+=`${e[s].label}, ${e[s].shift}`;for(let r of i)o+=`, ${r}`;o+=`\\
`}return o}function sl(e,t,n={prefix:""}){const{prefix:o}=n;let s="";for(let i of e)if(i.info[t]){s+=`${o+nr[t]}>
${String(i.info[t])}\\
`;break}return s}function wd(){const{rootRef:e}=ms(),t=fe(),n=se(),o=$(),s=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{Sd(e,"nmrSVG"),h(),n.success("Image copied to clipboard")},0)}},[e,n,o]),i=c.exports.useCallback(async(h=0,m=!0)=>{if(o.data.length>0){const g=await n.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{async function x(){var v,C;const y=(C=(v=o.data[0])==null?void 0:v.display)==null?void 0:C.name,S=Ir(o);await el(S,y,h,m),g()}x()},0)}},[n,o]),r=c.exports.useCallback(async()=>{if(o.data.length>0){const h=await n.showLoading("Exporting as NMRE process in progress");setTimeout(()=>{async function m(){var y,S;const g=(S=(y=o.data[0])==null?void 0:y.display)==null?void 0:S.name,x=await zC(o);TC(x,g),h()}m()},0)}},[n,o]),l=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as SVG process in progress");setTimeout(()=>{var g,x;const m=(x=(g=o.data[0])==null?void 0:g.display)==null?void 0:x.name;Cd(e,"nmrSVG",m),h()},0)}},[e,n,o.data]),a=c.exports.useCallback(async()=>{if(o.data.length>0&&e){const h=await n.showLoading("Exporting as PNG process in progress");setTimeout(()=>{var g,x;const m=(x=(g=o.data[0])==null?void 0:g.display)==null?void 0:x.name;DC(e,"nmrSVG",m),h()},0)}},[e,n,o.data]),u=c.exports.useCallback(h=>{async function m(){const{name:g,pretty:x,compressed:y,dataExportOption:S}=h,v=await n.showLoading(`Exporting as ${g}.nmrium process in progress`);setTimeout(()=>{(async()=>{const C=Ir(o,S);await el(C,g,x?2:0,y),v()})()},0)}m()},[n,o]),p=c.exports.useCallback(async()=>{var h,m;if(o.data.length>0){const g=(m=(h=o.data[0])==null?void 0:h.display)==null?void 0:m.name;t.show(f(kC,{name:g,onSave:u}),{isBackgroundBlur:!1,position:ne.TOP_CENTER,width:400})}},[t,u,o.data]);return{saveToClipboardHandler:s,saveAsJSONHandler:i,saveAsNMREHandler:r,saveAsSVGHandler:l,saveAsPNGHandler:a,saveAsHandler:p}}function Ed(){const e=le(),t=B(e.current,"display.general.experimentalFeatures",!1);return!((t==null?void 0:t.hidden)===!0||(t==null?void 0:t.display)===!1)}function ke(r){var l=r,{children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right"}=l,i=G(l,["children","style","onClick","popupTitle","popupPlacement"]);return f(Ee,{title:o,popupPlacement:s,children:f("button",k(b({style:t,type:"button",onClick:n},i),{children:e}))})}const Nt=M`
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
`,jC=M`
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
`;function BC({children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right",defaultValue:i=!1,disabled:r=!1,className:l=""}){const[a,u]=c.exports.useState(i),p=c.exports.useCallback(()=>{n(!a),u(!a)},[n,a]);return d(Ee,{title:o,popupPlacement:s,children:d("button",{disabled:r,css:jC,style:t,className:(a?"toggle toggle-active ":"toggle ")+l,type:"button",onClick:p,children:e})})}var Ge=c.exports.memo(BC);const XC=M`
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
`;function YC({counter:e,onDelete:t=()=>null,deleteToolTip:n="Delete",onFilter:o=()=>null,filterToolTip:s="",filterIsActive:i=!1,counterFiltered:r=0,children:l,onSettingClick:a=()=>null,showSettingButton:u=!1,canDelete:p=!0,style:h={},className:m=""}){return w("div",{css:XC,style:h,className:m,children:[w("div",{className:"left-container",children:[p&&d(Ee,{title:n,popupPlacement:"right",children:d("button",{type:"button",onClick:t,disabled:e===0,children:d(At,{})})}),s?d(Ge,{popupTitle:s,popupPlacement:"right",onClick:o,defaultValue:i,children:d(jp,{style:{pointerEvents:"none",fontSize:"12px"}})}):null,l]}),e!==void 0&&w("p",{className:"counter-label",children:["["," ",i&&i===!0&&r!==void 0?`${r}/${e}`:e," ","]"]}),u&&d(Ee,{title:"preferences",popupPlacement:"left",children:d("button",{type:"button",onClick:a,children:d(Bp,{})})})]})}var ot=c.exports.memo(YC);function or(){const e=le();return t=>B(e.current,`display.toolBarButtons.${t}`,!0)}function Ad(){const e=X(),t=se(),{data:n}=$(),o=or(),s=c.exports.useCallback(()=>{(async()=>{const i=await t.showLoading("Automatic Ranges/Zones detection for all spectra in progress");setTimeout(()=>{e({type:Du}),e({type:Iu}),i()},0)})()},[e,t]);return Array.isArray(n)&&n.length===0||!o("autoRangesTool")?null:f(ke,{popupTitle:"Automatic Ranges/Zones picking for all spectra",onClick:s,children:f(jl,{})})}const GC=M`
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
`;function WC({context:e},t){const[n,o]=c.exports.useState({left:0,top:0}),{rootRef:s,elementsWrapperRef:i}=ms(),[r,l]=c.exports.useState(),[a,u]=c.exports.useState(),[p,h]=c.exports.useState(null),m=c.exports.useRef();c.exports.useEffect(()=>(m.current=document.createElement("div"),i&&i.appendChild(m.current),()=>{m.current&&i&&i.removeChild(m.current)}),[i]);const g=y=>{y.preventDefault(),h(y.target.parentElement),u(!0);const S=y.clientX,v=y.clientY,C=window.innerWidth,E=window.innerHeight,T=150,I=0,D=C-S>T;let N=!D,A=E-v>I;const P=!A;D&&(N=`${S+5}px`),N&&(N=`${S-T-5}px`),A&&(A=`${v+5}px`),P&&(A=`${v-I-5}px`),o({left:N,top:A})};c.exports.useImperativeHandle(t,()=>({handleContextMenu:(y,S)=>{l(S),g(y)}}));const x=c.exports.useCallback((y,S)=>{y.preventDefault(),S(r),u(!1)},[r]);return c.exports.useEffect(()=>{const y=S=>{p&&S.target.parentElement&&!S.target.parentElement.isSameNode(p)&&a&&u(!1)};return s&&s.addEventListener("click",y),()=>{s&&s.removeEventListener("click",y)}},[a,t,s,p]),a?m.current&&Ko.exports.createPortal(e&&d("div",{ref:t,css:[GC,n],children:e.map((y,S)=>d("button",{type:"button",onClick:v=>x(v,y.onClick),children:y.label},S))}),m.current):null}var qt=c.exports.forwardRef(WC);function ZC({headerGroups:e}){return f("thead",{children:e.map(t=>f("tr",k(b({},t.getHeaderGroupProps()),{children:t.headers.map(n=>_("th",k(b({},n.getHeaderProps(n.getSortByToggleProps())),{style:n.style,children:[n.render("Header"),f("span",{children:n.isSorted?n.isSortedDesc?" \u25BC":" \u25B2":""})]}),n.getHeaderProps().key))}),t.getHeaderGroupProps().key))})}var UC=c.exports.memo(ZC);const KC=M`
  background-color: #ff6f0057;
`,qC=M`
  background-color: #f5f5dc;
`,Td=M`
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
`;function JC(e){const t=e.original.id;return t?t instanceof Array?t:[String(t)]:[""]}function QC(e,t){const{row:n,highlightedSource:o=ue.UNKNOWN,onContextMenu:s}=e,i=c.exports.useMemo(()=>({type:o,extra:n.original}),[o,n]),r=re(JC(n),i);return c.exports.useEffect(()=>()=>{r.hide()},[]),c.exports.useMemo(()=>d("tr",k(b(b({ref:t,onContextMenu:s,css:r.isActive?KC:Object.prototype.hasOwnProperty.call(n.original,"isConstantlyHighlighted")&&n.original.isConstantlyHighlighted===!0?qC:null},n.getRowProps()),r.onHover),{children:n.cells.map(l=>{const{style:a,padding:u}=l.column;return l.isRowSpanned?null:d("td",k(b({rowSpan:l.rowSpan},l.getCellProps()),{onContextMenu:p=>(p.preventDefault(),!1),style:b({padding:u},a),children:l.render("Cell")}),l.key)})}),n.getRowProps().key),[r.isActive,r.onHover,s,t,n])}var eS=c.exports.forwardRef(QC);const Dd=c.exports.createContext(null),tS=Dd.Provider;function nS(){const e=c.exports.useContext(Dd);if(!e)throw new Error("react table context was not found ");return e}function oS(e){e.useInstance.push(sS)}function sS(e){const{allColumns:t}=e;let n=[];t.forEach(o=>{const{id:s,enableRowSpan:i}=o;i!==void 0&&i!==!1&&n.push({id:s,cellValue:null,cellIndex:0})}),Object.assign(e,{rowSpanHeaders:n})}function iS(e,t,n,o){const s=e[t];for(let i=0;i<s.allCells.length;i++){const r=s.allCells[i],l=n.find(a=>a.id===r.column.id);if(l!==void 0){const a=o?`${r.value}-${s.original[o]}`:r.value;l.cellValue===null||l.cellValue!==a?(r.isRowSpanned=!1,l.cellValue=a,l.cellIndex=t,r.rowSpan=1):(e[l.cellIndex].allCells[i].rowSpan++,r.isRowSpanned=!0)}}}const rS={table:e=>{if(e)return{position:"sticky",top:0}}},lS=c.exports.forwardRef(function(t,n){const{data:o,columns:s,highlightedSource:i,context:r=null,onScroll:l,approxItemHeight:a=40,enableVirtualScroll:u=!1,groupKey:p}=t,h=c.exports.useRef(null),{index:m}=nS(),{getTableProps:g,getTableBodyProps:x,headerGroups:y,rows:S,prepareRow:v,rowSpanHeaders:C}=Vn.exports.useTable({columns:s,data:o},Vn.exports.useSortBy,oS),E=c.exports.useCallback((I,D)=>{Gt(I)||(I.preventDefault(),h.current.handleContextMenu(I,D.original))},[h]),T=u?S.slice(m.start,m.end):S;return w("div",k(b({ref:n,className:"table-container",style:{overflowY:"auto",position:"relative",height:"100%"}},u&&{onScroll:l}),{children:[u&&d("div",{style:{height:a*o.length,position:"absolute",width:"100%",pointerEvents:"none"}}),w("table",k(b({},g()),{css:Td,style:rS.table(u),children:[d(UC,{headerGroups:y}),d("tbody",k(b({},x()),{children:T.map((I,D)=>(v(I),iS(S,u?D+m.start:D,C,p),d(eS,k(b({row:I},I.getRowProps()),{onContextMenu:N=>E(N,I),highlightedSource:i}),I.key)))}))]})),d(qt,{ref:h,context:r})]}))});function aS(e){const{data:t,approxItemHeight:n=40,groupKey:o}=e,s=c.exports.useRef(null),[i,{height:r}]=Bl(),l=vd([i,s]),[a,u]=c.exports.useState({offsetHeight:0,scrollHeight:0,numberOfVisibleRows:0,index:{start:0,end:0}});c.exports.useEffect(()=>{if(l.current){const{scrollHeight:x}=l.current,y=Math.ceil(r/n);u(S=>k(b({},S),{offsetHeight:r,scrollHeight:x,numberOfVisibleRows:y,index:{start:0,end:y+1}}))}},[n,l,r]);const p=c.exports.useCallback((x,y)=>{const S=t[x];if(S.index&&o)switch(y){case-1:{let v=x-1;for(;v>0;){if(t[v][o]!==S[o])return v+1;v--}return x}case 1:{let v=x+1;for(;v<t.length;){if(t[v][o]!==S[o])return v-1;v++}return x}default:return x}return x},[t,o]),h=c.exports.useCallback((x,y)=>{const S=x-y,v=S>=t.length?S:x;return p(v,-1)},[t.length,p]),m=c.exports.useCallback((x,y)=>{const S=x+y,v=S>=t.length?t.length-1:S;return p(v,1)},[t.length,p]),g=c.exports.useCallback(()=>{if(s.current&&a){const{scrollTop:x}=s.current,{numberOfVisibleRows:y,index:S}=a,v=Math.ceil(x/n),C=h(v,y);if(v!==S.start){const E=m(v,y);u(k(b({},a),{index:{start:C,end:E+1}}))}}},[n,m,h,a]);return d(tS,{value:a,children:d(lS,b({onScroll:g,ref:l},e))})}var Dn=c.exports.memo(aS);const il={container:{height:"100%",backgroundColor:"white"},label:{textAlign:"center",width:"100%",fontSize:"11px",padding:"5px",color:"gray"}};function Rt(){return f("div",{style:il.container,children:f("p",{style:il.label,children:"No Data"})})}function cS({data:e}){const t=X(),n=c.exports.useCallback((s,i)=>{s.preventDefault(),s.stopPropagation();const r=i.original.assignment;t({type:Vi,payload:{assignments:r}})},[t]),o=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:s})=>s.index+1,style:{width:"1%",maxWidth:"40px",minWidth:"40px"}},{index:2,Header:"Score",accessor:"score"},{index:3,Header:"",style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"assign-button",Cell:({row:s})=>f("button",{type:"button",className:"assign-button",onClick:i=>n(i,s),children:f(Xp,{})})}],[n]);return e&&e.length>0?f(Dn,{data:e,columns:o}):f(Rt,{})}var uS=c.exports.memo(cS);function dS(e){return e.reduce((t,n)=>{const{id:o,info:s}=n,i=n.info.dimension;if(i===1){const r=n.ranges.values;t.push({id:o,info:s,ranges:r})}else if(i===2){const r=n.zones.values;t.push({id:o,info:s,zones:r})}return t},[])}function pS(){const e=X(),{data:t,molecules:n}=$(),o=se(),[s,i]=c.exports.useState([]),r=c.exports.useCallback(()=>{(async()=>{var h;const l=await o.showLoading("Auto Assignments"),a=Et.Molecule.fromMolfile(((h=n[0])==null?void 0:h.molfile)||""),u=dS(t),p=await Yp({spectra:u,molecule:a},{minScore:0});e({type:Vi,payload:{assignments:p[0].assignment}}),l(),i(p)})()},[o,t,e,n]);return c.exports.useMemo(()=>({getAssignments:r,assignments:s}),[s,r])}function hS(){const{getAssignments:e,assignments:t}=pS();return w("div",{css:Nt,children:[w(ot,{showSettingButton:!1,canDelete:!1,children:[d(ke,{popupTitle:"automatic assignment",onClick:e,children:d(Gp,{style:{fontSize:"18px"}})}),d(Ad,{})]}),d("div",{className:"inner-container",children:d(uS,{data:t})})]})}function fS({data:e,columns:t,onMouseDown:n=()=>null}){const{getTableProps:o,getTableBodyProps:s,headerGroups:i,rows:r,prepareRow:l}=Vn.exports.useTable({columns:t,data:e},Vn.exports.useSortBy,Vn.exports.useFlexLayout);return w("table",k(b({},o()),{css:Td,style:{height:"100%"},children:[d("thead",{children:i.map(a=>d("tr",k(b({},a.getHeaderGroupProps()),{children:a.headers.map(u=>w("th",k(b({},u.getHeaderProps(u.getSortByToggleProps())),{children:[u.render("Header"),d("span",{children:u.isSorted?u.isSortedDesc?" \u25BC":" \u25B2":""})]}),u.getHeaderProps().key))}),a.getHeaderGroupProps().key))}),d("tbody",k(b({},s()),{style:{display:"block",height:"100%",overflowY:"auto"},children:r.map(a=>(l(a),d("tr",k(b({},a.getRowProps()),{onMouseDown:n,children:a.cells.map(u=>d("td",k(b({},u.getCellProps()),{style:k(b({},u.getCellProps().style),{padding:"0px"}),children:u.render("Cell")}),u.getCellProps().key))}),a.getRowProps().key)))}))]}))}var mS=c.exports.memo(fS);const Ps={container:{height:"100%",flexDirection:"column",display:"flex",width:"100%"},tableContainer:{height:"calc(100% - 30px)",overflow:"auto",display:"block"},searchInput:{width:"100%",borderRadius:"5px",border:"0.55px solid gray",padding:"5px",marginBottom:"2px"}};function gS({info:e,meta:t}){const[n,o]=c.exports.useState({}),[s,i]=c.exports.useState([]),r=c.exports.useRef(null),l=c.exports.useCallback(u=>{const p=Object.keys(n).filter(h=>h.toLowerCase().includes(u.target?u.target.value.toLowerCase():u.toLowerCase()));i(p)},[n]);c.exports.useEffect(()=>{r.current&&l(r.current.value)},[l,r]),c.exports.useEffect(()=>{if(e&&t){const u=Object.keys(e).concat(Object.keys(t));i(u),o(b(b({},e),t))}},[e,t]);const a=c.exports.useMemo(()=>[{Header:"Parameter",sortType:"basic",minWidth:100,width:20,maxWidth:20,Cell:({row:u})=>f("p",{style:{padding:"5px",backgroundColor:"white"},children:u.original})},{Header:"Value",sortType:"basic",resizable:!0,Cell:({row:u})=>f("p",{style:{backgroundColor:"#efefef",height:"100%",padding:"5px",fontFamily:"monospace",whiteSpace:"pre",overflow:"hidden"},children:`${n[u.original]}`})}],[n]);return _("div",{style:Ps.container,children:[f("div",{children:f("input",{type:"text",style:Ps.searchInput,placeholder:"Search for parameter...",onChange:l,ref:r})}),f("div",{style:Ps.tableContainer,children:f(mS,{data:s,columns:a})})]})}const xS=c.exports.memo(gS),bS={info:{},meta:{}};function yS(){const{info:e,meta:t}=Ce(bS);return f(xS,{info:e,meta:t})}const vS=M`
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
`;function Id({onDelete:e,className:t="delete"}){return d("button",{css:vS,className:t,type:"button",onClick:e,children:d(ii,{className:"icon"})})}const CS=e=>M`
  position: relative;

  .delete {
    position: absolute;
    top: 2px;
    left: 2px;
  }

  ${e}
`;function SS({tabid:e,tablabel:t,isActive:n,onClick:o=()=>null,canDelete:s,onDelete:i=()=>null,tabstyles:r,render:l}){let a="tab-list-item";n&&(a+=" tab-list-active");const u=c.exports.useCallback(h=>{o(k(b({},h),{tablabel:t,tabid:e}))},[o,t,e]),p=c.exports.useCallback(h=>{h.stopPropagation(),i(k(b({},h),{tablabel:t,tabid:e}))},[i,t,e]);return w("li",{className:a,onClick:u,css:CS(r),"data-test-id":`tab-${e}`,children:[s&&d(Id,{onDelete:p}),l?l({isActive:n,title:t||"",id:e}):t]})}function Re(e){return d(Ve,{children:e.children})}const rl=M`
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
`,kS=M`
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
`;var sr=(e=>(e.TOP="TOP",e.LEFT="LEFT",e))(sr||{});function wS({children:e,onClick:t,position:n,onDelete:o=()=>null,activeTab:s}){const i=c.exports.useCallback(u=>{const{tablabel:p,tabid:h}=u;t({tablabel:p,tabid:h})},[t]);let r;const l=c.exports.Children.map(e,u=>{if(!c.exports.isValidElement(u))return null;const{tabid:p}=u.props;return p===s&&(r=u.props.children),d(SS,k(b({},u.props),{isActive:p===s,onClick:i,onDelete:o}))}),a=c.exports.useMemo(()=>{switch(n){case"TOP":return rl;case"LEFT":return kS;default:return rl}},[n]);return w("div",{className:"tabs",css:a,children:[d("ol",{className:"tab-list",children:l}),d("div",{className:"tab-content",children:r})]})}var In=c.exports.memo(wS);function ll({direction:e,onClick:t}){return d("div",{onClick:t,css:M`
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
      `,children:d(Wp,{style:{transform:`scaleX(${e==="right"?"-1":"1"})`}})})}const ES=.45;function AS({children:e,loop:t=!1,defaultIndex:n=0,onChange:o=()=>null}){const[s,{width:i}]=Bl(),[r,l]=c.exports.useState(0);c.exports.useEffect(()=>{l(n)},[n]);const a=c.exports.useMemo(()=>c.exports.Children.map(e,h=>d("div",{css:M`
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
          transition: transform ease-out ${ES}s;
          height: 100%;
          width: ${i*(a?a.length:1)}px;
          display: flex;
        `,children:a}),r!==0&&d(ll,{direction:"left",onClick:p}),a&&r!==a.length-1&&d(ll,{direction:"right",onClick:u})]})}var Pd=c.exports.memo(AS);const TS=M`
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
`,DS=M`
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
`;function Nd(e){const{molecules:t,onChange:n=()=>null,index:o}=e,[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{const l=o&&o<t.length?o:0;t&&t.length>0&&i(l)},[o,t]);const r=c.exports.useCallback(l=>{i(l),n(l)},[n]);return w("div",{children:[d("div",{css:TS,children:w("p",{children:[t&&t.length>0&&`${+(s+1)} / ${t.length}`," "]})}),d("div",{css:DS,children:d(Pd,{defaultIndex:s,onChange:r,children:t==null?void 0:t.map((l,a)=>{var u;return w("div",{className:"slider",children:[d("div",{children:l.molfile&&d(Zp,{id:`molSVG${a}`,width:120,molfile:l.molfile})}),w("p",{children:[d(Up,{mf:l.mf})," - ",(u=l.mw)==null?void 0:u.toFixed(2)]})]},l.key)})})})]})}const IS=M`
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
`;function PS(e){const[t,n]=c.exports.useState(),{setFieldValue:o,errors:s,values:i}=he(),{molecules:r,activeTab:l}=$(),a=za(l),u=c.exports.useMemo(()=>a&&r&&r.length>0&&t!==void 0&&r[t].atoms[a]?r[t].atoms[a]:0,[t,a,r]),p=c.exports.useCallback(m=>{n(m),o(e.name,r[m])},[r,e.name,o]);c.exports.useEffect(()=>{if(r&&r.length>0){const m=i[e.name]?r.findIndex(g=>g.key===i[e.name].key):-1;p(m!==-1?m:0)}},[r,e.name,p,i]);const h=c.exports.useCallback(m=>{p(m)},[p]);return d("div",{css:IS,children:a&&r&&r.length>0?w("div",{className:"molecule-container",children:[d("p",{className:"title",children:"Select a molecule as reference!"}),w("div",{className:"molecule-selection-container",children:[d(Nd,{index:t,molecules:r,onChange:h}),w("p",{className:"newSumText",children:["New sum for ",a," will be ",u,"!"]})]})]}):d("p",{className:"empty",style:{color:s[e.name]?"red":"black"},children:"You have to Select a spectrum and Add a molecule from the Structure panel to select as a reference!"})})}const NS=M`
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
`;function Rd({onSave:e,onClose:t,header:n,sumOptions:o}){var g;const{current:{display:{general:s,panels:i}}}=le(),[r,l]=c.exports.useState("auto"),a=c.exports.useRef(null),u=c.exports.useCallback(x=>{x.key==="Enter"&&a.current.submitForm()},[]),p=c.exports.useCallback(x=>{l(x.tabid)},[]);c.exports.useEffect(()=>{var x;if((o==null?void 0:o.sumAuto)&&!(s!=null&&s.hideSetSumFromMolecule)&&!((x=i==null?void 0:i.structuresPanel)!=null&&x.hidden)){l("auto");const{mf:y,moleculeKey:S}=o;a.current.setValues({sum:null,molecule:S&&y?{mf:y,key:S}:null})}else l("manual"),a.current.setValues({sum:(o==null?void 0:o.sum)||"",molecule:null})},[s==null?void 0:s.hideSetSumFromMolecule,i==null?void 0:i.structuresPanel,o]);const h=c.exports.useCallback(x=>{switch(r){case"auto":{const{molecule:{mf:y,key:S}}=x;e({sumAuto:!0,mf:y,moleculeKey:S});break}case"manual":{const{sum:y}=x;e({sum:y,sumAuto:!1});break}default:return}t()},[t,e,r]),m=c.exports.useMemo(()=>{switch(r){case"auto":return Q({molecule:Q().required()});case"manual":return Q({sum:ae().required()});default:return null}},[r]);return w("div",{css:[mt,NS],children:[w("div",{className:"header handle",children:[d("span",{children:n}),d(me,{onClick:t})]}),d("div",{className:"tab-content",children:d(ce,{ref:a,onSubmit:h,initialValues:{sum:null,molecule:null},validationSchema:m,children:w(In,{activeTab:r,onClick:p,children:[!(s!=null&&s.hideSetSumFromMolecule)&&!((g=i==null?void 0:i.structuresPanel)!=null&&g.hidden)&&d(Re,{tablabel:"Auto",tabid:"auto",children:d(PS,{name:"molecule"})}),d(Re,{tablabel:"Manual",tabid:"manual",children:d("div",{className:"manual-container",children:d(Z,{name:"sum",type:"number",placeholder:"Enter the new value",onKeyDown:u})})})]})})}),d("div",{className:"footer-container",children:d("button",{type:"button",onClick:()=>a.current.submitForm(),className:"btn",children:"Set"})})]})}const RS=M`
  background-color: transparent;
  border: none;
  height: 100%;
  svg {
    fill: green;
    font-size: 16px;
  }
`;function MS(e){const{className:t="",disabled:n=!1,popupPlacement:o="left",popupTitle:s="Save",onClick:i}=e;return d("div",{className:t,children:d(Ee,{title:s,popupPlacement:o,children:d("button",{css:RS,type:"button",onClick:i,disabled:n,className:t,children:d(Kp,{})})})})}var ir=c.exports.memo(MS);const _S=M`
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
`;function FS({onClose:e,onSave:t}){return w("div",{css:_S,children:[d(me,{onClick:e,popupTitle:"close Preferences"}),d(ir,{onClick:t,popupTitle:"save Preferences"})]})}var Pn=c.exports.memo(FS);function LS(e,t){const{onSave:n=()=>null,value:o,type:s="text",style:i,onEditStart:r=()=>null,editStatus:l=!1}=e,[a,u]=c.exports.useState();c.exports.useEffect(()=>{u(l)},[l]),c.exports.useImperativeHandle(t,()=>({startEdit:()=>{u(!0)},closeEdit:()=>{u(!1)}}));const p=c.exports.useCallback(m=>{m.target.classList.contains("editable-column")||(u(!1),window.removeEventListener("mousedown",p))},[]),h=c.exports.useCallback((m,g=null)=>{m?(window.addEventListener("mousedown",p),r(g),u(m)):(["Enter","Tab"].includes(g.key)&&n(g),["Enter","Tab","Escape"].includes(g.key)&&(u(m),window.removeEventListener("mousedown",p)))},[p,r,n]);return _("div",{style:b({display:"table",width:"100%",height:"100%"},i),onDoubleClick:m=>h(!0,m),children:[!a&&f("span",{style:{display:"table-cell",verticalAlign:"middle"},children:o}),a&&f("div",{style:{display:"table-cell",verticalAlign:"middle"},children:f(wt,{enableAutoSelect:!0,className:"editable-column",value:o,type:s,onKeyDown:m=>h(!1,m)})})]})}var at=c.exports.forwardRef(LS);function ys(e,t){const{index:n,Header:o=()=>null,extraParams:s,accessor:i=null,Cell:r=null,sortType:l="basic",enableRowSpan:a=!1,style:u={},id:p}=t||{};e.push(b(k(b(b(b({index:n},b({},p&&{id:p})),b({},i?{accessor:i}:{})),b({},r?{Cell:r}:{})),{Header:o,sortType:l,enableRowSpan:a,style:u}),s))}const OS=`url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="960px" height="560px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve"><g id="Rounded_Rectangle_33_copy_4_1_"><path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/></g></svg>')`,Me=c.exports.forwardRef(function(t,n){const{data:o,style:s={width:100},onChange:i=()=>null,defaultValue:r,name:l="",className:a=""}=t,u=c.exports.useCallback(h=>{let m=h.target.value;isNaN(m)||(m=Number(m)),i(m)},[i]),p=M`
    padding: 0px 5px;
    border: 0.55px solid #cacaca;
    font-size: 14px;
    width: ${s.width?Number(s.width)-5:115}px;
    margin: 0;
    height: 100%;
    background: ${OS} no-repeat right white;
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
  `;return d("select",{ref:n,css:p,name:l,onChange:u,defaultValue:r,className:a,style:s,children:o.map(h=>d("option",{value:h.value,children:h.label},`${h.key}`))})}),$S={marginLeft:10,marginRight:10,border:"none"};function HS({activeTab:e,data:t,preferences:n}){const o=X(),s=c.exports.useCallback((h,m)=>{h.preventDefault(),h.stopPropagation();const g=m.original;o({type:ls,integralID:g.id})},[o]),i=c.exports.useCallback((h,m)=>{const g=k(b({},m.original),{kind:h});o({type:Vc,payload:{data:g}})},[o]),r=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:h})=>h.index+1,width:10},{index:2,Header:"From",sortType:"basic",resizable:!0,accessor:h=>h.from.toFixed(2)},{index:3,Header:"To",sortType:"basic",resizable:!0,accessor:h=>h.to.toFixed(2)},{index:6,Header:"Kind",sortType:"basic",resizable:!0,accessor:h=>h.kind,Cell:({row:h})=>f(Me,{onChange:m=>i(m,h),data:ai,style:$S,defaultValue:h.original.kind})},{index:7,style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:h})=>f("button",{type:"button",className:"delete-button",onClick:m=>s(m,h),children:f(At,{})})}],[i,s]),l=c.exports.useCallback((h,m)=>{const g={value:h.target.value,id:m.id};o({type:lu,payload:{data:g}})},[o]),a=c.exports.useMemo(()=>ft(n.current,`formatting.panels.integrals.[${e}]`,Ot),[e,n]),u=c.exports.useMemo(()=>[{showWhen:"showAbsolute",index:4,Header:"Absolute",accessor:h=>Ye(h.absolute,B(a,"absoluteFormat",Ot.absoluteFormat))},{showWhen:"showRelative",index:5,id:"relative",Header:()=>{const h=e==null?void 0:e.replace(/[0-9]/g,"");return f("span",{children:`Relative ${h}`})},accessor:h=>Ye(h.integral,B(a,"relativeFormat",Ot.relativeFormat)),Cell:({row:h})=>{const m=Ye(h.original.integral,B(a,"relativeFormat",Ot.relativeFormat)),x=Oa(h.original)?m:`[ ${m} ]`;return f(at,{value:x,onSave:y=>l(y,h.original),type:"number"})}}],[e,a,l]),p=c.exports.useMemo(()=>{let h=[...r];for(const g of u){const m=g,{showWhen:x}=m,y=G(m,["showWhen"]);a[x]&&ys(h,y)}return h.sort((g,x)=>g.index-x.index)},[u,r,a]);return t&&t.length>0?f(Dn,{data:t,columns:p}):f(Rt,{})}var zS=c.exports.memo(HS);const VS=M`
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
`;function jS(e){const{label:t="Color: ",onColorChange:n=()=>null,name:o,value:s="#000000"}=e,[i,r]=c.exports.useState(!1),[l,a]=c.exports.useState(s);c.exports.useEffect(()=>{a(s)},[s]);const u=c.exports.useCallback(()=>{r(!i)},[i]),p=c.exports.useCallback(()=>{r(!1)},[]),h=c.exports.useCallback(m=>{const g=`${m.hex}${Math.round(m.rgb.a*255).toString(16)}`;a(g),n(k(b({},m),{hex:g,name:o}))},[o,n]);return w("div",{css:VS,children:[d("span",{className:"inputLabel",children:t}),w("div",{style:{flex:4},children:[w("div",{className:"swatch",onClick:u,children:[d("div",{className:"color",style:{backgroundColor:l}}),d("input",{type:"hidden",value:l,name:o})]}),i?w("div",{className:"color-popover",children:[d("div",{className:"cover",onClick:p}),d(Xl.ChromePicker,{color:{hex:l},onChangeComplete:h})]}):null]})]})}var BS=c.exports.memo(jS);function XS(e){const l=e,{onColorChange:t=()=>null,name:n}=l,o=G(l,["onColorChange","name"]),{values:s,setFieldValue:i}=he(),r=c.exports.useCallback(a=>{t(a),i(n,a.hex)},[n,t,i]);return f(BS,k(b({},o),{name:n,onColorChange:r,value:B(s,n)}))}var YS=c.exports.memo(XS);const Ns={row:{display:"flex",margin:"5px 0px",alignItems:"center"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center"}};function GS(e){const{label:t,checkControllerName:n,formatControllerName:o,disableFormat:s=!1,hideFormat:i=!1}=e,{values:r,handleChange:l,setFieldValue:a}=he(),u=c.exports.useCallback(h=>{l(h)},[l]),p=c.exports.useCallback(h=>{a(h.target.name,h.target.checked)},[a]);return _("div",{style:Ns.row,children:[f("span",{style:Ns.inputLabel,children:t}),_("div",{style:{flex:4,display:"flex",flexDirection:"row",alignItems:"center"},children:[f("input",{type:"checkbox",style:{margin:"0px 5px"},name:n,onChange:p,checked:B(r,n,!1)}),!i&&o&&f(wt,{style:{inputWrapper:Ns.input},name:o,value:B(r,o,""),onChange:u,type:"text",disabled:s})]})]})}var Fe=c.exports.memo(GS);const xo={container:{display:"flex"},label:{lineHeight:2,userSelect:"none",flex:"2"},inputContainer:{flex:"4",display:"flex",justifyContent:"flex-start"},input:{height:"100%",width:"100px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"}},cn=c.exports.forwardRef(({label:e,name:t,defaultValue:n=0,style:o={label:{},input:{},container:{},inputContainer:{}},onChange:s=()=>null,onInput:i=()=>null,pattern:r="^d*(.d{0,2})?$",step:l="any",min:a="any",max:u="any"},p)=>{const h=c.exports.useRef(null),m=c.exports.useCallback(g=>{if(g.target.checkValidity()){const x=Number(g.target.value===""?n:g.target.value);s(k(b({},g),{target:k(b({},g.target),{name:g.target.name,value:x})}))}else{const x=p||h;x.current.value=Number(n)}},[n,s,p]);return _("div",{style:b(b({},xo.container),o.container),children:[f("span",{style:b(b({},xo.label),o.label),children:e}),f("div",{style:b(b({},xo.inputContainer),o.inputContainer),children:f("input",{ref:p||h,name:t,style:b(b({},xo.input),o.input),type:"number",pattern:r,defaultValue:n,step:l,onChange:m,onInput:i,min:a,max:u},n)})]})});function Js(e){const l=e,{label:t,name:n}=l,o=G(l,["label","name"]),{values:s,handleChange:i}=he(),r=c.exports.useCallback(a=>{i(a)},[i]);return f(cn,b({label:t,name:n,defaultValue:B(s,n),onChange:r},o))}function vs(){const{tabActiveSpectrum:e}=$();return c.exports.useMemo(()=>e&&Object.keys(e).length>0?Object.keys(e):[],[e])}const Fn={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},WS=[{id:1,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:2,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function ZS({nucleus:e,preferences:t,innerRef:n}){const o=se(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=Ot,{color:a,strokeWidth:u}=l,p=G(l,["color","strokeWidth"]),h=ft(t.current,"formatting.panels.integrals");let m=e.reduce((g,x)=>(g[x]=p,g),{});m=Object.assign(m,{color:a,strokeWidth:u}),s.current.setValues(h||m)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"integrals",value:l}}),o.success("Integrals preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:Fn.container,children:_(ce,{onSubmit:r,ref:s,children:[_("div",{style:Fn.groupContainer,children:[f("p",{style:Fn.header,children:"General"}),f(YS,{name:"color"}),f(Js,{name:"strokeWidth",label:"stroke width :",style:{label:{fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center",borderRadius:"5px"}},min:1,max:9,pattern:"[1-9]+"})]}),e==null?void 0:e.map(l=>_("div",{style:Fn.groupContainer,children:[f("p",{style:Fn.header,children:f(oi,{mf:l})}),WS.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id))]},l))]})})}const US=c.exports.memo(ZS);function KS(e,t){const n=le(),o=vs();return f(US,{innerRef:t,nucleus:o,preferences:n})}var qS=c.exports.forwardRef(KS);const JS=M`
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
`;function QS({integrals:e,info:t,activeTab:n,xDomain:o,preferences:s}){var D;const[i,r]=c.exports.useState(!1),l=X(),a=fe(),[u,p]=c.exports.useState(!1),h=c.exports.useRef(),m=c.exports.useCallback(()=>{l({type:ls,integralID:null})},[l]),g=c.exports.useCallback(()=>{a.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:m},{text:"No"}]})},[a,m]),x=c.exports.useCallback(N=>{l({type:jc,value:N}),a.close()},[l,a]),y=c.exports.useMemo(()=>B(e,"options.sum",null),[e]),S=c.exports.useCallback(()=>{a.show(d(Rd,{onClose:()=>a.close(),onSave:x,header:y?`Set new Integrals Sum (Current: ${Number(y).toFixed(2)})`:"Set new Integrals Sum",sumOptions:e==null?void 0:e.options}))},[x,y,e==null?void 0:e.options,a]),v=c.exports.useCallback(()=>{p(!u)},[u]),C=c.exports.useCallback(()=>{h.current.saveSetting(),p(!1)},[]),E=c.exports.useCallback(()=>{r(!i)},[i]),T=c.exports.useCallback(N=>{l({type:ku,payload:N})},[l]),I=c.exports.useMemo(()=>{function N(A,P){return P=P*1e4,A=A*1e4,P>=o[0]*1e4&&A<=o[1]*1e4||A<=o[0]*1e4&&P>=o[1]*1e4}return t.dimension===1&&(e==null?void 0:e.values)?(i?e.values.filter(P=>N(P.from,P.to)):e.values).map(P=>k(b({},P),{isConstantlyHighlighted:N(P.from,P.to)})):[]},[i,t.dimension,e,o]);return d(c.exports.Fragment,{children:w("div",{css:[Nt,JS,u&&M`
              th {
                position: relative;
              }
            `],children:[!u&&w(ot,{counter:(D=e==null?void 0:e.values)==null?void 0:D.length,onDelete:g,deleteToolTip:"Delete All Integrals",onFilter:E,filterToolTip:i?"Show all integrals":"Hide integrals out of view",filterIsActive:i,counterFiltered:I.length,showSettingButton:!0,onSettingClick:v,children:[d(Ee,{title:y?`Change Integrals Sum (${Number(y).toFixed(2)})`:"Change Integrals Sum",popupPlacement:"right",children:d("button",{className:"sum-button",type:"button",onClick:S,children:d(Yl,{})})}),d(Ge,{className:"fix-integral-toggle-btn",popupTitle:"fix integral values",popupPlacement:"right",onClick:T,children:d(Gl,{})})]}),u&&d(Pn,{onSave:C,onClose:v}),d("div",{className:"inner-container",children:u?d(qS,{ref:h}):d(zS,{data:I,activeTab:n,preferences:s})})]})})}const ek=c.exports.memo(QS),tk={integrals:{},info:{}};function nk(){const{xDomain:e,activeTab:t}=$(),n=le(),{integrals:o,info:s}=Ce(tk);return d(ek,{integrals:o,info:s,preferences:n.current,xDomain:e,activeTab:t})}function te(e){const{title:t,className:n="",children:o,style:s}=e;return _("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{className:n,style:b({fontSize:"11px",fontWeight:"bold",color:"#232323",paddingRight:"10px",width:"max-content"},s==null?void 0:s.label),children:t}),f("div",{style:s==null?void 0:s.wrapper,children:o})]})}const ok={from:-1,to:1,nbPoints:1024};function sk({onClose:e=()=>null}){const t=c.exports.useRef(),{data:n}=$(),o=c.exports.useCallback(()=>{t.current.submitForm()},[]),s=c.exports.useCallback(i=>{AC(n,i,"fileName"),e()},[n,e]);return c.exports.useEffect(()=>{function i(r){const[l,a]=r.range;t.current.setValues(k(b({},t.current.values),{from:l,to:a}))}return pe.on("brushEnd",i),()=>{pe.off("brushEnd",i)}},[]),w("div",{css:mt,children:[w("div",{className:"header handle",children:[d("span",{children:"Export spectra as a Matrix"}),d(me,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",children:w(ce,{ref:t,initialValues:ok,onSubmit:s,children:[w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Range :"}),d(te,{title:"From : ",children:d(Z,{name:"from",type:"number"})}),d(te,{title:"To : ",children:d(Z,{name:"to",type:"number"})})]}),d("div",{className:"row margin-10",children:d(te,{title:"Number of Points :",className:"custom-label",children:d(Z,{name:"nbPoints",type:"number"})})})]})}),d("div",{className:"footer-container",children:d(de.Done,{onClick:o,children:"Export Now"})})]})}function ik({onSubmit:e},t){const{xDomain:n}=$();return _(ce,{ref:t,initialValues:{from:n[0],to:n[1],numberOfPoints:1024},onSubmit:e,children:[_("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(te,{title:"From : ",children:f(Z,{name:"from",type:"number"})}),f(te,{title:"To : ",children:f(Z,{name:"to",type:"number"})})]}),f("div",{className:"row margin-10",children:f(te,{className:"custom-label",title:"Number of points : ",children:f(Z,{name:"numberOfPoints",type:"number"})})})]})}var rk=c.exports.forwardRef(ik);function lk({onSubmit:e},t){const{xDomain:n}=$();return f(ce,{ref:t,initialValues:{from:n[0],to:n[1]},onSubmit:e,children:_("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(te,{title:"From :",children:f(Z,{name:"from",type:"number"})}),f(te,{title:"To :",children:f(Z,{name:"to",type:"number"})})]})})}var ak=c.exports.forwardRef(lk);const ck=[{key:0,value:0,label:"Select Filter"},{key:No,value:No,label:va},{key:Yn,value:Yn,label:ga},{key:Bs,value:Bs,label:Da},{key:zs,value:zs,label:ha},{key:js,value:js,label:wa}],uk=M`
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
`;function dk({onClose:e=()=>null,nucleus:t=""}){const n=c.exports.useRef(),o=X(),[s,i]=c.exports.useState(""),r=c.exports.useMemo(()=>{const h=Ht[t]?Object.entries(Ht[t]).map(m=>({key:m[0],value:m[0],label:m[0]}),[]):[];return ck.concat(h)},[t]),l=c.exports.useCallback(h=>{h.preventDefault(),n.current&&n.current.submitForm()},[]),a=c.exports.useCallback(h=>{h&&(o({type:yu,payload:[{name:s,options:h}]}),e())},[o,s,e]);c.exports.useEffect(()=>{function h(m){const[g,x]=m.range;n.current&&n.current.setValues(k(b({},n.current.values),{from:g,to:x}))}return pe.on("brushEnd",h),()=>{pe.off("brushEnd",h)}},[]);const u=c.exports.useCallback(h=>{i(h)},[]),p=c.exports.useMemo(()=>{switch(s){case No:return d(ak,{onSubmit:a,ref:n});case Yn:return d(rk,{onSubmit:a,ref:n})}},[s,a]);return w("div",{css:[mt,uk],children:[w("div",{className:"header handle",children:[d("span",{children:"Apply filters"}),d(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content container",children:[d("p",{className:"infoText",children:"This filter will use the exclusions zones defined in the first spectrum."}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Filter :"}),d(Me,{data:r,style:{width:275,height:30,margin:0},onChange:u})]}),p]}),d("div",{className:"footer-container",children:d(Kt,{style:{flexDirection:"row-reverse",margin:0},onDone:l,doneLabel:"Save",onCancel:e,cancelLabel:"Close"})})]})}function pk(){const e=fe(),t=X(),n=c.exports.useCallback(()=>{t({type:ut}),e.show(d(dk,{}),{isBackgroundBlur:!1,position:ne.TOP_CENTER,width:550,height:250})},[e,t]),o=c.exports.useCallback(()=>{t({type:ut}),e.show(d(sk,{}),{isBackgroundBlur:!1,position:ne.TOP_CENTER,width:500})},[e,t]);return w("div",{css:Nt,children:[w(ot,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,children:[d(ke,{popupTitle:"Add Filter",onClick:n,children:d(qp,{style:{fontSize:"18px"}})}),d(ke,{popupTitle:"Export spectra as a Matrix",onClick:o,children:d(Jp,{})})]}),d("div",{className:"inner-container"})]})}function hk(e){const{onClose:t=()=>null,selectedMolecule:n}=e,[o,s]=c.exports.useState(null),i=X();c.exports.useEffect(()=>{s(n?n.molfile:null)},[n]);const r=c.exports.useCallback(u=>{var h,m;const p=(m=(h=/(?<s>M {2}V30 BEGIN BOND)(?<mol>.*?)(?<e>M {2}V30 END BOND)/gs.exec(u))==null?void 0:h.groups)==null?void 0:m.mol;s(p!=null&&p.trim()?u:null)},[s]),l=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(()=>{n?(i({type:Ri,molfile:o,key:n.key}),t("replace")):(i({type:Ni,molfile:o}),t("new"))},[i,n,o,t]);return w("div",{css:mt,children:[d(Qp,{initialMolfile:n==null?void 0:n.molfile,svgMenu:!0,fragment:!1,onChange:r}),d("div",{className:"footer-container",children:d(Kt,{style:{flexDirection:"row-reverse",margin:0},onDone:a,doneLabel:"Save",onCancel:l})})]})}const fk=M`
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
`;function mk({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,d("span",{children:t})]})}function gk({items:e,boxBounding:t,onClick:n}){return d("div",{className:"menu",style:{transform:`translate(${t.width}px, -${t.height}px) `},children:e==null?void 0:e.map(o=>d(mk,k(b({},o),{onClick:()=>n(o)}),o.id))})}function xk({style:e,component:t,toolTip:n="",className:o,items:s=[],onClick:i=()=>null}){var m;const r=c.exports.useRef(null),[l,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{a(!1)},[]),p=c.exports.useCallback(()=>{a(g=>!g)},[]),h=c.exports.useCallback(g=>{a(!1),i(g)},[i]);return w("div",{style:{height:"auto"},css:fk,children:[d("button",{ref:r,type:"button",css:e,onClick:p,className:o,style:{boxSizing:"border-box"},children:d(Ee,{title:n,popupPlacement:"right",children:t})}),l&&d(gk,{items:s,boxBounding:(m=r.current)==null?void 0:m.getBoundingClientRect(),onClick:h}),l&&d("div",{className:"menu-cover",onClick:u})]})}function rr(e,t,n){const{power:o=2,format:s=bk}=n||{};let i=[];for(let r=e;r<=t;r++){const l=o**r;i.push({key:l,label:s(l),value:l})}return i}function bk(e){return e>=1024*1024?`${e/(1024*1024)}M`:e>=1024?`${e/1024}K`:e}function Le(n){var o=n,{value:e=""}=o,t=G(o,["value"]);return f("div",k(b({},t),{dangerouslySetInnerHTML:{__html:e.replace(/(?<isotope>[0-9]+)/g,"<sup>$<isotope></sup>")}}))}const al={container:{backgroundColor:"#fd000c",borderRadius:"5px",padding:"0.4rem"},text:{color:"white",margin:"0.5px",fontSize:"0.9em",listStyle:"inside"}},yk=e=>{const t=[];function n(o){Object.keys(o).forEach(s=>{typeof o[s]=="object"?n(o[s]):t.push(o[s])})}return n(e),t};function Md({style:e}){const{errors:t,isValid:n}=he(),o=c.exports.useMemo(()=>yk(t),[t]);return n?f("div",{}):f("ul",{style:b(b({},al.container),e==null?void 0:e.container),children:o.map((s,i)=>f("li",{style:b(b({},al.text),e==null?void 0:e.text),children:s},i))})}const rn=function(t){const u=t,{name:n="",value:o,onChange:s=()=>null}=u,i=G(u,["name","value","onChange"]),{values:r,setFieldValue:l}=he(),a=c.exports.useCallback(p=>{s(p),l(n,p)},[n,s,l]);return c.exports.useEffect(()=>{o&&l(n,o)},[n,l,o]),f(Me,b({name:n,defaultValue:o||B(r,n),onChange:a},i))},vk=M`
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
`,Ck=rr(12,19),cl=rr(10,10,{format:e=>e}),Sk=Q().shape({name:rt().required().label("Name"),frequency:ae().integer().required().label("Frequency"),"1d":Q({"1H":Q({from:ae().integer().required().label("1H ' From ' "),to:ae().integer().required().label("1H ' To ' ")}),"13C":Q().shape({from:ae().integer().required().label("13C ' From ' "),to:ae().integer().required().label("13C ' To ' ")}),lineWidth:ae().integer().min(1).required().label("Line Width"),nbPoints:ae().integer().required().label("1D Number Of Points")}),"2d":Q({nbPoints:Q({x:ae().integer().required().label("2D Number Of Points"),y:ae().integer().required().label("2D Number Of Points")})}),spectra:Q({proton:Rn(),carbon:Rn(),cosy:Rn(),hsqc:Rn(),hmbc:Rn()}).test("check-options","You must check one of the options to start prediction",e=>!!Object.values(e).includes(!0))});function kk({onClose:e=()=>null,molfile:t}){const n=c.exports.useRef(),o=X(),s=se(),[i,r]=c.exports.useState(!1),[l,a]=b0("nmrium-prediction-preferences"),{toolOptions:{data:{predictionIndex:u}}}=$(),p=c.exports.useCallback(()=>{n.current.submitForm()},[]),h=c.exports.useMemo(()=>{const S=l,{isApproved:x}=S,y=G(S,["isApproved"]);return r(x),Object.assign(ec,y,{name:`Prediction ${u+1}`})},[l,u]),m=c.exports.useCallback(x=>{(async()=>{a(k(b({},x),{isApproved:i})),o({type:St,isLoading:!0});const y=Object.entries(x.spectra).reduce((v,[C,E])=>(E&&v.push(C),v),[]).join(" , "),S=await s.showLoading(`Predict ${y} in progress`);o({type:ps,payload:{mol:t,options:x}}),S(),e()})()},[s,o,i,t,e,a]),g=c.exports.useCallback(x=>{r(x.target.checked)},[]);return w("div",{css:[mt,vk],children:[w("div",{className:"header handle",children:[d("span",{children:"Prediction of NMR spectrum"}),d(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content",children:[w(ce,{ref:n,initialValues:h,validationSchema:Sk,onSubmit:m,children:[d(Md,{}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Name :"}),d(Z,{name:"name",style:{input:{width:"200px",textAlign:"left"}}})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Spectrometer Frequency :"}),d(rn,{data:tc,style:{width:290,height:30,margin:0},name:"frequency"})]}),d("span",{className:"group-label",children:"1D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[d(Le,{value:"1H",className:"custom-label"}),d(te,{title:"From",children:d(Z,{name:"1d.1H.from",type:"number"})}),d(te,{title:"To",style:{label:{padding:"0 10px"}},children:d(Z,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[d(Le,{value:"13C",className:"custom-label"}),d(te,{title:"From",children:d(Z,{name:"1d.13C.from",type:"number"})}),d(te,{title:"To",style:{label:{padding:"0 10px"}},children:d(Z,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Line Width : "}),d(Z,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),d("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Number of Points : "}),d(rn,{data:Ck,name:"1d.nbPoints",style:{width:290,height:30,margin:0}})]}),d("span",{className:"group-label",children:"2D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Number of Points : "}),d(rn,{data:cl,name:"2d.nbPoints.x",style:{margin:0,height:30}}),d("span",{className:"middle-x",children:" X "}),d(rn,{data:cl,name:"2d.nbPoints.y",style:{margin:0,height:30}})]}),d("div",{className:"row margin-10",children:d("span",{className:"group-label",children:"Spectra "})}),w("div",{className:"row margin-10 padding-h-10",style:{justifyContent:"space-between"},children:[w("div",{className:"row",children:[d(xt,{name:"spectra.proton"}),d(Le,{value:"1H",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(xt,{name:"spectra.carbon"}),d(Le,{value:"13C",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(xt,{name:"spectra.cosy"}),d(Le,{value:"COSY",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(xt,{name:"spectra.hsqc"}),d(Le,{value:"HSQC",className:"nucleus-label"})]}),w("div",{className:"row",children:[d(xt,{name:"spectra.hmbc"}),d(Le,{value:"HMBC",className:"nucleus-label"})]})]})]}),d("p",{className:"warning",children:"In order to predict spectra we are calling an external service and the chemical structure will leave your browser! You should never predict spectra for confidential molecules."}),w("div",{className:"warning-container",children:[d(po,{onChange:g,checked:i},String(i)),d("p",{children:"I confirm that the chemical structure is not confidential."})]})]}),d("div",{className:"footer-container",children:d(de.Done,{onClick:p,disabled:!i,children:"Predict spectrum"})})]})}const wk=M`
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
`,Ek=[{id:"molfile",icon:d(ri,{}),label:"Copy as molfile"},{id:"png",icon:d(Zl,{}),label:"Copy as PNG"},{id:"svg",icon:d(Ul,{}),label:"Export as SVG"}];function Ak({currentIndex:e,molecules:t,onMoleculeIndexChange:n=()=>null,onOpenMoleculeEditor:o=()=>null,actionsOptions:s={}}){const{rootRef:i}=ms(),r=se(),l=X(),a=fe(),u=je(),p=c.exports.useCallback(()=>{!i||Cd(i,`molSVG${e}`,"molFile")},[i,e]),h=c.exports.useCallback(()=>{!i||(Sd(i,`molSVG${e}`),r.success("MOL copied as PNG to clipboard"))},[i,r,e]),m=c.exports.useCallback(()=>{t[e]&&bs(t[e].molfile).then(v=>{v?r.success("MOLFile copied to clipboard"):r.error("copied not completed")})},[r,e,t]),g=c.exports.useCallback(({id:v})=>{switch(v){case"molfile":m();break;case"png":h();break;case"svg":p();break}},[m,h,p]),x=c.exports.useCallback(()=>{navigator.clipboard.readText().then(v=>{l({type:Ni,molfile:v})})},[l]),y=c.exports.useCallback(()=>{var v;(v=t[e])!=null&&v.key&&(n(0),l({type:Cc,payload:{key:t[e].key,assignmentData:u}}))},[t,e,n,l,u]),S=c.exports.useCallback(()=>{a.show(d(kk,{molfile:t[e]}),{position:ne.TOP_CENTER,enableResizing:!0,width:600})},[a,t,e]);return w("div",{css:wk,children:[!s.hideExport&&d(xk,{component:d(qo,{}),toolTip:"Export As",items:Ek,onClick:g}),!s.hidePast&&d(Ee,{title:"Paste molfile",popupPlacement:"left",children:d("button",{className:"bar-button",type:"button",onClick:x,children:d(eh,{})})}),!s.hideAdd&&d(Ee,{title:"Add Molecule",popupPlacement:"left",children:d("button",{className:"bar-button",type:"button",onClick:o,"data-test-id":"panel-structures-button-add",children:d(yn,{})})}),!s.hideDelete&&d(Ee,{title:"Delete Molecule",popupPlacement:"left",children:d("button",{className:"bar-button",type:"button",onClick:y,children:d(At,{})})}),!s.hidePredict&&t&&t.length>0&&d(ke,{popupTitle:"Predict Spectra",popupPlacement:"left",onClick:S,children:d(Wl,{})}),w("p",{children:[t&&t.length>0&&`${+(e+1)} / ${t.length}`," "]})]})}function Tk(e){return e.split(",").map(n=>n.replace(/[0-9]/g,""))}function ul(e,t,n){const o=Tk(t);if(o.length>0&&Object.keys(e).length>0){const s=n==="x"?0:n==="y"?1:null;switch(s!==null&&o[s]){case e.atomLabel:return{oclIDs:[e.oclID],nbAtoms:e.nbAtoms};case"H":return{oclIDs:e.hydrogenOCLIDs,nbAtoms:e.nbAtoms*e.nbHydrogens};default:return{oclIDs:[e.oclID].concat(e.hydrogenOCLIDs),nbAtoms:e.nbAtoms+e.nbAtoms*e.nbHydrogens}}}return{oclIDs:[],nbAtoms:0}}function Qs(e,t){let n=e.find(s=>s.id===t),o;if(!n){for(const s of e)if(o=s.signals.findIndex(i=>i.id===t),o>=0){n=s;break}}return{datum:n,signalIndex:o}}function Dk(e,t,n){var i;let o=[];const s=e.data.assignments;for(const r in s){const l=s[r];for(const a in l)if((i=l[a])!=null&&i.some(u=>t.includes(u))){o=o.concat(l[a]);const{datum:u,signalIndex:p}=Qs(n,r);u&&(o.push(u.id),p!==void 0&&o.push(u.signals[p].id))}}return o}function Ik(e){const{highlighted:t,assignments:n}=e.data,o=t?n[t.id]:null,s=t?t.axis:null;return s&&o&&o[s]?o[s]:((o==null?void 0:o.x)||[]).concat((o==null?void 0:o.y)||[])}function Pk(e,t){let n=e?e.slice():[];const{nbAtoms:o,oclIDs:s}=t;let i=o;return s.forEach(r=>{n.includes(r)?(i*=-1,n=n.filter(l=>l!==r)):n.push(r)}),[n,i]}function Nk({displayerMode:e,activeTab:t,zones:n,ranges:o}){var T;const s=se(),i=X(),r=Tn(),l=je(),a=dt(l.data.activated?l.data.activated.id:td),[u,p]=c.exports.useState([]),[h,m]=c.exports.useState(null);c.exports.useEffect(()=>{h&&(h==="show"?r.dispatch({type:"SHOW",payload:{convertedHighlights:u}}):h==="hide"&&(r.dispatch({type:"HIDE",payload:{convertedHighlights:u}}),p([])),m(null))},[h,u,r]);const g=c.exports.useMemo(()=>{if(n||o){if(e===Y.DM_1D&&o&&o.values)return o.values;if(e===Y.DM_2D&&n&&n.values)return n.values}return[]},[e,o,n]),x=c.exports.useMemo(()=>{const I={x:[],y:[]},D=l.data.assignments;for(let N in D)D[N].x&&I.x.push(...D[N].x),D[N].y&&I.y.push(...D[N].y);return I},[l.data]),y=c.exports.useMemo(()=>x.x.concat(x.y),[x.x,x.y]),S=c.exports.useMemo(()=>{let I=[];return r.highlight.highlighted.forEach(D=>{var A;if(l.data.assignments[D]){const{datum:P}=Qs(g,D),R=(A=r.highlight.sourceData)==null?void 0:A.type;P&&(R===ue.ZONE||R===ue.RANGE)&&(I=I.concat(P.signals.map(H=>qi(l,[H.id]).length>0?H.diaIDs:[]).flat()))}}),Ik(l).concat(I)},[l,g,r.highlight.highlighted,(T=r.highlight.sourceData)==null?void 0:T.type]),v=c.exports.useCallback((I,D)=>Pk(I,D),[]),C=c.exports.useCallback((I,D)=>{var N,A,P;if(!Gt(D)&&a.activated){const{axis:R,id:H}=a.activated;if(H&&R){const L=ul(I,t,R);if(L.nbAtoms>0){const z=e===Y.DM_1D?"1D":"2D";a.toggle(L.oclIDs,z);const{datum:V,signalIndex:W}=Qs(g,a.id);if(V)if(e===Y.DM_1D){const O=V;let j=[];W===void 0?j=(O==null?void 0:O.diaIDs)||[]:j=((N=O==null?void 0:O.signals[W])==null?void 0:N.diaIDs)||[];const[U,ee]=v(j,L);i({type:ru,payload:{nbAtoms:ee,rangeData:V,diaIDs:U,signalIndex:W}})}else{const O=V;let j=[];W===void 0?j=((A=O[R])==null?void 0:A.diaIDs)||[]:j=((P=O==null?void 0:O.signals[W][R])==null?void 0:P.diaIDs)||[];const[U,ee]=v(j,L);i({type:gu,payload:{nbAtoms:ee,zoneData:V,diaIDs:U,axis:R,signalIndex:W}})}a.setActive(R)}else s.info("Not assigned! Different atom type or no attached hydrogens found!")}}},[a,s,g,i,e,t,v]);return{handleOnAtomHover:c.exports.useCallback(I=>{const{oclIDs:D}=ul(I,t);if(D.length>0){const N=Dk(l,D,g);p(N),m("show")}else m("hide")},[l,g,t]),handleOnClickAtom:C,currentDiaIDsToHighlight:S,assignedDiaIDsMerged:y}}const Ft={panel:M({display:"flex",overflow:"auto",flexGrow:1,width:"100%",height:"100%",flexDirection:"column"}),innerPanel:M({display:"flex",flex:"1",flexDirection:"column",overflow:"auto"}),molecule:M({display:"flex",flex:"1"}),toolbar:M({display:"flex",borderBottom:"0.55px solid rgb(240, 240, 240)",padding:"0px 10px",justifyContent:"end",height:22}),slider:M({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1,minHeight:0}),items:M({display:"flex",flexDirection:"column",flex:"1 1 0%",height:"100%",minHeight:0})};function Rk({zones:e,ranges:t,molecules:n,activeTab:o,displayerMode:s,onMoleculeChange:i,actionsOptions:r,children:l}){const[a,u]=c.exports.useState(0),[p,h]=c.exports.useState([]),m=X(),g=fe(),{currentDiaIDsToHighlight:x,handleOnAtomHover:y,handleOnClickAtom:S,assignedDiaIDsMerged:v}=Nk({zones:e,ranges:t,activeTab:o,displayerMode:s});c.exports.useEffect(()=>{n&&h(I=>(n.length>I.length&&u(p.length),n))},[p.length,n]),c.exports.useEffect(()=>{i==null||i(p[a]||null)},[a,p,i]);const C=c.exports.useCallback((I,D)=>{m({type:Ri,molfile:D,key:I})},[m]),E=c.exports.useCallback((I=null)=>{g.show(d(hk,{selectedMolecule:I}),{position:ne.TOP_CENTER,width:700,height:500})},[g]),T=c.exports.useCallback(I=>{u(I)},[]);return w("div",{css:Ft.panel,children:[d(Ak,{currentIndex:a,molecules:p,onOpenMoleculeEditor:()=>E(),onMoleculeIndexChange:T,actionsOptions:r}),w("div",{css:Ft.innerPanel,children:[d("div",{css:Ft.molecule,children:d(Pd,{onChange:I=>u(I),defaultIndex:a,children:p&&p.length>0?p.map((I,D)=>{var N;return w("div",{css:Ft.items,children:[w("span",{css:Ft.toolbar,children:[d(oi,{mf:I.mf})," - ",(N=I.mw)==null?void 0:N.toFixed(2)]}),d("div",{css:Ft.slider,className:"mol-svg-container",onDoubleClick:()=>E(I),style:{backgroundColor:(D+1)%2!==0?"#fafafa":"white"},children:d(si,{children:({height:A,width:P})=>d(th,{OCL:Et,id:`molSVG${D}`,width:P,height:A,molfile:I.molfile||"",setMolfile:R=>C(I.key,R),setSelectedAtom:S,atomHighlightColor:x&&x.length>0?"red":"#FFD700",atomHighlightOpacity:.35,highlights:x&&x.length>0?x:v,setHoverAtom:y})})})]},I.key)}):d("div",{css:Ft.slider,style:{height:"100%"},onClick:()=>E(),children:d("span",{children:"Click to draw molecule"})})})}),l]})]})}const Mk=c.exports.memo(Rk),_k={ranges:{},zones:{}};function _d({onMoleculeChange:e,children:t,actionsOptions:n}){const{molecules:o,displayerMode:s,activeTab:i}=$(),r=Ce(_k),l=(r==null?void 0:r.ranges)||{},a=(r==null?void 0:r.zones)||{};return d(Mk,{molecules:o,displayerMode:s,activeTab:i,ranges:l,zones:a,onMoleculeChange:e,actionsOptions:n,children:t})}const Fk=[{key:1,value:"manual",label:"Manual"}];function Lk({onClose:e=()=>null,nucleus:t}){const n=c.exports.useRef(),o=X(),s=c.exports.useMemo(()=>{const a=Ht[t]?Object.entries(Ht[t]).map(u=>({key:u[0],value:u[0],label:u[0]}),[]):[];return Fk.concat(a)},[t]),i=c.exports.useCallback(()=>{n.current.submitForm()},[]),r=c.exports.useCallback(a=>{o({type:pu,payload:a}),e()},[o,e]);c.exports.useEffect(()=>{function a(u){const[p,h]=u.range;n.current.setValues(k(b({},n.current.values),{from:p,to:h}))}return pe.on("brushEnd",a),()=>{pe.off("brushEnd",a)}},[]);const l=c.exports.useCallback(a=>{const m=Ht[t][a]||{delta:0},{delta:p=0}=m,h=G(m,["delta"]);n.current.setValues(b(k(b({},n.current.values),{targetX:p}),h))},[t]);return w("div",{css:mt,children:[w("div",{className:"header handle",children:[d("span",{children:"Spectra calibration"}),d(me,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",style:{flex:1},children:w(ce,{ref:n,initialValues:{from:-1,to:1,nbPeaks:1,targetX:0},onSubmit:r,children:[w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Options :"}),d(Me,{data:s,style:{width:270,height:30,marginBottom:"20px"},onChange:l})]}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Range :"}),d(te,{title:"From : ",children:d(Z,{name:"from",type:"number"})}),d(te,{title:"To : ",children:d(Z,{name:"to",type:"number"})})]}),d("div",{className:" margin-10",children:d(te,{className:"custom-label",title:"Number of Peaks : ",children:d(Z,{name:"nbPeaks",type:"number"})})}),d("div",{className:" margin-10",children:d(te,{className:"custom-label",title:"Target PPM :",children:d(Z,{name:"targetX",type:"number"})})})]})}),d("div",{className:"footer-container",children:d(de.Done,{onClick:i,children:"Done"})})]})}function Fd(e,t=null){try{return new Function("args",`return ${e}`)(t)}catch(n){return n}}const Ok=`function run(data) {

  return JSON.stringify(data,undefined, 2);
  
}(args);
`;function $k({data:e}){const{values:t,setFieldValue:n}=he(),[o,s]=c.exports.useState(t.code?t.code:Ok),[i,r]=c.exports.useState("");return c.exports.useEffect(()=>{const l=Fd(o,e);l instanceof Error?r(l.message):(n("code",o),r(l))},[o,e,n]),w("div",{style:{marginTop:"20px"},children:[d("textarea",{value:o,onChange:l=>s(l.target.value),style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",backgroundColor:"#fcfcfc",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}}),d("p",{style:{marginBottom:"5px"},children:"Result:"}),d("textarea",{value:i,readOnly:!0,style:{border:"0.55px solid #f3f3f3",fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}})]})}var Hk=c.exports.memo($k);const zk=M`
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
`;function Vk({data:e,onAfterSave:t},n){const o=X(),s=c.exports.useRef(),[i,r]=c.exports.useState({});c.exports.useImperativeHandle(n,()=>({saveSetting(){s.current.submitForm()}})),c.exports.useEffect(()=>{const h=Object.keys(e.columns).reduce((m,g)=>(m[g]=k(b({},e.columns[g]),{tempKey:g}),m),{});r(h),s.current.setValues({columns:h,code:e.code})},[e]);const l=c.exports.useMemo(()=>Object.keys(i),[i]),a=c.exports.useMemo(()=>{function h(){return l.reduce((m,g)=>(m[g]=Q().shape(k(b({tempKey:rt().required().test("unique","must be unique column name",x=>{const y=s.current.values.columns;return Object.keys(y).reduce((S,v)=>(y[v].tempKey===x&&S.push(x),S),[]).length===1})},i[g].type===Bo.FORMULA?{formula:rt().required()}:{}),{index:rt().required()})),m),{})}return Q().shape({columns:Q().shape(h())})},[i,l,s]),u=c.exports.useCallback(h=>{t==null||t(!0);const m=Object.entries(h.columns).reduce((g,[x,y])=>(g[x]=b(b({},i[x]),y),g),{});o({type:uu,payload:{code:h.code,columns:m}})},[i,o,t]),p=c.exports.useCallback(h=>{r(m=>k(b({},m),{[`temp${h}`]:{tempKey:"",type:"FORMULA",valueKey:"value",formula:"",index:h}}))},[]);return w(ce,{ref:s,initialValues:{columns:i,code:null},validationSchema:a,onSubmit:u,children:[l&&w("table",{css:zk,children:[d("thead",{children:w("tr",{children:[d("th",{className:"counter",children:"#"}),d("th",{className:"label",children:"Label"}),d("th",{children:"value"}),d("th",{className:"index",children:"index"})]})}),d("tbody",{children:l.map((h,m)=>w("tr",{children:[d("td",{className:"counter",children:m+1}),d("td",{className:"label",children:d(Z,{name:`columns.${h}.tempKey`,value:i[h].tempKey},h)}),d("td",{children:i[h].type===Bo.FORMULA?d(Z,{name:`columns.${h}.formula`,value:i[h].formula}):d("div",{className:"input disbale"})}),d("td",{className:"index",children:d(Z,{name:`columns.${h}.index`,value:i[h].index})}),d("td",{className:"operation-col",children:l.length===m+1&&d("button",{className:"add",type:"button",onClick:()=>p(m+1),children:d(yn,{})})})]},h))})]}),d(Hk,{data:e})]})}var jk=c.exports.forwardRef(Vk);const bo={container:M`
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
  `};function Bk({data:e=[],onSelect:t,renderItem:n=null}){const o=c.exports.useRef(null);return c.exports.useLayoutEffect(()=>{var s;if(o.current){const i=(s=o.current)==null?void 0:s.getBoundingClientRect();i.right>window.innerWidth&&(o.current.style.right=`${i.right-window.innerWidth}px`)}},[]),d("div",{css:bo.container,ref:o,children:d("ul",{css:bo.ul,children:e.map((s,i)=>d("li",{css:bo.li,onClick:()=>t(i),children:(n==null?void 0:n(s))||d("span",{css:bo.label,children:s.label})},s.key))})})}const dl={container:M`
    position: relative;
    padding: 2px;
    border-radius: 10px;
    width: max-content;
    display: inline-block;
    border: 0.55px solid lightgray;
    font-size: 10px;
  `,button:M`
    width: 100%;
  `};function lr(e){const{data:t,selectedKey:n,onSelect:o,formatSelectedValue:s=g=>g.label,renderItem:i=null,style:r}=e,[l,a]=c.exports.useState(!1),[u,p]=c.exports.useState(),h=c.exports.useRef(null);c.exports.useEffect(()=>{if(n){const g=t.find(x=>x.key===n)||null;p(g)}},[n,t]),c.exports.useEffect(()=>{function g(){a(!1)}return window.addEventListener("click",g),()=>window.removeEventListener("click",g)},[]);const m=c.exports.useCallback(g=>{p(t[g]),o==null||o(t[g])},[t,o]);return w("div",{className:"dropdown",ref:h,css:[dl.container,r],children:[d("button",{css:dl.button,type:"button",onClick:g=>{a(x=>!x),g.stopPropagation()},children:u?s(u):d(nh,{})}),l&&d(Bk,{data:t,onSelect:m,renderItem:i})]})}const Xk=e=>M`
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
`,Yk=[{key:Hn.RELATIVE,label:"Relative"},{key:Hn.ABSOLUTE,label:"Absolute"},{key:Hn.MIN,label:"Min Intensity"},{key:Hn.MAX,label:"Max Intensity"}];function Gk({charLabel:e,rangeLabel:t,data:n,onColumnFilter:o}){const s=X(),i=c.exports.useCallback(()=>{s({type:zi,colKey:e})},[e,s]);return w("div",{css:Xk,children:[w("div",{className:"container",children:[n.type===Bo.NORMAL&&d("div",{className:"dropDown-container",children:d(lr,{data:Yk,formatSelectedValue:r=>r.label.substring(0,3),selectedKey:n.valueKey,onSelect:o})}),w("div",{className:"label-container",children:[w("span",{className:"label",children:[" ",e]}),d("span",{className:"label",children:t})]})]}),d(Id,{onDelete:i})]})}function Wk({data:e,activeTab:t}){const n=Be(t),o=c.exports.useMemo(()=>{const l=B(e,"code","");return Fd(l,e)},[e]),s=X(),i=c.exports.useCallback((l,a)=>{s({type:du,payload:{columnKey:l,valueKey:a}})},[s]),r=c.exports.useMemo(()=>{const l=[{Header:"#",index:0,Cell:({row:p})=>p.index+1}];function a(p,h,m){const g=p.original[h][m];return g instanceof Error?f("span",{style:{color:"red"},children:g.message}):n(g)}function u(p,h){return f(Gk,{charLabel:h,data:p,onColumnFilter:m=>i(h,m.key),rangeLabel:p.from&&p.to?`${n(p.from)} - ${n(p.to)}`:""})}return e.columns&&Object.keys(e.columns).forEach(p=>{const{valueKey:h,index:m}=e.columns[p];ys(l,{index:m+1,Cell:({row:g})=>a(g,p,h),Header:()=>u(e.columns[p],p),id:p})}),l.sort((p,h)=>p.index-h.index)},[i,e.columns,n]);return e.values&&e.values.length>0?_(c.exports.Fragment,{children:[f(Dn,{data:e.values,columns:r}),f("div",{style:{width:"100%",padding:"10px"},dangerouslySetInnerHTML:{__html:o}})]}):f(Rt,{})}var Zk=c.exports.memo(Wk);function Uk({activeTab:e,spectraAnalysis:t}){const[n,o]=c.exports.useState(!1),s=c.exports.useRef(),i=se(),r=fe(),l=X(),a=c.exports.useMemo(()=>{const{values:y,options:{columns:S,code:v}}=t[e]||{values:{},options:{columns:{},code:null}};return{values:Object.values(y),columns:S,code:v}},[e,t]),u=c.exports.useCallback(()=>{o(!n)},[n]),p=c.exports.useCallback(()=>{s.current.saveSetting()},[]),h=c.exports.useCallback(()=>{o(!1)},[]),m=c.exports.useCallback(y=>{pe.emit("showYSpectraTrackers",y)},[]),g=c.exports.useCallback(()=>{l({type:ut}),r.show(d(Lk,{nucleus:e}),{isBackgroundBlur:!1,position:ne.TOP_CENTER,width:500})},[e,r,l]),x=c.exports.useCallback(()=>{(async()=>{const y=$y(t,e);await bs(y)?i.success("Data copied to clipboard"):i.error("copy to clipboard failed")})()},[e,i,t]);return w("div",{css:[Nt,n&&M`
            .table-container th {
              position: relative;
            }
          `],children:[!n&&w(ot,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,onSettingClick:u,children:[d(ke,{popupTitle:"Copy To Clipboard",onClick:x,children:d(qo,{})}),d(ke,{popupTitle:"Spectra calibration",onClick:g,children:d(oh,{style:{fontSize:"18px"}})}),d(Ge,{popupTitle:"Y Spectra Tracker",popupPlacement:"right",onClick:m,children:d(sh,{})})]}),n&&d(Pn,{onSave:p,onClose:u}),d("div",{className:"inner-container",children:n?d(jk,{data:a,onAfterSave:h,ref:s}):d(Zk,{data:a,activeTab:e})})]})}const Kk=c.exports.memo(Uk);function qk(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=$();return e?d(Kk,{activeTab:e,spectraAnalysis:t,displayerKey:n}):d("div",{})}const Rs={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},Jk=[{id:1,label:"Peak Number :",checkController:"showPeakNumber",formatController:"peakNumberFormat"},{id:2,label:"Peak Index : ",checkController:"showPeakIndex",formatController:"peakIndexFormat"},{id:3,label:"\u03B4 (ppm) :",checkController:"showDeltaPPM",formatController:"deltaPPMFormat"},{id:4,label:"\u03B4 (Hz) :",checkController:"showDeltaHz",formatController:"deltaHzFormat"},{id:5,label:"Peak Width",checkController:"showPeakWidth",formatController:"peakWidthFormat"},{id:6,label:"Intensity :",checkController:"showIntensity",formatController:"intensityFormat"}];function Qk({nucleus:e,preferences:t,innerRef:n}){const o=se(),s=c.exports.useRef(null),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,p)=>(u[p]=md,u),{}),a=ft(t.current,"formatting.panels.peaks");s.current.setValues(a||l)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"peaks",value:l}}),o.success("Peaks preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Rs.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>_("div",{style:Rs.groupContainer,children:[f(Le,{style:Rs.header,value:l}),Jk.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`,hideFormat:a.formatController==="deltaPPMFormat"},a.id))]},l))})})}const ew=c.exports.memo(Qk);function tw(e,t){const n=vs(),o=le();return f(ew,{innerRef:t,nucleus:n,preferences:o})}var nw=c.exports.forwardRef(tw);function ow({activeTab:e,preferences:t,data:n,info:o}){const s=X(),i=Be(o.nucleus),r=c.exports.useCallback((m,g)=>{m.preventDefault(),m.stopPropagation();const x=g.original;s({type:is,data:{id:x.id,xIndex:x.xIndex}})},[s]),l=c.exports.useMemo(()=>ft(t.current,`formatting.panels.peaks.[${e}]`,md),[e,t]),a=c.exports.useCallback((m,g)=>{const x=parseFloat(m.target.value)-parseFloat(g.value);s({type:Ai,shiftValue:x})},[s]),u=c.exports.useMemo(()=>[{showWhen:"showPeakNumber",index:1,Header:"#",Cell:({row:m})=>m.index+1,style:{width:"1%",maxWidth:"40px",minWidth:"40px"}},{showWhen:"showPeakIndex",index:2,Header:"index",accessor:m=>Ye(m.xIndex,l.peakIndexFormat)},{showWhen:"showDeltaPPM",index:3,Header:"\u03B4 (ppm)",accessor:m=>i(m.value),Cell:({row:m})=>f(at,{value:i(m.original.value),onSave:g=>a(g,m.original),type:"number"})},{showWhen:"showDeltaHz",index:4,Header:"\u03B4 (Hz)",accessor:m=>Ye(m.valueHz,l.deltaHzFormat)},{showWhen:"showIntensity",index:5,Header:"Intensity",style:{maxWidth:"80px"},accessor:m=>Ye(m.intensity,l.intensityFormat)},{showWhen:"showPeakWidth",index:6,Header:"Peak Width",accessor:m=>Ye(m.peakWidth,l.peakWidthFormat)}],[i,l,a]),p=c.exports.useMemo(()=>[{index:20,Header:"",style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:m})=>f("button",{type:"button",className:"delete-button",onClick:g=>r(g,m),children:f(At,{})})}],[r]),h=c.exports.useMemo(()=>{let m=[...p];for(const x of u){const g=x,{showWhen:y}=g,S=G(g,["showWhen"]);l[y]&&ys(m,S)}return m.sort((x,y)=>x.index-y.index)},[u,p,l]);return n&&n.length>0?f(Dn,{data:n,columns:h,approxItemHeight:20,enableVirtualScroll:!0}):f(Rt,{})}var sw=c.exports.memo(ow);function iw({peaks:e,info:t,xDomain:n,activeTab:o,preferences:s}){var E;const[i,r]=c.exports.useState(!1),[l,a]=c.exports.useState(!1),u=Be(t.nucleus),p=X(),h=fe(),m=c.exports.useRef(),g=c.exports.useCallback(()=>{p({type:is,data:null})},[p]),x=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:g},{text:"No"}]})},[h,g]),y=c.exports.useCallback(()=>{a(!l)},[l]),S=c.exports.useCallback(()=>{m.current.saveSetting(),a(!1)},[]),v=c.exports.useCallback(()=>{r(!i)},[i]),C=c.exports.useMemo(()=>{function T(I){return I*1e5>=n[0]*1e5&&I*1e5<=n[1]*1e5}return e!=null&&e.values?(i?e.values.filter(D=>T(D.x)):e.values).map(D=>{const N=Number(u(D.x));return{value:N,valueHz:t!=null&&t.originFrequency?Number(N)*t.originFrequency:"",id:D.id,intensity:D.y,peakWidth:D.width?D.width:"",isConstantlyHighlighted:T(N)}}).sort((D,N)=>D.value-N.value):[]},[i,u,t,e,n]);return w("div",{css:[Nt,l&&M`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!l&&d(ot,{counter:(E=e==null?void 0:e.values)==null?void 0:E.length,onDelete:x,deleteToolTip:"Delete All Peaks",onFilter:v,filterToolTip:i?"Show all peaks":"Hide peaks out of view",filterIsActive:i,counterFiltered:C.length,showSettingButton:!0,onSettingClick:y}),l&&d(Pn,{onSave:S,onClose:y}),d("div",{className:"inner-container",children:l?d(nw,{ref:m}):d(sw,{data:C,activeTab:o,preferences:s,info:t})})]})}const rw=c.exports.memo(iw),lw={peaks:null,info:{}};function aw(){const{xDomain:e,activeTab:t}=$(),{peaks:n,info:o}=Ce(lw),s=le();return d(rw,{peaks:n,info:o,xDomain:e,activeTab:t,preferences:s})}const cw=M`
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
`;function uw({text:e,onClose:t,onCopyClick:n}){return w("div",{css:cw,children:[w("div",{className:"mainButtonsContainer handle",children:[d("button",{type:"button",onClick:()=>n(e),children:d(ri,{})}),d(me,{onClick:t})]}),d("div",{className:"innerContainer",dangerouslySetInnerHTML:{__html:e}})]})}const dw=M`
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
`;function pw({ranges:e,info:t,onUnlink:n,onFilterActivated:o,onSettingClick:s,isFilterActive:i,filterCounter:r,showMultiplicityTrees:l,showJGraph:a,showRangesIntegrals:u}){var H;const p=X(),h=fe(),m=se(),g=le(),x=je(),y=B(e,"options.sum",null),S=c.exports.useCallback(L=>{p({type:Wc,value:L}),h.close()},[p,h]),v=c.exports.useCallback(()=>{h.show(d(Rd,{onClose:()=>h.close(),onSave:S,header:y?`Set new Ranges Sum (Current: ${Number(y).toFixed(2)})`:"Set new Ranges Sum",sumOptions:e==null?void 0:e.options}))},[S,y,h,e==null?void 0:e.options]),C=c.exports.useCallback(()=>{n()},[n]),E=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:C},{text:"No"}]})},[C,h]),T=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All ranges will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{p({type:us,payload:{data:{assignmentData:x}}})}},{text:"No"}]})},[x,p,h]),I=c.exports.useCallback(()=>{p({type:Au})},[p]),D=c.exports.useCallback(()=>{p({type:Tu})},[p]),N=c.exports.useCallback(()=>{p({type:Ru})},[p]),A=c.exports.useCallback(L=>{(async()=>await EC(L)?m.success("Data copied to clipboard"):m.error("copy to clipboard failed"))()},[m]),P=c.exports.useCallback(()=>{const{originFrequency:L,nucleus:z}=t,V=B(g.current,`formatting.nuclei[${z.toLowerCase()}]`,"0.0"),W=jr(V.ppm),O=jr(V.hz),j=ih(e.values,{nucleus:z,nbDecimalDelta:W,nbDecimalJ:O,observedFrequency:L});h.show(d(uw,{text:j,onCopyClick:A,onClose:()=>h.close()}),{})},[t,h,g,e.values,A]),R=c.exports.useCallback(L=>{p({type:Su,payload:L})},[p]);return d("div",{css:dw,children:w(ot,{counter:(H=e==null?void 0:e.values)==null?void 0:H.length,onDelete:T,deleteToolTip:"Delete All Ranges",onFilter:o,filterToolTip:i?"Show all ranges":"Hide ranges out of view",filterIsActive:i,counterFiltered:r,showSettingButton:!0,onSettingClick:s,children:[d(ke,{popupTitle:"Preview publication string",popupPlacement:"right",onClick:P,className:"btn preview-publication-icon",children:d(qo,{})}),d(ke,{popupTitle:y?`Change Ranges Sum (${Number(y).toFixed(2)})`:"Change Ranges Sum",popupPlacement:"right",onClick:v,className:"btn icon",children:d(Yl,{})}),d(ke,{popupTitle:"Remove all Assignments",popupPlacement:"right",onClick:E,disabled:!e||!e.values||e.values.length===0,className:"btn icon",children:d(Kl,{})}),d(Ge,{popupTitle:l?"Hide Multiplicity Trees in Spectrum":"Show Multiplicity Trees in Spectrum",popupPlacement:"right",onClick:I,disabled:!e||!e.values||e.values.length===0,children:d(rh,{style:{pointerEvents:"none",fontSize:"12px"}})}),d(Ge,{popupTitle:a?"Hide J Graph":"Show J Graph",popupPlacement:"right",onClick:N,disabled:!e||!e.values||e.values.length===0,children:d(lh,{style:{pointerEvents:"none",fontSize:"12px"}})}),d(Ge,{popupTitle:u?"Hide integrals":"Show integrals",popupPlacement:"right",onClick:D,defaultValue:u,disabled:!e||!e.values||e.values.length===0,children:d(ql,{style:{pointerEvents:"none",fontSize:"12px"}})}),d(Ge,{className:"icon",popupTitle:"fix integral values",popupPlacement:"right",onClick:R,children:d(Gl,{})})]})})}const Ln={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2},inputWrapper:{width:"100px",flex:"4",borderRadius:"5px"}},hw=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function fw({nucleus:e,preferences:t,innerRef:n}){const o=se(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,p)=>(u[p]=Ui(p),u),{}),a=ft(t.current,"formatting.panels.ranges");s.current.setValues(a||l)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"ranges",value:l}}),o.success("ranges preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Ln.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>_("div",{style:Ln.groupContainer,children:[f(Le,{style:Ln.header,value:l}),hw.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id)),f(te,{title:"J Graph tolerance (Hz) :",style:{label:Ln.inputLabel,wrapper:Ln.inputWrapper},children:f(Z,{name:`${l}.jGraphTolerance`,type:"number"})})]},l))})})}const mw=c.exports.memo(fw);function gw(e,t){const n=vs(),o=le();return f(mw,{innerRef:t,preferences:o,nucleus:n})}var xw=c.exports.forwardRef(gw);function Ld(e,t=null){const[n,o]=c.exports.useState(t),s=c.exports.useMemo(()=>{const l=e.slice();return n!==null&&l.sort((a,u)=>n.direction==="asc"?B(a,n.key,0)-B(u,n.key,0):n.direction==="desc"?B(u,n.key,0)-B(a,n.key,0):0),l},[e,n]),i=c.exports.useCallback(l=>{var p;const a=(p=l.currentTarget)==null?void 0:p.id;let u="asc";if(a&&n&&n.key===a)switch(n.direction){case"asc":u="desc";break;case"desc":u="original";break;default:u="asc";break}o({key:a,direction:u})},[n]),r=c.exports.useCallback(l=>{const a={flag:null,content:" "};if(!n||n.key!==l)return a;switch(n.direction){case"desc":return{flag:!0,content:" \u25BC"};case"asc":return{flag:!1,content:" \u25B2"};default:return a}},[n]);return{items:s,isSortedDesc:r,onSort:{onClick:i}}}function yo(e,t){return B(e,t,!1)}function bw({rowSpanTags:e,value:t,onHoverRange:n,format:o}){return f("td",k(b(b({},e),n),{children:Ye(t,o)}))}const yw=e=>{const{onChange:t=()=>null,enableValidation:n=!0}=e,{values:o,errors:s}=he();return c.exports.useEffect(()=>{n?Object.keys(s).length===0&&t(o):t(o)},[o,n,s,t]),null},On={container:M`
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
  `};function vw({onFocus:e,onBlur:t,range:n},o){const{values:s,setFieldValue:i}=he(),{activeTab:r}=$(),l=Be(r),a=c.exports.useCallback(h=>{const m={multiplicity:"m",kind:"signal",delta:Number(h.newSignalDelta),js:[{multiplicity:Vt("m"),coupling:""}]},g=s.signals.slice().concat(m);i("signals",g),i("activeTab",String(g.length-1))},[i,s.signals]),u=c.exports.useMemo(()=>Q().shape({newSignalDelta:ae().test("test-range","",function(m){const{path:g,createError:x}=this;if(m&&m>n.from&&m<n.to)return!0;const y=` ${m?m.toFixed(5):0} ppm out of the range`;return x({path:g,message:y})}).required()}),[n]),p=c.exports.useCallback(()=>{o.current.submitForm()},[o]);return d("div",{css:On.container,children:w("div",{children:[d("p",{css:On.infoText,children:"Edit or select a delta value of new signal (ppm):"}),w(ce,{ref:o,validationSchema:u,initialValues:{newSignalDelta:(n.from+n.to)/2},onSubmit:a,children:[d("div",{css:On.inputContainer,children:d(Z,{name:"newSignalDelta",type:"number",placeholder:"\u{1D6C5} (ppm)",onFocus:e,onBlur:t,style:{input:{width:"250px",height:"30px"}},checkErrorAfterInputTouched:!1})}),w("p",{css:On.inputInfo,children:["[ ",`${l(n.from)} ppm - ${l(n.to)} ppm`," ]"]}),d(de,{css:On.addSignalBtn,onClick:p,children:d(yn,{title:"Add new signal"})})]})]})})}var Cw=c.exports.forwardRef(vw);const Sw={input:{width:"50px",height:"26px",borderWidth:0,margin:"0 5px"}};function kw({signal:e,index:t,onFocus:n}){return _("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{children:"\u{1D6C5}: "}),f(Z,{name:`signals.${t}.delta`,type:"number",placeholder:"J (Hz)",onFocus:n,style:Sw,checkErrorAfterInputTouched:!1}),f("span",{children:e.js.map(o=>Vt(o.multiplicity)).join("")})]})}const ww=M`
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
`;function Ew({push:e,remove:t,onFocus:n,onBlur:o}){const{values:s,setFieldValue:i}=he(),r=c.exports.useCallback((a,u)=>{qn(a)||i(u,"")},[i]),l=c.exports.useMemo(()=>Kn.map(a=>k(b({key:a.value},a),{value:a.label})),[]);return d("table",{css:ww,children:w("tbody",{children:[w("tr",{children:[d("th",{children:"#"}),d("th",{children:"Multiplicity"}),d("th",{children:"J (Hz)"}),d("th",{children:""})]}),B(s,`signals[${s.activeTab}].js`,[]).map((a,u)=>w("tr",{children:[d("td",{children:u+1}),d("td",{children:d(rn,{className:"selectBox",name:`signals.${s.activeTab}.js.${u}.multiplicity`,data:l,onChange:p=>r(p,`signals.${s.activeTab}.js.${u}.coupling`)})}),d("td",{children:d(Z,{name:`signals.${s.activeTab}.js.${u}.coupling`,type:"number",placeholder:"J (Hz)",disabled:!qn(a.multiplicity),onFocus:n,onBlur:o,style:{input:{width:"100%",height:"26px"}},checkErrorAfterInputTouched:!1})}),d("td",{children:d(de,{className:"delete-button",onClick:()=>{t(u)},children:d(At,{className:"icon",title:"Delete coupling"})})})]},`editCouplings${s.activeTab}${u}`)),d("tr",{}),d("tr",{children:d("td",{colSpan:4,children:d(de,{className:"add-button",onClick:()=>e({multiplicity:Vt("m"),coupling:""}),children:d(yn,{title:"Add new coupling"})})})})]})})}var Aw=c.exports.memo(Ew);const Tw=M`
  border-spacing: 0;
  width: 100%;
  font-size: 12px;
  height: 100%;

  margin: 0;
  padding: 0.4rem;
  text-align: center;
`;function Dw({onFocus:e,onBlur:t}){const{values:n}=he();return d("div",{css:Tw,children:d(ah,{name:`signals.${n.activeTab}.js`,render:({push:o,remove:s})=>d("div",{children:d(Aw,{push:o,remove:s,onFocus:e,onBlur:t})})})})}var Iw=c.exports.memo(Dw);const Pw=M`
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
`,Rw=M`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function Mw({range:e}){const t=c.exports.useRef(),[n,o]=c.exports.useState(null),{values:s,setFieldValue:i,errors:r}=he(),{activeTab:l}=$(),{info:a}=Ce({info:{}}),u=Be(l);c.exports.useEffect(()=>{function v(C){if((a==null?void 0:a.originFrequency)&&n)if(s.activeTab==="addSignalTab")t.current.setValues({[n]:(C.range[1]-C.range[0])/2+C.range[0]});else if(n.includes("delta"))i(n,(C.range[1]-C.range[0])/2+C.range[0]);else{const E=Number(u(Math.abs(C.range[0]-C.range[1])*a.originFrequency));i(n,E)}o(null)}return pe.on("brushEnd",v),()=>{pe.off("brushEnd",v)}},[n,i,s.activeTab,u,a]),c.exports.useEffect(()=>{function v(C){n&&(s.activeTab==="addSignalTab"?t.current.setValues({[n]:C.xPPM}):n.includes("delta")&&i(n,C.xPPM)),o(null)}return pe.on("mouseClick",v),()=>{pe.off("mouseClick",v)}},[s.activeTab,n,i]);const p=c.exports.useCallback(v=>{o(v.target.name)},[o]),h=c.exports.useCallback(({tabid:v})=>{i("activeTab",v)},[i]),m=c.exports.useCallback(({tabid:v})=>{const C=s.signals.filter((E,T)=>T!==Number(v));i("signals",C)},[i,s.signals]);c.exports.useEffect(()=>{i("activeTab",s.signals.length>0?(s.signals.length-1).toString():"addSignalTab")},[i,s.signals.length]);const g=c.exports.useCallback(v=>!!((r==null?void 0:r.signals)&&(r==null?void 0:r.signals[v])),[r]),x=c.exports.useMemo(()=>{const v=s.signals.length>0?s.signals.map((E,T)=>d(Re,{tabid:`${T}`,tabstyles:g(T)?Nw:Rw,canDelete:!0,render:()=>d(kw,{signal:E,index:T,onFocus:p}),children:d(Iw,{onFocus:p})},`signalForm${T}`)):[],C=d(Re,{tablabel:"+",tabid:"addSignalTab",canDelete:!1,className:"add-signal-tab",children:d(Cw,{onFocus:p,range:e,ref:t})},"addSignalTab");return v.concat(C)},[p,e,g,s.signals]),y=d("p",{className:"infoText",children:"Focus on an input field and press Shift + Drag & Drop to draw a coupling constant in spectrum view."}),S=d("p",{className:"infoText",children:"Focus on the input field and press Shift + Left mouse click to select new signal delta value in spectrum view."});return w("div",{children:[d("div",{css:Pw,children:r.signals&&(r.signals.noSignals||r.signals.noCouplings)?w("div",{children:[d("p",{className:"errorText",children:r.signals.noSignals||r.signals.noCouplings[0].message}),r.signals.noSignals?S:null]}):s.activeTab==="addSignalTab"?S:y}),d(In,{activeTab:s.activeTab,onClick:h,onDelete:m,children:x})]})}var _w=c.exports.memo(Mw);const Fw=()=>c.exports.useMemo(()=>Q().shape({signals:$s().of(Q().shape({j:$s().of(Q().shape({multiplicity:rt().required(),coupling:ch().test("checkValue","",function(t){const{path:n,createError:o}=this,s=qn(this.parent.multiplicity);return!s&&isNaN(t)||s&&!isNaN(t)?!0:o({path:n,message:`${n} is required`})})})).min(1,"There must be at least one coupling in a signal")})).min(1,"There must be at least one signal in a range!")}),[]),Lw=M`
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
`;function Ow({onSaveEditRangeModal:e=()=>null,onCloseEditRangeModal:t=()=>null,onZoomEditRangeModal:n=()=>null,range:o,automaticZoom:s=!0}){const i=c.exports.useRef(null),{activeTab:r}=$(),l=X(),a=Be(r),u=Fw(),p=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{s&&p()},[s,p]);const h=c.exports.useCallback(()=>{t()},[t]),m=c.exports.useCallback(v=>v.filter(C=>C.coupling!=="").map(C=>k(b({},C),{multiplicity:Vt(C.multiplicity)})),[]),g=c.exports.useCallback(v=>v.map(C=>k(b({id:q()},C),{multiplicity:C.js.map(E=>Vt(E.multiplicity)).join(""),js:m(C.js)})),[m]),x=c.exports.useCallback(v=>{(async()=>{const C=b({},o);C.signals=g(v.signals),await e(C),h()})()},[g,h,e,o]),y=c.exports.useMemo(()=>{const v=o.signals.map(C=>{let E=0;const T=[];return C.multiplicity.split("").forEach(I=>{let D={multiplicity:I,coupling:""};qn(I)&&(D=b({},C.js[E]),D.coupling=Number(a(D.coupling)),E++),D.multiplicity=Vt(D.multiplicity),T.push(D)}),k(b({},C),{js:T})});return{activeTab:"0",signals:v}},[a,o]),S=c.exports.useCallback(v=>{const C=g(v.signals);l({type:Eu,payload:{tempRange:Object.assign({},o,{signals:C})}})},[l,g,o]);return d("div",{css:Lw,children:w(ce,{ref:i,initialValues:y,validationSchema:u,onSubmit:x,children:[w("div",{className:"header handle",children:[d(de,{onClick:p,className:"zoom-button",children:d(eo,{title:"Set to default view on range in spectrum"})}),d("span",{children:` Range and Signal edition: ${a(o.from)} ppm to ${a(o.to)} ppm`}),d(ir,{onClick:()=>i.current.submitForm(),popupTitle:"Save and exit"}),d(me,{onClick:h})]}),d(_w,{range:o}),d(yw,{onChange:S})]})})}function $w(e){const t=X(),n=fe(),o=je(),s=c.exports.useCallback(()=>{const p=Math.abs(e.from-e.to);t({type:rs,xDomain:[e.from-p,e.to+p]})},[t,e.from,e.to]),i=c.exports.useCallback(()=>{t({type:us,payload:{data:{id:e.id,assignmentData:o}}})},[o,t,e.id]),r=c.exports.useCallback(p=>{t({type:ou,payload:{data:{rowData:e,value:p}}})},[t,e]),l=c.exports.useCallback(p=>{t({type:su,payload:{editedRowData:p,assignmentData:o}})},[o,t]),a=c.exports.useCallback(()=>{t({type:ut}),n.close()},[t,n]),u=c.exports.useCallback(()=>{t({type:co,payload:{selectedTool:F.editRange.id,tempRange:e}}),n.show(f(Ow,{onCloseEditRangeModal:a,onSaveEditRangeModal:l,onZoomEditRangeModal:s,range:e}),{position:ne.MIDDLE_RIGHT,transition:Qe.SCALE,isBackgroundBlur:!1})},[a,t,n,e,l,s]);return c.exports.useMemo(()=>({editRange:u,deleteRange:i,zoomRange:s,changeRangeSignalKind:r}),[r,i,u,s])}const Hw=M`
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
`,zw={marginLeft:2,marginRight:2,border:"none",height:"20px"};function Vw({rowData:e,onHoverSignal:t,rowSpanTags:n}){const{editRange:o,deleteRange:s,changeRangeSignalKind:i,zoomRange:r}=$w(e);return w(c.exports.Fragment,{children:[d("td",k(b({},t),{children:d(Me,{onChange:i,data:ai,defaultValue:e.tableMetaInfo.signal.kind,style:zw})})),w("td",k(b({},n),{css:Hw,children:[d("button",{type:"button",className:"delete-button",onClick:s,children:d(At,{})}),d("button",{type:"button",className:"zoom-button",onClick:r,children:d(eo,{title:"Zoom to range in spectrum"})}),d("button",{type:"button",className:"edit-button",onClick:o,children:d(Jl,{color:"blue"})})]}))]})}function jw({rowData:e,onHoverSignal:t}){const n=B(e,"tableMetaInfo.signal.js");return f("td",k(b({},t),{children:n==null?void 0:n.map(o=>isNaN(o.coupling)?"":o.coupling.toFixed(1)).join(",")}))}const pl={color:"red",fontWeight:"bold"};function Bw({rowData:e,assignment:t,highlight:n,onUnlinkVisibilityChange:o,unlinkVisibility:s,onLink:i,onUnlink:r,rowSpanTags:l,onHover:a,highlightData:u}){var g;const p=c.exports.useMemo(()=>B(e,"diaIDs",0),[e]),h=c.exports.useCallback(x=>{o==null||o(x)},[o]),m=c.exports.useMemo(()=>{var y;return t.isActive||t.isOver||n.isActive&&((y=u.highlight.sourceData)==null?void 0:y.type)!==ue.SIGNAL?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"}},[t.isActive,t.isOver,n.isActive,(g=u.highlight.sourceData)==null?void 0:g.type]);return f("td",k(b(b({},l),a),{onClick:x=>i==null?void 0:i(x,t),children:e.nbAtoms!==void 0&&e.nbAtoms>0?e.diaIDs&&e.diaIDs.length>0?_("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[e.nbAtoms," "," ( ",f("span",{style:m,children:p.length})," ) ",f("sup",{children:f("button",{type:"button",style:{visibility:s?"visible":"hidden",padding:0,margin:0},onClick:x=>r==null?void 0:r(x,!0),children:f(Jo,{color:"red"})})})]}):t.isActive?_("div",{children:[`${e.nbAtoms} (`,f("span",{style:pl,children:"0"}),")"]}):e.nbAtoms:t.isActive?_("div",{children:["0 (",f("span",{style:pl,children:"0"}),")"]}):""}))}var Xw=c.exports.memo(Bw);function Yw({value:e,rowSpanTags:t,onHoverRange:n,format:o}){return f("td",k(b(b({},t),n),{children:Ye(e,o)}))}var hl=c.exports.memo(Yw);function Gw({rowData:e,rowSpanTags:t,onHoverRange:n,format:o}){const s=X(),i=c.exports.useMemo(()=>{const l=ja(e),a=Ye(e.integration,o);return l?a:`[ ${a} ]`},[o,e]),r=c.exports.useCallback(l=>{s({type:tu,payload:{data:{value:l.target.value,id:e.id}}})},[s,e.id]);return f("td",k(b(b({},t),n),{children:f(at,{value:i,onSave:r,type:"number",style:{padding:"0.1rem 0.4rem"}})}))}function Ww({rowData:e,onHover:t,assignment:n,highlight:o,onUnlinkVisibilityChange:s,unlinkVisibility:i,onLink:r,onUnlink:l}){const a=c.exports.useMemo(()=>B(e,"tableMetaInfo.signal.diaIDs",[]),[e]),u=c.exports.useMemo(()=>n.isActive||o.isActive?{color:"red",fontWeight:"bold"}:void 0,[n.isActive,o.isActive]),p=c.exports.useCallback(m=>{s==null||s(m)},[s]),h=c.exports.useCallback(m=>{r==null||r(m,n)},[n,r]);return f("td",k(b({},t),{onClick:h,style:u,children:a&&a.length>0?_("div",{onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[a.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:i?"visible":"hidden",padding:0,margin:0},onClick:m=>l==null?void 0:l(m,!1),children:f(Jo,{color:"red"})})})]}):n.isActive?"0":""}))}var Zw=c.exports.memo(Ww);function Od(e){return(t,n,o="",s="")=>{const i=B(e,n,"0.000");return Ye(t,i,o,s)}}function Uw({rowData:e,onHoverSignal:t,preferences:n}){const o=X(),s=e.tableMetaInfo.signal,i=Od(n),r=c.exports.useCallback(l=>{o({type:nu,payload:{value:l.target.value,rangeID:e.id,signalID:s.id}})},[o,e.id,s.id]);return s?f("td",k(b({},t),{children:Ji(s.multiplicity,["m"])?f(at,{value:s.delta.toFixed(3),onSave:r,type:"number",style:{padding:"0.1rem 0.4rem"}}):`${i(e.from,"fromFormat")} - ${i(e.to,"toFormat")}`})):f("td",{children:""})}const Kw=M`
  background-color: #ff6f0057;
`,qw=M`
  background-color: #f5f5dc;
`;function Jw({rowData:e,onUnlink:t,onContextMenu:n,preferences:o}){var N,A,P;const s=je(),i=dt(e.id),r=re([i.id].concat(((N=i.assigned)==null?void 0:N.x)||[]).concat(qi(s,e.signals.map(R=>R.id))),{type:ue.RANGE}),l=re(((A=i.assigned)==null?void 0:A.x)||[],{type:ue.RANGE}),a=dt(e.tableMetaInfo.id),u=re([a.id].concat(((P=a.assigned)==null?void 0:P.x)||[]),{type:ue.SIGNAL}),p=Tn(),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),y=Od(o),S=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:B(e.tableMetaInfo,"hide",!1)?{display:"none"}:void 0}),[e.tableMetaInfo]),v=c.exports.useCallback((R,H)=>{R&&R.stopPropagation(),H!==void 0?H?(t(e),m(!1),i.removeAll("x")):(t(e,B(e,"tableMetaInfo.signalIndex",void 0)),x(!1),a.removeAll("x")):(m(!1),x(!1))},[i,a,t,e]),C=c.exports.useCallback((R,H)=>{R.stopPropagation(),H.setActive("x")},[]),E=c.exports.useMemo(()=>({onMouseEnter:()=>{i.show("x"),r.show()},onMouseLeave:()=>{i.hide(),r.hide()}}),[i,r]),T=c.exports.useMemo(()=>({onMouseEnter:()=>{i.show("x"),l.show()},onMouseLeave:()=>{i.hide(),l.hide()}}),[i,l]),I=c.exports.useMemo(()=>({onMouseEnter:()=>{a.show("x"),u.show()},onMouseLeave:()=>{a.hide(),u.hide()}}),[a,u]),D=c.exports.useMemo(()=>r.isActive||i.isActive?Kw:B(e,"tableMetaInfo.isConstantlyHighlighted",!1)?qw:null,[i.isActive,r.isActive,e]);return w("tr",{onContextMenu:R=>n(R,e),css:D,children:[d("td",k(b(b({},S),E),{children:e.tableMetaInfo.rowIndex+1})),yo(o,"showFrom")&&d(hl,{value:e.from,rowSpanTags:S,onHoverRange:E,format:y("showFrom",void 0)}),yo(o,"showTo")&&d(hl,{value:e.to,rowSpanTags:S,onHoverRange:E,format:y("toFormat",void 0)}),d(Uw,{rowData:e,onHoverSignal:I,preferences:o}),yo(o,"showRelative")&&d(Gw,{rowData:e,rowSpanTags:S,onHoverRange:E,format:y("relativeFormat",void 0)}),yo(o,"showAbsolute")&&d(bw,{value:e.absolute,rowSpanTags:S,onHoverRange:E,format:y("absoluteFormat",void 0)}),d("td",k(b({},I),{children:B(e,"tableMetaInfo.signal.multiplicity","")})),d(jw,{rowData:e,onHoverSignal:I}),d(Zw,{rowData:e,assignment:a,highlight:u,onHover:I,unlinkVisibility:g,onUnlinkVisibilityChange:R=>x(R),onLink:C,onUnlink:v}),d(Xw,{rowData:e,assignment:i,highlight:l,onHover:T,unlinkVisibility:h,onUnlinkVisibilityChange:R=>m(R),onLink:C,onUnlink:v,rowSpanTags:S,highlightData:p}),d(Vw,{rowData:e,onHoverSignal:I,onHoverRange:E,rowSpanTags:S})]})}function Qw(e){return c.exports.useMemo(()=>{const t=[];return e.forEach((n,o)=>{n.signals.length===1?t.push(k(b({rowKey:q()},n),{tableMetaInfo:k(b({},n.tableMetaInfo),{signal:n.signals[0],rowIndex:o,signalIndex:0,id:n.signals[0].id})})):n.signals.length>1&&n.signals.forEach((s,i)=>{let r=!1,l=null;i<n.signals.length-1&&i===0?l=n.signals.length:r=!0,t.push(k(b({rowKey:q()},n),{tableMetaInfo:k(b({},n.tableMetaInfo),{signal:s,rowSpan:l,hide:r,rowIndex:o,signalIndex:i,id:s.id})}))})}),t},[e])}const eE=M`
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
`;function tE({tableData:e,onUnlink:t,context:n,activeTab:o,preferences:s}){const i=o==null?void 0:o.replace(/[0-9]/g,""),r=c.exports.useRef(),{items:l,isSortedDesc:a,onSort:u}=Ld(e),p=Qw(l),h=g=>B(s,g,!1),m=c.exports.useCallback((g,x)=>{Gt(g)||(g.preventDefault(),r.current.handleContextMenu(g,x))},[r]);return w(c.exports.Fragment,{children:[w("table",{css:eE,children:[d("thead",{children:w("tr",{children:[d("th",{children:"#"}),h("showFrom")?w("th",k(b({id:"from"},u),{children:["From",a("from").content]})):null,h("showTo")?w("th",k(b({id:"to"},u),{children:["To ",a("to").content]})):null,d("th",{children:"\u03B4 (ppm) "}),h("showRelative")?w("th",k(b({id:"integration"},u),{children:["Rel. ",i," ",a("integration").content]})):null,h("showAbsolute")?d("th",{children:"Absolute"}):null,d("th",{children:"Mult."}),d("th",{children:"J (Hz)"}),d("th",{children:d(Ql,{style:{fontSize:10}})}),d("th",{children:"\u03A3"}),d("th",{children:"Kind"}),d("th",{children:""})]})}),d("tbody",{children:p==null?void 0:p.map(g=>d(Jw,{rowData:g,onUnlink:t,onContextMenu:(x,y)=>m(x,y),preferences:s},g.rowKey))})]}),d(qt,{ref:r,context:n})]})}function nE({ranges:e,data:t,info:n,xDomain:o,preferences:s,activeTab:i,molecules:r,showMultiplicityTrees:l,showJGraph:a,showRangesIntegrals:u}){const[p,h]=c.exports.useState(!1),m=je(),g=X(),x=se(),[y,S]=c.exports.useState(!1),v=c.exports.useRef(),C=c.exports.useMemo(()=>{const R=(L,z)=>(z=z*1e4,L=L*1e4,z>=o[0]*1e4&&L<=o[1]*1e4||L<=o[0]*1e4&&z>=o[1]*1e4),H=L=>L.filter(z=>R(z.from,z.to));return e.values?(p?H(e.values):e.values).map(z=>k(b({},z),{tableMetaInfo:{isConstantlyHighlighted:R(z.from,z.to)}})):[]},[p,e.values,o]),E=c.exports.useCallback((R,H=-1)=>{g({type:iu,payload:{rangeData:R,assignmentData:m,signalIndex:H}})},[m,g]),T=c.exports.useCallback(async R=>{if(t.x&&t.re){const{x:H,re:L}=t,{from:z,to:V}=R,{fromIndex:W,toIndex:O}=Jn(H,{from:z,to:V}),j=b({x:Array.from(H.slice(W,O)),y:Array.from(L.slice(W,O))},R);await bs(JSON.stringify(j,void 0,2))?x.show("Data copied to clipboard"):x.error("copy to clipboard failed")}},[t,x]),I=c.exports.useMemo(()=>B(s.current,`formatting.panels.ranges.[${i}]`)||Ui(i),[i,s]),D=c.exports.useMemo(()=>[{label:"Copy to clipboard",onClick:T}],[T]),N=c.exports.useCallback(()=>{h(!p)},[p]),A=c.exports.useCallback(()=>{S(!y)},[y]),P=c.exports.useCallback(()=>{v.current.saveSetting(),S(!1)},[]);return d(Ve,{children:w("div",{css:[Nt,y&&M`
              th {
                position: relative;
              }
            `],children:[!y&&d(pw,{ranges:e,info:n,activeTab:i,molecules:r,showRangesIntegrals:u,showMultiplicityTrees:l,showJGraph:a,isFilterActive:p,onUnlink:E,onFilterActivated:N,onSettingClick:A,filterCounter:C.length}),y&&d(Pn,{onSave:P,onClose:A}),d("div",{className:"inner-container",children:y?d(xw,{ref:v}):d("div",{className:"table-container",children:C&&C.length>0?d(tE,{activeTab:i,tableData:C,onUnlink:E,context:D,preferences:I}):d(Rt,{})})})]})})}const oE=c.exports.memo(nE),sE={ranges:{},data:{},info:{}};function iE(){const{displayerKey:e,xDomain:t,activeTab:n,molecules:o,toolOptions:{selectedTool:s,data:{showMultiplicityTrees:i,showRangesIntegrals:r,showJGraph:l}}}=$(),{ranges:a,data:u,info:p}=Ce(sE),h=le();return d(oE,{ranges:a,data:u,info:p,showMultiplicityTrees:i,showJGraph:l,showRangesIntegrals:r,selectedTool:s,displayerKey:e,preferences:h,xDomain:t,activeTab:n,molecules:o})}function rE({data:e,activeSpectrum:t,activeTab:n,displayerMode:o,spectrums:s}){const i=fe(),r=se(),l=X(),a=c.exports.useCallback(()=>{i.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:()=>{l({type:Mi})}},{text:"No"}]})},[l,i]),u=c.exports.useCallback(()=>{const x=s.map(y=>y.id);l({type:Un,id:x})},[l,s]),p=c.exports.useCallback(()=>{l({type:Un,id:[]})},[l]),h=c.exports.useCallback(()=>{function x(S){let v=n.split(",");v=v[0]===v[1]?[v[0]]:v;const C=[];for(const E of v)S.some(I=>I.info.nucleus===E)||C.push(E);return C}const y=x(e);y.length>0?l({type:Qc,nucleus:y}):r.error("Nothing to calculate")},[n,r,e,l]),m=c.exports.useCallback(()=>{l({type:xu})},[l]),g=c.exports.useCallback(()=>{l({type:bu})},[l]);return _(ot,{onDelete:a,counter:s==null?void 0:s.length,deleteToolTip:"Delete all spectra",children:[f(ke,{popupTitle:"Hide all spectra",onClick:p,children:f(uh,{})}),f(ke,{popupTitle:"Show all spectra",onClick:u,children:f(wo,{})}),t&&n&&n.split(",").length>1&&f(ke,{popupTitle:"Add missing projection",onClick:h,children:f(dh,{})}),o===Y.DM_1D&&s.length>1&&_(et,{children:[f(ke,{popupTitle:"Reset Scale",onClick:g,children:f(ph,{})}),f(ke,{popupTitle:"Same Top",onClick:m,children:f(hh,{})})]}),f(Ad,{})]})}const lE=c.exports.memo(rE);function aE({spectrums:e}){const{data:t,activeSpectrum:n,activeTab:o,displayerMode:s}=$();return f(lE,{data:t,activeSpectrum:n,activeTab:o,displayerMode:s,spectrums:e})}function cE({color:e,activated:t}){return f("div",{style:{backgroundColor:e,height:"12px",width:"12px",opacity:t?1:.1,display:"inline-block"}})}function uE({positiveColor:e,negativeColor:t,activated:n}){return f("svg",{width:"12",height:"12",viewBox:"0 0 12 12",opacity:n?1:.1,children:_("g",{children:[f("path",{d:"M0,0H12L0,12Z",fill:e,strokeWidth:"0"}),f("path",{d:"M12,12H0L12,0Z",fill:t,strokeWidth:"0"})]})})}function dE(e){const{style:t,onClick:n=()=>null,activated:o}=e;return f("button",{style:t,type:"button",onClick:n,children:e.dimension===2?f(uE,k(b({},e.color),{activated:o})):f(cE,b({activated:o},e.color))})}var pE=c.exports.memo(dE);function hE({data:e,onChangeMarkersVisibility:t,markersVisible:n,style:o}){const s=i=>n.findIndex(r=>r.id===i)!==-1;return f("button",{style:k(b({},o),{opacity:s(e.id)&&e.peaks&&e.peaks.values.length>0?1:.1}),type:"button",onClick:()=>t(e),disabled:e.peaks&&e.peaks.values.length===0,children:f(fh,{})})}function fE({data:e,onChangeVisibility:t,style:n}){const o=(s,i)=>e?e.display[i]:!0;return _(et,{children:[e.info.dimension===1&&f("button",{"data-test-id":"hide-show-spectrum-button",style:n,type:"button",onClick:()=>t(e,"isVisible"),children:f(wo,{style:b({},o(e.id,"isVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.color}:{opacity:.1,fill:e.display.color})})}),e.info.dimension===2&&_("div",{style:{minWidth:"40px"},children:[f("button",{style:k(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isPositiveVisible"),children:f(wo,{style:b({},o(e.id,"isPositiveVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.positiveColor}:{opacity:.1,fill:e.display.positiveColor})})}),f("button",{style:k(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isNegativeVisible"),children:f(wo,{style:b({},o(e.id,"isNegativeVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.negativeColor}:{opacity:.1,fill:e.display.negativeColor})})})]})]})}const Xe={button:{backgroundColor:"transparent",border:"none",width:"26px",minWidth:"26px"},row:{display:"flex",alignContent:"center",height:"25px",borderBottom:"0.55px solid #f1f1f1"},name:{flex:1,height:"100%",display:"flex"},info:{flex:"1 1 1px",height:"100%",display:"block",alignItems:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"24px"},icon:{display:"flex",margin:"auto",justifyContent:"center"}};function mE({activeSpectrum:e,markersVisible:t,data:n,onChangeVisibility:o,onChangeMarkersVisibility:s,onChangeActiveSpectrum:i,onOpenSettingModal:r,onContextMenu:l}){var x,y;const a=S=>(S&&(S=S.replace(/(?<value>[0-9]+)/g,"<sub>$<value></sub>")),S),u=e&&e.id===n.id,{color:p,name:h,positiveColor:m,negativeColor:g}=n.display;return _("div",{style:b(b({},Xe.row),u?{backgroundColor:"#fafafa"}:{opacity:e?.2:1}),onContextMenu:l,children:[f(fE,{data:n,onChangeVisibility:o,style:Xe.button}),_("div",{"data-test-id":"activate-deactivate-spectrum-button",style:Xe.name,onClick:()=>i(n),children:[f("div",{style:k(b({},Xe.icon),{width:"16px"}),children:n.info.isFid?f(mh,{}):n.info.dimension===2?f(gh,{}):f(Wl,{})}),f("span",{style:Xe.info,children:h}),f("div",{style:Xe.info,dangerouslySetInnerHTML:{__html:n.info&&a(n.info.solvent)}}),_("span",{style:Xe.info,children:[f("span",{style:{borderLeft:"0.55px solid #e5e5e5",paddingRight:"5px"}}),(x=n.info)==null?void 0:x.experiment]}),f("span",{style:Xe.info,children:(y=n.info)==null?void 0:y.pulse})]}),f(hE,{data:n,style:b(b({},Xe.icon),Xe.button),onChangeMarkersVisibility:s,markersVisible:t}),f(pE,{style:Xe.button,dimension:n.info.dimension,color:{positiveColor:m,color:p,negativeColor:g},activated:u,onClick:S=>r(n,S)})]})}var gE=c.exports.memo(mE);function xE(e){const{onColorChange:t=()=>null,name:n}=e,{values:o,setFieldValue:s}=he(),i=c.exports.useCallback(r=>{t(r),s(n,`${r.hex}${Math.round(r.rgb.a*255).toString(16)}`)},[n,t,s]);return f(Xl.SketchPicker,{color:{hex:B(o,n,"#000")},presetColors:Ra,onChangeComplete:r=>i(r)})}var ei=c.exports.memo(xE);function bE(e){const t=e.length,n=Math.floor(t/307200)||1,o=new Float64Array(t/n>>0);let s=0;for(let i=0;i<o.length;i+=n)o[s++]=e[i];return o}function yE(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,r=t.length>0?t[0].x:0,l=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:r,y:a},{x:l,y:a}]}function vE({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=bE(t.re),r=ea(i,n),l={},a={};for(let u in r.sanplot){const{x:p,y:h}=r.sanplot[u];let m=new Array(p.length);for(let g=0;g<p.length;g++)m[g]={x:p[g],y:h[g]};l[u]=m,a[u]=yE(r[u],m,{yLogBase:o})}return{sanPlot:l,lines:a}},[t.re,n,o]);return _("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[f("div",{style:{display:"block"},children:_(dn,{width:180,height:220,children:[f(xh,{title:"Sanplot"}),f(qe,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:5,right:60})]})}),f("div",{style:{display:"block",width:180,height:180},children:_(dn,{width:180,height:180,children:[f(qe,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:5,right:60})]})})]})}var CE=c.exports.memo(vE);function SE({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=c.exports.useCallback(()=>{n.current&&n.current.submitForm()},[]);return f(ce,{ref:n,initialValues:e.display,onSubmit:t,children:_("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[f("div",{style:{display:"block",position:"relative"},children:f(ei,{name:"color",onColorChange:o})}),f(CE,{color:"red",data:e.data})]})})}function kE(e){const l=e,{onAfterChange:t=()=>null,name:n}=l,o=G(l,["onAfterChange","name"]),{values:s,setFieldValue:i}=he(),r=c.exports.useCallback(a=>{t(a),i(n,a)},[n,t,i]);return f(bh,b({className:"horizontal-slider",thumbClassName:"thumb",trackClassName:"track",defaultValue:B(s,n,[0,100]),onAfterChange:r,renderThumb:(a,u)=>f("div",k(b({},a),{children:f("span",{children:u.valueNow})})),pearling:!0,minDistance:10},o))}var fl=c.exports.memo(kE);function wE(e){let t=e[0].length,n=e.length,o=Math.floor(t*n/204800)||1;const s=new Float64Array(t*n/o>>0);let i=0;for(let r=0;r<s.length;r+=o)s[i++]=e[r/n>>0][r%n];return s}function EE(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,r=t.length>0?t[0].x:0,l=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:r,y:a},{x:l,y:a}]}function AE({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=wE(t.z),r=ea(i,n),l={},a={};for(let u in r.sanplot){const{x:p,y:h}=r.sanplot[u];let m=new Array(p.length);for(let g=0;g<p.length;g++)m[g]={x:p[g],y:h[g]};l[u]=m,a[u]=EE(r[u],m,{yLogBase:o})}return{sanPlot:l,lines:a}},[t.z,n,o]);return _("div",{children:[f("div",{style:{textAlign:"center",paddingBottom:5,paddingTop:5},children:"San Plot"}),_("div",{style:{borderTop:"1px solid #ededed",marginTop:"10px",paddingTop:"10px",display:"flex",flexDirection:"row"},children:[_(dn,{width:220,height:180,children:[f(qe,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log ${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:90,right:5})]}),_(dn,{width:220,height:180,children:[f(qe,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(qe,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Io,{position:"embedded",bottom:90,right:5})]})]})]})}var TE=c.exports.memo(AE);function DE({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=M`
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
  `,s=c.exports.useCallback(()=>{n.current.submitForm()},[]);return d(ce,{ref:n,initialValues:e.display,onSubmit:t,children:w("div",{css:o,children:[w("div",{className:"positive",children:[d("span",{style:{padding:"0 10px"},children:"Positive"}),d(ei,{name:"positiveColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[d("span",{className:"label",children:"contour Levels [ min - max ]"}),d(fl,{name:"contourOptions.positive.contourLevels",onAfterChange:s}),d("span",{className:"label",children:"number of Layers "}),d(Z,{name:"contourOptions.positive.numberOfLayers",onChange:s,type:"number"})]})]}),w("div",{className:"negative",children:[d("span",{style:{padding:"0 10px"},children:"Negative"}),d(ei,{name:"negativeColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[d("span",{className:"label",children:"contour Levels [ min - max ]"}),d(fl,{name:"contourOptions.negative.contourLevels",onAfterChange:s}),d("span",{className:"label",children:"number of Layers "}),d(Z,{name:"contourOptions.negative.numberOfLayers",onChange:s,type:"number"})]})]}),d(TE,{data:e.data})]})})}const IE=M`
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
`;function PE({position:e,data:t,onClose:n}){const o=X(),{id:s,info:i}=t,r=c.exports.useCallback(p=>{o({type:bc,id:s,display:p})},[o,s]),l=c.exports.useCallback(p=>{p.target===p.currentTarget&&n()},[n]);if(!e)return null;const{x:a,y:u}=e;return d("div",{css:IE,onClick:l,children:d("div",{className:"inner-conatiner",style:{left:i.dimension===2?a-450:a-240,width:i.dimension===2?450:240,padding:i.dimension===2?"10px 0":"",top:u},children:i.dimension===2?d(DE,{onSubmit:r,data:t}):d(SE,{onSubmit:r,data:t})})})}function NE(){return!0}var RE=c.exports.memo(PE,NE);function ME({data:e,activeSpectrum:t,activeTab:n,onTabChange:o}){const s=c.exports.useRef(),[i,r]=c.exports.useState([]),[l,a]=c.exports.useState(null),[u,p]=c.exports.useState(null),[h,m]=c.exports.useState(!1),g=se(),x=X();c.exports.useEffect(()=>{if(e){const A=e.reduce((P,R)=>(R.info.dimension===1&&R.display.isPeaksMarkersVisible===!0&&P.push({id:R.id}),P),[]);r(A)}},[e,x]);const y=c.exports.useMemo(()=>e?os("nucleus")(e,!0):[],[e]);c.exports.useEffect(()=>{o({tab:n,data:y[n]})},[n,o,y]);const S=c.exports.useCallback(A=>{const P=i.findIndex(H=>H.id===A.id),R=[...i];P===-1?R.push({id:A.id}):R.splice(P,1),x({type:Ii,data:R}),r(R)},[x,i]),v=c.exports.useCallback(A=>{o({tab:A.tabid,data:y[A.tabid]}),x({type:$i,tab:A.tabid})},[x,o,y]),C=c.exports.useMemo(()=>[{label:"Copy to Clipboard",onClick:A=>{(async()=>{const{x:P,y:R,info:H}=A;await bs(JSON.stringify({x:P,y:R,info:H},void 0,2))?g.success("Data copied to clipboard"):g.error("Copy to clipboard failed")})()}},{label:"Delete",onClick:A=>{setTimeout(()=>{x({type:Mi,id:A.id})},0)}}],[g,x]),E=c.exports.useCallback((A,P)=>{Gt(A)||(A.preventDefault(),s.current.handleContextMenu(A,P))},[s]),T=c.exports.useCallback((A,P)=>{p({x:P.nativeEvent.clientX,y:P.nativeEvent.clientY}),a(A),m(!0)},[]),I=c.exports.useCallback((A,P)=>{x({type:Un,id:A.id,key:P,value:!A.display[P]})},[x]),D=c.exports.useCallback(A=>{setTimeout(()=>{t&&t.id===A.id?x({type:zo,data:null}):x({type:zo,data:{id:A.id}})},0)},[t,x]),N=c.exports.useCallback(()=>{m(!1)},[]);return _("div",{style:{height:"calc(100% - 25px)"},children:[f(In,{activeTab:n,onClick:v,children:y&&Object.keys(y).map(A=>{var P;return f(Re,{tablabel:A,tabid:A,children:(P=y[A])==null?void 0:P.map(R=>f(gE,{activeSpectrum:t,markersVisible:i,data:R,onChangeVisibility:I,onChangeMarkersVisibility:S,onChangeActiveSpectrum:D,onOpenSettingModal:T,onContextMenu:H=>E(H,R)},R.id))},A)})}),f(qt,{ref:s,context:C}),h?f(RE,{onClose:N,data:l,position:u}):null]})}const _E=c.exports.memo(ME);function FE({onTabChange:e}){const{data:t,activeSpectrum:n,activeTab:o}=$();return f(_E,{data:t,activeSpectrum:n,activeTab:o,onTabChange:e})}const LE={overflow:"hidden",height:"100%",display:"flex",flexDirection:"column",width:"100%"};function OE(){const[e,t]=c.exports.useState([]),n=c.exports.useCallback(o=>{t(o.data?o.data:[])},[]);return _("div",{style:LE,children:[f(aE,{spectrums:e}),f(FE,{onTabChange:n})]})}var $E=c.exports.memo(OE);const ve={hmbc:{from:2,to:3},cosy:{from:3,to:4},hsqc:{from:1,to:1},hmqc:{from:1,to:1},inadequate:{from:1,to:1}};function $d(e,t){return ve[t]&&e.from===ve[t].from&&e.to===ve[t].to}function Hd(e){return e.split(/\d+/)[1]}function zd(e,t){const n=B(e,`state.${t.atomType}.error`,null);if(n){for(let{key:o,color:s}of Ci)if(o!=="incomplete"&&(o==="notAttached"||o==="ambiguousAttachment")&&B(n,`${o}`,[]).some(i=>e.values[i].id===t.id))return s}return null}function Vd(e,t,n,o,s){var i;if(e&&e.info.dimension===2){const r=Gn(e,t.signal.id);if(r){const l=t.axis==="x"?"y":"x",a=(i=r[l])==null?void 0:i.delta;if(a!==void 0)return a*n>=o&&a*n<=s}}return!1}function Yo(e,t,n,o,s,i,r){if(e&&e.info.dimension===2){const l=Gn(e,t.signal.id);if((l==null?void 0:l.x.delta)&&(l==null?void 0:l.y.delta))return l.x.delta*n>=o&&l.x.delta*n<=s&&l.y.delta*n>=i&&l.y.delta*n<=r}return!1}function ml(e){var o;let t="X";e.experimentType==="hsqc"||e.experimentType==="hmqc"?t=!e.signal||e.signal.sign===0?"S":`S${e.signal.sign===1?"+":"-"}`:e.experimentType==="hmbc"||e.experimentType==="cosy"||e.experimentType==="tocsy"?t="M":e.experimentType==="noesy"||e.experimentType==="roesy"?t="NOE":e.experimentType==="inadequate"?t="I":e.experimentType==="adequate"&&(t="A");const n=(o=e.signal.j)==null?void 0:o.pathLength;if(n){const s=ve[e.experimentType]&&n.from>=ve[e.experimentType].from&&n.from<=ve[e.experimentType].to&&n.to>=ve[e.experimentType].from&&n.to<=ve[e.experimentType].to;return`${t}${s?"":"*"}`}return t}function jd(e){return Qo(k(b({},e),{edited:k(b({},e.edited),{moved:!0})}))}function zn(e,t){const n=e.id.split("_");return Qo(k(b({},e),{id:n[t==="x"?0:1],axis:t,match:[],edited:k(b({},e.edited),{moved:!0})}))}function be(e,t,n,o){const s=Ne(t),i=ze(e),r=t.id.split("_");return o==="add"?yh(i,s===1?jd(t):zn(t,n)):(o==="remove"||o==="unmove")&&vh(i,n==="x"?r[0]:r[1]),i}function HE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:n,selectedCorrelationIdDim2:o,action:s,link:i,correlations:r}){const l=r.find(x=>x.id===n),a=r.find(x=>x.id===o),u=(l==null?void 0:l.id)!==e.id,p=t&&(a==null?void 0:a.id)!==(t==null?void 0:t.id),h=Ne(i),m=[],g={};if(s==="move"){if(h===1){const x=be(e,i,"x","remove");let y;l?y=be(u?l:x,i,"x","add"):y=Mn({atomType:e.atomType,link:[jd(i)]}),m.push(x,y),g.skipDataUpdate=!0}else if(h===2){const x=be(e,i,"x","remove");m.push(x);const y=be(t,i,"y","remove");m.push(y),l&&a?(m.push(be(u?l:x,i,"x","add")),m.push(be(p?a:y,i,"y","add"))):l&&o==="new"?(m.push(be(u?l:x,i,"x","add")),m.push(Mn({atomType:t.atomType,link:[zn(i,"y")]}))):n==="new"&&a?(m.push(Mn({atomType:e.atomType,link:[zn(i,"x")]})),m.push(be(p?a:y,i,"y","add"))):n==="new"&&o==="new"&&(m.push(Mn({atomType:e.atomType,link:[zn(i,"x")]})),m.push(Mn({atomType:t.atomType,link:[zn(i,"y")]}))),g.skipDataUpdate=!0}}else if(s==="remove"){const x=be(e,i,"x","remove");if(m.push(x),Ne(i)===2){const y=be(t,i,"y","remove");m.push(y)}}else s==="unmove"?h===1?l&&m.push(be(l,i,"x","unmove")):h===2&&l&&a&&(m.push(be(l,i,"x","unmove")),m.push(be(a,i,"y","unmove"))):s==="setPathLength"&&(m.push(gl(e,i,"x")),m.push(gl(t,i,"y")));return{editedCorrelations:m,buildCorrelationDataOptions:g}}function gl(e,t,n){var i,r;const o=ze(e);if(Ne(t)===2){const l=t.id.split("_")[n==="x"?0:1],a=o.link.find(u=>u.id===l);if(a){const u=(i=t.signal.j)==null?void 0:i.pathLength;$d(u,a.experimentType)?((r=a.signal.j)==null||delete r.pathLength,a.signal.j&&Object.keys(a.signal.j).length===0&&delete a.signal.j,delete a.edited.pathLength):(a.signal.j?a.signal.j.pathLength=u:a.signal.j={pathLength:u},a.edited.pathLength=!0)}}return o}function zE(e,t){e=e.toLowerCase().replace(/\s+/g,"").split(",").map(s=>s==="sp"?"sp1":s).join(","),e=e.replaceAll("sp","");let n=[];return/^(?:[0-9],{0,1})+$/g.test(e)&&(n=e.split(",").filter(s=>s.length>0).map(s=>Number(s))),n=n.filter(s=>s>=(t==="protonsCount"?0:1)&&(t==="protonsCount"||s<=3)),n.filter((s,i,r)=>r.indexOf(s)===i)}function VE(e,t,n,o,s,i,r){if(r.pseudo===!0||n===null||!r.link.some(g=>g.experimentID===n.id))return!1;const l=t.split(",").map(g=>Hd(g)),a=1e4,u=o[0]*a,p=o[1]*a,h=s[0]*a,m=s[1]*a;if(i===Y.DM_1D){const g=r.link.find(S=>Ne(S)===1);if(!g)return!1;let x=ta(g);if(x===void 0)return!1;if(x*=a,Pe(e,g.experimentID,!0)&&l[0]===r.atomType&&x>=u&&x<=p||r.link.some(S=>{const v=Pe(e,S.experimentID,!0);return Vd(v,S,a,u,p)}))return!0}else if(i===Y.DM_2D){if(!l.includes(r.atomType))return!1;const g=r.link.find(y=>Ne(y)===2);if(!g)return!1;const x=Pe(e,g.experimentID,!0);if(Yo(x,g,a,u,p,h,m))return!0;if(r.link.some(y=>{const S=Pe(e,y.experimentID,!0);return Yo(S,y,a,u,p,h,m)}))return!0}return!1}function Go({correlation:e}){const{data:t,xDomain:n,yDomain:o,displayerMode:s,activeTab:i,activeSpectrum:r}=$();return c.exports.useMemo(()=>VE(t,i,r,n,o,s,e),[r,i,e,s,t,n,o])}const jE=M`
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
`;function xl({description:e,onConfirm:t}){const n=c.exports.useCallback(o=>{o.preventDefault(),o.stopPropagation(),t()},[t]);return w("div",{css:jE,children:[d("p",{children:e}),d("button",{type:"button",onClick:n,children:"Confirm"})]})}const BE=M`
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
`;function XE({signal:e,experimentType:t,onEdit:n}){var p,h,m,g;const[o,s]=c.exports.useState(((p=e.j)==null?void 0:p.pathLength)!==void 0?e.j.pathLength.from:((h=ve[t])==null?void 0:h.from)||0),[i,r]=c.exports.useState(((m=e.j)==null?void 0:m.pathLength)!==void 0?e.j.pathLength.to:((g=ve[t])==null?void 0:g.to)||0),[l,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{const x={from:o,to:i},y=k(b({},e),{j:k(b({},e.j),{pathLength:x})});n(y)},[i,o,n,e]);return c.exports.useEffect(()=>{a(o<=0||o>i)},[i,o]),w("div",{css:BE,children:[d("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[d(te,{title:"Min:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:d(wt,{type:"number",value:o,onChange:x=>{s(Number(x.target.value))},style:{input:{color:l?"red":"black"}}})}),d(te,{title:"Max:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:d(wt,{type:"number",value:i,onChange:x=>{r(Number(x.target.value))}})})]}),l?w("p",{className:"warning",children:["Minimum must not be 0 or higher than the maximum value."," "]}):d(de,{type:"button",onClick:u,disabled:l,children:"Set"})]})}const YE=M`
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
`;function GE({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:s}){const[i,r]=c.exports.useState(e.id),[l,a]=c.exports.useState((t==null?void 0:t.id)||void 0);function u(h){const m=lt(h);return`${m?m.toFixed(2):"?"}`}const p=c.exports.useCallback((h,m)=>{const g=o.reduce((x,y)=>(y.pseudo===!1&&y.atomType===n.atomType[m]&&x.push({key:y.id,value:y.id,label:`${y.label.origin}: ${u(y)}`}),x),[]);return g.push({key:"new",value:"new",label:`new -> ${(m===0?lt(e):lt(t)).toFixed(2)}`}),d(Me,{onChange:x=>{m===0?r(x):a(x)},data:g,defaultValue:h.id,style:{width:110,height:25,margin:0,border:"1px solid grey"}})},[e,t,o,n.atomType]);return w("div",{css:YE,children:[d("p",{children:"Move of signals on either one or both axes."}),d("p",{children:'"New" means to separate into a new row or column.'}),w("div",{className:"selection-container",children:[p(e,0),t&&p(t,1)]}),d("button",{type:"button",onClick:()=>s(i,l),children:"Move"})]})}const WE=M`
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
`;function ar({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onClose:s,onEdit:i}){const[r,l]=c.exports.useState("move"),a=c.exports.useCallback(()=>{const h=Ne(n);return h===1?` 1D (${n.signal.delta.toFixed(3)})`:h===2?`${n.signal.x?`${n.signal.x.delta.toFixed(2)}`:"?"} (${e.label.origin}), ${n.signal.y?n.signal.y.delta.toFixed(2):"?"} (${t.label.origin})`:""},[e.label.origin,n,t]),u=c.exports.useCallback((h,m,g,x)=>{const{editedCorrelations:y,buildCorrelationDataOptions:S}=HE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:m,selectedCorrelationIdDim2:g,action:h,link:x||n,correlations:o});i(y,h,x||n,S),s==null||s()},[e,t,o,n,s,i]),p=c.exports.useMemo(()=>d("div",{className:"tabs-container",children:w(In,{position:sr.TOP,activeTab:r,onClick:h=>l(h.tabid),children:[d(Re,{tablabel:"Move",tabid:"move",children:d(GE,{correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:(h,m)=>u("move",h,m)})}),d(Re,{tablabel:"Unmove",tabid:"unmove",children:d(xl,{description:"Movement of signal to its original place.",onConfirm:()=>u("unmove",e.id,t.id)})}),d(Re,{tablabel:"Remove",tabid:"remove",children:d(xl,{description:"Deletion of signal.",onConfirm:()=>u("remove",void 0,void 0)})}),d(Re,{tablabel:"J Coupling",tabid:"setPathLength",children:d(XE,{signal:n.signal,experimentType:n.experimentType,onEdit:h=>{const m=k(b({},n),{signal:h});u("setPathLength",e,t,m)}})})]})}),[r,e,t,o,u,n]);return w("div",{css:WE,children:[w("div",{className:"header handle",children:[d(me,{onClick:s}),d("p",{className:"header-info",children:`${n.experimentType.toUpperCase()} signal at ${a()}`})]}),p]})}function ZE({spectraData:e,correlationsData:t,correlation:n,onEdit:o}){var C;const s=c.exports.useRef(),i=fe(),r=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const E=[];return n.link.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(Se(T.signal.id,"Crosshair_X"));const I=ki(e,T.experimentID,T.signal.id,!0);I&&E.push(I)}}),E},[n,e]),l=re(r),a=c.exports.useCallback(E=>{E.currentTarget.focus(),l.show()},[l]),u=c.exports.useCallback(E=>{E.currentTarget.blur(),l.hide()},[l]),p=Go({correlation:n}),h=c.exports.useMemo(()=>({style:{color:zd(t,n)||void 0,backgroundColor:l.isActive?"#ff6f0057":p?"#f5f5dc":"inherit"},title:n.pseudo===!1&&n.link.reduce((E,T)=>(T.pseudo===!1&&!E.includes(T.experimentType.toUpperCase())&&E.push(T.experimentType.toUpperCase()),E),[]).sort().join("/"),onMouseEnter:a,onMouseLeave:u}),[n,t,l.isActive,p,a,u]),m=c.exports.useMemo(()=>n.edited.equivalence?{backgroundColor:"#F7F2E0"}:{color:Number.isInteger(n.equivalence)?n.equivalence===1?"#bebebe":"black":"red"},[n]),g=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(E=>Ne(E)===1&&E.pseudo===!1).map(E=>{var T;return{label:`edit 1D (${E.signal.delta.toFixed(3)}${((T=E.edited)==null?void 0:T.moved)===!0?"[MOVED]":""})`,onClick:()=>{l.hide(),i.show(d(ar,{onClose:()=>i.close(),onEdit:o,link:E,correlationDim1:n,correlationDim2:void 0,correlations:t.values}),{position:ne.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete all (${n.label.origin})`,onClick:()=>{i.showConfirmDialog({message:`All signals of ${n.label.origin} (${lt(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{o([n],"removeAll")}},{text:"No"}]}),l.hide()}}]):[],[n,t.values,l,i,o]),x=c.exports.useCallback(E=>{E.preventDefault(),s.current.handleContextMenu(E)},[s]),v=h,{title:y}=v,S=G(v,["title"]);return d("th",k(b({},S),{title:y===!1?void 0:y,children:w("div",{style:{display:"block"},onContextMenu:E=>{g.length>0&&x(E)},children:[d("p",{children:n.label.origin}),d("p",{children:lt(n)?(C=lt(n))==null?void 0:C.toFixed(2):""}),d("p",{style:m,children:Number.isInteger(n.equivalence)?n.equivalence:n.equivalence.toFixed(2)}),d(qt,{ref:s,context:g})]})}))}function UE({rowCorrelation:e,columnCorrelation:t,commonLinks:n,correlations:o,spectraData:s,onEdit:i}){const r=c.exports.useRef(),l=fe(),a=c.exports.useMemo(()=>{const E=[];return n.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(Se(T.signal.id,"Crosshair"));const I=ki(s,T.experimentID,T.signal.id,!0);I&&E.push(I)}}),E},[n,s]),u=re(a),p=c.exports.useCallback(E=>{E.currentTarget.focus(),u.show()},[u]),h=c.exports.useCallback(E=>{E.currentTarget.blur(),u.hide()},[u]),m=c.exports.useCallback(E=>{E.preventDefault(),r.current.handleContextMenu(E)},[r]),g=c.exports.useCallback((E,T)=>{const I=e.link.filter(A=>(A.experimentType==="hsqc"||A.experimentType==="hmqc")&&A.pseudo===!0).length;let D,N;if(E==="add"){const A=Qo({experimentType:"hsqc",experimentID:q(),atomType:[t.atomType,e.atomType],id:q(),pseudo:!0,signal:{id:q(),sign:0}});D=be(t,A,"x","add"),N=be(e,A,"y","add"),N.edited.protonsCount||(N.protonsCount=[I+1])}else D=be(t,T,"x","remove"),N=be(e,T,"y","remove"),N.edited.protonsCount||(N.protonsCount=I-1>0?[I-1]:[]);i([D,N],E,T,{skipDataUpdate:!0})},[t,i,e]),x=c.exports.useMemo(()=>{const E=n.map(I=>{var N;const D=`${ml(I)} (${I.signal.x?I.signal.x.delta.toFixed(2):"?"}, ${I.signal.y?I.signal.y.delta.toFixed(2):"?"})${((N=I.edited)==null?void 0:N.moved)===!0?"[MOVED]":""}`;return I.pseudo===!1?[{label:`edit ${D}`,onClick:()=>{u.hide(),l.show(f(ar,{onClose:()=>l.close(),onEdit:i,link:I,correlationDim1:t,correlationDim2:e,correlations:o}),{position:ne.MIDDLE_RIGHT,isBackgroundBlur:!1})}}]:[]}).flat(),T=n.find(I=>I.pseudo===!0&&I.experimentType==="hsqc");return e.pseudo===!0&&(T?E.push({label:"remove pseudo HSQC",onClick:()=>g("remove",T)}):E.push({label:"add pseudo HSQC",onClick:()=>g("add")})),E},[t,n,o,g,u,l,i,e]),y=c.exports.useMemo(()=>n.map((E,T)=>{var I;return _("label",{children:[f("label",{style:{color:E.pseudo===!0||((I=E.edited)==null?void 0:I.moved)===!0?"blue":"black"},children:ml(E)}),T<n.length-1&&f("label",{children:"/"})]},E.id)}),[n]),S=c.exports.useMemo(()=>n.reduce((E,T)=>(E.includes(T.experimentType.toUpperCase())||E.push(T.experimentType.toUpperCase()),E),[]).join("/"),[n]),v=Go({correlation:e}),C=Go({correlation:t});return _("td",{onContextMenu:E=>{x.length>0&&m(E)},style:{backgroundColor:u.isActive?"#ff6f0057":C||v?"#f5f5dc":"inherit"},title:S,onMouseEnter:p,onMouseLeave:h,children:[y,f(qt,{ref:r,context:x})]})}function KE({additionalColumnData:e,correlations:t,correlation:n,styleRow:o,styleLabel:s,onSaveEditEquivalences:i,onSaveEditNumericValues:r,onEditCorrelationTableCellHandler:l,spectraData:a}){var H;const u=c.exports.useRef(),p=fe(),h=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const L=[];return n.link.forEach(z=>{if(z.pseudo===!1){L.push(z.signal.id),L.push(Se(z.signal.id,"Crosshair_Y"));const V=ki(a,z.experimentID,z.signal.id,!0);V&&L.push(V)}}),L},[n,a]),m=re(h),g=c.exports.useCallback(L=>{i(n,L.target.value)},[n,i]),x=c.exports.useCallback((L,z)=>{r({correlation:n,values:zE(L.target.value,z),key:z})},[n,r]),y=c.exports.useMemo(()=>e.map(L=>{const z=[];return n.link.forEach(V=>{L.link.forEach(W=>{if(V.axis!==W.axis&&V.experimentID===W.experimentID&&V.signal.id===W.signal.id&&!z.some(O=>O.signal.id===V.signal.id)){let O=V.experimentType;V.signal&&V.signal.sign!==0&&(O+=V.signal.sign===1?" (+)":" (-)"),z.push(Qo(k(b({},V),{experimentLabel:O,axis:void 0,id:`${W.id}_${V.id}`})))}})}),f(UE,{rowCorrelation:n,columnCorrelation:L,commonLinks:z,correlations:t,spectraData:a,onEdit:l},`addColData_${n.id}_${L.id}`)}),[e,n,t,l,a]),S=c.exports.useMemo(()=>n.edited.equivalence?{color:"blue"}:{color:n.equivalence===1?"#bebebe":"black"},[n]),v=c.exports.useCallback(L=>{L.currentTarget.focus(),m.show()},[m]),C=c.exports.useCallback(L=>{L.currentTarget.blur(),m.hide()},[m]),E=Go({correlation:n}),T=c.exports.useMemo(()=>({style:k(b({},o),{backgroundColor:m.isActive?"#ff6f0057":E?"#f5f5dc":"inherit"}),title:n.pseudo===!1&&n.link.reduce((L,z)=>(z.pseudo===!1&&!L.includes(z.experimentType.toUpperCase())&&L.push(z.experimentType.toUpperCase()),L),[]).sort().join("/"),onMouseEnter:v,onMouseLeave:C}),[n.link,n.pseudo,m.isActive,E,v,C,o]),I=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(L=>Ne(L)===1&&L.pseudo===!1).map(L=>{var z;return{label:`edit 1D (${L.signal.delta.toFixed(3)})${((z=L.edited)==null?void 0:z.moved)===!0?"[MOVED]":""}`,onClick:()=>{m.hide(),p.show(f(ar,{onClose:()=>p.close(),onEdit:l,link:L,correlationDim1:n,correlationDim2:void 0,correlations:t}),{position:ne.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete ${n.label.origin}`,onClick:()=>{p.showConfirmDialog({message:`All signals of ${n.label.origin} (${lt(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{l([n],"removeAll")}},{text:"No"}]}),m.hide()}}]):[],[n,m,p,l,t]),D=c.exports.useCallback(L=>{L.preventDefault(),u.current.handleContextMenu(L)},[u]),R=T,{title:N}=R,A=G(R,["title"]),P=N||"";return _("tr",{style:o,children:[_("td",k(b({title:P},A),{style:k(b({},T.style),{styleLabel:s}),onContextMenu:L=>{I.length>0&&D(L)},children:[Ch(t,n),f(qt,{ref:u,context:I})]})),f("td",k(b({title:P},A),{children:lt(n)?(H=lt(n))==null?void 0:H.toFixed(2):""})),f("td",k(b({title:P},A),{children:n.pseudo===!1?n.atomType!=="H"?f(at,{type:"number",value:n.equivalence,style:S,onSave:g}):f("text",{style:S,children:n.equivalence}):""})),f("td",k(b({title:P},A),{children:n.atomType!=="H"?f(at,{type:"text",value:n.protonsCount.join(","),style:n.edited.protonsCount?{color:"blue"}:{},onSave:L=>x(L,"protonsCount")}):""})),f("td",k(b({title:P},A),{style:k(b({},T.style),{borderRight:"1px solid"}),children:n.atomType!=="H"?f(at,{type:"text",value:n.hybridization.map(L=>`sp${L}`).join(","),style:n.edited.hybridization?{color:"blue"}:{},onSave:L=>x(L,"hybridization")}):""})),y]})}const qE=M`
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
`;function JE({correlationsData:e,filteredCorrelationsData:t,additionalColumnData:n,editEquivalencesSaveHandler:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,showProtonsAsRows:r,spectraData:l}){const a=c.exports.useMemo(()=>t?t.values.filter(p=>r?p.atomType==="H":p.atomType!=="H").map(p=>d(KE,{additionalColumnData:n,correlations:e.values,correlation:p,styleRow:{backgroundColor:"mintcream"},styleLabel:p.atomType==="H"?{color:zd(e,p)}:{},onSaveEditEquivalences:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,spectraData:l},`correlation${p.atomType}${p.id}`)):[],[t,r,n,e,o,s,i,l]),u=c.exports.useMemo(()=>n.map(p=>d(ZE,{spectraData:l,correlationsData:e,correlation:p,onEdit:i},`additionalCorrelationHeader_${p.id}`)),[n,e,i,l]);return d("div",{css:qE,children:w("table",{children:[d("thead",{children:w("tr",{children:[d("th",{children:"Atom"}),d("th",{children:"\u03B4 (ppm)"}),d("th",{children:"Equiv"}),d("th",{children:"#H"}),d("th",{style:{borderRight:"1px solid"},children:"Hybrid"}),u]})}),d("tbody",{children:a})]})})}const QE=M`
  display: flex;
  width: 100%;
  font-size: 15px;
  font-weight: 300;
  white-space: nowrap;
  span {
    margin-left: 8px;
  }
`;function e2({correlationsData:e}){if(!e)return null;const t=Sh(e.options.mf),n=Object.keys(t).length>0?Object.keys(t).map((o,s)=>{const i=e.state[o],r=i?i.error:void 0,l=r?px.findIndex(a=>r[a]!==void 0):"black";return d("span",{style:{color:i?i.complete===!0&&(!r||Object.keys(r).length===0)?"green":l>=0?Ci[l].color:"black":"black"},children:`${o}: ${i?i.current:"-"}/${t[o]}   `},`molFormulaView_${s}`)}):d("p",{style:{fontStyle:"italic",color:"orange"},children:"Molecular formula is not set"});return d("div",{css:QE,children:n})}var t2=c.exports.memo(e2);const n2=M`
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
`;function o2({onSave:e=()=>null,previousMF:t}){const[n,o]=c.exports.useState(""),[s,i]=c.exports.useState(!0),[r,l]=c.exports.useState(!1),a=c.exports.useCallback(h=>{if(h.trim().length===0)return!1;try{return Ka(h),!0}catch{return!1}},[]),u=c.exports.useCallback(h=>{l(!0),a(h.target.value)?(i(!0),o(h.target.value)):(i(!1),o(""))},[a]),p=c.exports.useCallback(()=>{e(r?n.trim():t)},[r,n,e,t]);return w("div",{css:n2,children:[d("input",{type:"text",onChange:u,defaultValue:t}),d("button",{type:"button",onClick:p,disabled:!s,children:s?"Set":"Invalid"})]})}const s2=M`
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
`;function i2({onClose:e,onSave:t,molecules:n,previousMF:o}){const[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{n&&n.length>0&&i(0)},[n]);const r=c.exports.useCallback(u=>{t==null||t(u),e==null||e()},[e,t]),l=c.exports.useCallback(()=>{t==null||t(n[s].mf),e==null||e()},[s,n,e,t]),a=c.exports.useCallback(u=>{i(u)},[]);return w("div",{css:s2,children:[d("div",{className:"header handle",children:d(me,{onClick:e})}),d("div",{children:d("p",{className:"info",children:"Please type in a molecular formula!"})}),d(o2,{onSave:r,previousMF:o}),w("div",{children:[d("p",{className:"optional",children:"OR"}),d("p",{className:"optional2",children:"Select a molecule as reference!"})]}),d(Nd,{molecules:n,onChange:a}),d("button",{type:"button",onClick:l,children:"Set"})]})}const r2=M`
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
`;function l2({onClose:e,onSave:t,previousTolerance:n}){const[o,s]=c.exports.useState(),[i,r]=c.exports.useState({});c.exports.useEffect(()=>{if(n){s(n);const p={};Object.keys(n).forEach(h=>{p[h]=!0}),r(p)}else s(void 0)},[n]);const l=c.exports.useCallback(()=>{t==null||t(o),e==null||e()},[e,t,o]),a=c.exports.useCallback((p,h)=>{const m=p.target.value;m.trim().length>0?(s(k(b({},o),{[h]:Number(m)})),r(k(b({},i),{[h]:!0}))):r(k(b({},i),{[h]:!1}))},[i,o]),u=c.exports.useMemo(()=>o?Object.keys(o).map(p=>w("tr",{children:[d("td",{children:p}),d("td",{children:d("input",{type:"number",onChange:h=>a(h,p),defaultValue:o[p],style:i[p]?{}:{backgroundColor:"orange"}})})]},`tolerance_${p}`)):void 0,[i,a,o]);return w("div",{css:r2,children:[w("div",{className:"header handle",children:[d("span",{children:"Set Shift Tolerances"}),d(me,{onClick:e})]}),w("table",{children:[d("thead",{children:w("tr",{children:[d("th",{children:"Atom"}),d("th",{children:"Value"})]})}),d("tbody",{children:u})]}),d("button",{type:"button",onClick:l,disabled:Object.keys(i).some(p=>!i[p]),children:"Set"})]})}const a2=M`
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
`;function c2(){const{molecules:e,correlations:t,data:n,xDomain:o,yDomain:s,displayerMode:i,activeTab:r}=$(),l=X(),a=fe(),u=je(),[p,h]=c.exports.useState([]),[m,g]=c.exports.useState("H"),[x,y]=c.exports.useState(!1),[S,v]=c.exports.useState(!1),C=c.exports.useMemo(()=>{const O=j=>{if(j.pseudo===!0)return!1;const U=r.split(",").map(st=>Hd(st)),ee=1e4,_e=o[0]*ee,gt=o[1]*ee,Jt=s[0]*ee,Qt=s[1]*ee;if(i===Y.DM_1D){const st=j.link.find(tn=>Ne(tn)===1);if(!st)return!1;let en=ta(st);if(en===void 0)return!1;if(en*=ee,Pe(n,st.experimentID,!0)&&U[0]===j.atomType&&en>=_e&&en<=gt||j.link.some(tn=>{const Ud=Pe(n,tn.experimentID,!0);return Vd(Ud,tn,ee,_e,gt)}))return!0}else if(i===Y.DM_2D){if(!U.includes(j.atomType))return!1;const st=j.link.find(Nn=>Ne(Nn)===2);if(!st)return!1;const en=Pe(n,st.experimentID,!0);if(Yo(en,st,ee,_e,gt,Jt,Qt))return!0;if(j.link.some(Nn=>{const tn=Pe(n,Nn.experimentID,!0);return Yo(tn,Nn,ee,_e,gt,Jt,Qt)}))return!0}return!1};if(t){const j=S?t.values.filter(U=>O(U)):t.values;return k(b({},t),{values:j})}},[r,t,i,S,n,o,s]),E=c.exports.useCallback(O=>{l({type:wc,payload:{mf:O}})},[l]),T=c.exports.useCallback(O=>{l({type:Ec,payload:{tolerance:O}})},[l]),I=c.exports.useCallback(()=>{a.show(d(i2,{onClose:()=>a.close(),onSave:E,molecules:e,previousMF:t.options.mf}))},[t,E,a,e]),D=c.exports.useCallback(()=>{a.show(d(l2,{onClose:()=>a.close(),onSave:T,previousTolerance:t.options.tolerance}))},[t,T,a]),N=c.exports.useMemo(()=>["H","H-H"].concat(t?t.values.map(j=>j.atomType).filter((j,U,ee)=>j!=="H"&&ee.indexOf(j)===U):[]).map(j=>({key:j,label:j,value:j})),[t]);c.exports.useEffect(()=>{const O=m.split("-")[0];h(C?C.values.filter(j=>j.atomType===O).reverse():[])},[C,m]);const A=c.exports.useCallback((O,j)=>{l({type:Zs,payload:{id:O.id,correlation:k(b({},O),{equivalence:j,edited:k(b({},O.edited),{equivalence:j!==1})})}})},[l]),P=c.exports.useCallback(({correlation:O,values:j,key:U})=>{l({type:Zs,payload:{id:O.id,correlation:k(b({},O),{[U]:j,edited:k(b({},O.edited),{[U]:!0})}),options:{skipDataUpdate:!0}}})},[l]),R=c.exports.useCallback((O,j)=>{l({type:Sc,payload:{correlations:O,options:j}})},[l]),H=c.exports.useCallback(O=>{l({type:kc,payload:{correlation:O,assignmentData:u}})},[u,l]),L=c.exports.useCallback(O=>{const j=Ne(O);if(j===1){const U=Pe(n,O.experimentID,!1),ee=Si(U,O.signal.id),_e=sc(U,O.signal.id);l({type:Hc,payload:{spectrum:U,range:ee,signal:_e,assignmentData:u}})}else if(j===2){const U=Pe(n,O.experimentID,!1),ee=_o(U,O.signal.id),_e=Gn(U,O.signal.id);l({type:qc,payload:{spectrum:U,zone:ee,signal:_e,assignmentData:u}})}},[u,l,n]),z=c.exports.useCallback(O=>{var U;if(Ne(O)===2){const ee=Pe(n,O.experimentID,!1),_e=_o(ee,O.signal.id),gt=Gn(ee,O.signal.id);l({type:Jc,payload:{spectrum:ee,zone:_e,signal:gt,pathLength:(U=O.signal.j)==null?void 0:U.pathLength}})}},[l,n]),V=c.exports.useCallback((O,j,U,ee)=>{j==="add"||j==="move"||j==="remove"||j==="unmove"||j==="setPathLength"?(U&&U.pseudo===!1&&(j==="remove"?L(U):j==="setPathLength"&&z(U)),R(O,ee)):j==="removeAll"&&H(O[0])},[z,H,L,R]),W=c.exports.useCallback(()=>{v(!S)},[S]);return w("div",{css:a2,children:[w(ot,{canDelete:!1,counter:t?t.values.length:0,onFilter:W,filterToolTip:S?"Show all correlations":"Hide correlations out of view",filterIsActive:S,counterFiltered:C==null?void 0:C.values.length,children:[d(Ee,{title:`Set molecular formula (${t.options.mf})`,popupPlacement:"right",children:d("button",{type:"button",onClick:I,children:d(kh,{})})}),d(Ee,{title:"Set shift tolerance",popupPlacement:"right",children:d("button",{type:"button",onClick:D,children:d(wh,{})})}),w("div",{className:"extra-header-content",children:[d("div",{className:"overview-container",children:d(t2,{correlationsData:t})}),d("div",{className:"table-view-selection",children:w("span",{children:[d("label",{children:"View:"}),d(Me,{onChange:O=>{g(O),y(O==="H-H")},data:N,defaultValue:m,style:{fontSize:"12px",width:"70px",height:"18px",border:"1px solid grey"}})]})})]})]}),d(JE,{correlationsData:t,filteredCorrelationsData:C,additionalColumnData:p,editEquivalencesSaveHandler:A,onSaveEditNumericValues:P,onEditCorrelationTableCellHandler:V,showProtonsAsRows:x,spectraData:n})]})}var u2=c.exports.memo(c2);const Ms={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},d2=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function p2({nucleus:e,innerRef:t}){const n=se(),o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const l=e.reduce((u,p)=>(u[p]=t1,u),{}),a=ft(o.current,"formatting.panels.zones");s.current.setValues(a||l)}},[e,o]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{o.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"zones",value:l}}),n.success("zones preferences saved successfully")},[n,o]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Ms.container,children:f(ce,{onSubmit:r,ref:s,children:e==null?void 0:e.map(l=>_("div",{style:Ms.groupContainer,children:[f(Le,{style:Ms.header,value:l}),d2.map(a=>f(Fe,{label:a.label,checkControllerName:`${l}.${a.checkController}`,formatControllerName:`${l}.${a.formatController}`},a.id))]},l))})})}const h2=c.exports.memo(p2);function f2(e,t){const n=vs();return f(h2,{innerRef:t,nucleus:n})}var m2=c.exports.forwardRef(f2);const g2=M`
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
`;function x2({signalIndex:e}){var o,s,i,r,l,a,u,p,h,m,g,x,y,S,v,C,E,T;const{errors:t,values:n}=he();return w("div",{css:g2,children:[d("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[d(Js,{name:`signals[${e}].j.pathLength.from`,defaultValue:((s=(o=n.signals[e].j)==null?void 0:o.pathLength)==null?void 0:s.from)||((i=ve[n.experimentType])==null?void 0:i.from)||1,label:"Min: ",style:{input:{color:(a=(l=(r=t.signals)==null?void 0:r[e].j)==null?void 0:l.pathLength)!=null&&a.from?"red":"black"}},min:1,max:((p=(u=n.signals[e].j)==null?void 0:u.pathLength)==null?void 0:p.to)||((h=ve[n.experimentType])==null?void 0:h.to),pattern:"[1-9]+"}),d(Js,{name:`signals[${e}].j.pathLength.to`,defaultValue:((g=(m=n.signals[e].j)==null?void 0:m.pathLength)==null?void 0:g.to)||((x=ve[n.experimentType])==null?void 0:x.to)||1,label:"Max: ",style:{input:{color:(v=(S=(y=t.signals)==null?void 0:y[e].j)==null?void 0:S.pathLength)!=null&&v.to?"red":"black"}},min:((E=(C=n.signals[e].j)==null?void 0:C.pathLength)==null?void 0:E.from)||((T=ve[n.experimentType])==null?void 0:T.from)||1,pattern:"[1-9]+"})]})]})}function b2({signalIndex:e}){return f(x2,{signalIndex:e})}const y2=M`
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
`,v2=M`
  color: red;
`,C2=M`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function S2(){const{values:e,setFieldValue:t,errors:n}=he(),o=c.exports.useCallback(l=>!!((n==null?void 0:n.signals)&&(n==null?void 0:n.signals[l])),[n]),s=c.exports.useMemo(()=>e.signals.length>0?e.signals.map((a,u)=>d(Re,{tabid:`${u}`,tabstyles:o(u)?v2:C2,render:()=>w("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"11px"},children:[w("span",{children:["\u{1D6C5}",d("sub",{children:a.x.nucleus}),": ",a.x.delta.toFixed(2)]}),w("span",{children:["\u{1D6C5}",d("sub",{children:a.y.nucleus}),": ",a.y.delta.toFixed(2)]})]}),children:d(b2,{signalIndex:u})},`signalForm_zone${u}`)):[],[o,e.signals]),i=c.exports.useCallback(({tabid:l})=>{t("activeTab",l)},[t]),r=c.exports.useCallback(({tabid:l})=>{const a=e.signals.filter((u,p)=>p!==Number(l));t("signals",a)},[t,e.signals]);return w("div",{children:[d("div",{css:y2}),d(In,{activeTab:e.activeTab,onClick:i,onDelete:r,children:s})]})}const k2=()=>c.exports.useMemo(()=>Q().shape({signals:$s().of(Q().shape({j:Q().shape({pathLength:Q().shape({from:ae().required().positive().integer(),to:ae().required().positive().integer()})})})).min(1,"There must be at least one signal in a zone!")}),[]),w2=M`
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
`;function E2({onSaveEditZoneModal:e=()=>null,onCloseEditZoneModal:t=()=>null,onZoomEditZoneModal:n=()=>null,rowData:o}){const s=c.exports.useRef(null),i=k2(),r=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{r()},[r]);const l=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(p=>{(async()=>{const h=k(b({},o),{signals:p.signals.map(m=>{var g,x;return $d((g=m.j)==null?void 0:g.pathLength,o.tableMetaInfo.experiment)&&((x=m.j)==null||delete x.pathLength,m.j&&Object.keys(m.j).length===0&&delete m.j),m})});await e(h),l()})()},[l,e,o]),u=c.exports.useMemo(()=>({activeTab:"0",signals:o.signals.map(p=>{var h,m;return k(b({},p),{j:b({pathLength:{from:((h=ve[o.tableMetaInfo.experiment])==null?void 0:h.from)||1,to:((m=ve[o.tableMetaInfo.experiment])==null?void 0:m.to)||1}},p.j)})})}),[o.signals,o.tableMetaInfo.experiment]);return d("div",{css:w2,children:w(ce,{ref:s,initialValues:u,validationSchema:i,onSubmit:a,children:[w("div",{className:"header handle",children:[d(de,{onClick:r,className:"zoom-button",children:d(eo,{title:"Set to default view on range in spectrum"})}),d("span",{children:"Zone and Signal edition"}),d(ir,{onClick:()=>s.current.submitForm(),popupTitle:"Save and exit"}),d(me,{onClick:l})]}),d(S2,{})]})})}const A2={marginLeft:2,marginRight:2,border:"none",height:"20px"};function T2({rowData:e,rowSpanTags:t}){const n=X(),o=je(),s=fe(),i=c.exports.useCallback(p=>{n({type:hu,payload:{rowData:e,value:p}})},[n,e]),r=c.exports.useCallback(()=>{n({type:ds,payload:{id:e.id,assignmentData:o}})},[o,n,e]),l=c.exports.useCallback(()=>{const p=Math.abs(e.x.from-e.x.to)*10;n({type:rs,xDomain:e.x.from<=e.x.to?[e.x.from-p,e.x.to+p]:[e.x.to-p,e.x.from+p]});const h=Math.abs(e.y.from-e.y.to)*10;n({type:Ti,yDomain:e.y.from<=e.y.to?[e.y.from-h,e.y.to+h]:[e.y.to-h,e.y.from+h]})},[n,e.x.from,e.x.to,e.y.from,e.y.to]),a=c.exports.useCallback(p=>{n({type:fu,payload:{editedRowData:p}})},[n]),u=c.exports.useCallback(()=>{n({type:co,payload:{selectedTool:F.editRange.id,tempRange:e}}),s.show(f(E2,{onCloseEditZoneModal:()=>s.close(),onSaveEditZoneModal:a,onZoomEditZoneModal:()=>l(),rowData:e}),{position:ne.MIDDLE_RIGHT,transition:Qe.SCALE,isBackgroundBlur:!1})},[n,s,e,a,l]);return _(c.exports.Fragment,{children:[f("td",{children:f(Me,{onChange:p=>{i(p)},data:ai,defaultValue:e.tableMetaInfo.signal.kind,style:A2})}),_("td",k(b({},t),{children:[f("button",{type:"button",className:"delete-button",onClick:r,children:f(At,{})}),f("button",{type:"button",className:"zoom-button",onClick:l,children:f(eo,{title:"Zoom to zone in spectrum"})}),f("button",{type:"button",className:"edit-button",onClick:u,children:f(Jl,{color:"blue"})})]}))]})}function bl({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:r,showUnlinkButton:l,setShowUnlinkButton:a}){var u,p;return f("td",k(b({},o),{onClick:h=>s(h,t,r),style:n.isActive||t.isActive&&((u=t.activated)==null?void 0:u.axis)===r?{color:"red",fontWeight:"bold"}:void 0,children:B(e,`tableMetaInfo.signal.${r}.diaIDs`,[]).length>0?_("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e.tableMetaInfo.signal[r].diaIDs.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:l?"visible":"hidden",padding:0,margin:0},onClick:h=>i(h,!1,r),children:f(Jo,{color:"red"})})})]}):t.isActive&&((p=t.activated)==null?void 0:p.axis)===r?"0":""}))}function D2({rowData:e,assignmentSignal:t,onHoverSignalX:n,onHoverSignalY:o,showUnlinkButtonSignalX:s,showUnlinkButtonSignalY:i,setShowUnlinkButtonSignalX:r,setShowUnlinkButtonSignalY:l,onClick:a,onUnlink:u,highlightSignalX:p,highlightSignalY:h}){return _(c.exports.Fragment,{children:[f(bl,{rowData:e,assignment:t,highlight:p,onHover:n,onClick:a,onUnlink:u,axis:"x",showUnlinkButton:s,setShowUnlinkButton:r}),f(bl,{rowData:e,assignment:t,highlight:h,onHover:o,onClick:a,onUnlink:u,axis:"y",showUnlinkButton:i,setShowUnlinkButton:l})]})}function I2({rowData:e,onHoverSignalX:t,onHoverSignalY:n}){const o=X(),s=B(e,"tableMetaInfo.signal.x.delta",null),i=B(e,"tableMetaInfo.signal.y.delta",null),r=B(e,"tableMetaInfo.signal.id",void 0),l=c.exports.useCallback(u=>{const p=u.target.value;o({type:Us,payload:{zoneID:e.id,signal:{id:r,x:p}}})},[o,r,e.id]),a=c.exports.useCallback(u=>{const p=u.target.value;o({type:Us,payload:{zoneID:e.id,signal:{id:r,y:p}}})},[o,r,e.id]);return _(c.exports.Fragment,{children:[f("td",k(b({},t),{children:s!==null?f(at,{value:s.toFixed(2),onSave:l,type:"number",style:{padding:"0.1rem 0.4rem"}}):""})),f("td",k(b({},n),{children:i!==null?f(at,{value:i.toFixed(2),onSave:a,type:"number",style:{padding:"0.1rem 0.4rem"}}):""}))]})}function yl({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:r,showUnlinkButton:l,setShowUnlinkButton:a,rowSpanTags:u}){var p,h,m,g;return f("td",k(b(b({},u),o),{onClick:x=>s(x,t,r),children:B(e,`${r}.nbAtoms`,0)>0?B(e,`${r}.diaIDs`,0).length>0?_("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e[r].nbAtoms," ","(",f("span",{style:t.isActive&&((p=t.activated)==null?void 0:p.axis)===r||t.isOver&&((h=t.highlighted)==null?void 0:h.axis)===r||n.isActive?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"},children:B(e,`${r}.diaIDs`,[]).length}),")"," ",f("sup",{children:f("button",{type:"button",style:{visibility:l?"visible":"hidden",padding:0,margin:0},onClick:x=>i(x,!0,r),children:f(Jo,{color:"red"})})})]}):t.isActive&&((m=t.activated)==null?void 0:m.axis)===r?_("div",{children:[`${B(e,`${r}.nbAtoms`,"")} (`,f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):e[r].nbAtoms:t.isActive&&((g=t.activated)==null?void 0:g.axis)===r?_("div",{children:["0 (",f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):""}))}function P2({rowData:e,assignmentZone:t,onHoverZoneX:n,onHoverZoneY:o,showUnlinkButtonZoneX:s,showUnlinkButtonZoneY:i,setShowUnlinkButtonZoneX:r,setShowUnlinkButtonZoneY:l,rowSpanTags:a,onClick:u,onUnlink:p,highlightZoneX:h,highlightZoneY:m}){return _(c.exports.Fragment,{children:[f(yl,{rowData:e,assignment:t,highlight:h,onHover:n,onClick:u,onUnlink:p,axis:"x",showUnlinkButton:s,setShowUnlinkButton:r,rowSpanTags:a}),f(yl,{rowData:e,assignment:t,highlight:m,onHover:o,onClick:u,onUnlink:p,axis:"y",showUnlinkButton:i,setShowUnlinkButton:l,rowSpanTags:a})]})}const N2={backgroundColor:"#ff6f0057"},R2={backgroundColor:"#f5f5dc"};function M2({rowData:e,onUnlink:t,onContextMenu:n,rowIndex:o}){var R,H,L,z;const s=dt(e.id),i=re([s.id]),r=re([Se(s.id,"X")].concat(((R=s.assigned)==null?void 0:R.x)||[])),l=re([Se(s.id,"Y")].concat(((H=s.assigned)==null?void 0:H.y)||[])),a=dt(e.tableMetaInfo.id),u=re([Se(a.id,"X")].concat(((L=a.assigned)==null?void 0:L.x)||[],Se(a.id,"Crosshair"))),p=re([Se(a.id,"Y")].concat(((z=a.assigned)==null?void 0:z.y)||[],Se(a.id,"Crosshair"))),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),[y,S]=c.exports.useState(!1),[v,C]=c.exports.useState(!1),E=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:B(e,"tableMetaInfo.hide",!1)===!0?{display:"none"}:null}),[e]),T=c.exports.useCallback((V,W,O)=>{V&&V.stopPropagation(),t(e,W,e.tableMetaInfo.signalIndex,O),O==="x"?W!==void 0?W?(m(!1),s.removeAll("x")):(S(!1),a.removeAll("x")):(m(!1),S(!1)):O==="y"?W!==void 0?W?(x(!1),s.removeAll("y")):(C(!1),a.removeAll("y")):(x(!1),C(!1)):(m(!1),s.removeAll("x"),S(!1),a.removeAll("x"),x(!1),s.removeAll("y"),C(!1),a.removeAll("y"))},[a,s,t,e]),I=c.exports.useCallback((V,W,O)=>{V.stopPropagation(),W.setActive(O)},[]),D=c.exports.useMemo(()=>({onMouseEnter:()=>{s.show("x"),r.show()},onMouseLeave:()=>{s.hide(),r.hide()}}),[s,r]),N=c.exports.useMemo(()=>({onMouseEnter:()=>{s.show("y"),l.show()},onMouseLeave:()=>{s.hide(),l.hide()}}),[s,l]),A=c.exports.useMemo(()=>({onMouseEnter:()=>{a.show("x"),u.show()},onMouseLeave:()=>{a.hide(),u.hide()}}),[a,u]),P=c.exports.useMemo(()=>({onMouseEnter:()=>{a.show("y"),p.show()},onMouseLeave:()=>{a.hide(),p.hide()}}),[a,p]);return w("tr",k(b({onContextMenu:V=>n(V,e),style:i.isActive||s.isActive?N2:B(e,"tableMetaInfo.isConstantlyHighlighted",!1)===!0?R2:null},i.onHover),{children:[d("td",k(b({},E),{children:o+1})),d(I2,{rowData:e,onHoverSignalX:A,onHoverSignalY:P}),d(D2,{rowData:e,assignmentSignal:a,onHoverSignalX:A,onHoverSignalY:P,showUnlinkButtonSignalX:y,showUnlinkButtonSignalY:v,setShowUnlinkButtonSignalX:V=>S(V),setShowUnlinkButtonSignalY:V=>C(V),onClick:I,onUnlink:T,highlightSignalX:u,highlightSignalY:p}),d(P2,{rowData:e,assignmentZone:s,onHoverZoneX:D,onHoverZoneY:N,showUnlinkButtonZoneX:h,showUnlinkButtonZoneY:g,setShowUnlinkButtonZoneX:V=>m(V),setShowUnlinkButtonZoneY:V=>x(V),rowSpanTags:E,onClick:I,onUnlink:T,highlightZoneX:r,highlightZoneY:l}),d(T2,{rowData:e,rowSpanTags:E})]}))}const _2=M`
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
`;function F2({tableData:e,onUnlink:t,context:n,nuclei:o,experiment:s}){const i=c.exports.useRef(null),r=c.exports.useCallback((m,g)=>{Gt(m)||(m.preventDefault(),i.current.handleContextMenu(m,g))},[i]),l=c.exports.useMemo(()=>{const m=[];return e.forEach((g,x)=>{g.signals.length===1?m.push(k(b({},g),{tableMetaInfo:k(b({},g.tableMetaInfo),{signal:g.signals[0],rowIndex:x,signalIndex:0,id:g.signals[0].id,experiment:s,nuclei:o})})):g.signals.length>1&&g.signals.forEach((y,S)=>{let v=!1,C=null;S<g.signals.length-1&&S===0?C=g.signals.length:v=!0,m.push(k(b({},g),{tableMetaInfo:k(b({},g.tableMetaInfo),{signal:y,rowSpan:C,hide:v,rowIndex:x,signalIndex:S,id:y.id,experiment:s})}))})}),m},[s,o,e]),{items:a,isSortedDesc:u,onSort:p}=Ld(l),h=c.exports.useMemo(()=>a.map((m,g)=>d(M2,{rowIndex:g,rowData:m,onUnlink:t,onContextMenu:(x,y)=>r(x,y)},`${m.tableMetaInfo.id}`)),[r,a,t]);return w("div",{children:[w("table",{css:_2,children:[w("thead",{children:[w("tr",{children:[d("th",{rowSpan:2,children:"#"}),d("th",{colSpan:2,children:"\u03B4 (ppm)"}),d("th",{colSpan:2,children:d(Ql,{})}),d("th",{colSpan:2,children:"\u03A3"}),d("th",{rowSpan:2,children:"Kind"}),d("th",{rowSpan:2,children:""})]}),w("tr",{children:[d("th",k(b({id:"tableMetaInfo.signal.x.delta"},p),{children:w(nn,{text:"F2",children:[o[0]," ",u("tableMetaInfo.signal.x.delta").content]})})),d("th",k(b({id:"tableMetaInfo.signal.y.delta"},p),{children:w(nn,{text:"F1",children:[o[1]," ",u("tableMetaInfo.signal.y.delta").content]})})),d("th",{children:d(nn,{text:"F2",children:o[0]})}),d("th",{children:d(nn,{text:"F1",children:o[1]})}),d("th",{children:d(nn,{text:"F2",children:o[0]})}),d("th",{children:d(nn,{text:"F1",children:o[1]})})]})]}),d("tbody",{children:h})]}),d(qt,{ref:i,context:n})]})}function nn(e){return w(Ve,{children:[d("div",{style:{position:"absolute",fontSize:8,color:"#3539E6"},children:e.text}),d("div",{style:{marginLeft:5},children:e.children})]})}const L2=M`
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
`;function O2({zones:e,activeTab:t,xDomain:n,yDomain:o,experiment:s}){const[i,r]=c.exports.useState(!1),l=je(),a=X(),u=fe(),[p,h]=c.exports.useState(!1),m=c.exports.useRef(),g=c.exports.useMemo(()=>{const D=(A,P,R,H)=>(A=A*1e4,P=P*1e4,R=R*1e4,H=H*1e4,(P>=n[0]*1e4&&A<=n[1]*1e4||A<=n[0]*1e4&&P>=n[1]*1e4)&&(H>=o[0]*1e4&&R<=o[1]*1e4||R<=o[0]*1e4&&H>=o[1]*1e4)),N=A=>A.filter(P=>D(P.x.from,P.x.to,P.y.from,P.y.to));if(e.values)return(i?N(e.values):e.values).map(P=>k(b({},P),{tableMetaInfo:{isConstantlyHighlighted:D(P.x.from,P.x.to,P.y.from,P.y.to)}}))},[e,i,n,o]),x=c.exports.useCallback(()=>{r(!i)},[i]),y=c.exports.useCallback((D=null,N=void 0,A=-1,P=void 0)=>{a({type:mu,payload:{zoneData:D,assignmentData:l,isOnZoneLevel:N,signalIndex:A,axis:P}})},[l,a]),S=c.exports.useCallback(()=>{y()},[y]),v=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:S},{text:"No"}]})},[S,u]),C=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All zones will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{a({type:ds,payload:{assignmentData:l}})}},{text:"No"}]})},[l,a,u]),E=c.exports.useCallback(()=>{h(!p)},[p]),T=c.exports.useCallback(()=>{m.current.saveSetting(),h(!1)},[]),I=c.exports.useCallback(D=>{pe.emit("onZonesVisibilityChange",{key:D})},[]);return d(Ve,{children:w("div",{css:[Nt,L2,p&&M`
              th {
                position: relative;
              }
            `],children:[!p&&w(ot,{counter:e.values?e.values.length:0,onDelete:C,deleteToolTip:"Delete All Zones",onFilter:x,filterToolTip:i?"Show all zones":"Hide zones out of view",filterIsActive:i,counterFiltered:g==null?void 0:g.length,showSettingButton:!0,onSettingClick:E,children:[d(Ee,{title:"Remove all Assignments",popupPlacement:"right",children:d("button",{className:"remove-assignments-btn",type:"button",onClick:v,disabled:!e.values||e.values.length===0,children:d(Kl,{})})}),d(Ge,{popupTitle:"show/hide zones",popupPlacement:"right",defaultValue:!0,onClick:()=>I("zones"),children:d("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"z"})}),d(Ge,{popupTitle:"show/hide signals",popupPlacement:"right",defaultValue:!0,onClick:()=>I("signals"),children:d("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"s"})}),d(Ge,{popupTitle:"show/hide peaks",popupPlacement:"right",defaultValue:!0,onClick:()=>I("peaks"),children:d("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"p"})})]}),p&&d(Pn,{onSave:T,onClose:E}),d("div",{className:"inner-container",children:p?d(m2,{ref:m}):d("div",{className:"table-container",children:g&&g.length>0?d(F2,{tableData:g,onUnlink:y,nuclei:t&&t.split(",").length===2?t.split(","):["?","?"],experiment:s}):d(Rt,{})})})]})})}const $2=c.exports.memo(O2),H2={zones:{},info:{}};function z2(){const{displayerKey:e,xDomain:t,yDomain:n,activeTab:o}=$(),{zones:s,info:i}=Ce(H2);return d($2,{xDomain:t,yDomain:n,activeTab:o,displayerKey:e,zones:s,experiment:i.experiment})}const Wo={data:{solvent:{description:"Solvent database",value:B2([...Eh,...Ah])}}};function vl(e,t){const o=(Wo.data[e]?Wo.data[e].value:[]).filter(r=>r.nucleus===t);return{data:o,getSolvents:()=>V2(o),search:(r=[])=>Th(o,{keywords:r})}}function V2(e){const t=[],n=new Map;for(const o of e)n.has(o.solvent)||(n.set(o.solvent,!0),t.push(o.solvent));return t}function j2(){return Object.keys(Wo.data).map(e=>{const{description:t}=Wo.data[e];return{id:e,name:t}})}function B2(e){return e.map(t=>(t.ranges=t.ranges.map(n=>b({id:q()},n)),t),[])}function X2(e){const t=[];let n=0;for(const r of e){let l=[];const o=r,{ranges:a}=o,u=G(o,["ranges"]);for(const p of a){l.push(p.id||q());const s=p,{signals:h=[]}=s,m=G(s,["signals"]);for(const g of h){const i=g,{js:x=[]}=i,y=G(i,["js"]),S=Y2(x),v=k(b(b(b(b({},u),m),y),S),{index:n,id:l,ranges:a});t.push(v)}}n++}return t}function Y2(e){if(e&&e.length>0){const{coupling:t,multiplicity:n}=e.reduce((o,{coupling:s,multiplicity:i})=>(o.coupling.push(s.toFixed(1)),o.multiplicity+=i,o),{coupling:[],multiplicity:""});return{multiplicity:n,coupling:t.join(",")}}else return{multiplicity:"s",coupling:""}}const Cl={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputContainer:{flex:4,borderRadius:"5px"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"100px"}};function G2(e,t){const n=le(),o=se(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{const l=ft(n.current,"formatting.panels.database");s.current.setValues(l||gd)},[n]);c.exports.useEffect(()=>{i()},[i]);const r=c.exports.useCallback(l=>{n.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"database",value:l}}),o.success("database preferences saved successfully")},[o,n]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:Cl.container,children:f(ce,{onSubmit:r,ref:s,children:_("div",{style:Cl.groupContainer,children:[f(Fe,{label:"Smiles",checkControllerName:"showSmiles",hideFormat:!0}),f(Fe,{label:"Solvent",checkControllerName:"showSolvent",hideFormat:!0}),f(Fe,{label:"Names",checkControllerName:"showNames",hideFormat:!0}),f(Fe,{label:"Range",checkControllerName:"showRange",hideFormat:!0}),f(Fe,{label:"\u03B4 (ppm)",checkControllerName:"showDelta",hideFormat:!0}),f(Fe,{label:"Assignment",checkControllerName:"showAssignment",hideFormat:!0}),f(Fe,{label:"J (Hz)",checkControllerName:"showCoupling",hideFormat:!0}),f(Fe,{label:"Multiplicity",checkControllerName:"showMultiplicity",hideFormat:!0})]})})})}var W2=c.exports.forwardRef(G2);const _s={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},Z2=[{showWhen:"showNames",index:1,Header:"names",accessor:e=>e.names?e.names.join(","):"",enableRowSpan:!0,style:b({width:"100px",minWidth:"100px",maxWidth:"100px"},_s)},{showWhen:"showRange",index:2,Header:"From - To",accessor:e=>`${e.from.toFixed(2)} - ${e.to.toFixed(2)}`,enableRowSpan:!0},{showWhen:"showDelta",index:3,Header:"\u03B4 (ppm)",accessor:"delta"},{showWhen:"showAssignment",index:4,Header:"Assignment",accessor:"assignment"},{showWhen:"showMultiplicity",index:5,Header:"Multi.",accessor:"multiplicity"},{showWhen:"showCoupling",index:6,Header:"J (Hz)",accessor:"coupling",style:b({width:"60px",minWidth:"60px"},_s)},{showWhen:"showSolvent",index:7,Header:"Solvent",accessor:"solvent",style:b({width:"80px",minWidth:"80px"},_s)},{showWhen:"showSmiles",index:8,Header:"Smiles",accessor:"index",enableRowSpan:!0,Cell:({row:e})=>d("div",{className:"smiles-container",style:{width:"100px",display:"block",overflow:"hidden"},children:(e==null?void 0:e.original.smiles)&&d(Dh,{height:60,width:60,smiles:e.original.smiles})})}];function U2({data:e,onAdd:t}){const n=le(),o=c.exports.useMemo(()=>[{index:10,Header:"",width:"1%",maxWidth:"24px",minWidth:"24px",id:"add-button",accessor:"index",enableRowSpan:!0,Cell:({row:i})=>d("button",{type:"button",className:"add-button",onClick:()=>t(i),children:d(yn,{})})}],[t]),s=c.exports.useMemo(()=>{const i=ft(n.current,"formatting.panels.database",gd);let r=[...o];for(const a of Z2){const l=a,{showWhen:u}=l,p=G(l,["showWhen"]);i[u]&&ys(r,p)}return r.sort((a,u)=>a.index-u.index)},[o,n]);return e&&e.length>0?d(Dn,{data:e,columns:s,highlightedSource:ue.DATABASE,groupKey:"index",approxItemHeight:30,enableVirtualScroll:!0}):d(Rt,{})}var K2=c.exports.memo(U2);const q2=M`
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
`,Sl={solvent:"",searchKeywords:""};function J2({nucleus:e,selectedTool:t}){const n=X(),{handleChangeOption:o}=Cs(),s=Be(e),[i,r]=c.exports.useState(!1),l=c.exports.useRef(),[a,u]=c.exports.useState(Sl),p=c.exports.useRef(null),[h,m]=c.exports.useState({data:[],databases:[],solvents:[]}),{item:g}=Ih("Database"),x=c.exports.useCallback(()=>{r(!i)},[i]),y=c.exports.useCallback(()=>{l.current.saveSetting(),r(!1)},[]),S=c.exports.useCallback(D=>{if(typeof D=="string"||D===-1){const N=String(D);u(A=>k(b({},A),{solvent:N}))}else u(N=>k(b({},N),{searchKeywords:D.target.value}))},[]);c.exports.useEffect(()=>{g!=null&&g.isOpen&&setTimeout(()=>{const D=tA(j2());p.current=vl(D[0].key,e);const N=p.current.data,A=kl(p.current.getSolvents());m({data:N,databases:D,solvents:A})})},[g==null?void 0:g.isOpen,e]),c.exports.useEffect(()=>{const{solvent:D,searchKeywords:N}=a;setTimeout(()=>{if(p.current)if(!D&&!N){const A=p.current.data,P=kl(p.current.getSolvents());m(R=>k(b({},R),{data:A,solvents:P}))}else{const A=[...N.split(",")];D!=="-1"&&A.unshift(`solvent:${D}`);const P=p.current.search(A);m(R=>k(b({},R),{data:P}))}})},[a]),c.exports.useEffect(()=>{function D(N){t===F.databaseRangesSelection.id&&u(A=>{const P=A.searchKeywords?A.searchKeywords.split(","):[],[R,H]=N.range,L=[...P,`delta:${s(R)}..${s(H)}`].join(",");return k(b({},A),{searchKeywords:L})})}return pe.on("brushEnd",D),()=>{pe.off("brushEnd",D)}},[s,t]);const v=c.exports.useCallback(D=>{p.current=vl(D,e),u(Sl)},[e]),C=c.exports.useMemo(()=>X2(h.data),[h.data]),E=c.exports.useCallback(D=>{const{index:N}=D.original,{ranges:A,solvent:P,names:R=[]}=h.data[N];n({type:Nu,payload:{ranges:A,info:{solvent:P,nucleus:e,name:R[0]}}})},[n,e,h.data]),T=c.exports.useCallback(()=>{u(D=>k(b({},D),{searchKeywords:""}))},[]),I=c.exports.useCallback(D=>{const N=D?F.databaseRangesSelection.id:F.zoom.id;o(N)},[o]);return w("div",{css:[Nt,q2,i&&M`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!i&&w(ot,{showSettingButton:!0,onSettingClick:x,canDelete:!1,className:"header",children:[d(Ge,{defaultValue:t===F.databaseRangesSelection.id,popupTitle:"Filter by select ranges",popupPlacement:"right",onClick:I,children:d(Ph,{style:{pointerEvents:"none",fontSize:"12px",transform:"rotate(90deg)"}})},`${t}`),d(Me,{style:{flex:2},data:h.databases,onChange:v}),d(Me,{style:{flex:1},data:h.solvents,onChange:S}),d(wt,{value:a.searchKeywords,renderIcon:()=>d(Nh,{}),style:{inputWrapper:{flex:3}},className:"search-input",type:"text",debounceTime:250,placeholder:"Search for parameter...",onChange:S,onClear:T,canClear:!0})]}),i&&d(Pn,{onSave:y,onClose:x}),d("div",{className:"inner-container",children:i?d(W2,{ref:l}):d(K2,{data:C,onAdd:E})})]})}const Q2=c.exports.memo(J2);function eA(){const{activeTab:e,toolOptions:{selectedTool:t}}=$();return e?d(Q2,{nucleus:e,selectedTool:t}):d("div",{})}function kl(e){const t=e.map(n=>({key:n,label:n,value:n}),[]);return t.unshift({key:"-1",label:"All",value:"-1"}),t}function tA(e){return e.map(({id:t,name:n})=>({key:t,value:t,label:n}))}const nA={width:"100%",height:"100%",padding:"0px",display:"flex",flexDirection:"column"};function oA({children:e,className:t,style:n,testID:o}){return f("div",{className:t,style:b(b({},nA),n),"data-test-id":o,children:e})}var sA=c.exports.memo(oA);const iA={width:"100%",overflowY:"auto",display:"flex",flexDirection:"column",padding:"5px 0px",color:"gray"};function rA({children:e,className:t,style:n}){const o=c.exports.useMemo(()=>c.exports.Children.map(e,s=>c.exports.cloneElement(s,{style:b({borderBottom:"0.55px solid #d8d8d8"},s.props.style)})),[e]);return f("div",{className:t,style:b(b({},iA),n),children:o})}var lA=c.exports.memo(rA);const aA={width:"100%",display:"flex",alignItems:"flex-start"};function cA(e){return e.toLowerCase()==="top"?"flex-start":e.toLowerCase()==="bottom"?"flex-end":"center"}function uA({children:e,className:t,style:n,align:o="center",vAlign:s="center",size:i=1,onClick:r=()=>null}){return f("div",{className:t,style:b(k(b({},aA),{alignItems:cA(s),textAlign:o,flex:i}),n),onClick:r,children:e})}var Xn=c.exports.memo(uA);const dA={width:"100%",display:"flex",padding:"0px 5px",color:"#424242",backgroundColor:"#d8d8d8",borderBottom:"0.55px solid #d8d8d8",fontSize:11,fontWeight:"bold"};function pA({children:e,className:t,style:n}){return f("div",{className:t,style:b(b({},dA),n),children:e})}var hA=c.exports.memo(pA);const fA={width:"100%",display:"flex",padding:"5px 0px"};function mA({children:e,className:t,style:n,onClick:o=()=>null}){return f("div",{className:t,style:b(b({},fA),n),onClick:o,children:e})}var Bd=c.exports.memo(mA);function gA({filters:e,spectraCounter:t,selectedTool:n,activeFilterID:o}){const s=X(),i=fe(),r=se(),l=c.exports.useRef({index:null}),a=c.exports.useCallback((g,x)=>{(async()=>{const y=await r.showLoading(`${x?"Enable":"Disable"} filter in progress`);setTimeout(()=>{s({type:Dc,id:g,checked:x}),y()},0)})()},[r,s]),u=c.exports.useCallback(({id:g,name:x})=>{const y=[{text:"Yes",handler:async()=>{const S=await r.showLoading("Delete filter process in progress");s({type:Ic,payload:{id:g}}),S()}},{text:"No"}];t>1&&y.unshift({text:"Yes, for all spectra",handler:async()=>{const S=await r.showLoading("Delete all spectra filter process in progress");s({type:Pc,payload:{filterType:x}}),S()}}),i.showConfirmDialog({message:"Are you sure you want to delete the spectrum?",buttons:y})},[r,s,i,t]),p=c.exports.useCallback(g=>{(async()=>{const x=await r.showLoading("Filter snapshot process in progress");setTimeout(()=>{s({type:eu,id:g}),x()},0)})()},[r,s]),h=c.exports.useCallback((g,x)=>{const{id:y,name:S}=g;o&&o===y?l.current.index=x:o||(l.current.index=null);const v=["filter-row"];return o===y?v.push("filter-active"):n===S?v.push("filter-current"):l.current.index!=null&&x>l.current.index&&v.push("filter-deactive"),v.join(" ")},[o,n]),m=c.exports.useMemo(()=>e==null?void 0:e.map((g,x)=>_(Bd,{className:h(g,x),children:[f(Xn,{align:"center",size:2,onClick:()=>p(g.id),children:g.label}),f(Xn,{align:"left",size:3,children:f("div",{onClick:y=>y.stopPropagation(),children:f(na,{data:g.error?g.error:g.value})})}),_(Xn,{align:"center",vAlign:"center",size:1,children:[f(po,{checked:g.flag,onChange:y=>a(g.id,y.target.checked)}),g.isDeleteAllow&&f("button",{className:"btn",type:"button",onClick:()=>u(g),children:f(At,{})})]})]},g.id)),[p,e,h,u,a]);return f(et,{children:m})}const xA={filters:[]},bA=c.exports.memo(gA);function yA(){const{toolOptions:{selectedTool:e,data:{activeFilterID:t}}}=$(),{filters:n}=Ce(xA),o=pd().length;return f(bA,{selectedTool:e,filters:n,spectraCounter:o,activeFilterID:t})}const vA=M`
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
`;function CA({filters:e}){return c.exports.useMemo(()=>e?w(sA,{testID:"filters-table",children:[d(hA,{children:w(Bd,{children:[d(Xn,{align:"center",size:1,children:"Label"}),d(Xn,{align:"center",size:2,children:"Properties"})]})}),d(lA,{css:vA,children:d(yA,{})})]}):d(Rt,{}),[e])}const SA={filters:[]},kA=c.exports.memo(CA);function wA(){const{filters:e}=Ce(SA);return d(kA,{filters:e})}const EA=M`
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
`,AA=Q().shape({frequency:ae().integer().required().label("Frequency"),"1d":Q({"1H":Q({from:ae().integer().required().label("1H ' From ' "),to:ae().integer().required().label("1H ' To ' ")}),"13C":Q().shape({from:ae().integer().required().label("13C ' From ' "),to:ae().integer().required().label("13C ' To ' ")}),lineWidth:ae().integer().min(1).required().label("Line Width")})});function TA({onPredict:e=()=>null}){const t=c.exports.useRef(),n=c.exports.useCallback(()=>{t.current.submitForm()},[]),o=c.exports.useCallback(s=>{(async()=>e(s))()},[e]);return w("div",{css:EA,children:[d("div",{children:w(ce,{ref:t,initialValues:ec,validationSchema:AA,onSubmit:o,children:[d(Md,{}),w("div",{className:"row margin-10",children:[d("span",{className:"custom-label",children:"Frequency : "}),d(rn,{data:tc,style:{width:290,height:30,margin:0},name:"frequency"})]}),w("div",{className:"row",children:[d(Le,{value:"1H",className:"custom-label"}),d(te,{title:"From",children:d(Z,{name:"1d.1H.from",type:"number"})}),d(te,{title:"To",style:{label:{padding:"0 10px"}},children:d(Z,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row",children:[d(Le,{value:"13C",className:"custom-label"}),d(te,{title:"From",children:d(Z,{name:"1d.13C.from",type:"number"})}),d(te,{title:"To",style:{label:{padding:"0 10px"}},children:d(Z,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[d("span",{className:"custom-label",children:"Line Width : "}),d(Z,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),d("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]})]})}),d("div",{children:d(de.Done,{onClick:n,children:"Predict spectrum"})})]})}function DA(){const[e,t]=c.exports.useState(),n=c.exports.useCallback(r=>{t(r)},[]),o=X(),s=se(),i=c.exports.useCallback(r=>{(async()=>{if(e){o({type:St,isLoading:!0});const l=await s.showLoading("Predict 1H, 13C, COSY, HSQC, and HMBC in progress");o({type:ps,payload:{mol:e,options:r}}),l()}else s.error("No Molecule selected")})()},[s,o,e]);return f(_d,{onMoleculeChange:n,actionsOptions:{hidePredict:!0,hideDelete:!0,hideExport:!0},children:f(TA,{onPredict:i})})}const IA=[{title:"Spectra",component:f($E,{}),hidePreferenceKey:"spectraPanel",mode:null},{title:"Information",component:f(yS,{}),style:{overflow:"hidden"},hidePreferenceKey:"informationPanel",mode:null},{title:"Peaks",component:f(aw,{}),hidePreferenceKey:"peaksPanel",mode:null},{title:"Filters",component:f(wA,{}),hidePreferenceKey:"filtersPanel",mode:null},{title:"Integrals",component:f(nk,{}),hidePreferenceKey:"integralsPanel",mode:null},{title:"Ranges",component:f(iE,{}),hidePreferenceKey:"rangesPanel",mode:Y.DM_1D},{title:"Multiple Spectra Analysis",component:f(qk,{}),hidePreferenceKey:"multipleSpectraAnalysisPanel",mode:null},{title:"Matrix Generation",component:f(pk,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Zones",component:f(z2,{}),hidePreferenceKey:"zonesPanel",mode:Y.DM_2D},{title:"Summary",component:f(u2,{}),hidePreferenceKey:"summaryPanel",mode:null},{title:"Structures",component:f(_d,{}),hidePreferenceKey:"structuresPanel",mode:null},{title:"Database",component:f(eA,{}),hidePreferenceKey:"databasePanel",mode:null},{title:"Automatic Assignment",component:f(hS,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Prediction",component:f(DA,{}),hidePreferenceKey:"predictionPanel",mode:null}],wl={null:"Spectra",peakPicking:"Peaks",integral:"Integrals",rangesPicking:"Ranges",zone2D:"Zones",multipleSpectraAnalysis:"Multiple Spectra Analysis"};function PA(){const e=le();return c.exports.useCallback(t=>B(e.current,`display.panels.${t.hidePreferenceKey}`),[e])}function NA({displayerMode:e}){const t=PA(),n=Ed(),o=c.exports.useCallback(i=>{const r=t(i);return(r==null?void 0:r.hidden)!==!0&&(r==null?void 0:r.display)===!0&&i.isExperimental===void 0&&(i.mode==null||i.mode===e)||i.isExperimental&&n},[e,t,n]),s=c.exports.useCallback(i=>{const r=t(i);return(r==null?void 0:r.hidden)!==!0&&(r==null?void 0:r.open)},[t]);return f("div",{style:{width:"100%",height:"100%",flex:"1 1 0%"},children:f(yr,{children:IA.map(i=>o(i)&&f(yr.Item,{title:i.title,defaultOpened:s(i),children:i.component},i.title))})})}const RA=c.exports.memo(NA);function MA(){const{displayerMode:e,toolOptions:{selectedTool:t}}=$();return f(RA,{displayerMode:e,selectedTool:t})}function Cs(){const e=X(),t=se(),{open:n}=Rh(),[o,s]=c.exports.useState(!1),i=c.exports.useRef({clicks:[]}),r=c.exports.useCallback(h=>{[F.peakPicking.id,F.integral.id,F.zone2D.id,F.exclusionZones.id].includes(h)&&t.show("Press Shift + Left Mouse button to select zone"),Object.keys(wl).includes(h)&&n(wl[h]),e({type:co,payload:{selectedTool:h}})},[t,e,n]),l=c.exports.useCallback(()=>{i.current.clicks.length===0&&e({type:xn,zoomType:Bn.HORIZONTAL});const h=Uo(()=>{i.current.clicks=[]},500);i.current.clicks.push(h),h(),i.current.clicks.length>1&&(Ml(i.current.clicks,m=>m.cancel()),i.current.clicks=[],e({type:xn}))},[e,i]),a=c.exports.useCallback(()=>{e({type:_i})},[e]),u=c.exports.useCallback(()=>{e({type:Pi,isRealSpectrumVisible:!o}),s(!o)},[e,o]),p=c.exports.useCallback(()=>{e({type:Oi})},[e]);return{handleChangeOption:r,handleFullZoomOut:l,changeDisplayViewModeHandler:a,changeSpectrumViewHandler:u,alignSpectrumsVerticallyHandler:p,isRealSpectrumShown:o}}function _A(){const{keysPreferences:e,displayerMode:t,overDisplayer:n,data:o,activeSpectrum:s}=$(),i=X(),r=se(),l=Xi(),{handleChangeOption:a,handleFullZoomOut:u,alignSpectrumsVerticallyHandler:p,changeDisplayViewModeHandler:h}=Cs(),{saveToClipboardHandler:m,saveAsJSONHandler:g,saveAsHandler:x}=wd(),{highlight:y,remove:S}=Tn(),v=je(),C=c.exports.useMemo(()=>t===Y.DM_1D&&o&&o.length>0,[o,t]),E=c.exports.useCallback(async N=>{const{type:A,extra:{id:P}}=N;switch(A){case ue.INTEGRAL:{i({type:ls,integralID:P}),S();break}case ue.PEAK:{i({type:is,data:{id:P}}),S();break}case ue.RANGE:{i({type:us,payload:{data:{id:P,assignmentData:v}}}),S();break}case ue.ZONE:{i({type:ds,payload:{id:P,assignmentData:v}}),S();break}case ue.EXCLUSION_ZONE:{const R=await r.showLoading("Exclusion filter in progress");i({type:Cu,payload:{id:P,spectrumID:N.extra.spectrumID}}),R(),S();break}}},[v,i,S,r]),T=c.exports.useCallback((N,A)=>{o&&o.length>0&&A>=1&&A<=9&&(N.shiftKey?(i({type:Vo,keyCode:A}),r.show(`Configuration Reset, press '${A}' again to reload it.`)):Gt(N)||(e!=null&&e[A]?i({type:Hi,keyCode:A}):(i({type:Vo,keyCode:A}),r.show(`Configuration saved, press '${A}' again to reload it.`))))},[r,o,i,e]),I=c.exports.useCallback(N=>{function A(R,H=!0){if(t===Y.DM_1D&&!s)throw new Error(`Select a spectrum to proceed with ${R}`);if(H&&t===Y.DM_2D)throw new Error(`Switch to 1D Mode and select a spectrum to proceed with ${R}`)}function P(R,H=!0){if(t===Y.DM_2D&&!s)throw new Error(`Select a spectrum to proceed with ${R}`);if(H&&t===Y.DM_1D)throw new Error(`Switch to 2D Mode and select a spectrum to proceed with ${R}`)}try{if(!N.shiftKey&&!N.metaKey)switch(N.key){case"f":u();break;case"z":case"Escape":a(F.zoom.id);break;case"r":{t===Y.DM_2D?(P(F.zone2D.label,!1),a(F.zone2D.id)):(A(F.rangesPicking.label,!1),a(F.rangesPicking.id));break}case"a":{A(F.phaseCorrection.label),a(F.phaseCorrection.id);break}case"b":{A(F.baseLineCorrection.label),a(F.baseLineCorrection.id);break}case"p":{A(F.peakPicking.label),a(F.peakPicking.id);break}case"i":{A(F.integral.label),a(F.integral.id);break}case"e":{A(F.exclusionZones.label),a(F.exclusionZones.id);break}default:}if(!N.shiftKey&&!N.metaKey&&!N.ctrlKey)switch(N.key){case"c":{C&&p();break}case"s":{C&&h();break}default:}if(!N.shiftKey&&(N.metaKey||N.ctrlKey))switch(N.key){case"c":m(),N.preventDefault();break;case"s":g(),N.preventDefault();break;case"o":l(),N.preventDefault();break;default:}if(N.shiftKey&&(N.metaKey||N.ctrlKey))switch(N.key){case"s":case"S":x(),N.preventDefault();break;default:}}catch(R){r.error(R.message)}},[s,r,p,C,h,t,a,u,l,x,g,m]),D=c.exports.useCallback(N=>{if(!["input","textarea"].includes(N.target.localName)&&n){const A=Number(N.code.substr(N.code.length-1))||0;A>0?T(N,A):["Delete","Backspace"].includes(N.key)&&y.sourceData?(N.preventDefault(),E(y.sourceData)):I(N)}},[E,y,T,n,I]);return c.exports.useEffect(()=>(document.addEventListener("keydown",D,!0),()=>document.removeEventListener("keydown",D,!0)),[D]),null}function FA(e){const t=b({},Gi),n=e.payload.spectra||[];for(const o of n)kn(o)?LA(t,o.ranges):OA(t,o.zones);return t}function LA(e,t){const n=t.values.reduce((o,{id:s,diaIDs:i,signals:r})=>{o.push({id:s,diaIDs:i||[]});for(const l of r)o.push({id:l.id,diaIDs:l.diaIDs||[]});return o},[]);for(const{id:o,diaIDs:s}of n)for(const i of s)Xd(e,o,"x",i)}function OA(e,t){const n=t.values.reduce((o,{id:s,x:i,y:r,signals:l})=>{o.push({id:s,diaIDs:{x:i.diaIDs||[],y:r.diaIDs||[]}});for(const a of l)o.push({id:a.id,diaIDs:{x:a.x.diaIDs||[],y:a.y.diaIDs||[]}});return o},[]);for(const{id:o,diaIDs:s}of n)["x","y"].forEach(i=>{for(const r of s[i])Xd(e,o,i,r)})}function Xd(e,t,n,o){var s,i;Array.isArray((i=(s=e.assignments)==null?void 0:s[t])==null?void 0:i[n])&&!e.assignments[t][n].includes(o)?e.assignments[t][n].push(o):e.assignments=k(b({},e.assignments),{[t]:k(b({},e.assignments[t]),{[n]:[o]})})}function Yd(e,t){var r,l;const{id:n,atomID:o="",axis:s}=t,i=((l=(r=e.assignments)==null?void 0:r[n])==null?void 0:l[s])||null;i&&(o?(i.filter(a=>a!==o),e.assignments[n][s]=i):e.assignments[n][s]=[])}function $A(e,t){const n=b({},e),{ids:o,atomID:s="",axis:i}=t;for(const r of o)Yd(n,{id:r,atomID:s,axis:i});return n}function HA(e,t){var i;let{id:n,axis:o}=t.payload;const s=((i=e.activated)==null?void 0:i.id)===n;return k(b({},e),{activated:s?null:{id:n,axis:o||null}})}function zA(e,t){var a;const{id:n,atomID:o,axis:s,dimension:i}=t,r=((a=e.assignments)==null?void 0:a[n])||null,l=(r==null?void 0:r[s])||null;if(l)l.includes(n)||l.push(o);else{const u=s==="x"?"y":"x";e.assignments=k(b({},e.assignments),{[n]:b(k(b({},e.assignments[n]),{[s]:[o]}),i==="2D"&&{[u]:r!=null&&r[u]?r[u]:[]})})}}function VA(e,t){var l,a,u;const n=b({},e),{id:o,atomIDs:s,dimension:i}=t.payload,r=(l=e.activated)==null?void 0:l.axis;if(r){const p=((u=(a=e.assignments)==null?void 0:a[o])==null?void 0:u[r])||[];for(const h of s)p.includes(o)?Yd(n,{atomID:h,axis:r,id:o}):zA(n,{axis:r,id:o,atomID:h,dimension:i})}return n}function jA(e,t){switch(t.type){case"INITIATE_ASSIGNMENTS":return FA(t);case"REMOVE":{const{axis:n,ids:o,atomID:s}=t.payload;return $A(e,{axis:n,ids:o,atomID:s})}case"TOGGLE":return VA(e,t);case"SET_ACTIVE":return HA(e,t);case"SHOW":{const{id:n,axis:o}=t.payload;return k(b({},e),{highlighted:{id:n,axis:o||null}})}case"HIDE":return k(b({},e),{highlighted:null});default:return e}}function BA(e){const{spectraData:t}=e,[n,o]=c.exports.useReducer(jA,Gi),s=c.exports.useMemo(()=>({data:n,dispatch:o}),[n]);return c.exports.useEffect(()=>{t&&o({type:"INITIATE_ASSIGNMENTS",payload:{spectra:t}})},[t]),f(Wi.Provider,{value:s,children:e.children})}const XA="https://docs.nmrium.org";var YA={version:"git-a904daefd5d076d2b2dec6111712f671ec608b95"};function GA({width:e=100,height:t=100}){return _("svg",{style:{width:e,height:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 752.34 221.73",children:[f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M.64,31.7A31.67,31.67,0,0,1,54.72,9.29l0,0A31.66,31.66,0,0,1,64,31.7V190a13.39,13.39,0,0,0,26.77,0V54a31.7,31.7,0,0,1,31.7-31.7V40.58A13.38,13.38,0,0,0,109.13,54V190a31.71,31.71,0,0,1-63.41,0V31.7a13.29,13.29,0,0,0-3.88-9.46l0,0A13.41,13.41,0,0,0,19,31.7V164.82H.64Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M154.21,54v68.17a13.34,13.34,0,0,0,3.89,9.47h0A13.39,13.39,0,0,0,181,122.14V99.32h-.06a31.63,31.63,0,0,1,9.29-22.38l0,0a31.65,31.65,0,0,1,44.8,0l0,0a31.58,31.58,0,0,1,9.3,22.39V118H226V99.32a13.3,13.3,0,0,0-3.89-9.46h0a13.44,13.44,0,0,0-18.93,0l0,0a13.3,13.3,0,0,0-3.83,8.19v24.09a31.7,31.7,0,0,1-54.11,22.42v0a31.66,31.66,0,0,1-9.3-22.4V54Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M729.19,96.34c-8.65,0-14.26,3.17-17.67,8-3.41-5.12-8.78-8-16-8-8.16,0-13.52,3.17-16.32,7.31v-5.6H661V159h18.28V124.62c0-7.19,3.41-11.46,9.5-11.46,5.85,0,8.78,3.9,8.78,10V159h18.27V124.62c0-7.19,3.42-11.46,9.51-11.46,5.85,0,8.77,3.9,8.77,10V159h18.28V121.57C752.34,106.33,743.2,96.34,729.19,96.34Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M629.26,98.05v33.26c0,8.66-4.63,12.56-11.33,12.56-5.85,0-10.6-3.54-10.6-11.09V98.05H589.05v37.41c0,16.45,10.48,25.22,22.79,25.22,8,0,14.13-2.92,17.42-7.43V159h18.28V98.05Z"}),f("rect",{fill:"#2b143e",x:"558.22",y:"98.05",width:"18.28",height:"60.93"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M567.36,92.68a11,11,0,1,0-11-11A11.08,11.08,0,0,0,567.36,92.68Z"}),f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M478.77,159H498V116.57L525.66,159H549.2l-22.3-34.75c5.45-2.13,8.12-4.14,11.48-8.86a31.07,31.07,0,0,0,6.07-18.26V94.62c0-10.61-3.45-15.93-9.28-21.78S520.75,63.09,510,63.09H478.71l.06,95.89Zm33.1-50.27h-6.46v-.06H498V82.19h10.87c4.67,0,9.44,1.38,11.94,3.81a12.84,12.84,0,0,1,3.81,9.2C524.58,102.52,518.92,108.71,511.87,108.71Z"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"372.91 60.8 372.91 158.98 392.16 158.98 392.16 119.23 419.91 157.41 447.61 119.23 447.61 158.98 466.87 158.98 466.87 60.8 419.91 125.22 372.91 60.8"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"283.89 61.04 283.89 159.1 303.14 159.1 303.14 105.85 361.01 160.93 361.01 62.83 341.67 62.83 341.67 116.08 283.89 61.04"})]})}const WA=M`
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
`;function ZA({onClose:e=()=>null}){return w("div",{css:WA,children:[w("div",{className:"header handle",children:[d("span",{children:"About NMRium"}),d(me,{onClick:e})]}),w("div",{className:"container",children:[w("div",{className:"center-container",children:[d(GA,{width:160,height:50}),"Version ",d(UA,{}),d("span",{className:"separator"}),d("a",{href:"https://git.nmrium.org",target:"_blank",rel:"noreferrer",children:"GitHub ( https://git.nmrium.org )"})]}),d("div",{className:"center-container",children:d("span",{className:"separator"})}),d("span",{className:"content",children:"This project is developed by Zakodium S\xE0rl (Switzerland), the University of Cologne (Germany), Johannes Gutenberg University Mainz (Germany) and Universidad del Valle (Colombia)."}),w("div",{className:"center-container",children:[d("span",{className:"separator"}),d("span",{className:"title",children:"Funding is provided by"}),d("span",{className:"separator"})]}),d("div",{className:"content",children:w("ul",{children:[d("li",{children:"IDNMR grant, which part of the Scientific Library Services and Information Systems (LIS) initiative of the DFG."}),d("li",{children:"Zakodium S\xE0rl (Switzerland)."}),d("li",{children:"Universidad del Valle (Cali, Colombia)."})]})})]})]})}function UA(){const{version:e}=YA;return e==="HEAD"?d(Ve,{children:"HEAD"}):e.startsWith("git-")?w("a",{href:`https://github.com/cheminfo/nmrium/tree/${e.slice(4)}`,target:"_blank",rel:"noreferrer",children:["git-",e.slice(4,14)]}):d("a",{href:`https://github.com/cheminfo/nmrium/tree/${e}`,target:"_blank",rel:"noreferrer",children:e})}function KA(){return _(et,{children:[f("p",{className:"section-header",children:"Spectra"}),f(te,{title:"Transparency of Dimmed Spectra [ 0 - 1 ]",children:f(Z,{name:"controllers.dimmedSpectraTransparency",checkValue:e=>e>=0&&e<=1,type:"number"})})]})}const qA=[{label:"Spectra selection panel",name:"panels.spectraPanel"},{label:"Spectra information Panel",name:"panels.informationPanel"},{label:"Peaks and peak picking",name:"panels.peaksPanel"},{label:"Integration and integrals",name:"panels.integralsPanel"},{label:"1D ranges peak picking",name:"panels.rangesPanel"},{label:"Chemical structure panel",name:"panels.structuresPanel"},{label:"Filters Panel",name:"panels.filtersPanel"},{label:"2D zones peak picking",name:"panels.zonesPanel"},{label:"Assignment summary Panel",name:"panels.summaryPanel"},{label:"Multiple Spectra Analysis Panel",name:"panels.multipleSpectraAnalysisPanel"},{label:"Database Panel",name:"panels.databasePanel"},{label:"Prediction Panel",name:"panels.predictionPanel"},{label:"Experimental Features",name:"general.experimentalFeatures",hideOpenOption:!0}];function El(e){return f(xt,{style:{container:{display:"block",margin:"0 auto",width:"fit-content"}},className:"checkbox-element",name:e.name},e.name)}function JA({preferences:e}){const t=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:o})=>o.index+1},{index:1,Header:"Feature",accessor:"label",style:{width:"60%"}},{index:2,Header:"Active",Cell:({row:o})=>f(El,{name:`display.${o.original.name}.display`})},{index:3,Header:"Open on load",Cell:({row:o})=>o.original.hideOpenOption?f("div",{}):f(El,{name:`display.${o.original.name}.open`})}],[]),n=c.exports.useMemo(()=>qA.filter(o=>B(e,`${o.name}.hidden`)!==!0),[e]);return f("div",{style:{width:"100%",overflow:"hidden"},children:f(Dn,{columns:t,data:n})})}const QA=M`
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
`;function eT(){const{values:e,setFieldValue:t}=he(),n=c.exports.useMemo(()=>B(e,"formatting.nuclei",{}),[e]),o=c.exports.useCallback(r=>{let l={};for(const a in n)a!==r&&(l[a]=n[a]);t("formatting.nuclei",l)},[n,t]),s=c.exports.useCallback(()=>{const r={name:"",ppm:"0.00",hz:"0.00"},l=q(),a=k(b({},n),{[l]:r});t("formatting.nuclei",a)},[n,t]),i=Object.keys(n);return w(c.exports.Fragment,{children:[d("p",{className:"section-header",children:"Nuclei Formatting"}),d("div",{css:QA,children:w("table",{children:[d("thead",{children:w("tr",{children:[d("th",{className:"counter-col",children:"#"}),d("th",{className:"nucleus-label-col",children:"Nucleus "}),d("th",{className:"nucleus-format-input-col",children:"\u03B4 (ppm)"}),d("th",{className:"nucleus-format-input-col",children:"Coupling (Hz)"}),d("th",{className:"nucleus-format-input-col"})]})}),d("tbody",{children:i==null?void 0:i.map((r,l)=>{const a=l+1;return w("tr",{children:[w("td",{className:"counter-col",children:[w("span",{children:[a," - "]})," "]}),d("td",{className:"nucleus-label-col",children:d(Z,{name:`formatting.nuclei.${r}.name`,className:"width-100",checkErrorAfterInputTouched:!1})}),d("td",{className:"nucleus-format-input-col",children:d(Z,{name:`formatting.nuclei.${r}.ppm`,className:"width-100"})}),d("td",{className:"nucleus-format-input-col",children:d(Z,{name:`formatting.nuclei.${r}.hz`,className:"width-100"})}),w("td",{className:"operation-container",children:[d(me,{onClick:()=>o(r),popupTitle:`remove ${n[r].name}`,popupPlacement:"right"}),i.length===l+1&&d("button",{className:"add",type:"button",onClick:s,children:d(yn,{})})]})]},`${r}`)})})]})})]})}const tT=M`
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
`,nT=({item:e,onSave:t,onDelete:n})=>{const[o,s]=c.exports.useState(""),i=c.exports.useCallback(a=>{a.stopPropagation(),s(""),t(o)},[o,t]),r=c.exports.useCallback(a=>{a.stopPropagation(),n(e.key)},[e.key,n]),l=c.exports.useCallback(a=>{s(a.target.value)},[]);return d("div",{css:tT,children:e.key==="new"?w("div",{className:"new-container",children:[d("input",{value:o,placeholder:"Custom workspace",onClick:a=>a.stopPropagation(),onChange:l}),d("button",{type:"button",className:"save-button",onClick:i,disabled:!o,children:"save"})]}):w("div",{className:"container",children:[d("span",{children:e.label}),!He[e.key]&&d("button",{type:"button",className:"delete-button",onClick:r,children:"Delete"})]})})},oT=e=>Object.keys(e.formatting.nuclei).reduce((t,n)=>(t[n]=Q().shape({name:rt().trim().required("Nucleus is a required field"),ppm:rt().trim().required("PPM format is a required field"),hz:rt().trim().required("Hz format  is a required field")}),t),{}),sT=Mh(e=>Q().shape({formatting:Q().shape({nuclei:Q().shape(oT(e)).test("Unique","Nuclei need te be unique",function(n){var i;let o={};for(const r of Object.keys(n)){const l=((i=n[r].name)==null?void 0:i.toLowerCase())||"";l&&(o[l]?(++o[l].value,o[l].fields.push(r)):o[l]={value:1,fields:[r]})}const s=Object.keys(o).reduce((r,l)=>{const{value:a,fields:u}=o[l];if(a>1)for(let p of u)r.push(new vr(`${l} nucleus must te be unique`,n[l].name,`${this.path}.${p}.name`));return r},[]);return new vr(s)})})})),iT=M`
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
`;function rT({onClose:e}){const[t,n]=c.exports.useState("controllers"),v=le(),{dispatch:o}=v,s=G(v,["dispatch"]),i=se(),r=c.exports.useRef(),l=Ju(),a=c.exports.useMemo(()=>l.concat([{key:"new",label:"Custom workspace"}]),[l]),u=c.exports.useCallback(()=>{r.current.submitForm()},[]),p=c.exports.useCallback(()=>{o({type:"RESET_PREFERENCES"}),i.success("Settings saved successfully"),e==null||e()},[i,o,e]),h=c.exports.useCallback(C=>{o({type:"SET_PREFERENCES",payload:C}),i.success("Settings saved successfully"),e==null||e()},[i,o,e]),m=c.exports.useCallback(C=>{n(C.tabid)},[]),g=c.exports.useCallback(C=>{o({type:"ADD_WORKSPACE",payload:{workspace:C,data:r.current.values}})},[o]),x=c.exports.useCallback(C=>{o({type:"REMOVE_WORKSPACE",payload:{workspace:C}})},[o]),y=c.exports.useCallback(C=>{o({type:"SET_WORKSPACE",payload:{workspace:C.key}})},[o]),S=c.exports.useCallback(C=>d(nT,{item:C,onSave:g,onDelete:x}),[g,x]);return w("div",{css:[mt,iT],children:[w("div",{className:"header handle",children:[d("span",{children:"General Settings"}),d(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"workspace-container",children:[d("span",{className:"label",children:"Workspace : "}),d(lr,{data:a,renderItem:S,selectedKey:s==null?void 0:s.workspace.current,onSelect:y})]}),d("div",{className:"main-content",children:d(ce,{ref:r,initialValues:s.current,validationSchema:sT,onSubmit:h,children:w(In,{position:sr.LEFT,activeTab:t,onClick:m,children:[d(Re,{tablabel:"Controllers",tabid:"controllers",children:d("div",{className:"inner-content",children:d(KA,{})})}),d(Re,{tablabel:"Formatting",tabid:"formatting",children:d("div",{className:"inner-content",children:d(eT,{})})}),d(Re,{tablabel:"Display",tabid:"display",children:d("div",{className:"inner-content",children:d(JA,{preferences:s.current.display})})})]})},JSON.stringify(s.current))}),d("div",{className:"footer-container",children:d(Kt,{style:{flexDirection:"row-reverse",margin:0},onDone:u,doneLabel:"Save",onCancel:p,cancelLabel:"Reset"})})]})}const Ke={container:{height:"100%",display:"flex",fontSize:"12px",alignItems:"center"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"}};function lT(){const e=X(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useRef(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{e({type:Lc,options:{maxNumberOfPeaks:n.current.value,minMaxRatio:t.current.value,noiseFactor:o.current.value,lookNegative:s.current.checked}})},[e]);return _("div",{style:Ke.container,children:[f(cn,{ref:n,label:"Max Number Of Peaks:",name:"maxNumberOfPeaks",style:{input:Ke.input,inputContainer:Ke.inputContainer,label:Ke.label},defaultValue:50}),f(cn,{ref:o,label:"Noise factor",name:"noiseFactor",style:{input:Ke.input,inputContainer:Ke.inputContainer,label:Ke.label},defaultValue:3}),f(cn,{ref:t,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:Ke.input,inputContainer:Ke.inputContainer,label:Ke.label},defaultValue:.1,step:"0.01"}),_("div",{style:{justifyItems:"baseline",marginRight:"3px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect Negative:"}),f(po,{name:"lookNegative",ref:s})]}),f(de.Done,{onClick:i,style:{margin:"0 10px"},children:"Apply"})]})}const Al={container:{padding:"5px",height:"100%",display:"flex",alignItems:"center"},label:{lineHeight:2,userSelect:"none"}};function aT(){const e=X(),t=c.exports.useRef(),n=c.exports.useRef(),[o,s]=c.exports.useState("polynomial"),i=c.exports.useCallback(p=>{let h={};switch(o){case"airpls":h=b({algorithm:n.current.value},p);break;case"polynomial":h=b({algorithm:n.current.value},p);break}e({type:Yc,options:h})},[o,e]),r=c.exports.useCallback(()=>{e({type:ut})},[e]),l=c.exports.useCallback(()=>Object.keys(Hs).map(p=>({key:p,label:Hs[p],value:p})),[]),a=c.exports.useCallback(p=>{s(p)},[]),u=c.exports.useMemo(()=>{switch(o){case"airpls":return{validation:Q().shape({maxIterations:ae().integer().min(1).required(),tolerance:ae().moreThan(0).required()}),initialValue:{maxIterations:100,tolerance:.001}};case"autoPolynomial":case"polynomial":return{validation:Q().shape({degree:ae().integer().min(1).max(6).required()}),initialValue:{degree:3}};default:return{validation:{},initialValue:{}}}},[o]);return _("div",{style:Al.container,children:[f("span",{style:Al.label,children:"Algorithm: "}),f(Me,{ref:n,data:l(),style:{marginLeft:10,marginRight:10},onChange:a,defaultValue:"polynomial"}),_(ce,{ref:t,onSubmit:i,initialValues:u.initialValue,validationSchema:u.validation,children:[o&&o==="airpls"&&_("div",{style:{display:"flex"},children:[f(te,{title:"maxIterations:",children:f(Z,{type:"number",name:"maxIterations"})}),f(te,{title:"tolerance:",style:{label:{padding:"0 5px"}},children:f(Z,{type:"number",name:"tolerance"})})]}),o&&["autoPolynomial","polynomial"].includes(o)&&f(te,{title:"degree [ 1 - 6 ]:",children:f(Z,{type:"number",name:"degree",min:1,max:6,style:{inputWrapper:{height:"100%"}}})})]},JSON.stringify(u.initialValue)),f(Kt,{onDone:()=>t.current.submitForm(),onCancel:r})]})}const Tl={container:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",border:"0.55px solid #c7c7c7",borderRadius:"5px",userSelect:"none",backgroundColor:"#18ce0f14",fontSize:"10px",color:"#00801d",margin:"0px 5px",cursor:"ew-resize"},label:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxWidth:"100%",paddingLeft:"5px",paddingRight:"5px"}};function cT(e,t){const{name:n,value:o=0,onChange:s,label:i,style:r,className:l}=e,a=c.exports.useRef(0),u=c.exports.useRef(o);c.exports.useImperativeHandle(t,()=>({setValue:h=>{u.current=h}}));const p=c.exports.useCallback(h=>{function m(x){let y=x.clientX-a.current;if(a.current=x.clientX,x.buttons===1){const S=y/(x.shiftKey?10:1);u.current=u.current+S,s({value:u.current,name:n})}}function g(){window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",g)}a.current=h.clientX,window.addEventListener("mousemove",m),window.addEventListener("mouseup",g)},[n,s]);return f("div",{style:b(b({},Tl.container),r),className:l,onMouseDown:p,children:f("span",{style:Tl.label,children:i})})}var Dl=c.exports.forwardRef(cT);const vo={container:{padding:"5px",height:"100%",display:"flex"},input:{width:"100px"},select:{marginLeft:"5px",marginRight:"10px",border:"none",height:"20px"}},Oe={manual:"manual",automatic:"automatic",absolute:"absolute"},uT=[{key:Oe.manual,label:"Manual",value:Oe.manual},{key:Oe.automatic,label:"Automatic",value:Oe.automatic},{key:Oe.absolute,label:"Absolute",value:Oe.absolute}];function dT({data:e,pivot:t,filter:n}){const o=X(),[s,i]=c.exports.useState({ph0:0,ph1:0}),r=c.exports.useRef({ph0:0,ph1:0}),l=c.exports.useRef(),a=c.exports.useRef(),[u,p]=c.exports.useState(Oe.manual);c.exports.useEffect(()=>{n?(r.current=n.value,i(n.value),l.current.setValue(n.value.ph0),a.current.setValue(n.value.ph1)):(l.current.setValue(r.current.ph0),a.current.setValue(r.current.ph1))},[n]);const h=c.exports.useCallback(()=>{switch(u){case Oe.automatic:{o({type:_c});break}case Oe.manual:{o({type:Mc,value:s});break}case Oe.absolute:{o({type:Fc});break}}},[o,u,s]),m=c.exports.useCallback((v,C)=>{if(C==="ph1"&&e.re){const E=v.ph0-r.current.ph0,T=v.ph1-r.current.ph1;v.ph0+=E-T*(t==null?void 0:t.index)/e.re.length}o({type:Fi,value:v})},[e.re,o,t==null?void 0:t.index]),g=c.exports.useCallback(v=>{const{name:C,value:E}=v.target;if(v.target){const T=k(b({},r.current),{[C]:E});String(E).trim()!=="-"&&m(T,C),r.current=T,i(r.current)}},[m]),x=c.exports.useCallback(v=>{const C=k(b({},r.current),{[v.name]:v.value});m(C,v.name),r.current=C,i(r.current)},[m]),y=c.exports.useCallback(()=>{o({type:ut})},[o]),S=c.exports.useCallback(v=>{p(v)},[]);return _("div",{style:vo.container,children:[f(Me,{onChange:S,data:uT,defaultValue:Oe.manual,style:vo.select}),u===Oe.manual&&_(et,{children:[f(te,{title:"PH0 :",style:{wrapper:{marginRight:"5px"}},children:f(wt,{name:"ph0",style:{input:vo.input},onChange:g,value:s.ph0,type:"number",debounceTime:250})}),f(te,{title:"PH1 :",children:f(wt,{name:"ph1",style:{input:vo.input},onChange:g,value:s.ph1,type:"number",debounceTime:250})}),f(Dl,{ref:l,name:"ph0",label:"Change Ph0 By mouse click and drag",style:{width:"20%"},onChange:x}),f(Dl,{ref:a,name:"ph1",label:"Change Ph1 By mouse click and drag",style:{width:"20%"},onChange:x})]}),f(Kt,{onDone:h,onCancel:y})]})}const pT=c.exports.memo(dT),hT={datum:{},filter:null};function fT(){const{toolOptions:{data:{pivot:e}}}=$(),{data:t,filters:n}=Ce(hT),o=c.exports.useMemo(()=>n.find(s=>s.name===jt)||null,[n]);return f(pT,{data:t,filter:o,pivot:e})}const $n={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px",alignItems:"baseline"},input:{height:"100%",width:"50px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},inputContainer:{flex:2},label:{flex:5},hint:{lineHeight:2,userSelect:"none",fontSize:"11px"}};function mT(){const e=X(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useCallback(()=>{e({type:Oc,options:{peakPicking:{minMaxRatio:Number(n.current.value)||.05,lookNegative:t.current.checked}}})},[e]);return _("div",{style:$n.container,children:[_("div",{style:{justifyItems:"baseline",margin:"0 10px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect negative:"}),f(po,{name:"lookNegative",ref:t})]}),f(cn,{ref:n,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:$n.input,inputContainer:$n.inputContainer,label:$n.label},defaultValue:.05,step:"0.01"}),f(de.Done,{onClick:o,style:{margin:"0 10px"},children:"Auto ranges picking"}),f("span",{style:$n.hint,children:"Manual selection using SHIFT + select zone or click on Auto peak picking"})]})}const Co={container:{padding:"5px",height:"100%",display:"flex"},input:{height:"100%",width:"80px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},label:{lineHeight:2,userSelect:"none"}},gT=rr(8,21);function xT(){const e=X(),{data:t,activeSpectrum:n}=$(),o=c.exports.useRef(),[s,i]=c.exports.useState(1),r=c.exports.useCallback(()=>{e({type:Nc,value:{zeroFillingSize:Number(o.current.value),lineBroadeningValue:s}})},[e,s]),l=c.exports.useCallback(()=>t&&(n==null?void 0:n.id)?2**Math.round(Math.log2(t[n.index].data.x.length)):"",[n,t]),a=c.exports.useCallback(p=>{if(p.target){const h=p.target.validity.valid?Number(p.target.value):s;i(h)}},[s]),u=c.exports.useCallback(()=>{e({type:ut})},[e]);return _("div",{style:Co.container,children:[f("span",{style:Co.label,children:"Size: "}),f(Me,{ref:o,data:gT,style:{marginLeft:10,marginRight:10},defaultValue:l()}),f("span",{style:Co.label,children:"Line Broadening: "}),f("input",{name:"line-broadening",style:Co.input,type:"number",defaultValue:s,onInput:a,pattern:"^\\d*(\\.\\d{0,2})?$",step:"any"}),f(Kt,{onDone:r,onCancel:u})]})}const So={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"}};function bT(){const e=X(),t=c.exports.useRef(),n=c.exports.useCallback(()=>{e({type:$c,options:{thresholdFactor:t.current.value}})},[e]),o=c.exports.useCallback(s=>{s.target&&e({type:wu,payload:s.target.value})},[e]);return _("div",{style:So.container,children:[f(cn,{ref:t,label:"NoiseFactor",name:"noiseFactor",style:{input:So.input,inputContainer:So.inputContainer,label:So.label},defaultValue:1,onChange:o}),f(de.Done,{onClick:n,style:{margin:"0 10px"},children:"Auto Zones Picking"})]})}function yT(e){const{isFullscreen:t,onMaximize:n=()=>null,selectedOptionPanel:o}=e,s=fe(),{current:{display:{general:i}},workspace:r,dispatch:l}=le(),a=Ju(),u=!!((i==null?void 0:i.hideGeneralSettings)&&r.base),p=c.exports.useMemo(()=>{switch(o){case F.zeroFilling.id:return f(xT,{});case F.phaseCorrection.id:return f(fT,{});case F.peakPicking.id:return f(lT,{});case F.rangesPicking.id:return f(mT,{});case F.baseLineCorrection.id:return f(aT,{});case F.zone2D.id:return f(bT,{})}},[o]),h=c.exports.useCallback(()=>{s.show(f(rT,{}),{position:ne.TOP_CENTER,enableResizing:!0,width:600,height:400})},[s]),m=c.exports.useCallback(()=>{s.show(f(ZA,{}),{isBackgroundBlur:!1,position:ne.MIDDLE,width:500,height:480})},[s]),g=c.exports.useCallback(x=>{l({type:"SET_WORKSPACE",payload:{workspace:x.key}})},[l]);return _(_h,{children:[_("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[f("div",{children:f(we,{orientation:"horizontal",children:f(we.Item,{onClick:m,titleOrientation:"horizontal",id:"logo",title:"About NMRium",children:f("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:f(Fh,{})})})})}),f("div",{className:"toolOptionsPanel",children:p})]}),_("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[!u&&f(lr,{data:a,selectedKey:r.current,onSelect:g}),f("div",{children:_(we,{orientation:"horizontal",children:[f(we.Item,{id:"user-manual",title:"User manual",onClick:()=>window.open(XA,"_blank"),children:f(Lh,{})}),!u&&f(we.Item,{id:"general-settings",onClick:h,title:"General settings",children:f(Oh,{})}),!t&&f(we.Item,{id:"full-screen",onClick:n,title:"Full Screen",className:"windowButton",children:f($h,{})})]})})]})]})}const vT=c.exports.memo(yT);function CT({isFullscreen:e,onMaximize:t}){const{toolOptions:{selectedOptionPanel:n}}=$();return f(vT,{selectedOptionPanel:n,isFullscreen:e,onMaximize:t})}const xe={MOL:"mol",NMRIUM:"nmrium",JSON:"json",DX:"dx",JDX:"jdx",JDF:"jdf",ZIP:"zip",NMREDATA:"nmredata"},ST={ZIP:"504b0304"};function kT(e){return new Uint8Array(e).slice(0,4).reduce((t,n)=>t+=n.toString(16).padStart(2,"0"),"")}async function wT(e,t={asBuffer:!1}){const n=await fetch(e);return ET(n),t.asBuffer?n.arrayBuffer():n.text()}function ET(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}function ln(e){return e.replace(/^.*\./,"").toLowerCase()}function Gd(e){return e.substr(0,e.lastIndexOf("."))}function AT(e){const t=e.replace(/^.*[\\/]/,"").split(".");return{name:t[0].toLowerCase(),extension:t[1].toLowerCase()}}function Lt(e,t={}){return Promise.all([].map.call(e,n=>new Promise((o,s)=>{const i=new FileReader;i.onabort=r=>s(r),i.onerror=r=>s(r),i.onload=()=>{if(i.result){const r=i.result,l=Gd(n.name),a=ln(n.name);o({binary:r,name:l,extension:a})}},t.asBuffer?i.readAsArrayBuffer(n):i.readAsBinaryString(n)})))}async function ko(e,t={}){const n=[];for(const o of e)try{const s=await o.async(t.asBuffer?"uint8array":"text"),i=Gd(o.name),r=ln(o.name);n.push({binary:s,name:i,extension:r})}catch(s){console.error(s)}return n}const TT=M`
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
`,DT=M`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
`;function IT(e){const{width:t,height:n}=$(),o=X(),s=se(),i=c.exports.useCallback(async(g,x)=>{for(let y of x){const S=g.filter(v=>ln(v.name)===y);switch(y){case xe.MOL:{const v=await ko(S);o({type:Gs,files:v});break}case xe.NMRIUM:case xe.JSON:{const v=await ko(S,{asBuffer:!0});if(S.length===1){const C=new TextDecoder("utf8");v[0].binary=C.decode(v[0].binary),o({type:gn,files:v})}else throw new Error("You can add only one json file");break}case xe.JDX:case xe.DX:{const v=await ko(S,{asBuffer:!0});o({type:$o,files:v});break}case xe.JDF:{const v=await ko(S,{asBuffer:!0});o({type:Ws,files:v});break}}}},[o]),r=c.exports.useCallback(async g=>{const x=[...new Set(g.map(y=>ln(y.name)))];for(let y of x){const S=g.filter(v=>ln(v.name)===y);try{switch(y){case xe.MOL:{const v=await Lt(S);o({type:Gs,files:v});break}case xe.NMRIUM:case xe.JSON:if(S.length===1){const v=await Lt(S,{asBuffer:!0});if(kT(v[0].binary)===ST.ZIP){const E=await un.loadAsync(v[0].binary);await i(Object.values(E.files),[xe.NMRIUM])}else{const E=new TextDecoder("utf8");v[0].binary=E.decode(v[0].binary),o({type:gn,files:v})}}else throw new Error("You can add only one json file");break;case xe.JDX:case xe.DX:{const v=await Lt(S,{asBuffer:!0});o({type:$o,files:v});break}case xe.JDF:{const v=await Lt(S,{asBuffer:!0});o({type:Ws,files:v});break}case xe.ZIP:{const v=await Lt(S,{asBuffer:!0});for(const C of v){const E=await un.loadAsync(C.binary),T=[...new Set(Object.values(E.files).map(D=>ln(D.name)))];T.some(D=>xe[D.toUpperCase()]&&D!==xe.ZIP)?(Object.keys(E.files).some(N=>["2rr","fid","1r"].some(A=>N.endsWith(A)))&&o({type:Ho,files:v}),await i(Object.values(E.files),T)):o({type:Ho,files:v})}break}case xe.NMREDATA:Lt(S,{asBuffer:!0}).then(async v=>{for(const C of v)o({type:Zn,file:C})});break;default:throw new Error("The file extension must be zip, dx, jdx, json, mol, nmredata or nmrium.")}}catch(v){o({type:St,isLoading:!1}),s.error(v.message)}}},[s,o,i]),l=c.exports.useCallback(g=>{o({type:St,isLoading:!0}),r(g)},[o,r]),{getRootProps:a,getInputProps:u,isDragActive:p,open:h}=Hh({onDrop:l,noClick:!0,noKeyboard:!0}),m=c.exports.useCallback(()=>{h()},[h]);return d(c0,{value:m,children:w("div",k(b({},a()),{role:"none",css:DT,children:[d("input",b({"data-test-id":"dropzone-input"},u())),p&&w("div",{css:TT,style:{width:`${t}px`,height:`${n}px`,marginTop:"30px",marginLeft:"30px"},children:[d(zh,{}),d("p",{children:"Drop your files here"})]}),e.children]}))})}const PT=[Hi,cs,Tc,ut,Vo,St,mc,xc,zc,co,Oi,Li,gc,Di,rs,Ti,as,Pi,Fi,_i,xn,py,dy,$i,Un,Ii,zo,yc,jo];function NT(e){return!PT.includes(e)}const RT=M`
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
`;function MT({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,d("span",{children:t})]})}function _T({items:e,boxBounding:t,onClick:n}){const o=c.exports.useRef(),[s,i]=c.exports.useState({x:t.width,y:t.height});return c.exports.useLayoutEffect(()=>{const r=o.current.getBoundingClientRect();i(l=>{let a=t.height;return r.bottom>window.innerHeight&&(a=t.height*2+(r.bottom-window.innerHeight)),k(b({},l),{y:a})})},[t.height]),d("div",{ref:o,className:"menu",style:{transform:`translate(${s.x}px, -${s.y}px) `},children:e==null?void 0:e.map(r=>d(MT,k(b({},r),{onClick:()=>n(r)}),r.id))})}function Il({component:e,toolTip:t="",items:n=[],onClick:o=()=>null}){const s=c.exports.useRef(null),[i,r]=c.exports.useState(!1),l=c.exports.useCallback(()=>{r(!1)},[]),a=c.exports.useCallback(()=>{r(h=>!h)},[]),u=c.exports.useCallback(h=>{r(!1),o(h)},[o]),p=c.exports.useCallback(()=>{var h;return(h=s.current)==null?void 0:h.getBoundingClientRect()},[]);return w("div",{style:{height:"auto"},css:RT,children:[d("div",{ref:s,children:d(we.Item,{id:`menu-${t}`,title:t,active:i,onClick:a,children:e})}),i&&d(_T,{items:n,boxBounding:p(),onClick:u}),i&&d("div",{className:"menu-cover",onClick:l})]})}const FT={info:{},datum:{},ftCounter:0,fidCounter:0};function Wd(){const{data:e,activeSpectrum:t,activeTab:n}=$();return c.exports.useMemo(()=>{if(e){let o={},s={},i=0,r=0;for(const l of e){const{isFid:a,isFt:u,nucleus:p}=l.info;n===It(p)&&(a&&r++,u&&i++,t&&l.id===t.id&&(o=l.info,s=l.data))}return{info:o,datum:s,ftCounter:i,fidCounter:r}}return FT},[t,e,n])}function LT(e){const x=e,{name:t,style:n={},onChange:o=()=>null,className:s="",value:i,placeholder:r=""}=x,l=G(x,["name","style","onChange","className","value","placeholder"]),{values:a,handleChange:u,setFieldValue:p,errors:h}=he(),m=c.exports.useCallback(y=>{o(y),u(y)},[u,o]);c.exports.useEffect(()=>{i&&p(t,i)},[t,p,i]);const g=c.exports.useMemo(()=>B(h,t),[h,t]);return f("textarea",b({name:t,className:s,placeholder:r,value:i||B(a,t),onChange:m,style:b(b({},n),g&&{borderColor:"red",borderWidth:"1px",outline:"none"})},l))}const OT=M`
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
`,$T=Q({publicationText:rt().required()});function HT({onClose:e}){const t=c.exports.useRef(),n=X(),o=se(),s=c.exports.useCallback(i=>{(async()=>{const r=await o.showLoading("Generate spectrum from publication string in progress");setTimeout(()=>{n({type:Pu,payload:i}),r()}),e()})()},[o,n,e]);return w("div",{css:[mt,OT],children:[w("div",{className:"header handle",children:[d("span",{children:"Import from publication string"}),d(me,{onClick:e,className:"close-bt"})]}),d("div",{className:"inner-content",children:d(ce,{ref:t,initialValues:{publicationText:"1H NMR (CDCl3, 400MHz) \u03B4 10.58 (b, 1H), 7.40 (d, 1H, J = 8.0 Hz), 6.19 (d, 1H, J = 7.6 Hz), 4.88 (s, 1H), 2.17 (s, 3H), 1.02 (s, 9H), 1.01 (s, 9H), 0.89 (s, 9H)"},validationSchema:$T,onSubmit:s,children:d(LT,{name:"publicationText",className:"text-area",placeholder:"Enter publication string"})})}),d("div",{className:"footer-container",children:d(de.Done,{onClick:()=>t.current.submitForm(),children:"Import"})})]})}const zT=M`
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
`,VT=["dx","jdx"];function jT({onLoadClick:e,onClose:t,startLoading:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{const i=o.current.value,{name:r,extension:l}=AT(i);VT.includes(l)?(n==null||n(),wT(i,{asBuffer:!0}).then(a=>{e({binary:a,name:r,extension:l,jcampURL:i})})):e(null)},[e,n]);return w("div",{css:zT,children:[w("div",{className:"header handle",children:[d("span",{children:"Load JCAMP Dialog"}),d(me,{onClick:t})]}),w("div",{className:"container",children:[d("input",{ref:o,type:"text",placeholder:"Enter URL to JCAMP-DX file"}),d(de.Done,{onClick:s,children:"Load"})]})]})}const Pl=[{id:"importFile",icon:f(Ss,{}),label:"Import from file system (Press Ctrl + O)"},{id:"importJDX",icon:f(Ss,{}),label:"Add JCAMP-DX from URL"},{id:"importPublicationString",icon:f(Ss,{}),label:"Import from publication string"}],BT=[{id:"svg",icon:f(Ul,{}),label:"Export as SVG"},{id:"png",icon:f(Zl,{}),label:"Export as PNG"},{id:"json",icon:f(ks,{}),label:"Save data ( Press Ctrl + S )"},{id:"advance_save",icon:f(ks,{}),label:"Save data as  ( Press Ctrl + Shift + S )"},{id:"nmre",icon:f(ks,{}),label:"Save NMRE data"},{id:"copy",icon:f(ri,{}),label:"Copy image to Clipboard ( Press Ctrl + C )"}];function XT({info:e,verticalAlign:t,displayerMode:n,ftCounter:o,fidCounter:s,activeSpectrum:i}){const r=X(),l=se(),a=fe(),u=Xi(),p=Ed(),h=or(),m=c.exports.useMemo(()=>p?Pl:Pl.filter(z=>z.id!=="importPublicationString"),[p]),{isRealSpectrumShown:g,changeSpectrumViewHandler:x,changeDisplayViewModeHandler:y,alignSpectrumsVerticallyHandler:S}=Cs(),{saveAsSVGHandler:v,saveAsPNGHandler:C,saveAsJSONHandler:E,saveAsNMREHandler:T,saveToClipboardHandler:I,saveAsHandler:D}=wd(),N=c.exports.useCallback(z=>{z?(r({type:$o,files:[z]}),a.close()):l.error("you file must be one of those extensions [ .jdx, dx ] ")},[l,r,a]),A=c.exports.useCallback(()=>{a.close(),r({type:St,isLoading:!0})},[r,a]),P=c.exports.useCallback(()=>{a.show(f(jT,{onLoadClick:N,onClose:()=>a.close(),startLoading:A}),{})},[N,a,A]),R=c.exports.useCallback(()=>{a.show(f(HT,{onClose:()=>a.close()}),{})},[a]),H=c.exports.useCallback(({id:z})=>{switch(z){case"importFile":u();break;case"importJDX":P();break;case"importPublicationString":R();break;default:return}},[u,P,R]),L=c.exports.useCallback(({id:z})=>{switch(z){case"svg":v();break;case"png":C();break;case"json":E();break;case"advance_save":D();break;case"nmre":T();break;case"copy":I();break}},[v,C,E,D,T,I]);return _(c.exports.Fragment,{children:[h("import")&&f(Il,{component:f(Vh,{}),toolTip:"Import",onClick:z=>(H(z),null),items:m}),h("exportAs")&&f(Il,{component:f(qo,{}),toolTip:"Export As",onClick:z=>(L(z),null),items:BT}),n===Y.DM_1D&&h("spectraStackAlignments")&&o>1&&((e==null?void 0:e.isFt)||!i)&&f(we.Item,{id:"spectra-alignment",className:"cheminfo",title:"Spectra alignment ( Press s )",onClick:y,children:t.align==="stack"?f(jh,{}):f(Bh,{})}),n===Y.DM_1D&&h("realImaginary")&&e.isComplex&&f(we.Item,{id:"display",title:g?"Display Real ":"Display Imaginary",onClick:x,className:"cheminfo",children:f(Xh,{})}),n===Y.DM_1D&&h("spectraCenterAlignments")&&(o>0||s>0)&&f(we.Item,{id:"baseline-position",title:t.align==="bottom"?"Baseline  Center ( Press c )":"Baseline  Bottom ( Press c )",onClick:S,className:"cheminfo",children:f("div",{style:{fontSize:24},children:t.align==="bottom"?f(Yh,{}):f(Gh,{})})})]})}const YT=c.exports.memo(XT);function GT(){const{activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o}=$(),{info:s,fidCounter:i,ftCounter:r}=Wd();return f(YT,{info:s,fidCounter:i,ftCounter:r,activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o})}function De(e){const{children:t,value:n=null,isActive:o=!1,onChange:s=()=>null,isVisible:i=!0,id:r,title:l}=e,[a,u]=c.exports.useState(e.isActive),p=c.exports.useCallback(()=>{const h=!a;u(h),s(h?n:null)},[a,s,n]);return c.exports.useEffect(()=>{u(o)},[o]),i?f(we.Item,{onClick:p,title:l,id:r,active:a,children:t}):null}function WT({children:e,value:t,onChange:n=()=>null}){const[o,s]=c.exports.useState([]),i=c.exports.useCallback(l=>{const u=[...o].map(p=>({value:p.value,isActive:p.value===l}));s(u),n(l)},[n,o]),r=c.exports.useMemo(()=>{let l=0;return c.exports.Children.map(e,a=>{var u;if(a)if(a.type===De){const p=c.exports.cloneElement(a,{onChange:i,isActive:(u=o[l])==null?void 0:u.isActive,index:l});return l++,p}else return c.exports.cloneElement(a)})},[e,i,o]);return c.exports.useEffect(()=>{const l=c.exports.Children.map(e,a=>{if(a&&a.type===De)return{value:a.props.value,isActive:a.props.value===t}});s(l)},[e,t]),f(et,{children:r})}function ZT({defaultValue:e,activeSpectrum:t,info:n,datum:o,displayerMode:s,ftCounter:i,mode:r}){const[l,a]=c.exports.useState(""),u=or(),p=X(),{handleChangeOption:h,handleFullZoomOut:m}=Cs(),g=c.exports.useCallback(y=>{a(y),h(y)},[h]);c.exports.useEffect(()=>{a(e)},[e]);const x=c.exports.useCallback(()=>{p({type:Rc,value:""}),p({type:xc,selectedFilter:null})},[p]);return _(et,{children:[_(WT,{value:l,onChange:g,children:[u("zoomTool")&&f(De,{value:F.zoom.id,id:"zoomIn",title:`${F.zoom.label} ( Press z )`,children:f("div",{style:{fontSize:14},children:f(eo,{})})},F.zoom.id),u("zoomOutTool")&&f(we.Item,{id:"zoom-out",onClick:m,title:"Horizontal zoom out ( Press f ), Horizontal and Vertical zoom out, double click ( Press ff )",children:f("div",{style:{fontSize:14},children:f(Wh,{})})}),s===Y.DM_1D&&u("peakTool")&&f(De,{value:F.peakPicking.id,title:`${F.peakPicking.label} ( Press p )`,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"peakPicking",children:f(Zh,{})},F.peakPicking.id),s===Y.DM_1D&&u("integralTool")&&f(De,{value:F.integral.id,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"integralPicking",title:`${F.integral.label} ( Press i )`,children:f(ql,{})},F.integral.id),s===Y.DM_2D&&u("zonePickingTool")&&f(De,{value:F.zone2D.id,id:"zone2d",isVisible:!!(t&&!(n!=null&&n.isFid)),title:`${F.zone2D.label} ( Press r )`,children:f(Uh,{})},F.zone2D.id),s===Y.DM_2D&&u("slicingTool")&&f(De,{value:F.slicingTool.id,isVisible:!!(t&&!(n!=null&&n.isFid)),id:"slic",title:`${F.slicingTool.label}`,children:f("p",{children:"Slic"})},F.slicingTool.id),s===Y.DM_1D&&u("autoRangesTool")&&f(De,{value:F.rangesPicking.id,isVisible:!!(t&&!(n!=null&&n.isFid)),title:`${F.rangesPicking.label} ( Press r )`,id:"ranges-pick",children:f(jl,{})},F.rangesPicking.id),s===Y.DM_1D&&u("multipleSpectraAnalysisTool")&&i>1&&r==="RTL"&&f(De,{value:F.multipleSpectraAnalysis.id,id:"multipleSpectraAnalysis",title:F.multipleSpectraAnalysis.label,children:f(Cr,{})},F.multipleSpectraAnalysis.id),s===Y.DM_1D&&u("zeroFillingTool")&&f(De,{value:F.zeroFilling.id,isVisible:hi({info:n}),id:"zeroFilling",title:F.zeroFilling.label,children:f(Kh,{})},F.zeroFilling.id),s===Y.DM_1D&&u("phaseCorrectionTool")&&f(De,{value:F.phaseCorrection.id,id:"phaseCorrection",title:`${F.phaseCorrection.label} ( Press a )`,isVisible:!!(t&&n&&di({info:n})&&o.im),children:f(qh,{})},F.phaseCorrection.id),s===Y.DM_1D&&u("baseLineCorrectionTool")&&f(De,{value:F.baseLineCorrection.id,id:"baseLineCorrection",title:`${F.baseLineCorrection.label} ( Press b )`,isVisible:!!(t&&n&&ci({info:n})),children:f(Jh,{})},F.baseLineCorrection.id),s===Y.DM_1D&&u("exclusionZonesTool")&&!(n!=null&&n.isFid)&&i>0&&f(De,{value:F.exclusionZones.id,title:`${F.exclusionZones.label} ( Press e )`,id:"exclusionZones",children:f("div",{style:{fontSize:18},children:f(Cr,{})})},F.exclusionZones.id)]}),s===Y.DM_1D&&u("FFTTool")&&n&&ui({info:n})&&f(we.Item,{id:"fft-filter",className:"cheminfo",title:"FFT Filter",onClick:x,children:f(Qh,{})})]})}const UT=c.exports.memo(ZT);function KT({defaultValue:e=F.zoom.id}){const{activeSpectrum:t,displayerMode:n,activeTab:o,mode:s}=$(),i=Wd();return f(UT,k(b({},i),{activeSpectrum:t,displayerMode:n,activeTab:o,defaultValue:e,mode:s}))}function qT({selectedTool:e}){return f("div",{style:{fontSize:18},children:_(we,{orientation:"vertical",children:[f(KT,{defaultValue:e}),f(GT,{})]})})}const JT=c.exports.memo(qT);function QT(){const{toolOptions:{selectedTool:e}}=$();return f(JT,{selectedTool:e})}const eD=M`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
  margin-left: -1px;
`,tD=M`
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
`,nD={},oD={spectra:[]};function sD(e){return d(tf,{style:{width:"100%"},children:d(ef,{FallbackComponent:gC,children:d(iD,b({},e))})})}function iD({data:e=oD,workspace:t,preferences:n=nD,getSpinner:o=Xu,onDataChange:s,emptyText:i}){const r=c.exports.useRef(null),l=c.exports.useRef(null),[a,u]=nf(!1),p=of(r,a,{onClose:()=>{u(!1)}}),[h,m]=c.exports.useReducer(i0,Hu,n0),[g,x]=c.exports.useReducer(_0,Uu,E0),{displayerMode:y,data:S}=h;c.exports.useEffect(()=>{NT(h.actionType)&&(s==null||s(h))},[s,h]);const v=c.exports.useMemo(()=>o0(m),[]);c.exports.useEffect(()=>{var T;(T=r.current)==null||T.focus()},[p]),c.exports.useEffect(()=>{x({type:"INIT_PREFERENCES",payload:{display:n,workspace:t,dispatch:x}})},[n,t]),c.exports.useEffect(()=>{v({type:St,isLoading:!0}),e&&v({type:Wn,payload:e})},[e,v]);const C=c.exports.useCallback(T=>{Gt(T)||T.preventDefault()},[]),E=c.exports.useRef(null);return c.exports.useEffect(()=>{const T=E.current;if(!T)return;function I(){v({type:jo,payload:!0})}function D(){v({type:jo,payload:!1})}return T.addEventListener("mouseenter",I),T.addEventListener("mouseleave",D),()=>{T.removeEventListener("mouseenter",I),T.removeEventListener("mouseleave",D)}},[v]),d(zv,{value:{rootRef:r.current,elementsWrapperRef:l.current},children:d(F0,{value:g,children:d("div",{ref:E,style:{height:"100%",position:"relative"},children:d(Mv,{wrapperRef:l.current,children:d(l0,{value:v,children:d(r0,{value:h,children:d(Hv,{wrapperRef:l.current,children:d(J0,{children:d(BA,{spectraData:S,children:d(h0,{value:o,children:d("div",{className:"nmrium-container",ref:r,css:tD,onContextMenu:C,style:{height:"100%",width:"100%"},children:d(IT,{children:w("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"white",width:"100%"},children:[d(CT,{isFullscreen:p,onMaximize:u}),w("div",{style:{display:"flex",flexDirection:"row",height:"100%"},children:[d(QT,{}),w(sf,{initialSeparation:"590px",orientation:"horizontal",sideSeparation:"end",children:[w("div",{css:eD,children:[d(_A,{}),d("div",{"data-test-id":"viewer",style:{width:"100%",height:"100%"},children:y===Y.DM_1D?d(mC,{emptyText:i}):d(yv,{emptyText:i})})]}),d(MA,{})]}),d("div",{ref:l,id:"main-wrapper",style:{position:"absolute",pointerEvents:"none",zIndex:0,left:0,right:0,top:0,bottom:0}},String(p))]})]})})})})})})})})})})})})})}var rD=c.exports.memo(sD);function lD(e,t){let n=[];function o(s){Object.keys(s).forEach(i=>{t===i&&n.push({[i]:s[i]}),Array.isArray(s[i])?s[i].forEach(r=>{o(r)}):typeof s[i]=="object"&&s[i]!==null&&o(s[i])})}return o(e),n}function aD(e){const[t,n]=c.exports.useState(),[o,s]=c.exports.useState("");c.exports.useEffect(()=>{const r=lD(e,o);n(o?r:e)},[e,o]);const i=c.exports.useCallback(Uo(r=>{const l=r.target.value;s(l)},500),[e]);return _("div",{style:{display:"flex",flexDirection:"column",paddingTop:"10px"},children:[f("input",{style:{border:"1px solid gray",padding:"5px"},type:"text",placeholder:"Search for key...",onChange:i}),f(na,{data:t}),";"]})}function Zd(){const[e,t]=c.exports.useState(),[n,o]=c.exports.useState({}),s=c.exports.useCallback(r=>{(async()=>{try{const l=await Lt(r,{asBuffer:!0}),a=new TextDecoder("utf8"),u=JSON.parse(a.decode(l[0].binary));t(u)}catch{alert("Invalid JSON file")}})()},[]),i=c.exports.useCallback(r=>{o(r)},[]);return _("div",{style:{display:"flex",height:"100vh",padding:"20px"},children:[f("div",{style:{flex:9},children:f(rD,{data:e,onDataChange:i})}),_("div",{style:{display:"flex",flexDirection:"column",padding:"10px",flex:3},children:[f("div",{style:{flex:3},children:f(rf,{onDrop:s,color:"gray"})}),f("div",{style:{flex:9},children:f(aD,{data:n})})]})]})}var cD=Object.freeze(Object.defineProperty({__proto__:null,default:Zd},Symbol.toStringTag,{value:"Module"}));const uD=c.exports.lazy(()=>it(()=>import("./TestHighlight.df9e5147.js"),["assets/TestHighlight.df9e5147.js","assets/vendor.e38ac3d0.js"]));function dD(){return f(c.exports.Suspense,{fallback:null,children:_(Zo,{children:[f(bt,{path:"/test/highlight",component:uD}),f(bt,{path:"/",component:Zd}),f(bt,{render:()=>f("div",{children:"Page not found"})})]})})}lf.render(f(af,{children:_(Zo,{children:[f(bt,{path:"/test",component:dD}),f(bt,{path:"/",render:e=>f(Rf,b({},e))})]})}),document.getElementById("root"));export{J0 as H,rD as N,bs as c,re as u};
//# sourceMappingURL=index.5ddc21ca.js.map
