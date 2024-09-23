const React = require("react");
function FileUploadIcon({
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
    d: "M13.5 2h-6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h2v-3.068a3 3 0 0 1-.493-4.841l1.5-1.333a3 3 0 0 1 3.986 0l1.5 1.333a3 3 0 0 1-.493 4.841V22h2a3 3 0 0 0 3-3v-9h-3a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.297 8a3 3 0 0 0-.492-.834L16.4 3.079a3 3 0 0 0-.9-.73V6a2 2 0 0 0 2 2zM13.164 14.253a1 1 0 0 0-1.328 0l-1.5 1.333A1 1 0 0 0 11.5 17.2V22a1 1 0 1 0 2 0v-4.8a1 1 0 0 0 1.164-1.614z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileUploadIcon);
module.exports = ForwardRef;