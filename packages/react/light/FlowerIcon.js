const React = require("react");
function FlowerIcon({
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
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12.75 21.333c2.133-.11 6.72-1.333 8-5.333-6.4 0-8 3.556-8 5.333M12.75 21.333c-2.133-.11-6.72-1.333-8-5.333 6.4 0 8 3.556 8 5.333"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M12.75 21.333v-8m0-9.333c2.299.04 4.71-.815 5.621-1.176.155-.062.32.08.28.242l-.538 2.15a1 1 0 0 0-.03.239V8a5.333 5.333 0 0 1-5.333 5.333v0A5.333 5.333 0 0 1 7.417 8V5.455q0-.12-.03-.24L6.843 3.04a.205.205 0 0 1 .267-.242c.934.328 3.51 1.165 5.64 1.202Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FlowerIcon);
module.exports = ForwardRef;