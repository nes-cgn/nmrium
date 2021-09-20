var r=Object.defineProperty;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(h,i,d)=>i in h?r(h,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):h[i]=d,n=(h,i)=>{for(var d in i||(i={}))p.call(i,d)&&l(h,d,i[d]);if(s)for(var d of s(i))u.call(i,d)&&l(h,d,i[d]);return h};var k=typeof require!="undefined"?require:h=>{throw new Error('Dynamic require of "'+h+'" is not supported')};import{j as t,c as g}from"./vendor.e10e3af8.js";import{H as v,u as b}from"./index.531d50e3.js";const f=[{id:"A",highlight:[1,2]},{id:"B",highlight:[0]},{id:"C",highlight:[]},{id:"D",highlight:[3,4]},{id:"E",highlight:[1,2,3]},{id:"F",highlight:[2,4]}],x=[{id:"1",highlight:["F"]},{id:"2",highlight:["E"]},{id:"3",highlight:["A","B"]},{id:"4",highlight:["B","C","F"]},{id:"5",highlight:[]}],H=g`
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
`;function m(){return t(v,null,t("div",{css:H},t("div",{css:e},t(c,{data:f})),t("div",{css:e},t(c,{data:x}))))}function c(h){return t("table",{css:j},t("thead",null,t("tr",null,t("th",{css:a},"ID"),t("th",{css:a},"Highlight ids"))),t("tbody",null,h.data.map(i=>t(y,{key:i.id,value:i}))))}function y(h){const{value:i}=h,d=b([i.id,...i.highlight]);return t("tr",n({key:i.id,style:{backgroundColor:d.isActive?"red":"transparent"}},d.onHover),t("td",{css:o},i.id),t("td",{css:o},i.highlight.join(", ")))}export{m as default};
