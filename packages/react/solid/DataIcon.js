const React = require("react");
function DataIcon({
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
    d: "M11.5 6.792a2.5 2.5 0 1 1 2 0V11h4a4 4 0 0 1 4 4v1.208a2.5 2.5 0 1 1-2 0V15a2 2 0 0 0-2-2h-4v3.208a2.5 2.5 0 1 1-2 0V13h-4a2 2 0 0 0-2 2v1.208a2.5 2.5 0 1 1-2 0V15a4 4 0 0 1 4-4h4z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DataIcon);
module.exports = ForwardRef;