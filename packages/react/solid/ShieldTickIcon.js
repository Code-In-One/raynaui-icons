const React = require("react");
function ShieldTickIcon({
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
    d: "M18.79 5.087 17.242 4.4l-3.626-1.453a3 3 0 0 0-2.232 0L7.758 4.4l-1.548.687C5.187 5.54 4.5 6.525 4.5 7.644c0 1.974.15 5.122.994 7.206 1.077 2.66 3.972 4.8 5.685 5.881a2.46 2.46 0 0 0 2.642 0c1.713-1.081 4.608-3.22 5.685-5.88.844-2.085.994-5.233.994-7.207 0-1.12-.687-2.104-1.71-2.557m-3.594 6.12a1 1 0 0 0-1.414-1.414l-1.939 1.939-.282-.282a1 1 0 0 0-1.414 1.414l.989.989a1 1 0 0 0 1.414 0z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ShieldTickIcon);
module.exports = ForwardRef;