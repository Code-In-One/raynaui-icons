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
    fillRule: "evenodd",
    d: "M6.25 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10.457a4 4 0 0 0 4-4v-.015a1.77 1.77 0 0 0 1.543-1.756V10.77c0-.9-.672-1.644-1.543-1.756V9a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h10.457a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6.25a2 2 0 0 1-2-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BatteryEmptyIcon);
export default ForwardRef;