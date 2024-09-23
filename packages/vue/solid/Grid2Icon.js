const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M14.5 14.5v5A1.5 1.5 0 0 0 16 21h4a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 20 13h-4a1.5 1.5 0 0 0-1.5 1.5M3.5 14.5v5A1.5 1.5 0 0 0 5 21h4a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9 13H5a1.5 1.5 0 0 0-1.5 1.5M3.5 4.5v4A1.5 1.5 0 0 0 5 10h15a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 20 3H5a1.5 1.5 0 0 0-1.5 1.5" })
  ]))
}