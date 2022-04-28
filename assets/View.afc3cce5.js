import { r as react, e as jsxs, d as jsx } from "./vendor.9923c0a1.js";
import { N as NMRium } from "./index.49f91220.js";
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
function View(props) {
  const [data, setData] = react.exports.useState();
  const {
    file,
    title,
    baseURL
  } = props;
  const [callbackData, setCallbackData] = react.exports.useState([]);
  const [isCallbackVisible, showCallback] = react.exports.useState(false);
  react.exports.useEffect(() => {
    if (file) {
      void loadData(file).then((d) => {
        const _d = JSON.parse(JSON.stringify(d).replace(/\.\/+?/g, baseURL));
        setData(_d);
      });
    } else {
      setData(void 0);
    }
  }, [baseURL, file, props]);
  const changeHandler = react.exports.useCallback((logData) => {
    setCallbackData((prevLogs) => {
      return prevLogs.concat({
        datetime: new Date().toLocaleTimeString(),
        data: logData
      });
    });
  }, []);
  react.exports.useCallback(() => {
    showCallback((prevflag) => !prevflag);
  }, []);
  react.exports.useCallback(() => {
    setCallbackData([]);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    style: {
      height: "100%",
      marginLeft: 30
    },
    children: [/* @__PURE__ */ jsxs("div", {
      style: {
        height: "60px",
        display: "flex",
        flexDirection: "column",
        position: "relative"
      },
      children: [/* @__PURE__ */ jsx("h5", {
        style: {
          fontWeight: 700,
          fontSize: "1.5em",
          lineHeight: "1.4em",
          marginBottom: "15px"
        },
        children: "Display and process 1D NMR spectra from a JCAMP-DX file"
      }), title && /* @__PURE__ */ jsx("p", {
        style: {
          marginTop: "-10px",
          marginBottom: "1rem",
          fontWeight: 400,
          color: "#9a9a9a",
          fontSize: "0.7142em"
        },
        children: title
      }), false]
    }), /* @__PURE__ */ jsx("div", {
      style: {
        height: "calc(100% - 75px)",
        display: "flex",
        width: "100%"
      },
      children: /* @__PURE__ */ jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          width: "100%"
        },
        children: [/* @__PURE__ */ jsx("div", {
          style: {
            width: isCallbackVisible ? "75%" : "100%"
          },
          children: /* @__PURE__ */ jsx(NMRium, {
            data,
            onDataChange: changeHandler,
            workspace: props.workspace || null
          })
        }), false]
      })
    })]
  });
}
export { View as default };
//# sourceMappingURL=View.afc3cce5.js.map
