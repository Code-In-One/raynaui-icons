const React = require("react");
function MessageAltIcon({
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
    d: "M6.75 10a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M7.75 13a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.75 16a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V9.297a2 2 0 0 1 .264-.993l.75-1.312C23.524 5.66 22.562 4 21.026 4H5.75a4 4 0 0 0-4 4zm4 2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h15.277l-.75 1.312a4 4 0 0 0-.527 1.985V16a2 2 0 0 1-2 2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MessageAltIcon);
module.exports = ForwardRef;