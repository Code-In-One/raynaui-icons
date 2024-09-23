const React = require("react");
function WalletIcon({
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
    d: "M18.5 20h-12a3 3 0 0 1-3-3V6.225C3.5 4.996 4.496 4 5.725 4h6.789c.476 0 .87.74 1.25 1.55H6.5a1 1 0 0 0 0 2h8.489l.011.006h3.501a3 3 0 0 1 2.999 3V11h-2a3 3 0 1 0 0 6h2a3 3 0 0 1-3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.5 15v-2h-2a1 1 0 1 0 0 2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WalletIcon);
module.exports = ForwardRef;