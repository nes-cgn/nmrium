var I=Object.defineProperty,D=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var v=(t,e,s)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,S=(t,e)=>{for(var s in e||(e={}))F.call(e,s)&&v(t,s,e[s]);if(M)for(var s of M(e))z.call(e,s)&&v(t,s,e[s]);return t},k=(t,e)=>D(t,E(e));var Q=typeof require!="undefined"?require:t=>{throw new Error('Dynamic require of "'+t+'" is not supported')};import{r,j as o,c as n}from"./vendor.35105230.js";import{f as h,N as J,S as O,M as H}from"./NMRium.13960c62.js";import"./index.7da7f219.js";let m=JSON.parse(localStorage.getItem("nmrium-exercises")||"{}");async function T(t){const e=await fetch(t);return $(e),await e.json()}function $(t){if(!t.ok)throw new Error(`HTTP ${t.status} - ${t.statusText}`);return t}const B=n`
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
`,L=n`
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
`,Z=n`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  position: relative;
`,q=n`
  background-color: white;
  flex: 1;
  overflow: auto;
`,G=n`
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
`,R=n`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
`;function K(t){var x,w;const[e,s]=r.exports.useState(),[i,p]=r.exports.useState(null),[d,A]=r.exports.useState(!1),{file:f,title:P,baseURL:g}=t,j=r.exports.useCallback(a=>{if(e.answer){const c=h.Molecule.fromMolfile(a).getIDCode();m[e.answer.idCode]=c,localStorage.setItem("nmrium-exercises",JSON.stringify(m)),e.answer.idCode===c?p(!0):p(!1)}},[e]);r.exports.useEffect(()=>{f?T(f).then(a=>{var c,y;const l=JSON.parse(JSON.stringify(a).replace(/\.\/+?/g,g));if((y=(c=l==null?void 0:l.molecules)==null?void 0:c[0])==null?void 0:y.molfile){const b=h.Molecule.fromMolfile(l.molecules[0].molfile),C=b.getIDCode();let u=m[C];u&&(u=h.Molecule.fromIDCode(u).toMolfile()),l.answer={idCode:C,currentAnswer:u,mf:b.getMolecularFormula().formula},s(l)}}):s({})},[g,f,t]);const N=r.exports.useCallback(()=>{A(a=>!a)},[]);return o("div",{css:R},o("p",{css:B},o("strong",null,"Exercises: "),"Determine the unknown structure for the compound having the following NMR spectrum",o("p",null,P)),o("div",{css:L},o("div",{style:{height:d?"50%":"calc(100% - 25px)"}},o(J,{data:e,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})),o("button",{css:G,type:"button",onClick:N},d?"Hide answer area ":"Show answer area"),o("div",{css:U,style:d?{height:"50%"}:{height:"0%",visibility:"hidden"}},o("div",{css:q},o(O,{svgMenu:!0,fragment:!1,onChange:j,initialMolfile:(x=e==null?void 0:e.answer)==null?void 0:x.currentAnswer})),o("div",{css:V},o("div",{css:W},o(H,{style:{color:"navy",fontSize:30},mf:(w=e==null?void 0:e.answer)==null?void 0:w.mf})),o("div",{css:Z},o("div",{style:k(S({},R),{backgroundColor:i==null?"white":i?"green":"red",color:i==null?"black":"white",width:"80%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center"})},i==null?o("p",null,"Result"):i===!0?o("p",null,"Right Molecule"):o("p",null,"Wrong Molecule !!")))))))}export{K as default};
