import * as React from "react";
function BranchIcon({
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
    d: "M8.25 7.33a3.001 3.001 0 1 0-2 0v5.34a3.001 3.001 0 0 0 .002 5.66l-.002.067V21.5a1 1 0 1 0 2 0v-3.103q0-.034-.002-.067a3 3 0 0 0 1.729-1.577c3.672.012 6.107-.817 7.56-2.668 1.348-1.719 1.66-4.109 1.706-6.753A3.001 3.001 0 0 0 18.25 1.5a3 3 0 0 0-1.008 5.827c-.05 2.576-.362 4.356-1.279 5.523-.875 1.115-2.5 1.889-5.807 1.903a3 3 0 0 0-1.906-2.082zm0-2.83a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-10 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BranchIcon);
export default ForwardRef;