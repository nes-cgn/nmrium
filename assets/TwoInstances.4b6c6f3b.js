import { N as NMRium } from "./index.887d69bb.js";
import { j as jsxs, a as jsx } from "./vendor.2184168d.js";
const data1 = {
  spectra: [{
    data: {},
    source: {
      original: [],
      jcamp: null,
      jcampURL: "./data/50-78-2/1h.dx"
    },
    display: {
      name: "1H",
      isVisible: true,
      isPeaksMarkersVisible: true,
      isRealSpectrumVisible: true
    }
  }]
};
const data2 = {
  spectra: [{
    data: {},
    source: {
      original: [],
      jcamp: null,
      jcampURL: "./data/ethylbenzene/cosy.jdx"
    },
    display: {
      name: "1H",
      isVisible: true,
      isPeaksMarkersVisible: true,
      isRealSpectrumVisible: true
    }
  }]
};
function TwoInstances(props) {
  const {
    path
  } = props;
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
    }), /* @__PURE__ */ jsx("div", {
      style: {
        flex: 1
      },
      children: /* @__PURE__ */ jsx(NMRium, {
        data: data1
      }, "1")
    }), /* @__PURE__ */ jsx("div", {
      style: {
        flex: 1
      },
      children: /* @__PURE__ */ jsx(NMRium, {
        data: data2
      }, "2")
    })]
  });
}
export { TwoInstances as default };
//# sourceMappingURL=TwoInstances.4b6c6f3b.js.map
