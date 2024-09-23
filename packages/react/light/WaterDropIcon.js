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
    fillRule: "evenodd",
    d: "M14.173 3.107c-.456-1.368-2.39-1.368-2.846 0L7.583 14.338a5 5 0 0 0 1.208 5.117l.423.424a5 5 0 0 0 7.071 0l.424-.424a5 5 0 0 0 1.208-5.116zM9.48 14.97l3.27-9.809 3.27 9.809a3 3 0 0 1-.725 3.07l-.424.423a3 3 0 0 1-4.242 0l-.424-.423a3 3 0 0 1-.725-3.07",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WaterDropIcon);
module.exports = ForwardRef;