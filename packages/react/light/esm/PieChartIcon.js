import * as React from "react";
function PieChartIcon({
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
    d: "M16.888 1.08C15.643.904 14.75 1.94 14.75 3v5a2 2 0 0 0 2 2h5c1.06 0 2.097-.893 1.92-2.138a8 8 0 0 0-6.782-6.781M16.75 3q0 .005-.015.021a.17.17 0 0 1-.129.039l.144.023V8h4.917l.023.144a.17.17 0 0 1 .039-.129A.1.1 0 0 1 21.75 8h-.083a6.01 6.01 0 0 0-4.917-4.917z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.75 4c0-1.071-.893-2.073-2.108-1.94C6.64 2.614 2.75 6.852 2.75 12c0 5.523 4.477 10 10 10 5.149 0 9.387-3.89 9.94-8.892.133-1.215-.869-2.108-1.94-2.108h-5a2 2 0 0 1-2-2zm-9 8a8 8 0 0 1 7-7.938V9a4 4 0 0 0 4 4h4.938A8.002 8.002 0 0 1 4.75 12",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PieChartIcon);
export default ForwardRef;