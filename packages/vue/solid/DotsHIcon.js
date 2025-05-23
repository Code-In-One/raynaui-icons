const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M2 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M20 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4" })
  ]))
}