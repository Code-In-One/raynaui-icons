const React = require("react");
function TaxiIcon({
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
    d: "M14.691 4.5h-4.382l.5-1h3.382zM3 12a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5v3.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM19.482 6.526l1.324 3.974H4.194l1.324-3.974A1.5 1.5 0 0 1 6.942 5.5h11.116a1.5 1.5 0 0 1 1.424 1.026M17 17.5h3.5V19a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5zM4.5 19v-1.5H8V19a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TaxiIcon);
module.exports = ForwardRef;