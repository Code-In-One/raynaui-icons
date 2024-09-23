const React = require("react");
function BookmarksIcon({
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
    d: "M5.886 3.818c-.997 0-1.818.817-1.818 1.84V13.8c0 .906 1.129 1.252 1.64.549l.25-.343a2.7 2.7 0 0 1 1.747-1.085v1.903a.9.9 0 0 0-.277.252l-.25.343C5.612 17.572 2.25 16.436 2.25 13.8V5.657C2.25 3.644 3.872 2 5.886 2h4.546c2.008 0 3.625 1.633 3.636 3.637H12.25a1.83 1.83 0 0 0-1.818-1.819z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M18.808 6.546c1.855 0 3.442 1.437 3.442 3.31v9.632c0 1.223-.83 2.073-1.768 2.378-.935.305-2.1.113-2.865-.819l-1.889-2.302a.38.38 0 0 0-.296-.13.38.38 0 0 0-.297.13l-1.889 2.302c-.764.932-1.93 1.124-2.864.82-.938-.306-1.768-1.156-1.768-2.38V9.857c0-1.873 1.587-3.31 3.441-3.31zm1.624 3.31c0-.78-.68-1.492-1.624-1.492h-6.753c-.943 0-1.623.713-1.623 1.492v9.632c0 .3.186.543.512.65.33.106.674.027.897-.244l1.889-2.302c.87-1.061 2.534-1.061 3.404 0l1.889 2.302c.222.271.567.35.896.243.326-.106.513-.349.513-.65z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BookmarksIcon);
module.exports = ForwardRef;