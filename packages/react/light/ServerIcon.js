const React = require("react");
function ServerIcon({
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
    d: "M15.25 6.5a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2zM9.75 7.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 3.5a4 4 0 1 0 0 8h14a4 4 0 0 0 0-8zm14 2a2 2 0 1 1 0 4h-14a2 2 0 1 1 0-4z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.25 16.5a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2h-4.5a1 1 0 0 1-1-1M10.75 15.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 12.5a4 4 0 0 0 0 8h14a4 4 0 0 0 0-8zm14 2a2 2 0 1 1 0 4h-14a2 2 0 1 1 0-4z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ServerIcon);
module.exports = ForwardRef;