import * as React from "react";
function RowIcon({
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
    d: "M4.75 1.5A2.5 2.5 0 0 0 2.25 4v5a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5V4a2.5 2.5 0 0 0-2.5-2.5zM4.25 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5zM22.25 15a2.5 2.5 0 0 0-2.5-2.5h-15a2.5 2.5 0 0 0-2.5 2.5v5a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5zm-2.5-.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RowIcon);
export default ForwardRef;