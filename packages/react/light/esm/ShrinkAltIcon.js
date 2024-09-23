import * as React from "react";
function ShrinkAltIcon({
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
    d: "M21.528 4.636a1 1 0 0 0-1.414-1.414l-2.536 2.535V3.93a1 1 0 1 0-2 0v4.243a1 1 0 0 0 1 1h4.243a1 1 0 1 0 0-2h-1.829zM9.921 15.829a1 1 0 0 0-1-1H4.68a1 1 0 1 0 0 2h1.828l-2.535 2.535a1 1 0 1 0 1.414 1.414l2.535-2.535v1.828a1 1 0 1 0 2 0zM5.386 3.222a1 1 0 0 0-1.414 1.414l2.535 2.536H4.68a1 1 0 1 0 0 2H8.92a1 1 0 0 0 1-1V3.929a1 1 0 0 0-2 0v1.828zM16.578 14.829a1 1 0 0 0-1 1v4.242a1 1 0 1 0 2 0v-1.828l2.536 2.535a1 1 0 1 0 1.414-1.414l-2.536-2.536h1.829a1 1 0 0 0 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ShrinkAltIcon);
export default ForwardRef;