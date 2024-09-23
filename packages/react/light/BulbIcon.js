const React = require("react");
function BulbIcon({
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
    d: "M13.442 7.29a1 1 0 0 1 .129 1.263 1 1 0 0 1 .446 1.59l-1.257 1.5a1 1 0 0 1-1.628-1.15 1 1 0 0 1-.592-1.697l1.488-1.5a1 1 0 0 1 1.414-.006"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.75 9.5a7.5 7.5 0 1 1 11.287 6.475l-.743 2.973A1.39 1.39 0 0 1 13.946 20c-.138 0-.279.013-.434.035A1 1 0 0 1 13.25 22h-2a1 1 0 0 1-.262-1.965 3 3 0 0 0-.434-.035 1.39 1.39 0 0 1-1.348-1.052l-.743-2.973A7.5 7.5 0 0 1 4.75 9.5m7.5-5.5a5.5 5.5 0 0 0-2.473 10.414 1 1 0 0 1 .52.65l.74 2.962c.311.032.6.088.844.135l.034.006.189.036c.082.016.13.019.146.019a1 1 0 0 0 .146-.019l.19-.036.033-.006a10 10 0 0 1 .844-.135l.74-2.961a1 1 0 0 1 .52-.65A5.5 5.5 0 0 0 12.25 4",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BulbIcon);
module.exports = ForwardRef;