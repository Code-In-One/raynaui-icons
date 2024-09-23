import * as React from "react";
function RadioSelectedIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("circle", {
    cx: 12.25,
    cy: 12,
    r: 9,
    stroke: "#000",
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12.25,
    cy: 12,
    r: 5,
    stroke: "#000",
    strokeWidth: 2
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RadioSelectedIcon);
export default ForwardRef;