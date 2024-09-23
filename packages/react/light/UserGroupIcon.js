const React = require("react");
function UserGroupIcon({
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
    d: "M12.25 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0M12.25 22c-1.137 0-2.776-.269-4.02-.84-.61-.28-1.265-.697-1.651-1.32a2.1 2.1 0 0 1-.329-1.146c.005-.427.138-.832.358-1.203C7.61 15.795 9.69 14 12.25 14s4.64 1.795 5.643 3.491c.22.371.353.776.357 1.203a2.1 2.1 0 0 1-.328 1.147c-.387.622-1.041 1.038-1.652 1.319-1.244.571-2.883.84-4.02.84m-3.92-3.491c-.077.13-.08.194-.08.205 0 .007 0 .027.028.072.08.128.31.337.787.556.93.428 2.274.658 3.185.658s2.255-.23 3.185-.658c.477-.219.708-.428.787-.556.028-.045.028-.065.028-.072 0-.01-.002-.076-.079-.205-.777-1.316-2.297-2.509-3.92-2.509-1.624 0-3.144 1.193-3.922 2.509",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.75 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.146 19.445a1 1 0 1 1-1.792-.89 6.3 6.3 0 0 1 1.623-2.052c.7-.568 1.597-1.003 2.62-1.003a1 1 0 1 1 0 2c-.44 0-.906.188-1.358.555a4.3 4.3 0 0 0-1.093 1.39"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.06 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.15 18.555a1 1 0 0 1-1.791.89 4.3 4.3 0 0 0-1.093-1.39c-.452-.367-.918-.555-1.359-.555a1 1 0 0 1 0-2c1.024 0 1.92.435 2.62 1.003a6.3 6.3 0 0 1 1.623 2.052"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserGroupIcon);
module.exports = ForwardRef;