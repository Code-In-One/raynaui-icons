import * as React from "react";
function SnoozeIcon({
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
    d: "M5.25 3a1 1 0 0 0 0 2h2.865L4.482 9.36A1 1 0 0 0 5.25 11h5a1 1 0 1 0 0-2H7.385l3.633-4.36A1 1 0 0 0 10.25 3zM12.25 11a1 1 0 1 0 0 2h4.796l-5.549 6.342A1 1 0 0 0 12.25 21h7a1 1 0 1 0 0-2h-4.796l5.549-6.341A1 1 0 0 0 19.25 11z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SnoozeIcon);
export default ForwardRef;