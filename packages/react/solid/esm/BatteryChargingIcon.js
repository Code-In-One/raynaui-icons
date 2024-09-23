import * as React from "react";
function BatteryChargingIcon({
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
    d: "m10.99 11.889.018-.046.065.046zM11.992 12.158l-.065-.047h.084z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.5 6h-10a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5V9a3 3 0 0 0-3-3m-4 3.526c0-1.426-1.963-1.812-2.503-.493l-1.253 3.064a1.3 1.3 0 0 0 1.203 1.792h.553v.585c0 1.426 1.963 1.812 2.503.493l1.253-3.064a1.3 1.3 0 0 0-1.203-1.792H12.5z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BatteryChargingIcon);
export default ForwardRef;