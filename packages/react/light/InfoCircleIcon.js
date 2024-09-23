const React = require("react");
function InfoCircleIcon({
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
    d: "M12.25 6a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M11 16.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(InfoCircleIcon);
module.exports = ForwardRef;