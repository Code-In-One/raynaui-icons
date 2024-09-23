const React = require("react");
function WalletFundIcon({
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
    d: "m21.993 14.758.273.242h.234v-2h-2a1 1 0 0 0-1 1.042c.87-.146 1.791.092 2.493.716"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 20h8.505a3 3 0 0 1 .502-3.909l1.18-1.048A3 3 0 0 1 20.5 11h1.999v-.444a3 3 0 0 0-2.999-3H16l-.011-.006H7.5a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 4.5 6.225V17a3 3 0 0 0 3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.664 16.253a1 1 0 0 0-1.328 0l-1.5 1.333A1 1 0 0 0 19 19.2V22a1 1 0 1 0 2 0v-2.8a1 1 0 0 0 1.164-1.614z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WalletFundIcon);
module.exports = ForwardRef;