import * as React from "react";
function SpeakerIcon({
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
    d: "M8.75 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12.25 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.11 4.8A4 4 0 0 1 8.103 1h8.293a4 4 0 0 1 3.995 3.8l.7 14a4 4 0 0 1-3.995 4.2H7.404a4 4 0 0 1-3.995-4.2zM8.103 3a2 2 0 0 0-1.997 1.9l-.7 14A2 2 0 0 0 7.404 21h9.693a2 2 0 0 0 1.997-2.1l-.7-14A2 2 0 0 0 16.397 3z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SpeakerIcon);
export default ForwardRef;