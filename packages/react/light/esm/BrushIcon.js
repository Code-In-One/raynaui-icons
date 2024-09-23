import * as React from "react";
function BrushIcon({
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
    d: "M12.75 1a2.5 2.5 0 0 0-2.5 2.5V6a1 1 0 0 1-1 1h-2.5a3 3 0 0 0-3 3v3.938l-.712 5.69A3 3 0 0 0 6.015 23h13.469a3 3 0 0 0 2.977-3.372l-.711-5.69V10a3 3 0 0 0-3-3h-2.5a1 1 0 0 1-1-1V3.5a2.5 2.5 0 0 0-2.5-2.5M5.022 19.876 5.633 15h14.234l.61 4.876A1 1 0 0 1 19.483 21h-1.867l-.378-2.641a1 1 0 1 0-1.98.282L15.598 21H6.015a1 1 0 0 1-.992-1.124M18.75 9a1 1 0 0 1 1 1v3h-14v-3a1 1 0 0 1 1-1h2.5a3 3 0 0 0 3-3V3.5a.5.5 0 0 1 1 0V6a3 3 0 0 0 3 3z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrushIcon);
export default ForwardRef;