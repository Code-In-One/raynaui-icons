import * as React from "react";
function ChevronLeftIcon({
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
    d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm3.299 8.698a2 2 0 0 0 0 2.604l5.442 6.349a1 1 0 0 0 1.518-1.302L10.317 12l5.442-6.35a1 1 0 0 0-1.518-1.3z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChevronLeftIcon);
export default ForwardRef;