import * as React from "react";
function Building5Icon({
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
    d: "M10.25 7a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1M13.25 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM10.25 13a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M13.25 8a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM10.25 10a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M13.25 14a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM10.25 16a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M13.25 17a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.75 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h3a2 2 0 0 1 2 2v8h1a1 1 0 1 1 0 2h-20a1 1 0 1 1 0-2h2zm2 14h8V5h-8zm13-4v-1h-.5a1 1 0 1 1 0-2h.5v-1h-3v8h3v-2h-.5a1 1 0 1 1 0-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Building5Icon);
export default ForwardRef;