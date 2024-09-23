const React = require("react");
function PowerIcon({
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
    d: "M13.25 3a1 1 0 1 0-2 0v1.055a9.001 9.001 0 0 0 1 17.945 9 9 0 0 0 1-17.945zm-2 3.07V11a1 1 0 1 0 2 0V6.07a7.002 7.002 0 0 1-1 13.93 7 7 0 0 1-1-13.93",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PowerIcon);
module.exports = ForwardRef;