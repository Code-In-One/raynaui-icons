const React = require("react");
function BackwardIcon({
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
    d: "m10.102 7.477-5.686 2.841c-1.221.61-1.221 2.353 0 2.964l5.686 2.841a1.657 1.657 0 0 0 2.398-1.482v-2.839c0 .588.306 1.175.916 1.48l5.686 2.841a1.657 1.657 0 0 0 2.398-1.482V8.96a1.657 1.657 0 0 0-2.398-1.482l-5.686 2.841c-.61.305-.915.892-.916 1.48v-2.84a1.657 1.657 0 0 0-2.398-1.48"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BackwardIcon);
module.exports = ForwardRef;