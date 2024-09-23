import * as React from "react";
function SimIcon({
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
    d: "M4.5 18V6a3 3 0 0 1 3-3h7.014a3 3 0 0 1 2.052.811l2.986 2.8A3 3 0 0 1 20.5 8.8V18a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3M9 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SimIcon);
export default ForwardRef;