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
      d: "M19.5 19h2a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h2.5V9.58a1 1 0 0 1 .504-.868l6-3.428a1 1 0 0 1 .992 0l6 3.428a1 1 0 0 1 .504.868zm-8 0h2v-1a1 1 0 1 0-2 0zm5-9a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1m-6 4a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zm1-4a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1m4 4a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zm-4 2a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1m4 1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2z",
      "clip-rule": "evenodd"
    })
  ]))
}