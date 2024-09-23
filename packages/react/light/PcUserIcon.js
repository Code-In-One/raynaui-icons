const React = require("react");
function PcUserIcon({
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
    d: "M5.5 3.4a4 4 0 0 0-4 4v6.8a4 4 0 0 0 4 4h4v.4H7.75a1 1 0 1 0 0 2h5.5a1 1 0 0 0 0-2H11.5v-.4h2.902c-.09.19-.15.404-.152.64-.004.368.13.679.305.914.315.423.804.663 1.176.805.791.303 1.812.441 2.519.441s1.728-.137 2.52-.44c.37-.143.86-.383 1.175-.806.175-.235.31-.546.305-.914a1.6 1.6 0 0 0-.315-.918 4.73 4.73 0 0 0-2.9-1.849 4 4 0 0 0 .1-.206 3.001 3.001 0 0 0 .365-5.595V7.4a4 4 0 0 0-4-4zm9.75 9.6a3 3 0 0 0 1.615 2.662 2 2 0 0 1-1.365.538h-10a2 2 0 0 1-2-2V7.4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.694A3 3 0 0 0 15.25 13m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1.733 6.718c.511.18 1.234.282 1.733.282s1.222-.102 1.733-.282c-.428-.396-1.058-.718-1.733-.718s-1.305.322-1.733.718",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PcUserIcon);
module.exports = ForwardRef;