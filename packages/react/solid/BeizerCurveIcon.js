const React = require("react");
function BeizerCurveIcon({
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
    d: "M11.5 6a1 1 0 0 0-1 1H6.232a2 2 0 1 0 0 2h1.904A10 10 0 0 0 2.5 18v1a1 1 0 1 0 2 0v-1a8 8 0 1 1 16 0v1a1 1 0 1 0 2 0v-1a10 10 0 0 0-5.636-9h2.904A2 2 0 0 0 23.5 8a2 2 0 0 0-3.732-1H14.5a1 1 0 0 0-1-1z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BeizerCurveIcon);
module.exports = ForwardRef;