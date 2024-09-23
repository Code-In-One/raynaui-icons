const React = require("react");
function GamePadIcon({
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
    d: "M8.25 10a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1M16.25 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M17.25 15a1 1 0 1 0-2 0 1 1 0 0 0 2 0M18.25 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2M15.25 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.25 3a1 1 0 0 0-2 0c0 .173-.06.456-.211.666-.115.159-.315.334-.789.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.752 1.137a2 2 0 0 0-.045.312 8.646 8.646 0 0 0-9.128 6.925l-.223 1.116a6.054 6.054 0 0 0 7.6 7.008l1.372-.392a5.9 5.9 0 0 1 3.25 0l1.373.392a6.054 6.054 0 0 0 7.6-7.008l-.224-1.116a8.65 8.65 0 0 0-8.285-6.948 2.73 2.73 0 0 0 1.323-.99A3.23 3.23 0 0 0 16.25 3m-4.36 4.933a1 1 0 0 0 .72 0q.357-.015.713-.06a6.645 6.645 0 0 1 7.34 5.292l.223 1.115a4.054 4.054 0 0 1-5.089 4.693l-1.372-.392a7.9 7.9 0 0 0-4.35 0l-1.372.392a4.054 4.054 0 0 1-5.09-4.693l.224-1.115a6.646 6.646 0 0 1 7.34-5.291q.357.045.713.059",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GamePadIcon);
module.exports = ForwardRef;