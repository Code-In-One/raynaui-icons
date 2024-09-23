import * as React from "react";
function PaintBucketIcon({
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
    d: "M4.091 7.29c-1.316.76-1.337 2.652-.038 3.441l.593.361a2 2 0 0 1 .694.71l4.234 7.334a4 4 0 0 0 5.464 1.464l5.618-3.244a4 4 0 0 0 1.464-5.464l-5.5-9.526a2 2 0 0 0-2.732-.732zm1 1.732 9.797-5.656 5.5 9.526a2 2 0 0 1-.732 2.732l-5.618 3.244a2 2 0 0 1-2.732-.732L7.072 10.8a4 4 0 0 0-1.387-1.418zM6.442 16.415a2.31 2.31 0 1 1-4.385 0l.77-2.308c.455-1.368 2.39-1.368 2.846 0zm-2.488.633.296-.886.295.886a.311.311 0 1 1-.59 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PaintBucketIcon);
export default ForwardRef;