import * as React from "react";
function CropIcon({
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
    d: "M7.5 2a1 1 0 0 0-2 0v3h-2a1 1 0 0 0 0 2h2v10a2 2 0 0 0 2 2h10v3a1 1 0 1 0 2 0v-3h2a1 1 0 1 0 0-2h-2V7a2 2 0 0 0-2-2h-10zm0 15V7h10v10z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CropIcon);
export default ForwardRef;