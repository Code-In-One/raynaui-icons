const React = require("react");
function ChartIcon({
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
    d: "M6.043 14.374a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.34-.068l1.273 1.04 3.362-3.613a1 1 0 0 1 1.462-.003l2 2.133a1 1 0 1 1-1.46 1.368l-1.267-1.352-3.27 3.516a1 1 0 0 1-1.366.094l-1.3-1.062-3.36 3.36a1 1 0 0 1-1.414 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.75 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-3.293-3.293-3.293 3.293a1 1 0 0 1-1.414-1.414L10.336 19H5.75a4 4 0 0 1-4-4zm18 12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChartIcon);
module.exports = ForwardRef;