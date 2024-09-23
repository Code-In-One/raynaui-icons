import * as React from "react";
function ElementsIcon({
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
    d: "M14 15v5a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 22 20v-5a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 14 15M5.531 13.901l-2.63 2.63a1.37 1.37 0 0 0 0 1.938l2.63 2.63a1.37 1.37 0 0 0 1.938 0l2.63-2.63a1.37 1.37 0 0 0 0-1.938l-2.63-2.63a1.37 1.37 0 0 0-1.938 0M3 4v5a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 11 9V4a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 3 4M18 10.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ElementsIcon);
export default ForwardRef;