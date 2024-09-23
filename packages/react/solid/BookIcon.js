const React = require("react");
function BookIcon({
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
    d: "M7.167 3h10.666C19.306 3 20.5 4.209 20.5 5.7v10.286a1 1 0 0 1-.526.895.8.8 0 0 0 .005.19c.042.358.217.823.456 1.419l.029.072c.102.253.212.527.3.784.096.274.192.6.22.922.027.31.006.804-.354 1.216-.37.421-.881.516-1.276.516H8.359c-2.175 0-3.848-1.84-3.859-4V5.7C4.5 4.209 5.694 3 7.167 3M6.5 17.979c0-.54.438-.979.979-.979H17.97q.004.161.022.307c.079.665.367 1.382.58 1.915l.032.077c.106.265.198.493.27.701H8.359c-.975 0-1.859-.852-1.859-2.021m12.89 2.02h.004z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BookIcon);
module.exports = ForwardRef;