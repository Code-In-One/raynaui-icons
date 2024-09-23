const React = require("react");
function CornerUpRightIcon({
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
    d: "M21.957 8.207a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L18.836 6.5H17.25c-7.732 0-14 6.268-14 14a1 1 0 1 0 2 0c0-6.627 5.373-12 12-12h1.586l-2.293 2.293a1 1 0 0 0 1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CornerUpRightIcon);
module.exports = ForwardRef;