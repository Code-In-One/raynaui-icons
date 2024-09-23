const React = require("react");
function WalletRemoveIcon({
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
    d: "M15.5 19a3 3 0 0 1 2.772-2.991A3 3 0 0 1 20.5 11h2v-.444a3 3 0 0 0-2.999-3H16l-.011-.006H7.5a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 4.5 6.225V17a3 3 0 0 0 3 3h8.17c-.11-.313-.17-.65-.17-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.5 13h-2a1 1 0 1 0 0 2h2zM18.5 18a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WalletRemoveIcon);
module.exports = ForwardRef;