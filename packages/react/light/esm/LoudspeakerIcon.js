import * as React from "react";
function LoudspeakerIcon({
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
    d: "M23.75 3.43a2 2 0 0 0-2.686-1.88l-7.297 2.664-7.329.573A4 4 0 0 0 2.75 8.775v1.45a4 4 0 0 0 3.688 3.988l.413.033.703 6.113a2.982 2.982 0 1 0 5.924-.695l-.59-4.946.879.068 7.297 2.663a2 2 0 0 0 2.686-1.878zM6.594 6.78l6.387-.499v6.438l-6.387-.5a2 2 0 0 1-1.844-1.994v-1.45A2 2 0 0 1 6.594 6.78m15.156 8.79-6.77-2.47V5.9l6.77-2.47zM9.541 20.13l-.659-5.726 1.972.155.638 5.342a.982.982 0 1 1-1.95.23",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LoudspeakerIcon);
export default ForwardRef;