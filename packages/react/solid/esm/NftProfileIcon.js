import * as React from "react";
function NftProfileIcon({
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
    d: "M12.5 14.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.5 21.995a3 3 0 0 0 2.445-1.538l3.889-7a3 3 0 0 0 0-2.914l-3.89-7A3 3 0 0 0 16.323 2H8.676a3 3 0 0 0-2.622 1.543l-3.89 7a3 3 0 0 0 0 2.914l3.89 7a3 3 0 0 0 2.346 1.53V22h8.1zM8.675 4a1 1 0 0 0-.874.514l-3.889 7a1 1 0 0 0 0 .972l3.024 5.443C8.232 17.19 10.62 15.99 12.5 16c1.886.011 4.283 1.245 5.537 1.975l3.05-5.49a1 1 0 0 0 0-.97l-3.89-7A1 1 0 0 0 16.323 4z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(NftProfileIcon);
export default ForwardRef;