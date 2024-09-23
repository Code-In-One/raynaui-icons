import * as React from "react";
function FolderUserIcon({
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
    d: "M12.785 7.2H18.5a3 3 0 0 1 2.999 3v2.177a4.517 4.517 0 0 0-6.865 5.845A7.6 7.6 0 0 0 13.01 20H6.5a3 3 0 0 1-3-3V6.567A2.567 2.567 0 0 1 6.067 4h2.547c.719 0 1.822 1.178 2.648 2.06.3.32.562.6.757.771.14.123.58.369.766.369"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.7 16a3 3 0 1 1 4.707 2.467 4.35 4.35 0 0 1 1.545 1.524 1.7 1.7 0 0 1 .248.851 1.56 1.56 0 0 1-.24.842c-.27.435-.703.695-1.041.85-.7.322-1.594.466-2.219.466s-1.518-.144-2.219-.466c-.338-.155-.772-.415-1.042-.85a1.56 1.56 0 0 1-.239-.842 1.7 1.7 0 0 1 .248-.85 4.35 4.35 0 0 1 1.545-1.525A3 3 0 0 1 15.7 16m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 5c-.48 0-.99.309-1.34.736.388.166.956.264 1.34.264s.952-.098 1.34-.264c-.35-.427-.86-.736-1.34-.736",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderUserIcon);
export default ForwardRef;