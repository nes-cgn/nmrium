import { r as react, e as jsxs, d as jsx } from "./vendor.2184168d.js";
import { N as NMRium } from "./index.b258714f.js";
function SingleView(props) {
  const [data, setData] = react.exports.useState();
  const {
    path
  } = props;
  react.exports.useEffect(() => {
    const _data = {
      spectra: [{
        source: {
          jcampURL: path
        }
      }]
    };
    if (_data) {
      setData(_data);
    } else {
      setData(void 0);
    }
  }, [path, props]);
  return /* @__PURE__ */ jsxs("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      marginLeft: 30
    },
    children: [/* @__PURE__ */ jsx("h5", {
      style: {
        fontWeight: 700,
        fontSize: "1.5em",
        lineHeight: "1.4em",
        marginBottom: "15px"
      },
      children: "Display and process 1D NMR spectra from a JCAMP-DX file"
    }), path && /* @__PURE__ */ jsx("p", {
      style: {
        marginTop: "-10px",
        marginBottom: "1rem",
        fontWeight: 400,
        color: "#9a9a9a",
        fontSize: "0.7142em"
      },
      children: path
    }), /* @__PURE__ */ jsx(NMRium, {
      data
    })]
  });
}
export { SingleView as default };
//# sourceMappingURL=SingleView.72e0b025.js.map
