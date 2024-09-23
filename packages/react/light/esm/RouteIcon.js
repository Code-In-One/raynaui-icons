import * as React from "react";
function RouteIcon({
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
    d: "M4.5 6.45a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m2.75-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M14.97 14.46a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m2.75-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.91 9.303a5.465 5.465 0 1 0-9.32 0l2.102 3.433c.195.319.434.584.704.797a3.95 3.95 0 0 0-.67 1.974c-.07 1.262.483 2.594 1.884 3.761 1.39 1.158 3.46 1.858 5.381 2.295 1.956.444 3.911.65 5.193.735a1 1 0 0 0 .533-.113c.986-.001 1.972-.479 2.557-1.434l2.102-3.433a5.465 5.465 0 1 0-9.321 0l1.66 2.71a29 29 0 0 1-2.28-.416c-1.854-.421-3.534-1.038-4.544-1.88-1-.833-1.197-1.585-1.167-2.114a1.97 1.97 0 0 1 .667-1.35q.06-.05.111-.109a2.97 2.97 0 0 0 2.307-1.423zM5.264 3.611a3.465 3.465 0 0 1 4.942 4.648l-2.102 3.433a1 1 0 0 1-1.706 0L4.295 8.259a3.465 3.465 0 0 1 .968-4.648m14.44 8.015a3.464 3.464 0 0 0-4.942 4.648l2.102 3.433a1 1 0 0 0 1.705 0l2.102-3.433a3.465 3.465 0 0 0-.968-4.648",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RouteIcon);
export default ForwardRef;