import * as React from "react";
function ForkIcon({
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
    d: "M5 4.5a2.5 2.5 0 0 0 1.52 2.3q-.02.098-.02.2c0 1.71.567 3.429 1.586 4.739.837 1.076 2.003 1.9 3.414 2.168v2.301a2.5 2.5 0 1 0 2 0v-2.301c1.411-.268 2.577-1.092 3.414-2.168C17.934 10.429 18.5 8.709 18.5 7q0-.102-.02-.2a2.5 2.5 0 1 0-1.96 0q-.02.098-.02.2c0 1.29-.433 2.571-1.164 3.511-.723.93-1.7 1.489-2.836 1.489s-2.113-.56-2.836-1.489C8.934 9.571 8.5 8.291 8.5 7q0-.102-.02-.2A2.5 2.5 0 1 0 5 4.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ForkIcon);
export default ForwardRef;