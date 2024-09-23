import * as React from "react";
function RotateLeftIcon({
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
    d: "M7.35 4a1 1 0 1 0-2 0v3.2a1 1 0 0 0 1 1h3.2a1 1 0 1 0 0-2h-.72A7 7 0 1 1 5.75 12a1 1 0 1 0-2 0 9 9 0 1 0 3.6-7.2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RotateLeftIcon);
export default ForwardRef;