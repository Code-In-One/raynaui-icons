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
    fillRule: "evenodd",
    d: "M7.75 13a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.598 9.192c.4.134.715.449.849.85a.448.448 0 0 0 .849 0c.134-.401.448-.716.849-.85a.448.448 0 0 0 0-.849 1.34 1.34 0 0 1-.85-.849.448.448 0 0 0-.848 0c-.134.401-.448.716-.85.85a.447.447 0 0 0 0 .848"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.164 3.672A4 4 0 0 1 10.993 2.5h3.514a4 4 0 0 1 2.829 1.172l.686.685a2 2 0 0 0 .671.443l2.543 1.017a4 4 0 0 1 2.514 3.714V17.5a4 4 0 0 1-4 4h-14a4 4 0 0 1-4-4V9.531a4 4 0 0 1 2.514-3.714L6.807 4.8a2 2 0 0 0 .671-.443zm2.829.828a2 2 0 0 0-1.415.586l-.685.686a4 4 0 0 1-1.343.885L5.007 7.674A2 2 0 0 0 3.75 9.531V17.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.531a2 2 0 0 0-1.257-1.857L17.95 6.657a4 4 0 0 1-1.342-.885l-.686-.686a2 2 0 0 0-1.415-.586z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CameraIcon);
export default ForwardRef;