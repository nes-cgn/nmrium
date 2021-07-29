var i=Object.defineProperty,t=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,d=(t,h,e)=>h in t?i(t,h,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[h]=e;import{j as r,c as l}from"./vendor.55db8a9f.js";import{H as a,u as g}from"./index.66eb0e31.js";const n=[{id:"A",highlight:[1,2]},{id:"B",highlight:[0]},{id:"C",highlight:[]},{id:"D",highlight:[3,4]},{id:"E",highlight:[1,2,3]},{id:"F",highlight:[2,4]}],o=[{id:"1",highlight:["F"]},{id:"2",highlight:["E"]},{id:"3",highlight:["A","B"]},{id:"4",highlight:["B","C","F"]},{id:"5",highlight:[]}],s=l`
  display: flex;
  padding: 20px;
`,c=l`
  padding: 20px;
`,p=l`
  border: 1px solid black;
`,u=l`
  padding: 5px;
  font-weight: 600;
`,b=l`
  padding: 5px;
`;function f(){return r(a,null,r("div",{css:s},r("div",{css:c},r(v,{data:n})),r("div",{css:c},r(v,{data:o}))))}function v(i){return r("table",{css:p},r("thead",null,r("tr",null,r("th",{css:u},"ID"),r("th",{css:u},"Highlight ids"))),r("tbody",null,i.data.map((i=>r(y,{key:i.id,value:i})))))}function y(i){const{value:l}=i,a=g([l.id,...l.highlight]);return r("tr",((i,r)=>{for(var l in r||(r={}))h.call(r,l)&&d(i,l,r[l]);if(t)for(var l of t(r))e.call(r,l)&&d(i,l,r[l]);return i})({key:l.id,style:{backgroundColor:a.isActive?"red":"transparent"}},a.onHover),r("td",{css:b},l.id),r("td",{css:b},l.highlight.join(", ")))}export{f as default};
//# sourceMappingURL=TestHighlight.a5c5dbf6.js.map
