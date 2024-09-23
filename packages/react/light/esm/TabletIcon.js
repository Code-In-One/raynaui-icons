import * as React from "react";
function TabletIcon({
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
    d: "M17.25 1.5a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4v-13a4 4 0 0 1 4-4zm-12 4a2 2 0 0 1 2-2h2.134a1 1 0 0 0 .866.5h4a1 1 0 0 0 .866-.5h2.134a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TabletIcon);
export default ForwardRef;