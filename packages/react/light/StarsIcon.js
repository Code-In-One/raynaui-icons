const React = require("react");
function StarsIcon({
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
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M6.9 7.866a2.15 2.15 0 0 0-1.36-1.358c-.652-.218-.652-1.141 0-1.359A2.15 2.15 0 0 0 6.9 3.791c.217-.653 1.14-.653 1.358 0a2.15 2.15 0 0 0 1.358 1.358c.653.218.653 1.141 0 1.359a2.15 2.15 0 0 0-1.358 1.358c-.218.653-1.141.653-1.359 0ZM7.048 20.733a4.3 4.3 0 0 0-2.717-2.718c-1.306-.435-1.306-2.282 0-2.717a4.3 4.3 0 0 0 2.717-2.717c.435-1.306 2.282-1.306 2.717 0a4.3 4.3 0 0 0 2.717 2.717c1.306.435 1.306 2.282 0 2.717a4.3 4.3 0 0 0-2.717 2.718c-.435 1.305-2.282 1.305-2.717 0ZM14.936 11.262a3.22 3.22 0 0 1 2.038 2.037c.326.98 1.711.98 2.038 0a3.22 3.22 0 0 1 2.037-2.037c.98-.327.98-1.712 0-2.038a3.22 3.22 0 0 1-2.037-2.038c-.327-.98-1.712-.98-2.038 0a3.22 3.22 0 0 1-2.038 2.038c-.98.326-.98 1.711 0 2.038Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(StarsIcon);
module.exports = ForwardRef;