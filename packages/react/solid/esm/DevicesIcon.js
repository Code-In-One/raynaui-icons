import * as React from "react";
function DevicesIcon({
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
    d: "M5.5 2.9h10a3 3 0 0 1 3 3v2.35h-3.25a2.5 2.5 0 0 0-2.5 2.5v4.95H11.5v1.4a1 1 0 1 1 0 2H7.3a1 1 0 1 1 0-2h2.2v-1.4h-4a3 3 0 0 1-3-3V5.9a3 3 0 0 1 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 9h.134a1 1 0 0 0 .866.5h2a1 1 0 0 0 .866-.5h.134a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DevicesIcon);
export default ForwardRef;