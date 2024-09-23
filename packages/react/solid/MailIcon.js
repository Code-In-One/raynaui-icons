const React = require("react");
function MailIcon({
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
    d: "M5.5 4h14a3 3 0 0 1 3 3 1 1 0 0 0-.371.072l-8.886 3.554a2 2 0 0 1-1.486 0L2.871 7.072A1 1 0 0 0 2.5 7a3 3 0 0 1 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 9.077V17a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9.077l-8.514 3.406a4 4 0 0 1-2.972 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MailIcon);
module.exports = ForwardRef;