const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M5.5 3.5h14a3 3 0 0 1 3 3V7h-20v-.5a3 3 0 0 1 3-3" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.5 9v8.5a3 3 0 0 0 3 3h11.341a3 3 0 0 1-1.049-3.793A1 1 0 0 1 16.5 15h6V9zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M18.5 17a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" })
  ]))
}