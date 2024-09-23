const React = require("react");
function Building6Icon({
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
    d: "M12.25 7a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1M15.25 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM12.25 13a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M15.25 8a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM12.25 10a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M15.25 14a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM12.25 16a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M15.25 17a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14h2a1 1 0 1 1 0 2h-16a1 1 0 1 1 0-2h2zm2 14h8V5h-8z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Building6Icon);
module.exports = ForwardRef;