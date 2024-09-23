const React = require("react");
function ChatIcon({
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
    d: "M6.75 10a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M7.75 13a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.75 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10a10 10 0 0 1-2.417-.294l-5.544-.693a2.125 2.125 0 0 1-1.833-2.458l.343-2.058a.1.1 0 0 0 0-.036l-.255-2.044A10 10 0 0 1 2.75 12m10-8a8 8 0 0 0-7.752 9.985l.016.061.27 2.167q.039.307-.012.613l-.343 2.058a.125.125 0 0 0 .108.144l5.667.708.06.016A8 8 0 1 0 12.75 4",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChatIcon);
module.exports = ForwardRef;