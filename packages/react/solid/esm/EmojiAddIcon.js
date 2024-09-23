import * as React from "react";
function EmojiAddIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 3c1.77 0 3.419.51 4.81 1.392A2 2 0 0 0 18 8a2 2 0 0 0 2.743 1.857A9 9 0 1 1 12 3m-1.293 12.293a1 1 0 0 0-1.414 1.414 3.83 3.83 0 0 0 5.414 0 1 1 0 0 0-1.414-1.414 1.83 1.83 0 0 1-2.586 0M10.2 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15.3 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2h-1z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EmojiAddIcon);
export default ForwardRef;