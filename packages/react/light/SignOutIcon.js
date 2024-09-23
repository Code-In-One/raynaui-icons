const React = require("react");
function SignOutIcon({
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
    d: "M7.75 4a1 1 0 1 0 0-2h-1.5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h1.5a1 1 0 1 0 0-2h-1.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.957 12.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L19.836 11H8.25a1 1 0 1 0 0 2h11.586l-2.293 2.293a1 1 0 0 0 1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SignOutIcon);
module.exports = ForwardRef;