import * as React from "react";
function CoinSwapIcon({
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
    d: "M2.5 9a1 1 0 0 0 2 0c0-2.01.661-3.234 1.434-3.958.215-.202.446-.37.682-.51l-.01.02a1 1 0 0 0 1.788.895l1-2a1 1 0 0 0-.447-1.341l-2-1a1 1 0 0 0-1.159 1.597 5.9 5.9 0 0 0-1.222.88C3.34 4.733 2.5 6.51 2.5 9M22.5 8a6 6 0 0 1-6.253 5.995 8.01 8.01 0 0 0-5.742-5.742A6 6 0 1 1 22.5 8"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-6.68 2.038a2.15 2.15 0 0 0-1.358-1.359c-.653-.217-.653-1.14 0-1.358a2.15 2.15 0 0 0 1.359-1.359c.217-.653 1.14-.653 1.358 0a2.15 2.15 0 0 0 1.359 1.359c.653.217.653 1.14 0 1.358a2.15 2.15 0 0 0-1.359 1.359c-.217.653-1.14.653-1.358 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.5 14a1 1 0 0 1 1 1c0 2.49-.839 4.267-2.066 5.417a5.9 5.9 0 0 1-1.222.88 1 1 0 0 1-1.16 1.597l-2-1a1 1 0 0 1-.446-1.341l1-2a1 1 0 1 1 1.788.894l-.01.02c.236-.138.467-.307.682-.51.773-.724 1.434-1.946 1.434-3.957a1 1 0 0 1 1-1"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CoinSwapIcon);
export default ForwardRef;