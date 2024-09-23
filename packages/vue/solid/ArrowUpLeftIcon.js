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
      d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-.364 3.636a1 1 0 0 1 1-1h5.657a1 1 0 1 1 0 2H8.55l11.021 11.02a1 1 0 0 1-1.414 1.415L7.136 8.051v3.242a1 1 0 1 1-2 0z",
      "clip-rule": "evenodd"
    })
  ]))
}