import * as React from "react";
function PaintBrushIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11.926 16.652c-1.08-1.26-2.848-3.16-4.571-4.54a.93.93 0 0 0-.963-.123c-2.943 1.353-2.272 2.938-1.602 8.97.176 1.584 3.076-.995 6.888-3.07.454-.247.584-.845.248-1.238Zm0 0c2.778-2.779 8.977-9.685 10.033-13.449.15-.531-.297-.966-.82-.79-3.435 1.152-10.524 7.192-13.44 9.98"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M.75 0h24v24h-24z"
  }))));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PaintBrushIcon);
export default ForwardRef;