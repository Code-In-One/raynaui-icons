const React = require("react");
function EmojiIcon({
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
    d: "M8.95 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17.05 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M10.957 15.293a1 1 0 0 0-1.414 1.414 3.83 3.83 0 0 0 5.414 0 1 1 0 0 0-1.414-1.414 1.83 1.83 0 0 1-2.586 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.25 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m-8 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EmojiIcon);
module.exports = ForwardRef;