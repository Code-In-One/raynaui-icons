const React = require("react");
function UploadIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M12.707 2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 5.414V17a1 1 0 1 0 2 0V5.414l2.293 2.293a1 1 0 1 0 1.414-1.414z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17.5h7.063a2 2 0 0 0 3.874 0H21V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UploadIcon);
module.exports = ForwardRef;