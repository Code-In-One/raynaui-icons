import * as React from "react";
function CoinsAltIcon({
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
    d: "M22.5 8a6 6 0 0 1-6.253 5.995 8.01 8.01 0 0 0-5.742-5.742A6 6 0 1 1 22.5 8"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-6.68 2.038a2.15 2.15 0 0 0-1.358-1.359c-.653-.217-.653-1.14 0-1.358a2.15 2.15 0 0 0 1.359-1.359c.217-.653 1.14-.653 1.358 0a2.15 2.15 0 0 0 1.359 1.359c.653.217.653 1.14 0 1.358a2.15 2.15 0 0 0-1.359 1.359c-.217.653-1.14.653-1.358 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CoinsAltIcon);
export default ForwardRef;