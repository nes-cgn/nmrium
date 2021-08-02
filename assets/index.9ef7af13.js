var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,l=(e,t)=>{for(var i in t||(t={}))o.call(t,i)&&r(e,i,t[i]);if(s)for(var i of s(t))n.call(t,i)&&r(e,i,t[i]);return e},a=(e,s)=>t(e,i(s));import{r as d,M as c,S as p,c as u,w as f,j as h,F as m,E as y,a as g,R as x,b,d as j,H as w}from"./vendor.55db8a9f.js";var v=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"δ=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"δ=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"δ=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"δ=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"δ=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"δ=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Exercises",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"}]},{groupName:"Exam",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"}]}];function _(e,t=[],i=[],s=0){let o=i,n=[];-1!==s&&o[s]&&(o[s]=d.exports.cloneElement(o[s],{},n));for(const r in t){if(t[r].children&&Array.isArray(t[r].children)){const i=d.exports.createElement(p,{key:r+e,title:t[r].groupName});return o.push(i),_(r+e,t[r].children,o,0)}n.push(d.exports.createElement(c,l({key:r+e},t[r]),t[r].title))}return o}function C(e=[],t=[]){let i=t;for(const s of e){if(s.children&&Array.isArray(s.children))return C(s.children,i);t.push(s)}return i}function E(e=""){const t=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(e);let i="";if(t){const e=t[1].split("/");i=e.length>2?e[e.length-2]+e[e.length-1]:e[e.length-1]}return i+e.replace(/\.|\s|\//g,"")}const k=u`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,L=u`
  width: 260px;
`,T=u`
  width: 3%;
`,R=u`
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
`,S=u`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,H=u`
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
`,z=u`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,O=u`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;var P=f(d.exports.memo((function(e){const t=d.exports.useMemo((()=>function(e=[]){let t=[];for(const i of e)i.children&&Array.isArray(i.children)?t.push(_(i.groupName,[i],[])):t.push(d.exports.createElement(c,l({key:i.title},i),i.title));return t}(e.routes)),[e.routes]),i=e.menuIsClosed?"none":"block";return h("div",{css:u(k,e.menuIsClosed?T:L)},h("div",{css:S},h("div",{style:{display:i,padding:"0.5rem 0.7rem"}},h("a",{css:u(H,z)},"NMRium")),h("button",{type:"button",css:R,onClick:e.onMenuToggle},h(m,null))),h("div",{css:O,style:{display:i}},h(y,{onClick:t=>{e.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${t.item.props.view+E(t.item.props.file)}`)},mode:"inline"},t)))})));let I;const D={},A=function(e,t){if(!t||0===t.length)return e();if(void 0===I){const e=document.createElement("link").relList;I=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in D)return;D[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":I,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},V={Exam:d.exports.memo(d.exports.lazy((()=>A((()=>import("./Exam.485d66f3.js")),["assets/Exam.485d66f3.js","assets/vendor.55db8a9f.js","assets/NMRium.2e0e8864.js","assets/index.66eb0e31.js"])))),Exercise:d.exports.memo(d.exports.lazy((()=>A((()=>import("./Exercise.c4077f91.js")),["assets/Exercise.c4077f91.js","assets/vendor.55db8a9f.js","assets/NMRium.2e0e8864.js","assets/index.66eb0e31.js"])))),SingleView:d.exports.memo(d.exports.lazy((()=>A((()=>import("./SingleView.2f8965c4.js")),["assets/SingleView.2f8965c4.js","assets/vendor.55db8a9f.js","assets/NMRium.2e0e8864.js","assets/index.66eb0e31.js"])))),Test:d.exports.memo(d.exports.lazy((()=>A((()=>import("./Test.11aa8ed7.js")),["assets/Test.11aa8ed7.js","assets/vendor.55db8a9f.js","assets/NMRium.2e0e8864.js","assets/index.66eb0e31.js"])))),View:d.exports.memo(d.exports.lazy((()=>A((()=>import("./View.5e72d9c0.js")),["assets/View.5e72d9c0.js","assets/vendor.55db8a9f.js","assets/NMRium.2e0e8864.js","assets/index.66eb0e31.js"])))),TwoInstances:d.exports.memo(d.exports.lazy((()=>A((()=>import("./TwoInstances.42797464.js")),["assets/TwoInstances.42797464.js","assets/vendor.55db8a9f.js","assets/NMRium.2e0e8864.js","assets/index.66eb0e31.js"])))),Teaching:d.exports.memo(d.exports.lazy((()=>A((()=>import("./Teaching.86897ba3.js")),["assets/Teaching.86897ba3.js","assets/vendor.55db8a9f.js","assets/NMRium.2e0e8864.js","assets/index.66eb0e31.js"]))))},M=u`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,N=u`
  width: calc(100% - 260px);
`,U=u`
  width: 98%;
  margin-left: 20px !important;
`;function $(e){const{routes:t=[],baseURL:i}=e,s=d.exports.useMemo((()=>function(e=[]){let t=[];for(const i of e)i.children&&Array.isArray(i.children)?t=t.concat(C([i],[])):t.push(i);return t}(t)),[t]),[o,n]=d.exports.useState(!1),r=d.exports.useCallback((()=>n(!o)),[o]);return h("div",{style:{position:"relative",top:0,height:"100vh"}},h(P,a(l({},e),{routes:t,menuIsClosed:o,onMenuToggle:r})),h("div",{css:u(M,o?U:N)},h(d.exports.StrictMode,null,h(d.exports.Suspense,{fallback:h("div",null,"Loading...")},h(g,null,s.map((e=>h(x,{path:`/SamplesDashboard/:id/${e.view+E(e.file)}`,render:t=>h(B,a(l({},t),{prop:e,baseURL:i})),key:E(e.file)}))),s.length>0&&h(x,{path:"/",render:()=>{const e=s[0],t=e.view?e.view:"View";return h(V[t],l({},e[0]))},key:E(s[0].file)}))))))}function B(e){const{match:{params:{id:t}},prop:i,baseURL:s}=e,o=i.view?i.view:"View";return h(V[o],a(l({key:t},i),{id:E(i.file),baseURL:s}))}function J(e){return h("div",{style:{position:"relative",top:0,height:"100vh"}},h("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"}},h(d.exports.Suspense,{fallback:h("div",null,"Loading...")},h(g,null,h(x,{path:"/",render:t=>{const{match:{params:{id:i}}}=t,s=e.view?e.view:"SingleView";return h(V[s],a(l({key:i},e),{id:E(e.patrh)}))},key:E(e.path)})))))}const F={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function X(e){const t=await fetch(e);try{!function(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`)}(t);return await t.json()}catch(i){return console.log(i),null}}const q=e=>{const[t,i]=d.exports.useState({isLoaded:!1,status:200,routes:[]}),[s,o]=d.exports.useState(""),n=d.exports.useCallback((()=>{i({isLoaded:!0,status:200,routes:v})}),[]),r=window.location.href;return d.exports.useEffect((()=>{const e=new URL(r).searchParams;if(e.has("sampleURL")){const t=e.get("sampleURL");if(!t)return;switch(((e="")=>e.substring(e.lastIndexOf(".")+1))(t).toLowerCase()){case"json":o("multi"),X(t).then((e=>{if(e){const s=t.replace(/^(?<url>.*[\\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),o=JSON.parse(JSON.stringify(e).replace(/\.\/+?/g,s));i({isLoaded:!0,status:200,routes:o,baseURL:s})}else i({isLoaded:!1,status:404,routes:[]})}));break;case"dx":case"jdx":o("single"),i({isLoaded:!0,status:200,path:t})}}else o("multi"),i({isLoaded:!0,status:200,routes:v,baseURL:"./"})}),[r]),t.isLoaded?s&&"single"===s?h(J,a(l({},e),{path:t.path})):h(b,null,h($,a(l({},e),{routes:t.routes,baseURL:t.baseURL}))):h("div",{style:F.bodyContainer},h("div",{style:l(l({},F.container),200===t.status?F.normal:F.error)},200===t.status?h("div",null,h("p",{style:F.normalHeader},"Please wait"),h("p",null,"We will redirect you in a minute")):h("div",null,h("p",{style:F.errorHeader},"404"),h("p",null,"Resource not found."),h("button",{style:F.loadButton,type:"button",onClick:n},"Load local samples"))))},Q=d.exports.lazy((()=>A((()=>import("./TestHighlight.a5c5dbf6.js")),["assets/TestHighlight.a5c5dbf6.js","assets/vendor.55db8a9f.js","assets/index.66eb0e31.js"])));j.render(h(w,null,h(g,null,h(x,{path:"/",render:e=>h(q,l({},e))}),h(x,{path:"/test",component:function(){return h(d.exports.Suspense,{fallback:null},h(g,null,h(x,{path:"/test/highlight",component:Q}),h(x,{render:()=>h("div",null,"Page not found")})))}}))),document.getElementById("root"));
//# sourceMappingURL=index.9ef7af13.js.map
