const React = require("react");
function CalendarIcon({
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
    d: "M8.25 1a1 1 0 0 1 1 1v1h6V2a1 1 0 1 1 2 0v1h1a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1V2a1 1 0 0 1 1-1m7 4a1 1 0 1 0 2 0h1a2 2 0 0 1 2 2v.5h-16V7a2 2 0 0 1 2-2h1a1 1 0 0 0 2 0zm5 4.5h-16V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CalendarIcon);
module.exports = ForwardRef;