import * as React from "react";
function UndoIcon({
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
    d: "M3.293 8.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L6.414 7H15.5a7 7 0 1 1 0 14H6a1 1 0 1 1 0-2h9.5a5 5 0 0 0 0-10H6.414l2.293 2.293a1 1 0 1 1-1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UndoIcon);
export default ForwardRef;