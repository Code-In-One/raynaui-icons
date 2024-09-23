import * as React from "react";
function Box1Icon({
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
    d: "M5.5 4h14a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2M4.5 10.5v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Box1Icon);
export default ForwardRef;