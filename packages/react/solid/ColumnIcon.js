const React = require("react");
function ColumnIcon({
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
    d: "M20 3h-5a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 15 21h5a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20 3M2.5 4.5v15A1.5 1.5 0 0 0 4 21h5a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 9 3H4a1.5 1.5 0 0 0-1.5 1.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ColumnIcon);
module.exports = ForwardRef;