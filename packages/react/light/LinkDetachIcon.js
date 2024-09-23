const React = require("react");
function LinkDetachIcon({
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
    d: "M12.958 4.222a5 5 0 1 1 7.07 7.071L17.2 14.121a1 1 0 0 1-1.414-1.414l2.828-2.828a3 3 0 1 0-4.242-4.243l-2.829 2.829A1 1 0 1 1 10.13 7.05zM8.715 9.879a1 1 0 0 1 0 1.414l-2.829 2.828a3 3 0 1 0 4.243 4.243l2.829-2.828a1 1 0 0 1 1.414 1.414l-2.829 2.828a5 5 0 1 1-7.07-7.07L7.3 9.877a1 1 0 0 1 1.414 0M19.614 15.536a1 1 0 0 1-1 1H17.2a1 1 0 0 1-.703-.289c.179.18.289.429.289.703v1.414a1 1 0 0 1-2 0V16.95a1 1 0 0 1 1.703-.712 1 1 0 0 1 .711-1.703h1.414a1 1 0 0 1 1 1M8.715 4.636a1 1 0 0 0-1 1V7.05c0 .274.11.522.288.703a1 1 0 0 0-.702-.288H5.887a1 1 0 0 0 0 2H7.3a1 1 0 0 0 .711-1.703 1 1 0 0 0 1.703-.711V5.635a1 1 0 0 0-1-1"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LinkDetachIcon);
module.exports = ForwardRef;