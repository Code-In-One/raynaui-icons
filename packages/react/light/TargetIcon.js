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
    d: "M18.485 2.937A10.95 10.95 0 0 0 12.25 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11a10.95 10.95 0 0 0-1.936-6.235L19.87 7.209a9 9 0 1 1-2.828-2.828z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.25 1a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1.586l-6.563 6.563a1 1 0 0 1-.351 1.937h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1.937-.35l6.563-6.564V2a1 1 0 0 1 1-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.25 5c1.206 0 2.34.305 3.33.841l-1.503 1.503a5 5 0 1 0 2.828 2.828L18.41 8.67A7 7 0 1 1 12.25 5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TargetIcon);
module.exports = ForwardRef;