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
      d: "M6.5 10V7a6 6 0 1 1 12 0v3a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3m2-3a4 4 0 0 1 8 0v3h-8zm4 7a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1",
      "clip-rule": "evenodd"
    })
  ]))
}