import * as React from "react";
function CardTickIcon({
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
    d: "M1.75 6.5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v7.75a1 1 0 1 1-2 0V9h-18v8.5a2 2 0 0 0 2 2h9.5a1 1 0 1 1 0 2h-9.5a4 4 0 0 1-4-4zm2 .5h18v-.5a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.75 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M23.446 18.496a1 1 0 0 0-1.414-1.414l-1.939 1.939-.282-.282a1 1 0 0 0-1.414 1.414l.989.989a1 1 0 0 0 1.414 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardTickIcon);
export default ForwardRef;