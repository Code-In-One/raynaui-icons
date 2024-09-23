const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.314 3.919A1 1 0 0 0 6.686 5.08l4.814 6.74V12h-3a1 1 0 1 0 0 2h3v.5h-3a1 1 0 1 0 0 2h3v4a1 1 0 1 0 2 0v-4h3a1 1 0 1 0 0-2h-3V14h3a1 1 0 1 0 0-2h-3v-.18l4.814-6.74a1 1 0 0 0-1.628-1.162L12.5 9.779z" })
  ]))
}