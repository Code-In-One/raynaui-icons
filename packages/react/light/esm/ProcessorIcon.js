import * as React from "react";
function ProcessorIcon({
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
    d: "M8.95 7.5a2.2 2.2 0 0 0-2.2 2.2v4.6a2.2 2.2 0 0 0 2.2 2.2h6.6a2.2 2.2 0 0 0 2.2-2.2V9.7a2.2 2.2 0 0 0-2.2-2.2zm-.2 2.2c0-.11.09-.2.2-.2h6.6c.11 0 .2.09.2.2v4.6a.2.2 0 0 1-.2.2h-6.6a.2.2 0 0 1-.2-.2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.75 2a1 1 0 0 1 1 1v1.03a4 4 0 0 1 3.21 2.47h1.29a1 1 0 1 1 0 2h-1v1h1a1 1 0 1 1 0 2h-1v1h1a1 1 0 1 1 0 2h-1v1h1a1 1 0 1 1 0 2h-1.29a4.01 4.01 0 0 1-2.71 2.374V21a1 1 0 1 1-2 0v-1h-1v1a1 1 0 1 1-2 0v-1h-1v1a1 1 0 1 1-2 0v-1h-1v1a1 1 0 1 1-2 0v-1a4 4 0 0 1-3.71-2.5H2.25a1 1 0 1 1 0-2h1v-1h-1a1 1 0 1 1 0-2h1v-1h-1a1 1 0 1 1 0-2h1v-1h-1a1 1 0 0 1 0-2h1.29a4 4 0 0 1 3.21-2.469V3a1 1 0 0 1 2 0v1h1V3a1 1 0 1 1 2 0v1h1V3a1 1 0 1 1 2 0v1h1V3a1 1 0 0 1 1-1m2.5 14a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ProcessorIcon);
export default ForwardRef;