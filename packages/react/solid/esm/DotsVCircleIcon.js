import * as React from "react";
function DotsVCircleIcon({
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
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-1.25-9a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M12 8.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-1.25 7.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DotsVCircleIcon);
export default ForwardRef;