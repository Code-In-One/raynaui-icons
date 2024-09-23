import * as React from "react";
function BoldIcon({
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
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 21H5.639a.14.14 0 0 1-.139-.139V12H15a4.5 4.5 0 1 1 0 9M14 12H5.629a.13.13 0 0 1-.129-.129V3H14a4.5 4.5 0 1 1 0 9"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BoldIcon);
export default ForwardRef;