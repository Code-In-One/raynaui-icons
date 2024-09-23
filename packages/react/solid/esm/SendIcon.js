import * as React from "react";
function SendIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M19.96 10.632 5.82 4.27c-1.142-.514-2.374.517-2.07 1.732l.984 3.936a1.5 1.5 0 0 0 1.359 1.133L20.5 12l-14.407.93a1.5 1.5 0 0 0-1.359 1.133l-.984 3.936c-.304 1.215.928 2.246 2.07 1.732l14.14-6.363c1.18-.53 1.18-2.205 0-2.736"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SendIcon);
export default ForwardRef;