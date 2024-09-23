const React = require("react");
function Plant2Icon({
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
    d: "M12.5 1a1 1 0 0 1 1 1v6.653C14.584 7.259 16.692 6 20.5 6c-1.105 3.452-4.672 4.835-7 5.22V12h4.81a1 1 0 0 1 .985 1.172l-1.4 8a1 1 0 0 1-.985.828H8.09a1 1 0 0 1-.985-.828l-1.4-8A1 1 0 0 1 6.69 12h4.81V8.22C9.172 7.836 5.605 6.453 4.5 3c3.808 0 5.916 1.259 7 2.653V2a1 1 0 0 1 1-1"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Plant2Icon);
module.exports = ForwardRef;