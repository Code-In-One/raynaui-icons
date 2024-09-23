import * as React from "react";
function BarChartVIcon({
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
    d: "M9 12H5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 5 21h4a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 9 12M20 3h-4a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 16 21h4a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20 3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BarChartVIcon);
export default ForwardRef;