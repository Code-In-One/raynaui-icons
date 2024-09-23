const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M7.3 5.636A1 1 0 1 0 5.888 7.05l4.95 4.95-4.95 4.95A1 1 0 1 0 7.3 18.364l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414L13.665 12l4.95-4.95A1 1 0 0 0 17.2 5.636l-4.95 4.95z" })
  ]))
}