import * as React from "react";
function CalendarCrossIcon({
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
    d: "M8.5 1a1 1 0 0 1 1 1v1.5h-2V2a1 1 0 0 1 1-1M15.5 4h-6v1a1 1 0 0 1-2 0V4h-1a3 3 0 0 0-3 3v.5h18V7a3 3 0 0 0-3-3h-1v1a1 1 0 1 1-2 0zM3.5 9.5V18a3 3 0 0 0 3 3h9.614c.048-.346.157-.685.325-1a3.001 3.001 0 0 1 4.061-4.06 3 3 0 0 1 1-.326V9.5zM17.5 2a1 1 0 1 0-2 0v1.5h2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.45 19.121a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.707a1 1 0 0 0 1.414 1.415l.707-.707.707.707a1 1 0 1 0 1.415-1.415l-.707-.707z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CalendarCrossIcon);
export default ForwardRef;