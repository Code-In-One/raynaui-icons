const React = require("react");
function PinIcon({
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
    d: "M10.25 1a4 4 0 0 0-4 4v4.092a2 2 0 0 1-.336 1.11l-.941 1.411c-1.108 1.662.083 3.887 2.08 3.887h4.197V22a1 1 0 1 0 2 0v-6.5h4.198c1.996 0 3.187-2.225 2.08-3.887l-.942-1.412a2 2 0 0 1-.336-1.11V5a4 4 0 0 0-4-4zm7.198 12.5a.5.5 0 0 0 .415-.777l-.94-1.413a4 4 0 0 1-.673-2.218V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4.092a4 4 0 0 1-.672 2.218l-.941 1.413a.5.5 0 0 0 .416.777z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PinIcon);
module.exports = ForwardRef;