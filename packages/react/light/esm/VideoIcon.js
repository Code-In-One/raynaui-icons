import * as React from "react";
function VideoIcon({
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
    d: "M5.343 9.63c.481.161.859.539 1.019 1.02.163.49.856.49 1.019 0 .16-.481.538-.859 1.019-1.02a.537.537 0 0 0 0-1.018 1.61 1.61 0 0 1-1.02-1.02.537.537 0 0 0-1.018 0c-.16.482-.538.86-1.02 1.02a.537.537 0 0 0 0 1.019"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 3.894-3.08l.906.68c1.319.989 3.2.048 3.2-1.6V8c0-1.648-1.881-2.589-3.2-1.6l-.906.68A4 4 0 0 0 15.75 4zm16 12-2-1.5v-5l2-1.5zm-18-8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(VideoIcon);
export default ForwardRef;