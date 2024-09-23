const React = require("react");
function NftAddIcon({
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
    d: "M7.802 4.514A1 1 0 0 1 8.676 4h8.04a1 1 0 1 0 0-2h-8.04a3 3 0 0 0-2.622 1.543l-3.89 7a3 3 0 0 0 0 2.914l3.89 7a3 3 0 0 0 2.346 1.53V22h8.1v-.005a3 3 0 0 0 2.445-1.538l3.889-7a3 3 0 0 0 0-2.914l-.171-.308a1 1 0 0 0-1.749.971l.171.308a1 1 0 0 1 0 .972l-1.01 1.817a2 2 0 0 0-.595-.627l-2.354-1.59a2 2 0 0 0-2.748.517l-1.022 1.46-1.078-.666a2 2 0 0 0-2.624.594L6.921 17.9l-3.008-5.413a1 1 0 0 1 0-.972z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.682 8.798c.481.16.859.538 1.02 1.02.162.489.855.489 1.018 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.61 1.61 0 0 1 8.72 6.76a.537.537 0 0 0-1.019 0c-.16.481-.538.859-1.019 1.02a.537.537 0 0 0 0 1.018M21.5 4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V7h1a1 1 0 1 0 0-2h-1z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(NftAddIcon);
module.exports = ForwardRef;