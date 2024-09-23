import * as React from "react";
function NavigationIcon({
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
    d: "M11.794 5.45a.5.5 0 0 1 .912 0l6.275 13.944a.5.5 0 0 1-.602.683l-5.398-1.65a2.5 2.5 0 0 0-1.461 0l-5.398 1.65a.5.5 0 0 1-.602-.683zm2.736-.82c-.884-1.966-3.675-1.966-4.56 0L3.696 18.572c-.882 1.96.955 4.044 3.01 3.417l5.398-1.65a.5.5 0 0 1 .292 0l5.398 1.65c2.055.628 3.892-1.458 3.01-3.417z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(NavigationIcon);
export default ForwardRef;