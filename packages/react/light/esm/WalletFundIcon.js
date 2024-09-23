import * as React from "react";
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
    fillRule: "evenodd",
    d: "M2.75 6.639C2.75 4.629 4.38 3 6.389 3h7.987c.394 0 .715.157.942.315s.415.357.569.544c.305.37.587.84.828 1.253l.174.3c.184.32.35.606.513.853q.12.183.21.29h1.139a4 4 0 0 1 3.999 4v4.653l-.507-.45a3 3 0 0 0-1.493-.716V13h-2a1 1 0 0 0-.567 1.824l-1.426 1.267-.082.076A3 3 0 0 1 18.75 11h2v-.444a2 2 0 0 0-2-2h-14V17a2 2 0 0 0 2 2h9.074a3 3 0 0 0 1.114 1.725 1 1 0 0 1-.688.275h-9.5a4 4 0 0 1-4-4zm2.002-.083H15.24l-.105-.18q-.076-.134-.148-.258c-.245-.421-.455-.759-.644-.988q-.075-.089-.118-.13H6.389c-.877 0-1.594.69-1.637 1.556",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.914 16.253a1 1 0 0 0-1.328 0l-1.5 1.333A1 1 0 0 0 19.25 19.2V22a1 1 0 1 0 2 0v-2.8a1 1 0 0 0 1.164-1.614z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WalletFundIcon);
export default ForwardRef;