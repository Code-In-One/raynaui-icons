import * as React from "react";
function CheckCircleIcon({
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
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m3.675-10.262a1 1 0 0 0-1.35-1.475l-3.692 3.381-.958-.877a1 1 0 1 0-1.35 1.475l1.632 1.495a1 1 0 0 0 1.35 0z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CheckCircleIcon);
export default ForwardRef;