import * as React from "react";
function FeatherAiIcon({
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
    d: "M21.405 3.003c-10.272.412-15 9.758-16.496 15.906-.13.532-.145 1.26.392 1.37.344.07.728-.147.885-.675C7.367 15.624 8.5 10.627 13 12.5c1.471.736 3.905-.934 2.109-3.83-.043-.07.007-.164.09-.16 3.107.146 6.746-.121 6.31-5.413a.1.1 0 0 0-.105-.094M4.113 6.65a1.61 1.61 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018c.482-.16.86-.538 1.02-1.02a.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0M13.094 18.63c.48.161.858.539 1.019 1.02.163.49.855.49 1.019 0 .16-.481.537-.859 1.019-1.02a.537.537 0 0 0 0-1.018 1.61 1.61 0 0 1-1.02-1.02.537.537 0 0 0-1.018 0c-.16.482-.538.86-1.02 1.02a.537.537 0 0 0 0 1.019"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FeatherAiIcon);
export default ForwardRef;