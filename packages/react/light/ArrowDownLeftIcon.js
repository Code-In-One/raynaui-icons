const React = require("react");
function ArrowDownLeftIcon({
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
    d: "M5.386 18.364a1 1 0 0 0 1 1h5.657a1 1 0 1 0 0-2H8.8l11.02-11.02a1 1 0 0 0-1.413-1.415L7.386 15.949v-3.242a1 1 0 1 0-2 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowDownLeftIcon);
module.exports = ForwardRef;