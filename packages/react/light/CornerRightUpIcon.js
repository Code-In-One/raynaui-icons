const React = require("react");
function CornerRightUpIcon({
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
    d: "M16.543 2.793a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L18.25 5.914V7.5c0 7.732-6.268 14-14 14a1 1 0 1 1 0-2c6.627 0 12-5.373 12-12V5.914l-2.293 2.293a1 1 0 1 1-1.414-1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CornerRightUpIcon);
module.exports = ForwardRef;