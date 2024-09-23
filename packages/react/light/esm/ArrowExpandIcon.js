import * as React from "react";
function ArrowExpandIcon({
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
    d: "M21.528 4.222a1 1 0 0 0-1-1h-4.243a1 1 0 1 0 0 2h1.829L5.972 17.364v-1.828a1 1 0 1 0-2 0v4.242a1 1 0 0 0 1 1h4.242a1 1 0 0 0 0-2H7.386L19.528 6.636v1.828a1 1 0 1 0 2 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowExpandIcon);
export default ForwardRef;