const React = require("react");
function CloudDownloadIcon({
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
    d: "M2.5 15a5 5 0 0 0 5 5h.574c.109-.477.336-.935.684-1.326q.332-.371.742-.606V15a3 3 0 1 1 6 0v3.068c.271.156.523.358.742.606.345.387.57.84.68 1.311A6 6 0 0 0 18.39 8.304 6.5 6.5 0 0 0 5.56 10.39 5 5 0 0 0 2.5 15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.664 21.414-1.5 1.333a1 1 0 0 1-1.328 0l-1.5-1.333A1 1 0 0 1 11.5 19.8V15a1 1 0 1 1 2 0v4.8a1 1 0 0 1 1.164 1.614"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CloudDownloadIcon);
module.exports = ForwardRef;