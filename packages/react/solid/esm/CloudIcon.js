import * as React from "react";
function CloudIcon({
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
    d: "M7.5 20a5 5 0 0 1-1.94-9.61 6.5 6.5 0 0 1 12.83-2.086A6 6 0 0 1 16.5 20z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CloudIcon);
export default ForwardRef;