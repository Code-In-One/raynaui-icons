const React = require("react");
function SunCloudIcon({
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
    d: "M13.5 2a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0zM2.974 6.5a1 1 0 0 1 1.366-.366l1.299.75a1 1 0 0 1-1 1.732l-1.3-.75A1 1 0 0 1 2.975 6.5M19.36 7.134a1 1 0 1 0 1 1.732l1.299-.75a1 1 0 1 0-1-1.732zM20.36 15.134a1 1 0 1 0-1 1.732l1.299.75a1 1 0 1 0 1-1.732zM2.5 18.353C2.5 19.815 3.62 21 5 21h4.5c1.657 0 3-1.422 3-3.177 0-1.404-.861-2.596-2.055-3.015C10.165 13.21 8.841 12 7.25 12 5.455 12 4 13.54 4 15.441q0 .24.03.471c-.899.401-1.53 1.343-1.53 2.44"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 12a6 6 0 0 1-4.053 5.677c-.251-1.701-1.358-3.09-2.824-3.621C11.23 11.748 9.377 10 7.15 10q-.158 0-.313.012A6 6 0 0 1 18.5 12"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SunCloudIcon);
module.exports = ForwardRef;