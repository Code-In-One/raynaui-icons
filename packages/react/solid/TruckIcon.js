const React = require("react");
function TruckIcon({
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
    d: "M12.5 4a3 3 0 0 1 3 3v11h-4a4 4 0 0 0-8 0 1 1 0 0 1-1-1V7a3 3 0 0 1 3-3zM16.5 15.354V9.5h2.05a3 3 0 0 1 2.742 1.782l.95 2.136a3 3 0 0 1 .258 1.219v.717a4 4 0 0 0-3-1.354 4 4 0 0 0-3 1.354"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.5 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0M19.5 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TruckIcon);
module.exports = ForwardRef;