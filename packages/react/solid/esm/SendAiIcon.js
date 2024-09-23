import * as React from "react";
function SendAiIcon({
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
    d: "M17.093 5.63c.48.161.858.539 1.019 1.02.163.49.855.49 1.019 0a1.61 1.61 0 0 1 1.018-1.02.537.537 0 0 0 0-1.018 1.61 1.61 0 0 1-1.018-1.02.537.537 0 0 0-1.02 0 1.61 1.61 0 0 1-1.018 1.02.537.537 0 0 0 0 1.019M20.46 10.632 6.32 4.269c-1.142-.514-2.374.517-2.07 1.732l.984 3.936a1.5 1.5 0 0 0 1.359 1.133L21 12l-14.407.93a1.5 1.5 0 0 0-1.359 1.133l-.984 3.936c-.304 1.215.928 2.246 2.07 1.731l14.14-6.362c1.18-.53 1.18-2.205 0-2.736"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.093 5.63c.48.161.858.539 1.019 1.02.163.49.855.49 1.019 0a1.61 1.61 0 0 1 1.018-1.02.537.537 0 0 0 0-1.018 1.61 1.61 0 0 1-1.018-1.02.537.537 0 0 0-1.02 0 1.61 1.61 0 0 1-1.018 1.02.537.537 0 0 0 0 1.019M20.46 10.632 6.32 4.269c-1.142-.514-2.374.517-2.07 1.732l.984 3.936a1.5 1.5 0 0 0 1.359 1.133L21 12l-14.407.93a1.5 1.5 0 0 0-1.359 1.133l-.984 3.936c-.304 1.215.928 2.246 2.07 1.731l14.14-6.362c1.18-.53 1.18-2.205 0-2.736"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SendAiIcon);
export default ForwardRef;