var r=Object.defineProperty;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(g,i,h)=>i in g?r(g,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):g[i]=h,n=(g,i)=>{for(var h in i||(i={}))p.call(i,h)&&l(g,h,i[h]);if(s)for(var h of s(i))u.call(i,h)&&l(g,h,i[h]);return g};import{j as t,c as d}from"./vendor.259a2e20.js";import{H as v,u as b}from"./index.af365ef2.js";const f=[{id:"A",highlight:[1,2]},{id:"B",highlight:[0]},{id:"C",highlight:[]},{id:"D",highlight:[3,4]},{id:"E",highlight:[1,2,3]},{id:"F",highlight:[2,4]}],x=[{id:"1",highlight:["F"]},{id:"2",highlight:["E"]},{id:"3",highlight:["A","B"]},{id:"4",highlight:["B","C","F"]},{id:"5",highlight:[]}],H=d`
  display: flex;
  padding: 20px;
`,a=d`
  padding: 20px;
`,j=d`
  border: 1px solid black;
`,e=d`
  padding: 5px;
  font-weight: 600;
`,o=d`
  padding: 5px;
`;function m(){return t(v,null,t("div",{css:H},t("div",{css:a},t(c,{data:f})),t("div",{css:a},t(c,{data:x}))))}function c(g){return t("table",{css:j},t("thead",null,t("tr",null,t("th",{css:e},"ID"),t("th",{css:e},"Highlight ids"))),t("tbody",null,g.data.map(i=>t(y,{key:i.id,value:i}))))}function y(g){const{value:i}=g,h=b([i.id,...i.highlight]);return t("tr",n({key:i.id,style:{backgroundColor:h.isActive?"red":"transparent"}},h.onHover),t("td",{css:o},i.id),t("td",{css:o},i.highlight.join(", ")))}export{m as default};
//# sourceMappingURL=TestHighlight.8f0ad752.js.map
