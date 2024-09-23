import * as React from "react";
function VolumeLowIcon({
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
    d: "m5.076 6.632 3.75-.536a3 3 0 0 0 1.24-.473l3.88-2.586a1 1 0 0 1 1.554.832v16.263a1 1 0 0 1-1.555.832l-3.879-2.586a3 3 0 0 0-1.24-.474l-3.75-.536a3 3 0 0 1-2.576-2.97V9.602a3 3 0 0 1 2.576-2.97M17.661 13.31a1 1 0 0 0 .678 1.88c1.475-.53 2.161-1.913 2.161-3.19s-.686-2.66-2.161-3.19a1 1 0 0 0-.678 1.88c.525.19.839.697.839 1.31s-.314 1.12-.839 1.31"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(VolumeLowIcon);
export default ForwardRef;