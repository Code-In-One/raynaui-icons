import * as React from "react";
function ScreenshotIcon({
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
    d: "M2.5 6a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2h-2a2 2 0 0 0-2 2v2a1 1 0 0 1-2 0zM22.5 6a4 4 0 0 0-4-4h-2a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v2a1 1 0 1 0 2 0zM6.5 22a4 4 0 0 1-4-4v-2a1 1 0 1 1 2 0v2a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2zM22.5 18a4 4 0 0 1-4 4h-2a1 1 0 1 1 0-2h2a2 2 0 0 0 2-2v-2a1 1 0 1 1 2 0zM9.021 10.69a.97.97 0 0 0-.611-.611.322.322 0 0 1 0-.611.97.97 0 0 0 .611-.612.322.322 0 0 1 .611 0 .97.97 0 0 0 .612.612.322.322 0 0 1 0 .611.97.97 0 0 0-.612.611.322.322 0 0 1-.611 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.5 5.6a4 4 0 0 0-4 4v4.8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9.6a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3.933l-1.573-1.049a2 2 0 0 0-2.748.518l-.179.255c-.784-.443-1.976-.394-2.492.344l-1.402 2.004a1.14 1.14 0 0 0-.205.704A2 2 0 0 1 7.5 14.4z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ScreenshotIcon);
export default ForwardRef;