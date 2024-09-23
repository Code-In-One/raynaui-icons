import * as React from "react";
function FileCodeIcon({
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
    d: "M13.5 2h-6a3 3 0 0 0-3 3v9.5h3.16c.53 0 1.042.216 1.43.605l2.244 2.25c.888.89.888 2.4 0 3.29L9.982 22H17.5a3 3 0 0 0 3-3v-9h-3a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.297 8a3 3 0 0 0-.492-.834L16.4 3.079a3 3 0 0 0-.9-.73V6a2 2 0 0 0 2 2zM5.207 16.293a1 1 0 0 1 0 1.414L3.914 19l1.293 1.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0M6.793 17.707a1 1 0 1 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L8.086 19z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileCodeIcon);
export default ForwardRef;