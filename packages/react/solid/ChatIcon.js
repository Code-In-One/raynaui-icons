const React = require("react");
function ChatIcon({
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
    d: "M12.5 21a9 9 0 1 0-8.72-6.767l.262 2.104q.02.163-.006.325l-.343 2.057c-.105.63.335 1.222.97 1.301l5.604.7c.714.183 1.462.28 2.233.28m-6-11a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChatIcon);
module.exports = ForwardRef;