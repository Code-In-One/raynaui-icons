import * as React from "react";
function BankIcon({
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
    d: "M13.383 2.157a2 2 0 0 0-1.265 0l-8 2.666A2 2 0 0 0 2.75 6.721V9a2 2 0 0 0 2 2h1v5h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1v-5h1a2 2 0 0 0 2-2V6.72a2 2 0 0 0-1.367-1.897zM17.75 16v-5h-2v5zm-4 0v-5h-2v5zm-4 0v-5h-2v5zm-5 2v2h16v-2zm0-9V6.72l8-2.666 8 2.667V9z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BankIcon);
export default ForwardRef;