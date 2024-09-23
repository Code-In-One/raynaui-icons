const React = require("react");
function CornerUpLeftIcon({
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
    d: "M3.543 8.207a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L6.664 6.5H8.25c7.732 0 14 6.268 14 14a1 1 0 1 1-2 0c0-6.627-5.373-12-12-12H6.664l2.293 2.293a1 1 0 1 1-1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CornerUpLeftIcon);
module.exports = ForwardRef;