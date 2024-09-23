import * as React from "react";
function FileUploadIcon({
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
    d: "M7.25 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2h-2a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h6.595a4 4 0 0 1 3.073 1.44l3.405 4.085a4 4 0 0 1 .927 2.561V19a4 4 0 0 1-4 4h-2a1 1 0 1 1 0-2h2a2 2 0 0 0 2-2v-9h-2a4 4 0 0 1-4-4V3zm11.536 4.806q.078.093.143.194H17.25a2 2 0 0 1-2-2V3.577a2 2 0 0 1 .131.143z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.914 14.253a1 1 0 0 0-1.328 0l-1.5 1.333A1 1 0 0 0 11.25 17.2V22a1 1 0 1 0 2 0v-4.8a1 1 0 0 0 1.164-1.614z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileUploadIcon);
export default ForwardRef;