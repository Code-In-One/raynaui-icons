import * as React from "react";
function ArrowUpRightIcon({
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
    d: "M13.457 4.636a1 1 0 1 0 0 2h3.242L5.68 17.656a1 1 0 1 0 1.414 1.415l11.02-11.02v3.242a1 1 0 1 0 2 0V5.636a1 1 0 0 0-1-1z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowUpRightIcon);
export default ForwardRef;