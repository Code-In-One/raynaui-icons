const React = require("react");
function MicrophoneSlashIcon({
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
    d: "M22.043 1.293a1 1 0 1 1 1.414 1.414l-20 20a1 1 0 0 1-1.414-1.414zM5.842 16.08a8 8 0 0 1-.143-.396 1 1 0 0 0-1.898.632q.226.675.524 1.28zM6.84 20.739c4.724 3.762 12.622 2.288 14.859-4.423a1 1 0 1 0-1.898-.632c-1.734 5.204-7.79 6.411-11.53 3.623zM12.75 2a6.98 6.98 0 0 1 5.035 2.137L16.37 5.55A5 5 0 0 0 7.75 9v4q.001.546.112 1.06L6.27 15.651A7 7 0 0 1 5.75 13V9a7 7 0 0 1 7-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.75 18a5 5 0 0 1-2.502-.67L8.8 18.78A7 7 0 0 0 19.75 13V9q0-.555-.083-1.088L17.75 9.828V13a5 5 0 0 1-5 5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MicrophoneSlashIcon);
module.exports = ForwardRef;