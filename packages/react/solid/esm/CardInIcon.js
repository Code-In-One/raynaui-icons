import * as React from "react";
function CardInIcon({
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
    d: "M2.5 9v8.5a3 3 0 0 0 3 3h9.764l-.006-.007a3 3 0 0 1 0-3.986l.264-.297A1 1 0 0 1 16.5 15h.097a3 3 0 0 1 4.835.5H22.5V9zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.753 19.164a1 1 0 0 1 0-1.328l1.333-1.5A1 1 0 0 1 19.7 17.5h2.8a1 1 0 1 1 0 2h-2.8a1 1 0 0 1-1.614 1.164z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardInIcon);
export default ForwardRef;