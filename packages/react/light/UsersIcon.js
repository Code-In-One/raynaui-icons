const React = require("react");
function UsersIcon({
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
    d: "M14.25 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.406 20.527a1 1 0 1 1-1.7-1.054C8.076 17.266 10.876 15 14.25 15s6.175 2.266 7.544 4.473a1 1 0 1 1-1.7 1.054C18.974 18.718 16.735 17 14.25 17s-4.722 1.718-5.844 3.527M8.148 6.56a1 1 0 0 1-.458 1.338C6.782 8.343 6.25 9.152 6.25 10s.532 1.657 1.44 2.102a1 1 0 0 1-.88 1.796C5.333 13.174 4.25 11.733 4.25 10s1.083-3.174 2.56-3.898a1 1 0 0 1 1.338.458M4.406 20.527a1 1 0 1 1-1.7-1.054c.58-.934 1.506-1.713 2.54-2.317a1 1 0 0 1 1.009 1.726c-.864.505-1.5 1.08-1.85 1.645"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UsersIcon);
module.exports = ForwardRef;