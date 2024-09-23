const React = require("react");
function StrikethroughIcon({
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
    d: "M18.25 3h-8.5a4.5 4.5 0 0 0-4.307 5.806M13.75 12a4.5 4.5 0 1 1 0 9h-8.5M3.25 12h18"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(StrikethroughIcon);
module.exports = ForwardRef;