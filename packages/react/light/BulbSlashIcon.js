const React = require("react");
function BulbSlashIcon({
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
    d: "M12.25 2c1.988 0 3.794.773 5.137 2.035L15.97 5.45A5.5 5.5 0 0 0 8.2 13.221l-1.415 1.415A7.5 7.5 0 0 1 12.25 2M17.748 9.331 19.5 7.577A7.5 7.5 0 0 1 19.75 9.5a7.5 7.5 0 0 1-3.713 6.475l-.743 2.973A1.39 1.39 0 0 1 13.946 20c-.138 0-.279.013-.434.035A1 1 0 0 1 13.25 22h-2a1 1 0 0 1-.262-1.965 3 3 0 0 0-.434-.035 1.39 1.39 0 0 1-1.348-1.052l-.215-.86 1.65-1.65.396 1.588c.311.032.6.088.844.135l.034.006.189.036c.082.016.13.019.146.019a1 1 0 0 0 .146-.019l.19-.036.033-.006a10 10 0 0 1 .844-.135l.74-2.961a1 1 0 0 1 .52-.65 5.5 5.5 0 0 0 3.024-5.084M20.957 3.293a1 1 0 0 1 0 1.414l-14.5 14.5a1 1 0 0 1-1.414-1.414l14.5-14.5a1 1 0 0 1 1.414 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BulbSlashIcon);
module.exports = ForwardRef;