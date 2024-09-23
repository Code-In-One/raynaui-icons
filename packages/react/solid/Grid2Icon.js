const React = require("react");
function Grid2Icon({
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
    d: "M14.5 14.5v5A1.5 1.5 0 0 0 16 21h4a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 20 13h-4a1.5 1.5 0 0 0-1.5 1.5M3.5 14.5v5A1.5 1.5 0 0 0 5 21h4a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9 13H5a1.5 1.5 0 0 0-1.5 1.5M3.5 4.5v4A1.5 1.5 0 0 0 5 10h15a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 20 3H5a1.5 1.5 0 0 0-1.5 1.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Grid2Icon);
module.exports = ForwardRef;