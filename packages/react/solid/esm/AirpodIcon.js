import * as React from "react";
function AirpodIcon({
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
    d: "M4 6.148v.588c0 1.06.45 2.069 1.237 2.777L6 10.2a6.04 6.04 0 0 1 2 4.49v4.81a1.5 1.5 0 0 0 3 0V7.86a4.86 4.86 0 0 0-.611-2.36l-.49-.88A3.148 3.148 0 0 0 4 6.147m17 0v.588c0 1.06-.45 2.069-1.237 2.777L19 10.2a6.04 6.04 0 0 0-2 4.49v4.81a1.5 1.5 0 0 1-3 0V7.86c0-.827.21-1.639.611-2.36l.49-.88A3.148 3.148 0 0 1 21 6.147",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AirpodIcon);
export default ForwardRef;