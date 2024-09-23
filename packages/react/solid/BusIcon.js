const React = require("react");
function BusIcon({
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
    d: "M6.5 2h12a2 2 0 0 1 2 2v9.586l.793-.793a1 1 0 0 1 1.414 1.414l-1.5 1.5A1 1 0 0 1 20.5 16v2a2 2 0 0 1-2 2v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1h-6v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a2 2 0 0 1-2-2v-2a1 1 0 0 1-.707-.293l-1.5-1.5a1 1 0 1 1 1.414-1.414l.793.793V4a2 2 0 0 1 2-2m11 3h-10v10h10z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BusIcon);
module.exports = ForwardRef;