const React = require("react");
function Code2Icon({
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
    d: "M8.5 2a4 4 0 0 0-4 4v3.146a2 2 0 0 1-1.106 1.789l-.341.17a1 1 0 0 0 0 1.79l.341.17a2 2 0 0 1 1.106 1.79V18a4 4 0 0 0 4 4H10a1 1 0 1 0 0-2H8.5a2 2 0 0 1-2-2v-3.146A4 4 0 0 0 5.303 12 4 4 0 0 0 6.5 9.146V6a2 2 0 0 1 2-2H10a1 1 0 1 0 0-2zM16.5 2a4 4 0 0 1 4 4v3.146a2 2 0 0 0 1.106 1.789l.341.17a1 1 0 0 1 0 1.79l-.341.17a2 2 0 0 0-1.106 1.79V18a4 4 0 0 1-4 4H15a1 1 0 1 1 0-2h1.5a2 2 0 0 0 2-2v-3.146A4 4 0 0 1 19.697 12 4 4 0 0 1 18.5 9.146V6a2 2 0 0 0-2-2H15a1 1 0 1 1 0-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Code2Icon);
module.exports = ForwardRef;