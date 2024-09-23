const React = require("react");
function Settings2Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.807 2.748a2.6 2.6 0 0 0-3.613 0 2.6 2.6 0 0 1-2.17.705A2.6 2.6 0 0 0 5.1 5.577 2.6 2.6 0 0 1 3.76 7.423a2.6 2.6 0 0 0-1.117 3.436c.352.72.352 1.562 0 2.282a2.6 2.6 0 0 0 1.117 3.436A2.6 2.6 0 0 1 5.1 18.423a2.6 2.6 0 0 0 2.923 2.124 2.6 2.6 0 0 1 2.17.705 2.6 2.6 0 0 0 3.614 0 2.6 2.6 0 0 1 2.17-.705 2.6 2.6 0 0 0 2.923-2.123c.139-.79.634-1.471 1.342-1.847a2.6 2.6 0 0 0 1.116-3.436 2.6 2.6 0 0 1 0-2.282 2.6 2.6 0 0 0-1.117-3.436 2.6 2.6 0 0 1-1.34-1.846 2.6 2.6 0 0 0-2.924-2.124 2.6 2.6 0 0 1-2.17-.705M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Settings2Icon);
module.exports = ForwardRef;