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
import { r as react, Q as full, j as jsxs, a as jsx, b2 as StructureEditor, am as MF, c as css } from "./vendor.5045b93b.js";
import { N as NMRium } from "./index.c37190e3.js";
let answers = JSON.parse(localStorage.getItem("nmrium-exercises") || "{}");
async function loadData(file) {
  const response = await fetch(file);
  checkStatus(response);
  const data = await response.json();
  return data;
}
function checkStatus(response) {
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
  }
  return response;
}
const titleCss = css`
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
`;
const mainContainer = css`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`;
const bottomContainer = css`
  display: flex;
  height: 50%;
`;
const bottomRightContainer = css`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
`;
const mfCss = css`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px dashed gray;
`;
const resultContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  position: relative;
`;
const structureEditorCss = css`
  background-color: white;
  flex: 1;
  overflow: auto;
`;
const showButtonCss = css`
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
`;
const styles = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
`;
function Exercise(props) {
  var _a, _b;
  const [data, setData] = react.exports.useState();
  const [resultFlag, setResultFlag] = react.exports.useState(null);
  const [answerAreaVisible, showAnswerArea] = react.exports.useState(false);
  const {
    file,
    title,
    baseURL
  } = props;
  const checkAnswer = react.exports.useCallback((response) => {
    if (data.answer) {
      const MolResponse = full.Molecule.fromMolfile(response);
      const idCodeResponse = MolResponse.getIDCode();
      answers[data.answer.idCode] = idCodeResponse;
      localStorage.setItem("nmrium-exercises", JSON.stringify(answers));
      if (data.answer.idCode === idCodeResponse) {
        setResultFlag(true);
      } else {
        setResultFlag(false);
      }
    }
  }, [data]);
  react.exports.useEffect(() => {
    if (file) {
      void loadData(file).then((d) => {
        var _a2, _b2;
        const _d = JSON.parse(JSON.stringify(d).replace(/\.\/+?/g, baseURL));
        if ((_b2 = (_a2 = _d == null ? void 0 : _d.molecules) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.molfile) {
          const molecule = full.Molecule.fromMolfile(_d.molecules[0].molfile);
          const idCode = molecule.getIDCode();
          let currentAnswer = answers[idCode];
          if (currentAnswer) {
            currentAnswer = full.Molecule.fromIDCode(currentAnswer).toMolfile();
          }
          _d.answer = {
            idCode,
            currentAnswer,
            mf: molecule.getMolecularFormula().formula
          };
          setData(_d);
        }
      });
    } else {
      setData({});
    }
  }, [baseURL, file, props]);
  const showAnswerAreaHander = react.exports.useCallback(() => {
    showAnswerArea((prev) => !prev);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    css: styles,
    children: [/* @__PURE__ */ jsxs("p", {
      css: titleCss,
      children: [/* @__PURE__ */ jsx("strong", {
        children: "Exercises: "
      }), "Determine the unknown structure for the compound having the following NMR spectrum", /* @__PURE__ */ jsx("p", {
        children: title
      })]
    }), /* @__PURE__ */ jsxs("div", {
      css: mainContainer,
      children: [/* @__PURE__ */ jsx("div", {
        style: {
          height: answerAreaVisible ? "50%" : "calc(100% - 25px)"
        },
        children: /* @__PURE__ */ jsx(NMRium, {
          data,
          workspace: "exercise"
        })
      }), /* @__PURE__ */ jsx("button", {
        css: showButtonCss,
        type: "button",
        onClick: showAnswerAreaHander,
        children: !answerAreaVisible ? "Show answer area" : "Hide answer area "
      }), /* @__PURE__ */ jsxs("div", {
        css: bottomContainer,
        style: answerAreaVisible ? {
          height: "50%"
        } : {
          height: "0%",
          visibility: "hidden"
        },
        children: [/* @__PURE__ */ jsx("div", {
          css: structureEditorCss,
          children: /* @__PURE__ */ jsx(StructureEditor, {
            svgMenu: true,
            fragment: false,
            onChange: checkAnswer,
            initialMolfile: (_a = data == null ? void 0 : data.answer) == null ? void 0 : _a.currentAnswer
          })
        }), /* @__PURE__ */ jsxs("div", {
          css: bottomRightContainer,
          children: [/* @__PURE__ */ jsx("div", {
            css: mfCss,
            children: /* @__PURE__ */ jsx(MF, {
              style: {
                color: "navy",
                fontSize: 30
              },
              mf: (_b = data == null ? void 0 : data.answer) == null ? void 0 : _b.mf
            })
          }), /* @__PURE__ */ jsx("div", {
            css: resultContainer,
            children: /* @__PURE__ */ jsx("div", {
              style: __spreadProps(__spreadValues({}, styles), {
                backgroundColor: resultFlag == null ? "white" : resultFlag ? "green" : "red",
                color: resultFlag == null ? "black" : "white",
                width: "80%",
                height: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }),
              children: resultFlag == null ? /* @__PURE__ */ jsx("p", {
                children: "Result"
              }) : resultFlag === true ? /* @__PURE__ */ jsx("p", {
                children: "Right Molecule"
              }) : /* @__PURE__ */ jsx("p", {
                children: "Wrong Molecule !!"
              })
            })
          })]
        })]
      })]
    })]
  });
}
export { Exercise as default };
//# sourceMappingURL=Exercise.c9d0d754.js.map
