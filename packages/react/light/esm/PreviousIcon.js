import * as React from "react";
function PreviousIcon({
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
    d: "M2.75 6.5a1 1 0 1 1 2 0v2.859l5.155-2.576c1.766-.883 3.845.4 3.845 2.376v.2l5.154-2.576c1.767-.883 3.846.4 3.846 2.376v5.682c0 1.976-2.08 3.26-3.846 2.377l-5.154-2.576v.2c0 1.975-2.08 3.258-3.845 2.376L4.75 14.642V17.5a1 1 0 1 1-2 0zm9 2.659a.657.657 0 0 0-.951-.587l-5.686 2.84a.656.656 0 0 0 0 1.175L10.8 15.43c.437.218.951-.1.951-.588zm2 2.842c0 .233.121.465.363.586L19.8 15.43c.437.218.951-.1.951-.588V9.16a.657.657 0 0 0-.951-.587l-5.686 2.84a.65.65 0 0 0-.363.587z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PreviousIcon);
export default ForwardRef;