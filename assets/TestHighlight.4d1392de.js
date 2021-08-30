var r=Object.defineProperty;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(d,i,h)=>i in d?r(d,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):d[i]=h,n=(d,i)=>{for(var h in i||(i={}))p.call(i,h)&&l(d,h,i[h]);if(s)for(var h of s(i))u.call(i,h)&&l(d,h,i[h]);return d};import{j as t,c as g}from"./vendor.5177a34e.js";import{H as v,u as b}from"./index.d53527e8.js";const x=[{id:"A",highlight:[1,2]},{id:"B",highlight:[0]},{id:"C",highlight:[]},{id:"D",highlight:[3,4]},{id:"E",highlight:[1,2,3]},{id:"F",highlight:[2,4]}],f=[{id:"1",highlight:["F"]},{id:"2",highlight:["E"]},{id:"3",highlight:["A","B"]},{id:"4",highlight:["B","C","F"]},{id:"5",highlight:[]}],H=g`
  display: flex;
  padding: 20px;
`,a=g`
  padding: 20px;
`,j=g`
  border: 1px solid black;
`,e=g`
  padding: 5px;
  font-weight: 600;
`,o=g`
  padding: 5px;
`;function m(){return t(v,null,t("div",{css:H},t("div",{css:a},t(c,{data:x})),t("div",{css:a},t(c,{data:f}))))}function c(d){return t("table",{css:j},t("thead",null,t("tr",null,t("th",{css:e},"ID"),t("th",{css:e},"Highlight ids"))),t("tbody",null,d.data.map(i=>t(y,{key:i.id,value:i}))))}function y(d){const{value:i}=d,h=b([i.id,...i.highlight]);return t("tr",n({key:i.id,style:{backgroundColor:h.isActive?"red":"transparent"}},h.onHover),t("td",{css:o},i.id),t("td",{css:o},i.highlight.join(", ")))}export{m as default};
//# sourceMappingURL=TestHighlight.4d1392de.js.map
