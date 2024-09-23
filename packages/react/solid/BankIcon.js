const React = require("react");
function BankIcon({
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
    fillRule: "evenodd",
    d: "m12.184 3.106-8 2.666a1 1 0 0 0-.684.949V9a1 1 0 0 0 1 1h1v7h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1v-7h1a1 1 0 0 0 1-1V6.72a1 1 0 0 0-.684-.949l-8-2.666a1 1 0 0 0-.632 0M17.5 17v-7h-2v7zm-4 0v-7h-2v7zm-4 0v-7h-2v7z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BankIcon);
module.exports = ForwardRef;