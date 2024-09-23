const React = require("react");
function FolderDownloadIcon({
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
    d: "M12.785 7.2H18.5a3 3 0 0 1 2.999 3v5.141A3 3 0 0 0 16 17v1.068a3 3 0 0 0-.742.606c-.348.391-.575.849-.684 1.326H6.5a3 3 0 0 1-3-3V6.567A2.567 2.567 0 0 1 6.067 4h2.547c.719 0 1.822 1.178 2.648 2.06.3.32.562.6.757.771.14.123.58.369.766.369"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21.164 21.414-1.5 1.333a1 1 0 0 1-1.328 0l-1.5-1.333A1 1 0 0 1 18 19.8V17a1 1 0 1 1 2 0v2.8a1 1 0 0 1 1.164 1.614"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderDownloadIcon);
module.exports = ForwardRef;