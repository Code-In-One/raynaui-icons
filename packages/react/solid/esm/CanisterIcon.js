import * as React from "react";
function CanisterIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 22",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "m16.212 2.154-1.56 1.56 1.49 1.492 1.552-1.551h.653a.527.527 0 0 0 .528-.527v-.6A.527.527 0 0 0 18.347 2h-1.762a.53.53 0 0 0-.373.154M15.278 7.315l.368-.368a.527.527 0 0 0 0-.746l-1.989-1.989a.527.527 0 0 0-.745 0l-.369.368zM7.365 13.235h2.423v2.423H7.365z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.742 8.27-3.154-3.154a1.4 1.4 0 0 0-.994-.412h-6.66A1.934 1.934 0 0 0 2 6.638v11.428C2 19.134 2.866 20 3.934 20h9.286a1.934 1.934 0 0 0 1.933-1.934V9.264c0-.376-.146-.729-.412-.994m-2.999 8.597a.527.527 0 0 1-.745.746l-.9-.9H7.055l-.9.9a.526.526 0 0 1-.746 0 .527.527 0 0 1 0-.746l.9-.9v-3.041l-.9-.9a.527.527 0 0 1 .746-.746l.9.9h3.041l.9-.9a.527.527 0 1 1 .746.745l-.9.9v3.042zM5.15 8.893a1.04 1.04 0 1 1 0-2.08h5.153l2.08 2.08zM18.682 10.824a1.32 1.32 0 0 1-1.319-1.318c0-.187.053-.516.512-1.214.228-.349.454-.631.464-.643a.44.44 0 0 1 .686 0c.009.012.235.294.463.643.459.698.512 1.027.512 1.214a1.32 1.32 0 0 1-1.318 1.318"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CanisterIcon);
export default ForwardRef;