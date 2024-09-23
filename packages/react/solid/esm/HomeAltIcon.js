import * as React from "react";
function HomeAltIcon({
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
    fillRule: "evenodd",
    d: "m21.862 11.654-.633 7.595A3 3 0 0 1 18.239 22H5.76a3 3 0 0 1-2.989-2.75l-.633-7.596a3 3 0 0 1 1.19-2.65L10.2 3.85a3 3 0 0 1 3.6 0l6.872 5.154a3 3 0 0 1 1.19 2.65M10 20.5l-.293-3.509a2.3 2.3 0 1 1 4.585 0L14 20.5z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HomeAltIcon);
export default ForwardRef;