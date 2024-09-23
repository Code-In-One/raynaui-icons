const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m5.076 6.632 3.75-.536a3 3 0 0 0 1.24-.473l3.88-2.586a1 1 0 0 1 1.554.832v16.263a1 1 0 0 1-1.555.832l-3.879-2.586a3 3 0 0 0-1.24-.474l-3.75-.536a3 3 0 0 1-2.576-2.97V9.602a3 3 0 0 1 2.576-2.97M21.743 11.829l.707-.708a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.708a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 0 0 1.415-1.414z" })
  ]))
}