import * as React from "react";
function BookOpenIcon({
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
    d: "M21.5 5.57v9.605c0 .497-.305.942-.765 1.128-.955.386-2.6 1.078-3.735 1.697-1.854 1.01-4.5 2-4.5 2s-2.646-.99-4.5-2c-1.136-.62-2.78-1.31-3.735-1.697a1.22 1.22 0 0 1-.765-1.128V5.57c0-.79.75-1.362 1.506-1.13.93.286 2.111.677 2.994 1.06 1.843.803 4.5 2.5 4.5 2.5s2.657-1.697 4.5-2.5c.883-.383 2.064-.774 2.994-1.06A1.167 1.167 0 0 1 21.5 5.57m-2.106 3.983a1 1 0 0 1-.447 1.341l-3 1.5a1 1 0 0 1-.894-1.789l3-1.5a1 1 0 0 1 1.341.448M6.053 10.894a1 1 0 0 1 .894-1.789l3 1.5a1 1 0 0 1-.894 1.79zm13.341 1.659a1 1 0 0 1-.447 1.341l-3 1.5a1 1 0 0 1-.894-1.789l3-1.5a1 1 0 0 1 1.341.448M6.053 13.894a1 1 0 0 1 .894-1.789l3 1.5a1 1 0 0 1-.894 1.79z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BookOpenIcon);
export default ForwardRef;