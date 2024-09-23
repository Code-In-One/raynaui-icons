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
      d: "M10.5 1a1 1 0 0 0 0 2h1v2.06a8.251 8.251 0 0 0 1 16.44 8.25 8.25 0 0 0 1-16.44V3h1a1 1 0 1 0 0-2zM12 8a1 1 0 0 1 1 1v4h2a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1",
      "clip-rule": "evenodd"
    })
  ]))
}