import * as React from "react";
function MinusCircleIcon({
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
    d: "M9.25 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.25 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m-8 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MinusCircleIcon);
export default ForwardRef;