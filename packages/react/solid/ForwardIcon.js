const React = require("react");
function ForwardIcon({
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
    d: "m5.898 7.677 5.686 2.841c.61.305.916.893.916 1.48v-2.84a1.657 1.657 0 0 1 2.398-1.481l5.686 2.841c1.221.61 1.221 2.353 0 2.964l-5.686 2.841a1.657 1.657 0 0 1-2.398-1.482v-2.84c0 .588-.306 1.176-.916 1.48l-5.686 2.842A1.657 1.657 0 0 1 3.5 14.841V9.16a1.657 1.657 0 0 1 2.398-1.482"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ForwardIcon);
module.exports = ForwardRef;