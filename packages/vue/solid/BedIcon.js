const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M3.5 5h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1M3.5 10h18a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1 1 1 0 1 1-2 0h-14a1 1 0 1 1-2 0 1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1" })
  ]))
}