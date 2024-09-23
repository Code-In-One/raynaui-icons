const React = require("react");
function CandlesHIcon({
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
    d: "M17.25 3a2.5 2.5 0 0 1 2.5 2.5V6h2a1 1 0 1 1 0 2h-2v.5a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5V8h-8a1 1 0 0 1 0-2h8v-.5a2.5 2.5 0 0 1 2.5-2.5zm.5 2.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5M5.75 16h-2a1 1 0 1 0 0 2h2v.5a2.5 2.5 0 0 0 2.5 2.5h6a2.5 2.5 0 0 0 2.5-2.5V18h5a1 1 0 1 0 0-2h-5v-.5a2.5 2.5 0 0 0-2.5-2.5h-6a2.5 2.5 0 0 0-2.5 2.5zm9-.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CandlesHIcon);
module.exports = ForwardRef;