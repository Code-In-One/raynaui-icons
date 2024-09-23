const React = require("react");
function ArrowUpIcon({
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
    d: "M12.043 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13.75 5.414V21a1 1 0 1 1-2 0V5.414L9.457 7.707a1 1 0 0 1-1.414-1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowUpIcon);
module.exports = ForwardRef;