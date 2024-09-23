const React = require("react");
function WifiIcon({
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
    d: "M12.5 5a10 10 0 0 0-9.238 6.173 1 1 0 1 0 1.848.765 8 8 0 0 1 14.782 0 1 1 0 1 0 1.848-.765A10 10 0 0 0 12.5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 8a7 7 0 0 0-6.777 5.25 1 1 0 1 0 1.937.5A5 5 0 0 1 12.5 10a5 5 0 0 1 4.842 3.75 1 1 0 0 0 1.937-.5 7 7 0 0 0-1.828-3.2A7 7 0 0 0 12.5 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.97 11.305a4 4 0 0 1 5.475 3.028 1 1 0 1 1-1.972.334 1.998 1.998 0 0 0-2.738-1.515 2 2 0 0 0-1.206 1.515 1 1 0 0 1-1.972-.334 4 4 0 0 1 2.413-3.028"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WifiIcon);
module.exports = ForwardRef;