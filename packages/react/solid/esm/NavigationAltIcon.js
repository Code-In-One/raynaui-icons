import * as React from "react";
function NavigationAltIcon({
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
    d: "M18.89 3.546 4.592 8.97c-1.205.457-1.31 2.121-.172 2.727l4.983 2.65c.264.14.48.357.62.62l2.65 4.984c.606 1.138 2.27 1.032 2.727-.173l5.423-14.296c.458-1.21-.726-2.393-1.935-1.935"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(NavigationAltIcon);
export default ForwardRef;