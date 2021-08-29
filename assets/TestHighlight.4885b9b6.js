var r=Object.defineProperty;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(d,i,h)=>i in d?r(d,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):d[i]=h,n=(d,i)=>{for(var h in i||(i={}))p.call(i,h)&&l(d,h,i[h]);if(s)for(var h of s(i))u.call(i,h)&&l(d,h,i[h]);return d};import{j as t,c as g}from"./vendor.be1c8d24.js";import{H as b,u as v}from"./index.e376355f.js";const f=[{id:"A",highlight:[1,2]},{id:"B",highlight:[0]},{id:"C",highlight:[]},{id:"D",highlight:[3,4]},{id:"E",highlight:[1,2,3]},{id:"F",highlight:[2,4]}],x=[{id:"1",highlight:["F"]},{id:"2",highlight:["E"]},{id:"3",highlight:["A","B"]},{id:"4",highlight:["B","C","F"]},{id:"5",highlight:[]}],H=g`
  display: flex;
  padding: 20px;
`,e=g`
  padding: 20px;
`,j=g`
  border: 1px solid black;
`,a=g`
  padding: 5px;
  font-weight: 600;
`,o=g`
  padding: 5px;
`;function m(){return t(b,null,t("div",{css:H},t("div",{css:e},t(c,{data:f})),t("div",{css:e},t(c,{data:x}))))}function c(d){return t("table",{css:j},t("thead",null,t("tr",null,t("th",{css:a},"ID"),t("th",{css:a},"Highlight ids"))),t("tbody",null,d.data.map(i=>t(y,{key:i.id,value:i}))))}function y(d){const{value:i}=d,h=v([i.id,...i.highlight]);return t("tr",n({key:i.id,style:{backgroundColor:h.isActive?"red":"transparent"}},h.onHover),t("td",{css:o},i.id),t("td",{css:o},i.highlight.join(", ")))}export{m as default};
//# sourceMappingURL=TestHighlight.4885b9b6.js.map
