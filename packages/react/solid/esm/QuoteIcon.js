import * as React from "react";
function QuoteIcon({
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
    d: "M7.5 10.34V7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5.29c0 .224-.024.444-.085.659-.332 1.16-1.684 5.118-5.022 6.487-.813.334-1.673.482-2.433.537-.87.063-1.25-1.064-.8-1.812.177-.297.345-.63.483-.995.217-.574.33-1.139.385-1.63.108-.967-.507-1.812-1.372-2.257l-.527-.27A3 3 0 0 1 7.5 10.341"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(QuoteIcon);
export default ForwardRef;