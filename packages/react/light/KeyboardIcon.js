const React = require("react");
function KeyboardIcon({
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
    d: "M5.25 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M11.25 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM15.25 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M18.25 17a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM8.25 16a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M10.25 15a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.25 4.5a1 1 0 1 0-2 0c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.753 1.137q-.05.235-.05.465H6.25a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4h-5c1.126 0 1.926-.492 2.412-1.166A3.23 3.23 0 0 0 16.25 4.5m-4.02 5h6.02a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(KeyboardIcon);
module.exports = ForwardRef;