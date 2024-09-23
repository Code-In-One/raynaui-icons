import * as React from "react";
function LinkIcon({
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
    d: "M20.029 4.222a5 5 0 0 0-7.071 0L10.129 7.05a1 1 0 0 0 1.414 1.415l2.829-2.829a3 3 0 1 1 4.242 4.243l-2.828 2.828a1 1 0 0 0 1.414 1.414l2.829-2.828a5 5 0 0 0 0-7.071"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.372 11.293a1 1 0 0 0-1.414-1.414l-2.829 2.828a1 1 0 0 0 1.414 1.414z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.715 11.293A1 1 0 0 0 7.3 9.879l-2.829 2.828a5 5 0 0 0 7.071 7.071l2.829-2.828a1 1 0 0 0-1.414-1.414l-2.829 2.828a3 3 0 1 1-4.243-4.243z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LinkIcon);
export default ForwardRef;