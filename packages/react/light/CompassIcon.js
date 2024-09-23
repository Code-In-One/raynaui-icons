const React = require("react");
function CompassIcon({
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
    d: "M15.778 9.32c-.026-1.51-1.65-2.448-2.97-1.715L9.69 9.335a2 2 0 0 0-1.029 1.782l.06 3.564c.025 1.51 1.65 2.447 2.97 1.715l3.117-1.73a2 2 0 0 0 1.029-1.783zm-5.116 1.763 3.116-1.73.06 3.564-3.116 1.73z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.25 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11m-9 11a9 9 0 1 1 18 0 9 9 0 0 1-18 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CompassIcon);
module.exports = ForwardRef;