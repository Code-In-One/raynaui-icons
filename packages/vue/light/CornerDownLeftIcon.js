const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M3.543 17.207a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L6.664 15.5H8.25c6.627 0 12-5.373 12-12a1 1 0 1 1 2 0c0 7.732-6.268 14-14 14H6.664l2.293 2.293a1 1 0 1 1-1.414 1.414z" })
  ]))
}