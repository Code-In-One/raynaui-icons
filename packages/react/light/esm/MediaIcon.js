import * as React from "react";
function MediaIcon({
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
    d: "M11.644 7.83A2 2 0 0 0 8.75 9.617v4.764a2 2 0 0 0 2.894 1.789l4.764-2.382c1.474-.737 1.474-2.84 0-3.578zm-.894 1.788L15.514 12l-4.764 2.382z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 2.5a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-11a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MediaIcon);
export default ForwardRef;