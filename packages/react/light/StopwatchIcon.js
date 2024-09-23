const React = require("react");
function StopwatchIcon({
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
    d: "M12.75 9a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.25 2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v1l-.001.053a9.25 9.25 0 1 1-1.997 0q-.003-.026-.002-.053V3h-1a1 1 0 0 1-1-1m3 4a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(StopwatchIcon);
module.exports = ForwardRef;