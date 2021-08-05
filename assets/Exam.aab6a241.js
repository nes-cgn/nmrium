import{r as e,j as t,c as o,e as n,f as i}from"./vendor.55db8a9f.js";import{f as l,N as s,S as r,M as a,c}from"./NMRium.a59a5721.js";import"./index.66eb0e31.js";let d=JSON.parse(localStorage.getItem("nmrium-exams")||"{}");async function u(e){const t=await fetch(e);!function(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`)}(t);return await t.json()}const f=o`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`,p=o`
  height: 50%;
`,h=o`
  display: flex;
  height: 50%;
`,m=o`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
`,g=o`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px dashed gray;
`,x=o`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  position: relative;
`,b=o`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 40px;
  outline: none;
  border: none;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: green;
    color: white;
  }
`,w=o`
  background-color: white;
  flex: 1;
  overflow: auto;
`,v=o`
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
`,y=o`
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
`,S=o`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`,M=o`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
  }
`,k=({result:o})=>{const[l,s]=e.exports.useState(!1),r=e.exports.useCallback((async()=>{const e=await c(o);s(e),setTimeout((()=>{s(!1)}),1e3)}),[o]);return t("button",{type:"button",css:b,onClick:r},t(l?n:i,null))};function C(o){var n,i;const[c,b]=e.exports.useState(),[C,P]=e.exports.useState(null),[j,N]=e.exports.useState(!1),{file:I,title:z,baseURL:A}=o,D=e.exports.useCallback((e=>{if(c.answer){const t=l.Molecule.fromMolfile(e),o=t.getIDCode();d[c.answer.idCode]=o,localStorage.setItem("nmrium-exams",JSON.stringify(d)),P(t.toSmiles())}}),[c]);e.exports.useEffect((()=>{I?u(I).then((e=>{var t,o;const n=JSON.parse(JSON.stringify(e).replace(/\.\/+?/g,A));if(null==(o=null==(t=null==n?void 0:n.molecules)?void 0:t[0])?void 0:o.molfile){const e=l.Molecule.fromMolfile(n.molecules[0].molfile),t=e.getIDCode();let o=d[t];o&&(o=l.Molecule.fromIDCode(o).toMolfile()),n.answer={idCode:t,currentAnswer:o,mf:e.getMolecularFormula().formula},b(n)}})):b({})}),[A,I,o]);const J=e.exports.useCallback((()=>{N((e=>!e))}),[]);return t("div",{css:M},t("p",{css:y},t("strong",null,"Exercises: "),"Determine the unknown structure for the compound having the following NMR spectrum",t("p",null,z)),t("div",{css:f},t("div",{css:p,style:{height:j?"50%":"calc(100% - 25px)"}},t(s,{data:c,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})),t("button",{css:v,type:"button",onClick:J},j?"Hide answer area ":"Show answer area"),t("div",{css:h,style:j?{height:"50%"}:{height:"0%",visibility:"hidden"}},t("div",{css:w},t(r,{svgMenu:!0,fragment:!1,onChange:D,initialMolfile:null==(n=null==c?void 0:c.answer)?void 0:n.currentAnswer})),t("div",{css:m},t("div",{css:g},t(a,{style:{color:"navy",fontSize:30},mf:null==(i=null==c?void 0:c.answer)?void 0:i.mf})),t("div",{css:x},t(k,{result:C}),t("div",{css:S},C))))))}export{C as default};
//# sourceMappingURL=Exam.aab6a241.js.map
