const React = require("react");
function RotateRightIcon({
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
    d: "M18.15 4a1 1 0 1 1 2 0v3.2a1 1 0 0 1-1 1h-3.2a1 1 0 1 1 0-2h.72a7 7 0 1 0 3.08 5.8 1 1 0 1 1 2 0 9 9 0 1 1-3.6-7.2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RotateRightIcon);
module.exports = ForwardRef;