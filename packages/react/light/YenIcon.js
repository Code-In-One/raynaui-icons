const React = require("react");
function YenIcon({
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
    d: "M8.564 3.919A1 1 0 1 0 6.936 5.08l4.814 6.74V12h-3a1 1 0 1 0 0 2h3v.5h-3a1 1 0 1 0 0 2h3v4a1 1 0 0 0 2 0v-4h3a1 1 0 0 0 0-2h-3V14h3a1 1 0 0 0 0-2h-3v-.18l4.814-6.739a1 1 0 0 0-1.628-1.162l-4.186 5.86z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(YenIcon);
module.exports = ForwardRef;