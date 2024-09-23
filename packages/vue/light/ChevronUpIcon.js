const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.38 7.917a2 2 0 0 1 2.74 0l7.815 7.355a1 1 0 0 1-1.37 1.456L12.75 9.373l-7.815 7.355a1 1 0 0 1-1.37-1.456z" })
  ]))
}