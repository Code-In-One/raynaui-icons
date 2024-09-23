const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M9.5 7a3 3 0 0 1 5.975-.39l-1.682 1.683a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0-1.414-1.414L17.084 5A5.001 5.001 0 0 0 7.5 7v13a1 1 0 1 0 2 0z" })
  ]))
}