const React = require("react");
function BellIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M13 3a1 1 0 1 0-2 0v1.5q0 .042.004.082A6 6 0 0 0 6 10.5V14.5c0 .5-.41 1.368-.859 2.167-.631 1.125-.516 2.481.69 2.94 1.213.462 3.152.893 6.17.893 3.016 0 4.956-.43 6.168-.892 1.206-.46 1.322-1.816.69-2.94C18.41 15.867 18 15 18 14.5v-4a6 6 0 0 0-5.003-5.918L13 4.5zM8.92 21.325l.135.112c.15.12.365.276.637.431A4.67 4.67 0 0 0 12 22.5c.974 0 1.77-.324 2.309-.632a5 5 0 0 0 .771-.543c-.874.108-1.894.175-3.08.175s-2.205-.067-3.08-.175"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BellIcon);
module.exports = ForwardRef;