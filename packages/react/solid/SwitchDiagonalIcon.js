const React = require("react");
function SwitchDiagonalIcon({
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
    d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zm8.586 15.778a1 1 0 0 1-1-1v-4.242a1 1 0 1 1 2 0v1.828l7.485-7.485a1 1 0 1 1 1.414 1.414L13.5 18.778h1.829a1 1 0 1 1 0 2zm2.828-17.556a1 1 0 0 1 1 1v4.242a1 1 0 1 1-2 0V6.636L5.43 14.121a1 1 0 1 1-1.414-1.414L11.5 5.222H9.672a1 1 0 1 1 0-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SwitchDiagonalIcon);
module.exports = ForwardRef;