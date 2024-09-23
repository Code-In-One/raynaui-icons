import * as React from "react";
function PaintBucketIcon({
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
    d: "M4.341 8.156 14.138 2.5a1 1 0 0 1 1.366.366l5.5 9.526a3 3 0 0 1-1.098 4.098l-5.618 3.244a3 3 0 0 1-4.098-1.099l-4.234-7.334a3 3 0 0 0-1.04-1.064l-.594-.36a1 1 0 0 1 .02-1.721M3.525 14.423l-.77 2.308a1.311 1.311 0 1 0 2.488 0l-.77-2.308a.5.5 0 0 0-.948 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PaintBucketIcon);
export default ForwardRef;