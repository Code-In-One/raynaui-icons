const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M3.043 12.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L6.164 11H21.75a1 1 0 1 1 0 2H6.164l2.293 2.293a1 1 0 1 1-1.414 1.414z" })
  ]))
}