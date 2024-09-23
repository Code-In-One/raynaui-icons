import * as React from "react";
function Building2Icon({
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
    d: "M15.75 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM11.75 13a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M10.75 11a1 1 0 1 0 0-2h-1a1 1 0 0 0 0 2zM16.75 13a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M10.75 17a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM16.75 16a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.742 4.415a2 2 0 0 0-1.984 0l-6 3.429A2 2 0 0 0 4.75 9.58V19h-1.5a1 1 0 1 0 0 2h19a1 1 0 1 0 0-2h-1.5V9.58a2 2 0 0 0-1.008-1.736zM13.75 19v-1a1 1 0 1 0-2 0v1h-5V9.58l6-3.428 6 3.428V19z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Building2Icon);
export default ForwardRef;