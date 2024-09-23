const React = require("react");
function CornerIcon({
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
    d: "M5.75 4a1 1 0 0 0-2 0v11a6 6 0 0 0 6 6h11a1 1 0 1 0 0-2h-11a4 4 0 0 1-4-4z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CornerIcon);
module.exports = ForwardRef;