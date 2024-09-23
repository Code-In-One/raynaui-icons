const React = require("react");
function CoinsIcon({
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
    fillRule: "evenodd",
    d: "M9.325 9.525a7 7 0 1 1 5.9 5.9q.025.285.025.575a6.5 6.5 0 1 1-5.925-6.475M11.25 8.5a5 5 0 1 1 3.383 4.733 6.53 6.53 0 0 0-3.116-3.116A5 5 0 0 1 11.25 8.5m-7 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CoinsIcon);
module.exports = ForwardRef;