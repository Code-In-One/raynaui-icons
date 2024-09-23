const React = require("react");
function GlobeIcon({
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
    d: "M5.152 4.859a10.21 10.21 0 0 0-2.89 7.572l1.91-.954.98-3.431zM15.342 8.484a.25.25 0 0 1 .278.16l.968 2.637a.25.25 0 0 1-.016.207L12.39 19.09a.23.23 0 0 1-.116.113.27.27 0 0 1-.157.01.26.26 0 0 1-.138-.075.23.23 0 0 1-.057-.152l-.285-4.266a1.75 1.75 0 0 0-.963-1.449L8.029 11.95a.25.25 0 0 1-.065-.4l2.094-2.095a.25.25 0 0 1 .134-.07z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.652 3.585v4.671l-1.219 4.267-2.981 1.49c.935 4.695 5.079 8.233 10.048 8.233a10.2 10.2 0 0 0 5.89-1.86l.541-4.882 3.811-3.81c-.162-5.518-4.685-9.94-10.242-9.94a10.2 10.2 0 0 0-5.848 1.83m10.376 4.542a1.75 1.75 0 0 0-1.944-1.12l-5.15.9a1.75 1.75 0 0 0-.937.487l-2.094 2.094a1.75 1.75 0 0 0 .455 2.803l2.645 1.323a.25.25 0 0 1 .138.207l.284 4.266c.116 1.744 2.437 2.259 3.28.727l4.181-7.604a1.75 1.75 0 0 0 .11-1.446z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22.55 14.007-2.186 2.186-.302 2.721a10.2 10.2 0 0 0 2.488-4.907"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GlobeIcon);
module.exports = ForwardRef;