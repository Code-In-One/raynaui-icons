const React = require("react");
function MergeIcon({
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
    d: "M8.768 7.823a3.001 3.001 0 1 0-2.018.006v8.342a3.001 3.001 0 1 0 2 0V13.42c.302.539.632 1.074.986 1.593.882 1.294 1.933 2.517 3.092 3.427.918.72 1.957 1.285 3.067 1.483A3.001 3.001 0 0 0 21.75 19a3 3 0 0 0-5.788-1.11c-.6-.163-1.239-.505-1.9-1.023-.95-.747-1.868-1.799-2.673-2.98a19.4 19.4 0 0 1-1.937-3.612c-.398-.994-.623-1.843-.684-2.452M7.75 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m10 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-11 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MergeIcon);
module.exports = ForwardRef;