import * as React from "react";
function FeatherAddIcon({
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
    d: "M5 3a1 1 0 0 0-2 0v1H2a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V6h1a1 1 0 0 0 0-2H5zM4.395 18.955C5.891 12.807 10.618 3.46 20.891 3.048c.053-.002.1.04.104.093.437 5.293-3.203 5.56-6.31 5.414-.082-.004-.133.09-.09.16 1.797 2.895-.637 4.566-2.109 3.83-4.227-1.76-5.484 2.546-6.6 6.373q-.107.37-.215.73c-.156.529-.54.746-.885.676-.536-.11-.52-.838-.391-1.37"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FeatherAddIcon);
export default ForwardRef;