const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M16.833 13.37a2 2 0 0 0 0-2.74L9.478 2.814a1 1 0 1 0-1.456 1.37L15.377 12l-7.355 7.815a1 1 0 0 0 1.456 1.37z" })
  ]))
}