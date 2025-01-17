import { j as jsxRuntimeExports, C as Canvas } from "./index-BzCn9i11.js";
function Three() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", {
          args: [2, 2, 2]
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", {})]
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", {
        intensity: 0.1
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", {
        color: "yellow",
        position: [10, 10, 10]
      })]
    })
  });
}
export {
  Three as default
};
