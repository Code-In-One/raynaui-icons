import * as React from "react";
function TissueIcon({
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
    d: "M18.5 6.5c0 1.933-3.358 3.5-7.5 3.5S3.5 8.433 3.5 6.5 6.858 3 11 3s7.5 1.567 7.5 3.5M9 6.5c0 .552.895 1 2 1s2-.448 2-1-.895-1-2-1-2 .448-2 1",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 11.5c2.987 0 5.668-.655 7.5-1.693V10h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H11c-4.142 0-7.5-1.567-7.5-3.5V9.807C5.332 10.845 8.013 11.5 11 11.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TissueIcon);
export default ForwardRef;