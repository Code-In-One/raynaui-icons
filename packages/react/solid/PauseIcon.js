const React = require("react");
function PauseIcon({
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
    d: "M5.5 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3M16.5 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PauseIcon);
module.exports = ForwardRef;