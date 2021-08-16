var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,o,l)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,s=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&i(e,o,t[o]);if(l)for(var o of l(t))n.call(t,o)&&i(e,o,t[o]);return e};import{r as a,j as c,c as d}from"./vendor.be1c8d24.js";import{f as u,N as f,S as p,M as h}from"./NMRium.c2fdf883.js";import"./index.e376355f.js";let g=JSON.parse(localStorage.getItem("nmrium-exercises")||"{}");async function m(e){const t=await fetch(e);!function(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`)}(t);return await t.json()}const x=d`
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
`,v=d`
  display: flex;
  height: 50%;
`,w=d`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
`,y=d`
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
`;function O(e){var l,r;const[n,i]=a.exports.useState(),[d,O]=a.exports.useState(null),[k,C]=a.exports.useState(!1),{file:I,title:N,baseURL:R}=e,D=a.exports.useCallback((e=>{if(n.answer){const t=u.Molecule.fromMolfile(e).getIDCode();g[n.answer.idCode]=t,localStorage.setItem("nmrium-exercises",JSON.stringify(g)),n.answer.idCode===t?O(!0):O(!1)}}),[n]);a.exports.useEffect((()=>{I?m(I).then((e=>{var t,o;const l=JSON.parse(JSON.stringify(e).replace(/\.\/+?/g,R));if(null==(o=null==(t=null==l?void 0:l.molecules)?void 0:t[0])?void 0:o.molfile){const e=u.Molecule.fromMolfile(l.molecules[0].molfile),t=e.getIDCode();let o=g[t];o&&(o=u.Molecule.fromIDCode(o).toMolfile()),l.answer={idCode:t,currentAnswer:o,mf:e.getMolecularFormula().formula},i(l)}})):i({})}),[R,I,e]);const z=a.exports.useCallback((()=>{C((e=>!e))}),[]);return c("div",{css:j},c("p",{css:x},c("strong",null,"Exercises: "),"Determine the unknown structure for the compound having the following NMR spectrum",c("p",null,N)),c("div",{css:b},c("div",{style:{height:k?"50%":"calc(100% - 25px)"}},c(f,{data:n,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})),c("button",{css:P,type:"button",onClick:z},k?"Hide answer area ":"Show answer area"),c("div",{css:v,style:k?{height:"50%"}:{height:"0%",visibility:"hidden"}},c("div",{css:M},c(p,{svgMenu:!0,fragment:!1,onChange:D,initialMolfile:null==(l=null==n?void 0:n.answer)?void 0:l.currentAnswer})),c("div",{css:w},c("div",{css:y},c(h,{style:{color:"navy",fontSize:30},mf:null==(r=null==n?void 0:n.answer)?void 0:r.mf})),c("div",{css:S},c("div",{style:(A=s({},j),E={backgroundColor:null==d?"white":d?"green":"red",color:null==d?"black":"white",width:"80%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center"},t(A,o(E)))},c("p",null,null==d?"Result":!0===d?"Right Molecule":"Wrong Molecule !!")))))));var A,E}export{O as default};
//# sourceMappingURL=Exercise.335e832c.js.map
