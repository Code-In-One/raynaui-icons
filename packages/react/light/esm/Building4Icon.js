import * as React from "react";
function Building4Icon({
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
    d: "M7.75 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14h3a1 1 0 1 1 0 2h-16a1 1 0 1 1 0-2h3zm8 10h-2a1 1 0 1 0 0 2h2v2h-6v-2h1a1 1 0 1 0 0-2h-1v-1h2a1 1 0 1 0 0-2h-2v-1h1a1 1 0 1 0 0-2h-1V8h2a1 1 0 1 0 0-2h-2V5h6v1h-1a1 1 0 1 0 0 2h1v1h-2a1 1 0 1 0 0 2h2v1h-1a1 1 0 1 0 0 2h1z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Building4Icon);
export default ForwardRef;