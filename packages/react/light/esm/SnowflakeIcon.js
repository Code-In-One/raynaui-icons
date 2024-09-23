import * as React from "react";
function SnowflakeIcon({
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
    d: "M12.41 1a1 1 0 0 1 1 1v2.131l1.446-.963a1 1 0 0 1 1.11 1.664L13.41 6.535v3.733l3.219-1.859.121-2.996a1 1 0 1 1 1.998.08l-.07 1.733 1.892-1.092a1 1 0 1 1 1 1.732l-1.846 1.066 1.557.77a1 1 0 0 1-.887 1.793l-2.752-1.361L14.41 12l3.22 1.859 2.656-1.394a1 1 0 1 1 .929 1.771l-1.536.806 1.892 1.092a1 1 0 0 1-1 1.732L18.725 16.8l.112 1.734a1 1 0 0 1-1.996.129l-.198-3.065-3.232-1.866v3.733l2.554 1.703a1 1 0 0 1-1.11 1.664l-1.444-.963V22a1 1 0 1 1-2 0v-2.131l-1.446.963a1 1 0 0 1-1.11-1.664l2.556-1.703v-3.733l-3.233 1.867-.198 3.064a1 1 0 0 1-1.996-.13l.112-1.733-1.846 1.066a1 1 0 0 1-1-1.732l1.846-1.066-1.557-.77a1 1 0 1 1 .886-1.792l2.753 1.36L10.41 12l-3.232-1.866-2.753 1.36a1 1 0 1 1-.886-1.792l1.557-.77L3.25 7.866a1 1 0 0 1 1-1.732L6.096 7.2l-.112-1.734a1 1 0 0 1 1.996-.128l.198 3.064 3.233 1.866V6.551L8.876 4.947a1 1 0 1 1 1.07-1.69l1.465.927V2a1 1 0 0 1 1-1"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SnowflakeIcon);
export default ForwardRef;