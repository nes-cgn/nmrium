var N=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var S=(t,e,s)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,k=(t,e)=>{for(var s in e||(e={}))z.call(e,s)&&S(t,s,e[s]);if(v)for(var s of v(e))J.call(e,s)&&S(t,s,e[s]);return t},R=(t,e)=>E(t,F(e));import{r as l,Q as p,j as d,a as n,a_ as O,al as H,c as o}from"./vendor.3abbb066.js";import{N as T}from"./index.7a5e418e.js";let m=JSON.parse(localStorage.getItem("nmrium-exercises")||"{}");async function $(t){const e=await fetch(t);return B(e),await e.json()}function B(t){if(!t.ok)throw new Error(`HTTP ${t.status} - ${t.statusText}`);return t}const L=o`
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
`,Q=o`
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
`,A=o`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
`;function _(t){var w,y;const[e,s]=l.exports.useState(),[i,g]=l.exports.useState(null),[h,P]=l.exports.useState(!1),{file:f,title:j,baseURL:x}=t,D=l.exports.useCallback(c=>{if(e.answer){const a=p.Molecule.fromMolfile(c).getIDCode();m[e.answer.idCode]=a,localStorage.setItem("nmrium-exercises",JSON.stringify(m)),e.answer.idCode===a?g(!0):g(!1)}},[e]);l.exports.useEffect(()=>{f?$(f).then(c=>{var a,b;const r=JSON.parse(JSON.stringify(c).replace(/\.\/+?/g,x));if((b=(a=r==null?void 0:r.molecules)==null?void 0:a[0])==null?void 0:b.molfile){const C=p.Molecule.fromMolfile(r.molecules[0].molfile),M=C.getIDCode();let u=m[M];u&&(u=p.Molecule.fromIDCode(u).toMolfile()),r.answer={idCode:M,currentAnswer:u,mf:C.getMolecularFormula().formula},s(r)}}):s({})},[x,f,t]);const I=l.exports.useCallback(()=>{P(c=>!c)},[]);return d("div",{css:A,children:[d("p",{css:L,children:[n("strong",{children:"Exercises: "}),"Determine the unknown structure for the compound having the following NMR spectrum",n("p",{children:j})]}),d("div",{css:Q,children:[n("div",{style:{height:h?"50%":"calc(100% - 25px)"},children:n(T,{data:e,workspace:"exercise1D",preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})}),n("button",{css:G,type:"button",onClick:I,children:h?"Hide answer area ":"Show answer area"}),d("div",{css:U,style:h?{height:"50%"}:{height:"0%",visibility:"hidden"},children:[n("div",{css:q,children:n(O,{svgMenu:!0,fragment:!1,onChange:D,initialMolfile:(w=e==null?void 0:e.answer)==null?void 0:w.currentAnswer})}),d("div",{css:V,children:[n("div",{css:W,children:n(H,{style:{color:"navy",fontSize:30},mf:(y=e==null?void 0:e.answer)==null?void 0:y.mf})}),n("div",{css:Z,children:n("div",{style:R(k({},A),{backgroundColor:i==null?"white":i?"green":"red",color:i==null?"black":"white",width:"80%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center"}),children:i==null?n("p",{children:"Result"}):i===!0?n("p",{children:"Right Molecule"}):n("p",{children:"Wrong Molecule !!"})})})]})]})]})]})}export{_ as default};
//# sourceMappingURL=Exercise.d2500c9d.js.map
