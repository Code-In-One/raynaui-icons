import * as React from "react";
function HeartIcon({
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
    d: "M12 5S9 1.5 5 3.5c-2.577 1.29-3.382 3.822-2.898 6.702.791 4.707 6.64 8.787 8.957 10.236a1.76 1.76 0 0 0 1.884 0c2.317-1.45 8.166-5.53 8.957-10.236.484-2.88-.32-5.413-2.9-6.702-4-2-7 1.5-7 1.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HeartIcon);
export default ForwardRef;