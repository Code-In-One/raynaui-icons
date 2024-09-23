import * as React from "react";
function PcIcon({
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
    d: "M5.5 2.5h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6v2h3a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h3v-2h-6a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PcIcon);
export default ForwardRef;