const React = require("react");
function ColorPickerIcon({
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
    d: "m12.75 9.172 4.242-4.243a2 2 0 0 1 2.829 2.828L15.578 12M12.75 9.172l.707.707m-.707-.707-.707-.708M15.578 12l.707.707M15.578 12l-.707-.707m-1.414-1.414-7.778 7.778a1 1 0 0 0 1.414 1.414l7.778-7.778m-1.414-1.414 1.414 1.414"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ColorPickerIcon);
module.exports = ForwardRef;