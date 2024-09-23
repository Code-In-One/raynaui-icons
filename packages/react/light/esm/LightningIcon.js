import * as React from "react";
function LightningIcon({
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
    d: "M13.75 3.923c0-1.29-1.758-1.671-2.292-.496l-4.49 9.876A1.2 1.2 0 0 0 8.061 15h3.69v5.077c0 1.29 1.758 1.671 2.292.496l4.489-9.876A1.2 1.2 0 0 0 17.44 9h-3.69zM9.303 13l2.447-5.383V9.8a1.2 1.2 0 0 0 1.2 1.2h3.247l-2.447 5.383V14.2a1.2 1.2 0 0 0-1.2-1.2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LightningIcon);
export default ForwardRef;