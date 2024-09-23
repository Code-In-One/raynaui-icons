import * as React from "react";
function GridIcon({
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
    d: "M14 15v5a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 22 20v-5a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 14 15M3 15v5a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 11 20v-5a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 3 15M3 4v5a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 11 9V4a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 3 4M14 4v5a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 22 9V4a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 14 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 15v5a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 22 20v-5a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 14 15M3 15v5a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 11 20v-5a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 3 15M3 4v5a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 11 9V4a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 3 4M14 4v5a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 22 9V4a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 14 4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GridIcon);
export default ForwardRef;