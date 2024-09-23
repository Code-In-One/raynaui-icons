const React = require("react");
function QuestionCircleIcon({
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
    fillRule: "evenodd",
    d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-8.86-1.855a.665.665 0 1 0-.869-1.002l-.564.564a1 1 0 0 1-1.414-1.414l.564-.564a2.665 2.665 0 1 1 3.483 4.016l-.048.036a.73.73 0 0 0-.292.583v.136a1 1 0 1 1-2 0v-.136c0-.859.404-1.667 1.092-2.183zM11 15.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(QuestionCircleIcon);
module.exports = ForwardRef;