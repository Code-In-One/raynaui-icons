const React = require("react");
function ChevronUpIcon({
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
    d: "M11.38 7.917a2 2 0 0 1 2.74 0l7.815 7.355a1 1 0 0 1-1.37 1.456L12.75 9.373l-7.815 7.355a1 1 0 0 1-1.37-1.456z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChevronUpIcon);
module.exports = ForwardRef;