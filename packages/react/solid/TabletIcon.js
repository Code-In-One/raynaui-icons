const React = require("react");
function TabletIcon({
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
    d: "M9.52 2.5H7.5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3h-2.02a1 1 0 0 1-.98.8h-4a1 1 0 0 1-.98-.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TabletIcon);
module.exports = ForwardRef;