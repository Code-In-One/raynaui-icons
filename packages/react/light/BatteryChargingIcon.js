const React = require("react");
function BatteryChargingIcon({
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
    d: "M12.25 9.526c0-1.426-1.963-1.812-2.503-.493l-1.253 3.064a1.3 1.3 0 0 0 1.203 1.792h.553v.585c0 1.426 1.963 1.812 2.503.493l1.253-3.064a1.3 1.3 0 0 0-1.203-1.792h-.553zm-1.51 2.363.018-.046.065.046zm1.002.269-.065-.047h.084z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-.208a2.5 2.5 0 0 0 1.5-2.292v-1a2.5 2.5 0 0 0-1.5-2.292V9a4 4 0 0 0-4-4zm12 4a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BatteryChargingIcon);
module.exports = ForwardRef;