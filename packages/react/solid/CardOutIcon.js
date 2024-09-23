const React = require("react");
function CardOutIcon({
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
    d: "M5.5 3.5h14a3 3 0 0 1 3 3V7h-20v-.5a3 3 0 0 1 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 9v8.5a3 3 0 0 0 3 3h10.118A3 3 0 0 1 17 17.068V17h-.5a1 1 0 1 1 0-2h.67a3.001 3.001 0 0 1 5.33-.659V9zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22.164 20.414-1.5 1.333a1 1 0 0 1-1.328 0l-1.5-1.333A1 1 0 0 1 19 18.8V16a1 1 0 1 1 2 0v2.8a1 1 0 0 1 1.164 1.614"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardOutIcon);
module.exports = ForwardRef;