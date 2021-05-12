import{r as e,j as t,c as o,d as n,e as i}from"./vendor.e2ab791d.js";import{f as l,N as s,S as r,M as a,c}from"./NMRium.976e5ef3.js";import"./index.f5c8924c.js";let d=JSON.parse(localStorage.getItem("nmrium-exams")||"{}");async function u(e){const t=await fetch(e);!function(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`)}(t);return await t.json()}const f=o`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`,h=o`
  height: 50%;
`,m=o`
  display: flex;
  height: 50%;
`,p=o`
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
`,w=o`
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
`,b=o`
  background-color: white;
  flex: 1;
  overflow: auto;
`,y=o`
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
`,v=o`
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
`,k=({result:o})=>{const[l,s]=e.useState(!1),r=e.useCallback((()=>{const e=c(o);s(e),setTimeout((()=>{s(!1)}),1e3)}),[o]);return t("button",{type:"button",css:w,onClick:r},t(l?n:i,null))};function C(o){const[n,i]=e.useState(),[c,w]=e.useState(null),[C,P]=e.useState(!1),{file:j,title:N,baseURL:I}=o,z=e.useCallback((e=>{if(n.answer){const t=l.Molecule.fromMolfile(e),o=t.getIDCode();d[n.answer.idCode]=o,localStorage.setItem("nmrium-exams",JSON.stringify(d)),w(t.toSmiles())}}),[n]);e.useEffect((()=>{j?u(j).then((e=>{const t=JSON.parse(JSON.stringify(e).replace(/\.\/+?/g,I));if(t&&t.molecules&&t.molecules[0]&&t.molecules[0].molfile){const e=l.Molecule.fromMolfile(t.molecules[0].molfile),o=e.getIDCode();let n=d[o];n&&(n=l.Molecule.fromIDCode(n).toMolfile()),t.answer={idCode:o,currentAnswer:n,mf:e.getMolecularFormula().formula},i(t)}})):i({})}),[I,j,o]);const A=e.useCallback((()=>{P((e=>!e))}),[]);return t("div",{css:M},t("p",{css:v},t("strong",null,"Exercises: "),"Determine the unknown structure for the compound having the following NMR spectrum",t("p",null,N)),t("div",{css:f},t("div",{css:h,style:{height:C?"50%":"calc(100% - 25px)"}},t(s,{data:n,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})),t("button",{css:y,type:"button",onClick:A},C?"Hide answer area ":"Show answer area"),t("div",{css:m,style:C?{height:"50%"}:{height:"0%",visibility:"hidden"}},t("div",{css:b},t(r,{svgMenu:!0,fragment:!1,onChange:z,initialMolfile:n&&n.answer&&n.answer.currentAnswer})),t("div",{css:p},t("div",{css:g},t(a,{style:{color:"navy",fontSize:30},mf:n&&n.answer&&n.answer.mf})),t("div",{css:x},t(k,{result:c}),t("div",{css:S},c))))))}export default C;
//# sourceMappingURL=Exam.d4867a51.js.map
