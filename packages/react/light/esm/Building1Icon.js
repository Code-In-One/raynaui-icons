import * as React from "react";
function Building1Icon({
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
    d: "M16.75 14a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M15.75 12a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM11.75 14a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M10.75 12a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.728 4.4a2 2 0 0 0-1.963.011L5.758 7.844A2 2 0 0 0 4.75 9.58V19a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2V9.566a2 2 0 0 0-.971-1.715l-1.529-.917V6a1 1 0 0 0-1.982-.19zM13.75 19v-2a1 1 0 1 0-2 0v2h-5V9.58l6.007-3.432 3.993 2.218 2 1.2V19z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Building1Icon);
export default ForwardRef;