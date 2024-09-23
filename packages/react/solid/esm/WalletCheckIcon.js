import * as React from "react";
function WalletCheckIcon({
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
    d: "m19.516 17.23.307-.307A3.001 3.001 0 0 1 20.5 11h2v-.444a3 3 0 0 0-2.999-3H16l-.011-.006H7.5a1 1 0 0 1 0-2h7.264c-.38-.81-.774-1.55-1.25-1.55h-6.79A2.225 2.225 0 0 0 4.5 6.225V17a3 3 0 0 0 3 3h8.358a2.998 2.998 0 0 1 3.658-2.77"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.5 13h-2a1 1 0 1 0 0 2h2zM23.196 19.207a1 1 0 0 0-1.414-1.414l-1.939 1.939-.282-.282a1 1 0 0 0-1.414 1.414l.989.989a1 1 0 0 0 1.414 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WalletCheckIcon);
export default ForwardRef;