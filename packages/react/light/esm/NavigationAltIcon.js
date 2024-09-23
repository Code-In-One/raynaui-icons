import * as React from "react";
function NavigationAltIcon({
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
    d: "M21.509 5.835c.764-2.015-1.209-3.988-3.224-3.224L3.989 8.034c-2.01.762-2.185 3.536-.288 4.545l4.983 2.65a.5.5 0 0 1 .207.207l2.65 4.983c1.01 1.897 3.783 1.721 4.545-.287zm-2.515-1.354a.5.5 0 0 1 .645.645l-5.423 14.296a.5.5 0 0 1-.909.058l-2.65-4.983c-.234-.44-.594-.8-1.033-1.034l-4.984-2.65a.5.5 0 0 1 .058-.91z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(NavigationAltIcon);
export default ForwardRef;