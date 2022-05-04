import { r as react, Q as full, j as jsxs, a as jsx, ai as StructureEditor, av as MF, c as css, a$ as FaCheck, cx as FaRegCopy } from "./vendor.2184168d.js";
import { N as NMRium, c as copyTextToClipboard } from "./index.b258714f.js";
let answers = JSON.parse(localStorage.getItem("nmrium-exams") || "{}");
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
const mainContainer = css`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`;
const nmrContainer = css`
  height: 50%;
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
const copyButton = css`
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
`;
const structureEditor = css`
  background-color: white;
  flex: 1;
  overflow: auto;
`;
const showButton = css`
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
const resultCss = css`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;
const styles = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 30px;
  }
`;
const CopyButton = ({
  result
}) => {
  const [isCopied, setCopyFlag] = react.exports.useState(false);
  const saveToClipboardHandler = react.exports.useCallback(() => {
    void (async () => {
      const success = await copyTextToClipboard(result);
      setCopyFlag(success);
      setTimeout(() => {
        setCopyFlag(false);
      }, 1e3);
    })();
  }, [result]);
  return /* @__PURE__ */ jsx("button", {
    type: "button",
    css: copyButton,
    onClick: saveToClipboardHandler,
    children: isCopied ? /* @__PURE__ */ jsx(FaCheck, {}) : /* @__PURE__ */ jsx(FaRegCopy, {})
  });
};
function Exam(props) {
  var _a, _b;
  const [data, setData] = react.exports.useState();
  const [result, setResult] = react.exports.useState(null);
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
      localStorage.setItem("nmrium-exams", JSON.stringify(answers));
      setResult(MolResponse.toSmiles());
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
        css: nmrContainer,
        style: {
          height: answerAreaVisible ? "50%" : "calc(100% - 25px)"
        },
        children: /* @__PURE__ */ jsx(NMRium, {
          data,
          workspace: "exercise"
        })
      }), /* @__PURE__ */ jsx("button", {
        css: showButton,
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
          css: structureEditor,
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
          }), /* @__PURE__ */ jsxs("div", {
            css: resultContainer,
            children: [/* @__PURE__ */ jsx(CopyButton, {
              result
            }), /* @__PURE__ */ jsx("div", {
              css: resultCss,
              children: result
            })]
          })]
        })]
      })]
    })]
  });
}
export { Exam as default };
//# sourceMappingURL=Exam.ec4ae691.js.map
