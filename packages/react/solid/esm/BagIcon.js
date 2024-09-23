import * as React from "react";
function BagIcon({
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
    d: "M7.284 6.058c.127-.615.308-1.24.563-1.83.36-.833.887-1.645 1.664-2.25C10.303 1.36 11.298 1 12.5 1s2.198.36 2.989.977c.777.606 1.304 1.418 1.664 2.251.255.59.436 1.215.563 1.83a2.97 2.97 0 0 1 2.295 2.174c3.53 14.026.39 13.92-5.295 13.726-.702-.024-1.444-.049-2.216-.049s-1.514.025-2.216.05c-5.685.192-8.825.299-5.295-13.727a2.97 2.97 0 0 1 2.295-2.174M9.35 6c.09-.337.199-.667.333-.978.27-.626.62-1.126 1.058-1.468.424-.33.981-.554 1.759-.554s1.335.224 1.759.554c.438.342.788.842 1.058 1.468.134.31.244.64.333.978z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BagIcon);
export default ForwardRef;