const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M7.35 4a1 1 0 1 0-2 0v3.2a1 1 0 0 0 1 1h3.2a1 1 0 1 0 0-2h-.72A7 7 0 1 1 5.75 12a1 1 0 1 0-2 0 9 9 0 1 0 3.6-7.2z" })
  ]))
}