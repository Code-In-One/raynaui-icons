import * as React from "react";
function EuroIcon({
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
    d: "M13.44 3a6.355 6.355 0 0 0-6.345 6H4.25a1 1 0 0 0 0 2h2.78l-.046 1.5H4.25a1 1 0 1 0 0 2h2.671l-.074 2.375A4 4 0 0 0 10.845 21h6.905a1 1 0 1 0 0-2h-6.905a2 2 0 0 1-1.999-2.062l.076-2.438h4.328a1 1 0 1 0 0-2H8.985l.047-1.5h4.218a1 1 0 1 0 0-2H9.1a4.355 4.355 0 0 1 4.34-4h1.074c.992 0 1.898.56 2.342 1.447a1 1 0 1 0 1.788-.894A4.62 4.62 0 0 0 14.514 3z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EuroIcon);
export default ForwardRef;