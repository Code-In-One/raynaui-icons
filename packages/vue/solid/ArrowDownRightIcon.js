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
      d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm14.364 16.364a1 1 0 0 1-1 1h-5.657a1 1 0 0 1 0-2h3.243L5.429 6.344a1 1 0 0 1 1.414-1.415l11.021 11.02v-3.242a1 1 0 1 1 2 0z",
      "clip-rule": "evenodd"
    })
  ]))
}