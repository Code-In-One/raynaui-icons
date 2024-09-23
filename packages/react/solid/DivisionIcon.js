const React = require("react");
function DivisionIcon({
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
    d: "M14.307 2.748a2.6 2.6 0 0 0-3.613 0 2.6 2.6 0 0 1-2.17.705A2.6 2.6 0 0 0 5.6 5.577 2.6 2.6 0 0 1 4.26 7.423a2.6 2.6 0 0 0-1.117 3.436c.352.72.352 1.562 0 2.282a2.6 2.6 0 0 0 1.117 3.436A2.6 2.6 0 0 1 5.6 18.423a2.6 2.6 0 0 0 2.923 2.124 2.6 2.6 0 0 1 2.17.705 2.6 2.6 0 0 0 3.614 0 2.6 2.6 0 0 1 2.17-.705 2.6 2.6 0 0 0 2.923-2.123c.139-.79.634-1.471 1.342-1.847a2.6 2.6 0 0 0 1.116-3.436 2.6 2.6 0 0 1 0-2.282 2.6 2.6 0 0 0-1.117-3.436 2.6 2.6 0 0 1-1.34-1.846 2.6 2.6 0 0 0-2.924-2.124 2.6 2.6 0 0 1-2.17-.705m-3.04 8.025a1.25 1.25 0 1 0-1.768-1.768 1.25 1.25 0 0 0 1.767 1.768m4.242 2.475a1.25 1.25 0 1 1-1.768 1.767 1.25 1.25 0 0 1 1.768-1.767m-5.837.166a1 1 0 0 0 1.414 1.415l4.243-4.243a1 1 0 0 0-1.415-1.414z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DivisionIcon);
module.exports = ForwardRef;