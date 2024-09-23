import * as React from "react";
function SettingsIcon({
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
    d: "M15.25 3a4 4 0 0 1 3.874 3h2.126a1 1 0 1 1 0 2h-2.126a4.002 4.002 0 0 1-7.748 0H3.25a1 1 0 0 1 0-2h8.126c.444-1.725 2.01-3 3.874-3m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5.376 16H3.25a1 1 0 1 0 0 2h2.126a4.002 4.002 0 0 0 7.748 0h8.126a1 1 0 1 0 0-2h-8.126a4.002 4.002 0 0 0-7.748 0m3.874 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SettingsIcon);
export default ForwardRef;