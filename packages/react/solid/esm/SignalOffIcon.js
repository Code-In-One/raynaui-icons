import * as React from "react";
function SignalOffIcon({
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
    d: "M18.5 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M15.5 9a1 1 0 1 0-2 0v12a1 1 0 0 0 2 0zM10.5 12a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1M6.5 16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M6.621 4.707a1 1 0 1 0-1.414 1.414l.707.707-.707.707A1 1 0 1 0 6.621 8.95l.707-.707.707.707A1 1 0 0 0 9.45 7.535l-.708-.707.708-.707a1 1 0 0 0-1.415-1.414l-.707.707z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SignalOffIcon);
export default ForwardRef;