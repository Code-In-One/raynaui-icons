import * as React from "react";
function UserGroupIcon({
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
    d: "M12.5 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8M6.762 18c-1.42 2.67 3.28 4 5.738 4s7.158-1.33 5.738-4c-1.068-2.008-3.227-4-5.738-4-2.51 0-4.67 1.992-5.738 4M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M3.396 19.445a1 1 0 1 1-1.792-.89 6.3 6.3 0 0 1 1.623-2.052c.7-.568 1.597-1.003 2.62-1.003a1 1 0 1 1 0 2c-.44 0-.906.188-1.358.555a4.3 4.3 0 0 0-1.093 1.39M21.31 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M23.4 18.555a1 1 0 0 1-1.791.89 4.3 4.3 0 0 0-1.093-1.39c-.452-.367-.918-.555-1.359-.555a1 1 0 0 1 0-2c1.024 0 1.92.435 2.62 1.003a6.3 6.3 0 0 1 1.623 2.052"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserGroupIcon);
export default ForwardRef;