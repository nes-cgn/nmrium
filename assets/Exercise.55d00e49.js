var I=Object.defineProperty,z=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var k=(t,e,o)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,S=(t,e)=>{for(var o in e||(e={}))J.call(e,o)&&k(t,o,e[o]);if(M)for(var o of M(e))O.call(e,o)&&k(t,o,e[o]);return t},R=(t,e)=>z(t,F(e));import{r as i,Q as g,j as d,a as s,a_ as H,am as T,c as n}from"./vendor.6bb543ed.js";import{N as $}from"./index.7240ed2a.js";let m=JSON.parse(localStorage.getItem("nmrium-exercises")||"{}");async function B(t){const e=await fetch(t);return L(e),await e.json()}function L(t){if(!t.ok)throw new Error(`HTTP ${t.status} - ${t.statusText}`);return t}const P=n`
  text-transform: none;
  margin: 0;
  padding: 5px;
  background-color: white;
  font-size: 14px;
  color: #3e3e3e;

  p {
    font-size: 10px;
    margin: 0px;
  }
`,Q=n`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`,U=n`
  display: flex;
  height: 50%;
`,V=n`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
`,W=n`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px dashed gray;
`,q=n`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  position: relative;
`,G=n`
  background-color: white;
  flex: 1;
  overflow: auto;
`,K=n`
  outline: none;
  border: none;
  border-top: 0.55px solid #c1c1c1;
  border-bottom: 0.55px solid #c1c1c1;
  color: #00b707;
  font-weight: bold;
  font-size: 12px;
  padding: 5px;

  &:hover {
    color: white !important;
    background-color: #00b707;
  }
`,A=n`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
`;function _(t){var w,b;const[e,o]=i.exports.useState(),[l,p]=i.exports.useState(null),[h,j]=i.exports.useState(!1),{file:f,title:N,baseURL:x}=t,D=i.exports.useCallback(c=>{if(e.answer){const a=g.Molecule.fromMolfile(c).getIDCode();m[e.answer.idCode]=a,localStorage.setItem("nmrium-exercises",JSON.stringify(m)),e.answer.idCode===a?p(!0):p(!1)}},[e]);i.exports.useEffect(()=>{f?B(f).then(c=>{var a,y;const r=JSON.parse(JSON.stringify(c).replace(/\.\/+?/g,x));if((y=(a=r==null?void 0:r.molecules)==null?void 0:a[0])!=null&&y.molfile){const C=g.Molecule.fromMolfile(r.molecules[0].molfile),v=C.getIDCode();let u=m[v];u&&(u=g.Molecule.fromIDCode(u).toMolfile()),r.answer={idCode:v,currentAnswer:u,mf:C.getMolecularFormula().formula},o(r)}}):o({})},[x,f,t]);const E=i.exports.useCallback(()=>{j(c=>!c)},[]);return d("div",{css:A,children:[d("p",{css:P,children:[s("strong",{children:"Exercises: "}),"Determine the unknown structure for the compound having the following NMR spectrum",s("p",{children:N})]}),d("div",{css:Q,children:[s("div",{style:{height:h?"50%":"calc(100% - 25px)"},children:s($,{data:e,workspace:"exercise"})}),s("button",{css:K,type:"button",onClick:E,children:h?"Hide answer area ":"Show answer area"}),d("div",{css:U,style:h?{height:"50%"}:{height:"0%",visibility:"hidden"},children:[s("div",{css:G,children:s(H,{svgMenu:!0,fragment:!1,onChange:D,initialMolfile:(w=e==null?void 0:e.answer)==null?void 0:w.currentAnswer})}),d("div",{css:V,children:[s("div",{css:W,children:s(T,{style:{color:"navy",fontSize:30},mf:(b=e==null?void 0:e.answer)==null?void 0:b.mf})}),s("div",{css:q,children:s("div",{style:R(S({},A),{backgroundColor:l==null?"white":l?"green":"red",color:l==null?"black":"white",width:"80%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center"}),children:l==null?s("p",{children:"Result"}):l===!0?s("p",{children:"Right Molecule"}):s("p",{children:"Wrong Molecule !!"})})})]})]})]})]})}export{_ as default};
//# sourceMappingURL=Exercise.55d00e49.js.map
