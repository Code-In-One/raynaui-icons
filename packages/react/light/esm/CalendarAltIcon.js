import * as React from "react";
function CalendarAltIcon({
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
    d: "M5.25 17.5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1M16.25 16.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.25 1.5a1 1 0 0 1 1 1v1h6v-1a1 1 0 1 1 2 0v1h1a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-11a4 4 0 0 1 4-4h1v-1a1 1 0 0 1 1-1m7 4a1 1 0 1 0 2 0h1a2 2 0 0 1 2 2V8h-16v-.5a2 2 0 0 1 2-2h1a1 1 0 0 0 2 0zm5 4.5h-16v8.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CalendarAltIcon);
export default ForwardRef;