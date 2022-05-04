var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { a as jsx, j as jsxs, c as css } from "./vendor.2184168d.js";
import { H as HighlightProvider, u as useHighlight } from "./index.f057ce26.js";
const tableOne = [{
  id: "A",
  highlight: [1, 2]
}, {
  id: "B",
  highlight: [0]
}, {
  id: "C",
  highlight: []
}, {
  id: "D",
  highlight: [3, 4]
}, {
  id: "E",
  highlight: [1, 2, 3]
}, {
  id: "F",
  highlight: [2, 4]
}];
const tableTwo = [{
  id: "1",
  highlight: ["F"]
}, {
  id: "2",
  highlight: ["E"]
}, {
  id: "3",
  highlight: ["A", "B"]
}, {
  id: "4",
  highlight: ["B", "C", "F"]
}, {
  id: "5",
  highlight: []
}];
const mainDiv = css`
  display: flex;
  padding: 20px;
`;
const tableDiv = css`
  padding: 20px;
`;
const table = css`
  border: 1px solid black;
`;
const th = css`
  padding: 5px;
  font-weight: 600;
`;
const td = css`
  padding: 5px;
`;
function TestHighlight() {
  return /* @__PURE__ */ jsx(HighlightProvider, {
    children: /* @__PURE__ */ jsxs("div", {
      css: mainDiv,
      children: [/* @__PURE__ */ jsx("div", {
        css: tableDiv,
        children: /* @__PURE__ */ jsx(HighlightTable, {
          data: tableOne
        })
      }), /* @__PURE__ */ jsx("div", {
        css: tableDiv,
        children: /* @__PURE__ */ jsx(HighlightTable, {
          data: tableTwo
        })
      })]
    })
  });
}
function HighlightTable(props) {
  return /* @__PURE__ */ jsxs("table", {
    css: table,
    children: [/* @__PURE__ */ jsx("thead", {
      children: /* @__PURE__ */ jsxs("tr", {
        children: [/* @__PURE__ */ jsx("th", {
          css: th,
          children: "ID"
        }), /* @__PURE__ */ jsx("th", {
          css: th,
          children: "Highlight ids"
        })]
      })
    }), /* @__PURE__ */ jsx("tbody", {
      children: props.data.map((datum) => /* @__PURE__ */ jsx(Tr, {
        value: datum
      }, datum.id))
    })]
  });
}
function Tr(props) {
  const {
    value
  } = props;
  const highlight = useHighlight([value.id, ...value.highlight]);
  return /* @__PURE__ */ jsxs("tr", __spreadProps(__spreadValues({
    style: {
      backgroundColor: highlight.isActive ? "red" : "transparent"
    }
  }, highlight.onHover), {
    children: [/* @__PURE__ */ jsx("td", {
      css: td,
      children: value.id
    }), /* @__PURE__ */ jsx("td", {
      css: td,
      children: value.highlight.join(", ")
    })]
  }), value.id);
}
export { TestHighlight as default };
//# sourceMappingURL=TestHighlight.90e2578e.js.map
