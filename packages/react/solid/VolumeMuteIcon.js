const React = require("react");
function VolumeMuteIcon({
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
    d: "m5.076 6.632 3.75-.536a3 3 0 0 0 1.24-.473l3.88-2.586a1 1 0 0 1 1.554.832v16.263a1 1 0 0 1-1.555.832l-3.879-2.586a3 3 0 0 0-1.24-.474l-3.75-.536a3 3 0 0 1-2.576-2.97V9.602a3 3 0 0 1 2.576-2.97M21.743 11.829l.707-.708a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.708a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 0 0 1.415-1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(VolumeMuteIcon);
module.exports = ForwardRef;