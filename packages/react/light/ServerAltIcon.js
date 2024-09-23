const React = require("react");
function ServerAltIcon({
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
    d: "M14.25 17.5a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2h-4.5a1 1 0 0 1-1-1M10.75 16.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M23.25 17.5V6a4 4 0 0 0-4-4h-14a4 4 0 0 0-4 4v11.5a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4M5.25 4a2 2 0 0 0-2 2v8.035a4 4 0 0 1 2-.535h14c.729 0 1.412.195 2 .535V6a2 2 0 0 0-2-2zm16 13.5a2 2 0 0 0-2-2h-14a2 2 0 1 0 0 4h14a2 2 0 0 0 2-2",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ServerAltIcon);
module.exports = ForwardRef;