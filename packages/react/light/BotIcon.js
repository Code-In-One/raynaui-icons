const React = require("react");
function BotIcon({
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
    d: "M7.75 12.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M16 13.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M9.856 15.553a1 1 0 0 1 1.341-.447l.211.105a3 3 0 0 0 2.684 0l.21-.105a1 1 0 1 1 .895 1.788l-.21.106a5 5 0 0 1-4.473 0l-.211-.106a1 1 0 0 1-.447-1.341"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M17.457 1.293a1 1 0 0 0-1.414 0L15.336 2H13.75a1 1 0 0 0-.854.48L11.97 4H7.75a6 6 0 0 0-6 6v8a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-8a6 6 0 0 0-6-6h-2a1 1 0 0 0 .707-.293l1-1a1 1 0 0 0 0-1.414M7.75 6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a4 4 0 0 0-4-4z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BotIcon);
module.exports = ForwardRef;