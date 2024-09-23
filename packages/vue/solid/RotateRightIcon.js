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
      d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm11.6 3a1 1 0 1 1 2 0v2.8a1 1 0 0 1-1 1h-2.8a1 1 0 1 1 0-2h.196A6 6 0 1 0 18.5 12a1 1 0 1 1 2 0 8 8 0 1 1-3.4-6.545z",
      "clip-rule": "evenodd"
    })
  ]))
}