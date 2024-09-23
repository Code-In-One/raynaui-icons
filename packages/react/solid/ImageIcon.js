const React = require("react");
function ImageIcon({
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
    d: "M5.683 8.798c.481.16.858.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.61 1.61 0 0 1 7.72 6.76a.537.537 0 0 0-1.018 0c-.16.481-.538.859-1.02 1.02a.537.537 0 0 0 0 1.018"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9l-4.373-2.915a2 2 0 0 0-2.748.517l-.762 1.088-.617-.387-.721-.408a2 2 0 0 0-2.624.595l-2.812 4.02A1.9 1.9 0 0 0 7.116 20H5.5a2 2 0 0 1-2-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageIcon);
module.exports = ForwardRef;