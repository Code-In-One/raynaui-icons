const React = require("react");
function ShrinkIcon({
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
    d: "M6.75 10a4 4 0 0 0 4-4V4a1 1 0 1 0-2 0v2a2 2 0 0 1-2 2h-2a1 1 0 0 0 0 2zM18.75 10a4 4 0 0 1-4-4V4a1 1 0 1 1 2 0v2a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2zM10.75 18a4 4 0 0 0-4-4h-2a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v2a1 1 0 1 0 2 0zM18.75 14a4 4 0 0 0-4 4v2a1 1 0 1 0 2 0v-2a2 2 0 0 1 2-2h2a1 1 0 1 0 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ShrinkIcon);
module.exports = ForwardRef;