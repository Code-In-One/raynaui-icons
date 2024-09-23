import * as React from "react";
function InfoHexagonIcon({
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
    d: "M10.494 1.873a3 3 0 0 1 3.01 0l3.253 1.887 3.26 1.873a3 3 0 0 1 1.505 2.607L21.514 12l.008 3.76a3 3 0 0 1-1.505 2.607l-3.26 1.873-3.252 1.887a3 3 0 0 1-3.011 0L7.242 20.24l-3.26-1.873a3 3 0 0 1-1.505-2.607L2.484 12l-.007-3.76a3 3 0 0 1 1.505-2.607l3.26-1.873zM11.999 6a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m-1.25 10.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(InfoHexagonIcon);
export default ForwardRef;