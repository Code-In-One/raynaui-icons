import * as React from "react";
function PieChartIcon({
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
    d: "M12.5 21c4.633 0 8.449-3.501 8.945-8.002.06-.549-.393-.998-.945-.998h-5a3 3 0 0 1-3-3V4c0-.553-.45-1.006-.998-.945A9.001 9.001 0 0 0 12.5 21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.43 8.003a7 7 0 0 0-5.933-5.933c-.547-.078-.997.377-.997.93v5a1 1 0 0 0 1 1h5c.552 0 1.008-.45.93-.997"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PieChartIcon);
export default ForwardRef;