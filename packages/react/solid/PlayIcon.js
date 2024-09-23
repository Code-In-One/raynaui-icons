const React = require("react");
function PlayIcon({
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
    d: "M9.264 4.315 19.37 9.366c2.172 1.085 2.172 4.183 0 5.268L9.264 19.685C7.304 20.665 5 19.241 5 17.051V6.95c0-2.19 2.305-3.613 4.264-2.634"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PlayIcon);
module.exports = ForwardRef;