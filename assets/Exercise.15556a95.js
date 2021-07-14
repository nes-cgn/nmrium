var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,s=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&i(e,o,t[o]);if(r)for(var o of r(t))n.call(t,o)&&i(e,o,t[o]);return e};import{r as a,j as c,c as d}from"./vendor.d4ae965e.js";import{f as u,N as f,S as p,M as h}from"./NMRium.0f00304b.js";import"./index.b8b90bfd.js";let m=JSON.parse(localStorage.getItem("nmrium-exercises")||"{}");async function g(e){const t=await fetch(e);!function(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`)}(t);return await t.json()}const x=d`
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
`,w=d`
  display: flex;
  height: 50%;
`,y=d`
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
`;function O(e){const[r,l]=a.exports.useState(),[n,i]=a.exports.useState(null),[d,O]=a.exports.useState(!1),{file:k,title:C,baseURL:I}=e,N=a.exports.useCallback((e=>{if(r.answer){const t=u.Molecule.fromMolfile(e).getIDCode();m[r.answer.idCode]=t,localStorage.setItem("nmrium-exercises",JSON.stringify(m)),r.answer.idCode===t?i(!0):i(!1)}}),[r]);a.exports.useEffect((()=>{k?g(k).then((e=>{const t=JSON.parse(JSON.stringify(e).replace(/\.\/+?/g,I));if(t&&t.molecules&&t.molecules[0]&&t.molecules[0].molfile){const e=u.Molecule.fromMolfile(t.molecules[0].molfile),o=e.getIDCode();let r=m[o];r&&(r=u.Molecule.fromIDCode(r).toMolfile()),t.answer={idCode:o,currentAnswer:r,mf:e.getMolecularFormula().formula},l(t)}})):l({})}),[I,k,e]);const R=a.exports.useCallback((()=>{O((e=>!e))}),[]);return c("div",{css:j},c("p",{css:x},c("strong",null,"Exercises: "),"Determine the unknown structure for the compound having the following NMR spectrum",c("p",null,C)),c("div",{css:b},c("div",{style:{height:d?"50%":"calc(100% - 25px)"}},c(f,{data:r,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})),c("button",{css:P,type:"button",onClick:R},d?"Hide answer area ":"Show answer area"),c("div",{css:w,style:d?{height:"50%"}:{height:"0%",visibility:"hidden"}},c("div",{css:M},c(p,{svgMenu:!0,fragment:!1,onChange:N,initialMolfile:r&&r.answer&&r.answer.currentAnswer})),c("div",{css:y},c("div",{css:v},c(h,{style:{color:"navy",fontSize:30},mf:r&&r.answer&&r.answer.mf})),c("div",{css:S},c("div",{style:(D=s({},j.result),z={backgroundColor:null==n?"white":n?"green":"red",color:null==n?"black":"white",width:"80%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center"},t(D,o(z)))},c("p",null,null==n?"Result":!0===n?"Right Molecule":"Wrong Molecule !!")))))));var D,z}export default O;
//# sourceMappingURL=Exercise.15556a95.js.map
