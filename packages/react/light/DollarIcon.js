const React = require("react");
function DollarIcon({
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
    d: "M13.75 2a1 1 0 1 0-2 0v1a5 5 0 0 0 0 10v6a3 3 0 0 1-3-3 1 1 0 1 0-2 0 5 5 0 0 0 5 5v1a1 1 0 1 0 2 0v-1a5 5 0 0 0 0-10V5a3 3 0 0 1 3 3 1 1 0 1 0 2 0 5 5 0 0 0-5-5zm-2 3a3 3 0 1 0 0 6zm2 8v6a3 3 0 1 0 0-6",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DollarIcon);
module.exports = ForwardRef;