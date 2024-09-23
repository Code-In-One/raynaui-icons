const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M20.687 7.227a1 1 0 1 0-1.374-1.454L8.353 16.125 4.687 12.66a1 1 0 1 0-1.374 1.454l4.354 4.112a1 1 0 0 0 1.373 0z",
      "clip-rule": "evenodd"
    })
  ]))
}