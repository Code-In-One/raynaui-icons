const React = require("react");
function TvIcon({
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
    d: "M5.5 3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3M7 8a1 1 0 0 0 0 2h1v3a1 1 0 1 0 2 0v-3h1a1 1 0 1 0 0-2zm6.553.106a1 1 0 0 1 1.341.447L16 10.763l1.106-2.21a1 1 0 1 1 1.788.894l-2 4a1 1 0 0 1-1.788 0l-2-4a1 1 0 0 1 .447-1.341",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 20a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TvIcon);
module.exports = ForwardRef;