import * as React from "react";
function CameraIcon({
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
    d: "M12.5 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.743 3.5h3.514a3 3 0 0 1 2.122.879l.686.686a3 3 0 0 0 1.007.664l2.542 1.017A3 3 0 0 1 22.5 9.53V17.5a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3V9.531a3 3 0 0 1 1.886-2.785l2.542-1.017a3 3 0 0 0 1.007-.664l.686-.686a3 3 0 0 1 2.122-.879M7.5 13a5 5 0 1 1 10 0 5 5 0 0 1-10 0m8.848-3.808c.4.134.715.449.849.85a.448.448 0 0 0 .849 0c.134-.401.448-.716.849-.85a.448.448 0 0 0 0-.849 1.34 1.34 0 0 1-.85-.849.448.448 0 0 0-.848 0c-.134.401-.448.716-.85.85a.447.447 0 0 0 0 .848",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CameraIcon);
export default ForwardRef;