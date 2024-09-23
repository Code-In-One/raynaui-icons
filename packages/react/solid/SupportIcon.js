const React = require("react");
function SupportIcon({
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
    d: "M16.848 3.354c-.503-.101-.948-.19-1.495.113-.877.487-1.175 1.518-.868 2.443.478 1.44 2.518 2.46 3.464 2.865a.86.86 0 0 0 .896-.132c.791-.66 2.452-2.222 2.496-3.739.028-.974-.553-1.876-1.532-2.09-.612-.134-1.012.08-1.465.32-.168.09-.343.183-.539.263a.76.76 0 0 1-.365.054 6 6 0 0 1-.592-.098M5.5 9h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1c.479-.32 1.594.021 2.99.448 2.101.642 4.841 1.478 7.01.552 3.311-1.415 7.2-4.8 6-6-.655-.655-2.167-.166-3.871.384-1.487.48-3.12 1.008-4.457.864-.794-.085-.624-.967.147-1.175 1.88-.507 3.682-1.21 4.113-1.927a.5.5 0 0 0 .061-.308c-.063-.754-.592-1.305-1.993-.838-1.35.45-2.477.132-3.557-.172-.817-.23-1.607-.453-2.443-.328a10 10 0 0 0-3.546 1.217.94.94 0 0 0-.454.817V10a1 1 0 0 0-1-1"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SupportIcon);
module.exports = ForwardRef;