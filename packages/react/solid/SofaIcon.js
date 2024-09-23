const React = require("react");
function SofaIcon({
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
    d: "M4.999 15A2.5 2.5 0 0 1 2.5 12.5v-1a2.5 2.5 0 0 1 5-.002V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3.499a2.5 2.5 0 0 1 5 .001v1a2.5 2.5 0 0 1-5 .001V14a1 1 0 0 1-1 1h5a1 1 0 0 1 1 1v1.6a1 1 0 0 1-1 1v.4a1 1 0 1 1-2 0v-.4h-14v.4a1 1 0 1 1-2 0v-.4a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1zM8.5 15a1 1 0 0 1-1-1v-1.498A2.5 2.5 0 0 1 5.001 15z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SofaIcon);
module.exports = ForwardRef;