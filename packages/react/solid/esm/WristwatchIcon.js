import * as React from "react";
function WristwatchIcon({
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
    d: "M9.519 5.665a3 3 0 0 1 5.963 0A7 7 0 0 0 12.5 5a7 7 0 0 0-2.981.665M9.519 18.335A7 7 0 0 0 12.5 19a7 7 0 0 0 2.982-.665 3 3 0 0 1-5.963 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.1 16.8a5.99 5.99 0 0 0 2.4-4.8 5.99 5.99 0 0 0-2.4-4.8A5.97 5.97 0 0 0 12.5 6c-1.35 0-2.597.446-3.6 1.2A5.99 5.99 0 0 0 6.5 12a5.99 5.99 0 0 0 2.4 4.8 5.97 5.97 0 0 0 3.6 1.2c1.35 0 2.597-.446 3.6-1.2M13 10a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-1z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WristwatchIcon);
export default ForwardRef;