const React = require("react");
function ChevronDownIcon({
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
    d: "m3.565 8.728 7.814 7.355a2 2 0 0 0 2.742 0l7.814-7.355a1 1 0 0 0-1.37-1.456l-7.815 7.355-7.815-7.355a1 1 0 0 0-1.37 1.456"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChevronDownIcon);
module.exports = ForwardRef;