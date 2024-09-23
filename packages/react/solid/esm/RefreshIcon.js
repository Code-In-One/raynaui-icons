import * as React from "react";
function RefreshIcon({
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
    d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zm15-1a1 1 0 0 0-1 1v.4A7.4 7.4 0 0 0 12.166 4C7.886 4 4.5 7.628 4.5 12a1 1 0 1 0 2 0c0-3.36 2.582-6 5.666-6 1.027 0 1.993.29 2.83.8h-.163a1 1 0 1 0 0 2H17.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-9 15a1 1 0 1 1-2 0v-2.8a1 1 0 0 1 1-1h2.667a1 1 0 1 1 0 2h-.162c.835.51 1.802.8 2.829.8 3.084 0 5.666-2.64 5.666-6a1 1 0 1 1 2 0c0 4.372-3.387 8-7.666 8A7.4 7.4 0 0 1 8.5 18.6z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(RefreshIcon);
export default ForwardRef;