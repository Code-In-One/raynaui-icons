const React = require("react");
function MultiplyIcon({
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
    d: "M7.3 5.636A1 1 0 1 0 5.888 7.05l4.95 4.95-4.95 4.95A1 1 0 1 0 7.3 18.364l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414L13.665 12l4.95-4.95A1 1 0 0 0 17.2 5.636l-4.95 4.95z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MultiplyIcon);
module.exports = ForwardRef;