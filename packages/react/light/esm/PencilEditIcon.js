import * as React from "react";
function PencilEditIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M20.846 2.91a3.45 3.45 0 0 0-4.876 0l-8.526 8.525a4 4 0 0 0-1.131 2.263l-.247 1.73a2 2 0 0 0 2.262 2.262l1.73-.247a4 4 0 0 0 2.263-1.131l8.525-8.526a3.45 3.45 0 0 0 0-4.876m-3.253 1.24a1.449 1.449 0 0 1 2.012 2.013zm-1.432 1.397 2.048 2.048-7.303 7.303a2 2 0 0 1-1.131.565l-1.73.247.248-1.729a2 2 0 0 1 .565-1.131z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.25 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a1 1 0 1 0-2 0v6a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.684a1 1 0 1 0 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PencilEditIcon);
export default ForwardRef;