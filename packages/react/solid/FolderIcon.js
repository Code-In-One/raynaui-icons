const React = require("react");
function FolderIcon({
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
    d: "M18.5 20h-12a3 3 0 0 1-3-3V6.567A2.567 2.567 0 0 1 6.067 4h2.547c.979 0 2.671 2.184 3.405 2.831.14.123.58.369.766.369H18.5a3 3 0 0 1 2.999 3V17a3 3 0 0 1-3 3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderIcon);
module.exports = ForwardRef;