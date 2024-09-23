const React = require("react");
function NairaIcon({
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
    d: "M19.084 5a1 1 0 0 0-2 0v4.286h-4.941L9.165 4.819c-.823-1.235-2.748-.652-2.748.832v3.635H4.75a1 1 0 0 0 0 2h1.667v1.428H4.75a1 1 0 1 0 0 2h1.667V19a1 1 0 1 0 2 0v-4.286h4.94l2.979 4.467c.823 1.235 2.748.652 2.748-.832v-3.635h1.666a1 1 0 1 0 0-2h-1.666v-1.428h1.666a1 1 0 1 0 0-2h-1.666zm-4.656 7.714-.952-1.428h3.608v1.428zm2.656 3.983-1.322-1.983h1.322zm-6.012-5.411.953 1.428H8.417v-1.428zM8.417 7.303l1.322 1.983H8.417z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(NairaIcon);
module.exports = ForwardRef;