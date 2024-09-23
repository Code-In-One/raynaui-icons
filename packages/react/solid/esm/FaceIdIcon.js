import * as React from "react";
function FaceIdIcon({
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
    d: "M6.5 2a4 4 0 0 0-4 4v2a1 1 0 0 0 2 0V6a2 2 0 0 1 2-2h2a1 1 0 0 0 0-2zM18.5 2a4 4 0 0 1 4 4v2a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2h-2a1 1 0 1 1 0-2zM2.5 18a4 4 0 0 0 4 4h2a1 1 0 1 0 0-2h-2a2 2 0 0 1-2-2v-2a1 1 0 1 0-2 0zM18.5 22a4 4 0 0 0 4-4v-2a1 1 0 1 0-2 0v2a2 2 0 0 1-2 2h-2a1 1 0 1 0 0 2zM7.25 8.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M16.5 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M9.606 15.553a1 1 0 0 1 1.341-.447 3.47 3.47 0 0 0 3.106 0 1 1 0 1 1 .894 1.788c-1.54.77-3.354.77-4.894 0a1 1 0 0 1-.447-1.341M13.394 10.053a1 1 0 1 0-1.788.894l.527 1.055A1 1 0 0 0 13 13.5h.176a1.2 1.2 0 0 0 1.074-1.737z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FaceIdIcon);
export default ForwardRef;