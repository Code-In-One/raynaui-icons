const React = require("react");
function LampIcon({
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
    d: "m5.41 3.9-.8 8a1 1 0 0 0 .995 1.1H11.5v7h-3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-7h5.895a1 1 0 0 0 .995-1.1l-.8-8a1 1 0 0 0-.995-.9H6.405a1 1 0 0 0-.995.9"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LampIcon);
module.exports = ForwardRef;