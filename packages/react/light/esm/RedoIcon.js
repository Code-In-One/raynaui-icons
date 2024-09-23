import * as React from "react";
function RedoIcon({
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
    d: "M22.207 8.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L19.086 7H10a7 7 0 1 0 0 14h9.5a1 1 0 1 0 0-2H10a5 5 0 0 1 0-10h9.086l-2.293 2.293a1 1 0 0 0 1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RedoIcon);
export default ForwardRef;