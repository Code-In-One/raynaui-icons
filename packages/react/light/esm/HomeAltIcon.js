import * as React from "react";
function HomeAltIcon({
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
    d: "M14.65 3.05a4 4 0 0 0-4.8 0L2.977 8.204a4 4 0 0 0-1.586 3.533l.633 7.595A4 4 0 0 0 6.01 23h12.48a4 4 0 0 0 3.985-3.668l.633-7.595a4 4 0 0 0-1.586-3.533zm-3.6 1.6a2 2 0 0 1 2.4 0l6.872 5.154a2 2 0 0 1 .793 1.766l-.633 7.596A2 2 0 0 1 18.49 21h-3.153l.203-2.426a3.3 3.3 0 1 0-6.578 0L9.163 21H6.01a2 2 0 0 1-1.993-1.834l-.633-7.596a2 2 0 0 1 .793-1.766zm2.495 13.758L13.33 21h-2.16l-.215-2.592a1.3 1.3 0 1 1 2.591 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HomeAltIcon);
export default ForwardRef;