const React = require("react");
function PcIcon({
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
    d: "M5.25 1.5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h6v1h-3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-1h6a4 4 0 0 0 4-4v-10a4 4 0 0 0-4-4zm14 16a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PcIcon);
module.exports = ForwardRef;