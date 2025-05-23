import * as React from "react";
function SuitcaseIcon({
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
    fillRule: "evenodd",
    d: "M7.538 6.667H5.222A2.22 2.22 0 0 0 3 8.889v.482l7.266 2.698c.412.153.848.23 1.287.23h.894c.44 0 .875-.077 1.287-.23L21 9.37V8.89a2.22 2.22 0 0 0-2.222-2.222h-2.316A3.67 3.67 0 0 0 12.933 4h-1.866a3.67 3.67 0 0 0-3.529 2.667m2.195 0h4.534A1.66 1.66 0 0 0 12.933 6h-1.866c-.546 0-1.03.262-1.334.667M13 9.5a1 1 0 1 0-2 0v.889a1 1 0 1 0 2 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.527 17.302-.627-6.19 6.696 2.479a3 3 0 0 0 1.042.187h.724a3 3 0 0 0 1.042-.187l6.696-2.48-.627 6.191A3 3 0 0 1 16.488 20H7.512a3 3 0 0 1-2.985-2.698"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SuitcaseIcon);
export default ForwardRef;