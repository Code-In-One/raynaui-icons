import * as React from "react";
function HeadphonesIcon({
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
    d: "M12.5 3c-5.523 0-10 4.477-10 10v5a1 1 0 0 0 1.11.994 1.589 1.589 0 0 0 3.066-.582V16.25c0-1.295-1.239-1.836-2.176-1.503V13a8 8 0 1 1 16 0v1.738c-.936-.334-2.177.205-2.177 1.5v2.174a1.588 1.588 0 0 0 3.067.582A1 1 0 0 0 22.5 18v-5c0-5.523-4.477-10-10-10"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HeadphonesIcon);
export default ForwardRef;