const React = require("react");
function QrCodeIcon({
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
    d: "M2.5 5.5v-2A1.5 1.5 0 0 1 4 2h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 6 7H4a1.5 1.5 0 0 1-1.5-1.5M17.5 5.5v-2A1.5 1.5 0 0 1 19 2h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 21 7h-2a1.5 1.5 0 0 1-1.5-1.5M2.5 18.5v2A1.5 1.5 0 0 0 4 22h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 6 17H4a1.5 1.5 0 0 0-1.5 1.5M13.5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0M10.5 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h-1a1 1 0 1 0 1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0-1 1v1h-3a1 1 0 1 0 0 2h1v2h-1a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1v-5h1a1 1 0 1 0 0-2h1a1 1 0 1 0 0-2h-3V9a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2h-2a1 1 0 1 0 0-2h-1V5a1 1 0 0 0-1-1M13.5 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 16a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1v-1h-3a1 1 0 1 1 0-2zM21.5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15.5 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6.5 12h1a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM17.5 9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(QrCodeIcon);
module.exports = ForwardRef;