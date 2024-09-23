const React = require("react");
function LightningOffIcon({
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
    d: "M12.5 9.056q0 .053.011.105l-5.282 5.282a.5.5 0 0 1-.415-.702l4.73-10.597c.22-.493.956-.336.956.203zM12.489 14.84l5.282-5.283a.5.5 0 0 1 .415.702l-4.73 10.598c-.22.492-.956.335-.956-.204v-5.708a.5.5 0 0 0-.011-.105M21.207 4.707a1 1 0 0 0-1.414-1.414l-16 16a1 1 0 1 0 1.414 1.414z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LightningOffIcon);
module.exports = ForwardRef;