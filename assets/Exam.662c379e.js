import{r as e,j as t,c as o,e as n,f as s}from"./vendor.869b45a7.js";import{f as i,N as l,S as r,M as a,c}from"./NMRium.a69582a0.js";import"./index.3c535d6a.js";let d=JSON.parse(localStorage.getItem("nmrium-exams")||"{}");async function u(e){const t=await fetch(e);!function(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`)}(t);return await t.json()}const f=o`
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
`,k=({result:o})=>{const[i,l]=e.exports.useState(!1),r=e.exports.useCallback((()=>{const e=c(o);l(e),setTimeout((()=>{l(!1)}),1e3)}),[o]);return t("button",{type:"button",css:w,onClick:r},t(i?n:s,null))};function C(o){const[n,s]=e.exports.useState(),[c,w]=e.exports.useState(null),[C,P]=e.exports.useState(!1),{file:j,title:N,baseURL:I}=o,z=e.exports.useCallback((e=>{if(n.answer){const t=i.Molecule.fromMolfile(e),o=t.getIDCode();d[n.answer.idCode]=o,localStorage.setItem("nmrium-exams",JSON.stringify(d)),w(t.toSmiles())}}),[n]);e.exports.useEffect((()=>{j?u(j).then((e=>{const t=JSON.parse(JSON.stringify(e).replace(/\.\/+?/g,I));if(t&&t.molecules&&t.molecules[0]&&t.molecules[0].molfile){const e=i.Molecule.fromMolfile(t.molecules[0].molfile),o=e.getIDCode();let n=d[o];n&&(n=i.Molecule.fromIDCode(n).toMolfile()),t.answer={idCode:o,currentAnswer:n,mf:e.getMolecularFormula().formula},s(t)}})):s({})}),[I,j,o]);const A=e.exports.useCallback((()=>{P((e=>!e))}),[]);return t("div",{css:M},t("p",{css:v},t("strong",null,"Exercises: "),"Determine the unknown structure for the compound having the following NMR spectrum",t("p",null,N)),t("div",{css:f},t("div",{css:p,style:{height:C?"50%":"calc(100% - 25px)"}},t(l,{data:n,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})),t("button",{css:y,type:"button",onClick:A},C?"Hide answer area ":"Show answer area"),t("div",{css:h,style:C?{height:"50%"}:{height:"0%",visibility:"hidden"}},t("div",{css:b},t(r,{svgMenu:!0,fragment:!1,onChange:z,initialMolfile:n&&n.answer&&n.answer.currentAnswer})),t("div",{css:m},t("div",{css:g},t(a,{style:{color:"navy",fontSize:30},mf:n&&n.answer&&n.answer.mf})),t("div",{css:x},t(k,{result:c}),t("div",{css:S},c))))))}export default C;
//# sourceMappingURL=Exam.662c379e.js.map
