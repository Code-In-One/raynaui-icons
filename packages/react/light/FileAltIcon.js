const React = require("react");
function FileAltIcon({
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
    d: "M7.25 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9.086a4 4 0 0 0-.927-2.56l-3.405-4.087A4 4 0 0 0 13.845 1zm-2 4a2 2 0 0 1 2-2h6v3a4 4 0 0 0 4 4h2v9a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2zm13.68 3a2 2 0 0 0-.144-.194L15.381 3.72a2 2 0 0 0-.131-.143V6a2 2 0 0 0 2 2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileAltIcon);
module.exports = ForwardRef;