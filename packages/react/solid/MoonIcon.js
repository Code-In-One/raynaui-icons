const React = require("react");
function MoonIcon({
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
    d: "M15.04 2.326c.422.11.313.76-.111.861C11.865 3.92 9.5 6.71 9.5 10a7 7 0 0 0 11.514 5.35c.333-.28.915.019.75.423A10 10 0 0 1 12.5 22c-5.523 0-10-4.477-10-10s4.477-10 10-10c.878 0 1.73.113 2.54.326"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MoonIcon);
module.exports = ForwardRef;