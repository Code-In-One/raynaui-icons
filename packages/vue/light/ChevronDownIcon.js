const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m3.565 8.728 7.814 7.355a2 2 0 0 0 2.742 0l7.814-7.355a1 1 0 0 0-1.37-1.456l-7.815 7.355-7.815-7.355a1 1 0 0 0-1.37 1.456" })
  ]))
}