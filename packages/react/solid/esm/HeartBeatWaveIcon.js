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
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M2.5 12h1.323a1 1 0 0 0 .928-.629l2.82-7.05c.336-.838 1.522-.838 1.857 0l6.143 15.358c.336.838 1.522.838 1.858 0l2.82-7.05a1 1 0 0 1 .928-.629H22.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HeartBeatWaveIcon);
export default ForwardRef;