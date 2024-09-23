import * as React from "react";
function BluetoothIcon({
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
    d: "M13.36 4.204c-1.33-.886-3.11.067-3.11 1.664V9.92l-2.375-1.9a1 1 0 1 0-1.25 1.562L9.65 12l-3.024 2.42a1 1 0 0 0 1.25 1.56l2.375-1.9v4.051c0 1.598 1.78 2.55 3.11 1.665l3.197-2.132a2 2 0 0 0 0-3.328L13.053 12l3.504-2.336a2 2 0 0 0 0-3.328zM15.446 8l-3.197 2.131V5.868zm0 8-3.197 2.131v-4.263z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BluetoothIcon);
export default ForwardRef;