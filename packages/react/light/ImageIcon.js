const React = require("react");
function ImageIcon({
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
    d: "M5.933 8.798c.481.16.858.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.61 1.61 0 0 1 7.97 6.76a.537.537 0 0 0-1.018 0c-.16.481-.538.859-1.02 1.02a.537.537 0 0 0 0 1.018"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm16 11.798V6a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h.143a2.9 2.9 0 0 1 .38-2.564l2.813-4.02a3 3 0 0 1 3.935-.891l.316.178.473-.675a3 3 0 0 1 4.121-.776zm-9.565.551-.149-.084a1 1 0 0 0-1.312.298l-2.811 4.02A.901.901 0 0 0 8.65 20h1.111a2.96 2.96 0 0 1 .372-2.72zM12.59 20h7.159a2 2 0 0 0 2-2v-1.263a1 1 0 0 0-.445-.832l-4.483-2.988a1 1 0 0 0-1.374.258l-3.676 5.252a1 1 0 0 0 .82 1.573",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageIcon);
module.exports = ForwardRef;