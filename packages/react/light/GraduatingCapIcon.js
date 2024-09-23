const React = require("react");
function GraduatingCapIcon({
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
    d: "M13.023 2.547a1.5 1.5 0 0 0-1.544 0L2.451 7.964a1.5 1.5 0 0 0 0 2.572l1.8 1.08v6.4c0 .438.193.884.584 1.177.76.57 3.667 2.557 7.416 2.557s6.655-1.987 7.416-2.557c.39-.293.584-.74.584-1.177v-6.4l1.8-1.08a1.5 1.5 0 0 0 0-2.572zM4.194 9.25l8.057-4.834 8.056 4.834-3.362 2.017-3.613-2.58a1 1 0 0 0-1.162 1.627l2.905 2.075-2.824 1.695zm11.057 5.366-2.228 1.337a1.5 1.5 0 0 1-1.544 0l-5.228-3.137v4.933c.882.617 3.184 2.001 6 2.001s5.117-1.384 6-2v-4.934l-1 .6V16a1 1 0 1 1-2 0z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GraduatingCapIcon);
module.exports = ForwardRef;