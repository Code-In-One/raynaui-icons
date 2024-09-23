const React = require("react");
function CallCrossIcon({
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
    d: "M4.432 3.343c-.738.739-1.243 1.845-.955 3.044.441 1.837 1.77 5.186 5.733 9.149s7.312 5.292 9.15 5.733c1.198.288 2.304-.217 3.043-.955l.535-.536a4 4 0 0 0 0-5.657l-.929-.928a4 4 0 0 0-4.805-.65l-.097.056c-.641.364-1.378.335-1.9-.043-.421-.305-.824-.626-1.108-.91-.283-.283-.604-.686-.909-1.107-.378-.522-.408-1.259-.043-1.9l.055-.097a4 4 0 0 0-.649-4.805l-.929-.93a4 4 0 0 0-5.656 0zm.99 2.576c-.084-.348.037-.775.424-1.162l.536-.535a2 2 0 0 1 2.828 0l.93.929a2 2 0 0 1 .323 2.403l-.054.096c-.705 1.24-.73 2.83.16 4.062.328.452.721.954 1.116 1.349s.897.788 1.35 1.115c1.23.89 2.821.866 4.06.161l.097-.055a2 2 0 0 1 2.403.325l.929.929a2 2 0 0 1 0 2.828l-.536.536c-.386.386-.813.508-1.162.425-1.468-.354-4.492-1.494-8.202-5.204S5.774 7.388 5.421 5.92",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.042 4.879a1 1 0 1 0-1.414 1.414l.707.707-.707.707a1 1 0 1 0 1.414 1.414l.707-.707.707.707a1 1 0 1 0 1.415-1.414L19.163 7l.707-.707a1 1 0 0 0-1.414-1.414l-.707.707z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CallCrossIcon);
module.exports = ForwardRef;