import{r,j as l,a as t,c as s,g as P,h as R}from"./vendor.cb69b7e6.js";import{f as m,N as j,S as F,M as N,c as T}from"./NMRium.06fd98c9.js";import"./index.55df369b.js";let g=JSON.parse(localStorage.getItem("nmrium-exams")||"{}");async function D(o){const e=await fetch(o);return E(e),await e.json()}function E(o){if(!o.ok)throw new Error(`HTTP ${o.status} - ${o.statusText}`);return o}const I=s`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`,z=s`
  height: 50%;
`,H=s`
  display: flex;
  height: 50%;
`,J=s`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
`,O=s`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px dashed gray;
`,B=s`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  position: relative;
`,$=s`
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
`,L=s`
  background-color: white;
  flex: 1;
  overflow: auto;
`,U=s`
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
`,V=s`
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
`,Z=s`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`,q=s`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
  }
`,G=({result:o})=>{const[e,i]=r.exports.useState(!1),a=r.exports.useCallback(async()=>{const h=await T(o);i(h),setTimeout(()=>{i(!1)},1e3)},[o]);return t("button",{type:"button",css:$,onClick:a,children:e?t(P,{}):t(R,{})})};function X(o){var w,b;const[e,i]=r.exports.useState(),[a,h]=r.exports.useState(null),[f,v]=r.exports.useState(!1),{file:p,title:k,baseURL:x}=o,M=r.exports.useCallback(c=>{if(e.answer){const n=m.Molecule.fromMolfile(c),d=n.getIDCode();g[e.answer.idCode]=d,localStorage.setItem("nmrium-exams",JSON.stringify(g)),h(n.toSmiles())}},[e]);r.exports.useEffect(()=>{p?D(p).then(c=>{var d,y;const n=JSON.parse(JSON.stringify(c).replace(/\.\/+?/g,x));if((y=(d=n==null?void 0:n.molecules)==null?void 0:d[0])==null?void 0:y.molfile){const C=m.Molecule.fromMolfile(n.molecules[0].molfile),S=C.getIDCode();let u=g[S];u&&(u=m.Molecule.fromIDCode(u).toMolfile()),n.answer={idCode:S,currentAnswer:u,mf:C.getMolecularFormula().formula},i(n)}}):i({})},[x,p,o]);const A=r.exports.useCallback(()=>{v(c=>!c)},[]);return l("div",{css:q,children:[l("p",{css:V,children:[t("strong",{children:"Exercises: "}),"Determine the unknown structure for the compound having the following NMR spectrum",t("p",{children:k})]}),l("div",{css:I,children:[t("div",{css:z,style:{height:f?"50%":"calc(100% - 25px)"},children:t(j,{data:e,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})}),t("button",{css:U,type:"button",onClick:A,children:f?"Hide answer area ":"Show answer area"}),l("div",{css:H,style:f?{height:"50%"}:{height:"0%",visibility:"hidden"},children:[t("div",{css:L,children:t(F,{svgMenu:!0,fragment:!1,onChange:M,initialMolfile:(w=e==null?void 0:e.answer)==null?void 0:w.currentAnswer})}),l("div",{css:J,children:[t("div",{css:O,children:t(N,{style:{color:"navy",fontSize:30},mf:(b=e==null?void 0:e.answer)==null?void 0:b.mf})}),l("div",{css:B,children:[t(G,{result:a}),t("div",{css:Z,children:a})]})]})]})]})]})}export{X as default};
//# sourceMappingURL=Exam.8360b7b9.js.map
