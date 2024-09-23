const React = require("react");
function MinusIcon({
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
    d: "M4 11a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MinusIcon);
module.exports = ForwardRef;