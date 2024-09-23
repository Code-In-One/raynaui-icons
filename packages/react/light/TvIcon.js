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
    d: "M6.75 8a1 1 0 0 0 0 2h1v3a1 1 0 1 0 2 0v-3h1a1 1 0 1 0 0-2zM13.303 8.106a1 1 0 0 1 1.341.447l1.106 2.21 1.106-2.21a1 1 0 1 1 1.788.894l-2 4a1 1 0 0 1-1.788 0l-2-4a1 1 0 0 1 .447-1.341"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.25 2a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h5.5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h5.5a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TvIcon);
module.exports = ForwardRef;