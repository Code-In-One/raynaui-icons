const React = require("react");
function LineHeightIcon({
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
    d: "M3.25 3.5h18M13.25 12h8M3.25 20.5h18M5.25 6l2 1.91M5.25 6l-2 1.91m2-1.91v12m0 0-2-1.91m2 1.91 2-1.91"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LineHeightIcon);
module.exports = ForwardRef;