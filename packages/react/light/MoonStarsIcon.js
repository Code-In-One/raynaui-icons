const React = require("react");
function MoonStarsIcon({
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
    d: "M1.75 12c0-6.075 4.925-11 11-11 .964 0 1.9.124 2.794.358.37.097.67.335.845.657.164.302.191.623.152.89-.074.507-.442 1.09-1.13 1.255-2.636.63-4.661 3.035-4.661 5.84a6 6 0 0 0 9.869 4.586c.54-.456 1.229-.407 1.683-.16.238.129.479.344.621.657.152.334.16.715.017 1.067C21.303 20.166 17.358 23 12.75 23c-6.075 0-11-4.925-11-11m11-9a9 9 0 1 0 7.274 14.301A8 8 0 0 1 8.75 10c0-3.007 1.715-5.632 4.175-6.998z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.093 8.041a1.34 1.34 0 0 0-.85-.849.448.448 0 0 1 0-.849c.402-.133.716-.448.85-.849a.448.448 0 0 1 .85 0c.133.401.447.716.848.85a.448.448 0 0 1 0 .848c-.4.134-.715.449-.849.85a.448.448 0 0 1-.849 0M14.244 13.192c.4.134.715.448.849.85a.448.448 0 0 0 .85 0c.133-.402.447-.716.848-.85a.448.448 0 0 0 0-.849 1.34 1.34 0 0 1-.849-.849.448.448 0 0 0-.849 0c-.134.401-.448.716-.85.85a.448.448 0 0 0 0 .848"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MoonStarsIcon);
module.exports = ForwardRef;