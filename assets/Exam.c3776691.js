import{r as i,j as e,c as s,e as j,f as A}from"./vendor.259a2e20.js";import{f as h,N as P,S as R,M as N,c as F}from"./NMRium.21a805b6.js";import"./index.af365ef2.js";let m=JSON.parse(localStorage.getItem("nmrium-exams")||"{}");async function T(o){const t=await fetch(o);return D(t),await t.json()}function D(o){if(!o.ok)throw new Error(`HTTP ${o.status} - ${o.statusText}`);return o}const E=s`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`,I=s`
  height: 50%;
`,z=s`
  display: flex;
  height: 50%;
`,H=s`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
`,J=s`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px dashed gray;
`,O=s`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  position: relative;
`,B=s`
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
`,q=({result:o})=>{const[t,r]=i.exports.useState(!1),a=i.exports.useCallback(async()=>{const d=await F(o);r(d),setTimeout(()=>{r(!1)},1e3)},[o]);return e("button",{type:"button",css:B,onClick:a},t?e(j,null):e(A,null))};function G(o){var x,w;const[t,r]=i.exports.useState(),[a,d]=i.exports.useState(null),[f,v]=i.exports.useState(!1),{file:p,title:S,baseURL:g}=o,M=i.exports.useCallback(l=>{if(t.answer){const n=h.Molecule.fromMolfile(l),c=n.getIDCode();m[t.answer.idCode]=c,localStorage.setItem("nmrium-exams",JSON.stringify(m)),d(n.toSmiles())}},[t]);i.exports.useEffect(()=>{p?T(p).then(l=>{var c,b;const n=JSON.parse(JSON.stringify(l).replace(/\.\/+?/g,g));if((b=(c=n==null?void 0:n.molecules)==null?void 0:c[0])==null?void 0:b.molfile){const y=h.Molecule.fromMolfile(n.molecules[0].molfile),C=y.getIDCode();let u=m[C];u&&(u=h.Molecule.fromIDCode(u).toMolfile()),n.answer={idCode:C,currentAnswer:u,mf:y.getMolecularFormula().formula},r(n)}}):r({})},[g,p,o]);const k=i.exports.useCallback(()=>{v(l=>!l)},[]);return e("div",{css:Z},e("p",{css:U},e("strong",null,"Exercises: "),"Determine the unknown structure for the compound having the following NMR spectrum",e("p",null,S)),e("div",{css:E},e("div",{css:I,style:{height:f?"50%":"calc(100% - 25px)"}},e(P,{data:t,preferences:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0},panels:{hidePeaksPanel:!0,hideInformationPanel:!0,hideRangesPanel:!0,hideStructuresPanel:!0,hideFiltersPanel:!0,hideZonesPanel:!0,hideSummaryPanel:!0,hideMultipleSpectraAnalysisPanel:!0}}})),e("button",{css:L,type:"button",onClick:k},f?"Hide answer area ":"Show answer area"),e("div",{css:z,style:f?{height:"50%"}:{height:"0%",visibility:"hidden"}},e("div",{css:$},e(R,{svgMenu:!0,fragment:!1,onChange:M,initialMolfile:(x=t==null?void 0:t.answer)==null?void 0:x.currentAnswer})),e("div",{css:H},e("div",{css:J},e(N,{style:{color:"navy",fontSize:30},mf:(w=t==null?void 0:t.answer)==null?void 0:w.mf})),e("div",{css:O},e(q,{result:a}),e("div",{css:V},a))))))}export{G as default};
//# sourceMappingURL=Exam.c3776691.js.map
