const React = require("react");
function ParagraphSpacingIcon({
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
    d: "M3.25 3.5h18M3.25 20.5h18M7.25 18l2-4.8m8 4.8-2-4.8m0 0-2.815-6.757a.2.2 0 0 0-.37 0L9.25 13.2m6 0h-6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ParagraphSpacingIcon);
module.exports = ForwardRef;