const React = require("react");
function BtcIcon({
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
    d: "M5.51 11.864a1 1 0 0 1-.01-.155V5a2 2 0 0 1 2-2h1V2a1 1 0 1 1 2 0v1h.5V2a1 1 0 1 1 2 0v1.025a5 5 0 0 1 3.245 8.288A5.002 5.002 0 0 1 14.5 21H13v1a1 1 0 1 1-2 0v-1h-.5v1a1 1 0 1 1-2 0v-1h-1a2 2 0 0 1-2-2v-7q0-.07.01-.136M7.5 11h5a3 3 0 1 0 0-6h-5zm0 2v6h7a3 3 0 1 0 0-6z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BtcIcon);
module.exports = ForwardRef;