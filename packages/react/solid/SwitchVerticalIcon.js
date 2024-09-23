const React = require("react");
function SwitchVerticalIcon({
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
    d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zm14.293 15.207-3-3a1 1 0 0 1 1.414-1.414l1.293 1.293V4.5a1 1 0 1 1 2 0v12.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0m-10-16.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L8.5 6.914V19.5a1 1 0 1 1-2 0V6.914L5.207 8.207a1 1 0 0 1-1.414-1.414z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SwitchVerticalIcon);
module.exports = ForwardRef;