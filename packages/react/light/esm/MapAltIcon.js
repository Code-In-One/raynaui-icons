import * as React from "react";
function MapAltIcon({
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
    d: "M4.61 2.278a2 2 0 0 0-2.86 1.806v11.63a3 3 0 0 0 1.71 2.708l4.56 2.171a1 1 0 0 0 .548.09l7.313-.87 4.01 1.909a2 2 0 0 0 2.859-1.806V8.286a3 3 0 0 0-1.71-2.708l-4.56-2.171a1 1 0 0 0-.535-.092l-4.275.452-.03.004-3.03.412zm16.14 17.638-3.7-1.762V5.894l3.13 1.49a1 1 0 0 1 .57.903zm-5.7-2.018V5.42l-3.155.334-2.445.332v12.477zM3.75 4.084l3.7 1.762v12.26l-3.13-1.49a1 1 0 0 1-.57-.903z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MapAltIcon);
export default ForwardRef;