const React = require("react");
function Plant2Icon({
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
    d: "M12.75 1a1 1 0 0 1 1 1v5.194C15.18 5.91 17.424 5 20.75 5a1 1 0 0 1 .952 1.305c-.74 2.315-2.428 3.794-4.147 4.695h1.005a2 2 0 0 1 1.97 2.345l-1.4 8A2 2 0 0 1 17.16 23H8.34a2 2 0 0 1-1.97-1.655l-1.4-8A2 2 0 0 1 6.94 11h4.81V9.233a12.4 12.4 0 0 1-3.782-1.221c-1.727-.9-3.426-2.382-4.17-4.707A1 1 0 0 1 4.75 2c3.326 0 5.57.91 7 2.194V2a1 1 0 0 1 1-1M8.892 6.238a10.3 10.3 0 0 0 2.593.916 4.2 4.2 0 0 0-1.014-1.42C9.689 5.01 8.414 4.33 6.38 4.09c.634.937 1.528 1.635 2.51 2.147m7.716 3a10.3 10.3 0 0 1-2.593.916c.196-.461.517-.96 1.014-1.42.783-.724 2.057-1.404 4.09-1.643-.634.937-1.528 1.635-2.51 2.147M8.34 21l-1.4-8h11.62l-1.4 8z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Plant2Icon);
module.exports = ForwardRef;