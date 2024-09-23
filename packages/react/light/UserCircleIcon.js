const React = require("react");
function UserCircleIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    clipPath: "url(#a)",
    clipRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.25 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.25 12c0 6.627-5.373 12-12 12h-.016C5.614 23.991.25 18.622.25 12c0-6.627 5.373-12 12-12s12 5.373 12 12m-22 0c0-5.523 4.477-10 10-10s10 4.477 10 10a9.96 9.96 0 0 1-2.232 6.298 3 3 0 0 0-.14-.284C18.52 15.577 15.701 13 12.246 13s-6.274 2.577-7.63 5.014a3 3 0 0 0-.139.28A9.96 9.96 0 0 1 2.25 12m5.468 8.83C9.078 21.558 10.96 22 12.24 22h.007c1.285 0 3.177-.434 4.54-1.156.687-.364 1.127-.742 1.332-1.07.159-.255.186-.474.01-.788C16.972 16.905 14.705 15 12.248 15s-4.724 1.905-5.883 3.986c-.166.298-.143.51.02.769.206.329.648.71 1.334 1.076"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M.25 0h24v24h-24z"
  }))));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserCircleIcon);
module.exports = ForwardRef;