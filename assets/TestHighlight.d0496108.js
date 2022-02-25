var u=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var n=(h,i,t)=>i in h?u(h,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[i]=t,e=(h,i)=>{for(var t in i||(i={}))x.call(i,t)&&n(h,t,i[t]);if(s)for(var t of s(i))f.call(i,t)&&n(h,t,i[t]);return h},c=(h,i)=>b(h,v(i));import{a as d,j as g,c as l}from"./vendor.464d9055.js";import{H,u as m}from"./index.89e55a67.js";const j=[{id:"A",highlight:[1,2]},{id:"B",highlight:[0]},{id:"C",highlight:[]},{id:"D",highlight:[3,4]},{id:"E",highlight:[1,2,3]},{id:"F",highlight:[2,4]}],D=[{id:"1",highlight:["F"]},{id:"2",highlight:["E"]},{id:"3",highlight:["A","B"]},{id:"4",highlight:["B","C","F"]},{id:"5",highlight:[]}],T=l`
  display: flex;
  padding: 20px;
`,r=l`
  padding: 20px;
`,y=l`
  border: 1px solid black;
`,a=l`
  padding: 5px;
  font-weight: 600;
`,o=l`
  padding: 5px;
`;function k(){return d(H,{children:g("div",{css:T,children:[d("div",{css:r,children:d(p,{data:j})}),d("div",{css:r,children:d(p,{data:D})})]})})}function p(h){return g("table",{css:y,children:[d("thead",{children:g("tr",{children:[d("th",{css:a,children:"ID"}),d("th",{css:a,children:"Highlight ids"})]})}),d("tbody",{children:h.data.map(i=>d(A,{value:i},i.id))})]})}function A(h){const{value:i}=h,t=m([i.id,...i.highlight]);return g("tr",c(e({style:{backgroundColor:t.isActive?"red":"transparent"}},t.onHover),{children:[d("td",{css:o,children:i.id}),d("td",{css:o,children:i.highlight.join(", ")})]}),i.id)}export{k as default};
//# sourceMappingURL=TestHighlight.d0496108.js.map
