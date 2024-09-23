import * as React from "react";
function CardFundIcon({
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
    d: "M5.5 3.5h14a3 3 0 0 1 3 3V7h-20v-.5a3 3 0 0 1 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 9v8.5a3 3 0 0 0 3 3H17v-.568a2.998 2.998 0 0 1-1.377-3.451A1 1 0 0 1 16.5 15h.11l1.397-1.242a3 3 0 0 1 3.986 0l.507.45V9zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.664 15.253a1 1 0 0 0-1.328 0l-1.5 1.333A1 1 0 0 0 19 18.2V21a1 1 0 1 0 2 0v-2.8a1 1 0 0 0 1.164-1.614z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardFundIcon);
export default ForwardRef;