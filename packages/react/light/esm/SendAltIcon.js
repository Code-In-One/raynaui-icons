import * as React from "react";
function SendAltIcon({
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
    d: "M5.775 12.836a2.5 2.5 0 0 0 2.488.665 2.5 2.5 0 0 0-.668 2.487l1.116 3.901c.574 2.008 3.211 2.468 4.432.774l9.063-12.58c1.26-1.748-.135-4.165-2.28-3.948L4.5 5.694c-2.077.21-2.997 2.724-1.545 4.225zm3.946 2.049 9.853-6.569-8.054 11.178a.5.5 0 0 1-.886-.155l-1.116-3.9a.5.5 0 0 1 .203-.554m-1.927-3.339 10.615-5.248L4.702 7.684 4.6 6.689l.1.995a.5.5 0 0 0-.309.845l2.82 2.917a.5.5 0 0 0 .582.1",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SendAltIcon);
export default ForwardRef;