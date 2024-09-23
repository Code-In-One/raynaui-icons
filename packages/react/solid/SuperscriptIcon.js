const React = require("react");
function SuperscriptIcon({
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
    d: "m3.5 5 5.606 8.154m0 0L14.5 21m-5.394-7.846L14.5 5m-5.394 8.154L3.916 21M17.5 7V5a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SuperscriptIcon);
module.exports = ForwardRef;