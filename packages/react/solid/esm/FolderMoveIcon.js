import * as React from "react";
function FolderMoveIcon({
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
    d: "M12.785 7.2H18.5a3 3 0 0 1 2.999 3v1.819a2.99 2.99 0 0 0-2.932 1.481H17.5a3 3 0 0 0-2.236 5l-.006.007A3 3 0 0 0 14.542 20H6.5a3 3 0 0 1-3-3V6.567A2.567 2.567 0 0 1 6.067 4h2.547c.719 0 1.822 1.178 2.648 2.06.3.32.562.6.757.771.14.123.58.369.766.369"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m23.247 17.164-1.333 1.5A1 1 0 0 1 20.3 17.5h-2.8a1 1 0 1 1 0-2h2.8a1 1 0 0 1 1.614-1.164l1.333 1.5a1 1 0 0 1 0 1.328"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.753 21.164a1 1 0 0 1 0-1.328l1.333-1.5A1 1 0 0 1 19.7 19.5h2.8a1 1 0 1 1 0 2h-2.8a1 1 0 0 1-1.614 1.164z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderMoveIcon);
export default ForwardRef;