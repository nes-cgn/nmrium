import { r as react, e as jsxs, d as jsx } from "./vendor.930a5679.js";
import { N as NMRium } from "./index.3a5c1761.js";
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
function Teaching(props) {
  const [data, setData] = react.exports.useState();
  const {
    file,
    title,
    baseURL
  } = props;
  react.exports.useEffect(() => {
    if (file) {
      void loadData(file).then((d) => {
        const _d = JSON.parse(JSON.stringify(d).replace(/\.\/+?/g, baseURL));
        setData(_d);
      });
    } else {
      setData({});
    }
  }, [baseURL, file, props]);
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
      })]
    }), /* @__PURE__ */ jsx("div", {
      style: {
        height: "calc(100% - 75px)",
        display: "flex",
        width: "100%"
      },
      children: /* @__PURE__ */ jsx("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          width: "100%"
        },
        children: /* @__PURE__ */ jsx("div", {
          style: {
            width: "100%"
          },
          children: /* @__PURE__ */ jsx(NMRium, {
            data,
            preferences: {
              general: {
                disableMultipletAnalysis: true,
                hideSetSumFromMolecule: true
              },
              panels: {
                hideInformationPanel: true,
                hidePeaksPanel: true,
                hideIntegralsPanel: true,
                hideFiltersPanel: true,
                hideMultipleSpectraAnalysisPanel: true
              }
            }
          })
        })
      })
    })]
  });
}
export { Teaching as default };
//# sourceMappingURL=Teaching.3ac7e4e3.js.map
