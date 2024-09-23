const React = require("react");
function SendAltIcon({
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
    d: "M19.777 5.13 4.351 6.689c-1.246.126-1.798 1.634-.927 2.535l2.82 2.917a1.5 1.5 0 0 0 1.743.302L20.93 6.044 8.917 14.053a1.5 1.5 0 0 0-.61 1.66l1.115 3.901c.345 1.205 1.927 1.481 2.66.465l9.063-12.58c.756-1.05-.081-2.5-1.368-2.37"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SendAltIcon);
module.exports = ForwardRef;