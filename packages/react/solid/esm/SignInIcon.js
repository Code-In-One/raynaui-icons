import * as React from "react";
function SignInIcon({
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
    d: "M6 3h1.5v6.672l-.914.914a2 2 0 0 0 0 2.828l.914.914V21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.293 12.707a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L10.414 11H22a1 1 0 1 1 0 2H10.414l2.293 2.293a1 1 0 0 1-1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SignInIcon);
export default ForwardRef;