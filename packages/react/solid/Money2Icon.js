const React = require("react");
function Money2Icon({
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
    d: "M13.5 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M22.5 9.193v7.988c0 1.585-1.232 2.894-2.815 2.942-.95.03-2.056.05-3.185.046-.8-.004-2.957-.524-4.863-.984-1.381-.334-2.631-.635-3.137-.685a232 232 0 0 0-3.168-.29C3.745 18.077 2.5 16.753 2.5 15.16V7.169c0-1.722 1.444-3.078 3.159-2.931q1.198.103 2.841.262c.506.05 1.756.351 3.137.685 1.906.46 4.062.98 4.863.984.984.004 1.95-.012 2.81-.035 1.73-.047 3.19 1.329 3.19 3.059M5.591 6.417a1 1 0 0 0-.174 1.992l1.992.174a1 1 0 1 0 .174-1.992zm10.917 1.909a1 1 0 0 1 1.083-.91l1.992.175a1 1 0 0 1-.174 1.992l-1.992-.174a1 1 0 0 1-.91-1.083M5.59 15.004a1 1 0 1 0-.174 1.992l1.992.175a1 1 0 0 0 .174-1.993zm10.917 2.322a1 1 0 0 1 1.083-.91l1.992.175a1 1 0 0 1-.174 1.992l-1.992-.174a1 1 0 0 1-.91-1.083M12.5 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Money2Icon);
module.exports = ForwardRef;