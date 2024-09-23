import * as React from "react";
function BatteryEmptyIcon({
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
    d: "M6.5 6h10.457a3 3 0 0 1 3 3 2.543 2.543 0 0 1 2.543 2.543v.914A2.543 2.543 0 0 1 19.957 15a3 3 0 0 1-3 3H6.5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BatteryEmptyIcon);
export default ForwardRef;