import * as React from "react";
function BooksIcon({
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
    d: "m9.385 3.497 1.943-.476a1 1 0 0 1 1.209.733l3.81 15.54a1 1 0 0 1-.732 1.209l-1.943.476a1 1 0 0 1-1.209-.733l-3.81-15.54a1 1 0 0 1 .732-1.209M6.5 3h-2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M20.5 3h-2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BooksIcon);
export default ForwardRef;