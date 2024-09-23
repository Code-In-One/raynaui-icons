const React = require("react");
function ServerIcon({
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
    d: "M5.5 4.5h14a3 3 0 1 1 0 6h-14a3 3 0 0 1 0-6m10 2a1 1 0 1 0 0 2H20a1 1 0 1 0 0-2zm-5.5 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M5.5 13.5h14a3 3 0 1 1 0 6h-14a3 3 0 1 1 0-6m10 2a1 1 0 1 0 0 2H20a1 1 0 1 0 0-2zm-5.5 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ServerIcon);
module.exports = ForwardRef;