import * as React from "react";
function CursorIcon({
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
    d: "M8.26 2.497a2.15 2.15 0 0 0-2.427-.223c-.707.39-1.24 1.217-1.042 2.213L7.95 20.315c.377 1.89 2.876 2.267 3.887.724l2.687-4.103a.14.14 0 0 1 .115-.055l5.054-.177c1.857-.065 2.855-2.387 1.3-3.673zM6.752 4.092 6.75 4.07v-.003a.13.13 0 0 1 .051-.044A.2.2 0 0 1 6.899 4c.023.002.05.008.086.038l12.734 10.534a.1.1 0 0 1 .027.03q.004.005.003.005c0 .002.003.012-.004.03a.1.1 0 0 1-.032.043c-.01.008-.035.023-.09.025l-5.054.177a2.14 2.14 0 0 0-1.718.959l-2.687 4.103a.1.1 0 0 1-.053.046.2.2 0 0 1-.1.007.17.17 0 0 1-.08-.035c-.008-.007-.015-.014-.02-.038L6.752 4.095z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CursorIcon);
export default ForwardRef;