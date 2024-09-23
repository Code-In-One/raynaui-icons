import * as React from "react";
function PullRequestIcon({
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
    d: "M15.457 3.707a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 1 0 1.414-1.414l-.26-.26A3 3 0 0 1 17.75 9v7.17a3.001 3.001 0 1 0 2 0V9a5 5 0 0 0-4.601-4.984zM18.75 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2M10.75 5a3 3 0 0 1-2 2.83v8.34a3.001 3.001 0 1 1-2 0V7.83a3.001 3.001 0 1 1 4-2.83m-3-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-1 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PullRequestIcon);
export default ForwardRef;