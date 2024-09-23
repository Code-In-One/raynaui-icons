import * as React from "react";
function TerminalIcon({
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
    d: "M18.5 4h-12a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M6.652 8.47a1 1 0 0 0 .318 1.378L9.613 11.5 6.97 13.152a1 1 0 0 0 1.06 1.696l2.643-1.652a2 2 0 0 0 0-3.392L8.03 8.152a1 1 0 0 0-1.378.318M13.5 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TerminalIcon);
export default ForwardRef;