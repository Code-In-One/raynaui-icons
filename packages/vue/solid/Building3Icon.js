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
      d: "M18.5 19h2a1 1 0 1 1 0 2h-16a1 1 0 1 1 0-2h2V9.535a1 1 0 0 1 .445-.832l5-3.333a1 1 0 0 1 1.11 0l5 3.333a1 1 0 0 1 .445.832zm-7 0h2v-2a1 1 0 1 0-2 0zm4-4a1 1 0 0 0 0-2h-1a1 1 0 1 0 0 2zm1-4a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1m-6 4a1 1 0 0 0 0-2h-1a1 1 0 1 0 0 2zm1-4a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1",
      "clip-rule": "evenodd"
    })
  ]))
}