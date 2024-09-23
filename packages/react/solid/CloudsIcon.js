const React = require("react");
function CloudsIcon({
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
    d: "M2.5 11.177c0 1.504.91 2.806 2.231 3.43a5.02 5.02 0 0 1 2.58-2.467 6.5 6.5 0 0 1 7.486-7.306C13.96 3.158 12.171 2 10.1 2 7.228 2 4.9 4.225 4.9 6.97q0 .347.048.681C3.51 8.231 2.5 9.591 2.5 11.177"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 20c-2.21 0-4-1.712-4-3.823 0-1.586 1.01-2.947 2.448-3.526a5 5 0 0 1-.048-.68C8.9 9.225 11.228 7 14.1 7c2.545 0 4.663 1.748 5.112 4.056 1.91.605 3.288 2.327 3.288 4.356 0 2.534-2.149 4.588-4.8 4.588z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CloudsIcon);
module.exports = ForwardRef;