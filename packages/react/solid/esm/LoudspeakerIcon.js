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
    d: "M21.329 2.96a.5.5 0 0 1 .671.47v12.14a.5.5 0 0 1-.671.47l-7.098-2.59v-7.9zM13.23 5.74v7.52l-6.925-.542A2.5 2.5 0 0 1 4 10.225v-1.45a2.5 2.5 0 0 1 2.305-2.493zM8.795 20.187l-.729-6.328 2.986.233.687 5.75a1.482 1.482 0 1 1-2.944.345"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LoudspeakerIcon);
export default ForwardRef;