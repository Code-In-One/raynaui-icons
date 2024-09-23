const React = require("react");
function TextIcon({
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
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3.5 6V5a2 2 0 0 1 2-2h7m9 3V5a2 2 0 0 0-2-2h-7m0 0v18m2 0h-4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TextIcon);
module.exports = ForwardRef;