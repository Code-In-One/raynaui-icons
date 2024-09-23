import * as React from "react";
function BadgeIcon({
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
    d: "M11.186 16.729a1.89 1.89 0 0 0 2.628 0 1.89 1.89 0 0 1 1.578-.513 1.89 1.89 0 0 0 2.126-1.544c.1-.574.46-1.07.976-1.343a1.89 1.89 0 0 0 .812-2.5 1.89 1.89 0 0 1 0-1.659 1.89 1.89 0 0 0-.812-2.499 1.89 1.89 0 0 1-.976-1.343 1.89 1.89 0 0 0-2.126-1.544 1.89 1.89 0 0 1-1.578-.513 1.89 1.89 0 0 0-2.628 0 1.89 1.89 0 0 1-1.578.513 1.89 1.89 0 0 0-2.126 1.544 1.89 1.89 0 0 1-.976 1.343 1.89 1.89 0 0 0-.812 2.5 1.89 1.89 0 0 1 0 1.659 1.89 1.89 0 0 0 .812 2.499c.515.273.875.769.976 1.343a1.89 1.89 0 0 0 2.126 1.544 1.89 1.89 0 0 1 1.578.513m.635-8.767a2.15 2.15 0 0 1-1.359 1.359c-.653.217-.653 1.14 0 1.358a2.15 2.15 0 0 1 1.359 1.359c.217.653 1.14.653 1.358 0a2.15 2.15 0 0 1 1.359-1.359c.653-.217.653-1.14 0-1.358a2.15 2.15 0 0 1-1.359-1.359c-.217-.653-1.14-.653-1.358 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.81 17.345-1.416.708a2 2 0 0 1-1.788 0l-1.416-.708a.446.446 0 0 0-.63.284q-.06.225-.06.458v3.315c0 1.112 1.43 1.564 2.069.655a1.138 1.138 0 0 1 1.862 0c.64.909 2.069.457 2.069-.655v-3.315q0-.233-.06-.458a.446.446 0 0 0-.63-.284"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BadgeIcon);
export default ForwardRef;