import * as React from "react";
function InfoTriangleIcon({
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
    fillRule: "evenodd",
    d: "M3.308 16.178 9.62 4.405c1.004-1.873 3.758-1.873 4.762 0l6.31 11.773c.934 1.74-.363 3.822-2.38 3.822H5.69c-2.017 0-3.314-2.082-2.38-3.822M12 6a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m-1.25 10.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(InfoTriangleIcon);
export default ForwardRef;