import * as React from "react";
function DownloadIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "m16.707 13.707-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 14.586V3a1 1 0 1 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 1.414"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13.414 18.414.914-.914H21V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-1.5h6.672l.914.914a2 2 0 0 0 2.828 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DownloadIcon);
export default ForwardRef;