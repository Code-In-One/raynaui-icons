import * as React from "react";
function Building3Icon({
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
    d: "M16.75 14a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M15.75 12a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM11.75 14a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M10.75 12a1 1 0 1 0 0-2h-1a1 1 0 0 0 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.86 4.538a2 2 0 0 0-2.22 0l-5 3.333a2 2 0 0 0-.89 1.664V19h-1a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1V9.535a2 2 0 0 0-.89-1.664zM13.75 19v-2a1 1 0 1 0-2 0v2h-4V9.535l5-3.333 5 3.333V19z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Building3Icon);
export default ForwardRef;