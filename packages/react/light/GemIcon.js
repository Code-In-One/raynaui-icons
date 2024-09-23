const React = require("react");
function GemIcon({
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
    d: "M9.25 2a1 1 0 0 0-.196.02l-3.938.787A3 3 0 0 0 2.92 4.635L1.322 8.629a1 1 0 0 0 .128.971l8.4 11.2a3 3 0 0 0 4.8 0l8.4-11.2a1 1 0 0 0 .128-.971l-1.597-3.994a3 3 0 0 0-2.197-1.828l-3.938-.788A1 1 0 0 0 15.25 2zm10.63 8.494-4.457 5.942 2.525-5.556zm.995-2.239-2.917.584-1.296-4.537 2.33.466a1 1 0 0 1 .732.61zM8.575 9l1.43-5h4.49l1.43 5zm3.675 9.583L8.803 11h6.894zm-3.173-2.147L6.552 10.88l-1.932-.386zm-4.3-11.059L3.624 8.255l2.917.584 1.296-4.537-2.33.466a1 1 0 0 0-.732.61",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GemIcon);
module.exports = ForwardRef;