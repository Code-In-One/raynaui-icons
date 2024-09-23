const React = require("react");
function CornerLeftDownIcon({
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
    d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm4.207 18.207a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 17.086V15.5c0-6.627 5.373-12 12-12a1 1 0 1 1 0 2c-5.523 0-10 4.477-10 10v1.586l2.293-2.293a1 1 0 0 1 1.414 1.414z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CornerLeftDownIcon);
module.exports = ForwardRef;