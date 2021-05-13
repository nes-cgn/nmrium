var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,o,l)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,s=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&i(e,o,t[o]);if(l)for(var o of l(t))n.call(t,o)&&i(e,o,t[o]);return e};import{r as a,j as c,c as d}from"./vendor.e2ab791d.js";import{f as u,N as f,S as p,M as h}from"./NMRium.12302ed4.js";import"./index.f5c8924c.js";let m=JSON.parse(localStorage.getItem("nmrium-exercises")||"{}");async function g(e){const t=await fetch(e);!function(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`)}(t);return await t.json()}const w=d`
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
`,b=d`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`,y=d`
  display: flex;
  height: 50%;
`,x=d`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
`,v=d`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px dashed gray;
`,S=d`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  position: relative;
`,M=d`
  background-color: white;
  flex: 1;
  overflow: auto;
`,P=d`
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
`,j=d`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
`;function O(e){const[l,r]=a.useState(),[n,i]=a.useState(null),[d,O]=a.useState(!1),{file:k,title:C,baseURL:I}=e,N=a.useCallback((e=>{if(l.answer){const t=u.Molecule.fromMolfile(e).getIDCode();m[l.answer.idCode]=t,localStorage.setItem("nmrium-exercises",JSON.stringify(m)),l.answer.idCode===t?i(!0):i(!1)}}),[l]);a.useEffect((()=>{k?g(k).then((e=>{const t=JSON.parse(JSON.stringify(e).replace(/\.\/+?/g,I));if(t&&t.molecules&&t.molecules[0]&&t.molecules[0].molfile){const e=u.Molecule.fromMolfile(t.molecules[0].molfile),o=e.getIDCode();let l=m[o];l&&(l=u.Molecule.fromIDCode(l).toMolfile()),t.answer={idCode:o,currentAnswer:l,mf:e.getMolecularFormula().formula},r(t)}})):r({})}),[I,k,e]);const R=a.useCallback((()=>{O((e=>!e))}),[]);return c("div",{css:j},c("p",{css:w},c("strong",null,"Exercises: "),"Determine the unknown structure for the compound having the following NMR spectrum",c("p",null,C)),c("div",{css:b},c("div",{style:{height:d?"50%":"calc(100% - 25px)"}},c(f,{data:l,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})),c("button",{css:P,type:"button",onClick:R},d?"Hide answer area ":"Show answer area"),c("div",{css:y,style:d?{height:"50%"}:{height:"0%",visibility:"hidden"}},c("div",{css:M},c(p,{svgMenu:!0,fragment:!1,onChange:N,initialMolfile:l&&l.answer&&l.answer.currentAnswer})),c("div",{css:x},c("div",{css:v},c(h,{style:{color:"navy",fontSize:30},mf:l&&l.answer&&l.answer.mf})),c("div",{css:S},c("div",{style:(D=s({},j.result),z={backgroundColor:null==n?"white":n?"green":"red",color:null==n?"black":"white",width:"80%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center"},t(D,o(z)))},c("p",null,null==n?"Result":!0===n?"Right Molecule":"Wrong Molecule !!")))))));var D,z}export default O;
//# sourceMappingURL=Exercise.f1cd6214.js.map
