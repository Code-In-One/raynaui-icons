import * as React from "react";
function MoveIcon({
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
    d: "M13.457 2.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414l1.293-1.293V11H6.164l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L6.164 13h5.586v5.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414l-1.293 1.293V13h5.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L19.336 11H13.75V5.414l1.293 1.293a1 1 0 1 0 1.414-1.414z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.457 2.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414l1.293-1.293V11H6.164l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L6.164 13h5.586v5.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414l-1.293 1.293V13h5.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L19.336 11H13.75V5.414l1.293 1.293a1 1 0 1 0 1.414-1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MoveIcon);
export default ForwardRef;