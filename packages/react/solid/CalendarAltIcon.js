const React = require("react");
function CalendarAltIcon({
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
    d: "M8.5 2a1 1 0 0 1 1 1v1.5h-2V3a1 1 0 0 1 1-1M15.5 5h-6v1a1 1 0 0 1-2 0V5h-1a3 3 0 0 0-3 3v.5h18V8a3 3 0 0 0-3-3h-1v1a1 1 0 1 1-2 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 10.5V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.5zm2 7.5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m11-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 3a1 1 0 1 0-2 0v1.5h2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CalendarAltIcon);
module.exports = ForwardRef;