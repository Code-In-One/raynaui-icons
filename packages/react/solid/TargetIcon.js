const React = require("react");
function TargetIcon({
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
    d: "M21.5 2a1 1 0 1 0-2 0v1.586l-6.563 6.563A1 1 0 0 0 11 10.5v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .35-1.937L20.915 5H22.5a1 1 0 1 0 0-2h-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 2c2.038 0 3.934.61 5.515 1.657L15.83 5.84a7 7 0 1 0 2.828 2.828l2.185-2.184A9.95 9.95 0 0 1 22.5 12c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 7c.645 0 1.261.122 1.827.344l-1.389 1.39A2 2 0 0 0 10 10.5v1.999a2 2 0 0 0 2 2h2a2 2 0 0 0 1.767-2.938l1.389-1.39A5 5 0 1 1 12.5 7"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TargetIcon);
module.exports = ForwardRef;