import * as React from "react";
function DotsHIcon({
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
    d: "M2.75 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M12.25 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M20.25 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DotsHIcon);
export default ForwardRef;