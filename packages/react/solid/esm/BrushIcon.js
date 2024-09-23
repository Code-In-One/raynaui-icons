import * as React from "react";
function BrushIcon({
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
    d: "M14 3v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 1 2 2v4h-16v-4a2 2 0 0 1 2-2H9a2 2 0 0 0 2-2V3a1.5 1.5 0 1 1 3 0M4.257 15h16.486l.693 4.709A2 2 0 0 1 19.457 22h-1.836a1 1 0 0 0-.014-.166l-.515-3.062a1 1 0 1 0-1.972.331L15.607 22H5.542a2 2 0 0 1-1.978-2.291z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrushIcon);
export default ForwardRef;