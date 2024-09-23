const React = require("react");
function BusIcon({
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
    d: "M7.25 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm1 10V6h8v8z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 1a3 3 0 0 0-3 3v8.634a1 1 0 0 0-1.207 1.573l1.207 1.207V18c0 1.306.835 2.418 2 2.83V21a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-.17a3 3 0 0 0 2-2.83v-2.586l1.207-1.207a1 1 0 0 0-1.207-1.573V4a3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BusIcon);
module.exports = ForwardRef;