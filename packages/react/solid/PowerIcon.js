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
    d: "M13.5 3a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 13c0-3.728 2.55-6.86 6-7.748V11a2 2 0 1 0 4 0V5.252A8 8 0 1 1 4.5 13"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PowerIcon);
module.exports = ForwardRef;