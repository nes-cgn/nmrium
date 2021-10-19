var D=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var S=(t,e,s)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,k=(t,e)=>{for(var s in e||(e={}))z.call(e,s)&&S(t,s,e[s]);if(M)for(var s of M(e))J.call(e,s)&&S(t,s,e[s]);return t},R=(t,e)=>E(t,F(e));import{r as l,j as d,a as n,c as o}from"./vendor.7b4e529c.js";import{f as m,N as O,d as H,_ as T}from"./NMRium.c808c193.js";import"./index.5635ad1e.js";let p=JSON.parse(localStorage.getItem("nmrium-exercises")||"{}");async function _(t){const e=await fetch(t);return $(e),await e.json()}function $(t){if(!t.ok)throw new Error(`HTTP ${t.status} - ${t.statusText}`);return t}const B=o`
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
`,L=o`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`,U=o`
  display: flex;
  height: 50%;
`,V=o`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
`,W=o`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px dashed gray;
`,Z=o`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  position: relative;
`,q=o`
  background-color: white;
  flex: 1;
  overflow: auto;
`,G=o`
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
`,j=o`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
`;function ee(t){var w,b;const[e,s]=l.exports.useState(),[i,g]=l.exports.useState(null),[h,A]=l.exports.useState(!1),{file:f,title:P,baseURL:x}=t,N=l.exports.useCallback(c=>{if(e.answer){const a=m.Molecule.fromMolfile(c).getIDCode();p[e.answer.idCode]=a,localStorage.setItem("nmrium-exercises",JSON.stringify(p)),e.answer.idCode===a?g(!0):g(!1)}},[e]);l.exports.useEffect(()=>{f?_(f).then(c=>{var a,y;const r=JSON.parse(JSON.stringify(c).replace(/\.\/+?/g,x));if((y=(a=r==null?void 0:r.molecules)==null?void 0:a[0])==null?void 0:y.molfile){const C=m.Molecule.fromMolfile(r.molecules[0].molfile),v=C.getIDCode();let u=p[v];u&&(u=m.Molecule.fromIDCode(u).toMolfile()),r.answer={idCode:v,currentAnswer:u,mf:C.getMolecularFormula().formula},s(r)}}):s({})},[x,f,t]);const I=l.exports.useCallback(()=>{A(c=>!c)},[]);return d("div",{css:j,children:[d("p",{css:B,children:[n("strong",{children:"Exercises: "}),"Determine the unknown structure for the compound having the following NMR spectrum",n("p",{children:P})]}),d("div",{css:L,children:[n("div",{style:{height:h?"50%":"calc(100% - 25px)"},children:n(O,{data:e,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})}),n("button",{css:G,type:"button",onClick:I,children:h?"Hide answer area ":"Show answer area"}),d("div",{css:U,style:h?{height:"50%"}:{height:"0%",visibility:"hidden"},children:[n("div",{css:q,children:n(H,{svgMenu:!0,fragment:!1,onChange:N,initialMolfile:(w=e==null?void 0:e.answer)==null?void 0:w.currentAnswer})}),d("div",{css:V,children:[n("div",{css:W,children:n(T,{style:{color:"navy",fontSize:30},mf:(b=e==null?void 0:e.answer)==null?void 0:b.mf})}),n("div",{css:Z,children:n("div",{style:R(k({},j),{backgroundColor:i==null?"white":i?"green":"red",color:i==null?"black":"white",width:"80%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center"}),children:i==null?n("p",{children:"Result"}):i===!0?n("p",{children:"Right Molecule"}):n("p",{children:"Wrong Molecule !!"})})})]})]})]})]})}export{ee as default};
//# sourceMappingURL=Exercise.faaaad07.js.map
