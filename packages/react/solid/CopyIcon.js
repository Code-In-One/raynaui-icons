const React = require("react");
function CopyIcon({
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
    d: "M18.5 15a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1.7h.5a3 3 0 0 1 3 3V15z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CopyIcon);
module.exports = ForwardRef;