const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.75 6a1 1 0 0 0-1 1H6.482a2 2 0 1 0 0 2h1.904a10 10 0 0 0-5.636 9v1a1 1 0 1 0 2 0v-1a8 8 0 1 1 16 0v1a1 1 0 1 0 2 0v-1a10 10 0 0 0-5.636-9h2.904a2 2 0 0 0 3.732-1 2 2 0 0 0-3.732-1H14.75a1 1 0 0 0-1-1z" })
  ]))
}