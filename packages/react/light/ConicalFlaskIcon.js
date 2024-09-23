const React = require("react");
function ConicalFlaskIcon({
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
    fillRule: "evenodd",
    d: "M7.809 1a1 1 0 0 0-.949 1.316l.692 2.077a5 5 0 0 1 .257 1.58V9.09c0 .544-.139 1.08-.403 1.555l-4.382 7.9C1.914 20.545 3.36 23 5.647 23h13.207c2.286 0 3.732-2.456 2.623-4.455l-4.14-7.463a5 5 0 0 1-.628-2.482l.031-2.704a5 5 0 0 1 .229-1.44l.676-2.157A1 1 0 0 0 16.691 1zm1.64 2.76L9.197 3h6.134l-.27.857a7 7 0 0 0-.32 2.016l-.03 2.704a7 7 0 0 0 .878 3.475l4.14 7.463A1 1 0 0 1 18.853 21H5.648a1 1 0 0 1-.875-1.485l4.383-7.9c.266-.479.453-.994.557-1.526h1.538a1 1 0 1 0 0-2H9.81V7h1.441a1 1 0 1 0 0-2H9.741a7 7 0 0 0-.291-1.24",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ConicalFlaskIcon);
module.exports = ForwardRef;