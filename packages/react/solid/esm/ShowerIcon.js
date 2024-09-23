import * as React from "react";
function ShowerIcon({
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
    d: "M9.5 7a3 3 0 0 1 5.975-.39l-1.682 1.683a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0-1.414-1.414L17.084 5A5.001 5.001 0 0 0 7.5 7v13a1 1 0 1 0 2 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ShowerIcon);
export default ForwardRef;