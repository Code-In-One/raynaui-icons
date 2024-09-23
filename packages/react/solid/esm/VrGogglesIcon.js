import * as React from "react";
function VrGogglesIcon({
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
    d: "M2.547 13.555c-.159-1.598.025-3.642 1.505-5.155C6.132 6.272 9.558 6 12.5 6s6.368.272 8.448 2.4c1.48 1.513 1.664 3.557 1.505 5.156-.164 1.648-1.434 2.879-2.967 3.506a6.05 6.05 0 0 1-4.585 0l-.054-.022a6.2 6.2 0 0 0-4.694 0l-.054.022a6.05 6.05 0 0 1-4.585 0c-1.533-.627-2.803-1.858-2.967-3.507m7.006-4.634a1 1 0 0 0 1.194.648c.023-.004.084-.013.2-.023A19 19 0 0 1 12.5 9.5c.836 0 1.305.025 1.553.046.116.01.177.02.2.023a1 1 0 0 0 .568-1.916c-.026-.008 0 0-.002 0l-.001-.001-.003-.001-.007-.002-.013-.004-.078-.022-.12-.024a5 5 0 0 0-.37-.045A21 21 0 0 0 12.5 7.5c-.87 0-1.4.025-1.726.054-.164.014-.283.03-.371.045a2 2 0 0 0-.198.046l-.013.004-.007.002h-.003l-.002.001h-.001a1 1 0 0 0-.626 1.27",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(VrGogglesIcon);
export default ForwardRef;