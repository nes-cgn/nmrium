import{r as i,j as l,a as t,c as s,h as A,i as P}from"./vendor.c8e5f377.js";import{f as m,N as R,d as N,_ as T,c as D}from"./NMRium.622e2d0a.js";import"./index.a472611d.js";let g=JSON.parse(localStorage.getItem("nmrium-exams")||"{}");async function F(o){const e=await fetch(o);return I(e),await e.json()}function I(o){if(!o.ok)throw new Error(`HTTP ${o.status} - ${o.statusText}`);return o}const z=s`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`,E=s`
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
`,_=s`
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
`,$=s`
  background-color: white;
  flex: 1;
  overflow: auto;
`,L=s`
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
`,U=s`
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
`,V=s`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`,Z=s`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
  }
`,q=({result:o})=>{const[e,r]=i.exports.useState(!1),c=i.exports.useCallback(async()=>{const h=await D(o);r(h),setTimeout(()=>{r(!1)},1e3)},[o]);return t("button",{type:"button",css:_,onClick:c,children:e?t(A,{}):t(P,{})})};function W(o){var w,b;const[e,r]=i.exports.useState(),[c,h]=i.exports.useState(null),[f,S]=i.exports.useState(!1),{file:p,title:k,baseURL:x}=o,M=i.exports.useCallback(a=>{if(e.answer){const n=m.Molecule.fromMolfile(a),d=n.getIDCode();g[e.answer.idCode]=d,localStorage.setItem("nmrium-exams",JSON.stringify(g)),h(n.toSmiles())}},[e]);i.exports.useEffect(()=>{p?F(p).then(a=>{var d,y;const n=JSON.parse(JSON.stringify(a).replace(/\.\/+?/g,x));if((y=(d=n==null?void 0:n.molecules)==null?void 0:d[0])==null?void 0:y.molfile){const C=m.Molecule.fromMolfile(n.molecules[0].molfile),v=C.getIDCode();let u=g[v];u&&(u=m.Molecule.fromIDCode(u).toMolfile()),n.answer={idCode:v,currentAnswer:u,mf:C.getMolecularFormula().formula},r(n)}}):r({})},[x,p,o]);const j=i.exports.useCallback(()=>{S(a=>!a)},[]);return l("div",{css:Z,children:[l("p",{css:U,children:[t("strong",{children:"Exercises: "}),"Determine the unknown structure for the compound having the following NMR spectrum",t("p",{children:k})]}),l("div",{css:z,children:[t("div",{css:E,style:{height:f?"50%":"calc(100% - 25px)"},children:t(R,{data:e,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})}),t("button",{css:L,type:"button",onClick:j,children:f?"Hide answer area ":"Show answer area"}),l("div",{css:H,style:f?{height:"50%"}:{height:"0%",visibility:"hidden"},children:[t("div",{css:$,children:t(N,{svgMenu:!0,fragment:!1,onChange:M,initialMolfile:(w=e==null?void 0:e.answer)==null?void 0:w.currentAnswer})}),l("div",{css:J,children:[t("div",{css:O,children:t(T,{style:{color:"navy",fontSize:30},mf:(b=e==null?void 0:e.answer)==null?void 0:b.mf})}),l("div",{css:B,children:[t(q,{result:c}),t("div",{css:V,children:c})]})]})]})]})]})}export{W as default};
//# sourceMappingURL=Exam.08016e7c.js.map
