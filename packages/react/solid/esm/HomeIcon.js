import * as React from "react";
function HomeIcon({
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
    d: "M10.28 3.204 3.403 8.018a3 3 0 0 0-1.271 2.688l.705 9.166a2 2 0 0 0 2.277 1.826l3.17-.453A2 2 0 0 0 10 19.265V18a2 2 0 0 1 4 0v1.265a2 2 0 0 0 1.717 1.98l3.17.453a2 2 0 0 0 2.276-1.826l.705-9.166a3 3 0 0 0-1.27-2.688L13.72 3.204a3 3 0 0 0-3.44 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HomeIcon);
export default ForwardRef;