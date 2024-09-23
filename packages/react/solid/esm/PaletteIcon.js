import * as React from "react";
function PaletteIcon({
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
    d: "M7.5 20.5C1 17.5-.577 3.545 12.5 3c12-.5 12 14.5 7.5 14.5-1.047 0-1.827-.119-2.407-.304-.429-.137-.91-.397-1.405-.664-1.083-.584-2.235-1.206-3.057-.669-.805.525-1.202 1.352-.131 2.637 3.2 3.841-3.168 3.167-5.5 2M17 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-5.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PaletteIcon);
export default ForwardRef;