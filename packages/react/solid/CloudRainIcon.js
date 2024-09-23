const React = require("react");
function CloudRainIcon({
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
    d: "M2.5 15a5 5 0 0 0 3.713 4.833l.902-3.157a3 3 0 0 1 4.135-1.903 2.99 2.99 0 0 1 2.5 0 3 3 0 0 1 4.134 3.552l-.458 1.604a6.001 6.001 0 0 0 .964-11.625A6.5 6.5 0 0 0 5.56 10.39 5 5 0 0 0 2.5 15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.962 17.775a1 1 0 1 0-1.924-.55l-1 3.5a1 1 0 1 0 1.924.55zM12.775 16.539a1 1 0 0 1 .686 1.236l-1 3.5a1 1 0 1 1-1.922-.55l1-3.5a1 1 0 0 1 1.236-.687M15.962 17.775a1 1 0 1 0-1.923-.55l-1 3.5a1 1 0 1 0 1.922.55z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CloudRainIcon);
module.exports = ForwardRef;