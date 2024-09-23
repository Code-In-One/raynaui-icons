const React = require("react");
function PlayIcon({
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
    d: "M9.96 3.42c-2.622-1.31-5.71.595-5.71 3.529V17.05c0 2.934 3.088 4.84 5.71 3.529l10.108-5.051c2.91-1.454 2.91-5.604 0-7.057zM6.25 6.95c0-1.445 1.522-2.387 2.817-1.74l10.107 5.052c1.435.716 1.435 2.762 0 3.479L9.067 18.79c-1.295.648-2.817-.294-2.817-1.739z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PlayIcon);
module.exports = ForwardRef;