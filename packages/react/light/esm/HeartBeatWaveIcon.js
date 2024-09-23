import * as React from "react";
function HeartBeatWaveIcon({
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
    d: "M10.607 3.95c-.67-1.676-3.043-1.676-3.714 0L4.073 11H2.75a1 1 0 0 0 0 2h1.323a2 2 0 0 0 1.857-1.257l2.82-7.05 6.143 15.357c.67 1.677 3.043 1.677 3.714 0l2.82-7.05h1.323a1 1 0 1 0 0-2h-1.323a2 2 0 0 0-1.857 1.257l-2.82 7.05z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HeartBeatWaveIcon);
export default ForwardRef;