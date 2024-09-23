const React = require("react");
function HeadingIcon({
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
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.85 3v9m0 9v-9m12.8 9v-9m0-9v9m0 0H5.85m1.6-9h-3.2m16 0h-3.2m-9.6 18h-3.2m15.6 0h-3.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HeadingIcon);
module.exports = ForwardRef;