const React = require("react");
function WalletIcon({
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
    d: "M5.975 3A3.225 3.225 0 0 0 2.75 6.225V17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6.444a4 4 0 0 0-3.999-4H15.64a3 3 0 0 1-.138-.227c-.141-.252-.278-.548-.435-.887l-.116-.25c-.191-.41-.423-.89-.691-1.272-.223-.317-.71-.92-1.496-.92zm7.263 3.252.14.304H4.75v-.331C4.75 5.548 5.298 5 5.975 5h6.597q.023.028.051.07c.153.217.317.543.516.968zM6.75 19a2 2 0 0 1-2-2V8.556h14.001a2 2 0 0 1 1.999 2V11h-2a3 3 0 1 0 0 6h2a2 2 0 0 1-2 2zm11-5a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1m-5.249-9.077.013.01z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WalletIcon);
module.exports = ForwardRef;