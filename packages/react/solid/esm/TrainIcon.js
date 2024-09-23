import * as React from "react";
function TrainIcon({
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
    d: "M20.5 16a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-6a8 8 0 1 1 16 0zm-3-3v-3a5 5 0 0 0-10 0v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2m-7 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TrainIcon);
export default ForwardRef;