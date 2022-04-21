import{r as i,Q as m,j as c,a as t,b2 as A,am as R,c as s,aY as N,cv as T}from"./vendor.50bee1a9.js";import{N as D,c as E}from"./index.ebe5ca61.js";let g=JSON.parse(localStorage.getItem("nmrium-exams")||"{}");async function z(o){const e=await fetch(o);return F(e),await e.json()}function F(o){if(!o.ok)throw new Error(`HTTP ${o.status} - ${o.statusText}`);return o}const I=s`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`,H=s`
  height: 50%;
`,J=s`
  display: flex;
  height: 50%;
`,O=s`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
`,B=s`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px dashed gray;
`,$=s`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  position: relative;
`,L=s`
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
`,P=s`
  background-color: white;
  flex: 1;
  overflow: auto;
`,Q=s`
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
`,Y=s`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
  }
`,q=({result:o})=>{const[e,r]=i.exports.useState(!1),a=i.exports.useCallback(()=>{(async()=>{const h=await E(o);r(h),setTimeout(()=>{r(!1)},1e3)})()},[o]);return t("button",{type:"button",css:L,onClick:a,children:e?t(N,{}):t(T,{})})};function W(o){var w,b;const[e,r]=i.exports.useState(),[a,h]=i.exports.useState(null),[f,k]=i.exports.useState(!1),{file:p,title:S,baseURL:x}=o,M=i.exports.useCallback(l=>{if(e.answer){const n=m.Molecule.fromMolfile(l),d=n.getIDCode();g[e.answer.idCode]=d,localStorage.setItem("nmrium-exams",JSON.stringify(g)),h(n.toSmiles())}},[e]);i.exports.useEffect(()=>{p?z(p).then(l=>{var d,y;const n=JSON.parse(JSON.stringify(l).replace(/\.\/+?/g,x));if((y=(d=n==null?void 0:n.molecules)==null?void 0:d[0])!=null&&y.molfile){const C=m.Molecule.fromMolfile(n.molecules[0].molfile),v=C.getIDCode();let u=g[v];u&&(u=m.Molecule.fromIDCode(u).toMolfile()),n.answer={idCode:v,currentAnswer:u,mf:C.getMolecularFormula().formula},r(n)}}):r({})},[x,p,o]);const j=i.exports.useCallback(()=>{k(l=>!l)},[]);return c("div",{css:Y,children:[c("p",{css:U,children:[t("strong",{children:"Exercises: "}),"Determine the unknown structure for the compound having the following NMR spectrum",t("p",{children:S})]}),c("div",{css:I,children:[t("div",{css:H,style:{height:f?"50%":"calc(100% - 25px)"},children:t(D,{data:e,workspace:"exercise"})}),t("button",{css:Q,type:"button",onClick:j,children:f?"Hide answer area ":"Show answer area"}),c("div",{css:J,style:f?{height:"50%"}:{height:"0%",visibility:"hidden"},children:[t("div",{css:P,children:t(A,{svgMenu:!0,fragment:!1,onChange:M,initialMolfile:(w=e==null?void 0:e.answer)==null?void 0:w.currentAnswer})}),c("div",{css:O,children:[t("div",{css:B,children:t(R,{style:{color:"navy",fontSize:30},mf:(b=e==null?void 0:e.answer)==null?void 0:b.mf})}),c("div",{css:$,children:[t(q,{result:a}),t("div",{css:V,children:a})]})]})]})]})]})}export{W as default};
//# sourceMappingURL=Exam.85b89082.js.map
