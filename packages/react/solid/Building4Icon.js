const React = require("react");
function Building4Icon({
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
    d: "M8.5 6V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-1a1 1 0 1 0 0 2h1v1h-2a1 1 0 1 0 0 2h2v1h-1a1 1 0 1 0 0 2h1v1h-2a1 1 0 1 0 0 2h2v2h4a1 1 0 1 1 0 2h-16a1 1 0 1 1 0-2h4v-2h1a1 1 0 1 0 0-2h-1v-1h2a1 1 0 1 0 0-2h-2v-1h1a1 1 0 1 0 0-2h-1V8h2a1 1 0 1 0 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Building4Icon);
module.exports = ForwardRef;