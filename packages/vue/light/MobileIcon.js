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
      d: "M15.25 1.5a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-13a4 4 0 0 1 4-4zm-8 4a2 2 0 0 1 2-2h.585a1.5 1.5 0 0 0 1.415 1h2a1.5 1.5 0 0 0 1.415-1h.585a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z",
      "clip-rule": "evenodd"
    })
  ]))
}