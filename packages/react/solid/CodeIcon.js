const React = require("react");
function CodeIcon({
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
    d: "M15.942 5.336a1 1 0 1 0-1.884-.673l-5 14a1 1 0 1 0 1.884.673zM9.332 7.445a1 1 0 0 1-.277 1.387L4.303 12l4.752 3.168a1 1 0 0 1-1.11 1.664l-6-4a1 1 0 0 1 0-1.664l6-4a1 1 0 0 1 1.387.277M15.668 7.445a1 1 0 0 0 .277 1.387L20.697 12l-4.752 3.168a1 1 0 0 0 1.11 1.664l6-4a1 1 0 0 0 0-1.664l-6-4a1 1 0 0 0-1.387.277"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CodeIcon);
module.exports = ForwardRef;