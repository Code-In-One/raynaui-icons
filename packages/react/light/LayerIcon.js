const React = require("react");
function LayerIcon({
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
    d: "M12.75 5.077 5.442 8 8.12 9.07l.004.002 4.627 1.851 4.627-1.85.004-.002L20.057 8zM3.54 9.393 5.056 10l-1.518.607c-1.257.503-1.257 2.283 0 2.786L5.057 14l-1.518.607c-1.257.503-1.257 2.283 0 2.786l8.654 3.461a1.5 1.5 0 0 0 1.114 0l8.654-3.461c1.257-.503 1.257-2.283 0-2.786L20.443 14l1.518-.607c1.257-.503 1.257-2.283 0-2.786L20.443 10l1.518-.607c1.257-.503 1.257-2.283 0-2.786l-8.654-3.461a1.5 1.5 0 0 0-1.114 0L3.539 6.607c-1.257.503-1.257 2.283 0 2.786m13.837 3.68.004-.002L20.057 12l-2.307-.923-4.443 1.777a1.5 1.5 0 0 1-1.114 0L7.75 11.077 5.442 12l2.678 1.07.003.002 4.627 1.851zM7.75 15.076l4.443 1.777a1.5 1.5 0 0 0 1.114 0l4.443-1.777 2.307.923-7.307 2.923L5.442 16z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LayerIcon);
module.exports = ForwardRef;