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
    fillRule: "evenodd",
    d: "M6.145 2a2 2 0 0 0-1.988 1.78l-.777 7A2 2 0 0 0 5.367 13h5.883v7h-3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-3v-7h5.883a2 2 0 0 0 1.988-2.22l-.778-7A2 2 0 0 0 18.355 2zm-.778 9 .778-7h12.21l.778 7z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LampIcon);
module.exports = ForwardRef;