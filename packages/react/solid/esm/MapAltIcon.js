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
    d: "M2.268 2.6a.25.25 0 0 1 .357-.225l4.447 2.118a.5.5 0 0 1 .285.451v13.967a.5.5 0 0 1-.715.451L2.98 17.618a1.25 1.25 0 0 1-.712-1.128zM9.416 19.98a.5.5 0 0 1-.559-.497V5.246a.5.5 0 0 1 .433-.495l2.751-.374L15.591 4a.5.5 0 0 1 .552.497v14.237a.5.5 0 0 1-.44.496zM17.928 19.507a.5.5 0 0 1-.285-.452V5.09a.5.5 0 0 1 .715-.452l3.662 1.744c.436.207.713.647.713 1.129v13.889a.25.25 0 0 1-.358.226z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MapAltIcon);
export default ForwardRef;