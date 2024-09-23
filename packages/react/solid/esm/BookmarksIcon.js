import * as React from "react";
function BookmarksIcon({
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
    d: "M3 13.783V5.72A2.71 2.71 0 0 1 5.7 3h4.5a2.71 2.71 0 0 1 2.7 2.72v.43h-2.057c-1.598 0-2.893 1.206-2.893 2.694v4.931c-.546 0-1.092.247-1.452.741l-.246.34C5.222 16.268 3 15.535 3 13.782"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.493 7.5h-6.686C10.422 7.5 9.3 8.564 9.3 9.877v9.535c0 1.51 2.014 2.164 2.99.973l1.87-2.279a1.296 1.296 0 0 1 1.98 0l1.87 2.28c.976 1.19 2.99.535 2.99-.974V9.877C21 8.564 19.878 7.5 18.493 7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BookmarksIcon);
export default ForwardRef;