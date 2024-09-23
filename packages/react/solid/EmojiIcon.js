const React = require("react");
function EmojiIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-1.293-5.707a1 1 0 0 0-1.414 1.414 3.83 3.83 0 0 0 5.414 0 1 1 0 0 0-1.414-1.414 1.83 1.83 0 0 1-2.586 0M10.2 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15.3 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EmojiIcon);
module.exports = ForwardRef;