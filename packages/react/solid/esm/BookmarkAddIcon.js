import * as React from "react";
function BookmarkAddIcon({
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
    d: "M19 2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V6h2a1 1 0 1 0 0-2h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.429 2H15a3 3 0 1 0 0 6 3 3 0 0 0 5 2.236v9.559c0 2.095-2.754 3.005-4.09 1.351l-2.557-3.165c-.686-.85-2.02-.85-2.706 0L8.09 21.146C6.754 22.8 4 21.89 4 19.795V5.3C4 3.478 5.535 2 7.429 2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BookmarkAddIcon);
export default ForwardRef;