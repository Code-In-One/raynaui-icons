import * as React from "react";
function HomeIcon({
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
    fillRule: "evenodd",
    d: "M14.545 2.385a4 4 0 0 0-4.588 0L3.079 7.2a4 4 0 0 0-1.694 3.584l.705 9.165a3 3 0 0 0 3.415 2.74l3.17-.453a3 3 0 0 0 2.576-2.97V18a1 1 0 1 1 2 0v1.265a3 3 0 0 0 2.575 2.97l3.17.453a3 3 0 0 0 3.415-2.74l.705-9.165A4 4 0 0 0 21.423 7.2zm-3.441 1.639a2 2 0 0 1 2.294 0l6.877 4.814a2 2 0 0 1 .847 1.792l-.705 9.165a1 1 0 0 1-1.138.913l-3.17-.453a1 1 0 0 1-.858-.99V18a3 3 0 0 0-6 0v1.265a1 1 0 0 1-.859.99l-3.17.453a1 1 0 0 1-1.138-.913l-.705-9.165a2 2 0 0 1 .847-1.792z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HomeIcon);
export default ForwardRef;