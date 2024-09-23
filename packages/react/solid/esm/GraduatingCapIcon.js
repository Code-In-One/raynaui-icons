import * as React from "react";
function GraduatingCapIcon({
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
    d: "M13.008 2.3a1 1 0 0 0-1.018 0L2.956 7.64a1 1 0 0 0 0 1.721L11.99 14.7a1 1 0 0 0 1.018 0l2.991-1.768V12l-3.6-2.7a1 1 0 0 1 1.2-1.6l4 3a1 1 0 0 1 .4.8v.25l4.043-2.389a1 1 0 0 0 0-1.722z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.756 16.663 16 14.718V15.8a1 1 0 0 0 2 0v-2.282l.743-.446a.5.5 0 0 1 .757.429v6.083a.47.47 0 0 1-.183.376c-.708.53-3.397 2.358-6.817 2.358S6.39 20.49 5.682 19.96a.47.47 0 0 1-.183-.377v-6.082a.5.5 0 0 1 .757-.429l5.986 3.591a.5.5 0 0 0 .514 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GraduatingCapIcon);
export default ForwardRef;