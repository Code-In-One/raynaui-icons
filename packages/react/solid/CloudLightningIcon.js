const React = require("react");
function CloudLightningIcon({
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
    d: "M2.5 15a5 5 0 0 0 5 5h.402l-.032-.058a3 3 0 0 1 .1-3.055l2.232-3.5a3 3 0 0 1 5.264 2.847 3 3 0 0 1 .676 3.688L16.1 20h.4a6 6 0 0 0 1.89-11.696A6.5 6.5 0 0 0 5.56 10.39 5 5 0 0 0 2.5 15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.575 15.538a1 1 0 1 0-1.687-1.076l-2.231 3.5A1 1 0 0 0 10.5 19.5h1.326l-1.09 2.026a1 1 0 1 0 1.76.948l1.884-3.5a1 1 0 0 0-.88-1.474h-1.177z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CloudLightningIcon);
module.exports = ForwardRef;