const React = require("react");
function FolderCloudIcon({
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
    d: "M12.785 7.2H18.5a3 3 0 0 1 2.999 3v5.758A3.15 3.15 0 0 0 19.25 15C17.455 15 16 16.54 16 18.441q0 .24.03.471c-.494.22-.907.605-1.18 1.088H6.5a3 3 0 0 1-3-3V6.567A2.567 2.567 0 0 1 6.067 4h2.547c.719 0 1.822 1.178 2.648 2.06.3.32.562.6.757.771.14.123.58.369.766.369"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 22c-.828 0-1.5-.658-1.5-1.47 0-.61.379-1.134.918-1.356a2 2 0 0 1-.018-.262c0-1.056.873-1.912 1.95-1.912a1.94 1.94 0 0 1 1.917 1.56 1.77 1.77 0 0 1 1.233 1.675c0 .975-.806 1.765-1.8 1.765z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderCloudIcon);
module.exports = ForwardRef;