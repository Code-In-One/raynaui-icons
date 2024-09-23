import * as React from "react";
function PrinterIcon({
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
    d: "M6.25 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2M9.75 15.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M10.75 17.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h1a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-1v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2h-1a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h1zm8 0v1h-6V4zm-11 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2h-1a2 2 0 0 1-2-2zm5 5h6v6h-6z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PrinterIcon);
export default ForwardRef;