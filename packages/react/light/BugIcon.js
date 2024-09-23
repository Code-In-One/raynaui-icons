const React = require("react");
function BugIcon({
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
    d: "m7.95 5.08.102-.412a4.842 4.842 0 0 1 9.396 0l.103.412a4 4 0 0 1 2.708 1.997l.784-.784a1 1 0 1 1 1.414 1.414L20.75 9.414V12h1.5a1 1 0 1 1 0 2h-1.562a8 8 0 0 1-.836 2.687l1.605 1.606a1 1 0 0 1-1.414 1.414l-1.35-1.35A7.98 7.98 0 0 1 12.75 21a7.98 7.98 0 0 1-5.942-2.644l-1.35 1.351a1 1 0 0 1-1.415-1.414l1.606-1.606A8 8 0 0 1 4.812 14H3.25a1 1 0 1 1 0-2h1.5V9.414L3.043 7.707a1 1 0 0 1 1.414-1.414l.785.784A4 4 0 0 1 7.949 5.08M12.75 19a6 6 0 0 1-6-6V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a6 6 0 0 1-6 6m2.715-14a2.842 2.842 0 0 0-5.43 0z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BugIcon);
module.exports = ForwardRef;