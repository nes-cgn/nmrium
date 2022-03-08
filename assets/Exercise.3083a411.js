var j=Object.defineProperty,D=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var v=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,k=(t,e)=>{for(var s in e||(e={}))z.call(e,s)&&v(t,s,e[s]);if(S)for(var s of S(e))J.call(e,s)&&v(t,s,e[s]);return t},R=(t,e)=>D(t,F(e));import{r as i,j as d,a as o,c as n}from"./vendor.ff85ee72.js";import{f as p,N as O,a as H,S as T,M as W}from"./NMRium.f09dd0d5.js";import"./index.2a8589df.js";let m=JSON.parse(localStorage.getItem("nmrium-exercises")||"{}");async function $(t){const e=await fetch(t);return B(e),await e.json()}function B(t){if(!t.ok)throw new Error(`HTTP ${t.status} - ${t.statusText}`);return t}const L=n`
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
`,U=n`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`,V=n`
  display: flex;
  height: 50%;
`,X=n`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
`,Z=n`
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
`;function te(t){var w,y;const[e,s]=i.exports.useState(),[l,g]=i.exports.useState(null),[h,P]=i.exports.useState(!1),{file:f,title:E,baseURL:x}=t,I=i.exports.useCallback(c=>{if(e.answer){const a=p.Molecule.fromMolfile(c).getIDCode();m[e.answer.idCode]=a,localStorage.setItem("nmrium-exercises",JSON.stringify(m)),e.answer.idCode===a?g(!0):g(!1)}},[e]);i.exports.useEffect(()=>{f?$(f).then(c=>{var a,b;const r=JSON.parse(JSON.stringify(c).replace(/\.\/+?/g,x));if((b=(a=r==null?void 0:r.molecules)==null?void 0:a[0])==null?void 0:b.molfile){const C=p.Molecule.fromMolfile(r.molecules[0].molfile),M=C.getIDCode();let u=m[M];u&&(u=p.Molecule.fromIDCode(u).toMolfile()),r.answer={idCode:M,currentAnswer:u,mf:C.getMolecularFormula().formula},s(r)}}):s({})},[x,f,t]);const N=i.exports.useCallback(()=>{P(c=>!c)},[]);return d("div",{css:A,children:[d("p",{css:L,children:[o("strong",{children:"Exercises: "}),"Determine the unknown structure for the compound having the following NMR spectrum",o("p",{children:E})]}),d("div",{css:U,children:[o("div",{style:{height:h?"50%":"calc(100% - 25px)"},children:o(O,{data:e,workspace:H.EXERCISE_1D,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})}),o("button",{css:K,type:"button",onClick:N,children:h?"Hide answer area ":"Show answer area"}),d("div",{css:V,style:h?{height:"50%"}:{height:"0%",visibility:"hidden"},children:[o("div",{css:G,children:o(T,{svgMenu:!0,fragment:!1,onChange:I,initialMolfile:(w=e==null?void 0:e.answer)==null?void 0:w.currentAnswer})}),d("div",{css:X,children:[o("div",{css:Z,children:o(W,{style:{color:"navy",fontSize:30},mf:(y=e==null?void 0:e.answer)==null?void 0:y.mf})}),o("div",{css:q,children:o("div",{style:R(k({},A),{backgroundColor:l==null?"white":l?"green":"red",color:l==null?"black":"white",width:"80%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center"}),children:l==null?o("p",{children:"Result"}):l===!0?o("p",{children:"Right Molecule"}):o("p",{children:"Wrong Molecule !!"})})})]})]})]})]})}export{te as default};
//# sourceMappingURL=Exercise.3083a411.js.map
