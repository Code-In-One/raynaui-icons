import * as React from "react";
function ChevronHIcon({
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
    d: "M21.957 13.207a1 1 0 0 0 0-1.414l-6-6a1 1 0 1 0-1.414 1.414l5.293 5.293-5.293 5.293a1 1 0 0 0 1.414 1.414zM3.543 13.207a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L5.664 12.5l5.293 5.293a1 1 0 0 1-1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChevronHIcon);
export default ForwardRef;