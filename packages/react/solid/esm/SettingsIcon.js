import * as React from "react";
function SettingsIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M15 4a3 3 0 0 0-2.834 2.014A1 1 0 0 0 12 6H3a1 1 0 0 0 0 2h9q.084 0 .166-.014a3.001 3.001 0 0 0 5.668 0Q17.915 8 18 8h3a1 1 0 1 0 0-2h-3q-.085 0-.166.014A3 3 0 0 0 15 4M6.166 16.014A1 1 0 0 0 6 16H3a1 1 0 1 0 0 2h3q.085 0 .166-.014a3.001 3.001 0 0 0 5.668 0q.081.015.166.014h9a1 1 0 1 0 0-2h-9q-.084 0-.166.014a3.001 3.001 0 0 0-5.668 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SettingsIcon);
export default ForwardRef;