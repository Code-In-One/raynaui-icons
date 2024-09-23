const React = require("react");
function UndoIcon({
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
    d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM4.043 8.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L7.164 7h7.586a6.5 6.5 0 1 1 0 13h-8a1 1 0 1 1 0-2h8a4.5 4.5 0 1 0 0-9H7.164l2.293 2.293a1 1 0 1 1-1.414 1.414z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UndoIcon);
module.exports = ForwardRef;