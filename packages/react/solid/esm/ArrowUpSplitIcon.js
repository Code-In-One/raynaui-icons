import * as React from "react";
function ArrowUpSplitIcon({
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
    d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zm13.797-1.225a1 1 0 0 1 1.408-.128l2.433 2.027a1 1 0 0 1 .249 1.233l-1.616 3.23a1 1 0 1 1-1.789-.894l.7-1.4a6.33 6.33 0 0 0-4.08 5.917v6.075a1 1 0 0 1-1.102.995 1 1 0 0 1-1.101-.995V13.76a6.33 6.33 0 0 0-4.082-5.918l.7 1.401a1 1 0 1 1-1.788.894l-1.616-3.23a.997.997 0 0 1 .249-1.233l2.433-2.027a1 1 0 0 1 1.28 1.536l-.827.689A8.35 8.35 0 0 1 12.5 9.994a8.35 8.35 0 0 1 4.752-4.122l-.827-.689a1 1 0 0 1-.128-1.408",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowUpSplitIcon);
export default ForwardRef;