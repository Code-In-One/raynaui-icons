const React = require("react");
function CardWithdrawIcon({
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
    d: "M1.75 6.5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v7.75a1 1 0 1 1-2 0V9h-18v8.5a2 2 0 0 0 2 2h9.5a1 1 0 1 1 0 2h-9.5a4 4 0 0 1-4-4zm2 .5h18v-.5a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.75 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M22.164 20.664l1.333-1.5a1 1 0 0 0 0-1.328l-1.333-1.5A1 1 0 0 0 20.55 17.5h-2.8a1 1 0 1 0 0 2h2.8a1 1 0 0 0 1.614 1.164"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardWithdrawIcon);
module.exports = ForwardRef;