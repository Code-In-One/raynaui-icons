const React = require("react");
function FolderCloudIcon({
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
    d: "M5.817 3A3.567 3.567 0 0 0 2.25 6.567V17a4 4 0 0 0 4 4h7a1 1 0 1 0 0-2h-7a2 2 0 0 1-2-2V6.567C4.25 5.702 4.952 5 5.817 5h2.517l.01.004c.028.012.12.05.29.167.239.168.519.415.823.715.283.279.562.577.829.86l.05.054c.264.283.544.581.772.782.162.142.392.279.572.37.101.052.218.106.339.149.097.035.292.099.516.099h5.716c1.104 0 1.999.895 1.999 2v4.3a1 1 0 1 0 2 0v-4.3c0-2.209-1.789-4-3.999-4H12.65a1.4 1.4 0 0 1-.193-.104l-.037-.025a12 12 0 0 1-.624-.639l-.055-.058a31 31 0 0 0-.88-.914 9 9 0 0 0-1.082-.928C9.44 3.295 8.934 3 8.364 3z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M19.1 16c-1.513 0-2.786 1.134-2.935 2.62a2.45 2.45 0 0 0-.915 1.91c0 1.383 1.138 2.47 2.5 2.47h2.7c1.528 0 2.8-1.22 2.8-2.765a2.76 2.76 0 0 0-1.408-2.398A2.95 2.95 0 0 0 19.1 16m-.95 2.912c0-.485.407-.912.95-.912a.94.94 0 0 1 .935.746 1 1 0 0 0 .673.765.77.77 0 0 1 .542.724c0 .404-.34.765-.8.765h-2.7c-.295 0-.5-.23-.5-.47 0-.183.113-.355.3-.432a1 1 0 0 0 .608-1.063 1 1 0 0 1-.008-.123",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderCloudIcon);
module.exports = ForwardRef;