const React = require("react");
function Cloud1Icon({
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
    d: "M11.75 2a7.5 7.5 0 0 0-7.494 7.8A6 6 0 0 0 7.25 21h9a7 7 0 0 0 2.746-13.44A7.5 7.5 0 0 0 11.75 2m-5.5 7.5a5.5 5.5 0 0 1 10.907-1.013 1 1 0 0 0 .668.766A5 5 0 0 1 16.25 19h-9a4 4 0 0 1-1.551-7.688 1 1 0 0 0 .602-1.058A6 6 0 0 1 6.25 9.5",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cloud1Icon);
module.exports = ForwardRef;