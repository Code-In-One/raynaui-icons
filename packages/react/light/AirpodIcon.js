const React = require("react");
function AirpodIcon({
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
    d: "M11.75 19.5a2.5 2.5 0 0 1-5 0v-4.81c0-1.428-.607-2.79-1.669-3.747l-.763-.687a4.74 4.74 0 0 1-1.568-3.52v-.588a4.148 4.148 0 0 1 7.774-2.015l.489.88c.483.871.737 1.85.737 2.846zm-7-13.352a2.148 2.148 0 0 1 4.025-1.043l.49.88a3.86 3.86 0 0 1 .485 1.874V19.5a.5.5 0 0 1-1 0v-4.81a7.04 7.04 0 0 0-2.331-5.233l-.763-.687a2.74 2.74 0 0 1-.906-2.034zM12.75 19.5a2.5 2.5 0 0 0 5 0v-4.81c0-1.428.607-2.79 1.669-3.747l.763-.687a4.74 4.74 0 0 0 1.568-3.52v-.588a4.148 4.148 0 0 0-7.774-2.015l-.489.88a5.86 5.86 0 0 0-.737 2.846zm7-13.352a2.148 2.148 0 0 0-4.025-1.043l-.49.88a3.86 3.86 0 0 0-.485 1.874V19.5a.5.5 0 0 0 1 0v-4.81c0-1.995.847-3.898 2.331-5.233l.763-.687a2.74 2.74 0 0 0 .906-2.034z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AirpodIcon);
module.exports = ForwardRef;