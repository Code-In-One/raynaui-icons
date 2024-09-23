const React = require("react");
function AiStarsIcon({
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
    d: "M5.425 9.225a3.4 3.4 0 0 0-2.15-2.15c-1.033-.344-1.033-1.806 0-2.15a3.4 3.4 0 0 0 2.15-2.15c.344-1.033 1.806-1.033 2.15 0a3.4 3.4 0 0 0 2.15 2.15c1.033.344 1.033 1.806 0 2.15a3.4 3.4 0 0 0-2.15 2.15c-.344 1.033-1.806 1.033-2.15 0M13.619 20.644a5.95 5.95 0 0 0-3.763-3.763c-1.808-.602-1.808-3.16 0-3.762a5.95 5.95 0 0 0 3.763-3.763c.602-1.808 3.16-1.808 3.762 0a5.95 5.95 0 0 0 3.763 3.763c1.808.602 1.808 3.16 0 3.762a5.95 5.95 0 0 0-3.763 3.763c-.602 1.808-3.16 1.808-3.762 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AiStarsIcon);
module.exports = ForwardRef;