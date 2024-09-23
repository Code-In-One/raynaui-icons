import * as React from "react";
function CandlesVIcon({
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
    d: "M6.5 3v3H6a1.5 1.5 0 0 0-1.5 1.5v3A1.5 1.5 0 0 0 6 12h.5v9a1 1 0 1 0 2 0v-9H9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 9 6h-.5V3a1 1 0 0 0-2 0M18.5 9h.5a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 19 18h-.5v3a1 1 0 1 1-2 0v-3H16a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 16 9h.5V3a1 1 0 1 1 2 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CandlesVIcon);
export default ForwardRef;