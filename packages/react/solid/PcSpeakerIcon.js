const React = require("react");
function PcSpeakerIcon({
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
    d: "M15.75 4.4h-10a3 3 0 0 0-3 3v6.8a3 3 0 0 0 3 3h4v1.4H8.5a1 1 0 1 0 0 2H13a1 1 0 0 0 0-2h-1.25v-1.4h2.169l.272-5.328A2.5 2.5 0 0 1 16.688 9.5h2.062V7.4a3 3 0 0 0-3-3"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M20.098 10.25h-3.195a2 2 0 0 0-1.998 1.9l-.3 6a2 2 0 0 0 1.997 2.1h3.796a2 2 0 0 0 1.997-2.1l-.3-6a2 2 0 0 0-1.997-1.9m-.348 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-1.25 4.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PcSpeakerIcon);
module.exports = ForwardRef;