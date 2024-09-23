const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M21.5 12a9 9 0 0 1-11.233 8.72l-5.604-.7a1.125 1.125 0 0 1-.97-1.3l.343-2.058q.026-.162.006-.325l-.263-2.104A9 9 0 1 1 21.5 12m-5.25 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m-3.75 1.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M6.25 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0",
      "clip-rule": "evenodd"
    })
  ]))
}