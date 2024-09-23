import * as React from "react";
function CloudSnowyIcon({
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
    d: "M6.75 9.5a5.5 5.5 0 0 1 10.907-1.013 1 1 0 0 0 .668.766 5.003 5.003 0 0 1-.74 9.678 1 1 0 0 0 .33 1.972A7.002 7.002 0 0 0 19.497 7.56 7.5 7.5 0 0 0 4.756 9.8 6.002 6.002 0 0 0 6.55 20.88a1 1 0 1 0 .398-1.96 4.002 4.002 0 0 1-.75-7.608 1 1 0 0 0 .602-1.058A6 6 0 0 1 6.75 9.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.244 18.192c.4.134.715.448.849.85a.448.448 0 0 0 .85 0c.133-.402.447-.716.848-.85a.448.448 0 0 0 0-.849 1.34 1.34 0 0 1-.849-.849.448.448 0 0 0-.849 0c-.134.401-.448.716-.85.85a.448.448 0 0 0 0 .848M12.093 22.042a1.34 1.34 0 0 0-.85-.85.448.448 0 0 1 0-.849c.402-.133.716-.448.85-.849a.448.448 0 0 1 .85 0c.133.401.447.716.848.85a.448.448 0 0 1 0 .848c-.4.134-.715.448-.849.85a.448.448 0 0 1-.849 0M14.244 18.192c.4.134.715.448.849.85a.448.448 0 0 0 .85 0c.133-.402.447-.716.848-.85a.448.448 0 0 0 0-.849 1.34 1.34 0 0 1-.849-.849.448.448 0 0 0-.849 0c-.134.401-.448.716-.85.85a.448.448 0 0 0 0 .848"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CloudSnowyIcon);
export default ForwardRef;