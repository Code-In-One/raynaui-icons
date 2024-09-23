import * as React from "react";
function CornerLeftDownIcon({
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
    d: "M8.957 21.207a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l2.293 2.293V16.5c0-7.732 6.268-14 14-14a1 1 0 1 1 0 2c-6.627 0-12 5.373-12 12v1.586l2.293-2.293a1 1 0 0 1 1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CornerLeftDownIcon);
export default ForwardRef;