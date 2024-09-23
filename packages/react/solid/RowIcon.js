const React = require("react");
function RowIcon({
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
    d: "M21 20v-5a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 15v5a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 20M19.5 2.5h-15A1.5 1.5 0 0 0 3 4v5a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 9V4a1.5 1.5 0 0 0-1.5-1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 20v-5a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 15v5a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 20M19.5 2.5h-15A1.5 1.5 0 0 0 3 4v5a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 9V4a1.5 1.5 0 0 0-1.5-1.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RowIcon);
module.exports = ForwardRef;