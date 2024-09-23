import * as React from "react";
function SaveIcon({
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
    d: "M4.5 6v12a3 3 0 0 0 3 3h1v-2a2 2 0 0 1 2-2h4.2a2 2 0 0 1 2 2v2h.8a3 3 0 0 0 3-3V8.8a3 3 0 0 0-.948-2.189l-2.986-2.8A3 3 0 0 0 14.514 3H7.5a3 3 0 0 0-3 3M9 6a1 1 0 0 0 0 2h6.7a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.7 19h-4.2v1h4.2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SaveIcon);
export default ForwardRef;