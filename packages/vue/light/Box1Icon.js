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
      d: "M5.25 2.5a3 3 0 0 0-3 3v2a2 2 0 0 0 1 1.732V17.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9.232a2 2 0 0 0 1-1.732v-2a3 3 0 0 0-3-3zm2 17a2 2 0 0 1-2-2v-8h14v8a2 2 0 0 1-2 2zm12-15a1 1 0 0 1 1 1v2h-16v-2a1 1 0 0 1 1-1z",
      "clip-rule": "evenodd"
    })
  ]))
}