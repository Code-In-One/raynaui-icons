const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M3 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1.667L7.5 7h6.634A1 1 0 0 1 15 5.5h3.5a1 1 0 1 1 0 2h-.965l-.452.679 1.883 7.063a1 1 0 0 1-1.38 1.168L8 12.053V15.5a1 1 0 1 1-2 0V8.333L4.7 6.6a1 1 0 0 1-.2-.6V5H4a1 1 0 0 1-1-1m5 5v.856l8.489 3.859L15.232 9z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M5.25 12.353a4.501 4.501 0 1 0 5.603 1.82l-2.103-.955V15.5a1.75 1.75 0 1 1-3.5 0zM13.5 16.5q.001-.552.127-1.065l3.649 1.658a1.75 1.75 0 0 0 2.415-2.044l-.79-2.959A4.502 4.502 0 0 1 18 21a4.5 4.5 0 0 1-4.5-4.5" })
  ]))
}