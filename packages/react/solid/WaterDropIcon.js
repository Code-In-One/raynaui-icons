const React = require("react");
function WaterDropIcon({
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
    d: "M12.026 3.423 8.282 14.655a4 4 0 0 0 .966 4.093l.424.424a4 4 0 0 0 5.656 0l.424-.424a4 4 0 0 0 .966-4.093L12.974 3.423a.5.5 0 0 0-.948 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WaterDropIcon);
module.exports = ForwardRef;