import * as React from "react";
function FlagIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.605 1.581a1 1 0 0 1 1.083.193l.002.002.01.01.044.041.169.155c.145.132.349.314.585.515.483.413 1.057.868 1.519 1.147 1.507.91 3.884 1.17 6.048 1.154a29 29 0 0 0 3.708-.275l.053-.008.012-.002h.002a1 1 0 0 1 1.096 1.338L18.61 9.39l2.238 3.581a1 1 0 0 1-.656 1.511C14.923 15.51 11.738 14.8 7 13.54v7.96a1 1 0 1 1-2 0v-19a1 1 0 0 1 .605-.919m9.475 5.217a31 31 0 0 0 2.409-.116l-.925 2.467a1 1 0 0 0 .088.881l1.708 2.733c-4.132.583-6.88-.096-11.36-1.293v-6.8c.323.25.662.493.983.686 2.02 1.219 4.893 1.458 7.097 1.442",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FlagIcon);
export default ForwardRef;