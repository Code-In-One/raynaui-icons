const React = require("react");
function MapIcon({
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
    d: "M3.125 4.875a2.25 2.25 0 0 1 2.25-2.25h14.25a2.25 2.25 0 0 1 2.25 2.25v1.09l-12.197 7.85L3.125 5.55zM10.615 14.995l11.26-7.246v11.376a2.25 2.25 0 0 1-2.25 2.25h-3.95zM13.76 21.375H5.375a2.25 2.25 0 0 1-2.25-2.25V7.965z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MapIcon);
module.exports = ForwardRef;