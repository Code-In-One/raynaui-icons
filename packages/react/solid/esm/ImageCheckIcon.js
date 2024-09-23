import * as React from "react";
function ImageCheckIcon({
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
    d: "M23.196 4.207a1 1 0 0 0-1.414-1.414l-1.939 1.939-.282-.282a1 1 0 0 0-1.414 1.414l.989.989a1 1 0 0 0 1.414 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 7a2 2 0 0 1 2-2h11a1 1 0 1 0 0-2h-11a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-8a1 1 0 0 0-2 0v6.25l-4.437-5.546a3 3 0 0 0-4.839.21L10.5 13.5l-.661-.516a2 2 0 0 0-2.697.613l-2.81 4.255A2 2 0 0 0 4 18.954V19q0 .183.032.358A2 2 0 0 1 3.5 18z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.683 8.798c.481.16.859.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.61 1.61 0 0 1 7.72 6.76a.537.537 0 0 0-1.018 0c-.16.481-.538.859-1.019 1.02a.537.537 0 0 0 0 1.018"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageCheckIcon);
export default ForwardRef;