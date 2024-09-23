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
    fillRule: "evenodd",
    d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zM21 12a1 1 0 0 1-.293.707l-5 5a1 1 0 0 1-1.414-1.414L18.586 12l-4.293-4.293a1 1 0 0 1 1.414-1.414l5 5A1 1 0 0 1 21 12m-16.707.707a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L6.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChevronHIcon);
export default ForwardRef;