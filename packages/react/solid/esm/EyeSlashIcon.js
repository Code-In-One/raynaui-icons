import * as React from "react";
function EyeSlashIcon({
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
    d: "M21.207 3.293a1 1 0 0 1 0 1.414l-16 16a1 1 0 0 1-1.414-1.414l16-16a1 1 0 0 1 1.414 0M16.3 5.372a8.85 8.85 0 0 0-3.8-.872c-2.944 0-5.301 1.504-6.977 3.1-1.679 1.6-2.768 3.38-3.2 4.15a1.85 1.85 0 0 0-.084 1.642c.162.374.438.953.844 1.625a1 1 0 1 0 1.712-1.034 12 12 0 0 1-.691-1.319c.406-.715 1.367-2.252 2.799-3.616C8.383 7.638 10.27 6.5 12.5 6.5c.802 0 1.56.147 2.27.401zM18.19 9.138c1.38 1.342 2.309 2.827 2.706 3.526-.138.31-.364.778-.691 1.319a1 1 0 0 0 1.712 1.034c.406-.672.681-1.25.843-1.625a1.85 1.85 0 0 0-.084-1.642c-.42-.75-1.465-2.46-3.071-4.026z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12.5 9 .168.003-4.165 4.165L8.5 13a4 4 0 0 1 4-4M12.5 17a4 4 0 0 1-1.763-.409l5.354-5.354A4 4 0 0 1 12.5 17"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EyeSlashIcon);
export default ForwardRef;