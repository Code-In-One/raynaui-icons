const React = require("react");
function SaveIcon({
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
    d: "M8.75 6a1 1 0 0 0 0 2h6.7a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.8a4 4 0 0 0-1.264-2.918l-2.987-2.8A4 4 0 0 0 14.264 2zm-2 4a2 2 0 0 1 2-2h7.014a2 2 0 0 1 1.368.54l2.986 2.8a2 2 0 0 1 .632 1.46V18a2 2 0 0 1-2 2h-.8v-1a2 2 0 0 0-2-2h-4.2a2 2 0 0 0-2 2v1h-1a2 2 0 0 1-2-2zm9.2 13v1h-4.2v-1z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SaveIcon);
module.exports = ForwardRef;