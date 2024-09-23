import * as React from "react";
function SunIcon({
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
    d: "M13.5 2a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0zM4.34 6.134a1 1 0 0 0-1 1.732l1.299.75a1 1 0 0 0 1-1.732zM18.5 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0M18.994 15.5a1 1 0 0 1 1.366-.366l1.299.75a1 1 0 1 1-1 1.732l-1.3-.75a1 1 0 0 1-.365-1.366M19.36 7.134a1 1 0 1 0 1 1.732l1.299-.75a1 1 0 1 0-1-1.732zM12.5 19a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V20a1 1 0 0 1 1-1M2.974 17.5a1 1 0 0 1 .366-1.366l1.299-.75a1 1 0 1 1 1 1.732l-1.3.75a1 1 0 0 1-1.365-.366"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SunIcon);
export default ForwardRef;