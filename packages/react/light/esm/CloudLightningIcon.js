import * as React from "react";
function CloudLightningIcon({
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
    d: "M6.75 9.5a5.5 5.5 0 0 1 10.907-1.013 1 1 0 0 0 .668.766A5 5 0 0 1 16.75 19a1 1 0 1 0 0 2 7 7 0 0 0 2.746-13.44A7.5 7.5 0 0 0 4.756 9.8 6 6 0 0 0 7.75 21a1 1 0 1 0 0-2 4 4 0 0 1-1.551-7.688 1 1 0 0 0 .602-1.058A6 6 0 0 1 6.75 9.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.825 15.538a1 1 0 1 0-1.687-1.076l-2.231 3.5a1 1 0 0 0 .843 1.538h1.326l-1.09 2.026a1 1 0 1 0 1.76.948l1.884-3.5a1 1 0 0 0-.88-1.474h-1.177z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CloudLightningIcon);
export default ForwardRef;