const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M5.5 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3M16.5 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3" })
  ]))
}