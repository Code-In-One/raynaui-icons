import * as React from "react";
function Building6Icon({
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
    d: "M7.5 19V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v14h3a1 1 0 1 1 0 2h-16a1 1 0 1 1 0-2zM11 8a1 1 0 1 0 0-2h-1a1 1 0 0 0 0 2zm5 2a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1m-5 4a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zm5-7a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1m-5 4a1 1 0 1 0 0-2h-1a1 1 0 0 0 0 2zm5 2a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1m-5 4a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zm5-1a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Building6Icon);
export default ForwardRef;