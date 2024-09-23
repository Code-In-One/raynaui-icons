import * as React from "react";
function ArrowDownRightIcon({
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
    d: "M20.114 18.364a1 1 0 0 1-1 1h-5.657a1 1 0 1 1 0-2h3.242L5.68 6.344a1 1 0 1 1 1.414-1.415l11.02 11.02v-3.242a1 1 0 1 1 2 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowDownRightIcon);
export default ForwardRef;