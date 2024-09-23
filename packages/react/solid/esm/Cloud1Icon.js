import * as React from "react";
function Cloud1Icon({
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
    d: "M2.5 15a5 5 0 0 0 5 5h9a6 6 0 0 0 1.89-11.696A6.5 6.5 0 0 0 5.56 10.39 5 5 0 0 0 2.5 15"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cloud1Icon);
export default ForwardRef;