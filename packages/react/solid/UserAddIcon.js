const React = require("react");
function UserAddIcon({
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
    d: "M21.5 3a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V6h1a1 1 0 1 0 0-2h-1zM16.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.5 22c-2.867 0-8.351-1.33-6.694-4 1.245-2.008 3.765-4 6.694-4s5.449 1.992 6.694 4c1.657 2.67-3.827 4-6.694 4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserAddIcon);
module.exports = ForwardRef;