import * as React from "react";
function ScissorIcon({
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
    d: "M16.415 3.403a1 1 0 1 0-1.83-.806L12.5 7.335l-2.085-4.738a1 1 0 1 0-1.83.806l2.823 6.415L9.1 15.06a3 3 0 1 0 1.71 1.026 1 1 0 0 0 .104-.183L12.5 12.3l1.585 3.602a1 1 0 0 0 .105.183 3 3 0 1 0 1.71-1.026l-2.308-5.242z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ScissorIcon);
export default ForwardRef;