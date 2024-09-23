import * as React from "react";
function SwitchVerticalIcon({
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
    d: "M7.043 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L8.75 5.414V21a1 1 0 1 1-2 0V5.414L5.457 6.707a1 1 0 0 1-1.414-1.414zM14.043 18.707l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414l-1.293 1.293V3a1 1 0 1 0-2 0v15.586l-1.293-1.293a1 1 0 0 0-1.414 1.414"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SwitchVerticalIcon);
export default ForwardRef;