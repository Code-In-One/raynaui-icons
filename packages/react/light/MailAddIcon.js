const React = require("react");
function MailAddIcon({
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
    fillRule: "evenodd",
    d: "M3.75 17a2 2 0 0 0 2 2h10a1 1 0 1 1 0 2h-10a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v9a1 1 0 0 1-2 0V9.477l-7.514 3.006a4 4 0 0 1-2.971 0L3.75 9.477zm0-10v.323l8.258 3.303a2 2 0 0 0 1.485 0l8.257-3.303V7a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.75 18a1 1 0 0 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2h-1z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MailAddIcon);
module.exports = ForwardRef;