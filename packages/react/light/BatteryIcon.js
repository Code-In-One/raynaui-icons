const React = require("react");
function BatteryIcon({
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
    d: "M6.75 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M10.75 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM12.75 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M16.75 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v.208a2.5 2.5 0 0 1 1.5 2.292v1a2.5 2.5 0 0 1-1.5 2.292V15a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4zm16 6a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BatteryIcon);
module.exports = ForwardRef;