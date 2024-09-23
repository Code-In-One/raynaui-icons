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
    fillRule: "evenodd",
    d: "M8.25 8.285V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2a2 2 0 0 1 1.744 1.02 2 2 0 0 1 .903-.494l1.942-.476a2 2 0 0 1 2.42 1.466l2.991 12.2V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2a2 2 0 0 1-1.744-1.02 2 2 0 0 1-.903.494l-1.942.476a2 2 0 0 1-2.42-1.466zm1.123-3.817 1.943-.476 3.81 15.54-1.942.476zM6.25 4h-2v16h2zm14 0h-2v16h2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BooksIcon);
export default ForwardRef;