const React = require("react");
function GpsIcon({
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
    d: "M12.25 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.25 1a1 1 0 0 1 1 1v1.055A9.004 9.004 0 0 1 21.195 11h1.055a1 1 0 1 1 0 2h-1.055a9.004 9.004 0 0 1-7.945 7.945V22a1 1 0 1 1-2 0v-1.055A9.004 9.004 0 0 1 3.305 13H2.25a1 1 0 1 1 0-2h1.055a9.004 9.004 0 0 1 7.945-7.945V2a1 1 0 0 1 1-1m7 11a7 7 0 1 0-14 0 7 7 0 0 0 14 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GpsIcon);
module.exports = ForwardRef;