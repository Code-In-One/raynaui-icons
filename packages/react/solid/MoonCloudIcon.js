const React = require("react");
function MoonCloudIcon({
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
    d: "M15.04 2.326c.422.11.313.76-.111.861C11.865 3.92 9.5 6.71 9.5 10q.001.619.104 1.209a5.21 5.21 0 0 0-1.79 3.953q0 .36.047.707c-1.282.555-2.21 1.803-2.344 3.289A9.97 9.97 0 0 1 2.5 12c0-5.523 4.477-10 10-10 .878 0 1.73.113 2.54.326M20.794 17.589a4.8 4.8 0 0 0-.699-1.582q.488-.292.919-.657c.333-.28.915.019.75.423a10 10 0 0 1-.97 1.816M7.5 18.765c0 1.787 1.343 3.235 3 3.235h5.4c1.988 0 3.6-1.738 3.6-3.882 0-1.717-1.033-3.174-2.466-3.686C16.697 12.479 15.11 11 13.2 11c-2.154 0-3.9 1.883-3.9 4.206q0 .293.036.576c-1.079.49-1.836 1.64-1.836 2.983"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MoonCloudIcon);
module.exports = ForwardRef;