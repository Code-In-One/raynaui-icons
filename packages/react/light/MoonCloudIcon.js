const React = require("react");
function MoonCloudIcon({
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
    d: "M12.75 23c-1.72 0-3.35-.395-4.801-1.1A11 11 0 0 1 1.75 12c0-6.075 4.925-11 11-11 .964 0 1.9.124 2.794.358.37.097.67.335.845.657.164.302.191.623.152.89-.074.507-.442 1.09-1.13 1.255-2.636.63-4.661 3.035-4.661 5.84 0 .882.19 1.719.531 2.472C12.133 11.005 13.655 10 15.45 10c2.265 0 4.103 1.609 4.696 3.717q.493.253.909.614a1.54 1.54 0 0 1 1.247.094c.238.13.479.344.621.657.152.334.16.715.017 1.068q-.154.379-.336.744.145.591.146 1.224c0 2.624-1.99 4.882-4.6 4.882zm-9-11a9 9 0 0 1 9.175-8.998C10.465 4.368 8.75 6.993 8.75 10a7.97 7.97 0 0 0 1.802 5.058l-.002.148v.02c-1.1.768-1.8 2.082-1.8 3.539 0 .49.08.965.23 1.41l-.157-.075A9 9 0 0 1 3.75 12m8.8 3.206c0-1.843 1.368-3.206 2.9-3.206 1.36 0 2.584 1.065 2.849 2.602a1 1 0 0 0 .648.771c1.01.362 1.803 1.424 1.803 2.745 0 1.664-1.234 2.882-2.6 2.882h-5.4c-1.035 0-2-.928-2-2.235 0-.969.545-1.753 1.25-2.073a1 1 0 0 0 .578-1.036 4 4 0 0 1-.028-.45",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MoonCloudIcon);
module.exports = ForwardRef;