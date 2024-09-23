import * as React from "react";
function DotsVIcon({
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
    d: "M13.75 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.75 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12.25 21.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DotsVIcon);
export default ForwardRef;