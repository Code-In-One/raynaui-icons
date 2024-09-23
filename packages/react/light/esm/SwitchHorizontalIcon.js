import * as React from "react";
function SwitchHorizontalIcon({
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
    d: "M22.457 7.707a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L19.336 6H3.75a1 1 0 0 0 0 2h15.586l-1.293 1.293a1 1 0 0 0 1.414 1.414zM3.043 17.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L6.164 16H21.75a1 1 0 1 1 0 2H6.164l1.293 1.293a1 1 0 1 1-1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SwitchHorizontalIcon);
export default ForwardRef;