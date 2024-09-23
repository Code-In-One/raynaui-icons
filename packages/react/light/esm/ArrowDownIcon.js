import * as React from "react";
function ArrowDownIcon({
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
    d: "m17.457 17.707-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l2.293 2.293V3a1 1 0 1 1 2 0v15.586l2.293-2.293a1 1 0 0 1 1.414 1.414"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowDownIcon);
export default ForwardRef;