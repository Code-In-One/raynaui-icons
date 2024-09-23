import * as React from "react";
function RepeatIcon({
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
    d: "M19.381 2.224a1 1 0 0 0-1.262 1.552l.817.664H10.31A7.56 7.56 0 0 0 2.75 12a1 1 0 1 0 2 0 5.56 5.56 0 0 1 5.56-5.56h8.979l-1.237 1.203a1 1 0 1 0 1.396 1.434l3-2.92a1 1 0 0 0-.067-1.493zM6.119 21.776a1 1 0 0 0 1.262-1.552l-.817-.664h8.626A7.56 7.56 0 0 0 22.75 12a1 1 0 1 0-2 0 5.56 5.56 0 0 1-5.56 5.56H6.211l1.236-1.203a1 1 0 0 0-1.394-1.434l-3 2.92a1 1 0 0 0 .066 1.493z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RepeatIcon);
export default ForwardRef;