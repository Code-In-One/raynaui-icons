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
    d: "M6.75 2a4 4 0 0 0-4 4v2a1 1 0 0 0 2 0V6a2 2 0 0 1 2-2h2a1 1 0 0 0 0-2zM18.75 2a4 4 0 0 1 4 4v2a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2h-2a1 1 0 1 1 0-2zM2.75 18a4 4 0 0 0 4 4h2a1 1 0 1 0 0-2h-2a2 2 0 0 1-2-2v-2a1 1 0 1 0-2 0zM18.75 22a4 4 0 0 0 4-4v-2a1 1 0 1 0-2 0v2a2 2 0 0 1-2 2h-2a1 1 0 1 0 0 2zM8.66 10.079a.97.97 0 0 1 .611.611.322.322 0 0 0 .611 0 .97.97 0 0 1 .612-.611.322.322 0 0 0 0-.611.97.97 0 0 1-.612-.612.322.322 0 0 0-.61 0 .97.97 0 0 1-.612.612.322.322 0 0 0 0 .611"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 9.6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4.8q0 .18-.016.357.016.141.016.285a3.36 3.36 0 0 1-3.358 3.358H9.75a4 4 0 0 1-4-4zm8.441 6.8h1.559a2 2 0 0 0 1.956-1.58.57.57 0 0 0-.21-.255l-1.874-1.248a1 1 0 0 0-1.374.258l-.876 1.252a1 1 0 0 0 .82 1.573m3.559-4.068V9.6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4.8c0 .494.179.946.476 1.295.064-.236.169-.46.31-.662l1.403-2.005a2.75 2.75 0 0 1 3.058-1.052 3 3 0 0 1 3.734-.324zm-6.445 2.231c-.182.62-.149 1.26.057 1.837h-1.071a.141.141 0 0 1-.116-.221z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ScreenshotIcon);
export default ForwardRef;