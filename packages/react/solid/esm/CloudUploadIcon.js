import * as React from "react";
function CloudUploadIcon({
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
    d: "M2.5 15a5 5 0 0 0 5 5h2v-1.068a3 3 0 0 1-.493-4.841l1.5-1.333a3 3 0 0 1 3.986 0l1.5 1.333a3 3 0 0 1-.493 4.841V20h1a6 6 0 0 0 1.89-11.696A6.5 6.5 0 0 0 5.56 10.39 5 5 0 0 0 2.5 15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.164 14.253a1 1 0 0 0-1.328 0l-1.5 1.333A1 1 0 0 0 11.5 17.2V22a1 1 0 1 0 2 0v-4.8a1 1 0 0 0 1.164-1.614z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CloudUploadIcon);
export default ForwardRef;