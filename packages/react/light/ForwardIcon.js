const React = require("react");
function ForwardIcon({
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
    d: "M6.595 6.782C4.83 5.9 2.75 7.183 2.75 9.16v5.682c0 1.976 2.08 3.26 3.845 2.377l5.155-2.577v.2c0 1.976 2.08 3.26 3.845 2.377l5.686-2.842c1.959-.979 1.959-3.773 0-4.752l-5.685-2.842c-1.767-.882-3.846.401-3.846 2.377v.2zm7.155 8.06c0 .487.514.805.951.586l5.686-2.84a.656.656 0 0 0 0-1.175L14.7 8.572a.657.657 0 0 0-.951.587zm-2-2.843a.65.65 0 0 0-.363-.586L5.7 8.572a.657.657 0 0 0-.951.587v5.682c0 .488.514.806.951.588l5.686-2.842a.65.65 0 0 0 .363-.586z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ForwardIcon);
module.exports = ForwardRef;