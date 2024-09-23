const React = require("react");
function ChatAltIcon({
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
    d: "M16.5 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M12.75 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M6.5 12A1.25 1.25 0 1 0 9 12a1.25 1.25 0 0 0-2.5 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.75 2c-5.523 0-10 4.477-10 10 0 .832.102 1.642.294 2.417l.256 2.044a.1.1 0 0 1 0 .036l-.344 2.058a2.125 2.125 0 0 0 1.833 2.458l5.544.693A10 10 0 0 0 12.75 22c5.523 0 10-4.477 10-10s-4.477-10-10-10m-8 10a8 8 0 1 1 6.015 7.752l-.061-.016-5.667-.708a.125.125 0 0 1-.108-.144l.343-2.058q.051-.306.012-.613l-.27-2.167-.016-.06A8 8 0 0 1 4.75 12",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChatAltIcon);
module.exports = ForwardRef;