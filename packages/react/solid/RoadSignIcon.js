const React = require("react");
function RoadSignIcon({
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
    d: "m3.62 9.879 6.758-6.758a3 3 0 0 1 4.243 0l6.757 6.758a3 3 0 0 1 0 4.242l-6.757 6.758a3 3 0 0 1-4.243 0L3.621 14.12a3 3 0 0 1 0-4.242m10.632-2.17a1 1 0 0 0-1.486 1.301 4.47 4.47 0 0 0-2.267 3.889v2.875a1 1 0 0 0 2 0v-2.875c0-.594.211-1.141.563-1.569a1 1 0 0 0 1.828.09l.76-1.52a.997.997 0 0 0-.249-1.233z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RoadSignIcon);
module.exports = ForwardRef;