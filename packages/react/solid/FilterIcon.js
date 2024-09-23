const React = require("react");
function FilterIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M3 5.281A2.28 2.28 0 0 1 5.281 3h13.438a2.281 2.281 0 0 1 1.869 3.589l-6.046 8.636a3 3 0 0 0-.542 1.72v1.426c0 .998-.564 1.911-1.457 2.358A1.757 1.757 0 0 1 10 19.157v-2.211a3 3 0 0 0-.542-1.72L3.412 6.588A2.3 2.3 0 0 1 3 5.281"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FilterIcon);
module.exports = ForwardRef;