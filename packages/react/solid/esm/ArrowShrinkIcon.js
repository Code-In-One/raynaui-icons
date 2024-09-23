import * as React from "react";
function ArrowShrinkIcon({
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
    d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-.207 2.793a1 1 0 0 0 0 1.414L8.55 9.464H6.722a1 1 0 0 0 0 2h4.242a1 1 0 0 0 1-1V6.222a1 1 0 1 0-2 0V8.05L6.708 4.793a1 1 0 0 0-1.414 0m12.985 7.743h-4.242a1 1 0 0 0-1 1v4.242a1 1 0 1 0 2 0V15.95l3.257 3.257a1 1 0 0 0 1.414-1.414l-3.257-3.257h1.828a1 1 0 1 0 0-2",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowShrinkIcon);
export default ForwardRef;