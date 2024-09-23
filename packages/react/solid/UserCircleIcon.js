const React = require("react");
function UserCircleIcon({
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
    d: "M23.5 12c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-11.003 9.5c-2.894 0-8.186-1.933-6.757-4.5 1.258-2.259 3.8-4.5 6.757-4.5s5.5 2.241 6.757 4.5c1.451 2.608-3.863 4.5-6.757 4.5M12.5 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserCircleIcon);
module.exports = ForwardRef;