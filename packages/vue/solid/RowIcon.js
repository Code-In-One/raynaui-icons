const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M21 20v-5a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 15v5a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 20M19.5 2.5h-15A1.5 1.5 0 0 0 3 4v5a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 9V4a1.5 1.5 0 0 0-1.5-1.5" }),
    _createElementVNode("path", { d: "M21 20v-5a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 15v5a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 20M19.5 2.5h-15A1.5 1.5 0 0 0 3 4v5a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 9V4a1.5 1.5 0 0 0-1.5-1.5" })
  ]))
}