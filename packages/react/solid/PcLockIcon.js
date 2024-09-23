const React = require("react");
function PcLockIcon({
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
    d: "M5.5 4.9h10a3 3 0 0 1 3 3v3.366a1.944 1.944 0 0 0-2.194 1.928v1.256c-.86 0-1.556.696-1.556 1.556V17.7h-3v.9H13a1 1 0 1 1 0 2H8.5a1 1 0 0 1 0-2h1.25v-.9H5.5a3 3 0 0 1-3-3V7.9a3 3 0 0 1 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.5 18.667v-2.345c0-.859.696-1.555 1.556-1.555v-.823a1.944 1.944 0 0 1 3.888 0v.823c.86 0 1.556.696 1.556 1.555v2.345a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1M19 13.25a.5.5 0 0 1 .5.5v.9h-1v-.9a.5.5 0 0 1 .5-.5",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PcLockIcon);
module.exports = ForwardRef;