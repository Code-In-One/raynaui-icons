import * as React from "react";
function CornerDownLeftIcon({
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
    d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM4.293 14.793a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L7.414 16.5H9c6.627 0 12-5.373 12-12a1 1 0 1 0-2 0c0 5.523-4.477 10-10 10H7.414l2.293-2.293a1 1 0 0 0-1.414-1.414z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CornerDownLeftIcon);
export default ForwardRef;