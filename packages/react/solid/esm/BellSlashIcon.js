import * as React from "react";
function BellSlashIcon({
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
    d: "M13 2a1 1 0 1 0-2 0v1.5q0 .042.003.082A6 6 0 0 0 6 9.5V13.5c0 .5-.41 1.368-.859 2.167a3 3 0 0 0-.269.633L16.075 5.096a6 6 0 0 0-3.078-1.514L13 3.5zM20.707 4.707a1 1 0 0 0-1.414-1.414l-16 16a1 1 0 1 0 1.414 1.414zM7.699 19.13 17.967 8.861q.033.315.033.637V13.5c0 .5.41 1.368.859 2.167.631 1.125.516 2.481-.69 2.94-1.213.462-3.152.893-6.169.893-1.788 0-3.197-.151-4.301-.37M8.92 20.325q.056.049.135.112c.15.12.365.276.636.431A4.67 4.67 0 0 0 12 21.5c.974 0 1.77-.324 2.309-.632a5 5 0 0 0 .77-.543c-.873.108-1.893.175-3.079.175s-2.206-.067-3.08-.175"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BellSlashIcon);
export default ForwardRef;