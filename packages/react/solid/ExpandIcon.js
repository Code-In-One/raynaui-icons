const React = require("react");
function ExpandIcon({
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
    d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zM4 6.5a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H7a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0zm14-3a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1h-3a1 1 0 1 1 0-2zm-14 14a3 3 0 0 0 3 3h2a1 1 0 1 0 0-2H7a1 1 0 0 1-1-1v-3a1 1 0 1 0-2 0zm14 3a3 3 0 0 0 3-3v-3a1 1 0 1 0-2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 0 0 2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ExpandIcon);
module.exports = ForwardRef;