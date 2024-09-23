import * as React from "react";
function PaintBrushIcon({
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
    d: "M21.709 3.204c-.945 3.365-6.003 9.245-9.048 12.437-1.144-1.282-2.636-2.845-4.177-4.213 3.315-3.025 9.327-7.983 12.404-9.015.523-.176.97.259.821.79M8.232 19.804c.944-.596 2.027-1.28 3.195-1.915.454-.247.585-.845.248-1.238-1.08-1.26-2.847-3.16-4.57-4.54a.93.93 0 0 0-.963-.123c-2.553 1.174-2.387 2.523-1.86 6.797q.122.977.257 2.174c.122 1.099 1.555.195 3.693-1.155"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PaintBrushIcon);
export default ForwardRef;