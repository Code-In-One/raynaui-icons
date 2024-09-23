const React = require("react");
function SpeakerIcon({
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
    d: "M12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M10.5 16a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.647 2H8.354a3 3 0 0 0-2.996 2.85l-.7 14A3 3 0 0 0 7.654 22h9.693a3 3 0 0 0 2.996-3.15l-.7-14A3 3 0 0 0 16.647 2M9 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SpeakerIcon);
module.exports = ForwardRef;