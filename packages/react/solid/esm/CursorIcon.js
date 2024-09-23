import * as React from "react";
function CursorIcon({
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
    d: "M5.522 4.29 8.68 20.12c.193.966 1.523 1.206 2.07.372l2.686-4.103c.2-.305.543-.494.917-.507l5.054-.178c1.027-.036 1.476-1.259.698-1.902L7.372 3.267c-.811-.67-2.052.015-1.85 1.024"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CursorIcon);
export default ForwardRef;