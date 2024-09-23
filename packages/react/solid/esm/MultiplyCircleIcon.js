import * as React from "react";
function MultiplyCircleIcon({
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
    fillRule: "evenodd",
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M10.586 9.172a1 1 0 0 0-1.414 1.414L10.586 12l-1.414 1.414a1 1 0 1 0 1.414 1.414L12 13.414l1.414 1.414a1 1 0 1 0 1.414-1.414L13.414 12l1.414-1.414a1 1 0 0 0-1.414-1.414L12 10.586z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MultiplyCircleIcon);
export default ForwardRef;