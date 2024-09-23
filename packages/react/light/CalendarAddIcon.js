const React = require("react");
function CalendarAddIcon({
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
    d: "M9.25 2a1 1 0 0 0-2 0v1h-1a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h9a1 1 0 1 0 0-2h-9a2 2 0 0 1-2-2V9.5h16V15a1 1 0 1 0 2 0V7a4 4 0 0 0-4-4h-1V2a1 1 0 1 0-2 0v1h-6zm7 4a1 1 0 0 1-1-1h-6a1 1 0 0 1-2 0h-1a2 2 0 0 0-2 2v.5h16V7a2 2 0 0 0-2-2h-1a1 1 0 0 1-1 1",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.25 18a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CalendarAddIcon);
module.exports = ForwardRef;