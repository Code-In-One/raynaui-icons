import * as React from "react";
function NftRemoveIcon({
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
    d: "M8.926 4a1 1 0 0 0-.874.514l-3.889 7a1 1 0 0 0 0 .972l2.467 4.44 2.455-3.508a3 3 0 0 1 3.935-.892l.017.01.291.18.48-.686a3 3 0 0 1 4.123-.776l.005.003 2.353 1.59q.323.218.569.498l.477-.86a1 1 0 0 0 0-.97l-.17-.309a1 1 0 1 1 1.748-.971l.17.308a3 3 0 0 1 0 2.914l-1.817 3.272-.033.061-2.038 3.669a3 3 0 0 1-2.446 1.537v.006H8.65v-.013a3 3 0 0 1-2.346-1.53l-.177-.319-.034-.062-3.678-6.621a3 3 0 0 1 0-2.914l3.889-7A3 3 0 0 1 8.926 2h8.04c.859 0 1.644.485 2.028 1.253a1 1 0 1 1-1.789.895.27.27 0 0 0-.239-.148zm3.606 16a1 1 0 0 1-.76-1.572l3.675-5.251a1 1 0 0 1 1.372-.26l.002.001 2.35 1.586a1 1 0 0 1 .332 1.28l-2.056 3.702a1 1 0 0 1-.875.514zm-2.771 0h-.835a1 1 0 0 1-.874-.514l-.198-.356a.7.7 0 0 1-.063-.165.2.2 0 0 1-.006-.054 1 1 0 0 1 .127-.327l2.812-4.02a1 1 0 0 1 1.297-.305l.159.098-2.047 2.924A2.96 2.96 0 0 0 9.76 20",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.951 9.817a1.61 1.61 0 0 0-1.019-1.019.537.537 0 0 1 0-1.019c.481-.16.859-.538 1.019-1.019a.537.537 0 0 1 1.019 0c.16.481.538.859 1.019 1.02.49.163.49.855 0 1.018-.481.16-.859.538-1.019 1.02a.537.537 0 0 1-1.019 0M18.75 6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(NftRemoveIcon);
export default ForwardRef;