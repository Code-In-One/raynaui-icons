const React = require("react");
function BookmarkIcon({
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
    d: "M7.679 1C5.269 1 3.25 2.89 3.25 5.301v14.494c0 3.12 3.991 4.302 5.868 1.98l2.557-3.166a.756.756 0 0 1 1.15 0l2.557 3.165c1.877 2.323 5.868 1.142 5.868-1.98V5.302C21.25 2.891 19.231 1 16.821 1zM5.25 5.301C5.25 4.066 6.301 3 7.679 3h9.142C18.2 3 19.25 4.066 19.25 5.301v14.494c0 1.07-1.516 1.708-2.312.723l-2.557-3.166c-1.087-1.345-3.175-1.345-4.262 0l-2.557 3.166c-.796.985-2.312.347-2.312-.723z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BookmarkIcon);
module.exports = ForwardRef;