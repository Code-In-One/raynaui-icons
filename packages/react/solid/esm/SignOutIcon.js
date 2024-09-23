import * as React from "react";
function SignOutIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h1.5v7.063a2 2 0 0 0 0 3.874V21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.707 12.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L19.586 11H8a1 1 0 1 0 0 2h11.586l-2.293 2.293a1 1 0 0 0 1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SignOutIcon);
export default ForwardRef;