const React = require("react");
function ShieldIcon({
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
    d: "M13.738 2.019a4 4 0 0 0-2.976 0L7.136 3.472l-.034.014-1.547.686C4.197 4.774 3.25 6.1 3.25 7.644c0 1.967.142 5.297 1.067 7.581.615 1.52 1.722 2.836 2.848 3.888 1.134 1.06 2.342 1.903 3.23 2.464a3.46 3.46 0 0 0 3.71 0c.888-.561 2.096-1.404 3.23-2.464 1.126-1.052 2.233-2.369 2.848-3.888.925-2.284 1.067-5.614 1.067-7.581 0-1.544-.948-2.87-2.305-3.472l-1.547-.686-.034-.014zm-2.232 1.856a2 2 0 0 1 1.488 0l3.61 1.446 1.53.68c.69.305 1.116.948 1.116 1.643 0 1.98-.159 4.948-.92 6.83-.463 1.142-1.341 2.225-2.36 3.178-1.012.945-2.108 1.713-2.933 2.234a1.46 1.46 0 0 1-1.574 0c-.825-.521-1.92-1.289-2.932-2.234-1.02-.953-1.898-2.036-2.36-3.177-.763-1.883-.92-4.85-.921-6.831 0-.695.427-1.338 1.116-1.643l1.53-.68z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ShieldIcon);
module.exports = ForwardRef;