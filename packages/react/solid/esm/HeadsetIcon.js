import * as React from "react";
function HeadsetIcon({
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
    d: "M2.5 13c0-5.523 4.477-10 10-10s10 4.477 10 10v5a1 1 0 0 1-1.11.994 1.59 1.59 0 0 1-1.87.957c-1.245.853-3.067 1.549-5.52 1.549a1 1 0 1 1 0-2c2.017 0 3.42-.553 4.323-1.155V16.24c0-1.296 1.24-1.835 2.177-1.501V13a8 8 0 1 0-16 0v1.748c.937-.333 2.176.208 2.176 1.503v2.16a1.588 1.588 0 0 1-3.066.583A1 1 0 0 1 2.5 18z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HeadsetIcon);
export default ForwardRef;