const React = require("react");
function MicrophoneIcon({
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
    d: "M10.75 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M15.75 9a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.75 2a7 7 0 0 0-7 7v4a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7m-5 7a5 5 0 0 1 10 0v4a5 5 0 0 1-10 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.699 15.684a1 1 0 1 0-1.897.632c2.866 8.6 15.03 8.6 17.897 0a1 1 0 0 0-1.897-.632c-2.26 6.776-11.844 6.776-14.103 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MicrophoneIcon);
module.exports = ForwardRef;