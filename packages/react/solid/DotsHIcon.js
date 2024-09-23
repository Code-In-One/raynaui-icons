const React = require("react");
function DotsHIcon({
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
    d: "M2 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M20 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DotsHIcon);
module.exports = ForwardRef;