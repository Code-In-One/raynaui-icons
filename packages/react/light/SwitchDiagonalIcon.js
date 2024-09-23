const React = require("react");
function SwitchDiagonalIcon({
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
    d: "M11.336 1.1a1 1 0 1 0 0 2h1.828L2.144 14.121a1 1 0 1 0 1.414 1.415l11.02-11.021v1.828a1 1 0 1 0 2 0V2.1a1 1 0 0 0-1-1zM23.357 9.879a1 1 0 0 0-1.415-1.414l-11.02 11.02v-1.828a1 1 0 0 0-2 0V21.9a1 1 0 0 0 1 1h4.242a1 1 0 0 0 0-2h-1.828z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SwitchDiagonalIcon);
module.exports = ForwardRef;