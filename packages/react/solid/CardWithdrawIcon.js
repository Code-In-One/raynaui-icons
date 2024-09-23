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
    d: "M5.5 3.5h14a3 3 0 0 1 3 3V7h-20v-.5a3 3 0 0 1 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 9v8.5a3 3 0 0 0 3 3h9.764a3 3 0 0 1-.764-2c0-.902.398-1.712 1.029-2.261A1 1 0 0 1 16.5 15h2q.196.001.37.07.138-.165.304-.312a3 3 0 0 1 3.326-.446V9zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21.914 20.664 1.333-1.5a1 1 0 0 0 0-1.328l-1.333-1.5A1 1 0 0 0 20.3 17.5h-2.8a1 1 0 1 0 0 2h2.8a1 1 0 0 0 1.614 1.164"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardWithdrawIcon);
module.exports = ForwardRef;